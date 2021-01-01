package building

import screeps.api.*
import screeps.api.structures.StructureExtension

fun buildRoad(from : RoomPosition, to : RoomPosition, room : Room) =
    from.findPathTo(to).forEach {
        room.createConstructionSite(it.x,it.y, STRUCTURE_ROAD)
    }

fun ensureCriticalRoadsExists(room : Room) =
    room.also(::buildRoadBetweenSpawnAndSources)
        .also(::buildRoadBetweenSourcesAndController)

fun buildRoadBetweenSourcesAndController(room : Room) =
    room.find(FIND_SOURCES).forEach { source ->
        room.controller?.let { buildRoad(it.pos,source.pos,room) }
    }

fun buildRoadBetweenSpawnAndSources(room : Room) =
    room.find(FIND_SOURCES).forEach { source ->
        room.find(FIND_MY_SPAWNS).forEach { buildRoad(it.pos,source.pos,room) }
    }

fun connectToClosestRoad(pos : RoomPosition, room : Room) =
    pos.findClosestByPath(
        room.find(FIND_STRUCTURES)
            .filter { it.structureType == STRUCTURE_ROAD }
            .toTypedArray()
    )?.let { pos.findPathTo(it.pos) }
    ?.forEach { room.createConstructionSite(it.x,it.y, STRUCTURE_ROAD) }
package decisions

import data.Role
import screeps.api.*
import screeps.api.structures.Structure
import screeps.api.structures.StructureSpawn
import screeps.utils.unsafe.jsObject
import starter.*

//TODO: as for now we dont account for slower worker speed when returning with resources
//just ensure that there is enough harvesters that one (almost) allways is harvesting
fun determineHarvestersNeeded(room: Room, harvestSpeed : Int = 5) = room.find(FIND_SOURCES)
        .map {source ->
            source.pos.findClosestByPath(FIND_MY_SPAWNS)
                    ?.pos?.findPathTo(source)
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }

fun determineBuildersNeeded(room: Room, harvestSpeed : Int = 5) = room.find(FIND_SOURCES)
        .map {source ->
            source.pos.findClosestByPath(FIND_MY_SPAWNS)//assume construction will mainly happen close to spawn
                    ?.pos?.findPathTo(source)//diregard construction speed for now
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }

fun determineUpgradersNeeded(room: Room, harvestSpeed : Int = 5) = room.find(FIND_SOURCES)
        .map {source ->
                    room.controller?.pos?.findPathTo(source)
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }


private fun ensureWorkersNeededAreKnown(room : Room) {
    if(room.memory.buildersNeeded.isEmpty()) room.memory.buildersNeeded = determineBuildersNeeded(room)
    if(room.memory.harvestersNeeded.isEmpty()) room.memory.harvestersNeeded = determineHarvestersNeeded(room)
    if(room.memory.upgradersNeeded.isEmpty()) room.memory.upgradersNeeded = determineUpgradersNeeded(room)
    if(room.memory.repairersNeeded.isEmpty()) room.memory.repairersNeeded = room.find(FIND_SOURCES).map { 1 }
}


fun spawnCreeps(
        creeps: Array<Creep>,
        spawn: StructureSpawn
) {
    ensureWorkersNeededAreKnown(spawn.room)


    val body = arrayOf<BodyPartConstant>(WORK, CARRY, MOVE)

    if (spawn.spawning != null || spawn.room.energyAvailable < body.sumBy { BODYPART_COST[it] ?: 0 }) {
        return
    }

    val role: Role = when {
        creeps.count { it.memory.role == Role.HARVESTER } < 2 -> Role.HARVESTER

        creeps.none { it.memory.role == Role.UPGRADER } -> Role.UPGRADER

        spawn.room.find(FIND_MY_CONSTRUCTION_SITES).isNotEmpty() &&
                creeps.count { it.memory.role == Role.BUILDER } < 2 -> Role.BUILDER

        else -> return
    }

    val newName = "${role::class.simpleName}_${Game.time}"
    val code = spawn.spawnCreep(body, newName, options {
        memory = jsObject<CreepMemory> {
            this.role = role
            this.resourceIndex = 0
        }
    })

    when (code) {
        OK -> console.log("spawning $newName with body $body")
        ERR_BUSY, ERR_NOT_ENOUGH_ENERGY -> run { } // do nothing
        else -> console.log("unhandled error code $code")
    }
}
package decisions

import screeps.api.FIND_MY_SPAWNS
import screeps.api.FIND_SOURCES
import screeps.api.NavigationTarget
import screeps.api.Room
import screeps.api.structures.Structure

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
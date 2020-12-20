package starter

import screeps.api.*
import screeps.api.structures.Structure
import screeps.api.structures.StructureController
import utility.closestMineral
import utility.closestSource
import utility.harvest


enum class Role {
    UNASSIGNED,
    HARVESTER,
    BUILDER,
    UPGRADER,
    REPAIRER
}

fun Creep.upgrade(controller: StructureController) {
    if (store[RESOURCE_ENERGY] == 0) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    } else {
        if (upgradeController(controller) == ERR_NOT_IN_RANGE) {
            moveTo(controller.pos)
        }
    }
}

fun Creep.repair(controller: Structure) {
    if (store[RESOURCE_ENERGY] == 0) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    } else {
        if (repair(controller) == ERR_NOT_IN_RANGE) {
            moveTo(controller.pos)
        }
    }
}

fun Creep.pause() {
    if (memory.pause < 10) {
        //blink slowly
        if (memory.pause % 3 != 0) say("\uD83D\uDEAC")
        memory.pause++
    } else {
        memory.pause = 0
        memory.role = Role.HARVESTER
    }
}

fun Creep.build(assignedRoom: Room = this.room) {
    if (memory.building && store[RESOURCE_ENERGY] == 0) {
        memory.building = false
        say("🔄 harvest")
    }
    if (!memory.building && store[RESOURCE_ENERGY] == store.getCapacity()) {
        memory.building = true
        say("🚧 build")
    }

    if (memory.building) {
        val targets = assignedRoom.find(FIND_MY_CONSTRUCTION_SITES)
        if (targets.isNotEmpty()) {
            if (build(targets[memory.resourceIndex]) == ERR_NOT_IN_RANGE) {
                moveTo(targets[memory.resourceIndex].pos)
            }
        }
    } else {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    }
}


fun Creep.harvest(fromRoom: Room = this.room, toRoom: Room = this.room) {
    if (store[RESOURCE_ENERGY] < store.getCapacity()) {
        val sources = fromRoom.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(sources[0].pos)) {
                OK -> {}
                else -> console.log("creep is unable to move due to: $error")
            }
        }
    } else {
        val target = toRoom.find(FIND_MY_STRUCTURES)
                .asSequence()
                .filter { (it.structureType == STRUCTURE_EXTENSION || it.structureType == STRUCTURE_SPAWN) }
                .map { it.unsafeCast<StoreOwner>() }
                .filter { it.store[RESOURCE_ENERGY] < it.store.getCapacity() }
                .firstOrNull()

        if (target != null) {
            if (transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                when(val error = moveTo(target.pos)) {
                    OK -> {}
                    else -> console.log("creep is unable to move due to: $error")
                }
            }
        }
    }
}
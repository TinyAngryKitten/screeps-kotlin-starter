package creeps

import data.Role
import memory.building
import memory.resourceIndex
import memory.temporaryTask
import screeps.api.*

fun Creep.build(assignedRoom: Room = this.room) {
    if( !buildingIsPossible(assignedRoom)) return doTemporaryTask()
    memory.temporaryTask = Role.UNASSIGNED

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

fun Creep.buildingIsPossible(room: Room) = room.find(FIND_CONSTRUCTION_SITES).isNotEmpty()

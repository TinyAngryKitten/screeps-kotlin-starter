package creeps

import memory.building
import memory.resourceIndex
import screeps.api.*
import screeps.api.structures.StructureController

fun Creep.upgrade(controller: StructureController?) =
    performPrimaryTaskIfPossible({upgrade(controller!!)},controller != null)

fun Creep.upgrade(controller: StructureController) {
    if(store[RESOURCE_ENERGY] == 0 && memory.building) {
        memory.building = false
        say("collecting energy")
    } else if(store[RESOURCE_ENERGY] == store.getCapacity() && !memory.building) {
        memory.building = true
        say("returning with energy")
    }

    if (!memory.building) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[memory.resourceIndex]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[memory.resourceIndex].pos)
        }
    } else if(upgradeController(controller) == ERR_NOT_IN_RANGE) moveTo(controller.pos)
}
package creeps

import screeps.api.*
import screeps.api.structures.StructureController

fun Creep.upgrade(controller: StructureController) {
    if (store[RESOURCE_ENERGY] < store.getCapacity() && upgradeController(controller) == ERR_NOT_IN_RANGE) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    } else moveTo(controller.pos)
}
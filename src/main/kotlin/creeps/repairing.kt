package creeps

import data.Role
import screeps.api.*
import screeps.api.structures.Structure
import starter.temporaryTask

fun Creep.repair(structToRepair: Structure? = null) {
    val struct = structToRepair
            ?: findStructuresInNeedOfRepair(room).firstOrNull()
            ?: return doTemporaryTask()

    memory.temporaryTask = Role.UNASSIGNED

    if (store[RESOURCE_ENERGY] == 0) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    } else {
        if (repair(struct) == ERR_NOT_IN_RANGE) {
            moveTo(struct.pos)
        }
    }
}

private fun findStructuresInNeedOfRepair(room: Room) = room.find(FIND_STRUCTURES).asSequence().filter {
    (it.my || it.owner == null) && it.hits < it.hitsMax
}

fun Creep.repairIsPossible(room : Room) = findStructuresInNeedOfRepair(room).any()
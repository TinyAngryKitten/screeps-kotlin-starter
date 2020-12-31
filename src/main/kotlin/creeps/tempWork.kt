package creeps

import data.Role
import screeps.api.Creep
import memory.temporaryTask

fun Creep.doTemporaryTask() {
    if(memory.temporaryTask == Role.UNASSIGNED) memory.temporaryTask = when {
        harvestIsPossible(closestEnergyStoreWithSpace(room)) -> Role.HARVESTER
        buildingIsPossible(room) -> Role.BUILDER
        repairIsPossible(room) -> Role.REPAIRER
        else -> Role.UPGRADER
    }

    when(memory.temporaryTask){
        Role.HARVESTER -> harvest()
        Role.BUILDER-> build()
        Role.REPAIRER-> repair()
        else -> room.controller?.let(::upgrade)
    }
}

fun Creep.performPrimaryTaskIfPossible(primaryTask : () -> Unit, condition : Boolean) =
    if(condition) {
        memory.temporaryTask = Role.UNASSIGNED
        primaryTask()
    } else doTemporaryTask()

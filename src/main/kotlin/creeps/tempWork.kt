package creeps

import data.Role
import screeps.api.Creep
import starter.temporaryTask

fun Creep.doTemporaryTask() {
    if(memory.temporaryTask == Role.UNASSIGNED) memory.temporaryTask = when {
        harvestIsPossible(closestEnergyStoreWithSpace(room)) -> Role.HARVESTER
        buildingIsPossible(room) -> Role.BUILDER
        repairIsPossible(room) -> Role.REPAIRER
        else -> Role.UPGRADER
    }
    say("temp: ${memory.temporaryTask}")

    when(memory.temporaryTask){
        Role.HARVESTER -> harvest()
        Role.BUILDER-> build()
        Role.REPAIRER-> repair()
        else -> room.controller?.let(::upgrade)
    }
}
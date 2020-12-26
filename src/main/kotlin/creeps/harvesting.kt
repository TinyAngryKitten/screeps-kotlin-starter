package creeps

import data.Role
import screeps.api.*
import memory.resourceIndex
import memory.temporaryTask

fun Creep.harvestIsPossible(storeOwner : StoreOwner?) : Boolean =
        storeOwner != null && storeOwner.store.getFreeCapacity(RESOURCE_ENERGY) > 0

fun Creep.closestEnergyStoreWithSpace(room: Room) : StoreOwner? = room.find(FIND_MY_STRUCTURES)
        .asSequence()
        .filter { (it.structureType == STRUCTURE_EXTENSION || it.structureType == STRUCTURE_SPAWN) }
        .map { it.unsafeCast<StoreOwner>() }
        .filter { it.store.getFreeCapacity(RESOURCE_ENERGY) > 0 }
        .firstOrNull() ?: console.log("no energy store found").let { null }

fun Creep.harvest(fromRoom: Room = this.room, toRoom: Room = this.room) {
    console.log("harvesting...")
    val target = closestEnergyStoreWithSpace(toRoom)

    if(target == null || !harvestIsPossible(target)) return doTemporaryTask()
    console.log("should be possible...")
    memory.temporaryTask = Role.UNASSIGNED

    if (store[RESOURCE_ENERGY] < store.getCapacity()) {
        console.log("should harvest...")
        val sources = fromRoom.find(FIND_SOURCES)
        if (harvest(sources[memory.resourceIndex]) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(sources[memory.resourceIndex].pos)) {
                OK -> {console.log("moving to resource...")}
                else -> console.log("$name is unable to move due to: $error")
            }
        }
    } else {
        if (transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            console.log("storing...")
            when(val error = moveTo(target.pos)) {
                OK -> {}
                else -> console.log("$name is unable to move due to: $error")
            }
        }
    }
}
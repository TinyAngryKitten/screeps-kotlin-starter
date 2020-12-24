package creeps

import data.Role
import screeps.api.*
import starter.resourceIndex
import starter.temporaryTask

fun Creep.harvestIsPossible(storeOwner : StoreOwner?) : Boolean =
        storeOwner != null && storeOwner.store.getFreeCapacity(RESOURCE_ENERGY) > store.getCapacity()

fun Creep.closestEnergyStoreWithSpace(room: Room) : StoreOwner? = room.find(FIND_MY_STRUCTURES)
        .asSequence()
        .filter { (it.structureType == STRUCTURE_EXTENSION || it.structureType == STRUCTURE_SPAWN) }
        .map { it.unsafeCast<StoreOwner>() }
        .filter { it.store.getFreeCapacity(RESOURCE_ENERGY) >= store.getCapacity() }
        .firstOrNull()

fun Creep.harvest(fromRoom: Room = this.room, toRoom: Room = this.room) {
    val target = closestEnergyStoreWithSpace(toRoom)

    if(target == null || !harvestIsPossible(target)) return doTemporaryTask()
    memory.temporaryTask = Role.UNASSIGNED

    if (store[RESOURCE_ENERGY] < store.getCapacity()) {
        val sources = fromRoom.find(FIND_SOURCES)
        if (harvest(sources[memory.resourceIndex]) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(sources[memory.resourceIndex].pos)) {
                OK -> {}
                else -> console.log("$name is unable to move due to: $error")
            }
        }
    } else {
        if (transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(target.pos)) {
                OK -> {}
                else -> console.log("$name is unable to move due to: $error")
            }
        }
    }
}
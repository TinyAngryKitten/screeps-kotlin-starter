package starter

import screeps.api.*
import screeps.api.structures.Structure
import screeps.api.structures.StructureController
import screeps.api.structures.StructureSpawn
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
    if (store[RESOURCE_ENERGY] < store.getCapacity() && upgradeController(controller) == ERR_NOT_IN_RANGE) {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    } else moveTo(controller.pos)
}

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

private fun findStructuresInNeedOfRepair(room: Room) = room.find(FIND_STRUCTURES).asSequence().filter {
    (it.my || it.owner == null) && it.hits < it.hitsMax
}

fun Creep.repairIsPossible(room : Room) = findStructuresInNeedOfRepair(room).any()

fun Creep.buildingIsPossible(room: Room) = room.find(FIND_CONSTRUCTION_SITES).isNotEmpty()

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
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(sources[0].pos)) {
                OK -> {}
                else -> console.log("creep is unable to move due to: $error")
            }
        }
    } else {
        if (transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            when(val error = moveTo(target.pos)) {
                OK -> {}
                else -> console.log("creep is unable to move due to: $error")
            }
        }
    }
}
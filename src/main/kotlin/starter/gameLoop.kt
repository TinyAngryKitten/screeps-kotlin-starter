package starter


import building.buildExtensionsCloseToController
import building.ensureCriticalRoadsExists
import creeps.build
import creeps.harvest
import creeps.repair
import creeps.upgrade
import data.Role
import decisions.defendRoom
import decisions.spawnCreeps
import memory.criticalRoadsBuilt
import memory.numberOfCreeps
import memory.role
import screeps.api.*
import screeps.api.structures.StructureSpawn
import screeps.utils.isEmpty
import screeps.utils.unsafe.delete

fun gameLoop() {
    console.log("look starting")
    val mainSpawn: StructureSpawn = Game.spawns.values.firstOrNull() ?: return console.log("No spawn found, exiting...")

    //delete memories of creeps that have passed away
    houseKeeping(Game.creeps)

    // just an example of how to use room memory
    mainSpawn.room.memory.numberOfCreeps = mainSpawn.room.find(FIND_CREEPS).count()
    console.log("spawning...")

    //make sure we have at least some creeps
    spawnCreeps(Game.creeps.values, mainSpawn)

    console.log("building...")
    val controller = mainSpawn.room.controller
    controller?.also(::buildExtensionsCloseToController)
    ensureRoadsAreBuilt(mainSpawn.room)
    defendRoom(mainSpawn.room)

    for ((_, creep) in Game.creeps) {
        console.log("$creep")
        when (creep.memory.role) {
            Role.HARVESTER -> creep.harvest()
            Role.BUILDER -> creep.build()
            Role.UPGRADER -> creep.upgrade(controller)
            Role.REPAIRER -> creep.repair()
            else -> { creep.memory.role = Role.HARVESTER }
        }
    }
}

private fun ensureRoadsAreBuilt(room : Room) {
    if(!room.memory.criticalRoadsBuilt) {
        ensureCriticalRoadsExists(room)
        room.memory.criticalRoadsBuilt = true
    }
}

private fun houseKeeping(creeps: Record<String, Creep>) {
    if (Game.creeps.isEmpty()) return  // this is needed because Memory.creeps is undefined

    for ((creepName, _) in Memory.creeps) {
        if (creeps[creepName] == null) {
            console.log("deleting obsolete memory entry for creep $creepName")
            delete(Memory.creeps[creepName])
        }
    }
}
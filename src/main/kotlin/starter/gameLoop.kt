package starter


import building.buildExtensionsCloseToController
import creeps.build
import creeps.harvest
import creeps.upgrade
import data.Role
import decisions.determineBuildersNeeded
import decisions.determineHarvestersNeeded
import decisions.determineUpgradersNeeded
import decisions.spawnCreeps
import screeps.api.*
import screeps.api.structures.StructureSpawn
import screeps.utils.isEmpty
import screeps.utils.memory.memory
import screeps.utils.unsafe.delete
import screeps.utils.unsafe.jsObject

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
    controller?.let(::buildExtensionsCloseToController)

    console.log("performing role actions...")
    for ((_, creep) in Game.creeps) {
        when (creep.memory.role) {
            Role.HARVESTER -> creep.harvest()
            Role.BUILDER -> creep.build()
            Role.UPGRADER -> controller?.let { creep.upgrade(it)}
            else -> {}
        }
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
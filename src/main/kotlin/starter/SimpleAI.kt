package starter


import building.buildExtensionsCloseToController
import screeps.api.*
import screeps.api.structures.StructureSpawn
import screeps.utils.isEmpty
import screeps.utils.unsafe.delete
import screeps.utils.unsafe.jsObject

fun gameLoop() {
    val mainSpawn: StructureSpawn = Game.spawns.values.firstOrNull() ?: return

    //delete memories of creeps that have passed away
    houseKeeping(Game.creeps)

    // just an example of how to use room memory
    mainSpawn.room.memory.numberOfCreeps = mainSpawn.room.find(FIND_CREEPS).count()

    //make sure we have at least some creeps
    spawnCreeps(Game.creeps.values, mainSpawn)

    val controller = mainSpawn.room.controller
    controller?.let(::buildExtensionsCloseToController)

    for ((_, creep) in Game.creeps) {
        when (creep.memory.role) {
            Role.HARVESTER -> creep.harvest()
            Role.BUILDER -> creep.build()
            Role.UPGRADER -> controller?.let { creep.upgrade(it)}
            else -> {}
        }
    }
}

private fun spawnCreeps(
        creeps: Array<Creep>,
        spawn: StructureSpawn
) {

    val body = arrayOf<BodyPartConstant>(WORK, CARRY, MOVE)

    if (spawn.spawning != null || spawn.room.energyAvailable < body.sumBy { BODYPART_COST[it] ?: 0 }) {
        return
    }

    val role: Role = when {
        creeps.count { it.memory.role == Role.HARVESTER } < 2 -> Role.HARVESTER

        creeps.none { it.memory.role == Role.UPGRADER } -> Role.UPGRADER

        spawn.room.find(FIND_MY_CONSTRUCTION_SITES).isNotEmpty() &&
                creeps.count { it.memory.role == Role.BUILDER } < 2 -> Role.BUILDER

        else -> return
    }

    val newName = "${role.name}_${Game.time}"
    val code = spawn.spawnCreep(body, newName, options {
        memory = jsObject<CreepMemory> {
            this.role = role
            this.resourceIndex = 0
        }
    })

    when (code) {
        OK -> console.log("spawning $newName with body $body")
        ERR_BUSY, ERR_NOT_ENOUGH_ENERGY -> run { } // do nothing
        else -> console.log("unhandled error code $code")
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
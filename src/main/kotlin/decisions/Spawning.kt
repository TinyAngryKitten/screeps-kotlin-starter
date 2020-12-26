package decisions

import data.Role
import memory.*
import screeps.api.*
import screeps.api.structures.StructureSpawn
import screeps.utils.unsafe.jsObject
import starter.*

//TODO: determine how many workers can harvest a source at once
//TODO: as for now we dont account for slower worker speed when returning with resources
//just ensure that there is enough harvesters that one (almost) allways is harvesting
fun determineHarvestersNeeded(room: Room, harvestSpeed : Int = 5) = listOf(3,3) /*room.find(FIND_SOURCES)
        .map {source ->
            source.pos.findClosestByPath(FIND_MY_SPAWNS)
                    ?.pos?.findPathTo(source)
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }*/

fun determineBuildersNeeded(room: Room, harvestSpeed : Int = 5) = listOf(1,2)/*room.find(FIND_SOURCES)
        .map {source ->
            source.pos.findClosestByPath(FIND_MY_SPAWNS)//assume construction will mainly happen close to spawn
                    ?.pos?.findPathTo(source)//diregard construction speed for now
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }*/

fun determineUpgradersNeeded(room: Room, harvestSpeed : Int = 5) = listOf(3,3) /* room.find(FIND_SOURCES)
        .map {source ->
                    room.controller?.pos?.findPathTo(source)
                    ?.size?.div(harvestSpeed)?.plus(1)//ensure at least one
                    ?: 0.also { console.log("No possible paths from $source to a spawn") }
        }*/


private fun ensureWorkersNeededAreKnown(room : Room) {
    console.log("performing temp work")
    if(room.memory.harvestersNeeded.isEmpty()) room.memory.harvestersNeeded =  determineHarvestersNeeded(room)
    if(room.memory.repairersNeeded.isEmpty()) room.memory.repairersNeeded = room.find(FIND_SOURCES).map { 1 }
    if(room.memory.buildersNeeded.isEmpty()) room.memory.buildersNeeded = determineBuildersNeeded(room)
    if(room.memory.upgradersNeeded.isEmpty()) room.memory.upgradersNeeded = determineUpgradersNeeded(room)
}

fun canSpawnNewCreep(spawn: StructureSpawn, body : Array<BodyPartConstant>) =
    spawn.spawning != null || spawn.room.energyAvailable < body.sumBy { BODYPART_COST[it] ?: 0 }

fun shouldBuildMoreWorkers(nrNeeded: Int, creeps: Array<Creep>, role : Role, forResource: Int) =
    nrNeeded > creeps.count { it.memory.role == role && it.memory.resourceIndex == forResource}

fun spawnCreeps(creeps: Array<Creep>, spawn: StructureSpawn) {
    val body = arrayOf<BodyPartConstant>(WORK, CARRY, MOVE)

    if(canSpawnNewCreep(spawn,body)) return
    ensureWorkersNeededAreKnown(spawn.room)

    val roomMemory = spawn.room.memory
    //reduce computation by moving this to run once each room
    loop@ for(i in spawn.room.find(FIND_SOURCES).indices) {
        val (role, source) = when {
            shouldBuildMoreWorkers(roomMemory.buildersNeeded[i], creeps, Role.BUILDER,i) -> Role.BUILDER to i
            shouldBuildMoreWorkers(roomMemory.harvestersNeeded[i], creeps, Role.HARVESTER,i) -> Role.HARVESTER to i
            shouldBuildMoreWorkers(roomMemory.upgradersNeeded[i], creeps, Role.UPGRADER,i) -> Role.UPGRADER to i
            shouldBuildMoreWorkers(roomMemory.repairersNeeded[i], creeps, Role.REPAIRER,i) -> Role.REPAIRER to i
            else -> continue@loop
        }
        return spawn(spawn,body,role,i)
    }

}

fun spawn(spawn: StructureSpawn, body: Array<BodyPartConstant>, role : Role, resource: Int) {
    val newName = "${role::class.simpleName}_${Game.time}"
    val code = spawn.spawnCreep(body, newName, options {
        memory = jsObject<CreepMemory> {
            this.role = role
            this.resourceIndex = resource
        }
    })

    when (code) {
        OK -> console.log("spawning $newName with body $body")
        ERR_BUSY, ERR_NOT_ENOUGH_ENERGY -> run { } // do nothing
        else -> console.log("unhandled error code $code")
    }
}
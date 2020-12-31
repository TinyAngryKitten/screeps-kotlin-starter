package creeps

import building.priority
import data.Role
import memory.building
import memory.resourceIndex
import memory.targetId
import memory.temporaryTask
import screeps.api.*

fun Creep.build(assignedRoom: Room = this.room,
                constructionSites: Array<ConstructionSite> = assignedRoom.find(FIND_MY_CONSTRUCTION_SITES)) {
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
        if(!siteIdIsValid(memory.targetId))
            memory.targetId = findHighestPriorityConstructionSite(constructionSites)?.id ?: ""

        val target = Game.getObjectById<ConstructionSite>(memory.targetId) ?: return doTemporaryTask()
        if (build(target) == ERR_NOT_IN_RANGE) {
            moveTo(target.pos)
        }
    } else {
        val sources = room.find(FIND_SOURCES)
        if (harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            moveTo(sources[0].pos)
        }
    }
}

fun Creep.buildingIsPossible(room: Room) = room.find(FIND_CONSTRUCTION_SITES).isNotEmpty()

private fun Creep.findHighestPriorityConstructionSite(list : Array<ConstructionSite>) =
    list.takeIf { it.isNotEmpty() }
        ?.fold(list.first(),::takeBestFittingConstructionSite)

private fun Creep.takeBestFittingConstructionSite(site1: ConstructionSite, site2:ConstructionSite) =
    when {
        site1.structureType.priority > site2.structureType.priority -> site1
        site1.structureType.priority < site2.structureType.priority -> site2
        else -> takeClosest(site1,site2)
    }

private fun Creep.takeClosest(site1: ConstructionSite, site2: ConstructionSite) =
    if(site2.pos.findPathTo(pos).size > site2.pos.findPathTo(pos).size) site2
    else site1

private fun siteIdIsValid(id : String) =
    id.isNotBlank() && Game.getObjectById<ConstructionSite>(id) != null
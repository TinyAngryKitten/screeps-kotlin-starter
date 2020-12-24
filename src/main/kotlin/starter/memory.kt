package starter

import data.Role
import screeps.api.*
import screeps.utils.memory.memory

/* Add the variables that you want to store to the persistent memory for each object type.
* They can be accessed by using the .memory attribute of any of the instances of that class
* i.e. creep.memory.building = true */

/* Creep.memory */
var CreepMemory.building: Boolean by memory { false }
var CreepMemory.role : Role by memory { Role.UNASSIGNED }
var CreepMemory.resourceIndex by memory { 0 }
var CreepMemory.temporaryTask : Role by memory {Role.UNASSIGNED}

/* Rest of the persistent memory structures.
* These set an unused test variable to 0. This is done to illustrate the how to add variables to
* the memory. Change or remove it at your convenience.*/

/* Power creep is a late game hero unit that is spawned from a Power Spawn
   see https://docs.screeps.com/power.html for more details.
   This set sets up the memory for the PowerCreep.memory class.
 */
var PowerCreepMemory.test : Int by memory { 0 }

/* flag.memory */
var FlagMemory.test : Int by memory { 0 }

//TODO: remember how many workers of each kind is needed per room
/* room.memory */
var RoomMemory.numberOfCreeps : Int by memory { 0 }

var RoomMemory.harvestersNeeded by memory { listOf<Int>() }
var RoomMemory.buildersNeeded by memory{ listOf<Int>() }
var RoomMemory.upgradersNeeded by memory { listOf<Int>() }
var RoomMemory.repairersNeeded by memory { listOf<Int>() }

var RoomMemory.hasBuiltResourceRoads by memory { false }

/* spawn.memory */
var SpawnMemory.test : Int by memory { 0 }
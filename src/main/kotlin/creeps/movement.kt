package creeps

import memory.resourceIndex
import screeps.api.Creep
import screeps.api.OK
import screeps.api.RoomPosition

fun Creep.walkTo(targetPos : RoomPosition) = when(val result = moveTo(targetPos)) {
  else -> result
}
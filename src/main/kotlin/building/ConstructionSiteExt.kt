package building

import screeps.api.*

val StructureConstant.priority : StructurePriority
  get() = when(this) {
    STRUCTURE_SPAWN -> StructurePriority.HIGH
    STRUCTURE_TOWER -> StructurePriority.HIGH

    STRUCTURE_CONTAINER -> StructurePriority.MEDIUM
    STRUCTURE_EXTENSION -> StructurePriority.MEDIUM
    else -> StructurePriority.LOW
  }
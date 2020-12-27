package memory

import screeps.api.MemoryMarker
import screeps.utils.memory.MemoryMappingDelegate
import kotlin.properties.ReadWriteProperty

fun complexMemory(defaultValue: () -> List<Int>): ReadWriteProperty<MemoryMarker, List<Int>> =
        MemoryMappingDelegate(
                defaultValue,
                {it.joinToString(",",transform = Int::toString) },
                { it.split(",").map(String::toInt) }
        )

fun serializeableMemory(defaultValue: () -> List<Int>): ReadWriteProperty<MemoryMarker, List<Int>> =
        MemoryMappingDelegate(
                defaultValue,
                {it.joinToString(",",transform = Int::toString) },
                { it.split(",").map(String::toInt) }
        )
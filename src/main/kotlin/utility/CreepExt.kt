package utility

import screeps.api.*
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract

val Creep.closestSource : Source?
    get() = pos.findClosestByRange(FIND_SOURCES)

val Creep.closestMineral : Mineral?
    get() = pos.findClosestByRange(FIND_MINERALS)

//workaround to make position available, sketchy af
@OptIn(ExperimentalContracts::class)
fun Creep.harvest(renewable : RenewableHarvestable) : ScreepsReturnCode {
    contract {
        returns() implies (renewable is Mineral)
    }
    return when(renewable) {
        is Mineral -> harvest(renewable)
        is Source -> harvest(renewable)
        else -> throw IllegalArgumentException("renewableHarvestable $renewable can not be harvested")
    }
}
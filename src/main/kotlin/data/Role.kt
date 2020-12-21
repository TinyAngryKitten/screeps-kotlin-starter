package data

sealed class Role {
    object UNASSIGNED : Role()
    object HARVESTER : Role()
    object BUILDER : Role()
    object UPGRADER : Role()
    object REPAIRER : Role()
}
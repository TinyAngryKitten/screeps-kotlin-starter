package memory

interface MemorySerializeable {
    fun serialize() : String
    fun <T : MemorySerializeable> deserialize() : T
}
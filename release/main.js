(function (_, Kotlin, $module$screeps_kotlin_types_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var getCallableRef = Kotlin.getCallableRef;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var compareTo = $module$screeps_kotlin_types_jsLegacy.screeps.api.compareTo_4yg84r$;
  var asSequence = Kotlin.kotlin.collections.asSequence_us0mfu$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var firstOrNull = Kotlin.kotlin.sequences.firstOrNull_veqyi0$;
  var Unit = Kotlin.kotlin.Unit;
  var any = Kotlin.kotlin.sequences.any_veqyi0$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var jsObject = $module$screeps_kotlin_types_jsLegacy.screeps.utils.unsafe.jsObject_7qq44f$;
  var options = $module$screeps_kotlin_types_jsLegacy.screeps.api.options_v9cmv8$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var MemoryMappingDelegate = $module$screeps_kotlin_types_jsLegacy.screeps.utils.memory.MemoryMappingDelegate;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var memory = $module$screeps_kotlin_types_jsLegacy.screeps.utils.memory.memory_9ce4rd$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var firstOrNull_1 = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  StructurePriority.prototype = Object.create(Enum.prototype);
  StructurePriority.prototype.constructor = StructurePriority;
  Role.prototype = Object.create(Enum.prototype);
  Role.prototype.constructor = Role;
  function loop() {
    gameLoop();
  }
  function get_priority($receiver) {
    if (equals($receiver, STRUCTURE_SPAWN))
      return StructurePriority$HIGH_getInstance();
    else if (equals($receiver, STRUCTURE_TOWER))
      return StructurePriority$HIGH_getInstance();
    else if (equals($receiver, STRUCTURE_CONTAINER))
      return StructurePriority$MEDIUM_getInstance();
    else if (equals($receiver, STRUCTURE_EXTENSION))
      return StructurePriority$MEDIUM_getInstance();
    else
      return StructurePriority$LOW_getInstance();
  }
  function StructurePriority(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StructurePriority_initFields() {
    StructurePriority_initFields = function () {
    };
    StructurePriority$LOW_instance = new StructurePriority('LOW', 0);
    StructurePriority$MEDIUM_instance = new StructurePriority('MEDIUM', 1);
    StructurePriority$HIGH_instance = new StructurePriority('HIGH', 2);
  }
  var StructurePriority$LOW_instance;
  function StructurePriority$LOW_getInstance() {
    StructurePriority_initFields();
    return StructurePriority$LOW_instance;
  }
  var StructurePriority$MEDIUM_instance;
  function StructurePriority$MEDIUM_getInstance() {
    StructurePriority_initFields();
    return StructurePriority$MEDIUM_instance;
  }
  var StructurePriority$HIGH_instance;
  function StructurePriority$HIGH_getInstance() {
    StructurePriority_initFields();
    return StructurePriority$HIGH_instance;
  }
  StructurePriority.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructurePriority',
    interfaces: [Enum]
  };
  function StructurePriority$values() {
    return [StructurePriority$LOW_getInstance(), StructurePriority$MEDIUM_getInstance(), StructurePriority$HIGH_getInstance()];
  }
  StructurePriority.values = StructurePriority$values;
  function StructurePriority$valueOf(name) {
    switch (name) {
      case 'LOW':
        return StructurePriority$LOW_getInstance();
      case 'MEDIUM':
        return StructurePriority$MEDIUM_getInstance();
      case 'HIGH':
        return StructurePriority$HIGH_getInstance();
      default:throwISE('No enum constant building.StructurePriority.' + name);
    }
  }
  StructurePriority.valueOf_61zpoe$ = StructurePriority$valueOf;
  function buildExtensionsCloseToController(controller) {
    if (controller.level >= 2) {
      var $receiver = controller.room.find(FIND_MY_STRUCTURES);
      var tmp$;
      var count = 0;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.structureType, STRUCTURE_EXTENSION))
          count = count + 1 | 0;
      }
      switch (count) {
        case 0:
          controller.room.createConstructionSite(29, 27, STRUCTURE_EXTENSION);
          break;
        case 1:
          controller.room.createConstructionSite(28, 27, STRUCTURE_EXTENSION);
          break;
        case 2:
          controller.room.createConstructionSite(27, 27, STRUCTURE_EXTENSION);
          break;
        case 3:
          controller.room.createConstructionSite(26, 27, STRUCTURE_EXTENSION);
          break;
        case 4:
          controller.room.createConstructionSite(25, 27, STRUCTURE_EXTENSION);
          break;
        case 5:
          controller.room.createConstructionSite(24, 27, STRUCTURE_EXTENSION);
          break;
        case 6:
          controller.room.createConstructionSite(23, 27, STRUCTURE_EXTENSION);
          break;
      }
    }}
  function buildRoad(from, to, room) {
    var $receiver = from.findPathTo(to);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      room.createConstructionSite(element.x, element.y, STRUCTURE_ROAD);
    }
  }
  function ensureCriticalRoadsExists(room) {
    buildRoadBetweenSpawnAndSources(room);
    buildRoadBetweenSourcesAndController(room);
    return room;
  }
  function buildRoadBetweenSourcesAndController(room) {
    var $receiver = room.find(FIND_SOURCES);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      if ((tmp$_0 = room.controller) != null) {
        buildRoad(tmp$_0.pos, element.pos, room);
      }}
  }
  function buildRoadBetweenSpawnAndSources(room) {
    var $receiver = room.find(FIND_SOURCES);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var $receiver_0 = room.find(FIND_MY_SPAWNS);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element_0 = $receiver_0[tmp$_0];
        buildRoad(element_0.pos, element.pos, room);
      }
    }
  }
  function build($receiver, assignedRoom, constructionSites) {
    if (assignedRoom === void 0)
      assignedRoom = $receiver.room;
    if (constructionSites === void 0)
      constructionSites = assignedRoom.find(FIND_MY_CONSTRUCTION_SITES);
    var tmp$, tmp$_0, tmp$_1;
    if (!buildingIsPossible($receiver, assignedRoom))
      return doTemporaryTask($receiver);
    set_temporaryTask($receiver.memory, Role$UNASSIGNED_getInstance());
    var tmp$_2 = get_building($receiver.memory);
    if (tmp$_2) {
      tmp$_2 = $receiver.store[RESOURCE_ENERGY] === 0;
    }if (tmp$_2)
      set_building($receiver.memory, false);
    var tmp$_3 = !get_building($receiver.memory);
    if (tmp$_3) {
      tmp$_3 = $receiver.store[RESOURCE_ENERGY] == $receiver.store.getCapacity();
    }if (tmp$_3)
      set_building($receiver.memory, true);
    if (get_building($receiver.memory)) {
      if (!siteIdIsValid(get_targetId($receiver.memory)))
        set_targetId($receiver.memory, (tmp$_0 = (tmp$ = findHighestPriorityConstructionSite($receiver, constructionSites)) != null ? tmp$.id : null) != null ? tmp$_0 : '');
      tmp$_1 = Game.getObjectById(get_targetId($receiver.memory));
      if (tmp$_1 == null) {
        return doTemporaryTask($receiver);
      }var target = tmp$_1;
      if (equals($receiver.build(target), ERR_NOT_IN_RANGE)) {
        $receiver.moveTo(target.pos);
      }} else {
      var sources = $receiver.room.find(FIND_SOURCES);
      if (equals($receiver.harvest(sources[0]), ERR_NOT_IN_RANGE)) {
        $receiver.moveTo(sources[0].pos);
      }}
  }
  function buildingIsPossible($receiver, room) {
    return !(room.find(FIND_CONSTRUCTION_SITES).length === 0);
  }
  function findHighestPriorityConstructionSite($receiver, list) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = !(list.length === 0) ? list : null) != null) {
      var initial = first(list);
      var operation = getCallableRef('takeBestFittingConstructionSite', function ($receiver, p1, p2) {
        return takeBestFittingConstructionSite($receiver, p1, p2);
      }.bind(null, $receiver));
      var tmp$_1;
      var accumulator = initial;
      for (tmp$_1 = 0; tmp$_1 !== tmp$.length; ++tmp$_1) {
        var element = tmp$[tmp$_1];
        accumulator = operation(accumulator, element);
      }
      tmp$_0 = accumulator;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function takeBestFittingConstructionSite($receiver, site1, site2) {
    if (get_priority(site1.structureType).compareTo_11rb$(get_priority(site2.structureType)) > 0)
      return site1;
    else if (get_priority(site1.structureType).compareTo_11rb$(get_priority(site2.structureType)) < 0)
      return site2;
    else
      return takeClosest($receiver, site1, site2);
  }
  function takeClosest($receiver, site1, site2) {
    return site2.pos.findPathTo($receiver.pos).length > site2.pos.findPathTo($receiver.pos).length ? site2 : site1;
  }
  function siteIdIsValid(id) {
    return !isBlank(id) && Game.getObjectById(id) != null;
  }
  function harvestIsPossible($receiver, storeOwner) {
    return storeOwner != null && compareTo(storeOwner.store.getFreeCapacity(RESOURCE_ENERGY), 0) > 0;
  }
  function closestEnergyStoreWithSpace$lambda(it) {
    return equals(it.structureType, STRUCTURE_EXTENSION) || equals(it.structureType, STRUCTURE_SPAWN);
  }
  function closestEnergyStoreWithSpace$lambda_0(it) {
    return it;
  }
  function closestEnergyStoreWithSpace$lambda_1(it) {
    return compareTo(it.store.getFreeCapacity(RESOURCE_ENERGY), 0) > 0;
  }
  function closestEnergyStoreWithSpace($receiver, room) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = firstOrNull(filter(map(filter(asSequence(room.find(FIND_MY_STRUCTURES)), closestEnergyStoreWithSpace$lambda), closestEnergyStoreWithSpace$lambda_0), closestEnergyStoreWithSpace$lambda_1))) != null)
      tmp$_0 = tmp$;
    else {
      console.log('no energy store found');
      tmp$_0 = null;
    }
    return tmp$_0;
  }
  function harvest($receiver, fromRoom, toRoom) {
    if (fromRoom === void 0)
      fromRoom = $receiver.room;
    if (toRoom === void 0)
      toRoom = $receiver.room;
    var target = closestEnergyStoreWithSpace($receiver, toRoom);
    if (target == null || !harvestIsPossible($receiver, target))
      return doTemporaryTask($receiver);
    set_temporaryTask($receiver.memory, Role$UNASSIGNED_getInstance());
    if (compareTo($receiver.store[RESOURCE_ENERGY], $receiver.store.getCapacity()) < 0) {
      var sources = fromRoom.find(FIND_SOURCES);
      goHarvest($receiver, sources[get_resourceIndex($receiver.memory)]);
    } else {
      if (equals($receiver.transfer(target, RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
        console.log('storing...');
        var error = $receiver.moveTo(target.pos);
        if (!equals(error, OK))
          console.log($receiver.name + ' is unable to move due to: ' + error);
      }}
  }
  function goHarvest($receiver, source) {
    var resultCode = $receiver.harvest(source);
    if (equals(resultCode, ERR_NOT_IN_RANGE))
      return walkTo($receiver, source.pos);
    else
      return resultCode;
  }
  function walkTo($receiver, targetPos) {
    var result = $receiver.moveTo(targetPos);
    return result;
  }
  function repair$lambda(this$repair) {
    return function () {
      repair_0(this$repair, null);
      return Unit;
    };
  }
  function repair($receiver) {
    performPrimaryTaskIfPossible($receiver, repair$lambda($receiver), repairIsPossible($receiver, $receiver.room));
  }
  function repair_0($receiver, structToRepair) {
    if (structToRepair === void 0)
      structToRepair = null;
    var tmp$;
    tmp$ = structToRepair != null ? structToRepair : firstOrNull(findStructuresInNeedOfRepair($receiver.room));
    if (tmp$ == null) {
      return doTemporaryTask($receiver);
    }var struct = tmp$;
    set_temporaryTask($receiver.memory, Role$UNASSIGNED_getInstance());
    if ($receiver.store[RESOURCE_ENERGY] === 0) {
      var sources = $receiver.room.find(FIND_SOURCES);
      if (equals($receiver.harvest(sources[0]), ERR_NOT_IN_RANGE)) {
        $receiver.moveTo(sources[0].pos);
      }} else {
      if (equals($receiver.repair(struct), ERR_NOT_IN_RANGE)) {
        $receiver.moveTo(struct.pos);
      }}
  }
  function findStructuresInNeedOfRepair$lambda(it) {
    return (it.my || it.owner == null) && it.hits < it.hitsMax;
  }
  function findStructuresInNeedOfRepair(room) {
    return filter(asSequence(room.find(FIND_STRUCTURES)), findStructuresInNeedOfRepair$lambda);
  }
  function repairIsPossible($receiver, room) {
    return any(findStructuresInNeedOfRepair(room));
  }
  function doTemporaryTask($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (equals(get_temporaryTask($receiver.memory), Role$UNASSIGNED_getInstance())) {
      tmp$_0 = $receiver.memory;
      if (harvestIsPossible($receiver, closestEnergyStoreWithSpace($receiver, $receiver.room)))
        tmp$ = Role$HARVESTER_getInstance();
      else if (buildingIsPossible($receiver, $receiver.room))
        tmp$ = Role$BUILDER_getInstance();
      else if (repairIsPossible($receiver, $receiver.room))
        tmp$ = Role$REPAIRER_getInstance();
      else
        tmp$ = Role$UPGRADER_getInstance();
      set_temporaryTask(tmp$_0, tmp$);
    }tmp$_1 = get_temporaryTask($receiver.memory);
    if (equals(tmp$_1, Role$HARVESTER_getInstance()))
      harvest($receiver);
    else if (equals(tmp$_1, Role$BUILDER_getInstance()))
      build($receiver);
    else if (equals(tmp$_1, Role$REPAIRER_getInstance()))
      repair($receiver);
    else {
      if ((tmp$_2 = $receiver.room.controller) != null) {
        getCallableRef('upgrade', function ($receiver, p1) {
          return upgrade_0($receiver, p1), Unit;
        }.bind(null, $receiver))(tmp$_2);
      }}
  }
  function performPrimaryTaskIfPossible($receiver, primaryTask, condition) {
    if (condition) {
      set_temporaryTask($receiver.memory, Role$UNASSIGNED_getInstance());
      primaryTask();
    } else
      doTemporaryTask($receiver);
  }
  function upgrade$lambda(closure$controller, this$upgrade) {
    return function () {
      upgrade_0(this$upgrade, ensureNotNull(closure$controller));
      return Unit;
    };
  }
  function upgrade($receiver, controller) {
    performPrimaryTaskIfPossible($receiver, upgrade$lambda(controller, $receiver), controller != null);
  }
  function upgrade_0($receiver, controller) {
    if ($receiver.store[RESOURCE_ENERGY] === 0 && get_building($receiver.memory)) {
      set_building($receiver.memory, false);
    } else {
      if ($receiver.store[RESOURCE_ENERGY] == $receiver.store.getCapacity() && !get_building($receiver.memory)) {
        set_building($receiver.memory, true);
      }}
    if (!get_building($receiver.memory)) {
      var sources = $receiver.room.find(FIND_SOURCES);
      if (equals($receiver.harvest(sources[get_resourceIndex($receiver.memory)]), ERR_NOT_IN_RANGE)) {
        $receiver.moveTo(sources[get_resourceIndex($receiver.memory)].pos);
      }} else if (equals($receiver.upgradeController(controller), ERR_NOT_IN_RANGE))
      $receiver.moveTo(controller.pos);
  }
  function Role(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Role_initFields() {
    Role_initFields = function () {
    };
    Role$UNASSIGNED_instance = new Role('UNASSIGNED', 0);
    Role$HARVESTER_instance = new Role('HARVESTER', 1);
    Role$BUILDER_instance = new Role('BUILDER', 2);
    Role$UPGRADER_instance = new Role('UPGRADER', 3);
    Role$REPAIRER_instance = new Role('REPAIRER', 4);
  }
  var Role$UNASSIGNED_instance;
  function Role$UNASSIGNED_getInstance() {
    Role_initFields();
    return Role$UNASSIGNED_instance;
  }
  var Role$HARVESTER_instance;
  function Role$HARVESTER_getInstance() {
    Role_initFields();
    return Role$HARVESTER_instance;
  }
  var Role$BUILDER_instance;
  function Role$BUILDER_getInstance() {
    Role_initFields();
    return Role$BUILDER_instance;
  }
  var Role$UPGRADER_instance;
  function Role$UPGRADER_getInstance() {
    Role_initFields();
    return Role$UPGRADER_instance;
  }
  var Role$REPAIRER_instance;
  function Role$REPAIRER_getInstance() {
    Role_initFields();
    return Role$REPAIRER_instance;
  }
  Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: [Enum]
  };
  function Role$values() {
    return [Role$UNASSIGNED_getInstance(), Role$HARVESTER_getInstance(), Role$BUILDER_getInstance(), Role$UPGRADER_getInstance(), Role$REPAIRER_getInstance()];
  }
  Role.values = Role$values;
  function Role$valueOf(name) {
    switch (name) {
      case 'UNASSIGNED':
        return Role$UNASSIGNED_getInstance();
      case 'HARVESTER':
        return Role$HARVESTER_getInstance();
      case 'BUILDER':
        return Role$BUILDER_getInstance();
      case 'UPGRADER':
        return Role$UPGRADER_getInstance();
      case 'REPAIRER':
        return Role$REPAIRER_getInstance();
      default:throwISE('No enum constant data.Role.' + name);
    }
  }
  Role.valueOf_61zpoe$ = Role$valueOf;
  function determineHarvestersNeeded(room, harvestSpeed) {
    if (harvestSpeed === void 0)
      harvestSpeed = 5;
    var $receiver = room.find(FIND_SOURCES);
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      var tmp$_7;
      if ((tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = item.pos.findClosestByPath(FIND_MY_SPAWNS)) != null ? tmp$_1.pos : null) != null ? tmp$_2.findPathTo(item) : null) != null ? tmp$_3.length : null) != null ? tmp$_4 / harvestSpeed | 0 : null) != null ? tmp$_5 + 1 | 0 : null) != null)
        tmp$_7 = tmp$_6;
      else {
        console.log('No possible paths from ' + item + ' to a spawn');
        tmp$_7 = 0;
      }
      tmp$_0.call(destination, tmp$_7);
    }
    return destination;
  }
  function determineBuildersNeeded(room, harvestSpeed) {
    if (harvestSpeed === void 0)
      harvestSpeed = 5;
    var $receiver = room.find(FIND_SOURCES);
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      var tmp$_7;
      if ((tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = item.pos.findClosestByPath(FIND_MY_SPAWNS)) != null ? tmp$_1.pos : null) != null ? tmp$_2.findPathTo(item) : null) != null ? tmp$_3.length : null) != null ? tmp$_4 / harvestSpeed | 0 : null) != null ? tmp$_5 + 1 | 0 : null) != null)
        tmp$_7 = tmp$_6;
      else {
        console.log('No possible paths from ' + item + ' to a spawn');
        tmp$_7 = 0;
      }
      tmp$_0.call(destination, tmp$_7);
    }
    return destination;
  }
  function determineUpgradersNeeded(room, harvestSpeed) {
    if (harvestSpeed === void 0)
      harvestSpeed = 5;
    var $receiver = room.find(FIND_SOURCES);
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      var tmp$_7;
      if ((tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = room.controller) != null ? tmp$_1.pos : null) != null ? tmp$_2.findPathTo(item) : null) != null ? tmp$_3.length : null) != null ? tmp$_4 / harvestSpeed | 0 : null) != null ? tmp$_5 + 1 | 0 : null) != null)
        tmp$_7 = tmp$_6;
      else {
        console.log('No possible paths from ' + item + ' to a spawn');
        tmp$_7 = 0;
      }
      tmp$_0.call(destination, tmp$_7);
    }
    return destination;
  }
  function ensureWorkersNeededAreKnown(room) {
    console.log('performing temp work');
    if (get_harvestersNeeded(room.memory).isEmpty())
      set_harvestersNeeded(room.memory, determineHarvestersNeeded(room));
    if (get_repairersNeeded(room.memory).isEmpty()) {
      var tmp$ = room.memory;
      var $receiver = room.find(FIND_SOURCES);
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        destination.add_11rb$(1);
      }
      set_repairersNeeded(tmp$, destination);
    }if (get_buildersNeeded(room.memory).isEmpty())
      set_buildersNeeded(room.memory, determineBuildersNeeded(room));
    if (get_upgradersNeeded(room.memory).isEmpty())
      set_upgradersNeeded(room.memory, determineUpgradersNeeded(room));
  }
  function canSpawnNewCreep(spawn, body) {
    var tmp$ = spawn.spawning != null;
    if (!tmp$) {
      var tmp$_0 = spawn.room.energyAvailable;
      var tmp$_1;
      var sum = 0;
      for (tmp$_1 = 0; tmp$_1 !== body.length; ++tmp$_1) {
        var element = body[tmp$_1];
        var tmp$_2;
        sum = sum + ((tmp$_2 = BODYPART_COST[element]) != null ? tmp$_2 : 0) | 0;
      }
      tmp$ = tmp$_0 < sum;
    }return tmp$;
  }
  function shouldBuildMoreWorkers(nrNeeded, creeps, role, forResource) {
    var tmp$;
    var count = 0;
    for (tmp$ = 0; tmp$ !== creeps.length; ++tmp$) {
      var element = creeps[tmp$];
      if (equals(get_role(element.memory), role) && get_resourceIndex(element.memory) === forResource)
        count = count + 1 | 0;
    }
    return nrNeeded > count;
  }
  function determineBestWorkerBody(spawn) {
    var tmp$;
    var nrOfParts = (spawn.room.energyCapacityAvailable / 76 | 0) / 3 | 0;
    var $receiver = ArrayList_init_0();
    var $receiver_0 = new IntRange(0, nrOfParts);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(CARRY);
    }
    $receiver.addAll_brywnq$(destination);
    var $receiver_1 = until(0, nrOfParts);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(WORK);
    }
    $receiver.addAll_brywnq$(destination_0);
    var $receiver_2 = until(0, nrOfParts);
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_2;
    tmp$_2 = $receiver_2.iterator();
    while (tmp$_2.hasNext()) {
      var item_1 = tmp$_2.next();
      destination_1.add_11rb$(MOVE);
    }
    $receiver.addAll_brywnq$(destination_1);
    var $receiver_3 = copyToArray($receiver);
    return (tmp$ = !($receiver_3.length === 0) ? $receiver_3 : null) != null ? tmp$ : [WORK, CARRY, CARRY, MOVE];
  }
  function spawnCreeps(creeps, spawn_0) {
    var tmp$;
    var body = determineBestWorkerBody(spawn_0);
    if (canSpawnNewCreep(spawn_0, body))
      ensureWorkersNeededAreKnown(spawn_0.room);
    var roomMemory = spawn_0.room.memory;
    tmp$ = spawn_0.room.find(FIND_SOURCES);
    loop: for (var i = 0; i !== tmp$.length; ++i) {
      var tmp$_0;
      if (shouldBuildMoreWorkers(get_harvestersNeeded(roomMemory).get_za3lpa$(i), creeps, Role$HARVESTER_getInstance(), i))
        tmp$_0 = Role$HARVESTER_getInstance();
      else if (shouldBuildMoreWorkers(get_buildersNeeded(roomMemory).get_za3lpa$(i), creeps, Role$BUILDER_getInstance(), i))
        tmp$_0 = Role$BUILDER_getInstance();
      else if (shouldBuildMoreWorkers(get_upgradersNeeded(roomMemory).get_za3lpa$(i), creeps, Role$UPGRADER_getInstance(), i))
        tmp$_0 = Role$UPGRADER_getInstance();
      else if (shouldBuildMoreWorkers(get_repairersNeeded(roomMemory).get_za3lpa$(i), creeps, Role$REPAIRER_getInstance(), i))
        tmp$_0 = Role$REPAIRER_getInstance();
      else
        continue loop;
      var role = tmp$_0;
      return spawn(spawn_0, body, role, i);
    }
  }
  function spawn$lambda$lambda(closure$role, closure$resource) {
    return function ($receiver) {
      set_role($receiver, closure$role);
      set_resourceIndex($receiver, closure$resource);
      return Unit;
    };
  }
  function spawn$lambda(closure$role, closure$resource) {
    return function ($receiver) {
      $receiver.memory = jsObject(spawn$lambda$lambda(closure$role, closure$resource));
      return Unit;
    };
  }
  function spawn(spawn, body, role, resource) {
    var newName = role.toString() + '_' + Game.time;
    var code = spawn.spawnCreep(body, newName, options(spawn$lambda(role, resource)));
    if (equals(code, OK))
      console.log('spawning ' + newName + ' with body ' + body);
    else if (!equals(code, ERR_BUSY) && !equals(code, ERR_NOT_ENOUGH_ENERGY))
      console.log('unhandled error code ' + code);
  }
  function MemorySerializeable() {
  }
  MemorySerializeable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MemorySerializeable',
    interfaces: []
  };
  function complexMemory$lambda(it) {
    return joinToString(it, ',', void 0, void 0, void 0, void 0, getCallableRef('toString', function ($receiver) {
      return $receiver.toString();
    }));
  }
  function complexMemory$lambda_0(it) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var $receiver = split(it, [',']);
    var tmp$_2, tmp$_3;
    if ((tmp$ = ((tmp$_3 = (tmp$_2 = firstOrNull_0($receiver)) != null ? tmp$_2.length > 0 : null) != null ? tmp$_3 : false) ? $receiver : null) != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(tmp$, 10));
      var tmp$_4;
      tmp$_4 = tmp$.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(toInt(item));
      }
      tmp$_1 = destination;
    } else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : emptyList();
  }
  function complexMemory(defaultValue) {
    return new MemoryMappingDelegate(defaultValue, complexMemory$lambda, complexMemory$lambda_0);
  }
  function serializeableMemory$lambda(it) {
    return joinToString(it, ',', void 0, void 0, void 0, void 0, getCallableRef('toString', function ($receiver) {
      return $receiver.toString();
    }));
  }
  function serializeableMemory$lambda_0(it) {
    var $receiver = split(it, [',']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toInt(item));
    }
    return destination;
  }
  function serializeableMemory(defaultValue) {
    return new MemoryMappingDelegate(defaultValue, serializeableMemory$lambda, serializeableMemory$lambda_0);
  }
  function memory$lambda(closure$defaultValue) {
    return function () {
      return closure$defaultValue;
    };
  }
  function memory$lambda_0(typeClosure$T, isT) {
    return function (s) {
      return typeClosure$T.valueOf_61zpoe$(s);
    };
  }
  function building$lambda() {
    return false;
  }
  var building;
  var building_metadata = new PropertyMetadata('building');
  function get_building($receiver) {
    return building.getValue_lrcp0p$($receiver, building_metadata);
  }
  function set_building($receiver, building_0) {
    building.setValue_9rddgb$($receiver, building_metadata, building_0);
  }
  var role;
  var role_metadata = new PropertyMetadata('role');
  function get_role($receiver) {
    return role.getValue_lrcp0p$($receiver, role_metadata);
  }
  function set_role($receiver, role_0) {
    role.setValue_9rddgb$($receiver, role_metadata, role_0);
  }
  function resourceIndex$lambda() {
    return 0;
  }
  var resourceIndex;
  var resourceIndex_metadata = new PropertyMetadata('resourceIndex');
  function get_resourceIndex($receiver) {
    return resourceIndex.getValue_lrcp0p$($receiver, resourceIndex_metadata);
  }
  function set_resourceIndex($receiver, resourceIndex_0) {
    resourceIndex.setValue_9rddgb$($receiver, resourceIndex_metadata, resourceIndex_0);
  }
  function targetId$lambda() {
    return '';
  }
  var targetId;
  var targetId_metadata = new PropertyMetadata('targetId');
  function get_targetId($receiver) {
    return targetId.getValue_lrcp0p$($receiver, targetId_metadata);
  }
  function set_targetId($receiver, targetId_0) {
    targetId.setValue_9rddgb$($receiver, targetId_metadata, targetId_0);
  }
  var temporaryTask;
  var temporaryTask_metadata = new PropertyMetadata('temporaryTask');
  function get_temporaryTask($receiver) {
    return temporaryTask.getValue_lrcp0p$($receiver, temporaryTask_metadata);
  }
  function set_temporaryTask($receiver, temporaryTask_0) {
    temporaryTask.setValue_9rddgb$($receiver, temporaryTask_metadata, temporaryTask_0);
  }
  function numberOfCreeps$lambda() {
    return 0;
  }
  var numberOfCreeps;
  var numberOfCreeps_metadata = new PropertyMetadata('numberOfCreeps');
  function get_numberOfCreeps($receiver) {
    return numberOfCreeps.getValue_lrcp0p$($receiver, numberOfCreeps_metadata);
  }
  function set_numberOfCreeps($receiver, numberOfCreeps_0) {
    numberOfCreeps.setValue_9rddgb$($receiver, numberOfCreeps_metadata, numberOfCreeps_0);
  }
  function criticalRoadsBuilt$lambda() {
    return false;
  }
  var criticalRoadsBuilt;
  var criticalRoadsBuilt_metadata = new PropertyMetadata('criticalRoadsBuilt');
  function get_criticalRoadsBuilt($receiver) {
    return criticalRoadsBuilt.getValue_lrcp0p$($receiver, criticalRoadsBuilt_metadata);
  }
  function set_criticalRoadsBuilt($receiver, criticalRoadsBuilt_0) {
    criticalRoadsBuilt.setValue_9rddgb$($receiver, criticalRoadsBuilt_metadata, criticalRoadsBuilt_0);
  }
  function harvestersNeeded$lambda() {
    return emptyList();
  }
  var harvestersNeeded;
  var harvestersNeeded_metadata = new PropertyMetadata('harvestersNeeded');
  function get_harvestersNeeded($receiver) {
    return harvestersNeeded.getValue_lrcp0p$($receiver, harvestersNeeded_metadata);
  }
  function set_harvestersNeeded($receiver, harvestersNeeded_0) {
    harvestersNeeded.setValue_9rddgb$($receiver, harvestersNeeded_metadata, harvestersNeeded_0);
  }
  function buildersNeeded$lambda() {
    return emptyList();
  }
  var buildersNeeded;
  var buildersNeeded_metadata = new PropertyMetadata('buildersNeeded');
  function get_buildersNeeded($receiver) {
    return buildersNeeded.getValue_lrcp0p$($receiver, buildersNeeded_metadata);
  }
  function set_buildersNeeded($receiver, buildersNeeded_0) {
    buildersNeeded.setValue_9rddgb$($receiver, buildersNeeded_metadata, buildersNeeded_0);
  }
  function upgradersNeeded$lambda() {
    return emptyList();
  }
  var upgradersNeeded;
  var upgradersNeeded_metadata = new PropertyMetadata('upgradersNeeded');
  function get_upgradersNeeded($receiver) {
    return upgradersNeeded.getValue_lrcp0p$($receiver, upgradersNeeded_metadata);
  }
  function set_upgradersNeeded($receiver, upgradersNeeded_0) {
    upgradersNeeded.setValue_9rddgb$($receiver, upgradersNeeded_metadata, upgradersNeeded_0);
  }
  function repairersNeeded$lambda() {
    return emptyList();
  }
  var repairersNeeded;
  var repairersNeeded_metadata = new PropertyMetadata('repairersNeeded');
  function get_repairersNeeded($receiver) {
    return repairersNeeded.getValue_lrcp0p$($receiver, repairersNeeded_metadata);
  }
  function set_repairersNeeded($receiver, repairersNeeded_0) {
    repairersNeeded.setValue_9rddgb$($receiver, repairersNeeded_metadata, repairersNeeded_0);
  }
  function gameLoop() {
    var tmp$, tmp$_0, tmp$_1;
    console.log('look starting');
    var $receiver = Game.spawns;
    tmp$ = firstOrNull_1(Object.values($receiver));
    if (tmp$ == null) {
      return console.log('No spawn found, exiting...');
    }var mainSpawn = tmp$;
    houseKeeping(Game.creeps);
    set_numberOfCreeps(mainSpawn.room.memory, mainSpawn.room.find(FIND_CREEPS).length);
    console.log('spawning...');
    var $receiver_0 = Game.creeps;
    spawnCreeps(Object.values($receiver_0), mainSpawn);
    console.log('building...');
    var controller = mainSpawn.room.controller;
    if (controller != null) {
      buildExtensionsCloseToController(controller);
    }ensureRoadsAreBuilt(mainSpawn.room);
    console.log('performing role actions...');
    var $receiver_1 = Game.creeps;
    tmp$_0 = Kotlin.arrayIterator(Object.entries($receiver_1));
    while (tmp$_0.hasNext()) {
      var tmp$_2 = tmp$_0.next();
      var creep = tmp$_2[1];
      console.log(creep.toString());
      tmp$_1 = get_role(creep.memory);
      if (equals(tmp$_1, Role$HARVESTER_getInstance()))
        harvest(creep);
      else if (equals(tmp$_1, Role$BUILDER_getInstance()))
        build(creep);
      else if (equals(tmp$_1, Role$UPGRADER_getInstance()))
        upgrade(creep, controller);
      else if (equals(tmp$_1, Role$REPAIRER_getInstance()))
        repair(creep);
      else {
        console.log('no role, do nothing');
      }
    }
  }
  function ensureRoadsAreBuilt(room) {
    if (!get_criticalRoadsBuilt(room.memory)) {
      ensureCriticalRoadsExists(room);
      set_criticalRoadsBuilt(room.memory, true);
    }}
  function houseKeeping(creeps) {
    var tmp$;
    var $receiver = Game.creeps;
    if (Object.keys($receiver).length === 0)
      return;
    var $receiver_0 = Memory.creeps;
    tmp$ = Kotlin.arrayIterator(Object.entries($receiver_0));
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var creepName = tmp$_0[0];
      if (creeps[creepName] == null) {
        console.log('deleting obsolete memory entry for creep ' + creepName);
        delete(Memory.creeps[creepName]);
      }}
  }
  function get_closestSource($receiver) {
    return $receiver.pos.findClosestByRange(FIND_SOURCES);
  }
  function get_closestMineral($receiver) {
    return $receiver.pos.findClosestByRange(FIND_MINERALS);
  }
  function harvest_0($receiver, renewable) {
    var tmp$;
    if (Kotlin.isType(renewable, Mineral))
      tmp$ = $receiver.harvest(renewable);
    else if (Kotlin.isType(renewable, Source))
      tmp$ = $receiver.harvest(renewable);
    else
      throw IllegalArgumentException_init('renewableHarvestable ' + renewable + ' can not be harvested');
    return tmp$;
  }
  function log(msg) {
  }
  _.loop = loop;
  var package$building = _.building || (_.building = {});
  package$building.get_priority_wvximt$ = get_priority;
  Object.defineProperty(StructurePriority, 'LOW', {
    get: StructurePriority$LOW_getInstance
  });
  Object.defineProperty(StructurePriority, 'MEDIUM', {
    get: StructurePriority$MEDIUM_getInstance
  });
  Object.defineProperty(StructurePriority, 'HIGH', {
    get: StructurePriority$HIGH_getInstance
  });
  package$building.StructurePriority = StructurePriority;
  package$building.buildExtensionsCloseToController_r9ibs2$ = buildExtensionsCloseToController;
  package$building.buildRoad_g9xrns$ = buildRoad;
  package$building.ensureCriticalRoadsExists_x8x31k$ = ensureCriticalRoadsExists;
  package$building.buildRoadBetweenSourcesAndController_x8x31k$ = buildRoadBetweenSourcesAndController;
  package$building.buildRoadBetweenSpawnAndSources_x8x31k$ = buildRoadBetweenSpawnAndSources;
  $$importsForInline$$['screeps-kotlin-types-jsLegacy'] = $module$screeps_kotlin_types_jsLegacy;
  var package$creeps = _.creeps || (_.creeps = {});
  package$creeps.build_z15gke$ = build;
  package$creeps.buildingIsPossible_hrmv4t$ = buildingIsPossible;
  package$creeps.harvestIsPossible_kaa3hh$ = harvestIsPossible;
  package$creeps.closestEnergyStoreWithSpace_hrmv4t$ = closestEnergyStoreWithSpace;
  package$creeps.harvest_g1gq2n$ = harvest;
  package$creeps.goHarvest_qt6aql$ = goHarvest;
  package$creeps.walkTo_5vdfsc$ = walkTo;
  package$creeps.repair_5rb157$ = repair;
  package$creeps.repair_3gl8b2$ = repair_0;
  package$creeps.repairIsPossible_hrmv4t$ = repairIsPossible;
  package$creeps.doTemporaryTask_5rb157$ = doTemporaryTask;
  package$creeps.performPrimaryTaskIfPossible_z01s45$ = performPrimaryTaskIfPossible;
  package$creeps.upgrade_7xfp9y$ = upgrade;
  package$creeps.upgrade_21a2qf$ = upgrade_0;
  Object.defineProperty(Role, 'UNASSIGNED', {
    get: Role$UNASSIGNED_getInstance
  });
  Object.defineProperty(Role, 'HARVESTER', {
    get: Role$HARVESTER_getInstance
  });
  Object.defineProperty(Role, 'BUILDER', {
    get: Role$BUILDER_getInstance
  });
  Object.defineProperty(Role, 'UPGRADER', {
    get: Role$UPGRADER_getInstance
  });
  Object.defineProperty(Role, 'REPAIRER', {
    get: Role$REPAIRER_getInstance
  });
  var package$data = _.data || (_.data = {});
  package$data.Role = Role;
  var package$decisions = _.decisions || (_.decisions = {});
  package$decisions.determineHarvestersNeeded_en2kvq$ = determineHarvestersNeeded;
  package$decisions.determineBuildersNeeded_en2kvq$ = determineBuildersNeeded;
  package$decisions.determineUpgradersNeeded_en2kvq$ = determineUpgradersNeeded;
  package$decisions.canSpawnNewCreep_madzzf$ = canSpawnNewCreep;
  package$decisions.shouldBuildMoreWorkers_xagwrk$ = shouldBuildMoreWorkers;
  package$decisions.determineBestWorkerBody_eui9kp$ = determineBestWorkerBody;
  package$decisions.spawnCreeps_yz7sif$ = spawnCreeps;
  package$decisions.spawn_an0r57$ = spawn;
  var package$memory = _.memory || (_.memory = {});
  package$memory.MemorySerializeable = MemorySerializeable;
  package$memory.complexMemory_rgmuzf$ = complexMemory;
  package$memory.serializeableMemory_rgmuzf$ = serializeableMemory;
  package$memory.get_building_wwybnu$ = get_building;
  package$memory.set_building_cgw8bp$ = set_building;
  package$memory.get_role_wwybnu$ = get_role;
  package$memory.set_role_2apcn8$ = set_role;
  package$memory.get_resourceIndex_wwybnu$ = get_resourceIndex;
  package$memory.set_resourceIndex_w6vdec$ = set_resourceIndex;
  package$memory.get_targetId_wwybnu$ = get_targetId;
  package$memory.set_targetId_57vlho$ = set_targetId;
  package$memory.get_temporaryTask_wwybnu$ = get_temporaryTask;
  package$memory.set_temporaryTask_2apcn8$ = set_temporaryTask;
  package$memory.get_numberOfCreeps_4xuaja$ = get_numberOfCreeps;
  package$memory.set_numberOfCreeps_4sz6mg$ = set_numberOfCreeps;
  package$memory.get_criticalRoadsBuilt_4xuaja$ = get_criticalRoadsBuilt;
  package$memory.set_criticalRoadsBuilt_wksrqp$ = set_criticalRoadsBuilt;
  package$memory.get_harvestersNeeded_4xuaja$ = get_harvestersNeeded;
  package$memory.set_harvestersNeeded_gfx7fj$ = set_harvestersNeeded;
  package$memory.get_buildersNeeded_4xuaja$ = get_buildersNeeded;
  package$memory.set_buildersNeeded_gfx7fj$ = set_buildersNeeded;
  package$memory.get_upgradersNeeded_4xuaja$ = get_upgradersNeeded;
  package$memory.set_upgradersNeeded_gfx7fj$ = set_upgradersNeeded;
  package$memory.get_repairersNeeded_4xuaja$ = get_repairersNeeded;
  package$memory.set_repairersNeeded_gfx7fj$ = set_repairersNeeded;
  var package$starter = _.starter || (_.starter = {});
  package$starter.gameLoop = gameLoop;
  var package$utility = _.utility || (_.utility = {});
  package$utility.get_closestSource_5rb157$ = get_closestSource;
  package$utility.get_closestMineral_5rb157$ = get_closestMineral;
  package$utility.harvest_li2ulg$ = harvest_0;
  package$utility.log_61zpoe$ = log;
  building = memory(building$lambda);
  role = new MemoryMappingDelegate(memory$lambda(Role$UNASSIGNED_getInstance()), getPropertyCallableRef('name', 1, function ($receiver) {
    return $receiver.name;
  }), memory$lambda_0(Role, Kotlin.isInstanceOf(Role)));
  resourceIndex = memory(resourceIndex$lambda);
  targetId = memory(targetId$lambda);
  temporaryTask = new MemoryMappingDelegate(memory$lambda(Role$UNASSIGNED_getInstance()), getPropertyCallableRef('name', 1, function ($receiver) {
    return $receiver.name;
  }), memory$lambda_0(Role, Kotlin.isInstanceOf(Role)));
  numberOfCreeps = memory(numberOfCreeps$lambda);
  criticalRoadsBuilt = memory(criticalRoadsBuilt$lambda);
  harvestersNeeded = complexMemory(harvestersNeeded$lambda);
  buildersNeeded = complexMemory(buildersNeeded$lambda);
  upgradersNeeded = complexMemory(upgradersNeeded$lambda);
  repairersNeeded = complexMemory(repairersNeeded$lambda);
  Kotlin.defineModule('main', _);
  return _;
}(module.exports, require('kotlin'), require('screeps-kotlin-types-jsLegacy')));

//# sourceMappingURL=main.js.map

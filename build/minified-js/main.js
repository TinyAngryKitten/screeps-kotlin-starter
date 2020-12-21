(function (_, Kotlin, $module$screeps_kotlin_types_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.toString;
  var memory = $module$screeps_kotlin_types_jsLegacy.screeps.utils.memory.memory_9ce4rd$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  Role$UNASSIGNED.prototype = Object.create(Role.prototype);
  Role$UNASSIGNED.prototype.constructor = Role$UNASSIGNED;
  Role$HARVESTER.prototype = Object.create(Role.prototype);
  Role$HARVESTER.prototype.constructor = Role$HARVESTER;
  Role$BUILDER.prototype = Object.create(Role.prototype);
  Role$BUILDER.prototype.constructor = Role$BUILDER;
  Role$UPGRADER.prototype = Object.create(Role.prototype);
  Role$UPGRADER.prototype.constructor = Role$UPGRADER;
  Role$REPAIRER.prototype = Object.create(Role.prototype);
  Role$REPAIRER.prototype.constructor = Role$REPAIRER;
  function Role() {
  }
  function Role$UNASSIGNED() {
    Role$UNASSIGNED_instance = this;
    Role.call(this);
  }
  Role$UNASSIGNED.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UNASSIGNED', interfaces: [Role]};
  var Role$UNASSIGNED_instance = null;
  function Role$UNASSIGNED_getInstance() {
    if (Role$UNASSIGNED_instance === null) {
      new Role$UNASSIGNED();
    }return Role$UNASSIGNED_instance;
  }
  function Role$HARVESTER() {
    Role$HARVESTER_instance = this;
    Role.call(this);
  }
  Role$HARVESTER.$metadata$ = {kind: Kind_OBJECT, simpleName: 'HARVESTER', interfaces: [Role]};
  var Role$HARVESTER_instance = null;
  function Role$HARVESTER_getInstance() {
    if (Role$HARVESTER_instance === null) {
      new Role$HARVESTER();
    }return Role$HARVESTER_instance;
  }
  function Role$BUILDER() {
    Role$BUILDER_instance = this;
    Role.call(this);
  }
  Role$BUILDER.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BUILDER', interfaces: [Role]};
  var Role$BUILDER_instance = null;
  function Role$BUILDER_getInstance() {
    if (Role$BUILDER_instance === null) {
      new Role$BUILDER();
    }return Role$BUILDER_instance;
  }
  function Role$UPGRADER() {
    Role$UPGRADER_instance = this;
    Role.call(this);
  }
  Role$UPGRADER.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UPGRADER', interfaces: [Role]};
  var Role$UPGRADER_instance = null;
  function Role$UPGRADER_getInstance() {
    if (Role$UPGRADER_instance === null) {
      new Role$UPGRADER();
    }return Role$UPGRADER_instance;
  }
  function Role$REPAIRER() {
    Role$REPAIRER_instance = this;
    Role.call(this);
  }
  Role$REPAIRER.$metadata$ = {kind: Kind_OBJECT, simpleName: 'REPAIRER', interfaces: [Role]};
  var Role$REPAIRER_instance = null;
  function Role$REPAIRER_getInstance() {
    if (Role$REPAIRER_instance === null) {
      new Role$REPAIRER();
    }return Role$REPAIRER_instance;
  }
  Role.$metadata$ = {kind: Kind_CLASS, simpleName: 'Role', interfaces: []};
  function building$lambda() {
    return false;
  }
  var building;
  var building_metadata = new PropertyMetadata('building');
  function role$lambda() {
    return Role$UNASSIGNED_getInstance();
  }
  var role;
  var role_metadata = new PropertyMetadata('role');
  function resourceIndex$lambda() {
    return 0;
  }
  var resourceIndex;
  var resourceIndex_metadata = new PropertyMetadata('resourceIndex');
  function temporaryTask$lambda() {
    return Role$UNASSIGNED_getInstance();
  }
  var temporaryTask;
  var temporaryTask_metadata = new PropertyMetadata('temporaryTask');
  function test$lambda() {
    return 0;
  }
  var test;
  var test_metadata = new PropertyMetadata('test');
  function test$lambda_0() {
    return 0;
  }
  var test_0;
  var test_metadata_0 = new PropertyMetadata('test');
  function numberOfCreeps$lambda() {
    return 0;
  }
  var numberOfCreeps;
  var numberOfCreeps_metadata = new PropertyMetadata('numberOfCreeps');
  function harvestersNeeded$lambda() {
    return emptyList();
  }
  var harvestersNeeded;
  var harvestersNeeded_metadata = new PropertyMetadata('harvestersNeeded');
  function buildersNeeded$lambda() {
    return emptyList();
  }
  var buildersNeeded;
  var buildersNeeded_metadata = new PropertyMetadata('buildersNeeded');
  function upgradersNeeded$lambda() {
    return emptyList();
  }
  var upgradersNeeded;
  var upgradersNeeded_metadata = new PropertyMetadata('upgradersNeeded');
  function repairersNeeded$lambda() {
    return emptyList();
  }
  var repairersNeeded;
  var repairersNeeded_metadata = new PropertyMetadata('repairersNeeded');
  function hasBuiltResourceRoads$lambda() {
    return false;
  }
  var hasBuiltResourceRoads;
  var hasBuiltResourceRoads_metadata = new PropertyMetadata('hasBuiltResourceRoads');
  function test$lambda_1() {
    return 0;
  }
  var test_1;
  var test_metadata_1 = new PropertyMetadata('test');
  $$importsForInline$$['screeps-kotlin-types-jsLegacy'] = $module$screeps_kotlin_types_jsLegacy;
  Object.defineProperty(Role, 'UNASSIGNED', {get: Role$UNASSIGNED_getInstance});
  Object.defineProperty(Role, 'HARVESTER', {get: Role$HARVESTER_getInstance});
  Object.defineProperty(Role, 'BUILDER', {get: Role$BUILDER_getInstance});
  Object.defineProperty(Role, 'UPGRADER', {get: Role$UPGRADER_getInstance});
  Object.defineProperty(Role, 'REPAIRER', {get: Role$REPAIRER_getInstance});
  var package$data = _.data || (_.data = {});
  package$data.Role = Role;
  building = memory(building$lambda);
  role = memory(role$lambda);
  resourceIndex = memory(resourceIndex$lambda);
  temporaryTask = memory(temporaryTask$lambda);
  test = memory(test$lambda);
  test_0 = memory(test$lambda_0);
  numberOfCreeps = memory(numberOfCreeps$lambda);
  harvestersNeeded = memory(harvestersNeeded$lambda);
  buildersNeeded = memory(buildersNeeded$lambda);
  upgradersNeeded = memory(upgradersNeeded$lambda);
  repairersNeeded = memory(repairersNeeded$lambda);
  hasBuiltResourceRoads = memory(hasBuiltResourceRoads$lambda);
  test_1 = memory(test$lambda_1);
  return _;
}(module.exports, require('kotlin'), require('screeps-kotlin-types-jsLegacy')));

//# sourceMappingURL=main.js.map

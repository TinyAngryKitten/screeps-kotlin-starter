(function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var Any = Object;
  var equals = Kotlin.equals;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var TERRAIN_MASK_NONE;
  var TERRAIN_PLAIN;
  var TERRAIN_SWAMP;
  var TERRAIN_WALL;
  var TERRAIN_LAVA;
  var LINE_STYLE_DASHED;
  var LINE_STYLE_DOTTED;
  var LINE_STYLE_SOLID;
  var TEXT_ALIGN_LEFT;
  var TEXT_ALIGN_CENTER;
  var TEXT_ALIGN_RIGHT;
  var ALGORITHM_ASTAR;
  var ALGORITHM_DIJKSTRA;
  var COSTMATRIX_FALSE;
  function MemoryDelegate(default_0) {
    this.default = default_0;
  }
  MemoryDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = thisRef[property.callableName]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver = this.default();
      thisRef[property.callableName] = $receiver;
      tmp$_1 = $receiver;
    }
    return tmp$_1;
  };
  MemoryDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value;
  };
  MemoryDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'MemoryDelegate', interfaces: [ReadWriteProperty]};
  function memory_0(defaultValue) {
    return new MemoryDelegate(defaultValue);
  }
  var package$screeps = _.screeps || (_.screeps = {});
  var package$utils = package$screeps.utils || (package$screeps.utils = {});
  var package$memory = package$utils.memory || (package$utils.memory = {});
  package$memory.MemoryDelegate = MemoryDelegate;
  package$memory.memory_9ce4rd$ = memory_0;
  TERRAIN_MASK_NONE = 0;
  TERRAIN_PLAIN = 'plain';
  TERRAIN_SWAMP = 'swamp';
  TERRAIN_WALL = 'wall';
  TERRAIN_LAVA = 'lava';
  LINE_STYLE_DASHED = 'dashed';
  LINE_STYLE_DOTTED = 'dotted';
  LINE_STYLE_SOLID = undefined;
  TEXT_ALIGN_LEFT = 'left';
  TEXT_ALIGN_CENTER = 'center';
  TEXT_ALIGN_RIGHT = 'right';
  ALGORITHM_ASTAR = 'astar';
  ALGORITHM_DIJKSTRA = 'dijkstra';
  COSTMATRIX_FALSE = false;
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=screeps-kotlin-types-jsLegacy.js.map

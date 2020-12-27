(function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var throwCCE = Kotlin.throwCCE;
  var Any = Object;
  var equals = Kotlin.equals;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  Result$Error.prototype = Object.create(Result.prototype);
  Result$Error.prototype.constructor = Result$Error;
  Result$Value.prototype = Object.create(Result.prototype);
  Result$Value.prototype.constructor = Result$Value;
  var get_value = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_value_61birg$', function ($receiver) {
    return $receiver;
  });
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
  function findRoute($receiver, fromRoom, toRoom, opts) {
    if (opts === void 0)
      opts = null;
    var res = $receiver.findRoute(fromRoom, toRoom, opts);
    return Kotlin.isArray(res) ? new Result$Value(res) : new Result$Error(res);
  }
  function OrderCreationParams(type, resourceType, price, totalAmount, roomName) {
    if (roomName === void 0)
      roomName = null;
    this.type = type;
    this.resourceType = resourceType;
    this.price = price;
    this.totalAmount = totalAmount;
    this.roomName = roomName;
  }
  OrderCreationParams.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderCreationParams',
    interfaces: []
  };
  OrderCreationParams.prototype.component1 = function () {
    return this.type;
  };
  OrderCreationParams.prototype.component2 = function () {
    return this.resourceType;
  };
  OrderCreationParams.prototype.component3 = function () {
    return this.price;
  };
  OrderCreationParams.prototype.component4 = function () {
    return this.totalAmount;
  };
  OrderCreationParams.prototype.component5 = function () {
    return this.roomName;
  };
  OrderCreationParams.prototype.copy_up3l4s$ = function (type, resourceType, price, totalAmount, roomName) {
    return new OrderCreationParams(type === void 0 ? this.type : type, resourceType === void 0 ? this.resourceType : resourceType, price === void 0 ? this.price : price, totalAmount === void 0 ? this.totalAmount : totalAmount, roomName === void 0 ? this.roomName : roomName);
  };
  OrderCreationParams.prototype.toString = function () {
    return 'OrderCreationParams(type=' + Kotlin.toString(this.type) + (', resourceType=' + Kotlin.toString(this.resourceType)) + (', price=' + Kotlin.toString(this.price)) + (', totalAmount=' + Kotlin.toString(this.totalAmount)) + (', roomName=' + Kotlin.toString(this.roomName)) + ')';
  };
  OrderCreationParams.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.resourceType) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalAmount) | 0;
    result = result * 31 + Kotlin.hashCode(this.roomName) | 0;
    return result;
  };
  OrderCreationParams.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.resourceType, other.resourceType) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.totalAmount, other.totalAmount) && Kotlin.equals(this.roomName, other.roomName)))));
  };
  function options(init) {
    return jsObject(init);
  }
  var COSTMATRIX_FALSE;
  function GoalWithRange(pos, range) {
    this.pos = pos;
    this.range = range;
  }
  GoalWithRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoalWithRange',
    interfaces: []
  };
  GoalWithRange.prototype.component1 = function () {
    return this.pos;
  };
  GoalWithRange.prototype.component2 = function () {
    return this.range;
  };
  GoalWithRange.prototype.copy_qxwwxf$ = function (pos, range) {
    return new GoalWithRange(pos === void 0 ? this.pos : pos, range === void 0 ? this.range : range);
  };
  GoalWithRange.prototype.toString = function () {
    return 'GoalWithRange(pos=' + Kotlin.toString(this.pos) + (', range=' + Kotlin.toString(this.range)) + ')';
  };
  GoalWithRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    return result;
  };
  GoalWithRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.range, other.range)))));
  };
  var component1 = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.component1_pk561z$', function ($receiver) {
    return $receiver[0];
  });
  var component2 = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.component2_pk561z$', function ($receiver) {
    return $receiver[1];
  });
  var get_0 = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_uavxqf$', function ($receiver, key) {
    return $receiver[key];
  });
  var set = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.set_gldspr$', function ($receiver, key, value) {
    $receiver[key] = value;
  });
  var get_entries = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_entries_pabm7i$', function ($receiver) {
    return Object.entries($receiver);
  });
  var get_values = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_values_pabm7i$', function ($receiver) {
    return Object.values($receiver);
  });
  var get_keys = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_keys_pabm7i$', function ($receiver) {
    return Object.keys($receiver);
  });
  var get_size = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.get_size_pabm7i$', function ($receiver) {
    return Object.keys($receiver).length;
  });
  var iterator_0 = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.api.iterator_sn73m1$', function ($receiver) {
    return Kotlin.arrayIterator(Object.entries($receiver));
  });
  function lookAtArea($receiver, top, left, bottom, right) {
    return $receiver.lookAtArea(top, left, bottom, right, false);
  }
  function lookAtAreaAsArray($receiver, top, left, bottom, right) {
    return $receiver.lookAtArea(top, left, bottom, right, true);
  }
  function compareTo($receiver, other) {
    return compareValues($receiver != null ? $receiver : 0, other != null ? other : 0);
  }
  function TickLazy(computeOncePerTick) {
    this.computeOncePerTick = computeOncePerTick;
    this.value = null;
    this.tick = -1;
  }
  TickLazy.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    if (Game.time !== this.tick) {
      this.tick = Game.time;
      this.value = this.computeOncePerTick(thisRef);
    }return ensureNotNull(this.value);
  };
  TickLazy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TickLazy',
    interfaces: [ReadOnlyProperty]
  };
  function lazyPerTick(computeOncePerTick) {
    return new TickLazy(computeOncePerTick);
  }
  function recordOf(pairs) {
    return mutableRecordOf(pairs.slice());
  }
  function mutableRecordOf$lambda(closure$pairs) {
    return function ($receiver) {
      var $receiver_0 = closure$pairs;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var k = element.component1()
        , v = element.component2();
        $receiver[k] = v;
      }
      return Unit;
    };
  }
  function mutableRecordOf(pairs) {
    return jsObject(mutableRecordOf$lambda(pairs));
  }
  var contains = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.contains_uavxqf$', wrapFunction(function () {
    var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
    return function ($receiver, key) {
      return contains(Object.keys($receiver), key);
    };
  }));
  var containsKey = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.containsKey_uavxqf$', wrapFunction(function () {
    var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
    return function ($receiver, key) {
      return contains(Object.keys($receiver), key);
    };
  }));
  var containsValue = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.containsValue_au43ga$', wrapFunction(function () {
    var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
    return function ($receiver, value) {
      return contains(Object.values($receiver), value);
    };
  }));
  var getOrDefault = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.getOrDefault_m57sc4$', function ($receiver, key, defaultValue) {
    var tmp$;
    return (tmp$ = $receiver[key]) != null ? tmp$ : defaultValue;
  });
  var getOrElse = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.getOrElse_fm57ce$', function ($receiver, key, defaultValue) {
    var tmp$;
    return (tmp$ = $receiver[key]) != null ? tmp$ : defaultValue();
  });
  var isEmpty = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.isEmpty_sn73m1$', function ($receiver) {
    return Object.keys($receiver).length === 0;
  });
  var isNotEmpty = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.isNotEmpty_sn73m1$', function ($receiver) {
    return !(Object.keys($receiver).length === 0);
  });
  var asIterable = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.asIterable_sn73m1$', wrapFunction(function () {
    var asIterable = Kotlin.kotlin.collections.asIterable_us0mfu$;
    return function ($receiver) {
      return asIterable(Object.entries($receiver));
    };
  }));
  var asSequence = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.asSequence_sn73m1$', wrapFunction(function () {
    var asSequence = Kotlin.kotlin.collections.asSequence_us0mfu$;
    return function ($receiver) {
      return asSequence(Object.entries($receiver));
    };
  }));
  var toPair = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.toPair_pk561z$', wrapFunction(function () {
    var Pair_init = Kotlin.kotlin.Pair;
    return function ($receiver) {
      return new Pair_init($receiver[0], $receiver[1]);
    };
  }));
  var toMap = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.toMap_sn73m1$', wrapFunction(function () {
    var toMap = _.screeps.utils.toMap_q70yjw$;
    return function ($receiver) {
      return toMap($receiver);
    };
  }));
  function toMap_0($receiver) {
    var $receiver_0 = LinkedHashMap_init();
    var $receiver_1 = Object.entries($receiver);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
      var element = $receiver_1[tmp$];
      var k = element[0];
      var v = element[1];
      $receiver_0.put_xwzc9p$(k, v);
    }
    return $receiver_0;
  }
  function Result() {
    this.error_f4ivvh$_0 = null;
    this.value_mwu8pg$_0 = null;
  }
  Object.defineProperty(Result.prototype, 'error', {
    configurable: true,
    get: function () {
      return this.error_f4ivvh$_0;
    }
  });
  Object.defineProperty(Result.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.value_mwu8pg$_0;
    }
  });
  function Result$Error(error) {
    Result.call(this);
    this.error_pn3h43$_0 = error;
  }
  Object.defineProperty(Result$Error.prototype, 'error', {
    get: function () {
      return this.error_pn3h43$_0;
    }
  });
  Result$Error.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Error',
    interfaces: [Result]
  };
  function Result$Value(value) {
    Result.call(this);
    this.value_unelwv$_0 = value;
  }
  Object.defineProperty(Result$Value.prototype, 'value', {
    get: function () {
      return this.value_unelwv$_0;
    }
  });
  Result$Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: [Result]
  };
  Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  function jsonToMap(json) {
    var tmp$, tmp$_0, tmp$_1;
    var map = LinkedHashMap_init();
    tmp$ = iterator(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      var value = (tmp$_1 = json[typeof (tmp$_0 = key) === 'string' ? tmp$_0 : throwCCE()]) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      map.put_xwzc9p$(key, value);
    }
    return map;
  }
  function copy($receiver, x, y, name) {
    if (x === void 0)
      x = $receiver.x;
    if (y === void 0)
      y = $receiver.y;
    if (name === void 0)
      name = $receiver.roomName;
    return new RoomPosition(x, y, name);
  }
  function get_terrain($receiver) {
    if (equals($receiver, TERRAIN_MASK_WALL))
      return TERRAIN_WALL;
    else if (equals($receiver, TERRAIN_MASK_SWAMP))
      return TERRAIN_SWAMP;
    else
      return TERRAIN_PLAIN;
  }
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
  MemoryDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryDelegate',
    interfaces: [ReadWriteProperty]
  };
  function memory$lambda() {
    return null;
  }
  function memory() {
    return new MemoryDelegate(memory$lambda);
  }
  function memory_0(defaultValue) {
    return new MemoryDelegate(defaultValue);
  }
  var memory_1 = defineInlineFunction('screeps-kotlin-types-jsLegacy.screeps.utils.memory.memory_bxkerw$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var MemoryMappingDelegate_init = _.screeps.utils.memory.MemoryMappingDelegate;
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
    return function (T_0, isT, defaultValue) {
      return new MemoryMappingDelegate_init(memory$lambda(defaultValue), getPropertyCallableRef('name', 1, function ($receiver) {
        return $receiver.name;
      }), memory$lambda_0(T_0, isT));
    };
  }));
  function MemoryMappingDelegate(default_0, serializer, deserializer) {
    this.default = default_0;
    this.serializer = serializer;
    this.deserializer = deserializer;
  }
  MemoryMappingDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    var value = typeof (tmp$ = thisRef[property.callableName]) === 'string' ? tmp$ : null;
    if (value != null) {
      tmp$_0 = this.deserializer(value);
    } else {
      var defaultValue = this.default();
      thisRef[property.callableName] = this.serializer(defaultValue);
      tmp$_0 = defaultValue;
    }
    return tmp$_0;
  };
  MemoryMappingDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = this.serializer(value);
  };
  MemoryMappingDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryMappingDelegate',
    interfaces: [ReadWriteProperty]
  };
  function memoryWithSerializer(default_0, serializer, deserializer) {
    return new MemoryMappingDelegate(default_0, serializer, deserializer);
  }
  function jsObject(block) {
    var $receiver = new Any();
    block($receiver);
    return $receiver;
  }
  var package$screeps = _.screeps || (_.screeps = {});
  var package$api = package$screeps.api || (package$screeps.api = {});
  package$api.get_value_61birg$ = get_value;
  Object.defineProperty(package$api, 'TERRAIN_MASK_NONE', {
    get: function () {
      return TERRAIN_MASK_NONE;
    }
  });
  Object.defineProperty(package$api, 'TERRAIN_PLAIN', {
    get: function () {
      return TERRAIN_PLAIN;
    }
  });
  Object.defineProperty(package$api, 'TERRAIN_SWAMP', {
    get: function () {
      return TERRAIN_SWAMP;
    }
  });
  Object.defineProperty(package$api, 'TERRAIN_WALL', {
    get: function () {
      return TERRAIN_WALL;
    }
  });
  Object.defineProperty(package$api, 'TERRAIN_LAVA', {
    get: function () {
      return TERRAIN_LAVA;
    }
  });
  Object.defineProperty(package$api, 'LINE_STYLE_DASHED', {
    get: function () {
      return LINE_STYLE_DASHED;
    }
  });
  Object.defineProperty(package$api, 'LINE_STYLE_DOTTED', {
    get: function () {
      return LINE_STYLE_DOTTED;
    }
  });
  Object.defineProperty(package$api, 'LINE_STYLE_SOLID', {
    get: function () {
      return LINE_STYLE_SOLID;
    }
  });
  Object.defineProperty(package$api, 'TEXT_ALIGN_LEFT', {
    get: function () {
      return TEXT_ALIGN_LEFT;
    }
  });
  Object.defineProperty(package$api, 'TEXT_ALIGN_CENTER', {
    get: function () {
      return TEXT_ALIGN_CENTER;
    }
  });
  Object.defineProperty(package$api, 'TEXT_ALIGN_RIGHT', {
    get: function () {
      return TEXT_ALIGN_RIGHT;
    }
  });
  Object.defineProperty(package$api, 'ALGORITHM_ASTAR', {
    get: function () {
      return ALGORITHM_ASTAR;
    }
  });
  Object.defineProperty(package$api, 'ALGORITHM_DIJKSTRA', {
    get: function () {
      return ALGORITHM_DIJKSTRA;
    }
  });
  package$api.findRoute_vgdzup$ = findRoute;
  package$api.OrderCreationParams = OrderCreationParams;
  package$api.options_v9cmv8$ = options;
  Object.defineProperty(package$api, 'COSTMATRIX_FALSE', {
    get: function () {
      return COSTMATRIX_FALSE;
    }
  });
  package$api.GoalWithRange = GoalWithRange;
  package$api.component1_pk561z$ = component1;
  package$api.component2_pk561z$ = component2;
  package$api.get_uavxqf$ = get_0;
  package$api.set_gldspr$ = set;
  package$api.get_entries_pabm7i$ = get_entries;
  package$api.get_values_pabm7i$ = get_values;
  package$api.get_keys_pabm7i$ = get_keys;
  $$importsForInline$$['screeps-kotlin-types-jsLegacy'] = _;
  package$api.get_size_pabm7i$ = get_size;
  package$api.iterator_sn73m1$ = iterator_0;
  package$api.lookAtArea_vi1pf9$ = lookAtArea;
  package$api.lookAtAreaAsArray_vi1pf9$ = lookAtAreaAsArray;
  package$api.compareTo_4yg84r$ = compareTo;
  var package$utils = package$screeps.utils || (package$screeps.utils = {});
  package$utils.lazyPerTick_ibfsg1$ = lazyPerTick;
  package$utils.recordOf_qfcya0$ = recordOf;
  package$utils.mutableRecordOf_qfcya0$ = mutableRecordOf;
  package$utils.containsKey_uavxqf$ = containsKey;
  package$utils.contains_uavxqf$ = contains;
  package$utils.containsValue_au43ga$ = containsValue;
  package$utils.getOrDefault_m57sc4$ = getOrDefault;
  package$utils.getOrElse_fm57ce$ = getOrElse;
  package$utils.isEmpty_sn73m1$ = isEmpty;
  package$utils.isNotEmpty_sn73m1$ = isNotEmpty;
  package$utils.asIterable_sn73m1$ = asIterable;
  package$utils.asSequence_sn73m1$ = asSequence;
  package$utils.toPair_pk561z$ = toPair;
  package$utils.toMap_q70yjw$ = toMap_0;
  package$utils.toMap_sn73m1$ = toMap;
  Result.Error = Result$Error;
  Result.Value = Result$Value;
  package$utils.Result = Result;
  package$utils.jsonToMap_ovnthm$ = jsonToMap;
  package$utils.copy_u6xmz4$ = copy;
  package$utils.get_terrain_6erqrd$ = get_terrain;
  var package$memory = package$utils.memory || (package$utils.memory = {});
  package$memory.MemoryDelegate = MemoryDelegate;
  package$memory.memory_287e2$ = memory;
  package$memory.memory_9ce4rd$ = memory_0;
  package$memory.MemoryMappingDelegate = MemoryMappingDelegate;
  package$memory.memoryWithSerializer_2s3ykh$ = memoryWithSerializer;
  var package$unsafe = package$utils.unsafe || (package$utils.unsafe = {});
  package$unsafe.jsObject_7qq44f$ = jsObject;
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
  Kotlin.defineModule('screeps-kotlin-types-jsLegacy', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=screeps-kotlin-types-jsLegacy.js.map

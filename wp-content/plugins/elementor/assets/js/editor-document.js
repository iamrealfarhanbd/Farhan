/*! elementor - v2.7.6 - 08-12-2019 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 574);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(145);

var _Object$setPrototypeOf = __webpack_require__(92);

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(46);

var assertThisInitialized = __webpack_require__(55);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(112);

var setPrototypeOf = __webpack_require__(113);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(7);
var ctx = __webpack_require__(54);
var hide = __webpack_require__(24);
var has = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(51)('wks');
var uid = __webpack_require__(52);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(41);
var Symbol = __webpack_require__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(86);
var toPrimitive = __webpack_require__(57);
var dP = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(104);
var defined = __webpack_require__(48);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(29);
var $find = __webpack_require__(115)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(72)(KEY);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(37);
var createDesc = __webpack_require__(80);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(39);
module.exports = __webpack_require__(11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(116);

var _Reflect$get = __webpack_require__(163);

var superPropBase = __webpack_require__(166);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _Reflect$get) {
    module.exports = _get = _Reflect$get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;

      var desc = _Object$getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(45);
var hide = __webpack_require__(23);
var redefine = __webpack_require__(32);
var ctx = __webpack_require__(71);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(37).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(21) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var hide = __webpack_require__(23);
var has = __webpack_require__(47);
var SRC = __webpack_require__(52)('src');
var $toString = __webpack_require__(110);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(45).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(90);
var enumBugKeys = __webpack_require__(61);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(48);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(101);
var toPrimitive = __webpack_require__(94);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(44);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(42);
var createDesc = __webpack_require__(39);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(57);
var has = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(86);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(130);

var _Symbol = __webpack_require__(139);

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(20);
var toObject = __webpack_require__(56);
var toLength = __webpack_require__(38);
var toInteger = __webpack_require__(44);
var advanceStringIndex = __webpack_require__(95);
var regExpExec = __webpack_require__(78);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(79)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(117);
var enumBugKeys = __webpack_require__(61);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(87)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(136).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(45);
var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(85) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(16);
var TAG = __webpack_require__(12)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(103);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(40) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(40);
var wksExt = __webpack_require__(62);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(49);

var _keys = _interopRequireDefault(__webpack_require__(28));

__webpack_require__(70);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var BaseComponent =
/*#__PURE__*/
function (_elementorModules$Mod) {
  (0, _inherits2.default)(BaseComponent, _elementorModules$Mod);

  function BaseComponent() {
    (0, _classCallCheck2.default)(this, BaseComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BaseComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(BaseComponent, [{
    key: "__construct",
    value: function __construct() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (args.manager) {
        this.manager = args.manager;
      }

      this.commands = this.defaultCommands();
      this.routes = this.defaultRoutes();
      this.tabs = this.defaultTabs();
      this.shortcuts = this.defaultShortcuts();
      this.defaultRoute = '';
      this.currentTab = '';
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      jQuery.each(this.getTabs(), function (tab) {
        return _this.registerTabRoute(tab);
      });
      jQuery.each(this.getRoutes(), function (route, callback) {
        return _this.registerRoute(route, callback);
      });
      jQuery.each(this.getCommands(), function (command, callback) {
        return _this.registerCommand(command, callback);
      });
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      elementorModules.ForceMethodImplementation();
    }
  }, {
    key: "getRootContainer",
    value: function getRootContainer() {
      var parts = this.getNamespace().split('/');
      return parts[0];
    }
  }, {
    key: "defaultTabs",
    value: function defaultTabs() {
      return {};
    }
  }, {
    key: "defaultRoutes",
    value: function defaultRoutes() {
      return {};
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {};
    }
  }, {
    key: "defaultShortcuts",
    value: function defaultShortcuts() {
      return {};
    }
  }, {
    key: "getCommands",
    value: function getCommands() {
      return this.commands;
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      return this.routes;
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this.tabs;
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return this.shortcuts;
    }
  }, {
    key: "registerCommand",
    value: function registerCommand(command, callback) {
      $e.commands.register(this, command, callback);
    }
  }, {
    key: "registerRoute",
    value: function registerRoute(route, callback) {
      $e.routes.register(this, route, callback);
    }
  }, {
    key: "registerTabRoute",
    value: function registerTabRoute(tab) {
      var _this2 = this;

      this.registerRoute(tab, function () {
        return _this2.activateTab(tab);
      });
    }
  }, {
    key: "dependency",
    value: function dependency() {
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      return true;
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen) {
        return false;
      }

      this.isOpen = false;
      this.inactivate();
      $e.routes.clearCurrent(this.getNamespace());
      return true;
    }
  }, {
    key: "activate",
    value: function activate() {
      $e.components.activate(this.getNamespace());
    }
  }, {
    key: "inactivate",
    value: function inactivate() {
      $e.components.inactivate(this.getNamespace());
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return $e.components.isActive(this.getNamespace());
    }
  }, {
    key: "onRoute",
    value: function onRoute(route) {
      elementorCommon.elements.$body.addClass(this.getBodyClass(route));
      this.activate();
      this.trigger('route/open', route);
    }
  }, {
    key: "onCloseRoute",
    value: function onCloseRoute(route) {
      elementorCommon.elements.$body.removeClass(this.getBodyClass(route));
      this.inactivate();
      this.trigger('route/close', route);
    }
  }, {
    key: "setDefaultRoute",
    value: function setDefaultRoute(route) {
      this.defaultRoute = this.getNamespace() + '/' + route;
    }
  }, {
    key: "getDefaultRoute",
    value: function getDefaultRoute() {
      return this.defaultRoute;
    }
  }, {
    key: "removeTab",
    value: function removeTab(tab) {
      delete this.tabs[tab];
    }
  }, {
    key: "hasTab",
    value: function hasTab(tab) {
      return !!this.tabs[tab];
    }
  }, {
    key: "addTab",
    value: function addTab(tab, args, position) {
      var _this3 = this;

      this.tabs[tab] = args; // It can be 0.

      if ('undefined' !== typeof position) {
        var newTabs = {};
        var ids = (0, _keys.default)(this.tabs); // Remove new tab

        ids.pop(); // Add it to position.

        ids.splice(position, 0, tab);
        ids.forEach(function (id) {
          newTabs[id] = _this3.tabs[id];
        });
        this.tabs = newTabs;
      }

      this.registerTabRoute(tab);
    }
  }, {
    key: "getTabsWrapperSelector",
    value: function getTabsWrapperSelector() {
      return '';
    }
  }, {
    key: "getTabRoute",
    value: function getTabRoute(tab) {
      return this.getNamespace() + '/' + tab;
    }
  }, {
    key: "renderTab",
    value: function renderTab(tab) {} // eslint-disable-line

  }, {
    key: "activateTab",
    value: function activateTab(tab) {
      var _this4 = this;

      this.currentTab = tab;
      this.renderTab(tab);
      jQuery(this.getTabsWrapperSelector() + ' .elementor-component-tab').off('click').on('click', function (event) {
        $e.route(_this4.getTabRoute(event.currentTarget.dataset.tab));
      }).removeClass('elementor-active').filter('[data-tab="' + tab + '"]').addClass('elementor-active');
    }
  }, {
    key: "getBodyClass",
    value: function getBodyClass(route) {
      return 'e-route-' + route.replace(/\//g, '-');
    }
  }]);
  return BaseComponent;
}(elementorModules.Module);

exports.default = BaseComponent;

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(16);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(109);
var anObject = __webpack_require__(20);
var speciesConstructor = __webpack_require__(167);
var advanceStringIndex = __webpack_require__(95);
var toLength = __webpack_require__(38);
var callRegExpExec = __webpack_require__(78);
var regexpExec = __webpack_require__(75);
var fails = __webpack_require__(22);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(79)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(68);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(9)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(23)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(7);
var fails = __webpack_require__(25);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(102);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var History =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(History, _Base);

  function History(args) {
    var _this;

    (0, _classCallCheck2.default)(this, History);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(History).call(this, args));
    /**
     * Get History from child command.
     *
     * @type {{}|boolean}
     */

    _this.history = _this.getHistory(args);
    /**
     *
     * @type {number|boolean}
     */

    _this.historyId = false;
    return _this;
  }
  /**
   * Function getHistory().
   *
   * Get history object from child, do nothing if it false.
   *
   * @param {{}} args
   *
   * @returns {{}|boolean}
   *
   * @throws {Error}
   */


  (0, _createClass2.default)(History, [{
    key: "getHistory",
    value: function getHistory(args) {
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function isHistoryActive().
     *
     * Return `elementor.history.history.getActive()`.
     *
     * @returns {boolean}
     */

  }, {
    key: "isHistoryActive",
    value: function isHistoryActive() {
      return elementor.history.history.getActive();
    }
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onBeforeRun", this).call(this, args);

      if (this.history && this.isHistoryActive()) {
        this.historyId = $e.run('document/history/start-log', this.history);
      }
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onAfterRun", this).call(this, args, result);

      if (this.history && this.isHistoryActive()) {
        $e.run('document/history/end-log', {
          id: this.historyId
        });
      }
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onCatchApply", this).call(this, e); // Rollback history on failure.

      if (e instanceof elementorModules.common.HookBreak && this.historyId) {
        $e.run('document/history/delete-log', {
          id: this.historyId
        });
      }
    }
  }]);
  return History;
}(_base.default);

exports.default = History;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(108);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(160);
var redefine = __webpack_require__(32);
var hide = __webpack_require__(23);
var fails = __webpack_require__(22);
var defined = __webpack_require__(30);
var wks = __webpack_require__(9);
var regexpExec = __webpack_require__(75);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(132)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(82)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(40);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(89);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(36);
var $iterCreate = __webpack_require__(133);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(66);
var ITERATOR = __webpack_require__(12)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(90);
var hiddenKeys = __webpack_require__(61).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(87)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(134)(false);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var global = __webpack_require__(10);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(36);
var TO_STRING_TAG = __webpack_require__(12)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(159)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(55));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(67));

var _argsObject = _interopRequireDefault(__webpack_require__(194));

/**
 * TODO: Should we do validate function in scenarios where args are are not required.
 * but should be validate?
 */
var Base =
/*#__PURE__*/
function (_ArgsObject) {
  (0, _inherits2.default)(Base, _ArgsObject);

  /**
   * Current component (elementorModules.Module ).
   *
   * @type {{}}
   */

  /**
   * Function constructor().
   *
   * Create Commands Base.
   *
   * @param {{}} args
   */
  function Base(args) {
    var _this;

    (0, _classCallCheck2.default)(this, Base);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Base).call(this, args)); // Acknowledge self about which command it run.

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "component", {});
    _this.currentCommand = $e.commands.getCurrent('document'); // Assign instance of current component.

    _this.component = $e.commands.getComponent(_this.currentCommand); // Who ever need do something before without `super` the constructor can use `initialize` method.

    _this.initialize(args); // Refresh args, maybe the changed via `initialize`.


    args = _this.args; // Validate args before run.

    _this.validateArgs(args);

    return _this;
  }
  /**
   * Function requireContainer().
   *
   * Validate `arg.container` & `arg.containers`.
   *
   * @param {{}} args
   *
   * @throws {Error}
   */


  (0, _createClass2.default)(Base, [{
    key: "requireContainer",
    value: function requireContainer() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.args;

      if (!args.container && !args.containers) {
        throw Error('container or containers are required.');
      }

      if (args.container && args.containers) {
        throw Error('container and containers cannot go together please select one of them.');
      }

      var containers = args.containers || [args.container];
      containers.forEach(function (container) {
        _this2.requireArgumentInstance('container', elementorModules.editor.Container, {
          container: container
        });
      });
    }
    /**
     * Function initialize().
     *
     * Initialize command, called after construction.
     *
     * @param {{}} args
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function validateArgs().
     *
     * Validate command arguments.
     *
     * @param {{}} args
     */

  }, {
    key: "validateArgs",
    value: function validateArgs(args) {} // eslint-disable-line no-unused-vars

    /**
     * Function isDataChanged().
     *
     * Whether the editor needs to set change flag on/off.
     *
     * @returns {boolean}
     */

  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return false;
    }
    /**
     * Function apply().
     *
     * Do the actual command.
     *
     * @param {{}} args
     *
     * @returns {*}
     */

  }, {
    key: "apply",
    value: function apply(args) {
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function run().
     *
     * Run command with history & hooks.
     *
     * @returns {*}
     */

  }, {
    key: "run",
    value: function run() {
      var result; // For $e.events.

      this.onBeforeRun(this.args);

      try {
        // For $e.hooks.
        this.onBeforeApply(this.args);
        result = this.apply(this.args);
      } catch (e) {
        this.onCatchApply(e);

        if (e instanceof elementorModules.common.HookBreak) {
          return false;
        }
      } // For $e.hooks.


      this.onAfterApply(this.args, result);

      if (this.isDataChanged()) {
        elementor.saver.setFlagEditorChange(true);
      } // For $e.events.


      this.onAfterRun(this.args, result);
      return result;
    }
    /**
     * Function onBeforeRun.
     *
     * Called before run().
     *
     * @param {{}} args
     */

  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      $e.events.runBefore(this.currentCommand, args);
    }
    /**
     * Function onAfterRun.
     *
     * Called after run().
     *
     * @param {{}} args
     * @param {*} result
     */

  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      $e.events.runAfter(this.currentCommand, args, result);
    }
    /**
     * Function onBeforeApply.
     *
     * Called before apply().
     *
     * @param {{}} args
     */

  }, {
    key: "onBeforeApply",
    value: function onBeforeApply(args) {
      $e.hooks.runDependency(this.currentCommand, args);
    }
    /**
     * Function onAfterApply.
     *
     * Called after apply().
     *
     * @param {{}} args
     * @param {*} result
     */

  }, {
    key: "onAfterApply",
    value: function onAfterApply(args, result) {
      $e.hooks.runAfter(this.currentCommand, args, result);
    }
    /**
     * Function onCatchApply.
     *
     * Called after apply() failed.
     *
     * @param {Error} e
     */

  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      if ($e.devTools) {
        $e.devTools.log.error(e);
      }

      if (!(e instanceof elementorModules.common.HookBreak)) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }]);
  return Base;
}(_argsObject.default);

exports.default = Base;

/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(69);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(116);

var _Object$defineProperty = __webpack_require__(1);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(84)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(20);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(69);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(58);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(196);

var iterableToArrayLimit = __webpack_require__(199);

var nonIterableRest = __webpack_require__(202);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(35);
var TAG = __webpack_require__(9)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(26);
var cof = __webpack_require__(35);
var MATCH = __webpack_require__(9)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51)('native-function-to-string', Function.toString);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(41)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(16);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(92);

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(71);
var IObject = __webpack_require__(88);
var toObject = __webpack_require__(56);
var toLength = __webpack_require__(38);
var asc = __webpack_require__(127);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(161);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(33);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(10);
var has = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(11);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(89);
var META = __webpack_require__(111).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(60);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(41);
var wks = __webpack_require__(12);
var wksExt = __webpack_require__(62);
var wksDefine = __webpack_require__(63);
var enumKeys = __webpack_require__(141);
var isArray = __webpack_require__(99);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(34);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(57);
var createDesc = __webpack_require__(39);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(142);
var $GOPD = __webpack_require__(43);
var $GOPS = __webpack_require__(73);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(33);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(83).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(42).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(40)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 120 */
/***/ (function(module, exports) {



/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _values = _interopRequireDefault(__webpack_require__(114));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    (0, _classCallCheck2.default)(this, Helpers);
  }

  (0, _createClass2.default)(Helpers, null, [{
    key: "findViewRecursive",
    value: function findViewRecursive(parent, key, value) {
      var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var found = [];

      for (var x in parent._views) {
        var view = parent._views[x];

        if (value === view.model.get(key)) {
          found.push(view);

          if (!multiple) {
            return found;
          }
        }

        if (view.children) {
          var views = Helpers.findViewRecursive(view.children, key, value, multiple);

          if (views.length) {
            found = found.concat(views);

            if (!multiple) {
              return found;
            }
          }
        }
      }

      return found;
    }
  }, {
    key: "findViewById",
    value: function findViewById(id) {
      var elements = Helpers.findViewRecursive(elementor.getPreviewView().children, 'id', id, false);
      return elements ? elements[0] : false;
    }
  }, {
    key: "isValidChild",
    value: function isValidChild(childModel, parentModel) {
      var parentElType = parentModel.get('elType'),
          draggedElType = childModel.get('elType');

      if (childModel.get('isInner') && parentModel.get('isInner')) {
        return false;
      }

      if (draggedElType === parentElType) {
        return false;
      }

      if ('section' === draggedElType && !childModel.get('isInner') && 'column' === parentElType) {
        return false;
      }

      var childTypes = elementor.helpers.getElementChildType(parentElType);
      return childTypes && -1 !== childTypes.indexOf(childModel.get('elType'));
    }
  }, {
    key: "isValidGrandChild",
    value: function isValidGrandChild(childModel, targetContainer) {
      var result;
      var childElType = childModel.get('elType');

      switch (targetContainer.model.get('elType')) {
        case 'document':
          result = true;
          break;

        case 'section':
          result = 'widget' === childElType;
          break;

        default:
          result = false;
      }

      return result;
    }
  }, {
    key: "isSameElement",
    value: function isSameElement(sourceModel, targetContainer) {
      var targetElType = targetContainer.model.get('elType'),
          sourceElType = sourceModel.get('elType');

      if (targetElType !== sourceElType) {
        return false;
      }

      if ('column' === targetElType && 'column' === sourceElType) {
        return true;
      }

      return targetContainer.model.get('isInner') === sourceModel.get('isInner');
    }
  }, {
    key: "getPasteOptions",
    value: function getPasteOptions(sourceModel, targetContainer) {
      var result = {};
      result.isValidChild = Helpers.isValidChild(sourceModel, targetContainer.model);
      result.isSameElement = Helpers.isSameElement(sourceModel, targetContainer);
      result.isValidGrandChild = Helpers.isValidGrandChild(sourceModel, targetContainer);
      return result;
    }
  }, {
    key: "isPasteEnabled",
    value: function isPasteEnabled(targetContainer) {
      var storage = elementorCommon.storage.get('clipboard'); // No storage? no paste.

      if (!storage || !storage[0]) {
        return false;
      }

      if (!(storage[0] instanceof Backbone.Model)) {
        storage[0] = new Backbone.Model(storage[0]);
      }

      var pasteOptions = Helpers.getPasteOptions(storage[0], targetContainer);
      return (0, _values.default)(pasteOptions).some(function (opt) {
        return !!opt;
      });
    }
  }]);
  return Helpers;
}();

exports.default = Helpers;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(197);

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(128);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var isArray = __webpack_require__(129);
var SPECIES = __webpack_require__(9)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(91);
module.exports = __webpack_require__(62).f('iterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var defined = __webpack_require__(48);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(39);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(12)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(105);
var toAbsoluteIndex = __webpack_require__(135);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(10).document;
module.exports = document && document.documentElement;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(138);
var step = __webpack_require__(118);
var Iterators = __webpack_require__(36);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(82)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(143);
__webpack_require__(144);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(73);
var pIE = __webpack_require__(42);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(83).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63)('asyncIterator');


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63)('observable');


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(34);
var $getPrototypeOf = __webpack_require__(66);

__webpack_require__(74)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(150).set });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(18);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(54)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(50) });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(69);
var TAG = __webpack_require__(12)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var defined = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(75);
__webpack_require__(29)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(162);
var $Object = __webpack_require__(7).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(17);
var $getOwnPropertyDescriptor = __webpack_require__(43).f;

__webpack_require__(74)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
module.exports = __webpack_require__(7).Reflect.get;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(66);
var has = __webpack_require__(16);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(18);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(4);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(20);
var aFunction = __webpack_require__(68);
var SPECIES = __webpack_require__(9)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(153);
var ITERATOR = __webpack_require__(12)('iterator');
var Iterators = __webpack_require__(36);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34);
var $keys = __webpack_require__(33);

__webpack_require__(74)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var getKeys = __webpack_require__(33);
var toIObject = __webpack_require__(17);
var isEnum = __webpack_require__(42).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200);

/***/ }),
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(46));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var ArgsObject =
/*#__PURE__*/
function () {
  /**
   * Function constructor().
   *
   * Create ArgsObject.
   *
   * @param {{}} args
   */
  function ArgsObject(args) {
    (0, _classCallCheck2.default)(this, ArgsObject);
    this.args = args;
  }
  /**
   * Function requireArgument().
   *
   * Validate property in args.
   *
   * @param {string} property
   * @param {{}} args
   *
   * @throws {Error}
   *
   */


  (0, _createClass2.default)(ArgsObject, [{
    key: "requireArgument",
    value: function requireArgument(property) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.args;

      if (!args.hasOwnProperty(property)) {
        throw Error("".concat(property, " is required."));
      }
    }
    /**
     * Function requireArgumentType().
     *
     * Validate property in args using `type === typeof(args.whatever)`.
     *
     * @param {string} property
     * @param {string} type
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentType",
    value: function requireArgumentType(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if ((0, _typeof2.default)(args[property]) !== type) {
        throw Error("".concat(property, " invalid type: ").concat(type, "."));
      }
    }
    /**
     * Function requireArgumentInstance().
     *
     * Validate property in args using `args.whatever instanceof instance`.
     *
     * @param {string} property
     * @param {instanceof} instance
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentInstance",
    value: function requireArgumentInstance(property, instance) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if (!(args[property] instanceof instance)) {
        throw Error("".concat(property, " invalid instance."));
      }
    }
    /**
     * Function requireArgumentConstructor().
     *
     * Validate property in args using `type === args.whatever.constructor`.
     *
     * @param {string} property
     * @param {*} type
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentConstructor",
    value: function requireArgumentConstructor(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if (args[property].constructor !== type) {
        throw Error("".concat(property, " invalid constructor type."));
      }
    }
  }]);
  return ArgsObject;
}();

exports.default = ArgsObject;

/***/ }),
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(122);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
module.exports = __webpack_require__(7).Array.isArray;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(8);

$export($export.S, 'Array', { isArray: __webpack_require__(99) });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(189);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
__webpack_require__(81);
module.exports = __webpack_require__(201);


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var get = __webpack_require__(169);
module.exports = __webpack_require__(7).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 202 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(210);
module.exports = __webpack_require__(7).Object.entries;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $entries = __webpack_require__(178)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);
module.exports = __webpack_require__(7).Object.values;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $values = __webpack_require__(178)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 223 */,
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(225);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(226) });


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(11);
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(73);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(104);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(509));

var After =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(After, _Base);

  function After() {
    (0, _classCallCheck2.default)(this, After);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(After).apply(this, arguments));
  }

  (0, _createClass2.default)(After, [{
    key: "register",
    value: function register() {
      $e.hooks.registerAfter(this);
    }
  }]);
  return After;
}(_base.default);

exports.default = After;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(598));

var After =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(After, _Base);

  function After() {
    (0, _classCallCheck2.default)(this, After);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(After).apply(this, arguments));
  }

  (0, _createClass2.default)(After, [{
    key: "register",
    value: function register() {
      $e.events.registerAfter(this);
    }
  }]);
  return After;
}(_base.default);

exports.default = After;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(28));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(67));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _debounce = _interopRequireDefault(__webpack_require__(285));

var Settings =
/*#__PURE__*/
function (_Debounce) {
  (0, _inherits2.default)(Settings, _Debounce);

  function Settings() {
    (0, _classCallCheck2.default)(this, Settings);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Settings).apply(this, arguments));
  }

  (0, _createClass2.default)(Settings, [{
    key: "addToHistory",

    /**
     * TODO:
     * @param container
     * @param newSettings
     * @param oldSettings
     */
    value: function addToHistory(container, newSettings, oldSettings) {
      var changes = (0, _defineProperty2.default)({}, container.id, {
        old: oldSettings,
        new: newSettings
      }),
          historyItem = {
        containers: [container],
        data: {
          changes: changes
        },
        type: 'change',
        restore: Settings.restore
      };
      $e.run('document/history/add-transaction', historyItem);
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          subTitle = this.constructor.getSubTitle(args);
      return {
        containers: containers,
        subTitle: subTitle,
        type: 'change'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          _args$settings = args.settings,
          settings = _args$settings === void 0 ? {} : _args$settings,
          _args$isMultiSettings = args.isMultiSettings,
          isMultiSettings = _args$isMultiSettings === void 0 ? false : _args$isMultiSettings,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;
      containers.forEach(function (container) {
        container = container.lookup();
        /**
         * Settings support multi settings for each container, eg use:
         * settings: { '{ container-id }': { someSettingKey: someSettingValue } } etc.
         */

        var newSettings = isMultiSettings ? settings[container.id] : settings,
            oldSettings = container.settings.toJSON(); // Clear old oldValues.

        container.oldValues = {}; // Set oldValues, For each setting is about to change save setting value.

        (0, _entries.default)(newSettings).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          // eslint-disable-line no-unused-vars
          container.oldValues[key] = oldSettings[key];
        }); // If history active, add history transaction with old and new settings.

        if (_this.isHistoryActive()) {
          _this.addToHistory(container, newSettings, container.oldValues);
        }

        if (options.external) {
          container.settings.setExternalChange(newSettings);
        } else {
          container.settings.set(newSettings);
        }

        container.render();
      });
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "getSubTitle",

    /**
     * Function getSubTitle().
     *
     * Get sub title by container.
     *
     * @param {{}} args
     *
     * @returns {string}
     */
    value: function getSubTitle(args) {
      var _args$containers3 = args.containers,
          containers = _args$containers3 === void 0 ? [args.container] : _args$containers3,
          _args$settings2 = args.settings,
          settings = _args$settings2 === void 0 ? {} : _args$settings2,
          isMultiSettings = args.isMultiSettings,
          settingsKeys = (0, _keys.default)(settings),
          controls = containers[0].controls,
          firstSettingKey = settingsKeys[0];
      var result = '';

      if (!isMultiSettings && 1 === settingsKeys.length && controls && controls[firstSettingKey]) {
        result = controls[firstSettingKey].label;
      }

      return result;
    }
    /**
     * Function restore().
     *
     * Redo/Restore.
     *
     * @param {{}} historyItem
     * @param {boolean} isRedo
     */

  }, {
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data');
      historyItem.get('containers').forEach(function (container) {
        var changes = data.changes[container.id];
        $e.run('document/elements/settings', {
          container: container,
          settings: isRedo ? changes.new : changes.old,
          options: {
            external: true
          }
        });
      });
    }
  }]);
  return Settings;
}(_debounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(29);
var $find = __webpack_require__(115)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(72)(KEY);


/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Create = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Create =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Create, _History);

  function Create() {
    (0, _classCallCheck2.default)(this, Create);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Create).apply(this, arguments));
  }

  (0, _createClass2.default)(Create, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args); // Avoid Backbone model & etc.

      this.requireArgumentConstructor('model', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        model: model,
        type: 'add',
        title: elementor.helpers.getModelLabel(model)
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var model = args.model,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      var result = []; // BC: Deprecated since 2.8.0 - use `$e.events`.

      if (!options.trigger) {
        options.trigger = {
          beforeAdd: 'element:before:add',
          afterAdd: 'element:after:add'
        };
      }

      containers.forEach(function (container) {
        container = container.lookup();
        var createdContainer = container.view.addElement(model, options).getContainer();
        result.push(createdContainer);
        /**
         * Acknowledge history of each created item, because we cannot pass the elements when they do not exist
         * in getHistory().
         */

        if (_this.isHistoryActive()) {
          $e.run('document/history/log-sub-item', {
            container: container,
            type: 'sub-add',
            restore: _this.constructor.restore,
            options: options,
            data: {
              containerToRestore: createdContainer,
              modelToRestore: createdContainer.model.toJSON()
            }
          });
        }
      });

      if (1 === result.length) {
        result = result[0];
      }

      return result;
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'),
          container = historyItem.get('container'),
          options = historyItem.get('options') || {}; // No clone when restoring. e.g: duplicate will generate unique ids while restoring.

      if (options.clone) {
        options.clone = false;
      }

      if (isRedo) {
        $e.run('document/elements/create', {
          container: container,
          model: data.modelToRestore,
          options: options
        });
      } else {
        $e.run('document/elements/delete', {
          container: data.containerToRestore
        });
      }
    }
  }]);
  return Create;
}(_history.default);

exports.Create = Create;
var _default = Create;
exports.default = _default;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(509));

var Dependency =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Dependency, _Base);

  function Dependency() {
    (0, _classCallCheck2.default)(this, Dependency);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dependency).apply(this, arguments));
  }

  (0, _createClass2.default)(Dependency, [{
    key: "register",
    value: function register() {
      $e.hooks.registerDependency(this);
    }
  }]);
  return Dependency;
}(_base.default);

exports.default = Dependency;

/***/ }),
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(67));

var CallbackBase =
/*#__PURE__*/
function () {
  /**
   * Callback type, eg ( hook, event ).
   *
   * @type {string}
   */

  /**
   * Full command address, that will hook the callback.
   *
   * @type ([].string|string)
   */

  /**
   * Unique id of the callback.
   *
   * @type {string}
   */

  /**
   * Function constructor().
   *
   * Create callback base.
   */
  function CallbackBase() {
    (0, _classCallCheck2.default)(this, CallbackBase);
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "command", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    this.initialize();
    this.type = this.getType();
    this.command = this.getCommand();
    this.id = this.getId();
    this.register();
  }
  /**
   * Function initialize().
   *
   * Called after creation of the base, used for initialize extras.
   * Without expending constructor.
   */


  (0, _createClass2.default)(CallbackBase, [{
    key: "initialize",
    value: function initialize() {}
    /**
     * Function register().
     *
     * Used to register the callback.
     *
     * @throws {Error}
     */

  }, {
    key: "register",
    value: function register() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getType().
     *
     * Get type eg: ( hook, event, etc ... ).
     *
     * @returns {string}
     *
     * @throws {Error}
     */

  }, {
    key: "getType",
    value: function getType() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getCommand().
     *
     * Returns the full command path for callback binding.
     *
     * Supports array of strings ( commands ).
     *
     * @returns {([].string|string)}
     *
     * @throws {Error}
     */

  }, {
    key: "getCommand",
    value: function getCommand() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getId().
     *
     * Returns command id for the hook (should be unique).
     *
     * @returns {string}
     *
     * @throws {Error}
     */

  }, {
    key: "getId",
    value: function getId() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getConditions().
     *
     * Condition for running the callback, if true, call to apply().
     *
     * @param {{}} args
     *
     * @returns {boolean}
     *
     * @throws {Error}
     */

  }, {
    key: "getConditions",
    value: function getConditions(args) {
      // eslint-disable-line no-unused-vars
      return true;
    }
    /**
     * Function apply().
     *
     * Apply the callback, ( The actual affect of the callback ).
     *
     * @param {{}} args
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args) {
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function run().
     *
     * Run the callback.
     *
     * @param {*} args
     *
     * @returns {boolean}
     */

  }, {
    key: "run",
    value: function run() {
      var _ref = arguments.length <= 0 ? undefined : arguments[0],
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options; // Disable callback if requested by args.options.


      if (options.callbacks && false === options.callbacks[this.id]) {
        return true;
      }

      if (this.getConditions(arguments.length <= 0 ? undefined : arguments[0])) {
        if ($e.devTools) {
          $e.devTools.log.callbacks().active(this.type, this.command, this.id);
        }

        return this.apply.apply(this, arguments);
      }

      return true;
    }
    /**
     * Function bindContainerType().
     *
     * Bind eElement type to callback.
     *
     * Used to gain performance.
     *
     * @return {string} type
     */

  }, {
    key: "bindContainerType",
    value: function bindContainerType() {}
  }]);
  return CallbackBase;
}();

exports.default = CallbackBase;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.getDefaultDebounceDelay = exports.DEFAULT_DEBOUNCE_DELAY = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(67));

var _base = _interopRequireDefault(__webpack_require__(97));

var _history = _interopRequireDefault(__webpack_require__(77));

/**
 * TODO: maybe file should be under history/debounce.js
 * TODO: Check if instance does not stuck in debounce memory and cause memory leaks.
 */
var DEFAULT_DEBOUNCE_DELAY = 800;
exports.DEFAULT_DEBOUNCE_DELAY = DEFAULT_DEBOUNCE_DELAY;

var getDefaultDebounceDelay = function getDefaultDebounceDelay() {
  var result = DEFAULT_DEBOUNCE_DELAY;

  if (ElementorConfig.document && undefined !== ElementorConfig.document.debounceDelay) {
    result = ElementorConfig.document.debounceDelay;
  }

  return result;
};

exports.getDefaultDebounceDelay = getDefaultDebounceDelay;

var Debounce =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Debounce, _History);

  function Debounce() {
    (0, _classCallCheck2.default)(this, Debounce);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Debounce).apply(this, arguments));
  }

  (0, _createClass2.default)(Debounce, [{
    key: "initialize",

    /**
     * Function debounce().
     *
     * Will debounce every function you pass in, at the same debounce flow.
     *
     * @param {function()}
     */
    value: function initialize(args) {
      var _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Debounce.prototype), "initialize", this).call(this, args);

      if (!this.constructor.debounce) {
        this.constructor.debounce = _.debounce(function (fn) {
          return fn();
        }, getDefaultDebounceDelay());
      } // If its head command, and not called within another command.


      if (1 === $e.commands.currentTrace.length || options.debounce) {
        this.isDebounceRequired = true;
      }
    } // TODO: test

  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      _base.default.prototype.onBeforeRun.call(this, args);

      if (this.history && this.isHistoryActive()) {
        $e.run('document/history/start-transaction', this.history);
      }
    } // TODO: test

  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      _base.default.prototype.onAfterRun.call(this, args, result);

      if (this.isHistoryActive()) {
        if (this.isDebounceRequired) {
          this.constructor.debounce(function () {
            $e.run('document/history/end-transaction');
          });
        } else {
          $e.run('document/history/end-transaction');
        }
      }
    } // TODO: test

  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      _base.default.prototype.onCatchApply.call(this, e); // Rollback history on failure.


      if (e instanceof elementorModules.common.HookBreak && this.history) {
        if (this.isDebounceRequired) {
          // `delete-transaction` is under debounce, because it should `delete-transaction` after `end-transaction`.
          this.constructor.debounce(function () {
            $e.run('document/history/delete-transaction');
          });
        } else {
          $e.run('document/history/delete-transaction');
        }
      }
    }
  }]);
  return Debounce;
}(_history.default);

exports.default = Debounce;
(0, _defineProperty2.default)(Debounce, "debounce", null);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var _settings = _interopRequireDefault(__webpack_require__(235));

var DisableEnable =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(DisableEnable, _History);

  function DisableEnable() {
    (0, _classCallCheck2.default)(this, DisableEnable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DisableEnable).apply(this, arguments));
  }

  (0, _createClass2.default)(DisableEnable, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(DisableEnable.prototype), "initialize", this).call(this, args);
      /**
       * Which command is running.
       *
       * @type {string}
       */

      this.type = 'document/dynamic/enable' === this.currentCommand ? 'enable' : 'disable';
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          changes = {};
      containers.forEach(function (container) {
        var id = container.id;

        if (!changes[id]) {
          changes[id] = {};
        }

        changes[id] = settings;
      });

      var subTitle = elementor.translate('dynamic') + ' ' + _settings.default.getSubTitle(args),
          type = this.type;

      return {
        containers: containers,
        subTitle: subTitle,
        data: {
          changes: changes,
          command: this.currentCommand
        },
        type: type,
        restore: this.constructor.restore
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'); // Upon `disable` command toggle `isRedo`.

      if ('document/dynamic/disable' === data.command) {
        isRedo = !isRedo;
      }

      historyItem.get('containers').forEach(function (container) {
        var settings = data.changes[container.id],
            toggle = isRedo ? 'document/dynamic/enable' : 'document/dynamic/disable';
        $e.run(toggle, {
          container: container,
          settings: settings
        });
        container.panel.refresh();
      });
    }
  }]);
  return DisableEnable;
}(_history.default);

exports.default = DisableEnable;

/***/ }),
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Copy", {
  enumerable: true,
  get: function get() {
    return _copy.Copy;
  }
});

_Object$defineProperty(exports, "CopyAll", {
  enumerable: true,
  get: function get() {
    return _copyAll.CopyAll;
  }
});

_Object$defineProperty(exports, "Create", {
  enumerable: true,
  get: function get() {
    return _create.Create;
  }
});

_Object$defineProperty(exports, "Delete", {
  enumerable: true,
  get: function get() {
    return _delete.Delete;
  }
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Empty", {
  enumerable: true,
  get: function get() {
    return _empty.Empty;
  }
});

_Object$defineProperty(exports, "Import", {
  enumerable: true,
  get: function get() {
    return _import.Import;
  }
});

_Object$defineProperty(exports, "Paste", {
  enumerable: true,
  get: function get() {
    return _paste.Paste;
  }
});

_Object$defineProperty(exports, "Move", {
  enumerable: true,
  get: function get() {
    return _move.Move;
  }
});

_Object$defineProperty(exports, "PasteStyle", {
  enumerable: true,
  get: function get() {
    return _pasteStyle.PasteStyle;
  }
});

_Object$defineProperty(exports, "ResetStyle", {
  enumerable: true,
  get: function get() {
    return _resetStyle.ResetStyle;
  }
});

_Object$defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.Settings;
  }
});

var _copy = __webpack_require__(494);

var _copyAll = __webpack_require__(495);

var _create = __webpack_require__(277);

var _delete = __webpack_require__(496);

var _duplicate = __webpack_require__(497);

var _empty = __webpack_require__(498);

var _import = __webpack_require__(499);

var _paste = __webpack_require__(500);

var _move = __webpack_require__(501);

var _pasteStyle = __webpack_require__(502);

var _resetStyle = __webpack_require__(503);

var _settings = __webpack_require__(235);

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var Copy =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Copy, _Base);

  function Copy() {
    (0, _classCallCheck2.default)(this, Copy);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Copy).apply(this, arguments));
  }

  (0, _createClass2.default)(Copy, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      elementorCommon.storage.set(storageKey, containers.map(function (container) {
        return container.model.toJSON({
          copyHtmlCache: true
        });
      }));
    }
  }]);
  return Copy;
}(_base.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.CopyAll = void 0;

var _values = _interopRequireDefault(__webpack_require__(114));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var CopyAll =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(CopyAll, _Base);

  function CopyAll() {
    (0, _classCallCheck2.default)(this, CopyAll);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CopyAll).apply(this, arguments));
  }

  (0, _createClass2.default)(CopyAll, [{
    key: "apply",
    value: function apply() {
      $e.run('document/elements/copy', {
        containers: (0, _values.default)(elementor.getPreviewView().children._views).map(function (view) {
          return view.getContainer();
        })
      });
    }
  }]);
  return CopyAll;
}(_base.default);

exports.CopyAll = CopyAll;
var _default = CopyAll;
exports.default = _default;

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Delete =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Delete, _History);

  function Delete() {
    (0, _classCallCheck2.default)(this, Delete);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Delete).apply(this, arguments));
  }

  (0, _createClass2.default)(Delete, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'remove'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        container = container.lookup();

        if (_this.isHistoryActive()) {
          $e.run('document/history/log-sub-item', {
            container: container,
            type: 'sub-remove',
            restore: _this.constructor.restore,
            data: {
              model: container.model.toJSON(),
              parent: container.parent,
              at: container.view._index
            }
          });
        } // BC: Deprecated since 2.8.0 - use `$e.events`.


        elementor.channels.data.trigger('element:before:remove', container.model);
        container.model.destroy(); // BC: Deprecated since 2.8.0 - use `$e.events`.

        elementor.channels.data.trigger('element:after:remove', container.model);
        container.panel.refresh();
      });

      if (1 === containers.length) {
        return containers[0];
      }

      return containers;
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var container = historyItem.get('container'),
          data = historyItem.get('data');

      if (isRedo) {
        $e.run('document/elements/delete', {
          container: container
        });
      } else {
        $e.run('document/elements/create', {
          container: data.parent,
          model: data.model,
          options: {
            at: data.at
          }
        });
      }
    }
  }]);
  return Delete;
}(_history.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Duplicate =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Duplicate, _History);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Duplicate).apply(this, arguments));
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'duplicate'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var parent = container.parent,
            at = container.view._index + 1;
        result.push($e.run('document/elements/create', {
          container: parent,
          model: container.model.toJSON(),
          options: {
            at: at,
            clone: true
          }
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Duplicate;
}(_history.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Empty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Empty =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Empty, _History);

  function Empty() {
    (0, _classCallCheck2.default)(this, Empty);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Empty).apply(this, arguments));
  }

  (0, _createClass2.default)(Empty, [{
    key: "getHistory",
    value: function getHistory(args) {
      if (args.force) {
        return {
          type: 'remove',
          title: elementor.translate('all_content'),
          data: elementor.elements ? elementor.elements.toJSON() : null,
          restore: this.constructor.restore
        };
      }

      return false;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (args.force && elementor.elements) {
        elementor.elements.reset();
        elementor.getPreviewContainer().panel.closeEditor();
        return;
      }

      elementor.getClearPageDialog().show();
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      if (this.args.force) {
        return true;
      }
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      if (isRedo) {
        $e.run('document/elements/empty', {
          force: true
        });
      } else {
        var data = historyItem.get('data');

        if (data) {
          elementor.getPreviewView().addChildModel(data);
        }
      }
    }
  }]);
  return Empty;
}(_history.default);

exports.Empty = Empty;
var _default = Empty;
exports.default = _default;

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Import = void 0;

var _assign = _interopRequireDefault(__webpack_require__(168));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Import =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Import, _History);

  function Import() {
    (0, _classCallCheck2.default)(this, Import);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Import).apply(this, arguments));
  }

  (0, _createClass2.default)(Import, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireArgumentInstance('model', Backbone.Model, args);
      this.requireArgumentConstructor('data', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model;
      return {
        type: 'add',
        title: elementor.translate('template'),
        subTitle: model.get('title')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var previewContainer = elementor.getPreviewContainer(),
          data = args.data,
          _args$options = args.options,
          options = _args$options === void 0 ? args.options || {} : _args$options,
          _args$at = args.at,
          at = _args$at === void 0 ? isNaN(options.at) ? previewContainer.view.collection.length : options.at : _args$at; // Each `data.content`.

      (0, _entries.default)(data.content).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            index = _ref2[0],
            model = _ref2[1];

        $e.run('document/elements/create', {
          container: elementor.getPreviewContainer(),
          model: model,
          options: (0, _assign.default)({
            at: at + index
          }, options)
        });
      });

      if (options.withPageSettings) {
        // TODO: use settings command.
        elementor.settings.page.model.setExternalChange(data.page_settings);
      }
    }
  }]);
  return Import;
}(_history.default);

exports.Import = Import;
var _default = Import;
exports.default = _default;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Paste = void 0;

var _assign = _interopRequireDefault(__webpack_require__(168));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Paste =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Paste, _History);

  function Paste() {
    (0, _classCallCheck2.default)(this, Paste);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Paste).apply(this, arguments));
  }

  (0, _createClass2.default)(Paste, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      var _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          storageData = elementorCommon.storage.get(storageKey);
      this.requireArgumentType('storageData', 'object', {
        storageData: storageData
      });
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      return {
        type: 'paste',
        title: elementor.translate('elements')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var at = args.at,
          _args$rebuild = args.rebuild,
          rebuild = _args$rebuild === void 0 ? false : _args$rebuild,
          _args$storageKey2 = args.storageKey,
          storageKey = _args$storageKey2 === void 0 ? 'clipboard' : _args$storageKey2,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          storageData = elementorCommon.storage.get(storageKey),
          result = []; // Paste on "Add Section" area.

      if (rebuild) {
        // Paste at each target.
        containers.forEach(function (targetContainer) {
          var index = 'undefined' === typeof at ? targetContainer.view.collection.length : at;
          storageData.forEach(function (model) {
            switch (model.elType) {
              case 'section':
                {
                  // Will be not affected by hook since it always have `model.elements`.
                  result.push(_this.pasteTo([targetContainer], [model], {
                    at: index,
                    edit: false
                  }));
                  index++;
                }
                break;

              case 'column':
                {
                  // Next code changed from original since `_checkIsEmpty()` was removed.
                  var section = $e.run('document/elements/create', {
                    container: targetContainer,
                    model: {
                      elType: 'section'
                    },
                    columns: 0,
                    // section with no columns.
                    options: {
                      at: index,
                      edit: false
                    }
                  });
                  result.push(_this.pasteTo([section], [model]));
                }
                break;

              default:
                // In case it widget:
                var target; // If you trying to paste widget on section, then paste should be at the first column.

                if ('section' === targetContainer.model.get('elType')) {
                  target = [targetContainer.view.children.findByIndex(0).getContainer()];
                } else {
                  // Else, create section with one column for element.
                  var _section = $e.run('document/elements/create', {
                    container: targetContainer,
                    model: {
                      elType: 'section'
                    },
                    columns: 1,
                    options: {
                      at: index
                    }
                  }); // Create the element in the column that just was created.


                  target = [_section.view.children.first().getContainer()];
                }

                result.push(_this.pasteTo(target, [model]));
            }
          });
        });
      } else {
        if (undefined !== at) {
          options.at = at;
        }

        result.push(this.pasteTo(containers, storageData, options));
      }

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }, {
    key: "pasteTo",
    value: function pasteTo(targetContainers, models) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = (0, _assign.default)({
        at: null,
        clone: true
      }, options);
      var result = [];
      models.forEach(function (model) {
        result.push($e.run('document/elements/create', {
          containers: targetContainers,
          model: model,
          options: options
        })); // On paste sections, increase the `at` for every section.

        if (null !== options.at) {
          options.at++;
        }
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Paste;
}(_history.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Move =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Move, _History);

  function Move() {
    (0, _classCallCheck2.default)(this, Move);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Move).apply(this, arguments));
  }

  (0, _createClass2.default)(Move, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentInstance('target', elementorModules.editor.Container, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'move'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var target = args.target,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          reCreate = [];
      containers.forEach(function (container) {
        reCreate.push(container.model.toJSON());
        $e.run('document/elements/delete', {
          container: container
        });
      });
      var count = 0;
      reCreate.forEach(function (model) {
        // If multiple fix position.
        if (options.hasOwnProperty('at') && reCreate.length > 1) {
          if (0 !== count) {
            options.at += count;
          }
        } // BC: Deprecated since 2.8.0 - use `$e.events`.


        options.trigger = {
          beforeAdd: 'drag:before:update',
          afterAdd: 'drag:after:update'
        };
        $e.run('document/elements/create', {
          container: target,
          model: model,
          options: options
        });
        count++;
      });
    }
  }]);
  return Move;
}(_history.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PasteStyle = void 0;

var _keys = _interopRequireDefault(__webpack_require__(28));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _typeof2 = _interopRequireDefault(__webpack_require__(46));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var PasteStyle =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(PasteStyle, _History);

  function PasteStyle() {
    (0, _classCallCheck2.default)(this, PasteStyle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PasteStyle).apply(this, arguments));
  }

  (0, _createClass2.default)(PasteStyle, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "validateControls",
    value: function validateControls(source, target) {
      var result = true;

      if (undefined === source || undefined === target || 'object' === (0, _typeof2.default)(source) ^ 'object' === (0, _typeof2.default)(target)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'paste_style'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          storageData = elementorCommon.storage.get(storageKey);
      containers.forEach(function (targetContainer) {
        var targetSettings = targetContainer.settings,
            targetSettingsAttributes = targetSettings.attributes,
            targetControls = targetSettings.controls,
            diffSettings = {};
        storageData.forEach(function (sourceModel) {
          var sourceSettings = sourceModel.settings;
          (0, _entries.default)(targetControls).forEach(function (_ref) {
            var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                controlName = _ref2[0],
                control = _ref2[1];

            if (!targetContainer.view.isStyleTransferControl(control)) {
              return;
            }

            var controlSourceValue = sourceSettings[controlName],
                controlTargetValue = targetSettingsAttributes[controlName];

            if (!_this.validateControls(controlSourceValue, controlTargetValue)) {
              return;
            }

            if ('object' === (0, _typeof2.default)(controlSourceValue)) {
              var isEqual = (0, _keys.default)(controlSourceValue).some(function (propertyKey) {
                if (controlSourceValue[propertyKey] !== controlTargetValue[propertyKey]) {
                  return false;
                }
              });

              if (isEqual) {
                return;
              }
            }

            if (controlSourceValue === controlTargetValue || !elementor.getControlView(control.type).onPasteStyle(control, controlSourceValue)) {
              return;
            }

            diffSettings[controlName] = controlSourceValue;
          }); // Moved from `editor/elements/views/base.js` `pasteStyle` function.

          targetContainer.view.allowRender = false; // BC: Deprecated since 2.8.0 - use `$e.events`.

          elementor.channels.data.trigger('element:before:paste:style', targetContainer.model);
          $e.run('document/elements/settings', {
            container: targetContainer,
            settings: diffSettings,
            options: {
              external: true
            }
          }); // BC: Deprecated since 2.8.0 - use `$e.events`.

          elementor.channels.data.trigger('element:after:paste:style', targetContainer.model);
          targetContainer.view.allowRender = true;
          targetContainer.render();
        });
      });
    }
  }]);
  return PasteStyle;
}(_history.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResetStyle = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var ResetStyle =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(ResetStyle, _History);

  function ResetStyle() {
    (0, _classCallCheck2.default)(this, ResetStyle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ResetStyle).apply(this, arguments));
  }

  (0, _createClass2.default)(ResetStyle, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'reset_style'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        var controls = container.settings.controls,
            defaultValues = {};
        container.view.allowRender = false;
        (0, _entries.default)(controls).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              controlName = _ref2[0],
              control = _ref2[1];

          if (!container.view.isStyleTransferControl(control)) {
            return;
          }

          defaultValues[controlName] = control.default;
        }); // BC: Deprecated since 2.8.0 - use `$e.events`.

        elementor.channels.data.trigger('element:before:reset:style', container.model);
        $e.run('document/elements/settings', {
          container: container,
          settings: defaultValues
        }); // BC: Deprecated since 2.8.0 - use `$e.events`.

        elementor.channels.data.trigger('element:after:reset:style', container.model);
        container.view.allowRender = true;
        container.render();
      });
    }
  }]);
  return ResetStyle;
}(_history.default);

exports.ResetStyle = ResetStyle;
var _default = ResetStyle;
exports.default = _default;

/***/ }),
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(284));

var Base =
/*#__PURE__*/
function (_CallbackBase) {
  (0, _inherits2.default)(Base, _CallbackBase);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Base).apply(this, arguments));
  }

  (0, _createClass2.default)(Base, [{
    key: "getType",
    value: function getType() {
      return 'hook';
    }
  }]);
  return Base;
}(_base.default);

exports.default = Base;

/***/ }),
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _component = _interopRequireDefault(__webpack_require__(575));

var _component2 = _interopRequireDefault(__webpack_require__(607));

var _component3 = _interopRequireDefault(__webpack_require__(614));

var _component4 = _interopRequireDefault(__webpack_require__(615));

var _component5 = _interopRequireDefault(__webpack_require__(621));

var _component6 = _interopRequireDefault(__webpack_require__(631));

// TODO: All components under document can be in one index file.
elementorCommon.elements.$window.on('elementor:init', function () {
  $e.components.register(new _component.default());
  $e.components.register(new _component2.default());
  $e.components.register(new _component3.default());
  $e.components.register(new _component4.default());
  $e.components.register(new _component5.default());
  $e.components.register(new _component6.default());
});

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _values = _interopRequireDefault(__webpack_require__(114));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var _backwardsCompatibility = _interopRequireDefault(__webpack_require__(576));

var Hooks = _interopRequireWildcard(__webpack_require__(577));

var Events = _interopRequireWildcard(__webpack_require__(595));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document';
    }
  }, {
    key: "onInit",
    value: function onInit() {
      new _backwardsCompatibility.default();
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "onInit", this).call(this);
      (0, _values.default)(Hooks).forEach(function (hook) {
        return new hook();
      });
      (0, _values.default)(Events).forEach(function (event) {
        return new event();
      });
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {//example: ( args ) => ( new Commands.Example( args ).run() ),
      };
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var BackwardsCompatibility =
/*#__PURE__*/
function () {
  function BackwardsCompatibility() {
    (0, _classCallCheck2.default)(this, BackwardsCompatibility);
    elementorCommon.elements.$window.on('elementor:init', this.deprecatedEvents);
    elementor.channels.data.on('template:before:insert', this.startInsertTemplate).on('template:after:insert', this.endItem);
  }

  (0, _createClass2.default)(BackwardsCompatibility, [{
    key: "deprecatedEvents",
    value: function deprecatedEvents() {
      var elementorDataEvents = elementor.channels.data._events,
          deprecatedEvents = ['drag:before:update', 'drag:after:update', 'element:before:add', 'element:after:add', 'element:before:remove', 'element:after:remove', 'element:before:paste:style', 'element:after:paste:style', 'element:before:reset:style', 'element:after:reset:style', 'section:before:drop', 'section:after:drop'];
      deprecatedEvents.forEach(function (event) {
        if (elementorDataEvents[event] && elementorDataEvents[event].length) {
          elementorCommon.helpers.softDeprecated("event: ".concat(event), '2.8.0', '$e.events');
        }
      });
    }
  }, {
    key: "startInsertTemplate",
    value: function startInsertTemplate(model) {
      elementorCommon.helpers.softDeprecated('event: template:before:insert', '2.8.0', "$e.run( 'document/import' )");
      elementor.history.history.startItem({
        type: 'add',
        title: elementor.translate('template'),
        subTitle: model.get('title'),
        elementType: 'template'
      });
    }
  }, {
    key: "endItem",
    value: function endItem() {
      elementor.history.history.endItem();
    }
  }]);
  return BackwardsCompatibility;
}();

exports.default = BackwardsCompatibility;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(28);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(578);

_Object$keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _delete = __webpack_require__(584);

_Object$keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _delete[key];
    }
  });
});

var _paste = __webpack_require__(586);

_Object$keys(_paste).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _paste[key];
    }
  });
});

var _pasteStyle = __webpack_require__(588);

_Object$keys(_pasteStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pasteStyle[key];
    }
  });
});

var _settings = __webpack_require__(590);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "InnerSectionColumns", {
  enumerable: true,
  get: function get() {
    return _innerSectionColumns.InnerSectionColumns;
  }
});

_Object$defineProperty(exports, "IsValidChild", {
  enumerable: true,
  get: function get() {
    return _isValidChild.IsValidChild;
  }
});

_Object$defineProperty(exports, "SectionColumns", {
  enumerable: true,
  get: function get() {
    return _sectionColumns.SectionColumns;
  }
});

_Object$defineProperty(exports, "SectionColumnsLimit", {
  enumerable: true,
  get: function get() {
    return _sectionColumnsLimit.SectionColumnsLimit;
  }
});

_Object$defineProperty(exports, "SectionColumnsResetLayout", {
  enumerable: true,
  get: function get() {
    return _sectionColumnsResetLayout.SectionColumnsResetLayout;
  }
});

var _innerSectionColumns = __webpack_require__(579);

var _isValidChild = __webpack_require__(580);

var _sectionColumns = __webpack_require__(581);

var _sectionColumnsLimit = __webpack_require__(582);

var _sectionColumnsResetLayout = __webpack_require__(583);

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.InnerSectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(122));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var _create = _interopRequireDefault(__webpack_require__(277));

var InnerSectionColumns =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(InnerSectionColumns, _HookAfter);

  function InnerSectionColumns() {
    (0, _classCallCheck2.default)(this, InnerSectionColumns);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InnerSectionColumns).apply(this, arguments));
  }

  (0, _createClass2.default)(InnerSectionColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-inner-section-columns';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.model.isInner && !args.model.elements;
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      var _args$structure = args.structure,
          structure = _args$structure === void 0 ? '20' : _args$structure,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;

      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      var columns = containers[0].view.defaultInnerSectionColumns; // TODO: Next code is duplicate, avoid this:

      containers.forEach(function (
      /**Container*/
      container) {
        for (var loopIndex = 0; loopIndex < columns; loopIndex++) {
          var model = {
            id: elementor.helpers.getUniqueID(),
            elType: 'column',
            settings: {},
            elements: []
          };
          /**
           * TODO: Try improve performance of using 'document/elements/create` instead of manual create.
           */

          container.view.addChildModel(model, options);
          /**
           * Manual history & not using of `$e.run('document/elements/create')`
           * For performance reasons.
           */

          $e.run('document/history/log-sub-item', {
            container: container,
            type: 'sub-add',
            restore: _create.default.restore,
            options: options,
            data: {
              containerToRestore: container,
              modelToRestore: model
            }
          });
        }
      });

      if (structure) {
        containers.forEach(function (container) {
          container.view.setStructure(structure); // Focus on last container.

          container.model.trigger('request:edit');
        });
      }
    }
  }]);
  return InnerSectionColumns;
}(_after.default);

exports.InnerSectionColumns = InnerSectionColumns;
var _default = InnerSectionColumns;
exports.default = _default;

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.IsValidChild = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _dependency = _interopRequireDefault(__webpack_require__(278));

var _helpers = _interopRequireDefault(__webpack_require__(121));

var IsValidChild =
/*#__PURE__*/
function (_HookDependency) {
  (0, _inherits2.default)(IsValidChild, _HookDependency);

  function IsValidChild() {
    (0, _classCallCheck2.default)(this, IsValidChild);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IsValidChild).apply(this, arguments));
  }

  (0, _createClass2.default)(IsValidChild, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'is-valid-child';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          _args$model = args.model,
          model = _args$model === void 0 ? {} : _args$model,
          modelToCreate = new Backbone.Model(model);
      return containers.some(function (
      /* Container */
      container) {
        return _helpers.default.isValidChild(modelToCreate, container.model);
      });
    }
  }]);
  return IsValidChild;
}(_dependency.default);

exports.IsValidChild = IsValidChild;
var _default = IsValidChild;
exports.default = _default;

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(122));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var _create = _interopRequireDefault(__webpack_require__(277));

var SectionColumns =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(SectionColumns, _HookAfter);

  function SectionColumns() {
    (0, _classCallCheck2.default)(this, SectionColumns);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SectionColumns).apply(this, arguments));
  }

  (0, _createClass2.default)(SectionColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-section-columns';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return !args.model.elements;
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      var _args$structure = args.structure,
          structure = _args$structure === void 0 ? false : _args$structure,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;

      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      var _args$columns = args.columns,
          columns = _args$columns === void 0 ? 1 : _args$columns;

      if (args.model.isInner && 1 === columns) {
        columns = containers[0].view.defaultInnerSectionColumns;
      }

      containers.forEach(function (
      /**Container*/
      container) {
        for (var loopIndex = 0; loopIndex < columns; loopIndex++) {
          var model = {
            id: elementor.helpers.getUniqueID(),
            elType: 'column',
            settings: {},
            elements: []
          };
          /**
           * TODO: Try improve performance of using 'document/elements/create` instead of manual create.
           */

          container.view.addChildModel(model, options);
          /**
           * Manual history & not using of `$e.run('document/elements/create')`
           * For performance reasons.
           */

          $e.run('document/history/log-sub-item', {
            container: container,
            type: 'sub-add',
            restore: _create.default.restore,
            options: options,
            data: {
              containerToRestore: container,
              modelToRestore: model
            }
          });
        }
      });

      if (structure) {
        containers.forEach(function (container) {
          container.view.setStructure(structure); // Focus on last container.

          container.model.trigger('request:edit');
        });
      }
    }
  }]);
  return SectionColumns;
}(_after.default);

exports.SectionColumns = SectionColumns;
var _default = SectionColumns;
exports.default = _default;

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumnsLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _dependency = _interopRequireDefault(__webpack_require__(278));

var SectionColumnsLimit =
/*#__PURE__*/
function (_HookDependency) {
  (0, _inherits2.default)(SectionColumnsLimit, _HookDependency);

  function SectionColumnsLimit() {
    (0, _classCallCheck2.default)(this, SectionColumnsLimit);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SectionColumnsLimit).apply(this, arguments));
  }

  (0, _createClass2.default)(SectionColumnsLimit, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'section-columns-limit';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'section';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If one of the targets have maximum columns reached break the command.

      return !containers.some(function (
      /**Container*/
      container) {
        return container.view.isCollectionFilled();
      });
    }
  }]);
  return SectionColumnsLimit;
}(_dependency.default);

exports.SectionColumnsLimit = SectionColumnsLimit;
var _default = SectionColumnsLimit;
exports.default = _default;

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumnsResetLayout = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(122));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var SectionColumnsResetLayout =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(SectionColumnsResetLayout, _HookAfter);

  function SectionColumnsResetLayout() {
    (0, _classCallCheck2.default)(this, SectionColumnsResetLayout);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SectionColumnsResetLayout).apply(this, arguments));
  }

  (0, _createClass2.default)(SectionColumnsResetLayout, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'section-columns-reset-layout';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'section';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      // On `document/elements/move` no need for reset layout.
      return 'document/elements/move' !== $e.commands.currentTrace[0];
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      containers.forEach(function (
      /**Container*/
      container) {
        return container.parent.view.resetLayout();
      });
    }
  }]);
  return SectionColumnsResetLayout;
}(_after.default);

exports.SectionColumnsResetLayout = SectionColumnsResetLayout;
var _default = SectionColumnsResetLayout;
exports.default = _default;

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "SectionsColumns", {
  enumerable: true,
  get: function get() {
    return _sectionColumns.SectionsColumns;
  }
});

var _sectionColumns = __webpack_require__(585);

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionsColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(122));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var SectionsColumns =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(SectionsColumns, _HookAfter);

  function SectionsColumns() {
    (0, _classCallCheck2.default)(this, SectionsColumns);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SectionsColumns).apply(this, arguments));
  }

  (0, _createClass2.default)(SectionsColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'delete-section-columns';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If one of the targets is column.

      return containers.some(function (container) {
        return 'column' === container.model.get('elType');
      });
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      containers.forEach(function (
      /**Container*/
      container) {
        var parent = container.parent; // If its not column, continue.

        if ('section' !== parent.model.get('elType')) {
          return;
        } // If deleted the last column, should recreate it.


        if (0 === parent.view.collection.length) {
          $e.run('document/elements/create', {
            container: parent,
            model: {
              elType: 'column'
            }
          });
        } else {
          // Else, just reset section layout.
          parent.view.resetLayout();
        }
      });
    }
  }]);
  return SectionsColumns;
}(_after.default);

exports.SectionsColumns = SectionsColumns;
var _default = SectionsColumns;
exports.default = _default;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "IsPasteEnabled", {
  enumerable: true,
  get: function get() {
    return _isPasteEnabled.IsPasteEnabled;
  }
});

var _isPasteEnabled = __webpack_require__(587);

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.IsPasteEnabled = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _dependency = _interopRequireDefault(__webpack_require__(278));

var _helpers = _interopRequireDefault(__webpack_require__(121));

var IsPasteEnabled =
/*#__PURE__*/
function (_HookDependency) {
  (0, _inherits2.default)(IsPasteEnabled, _HookDependency);

  function IsPasteEnabled() {
    (0, _classCallCheck2.default)(this, IsPasteEnabled);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IsPasteEnabled).apply(this, arguments));
  }

  (0, _createClass2.default)(IsPasteEnabled, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/paste';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'is-paste-enabled';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (args.rebuild) {
        // TODO: move to conditions.
        return true;
      }

      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // TODO: use containers.some. ( multi selection ).

      return _helpers.default.isPasteEnabled(containers[0]);
    }
  }]);
  return IsPasteEnabled;
}(_dependency.default);

exports.IsPasteEnabled = IsPasteEnabled;
var _default = IsPasteEnabled;
exports.default = _default;

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "IsPasteStyleEnabled", {
  enumerable: true,
  get: function get() {
    return _isPasteStyleEnabled.IsPasteStyleEnabled;
  }
});

var _isPasteStyleEnabled = __webpack_require__(589);

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.IsPasteStyleEnabled = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _dependency = _interopRequireDefault(__webpack_require__(278));

var IsPasteStyleEnabled =
/*#__PURE__*/
function (_HookDependency) {
  (0, _inherits2.default)(IsPasteStyleEnabled, _HookDependency);

  function IsPasteStyleEnabled() {
    (0, _classCallCheck2.default)(this, IsPasteStyleEnabled);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IsPasteStyleEnabled).apply(this, arguments));
  }

  (0, _createClass2.default)(IsPasteStyleEnabled, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/paste-style';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'is-paste-style-enabled';
    }
  }, {
    key: "apply",
    value: function apply() {
      return elementor.getCurrentElement().pasteStyle && elementorCommon.storage.get('clipboard');
    }
  }]);
  return IsPasteStyleEnabled;
}(_dependency.default);

exports.IsPasteStyleEnabled = IsPasteStyleEnabled;
var _default = IsPasteStyleEnabled;
exports.default = _default;

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "HandleDynamic", {
  enumerable: true,
  get: function get() {
    return _handleDynamic.HandleDynamic;
  }
});

_Object$defineProperty(exports, "ResizeColumn", {
  enumerable: true,
  get: function get() {
    return _resizeColumn.ResizeColumn;
  }
});

_Object$defineProperty(exports, "ResizeColumnLimit", {
  enumerable: true,
  get: function get() {
    return _resizeColumnLimit.ResizeColumnLimit;
  }
});

_Object$defineProperty(exports, "SetStructure", {
  enumerable: true,
  get: function get() {
    return _setStructure.SetStructure;
  }
});

var _handleDynamic = __webpack_require__(591);

var _resizeColumn = __webpack_require__(592);

var _resizeColumnLimit = __webpack_require__(593);

var _setStructure = __webpack_require__(594);

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.HandleDynamic = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(67));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var HandleDynamic =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(HandleDynamic, _HookAfter);

  function HandleDynamic() {
    (0, _classCallCheck2.default)(this, HandleDynamic);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HandleDynamic).apply(this, arguments));
  }

  (0, _createClass2.default)(HandleDynamic, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'handle-dynamic';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'dynamic';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /**Container*/
      container) {
        return 'dynamic' === container.type;
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /**Container*/
      container) {
        if ('dynamic' === container.type) {
          var tagText = elementor.dynamicTags.tagContainerToTagText(container),
              commandArgs = {
            container: container.parent,
            settings: (0, _defineProperty2.default)({}, container.view.options.controlName, tagText)
          };
          $e.run('document/dynamic/settings', commandArgs);
        }
      });
      return true;
    }
  }]);
  return HandleDynamic;
}(_after.default);

exports.HandleDynamic = HandleDynamic;
var _default = HandleDynamic;
exports.default = _default;

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResizeColumn = void 0;

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var ResizeColumn =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(ResizeColumn, _HookAfter);

  function ResizeColumn() {
    (0, _classCallCheck2.default)(this, ResizeColumn);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ResizeColumn).apply(this, arguments));
  }

  (0, _createClass2.default)(ResizeColumn, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resize-column';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings._inline_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /**Container*/
      container) {
        _this.resizeColumn(container, args.settings._inline_size);
      });
      return true;
    }
  }, {
    key: "resizeColumn",
    value: function resizeColumn(container, newSize) {
      var nextContainer = container.parent.view.getNeighborContainer(container);

      if (!nextContainer) {
        return false;
      }

      var parentView = container.parent.view,
          currentColumnView = container.view,
          totalWidth = parentView.$el.find(' > .elementor-container')[0].getBoundingClientRect().width;
      var currentSize = null;

      if (null === container.oldValues._inline_size) {
        // Mean, that it was not set before ( first time ).
        currentSize = container.settings.get('_column_size');
      } else {
        currentSize = +(container.oldValues._inline_size || currentColumnView.el.getBoundingClientRect().width / totalWidth * 100);
      }

      var nextChildView = nextContainer.view,
          $nextElement = nextChildView.$el,
          nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || container.parent.view.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
          nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);
      /**
       * TODO: Hook prevented ( next command will not call recursive hook ), but we didnt tell the hook to be prevented
       * consider: '$e.hooks.preventRecursive()'.
       */

      $e.run('document/elements/settings', {
        containers: [nextContainer],
        settings: {
          _inline_size: nextElementNewSize
        },
        options: {
          callbacks: {
            'resize-column-limit': false
          },
          history: {
            title: elementor.config.elements.column.controls._inline_size.label
          },
          external: true,
          debounce: true
        }
      });
      return true;
    }
  }]);
  return ResizeColumn;
}(_after.default);

exports.ResizeColumn = ResizeColumn;
var _default = ResizeColumn;
exports.default = _default;

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResizeColumnLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _dependency = _interopRequireDefault(__webpack_require__(278));

var ResizeColumnLimit =
/*#__PURE__*/
function (_HookDependency) {
  (0, _inherits2.default)(ResizeColumnLimit, _HookDependency);

  function ResizeColumnLimit() {
    (0, _classCallCheck2.default)(this, ResizeColumnLimit);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ResizeColumnLimit).apply(this, arguments));
  }

  (0, _createClass2.default)(ResizeColumnLimit, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resize-column-limit';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings._inline_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /**Container*/
      container) {
        var parentView = container.parent.view,
            columnView = container.view,
            currentSize = container.settings.get('_inline_size') || container.settings.get('_column_size'),
            newSize = args.settings._inline_size,
            nextChildView = parentView.getNextColumn(columnView) || parentView.getPreviousColumn(columnView);

        if (!nextChildView) {
          if ($e.devTools) {
            $e.devTools.log.error('There is not any next column');
          }

          return false;
        }

        var $nextElement = nextChildView.$el,
            nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || parentView.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
            nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);

        if (nextElementNewSize < parentView.defaultMinColumnSize) {
          if ($e.devTools) {
            $e.devTools.log.error('New column width is too large');
          }

          return false;
        }

        if (newSize < parentView.defaultMinColumnSize) {
          if ($e.devTools) {
            $e.devTools.log.error('New column width is too small');
          }

          return false;
        }

        return true;
      });
    }
  }]);
  return ResizeColumnLimit;
}(_dependency.default);

exports.ResizeColumnLimit = ResizeColumnLimit;
var _default = ResizeColumnLimit;
exports.default = _default;

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SetStructure = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(233));

var SetStructure =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(SetStructure, _HookAfter);

  function SetStructure() {
    (0, _classCallCheck2.default)(this, SetStructure);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SetStructure).apply(this, arguments));
  }

  (0, _createClass2.default)(SetStructure, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'set-structure';
    }
  }, {
    key: "bindContainerType",
    value: function bindContainerType() {
      return 'section';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return !!args.settings.structure;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /**Container*/
      container) {
        container.view.adjustColumns();
      });
      return true;
    }
  }]);
  return SetStructure;
}(_after.default);

exports.SetStructure = SetStructure;
var _default = SetStructure;
exports.default = _default;

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(28);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(596);

_Object$keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _delete = __webpack_require__(600);

_Object$keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _delete[key];
    }
  });
});

var _settings = __webpack_require__(603);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnIsPopulated", {
  enumerable: true,
  get: function get() {
    return _columnIsPopulated.ColumnIsPopulated;
  }
});

_Object$defineProperty(exports, "CreateSectionIsFull", {
  enumerable: true,
  get: function get() {
    return _sectionIsFull.CreateSectionIsFull;
  }
});

var _columnIsPopulated = __webpack_require__(597);

var _sectionIsFull = __webpack_require__(599);

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnIsPopulated = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var ColumnIsPopulated =
/*#__PURE__*/
function (_EventAfter) {
  (0, _inherits2.default)(ColumnIsPopulated, _EventAfter);

  function ColumnIsPopulated() {
    (0, _classCallCheck2.default)(this, ColumnIsPopulated);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ColumnIsPopulated).apply(this, arguments));
  }

  (0, _createClass2.default)(ColumnIsPopulated, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-is-populated';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the created element, was created at column.

      return containers.some(function (
      /**Container*/
      container) {
        return 'column' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.model.get('elType')) {
          container.view.changeChildContainerClasses();
        }
      });
    }
  }]);
  return ColumnIsPopulated;
}(_after.default);

exports.ColumnIsPopulated = ColumnIsPopulated;
var _default = ColumnIsPopulated;
exports.default = _default;

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(284));

var Base =
/*#__PURE__*/
function (_CallbackBase) {
  (0, _inherits2.default)(Base, _CallbackBase);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Base).apply(this, arguments));
  }

  (0, _createClass2.default)(Base, [{
    key: "getType",
    value: function getType() {
      return 'event';
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     *
     * @returns {*}
     */

  }, {
    key: "apply",
    value: function apply(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Base.prototype), "apply", this).call(this, args);
    }
  }]);
  return Base;
}(_base.default);

exports.default = Base;

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.CreateSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var CreateSectionIsFull =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(CreateSectionIsFull, _HookAfter);

  function CreateSectionIsFull() {
    (0, _classCallCheck2.default)(this, CreateSectionIsFull);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CreateSectionIsFull).apply(this, arguments));
  }

  (0, _createClass2.default)(CreateSectionIsFull, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-section-is-full';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /* Container */
      container) {
        return 'section' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('section' === container.model.get('elType')) {
          container.view._checkIsFull();
        }
      });
    }
  }]);
  return CreateSectionIsFull;
}(_after.default);

exports.CreateSectionIsFull = CreateSectionIsFull;
var _default = CreateSectionIsFull;
exports.default = _default;

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnIsEmpty", {
  enumerable: true,
  get: function get() {
    return _columnIsEmpty.ColumnIsEmpty;
  }
});

_Object$defineProperty(exports, "DeleteSectionIsFull", {
  enumerable: true,
  get: function get() {
    return _sectionIsFull.DeleteSectionIsFull;
  }
});

var _columnIsEmpty = __webpack_require__(601);

var _sectionIsFull = __webpack_require__(602);

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnIsEmpty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var ColumnIsEmpty =
/*#__PURE__*/
function (_EventAfter) {
  (0, _inherits2.default)(ColumnIsEmpty, _EventAfter);

  function ColumnIsEmpty() {
    (0, _classCallCheck2.default)(this, ColumnIsEmpty);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ColumnIsEmpty).apply(this, arguments));
  }

  (0, _createClass2.default)(ColumnIsEmpty, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-is-empty';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the deleted element, was deleted from column.

      return containers.some(function (
      /**Container*/
      container) {
        return 'column' === container.parent.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.parent.model.get('elType')) {
          container.parent.view.changeChildContainerClasses();
        }
      });
    }
  }]);
  return ColumnIsEmpty;
}(_after.default);

exports.ColumnIsEmpty = ColumnIsEmpty;
var _default = ColumnIsEmpty;
exports.default = _default;

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var DeleteSectionIsFull =
/*#__PURE__*/
function (_HookAfter) {
  (0, _inherits2.default)(DeleteSectionIsFull, _HookAfter);

  function DeleteSectionIsFull() {
    (0, _classCallCheck2.default)(this, DeleteSectionIsFull);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeleteSectionIsFull).apply(this, arguments));
  }

  (0, _createClass2.default)(DeleteSectionIsFull, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'delete-section-is-full';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /* Container */
      container) {
        return 'column' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.model.get('elType')) {
          container.parent.view._checkIsFull();
        }
      });
    }
  }]);
  return DeleteSectionIsFull;
}(_after.default);

exports.DeleteSectionIsFull = DeleteSectionIsFull;
var _default = DeleteSectionIsFull;
exports.default = _default;

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnChangeSize", {
  enumerable: true,
  get: function get() {
    return _columnChangeSize.ColumnChangeSize;
  }
});

_Object$defineProperty(exports, "Draggable", {
  enumerable: true,
  get: function get() {
    return _draggable.Draggable;
  }
});

_Object$defineProperty(exports, "Resizeable", {
  enumerable: true,
  get: function get() {
    return _resizeable.Resizeable;
  }
});

var _columnChangeSize = __webpack_require__(604);

var _draggable = __webpack_require__(605);

var _resizeable = __webpack_require__(606);

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnChangeSize = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var ColumnChangeSize =
/*#__PURE__*/
function (_EventAfter) {
  (0, _inherits2.default)(ColumnChangeSize, _EventAfter);

  function ColumnChangeSize() {
    (0, _classCallCheck2.default)(this, ColumnChangeSize);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ColumnChangeSize).apply(this, arguments));
  }

  (0, _createClass2.default)(ColumnChangeSize, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-change-size';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._inline_size || undefined !== args.settings._column_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        container.view.changeSizeUI();
      });
    }
  }]);
  return ColumnChangeSize;
}(_after.default);

exports.ColumnChangeSize = ColumnChangeSize;
var _default = ColumnChangeSize;
exports.default = _default;

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Draggable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var Draggable =
/*#__PURE__*/
function (_EventAfter) {
  (0, _inherits2.default)(Draggable, _EventAfter);

  function Draggable() {
    (0, _classCallCheck2.default)(this, Draggable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Draggable).apply(this, arguments));
  }

  (0, _createClass2.default)(Draggable, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'draggable';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._position;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if (container.view.options.draggable) {
          container.view.options.draggable.toggle();
        }
      });
    }
  }]);
  return Draggable;
}(_after.default);

exports.Draggable = Draggable;
var _default = Draggable;
exports.default = _default;

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Resizeable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _after = _interopRequireDefault(__webpack_require__(234));

var Resizeable =
/*#__PURE__*/
function (_EventAfter) {
  (0, _inherits2.default)(Resizeable, _EventAfter);

  function Resizeable() {
    (0, _classCallCheck2.default)(this, Resizeable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Resizeable).apply(this, arguments));
  }

  (0, _createClass2.default)(Resizeable, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resizeable';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._position || undefined !== args.settings._element_width;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if (container.view.options.resizeable) {
          container.view.options.resizeable.toggle();
        }
      });
    }
  }]);
  return Resizeable;
}(_after.default);

exports.Resizeable = Resizeable;
var _default = Resizeable;
exports.default = _default;

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var Commands = _interopRequireWildcard(__webpack_require__(608));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/ui';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {
        copy: function copy(args) {
          return new Commands.Copy(args).run();
        },
        delete: function _delete(args) {
          return new Commands.Delete(args).run();
        },
        duplicate: function duplicate(args) {
          return new Commands.Duplicate(args).run();
        },
        paste: function paste(args) {
          return new Commands.Paste(args).run();
        },
        'paste-style': function pasteStyle(args) {
          return new Commands.PasteStyle(args).run();
        }
      };
    }
  }, {
    key: "defaultShortcuts",
    value: function defaultShortcuts() {
      return {
        copy: {
          keys: 'ctrl+c',
          exclude: ['input']
        },
        delete: {
          keys: 'del',
          exclude: ['input']
        },
        duplicate: {
          keys: 'ctrl+d'
        },
        paste: {
          keys: 'ctrl+v',
          exclude: ['input']
        },
        'paste-style': {
          keys: 'ctrl+shift+v',
          exclude: ['input']
        }
      };
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Copy", {
  enumerable: true,
  get: function get() {
    return _copy.Copy;
  }
});

_Object$defineProperty(exports, "Delete", {
  enumerable: true,
  get: function get() {
    return _delete.Delete;
  }
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Paste", {
  enumerable: true,
  get: function get() {
    return _paste.Paste;
  }
});

_Object$defineProperty(exports, "PasteStyle", {
  enumerable: true,
  get: function get() {
    return _pasteStyle.PasteStyle;
  }
});

var _copy = __webpack_require__(609);

var _delete = __webpack_require__(610);

var _duplicate = __webpack_require__(611);

var _paste = __webpack_require__(612);

var _pasteStyle = __webpack_require__(613);

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var Copy =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Copy, _Base);

  function Copy() {
    (0, _classCallCheck2.default)(this, Copy);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Copy).apply(this, arguments));
  }

  (0, _createClass2.default)(Copy, [{
    key: "apply",
    value: function apply(args) {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/copy', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Copy;
}(_base.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var Delete =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Delete, _Base);

  function Delete() {
    (0, _classCallCheck2.default)(this, Delete);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Delete).apply(this, arguments));
  }

  (0, _createClass2.default)(Delete, [{
    key: "apply",
    value: function apply(args) {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/delete', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Delete;
}(_base.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var Duplicate =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Duplicate, _Base);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Duplicate).apply(this, arguments));
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "apply",
    value: function apply(args) {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/duplicate', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Duplicate;
}(_base.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Paste = void 0;

var _values = _interopRequireDefault(__webpack_require__(114));

__webpack_require__(254);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var _helpers = _interopRequireDefault(__webpack_require__(121));

var Paste =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Paste, _Base);

  function Paste() {
    (0, _classCallCheck2.default)(this, Paste);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Paste).apply(this, arguments));
  }

  (0, _createClass2.default)(Paste, [{
    key: "initialize",
    value: function initialize(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Paste.prototype), "initialize", this).call(this, args);
      this.storage = elementorCommon.storage.get('clipboard');
      this.storage = this.storage.map(function (model) {
        return new Backbone.Model(model);
      });

      if (!containers[0]) {
        this.target = elementor.getCurrentElement();
        this.target = this.target ? [this.target.getContainer()] : null;
      } else {
        this.target = containers;
      }
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireArgumentType('storage', 'object', this); //this.requireArgumentType( 'target', 'array', this );
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      if (!this.target) {
        return false;
      }

      return this.target.some(function (
      /* Container */
      container) {
        var _args$options = args.options,
            options = _args$options === void 0 ? {} : _args$options,
            pasteOptions = _helpers.default.getPasteOptions(_this.storage[0], container);

        if (!pasteOptions.isValidChild) {
          if (pasteOptions.isSameElement) {
            if ('document' === container.parent.type) {
              options.at = container.parent.model.get('elements').findIndex(container.model);
            }

            container = container.parent;
          } else if (pasteOptions.isValidGrandChild) {
            options.rebuild = true;
          }
        } else if ('column' === container.type) {
          options.at = container.model.get('elements').length;
        }

        if ((0, _values.default)(pasteOptions).some(function (opt) {
          return !!opt;
        })) {
          var commandArgs = {
            container: container
          };

          if (undefined !== options.rebuild) {
            commandArgs.rebuild = options.rebuild;
          }

          if (undefined !== options.at) {
            commandArgs.at = options.at;
          }

          return $e.run('document/elements/paste', commandArgs);
        }

        return false;
      });
    }
  }]);
  return Paste;
}(_base.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PasteStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var PasteStyle =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(PasteStyle, _Base);

  function PasteStyle() {
    (0, _classCallCheck2.default)(this, PasteStyle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PasteStyle).apply(this, arguments));
  }

  (0, _createClass2.default)(PasteStyle, [{
    key: "apply",
    value: function apply(args) {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/paste-style', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return PasteStyle;
}(_base.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var Commands = _interopRequireWildcard(__webpack_require__(493));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/elements';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      var _this = this;

      var commands = {}; // Convert `Commands` to `BaseComponent` workable format.

      (0, _entries.default)(Commands).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            command = _ref2[0],
            classReference = _ref2[1];

        command = _this.normalizeCommand(command);

        commands[command] = function (args) {
          return new classReference(args).run();
        };
      });
      return commands;
    }
  }, {
    key: "normalizeCommand",
    value: function normalizeCommand(command) {
      var temp = ''; // First character should be lowercase.

      command = command.charAt(0).toLowerCase() + command.slice(1);
      /**
       * If command includes uppercase character convert it to lowercase and add `-`.
       * e.g: `CopyAll` is converted to `copy-all`.
       */

      for (var i = 0; i < command.length; i++) {
        var part = command[i];

        if (part === part.toUpperCase()) {
          temp += '-' + part.toLowerCase();
          continue;
        }

        temp += command[i];
      }

      return temp;
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var Commands = _interopRequireWildcard(__webpack_require__(616));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/repeater';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {
        duplicate: function duplicate(args) {
          return new Commands.Duplicate(args).run();
        },
        insert: function insert(args) {
          return new Commands.Insert(args).run();
        },
        move: function move(args) {
          return new Commands.Move(args).run();
        },
        remove: function remove(args) {
          return new Commands.Remove(args).run();
        }
      };
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Insert", {
  enumerable: true,
  get: function get() {
    return _insert.Insert;
  }
});

_Object$defineProperty(exports, "Move", {
  enumerable: true,
  get: function get() {
    return _move.Move;
  }
});

_Object$defineProperty(exports, "Remove", {
  enumerable: true,
  get: function get() {
    return _remove.Remove;
  }
});

var _duplicate = __webpack_require__(617);

var _insert = __webpack_require__(618);

var _move = __webpack_require__(619);

var _remove = __webpack_require__(620);

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _assign = _interopRequireDefault(__webpack_require__(168));

__webpack_require__(31);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Duplicate =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Duplicate, _History);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Duplicate).apply(this, arguments));
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgumentType('index', 'number', args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'duplicate',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var index = args.index,
          name = args.name,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var settingsModel = container.settings,
            collection = settingsModel.get(name),
            model = collection.at(index).toJSON(); // Let the insert handle it, do not use the duplicated id.

        if (model._id) {
          delete model._id;
        }

        result.push($e.run('document/repeater/insert', {
          container: container,
          name: name,
          model: model,
          options: (0, _assign.default)({
            at: index + 1
          }, options)
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Duplicate;
}(_history.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Insert = void 0;

__webpack_require__(31);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Insert =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Insert, _History);

  function Insert() {
    (0, _classCallCheck2.default)(this, Insert);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Insert).apply(this, arguments));
  }

  (0, _createClass2.default)(Insert, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Insert.prototype), "initialize", this).call(this, args);

      if (!args.model._id) {
        args.model._id = elementor.helpers.getUniqueID();
      }
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('model', 'object', args);
      this.requireArgumentConstructor('name', String, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model,
          name = args.name,
          _args$options = args.options,
          options = _args$options === void 0 ? {
        at: null
      } : _args$options,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'add',
        subTitle: elementor.translate('Item'),
        data: {
          model: model,
          name: name,
          index: options.at
        },
        restore: this.constructor.restore
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var model = args.model,
          name = args.name,
          _args$options2 = args.options,
          options = _args$options2 === void 0 ? {
        at: null
      } : _args$options2,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        container = container.lookup();
        var collection = container.settings.get(name);
        result.push(collection.push(model, options));
        container.render();
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var containers = historyItem.get('containers'),
          data = historyItem.get('data');

      if (isRedo) {
        $e.run('document/repeater/insert', {
          containers: containers,
          model: data.model,
          name: data.name,
          options: {
            at: data.index
          }
        });
      } else {
        $e.run('document/repeater/remove', {
          containers: containers,
          name: data.name,
          index: data.index
        });
      }
    }
  }]);
  return Insert;
}(_history.default);

exports.Insert = Insert;
var _default = Insert;
exports.default = _default;

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Move = void 0;

__webpack_require__(31);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Move =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Move, _History);

  function Move() {
    (0, _classCallCheck2.default)(this, Move);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Move).apply(this, arguments));
  }

  (0, _createClass2.default)(Move, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgumentType('sourceIndex', 'number', args);
      this.requireArgumentType('targetIndex', 'number', args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'move',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var sourceIndex = args.sourceIndex,
          targetIndex = args.targetIndex,
          name = args.name,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var collection = container.settings.get(name),
            model = elementorCommon.helpers.cloneObject(collection.at(sourceIndex));
        $e.run('document/repeater/remove', {
          container: container,
          name: name,
          index: sourceIndex
        });
        result.push($e.run('document/repeater/insert', {
          container: container,
          name: name,
          model: model,
          options: {
            at: targetIndex
          }
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Move;
}(_history.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Remove = void 0;

__webpack_require__(31);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _history = _interopRequireDefault(__webpack_require__(77));

var Remove =
/*#__PURE__*/
function (_History) {
  (0, _inherits2.default)(Remove, _History);

  function Remove() {
    (0, _classCallCheck2.default)(this, Remove);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Remove).apply(this, arguments));
  }

  (0, _createClass2.default)(Remove, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgument('index', args); // sometimes null.
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'remove',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var name = args.name,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          index = null === args.index ? -1 : args.index,
          result = [];
      containers.forEach(function (container) {
        var collection = container.settings.get(name),
            model = collection.at(index);

        if (_this.isHistoryActive()) {
          $e.run('document/history/log-sub-item', {
            container: container,
            data: {
              name: name,
              model: model,
              index: index
            },
            restore: _this.constructor.restore
          });
        } // Remove from container and add to result.


        result.push(container.children.pop(index));
        collection.remove(model);
        container.render();
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'),
          container = historyItem.get('container');

      if (isRedo) {
        $e.run('document/repeater/remove', {
          container: container,
          name: data.name,
          index: data.index
        });
      } else {
        $e.run('document/repeater/insert', {
          container: container,
          model: data.model,
          name: data.name,
          options: {
            at: data.index
          }
        });
      }
    }
  }]);
  return Remove;
}(_history.default);

exports.Remove = Remove;
var _default = Remove;
exports.default = _default;

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _get2 = _interopRequireDefault(__webpack_require__(27));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var Commands = _interopRequireWildcard(__webpack_require__(622));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "__construct",
    value: function __construct(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
      /**
       * Transactions holder.
       *
       * @type {Array}
       */

      this.transactions = [];
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/history';
    }
  }, {
    key: "getCommands",
    value: function getCommands() {
      return {
        'add-transaction': function addTransaction(args) {
          return new Commands.AddTransaction(args).run();
        },
        'delete-log': function deleteLog(args) {
          return new Commands.DeleteLog(args).run();
        },
        'delete-transaction': function deleteTransaction(args) {
          return new Commands.DeleteTransaction(args).run();
        },
        'end-log': function endLog(args) {
          return new Commands.EndLog(args).run();
        },
        'end-transaction': function endTransaction(args) {
          return new Commands.EndTransaction(args).run();
        },
        'log-sub-item': function logSubItem(args) {
          return new Commands.LogSubItem(args).run();
        },
        'start-log': function startLog(args) {
          return new Commands.StartLog(args).run();
        },
        'start-transaction': function startTransaction(args) {
          return new Commands.StartTransaction(args).run();
        },
        undo: function undo() {
          return elementor.history.history.navigate();
        },
        redo: function redo() {
          return elementor.history.history.navigate(true);
        }
      };
    }
  }, {
    key: "normalizeLogTitle",
    value: function normalizeLogTitle(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;

      if (!args.title && containers[0]) {
        if (1 === containers.length) {
          args.title = containers[0].label;
        } else {
          args.title = elementor.translate('elements');
        }
      }

      return args;
    }
  }, {
    key: "mergeTransactions",
    value: function mergeTransactions(transactions) {
      var result = {};
      transactions.forEach(function (itemArgs) {
        // If no containers at the current transaction.
        if (!itemArgs.container && !itemArgs.containers) {
          return;
        }

        var _itemArgs$containers = itemArgs.containers,
            containers = _itemArgs$containers === void 0 ? [itemArgs.container] : _itemArgs$containers;

        if (containers) {
          containers.forEach(function (container) {
            if (!itemArgs.data) {
              return;
            } // Replace new changes by current itemArgs.


            if (result[container.id]) {
              result[container.id].data.changes[container.id].new = itemArgs.data.changes[container.id].new;
              return;
            }

            result[container.id] = itemArgs;
          });
        }
      });
      return result;
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "AddTransaction", {
  enumerable: true,
  get: function get() {
    return _addTransaction.AddTransaction;
  }
});

_Object$defineProperty(exports, "DeleteLog", {
  enumerable: true,
  get: function get() {
    return _deleteLog.DeleteLog;
  }
});

_Object$defineProperty(exports, "DeleteTransaction", {
  enumerable: true,
  get: function get() {
    return _deleteTransaction.DeleteTransaction;
  }
});

_Object$defineProperty(exports, "EndLog", {
  enumerable: true,
  get: function get() {
    return _endLog.EndLog;
  }
});

_Object$defineProperty(exports, "EndTransaction", {
  enumerable: true,
  get: function get() {
    return _endTransaction.EndTransaction;
  }
});

_Object$defineProperty(exports, "LogSubItem", {
  enumerable: true,
  get: function get() {
    return _logSubItem.LogSubItem;
  }
});

_Object$defineProperty(exports, "StartLog", {
  enumerable: true,
  get: function get() {
    return _startLog.StartLog;
  }
});

_Object$defineProperty(exports, "StartTransaction", {
  enumerable: true,
  get: function get() {
    return _startTransaction.StartTransaction;
  }
});

var _addTransaction = __webpack_require__(623);

var _deleteLog = __webpack_require__(624);

var _deleteTransaction = __webpack_require__(625);

var _endLog = __webpack_require__(626);

var _endTransaction = __webpack_require__(627);

var _logSubItem = __webpack_require__(628);

var _startLog = __webpack_require__(629);

var _startTransaction = __webpack_require__(630);

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.AddTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var AddTransaction =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(AddTransaction, _Base);

  function AddTransaction() {
    (0, _classCallCheck2.default)(this, AddTransaction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddTransaction).apply(this, arguments));
  }

  (0, _createClass2.default)(AddTransaction, [{
    key: "apply",
    value: function apply(args) {
      var currentId = elementor.history.history.getCurrentId();

      if (currentId) {
        // If log already started chain his historyId.
        args.id = currentId;
      }

      args = this.component.normalizeLogTitle(args);
      this.component.transactions.push(args);
    }
  }]);
  return AddTransaction;
}(_base.default);

exports.AddTransaction = AddTransaction;
var _default = AddTransaction;
exports.default = _default;

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var DeleteLog =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(DeleteLog, _Base);

  function DeleteLog() {
    (0, _classCallCheck2.default)(this, DeleteLog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeleteLog).apply(this, arguments));
  }

  (0, _createClass2.default)(DeleteLog, [{
    key: "apply",
    value: function apply(args) {
      if (args.id) {
        elementor.history.history.deleteItem(args.id);
      }
    }
  }]);
  return DeleteLog;
}(_base.default);

exports.DeleteLog = DeleteLog;
var _default = DeleteLog;
exports.default = _default;

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var DeleteTransaction =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(DeleteTransaction, _Base);

  function DeleteTransaction() {
    (0, _classCallCheck2.default)(this, DeleteTransaction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeleteTransaction).apply(this, arguments));
  }

  (0, _createClass2.default)(DeleteTransaction, [{
    key: "apply",
    value: function apply(args) {
      this.component.transactions = [];
    }
  }]);
  return DeleteTransaction;
}(_base.default);

exports.DeleteTransaction = DeleteTransaction;
var _default = DeleteTransaction;
exports.default = _default;

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.EndLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var EndLog =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(EndLog, _Base);

  function EndLog() {
    (0, _classCallCheck2.default)(this, EndLog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EndLog).apply(this, arguments));
  }

  (0, _createClass2.default)(EndLog, [{
    key: "apply",
    value: function apply(args) {
      if (args.id) {
        elementor.history.history.endItem(args.id);
      }
    }
  }]);
  return EndLog;
}(_base.default);

exports.EndLog = EndLog;
var _default = EndLog;
exports.default = _default;

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.EndTransaction = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(106));

var _entries = _interopRequireDefault(__webpack_require__(93));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var EndTransaction =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(EndTransaction, _Base);

  function EndTransaction() {
    (0, _classCallCheck2.default)(this, EndTransaction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EndTransaction).apply(this, arguments));
  }

  (0, _createClass2.default)(EndTransaction, [{
    key: "apply",
    value: function apply(args) {
      if (!this.component.transactions.length) {
        return;
      }

      var firstItem = this.component.transactions[0],
          type = firstItem.type,
          transactions = this.component.mergeTransactions(this.component.transactions);
      var _firstItem$title = firstItem.title,
          title = _firstItem$title === void 0 ? '' : _firstItem$title,
          _firstItem$subTitle = firstItem.subTitle,
          subTitle = _firstItem$subTitle === void 0 ? '' : _firstItem$subTitle;

      if (transactions.length > 1) {
        title = elementor.translate('elements');
        subTitle = '';
      }

      var history = {
        title: title,
        subTitle: subTitle,
        type: type
      }; // If firstItem have id already it means that log already started for that transaction.

      if (firstItem.id) {
        history.id = firstItem.id;
      } // TODO: Check if next lines are required.


      if (!history.container && !history.containers) {
        history.containers = firstItem.containers || [firstItem.container];
      }

      var historyId = $e.run('document/history/start-log', history);
      (0, _entries.default)(transactions).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            id = _ref2[0],
            item = _ref2[1];

        // TODO: Use `Object.values`.
        var itemArgs = item; // If log already started chain his historyId.

        if (firstItem.id) {
          itemArgs.id = firstItem.id;
        }

        $e.run('document/history/log-sub-item', itemArgs);
      });
      $e.run('document/history/end-log', {
        id: historyId
      }); // Clear transactions before leave.

      this.component.transactions = [];
    }
  }]);
  return EndTransaction;
}(_base.default);

exports.EndTransaction = EndTransaction;
var _default = EndTransaction;
exports.default = _default;

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.LogSubItem = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var LogSubItem =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(LogSubItem, _Base);

  function LogSubItem() {
    (0, _classCallCheck2.default)(this, LogSubItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LogSubItem).apply(this, arguments));
  }

  (0, _createClass2.default)(LogSubItem, [{
    key: "apply",
    value: function apply(args) {
      if (!elementor.history.history.getActive()) {
        return;
      }

      var id = args.id || elementor.history.history.getCurrentId();
      args = this.component.normalizeLogTitle(args);
      var items = elementor.history.history.getItems(),
          item = items.findWhere({
        id: id
      });

      if (!item) {
        throw new Error('History item not found.');
      }
      /**
       * Sometimes `args.id` passed to `LogSubItem`, to add sub item for specific id.
       * this `id` should not be passed as sub-item.
       */


      if (args.id) {
        delete args.id;
      }

      item.get('items').unshift(args);
    }
  }]);
  return LogSubItem;
}(_base.default);

exports.LogSubItem = LogSubItem;
var _default = LogSubItem;
exports.default = _default;

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.StartLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var StartLog =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(StartLog, _Base);

  function StartLog() {
    (0, _classCallCheck2.default)(this, StartLog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StartLog).apply(this, arguments));
  }

  (0, _createClass2.default)(StartLog, [{
    key: "initialize",
    value: function initialize(args) {
      if (elementor.history.history.isItemStarted() || args.id) {
        this.isSubItem = true;
        return;
      }

      this.args = this.component.normalizeLogTitle(args);
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      if (!this.isSubItem) {
        this.requireArgumentType('type', 'string', args);
        this.requireArgumentType('title', 'string', args);
      }
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (this.isSubItem) {
        $e.run('document/history/log-sub-item', args);
        return null;
      }

      return elementor.history.history.startItem(args);
    }
  }]);
  return StartLog;
}(_base.default);

exports.StartLog = StartLog;
var _default = StartLog;
exports.default = _default;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.StartTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _base = _interopRequireDefault(__webpack_require__(97));

var StartTransaction =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(StartTransaction, _Base);

  function StartTransaction() {
    (0, _classCallCheck2.default)(this, StartTransaction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StartTransaction).apply(this, arguments));
  }

  (0, _createClass2.default)(StartTransaction, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireArgumentType('type', 'string', args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      $e.run('document/history/add-transaction', args);
    }
  }]);
  return StartTransaction;
}(_base.default);

exports.StartTransaction = StartTransaction;
var _default = StartTransaction;
exports.default = _default;

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(100);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _component = _interopRequireDefault(__webpack_require__(64));

var Commands = _interopRequireWildcard(__webpack_require__(632));

var Component =
/*#__PURE__*/
function (_BaseComponent) {
  (0, _inherits2.default)(Component, _BaseComponent);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/dynamic';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {
        disable: function disable(args) {
          return new Commands.Disable(args).run();
        },
        enable: function enable(args) {
          return new Commands.Enable(args).run();
        },
        settings: function settings(args) {
          return new Commands.Settings(args).run();
        }
      };
    }
  }]);
  return Component;
}(_component.default);

exports.default = Component;

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Disable", {
  enumerable: true,
  get: function get() {
    return _disable.Disable;
  }
});

_Object$defineProperty(exports, "Enable", {
  enumerable: true,
  get: function get() {
    return _enable.Enable;
  }
});

_Object$defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.Settings;
  }
});

var _disable = __webpack_require__(633);

var _enable = __webpack_require__(634);

var _settings = __webpack_require__(635);

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Disable = void 0;

var _keys = _interopRequireDefault(__webpack_require__(28));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _disableEnable = _interopRequireDefault(__webpack_require__(286));

var Disable =
/*#__PURE__*/
function (_DisableEnable) {
  (0, _inherits2.default)(Disable, _DisableEnable);

  function Disable() {
    (0, _classCallCheck2.default)(this, Disable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Disable).apply(this, arguments));
  }

  (0, _createClass2.default)(Disable, [{
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (container) {
        container = container.lookup();
        (0, _keys.default)(settings).forEach(function (setting) {
          container.dynamic.unset(setting);
        });
        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }]);
  return Disable;
}(_disableEnable.default);

exports.Disable = Disable;
var _default = Disable;
exports.default = _default;

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Enable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _disableEnable = _interopRequireDefault(__webpack_require__(286));

var Enable =
/*#__PURE__*/
function (_DisableEnable) {
  (0, _inherits2.default)(Enable, _DisableEnable);

  function Enable() {
    (0, _classCallCheck2.default)(this, Enable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Enable).apply(this, arguments));
  }

  (0, _createClass2.default)(Enable, [{
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (container) {
        container = container.lookup();
        container.dynamic.set(settings);
        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }]);
  return Enable;
}(_disableEnable.default);

exports.Enable = Enable;
var _default = Enable;
exports.default = _default;

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(28));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(4));

var _inherits2 = _interopRequireDefault(__webpack_require__(6));

var _debounce = _interopRequireDefault(__webpack_require__(285));

var _settings = _interopRequireDefault(__webpack_require__(235));

/**
 * The difference between 'document/elements/settings` and `document/dynamic/settings` is:
 * that `document/elements/settings` apply settings to `container.settings` and `document/dynamic/settings` affect
 * `container.settings.__dynamic__`, also clearing the dynamic if `args.settings` is empty.
 */
var Settings =
/*#__PURE__*/
function (_Debounce) {
  (0, _inherits2.default)(Settings, _Debounce);

  function Settings() {
    (0, _classCallCheck2.default)(this, Settings);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Settings).apply(this, arguments));
  }

  (0, _createClass2.default)(Settings, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          changes = {};
      containers.forEach(function (container) {
        var id = container.id;

        if (!changes[id]) {
          changes[id] = {};
        }

        changes[id] = {
          old: container.dynamic.toJSON(),
          new: settings
        };
      });

      var subTitle = _settings.default.getSubTitle(args);

      return {
        containers: containers,
        subTitle: subTitle,
        data: {
          changes: changes
        },
        type: 'change',
        restore: this.constructor.restore
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        container = container.lookup();

        if (!(0, _keys.default)(settings).length) {
          container.dynamic.clear();
        } else {
          container.dynamic.set(settings);
        }

        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data');
      historyItem.get('containers').forEach(function (container) {
        var changes = data.changes[container.id];
        $e.run('document/dynamic/settings', {
          container: container,
          settings: isRedo ? changes.new : changes.old
        });
        container.panel.refresh();
      });
    }
  }]);
  return Settings;
}(_debounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=editor-document.js.map
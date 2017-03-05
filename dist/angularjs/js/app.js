(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\core-js\\object\\assign.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\fn\\object\\assign.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\core-js\\object\\define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\fn\\object\\define-property.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\core-js\\object\\define-property.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\extends.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\core-js\\object\\assign.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\fn\\object\\assign.js":[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_core.js","../../modules/es6.object.assign":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\es6.object.assign.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\fn\\object\\define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_core.js","../../modules/es6.object.define-property":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\es6.object.define-property.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-index.js","./_to-iobject":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-iobject.js","./_to-length":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-length.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_a-function.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_fails.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_global.js","./_is-object":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
},{"./_core":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_core.js","./_ctx":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_ctx.js","./_global":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_global.js","./_hide":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_hide.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_object-dp":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-dp.js","./_property-desc":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_property-desc.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_dom-create":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_dom-create.js","./_fails":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_fails.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_cof.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-assign.js":[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_fails.js","./_iobject":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_iobject.js","./_object-gops":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-gops.js","./_object-keys":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-keys.js","./_object-pie":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-pie.js","./_to-object":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-object.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_an-object.js","./_descriptors":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_ie8-dom-define":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_ie8-dom-define.js","./_to-primitive":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-primitive.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-gops.js":[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-keys-internal.js":[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_array-includes.js","./_has":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_has.js","./_shared-key":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_shared-key.js","./_to-iobject":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-iobject.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_enum-bug-keys.js","./_object-keys-internal":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-keys-internal.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_shared.js","./_uid":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_uid.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_global.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-integer.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_defined.js","./_iobject":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_iobject.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-integer.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_defined.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\es6.object.assign.js":[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_export.js","./_object-assign":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-assign.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_export":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_export.js","./_object-dp":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\core-js\\library\\modules\\_object-dp.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.directives.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterDirective = RegisterDirective;

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterDirective() {
  angular.module(_config2.default["APP"]);
}

},{"./config":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\config.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.js":[function(require,module,exports){
'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app.route');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.directives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module(_config2.default["APP"], ['ui.router', 'ui.bootstrap', 'ui.select', 'angular-chartist', 'hljs', 'datatables', 'datatables.bootstrap', 'app.templates']).config(_app2.default);

/* register all directives */
(0, _app3.RegisterDirective)();

},{"./app.directives":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.directives.js","./app.route":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.route.js","./config":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\config.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.route.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state("main", {
    url: "/",
    controller: _controllers.AppController,
    controllerAs: "main",
    templateUrl: 'main.html',
    abstract: true
  }).state("main.dashboard", {
    url: "",
    controller: _controllers.DashboardController,
    controllerAs: "vm",
    templateUrl: 'pages/dashboard.html'
  }).state("main.posts", {
    url: "posts",
    controller: _controllers.MessageController,
    controllerAs: "vm",
    templateUrl: 'pages/posts.html'
  }).state("main.messaging", {
    url: "messaging",
    controller: _controllers.MessageController,
    controllerAs: "vm",
    templateUrl: 'pages/message.html'
  }).state("main.uikits", {
    url: "uikits",
    abstract: true,
    templateUrl: 'pages/uikits/main.html'
  }).state("main.uikits.customize", {
    url: "/customize",
    templateUrl: 'pages/uikits/customize.html'
  }).state("main.uikits.components", {
    url: "/components",
    controller: _controllers.ComponentController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/components.html'
  }).state("main.uikits.form", {
    url: "/form",
    controller: _controllers.FormController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/form.html'
  }).state("main.uikits.card", {
    url: "/card",
    templateUrl: 'pages/uikits/card.html'
  }).state("main.uikits.table", {
    url: "/table",
    controller: _controllers.TableController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/table.html'
  }).state("main.uikits.pricing", {
    url: "/pricing",
    templateUrl: 'pages/uikits/pricing.html'
  }).state("main.uikits.timeline", {
    url: "/timeline",
    templateUrl: 'pages/uikits/timeline.html'
  }).state("main.uikits.chart", {
    url: "/chart",
    controller: _controllers.ChartController,
    controllerAs: 'vm',
    templateUrl: 'pages/uikits/chart.html'
  }).state("main.uikits.icons", {
    url: "/icons",
    templateUrl: 'pages/uikits/icons.html'
  }).state("main.pages", {
    url: "pages",
    abstract: true,
    templateUrl: 'pages/pages/main.html'
  }).state("main.pages.form", {
    url: "/form",
    controller: _controllers.FormController,
    controllerAs: "vm",
    templateUrl: 'pages/pages/form.html'
  }).state("main.pages.profile", {
    url: "/profile",
    templateUrl: 'pages/pages/profile.html'
  }).state("main.pages.search", {
    url: "/search",
    templateUrl: 'pages/pages/search.html'
  }).state("login", {
    url: "/login",
    controller: _controllers.LoginController,
    controllerAs: "vm",
    templateUrl: 'pages/pages/login.html'
  }).state("register", {
    url: "/register",
    templateUrl: 'pages/pages/register.html'
  });
  return $urlRouterProvider.otherwise('/');
};

var _controllers = require("./controllers");

module.exports = exports["default"];

},{"./controllers":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\index.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\config.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  APP: "app",
  TITLE: "<img class=\"logo\" src=\"assets/images/logo.png\"></img>",
  PAGE: {
    "main.dashboard": {
      menu: "dashboard",
      title: "",
      class: ""
    },
    "main.posts": {
      menu: "posts",
      title: "Posts",
      class: "app-full"
    },
    "main.messaging": {
      menu: "messaging",
      title: "Social",
      class: "app-full"
    }
  }
};
module.exports = exports["default"];

},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\AppController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppController = function AppController($rootScope, $sce, $state) {
  var _this = this;

  (0, _classCallCheck3.default)(this, AppController);


  this.app = addAppConfig($sce, _config2.default);
  this.appendToApp = angular.element(document.querySelector('.app'));
  this.page = getPageConfig($sce, $state);
  this.toggle = {
    sidebar: false,
    navbar: false
  };
  this.theme = {
    current: "app-default"
  };

  /* url change event */
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    _this.page = getPageConfig($sce, $state);
  });
};

exports.default = AppController;


function getPageConfig($sce, $state) {
  var config = _config2.default["PAGE"][$state.current.name];
  return (0, _extends3.default)({}, config, {
    title: $sce.trustAsHtml(config.title)
  });
}

function addAppConfig($sce, CONFIG) {
  return {
    title: $sce.trustAsHtml(CONFIG["TITLE"])
  };
}
module.exports = exports['default'];

},{"../config":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\config.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/extends":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\extends.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\chart\\ChartController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require('../../utils/chart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartController = function ChartController() {
  var _this = this;

  (0, _classCallCheck3.default)(this, ChartController);

  this.lineChart = {
    data: {
      labels: [2015, 2016, 2017, 2018, 2019],
      series: [[7684, 8356, 9108, 7508, 6988], [2961, 4500, 6302, 2433, 3594]]
    },
    config: {
      showArea: true,
      fullWidth: true,
      lineSmooth: false
    }
  };

  this.biPolarChart = {
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1]]
    },
    config: {
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: false,
        showGrid: false
      }
    }
  };

  this.barChart = {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    },
    config: {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    }
  };

  this.stackBarChart = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [[800000, 1200000, 1400000, 1300000], [200000, 400000, 500000, 300000], [100000, 200000, 400000, 600000]]
    },
    config: {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      }
    }
  };

  this.pieChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.pieChart.data.series.reduce(_chart.sum) * 100) + '%';
      }
    }
  };

  this.donutChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.donutChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      donut: true,
      donutWidth: 60,
      labelPosition: 'outside'
    }
  };

  this.saleChart = {
    data: {
      labels: ["", "MicroSD 64Gb", "Flashdrive", "MiniPC i5", "Raspberry Pi2", ""],
      series: [[103560, 103560, 81008, 69808, 29601, 29601]]
    },
    config: {
      axisX: {
        position: 'center'
      },
      axisY: {
        offset: 0,
        showLabel: false,
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      height: 250,
      high: 120000,
      showArea: true,
      stackBars: true,
      fullWidth: true,
      lineSmooth: false,
      plugins: [Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return '$' + value.toFixed(2);
        }
      })]
    },
    responsive: [['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]]
  };
};

exports.default = ChartController;
module.exports = exports['default'];

},{"../../utils/chart":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\utils\\chart.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\components\\ComponentController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ModalController = require('./ModalController');

var _ModalController2 = _interopRequireDefault(_ModalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentController = function ComponentController($uibModal) {
  (0, _classCallCheck3.default)(this, ComponentController);


  this.pagination = {
    total: 64,
    page: 2
  };

  this.modal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'demoModal.html',
      controller: _ModalController2.default,
      controllerAs: 'md'
    });
  };
};

exports.default = ComponentController;
module.exports = exports['default'];

},{"./ModalController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\components\\ModalController.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\components\\ModalController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalController = function ModalController($uibModalInstance) {
  (0, _classCallCheck3.default)(this, ModalController);

  this.ok = function () {
    console.log("ok");
    $uibModalInstance.close();
  };

  this.cancel = function () {
    console.log("cancel");
    $uibModalInstance.dismiss('cancel');
  };
};

exports.default = ModalController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\dashboard\\DashboardController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require('../../utils/chart');

var _ModalController = require('../components/ModalController');

var _ModalController2 = _interopRequireDefault(_ModalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardController = function DashboardController($timeout, $uibModal) {
  (0, _classCallCheck3.default)(this, DashboardController);

  this.sales = {
    myself: {
      title: "",
      value: "About"
    },
    performance: {
      title: "",
      value: "Performance"
    },
    location: {
      title: "",
      value: "Locations"
    },
    find: {
      title: "",
      value: "Find me"
    },
    donate: {
      title: "",
      value: "Donate"
    },
    phone: {
      title: "",
      value: "Contact"
    }
  };
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    var pinColor = "00cc00";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 12
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.39224, lng: 2.16504 },
      map: map
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.38506, lng: 2.1734 },
      icon: pinImage,
      shadow: pinImage,
      map: map
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.40392, lng: 2.17587 },
      map: map
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.39198, lng: 2.16238 },
      map: map
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.38701, lng: 2.17004 },
      map: map
    });
  }
  this.modal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_performance.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };
  this.modal2 = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_phone.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };
  this.modal3 = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_myself.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };
  this.modal4 = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_locations.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };
  this.modal5 = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_findme.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };
  this.modal6 = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'pages/modals/modal_donate.html',
      controller: _ModalController2.default,
      controllerAs: "md"
    });
  };

  /*var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });*/
};

exports.default = DashboardController;
module.exports = exports['default'];

},{"../../utils/chart":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\utils\\chart.js","../components/ModalController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\components\\ModalController.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\form\\FormController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormController = function FormController() {
  (0, _classCallCheck3.default)(this, FormController);

  this.select2 = {
    list: [{ name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' }, { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' }, { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' }, { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' }, { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' }, { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' }, { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' }, { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' }, { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' }, { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }],
    years: [1, 2, 3, 4, 5]
  };

  this.stackBarChart = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [[800000, 1200000, 1400000, 1300000], [200000, 400000, 500000, 300000], [100000, 200000, 400000, 600000]]
    },
    config: {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      }
    }
  };
};

exports.default = FormController;
module.exports = exports['default'];

},{"babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginController = exports.TableController = exports.FormController = exports.ComponentController = exports.ChartController = exports.MessageController = exports.DashboardController = exports.AppController = undefined;

var _AppController2 = require('./AppController');

var _AppController3 = _interopRequireDefault(_AppController2);

var _DashboardController2 = require('./dashboard/DashboardController');

var _DashboardController3 = _interopRequireDefault(_DashboardController2);

var _MessageController2 = require('./message/MessageController');

var _MessageController3 = _interopRequireDefault(_MessageController2);

var _ChartController2 = require('./chart/ChartController');

var _ChartController3 = _interopRequireDefault(_ChartController2);

var _ComponentController2 = require('./components/ComponentController');

var _ComponentController3 = _interopRequireDefault(_ComponentController2);

var _FormController2 = require('./form/FormController');

var _FormController3 = _interopRequireDefault(_FormController2);

var _TableController2 = require('./table/TableController');

var _TableController3 = _interopRequireDefault(_TableController2);

var _LoginController2 = require('./login/LoginController');

var _LoginController3 = _interopRequireDefault(_LoginController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AppController = _AppController3.default;
exports.DashboardController = _DashboardController3.default;
exports.MessageController = _MessageController3.default;
exports.ChartController = _ChartController3.default;
exports.ComponentController = _ComponentController3.default;
exports.FormController = _FormController3.default;
exports.TableController = _TableController3.default;
exports.LoginController = _LoginController3.default;

},{"./AppController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\AppController.js","./chart/ChartController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\chart\\ChartController.js","./components/ComponentController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\components\\ComponentController.js","./dashboard/DashboardController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\dashboard\\DashboardController.js","./form/FormController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\form\\FormController.js","./login/LoginController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\login\\LoginController.js","./message/MessageController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\message\\MessageController.js","./table/TableController":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\table\\TableController.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\login\\LoginController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginController = function () {
  function LoginController($timeout) {
    (0, _classCallCheck3.default)(this, LoginController);

    this.submit = this.submit.bind(this);
    this.$timeout = $timeout;

    this.status = {
      loading: false
    };
  }

  (0, _createClass3.default)(LoginController, [{
    key: "submit",
    value: function submit(username, password) {
      var _this = this;

      this.status.loading = true;
      this.$timeout(function () {
        _this.status.loading = false;
      }, 3000);
    }
  }]);
  return LoginController;
}();

exports.default = LoginController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\message\\MessageController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageController = function MessageController($http, $scope, $rootScope) {
  (0, _classCallCheck3.default)(this, MessageController);

  $scope.alpha = [];
  $rootScope.obj = {};
  $rootScope.obj.title = "";
  $scope.getAll = function () {
    /*$http.get("http://localhost:8989/posts").then(function(success){
    	$scope.alpha = success.data.response;
    	/*angular.forEach($scope.alpha, function(al){
    		al.creation_date = new Date(al.creation_date.substring(0, 10))
    	})*
    });*/
    $scope.alpha = [{ title: "MIME", desc: "The best mime in barcelona.", user: "A", date: new Date() }, { title: "MUSICIAN", desc: "Searching for guitarist.", user: "B", date: new Date() }];
  };
  $scope.getAll();
  $rootScope.save = function () {
    $rootScope.obj.title = "Mime";
    $rootScope.obj.user = 'A';
    $rootScope.obj.date = new Date();
    $scope.alpha.push(angular.copy($rootScope.obj));
    $rootScope.obj = {};
    //$scope.obj.date = new Date();
    /*$http.post("http://localhost:8989/posts", $rootScope.obj).then(function(success){
        $scope.getAll();
    })*/
  };
};

exports.default = MessageController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\table\\TableController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableController = function TableController(DTOptionsBuilder, DTColumnBuilder, $q) {
  (0, _classCallCheck3.default)(this, TableController);


  this.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
    var defer = $q.defer();
    defer.resolve(_data.list);
    return defer.promise;
  }).withBootstrap().withOption('dom', '<"top"fl<"clear">>rt<"bottom"ip<"clear">>').withOption('oLanguage', {
    "sSearch": "",
    "sLengthMenu": "_MENU_"
  }).withOption('initComplete', function () {
    angular.element('.dataTables_filter input').attr('placeholder', 'Search ...');
  });

  this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID'), DTColumnBuilder.newColumn('firstName').withTitle('First name'), DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()];
};

exports.default = TableController;
module.exports = exports['default'];

},{"./data":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\table\\data.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\node_modules\\babel-runtime\\helpers\\classCallCheck.js"}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\controllers\\table\\data.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    list: [{
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 870,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 590,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 803,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 474,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 476,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 464,
        "firstName": "Cartman",
        "lastName": "Kyle"
    }, {
        "id": 505,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 308,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 184,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 411,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 154,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 623,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 499,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 482,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 255,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 772,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 398,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 840,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 894,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 591,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 767,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 133,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 996,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 780,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 931,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 326,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 318,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 434,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 480,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 829,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 937,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 355,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 258,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 826,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 586,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 32,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 676,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 403,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 222,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 135,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 818,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 321,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 327,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 187,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 417,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 97,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 710,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 975,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 926,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 976,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 275,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 742,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 598,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 113,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 228,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 820,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 700,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 556,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 687,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 794,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 349,
        "firstName": "Someone First Name",
        "lastName": "Whateveryournameis"
    }, {
        "id": 283,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 862,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 674,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 954,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 243,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 578,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 660,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 653,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 583,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 321,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 171,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 41,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 704,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 344,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 476,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 644,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 359,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 856,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 760,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 432,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 299,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 693,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 11,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 305,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 961,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 54,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 734,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 466,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 439,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 995,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 878,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 479,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 252,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 694,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 882,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 620,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 390,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 472,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 533,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 725,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 221,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 302,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 755,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 671,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 649,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 22,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 544,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 114,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 674,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 571,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 554,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 203,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 89,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 299,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 48,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 726,
        "firstName": "Batman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 121,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 992,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 551,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 831,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 940,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 974,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 579,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 752,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 873,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 939,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 240,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 969,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 3,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 154,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 31,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 789,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 634,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 199,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 562,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 460,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 817,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 307,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 10,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 167,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 107,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 432,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 381,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 575,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 716,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 646,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 144,
        "firstName": "Someone First Name",
        "lastName": "Yoda"
    }, {
        "id": 306,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 395,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 777,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 624,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 994,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 653,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 198,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 157,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 955,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 339,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 552,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 294,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 287,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 399,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 741,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 670,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 260,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 294,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 294,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 448,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 260,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 119,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 702,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 87,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 161,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 404,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 871,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 484,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 966,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 392,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 738,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 560,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 660,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 929,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 42,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 853,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 977,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 104,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 820,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 187,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 524,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 830,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 156,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 918,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 286,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 715,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 501,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 463,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 419,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 752,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 754,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 497,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 722,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 986,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 559,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 816,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 188,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 762,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 872,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 107,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 968,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 643,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 88,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 844,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 334,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 43,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 600,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 719,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 698,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 994,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 595,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 223,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 392,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 155,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 956,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 62,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 689,
        "firstName": "Superman",
        "lastName": "Titi"
    }, {
        "id": 46,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 401,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 658,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 375,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 877,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 923,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 37,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 416,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 546,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 282,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 943,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 319,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 390,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 556,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 255,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 80,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 760,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 291,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 916,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 212,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 445,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 101,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 565,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 304,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 557,
        "firstName": "Foo",
        "lastName": "Titi"
    }, {
        "id": 544,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 244,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 464,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 225,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 727,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 334,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 982,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 48,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 175,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 885,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 675,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 47,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 105,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 616,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 134,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 26,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 134,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 208,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 233,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 131,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 87,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 356,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 39,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 867,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 382,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }]
};
module.exports = exports["default"];

},{}],"C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\utils\\chart.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = exports.sum = function sum(a, b) {
  return a + b;
};

},{}]},{},["C:\\Users\\eloim\\Desktop\\Project\\HackUPCWeb\\src\\angularjs\\js\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGFwcC5kaXJlY3RpdmVzLmpzIiwic3JjXFxhbmd1bGFyanNcXGpzXFxhcHAuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGFwcC5yb3V0ZS5qcyIsInNyY1xcYW5ndWxhcmpzXFxqc1xcY29uZmlnLmpzIiwic3JjXFxhbmd1bGFyanNcXGpzXFxjb250cm9sbGVyc1xcQXBwQ29udHJvbGxlci5qcyIsInNyY1xcYW5ndWxhcmpzXFxqc1xcY29udHJvbGxlcnNcXGNoYXJ0XFxDaGFydENvbnRyb2xsZXIuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGNvbnRyb2xsZXJzXFxjb21wb25lbnRzXFxDb21wb25lbnRDb250cm9sbGVyLmpzIiwic3JjXFxhbmd1bGFyanNcXGpzXFxjb250cm9sbGVyc1xcY29tcG9uZW50c1xcTW9kYWxDb250cm9sbGVyLmpzIiwic3JjXFxhbmd1bGFyanNcXGpzXFxjb250cm9sbGVyc1xcZGFzaGJvYXJkXFxEYXNoYm9hcmRDb250cm9sbGVyLmpzIiwic3JjXFxhbmd1bGFyanNcXGpzXFxjb250cm9sbGVyc1xcZm9ybVxcRm9ybUNvbnRyb2xsZXIuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGNvbnRyb2xsZXJzXFxpbmRleC5qcyIsInNyY1xcYW5ndWxhcmpzXFxqc1xcY29udHJvbGxlcnNcXGxvZ2luXFxMb2dpbkNvbnRyb2xsZXIuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGNvbnRyb2xsZXJzXFxtZXNzYWdlXFxNZXNzYWdlQ29udHJvbGxlci5qcyIsInNyY1xcYW5ndWxhcmpzXFxqc1xcY29udHJvbGxlcnNcXHRhYmxlXFxUYWJsZUNvbnRyb2xsZXIuanMiLCJzcmNcXGFuZ3VsYXJqc1xcanNcXGNvbnRyb2xsZXJzXFx0YWJsZVxcZGF0YS5qcyIsInNyY1xcYW5ndWxhcmpzXFxqc1xcdXRpbHNcXGNoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsImltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJEaXJlY3RpdmUoKSB7ICBcclxuICBhbmd1bGFyLm1vZHVsZShDT05GSUdbXCJBUFBcIl0pXHJcbn0iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJyBcclxuaW1wb3J0IHJvdXRlIGZyb20gJy4vYXBwLnJvdXRlJ1xyXG5pbXBvcnQgeyBSZWdpc3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vYXBwLmRpcmVjdGl2ZXMnXHJcblxyXG5hbmd1bGFyLm1vZHVsZShDT05GSUdbXCJBUFBcIl0sIFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ3VpLmJvb3RzdHJhcCcsXHJcbiAgICAndWkuc2VsZWN0JyxcclxuICAgICdhbmd1bGFyLWNoYXJ0aXN0JyxcclxuICAgICdobGpzJyxcclxuICAgICdkYXRhdGFibGVzJyxcclxuICAgICdkYXRhdGFibGVzLmJvb3RzdHJhcCcsXHJcbiAgICAnYXBwLnRlbXBsYXRlcydcclxuICBdKVxyXG4gIC5jb25maWcocm91dGUpXHJcblxyXG4vKiByZWdpc3RlciBhbGwgZGlyZWN0aXZlcyAqL1xyXG5SZWdpc3RlckRpcmVjdGl2ZSgpIiwiaW1wb3J0IHtcclxuICBBcHBDb250cm9sbGVyLFxyXG4gIERhc2hib2FyZENvbnRyb2xsZXIsXHJcbiAgTWVzc2FnZUNvbnRyb2xsZXIsXHJcbiAgQ2hhcnRDb250cm9sbGVyLFxyXG4gIENvbXBvbmVudENvbnRyb2xsZXIsXHJcbiAgRm9ybUNvbnRyb2xsZXIsXHJcbiAgVGFibGVDb250cm9sbGVyLFxyXG4gIExvZ2luQ29udHJvbGxlclxyXG59IGZyb20gJy4vY29udHJvbGxlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gIFxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJtYWluXCIsIHtcclxuICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgY29udHJvbGxlcjogQXBwQ29udHJvbGxlcixcclxuICAgICAgY29udHJvbGxlckFzOiBcIm1haW5cIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdtYWluLmh0bWwnLFxyXG4gICAgICBhYnN0cmFjdDogdHJ1ZVxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIm1haW4uZGFzaGJvYXJkXCIsIHtcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBjb250cm9sbGVyOiBEYXNoYm9hcmRDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9kYXNoYm9hcmQuaHRtbCdcclxuICAgIH0pXHJcblx0LnN0YXRlKFwibWFpbi5wb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCJwb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBNZXNzYWdlQ29udHJvbGxlcixcclxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcG9zdHMuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLm1lc3NhZ2luZ1wiLCB7XHJcbiAgICAgIHVybDogXCJtZXNzYWdpbmdcIixcclxuICAgICAgY29udHJvbGxlcjogTWVzc2FnZUNvbnRyb2xsZXIsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lc3NhZ2UuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0c1wiLCB7XHJcbiAgICAgIHVybDogXCJ1aWtpdHNcIixcclxuICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL21haW4uaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jdXN0b21pemVcIiwge1xyXG4gICAgICB1cmw6IFwiL2N1c3RvbWl6ZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9jdXN0b21pemUuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jb21wb25lbnRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jb21wb25lbnRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IENvbXBvbmVudENvbnRyb2xsZXIsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9jb21wb25lbnRzLmh0bWwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuZm9ybVwiLCB7XHJcbiAgICAgIHVybDogXCIvZm9ybVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBGb3JtQ29udHJvbGxlcixcclxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2Zvcm0uaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jYXJkXCIsIHtcclxuICAgICAgdXJsOiBcIi9jYXJkXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2NhcmQuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy50YWJsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGFibGVcIixcclxuICAgICAgY29udHJvbGxlcjogVGFibGVDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvdGFibGUuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5wcmljaW5nXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmljaW5nXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL3ByaWNpbmcuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy50aW1lbGluZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGltZWxpbmVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvdGltZWxpbmUuaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jaGFydFwiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcnRcIixcclxuICAgICAgY29udHJvbGxlcjogQ2hhcnRDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2NoYXJ0Lmh0bWwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuaWNvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL2ljb25zXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL2ljb25zLmh0bWwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibWFpbi5wYWdlc1wiLCB7XHJcbiAgICAgIHVybDogXCJwYWdlc1wiLFxyXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9tYWluLmh0bWwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibWFpbi5wYWdlcy5mb3JtXCIsIHtcclxuICAgICAgdXJsOiBcIi9mb3JtXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9mb3JtLmh0bWwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibWFpbi5wYWdlcy5wcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvcHJvZmlsZS5odG1sJ1xyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIm1haW4ucGFnZXMuc2VhcmNoXCIsIHtcclxuICAgICAgdXJsOiBcIi9zZWFyY2hcIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9zZWFyY2guaHRtbCdcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsb2dpblwiLCB7XHJcbiAgICAgIHVybDogXCIvbG9naW5cIixcclxuICAgICAgY29udHJvbGxlcjogTG9naW5Db250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcclxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9sb2dpbi5odG1sJ1xyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInJlZ2lzdGVyXCIsIHtcclxuICAgICAgdXJsOiBcIi9yZWdpc3RlclwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BhZ2VzL3JlZ2lzdGVyLmh0bWwnXHJcbiAgICB9KVxyXG4gIHJldHVybiAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIEFQUDogXCJhcHBcIixcclxuICBUSVRMRTogXCI8aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvbG9nby5wbmdcXFwiPjwvaW1nPlwiLFxyXG4gIFBBR0U6IHtcclxuICAgIFwibWFpbi5kYXNoYm9hcmRcIjoge1xyXG4gICAgICBtZW51OiBcImRhc2hib2FyZFwiLFxyXG4gICAgICB0aXRsZTogXCJcIixcclxuICAgICAgY2xhc3M6IFwiXCJcclxuICAgIH0sXHJcblx0XCJtYWluLnBvc3RzXCI6IHtcclxuICAgICAgbWVudTogXCJwb3N0c1wiLFxyXG4gICAgICB0aXRsZTogXCJQb3N0c1wiLFxyXG4gICAgICBjbGFzczogXCJhcHAtZnVsbFwiXHJcbiAgICB9LFxyXG4gICAgXCJtYWluLm1lc3NhZ2luZ1wiOiB7XHJcbiAgICAgIG1lbnU6IFwibWVzc2FnaW5nXCIsXHJcbiAgICAgIHRpdGxlOiBcIlNvY2lhbFwiLFxyXG4gICAgICBjbGFzczogXCJhcHAtZnVsbFwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnJyBcclxuXHJcbmNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRzY2UsICRzdGF0ZSkge1xyXG5cclxuICAgIHRoaXMuYXBwID0gYWRkQXBwQ29uZmlnKCRzY2UsIENPTkZJRylcclxuICAgIHRoaXMuYXBwZW5kVG9BcHAgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcclxuICAgIHRoaXMucGFnZSA9IGdldFBhZ2VDb25maWcoJHNjZSwgJHN0YXRlKVxyXG4gICAgdGhpcy50b2dnbGUgPSB7XHJcbiAgICAgIHNpZGViYXI6IGZhbHNlLFxyXG4gICAgICBuYXZiYXI6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnRoZW1lID0ge1xyXG4gICAgICBjdXJyZW50OiBcImFwcC1kZWZhdWx0XCJcclxuICAgIH1cclxuXHJcbiAgICAvKiB1cmwgY2hhbmdlIGV2ZW50ICovXHJcbiAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBnZXRQYWdlQ29uZmlnKCRzY2UsICRzdGF0ZSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyXHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlQ29uZmlnKCRzY2UsICRzdGF0ZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IENPTkZJR1tcIlBBR0VcIl1bJHN0YXRlLmN1cnJlbnQubmFtZV1cclxuICByZXR1cm4ge1xyXG4gICAgLi4uY29uZmlnLFxyXG4gICAgdGl0bGU6ICRzY2UudHJ1c3RBc0h0bWwoY29uZmlnLnRpdGxlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQXBwQ29uZmlnKCRzY2UsIENPTkZJRykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogJHNjZS50cnVzdEFzSHRtbChDT05GSUdbXCJUSVRMRVwiXSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBzdW0gfSBmcm9tICcuLi8uLi91dGlscy9jaGFydCdcclxuXHJcbmNsYXNzIENoYXJ0Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxpbmVDaGFydCA9IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogWzIwMTUsIDIwMTYsIDIwMTcsIDIwMTgsIDIwMTldLFxyXG4gICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgWzc2ODQsODM1Niw5MTA4LDc1MDgsNjk4OF0sXHJcbiAgICAgICAgICBbMjk2MSw0NTAwLDYzMDIsMjQzMywzNTk0XSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBzaG93QXJlYTogdHJ1ZSxcclxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgbGluZVNtb290aDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmlQb2xhckNoYXJ0ID0ge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICBbMSwgMiwgMywgMSwgLTIsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgWy0yLCAtMSwgLTIsIC0xLCAtMi41LCAtMSwgLTIsIC0xXSxcclxuICAgICAgICAgIFswLCAwLCAwLCAxLCAyLCAyLjUsIDIsIDFdXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBoaWdoOiAzLFxyXG4gICAgICAgIGxvdzogLTMsXHJcbiAgICAgICAgc2hvd0FyZWE6IHRydWUsXHJcbiAgICAgICAgc2hvd0xpbmU6IGZhbHNlLFxyXG4gICAgICAgIHNob3dQb2ludDogZmFsc2UsXHJcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgIGF4aXNYOiB7XHJcbiAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc2hvd0dyaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuYmFyQ2hhcnQgPSB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaSddLFxyXG4gICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcclxuICAgICAgICAgIFsyLCAxLCAzLjUsIDcsIDNdLFxyXG4gICAgICAgICAgWzEsIDMsIDQsIDUsIDZdXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgY2hhcnRQYWRkaW5nOiB7XHJcbiAgICAgICAgICByaWdodDogNDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5zdGFja0JhckNoYXJ0ID0ge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICBbODAwMDAwLCAxMjAwMDAwLCAxNDAwMDAwLCAxMzAwMDAwXSxcclxuICAgICAgICAgIFsyMDAwMDAsIDQwMDAwMCwgNTAwMDAwLCAzMDAwMDBdLFxyXG4gICAgICAgICAgWzEwMDAwMCwgMjAwMDAwLCA0MDAwMDAsIDYwMDAwMF1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHN0YWNrQmFyczogdHJ1ZSxcclxuICAgICAgICBheGlzWToge1xyXG4gICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTAwMCkgKyAnayc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5waWVDaGFydCA9IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHNlcmllczogWzUsIDMsIDRdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMucGllQ2hhcnQuZGF0YS5zZXJpZXMucmVkdWNlKHN1bSkgKiAxMDApICsgJyUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9udXRDaGFydCA9IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHNlcmllczogWzUsIDMsIDRdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMuZG9udXRDaGFydC5kYXRhLnNlcmllcy5yZWR1Y2Uoc3VtKSAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICBkb251dFdpZHRoOiA2MCxcclxuICAgICAgICBsYWJlbFBvc2l0aW9uOiAnb3V0c2lkZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnNhbGVDaGFydCA9IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiXCIsXCJNaWNyb1NEIDY0R2JcIixcIkZsYXNoZHJpdmVcIiwgXCJNaW5pUEMgaTVcIiwgXCJSYXNwYmVycnkgUGkyXCIsXCJcIl0sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICBbMTAzNTYwLDEwMzU2MCw4MTAwOCw2OTgwOCwgMjk2MDEsMjk2MDFdLFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgYXhpc1g6IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXhpc1k6IHtcclxuICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgIHNob3dMYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDAwKSArICdrJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYXJ0UGFkZGluZzoge1xyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgICBoaWdoOiAxMjAwMDAsXHJcbiAgICAgICAgc2hvd0FyZWE6IHRydWUsXHJcbiAgICAgICAgc3RhY2tCYXJzOiB0cnVlLFxyXG4gICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICBsaW5lU21vb3RoOiBmYWxzZSxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICBDaGFydGlzdC5wbHVnaW5zLmN0UG9pbnRMYWJlbHMoe1xyXG4gICAgICAgICAgICB0ZXh0QW5jaG9yOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJyQnICsgdmFsdWUudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLCB7XHJcbiAgICAgICAgICBheGlzWDoge1xyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHNob3dMYWJlbDogZmFsc2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MFxyXG4gICAgICAgIH1dXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29udHJvbGxlcjsiLCJpbXBvcnQgTW9kYWxDb250cm9sbGVyIGZyb20gJy4vTW9kYWxDb250cm9sbGVyJ1xyXG5cclxuY2xhc3MgQ29tcG9uZW50Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHVpYk1vZGFsKSB7XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICB0b3RhbDogNjQsXHJcbiAgICAgIHBhZ2U6IDJcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vZGFsID0gKCkgPT4ge1xyXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdkZW1vTW9kYWwuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21kJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Q29udHJvbGxlciIsIlxyXG5jbGFzcyBNb2RhbENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCR1aWJNb2RhbEluc3RhbmNlKSB7XHJcbiAgICB0aGlzLm9rID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXHJcbiAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNhbmNlbFwiKVxyXG4gICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRyb2xsZXI7IiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQnXHJcbmltcG9ydCBNb2RhbENvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbENvbnRyb2xsZXInXHJcblxyXG5jbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkdWliTW9kYWwpIHtcclxuICAgIHRoaXMuc2FsZXMgPSB7XHJcbiAgICAgIG15c2VsZjoge1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIkFib3V0XCJcclxuICAgICAgfSxcclxuICAgICAgcGVyZm9ybWFuY2U6IHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICB2YWx1ZTogXCJQZXJmb3JtYW5jZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiTG9jYXRpb25zXCJcclxuICAgICAgfSxcclxuXHQgIGZpbmQ6IHtcclxuXHQgICAgdGl0bGU6IFwiXCIsXHJcblx0XHR2YWx1ZTogXCJGaW5kIG1lXCJcclxuXHQgIH0sXHJcblx0ICBkb25hdGU6IHtcclxuXHRcdHRpdGxlOiBcIlwiLFxyXG5cdFx0dmFsdWU6IFwiRG9uYXRlXCJcclxuXHQgIH0sXHJcblx0ICBwaG9uZToge1xyXG5cdFx0dGl0bGU6IFwiXCIsXHJcblx0XHR2YWx1ZTogXCJDb250YWN0XCJcclxuXHQgIH1cclxuICAgIH1cclxuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHNob3dQb3NpdGlvbik7XHJcblx0ZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR2YXIgcGluQ29sb3IgPSBcIjAwY2MwMFwiO1xyXG5cdFx0dmFyIHBpbkltYWdlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKFwiaHR0cDovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHN0PWRfbWFwX3Bpbl9sZXR0ZXImY2hsZD0lRTIlODAlQTJ8XCIgKyBwaW5Db2xvcixcclxuXHRcdFx0bmV3IGdvb2dsZS5tYXBzLlNpemUoMjEsIDM0KSxcclxuXHRcdFx0bmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcblx0XHRcdG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwgMzQpKTtcclxuXHRcdHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG5cdFx0ICBjZW50ZXI6IHtsYXQ6ICBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX0sXHJcblx0XHQgIHpvb206IDEyXHJcblx0XHR9KTtcclxuXHRcdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiA0MS4zOTIyNCwgbG5nOiAyLjE2NTA0fSxcclxuICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgfSk7XHJcblx0XHR2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICBwb3NpdGlvbjoge2xhdDogNDEuMzg1MDYsIGxuZzogMi4xNzM0fSxcclxuXHRcdCAgaWNvbjogcGluSW1hZ2UsXHJcblx0XHQgIHNoYWRvdzogcGluSW1hZ2UsXHJcbiAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgIH0pO1xyXG5cdFx0dmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgcG9zaXRpb246IHtsYXQ6IDQxLjQwMzkyLCBsbmc6ICAyLjE3NTg3fSxcclxuICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgfSk7XHJcblx0XHR2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICBwb3NpdGlvbjoge2xhdDogNDEuMzkxOTgsIGxuZzogIDIuMTYyMzh9LFxyXG4gICAgICAgICAgbWFwOiBtYXBcclxuICAgICAgICB9KTtcclxuXHRcdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiA0MS4zODcwMSwgbG5nOiAgIDIuMTcwMDR9LFxyXG4gICAgICAgICAgbWFwOiBtYXBcclxuICAgICAgICB9KTtcclxuXHR9XHJcblx0dGhpcy5tb2RhbCA9ICgpID0+IHtcclxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbW9kYWxzL21vZGFsX3BlcmZvcm1hbmNlLmh0bWwnLFxyXG5cdFx0Y29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxyXG5cdFx0Y29udHJvbGxlckFzOiBcIm1kXCJcclxuICAgICAgfSlcclxuICAgIH07XHJcblx0dGhpcy5tb2RhbDIgPSAoKSA9PiB7XHJcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21vZGFscy9tb2RhbF9waG9uZS5odG1sJyxcclxuXHRcdGNvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuXHRcdGNvbnRyb2xsZXJBczogXCJtZFwiXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cdHRoaXMubW9kYWwzID0gKCkgPT4ge1xyXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tb2RhbHMvbW9kYWxfbXlzZWxmLmh0bWwnLFxyXG5cdFx0Y29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxyXG5cdFx0Y29udHJvbGxlckFzOiBcIm1kXCJcclxuICAgICAgfSlcclxuICAgIH07XHJcblx0dGhpcy5tb2RhbDQgPSAoKSA9PiB7XHJcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21vZGFscy9tb2RhbF9sb2NhdGlvbnMuaHRtbCcsXHJcblx0XHRjb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXHJcblx0XHRjb250cm9sbGVyQXM6IFwibWRcIlxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHR0aGlzLm1vZGFsNSA9ICgpID0+IHtcclxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbW9kYWxzL21vZGFsX2ZpbmRtZS5odG1sJyxcclxuXHRcdGNvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuXHRcdGNvbnRyb2xsZXJBczogXCJtZFwiXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cdHRoaXMubW9kYWw2ID0gKCkgPT4ge1xyXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tb2RhbHMvbW9kYWxfZG9uYXRlLmh0bWwnLFxyXG5cdFx0Y29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxyXG5cdFx0Y29udHJvbGxlckFzOiBcIm1kXCJcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG5cclxuXHJcblx0Lyp2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuXHQgIGNlbnRlcjoge2xhdDogLTM0LjM5NywgbG5nOiAxNTAuNjQ0fSxcclxuXHQgIHpvb206IDhcclxuXHR9KTsqL1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udHJvbGxlclxyXG4iLCJjbGFzcyBGb3JtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGVjdDIgPSB7XHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7IG5hbWU6ICdBZGFtJywgICAgICBlbWFpbDogJ2FkYW1AZW1haWwuY29tJywgICAgICBhZ2U6IDEyLCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycgfSxcclxuICAgICAgICB7IG5hbWU6ICdBbWFsaWUnLCAgICBlbWFpbDogJ2FtYWxpZUBlbWFpbC5jb20nLCAgICBhZ2U6IDEyLCBjb3VudHJ5OiAnQXJnZW50aW5hJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0VzdGVmYW7DrWEnLCBlbWFpbDogJ2VzdGVmYW5pYUBlbWFpbC5jb20nLCBhZ2U6IDIxLCBjb3VudHJ5OiAnQXJnZW50aW5hJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0FkcmlhbicsICAgIGVtYWlsOiAnYWRyaWFuQGVtYWlsLmNvbScsICAgIGFnZTogMjEsIGNvdW50cnk6ICdFY3VhZG9yJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1dsYWRpbWlyJywgIGVtYWlsOiAnd2xhZGltaXJAZW1haWwuY29tJywgIGFnZTogMzAsIGNvdW50cnk6ICdFY3VhZG9yJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1NhbWFudGhhJywgIGVtYWlsOiAnc2FtYW50aGFAZW1haWwuY29tJywgIGFnZTogMzAsIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05pY29sZScsICAgIGVtYWlsOiAnbmljb2xlQGVtYWlsLmNvbScsICAgIGFnZTogNDMsIGNvdW50cnk6ICdDb2xvbWJpYScgfSxcclxuICAgICAgICB7IG5hbWU6ICdOYXRhc2hhJywgICBlbWFpbDogJ25hdGFzaGFAZW1haWwuY29tJywgICBhZ2U6IDU0LCBjb3VudHJ5OiAnRWN1YWRvcicgfSxcclxuICAgICAgICB7IG5hbWU6ICdNaWNoYWVsJywgICBlbWFpbDogJ21pY2hhZWxAZW1haWwuY29tJywgICBhZ2U6IDE1LCBjb3VudHJ5OiAnQ29sb21iaWEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTmljb2zDoXMnLCAgIGVtYWlsOiAnbmljb2xlQGVtYWlsLmNvbScsICAgIGFnZTogNDMsIGNvdW50cnk6ICdDb2xvbWJpYScgfVxyXG4gICAgICBdLFxyXG4gICAgICB5ZWFyczogWzEsMiwzLDQsNV1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zdGFja0JhckNoYXJ0ID0ge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICBbODAwMDAwLCAxMjAwMDAwLCAxNDAwMDAwLCAxMzAwMDAwXSxcclxuICAgICAgICAgIFsyMDAwMDAsIDQwMDAwMCwgNTAwMDAwLCAzMDAwMDBdLFxyXG4gICAgICAgICAgWzEwMDAwMCwgMjAwMDAwLCA0MDAwMDAsIDYwMDAwMF1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHN0YWNrQmFyczogdHJ1ZSxcclxuICAgICAgICBheGlzWToge1xyXG4gICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTAwMCkgKyAnayc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbGxlciIsImV4cG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vQXBwQ29udHJvbGxlcic7XHJcbmV4cG9ydCBEYXNoYm9hcmRDb250cm9sbGVyIGZyb20gJy4vZGFzaGJvYXJkL0Rhc2hib2FyZENvbnRyb2xsZXInO1xyXG5leHBvcnQgTWVzc2FnZUNvbnRyb2xsZXIgZnJvbSAnLi9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyJztcclxuZXhwb3J0IENoYXJ0Q29udHJvbGxlciBmcm9tICcuL2NoYXJ0L0NoYXJ0Q29udHJvbGxlcic7XHJcbmV4cG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnRDb250cm9sbGVyJztcclxuZXhwb3J0IEZvcm1Db250cm9sbGVyIGZyb20gJy4vZm9ybS9Gb3JtQ29udHJvbGxlcic7XHJcbmV4cG9ydCBUYWJsZUNvbnRyb2xsZXIgZnJvbSAnLi90YWJsZS9UYWJsZUNvbnRyb2xsZXInO1xyXG5leHBvcnQgTG9naW5Db250cm9sbGVyIGZyb20gJy4vbG9naW4vTG9naW5Db250cm9sbGVyJzsiLCJjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XHJcbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dFxyXG5cclxuICAgIHRoaXMuc3RhdHVzID0ge1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0KHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgdGhpcy5zdGF0dXMubG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1cy5sb2FkaW5nID0gZmFsc2VcclxuICAgIH0sIDMwMDApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXIiLCJjbGFzcyBNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGh0dHAsICRzY29wZSwgJHJvb3RTY29wZSkge1xyXG5cdCRzY29wZS5hbHBoYSA9IFtdO1xyXG4gICRyb290U2NvcGUub2JqID0ge307XHJcbiAgJHJvb3RTY29wZS5vYmoudGl0bGUgPSBcIlwiO1xyXG4gICRzY29wZS5nZXRBbGwgPSBmdW5jdGlvbigpe1xyXG4gIFx0LyokaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0Ojg5ODkvcG9zdHNcIikudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcclxuICBcdFx0JHNjb3BlLmFscGhhID0gc3VjY2Vzcy5kYXRhLnJlc3BvbnNlO1xyXG4gIFx0XHQvKmFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuYWxwaGEsIGZ1bmN0aW9uKGFsKXtcclxuICBcdFx0XHRhbC5jcmVhdGlvbl9kYXRlID0gbmV3IERhdGUoYWwuY3JlYXRpb25fZGF0ZS5zdWJzdHJpbmcoMCwgMTApKVxyXG4gIFx0XHR9KSpcclxuICBcdH0pOyovXHJcbiAgICAkc2NvcGUuYWxwaGEgPSBbXHJcbiAgICAgIHt0aXRsZTogXCJNSU1FXCIsIGRlc2M6IFwiVGhlIGJlc3QgbWltZSBpbiBiYXJjZWxvbmEuXCIsIHVzZXI6IFwiQVwiLCBkYXRlOiBuZXcgRGF0ZSgpfSxcclxuICAgICAge3RpdGxlOiBcIk1VU0lDSUFOXCIsIGRlc2M6IFwiU2VhcmNoaW5nIGZvciBndWl0YXJpc3QuXCIsIHVzZXI6IFwiQlwiLCBkYXRlOiBuZXcgRGF0ZSgpfVxyXG4gICAgXVxyXG4gIH1cclxuICAkc2NvcGUuZ2V0QWxsKCk7XHJcbiAgJHJvb3RTY29wZS5zYXZlID0gZnVuY3Rpb24oKXtcclxuICAgICRyb290U2NvcGUub2JqLnRpdGxlID0gXCJNaW1lXCI7XHJcbiAgICAkcm9vdFNjb3BlLm9iai51c2VyID0gJ0EnO1xyXG4gICAgJHJvb3RTY29wZS5vYmouZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAkc2NvcGUuYWxwaGEucHVzaChhbmd1bGFyLmNvcHkoJHJvb3RTY29wZS5vYmopKTtcclxuICAgICRyb290U2NvcGUub2JqID0ge307XHJcbiAgICAvLyRzY29wZS5vYmouZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvKiRodHRwLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0Ojg5ODkvcG9zdHNcIiwgJHJvb3RTY29wZS5vYmopLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XHJcbiAgICAgICAgJHNjb3BlLmdldEFsbCgpO1xyXG4gICAgfSkqL1xyXG4gIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb250cm9sbGVyXHJcbiIsImltcG9ydCB7IGxpc3QgfSBmcm9tICcuL2RhdGEnXHJcblxyXG5jbGFzcyBUYWJsZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKERUT3B0aW9uc0J1aWxkZXIsIERUQ29sdW1uQnVpbGRlciwgJHEpIHtcclxuXHJcbiAgICB0aGlzLmR0T3B0aW9ucyA9IERUT3B0aW9uc0J1aWxkZXIuZnJvbUZuUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlci5yZXNvbHZlKGxpc3QpO1xyXG4gICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICB9KVxyXG4gICAgICAud2l0aEJvb3RzdHJhcCgpXHJcbiAgICAgIC53aXRoT3B0aW9uKCdkb20nLCc8XCJ0b3BcImZsPFwiY2xlYXJcIj4+cnQ8XCJib3R0b21cImlwPFwiY2xlYXJcIj4+JylcclxuICAgICAgLndpdGhPcHRpb24oJ29MYW5ndWFnZScsIHtcclxuICAgICAgICBcInNTZWFyY2hcIjogXCJcIixcclxuICAgICAgICBcInNMZW5ndGhNZW51XCI6IFwiX01FTlVfXCJcclxuICAgICAgfSlcclxuICAgICAgLndpdGhPcHRpb24oJ2luaXRDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgnLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCAnU2VhcmNoIC4uLicpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIHRoaXMuZHRDb2x1bW5zID0gW1xyXG4gICAgICAgIERUQ29sdW1uQnVpbGRlci5uZXdDb2x1bW4oJ2lkJykud2l0aFRpdGxlKCdJRCcpLFxyXG4gICAgICAgIERUQ29sdW1uQnVpbGRlci5uZXdDb2x1bW4oJ2ZpcnN0TmFtZScpLndpdGhUaXRsZSgnRmlyc3QgbmFtZScpLFxyXG4gICAgICAgIERUQ29sdW1uQnVpbGRlci5uZXdDb2x1bW4oJ2xhc3ROYW1lJykud2l0aFRpdGxlKCdMYXN0IG5hbWUnKS5ub3RWaXNpYmxlKClcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRyb2xsZXIiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbGlzdDogW3tcclxuICAgIFwiaWRcIjogODYwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg3MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1OTAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4MDMsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NzQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ3NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDY0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTA1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDMwOCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxODQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQxMSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDE1NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjIzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ5OSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDgyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzcyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM5OCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4NDAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODk0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1OTEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NjcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDEzMyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjc0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTk2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3ODAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDkzMSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMjYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDM0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ4MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDE4NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4MjksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDkzNyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM1NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODI2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTg2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY3NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDAzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjIyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDUwNyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDEzNSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDgxOCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzIxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTg3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDMyNyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTg3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQxNyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MTAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk3NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDkyNixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NzYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2ODAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI3NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NDIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1OTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDExMyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyMjgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDgyMCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzAwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU1NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY4NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzk0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzQ5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI4MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg2MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY3NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTU0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI0MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTc4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY2MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2NTMsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU4MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzIxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxNzEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzA0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM0NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4NDAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ3NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjQ0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzU5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODU2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzYwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDMyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyOTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjkzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDExLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzA1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTYxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDczNCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NjYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0MzksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTk1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg3OCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDc5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjUyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzNTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzU1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2OTQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4ODIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2MjAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzOTAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjQ3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1MTAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTEwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NzIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTMzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MjUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjIxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMDIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY3MSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjQ5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1NDQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTE0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2NzQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU3MSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTU0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDIwMyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI5OSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDcyNixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxMjEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk5MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU1MSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDgzMSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NDAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk3NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTc5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NTIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4NzMsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5MzksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNDAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NjksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNDcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTU0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI3NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3ODksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjM0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NzIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxOTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTYyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ2MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4MTcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzA3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxMCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDE2NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxMDcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQzMixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzgxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTE3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU3NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2NDYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTQ0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMDYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM5NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzc3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2MjQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk5NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY1MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxOTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTU3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzM5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU1MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzM1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjk0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI4NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzOTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NDEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY3MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNjAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyOTQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyOTQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg0MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDQ4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyNjAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDExOSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDcwMixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxNjEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQwNCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODcxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTA4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ4NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk2NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM5MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzM4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1NjAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTA3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY2MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDkyOSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg1MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk3NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDEwNCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDgyMCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxODcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDUyNCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4MzAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDE1NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTE4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI4NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTAxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDYzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0MTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3NTIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzU0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQ5NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzIyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTg2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTA4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1NTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA4MTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTE3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTg4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzYyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODcyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxMDcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTY4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjQzLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDg4LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODQ0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMzQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjAwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2OTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk5NCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1OTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyMjMsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzOTIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogOTcyLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxNTUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5NTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDY4OSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDQwMSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2NTgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzNzUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODc3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDkyMyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0MTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1NDYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI4MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk0MyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMTksXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzkwLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU1NixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI1NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDc2MCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDI5MSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA5MTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyMTIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDQ1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAxMDEsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA1NjUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMzA0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDU1NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNTQ0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjQ0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NjQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjI1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNzI3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA3MzUsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzMzQsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDk4MixcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNDgsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDE3NSxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODg1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjc1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA0NyxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTA1LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogNjE2LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTM0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMjYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTM0LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXHJcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiA2ODAsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDIwOCxcclxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAyMzMsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogMTMxLFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODcsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzNTYsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IDM5LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXHJcbn0sIHtcclxuICAgIFwiaWRcIjogODY3LFxyXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcclxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiAzODIsXHJcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxyXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXHJcbn1dXHJcbn0iLCJleHBvcnQgY29uc3Qgc3VtID0gKGEsIGIpID0+IHsgcmV0dXJuIGEgKyBiIH0iXX0=

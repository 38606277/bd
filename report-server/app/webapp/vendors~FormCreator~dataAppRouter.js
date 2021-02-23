(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~FormCreator~dataAppRouter"],{

/***/ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/core.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/core.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.0@prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fastDeepEqual = __webpack_require__(/*! fast-deep-equal */ "./node_modules/_fast-deep-equal@2.0.1@fast-deep-equal/index.js");

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

var _sizeSensor = __webpack_require__(/*! size-sensor */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EchartsReactCore = function (_Component) {
  _inherits(EchartsReactCore, _Component);

  function EchartsReactCore(props) {
    _classCallCheck(this, EchartsReactCore);

    var _this = _possibleConstructorReturn(this, (EchartsReactCore.__proto__ || Object.getPrototypeOf(EchartsReactCore)).call(this, props));

    _this.getEchartsInstance = function () {
      return _this.echartsLib.getInstanceByDom(_this.echartsElement) || _this.echartsLib.init(_this.echartsElement, _this.props.theme, _this.props.opts);
    };

    _this.dispose = function () {
      if (_this.echartsElement) {
        try {
          (0, _sizeSensor.clear)(_this.echartsElement);
        } catch (e) {
          console.warn(e);
        }
        // dispose echarts instance
        _this.echartsLib.dispose(_this.echartsElement);
      }
    };

    _this.rerender = function () {
      var _this$props = _this.props,
          onEvents = _this$props.onEvents,
          onChartReady = _this$props.onChartReady;


      var echartObj = _this.renderEchartDom();
      _this.bindEvents(echartObj, onEvents || {});

      // on chart ready
      if (typeof onChartReady === 'function') _this.props.onChartReady(echartObj);
      // on resize
      if (_this.echartsElement) {
        (0, _sizeSensor.bind)(_this.echartsElement, function () {
          try {
            echartObj.resize();
          } catch (e) {
            console.warn(e);
          }
        });
      }
    };

    _this.bindEvents = function (instance, events) {
      var _bindEvent = function _bindEvent(eventName, func) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof func === 'function') {
          // binding event
          // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
          instance.on(eventName, function (param) {
            func(param, instance);
          });
        }
      };

      // loop and bind
      for (var eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _bindEvent(eventName, events[eventName]);
        }
      }
    };

    _this.renderEchartDom = function () {
      // init the echart object
      var echartObj = _this.getEchartsInstance();
      // set the echart option
      echartObj.setOption(_this.props.option, _this.props.notMerge || false, _this.props.lazyUpdate || false);
      // set loading mask
      if (_this.props.showLoading) echartObj.showLoading(_this.props.loadingOption || null);else echartObj.hideLoading();

      return echartObj;
    };

    _this.echartsLib = props.echarts; // the echarts object.
    _this.echartsElement = null; // echarts div element
    return _this;
  }

  // first add


  _createClass(EchartsReactCore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rerender();
    }

    // update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // 判断是否需要 setOption，由开发者自己来确定。默认为 true
      if (typeof this.props.shouldSetOption === 'function' && !this.props.shouldSetOption(prevProps, this.props)) {
        return;
      }

      // 以下属性修改的时候，需要 dispose 之后再新建
      // 1. 切换 theme 的时候
      // 2. 修改 opts 的时候
      // 3. 修改 onEvents 的时候，这样可以取消所有之前绑定的事件 issue #151
      if (!(0, _fastDeepEqual2['default'])(prevProps.theme, this.props.theme) || !(0, _fastDeepEqual2['default'])(prevProps.opts, this.props.opts) || !(0, _fastDeepEqual2['default'])(prevProps.onEvents, this.props.onEvents)) {
        this.dispose();

        this.rerender(); // 重建
        return;
      }

      // 当这些属性保持不变的时候，不 setOption
      var pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];
      if ((0, _fastDeepEqual2['default'])((0, _utils.pick)(this.props, pickKeys), (0, _utils.pick)(prevProps, pickKeys))) {
        return;
      }

      var echartObj = this.renderEchartDom();
      // 样式修改的时候，可能会导致大小变化，所以触发一下 resize
      if (!(0, _fastDeepEqual2['default'])(prevProps.style, this.props.style) || !(0, _fastDeepEqual2['default'])(prevProps.className, this.props.className)) {
        try {
          echartObj.resize();
        } catch (e) {
          console.warn(e);
        }
      }
    }

    // remove

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dispose();
    }

    // return the echart object


    // dispose echarts and clear size-sensor


    // bind the events


    // render the dom

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className;

      var newStyle = _extends({
        height: 300
      }, style);
      // for render
      return _react2['default'].createElement('div', {
        ref: function ref(e) {
          _this2.echartsElement = e;
        },
        style: newStyle,
        className: 'echarts-for-react ' + className
      });
    }
  }]);

  return EchartsReactCore;
}(_react.Component);

exports['default'] = EchartsReactCore;


EchartsReactCore.propTypes = {
  option: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  echarts: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  notMerge: _propTypes2['default'].bool,
  lazyUpdate: _propTypes2['default'].bool,
  style: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  className: _propTypes2['default'].string,
  theme: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  onChartReady: _propTypes2['default'].func,
  showLoading: _propTypes2['default'].bool,
  loadingOption: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  onEvents: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  opts: _propTypes2['default'].shape({
    devicePixelRatio: _propTypes2['default'].number,
    renderer: _propTypes2['default'].oneOf(['canvas', 'svg']),
    width: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf([null, undefined, 'auto'])]),
    height: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf([null, undefined, 'auto'])])
  }),
  shouldSetOption: _propTypes2['default'].func
};

EchartsReactCore.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onChartReady: function onChartReady() {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
  opts: {},
  shouldSetOption: function shouldSetOption() {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.9.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

var _core = __webpack_require__(/*! ./core */ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// export the Component the echarts Object.
var EchartsReact = function (_EchartsReactCore) {
  _inherits(EchartsReact, _EchartsReactCore);

  function EchartsReact(props) {
    _classCallCheck(this, EchartsReact);

    var _this = _possibleConstructorReturn(this, (EchartsReact.__proto__ || Object.getPrototypeOf(EchartsReact)).call(this, props));

    _this.echartsLib = _echarts2['default'];
    return _this;
  }

  return EchartsReact;
}(_core2['default']);

exports['default'] = EchartsReact;

/***/ }),

/***/ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/utils.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */

var pick = exports.pick = function pick(obj, keys) {
  var r = {};
  keys.forEach(function (key) {
    r[key] = obj[key];
  });
  return r;
};

/***/ }),

/***/ "./node_modules/_fast-deep-equal@2.0.1@fast-deep-equal/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_fast-deep-equal@2.0.1@fast-deep-equal/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/constant.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/constant.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SensorTabIndex = exports.SensorClassName = exports.SizeSensorId = void 0;

/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */
var SizeSensorId = 'size-sensor-id';
exports.SizeSensorId = SizeSensorId;
var SensorClassName = 'size-sensor-object';
exports.SensorClassName = SensorClassName;
var SensorTabIndex = '-1';
exports.SensorTabIndex = SensorTabIndex;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/debounce.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/debounce.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */
var _default = function _default(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/id.js":
/*!***************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/id.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */
var id = 1;
/**
 * generate unique id in application
 * @return {string}
 */

var _default = function _default() {
  return "".concat(id++);
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ver = exports.clear = exports.bind = void 0;

var _sensorPool = __webpack_require__(/*! ./sensorPool */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensorPool.js");

/**
 * Created by hustcc on 18/6/9.[高考时间]
 * Contract: i@hust.cc
 */

/**
 * bind an element with resize callback function
 * @param {*} element
 * @param {*} cb
 */
var bind = function bind(element, cb) {
  var sensor = (0, _sensorPool.getSensor)(element); // listen with callback

  sensor.bind(cb); // return unbind function

  return function () {
    sensor.unbind(cb);
  };
};
/**
 * clear all the listener and sensor of an element
 * @param element
 */


exports.bind = bind;

var clear = function clear(element) {
  var sensor = (0, _sensorPool.getSensor)(element);
  (0, _sensorPool.removeSensor)(sensor);
};

exports.clear = clear;
var ver = "1.0.1";
exports.ver = ver;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensorPool.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensorPool.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSensor = exports.getSensor = void 0;

var _id = _interopRequireDefault(__webpack_require__(/*! ./id */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/id.js"));

var _sensors = __webpack_require__(/*! ./sensors */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/index.js");

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */

/**
 * all the sensor objects.
 * sensor pool
 */
var Sensors = {};
/**
 * get one sensor
 * @param element
 * @returns {*}
 */

var getSensor = function getSensor(element) {
  var sensorId = element.getAttribute(_constant.SizeSensorId); // 1. if the sensor exists, then use it

  if (sensorId && Sensors[sensorId]) {
    return Sensors[sensorId];
  } // 2. not exist, then create one


  var newId = (0, _id["default"])();
  element.setAttribute(_constant.SizeSensorId, newId);
  var sensor = (0, _sensors.createSensor)(element); // add sensor into pool

  Sensors[newId] = sensor;
  return sensor;
};
/**
 * 移除 sensor
 * @param sensor
 */


exports.getSensor = getSensor;

var removeSensor = function removeSensor(sensor) {
  var sensorId = sensor.element.getAttribute(_constant.SizeSensorId); // remove attribute

  sensor.element.removeAttribute(_constant.SizeSensorId); // remove event, dom of the sensor used

  sensor.destroy(); // exist, then remove from pool

  if (sensorId && Sensors[sensorId]) {
    delete Sensors[sensorId];
  }
};

exports.removeSensor = removeSensor;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSensor = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/object.js");

var _resizeObserver = __webpack_require__(/*! ./resizeObserver */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/resizeObserver.js");

/**
 * Created by hustcc on 18/7/5.
 * Contract: i@hust.cc
 */

/**
 * sensor strategies
 */
// export const createSensor = createObjectSensor;
var createSensor = typeof ResizeObserver !== 'undefined' ? _resizeObserver.createSensor : _object.createSensor;
exports.createSensor = createSensor;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSensor = void 0;

var _debounce = _interopRequireDefault(__webpack_require__(/*! ../debounce */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/debounce.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */
var createSensor = function createSensor(element) {
  var sensor = undefined; // callback

  var listeners = [];
  /**
   * create object DOM of sensor
   * @returns {HTMLObjectElement}
   */

  var newSensor = function newSensor() {
    // adjust style
    if (getComputedStyle(element).position === 'static') {
      element.style.position = 'relative';
    }

    var obj = document.createElement('object');

    obj.onload = function () {
      obj.contentDocument.defaultView.addEventListener('resize', resizeListener); // 直接触发一次 resize

      resizeListener();
    };

    obj.style.display = 'block';
    obj.style.position = 'absolute';
    obj.style.top = '0';
    obj.style.left = '0';
    obj.style.height = '100%';
    obj.style.width = '100%';
    obj.style.overflow = 'hidden';
    obj.style.pointerEvents = 'none';
    obj.style.zIndex = '-1';
    obj.style.opacity = '0';
    obj.setAttribute('class', _constant.SensorClassName);
    obj.setAttribute('tabindex', _constant.SensorTabIndex);
    obj.type = 'text/html'; // append into dom

    element.appendChild(obj); // for ie, should set data attribute delay, or will be white screen

    obj.data = 'about:blank';
    return obj;
  };
  /**
   * trigger listeners
   */


  var resizeListener = (0, _debounce["default"])(function () {
    // trigger all listener
    listeners.forEach(function (listener) {
      listener(element);
    });
  });
  /**
   * listen with one callback function
   * @param cb
   */

  var bind = function bind(cb) {
    // if not exist sensor, then create one
    if (!sensor) {
      sensor = newSensor();
    }

    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  /**
   * destroy all
   */


  var destroy = function destroy() {
    if (sensor && sensor.parentNode) {
      if (sensor.contentDocument) {
        // remote event
        sensor.contentDocument.defaultView.removeEventListener('resize', resizeListener);
      } // remove dom


      sensor.parentNode.removeChild(sensor); // initial variable

      sensor = undefined;
      listeners = [];
    }
  };
  /**
   * cancel listener bind
   * @param cb
   */


  var unbind = function unbind(cb) {
    var idx = listeners.indexOf(cb);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    } // no listener, and sensor is exist
    // then destroy the sensor


    if (listeners.length === 0 && sensor) {
      destroy();
    }
  };

  return {
    element: element,
    bind: bind,
    destroy: destroy,
    unbind: unbind
  };
};

exports.createSensor = createSensor;

/***/ }),

/***/ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/resizeObserver.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_size-sensor@1.0.1@size-sensor/lib/sensors/resizeObserver.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSensor = void 0;

var _debounce = _interopRequireDefault(__webpack_require__(/*! ../debounce */ "./node_modules/_size-sensor@1.0.1@size-sensor/lib/debounce.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by hustcc on 18/7/5.
 * Contract: i@hust.cc
 */
var createSensor = function createSensor(element) {
  var sensor = undefined; // callback

  var listeners = [];
  /**
   * trigger listeners
   */

  var resizeListener = (0, _debounce["default"])(function () {
    // trigger all
    listeners.forEach(function (listener) {
      listener(element);
    });
  });
  /**
   * create ResizeObserver sensor
   * @returns
   */

  var newSensor = function newSensor() {
    var s = new ResizeObserver(resizeListener); // listen element

    s.observe(element); // trigger once

    resizeListener();
    return s;
  };
  /**
   * listen with callback
   * @param cb
   */


  var bind = function bind(cb) {
    if (!sensor) {
      sensor = newSensor();
    }

    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  /**
   * destroy
   */


  var destroy = function destroy() {
    sensor.disconnect();
    listeners = [];
    sensor = undefined;
  };
  /**
   * cancel bind
   * @param cb
   */


  var unbind = function unbind(cb) {
    var idx = listeners.indexOf(cb);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    } // no listener, and sensor is exist
    // then destroy the sensor


    if (listeners.length === 0 && sensor) {
      destroy();
    }
  };

  return {
    element: element,
    bind: bind,
    destroy: destroy,
    unbind: unbind
  };
};

exports.createSensor = createSensor;

/***/ })

}]);
//# sourceMappingURL=vendors~FormCreator~dataAppRouter.js.map
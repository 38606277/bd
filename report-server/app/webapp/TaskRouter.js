(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TaskRouter"],{

/***/ "./node_modules/_react-load-script@0.0.6@react-load-script/lib/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_react-load-script@0.0.6@react-load-script/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.0@prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_React$Component) {
  _inherits(Script, _React$Component);

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  function Script(props) {
    _classCallCheck(this, Script);

    var _this = _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, props));

    _this.scriptLoaderId = 'id' + _this.constructor.idCount++; // eslint-disable-line space-unary-ops, no-plusplus
    return _this;
  }

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.


  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.


  _createClass(Script, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onError = _props.onError,
          onLoad = _props.onLoad,
          url = _props.url;


      if (this.constructor.loadedScripts[url]) {
        onLoad();
        return;
      }

      if (this.constructor.erroredScripts[url]) {
        onError();
        return;
      }

      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
        return;
      }

      this.constructor.scriptObservers[url] = _defineProperty({}, this.scriptLoaderId, this.props);

      this.createScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];

      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      if (observers) {
        delete observers[this.scriptLoaderId];
      }
    }
  }, {
    key: 'createScript',
    value: function createScript() {
      var _this2 = this;

      var _props2 = this.props,
          onCreate = _props2.onCreate,
          url = _props2.url,
          attributes = _props2.attributes;

      var script = document.createElement('script');

      onCreate();

      // add 'data-' or non standard attributes to the script tag
      if (attributes) {
        Object.keys(attributes).forEach(function (prop) {
          return script.setAttribute(prop, attributes[prop]);
        });
      }

      script.src = url;

      // default async to true if not set with custom attributes
      if (!script.hasAttribute('async')) {
        script.async = 1;
      }

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        Object.keys(observers).forEach(function (key) {
          if (shouldRemoveObserver(observers[key])) {
            delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
          }
        });
      };
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onLoad();
          return true;
        });
      };

      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onError();
          return true;
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Script;
}(_react2.default.Component);

Script.propTypes = {
  attributes: _propTypes.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onCreate: _propTypes.PropTypes.func,
  onError: _propTypes.PropTypes.func.isRequired,
  onLoad: _propTypes.PropTypes.func.isRequired,
  url: _propTypes.PropTypes.string.isRequired
};
Script.defaultProps = {
  attributes: {},
  onCreate: function onCreate() {},
  onError: function onError() {},
  onLoad: function onLoad() {} };
Script.scriptObservers = {};
Script.loadedScripts = {};
Script.erroredScripts = {};
Script.idCount = 0;
exports.default = Script;
module.exports = exports['default'];

/***/ }),

/***/ "./src/page/task/AgencyTaskList.jsx":
/*!******************************************!*\
  !*** ./src/page/task/AgencyTaskList.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@4.9.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@4.9.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _taskService = __webpack_require__(/*! ../../service/task-service.jsx */ "./src/service/task-service.jsx");

var _taskService2 = _interopRequireDefault(_taskService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2018-01-31 13:10:47
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-02-01 16:30:04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var localStorge = new _LogcalStorge2.default();
var _product = new _taskService2.default();
var Search = _input2.default.Search;

var AgencyTaskList = function (_React$Component) {
    _inherits(AgencyTaskList, _React$Component);

    function AgencyTaskList(props) {
        _classCallCheck(this, AgencyTaskList);

        var _this = _possibleConstructorReturn(this, (AgencyTaskList.__proto__ || Object.getPrototypeOf(AgencyTaskList)).call(this, props));

        _this.state = {
            list: [],
            currentPage: 1,
            perPage: 10,
            listType: 'list'
        };
        return _this;
    }

    _createClass(AgencyTaskList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadProductList();
        }
        // 加载商品列表

    }, {
        key: 'loadProductList',
        value: function loadProductList() {
            var _this2 = this;

            var listParam = {};
            listParam.userId = localStorge.getStorage('userInfo').userId;
            listParam.currentPage = this.state.currentPage;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.keyword = this.state.searchKeyword;
            }

            // 请求接口
            _product.getAgencyList(listParam).then(function (response) {
                _this2.setState(response.data);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
                localStorge.errorTips(errMsg);
            });
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch(searchKeyword) {
            var _this3 = this;

            var listType = searchKeyword === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                currentPage: 1,
                searchKeyword: searchKeyword
            }, function () {
                _this3.loadProductList();
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(currentPage) {
            var _this4 = this;

            this.setState({
                currentPage: currentPage
            }, function () {
                _this4.loadProductList();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var dataSource = this.state.list;

            var columns = [{
                title: '填报名称',
                dataIndex: 'taskname',
                key: 'taskname',
                render: function render(text, record, index) {
                    return _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/task/taskInfo/' + record.taskid },
                        text
                    );
                }
            }, {
                title: '填报开始时间',
                dataIndex: 'startdate',
                key: 'startdate'
            }, {
                title: '填报结束时间',
                dataIndex: 'enddate',
                key: 'enddate'
            }];
            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u4EE3\u529E\u4EFB\u52A1\u5217\u8868' },
                    _react2.default.createElement(
                        _tooltip2.default,
                        null,
                        _react2.default.createElement(Search, {
                            style: { width: 300, marginBottom: '10px' },
                            placeholder: '\u8BF7\u8F93\u5165...',
                            enterButton: '\u67E5\u8BE2',
                            onSearch: function onSearch(value) {
                                return _this5.onSearch(value);
                            }
                        })
                    ),
                    _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false }),
                    _react2.default.createElement(_pagination2.default, { current: this.state.currentPage,
                        total: this.state.total,
                        onChange: function onChange(currentPage) {
                            return _this5.onPageNumChange(currentPage);
                        } })
                )
            );
        }
    }]);

    return AgencyTaskList;
}(_react2.default.Component);

exports.default = AgencyTaskList;

/***/ }),

/***/ "./src/page/task/taskInfo.jsx":
/*!************************************!*\
  !*** ./src/page/task/taskInfo.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _taskService = __webpack_require__(/*! ../../service/task-service.jsx */ "./src/service/task-service.jsx");

var _taskService2 = _interopRequireDefault(_taskService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

var _reactLoadScript = __webpack_require__(/*! react-load-script */ "./node_modules/_react-load-script@0.0.6@react-load-script/lib/index.js");

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

__webpack_require__(/*! @babel/polyfill */ "./node_modules/_@babel_polyfill@7.12.1@@babel/polyfill/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var _product = new _taskService2.default();

var TaskInfo = function (_React$Component) {
    _inherits(TaskInfo, _React$Component);

    function TaskInfo(props) {
        _classCallCheck(this, TaskInfo);

        var _this = _possibleConstructorReturn(this, (TaskInfo.__proto__ || Object.getPrototypeOf(TaskInfo)).call(this, props));

        _this.state = {
            taskId: _this.props.match.params.taskId,
            taskInfo: '',
            userId: localStorge.getStorage('userInfo').userId
        };

        return _this;
    }

    _createClass(TaskInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadtaksInfo();
        }
    }, {
        key: 'loadtaksInfo',
        value: function loadtaksInfo() {
            var _this2 = this;

            _product.getTaskTemplate(this.state.taskId).then(function (response) {

                _this2.setState(response.data);
            }, function (errMsg) {
                console.log(errMsg);
            }).catch(function (response) {
                console.log(response);
                // this.setState(response.data);
            });
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            console.log(this.state.项目经理);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(_reactLoadScript2.default, { url: '../../src/js/common.js' }),
                _react2.default.createElement(_reactLoadScript2.default, { url: '../../src/js/jquery.min.js' }),
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u62A5\u8868' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-horizontal' },
                        _react2.default.createElement(
                            'form',
                            { id: 'addtable' },
                            _react2.default.createElement('input', { type: 'hidden', id: 'delId' }),
                            _react2.default.createElement('input', { type: 'hidden', value: this.state.taskId, id: 'taskId' }),
                            _react2.default.createElement('input', { type: 'hidden', value: this.state.userId, id: 'userId' }),
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.taskInfo } })
                        )
                    )
                )
            );
        }
    }]);

    return TaskInfo;
}(_react2.default.Component);

exports.default = TaskInfo;

/***/ }),

/***/ "./src/page/task/taskInfoView.jsx":
/*!****************************************!*\
  !*** ./src/page/task/taskInfoView.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _taskService = __webpack_require__(/*! ../../service/task-service.jsx */ "./src/service/task-service.jsx");

var _taskService2 = _interopRequireDefault(_taskService);

__webpack_require__(/*! ./../../App.css */ "./src/App.css");

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

var _reactLoadScript = __webpack_require__(/*! react-load-script */ "./node_modules/_react-load-script@0.0.6@react-load-script/lib/index.js");

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var _product = new _taskService2.default();
var showHeader = false;

var TaskInfoView = function (_React$Component) {
    _inherits(TaskInfoView, _React$Component);

    function TaskInfoView(props) {
        _classCallCheck(this, TaskInfoView);

        var _this = _possibleConstructorReturn(this, (TaskInfoView.__proto__ || Object.getPrototypeOf(TaskInfoView)).call(this, props));

        _this.state = {
            taskId: _this.props.match.params.taskId,
            taskInfo: '',
            dataList: [],
            fieldList: [],
            showHeader: true,
            userId: localStorge.getStorage('userInfo').userId
        };
        return _this;
    }

    _createClass(TaskInfoView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadtaksInfo();
        }
    }, {
        key: 'loadtaksInfo',
        value: function loadtaksInfo() {
            var _this2 = this;

            _product.viewTaskTemplate(this.state.taskId).then(function (response) {
                _this2.setState(response.data);
            }, function (errMsg) {
                _this2.setState({});
                localStorge.errorTips(errMsg);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(_reactLoadScript2.default, { url: '../../src/js/common.js' }),
                _react2.default.createElement(_reactLoadScript2.default, { url: '../../src/js/jquery.min.js' }),
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u62A5\u8868' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-horizontal' },
                        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.taskInfo } })
                    )
                )
            );
        }
    }]);

    return TaskInfoView;
}(_react2.default.Component);

exports.default = TaskInfoView;

/***/ }),

/***/ "./src/page/task/taskList.jsx":
/*!************************************!*\
  !*** ./src/page/task/taskList.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@4.9.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@4.9.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _taskService = __webpack_require__(/*! ../../service/task-service.jsx */ "./src/service/task-service.jsx");

var _taskService2 = _interopRequireDefault(_taskService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2018-01-31 13:10:47
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-02-01 16:30:04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var localStorge = new _LogcalStorge2.default();
var _product = new _taskService2.default();
var Search = _input2.default.Search;

var TaskList = function (_React$Component) {
    _inherits(TaskList, _React$Component);

    function TaskList(props) {
        _classCallCheck(this, TaskList);

        var _this = _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).call(this, props));

        _this.state = {
            list: [],
            currentPage: 1,
            perPage: 10,
            listType: 'list'
        };
        return _this;
    }

    _createClass(TaskList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadProductList();
        }
        // 加载商品列表

    }, {
        key: 'loadProductList',
        value: function loadProductList() {
            var _this2 = this;

            var listParam = {};
            listParam.userId = localStorge.getStorage('userInfo').userId;
            listParam.currentPage = this.state.currentPage;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.keyword = this.state.searchKeyword;
            }
            // 请求接口
            _product.getTaskList(listParam).then(function (response) {
                _this2.setState(response.data);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
                localStorge.errorTips(errMsg);
            });
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch(searchKeyword) {
            var _this3 = this;

            this.setState({
                currentPage: 1,
                searchKeyword: searchKeyword
            }, function () {
                _this3.loadProductList();
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(currentPage) {
            var _this4 = this;

            this.setState({
                currentPage: currentPage
            }, function () {
                _this4.loadProductList();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var dataSource = this.state.list;

            var columns = [{
                title: '填报名称',
                dataIndex: 'taskname',
                key: 'taskname',
                render: function render(text, record, index) {
                    return _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/task/taskInfoView/' + record.taskid },
                        text
                    );
                }
            }, {
                title: '填报开始时间',
                dataIndex: 'startdate',
                key: 'startdate'
            }, {
                title: '填报结束时间',
                dataIndex: 'enddate',
                key: 'enddate'
            }];
            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u5DF2\u529E\u4EFB\u52A1\u5217\u8868' },
                    _react2.default.createElement(
                        _tooltip2.default,
                        null,
                        _react2.default.createElement(Search, {
                            style: { width: 300, marginBottom: '10px' },
                            placeholder: '\u8BF7\u8F93\u5165...',
                            enterButton: '\u67E5\u8BE2',
                            onSearch: function onSearch(value) {
                                return _this5.onSearch(value);
                            }
                        })
                    ),
                    _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false }),
                    _react2.default.createElement(_pagination2.default, { current: this.state.currentPage,
                        total: this.state.total,
                        onChange: function onChange(currentPage) {
                            return _this5.onPageNumChange(currentPage);
                        } })
                )
            );
        }
    }]);

    return TaskList;
}(_react2.default.Component);

exports.default = TaskList;

/***/ }),

/***/ "./src/page/task/taskrouter.jsx":
/*!**************************************!*\
  !*** ./src/page/task/taskrouter.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _AgencyTaskList = __webpack_require__(/*! ./AgencyTaskList.jsx */ "./src/page/task/AgencyTaskList.jsx");

var _AgencyTaskList2 = _interopRequireDefault(_AgencyTaskList);

var _taskInfo = __webpack_require__(/*! ./taskInfo.jsx */ "./src/page/task/taskInfo.jsx");

var _taskInfo2 = _interopRequireDefault(_taskInfo);

var _taskInfoView = __webpack_require__(/*! ./taskInfoView.jsx */ "./src/page/task/taskInfoView.jsx");

var _taskInfoView2 = _interopRequireDefault(_taskInfoView);

var _taskList = __webpack_require__(/*! ./taskList.jsx */ "./src/page/task/taskList.jsx");

var _taskList2 = _interopRequireDefault(_taskList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 页面


var TaskRouter = function (_React$Component) {
    _inherits(TaskRouter, _React$Component);

    function TaskRouter() {
        _classCallCheck(this, TaskRouter);

        return _possibleConstructorReturn(this, (TaskRouter.__proto__ || Object.getPrototypeOf(TaskRouter)).apply(this, arguments));
    }

    _createClass(TaskRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/task/AgencyTaskList', component: _AgencyTaskList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/task/taskList', component: _taskList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/task/taskInfo/:taskId', component: _taskInfo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/task/taskInfoView/:taskId', component: _taskInfoView2.default }),
                _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/task', to: '/task/AgencyTaskList' })
            );
        }
    }]);

    return TaskRouter;
}(_react2.default.Component);

exports.default = TaskRouter;

/***/ }),

/***/ "./src/service/task-service.jsx":
/*!**************************************!*\
  !*** ./src/service/task-service.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   2018-01-31 13:19:15
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last Modified by:   Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last Modified time: 2018-02-04 22:52:34
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _HttpService = __webpack_require__(/*! ../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        _classCallCheck(this, Task);
    }

    _createClass(Task, [{
        key: 'getAgencyList',

        // 获取代办任务列表
        value: function getAgencyList(listParam) {

            return _HttpService2.default.post('/reportServer/dataCollect/getMyTaskByUserId', JSON.stringify(listParam));
        }
        //获取已办任务列表

    }, {
        key: 'getTaskList',
        value: function getTaskList(listParam) {

            return _HttpService2.default.post('/reportServer/dataCollect/getMyTaskListByUserId', JSON.stringify(listParam));
        }
        // 获取任务详情-弃用

    }, {
        key: 'getTaskInfo',
        value: function getTaskInfo(taskId) {
            return _HttpService2.default.post('/reportServer/dataCollect/getTaskAndUsersByid', JSON.stringify({ taskId: taskId }));
        }
        // 获取模板详情进行填报

    }, {
        key: 'getTaskTemplate',
        value: function getTaskTemplate(taskId) {
            return _HttpService2.default.post('/reportServer/dataCollect/createHtmlForReact/' + taskId, null);
        }
        // 查看填报详情

    }, {
        key: 'viewTaskTemplate',
        value: function viewTaskTemplate(taskId) {
            return _HttpService2.default.post('/reportServer/dataCollect/viewHtmlForReact/' + taskId, null);
        }
    }]);

    return Task;
}();

exports.default = Task;

/***/ }),

/***/ "./src/util/HttpService.jsx":
/*!**********************************!*\
  !*** ./src/util/HttpService.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! whatwg-fetch */ "./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");

var _LogcalStorge = __webpack_require__(/*! ./LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var localStorge = new _LogcalStorge2.default();

var HttpService = function () {
    function HttpService() {
        _classCallCheck(this, HttpService);
    }

    _createClass(HttpService, null, [{
        key: 'getBaseUrl',
        value: function getBaseUrl() {

            var url = window.getServerUrl(); //"http://localhost:8080/";
            return url;
        }

        //

    }, {
        key: 'post',
        value: function post(url, param, n) {
            if (undefined == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin' || '' == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin') {
                window.location.href = '#login';
                return new Promise(function (resolve, reject) {});
            } else {
                var myurl = n ? 'http://192.168.206.49:9601/' : HttpService.getBaseUrl();
                console.log(myurl);
                var fullUrl = myurl + url;
                var opts = {
                    method: 'POST',
                    headers: {
                        credentials: JSON.stringify(localStorge.getStorage('userInfo') || '')
                    },
                    body: param
                };

                return fetch(fullUrl, opts).then(function (response) {
                    //console.log(response.json())
                    return response.json();
                }).catch(function (error) {
                    return error.json();
                });
            }
        }
    }, {
        key: 'getFile',
        value: function getFile(url) {
            if (undefined == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin' || '' == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin') {
                window.location.href = '#login';
                return new Promise(function (resolve, reject) {});
            } else {
                var fullUrl = HttpService.getBaseUrl() + url;
                var opts = {
                    method: 'GET',
                    headers: {
                        credentials: JSON.stringify(localStorge.getStorage('userInfo') || '')
                    }
                };

                return fetch(fullUrl, opts);
            }
        }
    }]);

    return HttpService;
}();

exports.default = HttpService;

/***/ })

}]);
//# sourceMappingURL=TaskRouter.js.map
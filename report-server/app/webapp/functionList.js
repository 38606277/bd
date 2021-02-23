(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["functionList"],{

/***/ "./src/page/function/functionList.jsx":
/*!********************************************!*\
  !*** ./src/page/function/functionList.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@4.9.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@4.9.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _FunctionService = __webpack_require__(/*! ../../service/FunctionService.jsx */ "./src/service/FunctionService.jsx");

var _FunctionService2 = _interopRequireDefault(_FunctionService);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2018-01-26 16:48:16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-01-31 14:34:10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var functionService = new _FunctionService2.default();
var Column = _table2.default.Column,
    ColumnGroup = _table2.default.ColumnGroup;

var Search = _input2.default.Search;

var functionList = function (_React$Component) {
    _inherits(functionList, _React$Component);

    function functionList(props) {
        _classCallCheck(this, functionList);

        var _this = _possibleConstructorReturn(this, (functionList.__proto__ || Object.getPrototypeOf(functionList)).call(this, props));

        _this.state = {
            loading: false,
            list: [],
            selectedRows: [],
            selectedRowKeys: []
        };
        return _this;
    }

    _createClass(functionList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getAllFunctionName();
        }
    }, {
        key: 'getAllFunctionName',
        value: function getAllFunctionName() {
            var _this2 = this;

            var param = {};
            _HttpService2.default.post('reportServer/function1/getAllFunctionName', null).then(function (res) {
                if (res.resultCode == "1000") _this2.setState({ list: res.data });else _message3.default.error(res.message);
            });
        }
    }, {
        key: 'onDelButtonClick',
        value: function onDelButtonClick() {
            var _this3 = this;

            if (confirm('确认删除吗？')) {
                _HttpService2.default.post('reportServer/function1/deleteFunction', JSON.stringify(this.state.selectedRows)).then(function (res) {
                    if (res.resultCode == "1000") {
                        _message3.default.success("删除成功！");
                        _this3.getAllFunctionName();
                        _this3.setState({ selectedRowKeys: [], selectedRows: [] });
                    } else _message3.default.error(res.message);
                });
            }
        }

        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this4 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this4.loadUserList();
            });
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch(searchKeyword) {
            var _this5 = this;

            var listType = searchKeyword === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                pageNum: 1,
                searchKeyword: searchKeyword
            }, function () {
                _this5.loadUserList();
            });
        }
        //展示当前行信息

    }, {
        key: 'showCurRowMessage',
        value: function showCurRowMessage(record) {
            alert("key:" + record.userId + " name:" + record.userName + " description:" + record.description);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var data = this.state.list;
            var self = this;
            var rowSelection = {
                selectedRowKeys: this.state.selectedRowKeys,
                onChange: function onChange(selectedRowKeys, selectedRows) {
                    console.log('selectedRowKeys changed: ', selectedRowKeys);
                    _this6.setState({ selectedRowKeys: selectedRowKeys, selectedRows: selectedRows });
                }
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u51FD\u6570\u5217\u8868', bodyStyle: { padding: "10px" } },
                    _react2.default.createElement(
                        _button2.default,
                        { href: '#/function/functionCreator/create/0', style: { marginRight: "10px" }, type: 'primary' },
                        '\u65B0\u5EFA\u51FD\u6570'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { href: '#/function/functionClass', style: { marginRight: "15px" }, type: 'primary' },
                        '\u51FD\u6570\u7C7B\u522B\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                return _this6.onDelButtonClick();
                            }, style: { marginRight: "10px" } },
                        '\u5220\u9664'
                    ),
                    _react2.default.createElement(Search, {
                        style: { maxWidth: 300, marginBottom: '10px', float: "right" },
                        placeholder: '\u8BF7\u8F93\u5165...',
                        enterButton: '\u67E5\u8BE2',
                        onSearch: function onSearch(value) {
                            return _this6.onSearch(value);
                        }
                    }),
                    _react2.default.createElement(
                        _table2.default,
                        { dataSource: this.state.list, rowSelection: rowSelection },
                        _react2.default.createElement(Column, {
                            title: '\u51FD\u6570ID',
                            dataIndex: 'func_id',
                            key: 'func_name'
                        }),
                        _react2.default.createElement(Column, {
                            title: '\u51FD\u6570\u540D\u79F0',
                            dataIndex: 'func_name',
                            key: 'func_desc'
                        }),
                        _react2.default.createElement(Column, {
                            title: '\u51FD\u6570\u63CF\u8FF0',
                            dataIndex: 'func_desc',
                            key: 'func_desc'
                        }),
                        _react2.default.createElement(Column, {
                            title: '\u51FD\u6570\u7C7B\u522B',
                            dataIndex: 'class_name',
                            key: 'class_name'
                        }),
                        _react2.default.createElement(Column, {
                            title: '\u8C03\u7528\u65B9\u5F0F',
                            dataIndex: 'func_type',
                            key: 'func_type'
                        }),
                        _react2.default.createElement(Column, {
                            title: '\u52A8\u4F5C',
                            key: 'action',
                            render: function render(text, record) {
                                return _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#/function/functionCreator/update/' + record.func_id },
                                        '\u7F16\u8F91'
                                    ),
                                    _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'javascript:;' },
                                        '\u5220\u9664',
                                        record.name
                                    )
                                );
                            }
                        })
                    )
                )
            );
        }
    }]);

    return functionList;
}(_react2.default.Component);

exports.default = functionList;

/***/ }),

/***/ "./src/service/FunctionService.jsx":
/*!*****************************************!*\
  !*** ./src/service/FunctionService.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HttpService = __webpack_require__(/*! ../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _LogcalStorge = __webpack_require__(/*! ../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var localStorge = new _LogcalStorge2.default();

var FunctionService = function () {
    function FunctionService() {
        _classCallCheck(this, FunctionService);
    }
    // 获取函数列表


    _createClass(FunctionService, [{
        key: 'getFunctionList',
        value: function getFunctionList() {

            var url = "reportServer/function1/getAllFunctionName";
            var param = {
                name: 'Hubot',
                login: 'hubot'
            };

            return _HttpService2.default.post(url, null);
        }

        // 获取函数列表

    }, {
        key: 'getFunctionByID',
        value: function getFunctionByID(funcid) {

            var url = "reportServer/function1/getFunctionByID/" + funcid;
            var param = {};

            return _HttpService2.default.post(url, param);
        }

        // 获取SQL的输入输出参数

    }, {
        key: 'getSqlInOut',
        value: function getSqlInOut(aSQL) {

            var url = "reportServer/sql/getInputOutputParas";
            var param = {
                sqlType: "sql",
                sql: aSQL
            };

            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: 'getAllFunctionClass',
        value: function getAllFunctionClass() {
            var url = "reportServer/function1/getAllFunctionClass";

            return _HttpService2.default.post(url, '');
        }
    }, {
        key: 'saveFunctionClass',
        value: function saveFunctionClass(param) {
            var url = "reportServer/function1/createFunctionClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: 'updateFunctionClass',
        value: function updateFunctionClass(param) {
            var url = "reportServer/function1/updateFunctionClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: 'deleteFunctionClss',
        value: function deleteFunctionClss(param) {
            var url = "reportServer/function1/deleteFunctionClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
        // 保存一个函数定义

    }, {
        key: 'CreateFunction',
        value: function CreateFunction(jFunc) {

            var url = "reportServer/function1/saveUserSql";
            // let param = {
            //     sqlType: "sql",
            //     sql:aSQL
            // };

            return _HttpService2.default.post(url, JSON.stringify(jFunc));
        }
    }]);

    return FunctionService;
}();

exports.default = FunctionService;

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
//# sourceMappingURL=functionList.js.map
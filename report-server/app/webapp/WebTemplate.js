(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WebTemplate"],{

/***/ "./src/page/query/WebTemplate.jsx":
/*!****************************************!*\
  !*** ./src/page/query/WebTemplate.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _QueryService = __webpack_require__(/*! ../../service/QueryService.jsx */ "./src/service/QueryService.jsx");

var _QueryService2 = _interopRequireDefault(_QueryService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var _query = new _QueryService2.default();

var WebTemplate = function (_React$Component) {
    _inherits(WebTemplate, _React$Component);

    function WebTemplate(props) {
        _classCallCheck(this, WebTemplate);

        var _this = _possibleConstructorReturn(this, (WebTemplate.__proto__ || Object.getPrototypeOf(WebTemplate)).call(this, props));

        _this.state = {
            path: _this.props.match.params.path,
            userId: localStorge.getStorage('userInfo').userId,
            localPath: ""
        };
        return _this;
    }

    _createClass(WebTemplate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadHtml();
        }
        //组件更新时被调用 

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newpath = nextProps.match.params.path;
            var oldpath = this.state.path;
            //如果qryId发生变化则这个页面全部重新加载
            if (oldpath != newpath) {
                this.setState({
                    path: newpath, localPath: ""
                }, function () {
                    this.loadHtml();
                });
            }
        }
    }, {
        key: 'loadHtml',
        value: function loadHtml() {
            var _this2 = this;

            _query.MyReportUrl().then(function (response) {
                _this2.setState({ localPath: window.getServerUrl() + "report/static/" + decodeURIComponent(decodeURIComponent(_this2.state.path)).replace(response.webPath, "") });
            }, function (errMsg) {
                localStorge.errorTips(errMsg);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement('iframe', { style: { border: 0, width: "100%", height: 630 }, src: this.state.localPath })
            );
        }
    }]);

    return WebTemplate;
}(_react2.default.Component);

exports.default = WebTemplate;

/***/ }),

/***/ "./src/service/QueryService.jsx":
/*!**************************************!*\
  !*** ./src/service/QueryService.jsx ***!
  \**************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryService = function () {
    function QueryService() {
        _classCallCheck(this, QueryService);
    }

    _createClass(QueryService, [{
        key: "getCategoryList",

        // 获取函数列表
        value: function getCategoryList() {
            var url = "reportServer/select/getSelectClass";
            var param = {};
            return _HttpService2.default.post(url, param);
        }
        // 获取函数列表

    }, {
        key: "getSelectClassTree",
        value: function getSelectClassTree() {
            var url = "reportServer/select/getSelectClassTree";
            var param = {};
            return _HttpService2.default.post(url, param);
        }
        // 获取权限可访问列表

    }, {
        key: "getQueryClassTree",
        value: function getQueryClassTree(userId) {
            var url = "reportServer/auth/getMenuListNew";
            var param = { userId: userId };
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
        //获取staticReport目录下的文件目录

    }, {
        key: "getMyReports",
        value: function getMyReports() {
            var url = "reportServer/web/getDirectory";
            return _HttpService2.default.post(url, null);
        }
        //获取需要进行替换的访问目录路径

    }, {
        key: "MyReportUrl",
        value: function MyReportUrl() {
            var url = "reportServer/web/MyReportUrl";
            return _HttpService2.default.post(url, null);
        }
    }, {
        key: "getReportNameList",
        value: function getReportNameList(name) {
            var url = "reportServer/select/getSelectName/" + name;
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: "getQueryCriteria",
        value: function getQueryCriteria(selectClassId) {
            var url = "reportServer/query/getQueryParam/" + selectClassId;
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: "execSelect",
        value: function execSelect(selectClassId, selectID, param) {
            var url = "reportServer/query/execQuery/" + selectID + "/" + selectClassId;
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "getDictionaryList",
        value: function getDictionaryList(param, page) {
            var url = "reportServer/dict/getDictValueByID/" + param;
            return _HttpService2.default.post(url, JSON.stringify(page));
        }
    }, {
        key: "getAllQueryClass",
        value: function getAllQueryClass() {
            var url = "reportServer/query/getAllQueryClass";
            return _HttpService2.default.post(url, '');
        }
    }, {
        key: "saveQueryClass",
        value: function saveQueryClass(param) {
            var url = "reportServer/query/createQueryClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "updateQueryClass",
        value: function updateQueryClass(param) {
            var url = "reportServer/query/updateQueryClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "deleteQueryClass",
        value: function deleteQueryClass(param) {
            var url = "reportServer/query/deleteQueryClassInfo";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "selectLinkValue",
        value: function selectLinkValue(qryId, outId) {
            var url = "reportServer/query/getQueryOutLink/" + qryId + "/" + outId;;
            return _HttpService2.default.post(url, {});
        }

        // 获取权限可访问列表

    }, {
        key: "getQueryClassTreetwo",
        value: function getQueryClassTreetwo(userId) {
            var url = "reportServer/auth/getClassId";
            var param = { userId: userId };
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "getQryNameByClassId",
        value: function getQryNameByClassId(obj) {
            var url = "reportServer/auth/getQryNameByClassId";
            return _HttpService2.default.post(url, JSON.stringify(obj));
        }
    }, {
        key: "getAllQueryNameList",
        value: function getAllQueryNameList(param) {
            var url = "reportServer/query/getAllQueryNameList";
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "getCubeListInAuth",
        value: function getCubeListInAuth(userId) {
            var url = "reportServer/auth/getCubeListInAuth";
            var param = { userId: userId };
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: "getDashboardListInAuth",
        value: function getDashboardListInAuth(userId) {
            var url = "reportServer/auth/getDashboardListInAuth";
            var param = { userId: userId };
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }]);

    return QueryService;
}();

exports.default = QueryService;

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
//# sourceMappingURL=WebTemplate.js.map
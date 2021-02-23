(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth"],{

/***/ "./src/page/user/Auth.jsx":
/*!********************************!*\
  !*** ./src/page/user/Auth.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@4.9.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@4.9.1@antd/es/tree/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _userService = __webpack_require__(/*! ../../service/user-service.jsx */ "./src/service/user-service.jsx");

var _userService2 = _interopRequireDefault(_userService);

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.9.1@antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var _user = new _userService2.default();
var Search = _input2.default.Search;
var TreeNode = _tree2.default.TreeNode;

var Auth = function (_React$Component) {
    _inherits(Auth, _React$Component);

    function Auth(props) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

        _this.state = {
            list: [],
            pageNum: 1,
            perPage: 10,
            listType: 'list',
            searchKeyword: ''
        };
        return _this;
    }

    _createClass(Auth, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadUserList();
        }
    }, {
        key: 'loadUserList',
        value: function loadUserList() {
            var _this2 = this;

            var listParam = {};
            listParam.pageNum = this.state.pageNum;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.keyword = this.state.searchKeyword;
            }
            _user.getUserList(listParam).then(function (response) {
                _this2.setState(response.data);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
                // _mm.errorTips(errMsg);
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this3 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this3.loadUserList();
            });
        }
        // 数据变化的时候

    }, {
        key: 'onValueChange',
        value: function onValueChange(e) {
            var name = e.target.name,
                value = e.target.value.trim();
            this.setState(_defineProperty({}, name, value));
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch(searchKeyword) {
            var _this4 = this;

            var listType = searchKeyword === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                pageNum: 1,
                searchKeyword: searchKeyword
            }, function () {
                _this4.loadUserList();
            });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(id) {
            var _this5 = this;

            if (confirm('确认删除吗？')) {
                _user.delUser(id).then(function (response) {
                    alert("删除成功");
                    _this5.loadUserList();
                }, function (errMsg) {
                    alert("删除失败");
                    // _mm.errorTips(errMsg);
                });
            }
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

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var userinfos = localStorge.getStorage('userInfo');
            var dataSource = this.state.list;
            var self = this;
            var columns = [{
                title: '角色',
                dataIndex: 'isAdminText',
                key: 'isAdminText'
            }];

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u6388\u6743\u7BA1\u7406' },
                    _react2.default.createElement(Search, {
                        style: { width: 300, marginBottom: '10px' },
                        placeholder: '\u8BF7\u8F93\u5165...',
                        enterButton: '\u67E5\u8BE2',
                        onSearch: function onSearch(value) {
                            return _this6.onSearch(value);
                        }
                    }),
                    _react2.default.createElement(
                        _button2.default,
                        { href: '#/user/userInfo/null', style: { float: "right", marginRight: "30px" }, type: 'primary' },
                        '\u65B0\u5EFA\u7528\u6237'
                    ),
                    _react2.default.createElement(
                        _row2.default,
                        { gutter: 35 },
                        _react2.default.createElement(
                            _col2.default,
                            { span: 8 },
                            _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false }),
                            _react2.default.createElement(_pagination2.default, { current: this.state.pageNum,
                                total: this.state.total,
                                onChange: function onChange(pageNum) {
                                    return _this6.onPageNumChange(pageNum);
                                } })
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { xs: 24, sm: 12 },
                            _react2.default.createElement(
                                _card2.default,
                                null,
                                _react2.default.createElement(
                                    _tree2.default,
                                    {
                                        checkable: true,
                                        defaultExpandedKeys: ['0-0-0', '0-0-1'],
                                        defaultSelectedKeys: ['0-0-0', '0-0-1'],
                                        defaultCheckedKeys: ['0-0-0', '0-0-1'],
                                        onSelect: this.onSelect,
                                        onCheck: this.onCheck
                                    },
                                    _react2.default.createElement(
                                        TreeNode,
                                        { title: '\u51FD\u6570\u6743\u9650', key: '0-0' },
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-0', key: '0-0-0' },
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
                                        ),
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-1', key: '0-0-1' },
                                            _react2.default.createElement(TreeNode, { title: _react2.default.createElement(
                                                    'span',
                                                    { style: { color: '#1890ff' } },
                                                    'sss'
                                                ), key: '0-0-1-0' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        TreeNode,
                                        { title: '\u67E5\u8BE2\u6743\u9650', key: '0-0' },
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-0', key: '0-0-0' },
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
                                        ),
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-1', key: '0-0-1' },
                                            _react2.default.createElement(TreeNode, { title: _react2.default.createElement(
                                                    'span',
                                                    { style: { color: '#1890ff' } },
                                                    'sss'
                                                ), key: '0-0-1-0' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        TreeNode,
                                        { title: 'Excel\u529F\u80FD\u6743\u9650', key: '0-0' },
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-0', key: '0-0-0' },
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
                                        ),
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-1', key: '0-0-1' },
                                            _react2.default.createElement(TreeNode, { title: _react2.default.createElement(
                                                    'span',
                                                    { style: { color: '#1890ff' } },
                                                    'sss'
                                                ), key: '0-0-1-0' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        TreeNode,
                                        { title: 'WEB\u529F\u80FD\u6743\u9650', key: '0-0' },
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-0', key: '0-0-0' },
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
                                        ),
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: 'parent 1-1', key: '0-0-1' },
                                            _react2.default.createElement(TreeNode, { title: _react2.default.createElement(
                                                    'span',
                                                    { style: { color: '#1890ff' } },
                                                    'sss'
                                                ), key: '0-0-1-0' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        TreeNode,
                                        { title: '\u6570\u636E\u6743\u9650', key: '0-0' },
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: '\u516C\u53F8\u6570\u636E\u6743\u9650', key: '0-0-0' },
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
                                            _react2.default.createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
                                        ),
                                        _react2.default.createElement(
                                            TreeNode,
                                            { title: '\u90E8\u95E8\u6570\u636E\u6743\u9650', key: '0-0-1' },
                                            _react2.default.createElement(TreeNode, { title: _react2.default.createElement(
                                                    'span',
                                                    { style: { color: '#1890ff' } },
                                                    'sss'
                                                ), key: '0-0-1-0' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Auth;
}(_react2.default.Component);

exports.default = Auth;

/***/ }),

/***/ "./src/service/user-service.jsx":
/*!**************************************!*\
  !*** ./src/service/user-service.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HttpService = __webpack_require__(/*! ../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: 'login',

        // 用户登录
        value: function login(loginInfo) {
            return _HttpService2.default.post('/reportServer/user/Reactlogin', JSON.stringify(loginInfo));
        }
        // 检查登录接口的数据是不是合法

    }, {
        key: 'checkLoginInfo',
        value: function checkLoginInfo(loginInfo) {
            var userCode = loginInfo.UserCode,
                Pwd = loginInfo.Pwd;
            // 判断用户名为空
            if (typeof userCode !== 'string' || userCode.length === 0) {
                return {
                    status: false,
                    msg: '用户名不能为空！'
                };
            }
            // 判断密码为空
            if (typeof Pwd !== 'string' || Pwd.length === 0) {
                return {
                    status: false,
                    msg: '密码不能为空！'
                };
            }
            return {
                status: true,
                msg: '验证通过'
            };
        }
    }, {
        key: 'encodePwd',
        value: function encodePwd(pwd) {
            return _HttpService2.default.post('/reportServer/user/encodePwd', pwd);
        }
        // 退出登录

    }, {
        key: 'logout',
        value: function logout() {
            return _HttpService2.default.post('/user/logout.do', null);
        }
    }, {
        key: 'getUserList',
        value: function getUserList(listParam) {
            return _HttpService2.default.post('/reportServer/formUser/getUserListReact', JSON.stringify(listParam));
        }
    }, {
        key: 'getUserListRole',
        value: function getUserListRole(listParam) {
            return _HttpService2.default.post('/reportServer/formUser/getUserListRole', JSON.stringify(listParam));
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(userId) {
            return _HttpService2.default.post('/reportServer/formUser/getUserInfoByUserId', JSON.stringify({ id: userId }));
        }
    }, {
        key: 'saveUserInfo',
        value: function saveUserInfo(userInfo) {
            if (userInfo._id == 'null') {
                return _HttpService2.default.post('/reportServer/formUser/addUser', JSON.stringify(userInfo));
            } else {
                return _HttpService2.default.post('/reportServer/formUser/updateUser', JSON.stringify(userInfo));
            }
        }
    }, {
        key: 'delUser',
        value: function delUser(id) {
            return _HttpService2.default.post('/reportServer/formUser/deleteUser', id);
        }
    }, {
        key: 'getRoleList',
        value: function getRoleList() {
            var url = '/reportServer/rule/getRoleList';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getRoleListByUserId',
        value: function getRoleListByUserId(userid) {
            return _HttpService2.default.post('reportServer/auth/getRoleListByUserId', JSON.stringify({ 'userid': userid }));
        }
    }, {
        key: 'UpdatePwd',
        value: function UpdatePwd(userInfo) {
            return _HttpService2.default.post('/reportServer/formUser/updatePwd', JSON.stringify(userInfo));
        }
    }]);

    return User;
}();

exports.default = User;

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
//# sourceMappingURL=Auth.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RoleRouter~RuleRouter"],{

/***/ "./src/page/system/rule/ruleInfo.jsx":
/*!*******************************************!*\
  !*** ./src/page/system/rule/ruleInfo.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@4.9.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@4.9.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@4.9.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@4.9.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@4.9.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@4.9.1@antd/es/tree/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _RoleService = __webpack_require__(/*! ../../../service/RoleService.jsx */ "./src/service/RoleService.jsx");

var _RoleService2 = _interopRequireDefault(_RoleService);

var _RuleService = __webpack_require__(/*! ../../../service/RuleService.jsx */ "./src/service/RuleService.jsx");

var _RuleService2 = _interopRequireDefault(_RuleService);

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.9.1@antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = _tree2.default.TreeNode;
var _role = new _RoleService2.default();
var ruleSevie = new _RuleService2.default();
var Search = _input2.default.Search;
var TabPane = _tabs2.default.TabPane;
var Option = _select2.default.Option;

var RuleInfo = function (_React$Component) {
    _inherits(RuleInfo, _React$Component);

    function RuleInfo(props) {
        _classCallCheck(this, RuleInfo);

        var _this = _possibleConstructorReturn(this, (RuleInfo.__proto__ || Object.getPrototypeOf(RuleInfo)).call(this, props));

        _this.onExpand = function (expandedKeys) {
            _this.setState({
                expandedKeys: expandedKeys,
                autoExpandParent: false
            });
        };

        _this.onCheck = function (checkedKeys, info) {
            var checkedKeyVal = checkedKeys.checked;
            var treedatas = _this.state.treeData;
            _this.node = null;
            _this.parentNodes = [];
            //获取父节点key
            var arr2 = _this.getNode(treedatas, info.node.props.eventKey);
            //var arr = [...checkedKeyVal,...arr2];
            var array = Array.from(new Set([].concat(_toConsumableArray(checkedKeyVal), _toConsumableArray(arr2))));

            if (undefined != info.node.props.children && 'undefined' != info.node.props.children) {
                var childrenData = info.node.props.children;
                var isChecked = info.node.props.checked;
                _this.showExcelRuleTreeNodeReact(isChecked, childrenData, array);
            } else {
                _this.setState({ checkedKeys: array }, function () {});
            }
        };

        _this.renderTreeNodes = function (data) {
            return data.map(function (item) {
                if (item.children) {
                    return _react2.default.createElement(
                        TreeNode,
                        { title: item.title, key: item.key, dataRef: item },
                        _this.renderTreeNodes(item.children)
                    );
                }
                return _react2.default.createElement(TreeNode, item);
            });
        };

        _this.onChangeTab = function (activeKey) {
            _this.setState({ activeKey: activeKey, treeData: [] }, function () {
                var name = this.state.roleName;
                var roleId = this.state.roleId;
                if ('' != roleId) {
                    this.selectedOnchage(roleId, name, activeKey, 'true');
                }
            });
        };

        var panes = [];
        _this.parentNodes = [];
        _this.node = null;
        _this.newTabIndex = 0;
        _this.state = {
            roleId: _this.props.match.params.roleId,
            list: [],
            pageNum: 1,
            perPage: 10,
            listType: 'list',
            expandedKeys: [],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
            tabPosition: 'top',
            treeData: [],
            activeKey: "select",
            roleName: '',
            panes: panes
        };
        return _this;
    }

    _createClass(RuleInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadRoleList();
            if (null != this.state.roleId && '' != this.state.roleId && 'null' != this.state.roleId) {
                this.selectedOnchage(this.state.roleId, '', '', '');
            }
        }
    }, {
        key: 'loadRoleList',
        value: function loadRoleList() {
            var _this2 = this;

            var listParam = {};
            listParam.pageNum = this.state.pageNum;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.roleName = this.state.roleName;
            }
            _role.getRoleList(listParam).then(function (response) {
                _this2.setState(response);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
            });
        }
    }, {
        key: 'onValueChange',
        value: function onValueChange(e) {
            var name = e.target.name,
                value = e.target.value.trim();

            this.setState({ roleName: value });
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch() {
            var _this3 = this;

            this.setState({
                pageNum: 1,
                listType: 'search'
            }, function () {
                _this3.loadRoleList();
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this4 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this4.loadRoleList();
            });
        }
        //tree

    }, {
        key: 'showExcelRuleTreeNodeReact',

        //循环增加或删除选中项
        value: function showExcelRuleTreeNodeReact(isChecked, childrenData, checkedKeys) {
            var _this5 = this;

            if (!isChecked) {
                childrenData.map(function (item, index) {
                    checkedKeys.push(item.key);
                    if (undefined != item.props.children && 'undefined' != item.props.children) {
                        var _childrenData = item.props.children;
                        _this5.showExcelRuleTreeNodeReact(isChecked, _childrenData, checkedKeys);
                    }
                });
            } else {
                childrenData.map(function (item, index) {
                    for (var i = 0; i < checkedKeys.length; i++) {
                        if (checkedKeys[i] == item.key) {
                            checkedKeys.splice(i, 1);
                            i--;
                        }
                    }
                    if (undefined != item.props.children && 'undefined' != item.props.children) {
                        var _childrenData2 = item.props.children;
                        _this5.showExcelRuleTreeNodeReact(isChecked, _childrenData2, checkedKeys);
                    }
                });
            }
            this.setState({ checkedKeys: checkedKeys }, function () {});
        }
        //check事件

    }, {
        key: 'getNode',
        value: function getNode(json, nodeId) {
            //1.第一层 root 深度遍历整个JSON
            var i = 0;
            for (i; i < json.length; i++) {
                if (this.node) {
                    break;
                }
                var obj = json[i];
                //没有就下一个
                if (!obj || !obj.key) {
                    continue;
                }

                //2.有节点就开始找，一直递归下去
                if (obj.key == nodeId) {
                    //找到了与nodeId匹配的节点，结束递归
                    this.node = obj;
                    break;
                } else {
                    //3.如果有子节点就开始找
                    if (obj.children) {
                        this.parentNodes.push(obj.key);
                        //递归往下找
                        this.getNode(obj.children, nodeId);
                    } else {
                        //跳出当前递归，返回上层递归
                        continue;
                    }
                }
            }
            //如果这个循环都没有，则删除父节点
            if (i == json.length) {
                this.parentNodes.splice(this.parentNodes.length - 1, 1);
            }
            //6.返回结果obj
            // return {
            //     parentNode: this.parentNodes,
            //     node: this.node
            // };
            return this.parentNodes;
        }
    }, {
        key: 'selectedOnchage',
        value: function selectedOnchage(roleId, name, types, isChange) {
            this.setState({ roleId: roleId, roleName: name, expandedKeys: [], checkedKeys: [] }, function () {
                var _this6 = this;

                var type = 'select';
                if ('' != types) {
                    type = types;
                } else {
                    type = this.state.activeKey;
                }
                if (type == 'select') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthListByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getSelectClassTree().then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response });
                                ruleSevie.getAuthListByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'template') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getDirectory().then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'function') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getFunctionClass().then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'func') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getFunRuleList('excel').then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'webFunc') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getFunRuleList('reactWeb').then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'table') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditionsTable(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getAllAuthTypeList().then(function (response) {
                            if (response.resultCode != '3000') {
                                _this6.setState({ treeData: response.data });
                                ruleSevie.getAuthByConditionsTable(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                    //  ruleSevie.getAllAuthTypeList().then(response=>{
                    //      if(response.resultCode!='3000'){
                    //         const panes = [];
                    //         const activeKey = `table`;
                    //         response.data.map((item,index)=>{
                    //             panes.push({ title: item.name, content: (
                    //                 <div>
                    //                     <Button type="primary" onClick={()=>this.saveSelectObject()}>保存</Button>
                    //                     <Tree
                    //                         checkable
                    //                         onExpand={this.onExpand}
                    //                         expandedKeys={this.state.expandedKeys}
                    //                         autoExpandParent={this.state.autoExpandParent}
                    //                         onCheck={this.onCheck}
                    //                         checkedKeys={this.state.checkedKeys}                                       
                    //                         selectedKeys={this.state.selectedKeys}
                    //                     >
                    //                     {this.renderTreeNodes(this.state.treeData)}
                    //                     </Tree>
                    //                 </div>   
                    //            ), key: item.value });

                    //         })
                    //         this.setState({ panes, activeKey });
                    //      }
                    //     // this.setState({treeData:response});
                    //  });
                } else if (type == 'cube') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getAllCube().then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response.data });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else if (type == 'dashboard') {
                    //如果treeData不为空，根据人名称查人员选中事项
                    if (this.state.treeData.length > 0 && '' == isChange) {
                        ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                            var selectedKeys = [];
                            if (response.resultCode != '3000') {
                                response.map(function (item, index) {
                                    selectedKeys.push(item.funcId);
                                });
                                _this6.setState({
                                    expandedKeys: selectedKeys,
                                    checkedKeys: selectedKeys
                                });
                            }
                        });
                    } else {
                        //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                        this.setState({ treeData: [] });
                        ruleSevie.getAllDashBoard().then(function (response) {
                            if (response.status != 500) {
                                _this6.setState({ treeData: response.data });
                                ruleSevie.getAuthByConditions(roleId, type).then(function (response) {
                                    var selectedKeys = [];
                                    if (response.resultCode != '3000') {
                                        response.map(function (item, index) {
                                            selectedKeys.push(item.funcId);
                                        });
                                        _this6.setState({
                                            expandedKeys: selectedKeys,
                                            checkedKeys: selectedKeys
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
                //  if(type=='ou'){
                //      //如果treeData不为空，根据人名称查人员选中事项
                //      if(this.state.treeData.length>0 && ''==isChange){
                //         ruleSevie.getAuthByConditions(roleId,type).then(response=>{
                //             let  selectedKeys=[];
                //             if(response.resultCode!='3000'){
                //                 response.map((item,index)=>{
                //                     selectedKeys.push(item.funcId);
                //                 })
                //                 this.setState({
                //                     expandedKeys:selectedKeys,
                //                     checkedKeys: selectedKeys,
                //                 });  
                //             }                 
                //         });
                //     }else{
                //             //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                //             this.setState({treeData:[]});
                //             ruleSevie.getAuthTypeListByType('ou').then(response=>{
                //                 if(response.resultCode!='3000'){
                //                     this.setState({treeData:response});
                //                     ruleSevie.getAuthByConditions(roleId,type).then(response=>{
                //                         let  selectedKeys=[];
                //                         if(response.resultCode!='3000'){
                //                             response.map((item,index)=>{
                //                                 selectedKeys.push(item.funcId);
                //                             })
                //                             this.setState({
                //                                 expandedKeys:selectedKeys,
                //                                 checkedKeys: selectedKeys,
                //                             });  
                //                     }          
                //                 });
                //             }
                //             });
                //         }
                //  }
                //  if(type=='dept'){
                //      //如果treeData不为空，根据人名称查人员选中事项
                //      if(this.state.treeData.length>0 && ''==isChange){
                //         ruleSevie.getAuthListByConditions(roleId,type).then(response=>{
                //             let  selectedKeys=[];
                //             if(response.resultCode!='3000'){
                //                 response.map((item,index)=>{
                //                     selectedKeys.push(item.funcId);
                //                 })
                //                 this.setState({
                //                     expandedKeys:selectedKeys,
                //                     checkedKeys: selectedKeys,
                //                 });  
                //             }                 
                //         });
                //      }else{
                //             //如果treeData为空，根据人与当前tabKey进行先查询treeData后查人员选中事项
                //             this.setState({treeData:[]});
                //             ruleSevie.getAuthTypeListByType().then(response=>{
                //                 if(response.resultCode!='3000'){
                //                     this.setState({treeData:response});
                //                     ruleSevie.getAuthListByConditions(roleId,type).then(response=>{
                //                         let  selectedKeys=[];
                //                         if(response.resultCode!='3000'){
                //                             response.map((item,index)=>{
                //                                 selectedKeys.push(item.funcId);
                //                             })
                //                             this.setState({
                //                                 expandedKeys:selectedKeys,
                //                                 checkedKeys: selectedKeys,
                //                             });   
                //                          }         
                //                      });
                //                 }
                //             });
                //     }
                //  }
            });
        }
    }, {
        key: 'saveSelectObject',
        value: function saveSelectObject() {
            var param = [this.state.roleId, this.state.activeKey, this.state.checkedKeys];
            ruleSevie.saveAuthRules(param).then(function (response) {
                _message3.default.success("保存成功");
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var dataSource = this.state.list;
            var columns = [{
                dataIndex: 'roleName',
                key: 'roleName',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', onClick: function onClick() {
                                return _this7.selectedOnchage(record.roleId, record.roleName, '', '');
                            } },
                        text
                    );
                }
            }];
            var contents = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', onClick: function onClick() {
                            return _this7.saveSelectObject();
                        } },
                    '\u4FDD\u5B58'
                ),
                _react2.default.createElement(
                    _tree2.default,
                    {
                        checkable: true,
                        onExpand: this.onExpand,
                        expandedKeys: this.state.expandedKeys,
                        autoExpandParent: this.state.autoExpandParent,
                        onCheck: this.onCheck,
                        checkedKeys: this.state.checkedKeys,
                        selectedKeys: this.state.selectedKeys,
                        checkStrictly: true
                    },
                    this.renderTreeNodes(this.state.treeData)
                )
            );

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u89D2\u8272\u5217\u8868', style: { float: "left", width: "20%" } },
                    _react2.default.createElement(
                        _tooltip2.default,
                        null,
                        _react2.default.createElement(Search, {
                            style: { maxWidth: 190, marginBottom: '10px', marginLeft: '-20px', marginRight: '-30px', border: '0' },
                            placeholder: this.state.roleName == '' ? '请输入...' : this.state.roleName,
                            enterButton: '\u67E5\u8BE2',
                            onSearch: function onSearch(value) {
                                return _this7.onSearch(value);
                            },
                            onChange: function onChange(e) {
                                return _this7.onValueChange(e);
                            },
                            value: this.state.roleName
                        })
                    ),
                    _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false,
                        showHeader: false, style: { border: '0' } }),
                    _react2.default.createElement(_pagination2.default, { current: this.state.pageNum,
                        total: this.state.total,
                        onChange: function onChange(pageNum) {
                            return _this7.onPageNumChange(pageNum);
                        } })
                ),
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u6743\u9650\u5217\u8868', style: { float: "left", width: "80%" } },
                    _react2.default.createElement(
                        _tabs2.default,
                        { defaultActiveKey: 'webFunc', onChange: this.onChangeTab, tabPosition: this.state.tabPosition },
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u529F\u80FD\u83DC\u5355', key: 'webFunc' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: 'Excel\u529F\u80FD', key: 'func' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u6570\u636E\u67E5\u8BE2', key: 'select' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u51FD\u6570', key: 'function' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u591A\u7EF4\u5206\u6790', key: 'cube' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u4EEA\u8868\u76D8', key: 'dashboard' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u6A21\u677F', key: 'template' },
                            contents
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u6570\u636E\u6743\u9650', key: 'table' },
                            contents
                        )
                    )
                )
            );
        }
    }]);

    return RuleInfo;
}(_react2.default.Component);

exports.default = RuleInfo;

/***/ }),

/***/ "./src/service/RoleService.jsx":
/*!*************************************!*\
  !*** ./src/service/RoleService.jsx ***!
  \*************************************/
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

var Role = function () {
    function Role() {
        _classCallCheck(this, Role);
    }

    _createClass(Role, [{
        key: 'getRoleList',
        value: function getRoleList(listParam) {
            return _HttpService2.default.post('/reportServer/role/getRoleList', JSON.stringify(listParam));
        }
    }, {
        key: 'getRoleInfo',
        value: function getRoleInfo(roleId) {
            return _HttpService2.default.post('/reportServer/role/getRoleInfoById', roleId);
        }
    }, {
        key: 'saveRoleInfo',
        value: function saveRoleInfo(roleInfo) {
            if (roleInfo._id == 'null') {
                return _HttpService2.default.post('/reportServer/role/addRole', JSON.stringify(roleInfo));
            } else {
                return _HttpService2.default.post('/reportServer/role/updateRole', JSON.stringify(roleInfo));
            }
        }
    }, {
        key: 'delRole',
        value: function delRole(id) {
            return _HttpService2.default.post('/reportServer/role/deleteRole', id);
        }
    }, {
        key: 'getUserListByRoleId',
        value: function getUserListByRoleId(roleId) {
            return _HttpService2.default.post('/reportServer/role/getUserListByRoleId', roleId);
        }
    }, {
        key: 'saveUserId',
        value: function saveUserId(params) {
            return _HttpService2.default.post('/reportServer/role/saveOrupdateUserId', JSON.stringify(params));
        }
    }]);

    return Role;
}();

exports.default = Role;

/***/ }),

/***/ "./src/service/RuleService.jsx":
/*!*************************************!*\
  !*** ./src/service/RuleService.jsx ***!
  \*************************************/
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

var RuleService = function () {
    function RuleService() {
        _classCallCheck(this, RuleService);
    }

    _createClass(RuleService, [{
        key: 'getSelectClassTree',

        //  查询 select 
        value: function getSelectClassTree() {
            //  let url='/reportServer/select/getSelectClassTreeReact';
            var url = "reportServer/query/getQueryClassTree";
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getAuthListByConditions',
        value: function getAuthListByConditions(id, param) {
            var url = '/reportServer/auth/getAuthListByConditions';
            var params = [id, param];
            return _HttpService2.default.post(url, JSON.stringify(params));
        }

        //函数 function

    }, {
        key: 'getFunctionClass',
        value: function getFunctionClass() {
            var url = '/reportServer/function1/getFunctionClass';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getAuthByConditions',
        value: function getAuthByConditions(id, param) {
            var url = '/reportServer/auth/getAuthByConditions';
            var params = [id, param];
            return _HttpService2.default.post(url, JSON.stringify(params));
        }
    }, {
        key: 'getAuthByConditionsTable',
        value: function getAuthByConditionsTable(id, param) {
            var url = '/reportServer/auth/getAuthByConditionsTable';
            var params = [id, param];
            return _HttpService2.default.post(url, JSON.stringify(params));
        }

        //模板 

    }, {
        key: 'getDirectory',
        value: function getDirectory() {
            var url = '/reportServer/template/getDirectory';
            return _HttpService2.default.post(url, {});
        }

        //功能、网站菜单

    }, {
        key: 'getFunRuleList',
        value: function getFunRuleList(param) {
            var url = '/reportServer/auth/getFunRuleListReact';
            var params = { type: param };
            return _HttpService2.default.post(url, JSON.stringify(params));
        }
        //数据菜单

    }, {
        key: 'getAllAuthTypeList',
        value: function getAllAuthTypeList() {
            var url = '/reportServer/auth/getAllAuthTypeList';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getDataList',
        value: function getDataList() {
            var url = '/reportServer/auth/getDataList';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getDepartmentList',
        value: function getDepartmentList() {
            var url = '/reportServer/auth/getDepartmentList';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getAuthTypeListByType',
        value: function getAuthTypeListByType(param) {
            var url = '/reportServer/authType/getAuthTypeListByType';
            return _HttpService2.default.post(url, JSON.stringify({ authType: param }));
        }
        //保存select

    }, {
        key: 'saveAuthRules',
        value: function saveAuthRules(param) {
            var url = '/reportServer/auth/saveAuthRules';
            return _HttpService2.default.post(url, JSON.stringify(param));
        }
    }, {
        key: 'getAllCube',
        value: function getAllCube() {
            var url = '/reportServer/auth/getAllCube';
            return _HttpService2.default.post(url, {});
        }
    }, {
        key: 'getAllDashBoard',
        value: function getAllDashBoard() {
            var url = '/reportServer/auth/getAllDashBoard';
            return _HttpService2.default.post(url, {});
        }
    }]);

    return RuleService;
}();

exports.default = RuleService;

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
//# sourceMappingURL=RoleRouter~RuleRouter.js.map
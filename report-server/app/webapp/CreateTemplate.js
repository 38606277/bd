(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CreateTemplate"],{

/***/ "./src/page/query/CreateTemplate.jsx":
/*!*******************************************!*\
  !*** ./src/page/query/CreateTemplate.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@4.9.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@4.9.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@4.9.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@4.9.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.3.0@@ant-design/icons/es/index.js");

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.29.1@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/_moment@2.29.1@moment/locale/zh-cn.js");

var _reactCodemirror = __webpack_require__(/*! react-codemirror */ "./node_modules/_react-codemirror@1.0.0@react-codemirror/lib/Codemirror.js");

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

__webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/_codemirror@5.59.0@codemirror/lib/codemirror.css");

__webpack_require__(/*! codemirror/mode/sql/sql */ "./node_modules/_codemirror@5.59.0@codemirror/mode/sql/sql.js");

__webpack_require__(/*! codemirror/theme/ambiance.css */ "./node_modules/_codemirror@5.59.0@codemirror/theme/ambiance.css");

var _EditIn = __webpack_require__(/*! ./EditIn.jsx */ "./src/page/query/EditIn.jsx");

var _EditIn2 = _interopRequireDefault(_EditIn);

var _EditOut = __webpack_require__(/*! ./EditOut.jsx */ "./src/page/query/EditOut.jsx");

var _EditOut2 = _interopRequireDefault(_EditOut);

var _FunctionService = __webpack_require__(/*! ../../service/FunctionService.jsx */ "./src/service/FunctionService.jsx");

var _FunctionService2 = _interopRequireDefault(_FunctionService);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _DbService = __webpack_require__(/*! ../../service/DbService.jsx */ "./src/service/DbService.jsx");

var _DbService2 = _interopRequireDefault(_DbService);

__webpack_require__(/*! ./query.scss */ "./src/page/query/query.scss");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.0@prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _compatible.Form.Item;
var Option = _select2.default.Option;
var RadioGroup = _radio2.default.Group;
var TextArea = _input2.default.TextArea;
var TabPane = _tabs2.default.TabPane;
var ButtonGroup = _button2.default.ButtonGroup;
var Column = _table2.default.Column,
    ColumnGroup = _table2.default.ColumnGroup;

var CreateTemplate = function (_React$Component) {
    _inherits(CreateTemplate, _React$Component);

    function CreateTemplate(props) {
        _classCallCheck(this, CreateTemplate);

        var _this = _possibleConstructorReturn(this, (CreateTemplate.__proto__ || Object.getPrototypeOf(CreateTemplate)).call(this, props));

        _this.state = {};


        _this.state = {
            in: [{
                name: "项目编码",
                render: _react2.default.createElement(
                    'div',
                    null,
                    '\u9879\u76EE\u7F16\u7801',
                    _react2.default.createElement(_input2.default, { id: '0', value: 'aa', draggable: 'true', onDragStart: function onDragStart(event) {
                            return _this.drag(event);
                        }, style: { width: '100px' } })
                )
            }, {
                name: "项目类型",
                render: _react2.default.createElement(
                    'div',
                    { id: '1', draggable: 'true', onDragStart: function onDragStart(event) {
                            return _this.drag(event);
                        } },
                    '\u9879\u76EE\u7C7B\u578B:',
                    _react2.default.createElement(_select2.default, { value: 'bb', style: { width: '100px' } })
                )
            }, {
                name: "创建时间",
                render: _react2.default.createElement(
                    'div',
                    null,
                    '\u521B\u5EFA\u65F6\u95F4',
                    _react2.default.createElement(_input2.default, { id: '2', value: 'cc', draggable: 'true', onDragStart: function onDragStart(event) {
                            return _this.drag(event);
                        }, style: { width: '100px' } })
                )
            }, {
                name: "项目经理",
                render: _react2.default.createElement(
                    'div',
                    null,
                    '\u9879\u76EE\u7ECF\u7406',
                    _react2.default.createElement(_input2.default, { id: '3', value: 'dd', draggable: 'true', onDragStart: function onDragStart(event) {
                            return _this.drag(event);
                        }, style: { width: '100px' } })
                )
            }],
            inLayout: [{
                render: _react2.default.createElement('div', null)
            }, {
                render: _react2.default.createElement('div', null)
            }, {
                render: _react2.default.createElement('div', null)
            }, {
                render: _react2.default.createElement('div', null)
            }],
            project: "aaa",
            components: {
                c1: _react2.default.createElement(_input2.default, { id: '1', value: '1' }),
                C2: _react2.default.createElement(_input2.default, { id: '1', value: '2' }),
                C3: _react2.default.createElement(_input2.default, { id: '1', value: '3' })
            }
        };
        return _this;
    }

    _createClass(CreateTemplate, [{
        key: 'drop',
        value: function drop(ev, colIndex) {
            // alert(ev.dataTransfer.getData("param"));
            // ev.preventDefault();
            var param = ev.dataTransfer.getData("param");
            // let aInput = this.state.in[param];
            // let t = ev.target.id;
            // this.state.in[1] = aInput;
            var aIn = this.state.in[param];
            var inLayout = this.state.inLayout;
            inLayout[colIndex] = aIn;
            //com[key] = <Input value="aa" />;
            this.setState({ inLayout: inLayout });
        }
    }, {
        key: 'drag',
        value: function drag(ev) {
            ev.dataTransfer.setData("param", ev.target.id);
        }
    }, {
        key: 'onSaveButtonClick',
        value: function onSaveButtonClick() {
            alert(this.refs.in.innerHTML);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper', style: { background: '#ECECEC', padding: '0px' } },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u521B\u5EFA\u6A21\u677F', bodyStyle: { padding: "5px" }, headStyle: { height: '60px' },
                        extra: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _button2.default,
                                { style: { marginLeft: 8 }, onClick: function onClick() {
                                        return _this2.onSaveButtonClick();
                                    } },
                                '\u4FDD\u5B58 ',
                                _react2.default.createElement(_icons.SaveOutlined, null)
                            ),
                            _react2.default.createElement(
                                _button2.default,
                                { style: { marginLeft: 8 } },
                                '\u5173\u95ED ',
                                _react2.default.createElement(_icons.CloseOutlined, null)
                            )
                        ) },
                    _react2.default.createElement(
                        _row2.default,
                        { gutter: 0 },
                        _react2.default.createElement(
                            _col2.default,
                            { span: 6 },
                            _react2.default.createElement(
                                _card2.default,
                                null,
                                this.state.in.map(function (item, index) {
                                    return _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            null,
                                            item.render
                                        )
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { span: 18 },
                            _react2.default.createElement(
                                _card2.default,
                                { ref: 'in' },
                                _react2.default.createElement(
                                    _row2.default,
                                    null,

                                    // Object.keys(this.state.components).map((key) =>
                                    //     <Col style={{ border: "1px solid red", height: "80px", width: "400px" }}
                                    //         onDrop={(ev) => this.drop(ev, key)}
                                    //         onDragOver={(ev) => ev.preventDefault()}>
                                    //         {this.state.components[key]}
                                    //     </Col>)
                                    this.state.inLayout.map(function (item, index) {
                                        if (index) return _react2.default.createElement(
                                            _col2.default,
                                            { span: 12, style: { border: "1px dotted #785", height: "50px" },
                                                onDrop: function onDrop(ev) {
                                                    return _this2.drop(ev, index);
                                                },
                                                onDragOver: function onDragOver(ev) {
                                                    return ev.preventDefault();
                                                } },
                                            item.render
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CreateTemplate;
}(_react2.default.Component);

exports.default = CreateTemplate; //= Form.create({})(CreateTemplate);

/***/ })

}]);
//# sourceMappingURL=CreateTemplate.js.map
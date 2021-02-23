(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardCreator"],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/DashboardCreator.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/DashboardCreator.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col {\n  border: \"1px dotted #ccc\";\n  background-color: #eee;\n  padding: 5px; }\n\n.trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding-left: 60px;\n  cursor: pointer;\n  -webkit-transition: color .3s;\n  transition: color .3s; }\n\n.dropdown {\n  position: relative; }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\na.dropdown-toggle {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n  color: #666;\n  font-size: 16px;\n  padding-top: 5px;\n  display: block; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n/* SEARCHBAR */\n.search-bar {\n  background-color: transparent !important;\n  border: none !important;\n  color: #fff;\n  box-shadow: none !important;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 200;\n  height: 34px;\n  padding: 6px 12px;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  color: rgba(0, 0, 0, 0.6);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: none; }\n\n.btn-search {\n  display: none;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\ninput.search-bar::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\n/***************** 4.TOPBAR ****************/\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin: -15px; }\n\n.nav > li {\n  position: relative;\n  display: block;\n  list-style-type: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px; }\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee; }\n\n.nav > li > a {\n  padding: 0px 15px;\n  line-height: 50px;\n  color: #ffffff !important;\n  position: relative; }\n\n.nav > li > a i {\n  font-size: 20px; }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  list-style-type: none; }\n\n@media (min-width: 768px) {\n  .navbar-right {\n    margin-right: -15px; } }\n\n.dropdown-menu-lg {\n  width: 300px; }\n\n.dropdown-menu-lg .list-group {\n  margin-bottom: 0px; }\n\n.dropdown-menu-lg .list-group-item {\n  border: none;\n  padding: 6px 20px; }\n\n.dropdown-menu-lg .media-heading {\n  margin-bottom: 0px; }\n\n.dropdown-menu-lg .media-body p {\n  color: #828282; }\n\n.notifi-title {\n  color: #000;\n  font-size: 16px;\n  padding: 5px 0px 10px;\n  font-weight: 400;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n/* Firefox Bug: link not triggered */\n.dropdown-menu {\n  box-shadow: none;\n  padding: 4px 0;\n  -webkit-animation: dropdownOpen 0.3s ease-out;\n  animation: dropdownOpen 0.3s ease-out;\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n\n.dropdown-menu > li > a {\n  padding: 6px 20px; }\n\n.media {\n  margin-top: 15px; }\n\n.media:first-child {\n  margin-top: 0; }\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n\n.media-object.img-thumbnail {\n  max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.pull-left {\n  float: left !important; }\n\n/* 2.14 list group*/\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  background-color: #ddd;\n  border-color: #ddd;\n  color: #444;\n  z-index: 2; }\n\n.list-group-item,\n.list-group-item:first-child,\n.list-group-item:last-child {\n  border-radius: 0px; }\n\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\na.list-group-item {\n  color: #555; }\n\na.list-group-item:hover {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee; }\n", ""]);

// exports


/***/ }),

/***/ "./src/page/dashboard/DashboardCreator.jsx":
/*!*************************************************!*\
  !*** ./src/page/dashboard/DashboardCreator.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.3.0@@ant-design/icons/es/index.js");

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

__webpack_require__(/*! ./DashboardCreator.scss */ "./src/page/dashboard/DashboardCreator.scss");

var _Charts = __webpack_require__(/*! ../../components/Charts */ "./src/components/Charts/index.js");

var _index = __webpack_require__(/*! ../../components/Trend/index.jsx */ "./src/components/Trend/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _numeral = __webpack_require__(/*! numeral */ "./node_modules/_numeral@2.0.6@numeral/numeral.js");

var _numeral2 = _interopRequireDefault(_numeral);

var _Yuan = __webpack_require__(/*! ../../util/Yuan */ "./src/util/Yuan.js");

var _Yuan2 = _interopRequireDefault(_Yuan);

var _Analysis = __webpack_require__(/*! ./Analysis.less */ "./src/page/dashboard/Analysis.less");

var _Analysis2 = _interopRequireDefault(_Analysis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2018-01-26 16:48:16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   Rosen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-01-31 14:34:10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var _Table = Table,
    Column = _Table.Column,
    ColumnGroup = _Table.ColumnGroup;


var Option = _select2.default.Option;

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, 'Hello,' + this.props.toWhat);
        }
    }]);

    return Hello;
}(_react2.default.Component);

var salesTypeDataOnline = [{ "x": "家用电器", "y": 244 }, { "x": "食用酒水", "y": 321 }, { "x": "个护健康", "y": 311 }, { "x": "服饰箱包", "y": 41 }, { "x": "母婴产品", "y": 121 }, { "x": "其他", "y": 111 }];
var salesData = [{ "x": "1月", "y": 589 }, { "x": "2月", "y": 412 }, { "x": "3月", "y": 573 }, { "x": "4月", "y": 997 }, { "x": "5月", "y": 596 }, { "x": "6月", "y": 542 }, { "x": "7月", "y": 209 }, { "x": "8月", "y": 480 }, { "x": "9月", "y": 1140 }, { "x": "10月", "y": 507 }, { "x": "11月", "y": 873 }, { "x": "12月", "y": 710 }];

var DashboardCreator = function (_React$Component2) {
    _inherits(DashboardCreator, _React$Component2);

    function DashboardCreator(props) {
        _classCallCheck(this, DashboardCreator);

        var _this2 = _possibleConstructorReturn(this, (DashboardCreator.__proto__ || Object.getPrototypeOf(DashboardCreator)).call(this, props));

        _this2.state = {
            loading: false,
            list: [{ name: '指标', value: '' }, { name: '增长率', value: '' }, { name: '单位', value: '' }, { name: '发值', value: '' }, { name: '可奈', value: '' }, { name: '指标', value: '' }],
            selectedRows: [],
            selectedRowKeys: [],
            item2: _react2.default.createElement(
                'div',
                null,
                '2'
            ),
            item3: _react2.default.createElement(
                'div',
                null,
                '3'
            ),
            item4: _react2.default.createElement(
                'div',
                null,
                '4'
            ),
            item: _react2.default.createElement(
                'div',
                null,
                '1'
            ),
            item1: _react2.default.createElement(
                _Charts.ChartCard,
                {
                    bordered: false,
                    title: '\u603B\u9500\u552E\u989D',
                    action: _react2.default.createElement(
                        _tooltip2.default,
                        {
                            title: '\u603B\u9500\u552E\u989D' },
                        _react2.default.createElement(_icons.InfoCircleOutlined, null)
                    ),

                    total: function total() {
                        return _react2.default.createElement(
                            _Yuan2.default,
                            null,
                            '126560'
                        );
                    },
                    footer: _react2.default.createElement(_Charts.Field, {
                        label: "日销售额",
                        value: '\uFFE5' + (0, _numeral2.default)(12423).format('0,0')
                    }),
                    contentHeight: 46
                },
                _react2.default.createElement(
                    _index2.default,
                    { flag: 'up', style: { marginRight: 16 } },
                    "周同比",
                    _react2.default.createElement(
                        'span',
                        { className: _Analysis2.default.trendText },
                        '12%'
                    )
                ),
                _react2.default.createElement(
                    _index2.default,
                    { flag: 'down' },
                    "日同比",
                    _react2.default.createElement(
                        'span',
                        { className: _Analysis2.default.trendText },
                        '11%'
                    )
                )
            ),
            itemChartCard: _react2.default.createElement(
                _Charts.ChartCard,
                {
                    bordered: false,
                    title: '\u603B\u9500\u552E\u989D',
                    action: _react2.default.createElement(
                        _tooltip2.default,
                        {
                            title: '\u603B\u9500\u552E\u989D' },
                        _react2.default.createElement(_icons.InfoCircleOutlined, null)
                    ),

                    total: function total() {
                        return _react2.default.createElement(
                            _Yuan2.default,
                            null,
                            '126560'
                        );
                    },
                    footer: _react2.default.createElement(_Charts.Field, {
                        label: "日销售额",
                        value: '\uFFE5' + (0, _numeral2.default)(12423).format('0,0')
                    }),
                    contentHeight: 46
                },
                _react2.default.createElement(
                    _index2.default,
                    { flag: 'up', style: { marginRight: 16 } },
                    "周同比",
                    _react2.default.createElement(
                        'span',
                        { className: _Analysis2.default.trendText },
                        '12%'
                    )
                ),
                _react2.default.createElement(
                    _index2.default,
                    { flag: 'down' },
                    "日同比",
                    _react2.default.createElement(
                        'span',
                        { className: _Analysis2.default.trendText },
                        '11%'
                    )
                )
            ),
            itemZhuZhuang: _react2.default.createElement(
                _Charts.ChartCard,
                {
                    bordered: false,

                    title: "Payments",
                    action: _react2.default.createElement(
                        _tooltip2.default,
                        {
                            title: "Introduce"
                        },
                        _react2.default.createElement(_icons.InfoCircleOutlined, null)
                    ),
                    total: (0, _numeral2.default)(6560).format('0,0'),
                    footer: _react2.default.createElement(_Charts.Field, {
                        label: "Conversion Rate",
                        value: '60%'
                    }),
                    contentHeight: 46
                },
                _react2.default.createElement(_Charts.MiniBar, { data: salesTypeDataOnline })
            ),
            itemYuan: _react2.default.createElement(_Charts.Pie, {
                hasLegend: true,
                subTitle: "Sales",
                total: function total() {
                    return _react2.default.createElement(
                        _Yuan2.default,
                        null,
                        salesTypeDataOnline.reduce(function (pre, now) {
                            return now.y + pre;
                        }, 0)
                    );
                },
                data: salesTypeDataOnline,
                valueFormat: function valueFormat(value) {
                    return _react2.default.createElement(
                        _Yuan2.default,
                        null,
                        value
                    );
                },
                height: 248,
                lineWidth: 4
            }),
            itemXian: _react2.default.createElement(_Charts.Bar, {
                height: 295,
                title: "Sales Trend",
                data: salesData
            })
        };
        return _this2;
    }

    _createClass(DashboardCreator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // let a = React.createElement('Input', { toWhat: 'world' }, null);
            // this.setState({ item: a });

            var mod = __webpack_require__(/*! ./Model.js */ "./src/page/dashboard/Model.js");
            console.log(mod.ChartArr);
            // mod.incCounter();
        }
    }, {
        key: 'drop',
        value: function drop(ev, index) {
            //console.log(props);
            // alert(ev.dataTransfer.getData("param"));
            // ev.preventDefault();
            //let param = ev.dataTransfer.getData("param");
            // // let aInput = this.state.in[param];
            // // let t = ev.target.id;
            // // this.state.in[1] = aInput;
            // let aIn = this.state.in[param];
            // let inLayout = this.state.inLayout;
            // inLayout[colIndex] = aIn;
            // //com[key] = <Input value="aa" />;
            // this.setState({ inLayout: inLayout });

            if (index == 1) {
                this.setState({ item: this.state.itemChartCard, list: this.state.list }, function () {
                    var obj = {
                        id: 0,
                        name: '张三',
                        age: 12
                    };
                    var objToStr = JSON.stringify(this.state.item);
                });
            } else if (index == 2) {
                this.setState({ item2: this.state.itemXian });console.log(index);
            } else if (index == 3) {
                this.setState({ item3: this.state.itemZhuZhuang });console.log(index);
            } else if (index == 0) {
                this.setState({ item4: this.state.itemYuan });console.log(index);
            }
        }
    }, {
        key: 'drag',
        value: function drag(ev, num) {
            console.log(num);
            ev.dataTransfer.setData("param", ev.target.id);
            console.log(ev.dataTransfer.getData("param"));
        }
    }, {
        key: 'getProp',
        value: function getProp(index1) {
            console.log(this.refs.index1.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u521B\u5EFA\u4EEA\u8868\u677F', bodyStyle: { padding: "0px" } },
                    _react2.default.createElement(
                        _card2.default,
                        { bodyStyle: { padding: "5px" } },
                        _react2.default.createElement(
                            _button2.default,
                            { style: { marginRight: "10px" }, type: 'primary' },
                            '\u65B0\u589E\u884C'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { style: { marginRight: "10px" }, type: 'primary' },
                            '\u4FDD\u5B58'
                        ),
                        _react2.default.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '\u6307\u6807\u5361\u7247' },
                            _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.ProfileOutlined, null), draggable: 'true', onDragStart: function onDragStart(event) {
                                    return _this3.drag(event, 1);
                                } })
                        ),
                        _react2.default.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '\u67F1\u72B6\u56FE' },
                            _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.BarChartOutlined, null), draggable: 'true', onDragStart: function onDragStart(event) {
                                    return _this3.drag(event, 2);
                                } })
                        ),
                        _react2.default.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '\u62C6\u7EBF\u56FE' },
                            _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.LineChartOutlined, null), draggable: 'true', onDragStart: function onDragStart(event) {
                                    return _this3.drag(event, 3);
                                } })
                        ),
                        _react2.default.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '\u997C\u56FE' },
                            _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.PieChartOutlined, null), draggable: 'true', onDragStart: function onDragStart(event) {
                                    return _this3.drag(event, 4);
                                } })
                        ),
                        _react2.default.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '\u5730\u56FE' },
                            _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.GlobalOutlined, null) })
                        ),
                        _react2.default.createElement(
                            _select2.default,
                            { setValue: this.form, style: { minWidth: '300px' } },
                            _react2.default.createElement(
                                Option,
                                { kye: '1', value: '1' },
                                '\u4E00\u884C\u4E00\u5217'
                            ),
                            _react2.default.createElement(
                                Option,
                                { key: '2', value: '2' },
                                '\u4E00\u884C\u4E8C\u5217'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _card2.default,
                        null,
                        _react2.default.createElement(
                            _row2.default,
                            { gutter: 5 },
                            _react2.default.createElement(
                                _col2.default,
                                { span: 18, style: { border: 'border: "1px solid #785"' } },
                                _react2.default.createElement(
                                    _row2.default,
                                    { gutter: 16, style: { lineHeight: '200px' } },
                                    _react2.default.createElement(
                                        _col2.default,
                                        { onDrop: function onDrop(ev) {
                                                return _this3.drop(ev, 0);
                                            },
                                            onDragOver: function onDragOver(ev) {
                                                return ev.preventDefault();
                                            },
                                            span: 8, style: { backgroundColor: '#ecc' } },
                                        this.state.item4
                                    ),
                                    _react2.default.createElement(
                                        _col2.default,
                                        {
                                            onDrop: function onDrop(ev) {
                                                return _this3.drop(ev, 1);
                                            },
                                            onDragOver: function onDragOver(ev) {
                                                return ev.preventDefault();
                                            },

                                            span: 8, style: { backgroundColor: '#eee' } },
                                        this.state.item
                                    ),
                                    _react2.default.createElement(
                                        _col2.default,
                                        { onDrop: function onDrop(ev) {
                                                return _this3.drop(ev, 2);
                                            },
                                            onDragOver: function onDragOver(ev) {
                                                return ev.preventDefault();
                                            },
                                            span: 8, style: { backgroundColor: '#ebb' } },
                                        this.state.item2
                                    )
                                ),
                                _react2.default.createElement(
                                    _row2.default,
                                    { gutter: 16, style: { lineHeight: '200px' } },
                                    _react2.default.createElement(
                                        _col2.default,
                                        { onDrop: function onDrop(ev) {
                                                return _this3.drop(ev, 3);
                                            },
                                            onDragOver: function onDragOver(ev) {
                                                return ev.preventDefault();
                                            },
                                            span: 12, className: 'col', style: { backgroundColor: '#ecc', border: 'solid 1px' } },
                                        this.state.item3
                                    ),
                                    _react2.default.createElement(
                                        _col2.default,
                                        { onDrop: function onDrop(ev) {
                                                return _this3.drop(ev, 4);
                                            },
                                            onDragOver: function onDragOver(ev) {
                                                return ev.preventDefault();
                                            },
                                            span: 12, className: 'col' },
                                        'b'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 6, style: { border: 'border: "1px solid #785"' } },
                                _react2.default.createElement(
                                    Table,
                                    { dataSource: this.state.list, size: 'small', bordered: true, pagination: false },
                                    _react2.default.createElement(Column, {
                                        title: '\u5C5E\u6027',
                                        dataIndex: 'name',
                                        width: '100px'
                                    }),
                                    _react2.default.createElement(Column, {
                                        title: '\u503C',
                                        dataIndex: 'value',
                                        render: function render(text, record, index) {
                                            return _react2.default.createElement(_input2.default, null);
                                        }
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DashboardCreator;
}(_react2.default.Component);

exports.default = DashboardCreator;

/***/ }),

/***/ "./src/page/dashboard/DashboardCreator.scss":
/*!**************************************************!*\
  !*** ./src/page/dashboard/DashboardCreator.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./DashboardCreator.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/DashboardCreator.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.19.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.19.1@style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/page/dashboard/Model.js":
/*!*************************************!*\
  !*** ./src/page/dashboard/Model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ChartArr = [{ title: '', name: '', value: '' }, { title: '', name: '', value: '' }];
module.exports = {
	ChartArr: ChartArr
	// incCounter: incCounter,
};

/***/ })

}]);
//# sourceMappingURL=DashboardCreator.js.map
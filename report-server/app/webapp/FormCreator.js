(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FormCreator"],{

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

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/FormCreator.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/FormCreator.css ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/_css-loader@1.0.0@css-loader!antd/dist/antd.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_antd@4.9.1@antd/dist/antd.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/_css-loader@1.0.0@css-loader!react-grid-layout/css/styles.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_react-grid-layout@0.16.6@react-grid-layout/css/styles.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/_css-loader@1.0.0@css-loader!react-resizable/css/styles.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_react-resizable@1.11.0@react-resizable/css/styles.css"), "");

// module
exports.push([module.i, ".App {\n  text-align: center; }\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none; }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n.remove {\n  position: absolute;\n  right: 7px;\n  top: 1px;\n  cursor: pointer;\n  z-index: 999;\n  display: none; }\n\n.react-grid-item {\n  border: 1px solid #ececec;\n  padding: 10px; }\n\n.react-grid-item:hover .remove {\n  display: inline-block; }\n\n.react-resizable-handle {\n  visibility: hidden; }\n\n.react-grid-item:hover .react-resizable-handle {\n  visibility: visible; }\n", ""]);

// exports


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

/***/ "./src/page/dashboard/DragLayout.jsx":
/*!*******************************************!*\
  !*** ./src/page/dashboard/DragLayout.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _layout = __webpack_require__(/*! antd/es/layout */ "./node_modules/_antd@4.9.1@antd/es/layout/index.js");

var _layout2 = _interopRequireDefault(_layout);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/layout/style/css */ "./node_modules/_antd@4.9.1@antd/es/layout/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactGridLayout = __webpack_require__(/*! react-grid-layout */ "./node_modules/_react-grid-layout@0.16.6@react-grid-layout/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.20@lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _echartsForReact = __webpack_require__(/*! echarts-for-react */ "./node_modules/_echarts-for-react@2.0.16@echarts-for-react/lib/index.js");

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _chart = __webpack_require__(/*! ./chart */ "./src/page/dashboard/chart.js");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = _table2.default.Column,
    ColumnGroup = _table2.default.ColumnGroup;


var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);
var Header = _layout2.default.Header,
    Content = _layout2.default.Content;
var DragLayout = (_temp = _class = function (_PureComponent) {
  _inherits(DragLayout, _PureComponent);

  function DragLayout(props) {
    _classCallCheck(this, DragLayout);

    var _this = _possibleConstructorReturn(this, (DragLayout.__proto__ || Object.getPrototypeOf(DragLayout)).call(this, props));

    _this.generateDOM = function () {
      return _lodash2.default.map(_this.state.widgets, function (l, i) {
        var option = void 0;
        if (l.type === 'bar') {
          option = (0, _chart.getBarChart)();
        } else if (l.type === 'line') {
          option = (0, _chart.getLineChart)();
        } else if (l.type === 'pie') {
          option = (0, _chart.getPieChart)();
        }
        var component = _react2.default.createElement(_echartsForReact2.default, {
          option: option,
          notMerge: true,
          lazyUpdate: true,
          style: { width: '100%', height: '100%' }
        });
        return _react2.default.createElement(
          "div",
          { key: l.i, "data-grid": l },
          _react2.default.createElement(
            "span",
            { className: "remove", onClick: _this.onRemoveItem.bind(_this, i) },
            "x"
          ),
          component
        );
      });
    };

    _this.state = {
      layouts: _this.getFromLS("layouts") || {},
      widgets: []
    };
    return _this;
  }

  _createClass(DragLayout, [{
    key: "getFromLS",
    value: function getFromLS(key) {
      var ls = {};
      if (global.localStorage) {
        try {
          ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
        } catch (e) {
          /*Ignore*/
        }
      }
      return ls[key];
    }
  }, {
    key: "saveToLS",
    value: function saveToLS(key, value) {
      if (global.localStorage) {
        global.localStorage.setItem("rgl-8", JSON.stringify(_defineProperty({}, key, value)));
      }
    }
  }, {
    key: "addChart",
    value: function addChart(type) {
      var addItem = {
        x: this.state.widgets.length * 3 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 2,
        i: new Date().getTime().toString()
      };
      this.setState({
        widgets: this.state.widgets.concat(_extends({}, addItem, {
          type: type
        }))
      });
    }
  }, {
    key: "onRemoveItem",
    value: function onRemoveItem(i) {
      console.log(this.state.widgets);
      this.setState({
        widgets: this.state.widgets.filter(function (item, index) {
          return index != i;
        })
      });
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(layout, layouts) {
      this.saveToLS("layouts", layouts);
      this.setState({ layouts: layouts });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _card2.default,
          { title: "\u521B\u5EFA\u4EEA\u8868\u677F", bodyStyle: { padding: "0px" } },
          _react2.default.createElement(
            _card2.default,
            { bodyStyle: { padding: "5px" } },
            _react2.default.createElement(
              _button2.default,
              { style: { marginRight: "10px" }, type: "primary" },
              "\u65B0\u589E\u884C"
            ),
            _react2.default.createElement(
              _button2.default,
              { style: { marginRight: "10px" }, type: "primary" },
              "\u4FDD\u5B58"
            ),
            _react2.default.createElement(
              _tooltip2.default,
              { placement: "top", title: "\u6307\u6807\u5361\u7247" },
              _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.ProfileOutlined, null), onClick: this.addChart.bind(this, 'line') })
            ),
            _react2.default.createElement(
              _tooltip2.default,
              { placement: "top", title: "\u67F1\u72B6\u56FE" },
              _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.BarChartOutlined, null), onClick: this.addChart.bind(this, 'bar') })
            ),
            _react2.default.createElement(
              _tooltip2.default,
              { placement: "top", title: "\u62C6\u7EBF\u56FE" },
              _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.LineChartOutlined, null), onClick: this.addChart.bind(this, 'line') })
            ),
            _react2.default.createElement(
              _tooltip2.default,
              { placement: "top", title: "\u997C\u56FE" },
              _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.PieChartOutlined, null), onClick: this.addChart.bind(this, 'pie') })
            ),
            _react2.default.createElement(
              _tooltip2.default,
              { placement: "top", title: "\u5730\u56FE" },
              _react2.default.createElement(_button2.default, { icon: _react2.default.createElement(_icons.GlobalOutlined, null) })
            ),
            _react2.default.createElement(
              _select2.default,
              { setValue: this.form, style: { minWidth: '300px' } },
              _react2.default.createElement(
                Option,
                { kye: "1", value: "1" },
                "\u4E00\u884C\u4E00\u5217"
              ),
              _react2.default.createElement(
                Option,
                { key: "2", value: "2" },
                "\u4E00\u884C\u4E8C\u5217"
              )
            )
          ),
          _react2.default.createElement(
            _card2.default,
            null,
            _react2.default.createElement(
              "div",
              { style: { background: '#fff', padding: 20, minHeight: 800 } },
              _react2.default.createElement(
                ResponsiveReactGridLayout,
                _extends({
                  className: "layout"
                }, this.props, {
                  layouts: this.state.layouts,
                  onLayoutChange: function onLayoutChange(layout, layouts) {
                    return _this2.onLayoutChange(layout, layouts);
                  }
                }),
                this.generateDOM()
              )
            )
          )
        )
      );
    }
  }]);

  return DragLayout;
}(_react.PureComponent), _class.defaultProps = {
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 100
}, _temp);
exports.default = DragLayout;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/_webpack@4.27.1@webpack/buildin/global.js */ "./node_modules/_webpack@4.27.1@webpack/buildin/global.js")))

/***/ }),

/***/ "./src/page/dashboard/FormCreator.css":
/*!********************************************!*\
  !*** ./src/page/dashboard/FormCreator.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./FormCreator.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/dashboard/FormCreator.css");
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

/***/ "./src/page/dashboard/FormCreator.jsx":
/*!********************************************!*\
  !*** ./src/page/dashboard/FormCreator.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./FormCreator.css */ "./src/page/dashboard/FormCreator.css");

var _DragLayout = __webpack_require__(/*! ./DragLayout.jsx */ "./src/page/dashboard/DragLayout.jsx");

var _DragLayout2 = _interopRequireDefault(_DragLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormCreator = function (_React$Component) {
  _inherits(FormCreator, _React$Component);

  function FormCreator(props) {
    _classCallCheck(this, FormCreator);

    return _possibleConstructorReturn(this, (FormCreator.__proto__ || Object.getPrototypeOf(FormCreator)).call(this, props));
  }

  _createClass(FormCreator, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_DragLayout2.default, null);
    }
  }]);

  return FormCreator;
}(_react2.default.Component);

exports.default = FormCreator;

/***/ }),

/***/ "./src/page/dashboard/chart.js":
/*!*************************************!*\
  !*** ./src/page/dashboard/chart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBarChart = getBarChart;
exports.getLineChart = getLineChart;
exports.getPieChart = getPieChart;
function getBarChart() {
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['2014', '2015', '2016', '2017', '2018', '2019'],
      axisLine: {
        lineStyle: {
          color: '#8FA3B7' //y轴颜色
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#6D6D6D'
        }
      },
      axisTick: { show: false }
    }],
    yAxis: [{
      type: 'value',
      splitLine: { show: false },
      //max: 700,
      splitNumber: 3,
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: '#8FA3B7' //y轴颜色
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#6D6D6D'
        }
      }
    }],
    series: [{
      name: 'a',
      type: 'bar',
      barWidth: '40%',
      itemStyle: {
        normal: {
          color: '#FAD610'
        }
      },
      stack: '信息',
      data: [320, 132, 101, 134, 90, 30]
    }, {
      name: 'b',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#27ECCE'
        }
      },
      stack: '信息',
      data: [220, 182, 191, 234, 290, 230]
    }, {
      name: 'c',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#4DB3F5'
        }
      },
      stack: '信息',
      data: [150, 132, 201, 154, 90, 130]
    }]
  };
  return option;
}

function getLineChart() {
  //option
  var option = {
    color: ['#D53A35'],
    tooltip: {
      trigger: 'axis'
      //formatter: "{b} <br> 合格率: {c}%"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      name: '',
      boundaryGap: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#525252'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#525252'
      },
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    },
    yAxis: {
      type: 'value',
      name: '',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#525252'
      },
      splitLine: {
        lineStyle: {
          type: 'dotted',
          color: '#AAA' //F3F3F3
        }
      }
    },
    series: [{
      name: 'a',
      type: 'line',
      symbol: 'circle',
      data: [100, 120, 132, 101, 134, 90, 230, 210, 80, 20, 90, 210, 200, 100, 120, 132, 101, 134, 90, 230, 210, 80, 20, 90]
    }]
  };
  return option;
}

function getPieChart() {
  //option
  var option = {
    color: ['#3AA1FF', '#36CBCB', '#4ECB73', '#FBD338'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    series: [{
      name: '消费能力',
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['50%', '55%'],
      avoidLabelOverlap: true,
      itemStyle: {
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      },
      label: {
        normal: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        name: 'a',
        value: '20'
      }, {
        name: 'b',
        value: '40'
      }, {
        name: 'c',
        value: '10'
      }, {
        name: 'd',
        value: '10'
      }]
    }]
  };
  return option;
}

/***/ })

}]);
//# sourceMappingURL=FormCreator.js.map
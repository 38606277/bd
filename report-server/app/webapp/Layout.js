(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Layout"],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/main/Layout.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/main/Layout.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*----------------------------------------------\r\n    COMMON  STYLES    \r\n------------------------------------------------*/\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  background: #f3f3f3; }\n\n#wrapper {\n  width: 100%; }\n\n.top-navbar {\n  position: absolute;\n  width: 100%;\n  z-index: 300;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);\n  margin: 0px;\n  background: #2f96e2;\n  border-bottom: none; }\n\n.top-navbar img {\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle; }\n\n.navbar-side {\n  z-index: 1;\n  position: absolute;\n  top: 50px;\n  bottom: 0;\n  background: #ececec;\n  border: 1px solid #e8e8e8; }\n\n.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {\n  font-size: 15px !important; }\n\n.ant-menu-inline > .ant-menu-item {\n  font-size: 15px !important;\n  margin: 0px !important;\n  padding-top: 4px !important;\n  font-family: 微软雅黑 Regular; }\n\n#page-wrapperNew {\n  margin-left: 270px;\n  position: relative;\n  top: 55px; }\n\n/*----------------------------------------------\r\n DASHBOARD STYLES    \r\n------------------------------------------------*/\n.page-header {\n  padding-bottom: 9px;\n  margin: 10px 0 20px;\n  border-bottom: 1px solid transparent; }\n\n/*----------------------------------------------\r\n  MENU STYLES    \r\n------------------------------------------------*/\n.user-image {\n  margin: 25px auto;\n  border-radius: 10px;\n  max-height: 170px;\n  max-width: 170px; }\n\n.trigger {\n  font-size: 18px;\n  padding-left: 60px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  background: transparent;\n  color: #fff; }\n\n.dropdown {\n  position: relative; }\n\n@media (min-width: 561px) {\n  .navbar-right {\n    margin-right: -15px; }\n  .logodiv {\n    display: inline; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n#divtitle > div {\n  padding: 0 17px !important; }\n\n@media screen and (max-width: 561px) {\n  .top-navbar .navbar-brand {\n    width: 100%; }\n  .trigger {\n    padding-left: 20px;\n    padding-right: 36px; }\n  .logodiv {\n    display: none; }\n  .navbar-side {\n    z-index: 1;\n    top: 50px; }\n  #page-wrapperNew {\n    margin: 0;\n    top: 50px; } }\n\na.dropdown-toggle {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n  color: #666;\n  font-size: 16px;\n  padding-top: 5px;\n  display: block; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n/* SEARCHBAR */\n.search-bar {\n  background-color: transparent !important;\n  border: none !important;\n  color: #fff;\n  box-shadow: none !important;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 200;\n  height: 34px;\n  padding: 6px 12px;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: rgba(0, 0, 0, 0.6);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: none; }\n\n.btn-search {\n  display: none;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\ninput.search-bar::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\ninput.search-bar:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n\n/***************** 4.TOPBAR ****************/\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin: -15px; }\n\n.nav > li {\n  position: relative;\n  display: block;\n  list-style-type: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px; }\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee; }\n\n.nav > li > a {\n  padding: 0px 15px;\n  line-height: 50px;\n  color: #ffffff !important;\n  position: relative; }\n\n.nav > li > a i {\n  font-size: 20px; }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  list-style-type: none; }\n\n.logodiv {\n  margin-left: 15px;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 600; }\n\n.dropdown-menu-lg {\n  width: 300px; }\n\n.dropdown-menu-lg .list-group {\n  margin-bottom: 0px; }\n\n.dropdown-menu-lg .list-group-item {\n  border: none;\n  padding: 6px 20px; }\n\n.dropdown-menu-lg .media-heading {\n  margin-bottom: 0px; }\n\n.dropdown-menu-lg .media-body p {\n  color: #828282; }\n\n.notifi-title {\n  color: #000;\n  font-size: 16px;\n  padding: 5px 0px 10px;\n  font-weight: 400;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n/* Firefox Bug: link not triggered */\n.dropdown-menu {\n  box-shadow: none;\n  padding: 4px 0;\n  -webkit-animation: dropdownOpen 0.3s ease-out;\n  animation: dropdownOpen 0.3s ease-out;\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n\n.dropdown-menu > li > a {\n  padding: 6px 20px; }\n\n.media {\n  margin-top: 15px; }\n\n.media:first-child {\n  margin-top: 0; }\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n\n.media-object.img-thumbnail {\n  max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.pull-left {\n  float: left !important; }\n\n/* 2.14 list group*/\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  background-color: #ddd;\n  border-color: #ddd;\n  color: #444;\n  z-index: 2; }\n\n.list-group-item,\n.list-group-item:first-child,\n.list-group-item:last-child {\n  border-radius: 0px; }\n\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\na.list-group-item {\n  color: #555; }\n\na.list-group-item:hover {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee; }\n\n.rcw-conversation-container > .rcw-header {\n  padding: 0 0 1px !important; }\n\n.rcw-conversation-container > .rcw-header > .rcw-title {\n  padding: 0 0 1px; }\n\n.rcw-client,\n.rcw-response {\n  padding: 0 5px !important; }\n", ""]);

// exports


/***/ }),

/***/ "./src/page/main/Layout.jsx":
/*!**********************************!*\
  !*** ./src/page/main/Layout.jsx ***!
  \**********************************/
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

var _reactLoadable = __webpack_require__(/*! react-loadable */ "./node_modules/_react-loadable@5.5.0@react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _loading = __webpack_require__(/*! ../../util/loading.jsx */ "./src/util/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

__webpack_require__(/*! ./Layout.scss */ "./src/page/main/Layout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import  Layout  from 'antd/lib/layout';
// import 'antd/lib/layout/style/css';        // 加载 CSS


var SiderBar = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | Topbar */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(16), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e(19), __webpack_require__.e("vendors~Topbar"), __webpack_require__.e("Topbar")]).then(__webpack_require__.t.bind(null, /*! ./Sidebar.jsx */ "./src/page/main/Sidebar.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var TopBar = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | Topbar */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(16), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e(19), __webpack_require__.e("vendors~Topbar"), __webpack_require__.e("Topbar")]).then(__webpack_require__.t.bind(null, /*! ./Topbar.jsx */ "./src/page/main/Topbar.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var MainLoyout = function (_React$Component) {
    _inherits(MainLoyout, _React$Component);

    function MainLoyout(props) {
        _classCallCheck(this, MainLoyout);

        var _this = _possibleConstructorReturn(this, (MainLoyout.__proto__ || Object.getPrototypeOf(MainLoyout)).call(this, props));

        _this.onChildChanged = function (newState) {
            _this.setState({
                collapsed: newState,
                windthleft: newState == true ? '60px' : '220px'
            });
        };

        _this.state = {
            collapsed: false,
            windthleft: '220px'
        };
        return _this;
    }

    _createClass(MainLoyout, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { id: 'wrapper' },
                _react2.default.createElement(TopBar, { callbackParent: this.onChildChanged }),
                _react2.default.createElement(SiderBar, { collapsed: this.state.collapsed }),
                _react2.default.createElement(
                    'div',
                    { id: 'page-wrapperNew', style: { marginLeft: this.state.windthleft } },
                    ' ',
                    this.props.children
                )
            )
            // <Layout style={{ minHeight: '100vh' }}>
            //     <Layout.Header style={{ background: '#4b9adf', color: '#FFFF', padding: 0, height: "50px", lineHeight: "50px" }} >

            //         <TopBar callbackParent={this.onChildChanged}/>
            //     </Layout.Header>

            //     <Layout>
            //         <SiderBar collapsed={this.state.collapsed}/>
            //         <Layout.Content>
            //             {/* <Card bodyStyle={{ padding: "10px", marginLeft: 2, background: '#ececec', minHeight: 900 }}> */}
            //                 {this.props.children}
            //             {/* </Card> */}
            //         </Layout.Content>
            //     </Layout>
            // </Layout>
            ;
        }
    }]);

    return MainLoyout;
}(_react2.default.Component);

exports.default = MainLoyout;

/***/ }),

/***/ "./src/page/main/Layout.scss":
/*!***********************************!*\
  !*** ./src/page/main/Layout.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./Layout.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/main/Layout.scss");
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

/***/ })

}]);
//# sourceMappingURL=Layout.js.map
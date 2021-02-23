(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataAnalysisRouter"],{

/***/ "./src/page/dataAnalysis/dataAnalysisList.jsx":
/*!****************************************************!*\
  !*** ./src/page/dataAnalysis/dataAnalysisList.jsx ***!
  \****************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dataAnalysisList = function (_React$Component) {
    _inherits(dataAnalysisList, _React$Component);

    function dataAnalysisList(props) {
        _classCallCheck(this, dataAnalysisList);

        return _possibleConstructorReturn(this, (dataAnalysisList.__proto__ || Object.getPrototypeOf(dataAnalysisList)).call(this, props));
    }

    _createClass(dataAnalysisList, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { id: "page-wrapper" },
                _react2.default.createElement("iframe", { style: { border: 0, width: "100%", height: 630 }, src: "http://192.168.206.49:9601/BigDataControlCenter/hAdmin/businessView/intelligentanalysis/Algorithm4Mllib.html" })
            );
        }
    }]);

    return dataAnalysisList;
}(_react2.default.Component);

exports.default = dataAnalysisList;

/***/ }),

/***/ "./src/page/dataAnalysis/dataAnalysisRouter.jsx":
/*!******************************************************!*\
  !*** ./src/page/dataAnalysis/dataAnalysisRouter.jsx ***!
  \******************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _dataAnalysisList = __webpack_require__(/*! ./dataAnalysisList.jsx */ "./src/page/dataAnalysis/dataAnalysisList.jsx");

var _dataAnalysisList2 = _interopRequireDefault(_dataAnalysisList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 页面


var dataAnalysisRouter = function (_React$Component) {
    _inherits(dataAnalysisRouter, _React$Component);

    function dataAnalysisRouter() {
        _classCallCheck(this, dataAnalysisRouter);

        return _possibleConstructorReturn(this, (dataAnalysisRouter.__proto__ || Object.getPrototypeOf(dataAnalysisRouter)).apply(this, arguments));
    }

    _createClass(dataAnalysisRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dataAnalysis/dataAnalysisList', component: _dataAnalysisList2.default })
            );
        }
    }]);

    return dataAnalysisRouter;
}(_react2.default.Component);

exports.default = dataAnalysisRouter;

/***/ })

}]);
//# sourceMappingURL=dataAnalysisRouter.js.map
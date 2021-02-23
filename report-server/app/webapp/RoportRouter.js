(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RoportRouter"],{

/***/ "./src/page/report/ReportRouter.jsx":
/*!******************************************!*\
  !*** ./src/page/report/ReportRouter.jsx ***!
  \******************************************/
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

var _reactLoadable = __webpack_require__(/*! react-loadable */ "./node_modules/_react-loadable@5.5.0@react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _loading = __webpack_require__(/*! ../../util/loading.jsx */ "./src/util/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 报表列表
var reportList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | reportList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(19), __webpack_require__.e("reportList")]).then(__webpack_require__.t.bind(null, /*! ./reportList.jsx */ "./src/page/report/reportList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

//创建报表 
// const reportCreate = Loadable({
//     loader: () => import(/* webpackChunkName: "reportCreate" */ './reportCreate.jsx'),
//     loading: loading,
//     delay: 3000
// });

//创建报表 
var Simple = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | Simple */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e("vendors~Simple"), __webpack_require__.e("Simple")]).then(__webpack_require__.t.bind(null, /*! ./Simple.jsx */ "./src/page/report/Simple.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var ReportRouter = function (_React$Component) {
    _inherits(ReportRouter, _React$Component);

    function ReportRouter() {
        _classCallCheck(this, ReportRouter);

        return _possibleConstructorReturn(this, (ReportRouter.__proto__ || Object.getPrototypeOf(ReportRouter)).apply(this, arguments));
    }

    _createClass(ReportRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/report/simple', component: Simple }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/report/reportList', component: reportList })
            );
        }
    }]);

    return ReportRouter;
}(_react2.default.Component);

exports.default = ReportRouter;

/***/ })

}]);
//# sourceMappingURL=RoportRouter.js.map
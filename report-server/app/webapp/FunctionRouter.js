(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FunctionRouter"],{

/***/ "./src/page/function/FunctionRouter.jsx":
/*!**********************************************!*\
  !*** ./src/page/function/FunctionRouter.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

// 页面
var FunctionClass = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(15), __webpack_require__.e(20), __webpack_require__.e(21), __webpack_require__.e(27)]).then(__webpack_require__.t.bind(null, /*! ./FunctionClass.jsx */ "./src/page/function/FunctionClass.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var functionList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | functionList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(11), __webpack_require__.e("vendors~functionList"), __webpack_require__.e("functionList")]).then(__webpack_require__.t.bind(null, /*! ./functionList.jsx */ "./src/page/function/functionList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var functionCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(23), __webpack_require__.e(21), __webpack_require__.e(26)]).then(__webpack_require__.t.bind(null, /*! ./functionCreator.jsx */ "./src/page/function/functionCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var FunctionRouter = function (_React$Component) {
    _inherits(FunctionRouter, _React$Component);

    function FunctionRouter() {
        _classCallCheck(this, FunctionRouter);

        return _possibleConstructorReturn(this, (FunctionRouter.__proto__ || Object.getPrototypeOf(FunctionRouter)).apply(this, arguments));
    }

    _createClass(FunctionRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/function/functionClass', component: FunctionRouter }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/function/functionCreator/:action/:id', component: functionCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/function/functionList', component: functionList }),
                _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/function/functionClass', to: '/function/functionClass' })
            );
        }
    }]);

    return FunctionRouter;
}(_react2.default.Component);

exports.default = FunctionRouter;

/***/ })

}]);
//# sourceMappingURL=FunctionRouter.js.map
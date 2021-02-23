(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DictRouter"],{

/***/ "./src/page/dict/DictRouter.jsx":
/*!**************************************!*\
  !*** ./src/page/dict/DictRouter.jsx ***!
  \**************************************/
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

// 页面


var DictList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | DictList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(11), __webpack_require__.e("vendors~DictList"), __webpack_require__.e("DictList")]).then(__webpack_require__.t.bind(null, /*! ./DictList.jsx */ "./src/page/dict/DictList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var DictCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | DictCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e("vendors~DictCreator"), __webpack_require__.e("DictCreator")]).then(__webpack_require__.t.bind(null, /*! ./DictCreator.jsx */ "./src/page/dict/DictCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var DictViewData = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | DictViewData */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("DictViewData")]).then(__webpack_require__.t.bind(null, /*! ./DictViewData.jsx */ "./src/page/dict/DictViewData.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var DictValueList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | DictValueList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(15), __webpack_require__.e("DictValueList")]).then(__webpack_require__.t.bind(null, /*! ./DictValueList.jsx */ "./src/page/dict/DictValueList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var DictValueInfo = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | DictValueInfo */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("DictValueInfo")]).then(__webpack_require__.t.bind(null, /*! ./DictValueInfo.jsx */ "./src/page/dict/DictValueInfo.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var DictRouter = function (_React$Component) {
    _inherits(DictRouter, _React$Component);

    function DictRouter() {
        _classCallCheck(this, DictRouter);

        return _possibleConstructorReturn(this, (DictRouter.__proto__ || Object.getPrototypeOf(DictRouter)).apply(this, arguments));
    }

    _createClass(DictRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dict/DictList', component: DictList }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dict/DictCreator/:action/:id', component: DictCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dict/DictViewData/:id', component: DictViewData }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dict/DictValueList/:dictId', component: DictValueList }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dict/DictValueInfo/:dictId/:value_code', component: DictValueInfo }),
                _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/dict', to: '/dict/DictList' })
            );
        }
    }]);

    return DictRouter;
}(_react2.default.Component);

exports.default = DictRouter;

/***/ })

}]);
//# sourceMappingURL=DictRouter.js.map
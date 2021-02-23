(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["QueryRouter"],{

/***/ "./src/page/query/QueryRouter.jsx":
/*!****************************************!*\
  !*** ./src/page/query/QueryRouter.jsx ***!
  \****************************************/
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

var ExecQuery = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | ExecQuery */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e("vendors~ExecQuery~UserRouter~dashboardRouter"), __webpack_require__.e("vendors~ExecQuery"), __webpack_require__.e("ExecQuery~dashboardRouter"), __webpack_require__.e("ExecQuery")]).then(__webpack_require__.t.bind(null, /*! ./ExecQuery.jsx */ "./src/page/query/ExecQuery.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var QueryList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | QueryList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(19), __webpack_require__.e("QueryList")]).then(__webpack_require__.t.bind(null, /*! ./QueryList.jsx */ "./src/page/query/QueryList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var HttpCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | HttpCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e("CreateTemplate~HttpCreator~ProcedureCreator~SqlCreator~TableCreator"), __webpack_require__.e("HttpCreator")]).then(__webpack_require__.t.bind(null, /*! ./HttpCreator.jsx */ "./src/page/query/HttpCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var SqlCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | SqlCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e("vendors~SqlCreator"), __webpack_require__.e("CreateTemplate~HttpCreator~ProcedureCreator~SqlCreator~TableCreator"), __webpack_require__.e("SqlCreator")]).then(__webpack_require__.t.bind(null, /*! ./SqlCreator.jsx */ "./src/page/query/SqlCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var ProcedureCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | ProcedureCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e("CreateTemplate~HttpCreator~ProcedureCreator~SqlCreator~TableCreator"), __webpack_require__.e("ProcedureCreator")]).then(__webpack_require__.t.bind(null, /*! ./ProcedureCreator.jsx */ "./src/page/query/ProcedureCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var TableCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | TableCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e("vendors~HttpCreator~ProcedureCreator~SqlCreator~TableCreator~TaskRouter~Topbar"), __webpack_require__.e("CreateTemplate~HttpCreator~ProcedureCreator~SqlCreator~TableCreator"), __webpack_require__.e("TableCreator")]).then(__webpack_require__.t.bind(null, /*! ./TableCreator.jsx */ "./src/page/query/TableCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var QueryClass = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | QueryClass */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(15), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(16), __webpack_require__.e("QueryClass")]).then(__webpack_require__.t.bind(null, /*! ./QueryClass.jsx */ "./src/page/query/QueryClass.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var CreateTemplate = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | CreateTemplate */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("vendors~CreateTemplate~CubeRouter~ExecQuery~HttpCreator~ProcedureCreator~QueryClass~SqlCreator~Table~c2163455"), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e("CreateTemplate~HttpCreator~ProcedureCreator~SqlCreator~TableCreator"), __webpack_require__.e("CreateTemplate")]).then(__webpack_require__.t.bind(null, /*! ./CreateTemplate.jsx */ "./src/page/query/CreateTemplate.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var QueryData = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | QueryData */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("QueryData")]).then(__webpack_require__.t.bind(null, /*! ./QueryData.jsx */ "./src/page/query/QueryData.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var WebTemplate = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | WebTemplate */[__webpack_require__.e(3), __webpack_require__.e("WebTemplate")]).then(__webpack_require__.t.bind(null, /*! ./WebTemplate.jsx */ "./src/page/query/WebTemplate.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
var NlpCreator = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | NlpCreator */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e("NlpCreator")]).then(__webpack_require__.t.bind(null, /*! ./NlpCreator.jsx */ "./src/page/query/NlpCreator.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});

var NlpList = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.all(/*! import() | NlpList */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(15), __webpack_require__.e("NlpList")]).then(__webpack_require__.t.bind(null, /*! ./NlpList.jsx */ "./src/page/query/NlpList.jsx", 7));
    },
    loading: _loading2.default,
    delay: 3000
});
// const Indexs = Loadable({
//     loader: () => import(/* webpackChunkName: "DictList" */ './Indexs.jsx'),
//     loading: loading,
//     delay:3000
// });

var QueryRouter = function (_React$Component) {
    _inherits(QueryRouter, _React$Component);

    function QueryRouter() {
        _classCallCheck(this, QueryRouter);

        return _possibleConstructorReturn(this, (QueryRouter.__proto__ || Object.getPrototypeOf(QueryRouter)).apply(this, arguments));
    }

    _createClass(QueryRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/ExecQuery/:paramv/:paramv2/:paramv3/:paramv4', component: ExecQuery }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/QueryList', component: QueryList }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/QueryClass', component: QueryClass }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/CreateTemplate', component: CreateTemplate }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/QueryData', component: QueryData }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/SqlCreator/:action/:id', component: SqlCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/ProcedureCreator/:action/:id', component: ProcedureCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/HttpCreator/:action/:id', component: HttpCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/TableCreator/:action/:id', component: TableCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/web/:path', component: WebTemplate }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/nlpCreator/:tid', component: NlpCreator }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/query/NlpList', component: NlpList }),
                _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/query', to: '/query/ExecQuery' })
            );
        }
    }]);

    return QueryRouter;
}(_react2.default.Component);

exports.default = QueryRouter;

/***/ })

}]);
//# sourceMappingURL=QueryRouter.js.map
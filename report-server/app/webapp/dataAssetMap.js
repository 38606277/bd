(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataAssetMap"],{

/***/ "./src/page/dashboard/dataAssetMap.jsx":
/*!*********************************************!*\
  !*** ./src/page/dashboard/dataAssetMap.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@4.9.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@4.9.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@4.9.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@4.9.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@4.9.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@4.9.1@antd/es/tabs/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.3.0@@ant-design/icons/es/index.js");

var _Charts = __webpack_require__(/*! ../../components/Charts */ "./src/components/Charts/index.js");

var _index = __webpack_require__(/*! ../../components/Trend/index.jsx */ "./src/components/Trend/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _NumberInfo = __webpack_require__(/*! ../../components/NumberInfo */ "./src/components/NumberInfo/index.js");

var _NumberInfo2 = _interopRequireDefault(_NumberInfo);

var _dataAssetMap = __webpack_require__(/*! ./dataAssetMap2.jsx */ "./src/page/dashboard/dataAssetMap2.jsx");

var _dataAssetMap2 = _interopRequireDefault(_dataAssetMap);

var _numeral = __webpack_require__(/*! numeral */ "./node_modules/_numeral@2.0.6@numeral/numeral.js");

var _numeral2 = _interopRequireDefault(_numeral);

var _GridContent = __webpack_require__(/*! ../../components/PageHeaderWrapper/GridContent */ "./src/components/PageHeaderWrapper/GridContent.js");

var _GridContent2 = _interopRequireDefault(_GridContent);

var _Yuan = __webpack_require__(/*! ../../util/Yuan */ "./src/util/Yuan.js");

var _Yuan2 = _interopRequireDefault(_Yuan);

var _utils = __webpack_require__(/*! ../../util/utils */ "./src/util/utils.js");

var _Analysis = __webpack_require__(/*! ./Analysis.less */ "./src/page/dashboard/Analysis.less");

var _Analysis2 = _interopRequireDefault(_Analysis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;
var RangePicker = _datePicker2.default.RangePicker;


var rankingListData = [];
for (var i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: '\u5DE5\u4E13\u8DEF ' + i + ' \u53F7\u5E97',
    total: 323234
  });
}

var dataAssetMap = function (_React$Component) {
  _inherits(dataAssetMap, _React$Component);

  function dataAssetMap(props) {
    _classCallCheck(this, dataAssetMap);

    var _this = _possibleConstructorReturn(this, (dataAssetMap.__proto__ || Object.getPrototypeOf(dataAssetMap)).call(this, props));

    _this.state = {
      salesType: 'all',
      currentTabKey: '',
      rangePickerValue: (0, _utils.getTimeDistance)('year'),
      loading: true
    };

    _this.handleChangeSalesType = function (e) {
      _this.setState({
        salesType: e.target.value
      });
    };

    _this.handleTabChange = function (key) {
      _this.setState({
        currentTabKey: key
      });
    };

    _this.handleRangePickerChange = function (rangePickerValue) {};

    _this.selectDate = function (type) {};

    _this.rankingListData = [];
    for (var _i = 0; _i < 7; _i += 1) {
      _this.rankingListData.push({
        title: '1',
        total: 323234
      });
    }
    return _this;
  }

  _createClass(dataAssetMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}

    //   componentWillUnmount() {
    //     const { dispatch } = this.props;
    //     dispatch({
    //       type: 'chart/clear',
    //     });
    //     cancelAnimationFrame(this.reqRef);
    //     clearTimeout(this.timeoutId);
    //   }

  }, {
    key: 'isActive',
    value: function isActive(type) {
      var rangePickerValue = this.state.rangePickerValue;

      var value = (0, _utils.getTimeDistance)(type);
      if (!rangePickerValue[0] || !rangePickerValue[1]) {

        a;
        return '';
      }
      if (rangePickerValue[0].isSame(value[0], 'day') && rangePickerValue[1].isSame(value[1], 'day')) {
        return _Analysis2.default.currentDate;
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          rangePickerValue = _state.rangePickerValue,
          salesType = _state.salesType,
          stateLoading = _state.loading,
          currentTabKey = _state.currentTabKey;
      var _props = this.props,
          chart = _props.chart,
          propsLoading = _props.loading;


      var visitData = [{ "x": "2018-11-19", "y": 7 }, { "x": "2018-11-20", "y": 5 }, { "x": "2018-11-21", "y": 4 }, { "x": "2018-11-22", "y": 2 }, { "x": "2018-11-23", "y": 4 }, { "x": "2018-11-24", "y": 7 }, { "x": "2018-11-25", "y": 5 }, { "x": "2018-11-26", "y": 6 }, { "x": "2018-11-27", "y": 5 }, { "x": "2018-11-28", "y": 9 }, { "x": "2018-11-29", "y": 6 }, { "x": "2018-11-30", "y": 3 }, { "x": "2018-12-01", "y": 1 }, { "x": "2018-12-02", "y": 5 }, { "x": "2018-12-03", "y": 3 }, { "x": "2018-12-04", "y": 6 }, { "x": "2018-12-05", "y": 5 }];
      var visitData2 = [{ "x": "2018-11-19", "y": 1 }, { "x": "2018-11-20", "y": 6 }, { "x": "2018-11-21", "y": 4 }, { "x": "2018-11-22", "y": 8 }, { "x": "2018-11-23", "y": 3 }, { "x": "2018-11-24", "y": 7 }, { "x": "2018-11-25", "y": 2 }];
      var salesData = [{ "x": "1月", "y": 589 }, { "x": "2月", "y": 412 }, { "x": "3月", "y": 573 }, { "x": "4月", "y": 997 }, { "x": "5月", "y": 596 }, { "x": "6月", "y": 542 }, { "x": "7月", "y": 209 }, { "x": "8月", "y": 480 }, { "x": "9月", "y": 1140 }, { "x": "10月", "y": 507 }, { "x": "11月", "y": 873 }, { "x": "12月", "y": 710 }];
      var searchData = [{ "index": 1, "keyword": "人员基本信息", "count": 418, "range": 59, "status": 1 }, { "index": 2, "keyword": "上市公司财务报表", "count": 180, "range": 27, "status": 1 }, { "index": 3, "keyword": "公司收入", "count": 458, "range": 6, "status": 0 }, { "index": 4, "keyword": "资产基本信息", "count": 832, "range": 68, "status": 0 }, { "index": 5, "keyword": "项目基本信息", "count": 469, "range": 76, "status": 1 }, { "index": 6, "keyword": "搜索关键词-5", "count": 121, "range": 17, "status": 0 }, { "index": 7, "keyword": "搜索关键词-6", "count": 374, "range": 63, "status": 0 }, { "index": 8, "keyword": "搜索关键词-7", "count": 838, "range": 15, "status": 1 }, { "index": 9, "keyword": "搜索关键词-8", "count": 400, "range": 77, "status": 1 }, { "index": 10, "keyword": "搜索关键词-9", "count": 953, "range": 5, "status": 0 }, { "index": 11, "keyword": "搜索关键词-10", "count": 498, "range": 99, "status": 0 }, { "index": 12, "keyword": "搜索关键词-11", "count": 621, "range": 83, "status": 1 }, { "index": 13, "keyword": "搜索关键词-12", "count": 62, "range": 70, "status": 1 }, { "index": 14, "keyword": "搜索关键词-13", "count": 245, "range": 42, "status": 1 }, { "index": 15, "keyword": "搜索关键词-14", "count": 316, "range": 97, "status": 0 }, { "index": 16, "keyword": "搜索关键词-15", "count": 204, "range": 41, "status": 0 }, { "index": 17, "keyword": "搜索关键词-16", "count": 528, "range": 43, "status": 0 }, { "index": 18, "keyword": "搜索关键词-17", "count": 307, "range": 64, "status": 1 }, { "index": 19, "keyword": "搜索关键词-18", "count": 904, "range": 29, "status": 1 }, { "index": 20, "keyword": "搜索关键词-19", "count": 539, "range": 23, "status": 0 }, { "index": 21, "keyword": "搜索关键词-20", "count": 943, "range": 79, "status": 1 }, { "index": 22, "keyword": "搜索关键词-21", "count": 894, "range": 80, "status": 1 }, { "index": 23, "keyword": "搜索关键词-22", "count": 666, "range": 44, "status": 0 }, { "index": 24, "keyword": "搜索关键词-23", "count": 273, "range": 2, "status": 0 }, { "index": 25, "keyword": "搜索关键词-24", "count": 455, "range": 61, "status": 1 }, { "index": 26, "keyword": "搜索关键词-25", "count": 303, "range": 33, "status": 1 }, { "index": 27, "keyword": "搜索关键词-26", "count": 261, "range": 24, "status": 0 }, { "index": 28, "keyword": "搜索关键词-27", "count": 207, "range": 57, "status": 1 }, { "index": 29, "keyword": "搜索关键词-28", "count": 406, "range": 45, "status": 1 }, { "index": 30, "keyword": "搜索关键词-29", "count": 746, "range": 85, "status": 0 }, { "index": 31, "keyword": "搜索关键词-30", "count": 290, "range": 86, "status": 0 }, { "index": 32, "keyword": "搜索关键词-31", "count": 168, "range": 97, "status": 0 }, { "index": 33, "keyword": "搜索关键词-32", "count": 802, "range": 21, "status": 1 }, { "index": 34, "keyword": "搜索关键词-33", "count": 195, "range": 14, "status": 0 }, { "index": 35, "keyword": "搜索关键词-34", "count": 122, "range": 66, "status": 1 }, { "index": 36, "keyword": "搜索关键词-35", "count": 556, "range": 27, "status": 0 }, { "index": 37, "keyword": "搜索关键词-36", "count": 314, "range": 96, "status": 0 }, { "index": 38, "keyword": "搜索关键词-37", "count": 387, "range": 48, "status": 1 }, { "index": 39, "keyword": "搜索关键词-38", "count": 525, "range": 93, "status": 0 }, { "index": 40, "keyword": "搜索关键词-39", "count": 722, "range": 66, "status": 1 }, { "index": 41, "keyword": "搜索关键词-40", "count": 851, "range": 67, "status": 1 }, { "index": 42, "keyword": "搜索关键词-41", "count": 495, "range": 95, "status": 1 }, { "index": 43, "keyword": "搜索关键词-42", "count": 167, "range": 3, "status": 0 }, { "index": 44, "keyword": "搜索关键词-43", "count": 797, "range": 97, "status": 1 }, { "index": 45, "keyword": "搜索关键词-44", "count": 410, "range": 79, "status": 1 }, { "index": 46, "keyword": "搜索关键词-45", "count": 367, "range": 12, "status": 0 }, { "index": 47, "keyword": "搜索关键词-46", "count": 247, "range": 14, "status": 0 }, { "index": 48, "keyword": "搜索关键词-47", "count": 838, "range": 52, "status": 0 }, { "index": 49, "keyword": "搜索关键词-48", "count": 597, "range": 24, "status": 0 }, { "index": 50, "keyword": "搜索关键词-49", "count": 582, "range": 36, "status": 1 }];
      var offlineData = [{ "name": "Stores 0", "cvr": 0.2 }, { "name": "Stores 1", "cvr": 0.7 }, { "name": "Stores 2", "cvr": 0.2 }, { "name": "Stores 3", "cvr": 0.1 }, { "name": "Stores 4", "cvr": 0.3 }, { "name": "Stores 5", "cvr": 0.2 }, { "name": "Stores 6", "cvr": 0.5 }, { "name": "Stores 7", "cvr": 0.8 }, { "name": "Stores 8", "cvr": 0.5 }, { "name": "Stores 9", "cvr": 0.5 }];
      var offlineChartData = [{ "x": 1542593740927, "y1": 25, "y2": 87 }, { "x": 1542595540927, "y1": 19, "y2": 18 }, { "x": 1542597340927, "y1": 100, "y2": 36 }, { "x": 1542599140927, "y1": 79, "y2": 39 }, { "x": 1542600940927, "y1": 57, "y2": 105 }, { "x": 1542602740927, "y1": 48, "y2": 40 }, { "x": 1542604540927, "y1": 60, "y2": 39 }, { "x": 1542606340927, "y1": 34, "y2": 18 }, { "x": 1542608140927, "y1": 45, "y2": 52 }, { "x": 1542609940927, "y1": 46, "y2": 39 }, { "x": 1542611740927, "y1": 38, "y2": 14 }, { "x": 1542613540927, "y1": 82, "y2": 105 }, { "x": 1542615340927, "y1": 97, "y2": 23 }, { "x": 1542617140927, "y1": 13, "y2": 52 }, { "x": 1542618940927, "y1": 100, "y2": 93 }, { "x": 1542620740927, "y1": 92, "y2": 45 }, { "x": 1542622540927, "y1": 37, "y2": 93 }, { "x": 1542624340927, "y1": 74, "y2": 17 }, { "x": 1542626140927, "y1": 40, "y2": 19 }, { "x": 1542627940927, "y1": 17, "y2": 107 }];
      var salesTypeData = [{ "x": "HBase", "y": 4544 }, { "x": "Hive", "y": 3321 }, { "x": "mysql", "y": 3113 }, { "x": "mogoodb", "y": 2341 }];
      var salesTypeDataOnline = [{ "x": "人力资源", "y": 244 }, { "x": "主数据", "y": 321 }, { "x": "三重一大", "y": 311 }, { "x": "外部统计数据", "y": 41 }, { "x": "上市公司财务数据", "y": 121 }, { "x": "其他", "y": 111 }];
      var salesTypeDataOffline = [{ "x": "服务器2", "y": 99 }, { "x": "服务器1", "y": 188 }, { "x": "服务器3", "y": 344 }, { "x": "服务器4", "y": 255 }, { "x": "其他", "y": 65 }];
      var radarData = [{ "name": "个人", "label": "引用", "value": 10 }, { "name": "个人", "label": "口碑", "value": 8 }, { "name": "个人", "label": "产量", "value": 4 }, { "name": "个人", "label": "贡献", "value": 5 }, { "name": "个人", "label": "热度", "value": 7 }, { "name": "团队", "label": "引用", "value": 3 }, { "name": "团队", "label": "口碑", "value": 9 }, { "name": "团队", "label": "产量", "value": 6 }, { "name": "团队", "label": "贡献", "value": 3 }, { "name": "团队", "label": "热度", "value": 1 }, { "name": "部门", "label": "引用", "value": 4 }, { "name": "部门", "label": "口碑", "value": 1 }, { "name": "部门", "label": "产量", "value": 6 }, { "name": "部门", "label": "贡献", "value": 5 }, { "name": "部门", "label": "热度", "value": 7 }];

      var loading = propsLoading || stateLoading;
      var salesExtra = _react2.default.createElement(
        'div',
        { className: _Analysis2.default.salesExtraWrap },
        _react2.default.createElement(
          'div',
          { className: _Analysis2.default.salesExtra },
          _react2.default.createElement(
            'a',
            { className: this.isActive('today'), onClick: function onClick() {
                return _this2.selectDate('today');
              } },
            "All Day"
          ),
          _react2.default.createElement(
            'a',
            { className: this.isActive('week'), onClick: function onClick() {
                return _this2.selectDate('week');
              } },
            "All Week"
          ),
          _react2.default.createElement(
            'a',
            { className: this.isActive('month'), onClick: function onClick() {
                return _this2.selectDate('month');
              } },
            "All Month"
          ),
          _react2.default.createElement(
            'a',
            { className: this.isActive('year'), onClick: function onClick() {
                return _this2.selectDate('year');
              } },
            "All Year"
          )
        ),
        _react2.default.createElement(RangePicker, {
          value: rangePickerValue,
          onChange: this.handleRangePickerChange,
          style: { width: 256 }
        })
      );
      var topColResponsiveProps = {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 6,
        style: { marginBottom: 24 }
      };
      var columns = [{
        title: "排名",
        dataIndex: 'index',
        key: 'index'
      }, {
        title: "数据表名称",
        dataIndex: 'keyword',
        key: 'keyword',
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            { href: '/' },
            text
          );
        }
      }, {
        title: "用户",
        dataIndex: 'count',
        key: 'count',
        sorter: function sorter(a, b) {
          return a.count - b.count;
        },
        className: _Analysis2.default.alignRight
      }, {
        title: "周排名",
        dataIndex: 'range',
        key: 'range',
        sorter: function sorter(a, b) {
          return a.range - b.range;
        },
        render: function render(text, record) {
          return _react2.default.createElement(
            _index2.default,
            { flag: record.status === 1 ? 'down' : 'up' },
            _react2.default.createElement(
              'span',
              { style: { marginRight: 4 } },
              text,
              '%'
            )
          );
        },
        align: 'right'
      }];
      var iconGroup = _react2.default.createElement('span', { className: _Analysis2.default.iconGroup });
      var salesPieData = void 0;
      if (salesType === 'all') {
        salesPieData = salesTypeData;
      } else {
        salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
      }
      var activeKey = currentTabKey || offlineData[0] && offlineData[0].name;
      var CustomTab = function CustomTab(_ref) {
        var data = _ref.data,
            currentKey = _ref.currentTabKey;
        return _react2.default.createElement(
          _row2.default,
          { gutter: 8, style: { width: 138, margin: '8px 0' } },
          _react2.default.createElement(
            _col2.default,
            { span: 12 },
            _react2.default.createElement(_NumberInfo2.default, {
              title: data.name,
              subTitle: "访问量增加",
              gap: 2,
              total: data.cvr * 100 + '%',
              theme: currentKey !== data.name && 'light'
            })
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 12, style: { paddingTop: 36 } },
            _react2.default.createElement(_Charts.Pie, {
              animate: false,
              color: currentKey !== data.name && '#BDE4FF',
              inner: 0.55,
              tooltip: false,
              margin: [0, 0, 0, 0],
              percent: data.cvr * 100,
              height: 64
            })
          )
        );
      };
      return _react2.default.createElement(
        _GridContent2.default,
        null,
        _react2.default.createElement(
          _row2.default,
          { gutter: 24 },
          _react2.default.createElement(
            _col2.default,
            topColResponsiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: '\u6570\u636E\u603B\u91CF',
                action: _react2.default.createElement(
                  _tooltip2.default,
                  {
                    title: '\u6570\u636E\u603B\u91CF' },
                  _react2.default.createElement(_icons.InfoCircleOutlined, null)
                ),

                total: _react2.default.createElement(
                  _reactRouterDom.Link,
                  { style: { color: 'rgba(0, 0, 0, 0.65)' }, to: '/dataAsset/dataAssetList' },
                  '28,846'
                ),
                footer: _react2.default.createElement(_Charts.Field, {
                  label: "日新增",
                  value: '\uFFE5' + (0, _numeral2.default)(323).format('0,0')
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
            )
          ),
          _react2.default.createElement(
            _col2.default,
            topColResponsiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: "数据源数量",
                action: _react2.default.createElement(
                  _tooltip2.default,
                  {
                    title: "introduce"
                  },
                  _react2.default.createElement(_icons.InfoCircleOutlined, null)
                ),
                total: _react2.default.createElement(
                  _reactRouterDom.Link,
                  { style: { color: 'rgba(0, 0, 0, 0.65)' }, to: '/dbs/dbsList' },
                  '18'
                ),
                footer: _react2.default.createElement(_Charts.Field, {
                  label: "日访问量",
                  value: (0, _numeral2.default)(1234).format('0,0')
                }),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniArea, { color: '#975FE4', data: visitData })
            )
          ),
          _react2.default.createElement(
            _col2.default,
            topColResponsiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,

                title: "访问量",
                action: _react2.default.createElement(
                  _tooltip2.default,
                  {
                    title: "Introduce"
                  },
                  _react2.default.createElement(_icons.InfoCircleOutlined, null)
                ),
                total: (0, _numeral2.default)(6560).format('0,0'),
                footer: _react2.default.createElement(_Charts.Field, {
                  label: "本周增加",
                  value: '60%'
                }),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniBar, { data: visitData })
            )
          ),
          _react2.default.createElement(
            _col2.default,
            topColResponsiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {

                bordered: false,
                title: "存储空间",
                action: _react2.default.createElement(
                  _tooltip2.default,
                  {
                    title: "introduce"
                  },
                  _react2.default.createElement(_icons.InfoCircleOutlined, null)
                ),
                total: '78%',
                footer: _react2.default.createElement(
                  'div',
                  { style: { whiteSpace: 'nowrap', overflow: 'hidden' } },
                  _react2.default.createElement(
                    _index2.default,
                    { flag: 'up', style: { marginRight: 16 } },
                    "已使用",
                    _react2.default.createElement(
                      'span',
                      { className: _Analysis2.default.trendText },
                      '830G'
                    )
                  ),
                  _react2.default.createElement(
                    _index2.default,
                    null,
                    "总空间",
                    _react2.default.createElement(
                      'span',
                      { className: _Analysis2.default.trendText },
                      '1000G'
                    )
                  )
                ),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniProgress, { percent: 78, strokeWidth: 8, target: 80, color: '#13C2C2' })
            )
          )
        ),
        _react2.default.createElement(
          _row2.default,
          { gutter: 24 },
          _react2.default.createElement(
            _col2.default,
            { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 },
            _react2.default.createElement(
              _card2.default,
              {

                bordered: false,
                title: "数据表访问排行"
                // extra={iconGroup}
                , style: { marginTop: 24 }
              },
              _react2.default.createElement(_table2.default, {
                rowKey: function rowKey(record) {
                  return record.index;
                },
                size: 'small',
                columns: columns,
                dataSource: searchData,
                pagination: {
                  style: { marginBottom: 0 },
                  pageSize: 5
                }
              })
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 },
            _react2.default.createElement(
              _card2.default,
              {
                className: _Analysis2.default.salesCard,
                bordered: false,
                title: "数据分布情况",
                bodyStyle: { padding: 24 },
                extra: _react2.default.createElement(
                  'div',
                  { className: _Analysis2.default.salesCardExtra },
                  iconGroup,
                  _react2.default.createElement(
                    'div',
                    { className: _Analysis2.default.salesTypeRadio },
                    _react2.default.createElement(
                      _radio2.default.Group,
                      { value: salesType, onChange: this.handleChangeSalesType },
                      _react2.default.createElement(
                        _radio2.default.Button,
                        { value: 'catalog' },
                        "数据目录"
                      ),
                      _react2.default.createElement(
                        _radio2.default.Button,
                        { value: 'source' },
                        "数据来源"
                      ),
                      _react2.default.createElement(
                        _radio2.default.Button,
                        { value: 'dbtype' },
                        "存储类型"
                      ),
                      _react2.default.createElement(
                        _radio2.default.Button,
                        { value: 'online' },
                        "数据源"
                      )
                    )
                  )
                ),
                style: { marginTop: 24, minHeight: 509 }
              },
              _react2.default.createElement(_Charts.Pie, {
                hasLegend: true,
                subTitle: "表",
                total: 15238,
                data: salesPieData,
                height: 248,
                lineWidth: 4
              })
            )
          )
        ),
        _react2.default.createElement(
          _card2.default,
          {
            className: _Analysis2.default.offlineCard,
            bordered: false,
            bodyStyle: { padding: '0 0 32px 0' },
            style: { marginTop: 32 }
          },
          _react2.default.createElement(
            _tabs2.default,
            { activeKey: activeKey, onChange: this.handleTabChange },
            offlineData.map(function (shop) {
              return _react2.default.createElement(
                TabPane,
                { tab: _react2.default.createElement(CustomTab, { data: shop, currentTabKey: activeKey }), key: shop.name },
                _react2.default.createElement(
                  'div',
                  { style: { padding: '0 24px' } },
                  _react2.default.createElement(_Charts.TimelineChart, {
                    height: 400,
                    data: offlineChartData,
                    titleMap: {
                      y1: 'traffic',
                      y2: 'payments'
                    }
                  })
                )
              );
            })
          )
        ),
        _react2.default.createElement(_dataAssetMap2.default, null)
      );
    }
  }]);

  return dataAssetMap;
}(_react2.default.Component);

exports.default = dataAssetMap;

/***/ }),

/***/ "./src/page/dashboard/dataAssetMap2.jsx":
/*!**********************************************!*\
  !*** ./src/page/dashboard/dataAssetMap2.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@4.9.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@4.9.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.3.0@@ant-design/icons/es/index.js");

var _Charts = __webpack_require__(/*! ../../components/Charts */ "./src/components/Charts/index.js");

var _index = __webpack_require__(/*! ../../components/Trend/index.jsx */ "./src/components/Trend/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _NumberInfo = __webpack_require__(/*! ../../components/NumberInfo */ "./src/components/NumberInfo/index.js");

var _NumberInfo2 = _interopRequireDefault(_NumberInfo);

var _numeral = __webpack_require__(/*! numeral */ "./node_modules/_numeral@2.0.6@numeral/numeral.js");

var _numeral2 = _interopRequireDefault(_numeral);

var _GridContent = __webpack_require__(/*! ../../components/PageHeaderWrapper/GridContent */ "./src/components/PageHeaderWrapper/GridContent.js");

var _GridContent2 = _interopRequireDefault(_GridContent);

var _Yuan = __webpack_require__(/*! ../../util/Yuan */ "./src/util/Yuan.js");

var _Yuan2 = _interopRequireDefault(_Yuan);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _utils = __webpack_require__(/*! ../../util/utils */ "./src/util/utils.js");

var _Analysis = __webpack_require__(/*! ./Analysis.less */ "./src/page/dashboard/Analysis.less");

var _Analysis2 = _interopRequireDefault(_Analysis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};
//列表数据
var searchData = [{ "index": 1, "keyword": "人员基本信息", "count": 418, "range": 59, "status": 1 }, { "index": 2, "keyword": "上市公司财务报表", "count": 180, "range": 27, "status": 1 }, { "index": 3, "keyword": "公司收入", "count": 458, "range": 6, "status": 0 }, { "index": 4, "keyword": "资产基本信息", "count": 832, "range": 68, "status": 0 }, { "index": 5, "keyword": "项目基本信息", "count": 469, "range": 76, "status": 1 }, { "index": 6, "keyword": "搜索关键词-5", "count": 121, "range": 17, "status": 0 }, { "index": 7, "keyword": "搜索关键词-6", "count": 374, "range": 63, "status": 0 }, { "index": 8, "keyword": "搜索关键词-7", "count": 838, "range": 15, "status": 1 }, { "index": 9, "keyword": "搜索关键词-8", "count": 400, "range": 77, "status": 1 }, { "index": 10, "keyword": "搜索关键词-9", "count": 953, "range": 5, "status": 0 }, { "index": 11, "keyword": "搜索关键词-10", "count": 498, "range": 99, "status": 0 }, { "index": 12, "keyword": "搜索关键词-11", "count": 621, "range": 83, "status": 1 }, { "index": 13, "keyword": "搜索关键词-12", "count": 62, "range": 70, "status": 1 }, { "index": 14, "keyword": "搜索关键词-13", "count": 245, "range": 42, "status": 1 }, { "index": 15, "keyword": "搜索关键词-14", "count": 316, "range": 97, "status": 0 }, { "index": 16, "keyword": "搜索关键词-15", "count": 204, "range": 41, "status": 0 }, { "index": 17, "keyword": "搜索关键词-16", "count": 528, "range": 43, "status": 0 }, { "index": 18, "keyword": "搜索关键词-17", "count": 307, "range": 64, "status": 1 }, { "index": 19, "keyword": "搜索关键词-18", "count": 904, "range": 29, "status": 1 }, { "index": 20, "keyword": "搜索关键词-19", "count": 539, "range": 23, "status": 0 }, { "index": 21, "keyword": "搜索关键词-20", "count": 943, "range": 79, "status": 1 }, { "index": 22, "keyword": "搜索关键词-21", "count": 894, "range": 80, "status": 1 }, { "index": 23, "keyword": "搜索关键词-22", "count": 666, "range": 44, "status": 0 }, { "index": 24, "keyword": "搜索关键词-23", "count": 273, "range": 2, "status": 0 }, { "index": 25, "keyword": "搜索关键词-24", "count": 455, "range": 61, "status": 1 }, { "index": 26, "keyword": "搜索关键词-25", "count": 303, "range": 33, "status": 1 }, { "index": 27, "keyword": "搜索关键词-26", "count": 261, "range": 24, "status": 0 }, { "index": 28, "keyword": "搜索关键词-27", "count": 207, "range": 57, "status": 1 }, { "index": 29, "keyword": "搜索关键词-28", "count": 406, "range": 45, "status": 1 }, { "index": 30, "keyword": "搜索关键词-29", "count": 746, "range": 85, "status": 0 }, { "index": 31, "keyword": "搜索关键词-30", "count": 290, "range": 86, "status": 0 }, { "index": 32, "keyword": "搜索关键词-31", "count": 168, "range": 97, "status": 0 }, { "index": 33, "keyword": "搜索关键词-32", "count": 802, "range": 21, "status": 1 }, { "index": 34, "keyword": "搜索关键词-33", "count": 195, "range": 14, "status": 0 }, { "index": 35, "keyword": "搜索关键词-34", "count": 122, "range": 66, "status": 1 }, { "index": 36, "keyword": "搜索关键词-35", "count": 556, "range": 27, "status": 0 }, { "index": 37, "keyword": "搜索关键词-36", "count": 314, "range": 96, "status": 0 }, { "index": 38, "keyword": "搜索关键词-37", "count": 387, "range": 48, "status": 1 }, { "index": 39, "keyword": "搜索关键词-38", "count": 525, "range": 93, "status": 0 }, { "index": 40, "keyword": "搜索关键词-39", "count": 722, "range": 66, "status": 1 }, { "index": 41, "keyword": "搜索关键词-40", "count": 851, "range": 67, "status": 1 }, { "index": 42, "keyword": "搜索关键词-41", "count": 495, "range": 95, "status": 1 }, { "index": 43, "keyword": "搜索关键词-42", "count": 167, "range": 3, "status": 0 }, { "index": 44, "keyword": "搜索关键词-43", "count": 797, "range": 97, "status": 1 }, { "index": 45, "keyword": "搜索关键词-44", "count": 410, "range": 79, "status": 1 }, { "index": 46, "keyword": "搜索关键词-45", "count": 367, "range": 12, "status": 0 }, { "index": 47, "keyword": "搜索关键词-46", "count": 247, "range": 14, "status": 0 }, { "index": 48, "keyword": "搜索关键词-47", "count": 838, "range": 52, "status": 0 }, { "index": 49, "keyword": "搜索关键词-48", "count": 597, "range": 24, "status": 0 }, { "index": 50, "keyword": "搜索关键词-49", "count": 582, "range": 36, "status": 1 }];
//列表数据
var columns = [{
  title: "排名",
  dataIndex: 'index',
  key: 'index'
}, {
  title: "数据表名称",
  dataIndex: 'keyword',
  key: 'keyword',
  render: function render(text) {
    return _react2.default.createElement(
      'a',
      { href: '/' },
      text
    );
  }
}, {
  title: "用户",
  dataIndex: 'count',
  key: 'count',
  sorter: function sorter(a, b) {
    return a.count - b.count;
  },
  className: _Analysis2.default.alignRight
}, {
  title: "周排名",
  dataIndex: 'range',
  key: 'range',
  sorter: function sorter(a, b) {
    return a.range - b.range;
  },
  render: function render(text, record) {
    return _react2.default.createElement(
      _index2.default,
      { flag: record.status === 1 ? 'down' : 'up' },
      _react2.default.createElement(
        'span',
        { style: { marginRight: 4 } },
        text,
        '%'
      )
    );
  },
  align: 'right'
}];
var visitData = [{ "x": "2018-11-19", "y": 7 }, { "x": "2018-11-20", "y": 5 }, { "x": "2018-11-21", "y": 4 }, { "x": "2018-11-22", "y": 2 }, { "x": "2018-11-23", "y": 4 }, { "x": "2018-11-24", "y": 7 }, { "x": "2018-11-25", "y": 5 }, { "x": "2018-11-26", "y": 6 }, { "x": "2018-11-27", "y": 5 }, { "x": "2018-11-28", "y": 9 }, { "x": "2018-11-29", "y": 6 }, { "x": "2018-11-30", "y": 3 }, { "x": "2018-12-01", "y": 1 }, { "x": "2018-12-02", "y": 5 }, { "x": "2018-12-03", "y": 3 }, { "x": "2018-12-04", "y": 6 }, { "x": "2018-12-05", "y": 5 }];
var salesTypeData = [{ "x": "HBase", "y": 4544 }, { "x": "Hive", "y": 3321 }, { "x": "mysql", "y": 3113 }, { "x": "mogoodb", "y": 2341 }];
var salesTypeDataOnline = [{ "x": "人力资源", "y": 9 }, { "x": "主数据", "y": 321 }, { "x": "三重一大", "y": 311 }, { "x": "外部统计数据", "y": 41 }, { "x": "上市公司财务数据", "y": 121 }, { "x": "其他", "y": 111 }];
var salesTypeDataOffline = [{ "x": "服务器2", "y": 1 }, { "x": "服务器1", "y": 188 }, { "x": "服务器3", "y": 344 }, { "x": "服务器4", "y": 255 }, { "x": "其他", "y": 65 }];

exports.default = function () {
  //数据总量参数
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      dataAll = _useState2[0],
      setdataAll = _useState2[1]; //总量


  var _useState3 = (0, _react.useState)(12),
      _useState4 = _slicedToArray(_useState3, 2),
      WdataBFB = _useState4[0],
      setWdataBFB = _useState4[1]; //周百分百


  var _useState5 = (0, _react.useState)(13),
      _useState6 = _slicedToArray(_useState5, 2),
      DdataBFB = _useState6[0],
      setDataBFB = _useState6[1]; //日百分百


  var _useState7 = (0, _react.useState)(302),
      _useState8 = _slicedToArray(_useState7, 2),
      daynew = _useState8[0],
      setdaynew = _useState8[1]; //日新增
  //数据源数量


  var _useState9 = (0, _react.useState)([].concat(visitData)),
      _useState10 = _slicedToArray(_useState9, 2),
      data_source = _useState10[0],
      setdata_source = _useState10[1]; //下方波线图数据


  var _useState11 = (0, _react.useState)(10),
      _useState12 = _slicedToArray(_useState11, 2),
      D_source = _useState12[0],
      setD_source = _useState12[1]; //总量


  var _useState13 = (0, _react.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      dayNewS = _useState14[0],
      setdayNewS = _useState14[1]; //日访问量
  //访问量


  var _useState15 = (0, _react.useState)(9019),
      _useState16 = _slicedToArray(_useState15, 2),
      visit = _useState16[0],
      setvisit = _useState16[1]; //访问量


  var _useState17 = (0, _react.useState)(18),
      _useState18 = _slicedToArray(_useState17, 2),
      VBFB = _useState18[0],
      setVBFB = _useState18[1];

  var _useState19 = (0, _react.useState)([].concat(visitData)),
      _useState20 = _slicedToArray(_useState19, 2),
      V_list = _useState20[0],
      setV_list = _useState20[1]; //访问量数据
  //储存空间


  var _useState21 = (0, _react.useState)(60),
      _useState22 = _slicedToArray(_useState21, 2),
      StorageBFB = _useState22[0],
      setStorageBFB = _useState22[1]; //储存空间百分百


  var _useState23 = (0, _react.useState)(9098),
      _useState24 = _slicedToArray(_useState23, 2),
      use = _useState24[0],
      setuse = _useState24[1]; //已使用


  var _useState25 = (0, _react.useState)(212121),
      _useState26 = _slicedToArray(_useState25, 2),
      Nuse = _useState26[0],
      setNuser = _useState26[1]; //未用


  (0, _react.useEffect)(function () {
    var H_dataAll = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _HttpService2.default.post('/reportServer/DBConnection2/statisticsAllRecordsNumber', JSON.stringify({})).then(function (res) {
                  setdataAll(res);
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function H_dataAll() {
        return _ref.apply(this, arguments);
      };
    }();
    H_dataAll();
  }, []);

  //列表数据

  var _useState27 = (0, _react.useState)('all'),
      _useState28 = _slicedToArray(_useState27, 2),
      salesType = _useState28[0],
      setsalesType = _useState28[1];

  var _useState29 = (0, _react.useState)([].concat(salesTypeData)),
      _useState30 = _slicedToArray(_useState29, 2),
      salesPieData = _useState30[0],
      setsalesPieData = _useState30[1];

  //列表函数


  var handleChangeSalesType = function handleChangeSalesType(e) {
    var obj = {
      'all': [].concat(visitData),
      'catalog': [].concat(salesTypeData),
      'source': [].concat(salesTypeDataOnline),
      'dbtype': [].concat(salesTypeDataOffline),
      'online': [{ 'x': '2', y: 12 }]
    };
    console.log(obj[e.target.value]);
    setsalesPieData(obj[e.target.value]);
    console.log(e.target.value);
    setsalesType(e.target.value);
  };

  return _react2.default.createElement(
    _GridContent2.default,
    null,
    _react2.default.createElement(
      _row2.default,
      { gutter: 24 },
      _react2.default.createElement(
        _col2.default,
        topColResponsiveProps,
        _react2.default.createElement(
          _Charts.ChartCard,
          {
            bordered: false,
            title: '\u6570\u636E\u603B\u91CF',
            action: _react2.default.createElement(
              _tooltip2.default,
              {
                title: '\u6570\u636E\u603B\u91CF' },
              _react2.default.createElement(_icons.InfoCircleOutlined, null)
            ),

            total: _react2.default.createElement(
              _reactRouterDom.Link,
              { style: { color: 'rgba(0, 0, 0, 0.65)' }, to: '/dataAsset/dataAssetList' },
              (0, _numeral2.default)(dataAll).format('0,0')
            ),
            footer: _react2.default.createElement(_Charts.Field, {
              label: "日新增",
              value: '\uFFE5' + (0, _numeral2.default)(daynew).format('0,0')
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
              WdataBFB,
              '%'
            )
          ),
          _react2.default.createElement(
            _index2.default,
            { flag: 'down' },
            "日同比",
            _react2.default.createElement(
              'span',
              { className: _Analysis2.default.trendText },
              DdataBFB,
              '%'
            )
          )
        )
      ),
      _react2.default.createElement(
        _col2.default,
        topColResponsiveProps,
        _react2.default.createElement(
          _Charts.ChartCard,
          {
            bordered: false,
            title: "数据源数量",
            action: _react2.default.createElement(
              _tooltip2.default,
              {
                title: "introduce"
              },
              _react2.default.createElement(_icons.InfoCircleOutlined, null)
            ),
            total: _react2.default.createElement(
              _reactRouterDom.Link,
              { style: { color: 'rgba(0, 0, 0, 0.65)' }, to: '/dbs/dbsList' },
              D_source
            ),
            footer: _react2.default.createElement(_Charts.Field, {
              label: "日访问量",
              value: (0, _numeral2.default)({ dayNewS: dayNewS }).format('0,0')
            }),
            contentHeight: 46
          },
          _react2.default.createElement(_Charts.MiniArea, { color: '#975FE4', data: data_source })
        )
      ),
      _react2.default.createElement(
        _col2.default,
        topColResponsiveProps,
        _react2.default.createElement(
          _Charts.ChartCard,
          {
            bordered: false,
            title: "访问量",
            action: _react2.default.createElement(
              _tooltip2.default,
              {
                title: "Introduce"
              },
              _react2.default.createElement(_icons.InfoCircleOutlined, null)
            ),
            total: (0, _numeral2.default)(visit).format('0,0'),
            footer: _react2.default.createElement(_Charts.Field, {
              label: "本周增加",
              value: VBFB + '%'
            }),
            contentHeight: 46
          },
          _react2.default.createElement(_Charts.MiniBar, { data: V_list })
        )
      ),
      _react2.default.createElement(
        _col2.default,
        topColResponsiveProps,
        _react2.default.createElement(
          _Charts.ChartCard,
          {

            bordered: false,
            title: "存储空间",
            action: _react2.default.createElement(
              _tooltip2.default,
              {
                title: "introduce"
              },
              _react2.default.createElement(_icons.InfoCircleOutlined, null)
            ),
            total: StorageBFB + '%',
            footer: _react2.default.createElement(
              'div',
              { style: { whiteSpace: 'nowrap', overflow: 'hidden' } },
              _react2.default.createElement(
                _index2.default,
                { flag: 'up', style: { marginRight: 16 } },
                "已使用",
                _react2.default.createElement(
                  'span',
                  { className: _Analysis2.default.trendText },
                  use,
                  'G'
                )
              ),
              _react2.default.createElement(
                _index2.default,
                null,
                "总空间",
                _react2.default.createElement(
                  'span',
                  { className: _Analysis2.default.trendText },
                  Nuse,
                  'G'
                )
              )
            ),
            contentHeight: 46
          },
          _react2.default.createElement(_Charts.MiniProgress, { percent: 78, strokeWidth: 8, target: 80, color: '#13C2C2' })
        )
      )
    ),
    _react2.default.createElement(
      _row2.default,
      { gutter: 24 },
      _react2.default.createElement(
        _col2.default,
        { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 },
        _react2.default.createElement(
          _card2.default,
          {

            bordered: false,
            title: "数据表访问排行"
            // extra={iconGroup}
            , style: { marginTop: 24 }
          },
          _react2.default.createElement(_table2.default, {
            rowKey: function rowKey(record) {
              return record.index;
            },
            size: 'small',
            columns: columns,
            dataSource: searchData,
            pagination: {
              style: { marginBottom: 0 },
              pageSize: 5
            }
          })
        )
      ),
      _react2.default.createElement(
        _col2.default,
        { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 },
        _react2.default.createElement(
          _card2.default,
          {
            className: _Analysis2.default.salesCard,
            bordered: false,
            title: "数据分布情况",
            bodyStyle: { padding: 24 },
            extra: _react2.default.createElement(
              'div',
              { className: _Analysis2.default.salesCardExtra },
              _react2.default.createElement(
                'div',
                { className: _Analysis2.default.salesTypeRadio },
                _react2.default.createElement(
                  _radio2.default.Group,
                  { value: salesType, onChange: handleChangeSalesType },
                  _react2.default.createElement(
                    _radio2.default.Button,
                    { value: 'catalog' },
                    "数据目录"
                  ),
                  _react2.default.createElement(
                    _radio2.default.Button,
                    { value: 'source' },
                    "数据来源"
                  ),
                  _react2.default.createElement(
                    _radio2.default.Button,
                    { value: 'dbtype' },
                    "存储类型"
                  ),
                  _react2.default.createElement(
                    _radio2.default.Button,
                    { value: 'online' },
                    '\u6570\u636E\u6E90'
                  )
                )
              )
            ),
            style: { marginTop: 24, minHeight: 509 }
          },
          _react2.default.createElement(_Charts.Pie, {
            hasLegend: true,
            subTitle: "表",
            total: 15238,

            data: salesPieData,
            height: 248,
            lineWidth: 4
          })
        )
      )
    )
  );
};

/***/ })

}]);
//# sourceMappingURL=dataAssetMap.js.map
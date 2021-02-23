(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Simple"],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/report/Style.css":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/report/Style.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".componentContainer {\n  position: absolute;\n  padding: 10px;\n  left: 2px;\n  top: 0;\n  bottom: 20px;\n  right: 0; }\n\n.spreadContainer {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 0 20px grey; }\n\n.settingContainer {\n  position: absolute;\n  bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./src/page/report/Excel.jsx":
/*!***********************************!*\
  !*** ./src/page/report/Excel.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spreadSheets = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/_@grapecity_spread-sheets@11.2.6@@grapecity/spread-sheets/index.js");

var _spreadSheets2 = _interopRequireDefault(_spreadSheets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Excel = function () {
  /*
  spread: 表格实例对象
  spreadNS: spreadNS
   */
  function Excel(spread, spreadNS) {
    _classCallCheck(this, Excel);

    this.getSearchCondition = function (condition) {
      var searchCondition = new _spreadSheets2.default.Spread.Sheets.Search.SearchCondition();
      searchCondition.searchString = condition;
      return searchCondition;
    };

    this.spread = spread;
    this.spreadNS = spreadNS;
    this.searchResult = null;
  }

  _createClass(Excel, [{
    key: 'getResultSearchingSheetEnd',
    value: function getResultSearchingSheetEnd(condition) {
      var spread = this.spread,
          spreadNS = this.spreadNS;

      var searchCondition = condition;
      var sheet = spread.getActiveSheet();
      searchCondition.startSheetIndex = spread.getActiveSheetIndex();
      searchCondition.endSheetIndex = spread.getActiveSheetIndex();
      if (searchCondition.searchOrder === spreadNS.Search.SearchOrder.zOrder) {
        searchCondition.findBeginRow = sheet.getActiveRowIndex();
        searchCondition.findBeginColumn = sheet.getActiveColumnIndex() + 1;
      } else if (searchCondition.searchOrder === spreadNS.Search.SearchOrder.nOrder) {
        searchCondition.findBeginRow = sheet.getActiveRowIndex() + 1;
        searchCondition.findBeginColumn = sheet.getActiveColumnIndex();
      }

      if ((searchCondition.searchFlags && spreadNS.Search.SearchFlags.blockRange) > 0) {
        var sel = sheet.getSelections()[0];
        searchCondition.rowStart = sel.row;
        searchCondition.columnStart = sel.col;
        searchCondition.rowEnd = sel.row + sel.rowCount - 1;
        searchCondition.columnEnd = sel.col + sel.colCount - 1;
      }
      return spread.search(searchCondition);
    }
  }, {
    key: 'getResultSearchingWorkbookEnd',
    value: function getResultSearchingWorkbookEnd(condition) {
      var spread = this.spread;

      var searchCondition = condition;
      searchCondition.rowStart = -1;
      searchCondition.columnStart = -1;
      searchCondition.findBeginRow = -1;
      searchCondition.findBeginColumn = -1;
      searchCondition.rowEnd = -1;
      searchCondition.columnEnd = -1;
      searchCondition.startSheetIndex = spread.getActiveSheetIndex() + 1;
      searchCondition.endSheetIndex = -1;
      return spread.search(searchCondition);
    }
  }, {
    key: 'getResultSearchingWorkbookBefore',
    value: function getResultSearchingWorkbookBefore(condition) {
      var spread = this.spread;

      var searchCondition = condition;
      searchCondition.rowStart = -1;
      searchCondition.columnStart = -1;
      searchCondition.findBeginRow = -1;
      searchCondition.findBeginColumn = -1;
      searchCondition.rowEnd = -1;
      searchCondition.columnEnd = -1;
      searchCondition.startSheetIndex = -1;
      searchCondition.endSheetIndex = spread.getActiveSheetIndex() - 1;
      return spread.search(searchCondition);
    }
  }, {
    key: 'getResultSearchingSheetBefore',
    value: function getResultSearchingSheetBefore(condition) {
      var spread = this.spread,
          spreadNS = this.spreadNS;

      var searchCondition = this.getSearchCondition(condition);
      var sheet = spread.getActiveSheet();
      searchCondition.startSheetIndex = spread.getActiveSheetIndex();
      searchCondition.endSheetIndex = spread.getActiveSheetIndex();
      if ((searchCondition.searchFlags && spreadNS.Search.SearchFlags.blockRange) > 0) {
        var sel = sheet.getSelections()[0];
        searchCondition.rowStart = sel.row;
        searchCondition.columnStart = sel.col;
        searchCondition.findBeginRow = sel.row;
        searchCondition.findBeginColumn = sel.col;
        searchCondition.rowEnd = sel.row + sel.rowCount - 1;
        searchCondition.columnEnd = sel.col + sel.colCount - 1;
      } else {
        searchCondition.rowStart = -1;
        searchCondition.columnStart = -1;
        searchCondition.findBeginRow = -1;
        searchCondition.findBeginColumn = -1;
        searchCondition.rowEnd = sheet.getActiveRowIndex();
        searchCondition.columnEnd = sheet.getActiveColumnIndex();
      }
      return spread.search(searchCondition);
    }
  }, {
    key: 'getSearchResult',
    value: function getSearchResult(condition) {
      var spreadNS = this.spreadNS;

      var searchCondition = this.getSearchCondition(condition);
      var searchResult = null;
      searchResult = this.getResultSearchingSheetEnd(searchCondition);
      if (searchResult == null || searchResult.searchFoundFlag === spreadNS.Search.SearchFoundFlags.none) {
        searchResult = this.getResultSearchingWorkbookEnd(searchCondition);
      }
      if (searchResult == null || searchResult.searchFoundFlag === spreadNS.Search.SearchFoundFlags.none) {
        searchResult = this.getResultSearchingWorkbookBefore(searchCondition);
      }
      if (searchResult == null || searchResult.searchFoundFlag === spreadNS.Search.SearchFoundFlags.none) {
        searchResult = this.getResultSearchingSheetBefore(searchCondition);
      }
      return searchResult;
    }
  }, {
    key: 'active',
    value: function active() {
      // 激活查找到的单元格
      var spread = this.spread,
          searchResult = this.searchResult,
          spreadNS = this.spreadNS;

      var sheet = spread.getActiveSheet();
      sheet.setActiveCell(searchResult.foundRowIndex, searchResult.foundColumnIndex);
      sheet.showCell(searchResult.foundRowIndex, searchResult.foundColumnIndex, spreadNS.VerticalPosition.center, spreadNS.HorizontalPosition.center);
    }

    // 设置表头信息

  }, {
    key: 'getColumnInfo',
    value: function getColumnInfo(keys) {
      var colInfos = [];
      for (var i = 0; i < keys.length; i++) {
        colInfos.push({ name: keys[i].templateValue, displayName: keys[i].templateText, width: keys[i].columnWidth || 80, formatter: keys[i].columnFormatter || '' });
      }
      return colInfos;
    }
    // 自适应高度

  }, {
    key: 'fitRow',
    value: function fitRow(row) {
      var spread = this.spread,
          sheet = spread.getActiveSheet();

      for (var i = 0; i < row; i++) {
        sheet.autoFitRow(i);
      }
    }
  }, {
    key: 'result',
    get: function get() {
      return this.searchResult;
    },
    set: function set(value) {
      this.searchResult = value;
    }
  }]);

  return Excel;
}();

exports.default = Excel;

/***/ }),

/***/ "./src/page/report/Simple.jsx":
/*!************************************!*\
  !*** ./src/page/report/Simple.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _spreadSheetsReact = __webpack_require__(/*! @grapecity/spread-sheets-react */ "./node_modules/_@grapecity_spread-sheets-react@11.2.6@@grapecity/spread-sheets-react/index.js");

__webpack_require__(/*! ./Style.css */ "./src/page/report/Style.css");

var _dataService = __webpack_require__(/*! ./dataService.jsx */ "./src/page/report/dataService.jsx");

var _dataService2 = _interopRequireDefault(_dataService);

var _spreadSheets = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/_@grapecity_spread-sheets@11.2.6@@grapecity/spread-sheets/index.js");

var _spreadSheets2 = _interopRequireDefault(_spreadSheets);

var _spreadExcelio = __webpack_require__(/*! @grapecity/spread-excelio */ "./node_modules/_@grapecity_spread-excelio@12.2.5@@grapecity/spread-excelio/index.js");

var Excelio = _interopRequireWildcard(_spreadExcelio);

var _fileSaver = __webpack_require__(/*! file-saver */ "./node_modules/_file-saver@2.0.5@file-saver/dist/FileSaver.min.js");

var FileSaver = _interopRequireWildcard(_fileSaver);

var _Excel = __webpack_require__(/*! ./Excel.jsx */ "./src/page/report/Excel.jsx");

var _Excel2 = _interopRequireDefault(_Excel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statusOptions = [{ text: '暂存', value: 'save' }, { text: '发布', value: 'publish' }];
var templates = {
  rowNumber: 1,
  columnNumber: 15,
  value: [{
    templateText: '姓名',
    templateValue: 'name'
  }, {
    templateText: '编码',
    templateValue: 'code'
  }, {
    templateText: '城市',
    templateValue: 'city'
  }, {
    templateText: '状态',
    templateValue: 'state'
  }, {
    templateText: '纬度',
    templateValue: 'lat'
  }, {
    templateText: '经度',
    templateValue: 'lon'
  }, {
    templateText: 'pop2011',
    templateValue: 'pop2011'
  }, {
    templateText: 'vol2011',
    templateValue: 'vol2011'
  }, {
    templateText: 'vol2010',
    templateValue: 'vol2010'
  }, {
    templateText: 'vol2009',
    templateValue: 'vol2009'
  }, {
    templateText: 'vol2008',
    templateValue: 'vol2008'
  }, {
    templateText: 'vol2007',
    templateValue: 'vol2007'
  }, {
    templateText: 'vol2006',
    templateValue: 'vol2006'
  }, {
    templateText: 'vol2005',
    templateValue: 'vol2005'
  }, {
    templateText: '状态',
    templateValue: 'status'
  }]
};
var excel = null;

var DataBingingCon = function (_Component) {
  _inherits(DataBingingCon, _Component);

  function DataBingingCon(props) {
    _classCallCheck(this, DataBingingCon);

    var _this = _possibleConstructorReturn(this, (DataBingingCon.__proto__ || Object.getPrototypeOf(DataBingingCon)).call(this, props));

    _this.resizeWidth = function () {
      var spread = _this.state.spread;

      if (!spread) return;
      spread.suspendPaint();
      _this.setState({
        tableWidth: document.getElementsByClassName('spreadContainer')[0].offsetWidth
      }, function () {
        return spread.resumePaint();
      });
    };

    _this.importFile = function () {
      var excelFile = document.getElementById("fileDemo").files[0];

      // Get an instance of IO class
      var excelIO = new Excelio.IO();
      excelIO.open(excelFile, function (json) {
        _this.state.spread.fromJSON(json);
      }, function (e) {
        console.log(e);
      });
    };

    _this.state = {
      tableHead: [],
      tableWidth: null,
      templates: [],
      spread: {},
      condition: '',
      data: null,
      changedRow: []
    };
    _this.hostStyle = {
      top: '130px',
      bottom: '0px'
    };
    return _this;
  }

  _createClass(DataBingingCon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.resizeWidth, { passive: true });
      setTimeout(function () {
        _this2.setState({ templates: templates });
        _this2.getReport();
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeWidth);
    }
  }, {
    key: 'getReport',
    value: function getReport() {
      this.setState({ data: _dataService2.default.getAirpotsData() });
      this.renderHead();
    }
  }, {
    key: 'handleRowChanged',
    value: function handleRowChanged(_ref) {
      var sheet = _ref.sheet,
          propertyName = _ref.propertyName;
      // 整行删除触发
      if (propertyName === 'deleteRows') {
        var reportId = sheet.getDeletedRows()[0].originalItem.reportId;

        if (reportId) {
          this.setState({ loading: true });
          setTimeout(function () {
            alert('删除成功!');
          }, 2000);
        }
      }
    }
  }, {
    key: 'handleValueChanged',
    value: function handleValueChanged(_ref2) {
      var row = _ref2.row;
      var _state = this.state,
          changedRow = _state.changedRow,
          spread = _state.spread;

      var sheet = spread.getActiveSheet();
      var data = sheet.getDataSource();
      changedRow.push(data[row]);
      this.setState({ changedRow: changedRow });
    }
  }, {
    key: 'handleRangeChanged',
    value: function handleRangeChanged(_ref3) {
      var changedCells = _ref3.changedCells;
      // 输入公式、delete删除数据、移动单元格触发
      var _state2 = this.state,
          changedRow = _state2.changedRow,
          spread = _state2.spread;

      var sheet = spread.getActiveSheet();
      var data = sheet.getDataSource();
      for (var i = 0; i < changedCells.length; i++) {
        changedRow.push(data[changedCells[i]]);
      }
      this.setState({ changedRow: changedRow });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      var condition = this.state.condition;

      var searchStr = '';
      if (condition === null) {
        return;
      } else {
        searchStr = condition;
      }
      excel.result = excel.getSearchResult(searchStr);
      excel.active();
    }

    // 数据验证

  }, {
    key: 'dataValidate',
    value: function dataValidate() {
      function MyCondition(reg) {
        this.reg = reg;
        _spreadSheets2.default.Spread.Sheets.ConditionalFormatting.Condition.apply(this, arguments);
      }
      MyCondition.prototype = new _spreadSheets2.default.Spread.Sheets.ConditionalFormatting.Condition();
      MyCondition.prototype.evaluate = function (evaluator, baseRow, baseColumn, actualObj) {
        var reg = new RegExp(this.reg);
        if (reg.test(actualObj)) {
          return true;
        } else {
          return false;
        }
      };
      // 数据验证相关变量
      var spread = this.state.spread,
          sheet = spread.getSheet(0),
          sheetActive = spread.getActiveSheet(),
          nCondition = new MyCondition(/[+-]?\d+(\.\d+)?|^\s+$/),
          validator = new _spreadSheets2.default.Spread.Sheets.DataValidation.DefaultDataValidator(nCondition);
      // 指定数据验证样式和范围
      spread.suspendPaint();
      validator.type(_spreadSheets2.default.Spread.Sheets.DataValidation.CriteriaType.custom);
      spread.options.highlightInvalidData = true;
      validator.showInputMessage(true);
      validator.inputMessage('必须填写数字！');
      validator.inputTitle('提示');
      sheetActive.setDataValidator(0, 4, sheet.getRowCount(), 1, validator); // rowIndex, colIndex, rowCount, colCount
      sheet.resumePaint();
    }
  }, {
    key: 'renderHead',
    value: function renderHead(source) {
      var _state3 = this.state,
          spread = _state3.spread,
          templates = _state3.templates,
          sheet = spread.getSheet(0),
          spreadNS = _spreadSheets2.default.Spread.Sheets,
          combo = new spreadNS.CellTypes.ComboBox().items(statusOptions).editorValueType(spreadNS.CellTypes.EditorValueType.value),
          header = sheet.getRange(1, 0, templates.rowNumber, templates.columnNumber, _spreadSheets2.default.Spread.Sheets.SheetArea.colHeader);

      sheet.suspendPaint();
      this.setState({ tableHead: excel.getColumnInfo(templates.value) });
      sheet.getRange(-1, 0, -1, templates.columnNumber).locked(false); // 解锁表格
      source && sheet.setDataSource(source);
      header.backColor('#CCFFCC'); // 表头背景
      sheet.addRows(sheet.getRowCount(), 80);
      sheet.getRange(0, templates.columnNumber - 1, sheet.getRowCount() - 1, 1).cellType(combo); // 指定状态单元格的格式
      sheet.getRange(0, 0, sheet.getRowCount(), sheet.getColumnCount(), spreadNS.SheetArea.viewport).wordWrap(true);
      excel.fitRow(sheet.getRowCount());
      this.dataValidate();
      sheet.resumePaint();
    }
  }, {
    key: 'exportExcel',
    value: function exportExcel() {
      this.setState({ exporting: true });
      var excelIO = new Excelio.IO();
      var spread = this.state.spread;

      var json = spread.toJSON({
        includeBindingSource: true,
        columnHeadersAsFrozenRows: true
      });
      excelIO.save(json, function (blob) {
        FileSaver.saveAs(blob, spread.getActiveSheet().name() + '.xlsx');
      }, function (error) {
        alert(error);
      });
    }
    // Import Excel

  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var changedRow = this.state.changedRow;

      console.log('即将提交的行:', changedRow);
    }
  }, {
    key: 'init',
    value: function init(spread) {
      var sheet = spread.getActiveSheet();
      var style = new _spreadSheets2.default.Spread.Sheets.Style();
      style.locked = true;
      var spreadNS = _spreadSheets2.default.Spread.Sheets;
      excel = new _Excel2.default(spread, spreadNS);
      sheet.suspendPaint();
      sheet.options.protectionOptions = {
        allowSelectLockedCells: true,
        allowSelectUnlockedCells: true,
        allowFilter: true,
        allowSort: false,
        allowResizeRows: true,
        allowResizeColumns: true,
        allowEditObjects: false,
        allowDragInsertRows: false,
        allowDragInsertColumns: false,
        allowDeleteColumns: false
      };
      sheet.bind(spreadNS.Events.CellChanged, function (e, info) {
        sheet.autoFitRow(info.row);
      });
      sheet.options.isProtected = true;
      sheet.resumePaint();
      this.setState({ spread: spread });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state4 = this.state,
          data = _state4.data,
          tableWidth = _state4.tableWidth,
          tableHead = _state4.tableHead,
          condition = _state4.condition;

      return _react2.default.createElement(
        'div',
        { className: 'componentContainer', style: this.props.style },
        _react2.default.createElement(
          'h3',
          null,
          '\u7B80\u5355\u7EFC\u5408\u793A\u4F8B'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            '\u5F02\u6B65\u6E32\u67D3\u5927\u91CF\u6570\u636E\u7684\u8868\u683C\u3001\u641C\u7D22\u3001\u5BFC\u51FA\u3001\u6570\u636E\u9A8C\u8BC1\u529F\u80FD\u3002'
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement('input', { type: 'search',
              placeholder: '\u641C\u7D22\u5185\u5BB9',
              onChange: function onChange(e) {
                return _this3.setState({ condition: e.target.value });
              },
              style: { width: 200 }
            }),
            condition ? _react2.default.createElement(
              'button',
              { onClick: function onClick(e) {
                  e.preventDefault();_this3.handleSearch();
                } },
              '>'
            ) : null,
            _react2.default.createElement(
              'button',
              { onClick: function onClick(e) {
                  e.preventDefault();_this3.handleSearch();
                } },
              '\u641C\u7D22'
            ),
            _react2.default.createElement(
              'button',
              { style: { float: 'right' }, onClick: function onClick(e) {
                  e.preventDefault();_this3.exportExcel();
                } },
              '\u5BFC\u51FA'
            ),
            _react2.default.createElement(
              'button',
              { style: { float: 'right' }, onClick: function onClick(e) {
                  e.preventDefault();_this3.importFile();
                } },
              '\u5BFC\u5165'
            ),
            _react2.default.createElement('input', { type: 'file', name: 'files[]', id: 'fileDemo', accept: '.xlsx,.xls' }),
            _react2.default.createElement(
              'button',
              { style: { float: 'right' }, onClick: function onClick(e) {
                  e.preventDefault();_this3.handleSubmit();
                } },
              '\u63D0\u4EA4'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'spreadContainer', style: this.hostStyle },
          _react2.default.createElement(
            _card2.default,
            null,
            _react2.default.createElement(
              _spreadSheetsReact.SpreadSheets,
              {
                backColor: 'white',
                hostStyle: { width: tableWidth + 'px', height: '600px' }
                // rowChanged={(_, sheet) => this.handleRowChanged(sheet)}
                // valueChanged={(_, sheet) => this.handleValueChanged(sheet)}
                // rangeChanged={(_, sheet) => this.handleRangeChanged(sheet)}
                , workbookInitialized: function workbookInitialized(spread) {
                  return _this3.init(spread);
                }
              },
              _react2.default.createElement(
                _spreadSheetsReact.Worksheet,
                { name: '\u7B80\u5355\u7EFC\u5408\u793A\u4F8B', autoGenerateColumns: false },
                ')): null}'
              )
            )
          )
        )
      );
    }
  }]);

  return DataBingingCon;
}(_react.Component);

exports.default = DataBingingCon;

/***/ }),

/***/ "./src/page/report/Style.css":
/*!***********************************!*\
  !*** ./src/page/report/Style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./Style.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/report/Style.css");
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

/***/ "./src/page/report/dataService.jsx":
/*!*****************************************!*\
  !*** ./src/page/report/dataService.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = function () {
    function DataService() {
        _classCallCheck(this, DataService);

        this.employees = [{
            name: "Nancy Freehafer",
            phone: "(123)555-5100",
            country: "US",
            email: "mailto:nancy@northwindtraders.com",
            onJob: true
        }, {
            name: "Andrew Cencini",
            phone: "(123)555-5101",
            country: "UK",
            email: "mailto:andrew@northwindtraders.com",
            onJob: false
        }, {
            name: "Jan Kotas",
            phone: "(123)555-5102",
            country: "Germany",
            email: "mailto:jan@northwindtraders.com",
            onJob: true
        }, {
            name: "Mariya Sergienko",
            phone: "(123)555-5103",
            country: "US",
            email: "mailto:mariya@northwindtraders.com",
            onJob: true
        }, {
            name: "Steven Thorpe",
            phone: "(123)555-5104",
            country: "Mexico",
            email: "mailto:steven@northwindtraders.com",
            onJob: false
        }, {
            name: "Michael Neipper",
            phone: "(123)555-5105",
            country: "US",
            email: "mailto:michael@northwindtraders.com",
            onJob: true
        }, {
            name: "Robert Zare",
            phone: "(123)555-5106",
            country: "UK",
            email: "mailto:robert@northwindtraders.com",
            onJob: true
        }, {
            name: "Laura Giussani",
            phone: "(123)555-5107",
            country: "US",
            email: "mailto:laura@northwindtraders.com",
            onJob: false
        }, {
            name: "Anne Hellung-Larsen",
            phone: "( 123)555-5108",
            country: "US",
            email: "mailto:anne@northwindtraders.com",
            onJob: true
        }, {
            "name": "Andorra",
            "phone": "(123)555-5109",
            "country": "Germany",
            "email": "mailto:andorra@northwindtraders.com",
            "onJob": true
        }, {
            "name": "United Arab Emirates",
            "phone": "(123)555-5110",
            "country": "UK",
            "email": "mailto:united@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Afghanistan",
            "phone": "(123)555-5111",
            "country": "US",
            "email": "mailto:afghanistan@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Antigua and Barbuda",
            "phone": "(123)555-5112",
            "country": "UK",
            "email": "mailto:antigua@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Anguilla",
            "phone": "(123)555-5113",
            "country": "UK",
            "email": "mailto:anguilla@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Albania",
            "phone": "(123)555-5114",
            "country": "Germany",
            "email": "mailto:albania@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Armenia",
            "phone": "(123)555-5115",
            "country": "US",
            "email": "mailto:armenia@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Netherlands Antilles",
            "phone": "(123)555-5116",
            "country": "UK",
            "email": "mailto:netherlands@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Angola",
            "phone": "(123)555-5117",
            "country": "UK",
            "email": "mailto:angola@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Antarctica",
            "phone": "(123)555-5118",
            "country": "UK",
            "email": "mailto:antarctica@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Argentina",
            "phone": "(123)555-5119",
            "country": "US",
            "email": "mailto:argentina@northwindtraders.com",
            "onJob": false
        }, {
            "name": "American Samoa",
            "phone": "(123)555-5120",
            "country": "US",
            "email": "mailto:american@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Austria",
            "phone": "(123)555-5121",
            "country": "Germany",
            "email": "mailto:austria@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Australia",
            "phone": "(123)555-5122",
            "country": "US",
            "email": "mailto:australia@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Aruba",
            "phone": "(123)555-5123",
            "country": "US",
            "email": "mailto:aruba@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Azerbaijan",
            "phone": "(123)555-5124",
            "country": "UK",
            "email": "mailto:azerbaijan@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Bosnia and Herzegovina",
            "phone": "(123)555-5125",
            "country": "Germany",
            "email": "mailto:bosnia@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Barbados",
            "phone": "(123)555-5126",
            "country": "US",
            "email": "mailto:barbados@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Bangladesh",
            "phone": "(123)555-5127",
            "country": "UK",
            "email": "mailto:bangladesh@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Belgium",
            "phone": "(123)555-5128",
            "country": "UK",
            "email": "mailto:belgium@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Burkina Faso",
            "phone": "(123)555-5129",
            "country": "US",
            "email": "mailto:burkina@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Bulgaria",
            "phone": "(123)555-5130",
            "country": "UK",
            "email": "mailto:bulgaria@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Bahrain",
            "phone": "(123)555-5131",
            "country": "Germany",
            "email": "mailto:bahrain@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Burundi",
            "phone": "(123)555-5132",
            "country": "Germany",
            "email": "mailto:burundi@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Benin",
            "phone": "(123)555-5133",
            "country": "Germany",
            "email": "mailto:benin@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Bermuda",
            "phone": "(123)555-5134",
            "country": "UK",
            "email": "mailto:bermuda@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Brunei",
            "phone": "(123)555-5135",
            "country": "US",
            "email": "mailto:brunei@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Bolivia",
            "phone": "(123)555-5136",
            "country": "US",
            "email": "mailto:bolivia@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Brazil",
            "phone": "(123)555-5137",
            "country": "UK",
            "email": "mailto:brazil@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Bahamas, The",
            "phone": "(123)555-5138",
            "country": "US",
            "email": "mailto:bahamas,@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Bhutan",
            "phone": "(123)555-5139",
            "country": "US",
            "email": "mailto:bhutan@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Bouvet Island",
            "phone": "(123)555-5140",
            "country": "UK",
            "email": "mailto:bouvet@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Botswana",
            "phone": "(123)555-5141",
            "country": "US",
            "email": "mailto:botswana@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Belarus",
            "phone": "(123)555-5142",
            "country": "UK",
            "email": "mailto:belarus@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Belize",
            "phone": "(123)555-5143",
            "country": "UK",
            "email": "mailto:belize@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Canada",
            "phone": "(123)555-5144",
            "country": "Germany",
            "email": "mailto:canada@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Cocos (Keeling) Islands",
            "phone": "(123)555-5145",
            "country": "Germany",
            "email": "mailto:cocos@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Congo (DRC)",
            "phone": "(123)555-5146",
            "country": "Germany",
            "email": "mailto:congo@northwindtraders.com",
            "onJob": true
        }, {
            "name": "Central African Republic",
            "phone": "(123)555-5147",
            "country": "US",
            "email": "mailto:central@northwindtraders.com",
            "onJob": false
        }, {
            "name": "Congo",
            "phone": "(123)555-5148",
            "country": "US",
            "email": "mailto:congo@northwindtraders.com",
            "onJob": false
        }];
        this.airports = [{
            "name": "Hartsfield Jackson Atlanta International Airport",
            "code": "ATL",
            "city": "Atlanta",
            "state": "GA",
            "lat": 33.64,
            "lon": -84.444,
            "pop2011": 432427,
            "vol2011": 44414121,
            "vol2010": 43130585,
            "vol2009": 42280868,
            "vol2008": 43236665,
            "vol2007": 43236665,
            "vol2006": 41352038,
            "vol2005": 42402653
        }, {
            "name": "O'Hare International Airport",
            "code": "ORD",
            "city": "Chicago",
            "state": "IL",
            "lat": 41.9794,
            "lon": -87.9044,
            "pop2011": 2707120,
            "vol2011": 31892301,
            "vol2010": 32171831,
            "vol2009": 31135732,
            "vol2008": 33683991,
            "vol2007": 36521585,
            "vol2006": 36825097,
            "vol2005": 36720005
        }, {
            "name": "Los Angeles International Airport",
            "code": "LAX",
            "city": "Los Angeles",
            "state": "CA",
            "lat": 33.9425,
            "lon": -118.4081,
            "pop2011": 3819702,
            "vol2011": 30528737,
            "vol2010": 28857755,
            "vol2009": 27439897,
            "vol2008": 28861477,
            "vol2007": 30113985,
            "vol2006": 29357327,
            "vol2005": 29372272
        }, {
            "name": "Dallas/Fort Worth International Airport",
            "code": "DFW",
            "city": "Dallas/Fort Worth",
            "state": "TX",
            "lat": 32.8974,
            "lon": -97.0407,
            "pop2011": 1223229,
            "vol2011": 27518358,
            "vol2010": 27100656,
            "vol2009": 26663984,
            "vol2008": 27219985,
            "vol2007": 28482417,
            "vol2006": 28627749,
            "vol2005": 28079147
        }, {
            "name": "Denver International Airport",
            "code": "DEN",
            "city": "Denver",
            "state": "CO",
            "lat": 39.8631,
            "lon": -104.6736,
            "pop2011": 619968,
            "vol2011": 25667499,
            "vol2010": 25241962,
            "vol2009": 24013669,
            "vol2008": 24287939,
            "vol2007": 20796173,
            "vol2006": 20591909,
            "vol2005": 20315544
        }, {
            "name": "John F. Kennedy International Airport",
            "code": "JFK",
            "city": "New York",
            "state": "NY",
            "lat": 40.6438,
            "lon": -73.782,
            "pop2011": 8244910,
            "vol2011": 23664830,
            "vol2010": 22934047,
            "vol2009": 22710272,
            "vol2008": 23620948,
            "vol2007": 23401351,
            "vol2006": 21071501,
            "vol2005": 20260359
        }, {
            "name": "San Francisco International Airport",
            "code": "SFO",
            "city": "San Francisco",
            "state": "CA",
            "lat": 37.6152,
            "lon": -122.39,
            "pop2011": 812826,
            "vol2011": 20038679,
            "vol2010": 19359003,
            "vol2009": 18467908,
            "vol2008": 18135827,
            "vol2007": 17280328,
            "vol2006": 16236592,
            "vol2005": 16070133
        }, {
            "name": "McCarran International Airport",
            "code": "LAS",
            "city": "Las Vegas",
            "state": "NV",
            "lat": 36.085,
            "lon": -115.1511,
            "pop2011": 589317,
            "vol2011": 19854759,
            "vol2010": 18996738,
            "vol2009": 19445952,
            "vol2008": 21024443,
            "vol2007": 22537950,
            "vol2006": 22028521,
            "vol2005": 21402676
        }, {
            "name": "Phoenix Sky Harbor International Airport",
            "code": "PHX",
            "city": "Phoenix",
            "state": "AZ",
            "lat": 33.4365,
            "lon": -112.0073,
            "pop2011": 1469471,
            "vol2011": 19750306,
            "vol2010": 18907171,
            "vol2009": 18559647,
            "vol2008": 19450576,
            "vol2007": 20767144,
            "vol2006": 20479291,
            "vol2005": 19032196
        }, {
            "name": "George Bush Intercontinental Airport",
            "code": "IAH",
            "city": "Houston",
            "state": "TX",
            "lat": 29.9867,
            "lon": -95.3381,
            "pop2011": 2145146,
            "vol2011": 19306660,
            "vol2010": 19528631,
            "vol2009": 19290239,
            "vol2008": 20030898,
            "vol2007": 24117623,
            "vol2006": 22822111,
            "vol2005": 20799886
        }, {
            "name": "Charlotte/Douglas International Airport",
            "code": "CLT",
            "city": "Charlotte",
            "state": "NC",
            "lat": 35.221,
            "lon": -80.9442,
            "pop2011": 751087,
            "vol2011": 19022535,
            "vol2010": 18629181,
            "vol2009": 18165476,
            "vol2008": 19291428,
            "vol2007": 16884780,
            "vol2006": 14949568,
            "vol2005": 14109608
        }, {
            "name": "Miami International Airport",
            "code": "MIA",
            "city": "Miami",
            "state": "FL",
            "lat": 25.7965,
            "lon": -80.2756,
            "pop2011": 408750,
            "vol2011": 18342158,
            "vol2010": 17017654,
            "vol2009": 16187768,
            "vol2008": 16369998,
            "vol2007": 16377488,
            "vol2006": 15664791,
            "vol2005": 15092763
        }, {
            "name": "Orlando International Airport",
            "code": "MCO",
            "city": "Orlando",
            "state": "FL",
            "lat": 28.4316,
            "lon": -81.3083,
            "pop2011": 243195,
            "vol2011": 17250415,
            "vol2010": 17017491,
            "vol2009": 16371016,
            "vol2008": 17288480,
            "vol2007": 17614679,
            "vol2006": 16807856,
            "vol2005": 16592133
        }, {
            "name": "Newark Liberty International Airport",
            "code": "EWR",
            "city": "Newark",
            "state": "NJ",
            "lat": 40.6899,
            "lon": -74.1782,
            "pop2011": 277540,
            "vol2011": 16814092,
            "vol2010": 16571754,
            "vol2009": 16659441,
            "vol2008": 17599578,
            "vol2007": 18163652,
            "vol2006": 17804107,
            "vol2005": 16444959
        }, {
            "name": "Seattle-Tacoma International Airport",
            "code": "SEA",
            "city": "Seattle",
            "state": "WA",
            "lat": 47.4444,
            "lon": -122.3005,
            "pop2011": 620778,
            "vol2011": 15971676,
            "vol2010": 15406243,
            "vol2009": 15273092,
            "vol2008": 15839504,
            "vol2007": 15419116,
            "vol2006": 14703928,
            "vol2005": 14359530
        }, {
            "name": "Minneapolis-St. Paul International Airport/Wold-Chamberlain Airport",
            "code": "MSP",
            "city": "Minneapolis/St. Paul",
            "state": "MN",
            "lat": 44.8812,
            "lon": -93.2031,
            "pop2011": 387753,
            "vol2011": 15895653,
            "vol2010": 15512487,
            "vol2009": 15551206,
            "vol2008": 16369324,
            "vol2007": 16962563,
            "vol2006": 17192410,
            "vol2005": 17971771
        }, {
            "name": "Detroit Metropolitan Wayne County Airport",
            "code": "DTW",
            "city": "Detroit",
            "state": "MI",
            "lat": 42.2083,
            "lon": -83.3572,
            "pop2011": 706585,
            "vol2011": 15716865,
            "vol2010": 15643890,
            "vol2009": 15211402,
            "vol2008": 16998174,
            "vol2007": 17495135,
            "vol2006": 17483468,
            "vol2005": 17580363
        }, {
            "name": "Philadelphia International Airport",
            "code": "PHL",
            "city": "Philadelphia",
            "state": "PA",
            "lat": 39.875,
            "lon": -75.2491,
            "pop2011": 1536471,
            "vol2011": 14883180,
            "vol2010": 14951254,
            "vol2009": 15002961,
            "vol2008": 15586852,
            "vol2007": 15656653,
            "vol2006": 15390848,
            "vol2005": 15376569
        }, {
            "name": "Logan International Airport",
            "code": "BOS",
            "city": "Boston",
            "state": "MA",
            "lat": 42.3695,
            "lon": -71.0201,
            "pop2011": 625087,
            "vol2011": 14171476,
            "vol2010": 13561814,
            "vol2009": 12566797,
            "vol2008": 12820489,
            "vol2007": 13783297,
            "vol2006": 13544552,
            "vol2005": 13214923
        }, {
            "name": "LaGuardia Airport",
            "code": "LGA",
            "city": "New York",
            "state": "NY",
            "lat": 40.7739,
            "lon": -73.8718,
            "pop2011": 8244910,
            "vol2011": 11989227,
            "vol2010": 12001501,
            "vol2009": 11084300,
            "vol2008": 11567586,
            "vol2007": 12529890,
            "vol2006": 12925697,
            "vol2005": 13014314
        }, {
            "name": "Fort Lauderdale/Hollywood International Airport",
            "code": "FLL",
            "city": "Fort Lauderdale",
            "state": "FL",
            "lat": 26.0727,
            "lon": -80.14,
            "pop2011": 168528,
            "vol2011": 11332466,
            "vol2010": 10829810,
            "vol2009": 10258118,
            "vol2008": 11020091,
            "vol2007": 11079250,
            "vol2006": 10204579,
            "vol2005": 10729468
        }, {
            "name": "Baltimore-Washington International Thurgood Marshall Airport",
            "code": "BWI",
            "city": "Baltimore/Washington, DC",
            "state": "MD",
            "lat": 39.188537,
            "lon": -76.678077,
            "pop2011": 619493,
            "vol2011": 11067317,
            "vol2010": 10848633,
            "vol2009": 10338950,
            "vol2008": 10215225,
            "vol2007": 10487789,
            "vol2006": 10297607,
            "vol2005": 9829432
        }, {
            "name": "Washington Dulles International Airport",
            "code": "IAD",
            "city": "Washington, DC",
            "state": "VA",
            "lat": 38.9534,
            "lon": -77.4477,
            "pop2011": 617996,
            "vol2011": 11043829,
            "vol2010": 11276481,
            "vol2009": 11132098,
            "vol2008": 11348775,
            "vol2007": 11789441,
            "vol2006": 11045217,
            "vol2005": 13032502
        }, {
            "name": "Salt Lake City International Airport",
            "code": "SLC",
            "city": "Salt Lake City",
            "state": "UT",
            "lat": 40.7868,
            "lon": -111.9819,
            "pop2011": 189899,
            "vol2011": 9701756,
            "vol2010": 9910493,
            "vol2009": 9903821,
            "vol2008": 9993198,
            "vol2007": 10560906,
            "vol2006": 10289129,
            "vol2005": 10601918
        }, {
            "name": "Midway International Airport",
            "code": "MDW",
            "city": "Chicago",
            "state": "IL",
            "lat": 41.7883,
            "lon": -87.7418,
            "pop2011": 2707120,
            "vol2011": 9134576,
            "vol2010": 8518957,
            "vol2009": 8253620,
            "vol2008": 8021383,
            "vol2007": 9132836,
            "vol2006": 8915292,
            "vol2005": 8383698
        }, {
            "name": "Ronald Reagan Washington National Airport",
            "code": "DCA",
            "city": "Washington, DC",
            "state": "VA",
            "lat": 38.8519,
            "lon": -77.0375,
            "pop2011": 617996,
            "vol2011": 9053004,
            "vol2010": 8736804,
            "vol2009": 8490288,
            "vol2008": 8704466,
            "vol2007": 9038174,
            "vol2006": 8973410,
            "vol2005": 8623907
        }, {
            "name": "Honolulu International Airport",
            "code": "HNL",
            "city": "Honolulu",
            "state": "HI",
            "lat": 21.3329,
            "lon": -157.9214,
            "pop2011": 340936,
            "vol2011": 8643494,
            "vol2010": 8740077,
            "vol2009": 8739389,
            "vol2008": 9013440,
            "vol2007": 10393929,
            "vol2006": 9855838,
            "vol2005": 9784404
        }, {
            "name": "San Diego International Airport",
            "code": "SAN",
            "city": "San Diego",
            "state": "CA",
            "lat": 32.7323,
            "lon": -117.1974,
            "pop2011": 1326179,
            "vol2011": 8465683,
            "vol2010": 8430509,
            "vol2009": 8453854,
            "vol2008": 9007617,
            "vol2007": 9138116,
            "vol2006": 8724442,
            "vol2005": 8628648
        }, {
            "name": "Tampa International Airport",
            "code": "TPA",
            "city": "Tampa",
            "state": "FL",
            "lat": 27.9769,
            "lon": -82.5334,
            "pop2011": 346037,
            "vol2011": 8174194,
            "vol2010": 8137222,
            "vol2009": 8263294,
            "vol2008": 8871917,
            "vol2007": 9306036,
            "vol2006": 9187865,
            "vol2005": 9297643
        }];
        this.personAddress = [{
            "Name": "Andorra",
            "CountryRegionCode": "AD",
            "City": "Bothell",
            "AddressLine": "1970 Napa Ct.",
            "PostalCode": 98011
        }, {
            "Name": "United Arab Emirates",
            "CountryRegionCode": "AE",
            "City": "Bothell",
            "AddressLine": "9833 Mt. Dias Blv.",
            "PostalCode": 98011
        }, {
            "Name": "Afghanistan",
            "CountryRegionCode": "AF",
            "City": "Bothell",
            "AddressLine": "7484 Roundtree Drive",
            "PostalCode": 98011
        }, {
            "Name": "Antigua and Barbuda",
            "CountryRegionCode": "AG",
            "City": "Bothell",
            "AddressLine": "9539 Glenside Dr",
            "PostalCode": 98011
        }, {
            "Name": "Anguilla",
            "CountryRegionCode": "AI",
            "City": "Bothell",
            "AddressLine": "1226 Shoe St.",
            "PostalCode": 98011
        }, {
            "Name": "Albania",
            "CountryRegionCode": "AL",
            "City": "Bothell",
            "AddressLine": "1399 Firestone Drive",
            "PostalCode": 98011
        }, {
            "Name": "Armenia",
            "CountryRegionCode": "AM",
            "City": "Bothell",
            "AddressLine": "5672 Hale Dr.",
            "PostalCode": 98011
        }, {
            "Name": "Netherlands Antilles",
            "CountryRegionCode": "AN",
            "City": "Bothell",
            "AddressLine": "6387 Scenic Avenue",
            "PostalCode": 98011
        }, {
            "Name": "Angola",
            "CountryRegionCode": "AO",
            "City": "Bothell",
            "AddressLine": "8713 Yosemite Ct.",
            "PostalCode": 98011
        }, {
            "Name": "Antarctica",
            "CountryRegionCode": "AQ",
            "City": "Bothell",
            "AddressLine": "250 Race Court",
            "PostalCode": 98011
        }, {
            "Name": "Argentina",
            "CountryRegionCode": "AR",
            "City": "Bothell",
            "AddressLine": "1318 Lasalle Street",
            "PostalCode": 98011
        }, {
            "Name": "American Samoa",
            "CountryRegionCode": "AS",
            "City": "Bothell",
            "AddressLine": "5415 San Gabriel Dr.",
            "PostalCode": 98011
        }, {
            "Name": "Austria",
            "CountryRegionCode": "AT",
            "City": "Bothell",
            "AddressLine": "9265 La Paz",
            "PostalCode": 98011
        }, {
            "Name": "Australia",
            "CountryRegionCode": "AU",
            "City": "Bothell",
            "AddressLine": "8157 W. Book",
            "PostalCode": 98011
        }, {
            "Name": "Aruba",
            "CountryRegionCode": "AW",
            "City": "Bothell",
            "AddressLine": "4912 La Vuelta",
            "PostalCode": 98011
        }, {
            "Name": "Azerbaijan",
            "CountryRegionCode": "AZ",
            "City": "Bothell",
            "AddressLine": "40 Ellis St.",
            "PostalCode": 98011
        }, {
            "Name": "Bosnia and Herzegovina",
            "CountryRegionCode": "BA",
            "City": "Bothell",
            "AddressLine": "6696 Anchor Drive",
            "PostalCode": 98011
        }, {
            "Name": "Barbados",
            "CountryRegionCode": "BB",
            "City": "Bothell",
            "AddressLine": "1873 Lion Circle",
            "PostalCode": 98011
        }, {
            "Name": "Bangladesh",
            "CountryRegionCode": "BD",
            "City": "Bothell",
            "AddressLine": "3148 Rose Street",
            "PostalCode": 98011
        }, {
            "Name": "Belgium",
            "CountryRegionCode": "BE",
            "City": "Bothell",
            "AddressLine": "6872 Thornwood Dr.",
            "PostalCode": 98011
        }, {
            "Name": "Burkina Faso",
            "CountryRegionCode": "BF",
            "City": "Bothell",
            "AddressLine": "5747 Shirley Drive",
            "PostalCode": 98011
        }, {
            "Name": "Bulgaria",
            "CountryRegionCode": "BG",
            "City": "Portland",
            "AddressLine": "636 Vine Hill Way",
            "PostalCode": 97205
        }, {
            "Name": "Bahrain",
            "CountryRegionCode": "BH",
            "City": "Seattle",
            "AddressLine": "6657 Sand Pointe Lane",
            "PostalCode": 98104
        }, {
            "Name": "Burundi",
            "CountryRegionCode": "BI",
            "City": "Duluth",
            "AddressLine": "80 Sunview Terrace",
            "PostalCode": 55802
        }, {
            "Name": "Benin",
            "CountryRegionCode": "BJ",
            "City": "Dallas",
            "AddressLine": "9178 Jumping St.",
            "PostalCode": 75201
        }, {
            "Name": "Bermuda",
            "CountryRegionCode": "BM",
            "City": "San Francisco",
            "AddressLine": "5725 Glaze Drive",
            "PostalCode": 94109
        }, {
            "Name": "Brunei",
            "CountryRegionCode": "BN",
            "City": "Nevada",
            "AddressLine": "2487 Riverside Drive",
            "PostalCode": 84407
        }, {
            "Name": "Bolivia",
            "CountryRegionCode": "BO",
            "City": "Phoenix",
            "AddressLine": "9228 Via Del Sol",
            "PostalCode": 85004
        }, {
            "Name": "Brazil",
            "CountryRegionCode": "BR",
            "City": "Memphis",
            "AddressLine": "8291 Crossbow Way",
            "PostalCode": 38103
        }, {
            "Name": "Bahamas, The",
            "CountryRegionCode": "BS",
            "City": "Orlando",
            "AddressLine": "9707 Coldwater Drive",
            "PostalCode": 32804
        }, {
            "Name": "Bhutan",
            "CountryRegionCode": "BT",
            "City": "Ottawa",
            "AddressLine": "9100 Sheppard Avenue North",
            "PostalCode": "K4B 1T7"
        }, {
            "Name": "Bouvet Island",
            "CountryRegionCode": "BV",
            "City": "Montreal",
            "AddressLine": "26910 Indela Road",
            "PostalCode": "H1Y 2H5"
        }, {
            "Name": "Botswana",
            "CountryRegionCode": "BW",
            "City": "Calgary",
            "AddressLine": "10203 Acorn Avenue",
            "PostalCode": "T2P 2G8"
        }, {
            "Name": "Belarus",
            "CountryRegionCode": "BY",
            "City": "Bordeaux",
            "AddressLine": "94, rue Descartes",
            "PostalCode": 33000
        }, {
            "Name": "Belize",
            "CountryRegionCode": "BZ",
            "City": "Berlin",
            "AddressLine": "Pascalstr 951",
            "PostalCode": 14111
        }, {
            "Name": "Canada",
            "CountryRegionCode": "CA",
            "City": "Melbourne",
            "AddressLine": "34 Waterloo Road",
            "PostalCode": 3000
        }, {
            "Name": "Cocos (Keeling) Islands",
            "CountryRegionCode": "CC",
            "City": "Cambridge",
            "AddressLine": "Downshire Way",
            "PostalCode": "BA5 3HX"
        }, {
            "Name": "Congo (DRC)",
            "CountryRegionCode": "CD",
            "City": "Detroit",
            "AddressLine": "8154 Via Mexico",
            "PostalCode": 48226
        }, {
            "Name": "Central African Republic",
            "CountryRegionCode": "CF",
            "City": "Cambridge",
            "AddressLine": "3997 Via De Luna",
            "PostalCode": 2139
        }, {
            "Name": "Congo",
            "CountryRegionCode": "CG",
            "City": "Bothell",
            "AddressLine": "1902 Santa Cruz",
            "PostalCode": 98011
        }];
    }

    _createClass(DataService, [{
        key: "getAirpotsData",
        value: function getAirpotsData() {
            return this.airports;
        }
    }, {
        key: "getEmployeesData",
        value: function getEmployeesData() {
            return this.employees;
        }
    }, {
        key: "getPersonAddressData",
        value: function getPersonAddressData() {
            return this.personAddress;
        }
    }]);

    return DataService;
}();

exports.default = new DataService();

/***/ })

}]);
//# sourceMappingURL=Simple.js.map
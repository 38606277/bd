(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TableCreator"],{

/***/ "./node_modules/_ansi-colors@4.1.1@ansi-colors/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/_ansi-colors@4.1.1@ansi-colors/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
const identity = val => val;

/* eslint-disable no-control-regex */
// this is a modified version of https://github.com/chalk/ansi-regex (MIT License)
const ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;

const create = () => {
  const colors = { enabled: true, visible: true, styles: {}, keys: {} };

  if ('FORCE_COLOR' in Object({"NODE_ENV":"production"})) {
    colors.enabled = Object({"NODE_ENV":"production"}).FORCE_COLOR !== '0';
  }

  const ansi = style => {
    let open = style.open = `\u001b[${style.codes[0]}m`;
    let close = style.close = `\u001b[${style.codes[1]}m`;
    let regex = style.regex = new RegExp(`\\u001b\\[${style.codes[1]}m`, 'g');
    style.wrap = (input, newline) => {
      if (input.includes(close)) input = input.replace(regex, close + open);
      let output = open + input + close;
      // see https://github.com/chalk/chalk/pull/92, thanks to the
      // chalk contributors for this fix. However, we've confirmed that
      // this issue is also present in Windows terminals
      return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
    };
    return style;
  };

  const wrap = (style, input, newline) => {
    return typeof style === 'function' ? style(input) : style.wrap(input, newline);
  };

  const style = (input, stack) => {
    if (input === '' || input == null) return '';
    if (colors.enabled === false) return input;
    if (colors.visible === false) return '';
    let str = '' + input;
    let nl = str.includes('\n');
    let n = stack.length;
    if (n > 0 && stack.includes('unstyle')) {
      stack = [...new Set(['unstyle', ...stack])].reverse();
    }
    while (n-- > 0) str = wrap(colors.styles[stack[n]], str, nl);
    return str;
  };

  const define = (name, codes, type) => {
    colors.styles[name] = ansi({ name, codes });
    let keys = colors.keys[type] || (colors.keys[type] = []);
    keys.push(name);

    Reflect.defineProperty(colors, name, {
      configurable: true,
      enumerable: true,
      set(value) {
        colors.alias(name, value);
      },
      get() {
        let color = input => style(input, color.stack);
        Reflect.setPrototypeOf(color, colors);
        color.stack = this.stack ? this.stack.concat(name) : [name];
        return color;
      }
    });
  };

  define('reset', [0, 0], 'modifier');
  define('bold', [1, 22], 'modifier');
  define('dim', [2, 22], 'modifier');
  define('italic', [3, 23], 'modifier');
  define('underline', [4, 24], 'modifier');
  define('inverse', [7, 27], 'modifier');
  define('hidden', [8, 28], 'modifier');
  define('strikethrough', [9, 29], 'modifier');

  define('black', [30, 39], 'color');
  define('red', [31, 39], 'color');
  define('green', [32, 39], 'color');
  define('yellow', [33, 39], 'color');
  define('blue', [34, 39], 'color');
  define('magenta', [35, 39], 'color');
  define('cyan', [36, 39], 'color');
  define('white', [37, 39], 'color');
  define('gray', [90, 39], 'color');
  define('grey', [90, 39], 'color');

  define('bgBlack', [40, 49], 'bg');
  define('bgRed', [41, 49], 'bg');
  define('bgGreen', [42, 49], 'bg');
  define('bgYellow', [43, 49], 'bg');
  define('bgBlue', [44, 49], 'bg');
  define('bgMagenta', [45, 49], 'bg');
  define('bgCyan', [46, 49], 'bg');
  define('bgWhite', [47, 49], 'bg');

  define('blackBright', [90, 39], 'bright');
  define('redBright', [91, 39], 'bright');
  define('greenBright', [92, 39], 'bright');
  define('yellowBright', [93, 39], 'bright');
  define('blueBright', [94, 39], 'bright');
  define('magentaBright', [95, 39], 'bright');
  define('cyanBright', [96, 39], 'bright');
  define('whiteBright', [97, 39], 'bright');

  define('bgBlackBright', [100, 49], 'bgBright');
  define('bgRedBright', [101, 49], 'bgBright');
  define('bgGreenBright', [102, 49], 'bgBright');
  define('bgYellowBright', [103, 49], 'bgBright');
  define('bgBlueBright', [104, 49], 'bgBright');
  define('bgMagentaBright', [105, 49], 'bgBright');
  define('bgCyanBright', [106, 49], 'bgBright');
  define('bgWhiteBright', [107, 49], 'bgBright');

  colors.ansiRegex = ANSI_REGEX;
  colors.hasColor = colors.hasAnsi = str => {
    colors.ansiRegex.lastIndex = 0;
    return typeof str === 'string' && str !== '' && colors.ansiRegex.test(str);
  };

  colors.alias = (name, color) => {
    let fn = typeof color === 'string' ? colors[color] : color;

    if (typeof fn !== 'function') {
      throw new TypeError('Expected alias to be the name of an existing color (string) or a function');
    }

    if (!fn.stack) {
      Reflect.defineProperty(fn, 'name', { value: name });
      colors.styles[name] = fn;
      fn.stack = [name];
    }

    Reflect.defineProperty(colors, name, {
      configurable: true,
      enumerable: true,
      set(value) {
        colors.alias(name, value);
      },
      get() {
        let color = input => style(input, color.stack);
        Reflect.setPrototypeOf(color, colors);
        color.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
        return color;
      }
    });
  };

  colors.theme = custom => {
    if (!isObject(custom)) throw new TypeError('Expected theme to be an object');
    for (let name of Object.keys(custom)) {
      colors.alias(name, custom[name]);
    }
    return colors;
  };

  colors.alias('unstyle', str => {
    if (typeof str === 'string' && str !== '') {
      colors.ansiRegex.lastIndex = 0;
      return str.replace(colors.ansiRegex, '');
    }
    return '';
  });

  colors.alias('noop', str => str);
  colors.none = colors.clear = colors.noop;

  colors.stripColor = colors.unstyle;
  colors.symbols = __webpack_require__(/*! ./symbols */ "./node_modules/_ansi-colors@4.1.1@ansi-colors/symbols.js");
  colors.define = define;
  return colors;
};

module.exports = create();
module.exports.create = create;


/***/ }),

/***/ "./node_modules/_ansi-colors@4.1.1@ansi-colors/symbols.js":
/*!****************************************************************!*\
  !*** ./node_modules/_ansi-colors@4.1.1@ansi-colors/symbols.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

const isHyper = Object({"NODE_ENV":"production"}).TERM_PROGRAM === 'Hyper';
const isWindows = process.platform === 'win32';
const isLinux = process.platform === 'linux';

const common = {
  ballotDisabled: '☒',
  ballotOff: '☐',
  ballotOn: '☑',
  bullet: '•',
  bulletWhite: '◦',
  fullBlock: '█',
  heart: '❤',
  identicalTo: '≡',
  line: '─',
  mark: '※',
  middot: '·',
  minus: '－',
  multiplication: '×',
  obelus: '÷',
  pencilDownRight: '✎',
  pencilRight: '✏',
  pencilUpRight: '✐',
  percent: '%',
  pilcrow2: '❡',
  pilcrow: '¶',
  plusMinus: '±',
  section: '§',
  starsOff: '☆',
  starsOn: '★',
  upDownArrow: '↕'
};

const windows = Object.assign({}, common, {
  check: '√',
  cross: '×',
  ellipsisLarge: '...',
  ellipsis: '...',
  info: 'i',
  question: '?',
  questionSmall: '?',
  pointer: '>',
  pointerSmall: '»',
  radioOff: '( )',
  radioOn: '(*)',
  warning: '‼'
});

const other = Object.assign({}, common, {
  ballotCross: '✘',
  check: '✔',
  cross: '✖',
  ellipsisLarge: '⋯',
  ellipsis: '…',
  info: 'ℹ',
  question: '?',
  questionFull: '？',
  questionSmall: '﹖',
  pointer: isLinux ? '▸' : '❯',
  pointerSmall: isLinux ? '‣' : '›',
  radioOff: '◯',
  radioOn: '◉',
  warning: '⚠'
});

module.exports = (isWindows && !isHyper) ? windows : other;
Reflect.defineProperty(module.exports, 'common', { enumerable: false, value: common });
Reflect.defineProperty(module.exports, 'windows', { enumerable: false, value: windows });
Reflect.defineProperty(module.exports, 'other', { enumerable: false, value: other });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./src/page/query/TableCreator.jsx":
/*!*****************************************!*\
  !*** ./src/page/query/TableCreator.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@4.9.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@4.9.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _list = __webpack_require__(/*! antd/es/list */ "./node_modules/_antd@4.9.1@antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _avatar = __webpack_require__(/*! antd/es/avatar */ "./node_modules/_antd@4.9.1@antd/es/avatar/index.js");

var _avatar2 = _interopRequireDefault(_avatar);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@4.9.1@antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@4.9.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@4.9.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@4.9.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@4.9.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@4.9.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "./node_modules/_antd@4.9.1@antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/avatar/style/css */ "./node_modules/_antd@4.9.1@antd/es/avatar/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@4.9.1@antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@4.9.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@4.9.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@4.9.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.29.1@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/_moment@2.29.1@moment/locale/zh-cn.js");

var _reactCodemirror = __webpack_require__(/*! react-codemirror */ "./node_modules/_react-codemirror@1.0.0@react-codemirror/lib/Codemirror.js");

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

__webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/_codemirror@5.59.0@codemirror/lib/codemirror.css");

__webpack_require__(/*! codemirror/mode/sql/sql */ "./node_modules/_codemirror@5.59.0@codemirror/mode/sql/sql.js");

__webpack_require__(/*! codemirror/theme/ambiance.css */ "./node_modules/_codemirror@5.59.0@codemirror/theme/ambiance.css");

var _EditIn = __webpack_require__(/*! ./EditIn.jsx */ "./src/page/query/EditIn.jsx");

var _EditIn2 = _interopRequireDefault(_EditIn);

var _EditOut = __webpack_require__(/*! ./EditOut.jsx */ "./src/page/query/EditOut.jsx");

var _EditOut2 = _interopRequireDefault(_EditOut);

var _FunctionService = __webpack_require__(/*! ../../service/FunctionService.jsx */ "./src/service/FunctionService.jsx");

var _FunctionService2 = _interopRequireDefault(_FunctionService);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _DbService = __webpack_require__(/*! ../../service/DbService.jsx */ "./src/service/DbService.jsx");

var _DbService2 = _interopRequireDefault(_DbService);

__webpack_require__(/*! ./query.scss */ "./src/page/query/query.scss");

__webpack_require__(/*! @babel/polyfill */ "./node_modules/_@babel_polyfill@7.12.1@@babel/polyfill/lib/index.js");

var _ansiColors = __webpack_require__(/*! ansi-colors */ "./node_modules/_ansi-colors@4.1.1@ansi-colors/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _compatible.Form.Item;
var Option = _select2.default.Option;
var RadioGroup = _radio2.default.Group;
var TextArea = _input2.default.TextArea;
var TabPane = _tabs2.default.TabPane;
var ButtonGroup = _button2.default.ButtonGroup;

var functionService = new _FunctionService2.default();
var dbService = new _DbService2.default();
var source = { app: ["name", "score", "birthDate"], version: ["name", "score", "birthDate"], dbos: ["name", "population", "size"] };
var options = {

    lineNumbers: true, //显示行号  
    mode: { name: "text/x-mysql" }, //定义mode  
    extraKeys: { "Ctrl-Enter": "autocomplete" }, //自动提示配置  
    theme: "default",
    hintOptions: {
        tables: source
    }
};

var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

var url = window.getServerUrl();

var TableCreator = function (_React$Component) {
    _inherits(TableCreator, _React$Component);

    function TableCreator(props) {
        _classCallCheck(this, TableCreator);

        // alert(this.props.match.params.funcid);
        var _this = _possibleConstructorReturn(this, (TableCreator.__proto__ || Object.getPrototypeOf(TableCreator)).call(this, props));

        _this.state = {};
        _this.func_data = {};

        _this.openImage = function () {
            _this.setState({
                visible: true,
                imgList: [],
                totald: 0, selectedRowKeys: []
            }, function () {
                this.loadModelData();
            });
        };

        _this.handleCancel = function (e) {
            _this.setState({
                visible: false
            });
        };

        _this.handleOk = function (e) {
            _this.setState({
                visible: false
            });
        };

        _this.state = {
            //定义窗体参数
            action: _this.props.match.params.action,
            qry_id: _this.props.match.params.id,
            //定义状态
            inData: [],
            outData: [],
            //定义下拉查找的数据
            dbList: [],
            funcClassList: [],
            loading: false,
            visible: false, qry_file: null,
            pageNumd: 1, perPaged: 10, totald: 0
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        // this.onSaveClick = this.onSaveClick.bind(this);
        return _this;
    }

    _createClass(TableCreator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.state.action == 'update') {
                //查询函数定义
                var param = {};
                _HttpService2.default.post("reportServer/query/getQueryByID/" + this.state.qry_id, null).then(function (res) {
                    if (res.resultCode == "1000") {
                        _this2.setState({
                            inData: res.data.in,
                            outData: res.data.out,
                            qry_file: res.data.qry_file
                        });
                        _this2.props.form.setFieldsValue(res.data);
                        _this2.inParam.setFormValue(_this2.state.inData);
                        _this2.outParam.setFormValue(_this2.state.outData);

                        _this2.refs.editorsql.codeMirror.setValue(res.data.qry_sql);
                    } else _message3.default.error(res.message);
                });
            }

            // let editorsql = this.refs.editorsql;
            // editorsql.codeMirror.setSize('100%', '500px');
            // editorsql.codeMirror.border = "solid  1px red";

            //查询DB定义
            dbService.getDbList().then(function (res) {
                _this2.setState({ dbList: res });
            });

            //查询查询类别定义
            _HttpService2.default.post("reportServer/query/getAllQueryClass", '').then(function (res) {
                console.log(JSON.stringify(res));
                if (res.resultCode == '1000') {
                    _this2.setState({ funcClassList: res.data });
                } else _message3.default.error(res.message);
            });
        }

        // onRef = (ref) => {
        //     this.child = ref
        // }

    }, {
        key: 'handleSubmit',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var _this3 = this;

                var results, resultstwo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                results = null, resultstwo = null;
                                _context.prev = 1;
                                _context.next = 4;
                                return this.inParam.getFormValue().then(function (result) {
                                    results = result;
                                });

                            case 4:
                                _context.next = 6;
                                return this.outParam.getFormValue().then(function (result) {
                                    resultstwo = result;
                                });

                            case 6:
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);

                            case 11:
                                if (!(results == null || resultstwo == null)) {
                                    _context.next = 13;
                                    break;
                                }

                                return _context.abrupt('return', false);

                            case 13:
                                e.preventDefault();
                                this.props.form.validateFieldsAndScroll(function (err, values) {
                                    if (!err) {
                                        var formInfo = _this3.props.form.getFieldsValue();
                                        // this.setState({
                                        //     inData: this.inParam.getFormValue(),
                                        //     outData: this.outParam.getFormValue(),
                                        // });
                                        formInfo.qry_type = 'sql';
                                        formInfo.qry_sql = _this3.refs.editorsql.codeMirror.getValue();
                                        formInfo.in = results;
                                        formInfo.out = resultstwo;
                                        formInfo.qry_file = _this3.state.qry_file;
                                        console.log(formInfo);

                                        if (_this3.state.action == 'create') {
                                            _HttpService2.default.post("reportServer/query/createQuery", JSON.stringify(formInfo)).then(function (res) {
                                                if (res.resultCode == "1000") {
                                                    _message3.default.success('创建成功！');
                                                    _this3.setState({ action: 'update' });
                                                    _this3.props.form.setFieldsValue({ qry_id: res.data.qry_id });
                                                } else _message3.default.error(res.message);
                                            });
                                        } else if (_this3.state.action == 'update') {
                                            _HttpService2.default.post("reportServer/query/updateQuery", JSON.stringify(formInfo)).then(function (res) {
                                                if (res.resultCode == "1000") {
                                                    _message3.default.success('\u66F4\u65B0\u6210\u529F\uFF01');
                                                } else _message3.default.error(res.message);
                                            });
                                        }
                                    }
                                }).bind(this);

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 8]]);
            }));

            function handleSubmit(_x) {
                return _ref.apply(this, arguments);
            }

            return handleSubmit;
        }()
    }, {
        key: 'onGenerateClick',
        value: function onGenerateClick() {
            var _this4 = this;

            this.setState({ loading: true });
            var aSQL = this.refs.editorsql.codeMirror.getValue();

            functionService.getSqlInOut(aSQL).then(function (res) {
                if (res.resultCode = 1000) {
                    // alert(JSON.stringify(res.data));
                    _this4.setState({ loading: false });
                    _message3.default.success('生成成功!');
                    var ins = [];
                    var outs = [];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = res.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            if (item.type == 'in') {
                                var aIn = {
                                    "qry_id": "",
                                    "in_id": item.id,
                                    "in_name": item.name,
                                    "datatype": item.datatype,
                                    "dict_id": undefined,
                                    "dict_name": undefined,
                                    "render": "Input",
                                    "authtype_id": undefined,
                                    "authtype_desc": undefined,
                                    "validate": ""
                                };
                                ins.push(aIn);
                            } else if (item.type == 'out') {
                                var aOut = {
                                    "qry_id": "",
                                    "out_id": item.id,
                                    "out_name": item.name,
                                    "datatype": item.datatype,
                                    "render": "Input",
                                    "width": 100,
                                    "link": {}
                                };
                                outs.push(aOut);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    _this4.setState({ inData: ins });
                    _this4.setState({ outData: outs });

                    _this4.inParam.setFormValue(_this4.state.inData);
                    _this4.outParam.setFormValue(_this4.state.outData);
                    // this.setState({ inData: res.data });
                } else {
                    _message3.default.error(res.message);
                    _this4.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'onAddRowClick',
        value: function onAddRowClick() {
            //  alert('add');
            var aIn = {
                "qry_id": "1",
                "in_id": "2",
                "in_name": undefined,
                "datatype": undefined,
                "dict_id": undefined,
                "dict_name": undefined,
                "authtype_id": undefined,
                "authtype_desc": undefined,
                "validate": ""
            };
            var ins = [];
            ins.push(aIn);
            this.state.inData.push(aIn);
            // this.setState({inData:ins});
            this.inParam.setFormValue(this.state.inData);
        }
    }, {
        key: 'onDelRowClick',
        value: function onDelRowClick() {
            alert('del');
        }
    }, {
        key: 'sqlFormat',
        value: function sqlFormat() {
            var _this5 = this;

            var aSQL = this.refs.editorsql.codeMirror.getValue();
            if (null != aSQL && "" != aSQL) {
                _HttpService2.default.post("reportServer/query/sqlFormat", aSQL).then(function (res) {
                    _this5.refs.editorsql.codeMirror.setValue(res.data);
                });
            }
        }
    }, {
        key: 'loadModelData',

        //调用模式窗口内的数据查询
        value: function loadModelData() {
            var _this6 = this;

            var page = {};
            page.pageNum = this.state.pageNumd;
            page.perPage = this.state.perPaged;
            _HttpService2.default.post("/reportServer/uploadFile/getAll", JSON.stringify(page)).then(function (response) {
                _this6.setState({ imgList: response.data.list, totald: response.data.total });
            }, function (errMsg) {
                _this6.setState({
                    imgList: []
                });
            });
        }
        // 字典页数发生变化的时候

    }, {
        key: 'onPageNumdChange',
        value: function onPageNumdChange(pageNumd) {
            var _this7 = this;

            this.setState({
                pageNumd: pageNumd
            }, function () {
                _this7.loadModelData();
            });
        }
    }, {
        key: 'clickimg',
        value: function clickimg(id, name) {
            this.props.form.setFieldsValue({ qry_file: id });
            this.setState({
                visible: false,
                qry_file: id
            });
        }
        //模式窗口点击取消

    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;

            var formItemLayout = {
                labelCol: { span: 10 },
                wrapperCol: { span: 14 }
            };
            var formItemLayout1 = {
                labelCol: { span: 3 },
                wrapperCol: { span: 10 }
            };

            var formItemLayout2 = {
                labelCol: { span: 5 },
                wrapperCol: { span: 15 }
            };

            var offsetLayout = {
                wrapperCol: {
                    xs: 24,
                    sm: {
                        span: 12,
                        offset: 4
                    }
                }
            };
            var rowObject = {
                minRows: 4, maxRows: 600
            };

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper', style: { background: '#ECECEC', padding: '0px' } },
                _react2.default.createElement(
                    _card2.default,
                    { title: this.state.action == 'create' ? '创建查询' : '编辑查询', bordered: false, bodyStyle: { padding: "5px" }, headStyle: { height: '40px' },
                        extra: _react2.default.createElement(
                            'span',
                            null,
                            '\u7C7B\u578B\uFF1ASQL\u8BED\u53E5'
                        ) },
                    _react2.default.createElement(
                        _compatible.Form,
                        { layout: 'inline', onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            _row2.default,
                            { gutter: 0 },
                            _react2.default.createElement(
                                _col2.default,
                                { span: 10 },
                                _react2.default.createElement(
                                    _card2.default,
                                    { bodyStyle: { padding: '8px' } },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            _button2.default,
                                            { type: 'primary', htmlType: 'submit', style: { marginRight: "10px" } },
                                            '\u4FDD\u5B58'
                                        ),
                                        _react2.default.createElement(
                                            _button2.default,
                                            { icon: _react2.default.createElement(_compatible.Icon, { type: 'list' }), onClick: function onClick() {
                                                    return window.location = '#/query/QueryList';
                                                }, style: { marginRight: "10px" } },
                                            '\u9000\u51FA'
                                        )
                                    ),
                                    _react2.default.createElement(_divider2.default, { style: { margin: "8px 0 8px 0" } }),
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: '\u9009\u62E9\u6570\u636E\u5E93', style: { marginBottom: "5px" } },
                                        getFieldDecorator('qry_db', {
                                            rules: [{ required: 'true', message: "必须选择数据库" }]
                                        })(_react2.default.createElement(
                                            _select2.default,
                                            { setValue: this.form, style: { minWidth: '300px' } },
                                            this.state.dbList.map(function (item) {
                                                return _react2.default.createElement(
                                                    Option,
                                                    { key: item.name, value: item.name },
                                                    item.name
                                                );
                                            })
                                        ))
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 14 },
                                _react2.default.createElement(
                                    _card2.default,
                                    { bodyStyle: { padding: '5px' } },
                                    _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 16 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: ' \u67E5\u8BE2\u7C7B\u522B' },
                                                getFieldDecorator('class_id', {
                                                    rules: [{ required: true, message: '函数类别是必须的' }]
                                                })(_react2.default.createElement(
                                                    _select2.default,
                                                    { style: { minWidth: '300px' } },
                                                    this.state.funcClassList.map(function (item) {
                                                        return _react2.default.createElement(
                                                            Option,
                                                            { key: item.class_id, value: item.class_id },
                                                            item.class_name
                                                        );
                                                    })
                                                ))
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 8 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: '\u7CFB\u7EDF\u8868\u540D' },
                                                getFieldDecorator('qry_id', {})(_react2.default.createElement(_input2.default, { disabled: true, style: { width: '80px' } }))
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 16 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: '\u4E2D\u6587\u540D\u79F0' },
                                                getFieldDecorator('qry_name', {
                                                    rules: [{ required: true, message: '函数名称是必须的' }]
                                                })(_react2.default.createElement(_input2.default, { style: { minWidth: '300px' } }))
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 8 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: '\u4F7F\u7528\u7F13\u5B58' },
                                                getFieldDecorator('cached', {
                                                    valuePropName: 'checked'
                                                })(_react2.default.createElement(_checkbox2.default, null))
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 24 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: '\u67E5\u8BE2\u8BF4\u660E', style: { marginLeft: '14px' } },
                                                getFieldDecorator('qry_desc', {})(_react2.default.createElement(TextArea, { placeholder: '\u6B64\u51FD\u6570\u4E3B\u8981\u5B8C\u6210\u4EC0\u4E48\u529F\u80FD...', autosize: { minRows: 1, maxRows: 6 }, style: { width: "490px" } }))
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            { span: 24 },
                                            _react2.default.createElement(
                                                FormItem,
                                                { label: '\u5173\u8054\u56FE\u7247', style: { marginLeft: '14px' } },
                                                _react2.default.createElement(_input2.default, { style: { minWidth: '300px' }, name: 'qry_file', id: 'qry_file', value: this.state.qry_file, onClick: this.openImage }),
                                                this.state.qry_file == null ? '' : _react2.default.createElement(_avatar2.default, { src: url + "/report/" + this.state.qry_file })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _tabs2.default,
                                        { type: 'card', style: { marginTop: '15px' } },
                                        _react2.default.createElement(
                                            TabPane,
                                            { tab: '\u8F93\u5165\u53C2\u6570', key: '1' },
                                            _react2.default.createElement(_EditIn2.default, { onRef: function onRef(ref) {
                                                    return _this8.inParam = ref;
                                                } })
                                        ),
                                        _react2.default.createElement(
                                            TabPane,
                                            { tab: '\u8F93\u51FA\u53C2\u6570', key: '2', forceRender: true },
                                            _react2.default.createElement(_EditOut2.default, { onRef: function onRef(ref) {
                                                    return _this8.outParam = ref;
                                                }, action: this.state.action })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _modal2.default,
                        { title: '\u56FE\u7247\u9009\u62E9', visible: this.state.visible, onOk: this.handleOk, onCancel: this.handleCancel },
                        _react2.default.createElement(_list2.default, {
                            itemLayout: 'horizontal',
                            dataSource: this.state.imgList,
                            renderItem: function renderItem(item) {
                                return _react2.default.createElement(
                                    _list2.default.Item,
                                    null,
                                    _react2.default.createElement(_list2.default.Item.Meta, {
                                        avatar: _react2.default.createElement(_avatar2.default, { src: url + "/report/" + item.usefilepath }),
                                        description: _react2.default.createElement(
                                            'a',
                                            { onClick: function onClick() {
                                                    return _this8.clickimg(item.usefilepath, item.filename);
                                                } },
                                            item.filename
                                        )
                                    })
                                );
                            }
                        }),
                        _react2.default.createElement(_pagination2.default, { current: this.state.pageNumd,
                            total: this.state.totald,
                            onChange: function onChange(pageNumd) {
                                return _this8.onPageNumdChange(pageNumd);
                            } })
                    )
                )
            );
        }
    }]);

    return TableCreator;
}(_react2.default.Component);

exports.default = TableCreator = _compatible.Form.create({})(TableCreator);

/***/ })

}]);
//# sourceMappingURL=TableCreator.js.map
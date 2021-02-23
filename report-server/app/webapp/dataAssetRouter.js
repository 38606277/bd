(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataAssetRouter"],{

/***/ "./src/page/dataAsset/Primordial.jsx":
/*!*******************************************!*\
  !*** ./src/page/dataAsset/Primordial.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _g = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@3.8.5@@antv/g6/dist/g6.min.js");

var _g2 = _interopRequireDefault(_g);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceGraph = function DeviceGraph() {
		var _useState = (0, _react.useState)(undefined),
		    _useState2 = _slicedToArray(_useState, 2),
		    graph = _useState2[0],
		    setGraph = _useState2[1];

		var data = {
				nodes: [{
						x: 100,
						y: 100,
						shape: 'circle',
						label: 'circle'
				}, {
						x: 200,
						y: 100,
						shape: 'rect',
						label: 'rect'
				}, {
						x: 300,
						y: 100,
						size: [60, 30],
						shape: 'ellipse',
						label: 'ellipse'
				}, {
						x: 400,
						y: 100,
						shape: 'image',
						img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
						label: 'image'
				}]
		};

		(0, _react.useEffect)(function () {
				if (graph !== undefined) {
						graph.changeData(deviceData);
				}
				if (data.length > 0) {
						// 这里的Data是绘图的数据源
						var devicegraph = new _g2.default.Graph({
								container: 'mountNode',
								fitViewPadding: 20,
								height: 500,
								width: Width,
								nodeStyle: {
										default: {
												fill: '#40a9ff',
												stroke: '#096dd9'
										}
								},
								edgeStyle: {
										default: { stroke: '#A3B1BF' }
								},
								modes: {
										default: ['zoom-canvas', 'drag-canvas']
								}
						});
						devicegraph.read(data);
						setGraph(devicegraph);
				}
		}, [data]);

		return _react2.default.createElement(
				'div',
				{ id: 'mountNode' },
				' '
		);
};

exports.default = DeviceGraph;

/***/ }),

/***/ "./src/page/dataAsset/dataAssetInfo.jsx":
/*!**********************************************!*\
  !*** ./src/page/dataAsset/dataAssetInfo.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _tag = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@4.9.1@antd/es/tag/index.js");

var _tag2 = _interopRequireDefault(_tag);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@4.9.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@4.9.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import React from 'react';
// import { Form } from '@ant-design/compatible';
// import '@ant-design/compatible/assets/index.css';
// import {
//   Input,
//   Table,
//   Button,
//   Modal,
//   Card,
//   Row,
//   Col,
//   Select,
//   Pagination,
//   message,
//   Tabs,
//   Divider,
//   Tag,
// } from 'antd';
// import LocalStorge from '../../util/LogcalStorge.jsx';
// import CubeService from '../../service/CubeService.jsx';
// import QueryService from '../../service/QueryService.jsx';
// const _cubeService = new CubeService();
// const localStorge = new LocalStorge();
// const _query = new QueryService();
// const FormItem = Form.Item;
// const Search = Input.Search;


// const { Option } = Select;


// const { TabPane } = Tabs;


// const columns = [
//   {
//     title: '列名',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: '说明',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '数据类型',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: '索引',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     ),
//   },
//   {
//     title: '操作',
//     key: 'action',
//     render: (text, record) => (
//       <span>
//         <a>Invite {record.name}</a>
//         <Divider type="vertical" />
//         <a>Delete</a>
//       </span>
//     ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: '人员姓名',
//     age: 32,
//     address: 'string',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: '性别',
//     age: 42,
//     address: 'string',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: '年龄',
//     age: 32,
//     address: 'int',
//     tags: ['cool', 'teacher'],
//   },
// ];

// class dataAssetInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       confirmDirty: false,
//       cube_id: this.props.match.params.cube_id,
//       qry_id: '',
//       cube_name: '',
//       cube_desc: '',
//       visible: false,
//       dictionaryList: [],
//       qry_name: '',
//       cube_sql: '',
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   //初始化加载调用方法
//   componentDidMount() {
//     if (null != this.state.cube_id && '' != this.state.cube_id && 'null' != this.state.cube_id) {
//       _cubeService.getCubeInfo(this.state.cube_id).then(response => {
//         this.setState(response.data);
//         this.props.form.setFieldsValue({
//           cube_name: response.data.cube_name,
//           cube_desc: response.data.cube_desc,
//           qry_id: response.data.qry_id,
//           class_name: response.data.class_name,
//           cube_sql: response.data.cube_sql,
//         });
//       }, errMsg => {
//         this.setState({
//         });
//         localStorge.errorTips(errMsg);
//       });
//     }

//   }


//   //编辑字段对应值
//   onValueChange(e) {
//     let name = e.target.name,
//       value = e.target.value.trim();
//     this.setState({ [name]: value });
//     this.props.form.setFieldsValue({ [name]: value });

//   }
//   //编辑字段对应值
//   onSelectChange(name, value) {
//     this.setState({ [name]: value });
//     this.props.form.setFieldsValue({ [name]: value });
//   }
//   //提交
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         if (null != this.state.cube_id && '' != this.state.cube_id && 'null' != this.state.cube_id) {
//           values.cube_id = this.state.cube_id;
//         } else {
//           values.cube_id = 'null';
//         }
//         _cubeService.saveCubeInfo(values).then(response => {
//           if (null != this.state.cube_id && '' != this.state.cube_id && 'null' != this.state.cube_id) {
//             alert("修改成功");
//           } else {
//             alert("保存成功");
//           }
//           window.location.href = "#cube/cubeList";
//         }, errMsg => {
//           this.setState({
//           });
//           localStorge.errorTips(errMsg);
//         });
//       }
//     });
//   }

//   openModelClick() {
//     this.setState({ visible: true, totald: 0, selectedRowKeys: [] }, function () {
//       this.loadModelData();
//     });
//   }
//   //调用模式窗口内的数据查询
//   loadModelData() {
//     let page = {};
//     page.pageNumd = this.state.pageNumd;
//     page.perPaged = this.state.perPaged;
//     page.qry_name = this.state.qry_name;
//     _query.getAllQueryNameList(page).then(response => {
//       this.setState({ dictionaryList: response.data.list, totald: response.data.total }, function () { });
//     }).catch(error => {
//       message.error(error);
//     });
//   }
//   // 字典页数发生变化的时候
//   onPageNumdChange(pageNumd) {
//     this.setState({
//       pageNumd: pageNumd
//     }, () => {
//       this.loadModelData(this.state.paramValue);
//     });
//   }
//   //模式窗口点击确认
//   handleOk = (e) => {
//     let values = '';
//     if (this.state.selectedRowKeys.length > 0) {
//       const arr1 = this.state.selectedRowKeys[0];
//       const dataArr = arr1.split("&");
//       values = dataArr[0];
//       let qryname = dataArr[1];
//       this.props.form.setFieldsValue({ ['qry_id']: values, ['class_name']: qryname });
//       // this.props.form.setFieldsValue({['qry_name']:qryname});
//     }
//     this.setState({ visible: false, pageNumd: 1, qry_id: values });
//   }
//   //模式窗口点击取消
//   handleCancel = (e) => {
//     this.setState({
//       visible: false,
//       selectedRowKeys: []
//     });
//   }
//   //数据字典选中事件
//   onSelectChangeDic = (selectedRowKeys) => {
//     this.setState({ selectedRowKeys });
//   }
//   //数据字典的search
//   onDictionarySearch(qry_name) {
//     this.setState({ pageNumd: 1, qry_name: qry_name }, () => {
//       this.loadModelData();
//     });
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 },
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 },
//       },
//     };
//     const tailFormItemLayout = {
//       wrapperCol: {
//         xs: {
//           span: 24,
//           offset: 0,
//         },
//         sm: {
//           span: 16,
//           offset: 8,
//         },
//       },
//     };
//     const { selectedRowKeys } = this.state;
//     const rowSelectionDictionary = {
//       selectedRowKeys,
//       onChange: this.onSelectChangeDic,
//       hideDefaultSelections: true,
//       type: 'radio'
//     };
//     const dictionaryColumns = [{
//       title: '编码',
//       dataIndex: 'qry_id',
//       key: 'qry_id',
//     }, {
//       title: '名称',
//       dataIndex: 'qry_name',
//       key: 'qry_name',
//     }];
//     if (null != this.state.dictionaryList) {
//       this.state.dictionaryList.map((item, index) => {
//         item.key = item.qry_id + "&" + item.qry_name;
//       });
//     }
//     return (
//       <div id="page-wrapper">
//         <Card title='数据资产'>
//           <Form onSubmit={this.handleSubmit}>
//             <Row>
//               <Col xs={24} sm={12}>
//                 <FormItem {...formItemLayout} label="资产名称">
//                   {getFieldDecorator('cube_name', {
//                     rules: [{ required: true, message: '请输入名称!' }],
//                   })(
//                     <Input type='text' name='cube_name' onChange={(e) => this.onValueChange(e)} />
//                   )}
//                 </FormItem>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <FormItem {...formItemLayout} label="资产描述">
//                   {getFieldDecorator('cube_desc', {
//                     rules: [{ required: true, message: '请输入描述!' }],
//                   })(
//                     <Input type='text' name='cube_desc' onChange={(e) => this.onValueChange(e)} />
//                   )}
//                 </FormItem>
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={24} sm={12}>
//                 <FormItem {...formItemLayout} label="资产类型">
//                   {getFieldDecorator('cube_name', {
//                     rules: [{ required: true, message: '请输入名称!' }],
//                   })(
//                     <Select
//                     showSearch
//                     style={{ width: 200 }}
//                     placeholder="Select a person"
//                     optionFilterProp="children"
//                          defaultValue="jack" 
//                 >
//                     <Option value="jack">目录视图</Option>
//                     <Option value="lucy">主机视图</Option>
//                     <Option value="tom">存储类型视图</Option>
//                 </Select>
//                   )}
//                 </FormItem>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <FormItem {...formItemLayout} label="资产位置">
//                   {getFieldDecorator('cube_desc', {
//                     rules: [{ required: true, message: '请输入描述!' }],
//                   })(
//                     <Select
//                     showSearch
//                     style={{ width: 200 }}
//                     placeholder="Select a person"
//                     optionFilterProp="children"
//                          defaultValue="jack" 
//                 >
//                     <Option value="jack">目录视图</Option>
//                     <Option value="lucy">主机视图</Option>
//                     <Option value="tom">存储类型视图</Option>
//                 </Select>
//                   )}
//                 </FormItem>
//               </Col>
//             </Row>
//             <Row>
//               <Tabs defaultActiveKey="1" >
//                   <TabPane tab="元数据" key="1">
//                     <Table columns={columns} dataSource={data} />
//                   </TabPane>
//                   <TabPane tab="数据血缘" key="2">
//                     Content of Tab Pane 2
//                   </TabPane>
//                   <TabPane tab="数据权限" key="3">
//                     Content of Tab Pane 3
//                   </TabPane>
//                   <TabPane tab="数据浏览" key="4">
//                     Content of Tab Pane 3
//                   </TabPane>
//               </Tabs>,
//           </Row>
//             <FormItem {...tailFormItemLayout}>
//               <Button type="primary" htmlType="submit">保存</Button>
//               <Button href="#/cube/cubeList" type="primary" style={{ marginLeft: '30px' }}>返回</Button>
//             </FormItem>
//           </Form>
//         </Card>
//         <div>
//           <Modal title="字典查询" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
//             <Search
//               style={{ width: 300, marginBottom: '10px' }}
//               placeholder="请输入..." enterButton="查询"
//               onSearch={value => this.onDictionarySearch(value)}
//             />
//             <Table ref="diction" rowSelection={rowSelectionDictionary} columns={dictionaryColumns}
//               dataSource={this.state.dictionaryList} size="small" bordered pagination={false} />
//             <Pagination current={this.state.pageNumd}
//               total={this.state.totald} showTotal={total => `共 ${this.state.totald} 条`}
//               onChange={(pageNumd) => this.onPageNumdChange(pageNumd)} />
//           </Modal>
//         </div>
//       </div>
//     );
//   }
// }
// export default Form.create()(dataAssetInfo);


// // 引入提示框和标题组件


__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@4.9.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@4.9.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@4.9.1@antd/es/tabs/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

var _CubeService = __webpack_require__(/*! ../../service/CubeService.jsx */ "./src/service/CubeService.jsx");

var _CubeService2 = _interopRequireDefault(_CubeService);

var _QueryService = __webpack_require__(/*! ../../service/QueryService.jsx */ "./src/service/QueryService.jsx");

var _QueryService2 = _interopRequireDefault(_QueryService);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _index = __webpack_require__(/*! ./index.jsx */ "./src/page/dataAsset/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.20@lodash/lodash.js");

var _g = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@3.8.5@@antv/g6/dist/g6.min.js");

var _g2 = _interopRequireDefault(_g);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.9.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

__webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/_echarts@4.9.0@echarts/lib/component/tooltip.js");

__webpack_require__(/*! echarts/lib/component/title */ "./node_modules/_echarts@4.9.0@echarts/lib/component/title.js");

__webpack_require__(/*! echarts/lib/component/legend */ "./node_modules/_echarts@4.9.0@echarts/lib/component/legend.js");

__webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/_echarts@4.9.0@echarts/lib/chart/pie.js");

var _Primordial = __webpack_require__(/*! ./Primordial.jsx */ "./src/page/dataAsset/Primordial.jsx");

var _Primordial2 = _interopRequireDefault(_Primordial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var TabPane = _tabs2.default.TabPane;

var _cubeService = new _CubeService2.default();
var localStorge = new _LogcalStorge2.default();
var _query = new _QueryService2.default();
var FormItem = _form2.default.Item;
var Search = _input2.default.Search;
var layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 15 }
};
var classlist = [{
  value: '全部',
  text: '全部'
}, {
  value: '目录视图',
  text: '目录视图'
}, {
  value: '主机视图',
  text: '主机视图'
}, {
  value: '存储类型视图',
  text: '存储类型视图'
}];
var datalist = ['元数据', '数据血缘', '数据权限', '数据浏览', '元数据1', '数据建模', '数据血缘1版'];

var maringLeft = {
  marginLeft: '100px'
};
var data = [{
  key: '1',
  name: '人员姓名',
  age: 32,
  address: 'string',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: '性别',
  age: 42,
  address: 'string',
  tags: ['loser']
}, {
  key: '3',
  name: '年龄',
  age: 32,
  address: 'int',
  tags: ['cool', 'teacher']
}];
var columns = [{
  title: '列名',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return _react2.default.createElement(
      'a',
      null,
      text
    );
  }
}, {
  title: '说明',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '数据类型',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '索引',
  key: 'tags',
  dataIndex: 'tags',
  render: function render(tags) {
    return _react2.default.createElement(
      'span',
      null,
      tags.map(function (tag) {
        var color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return _react2.default.createElement(
          _tag2.default,
          { color: color, key: tag },
          tag.toUpperCase()
        );
      })
    );
  }
}, {
  title: '操作',
  key: 'action',
  render: function render(text, record) {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'a',
        null,
        'Invite ',
        record.name
      ),
      _react2.default.createElement(_divider2.default, { type: 'vertical' }),
      _react2.default.createElement(
        'a',
        null,
        'Delete'
      )
    );
  }
}];
var cm = [{
  title: '列名',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return _react2.default.createElement(
      'a',
      null,
      text
    );
  }
}, {
  title: '数据类型',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '描述',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '操作',
  key: 'action',
  render: function render(text, record) {
    return _react2.default.createElement(
      'a',
      { onClick: function onClick() {
          return function () {};
        } },
      '\u4FEE\u6539\u63CF\u8FF0'
    );
  }
}];

//组件
//元数据
function List(props) {
  var data = props.data,
      columns = props.columns;

  return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data });
}
//元数据1
function List1(props) {
  var cm = props.cm,
      data = props.data;

  console.log(data);
  return _react2.default.createElement(_table2.default, { columns: cm, dataSource: data });
}

function MYXY(props) {
  return _react2.default.createElement(_Primordial2.default, null);
}
//数据血缘
function BloodKinship(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      main = _useState2[0],
      setMain = _useState2[1];

  var ms = (0, _react.useRef)();
  var data = {
    "name": "flare",
    "children": [{
      "name": "data",
      "children": [{
        "name": "converters",
        "children": [{ "name": "Converters", "value": 721 }, { "name": "DelimitedTextConverter", "value": 4294 }]
      }, {
        "name": "DataUtil",
        "value": 3322
      }]
    }, {
      "name": "display",
      "children": [{ "name": "DirtySprite", "value": 8833 }, { "name": "LineSprite", "value": 1732 }, { "name": "RectSprite", "value": 3623 }]
    }, {
      "name": "flex",
      "children": [{ "name": "FlareVis", "value": 4116 }]
    }, {
      "name": "query",
      "children": [{ "name": "AggregateExpression", "value": 1616 }, { "name": "And", "value": 1027 }, { "name": "Arithmetic", "value": 3891 }, { "name": "Average", "value": 891 }, { "name": "BinaryExpression", "value": 2893 }, { "name": "Comparison", "value": 5103 }, { "name": "CompositeExpression", "value": 3677 }, { "name": "Count", "value": 781 }, { "name": "DateUtil", "value": 4141 }, { "name": "Distinct", "value": 933 }, { "name": "Expression", "value": 5130 }, { "name": "ExpressionIterator", "value": 3617 }, { "name": "Fn", "value": 3240 }, { "name": "If", "value": 2732 }, { "name": "IsA", "value": 2039 }, { "name": "Literal", "value": 1214 }, { "name": "Match", "value": 3748 }, { "name": "Maximum", "value": 843 }, {
        "name": "methods",
        "children": [{ "name": "add", "value": 593 }, { "name": "and", "value": 330 }, { "name": "average", "value": 287 }, { "name": "count", "value": 277 }, { "name": "distinct", "value": 292 }, { "name": "div", "value": 595 }, { "name": "eq", "value": 594 }, { "name": "fn", "value": 460 }, { "name": "gt", "value": 603 }, { "name": "gte", "value": 625 }, { "name": "iff", "value": 748 }, { "name": "isa", "value": 461 }, { "name": "lt", "value": 597 }, { "name": "lte", "value": 619 }, { "name": "max", "value": 283 }, { "name": "min", "value": 283 }, { "name": "mod", "value": 591 }, { "name": "mul", "value": 603 }, { "name": "neq", "value": 599 }, { "name": "not", "value": 386 }, { "name": "or", "value": 323 }, { "name": "orderby", "value": 307 }, { "name": "range", "value": 772 }, { "name": "select", "value": 296 }, { "name": "stddev", "value": 363 }, { "name": "sub", "value": 600 }, { "name": "sum", "value": 280 }, { "name": "update", "value": 307 }, { "name": "variance", "value": 335 }, { "name": "where", "value": 299 }, { "name": "xor", "value": 354 }, { "name": "x_x", "value": 264 }]
      }, { "name": "Minimum", "value": 843 }, { "name": "Not", "value": 1554 }, { "name": "Or", "value": 970 }, { "name": "Query", "value": 13896 }, { "name": "Range", "value": 1594 }, { "name": "StringUtil", "value": 4130 }, { "name": "Sum", "value": 791 }, { "name": "Variable", "value": 1124 }, { "name": "Variance", "value": 1876 }, { "name": "Xor", "value": 1101 }]
    }, {
      "name": "scale",
      "children": [{ "name": "IScaleMap", "value": 2105 }, { "name": "LinearScale", "value": 1316 }, { "name": "LogScale", "value": 3151 }, { "name": "OrdinalScale", "value": 3770 }, { "name": "QuantileScale", "value": 2435 }, { "name": "QuantitativeScale", "value": 4839 }, { "name": "RootScale", "value": 1756 }, { "name": "Scale", "value": 4268 }, { "name": "ScaleType", "value": 1821 }, { "name": "TimeScale", "value": 5833 }]
    }]
  };

  var option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [{
      type: 'tree',
      id: 0,
      name: 'tree1',
      data: [data],

      top: '10%',
      left: '8%',
      bottom: '22%',
      right: '20%',

      symbolSize: 7,

      edgeShape: 'polyline',
      edgeForkPosition: '63%',
      initialTreeDepth: 3,

      lineStyle: {
        width: 2
      },

      label: {
        backgroundColor: '#fff',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right'
      },

      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left'
        }
      },

      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }]
  };
  (0, _react.useEffect)(function () {
    setMain(ms.current);
    if (main !== "") {
      var myChart = _echarts2.default.init(main);
      myChart.resize({ height: '1000px' });
      myChart.setOption(option);
    }
  }, [main]);

  return _react2.default.createElement('div', { id: 'main', ref: ms });
}

//组件

exports.default = function () {
  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      cube_name = _useState4[0],
      setcube_name = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      cube_desc = _useState6[0],
      setcube_desc = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      cube_class = _useState8[0],
      setcube_class = _useState8[1]; //资源类型


  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      Asset_location = _useState10[0],
      setAsset_location = _useState10[1]; //资产位置


  var _useState11 = (0, _react.useState)([].concat(classlist)),
      _useState12 = _slicedToArray(_useState11, 2),
      cube_classlist = _useState12[0],
      setcube_classlist = _useState12[1];

  var _useState13 = (0, _react.useState)('元数据'),
      _useState14 = _slicedToArray(_useState13, 2),
      objtext = _useState14[0],
      settext = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      listdata = _useState16[0],
      setlistdata = _useState16[1];

  var path = location.hash.substring(location.hash.lastIndexOf('/') + 1);
  var dataobj = {
    '元数据': _react2.default.createElement(List, { data: data, columns: columns }),
    '数据血缘': _react2.default.createElement(BloodKinship, null),
    '数据权限': _react2.default.createElement(
      'div',
      null,
      '\u6570\u636E\u6743\u9650'
    ),
    '数据浏览': _react2.default.createElement(
      'div',
      null,
      '\u6570\u636E\u6D4F\u89C8'
    ),
    '元数据1': _react2.default.createElement(List1, { data: data, cm: cm }),
    '数据建模': _react2.default.createElement(_index2.default, null),
    '数据血缘1版': _react2.default.createElement(MYXY, null)
  };
  function callback(key) {
    settext(datalist[key]);
    setlistdata(key);
  };
  function Hsearch() {
    console.log({
      "产品名称": cube_name,
      "产品描述": cube_desc,
      "产品类型": cube_class,
      "资产位置": Asset_location
    });
    console.log(1);
  }
  (0, _react.useEffect)(function () {
    var mylist = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var obj;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                obj = {
                  table_id: path
                };

                console.log(path);
                _context.next = 4;
                return _HttpService2.default.post('/reportServer/DBConnection2/getAllTableList', JSON.stringify(obj)).then(function (res) {
                  console.log(res.data);
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function mylist() {
        return _ref.apply(this, arguments);
      };
    }();
    mylist();
  }, []);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _card2.default,
      { title: '\u6570\u636E\u8D44\u4EA7' },
      _react2.default.createElement(
        _form2.default,
        {
          style: _extends({}, maringLeft),
          name: 'horizontal_login', layout: 'inline' },
        _react2.default.createElement(
          _form2.default.Item,
          _extends({}, layout, {
            label: '\u4EA7\u54C1\u540D\u79F0',
            name: 'basic',
            initialValues: { remember: true },
            rules: [{ required: true, message: 'Please input your username!' }]
          }),
          _react2.default.createElement(_input2.default, { value: cube_name, onChange: function onChange(e) {
              setcube_name(e.target.value);
            } })
        ),
        _react2.default.createElement(
          _form2.default.Item,
          _extends({}, layout, {
            label: '\u8D44\u4EA7\u63CF\u8FF0',
            name: 'basic',
            initialValues: { remember: true },
            rules: [{ required: true, message: 'Please input your username!' }]
          }),
          _react2.default.createElement(_input2.default, { value: cube_desc, onChange: function onChange(e) {
              setcube_desc(e.target.value);
            } })
        )
      ),
      _react2.default.createElement(
        _form2.default,
        {
          style: _extends({}, maringLeft),
          name: 'horizontal_login', layout: 'inline'
        },
        _react2.default.createElement(
          _form2.default.Item,
          _extends({
            style: { marginTop: '10px' }
          }, layout, {
            label: '\u8D44\u6E90\u7C7B\u578B',
            name: 'basic',
            initialValues: { remember: true },
            rules: [{ required: true, message: 'Please input your username!' }]
          }),
          _react2.default.createElement(
            _select2.default,
            { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 164, marginLeft: 5 }, onChange: setcube_class },
            cube_classlist.map(function (item, index) {
              return _react2.default.createElement(
                Option,
                { value: item.value, key: index },
                item.text
              );
            })
          )
        ),
        _react2.default.createElement(
          _form2.default.Item,
          _extends({
            style: { marginLeft: '12px', marginTop: '10px' }
          }, layout, {
            label: '\u8D44\u4EA7\u4F4D\u7F6E',
            name: 'basic',
            initialValues: { remember: true },
            rules: [{ required: true, message: 'Please input your username!' }]
          }),
          _react2.default.createElement(
            _select2.default,
            { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 164, marginLeft: 5 }, onChange: setAsset_location },
            cube_classlist.map(function (item, index) {
              return _react2.default.createElement(
                Option,
                { value: item.value, key: index },
                item.text
              );
            })
          )
        ),
        _react2.default.createElement(
          _button2.default,
          { type: 'primary', style: { float: 'right', marginRight: '100px', marginTop: '10px' }, onClick: function onClick() {
              return Hsearch();
            } },
          '\u786E\u8BA4\u4FEE\u6539'
        )
      ),
      _react2.default.createElement(
        _tabs2.default,
        { defaultActiveKey: listdata + "", onChange: callback },
        datalist.map(function (item, index) {
          return _react2.default.createElement(
            TabPane,
            { tab: item, key: index },
            dataobj[objtext]
          );
        })
      )
    )
  );
};

/***/ }),

/***/ "./src/page/dataAsset/dataAssetList.jsx":
/*!**********************************************!*\
  !*** ./src/page/dataAsset/dataAssetList.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@4.9.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _spin = __webpack_require__(/*! antd/es/spin */ "./node_modules/_antd@4.9.1@antd/es/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@4.9.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@4.9.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@4.9.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/_antd@4.9.1@antd/es/spin/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@4.9.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@4.9.1@antd/es/tree/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.9.1@antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.3.0@@ant-design/icons/es/index.js");

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _CubeService = __webpack_require__(/*! ../../service/CubeService.jsx */ "./src/service/CubeService.jsx");

var _CubeService2 = _interopRequireDefault(_CubeService);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.20@lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _cubeService = new _CubeService2.default();
var Search = _input2.default.Search;
var FormItem = _compatible.Form.Item;
var TreeNode = _tree2.default.TreeNode;
var Option = _select2.default.Option;


var treeData = [{
    title: '人力资源',
    key: '0-0',
    children: [{
        title: '0-0-0',
        key: '0-0-0',
        children: [{ title: '0-0-0-0', key: '0-0-0-0' }, { title: '0-0-0-1', key: '0-0-0-1' }, { title: '0-0-0-2', key: '0-0-0-2' }]
    }, {
        title: '0-0-1',
        key: '0-0-1',
        children: [{ title: '0-0-1-0', key: '0-0-1-0' }, { title: '0-0-1-1', key: '0-0-1-1' }, { title: '0-0-1-2', key: '0-0-1-2' }]
    }, {
        title: '0-0-2',
        key: '0-0-2'
    }]
}, {
    title: '财务',
    key: '0-1',
    children: [{ title: '0-1-0-0', key: '0-1-0-0' }, { title: '0-1-0-1', key: '0-1-0-1' }, { title: '0-1-0-2', key: '0-1-0-2' }]
}, {
    title: '投资',
    key: '0-2'
}];

function onChange(value) {
    console.log('selected ' + value);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

var dataAssetList = function (_React$Component) {
    _inherits(dataAssetList, _React$Component);

    function dataAssetList(props) {
        var _this2 = this;

        _classCallCheck(this, dataAssetList);

        var _this = _possibleConstructorReturn(this, (dataAssetList.__proto__ || Object.getPrototypeOf(dataAssetList)).call(this, props));

        _this.onExpand = function (expandedKeys) {
            console.log('onExpand', expandedKeys);
            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
            // or, you can remove all expanded children keys.
            _this.setState({
                expandedKeys: expandedKeys,
                autoExpandParent: false
            });
        };

        _this.onCheck = function (checkedKeys) {
            console.log('onCheck', checkedKeys);
            _this.setState({ checkedKeys: checkedKeys });
        };

        _this.onSelect = function (selectedKeys, info) {
            console.log('onSelect', info);
            _this.setState({ selectedKeys: selectedKeys });
            var param = {};
            var url = "";
            if (_this.state.activeButton == 0) {
                param = { catalog_id: info.node.props.dataRef.id };
                url = "/reportServer/dataAsset/getTablesByCatalog";
            } else if (_this.state.activeButton == 1) {
                param = { source_id: info.node.props.dataRef.name };
                url = "/reportServer/dataAsset/getTablesBySource";
            } else if (_this.state.activeButton == 2) {

                param = { dbtype_id: info.node.props.dataRef.name };
                url = "/reportServer/dataAsset/getTablesByDbType";
            } else if (_this.state.activeButton == 3) {
                param = { host_id: info.node.props.dataRef.name };
                url = "/reportServer/dataAsset/getTablesByHost";
            }
            _HttpService2.default.post(url, JSON.stringify(param)).then(function (res) {
                _this.setState({ list: res.data });
                // alert(JSON.stringify(this.state.treeData));
                // 设置高亮
                //   this.activeButton(buttontype);
            }, function (errMsg) {
                _this.setState({
                    list: []
                });
            });
        };

        _this.onViewClick = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(viewID, buttontype, number) {
                var obj, param, _param, _url, url, data;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                obj = {
                                    0: {
                                        url: "/reportServer/dataAsset/getTablesByCatalog",
                                        id: 'catalog_id',
                                        l: 'id'
                                    },
                                    1: {
                                        url: "/reportServer/dataAsset/getTablesBySource",
                                        id: 'source_id',
                                        l: 'name'
                                    },
                                    2: {
                                        url: "/reportServer/dataAsset/getTablesByDbType",
                                        id: "dbtype_id",
                                        l: 'name'
                                    },
                                    3: {
                                        url: "/reportServer/dataAsset/getTablesByHost",
                                        id: 'host_id',
                                        l: 'name'
                                    }
                                };
                                param = {
                                    FLEX_VALUE_SET_ID: viewID
                                };

                                if (!(buttontype == 3)) {
                                    _context.next = 9;
                                    break;
                                }

                                //数据源
                                _param = {};
                                _url = "reportServer/DBConnection/ListAll";
                                _context.next = 7;
                                return _HttpService2.default.post(_url, _param).then(function (response) {
                                    _this.setState({ Hcard: _extends({}, response[0]), treeData: response });
                                    // alert(JSON.stringify(this.state.treeData));
                                    // 设置高亮
                                    _this.activeButton(buttontype);
                                }, function (errMsg) {
                                    _this.setState({
                                        list: []
                                    });
                                });

                            case 7:
                                _context.next = 11;
                                break;

                            case 9:
                                _context.next = 11;
                                return _HttpService2.default.post('/reportServer/FlexValue/getFlexValuesTree', JSON.stringify(param)).then(function (res) {
                                    if (res.resultCode == "1000") {
                                        _this.setState({
                                            treeData: res.data,
                                            Hcard: _extends({}, res.data[0]),
                                            selectedKeys: ["0-0"]
                                        });
                                        // 设置高亮
                                        _this.activeButton(buttontype);
                                    } else {
                                        message.error(res.message);
                                    }
                                }, function (errMsg) {
                                    _this.setState({
                                        list: [], loading: false, selectedKeys: ["0-0"]
                                    });
                                });

                            case 11:
                                url = obj[number].url, data = _defineProperty({}, obj[number].id, _this.state.Hcard[obj[number].l]);
                                _context.next = 14;
                                return _HttpService2.default.post(url, JSON.stringify(data)).then(function (res) {
                                    //默认点击修改数据
                                    _this.setState({ list: res.data });
                                    // alert(JSON.stringify(this.state.treeData));
                                    // 设置高亮
                                    //   this.activeButton(buttontype);
                                }, function (errMsg) {
                                    _this.setState({
                                        list: [],
                                        selectedKeys: ["0-0"]
                                    });
                                });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.activeButton = function (i) {

            var aButtonType = [];
            for (var j = 0; j < _this.state.buttontype.length; j++) {
                if (i == j) {
                    aButtonType[j] = 'primary';
                } else {
                    aButtonType[j] = 'default';
                }
            }
            _this.setState({ buttontype: aButtonType, activeButton: i });
        };

        _this.renderTreeNodes = function (data) {
            return data.map(function (item) {
                if (item.children) {
                    return _react2.default.createElement(
                        TreeNode,
                        { title: item.name, key: item.key, dataRef: item },
                        _this.renderTreeNodes(item.children)
                    );
                }
                return _react2.default.createElement(TreeNode, { title: item.name, key: item.key, dataRef: item });
            });
        };

        _this.showModal = function (record) {
            _this.setState({
                visible: true,
                tableColumn: [],
                tableData: []
            });
            //查询表格数据 
            var param = {
                host_id: record.host_id,
                table_name: record.table_name,
                dbtype_id: record.dbtype_id
            };
            var url = "/reportServer/dataAsset/getValueByHostAndTable";
            _HttpService2.default.post(url, JSON.stringify(param)).then(function (res) {

                //生成列信息
                var cols = [];
                var columns = res.data[0];
                var obj = {
                    overflow: 'hidden',
                    display: 'block',
                    width: '200px',
                    height: '40px'
                };
                for (var key in columns) {

                    if (key === 'fileDataBlob') {
                        cols.push({
                            title: key,
                            dataIndex: key,
                            render: function render(text) {
                                return _react2.default.createElement(
                                    'a',
                                    { style: _extends({}, obj) },
                                    text
                                );
                            }
                        });
                    } else {
                        cols.push({
                            title: key,
                            dataIndex: key
                        });
                    }
                }
                // for (j = 0, len = columns.length; j < len; j++) {
                //     cols.push({
                //         title: columns[j],
                //         dataIndex: columns[j]
                //     })
                // }
                _this.setState({ tableColumn: cols, tableData: res.data });

                // 设置高亮
            }, function (errMsg) {
                _this.setState({
                    list: []
                });
            });
        };

        _this.handleOk = function (e) {
            console.log(e);
            _this.setState({
                visible: false
            });
        };

        _this.handleCancel = function (e) {
            console.log(e);
            _this.setState({
                visible: false
            });
        };

        _this.state = {
            list: [],
            pageNum: 1,
            perPage: 10,
            listType: 'list',
            cube_name: '',
            loading: false,
            treeData: [],
            buttontype: ['primary', 'default', 'default', 'default'],
            visible: false,
            tableData: [],
            tableColumn: [],
            selectedKeys: ['0-0'], //树默认选中第一个
            activeButton: 0,
            //选项卡切换默认
            Hcard: null
        };
        return _this;
    }

    _createClass(dataAssetList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadCubeList();
            this.loadDataList();
        }
    }, {
        key: 'loadCubeList',
        value: function loadCubeList() {
            var _this3 = this;

            var param = {
                FLEX_VALUE_SET_ID: 4
            };

            _HttpService2.default.post('/reportServer/FlexValue/getFlexValuesTree', JSON.stringify(param)).then(function (res) {
                if (res.resultCode == "1000") {
                    _this3.setState({
                        treeData: res.data
                    });
                } else {
                    message.error(res.message);
                }
            }, function (errMsg) {
                _this3.setState({
                    list: [], loading: false
                });
            });
        }
    }, {
        key: 'loadDataList',
        value: function loadDataList() {
            var _this4 = this;

            var param = {
                FLEX_VALUE_SET_ID: 4
            };

            _HttpService2.default.post('/reportServer/dataAsset/getDataList', JSON.stringify(param)).then(function (res) {
                if (res.resultCode == "1000") {
                    _this4.setState({
                        list: res.data
                    });
                } else {
                    message.error(res.message);
                }
            }, function (errMsg) {
                _this4.setState({
                    list: [], loading: false
                });
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this5 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this5.loadCubeList();
            });
        }
        // 数据变化的时候

    }, {
        key: 'onValueChange',
        value: function onValueChange(e) {
            var name = e.target.name,
                value = e.target.value.trim();
            this.setState(_defineProperty({}, name, value));
        }
        // 搜索

    }, {
        key: 'onSearch',
        value: function onSearch(cube_name) {
            var _this6 = this;

            var listType = cube_name === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                pageNum: 1,
                cube_name: cube_name
            }, function () {
                _this6.loadCubeList();
            });
        }
    }, {
        key: 'deleteCube',
        value: function deleteCube(id) {
            var _this7 = this;

            if (confirm('确认删除吗？')) {
                _cubeService.delCube(id).then(function (response) {
                    alert("删除成功");
                    _this7.loadCubeList();
                }, function (errMsg) {
                    alert("删除失败");
                    // _mm.errorTips(errMsg);
                });
            }
        }

        //树节点选中时

    }, {
        key: 'viewData',
        value: function viewData(record) {
            var _this8 = this;

            var param = { host_id: record.host_id, table_name: record.table_name };
            var url = "/reportServer/dataAsset/getValueByHostAndTable";
            _HttpService2.default.post(url, JSON.stringify(param)).then(function (res) {
                _this8.setState({ list: res.data });
                // 设置高亮
            }, function (errMsg) {
                _this8.setState({
                    list: []
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var dataSource = this.state.list;
            var self = this;
            var columns = [{
                title: '数据名称',
                dataIndex: 'table_name',
                key: 'table_name',
                className: 'headerRow'
            }, {
                title: '数据描述',
                dataIndex: 'table_desc',
                key: 'table_desc',
                className: 'headerRow'
            }, {
                title: '数据目录',
                dataIndex: 'catalog_value',
                key: 'catalog_value',
                className: 'headerRow'
            }, {
                title: '数据类型',
                dataIndex: 'dbtype_id',
                key: 'cube_desc',
                className: 'headerRow'
            }, {
                title: '数据行',
                dataIndex: 'data_count',
                key: 'data_count',
                className: 'headerRow'
            }, {
                title: '操作',
                dataIndex: '操作',
                className: 'headerRow',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/dataAsset/dataAssetInfo/' + record.cube_id },
                            '\u7F16\u8F91'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this9.showModal(record);
                                }, href: 'javascript:;' },
                            '\u6D4F\u89C8\u6570\u636E'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/cube/cubeInfo/' + record.cube_id },
                            '\u5206\u6790'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this9.deleteCube('' + record.cube_id);
                                }, href: 'javascript:;' },
                            '\u5220\u9664'
                        )
                    );
                }
            }];

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _spin2.default,
                    { spinning: this.state.loading, delay: 100 },
                    _react2.default.createElement(
                        _card2.default,
                        { title: '\u6570\u636E\u8D44\u4EA7\u76EE\u5F55' },
                        _react2.default.createElement(
                            _row2.default,
                            null,
                            _react2.default.createElement(
                                _col2.default,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _card2.default,
                                    { bodyStyle: { padding: "5px", backgroundColor: '#fafafa' } },
                                    _react2.default.createElement(
                                        _tooltip2.default,
                                        { placement: 'top', title: '\u76EE\u5F55\u89C6\u56FE' },
                                        _react2.default.createElement(_button2.default, { type: this.state.buttontype[0], icon: _react2.default.createElement(_icons.ProfileOutlined, null), onClick: function onClick() {
                                                return _this9.onViewClick(4, 0, 0);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        _tooltip2.default,
                                        { placement: 'top', title: '\u6570\u636E\u6765\u6E90\u89C6\u56FE' },
                                        _react2.default.createElement(_button2.default, { type: this.state.buttontype[1], icon: _react2.default.createElement(_icons.BarChartOutlined, null), onClick: function onClick() {
                                                return _this9.onViewClick(3, 1, 1);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        _tooltip2.default,
                                        { placement: 'top', title: '\u6570\u636E\u7C7B\u578B\u89C6\u56FE' },
                                        _react2.default.createElement(_button2.default, { type: this.state.buttontype[2], icon: _react2.default.createElement(_icons.LineChartOutlined, null), onClick: function onClick() {
                                                return _this9.onViewClick(2, 2, 2);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        _tooltip2.default,
                                        { placement: 'top', title: '\u6570\u636E\u6E90\u89C6\u56FE' },
                                        _react2.default.createElement(_button2.default, { type: this.state.buttontype[3], icon: _react2.default.createElement(_icons.PieChartOutlined, null), onClick: function onClick() {
                                                return _this9.onViewClick(4, 3, 3);
                                            } })
                                    )
                                ),
                                _react2.default.createElement(
                                    _tree2.default,
                                    {
                                        // onExpand={this.onExpand}
                                        // expandedKeys={this.state.expandedKeys}
                                        // autoExpandParent={this.state.autoExpandParent}
                                        // onCheck={this.onCheck}
                                        // checkedKeys={this.state.checkedKeys}
                                        selectedKeys: this.state.selectedKeys,
                                        onSelect: this.onSelect

                                    },
                                    this.renderTreeNodes(this.state.treeData)
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { sm: 20 },
                                _react2.default.createElement(
                                    _card2.default,
                                    { bodyStyle: { padding: "8px", backgroundColor: '#fafafa' } },
                                    _react2.default.createElement(
                                        _row2.default,
                                        null,
                                        _react2.default.createElement(
                                            _col2.default,
                                            { xs: 24, sm: 12 },
                                            _react2.default.createElement(Search, {
                                                style: { maxWidth: 300, marginBottom: '10px' },
                                                placeholder: '\u8BF7\u8F93\u5165...',
                                                enterButton: '\u67E5\u8BE2',
                                                onSearch: function onSearch(value) {
                                                    return _this9.onSearch(value);
                                                }
                                            })
                                        ),
                                        _react2.default.createElement(
                                            _col2.default,
                                            { xs: 24, sm: 12 },
                                            _react2.default.createElement(
                                                _button2.default,
                                                { href: "#/dict/DictValueInfo/" + this.state.dictId + "/null", style: { float: "right", marginRight: "30px" }, type: 'primary' },
                                                '\u65B0\u5EFA\u6570\u636E\u8D44\u4EA7'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(_table2.default, { dataSource: this.state.list, columns: columns, bordered: true })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', onClick: this.showModal },
                    'Open Modal'
                ),
                _react2.default.createElement(
                    _modal2.default,
                    {
                        title: 'Basic Modal',
                        width: '900px',
                        cancelText: '\u53D6\u6D88',
                        okText: '\u786E\u8BA4',
                        visible: this.state.visible,
                        onOk: this.handleOk,
                        onCancel: this.handleCancel
                    },
                    _react2.default.createElement(
                        _card2.default,
                        null,
                        _react2.default.createElement(_table2.default, { dataSource: this.state.tableData, columns: this.state.tableColumn,
                            scroll: { x: 1300 },
                            bordered: true })
                    )
                )
            );
        }
    }]);

    return dataAssetList;
}(_react2.default.Component);

exports.default = dataAssetList;

/***/ }),

/***/ "./src/page/dataAsset/dataAssetRouter.jsx":
/*!************************************************!*\
  !*** ./src/page/dataAsset/dataAssetRouter.jsx ***!
  \************************************************/
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

var _dataAssetList = __webpack_require__(/*! ./dataAssetList.jsx */ "./src/page/dataAsset/dataAssetList.jsx");

var _dataAssetList2 = _interopRequireDefault(_dataAssetList);

var _dataAssetInfo = __webpack_require__(/*! ./dataAssetInfo.jsx */ "./src/page/dataAsset/dataAssetInfo.jsx");

var _dataAssetInfo2 = _interopRequireDefault(_dataAssetInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 页面


var dataAssetRouter = function (_React$Component) {
    _inherits(dataAssetRouter, _React$Component);

    function dataAssetRouter() {
        _classCallCheck(this, dataAssetRouter);

        return _possibleConstructorReturn(this, (dataAssetRouter.__proto__ || Object.getPrototypeOf(dataAssetRouter)).apply(this, arguments));
    }

    _createClass(dataAssetRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dataAsset/dataAssetList', component: _dataAssetList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dataAsset/dataAssetInfo/:dataAsset_id', component: _dataAssetInfo2.default })
            );
        }
    }]);

    return dataAssetRouter;
}(_react2.default.Component);

exports.default = dataAssetRouter;

/***/ }),

/***/ "./src/page/dataAsset/index.jsx":
/*!**************************************!*\
  !*** ./src/page/dataAsset/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@4.9.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@4.9.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import MY from './a.jsx'
var layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 15 }
};
var inoutStyle = {
    width: '130px',
    marginLeft: '10px'
};
var columns = [{
    title: 'url',
    dataIndex: 'name',
    render: function render(text) {
        return _react2.default.createElement(
            'a',
            null,
            text
        );
    }
}, {
    title: 'id',
    dataIndex: 'id'
}, {
    title: 'Address',
    dataIndex: 'address'
}];
var data = [{
    key: '1',
    name: 'John Brown',
    id: 32,
    address: 'New York No. 1 Lake Park'
}, {
    key: '2',
    name: 'Jim Green',
    id: 42,
    address: 'London No. 1 Lake Park'
}, {
    key: '3',
    name: 'Joe Black',
    id: 32,
    address: 'Sidney No. 1 Lake Park'
}, {
    key: '4',
    name: 'Disabled User',
    id: 99,
    address: 'Sidney No. 1 Lake Park'
}]; // rowSelection object indicates the need for row selection
var data2 = [{
    key: '1',
    name: 'aaaa',
    id: 32,
    address: 'New York No. 1 Lake Park'
}, {
    key: '2',
    name: 'bbbb',
    id: 42,
    address: 'London No. 1 Lake Park'
}, {
    key: '3',
    name: 'cccc',
    id: 32,
    address: 'Sidney No. 1 Lake Park'
}, {
    key: '4',
    name: 'cccc',
    id: 99,
    address: 'Sidney No. 1 Lake Park'
}];

exports.default = function () {
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        source = _useState2[0],
        setsource = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        data_source = _useState4[0],
        setdata_source = _useState4[1]; //来源


    var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        library = _useState6[0],
        setlibrary = _useState6[1]; //获取数据库下啦信息


    var _useState7 = (0, _react.useState)([]),
        _useState8 = _slicedToArray(_useState7, 2),
        selectedRowKeys = _useState8[0],
        setselectedRowKeys = _useState8[1]; //控制1表选中


    var _useState9 = (0, _react.useState)([]),
        _useState10 = _slicedToArray(_useState9, 2),
        arr = _useState10[0],
        setarr = _useState10[1]; //整合选中信息


    var _useState11 = (0, _react.useState)([{ 'value': 'mysql1', 'text': 'mysql' }]),
        _useState12 = _slicedToArray(_useState11, 2),
        data_library = _useState12[0],
        setdata_library = _useState12[1]; //数据库


    var _useState13 = (0, _react.useState)([{ 'value': 'mysql2', 'text': 'mysql' }]),
        _useState14 = _slicedToArray(_useState13, 2),
        data_list = _useState14[0],
        setdata_list = _useState14[1]; //数据表


    var _useState15 = (0, _react.useState)('checkbox'),
        _useState16 = _slicedToArray(_useState15, 2),
        selectionType = _useState16[0],
        setSelectionType = _useState16[1]; //表


    var _useState17 = (0, _react.useState)([]),
        _useState18 = _slicedToArray(_useState17, 2),
        G_data_source = _useState18[0],
        setG_data_source = _useState18[1]; //已建模表


    var _useState19 = (0, _react.useState)([]),
        _useState20 = _slicedToArray(_useState19, 2),
        G_list = _useState20[0],
        setG_list = _useState20[1]; //获取内容表


    var _useState21 = (0, _react.useState)([]),
        _useState22 = _slicedToArray(_useState21, 2),
        mylist = _useState22[0],
        setmylist = _useState22[1];

    var _useState23 = (0, _react.useState)(true),
        _useState24 = _slicedToArray(_useState23, 2),
        user = _useState24[0],
        setuser = _useState24[1];

    (0, _react.useEffect)(function () {
        if (user) {
            var mysource = function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var n;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _HttpService2.default.post('/bigdataCon/dataSourceManage/getDataSourceName', JSON.stringify({}), '1').then(function (res) {
                                        console.log(res);
                                        var arr = res.data.list.map(function (item) {
                                            return {
                                                value: item,
                                                text: item
                                            };
                                        });
                                        setmylist(data);
                                        setuser(false);
                                        setdata_source(arr);
                                    });

                                case 2:
                                    n = _context.sent;

                                case 3:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));

                return function mysource() {
                    return _ref.apply(this, arguments);
                };
            }();
            mysource();
        }
        if (source) {
            console.log(1);
            if (library) {
                setmylist(data2);
                setG_data_source([].concat(_toConsumableArray(arr)));
                setselectedRowKeys([]);
            }
            // let mylibrary= async ()=>{
            //     // console.log(1)
            //     // await HttpService.post('/bigdataControl/data4Mysql/getDatabases4Url',JSON.stringify({}),'1').then(res=>{
            //     //     console.log(res.data)
            //     // })
            // }
            // mylibrary()
        }
    }, [source, mylist, library, user]);
    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
            // // setG_data_source()
            setarr(selectedRows);
            setselectedRowKeys(selectedRowKeys);

            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

        getCheckboxProps: function getCheckboxProps(record) {
            return {

                defaultChecked: record.leader === 1 // 配置默认勾选的列 （Bealean）
            };
        }
    };
    var go = function go() {
        setG_data_source(Array.from(new Set([].concat(_toConsumableArray(G_data_source), _toConsumableArray(arr)))));
    };
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _card2.default,
            { title: '\u6570\u636E\u5EFA\u6A21', style: { display: 'flow-root' } },
            _react2.default.createElement(
                _form2.default,
                {
                    name: 'horizontal_login2', layout: 'inline'
                },
                _react2.default.createElement(
                    'div',
                    { style: { width: '45%', float: 'left' } },
                    _react2.default.createElement(_table2.default, {
                        rowSelection: _extends({
                            type: selectionType
                        }, rowSelection),

                        pagination: mylist.length > 10 ? true : false,
                        columns: columns,
                        dataSource: mylist,
                        size: 'small',
                        bordered: true,
                        title: function title() {
                            //表头
                            return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: 'center', paddingBottom: "10px" } },
                                    '\u5DF2\u5EFA\u6A21\u5185\u5BB9'
                                ),
                                _react2.default.createElement(
                                    _form2.default,
                                    {
                                        name: 'horizontal_login', layout: 'inline'
                                    },
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({
                                            style: {
                                                marginBottom: '10px'
                                            }
                                        }, layout, {
                                            label: '\u6570\u636E\u6E90',
                                            name: 'basic',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(
                                            _select2.default,
                                            { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 155, marginLeft: 7 }, onChange: setsource },
                                            data_source.map(function (item, index) {
                                                return _react2.default.createElement(
                                                    Option,
                                                    { value: item.value, key: index },
                                                    item.text
                                                );
                                            })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({}, layout, {
                                            label: '\u6570\u636E\u5E93',
                                            name: 'basic2',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(
                                            _select2.default,
                                            { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 155, marginLeft: 7 }, onChange: setlibrary },
                                            data_library.map(function (item, index) {
                                                return _react2.default.createElement(
                                                    Option,
                                                    { value: item.value, key: index },
                                                    item.text
                                                );
                                            })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({}, layout, {
                                            label: '\u6570\u636E\u8868',
                                            name: 'basic3',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(
                                            _select2.default,
                                            { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 155, marginLeft: 7 }, onChange: function onChange() {
                                                    return setdata_list;
                                                } },
                                            data_list.map(function (item, index) {
                                                return _react2.default.createElement(
                                                    Option,
                                                    { value: item.value, key: index },
                                                    item.text
                                                );
                                            })
                                        )
                                    )
                                )
                            );
                        }
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { paddingTop: '130px' } },
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', onClick: function onClick() {
                                return go();
                            } },
                        '\u2192'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '45%', float: 'right' } },
                    _react2.default.createElement(_table2.default, { dataSource: G_data_source, columns: columns, pagination: G_data_source.length > 10 ? true : false, title: function title() {
                            return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: 'center', paddingBottom: "10px" } },
                                    '\u5DF2\u5EFA\u6A21\u5185\u5BB9'
                                ),
                                _react2.default.createElement(
                                    _form2.default,
                                    {
                                        name: 'horizontal_login', layout: 'inline'
                                    },
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({
                                            style: {
                                                marginBottom: '10px'
                                            }
                                        }, layout, {
                                            label: '\u6570\u636E\u6E90',
                                            name: 'basic',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(_input2.default, { placeholder: 'Basic usage', style: _extends({}, inoutStyle) })
                                    ),
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({}, layout, {
                                            label: '\u6570\u636E\u5E93',
                                            name: 'basic',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(_input2.default, { placeholder: 'Basic usage', style: _extends({}, inoutStyle) })
                                    ),
                                    _react2.default.createElement(
                                        _form2.default.Item,
                                        _extends({}, layout, {
                                            label: '\u6570\u636E\u8868',
                                            name: 'basic',
                                            initialValues: { remember: true },
                                            rules: [{ required: true, message: 'Please input your username!' }]
                                        }),
                                        _react2.default.createElement(_input2.default, { placeholder: 'Basic usage', style: _extends({}, inoutStyle) })
                                    )
                                )
                            );
                        }, bordered: true,
                        size: 'small'
                    })
                )
            )
        )
    );
};

/***/ })

}]);
//# sourceMappingURL=dataAssetRouter.js.map
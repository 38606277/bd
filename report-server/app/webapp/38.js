(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1257:function(e,t,a){e.exports=a.p+"resource/logo.png"},1383:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=P(a(1183)),n=P(a(158)),r=P(a(1185)),i=P(a(1186)),u=P(a(121)),o=P(a(66)),s=P(a(1042)),d=P(a(120)),f=P(a(1049)),c=P(a(1053)),m=P(a(44)),p=P(a(213)),y=P(a(1043)),h=P(a(159)),v=P(a(138)),g=P(a(1045)),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},E=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();a(1182),a(290),a(1184),a(1187),a(453),a(446),a(1041),a(445),a(1050),a(1052),a(157),a(449),a(443),a(450),a(447),a(1044);var _=P(a(1));P(a(5));a(1051);var k=P(a(1188));a(1189),a(1190),a(1191);var w=P(a(1261)),q=P(a(1262)),x=P(a(1251)),C=P(a(1250));a(1192);var S=P(a(1252));function P(e){return e&&e.__esModule?e:{default:e}}a(1256);var O=g.default.Item,D=v.default.Option,R=(h.default.Group,y.default.TextArea),L=p.default.TabPane,V=(m.default.ButtonGroup,new x.default),F=new S.default,N={lineNumbers:!0,mode:{name:"text/x-mysql"},extraKeys:{"Ctrl-Enter":"autocomplete"},theme:"default",hintOptions:{tables:{app:["name","score","birthDate"],version:["name","score","birthDate"],dbos:["name","population","size"]}}},I=window.getServerUrl(),M=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.func_data={},a.tabOnChange=function(e){a.setState({activeKey:e},function(){})},a.openImage=function(){a.setState({visible:!0,imgList:[],totald:0,selectedRowKeys:[]},function(){this.loadModelData()})},a.handleCancel=function(e){a.setState({visible:!1})},a.handleOk=function(e){a.setState({visible:!1})},a.state={action:a.props.match.params.action,qry_id:a.props.match.params.id,inData:[],outData:[],dbList:[],funcClassList:[],activeKey:"1",visible:!1,pageNumd:1,perPaged:10,totald:0,qry_file:null},a.onSaveClick=a.onSaveClick.bind(a),a}var h,x;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,_.default.Component),E(t,[{key:"componentDidMount",value:function(){var e=this;if("update"==this.state.action){C.default.post("reportServer/query/getQueryByID/"+this.state.qry_id,null).then(function(t){"1000"==t.resultCode?(e.setState({inData:t.data.in,outData:t.data.out,qry_file:t.data.qry_file}),e.props.form.setFieldsValue(t.data),e.inParam.setFormValue(e.state.inData),e.outParam.setFormValue(e.state.outData),e.refs.editorsql.codeMirror.setValue(t.data.qry_sql)):c.default.error(t.message)})}F.getDbList().then(function(t){e.setState({dbList:t})}),C.default.post("reportServer/query/getAllQueryClass","").then(function(t){"1000"==t.resultCode?e.setState({funcClassList:t.data}):c.default.error(t.message)})}},{key:"getparmam",value:function(e){return new Promise(e)}},{key:"onSaveClick",value:(h=regeneratorRuntime.mark(function e(t){var a,l,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,l=null,e.prev=1,e.next=4,this.inParam.getFormValue().then(function(e){a=e});case 4:return e.next=6,this.outParam.getFormValue().then(function(e){l=e});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:if(null!=a&&null!=l){e.next=13;break}return e.abrupt("return",!1);case 13:t.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,t){if(!e){var r=n.props.form.getFieldsValue();r.qry_type="procedure",r.in=a,r.out=l,r.qry_sql=n.refs.editorsql.codeMirror.getValue(),r.qry_file=n.state.qry_file,"create"==n.state.action?C.default.post("reportServer/query/createQuery",JSON.stringify(r)).then(function(e){"1000"==e.resultCode?(c.default.success("创建成功！"),n.setState({action:"update"}),n.props.form.setFieldsValue({qry_id:e.data})):c.default.error(e.message)}):"update"==n.state.action&&C.default.post("reportServer/query/updateQuery",JSON.stringify(r)).then(function(e){"1000"==e.resultCode?c.default.success("更新成功！"):c.default.error(e.message)})}});case 15:case"end":return e.stop()}},e,this,[[1,8]])}),x=function(){var e=h.apply(this,arguments);return new Promise(function(t,a){return function l(n,r){try{var i=e[n](r),u=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(u).then(function(e){l("next",e)},function(e){l("throw",e)});t(u)}("next")})},function(e){return x.apply(this,arguments)})},{key:"onGenerateClick",value:function(){var e=this,t=this.refs.editorsql.codeMirror.getValue();V.getSqlInOut(t).then(function(t){if(t.resultCode=1e3){alert(JSON.stringify(t.data)),c.default.success("生成成功!");var a=[],l=[],n=!0,r=!1,i=void 0;try{for(var u,o=t.data[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var s=u.value;if("in"==s.type){var d={key:s.id,qry_id:"",in_id:s.id,in_name:s.name,datatype:s.datatype,dict_id:void 0,dict_name:void 0,authtype_id:void 0,authtype_desc:void 0,validate:""};a.push(d)}else if("out"==s.type){var f={key:s.id,qry_id:"",out_id:s.id,out_name:s.name,datatype:s.datatype,render:void 0,width:100,link:{}};l.push(f)}}}catch(e){r=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}e.setState({inData:a}),e.setState({outData:l}),e.inParam.setFormValue(e.state.inData),e.outParam.setFormValue(e.state.outData)}else c.default.error(t.message)})}},{key:"onAddRowClick",value:function(){"1"==this.state.activeKey?this.inParam.addRows():this.outParam.addRows()}},{key:"onDelRowClick",value:function(){"1"==this.state.activeKey?this.inParam.deleteRows():this.outParam.deleteRows()}},{key:"loadModelData",value:function(){var e=this,t={};t.pageNum=this.state.pageNumd,t.perPage=this.state.perPaged,C.default.post("/reportServer/uploadFile/getAll",JSON.stringify(t)).then(function(t){e.setState({imgList:t.data.list,totald:t.data.total})},function(t){e.setState({imgList:[]})})}},{key:"onPageNumdChange",value:function(e){var t=this;this.setState({pageNumd:e},function(){t.loadModelData()})}},{key:"clickimg",value:function(e,t){this.props.form.setFieldsValue({qry_file:e}),this.setState({visible:!1,qry_file:e})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return _.default.createElement("div",{id:"page-wrapper",style:{background:"#ECECEC",padding:"0px"}},_.default.createElement(s.default,{title:"create"==this.state.action?"创建查询":"编辑查询",bordered:!1,bodyStyle:{padding:"5px"},headStyle:{height:"40px"},extra:_.default.createElement("span",null,"类型：存储过程")},_.default.createElement(g.default,{layout:"inline",onSubmit:this.onSaveClick},_.default.createElement(d.default,{gutter:0},_.default.createElement(o.default,{span:10},_.default.createElement(s.default,{bodyStyle:{padding:"8px"}},_.default.createElement("div",null,_.default.createElement(m.default,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"保存"),_.default.createElement(m.default,{icon:"list",onClick:function(){return window.location="#/query/QueryList"},style:{marginRight:"10px"}},"退出")),_.default.createElement(f.default,{style:{margin:"8px 0 8px 0"}}),_.default.createElement(O,{label:"选择数据库",style:{marginBottom:"5px"}},t("qry_db",{rules:[{required:"true",message:"必须选择数据库"}]})(_.default.createElement(v.default,{setValue:this.form,style:{minWidth:"300px"}},this.state.dbList.map(function(e){return _.default.createElement(D,{key:e.name,value:e.name},e.name)})))),_.default.createElement(d.default,{style:{marginBottom:"5px",marginTop:"15px"}},_.default.createElement("span",{style:{color:"black",fontWeight:"400",position:"absolute",bottom:"2px"}},_.default.createElement("span",{class:"ant-form-item-required"}),"存储过程")),_.default.createElement(k.default,{ref:"editorsql",value:"",style:{height:"600px",width:"450px",border:"2px solid red"},options:N}),_.default.createElement(O,b({label:"游标名称"},{labelCol:{span:24},wrapperCol:{span:24}}),t("qry_cursor_name",{rules:[{required:!0,message:"函数名称是必须的",whitespace:!0}]})(_.default.createElement(y.default,{style:{minWidth:"300px"}}))))),_.default.createElement(o.default,{span:14},_.default.createElement(s.default,{bodyStyle:{padding:"5px"}},_.default.createElement(d.default,null,_.default.createElement(o.default,{span:16},_.default.createElement(O,{label:" 查询类别"},t("class_id",{rules:[{required:!0,message:"函数名称是必须的"}]})(_.default.createElement(v.default,{style:{minWidth:"300px"}},this.state.funcClassList.map(function(e){return _.default.createElement(D,{key:e.class_id,value:e.class_id},e.class_name)}))))),_.default.createElement(o.default,{span:8},_.default.createElement(O,{label:"查询ID"},t("qry_id",{})(_.default.createElement(y.default,{disabled:!0,style:{width:"80px"}}))))),_.default.createElement(d.default,null,_.default.createElement(o.default,{span:16},_.default.createElement(O,{label:" 查询名称"},t("qry_name",{rules:[{required:!0,message:"函数名称是必须的"}]})(_.default.createElement(y.default,{style:{minWidth:"300px"}})))),_.default.createElement(o.default,{span:8},_.default.createElement(O,{label:"使用缓存"},t("cached",{valuePropName:"checked"})(_.default.createElement(u.default,null))))),_.default.createElement(d.default,null,_.default.createElement(o.default,{span:24},_.default.createElement(O,{label:"查询说明",style:{marginLeft:"14px"}},t("qry_desc",{})(_.default.createElement(R,{placeholder:"此函数主要完成什么功能...",autosize:{minRows:1,maxRows:6},style:{width:"490px"}}))))),_.default.createElement(d.default,null,_.default.createElement(o.default,{span:24},_.default.createElement(O,{label:"关联图片",style:{marginLeft:"14px"}},_.default.createElement(y.default,{style:{minWidth:"300px",display:"none"},name:"qry_file",id:"qry_file",value:this.state.qry_file,onClick:this.openImage}),null==this.state.qry_file?_.default.createElement(i.default,{src:a(1257),onClick:this.openImage}):_.default.createElement(i.default,{src:I+"/report/"+this.state.qry_file,onClick:this.openImage})))),_.default.createElement(p.default,{type:"card",style:{marginTop:"15px"},onChange:this.tabOnChange,tabBarExtraContent:_.default.createElement("span",null,_.default.createElement(m.default,{icon:"plus",onClick:function(){return e.onAddRowClick()}}),_.default.createElement(m.default,{icon:"minus",onClick:function(){return e.onDelRowClick()}}))},_.default.createElement(L,{tab:"输入参数",key:"1"},_.default.createElement(w.default,{onRef:function(t){return e.inParam=t},editable:!0})),_.default.createElement(L,{tab:"输出参数",key:"2",forceRender:!0},_.default.createElement(q.default,{onRef:function(t){return e.outParam=t},action:this.state.action,editable:!0})))))))),_.default.createElement("div",null,_.default.createElement(l.default,{title:"图片选择",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},_.default.createElement(r.default,{itemLayout:"horizontal",dataSource:this.state.imgList,renderItem:function(t){return _.default.createElement(r.default.Item,null,_.default.createElement(r.default.Item.Meta,{avatar:_.default.createElement(i.default,{src:I+"/report/"+t.usefilepath}),description:_.default.createElement("a",{onClick:function(){return e.clickimg(t.usefilepath,t.filename)}},t.filename)}))}}),_.default.createElement(n.default,{current:this.state.pageNumd,total:this.state.totald,onChange:function(t){return e.onPageNumdChange(t)}}))))}}]),t}();t.default=M=g.default.create({})(M)}}]);
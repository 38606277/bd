(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},u=n(321);n(323);var c=u.List.Item,f=(u.Checkbox.CheckboxItem,u.Checkbox.AgreeItem,function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"onSubmit",value:function(){}},{key:"onReset",value:function(){this.props.form.resetFields()}},{key:"onOpenChange",value:function(){}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(u.NavBar,{mode:"light",icon:a.default.createElement(u.Icon,{type:"left"}),onLeftClick:function(){return window.location.href="#/"}},"缴费"),a.default.createElement(u.List,{renderFooter:function(){return"户号为7位数字"}},a.default.createElement(u.InputItem,{type:"text",placeholder:"CHX1234567",clear:!0},"编号"),a.default.createElement(u.InputItem,{type:"text",defaultValue:"",placeholder:"张三丰",clear:!0},"用户名称"),a.default.createElement(u.InputItem,{type:"text",defaultValue:"",placeholder:"解放大路120号",clear:!0},"地址"),a.default.createElement(u.InputItem,{type:"text",defaultValue:"",placeholder:"22吨",clear:!0},"本月数量"),a.default.createElement(u.InputItem,{type:"text",defaultValue:"",placeholder:"230",clear:!0},"应缴金额"),a.default.createElement(c,null,a.default.createElement(u.Button,{type:"primary"}," 确定"),a.default.createElement(u.WhiteSpace,null))))}}]),t}());t.default=f}}]);
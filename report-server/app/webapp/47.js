(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n(1)),u=n(444),a=i(n(451)),l=i(n(452));function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.t.bind(null,1403,7))},loading:l.default,delay:3e3}),c=(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(24)]).then(n.t.bind(null,1404,7))},loading:l.default,delay:3e3}),p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){return r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{path:"/upload/UploadList",component:f}),r.default.createElement(u.Route,{path:"/upload/UploadInfo/:id",component:c}),r.default.createElement(u.Redirect,{exact:!0,from:"/upload",to:"/upload/UploadList"}))}}]),t}();t.default=p}}]);
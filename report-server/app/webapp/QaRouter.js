(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["QaRouter"],{

/***/ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@4.9.1@antd/es/divider/style/css.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@4.9.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@4.9.1@antd/es/divider/style/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/_antd@4.9.1@antd/es/divider/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../_css-loader@1.0.0@css-loader!../../../../_postcss-loader@3.0.0@postcss-loader/src!../../../../_sass-loader@7.1.0@sass-loader/lib/loader.js!./index.css */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_antd@4.9.1@antd/es/divider/style/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../_style-loader@0.19.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.19.1@style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_antd@4.9.1@antd/es/divider/style/index.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_antd@4.9.1@antd/es/divider/style/index.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-divider {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n  font-feature-settings: 'tnum';\n  border-top: 1px solid rgba(0, 0, 0, 0.06); }\n\n.ant-divider-vertical {\n  position: relative;\n  top: -0.06em;\n  display: inline-block;\n  height: 0.9em;\n  margin: 0 8px;\n  vertical-align: middle;\n  border-top: 0;\n  border-left: 1px solid rgba(0, 0, 0, 0.06); }\n\n.ant-divider-horizontal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  clear: both;\n  width: 100%;\n  min-width: 100%;\n  margin: 24px 0; }\n\n.ant-divider-horizontal.ant-divider-with-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n  text-align: center;\n  border-top: 0;\n  border-top-color: rgba(0, 0, 0, 0.06); }\n\n.ant-divider-horizontal.ant-divider-with-text::before,\n.ant-divider-horizontal.ant-divider-with-text::after {\n  position: relative;\n  top: 50%;\n  width: 50%;\n  border-top: 1px solid transparent;\n  border-top-color: inherit;\n  border-bottom: 0;\n  -webkit-transform: translateY(50%);\n  -ms-transform: translateY(50%);\n      transform: translateY(50%);\n  content: ''; }\n\n.ant-divider-horizontal.ant-divider-with-text-left::before {\n  top: 50%;\n  width: 5%; }\n\n.ant-divider-horizontal.ant-divider-with-text-left::after {\n  top: 50%;\n  width: 95%; }\n\n.ant-divider-horizontal.ant-divider-with-text-right::before {\n  top: 50%;\n  width: 95%; }\n\n.ant-divider-horizontal.ant-divider-with-text-right::after {\n  top: 50%;\n  width: 5%; }\n\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 1em; }\n\n.ant-divider-dashed {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-style: dashed;\n  border-width: 1px 0 0; }\n\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {\n  border-top: 0; }\n\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::before,\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::after {\n  border-style: dashed none none; }\n\n.ant-divider-vertical.ant-divider-dashed {\n  border-width: 0 0 0 1px; }\n\n.ant-divider-plain.ant-divider-with-text {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: normal;\n  font-size: 14px; }\n\n.ant-divider-rtl {\n  direction: rtl; }\n\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::before {\n  width: 95%; }\n\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::after {\n  width: 5%; }\n\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::before {\n  width: 5%; }\n\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::after {\n  width: 95%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/chat/questions.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/chat/questions.scss ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ant-table-thead .headerRow {\n  text-align: center; }\n\n.ant-table-tbody .headerRow {\n  text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_moment@2.29.1@moment/locale sync recursive ^\\.\\/.*$":
/*!*****************************************************************!*\
  !*** ./node_modules/_moment@2.29.1@moment/locale sync ^\.\/.*$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/_moment@2.29.1@moment/locale/af.js",
	"./af.js": "./node_modules/_moment@2.29.1@moment/locale/af.js",
	"./ar": "./node_modules/_moment@2.29.1@moment/locale/ar.js",
	"./ar-dz": "./node_modules/_moment@2.29.1@moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/_moment@2.29.1@moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/_moment@2.29.1@moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/_moment@2.29.1@moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/_moment@2.29.1@moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/_moment@2.29.1@moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/_moment@2.29.1@moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/_moment@2.29.1@moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/_moment@2.29.1@moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/_moment@2.29.1@moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/_moment@2.29.1@moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/_moment@2.29.1@moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/_moment@2.29.1@moment/locale/ar.js",
	"./az": "./node_modules/_moment@2.29.1@moment/locale/az.js",
	"./az.js": "./node_modules/_moment@2.29.1@moment/locale/az.js",
	"./be": "./node_modules/_moment@2.29.1@moment/locale/be.js",
	"./be.js": "./node_modules/_moment@2.29.1@moment/locale/be.js",
	"./bg": "./node_modules/_moment@2.29.1@moment/locale/bg.js",
	"./bg.js": "./node_modules/_moment@2.29.1@moment/locale/bg.js",
	"./bm": "./node_modules/_moment@2.29.1@moment/locale/bm.js",
	"./bm.js": "./node_modules/_moment@2.29.1@moment/locale/bm.js",
	"./bn": "./node_modules/_moment@2.29.1@moment/locale/bn.js",
	"./bn-bd": "./node_modules/_moment@2.29.1@moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/_moment@2.29.1@moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/_moment@2.29.1@moment/locale/bn.js",
	"./bo": "./node_modules/_moment@2.29.1@moment/locale/bo.js",
	"./bo.js": "./node_modules/_moment@2.29.1@moment/locale/bo.js",
	"./br": "./node_modules/_moment@2.29.1@moment/locale/br.js",
	"./br.js": "./node_modules/_moment@2.29.1@moment/locale/br.js",
	"./bs": "./node_modules/_moment@2.29.1@moment/locale/bs.js",
	"./bs.js": "./node_modules/_moment@2.29.1@moment/locale/bs.js",
	"./ca": "./node_modules/_moment@2.29.1@moment/locale/ca.js",
	"./ca.js": "./node_modules/_moment@2.29.1@moment/locale/ca.js",
	"./cs": "./node_modules/_moment@2.29.1@moment/locale/cs.js",
	"./cs.js": "./node_modules/_moment@2.29.1@moment/locale/cs.js",
	"./cv": "./node_modules/_moment@2.29.1@moment/locale/cv.js",
	"./cv.js": "./node_modules/_moment@2.29.1@moment/locale/cv.js",
	"./cy": "./node_modules/_moment@2.29.1@moment/locale/cy.js",
	"./cy.js": "./node_modules/_moment@2.29.1@moment/locale/cy.js",
	"./da": "./node_modules/_moment@2.29.1@moment/locale/da.js",
	"./da.js": "./node_modules/_moment@2.29.1@moment/locale/da.js",
	"./de": "./node_modules/_moment@2.29.1@moment/locale/de.js",
	"./de-at": "./node_modules/_moment@2.29.1@moment/locale/de-at.js",
	"./de-at.js": "./node_modules/_moment@2.29.1@moment/locale/de-at.js",
	"./de-ch": "./node_modules/_moment@2.29.1@moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/_moment@2.29.1@moment/locale/de-ch.js",
	"./de.js": "./node_modules/_moment@2.29.1@moment/locale/de.js",
	"./dv": "./node_modules/_moment@2.29.1@moment/locale/dv.js",
	"./dv.js": "./node_modules/_moment@2.29.1@moment/locale/dv.js",
	"./el": "./node_modules/_moment@2.29.1@moment/locale/el.js",
	"./el.js": "./node_modules/_moment@2.29.1@moment/locale/el.js",
	"./en-au": "./node_modules/_moment@2.29.1@moment/locale/en-au.js",
	"./en-au.js": "./node_modules/_moment@2.29.1@moment/locale/en-au.js",
	"./en-ca": "./node_modules/_moment@2.29.1@moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/_moment@2.29.1@moment/locale/en-ca.js",
	"./en-gb": "./node_modules/_moment@2.29.1@moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/_moment@2.29.1@moment/locale/en-gb.js",
	"./en-ie": "./node_modules/_moment@2.29.1@moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/_moment@2.29.1@moment/locale/en-ie.js",
	"./en-il": "./node_modules/_moment@2.29.1@moment/locale/en-il.js",
	"./en-il.js": "./node_modules/_moment@2.29.1@moment/locale/en-il.js",
	"./en-in": "./node_modules/_moment@2.29.1@moment/locale/en-in.js",
	"./en-in.js": "./node_modules/_moment@2.29.1@moment/locale/en-in.js",
	"./en-nz": "./node_modules/_moment@2.29.1@moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/_moment@2.29.1@moment/locale/en-nz.js",
	"./en-sg": "./node_modules/_moment@2.29.1@moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/_moment@2.29.1@moment/locale/en-sg.js",
	"./eo": "./node_modules/_moment@2.29.1@moment/locale/eo.js",
	"./eo.js": "./node_modules/_moment@2.29.1@moment/locale/eo.js",
	"./es": "./node_modules/_moment@2.29.1@moment/locale/es.js",
	"./es-do": "./node_modules/_moment@2.29.1@moment/locale/es-do.js",
	"./es-do.js": "./node_modules/_moment@2.29.1@moment/locale/es-do.js",
	"./es-mx": "./node_modules/_moment@2.29.1@moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/_moment@2.29.1@moment/locale/es-mx.js",
	"./es-us": "./node_modules/_moment@2.29.1@moment/locale/es-us.js",
	"./es-us.js": "./node_modules/_moment@2.29.1@moment/locale/es-us.js",
	"./es.js": "./node_modules/_moment@2.29.1@moment/locale/es.js",
	"./et": "./node_modules/_moment@2.29.1@moment/locale/et.js",
	"./et.js": "./node_modules/_moment@2.29.1@moment/locale/et.js",
	"./eu": "./node_modules/_moment@2.29.1@moment/locale/eu.js",
	"./eu.js": "./node_modules/_moment@2.29.1@moment/locale/eu.js",
	"./fa": "./node_modules/_moment@2.29.1@moment/locale/fa.js",
	"./fa.js": "./node_modules/_moment@2.29.1@moment/locale/fa.js",
	"./fi": "./node_modules/_moment@2.29.1@moment/locale/fi.js",
	"./fi.js": "./node_modules/_moment@2.29.1@moment/locale/fi.js",
	"./fil": "./node_modules/_moment@2.29.1@moment/locale/fil.js",
	"./fil.js": "./node_modules/_moment@2.29.1@moment/locale/fil.js",
	"./fo": "./node_modules/_moment@2.29.1@moment/locale/fo.js",
	"./fo.js": "./node_modules/_moment@2.29.1@moment/locale/fo.js",
	"./fr": "./node_modules/_moment@2.29.1@moment/locale/fr.js",
	"./fr-ca": "./node_modules/_moment@2.29.1@moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/_moment@2.29.1@moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/_moment@2.29.1@moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/_moment@2.29.1@moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/_moment@2.29.1@moment/locale/fr.js",
	"./fy": "./node_modules/_moment@2.29.1@moment/locale/fy.js",
	"./fy.js": "./node_modules/_moment@2.29.1@moment/locale/fy.js",
	"./ga": "./node_modules/_moment@2.29.1@moment/locale/ga.js",
	"./ga.js": "./node_modules/_moment@2.29.1@moment/locale/ga.js",
	"./gd": "./node_modules/_moment@2.29.1@moment/locale/gd.js",
	"./gd.js": "./node_modules/_moment@2.29.1@moment/locale/gd.js",
	"./gl": "./node_modules/_moment@2.29.1@moment/locale/gl.js",
	"./gl.js": "./node_modules/_moment@2.29.1@moment/locale/gl.js",
	"./gom-deva": "./node_modules/_moment@2.29.1@moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/_moment@2.29.1@moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/_moment@2.29.1@moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/_moment@2.29.1@moment/locale/gom-latn.js",
	"./gu": "./node_modules/_moment@2.29.1@moment/locale/gu.js",
	"./gu.js": "./node_modules/_moment@2.29.1@moment/locale/gu.js",
	"./he": "./node_modules/_moment@2.29.1@moment/locale/he.js",
	"./he.js": "./node_modules/_moment@2.29.1@moment/locale/he.js",
	"./hi": "./node_modules/_moment@2.29.1@moment/locale/hi.js",
	"./hi.js": "./node_modules/_moment@2.29.1@moment/locale/hi.js",
	"./hr": "./node_modules/_moment@2.29.1@moment/locale/hr.js",
	"./hr.js": "./node_modules/_moment@2.29.1@moment/locale/hr.js",
	"./hu": "./node_modules/_moment@2.29.1@moment/locale/hu.js",
	"./hu.js": "./node_modules/_moment@2.29.1@moment/locale/hu.js",
	"./hy-am": "./node_modules/_moment@2.29.1@moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/_moment@2.29.1@moment/locale/hy-am.js",
	"./id": "./node_modules/_moment@2.29.1@moment/locale/id.js",
	"./id.js": "./node_modules/_moment@2.29.1@moment/locale/id.js",
	"./is": "./node_modules/_moment@2.29.1@moment/locale/is.js",
	"./is.js": "./node_modules/_moment@2.29.1@moment/locale/is.js",
	"./it": "./node_modules/_moment@2.29.1@moment/locale/it.js",
	"./it-ch": "./node_modules/_moment@2.29.1@moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/_moment@2.29.1@moment/locale/it-ch.js",
	"./it.js": "./node_modules/_moment@2.29.1@moment/locale/it.js",
	"./ja": "./node_modules/_moment@2.29.1@moment/locale/ja.js",
	"./ja.js": "./node_modules/_moment@2.29.1@moment/locale/ja.js",
	"./jv": "./node_modules/_moment@2.29.1@moment/locale/jv.js",
	"./jv.js": "./node_modules/_moment@2.29.1@moment/locale/jv.js",
	"./ka": "./node_modules/_moment@2.29.1@moment/locale/ka.js",
	"./ka.js": "./node_modules/_moment@2.29.1@moment/locale/ka.js",
	"./kk": "./node_modules/_moment@2.29.1@moment/locale/kk.js",
	"./kk.js": "./node_modules/_moment@2.29.1@moment/locale/kk.js",
	"./km": "./node_modules/_moment@2.29.1@moment/locale/km.js",
	"./km.js": "./node_modules/_moment@2.29.1@moment/locale/km.js",
	"./kn": "./node_modules/_moment@2.29.1@moment/locale/kn.js",
	"./kn.js": "./node_modules/_moment@2.29.1@moment/locale/kn.js",
	"./ko": "./node_modules/_moment@2.29.1@moment/locale/ko.js",
	"./ko.js": "./node_modules/_moment@2.29.1@moment/locale/ko.js",
	"./ku": "./node_modules/_moment@2.29.1@moment/locale/ku.js",
	"./ku.js": "./node_modules/_moment@2.29.1@moment/locale/ku.js",
	"./ky": "./node_modules/_moment@2.29.1@moment/locale/ky.js",
	"./ky.js": "./node_modules/_moment@2.29.1@moment/locale/ky.js",
	"./lb": "./node_modules/_moment@2.29.1@moment/locale/lb.js",
	"./lb.js": "./node_modules/_moment@2.29.1@moment/locale/lb.js",
	"./lo": "./node_modules/_moment@2.29.1@moment/locale/lo.js",
	"./lo.js": "./node_modules/_moment@2.29.1@moment/locale/lo.js",
	"./lt": "./node_modules/_moment@2.29.1@moment/locale/lt.js",
	"./lt.js": "./node_modules/_moment@2.29.1@moment/locale/lt.js",
	"./lv": "./node_modules/_moment@2.29.1@moment/locale/lv.js",
	"./lv.js": "./node_modules/_moment@2.29.1@moment/locale/lv.js",
	"./me": "./node_modules/_moment@2.29.1@moment/locale/me.js",
	"./me.js": "./node_modules/_moment@2.29.1@moment/locale/me.js",
	"./mi": "./node_modules/_moment@2.29.1@moment/locale/mi.js",
	"./mi.js": "./node_modules/_moment@2.29.1@moment/locale/mi.js",
	"./mk": "./node_modules/_moment@2.29.1@moment/locale/mk.js",
	"./mk.js": "./node_modules/_moment@2.29.1@moment/locale/mk.js",
	"./ml": "./node_modules/_moment@2.29.1@moment/locale/ml.js",
	"./ml.js": "./node_modules/_moment@2.29.1@moment/locale/ml.js",
	"./mn": "./node_modules/_moment@2.29.1@moment/locale/mn.js",
	"./mn.js": "./node_modules/_moment@2.29.1@moment/locale/mn.js",
	"./mr": "./node_modules/_moment@2.29.1@moment/locale/mr.js",
	"./mr.js": "./node_modules/_moment@2.29.1@moment/locale/mr.js",
	"./ms": "./node_modules/_moment@2.29.1@moment/locale/ms.js",
	"./ms-my": "./node_modules/_moment@2.29.1@moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/_moment@2.29.1@moment/locale/ms-my.js",
	"./ms.js": "./node_modules/_moment@2.29.1@moment/locale/ms.js",
	"./mt": "./node_modules/_moment@2.29.1@moment/locale/mt.js",
	"./mt.js": "./node_modules/_moment@2.29.1@moment/locale/mt.js",
	"./my": "./node_modules/_moment@2.29.1@moment/locale/my.js",
	"./my.js": "./node_modules/_moment@2.29.1@moment/locale/my.js",
	"./nb": "./node_modules/_moment@2.29.1@moment/locale/nb.js",
	"./nb.js": "./node_modules/_moment@2.29.1@moment/locale/nb.js",
	"./ne": "./node_modules/_moment@2.29.1@moment/locale/ne.js",
	"./ne.js": "./node_modules/_moment@2.29.1@moment/locale/ne.js",
	"./nl": "./node_modules/_moment@2.29.1@moment/locale/nl.js",
	"./nl-be": "./node_modules/_moment@2.29.1@moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/_moment@2.29.1@moment/locale/nl-be.js",
	"./nl.js": "./node_modules/_moment@2.29.1@moment/locale/nl.js",
	"./nn": "./node_modules/_moment@2.29.1@moment/locale/nn.js",
	"./nn.js": "./node_modules/_moment@2.29.1@moment/locale/nn.js",
	"./oc-lnc": "./node_modules/_moment@2.29.1@moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/_moment@2.29.1@moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/_moment@2.29.1@moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/_moment@2.29.1@moment/locale/pa-in.js",
	"./pl": "./node_modules/_moment@2.29.1@moment/locale/pl.js",
	"./pl.js": "./node_modules/_moment@2.29.1@moment/locale/pl.js",
	"./pt": "./node_modules/_moment@2.29.1@moment/locale/pt.js",
	"./pt-br": "./node_modules/_moment@2.29.1@moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/_moment@2.29.1@moment/locale/pt-br.js",
	"./pt.js": "./node_modules/_moment@2.29.1@moment/locale/pt.js",
	"./ro": "./node_modules/_moment@2.29.1@moment/locale/ro.js",
	"./ro.js": "./node_modules/_moment@2.29.1@moment/locale/ro.js",
	"./ru": "./node_modules/_moment@2.29.1@moment/locale/ru.js",
	"./ru.js": "./node_modules/_moment@2.29.1@moment/locale/ru.js",
	"./sd": "./node_modules/_moment@2.29.1@moment/locale/sd.js",
	"./sd.js": "./node_modules/_moment@2.29.1@moment/locale/sd.js",
	"./se": "./node_modules/_moment@2.29.1@moment/locale/se.js",
	"./se.js": "./node_modules/_moment@2.29.1@moment/locale/se.js",
	"./si": "./node_modules/_moment@2.29.1@moment/locale/si.js",
	"./si.js": "./node_modules/_moment@2.29.1@moment/locale/si.js",
	"./sk": "./node_modules/_moment@2.29.1@moment/locale/sk.js",
	"./sk.js": "./node_modules/_moment@2.29.1@moment/locale/sk.js",
	"./sl": "./node_modules/_moment@2.29.1@moment/locale/sl.js",
	"./sl.js": "./node_modules/_moment@2.29.1@moment/locale/sl.js",
	"./sq": "./node_modules/_moment@2.29.1@moment/locale/sq.js",
	"./sq.js": "./node_modules/_moment@2.29.1@moment/locale/sq.js",
	"./sr": "./node_modules/_moment@2.29.1@moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/_moment@2.29.1@moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/_moment@2.29.1@moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/_moment@2.29.1@moment/locale/sr.js",
	"./ss": "./node_modules/_moment@2.29.1@moment/locale/ss.js",
	"./ss.js": "./node_modules/_moment@2.29.1@moment/locale/ss.js",
	"./sv": "./node_modules/_moment@2.29.1@moment/locale/sv.js",
	"./sv.js": "./node_modules/_moment@2.29.1@moment/locale/sv.js",
	"./sw": "./node_modules/_moment@2.29.1@moment/locale/sw.js",
	"./sw.js": "./node_modules/_moment@2.29.1@moment/locale/sw.js",
	"./ta": "./node_modules/_moment@2.29.1@moment/locale/ta.js",
	"./ta.js": "./node_modules/_moment@2.29.1@moment/locale/ta.js",
	"./te": "./node_modules/_moment@2.29.1@moment/locale/te.js",
	"./te.js": "./node_modules/_moment@2.29.1@moment/locale/te.js",
	"./tet": "./node_modules/_moment@2.29.1@moment/locale/tet.js",
	"./tet.js": "./node_modules/_moment@2.29.1@moment/locale/tet.js",
	"./tg": "./node_modules/_moment@2.29.1@moment/locale/tg.js",
	"./tg.js": "./node_modules/_moment@2.29.1@moment/locale/tg.js",
	"./th": "./node_modules/_moment@2.29.1@moment/locale/th.js",
	"./th.js": "./node_modules/_moment@2.29.1@moment/locale/th.js",
	"./tk": "./node_modules/_moment@2.29.1@moment/locale/tk.js",
	"./tk.js": "./node_modules/_moment@2.29.1@moment/locale/tk.js",
	"./tl-ph": "./node_modules/_moment@2.29.1@moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/_moment@2.29.1@moment/locale/tl-ph.js",
	"./tlh": "./node_modules/_moment@2.29.1@moment/locale/tlh.js",
	"./tlh.js": "./node_modules/_moment@2.29.1@moment/locale/tlh.js",
	"./tr": "./node_modules/_moment@2.29.1@moment/locale/tr.js",
	"./tr.js": "./node_modules/_moment@2.29.1@moment/locale/tr.js",
	"./tzl": "./node_modules/_moment@2.29.1@moment/locale/tzl.js",
	"./tzl.js": "./node_modules/_moment@2.29.1@moment/locale/tzl.js",
	"./tzm": "./node_modules/_moment@2.29.1@moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/_moment@2.29.1@moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/_moment@2.29.1@moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/_moment@2.29.1@moment/locale/tzm.js",
	"./ug-cn": "./node_modules/_moment@2.29.1@moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/_moment@2.29.1@moment/locale/ug-cn.js",
	"./uk": "./node_modules/_moment@2.29.1@moment/locale/uk.js",
	"./uk.js": "./node_modules/_moment@2.29.1@moment/locale/uk.js",
	"./ur": "./node_modules/_moment@2.29.1@moment/locale/ur.js",
	"./ur.js": "./node_modules/_moment@2.29.1@moment/locale/ur.js",
	"./uz": "./node_modules/_moment@2.29.1@moment/locale/uz.js",
	"./uz-latn": "./node_modules/_moment@2.29.1@moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/_moment@2.29.1@moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/_moment@2.29.1@moment/locale/uz.js",
	"./vi": "./node_modules/_moment@2.29.1@moment/locale/vi.js",
	"./vi.js": "./node_modules/_moment@2.29.1@moment/locale/vi.js",
	"./x-pseudo": "./node_modules/_moment@2.29.1@moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/_moment@2.29.1@moment/locale/x-pseudo.js",
	"./yo": "./node_modules/_moment@2.29.1@moment/locale/yo.js",
	"./yo.js": "./node_modules/_moment@2.29.1@moment/locale/yo.js",
	"./zh-cn": "./node_modules/_moment@2.29.1@moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/_moment@2.29.1@moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/_moment@2.29.1@moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/_moment@2.29.1@moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/_moment@2.29.1@moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/_moment@2.29.1@moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/_moment@2.29.1@moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/_moment@2.29.1@moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/_moment@2.29.1@moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/page/chat/answerInfo.jsx":
/*!**************************************!*\
  !*** ./src/page/chat/answerInfo.jsx ***!
  \**************************************/
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

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _QuestionsService = __webpack_require__(/*! ../../service/QuestionsService.jsx */ "./src/service/QuestionsService.jsx");

var _QuestionsService2 = _interopRequireDefault(_QuestionsService);

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

var _index = __webpack_require__(/*! ./index.js */ "./src/page/chat/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var recorder = void 0;
var audio_context = void 0;

var FormItem = _compatible.Form.Item;
var _ques = new _QuestionsService2.default();
var Option = _select2.default.Option;

function playaudio(url) {
  var audio = document.querySelector('audio');
  audio.autoplay = true;
  audio.src = url;
}
window.onload = function init() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    audio_context = new AudioContext();
  } catch (e) {
    alert('No web audio support in this browser!');
  }
};

var AnswerInfo = function (_React$Component) {
  _inherits(AnswerInfo, _React$Component);

  function AnswerInfo(props) {
    _classCallCheck(this, AnswerInfo);

    var _this = _possibleConstructorReturn(this, (AnswerInfo.__proto__ || Object.getPrototypeOf(AnswerInfo)).call(this, props));

    _this.startUserMedia = function (stream) {
      audio_context = new AudioContext();
      var input = audio_context.createMediaStreamSource(stream);
      recorder = new _index.Recorder(input);
    };

    _this.startRecording = function () {
      recorder && recorder.record();
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
    };

    _this.stopRecording = function () {
      recorder && recorder.stop();

      _this.createDownloadLink();
      recorder.clear(); // 清楚录音，如果不清除，可以继续录音
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
    };

    _this.createDownloadLink = function () {
      recorder && recorder.exportWAV(function (blob) {
        console.log(1, blob);
        // var newblob=blob.slice(0,1);
        // var reader = new FileReader();
        // reader.readAsBinaryString(newblob);
        // console.log(reader);
        var formData = new FormData();
        formData.append("file", blob);
        // this.setState({
        //     fileDataBlob: formData
        // });
        _HttpService2.default.post("reportServer/questions/saveAnswerAudio/" + _this.state.answer_id + "/" + _this.state.question_id, formData).then(function (response) {
          if (response.resultCode == "1000") {
            console.log(response.data);
            _this.setState({
              answer_id: response.data
            });
            // window.location.href="#chat/answer/"+response.data+"/"+this.state.question_id;
          }
        });
        if (!blob) {
          console.log('无录音文件');
          return false;
        } else {
          var url = URL.createObjectURL(blob); // 生成的录音文件路径，可直接播放
          playaudio(url);
        }
      });
    };

    _this.state = {
      confirmDirty: false,
      answer_id: _this.props.match.params.aId,
      question_id: _this.props.match.params.qId,
      current: '',
      answer: '',
      //fileDataBlob:null,
      creat_by: localStorge.getStorage('userInfo').userId
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);

    return _this;
  }

  //初始化加载调用方法


  _createClass(AnswerInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (null != this.state.answer_id && '' != this.state.answer_id && 'null' != this.state.answer_id) {
        _ques.getAnswerId(this.state.answer_id).then(function (response) {
          _this2.setState(response.data);
          _this2.props.form.setFieldsValue({
            answer_id: response.data.answer_id,
            question_id: response.data.question_id,
            current: response.data.current,
            answer: response.data.answer,
            creat_by: response.data.creat_by,
            //fileDataBlob:response.data.fileDataBlob,
            confirm: ''
          });
        }, function (errMsg) {
          _this2.setState({});
          localStorge.errorTips(errMsg);
        });
        this.getAudioBlob();
      }

      var getUserMedia_1 = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      getUserMedia_1.call(navigator, { audio: true }, this.startUserMedia, function (e) {
        console.log('No live audio input: ' + e);
      });
      document.getElementById("stop").disabled = true;
    }
  }, {
    key: 'getAudioBlob',
    value: function getAudioBlob() {
      fetch(window.getServerUrl() + 'reportServer/questions/getAnswerAduioBlob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'credentials': JSON.stringify(localStorge.getStorage('userInfo') || '')
        },
        body: this.state.answer_id
      }).then(function (response) {
        if (response.ok) {
          response.blob().then(function (blob) {
            if (blob.size > 0) {
              var downUrl = window.URL.createObjectURL(blob); // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
              playaudio(downUrl);
            } else {
              console.log("文件已丢失，请重新导出下载！");
            }
          });
        }
      });
    }
    // 初始化录音功能

    // 开始录音

    // 停止录音

    // 生成文件

  }, {
    key: 'onValueChange',


    //编辑字段对应值
    value: function onValueChange(e) {
      var name = e.target.name,
          value = e.target.value.trim();
      this.setState(_defineProperty({}, name, value));
      this.props.form.setFieldsValue(_defineProperty({}, name, value));
    }
    //编辑字段对应值

  }, {
    key: 'onSelectChange',
    value: function onSelectChange(name, value) {
      this.setState(_defineProperty({}, name, value));
      this.props.form.setFieldsValue(_defineProperty({}, name, value));
    }
    //提交

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _ques.saveAnswerInfo(_this3.state).then(function (response) {
            if (null != _this3.state.answer_id && '' != _this3.state.answer_id && 'null' != _this3.state.answer_id) {
              alert("修改成功");
            } else {
              alert("保存成功");
            }
            window.location.href = "#chat/answerList/" + _this3.state.question_id;
          }, function (errMsg) {
            _this3.setState({});
            localStorge.errorTips(errMsg);
          });
        }
      });
    }
  }, {
    key: 'handleConfirmBlur',
    value: function handleConfirmBlur(e) {
      var value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;

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
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };

      return _react2.default.createElement(
        'div',
        { id: 'page-wrapper' },
        _react2.default.createElement(
          _card2.default,
          { title: this.state._id == 'null' ? '新建回答' : '编辑回答' },
          _react2.default.createElement(
            _compatible.Form,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 12 },
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, { label: '\u56DE\u7B54' }),
                  getFieldDecorator('answer', {
                    rules: [{ required: true, message: '请输入回答!' }]
                  })(_react2.default.createElement(_input2.default, { type: 'text', name: 'answer', onChange: function onChange(e) {
                      return _this4.onValueChange(e);
                    } }))
                )
              ),
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 12 },
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, { label: '\u662F\u5426\u9ED8\u8BA4' }),
                  _react2.default.createElement(
                    _select2.default,
                    { name: 'current', value: this.state.current.toString(), style: { width: 120 }, onChange: function onChange(value) {
                        return _this4.onSelectChange('current', value);
                      } },
                    _react2.default.createElement(
                      Option,
                      { value: '1' },
                      '\u662F'
                    ),
                    _react2.default.createElement(
                      Option,
                      { value: '0' },
                      '\u5426'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 12 },
                _react2.default.createElement('audio', { controls: true, autoplay: true }),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: this.startRecording, id: 'start', inline: true, size: 'small' },
                  '\u5F00\u59CB\u5F55\u97F3'
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: this.stopRecording, id: 'stop', style: { marginLeft: '5px' }, size: 'small' },
                  '\u505C\u6B62\u5F55\u97F3\u5E76\u4FDD\u5B58'
                )
              )
            ),
            _react2.default.createElement(
              FormItem,
              tailFormItemLayout,
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', htmlType: 'submit' },
                '\u4FDD\u5B58'
              ),
              _react2.default.createElement(
                _button2.default,
                { href: "#/chat/answerList/" + this.state.question_id, type: 'primary', style: { marginLeft: '30px' } },
                '\u8FD4\u56DE'
              )
            )
          )
        )
      );
    }
  }]);

  return AnswerInfo;
}(_react2.default.Component);

exports.default = _compatible.Form.create()(AnswerInfo);

/***/ }),

/***/ "./src/page/chat/answerList.jsx":
/*!**************************************!*\
  !*** ./src/page/chat/answerList.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _QuestionsService = __webpack_require__(/*! ../../service/QuestionsService.jsx */ "./src/service/QuestionsService.jsx");

var _QuestionsService2 = _interopRequireDefault(_QuestionsService);

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.9.1@antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

__webpack_require__(/*! ./questions.scss */ "./src/page/chat/questions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _compatible.Form.Item;
var localStorge = new _LogcalStorge2.default();
var _ques = new _QuestionsService2.default();
var Search = _input2.default.Search;

var AnswerList = function (_React$Component) {
    _inherits(AnswerList, _React$Component);

    function AnswerList(props) {
        _classCallCheck(this, AnswerList);

        var _this = _possibleConstructorReturn(this, (AnswerList.__proto__ || Object.getPrototypeOf(AnswerList)).call(this, props));

        _this.state = {
            list: [],
            pageNum: 1,
            perPage: 10,
            listType: 'list',
            answer: '',
            question_id: _this.props.match.params.qId
        };
        return _this;
    }

    _createClass(AnswerList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadAnswerList();
        }
    }, {
        key: 'loadAnswerList',
        value: function loadAnswerList() {
            var _this2 = this;

            var listParam = {};
            listParam.question_id = this.state.question_id;
            listParam.pageNum = this.state.pageNum;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.answer = this.state.answer;
            }
            _ques.getAnswerList(this.state.question_id, listParam).then(function (response) {
                _this2.setState(response);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
                // _mm.errorTips(errMsg);
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this3 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this3.loadAnswerList();
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
        value: function onSearch(answer) {
            var _this4 = this;

            var listType = answer === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                pageNum: 1,
                answer: answer
            }, function () {
                _this4.loadAnswerList();
            });
        }
    }, {
        key: 'deleteAnswer',
        value: function deleteAnswer(id) {
            var _this5 = this;

            if (confirm('确认删除吗？')) {
                _ques.deleteAnswer(id).then(function (response) {
                    alert("删除成功");
                    _this5.loadAnswerList();
                }, function (errMsg) {
                    alert("删除失败");
                    // _mm.errorTips(errMsg);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var dataSource = this.state.list;
            var columns = [{
                title: 'ID',
                dataIndex: 'answer_id',
                key: 'answer_id',
                className: 'headerRow'
            }, {
                title: '回答',
                dataIndex: 'answer',
                key: 'answer',
                className: 'headerRow'
            },, {
                title: '是否默认',
                dataIndex: 'current',
                key: 'current',
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
                            { to: '/chat/answer/' + record.answer_id + '/' + record.question_id },
                            '\u7F16\u8F91'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this6.deleteAnswer('' + record.answer_id);
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
                    _card2.default,
                    { title: '\u56DE\u7B54\u5217\u8868',
                        extra: _react2.default.createElement(
                            _button2.default,
                            { href: "#/chat/QuestionsList", type: 'primary' },
                            '\u8FD4\u56DE\u95EE\u9898\u5217\u8868'
                        )
                    },
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
                                    return _this6.onSearch(value);
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { xs: 24, sm: 12 },
                            _react2.default.createElement(
                                _button2.default,
                                { href: "#/chat/answer/null/" + this.state.question_id, style: { float: "right", marginRight: "30px" }, type: 'primary' },
                                '\u65B0\u5EFA\u95EE\u9898'
                            )
                        )
                    ),
                    _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false }),
                    _react2.default.createElement(_pagination2.default, { current: this.state.pageNum,
                        total: this.state.totald,
                        onChange: function onChange(pageNum) {
                            return _this6.onPageNumChange(pageNum);
                        } })
                )
            );
        }
    }]);

    return AnswerList;
}(_react2.default.Component);

exports.default = AnswerList;

/***/ }),

/***/ "./src/page/chat/index.js":
/*!********************************!*\
  !*** ./src/page/chat/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recorder = __webpack_require__(/*! ./recorder */ "./src/page/chat/recorder.js");

Object.defineProperty(exports, 'Recorder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_recorder).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/page/chat/qaRouter.jsx":
/*!************************************!*\
  !*** ./src/page/chat/qaRouter.jsx ***!
  \************************************/
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

var _questionsList = __webpack_require__(/*! ./questionsList.jsx */ "./src/page/chat/questionsList.jsx");

var _questionsList2 = _interopRequireDefault(_questionsList);

var _questions = __webpack_require__(/*! ./questions.jsx */ "./src/page/chat/questions.jsx");

var _questions2 = _interopRequireDefault(_questions);

var _answerList = __webpack_require__(/*! ./answerList.jsx */ "./src/page/chat/answerList.jsx");

var _answerList2 = _interopRequireDefault(_answerList);

var _answerInfo = __webpack_require__(/*! ./answerInfo.jsx */ "./src/page/chat/answerInfo.jsx");

var _answerInfo2 = _interopRequireDefault(_answerInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 页面


var QaRouter = function (_React$Component) {
    _inherits(QaRouter, _React$Component);

    function QaRouter() {
        _classCallCheck(this, QaRouter);

        return _possibleConstructorReturn(this, (QaRouter.__proto__ || Object.getPrototypeOf(QaRouter)).apply(this, arguments));
    }

    _createClass(QaRouter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/chat/questions/:qId', component: _questions2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/chat/questionsList', component: _questionsList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/chat/answer/:aId/:qId', component: _answerInfo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/chat/answerList/:qId', component: _answerList2.default }),
                _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/chat', to: '/chat/questionsList' })
            );
        }
    }]);

    return QaRouter;
}(_react2.default.Component);

exports.default = QaRouter;

/***/ }),

/***/ "./src/page/chat/questions.jsx":
/*!*************************************!*\
  !*** ./src/page/chat/questions.jsx ***!
  \*************************************/
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

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@4.9.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@4.9.1@antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _QuestionsService = __webpack_require__(/*! ../../service/QuestionsService.jsx */ "./src/service/QuestionsService.jsx");

var _QuestionsService2 = _interopRequireDefault(_QuestionsService);

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _HttpService = __webpack_require__(/*! ../../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

var _index = __webpack_require__(/*! ./index.js */ "./src/page/chat/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localStorge = new _LogcalStorge2.default();
var recorder = void 0;
var audio_context = void 0;

var FormItem = _compatible.Form.Item;
var _ques = new _QuestionsService2.default();
var Option = _select2.default.Option;

function playaudio(url) {
  var audio = document.querySelector('audio');
  audio.autoplay = true;
  audio.src = url;
}
window.onload = function init() {
  var constraints = { audio: true };
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var microphone = context.createMediaStreamSource(stream);
      var filter = context.createBiquadFilter();
      // microphone -> filter -> destination
      microphone.connect(filter);
      filter.connect(context.destination);
    });
    window.URL = window.URL || window.webkitURL;
    audio_context = new AudioContext();
  } catch (e) {
    alert('No web audio support in this browser!');
  }
};

var Questions = function (_React$Component) {
  _inherits(Questions, _React$Component);

  function Questions(props) {
    _classCallCheck(this, Questions);

    var _this = _possibleConstructorReturn(this, (Questions.__proto__ || Object.getPrototypeOf(Questions)).call(this, props));

    _this.startUserMedia = function (stream) {
      audio_context = new AudioContext();
      var input = audio_context.createMediaStreamSource(stream);
      recorder = new _index.Recorder(input);
    };

    _this.startRecording = function () {
      recorder && recorder.record();
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
    };

    _this.stopRecording = function () {
      recorder && recorder.stop();

      _this.createDownloadLink();
      recorder.clear(); // 清楚录音，如果不清除，可以继续录音
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
    };

    _this.createDownloadLink = function () {
      recorder && recorder.exportWAV(function (blob) {
        console.log(1, blob);
        // var newblob=blob.slice(0,1);
        // var reader = new FileReader();
        // reader.readAsBinaryString(newblob);
        // console.log(reader);
        var formData = new FormData();
        formData.append("file", blob);
        // this.setState({
        //     fileDataBlob: formData
        // });
        _HttpService2.default.post("reportServer/questions/saveQuestionAudio/" + _this.state.ai_question_id, formData).then(function (response) {
          if (response.resultCode == "1000") {
            console.log(response.data);
            _this.setState({
              ai_question_id: response.data
            });
            //window.location.href="#chat/questions/"+response.data;
          }
        });
        if (!blob) {
          console.log('无录音文件');
          return false;
        } else {
          var url = URL.createObjectURL(blob); // 生成的录音文件路径，可直接播放
          playaudio(url);
        }
      });
    };

    _this.state = {
      confirmDirty: false,
      ai_question_id: _this.props.match.params.qId,
      ai_question: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);

    return _this;
  }

  //初始化加载调用方法


  _createClass(Questions, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (null != this.state.ai_question_id && '' != this.state.ai_question_id && 'null' != this.state.ai_question_id) {
        _ques.getQuestionInfo(this.state.ai_question_id).then(function (response) {
          _this2.setState(response.data);
          _this2.props.form.setFieldsValue({
            ai_question: response.data.ai_question,
            roai_question_idleId: response.data.ai_question_id,
            confirm: ''
          });
        }, function (errMsg) {
          _this2.setState({});
          localStorge.errorTips(errMsg);
        });
        this.getAudioBlob();
      }
      var getUserMedia_1 = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      getUserMedia_1.call(navigator, { audio: true }, this.startUserMedia, function (e) {
        console.log('No live audio input: ' + e);
      });
      document.getElementById("stop").disabled = true;
    }
    // 初始化录音功能

    // 开始录音

    // 停止录音

    // 生成文件

  }, {
    key: 'getAudioBlob',
    value: function getAudioBlob() {
      fetch(window.getServerUrl() + 'reportServer/questions/getQuestionAduioBlob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'credentials': JSON.stringify(localStorge.getStorage('userInfo') || '')
        },
        body: this.state.ai_question_id
      }).then(function (response) {
        if (response.ok) {
          response.blob().then(function (blob) {
            if (blob.size > 0) {
              var downUrl = window.URL.createObjectURL(blob); // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
              playaudio(downUrl);
            } else {
              console.log("文件已丢失，请重新导出下载！");
            }
          });
        }
      });
    }
    //编辑字段对应值

  }, {
    key: 'onValueChange',
    value: function onValueChange(e) {
      var name = e.target.name,
          value = e.target.value.trim();
      this.setState(_defineProperty({}, name, value));
      this.props.form.setFieldsValue(_defineProperty({}, name, value));
    }
    //编辑字段对应值

  }, {
    key: 'onSelectChange',
    value: function onSelectChange(name, value) {
      this.setState(_defineProperty({}, name, value));
      this.props.form.setFieldsValue(_defineProperty({}, name, value));
    }
    //提交

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _ques.saveQuestionInfo(_this3.state).then(function (response) {
            if (null != _this3.state.ai_question_id && '' != _this3.state.ai_question_id && 'null' != _this3.state.ai_question_id) {
              alert("修改成功");
            } else {
              alert("保存成功");
            }
            window.location.href = "#chat/questionsList";
          }, function (errMsg) {
            _this3.setState({});
            localStorge.errorTips(errMsg);
          });
        }
      });
    }
  }, {
    key: 'handleConfirmBlur',
    value: function handleConfirmBlur(e) {
      var value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;

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
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };

      return _react2.default.createElement(
        'div',
        { id: 'page-wrapper' },
        _react2.default.createElement(
          _card2.default,
          { title: this.state._id == 'null' ? '新建问题' : '编辑问题' },
          _react2.default.createElement(
            _compatible.Form,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 12 },
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, { label: '\u95EE\u9898\u540D\u79F0' }),
                  getFieldDecorator('ai_question', {
                    rules: [{ required: true, message: '请输入问题名称!' }]
                  })(_react2.default.createElement(_input2.default, { type: 'text', name: 'ai_question', onChange: function onChange(e) {
                      return _this4.onValueChange(e);
                    } }))
                )
              )
            ),
            _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 12 },
                _react2.default.createElement('audio', { controls: true, autoplay: true }),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: this.startRecording, id: 'start', inline: true, size: 'small' },
                  '\u5F00\u59CB\u5F55\u97F3'
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: this.stopRecording, id: 'stop', style: { marginLeft: '5px' }, size: 'small' },
                  '\u505C\u6B62\u5F55\u97F3\u5E76\u4FDD\u5B58'
                )
              )
            ),
            _react2.default.createElement(
              FormItem,
              tailFormItemLayout,
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', htmlType: 'submit' },
                '\u4FDD\u5B58'
              ),
              _react2.default.createElement(
                _button2.default,
                { href: '#/chat/questionsList', type: 'primary', style: { marginLeft: '30px' } },
                '\u8FD4\u56DE'
              )
            )
          )
        )
      );
    }
  }]);

  return Questions;
}(_react2.default.Component);

exports.default = _compatible.Form.create()(Questions);

/***/ }),

/***/ "./src/page/chat/questions.scss":
/*!**************************************!*\
  !*** ./src/page/chat/questions.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./questions.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/page/chat/questions.scss");
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

/***/ "./src/page/chat/questionsList.jsx":
/*!*****************************************!*\
  !*** ./src/page/chat/questionsList.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@4.9.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@4.9.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@4.9.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@4.9.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@4.9.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@4.9.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@4.9.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@4.9.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@4.9.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@4.9.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@4.9.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@4.9.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@4.9.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@4.9.1@antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.2.2@react-router-dom/es/index.js");

var _QuestionsService = __webpack_require__(/*! ../../service/QuestionsService.jsx */ "./src/service/QuestionsService.jsx");

var _QuestionsService2 = _interopRequireDefault(_QuestionsService);

var _pagination = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.9.1@antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _compatible = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/es/index.js");

__webpack_require__(/*! @ant-design/compatible/assets/index.css */ "./node_modules/_@ant-design_compatible@1.0.8@@ant-design/compatible/assets/index.css");

var _LogcalStorge = __webpack_require__(/*! ../../util/LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

__webpack_require__(/*! ./questions.scss */ "./src/page/chat/questions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _compatible.Form.Item;
var localStorge = new _LogcalStorge2.default();
var _ques = new _QuestionsService2.default();
var Search = _input2.default.Search;

var QuestionsList = function (_React$Component) {
    _inherits(QuestionsList, _React$Component);

    function QuestionsList(props) {
        _classCallCheck(this, QuestionsList);

        var _this = _possibleConstructorReturn(this, (QuestionsList.__proto__ || Object.getPrototypeOf(QuestionsList)).call(this, props));

        _this.state = {
            list: [],
            pageNum: 1,
            perPage: 10,
            listType: 'list',
            ai_question: ''
        };
        return _this;
    }

    _createClass(QuestionsList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadQestionList();
        }
    }, {
        key: 'loadQestionList',
        value: function loadQestionList() {
            var _this2 = this;

            var listParam = {};
            listParam.pageNum = this.state.pageNum;
            listParam.perPage = this.state.perPage;
            // 如果是搜索的话，需要传入搜索类型和搜索关键字
            if (this.state.listType === 'search') {
                listParam.ai_question = this.state.ai_question;
            }
            _ques.getQuestionList(listParam).then(function (response) {
                _this2.setState(response);
            }, function (errMsg) {
                _this2.setState({
                    list: []
                });
                // _mm.errorTips(errMsg);
            });
        }
        // 页数发生变化的时候

    }, {
        key: 'onPageNumChange',
        value: function onPageNumChange(pageNum) {
            var _this3 = this;

            this.setState({
                pageNum: pageNum
            }, function () {
                _this3.loadQestionList();
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
        value: function onSearch(ai_question) {
            var _this4 = this;

            var listType = ai_question === '' ? 'list' : 'search';
            this.setState({
                listType: listType,
                pageNum: 1,
                ai_question: ai_question
            }, function () {
                _this4.loadQestionList();
            });
        }
    }, {
        key: 'deleteQuestion',
        value: function deleteQuestion(id) {
            var _this5 = this;

            if (confirm('删除问题时，对应的回答也全部删除。确认删除吗？')) {
                _ques.deleteQuestion(id).then(function (response) {
                    alert("删除成功");
                    _this5.loadQestionList();
                }, function (errMsg) {
                    alert("删除失败");
                    // _mm.errorTips(errMsg);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            this.state.list.map(function (item, index) {
                item.key = index;
            });
            var userinfos = localStorge.getStorage('userInfo');
            var dataSource = this.state.list;
            var self = this;
            var columns = [{
                title: 'ID',
                dataIndex: 'ai_question_id',
                key: 'ai_question_id',
                className: 'headerRow'
            }, {
                title: '问题',
                dataIndex: 'ai_question',
                key: 'ai_question',
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
                            { to: '/chat/Questions/' + record.ai_question_id },
                            '\u7F16\u8F91'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this6.deleteQuestion('' + record.ai_question_id);
                                }, href: 'javascript:;' },
                            '\u5220\u9664'
                        ),
                        _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/chat/AnswerList/' + record.ai_question_id },
                            '\u8BBE\u7F6E\u56DE\u7B54'
                        )
                    );
                }
            }];

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    _card2.default,
                    { title: '\u95EE\u9898\u5217\u8868' },
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
                                    return _this6.onSearch(value);
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { xs: 24, sm: 12 },
                            _react2.default.createElement(
                                _button2.default,
                                { href: '#/chat/Questions/null', style: { float: "right", marginRight: "30px" }, type: 'primary' },
                                '\u65B0\u5EFA\u95EE\u9898'
                            )
                        )
                    ),
                    _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false }),
                    _react2.default.createElement(_pagination2.default, { current: this.state.pageNum,
                        total: this.state.totald,
                        onChange: function onChange(pageNum) {
                            return _this6.onPageNumChange(pageNum);
                        } })
                )
            );
        }
    }]);

    return QuestionsList;
}(_react2.default.Component);

exports.default = QuestionsList;

/***/ }),

/***/ "./src/page/chat/recorder.js":
/*!***********************************!*\
  !*** ./src/page/chat/recorder.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if (( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var g; }
})(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (require, module, exports) {
            "use strict";

            module.exports = require("./recorder").Recorder;
        }, { "./recorder": 2 }], 2: [function (require, module, exports) {
            'use strict';

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Recorder = undefined;

            var _inlineWorker = require('inline-worker');

            var _inlineWorker2 = _interopRequireDefault(_inlineWorker);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Recorder = exports.Recorder = function () {
                function Recorder(source, cfg) {
                    var _this = this;

                    _classCallCheck(this, Recorder);

                    this.config = {
                        bufferLen: 4096,
                        sampleRate: 8000,
                        numChannels: 1,
                        mimeType: 'audio/wav'
                    };
                    this.recording = false;
                    this.callbacks = {
                        getBuffer: [],
                        exportWAV: []
                    };

                    Object.assign(this.config, cfg);
                    this.context = source.context;
                    this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels, this.config.sampleRate);

                    this.node.onaudioprocess = function (e) {
                        if (!_this.recording) return;

                        var buffer = [];
                        for (var channel = 0; channel < _this.config.numChannels; channel++) {
                            buffer.push(e.inputBuffer.getChannelData(channel));
                        }
                        _this.worker.postMessage({
                            command: 'record',
                            buffer: buffer
                        });
                    };

                    source.connect(this.node);
                    this.node.connect(this.context.destination); //this should not be necessary

                    var self = {};
                    this.worker = new _inlineWorker2.default(function () {
                        var recLength = 0,
                            recBuffers = [],
                            sampleRate = undefined,
                            numChannels = undefined;

                        self.onmessage = function (e) {
                            switch (e.data.command) {
                                case 'init':
                                    init(e.data.config);
                                    break;
                                case 'record':
                                    record(e.data.buffer);
                                    break;
                                case 'exportWAV':
                                    exportWAV(e.data.type);
                                    break;
                                case 'getBuffer':
                                    getBuffer();
                                    break;
                                case 'clear':
                                    clear();
                                    break;
                            }
                        };

                        function init(config) {
                            sampleRate = config.sampleRate;
                            numChannels = config.numChannels;
                            initBuffers();
                        }

                        function record(inputBuffer) {
                            for (var channel = 0; channel < numChannels; channel++) {
                                recBuffers[channel].push(inputBuffer[channel]);
                            }
                            recLength += inputBuffer[0].length;
                        }

                        function exportWAV(type) {
                            var buffers = [];
                            for (var channel = 0; channel < numChannels; channel++) {
                                buffers.push(mergeBuffers(recBuffers[channel], recLength));
                            }
                            var interleaved = undefined;

                            interleaved = interleave(buffers[0]);
                            //              console.log(interleaved)


                            if (!interleaved) {
                                self.postMessage({ command: 'exportWAV', data: false });
                            } else {
                                var dataview = encodeWAV(interleaved);
                                var audioBlob = new Blob([dataview], { type: type });
                                //                  console.log(audioBlob)
                                self.postMessage({ command: 'exportWAV', data: audioBlob });
                            }

                            //              if (numChannels === 2) {
                            //                  interleaved = interleave(buffers[0], buffers[1]);
                            //              } else {
                            //                  interleaved = buffers[0];
                            //              }
                        }

                        function getBuffer() {
                            var buffers = [];
                            for (var channel = 0; channel < numChannels; channel++) {
                                buffers.push(mergeBuffers(recBuffers[channel], recLength));
                            }
                            self.postMessage({ command: 'getBuffer', data: buffers });
                        }

                        function clear() {
                            recLength = 0;
                            recBuffers = [];
                            initBuffers();
                        }

                        function initBuffers() {
                            for (var channel = 0; channel < numChannels; channel++) {
                                recBuffers[channel] = [];
                            }
                        }

                        function mergeBuffers(recBuffers, recLength) {
                            var result = new Float32Array(recLength);
                            var offset = 0;
                            for (var i = 0; i < recBuffers.length; i++) {
                                result.set(recBuffers[i], offset);
                                offset += recBuffers[i].length;
                            }
                            return result;
                        }

                        function interleave(inputL) {
                            //              console.log(inputL)

                            //新增
                            var compression = 6; //计算压缩率 
                            var length = inputL.length / compression;

                            //              var length = inputL.length + inputR.length;
                            var result = new Float32Array(length);

                            var valicount = 0;
                            var index = 0,
                                inputIndex = 0;
                            //  console.log(length)
                            while (index < length) {
                                //                  result[index++] = inputL[inputIndex];
                                //                  result[index++] = inputR[inputIndex];
                                //新增
                                result[index] = inputL[inputIndex];
                                //                  console.log(inputL[inputIndex])
                                inputIndex += compression; //每次都跳过3个数据
                                if (result[index] * 32768 >= 4000) {
                                    valicount++;
                                }
                                index++;

                                //                  inputIndex++;
                            }

                            console.log(valicount);
                            return result;
                        }

                        function floatTo16BitPCM(output, offset, input) {
                            for (var i = 0; i < input.length; i++, offset += 2) {
                                var s = Math.max(-1, Math.min(1, input[i]));
                                output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                            }
                        }

                        function writeString(view, offset, string) {
                            for (var i = 0; i < string.length; i++) {
                                view.setUint8(offset + i, string.charCodeAt(i));
                            }
                        }

                        function encodeWAV(samples) {

                            var buffer = new ArrayBuffer(44 + samples.length * 2);
                            var view = new DataView(buffer);

                            //              新加
                            var sampleRate = 8000; //sampleRate;//写入新的采样率

                            /* RIFF identifier */
                            writeString(view, 0, 'RIFF');
                            /* RIFF chunk length */
                            view.setUint32(4, 36 + samples.length * 2, true);
                            /* RIFF type */
                            writeString(view, 8, 'WAVE');
                            /* format chunk identifier */
                            writeString(view, 12, 'fmt ');
                            /* format chunk length */
                            view.setUint32(16, 16, true);
                            /* sample format (raw) */
                            view.setUint16(20, 1, true);
                            /* channel count */
                            view.setUint16(22, numChannels, true);
                            /* sample rate */
                            view.setUint32(24, sampleRate, true);
                            /* byte rate (sample rate * block align) */
                            view.setUint32(28, sampleRate * 4, true);
                            /* block align (channel count * bytes per sample) */
                            view.setUint16(32, numChannels * 2, true);
                            /* bits per sample */
                            view.setUint16(34, 16, true);
                            /* data chunk identifier */
                            writeString(view, 36, 'data');
                            /* data chunk length */
                            view.setUint32(40, samples.length * 2, true);

                            floatTo16BitPCM(view, 44, samples);

                            return view;
                        }
                    }, self);

                    this.worker.postMessage({
                        command: 'init',
                        config: {
                            sampleRate: this.context.sampleRate,
                            numChannels: this.config.numChannels
                        }
                    });

                    this.worker.onmessage = function (e) {
                        var cb = _this.callbacks[e.data.command].pop();
                        if (typeof cb == 'function') {
                            cb(e.data.data);
                        }
                    };
                }

                _createClass(Recorder, [{
                    key: 'record',
                    value: function record() {
                        this.recording = true;
                    }
                }, {
                    key: 'stop',
                    value: function stop() {
                        this.recording = false;
                    }
                }, {
                    key: 'clear',
                    value: function clear() {
                        this.worker.postMessage({ command: 'clear' });
                    }
                }, {
                    key: 'getBuffer',
                    value: function getBuffer(cb) {
                        cb = cb || this.config.callback;
                        if (!cb) throw new Error('Callback not set');

                        this.callbacks.getBuffer.push(cb);

                        this.worker.postMessage({ command: 'getBuffer' });
                    }
                }, {
                    key: 'exportWAV',
                    value: function exportWAV(cb, mimeType) {
                        mimeType = mimeType || this.config.mimeType;
                        cb = cb || this.config.callback;
                        if (!cb) throw new Error('Callback not set');

                        this.callbacks.exportWAV.push(cb);

                        this.worker.postMessage({
                            command: 'exportWAV',
                            type: mimeType
                        });
                    }
                }], [{
                    key: 'forceDownload',
                    value: function forceDownload(blob, filename) {
                        var url = (window.URL || window.webkitURL).createObjectURL(blob);
                        var link = window.document.createElement('a');
                        link.href = url;
                        link.download = filename || 'output.wav';
                        var click = document.createEvent("Event");
                        click.initEvent("click", true, true);
                        link.dispatchEvent(click);
                    }
                }]);

                return Recorder;
            }();

            exports.default = Recorder;
        }, { "inline-worker": 3 }], 3: [function (require, module, exports) {
            "use strict";

            module.exports = require("./inline-worker");
        }, { "./inline-worker": 4 }], 4: [function (require, module, exports) {
            (function (global) {
                "use strict";

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var key in props) {
                            var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
                        }Object.defineProperties(target, props);
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _classCallCheck = function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                };

                var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

                var InlineWorker = function () {
                    function InlineWorker(func, self) {
                        var _this = this;

                        _classCallCheck(this, InlineWorker);

                        if (WORKER_ENABLED) {
                            var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
                            var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));

                            return new global.Worker(url);
                        }

                        this.self = self;
                        this.self.postMessage = function (data) {
                            setTimeout(function () {
                                _this.onmessage({ data: data });
                            }, 0);
                        };

                        setTimeout(function () {
                            func.call(self);
                        }, 0);
                    }

                    _createClass(InlineWorker, {
                        postMessage: {
                            value: function postMessage(data) {
                                var _this = this;

                                setTimeout(function () {
                                    _this.self.onmessage({ data: data });
                                }, 0);
                            }
                        }
                    });

                    return InlineWorker;
                }();

                module.exports = InlineWorker;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}] }, {}, [1])(1);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/_webpack@4.27.1@webpack/buildin/global.js */ "./node_modules/_webpack@4.27.1@webpack/buildin/global.js")))

/***/ }),

/***/ "./src/service/QuestionsService.jsx":
/*!******************************************!*\
  !*** ./src/service/QuestionsService.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HttpService = __webpack_require__(/*! ../util/HttpService.jsx */ "./src/util/HttpService.jsx");

var _HttpService2 = _interopRequireDefault(_HttpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuestionsService = function () {
    function QuestionsService() {
        _classCallCheck(this, QuestionsService);
    }

    _createClass(QuestionsService, [{
        key: 'getQuestionList',

        //问题列表
        value: function getQuestionList(listParam) {
            return _HttpService2.default.post('/reportServer/questions/getQuestionsList', JSON.stringify(listParam));
        }
    }, {
        key: 'getQuestionInfo',
        value: function getQuestionInfo(pid) {
            return _HttpService2.default.post('/reportServer/questions/getQuestionsByID', pid);
        }
    }, {
        key: 'saveQuestionInfo',
        value: function saveQuestionInfo(qInfo) {
            if (qInfo.ai_question_id == 'null') {
                return _HttpService2.default.post('/reportServer/questions/createQuestion', JSON.stringify(qInfo));
            } else {
                return _HttpService2.default.post('/reportServer/questions/updateQuestion', JSON.stringify(qInfo));
            }
        }
    }, {
        key: 'deleteQuestion',
        value: function deleteQuestion(id) {
            return _HttpService2.default.post('/reportServer/questions/deleteQuestion', id);
        }
        //回答列表

    }, {
        key: 'getAnswerList',
        value: function getAnswerList(question_id, param) {
            return _HttpService2.default.post('/reportServer/questions/getAnswerListByqID/' + question_id, JSON.stringify(param));
        }
    }, {
        key: 'getAnswerId',
        value: function getAnswerId(id) {
            return _HttpService2.default.post('/reportServer/questions/getAnswerByID', id);
        }
    }, {
        key: 'saveAnswerInfo',
        value: function saveAnswerInfo(aInfo) {
            if (aInfo.answer_id == 'null') {
                return _HttpService2.default.post('/reportServer/questions/createAnswer', JSON.stringify(aInfo));
            } else {
                return _HttpService2.default.post('/reportServer/questions/updateAnswer', JSON.stringify(aInfo));
            }
        }
    }, {
        key: 'deleteAnswer',
        value: function deleteAnswer(id) {
            return _HttpService2.default.post('/reportServer/questions/deleteAnswer', id);
        }
    }]);

    return QuestionsService;
}();

exports.default = QuestionsService;

/***/ }),

/***/ "./src/util/HttpService.jsx":
/*!**********************************!*\
  !*** ./src/util/HttpService.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! whatwg-fetch */ "./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");

var _LogcalStorge = __webpack_require__(/*! ./LogcalStorge.jsx */ "./src/util/LogcalStorge.jsx");

var _LogcalStorge2 = _interopRequireDefault(_LogcalStorge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var localStorge = new _LogcalStorge2.default();

var HttpService = function () {
    function HttpService() {
        _classCallCheck(this, HttpService);
    }

    _createClass(HttpService, null, [{
        key: 'getBaseUrl',
        value: function getBaseUrl() {

            var url = window.getServerUrl(); //"http://localhost:8080/";
            return url;
        }

        //

    }, {
        key: 'post',
        value: function post(url, param, n) {
            if (undefined == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin' || '' == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin') {
                window.location.href = '#login';
                return new Promise(function (resolve, reject) {});
            } else {
                var myurl = n ? 'http://192.168.206.49:9601/' : HttpService.getBaseUrl();
                console.log(myurl);
                var fullUrl = myurl + url;
                var opts = {
                    method: 'POST',
                    headers: {
                        credentials: JSON.stringify(localStorge.getStorage('userInfo') || '')
                    },
                    body: param
                };

                return fetch(fullUrl, opts).then(function (response) {
                    //console.log(response.json())
                    return response.json();
                }).catch(function (error) {
                    return error.json();
                });
            }
        }
    }, {
        key: 'getFile',
        value: function getFile(url) {
            if (undefined == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin' || '' == localStorge.getStorage('userInfo') && url != '/reportServer/user/encodePwd' && url != '/reportServer/user/Reactlogin') {
                window.location.href = '#login';
                return new Promise(function (resolve, reject) {});
            } else {
                var fullUrl = HttpService.getBaseUrl() + url;
                var opts = {
                    method: 'GET',
                    headers: {
                        credentials: JSON.stringify(localStorge.getStorage('userInfo') || '')
                    }
                };

                return fetch(fullUrl, opts);
            }
        }
    }]);

    return HttpService;
}();

exports.default = HttpService;

/***/ })

}]);
//# sourceMappingURL=QaRouter.js.map
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_12_avancado"] = self["webpackChunk_12_avancado"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _msg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg.js */ \"./src/msg.js\");\n/* provided dependency */ var _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nconsole.log(_.difference([1, 2, 3], [1, 4, 5]));\nconsole.log(_.lastIndexOf([1, 2, 3], 2));\nif (false) {}\nfunction createButton() {\n  const btn = document.createElement('button');\n  btn.innerText = 'Clica aqui!';\n  document.querySelector('body').appendChild(btn);\n  btn.onclick = e => __webpack_require__.e(/*! import() */ \"src_lazy_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy */ \"./src/lazy.js\")).then(module => {\n    const lazy = module.default;\n    lazy();\n  });\n}\ncreateButton();\n\n//# sourceURL=webpack://12_avancado/./src/index.js?");

/***/ }),

/***/ "./src/msg.js":
/*!********************!*\
  !*** ./src/msg.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst print = function () {\n  console.log(\"Olá mundo! 4\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (print);\n\n//# sourceURL=webpack://12_avancado/./src/msg.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
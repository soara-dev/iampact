/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./feature/http.js":
/*!*************************!*\
  !*** ./feature/http.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Http {\n  constructor(config = {}) {\n    this.baseUrl = config.baseUrl || \"\";\n    this.onSuccess = config.onSuccess || (() => {});\n    this.onError = config.onError || (() => {});\n  }\n\n  create(param) {\n    return new Http({\n      baseUrl: param.baseUrl || this.baseUrl,\n      onSuccess: param.onSuccess || this.onSuccess,\n      onError: param.onError || this.onError,\n    });\n  }\n\n  request(param) {\n    const { url, method, data, onSuccess, onError } = param;\n\n    const requestConfig = {\n      url: this.baseUrl ? this.baseUrl + url : url,\n      method: method || \"GET\",\n      data: data || {},\n      onSuccess: onSuccess || this.onSuccess || (() => {}),\n      onError: onError || this.onError || (() => {}),\n    };\n\n    return $.ajax({\n      url: requestConfig.url,\n      method: requestConfig.method,\n      data: requestConfig.data,\n      success: function (res) {\n        requestConfig.onSuccess(res);\n      },\n      error: function (err) {\n        requestConfig.onError(err);\n      },\n    });\n  }\n}\n\nconst httpInstance = new Http();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpInstance);\n\n\n//# sourceURL=webpack://vite/./feature/http.js?");

/***/ }),

/***/ "./feature/validate.js":
/*!*****************************!*\
  !*** ./feature/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validate)\n/* harmony export */ });\nfunction validate() {\n  console.log(\"validate\");\n  return {\n    type: \"VALIDATE\",\n  };\n}\n\n\n//# sourceURL=webpack://vite/./feature/validate.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feature_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature/validate */ \"./feature/validate.js\");\n/* harmony import */ var _feature_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature/http */ \"./feature/http.js\");\n\n\n\nconst iam = {\n  create: _feature_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create,\n  request: _feature_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request,\n  utils: {\n    validate: _feature_validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  },\n};\n\nwindow.iam = iam;\n\n\n//# sourceURL=webpack://vite/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myfunctions_myrange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _myfunctions_multipleof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _myfunctions_doubleMultipleOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _myfunctions_smallBig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _myfunctions_switchFB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _myfunctions_ftw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _myfunctions_ororor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* module decorator */ module = __webpack_require__.hmd(module);
// import "./style.scss";








const fizzBuzz = (val1, val2) => {
  let numFromTo = (0,_myfunctions_myrange__WEBPACK_IMPORTED_MODULE_0__.default)(val1, val2);
  //   multipleOf 7 & 11
  //   doubleMultipleOf(numFromTo, 7, 11, "FooBoo");
  //   multipleOf 3 & 5
  (0,_myfunctions_doubleMultipleOf__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 3, 5, "Fizzbuzz");
  //   multipleOf 3
  (0,_myfunctions_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 3, "Fizz");
  //   multipleOf 5
  (0,_myfunctions_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 5, "Buzz");
  //   multipleOf 7
  //   multipleOf(numFromTo, 7, "Foo");
  //   multipleOf 11
  //   multipleOf(numFromTo, 11, "Boo");
  //   add small and big
  //   smallBig(numFromTo, 16, 95, "Small", "Big");
  //   switch multiple of 3 with multiple of 5
  //   switchFB(numFromTo, "Buzz", "Fizz");
  //   switch multiple of 3 and multiple of 5
  //   ftw(numFromTo, "FTW");
  //   switch multiple of 3 or multiple of 5
  //   ororor(numFromTo, "GG");
  return numFromTo;
};

console.log(fizzBuzz(1, 100));
module.exports = fizzBuzz;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//////////
const myRange = function (from, to) {
  let array = [];
  for (let index = from; index < to + 1; index++) {
    array.push(index);
  }
  return array;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myRange);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//////////
const multipleOf = function (range, num, string) {
  range.map((x, i, arr) => {
    if (x % num === 0) {
      return (arr[i] = x + "-" + string);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multipleOf);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//////////
const doubleMultipleOf = function (range, num1, num2, string) {
  range.map((x, i, arr) => {
    if (x % num1 === 0 && x % num2 === 0) {
      return (arr[i] = x + "-" + string);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doubleMultipleOf);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//////////
const smallBig = function (range, num1, num2, string1, string2) {
  range.map((x, i, arr) => {
    i + 1 < num1 ? (arr[i] = x + "-" + string1) : x;
    i + 1 > num2 ? (arr[i] = x + "-" + string2) : x;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smallBig);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//////////
const switchFB = function (range, string1, string2) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Fizz-Small") {
      return (arr[i] = i + 1 + "-" + string1 + "-Small");
    } else if (x === i + 1 + "-Fizz") {
      return (arr[i] = i + 1 + "-" + string1);
    } else if (x === i + 1 + "-Buzz-Small") {
      return (arr[i] = i + 1 + "-" + string2 + "-Small");
    } else if (x === i + 1 + "-Buzz") {
      return (arr[i] = i + 1 + "-" + string2);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchFB);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/////////
const ftw = function (range, string) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Fizzbuzz") {
      return (arr[i] = i + 1 + "-" + string);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ftw);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/////////
const ororor = function (range, string) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Buzz") {
      return (arr[i] = i + 1 + "-" + string);
    } else if (x === i + 1 + "-Buzz-Small") {
      return (arr[i] = i + 1 + "-" + string + "-Small");
    } else if (x === i + 1 + "-Fizz") {
      return (arr[i] = i + 1 + "-" + string);
    } else if (x === i + 1 + "-Fizz-Small") {
      return (arr[i] = i + 1 + "-" + string + "-Small");
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ororor);


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
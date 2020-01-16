module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bootstrap-styled/v4 */ "@bootstrap-styled/v4");
/* harmony import */ var _bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/vtumanov/repo/decorzo/client/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps() {
    return {
      title: 'Hola',
      name: 'World'
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  render() {
    const {
      title,
      name,
      theme
    } = this.props;
    const state = this.state;
    return __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["CardBlock"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["H3"], {
      className: "d-inline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Hello ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Small"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, title), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Strong"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, name), ", ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["A"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "you"), ", can add ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "1"), " to"), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: "danger",
      pill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["H3"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "$", state.counter)), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Strong"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "by"), " pressing,", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => this.setState({
        counter: state.counter + 1
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "here"), ". This", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Strong"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "module")), " ", "is a basic example with a custom Bootstrap Styled theme.", state.counter >= 1337 && __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      color: "success",
      className: "mt-2",
      uncontrolled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, state.counter === 1337 ? "Congrats" : "We won't tell anyone", ", now click on", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Strong"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "VIEW CODE")), " ", "button to learn how it work"), state.counter > 1500 && __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      color: "warning",
      className: "mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Do you know the", " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_1__["Strong"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Code snippet")), " ", "can be edited in live?")));
  }

}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vtumanov/repo/decorzo/client/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@bootstrap-styled/v4":
/*!***************************************!*\
  !*** external "@bootstrap-styled/v4" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@bootstrap-styled/v4");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
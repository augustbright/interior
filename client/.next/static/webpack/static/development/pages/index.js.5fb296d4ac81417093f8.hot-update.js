webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bootstrap-styled/v4 */ "../node_modules/@bootstrap-styled/v4/dist/@bootstrap-styled/v4.esm.js");






var _jsxFileName = "/home/vtumanov/repo/decorzo/client/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, null, [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                title: 'Hola',
                name: 'World'
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      counter: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          name = _this$props.name,
          theme = _this$props.theme;
      var state = this.state;
      return __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["CardBlock"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["H3"], {
        className: "d-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Hello ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Small"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, title), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, name), ", ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["A"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "you"), ", can add ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Code"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "1"), " to"), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
        color: "danger",
        pill: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["H3"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "$", state.counter)), " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "by"), " pressing,", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "mt-3",
        onClick: function onClick() {
          return _this2.setState({
            counter: state.counter + 1
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "here"), ". This", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Code"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "module")), " ", "is a basic example with a custom Bootstrap Styled theme.", state.counter >= 1337 && __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        className: "mt-2",
        uncontrolled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, state.counter === 1337 ? "Congrats" : "We won't tell anyone", ", now click on", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Code"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "VIEW CODE")), " ", "button to learn how it work"), state.counter > 1500 && __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "warning",
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Do you know the", " ", __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Code"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(_bootstrap_styled_v4__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Code snippet")), " ", "can be edited in live?")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.5fb296d4ac81417093f8.hot-update.js.map
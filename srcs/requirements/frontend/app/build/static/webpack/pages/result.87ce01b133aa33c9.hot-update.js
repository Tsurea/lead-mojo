"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/result",{

/***/ "./src/pages/result/index.tsx":
/*!************************************!*\
  !*** ./src/pages/result/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_result_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/result/result */ \"./src/components/result/result.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/footer */ \"./src/components/footer.tsx\");\n\n\n\nconst NoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_navbar_tsx-_6e620\").then(__webpack_require__.bind(__webpack_require__, /*! @components/navbar */ \"./src/components/navbar.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/result/index.tsx -> \" + \"@components/navbar\"\n        ]\n    },\n    ssr: false\n});\n_c = NoSSR;\n\nfunction ResultPage(param) {\n    let { page, navbar, footer } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoSSR, {\n                page: navbar\n            }, void 0, false, {\n                fileName: \"/app/src/pages/result/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_result_result__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                page: page\n            }, void 0, false, {\n                fileName: \"/app/src/pages/result/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                page: footer\n            }, void 0, false, {\n                fileName: \"/app/src/pages/result/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = ResultPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"NoSSR\");\n$RefreshReg$(_c1, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdWx0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3RDtBQU1yQjtBQUVuQyxNQUFNRSxRQUFRRCxtREFBT0EsQ0FBQyxJQUFNLHNMQUFPOzs7Ozs7SUFBeUJFLEtBQUs7O0tBQTNERDtBQUNrQztBQTBCeEMsU0FBU0csV0FBVyxLQUFtQztRQUFuQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFhLEdBQW5DO0lBQ25CLHFCQUNDOzswQkFDQyw4REFBQ047Z0JBQU1JLE1BQU1DOzs7Ozs7MEJBQ2IsOERBQUNQLGlFQUFlQTtnQkFBQ00sTUFBTUE7Ozs7OzswQkFDdkIsOERBQUNGLDBEQUFNQTtnQkFBQ0UsTUFBTUU7Ozs7Ozs7O0FBR2pCO01BUlNIOztBQVVULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN1bHQvaW5kZXgudHN4P2E4ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3VsdENvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0JztcblxuXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBOb1NTUiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAY29tcG9uZW50cy9uYXZiYXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9mb290ZXInO1xuXG50eXBlIFByb3BzVHlwZSA9IHtcblx0bG9jYWxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IGxvY2FsZSB9OiBQcm9wc1R5cGUpIHtcblx0Y29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYy9sb2NhbGVzJywgYCR7bG9jYWxlfS5qc29uYCk7XG5cdGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcblx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEudG9TdHJpbmcoKSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGFnZTogZGF0YVtcIi9yZXN1bHRcIl0sXG5cdFx0XHRuYXZiYXI6IGRhdGFbXCJuYXZiYXJcIl0sXG5cdFx0XHRmb290ZXI6IGRhdGFbXCJmb290ZXJcIl1cblx0XHR9LFxuXHR9O1xufVxuXG50eXBlIFJlc3VsdFBhZ2VUeXBlID0ge1xuXHRwYWdlOiBhbnk7XG5cdG5hdmJhcjogYW55O1xuXHRmb290ZXI6IGFueTtcbn1cblxuZnVuY3Rpb24gUmVzdWx0UGFnZSh7IHBhZ2UsIG5hdmJhciwgZm9vdGVyfTogUmVzdWx0VHlwZSkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Tm9TU1IgcGFnZT17bmF2YmFyfSAvPlx0XG5cdFx0XHQ8UmVzdWx0Q29tcG9uZW50IHBhZ2U9e3BhZ2V9Lz5cblx0XHRcdDxGb290ZXIgcGFnZT17Zm9vdGVyfSAvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVzdWx0Q29tcG9uZW50IiwiZHluYW1pYyIsIk5vU1NSIiwic3NyIiwiRm9vdGVyIiwiUmVzdWx0UGFnZSIsInBhZ2UiLCJuYXZiYXIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/result/index.tsx\n"));

/***/ })

});
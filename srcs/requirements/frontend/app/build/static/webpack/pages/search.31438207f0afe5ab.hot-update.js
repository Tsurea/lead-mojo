"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./src/pages/search/index.tsx":
/*!************************************!*\
  !*** ./src/pages/search/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/form/form */ \"./src/components/form/form.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/footer */ \"./src/components/footer.tsx\");\n\n\n\nconst NoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_navbar_tsx-_6e622\").then(__webpack_require__.bind(__webpack_require__, /*! @components/navbar */ \"./src/components/navbar.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/search/index.tsx -> \" + \"@components/navbar\"\n        ]\n    },\n    ssr: false\n});\n_c = NoSSR;\n\nfunction SearchProfile(param) {\n    let { page, navbar, footer } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoSSR, {\n                page: navbar\n            }, void 0, false, {\n                fileName: \"/app/src/pages/search/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#F3F7FB] w-full min-h-[calc(100vh-130px)] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    page: page\n                }, void 0, false, {\n                    fileName: \"/app/src/pages/search/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/src/pages/search/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                page: footer\n            }, void 0, false, {\n                fileName: \"/app/src/pages/search/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = SearchProfile;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchProfile);\nvar _c, _c1;\n$RefreshReg$(_c, \"NoSSR\");\n$RefreshReg$(_c1, \"SearchProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUtOO0FBRW5DLE1BQU1FLFFBQVFELG1EQUFPQSxDQUFDLElBQU0sc0xBQU87Ozs7OztJQUF5QkUsS0FBSzs7S0FBM0REO0FBQ2tDO0FBMEJ4QyxTQUFTRyxjQUFjLEtBQW9DO1FBQXBDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQWMsR0FBcEM7SUFDbkIscUJBQ0Y7OzBCQUNDLDhEQUFDTjtnQkFBTUksTUFBTUM7Ozs7OzswQkFDYiw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNWLDZEQUFJQTtvQkFBQ00sTUFBTUE7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDRiwwREFBTUE7Z0JBQUNFLE1BQU1FOzs7Ozs7OztBQUdqQjtNQVZTSDs7QUFZVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD8yZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gXCJAY29tcG9uZW50cy9mb3JtL2Zvcm1cIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9TU1IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQGNvbXBvbmVudHMvbmF2YmFyJyksIHsgc3NyOiBmYWxzZSB9KTtcbmltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvZm9vdGVyJztcblxudHlwZSBQcm9wc1R5cGUgPSB7XG5cdGxvY2FsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBsb2NhbGUgfSA6IFByb3BzVHlwZSkge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2xvY2FsZXMnLCBgJHtsb2NhbGV9Lmpzb25gKTtcbiAgY29uc3QganNvbkRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YS50b1N0cmluZygpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYWdlOiBkYXRhW1wiL3NlYXJjaFwiXSxcblx0ICBuYXZiYXI6IGRhdGFbXCJuYXZiYXJcIl0sXG5cdCAgZm9vdGVyOiBkYXRhW1wiZm9vdGVyXCJdXG4gICAgfSxcbiAgfTtcbn1cblxudHlwZSBTZWFyY2hUeXBlID0ge1xuXHRwYWdlOiBhbnk7XG5cdG5hdmJhcjogYW55O1xuXHRmb290ZXI6IGFueTtcbn1cblxuZnVuY3Rpb24gU2VhcmNoUHJvZmlsZSh7IHBhZ2UsIG5hdmJhciwgZm9vdGVyIH06IFNlYXJjaFR5cGUpIHtcbiAgICByZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Tm9TU1IgcGFnZT17bmF2YmFyfS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjNGN0ZCXSB3LWZ1bGwgbWluLWgtW2NhbGMoMTAwdmgtMTMwcHgpXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxGb3JtIHBhZ2U9e3BhZ2V9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxGb290ZXIgcGFnZT17Zm9vdGVyfS8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJGb3JtIiwiZHluYW1pYyIsIk5vU1NSIiwic3NyIiwiRm9vdGVyIiwiU2VhcmNoUHJvZmlsZSIsInBhZ2UiLCJuYXZiYXIiLCJmb290ZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/index.tsx\n"));

/***/ })

});
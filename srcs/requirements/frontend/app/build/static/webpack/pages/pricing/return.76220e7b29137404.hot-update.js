"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pricing/return",{

/***/ "./src/pages/pricing/return/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/pricing/return/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ReturnPage() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [customerEmail, setCustomerEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        const sessionId = urlParams.get(\"session_id\");\n        fetch(\"/session-status?session_id=\".concat(sessionId)).then((res)=>{\n            console.log(res.json());\n        }).then((data)=>{\n            setStatus(data.status);\n            setCustomerEmail(data.customer_email);\n        });\n    }, []);\n    if (status === \"open\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigate, {\n            to: \"/checkout\"\n        }, void 0, false, {\n            fileName: \"/app/src/pages/pricing/return/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n    if (status === \"complete\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"success\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"We appreciate your business! A confirmation email will be sent to \",\n                    customerEmail,\n                    \". If you have any questions, please email \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:orders@example.com\",\n                        children: \"orders@example.com\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/pages/pricing/return/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 51\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/pages/pricing/return/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/app/src/pages/pricing/return/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    }\n    return null;\n}\n_s(ReturnPage, \"ClZu4OI/xpscNhWnoQDjGbGC4f8=\");\n_c = ReturnPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReturnPage);\nvar _c;\n$RefreshReg$(_c, \"ReturnPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2luZy9yZXR1cm4vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFNUMsU0FBU0U7O0lBQ1AsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5EQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGNBQWNDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUMxQyxNQUFNQyxZQUFZLElBQUlDLGdCQUFnQkw7UUFDdEMsTUFBTU0sWUFBWUYsVUFBVUcsR0FBRyxDQUFDO1FBRWhDQyxNQUFNLDhCQUF3QyxPQUFWRixZQUNqQ0csSUFBSSxDQUFDLENBQUNDO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTtRQUNuQixHQUNHSixJQUFJLENBQUMsQ0FBQ0s7WUFDTGpCLFVBQVVpQixLQUFLbEIsTUFBTTtZQUNyQkcsaUJBQWlCZSxLQUFLQyxjQUFjO1FBQ3RDO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSW5CLFdBQVcsUUFBUTtRQUNyQixxQkFDRSw4REFBQ29CO1lBQVNDLElBQUc7Ozs7OztJQUVqQjtJQUVBLElBQUlyQixXQUFXLFlBQVk7UUFDekIscUJBQ0UsOERBQUNzQjtZQUFRQyxJQUFHO3NCQUNWLDRFQUFDQzs7b0JBQUU7b0JBQ2tFdEI7b0JBQWM7a0NBRXpDLDhEQUFDdUI7d0JBQUVDLE1BQUs7a0NBQTRCOzs7Ozs7b0JBQXNCOzs7Ozs7Ozs7Ozs7SUFJMUc7SUFFQSxPQUFPO0FBQ1Q7R0F0Q1MzQjtLQUFBQTtBQXdDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJpY2luZy9yZXR1cm4vaW5kZXgudHN4P2JjZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUmV0dXJuUGFnZSgpIHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VzdG9tZXJFbWFpbCwgc2V0Q3VzdG9tZXJFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gdXJsUGFyYW1zLmdldCgnc2Vzc2lvbl9pZCcpO1xuXG4gICAgZmV0Y2goYC9zZXNzaW9uLXN0YXR1cz9zZXNzaW9uX2lkPSR7c2Vzc2lvbklkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuanNvbigpKVxuXHRcdCAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhkYXRhLnN0YXR1cyk7XG4gICAgICAgIHNldEN1c3RvbWVyRW1haWwoZGF0YS5jdXN0b21lcl9lbWFpbCk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmIChzdGF0dXMgPT09ICdvcGVuJykge1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2aWdhdGUgdG89XCIvY2hlY2tvdXRcIiAvPlxuICAgIClcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9XCJzdWNjZXNzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGFwcHJlY2lhdGUgeW91ciBidXNpbmVzcyEgQSBjb25maXJtYXRpb24gZW1haWwgd2lsbCBiZSBzZW50IHRvIHtjdXN0b21lckVtYWlsfS5cblxuICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSBlbWFpbCA8YSBocmVmPVwibWFpbHRvOm9yZGVyc0BleGFtcGxlLmNvbVwiPm9yZGVyc0BleGFtcGxlLmNvbTwvYT4uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV0dXJuUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJldHVyblBhZ2UiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjdXN0b21lckVtYWlsIiwic2V0Q3VzdG9tZXJFbWFpbCIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXNzaW9uSWQiLCJnZXQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRhdGEiLCJjdXN0b21lcl9lbWFpbCIsIk5hdmlnYXRlIiwidG8iLCJzZWN0aW9uIiwiaWQiLCJwIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/pricing/return/index.tsx\n"));

/***/ })

});
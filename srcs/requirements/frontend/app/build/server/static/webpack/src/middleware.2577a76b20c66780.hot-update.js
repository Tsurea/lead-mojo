"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    let response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    const sessionCookie = req.cookies.get(\"access_token\");\n    if (!sessionCookie && (req.url.includes(\"/profile\") || req.url.includes(\"/admin\") || req.url.includes(\"/result\"))) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/auth/login\", req.url));\n    }\n    return response;\n}\nconst config = {\n    matcher: [\n        \"/profile/:path*\",\n        \"/admin/:path*\",\n        \"/auth/:path*\",\n        \"/result/:path*\",\n        \"/pricing:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBR2pELFNBQVNDLFdBQVdDLEdBQWdCO0lBQzFDLElBQUlDLFdBQVdILHFEQUFZQSxDQUFDSSxJQUFJO0lBQ2hDLE1BQU1DLGdCQUFnQkgsSUFBSUksT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDdEMsSUFBSSxDQUFDRixpQkFBa0JILENBQUFBLElBQUlNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGVBQWVQLElBQUlNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGFBQWFQLElBQUlNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFVBQVMsR0FBSTtRQUNsSCxPQUFPVCxxREFBWUEsQ0FBQ1UsUUFBUSxDQUFDLElBQUlDLElBQUksZUFBZVQsSUFBSU0sR0FBRztJQUM1RDtJQUNBLE9BQU9MO0FBQ1I7QUFFTyxNQUFNUyxTQUFTO0lBQ2xCQyxTQUFTO1FBQ1g7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNBO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuXHRsZXQgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCgpXG5cdGNvbnN0IHNlc3Npb25Db29raWUgPSByZXEuY29va2llcy5nZXQoJ2FjY2Vzc190b2tlbicpO1xuXHRpZiAoIXNlc3Npb25Db29raWUgJiYgKHJlcS51cmwuaW5jbHVkZXMoXCIvcHJvZmlsZVwiKSB8fCByZXEudXJsLmluY2x1ZGVzKFwiL2FkbWluXCIpIHx8IHJlcS51cmwuaW5jbHVkZXMoJy9yZXN1bHQnKSkpIHtcblx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9hdXRoL2xvZ2luJywgcmVxLnVybCkpXG5cdH1cblx0cmV0dXJuIHJlc3BvbnNlXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgbWF0Y2hlcjogW1xuXHRcdFwiL3Byb2ZpbGUvOnBhdGgqXCIsXG5cdFx0XCIvYWRtaW4vOnBhdGgqXCIsXG5cdFx0XCIvYXV0aC86cGF0aCpcIixcblx0XHRcIi9yZXN1bHQvOnBhdGgqXCIsXG5cdFx0XCIvcHJpY2luZzpwYXRoKlwiXG5cdF1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzcG9uc2UiLCJuZXh0Iiwic2Vzc2lvbkNvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJ1cmwiLCJpbmNsdWRlcyIsInJlZGlyZWN0IiwiVVJMIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});
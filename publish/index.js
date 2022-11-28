/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
let hostname = location.hostname;
location.href = location.origin + `/${hostname.replace(/[\.]/g, "-")}` + location.pathname + location.search + location.hash;

module.exports = __webpack_exports__;
/******/ })()
;
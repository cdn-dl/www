/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
(() => {
    let hostname = location.hostname;
    let prefix = hostname == "127.0.0.1" ? "" : `/${hostname.replace(/[\.]/g, "-")}`;
    if (!prefix)
        return;
    location.href = location.origin + prefix + location.pathname + location.search + location.hash;
})();

module.exports = __webpack_exports__;
/******/ })()
;
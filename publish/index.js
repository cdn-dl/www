var index;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
(() => {
    let hostname = location.hostname;
    let prefix = hostname == "127.0.0.1" ? "" : `/${hostname.replace(/[\.]/g, "-")}`;
    let protocol = "http:" == location.protocol ? "https:" : location.protocol;
    let nurl = protocol + "//" + location.host + prefix + location.pathname + location.search + location.hash;
    if (!prefix)
        return;
    console.info("redirect", nurl);
    location.href = nurl;
})();

})();

index = __webpack_exports__;
/******/ })()
;
var ivideos;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 497:
/***/ ((module) => {

(()=>{var e={9282:(e,t,r)=>{"use strict";var n=r(4155);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i,s,a=r(2136).codes,c=a.ERR_AMBIGUOUS_ARGUMENT,u=a.ERR_INVALID_ARG_TYPE,l=a.ERR_INVALID_ARG_VALUE,f=a.ERR_INVALID_RETURN_VALUE,h=a.ERR_MISSING_ARGS,d=r(5961),p=r(9539).inspect,y=r(9539).types,g=y.isPromise,m=y.isRegExp,b=Object.assign?Object.assign:r(8091).assign,_=Object.is?Object.is:r(609);new Map;function v(){var e=r(9158);i=e.isDeepEqual,s=e.isDeepStrictEqual}var w=!1,E=e.exports=O,S={};function k(e){if(e.message instanceof Error)throw e.message;throw new d(e)}function T(e,t,r,n){if(!r){var o=!1;if(0===t)o=!0,n="No value argument passed to `assert.ok()`";else if(n instanceof Error)throw n;var i=new d({actual:r,expected:!0,message:n,operator:"==",stackStartFn:e});throw i.generatedMessage=o,i}}function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];T.apply(void 0,[O,t.length].concat(t))}E.fail=function e(t,r,o,i,s){var a,c=arguments.length;if(0===c)a="Failed";else if(1===c)o=t,t=void 0;else{if(!1===w){w=!0;var u=n.emitWarning?n.emitWarning:console.warn.bind(console);u("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")}2===c&&(i="!=")}if(o instanceof Error)throw o;var l={actual:t,expected:r,operator:void 0===i?"fail":i,stackStartFn:s||e};void 0!==o&&(l.message=o);var f=new d(l);throw a&&(f.message=a,f.generatedMessage=!0),f},E.AssertionError=d,E.ok=O,E.equal=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");t!=r&&k({actual:t,expected:r,message:n,operator:"==",stackStartFn:e})},E.notEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");t==r&&k({actual:t,expected:r,message:n,operator:"!=",stackStartFn:e})},E.deepEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");void 0===i&&v(),i(t,r)||k({actual:t,expected:r,message:n,operator:"deepEqual",stackStartFn:e})},E.notDeepEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");void 0===i&&v(),i(t,r)&&k({actual:t,expected:r,message:n,operator:"notDeepEqual",stackStartFn:e})},E.deepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");void 0===i&&v(),s(t,r)||k({actual:t,expected:r,message:n,operator:"deepStrictEqual",stackStartFn:e})},E.notDeepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");void 0===i&&v();s(t,r)&&k({actual:t,expected:r,message:n,operator:"notDeepStrictEqual",stackStartFn:e})},E.strictEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");_(t,r)||k({actual:t,expected:r,message:n,operator:"strictEqual",stackStartFn:e})},E.notStrictEqual=function e(t,r,n){if(arguments.length<2)throw new h("actual","expected");_(t,r)&&k({actual:t,expected:r,message:n,operator:"notStrictEqual",stackStartFn:e})};var R=function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.forEach((function(e){e in t&&(void 0!==n&&"string"==typeof n[e]&&m(t[e])&&t[e].test(n[e])?o[e]=n[e]:o[e]=t[e])}))};function A(e,t,r,n,o,i){if(!(r in e)||!s(e[r],t[r])){if(!n){var a=new R(e,o),c=new R(t,o,e),u=new d({actual:a,expected:c,operator:"deepStrictEqual",stackStartFn:i});throw u.actual=e,u.expected=t,u.operator=i.name,u}k({actual:e,expected:t,message:n,operator:i.name,stackStartFn:i})}}function x(e,t,r,n){if("function"!=typeof t){if(m(t))return t.test(e);if(2===arguments.length)throw new u("expected",["Function","RegExp"],t);if("object"!==o(e)||null===e){var s=new d({actual:e,expected:t,message:r,operator:"deepStrictEqual",stackStartFn:n});throw s.operator=n.name,s}var a=Object.keys(t);if(t instanceof Error)a.push("name","message");else if(0===a.length)throw new l("error",t,"may not be an empty object");return void 0===i&&v(),a.forEach((function(o){"string"==typeof e[o]&&m(t[o])&&t[o].test(e[o])||A(e,t,o,r,a,n)})),!0}return void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e)}function C(e){if("function"!=typeof e)throw new u("fn","Function",e);try{e()}catch(e){return e}return S}function j(e){return g(e)||null!==e&&"object"===o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function P(e){return Promise.resolve().then((function(){var t;if("function"==typeof e){if(!j(t=e()))throw new f("instance of Promise","promiseFn",t)}else{if(!j(e))throw new u("promiseFn",["Function","Promise"],e);t=e}return Promise.resolve().then((function(){return t})).then((function(){return S})).catch((function(e){return e}))}))}function L(e,t,r,n){if("string"==typeof r){if(4===arguments.length)throw new u("error",["Object","Error","Function","RegExp"],r);if("object"===o(t)&&null!==t){if(t.message===r)throw new c("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===r)throw new c("error/message",'The error "'.concat(t,'" is identical to the message.'));n=r,r=void 0}else if(null!=r&&"object"!==o(r)&&"function"!=typeof r)throw new u("error",["Object","Error","Function","RegExp"],r);if(t===S){var i="";r&&r.name&&(i+=" (".concat(r.name,")")),i+=n?": ".concat(n):".";var s="rejects"===e.name?"rejection":"exception";k({actual:void 0,expected:r,operator:e.name,message:"Missing expected ".concat(s).concat(i),stackStartFn:e})}if(r&&!x(t,r,n,e))throw t}function I(e,t,r,n){if(t!==S){if("string"==typeof r&&(n=r,r=void 0),!r||x(t,r)){var o=n?": ".concat(n):".",i="doesNotReject"===e.name?"rejection":"exception";k({actual:t,expected:r,operator:e.name,message:"Got unwanted ".concat(i).concat(o,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}function B(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];T.apply(void 0,[B,t.length].concat(t))}E.throws=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];L.apply(void 0,[e,C(t)].concat(n))},E.rejects=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return P(t).then((function(t){return L.apply(void 0,[e,t].concat(n))}))},E.doesNotThrow=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];I.apply(void 0,[e,C(t)].concat(n))},E.doesNotReject=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return P(t).then((function(t){return I.apply(void 0,[e,t].concat(n))}))},E.ifError=function e(t){if(null!=t){var r="ifError got unwanted exception: ";"object"===o(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?r+=t.constructor.name:r+=t.message:r+=p(t);var n=new d({actual:t,expected:null,operator:"ifError",message:r,stackStartFn:e}),i=t.stack;if("string"==typeof i){var s=i.split("\n");s.shift();for(var a=n.stack.split("\n"),c=0;c<s.length;c++){var u=a.indexOf(s[c]);if(-1!==u){a=a.slice(0,u);break}}n.stack="".concat(a.join("\n"),"\n").concat(s.join("\n"))}throw n}},E.strict=b(B,E,{equal:E.strictEqual,deepEqual:E.deepStrictEqual,notEqual:E.notStrictEqual,notDeepEqual:E.notDeepStrictEqual}),E.strict.strict=E.strict},5961:(e,t,r)=>{"use strict";var n=r(4155);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)},c(e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,r){return l=u()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&f(o,r.prototype),o},l.apply(null,arguments)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var p=r(9539).inspect,y=r(2136).codes.ERR_INVALID_ARG_TYPE;function g(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}var m="",b="",_="",v="",w={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function E(e){var t=Object.keys(e),r=Object.create(Object.getPrototypeOf(e));return t.forEach((function(t){r[t]=e[t]})),Object.defineProperty(r,"message",{value:e.message}),r}function S(e){return p(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}function k(e,t,r){var o="",i="",s=0,a="",c=!1,u=S(e),l=u.split("\n"),f=S(t).split("\n"),h=0,p="";if("strictEqual"===r&&"object"===d(e)&&"object"===d(t)&&null!==e&&null!==t&&(r="strictEqualObject"),1===l.length&&1===f.length&&l[0]!==f[0]){var y=l[0].length+f[0].length;if(y<=10){if(!("object"===d(e)&&null!==e||"object"===d(t)&&null!==t||0===e&&0===t))return"".concat(w[r],"\n\n")+"".concat(l[0]," !== ").concat(f[0],"\n")}else if("strictEqualObject"!==r){if(y<(n.stderr&&n.stderr.isTTY?n.stderr.columns:80)){for(;l[0][h]===f[0][h];)h++;h>2&&(p="\n  ".concat(function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var r=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,r-e.length)}(" ",h),"^"),h=0)}}}for(var E=l[l.length-1],k=f[f.length-1];E===k&&(h++<2?a="\n  ".concat(E).concat(a):o=E,l.pop(),f.pop(),0!==l.length&&0!==f.length);)E=l[l.length-1],k=f[f.length-1];var T=Math.max(l.length,f.length);if(0===T){var O=u.split("\n");if(O.length>30)for(O[26]="".concat(m,"...").concat(v);O.length>27;)O.pop();return"".concat(w.notIdentical,"\n\n").concat(O.join("\n"),"\n")}h>3&&(a="\n".concat(m,"...").concat(v).concat(a),c=!0),""!==o&&(a="\n  ".concat(o).concat(a),o="");var R=0,A=w[r]+"\n".concat(b,"+ actual").concat(v," ").concat(_,"- expected").concat(v),x=" ".concat(m,"...").concat(v," Lines skipped");for(h=0;h<T;h++){var C=h-s;if(l.length<h+1)C>1&&h>2&&(C>4?(i+="\n".concat(m,"...").concat(v),c=!0):C>3&&(i+="\n  ".concat(f[h-2]),R++),i+="\n  ".concat(f[h-1]),R++),s=h,o+="\n".concat(_,"-").concat(v," ").concat(f[h]),R++;else if(f.length<h+1)C>1&&h>2&&(C>4?(i+="\n".concat(m,"...").concat(v),c=!0):C>3&&(i+="\n  ".concat(l[h-2]),R++),i+="\n  ".concat(l[h-1]),R++),s=h,i+="\n".concat(b,"+").concat(v," ").concat(l[h]),R++;else{var j=f[h],P=l[h],L=P!==j&&(!g(P,",")||P.slice(0,-1)!==j);L&&g(j,",")&&j.slice(0,-1)===P&&(L=!1,P+=","),L?(C>1&&h>2&&(C>4?(i+="\n".concat(m,"...").concat(v),c=!0):C>3&&(i+="\n  ".concat(l[h-2]),R++),i+="\n  ".concat(l[h-1]),R++),s=h,i+="\n".concat(b,"+").concat(v," ").concat(P),o+="\n".concat(_,"-").concat(v," ").concat(j),R+=2):(i+=o,o="",1!==C&&0!==h||(i+="\n  ".concat(P),R++))}if(R>20&&h<T-2)return"".concat(A).concat(x,"\n").concat(i,"\n").concat(m,"...").concat(v).concat(o,"\n")+"".concat(m,"...").concat(v)}return"".concat(A).concat(c?x:"","\n").concat(i).concat(o).concat(a).concat(p)}var T=function(e){function t(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),"object"!==d(e)||null===e)throw new y("options","Object",e);var o=e.message,i=e.operator,c=e.stackStartFn,u=e.actual,l=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=o)r=s(this,h(t).call(this,String(o)));else if(n.stderr&&n.stderr.isTTY&&(n.stderr&&n.stderr.getColorDepth&&1!==n.stderr.getColorDepth()?(m="[34m",b="[32m",v="[39m",_="[31m"):(m="",b="",v="",_="")),"object"===d(u)&&null!==u&&"object"===d(l)&&null!==l&&"stack"in u&&u instanceof Error&&"stack"in l&&l instanceof Error&&(u=E(u),l=E(l)),"deepStrictEqual"===i||"strictEqual"===i)r=s(this,h(t).call(this,k(u,l,i)));else if("notDeepStrictEqual"===i||"notStrictEqual"===i){var p=w[i],g=S(u).split("\n");if("notStrictEqual"===i&&"object"===d(u)&&null!==u&&(p=w.notStrictEqualObject),g.length>30)for(g[26]="".concat(m,"...").concat(v);g.length>27;)g.pop();r=1===g.length?s(this,h(t).call(this,"".concat(p," ").concat(g[0]))):s(this,h(t).call(this,"".concat(p,"\n\n").concat(g.join("\n"),"\n")))}else{var T=S(u),O="",R=w[i];"notDeepEqual"===i||"notEqual"===i?(T="".concat(w[i],"\n\n").concat(T)).length>1024&&(T="".concat(T.slice(0,1021),"...")):(O="".concat(S(l)),T.length>512&&(T="".concat(T.slice(0,509),"...")),O.length>512&&(O="".concat(O.slice(0,509),"...")),"deepEqual"===i||"equal"===i?T="".concat(R,"\n\n").concat(T,"\n\nshould equal\n\n"):O=" ".concat(i," ").concat(O)),r=s(this,h(t).call(this,"".concat(T).concat(O)))}return Error.stackTraceLimit=f,r.generatedMessage=!o,Object.defineProperty(a(r),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),r.code="ERR_ASSERTION",r.actual=u,r.expected=l,r.operator=i,Error.captureStackTrace&&Error.captureStackTrace(a(r),c),r.stack,r.name="AssertionError",s(r)}var r,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,c=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:p.custom,value:function(e,t){return p(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},t,{customInspect:!1,depth:0}))}}],c&&i(r.prototype,c),u&&i(r,u),t}(c(Error));e.exports=T},2136:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var a,c,u={};function l(e,t,r){r||(r=Error);var n=function(r){function n(r,s,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),c=o(this,i(n).call(this,function(e,r,n){return"string"==typeof t?t:t(e,r,n)}(r,s,a))),c.code=e,c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,r),n}(r);u[e]=n}function f(e,t){if(Array.isArray(e)){var r=e.length;return e=e.map((function(e){return String(e)})),r>2?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}l("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),l("ERR_INVALID_ARG_TYPE",(function(e,t,o){var i,s,c,u;if(void 0===a&&(a=r(9282)),a("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(s="not ",t.substr(!c||c<0?0:+c,s.length)===s)?(i="must not be",t=t.replace(/^not /,"")):i="must be",function(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}(e," argument"))u="The ".concat(e," ").concat(i," ").concat(f(t,"type"));else{var l=function(e,t,r){return"number"!=typeof r&&(r=0),!(r+t.length>e.length)&&-1!==e.indexOf(t,r)}(e,".")?"property":"argument";u='The "'.concat(e,'" ').concat(l," ").concat(i," ").concat(f(t,"type"))}return u+=". Received type ".concat(n(o))}),TypeError),l("ERR_INVALID_ARG_VALUE",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===c&&(c=r(9539));var o=c.inspect(t);return o.length>128&&(o="".concat(o.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(n,". Received ").concat(o)}),TypeError,RangeError),l("ERR_INVALID_RETURN_VALUE",(function(e,t,r){var o;return o=r&&r.constructor&&r.constructor.name?"instance of ".concat(r.constructor.name):"type ".concat(n(r)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(o,".")}),TypeError),l("ERR_MISSING_ARGS",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];void 0===a&&(a=r(9282)),a(t.length>0,"At least one arg needs to be specified");var o="The ",i=t.length;switch(t=t.map((function(e){return'"'.concat(e,'"')})),i){case 1:o+="".concat(t[0]," argument");break;case 2:o+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:o+=t.slice(0,i-1).join(", "),o+=", and ".concat(t[i-1]," arguments")}return"".concat(o," must be specified")}),TypeError),e.exports.codes=u},9158:(e,t,r)=>{"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=void 0!==/a/g.flags,s=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},a=function(e){var t=[];return e.forEach((function(e,r){return t.push([r,e])})),t},c=Object.is?Object.is:r(609),u=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},l=Number.isNaN?Number.isNaN:r(360);function f(e){return e.call.bind(e)}var h=f(Object.prototype.hasOwnProperty),d=f(Object.prototype.propertyIsEnumerable),p=f(Object.prototype.toString),y=r(9539).types,g=y.isAnyArrayBuffer,m=y.isArrayBufferView,b=y.isDate,_=y.isMap,v=y.isRegExp,w=y.isSet,E=y.isNativeError,S=y.isBoxedPrimitive,k=y.isNumberObject,T=y.isStringObject,O=y.isBooleanObject,R=y.isBigIntObject,A=y.isSymbolObject,x=y.isFloat32Array,C=y.isFloat64Array;function j(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r<48||r>57)return!0}return 10===e.length&&e>=Math.pow(2,32)}function P(e){return Object.keys(e).filter(j).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function L(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0}function I(e,t,r,n){if(e===t)return 0!==e||(!r||c(e,t));if(r){if("object"!==o(e))return"number"==typeof e&&l(e)&&l(t);if("object"!==o(t)||null===e||null===t)return!1;if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==o(e))return(null===t||"object"!==o(t))&&e==t;if(null===t||"object"!==o(t))return!1}var s,a,u,f,h=p(e);if(h!==p(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;var d=P(e),y=P(t);return d.length===y.length&&M(e,t,r,n,1,d)}if("[object Object]"===h&&(!_(e)&&_(t)||!w(e)&&w(t)))return!1;if(b(e)){if(!b(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(v(e)){if(!v(t)||(u=e,f=t,!(i?u.source===f.source&&u.flags===f.flags:RegExp.prototype.toString.call(u)===RegExp.prototype.toString.call(f))))return!1}else if(E(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name)return!1}else{if(m(e)){if(r||!x(e)&&!C(e)){if(!function(e,t){return e.byteLength===t.byteLength&&0===L(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}(e,t))return!1}else if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0}(e,t))return!1;var j=P(e),I=P(t);return j.length===I.length&&M(e,t,r,n,0,j)}if(w(e))return!(!w(t)||e.size!==t.size)&&M(e,t,r,n,2);if(_(e))return!(!_(t)||e.size!==t.size)&&M(e,t,r,n,3);if(g(e)){if(a=t,(s=e).byteLength!==a.byteLength||0!==L(new Uint8Array(s),new Uint8Array(a)))return!1}else if(S(e)&&!function(e,t){return k(e)?k(t)&&c(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t)):T(e)?T(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t):O(e)?O(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t):R(e)?R(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t):A(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}(e,t))return!1}return M(e,t,r,n,0)}function B(e,t){return t.filter((function(t){return d(e,t)}))}function M(e,t,r,n,o,i){if(5===arguments.length){i=Object.keys(e);var s=Object.keys(t);if(i.length!==s.length)return!1}for(var a=0;a<i.length;a++)if(!h(t,i[a]))return!1;if(r&&5===arguments.length){var c=u(e);if(0!==c.length){var l=0;for(a=0;a<c.length;a++){var f=c[a];if(d(e,f)){if(!d(t,f))return!1;i.push(f),l++}else if(d(t,f))return!1}var p=u(t);if(c.length!==p.length&&B(t,p).length!==l)return!1}else{var y=u(t);if(0!==y.length&&0!==B(t,y).length)return!1}}if(0===i.length&&(0===o||1===o&&0===e.length||0===e.size))return!0;if(void 0===n)n={val1:new Map,val2:new Map,position:0};else{var g=n.val1.get(e);if(void 0!==g){var m=n.val2.get(t);if(void 0!==m)return g===m}n.position++}n.val1.set(e,n.position),n.val2.set(t,n.position);var b=q(e,t,r,i,n,o);return n.val1.delete(e),n.val2.delete(t),b}function F(e,t,r,n){for(var o=s(e),i=0;i<o.length;i++){var a=o[i];if(I(t,a,r,n))return e.delete(a),!0}return!1}function N(e){switch(o(e)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":e=+e;case"number":if(l(e))return!1}return!0}function D(e,t,r){var n=N(r);return null!=n?n:t.has(n)&&!e.has(n)}function U(e,t,r,n,o){var i=N(r);if(null!=i)return i;var s=t.get(i);return!(void 0===s&&!t.has(i)||!I(n,s,!1,o))&&(!e.has(i)&&I(n,s,!1,o))}function z(e,t,r,n,o,i){for(var a=s(e),c=0;c<a.length;c++){var u=a[c];if(I(r,u,o,i)&&I(n,t.get(u),o,i))return e.delete(u),!0}return!1}function q(e,t,r,i,c,u){var l=0;if(2===u){if(!function(e,t,r,n){for(var i=null,a=s(e),c=0;c<a.length;c++){var u=a[c];if("object"===o(u)&&null!==u)null===i&&(i=new Set),i.add(u);else if(!t.has(u)){if(r)return!1;if(!D(e,t,u))return!1;null===i&&(i=new Set),i.add(u)}}if(null!==i){for(var l=s(t),f=0;f<l.length;f++){var h=l[f];if("object"===o(h)&&null!==h){if(!F(i,h,r,n))return!1}else if(!r&&!e.has(h)&&!F(i,h,r,n))return!1}return 0===i.size}return!0}(e,t,r,c))return!1}else if(3===u){if(!function(e,t,r,i){for(var s=null,c=a(e),u=0;u<c.length;u++){var l=n(c[u],2),f=l[0],h=l[1];if("object"===o(f)&&null!==f)null===s&&(s=new Set),s.add(f);else{var d=t.get(f);if(void 0===d&&!t.has(f)||!I(h,d,r,i)){if(r)return!1;if(!U(e,t,f,h,i))return!1;null===s&&(s=new Set),s.add(f)}}}if(null!==s){for(var p=a(t),y=0;y<p.length;y++){var g=n(p[y],2),m=(f=g[0],g[1]);if("object"===o(f)&&null!==f){if(!z(s,e,f,m,r,i))return!1}else if(!(r||e.has(f)&&I(e.get(f),m,!1,i)||z(s,e,f,m,!1,i)))return!1}return 0===s.size}return!0}(e,t,r,c))return!1}else if(1===u)for(;l<e.length;l++){if(!h(e,l)){if(h(t,l))return!1;for(var f=Object.keys(e);l<f.length;l++){var d=f[l];if(!h(t,d)||!I(e[d],t[d],r,c))return!1}return f.length===Object.keys(t).length}if(!h(t,l)||!I(e[l],t[l],r,c))return!1}for(l=0;l<i.length;l++){var p=i[l];if(!I(e[p],t[p],r,c))return!1}return!0}e.exports={isDeepEqual:function(e,t){return I(e,t,false)},isDeepStrictEqual:function(e,t){return I(e,t,true)}}},7109:(e,t,r)=>{var n;e.exports=function(){if(!n){try{n=r(1227)("follow-redirects")}catch(e){}"function"!=typeof n&&(n=function(){})}n.apply(null,arguments)}},2629:(e,t,r)=>{var n=r(8575),o=n.URL,i=r(8501),s=r(9267),a=r(2830).Writable,c=r(9282),u=r(7109),l=["abort","aborted","connect","error","socket","timeout"],f=Object.create(null);l.forEach((function(e){f[e]=function(t,r,n){this._redirectable.emit(e,t,r,n)}}));var h=E("ERR_INVALID_URL","Invalid URL",TypeError),d=E("ERR_FR_REDIRECTION_FAILURE","Redirected request failed"),p=E("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),y=E("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),g=E("ERR_STREAM_WRITE_AFTER_END","write after end");function m(e,t){a.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],t&&this.on("response",t);var r=this;this._onNativeResponse=function(e){r._processResponse(e)},this._performRequest()}function b(e){var t={maxRedirects:21,maxBodyLength:10485760},r={};return Object.keys(e).forEach((function(i){var s=i+":",a=r[s]=e[i],l=t[i]=Object.create(a);Object.defineProperties(l,{request:{value:function(e,i,a){if(k(e)){var l;try{l=v(new o(e))}catch(t){l=n.parse(e)}if(!k(l.protocol))throw new h({input:e});e=l}else o&&e instanceof o?e=v(e):(a=i,i=e,e={protocol:s});return T(i)&&(a=i,i=null),(i=Object.assign({maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e,i)).nativeProtocols=r,k(i.host)||k(i.hostname)||(i.hostname="::1"),c.equal(i.protocol,s,"protocol mismatch"),u("options",i),new m(i,a)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,t,r){var n=l.request(e,t,r);return n.end(),n},configurable:!0,enumerable:!0,writable:!0}})})),t}function _(){}function v(e){var t={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(t.port=Number(e.port)),t}function w(e,t){var r;for(var n in t)e.test(n)&&(r=t[n],delete t[n]);return null==r?void 0:String(r).trim()}function E(e,t,r){function n(r){Error.captureStackTrace(this,this.constructor),Object.assign(this,r||{}),this.code=e,this.message=this.cause?t+": "+this.cause.message:t}return n.prototype=new(r||Error),n.prototype.constructor=n,n.prototype.name="Error ["+e+"]",n}function S(e){for(var t of l)e.removeListener(t,f[t]);e.on("error",_),e.abort()}function k(e){return"string"==typeof e||e instanceof String}function T(e){return"function"==typeof e}m.prototype=Object.create(a.prototype),m.prototype.abort=function(){S(this._currentRequest),this.emit("abort")},m.prototype.write=function(e,t,r){if(this._ending)throw new g;if(!k(e)&&("object"!=typeof(n=e)||!("length"in n)))throw new TypeError("data should be a string, Buffer or Uint8Array");var n;T(t)&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new y),this.abort()):r&&r()},m.prototype.end=function(e,t,r){if(T(e)?(r=e,e=t=null):T(t)&&(r=t,t=null),e){var n=this,o=this._currentRequest;this.write(e,t,(function(){n._ended=!0,o.end(null,null,r)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,r)},m.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},m.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},m.prototype.setTimeout=function(e,t){var r=this;function n(t){t.setTimeout(e),t.removeListener("timeout",t.destroy),t.addListener("timeout",t.destroy)}function o(t){r._timeout&&clearTimeout(r._timeout),r._timeout=setTimeout((function(){r.emit("timeout"),i()}),e),n(t)}function i(){r._timeout&&(clearTimeout(r._timeout),r._timeout=null),r.removeListener("abort",i),r.removeListener("error",i),r.removeListener("response",i),t&&r.removeListener("timeout",t),r.socket||r._currentRequest.removeListener("socket",o)}return t&&this.on("timeout",t),this.socket?o(this.socket):this._currentRequest.once("socket",o),this.on("socket",n),this.on("abort",i),this.on("error",i),this.on("response",i),this},["flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){m.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}})),["aborted","connection","socket"].forEach((function(e){Object.defineProperty(m.prototype,e,{get:function(){return this._currentRequest[e]}})})),m.prototype._sanitizeOptions=function(e){if(e.headers||(e.headers={}),e.host&&(e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var t=e.path.indexOf("?");t<0?e.pathname=e.path:(e.pathname=e.path.substring(0,t),e.search=e.path.substring(t))}},m.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var r=e.slice(0,-1);this._options.agent=this._options.agents[r]}var o=this._currentRequest=t.request(this._options,this._onNativeResponse);for(var i of(o._redirectable=this,l))o.on(i,f[i]);if(this._currentUrl=/^\//.test(this._options.path)?n.format(this._options):this._options.path,this._isRedirect){var s=0,a=this,c=this._requestBodyBuffers;!function e(t){if(o===a._currentRequest)if(t)a.emit("error",t);else if(s<c.length){var r=c[s++];o.finished||o.write(r.data,r.encoding,e)}else a._ended&&o.end()}()}}else this.emit("error",new TypeError("Unsupported protocol "+e))},m.prototype._processResponse=function(e){var t=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:t});var r=e.headers.location;if(!r||!1===this._options.followRedirects||t<300||t>=400)return e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),void(this._requestBodyBuffers=[]);if(S(this._currentRequest),e.destroy(),++this._redirectCount>this._options.maxRedirects)this.emit("error",new p);else{var o,i=this._options.beforeRedirect;i&&(o=Object.assign({Host:e.req.getHeader("host")},this._options.headers));var s=this._options.method;((301===t||302===t)&&"POST"===this._options.method||303===t&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",this._requestBodyBuffers=[],w(/^content-/i,this._options.headers));var a,l=w(/^host$/i,this._options.headers),f=n.parse(this._currentUrl),h=l||f.host,y=/^\w+:/.test(r)?this._currentUrl:n.format(Object.assign(f,{host:h}));try{a=n.resolve(y,r)}catch(e){return void this.emit("error",new d({cause:e}))}u("redirecting to",a),this._isRedirect=!0;var g=n.parse(a);if(Object.assign(this._options,g),(g.protocol!==f.protocol&&"https:"!==g.protocol||g.host!==h&&!function(e,t){c(k(e)&&k(t));var r=e.length-t.length-1;return r>0&&"."===e[r]&&e.endsWith(t)}(g.host,h))&&w(/^(?:authorization|cookie)$/i,this._options.headers),T(i)){var m={headers:e.headers,statusCode:t},b={url:y,method:s,headers:o};try{i(this._options,m,b)}catch(e){return void this.emit("error",e)}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){this.emit("error",new d({cause:e}))}}},e.exports=b({http:i,https:s}),e.exports.wrap=b},9742:(e,t)=>{"use strict";t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=c(e),s=i[0],a=i[1],u=new o(function(e,t,r){return 3*(t+r)/4-r}(0,s,a)),l=0,f=a>0?s-4:s;for(r=0;r<f;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[l++]=255&t);1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t);return u},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],s=16383,a=0,c=n-o;a<c;a+=s)i.push(u(e,a,a+s>c?c:a+s));1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var o,i,s=[],a=t;a<n;a+=3)o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},4505:(e,t,r)=>{"use strict";var n=r(8764).Buffer,o=r(4155),i=r(9282),s=r(2292),a=r(405),c=r(7948),u=r(1619);for(var l in u)t[l]=u[l];t.NONE=0,t.DEFLATE=1,t.INFLATE=2,t.GZIP=3,t.GUNZIP=4,t.DEFLATERAW=5,t.INFLATERAW=6,t.UNZIP=7;function f(e){if("number"!=typeof e||e<t.DEFLATE||e>t.UNZIP)throw new TypeError("Bad argument");this.dictionary=null,this.err=0,this.flush=0,this.init_done=!1,this.level=0,this.memLevel=0,this.mode=e,this.strategy=0,this.windowBits=0,this.write_in_progress=!1,this.pending_close=!1,this.gzip_id_bytes_read=0}f.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,i(this.init_done,"close before init"),i(this.mode<=t.UNZIP),this.mode===t.DEFLATE||this.mode===t.GZIP||this.mode===t.DEFLATERAW?a.deflateEnd(this.strm):this.mode!==t.INFLATE&&this.mode!==t.GUNZIP&&this.mode!==t.INFLATERAW&&this.mode!==t.UNZIP||c.inflateEnd(this.strm),this.mode=t.NONE,this.dictionary=null)},f.prototype.write=function(e,t,r,n,o,i,s){return this._write(!0,e,t,r,n,o,i,s)},f.prototype.writeSync=function(e,t,r,n,o,i,s){return this._write(!1,e,t,r,n,o,i,s)},f.prototype._write=function(e,r,s,a,c,u,l,f){if(i.equal(arguments.length,8),i(this.init_done,"write before init"),i(this.mode!==t.NONE,"already finalized"),i.equal(!1,this.write_in_progress,"write already in progress"),i.equal(!1,this.pending_close,"close is pending"),this.write_in_progress=!0,i.equal(!1,void 0===r,"must provide flush value"),this.write_in_progress=!0,r!==t.Z_NO_FLUSH&&r!==t.Z_PARTIAL_FLUSH&&r!==t.Z_SYNC_FLUSH&&r!==t.Z_FULL_FLUSH&&r!==t.Z_FINISH&&r!==t.Z_BLOCK)throw new Error("Invalid flush value");if(null==s&&(s=n.alloc(0),c=0,a=0),this.strm.avail_in=c,this.strm.input=s,this.strm.next_in=a,this.strm.avail_out=f,this.strm.output=u,this.strm.next_out=l,this.flush=r,!e)return this._process(),this._checkError()?this._afterSync():void 0;var h=this;return o.nextTick((function(){h._process(),h._after()})),this},f.prototype._afterSync=function(){var e=this.strm.avail_out,t=this.strm.avail_in;return this.write_in_progress=!1,[t,e]},f.prototype._process=function(){var e=null;switch(this.mode){case t.DEFLATE:case t.GZIP:case t.DEFLATERAW:this.err=a.deflate(this.strm,this.flush);break;case t.UNZIP:switch(this.strm.avail_in>0&&(e=this.strm.next_in),this.gzip_id_bytes_read){case 0:if(null===e)break;if(31!==this.strm.input[e]){this.mode=t.INFLATE;break}if(this.gzip_id_bytes_read=1,e++,1===this.strm.avail_in)break;case 1:if(null===e)break;139===this.strm.input[e]?(this.gzip_id_bytes_read=2,this.mode=t.GUNZIP):this.mode=t.INFLATE;break;default:throw new Error("invalid number of gzip magic number bytes read")}case t.INFLATE:case t.GUNZIP:case t.INFLATERAW:for(this.err=c.inflate(this.strm,this.flush),this.err===t.Z_NEED_DICT&&this.dictionary&&(this.err=c.inflateSetDictionary(this.strm,this.dictionary),this.err===t.Z_OK?this.err=c.inflate(this.strm,this.flush):this.err===t.Z_DATA_ERROR&&(this.err=t.Z_NEED_DICT));this.strm.avail_in>0&&this.mode===t.GUNZIP&&this.err===t.Z_STREAM_END&&0!==this.strm.next_in[0];)this.reset(),this.err=c.inflate(this.strm,this.flush);break;default:throw new Error("Unknown mode "+this.mode)}},f.prototype._checkError=function(){switch(this.err){case t.Z_OK:case t.Z_BUF_ERROR:if(0!==this.strm.avail_out&&this.flush===t.Z_FINISH)return this._error("unexpected end of file"),!1;break;case t.Z_STREAM_END:break;case t.Z_NEED_DICT:return null==this.dictionary?this._error("Missing dictionary"):this._error("Bad dictionary"),!1;default:return this._error("Zlib error"),!1}return!0},f.prototype._after=function(){if(this._checkError()){var e=this.strm.avail_out,t=this.strm.avail_in;this.write_in_progress=!1,this.callback(t,e),this.pending_close&&this.close()}},f.prototype._error=function(e){this.strm.msg&&(e=this.strm.msg),this.onerror(e,this.err),this.write_in_progress=!1,this.pending_close&&this.close()},f.prototype.init=function(e,r,n,o,s){i(4===arguments.length||5===arguments.length,"init(windowBits, level, memLevel, strategy, [dictionary])"),i(e>=8&&e<=15,"invalid windowBits"),i(r>=-1&&r<=9,"invalid compression level"),i(n>=1&&n<=9,"invalid memlevel"),i(o===t.Z_FILTERED||o===t.Z_HUFFMAN_ONLY||o===t.Z_RLE||o===t.Z_FIXED||o===t.Z_DEFAULT_STRATEGY,"invalid strategy"),this._init(r,e,n,o,s),this._setDictionary()},f.prototype.params=function(){throw new Error("deflateParams Not supported")},f.prototype.reset=function(){this._reset(),this._setDictionary()},f.prototype._init=function(e,r,n,o,i){switch(this.level=e,this.windowBits=r,this.memLevel=n,this.strategy=o,this.flush=t.Z_NO_FLUSH,this.err=t.Z_OK,this.mode!==t.GZIP&&this.mode!==t.GUNZIP||(this.windowBits+=16),this.mode===t.UNZIP&&(this.windowBits+=32),this.mode!==t.DEFLATERAW&&this.mode!==t.INFLATERAW||(this.windowBits=-1*this.windowBits),this.strm=new s,this.mode){case t.DEFLATE:case t.GZIP:case t.DEFLATERAW:this.err=a.deflateInit2(this.strm,this.level,t.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case t.INFLATE:case t.GUNZIP:case t.INFLATERAW:case t.UNZIP:this.err=c.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}this.err!==t.Z_OK&&this._error("Init error"),this.dictionary=i,this.write_in_progress=!1,this.init_done=!0},f.prototype._setDictionary=function(){if(null!=this.dictionary){switch(this.err=t.Z_OK,this.mode){case t.DEFLATE:case t.DEFLATERAW:this.err=a.deflateSetDictionary(this.strm,this.dictionary)}this.err!==t.Z_OK&&this._error("Failed to set dictionary")}},f.prototype._reset=function(){switch(this.err=t.Z_OK,this.mode){case t.DEFLATE:case t.DEFLATERAW:case t.GZIP:this.err=a.deflateReset(this.strm);break;case t.INFLATE:case t.INFLATERAW:case t.GUNZIP:this.err=c.inflateReset(this.strm)}this.err!==t.Z_OK&&this._error("Failed to reset stream")},t.Zlib=f},2635:(e,t,r)=>{"use strict";var n=r(4155),o=r(8764).Buffer,i=r(2830).Transform,s=r(4505),a=r(9539),c=r(9282).ok,u=r(8764).kMaxLength,l="Cannot create final Buffer. It would be larger than 0x"+u.toString(16)+" bytes";s.Z_MIN_WINDOWBITS=8,s.Z_MAX_WINDOWBITS=15,s.Z_DEFAULT_WINDOWBITS=15,s.Z_MIN_CHUNK=64,s.Z_MAX_CHUNK=1/0,s.Z_DEFAULT_CHUNK=16384,s.Z_MIN_MEMLEVEL=1,s.Z_MAX_MEMLEVEL=9,s.Z_DEFAULT_MEMLEVEL=8,s.Z_MIN_LEVEL=-1,s.Z_MAX_LEVEL=9,s.Z_DEFAULT_LEVEL=s.Z_DEFAULT_COMPRESSION;for(var f=Object.keys(s),h=0;h<f.length;h++){var d=f[h];d.match(/^Z/)&&Object.defineProperty(t,d,{enumerable:!0,value:s[d],writable:!1})}for(var p={Z_OK:s.Z_OK,Z_STREAM_END:s.Z_STREAM_END,Z_NEED_DICT:s.Z_NEED_DICT,Z_ERRNO:s.Z_ERRNO,Z_STREAM_ERROR:s.Z_STREAM_ERROR,Z_DATA_ERROR:s.Z_DATA_ERROR,Z_MEM_ERROR:s.Z_MEM_ERROR,Z_BUF_ERROR:s.Z_BUF_ERROR,Z_VERSION_ERROR:s.Z_VERSION_ERROR},y=Object.keys(p),g=0;g<y.length;g++){var m=y[g];p[p[m]]=m}function b(e,t,r){var n=[],i=0;function s(){for(var t;null!==(t=e.read());)n.push(t),i+=t.length;e.once("readable",s)}function a(){var t,s=null;i>=u?s=new RangeError(l):t=o.concat(n,i),n=[],e.close(),r(s,t)}e.on("error",(function(t){e.removeListener("end",a),e.removeListener("readable",s),r(t)})),e.on("end",a),e.end(t),s()}function _(e,t){if("string"==typeof t&&(t=o.from(t)),!o.isBuffer(t))throw new TypeError("Not a string or buffer");var r=e._finishFlushFlag;return e._processChunk(t,r)}function v(e){if(!(this instanceof v))return new v(e);A.call(this,e,s.DEFLATE)}function w(e){if(!(this instanceof w))return new w(e);A.call(this,e,s.INFLATE)}function E(e){if(!(this instanceof E))return new E(e);A.call(this,e,s.GZIP)}function S(e){if(!(this instanceof S))return new S(e);A.call(this,e,s.GUNZIP)}function k(e){if(!(this instanceof k))return new k(e);A.call(this,e,s.DEFLATERAW)}function T(e){if(!(this instanceof T))return new T(e);A.call(this,e,s.INFLATERAW)}function O(e){if(!(this instanceof O))return new O(e);A.call(this,e,s.UNZIP)}function R(e){return e===s.Z_NO_FLUSH||e===s.Z_PARTIAL_FLUSH||e===s.Z_SYNC_FLUSH||e===s.Z_FULL_FLUSH||e===s.Z_FINISH||e===s.Z_BLOCK}function A(e,r){var n=this;if(this._opts=e=e||{},this._chunkSize=e.chunkSize||t.Z_DEFAULT_CHUNK,i.call(this,e),e.flush&&!R(e.flush))throw new Error("Invalid flush flag: "+e.flush);if(e.finishFlush&&!R(e.finishFlush))throw new Error("Invalid flush flag: "+e.finishFlush);if(this._flushFlag=e.flush||s.Z_NO_FLUSH,this._finishFlushFlag=void 0!==e.finishFlush?e.finishFlush:s.Z_FINISH,e.chunkSize&&(e.chunkSize<t.Z_MIN_CHUNK||e.chunkSize>t.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+e.chunkSize);if(e.windowBits&&(e.windowBits<t.Z_MIN_WINDOWBITS||e.windowBits>t.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+e.windowBits);if(e.level&&(e.level<t.Z_MIN_LEVEL||e.level>t.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+e.level);if(e.memLevel&&(e.memLevel<t.Z_MIN_MEMLEVEL||e.memLevel>t.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+e.memLevel);if(e.strategy&&e.strategy!=t.Z_FILTERED&&e.strategy!=t.Z_HUFFMAN_ONLY&&e.strategy!=t.Z_RLE&&e.strategy!=t.Z_FIXED&&e.strategy!=t.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+e.strategy);if(e.dictionary&&!o.isBuffer(e.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._handle=new s.Zlib(r);var a=this;this._hadError=!1,this._handle.onerror=function(e,r){x(a),a._hadError=!0;var n=new Error(e);n.errno=r,n.code=t.codes[r],a.emit("error",n)};var c=t.Z_DEFAULT_COMPRESSION;"number"==typeof e.level&&(c=e.level);var u=t.Z_DEFAULT_STRATEGY;"number"==typeof e.strategy&&(u=e.strategy),this._handle.init(e.windowBits||t.Z_DEFAULT_WINDOWBITS,c,e.memLevel||t.Z_DEFAULT_MEMLEVEL,u,e.dictionary),this._buffer=o.allocUnsafe(this._chunkSize),this._offset=0,this._level=c,this._strategy=u,this.once("end",this.close),Object.defineProperty(this,"_closed",{get:function(){return!n._handle},configurable:!0,enumerable:!0})}function x(e,t){t&&n.nextTick(t),e._handle&&(e._handle.close(),e._handle=null)}function C(e){e.emit("close")}Object.defineProperty(t,"codes",{enumerable:!0,value:Object.freeze(p),writable:!1}),t.Deflate=v,t.Inflate=w,t.Gzip=E,t.Gunzip=S,t.DeflateRaw=k,t.InflateRaw=T,t.Unzip=O,t.createDeflate=function(e){return new v(e)},t.createInflate=function(e){return new w(e)},t.createDeflateRaw=function(e){return new k(e)},t.createInflateRaw=function(e){return new T(e)},t.createGzip=function(e){return new E(e)},t.createGunzip=function(e){return new S(e)},t.createUnzip=function(e){return new O(e)},t.deflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new v(t),e,r)},t.deflateSync=function(e,t){return _(new v(t),e)},t.gzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new E(t),e,r)},t.gzipSync=function(e,t){return _(new E(t),e)},t.deflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new k(t),e,r)},t.deflateRawSync=function(e,t){return _(new k(t),e)},t.unzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new O(t),e,r)},t.unzipSync=function(e,t){return _(new O(t),e)},t.inflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new w(t),e,r)},t.inflateSync=function(e,t){return _(new w(t),e)},t.gunzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new S(t),e,r)},t.gunzipSync=function(e,t){return _(new S(t),e)},t.inflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),b(new T(t),e,r)},t.inflateRawSync=function(e,t){return _(new T(t),e)},a.inherits(A,i),A.prototype.params=function(e,r,o){if(e<t.Z_MIN_LEVEL||e>t.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+e);if(r!=t.Z_FILTERED&&r!=t.Z_HUFFMAN_ONLY&&r!=t.Z_RLE&&r!=t.Z_FIXED&&r!=t.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+r);if(this._level!==e||this._strategy!==r){var i=this;this.flush(s.Z_SYNC_FLUSH,(function(){c(i._handle,"zlib binding closed"),i._handle.params(e,r),i._hadError||(i._level=e,i._strategy=r,o&&o())}))}else n.nextTick(o)},A.prototype.reset=function(){return c(this._handle,"zlib binding closed"),this._handle.reset()},A.prototype._flush=function(e){this._transform(o.alloc(0),"",e)},A.prototype.flush=function(e,t){var r=this,i=this._writableState;("function"==typeof e||void 0===e&&!t)&&(t=e,e=s.Z_FULL_FLUSH),i.ended?t&&n.nextTick(t):i.ending?t&&this.once("end",t):i.needDrain?t&&this.once("drain",(function(){return r.flush(e,t)})):(this._flushFlag=e,this.write(o.alloc(0),"",t))},A.prototype.close=function(e){x(this,e),n.nextTick(C,this)},A.prototype._transform=function(e,t,r){var n,i=this._writableState,a=(i.ending||i.ended)&&(!e||i.length===e.length);return null===e||o.isBuffer(e)?this._handle?(a?n=this._finishFlushFlag:(n=this._flushFlag,e.length>=i.length&&(this._flushFlag=this._opts.flush||s.Z_NO_FLUSH)),void this._processChunk(e,n,r)):r(new Error("zlib binding closed")):r(new Error("invalid input"))},A.prototype._processChunk=function(e,t,r){var n=e&&e.length,i=this._chunkSize-this._offset,s=0,a=this,f="function"==typeof r;if(!f){var h,d=[],p=0;this.on("error",(function(e){h=e})),c(this._handle,"zlib binding closed");do{var y=this._handle.writeSync(t,e,s,n,this._buffer,this._offset,i)}while(!this._hadError&&b(y[0],y[1]));if(this._hadError)throw h;if(p>=u)throw x(this),new RangeError(l);var g=o.concat(d,p);return x(this),g}c(this._handle,"zlib binding closed");var m=this._handle.write(t,e,s,n,this._buffer,this._offset,i);function b(u,l){if(this&&(this.buffer=null,this.callback=null),!a._hadError){var h=i-l;if(c(h>=0,"have should not go down"),h>0){var y=a._buffer.slice(a._offset,a._offset+h);a._offset+=h,f?a.push(y):(d.push(y),p+=y.length)}if((0===l||a._offset>=a._chunkSize)&&(i=a._chunkSize,a._offset=0,a._buffer=o.allocUnsafe(a._chunkSize)),0===l){if(s+=n-u,n=u,!f)return!0;var g=a._handle.write(t,e,s,n,a._buffer,a._offset,a._chunkSize);return g.callback=b,void(g.buffer=e)}if(!f)return!1;r()}}m.buffer=e,m.callback=b},a.inherits(v,A),a.inherits(w,A),a.inherits(E,A),a.inherits(S,A),a.inherits(k,A),a.inherits(T,A),a.inherits(O,A)},8764:(e,t,r)=>{"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */const n=r(9742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){+e!=e&&(e=0);return c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const s=2147483647;function a(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return f(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|y(e,t);let n=a(r);const o=n.write(e,t);o!==r&&(n=n.slice(0,o));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return d(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const o=function(e){if(c.isBuffer(e)){const t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||Y(e.length)?a(0):h(e);if("Buffer"===e.type&&Array.isArray(e.data))return h(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return l(e),a(e<0?0:0|p(e))}function h(e){const t=e.length<0?0:0|p(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function p(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function y(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return $(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(o)return n?-1:$(e).length;t=(""+t).toLowerCase(),o=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return C(this,t,r);case"utf8":case"utf-8":return O(this,t,r);case"ascii":return A(this,t,r);case"latin1":case"binary":return x(this,t,r);case"base64":return T(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function b(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:_(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):_(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function _(e,t,r,n,o){let i,s=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){let n=-1;for(i=r;i<a;i++)if(u(e,i)===u(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===c)return n*s}else-1!==n&&(i-=i-n),n=-1}else for(r+c>a&&(r=a-c),i=r;i>=0;i--){let r=!0;for(let n=0;n<c;n++)if(u(e,i+n)!==u(t,n)){r=!1;break}if(r)return i}return-1}function v(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=t.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(Y(n))return s;e[r+s]=n}return s}function w(e,t,r,n){return V($(t,e.length-r),e,r,n)}function E(e,t,r,n){return V(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return V(G(t),e,r,n)}function k(e,t,r,n){return V(function(e,t){let r,n,o;const i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function T(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function O(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let i=null,s=t>239?4:t>223?3:t>191?2:1;if(o+s<=r){let r,n,a,c;switch(s){case 1:t<128&&(i=t);break;case 2:r=e[o+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(i=c));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:r=e[o+1],n=e[o+2],a=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(i=c))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(e){const t=e.length;if(t<=R)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=R));return r}(n)}t.kMaxLength=s,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return f(e)},c.allocUnsafeSlow=function(e){return f(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(K(t,Uint8Array))o+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o)}o+=t.length}return n},c.byteLength=y,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?O(this,0,e):g.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(c.prototype[i]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,o){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const a=Math.min(i,s),u=this.slice(n,o),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){i=u[e],s=l[e];break}return i<s?-1:s<i?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return E(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function A(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function x(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function C(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=X[e[n]];return o}function j(e,t,r){const n=e.slice(t,r);let o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}function P(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,r,n,o,i){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function I(e,t,r,n,o){q(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function B(e,t,r,n,o){q(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function M(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function F(e,t,r,n,i){return t=+t,r>>>=0,i||M(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function N(e,t,r,n,i){return t=+t,r>>>=0,i||M(e,0,r,8),o.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||P(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||P(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=J((function(e){Z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),c.prototype.readBigUInt64BE=J((function(e){Z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||P(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||P(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},c.prototype.readInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||P(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||P(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=J((function(e){Z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=J((function(e){Z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||P(e,4,this.length),o.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||P(e,4,this.length),o.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||P(e,8,this.length),o.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||P(e,8,this.length),o.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){L(this,e,t,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){L(this,e,t,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=J((function(e,t=0){return I(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=J((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);L(this,e,t,r,n-1,-n)}let o=0,i=1,s=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);L(this,e,t,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=J((function(e,t=0){return I(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=J((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return F(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return F(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{const i=c.isBuffer(e)?e:c.from(e,n),s=i.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%s]}return this};const D={};function U(e,t,r){D[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function z(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function q(e,t,r,n,o,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new D.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||W(t,e.length-(r+1))}(n,o,i)}function Z(e,t){if("number"!=typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function W(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}U("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),U("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),U("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=z(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=z(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function $(e,t){let r;t=t||1/0;const n=e.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function V(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const X=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();function J(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},584:e=>{e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},1924:(e,t,r)=>{"use strict";var n=r(210),o=r(5559),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}},5559:(e,t,r)=>{"use strict";var n=r(8612),o=r(210),i=o("%Function.prototype.apply%"),s=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||n.call(s,i),c=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),l=o("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){u=null}e.exports=function(e){var t=a(n,s,arguments);if(c&&u){var r=c(t,"length");r.configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))})}return t};var f=function(){return a(n,i,arguments)};u?u(e.exports,"apply",{value:f}):e.exports.apply=f},9435:e=>{var t=1e3,r=60*t,n=60*r,o=24*n,i=7*o,s=365.25*o;function a(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,c){c=c||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*n;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&isFinite(e))return c.long?function(e){var i=Math.abs(e);if(i>=o)return a(e,i,o,"day");if(i>=n)return a(e,i,n,"hour");if(i>=r)return a(e,i,r,"minute");if(i>=t)return a(e,i,t,"second");return e+" ms"}(e):function(e){var i=Math.abs(e);if(i>=o)return Math.round(e/o)+"d";if(i>=n)return Math.round(e/n)+"h";if(i>=r)return Math.round(e/r)+"m";if(i>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},1227:(e,t,r)=>{var n=r(4155);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))})),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(2447)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},2447:(e,t,r)=>{e.exports=function(e){function t(e){let r,o,i,s=null;function a(...e){if(!a.enabled)return;const n=a,o=Number(new Date),i=o-(r||o);n.diff=i,n.prev=r,n.curr=o,r=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((r,o)=>{if("%%"===r)return"%";s++;const i=t.formatters[o];if("function"==typeof i){const t=e[s];r=i.call(n,t),e.splice(s,1),s--}return r})),t.formatArgs.call(n,e);(n.log||t.log).apply(n,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=n,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{s=e}}),"function"==typeof t.init&&t.init(a),a}function n(e,r){const n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(9435),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((r=>{t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},4289:(e,t,r)=>{"use strict";var n=r(2215),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,s=Array.prototype.concat,a=Object.defineProperty,c=r(1044)(),u=a&&c,l=function(e,t,r,n){var o;(!(t in e)||"function"==typeof(o=n)&&"[object Function]"===i.call(o)&&n())&&(u?a(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},f=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);o&&(i=s.call(i,Object.getOwnPropertySymbols(t)));for(var a=0;a<i.length;a+=1)l(e,i[a],t[i[a]],r[i[a]])};f.supportsDescriptors=!!u,e.exports=f},8091:e=>{"use strict";function t(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i=Object.keys(Object(o)),s=0,a=i.length;s<a;s++){var c=i[s],u=Object.getOwnPropertyDescriptor(o,c);void 0!==u&&u.enumerable&&(r[c]=o[c])}}return r}e.exports={assign:t,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}}},6729:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function o(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function i(e,t,n,i,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new o(n,i||e,s),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function a(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),a.prototype.eventNames=function(){var e,n,o=[];if(0===this._eventsCount)return o;for(n in e=this._events)t.call(e,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},a.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,s=new Array(i);o<i;o++)s[o]=n[o].fn;return s},a.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},a.prototype.emit=function(e,t,n,o,i,s){var a=r?r+e:e;if(!this._events[a])return!1;var c,u,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,o),!0;case 5:return l.fn.call(l.context,t,n,o,i),!0;case 6:return l.fn.call(l.context,t,n,o,i,s),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var h,d=l.length;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,o);break;default:if(!c)for(h=1,c=new Array(f-1);h<f;h++)c[h-1]=arguments[h];l[u].fn.apply(l[u].context,c)}}return!0},a.prototype.on=function(e,t,r){return i(this,e,t,r,!1)},a.prototype.once=function(e,t,r){return i(this,e,t,r,!0)},a.prototype.removeListener=function(e,t,n,o){var i=r?r+e:e;if(!this._events[i])return this;if(!t)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==t||o&&!a.once||n&&a.context!==n||s(this,i);else{for(var c=0,u=[],l=a.length;c<l;c++)(a[c].fn!==t||o&&!a[c].once||n&&a[c].context!==n)&&u.push(a[c]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,e.exports=a},7187:e=>{"use strict";var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(r,n){function o(r){e.removeListener(t,i),n(r)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),r([].slice.call(arguments))}y(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&y(e,"error",t,r)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){var o,i,s,u;if(a(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),void 0===s)s=i[t]=r,++e._eventsCount;else if("function"==typeof s?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=c(e))>0&&s.length>o&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=l.bind(n);return o.listener=r,n.wrapFn=o,o}function h(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):p(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function p(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function y(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){n.once&&e.removeEventListener(t,o),r(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)n(c,this,t);else{var u=c.length,l=p(c,u);for(r=0;r<u;++r)n(l[r],this,t)}return!0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,n,o,i,s;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},i.prototype.listeners=function(e){return h(this,e,!0)},i.prototype.rawListeners=function(e){return h(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},4029:(e,t,r)=>{"use strict";var n=r(5320),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,s=function(e,t,r){for(var n=0,o=e.length;n<o;n++)i.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))},a=function(e,t,r){for(var n=0,o=e.length;n<o;n++)null==r?t(e.charAt(n),n,e):t.call(r,e.charAt(n),n,e)},c=function(e,t,r){for(var n in e)i.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))};e.exports=function(e,t,r){if(!n(t))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=r),"[object Array]"===o.call(e)?s(e,t,i):"string"==typeof e?a(e,t,i):c(e,t,i)}},6230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},7648:e=>{"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]";e.exports=function(e){var i=this;if("function"!=typeof i||n.call(i)!==o)throw new TypeError(t+i);for(var s,a=r.call(arguments,1),c=function(){if(this instanceof s){var t=i.apply(this,a.concat(r.call(arguments)));return Object(t)===t?t:this}return i.apply(e,a.concat(r.call(arguments)))},u=Math.max(0,i.length-a.length),l=[],f=0;f<u;f++)l.push("$"+f);if(s=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),i.prototype){var h=function(){};h.prototype=i.prototype,s.prototype=new h,h.prototype=null}return s}},8612:(e,t,r)=>{"use strict";var n=r(7648);e.exports=Function.prototype.bind||n},210:(e,t,r)=>{"use strict";var n,o=SyntaxError,i=Function,s=TypeError,a=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var u=function(){throw new s},l=c?function(){try{return u}catch(e){try{return c(arguments,"callee").get}catch(e){return u}}}():u,f=r(1405)(),h=Object.getPrototypeOf||function(e){return e.__proto__},d={},p="undefined"==typeof Uint8Array?n:h(Uint8Array),y={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":f?h([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?h(h([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?h((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?h((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?h(""[Symbol.iterator]()):n,"%Symbol%":f?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":l,"%TypedArray%":p,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},g=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=h(o.prototype))}return y[t]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(8612),_=r(7642),v=b.call(Function.call,Array.prototype.concat),w=b.call(Function.apply,Array.prototype.splice),E=b.call(Function.call,String.prototype.replace),S=b.call(Function.call,String.prototype.slice),k=b.call(Function.call,RegExp.prototype.exec),T=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,O=/\\(\\)?/g,R=function(e){var t=S(e,0,1),r=S(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return E(e,T,(function(e,t,r,o){n[n.length]=r?E(o,O,"$1"):t||e})),n},A=function(e,t){var r,n=e;if(_(m,n)&&(n="%"+(r=m[n])[0]+"%"),_(y,n)){var i=y[n];if(i===d&&(i=g(n)),void 0===i&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:i}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');if(null===k(/^%?[^%]*%?$/g,e))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=R(e),n=r.length>0?r[0]:"",i=A("%"+n+"%",t),a=i.name,u=i.value,l=!1,f=i.alias;f&&(n=f[0],w(r,v([0,1],f)));for(var h=1,d=!0;h<r.length;h+=1){var p=r[h],g=S(p,0,1),m=S(p,-1);if(('"'===g||"'"===g||"`"===g||'"'===m||"'"===m||"`"===m)&&g!==m)throw new o("property names with quotes must have matching quotes");if("constructor"!==p&&d||(l=!0),_(y,a="%"+(n+="."+p)+"%"))u=y[a];else if(null!=u){if(!(p in u)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&h+1>=r.length){var b=c(u,p);u=(d=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:u[p]}else d=_(u,p),u=u[p];d&&!l&&(y[a]=u)}}return u}},1044:(e,t,r)=>{"use strict";var n=r(210)("%Object.defineProperty%",!0),o=function(){if(n)try{return n({},"a",{value:1}),!0}catch(e){return!1}return!1};o.hasArrayLengthDefineBug=function(){if(!o())return null;try{return 1!==n([],"length",{value:1}).length}catch(e){return!0}},e.exports=o},1405:(e,t,r)=>{"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(5419);e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},5419:e=>{"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},6410:(e,t,r)=>{"use strict";var n=r(5419);e.exports=function(){return n()&&!!Symbol.toStringTag}},7642:(e,t,r)=>{"use strict";var n=r(8612);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},9267:(e,t,r)=>{var n=r(8501),o=r(8575),i=e.exports;for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);function a(e){if("string"==typeof e&&(e=o.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}i.request=function(e,t){return e=a(e),n.request.call(this,e,t)},i.get=function(e,t){return e=a(e),n.get.call(this,e,t)}},645:(e,t)=>{
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,r,n,o){var i,s,a=8*o-n-1,c=(1<<a)-1,u=c>>1,l=-7,f=r?o-1:0,h=r?-1:1,d=e[t+f];for(f+=h,i=d&(1<<-l)-1,d>>=-l,l+=a;l>0;i=256*i+e[t+f],f+=h,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+e[t+f],f+=h,l-=8);if(0===i)i=1-u;else{if(i===c)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,n),i-=u}return(d?-1:1)*s*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var s,a,c,u=8*i-o-1,l=(1<<u)-1,f=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,p=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+f>=1?h/c:h*Math.pow(2,1-f))*c>=2&&(s++,c/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(t*c-1)*Math.pow(2,o),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[r+d]=255&a,d+=p,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;e[r+d]=255&s,d+=p,s/=256,u-=8);e[r+d-p]|=128*y}},5717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}},2584:(e,t,r)=>{"use strict";var n=r(6410)(),o=r(1924)("Object.prototype.toString"),i=function(e){return!(n&&e&&"object"==typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===o(e)},s=function(e){return!!i(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==o(e)&&"[object Function]"===o(e.callee)},a=function(){return i(arguments)}();i.isLegacyArguments=s,e.exports=a?i:s},5320:e=>{"use strict";var t,r,n=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof o&&"function"==typeof Object.defineProperty)try{t=Object.defineProperty({},"length",{get:function(){throw r}}),r={},o((function(){throw 42}),null,t)}catch(e){e!==r&&(o=null)}else o=null;var i=/^\s*class\b/,s=function(e){try{var t=n.call(e);return i.test(t)}catch(e){return!1}},a=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,u="object"==typeof document&&void 0===document.all&&void 0!==document.all?document.all:{};e.exports=o?function(e){if(e===u)return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if("function"==typeof e&&!e.prototype)return!0;try{o(e,null,t)}catch(e){if(e!==r)return!1}return!s(e)}:function(e){if(e===u)return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if("function"==typeof e&&!e.prototype)return!0;if(c)return function(e){try{return!s(e)&&(n.call(e),!0)}catch(e){return!1}}(e);if(s(e))return!1;var t=a.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}},8662:(e,t,r)=>{"use strict";var n,o=Object.prototype.toString,i=Function.prototype.toString,s=/^\s*(?:function)?\*/,a=r(6410)(),c=Object.getPrototypeOf;e.exports=function(e){if("function"!=typeof e)return!1;if(s.test(i.call(e)))return!0;if(!a)return"[object GeneratorFunction]"===o.call(e);if(!c)return!1;if(void 0===n){var t=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(e){}}();n=!!t&&c(t)}return c(e)===n}},8611:e=>{"use strict";e.exports=function(e){return e!=e}},360:(e,t,r)=>{"use strict";var n=r(5559),o=r(4289),i=r(8611),s=r(9415),a=r(3194),c=n(s(),Number);o(c,{getPolyfill:s,implementation:i,shim:a}),e.exports=c},9415:(e,t,r)=>{"use strict";var n=r(8611);e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:n}},3194:(e,t,r)=>{"use strict";var n=r(4289),o=r(9415);e.exports=function(){var e=o();return n(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}},5692:(e,t,r)=>{"use strict";var n=r(4029),o=r(3083),i=r(1924),s=i("Object.prototype.toString"),a=r(6410)(),c="undefined"==typeof globalThis?r.g:globalThis,u=o(),l=i("Array.prototype.indexOf",!0)||function(e,t){for(var r=0;r<e.length;r+=1)if(e[r]===t)return r;return-1},f=i("String.prototype.slice"),h={},d=r(882),p=Object.getPrototypeOf;a&&d&&p&&n(u,(function(e){var t=new c[e];if(Symbol.toStringTag in t){var r=p(t),n=d(r,Symbol.toStringTag);if(!n){var o=p(r);n=d(o,Symbol.toStringTag)}h[e]=n.get}}));e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!a||!(Symbol.toStringTag in e)){var t=f(s(e),8,-1);return l(u,t)>-1}return!!d&&function(e){var t=!1;return n(h,(function(r,n){if(!t)try{t=r.call(e)===n}catch(e){}})),t}(e)}},4244:e=>{"use strict";var t=function(e){return e!=e};e.exports=function(e,r){return 0===e&&0===r?1/e==1/r:e===r||!(!t(e)||!t(r))}},609:(e,t,r)=>{"use strict";var n=r(4289),o=r(5559),i=r(4244),s=r(5624),a=r(2281),c=o(s(),Object);n(c,{getPolyfill:s,implementation:i,shim:a}),e.exports=c},5624:(e,t,r)=>{"use strict";var n=r(4244);e.exports=function(){return"function"==typeof Object.is?Object.is:n}},2281:(e,t,r)=>{"use strict";var n=r(5624),o=r(4289);e.exports=function(){var e=n();return o(Object,{is:e},{is:function(){return Object.is!==e}}),e}},8987:(e,t,r)=>{"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,s=r(1414),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call((function(){}),"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},h={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!h["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===i.call(e),n=s(e),a=t&&"[object String]"===i.call(e),h=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var p=u&&r;if(a&&e.length>0&&!o.call(e,0))for(var y=0;y<e.length;++y)h.push(String(y));if(n&&e.length>0)for(var g=0;g<e.length;++g)h.push(String(g));else for(var m in e)p&&"prototype"===m||!o.call(e,m)||h.push(String(m));if(c)for(var b=function(e){if("undefined"==typeof window||!d)return f(e);try{return f(e)}catch(e){return!1}}(e),_=0;_<l.length;++_)b&&"constructor"===l[_]||!o.call(e,l[_])||h.push(l[_]);return h}}e.exports=n},2215:(e,t,r)=>{"use strict";var n=Array.prototype.slice,o=r(1414),i=Object.keys,s=i?function(e){return i(e)}:r(8987),a=Object.keys;s.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return o(e)?a(n.call(e)):a(e)})}else Object.keys=s;return Object.keys||s},e.exports=s},1414:e=>{"use strict";var t=Object.prototype.toString;e.exports=function(e){var r=t.call(e),n="[object Arguments]"===r;return n||(n="[object Array]"!==r&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===t.call(e.callee)),n}},4236:(e,t)=>{"use strict";var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var o in r)n(r,o)&&(e[o]=r[o])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var o={arraySet:function(e,t,r,n,o){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),o);else for(var i=0;i<n;i++)e[o+i]=t[r+i]},flattenChunks:function(e){var t,r,n,o,i,s;for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length;for(s=new Uint8Array(n),o=0,t=0,r=e.length;t<r;t++)i=e[t],s.set(i,o),o+=i.length;return s}},i={arraySet:function(e,t,r,n,o){for(var i=0;i<n;i++)e[o+i]=t[r+i]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,o)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,i))},t.setTyped(r)},6069:e=>{"use strict";e.exports=function(e,t,r,n){for(var o=65535&e|0,i=e>>>16&65535|0,s=0;0!==r;){r-=s=r>2e3?2e3:r;do{i=i+(o=o+t[n++]|0)|0}while(--s);o%=65521,i%=65521}return o|i<<16|0}},1619:e=>{"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},2869:e=>{"use strict";var t=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();e.exports=function(e,r,n,o){var i=t,s=o+n;e^=-1;for(var a=o;a<s;a++)e=e>>>8^i[255&(e^r[a])];return-1^e}},405:(e,t,r)=>{"use strict";var n,o=r(4236),i=r(342),s=r(6069),a=r(2869),c=r(8898),u=-2,l=258,f=262,h=103,d=113,p=666;function y(e,t){return e.msg=c[t],t}function g(e){return(e<<1)-(e>4?9:0)}function m(e){for(var t=e.length;--t>=0;)e[t]=0}function b(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(o.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function _(e,t){i._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,b(e.strm)}function v(e,t){e.pending_buf[e.pending++]=t}function w(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function E(e,t){var r,n,o=e.max_chain_length,i=e.strstart,s=e.prev_length,a=e.nice_match,c=e.strstart>e.w_size-f?e.strstart-(e.w_size-f):0,u=e.window,h=e.w_mask,d=e.prev,p=e.strstart+l,y=u[i+s-1],g=u[i+s];e.prev_length>=e.good_match&&(o>>=2),a>e.lookahead&&(a=e.lookahead);do{if(u[(r=t)+s]===g&&u[r+s-1]===y&&u[r]===u[i]&&u[++r]===u[i+1]){i+=2,r++;do{}while(u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&i<p);if(n=l-(p-i),i=p-l,n>s){if(e.match_start=t,s=n,n>=a)break;y=u[i+s-1],g=u[i+s]}}}while((t=d[t&h])>c&&0!=--o);return s<=e.lookahead?s:e.lookahead}function S(e){var t,r,n,i,c,u,l,h,d,p,y=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=y+(y-f)){o.arraySet(e.window,e.window,y,y,0),e.match_start-=y,e.strstart-=y,e.block_start-=y,t=r=e.hash_size;do{n=e.head[--t],e.head[t]=n>=y?n-y:0}while(--r);t=r=y;do{n=e.prev[--t],e.prev[t]=n>=y?n-y:0}while(--r);i+=y}if(0===e.strm.avail_in)break;if(u=e.strm,l=e.window,h=e.strstart+e.lookahead,d=i,p=void 0,(p=u.avail_in)>d&&(p=d),r=0===p?0:(u.avail_in-=p,o.arraySet(l,u.input,u.next_in,p,h),1===u.state.wrap?u.adler=s(u.adler,l,p,h):2===u.state.wrap&&(u.adler=a(u.adler,l,p,h)),u.next_in+=p,u.total_in+=p,p),e.lookahead+=r,e.lookahead+e.insert>=3)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+3-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<f&&0!==e.strm.avail_in)}function k(e,t){for(var r,n;;){if(e.lookahead<f){if(S(e),e.lookahead<f&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-f&&(e.match_length=E(e,r)),e.match_length>=3)if(n=i._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(_(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(_(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(_(e,!1),0===e.strm.avail_out)?1:2}function T(e,t){for(var r,n,o;;){if(e.lookahead<f){if(S(e),e.lookahead<f&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-f&&(e.match_length=E(e,r),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){o=e.strstart+e.lookahead-3,n=i._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=o&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,n&&(_(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((n=i._tr_tally(e,0,e.window[e.strstart-1]))&&_(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=i._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(_(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(_(e,!1),0===e.strm.avail_out)?1:2}function O(e,t,r,n,o){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=o}function R(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(1146),this.dyn_dtree=new o.Buf16(122),this.bl_tree=new o.Buf16(78),m(this.dyn_ltree),m(this.dyn_dtree),m(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(16),this.heap=new o.Buf16(573),m(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(573),m(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function A(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:d,e.adler=2===t.wrap?0:1,t.last_flush=0,i._tr_init(t),0):y(e,u)}function x(e){var t,r=A(e);return 0===r&&((t=e.state).window_size=2*t.w_size,m(t.head),t.max_lazy_match=n[t.level].max_lazy,t.good_match=n[t.level].good_length,t.nice_match=n[t.level].nice_length,t.max_chain_length=n[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0),r}function C(e,t,r,n,i,s){if(!e)return u;var a=1;if(-1===t&&(t=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),i<1||i>9||8!==r||n<8||n>15||t<0||t>9||s<0||s>4)return y(e,u);8===n&&(n=9);var c=new R;return e.state=c,c.strm=e,c.wrap=a,c.gzhead=null,c.w_bits=n,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=i+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+3-1)/3),c.window=new o.Buf8(2*c.w_size),c.head=new o.Buf16(c.hash_size),c.prev=new o.Buf16(c.w_size),c.lit_bufsize=1<<i+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new o.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=s,c.method=r,x(e)}n=[new O(0,0,0,0,(function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(S(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,_(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-f&&(_(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(_(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(_(e,!1),e.strm.avail_out),1)})),new O(4,4,8,4,k),new O(4,5,16,8,k),new O(4,6,32,32,k),new O(4,4,16,16,T),new O(8,16,32,32,T),new O(8,16,128,128,T),new O(8,32,128,256,T),new O(32,128,258,1024,T),new O(32,258,258,4096,T)],t.deflateInit=function(e,t){return C(e,t,8,15,8,0)},t.deflateInit2=C,t.deflateReset=x,t.deflateResetKeep=A,t.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?u:(e.state.gzhead=t,0):u},t.deflate=function(e,t){var r,o,s,c;if(!e||!e.state||t>5||t<0)return e?y(e,u):u;if(o=e.state,!e.output||!e.input&&0!==e.avail_in||o.status===p&&4!==t)return y(e,0===e.avail_out?-5:u);if(o.strm=e,r=o.last_flush,o.last_flush=t,42===o.status)if(2===o.wrap)e.adler=0,v(o,31),v(o,139),v(o,8),o.gzhead?(v(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),v(o,255&o.gzhead.time),v(o,o.gzhead.time>>8&255),v(o,o.gzhead.time>>16&255),v(o,o.gzhead.time>>24&255),v(o,9===o.level?2:o.strategy>=2||o.level<2?4:0),v(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(v(o,255&o.gzhead.extra.length),v(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(e.adler=a(e.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=69):(v(o,0),v(o,0),v(o,0),v(o,0),v(o,0),v(o,9===o.level?2:o.strategy>=2||o.level<2?4:0),v(o,3),o.status=d);else{var f=8+(o.w_bits-8<<4)<<8;f|=(o.strategy>=2||o.level<2?0:o.level<6?1:6===o.level?2:3)<<6,0!==o.strstart&&(f|=32),f+=31-f%31,o.status=d,w(o,f),0!==o.strstart&&(w(o,e.adler>>>16),w(o,65535&e.adler)),e.adler=1}if(69===o.status)if(o.gzhead.extra){for(s=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),b(e),s=o.pending,o.pending!==o.pending_buf_size));)v(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=73)}else o.status=73;if(73===o.status)if(o.gzhead.name){s=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),b(e),s=o.pending,o.pending===o.pending_buf_size)){c=1;break}c=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,v(o,c)}while(0!==c);o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),0===c&&(o.gzindex=0,o.status=91)}else o.status=91;if(91===o.status)if(o.gzhead.comment){s=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),b(e),s=o.pending,o.pending===o.pending_buf_size)){c=1;break}c=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,v(o,c)}while(0!==c);o.gzhead.hcrc&&o.pending>s&&(e.adler=a(e.adler,o.pending_buf,o.pending-s,s)),0===c&&(o.status=h)}else o.status=h;if(o.status===h&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&b(e),o.pending+2<=o.pending_buf_size&&(v(o,255&e.adler),v(o,e.adler>>8&255),e.adler=0,o.status=d)):o.status=d),0!==o.pending){if(b(e),0===e.avail_out)return o.last_flush=-1,0}else if(0===e.avail_in&&g(t)<=g(r)&&4!==t)return y(e,-5);if(o.status===p&&0!==e.avail_in)return y(e,-5);if(0!==e.avail_in||0!==o.lookahead||0!==t&&o.status!==p){var E=2===o.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(S(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,r=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(_(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(_(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(_(e,!1),0===e.strm.avail_out)?1:2}(o,t):3===o.strategy?function(e,t){for(var r,n,o,s,a=e.window;;){if(e.lookahead<=l){if(S(e),e.lookahead<=l&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(n=a[o=e.strstart-1])===a[++o]&&n===a[++o]&&n===a[++o]){s=e.strstart+l;do{}while(n===a[++o]&&n===a[++o]&&n===a[++o]&&n===a[++o]&&n===a[++o]&&n===a[++o]&&n===a[++o]&&n===a[++o]&&o<s);e.match_length=l-(s-o),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(r=i._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(_(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(_(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(_(e,!1),0===e.strm.avail_out)?1:2}(o,t):n[o.level].func(o,t);if(3!==E&&4!==E||(o.status=p),1===E||3===E)return 0===e.avail_out&&(o.last_flush=-1),0;if(2===E&&(1===t?i._tr_align(o):5!==t&&(i._tr_stored_block(o,0,0,!1),3===t&&(m(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),b(e),0===e.avail_out))return o.last_flush=-1,0}return 4!==t?0:o.wrap<=0?1:(2===o.wrap?(v(o,255&e.adler),v(o,e.adler>>8&255),v(o,e.adler>>16&255),v(o,e.adler>>24&255),v(o,255&e.total_in),v(o,e.total_in>>8&255),v(o,e.total_in>>16&255),v(o,e.total_in>>24&255)):(w(o,e.adler>>>16),w(o,65535&e.adler)),b(e),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?0:1)},t.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&t!==h&&t!==d&&t!==p?y(e,u):(e.state=null,t===d?y(e,-3):0):u},t.deflateSetDictionary=function(e,t){var r,n,i,a,c,l,f,h,d=t.length;if(!e||!e.state)return u;if(2===(a=(r=e.state).wrap)||1===a&&42!==r.status||r.lookahead)return u;for(1===a&&(e.adler=s(e.adler,t,d,0)),r.wrap=0,d>=r.w_size&&(0===a&&(m(r.head),r.strstart=0,r.block_start=0,r.insert=0),h=new o.Buf8(r.w_size),o.arraySet(h,t,d-r.w_size,r.w_size,0),t=h,d=r.w_size),c=e.avail_in,l=e.next_in,f=e.input,e.avail_in=d,e.next_in=0,e.input=t,S(r);r.lookahead>=3;){n=r.strstart,i=r.lookahead-2;do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+3-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++}while(--i);r.strstart=n,r.lookahead=2,S(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=l,e.input=f,e.avail_in=c,r.wrap=a,0},t.deflateInfo="pako deflate (from Nodeca project)"},4264:e=>{"use strict";e.exports=function(e,t){var r,n,o,i,s,a,c,u,l,f,h,d,p,y,g,m,b,_,v,w,E,S,k,T,O;r=e.state,n=e.next_in,T=e.input,o=n+(e.avail_in-5),i=e.next_out,O=e.output,s=i-(t-e.avail_out),a=i+(e.avail_out-257),c=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,h=r.window,d=r.hold,p=r.bits,y=r.lencode,g=r.distcode,m=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=T[n++]<<p,p+=8,d+=T[n++]<<p,p+=8),_=y[d&m];t:for(;;){if(d>>>=v=_>>>24,p-=v,0===(v=_>>>16&255))O[i++]=65535&_;else{if(!(16&v)){if(0==(64&v)){_=y[(65535&_)+(d&(1<<v)-1)];continue t}if(32&v){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&_,(v&=15)&&(p<v&&(d+=T[n++]<<p,p+=8),w+=d&(1<<v)-1,d>>>=v,p-=v),p<15&&(d+=T[n++]<<p,p+=8,d+=T[n++]<<p,p+=8),_=g[d&b];r:for(;;){if(d>>>=v=_>>>24,p-=v,!(16&(v=_>>>16&255))){if(0==(64&v)){_=g[(65535&_)+(d&(1<<v)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(E=65535&_,p<(v&=15)&&(d+=T[n++]<<p,(p+=8)<v&&(d+=T[n++]<<p,p+=8)),(E+=d&(1<<v)-1)>c){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=v,p-=v,E>(v=i-s)){if((v=E-v)>l&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=0,k=h,0===f){if(S+=u-v,v<w){w-=v;do{O[i++]=h[S++]}while(--v);S=i-E,k=O}}else if(f<v){if(S+=u+f-v,(v-=f)<w){w-=v;do{O[i++]=h[S++]}while(--v);if(S=0,f<w){w-=v=f;do{O[i++]=h[S++]}while(--v);S=i-E,k=O}}}else if(S+=f-v,v<w){w-=v;do{O[i++]=h[S++]}while(--v);S=i-E,k=O}for(;w>2;)O[i++]=k[S++],O[i++]=k[S++],O[i++]=k[S++],w-=3;w&&(O[i++]=k[S++],w>1&&(O[i++]=k[S++]))}else{S=i-E;do{O[i++]=O[S++],O[i++]=O[S++],O[i++]=O[S++],w-=3}while(w>2);w&&(O[i++]=O[S++],w>1&&(O[i++]=O[S++]))}break}}break}}while(n<o&&i<a);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=i,e.avail_in=n<o?o-n+5:5-(n-o),e.avail_out=i<a?a-i+257:257-(i-a),r.hold=d,r.bits=p}},7948:(e,t,r)=>{"use strict";var n=r(4236),o=r(6069),i=r(2869),s=r(4264),a=r(9241),c=-2,u=12,l=30;function f(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function h(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function d(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new n.Buf32(852),t.distcode=t.distdyn=new n.Buf32(592),t.sane=1,t.back=-1,0):c}function p(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,d(e)):c}function y(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?c:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,p(e))):c}function g(e,t){var r,n;return e?(n=new h,e.state=n,n.window=null,0!==(r=y(e,t))&&(e.state=null),r):c}var m,b,_=!0;function v(e){if(_){var t;for(m=new n.Buf32(512),b=new n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(a(1,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;a(2,e.lens,0,32,b,0,e.work,{bits:5}),_=!1}e.lencode=m,e.lenbits=9,e.distcode=b,e.distbits=5}function w(e,t,r,o){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new n.Buf8(s.wsize)),o>=s.wsize?(n.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):((i=s.wsize-s.wnext)>o&&(i=o),n.arraySet(s.window,t,r-o,i,s.wnext),(o-=i)?(n.arraySet(s.window,t,r-o,o,0),s.wnext=o,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}t.inflateReset=p,t.inflateReset2=y,t.inflateResetKeep=d,t.inflateInit=function(e){return g(e,15)},t.inflateInit2=g,t.inflate=function(e,t){var r,h,d,p,y,g,m,b,_,E,S,k,T,O,R,A,x,C,j,P,L,I,B,M,F=0,N=new n.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return c;(r=e.state).mode===u&&(r.mode=13),y=e.next_out,d=e.output,m=e.avail_out,p=e.next_in,h=e.input,g=e.avail_in,b=r.hold,_=r.bits,E=g,S=m,I=0;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}for(;_<16;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(2&r.wrap&&35615===b){r.check=0,N[0]=255&b,N[1]=b>>>8&255,r.check=i(r.check,N,2,0),b=0,_=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg="incorrect header check",r.mode=l;break}if(8!=(15&b)){e.msg="unknown compression method",r.mode=l;break}if(_-=4,L=8+(15&(b>>>=4)),0===r.wbits)r.wbits=L;else if(L>r.wbits){e.msg="invalid window size",r.mode=l;break}r.dmax=1<<L,e.adler=r.check=1,r.mode=512&b?10:u,b=0,_=0;break;case 2:for(;_<16;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(r.flags=b,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=l;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=l;break}r.head&&(r.head.text=b>>8&1),512&r.flags&&(N[0]=255&b,N[1]=b>>>8&255,r.check=i(r.check,N,2,0)),b=0,_=0,r.mode=3;case 3:for(;_<32;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.head&&(r.head.time=b),512&r.flags&&(N[0]=255&b,N[1]=b>>>8&255,N[2]=b>>>16&255,N[3]=b>>>24&255,r.check=i(r.check,N,4,0)),b=0,_=0,r.mode=4;case 4:for(;_<16;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.head&&(r.head.xflags=255&b,r.head.os=b>>8),512&r.flags&&(N[0]=255&b,N[1]=b>>>8&255,r.check=i(r.check,N,2,0)),b=0,_=0,r.mode=5;case 5:if(1024&r.flags){for(;_<16;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.length=b,r.head&&(r.head.extra_len=b),512&r.flags&&(N[0]=255&b,N[1]=b>>>8&255,r.check=i(r.check,N,2,0)),b=0,_=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&((k=r.length)>g&&(k=g),k&&(r.head&&(L=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),n.arraySet(r.head.extra,h,p,k,L)),512&r.flags&&(r.check=i(r.check,h,k,p)),g-=k,p+=k,r.length-=k),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===g)break e;k=0;do{L=h[p+k++],r.head&&L&&r.length<65536&&(r.head.name+=String.fromCharCode(L))}while(L&&k<g);if(512&r.flags&&(r.check=i(r.check,h,k,p)),g-=k,p+=k,L)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===g)break e;k=0;do{L=h[p+k++],r.head&&L&&r.length<65536&&(r.head.comment+=String.fromCharCode(L))}while(L&&k<g);if(512&r.flags&&(r.check=i(r.check,h,k,p)),g-=k,p+=k,L)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;_<16;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(b!==(65535&r.check)){e.msg="header crc mismatch",r.mode=l;break}b=0,_=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=u;break;case 10:for(;_<32;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}e.adler=r.check=f(b),b=0,_=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=y,e.avail_out=m,e.next_in=p,e.avail_in=g,r.hold=b,r.bits=_,2;e.adler=r.check=1,r.mode=u;case u:if(5===t||6===t)break e;case 13:if(r.last){b>>>=7&_,_-=7&_,r.mode=27;break}for(;_<3;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}switch(r.last=1&b,_-=1,3&(b>>>=1)){case 0:r.mode=14;break;case 1:if(v(r),r.mode=20,6===t){b>>>=2,_-=2;break e}break;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=l}b>>>=2,_-=2;break;case 14:for(b>>>=7&_,_-=7&_;_<32;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if((65535&b)!=(b>>>16^65535)){e.msg="invalid stored block lengths",r.mode=l;break}if(r.length=65535&b,b=0,_=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(k=r.length){if(k>g&&(k=g),k>m&&(k=m),0===k)break e;n.arraySet(d,h,p,k,y),g-=k,p+=k,m-=k,y+=k,r.length-=k;break}r.mode=u;break;case 17:for(;_<14;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(r.nlen=257+(31&b),b>>>=5,_-=5,r.ndist=1+(31&b),b>>>=5,_-=5,r.ncode=4+(15&b),b>>>=4,_-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=l;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;_<3;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.lens[D[r.have++]]=7&b,b>>>=3,_-=3}for(;r.have<19;)r.lens[D[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,B={bits:r.lenbits},I=a(0,r.lens,0,19,r.lencode,0,r.work,B),r.lenbits=B.bits,I){e.msg="invalid code lengths set",r.mode=l;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;A=(F=r.lencode[b&(1<<r.lenbits)-1])>>>16&255,x=65535&F,!((R=F>>>24)<=_);){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(x<16)b>>>=R,_-=R,r.lens[r.have++]=x;else{if(16===x){for(M=R+2;_<M;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(b>>>=R,_-=R,0===r.have){e.msg="invalid bit length repeat",r.mode=l;break}L=r.lens[r.have-1],k=3+(3&b),b>>>=2,_-=2}else if(17===x){for(M=R+3;_<M;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}_-=R,L=0,k=3+(7&(b>>>=R)),b>>>=3,_-=3}else{for(M=R+7;_<M;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}_-=R,L=0,k=11+(127&(b>>>=R)),b>>>=7,_-=7}if(r.have+k>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=l;break}for(;k--;)r.lens[r.have++]=L}}if(r.mode===l)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=l;break}if(r.lenbits=9,B={bits:r.lenbits},I=a(1,r.lens,0,r.nlen,r.lencode,0,r.work,B),r.lenbits=B.bits,I){e.msg="invalid literal/lengths set",r.mode=l;break}if(r.distbits=6,r.distcode=r.distdyn,B={bits:r.distbits},I=a(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,B),r.distbits=B.bits,I){e.msg="invalid distances set",r.mode=l;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(g>=6&&m>=258){e.next_out=y,e.avail_out=m,e.next_in=p,e.avail_in=g,r.hold=b,r.bits=_,s(e,S),y=e.next_out,d=e.output,m=e.avail_out,p=e.next_in,h=e.input,g=e.avail_in,b=r.hold,_=r.bits,r.mode===u&&(r.back=-1);break}for(r.back=0;A=(F=r.lencode[b&(1<<r.lenbits)-1])>>>16&255,x=65535&F,!((R=F>>>24)<=_);){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(A&&0==(240&A)){for(C=R,j=A,P=x;A=(F=r.lencode[P+((b&(1<<C+j)-1)>>C)])>>>16&255,x=65535&F,!(C+(R=F>>>24)<=_);){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}b>>>=C,_-=C,r.back+=C}if(b>>>=R,_-=R,r.back+=R,r.length=x,0===A){r.mode=26;break}if(32&A){r.back=-1,r.mode=u;break}if(64&A){e.msg="invalid literal/length code",r.mode=l;break}r.extra=15&A,r.mode=22;case 22:if(r.extra){for(M=r.extra;_<M;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.length+=b&(1<<r.extra)-1,b>>>=r.extra,_-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;A=(F=r.distcode[b&(1<<r.distbits)-1])>>>16&255,x=65535&F,!((R=F>>>24)<=_);){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(0==(240&A)){for(C=R,j=A,P=x;A=(F=r.distcode[P+((b&(1<<C+j)-1)>>C)])>>>16&255,x=65535&F,!(C+(R=F>>>24)<=_);){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}b>>>=C,_-=C,r.back+=C}if(b>>>=R,_-=R,r.back+=R,64&A){e.msg="invalid distance code",r.mode=l;break}r.offset=x,r.extra=15&A,r.mode=24;case 24:if(r.extra){for(M=r.extra;_<M;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}r.offset+=b&(1<<r.extra)-1,b>>>=r.extra,_-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=l;break}r.mode=25;case 25:if(0===m)break e;if(k=S-m,r.offset>k){if((k=r.offset-k)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=l;break}k>r.wnext?(k-=r.wnext,T=r.wsize-k):T=r.wnext-k,k>r.length&&(k=r.length),O=r.window}else O=d,T=y-r.offset,k=r.length;k>m&&(k=m),m-=k,r.length-=k;do{d[y++]=O[T++]}while(--k);0===r.length&&(r.mode=21);break;case 26:if(0===m)break e;d[y++]=r.length,m--,r.mode=21;break;case 27:if(r.wrap){for(;_<32;){if(0===g)break e;g--,b|=h[p++]<<_,_+=8}if(S-=m,e.total_out+=S,r.total+=S,S&&(e.adler=r.check=r.flags?i(r.check,d,S,y-S):o(r.check,d,S,y-S)),S=m,(r.flags?b:f(b))!==r.check){e.msg="incorrect data check",r.mode=l;break}b=0,_=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;_<32;){if(0===g)break e;g--,b+=h[p++]<<_,_+=8}if(b!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=l;break}b=0,_=0}r.mode=29;case 29:I=1;break e;case l:I=-3;break e;case 31:return-4;default:return c}return e.next_out=y,e.avail_out=m,e.next_in=p,e.avail_in=g,r.hold=b,r.bits=_,(r.wsize||S!==e.avail_out&&r.mode<l&&(r.mode<27||4!==t))&&w(e,e.output,e.next_out,S-e.avail_out)?(r.mode=31,-4):(E-=e.avail_in,S-=e.avail_out,e.total_in+=E,e.total_out+=S,r.total+=S,r.wrap&&S&&(e.adler=r.check=r.flags?i(r.check,d,S,e.next_out-S):o(r.check,d,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===u?128:0)+(20===r.mode||15===r.mode?256:0),(0===E&&0===S||4===t)&&0===I&&(I=-5),I)},t.inflateEnd=function(e){if(!e||!e.state)return c;var t=e.state;return t.window&&(t.window=null),e.state=null,0},t.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?c:(r.head=t,t.done=!1,0):c},t.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?c:11===r.mode&&o(1,t,n,0)!==r.check?-3:w(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,0):c},t.inflateInfo="pako inflate (from Nodeca project)"},9241:(e,t,r)=>{"use strict";var n=r(4236),o=15,i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,r,u,l,f,h,d){var p,y,g,m,b,_,v,w,E,S=d.bits,k=0,T=0,O=0,R=0,A=0,x=0,C=0,j=0,P=0,L=0,I=null,B=0,M=new n.Buf16(16),F=new n.Buf16(16),N=null,D=0;for(k=0;k<=o;k++)M[k]=0;for(T=0;T<u;T++)M[t[r+T]]++;for(A=S,R=o;R>=1&&0===M[R];R--);if(A>R&&(A=R),0===R)return l[f++]=20971520,l[f++]=20971520,d.bits=1,0;for(O=1;O<R&&0===M[O];O++);for(A<O&&(A=O),j=1,k=1;k<=o;k++)if(j<<=1,(j-=M[k])<0)return-1;if(j>0&&(0===e||1!==R))return-1;for(F[1]=0,k=1;k<o;k++)F[k+1]=F[k]+M[k];for(T=0;T<u;T++)0!==t[r+T]&&(h[F[t[r+T]]++]=T);if(0===e?(I=N=h,_=19):1===e?(I=i,B-=257,N=s,D-=257,_=256):(I=a,N=c,_=-1),L=0,T=0,k=O,b=f,x=A,C=0,g=-1,m=(P=1<<A)-1,1===e&&P>852||2===e&&P>592)return 1;for(;;){v=k-C,h[T]<_?(w=0,E=h[T]):h[T]>_?(w=N[D+h[T]],E=I[B+h[T]]):(w=96,E=0),p=1<<k-C,O=y=1<<x;do{l[b+(L>>C)+(y-=p)]=v<<24|w<<16|E|0}while(0!==y);for(p=1<<k-1;L&p;)p>>=1;if(0!==p?(L&=p-1,L+=p):L=0,T++,0==--M[k]){if(k===R)break;k=t[r+h[T]]}if(k>A&&(L&m)!==g){for(0===C&&(C=A),b+=O,j=1<<(x=k-C);x+C<R&&!((j-=M[x+C])<=0);)x++,j<<=1;if(P+=1<<x,1===e&&P>852||2===e&&P>592)return 1;l[g=L&m]=A<<24|x<<16|b-f|0}}return 0!==L&&(l[b+L]=k-C<<24|64<<16|0),d.bits=A,0}},8898:e=>{"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},342:(e,t,r)=>{"use strict";var n=r(4236);function o(e){for(var t=e.length;--t>=0;)e[t]=0}var i=256,s=286,a=30,c=15,u=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],l=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],h=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],d=new Array(576);o(d);var p=new Array(60);o(p);var y=new Array(512);o(y);var g=new Array(256);o(g);var m=new Array(29);o(m);var b,_,v,w=new Array(a);function E(e,t,r,n,o){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=o,this.has_stree=e&&e.length}function S(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function k(e){return e<256?y[e]:y[256+(e>>>7)]}function T(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function O(e,t,r){e.bi_valid>16-r?(e.bi_buf|=t<<e.bi_valid&65535,T(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=r-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function R(e,t,r){O(e,r[2*t],r[2*t+1])}function A(e,t){var r=0;do{r|=1&e,e>>>=1,r<<=1}while(--t>0);return r>>>1}function x(e,t,r){var n,o,i=new Array(16),s=0;for(n=1;n<=c;n++)i[n]=s=s+r[n-1]<<1;for(o=0;o<=t;o++){var a=e[2*o+1];0!==a&&(e[2*o]=A(i[a]++,a))}}function C(e){var t;for(t=0;t<s;t++)e.dyn_ltree[2*t]=0;for(t=0;t<a;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function j(e){e.bi_valid>8?T(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function P(e,t,r,n){var o=2*t,i=2*r;return e[o]<e[i]||e[o]===e[i]&&n[t]<=n[r]}function L(e,t,r){for(var n=e.heap[r],o=r<<1;o<=e.heap_len&&(o<e.heap_len&&P(t,e.heap[o+1],e.heap[o],e.depth)&&o++,!P(t,n,e.heap[o],e.depth));)e.heap[r]=e.heap[o],r=o,o<<=1;e.heap[r]=n}function I(e,t,r){var n,o,s,a,c=0;if(0!==e.last_lit)do{n=e.pending_buf[e.d_buf+2*c]<<8|e.pending_buf[e.d_buf+2*c+1],o=e.pending_buf[e.l_buf+c],c++,0===n?R(e,o,t):(R(e,(s=g[o])+i+1,t),0!==(a=u[s])&&O(e,o-=m[s],a),R(e,s=k(--n),r),0!==(a=l[s])&&O(e,n-=w[s],a))}while(c<e.last_lit);R(e,256,t)}function B(e,t){var r,n,o,i=t.dyn_tree,s=t.stat_desc.static_tree,a=t.stat_desc.has_stree,u=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=573,r=0;r<u;r++)0!==i[2*r]?(e.heap[++e.heap_len]=l=r,e.depth[r]=0):i[2*r+1]=0;for(;e.heap_len<2;)i[2*(o=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[o]=0,e.opt_len--,a&&(e.static_len-=s[2*o+1]);for(t.max_code=l,r=e.heap_len>>1;r>=1;r--)L(e,i,r);o=u;do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],L(e,i,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,i[2*o]=i[2*r]+i[2*n],e.depth[o]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,i[2*r+1]=i[2*n+1]=o,e.heap[1]=o++,L(e,i,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,o,i,s,a,u=t.dyn_tree,l=t.max_code,f=t.stat_desc.static_tree,h=t.stat_desc.has_stree,d=t.stat_desc.extra_bits,p=t.stat_desc.extra_base,y=t.stat_desc.max_length,g=0;for(i=0;i<=c;i++)e.bl_count[i]=0;for(u[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)(i=u[2*u[2*(n=e.heap[r])+1]+1]+1)>y&&(i=y,g++),u[2*n+1]=i,n>l||(e.bl_count[i]++,s=0,n>=p&&(s=d[n-p]),a=u[2*n],e.opt_len+=a*(i+s),h&&(e.static_len+=a*(f[2*n+1]+s)));if(0!==g){do{for(i=y-1;0===e.bl_count[i];)i--;e.bl_count[i]--,e.bl_count[i+1]+=2,e.bl_count[y]--,g-=2}while(g>0);for(i=y;0!==i;i--)for(n=e.bl_count[i];0!==n;)(o=e.heap[--r])>l||(u[2*o+1]!==i&&(e.opt_len+=(i-u[2*o+1])*u[2*o],u[2*o+1]=i),n--)}}(e,t),x(i,l,e.bl_count)}function M(e,t,r){var n,o,i=-1,s=t[1],a=0,c=7,u=4;for(0===s&&(c=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)o=s,s=t[2*(n+1)+1],++a<c&&o===s||(a<u?e.bl_tree[2*o]+=a:0!==o?(o!==i&&e.bl_tree[2*o]++,e.bl_tree[32]++):a<=10?e.bl_tree[34]++:e.bl_tree[36]++,a=0,i=o,0===s?(c=138,u=3):o===s?(c=6,u=3):(c=7,u=4))}function F(e,t,r){var n,o,i=-1,s=t[1],a=0,c=7,u=4;for(0===s&&(c=138,u=3),n=0;n<=r;n++)if(o=s,s=t[2*(n+1)+1],!(++a<c&&o===s)){if(a<u)do{R(e,o,e.bl_tree)}while(0!=--a);else 0!==o?(o!==i&&(R(e,o,e.bl_tree),a--),R(e,16,e.bl_tree),O(e,a-3,2)):a<=10?(R(e,17,e.bl_tree),O(e,a-3,3)):(R(e,18,e.bl_tree),O(e,a-11,7));a=0,i=o,0===s?(c=138,u=3):o===s?(c=6,u=3):(c=7,u=4)}}o(w);var N=!1;function D(e,t,r,o){O(e,0+(o?1:0),3),function(e,t,r,o){j(e),o&&(T(e,r),T(e,~r)),n.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}t._tr_init=function(e){N||(!function(){var e,t,r,n,o,i=new Array(16);for(r=0,n=0;n<28;n++)for(m[n]=r,e=0;e<1<<u[n];e++)g[r++]=n;for(g[r-1]=n,o=0,n=0;n<16;n++)for(w[n]=o,e=0;e<1<<l[n];e++)y[o++]=n;for(o>>=7;n<a;n++)for(w[n]=o<<7,e=0;e<1<<l[n]-7;e++)y[256+o++]=n;for(t=0;t<=c;t++)i[t]=0;for(e=0;e<=143;)d[2*e+1]=8,e++,i[8]++;for(;e<=255;)d[2*e+1]=9,e++,i[9]++;for(;e<=279;)d[2*e+1]=7,e++,i[7]++;for(;e<=287;)d[2*e+1]=8,e++,i[8]++;for(x(d,287,i),e=0;e<a;e++)p[2*e+1]=5,p[2*e]=A(e,5);b=new E(d,u,257,s,c),_=new E(p,l,0,a,c),v=new E(new Array(0),f,0,19,7)}(),N=!0),e.l_desc=new S(e.dyn_ltree,b),e.d_desc=new S(e.dyn_dtree,_),e.bl_desc=new S(e.bl_tree,v),e.bi_buf=0,e.bi_valid=0,C(e)},t._tr_stored_block=D,t._tr_flush_block=function(e,t,r,n){var o,s,a=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<i;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),B(e,e.l_desc),B(e,e.d_desc),a=function(e){var t;for(M(e,e.dyn_ltree,e.l_desc.max_code),M(e,e.dyn_dtree,e.d_desc.max_code),B(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*h[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=r+5,r+4<=o&&-1!==t?D(e,t,r,n):4===e.strategy||s===o?(O(e,2+(n?1:0),3),I(e,d,p)):(O(e,4+(n?1:0),3),function(e,t,r,n){var o;for(O(e,t-257,5),O(e,r-1,5),O(e,n-4,4),o=0;o<n;o++)O(e,e.bl_tree[2*h[o]+1],3);F(e,e.dyn_ltree,t-1),F(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),I(e,e.dyn_ltree,e.dyn_dtree)),C(e),n&&j(e)},t._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(g[r]+i+1)]++,e.dyn_dtree[2*k(t)]++),e.last_lit===e.lit_bufsize-1},t._tr_align=function(e){O(e,2,3),R(e,256,d),function(e){16===e.bi_valid?(T(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},2292:e=>{"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},4155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,c=[],u=!1,l=-1;function f(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&h())}function h(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||u||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},1394:(e,t,r)=>{"use strict";var n=r(4155),o=r(8575).parse,i={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443},s=String.prototype.endsWith||function(e){return e.length<=this.length&&-1!==this.indexOf(e,this.length-e.length)};function a(e){return n.env[e.toLowerCase()]||n.env[e.toUpperCase()]||""}t.getProxyForUrl=function(e){var t="string"==typeof e?o(e):e||{},r=t.protocol,n=t.host,c=t.port;if("string"!=typeof n||!n||"string"!=typeof r)return"";if(r=r.split(":",1)[0],!function(e,t){var r=(a("npm_config_no_proxy")||a("no_proxy")).toLowerCase();if(!r)return!0;if("*"===r)return!1;return r.split(/[,\s]/).every((function(r){if(!r)return!0;var n=r.match(/^(.+):(\d+)$/),o=n?n[1]:r,i=n?parseInt(n[2]):0;return!(!i||i===t)||(/^[.*]/.test(o)?("*"===o.charAt(0)&&(o=o.slice(1)),!s.call(e,o)):e!==o)}))}(n=n.replace(/:\d*$/,""),c=parseInt(c)||i[r]||0))return"";var u=a("npm_config_"+r+"_proxy")||a(r+"_proxy")||a("npm_config_proxy")||a("all_proxy");return u&&-1===u.indexOf("://")&&(u=r+"://"+u),u}},2587:e=>{"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,o){r=r||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var s=/\+/g;e=e.split(r);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var c=e.length;a>0&&c>a&&(c=a);for(var u=0;u<c;++u){var l,f,h,d,p=e[u].replace(s,"%20"),y=p.indexOf(n);y>=0?(l=p.substr(0,y),f=p.substr(y+1)):(l=p,f=""),h=decodeURIComponent(l),d=decodeURIComponent(f),t(i,h)?Array.isArray(i[h])?i[h].push(d):i[h]=[i[h],d]:i[h]=d}return i}},2361:e=>{"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,o){return r=r||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(o){var i=encodeURIComponent(t(o))+n;return Array.isArray(e[o])?e[o].map((function(e){return i+encodeURIComponent(t(e))})).join(r):i+encodeURIComponent(t(e[o]))})).join(r):o?encodeURIComponent(t(o))+n+encodeURIComponent(t(e)):""}},7673:(e,t,r)=>{"use strict";t.decode=t.parse=r(2587),t.encode=t.stringify=r(2361)},4281:e=>{"use strict";var t={};function r(e,r,n){n||(n=Error);var o=function(e){var t,n;function o(t,n,o){return e.call(this,function(e,t,n){return"string"==typeof r?r:r(e,t,n)}(t,n,o))||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o}(n);o.prototype.name=n.name,o.prototype.code=e,t[e]=o}function n(e,t){if(Array.isArray(e)){var r=e.length;return e=e.map((function(e){return String(e)})),r>2?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}r("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(e,t,r){var o,i,s,a;if("string"==typeof t&&(i="not ",t.substr(!s||s<0?0:+s,i.length)===i)?(o="must not be",t=t.replace(/^not /,"")):o="must be",function(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}(e," argument"))a="The ".concat(e," ").concat(o," ").concat(n(t,"type"));else{var c=function(e,t,r){return"number"!=typeof r&&(r=0),!(r+t.length>e.length)&&-1!==e.indexOf(t,r)}(e,".")?"property":"argument";a='The "'.concat(e,'" ').concat(c," ").concat(o," ").concat(n(t,"type"))}return a+=". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.q=t},6753:(e,t,r)=>{"use strict";var n=r(4155),o=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=l;var i=r(9481),s=r(4229);r(5717)(l,i);for(var a=o(s.prototype),c=0;c<a.length;c++){var u=a[c];l.prototype[u]||(l.prototype[u]=s.prototype[u])}function l(e){if(!(this instanceof l))return new l(e);i.call(this,e),s.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||n.nextTick(h,this)}function h(e){e.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(l.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(l.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}})},2725:(e,t,r)=>{"use strict";e.exports=o;var n=r(4605);function o(e){if(!(this instanceof o))return new o(e);n.call(this,e)}r(5717)(o,n),o.prototype._transform=function(e,t,r){r(null,e)}},9481:(e,t,r)=>{"use strict";var n,o=r(4155);e.exports=T,T.ReadableState=k;r(7187).EventEmitter;var i=function(e,t){return e.listeners(t).length},s=r(2503),a=r(8764).Buffer,c=r.g.Uint8Array||function(){};var u,l=r(4616);u=l&&l.debuglog?l.debuglog("stream"):function(){};var f,h,d,p=r(7327),y=r(1195),g=r(2457).getHighWaterMark,m=r(4281).q,b=m.ERR_INVALID_ARG_TYPE,_=m.ERR_STREAM_PUSH_AFTER_EOF,v=m.ERR_METHOD_NOT_IMPLEMENTED,w=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r(5717)(T,s);var E=y.errorOrDestroy,S=["error","close","destroy","pause","resume"];function k(e,t,o){n=n||r(6753),e=e||{},"boolean"!=typeof o&&(o=t instanceof n),this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=g(this,e,"readableHighWaterMark",o),this.buffer=new p,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(f||(f=r(2553).s),this.decoder=new f(e.encoding),this.encoding=e.encoding)}function T(e){if(n=n||r(6753),!(this instanceof T))return new T(e);var t=this instanceof n;this._readableState=new k(e,this,t),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),s.call(this)}function O(e,t,r,n,o){u("readableAddChunk",t);var i,s=e._readableState;if(null===t)s.reading=!1,function(e,t){if(u("onEofChunk"),t.ended)return;if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?C(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,j(e)))}(e,s);else if(o||(i=function(e,t){var r;n=t,a.isBuffer(n)||n instanceof c||"string"==typeof t||void 0===t||e.objectMode||(r=new b("chunk",["string","Buffer","Uint8Array"],t));var n;return r}(s,t)),i)E(e,i);else if(s.objectMode||t&&t.length>0)if("string"==typeof t||s.objectMode||Object.getPrototypeOf(t)===a.prototype||(t=function(e){return a.from(e)}(t)),n)s.endEmitted?E(e,new w):R(e,s,t,!0);else if(s.ended)E(e,new _);else{if(s.destroyed)return!1;s.reading=!1,s.decoder&&!r?(t=s.decoder.write(t),s.objectMode||0!==t.length?R(e,s,t,!1):P(e,s)):R(e,s,t,!1)}else n||(s.reading=!1,P(e,s));return!s.ended&&(s.length<s.highWaterMark||0===s.length)}function R(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&C(e)),P(e,t)}Object.defineProperty(T.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),T.prototype.destroy=y.destroy,T.prototype._undestroy=y.undestroy,T.prototype._destroy=function(e,t){t(e)},T.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=a.from(e,t),t=""),r=!0),O(this,e,t,!1,r)},T.prototype.unshift=function(e){return O(this,e,null,!0,!1)},T.prototype.isPaused=function(){return!1===this._readableState.flowing},T.prototype.setEncoding=function(e){f||(f=r(2553).s);var t=new f(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,o="";null!==n;)o+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==o&&this._readableState.buffer.push(o),this._readableState.length=o.length,this};var A=1073741824;function x(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=A?e=A:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function C(e){var t=e._readableState;u("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(u("emitReadable",t.flowing),t.emittedReadable=!0,o.nextTick(j,e))}function j(e){var t=e._readableState;u("emitReadable_",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,F(e)}function P(e,t){t.readingMore||(t.readingMore=!0,o.nextTick(L,e,t))}function L(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(u("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function I(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function B(e){u("readable nexttick read 0"),e.read(0)}function M(e,t){u("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),F(e),t.flowing&&!t.reading&&e.read(0)}function F(e){var t=e._readableState;for(u("flow",t.flowing);t.flowing&&null!==e.read(););}function N(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r);var r}function D(e){var t=e._readableState;u("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,o.nextTick(U,t,e))}function U(e,t){if(u("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function z(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}T.prototype.read=function(e){u("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return u("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?D(this):C(this),null;if(0===(e=x(e,t))&&t.ended)return 0===t.length&&D(this),null;var n,o=t.needReadable;return u("need readable",o),(0===t.length||t.length-e<t.highWaterMark)&&u("length less than watermark",o=!0),t.ended||t.reading?u("reading or ended",o=!1):o&&(u("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=x(r,t))),null===(n=e>0?N(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&D(this)),null!==n&&this.emit("data",n),n},T.prototype._read=function(e){E(this,new v("_read()"))},T.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,u("pipe count=%d opts=%j",n.pipesCount,t);var s=(!t||!1!==t.end)&&e!==o.stdout&&e!==o.stderr?c:g;function a(t,o){u("onunpipe"),t===r&&o&&!1===o.hasUnpiped&&(o.hasUnpiped=!0,u("cleanup"),e.removeListener("close",p),e.removeListener("finish",y),e.removeListener("drain",l),e.removeListener("error",d),e.removeListener("unpipe",a),r.removeListener("end",c),r.removeListener("end",g),r.removeListener("data",h),f=!0,!n.awaitDrain||e._writableState&&!e._writableState.needDrain||l())}function c(){u("onend"),e.end()}n.endEmitted?o.nextTick(s):r.once("end",s),e.on("unpipe",a);var l=function(e){return function(){var t=e._readableState;u("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&i(e,"data")&&(t.flowing=!0,F(e))}}(r);e.on("drain",l);var f=!1;function h(t){u("ondata");var o=e.write(t);u("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==z(n.pipes,e))&&!f&&(u("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function d(t){u("onerror",t),g(),e.removeListener("error",d),0===i(e,"error")&&E(e,t)}function p(){e.removeListener("finish",y),g()}function y(){u("onfinish"),e.removeListener("close",p),g()}function g(){u("unpipe"),r.unpipe(e)}return r.on("data",h),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",d),e.once("close",p),e.once("finish",y),e.emit("pipe",r),n.flowing||(u("pipe resume"),r.resume()),e},T.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;if(!e){var n=t.pipes,o=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<o;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}var s=z(t.pipes,e);return-1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},T.prototype.on=function(e,t){var r=s.prototype.on.call(this,e,t),n=this._readableState;return"data"===e?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===e&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,u("on readable",n.length,n.reading),n.length?C(this):n.reading||o.nextTick(B,this))),r},T.prototype.addListener=T.prototype.on,T.prototype.removeListener=function(e,t){var r=s.prototype.removeListener.call(this,e,t);return"readable"===e&&o.nextTick(I,this),r},T.prototype.removeAllListeners=function(e){var t=s.prototype.removeAllListeners.apply(this,arguments);return"readable"!==e&&void 0!==e||o.nextTick(I,this),t},T.prototype.resume=function(){var e=this._readableState;return e.flowing||(u("resume"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,o.nextTick(M,e,t))}(this,e)),e.paused=!1,this},T.prototype.pause=function(){return u("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(u("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},T.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;for(var o in e.on("end",(function(){if(u("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)})),e.on("data",(function(o){(u("wrapped data"),r.decoder&&(o=r.decoder.write(o)),r.objectMode&&null==o)||(r.objectMode||o&&o.length)&&(t.push(o)||(n=!0,e.pause()))})),e)void 0===this[o]&&"function"==typeof e[o]&&(this[o]=function(t){return function(){return e[t].apply(e,arguments)}}(o));for(var i=0;i<S.length;i++)e.on(S[i],this.emit.bind(this,S[i]));return this._read=function(t){u("wrapped _read",t),n&&(n=!1,e.resume())},this},"function"==typeof Symbol&&(T.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=r(5850)),h(this)}),Object.defineProperty(T.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(T.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(T.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),T._fromList=N,Object.defineProperty(T.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(T.from=function(e,t){return void 0===d&&(d=r(5167)),d(T,e,t)})},4605:(e,t,r)=>{"use strict";e.exports=l;var n=r(4281).q,o=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,s=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=n.ERR_TRANSFORM_WITH_LENGTH_0,c=r(6753);function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new i);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var o=this._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}function l(e){if(!(this instanceof l))return new l(e);c.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",f)}function f(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?h(this,null,null):this._flush((function(t,r){h(e,t,r)}))}function h(e,t,r){if(t)return e.emit("error",t);if(null!=r&&e.push(r),e._writableState.length)throw new a;if(e._transformState.transforming)throw new s;return e.push(null)}r(5717)(l,c),l.prototype.push=function(e,t){return this._transformState.needTransform=!1,c.prototype.push.call(this,e,t)},l.prototype._transform=function(e,t,r){r(new o("_transform()"))},l.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},l.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},l.prototype._destroy=function(e,t){c.prototype._destroy.call(this,e,(function(e){t(e)}))}},4229:(e,t,r)=>{"use strict";var n,o=r(4155);function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var n=e.entry;e.entry=null;for(;n;){var o=n.callback;t.pendingcb--,o(r),n=n.next}t.corkedRequestsFree.next=e}(t,e)}}e.exports=T,T.WritableState=k;var s={deprecate:r(4927)},a=r(2503),c=r(8764).Buffer,u=r.g.Uint8Array||function(){};var l,f=r(1195),h=r(2457).getHighWaterMark,d=r(4281).q,p=d.ERR_INVALID_ARG_TYPE,y=d.ERR_METHOD_NOT_IMPLEMENTED,g=d.ERR_MULTIPLE_CALLBACK,m=d.ERR_STREAM_CANNOT_PIPE,b=d.ERR_STREAM_DESTROYED,_=d.ERR_STREAM_NULL_VALUES,v=d.ERR_STREAM_WRITE_AFTER_END,w=d.ERR_UNKNOWN_ENCODING,E=f.errorOrDestroy;function S(){}function k(e,t,s){n=n||r(6753),e=e||{},"boolean"!=typeof s&&(s=t instanceof n),this.objectMode=!!e.objectMode,s&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=h(this,e,"writableHighWaterMark",s),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if("function"!=typeof i)throw new g;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,i){--t.pendingcb,r?(o.nextTick(i,n),o.nextTick(j,e,t),e._writableState.errorEmitted=!0,E(e,n)):(i(n),e._writableState.errorEmitted=!0,E(e,n),j(e,t))}(e,r,n,t,i);else{var s=x(r)||e.destroyed;s||r.corked||r.bufferProcessing||!r.bufferedRequest||A(e,r),n?o.nextTick(R,e,r,s,i):R(e,r,s,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this)}function T(e){var t=this instanceof(n=n||r(6753));if(!t&&!l.call(T,this))return new T(e);this._writableState=new k(e,this,t),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),a.call(this)}function O(e,t,r,n,o,i,s){t.writelen=n,t.writecb=s,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new b("write")):r?e._writev(o,t.onwrite):e._write(o,i,t.onwrite),t.sync=!1}function R(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),j(e,t)}function A(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,o=new Array(n),s=t.corkedRequestsFree;s.entry=r;for(var a=0,c=!0;r;)o[a]=r,r.isBuf||(c=!1),r=r.next,a+=1;o.allBuffers=c,O(e,t,!0,t.length,o,"",s.finish),t.pendingcb++,t.lastBufferedRequest=null,s.next?(t.corkedRequestsFree=s.next,s.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0}else{for(;r;){var u=r.chunk,l=r.encoding,f=r.callback;if(O(e,t,!1,t.objectMode?1:u.length,u,l,f),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function x(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function C(e,t){e._final((function(r){t.pendingcb--,r&&E(e,r),t.prefinished=!0,e.emit("prefinish"),j(e,t)}))}function j(e,t){var r=x(t);if(r&&(function(e,t){t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,o.nextTick(C,e,t)))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy()}return r}r(5717)(T,a),k.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(k.prototype,"buffer",{get:s.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(l=Function.prototype[Symbol.hasInstance],Object.defineProperty(T,Symbol.hasInstance,{value:function(e){return!!l.call(this,e)||this===T&&(e&&e._writableState instanceof k)}})):l=function(e){return e instanceof this},T.prototype.pipe=function(){E(this,new m)},T.prototype.write=function(e,t,r){var n,i=this._writableState,s=!1,a=!i.objectMode&&(n=e,c.isBuffer(n)||n instanceof u);return a&&!c.isBuffer(e)&&(e=function(e){return c.from(e)}(e)),"function"==typeof t&&(r=t,t=null),a?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof r&&(r=S),i.ending?function(e,t){var r=new v;E(e,r),o.nextTick(t,r)}(this,r):(a||function(e,t,r,n){var i;return null===r?i=new _:"string"==typeof r||t.objectMode||(i=new p("chunk",["string","Buffer"],r)),!i||(E(e,i),o.nextTick(n,i),!1)}(this,i,e,r))&&(i.pendingcb++,s=function(e,t,r,n,o,i){if(!r){var s=function(e,t,r){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=c.from(t,r));return t}(t,n,o);n!==s&&(r=!0,o="buffer",n=s)}var a=t.objectMode?1:n.length;t.length+=a;var u=t.length<t.highWaterMark;u||(t.needDrain=!0);if(t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:o,isBuf:r,callback:i,next:null},l?l.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else O(e,t,!1,a,n,o,i);return u}(this,i,a,e,t,r)),s},T.prototype.cork=function(){this._writableState.corked++},T.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||A(this,e))},T.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new w(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(T.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(T.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),T.prototype._write=function(e,t,r){r(new y("_write()"))},T.prototype._writev=null,T.prototype.end=function(e,t,r){var n=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||function(e,t,r){t.ending=!0,j(e,t),r&&(t.finished?o.nextTick(r):e.once("finish",r));t.ended=!0,e.writable=!1}(this,n,r),this},Object.defineProperty(T.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(T.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),T.prototype.destroy=f.destroy,T.prototype._undestroy=f.undestroy,T.prototype._destroy=function(e,t){t(e)}},5850:(e,t,r)=>{"use strict";var n,o=r(4155);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=r(8610),a=Symbol("lastResolve"),c=Symbol("lastReject"),u=Symbol("error"),l=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),d=Symbol("stream");function p(e,t){return{value:e,done:t}}function y(e){var t=e[a];if(null!==t){var r=e[d].read();null!==r&&(e[f]=null,e[a]=null,e[c]=null,t(p(r,!1)))}}function g(e){o.nextTick(y,e)}var m=Object.getPrototypeOf((function(){})),b=Object.setPrototypeOf((i(n={get stream(){return this[d]},next:function(){var e=this,t=this[u];if(null!==t)return Promise.reject(t);if(this[l])return Promise.resolve(p(void 0,!0));if(this[d].destroyed)return new Promise((function(t,r){o.nextTick((function(){e[u]?r(e[u]):t(p(void 0,!0))}))}));var r,n=this[f];if(n)r=new Promise(function(e,t){return function(r,n){e.then((function(){t[l]?r(p(void 0,!0)):t[h](r,n)}),n)}}(n,this));else{var i=this[d].read();if(null!==i)return Promise.resolve(p(i,!1));r=new Promise(this[h])}return this[f]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var e=this;return new Promise((function(t,r){e[d].destroy(null,(function(e){e?r(e):t(p(void 0,!0))}))}))})),n),m);e.exports=function(e){var t,r=Object.create(b,(i(t={},d,{value:e,writable:!0}),i(t,a,{value:null,writable:!0}),i(t,c,{value:null,writable:!0}),i(t,u,{value:null,writable:!0}),i(t,l,{value:e._readableState.endEmitted,writable:!0}),i(t,h,{value:function(e,t){var n=r[d].read();n?(r[f]=null,r[a]=null,r[c]=null,e(p(n,!1))):(r[a]=e,r[c]=t)},writable:!0}),t));return r[f]=null,s(e,(function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[c];return null!==t&&(r[f]=null,r[a]=null,r[c]=null,t(e)),void(r[u]=e)}var n=r[a];null!==n&&(r[f]=null,r[a]=null,r[c]=null,n(p(void 0,!0))),r[l]=!0})),e.on("readable",g.bind(null,r)),r}},7327:(e,t,r)=>{"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=r(8764).Buffer,a=r(6854).inspect,c=a&&a.custom||"inspect";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}var t,r,u;return t=e,r=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return s.alloc(0);for(var t,r,n,o=s.allocUnsafe(e>>>0),i=this.head,a=0;i;)t=i.data,r=o,n=a,s.prototype.copy.call(t,r,n),a+=i.data.length,i=i.next;return o}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var o=t.data,i=e>o.length?o.length:e;if(i===o.length?n+=o:n+=o.slice(0,e),0==(e-=i)){i===o.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=o.slice(i));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=s.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var o=r.data,i=e>o.length?o.length:e;if(o.copy(t,t.length-e,0,i),0==(e-=i)){i===o.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=o.slice(i));break}++n}return this.length-=n,t}},{key:c,value:function(e,t){return a(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{depth:0,customInspect:!1}))}}],r&&i(t.prototype,r),u&&i(t,u),e}()},1195:(e,t,r)=>{"use strict";var n=r(4155);function o(e,t){s(e,t),i(e)}function i(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit("close")}function s(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var r=this,a=this._readableState&&this._readableState.destroyed,c=this._writableState&&this._writableState.destroyed;return a||c?(t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(s,this,e)):n.nextTick(s,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!t&&e?r._writableState?r._writableState.errorEmitted?n.nextTick(i,r):(r._writableState.errorEmitted=!0,n.nextTick(o,r,e)):n.nextTick(o,r,e):t?(n.nextTick(i,r),t(e)):n.nextTick(i,r)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}},8610:(e,t,r)=>{"use strict";var n=r(4281).q.ERR_STREAM_PREMATURE_CLOSE;function o(){}e.exports=function e(t,r,i){if("function"==typeof r)return e(t,null,r);r||(r={}),i=function(e){var t=!1;return function(){if(!t){t=!0;for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n)}}}(i||o);var s=r.readable||!1!==r.readable&&t.readable,a=r.writable||!1!==r.writable&&t.writable,c=function(){t.writable||l()},u=t._writableState&&t._writableState.finished,l=function(){a=!1,u=!0,s||i.call(t)},f=t._readableState&&t._readableState.endEmitted,h=function(){s=!1,f=!0,a||i.call(t)},d=function(e){i.call(t,e)},p=function(){var e;return s&&!f?(t._readableState&&t._readableState.ended||(e=new n),i.call(t,e)):a&&!u?(t._writableState&&t._writableState.ended||(e=new n),i.call(t,e)):void 0},y=function(){t.req.on("finish",l)};return!function(e){return e.setHeader&&"function"==typeof e.abort}(t)?a&&!t._writableState&&(t.on("end",c),t.on("close",c)):(t.on("complete",l),t.on("abort",p),t.req?y():t.on("request",y)),t.on("end",h),t.on("finish",l),!1!==r.error&&t.on("error",d),t.on("close",p),function(){t.removeListener("complete",l),t.removeListener("abort",p),t.removeListener("request",y),t.req&&t.req.removeListener("finish",l),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",l),t.removeListener("end",h),t.removeListener("error",d),t.removeListener("close",p)}}},5167:e=>{e.exports=function(){throw new Error("Readable.from is not available in the browser")}},9946:(e,t,r)=>{"use strict";var n;var o=r(4281).q,i=o.ERR_MISSING_ARGS,s=o.ERR_STREAM_DESTROYED;function a(e){if(e)throw e}function c(e,t,o,i){i=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}}(i);var a=!1;e.on("close",(function(){a=!0})),void 0===n&&(n=r(8610)),n(e,{readable:t,writable:o},(function(e){if(e)return i(e);a=!0,i()}));var c=!1;return function(t){if(!a&&!c)return c=!0,function(e){return e.setHeader&&"function"==typeof e.abort}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void i(t||new s("pipe"))}}function u(e){e()}function l(e,t){return e.pipe(t)}function f(e){return e.length?"function"!=typeof e[e.length-1]?a:e.pop():a}e.exports=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,o=f(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new i("streams");var s=t.map((function(e,r){var i=r<t.length-1;return c(e,i,r>0,(function(e){n||(n=e),e&&s.forEach(u),i||(s.forEach(u),o(n))}))}));return t.reduce(l)}},2457:(e,t,r)=>{"use strict";var n=r(4281).q.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,o){var i=function(e,t,r){return null!=e.highWaterMark?e.highWaterMark:t?e[r]:null}(t,o,r);if(null!=i){if(!isFinite(i)||Math.floor(i)!==i||i<0)throw new n(o?r:"highWaterMark",i);return Math.floor(i)}return e.objectMode?16:16384}}},2503:(e,t,r)=>{e.exports=r(7187).EventEmitter},8473:(e,t,r)=>{(t=e.exports=r(9481)).Stream=t,t.Readable=t,t.Writable=r(4229),t.Duplex=r(6753),t.Transform=r(4605),t.PassThrough=r(2725),t.finished=r(8610),t.pipeline=r(9946)},9509:(e,t,r)=>{
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var n=r(8764),o=n.Buffer;function i(e,t){for(var r in e)t[r]=e[r]}function s(e,t,r){return o(e,t,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=n:(i(n,t),t.Buffer=s),s.prototype=Object.create(o.prototype),i(o,s),s.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,t,r)},s.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=o(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},2830:(e,t,r)=>{e.exports=o;var n=r(7187).EventEmitter;function o(){n.call(this)}r(5717)(o,n),o.Readable=r(9481),o.Writable=r(4229),o.Duplex=r(6753),o.Transform=r(4605),o.PassThrough=r(2725),o.finished=r(8610),o.pipeline=r(9946),o.Stream=o,o.prototype.pipe=function(e,t){var r=this;function o(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}function i(){r.readable&&r.resume&&r.resume()}r.on("data",o),e.on("drain",i),e._isStdio||t&&!1===t.end||(r.on("end",a),r.on("close",c));var s=!1;function a(){s||(s=!0,e.end())}function c(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function u(e){if(l(),0===n.listenerCount(this,"error"))throw e}function l(){r.removeListener("data",o),e.removeListener("drain",i),r.removeListener("end",a),r.removeListener("close",c),r.removeListener("error",u),e.removeListener("error",u),r.removeListener("end",l),r.removeListener("close",l),e.removeListener("close",l)}return r.on("error",u),e.on("error",u),r.on("end",l),r.on("close",l),e.on("close",l),e.emit("pipe",r),e}},8501:(e,t,r)=>{var n=r(1989),o=r(5676),i=r(7529),s=r(584),a=r(8575),c=t;c.request=function(e,t){e="string"==typeof e?a.parse(e):i(e);var o=-1===r.g.location.protocol.search(/^https?:$/)?"http:":"",s=e.protocol||o,c=e.hostname||e.host,u=e.port,l=e.path||"/";c&&-1!==c.indexOf(":")&&(c="["+c+"]"),e.url=(c?s+"//"+c:"")+(u?":"+u:"")+l,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var f=new n(e);return t&&f.on("response",t),f},c.get=function(e,t){var r=c.request(e,t);return r.end(),r},c.ClientRequest=n,c.IncomingMessage=o.IncomingMessage,c.Agent=function(){},c.Agent.defaultMaxSockets=4,c.globalAgent=new c.Agent,c.STATUS_CODES=s,c.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]},8725:(e,t,r)=>{var n;function o(){if(void 0!==n)return n;if(r.g.XMLHttpRequest){n=new r.g.XMLHttpRequest;try{n.open("GET",r.g.XDomainRequest?"/":"https://example.com")}catch(e){n=null}}else n=null;return n}function i(e){var t=o();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function s(e){return"function"==typeof e}t.fetch=s(r.g.fetch)&&s(r.g.ReadableStream),t.writableStream=s(r.g.WritableStream),t.abortController=s(r.g.AbortController),t.arraybuffer=t.fetch||i("arraybuffer"),t.msstream=!t.fetch&&i("ms-stream"),t.mozchunkedarraybuffer=!t.fetch&&i("moz-chunked-arraybuffer"),t.overrideMimeType=t.fetch||!!o()&&s(o().overrideMimeType),n=null},1989:(e,t,r)=>{var n=r(8764).Buffer,o=r(4155),i=r(8725),s=r(5717),a=r(5676),c=r(8473),u=a.IncomingMessage,l=a.readyStates;var f=e.exports=function(e){var t,r=this;c.Writable.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+n.from(e.auth).toString("base64")),Object.keys(e.headers).forEach((function(t){r.setHeader(t,e.headers[t])}));var o=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!i.abortController)o=!1,t=!0;else if("prefer-streaming"===e.mode)t=!1;else if("allow-wrong-content-type"===e.mode)t=!i.overrideMimeType;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");t=!0}r._mode=function(e,t){return i.fetch&&t?"fetch":i.mozchunkedarraybuffer?"moz-chunked-arraybuffer":i.msstream?"ms-stream":i.arraybuffer&&e?"arraybuffer":"text"}(t,o),r._fetchTimer=null,r._socketTimeout=null,r._socketTimer=null,r.on("finish",(function(){r._onFinish()}))};s(f,c.Writable),f.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===h.indexOf(r)&&(this._headers[r]={name:e,value:t})},f.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},f.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},f.prototype._onFinish=function(){var e=this;if(!e._destroyed){var t=e._opts;"timeout"in t&&0!==t.timeout&&e.setTimeout(t.timeout);var n=e._headers,s=null;"GET"!==t.method&&"HEAD"!==t.method&&(s=new Blob(e._body,{type:(n["content-type"]||{}).value||""}));var a=[];if(Object.keys(n).forEach((function(e){var t=n[e].name,r=n[e].value;Array.isArray(r)?r.forEach((function(e){a.push([t,e])})):a.push([t,r])})),"fetch"===e._mode){var c=null;if(i.abortController){var u=new AbortController;c=u.signal,e._fetchAbortController=u,"requestTimeout"in t&&0!==t.requestTimeout&&(e._fetchTimer=r.g.setTimeout((function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()}),t.requestTimeout))}r.g.fetch(e._opts.url,{method:e._opts.method,headers:a,body:s||void 0,mode:"cors",credentials:t.withCredentials?"include":"same-origin",signal:c}).then((function(t){e._fetchResponse=t,e._resetTimers(!1),e._connect()}),(function(t){e._resetTimers(!0),e._destroyed||e.emit("error",t)}))}else{var f=e._xhr=new r.g.XMLHttpRequest;try{f.open(e._opts.method,e._opts.url,!0)}catch(t){return void o.nextTick((function(){e.emit("error",t)}))}"responseType"in f&&(f.responseType=e._mode),"withCredentials"in f&&(f.withCredentials=!!t.withCredentials),"text"===e._mode&&"overrideMimeType"in f&&f.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in t&&(f.timeout=t.requestTimeout,f.ontimeout=function(){e.emit("requestTimeout")}),a.forEach((function(e){f.setRequestHeader(e[0],e[1])})),e._response=null,f.onreadystatechange=function(){switch(f.readyState){case l.LOADING:case l.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(f.onprogress=function(){e._onXHRProgress()}),f.onerror=function(){e._destroyed||(e._resetTimers(!0),e.emit("error",new Error("XHR error")))};try{f.send(s)}catch(t){return void o.nextTick((function(){e.emit("error",t)}))}}}},f.prototype._onXHRProgress=function(){var e=this;e._resetTimers(!1),function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(e._xhr)&&!e._destroyed&&(e._response||e._connect(),e._response._onXHRProgress(e._resetTimers.bind(e)))},f.prototype._connect=function(){var e=this;e._destroyed||(e._response=new u(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",(function(t){e.emit("error",t)})),e.emit("response",e._response))},f.prototype._write=function(e,t,r){this._body.push(e),r()},f.prototype._resetTimers=function(e){var t=this;r.g.clearTimeout(t._socketTimer),t._socketTimer=null,e?(r.g.clearTimeout(t._fetchTimer),t._fetchTimer=null):t._socketTimeout&&(t._socketTimer=r.g.setTimeout((function(){t.emit("timeout")}),t._socketTimeout))},f.prototype.abort=f.prototype.destroy=function(e){var t=this;t._destroyed=!0,t._resetTimers(!0),t._response&&(t._response._destroyed=!0),t._xhr?t._xhr.abort():t._fetchAbortController&&t._fetchAbortController.abort(),e&&t.emit("error",e)},f.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),c.Writable.prototype.end.call(this,e,t,r)},f.prototype.setTimeout=function(e,t){var r=this;t&&r.once("timeout",t),r._socketTimeout=e,r._resetTimers(!1)},f.prototype.flushHeaders=function(){},f.prototype.setNoDelay=function(){},f.prototype.setSocketKeepAlive=function(){};var h=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]},5676:(e,t,r)=>{var n=r(4155),o=r(8764).Buffer,i=r(8725),s=r(5717),a=r(8473),c=t.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},u=t.IncomingMessage=function(e,t,r,s){var c=this;if(a.Readable.call(c),c._mode=r,c.headers={},c.rawHeaders=[],c.trailers={},c.rawTrailers=[],c.on("end",(function(){n.nextTick((function(){c.emit("close")}))})),"fetch"===r){if(c._fetchResponse=t,c.url=t.url,c.statusCode=t.status,c.statusMessage=t.statusText,t.headers.forEach((function(e,t){c.headers[t.toLowerCase()]=e,c.rawHeaders.push(t,e)})),i.writableStream){var u=new WritableStream({write:function(e){return s(!1),new Promise((function(t,r){c._destroyed?r():c.push(o.from(e))?t():c._resumeFetch=t}))},close:function(){s(!0),c._destroyed||c.push(null)},abort:function(e){s(!0),c._destroyed||c.emit("error",e)}});try{return void t.body.pipeTo(u).catch((function(e){s(!0),c._destroyed||c.emit("error",e)}))}catch(e){}}var l=t.body.getReader();!function e(){l.read().then((function(t){c._destroyed||(s(t.done),t.done?c.push(null):(c.push(o.from(t.value)),e()))})).catch((function(e){s(!0),c._destroyed||c.emit("error",e)}))}()}else{if(c._xhr=e,c._pos=0,c.url=e.responseURL,c.statusCode=e.status,c.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===c.headers[r]&&(c.headers[r]=[]),c.headers[r].push(t[2])):void 0!==c.headers[r]?c.headers[r]+=", "+t[2]:c.headers[r]=t[2],c.rawHeaders.push(t[1],t[2])}})),c._charset="x-user-defined",!i.overrideMimeType){var f=c.rawHeaders["mime-type"];if(f){var h=f.match(/;\s*charset=([^;])(;|$)/);h&&(c._charset=h[1].toLowerCase())}c._charset||(c._charset="utf-8")}}};s(u,a.Readable),u.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},u.prototype._onXHRProgress=function(e){var t=this,n=t._xhr,i=null;switch(t._mode){case"text":if((i=n.responseText).length>t._pos){var s=i.substr(t._pos);if("x-user-defined"===t._charset){for(var a=o.alloc(s.length),u=0;u<s.length;u++)a[u]=255&s.charCodeAt(u);t.push(a)}else t.push(s,t._charset);t._pos=i.length}break;case"arraybuffer":if(n.readyState!==c.DONE||!n.response)break;i=n.response,t.push(o.from(new Uint8Array(i)));break;case"moz-chunked-arraybuffer":if(i=n.response,n.readyState!==c.LOADING||!i)break;t.push(o.from(new Uint8Array(i)));break;case"ms-stream":if(i=n.response,n.readyState!==c.LOADING)break;var l=new r.g.MSStreamReader;l.onprogress=function(){l.result.byteLength>t._pos&&(t.push(o.from(new Uint8Array(l.result.slice(t._pos)))),t._pos=l.result.byteLength)},l.onload=function(){e(!0),t.push(null)},l.readAsArrayBuffer(i)}t._xhr.readyState===c.DONE&&"ms-stream"!==t._mode&&(e(!0),t.push(null))}},2553:(e,t,r)=>{"use strict";var n=r(9509).Buffer,o=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function i(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(n.isEncoding===o||!o(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=c,this.end=u,t=4;break;case"utf8":this.fillLast=a,t=4;break;case"base64":this.text=l,this.end=f,t=3;break;default:return this.write=h,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(t)}function s(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,r=function(e,t,r){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function l(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function f(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}t.s=i,i.prototype.write=function(e){if(0===e.length)return"";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},i.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},i.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1;if(n<r)return 0;var o=s(t[n]);if(o>=0)return o>0&&(e.lastNeed=o-1),o;if(--n<r||-2===o)return 0;if((o=s(t[n]))>=0)return o>0&&(e.lastNeed=o-2),o;if(--n<r||-2===o)return 0;if((o=s(t[n]))>=0)return o>0&&(2===o?o=0:e.lastNeed=o-3),o;return 0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},i.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},1991:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(r(3607));o(r(3607),t),t.default=s.default},6789:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(2793),t),o(r(1890),t);const i=r(8764);o(r(2398),t),globalThis==globalThis.window&&(globalThis.Buffer=i.Buffer)},2793:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCOfferOptions=t.RTCIceCandidate=t.RTCSessionDescription=t.RTCDataChannel=t.RTCPeerConnection=void 0;const o=n(r(2011));t.RTCPeerConnection=o.default.RTCPeerConnection,t.RTCDataChannel=o.default.RTCDataChannel,t.RTCSessionDescription=o.default.RTCSessionDescription,t.RTCIceCandidate=o.default.RTCIceCandidate,t.RTCOfferOptions=o.default.RTCOfferOptions},1890:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WebSocket=t.inNode=t.inBrowser=void 0;const o=n(r(5241)),i=n(r(6729));function s(){return globalThis===globalThis.window}t.inBrowser=s,t.inNode=function(){return!s};class a extends i.default{constructor(e){super(),this.websocket=new o.default(e),this.websocket.addEventListener("message",(e=>this.emit("data",e.data))),this.websocket.addEventListener("close",(()=>this.emit("close"))),this.websocket.addEventListener("error",(e=>this.emit("error",new Error(e.data)))),this.websocket.addEventListener("open",(()=>this.emit("open")))}send(e){this.websocket.send(e)}close(){try{if(!this.websocket)return;this.websocket.removeAllListeners("data"),this.websocket.removeAllListeners("open"),this.websocket.removeAllListeners("error"),this.websocket.removeAllListeners("close"),this.websocket.close()}catch(e){}}get readyState(){return this.websocket.readyState}get binaryType(){return this.websocket.binaryType}get bufferedAmount(){return this.websocket.bufferedAmount}get extensions(){return this.websocket.extensions}get protocol(){return this.websocket.protocol}get url(){return this.websocket.url}get OPEN(){return this.websocket.OPEN}}t.WebSocket=a,t.default=a},8913:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={peerVersion:"1.4.6",mtu:16300,inBrowser:globalThis===globalThis.window}},1045:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;const o=n(r(9961)),i=n(r(8913));t.API=class{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:r,port:n,path:o,key:s}=this._options,a=new URL(`${t}://${r}:${n}${o}${s}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",i.default.peerVersion),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(200!==e.status)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){throw o.default.error("Error retrieving ID",e),new Error("Could not get an ID from the server."+"")}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(200!==e.status){if(401===e.status){let e="";throw e="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+e)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw o.default.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}},3482:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseConnection=void 0;const n=r(6729);class o extends n.EventEmitter{constructor(e,t,r){super(),this.peer=e,this.provider=t,this.options=r,this._open=!1,this.metadata=r.metadata}get open(){return this._open}}t.BaseConnection=o},7198:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServerMessageType=t.SocketEventType=t.SerializationType=t.PeerErrorType=t.ConnectionType=void 0,function(e){e.Data="data",e.Media="media"}(t.ConnectionType||(t.ConnectionType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(t.PeerErrorType||(t.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json",e.String="string"}(t.SerializationType||(t.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(t.SocketEventType||(t.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE",e.Pull="pull"}(t.ServerMessageType||(t.ServerMessageType={}))},9586:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(6729));class i extends o.default{}t.default=i},393:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(1409)),i=r(9003),s=n(r(9586)),a=r(7198);class c extends s.default{constructor(e,t,r,n,s,c=5e3,u=12e4){var l,f,h,d,p,y;super(),this.pingInterval=c,this.wsRunTime=u,this.host=t,this.wsScoket=new i.WSSocket(e,t,r,n,s,c),this.xhrSocket=new o.default(e,t,r,n,s,this.wsScoket),u>0&&this.wsScoket.setWsRunTime(u);let g=!1;const m=e=>{if(e.type==a.ServerMessageType.Open){if(g)return;g=!0,this.emit("message",e)}else this.emit("message",e)};null===(l=this.wsScoket)||void 0===l||l.on("message",m),null===(f=this.xhrSocket)||void 0===f||f.on("message",m),null===(h=this.wsScoket)||void 0===h||h.on("disconnected",(()=>this.emit("disconnected"))),null===(d=this.xhrSocket)||void 0===d||d.on("disconnected",(()=>this.emit("disconnected"))),null===(p=this.wsScoket)||void 0===p||p.on("close",(()=>this.emit("close"))),null===(y=this.xhrSocket)||void 0===y||y.on("close",(()=>this.emit("close")))}async start(e,t,r="all"){this.mode=r,"ws"==r?(this.wsScoket.setForever(),this.wsScoket&&this.wsScoket.start(e,t)):"xhr"==r?this.xhrSocket&&this.xhrSocket.start(e,t):"forever"==r?(this.wsScoket.setForever(),this.wsScoket&&this.wsScoket.start(e,t),this.xhrSocket&&this.xhrSocket.start(e,t)):(this.wsScoket.config(e,t),this.xhrSocket&&this.xhrSocket.start(e,t))}get id(){return this.xhrSocket.id}get open(){var e;return(null===(e=this.xhrSocket)||void 0===e?void 0:e.open)||this.wsScoket.open}async reconnect(){var e,t;null===(e=this.xhrSocket)||void 0===e||e.reconnect(),null===(t=this.wsScoket)||void 0===t||t.reconnect()}send(e){this.wsScoket&&this.wsScoket.open?this.wsScoket.send(e):this.xhrSocket.send(e)}close(){this.destroy()}destroy(){var e,t;null===(e=this.wsScoket)||void 0===e||e.close(),null===(t=this.xhrSocket)||void 0===t||t.close()}}t.default=c},9003:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WSSocket=void 0;const o=n(r(9961)),i=r(7198),s=n(r(8913)),a=r(6789),c=n(r(9586));class u extends c.default{constructor(e,t,r,n,o,i=5e3){super(),this.pingInterval=i,this._open=!1,this._opening=!1,this._messagesQueue=[],this.previousTime=0,this._isForever=!1,this._wsRunTime=12e4;const s=e?"wss://":"ws://";this._baseUrl=s+t+":"+r+n+"peerjs?key="+o}get id(){return this._id}setWsRunTime(e=12e4){this._wsRunTime=e}config(e,t){this._id=e,this._token=t}setForever(){this._isForever=!0}async start(e,t){this._id=e,this._token=t;const r=`${this._baseUrl}&id=${e}&token=${t}`;this.open||this._opening||(this._opening=!0,this._socket=new a.WebSocket(r+"&version="+s.default.peerVersion),this._socket.on("data",(e=>{try{this.previousTime=Date.now(),e=JSON.parse(e),o.default.log("Server message received:",e)}catch(t){return void o.default.log("Invalid server message",e)}this.emit("message",e)})),this._socket.once("error",(()=>{this.close()})),this._socket.once("close",(()=>{o.default.log("Socket closed."),this._cleanup(),this._open=!1,this._opening=!1})),this._socket.on("open",(()=>{this.open||(this._opening=!1,this._open=!0,this.previousTime=Date.now(),this._sendQueuedMessages(),o.default.log("Socket open"),this._scheduleHeartbeat(),this._wsCloseTimer=setInterval((()=>{this._isForever||this.open&&Date.now()-this.previousTime>=12e4&&this.close()}),1e3))})))}async reconnect(){this.open||this._opening||!this._id||this.start(this._id,this._token)}get open(){return!!this._socket&&1===this._socket.readyState&&this._open}get use(){return!!this.id}_scheduleHeartbeat(){this._wsPingTimer=setTimeout((()=>{this._sendHeartbeat()}),this.pingInterval)}_sendHeartbeat(){if(!this.open)return void o.default.log("Cannot send heartbeat, because socket closed");const e=JSON.stringify({type:i.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(!this.id)return void this._messagesQueue.push(e);if(!e.type)return void this.emit("error",new Error("Invalid message"));if(!this.open)return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._cleanup()}_cleanup(){this.open&&(this._open=!1,this._socket&&(this._socket.close(),this._socket.removeAllListeners("data"),this._socket.removeAllListeners("close"),this._socket.removeAllListeners("error"),this._socket.removeAllListeners("open"),this._socket=void 0),clearTimeout(this._wsPingTimer),clearInterval(this._wsCloseTimer))}}t.WSSocket=u},1409:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(9961)),i=r(7198),s=n(r(9586)),a=n(r(6294));class c extends s.default{constructor(e,t,r,n,o,i){super(),this._messagesQueue=[],this._open=!1,this.key=o;const s=e?"https://":"http://";this._baseUrl=s+t+":"+r,this.wsSocket=i}newUrl(e){return this._baseUrl+"/"+e.replace(/^[\/]+/,"")}get id(){return this._id||""}async start(e,t){if(this._id=e,this.token=t,this.open)return;if(200!=(await(0,a.default)(this.newUrl(`/p/${e}/${t}`),{method:"post",data:{type:"open",key:this.key,timeout:5e3}}).then((e=>200!=e.status?{status:e.status,msg:e.statusText,data:{}}:e.json())).catch((e=>(console.info("open error",e),{status:500,msg:e.message,data:{}})))).status)return this.wsSocket.setForever(),void this.wsSocket.reconnect();this._open=!0,this.emit("message",{type:i.ServerMessageType.Open,payload:"",src:""}),this._sendQueuedMessages(),this._schedulePull()}async reconnect(){this.start(this.id,this.token)}_schedulePull(e=8e3){this._wsPingTimer=setTimeout((()=>{this._sendPull()}),e)}async _sendPull(){var e,t,r;if(this.open){if(1!=(null===(e=this.wsSocket)||void 0===e?void 0:e.open)){const e={type:i.ServerMessageType.Pull,key:this.key,token:this.token};let n=await(0,a.default)(this.newUrl(`/p/${this._id}`),{method:"post",data:e,timeout:5e3}).then((e=>200==e.status?e.json():{status:e.status,msg:e.statusText})).catch((e=>({status:500,msg:e.message})));if(200==n.status&&n.data&&n.data.type)return o.default.log("Server message received:",JSON.stringify(n.data)),this.emit("message",n.data),"OPEN"!=(null===(t=n.data)||void 0===t?void 0:t.type)&&(null===(r=this.wsSocket)||void 0===r||r.reconnect()),void this._schedulePull(2e3);200!=n.status&&o.default.error("Server message received error:",n.status,n.msg)}this._schedulePull()}else o.default.log("Cannot send heartbeat, because socket closed")}get open(){return this._open}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(!this._id||!this.open)return void this._messagesQueue.push(e);if(!e.type)return void this.emit("error",new Error("Invalid message"));if(!this.open)return;const t=Object.assign(Object.assign({},e),{key:this.key});(0,a.default)(this.newUrl(`/p/${this._id}`),{method:"post",data:t})}close(){this.open&&(this._cleanup(),this.emit("disconnected"),this.emit("close"))}_cleanup(){clearTimeout(this._wsPingTimer)}}t.default=c},9961:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogLevel=void 0;var r;!function(e){e[e.Disabled=0]="Disabled",e[e.Errors=1]="Errors",e[e.Warnings=2]="Warnings",e[e.All=3]="All"}(r=t.LogLevel||(t.LogLevel={}));t.default=new class{constructor(){this._logLevel=r.Disabled}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=r.All&&this._print(r.All,...e)}warn(...e){this._logLevel>=r.Warnings&&this._print(r.Warnings,...e)}error(...e){this._logLevel>=r.Errors&&this._print(r.Errors,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=["ipeer: ",...t];for(let e in n)n[e]instanceof Error&&(n[e]="("+n[e].name+") "+n[e].message);e>=r.All?console.log(...n):e>=r.Warnings?console.warn("WARNING",...n):e>=r.Errors&&console.error("ERROR",...n)}}},1416:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MediaConnection=void 0;const o=r(1228),i=n(r(9961)),s=r(7198),a=r(3482);class c extends a.BaseConnection{constructor(e,t,r){super(e,t,r),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||c.ID_PREFIX+o.util.randomToken()}get type(){return s.ConnectionType.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}addStream(e){i.default.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,r=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,r.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(r.candidate);break;default:i.default.warn(`Unrecognized message type:${t} from peer:${this.peer}`)}}answer(e,t={}){if(this._localStream)return void i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");if(!e)return i.default.warn("answer stream is null");this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection(Object.assign(Object.assign({},this.options._payload),{_stream:e}));const r=this.provider._getMessages(this.connectionId);for(let e of r)this.handleMessage(e);this._open=!0}destroy(){this._negotiator&&this._negotiator.cleanup(),this.provider,this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}t.MediaConnection=c,c.ID_PREFIX="mc_"},6333:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Negotiator=void 0;const o=r(1228),i=n(r(9961)),s=r(7198),a=r(6789);t.Negotiator=class{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===s.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){if(this.connection.type===s.ConnectionType.Data){const r=this.connection,n={ordered:!!e.reliable},o=t.createDataChannel(r.label,n);r.initialize(o)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){i.default.log("Creating RTCPeerConnection.");const e=new a.RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,r=this.connection.connectionId,n=this.connection.type,a=this.connection.provider;i.default.log("Listening for ICE candidates."),e.onicecandidate=e=>{e.candidate&&e.candidate.candidate&&(i.default.log(`Received ICE candidates for ${t}:`,e.candidate),a.socket.send({type:s.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:n,connectionId:r},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":i.default.log("iceConnectionState is failed, closing connections to "+t),this.connection.emit("error",new Error("Negotiation of connection to "+t+" failed.")),this.connection.destroy();break;case"closed":i.default.log("iceConnectionState is closed, closing connections to "+t),this.connection.emit("error",new Error("Connection to "+t+" closed.")),this.connection.destroy();break;case"disconnected":i.default.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=o.util.noop}this.connection.emit("iceStateChanged",e.iceConnectionState)},i.default.log("Listening for data channel"),e.ondatachannel=e=>{i.default.log("Received data channel");const n=e.channel;a.getConnection(t,r).initialize(n)},i.default.log("Listening for remote stream"),e.ontrack=e=>{i.default.log("Received remote stream");e.streams[0];const n=a.getConnection(t,r);i.default.log("no support stream"),null==n||n.type,s.ConnectionType.Media}}cleanup(){i.default.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t="closed"!==e.signalingState;let r=!1;if(this.connection.type===s.ConnectionType.Data){const e=this.connection.dataChannel;e&&(r=!!e.readyState&&"closed"!==e.readyState)}(t||r)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{if(!e)throw new Error("no peerConnection");const r=await e.createOffer(this.connection.options.constraints);i.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(r.sdp=this.connection.options.sdpTransform(r.sdp)||r.sdp);try{await e.setLocalDescription(r),i.default.log("Set localDescription:",r,`for:${this.connection.peer}`);let n={sdp:r,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:o.util.browser};if(this.connection.type===s.ConnectionType.Data){const e=this.connection;n=Object.assign(Object.assign({},n),{label:e.label,reliable:e.reliable,serialization:e.serialization})}t.socket.send({type:s.ServerMessageType.Offer,payload:n,dst:this.connection.peer})}catch(e){"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=e&&(t.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to setLocalDescription, ",e))}}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to createOffer, ",e)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{if(!e)throw new Error("no peerConnection");const r=await e.createAnswer();i.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(r.sdp=this.connection.options.sdpTransform(r.sdp)||r.sdp);try{await e.setLocalDescription(r),i.default.log("Set localDescription:",r,`for:${this.connection.peer}`),t.socket.send({type:s.ServerMessageType.Answer,payload:{sdp:r,type:this.connection.type,connectionId:this.connection.connectionId,browser:o.util.browser},dst:this.connection.peer})}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to setLocalDescription, ",e)}}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to create answer, ",e)}}async handleSDP(e,t){t=new a.RTCSessionDescription(t);const r=this.connection.peerConnection,n=this.connection.provider;i.default.log("Setting remote description",t);const o=this;try{if(!r)throw new Error("no peerConnection");await r.setRemoteDescription(t),i.default.log(`Set remoteDescription:${e} for:${this.connection.peer}`),"OFFER"===e&&await o._makeAnswer()}catch(e){n.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to setRemoteDescription, ",e)}}async handleCandidate(e){i.default.log("handleCandidate:",e);const t=e.candidate,r=e.sdpMLineIndex,n=e.sdpMid,o=this.connection.peerConnection,c=this.connection.provider;try{if(!o)throw new Error("no peerConnection");await o.addIceCandidate(new a.RTCIceCandidate({sdpMid:n,sdpMLineIndex:r,candidate:t})),i.default.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){c.emitError(s.PeerErrorType.WebRTC,e),i.default.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(e,t){if(i.default.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return i.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach((r=>{t.addTrack(r,e)}))}_addStreamToMediaConnection(e,t){i.default.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}},5890:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.Packer=void 0;const o=r(6789),i=r(3847);class s{constructor(e){this.index=0,this.index=0,this.dataBuffer=e,this.length=this.dataBuffer.byteLength}unpack(){var e,t=this.unpack_uint8();if(t<128)return t;if((224^t)<32)return(224^t)-32;if((e=160^t)<=15)return this.unpack_raw(e);if((e=176^t)<=15)return this.unpack_string(e);if((e=144^t)<=15)return this.unpack_array(e);if((e=128^t)<=15)return this.unpack_map(e);switch(t){case 192:return null;case 193:case 212:case 213:case 214:case 215:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 216:return e=this.unpack_uint16(),this.unpack_string(e);case 217:return e=this.unpack_uint32(),this.unpack_string(e);case 218:return e=this.unpack_uint16(),this.unpack_raw(e);case 219:return e=this.unpack_uint32(),this.unpack_raw(e);case 220:return e=this.unpack_uint16(),this.unpack_array(e);case 221:return e=this.unpack_uint32(),this.unpack_array(e);case 222:return e=this.unpack_uint16(),this.unpack_map(e);case 223:return e=this.unpack_uint32(),this.unpack_map(e)}}unpack_uint8(){var e=255&this.dataBuffer[this.index];return this.index++,e}unpack_uint16(){var e=this.read(2),t=256*(255&e[0])+(255&e[1]);return this.index+=2,t}unpack_uint32(){var e=this.read(4),t=256*(256*(256*e[0]+e[1])+e[2])+e[3];return this.index+=4,t}unpack_uint64(){var e=this.read(8),t=256*(256*(256*(256*(256*(256*(256*e[0]+e[1])+e[2])+e[3])+e[4])+e[5])+e[6])+e[7];return this.index+=8,t}unpack_int8(){var e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){var e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){var e=this.unpack_uint32();return e<Math.pow(2,31)?e:e-Math.pow(2,32)}unpack_int64(){var e=this.unpack_uint64();return e<Math.pow(2,63)?e:e-Math.pow(2,64)}unpack_raw(e){if(this.length<this.index+e)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+e+" "+this.length);var t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){for(var t,r,n=this.read(e),o=0,i="";o<e;)(t=n[o])<128?(i+=String.fromCharCode(t),o++):(192^t)<32?(r=(192^t)<<6|63&n[o+1],i+=String.fromCharCode(r),o+=2):(r=(15&t)<<12|(63&n[o+1])<<6|63&n[o+2],i+=String.fromCharCode(r),o+=3);return this.index+=e,i}unpack_array(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=this.unpack();return t}unpack_map(e){for(var t={},r=0;r<e;r++){var n=this.unpack(),o=this.unpack();t[n]=o}return t}unpack_float(){var e=this.unpack_uint32(),t=(e>>23&255)-127;return(0===e>>31?1:-1)*(8388607&e|8388608)*Math.pow(2,t-23)}unpack_double(){var e=this.unpack_uint32(),t=this.unpack_uint32(),r=(e>>20&2047)-1023;return(0===e>>31?1:-1)*((1048575&e|1048576)*Math.pow(2,r-20)+t*Math.pow(2,r-52))}read(e){var t=this.index;if(t+e<=this.length)return this.dataBuffer.slice(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class a{constructor(){this.bufferBuilder=new i.BufferBuilder}getBuffer(){return this.bufferBuilder.getBuffer()}pack(e){var t=typeof e;if("undefined"===t||null==e)this.bufferBuilder.append(192);else if("string"===t)this.pack_string(e);else if("number"===t)Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if("boolean"===t)!0===e?this.bufferBuilder.append(195):!1===e&&this.bufferBuilder.append(194);else if(e instanceof n)this.pack_bin(e);else if(/^Buffer$/i.test(e.type)&&e.data&&(e.data.length||e.data.byteLength)>0)e=n.from(e),this.pack_bin(e);else{if("object"!==t)throw new Error('Type "'+t+'" not yet supported');if(null===e)this.bufferBuilder.append(192);else{var r=e.constructor;if(r==Array)this.pack_array(e);else if(r==o.Blob||r==o.File||e instanceof o.Blob||e instanceof o.File)this.pack_bin(e);else if(e instanceof ArrayBuffer||r==ArrayBuffer)this.pack_bin(n.from(e));else if("BYTES_PER_ELEMENT"in e)this.pack_bin(n.from(e));else if(r==Object||r.toString().startsWith("class"))this.pack_object(e);else if(r==Date)this.pack_string(e.toString());else{if("function"!=typeof e.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(e.toBinaryPack())}}}this.bufferBuilder.flush()}pack_bin(e){var t=e.byteLength||e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this.bufferBuilder.append(218),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(t)}this.bufferBuilder.append(e)}pack_string(e){var t=function(e){return e.length>600?n.from(e).byteLength:e.replace(/[^\u0000-\u007F]/g,c).length}(e);if(t<=15)this.pack_uint8(176+t);else if(t<=65535)this.bufferBuilder.append(216),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(t)}this.bufferBuilder.append(e)}pack_array(e){var t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this.bufferBuilder.append(220),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(t)}for(var r=0;r<t;r++)this.pack(e[r])}pack_integer(e){if(e>=-32&&e<=127)this.bufferBuilder.append(255&e);else if(e>=0&&e<=255)this.bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this.bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this.bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this.bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this.bufferBuilder.append(210),this.pack_int32(e);else if(e>=-0x8000000000000000&&e<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(e);else{if(!(e>=0&&e<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(e)}}pack_double(e){var t=0;e<0&&(t=1,e=-e);var r=Math.floor(Math.log(e)/Math.LN2),n=e/Math.pow(2,r)-1,o=Math.floor(n*Math.pow(2,52)),i=Math.pow(2,32),s=t<<31|r+1023<<20|o/i&1048575,a=o%i;this.bufferBuilder.append(203),this.pack_int32(s),this.pack_int32(a)}pack_object(e){var t=Object.keys(e).length;if(t<=15)this.pack_uint8(128+t);else if(t<=65535)this.bufferBuilder.append(222),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(t)}for(var r in e)e.hasOwnProperty(r)&&(this.pack(r),this.pack(e[r]))}pack_uint8(e){this.bufferBuilder.append(e)}pack_uint16(e){this.bufferBuilder.append(e>>8),this.bufferBuilder.append(255&e)}pack_uint32(e){var t=4294967295&e;this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)}pack_uint64(e){var t=e/Math.pow(2,32),r=e%Math.pow(2,32);this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t),this.bufferBuilder.append((4278190080&r)>>>24),this.bufferBuilder.append((16711680&r)>>>16),this.bufferBuilder.append((65280&r)>>>8),this.bufferBuilder.append(255&r)}pack_int8(e){this.bufferBuilder.append(255&e)}pack_int16(e){this.bufferBuilder.append((65280&e)>>8),this.bufferBuilder.append(255&e)}pack_int32(e){this.bufferBuilder.append(e>>>24&255),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)}pack_int64(e){var t=Math.floor(e/Math.pow(2,32)),r=e%Math.pow(2,32);this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t),this.bufferBuilder.append((4278190080&r)>>>24),this.bufferBuilder.append((16711680&r)>>>16),this.bufferBuilder.append((65280&r)>>>8),this.bufferBuilder.append(255&r)}}function c(e){var t=e.charCodeAt(0);return t<=2047?"00":t<=65535?"000":t<=2097151?"0000":t<=67108863?"00000":"000000"}t.Packer=a;const u={unpack:function(e){return new s(e).unpack()},pack:function(e){var t=new a;return t.pack(e),t.getBuffer()}};t.default=u},3847:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.BufferBuilder=t.binaryFeatures=void 0,t.binaryFeatures={},t.binaryFeatures.useBlobBuilder=!0,t.binaryFeatures.useArrayBufferView=!t.binaryFeatures.useBlobBuilder&&!0;t.BufferBuilder=class{constructor(){this._pieces=[],this._parts=[]}append(e){"number"==typeof e?this._pieces.push(e):(this.flush(),e=e instanceof n?e:n.from(e),this._parts.push(e))}flush(){this._pieces.length>0&&(this._parts.push(n.from(this._pieces)),this._pieces=[])}getBuffer(){return this.flush(),n.concat(this._parts)}}},1370:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(5890));t.default=o.default},75:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Peer=void 0;const o=r(6729),i=r(1228),s=n(r(9961)),a=n(r(393)),c=r(1416),u=r(9803),l=r(7198),f=r(1045);class h extends o.EventEmitter{constructor(e,t){var r;let n;super(),this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map,e&&e.constructor==Object?t=e:e&&(n=e.toString()),t=Object.assign({debug:0,host:i.util.CLOUD_HOST,port:i.util.CLOUD_PORT,path:"/",key:h.DEFAULT_KEY,token:i.util.randomToken(),config:i.util.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",handshakeMode:"all",wsRunTime:12e4},t),this._options=t,"/"===this._options.host&&(this._options.host=window.location.hostname),this._options.path&&("/"!==this._options.path[0]&&(this._options.path="/"+this._options.path),"/"!==this._options.path[this._options.path.length-1]&&(this._options.path+="/")),void 0===this._options.secure&&this._options.host!==i.util.CLOUD_HOST?this._options.secure=i.util.isSecure():this._options.host==i.util.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&s.default.setLogFunction(this._options.logFunction),s.default.logLevel=this._options.debug||0,this._api=new f.API(t),this._wssocket=this._createServerConnection(),i.util.supports.audioVideo||i.util.supports.data?!n||i.util.validateId(n)?(n?this._initialize(n):this._api.retrieveId().then((e=>this._initialize(e))).catch((e=>this._abort(l.PeerErrorType.ServerError,e))),globalThis.window==globalThis?(globalThis.addEventListener("close",(()=>this.destroy())),globalThis.addEventListener("beforeunload",(()=>this.destroy()))):null===(r=globalThis.process)||void 0===r||r.on("beforeExit",(()=>this.destroy()))):this._delayedAbort(l.PeerErrorType.InvalidID,`ID "${n}" is invalid`):this._delayedAbort(l.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC")}get id(){return this._id}get uuid(){return this._id+":"+this.server}get options(){return this._options}get open(){return this._open}get socket(){return this._wssocket}get lastServerId(){return this._lastServerId}get server(){return this.options.host+":"+this.options.port}get connections(){const e=Object.create(null);for(let[t,r]of this._connections)e[t]=r;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}_createServerConnection(){const e=new a.default(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval,this._options.wsRunTime);return e.on(l.SocketEventType.Message,(e=>{this._handleMessage(e)})),e.on(l.SocketEventType.Error,(e=>{this._abort(l.PeerErrorType.SocketError,e)})),e.on(l.SocketEventType.Disconnected,(()=>{this.disconnected||(this.emitError(l.PeerErrorType.Network,"Lost connection to server."),this.disconnect())})),e.on(l.SocketEventType.Close,(()=>{this.disconnected||this._abort(l.PeerErrorType.SocketClosed,"Underlying socket is already closed.")})),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token,this._options.handshakeMode)}_handleMessage(e){const t=e.type,r=e.payload,n=e.src;switch(t){case l.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id||"");break;case l.ServerMessageType.Error:this._abort(l.PeerErrorType.ServerError,r.msg);break;case l.ServerMessageType.IdTaken:this._abort(l.PeerErrorType.UnavailableID,`ID "${this.id}" is taken`);break;case l.ServerMessageType.InvalidKey:this._abort(l.PeerErrorType.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case l.ServerMessageType.Leave:s.default.log(`Received leave message from ${n}`),this._cleanupPeer(n),this._connections.delete(n);break;case l.ServerMessageType.Expire:this.emitError(l.PeerErrorType.PeerUnavailable,`Could not connect to peer ${n}`);let o=e.dst,i=this.getConnectionByServiceId(n,o),a=new Error(`Could not connect to peer ${n}`);if(i)null==i||i.emit("error",a);else{let e=this._connections.get(n)||[];null==e||e.forEach((e=>e.emit("error",a)))}break;case l.ServerMessageType.Offer:{const e=r.connectionId;let t=this.getConnection(n,e);if(t&&(t.destroy(),s.default.warn(`Offer received for existing Connection ID:${e}`)),r.type===l.ConnectionType.Media)this.emitError(l.PeerErrorType.PeerUnavailable,`no support MediaConnection ${n}`);else{if(r.type!==l.ConnectionType.Data)return void s.default.warn(`Received malformed connection type:${r.type}`);{let o=new u.Socket(n,this,{connectionId:e,_payload:r,metadata:r.metadata,label:r.label,serialization:r.serialization,reliable:r.reliable});t=o,this._addConnection(n,o),o.once("open",(()=>{this.emit("connection",o),setTimeout((()=>o.emit("open",o)),100)}))}}const o=this._getMessages(e);for(let e of o)null==t||t.handleMessage(e);break}default:{if(!r)return void s.default.warn(`You received a malformed message from ${n} of type ${t}`);const o=r.connectionId,i=this.getConnection(n,o);i&&i.peerConnection?i.handleMessage(e):o?this._storeMessage(o,e):s.default.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){var r;this._lostMessages.has(e)||this._lostMessages.set(e,[]),null===(r=this._lostMessages.get(e))||void 0===r||r.push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){this.disconnected&&(s.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(l.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server."));const r=new u.Socket(e,this,t);return this._addConnection(e,r),r}call(e,t,r={}){if(this.disconnected&&(s.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(l.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.")),!t){let e=new Error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");throw s.default.error(e),e}return new c.MediaConnection(e,this,Object.assign(Object.assign({},r),{_stream:t}))}_addConnection(e,t){var r;s.default.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),null===(r=this._connections.get(e))||void 0===r||r.push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const r=this._connections.get(e);if(!r)return null;for(let e of r)if(e.connectionId===t)return e;return null}getConnectionByServiceId(e,t){const r=this._connections.get(e);if(!r)return null;for(let e of r)if(e.serverId===t)return e;return null}_delayedAbort(e,t){setTimeout((()=>{this._abort(e,t)}),0)}_abort(e,t){s.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}emitError(e,t){let r;s.default.error("Error:",t),r="string"==typeof t?new Error(t):t,r.type=e,this.emit("error",r)}destroy(){this.destroyed||(s.default.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(let e of t)null==e||e.destroy()}disconnect(){if(this.disconnected)return;const e=this.id;s.default.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e||"")}reconnect(){if(this.disconnected&&!this.destroyed)s.default.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);s.default.error("In a hurry? We're still trying to make the initial connection!")}}listAllPeers(e=(e=>{})){this._api.listAllPeers().then((t=>e(t))).catch((e=>this._abort(l.PeerErrorType.ServerError,e)))}}t.Peer=h,h.DEFAULT_KEY="peerjs",t.default=h},6740:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SecretSocket=void 0;const i=o(r(3993)),s=r(6729);t.SecretSocket=class extends s{constructor(e,t){super(),this.socket=e,this.cipher=i.default.createCipher(t),e.on("data",(e=>this.handleData(e))),e.on("open",(()=>this.emit("open",this))),e.on("close",(()=>this.emit("close"))),e.on("error",(e=>this.emit("error",e))),e.on("iceStateChanged",(e=>this.emit("iceStateChanged",e))),e.on("timeout",(()=>this.emit("timeout")))}get peer(){return this.socket.peer}get uuid(){return this.socket.uuid}get open(){return this.socket.open}get provider(){return this.socket.provider}get mtu(){return this.socket.mtu}handleData(e){var t;void 0!==globalThis.window&&/firefox/i.test(null===(t=globalThis.navigator)||void 0===t?void 0:t.userAgent)&&(e=n.from(e));let r=e.byteLength;if(r<2)return e;let o=e[0]^e[r-1];return e=n.concat([e.slice(0,1),this.cipher.decode(e.slice(1,r-1),o),e.slice(r-1)]),this.emit("data",e),e}async read(e){let t=await this.socket.read(e);if(t&&t.byteLength>0){return this.handleData(t)}return t}async end(e){await this.write(e),this.destroy()}async write(e){let t=e instanceof n?e:n.from(e),r=t.byteLength;if(r>2){let e=t[0]^t[r-1];t=n.concat([t.slice(0,1),this.cipher.encode(t.slice(1,r-1),e),t.slice(r-1)])}this.socket.write(t)}pipe(e){return this.socket.pipe(e)}destroy(e){this.socket.destroy(e)}}},95:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SerialSocket=void 0;const c=a(r(6729)),u=s(r(5928)),l=a(r(1370)),f=a(r(3993)).default.createCipher("lqWM5Dhkq9sZ4xOOaKzU4HqY0U6GXK+6jeKj4QtBR/Cq3wboI9yD9et8Zm0o+4jGYvyTA19vH0U+/iSz0xYSDZmE1coyRGpRAE0mpFYnWr5TezSt0FTdnnchm3KxmhBlCp1hAnkpHQGUzqh1ifG3cC5/GJ872pGBPLl+kvfmoZw5PcjSOhtCSnjyUD+pB0O9rnNZ/WtnwsEikE9xtGPptrXXVwUtMEjsCQ+PM6BgVfnu7/Yeouo1vKdGF/P6lyqyps+VyWwaXkmHxCzewIVSgBFpikC4uwj4FDFdJRX0sEt0zNZM58UO2M2CIHbH2VjLW+U3v8Mr/y/tHDZuDIt9BA==");let h=1;class d extends c.default{constructor(e){super(),this._cacheTTL=0,this._chunkedData={},this.socket=e,e.on("data",(e=>this.handleData(e))),e.on("open",(()=>this.emit("open",this))),e.on("close",(()=>{this._chunkedData={},this.emit("close")})),e.on("error",(e=>{this.emit("error",e)})),e.on("iceStateChanged",(e=>this.emit("iceStateChanged",e))),e.on("timeout",(()=>this.emit("timeout")))}get peer(){return this.socket.peer}get uuid(){return this.socket.uuid}get open(){return this.socket.open}get provider(){return this.socket.provider}get mtu(){return this.socket.mtu}set cacheTTL(e){this._cacheTTL=e}get cacheTTL(){return this._cacheTTL}handleData(e){var t;let r,o;void 0!==globalThis.window&&/firefox/i.test(null===(t=globalThis.navigator)||void 0===t?void 0:t.userAgent)&&(e=n.from(e));try{let t=1===u.bit2Int(e.slice(0,1)),i=u.bit2Int(e.slice(1,2));const s=i;let a=f.decode(e.slice(2,2+i),s);if(a.byteLength<1)return n.alloc(0);let c=JSON.parse(a.toString()),h=u.bit2Int(e.slice(2+i,4+i)),d=e.slice(4+i,4+i+h);if(d=t?f.decode(d,s):d,r=c.id,this._chunkedData[r]||(this._chunkedData[r]={list:[],total:0,startTime:Date.now()}),o=this._chunkedData[r],o.list.push({data:d,idx:c.idx,total:e.byteLength}),o.total+=h,this.cacheTTL>0){o.startTime+this.cacheTTL<Date.now()&&(o.list=[])}if(o.total>=c.total){let e=o.list.sort(((e,t)=>e.idx-t.idx)),t=n.concat(e.map((e=>e.data)));try{if(t.byteLength<o.total)this.emit("data",n.alloc(0));else{let e=l.default.unpack(t);this.emit("data",e)}delete this._chunkedData[r]}catch(e){delete this._chunkedData[r],this.emit("error",e)}}}catch(e){o&&(o.list=[]),this.emit("error",e)}return n.alloc(0)}async read(e){let t=await this.socket.read(e);return t&&t.byteLength>0?this.handleData(t):t}async end(e){await this.write(e),this.destroy()}async write(e,t=!1){if(h>=d.MAX_COUNT&&(h=1),!this.open)return void this.emit("error",new Error("socket is not open"));const r=this.socket.mtu;let o=h++,i=l.default.pack(e),s=0;for(let e=0;e>=0&&!(s>=i.byteLength);e++){let a={id:o,idx:e,total:i.byteLength},c=n.from(JSON.stringify(a));if(c.byteLength>255)return void this.emit("error",new Error("send header is large"));const l=c.byteLength;c=f.encode(c,l);let h=r-c.byteLength-4;h=Math.min(h,i.byteLength-s);let d=s+h;if(h<=0)break;let p=t?f.encode(i.slice(s,d),l):i.slice(s,d),y=n.concat([n.from([t?1:0]),n.from(u.int2Bit(c.byteLength,1)),c,n.from(u.int2Bit(h,2)),p]);if(!this.open){this.emit("error",new Error("socket is not open"));break}await this.socket.write(y),s+=h}}pipe(e){return this.socket.pipe(e)}destroy(e){this._chunkedData={},this.socket.destroy(e)}}t.SerialSocket=d,d.MAX_COUNT=8888888888888888},9803:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;const c=r(1228),u=s(r(5928)),l=a(r(9961)),f=r(6333),h=r(7198),d=a(r(8913)),p=a(r(6729)),y=!(!globalThis.window||!globalThis.navigator);class g extends p.default{constructor(e,t,r){super(),this.peer=e,this.options=r,this._open=!1,this.writeable=!1,this.bufferTasks=[],this.metadata=r.metadata,this._provider=t,this.connectionId=this.options.connectionId||g.ID_PREFIX+c.util.randomToken(),this.label=this.options.label||this.connectionId,this.serialization=this.options.serialization||h.SerializationType.Binary,this.reliable=!!this.options.reliable,this._serverId=t.lastServerId||void 0,this._negotiator=new f.Negotiator(this),this._negotiator.startConnection(this.options._payload||{originator:!0});let n=r.timeout||6e4;setTimeout((()=>{this.open||(this.emit("timeout"),this.destroy())}),n)}get serverId(){return this._serverId}get uuid(){return this.peer+":"+this.provider.server}get mtu(){return d.default.mtu}get dataChannel(){return this._dc}get type(){return h.ConnectionType.Data}get bufferSize(){var e;return(null===(e=this.dataChannel)||void 0===e?void 0:e.bufferedAmount)||0}get open(){return this._open&&"open"==this.dataChannel.readyState}get provider(){return this._provider}initialize(e){this._dc=e,this._configureDataChannel(),setInterval((()=>{this._doNext()}),10)}_configureDataChannel(){this.dataChannel.binaryType="arraybuffer",this.dataChannel.onopen=()=>{l.default.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.writeable=!0,this.emit("open",this)},this.dataChannel.addEventListener("message",(e=>{try{this.handleReceiveData(n.from(e.data))}catch(t){l.default.error(`DC#${this.connectionId} dc onmessage:`,e.data),this.emit("error",t)}})),this.dataChannel.onclose=()=>{this._open=!1,l.default.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.destroy()},this.dataChannel.onerror=e=>{var t;this.emit("error",new Error((null===(t=e.error)||void 0===t?void 0:t.message)||"dataChannel error"))},this.on("error",(()=>{this.bufferTasks=[]}))}handleReceiveData(e){this.emit("data",e)}destroy(e){this._open=!1,this.bufferTasks=[],this._negotiator&&(this._negotiator.cleanup(),this._negotiator=void 0),this._provider&&this._provider._removeConnection(this),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc.close()),this.emit("close"),e instanceof Error&&this.emit("error",e)}pipe(e){return this.on("data",(t=>e.write(t))),this.once("close",(()=>e.destroy())),e}async read(e=0){return new Promise((t=>{let r;r=e>0?setTimeout((()=>t(n.alloc(0))),e):void 0;const o=e=>{r&&clearTimeout(r),this.dataChannel.removeEventListener("message",o);let i=e.data;switch(typeof i){case"string":default:return t(n.from(i));case"number":return t(n.from(u.int2Bit(i)));case"boolean":return t(n.from([i]))}};this.dataChannel.addEventListener("message",o)}))}async write(e){if(!this.open)return void this.emit("error",new Error("socket is not open. You should listen for the `open` event before sending messages."));let t=n.isBuffer(e)?e:n.from(e);if(!this.writeable||this.bufferTasks.length>0)return new Promise((e=>{this.bufferTasks.push((()=>{this.writeable=!1,this.write0(t).catch((e=>this.emit("error",e))),this.writeable=!0,setTimeout((()=>{this._doNext()}),10),e()}))}));this.writeable=!1,await this.write0(t).catch((e=>this.emit("error",e))),this.writeable=!0,this._doNext()}async end(e){await this.write(e),this.dataChannel.close()}async write0(e){return new Promise((t=>{this._send(e,(()=>t()))}))}_doNext(){setTimeout((()=>{let e=this.bufferTasks.splice(0,1)[0];e&&e()}),1)}async _send(e,t){if(!this.open)return super.emit("error",new Error("socket is not open. You should listen for the `open` event before sending messages.")),void(this.bufferTasks=[]);if(e.byteLength>this.mtu){let r=this._splitChunk(e);for(let e of r)await m(1),await this.write0(e);t&&t()}else if(this.dataChannel.bufferedAmount+e.byteLength<=g.MAX_BUFFERED_AMOUNT){try{this.dataChannel.send(e)}catch(e){return this.bufferTasks=[],void this.emit("error",e)}t&&t()}else setTimeout((()=>this._send(e,t)),10)}handleMessage(e){var t,r;const n=e.payload;switch(e.type){case h.ServerMessageType.Answer:null===(t=this._negotiator)||void 0===t||t.handleSDP(e.type,n.sdp);break;case h.ServerMessageType.Candidate:null===(r=this._negotiator)||void 0===r||r.handleCandidate(n.candidate);break;default:l.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}}_splitChunk(e){let t=this.mtu,r=Math.ceil(e.byteLength/t),n=[];for(let o=0;o<r;o++)n.push(e.slice(t*o,Math.min(t*(o+1),e.byteLength)));return n}}async function m(e=1){return new Promise((t=>{setTimeout((()=>t()),e)}))}t.Socket=g,g.ID_PREFIX="dc_",g.MAX_BUFFERED_AMOUNT=1024*(y?8:128)*1024},3722:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Supports=void 0;const o=r(6789),i=(null===(n=globalThis.navigator)||void 0===n?void 0:n.platform)||"Win32";function s(e,t,r){var n=e.match(t);if(n&&n.length>=r){let e=n[r];if("string"==typeof e)return parseInt(e,10)}return 0}t.Supports=new class{constructor(){this.isIOS=["iPad","iPhone","iPod"].includes(i),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605,this.browser=function(){const e=globalThis;var t={browser:"",version:0,supportsUnifiedPlan:!1};if(void 0===e||!e.navigator)return t.browser="node",t;var r=e.navigator;if(r.mozGetUserMedia)t.browser="firefox",t.version=s(r.userAgent,/Firefox\/(\d+)\./,1);else if(r.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection)t.browser="chrome",t.version=s(r.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else{if(!e.RTCPeerConnection||!r.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=s(r.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return t}()}isWebRTCSupported(){return void 0!==o.RTCPeerConnection}isBrowserSupported(){const e=this.getBrowser(),t=this.getVersion();return!!this.supportedBrowsers.includes(e)&&("chrome"===e?t>=this.minChromeVersion:"firefox"===e?t>=this.minFirefoxVersion:"safari"===e&&(!this.isIOS&&t>=this.minSafariVersion))}getBrowser(){return this.browser.browser}getVersion(){return this.browser.version}isUnifiedPlanSupported(){const e=this.getBrowser(),t=this.getVersion();if("chrome"===e&&t<this.minChromeVersion)return!1;if("firefox"===e&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let r,n=!1;try{r=new o.RTCPeerConnection,null==r||r.addTransceiver("audio"),n=!0}catch(e){}finally{null==r||r.close()}return n}toString(){return`Supports:\n    browser:${this.getBrowser()}\n    version:${this.getVersion()}\n    isIOS:${this.isIOS}\n    isWebRTCSupported:${this.isWebRTCSupported()}\n    isBrowserSupported:${this.isBrowserSupported()}\n    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}}},1228:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0;const i=o(r(1370)),s=r(3722),a=r(6789),c={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};t.util=new class{constructor(){this.CLOUD_HOST="p0.iee.one",this.CLOUD_PORT=443,this.MAX_COUNT=8888888888888888,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=c,this.browser=s.Supports.getBrowser(),this.browserVersion=s.Supports.getVersion(),this.supports=function(){const e={browser:s.Supports.isBrowserSupported(),webRTC:s.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let t;try{if(t=new a.RTCPeerConnection(c),!t)throw new Error("peer connect is null");let r;e.audioVideo=!0;try{r=t.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!r.ordered;try{r.binaryType="blob",e.binaryBlob=!s.Supports.isIOS}catch(e){}}catch(e){}finally{null==r||r.close()}}catch(e){}finally{null==t||t.close()}return e}(),this.pack=i.default.pack,this.unpack=i.default.unpack,this._dataCount=1}noop(){}validateId(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)}chunk(e){"buffer"==e.type&&(e=n.from(e.buffer));const r=[],o=e.byteLength,i=Math.ceil(o/t.util.chunkedMTU);let s=0,a=0;for(this._dataCount>=this.MAX_COUNT&&(this._dataCount=1);a<o;){const n=Math.min(o,a+t.util.chunkedMTU),c=e.slice(a,n),u={__peerData:this._dataCount,n:s,data:c,total:i};r.push(u),a=n,s++}return this._dataCount++,r}blobToArrayBuffer(e,t){const r=new FileReader;return r.onload=function(e){e.target&&t(e.target.result)},r.readAsArrayBuffer(e),r}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=255&e.charCodeAt(r);return t.buffer}randomToken(){return Math.random().toString(36).slice(2)}isSecure(){var e;return"https:"===(null===(e=globalThis.location)||void 0===e?void 0:e.protocol)}}},3607:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IPeer=t.SecretSocket=t.SerialSocket=t.Socket=t.Buffer=void 0;var i=r(8764);Object.defineProperty(t,"Buffer",{enumerable:!0,get:function(){return i.Buffer}});const s=o(r(75));t.IPeer=s.default;var a=r(9803);Object.defineProperty(t,"Socket",{enumerable:!0,get:function(){return a.Socket}});var c=r(95);Object.defineProperty(t,"SerialSocket",{enumerable:!0,get:function(){return c.SerialSocket}});var u=r(6740);Object.defineProperty(t,"SecretSocket",{enumerable:!0,get:function(){return u.SecretSocket}}),globalThis.Buffer=n,t.default=s.default},3993:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(e,t){this.encodeSecret=e,this.decodeSecret=t,this.secret=e.toString("base64")}static createCipher(e){"string"==typeof e&&(e=n.from(e,"base64"));let t=n.alloc(256);for(let r=0;r<t.length;r++){let n=e[r];t.writeUInt8(r,n)}return new o(e,t)}buildVersion(e=2){e=Math.floor(e);let t=0;for(let r=(e=Math.min(e,4))-1;r>=0;r--)t+=Math.floor(256*Math.random())<<8*r;return t}buildFace(){return Math.floor(256*Math.random())}decode(e,t=99){return t%=256,!e||e.byteLength<1?n.alloc(0):(e.forEach(((r,n)=>{let o=this.decodeSecret[r];o=t<=0?o:o^t,e[n]=o})),e)}encode(e,t=99){return t%=256,!e||e.byteLength<1?n.alloc(0):(e.forEach(((r,n)=>{r=t<=0?r:r^t;let o=this.encodeSecret[r];e[n]=o})),e)}}t.default=o},6294:function(e,t,r){"use strict";var n=r(8764).Buffer,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Response=void 0;const i=o(r(3306));class s{constructor(e){this.res=e}get status(){return this.res instanceof Error?500:this.res.status}get statusText(){return this.res instanceof Error?this.res.message:this.res.statusText}buffer(){return n.from(this.res instanceof Error?this.res.message:this.res.data)}text(){return this.buffer().toString()}json(){return JSON.parse(this.text())}}t.Response=s,t.default=async function(e,t){return(t="object"==typeof(e="string"==typeof e?e:(null==t?void 0:t.url)||"")?e:Object.assign({},t)).url=e,t.data=t.data||t.body,await(0,i.default)(Object.assign({timeout:15e3,responseType:"text"},t)).then((e=>new s(e))).catch((e=>new s(e)))}},5928:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.splitChunk=t.buffer2array=t.cycle=t.random2Int=t.bit2Int=t.int2Bit=t.string2Bit=t.wait=t.buildPeerId=void 0;const o=n(r(8913));t.buildPeerId=function(){return Math.random().toString(36).slice(2)},t.wait=async function(e){return new Promise((t=>{setTimeout((()=>t()),e)}))},t.string2Bit=function(e,t=6){return(e=e.substring(0,t)).split("").map((e=>e.charCodeAt(0)))},t.int2Bit=function(e,t=6){let r=Array(6);e=Math.floor(e%281474976710656);let n=Math.floor(e/Math.pow(2,32)),o=Math.floor(e%Math.pow(2,32));for(let e=5;e>=0;e--)r[e]=e>=2?o>>8*(6-e-1)&255:n>>(6-e-1)%4*8&255;return r.slice(6-Math.min(t,6))},t.bit2Int=function(e){e=e.slice(Math.max(e.length-6,0));let t=0,r=0,n=0;for(let t=0;t<e.length;t++){let o=8*(e.length-t-1),i=e[t];o>=32?n+=Math.pow(2,32)*(i<<o%32):o<=24&&(r+=24==o?i*Math.pow(2,24):i<<o)}return t=n+r,t},t.random2Int=function(e){return Math.floor(Math.random()*(e+1))},t.cycle=function(e=5,t){let r;return e=Math.max(e,1),function n(){r=setTimeout((()=>{try{t&&t(),n()}catch(e){}}),1e3*e)}(),{stop(){clearTimeout(r)}}},t.buffer2array=function(e,t){let r=[],n=t||e.length;n=Math.min(n,e.length);for(let t=0;t<n;t++)r.push(e[t]);return r},t.splitChunk=function(e){let t=o.default.mtu,r=Math.ceil(e.byteLength/t),n=[];for(let o=0;o<r;o++)n.push(e.slice(t*o,Math.min(t*(o+1),e.byteLength)));return n}},2511:function(e,t,r){var n;/*! https://mths.be/punycode v1.3.2 by @mathias */e=r.nmd(e),function(o){t&&t.nodeType,e&&e.nodeType;var i="object"==typeof r.g&&r.g;i.global!==i&&i.window!==i&&i.self;var s,a=2147483647,c=36,u=/^xn--/,l=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,p=String.fromCharCode;function y(e){throw RangeError(h[e])}function g(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function m(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+g((e=e.replace(f,".")).split("."),t).join(".")}function b(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function _(e){return g(e,(function(e){var t="";return e>65535&&(t+=p((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=p(e)})).join("")}function v(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function w(e,t,r){var n=0;for(e=r?d(e/700):e>>1,e+=d(e/t);e>455;n+=c)e=d(e/35);return d(n+36*e/(e+38))}function E(e){var t,r,n,o,i,s,u,l,f,h,p,g=[],m=e.length,b=0,v=128,E=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&y("not-basic"),g.push(e.charCodeAt(n));for(o=r>0?r+1:0;o<m;){for(i=b,s=1,u=c;o>=m&&y("invalid-input"),((l=(p=e.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:c)>=c||l>d((a-b)/s))&&y("overflow"),b+=l*s,!(l<(f=u<=E?1:u>=E+26?26:u-E));u+=c)s>d(a/(h=c-f))&&y("overflow"),s*=h;E=w(b-i,t=g.length+1,0==i),d(b/t)>a-v&&y("overflow"),v+=d(b/t),b%=t,g.splice(b++,0,v)}return _(g)}function S(e){var t,r,n,o,i,s,u,l,f,h,g,m,_,E,S,k=[];for(m=(e=b(e)).length,t=128,r=0,i=72,s=0;s<m;++s)(g=e[s])<128&&k.push(p(g));for(n=o=k.length,o&&k.push("-");n<m;){for(u=a,s=0;s<m;++s)(g=e[s])>=t&&g<u&&(u=g);for(u-t>d((a-r)/(_=n+1))&&y("overflow"),r+=(u-t)*_,t=u,s=0;s<m;++s)if((g=e[s])<t&&++r>a&&y("overflow"),g==t){for(l=r,f=c;!(l<(h=f<=i?1:f>=i+26?26:f-i));f+=c)S=l-h,E=c-h,k.push(p(v(h+S%E,0))),l=d(S/E);k.push(p(v(l,0))),i=w(r,_,n==o),r=0,++n}++r,++t}return k.join("")}s={version:"1.3.2",ucs2:{decode:b,encode:_},decode:E,encode:S,toASCII:function(e){return m(e,(function(e){return l.test(e)?"xn--"+S(e):e}))},toUnicode:function(e){return m(e,(function(e){return u.test(e)?E(e.slice(4).toLowerCase()):e}))}},void 0===(n=function(){return s}.call(t,r,t,e))||(e.exports=n)}()},8575:(e,t,r)=>{"use strict";var n=r(2511),o=r(2502);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=_,t.resolve=function(e,t){return _(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?_(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=_(e));return e instanceof i?e.format():i.prototype.format.call(e)},t.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(u),f=["%","/","?",";","#"].concat(l),h=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,y={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=r(7673);function _(e,t,r){if(e&&o.isObject(e)&&e instanceof i)return e;var n=new i;return n.parse(e,t,r),n}i.prototype.parse=function(e,t,r){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var i=e.indexOf("?"),a=-1!==i&&i<e.indexOf("#")?"?":"#",u=e.split(a);u[0]=u[0].replace(/\\/g,"/");var _=e=u.join(a);if(_=_.trim(),!r&&1===e.split("#").length){var v=c.exec(_);if(v)return this.path=_,this.href=_,this.pathname=v[1],v[2]?(this.search=v[2],this.query=t?b.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=s.exec(_);if(w){var E=(w=w[0]).toLowerCase();this.protocol=E,_=_.substr(w.length)}if(r||w||_.match(/^\/\/[^@\/]+@[^@\/]+/)){var S="//"===_.substr(0,2);!S||w&&g[w]||(_=_.substr(2),this.slashes=!0)}if(!g[w]&&(S||w&&!m[w])){for(var k,T,O=-1,R=0;R<h.length;R++){-1!==(A=_.indexOf(h[R]))&&(-1===O||A<O)&&(O=A)}-1!==(T=-1===O?_.lastIndexOf("@"):_.lastIndexOf("@",O))&&(k=_.slice(0,T),_=_.slice(T+1),this.auth=decodeURIComponent(k)),O=-1;for(R=0;R<f.length;R++){var A;-1!==(A=_.indexOf(f[R]))&&(-1===O||A<O)&&(O=A)}-1===O&&(O=_.length),this.host=_.slice(0,O),_=_.slice(O),this.parseHost(),this.hostname=this.hostname||"";var x="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!x)for(var C=this.hostname.split(/\./),j=(R=0,C.length);R<j;R++){var P=C[R];if(P&&!P.match(d)){for(var L="",I=0,B=P.length;I<B;I++)P.charCodeAt(I)>127?L+="x":L+=P[I];if(!L.match(d)){var M=C.slice(0,R),F=C.slice(R+1),N=P.match(p);N&&(M.push(N[1]),F.unshift(N[2])),F.length&&(_="/"+F.join(".")+_),this.hostname=M.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),x||(this.hostname=n.toASCII(this.hostname));var D=this.port?":"+this.port:"",U=this.hostname||"";this.host=U+D,this.href+=this.host,x&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==_[0]&&(_="/"+_))}if(!y[E])for(R=0,j=l.length;R<j;R++){var z=l[R];if(-1!==_.indexOf(z)){var q=encodeURIComponent(z);q===z&&(q=escape(z)),_=_.split(z).join(q)}}var Z=_.indexOf("#");-1!==Z&&(this.hash=_.substr(Z),_=_.slice(0,Z));var W=_.indexOf("?");if(-1!==W?(this.search=_.substr(W),this.query=_.substr(W+1),t&&(this.query=b.parse(this.query)),_=_.slice(0,W)):t&&(this.search="",this.query={}),_&&(this.pathname=_),m[E]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){D=this.pathname||"";var H=this.search||"";this.path=D+H}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,s="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=b.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||m[t])&&!1!==i?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),t+i+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+n},i.prototype.resolve=function(e){return this.resolveObject(_(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if(o.isString(e)){var t=new i;t.parse(e,!1,!0),e=t}for(var r=new i,n=Object.keys(this),s=0;s<n.length;s++){var a=n[s];r[a]=this[a]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var c=Object.keys(e),u=0;u<c.length;u++){var l=c[u];"protocol"!==l&&(r[l]=e[l])}return m[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!m[e.protocol]){for(var f=Object.keys(e),h=0;h<f.length;h++){var d=f[h];r[d]=e[d]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||g[e.protocol])r.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var y=r.pathname||"",b=r.search||"";r.path=y+b}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var _=r.pathname&&"/"===r.pathname.charAt(0),v=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=v||_||r.host&&e.pathname,E=w,S=r.pathname&&r.pathname.split("/")||[],k=(p=e.pathname&&e.pathname.split("/")||[],r.protocol&&!m[r.protocol]);if(k&&(r.hostname="",r.port=null,r.host&&(""===S[0]?S[0]=r.host:S.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),w=w&&(""===p[0]||""===S[0])),v)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,S=p;else if(p.length)S||(S=[]),S.pop(),S=S.concat(p),r.search=e.search,r.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(k)r.hostname=r.host=S.shift(),(x=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=x.shift(),r.host=r.hostname=x.shift());return r.search=e.search,r.query=e.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!S.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var T=S.slice(-1)[0],O=(r.host||e.host||S.length>1)&&("."===T||".."===T)||""===T,R=0,A=S.length;A>=0;A--)"."===(T=S[A])?S.splice(A,1):".."===T?(S.splice(A,1),R++):R&&(S.splice(A,1),R--);if(!w&&!E)for(;R--;R)S.unshift("..");!w||""===S[0]||S[0]&&"/"===S[0].charAt(0)||S.unshift(""),O&&"/"!==S.join("/").substr(-1)&&S.push("");var x,C=""===S[0]||S[0]&&"/"===S[0].charAt(0);k&&(r.hostname=r.host=C?"":S.length?S.shift():"",(x=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=x.shift(),r.host=r.hostname=x.shift()));return(w=w||r.host&&S.length)&&!C&&S.unshift(""),S.length?r.pathname=S.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},i.prototype.parseHost=function(){var e=this.host,t=a.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},2502:e=>{"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},4927:(e,t,r)=>{function n(e){try{if(!r.g.localStorage)return!1}catch(e){return!1}var t=r.g.localStorage[e];return null!=t&&"true"===String(t).toLowerCase()}e.exports=function(e,t){if(n("noDeprecation"))return e;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}}},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},5955:(e,t,r)=>{"use strict";var n=r(2584),o=r(8662),i=r(6430),s=r(5692);function a(e){return e.call.bind(e)}var c="undefined"!=typeof BigInt,u="undefined"!=typeof Symbol,l=a(Object.prototype.toString),f=a(Number.prototype.valueOf),h=a(String.prototype.valueOf),d=a(Boolean.prototype.valueOf);if(c)var p=a(BigInt.prototype.valueOf);if(u)var y=a(Symbol.prototype.valueOf);function g(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function m(e){return"[object Map]"===l(e)}function b(e){return"[object Set]"===l(e)}function _(e){return"[object WeakMap]"===l(e)}function v(e){return"[object WeakSet]"===l(e)}function w(e){return"[object ArrayBuffer]"===l(e)}function E(e){return"undefined"!=typeof ArrayBuffer&&(w.working?w(e):e instanceof ArrayBuffer)}function S(e){return"[object DataView]"===l(e)}function k(e){return"undefined"!=typeof DataView&&(S.working?S(e):e instanceof DataView)}t.isArgumentsObject=n,t.isGeneratorFunction=o,t.isTypedArray=s,t.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},t.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):s(e)||k(e)},t.isUint8Array=function(e){return"Uint8Array"===i(e)},t.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===i(e)},t.isUint16Array=function(e){return"Uint16Array"===i(e)},t.isUint32Array=function(e){return"Uint32Array"===i(e)},t.isInt8Array=function(e){return"Int8Array"===i(e)},t.isInt16Array=function(e){return"Int16Array"===i(e)},t.isInt32Array=function(e){return"Int32Array"===i(e)},t.isFloat32Array=function(e){return"Float32Array"===i(e)},t.isFloat64Array=function(e){return"Float64Array"===i(e)},t.isBigInt64Array=function(e){return"BigInt64Array"===i(e)},t.isBigUint64Array=function(e){return"BigUint64Array"===i(e)},m.working="undefined"!=typeof Map&&m(new Map),t.isMap=function(e){return"undefined"!=typeof Map&&(m.working?m(e):e instanceof Map)},b.working="undefined"!=typeof Set&&b(new Set),t.isSet=function(e){return"undefined"!=typeof Set&&(b.working?b(e):e instanceof Set)},_.working="undefined"!=typeof WeakMap&&_(new WeakMap),t.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(_.working?_(e):e instanceof WeakMap)},v.working="undefined"!=typeof WeakSet&&v(new WeakSet),t.isWeakSet=function(e){return v(e)},w.working="undefined"!=typeof ArrayBuffer&&w(new ArrayBuffer),t.isArrayBuffer=E,S.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&S(new DataView(new ArrayBuffer(1),0,1)),t.isDataView=k;var T="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function O(e){return"[object SharedArrayBuffer]"===l(e)}function R(e){return void 0!==T&&(void 0===O.working&&(O.working=O(new T)),O.working?O(e):e instanceof T)}function A(e){return g(e,f)}function x(e){return g(e,h)}function C(e){return g(e,d)}function j(e){return c&&g(e,p)}function P(e){return u&&g(e,y)}t.isSharedArrayBuffer=R,t.isAsyncFunction=function(e){return"[object AsyncFunction]"===l(e)},t.isMapIterator=function(e){return"[object Map Iterator]"===l(e)},t.isSetIterator=function(e){return"[object Set Iterator]"===l(e)},t.isGeneratorObject=function(e){return"[object Generator]"===l(e)},t.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===l(e)},t.isNumberObject=A,t.isStringObject=x,t.isBooleanObject=C,t.isBigIntObject=j,t.isSymbolObject=P,t.isBoxedPrimitive=function(e){return A(e)||x(e)||C(e)||j(e)||P(e)},t.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(E(e)||R(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(e){Object.defineProperty(t,e,{enumerable:!1,value:function(){throw new Error(e+" is not supported in userland")}})}))},9539:(e,t,r)=>{var n=r(4155),o=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!_(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(u(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,s=String(e).replace(i,(function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),a=n[r];r<o;a=n[++r])m(a)||!E(a)?s+=" "+a:s+=" "+u(a);return s},t.deprecate=function(e,r){if(void 0!==n&&!0===n.noDeprecation)return e;if(void 0===n)return function(){return t.deprecate(e,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(n.throwDeprecation)throw new Error(r);n.traceDeprecation?console.trace(r):console.error(r),o=!0}return e.apply(this,arguments)}};var s={},a=/^$/;if(n.env.NODE_DEBUG){var c=n.env.NODE_DEBUG;c=c.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),a=new RegExp("^"+c+"$","i")}function u(e,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(r)?n.showHidden=r:r&&t._extend(n,r),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),h(n,e,n.depth)}function l(e,t){var r=u.styles[t];return r?"["+u.colors[r][0]+"m"+e+"["+u.colors[r][1]+"m":e}function f(e,t){return e}function h(e,r,n){if(e.customInspect&&r&&T(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return _(o)||(o=h(e,o,n)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(_(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(b(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,r);if(i)return i;var s=Object.keys(r),a=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),k(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(r);if(0===s.length){if(T(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(w(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(S(r))return e.stylize(Date.prototype.toString.call(r),"date");if(k(r))return d(r)}var u,l="",f=!1,E=["{","}"];(y(r)&&(f=!0,E=["[","]"]),T(r))&&(l=" [Function"+(r.name?": "+r.name:"")+"]");return w(r)&&(l=" "+RegExp.prototype.toString.call(r)),S(r)&&(l=" "+Date.prototype.toUTCString.call(r)),k(r)&&(l=" "+d(r)),0!==s.length||f&&0!=r.length?n<0?w(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),u=f?function(e,t,r,n,o){for(var i=[],s=0,a=t.length;s<a;++s)C(t,String(s))?i.push(p(e,t,r,n,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,r,n,o,!0))})),i}(e,r,n,a,s):s.map((function(t){return p(e,r,n,a,t,f)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(u,l,E)):E[0]+l+E[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),C(n,o)||(s="["+o+"]"),a||(e.seen.indexOf(c.value)<0?(a=m(r)?h(e,c.value,null):h(e,c.value,r-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),v(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function y(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function m(e){return null===e}function b(e){return"number"==typeof e}function _(e){return"string"==typeof e}function v(e){return void 0===e}function w(e){return E(e)&&"[object RegExp]"===O(e)}function E(e){return"object"==typeof e&&null!==e}function S(e){return E(e)&&"[object Date]"===O(e)}function k(e){return E(e)&&("[object Error]"===O(e)||e instanceof Error)}function T(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function R(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(e=e.toUpperCase(),!s[e])if(a.test(e)){var r=n.pid;s[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else s[e]=function(){};return s[e]},t.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.types=r(5955),t.isArray=y,t.isBoolean=g,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=_,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=w,t.types.isRegExp=w,t.isObject=E,t.isDate=S,t.types.isDate=S,t.isError=k,t.types.isNativeError=k,t.isFunction=T,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(384);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(){var e=new Date,t=[R(e.getHours()),R(e.getMinutes()),R(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",x(),t.format.apply(t,arguments))},t.inherits=r(5717),t._extend=function(e,t){if(!t||!E(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var j="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(j&&e[j]){var t;if("function"!=typeof(t=e[j]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,j,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,n){e?r(e):t(n)}));try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),j&&Object.defineProperty(t,j,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,o(e))},t.promisify.custom=j,t.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};e.apply(this,t).then((function(e){n.nextTick(s.bind(null,null,e))}),(function(e){n.nextTick(P.bind(null,e,s))}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,o(e)),t}},6430:(e,t,r)=>{"use strict";var n=r(4029),o=r(3083),i=r(1924),s=i("Object.prototype.toString"),a=r(6410)(),c="undefined"==typeof globalThis?r.g:globalThis,u=o(),l=i("String.prototype.slice"),f={},h=r(882),d=Object.getPrototypeOf;a&&h&&d&&n(u,(function(e){if("function"==typeof c[e]){var t=new c[e];if(Symbol.toStringTag in t){var r=d(t),n=h(r,Symbol.toStringTag);if(!n){var o=d(r);n=h(o,Symbol.toStringTag)}f[e]=n.get}}}));var p=r(5692);e.exports=function(e){return!!p(e)&&(a&&Symbol.toStringTag in e?function(e){var t=!1;return n(f,(function(r,n){if(!t)try{var o=r.call(e);o===n&&(t=o)}catch(e){}})),t}(e):l(s(e),8,-1))}},7529:e=>{e.exports=function(){for(var e={},r=0;r<arguments.length;r++){var n=arguments[r];for(var o in n)t.call(n,o)&&(e[o]=n[o])}return e};var t=Object.prototype.hasOwnProperty},2398:e=>{e.exports={File:globalThis.File,Blob:globalThis.Blob}},2011:e=>{e.exports={RTCPeerConnection:globalThis.RTCPeerConnection,RTCDataChannel:globalThis.RTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate,RTCOfferOptions:globalThis.RTCOfferOptions}},5241:e=>{e.exports=globalThis.WebSocket},6854:()=>{},4616:()=>{},3083:(e,t,r)=>{"use strict";var n=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],o="undefined"==typeof globalThis?r.g:globalThis;e.exports=function(){for(var e=[],t=0;t<n.length;t++)"function"==typeof o[n[t]]&&(e[e.length]=n[t]);return e}},3306:(e,t,r)=>{"use strict";var n=r(8764).Buffer,o=r(4155);const i=r(6230),s=r(8575),a=r(1394),c=r(8501),u=r(9267),l=r(2629),f=r(2635),h=r(2830),d=r(7187);function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const y=p(i),g=p(s),m=p(c),b=p(u),_=p(l),v=p(f),w=p(h),E=p(d);function S(e,t){return function(){return e.apply(t,arguments)}}const{toString:k}=Object.prototype,{getPrototypeOf:T}=Object,O=(R=Object.create(null),e=>{const t=k.call(e);return R[t]||(R[t]=t.slice(8,-1).toLowerCase())});var R;const A=e=>(e=e.toLowerCase(),t=>O(t)===e),x=e=>t=>typeof t===e,{isArray:C}=Array,j=x("undefined");const P=A("ArrayBuffer");const L=x("string"),I=x("function"),B=x("number"),M=e=>null!==e&&"object"==typeof e,F=e=>{if("object"!==O(e))return!1;const t=T(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},N=A("Date"),D=A("File"),U=A("Blob"),z=A("FileList"),q=A("URLSearchParams");function Z(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),C(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}const W=(H="undefined"!=typeof Uint8Array&&T(Uint8Array),e=>H&&e instanceof H);var H;const $=A("HTMLFormElement"),G=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),V=A("RegExp"),K=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Z(r,((r,o)=>{!1!==t(r,o,e)&&(n[o]=r)})),Object.defineProperties(e,n)},Y={isArray:C,isArrayBuffer:P,isBuffer:function(e){return null!==e&&!j(e)&&null!==e.constructor&&!j(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||k.call(e)===t||I(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&P(e.buffer),t},isString:L,isNumber:B,isBoolean:e=>!0===e||!1===e,isObject:M,isPlainObject:F,isUndefined:j,isDate:N,isFile:D,isBlob:U,isRegExp:V,isFunction:I,isStream:e=>M(e)&&I(e.pipe),isURLSearchParams:q,isTypedArray:W,isFileList:z,forEach:Z,merge:function e(){const t={},r=(r,n)=>{F(t[n])&&F(r)?t[n]=e(t[n],r):F(r)?t[n]=e({},r):C(r)?t[n]=r.slice():t[n]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Z(arguments[e],r);return t},extend:(e,t,r,{allOwnKeys:n}={})=>(Z(t,((t,n)=>{r&&I(t)?e[n]=S(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],n&&!n(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==r&&T(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:O,kindOfTest:A,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!B(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:$,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:K,freezeMethods:e=>{K(e,((t,r)=>{const n=e[r];I(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return C(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t)};function X(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}Y.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J=X.prototype,Q={};function ee(e){return Y.isPlainObject(e)||Y.isArray(e)}function te(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,r){return e?e.concat(t).map((function(e,t){return e=te(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Q[e]={value:e}})),Object.defineProperties(X,Q),Object.defineProperty(J,"isAxiosError",{value:!0}),X.from=(e,t,r,n,o,i)=>{const s=Object.create(J);return Y.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),X.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const ne=Y.toFlatObject(Y,{},null,(function(e){return/^is[A-Z]/.test(e)}));function oe(e,t,r){if(!Y.isObject(e))throw new TypeError("target must be an object");t=t||new(y.default||FormData);const o=(r=Y.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Y.isUndefined(t[e])}))).metaTokens,i=r.visitor||f,s=r.dots,a=r.indexes,c=(r.Blob||"undefined"!=typeof Blob&&Blob)&&((u=t)&&Y.isFunction(u.append)&&"FormData"===u[Symbol.toStringTag]&&u[Symbol.iterator]);var u;if(!Y.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Y.isDate(e))return e.toISOString();if(!c&&Y.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(e)||Y.isTypedArray(e)?c&&"function"==typeof Blob?new Blob([e]):n.from(e):e}function f(e,r,n){let i=e;if(e&&!n&&"object"==typeof e)if(Y.endsWith(r,"{}"))r=o?r:r.slice(0,-2),e=JSON.stringify(e);else if(Y.isArray(e)&&function(e){return Y.isArray(e)&&!e.some(ee)}(e)||Y.isFileList(e)||Y.endsWith(r,"[]")&&(i=Y.toArray(e)))return r=te(r),i.forEach((function(e,n){!Y.isUndefined(e)&&null!==e&&t.append(!0===a?re([r],n,s):null===a?r:r+"[]",l(e))})),!1;return!!ee(e)||(t.append(re(n,r,s),l(e)),!1)}const h=[],d=Object.assign(ne,{defaultVisitor:f,convertValue:l,isVisitable:ee});if(!Y.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Y.isUndefined(r)){if(-1!==h.indexOf(r))throw Error("Circular reference detected in "+n.join("."));h.push(r),Y.forEach(r,(function(r,o){!0===(!(Y.isUndefined(r)||null===r)&&i.call(t,r,Y.isString(o)?o.trim():o,n,d))&&e(r,n?n.concat(o):[o])})),h.pop()}}(e),t}function ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function se(e,t){this._pairs=[],e&&oe(e,this,t)}const ae=se.prototype;function ce(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ue(e,t,r){if(!t)return e;const n=r&&r.encode||ce,o=r&&r.serialize;let i;if(i=o?o(t,r):Y.isURLSearchParams(t)?t.toString():new se(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}ae.append=function(e,t){this._pairs.push([e,t])},ae.toString=function(e){const t=e?function(t){return e.call(this,t,ie)}:ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class le{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},he={isNode:!0,classes:{URLSearchParams:g.default.URLSearchParams,FormData:y.default,Blob:"undefined"!=typeof Blob&&Blob||null},protocols:["http","https","file","data"]};function de(e){function t(e,r,n,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&Y.isArray(n)?n.length:i,a)return Y.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&Y.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&Y.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!s}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const r={};return Y.forEachEntry(e,((e,n)=>{t(function(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}function pe(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new X("Request failed with status code "+r.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}function ye(e,t){return e&&!function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ge="1.1.3";function me(e,t,r){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,r),this.name="CanceledError"}function be(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}Y.inherits(me,X,{__CANCEL__:!0});const _e=/^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;const ve=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),we=Symbol("internals"),Ee=Symbol("defaults");function Se(e){return e&&String(e).trim().toLowerCase()}function ke(e){return!1===e||null==e?e:Y.isArray(e)?e.map(ke):String(e)}function Te(e,t,r,n){return Y.isFunction(n)?n.call(this,t,r):Y.isString(t)?Y.isString(n)?-1!==t.indexOf(n):Y.isRegExp(n)?n.test(t):void 0:void 0}function Oe(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}function Re(e,t){e&&this.set(e),this[Ee]=t||null}function Ae(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=n[s];o||(o=c),r[i]=a,n[i]=c;let l=s,f=0;for(;l!==i;)f+=r[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const h=u&&c-u;return h?Math.round(1e3*f/h):void 0}}Object.assign(Re.prototype,{set:function(e,t,r){const n=this;function o(e,t,r){const o=Se(t);if(!o)throw new Error("header name must be a non-empty string");const i=Oe(n,o);(!i||!0===r||!1!==n[i]&&!1!==r)&&(n[i||t]=ke(e))}return Y.isPlainObject(e)?Y.forEach(e,((e,r)=>{o(e,r,t)})):o(t,e,r),this},get:function(e,t){if(!(e=Se(e)))return;const r=Oe(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Y.isFunction(t))return t.call(this,e,r);if(Y.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Se(e)){const r=Oe(this,e);return!(!r||t&&!Te(0,this[r],r,t))}return!1},delete:function(e,t){const r=this;let n=!1;function o(e){if(e=Se(e)){const o=Oe(r,e);!o||t&&!Te(0,r[o],o,t)||(delete r[o],n=!0)}}return Y.isArray(e)?e.forEach(o):o(e),n},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,r={};return Y.forEach(this,((n,o)=>{const i=Oe(r,o);if(i)return t[i]=ke(n),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ke(n),r[s]=!0})),this},toJSON:function(e){const t=Object.create(null);return Y.forEach(Object.assign({},this[Ee]||null,this),((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Y.isArray(r)?r.join(", "):r)})),t}}),Object.assign(Re,{from:function(e){return Y.isString(e)?new this((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&ve[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=(this[we]=this[we]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Se(e);t[n]||(!function(e,t){const r=Y.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return Y.isArray(e)?e.forEach(n):n(e),this}}),Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Y.freezeMethods(Re.prototype),Y.freezeMethods(Re);const xe=Symbol("internals");class Ce extends w.default.Transform{constructor(e){super({readableHighWaterMark:(e=Y.toFlatObject(e,{maxRate:0,chunkSize:65536,minChunkSize:100,timeWindow:500,ticksRate:2,samplesCount:15},null,((e,t)=>!Y.isUndefined(t[e])))).chunkSize});const t=this,r=this[xe]={length:e.length,timeWindow:e.timeWindow,ticksRate:e.ticksRate,chunkSize:e.chunkSize,maxRate:e.maxRate,minChunkSize:e.minChunkSize,bytesSeen:0,isCaptured:!1,notifiedBytesLoaded:0,ts:Date.now(),bytes:0,onReadCallback:null},n=Ae(r.ticksRate*e.samplesCount,r.timeWindow);this.on("newListener",(e=>{"progress"===e&&(r.isCaptured||(r.isCaptured=!0))}));let i=0;r.updateProgress=function(e,t){let r=0;const n=1e3/t;let o=null;return function(t,i){const s=Date.now();if(t||s-r>n)return o&&(clearTimeout(o),o=null),r=s,e.apply(null,i);o||(o=setTimeout((()=>(o=null,r=Date.now(),e.apply(null,i))),n-(s-r)))}}((function(){const e=r.length,s=r.bytesSeen,a=s-i;if(!a||t.destroyed)return;const c=n(a);i=s,o.nextTick((()=>{t.emit("progress",{loaded:s,total:e,progress:e?s/e:void 0,bytes:a,rate:c||void 0,estimated:c&&e&&s<=e?(e-s)/c:void 0})}))}),r.ticksRate);const s=()=>{r.updateProgress(!0)};this.once("end",s),this.once("error",s)}_read(e){const t=this[xe];return t.onReadCallback&&t.onReadCallback(),super._read(e)}_transform(e,t,r){const i=this,s=this[xe],a=s.maxRate,c=this.readableHighWaterMark,u=s.timeWindow,l=a/(1e3/u),f=!1!==s.minChunkSize?Math.max(s.minChunkSize,.01*l):0;const h=(e,t)=>{const r=n.byteLength(e);let h,d=null,p=c,y=0;if(a){const e=Date.now();(!s.ts||(y=e-s.ts)>=u)&&(s.ts=e,h=l-s.bytes,s.bytes=h<0?-h:0,y=0),h=l-s.bytes}if(a){if(h<=0)return setTimeout((()=>{t(null,e)}),u-y);h<p&&(p=h)}p&&r>p&&r-p>f&&(d=e.subarray(p),e=e.subarray(0,p)),function(e,t){const r=n.byteLength(e);s.bytesSeen+=r,s.bytes+=r,s.isCaptured&&s.updateProgress(),i.push(e)?o.nextTick(t):s.onReadCallback=()=>{s.onReadCallback=null,o.nextTick(t)}}(e,d?()=>{o.nextTick(t,null,d)}:t)};h(e,(function e(t,n){if(t)return r(t);n?h(n,e):r(null)}))}setLength(e){return this[xe].length=+e,this}}const je=Y.isFunction(v.default.createBrotliDecompress),{http:Pe,https:Le}=_.default,Ie=/https:?/,Be=he.protocols.map((e=>e+":"));function Me(e){e.beforeRedirects.proxy&&e.beforeRedirects.proxy(e),e.beforeRedirects.config&&e.beforeRedirects.config(e)}function Fe(e,t,r){let o=t;if(!o&&!1!==o){const e=a.getProxyForUrl(r);e&&(o=new URL(e))}if(o){if(o.username&&(o.auth=(o.username||"")+":"+(o.password||"")),o.auth){(o.auth.username||o.auth.password)&&(o.auth=(o.auth.username||"")+":"+(o.auth.password||""));const t=n.from(o.auth,"utf8").toString("base64");e.headers["Proxy-Authorization"]="Basic "+t}e.headers.host=e.hostname+(e.port?":"+e.port:"");const t=o.hostname||o.host;e.hostname=t,e.host=t,e.port=o.port,e.path=r,o.protocol&&(e.protocol=o.protocol.includes(":")?o.protocol:`${o.protocol}:`)}e.beforeRedirects.proxy=function(e){Fe(e,t,e.href)}}const Ne=he.isStandardBrowserEnv?{write:function(e,t,r,n,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),Y.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),Y.isString(n)&&s.push("path="+n),Y.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},De=he.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=Y.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0};function Ue(e,t){let r=0;const n=Ae(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,c=n(a);r=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0};u[t?"download":"upload"]=!0,e(u)}}const ze={http:function(e){return new Promise((function(t,r){let o=e.data;const i=e.responseType,s=e.responseEncoding,a=e.method.toUpperCase();let c,u,l,f=!1;const h=new E.default;function d(){c||(c=!0,e.cancelToken&&e.cancelToken.unsubscribe(_),e.signal&&e.signal.removeEventListener("abort",_),h.removeAllListeners())}function p(e,n){u||(u=!0,n&&(f=!0,d()),n?r(e):t(e))}const y=function(e){p(e)},g=function(e){p(e,!0)};function _(t){h.emit("abort",!t||t.type?new me(null,e,l):t)}h.once("abort",g),(e.cancelToken||e.signal)&&(e.cancelToken&&e.cancelToken.subscribe(_),e.signal&&(e.signal.aborted?_():e.signal.addEventListener("abort",_)));const S=ye(e.baseURL,e.url),k=new URL(S),T=k.protocol||Be[0];if("data:"===T){let t;if("GET"!==a)return pe(y,g,{status:405,statusText:"method not allowed",headers:{},config:e});try{t=function(e,t,r){const o=r&&r.Blob||he.classes.Blob,i=be(e);if(void 0===t&&o&&(t=!0),"data"===i){e=i.length?e.slice(i.length+1):e;const r=_e.exec(e);if(!r)throw new X("Invalid URL",X.ERR_INVALID_URL);const s=r[1],a=r[2],c=r[3],u=n.from(decodeURIComponent(c),a?"base64":"utf8");if(t){if(!o)throw new X("Blob is not supported",X.ERR_NOT_SUPPORT);return new o([u],{type:s})}return u}throw new X("Unsupported protocol "+i,X.ERR_NOT_SUPPORT)}(e.url,"blob"===i,{Blob:e.env&&e.env.Blob})}catch(t){throw X.from(t,X.ERR_BAD_REQUEST,e)}return"text"===i?(t=t.toString(s),s&&"utf8"!==s||(o=Y.stripBOM(t))):"stream"===i&&(t=w.default.Readable.from(t)),pe(y,g,{data:t,status:200,statusText:"OK",headers:{},config:e})}if(-1===Be.indexOf(T))return g(new X("Unsupported protocol "+T,X.ERR_BAD_REQUEST,e));const O=Re.from(e.headers).normalize();O.set("User-Agent","axios/1.1.3",!1);const R=e.onDownloadProgress,A=e.onUploadProgress,x=e.maxRate;let C,j;if(Y.isFormData(o)&&Y.isFunction(o.getHeaders))O.set(o.getHeaders());else if(o&&!Y.isStream(o)){if(n.isBuffer(o));else if(Y.isArrayBuffer(o))o=n.from(new Uint8Array(o));else{if(!Y.isString(o))return g(new X("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",X.ERR_BAD_REQUEST,e));o=n.from(o,"utf-8")}if(O.set("Content-Length",o.length,!1),e.maxBodyLength>-1&&o.length>e.maxBodyLength)return g(new X("Request body larger than maxBodyLength limit",X.ERR_BAD_REQUEST,e))}const P=+O.getContentLength();let L,I;if(Y.isArray(x)?(C=x[0],j=x[1]):C=j=x,o&&(A||C)&&(Y.isStream(o)||(o=w.default.Readable.from(o,{objectMode:!1})),o=w.default.pipeline([o,new Ce({length:Y.toFiniteNumber(P),maxRate:Y.toFiniteNumber(C)})],Y.noop),A&&o.on("progress",(e=>{A(Object.assign(e,{upload:!0}))}))),e.auth){L=(e.auth.username||"")+":"+(e.auth.password||"")}if(!L&&k.username){L=k.username+":"+k.password}L&&O.delete("authorization");try{I=ue(k.pathname+k.search,e.params,e.paramsSerializer).replace(/^\?/,"")}catch(t){const r=new Error(t.message);return r.config=e,r.url=e.url,r.exists=!0,g(r)}O.set("Accept-Encoding","gzip, deflate, br",!1);const B={path:I,method:a,headers:O.toJSON(),agents:{http:e.httpAgent,https:e.httpsAgent},auth:L,protocol:T,beforeRedirect:Me,beforeRedirects:{}};let M;e.socketPath?B.socketPath=e.socketPath:(B.hostname=k.hostname,B.port=k.port,Fe(B,e.proxy,T+"//"+k.hostname+(k.port?":"+k.port:"")+B.path));const F=Ie.test(B.protocol);if(B.agent=F?e.httpsAgent:e.httpAgent,e.transport?M=e.transport:0===e.maxRedirects?M=F?b.default:m.default:(e.maxRedirects&&(B.maxRedirects=e.maxRedirects),e.beforeRedirect&&(B.beforeRedirects.config=e.beforeRedirect),M=F?Le:Pe),e.maxBodyLength>-1?B.maxBodyLength=e.maxBodyLength:B.maxBodyLength=1/0,e.insecureHTTPParser&&(B.insecureHTTPParser=e.insecureHTTPParser),l=M.request(B,(function(t){if(l.destroyed)return;const r=[t];let a=t;const c=t.req||l;if(!1!==e.decompress)switch(o&&0===o.length&&t.headers["content-encoding"]&&delete t.headers["content-encoding"],t.headers["content-encoding"]){case"gzip":case"compress":case"deflate":r.push(v.default.createUnzip()),delete t.headers["content-encoding"];break;case"br":je&&(r.push(v.default.createBrotliDecompress()),delete t.headers["content-encoding"])}if(R){const e=+t.headers["content-length"],n=new Ce({length:Y.toFiniteNumber(e),maxRate:Y.toFiniteNumber(j)});R&&n.on("progress",(e=>{R(Object.assign(e,{download:!0}))})),r.push(n)}a=r.length>1?w.default.pipeline(r,Y.noop):r[0];const u=w.default.finished(a,(()=>{u(),d()})),p={status:t.statusCode,statusText:t.statusMessage,headers:new Re(t.headers),config:e,request:c};if("stream"===i)p.data=a,pe(y,g,p);else{const t=[];let r=0;a.on("data",(function(n){t.push(n),r+=n.length,e.maxContentLength>-1&&r>e.maxContentLength&&(f=!0,a.destroy(),g(new X("maxContentLength size of "+e.maxContentLength+" exceeded",X.ERR_BAD_RESPONSE,e,c)))})),a.on("aborted",(function(){if(f)return;const t=new X("maxContentLength size of "+e.maxContentLength+" exceeded",X.ERR_BAD_RESPONSE,e,c);a.destroy(t),g(t)})),a.on("error",(function(t){l.destroyed||g(X.from(t,null,e,c))})),a.on("end",(function(){try{let e=1===t.length?t[0]:n.concat(t);"arraybuffer"!==i&&(e=e.toString(s),s&&"utf8"!==s||(e=Y.stripBOM(e))),p.data=e}catch(t){g(X.from(t,null,e,p.request,p))}pe(y,g,p)}))}h.once("abort",(e=>{a.destroyed||(a.emit("error",e),a.destroy())}))})),h.once("abort",(e=>{g(e),l.destroy(e)})),l.on("error",(function(t){g(X.from(t,null,e,l))})),l.on("socket",(function(e){e.setKeepAlive(!0,6e4)})),e.timeout){const t=parseInt(e.timeout,10);if(isNaN(t))return void g(new X("error trying to parse `config.timeout` to int",X.ERR_BAD_OPTION_VALUE,e,l));l.setTimeout(t,(function(){if(u)return;let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),g(new X(t,r.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,l)),_()}))}if(Y.isStream(o)){let t=!1,r=!1;o.on("end",(()=>{t=!0})),o.once("error",(e=>{r=!0,l.destroy(e)})),o.on("close",(()=>{t||r||_(new me("Request stream has been aborted",e,l))})),o.pipe(l)}else l.end(o)}))},xhr:function(e){return new Promise((function(t,r){let n=e.data;const o=Re.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}Y.isFormData(n)&&he.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+r))}const u=ye(e.baseURL,e.url);function l(){if(!c)return;const n=Re.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());pe((function(e){t(e),a()}),(function(e){r(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:n,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ue(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(r(new X("Request aborted",X.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new X(t,n.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,c)),c=null},he.isStandardBrowserEnv){const t=(e.withCredentials||De(u))&&e.xsrfCookieName&&Ne.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===n&&o.setContentType(null),"setRequestHeader"in c&&Y.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Y.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Ue(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(r(!t||t.type?new me(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=be(u);f&&-1===he.protocols.indexOf(f)?r(new X("Unsupported protocol "+f+":",X.ERR_BAD_REQUEST,e)):c.send(n||null)}))}},qe=e=>{if(Y.isString(e)){const t=ze[e];if(!e)throw Error(Y.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!Y.isFunction(e))throw new TypeError("adapter is not a function");return e},Ze={"Content-Type":"application/x-www-form-urlencoded"};const We={transitional:fe,adapter:function(){let e;return"undefined"!=typeof XMLHttpRequest?e=qe("xhr"):void 0!==o&&"process"===Y.kindOf(o)&&(e=qe("http")),e}(),transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=Y.isObject(e);o&&Y.isHTMLForm(e)&&(e=new FormData(e));if(Y.isFormData(e))return n&&n?JSON.stringify(de(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return oe(e,new he.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return Y.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Y.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return oe(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(Y.isString(e))try{return(t||JSON.parse)(e),Y.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||We.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&Y.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw X.from(e,X.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};function He(e,t){const r=this||We,n=t||r,o=Re.from(n.headers);let i=n.data;return Y.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function $e(e){return!(!e||!e.__CANCEL__)}function Ge(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new me}function Ve(e){Ge(e),e.headers=Re.from(e.headers),e.data=He.call(e,e.transformRequest);return(e.adapter||We.adapter)(e).then((function(t){return Ge(e),t.data=He.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return $e(t)||(Ge(e),t&&t.response&&(t.response.data=He.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}function Ke(e,t){t=t||{};const r={};function n(e,t){return Y.isPlainObject(e)&&Y.isPlainObject(t)?Y.merge(e,t):Y.isPlainObject(t)?Y.merge({},t):Y.isArray(t)?t.slice():t}function o(r){return Y.isUndefined(t[r])?Y.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function i(e){if(!Y.isUndefined(t[e]))return n(void 0,t[e])}function s(r){return Y.isUndefined(t[r])?Y.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function a(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return Y.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||o,n=t(e);Y.isUndefined(n)&&t!==a||(r[e]=n)})),r}Y.forEach(["delete","get","head"],(function(e){We.headers[e]={}})),Y.forEach(["post","put","patch"],(function(e){We.headers[e]=Y.merge(Ze)}));const Ye={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const Xe={};Ye.transitional=function(e,t,r){function n(e,t){return"[Axios v1.1.3] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new X(n(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!Xe[o]&&(Xe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};const Je={assertOptions:function(e,t,r){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new X("option "+i+" must be "+r,X.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}},validators:Ye},Qe=Je.validators;class et{constructor(e){this.defaults=e,this.interceptors={request:new le,response:new le}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ke(this.defaults,t);const{transitional:r,paramsSerializer:n}=t;void 0!==r&&Je.assertOptions(r,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),void 0!==n&&Je.assertOptions(n,{encode:Qe.function,serialize:Qe.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const o=t.headers&&Y.merge(t.headers.common,t.headers[t.method]);o&&Y.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new Re(t.headers,o);const i=[];let s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let u,l=0;if(!s){const e=[Ve.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,a),u=e.length,c=Promise.resolve(t);l<u;)c=c.then(e[l++],e[l++]);return c}u=i.length;let f=t;for(l=0;l<u;){const e=i[l++],t=i[l++];try{f=e(f)}catch(e){t.call(this,e);break}}try{c=Ve.call(this,f)}catch(e){return Promise.reject(e)}for(l=0,u=a.length;l<u;)c=c.then(a[l++],a[l++]);return c}getUri(e){return ue(ye((e=Ke(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],(function(e){et.prototype[e]=function(t,r){return this.request(Ke(r||{},{method:e,url:t,data:(r||{}).data}))}})),Y.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Ke(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}et.prototype[e]=t(),et.prototype[e+"Form"]=t(!0)}));class tt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new me(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new tt((function(t){e=t})),cancel:e}}}const rt=function e(t){const r=new et(t),n=S(et.prototype.request,r);return Y.extend(n,et.prototype,r,{allOwnKeys:!0}),Y.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Ke(t,r))},n}(We);rt.Axios=et,rt.CanceledError=me,rt.CancelToken=tt,rt.isCancel=$e,rt.VERSION=ge,rt.toFormData=oe,rt.AxiosError=X,rt.Cancel=rt.CanceledError,rt.all=function(e){return Promise.all(e)},rt.spread=function(e){return function(t){return e.apply(null,t)}},rt.isAxiosError=function(e){return Y.isObject(e)&&!0===e.isAxiosError},rt.formToJSON=e=>de(Y.isHTMLForm(e)?new FormData(e):e),e.exports=rt},882:(e,t,r)=>{"use strict";var n=r(210)("%Object.getOwnPropertyDescriptor%",!0);if(n)try{n([],"length")}catch(e){n=null}e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var n=r(1991);module.exports=n})();

/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(742)
const ieee754 = __webpack_require__(645)
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ 487:
/***/ ((module) => {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 12:
/***/ ((module) => {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 729:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 738:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 568:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function(){
  var crypt = __webpack_require__(12),
      utf8 = (__webpack_require__(487).utf8),
      isBuffer = __webpack_require__(738),
      bin = (__webpack_require__(487).bin),

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 891:
/***/ ((module) => {

"use strict";


var Config = {
    DEBUG: false,
    LIB_VERSION: '2.45.0'
};

// since es6 imports are static and we run unit tests from the console, window won't be defined when importing this file
var window$1;
if (typeof(window) === 'undefined') {
    var loc = {
        hostname: ''
    };
    window$1 = {
        navigator: { userAgent: '' },
        document: {
            location: loc,
            referrer: ''
        },
        screen: { width: 0, height: 0 },
        location: loc
    };
} else {
    window$1 = window;
}

/*
 * Saved references to long variable names, so that closure compiler can
 * minimize file size.
 */

var ArrayProto = Array.prototype;
var FuncProto = Function.prototype;
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var windowConsole = window$1.console;
var navigator = window$1.navigator;
var document$1 = window$1.document;
var windowOpera = window$1.opera;
var screen = window$1.screen;
var userAgent = navigator.userAgent;
var nativeBind = FuncProto.bind;
var nativeForEach = ArrayProto.forEach;
var nativeIndexOf = ArrayProto.indexOf;
var nativeMap = ArrayProto.map;
var nativeIsArray = Array.isArray;
var breaker = {};
var _ = {
    trim: function(str) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
};

// Console override
var console = {
    /** @type {function(...*)} */
    log: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            try {
                windowConsole.log.apply(windowConsole, arguments);
            } catch (err) {
                _.each(arguments, function(arg) {
                    windowConsole.log(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */
    warn: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = ['Mixpanel warning:'].concat(_.toArray(arguments));
            try {
                windowConsole.warn.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.warn(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */
    error: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */
    critical: function() {
        if (!_.isUndefined(windowConsole) && windowConsole) {
            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    }
};

var log_func_with_prefix = function(func, prefix) {
    return function() {
        arguments[0] = '[' + prefix + '] ' + arguments[0];
        return func.apply(console, arguments);
    };
};
var console_with_prefix = function(prefix) {
    return {
        log: log_func_with_prefix(console.log, prefix),
        error: log_func_with_prefix(console.error, prefix),
        critical: log_func_with_prefix(console.critical, prefix)
    };
};


// UNDERSCORE
// Embed part of the Underscore Library
_.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1));
    }
    if (!_.isFunction(func)) {
        throw new TypeError();
    }
    args = slice.call(arguments, 2);
    bound = function() {
        if (!(this instanceof bound)) {
            return func.apply(context, args.concat(slice.call(arguments)));
        }
        var ctor = {};
        ctor.prototype = func.prototype;
        var self = new ctor();
        ctor.prototype = null;
        var result = func.apply(self, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
            return result;
        }
        return self;
    };
    return bound;
};

/**
 * @param {*=} obj
 * @param {function(...*)=} iterator
 * @param {Object=} context
 */
_.each = function(obj, iterator, context) {
    if (obj === null || obj === undefined) {
        return;
    }
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
                return;
            }
        }
    } else {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                if (iterator.call(context, obj[key], key, obj) === breaker) {
                    return;
                }
            }
        }
    }
};

_.extend = function(obj) {
    _.each(slice.call(arguments, 1), function(source) {
        for (var prop in source) {
            if (source[prop] !== void 0) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
};

_.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
};

// from a comment on http://dbj.org/dbj/?p=286
// fails on only one very rare and deliberate custom object:
// var bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};
_.isFunction = function(f) {
    try {
        return /^\s*\bfunction\b/.test(f);
    } catch (x) {
        return false;
    }
};

_.isArguments = function(obj) {
    return !!(obj && hasOwnProperty.call(obj, 'callee'));
};

_.toArray = function(iterable) {
    if (!iterable) {
        return [];
    }
    if (iterable.toArray) {
        return iterable.toArray();
    }
    if (_.isArray(iterable)) {
        return slice.call(iterable);
    }
    if (_.isArguments(iterable)) {
        return slice.call(iterable);
    }
    return _.values(iterable);
};

_.map = function(arr, callback, context) {
    if (nativeMap && arr.map === nativeMap) {
        return arr.map(callback, context);
    } else {
        var results = [];
        _.each(arr, function(item) {
            results.push(callback.call(context, item));
        });
        return results;
    }
};

_.keys = function(obj) {
    var results = [];
    if (obj === null) {
        return results;
    }
    _.each(obj, function(value, key) {
        results[results.length] = key;
    });
    return results;
};

_.values = function(obj) {
    var results = [];
    if (obj === null) {
        return results;
    }
    _.each(obj, function(value) {
        results[results.length] = value;
    });
    return results;
};

_.include = function(obj, target) {
    var found = false;
    if (obj === null) {
        return found;
    }
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
        return obj.indexOf(target) != -1;
    }
    _.each(obj, function(value) {
        if (found || (found = (value === target))) {
            return breaker;
        }
    });
    return found;
};

_.includes = function(str, needle) {
    return str.indexOf(needle) !== -1;
};

// Underscore Addons
_.inherit = function(subclass, superclass) {
    subclass.prototype = new superclass();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclass.prototype;
    return subclass;
};

_.isObject = function(obj) {
    return (obj === Object(obj) && !_.isArray(obj));
};

_.isEmptyObject = function(obj) {
    if (_.isObject(obj)) {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
};

_.isUndefined = function(obj) {
    return obj === void 0;
};

_.isString = function(obj) {
    return toString.call(obj) == '[object String]';
};

_.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
};

_.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
};

_.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
};

_.encodeDates = function(obj) {
    _.each(obj, function(v, k) {
        if (_.isDate(v)) {
            obj[k] = _.formatDate(v);
        } else if (_.isObject(v)) {
            obj[k] = _.encodeDates(v); // recurse
        }
    });
    return obj;
};

_.timestamp = function() {
    Date.now = Date.now || function() {
        return +new Date;
    };
    return Date.now();
};

_.formatDate = function(d) {
    // YYYY-MM-DDTHH:MM:SS in UTC
    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    return d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds());
};

_.strip_empty_properties = function(p) {
    var ret = {};
    _.each(p, function(v, k) {
        if (_.isString(v) && v.length > 0) {
            ret[k] = v;
        }
    });
    return ret;
};

/*
 * this function returns a copy of object after truncating it.  If
 * passed an Array or Object it will iterate through obj and
 * truncate all the values recursively.
 */
_.truncate = function(obj, length) {
    var ret;

    if (typeof(obj) === 'string') {
        ret = obj.slice(0, length);
    } else if (_.isArray(obj)) {
        ret = [];
        _.each(obj, function(val) {
            ret.push(_.truncate(val, length));
        });
    } else if (_.isObject(obj)) {
        ret = {};
        _.each(obj, function(val, key) {
            ret[key] = _.truncate(val, length);
        });
    } else {
        ret = obj;
    }

    return ret;
};

_.JSONEncode = (function() {
    return function(mixed_val) {
        var value = mixed_val;
        var quote = function(string) {
            var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; // eslint-disable-line no-control-regex
            var meta = { // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };

            escapable.lastIndex = 0;
            return escapable.test(string) ?
                '"' + string.replace(escapable, function(a) {
                    var c = meta[a];
                    return typeof c === 'string' ? c :
                        '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' :
                '"' + string + '"';
        };

        var str = function(key, holder) {
            var gap = '';
            var indent = '    ';
            var i = 0; // The loop counter.
            var k = ''; // The member key.
            var v = ''; // The member value.
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];

            // If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }

            // What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);

                case 'number':
                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';

                case 'boolean':
                case 'null':
                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.

                    return String(value);

                case 'object':
                    // If the type is 'object', we might be dealing with an object or an array or
                    // null.
                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) {
                        return 'null';
                    }

                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];

                    // Is the value an array?
                    if (toString.apply(value) === '[object Array]') {
                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.

                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }

                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? '[]' :
                            gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                            mind + ']' :
                                '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }

                    // Iterate through all of the keys in the object.
                    for (k in value) {
                        if (hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }

                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? '{}' :
                        gap ? '{' + partial.join(',') + '' +
                        mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        };

        // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.
        return str('', {
            '': value
        });
    };
})();

/**
 * From https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
 * Slightly modified to throw a real Error rather than a POJO
 */
_.JSONDecode = (function() {
    var at, // The index of the current character
        ch, // The current character
        escapee = {
            '"': '"',
            '\\': '\\',
            '/': '/',
            'b': '\b',
            'f': '\f',
            'n': '\n',
            'r': '\r',
            't': '\t'
        },
        text,
        error = function(m) {
            var e = new SyntaxError(m);
            e.at = at;
            e.text = text;
            throw e;
        },
        next = function(c) {
            // If a c parameter is provided, verify that it matches the current character.
            if (c && c !== ch) {
                error('Expected \'' + c + '\' instead of \'' + ch + '\'');
            }
            // Get the next character. When there are no more characters,
            // return the empty string.
            ch = text.charAt(at);
            at += 1;
            return ch;
        },
        number = function() {
            // Parse a number value.
            var number,
                string = '';

            if (ch === '-') {
                string = '-';
                next('-');
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
            if (ch === '.') {
                string += '.';
                while (next() && ch >= '0' && ch <= '9') {
                    string += ch;
                }
            }
            if (ch === 'e' || ch === 'E') {
                string += ch;
                next();
                if (ch === '-' || ch === '+') {
                    string += ch;
                    next();
                }
                while (ch >= '0' && ch <= '9') {
                    string += ch;
                    next();
                }
            }
            number = +string;
            if (!isFinite(number)) {
                error('Bad number');
            } else {
                return number;
            }
        },

        string = function() {
            // Parse a string value.
            var hex,
                i,
                string = '',
                uffff;
            // When parsing for string values, we must look for " and \ characters.
            if (ch === '"') {
                while (next()) {
                    if (ch === '"') {
                        next();
                        return string;
                    }
                    if (ch === '\\') {
                        next();
                        if (ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i += 1) {
                                hex = parseInt(next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            string += String.fromCharCode(uffff);
                        } else if (typeof escapee[ch] === 'string') {
                            string += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        string += ch;
                    }
                }
            }
            error('Bad string');
        },
        white = function() {
            // Skip whitespace.
            while (ch && ch <= ' ') {
                next();
            }
        },
        word = function() {
            // true, false, or null.
            switch (ch) {
                case 't':
                    next('t');
                    next('r');
                    next('u');
                    next('e');
                    return true;
                case 'f':
                    next('f');
                    next('a');
                    next('l');
                    next('s');
                    next('e');
                    return false;
                case 'n':
                    next('n');
                    next('u');
                    next('l');
                    next('l');
                    return null;
            }
            error('Unexpected "' + ch + '"');
        },
        value, // Placeholder for the value function.
        array = function() {
            // Parse an array value.
            var array = [];

            if (ch === '[') {
                next('[');
                white();
                if (ch === ']') {
                    next(']');
                    return array; // empty array
                }
                while (ch) {
                    array.push(value());
                    white();
                    if (ch === ']') {
                        next(']');
                        return array;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad array');
        },
        object = function() {
            // Parse an object value.
            var key,
                object = {};

            if (ch === '{') {
                next('{');
                white();
                if (ch === '}') {
                    next('}');
                    return object; // empty object
                }
                while (ch) {
                    key = string();
                    white();
                    next(':');
                    if (Object.hasOwnProperty.call(object, key)) {
                        error('Duplicate key "' + key + '"');
                    }
                    object[key] = value();
                    white();
                    if (ch === '}') {
                        next('}');
                        return object;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad object');
        };

    value = function() {
        // Parse a JSON value. It could be an object, an array, a string,
        // a number, or a word.
        white();
        switch (ch) {
            case '{':
                return object();
            case '[':
                return array();
            case '"':
                return string();
            case '-':
                return number();
            default:
                return ch >= '0' && ch <= '9' ? number() : word();
        }
    };

    // Return the json_parse function. It will have access to all of the
    // above functions and variables.
    return function(source) {
        var result;

        text = source;
        at = 0;
        ch = ' ';
        result = value();
        white();
        if (ch) {
            error('Syntax error');
        }

        return result;
    };
})();

_.base64Encode = function(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = _.utf8Encode(data);

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
            break;
        case 2:
            enc = enc.slice(0, -1) + '=';
            break;
    }

    return enc;
};

_.utf8Encode = function(string) {
    string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    var utftext = '',
        start,
        end;
    var stringl = 0,
        n;

    start = end = 0;
    stringl = string.length;

    for (n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if ((c1 > 127) && (c1 < 2048)) {
            enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.substring(start, string.length);
    }

    return utftext;
};

_.UUID = (function() {

    // Time/ticks information
    // 1*new Date() is a cross browser version of Date.now()
    var T = function() {
        var d = 1 * new Date(),
            i = 0;

        // this while loop figures how many browser ticks go by
        // before 1*new Date() returns a new number, ie the amount
        // of ticks that go by per millisecond
        while (d == 1 * new Date()) {
            i++;
        }

        return d.toString(16) + i.toString(16);
    };

    // Math.Random entropy
    var R = function() {
        return Math.random().toString(16).replace('.', '');
    };

    // User agent entropy
    // This function takes the user agent string, and then xors
    // together each sequence of 8 bytes.  This produces a final
    // sequence of 8 bytes which it returns as hex.
    var UA = function() {
        var ua = userAgent,
            i, ch, buffer = [],
            ret = 0;

        function xor(result, byte_array) {
            var j, tmp = 0;
            for (j = 0; j < byte_array.length; j++) {
                tmp |= (buffer[j] << j * 8);
            }
            return result ^ tmp;
        }

        for (i = 0; i < ua.length; i++) {
            ch = ua.charCodeAt(i);
            buffer.unshift(ch & 0xFF);
            if (buffer.length >= 4) {
                ret = xor(ret, buffer);
                buffer = [];
            }
        }

        if (buffer.length > 0) {
            ret = xor(ret, buffer);
        }

        return ret.toString(16);
    };

    return function() {
        var se = (screen.height * screen.width).toString(16);
        return (T() + '-' + R() + '-' + UA() + '-' + se + '-' + T());
    };
})();

// _.isBlockedUA()
// This is to block various web spiders from executing our JS and
// sending false tracking data
var BLOCKED_UA_STRS = [
    'ahrefsbot',
    'baiduspider',
    'bingbot',
    'bingpreview',
    'facebookexternal',
    'petalbot',
    'pinterest',
    'screaming frog',
    'yahoo! slurp',
    'yandexbot',

    // a whole bunch of goog-specific crawlers
    // https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers
    'adsbot-google',
    'apis-google',
    'duplexweb-google',
    'feedfetcher-google',
    'google favicon',
    'google web preview',
    'google-read-aloud',
    'googlebot',
    'googleweblight',
    'mediapartners-google',
    'storebot-google'
];
_.isBlockedUA = function(ua) {
    var i;
    ua = ua.toLowerCase();
    for (i = 0; i < BLOCKED_UA_STRS.length; i++) {
        if (ua.indexOf(BLOCKED_UA_STRS[i]) !== -1) {
            return true;
        }
    }
    return false;
};

/**
 * @param {Object=} formdata
 * @param {string=} arg_separator
 */
_.HTTPBuildQuery = function(formdata, arg_separator) {
    var use_val, use_key, tmp_arr = [];

    if (_.isUndefined(arg_separator)) {
        arg_separator = '&';
    }

    _.each(formdata, function(val, key) {
        use_val = encodeURIComponent(val.toString());
        use_key = encodeURIComponent(key);
        tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
    });

    return tmp_arr.join(arg_separator);
};

_.getQueryParam = function(url, param) {
    // Expects a raw URL

    param = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regexS = '[\\?&]' + param + '=([^&#]*)',
        regex = new RegExp(regexS),
        results = regex.exec(url);
    if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
        return '';
    } else {
        var result = results[1];
        try {
            result = decodeURIComponent(result);
        } catch(err) {
            console.error('Skipping decoding for malformed query param: ' + result);
        }
        return result.replace(/\+/g, ' ');
    }
};


// _.cookie
// Methods partially borrowed from quirksmode.org/js/cookies.html
_.cookie = {
    get: function(name) {
        var nameEQ = name + '=';
        var ca = document$1.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    },

    parse: function(name) {
        var cookie;
        try {
            cookie = _.JSONDecode(_.cookie.get(name)) || {};
        } catch (err) {
            // noop
        }
        return cookie;
    },

    set_seconds: function(name, value, seconds, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
        var cdomain = '',
            expires = '',
            secure = '';

        if (domain_override) {
            cdomain = '; domain=' + domain_override;
        } else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? '; domain=.' + domain : '';
        }

        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        if (is_cross_site) {
            is_secure = true;
            secure = '; SameSite=None';
        }
        if (is_secure) {
            secure += '; secure';
        }

        document$1.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
    },

    set: function(name, value, days, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
        var cdomain = '', expires = '', secure = '';

        if (domain_override) {
            cdomain = '; domain=' + domain_override;
        } else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? '; domain=.' + domain : '';
        }

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        if (is_cross_site) {
            is_secure = true;
            secure = '; SameSite=None';
        }
        if (is_secure) {
            secure += '; secure';
        }

        var new_cookie_val = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
        document$1.cookie = new_cookie_val;
        return new_cookie_val;
    },

    remove: function(name, is_cross_subdomain, domain_override) {
        _.cookie.set(name, '', -1, is_cross_subdomain, false, false, domain_override);
    }
};

var _localStorageSupported = null;
var localStorageSupported = function(storage, forceCheck) {
    if (_localStorageSupported !== null && !forceCheck) {
        return _localStorageSupported;
    }

    var supported = true;
    try {
        storage = storage || window.localStorage;
        var key = '__mplss_' + cheap_guid(8),
            val = 'xyz';
        storage.setItem(key, val);
        if (storage.getItem(key) !== val) {
            supported = false;
        }
        storage.removeItem(key);
    } catch (err) {
        supported = false;
    }

    _localStorageSupported = supported;
    return supported;
};

// _.localStorage
_.localStorage = {
    is_supported: function(force_check) {
        var supported = localStorageSupported(null, force_check);
        if (!supported) {
            console.error('localStorage unsupported; falling back to cookie store');
        }
        return supported;
    },

    error: function(msg) {
        console.error('localStorage error: ' + msg);
    },

    get: function(name) {
        try {
            return window.localStorage.getItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
        return null;
    },

    parse: function(name) {
        try {
            return _.JSONDecode(_.localStorage.get(name)) || {};
        } catch (err) {
            // noop
        }
        return null;
    },

    set: function(name, value) {
        try {
            window.localStorage.setItem(name, value);
        } catch (err) {
            _.localStorage.error(err);
        }
    },

    remove: function(name) {
        try {
            window.localStorage.removeItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
    }
};

_.register_event = (function() {
    // written by Dean Edwards, 2005
    // with input from Tino Zijdel - crisp@xs4all.nl
    // with input from Carl Sverre - mail@carlsverre.com
    // with input from Mixpanel
    // http://dean.edwards.name/weblog/2005/10/add-event/
    // https://gist.github.com/1930440

    /**
     * @param {Object} element
     * @param {string} type
     * @param {function(...*)} handler
     * @param {boolean=} oldSchool
     * @param {boolean=} useCapture
     */
    var register_event = function(element, type, handler, oldSchool, useCapture) {
        if (!element) {
            console.error('No valid element provided to register_event');
            return;
        }

        if (element.addEventListener && !oldSchool) {
            element.addEventListener(type, handler, !!useCapture);
        } else {
            var ontype = 'on' + type;
            var old_handler = element[ontype]; // can be undefined
            element[ontype] = makeHandler(element, handler, old_handler);
        }
    };

    function makeHandler(element, new_handler, old_handlers) {
        var handler = function(event) {
            event = event || fixEvent(window.event);

            // this basically happens in firefox whenever another script
            // overwrites the onload callback and doesn't pass the event
            // object to previously defined callbacks.  All the browsers
            // that don't define window.event implement addEventListener
            // so the dom_loaded handler will still be fired as usual.
            if (!event) {
                return undefined;
            }

            var ret = true;
            var old_result, new_result;

            if (_.isFunction(old_handlers)) {
                old_result = old_handlers(event);
            }
            new_result = new_handler.call(element, event);

            if ((false === old_result) || (false === new_result)) {
                ret = false;
            }

            return ret;
        };

        return handler;
    }

    function fixEvent(event) {
        if (event) {
            event.preventDefault = fixEvent.preventDefault;
            event.stopPropagation = fixEvent.stopPropagation;
        }
        return event;
    }
    fixEvent.preventDefault = function() {
        this.returnValue = false;
    };
    fixEvent.stopPropagation = function() {
        this.cancelBubble = true;
    };

    return register_event;
})();


var TOKEN_MATCH_REGEX = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');

_.dom_query = (function() {
    /* document.getElementsBySelector(selector)
    - returns an array of element objects from the current document
    matching the CSS selector. Selectors can contain element names,
    class names and ids and can be nested. For example:

    elements = document.getElementsBySelector('div#main p a.external')

    Will return an array of all 'a' elements with 'external' in their
    class attribute that are contained inside 'p' elements that are
    contained inside the 'div' element which has id="main"

    New in version 0.4: Support for CSS2 and CSS3 attribute selectors:
    See http://www.w3.org/TR/css3-selectors/#attribute-selectors

    Version 0.4 - Simon Willison, March 25th 2003
    -- Works in Phoenix 0.5, Mozilla 1.3, Opera 7, Internet Explorer 6, Internet Explorer 5 on Windows
    -- Opera 7 fails

    Version 0.5 - Carl Sverre, Jan 7th 2013
    -- Now uses jQuery-esque `hasClass` for testing class name
    equality.  This fixes a bug related to '-' characters being
    considered not part of a 'word' in regex.
    */

    function getAllChildren(e) {
        // Returns all children of element. Workaround required for IE5/Windows. Ugh.
        return e.all ? e.all : e.getElementsByTagName('*');
    }

    var bad_whitespace = /[\t\r\n]/g;

    function hasClass(elem, selector) {
        var className = ' ' + selector + ' ';
        return ((' ' + elem.className + ' ').replace(bad_whitespace, ' ').indexOf(className) >= 0);
    }

    function getElementsBySelector(selector) {
        // Attempt to fail gracefully in lesser browsers
        if (!document$1.getElementsByTagName) {
            return [];
        }
        // Split selector in to tokens
        var tokens = selector.split(' ');
        var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
        var currentContext = [document$1];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');
            if (token.indexOf('#') > -1) {
                // Token is an ID selector
                bits = token.split('#');
                tagName = bits[0];
                var id = bits[1];
                var element = document$1.getElementById(id);
                if (!element || (tagName && element.nodeName.toLowerCase() != tagName)) {
                    // element not found or tag with that ID not found, return false
                    return [];
                }
                // Set currentContext to contain just this element
                currentContext = [element];
                continue; // Skip to next token
            }
            if (token.indexOf('.') > -1) {
                // Token contains a class selector
                bits = token.split('.');
                tagName = bits[0];
                var className = bits[1];
                if (!tagName) {
                    tagName = '*';
                }
                // Get elements matching tag, filter them for class selector
                found = [];
                foundCount = 0;
                for (j = 0; j < currentContext.length; j++) {
                    if (tagName == '*') {
                        elements = getAllChildren(currentContext[j]);
                    } else {
                        elements = currentContext[j].getElementsByTagName(tagName);
                    }
                    for (k = 0; k < elements.length; k++) {
                        found[foundCount++] = elements[k];
                    }
                }
                currentContext = [];
                currentContextIndex = 0;
                for (j = 0; j < found.length; j++) {
                    if (found[j].className &&
                        _.isString(found[j].className) && // some SVG elements have classNames which are not strings
                        hasClass(found[j], className)
                    ) {
                        currentContext[currentContextIndex++] = found[j];
                    }
                }
                continue; // Skip to next token
            }
            // Code to deal with attribute selectors
            var token_match = token.match(TOKEN_MATCH_REGEX);
            if (token_match) {
                tagName = token_match[1];
                var attrName = token_match[2];
                var attrOperator = token_match[3];
                var attrValue = token_match[4];
                if (!tagName) {
                    tagName = '*';
                }
                // Grab all of the tagName elements within current context
                found = [];
                foundCount = 0;
                for (j = 0; j < currentContext.length; j++) {
                    if (tagName == '*') {
                        elements = getAllChildren(currentContext[j]);
                    } else {
                        elements = currentContext[j].getElementsByTagName(tagName);
                    }
                    for (k = 0; k < elements.length; k++) {
                        found[foundCount++] = elements[k];
                    }
                }
                currentContext = [];
                currentContextIndex = 0;
                var checkFunction; // This function will be used to filter the elements
                switch (attrOperator) {
                    case '=': // Equality
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName) == attrValue);
                        };
                        break;
                    case '~': // Match one of space seperated words
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).match(new RegExp('\\b' + attrValue + '\\b')));
                        };
                        break;
                    case '|': // Match start with value followed by optional hyphen
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?')));
                        };
                        break;
                    case '^': // Match starts with value
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).indexOf(attrValue) === 0);
                        };
                        break;
                    case '$': // Match ends with value - fails with "Warning" in Opera 7
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length);
                        };
                        break;
                    case '*': // Match ends with value
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).indexOf(attrValue) > -1);
                        };
                        break;
                    default:
                        // Just test for existence of attribute
                        checkFunction = function(e) {
                            return e.getAttribute(attrName);
                        };
                }
                currentContext = [];
                currentContextIndex = 0;
                for (j = 0; j < found.length; j++) {
                    if (checkFunction(found[j])) {
                        currentContext[currentContextIndex++] = found[j];
                    }
                }
                // alert('Attribute Selector: '+tagName+' '+attrName+' '+attrOperator+' '+attrValue);
                continue; // Skip to next token
            }
            // If we get here, token is JUST an element (not a class or ID selector)
            tagName = token;
            found = [];
            foundCount = 0;
            for (j = 0; j < currentContext.length; j++) {
                elements = currentContext[j].getElementsByTagName(tagName);
                for (k = 0; k < elements.length; k++) {
                    found[foundCount++] = elements[k];
                }
            }
            currentContext = found;
        }
        return currentContext;
    }

    return function(query) {
        if (_.isElement(query)) {
            return [query];
        } else if (_.isObject(query) && !_.isUndefined(query.length)) {
            return query;
        } else {
            return getElementsBySelector.call(this, query);
        }
    };
})();

_.info = {
    campaignParams: function() {
        var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
            kw = '',
            params = {};
        _.each(campaign_keywords, function(kwkey) {
            kw = _.getQueryParam(document$1.URL, kwkey);
            if (kw.length) {
                params[kwkey] = kw;
            }
        });

        return params;
    },

    searchEngine: function(referrer) {
        if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
            return 'google';
        } else if (referrer.search('https?://(.*)bing.com') === 0) {
            return 'bing';
        } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
            return 'yahoo';
        } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
            return 'duckduckgo';
        } else {
            return null;
        }
    },

    searchInfo: function(referrer) {
        var search = _.info.searchEngine(referrer),
            param = (search != 'yahoo') ? 'q' : 'p',
            ret = {};

        if (search !== null) {
            ret['$search_engine'] = search;

            var keyword = _.getQueryParam(referrer, param);
            if (keyword.length) {
                ret['mp_keyword'] = keyword;
            }
        }

        return ret;
    },

    /**
     * This function detects which browser is running this script.
     * The order of the checks are important since many user agents
     * include key words used in later checks.
     */
    browser: function(user_agent, vendor, opera) {
        vendor = vendor || ''; // vendor is undefined for at least IE9
        if (opera || _.includes(user_agent, ' OPR/')) {
            if (_.includes(user_agent, 'Mini')) {
                return 'Opera Mini';
            }
            return 'Opera';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return 'BlackBerry';
        } else if (_.includes(user_agent, 'IEMobile') || _.includes(user_agent, 'WPDesktop')) {
            return 'Internet Explorer Mobile';
        } else if (_.includes(user_agent, 'SamsungBrowser/')) {
            // https://developer.samsung.com/internet/user-agent-string-format
            return 'Samsung Internet';
        } else if (_.includes(user_agent, 'Edge') || _.includes(user_agent, 'Edg/')) {
            return 'Microsoft Edge';
        } else if (_.includes(user_agent, 'FBIOS')) {
            return 'Facebook Mobile';
        } else if (_.includes(user_agent, 'Chrome')) {
            return 'Chrome';
        } else if (_.includes(user_agent, 'CriOS')) {
            return 'Chrome iOS';
        } else if (_.includes(user_agent, 'UCWEB') || _.includes(user_agent, 'UCBrowser')) {
            return 'UC Browser';
        } else if (_.includes(user_agent, 'FxiOS')) {
            return 'Firefox iOS';
        } else if (_.includes(vendor, 'Apple')) {
            if (_.includes(user_agent, 'Mobile')) {
                return 'Mobile Safari';
            }
            return 'Safari';
        } else if (_.includes(user_agent, 'Android')) {
            return 'Android Mobile';
        } else if (_.includes(user_agent, 'Konqueror')) {
            return 'Konqueror';
        } else if (_.includes(user_agent, 'Firefox')) {
            return 'Firefox';
        } else if (_.includes(user_agent, 'MSIE') || _.includes(user_agent, 'Trident/')) {
            return 'Internet Explorer';
        } else if (_.includes(user_agent, 'Gecko')) {
            return 'Mozilla';
        } else {
            return '';
        }
    },

    /**
     * This function detects which browser version is running this script,
     * parsing major and minor version (e.g., 42.1). User agent strings from:
     * http://www.useragentstring.com/pages/useragentstring.php
     */
    browserVersion: function(userAgent, vendor, opera) {
        var browser = _.info.browser(userAgent, vendor, opera);
        var versionRegexs = {
            'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
            'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
            'Chrome': /Chrome\/(\d+(\.\d+)?)/,
            'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
            'UC Browser' : /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            'Safari': /Version\/(\d+(\.\d+)?)/,
            'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
            'Opera': /(Opera|OPR)\/(\d+(\.\d+)?)/,
            'Firefox': /Firefox\/(\d+(\.\d+)?)/,
            'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
            'Konqueror': /Konqueror:(\d+(\.\d+)?)/,
            'BlackBerry': /BlackBerry (\d+(\.\d+)?)/,
            'Android Mobile': /android\s(\d+(\.\d+)?)/,
            'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
            'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
            'Mozilla': /rv:(\d+(\.\d+)?)/
        };
        var regex = versionRegexs[browser];
        if (regex === undefined) {
            return null;
        }
        var matches = userAgent.match(regex);
        if (!matches) {
            return null;
        }
        return parseFloat(matches[matches.length - 2]);
    },

    os: function() {
        var a = userAgent;
        if (/Windows/i.test(a)) {
            if (/Phone/.test(a) || /WPDesktop/.test(a)) {
                return 'Windows Phone';
            }
            return 'Windows';
        } else if (/(iPhone|iPad|iPod)/.test(a)) {
            return 'iOS';
        } else if (/Android/.test(a)) {
            return 'Android';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
            return 'BlackBerry';
        } else if (/Mac/i.test(a)) {
            return 'Mac OS X';
        } else if (/Linux/.test(a)) {
            return 'Linux';
        } else if (/CrOS/.test(a)) {
            return 'Chrome OS';
        } else {
            return '';
        }
    },

    device: function(user_agent) {
        if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
            return 'Windows Phone';
        } else if (/iPad/.test(user_agent)) {
            return 'iPad';
        } else if (/iPod/.test(user_agent)) {
            return 'iPod Touch';
        } else if (/iPhone/.test(user_agent)) {
            return 'iPhone';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return 'BlackBerry';
        } else if (/Android/.test(user_agent)) {
            return 'Android';
        } else {
            return '';
        }
    },

    referringDomain: function(referrer) {
        var split = referrer.split('/');
        if (split.length >= 3) {
            return split[2];
        }
        return '';
    },

    properties: function() {
        return _.extend(_.strip_empty_properties({
            '$os': _.info.os(),
            '$browser': _.info.browser(userAgent, navigator.vendor, windowOpera),
            '$referrer': document$1.referrer,
            '$referring_domain': _.info.referringDomain(document$1.referrer),
            '$device': _.info.device(userAgent)
        }), {
            '$current_url': window$1.location.href,
            '$browser_version': _.info.browserVersion(userAgent, navigator.vendor, windowOpera),
            '$screen_height': screen.height,
            '$screen_width': screen.width,
            'mp_lib': 'web',
            '$lib_version': Config.LIB_VERSION,
            '$insert_id': cheap_guid(),
            'time': _.timestamp() / 1000 // epoch time in seconds
        });
    },

    people_properties: function() {
        return _.extend(_.strip_empty_properties({
            '$os': _.info.os(),
            '$browser': _.info.browser(userAgent, navigator.vendor, windowOpera)
        }), {
            '$browser_version': _.info.browserVersion(userAgent, navigator.vendor, windowOpera)
        });
    },

    pageviewInfo: function(page) {
        return _.strip_empty_properties({
            'mp_page': page,
            'mp_referrer': document$1.referrer,
            'mp_browser': _.info.browser(userAgent, navigator.vendor, windowOpera),
            'mp_platform': _.info.os()
        });
    }
};

var cheap_guid = function(maxlen) {
    var guid = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return maxlen ? guid.substring(0, maxlen) : guid;
};

// naive way to extract domain name (example.com) from full hostname (my.sub.example.com)
var SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
// this next one attempts to account for some ccSLDs, e.g. extracting oxford.ac.uk from www.oxford.ac.uk
var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
/**
 * Attempts to extract main domain name from full hostname, using a few blunt heuristics. For
 * common TLDs like .com/.org that always have a simple SLD.TLD structure (example.com), we
 * simply extract the last two .-separated parts of the hostname (SIMPLE_DOMAIN_MATCH_REGEX).
 * For others, we attempt to account for short ccSLD+TLD combos (.ac.uk) with the legacy
 * DOMAIN_MATCH_REGEX (kept to maintain backwards compatibility with existing Mixpanel
 * integrations). The only _reliable_ way to extract domain from hostname is with an up-to-date
 * list like at https://publicsuffix.org/ so for cases that this helper fails at, the SDK
 * offers the 'cookie_domain' config option to set it explicitly.
 * @example
 * extract_domain('my.sub.example.com')
 * // 'example.com'
 */
var extract_domain = function(hostname) {
    var domain_regex = DOMAIN_MATCH_REGEX;
    var parts = hostname.split('.');
    var tld = parts[parts.length - 1];
    if (tld.length > 4 || tld === 'com' || tld === 'org') {
        domain_regex = SIMPLE_DOMAIN_MATCH_REGEX;
    }
    var matches = hostname.match(domain_regex);
    return matches ? matches[0] : '';
};

var JSONStringify = null;
var JSONParse = null;
if (typeof JSON !== 'undefined') {
    JSONStringify = JSON.stringify;
    JSONParse = JSON.parse;
}
JSONStringify = JSONStringify || _.JSONEncode;
JSONParse = JSONParse || _.JSONDecode;

// EXPORTS (for closure compiler)
_['toArray']                = _.toArray;
_['isObject']               = _.isObject;
_['JSONEncode']             = _.JSONEncode;
_['JSONDecode']             = _.JSONDecode;
_['isBlockedUA']            = _.isBlockedUA;
_['isEmptyObject']          = _.isEmptyObject;
_['info']                   = _.info;
_['info']['device']         = _.info.device;
_['info']['browser']        = _.info.browser;
_['info']['browserVersion'] = _.info.browserVersion;
_['info']['properties']     = _.info.properties;

/**
 * DomTracker Object
 * @constructor
 */
var DomTracker = function() {};


// interface
DomTracker.prototype.create_properties = function() {};
DomTracker.prototype.event_handler = function() {};
DomTracker.prototype.after_track_handler = function() {};

DomTracker.prototype.init = function(mixpanel_instance) {
    this.mp = mixpanel_instance;
    return this;
};

/**
 * @param {Object|string} query
 * @param {string} event_name
 * @param {Object=} properties
 * @param {function=} user_callback
 */
DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
    var that = this;
    var elements = _.dom_query(query);

    if (elements.length === 0) {
        console.error('The DOM query (' + query + ') returned 0 elements');
        return;
    }

    _.each(elements, function(element) {
        _.register_event(element, this.override_event, function(e) {
            var options = {};
            var props = that.create_properties(properties, this);
            var timeout = that.mp.get_config('track_links_timeout');

            that.event_handler(e, this, options);

            // in case the mixpanel servers don't get back to us in time
            window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);

            // fire the tracking event
            that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
        });
    }, this);

    return true;
};

/**
 * @param {function} user_callback
 * @param {Object} props
 * @param {boolean=} timeout_occured
 */
DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
    timeout_occured = timeout_occured || false;
    var that = this;

    return function() {
        // options is referenced from both callbacks, so we can have
        // a 'lock' of sorts to ensure only one fires
        if (options.callback_fired) { return; }
        options.callback_fired = true;

        if (user_callback && user_callback(timeout_occured, props) === false) {
            // user can prevent the default functionality by
            // returning false from their callback
            return;
        }

        that.after_track_handler(props, options, timeout_occured);
    };
};

DomTracker.prototype.create_properties = function(properties, element) {
    var props;

    if (typeof(properties) === 'function') {
        props = properties(element);
    } else {
        props = _.extend({}, properties);
    }

    return props;
};

/**
 * LinkTracker Object
 * @constructor
 * @extends DomTracker
 */
var LinkTracker = function() {
    this.override_event = 'click';
};
_.inherit(LinkTracker, DomTracker);

LinkTracker.prototype.create_properties = function(properties, element) {
    var props = LinkTracker.superclass.create_properties.apply(this, arguments);

    if (element.href) { props['url'] = element.href; }

    return props;
};

LinkTracker.prototype.event_handler = function(evt, element, options) {
    options.new_tab = (
        evt.which === 2 ||
        evt.metaKey ||
        evt.ctrlKey ||
        element.target === '_blank'
    );
    options.href = element.href;

    if (!options.new_tab) {
        evt.preventDefault();
    }
};

LinkTracker.prototype.after_track_handler = function(props, options) {
    if (options.new_tab) { return; }

    setTimeout(function() {
        window.location = options.href;
    }, 0);
};

/**
 * FormTracker Object
 * @constructor
 * @extends DomTracker
 */
var FormTracker = function() {
    this.override_event = 'submit';
};
_.inherit(FormTracker, DomTracker);

FormTracker.prototype.event_handler = function(evt, element, options) {
    options.element = element;
    evt.preventDefault();
};

FormTracker.prototype.after_track_handler = function(props, options) {
    setTimeout(function() {
        options.element.submit();
    }, 0);
};

// eslint-disable-line camelcase

var logger$2 = console_with_prefix('lock');

/**
 * SharedLock: a mutex built on HTML5 localStorage, to ensure that only one browser
 * window/tab at a time will be able to access shared resources.
 *
 * Based on the Alur and Taubenfeld fast lock
 * (http://www.cs.rochester.edu/research/synchronization/pseudocode/fastlock.html)
 * with an added timeout to ensure there will be eventual progress in the event
 * that a window is closed in the middle of the callback.
 *
 * Implementation based on the original version by David Wolever (https://github.com/wolever)
 * at https://gist.github.com/wolever/5fd7573d1ef6166e8f8c4af286a69432.
 *
 * @example
 * const myLock = new SharedLock('some-key');
 * myLock.withLock(function() {
 *   console.log('I hold the mutex!');
 * });
 *
 * @constructor
 */
var SharedLock = function(key, options) {
    options = options || {};

    this.storageKey = key;
    this.storage = options.storage || window.localStorage;
    this.pollIntervalMS = options.pollIntervalMS || 100;
    this.timeoutMS = options.timeoutMS || 2000;
};

// pass in a specific pid to test contention scenarios; otherwise
// it is chosen randomly for each acquisition attempt
SharedLock.prototype.withLock = function(lockedCB, errorCB, pid) {
    if (!pid && typeof errorCB !== 'function') {
        pid = errorCB;
        errorCB = null;
    }

    var i = pid || (new Date().getTime() + '|' + Math.random());
    var startTime = new Date().getTime();

    var key = this.storageKey;
    var pollIntervalMS = this.pollIntervalMS;
    var timeoutMS = this.timeoutMS;
    var storage = this.storage;

    var keyX = key + ':X';
    var keyY = key + ':Y';
    var keyZ = key + ':Z';

    var reportError = function(err) {
        errorCB && errorCB(err);
    };

    var delay = function(cb) {
        if (new Date().getTime() - startTime > timeoutMS) {
            logger$2.error('Timeout waiting for mutex on ' + key + '; clearing lock. [' + i + ']');
            storage.removeItem(keyZ);
            storage.removeItem(keyY);
            loop();
            return;
        }
        setTimeout(function() {
            try {
                cb();
            } catch(err) {
                reportError(err);
            }
        }, pollIntervalMS * (Math.random() + 0.1));
    };

    var waitFor = function(predicate, cb) {
        if (predicate()) {
            cb();
        } else {
            delay(function() {
                waitFor(predicate, cb);
            });
        }
    };

    var getSetY = function() {
        var valY = storage.getItem(keyY);
        if (valY && valY !== i) { // if Y == i then this process already has the lock (useful for test cases)
            return false;
        } else {
            storage.setItem(keyY, i);
            if (storage.getItem(keyY) === i) {
                return true;
            } else {
                if (!localStorageSupported(storage, true)) {
                    throw new Error('localStorage support dropped while acquiring lock');
                }
                return false;
            }
        }
    };

    var loop = function() {
        storage.setItem(keyX, i);

        waitFor(getSetY, function() {
            if (storage.getItem(keyX) === i) {
                criticalSection();
                return;
            }

            delay(function() {
                if (storage.getItem(keyY) !== i) {
                    loop();
                    return;
                }
                waitFor(function() {
                    return !storage.getItem(keyZ);
                }, criticalSection);
            });
        });
    };

    var criticalSection = function() {
        storage.setItem(keyZ, '1');
        try {
            lockedCB();
        } finally {
            storage.removeItem(keyZ);
            if (storage.getItem(keyY) === i) {
                storage.removeItem(keyY);
            }
            if (storage.getItem(keyX) === i) {
                storage.removeItem(keyX);
            }
        }
    };

    try {
        if (localStorageSupported(storage, true)) {
            loop();
        } else {
            throw new Error('localStorage support check failed');
        }
    } catch(err) {
        reportError(err);
    }
};

// eslint-disable-line camelcase

var logger$1 = console_with_prefix('batch');

/**
 * RequestQueue: queue for batching API requests with localStorage backup for retries.
 * Maintains an in-memory queue which represents the source of truth for the current
 * page, but also writes all items out to a copy in the browser's localStorage, which
 * can be read on subsequent pageloads and retried. For batchability, all the request
 * items in the queue should be of the same type (events, people updates, group updates)
 * so they can be sent in a single request to the same API endpoint.
 *
 * LocalStorage keying and locking: In order for reloads and subsequent pageloads of
 * the same site to access the same persisted data, they must share the same localStorage
 * key (for instance based on project token and queue type). Therefore access to the
 * localStorage entry is guarded by an asynchronous mutex (SharedLock) to prevent
 * simultaneously open windows/tabs from overwriting each other's data (which would lead
 * to data loss in some situations).
 * @constructor
 */
var RequestQueue = function(storageKey, options) {
    options = options || {};
    this.storageKey = storageKey;
    this.storage = options.storage || window.localStorage;
    this.reportError = options.errorReporter || _.bind(logger$1.error, logger$1);
    this.lock = new SharedLock(storageKey, {storage: this.storage});

    this.pid = options.pid || null; // pass pid to test out storage lock contention scenarios

    this.memQueue = [];
};

/**
 * Add one item to queues (memory and localStorage). The queued entry includes
 * the given item along with an auto-generated ID and a "flush-after" timestamp.
 * It is expected that the item will be sent over the network and dequeued
 * before the flush-after time; if this doesn't happen it is considered orphaned
 * (e.g., the original tab where it was enqueued got closed before it could be
 * sent) and the item can be sent by any tab that finds it in localStorage.
 *
 * The final callback param is called with a param indicating success or
 * failure of the enqueue operation; it is asynchronous because the localStorage
 * lock is asynchronous.
 */
RequestQueue.prototype.enqueue = function(item, flushInterval, cb) {
    var queueEntry = {
        'id': cheap_guid(),
        'flushAfter': new Date().getTime() + flushInterval * 2,
        'payload': item
    };

    this.lock.withLock(_.bind(function lockAcquired() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue.push(queueEntry);
            succeeded = this.saveToStorage(storedQueue);
            if (succeeded) {
                // only add to in-memory queue when storage succeeds
                this.memQueue.push(queueEntry);
            }
        } catch(err) {
            this.reportError('Error enqueueing item', item);
            succeeded = false;
        }
        if (cb) {
            cb(succeeded);
        }
    }, this), _.bind(function lockFailure(err) {
        this.reportError('Error acquiring storage lock', err);
        if (cb) {
            cb(false);
        }
    }, this), this.pid);
};

/**
 * Read out the given number of queue entries. If this.memQueue
 * has fewer than batchSize items, then look for "orphaned" items
 * in the persisted queue (items where the 'flushAfter' time has
 * already passed).
 */
RequestQueue.prototype.fillBatch = function(batchSize) {
    var batch = this.memQueue.slice(0, batchSize);
    if (batch.length < batchSize) {
        // don't need lock just to read events; localStorage is thread-safe
        // and the worst that could happen is a duplicate send of some
        // orphaned events, which will be deduplicated on the server side
        var storedQueue = this.readFromStorage();
        if (storedQueue.length) {
            // item IDs already in batch; don't duplicate out of storage
            var idsInBatch = {}; // poor man's Set
            _.each(batch, function(item) { idsInBatch[item['id']] = true; });

            for (var i = 0; i < storedQueue.length; i++) {
                var item = storedQueue[i];
                if (new Date().getTime() > item['flushAfter'] && !idsInBatch[item['id']]) {
                    item.orphaned = true;
                    batch.push(item);
                    if (batch.length >= batchSize) {
                        break;
                    }
                }
            }
        }
    }
    return batch;
};

/**
 * Remove items with matching 'id' from array (immutably)
 * also remove any item without a valid id (e.g., malformed
 * storage entries).
 */
var filterOutIDsAndInvalid = function(items, idSet) {
    var filteredItems = [];
    _.each(items, function(item) {
        if (item['id'] && !idSet[item['id']]) {
            filteredItems.push(item);
        }
    });
    return filteredItems;
};

/**
 * Remove items with matching IDs from both in-memory queue
 * and persisted queue
 */
RequestQueue.prototype.removeItemsByID = function(ids, cb) {
    var idSet = {}; // poor man's Set
    _.each(ids, function(id) { idSet[id] = true; });

    this.memQueue = filterOutIDsAndInvalid(this.memQueue, idSet);

    var removeFromStorage = _.bind(function() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue = filterOutIDsAndInvalid(storedQueue, idSet);
            succeeded = this.saveToStorage(storedQueue);

            // an extra check: did storage report success but somehow
            // the items are still there?
            if (succeeded) {
                storedQueue = this.readFromStorage();
                for (var i = 0; i < storedQueue.length; i++) {
                    var item = storedQueue[i];
                    if (item['id'] && !!idSet[item['id']]) {
                        this.reportError('Item not removed from storage');
                        return false;
                    }
                }
            }
        } catch(err) {
            this.reportError('Error removing items', ids);
            succeeded = false;
        }
        return succeeded;
    }, this);

    this.lock.withLock(function lockAcquired() {
        var succeeded = removeFromStorage();
        if (cb) {
            cb(succeeded);
        }
    }, _.bind(function lockFailure(err) {
        var succeeded = false;
        this.reportError('Error acquiring storage lock', err);
        if (!localStorageSupported(this.storage, true)) {
            // Looks like localStorage writes have stopped working sometime after
            // initialization (probably full), and so nobody can acquire locks
            // anymore. Consider it temporarily safe to remove items without the
            // lock, since nobody's writing successfully anyway.
            succeeded = removeFromStorage();
            if (!succeeded) {
                // OK, we couldn't even write out the smaller queue. Try clearing it
                // entirely.
                try {
                    this.storage.removeItem(this.storageKey);
                } catch(err) {
                    this.reportError('Error clearing queue', err);
                }
            }
        }
        if (cb) {
            cb(succeeded);
        }
    }, this), this.pid);
};

// internal helper for RequestQueue.updatePayloads
var updatePayloads = function(existingItems, itemsToUpdate) {
    var newItems = [];
    _.each(existingItems, function(item) {
        var id = item['id'];
        if (id in itemsToUpdate) {
            var newPayload = itemsToUpdate[id];
            if (newPayload !== null) {
                item['payload'] = newPayload;
                newItems.push(item);
            }
        } else {
            // no update
            newItems.push(item);
        }
    });
    return newItems;
};

/**
 * Update payloads of given items in both in-memory queue and
 * persisted queue. Items set to null are removed from queues.
 */
RequestQueue.prototype.updatePayloads = function(itemsToUpdate, cb) {
    this.memQueue = updatePayloads(this.memQueue, itemsToUpdate);
    this.lock.withLock(_.bind(function lockAcquired() {
        var succeeded;
        try {
            var storedQueue = this.readFromStorage();
            storedQueue = updatePayloads(storedQueue, itemsToUpdate);
            succeeded = this.saveToStorage(storedQueue);
        } catch(err) {
            this.reportError('Error updating items', itemsToUpdate);
            succeeded = false;
        }
        if (cb) {
            cb(succeeded);
        }
    }, this), _.bind(function lockFailure(err) {
        this.reportError('Error acquiring storage lock', err);
        if (cb) {
            cb(false);
        }
    }, this), this.pid);
};

/**
 * Read and parse items array from localStorage entry, handling
 * malformed/missing data if necessary.
 */
RequestQueue.prototype.readFromStorage = function() {
    var storageEntry;
    try {
        storageEntry = this.storage.getItem(this.storageKey);
        if (storageEntry) {
            storageEntry = JSONParse(storageEntry);
            if (!_.isArray(storageEntry)) {
                this.reportError('Invalid storage entry:', storageEntry);
                storageEntry = null;
            }
        }
    } catch (err) {
        this.reportError('Error retrieving queue', err);
        storageEntry = null;
    }
    return storageEntry || [];
};

/**
 * Serialize the given items array to localStorage.
 */
RequestQueue.prototype.saveToStorage = function(queue) {
    try {
        this.storage.setItem(this.storageKey, JSONStringify(queue));
        return true;
    } catch (err) {
        this.reportError('Error saving queue', err);
        return false;
    }
};

/**
 * Clear out queues (memory and localStorage).
 */
RequestQueue.prototype.clear = function() {
    this.memQueue = [];
    this.storage.removeItem(this.storageKey);
};

// eslint-disable-line camelcase

// maximum interval between request retries after exponential backoff
var MAX_RETRY_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

var logger = console_with_prefix('batch');

/**
 * RequestBatcher: manages the queueing, flushing, retry etc of requests of one
 * type (events, people, groups).
 * Uses RequestQueue to manage the backing store.
 * @constructor
 */
var RequestBatcher = function(storageKey, options) {
    this.errorReporter = options.errorReporter;
    this.queue = new RequestQueue(storageKey, {
        errorReporter: _.bind(this.reportError, this),
        storage: options.storage
    });

    this.libConfig = options.libConfig;
    this.sendRequest = options.sendRequestFunc;
    this.beforeSendHook = options.beforeSendHook;
    this.stopAllBatching = options.stopAllBatchingFunc;

    // seed variable batch size + flush interval with configured values
    this.batchSize = this.libConfig['batch_size'];
    this.flushInterval = this.libConfig['batch_flush_interval_ms'];

    this.stopped = !this.libConfig['batch_autostart'];
    this.consecutiveRemovalFailures = 0;
};

/**
 * Add one item to queue.
 */
RequestBatcher.prototype.enqueue = function(item, cb) {
    this.queue.enqueue(item, this.flushInterval, cb);
};

/**
 * Start flushing batches at the configured time interval. Must call
 * this method upon SDK init in order to send anything over the network.
 */
RequestBatcher.prototype.start = function() {
    this.stopped = false;
    this.consecutiveRemovalFailures = 0;
    this.flush();
};

/**
 * Stop flushing batches. Can be restarted by calling start().
 */
RequestBatcher.prototype.stop = function() {
    this.stopped = true;
    if (this.timeoutID) {
        clearTimeout(this.timeoutID);
        this.timeoutID = null;
    }
};

/**
 * Clear out queue.
 */
RequestBatcher.prototype.clear = function() {
    this.queue.clear();
};

/**
 * Restore batch size configuration to whatever is set in the main SDK.
 */
RequestBatcher.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig['batch_size'];
};

/**
 * Restore flush interval time configuration to whatever is set in the main SDK.
 */
RequestBatcher.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig['batch_flush_interval_ms']);
};

/**
 * Schedule the next flush in the given number of milliseconds.
 */
RequestBatcher.prototype.scheduleFlush = function(flushMS) {
    this.flushInterval = flushMS;
    if (!this.stopped) { // don't schedule anymore if batching has been stopped
        this.timeoutID = setTimeout(_.bind(this.flush, this), this.flushInterval);
    }
};

/**
 * Flush one batch to network. Depending on success/failure modes, it will either
 * remove the batch from the queue or leave it in for retry, and schedule the next
 * flush. In cases of most network or API failures, it will back off exponentially
 * when retrying.
 * @param {Object} [options]
 * @param {boolean} [options.sendBeacon] - whether to send batch with
 * navigator.sendBeacon (only useful for sending batches before page unloads, as
 * sendBeacon offers no callbacks or status indications)
 */
RequestBatcher.prototype.flush = function(options) {
    try {

        if (this.requestInProgress) {
            logger.log('Flush: Request already in progress');
            return;
        }

        options = options || {};
        var timeoutMS = this.libConfig['batch_request_timeout_ms'];
        var startTime = new Date().getTime();
        var currentBatchSize = this.batchSize;
        var batch = this.queue.fillBatch(currentBatchSize);
        var dataForRequest = [];
        var transformedItems = {};
        _.each(batch, function(item) {
            var payload = item['payload'];
            if (this.beforeSendHook && !item.orphaned) {
                payload = this.beforeSendHook(payload);
            }
            if (payload) {
                dataForRequest.push(payload);
            }
            transformedItems[item['id']] = payload;
        }, this);
        if (dataForRequest.length < 1) {
            this.resetFlush();
            return; // nothing to do
        }

        this.requestInProgress = true;

        var batchSendCallback = _.bind(function(res) {
            this.requestInProgress = false;

            try {

                // handle API response in a try-catch to make sure we can reset the
                // flush operation if something goes wrong

                var removeItemsFromQueue = false;
                if (options.unloading) {
                    // update persisted data to include hook transformations
                    this.queue.updatePayloads(transformedItems);
                } else if (
                    _.isObject(res) &&
                    res.error === 'timeout' &&
                    new Date().getTime() - startTime >= timeoutMS
                ) {
                    this.reportError('Network timeout; retrying');
                    this.flush();
                } else if (
                    _.isObject(res) &&
                    res.xhr_req &&
                    (res.xhr_req['status'] >= 500 || res.xhr_req['status'] === 429 || res.error === 'timeout')
                ) {
                    // network or API error, or 429 Too Many Requests, retry
                    var retryMS = this.flushInterval * 2;
                    var headers = res.xhr_req['responseHeaders'];
                    if (headers) {
                        var retryAfter = headers['Retry-After'];
                        if (retryAfter) {
                            retryMS = (parseInt(retryAfter, 10) * 1000) || retryMS;
                        }
                    }
                    retryMS = Math.min(MAX_RETRY_INTERVAL_MS, retryMS);
                    this.reportError('Error; retry in ' + retryMS + ' ms');
                    this.scheduleFlush(retryMS);
                } else if (_.isObject(res) && res.xhr_req && res.xhr_req['status'] === 413) {
                    // 413 Payload Too Large
                    if (batch.length > 1) {
                        var halvedBatchSize = Math.max(1, Math.floor(currentBatchSize / 2));
                        this.batchSize = Math.min(this.batchSize, halvedBatchSize, batch.length - 1);
                        this.reportError('413 response; reducing batch size to ' + this.batchSize);
                        this.resetFlush();
                    } else {
                        this.reportError('Single-event request too large; dropping', batch);
                        this.resetBatchSize();
                        removeItemsFromQueue = true;
                    }
                } else {
                    // successful network request+response; remove each item in batch from queue
                    // (even if it was e.g. a 400, in which case retrying won't help)
                    removeItemsFromQueue = true;
                }

                if (removeItemsFromQueue) {
                    this.queue.removeItemsByID(
                        _.map(batch, function(item) { return item['id']; }),
                        _.bind(function(succeeded) {
                            if (succeeded) {
                                this.consecutiveRemovalFailures = 0;
                                this.flush(); // handle next batch if the queue isn't empty
                            } else {
                                this.reportError('Failed to remove items from queue');
                                if (++this.consecutiveRemovalFailures > 5) {
                                    this.reportError('Too many queue failures; disabling batching system.');
                                    this.stopAllBatching();
                                } else {
                                    this.resetFlush();
                                }
                            }
                        }, this)
                    );
                }

            } catch(err) {
                this.reportError('Error handling API response', err);
                this.resetFlush();
            }
        }, this);
        var requestOptions = {
            method: 'POST',
            verbose: true,
            ignore_json_errors: true, // eslint-disable-line camelcase
            timeout_ms: timeoutMS // eslint-disable-line camelcase
        };
        if (options.unloading) {
            requestOptions.transport = 'sendBeacon';
        }
        logger.log('MIXPANEL REQUEST:', dataForRequest);
        this.sendRequest(dataForRequest, requestOptions, batchSendCallback);

    } catch(err) {
        this.reportError('Error flushing request queue', err);
        this.resetFlush();
    }
};

/**
 * Log error to global logger and optional user-defined logger.
 */
RequestBatcher.prototype.reportError = function(msg, err) {
    logger.error.apply(logger.error, arguments);
    if (this.errorReporter) {
        try {
            if (!(err instanceof Error)) {
                err = new Error(msg);
            }
            this.errorReporter(msg, err);
        } catch(err) {
            logger.error(err);
        }
    }
};

/**
 * A function used to track a Mixpanel event (e.g. MixpanelLib.track)
 * @callback trackFunction
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */

/** Public **/

var GDPR_DEFAULT_PERSISTENCE_PREFIX = '__mp_opt_in_out_';

/**
 * Opt the user in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function optIn(token, options) {
    _optInOut(true, token, options);
}

/**
 * Opt the user out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
 */
function optOut(token, options) {
    _optInOut(false, token, options);
}

/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted in to the given opt type
 */
function hasOptedIn(token, options) {
    return _getStorageValue(token, options) === '1';
}

/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
 * @returns {boolean} whether the user has opted out of the given opt type
 */
function hasOptedOut(token, options) {
    if (_hasDoNotTrackFlagOn(options)) {
        console.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"');
        return true;
    }
    var optedOut = _getStorageValue(token, options) === '0';
    if (optedOut) {
        console.warn('You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.');
    }
    return optedOut;
}

/**
 * Wrap a MixpanelLib method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelLib(method) {
    return _addOptOutCheck(method, function(name) {
        return this.get_config(name);
    });
}

/**
 * Wrap a MixpanelPeople method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelPeople(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}

/**
 * Wrap a MixpanelGroup method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelGroup(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}

/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function clearOptInOut(token, options) {
    options = options || {};
    _getStorage(options).remove(
        _getStorageKey(token, options), !!options.crossSubdomainCookie, options.cookieDomain
    );
}

/** Private **/

/**
 * Get storage util
 * @param {Object} [options]
 * @param {string} [options.persistenceType]
 * @returns {object} either _.cookie or _.localstorage
 */
function _getStorage(options) {
    options = options || {};
    return options.persistenceType === 'localStorage' ? _.localStorage : _.cookie;
}

/**
 * Get the name of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the name of the cookie for the given opt type
 */
function _getStorageKey(token, options) {
    options = options || {};
    return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
}

/**
 * Get the value of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the value of the cookie for the given opt type
 */
function _getStorageValue(token, options) {
    return _getStorage(options).get(_getStorageKey(token, options));
}

/**
 * Check whether the user has set the DNT/doNotTrack setting to true in their browser
 * @param {Object} [options]
 * @param {string} [options.window] - alternate window object to check; used to force various DNT settings in browser tests
 * @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
 * @returns {boolean} whether the DNT setting is true
 */
function _hasDoNotTrackFlagOn(options) {
    if (options && options.ignoreDnt) {
        return false;
    }
    var win = (options && options.window) || window$1;
    var nav = win['navigator'] || {};
    var hasDntOn = false;

    _.each([
        nav['doNotTrack'], // standard
        nav['msDoNotTrack'],
        win['doNotTrack']
    ], function(dntValue) {
        if (_.includes([true, 1, '1', 'yes'], dntValue)) {
            hasDntOn = true;
        }
    });

    return hasDntOn;
}

/**
 * Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
 * @param {boolean} optValue - whether to opt the user in or out for the given opt type
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {string} [options.cookieDomain] - custom cookie domain
 * @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function _optInOut(optValue, token, options) {
    if (!_.isString(token) || !token.length) {
        console.error('gdpr.' + (optValue ? 'optIn' : 'optOut') + ' called with an invalid token');
        return;
    }

    options = options || {};

    _getStorage(options).set(
        _getStorageKey(token, options),
        optValue ? 1 : 0,
        _.isNumber(options.cookieExpiration) ? options.cookieExpiration : null,
        !!options.crossSubdomainCookie,
        !!options.secureCookie,
        !!options.crossSiteCookie,
        options.cookieDomain
    );

    if (options.track && optValue) { // only track event if opting in (optValue=true)
        options.track(options.trackEventName || '$opt_in', options.trackProperties, {
            'send_immediately': true
        });
    }
}

/**
 * Wrap a method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @param {function} getConfigValue - getter function for the Mixpanel API token and other options to be used with opt-out check
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function _addOptOutCheck(method, getConfigValue) {
    return function() {
        var optedOut = false;

        try {
            var token = getConfigValue.call(this, 'token');
            var ignoreDnt = getConfigValue.call(this, 'ignore_dnt');
            var persistenceType = getConfigValue.call(this, 'opt_out_tracking_persistence_type');
            var persistencePrefix = getConfigValue.call(this, 'opt_out_tracking_cookie_prefix');
            var win = getConfigValue.call(this, 'window'); // used to override window during browser tests

            if (token) { // if there was an issue getting the token, continue method execution as normal
                optedOut = hasOptedOut(token, {
                    ignoreDnt: ignoreDnt,
                    persistenceType: persistenceType,
                    persistencePrefix: persistencePrefix,
                    window: win
                });
            }
        } catch(err) {
            console.error('Unexpected error when checking tracking opt-out status: ' + err);
        }

        if (!optedOut) {
            return method.apply(this, arguments);
        }

        var callback = arguments[arguments.length - 1];
        if (typeof(callback) === 'function') {
            callback(0);
        }

        return;
    };
}

/** @const */ var SET_ACTION      = '$set';
/** @const */ var SET_ONCE_ACTION = '$set_once';
/** @const */ var UNSET_ACTION    = '$unset';
/** @const */ var ADD_ACTION      = '$add';
/** @const */ var APPEND_ACTION   = '$append';
/** @const */ var UNION_ACTION    = '$union';
/** @const */ var REMOVE_ACTION   = '$remove';
/** @const */ var DELETE_ACTION   = '$delete';

// Common internal methods for mixpanel.people and mixpanel.group APIs.
// These methods shouldn't involve network I/O.
var apiActions = {
    set_action: function(prop, to) {
        var data = {};
        var $set = {};
        if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $set[k] = v;
                }
            }, this);
        } else {
            $set[prop] = to;
        }

        data[SET_ACTION] = $set;
        return data;
    },

    unset_action: function(prop) {
        var data = {};
        var $unset = [];
        if (!_.isArray(prop)) {
            prop = [prop];
        }

        _.each(prop, function(k) {
            if (!this._is_reserved_property(k)) {
                $unset.push(k);
            }
        }, this);

        data[UNSET_ACTION] = $unset;
        return data;
    },

    set_once_action: function(prop, to) {
        var data = {};
        var $set_once = {};
        if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $set_once[k] = v;
                }
            }, this);
        } else {
            $set_once[prop] = to;
        }
        data[SET_ONCE_ACTION] = $set_once;
        return data;
    },

    union_action: function(list_name, values) {
        var data = {};
        var $union = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $union[k] = _.isArray(v) ? v : [v];
                }
            }, this);
        } else {
            $union[list_name] = _.isArray(values) ? values : [values];
        }
        data[UNION_ACTION] = $union;
        return data;
    },

    append_action: function(list_name, value) {
        var data = {};
        var $append = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $append[k] = v;
                }
            }, this);
        } else {
            $append[list_name] = value;
        }
        data[APPEND_ACTION] = $append;
        return data;
    },

    remove_action: function(list_name, value) {
        var data = {};
        var $remove = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $remove[k] = v;
                }
            }, this);
        } else {
            $remove[list_name] = value;
        }
        data[REMOVE_ACTION] = $remove;
        return data;
    },

    delete_action: function() {
        var data = {};
        data[DELETE_ACTION] = '';
        return data;
    }
};

/**
 * Mixpanel Group Object
 * @constructor
 */
var MixpanelGroup = function() {};

_.extend(MixpanelGroup.prototype, apiActions);

MixpanelGroup.prototype._init = function(mixpanel_instance, group_key, group_id) {
    this._mixpanel = mixpanel_instance;
    this._group_key = group_key;
    this._group_id = group_id;
};

/**
 * Set properties on a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, dates, or lists
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/**
 * Set properties on a group, only if they do not yet exist.
 * This will not overwrite previous group property values, unlike
 * group.set().
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set_once({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, lists or dates
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/**
 * Unset properties on a group permanently.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').unset('Founded');
 *
 * @param {String} prop The name of the property.
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});

/**
 * Merge a given list with a list-valued group property, excluding duplicate values.
 *
 * ### Usage:
 *
 *     // merge a value to a list, creating it if needed
 *     mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
 *
 * @param {String} list_name Name of the property.
 * @param {Array} values Values to merge with the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function(list_name, values, callback) {
    if (_.isObject(list_name)) {
        callback = values;
    }
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});

/**
 * Permanently delete a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').delete();
 *
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype['delete'] = addOptOutCheckMixpanelGroup(function(callback) {
    // bracket notation above prevents a minification error related to reserved words
    var data = this.delete_action();
    return this._send_request(data, callback);
});

/**
 * Remove a property from a group. The value will be ignored if doesn't exist.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
 *
 * @param {String} list_name Name of the property.
 * @param {Object} value Value to remove from the given group property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function(list_name, value, callback) {
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});

MixpanelGroup.prototype._send_request = function(data, callback) {
    data['$group_key'] = this._group_key;
    data['$group_id'] = this._group_id;
    data['$token'] = this._get_config('token');

    var date_encoded_data = _.encodeDates(data);
    return this._mixpanel._track_or_batch({
        type: 'groups',
        data: date_encoded_data,
        endpoint: this._get_config('api_host') + '/groups/',
        batcher: this._mixpanel.request_batchers.groups
    }, callback);
};

MixpanelGroup.prototype._is_reserved_property = function(prop) {
    return prop === '$group_key' || prop === '$group_id';
};

MixpanelGroup.prototype._get_config = function(conf) {
    return this._mixpanel.get_config(conf);
};

MixpanelGroup.prototype.toString = function() {
    return this._mixpanel.toString() + '.group.' + this._group_key + '.' + this._group_id;
};

// MixpanelGroup Exports
MixpanelGroup.prototype['remove']   = MixpanelGroup.prototype.remove;
MixpanelGroup.prototype['set']      = MixpanelGroup.prototype.set;
MixpanelGroup.prototype['set_once'] = MixpanelGroup.prototype.set_once;
MixpanelGroup.prototype['union']    = MixpanelGroup.prototype.union;
MixpanelGroup.prototype['unset']    = MixpanelGroup.prototype.unset;
MixpanelGroup.prototype['toString'] = MixpanelGroup.prototype.toString;

/**
 * Mixpanel People Object
 * @constructor
 */
var MixpanelPeople = function() {};

_.extend(MixpanelPeople.prototype, apiActions);

MixpanelPeople.prototype._init = function(mixpanel_instance) {
    this._mixpanel = mixpanel_instance;
};

/*
* Set properties on a user record.
*
* ### Usage:
*
*     mixpanel.people.set('gender', 'm');
*
*     // or set multiple properties at once
*     mixpanel.people.set({
*         'Company': 'Acme',
*         'Plan': 'Premium',
*         'Upgrade date': new Date()
*     });
*     // properties can be strings, integers, dates, or lists
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    // make sure that the referrer info has been updated and saved
    if (this._get_config('save_referrer')) {
        this._mixpanel['persistence'].update_referrer_info(document.referrer);
    }

    // update $set object with default people properties
    data[SET_ACTION] = _.extend(
        {},
        _.info.people_properties(),
        this._mixpanel['persistence'].get_referrer_info(),
        data[SET_ACTION]
    );
    return this._send_request(data, callback);
});

/*
* Set properties on a user record, only if they do not yet exist.
* This will not overwrite previous people property values, unlike
* people.set().
*
* ### Usage:
*
*     mixpanel.people.set_once('First Login Date', new Date());
*
*     // or set multiple properties at once
*     mixpanel.people.set_once({
*         'First Login Date': new Date(),
*         'Starting Plan': 'Premium'
*     });
*
*     // properties can be strings, integers or dates
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/*
* Unset properties on a user record (permanently removes the properties and their values from a profile).
*
* ### Usage:
*
*     mixpanel.people.unset('gender');
*
*     // or unset multiple properties at once
*     mixpanel.people.unset(['gender', 'Company']);
*
* @param {Array|String} prop If a string, this is the name of the property. If an array, this is a list of property names.
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});

/*
* Increment/decrement numeric people analytics properties.
*
* ### Usage:
*
*     mixpanel.people.increment('page_views', 1);
*
*     // or, for convenience, if you're just incrementing a counter by
*     // 1, you can simply do
*     mixpanel.people.increment('page_views');
*
*     // to decrement a counter, pass a negative number
*     mixpanel.people.increment('credits_left', -1);
*
*     // like mixpanel.people.set(), you can increment multiple
*     // properties at once:
*     mixpanel.people.increment({
*         counter1: 1,
*         counter2: 6
*     });
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
* @param {Number} [by] An amount to increment the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function(prop, by, callback) {
    var data = {};
    var $add = {};
    if (_.isObject(prop)) {
        _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) {
                if (isNaN(parseFloat(v))) {
                    console.error('Invalid increment value passed to mixpanel.people.increment - must be a number');
                    return;
                } else {
                    $add[k] = v;
                }
            }
        }, this);
        callback = by;
    } else {
        // convenience: mixpanel.people.increment('property'); will
        // increment 'property' by 1
        if (_.isUndefined(by)) {
            by = 1;
        }
        $add[prop] = by;
    }
    data[ADD_ACTION] = $add;

    return this._send_request(data, callback);
});

/*
* Append a value to a list-valued people analytics property.
*
* ### Usage:
*
*     // append a value to a list, creating it if needed
*     mixpanel.people.append('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.append({
*         list1: 'bob',
*         list2: 123
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value An item to append to the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) {
        callback = value;
    }
    var data = this.append_action(list_name, value);
    return this._send_request(data, callback);
});

/*
* Remove a value from a list-valued people analytics property.
*
* ### Usage:
*
*     mixpanel.people.remove('School', 'UCB');
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value Item to remove from the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) {
        callback = value;
    }
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});

/*
* Merge a given list with a list-valued people analytics property,
* excluding duplicate values.
*
* ### Usage:
*
*     // merge a value to a list, creating it if needed
*     mixpanel.people.union('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.union({
*         list1: 'bob',
*         list2: 123
*     });
*
*     // like mixpanel.people.append(), you can append multiple
*     // values to the same list:
*     mixpanel.people.union({
*         list1: ['bob', 'billy']
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] Value / values to merge with the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function(list_name, values, callback) {
    if (_.isObject(list_name)) {
        callback = values;
    }
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});

/*
* Record that you have charged the current user a certain amount
* of money. Charges recorded with track_charge() will appear in the
* Mixpanel revenue report.
*
* ### Usage:
*
*     // charge a user $50
*     mixpanel.people.track_charge(50);
*
*     // charge a user $30.50 on the 2nd of january
*     mixpanel.people.track_charge(30.50, {
*         '$time': new Date('jan 1 2012')
*     });
*
* @param {Number} amount The amount of money charged to the current user
* @param {Object} [properties] An associative array of properties associated with the charge
* @param {Function} [callback] If provided, the callback will be called when the server responds
*/
MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function(amount, properties, callback) {
    if (!_.isNumber(amount)) {
        amount = parseFloat(amount);
        if (isNaN(amount)) {
            console.error('Invalid value passed to mixpanel.people.track_charge - must be a number');
            return;
        }
    }

    return this.append('$transactions', _.extend({
        '$amount': amount
    }, properties), callback);
});

/*
* Permanently clear all revenue report transactions from the
* current user's people analytics profile.
*
* ### Usage:
*
*     mixpanel.people.clear_charges();
*
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.clear_charges = function(callback) {
    return this.set('$transactions', [], callback);
};

/*
* Permanently deletes the current people analytics profile from
* Mixpanel (using the current distinct_id).
*
* ### Usage:
*
*     // remove the all data you have stored about the current user
*     mixpanel.people.delete_user();
*
*/
MixpanelPeople.prototype.delete_user = function() {
    if (!this._identify_called()) {
        console.error('mixpanel.people.delete_user() requires you to call identify() first');
        return;
    }
    var data = {'$delete': this._mixpanel.get_distinct_id()};
    return this._send_request(data);
};

MixpanelPeople.prototype.toString = function() {
    return this._mixpanel.toString() + '.people';
};

MixpanelPeople.prototype._send_request = function(data, callback) {
    data['$token'] = this._get_config('token');
    data['$distinct_id'] = this._mixpanel.get_distinct_id();
    var device_id = this._mixpanel.get_property('$device_id');
    var user_id = this._mixpanel.get_property('$user_id');
    var had_persisted_distinct_id = this._mixpanel.get_property('$had_persisted_distinct_id');
    if (device_id) {
        data['$device_id'] = device_id;
    }
    if (user_id) {
        data['$user_id'] = user_id;
    }
    if (had_persisted_distinct_id) {
        data['$had_persisted_distinct_id'] = had_persisted_distinct_id;
    }

    var date_encoded_data = _.encodeDates(data);

    if (!this._identify_called()) {
        this._enqueue(data);
        if (!_.isUndefined(callback)) {
            if (this._get_config('verbose')) {
                callback({status: -1, error: null});
            } else {
                callback(-1);
            }
        }
        return _.truncate(date_encoded_data, 255);
    }

    return this._mixpanel._track_or_batch({
        type: 'people',
        data: date_encoded_data,
        endpoint: this._get_config('api_host') + '/engage/',
        batcher: this._mixpanel.request_batchers.people
    }, callback);
};

MixpanelPeople.prototype._get_config = function(conf_var) {
    return this._mixpanel.get_config(conf_var);
};

MixpanelPeople.prototype._identify_called = function() {
    return this._mixpanel._flags.identify_called === true;
};

// Queue up engage operations if identify hasn't been called yet.
MixpanelPeople.prototype._enqueue = function(data) {
    if (SET_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(SET_ACTION, data);
    } else if (SET_ONCE_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(SET_ONCE_ACTION, data);
    } else if (UNSET_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(UNSET_ACTION, data);
    } else if (ADD_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(ADD_ACTION, data);
    } else if (APPEND_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, data);
    } else if (REMOVE_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, data);
    } else if (UNION_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(UNION_ACTION, data);
    } else {
        console.error('Invalid call to _enqueue():', data);
    }
};

MixpanelPeople.prototype._flush_one_queue = function(action, action_method, callback, queue_to_params_fn) {
    var _this = this;
    var queued_data = _.extend({}, this._mixpanel['persistence']._get_queue(action));
    var action_params = queued_data;

    if (!_.isUndefined(queued_data) && _.isObject(queued_data) && !_.isEmptyObject(queued_data)) {
        _this._mixpanel['persistence']._pop_from_people_queue(action, queued_data);
        if (queue_to_params_fn) {
            action_params = queue_to_params_fn(queued_data);
        }
        action_method.call(_this, action_params, function(response, data) {
            // on bad response, we want to add it back to the queue
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(action, queued_data);
            }
            if (!_.isUndefined(callback)) {
                callback(response, data);
            }
        });
    }
};

// Flush queued engage operations - order does not matter,
// and there are network level race conditions anyway
MixpanelPeople.prototype._flush = function(
    _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback
) {
    var _this = this;
    var $append_queue = this._mixpanel['persistence']._get_queue(APPEND_ACTION);
    var $remove_queue = this._mixpanel['persistence']._get_queue(REMOVE_ACTION);

    this._flush_one_queue(SET_ACTION, this.set, _set_callback);
    this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);
    this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function(queue) { return _.keys(queue); });
    this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);
    this._flush_one_queue(UNION_ACTION, this.union, _union_callback);

    // we have to fire off each $append individually since there is
    // no concat method server side
    if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
        var $append_item;
        var append_callback = function(response, data) {
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, $append_item);
            }
            if (!_.isUndefined(_append_callback)) {
                _append_callback(response, data);
            }
        };
        for (var i = $append_queue.length - 1; i >= 0; i--) {
            $append_item = $append_queue.pop();
            if (!_.isEmptyObject($append_item)) {
                _this.append($append_item, append_callback);
            }
        }
        // Save the shortened append queue
        _this._mixpanel['persistence'].save();
    }

    // same for $remove
    if (!_.isUndefined($remove_queue) && _.isArray($remove_queue) && $remove_queue.length) {
        var $remove_item;
        var remove_callback = function(response, data) {
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, $remove_item);
            }
            if (!_.isUndefined(_remove_callback)) {
                _remove_callback(response, data);
            }
        };
        for (var j = $remove_queue.length - 1; j >= 0; j--) {
            $remove_item = $remove_queue.pop();
            if (!_.isEmptyObject($remove_item)) {
                _this.remove($remove_item, remove_callback);
            }
        }
        _this._mixpanel['persistence'].save();
    }
};

MixpanelPeople.prototype._is_reserved_property = function(prop) {
    return prop === '$distinct_id' || prop === '$token' || prop === '$device_id' || prop === '$user_id' || prop === '$had_persisted_distinct_id';
};

// MixpanelPeople Exports
MixpanelPeople.prototype['set']           = MixpanelPeople.prototype.set;
MixpanelPeople.prototype['set_once']      = MixpanelPeople.prototype.set_once;
MixpanelPeople.prototype['unset']         = MixpanelPeople.prototype.unset;
MixpanelPeople.prototype['increment']     = MixpanelPeople.prototype.increment;
MixpanelPeople.prototype['append']        = MixpanelPeople.prototype.append;
MixpanelPeople.prototype['remove']        = MixpanelPeople.prototype.remove;
MixpanelPeople.prototype['union']         = MixpanelPeople.prototype.union;
MixpanelPeople.prototype['track_charge']  = MixpanelPeople.prototype.track_charge;
MixpanelPeople.prototype['clear_charges'] = MixpanelPeople.prototype.clear_charges;
MixpanelPeople.prototype['delete_user']   = MixpanelPeople.prototype.delete_user;
MixpanelPeople.prototype['toString']      = MixpanelPeople.prototype.toString;

/*
 * Constants
 */
/** @const */ var SET_QUEUE_KEY          = '__mps';
/** @const */ var SET_ONCE_QUEUE_KEY     = '__mpso';
/** @const */ var UNSET_QUEUE_KEY        = '__mpus';
/** @const */ var ADD_QUEUE_KEY          = '__mpa';
/** @const */ var APPEND_QUEUE_KEY       = '__mpap';
/** @const */ var REMOVE_QUEUE_KEY       = '__mpr';
/** @const */ var UNION_QUEUE_KEY        = '__mpu';
// This key is deprecated, but we want to check for it to see whether aliasing is allowed.
/** @const */ var PEOPLE_DISTINCT_ID_KEY = '$people_distinct_id';
/** @const */ var ALIAS_ID_KEY           = '__alias';
/** @const */ var EVENT_TIMERS_KEY       = '__timers';
/** @const */ var RESERVED_PROPERTIES = [
    SET_QUEUE_KEY,
    SET_ONCE_QUEUE_KEY,
    UNSET_QUEUE_KEY,
    ADD_QUEUE_KEY,
    APPEND_QUEUE_KEY,
    REMOVE_QUEUE_KEY,
    UNION_QUEUE_KEY,
    PEOPLE_DISTINCT_ID_KEY,
    ALIAS_ID_KEY,
    EVENT_TIMERS_KEY
];

/**
 * Mixpanel Persistence Object
 * @constructor
 */
var MixpanelPersistence = function(config) {
    this['props'] = {};
    this.campaign_params_saved = false;

    if (config['persistence_name']) {
        this.name = 'mp_' + config['persistence_name'];
    } else {
        this.name = 'mp_' + config['token'] + '_mixpanel';
    }

    var storage_type = config['persistence'];
    if (storage_type !== 'cookie' && storage_type !== 'localStorage') {
        console.critical('Unknown persistence type ' + storage_type + '; falling back to cookie');
        storage_type = config['persistence'] = 'cookie';
    }

    if (storage_type === 'localStorage' && _.localStorage.is_supported()) {
        this.storage = _.localStorage;
    } else {
        this.storage = _.cookie;
    }

    this.load();
    this.update_config(config);
    this.upgrade(config);
    this.save();
};

MixpanelPersistence.prototype.properties = function() {
    var p = {};
    // Filter out reserved properties
    _.each(this['props'], function(v, k) {
        if (!_.include(RESERVED_PROPERTIES, k)) {
            p[k] = v;
        }
    });
    return p;
};

MixpanelPersistence.prototype.load = function() {
    if (this.disabled) { return; }

    var entry = this.storage.parse(this.name);

    if (entry) {
        this['props'] = _.extend({}, entry);
    }
};

MixpanelPersistence.prototype.upgrade = function(config) {
    var upgrade_from_old_lib = config['upgrade'],
        old_cookie_name,
        old_cookie;

    if (upgrade_from_old_lib) {
        old_cookie_name = 'mp_super_properties';
        // Case where they had a custom cookie name before.
        if (typeof(upgrade_from_old_lib) === 'string') {
            old_cookie_name = upgrade_from_old_lib;
        }

        old_cookie = this.storage.parse(old_cookie_name);

        // remove the cookie
        this.storage.remove(old_cookie_name);
        this.storage.remove(old_cookie_name, true);

        if (old_cookie) {
            this['props'] = _.extend(
                this['props'],
                old_cookie['all'],
                old_cookie['events']
            );
        }
    }

    if (!config['cookie_name'] && config['name'] !== 'mixpanel') {
        // special case to handle people with cookies of the form
        // mp_TOKEN_INSTANCENAME from the first release of this library
        old_cookie_name = 'mp_' + config['token'] + '_' + config['name'];
        old_cookie = this.storage.parse(old_cookie_name);

        if (old_cookie) {
            this.storage.remove(old_cookie_name);
            this.storage.remove(old_cookie_name, true);

            // Save the prop values that were in the cookie from before -
            // this should only happen once as we delete the old one.
            this.register_once(old_cookie);
        }
    }

    if (this.storage === _.localStorage) {
        old_cookie = _.cookie.parse(this.name);

        _.cookie.remove(this.name);
        _.cookie.remove(this.name, true);

        if (old_cookie) {
            this.register_once(old_cookie);
        }
    }
};

MixpanelPersistence.prototype.save = function() {
    if (this.disabled) { return; }
    this.storage.set(
        this.name,
        _.JSONEncode(this['props']),
        this.expire_days,
        this.cross_subdomain,
        this.secure,
        this.cross_site,
        this.cookie_domain
    );
};

MixpanelPersistence.prototype.remove = function() {
    // remove both domain and subdomain cookies
    this.storage.remove(this.name, false, this.cookie_domain);
    this.storage.remove(this.name, true, this.cookie_domain);
};

// removes the storage entry and deletes all loaded data
// forced name for tests
MixpanelPersistence.prototype.clear = function() {
    this.remove();
    this['props'] = {};
};

/**
* @param {Object} props
* @param {*=} default_value
* @param {number=} days
*/
MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
    if (_.isObject(props)) {
        if (typeof(default_value) === 'undefined') { default_value = 'None'; }
        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

        _.each(props, function(val, prop) {
            if (!this['props'].hasOwnProperty(prop) || this['props'][prop] === default_value) {
                this['props'][prop] = val;
            }
        }, this);

        this.save();

        return true;
    }
    return false;
};

/**
* @param {Object} props
* @param {number=} days
*/
MixpanelPersistence.prototype.register = function(props, days) {
    if (_.isObject(props)) {
        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

        _.extend(this['props'], props);

        this.save();

        return true;
    }
    return false;
};

MixpanelPersistence.prototype.unregister = function(prop) {
    if (prop in this['props']) {
        delete this['props'][prop];
        this.save();
    }
};

MixpanelPersistence.prototype.update_campaign_params = function() {
    if (!this.campaign_params_saved) {
        this.register_once(_.info.campaignParams());
        this.campaign_params_saved = true;
    }
};

MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
    this.register(_.info.searchInfo(referrer));
};

// EXPORTED METHOD, we test this directly.
MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
    // If referrer doesn't exist, we want to note the fact that it was type-in traffic.
    this.register_once({
        '$initial_referrer': referrer || '$direct',
        '$initial_referring_domain': _.info.referringDomain(referrer) || '$direct'
    }, '');
};

MixpanelPersistence.prototype.get_referrer_info = function() {
    return _.strip_empty_properties({
        '$initial_referrer': this['props']['$initial_referrer'],
        '$initial_referring_domain': this['props']['$initial_referring_domain']
    });
};

// safely fills the passed in object with stored properties,
// does not override any properties defined in both
// returns the passed in object
MixpanelPersistence.prototype.safe_merge = function(props) {
    _.each(this['props'], function(val, prop) {
        if (!(prop in props)) {
            props[prop] = val;
        }
    });

    return props;
};

MixpanelPersistence.prototype.update_config = function(config) {
    this.default_expiry = this.expire_days = config['cookie_expiration'];
    this.set_disabled(config['disable_persistence']);
    this.set_cookie_domain(config['cookie_domain']);
    this.set_cross_site(config['cross_site_cookie']);
    this.set_cross_subdomain(config['cross_subdomain_cookie']);
    this.set_secure(config['secure_cookie']);
};

MixpanelPersistence.prototype.set_disabled = function(disabled) {
    this.disabled = disabled;
    if (this.disabled) {
        this.remove();
    } else {
        this.save();
    }
};

MixpanelPersistence.prototype.set_cookie_domain = function(cookie_domain) {
    if (cookie_domain !== this.cookie_domain) {
        this.remove();
        this.cookie_domain = cookie_domain;
        this.save();
    }
};

MixpanelPersistence.prototype.set_cross_site = function(cross_site) {
    if (cross_site !== this.cross_site) {
        this.cross_site = cross_site;
        this.remove();
        this.save();
    }
};

MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
    if (cross_subdomain !== this.cross_subdomain) {
        this.cross_subdomain = cross_subdomain;
        this.remove();
        this.save();
    }
};

MixpanelPersistence.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain;
};

MixpanelPersistence.prototype.set_secure = function(secure) {
    if (secure !== this.secure) {
        this.secure = secure ? true : false;
        this.remove();
        this.save();
    }
};

MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
    var q_key = this._get_queue_key(queue),
        q_data = data[queue],
        set_q = this._get_or_create_queue(SET_ACTION),
        set_once_q = this._get_or_create_queue(SET_ONCE_ACTION),
        unset_q = this._get_or_create_queue(UNSET_ACTION),
        add_q = this._get_or_create_queue(ADD_ACTION),
        union_q = this._get_or_create_queue(UNION_ACTION),
        remove_q = this._get_or_create_queue(REMOVE_ACTION, []),
        append_q = this._get_or_create_queue(APPEND_ACTION, []);

    if (q_key === SET_QUEUE_KEY) {
        // Update the set queue - we can override any existing values
        _.extend(set_q, q_data);
        // if there was a pending increment, override it
        // with the set.
        this._pop_from_people_queue(ADD_ACTION, q_data);
        // if there was a pending union, override it
        // with the set.
        this._pop_from_people_queue(UNION_ACTION, q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === SET_ONCE_QUEUE_KEY) {
        // only queue the data if there is not already a set_once call for it.
        _.each(q_data, function(v, k) {
            if (!(k in set_once_q)) {
                set_once_q[k] = v;
            }
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNSET_QUEUE_KEY) {
        _.each(q_data, function(prop) {

            // undo previously-queued actions on this key
            _.each([set_q, set_once_q, add_q, union_q], function(enqueued_obj) {
                if (prop in enqueued_obj) {
                    delete enqueued_obj[prop];
                }
            });
            _.each(append_q, function(append_obj) {
                if (prop in append_obj) {
                    delete append_obj[prop];
                }
            });

            unset_q[prop] = true;

        });
    } else if (q_key === ADD_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            // If it exists in the set queue, increment
            // the value
            if (k in set_q) {
                set_q[k] += v;
            } else {
                // If it doesn't exist, update the add
                // queue
                if (!(k in add_q)) {
                    add_q[k] = 0;
                }
                add_q[k] += v;
            }
        }, this);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNION_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            if (_.isArray(v)) {
                if (!(k in union_q)) {
                    union_q[k] = [];
                }
                // We may send duplicates, the server will dedup them.
                union_q[k] = union_q[k].concat(v);
            }
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === REMOVE_QUEUE_KEY) {
        remove_q.push(q_data);
        this._pop_from_people_queue(APPEND_ACTION, q_data);
    } else if (q_key === APPEND_QUEUE_KEY) {
        append_q.push(q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    }

    console.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):');
    console.log(data);

    this.save();
};

MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
    var q = this._get_queue(queue);
    if (!_.isUndefined(q)) {
        _.each(data, function(v, k) {
            if (queue === APPEND_ACTION || queue === REMOVE_ACTION) {
                // list actions: only remove if both k+v match
                // e.g. remove should not override append in a case like
                // append({foo: 'bar'}); remove({foo: 'qux'})
                _.each(q, function(queued_action) {
                    if (queued_action[k] === v) {
                        delete queued_action[k];
                    }
                });
            } else {
                delete q[k];
            }
        }, this);

        this.save();
    }
};

MixpanelPersistence.prototype._get_queue_key = function(queue) {
    if (queue === SET_ACTION) {
        return SET_QUEUE_KEY;
    } else if (queue === SET_ONCE_ACTION) {
        return SET_ONCE_QUEUE_KEY;
    } else if (queue === UNSET_ACTION) {
        return UNSET_QUEUE_KEY;
    } else if (queue === ADD_ACTION) {
        return ADD_QUEUE_KEY;
    } else if (queue === APPEND_ACTION) {
        return APPEND_QUEUE_KEY;
    } else if (queue === REMOVE_ACTION) {
        return REMOVE_QUEUE_KEY;
    } else if (queue === UNION_ACTION) {
        return UNION_QUEUE_KEY;
    } else {
        console.error('Invalid queue:', queue);
    }
};

MixpanelPersistence.prototype._get_queue = function(queue) {
    return this['props'][this._get_queue_key(queue)];
};
MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
    var key = this._get_queue_key(queue);
    default_val = _.isUndefined(default_val) ? {} : default_val;

    return this['props'][key] || (this['props'][key] = default_val);
};

MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
    var timers = this['props'][EVENT_TIMERS_KEY] || {};
    timers[event_name] = timestamp;
    this['props'][EVENT_TIMERS_KEY] = timers;
    this.save();
};

MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
    var timers = this['props'][EVENT_TIMERS_KEY] || {};
    var timestamp = timers[event_name];
    if (!_.isUndefined(timestamp)) {
        delete this['props'][EVENT_TIMERS_KEY][event_name];
        this.save();
    }
    return timestamp;
};

/*
 * Mixpanel JS Library
 *
 * Copyright 2012, Mixpanel, Inc. All Rights Reserved
 * http://mixpanel.com/
 *
 * Includes portions of Underscore.js
 * http://documentcloud.github.com/underscore/
 * (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT License.
 */

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name mixpanel-2.8.min.js
// ==/ClosureCompiler==

/*
SIMPLE STYLE GUIDE:

this.x === public function
this._x === internal - only use within this file
this.__x === private - only use within the class

Globals should be all caps
*/

var init_type;       // MODULE or SNIPPET loader
var mixpanel_master; // main mixpanel instance / object
var INIT_MODULE  = 0;
var INIT_SNIPPET = 1;

var IDENTITY_FUNC = function(x) {return x;};
var NOOP_FUNC = function() {};

/** @const */ var PRIMARY_INSTANCE_NAME = 'mixpanel';
/** @const */ var PAYLOAD_TYPE_BASE64   = 'base64';
/** @const */ var PAYLOAD_TYPE_JSON     = 'json';


/*
 * Dynamic... constants? Is that an oxymoron?
 */
// http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
// https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials
var USE_XHR = (window$1.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest());

// IE<10 does not support cross-origin XHR's but script tags
// with defer won't block window.onload; ENQUEUE_REQUESTS
// should only be true for Opera<12
var ENQUEUE_REQUESTS = !USE_XHR && (userAgent.indexOf('MSIE') === -1) && (userAgent.indexOf('Mozilla') === -1);

// save reference to navigator.sendBeacon so it can be minified
var sendBeacon = null;
if (navigator['sendBeacon']) {
    sendBeacon = function() {
        // late reference to navigator.sendBeacon to allow patching/spying
        return navigator['sendBeacon'].apply(navigator, arguments);
    };
}

/*
 * Module-level globals
 */
var DEFAULT_CONFIG = {
    'api_host':                          'https://api-js.mixpanel.com',
    'api_method':                        'POST',
    'api_transport':                     'XHR',
    'api_payload_format':                PAYLOAD_TYPE_BASE64,
    'app_host':                          'https://mixpanel.com',
    'cdn':                               'https://cdn.mxpnl.com',
    'cross_site_cookie':                 false,
    'cross_subdomain_cookie':            true,
    'error_reporter':                    NOOP_FUNC,
    'persistence':                       'cookie',
    'persistence_name':                  '',
    'cookie_domain':                     '',
    'cookie_name':                       '',
    'loaded':                            NOOP_FUNC,
    'store_google':                      true,
    'save_referrer':                     true,
    'test':                              false,
    'verbose':                           false,
    'img':                               false,
    'debug':                             false,
    'track_links_timeout':               300,
    'cookie_expiration':                 365,
    'upgrade':                           false,
    'disable_persistence':               false,
    'disable_cookie':                    false,
    'secure_cookie':                     false,
    'ip':                                true,
    'opt_out_tracking_by_default':       false,
    'opt_out_persistence_by_default':    false,
    'opt_out_tracking_persistence_type': 'localStorage',
    'opt_out_tracking_cookie_prefix':    null,
    'property_blacklist':                [],
    'xhr_headers':                       {}, // { header: value, header2: value }
    'ignore_dnt':                        false,
    'batch_requests':                    true,
    'batch_size':                        50,
    'batch_flush_interval_ms':           5000,
    'batch_request_timeout_ms':          90000,
    'batch_autostart':                   true,
    'hooks':                             {}
};

var DOM_LOADED = false;

/**
 * Mixpanel Library Object
 * @constructor
 */
var MixpanelLib = function() {};


/**
 * create_mplib(token:string, config:object, name:string)
 *
 * This function is used by the init method of MixpanelLib objects
 * as well as the main initializer at the end of the JSLib (that
 * initializes document.mixpanel as well as any additional instances
 * declared before this file has loaded).
 */
var create_mplib = function(token, config, name) {
    var instance,
        target = (name === PRIMARY_INSTANCE_NAME) ? mixpanel_master : mixpanel_master[name];

    if (target && init_type === INIT_MODULE) {
        instance = target;
    } else {
        if (target && !_.isArray(target)) {
            console.error('You have already initialized ' + name);
            return;
        }
        instance = new MixpanelLib();
    }

    instance._cached_groups = {}; // cache groups in a pool

    instance._init(token, config, name);

    instance['people'] = new MixpanelPeople();
    instance['people']._init(instance);

    // if any instance on the page has debug = true, we set the
    // global debug to be true
    Config.DEBUG = Config.DEBUG || instance.get_config('debug');

    // if target is not defined, we called init after the lib already
    // loaded, so there won't be an array of things to execute
    if (!_.isUndefined(target) && _.isArray(target)) {
        // Crunch through the people queue first - we queue this data up &
        // flush on identify, so it's better to do all these operations first
        instance._execute_array.call(instance['people'], target['people']);
        instance._execute_array(target);
    }

    return instance;
};

// Initialization methods

/**
 * This function initializes a new instance of the Mixpanel tracking object.
 * All new instances are added to the main mixpanel object as sub properties (such as
 * mixpanel.library_name) and also returned by this function. To define a
 * second instance on the page, you would call:
 *
 *     mixpanel.init('new token', { your: 'config' }, 'library_name');
 *
 * and use it like so:
 *
 *     mixpanel.library_name.track(...);
 *
 * @param {String} token   Your Mixpanel API token
 * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110">See a list of default config options</a>.
 * @param {String} [name]    The name for the new mixpanel instance that you want created
 */
MixpanelLib.prototype.init = function (token, config, name) {
    if (_.isUndefined(name)) {
        this.report_error('You must name your new library: init(token, config, name)');
        return;
    }
    if (name === PRIMARY_INSTANCE_NAME) {
        this.report_error('You must initialize the main mixpanel object right after you include the Mixpanel js snippet');
        return;
    }

    var instance = create_mplib(token, config, name);
    mixpanel_master[name] = instance;
    instance._loaded();

    return instance;
};

// mixpanel._init(token:string, config:object, name:string)
//
// This function sets up the current instance of the mixpanel
// library.  The difference between this method and the init(...)
// method is this one initializes the actual instance, whereas the
// init(...) method sets up a new library and calls _init on it.
//
MixpanelLib.prototype._init = function(token, config, name) {
    config = config || {};

    this['__loaded'] = true;
    this['config'] = {};

    var variable_features = {};

    // default to JSON payload for standard mixpanel.com API hosts
    if (!('api_payload_format' in config)) {
        var api_host = config['api_host'] || DEFAULT_CONFIG['api_host'];
        if (api_host.match(/\.mixpanel\.com$/)) {
            variable_features['api_payload_format'] = PAYLOAD_TYPE_JSON;
        }
    }

    this.set_config(_.extend({}, DEFAULT_CONFIG, variable_features, config, {
        'name': name,
        'token': token,
        'callback_fn': ((name === PRIMARY_INSTANCE_NAME) ? name : PRIMARY_INSTANCE_NAME + '.' + name) + '._jsc'
    }));

    this['_jsc'] = NOOP_FUNC;

    this.__dom_loaded_queue = [];
    this.__request_queue = [];
    this.__disabled_events = [];
    this._flags = {
        'disable_all_events': false,
        'identify_called': false
    };

    // set up request queueing/batching
    this.request_batchers = {};
    this._batch_requests = this.get_config('batch_requests');
    if (this._batch_requests) {
        if (!_.localStorage.is_supported(true) || !USE_XHR) {
            this._batch_requests = false;
            console.log('Turning off Mixpanel request-queueing; needs XHR and localStorage support');
        } else {
            this.init_batchers();
            if (sendBeacon && window$1.addEventListener) {
                // Before page closes or hides (user tabs away etc), attempt to flush any events
                // queued up via navigator.sendBeacon. Since sendBeacon doesn't report success/failure,
                // events will not be removed from the persistent store; if the site is loaded again,
                // the events will be flushed again on startup and deduplicated on the Mixpanel server
                // side.
                // There is no reliable way to capture only page close events, so we lean on the
                // visibilitychange and pagehide events as recommended at
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event#usage_notes.
                // These events fire when the user clicks away from the current page/tab, so will occur
                // more frequently than page unload, but are the only mechanism currently for capturing
                // this scenario somewhat reliably.
                var flush_on_unload = _.bind(function() {
                    if (!this.request_batchers.events.stopped) {
                        this.request_batchers.events.flush({unloading: true});
                    }
                }, this);
                window$1.addEventListener('pagehide', function(ev) {
                    if (ev['persisted']) {
                        flush_on_unload();
                    }
                });
                window$1.addEventListener('visibilitychange', function() {
                    if (document$1['visibilityState'] === 'hidden') {
                        flush_on_unload();
                    }
                });
            }
        }
    }

    this['persistence'] = this['cookie'] = new MixpanelPersistence(this['config']);
    this.unpersisted_superprops = {};
    this._gdpr_init();

    var uuid = _.UUID();
    if (!this.get_distinct_id()) {
        // There is no need to set the distinct id
        // or the device id if something was already stored
        // in the persitence
        this.register_once({
            'distinct_id': uuid,
            '$device_id': uuid
        }, '');
    }
};

// Private methods

MixpanelLib.prototype._loaded = function() {
    this.get_config('loaded')(this);
    this._set_default_superprops();
};

// update persistence with info on referrer, UTM params, etc
MixpanelLib.prototype._set_default_superprops = function() {
    this['persistence'].update_search_keyword(document$1.referrer);
    if (this.get_config('store_google')) {
        this['persistence'].update_campaign_params();
    }
    if (this.get_config('save_referrer')) {
        this['persistence'].update_referrer_info(document$1.referrer);
    }
};

MixpanelLib.prototype._dom_loaded = function() {
    _.each(this.__dom_loaded_queue, function(item) {
        this._track_dom.apply(this, item);
    }, this);

    if (!this.has_opted_out_tracking()) {
        _.each(this.__request_queue, function(item) {
            this._send_request.apply(this, item);
        }, this);
    }

    delete this.__dom_loaded_queue;
    delete this.__request_queue;
};

MixpanelLib.prototype._track_dom = function(DomClass, args) {
    if (this.get_config('img')) {
        this.report_error('You can\'t use DOM tracking functions with img = true.');
        return false;
    }

    if (!DOM_LOADED) {
        this.__dom_loaded_queue.push([DomClass, args]);
        return false;
    }

    var dt = new DomClass().init(this);
    return dt.track.apply(dt, args);
};

/**
 * _prepare_callback() should be called by callers of _send_request for use
 * as the callback argument.
 *
 * If there is no callback, this returns null.
 * If we are going to make XHR/XDR requests, this returns a function.
 * If we are going to use script tags, this returns a string to use as the
 * callback GET param.
 */
MixpanelLib.prototype._prepare_callback = function(callback, data) {
    if (_.isUndefined(callback)) {
        return null;
    }

    if (USE_XHR) {
        var callback_function = function(response) {
            callback(response, data);
        };
        return callback_function;
    } else {
        // if the user gives us a callback, we store as a random
        // property on this instances jsc function and update our
        // callback string to reflect that.
        var jsc = this['_jsc'];
        var randomized_cb = '' + Math.floor(Math.random() * 100000000);
        var callback_string = this.get_config('callback_fn') + '[' + randomized_cb + ']';
        jsc[randomized_cb] = function(response) {
            delete jsc[randomized_cb];
            callback(response, data);
        };
        return callback_string;
    }
};

MixpanelLib.prototype._send_request = function(url, data, options, callback) {
    var succeeded = true;

    if (ENQUEUE_REQUESTS) {
        this.__request_queue.push(arguments);
        return succeeded;
    }

    var DEFAULT_OPTIONS = {
        method: this.get_config('api_method'),
        transport: this.get_config('api_transport'),
        verbose: this.get_config('verbose')
    };
    var body_data = null;

    if (!callback && (_.isFunction(options) || typeof options === 'string')) {
        callback = options;
        options = null;
    }
    options = _.extend(DEFAULT_OPTIONS, options || {});
    if (!USE_XHR) {
        options.method = 'GET';
    }
    var use_post = options.method === 'POST';
    var use_sendBeacon = sendBeacon && use_post && options.transport.toLowerCase() === 'sendbeacon';

    // needed to correctly format responses
    var verbose_mode = options.verbose;
    if (data['verbose']) { verbose_mode = true; }

    if (this.get_config('test')) { data['test'] = 1; }
    if (verbose_mode) { data['verbose'] = 1; }
    if (this.get_config('img')) { data['img'] = 1; }
    if (!USE_XHR) {
        if (callback) {
            data['callback'] = callback;
        } else if (verbose_mode || this.get_config('test')) {
            // Verbose output (from verbose mode, or an error in test mode) is a json blob,
            // which by itself is not valid javascript. Without a callback, this verbose output will
            // cause an error when returned via jsonp, so we force a no-op callback param.
            // See the ECMA script spec: http://www.ecma-international.org/ecma-262/5.1/#sec-12.4
            data['callback'] = '(function(){})';
        }
    }

    data['ip'] = this.get_config('ip')?1:0;
    data['_'] = new Date().getTime().toString();

    if (use_post) {
        body_data = 'data=' + encodeURIComponent(data['data']);
        delete data['data'];
    }

    url += '?' + _.HTTPBuildQuery(data);

    var lib = this;
    if ('img' in data) {
        var img = document$1.createElement('img');
        img.src = url;
        document$1.body.appendChild(img);
    } else if (use_sendBeacon) {
        try {
            succeeded = sendBeacon(url, body_data);
        } catch (e) {
            lib.report_error(e);
            succeeded = false;
        }
        try {
            if (callback) {
                callback(succeeded ? 1 : 0);
            }
        } catch (e) {
            lib.report_error(e);
        }
    } else if (USE_XHR) {
        try {
            var req = new XMLHttpRequest();
            req.open(options.method, url, true);

            var headers = this.get_config('xhr_headers');
            if (use_post) {
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            _.each(headers, function(headerValue, headerName) {
                req.setRequestHeader(headerName, headerValue);
            });

            if (options.timeout_ms && typeof req.timeout !== 'undefined') {
                req.timeout = options.timeout_ms;
                var start_time = new Date().getTime();
            }

            // send the mp_optout cookie
            // withCredentials cannot be modified until after calling .open on Android and Mobile Safari
            req.withCredentials = true;
            req.onreadystatechange = function () {
                if (req.readyState === 4) { // XMLHttpRequest.DONE == 4, except in safari 4
                    if (req.status === 200) {
                        if (callback) {
                            if (verbose_mode) {
                                var response;
                                try {
                                    response = _.JSONDecode(req.responseText);
                                } catch (e) {
                                    lib.report_error(e);
                                    if (options.ignore_json_errors) {
                                        response = req.responseText;
                                    } else {
                                        return;
                                    }
                                }
                                callback(response);
                            } else {
                                callback(Number(req.responseText));
                            }
                        }
                    } else {
                        var error;
                        if (
                            req.timeout &&
                            !req.status &&
                            new Date().getTime() - start_time >= req.timeout
                        ) {
                            error = 'timeout';
                        } else {
                            error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
                        }
                        lib.report_error(error);
                        if (callback) {
                            if (verbose_mode) {
                                callback({status: 0, error: error, xhr_req: req});
                            } else {
                                callback(0);
                            }
                        }
                    }
                }
            };
            req.send(body_data);
        } catch (e) {
            lib.report_error(e);
            succeeded = false;
        }
    } else {
        var script = document$1.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = url;
        var s = document$1.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    }

    return succeeded;
};

/**
 * _execute_array() deals with processing any mixpanel function
 * calls that were called before the Mixpanel library were loaded
 * (and are thus stored in an array so they can be called later)
 *
 * Note: we fire off all the mixpanel function calls && user defined
 * functions BEFORE we fire off mixpanel tracking calls. This is so
 * identify/register/set_config calls can properly modify early
 * tracking calls.
 *
 * @param {Array} array
 */
MixpanelLib.prototype._execute_array = function(array) {
    var fn_name, alias_calls = [], other_calls = [], tracking_calls = [];
    _.each(array, function(item) {
        if (item) {
            fn_name = item[0];
            if (_.isArray(fn_name)) {
                tracking_calls.push(item); // chained call e.g. mixpanel.get_group().set()
            } else if (typeof(item) === 'function') {
                item.call(this);
            } else if (_.isArray(item) && fn_name === 'alias') {
                alias_calls.push(item);
            } else if (_.isArray(item) && fn_name.indexOf('track') !== -1 && typeof(this[fn_name]) === 'function') {
                tracking_calls.push(item);
            } else {
                other_calls.push(item);
            }
        }
    }, this);

    var execute = function(calls, context) {
        _.each(calls, function(item) {
            if (_.isArray(item[0])) {
                // chained call
                var caller = context;
                _.each(item, function(call) {
                    caller = caller[call[0]].apply(caller, call.slice(1));
                });
            } else {
                this[item[0]].apply(this, item.slice(1));
            }
        }, context);
    };

    execute(alias_calls, this);
    execute(other_calls, this);
    execute(tracking_calls, this);
};

// request queueing utils

MixpanelLib.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events;
};

MixpanelLib.prototype.init_batchers = function() {
    var token = this.get_config('token');
    if (!this.are_batchers_initialized()) {
        var batcher_for = _.bind(function(attrs) {
            return new RequestBatcher(
                '__mpq_' + token + attrs.queue_suffix,
                {
                    libConfig: this['config'],
                    sendRequestFunc: _.bind(function(data, options, cb) {
                        this._send_request(
                            this.get_config('api_host') + attrs.endpoint,
                            this._encode_data_for_request(data),
                            options,
                            this._prepare_callback(cb, data)
                        );
                    }, this),
                    beforeSendHook: _.bind(function(item) {
                        return this._run_hook('before_send_' + attrs.type, item);
                    }, this),
                    errorReporter: this.get_config('error_reporter'),
                    stopAllBatchingFunc: _.bind(this.stop_batch_senders, this)
                }
            );
        }, this);
        this.request_batchers = {
            events: batcher_for({type: 'events', endpoint: '/track/', queue_suffix: '_ev'}),
            people: batcher_for({type: 'people', endpoint: '/engage/', queue_suffix: '_pp'}),
            groups: batcher_for({type: 'groups', endpoint: '/groups/', queue_suffix: '_gr'})
        };
    }
    if (this.get_config('batch_autostart')) {
        this.start_batch_senders();
    }
};

MixpanelLib.prototype.start_batch_senders = function() {
    if (this.are_batchers_initialized()) {
        this._batch_requests = true;
        _.each(this.request_batchers, function(batcher) {
            batcher.start();
        });
    }
};

MixpanelLib.prototype.stop_batch_senders = function() {
    this._batch_requests = false;
    _.each(this.request_batchers, function(batcher) {
        batcher.stop();
        batcher.clear();
    });
};

/**
 * push() keeps the standard async-array-push
 * behavior around after the lib is loaded.
 * This is only useful for external integrations that
 * do not wish to rely on our convenience methods
 * (created in the snippet).
 *
 * ### Usage:
 *     mixpanel.push(['register', { a: 'b' }]);
 *
 * @param {Array} item A [function_name, args...] array to be executed
 */
MixpanelLib.prototype.push = function(item) {
    this._execute_array([item]);
};

/**
 * Disable events on the Mixpanel object. If passed no arguments,
 * this function disables tracking of any event. If passed an
 * array of event names, those events will be disabled, but other
 * events will continue to be tracked.
 *
 * Note: this function does not stop other mixpanel functions from
 * firing, such as register() or people.set().
 *
 * @param {Array} [events] An array of event names to disable
 */
MixpanelLib.prototype.disable = function(events) {
    if (typeof(events) === 'undefined') {
        this._flags.disable_all_events = true;
    } else {
        this.__disabled_events = this.__disabled_events.concat(events);
    }
};

MixpanelLib.prototype._encode_data_for_request = function(data) {
    var encoded_data = _.JSONEncode(data);
    if (this.get_config('api_payload_format') === PAYLOAD_TYPE_BASE64) {
        encoded_data = _.base64Encode(encoded_data);
    }
    return {'data': encoded_data};
};

// internal method for handling track vs batch-enqueue logic
MixpanelLib.prototype._track_or_batch = function(options, callback) {
    var truncated_data = _.truncate(options.data, 255);
    var endpoint = options.endpoint;
    var batcher = options.batcher;
    var should_send_immediately = options.should_send_immediately;
    var send_request_options = options.send_request_options || {};
    callback = callback || NOOP_FUNC;

    var request_enqueued_or_initiated = true;
    var send_request_immediately = _.bind(function() {
        if (!send_request_options.skip_hooks) {
            truncated_data = this._run_hook('before_send_' + options.type, truncated_data);
        }
        if (truncated_data) {
            console.log('MIXPANEL REQUEST:');
            console.log(truncated_data);
            return this._send_request(
                endpoint,
                this._encode_data_for_request(truncated_data),
                send_request_options,
                this._prepare_callback(callback, truncated_data)
            );
        } else {
            return null;
        }
    }, this);

    if (this._batch_requests && !should_send_immediately) {
        batcher.enqueue(truncated_data, function(succeeded) {
            if (succeeded) {
                callback(1, truncated_data);
            } else {
                send_request_immediately();
            }
        });
    } else {
        request_enqueued_or_initiated = send_request_immediately();
    }

    return request_enqueued_or_initiated && truncated_data;
};

/**
 * Track an event. This is the most important and
 * frequently used Mixpanel function.
 *
 * ### Usage:
 *
 *     // track an event named 'Registered'
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 *     // track an event using navigator.sendBeacon
 *     mixpanel.track('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
 *
 * To track link clicks or form submissions, see track_links() or track_forms().
 *
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Object} [options] Optional configuration for this track request.
 * @param {String} [options.transport] Transport method for network request ('xhr' or 'sendBeacon').
 * @param {Boolean} [options.send_immediately] Whether to bypass batching/queueing and send track request immediately.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 * @returns {Boolean|Object} If the tracking request was successfully initiated/queued, an object
 * with the tracking payload sent to the API server is returned; otherwise false.
 */
MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function(event_name, properties, options, callback) {
    if (!callback && typeof options === 'function') {
        callback = options;
        options = null;
    }
    options = options || {};
    var transport = options['transport']; // external API, don't minify 'transport' prop
    if (transport) {
        options.transport = transport; // 'transport' prop name can be minified internally
    }
    var should_send_immediately = options['send_immediately'];
    if (typeof callback !== 'function') {
        callback = NOOP_FUNC;
    }

    if (_.isUndefined(event_name)) {
        this.report_error('No event name provided to mixpanel.track');
        return;
    }

    if (this._event_is_disabled(event_name)) {
        callback(0);
        return;
    }

    // set defaults
    properties = properties || {};
    properties['token'] = this.get_config('token');

    // set $duration if time_event was previously called for this event
    var start_timestamp = this['persistence'].remove_event_timer(event_name);
    if (!_.isUndefined(start_timestamp)) {
        var duration_in_ms = new Date().getTime() - start_timestamp;
        properties['$duration'] = parseFloat((duration_in_ms / 1000).toFixed(3));
    }

    this._set_default_superprops();

    // note: extend writes to the first object, so lets make sure we
    // don't write to the persistence properties object and info
    // properties object by passing in a new object

    // update properties with pageview info and super-properties
    properties = _.extend(
        {},
        _.info.properties(),
        this['persistence'].properties(),
        this.unpersisted_superprops,
        properties
    );

    var property_blacklist = this.get_config('property_blacklist');
    if (_.isArray(property_blacklist)) {
        _.each(property_blacklist, function(blacklisted_prop) {
            delete properties[blacklisted_prop];
        });
    } else {
        this.report_error('Invalid value for property_blacklist config: ' + property_blacklist);
    }

    var data = {
        'event': event_name,
        'properties': properties
    };
    var ret = this._track_or_batch({
        type: 'events',
        data: data,
        endpoint: this.get_config('api_host') + '/track/',
        batcher: this.request_batchers.events,
        should_send_immediately: should_send_immediately,
        send_request_options: options
    }, callback);

    return ret;
});

/**
 * Register the current user into one/many groups.
 *
 * ### Usage:
 *
 *      mixpanel.set_group('company', ['mixpanel', 'google']) // an array of IDs
 *      mixpanel.set_group('company', 'mixpanel')
 *      mixpanel.set_group('company', 128746312)
 *
 * @param {String} group_key Group key
 * @param {Array|String|Number} group_ids An array of group IDs, or a singular group ID
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 *
 */
MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function(group_key, group_ids, callback) {
    if (!_.isArray(group_ids)) {
        group_ids = [group_ids];
    }
    var prop = {};
    prop[group_key] = group_ids;
    this.register(prop);
    return this['people'].set(group_key, group_ids, callback);
});

/**
 * Add a new group for this user.
 *
 * ### Usage:
 *
 *      mixpanel.add_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_values = this.get_property(group_key);
    if (old_values === undefined) {
        var prop = {};
        prop[group_key] = [group_id];
        this.register(prop);
    } else {
        if (old_values.indexOf(group_id) === -1) {
            old_values.push(group_id);
            this.register(prop);
        }
    }
    return this['people'].union(group_key, group_id, callback);
});

/**
 * Remove a group from this user.
 *
 * ### Usage:
 *
 *      mixpanel.remove_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_value = this.get_property(group_key);
    // if the value doesn't exist, the persistent store is unchanged
    if (old_value !== undefined) {
        var idx = old_value.indexOf(group_id);
        if (idx > -1) {
            old_value.splice(idx, 1);
            this.register({group_key: old_value});
        }
        if (old_value.length === 0) {
            this.unregister(group_key);
        }
    }
    return this['people'].remove(group_key, group_id, callback);
});

/**
 * Track an event with specific groups.
 *
 * ### Usage:
 *
 *      mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
 *
 * @param {String} event_name The name of the event (see `mixpanel.track()`)
 * @param {Object=} properties A set of properties to include with the event you're sending (see `mixpanel.track()`)
 * @param {Object=} groups An object mapping group name keys to one or more values
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function(event_name, properties, groups, callback) {
    var tracking_props = _.extend({}, properties || {});
    _.each(groups, function(v, k) {
        if (v !== null && v !== undefined) {
            tracking_props[k] = v;
        }
    });
    return this.track(event_name, tracking_props, callback);
});

MixpanelLib.prototype._create_map_key = function (group_key, group_id) {
    return group_key + '_' + JSON.stringify(group_id);
};

MixpanelLib.prototype._remove_group_from_cache = function (group_key, group_id) {
    delete this._cached_groups[this._create_map_key(group_key, group_id)];
};

/**
 * Look up reference to a Mixpanel group
 *
 * ### Usage:
 *
 *       mixpanel.get_group(group_key, group_id)
 *
 * @param {String} group_key Group key
 * @param {Object} group_id A valid Mixpanel property type
 * @returns {Object} A MixpanelGroup identifier
 */
MixpanelLib.prototype.get_group = function (group_key, group_id) {
    var map_key = this._create_map_key(group_key, group_id);
    var group = this._cached_groups[map_key];
    if (group === undefined || group._group_key !== group_key || group._group_id !== group_id) {
        group = new MixpanelGroup();
        group._init(this, group_key, group_id);
        this._cached_groups[map_key] = group;
    }
    return group;
};

/**
 * Track mp_page_view event. This is now ignored by the server.
 *
 * @param {String} [page] The url of the page to record. If you don't include this, it defaults to the current url.
 * @deprecated
 */
MixpanelLib.prototype.track_pageview = function(page) {
    if (_.isUndefined(page)) {
        page = document$1.location.href;
    }
    this.track('mp_page_view', _.info.pageviewInfo(page));
};

/**
 * Track clicks on a set of document elements. Selector must be a
 * valid query. Elements must exist on the page at the time track_links is called.
 *
 * ### Usage:
 *
 *     // track click for link id #nav
 *     mixpanel.track_links('#nav', 'Clicked Nav Link');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the Mixpanel
 * servers to respond. If they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
 */
MixpanelLib.prototype.track_links = function() {
    return this._track_dom.call(this, LinkTracker, arguments);
};

/**
 * Track form submissions. Selector must be a valid query.
 *
 * ### Usage:
 *
 *     // track submission for form id 'register'
 *     mixpanel.track_forms('#register', 'Created Account');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the mixpanel
 * servers to respond, if they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
 */
MixpanelLib.prototype.track_forms = function() {
    return this._track_dom.call(this, FormTracker, arguments);
};

/**
 * Time an event by including the time between this call and a
 * later 'track' call for the same event in the properties sent
 * with the event.
 *
 * ### Usage:
 *
 *     // time an event named 'Registered'
 *     mixpanel.time_event('Registered');
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * When called for a particular event name, the next track call for that event
 * name will include the elapsed time between the 'time_event' and 'track'
 * calls. This value is stored as seconds in the '$duration' property.
 *
 * @param {String} event_name The name of the event.
 */
MixpanelLib.prototype.time_event = function(event_name) {
    if (_.isUndefined(event_name)) {
        this.report_error('No event name provided to mixpanel.time_event');
        return;
    }

    if (this._event_is_disabled(event_name)) {
        return;
    }

    this['persistence'].set_event_timer(event_name,  new Date().getTime());
};

var REGISTER_DEFAULTS = {
    'persistent': true
};
/**
 * Helper to parse options param for register methods, maintaining
 * legacy support for plain "days" param instead of options object
 * @param {Number|Object} [days_or_options] 'days' option (Number), or Options object for register methods
 * @returns {Object} options object
 */
var options_for_register = function(days_or_options) {
    var options;
    if (_.isObject(days_or_options)) {
        options = days_or_options;
    } else if (!_.isUndefined(days_or_options)) {
        options = {'days': days_or_options};
    } else {
        options = {};
    }
    return _.extend({}, REGISTER_DEFAULTS, options);
};

/**
 * Register a set of super properties, which are included with all
 * events. This will overwrite previous super property values.
 *
 * ### Usage:
 *
 *     // register 'Gender' as a super property
 *     mixpanel.register({'Gender': 'Female'});
 *
 *     // register several super properties when a user signs up
 *     mixpanel.register({
 *         'Email': 'jdoe@example.com',
 *         'Account Type': 'Free'
 *     });
 *
 *     // register only for the current pageload
 *     mixpanel.register({'Name': 'Pat'}, {persistent: false});
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
 */
MixpanelLib.prototype.register = function(props, days_or_options) {
    var options = options_for_register(days_or_options);
    if (options['persistent']) {
        this['persistence'].register(props, options['days']);
    } else {
        _.extend(this.unpersisted_superprops, props);
    }
};

/**
 * Register a set of super properties only once. This will not
 * overwrite previous super property values, unlike register().
 *
 * ### Usage:
 *
 *     // register a super property for the first time only
 *     mixpanel.register_once({
 *         'First Login Date': new Date().toISOString()
 *     });
 *
 *     // register once, only for the current pageload
 *     mixpanel.register_once({
 *         'First interaction time': new Date().toISOString()
 *     }, 'None', {persistent: false});
 *
 * ### Notes:
 *
 * If default_value is specified, current super properties
 * with that value will be overwritten.
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
 * @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
 * @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
 */
MixpanelLib.prototype.register_once = function(props, default_value, days_or_options) {
    var options = options_for_register(days_or_options);
    if (options['persistent']) {
        this['persistence'].register_once(props, default_value, options['days']);
    } else {
        if (typeof(default_value) === 'undefined') {
            default_value = 'None';
        }
        _.each(props, function(val, prop) {
            if (!this.unpersisted_superprops.hasOwnProperty(prop) || this.unpersisted_superprops[prop] === default_value) {
                this.unpersisted_superprops[prop] = val;
            }
        }, this);
    }
};

/**
 * Delete a super property stored with the current user.
 *
 * @param {String} property The name of the super property to remove
 * @param {Object} [options]
 * @param {boolean} [options.persistent=true] - whether to look in persistent storage (cookie/localStorage)
 */
MixpanelLib.prototype.unregister = function(property, options) {
    options = options_for_register(options);
    if (options['persistent']) {
        this['persistence'].unregister(property);
    } else {
        delete this.unpersisted_superprops[property];
    }
};

MixpanelLib.prototype._register_single = function(prop, value) {
    var props = {};
    props[prop] = value;
    this.register(props);
};

/**
 * Identify a user with a unique ID to track user activity across
 * devices, tie a user to their events, and create a user profile.
 * If you never call this method, unique visitors are tracked using
 * a UUID generated the first time they visit the site.
 *
 * Call identify when you know the identity of the current user,
 * typically after login or signup. We recommend against using
 * identify for anonymous visitors to your site.
 *
 * ### Notes:
 * If your project has
 * <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
 * enabled, the identify method will connect pre- and
 * post-authentication events when appropriate.
 *
 * If your project does not have ID Merge enabled, identify will
 * change the user's local distinct_id to the unique ID you pass.
 * Events tracked prior to authentication will not be connected
 * to the same user identity. If ID Merge is disabled, alias can
 * be used to connect pre- and post-registration events.
 *
 * @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
 */
MixpanelLib.prototype.identify = function(
    new_distinct_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback
) {
    // Optional Parameters
    //  _set_callback:function  A callback to be run if and when the People set queue is flushed
    //  _add_callback:function  A callback to be run if and when the People add queue is flushed
    //  _append_callback:function  A callback to be run if and when the People append queue is flushed
    //  _set_once_callback:function  A callback to be run if and when the People set_once queue is flushed
    //  _union_callback:function  A callback to be run if and when the People union queue is flushed
    //  _unset_callback:function  A callback to be run if and when the People unset queue is flushed

    var previous_distinct_id = this.get_distinct_id();
    this.register({'$user_id': new_distinct_id});

    if (!this.get_property('$device_id')) {
        // The persisted distinct id might not actually be a device id at all
        // it might be a distinct id of the user from before
        var device_id = previous_distinct_id;
        this.register_once({
            '$had_persisted_distinct_id': true,
            '$device_id': device_id
        }, '');
    }

    // identify only changes the distinct id if it doesn't match either the existing or the alias;
    // if it's new, blow away the alias as well.
    if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
        this.unregister(ALIAS_ID_KEY);
        this.register({'distinct_id': new_distinct_id});
    }
    this._flags.identify_called = true;
    // Flush any queued up people requests
    this['people']._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);

    // send an $identify event any time the distinct_id is changing - logic on the server
    // will determine whether or not to do anything with it.
    if (new_distinct_id !== previous_distinct_id) {
        this.track('$identify', {
            'distinct_id': new_distinct_id,
            '$anon_distinct_id': previous_distinct_id
        }, {skip_hooks: true});
    }
};

/**
 * Clears super properties and generates a new random distinct_id for this instance.
 * Useful for clearing data when a user logs out.
 */
MixpanelLib.prototype.reset = function() {
    this['persistence'].clear();
    this._flags.identify_called = false;
    var uuid = _.UUID();
    this.register_once({
        'distinct_id': uuid,
        '$device_id': uuid
    }, '');
};

/**
 * Returns the current distinct id of the user. This is either the id automatically
 * generated by the library or the id that has been passed by a call to identify().
 *
 * ### Notes:
 *
 * get_distinct_id() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // set distinct_id after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             distinct_id = mixpanel.get_distinct_id();
 *         }
 *     });
 */
MixpanelLib.prototype.get_distinct_id = function() {
    return this.get_property('distinct_id');
};

/**
 * The alias method creates an alias which Mixpanel will use to
 * remap one id to another. Multiple aliases can point to the
 * same identifier.
 *
 * The following is a valid use of alias:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // You can add multiple id aliases to the existing ID
 *     mixpanel.alias('newer_id', 'existing_id');
 *
 * Aliases can also be chained - the following is a valid example:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // chain newer_id - new_id - existing_id
 *     mixpanel.alias('newer_id', 'new_id');
 *
 * Aliases cannot point to multiple identifiers - the following
 * example will not work:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     // this is invalid as 'new_id' already points to 'existing_id'
 *     mixpanel.alias('new_id', 'newer_id');
 *
 * ### Notes:
 *
 * If your project does not have
 * <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
 * enabled, the best practice is to call alias once when a unique
 * ID is first created for a user (e.g., when a user first registers
 * for an account). Do not use alias multiple times for a single
 * user without ID Merge enabled.
 *
 * @param {String} alias A unique identifier that you want to use for this user in the future.
 * @param {String} [original] The current identifier being used for this user.
 */
MixpanelLib.prototype.alias = function(alias, original) {
    // If the $people_distinct_id key exists in persistence, there has been a previous
    // mixpanel.people.identify() call made for this user. It is VERY BAD to make an alias with
    // this ID, as it will duplicate users.
    if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
        this.report_error('Attempting to create alias for existing People user - aborting.');
        return -2;
    }

    var _this = this;
    if (_.isUndefined(original)) {
        original = this.get_distinct_id();
    }
    if (alias !== original) {
        this._register_single(ALIAS_ID_KEY, alias);
        return this.track('$create_alias', {
            'alias': alias,
            'distinct_id': original
        }, {
            skip_hooks: true
        }, function() {
            // Flush the people queue
            _this.identify(alias);
        });
    } else {
        this.report_error('alias matches current distinct_id - skipping api call.');
        this.identify(alias);
        return -1;
    }
};

/**
 * Provide a string to recognize the user by. The string passed to
 * this method will appear in the Mixpanel Streams product rather
 * than an automatically generated name. Name tags do not have to
 * be unique.
 *
 * This value will only be included in Streams data.
 *
 * @param {String} name_tag A human readable name for the user
 * @deprecated
 */
MixpanelLib.prototype.name_tag = function(name_tag) {
    this._register_single('mp_name_tag', name_tag);
};

/**
 * Update the configuration of a mixpanel library instance.
 *
 * The default config is:
 *
 *     {
 *       // HTTP method for tracking requests
 *       api_method: 'POST'
 *
 *       // transport for sending requests ('XHR' or 'sendBeacon')
 *       // NB: sendBeacon should only be used for scenarios such as
 *       // page unload where a "best-effort" attempt to send is
 *       // acceptable; the sendBeacon API does not support callbacks
 *       // or any way to know the result of the request. Mixpanel
 *       // tracking via sendBeacon will not support any event-
 *       // batching or retry mechanisms.
 *       api_transport: 'XHR'
 *
 *       // turn on request-batching/queueing/retry
 *       batch_requests: false,
 *
 *       // maximum number of events/updates to send in a single
 *       // network request
 *       batch_size: 50,
 *
 *       // milliseconds to wait between sending batch requests
 *       batch_flush_interval_ms: 5000,
 *
 *       // milliseconds to wait for network responses to batch requests
 *       // before they are considered timed-out and retried
 *       batch_request_timeout_ms: 90000,
 *
 *       // override value for cookie domain, only useful for ensuring
 *       // correct cross-subdomain cookies on unusual domains like
 *       // subdomain.mainsite.avocat.fr; NB this cannot be used to
 *       // set cookies on a different domain than the current origin
 *       cookie_domain: ''
 *
 *       // super properties cookie expiration (in days)
 *       cookie_expiration: 365
 *
 *       // if true, cookie will be set with SameSite=None; Secure
 *       // this is only useful in special situations, like embedded
 *       // 3rd-party iframes that set up a Mixpanel instance
 *       cross_site_cookie: false
 *
 *       // super properties span subdomains
 *       cross_subdomain_cookie: true
 *
 *       // debug mode
 *       debug: false
 *
 *       // if this is true, the mixpanel cookie or localStorage entry
 *       // will be deleted, and no user persistence will take place
 *       disable_persistence: false
 *
 *       // if this is true, Mixpanel will automatically determine
 *       // City, Region and Country data using the IP address of
 *       //the client
 *       ip: true
 *
 *       // opt users out of tracking by this Mixpanel instance by default
 *       opt_out_tracking_by_default: false
 *
 *       // opt users out of browser data storage by this Mixpanel instance by default
 *       opt_out_persistence_by_default: false
 *
 *       // persistence mechanism used by opt-in/opt-out methods - cookie
 *       // or localStorage - falls back to cookie if localStorage is unavailable
 *       opt_out_tracking_persistence_type: 'localStorage'
 *
 *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
 *       opt_out_tracking_cookie_prefix: null
 *
 *       // type of persistent store for super properties (cookie/
 *       // localStorage) if set to 'localStorage', any existing
 *       // mixpanel cookie value with the same persistence_name
 *       // will be transferred to localStorage and deleted
 *       persistence: 'cookie'
 *
 *       // name for super properties persistent store
 *       persistence_name: ''
 *
 *       // names of properties/superproperties which should never
 *       // be sent with track() calls
 *       property_blacklist: []
 *
 *       // if this is true, mixpanel cookies will be marked as
 *       // secure, meaning they will only be transmitted over https
 *       secure_cookie: false
 *
 *       // the amount of time track_links will
 *       // wait for Mixpanel's servers to respond
 *       track_links_timeout: 300
 *
 *       // if you set upgrade to be true, the library will check for
 *       // a cookie from our old js library and import super
 *       // properties from it, then the old cookie is deleted
 *       // The upgrade config option only works in the initialization,
 *       // so make sure you set it when you create the library.
 *       upgrade: false
 *
 *       // extra HTTP request headers to set for each API request, in
 *       // the format {'Header-Name': value}
 *       xhr_headers: {}
 *
 *       // whether to ignore or respect the web browser's Do Not Track setting
 *       ignore_dnt: false
 *     }
 *
 *
 * @param {Object} config A dictionary of new configuration values to update
 */
MixpanelLib.prototype.set_config = function(config) {
    if (_.isObject(config)) {
        _.extend(this['config'], config);

        var new_batch_size = config['batch_size'];
        if (new_batch_size) {
            _.each(this.request_batchers, function(batcher) {
                batcher.resetBatchSize();
            });
        }

        if (!this.get_config('persistence_name')) {
            this['config']['persistence_name'] = this['config']['cookie_name'];
        }
        if (!this.get_config('disable_persistence')) {
            this['config']['disable_persistence'] = this['config']['disable_cookie'];
        }

        if (this['persistence']) {
            this['persistence'].update_config(this['config']);
        }
        Config.DEBUG = Config.DEBUG || this.get_config('debug');
    }
};

/**
 * returns the current config object for the library.
 */
MixpanelLib.prototype.get_config = function(prop_name) {
    return this['config'][prop_name];
};

/**
 * Fetch a hook function from config, with safe default, and run it
 * against the given arguments
 * @param {string} hook_name which hook to retrieve
 * @returns {any|null} return value of user-provided hook, or null if nothing was returned
 */
MixpanelLib.prototype._run_hook = function(hook_name) {
    var ret = (this['config']['hooks'][hook_name] || IDENTITY_FUNC).apply(this, slice.call(arguments, 1));
    if (typeof ret === 'undefined') {
        this.report_error(hook_name + ' hook did not return a value');
        ret = null;
    }
    return ret;
};

/**
 * Returns the value of the super property named property_name. If no such
 * property is set, get_property() will return the undefined value.
 *
 * ### Notes:
 *
 * get_property() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // grab value for 'user_id' after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             user_id = mixpanel.get_property('user_id');
 *         }
 *     });
 *
 * @param {String} property_name The name of the super property you want to retrieve
 */
MixpanelLib.prototype.get_property = function(property_name) {
    return this['persistence']['props'][property_name];
};

MixpanelLib.prototype.toString = function() {
    var name = this.get_config('name');
    if (name !== PRIMARY_INSTANCE_NAME) {
        name = PRIMARY_INSTANCE_NAME + '.' + name;
    }
    return name;
};

MixpanelLib.prototype._event_is_disabled = function(event_name) {
    return _.isBlockedUA(userAgent) ||
        this._flags.disable_all_events ||
        _.include(this.__disabled_events, event_name);
};

// perform some housekeeping around GDPR opt-in/out state
MixpanelLib.prototype._gdpr_init = function() {
    var is_localStorage_requested = this.get_config('opt_out_tracking_persistence_type') === 'localStorage';

    // try to convert opt-in/out cookies to localStorage if possible
    if (is_localStorage_requested && _.localStorage.is_supported()) {
        if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({'persistence_type': 'cookie'})) {
            this.opt_in_tracking({'enable_persistence': false});
        }
        if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({'persistence_type': 'cookie'})) {
            this.opt_out_tracking({'clear_persistence': false});
        }
        this.clear_opt_in_out_tracking({
            'persistence_type': 'cookie',
            'enable_persistence': false
        });
    }

    // check whether the user has already opted out - if so, clear & disable persistence
    if (this.has_opted_out_tracking()) {
        this._gdpr_update_persistence({'clear_persistence': true});

    // check whether we should opt out by default
    // note: we don't clear persistence here by default since opt-out default state is often
    //       used as an initial state while GDPR information is being collected
    } else if (!this.has_opted_in_tracking() && (
        this.get_config('opt_out_tracking_by_default') || _.cookie.get('mp_optout')
    )) {
        _.cookie.remove('mp_optout');
        this.opt_out_tracking({
            'clear_persistence': this.get_config('opt_out_persistence_by_default')
        });
    }
};

/**
 * Enable or disable persistence based on options
 * only enable/disable if persistence is not already in this state
 * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
 * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
 */
MixpanelLib.prototype._gdpr_update_persistence = function(options) {
    var disabled;
    if (options && options['clear_persistence']) {
        disabled = true;
    } else if (options && options['enable_persistence']) {
        disabled = false;
    } else {
        return;
    }

    if (!this.get_config('disable_persistence') && this['persistence'].disabled !== disabled) {
        this['persistence'].set_disabled(disabled);
    }

    if (disabled) {
        _.each(this.request_batchers, function(batcher) {
            batcher.clear();
        });
    }
};

// call a base gdpr function after constructing the appropriate token and options args
MixpanelLib.prototype._gdpr_call_func = function(func, options) {
    options = _.extend({
        'track': _.bind(this.track, this),
        'persistence_type': this.get_config('opt_out_tracking_persistence_type'),
        'cookie_prefix': this.get_config('opt_out_tracking_cookie_prefix'),
        'cookie_expiration': this.get_config('cookie_expiration'),
        'cross_site_cookie': this.get_config('cross_site_cookie'),
        'cross_subdomain_cookie': this.get_config('cross_subdomain_cookie'),
        'cookie_domain': this.get_config('cookie_domain'),
        'secure_cookie': this.get_config('secure_cookie'),
        'ignore_dnt': this.get_config('ignore_dnt')
    }, options);

    // check if localStorage can be used for recording opt out status, fall back to cookie if not
    if (!_.localStorage.is_supported()) {
        options['persistence_type'] = 'cookie';
    }

    return func(this.get_config('token'), {
        track: options['track'],
        trackEventName: options['track_event_name'],
        trackProperties: options['track_properties'],
        persistenceType: options['persistence_type'],
        persistencePrefix: options['cookie_prefix'],
        cookieDomain: options['cookie_domain'],
        cookieExpiration: options['cookie_expiration'],
        crossSiteCookie: options['cross_site_cookie'],
        crossSubdomainCookie: options['cross_subdomain_cookie'],
        secureCookie: options['secure_cookie'],
        ignoreDnt: options['ignore_dnt']
    });
};

/**
 * Opt the user in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user in
 *     mixpanel.opt_in_tracking();
 *
 *     // opt user in with specific event name, properties, cookie configuration
 *     mixpanel.opt_in_tracking({
 *         track_event_name: 'User opted in',
 *         track_event_properties: {
 *             'Email': 'jdoe@example.com'
 *         },
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {function} [options.track] Function used for tracking a Mixpanel event to record the opt-in action (default is this Mixpanel instance's track method)
 * @param {string} [options.track_event_name=$opt_in] Event name to be used for tracking the opt-in action
 * @param {Object} [options.track_properties] Set of properties to be tracked along with the opt-in action
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.opt_in_tracking = function(options) {
    options = _.extend({
        'enable_persistence': true
    }, options);

    this._gdpr_call_func(optIn, options);
    this._gdpr_update_persistence(options);
};

/**
 * Opt the user out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user out
 *     mixpanel.opt_out_tracking();
 *
 *     // opt user out with different cookie configuration from Mixpanel instance
 *     mixpanel.opt_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.delete_user=true] If true, will delete the currently identified user's profile and clear all charges after opting the user out
 * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.opt_out_tracking = function(options) {
    options = _.extend({
        'clear_persistence': true,
        'delete_user': true
    }, options);

    // delete user and clear charges since these methods may be disabled by opt-out
    if (options['delete_user'] && this['people'] && this['people']._identify_called()) {
        this['people'].delete_user();
        this['people'].clear_charges();
    }

    this._gdpr_call_func(optOut, options);
    this._gdpr_update_persistence(options);
};

/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_in = mixpanel.has_opted_in_tracking();
 *     // use has_opted_in value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-in status
 */
MixpanelLib.prototype.has_opted_in_tracking = function(options) {
    return this._gdpr_call_func(hasOptedIn, options);
};

/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_out = mixpanel.has_opted_out_tracking();
 *     // use has_opted_out value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-out status
 */
MixpanelLib.prototype.has_opted_out_tracking = function(options) {
    return this._gdpr_call_func(hasOptedOut, options);
};

/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // clear user's opt-in/out status
 *     mixpanel.clear_opt_in_out_tracking();
 *
 *     // clear user's opt-in/out status with specific cookie configuration - should match
 *     // configuration used when opt_in_tracking/opt_out_tracking methods were called.
 *     mixpanel.clear_opt_in_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.clear_opt_in_out_tracking = function(options) {
    options = _.extend({
        'enable_persistence': true
    }, options);

    this._gdpr_call_func(clearOptInOut, options);
    this._gdpr_update_persistence(options);
};

MixpanelLib.prototype.report_error = function(msg, err) {
    console.error.apply(console.error, arguments);
    try {
        if (!err && !(msg instanceof Error)) {
            msg = new Error(msg);
        }
        this.get_config('error_reporter')(msg, err);
    } catch(err) {
        console.error(err);
    }
};

// EXPORTS (for closure compiler)

// MixpanelLib Exports
MixpanelLib.prototype['init']                               = MixpanelLib.prototype.init;
MixpanelLib.prototype['reset']                              = MixpanelLib.prototype.reset;
MixpanelLib.prototype['disable']                            = MixpanelLib.prototype.disable;
MixpanelLib.prototype['time_event']                         = MixpanelLib.prototype.time_event;
MixpanelLib.prototype['track']                              = MixpanelLib.prototype.track;
MixpanelLib.prototype['track_links']                        = MixpanelLib.prototype.track_links;
MixpanelLib.prototype['track_forms']                        = MixpanelLib.prototype.track_forms;
MixpanelLib.prototype['track_pageview']                     = MixpanelLib.prototype.track_pageview;
MixpanelLib.prototype['register']                           = MixpanelLib.prototype.register;
MixpanelLib.prototype['register_once']                      = MixpanelLib.prototype.register_once;
MixpanelLib.prototype['unregister']                         = MixpanelLib.prototype.unregister;
MixpanelLib.prototype['identify']                           = MixpanelLib.prototype.identify;
MixpanelLib.prototype['alias']                              = MixpanelLib.prototype.alias;
MixpanelLib.prototype['name_tag']                           = MixpanelLib.prototype.name_tag;
MixpanelLib.prototype['set_config']                         = MixpanelLib.prototype.set_config;
MixpanelLib.prototype['get_config']                         = MixpanelLib.prototype.get_config;
MixpanelLib.prototype['get_property']                       = MixpanelLib.prototype.get_property;
MixpanelLib.prototype['get_distinct_id']                    = MixpanelLib.prototype.get_distinct_id;
MixpanelLib.prototype['toString']                           = MixpanelLib.prototype.toString;
MixpanelLib.prototype['opt_out_tracking']                   = MixpanelLib.prototype.opt_out_tracking;
MixpanelLib.prototype['opt_in_tracking']                    = MixpanelLib.prototype.opt_in_tracking;
MixpanelLib.prototype['has_opted_out_tracking']             = MixpanelLib.prototype.has_opted_out_tracking;
MixpanelLib.prototype['has_opted_in_tracking']              = MixpanelLib.prototype.has_opted_in_tracking;
MixpanelLib.prototype['clear_opt_in_out_tracking']          = MixpanelLib.prototype.clear_opt_in_out_tracking;
MixpanelLib.prototype['get_group']                          = MixpanelLib.prototype.get_group;
MixpanelLib.prototype['set_group']                          = MixpanelLib.prototype.set_group;
MixpanelLib.prototype['add_group']                          = MixpanelLib.prototype.add_group;
MixpanelLib.prototype['remove_group']                       = MixpanelLib.prototype.remove_group;
MixpanelLib.prototype['track_with_groups']                  = MixpanelLib.prototype.track_with_groups;
MixpanelLib.prototype['start_batch_senders']                = MixpanelLib.prototype.start_batch_senders;
MixpanelLib.prototype['stop_batch_senders']                 = MixpanelLib.prototype.stop_batch_senders;

// MixpanelPersistence Exports
MixpanelPersistence.prototype['properties']            = MixpanelPersistence.prototype.properties;
MixpanelPersistence.prototype['update_search_keyword'] = MixpanelPersistence.prototype.update_search_keyword;
MixpanelPersistence.prototype['update_referrer_info']  = MixpanelPersistence.prototype.update_referrer_info;
MixpanelPersistence.prototype['get_cross_subdomain']   = MixpanelPersistence.prototype.get_cross_subdomain;
MixpanelPersistence.prototype['clear']                 = MixpanelPersistence.prototype.clear;


var instances = {};
var extend_mp = function() {
    // add all the sub mixpanel instances
    _.each(instances, function(instance, name) {
        if (name !== PRIMARY_INSTANCE_NAME) { mixpanel_master[name] = instance; }
    });

    // add private functions as _
    mixpanel_master['_'] = _;
};

var override_mp_init_func = function() {
    // we override the snippets init function to handle the case where a
    // user initializes the mixpanel library after the script loads & runs
    mixpanel_master['init'] = function(token, config, name) {
        if (name) {
            // initialize a sub library
            if (!mixpanel_master[name]) {
                mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
                mixpanel_master[name]._loaded();
            }
            return mixpanel_master[name];
        } else {
            var instance = mixpanel_master;

            if (instances[PRIMARY_INSTANCE_NAME]) {
                // main mixpanel lib already initialized
                instance = instances[PRIMARY_INSTANCE_NAME];
            } else if (token) {
                // intialize the main mixpanel lib
                instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
                instance._loaded();
                instances[PRIMARY_INSTANCE_NAME] = instance;
            }

            mixpanel_master = instance;
            if (init_type === INIT_SNIPPET) {
                window$1[PRIMARY_INSTANCE_NAME] = mixpanel_master;
            }
            extend_mp();
        }
    };
};

var add_dom_loaded_handler = function() {
    // Cross browser DOM Loaded support
    function dom_loaded_handler() {
        // function flag since we only want to execute this once
        if (dom_loaded_handler.done) { return; }
        dom_loaded_handler.done = true;

        DOM_LOADED = true;
        ENQUEUE_REQUESTS = false;

        _.each(instances, function(inst) {
            inst._dom_loaded();
        });
    }

    function do_scroll_check() {
        try {
            document$1.documentElement.doScroll('left');
        } catch(e) {
            setTimeout(do_scroll_check, 1);
            return;
        }

        dom_loaded_handler();
    }

    if (document$1.addEventListener) {
        if (document$1.readyState === 'complete') {
            // safari 4 can fire the DOMContentLoaded event before loading all
            // external JS (including this file). you will see some copypasta
            // on the internet that checks for 'complete' and 'loaded', but
            // 'loaded' is an IE thing
            dom_loaded_handler();
        } else {
            document$1.addEventListener('DOMContentLoaded', dom_loaded_handler, false);
        }
    } else if (document$1.attachEvent) {
        // IE
        document$1.attachEvent('onreadystatechange', dom_loaded_handler);

        // check to make sure we arn't in a frame
        var toplevel = false;
        try {
            toplevel = window$1.frameElement === null;
        } catch(e) {
            // noop
        }

        if (document$1.documentElement.doScroll && toplevel) {
            do_scroll_check();
        }
    }

    // fallback handler, always will work
    _.register_event(window$1, 'load', dom_loaded_handler, true);
};

function init_as_module() {
    init_type = INIT_MODULE;
    mixpanel_master = new MixpanelLib();

    override_mp_init_func();
    mixpanel_master['init']();
    add_dom_loaded_handler();

    return mixpanel_master;
}

var mixpanel = init_as_module();

module.exports = mixpanel;

/***/ }),

/***/ 365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XHR = exports.xfetch = exports.setPlaylist = exports.fetch = exports.parse = exports.requestSW = exports.torrent = void 0;
const config_1 = __importDefault(__webpack_require__(248));
const parse_1 = __importStar(__webpack_require__(903));
exports.parse = parse_1.default;
const util = __importStar(__webpack_require__(905));
const fetch_1 = __importDefault(__webpack_require__(814));
const buffer_1 = __webpack_require__(764);
const torrent_1 = __importDefault(__webpack_require__(278));
config_1.default.mode = "js";
const stats_1 = __importDefault(__webpack_require__(674));
const requestsw_1 = __importDefault(__webpack_require__(832));
const requestSW = new requestsw_1.default();
exports.requestSW = requestSW;
const torrent = new torrent_1.default(undefined);
exports.torrent = torrent;
async function fetch0(url, options) {
    return new Promise(async (resolve, reject) => {
        let isCallback = false;
        let pid = setTimeout(() => {
            let response = new Response(undefined, { status: 500, statusText: "500" });
            resolve(response);
        }, 30 * 1000);
        (0, fetch_1.default)(url, options)
            .then((res) => {
            if (torrent.isSupports()) {
                if ([200, 206].includes(res.status)) {
                    isCallback = true;
                    clearTimeout(pid);
                    resolve(res);
                }
            }
            else {
                clearTimeout(pid);
                resolve(res);
            }
        })
            .catch((err) => {
            if (!torrent.isSupports()) {
                clearTimeout(pid);
                reject(err);
            }
        });
        const fetchx = () => {
            let xsocket = torrent.attach.getRandomPeer();
            xsocket === null || xsocket === void 0 ? void 0 : xsocket.request("/fetch", Object.assign({ url: url, timeout: 5000 }, options), (res) => {
                if (res && [200, 206].includes(res === null || res === void 0 ? void 0 : res.status)) {
                    isCallback = true;
                    clearTimeout(pid);
                    let response = new Response(res.data, { status: res.status, statusText: res.statusText, headers: res.headers });
                    resolve(response);
                }
            });
            isCallback || setTimeout(() => fetchx(), 3000);
        };
        if (torrent.open) {
            fetchx();
        }
        else {
            torrent.once("open", () => fetchx());
        }
    });
}
exports.fetch = fetch0;
window.addEventListener("load", (res) => {
    if (window === window.top) {
        stats_1.default.open({ source: "office" });
    }
});
let settings = {
    switch: true,
    isVideo: false,
};
window.addEventListener("DOMContentLoaded", (ev) => {
    let start = Date.now();
    let pid = setInterval(() => {
        if (Date.now() - start >= 20 * 1000)
            return clearInterval(pid);
        settings.isVideo = !!document.querySelector("video");
        if (settings.isVideo)
            clearInterval(pid);
    }, 100);
});
let originalFetch = fetch_1.default;
let originOpen = XMLHttpRequest.prototype.open;
let originSend = XMLHttpRequest.prototype.send;
let playList = new Set();
function setPlaylist(urls, playlistUrl) {
    playList = new Set(urls);
    torrent.setPlayList(urls, playlistUrl);
}
exports.setPlaylist = setPlaylist;
window.addEventListener("message", (event) => {
    var _a;
    let reqInfo = event.data;
    let data = reqInfo.data || {};
    let sid = reqInfo.sid;
    switch (reqInfo.router) {
        case "ivideos.setPlaylist":
            let urls = data.urls || [];
            setPlaylist(urls, data.playlistUrl);
        case "ivideos.info":
            let refer = document.referrer || "";
            let sdata = {
                title: "",
                url: ((_a = location.href) === null || _a === void 0 ? void 0 : _a.trim()) || "",
                refer: refer,
                deviceId: "",
                create: true,
            };
            let info = new URL(sdata.url);
            let id = info.searchParams.has("id") ? info.searchParams.get("id") || "" : "";
            let isUnique = id.trim().length >= 3 || /\/[a-z0-9_-]{1,}\/[a-z0-9_-]{5,}/i.test(info.pathname);
            if (id) {
                let parts = [];
                info.searchParams.forEach((val, key) => !["t", "time", "timestamp"].includes(key) && parts.push(val));
                sdata.url = info.origin + `/v/${parts.join("-")}.html`;
            }
            else if (/player/i.test(info.pathname)) {
                isUnique = false;
            }
            if (/(播放器)|(player)/i.test(sdata.title)) {
                isUnique = false;
            }
            if (window === window.top) {
                isUnique = true;
            }
            setTimeout(() => {
                var _a, _b;
                let title = ((_a = document.querySelector("meta[property='og:title']")) === null || _a === void 0 ? void 0 : _a.getAttribute("content")) || ((_b = document.title) === null || _b === void 0 ? void 0 : _b.trim()) || "";
                sdata.title = title || "";
                if (sdata.title && isUnique && /^https?/i.test(sdata.url)) {
                    postMessage({ cmd: "ivideos.response", sid: sid, data: sdata }, "/");
                }
            }, 200);
            break;
    }
});
function checkRequestHeader(headers) {
    if (headers["range"])
        return false;
    if (typeof headers.get == "function") {
        if (headers.get("range"))
            return false;
    }
    return true;
}
function isIntercept(url, method, contentType) {
    try {
        method = (method === null || method === void 0 ? void 0 : method.trim()) || "";
        let su = url;
        if (su instanceof globalThis.Request)
            url = su.url;
        url = /^\/\//.test(url) ? location.protocol + url : url;
        let suffix = util.suffix(url);
        let ok = playList.has(url);
        ok = ok || config_1.default.videoChunkSuffix.includes(suffix);
        if (playList.size > 0 && !playList.has(url)) {
            return false;
        }
        if (ok)
            return true;
        let info = new URL(url);
        if (!/^GET$/i.test(method))
            return false;
        if (/googlevideo\.com/i.test(info.hostname))
            return false;
        if (contentType)
            return /(video|image|octet-stream)/i.test(contentType);
        if (/\/api\//i.test(url))
            return false;
        if (settings.isVideo && playList.size < 1)
            return ["png", "jpg", "jpeg"].includes(suffix);
    }
    catch (err) {
        console.warn("isIntercept", err, url);
    }
    return false;
}
async function xfetch(...args) {
    var _a, _b;
    if (!settings.switch)
        return originalFetch.bind(globalThis)(...args);
    let request = args[0];
    let isRequest = request instanceof globalThis.Request;
    let url = isRequest ? request === null || request === void 0 ? void 0 : request.url : request === null || request === void 0 ? void 0 : request.toString();
    if (!isRequest)
        request = args[1];
    let method = (request === null || request === void 0 ? void 0 : request.method) || "GET";
    url = util.urlPatch(url);
    let options = Object.assign({ responseType: "arraybuffer" }, args[1]);
    let contentType = "";
    if (typeof ((_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a.get) == "function")
        contentType = ((_b = request === null || request === void 0 ? void 0 : request.headers) === null || _b === void 0 ? void 0 : _b.get("content-type")) || "";
    let is = isIntercept(url, method, contentType);
    if (is)
        is = checkRequestHeader((request === null || request === void 0 ? void 0 : request.headers) || {});
    if (!is) {
        torrent.setLastChunkIndex(url);
        let response = isRequest ? await originalFetch(request) : await originalFetch(url, options);
        if ((0, parse_1.mayHandlePlaylist)(url, response.headers.get("content-type") || "")) {
            let text = await response
                .clone()
                .text()
                .catch((e) => "");
            let urls = parse_1.default.parse(url, text);
            if (urls.length > 1) {
                playList = new Set(urls);
                console.info("m1 playurls", url, urls.length);
                setPlaylist(urls, url);
            }
        }
        return response;
    }
    return new Promise((resolve) => {
        torrent.getChunk(url).then(async (res) => {
            if (res) {
                let resData = res;
                resData = buffer_1.Buffer.isBuffer(res) ? res : buffer_1.Buffer.from(res);
                let length = resData.byteLength || resData.length;
                if (resData && length > 0) {
                    let response = new Response(resData, {
                        headers: {},
                        status: 200,
                        statusText: "OK",
                    });
                    Object.defineProperties(response, {
                        url: {
                            value: url,
                        },
                    });
                    return resolve(response);
                }
            }
            let response = isRequest ? await fetch0(request.url, request) : await fetch0(url, options);
            let contentType = response.headers.get("content-type") || "";
            isIntercept(url, method, contentType)
                ? response
                    .clone()
                    .arrayBuffer()
                    .then((data) => torrent.seed(url, buffer_1.Buffer.from(data)))
                : undefined;
            resolve(response);
        });
    });
}
exports.xfetch = xfetch;
class XHR extends XMLHttpRequest {
    constructor() {
        super();
        this.method = "GET";
        this.headers = {};
        let isUse = false;
        const handle = async (e) => {
            let url = this.url;
            isUse = true;
            let data = this.response;
            let contentType = this.getResponseHeader("content-type") || "";
            if (data === undefined || data === null)
                return;
            if ((0, parse_1.mayHandlePlaylist)(url, contentType)) {
                let urls = parse_1.default.parse(url, buffer_1.Buffer.from(data).toString());
                if (urls.length > 0) {
                    playList = new Set(urls);
                    console.info("m2 playurls", url, urls.length);
                    setPlaylist(urls, url);
                }
            }
            else if (isIntercept(url, this.method, contentType)) {
                if (this.responseType == "arraybuffer")
                    data = data.slice(0);
                torrent.seed(url, buffer_1.Buffer.from(data));
            }
            else {
            }
        };
        this.addEventListener("load", (e) => {
            if (isUse)
                return;
            handle(e);
        });
        this.addEventListener("readystatechange", (e) => {
            if (isUse)
                return;
            if (this.readyState == 4) {
                handle(e);
            }
        });
        const resetDl = async () => {
            if (isIntercept(this.url, this.method)) {
            }
        };
        this.addEventListener("timeout", resetDl);
        this.addEventListener("abort", resetDl);
    }
    setRequestHeader(name, value) {
        name = name.toLowerCase();
        this.headers[name] = value;
        super.setRequestHeader(name, value);
    }
    open(method, url) {
        url = util.urlPatch(url);
        this.method = method || "GET";
        this.url = url;
        originOpen.bind(this)(method, url);
        return this;
    }
    async send(data) {
        if (!settings.switch)
            return originSend.bind(this)(data);
        let url = this.url;
        let is = isIntercept(url, this.method);
        if (is)
            is = checkRequestHeader(this.headers);
        if (is) {
            torrent.setLastChunkIndex(url);
            torrent.getChunk(url).then(async (res) => {
                if (res) {
                    let resData = res;
                    resData = buffer_1.Buffer.isBuffer(res) ? res : buffer_1.Buffer.from(res);
                    let length = resData.byteLength || resData.length;
                    if (this.responseType == "arraybuffer") {
                        resData = buffer_1.Buffer.from(resData).buffer;
                    }
                    if (resData && length > 0) {
                        this.writeResponse(resData);
                    }
                    else {
                        let xres = await fetch0(url, {}).then((res) => res.arrayBuffer());
                        this.writeResponse(xres);
                    }
                }
                else {
                    let xres = await fetch0(url, {}).then((res) => res.arrayBuffer());
                    this.writeResponse(xres);
                }
            });
        }
        else {
            originSend.bind(this)(data);
        }
    }
    writeResponse(v) {
        Object.defineProperties(this, {
            readyState: {
                value: 4,
                enumerable: true,
            },
            response: {
                value: v,
            },
            responseText: {
                value: v,
            },
            status: {
                value: 200,
            },
            statusText: {
                value: "OK",
            },
        });
        let event = new Event("readystatechange");
        let eventLoad = new Event("load");
        const evs = {
            target: {
                value: this,
                enumerable: true,
            },
            returnValue: {
                value: true,
                enumerable: true,
            },
            srcElement: {
                value: this,
                enumerable: true,
            },
        };
        Object.defineProperties(eventLoad, evs);
        Object.defineProperties(event, evs);
        setTimeout(() => {
            this.dispatchEvent(event);
            this.dispatchEvent(eventLoad);
        }, 100);
    }
}
exports.XHR = XHR;
try {
    Object.defineProperty(window, "XMLHttpRequest", {
        value: XHR,
    });
    Object.defineProperty(window, "fetch", {
        value: xfetch,
    });
}
catch (err) {
    console.error("=====define error", err);
}


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const isProd = "production" == "production";
const env = {"NODE_ENV":"production","appVersion":"1.4.7"} || {};
const appVersion = env.appVersion || "";
exports["default"] = {
    appVersion: appVersion,
    isProd,
    mode: "plugin",
    logLevel: isProd ? 2 : 4,
    videoChunkSuffix: ["ts", "m4s", "mp4"],
    videoListSuffix: ["m3u8"],
    serverUrl: "https://api.ivideos.one",
    mixpanelToken: "17bbce2e5b921333cec9ae737232b638",
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
            ],
        },
        {
            urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"],
            username: "peerjs",
            credential: "peerjsp",
            ip: ""
        },
    ],
    daemon: isProd,
    icePasswordSecret: "C5TwyHpWu3DV/++xLsfSR2yQWEMhg6pXmNoRnvnL1y2bGd83v9gwpHG3M+yXAYxdsIhkIywmfWnqKh5ulQBV9kvJ9WEE85/00RhZe0hrQLrBBlAMOLOygLlFTSd2lv15BT+ixdzZDynowzIbahOmh73MSZqtZgjbT7aNJDuEgrW+KzT38aBz4VR/q1K8F1/4jy8QkrhiB+k14mPTrvyZFqVTckSLHI7+bdBBOc/73jo2wJPdocZbyiVlZ6xOzYUK1ORCd8IVYM7u53jm8h2BfK+0xChMqZFcaG9KihI9H9bj+kanhu2oPHSJnRognHVRDgMJXj6jMeDrWgIN5SIUfg==",
};


/***/ }),

/***/ 832:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const util = __importStar(__webpack_require__(905));
class Request {
    constructor() {
        this.tasks = new Map();
        let tasks = this.tasks;
        window.addEventListener("message", (event) => {
            let data = event.data;
            if (data.cmd == "ivideos.response") {
                let sid = data.sid;
                let handle = tasks.get(sid);
                tasks.delete(sid);
                handle && handle(data.data);
            }
        });
    }
    request(router, data, callback) {
        let tasks = this.tasks;
        let sid = util.buildSN(12);
        if (callback) {
            tasks.set(sid, (data) => {
                tasks.delete(sid);
                callback && callback(data);
            });
        }
        let refer = location.href.replace(/[#].*$/, "");
        postMessage({ sid: sid, router: router, data: data, headers: { refer } }, "/");
    }
}
exports["default"] = Request;


/***/ }),

/***/ 989:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __importDefault(__webpack_require__(248));
const util = __importStar(__webpack_require__(905));
const fetch_1 = __importDefault(__webpack_require__(814));
const buffer_1 = __webpack_require__(764);
const cipher_1 = __importDefault(__webpack_require__(596));
const msg_1 = __importDefault(__webpack_require__(344));
const stats_1 = __importDefault(__webpack_require__(674));
let deviceInfo = { deviceId: "" };
const chrome_1 = __importDefault(__webpack_require__(90));
setTimeout(() => {
    msg_1.default.getDeviceInfo((res) => {
        Object.assign(deviceInfo, res);
    });
}, 500);
const cipherPassword = cipher_1.default.createCipher(config_1.default.icePasswordSecret);
const Cache = {
    get: (key) => {
        try {
            let res = JSON.parse(localStorage.getItem(key) || "{}");
            if (res.start + res.ttl * 1000 < Date.now()) {
                localStorage.removeItem(key);
            }
            return res.value;
        }
        catch (err) {
            return undefined;
        }
    },
    set: (key, value, ttl = 60) => {
        try {
            localStorage.setItem(key, JSON.stringify({ value: value, start: Date.now(), ttl: ttl }));
        }
        catch (err) { }
    },
};
class Api {
    constructor() {
        this.routers = [];
    }
    add(xsocket) {
        if (!/^(0000)/i.test(xsocket.id))
            return;
        if (!!this.routers.find((x) => x.isSame(xsocket)))
            return;
        xsocket.once("close", () => {
            let idx = this.routers.findIndex((x) => x.isSame(xsocket));
            this.routers.splice(idx, 1);
        });
        this.routers.push(xsocket);
    }
    del(id) {
        let idx = this.routers.findIndex((x) => x.id == id);
        this.routers.splice(idx, 1);
    }
    async getIceServers() {
        var _a;
        let url = config_1.default.serverUrl + "/api/ice";
        let res = await reqeustOr(url, { timeout: 7000, responseType: "json", method: "get", headers: {} }, this.routers);
        let response = {
            list: config_1.default.iceServers,
        };
        if (res.code == 200) {
            let list = ((_a = res.data) === null || _a === void 0 ? void 0 : _a.list) || [];
            list.forEach((item) => {
                if (item.credential) {
                    item.credential = cipherPassword.decode(buffer_1.Buffer.from(item.credential, "base64"), 37).toString();
                }
            });
            config_1.default.logLevel >= 3 && console.info("ice list", list);
            response.list = list.length > 0 ? list : config_1.default.iceServers;
            stats_1.default.ip = res.ip;
        }
        return response;
    }
    async loadPeers(router) {
        router.request("/fetch", { url: config_1.default.serverUrl + "/api/m/0", method: "GET", timeout: 5000 }, (res) => {
            if (res != undefined && res.status == 200) {
                let data = res.data || {};
                let attachs = data.attachs || [];
                attachs = attachs.filter((v) => /^0000/.test(v));
                if (attachs && attachs.length > 0) {
                    Cache.set("peers", { attachs: attachs }, 30 * 24 * 60 * 60);
                }
            }
        });
    }
    async getMedia(mediaId) {
        let url = config_1.default.serverUrl + "/api/m/" + mediaId;
        let res = await reqeustOr(url, { responseType: "json", method: "get" }, this.routers);
        let attachs = [];
        let ip = "";
        if (res.code == 200) {
            let data = res.data || {};
            ip = data.ip || "";
            let attachs = data.attachs || [];
            Cache.set("peers", { attachs: attachs.filter((v) => /^0000/.test(v)) }, 30 * 24 * 60 * 60);
            return {
                list: data.list || [],
                attachs: attachs,
                ip: ip,
            };
        }
        else {
            attachs = Cache.get("peers") || [];
        }
        return {
            list: [],
            attachs: attachs,
            ip: ip,
        };
    }
    async register(data, callback) {
        if (data.mid) {
            let res = await reqeustOr(config_1.default.serverUrl + "/api/m", {
                responseType: "json",
                method: "post",
                headers: {
                    "content-type": "application/json",
                    deviceId: deviceInfo.deviceId,
                },
                body: JSON.stringify(data),
            }, this.routers);
            callback && callback(res);
        }
        else {
            let res = await reqeustOr(config_1.default.serverUrl + "/api/p", {
                responseType: "json",
                method: "post",
                headers: {
                    "content-type": "application/json",
                    deviceId: deviceInfo.deviceId,
                },
                body: JSON.stringify(data),
            }, this.routers);
            callback && callback(res);
        }
    }
    unRegister(peerId) {
        reqeustOr(config_1.default.serverUrl + "/api/p/" + peerId, { method: "delete" }, this.routers);
    }
}
function buildBatchCMD(xsockets, handle) {
    let list = [];
    let ns = xsockets.filter((x) => x.open);
    let xsocket = ns[Math.floor(Math.random() * ns.length)];
    list.push(new Promise((resolve) => handle(xsocket, (res) => resolve(res))));
    return list;
}
async function reqeustOr(url, options, xsockets) {
    let res;
    let isCallback = false;
    options.responseType = options.responseType || "json";
    options.headers = Object.assign({}, options.headers, { appVersion: config_1.default.appVersion });
    options.headers["deviceId"] = deviceInfo.deviceId;
    return new Promise((resolve) => {
        let pid = setTimeout(async () => {
            if ((res === null || res === void 0 ? void 0 : res.status) != 200) {
                let list = buildBatchCMD(xsockets, (xsocket, callback) => {
                    let data = res.status && res.data && res.headers ? res.data : res;
                    xsocket.request("/fetch", Object.assign(Object.assign({}, options), { url }), (res) => {
                        res != undefined && res.status == 200 && callback(data);
                    });
                });
                list.push((0, fetch_1.default)(url, options)
                    .then((res) => (res.status == 200 ? res.json() : undefined))
                    .then((res) => {
                    return res ? { data: res } : undefined;
                }));
                res = await util.racePromise(list);
                if (!isCallback) {
                    isCallback = true;
                    resolve(res === null || res === void 0 ? void 0 : res.data);
                }
            }
        }, util.inContext() ? 8 * 1000 : 100);
        if (util.inContext()) {
            const request2host = (url, options) => {
                return new Promise((resolve) => {
                    requestBybg(url, Object.assign({}, options)).then(async (res) => {
                        if (!res || res.status != 200)
                            return resolve(undefined);
                        clearTimeout(pid);
                        if (!isCallback) {
                            isCallback = true;
                            res = res.data || {};
                            resolve(res);
                        }
                    });
                });
            };
            request2host(url, Object.assign({ timeout: 4 * 1000 }, options)).then((res) => {
                if (res)
                    return resolve(res);
                let nurl = url.replace(config_1.default.serverUrl, "ht" + "tps" + "://" + "iv" + "." + "ie" + "e" + "." + "o" + "ne");
                request2host(nurl, Object.assign({ timeout: 4 * 1000 }, options)).then((res) => {
                    if (res)
                        resolve(res);
                });
            });
        }
    });
}
async function requestBybg(url, options) {
    return new Promise((resolve) => {
        var _a;
        (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage({
            router: "/fetch",
            data: Object.assign(Object.assign({ timeout: 60 * 1000 }, options), { url: url }),
        }, (res) => resolve(res));
    });
}
const api = new Api();
exports["default"] = api;


/***/ }),

/***/ 260:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(764)["Buffer"];

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const utils = __importStar(__webpack_require__(905));
const store_1 = __importDefault(__webpack_require__(86));
let console = utils.logger;
const chrome_1 = __importDefault(__webpack_require__(90));
const config_1 = __importDefault(__webpack_require__(248));
class Attach extends eventemitter3_1.default {
    constructor() {
        super();
        this.chunkIds = [];
        this.chunkUrls = [];
        this.loadeds = [];
        this.sorts = new Map();
        this.limit = 32;
        this.isReady = false;
        this.overQueue = [];
        this.peersMap = new Map();
        this.peers = [];
        this.seedLastChunkIndex = 0;
        this.receives = new Map();
        this._receiveChunkCount = 0;
        this.requestPool = new Map();
        this.on("peer", (router) => {
            if (this.overQueue.length > 0) {
                this.overQueue.forEach((url) => {
                    this.requestRange(url, 0, this.limit);
                });
            }
            this.requestRange(this.chunkUrls[this.receiveChunkCount], 0, this.limit);
        });
        this.on("receive", ({ peerId }) => {
            this._receiveChunkCount++;
            let peerReceive = this.receives.get(peerId) || 0;
            this.receives.set(peerId, ++peerReceive);
        });
        this.once("ready", () => {
            this.requestFromAllPeer(this.chunkUrls[0], 3);
        });
        window.addEventListener("resize", () => {
            if (this.canvas) {
                let v = document.querySelector("video");
                if (v) {
                    this.canvas.style.visibility = "visible";
                    this.canvas.width = Math.floor(v.offsetWidth * 0.96);
                    this.canvas.style.left = Math.ceil(v.offsetWidth * 0.02) + "px";
                    this.drawProcess(-1, this.seedLastChunkIndex);
                }
            }
        });
        this.on("seed", ({ index }) => {
            this.drawProcess(index, this.seedLastChunkIndex);
        });
        this.once("showProcess", (total) => {
            this.showProcess(total);
        });
    }
    setPlaylist(url) {
        this.playlist = url;
    }
    get hasPlaylist() {
        return this.chunkUrls.length > 0 && /^(http|blob)/i.test(this.playlist);
    }
    get receiveChunkCount() {
        return this._receiveChunkCount;
    }
    init(chunkUrls) {
        var _a;
        if (chunkUrls.length < 2)
            return;
        if (this.hasPlaylist)
            return;
        if (utils.inContext()) {
            (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.onMessage.addListener((event) => {
                let reqInfo = event.data;
                if (!reqInfo)
                    return;
                let data = reqInfo.data;
                switch (reqInfo.cmd) {
                    case "ivideos.loadChunk":
                        let url = data.url;
                        this.requestRange(url, 0, this.limit);
                        break;
                }
            });
        }
        this.chunkUrls = chunkUrls;
        this.chunkIds = [];
        this.sorts.clear();
        console.info("set playlist", chunkUrls.length);
        chunkUrls.forEach((url, idx) => {
            let id = utils.buildChunkId(url);
            this.chunkIds.push(id);
            this.sorts.set(id, idx);
            this.loadeds[idx] = 0;
        });
        store_1.default.setPlaylist(this.chunkIds);
        setTimeout(() => this.emit("showProcess", chunkUrls.length), 1000);
    }
    setMedia(mid) {
        this.mid = mid;
    }
    setLimit(limit = 32) {
        limit = typeof limit == "number" ? limit : 32;
        limit = Math.ceil(limit < 1 ? 1 : limit);
        this.limit = limit;
    }
    showLog({ prefix, index, ttl, peerId, chunkId, name, length }) {
        let peerReceiveCount = this.receives.get(peerId) || 0;
        let absPercent = Math.round((peerReceiveCount * 100) / this.chunkIds.length);
        let relatePercent = Math.round((peerReceiveCount * 100) / this.receiveChunkCount);
        let allPercent = Math.round((this.receiveChunkCount * 100) / this.chunkIds.length);
        absPercent = Math.min(97, absPercent);
        relatePercent = Math.min(97, relatePercent);
        allPercent = Math.min(97, allPercent);
        console.debug(`${prefix} ${this.receiveChunkCount} cur=${this.seedLastChunkIndex} idx=${index} ${utils.formatSize(length)} total=${this.chunkIds.length} ${name} ${chunkId} from=${peerId} ${relatePercent}-${absPercent}-${allPercent}% ${utils.formatTTL(ttl)}`);
    }
    async hasChunk(chunkId) {
        chunkId = utils.buildChunkId(chunkId);
        return store_1.default.has(chunkId);
    }
    hasChunkId(chunkId) {
        return this.sorts.has(chunkId);
    }
    hasPeer(uuid) {
        return this.peersMap.has(uuid);
    }
    hasSamePeer(peerId) {
        for (let router of this.peers)
            if ((router === null || router === void 0 ? void 0 : router.id) == peerId)
                return true;
        return false;
    }
    inIndex(chunkId) {
        let index = this.sorts.get(chunkId);
        index = index == undefined ? -1 : index;
        return index;
    }
    destroy() {
        this.chunkIds = [];
        this.chunkUrls = [];
        this.sorts.clear();
        this.requestPool.clear();
        this.peersMap.clear();
        this.peers.forEach((node) => node === null || node === void 0 ? void 0 : node.destroy());
    }
    addPeer(router) {
        var _a;
        let uuid = router.uuid;
        this.peersMap.set(uuid, router);
        let idx = this.peers.findIndex((r) => (r === null || r === void 0 ? void 0 : r.uuid) == uuid);
        idx >= 0 && this.peers.splice(idx, 1);
        this.peers.push(router);
        (_a = router.socket) === null || _a === void 0 ? void 0 : _a.once("close", () => {
            this.peersMap.delete(router.uuid);
            let idx = this.peers.findIndex((r) => r.uuid == uuid);
            idx >= 0 && this.peers.splice(idx, 1);
            this.requestPool.forEach((v, key) => {
                if (uuid.includes(v))
                    this.requestPool.delete(key);
            });
        });
        this.emit("peer", router);
    }
    async requestPlaylist(url, callback) {
        let list = [];
        let pid = setTimeout(() => callback(""), 7000);
        list.push(...this.peers
            .filter((v) => v.open)
            .map((router) => {
            return new Promise((resolve) => {
                router.request("/fetch", { url: url, timeout: 6 * 1000 }, (res) => {
                    if (!res || ![200, 206].includes(res.status))
                        return;
                    clearTimeout(pid);
                    let data = Buffer.from(res.data);
                    resolve(data.toString());
                });
            });
        }));
        let text = await Promise.race(list);
        callback(text);
    }
    setDownloading(chunkId, id, ttl = 5 * 1000) {
        this.requestPool.set(chunkId, id || "");
        let pid = setTimeout(() => this.requestPool.delete(chunkId), ttl + 300);
        return pid;
    }
    hasDownloading(chunkId) {
        return this.requestPool.has(chunkId);
    }
    async requestChunkIds(chunkIds, router) {
        var _a;
        if (!router || !this.mid)
            return;
        for (let chunkId of chunkIds) {
            if (this.hasDownloading(chunkId))
                return;
            if (this.inBefore(chunkId))
                continue;
            let pid = this.setDownloading(chunkId, router === null || router === void 0 ? void 0 : router.uuid, 6 * 1000);
            let has = await this.hasChunk(chunkId);
            if (has) {
                this.requestPool.delete(chunkId);
                continue;
            }
            let peerId = router.id;
            let startTime = Date.now();
            let res = await (router === null || router === void 0 ? void 0 : router.request("/m/chunk", { chunkId: chunkId, mid: this.mid }));
            this.requestPool.delete(chunkId);
            let length = (res === null || res === void 0 ? void 0 : res.byteLength) || (res === null || res === void 0 ? void 0 : res.length);
            clearTimeout(pid);
            if (typeof length != "number" || length < 1)
                return;
            let seedOK = await this.seed(chunkId, res);
            if (!seedOK)
                return;
            let idx = this.inIndex(chunkId);
            let name = ((_a = this.chunkUrls[idx]) === null || _a === void 0 ? void 0 : _a.replace(/.*\//g, "")) || chunkId;
            this.emit("receive", { peerId });
            let ttl = Date.now() - startTime;
            this.showLog({ prefix: "x0", index: idx, peerId, ttl, chunkId, name, length });
        }
    }
    requestFromAllPeer(url, limit = 3) {
        let idx = this.chunkUrls.findIndex((v) => v == url);
        let urls = this.chunkUrls.slice(idx, idx + limit);
        let ps = this.peers.filter((v) => v.open);
        urls.forEach((url0, ai) => {
            let cid = utils.buildChunkId(url0);
            if (ps.length < 1)
                this.overQueue.push(url0);
            ps.forEach(async (router, bi) => {
                if (!(router === null || router === void 0 ? void 0 : router.open))
                    return;
                if (ps.length > 3 && ai % 3 == bi % 3)
                    return;
                let has = await this.hasChunk(cid);
                if (has)
                    return;
                let startTime = Date.now();
                let peerId = router.id;
                router === null || router === void 0 ? void 0 : router.request("/fetch", { url: url0, mid: this.mid, timeout: 5 * 1000, headers: { "user-agent": navigator.userAgent } }, async (res) => {
                    try {
                        this.requestPool.delete(cid);
                        if (!res)
                            return;
                        let data = res.status && res.data && res.headers ? res.data : res;
                        let length = (data === null || data === void 0 ? void 0 : data.byteLength) || (data === null || data === void 0 ? void 0 : data.length);
                        if (typeof length != "number" || length < 1)
                            return;
                        let headers = res.headers || {};
                        if (headers["content-range"])
                            return;
                        let has = await this.hasChunk(cid);
                        let seedOK = await this.seed(cid, data).catch((err) => { });
                        if (has || !seedOK)
                            return;
                        this.emit("receive", { peerId: router.id });
                        let ttl = Date.now() - startTime;
                        this.showLog({ prefix: "x2", index: idx + ai, peerId, ttl, chunkId: cid, name, length });
                    }
                    finally {
                        this.requestPool.delete(cid);
                    }
                });
            });
        });
    }
    requestRange(url, offset = 16, limit = 16, checked = true) {
        if (this.peersMap.size < 1)
            return;
        let chunkId = utils.buildChunkId(url);
        let index = this.inIndex(chunkId);
        if (index < 0)
            return;
        let start = index + offset;
        let size = limit <= 3 ? limit : Math.max(this.peers.length, limit, 32);
        let end = start + size;
        let urls = this.hasPlaylist ? this.chunkUrls.slice(start, end) : [url];
        let startTime = Date.now();
        urls.forEach(async (reqUrl) => {
            let router = this.getRandomPeer();
            if (!router) {
                this.overQueue.push(url);
                return;
            }
            let cid = utils.buildChunkId(reqUrl);
            if (!this.includes(cid))
                return;
            let peerId = (router === null || router === void 0 ? void 0 : router.id) || "";
            let name = reqUrl.replace(/.*\//g, "") || chunkId;
            let idx = this.hasPlaylist ? this.inIndex(cid) : 0;
            let isDownloadIng = this.hasDownloading(cid) && checked;
            if (isDownloadIng)
                return;
            let pid = this.setDownloading(cid, router === null || router === void 0 ? void 0 : router.uuid, 5 * 1000);
            if (!this.hasPlaylist)
                await utils.wait(2000);
            let has = await this.hasChunk(cid);
            if (has)
                return this.requestPool.delete(cid);
            if (!router || !router.open)
                return;
            router === null || router === void 0 ? void 0 : router.request("/fetch", { url: reqUrl, mid: this.mid, timeout: 6 * 1000, headers: { "user-agent": navigator.userAgent } }, async (res) => {
                try {
                    this.requestPool.delete(cid);
                    clearTimeout(pid);
                    if (!res)
                        return;
                    let data = (res === null || res === void 0 ? void 0 : res.status) && (res === null || res === void 0 ? void 0 : res.data) && (res === null || res === void 0 ? void 0 : res.headers) ? res.data : res;
                    let length = (data === null || data === void 0 ? void 0 : data.byteLength) || (data === null || data === void 0 ? void 0 : data.length);
                    if (typeof length != "number" || length < 1) {
                        this.overQueue.push(reqUrl);
                        setTimeout(async () => {
                            let has = await this.hasChunk(cid);
                            !has && this.requestRange(reqUrl, 0, 1, false);
                        }, 500);
                        return;
                    }
                    let headers = res.headers || {};
                    if (headers["content-range"])
                        return;
                    let seedOK = await this.seed(cid, data).catch((err) => { });
                    this.requestPool.delete(cid);
                    if (!seedOK)
                        return;
                    this.emit("receive", { peerId });
                    let ttl = Date.now() - startTime;
                    this.showLog({ prefix: "x1", index: idx, peerId, ttl, chunkId: cid, name, length });
                }
                finally {
                    this.requestPool.delete(cid);
                }
            });
        });
    }
    getRandomPeer() {
        if (this.peersMap.size < 1)
            return;
        let list = this.peers.filter((r) => r.open);
        let router = list[Math.floor(Math.random() * list.length)];
        return router;
    }
    async setLastChunkIndex(url) {
        let chunkId = utils.buildChunkId(url);
        let idx = this.inIndex(chunkId);
        if (!this.isReady) {
            this.isReady = true;
            this.emit("ready");
        }
        if (this.hasPlaylist) {
            if (idx < 0)
                return;
            this.seedLastChunkIndex = idx;
            if (this.receiveChunkCount < 4 || idx < 4) {
                this.requestFromAllPeer(url, 1);
            }
            else {
                let offset = config_1.default.mode == "plugin" ? 6 : 0;
                this.requestRange(url, offset, this.limit);
            }
        }
        else {
            if (idx < 0) {
                this.chunkIds.push(chunkId);
                this.chunkUrls.push(url);
                this.sorts.set(chunkId, this.chunkIds.length - 1);
            }
            this.requestRange(url, 0, 1);
        }
    }
    async getChunk(chunkId, mid) {
        chunkId = utils.buildChunkId(chunkId);
        if (mid) {
            chunkId = mid + "-" + chunkId;
        }
        let chunk = await store_1.default.get(chunkId);
        let idx = this.inIndex(chunkId);
        this.drawProcess(idx, this.seedLastChunkIndex);
        return chunk;
    }
    includes(chunkId) {
        if (!this.hasPlaylist)
            return true;
        chunkId = utils.buildChunkId(chunkId);
        if (this.seedLastChunkIndex < 7)
            return true;
        let idx = this.inIndex(chunkId);
        if (idx < 7)
            return true;
        if (idx < this.seedLastChunkIndex)
            return false;
        let min = Math.max(Math.ceil(this.chunkIds.length / 5), 128);
        return idx - this.seedLastChunkIndex <= min;
    }
    inBefore(chunkId) {
        if (!this.hasPlaylist)
            return false;
        if (this.seedLastChunkIndex < 7)
            return false;
        chunkId = utils.buildChunkId(chunkId);
        let idx = this.inIndex(chunkId);
        return idx < this.seedLastChunkIndex;
    }
    async seed(chunkId, chunk) {
        if (!chunk || !chunkId)
            return false;
        try {
            chunkId = utils.buildChunkId(chunkId);
            chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
            let idx = this.inIndex(chunkId);
            if (!chunk)
                return false;
            if (idx == 0) {
                if (chunk.byteLength < 1)
                    return false;
            }
            else if (idx > 0) {
                if (chunk.byteLength < 12 * 1024)
                    return false;
            }
            if (chunk && chunk.byteLength > 0) {
                if (!this.hasChunkId(chunkId)) {
                    this.chunkIds.push(chunkId);
                    this.sorts.set(chunkId, this.chunkIds.length - 1);
                }
                this.loadeds[idx] = 1;
                store_1.default.set(chunkId, chunk);
                this.notifyChunk([chunkId]);
                this.emit("seed", { chunkId: chunkId, index: idx, data: chunk });
                return true;
            }
        }
        catch (err) {
            console.warn("seed error", err, chunk);
        }
        return false;
    }
    notifyChunk(chunkIds, mid) {
        this.peers.forEach((router) => {
            if (!router.open)
                return;
            router.request("/m/pushChunkIds", { chunkIds, mid: mid || this.mid });
        });
    }
    showProcess(total) {
        var _a;
        if (total < 1)
            return;
        let canvas = document.createElement("canvas");
        let v = document.querySelector("video");
        if (!v)
            return;
        Object.assign(canvas.style, {
            "z-index": 99999,
            position: "absolute",
            top: "4px",
            left: Math.ceil(v.offsetWidth * 0.02) + "px",
        });
        canvas.width = Math.floor(v.offsetWidth * 0.96);
        canvas.height = 30;
        canvas.className = "ivprocess";
        v.addEventListener("mouseover", () => (canvas.style.visibility = "visible"));
        v.addEventListener("mouseleave", () => (canvas.style.visibility = "hidden"));
        (_a = v.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(canvas, v);
        this.canvas = canvas;
        this.drawProcess(0, 0);
    }
    drawProcess(loadedIndex, curIndex = 0) {
        let total = this.chunkIds.length;
        let canvas = this.canvas;
        if (!this.canvasCtx) {
            if (!canvas)
                return;
            try {
                var context = canvas.getContext("2d");
                if (!context)
                    return;
                this.canvasCtx = context;
            }
            catch (err) {
                return;
            }
        }
        let ctx = this.canvasCtx;
        let width = canvas.offsetWidth - 3;
        let columns = Math.floor(width / 2);
        columns = columns >= total ? total : columns;
        let rows = Math.ceil(total / columns);
        const unitHeight = 3, unitWidth = Math.floor(width / columns);
        let colors = ["rgba(4, 87, 51, 0.5)", "rgba(91, 100, 8, 0.2)"];
        let end = loadedIndex < 0 ? total : loadedIndex + 5;
        for (let i = Math.max(loadedIndex - 5, 0); i < end; i++) {
            if (i == curIndex)
                continue;
            let state = this.loadeds[i];
            let row = Math.floor(i / columns);
            let x = (i % columns) * unitWidth, y = row * unitHeight;
            ctx.fillStyle = state ? colors[row % 2] : "rgba(0, 0, 0, 0)";
            ctx.fillRect(x, y, unitWidth, unitHeight);
        }
        let x = (curIndex % columns) * unitWidth, y = Math.floor(curIndex / columns) * unitHeight;
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.fillRect(x, y, unitWidth, unitHeight);
    }
}
exports["default"] = Attach;
function drawProcess(canvas, total, loadeds, curIndex = 0) {
    if (total >= 0)
        return;
    if (document.readyState != "complete")
        return;
    if (!canvas)
        return;
    var context = canvas.getContext("2d");
    if (!context)
        return;
    let width = canvas.offsetWidth - 3;
    let columns = Math.floor(width / 3);
    columns = columns >= total ? total : columns;
    let rows = Math.ceil(total / columns);
    const unitHeight = 3, unitWidth = Math.floor(width / columns);
    let index = 0, start = 0;
    let colors = ["rgba(4, 87, 51, 0.2)", "rgba(91, 100, 8, 0.2)"];
    for (let row = 0; row < rows; row++) {
        let y = row * unitHeight;
        for (let column = 0; column < columns; column++) {
            let state = loadeds[index];
            if (start < 1 && state == 1) {
                start = index;
            }
            let x = column * unitWidth;
            let mohuIndex = row * columns + column;
            if (Math.abs(curIndex - mohuIndex) < 1) {
                context.fillStyle = "rgba(255, 0, 0, 1)";
                context.fillRect(x, y, unitWidth, unitHeight);
            }
            else {
                if (state) {
                    context.fillStyle = state ? colors[row % 2] : "rgba(0, 0, 0, 0)";
                    context.fillRect(x, y, unitWidth, unitHeight);
                }
                else {
                    context.clearRect(x, y, unitWidth, unitHeight);
                }
            }
            index++;
        }
    }
}


/***/ }),

/***/ 336:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const utils = __importStar(__webpack_require__(905));
const ipeer_1 = __importStar(__webpack_require__(497));
const iceservice_1 = __importDefault(__webpack_require__(728));
const router_1 = __importDefault(__webpack_require__(404));
const store_1 = __importDefault(__webpack_require__(86));
const api_1 = __importDefault(__webpack_require__(989));
const dayjs_1 = __importDefault(__webpack_require__(484));
const config_1 = __importDefault(__webpack_require__(248));
const chrome_1 = __importDefault(__webpack_require__(90));
let daemonId = ((_a = globalThis.localStorage) === null || _a === void 0 ? void 0 : _a.getItem("daemonId")) || utils.buildPeerId("daemon");
(_b = globalThis.localStorage) === null || _b === void 0 ? void 0 : _b.setItem("daemonId", daemonId);
class Daemon extends eventemitter3_1.default {
    constructor() {
        var _a;
        super();
        this.clients = new Map();
        if (window != window.top)
            return;
        window.addEventListener("beforeunload", () => {
            this.destroy();
        });
        window.addEventListener("close", () => {
            this.destroy();
        });
        this.init();
        (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.onMessage.addListener((reqInfo, sender, senResponse) => {
            var _a;
            if (!reqInfo.router)
                return;
            switch (reqInfo.router) {
                case "ivideos.daemon":
                    this.init();
                    senResponse({});
                    break;
                case "ivideos.isOpen":
                    senResponse({
                        isOpen: !!((_a = this.peer) === null || _a === void 0 ? void 0 : _a.open),
                    });
                    break;
            }
        });
    }
    get id() {
        var _a;
        return ((_a = this.peer) === null || _a === void 0 ? void 0 : _a.id) || "";
    }
    async init() {
        if (!config_1.default.daemon)
            return;
        if (window != window.top)
            return;
        let info = await this.getDeviceInfo();
        if (info.daemon)
            return;
        this.makePeer({ host: "p0.iee.one", port: 443 });
        this.makePeer({ host: "0.peerjs.com", port: 443 });
    }
    async makePeer(options) {
        let info = await this.getDeviceInfo();
        let peerId = utils.md5(info.daemonId + "-" + (0, dayjs_1.default)().format("YYYYMMDD"));
        let iceServers = await (0, iceservice_1.default)();
        let peer = new ipeer_1.default(peerId, {
            secure: true,
            token: peerId,
            host: options.host,
            port: options.port,
            handshakeMode: "all",
            debug: 0,
            config: {
                iceServers: iceServers,
            },
        });
        this.peer = peer;
        peer.on("open", (id) => {
            console.info("===daemon peer", peer.id);
            api_1.default.register({ peerId: id });
            this.start();
            let pid = setInterval(() => {
                if (!peer.open) {
                    clearInterval(pid);
                    return;
                }
                api_1.default.register({ peerId: id });
                this.start();
            }, 60 * 1000);
        });
        peer.on("connection", (socket) => {
            let ssocket = new ipeer_1.SerialSocket(socket);
            let router = new router_1.default(ssocket);
            this.clients.set(socket.peer, router);
            this.initRouter(router);
        });
        peer.once("disconnected", () => {
        });
        peer.once("close", () => {
            this.destroy();
            this.clients.clear();
        });
    }
    initRouter(router) {
        var _a;
        (_a = router.socket) === null || _a === void 0 ? void 0 : _a.once("close", () => {
            this.clients.delete(router.id);
        });
        router.use("/fetch", async (data, sender) => {
            if (!config_1.default.daemon)
                return sender({});
            let url = data.url;
            let method = data.method || "get";
            if (/^get$/i.test(method)) {
                let chunkId = utils.buildChunkId(url);
                let mid = data.mid || "";
                let chunk = await this.getChunk(chunkId, mid);
                if (chunk && chunk.byteLength > 0) {
                    return sender(chunk);
                }
            }
            chrome_1.default.runtime.sendMessage({ router: "/fetch", data: data }, (res) => {
                sender({
                    status: (res === null || res === void 0 ? void 0 : res.status) || 500,
                    statusText: (res === null || res === void 0 ? void 0 : res.statusText) || "",
                    headers: (res === null || res === void 0 ? void 0 : res.headers) || {},
                    data: res === null || res === void 0 ? void 0 : res.data,
                });
            });
        });
    }
    async getChunk(chunkId, mid) {
        chunkId = utils.buildChunkId(chunkId);
        if (mid)
            chunkId = mid + "-" + chunkId;
        let chunk = await store_1.default.get(chunkId);
        return chunk;
    }
    start() {
        return new Promise((resolve) => {
            chrome_1.default.runtime.sendMessage({ router: "/startDaemon", data: {} }, {}, (res) => {
                resolve(res);
            });
        });
    }
    stop() {
        return new Promise((resolve) => {
            chrome_1.default.runtime.sendMessage({
                router: "/stopDaemon",
                data: {},
            }, {}, (res) => {
                resolve(res);
            });
        });
    }
    getDeviceInfo() {
        return new Promise((resolve) => {
            if (chrome_1.default.runtime) {
                chrome_1.default.runtime.sendMessage({ router: "/deviceInfo", data: {} }, {}, (res) => {
                    resolve(res);
                });
            }
            else {
                resolve({ deviceId: "", daemon: false, peers: [], daemonId: daemonId });
            }
        });
    }
    destroy() {
        this.clients.forEach((router) => {
            var _a;
            (_a = router.socket) === null || _a === void 0 ? void 0 : _a.destroy();
        });
        this.clients.clear();
        let peer = this.peer;
        if (!peer)
            return;
        this.stop();
        peer.removeAllListeners("disconnected");
        peer.removeAllListeners("connection");
        peer.destroy();
        this.peer = undefined;
    }
}
exports["default"] = Daemon;


/***/ }),

/***/ 728:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __importDefault(__webpack_require__(248));
const api_1 = __importDefault(__webpack_require__(989));
const chrome_1 = __importDefault(__webpack_require__(90));
const iceServers = [...config_1.default.iceServers];
let getCount = parseInt(localStorage.getItem("getIceServersCount") || "") || 0;
const store = {
    async get(key) {
        return new Promise((resolve) => {
            var _a;
            if ((_a = chrome_1.default.storage) === null || _a === void 0 ? void 0 : _a.local) {
                chrome_1.default.storage.local.get([key], async (res) => resolve(res[key]));
            }
            else {
                let v = localStorage.getItem(key) || "";
                try {
                    v = JSON.parse(v);
                }
                catch (err) { }
                resolve(v);
            }
        });
    },
    async set(key, value) {
        return new Promise((resolve) => {
            var _a;
            if ((_a = chrome_1.default.storage) === null || _a === void 0 ? void 0 : _a.local) {
                let sdata = {};
                sdata[key] = value;
                chrome_1.default.storage.local.set(sdata).then(() => resolve());
            }
            else {
                localStorage.setItem(key, JSON.stringify(value));
                resolve();
            }
        });
    },
};
async function get() {
    return new Promise(async (resolve) => {
        let list = (await store.get("iceServers")) || [];
        if (list.length > 0) {
            iceServers.splice(0, iceServers.length);
            iceServers.push(...list);
        }
        if (getCount % 3 == 0) {
            api_1.default.getIceServers().then(({ list }) => {
                if (list.length > 0) {
                    iceServers.splice(0, iceServers.length);
                    iceServers.push(...list);
                    store.set("iceServers", list);
                }
            });
        }
        getCount++;
        localStorage.setItem("getIceServersCount", getCount + "");
        if (iceServers.length > 0) {
            resolve(iceServers);
        }
    });
}
exports["default"] = get;


/***/ }),

/***/ 278:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Daemon = exports.Torrent = void 0;
const torrent_1 = __importDefault(__webpack_require__(177));
exports.Torrent = torrent_1.default;
const daemon_1 = __importDefault(__webpack_require__(336));
exports.Daemon = daemon_1.default;
exports["default"] = torrent_1.default;


/***/ }),

/***/ 903:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mayHandlePlaylist = void 0;
const config_1 = __importDefault(__webpack_require__(248));
const util = __importStar(__webpack_require__(905));
const parse = __importStar(__webpack_require__(724));
exports["default"] = parse;
function mayHandlePlaylist(url, contentType) {
    try {
        let su = url;
        if (su instanceof globalThis["Request"])
            url = su.url;
        url = /^\/\//.test(url) ? location.protocol + url : url;
        let suffix = util.suffix(url);
        if (config_1.default.videoListSuffix.includes(suffix))
            return true;
        if (contentType) {
            if (/(mpegurl)/i.test(contentType))
                return true;
        }
    }
    catch (err) {
        console.info("===>mayHandlePlaylist", err.message, url);
    }
    return false;
}
exports.mayHandlePlaylist = mayHandlePlaylist;


/***/ }),

/***/ 724:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseQQM3u8 = exports.parseM3u8 = exports.formatM3u8 = exports.parse = void 0;
const util = __importStar(__webpack_require__(905));
function parse(url, text) {
    try {
        let info = new URL(url);
        let prefix = util.prefix(url);
        if (/\.l\.qq\.com$/.test(info.hostname) && "/proxyhttp" == info.pathname) {
            return [];
        }
        return parseM3u8(text, prefix);
    }
    catch (err) {
        console.warn("parse error", err.message);
    }
    return [];
}
exports.parse = parse;
var text = (/* unused pure expression or super */ null && (`#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:11
#EXTINF:4.004000,
https://qnc.veadv.com/app/users/cover_shop_image/pic_79A2DBCC-69FD-4A56-BF41-0484BF63E8E7.jpg
#EXTINF:6.297956,
https://qnc.veadv.com/app/users/cover_shop_image/pic_93A40B9A-4544-40A2-A894-F3D83CDEEAED.jpg
#EXTINF:3.712033,
/ts/MTY2zJ37v0OTk5NjY1NSRodHRwczovL3FuYy52ZWFkdi5jb20vYXBwL3VzZXJzL2NvdmVyX3Nob3BfaW1hZ2UvcGljX0YxRUJERjFBLTVDNjUtNDJBQy05M0EwLTRC4d6pHDwQkY0OENFNUM0QS5qcGcN
#EXTINF:10.010011,
/ts/MTY2zJ37v0OTk5NjY1NSRodHRwczovL3FuYy52ZWFkdi5jb20vYXBwL3VzZXJzL2NvdmVyX3Nob3BfaW1hZ2UvcGljX0IyOEU3RDdCLUI4Q0MtNDlDNi1CQjM0LUVB4d6pHDwQzhCQ0YyOTBGRC5qcGcN
#EXTINF:4.379378,
/ts/MTY2zJ37v0OTk5NjY1NSRodHRwczovL3FuYy52ZWFkdi5jb20vYXBwL3VzZXJzL2NvdmVyX3Nob3BfaW1hZ2UvcGljXzc2QjNBQjlCLUY4RkItNEY5OS1BOTVELTFC4d6pHDwMzRCNTRDNDdFQi5qcGcN
#EXT-X-ENDLIST`));
function formatM3u8(url, text) {
    text = text.trim();
    let info = new URL(url);
    let prefix = util.prefix(url);
    let origin = (info === null || info === void 0 ? void 0 : info.origin) || prefix;
    let lines = text.split(/[\r\n]/);
    let list = lines.filter(v => !!v).map((line) => {
        if (!line)
            return "";
        line = line.trim();
        if (/URI=/i.test(line)) {
            let ms = line.match(/URI=["' ]+(((http|https|blob):)?[^"']+)["' ]+/i) || [];
            let uri = ms[1];
            if (uri) {
                let nuri = uri;
                let isProtocolPrefix = /^(http|https|blob):/i.test(uri);
                if (!isProtocolPrefix) {
                    if (/^\//i.test(uri)) {
                        nuri = origin + nuri;
                    }
                    else {
                        nuri = prefix + "/" + nuri;
                    }
                }
                line = line.replace(uri, nuri);
            }
            return line;
        }
        if (/^#/i.test(line))
            return line;
        if (/^(https|http|blob):/i.test(line))
            return line;
        if (/^\//i.test(line))
            return origin + line;
        return prefix + "/" + line;
    });
    return list.filter(v => !!v).join("\r\n");
}
exports.formatM3u8 = formatM3u8;
function parseM3u8(text, prefix) {
    if (!text.includes("#EXTINF"))
        return [];
    let info = /^https?:/.test(prefix) ? new URL(prefix) : undefined;
    let origin = (info === null || info === void 0 ? void 0 : info.origin) || prefix;
    let list = text
        .split(/[\r\n]/)
        .filter(v => !!v)
        .map((v) => {
        v = v.replace(/(^.*URI=['"]+)|(['"]+$)/g, "");
        return v;
    })
        .filter((v) => !/^#/i.test(v))
        .map((v) => {
        if (/^\//i.test(v))
            return origin + v;
        return /^https?:/i.test(v) ? v : prefix + "/" + v;
    });
    return list;
}
exports.parseM3u8 = parseM3u8;
function parseQQM3u8(data, prefix) {
    var _a, _b, _c, _d;
    try {
        if (data.errCode == 0 && data.vinfo) {
            let vinfo = JSON.parse(data.vinfo);
            if (((_b = (_a = vinfo === null || vinfo === void 0 ? void 0 : vinfo.vl) === null || _a === void 0 ? void 0 : _a.vi) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                let text = (_d = (_c = vinfo === null || vinfo === void 0 ? void 0 : vinfo.vl) === null || _c === void 0 ? void 0 : _c.vi[0].ul) === null || _d === void 0 ? void 0 : _d.m3u8;
                let urls = parseM3u8(text, prefix);
                return urls;
            }
        }
    }
    catch (err) {
        console.warn("parseQQM3u8 error", err.message);
    }
    return [];
}
exports.parseQQM3u8 = parseQQM3u8;


/***/ }),

/***/ 404:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const util = __importStar(__webpack_require__(905));
const msg_1 = __importDefault(__webpack_require__(344));
const config_1 = __importDefault(__webpack_require__(248));
let deviceInfo = { deviceId: "" };
setTimeout(() => {
    msg_1.default.getDeviceInfo((res) => {
        Object.assign(deviceInfo, res);
    });
}, 500);
const source = location.hostname || "";
const gtimeout = (/* unused pure expression or super */ null && (60 * 1000));
class Router extends eventemitter3_1.default {
    constructor(socket) {
        super();
        this.tasks = new Map();
        this.routers = new Map();
        let tasks = this.tasks;
        this.socket = socket;
        this._id = socket.peer;
        this.socket.once("open", () => this.emit("open", this));
        this.socket.once("close", () => {
            this.destroy();
            this.emit("close");
        });
        this.socket.cacheTTL = 30 * 1000;
        this.socket.on("data", (data) => {
            let router = this.routers.get(data === null || data === void 0 ? void 0 : data.router);
            let sid = data.sid;
            if (router) {
                let pid = setTimeout(() => {
                    socket.open &&
                        socket.write({
                            sid: sid,
                            data: undefined,
                        });
                }, 60 * 1000);
                router(data.data, async (res) => {
                    try {
                        let length = res === undefined ? 0 : res.byteLength || res.length;
                        let isSecret = typeof length == "number" ? length < 10 * 1024 : true;
                        socket.open &&
                            socket.write({
                                sid: sid,
                                data: res,
                            }, isSecret);
                        clearTimeout(pid);
                    }
                    catch (err) {
                        console.warn("req write error", err);
                    }
                });
            }
            else if (sid) {
                let handle = tasks.get(sid);
                tasks.delete(sid);
                handle && handle(data.data);
            }
        });
    }
    get uuid() {
        var _a, _b;
        return ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.uuid) || ((_b = this.socket) === null || _b === void 0 ? void 0 : _b.peer) || "";
    }
    get id() {
        return this._id;
    }
    get open() {
        var _a;
        return !!((_a = this.socket) === null || _a === void 0 ? void 0 : _a.open);
    }
    use(router, handle) {
        this.routers.set(router, handle);
    }
    async request(router, data, callback) {
        return new Promise(async (resolve) => {
            var _a;
            let tasks = this.tasks;
            let sid = util.buildSN(13);
            const isReqChunk = ["/m/chunk", "/fetch"].includes(router);
            let pid = setTimeout(() => {
                tasks.delete(sid);
                if (isReqChunk)
                    this.destroy();
                callback && callback(undefined, this.socket);
            }, 60 * 1000);
            tasks.set(sid, (res) => {
                clearTimeout(pid);
                tasks.delete(sid);
                resolve(res);
                callback && callback(res, this.socket);
            });
            await ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.write({
                router: router,
                data: Object.assign(Object.assign({}, data), { deviceId: deviceInfo.deviceId, appVersion: config_1.default.appVersion, source: source }),
                sid: sid,
            }, true));
        });
    }
    isSame(socket) {
        return socket == this || socket.socket == this.socket;
    }
    destroy() {
        var _a, _b;
        try {
            this.tasks.clear();
            this.routers.clear();
            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.destroy();
            (_b = this.socket) === null || _b === void 0 ? void 0 : _b.emit("close");
            this.socket = undefined;
        }
        catch (err) { }
    }
}
exports["default"] = Router;


/***/ }),

/***/ 86:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(764)["Buffer"];

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const idb = __importStar(__webpack_require__(678));
class MemStore {
    constructor() {
        this.totalSize = 0;
        this.store = new Map();
    }
    async get(key) {
        return this.store.get(key);
    }
    async set(key, chunk) {
        let has = this.store.has(key);
        if (!has)
            this.totalSize += chunk.byteLength;
        this.store.set(key, chunk);
    }
    async delete(key) {
        let chunk = await this.get(key);
        if (chunk)
            this.totalSize -= chunk.byteLength;
        this.store.delete(key);
    }
    async has(key) {
        return this.store.has(key);
    }
    async size() {
        return this.store.size;
    }
    clear() {
        this.store.clear();
    }
}
class IndexedStore {
    constructor(mediaId) {
        this.totalSize = 0;
        this.count = 0;
        this.mid = mediaId;
        let storeMediaId = localStorage.getItem("mediaId");
        let isClear = storeMediaId != mediaId;
        localStorage.setItem("mediaId", mediaId);
        setTimeout(async () => isClear && (idb === null || idb === void 0 ? void 0 : idb.clear()), 100);
    }
    key(key) {
        if (/^[a-z0-9]{32}-[a-z0-9]{32}$/i.test(key))
            return key;
        return this.mid + "-" + key;
    }
    async getPlaylist() {
        let key = this.key("playlist");
        let list = (await idb.get(key)) || [];
        return list;
    }
    async setPlaylist(playlist) {
        let key = this.key("playlist");
        idb.set(key, playlist);
    }
    async get(key) {
        key = this.key(key);
        let data = await idb.get(key);
        if ((data === null || data === void 0 ? void 0 : data.type) == "Buffer")
            data = Buffer.from(data.data);
        if (data && data.byteLength > 0) {
        }
        return data;
    }
    async set(key, chunk) {
        key = this.key(key);
        let has = await this.has(key);
        if (!has) {
            this.totalSize += chunk.byteLength;
            this.count++;
        }
        idb === null || idb === void 0 ? void 0 : idb.set(key, chunk);
    }
    async delete(key) {
        key = this.key(key);
        let data = await this.get(key);
        if (data) {
            this.totalSize -= data.byteLength;
            this.count--;
        }
        idb === null || idb === void 0 ? void 0 : idb.del(key);
    }
    async has(key) {
        key = this.key(key);
        let keys = await this.keys();
        return keys.includes(key);
    }
    async keys() {
        return idb.keys();
    }
    async size() {
        return this.count;
    }
    clear() {
        idb.clear();
    }
}
class Store {
    constructor() {
        this.hass = new Map();
        this.memStore = new MemStore();
        this.playlist = [];
    }
    setMedia(mid) {
        this.memStore.clear();
        this.idxStore = new IndexedStore(mid);
    }
    async getPlaylist() {
        var _a;
        let list = this.playlist;
        if (!list || list.length < 1) {
            if (this.idxStore)
                list = (await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.getPlaylist())) || [];
        }
        return list;
    }
    async setPlaylist(playlist) {
        var _a;
        this.playlist = playlist;
        (_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.setPlaylist(playlist);
    }
    async get(key) {
        var _a;
        let chunk = await this.memStore.get(key);
        try {
            if (!chunk || chunk.byteLength < 1)
                chunk = await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.get(key));
        }
        catch (err) {
            return undefined;
        }
        return chunk;
    }
    async set(key, chunk) {
        var _a;
        if (this.memStore.totalSize <= 12 * 1024 * 1024) {
            await this.memStore.set(key, chunk);
        }
        chunk.length > 0 && this.hass.set(key, true);
        await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.set(key, chunk));
    }
    async del(key) {
        var _a;
        this.memStore.delete(key);
        (_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.delete(key);
        this.hass.delete(key);
    }
    async has(key) {
        var _a;
        if (this.hass.has(key))
            return true;
        let has = await this.memStore.has(key);
        if (!has) {
            has = await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.has(key));
        }
        if (has)
            this.hass.set(key, true);
        return has;
    }
    async clear() {
        var _a;
        this.memStore.clear();
        (_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.clear();
    }
    async size() {
        var _a;
        let s1 = await this.memStore.size();
        let s2 = await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.size());
        let size = s1 + s2;
        return size;
    }
}
const store = new Store();
exports["default"] = store;


/***/ }),

/***/ 177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ipeer_1 = __importStar(__webpack_require__(497));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const buffer_1 = __webpack_require__(764);
const config_1 = __importDefault(__webpack_require__(248));
const router_1 = __importDefault(__webpack_require__(404));
const api_1 = __importDefault(__webpack_require__(989));
const util = __importStar(__webpack_require__(905));
const msg_1 = __importDefault(__webpack_require__(344));
const store_1 = __importDefault(__webpack_require__(86));
const attach_1 = __importDefault(__webpack_require__(260));
const iceservice_1 = __importDefault(__webpack_require__(728));
const stats_1 = __importDefault(__webpack_require__(674));
let console = util.logger;
const chrome_1 = __importDefault(__webpack_require__(90));
let iceServers = [...config_1.default.iceServers];
const gMode = Math.floor(Math.random() * 2);
class Torrent extends eventemitter3_1.default {
    constructor(daemon) {
        super();
        this.daemon = daemon;
        this.peers = [];
        this._isOpen = false;
        this.refer = document.referrer || "";
        this.requestCount = 0;
        this.attach = new attach_1.default();
        this.peerServer = {
            host: "0.peerjs.com",
            port: 443,
        };
        msg_1.default.getInfo(async (info) => {
            const deviceInfo = await new Promise((resolve) => {
                if (util.inContext()) {
                    chrome_1.default.runtime.sendMessage({ router: "/deviceInfo", data: {} }, (res) => {
                        resolve(res);
                    });
                }
                else {
                    resolve({
                        peerServer: this.peerServer,
                    });
                }
            });
            const peerServer = deviceInfo.peerServer;
            Object.assign(this.peerServer, peerServer);
            let startTime = Date.now();
            let spid = setInterval(async () => {
                if (Date.now() - startTime >= 60 * 1000)
                    return clearInterval(spid);
                if (this.peers.length > 0)
                    return clearInterval(spid);
                let isVideo = !!document.querySelector("video");
                if (!isVideo && deviceInfo.create != true)
                    return;
                clearInterval(spid);
                let list = await (0, iceservice_1.default)();
                if (list && list.length > 0)
                    iceServers = list;
                this.url = info.url;
                this.title = info.title || "";
                this.refer = info.refer || document.referrer || "";
                let mid = this.mid || util.buildMediaId(this.url);
                if (!mid)
                    return console.info("init mid error");
                this.mid = mid;
                this.attach.setMedia(mid);
                store_1.default.setMedia(mid);
                this.init(mid);
            }, 100);
        });
        this.attach.on("seed", async () => {
            this.requestCount > 0 && this.requestCount % 50 == 0 && this.mid && api_1.default.register({ mid: this.mid, peerId: this.peerId });
        });
        this.once("ready", () => {
            stats_1.default.play({ title: this.title, m3u8: this.playlist, url: this.url });
        });
    }
    get ua() {
        return (navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) || "";
    }
    get open() {
        return this._isOpen;
    }
    initPeers(peerId) {
        let tokenKey = "peer-token-" + this.mid;
        const token = sessionStorage.getItem(tokenKey) || util.buildPeerId(this.mid);
        sessionStorage.setItem(tokenKey, token);
        let peer1 = new ipeer_1.default(this.peerId, {
            secure: true,
            debug: 0,
            config: {
                iceServers: iceServers,
            },
            handshakeMode: "all",
            token: token,
        });
        let peer2 = new ipeer_1.default(this.peerId, {
            host: this.peerServer.host,
            port: this.peerServer.port,
            secure: true,
            debug: 0,
            config: {
                iceServers: iceServers,
            },
            token: token,
            handshakeMode: "all",
        });
        this.peers.push(peer1, peer2);
        this.on("news", () => {
            api_1.default.getMedia(this.mid)
                .then(async (res) => {
                this.ip = res.ip;
                stats_1.default.ip = res.ip;
                let list = res.list || [];
                let attachs = res.attachs || [];
                list = list.filter((id) => id != this.peerId);
                console.info("connect peers", list.length, attachs.length);
                if (list.length > 0) {
                    for (let id of list) {
                        await this.connectPeer(id, async (con) => {
                            if (!con)
                                return;
                            let xsocket = this.initRouter(con);
                            this.attach.addPeer(xsocket);
                            console.debug("connect peer ok m1", id, this.attach.peers.length);
                        });
                    }
                    for (let id of attachs) {
                        await this.connectPeer(id, async (con) => {
                            if (!con)
                                return;
                            let xsocket = this.initRouter(con);
                            this.attach.addPeer(xsocket);
                            console.debug("connect peer ok m2", id, this.attach.peers.length);
                        });
                    }
                }
            })
                .catch((err) => undefined);
        });
        this.peers.forEach((peer) => this.initEventPeer(peer));
        return this.peers;
    }
    hasVideo() {
        return !!document.querySelector("video");
    }
    initEventPeer(peer) {
        let peerId = peer.id || "";
        let isUnRegister = false;
        const onclose = () => {
            if (isUnRegister)
                return;
            isUnRegister = true;
            setTimeout(() => (isUnRegister = false), 10 * 1000);
            api_1.default.unRegister(this.peerId);
            globalThis.removeEventListener("close", onclose);
            globalThis.removeEventListener("beforeunload", onclose);
            peer.destroy();
            this.attach.destroy();
        };
        peer.on("disconnected", (err) => {
            console.debug("==== peer disconnected ", peerId);
            setTimeout(() => peer.reconnect(), 5 * 1000);
        });
        setInterval(() => {
            if (this.hasVideo())
                this.attach.peers.length < 4 && this.emit("news");
        }, 60 * 1000);
        globalThis.addEventListener("beforeunload", () => onclose());
        globalThis.addEventListener("close", () => onclose());
        peer.once("close", onclose);
        peer.on("open", async () => {
            console.info(`============= open peer ${this.peerId} ===============`);
            api_1.default.register({
                mid: this.mid,
                peerId: this.peerId,
                url: this.url,
                title: this.title,
                refer: this.refer,
                m3u8: this.playlist,
            });
            this.emit("open");
            this.playlist && this.emit("ready");
            this._isOpen = true;
            this.hasVideo() && this.emit("news");
        });
        peer.on("connection", async (socket0) => {
            let id = socket0.peer;
            console.debug("accept", id, this.attach.peers.length);
            let socket = new ipeer_1.SerialSocket(socket0);
            let xsocket = this.initRouter(socket);
            this.attach.addPeer(xsocket);
            this.emit("accept", xsocket);
        });
    }
    async init(mid) {
        this.mid = util.buildMediaId(mid || this.mid);
        if (this.mid && this.playlist)
            this.emit("ready");
        let peerKey = "peer-" + this.mid;
        let peerId = sessionStorage.getItem(peerKey) || util.buildPeerId(this.mid);
        sessionStorage.setItem(peerKey, peerId);
        this.peerId = peerId;
        this.initPeers(peerId);
    }
    setPlayList(chunkIds, playlistUrl) {
        if (this.attach.hasPlaylist)
            return;
        this.playlist = playlistUrl;
        this.attach.setPlaylist(playlistUrl);
        if (this.mid && this.playlist)
            this.emit("ready");
        this.attach.init(chunkIds);
    }
    async setLastChunkIndex(url) {
        this.requestCount++;
        if (this.attach.hasPlaylist) {
            let chunkId = util.buildChunkId(url);
            let idx = this.attach.inIndex(chunkId);
            if (idx < 3)
                this.fetchFromBack(idx);
            else if (idx % 2 == gMode && idx > 1) {
                this.fetchFromBack(idx + 3);
            }
        }
        this.attach.setLastChunkIndex(url);
    }
    async seed(chunkId, chunk) {
        if (!chunk || !chunkId)
            return;
        chunkId = util.buildChunkId(chunkId);
        chunk = buffer_1.Buffer.isBuffer(chunk) ? chunk : buffer_1.Buffer.from(chunk);
        if (chunk && chunk.byteLength > 0) {
            this.attach.seed(chunkId, chunk);
        }
    }
    getChunk(chunkId, mid) {
        return this.attach.getChunk(chunkId, mid);
    }
    async hasChunk(chunkId) {
        return store_1.default.has(chunkId);
    }
    async connectPeer(peerId, callback) {
        if (peerId == this.peerId)
            return;
        return new Promise((resolve) => {
            let isConnect = false;
            this.peers.forEach((peer) => {
                let uuid = peer.uuid;
                if (!peer)
                    return resolve(undefined);
                if (this.attach.hasPeer(uuid))
                    resolve(undefined);
                let socket0 = peer.connect(peerId);
                let socket = new ipeer_1.SerialSocket(socket0);
                let pid = setTimeout(() => {
                    resolve(socket);
                }, 200);
                setTimeout(() => {
                    if (!isConnect) {
                        socket0.destroy();
                    }
                }, 60 * 1000);
                socket.on("open", () => {
                    isConnect = true;
                    clearTimeout(pid);
                    callback && callback(socket);
                    resolve(socket);
                });
                socket.once("error", (err) => resolve(undefined));
            });
        });
    }
    closeConnect(socket) {
        setTimeout(() => !this.attach.hasSamePeer(socket.peer) && api_1.default.del(socket.peer), 1000);
    }
    initRouter(socket) {
        socket.once("close", () => {
            this.closeConnect(socket);
            api_1.default.unRegister(socket.peer);
        });
        socket.once("timeout", () => {
            socket.destroy();
        });
        socket.once("error", (err) => {
            let msg = err.message;
            let id = socket.peer;
            globalThis.console.error(err);
            socket.destroy();
            if (/Initiated Abort, reason=Close called/i.test(msg)) {
                return;
            }
        });
        let router = new router_1.default(socket);
        api_1.default.add(router);
        router.use("/m/register", (data, sender) => {
            if (data.seedLastChunkIndex >= 0 || !!data.seedLastChunkId) {
                sender({});
            }
        });
        router.use("/m/playlist", async (data, sender) => {
            sender({});
        });
        router.use("/m/chunk", async (data, sender) => {
            let chunkId = data.chunkId;
            let chunk = await this.attach.getChunk(chunkId);
            chunk = chunk == undefined ? buffer_1.Buffer.alloc(0) : chunk;
            sender(chunk);
            this.attach.hasPlaylist &&
                setTimeout(async () => {
                    let idx = this.attach.inIndex(chunkId) + 1;
                    let list = this.attach.chunkIds.slice(idx, idx + 32);
                    let pushs = [];
                    for (let id of list) {
                        let has = await this.attach.hasChunk(id);
                        has && pushs.push(id);
                    }
                    router.request("/m/pushChunkIds", { mid: this.mid, chunkIds: pushs });
                }, 1000);
        });
        router.use("/m/pushChunkIds", async (data, sender) => {
            if (data.mid == this.mid) {
                let chunkIds = data.chunkIds || [];
                this.attach.requestChunkIds(chunkIds, router);
            }
            sender({});
        });
        router.use("/fetch", async (data, sender) => {
            let url = data.url;
            let method = data.method || "get";
            if (/^get$/i.test(method) && data.mid) {
                let chunkId = util.buildChunkId(url);
                let mid = data.mid || "";
                let chunk = await this.attach.getChunk(chunkId, mid);
                if (chunk && chunk.byteLength > 0) {
                    mid &&
                        setTimeout(() => {
                            this.attach.notifyChunk([chunkId], mid);
                        }, 3000);
                    return sender({
                        status: 200,
                        statusText: "",
                        headers: {},
                        data: chunk,
                    });
                }
            }
            this.fetch(data, sender);
        });
        return router;
    }
    fetch(data, sender) {
        var _a;
        if (util.inContext()) {
            (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage({ router: "/fetch", data: data }, (res) => {
                if (res && [200, 206].includes(res.status)) {
                    sender({
                        status: (res === null || res === void 0 ? void 0 : res.status) || 500,
                        statusText: (res === null || res === void 0 ? void 0 : res.statusText) || "",
                        headers: (res === null || res === void 0 ? void 0 : res.headers) || {},
                        data: res === null || res === void 0 ? void 0 : res.data,
                    });
                }
                else {
                    this.fetchByPeer(data, sender);
                }
            });
        }
        else {
            let sdata = Object.assign({}, data);
            delete sdata.url;
            fetch(data.url, sdata)
                .then(async (res) => {
                if ([200, 206].includes(res.status)) {
                    sender({
                        status: (res === null || res === void 0 ? void 0 : res.status) || 500,
                        statusText: (res === null || res === void 0 ? void 0 : res.statusText) || "",
                        headers: {},
                        data: await res.arrayBuffer(),
                    });
                }
                else {
                    this.fetchByPeer(data, sender);
                }
            })
                .catch((err) => {
                this.fetchByPeer(data, sender);
            });
        }
    }
    fetchByPeer(options, callback) {
        let router = this.attach.getRandomPeer();
        if (router) {
            router.request("/fetch", options, (res) => {
                callback({
                    status: (res === null || res === void 0 ? void 0 : res.status) || 500,
                    statusText: (res === null || res === void 0 ? void 0 : res.statusText) || "",
                    headers: (res === null || res === void 0 ? void 0 : res.headers) || {},
                    data: res === null || res === void 0 ? void 0 : res.data,
                });
            });
        }
        else {
            callback({
                status: 500,
                statusText: "",
                headers: {},
                data: undefined,
            });
        }
    }
    clearPlayList() { }
    async fetchFromBack(idx) {
        var _a;
        if (!util.inContext())
            return;
        if (typeof idx == "string") {
            idx = this.attach.inIndex(idx);
        }
        let chunkId = this.attach.chunkIds[idx];
        if (!chunkId)
            return;
        let has = await this.hasChunk(chunkId);
        if (has)
            return;
        let tizhaoUrl = this.attach.chunkUrls[idx];
        tizhaoUrl &&
            ((_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage({ router: "/fetch", data: { url: tizhaoUrl } }, (res) => {
                let data = res === null || res === void 0 ? void 0 : res.data;
                if (data) {
                    let chunk = buffer_1.Buffer.from(data);
                    this.seed(chunkId, chunk);
                }
            }));
    }
    clear() {
        var _a;
        store_1.default.clear();
        (_a = chrome_1.default.storage) === null || _a === void 0 ? void 0 : _a.session.set({ playlist: [] });
    }
    isSupports() {
        var _a;
        var e = window.RTCPeerConnection || window["mozRTCPeerConnection"] || window["webkitRTCPeerConnection"], t = navigator["getUserMedia"] ||
            navigator["webkitGetUserMedia"] ||
            navigator["msGetUserMedia"] ||
            navigator["mozGetUserMedia"] ||
            (navigator.mediaDevices && ((_a = navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getUserMedia)), n = window.WebSocket;
        return !!e && !!t && !!n;
    }
}
exports["default"] = Torrent;


/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const gchrome = globalThis.chrome || globalThis.browser;
exports["default"] = gchrome;


/***/ }),

/***/ 596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(764)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Cipher {
    constructor(encodeSecret, decodeSecret) {
        this.encodeSecret = encodeSecret;
        this.decodeSecret = decodeSecret;
        this.secret = encodeSecret.toString("base64");
    }
    static createCipher(secret) {
        if (typeof secret === "string") {
            secret = Buffer.from(secret, "base64");
        }
        let decodeSecret = Buffer.alloc(256);
        for (let i = 0; i < decodeSecret.length; i++) {
            let value = secret[i];
            decodeSecret.writeUInt8(i, value);
        }
        let cipher = new Cipher(secret, decodeSecret);
        return cipher;
    }
    buildVersion(size = 2) {
        size = Math.floor(size);
        size = Math.min(size, 4);
        let r = 0;
        for (let i = size - 1; i >= 0; i--) {
            r += Math.floor(Math.random() * 256) << (i * 8);
        }
        return r;
    }
    buildFace() {
        return Math.floor(Math.random() * 256);
    }
    decode(chunk, face = 13) {
        face = face % 256;
        let cs = chunk.map((value) => {
            let nv = this.decodeSecret[value];
            nv = face <= 0 ? nv : nv ^ face;
            return nv;
        });
        return Buffer.from(cs);
    }
    encode(chunk, face = 13) {
        chunk = chunk instanceof Buffer ? chunk : Buffer.from(chunk);
        face = face % 256;
        let cs = chunk.map((value, i) => {
            value = face <= 0 ? value : value ^ face;
            let nv = this.encodeSecret[value];
            return nv;
        });
        return Buffer.from(cs);
    }
}
exports["default"] = Cipher;


/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const xfetch = fetch;
function fetch0(url, options) {
    let controller = new AbortController();
    let signal = controller.signal;
    options = Object.assign({
        timeout: 30 * 1000,
        headers: {},
    }, options, {
        signal: signal,
    });
    let isTimeout = true;
    let startTime = Date.now();
    let pid = setTimeout(() => {
        if (!isTimeout)
            return;
        controller.abort();
    }, options.timeout || 15 * 1000);
    return xfetch(url, options).then((res) => {
        isTimeout = false;
        pid && clearTimeout(pid);
        return res;
    });
}
exports["default"] = fetch0;


/***/ }),

/***/ 905:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = exports.setIntervalx = exports.downloadClick = exports.prefix = exports.suffix = exports.formatTTL = exports.formatSize = exports.md5 = exports.wait = exports.urlPatch = exports.racePromise = exports.inContext = exports.buildMediaId = exports.buildChunkId = exports.buildPeerId = exports.buildSN = void 0;
const md5_1 = __importDefault(__webpack_require__(568));
const nanoid_1 = __webpack_require__(296);
const logger_1 = __importDefault(__webpack_require__(495));
exports.logger = logger_1.default;
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstwuvxyz0123456789ABCDEFGHIJKLMNOPQRSTWUVXYZ", 32);
function buildSN(size = 12) {
    return nanoid(size);
}
exports.buildSN = buildSN;
function buildPeerId(mediaId) {
    mediaId = mediaId || "";
    let peerId = md5(mediaId + "-peer-" + nanoid(32));
    return peerId;
}
exports.buildPeerId = buildPeerId;
function buildChunkId(url) {
    try {
        url = url || "";
        url = url.trim();
        if (/^[a-f0-9]{32}$/i.test(url))
            return url;
        if (true) {
            let info = new URL(url);
            if (/.*\.v\.smtcdns\.com$/i.test(info.hostname)) {
                let keys = ["index", "start", "end"];
                let search = keys.map((key) => key + "=" + (info.searchParams.get(key) || "")).join("&");
                url = "https://xxxxxxx.v.smtcdns.com" + info.pathname.replace(/.*\//, "") + "?" + search;
            }
            else if (/.*\.ott\.cibntv\.net$/.test(info.hostname)) {
                url = "https://xxxxxxx.ott.cibntv.net" + info.pathname;
            }
            else if (/.*\.inter\.71edge\.com$/.test(info.hostname) || /.*cdn\.iqiyi\.com$/) {
                let keys = ["start", "end"];
                let search = keys.map((key) => key + "=" + (info.searchParams.get(key) || "")).join("&");
                url = "https://xxxxxxx.iqiyi.com" + info.pathname + "?" + search;
            }
            else {}
        }
        let urlId = md5(url);
        return urlId;
    }
    catch (err) {
        console.warn("build chunkId error", err.message, url);
    }
    return "";
}
exports.buildChunkId = buildChunkId;
function buildMediaId(url) {
    url = url || "";
    url = url.trim();
    if (/^[a-f0-9]{32}$/i.test(url))
        return url;
    try {
        if (/^https?:/i.test(url)) {
            let info = new URL(url);
            if (/\.youtube\.com$/i.test(info.hostname)) {
                url = "https://www.youtube.com/watch/" + info.searchParams.get("v") + ".html";
            }
            else {
                url = url.replace(/(\?|#).*/g, "");
            }
        }
        else {
            url = location.href;
        }
    }
    catch (err) {
        url = location.href;
    }
    url = url.trim();
    let urlId = md5(url);
    return urlId;
}
exports.buildMediaId = buildMediaId;
function inContext() {
    return !!chrome.runtime && !!chrome.storage;
}
exports.inContext = inContext;
function racePromise(array) {
    return new Promise((resolve, reject) => {
        let isCallback = false;
        let pid = setTimeout(() => {
            isCallback = true;
            resolve(undefined);
        }, 3 * 60 * 1000);
        array.forEach(async (p) => {
            let value = await p.then((r) => r).catch((e) => undefined);
            if (isCallback)
                return;
            if (value != undefined && value != null) {
                isCallback = true;
                clearTimeout(pid);
                resolve(value);
            }
        });
    });
}
exports.racePromise = racePromise;
function urlPatch(url) {
    try {
        if (/^\/\//i.test(url)) {
            return location.protocol + url;
        }
        else if (/^\/[a-z0-9_-]/.test(url)) {
            return location.origin + url;
        }
    }
    catch (err) { }
    return url;
}
exports.urlPatch = urlPatch;
async function wait(ttl = 1) {
    return new Promise((resolve) => setTimeout(() => resolve(), ttl));
}
exports.wait = wait;
function md5(str) {
    return (0, md5_1.default)(str).toLowerCase();
}
exports.md5 = md5;
function formatSize(size) {
    if (size > 1024 * 1024 * 1024) {
        return Math.ceil((size / 1024 / 1024 / 1024) * 100) / 100 + "G";
    }
    else if (size > 1024 * 1024) {
        return Math.ceil((size / 1024 / 1024) * 100) / 100 + "M";
    }
    else if (size > 1024) {
        return Math.ceil((size / 1024) * 100) / 100 + "K";
    }
    return size + "B";
}
exports.formatSize = formatSize;
function formatTTL(ttl) {
    if (ttl < 1000)
        return ttl + "ms";
    ttl = Math.ceil(ttl / 1000);
    let day = Math.floor(ttl / (24 * 60 * 60));
    let hour = Math.floor((ttl % (24 * 60 * 60)) / (60 * 60));
    let min = Math.floor((ttl % (60 * 60)) / 60);
    let sec = ttl % 60;
    if (day > 0)
        return `${day}D:${hour}H:${min}m:${sec}s`;
    if (hour > 0)
        return `${hour}H:${min}m:${sec}s`;
    if (min > 0)
        return `${min}m:${sec}s`;
    return `${sec}s`;
}
exports.formatTTL = formatTTL;
function suffix(url) {
    try {
        if (typeof url != "string")
            return "";
        let dom = new URL(url);
        let suffix = dom.pathname
            .replace(/[\?#].*$/, "")
            .replace(/^.*\//g, "")
            .toLowerCase();
        suffix = suffix.includes(".") ? suffix.replace(/^.*\./g, "") : "";
        if (!/^[a-z0-9]+$/i.test(suffix))
            return "";
        return suffix;
    }
    catch (err) { }
    return "";
}
exports.suffix = suffix;
function prefix(url) {
    if (typeof url != "string")
        return "";
    let prefix = url.replace(/\?.*$/, "").replace(/\/[^\/\?]+\.[a-z0-9]+$/, "");
    prefix = prefix.replace(/[\/]+$/, "");
    return prefix;
}
exports.prefix = prefix;
function downloadClick(buffers) {
    if (!buffers || buffers.length < 1)
        return;
    var blob = new Blob(buffers.map((b) => b.buffer), { type: "video/mp4" });
    console.info("download", blob);
    var a = document.createElement("a");
    var url = URL.createObjectURL(blob);
    var filename = `${document.title}.mp4`;
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    console.info("click download", url);
}
exports.downloadClick = downloadClick;
class Interval {
    constructor() {
        this.isClose = false;
    }
    handle(handle, ttl) {
        this.pid = setTimeout(async () => {
            if (this.isClose)
                return;
            try {
                if (handle.constructor.name === "AsyncFunction") {
                    let res = handle();
                    res.catch && res.catch((err) => console.error(err));
                }
                else {
                    handle();
                }
            }
            catch (err) {
                console.error(err);
            }
            this.handle(handle, ttl);
        }, ttl);
        return this;
    }
    close() {
        this.isClose = true;
        clearTimeout(this.pid);
    }
}
function setIntervalx(handle, ttl) {
    let it = new Interval();
    it.handle(handle, ttl);
    return it;
}
exports.setIntervalx = setIntervalx;
const util = {
    buildChunkId,
    buildMediaId,
    md5,
};
exports["default"] = util;


/***/ }),

/***/ 495:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(484));
const config_1 = __importDefault(__webpack_require__(248));
const dateFormate = "YYYY-MM-DD HH:mm:ss";
class Logger {
    info(...args) {
        if (config_1.default.logLevel >= 2)
            console.info((0, dayjs_1.default)().format(dateFormate), ...args);
    }
    debug(...args) {
        if (config_1.default.logLevel >= 4)
            console.debug((0, dayjs_1.default)().format(dateFormate), ...args);
    }
    log(...args) {
        if (config_1.default.logLevel >= 3)
            console.log((0, dayjs_1.default)().format(dateFormate), ...args);
    }
    warn(...args) {
        if (config_1.default.logLevel >= 1)
            console.warn((0, dayjs_1.default)().format(dateFormate), ...args);
    }
    error(...args) {
        console.error((0, dayjs_1.default)().format(dateFormate), ...args);
    }
}
const logger = new Logger();
exports["default"] = logger;


/***/ }),

/***/ 344:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendToPage = void 0;
const util = __importStar(__webpack_require__(905));
const chrome_1 = __importDefault(__webpack_require__(90));
const inPopup = !/^https?:\/\//i.test(location.href);
class Request {
    constructor() {
        this.tasks = new Map();
        let tasks = this.tasks;
        window.addEventListener("message", (event) => {
            let data = event.data;
            if (data.cmd == "ivideos.response") {
                let sid = data.sid;
                let handle = tasks.get(sid);
                tasks.delete(sid);
                handle && handle(data.data);
            }
        });
    }
    request(router, data, callback, origin = "/") {
        var _a;
        if (inPopup && chrome_1.default.tabs) {
            (_a = chrome_1.default.tabs) === null || _a === void 0 ? void 0 : _a.getCurrent((tab) => {
                if (!tab)
                    return;
                tab.id &&
                    chrome_1.default.tabs.sendMessage(tab.id, {
                        router: router,
                        data: data,
                        headers: {},
                    }, (res) => {
                        callback && callback(res);
                    });
            });
        }
        else {
            let tasks = this.tasks;
            let sid = util.buildSN(12);
            if (callback) {
                tasks.set(sid, (data) => {
                    tasks.delete(sid);
                    callback && callback(data);
                });
            }
            let refer = location.href.replace(/[#].*$/, "");
            postMessage({ sid: sid, router: router, data: data, headers: { refer } }, origin);
            if (window != window.parent) {
                setTimeout(() => window.parent.postMessage({ sid: sid, router: router, data: data, headers: { refer } }, origin), 100);
                if (window.parent != window.top) {
                    setTimeout(() => { var _a; return (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage({ sid: sid, router: router, data: data, headers: { refer } }, origin); }, 200);
                }
            }
        }
    }
}
const request = new Request();
function sendToPage(router, data, callback, origin) {
    request.request(router, data, callback, origin);
}
exports.sendToPage = sendToPage;
const msg = {
    getInfo(callback) {
        sendToPage("ivideos.info", {}, callback, "*");
    },
    getDeviceInfo(callback) {
        sendToPage("ivideos.deviceInfo", {}, (res) => {
            if (res && res.deviceId) {
                callback && callback(res);
            }
            else {
                setTimeout(() => {
                    msg.getDeviceInfo(callback);
                }, 200);
            }
        }, "/");
    },
};
exports["default"] = msg;


/***/ }),

/***/ 674:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildSN = void 0;
const mixpanel_browser_1 = __importDefault(__webpack_require__(891));
const nanoid_1 = __webpack_require__(296);
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const util = __importStar(__webpack_require__(905));
const chrome_1 = __importDefault(__webpack_require__(90));
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstwuvxyz0123456789ABCDEFGHIJKLMNOPQRSTWUVXYZ", 32);
function buildSN(size = 12) {
    return nanoid(size);
}
exports.buildSN = buildSN;
mixpanel_browser_1.default.init("17bbce2e5b921333cec9ae737232b638", { debug: false, ip: true, ignore_dnt: true });
const env = {"NODE_ENV":"production","appVersion":"1.4.7"} || {};
class Stats extends eventemitter3_1.default {
    constructor() {
        var _a, _b;
        super();
        this.appVersion = env.appVersion || "";
        let _this = this;
        this._ip = ((_a = globalThis.localStorage) === null || _a === void 0 ? void 0 : _a.getItem("ip")) || "";
        try {
            if (util.inContext()) {
                (_b = chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.runtime) === null || _b === void 0 ? void 0 : _b.sendMessage({ router: "/deviceInfo", data: {} }, (res) => {
                    if (!res || !res.deviceId)
                        return;
                    _this.deviceId = res.deviceId;
                    _this.emit("ready", res);
                });
            }
        }
        catch (err) { }
        this.once("ready", (res) => {
            mixpanel_browser_1.default.identify(res.deviceId);
        });
    }
    set ip(ip) {
        var _a;
        this._ip = ip;
        (_a = globalThis.localStorage) === null || _a === void 0 ? void 0 : _a.setItem("ip", ip);
    }
    get ip() {
        return this._ip;
    }
    setAppVersion(appVersion) {
        this.appVersion = appVersion;
    }
    register(uid) {
        if (!uid)
            return;
        this.deviceId = uid;
        this.emit("ready", { deviceId: uid });
    }
    play(data) {
        let info = new URL(data.url);
        data.host = info.host;
        this.track("play", data);
    }
    open(data) {
        data = Object.assign({}, data);
        this.track("open", Object.assign({ url: location.href, host: location.hostname, title: document.title, source: "plugin" }, data));
    }
    install(data) {
        if (this.deviceId) {
            this.track("install", Object.assign(Object.assign({}, data), { appVersion: this.appVersion }));
        }
        else {
            this.once("ready", () => this.track("install", Object.assign(Object.assign({}, data), { appVersion: this.appVersion })));
        }
    }
    installSW() {
        this.track("installSW", { appVersion: this.appVersion });
    }
    startup() {
        if (this.deviceId) {
            this.track("startup", { appVersion: this.appVersion });
        }
        else {
            this.once("ready", () => this.track("startup", { appVersion: this.appVersion }));
        }
    }
    track(name, data) {
        mixpanel_browser_1.default.track(name, Object.assign(Object.assign({}, data), { appVersion: this.appVersion, t: Date.now(), language: navigator.language, clientXp: this.ip }));
    }
}
const stats = new Stats();
exports["default"] = stats;


/***/ }),

/***/ 678:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "delMany": () => (/* binding */ delMany),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getMany": () => (/* binding */ getMany),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "promisifyRequest": () => (/* binding */ promisifyRequest),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "setMany": () => (/* binding */ setMany),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "values": () => (/* binding */ values)
/* harmony export */ });
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}




/***/ }),

/***/ 296:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "customAlphabet": () => (/* binding */ customAlphabet),
  "customRandom": () => (/* binding */ customRandom),
  "nanoid": () => (/* binding */ nanoid),
  "random": () => (/* binding */ random),
  "urlAlphabet": () => (/* reexport */ urlAlphabet)
});

;// CONCATENATED MODULE: ./node_modules/nanoid/url-alphabet/index.js
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


;// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__(365);
/******/ 	ivideos = __webpack_exports__;
/******/ 	
/******/ })()
;
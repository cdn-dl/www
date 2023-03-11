var ivideos;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 497:
/***/ ((module) => {

(()=>{var e={9742:(e,t)=>{"use strict";t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,o=c(e),s=o[0],a=o[1],u=new i(function(e,t,r){return 3*(t+r)/4-r}(0,s,a)),l=0,h=a>0?s-4:s;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[l++]=255&t);1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t);return u},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=16383,a=0,c=n-i;a<c;a+=s)o.push(u(e,a,a+s>c?c:a+s));1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=o.length;s<a;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var i,o,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:(e,t,r)=>{"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */const n=r(9742),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){+e!=e&&(e=0);return c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const s=2147483647;function a(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|g(e,t);let n=a(r);const i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Y(e,Uint8Array)){const t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Y(e,ArrayBuffer)||e&&Y(e.buffer,ArrayBuffer))return f(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(Y(e,SharedArrayBuffer)||e&&Y(e.buffer,SharedArrayBuffer)))return f(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const i=function(e){if(c.isBuffer(e)){const t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||G(e.length)?a(0):d(e);if("Buffer"===e.type&&Array.isArray(e.data))return d(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return l(e),a(e<0?0:0|p(e))}function d(e){const t=e.length<0?0:0|p(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function f(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function p(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function g(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Y(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return Q(e).length;default:if(i)return n?-1:V(e).length;t=(""+t).toLowerCase(),i=!0}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return M(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return O(this,t,r);case"latin1":case"binary":return B(this,t,r);case"base64":return C(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function _(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),G(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,i){let o,s=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(u(e,o)===u(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===c)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+c>a&&(r=a-c),o=r;o>=0;o--){let r=!0;for(let n=0;n<c;n++)if(u(e,o+n)!==u(t,n)){r=!1;break}if(r)return o}return-1}function v(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=t.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(G(n))return s;e[r+s]=n}return s}function w(e,t,r,n){return X(V(t,e.length-r),e,r,n)}function k(e,t,r,n){return X(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function T(e,t,r,n){return X(Q(t),e,r,n)}function S(e,t,r,n){return X(function(e,t){let r,n,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function C(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:r=e[i+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(o=c));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){const t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=P));return r}(n)}t.kMaxLength=s,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return h(e)},c.allocUnsafeSlow=function(e){return h(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(Y(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),Y(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(Y(t,Uint8Array))i+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},c.byteLength=g,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):y.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(c.prototype[o]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,i){if(Y(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(n,i),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){o=u[e],s=l[e];break}return o<s?-1:s<o?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return _(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return _(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return k(this,e,t,r);case"base64":return T(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const P=4096;function O(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function B(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function M(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=K[e[n]];return i}function I(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function R(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function A(e,t,r,n,i,o){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function D(e,t,r,n,i){W(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function x(e,t,r,n,i){W(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function L(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,n,o){return t=+t,r>>>=0,o||L(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function U(e,t,r,n,o){return t=+t,r>>>=0,o||L(e,0,r,8),i.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=J((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),c.prototype.readBigUInt64BE=J((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=J((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=J((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||R(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||R(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||R(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||R(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){A(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){A(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=J((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=J((function(e,t=0){return x(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);A(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);A(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||A(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=J((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=J((function(e,t=0){return x(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return U(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return U(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const o=c.isBuffer(e)?e:c.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};const $={};function F(e,t,r){$[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function N(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function W(e,t,r,n,i,o){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new $.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){q(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(n,i,o)}function q(e,t){if("number"!=typeof e)throw new $.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw q(e,r),new $.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new $.ERR_BUFFER_OUT_OF_BOUNDS;throw new $.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}F("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),F("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),F("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=N(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=N(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const z=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function Q(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function X(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function Y(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function G(e){return e!=e}const K=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function J(e){return"undefined"==typeof BigInt?Z:e}function Z(){throw new Error("BigInt not supported")}},487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=t},1012:e=>{var t,r;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var i=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?r.push(t.charAt(i>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<e.length;i=++n%4)0!=i&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(n))>>>6-2*i);return r}},e.exports=r},6729:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new i(n,o||e,s),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function a(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),a.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},a.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},a.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},a.prototype.emit=function(e,t,n,i,o,s){var a=r?r+e:e;if(!this._events[a])return!1;var c,u,l=this._events[a],h=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),h){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,i),!0;case 5:return l.fn.call(l.context,t,n,i,o),!0;case 6:return l.fn.call(l.context,t,n,i,o,s),!0}for(u=1,c=new Array(h-1);u<h;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var d,f=l.length;for(u=0;u<f;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),h){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,i);break;default:if(!c)for(d=1,c=new Array(h-1);d<h;d++)c[d-1]=arguments[d];l[u].fn.apply(l[u].context,c)}}return!0},a.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},a.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},a.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return s(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||i&&!a.once||n&&a.context!==n||s(this,o);else{for(var c=0,u=[],l=a.length;c<l;c++)(a[c].fn!==t||i&&!a[c].once||n&&a[c].context!==n)&&u.push(a[c]);u.length?this._events[o]=1===u.length?u[0]:u:s(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,e.exports=a},645:(e,t)=>{
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,c=(1<<a)-1,u=c>>1,l=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+h],h+=d,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+e[t+h],h+=d,l-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),o-=u}return(f?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var s,a,c,u=8*o-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(t*c-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;e[r+f]=255&s,f+=p,s/=256,u-=8);e[r+f-p]|=128*g}},8738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},2568:(e,t,r)=>{var n,i,o,s,a;n=r(1012),i=r(487).utf8,o=r(8738),s=r(487).bin,(a=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?s.stringToBytes(e):i.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var r=n.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,h=-1732584194,d=271733878,f=0;f<r.length;f++)r[f]=16711935&(r[f]<<8|r[f]>>>24)|4278255360&(r[f]<<24|r[f]>>>8);r[c>>>5]|=128<<c%32,r[14+(c+64>>>9<<4)]=c;var p=a._ff,g=a._gg,y=a._hh,m=a._ii;for(f=0;f<r.length;f+=16){var _=u,b=l,v=h,w=d;u=p(u,l,h,d,r[f+0],7,-680876936),d=p(d,u,l,h,r[f+1],12,-389564586),h=p(h,d,u,l,r[f+2],17,606105819),l=p(l,h,d,u,r[f+3],22,-1044525330),u=p(u,l,h,d,r[f+4],7,-176418897),d=p(d,u,l,h,r[f+5],12,1200080426),h=p(h,d,u,l,r[f+6],17,-1473231341),l=p(l,h,d,u,r[f+7],22,-45705983),u=p(u,l,h,d,r[f+8],7,1770035416),d=p(d,u,l,h,r[f+9],12,-1958414417),h=p(h,d,u,l,r[f+10],17,-42063),l=p(l,h,d,u,r[f+11],22,-1990404162),u=p(u,l,h,d,r[f+12],7,1804603682),d=p(d,u,l,h,r[f+13],12,-40341101),h=p(h,d,u,l,r[f+14],17,-1502002290),u=g(u,l=p(l,h,d,u,r[f+15],22,1236535329),h,d,r[f+1],5,-165796510),d=g(d,u,l,h,r[f+6],9,-1069501632),h=g(h,d,u,l,r[f+11],14,643717713),l=g(l,h,d,u,r[f+0],20,-373897302),u=g(u,l,h,d,r[f+5],5,-701558691),d=g(d,u,l,h,r[f+10],9,38016083),h=g(h,d,u,l,r[f+15],14,-660478335),l=g(l,h,d,u,r[f+4],20,-405537848),u=g(u,l,h,d,r[f+9],5,568446438),d=g(d,u,l,h,r[f+14],9,-1019803690),h=g(h,d,u,l,r[f+3],14,-187363961),l=g(l,h,d,u,r[f+8],20,1163531501),u=g(u,l,h,d,r[f+13],5,-1444681467),d=g(d,u,l,h,r[f+2],9,-51403784),h=g(h,d,u,l,r[f+7],14,1735328473),u=y(u,l=g(l,h,d,u,r[f+12],20,-1926607734),h,d,r[f+5],4,-378558),d=y(d,u,l,h,r[f+8],11,-2022574463),h=y(h,d,u,l,r[f+11],16,1839030562),l=y(l,h,d,u,r[f+14],23,-35309556),u=y(u,l,h,d,r[f+1],4,-1530992060),d=y(d,u,l,h,r[f+4],11,1272893353),h=y(h,d,u,l,r[f+7],16,-155497632),l=y(l,h,d,u,r[f+10],23,-1094730640),u=y(u,l,h,d,r[f+13],4,681279174),d=y(d,u,l,h,r[f+0],11,-358537222),h=y(h,d,u,l,r[f+3],16,-722521979),l=y(l,h,d,u,r[f+6],23,76029189),u=y(u,l,h,d,r[f+9],4,-640364487),d=y(d,u,l,h,r[f+12],11,-421815835),h=y(h,d,u,l,r[f+15],16,530742520),u=m(u,l=y(l,h,d,u,r[f+2],23,-995338651),h,d,r[f+0],6,-198630844),d=m(d,u,l,h,r[f+7],10,1126891415),h=m(h,d,u,l,r[f+14],15,-1416354905),l=m(l,h,d,u,r[f+5],21,-57434055),u=m(u,l,h,d,r[f+12],6,1700485571),d=m(d,u,l,h,r[f+3],10,-1894986606),h=m(h,d,u,l,r[f+10],15,-1051523),l=m(l,h,d,u,r[f+1],21,-2054922799),u=m(u,l,h,d,r[f+8],6,1873313359),d=m(d,u,l,h,r[f+15],10,-30611744),h=m(h,d,u,l,r[f+6],15,-1560198380),l=m(l,h,d,u,r[f+13],21,1309151649),u=m(u,l,h,d,r[f+4],6,-145523070),d=m(d,u,l,h,r[f+11],10,-1120210379),h=m(h,d,u,l,r[f+2],15,718787259),l=m(l,h,d,u,r[f+9],21,-343485551),u=u+_>>>0,l=l+b>>>0,h=h+v>>>0,d=d+w>>>0}return n.endian([u,l,h,d])})._ff=function(e,t,r,n,i,o,s){var a=e+(t&r|~t&n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._gg=function(e,t,r,n,i,o,s){var a=e+(t&n|r&~n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._hh=function(e,t,r,n,i,o,s){var a=e+(t^r^n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._ii=function(e,t,r,n,i,o,s){var a=e+(r^(t|~n))+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(a(e,t));return t&&t.asBytes?r:t&&t.asString?s.bytesToString(r):n.bytesToHex(r)}},1991:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(3607));i(r(3607),t),t.default=s.default},8376:function(e,t,r){"use strict";var n,i,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.deviceId=t.buildSN=void 0;const s=o(r(2568)),a=(0,r(4296).customAlphabet)("abcdefghijklmnopqrstwuvxyz0123456789ABCDEFGHIJKLMNOPQRSTWUVXYZ",32);function c(e=8){return a(e)}t.buildSN=c;const u=globalThis.navigator||{};const l=(null===(n=globalThis.localStorage)||void 0===n?void 0:n.getItem("did"))||function(){var e,t;let r=[u.platform,u.appName,u.appVersion,u.userAgent,u.product,u.productSub,u.vendor,u.vendorSub,u.appCodeName,u.deviceMemory||0,u.language,u.languages.join("-")];for(let t=0;t<(null===(e=u.plugins)||void 0===e?void 0:e.length);t++){let e=u.plugins[t];r.push(e.name+"-"+e.filename)}for(let e=0;e<(null===(t=u.mimeTypes)||void 0===t?void 0:t.length);e++){let t=u.mimeTypes[e];r.push(t.suffixes+"-"+t.type)}return(0,s.default)(r.join("\r\n")).toLowerCase()+"-"+c(8)}();function h(){return l}null===(i=globalThis.localStorage)||void 0===i||i.setItem("did",l),t.deviceId=h,t.default=h},4452:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetch=void 0;const r=globalThis.fetch;globalThis.Response;async function n(e,t){let n=new AbortController,i=n.signal,o=e instanceof Request?e.url:e;if(t=t||{},e instanceof Request)for(let r in e)t[r]=e[r];delete t.url;let s=t.timeout||15e3;t.signal=i;let a=!0,c=Date.now(),u=setTimeout((()=>{a&&n.abort()}),s||15e3),l=await r(o,t).then((e=>(a=!1,u&&clearTimeout(u),e)));return l.abort=()=>{null==n||n.abort()},l.ttl=Date.now()-c,l}t.fetch=n,e.exports=n,t.default=n},2517:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineProperty=t.Response=void 0;class r extends globalThis.Response{constructor(e,t){super(e,t),this._controller=null==t?void 0:t.controller,this._init=t,t&&this.setProperty(t,this);let r=(null==t?void 0:t.headers)||new Headers;if(r instanceof Headers)r.forEach(((e,t)=>this.headers.set(t,e)));else for(let e in r)this.headers.set(e,r[e])}clone(){let e=super.clone();return this.setProperty(this,e),new r(e.body,this._init)}abort(){var e;null===(e=this._controller)||void 0===e||e.abort()}setProperty(e,t){try{!t.url&&e.url&&n(t,"url",e.url),e.ttl&&(t.ttl=e.ttl),t._controller=e._controller}catch(e){}}}function n(e,t,r){try{Object.defineProperty(e,t,{value:r})}catch(e){}}t.Response=r,t.defineProperty=n,e.exports=r,t.default=r},5237:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;const o=i(r(6390));class s extends o.default{constructor(){super()}connect(e,t){return this}async write(e){return this}async end(e){return this}async read(e){return n.alloc(0)}destroy(e){this.emit("close")}}t.Socket=s,t.default=s,e.exports=s},5257:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(5237)),a=o(r(4452));i(r(4452),t);const c=o(r(2517)),u=r(8376),l={File:globalThis.File,Blob:globalThis.Blob,FormData:globalThis.FormData,fetch:a.default,deviceId:u.deviceId,AbortController:globalThis.AbortController,Request:globalThis.Request,Response:c.default,RequestInit:globalThis.RequestInit,Headers:globalThis.Headers,ReadableStream:globalThis.ReadableStream,TransformStream:globalThis.TransformStream,WritableStreamDefaultWriter:globalThis.WritableStreamDefaultWriter,ReadableStreamDefaultReader:globalThis.ReadableStreamDefaultReader,Socket:s.default,WebSocket:globalThis.WebSocket};e.exports=l,t.default=l},2868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r={RTCPeerConnection:globalThis.RTCPeerConnection,RTCDataChannel:globalThis.RTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate,RTCOfferOptions:globalThis.RTCOfferOptions};e.exports=r,t.default=r},1719:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=globalThis.WebSocket;e.exports=r,t.default=r},6789:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(2793),t),i(r(1890),t);const o=r(8764);i(r(5257),t),globalThis==globalThis.window&&(globalThis.Buffer=o.Buffer)},2793:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCOfferOptions=t.RTCIceCandidate=t.RTCSessionDescription=t.RTCDataChannel=t.RTCPeerConnection=void 0;const i=n(r(2868));t.RTCPeerConnection=i.default.RTCPeerConnection,t.RTCDataChannel=i.default.RTCDataChannel,t.RTCSessionDescription=i.default.RTCSessionDescription,t.RTCIceCandidate=i.default.RTCIceCandidate,t.RTCOfferOptions=i.default.RTCOfferOptions},1890:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WebSocket=t.inNode=t.inBrowser=void 0;const i=n(r(1719)),o=n(r(6729));function s(){return globalThis===globalThis.window}t.inBrowser=s,t.inNode=function(){return!s};class a extends o.default{constructor(e){super(),this.websocket=new i.default(e),this.websocket.addEventListener("message",(e=>this.emit("data",e.data))),this.websocket.addEventListener("close",(()=>this.emit("close"))),this.websocket.addEventListener("error",(e=>this.emit("error",new Error(e.data)))),this.websocket.addEventListener("open",(()=>this.emit("open")))}send(e){this.websocket.send(e)}close(){try{if(!this.websocket)return;this.websocket.removeAllListeners("data"),this.websocket.removeAllListeners("open"),this.websocket.removeAllListeners("error"),this.websocket.removeAllListeners("close"),this.websocket.close()}catch(e){}}get readyState(){return this.websocket.readyState}get binaryType(){return this.websocket.binaryType}get bufferedAmount(){return this.websocket.bufferedAmount}get extensions(){return this.websocket.extensions}get protocol(){return this.websocket.protocol}get url(){return this.websocket.url}get OPEN(){return this.websocket.OPEN}}t.WebSocket=a,t.default=a},8913:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=globalThis.process,n=!!(r&&r.platform&&r.version&&globalThis.Buffer&&r.pid);t.default={peerVersion:"1.4.6",mtu:16300,inBrowser:!n&&globalThis===globalThis.window&&!!globalThis.navigator}},9872:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Accept=t.CMD=void 0;const i=n(r(6729));!function(e){e[e.HEARTBEAT=0]="HEARTBEAT",e[e.CLOSE=1]="CLOSE",e[e.RESET=2]="RESET",e[e.RESPONSE=11]="RESPONSE"}(t.CMD||(t.CMD={}));class o extends i.default{constructor(e){super(),this.options=Object.assign({},e)}get acceptAuth(){return this.options.auth}async connect(e,t,r,n,i){}splitPasswodArgs(e){let t=e.split("_");return{password:t[0]||"",args:t.slice(1)||[]}}}t.Accept=o,t.default=o},651:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseHeader=t.Connect=void 0;const i=n(r(8913));class o{constructor(){}static get(e){if("string"==typeof e&&["ws","xhr"].includes(e))return o.connects.get(e);if(e.length<1)return;let t=o.getProtocol(e.toString());return t?o.connects.get(t):void 0}static has(e){return o.connects.has(e)}static register(e){o.connects.set(e.protocol,e)}static removeAll(){o.connects.clear()}static getProtocol(e){if(i.default.inBrowser){let t=s(e);if(function(e,t){return/^(GET)/i.test(e)&&"websocket"==t.upgrade&&"Upgrade"==t.connection}(e,t))return"ws";if(function(e,t){return/^(GET|POST|HEAD|OPTIONS|PUT|DELETE|TRACE)/i.test(e)&&"websocket"!=t.upgrade&&"Upgrade"!=t.connection}(e,t))return"xhr";throw new Error("no support")}return"direct"}}function s(e){let t=e.split("\r\n"),r={};return t.forEach((e=>{let t=e.split(": ");if(t.length<2)return;let n=t[0]||"",i=t[1]||"";r[n.trim().toLowerCase()]=i.trim()})),r}t.Connect=o,o.connects=new Map,t.parseHeader=s,t.default=o},5650:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AcceptFactor=t.Accept=void 0;const i=n(r(6729)),o=r(2689),s=r(9872);Object.defineProperty(t,"Accept",{enumerable:!0,get:function(){return s.Accept}});const a=n(r(651)),c=r(2052),u=r(1890),l=r(2488),h=r(1497);class d extends i.default{constructor(e){super(),this.ipeer=e,this.accepts=new Map;let t=new o.WrtcAccept({timeout:e.options.acceptTimeout||3e5,auth:async({username:t,password:r})=>!e.username||e.username==t&&e.password==r});this.register(t),(0,u.inBrowser)()?(a.default.has("ws")||a.default.register(new l.WSConnect),a.default.has("xhr")||a.default.register(new h.XHRConnect)):a.default.register(new c.DirectConnect)}register(e){if(this.accepts.has(e.protocol)){let t=this.accepts.get(e.protocol);null==t||t.removeAllListeners("read"),null==t||t.removeAllListeners("write")}else e.options=Object.assign({},e.options);return this.accepts.set(e.protocol,e),this}remove(e){this.accepts.delete(e)}registerConnect(e){a.default.register(e)}async accept(e){let t=await e.read(1e4),r=this.accepts.values(),n=!1;for(let i of r)if(n=await i.isAccept(e,t),n)return this.emit("accept",{handle:!0,peer:e.peer,socket:e}),void i.handle(e,t);n||this.emit("accept",{handle:!1,peer:e.peer,socket:e})}}t.AcceptFactor=d,d.WrtcAccept=o.WrtcAccept,t.default=d},2052:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DirectSocket=t.DirectConnect=void 0;const o=i(r(651)),s=i(r(6390)),a=r(6789);class c extends o.default{constructor(){super(),this.protocol="direct"}connect(e,t){let r=new u;r.connect(e,(()=>{t&&t(r)}))}}t.DirectConnect=c;class u extends s.default{constructor(){super(),this.socket=new a.Socket,this.protocol="direct"}connect(e,t){let r=!1,n=setTimeout((()=>!r&&this.socket.emit("timeout")),5e3);return this.socket.connect(e.port,e.host,(()=>{clearTimeout(n),r=!0,t&&t(this),this.emit("open")})),this.socket.on("data",(e=>{1!=e.byteLength&&(this.emit("read",{size:e.byteLength}),this.emit("data",e))})),this.socket.once("close",(()=>this.emit("close"))),this.socket.once("error",(e=>this.emit("error",e))),this.socket.once("timeout",(()=>this.emit("error",new Error("timeout")))),this}async write(e){return this.socket.write(e),this.emit("write",{size:e.byteLength}),this}async end(e){return e&&this.socket.end(e),this.socket.destroy(),this}async read(e=0){return new Promise((t=>{let r,i=!1;function o(e){r&&clearTimeout(r),i||(i=!0,t(e))}e>0&&(r=setTimeout((()=>{this.removeListener("data",o),i||(i=!0,t(n.alloc(0)))}),e)),this.once("data",o)}))}destroy(e){return this.socket.destroy(e),this.removeAllListeners(),this}}t.DirectSocket=u},2689:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.buildConnectChunk=t.buildHttpProxyAuth=t.parseHttpUser=t.WrtcAccept=void 0;const a=s(r(9872)),c=s(r(651));class u extends a.default{constructor(e){super(e),this.acceptList=[],this.protocol="wrtc"}on(e,t){return"reset"==e?(this.onReset=t,this):(super.on(e,t),this)}once(e,t){return"reset"==e?(this.onReset=t,this):(super.once(e,t),this)}addAcceptSocket(e){this.acceptList.findIndex((t=>t==e))<0&&this.acceptList.push(e),e.once("close",(()=>{let t=this.acceptList.findIndex((t=>t==e));this.acceptList.splice(t,1)}))}async isAccept(e,t){return this.isSupport(t.toString())}async handle(e,t){var r;e.setTimeout(this.options.timeout||3e5),this.addAcceptSocket(e.socket);let i=t.toString(),o=(0,c.parseHeader)(i),s=null===(r=o.host)||void 0===r?void 0:r.split(":"),u=s[0],h=parseInt(s[1])||80;if(!u)return void e.write(n.from("WRTC-WEB/1.0 500 badheader"),!0);let d=l(o["proxy-authorization"]);if(!await this.acceptAuth({username:d.username,password:d.password,protocol:this.protocol}))return void e.write("WRTC/1.0 407 authfail",!0);await e.write(n.from("WRTC-WEB/1.0 200 Connection Established\r\n\r\n"));let f=Date.now(),p=await e.read(5e3);this.emit("accept",{chunk:p,ttl:Date.now()-f,id:e.peer});let g=c.default.get(p);if(!g)return e.destroy(new Error("nosupport protocol"));const y=t=>{e.once("close",(()=>t.end())),e.once("error",(()=>e.destroy())),t.once("close",(()=>{e.write(n.from([a.CMD.CLOSE]))})),t.once("error",(e=>t.destroy(e))),e.on("data",(async r=>{if(1!=r.byteLength)try{t.write(r)}catch(t){e.emit("error",t)}else{switch(r[0]){case a.CMD.CLOSE:return t.removeAllListeners(),void t.destroy();case a.CMD.RESET:return t.removeAllListeners(),t.destroy(),e.removeAllListeners(),await e.write(n.from([a.CMD.RESPONSE])),void(this.onReset&&this.onReset(e.clone()))}}})),t.on("data",(t=>{e.write(t).catch((e=>{}))}))};if(/^(ws|xhr)$/i.test(g.protocol)){let e=(0,c.parseHeader)(p.toString()),t=p.toString().split("\r\n")[0].split(" "),r=t[0],i=t[1];t[2];g.connect({url:i,host:u,port:h,init:{method:r,headers:e}},(e=>{if(y(e),/^(POST|PUT)$/i.test(r)){let t=p.toString().split("\r\n\r\n")[1];t&&t.length>0&&e.write(n.from(t))}}))}else g.connect({host:u,port:h},(e=>{y(e),e.write(p)}));this.on("reset",(async e=>{let t=await e.read(3e3);t.byteLength<=1?e.destroy():(this.removeListener("reset"),this.handle(e,t))}))}isSupport(e){return/^WRTC\//i.test(e)}}function l(e){try{let t=(e=e||"").trim().split(" ")[1]||"",r=n.from(t,"base64").toString().split(":"),i=r[0]||"",o=function(e){let t=e.split("_");return{password:t[0]||"",args:t.slice(1)||[]}}(r[1]||"");return{username:i||"",password:o.password||"",args:o.args||[]}}catch(e){return{username:"",password:"",args:[]}}}function h(e){let t=e.password||"";return e.username+":"+t}t.WrtcAccept=u,t.parseHttpUser=l,t.buildHttpProxyAuth=h,t.buildConnectChunk=function(e){let t=!!e.username,r=n.from(h({username:e.username||"",password:e.password||""})).toString("base64");return n.concat([n.from(`CONNECT ${e.host}:${e.port} HTTP/1.1\r\n`),n.from(`Host: ${e.host}:${e.port}\r\n`),n.from("Proxy-Connection: keep-alive\r\n"),n.from(t?`Proxy-Authorization: Basic ${r}\r\n`:""),n.from("\r\n")])}},2488:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WSSocket=t.WSConnect=void 0;const o=i(r(651)),s=i(r(6390)),a=r(6789);class c extends o.default{constructor(){super(),this.protocol="ws"}connect(e,t){let r=new u;r.connect(e,(()=>{t&&t(r)}))}}t.WSConnect=c;class u extends s.default{constructor(){super(),this.protocol="ws"}connect(e,t){let r=e.url||"",n=!1;this.socket=new a.WebSocket(r);let i=setTimeout((()=>!n&&this.socket.emit("error",new Error("timeout"))),5e3);return this.socket.once("open",(()=>{clearTimeout(i),n=!0,t&&t(this),this.emit("open")})),this.socket.on("data",(e=>{1!=e.byteLength&&(this.emit("read",{size:e.byteLength}),this.emit("data",e))})),this.socket.once("close",(()=>this.emit("close"))),this.socket.once("error",(e=>this.emit("error",e))),this}async write(e){return this.socket.send(e),this.emit("write",{size:e.byteLength}),this}async end(e){return e&&this.socket.send(e),this.socket.close(),this}async read(e=0){return new Promise((t=>{let r,i=!1;function o(e){r&&clearTimeout(r),i||(i=!0,t(e))}e>0&&(r=setTimeout((()=>{this.removeListener("data",o),i||(i=!0,t(n.alloc(0)))}),e)),this.once("data",o)}))}destroy(e){return e&&this.end(n.from(e.message||"")),this.socket.close(),this.removeAllListeners(),this}}t.WSSocket=u},1497:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.XHRSocket=t.XHRConnect=void 0;const o=i(r(651)),s=r(6789),a=i(r(6390)),c=r(1228);class u extends o.default{constructor(){super(),this.protocol="xhr"}connect(e,t){let r=new l;r.connect(e,(()=>{t&&t(r)}))}}t.XHRConnect=u;class l extends a.default{constructor(){super(),this.protocol="xhr"}connect(e,t){let r=e.url||"";const{readable:i,writable:o}=new s.TransformStream,a=o.getWriter(),u=i.getReader();let l=Object.assign({},e.init);this.writeable=a,this.readable=u;let h;/^(POST|PUT)$/i.test(l.method)&&(h=u);let d=Object.assign({timeout:15e3,method:"GET"},e.init,{body:h}),f=setTimeout((()=>this.writeable.abort(new Error("timeout"))),5e3);return t&&t(this),function(e,t){let r=new AbortController,n=r.signal,i=e instanceof Request?e.url:e;if(t=t||{},e instanceof Request)for(let r in e)t[r]=e[r];delete t.url;let o=t.timeout||15e3;t.signal=n;let a=!0,c=setTimeout((()=>{a&&r.abort()}),o||15e3);return(0,s.fetch)(i,t).then((e=>(a=!1,c&&clearTimeout(c),e)))}(r,d).then((async e=>{var t;if(clearTimeout(f),!/^2/i.test(e.status+""))return this.destroy(new Error(`HTTP/1.1 ${e.status} ${e.statusText}`));this.readable=null===(t=e.body)||void 0===t?void 0:t.getReader();let r=[`HTTP/1.1 ${e.status} ${e.statusText}`];for(e.headers.forEach(((e,t)=>r.push(t+": "+e))),r.push("\r\n");;)try{let{done:e,value:t}=await this.readable.read();if(t){let e=r.length>0?n.concat([n.from(r.join("\r\n")),t]):t;r=[],this.emit("read",{size:e.byteLength});let i=e.byteLength||e.length;const o=c.util.chunkedMTU-256;for(let t=0;t<i;t+=o){let r=e.slice(t,t+o);this.emit("data",r)}}if(e)return void setTimeout((()=>this.destroy()),1)}catch(e){this.destroy(e)}})).catch((e=>{clearTimeout(f),this.emit("error",e)})),/^(POST|PUT)$/i.test(d.method)||this.writeable.close(),this}async write(e){return this.writeable.write(e).catch(),this.emit("write",{size:e.byteLength}),this}async end(e){try{e&&await this.writeable.write(e).catch(),this.destroy()}catch(e){}return this}async read(e=0){return new Promise((async t=>{let r,i=!1;e>0&&(r=setTimeout((()=>{i||(i=!0,t(n.alloc(0)))}),e));let o=await this.readable.read();o.done||(this.destroy(),t(n.alloc(0)));let s=o.value;i=!0,t(s||n.alloc(0))}))}destroy(e){try{this.readable.cancel().catch((e=>{})),this.writeable.closed.then((e=>{e||this.writeable.close().catch((e=>{})),this.emit("close"),this.removeAllListeners()})).catch((e=>{this.emit("close"),this.removeAllListeners()}))}catch(e){}}}t.XHRSocket=l},6390:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.XSocket=t.CMD=void 0;const i=n(r(6729));!function(e){e[e.HEARTBEAT=0]="HEARTBEAT",e[e.CLOSE=1]="CLOSE",e[e.RESET=2]="RESET",e[e.RESPONSE=11]="RESPONSE"}(t.CMD||(t.CMD={}));class o extends i.default{constructor(){super()}}t.XSocket=o,t.default=o},1045:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;const o=i(r(9961)),s=i(r(8913)),a=i(r(3993)),c=r(6789),u=a.default.createCipher("C5TwyHpWu3DV/++xLsfSR2yQWEMhg6pXmNoRnvnL1y2bGd83v9gwpHG3M+yXAYxdsIhkIywmfWnqKh5ulQBV9kvJ9WEE85/00RhZe0hrQLrBBlAMOLOygLlFTSd2lv15BT+ixdzZDynowzIbahOmh73MSZqtZgjbT7aNJDuEgrW+KzT38aBz4VR/q1K8F1/4jy8QkrhiB+k14mPTrvyZFqVTckSLHI7+bdBBOc/73jo2wJPdocZbyiVlZ6xOzYUK1ORCd8IVYM7u53jm8h2BfK+0xChMqZFcaG9KihI9H9bj+kanhu2oPHSJnRognHVRDgMJXj6jMeDrWgIN5SIUfg==");t.API=class{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:r,port:n,path:i,key:o}=this._options,a=new URL(`${t}://${r}:${n}${i}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",s.default.peerVersion),(0,c.fetch)(a.href,{referrerPolicy:this._options.referrerPolicy,timeout:15e3,headers:{did:(0,c.deviceId)(),"content-type":"application/json"}})}async retrieveId(){try{const e=await this._buildRequest("id");if(200!==e.status)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){throw o.default.error("Error retrieving ID",e),new Error("Could not get an ID from the server."+"")}}async getIceServers(){let e={list:[{urls:["stun:stun1.l.google.com:19302","stun:stun.l.google.com:19302"]},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp",ip:""}]};try{const t=this._options.secure?"https":"http",{host:r,port:i,path:o,key:s}=this._options,a=await(0,c.fetch)(`${t}://${r}:${i}/api/ices`,{timeout:5e3,headers:{did:(0,c.deviceId)(),"content-type":"application/json"}}).then((e=>e.json())).catch((e=>({status:500})));if(200==a.status){let{data:t}=a,r=(null==t?void 0:t.list)||[];r.forEach((e=>{e.credential&&(e.credential=u.decode(n.from(e.credential,"base64"),37).toString())})),e.list=r.length>0?r:e.list,e.ip=t.ip}}catch(e){console.info("err",e)}return e.list=e.list.sort(((e,t)=>e.username&&Math.floor(2*Math.random())?1:-1)),e.list}}},3482:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseConnection=void 0;const i=n(r(6729));class o extends i.default{get open(){return this._open}constructor(e,t,r){super(),this.peer=e,this.provider=t,this.options=r,this._open=!1,this.metadata=r.metadata}}t.BaseConnection=o},7198:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServerMessageType=t.SocketEventType=t.SerializationType=t.PeerErrorType=t.ConnectionType=void 0,function(e){e.Data="data",e.Media="media"}(t.ConnectionType||(t.ConnectionType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(t.PeerErrorType||(t.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json",e.String="string"}(t.SerializationType||(t.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(t.SocketEventType||(t.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE",e.Pull="pull"}(t.ServerMessageType||(t.ServerMessageType={}))},9586:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(6729));class o extends i.default{constructor(e){super(),this.options=Object.assign(e,{pingInterval:5e3,wsRunTime:3e5},e)}}t.default=o},393:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(1409)),o=r(9003),s=n(r(9586)),a=r(7198);class c extends s.default{constructor(e){var t,r,n,s,c,u;super(e),this.host=e.host,this.wsScoket=new o.WSSocket(e),this.xhrSocket=new i.default(this.wsScoket,e),e.wsRunTime>0&&this.wsScoket.setWsRunTime(e.wsRunTime);let l=!1;const h=e=>{if(e.type==a.ServerMessageType.Open){if(l)return;l=!0,this.emit("message",e)}else this.emit("message",e)};null===(t=this.wsScoket)||void 0===t||t.on("message",h),null===(r=this.xhrSocket)||void 0===r||r.on("message",h),null===(n=this.wsScoket)||void 0===n||n.on("disconnected",(()=>this.emit("disconnected"))),null===(s=this.xhrSocket)||void 0===s||s.on("disconnected",(()=>this.emit("disconnected"))),null===(c=this.wsScoket)||void 0===c||c.on("close",(()=>this.emit("close"))),null===(u=this.xhrSocket)||void 0===u||u.on("close",(()=>this.emit("close")))}async start(e,t,r="all"){this.mode=r,this.wsScoket.on("close",(()=>{this.xhrSocket.start(e,t)})),"ws"==r?(this.wsScoket.setForever(),this.wsScoket&&this.wsScoket.start(e,t)):"xhr"==r?this.xhrSocket&&this.xhrSocket.start(e,t):"forever"==r?(this.wsScoket.setForever(),this.wsScoket&&this.wsScoket.start(e,t),setTimeout((()=>{this.xhrSocket&&this.xhrSocket.start(e,t)}),6e4)):(this.wsScoket.start(e,t),setTimeout((()=>{this.xhrSocket&&this.xhrSocket.start(e,t)}),6e4))}get id(){return this.xhrSocket.id}get open(){var e;return(null===(e=this.xhrSocket)||void 0===e?void 0:e.open)||this.wsScoket.open}async reconnect(){var e,t;null===(e=this.xhrSocket)||void 0===e||e.reconnect(),null===(t=this.wsScoket)||void 0===t||t.reconnect()}send(e){!this.wsScoket||!this.wsScoket.open&&this.xhrSocket.open?this.xhrSocket&&this.xhrSocket.open&&this.xhrSocket.send(e):this.wsScoket.send(e)}close(){this.destroy()}destroy(){var e,t;null===(e=this.wsScoket)||void 0===e||e.close(),null===(t=this.xhrSocket)||void 0===t||t.close()}}t.default=c},9003:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WSSocket=void 0;const i=n(r(9961)),o=r(7198),s=n(r(8913)),a=r(6789),c=n(r(9586));class u extends c.default{constructor(e){super(e),this._open=!1,this._opening=!1,this._messagesQueue=[],this.previousTime=0,this._isForever=!1,this._wsRunTime=3e5;const t=e.secure?"wss://":"ws://";this._baseUrl=t+e.host+":"+e.port+e.path+"peerjs?key="+e.key+`&username=${e.username||""}&password=${e.password||""}&did=`+(0,a.deviceId)()}get id(){return this._id}setWsRunTime(e=12e4){this._wsRunTime=e}config(e,t){this._id=e,this._token=t}setForever(){this._isForever=!0}async start(e,t){var r;this._id=e,this._token=t;const n=`${this._baseUrl}&id=${e}&token=${t}&resource=${(null===(r=globalThis.location)||void 0===r?void 0:r.hostname)||""}`;this.open||this._opening||(this._opening=!0,this._socket=new a.WebSocket(n+"&version="+s.default.peerVersion),this._socket.on("data",(e=>{try{this.previousTime=Date.now(),e=JSON.parse(e),i.default.log("Server message received:",e)}catch(t){return void i.default.log("Invalid server message",e)}this.emit("message",e)})),this._socket.once("error",(e=>{this.close(),setTimeout((()=>this.reconnect()),1e3)})),this._socket.once("close",(()=>{i.default.log("Socket closed."),this._cleanup(),this._open=!1,this._opening=!1})),this._socket.on("open",(()=>{this.open||(this._opening=!1,this._open=!0,this.previousTime=Date.now(),this._sendQueuedMessages(),i.default.log("Socket open"),this._scheduleHeartbeat(),this._wsCloseTimer=setInterval((()=>{this._isForever||this.open&&this.previousTime+this._wsRunTime<Date.now()&&this.close()}),1e4))})))}async reconnect(){this.open||this._opening||!this._id||(console.info("ws reconnect"),this.start(this._id,this._token))}get open(){return!!this._socket&&1===this._socket.readyState&&this._open}get use(){return!!this.id}get pingInterval(){return this.options.pingInterval}_scheduleHeartbeat(){this._wsPingTimer=setTimeout((()=>{this._sendHeartbeat()}),this.pingInterval)}_sendHeartbeat(){if(!this.open)return void i.default.log("Cannot send heartbeat, because socket closed");const e=JSON.stringify({type:o.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(!this.id||!this.open)return void this._messagesQueue.push(e);if(!e.type)return void this.emit("error",new Error("Invalid message"));const t=JSON.stringify(e);this._socket.send(t)}close(){this._cleanup()}_cleanup(){this._open=!1,this._opening=!1,this._socket&&(this._socket.close(),this._socket.removeAllListeners("data"),this._socket.removeAllListeners("close"),this._socket.removeAllListeners("error"),this._socket.removeAllListeners("open"),this._socket=void 0),clearTimeout(this._wsPingTimer),clearInterval(this._wsCloseTimer)}}t.WSSocket=u},1409:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(9961)),o=r(7198),s=n(r(9586)),a=r(6789);class c extends s.default{constructor(e,t){super(t),this._messagesQueue=[],this._open=!1,this.key=t.key;const r=t.secure?"https://":"http://";this._baseUrl=r+t.host+":"+t.port,this.wsSocket=e,globalThis.window?globalThis.addEventListener("beforeunload",(()=>this.close())):globalThis.process&&globalThis.process.addListener("beforeExit",(()=>this.close())),this.once("close",(()=>{this._sendLevel()}))}newUrl(e){return this._baseUrl+"/"+e.replace(/^[\/]+/,"")}get id(){return this._id||""}async start(e,t){var r;if(this._id=e,this.token=t,this.open)return;if(this._open=!0,200!=(await(0,a.fetch)(this.newUrl(`/p/${e}/${t}`),{method:"post",timeout:5e3,headers:{did:(0,a.deviceId)(),"content-type":"application/json"},body:JSON.stringify({type:"open",key:this.key,timeout:5e3,username:this.options.username||"",password:this.options.password||"",resource:(null===(r=globalThis.location)||void 0===r?void 0:r.hostname)||""})}).then((e=>200!=e.status?{status:e.status,msg:e.statusText,data:{}}:e.json())).catch((e=>({status:598,msg:e.message,data:{}})))).status)return this._open=!1,void this.wsSocket.reconnect();this.emit("message",{type:o.ServerMessageType.Open,payload:"",src:""}),this._sendQueuedMessages(),this._schedulePull()}async reconnect(){this.start(this.id,this.token)}_schedulePull(e=8e3){this._wsPingTimer=setTimeout((()=>{this._sendPull()}),e)}async _sendLevel(){const e={type:o.ServerMessageType.Leave};await(0,a.fetch)(this.newUrl(`/p/leave/${this._id}`),{method:"post",timeout:3e3,headers:{did:(0,a.deviceId)()},body:JSON.stringify(e)}).catch((e=>{}))}async _sendPull(){var e,t,r,n;if(this.open){if(1!=(null===(e=this.wsSocket)||void 0===e?void 0:e.open)){const e={type:o.ServerMessageType.Pull,key:this.key,token:this.token,username:this.options.username||"",password:this.options.password||"",resource:(null===(t=globalThis.location)||void 0===t?void 0:t.hostname)||""};let s=await(0,a.fetch)(this.newUrl(`/p/${this._id}`),{method:"post",timeout:5e3,headers:{did:(0,a.deviceId)(),"content-type":"application/json"},body:JSON.stringify(e)}).then((e=>200==e.status?e.json():{status:e.status,msg:e.statusText})).catch((e=>({status:500,msg:e.message})));if(200==s.status&&s.data&&s.data.type)return i.default.log("Server message received:",JSON.stringify(s.data)),this.emit("message",s.data),"OPEN"!=(null===(r=s.data)||void 0===r?void 0:r.type)&&(null===(n=this.wsSocket)||void 0===n||n.reconnect()),void this._schedulePull(2e3);200!=s.status&&i.default.error("Server message received error:",s.status,s.msg)}this._schedulePull()}else i.default.log("Cannot send heartbeat, because socket closed")}get open(){return this._open}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(!this._id||!this.open)return void this._messagesQueue.push(e);if(!e.type)return void this.emit("error",new Error("Invalid message"));const t=Object.assign(Object.assign({},e),{key:this.key});this.wsSocket.send(t)}close(){this.open&&(this._cleanup(),this.emit("disconnected"),this.emit("close"))}_cleanup(){clearTimeout(this._wsPingTimer)}}t.default=c},9961:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogLevel=void 0;var r;!function(e){e[e.Disabled=0]="Disabled",e[e.Errors=1]="Errors",e[e.Warnings=2]="Warnings",e[e.Info=3]="Info",e[e.All=4]="All"}(r=t.LogLevel||(t.LogLevel={}));t.default=new class{constructor(){this._logLevel=r.Disabled}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=r.All&&this._print(r.All,...e)}info(...e){this._logLevel>=r.Info&&this._print(r.Info,...e)}warn(...e){this._logLevel>=r.Warnings&&this._print(r.Warnings,...e)}error(...e){this._logLevel>=r.Errors&&this._print(r.Errors,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=["ipeer: ",...t];for(let e in n)n[e]instanceof Error&&(n[e]="("+n[e].name+") "+n[e].message);e>=r.All?console.log(...n):e>=r.Info?console.info("Info",...n):e>=r.Warnings?console.warn("WARNING",...n):e>=r.Errors&&console.error("ERROR",...n)}}},1416:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MediaConnection=void 0;const i=r(1228),o=n(r(9961)),s=r(7198),a=r(3482);class c extends a.BaseConnection{get type(){return s.ConnectionType.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,r){super(e,t,r),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||c.ID_PREFIX+i.util.randomToken()}addStream(e){o.default.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,r=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,r.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(r.candidate);break;default:o.default.warn(`Unrecognized message type:${t} from peer:${this.peer}`)}}answer(e,t={}){if(this._localStream)return void o.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");if(!e)return o.default.warn("answer stream is null");this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection(Object.assign(Object.assign({},this.options._payload),{_stream:e}));const r=this.provider._getMessages(this.connectionId);for(let e of r)this.handleMessage(e);this._open=!0}destroy(){this._negotiator&&this._negotiator.cleanup(),this.provider,this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}t.MediaConnection=c,c.ID_PREFIX="mc_"},6333:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Negotiator=void 0;const i=r(1228),o=n(r(9961)),s=r(7198),a=r(6789);t.Negotiator=class{constructor(e){this.socket=e}startConnection(e){const t=this._startPeerConnection();if(this.socket.peerConnection=t,this.socket.type===s.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){if(this.socket.type===s.ConnectionType.Data){const r=this.socket;e.reliable=e.reliable||!0;const n={ordered:!!e.reliable},i=t.createDataChannel(r.label,n);r.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){o.default.log("Creating RTCPeerConnection.");const e=new a.RTCPeerConnection(this.socket.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.socket.peer,r=this.socket.connectionId,n=this.socket.type,a=this.socket.provider;o.default.log("Listening for ICE candidates."),e.onicecandidate=e=>{e.candidate&&e.candidate.candidate&&(o.default.log(`Received ICE candidates for ${t}:`,e.candidate),a.wssocket.send({type:s.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:n,connectionId:r},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":o.default.log("iceConnectionState is failed, closing connections to "+t),this.socket.emit("error",new Error("Negotiation of connection to "+t+" failed.")),this.socket.destroy();break;case"closed":o.default.log("iceConnectionState is closed, closing connections to "+t),this.socket.emit("error",new Error("Connection to "+t+" closed.")),this.socket.destroy();break;case"disconnected":o.default.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=i.util.noop}this.socket.emit("iceStateChanged",e.iceConnectionState)},o.default.log("Listening for data channel"),e.ondatachannel=e=>{o.default.log("Received data channel");const n=e.channel;a.getConnection(t,r).initialize(n)},o.default.log("Listening for remote stream"),e.ontrack=e=>{o.default.log("Received remote stream");e.streams[0];const n=a.getConnection(t,r);o.default.log("no support stream"),null==n||n.type,s.ConnectionType.Media}}cleanup(){o.default.log("Cleaning up PeerConnection to "+this.socket.peer);const e=this.socket.peerConnection;if(!e)return;this.socket.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t="closed"!==e.signalingState;let r=!1;if(this.socket.type===s.ConnectionType.Data){const e=this.socket.dataChannel;e&&(r=!!e.readyState&&"closed"!==e.readyState)}(t||r)&&e.close()}async _makeOffer(){const e=this.socket.peerConnection,t=this.socket.provider;try{if(!e)throw new Error("no peerConnection");const r=await e.createOffer(this.socket.options.constraints);o.default.log("Created offer."),this.socket.options.sdpTransform&&"function"==typeof this.socket.options.sdpTransform&&(r.sdp=this.socket.options.sdpTransform(r.sdp)||r.sdp);try{await e.setLocalDescription(r),o.default.log("Set localDescription:",r,`for:${this.socket.peer}`);let n={sdp:r,type:this.socket.type,connectionId:this.socket.connectionId,metadata:this.socket.metadata,browser:i.util.browser};if(this.socket.type===s.ConnectionType.Data){const e=this.socket;n=Object.assign(Object.assign({},n),{label:e.label,reliable:e.reliable,serialization:e.serialization})}t.wssocket.send({type:s.ServerMessageType.Offer,payload:n,dst:this.socket.peer})}catch(e){"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=e&&(t.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to setLocalDescription, ",e))}}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to createOffer, ",e)}}async _makeAnswer(){const e=this.socket.peerConnection,t=this.socket.provider;try{if(!e)throw new Error("no peerConnection");const r=await e.createAnswer();o.default.log("Created answer."),this.socket.options.sdpTransform&&"function"==typeof this.socket.options.sdpTransform&&(r.sdp=this.socket.options.sdpTransform(r.sdp)||r.sdp);try{await e.setLocalDescription(r),o.default.log("Set localDescription:",r,`for:${this.socket.peer}`),t.wssocket.send({type:s.ServerMessageType.Answer,payload:{sdp:r,type:this.socket.type,connectionId:this.socket.connectionId,browser:i.util.browser},dst:this.socket.peer})}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to setLocalDescription, ",e)}}catch(e){t.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to create answer, ",e)}}async handleSDP(e,t){t=new a.RTCSessionDescription(t);const r=this.socket.peerConnection,n=this.socket.provider;o.default.log("Setting remote description",t);const i=this;try{if(!r)throw new Error("no peerConnection");await r.setRemoteDescription(t),o.default.log(`Set remoteDescription:${e} for:${this.socket.peer}`),"OFFER"===e&&await i._makeAnswer()}catch(e){n.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to setRemoteDescription, ",e)}}async handleCandidate(e){o.default.log("handleCandidate:",e);const t=e.candidate,r=e.sdpMLineIndex,n=e.sdpMid,i=this.socket.peerConnection,c=this.socket.provider;try{if(!i)throw new Error("no peerConnection");await i.addIceCandidate(new a.RTCIceCandidate({sdpMid:n,sdpMLineIndex:r,candidate:t})),o.default.log(`Added ICE candidate for:${this.socket.peer}`)}catch(e){c.emitError(s.PeerErrorType.WebRTC,e),o.default.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(e,t){if(o.default.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return o.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach((r=>{t.addTrack(r,e)}))}_addStreamToMediaConnection(e,t){o.default.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}},5890:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.Packer=void 0;const i=r(6789),o=r(3847);class s{constructor(e){this.index=0,this.index=0,this.dataBuffer=e,this.length=this.dataBuffer.byteLength}unpack(){var e,t=this.unpack_uint8();if(t<128)return t;if((224^t)<32)return(224^t)-32;if((e=160^t)<=15)return this.unpack_raw(e);if((e=176^t)<=15)return this.unpack_string(e);if((e=144^t)<=15)return this.unpack_array(e);if((e=128^t)<=15)return this.unpack_map(e);switch(t){case 192:return null;case 193:case 212:case 213:case 214:case 215:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 216:return e=this.unpack_uint16(),this.unpack_string(e);case 217:return e=this.unpack_uint32(),this.unpack_string(e);case 218:return e=this.unpack_uint16(),this.unpack_raw(e);case 219:return e=this.unpack_uint32(),this.unpack_raw(e);case 220:return e=this.unpack_uint16(),this.unpack_array(e);case 221:return e=this.unpack_uint32(),this.unpack_array(e);case 222:return e=this.unpack_uint16(),this.unpack_map(e);case 223:return e=this.unpack_uint32(),this.unpack_map(e)}}unpack_uint8(){var e=255&this.dataBuffer[this.index];return this.index++,e}unpack_uint16(){var e=this.read(2),t=256*(255&e[0])+(255&e[1]);return this.index+=2,t}unpack_uint32(){var e=this.read(4),t=256*(256*(256*e[0]+e[1])+e[2])+e[3];return this.index+=4,t}unpack_uint64(){var e=this.read(8),t=256*(256*(256*(256*(256*(256*(256*e[0]+e[1])+e[2])+e[3])+e[4])+e[5])+e[6])+e[7];return this.index+=8,t}unpack_int8(){var e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){var e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){var e=this.unpack_uint32();return e<Math.pow(2,31)?e:e-Math.pow(2,32)}unpack_int64(){var e=this.unpack_uint64();return e<Math.pow(2,63)?e:e-Math.pow(2,64)}unpack_raw(e){if(this.length<this.index+e)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+e+" "+this.length);var t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){for(var t,r,n=this.read(e),i=0,o="";i<e;)(t=n[i])<128?(o+=String.fromCharCode(t),i++):(192^t)<32?(r=(192^t)<<6|63&n[i+1],o+=String.fromCharCode(r),i+=2):(r=(15&t)<<12|(63&n[i+1])<<6|63&n[i+2],o+=String.fromCharCode(r),i+=3);return this.index+=e,o}unpack_array(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=this.unpack();return t}unpack_map(e){for(var t={},r=0;r<e;r++){var n=this.unpack(),i=this.unpack();t[n]=i}return t}unpack_float(){var e=this.unpack_uint32(),t=(e>>23&255)-127;return(0===e>>31?1:-1)*(8388607&e|8388608)*Math.pow(2,t-23)}unpack_double(){var e=this.unpack_uint32(),t=this.unpack_uint32(),r=(e>>20&2047)-1023;return(0===e>>31?1:-1)*((1048575&e|1048576)*Math.pow(2,r-20)+t*Math.pow(2,r-52))}read(e){var t=this.index;if(t+e<=this.length)return this.dataBuffer.slice(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class a{constructor(){this.bufferBuilder=new o.BufferBuilder}getBuffer(){return this.bufferBuilder.getBuffer()}pack(e){var t=typeof e;if("undefined"===t||null==e)this.bufferBuilder.append(192);else if("string"===t)this.pack_string(e);else if("number"===t)Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if("boolean"===t)!0===e?this.bufferBuilder.append(195):!1===e&&this.bufferBuilder.append(194);else if(e instanceof n)this.pack_bin(e);else if(/^Buffer$/i.test(e.type)&&e.data&&(e.data.length||e.data.byteLength)>0)e=n.from(e),this.pack_bin(e);else{if("object"!==t)throw new Error('Type "'+t+'" not yet supported');if(null===e)this.bufferBuilder.append(192);else{var r=e.constructor;if(r==Array)this.pack_array(e);else if(r==i.Blob||r==i.File||e instanceof i.Blob||e instanceof i.File)this.pack_bin(e);else if(e instanceof ArrayBuffer||r==ArrayBuffer)this.pack_bin(n.from(e));else if("BYTES_PER_ELEMENT"in e)this.pack_bin(n.from(e));else if(r==Object||r.toString().startsWith("class"))this.pack_object(e);else if(r==Date)this.pack_string(e.toString());else{if("function"!=typeof e.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(e.toBinaryPack())}}}this.bufferBuilder.flush()}pack_bin(e){var t=e.byteLength||e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this.bufferBuilder.append(218),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(t)}this.bufferBuilder.append(e)}pack_string(e){var t=function(e){return e.length>600?n.from(e).byteLength:e.replace(/[^\u0000-\u007F]/g,c).length}(e);if(t<=15)this.pack_uint8(176+t);else if(t<=65535)this.bufferBuilder.append(216),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(t)}this.bufferBuilder.append(e)}pack_array(e){var t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this.bufferBuilder.append(220),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(t)}for(var r=0;r<t;r++)this.pack(e[r])}pack_integer(e){if(e>=-32&&e<=127)this.bufferBuilder.append(255&e);else if(e>=0&&e<=255)this.bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this.bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this.bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this.bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this.bufferBuilder.append(210),this.pack_int32(e);else if(e>=-0x8000000000000000&&e<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(e);else{if(!(e>=0&&e<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(e)}}pack_double(e){var t=0;e<0&&(t=1,e=-e);var r=Math.floor(Math.log(e)/Math.LN2),n=e/Math.pow(2,r)-1,i=Math.floor(n*Math.pow(2,52)),o=Math.pow(2,32),s=t<<31|r+1023<<20|i/o&1048575,a=i%o;this.bufferBuilder.append(203),this.pack_int32(s),this.pack_int32(a)}pack_object(e){var t=Object.keys(e).length;if(t<=15)this.pack_uint8(128+t);else if(t<=65535)this.bufferBuilder.append(222),this.pack_uint16(t);else{if(!(t<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(t)}for(var r in e)e.hasOwnProperty(r)&&(this.pack(r),this.pack(e[r]))}pack_uint8(e){this.bufferBuilder.append(e)}pack_uint16(e){this.bufferBuilder.append(e>>8),this.bufferBuilder.append(255&e)}pack_uint32(e){var t=4294967295&e;this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)}pack_uint64(e){var t=e/Math.pow(2,32),r=e%Math.pow(2,32);this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t),this.bufferBuilder.append((4278190080&r)>>>24),this.bufferBuilder.append((16711680&r)>>>16),this.bufferBuilder.append((65280&r)>>>8),this.bufferBuilder.append(255&r)}pack_int8(e){this.bufferBuilder.append(255&e)}pack_int16(e){this.bufferBuilder.append((65280&e)>>8),this.bufferBuilder.append(255&e)}pack_int32(e){this.bufferBuilder.append(e>>>24&255),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)}pack_int64(e){var t=Math.floor(e/Math.pow(2,32)),r=e%Math.pow(2,32);this.bufferBuilder.append((4278190080&t)>>>24),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t),this.bufferBuilder.append((4278190080&r)>>>24),this.bufferBuilder.append((16711680&r)>>>16),this.bufferBuilder.append((65280&r)>>>8),this.bufferBuilder.append(255&r)}}function c(e){var t=e.charCodeAt(0);return t<=2047?"00":t<=65535?"000":t<=2097151?"0000":t<=67108863?"00000":"000000"}t.Packer=a;const u={unpack:function(e){return new s(e).unpack()},pack:function(e){var t=new a;return t.pack(e),t.getBuffer()}};t.default=u},3847:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.BufferBuilder=t.binaryFeatures=void 0,t.binaryFeatures={},t.binaryFeatures.useBlobBuilder=!0,t.binaryFeatures.useArrayBufferView=!t.binaryFeatures.useBlobBuilder&&!0;t.BufferBuilder=class{constructor(){this._pieces=[],this._parts=[]}append(e){"number"==typeof e?this._pieces.push(e):(this.flush(),e=e instanceof n?e:n.from(e),this._parts.push(e))}flush(){this._pieces.length>0&&(this._parts.push(n.from(this._pieces)),this._pieces=[])}getBuffer(){return this.flush(),n.concat(this._parts)}}},1370:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(5890));t.default=i.default},75:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Peer=void 0;const a=r(6729),c=r(1228),u=o(r(5928)),l=s(r(9961)),h=s(r(393)),d=r(1416),f=r(9803),p=r(7198),g=r(1045),y=s(r(5650)),m=s(r(95));class _ extends a.EventEmitter{get id(){return this._id}get username(){return this._username}get password(){return this._password}get uuid(){return this._id+":"+this.server}get options(){return this._options}get open(){return this._open}get wssocket(){return this._wssocket}get lastServerId(){return this._lastServerId}get server(){return this.options.host+":"+this.options.port}get connections(){const e=Object.create(null);for(let[t,r]of this._connections)e[t]=r;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){var r;let n;super(),this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map,e&&e.constructor==Object?t=e:e&&(n=e.toString()),t=Object.assign({debug:0,host:c.util.apiServer,port:c.util.CLOUD_PORT,path:"/",key:_.DEFAULT_KEY,token:c.util.randomToken(),config:c.util.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",handshakeMode:"all",wsRunTime:12e4},t),this._options=t,this.acceptFactor=new y.default(this),"/"===this._options.host&&(this._options.host=window.location.hostname),this._options.path&&("/"!==this._options.path[0]&&(this._options.path="/"+this._options.path),"/"!==this._options.path[this._options.path.length-1]&&(this._options.path+="/")),void 0!==this._options.secure||c.util.CLOUD_HOSTS.includes(this._options.host||"")?c.util.CLOUD_HOSTS.includes(this._options.host||"")&&(this._options.secure=!0):this._options.secure=c.util.isSecure(),this._options.logFunction&&l.default.setLogFunction(this._options.logFunction),this._username=this.options.username||"ipeer",this._password=this.options.password||t.token||(null==n?void 0:n.substring(8,16))||u.buildSN(8),l.default.logLevel=this._options.debug||0,this._api=new g.API(t),c.util.initICE(this._api),this._wssocket=this._createServerConnection(),c.util.supports.audioVideo||c.util.supports.data?!n||c.util.validateId(n)?(n?this._initialize(n):this._api.retrieveId().then((e=>this._initialize(e))).catch((e=>this._abort(p.PeerErrorType.ServerError,e))),globalThis.window==globalThis?(globalThis.addEventListener("close",(()=>this.destroy())),globalThis.addEventListener("beforeunload",(()=>this.destroy()))):null===(r=globalThis.process)||void 0===r||r.on("beforeExit",(()=>this.destroy()))):this._delayedAbort(p.PeerErrorType.InvalidID,`ID "${n}" is invalid`):this._delayedAbort(p.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC")}_createServerConnection(){const e=new h.default({secure:this._options.secure,host:this._options.host,port:this._options.port,path:this._options.path,key:this._options.key,pingInterval:this._options.pingInterval,wsRunTime:this._options.wsRunTime,username:this.username,password:this.password});return e.on(p.SocketEventType.Message,(e=>{this._handleMessage(e)})),e.on(p.SocketEventType.Error,(e=>{this._abort(p.PeerErrorType.SocketError,e)})),e.on(p.SocketEventType.Disconnected,(()=>{this.disconnected||(this.emitError(p.PeerErrorType.Network,"Lost connection to server."),this.disconnect())})),e.on(p.SocketEventType.Close,(()=>{this.disconnected||this._abort(p.PeerErrorType.SocketClosed,"Underlying socket is already closed.")})),e}_initialize(e){this._id=e,this.wssocket.start(e,this._options.token,this._options.handshakeMode)}_handleMessage(e){const t=e.type,r=e.payload,n=e.src;switch(t){case p.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id||"");break;case p.ServerMessageType.Error:this._abort(p.PeerErrorType.ServerError,r.msg);break;case p.ServerMessageType.IdTaken:this._abort(p.PeerErrorType.UnavailableID,`ID "${this.id}" is taken`);break;case p.ServerMessageType.InvalidKey:this._abort(p.PeerErrorType.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case p.ServerMessageType.Leave:l.default.log(`Received leave message from ${n}`),this._cleanupPeer(n),this._connections.delete(n);break;case p.ServerMessageType.Expire:this.emitError(p.PeerErrorType.PeerUnavailable,`Could not connect to peer ${n}`);let i=e.dst,o=this.getConnectionByServiceId(n,i),s=new Error(`Could not connect to peer ${n}`);if(o)null==o||o.emit("error",s);else{let e=this._connections.get(n)||[];null==e||e.forEach((e=>e.emit("error",s)))}break;case p.ServerMessageType.Offer:{const e=r.connectionId;let t=this.getConnection(n,e);if(t&&(t.destroy(),l.default.warn(`Offer received for existing Connection ID:${e}`)),r.type===p.ConnectionType.Media)this.emitError(p.PeerErrorType.PeerUnavailable,`no support MediaConnection ${n}`);else{if(r.type!==p.ConnectionType.Data)return void l.default.warn(`Received malformed connection type:${r.type}`);{let i=new f.Socket(n,this,{connectionId:e,_payload:r,metadata:r.metadata,label:r.label,serialization:r.serialization,reliable:r.reliable});t=i,this._addConnection(n,i),i.once("open",(()=>{this.emit("connection",i),this.acceptFactor.accept(new m.default(i)),setTimeout((()=>i.emit("open",i)),100)}))}}const i=this._getMessages(e);for(let e of i)null==t||t.handleMessage(e);break}default:{if(!r)return void l.default.warn(`You received a malformed message from ${n} of type ${t}`);const i=r.connectionId,o=this.getConnection(n,i);o&&o.peerConnection?o.handleMessage(e):i?this._storeMessage(i,e):l.default.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){var r;this._lostMessages.has(e)||this._lostMessages.set(e,[]),null===(r=this._lostMessages.get(e))||void 0===r||r.push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){this.disconnected&&(l.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(p.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server."));const r=new f.Socket(e,this,t);return this._addConnection(e,r),r}call(e,t,r={}){if(this.disconnected&&(l.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(p.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.")),!t){let e=new Error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");throw l.default.error(e),e}return new d.MediaConnection(e,this,Object.assign(Object.assign({},r),{_stream:t}))}_addConnection(e,t){var r;l.default.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),null===(r=this._connections.get(e))||void 0===r||r.push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const r=this._connections.get(e);if(!r)return null;for(let e of r)if(e.connectionId===t)return e;return null}getConnectionByServiceId(e,t){const r=this._connections.get(e);if(!r)return null;for(let e of r)if(e.serverId===t)return e;return null}_delayedAbort(e,t){setTimeout((()=>{this._abort(e,t)}),0)}_abort(e,t){l.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}emitError(e,t){let r;l.default.error("Error:",t),r="string"==typeof t?new Error(t):t,r.type=e,this.emit("error",r)}destroy(){this.destroyed||(l.default.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.wssocket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(let e of t)null==e||e.destroy()}disconnect(){if(this.disconnected)return;const e=this.id;l.default.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.wssocket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e||"")}reconnect(){if(this.disconnected&&!this.destroyed)l.default.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);l.default.error("In a hurry? We're still trying to make the initial connection!")}}registerAccept(e){this.acceptFactor.register(e)}removeAccept(e){this.acceptFactor.remove(e)}}t.Peer=_,_.DEFAULT_KEY="peerjs",t.default=_},6740:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SecretSocket=void 0;const o=i(r(3993)),s=i(r(6729));class a extends s.default{get peer(){return this.socket.peer}get id(){return this.socket.id}get open(){return this.socket.open}get provider(){return this.socket.provider}get mtu(){return this.socket.mtu}constructor(e,t){super(),this.ttl=6e4,this.lastExecTime=Date.now(),this.socket=e,this.cipher=o.default.createCipher(t),e.on("data",(e=>this.handleData(e))),e.once("open",(()=>{this.lastExecTime=Date.now(),this.emit("open",this)})),e.once("close",(()=>this.emit("close"))),e.once("error",(e=>this.emit("error",e))),e.on("iceStateChanged",(e=>this.emit("iceStateChanged",e))),e.on("timeout",(()=>this.emit("timeout")))}setTimeout(e){this.ttl=e;let t=setInterval((()=>{this.lastExecTime+this.ttl<Date.now()&&(clearInterval(t),this.destroy())}),this.ttl)}handleData(e){var t;void 0!==globalThis.window&&/firefox/i.test(null===(t=globalThis.navigator)||void 0===t?void 0:t.userAgent)&&(e=n.from(e));let r=e.byteLength;if(r<2)return e;let i=e[0]^e[r-1];return e=n.concat([e.slice(0,1),this.cipher.decode(e.slice(1,r-1),i),e.slice(r-1)]),this.emit("data",e),e}async read(e){let t=await this.socket.read(e);if(t&&t.byteLength>0){return this.handleData(t)}return t}async end(e){await this.write(e),this.destroy()}async write(e){let t=e instanceof n?e:n.from(e),r=t.byteLength;if(r>2){let e=t[0]^t[r-1];t=n.concat([t.slice(0,1),this.cipher.encode(t.slice(1,r-1),e),t.slice(r-1)])}this.socket.write(t)}pipe(e){return this.socket.pipe(e)}destroy(e){this.socket.destroy(e)}}t.SecretSocket=a},95:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SerialSocket=void 0;const c=a(r(6729)),u=s(r(5928)),l=a(r(1370)),h=a(r(3993)).default.createCipher("lqWM5Dhkq9sZ4xOOaKzU4HqY0U6GXK+6jeKj4QtBR/Cq3wboI9yD9et8Zm0o+4jGYvyTA19vH0U+/iSz0xYSDZmE1coyRGpRAE0mpFYnWr5TezSt0FTdnnchm3KxmhBlCp1hAnkpHQGUzqh1ifG3cC5/GJ872pGBPLl+kvfmoZw5PcjSOhtCSnjyUD+pB0O9rnNZ/WtnwsEikE9xtGPptrXXVwUtMEjsCQ+PM6BgVfnu7/Yeouo1vKdGF/P6lyqyps+VyWwaXkmHxCzewIVSgBFpikC4uwj4FDFdJRX0sEt0zNZM58UO2M2CIHbH2VjLW+U3v8Mr/y/tHDZuDIt9BA==");let d=1;class f extends c.default{get peer(){return this.socket.peer}get id(){return this.socket.id}get open(){return this.socket.open}get provider(){return this.socket.provider}get mtu(){return this.socket.mtu}set cacheTTL(e){this._cacheTTL=e}get cacheTTL(){return this._cacheTTL}constructor(e){super(),this.socket=e,this.ttl=6e4,this.lastExecTime=Date.now(),this._cacheTTL=0,this._chunkedData={},e.on("data",(e=>this.handleData(e))),e.once("open",(()=>{this.lastExecTime=Date.now(),this.emit("open",this)})),e.once("close",(()=>{this._chunkedData={},this.emit("close")})),e.once("error",(e=>{this.emit("error",e)})),e.on("iceStateChanged",(e=>this.emit("iceStateChanged",e))),e.once("timeout",(()=>this.emit("timeout")))}setTimeout(e){this.ttl=e;let t=setInterval((()=>{this.lastExecTime+this.ttl<Date.now()&&(clearInterval(t),this.destroy(new Error("timeout")))}),this.ttl)}heartbeat(){if(!this.open)return;let e=Date.now(),t=Math.ceil(this.ttl/2),r=this.ttl>=1e3?this.ttl-500:this.ttl;if(r>0){this.socket.on("data",(()=>e=Date.now()));let i=setInterval((()=>{if(!this.open)return clearInterval(i);const r=Date.now()-e;if(r>=this.ttl)return this.socket.emit("timeout"),void this.socket.destroy();r>=t&&this.write(n.from([0]))}),r);this.socket.once("close",(()=>clearInterval(i)))}}handleData(e){var t;let r,i;void 0!==globalThis.window&&/firefox/i.test(null===(t=globalThis.navigator)||void 0===t?void 0:t.userAgent)&&(e=n.from(e));try{let t=1===u.bit2Int(e.slice(0,1)),o=u.bit2Int(e.slice(1,2));const s=o;let a=h.decode(e.slice(2,2+o),s);if(a.byteLength<1)return n.alloc(0);let c=JSON.parse(a.toString()),d=u.bit2Int(e.slice(2+o,4+o)),f=e.slice(4+o,4+o+d);if(f=t?h.decode(f,s):f,r=c.id,this._chunkedData[r]||(this._chunkedData[r]={list:[],total:0,startTime:Date.now()}),i=this._chunkedData[r],i.list.push({data:f,idx:c.idx,total:e.byteLength}),i.total+=d,this.cacheTTL>0){i.startTime+this.cacheTTL<Date.now()&&(i.list=[])}if(i.total>=c.total){let e=i.list.sort(((e,t)=>e.idx-t.idx)),t=n.concat(e.map((e=>e.data)));try{delete this._chunkedData[r];let e=n.alloc(0);return t.byteLength<i.total||(e=l.default.unpack(t)),this.emit("data",e),e}catch(e){delete this._chunkedData[r],this.emit("error",e)}}}catch(e){i&&(i.list=[]),this.emit("error",e)}return n.alloc(0)}async read(e){return new Promise((t=>{let r;r=e>0?setTimeout((()=>t(n.alloc(0))),e):void 0,this.once("data",(e=>{clearTimeout(r),t(e)}))}))}async end(e,t=!0){await this.write(e,t),this.destroy()}async write(e,t=!0){if(d>=f.MAX_COUNT&&(d=1),!this.open)return void this.emit("error",new Error("socket is not open"));const r=this.socket.mtu;let i=d++,o=l.default.pack(e);t=t&&o.byteLength<10240;let s=0;for(let e=0;e>=0&&!(s>=o.byteLength);e++){let a={id:i,idx:e,total:o.byteLength},c=n.from(JSON.stringify(a));if(c.byteLength>255)return void this.emit("error",new Error("send header is large"));const l=c.byteLength;c=h.encode(c,l);let d=r-c.byteLength-4;d=Math.min(d,o.byteLength-s);let f=s+d;if(d<=0)break;let p=t?h.encode(o.slice(s,f),l):o.slice(s,f),g=n.concat([n.from([t?1:0]),n.from(u.int2Bit(c.byteLength,1)),c,n.from(u.int2Bit(d,2)),p]);if(!this.open){this.emit("error",new Error("socket is not open"));break}await this.socket.write(g),s+=d}}pipe(e){return this.socket.pipe(e)}destroy(e){this._chunkedData={},e?(this.write(n.from(e.message)),setTimeout((()=>this.socket.destroy()),10)):this.socket.destroy()}clone(){return this.removeAllListeners(),this.socket.removeAllListeners(),new f(this.socket)}}t.SerialSocket=f,f.MAX_COUNT=8888888888888888,t.default=f},9803:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;const c=r(1228),u=s(r(5928)),l=a(r(9961)),h=r(6333),d=r(7198),f=a(r(8913)),p=a(r(6729));class g{constructor(){this.queue=[]}add(e){this.queue.push(e)}lifo(){return this.queue[0]}pop(){return this.queue.splice(0,1)[0]}clear(){this.queue=[]}get size(){return this.queue.length}}!globalThis.window||globalThis.navigator;class y extends p.default{get serverId(){return this._serverId}get id(){return this.peer+":"+this._serverId+":"+this._partId}get mtu(){return f.default.mtu}get dataChannel(){return this._dc}get type(){return d.ConnectionType.Data}get bufferSize(){var e;return(null===(e=this.dataChannel)||void 0===e?void 0:e.bufferedAmount)||0}get open(){return this._open&&"open"==this.dataChannel.readyState}get provider(){return this._provider}constructor(e,t,r){super(),this.peer=e,this.options=r,this._open=!1,this.writeable=!1,this.chunkQueue=new g,this.ttl=6e4,this.lastExecTime=Date.now(),this.closeCount=0,this._partId=u.buildSN(6),this.metadata=r.metadata,this._provider=t,this.connectionId=this.options.connectionId||y.ID_PREFIX+c.util.randomToken(),this.label=this.options.label||this.connectionId,this.serialization=this.options.serialization||d.SerializationType.Binary,this.reliable=!!this.options.reliable,this._serverId=t.lastServerId||void 0,this._negotiator=new h.Negotiator(this),this._negotiator.startConnection(this.options._payload||{originator:!0});let n=r.timeout||6e4;setTimeout((()=>{this.open||(this.emit("timeout"),this.destroy())}),n),this.once("open",(()=>{this.lastExecTime=Date.now()}))}initialize(e){this._dc=e,this._configureDataChannel(),this._doPid=setInterval((()=>{this._doNext()}),10)}setTimeout(e){this.ttl=e;let t=setInterval((()=>{this.lastExecTime+this.ttl<Date.now()&&(clearInterval(t),this.destroy())}),this.ttl)}_configureDataChannel(){this.dataChannel.binaryType="arraybuffer",this.dataChannel.onopen=()=>{l.default.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.writeable=!0,this.emit("open",this)},this.dataChannel.onmessage=e=>{try{this.lastExecTime=Date.now(),this.handleReceiveData(n.from(e.data))}catch(t){l.default.error(`DC#${this.connectionId} dc onmessage:`,e.data),this.emit("error",t)}},this.dataChannel.onclose=()=>{this.dataChannel.onclose=null,this._open=!1,this.writeable=!1,clearInterval(this._doPid),l.default.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.closeCount++,this.clear()},this.dataChannel.onerror=e=>{var t;this.dataChannel.onerror=null,this.emit("error",new Error((null===(t=e.error)||void 0===t?void 0:t.message)||"dataChannel error")),this.removeListener("error")},this.once("error",(()=>{this.chunkQueue.clear()})),this.once("close",(()=>{this.chunkQueue.clear()}))}handleReceiveData(e){this.emit("data",e)}clear(){this.closeCount<3&&this.emit("close"),this.closeCount++,this.chunkQueue.clear(),this._provider&&this._provider._removeConnection(this),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onerror=null),this.removeAllListeners()}destroy(e){this._open=!1;try{e&&this.dataChannel.send(n.from(e.message))}catch(e){}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=void 0),this.dataChannel&&this.dataChannel.close(),this.clear()}pipe(e){return this.on("data",(t=>e.write(t))),this.once("close",(()=>e.destroy())),e}async read(e=0){return new Promise((t=>{let r,i=e=>{clearTimeout(r),t(n.from(e))};e>0&&(r=setTimeout((()=>{this.removeListener("data",i),t(n.alloc(0))}),e)),this.once("data",i)}))}async write(e){if(!this.open){let e=new Error("socket is not open. You should listen for the `open` event before sending messages.");return void this.emit("error",e)}let t=n.isBuffer(e)?e:n.from(e);return this.isWrite(t)&&this.chunkQueue.size<1?this.write0(t):(this.chunkQueue.add(t),new Promise((e=>{setTimeout((()=>e()),1)})))}async end(e){await this.write(e),this.dataChannel.close()}async write0(e){return new Promise((t=>{this._send(e,(()=>t()))}))}async _doNext(){let e=this.chunkQueue.lifo();e&&this.isWrite(e)&&(this.chunkQueue.pop(),await this.write0(e))}isWrite(e){return!!this.writeable&&this.dataChannel.bufferedAmount+e.byteLength<=y.MAX_BUFFERED_AMOUNT/2}async _send(e,t){if(!this.open)return super.emit("error",new Error("socket is not open. You should listen for the `open` event before sending messages.")),void this.chunkQueue.clear();if(e.byteLength>this.mtu){let r=this._splitChunk(e);for(let e of r)await m(1),await this.write0(e);t&&t()}else{try{this.dataChannel.send(e),this._doNext()}catch(e){return this.chunkQueue.clear(),void this.emit("error",e)}t&&t()}}handleMessage(e){var t,r;const n=e.payload;switch(e.type){case d.ServerMessageType.Answer:null===(t=this._negotiator)||void 0===t||t.handleSDP(e.type,n.sdp);break;case d.ServerMessageType.Candidate:null===(r=this._negotiator)||void 0===r||r.handleCandidate(n.candidate);break;default:l.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}}_splitChunk(e){let t=this.mtu,r=Math.ceil(e.byteLength/t),n=[];for(let i=0;i<r;i++)n.push(e.slice(t*i,Math.min(t*(i+1),e.byteLength)));return n}}async function m(e=1){return new Promise((t=>{setTimeout((()=>t()),e)}))}t.Socket=y,y.ID_PREFIX="dc_",y.MAX_BUFFERED_AMOUNT=134217728},3722:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Supports=void 0;const i=r(6789),o=(null===(n=globalThis.navigator)||void 0===n?void 0:n.platform)||"Win32";function s(e,t,r){var n=e.match(t);if(n&&n.length>=r){let e=n[r];if("string"==typeof e)return parseInt(e,10)}return 0}t.Supports=new class{constructor(){this.isIOS=["iPad","iPhone","iPod"].includes(o),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605,this.browser=function(){const e=globalThis;var t={browser:"",version:0,supportsUnifiedPlan:!1};if(void 0===e||!e.navigator)return t.browser="node",t;var r=e.navigator;if(r.mozGetUserMedia)t.browser="firefox",t.version=s(r.userAgent,/Firefox\/(\d+)\./,1);else if(r.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection)t.browser="chrome",t.version=s(r.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else{if(!e.RTCPeerConnection||!r.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=s(r.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return t}()}isWebRTCSupported(){return void 0!==i.RTCPeerConnection}isBrowserSupported(){const e=this.getBrowser(),t=this.getVersion();return!!this.supportedBrowsers.includes(e)&&("chrome"===e?t>=this.minChromeVersion:"firefox"===e?t>=this.minFirefoxVersion:"safari"===e&&(!this.isIOS&&t>=this.minSafariVersion))}getBrowser(){return this.browser.browser}getVersion(){return this.browser.version}isUnifiedPlanSupported(){const e=this.getBrowser(),t=this.getVersion();if("chrome"===e&&t<this.minChromeVersion)return!1;if("firefox"===e&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let r,n=!1;try{r=new i.RTCPeerConnection,null==r||r.addTransceiver("audio"),n=!0}catch(e){}finally{null==r||r.close()}return n}toString(){return`Supports:\n    browser:${this.getBrowser()}\n    version:${this.getVersion()}\n    isIOS:${this.isIOS}\n    isWebRTCSupported:${this.isWebRTCSupported()}\n    isBrowserSupported:${this.isBrowserSupported()}\n    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}}},1228:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0;const o=i(r(1370)),s=r(3722),a=r(6789),c={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun.l.google.com:19302"]},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};let u=!1;t.util=new class{constructor(){this.CLOUD_HOSTS=["p0.iee.one","p1.iee.one"],this.CLOUD_PORT=443,this.MAX_COUNT=8888888888888888,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=c,this.browser=s.Supports.getBrowser(),this.browserVersion=s.Supports.getVersion(),this.supports=function(){const e={browser:s.Supports.isBrowserSupported(),webRTC:s.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let t;try{if(t=new a.RTCPeerConnection(c),!t)throw new Error("peer connect is null");let r;e.audioVideo=!0;try{r=t.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!r.ordered;try{r.binaryType="blob",e.binaryBlob=!s.Supports.isIOS}catch(e){}}catch(e){}finally{null==r||r.close()}}catch(e){}finally{null==t||t.close()}return e}(),this.pack=o.default.pack,this.unpack=o.default.unpack,this._dataCount=1}noop(){}get apiServer(){let e=Math.floor(Math.random()*this.CLOUD_HOSTS.length);return this.CLOUD_HOSTS[e]}validateId(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)}chunk(e){"buffer"==e.type&&(e=n.from(e.buffer));const r=[],i=e.byteLength,o=Math.ceil(i/t.util.chunkedMTU);let s=0,a=0;for(this._dataCount>=this.MAX_COUNT&&(this._dataCount=1);a<i;){const n=Math.min(i,a+t.util.chunkedMTU),c=e.slice(a,n),u={__peerData:this._dataCount,n:s,data:c,total:o};r.push(u),a=n,s++}return this._dataCount++,r}blobToArrayBuffer(e,t){const r=new FileReader;return r.onload=function(e){e.target&&t(e.target.result)},r.readAsArrayBuffer(e),r}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=255&e.charCodeAt(r);return t.buffer}randomToken(){return Math.random().toString(36).slice(2)}isSecure(){var e;return"https:"===(null===(e=globalThis.location)||void 0===e?void 0:e.protocol)}initICE(e){async function t(){let t=await e.getIceServers();return t&&t.length>0&&(c.iceServers=t,u=!0),t}u||((async()=>{setInterval((()=>t()),6e5)})(),t())}}},72:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;const c=r(6789),u=a(r(3993)),l=r(1228),h=s(r(5928));t.API=class{constructor(e){this.options=e,this.cipherPassword=u.default.createCipher(e.secret)}get server(){return this.options.server||`https://${l.util.apiServer}`}async peers(e){let t=await(0,c.fetch)(`${this.server}/api/clients?apikey=${e.apikey}`,{timeout:15e3,headers:{did:(0,c.deviceId)(),"content-type":"application/json"}}).then((e=>e.json())).then((e=>e.data||{})).then((e=>e.list||[])).catch((e=>[]));return t.length<1&&(await h.wait(1e3),t=await this.peers(e)),t=t.filter((e=>e.id&&e.username&&e.password)).map((e=>({peer:e.id,username:e.username,password:this.cipherPassword.decode(n.from(e.password,"base64"),e.cf).toString(),country:e.country}))),t}}},815:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Connect=void 0;const i=n(r(6729));class o extends i.default{constructor(e){super(),this.ipeer=e,this.timeout=15e3}}t.Connect=o,t.default=o},891:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.ifetch=void 0;const i=r(6789);t.ifetch=async function(e,t,r){r=Object.assign({timeout:15e3},r);let o=t instanceof i.Request?t.url:t,s=t instanceof i.Request?t:new i.Request(o,r);const a=new URL(o),{readable:c,writable:u}=new i.TransformStream,l=u.getWriter();let h;return new Promise((async t=>{var u;let d=Date.now(),f=!0,p=setTimeout((async()=>{f&&(l.close().catch((e=>{})),e.destroy(),t(new i.Response("timeout no response header",{status:555,statusText:"timeout no response header",ttl:Date.now()-d,url:o},e)))}),5e3),g=Object.assign({},s.headers),y=[`GET ${a.href} HTTP/1.1`,`host: ${a.hostname}`,"Connection: close"];for(let e in g)y.push(`${e}: ${g[e]}`);y.push("\r\n"),y.push((null===(u=null==r?void 0:r.body)||void 0===u?void 0:u.toString())||"");let m=-1,_=0,b=!0;e.once("close",(e=>{(async e=>{setTimeout((async()=>{l.close().catch((e=>{}))}),10)})()})),e.on("data",(async r=>{try{if(r=n.isBuffer(r)?r:/buffer/i.test(r.type)?n.from(r.data):n.from(r),b){f=!1,clearTimeout(p);let n=r.findIndex(((e,t)=>"\r"==String.fromCharCode(e)&&"\n"==String.fromCharCode(r[t+1])&&"\r"==String.fromCharCode(r[t+2])&&"\n"==String.fromCharCode(r[t+3]))),s=r.slice(0,n).toString(),a=r.slice(n+4),u=s.split("\r\n")[0].split(" "),g=parseInt(u[1])||500,y=u[2]||"",b=function(e){let t=e.split("\r\n"),r={};return t.forEach((e=>{let t=e.split(": ");if(t.length<2)return;let n=t[0]||"",i=t[1]||"";r[n.trim().toLowerCase()]=i.trim()})),r}(s);m=parseInt(b["content-length"])||-1,_+=a.byteLength;let v=new i.Headers;for(let e in b)v.append(e,b[e]);if(e.peer&&v.append("peer",e.peer),e.country&&v.append("country",e.country||""),!/^2/i.test(g+""))return e.destroy(),h=new i.Response(a,{headers:v,status:g,statusText:y,ttl:Date.now()-d,url:o},e),void t(h);if(a.byteLength>=m&&m>0)return h=new i.Response(a,{headers:v,status:g,statusText:y,ttl:Date.now()-d,url:o},e),e.destroyFace(),void t(h);h=new i.Response(c,{headers:v,status:g,statusText:y,ttl:Date.now()-d,url:o},e),t(h),l.write(a).catch((t=>{e.destroy()})),m>=0&&a.byteLength>=m&&e.destroyFace()}else l.write(r).catch((t=>{e.destroy()})),_+=r.byteLength;b=!1}catch(e){t(new i.Response(e.message,{status:500,ttl:Date.now()-d,url:o}))}})),await e.write(y.join("\r\n")),r&&("string"==typeof r.body||r.body instanceof ArrayBuffer)&&e.write(n.from(r.body))}))}},2285:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IFetch=void 0;const a=r(5885),c=r(6789),u=r(6589),l=o(r(5928)),h=s(r(6729)),d=r(891);class f extends h.default{constructor(e,t){super(),this.ipeer=e,this.queue=new u.Queue;const r=new a.WrtcConnect(e,t);this.connect=r,this.connect.queue=this.queue,this.queue.reusePool=r.reusePool,this.connect.once("open",(()=>{console.info("connect open"),this.queue.handle(),this.emit("open")})),this.handleQueue()}get open(){return this.connect.open}handleQueue(){this.connect.on("idle",(e=>{this.queue.notify()})),this.queue.on("handle",(async(e,t)=>{let r,n=Date.now(),i=[],o=!1;i.push(new Promise((t=>{r=setTimeout((()=>{if(o)return;let r=new c.Response("xtimeout",{status:599,statusText:"xtimeout",url:e.url,ttl:Date.now()-n});t(r)}),15e3)})));for(let t=0;t<3;t++)i.push(new Promise((async i=>{let s=this.connect.randomPeer();if(await l.wait(3e3*t),!o)return!e.process||await e.process().catch((e=>!0))?s?void this.fetch1(s,e.input,e.init).then((async t=>!e.process||await e.process().catch((e=>!0))?o?t.abort():void(t.ok&&(o=!0,r&&clearTimeout(r),i(t))):(t.abort(),i(new c.Response(null,{status:204,url:e.url,ttl:Date.now()-n}))))):i(new c.Response("nopeer",{status:598,statusText:"nopeer",url:e.url,ttl:Date.now()-n})):i(new c.Response(null,{status:204,url:e.url,ttl:Date.now()-n}))})));t(await Promise.race(i))}))}clear(){this.queue.clear()}reload(){this.connect.loadPeers()}async fetch(e,t){let r=l.buildSN(16),n=1==(null==t?void 0:t.cache),i=null==t?void 0:t.process;null==t||delete t.cache,null==t||delete t.process;let o=e instanceof c.Request?e.url:e;if(!this.open)return new c.Response("no open",{status:500,ttl:0,url:o});let s=this.queue.add(r,{input:e,init:t,cache:n,process:i});return new Promise((e=>{if(s)this.queue.addTask(r,(t=>{e(t)}));else{let t=new c.Response(null,{status:204,ttl:0,url:o});e(t)}}))}async fetch1(e,t,r){return this.connect.open?this.ipeer.open?p(this.connect,e,t,r):new Promise((n=>{this.ipeer.once("open",(()=>{let i=p(this.connect,e,t,r);n(i)}))})):new Promise((n=>{this.connect.once("open",(()=>{let i=p(this.connect,e,t,r);n(i)}))}))}hasUse(){return a.WrtcConnect.peerList.length>0}}async function p(e,t,r,n){n=Object.assign({timeout:15e3},n);let i=r instanceof c.Request?r.url:r;r instanceof c.Request||new c.Request(i,n);return new Promise((o=>{let s=Date.now();e.connect(i,t,((e,t)=>{if(e)return void o(new c.Response(null==e?void 0:e.message,{status:500,ttl:Date.now()-s,url:i}));let a=(0,d.ifetch)(t,r,n);o(a)}))}))}t.IFetch=f},6589:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Queue=t.MaxThread=void 0;const a=o(r(5928)),c=s(r(6729)),u=r(6789);t.MaxThread=32;class l extends c.default{constructor(){super(),this.caches=new Set,this._alltotal=0,this._lastHandleTime=Date.now(),this.queue=[],this.processQueue=new Set,this.tasks=new Map}add(e,t){var r,n;let i=t.input instanceof u.Request?t.input.url:t.input,o=t.input instanceof u.Request?t.input.headers:(null===(r=t.init)||void 0===r?void 0:r.headers)||{},s=t.input instanceof u.Request?t.input.method:null===(n=t.init)||void 0===n?void 0:n.method;s=(s||"GET").toUpperCase().trim();let a=Object.assign({},t,{id:e,method:s,count:0,cache:1==t.cache,url:i,headers:o});return a.id=e,a.count=0,a.id=e,a.count=0,a.process=t.process,(!/^GET$/i.test(s)||!this.caches.has(i))&&(this.queue.push(a),this._alltotal++,!0)}get total(){return this.queue.length}addTask(e,t){return this.tasks.set(e,t),this}execTask(e,t){let r=this.tasks.get(e);this.tasks.delete(e),r&&r(t)}pop(){return this.queue.splice(0,1)[0]}getProcessId(e){return/^GET$/i.test(e.method)?e.url:e.id}notify(){let e=this.pop();if(e){this._lastHandleTime=Date.now();let r=this.getProcessId(e);if(this.processQueue.has(r)){let r=this.queue.slice(0,t.MaxThread),n=this.queue.slice(t.MaxThread);return this.queue=[],void this.queue.push(...r,e,...n)}this.processQueue.add(r),e.count++,this.emit("handle",e,(t=>{if(e&&(e&&this.processQueue.delete(r),this.execTask(e.id,t.clone()),[200,206].includes(t.status))){this.queue.filter((t=>/^GET$/i.test(t.method)&&t.url==(null==e?void 0:e.url))).forEach((e=>{this.execTask(e.id,t.clone());let r=this.queue.findIndex((t=>t.id==e.id));this.queue.splice(r,1)}))}}))}}async handle(){for(;;)this.processQueue.size>=t.MaxThread?await a.wait(1e3):(this.reusePool&&this.reusePool.total>=64||this.notify(),await a.wait(200))}clear(){try{for(let e of this.queue)try{this.execTask(e.id,new u.Response(null,{status:508,statusText:"no handle",url:e.url,ttl:0}))}catch(e){}this.queue=[],this.caches.clear(),this.processQueue.clear()}catch(e){}}}t.Queue=l,l.MaxThread=t.MaxThread,t.default=l},6422:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReusePool=void 0;const a=s(r(9961)),c=s(r(6729)),u=o(r(5928));class l extends c.default{constructor(e){super(),this.ipeer=e,this.pool=new Map,this.list=[],setInterval((()=>{this.pool.forEach(((e,t)=>{for(let t=e.length-1;t>=0;t--)try{let r=e[t];r.start+6e4<Date.now()&&(e.splice(t,1),r.socket.destroy())}catch(e){}}))}),12e4)}get total(){return this.list.length}get idle(){let e=0;for(let t of this.pool.keys()){e+=(this.pool.get(t)||[]).length}return e}delete(e){this.pool.set(e,[])}add(e){let t=e.peer,r=this.pool.get(t)||[];if(r.find((t=>t.socket.socket==e.socket)))return;this.pool.set(t,r),r.push({socket:e,start:Date.now()}),this.list.findIndex((t=>t==e.socket))<0&&this.list.push(e.socket),a.default.info("add reuse socket",e.socket.id,this.idle+"/"+this.total);const n=()=>{let t=r.findIndex((t=>t.socket.socket==e.socket));r.splice(t,1);let n=this.list.findIndex((t=>t==e.socket));this.list.splice(n,1)};e.once("close",(e=>{e&&n()})),e.once("error",(()=>n())),e.once("timeout",(()=>n())),setTimeout((async()=>{for(let e=0;e<this.idle;e++)this.emit("idle",{idle:this.idle,total:this.total}),await u.wait(100)}),10)}hasRemove(e){return this.list.findIndex((t=>t.peer==e))<0}popRandom(){for(let e of this.pool.keys()){let t=(this.pool.get(e)||[]).splice(0,1)[0];if(t)return t.socket}}pop(e){let t=this.pool.get(e)||[];if(t.length<1)return;let r=t.splice(0,1)[0];return null==r?void 0:r.socket}randomPeer(){let e=[...this.pool.keys()],t=e[Math.floor(Math.random()*e.length)],r=this.pool.get(t)||[];if(r.length>0)return r[0].socket.peer;for(let e in this.pool.keys()){let t=this.pool.get(e)||[];if(t.length>0)return t[0].socket.peer}}}t.ReusePool=l},295:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReuseSocket=void 0;const o=r(3607),s=i(r(6729));class a extends s.default{constructor(e,t){super(),this.socket=e,this.reusePool=t,this.cmdClose=!1,this._isReuse=!1,this.country="",this.init(),this.once("close",(e=>{e||setTimeout((()=>{t.add(this.clone())}),20)}))}init(){this.socket.on("data",(e=>{if(e.length<=1){if(e[0]===o.AcceptCMD.CLOSE)this.destroyFace(),this.cmdClose=!0}else this.emit("data",e)})),this.socket.once("close",(()=>this.emit("close",!0))),this.socket.once("error",(e=>this.emit("error",e))),this.socket.once("timeout",(()=>this.emit("timeout")))}get id(){return this.socket.id}get peer(){return this.socket.peer}get open(){return this.socket.open}get isReuse(){return this._isReuse}useTag(){}async write(e){let t=n.isBuffer(e)?e:n.from(e);return this.socket.write(t)}async read(e){let t=0;for(;;){let r=await this.socket.read(100);if(t+=100,(r.byteLength||r.length)>0)return r;if(t>=e&&e>0)return r}}async end(e){e&&await this.write(e),this.socket.destroy()}destroy(e){this.socket.destroy(e)}async destroyFace(){if(!this.socket.open)return this.emit("close",!0),void this.removeListener("close");this.emit("close",!1),this.removeListener("close"),this.cmdClose||(this.cmdClose=!0,await this.write(n.from([o.AcceptCMD.CLOSE])))}clear(){this.socket.removeAllListeners(),this.removeAllListeners()}heartbeat(){return this.socket.heartbeat()}clone(){this.clear();let e=new a(this.socket,this.reusePool);return e._isReuse=!0,e}}t.ReuseSocket=a,t.default=a},5885:function(e,t,r){"use strict";var n,i=r(8764).Buffer,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return s(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WrtcConnect=void 0;const u=r(815),l=r(3607),h=r(5928),d=r(295),f=r(6422),p=r(72),g=c(r(8913)),y=c(r(9961)),m=a(r(5928)),_=c(r(6589)),b=new Set;setInterval((()=>b.clear()),3e5);null===(n=globalThis.location)||void 0===n||n.host;class v extends u.Connect{get open(){return this._open}constructor(e,t){super(e),this.ipeer=e,this.options=t,this._open=!1,this.reusePool=new f.ReusePool(e),this.reusePool.on("idle",(e=>{var t,r;y.default.info("queue="+(null===(t=this.queue)||void 0===t?void 0:t.processQueue.size)+"/"+(null===(r=this.queue)||void 0===r?void 0:r.total)," reuse="+e.idle+"/"+e.total),this.emit("idle",e)})),this.protocol="wrtc",this.api=new p.API(t),this.on("connect",(({url:e,ttl:t,peer:r})=>{})),this.ipeer.open?this.loadPeers((()=>{this._open=!0,console.info("===========pen"),this.emit("open")})):this.ipeer.once("open",(()=>{this.loadPeers((()=>{this._open=!0,this.emit("open")}))})),setInterval((()=>{this.reusePool.total<this.minReuse&&v.peerList.length<5&&this.loadPeers()}),3e4)}loadPeers(e){this.api.peers(this.options).then((t=>{t.forEach((e=>{if(e.peer==this.ipeer.id)return;let t=v.peerList.find((t=>t.peer==e.peer));t?(t=Object.assign(t,e),t.avgTTL=0,v.peerList.push(t)):(e.avgTTL=0,v.peerList.push(e))})),e&&e(),setTimeout((()=>{this.loadPeerSockets(t)}),10)}))}get queueTotal(){var e,t;return((null===(e=this.queue)||void 0===e?void 0:e.total)||0)+((null===(t=this.queue)||void 0===t?void 0:t.processQueue.size)||0)}get minReuse(){let e=this.queueTotal>=100?64:this.queueTotal%64;return e=Math.max(_.default.MaxThread,e),e}get reuseStats(){return{idle:this.reusePool.idle,total:this.reusePool.total}}async loadPeerSockets(e=[]){const t=e=>{new Promise((t=>{if(!e)return t(void 0);let r=this.ipeer.connect(e.peer,{}),n=new d.ReuseSocket(new l.SerialSocket(r),this.reusePool);n.country=e.country||"",r.once("open",(async()=>{await this.checkSocket(n,e,"https://ifconfig.me/ip")||(r.setTimeout(12e4),n.destroyFace()),t(void 0)})),r.once("error",(e=>{r.destroy(),t(void 0)}))})).catch((e=>{}))};for(let r of e){if(this.reusePool.total>=this.minReuse)break;for(let e=0;e<2&&!(this.reusePool.total>=this.minReuse);e++)t(r),await m.wait(100);await m.wait(100)}}randomPeer(){let e=this.reusePool.randomPeer();if(e){let t=v.peerList.findIndex((t=>t.peer==e));if(t>=0)return v.peerList[t]}let t=Math.floor(Math.random()*Math.random()*v.peerList.length);return v.peerList[t]}removePeer(e){if(this.reusePool.hasRemove(e.peer)){let t=v.peerList.findIndex((t=>t.peer==e.peer)),r=v.peerList[t];v.peerList.splice(t,1),r&&r.avgTTL>=8e3&&b.add(e.peer)}}async checkSocket(e,t,r){let n=Date.now(),o=await new Promise((async o=>{let s=setTimeout((()=>{o(new Error("ready data timeout"))}),5e3);e.once("error",(e=>{o(e)}));let a=Date.now()-n;t.avgTTL=(t.avgTTL+a)/2,t.avgTTL=Math.ceil(100*t.avgTTL)/100,this.emit("connect",{url:r,ttl:a,peer:e.id}),s&&clearTimeout(s);let c=new URL(r),u=!!t.username&&!!t.password,l=t.password||"";l=1==t.mode?l+"_"+t.mode+"_"+(0,h.buildSN)(6):l+"_"+t.mode;let d=t.username+":"+l;d=i.from(d).toString("base64");let f=i.concat([i.from(`WRTC/1.0/${g.default.inBrowser?"WEB":"NODE"} ${c.host}\r\n`),i.from(`Host: ${c.host}\r\n`),i.from("Proxy-Connection: keep-alive\r\n"),i.from(u?`Proxy-Authorization: Basic ${d}\r\n`:""),i.from("\r\n")]);await e.write(f);let p=await e.read(3e3);if(p.byteLength<1)return y.default.log("ready read data is null",e.id),e.destroy(),void o(new Error("no response ready header"));let m=p.toString().split(" ")[1],_="200"==m;(u||"407"==m)&&(this.emit("auth",{checked:_,peer:t.peer,username:t.username||"",password:t.password||"",args:(t.password||"").split("_").slice(1),ttl:Date.now()-n}),_||this.removePeer(e)),o(_?void 0:new Error(p.toString()))}));return o&&e.destroy(),o}async connect(e,t,r){let n;const o=async n=>{let i=await this.checkSocket(n,t,e).catch((e=>e));r(i,n)},s=e=>{let t=this.ipeer.connect(e),i=new d.ReuseSocket(new l.SerialSocket(t),this.reusePool);n=setTimeout((()=>{t.destroy(),y.default.info("connect peer timeout",t.peer),r(new Error("connect peer timeout"),i)}),1e4),t.once("open",(()=>{n&&clearTimeout(n),o(i)})),t.once("timeout",(()=>t.destroy())),t.once("error",(e=>{y.default.info("connect error",e),t.destroy(),r(e,i)}))};let a=this.reusePool.pop(t.peer);if(a){await a.write(i.from([l.AcceptCMD.RESET]));let e=!1;for(let t=0;t<20;t++){let t=await a.read(100);if(!(t.byteLength<1)){if(1!=t.byteLength)break;if(t[0]==l.AcceptCMD.RESPONSE)return await(0,h.wait)(10),o(a),void(e=!0)}}e||(y.default.info("no receive response cmd",a.peer),a.destroy(),s(t.peer))}else s(t.peer)}}t.WrtcConnect=v,v.peerList=[]},3607:function(e,t,r){"use strict";var n=r(8764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IPeer=t.deviceId=t.IFetch=t.Connect=t.XHRSocket=t.WSSocket=t.AcceptCMD=t.Accept=t.XSocket=t.SecretSocket=t.SerialSocket=t.Socket=t.Buffer=void 0;var o=r(8764);Object.defineProperty(t,"Buffer",{enumerable:!0,get:function(){return o.Buffer}});const s=i(r(75));t.IPeer=s.default;var a=r(9803);Object.defineProperty(t,"Socket",{enumerable:!0,get:function(){return a.Socket}});var c=r(95);Object.defineProperty(t,"SerialSocket",{enumerable:!0,get:function(){return c.SerialSocket}});var u=r(6740);Object.defineProperty(t,"SecretSocket",{enumerable:!0,get:function(){return u.SecretSocket}});var l=r(6390);Object.defineProperty(t,"XSocket",{enumerable:!0,get:function(){return l.XSocket}});var h=r(9872);Object.defineProperty(t,"Accept",{enumerable:!0,get:function(){return h.Accept}}),Object.defineProperty(t,"AcceptCMD",{enumerable:!0,get:function(){return h.CMD}}),globalThis.Buffer=n;var d=r(2488);Object.defineProperty(t,"WSSocket",{enumerable:!0,get:function(){return d.WSSocket}});var f=r(1497);Object.defineProperty(t,"XHRSocket",{enumerable:!0,get:function(){return f.XHRSocket}});var p=r(651);Object.defineProperty(t,"Connect",{enumerable:!0,get:function(){return p.Connect}});var g=r(2285);Object.defineProperty(t,"IFetch",{enumerable:!0,get:function(){return g.IFetch}});var y=r(6789);Object.defineProperty(t,"deviceId",{enumerable:!0,get:function(){return y.deviceId}}),t.default=s.default},3993:(e,t,r)=>{"use strict";var n=r(8764).Buffer;Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e,t){this.encodeSecret=e,this.decodeSecret=t,this.secret=e.toString("base64")}static createCipher(e){"string"==typeof e&&(e=n.from(e,"base64"));let t=n.alloc(256);for(let r=0;r<t.length;r++){let n=e[r];t.writeUInt8(r,n)}return new i(e,t)}buildVersion(e=2){e=Math.floor(e);let t=0;for(let r=(e=Math.min(e,4))-1;r>=0;r--)t+=Math.floor(256*Math.random())<<8*r;return t}buildFace(){return Math.floor(256*Math.random())}decode(e,t=99){return t%=256,!e||e.byteLength<1?n.alloc(0):(e.forEach(((r,n)=>{let i=this.decodeSecret[r];i=t<=0?i:i^t,e[n]=i})),e)}encode(e,t=99){return t%=256,!e||e.byteLength<1?n.alloc(0):(e.forEach(((r,n)=>{r=t<=0?r:r^t;let i=this.encodeSecret[r];e[n]=i})),e)}}t.default=i},5928:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.defineProperty=t.splitChunk=t.buffer2array=t.cycle=t.random2Int=t.bit2Int=t.int2Bit=t.string2Bit=t.wait=t.buildSN=t.buildPeerId=void 0;const i=n(r(8913)),o=(0,r(4296).customAlphabet)("abcdefghijklmnopqrstwuvxyz0123456789ABCDEFGHIJKLMNOPQRSTWUVXYZ",32);t.buildPeerId=function(){return Math.random().toString(36).slice(2)},t.buildSN=function(e=8){return o(e)},t.wait=async function(e){return new Promise((t=>{setTimeout((()=>t()),e)}))},t.string2Bit=function(e,t=6){return(e=e.substring(0,t)).split("").map((e=>e.charCodeAt(0)))},t.int2Bit=function(e,t=6){let r=Array(6);e=Math.floor(e%281474976710656);let n=Math.floor(e/Math.pow(2,32)),i=Math.floor(e%Math.pow(2,32));for(let e=5;e>=0;e--)r[e]=e>=2?i>>8*(6-e-1)&255:n>>(6-e-1)%4*8&255;return r.slice(6-Math.min(t,6))},t.bit2Int=function(e){e=e.slice(Math.max(e.length-6,0));let t=0,r=0,n=0;for(let t=0;t<e.length;t++){let i=8*(e.length-t-1),o=e[t];i>=32?n+=Math.pow(2,32)*(o<<i%32):i<=24&&(r+=24==i?o*Math.pow(2,24):o<<i)}return t=n+r,t},t.random2Int=function(e){return Math.floor(Math.random()*(e+1))},t.cycle=function(e=5,t){let r;return e=Math.max(e,1),function n(){r=setTimeout((()=>{try{t&&t(),n()}catch(e){}}),1e3*e)}(),{stop(){clearTimeout(r)}}},t.buffer2array=function(e,t){let r=[],n=t||e.length;n=Math.min(n,e.length);for(let t=0;t<n;t++)r.push(e[t]);return r},t.splitChunk=function(e){let t=i.default.mtu,r=Math.ceil(e.byteLength/t),n=[];for(let i=0;i<r;i++)n.push(e.slice(t*i,Math.min(t*(i+1),e.byteLength)));return n},t.defineProperty=function(e,t,r){try{Object.defineProperty(e,t,{value:r})}catch(e){}}},4296:(e,t,r)=>{"use strict";r.r(t),r.d(t,{customAlphabet:()=>s,customRandom:()=>o,nanoid:()=>a,random:()=>i,urlAlphabet:()=>n});let n="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",i=e=>crypto.getRandomValues(new Uint8Array(e)),o=(e,t,r)=>{let n=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*n*t/e.length);return(o=t)=>{let s="";for(;;){let t=r(i),a=i;for(;a--;)if(s+=e[t[a]&n]||"",s.length===o)return s}}},s=(e,t=21)=>o(e,t,i),a=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(1991);module.exports=n})();

/***/ }),

/***/ 552:
/***/ ((module) => {

/*! https://github.com/ai-lion/liondb */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8508:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_173__) => {

"use strict";


const emptyOptions = Object.freeze({})

function AbstractChainedBatch (db) {
  if (typeof db !== 'object' || db === null) {
    throw new TypeError('First argument must be an abstract-leveldown compliant store')
  }

  this.db = db
  this._operations = []
  this._written = false
}

AbstractChainedBatch.prototype._checkWritten = function () {
  if (this._written) {
    throw new Error('write() already called on this batch')
  }
}

AbstractChainedBatch.prototype.put = function (key, value, options) {
  this._checkWritten()

  const err = this.db._checkKey(key) || this.db._checkValue(value)
  if (err) throw err

  key = this.db._serializeKey(key)
  value = this.db._serializeValue(value)

  this._put(key, value, options != null ? options : emptyOptions)

  return this
}

AbstractChainedBatch.prototype._put = function (key, value, options) {
  this._operations.push({ ...options, type: 'put', key, value })
}

AbstractChainedBatch.prototype.del = function (key, options) {
  this._checkWritten()

  const err = this.db._checkKey(key)
  if (err) throw err

  key = this.db._serializeKey(key)
  this._del(key, options != null ? options : emptyOptions)

  return this
}

AbstractChainedBatch.prototype._del = function (key, options) {
  this._operations.push({ ...options, type: 'del', key })
}

AbstractChainedBatch.prototype.clear = function () {
  this._checkWritten()
  this._clear()

  return this
}

AbstractChainedBatch.prototype._clear = function () {
  this._operations = []
}

AbstractChainedBatch.prototype.write = function (options, callback) {
  this._checkWritten()

  if (typeof options === 'function') {
    callback = options
  }
  if (typeof callback !== 'function') {
    throw new Error('write() requires a callback argument')
  }
  if (typeof options !== 'object' || options === null) {
    options = {}
  }

  this._written = true
  this._write(options, callback)
}

AbstractChainedBatch.prototype._write = function (options, callback) {
  this.db._batch(this._operations, options, callback)
}

// Expose browser-compatible nextTick for dependents
AbstractChainedBatch.prototype._nextTick = __nested_webpack_require_173__(7212)

module.exports = AbstractChainedBatch


/***/ }),

/***/ 3538:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_2465__) => {

"use strict";


function AbstractIterator (db) {
  if (typeof db !== 'object' || db === null) {
    throw new TypeError('First argument must be an abstract-leveldown compliant store')
  }

  this.db = db
  this._ended = false
  this._nexting = false
}

AbstractIterator.prototype.next = function (callback) {
  // In callback mode, we return `this`
  let ret = this

  if (callback === undefined) {
    ret = new Promise(function (resolve, reject) {
      callback = function (err, key, value) {
        if (err) reject(err)
        else if (key === undefined && value === undefined) resolve()
        else resolve([key, value])
      }
    })
  } else if (typeof callback !== 'function') {
    throw new Error('next() requires a callback argument')
  }

  if (this._ended) {
    this._nextTick(callback, new Error('cannot call next() after end()'))
    return ret
  }

  if (this._nexting) {
    this._nextTick(callback, new Error('cannot call next() before previous next() has completed'))
    return ret
  }

  this._nexting = true
  this._next((err, ...rest) => {
    this._nexting = false
    callback(err, ...rest)
  })

  return ret
}

AbstractIterator.prototype._next = function (callback) {
  this._nextTick(callback)
}

AbstractIterator.prototype.seek = function (target) {
  if (this._ended) {
    throw new Error('cannot call seek() after end()')
  }
  if (this._nexting) {
    throw new Error('cannot call seek() before next() has completed')
  }

  target = this.db._serializeKey(target)
  this._seek(target)
}

AbstractIterator.prototype._seek = function (target) {}

AbstractIterator.prototype.end = function (callback) {
  let promise

  if (callback === undefined) {
    promise = new Promise(function (resolve, reject) {
      callback = function (err) {
        if (err) reject(err)
        else resolve()
      }
    })
  } else if (typeof callback !== 'function') {
    throw new Error('end() requires a callback argument')
  }

  if (this._ended) {
    this._nextTick(callback, new Error('end() already called on iterator'))
    return promise
  }

  this._ended = true
  this._end(callback)

  return promise
}

AbstractIterator.prototype._end = function (callback) {
  this._nextTick(callback)
}

AbstractIterator.prototype[Symbol.asyncIterator] = async function * () {
  try {
    let kv

    while ((kv = (await this.next())) !== undefined) {
      yield kv
    }
  } finally {
    if (!this._ended) await this.end()
  }
}

// Expose browser-compatible nextTick for dependents
AbstractIterator.prototype._nextTick = __nested_webpack_require_2465__(7212)

module.exports = AbstractIterator


/***/ }),

/***/ 2554:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_5163__) => {

"use strict";


const supports = __nested_webpack_require_5163__(1675)
const isBuffer = __nested_webpack_require_5163__(5214)
const catering = __nested_webpack_require_5163__(6957)
const AbstractIterator = __nested_webpack_require_5163__(3538)
const AbstractChainedBatch = __nested_webpack_require_5163__(8508)
const getCallback = __nested_webpack_require_5163__(70)/* .getCallback */ .R
const getOptions = __nested_webpack_require_5163__(70)/* .getOptions */ .F

const hasOwnProperty = Object.prototype.hasOwnProperty
const rangeOptions = ['lt', 'lte', 'gt', 'gte']

function AbstractLevelDOWN (manifest) {
  this.status = 'new'

  // TODO (next major): make this mandatory
  this.supports = supports(manifest, {
    status: true
  })
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  const oldStatus = this.status

  if (typeof options === 'function') callback = options

  if (typeof callback !== 'function') {
    throw new Error('open() requires a callback argument')
  }

  if (typeof options !== 'object' || options === null) options = {}

  options.createIfMissing = options.createIfMissing !== false
  options.errorIfExists = !!options.errorIfExists

  this.status = 'opening'
  this._open(options, (err) => {
    if (err) {
      this.status = oldStatus
      return callback(err)
    }
    this.status = 'open'
    callback()
  })
}

AbstractLevelDOWN.prototype._open = function (options, callback) {
  this._nextTick(callback)
}

AbstractLevelDOWN.prototype.close = function (callback) {
  const oldStatus = this.status

  if (typeof callback !== 'function') {
    throw new Error('close() requires a callback argument')
  }

  this.status = 'closing'
  this._close((err) => {
    if (err) {
      this.status = oldStatus
      return callback(err)
    }
    this.status = 'closed'
    callback()
  })
}

AbstractLevelDOWN.prototype._close = function (callback) {
  this._nextTick(callback)
}

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  if (typeof options === 'function') callback = options

  if (typeof callback !== 'function') {
    throw new Error('get() requires a callback argument')
  }

  const err = this._checkKey(key)
  if (err) return this._nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object' || options === null) options = {}

  options.asBuffer = options.asBuffer !== false

  this._get(key, options, callback)
}

AbstractLevelDOWN.prototype._get = function (key, options, callback) {
  this._nextTick(function () { callback(new Error('NotFound')) })
}

AbstractLevelDOWN.prototype.getMany = function (keys, options, callback) {
  callback = getCallback(options, callback)
  callback = catering.fromCallback(callback)
  options = getOptions(options)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  if (!Array.isArray(keys)) {
    this._nextTick(callback, new Error('getMany() requires an array argument'))
    return callback.promise
  }

  if (keys.length === 0) {
    this._nextTick(callback, null, [])
    return callback.promise
  }

  if (typeof options.asBuffer !== 'boolean') {
    options = { ...options, asBuffer: true }
  }

  const serialized = new Array(keys.length)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const err = this._checkKey(key)

    if (err) {
      this._nextTick(callback, err)
      return callback.promise
    }

    serialized[i] = this._serializeKey(key)
  }

  this._getMany(serialized, options, callback)
  return callback.promise
}

AbstractLevelDOWN.prototype._getMany = function (keys, options, callback) {
  this._nextTick(callback, null, new Array(keys.length).fill(undefined))
}

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  if (typeof options === 'function') callback = options

  if (typeof callback !== 'function') {
    throw new Error('put() requires a callback argument')
  }

  const err = this._checkKey(key) || this._checkValue(value)
  if (err) return this._nextTick(callback, err)

  key = this._serializeKey(key)
  value = this._serializeValue(value)

  if (typeof options !== 'object' || options === null) options = {}

  this._put(key, value, options, callback)
}

AbstractLevelDOWN.prototype._put = function (key, value, options, callback) {
  this._nextTick(callback)
}

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  if (typeof options === 'function') callback = options

  if (typeof callback !== 'function') {
    throw new Error('del() requires a callback argument')
  }

  const err = this._checkKey(key)
  if (err) return this._nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object' || options === null) options = {}

  this._del(key, options, callback)
}

AbstractLevelDOWN.prototype._del = function (key, options, callback) {
  this._nextTick(callback)
}

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length) return this._chainedBatch()

  if (typeof options === 'function') callback = options

  if (typeof array === 'function') callback = array

  if (typeof callback !== 'function') {
    throw new Error('batch(array) requires a callback argument')
  }

  if (!Array.isArray(array)) {
    return this._nextTick(callback, new Error('batch(array) requires an array argument'))
  }

  if (array.length === 0) {
    return this._nextTick(callback)
  }

  if (typeof options !== 'object' || options === null) options = {}

  const serialized = new Array(array.length)

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object' || array[i] === null) {
      return this._nextTick(callback, new Error('batch(array) element must be an object and not `null`'))
    }

    const e = Object.assign({}, array[i])

    if (e.type !== 'put' && e.type !== 'del') {
      return this._nextTick(callback, new Error("`type` must be 'put' or 'del'"))
    }

    const err = this._checkKey(e.key)
    if (err) return this._nextTick(callback, err)

    e.key = this._serializeKey(e.key)

    if (e.type === 'put') {
      const valueErr = this._checkValue(e.value)
      if (valueErr) return this._nextTick(callback, valueErr)

      e.value = this._serializeValue(e.value)
    }

    serialized[i] = e
  }

  this._batch(serialized, options, callback)
}

AbstractLevelDOWN.prototype._batch = function (array, options, callback) {
  this._nextTick(callback)
}

AbstractLevelDOWN.prototype.clear = function (options, callback) {
  if (typeof options === 'function') {
    callback = options
  } else if (typeof callback !== 'function') {
    throw new Error('clear() requires a callback argument')
  }

  options = cleanRangeOptions(this, options)
  options.reverse = !!options.reverse
  options.limit = 'limit' in options ? options.limit : -1

  this._clear(options, callback)
}

AbstractLevelDOWN.prototype._clear = function (options, callback) {
  // Avoid setupIteratorOptions, would serialize range options a second time.
  options.keys = true
  options.values = false
  options.keyAsBuffer = true
  options.valueAsBuffer = true

  const iterator = this._iterator(options)
  const emptyOptions = {}

  const next = (err) => {
    if (err) {
      return iterator.end(function () {
        callback(err)
      })
    }

    iterator.next((err, key) => {
      if (err) return next(err)
      if (key === undefined) return iterator.end(callback)

      // This could be optimized by using a batch, but the default _clear
      // is not meant to be fast. Implementations have more room to optimize
      // if they override _clear. Note: using _del bypasses key serialization.
      this._del(key, emptyOptions, next)
    })
  }

  next()
}

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  options = cleanRangeOptions(this, options)

  options.reverse = !!options.reverse
  options.keys = options.keys !== false
  options.values = options.values !== false
  options.limit = 'limit' in options ? options.limit : -1
  options.keyAsBuffer = options.keyAsBuffer !== false
  options.valueAsBuffer = options.valueAsBuffer !== false

  return options
}

function cleanRangeOptions (db, options) {
  const result = {}

  for (const k in options) {
    if (!hasOwnProperty.call(options, k)) continue

    if (k === 'start' || k === 'end') {
      throw new Error('Legacy range options ("start" and "end") have been removed')
    }

    let opt = options[k]

    if (isRangeOption(k)) {
      // Note that we don't reject nullish and empty options here. While
      // those types are invalid as keys, they are valid as range options.
      opt = db._serializeKey(opt)
    }

    result[k] = opt
  }

  return result
}

function isRangeOption (k) {
  return rangeOptions.indexOf(k) !== -1
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (typeof options !== 'object' || options === null) options = {}
  options = this._setupIteratorOptions(options)
  return this._iterator(options)
}

AbstractLevelDOWN.prototype._iterator = function (options) {
  return new AbstractIterator(this)
}

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this)
}

AbstractLevelDOWN.prototype._serializeKey = function (key) {
  return key
}

AbstractLevelDOWN.prototype._serializeValue = function (value) {
  return value
}

AbstractLevelDOWN.prototype._checkKey = function (key) {
  if (key === null || key === undefined) {
    return new Error('key cannot be `null` or `undefined`')
  } else if (isBuffer(key) && key.length === 0) { // TODO: replace with typed array check
    return new Error('key cannot be an empty Buffer')
  } else if (key === '') {
    return new Error('key cannot be an empty String')
  } else if (Array.isArray(key) && key.length === 0) {
    return new Error('key cannot be an empty Array')
  }
}

AbstractLevelDOWN.prototype._checkValue = function (value) {
  if (value === null || value === undefined) {
    return new Error('value cannot be `null` or `undefined`')
  }
}

// TODO: docs and tests
AbstractLevelDOWN.prototype.isOperational = function () {
  return this.status === 'open' || this._isOperational()
}

// Implementation may accept operations in other states too
AbstractLevelDOWN.prototype._isOperational = function () {
  return false
}

// Expose browser-compatible nextTick for dependents
// TODO: rename _nextTick to _queueMicrotask
// TODO: after we drop node 10, also use queueMicrotask in node
AbstractLevelDOWN.prototype._nextTick = __nested_webpack_require_5163__(7212)

module.exports = AbstractLevelDOWN

function maybeError (db, callback) {
  if (!db.isOperational()) {
    db._nextTick(callback, new Error('Database is not open'))
    return true
  }

  return false
}


/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_15923__) => {

"use strict";


exports.AbstractLevelDOWN = __nested_webpack_require_15923__(2554)
exports.AbstractIterator = __nested_webpack_require_15923__(3538)
exports.AbstractChainedBatch = __nested_webpack_require_15923__(8508)


/***/ }),

/***/ 70:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.R = function (options, callback) {
  return typeof options === 'function' ? options : callback
}

exports.F = function (options) {
  return typeof options === 'object' && options !== null ? options : {}
}


/***/ }),

/***/ 7212:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_16497__) => {

"use strict";


const queueMicrotask = __nested_webpack_require_16497__(4375)

module.exports = function (fn, ...args) {
  if (args.length === 0) {
    queueMicrotask(fn)
  } else {
    queueMicrotask(() => fn(...args))
  }
}


/***/ }),

/***/ 5214:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ 9742:
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

/***/ 8764:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_21159__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __nested_webpack_require_21159__(9742)
const ieee754 = __nested_webpack_require_21159__(645)
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

/***/ 1924:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_79619__) => {

"use strict";


var GetIntrinsic = __nested_webpack_require_79619__(210);

var callBind = __nested_webpack_require_79619__(5559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 5559:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_80139__) => {

"use strict";


var bind = __nested_webpack_require_80139__(8612);
var GetIntrinsic = __nested_webpack_require_80139__(210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 6957:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_81541__) => {

"use strict";


var queueTick = __nested_webpack_require_81541__(3527)

exports.fromCallback = function (callback, symbol) {
  if (callback === undefined) {
    var promise = new Promise(function (resolve, reject) {
      callback = function (err, res) {
        if (err) reject(err)
        else resolve(res)
      }
    })

    callback[symbol !== undefined ? symbol : 'promise'] = promise
  } else if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function')
  }

  return callback
}

exports.fromPromise = function (promise, callback) {
  if (callback === undefined) return promise

  promise
    .then(function (res) { queueTick(() => callback(null, res)) })
    .catch(function (err) { queueTick(() => callback(err)) })
}


/***/ }),

/***/ 7171:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_82382__) => {

"use strict";


const { AbstractChainedBatch } = __nested_webpack_require_82382__(4012)
const kOperations = Symbol('operations')

module.exports = class DeferredChainedBatch extends AbstractChainedBatch {
  constructor (db) {
    super(db)
    this[kOperations] = []
  }

  _put (key, value, options) {
    this[kOperations].push({ ...options, type: 'put', key, value })
  }

  _del (key, options) {
    this[kOperations].push({ ...options, type: 'del', key })
  }

  _clear () {
    this[kOperations] = []
  }

  _write (options, callback) {
    // AbstractChainedBatch would call _batch(), we call batch()
    this.db.batch(this[kOperations], options, callback)
  }
}


/***/ }),

/***/ 2790:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_83133__) => {

"use strict";


const { AbstractIterator } = __nested_webpack_require_83133__(4012)
const inherits = __nested_webpack_require_83133__(5717)
const getCallback = __nested_webpack_require_83133__(2502)/* .getCallback */ .R

const kOptions = Symbol('options')
const kIterator = Symbol('iterator')
const kOperations = Symbol('operations')
const kPromise = Symbol('promise')

function DeferredIterator (db, options) {
  AbstractIterator.call(this, db)

  this[kOptions] = options
  this[kIterator] = null
  this[kOperations] = []
}

inherits(DeferredIterator, AbstractIterator)

DeferredIterator.prototype.setDb = function (db) {
  this[kIterator] = db.iterator(this[kOptions])

  for (const op of this[kOperations].splice(0, this[kOperations].length)) {
    this[kIterator][op.method](...op.args)
  }
}

DeferredIterator.prototype.next = function (...args) {
  if (this.db.status === 'open') {
    return this[kIterator].next(...args)
  }

  const callback = getCallback(args, kPromise, function map (key, value) {
    if (key === undefined && value === undefined) {
      return undefined
    } else {
      return [key, value]
    }
  })

  if (this.db.status === 'opening') {
    this[kOperations].push({ method: 'next', args })
  } else {
    this._nextTick(callback, new Error('Database is not open'))
  }

  return callback[kPromise] || this
}

DeferredIterator.prototype.seek = function (...args) {
  if (this.db.status === 'open') {
    this[kIterator].seek(...args)
  } else if (this.db.status === 'opening') {
    this[kOperations].push({ method: 'seek', args })
  } else {
    throw new Error('Database is not open')
  }
}

DeferredIterator.prototype.end = function (...args) {
  if (this.db.status === 'open') {
    return this[kIterator].end(...args)
  }

  const callback = getCallback(args, kPromise)

  if (this.db.status === 'opening') {
    this[kOperations].push({ method: 'end', args })
  } else {
    this._nextTick(callback, new Error('Database is not open'))
  }

  return callback[kPromise] || this
}

for (const method of ['next', 'seek', 'end']) {
  DeferredIterator.prototype['_' + method] = function () {
    /* istanbul ignore next: assertion */
    throw new Error('Did not expect private method to be called: ' + method)
  }
}

module.exports = DeferredIterator


/***/ }),

/***/ 6944:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_85476__) => {

"use strict";


const { AbstractLevelDOWN } = __nested_webpack_require_85476__(4012)
const inherits = __nested_webpack_require_85476__(5717)
const DeferredIterator = __nested_webpack_require_85476__(2790)
const DeferredChainedBatch = __nested_webpack_require_85476__(7171)
const getCallback = __nested_webpack_require_85476__(2502)/* .getCallback */ .R

const deferrables = ['put', 'get', 'getMany', 'del', 'batch', 'clear']
const optionalDeferrables = ['approximateSize', 'compactRange']

const kInnerDb = Symbol('innerDb')
const kOperations = Symbol('operations')
const kPromise = Symbol('promise')

function DeferredLevelDOWN (db) {
  AbstractLevelDOWN.call(this, db.supports || {})

  // TODO (future major): remove this fallback; db must have manifest that
  // declares approximateSize and compactRange in additionalMethods.
  for (const m of optionalDeferrables) {
    if (typeof db[m] === 'function' && !this.supports.additionalMethods[m]) {
      this.supports.additionalMethods[m] = true
    }
  }

  this[kInnerDb] = db
  this[kOperations] = []

  implement(this)
}

inherits(DeferredLevelDOWN, AbstractLevelDOWN)

DeferredLevelDOWN.prototype.type = 'deferred-leveldown'

// Backwards compatibility for reachdown and subleveldown
Object.defineProperty(DeferredLevelDOWN.prototype, '_db', {
  enumerable: true,
  get () {
    return this[kInnerDb]
  }
})

DeferredLevelDOWN.prototype._open = function (options, callback) {
  const onopen = (err) => {
    if (err || this[kInnerDb].status !== 'open') {
      // TODO: reject scheduled operations
      return callback(err || new Error('Database is not open'))
    }

    const operations = this[kOperations]
    this[kOperations] = []

    for (const op of operations) {
      if (op.iterator) {
        op.iterator.setDb(this[kInnerDb])
      } else {
        this[kInnerDb][op.method](...op.args)
      }
    }

    /* istanbul ignore if: assertion */
    if (this[kOperations].length > 0) {
      throw new Error('Did not expect further operations')
    }

    callback()
  }

  if (this[kInnerDb].status === 'new' || this[kInnerDb].status === 'closed') {
    this[kInnerDb].open(options, onopen)
  } else {
    this._nextTick(onopen)
  }
}

DeferredLevelDOWN.prototype._close = function (callback) {
  this[kInnerDb].close(callback)
}

DeferredLevelDOWN.prototype._isOperational = function () {
  return this.status === 'opening'
}

function implement (self) {
  const additionalMethods = Object.keys(self.supports.additionalMethods)

  for (const method of deferrables.concat(additionalMethods)) {
    // Override the public rather than private methods to cover cases where abstract-leveldown
    // has a fast-path like on db.batch([]) which bypasses _batch() because the array is empty.
    self[method] = function (...args) {
      if (method === 'batch' && args.length === 0) {
        return new DeferredChainedBatch(this)
      } else if (this.status === 'open') {
        return this[kInnerDb][method](...args)
      }

      const callback = getCallback(args, kPromise)

      if (this.status === 'opening') {
        this[kOperations].push({ method, args })
      } else {
        this._nextTick(callback, new Error('Database is not open'))
      }

      return callback[kPromise]
    }
  }

  self.iterator = function (options) {
    if (this.status === 'open') {
      return this[kInnerDb].iterator(options)
    } else if (this.status === 'opening') {
      const iterator = new DeferredIterator(this, options)
      this[kOperations].push({ iterator })
      return iterator
    } else {
      throw new Error('Database is not open')
    }
  }

  for (const method of deferrables.concat(['iterator'])) {
    self['_' + method] = function () {
      /* istanbul ignore next: assertion */
      throw new Error('Did not expect private method to be called: ' + method)
    }
  }
}

module.exports = DeferredLevelDOWN
module.exports.DeferredIterator = DeferredIterator


/***/ }),

/***/ 2502:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.R = function (args, symbol, map) {
  let callback = args[args.length - 1]

  if (typeof callback !== 'function') {
    const promise = new Promise((resolve, reject) => {
      args.push(callback = function (err, ...results) {
        if (err) reject(err)
        else resolve(map ? map(...results) : results[0])
      })
    })

    callback[symbol] = promise
  }

  return callback
}


/***/ }),

/***/ 6729:
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

/***/ 7187:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 9804:
/***/ ((module) => {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ 7648:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_116145__) => {

"use strict";


var implementation = __nested_webpack_require_116145__(7648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 210:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_116363__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __nested_webpack_require_116363__(1405)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __nested_webpack_require_116363__(8612);
var hasOwn = __nested_webpack_require_116363__(7642);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 1405:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_128972__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __nested_webpack_require_128972__(5419);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 5419:
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 6410:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_131303__) => {

"use strict";


var hasSymbols = __nested_webpack_require_131303__(5419);

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ 7642:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_131557__) => {

"use strict";


var bind = __nested_webpack_require_131557__(8612);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


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

/***/ 5717:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 2584:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_134808__) => {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var callBound = __nested_webpack_require_134808__(1924);

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ 8662:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_135910__) => {

"use strict";


var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = __nested_webpack_require_135910__(6410)();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),

/***/ 5692:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_136962__) => {

"use strict";


var forEach = __nested_webpack_require_136962__(9804);
var availableTypedArrays = __nested_webpack_require_136962__(3083);
var callBound = __nested_webpack_require_136962__(1924);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __nested_webpack_require_136962__(6410)();

var g = typeof globalThis === 'undefined' ? __nested_webpack_require_136962__.g : globalThis;
var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __nested_webpack_require_136962__(882);
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr) {
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};


/***/ }),

/***/ 6604:
/***/ ((module) => {

"use strict";


function createError (type, Proto) {
  const Err = function (message, cause) {
    if (typeof message === 'object' && message !== null) {
      // Can be passed just a cause
      cause = cause || message
      message = message.message || message.name
    }

    message = message || ''
    cause = cause || undefined

    // If input is already of type, return as-is to keep its stack trace.
    // Avoid instanceof, for when node_modules has multiple copies of level-errors.
    if (typeof cause === 'object' && cause.type === type && cause.message === message) {
      return cause
    }

    Object.defineProperty(this, 'type', { value: type, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'name', { value: type, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'cause', { value: cause, enumerable: false, writable: true, configurable: true })
    Object.defineProperty(this, 'message', { value: message, enumerable: false, writable: true, configurable: true })

    Error.call(this)

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, Err)
    }
  }

  Err.prototype = new Proto()
  return Err
}

const LevelUPError = createError('LevelUPError', Error)

module.exports = {
  LevelUPError: LevelUPError,
  InitializationError: createError('InitializationError', LevelUPError),
  OpenError: createError('OpenError', LevelUPError),
  ReadError: createError('ReadError', LevelUPError),
  WriteError: createError('WriteError', LevelUPError),
  NotFoundError: createError('NotFoundError', LevelUPError),
  EncodingError: createError('EncodingError', LevelUPError)
}

module.exports.NotFoundError.prototype.notFound = true
module.exports.NotFoundError.prototype.status = 404


/***/ }),

/***/ 3462:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_140698__) => {

"use strict";


const inherits = __nested_webpack_require_140698__(5717)
const { Readable } = __nested_webpack_require_140698__(9212)

module.exports = ReadStream
inherits(ReadStream, Readable)

function ReadStream (iterator, options) {
  if (!(this instanceof ReadStream)) return new ReadStream(iterator, options)
  options = options || {}
  Readable.call(this, Object.assign({}, options, {
    objectMode: true
  }))
  this._iterator = iterator
  this._options = options
  this.on('end', this.destroy.bind(this, null, null))
}

ReadStream.prototype._read = function () {
  if (this.destroyed) return

  this._iterator.next((err, key, value) => {
    if (this.destroyed) return
    if (err) return this.destroy(err)

    if (key === undefined && value === undefined) {
      this.push(null)
    } else if (this._options.keys !== false && this._options.values === false) {
      this.push(key)
    } else if (this._options.keys === false && this._options.values !== false) {
      this.push(value)
    } else {
      this.push({ key, value })
    }
  })
}

ReadStream.prototype._destroy = function (err, callback) {
  this._iterator.end(function (err2) {
    callback(err || err2)
  })
}


/***/ }),

/***/ 5387:
/***/ ((module) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.q = codes;


/***/ }),

/***/ 8190:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_146193__) => {

"use strict";
/* provided dependency */ var process = __nested_webpack_require_146193__(4155);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __nested_webpack_require_146193__(4152);

var Writable = __nested_webpack_require_146193__(5932);

__nested_webpack_require_146193__(5717)(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

/***/ }),

/***/ 6845:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_150752__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __nested_webpack_require_150752__(2871);

__nested_webpack_require_150752__(5717)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ 4152:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_152478__) => {

"use strict";
/* provided dependency */ var process = __nested_webpack_require_152478__(4155);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __nested_webpack_require_152478__(7187).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __nested_webpack_require_152478__(2574);
/*</replacement>*/


var Buffer = __nested_webpack_require_152478__(8764).Buffer;

var OurUint8Array = __nested_webpack_require_152478__.g.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __nested_webpack_require_152478__(1367);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __nested_webpack_require_152478__(5664);

var destroyImpl = __nested_webpack_require_152478__(8931);

var _require = __nested_webpack_require_152478__(7997),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __nested_webpack_require_152478__(5387)/* .codes */ .q,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__nested_webpack_require_152478__(5717)(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __nested_webpack_require_152478__(8190);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __nested_webpack_require_152478__(180)/* .StringDecoder */ .s;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __nested_webpack_require_152478__(8190);
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __nested_webpack_require_152478__(180)/* .StringDecoder */ .s;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __nested_webpack_require_152478__(1913);
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __nested_webpack_require_152478__(5117);
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

/***/ }),

/***/ 2871:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_188606__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __nested_webpack_require_188606__(5387)/* .codes */ .q,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __nested_webpack_require_188606__(8190);

__nested_webpack_require_188606__(5717)(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),

/***/ 5932:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_196666__) => {

"use strict";
/* provided dependency */ var process = __nested_webpack_require_196666__(4155);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __nested_webpack_require_196666__(4927)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __nested_webpack_require_196666__(2574);
/*</replacement>*/


var Buffer = __nested_webpack_require_196666__(8764).Buffer;

var OurUint8Array = __nested_webpack_require_196666__.g.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __nested_webpack_require_196666__(8931);

var _require = __nested_webpack_require_196666__(7997),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __nested_webpack_require_196666__(5387)/* .codes */ .q,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__nested_webpack_require_196666__(5717)(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __nested_webpack_require_196666__(8190);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __nested_webpack_require_196666__(8190); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};

/***/ }),

/***/ 1913:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_218655__) => {

"use strict";
/* provided dependency */ var process = __nested_webpack_require_218655__(4155);


var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __nested_webpack_require_218655__(9103);

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;

/***/ }),

/***/ 5664:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_224773__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __nested_webpack_require_224773__(8764),
    Buffer = _require.Buffer;

var _require2 = __nested_webpack_require_224773__(267),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),

/***/ 8931:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_231220__) => {

"use strict";
/* provided dependency */ var process = __nested_webpack_require_231220__(4155);
 // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};

/***/ }),

/***/ 9103:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_234499__) => {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __nested_webpack_require_234499__(5387)/* .codes.ERR_STREAM_PREMATURE_CLOSE */ .q.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),

/***/ 5117:
/***/ ((module) => {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),

/***/ 1240:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_237879__) => {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __nested_webpack_require_237879__(5387)/* .codes */ .q,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __nested_webpack_require_237879__(9103);
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),

/***/ 7997:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_240409__) => {

"use strict";


var ERR_INVALID_OPT_VALUE = __nested_webpack_require_240409__(5387)/* .codes.ERR_INVALID_OPT_VALUE */ .q.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),

/***/ 2574:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_241283__) => {

module.exports = __nested_webpack_require_241283__(7187).EventEmitter;


/***/ }),

/***/ 9212:
/***/ ((module, exports, __nested_webpack_require_241417__) => {

exports = module.exports = __nested_webpack_require_241417__(4152);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __nested_webpack_require_241417__(5932);
exports.Duplex = __nested_webpack_require_241417__(8190);
exports.Transform = __nested_webpack_require_241417__(2871);
exports.PassThrough = __nested_webpack_require_241417__(6845);
exports.finished = __nested_webpack_require_241417__(9103);
exports.pipeline = __nested_webpack_require_241417__(1240);


/***/ }),

/***/ 1132:
/***/ ((module, exports, __nested_webpack_require_241880__) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __nested_webpack_require_241880__(8764)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ 180:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_243651__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __nested_webpack_require_243651__(1132).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.s = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ 9558:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_253202__) => {

"use strict";
/* global indexedDB */



module.exports = Level

const AbstractLevelDOWN = __nested_webpack_require_253202__(4012).AbstractLevelDOWN
const inherits = __nested_webpack_require_253202__(5717)
const parallel = __nested_webpack_require_253202__(9967)
const Iterator = __nested_webpack_require_253202__(3016)
const serialize = __nested_webpack_require_253202__(5568)
const deserialize = __nested_webpack_require_253202__(8450)
const support = __nested_webpack_require_253202__(1228)
const clear = __nested_webpack_require_253202__(2854)
const createKeyRange = __nested_webpack_require_253202__(8950)

const DEFAULT_PREFIX = 'level-js-'

function Level (location, opts) {
  if (!(this instanceof Level)) return new Level(location, opts)

  AbstractLevelDOWN.call(this, {
    bufferKeys: support.bufferKeys(indexedDB),
    snapshots: true,
    permanence: true,
    clear: true,
    getMany: true
  })

  opts = opts || {}

  if (typeof location !== 'string') {
    throw new Error('constructor requires a location string argument')
  }

  this.location = location
  this.prefix = opts.prefix == null ? DEFAULT_PREFIX : opts.prefix
  this.version = parseInt(opts.version || 1, 10)
}

inherits(Level, AbstractLevelDOWN)

Level.prototype.type = 'level-js'

Level.prototype._open = function (options, callback) {
  const req = indexedDB.open(this.prefix + this.location, this.version)

  req.onerror = function () {
    callback(req.error || new Error('unknown error'))
  }

  req.onsuccess = () => {
    this.db = req.result
    callback()
  }

  req.onupgradeneeded = (ev) => {
    const db = ev.target.result

    if (!db.objectStoreNames.contains(this.location)) {
      db.createObjectStore(this.location)
    }
  }
}

Level.prototype.store = function (mode) {
  const transaction = this.db.transaction([this.location], mode)
  return transaction.objectStore(this.location)
}

Level.prototype.await = function (request, callback) {
  const transaction = request.transaction

  // Take advantage of the fact that a non-canceled request error aborts
  // the transaction. I.e. no need to listen for "request.onerror".
  transaction.onabort = function () {
    callback(transaction.error || new Error('aborted by user'))
  }

  transaction.oncomplete = function () {
    callback(null, request.result)
  }
}

Level.prototype._get = function (key, options, callback) {
  const store = this.store('readonly')
  let req

  try {
    req = store.get(key)
  } catch (err) {
    return this._nextTick(callback, err)
  }

  this.await(req, function (err, value) {
    if (err) return callback(err)

    if (value === undefined) {
      // 'NotFound' error, consistent with LevelDOWN API
      return callback(new Error('NotFound'))
    }

    callback(null, deserialize(value, options.asBuffer))
  })
}

Level.prototype._getMany = function (keys, options, callback) {
  const asBuffer = options.asBuffer
  const store = this.store('readonly')
  const tasks = keys.map((key) => (next) => {
    let request

    try {
      request = store.get(key)
    } catch (err) {
      return next(err)
    }

    request.onsuccess = () => {
      const value = request.result
      next(null, value === undefined ? value : deserialize(value, asBuffer))
    }

    request.onerror = (ev) => {
      ev.stopPropagation()
      next(request.error)
    }
  })

  parallel(tasks, 16, callback)
}

Level.prototype._del = function (key, options, callback) {
  const store = this.store('readwrite')
  let req

  try {
    req = store.delete(key)
  } catch (err) {
    return this._nextTick(callback, err)
  }

  this.await(req, callback)
}

Level.prototype._put = function (key, value, options, callback) {
  const store = this.store('readwrite')
  let req

  try {
    // Will throw a DataError or DataCloneError if the environment
    // does not support serializing the key or value respectively.
    req = store.put(value, key)
  } catch (err) {
    return this._nextTick(callback, err)
  }

  this.await(req, callback)
}

Level.prototype._serializeKey = function (key) {
  return serialize(key, this.supports.bufferKeys)
}

Level.prototype._serializeValue = function (value) {
  return serialize(value, true)
}

Level.prototype._iterator = function (options) {
  return new Iterator(this, this.location, options)
}

Level.prototype._batch = function (operations, options, callback) {
  if (operations.length === 0) return this._nextTick(callback)

  const store = this.store('readwrite')
  const transaction = store.transaction
  let index = 0
  let error

  transaction.onabort = function () {
    callback(error || transaction.error || new Error('aborted by user'))
  }

  transaction.oncomplete = function () {
    callback()
  }

  // Wait for a request to complete before making the next, saving CPU.
  function loop () {
    const op = operations[index++]
    const key = op.key

    let req

    try {
      req = op.type === 'del' ? store.delete(key) : store.put(op.value, key)
    } catch (err) {
      error = err
      transaction.abort()
      return
    }

    if (index < operations.length) {
      req.onsuccess = loop
    }
  }

  loop()
}

Level.prototype._clear = function (options, callback) {
  let keyRange
  let req

  try {
    keyRange = createKeyRange(options)
  } catch (e) {
    // The lower key is greater than the upper key.
    // IndexedDB throws an error, but we'll just do nothing.
    return this._nextTick(callback)
  }

  if (options.limit >= 0) {
    // IDBObjectStore#delete(range) doesn't have such an option.
    // Fall back to cursor-based implementation.
    return clear(this, this.location, keyRange, options, callback)
  }

  try {
    const store = this.store('readwrite')
    req = keyRange ? store.delete(keyRange) : store.clear()
  } catch (err) {
    return this._nextTick(callback, err)
  }

  this.await(req, callback)
}

Level.prototype._close = function (callback) {
  this.db.close()
  this._nextTick(callback)
}

// NOTE: remove in a next major release
Level.prototype.upgrade = function (callback) {
  if (this.status !== 'open') {
    return this._nextTick(callback, new Error('cannot upgrade() before open()'))
  }

  const it = this.iterator()
  const batchOptions = {}
  const self = this

  it._deserializeKey = it._deserializeValue = identity
  next()

  function next (err) {
    if (err) return finish(err)
    it.next(each)
  }

  function each (err, key, value) {
    if (err || key === undefined) {
      return finish(err)
    }

    const newKey = self._serializeKey(deserialize(key, true))
    const newValue = self._serializeValue(deserialize(value, true))

    // To bypass serialization on the old key, use _batch() instead of batch().
    // NOTE: if we disable snapshotting (#86) this could lead to a loop of
    // inserting and then iterating those same entries, because the new keys
    // possibly sort after the old keys.
    self._batch([
      { type: 'del', key: key },
      { type: 'put', key: newKey, value: newValue }
    ], batchOptions, next)
  }

  function finish (err) {
    it.end(function (err2) {
      callback(err || err2)
    })
  }

  function identity (data) {
    return data
  }
}

Level.destroy = function (location, prefix, callback) {
  if (typeof prefix === 'function') {
    callback = prefix
    prefix = DEFAULT_PREFIX
  }
  const request = indexedDB.deleteDatabase(prefix + location)
  request.onsuccess = function () {
    callback()
  }
  request.onerror = function (err) {
    callback(err)
  }
}


/***/ }),

/***/ 3016:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_260667__) => {

"use strict";


const inherits = __nested_webpack_require_260667__(5717)
const AbstractIterator = __nested_webpack_require_260667__(4012).AbstractIterator
const createKeyRange = __nested_webpack_require_260667__(8950)
const deserialize = __nested_webpack_require_260667__(8450)
const noop = function () {}

module.exports = Iterator

function Iterator (db, location, options) {
  AbstractIterator.call(this, db)

  this._limit = options.limit
  this._count = 0
  this._callback = null
  this._cache = []
  this._completed = false
  this._aborted = false
  this._error = null
  this._transaction = null

  this._keys = options.keys
  this._values = options.values
  this._keyAsBuffer = options.keyAsBuffer
  this._valueAsBuffer = options.valueAsBuffer

  if (this._limit === 0) {
    this._completed = true
    return
  }

  let keyRange

  try {
    keyRange = createKeyRange(options)
  } catch (e) {
    // The lower key is greater than the upper key.
    // IndexedDB throws an error, but we'll just return 0 results.
    this._completed = true
    return
  }

  this.createIterator(location, keyRange, options.reverse)
}

inherits(Iterator, AbstractIterator)

Iterator.prototype.createIterator = function (location, keyRange, reverse) {
  const transaction = this.db.db.transaction([location], 'readonly')
  const store = transaction.objectStore(location)
  const req = store.openCursor(keyRange, reverse ? 'prev' : 'next')

  req.onsuccess = (ev) => {
    const cursor = ev.target.result
    if (cursor) this.onItem(cursor)
  }

  this._transaction = transaction

  // If an error occurs (on the request), the transaction will abort.
  transaction.onabort = () => {
    this.onAbort(this._transaction.error || new Error('aborted by user'))
  }

  transaction.oncomplete = () => {
    this.onComplete()
  }
}

Iterator.prototype.onItem = function (cursor) {
  this._cache.push(cursor.key, cursor.value)

  if (this._limit <= 0 || ++this._count < this._limit) {
    cursor.continue()
  }

  this.maybeNext()
}

Iterator.prototype.onAbort = function (err) {
  this._aborted = true
  this._error = err
  this.maybeNext()
}

Iterator.prototype.onComplete = function () {
  this._completed = true
  this.maybeNext()
}

Iterator.prototype.maybeNext = function () {
  if (this._callback) {
    this._next(this._callback)
    this._callback = null
  }
}

Iterator.prototype._next = function (callback) {
  if (this._aborted) {
    // The error should be picked up by either next() or end().
    const err = this._error
    this._error = null
    this._nextTick(callback, err)
  } else if (this._cache.length > 0) {
    let key = this._cache.shift()
    let value = this._cache.shift()

    if (this._keys && key !== undefined) {
      key = this._deserializeKey(key, this._keyAsBuffer)
    } else {
      key = undefined
    }

    if (this._values && value !== undefined) {
      value = this._deserializeValue(value, this._valueAsBuffer)
    } else {
      value = undefined
    }

    this._nextTick(callback, null, key, value)
  } else if (this._completed) {
    this._nextTick(callback)
  } else {
    this._callback = callback
  }
}

// Exposed for the v4 to v5 upgrade utility
Iterator.prototype._deserializeKey = deserialize
Iterator.prototype._deserializeValue = deserialize

Iterator.prototype._end = function (callback) {
  if (this._aborted || this._completed) {
    return this._nextTick(callback, this._error)
  }

  // Don't advance the cursor anymore, and the transaction will complete
  // on its own in the next tick. This approach is much cleaner than calling
  // transaction.abort() with its unpredictable event order.
  this.onItem = noop
  this.onAbort = callback
  this.onComplete = callback
}


/***/ }),

/***/ 2854:
/***/ ((module) => {

"use strict";


module.exports = function clear (db, location, keyRange, options, callback) {
  if (options.limit === 0) return db._nextTick(callback)

  const transaction = db.db.transaction([location], 'readwrite')
  const store = transaction.objectStore(location)
  let count = 0

  transaction.oncomplete = function () {
    callback()
  }

  transaction.onabort = function () {
    callback(transaction.error || new Error('aborted by user'))
  }

  // A key cursor is faster (skips reading values) but not supported by IE
  const method = store.openKeyCursor ? 'openKeyCursor' : 'openCursor'
  const direction = options.reverse ? 'prev' : 'next'

  store[method](keyRange, direction).onsuccess = function (ev) {
    const cursor = ev.target.result

    if (cursor) {
      // Wait for a request to complete before continuing, saving CPU.
      store.delete(cursor.key).onsuccess = function () {
        if (options.limit <= 0 || ++count < options.limit) {
          cursor.continue()
        }
      }
    }
  }
}


/***/ }),

/***/ 8450:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_265484__) => {

"use strict";


const Buffer = __nested_webpack_require_265484__(8764).Buffer
const ta2str = (function () {
  if (__nested_webpack_require_265484__.g.TextDecoder) {
    const decoder = new TextDecoder('utf-8')
    return decoder.decode.bind(decoder)
  } else {
    return function ta2str (ta) {
      return ta2buf(ta).toString()
    }
  }
})()

const ab2str = (function () {
  if (__nested_webpack_require_265484__.g.TextDecoder) {
    const decoder = new TextDecoder('utf-8')
    return decoder.decode.bind(decoder)
  } else {
    return function ab2str (ab) {
      return Buffer.from(ab).toString()
    }
  }
})()

function ta2buf (ta) {
  const buf = Buffer.from(ta.buffer)

  if (ta.byteLength === ta.buffer.byteLength) {
    return buf
  } else {
    return buf.slice(ta.byteOffset, ta.byteOffset + ta.byteLength)
  }
}

module.exports = function (data, asBuffer) {
  if (data instanceof Uint8Array) {
    return asBuffer ? ta2buf(data) : ta2str(data)
  } else if (data instanceof ArrayBuffer) {
    return asBuffer ? Buffer.from(data) : ab2str(data)
  } else {
    return asBuffer ? Buffer.from(String(data)) : String(data)
  }
}


/***/ }),

/***/ 8950:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_266674__) => {

"use strict";
/* global IDBKeyRange */



const ltgt = __nested_webpack_require_266674__(2303)
const NONE = Symbol('none')

module.exports = function createKeyRange (options) {
  const lower = ltgt.lowerBound(options, NONE)
  const upper = ltgt.upperBound(options, NONE)
  const lowerOpen = ltgt.lowerBoundExclusive(options, NONE)
  const upperOpen = ltgt.upperBoundExclusive(options, NONE)

  if (lower !== NONE && upper !== NONE) {
    return IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen)
  } else if (lower !== NONE) {
    return IDBKeyRange.lowerBound(lower, lowerOpen)
  } else if (upper !== NONE) {
    return IDBKeyRange.upperBound(upper, upperOpen)
  } else {
    return null
  }
}


/***/ }),

/***/ 5568:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_267452__) => {

"use strict";


const Buffer = __nested_webpack_require_267452__(8764).Buffer
// Returns either a Uint8Array or Buffer (doesn't matter to
// IndexedDB, because Buffer is a subclass of Uint8Array)
const str2bin = (function () {
  if (__nested_webpack_require_267452__.g.TextEncoder) {
    const encoder = new TextEncoder('utf-8')
    return encoder.encode.bind(encoder)
  } else {
    return Buffer.from
  }
})()

module.exports = function (data, asBuffer) {
  if (asBuffer) {
    return Buffer.isBuffer(data) ? data : str2bin(String(data))
  } else {
    return String(data)
  }
}


/***/ }),

/***/ 1228:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_268099__) => {

"use strict";


const Buffer = __nested_webpack_require_268099__(8764).Buffer

exports.test = function (key) {
  return function test (impl) {
    try {
      impl.cmp(key, 0)
      return true
    } catch (err) {
      return false
    }
  }
}

// Detect binary key support (IndexedDB Second Edition)
exports.bufferKeys = exports.test(Buffer.alloc(0))


/***/ }),

/***/ 1675:
/***/ ((module) => {

"use strict";


module.exports = function supports (...manifests) {
  const manifest = manifests.reduce((acc, m) => Object.assign(acc, m), {})

  return Object.assign(manifest, {
    // Features of abstract-leveldown
    bufferKeys: manifest.bufferKeys || false,
    snapshots: manifest.snapshots || false,
    permanence: manifest.permanence || false,
    seek: manifest.seek || false,
    clear: manifest.clear || false,
    getMany: manifest.getMany || false,
    keyIterator: manifest.keyIterator || false,
    valueIterator: manifest.valueIterator || false,
    iteratorNextv: manifest.iteratorNextv || false,
    iteratorAll: manifest.iteratorAll || false,

    // Features of abstract-leveldown that levelup doesn't have
    status: manifest.status || false,
    idempotentOpen: manifest.idempotentOpen || false,
    passiveOpen: manifest.passiveOpen || false,
    serialize: manifest.serialize || false,

    // Features of disk-based implementations
    createIfMissing: manifest.createIfMissing || false,
    errorIfExists: manifest.errorIfExists || false,

    // Features of level(up) that abstract-leveldown doesn't have yet
    deferredOpen: manifest.deferredOpen || false,
    openCallback: manifest.openCallback || false,
    promises: manifest.promises || false,
    streams: manifest.streams || false,
    encodings: maybeObject(manifest.encodings),
    events: maybeObject(manifest.events),

    // Methods that are not part of abstract-leveldown or levelup
    additionalMethods: Object.assign({}, manifest.additionalMethods)
  })
}

function maybeObject (value) {
  return !value ? false : Object.assign({}, value)
}


/***/ }),

/***/ 8133:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_270217__) => {

"use strict";


const WriteError = __nested_webpack_require_270217__(6604).WriteError
const catering = __nested_webpack_require_270217__(6957)
const getCallback = __nested_webpack_require_270217__(2369)/* .getCallback */ .R
const getOptions = __nested_webpack_require_270217__(2369)/* .getOptions */ .F

function Batch (levelup) {
  this.db = levelup
  this.batch = levelup.db.batch()
  this.ops = []
  this.length = 0
}

Batch.prototype.put = function (key, value, options) {
  try {
    this.batch.put(key, value, options)
  } catch (e) {
    throw new WriteError(e)
  }

  this.ops.push({ ...options, type: 'put', key, value })
  this.length++

  return this
}

Batch.prototype.del = function (key, options) {
  try {
    this.batch.del(key, options)
  } catch (err) {
    throw new WriteError(err)
  }

  this.ops.push({ ...options, type: 'del', key })
  this.length++

  return this
}

Batch.prototype.clear = function () {
  try {
    this.batch.clear()
  } catch (err) {
    throw new WriteError(err)
  }

  this.ops = []
  this.length = 0

  return this
}

Batch.prototype.write = function (options, callback) {
  const levelup = this.db
  const ops = this.ops

  callback = getCallback(options, callback)
  callback = catering.fromCallback(callback)
  options = getOptions(options)

  try {
    this.batch.write(options, function (err) {
      if (err) { return callback(new WriteError(err)) }
      levelup.emit('batch', ops)
      callback()
    })
  } catch (err) {
    throw new WriteError(err)
  }

  return callback.promise
}

module.exports = Batch


/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.R = function (options, callback) {
  return typeof options === 'function' ? options : callback
}

exports.F = function (options) {
  return typeof options === 'object' && options !== null ? options : {}
}


/***/ }),

/***/ 4918:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_272122__) => {

"use strict";


const EventEmitter = __nested_webpack_require_272122__(7187).EventEmitter
const inherits = __nested_webpack_require_272122__(9539).inherits
const DeferredLevelDOWN = __nested_webpack_require_272122__(6944)
const IteratorStream = __nested_webpack_require_272122__(3462)
const Batch = __nested_webpack_require_272122__(8133)
const errors = __nested_webpack_require_272122__(6604)
const supports = __nested_webpack_require_272122__(1675)
const catering = __nested_webpack_require_272122__(6957)
const getCallback = __nested_webpack_require_272122__(2369)/* .getCallback */ .R
const getOptions = __nested_webpack_require_272122__(2369)/* .getOptions */ .F

// TODO: after we drop node 10, also use queueMicrotask() in node
const nextTick = __nested_webpack_require_272122__(9350)

const WriteError = errors.WriteError
const ReadError = errors.ReadError
const NotFoundError = errors.NotFoundError
const OpenError = errors.OpenError
const InitializationError = errors.InitializationError

function LevelUP (db, options, callback) {
  if (!(this instanceof LevelUP)) {
    return new LevelUP(db, options, callback)
  }

  let error

  EventEmitter.call(this)
  this.setMaxListeners(Infinity)

  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  options = options || {}

  if (!db || typeof db !== 'object') {
    error = new InitializationError('First argument must be an abstract-leveldown compliant store')
    if (typeof callback === 'function') {
      return nextTick(callback, error)
    }
    throw error
  }

  if (typeof db.status !== 'string') {
    throw new Error('.status required, old abstract-leveldown')
  }

  this.options = getOptions(options)
  this._db = db
  this.db = null
  this.open(callback || ((err) => {
    if (err) this.emit('error', err)
  }))

  // Create manifest based on deferred-leveldown's
  this.supports = supports(this.db.supports, {
    status: true,
    deferredOpen: true,
    openCallback: true,
    promises: true,
    streams: true
  })

  // Experimental: enrich levelup interface
  for (const method of Object.keys(this.supports.additionalMethods)) {
    if (this[method] != null) continue

    // Don't do this.db[method].bind() because this.db is dynamic.
    this[method] = function (...args) {
      return this.db[method](...args)
    }
  }
}

LevelUP.prototype.emit = EventEmitter.prototype.emit
LevelUP.prototype.once = EventEmitter.prototype.once
inherits(LevelUP, EventEmitter)

// TODO: tests
Object.defineProperty(LevelUP.prototype, 'status', {
  enumerable: true,
  get () {
    return this.db.status
  }
})

// TODO: tests
LevelUP.prototype.isOperational = function () {
  return this.db.status === 'open' || this.db.status === 'opening'
}

LevelUP.prototype.open = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts
    opts = null
  }

  callback = catering.fromCallback(callback)

  if (!opts) {
    opts = this.options
  }

  // 1) Don't check db.status until levelup has opened,
  // in order for levelup events to be consistent
  if (this.db && this.isOpen()) {
    nextTick(callback, null, this)
    return callback.promise
  }

  if (this.db && this._isOpening()) {
    this.once('open', () => { callback(null, this) })
    return callback.promise
  }

  // 2) Instead let deferred-leveldown handle already-open cases.
  // TODO: ideally though, levelup would have its own status
  this.db = new DeferredLevelDOWN(this._db)
  this.emit('opening')

  this.db.open(opts, (err) => {
    if (err) {
      return callback(new OpenError(err))
    }
    this.db = this._db
    callback(null, this)
    this.emit('open')
    this.emit('ready')
  })

  return callback.promise
}

LevelUP.prototype.close = function (callback) {
  callback = catering.fromCallback(callback)

  if (this.isOpen()) {
    this.db.close((err, ...rest) => {
      this.emit('closed')
      callback(err, ...rest)
    })
    this.emit('closing')
  } else if (this.isClosed()) {
    nextTick(callback)
  } else if (this.db.status === 'closing') {
    this.once('closed', callback)
  } else if (this._isOpening()) {
    this.once('open', () => {
      this.close(callback)
    })
  }

  return callback.promise
}

// TODO: remove in future major
LevelUP.prototype.isOpen = function () {
  return this.db.status === 'open'
}

// TODO: remove in future major
LevelUP.prototype._isOpening = function () {
  return this.db.status === 'opening'
}

// TODO: remove in future major
LevelUP.prototype.isClosed = function () {
  return (/^clos|new/).test(this.db.status)
}

LevelUP.prototype.get = function (key, options, callback) {
  callback = getCallback(options, callback)
  callback = catering.fromCallback(callback)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  options = getOptions(options)

  this.db.get(key, options, function (err, value) {
    if (err) {
      if ((/notfound/i).test(err) || err.notFound) {
        err = new NotFoundError('Key not found in database [' + key + ']', err)
      } else {
        err = new ReadError(err)
      }
      return callback(err)
    }
    callback(null, value)
  })

  return callback.promise
}

LevelUP.prototype.getMany = function (keys, options, callback) {
  return this.db.getMany(keys, options, callback)
}

LevelUP.prototype.put = function (key, value, options, callback) {
  callback = getCallback(options, callback)
  callback = catering.fromCallback(callback)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  options = getOptions(options)

  this.db.put(key, value, options, (err) => {
    if (err) {
      return callback(new WriteError(err))
    }
    this.emit('put', key, value)
    callback()
  })

  return callback.promise
}

LevelUP.prototype.del = function (key, options, callback) {
  callback = getCallback(options, callback)
  callback = catering.fromCallback(callback)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  options = getOptions(options)

  this.db.del(key, options, (err) => {
    if (err) {
      return callback(new WriteError(err))
    }
    this.emit('del', key)
    callback()
  })

  return callback.promise
}

LevelUP.prototype.batch = function (arr, options, callback) {
  if (!arguments.length) {
    return new Batch(this)
  }

  if (typeof arr === 'function') callback = arr
  else callback = getCallback(options, callback)

  callback = catering.fromCallback(callback)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  options = getOptions(options)

  this.db.batch(arr, options, (err) => {
    if (err) {
      return callback(new WriteError(err))
    }
    this.emit('batch', arr)
    callback()
  })

  return callback.promise
}

LevelUP.prototype.iterator = function (options) {
  return this.db.iterator(options)
}

LevelUP.prototype.clear = function (options, callback) {
  callback = getCallback(options, callback)
  options = getOptions(options)
  callback = catering.fromCallback(callback)

  if (maybeError(this, callback)) {
    return callback.promise
  }

  this.db.clear(options, (err) => {
    if (err) {
      return callback(new WriteError(err))
    }
    this.emit('clear', options)
    callback()
  })

  return callback.promise
}

LevelUP.prototype.readStream =
LevelUP.prototype.createReadStream = function (options) {
  options = Object.assign({ keys: true, values: true }, options)
  if (typeof options.limit !== 'number') { options.limit = -1 }
  return new IteratorStream(this.db.iterator(options), options)
}

LevelUP.prototype.keyStream =
LevelUP.prototype.createKeyStream = function (options) {
  return this.createReadStream(Object.assign({}, options, { keys: true, values: false }))
}

LevelUP.prototype.valueStream =
LevelUP.prototype.createValueStream = function (options) {
  return this.createReadStream(Object.assign({}, options, { keys: false, values: true }))
}

LevelUP.prototype.toString = function () {
  return 'LevelUP'
}

LevelUP.prototype.type = 'levelup'

// Expose nextTick for API parity with abstract-leveldown
LevelUP.prototype._nextTick = nextTick

function maybeError (db, callback) {
  if (!db.isOperational()) {
    nextTick(callback, new ReadError('Database is not open'))
    return true
  }

  return false
}

LevelUP.errors = errors
module.exports = LevelUP


/***/ }),

/***/ 9350:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_280371__) => {

"use strict";


const queueMicrotask = __nested_webpack_require_280371__(4375)

module.exports = function (fn, ...args) {
  if (args.length === 0) {
    queueMicrotask(fn)
  } else {
    queueMicrotask(() => fn(...args))
  }
}


/***/ }),

/***/ 2303:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_280678__) => {

/* provided dependency */ var Buffer = __nested_webpack_require_280678__(8764)["Buffer"];

exports.compare = function (a, b) {

  if(Buffer.isBuffer(a)) {
    var l = Math.min(a.length, b.length)
    for(var i = 0; i < l; i++) {
      var cmp = a[i] - b[i]
      if(cmp) return cmp
    }
    return a.length - b.length
  }

  return a < b ? -1 : a > b ? 1 : 0
}

// to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.

function isDef (val) {
  return val !== undefined && val !== ''
}

function has (range, name) {
  return Object.hasOwnProperty.call(range, name)
}

function hasKey(range, name) {
  return Object.hasOwnProperty.call(range, name) && name
}

var lowerBoundKey = exports.lowerBoundKey = function (range) {
    return (
       hasKey(range, 'gt')
    || hasKey(range, 'gte')
    || hasKey(range, 'min')
    || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
    || undefined
    )
}

var lowerBound = exports.lowerBound = function (range, def) {
  var k = lowerBoundKey(range)
  return k ? range[k] : def
}

var lowerBoundInclusive = exports.lowerBoundInclusive = function (range) {
  return has(range, 'gt') ? false : true
}

var upperBoundInclusive = exports.upperBoundInclusive =
  function (range) {
    return (has(range, 'lt') /*&& !range.maxEx*/) ? false : true
  }

var lowerBoundExclusive = exports.lowerBoundExclusive =
  function (range) {
    return !lowerBoundInclusive(range)
  }

var upperBoundExclusive = exports.upperBoundExclusive =
  function (range) {
    return !upperBoundInclusive(range)
  }

var upperBoundKey = exports.upperBoundKey = function (range) {
    return (
       hasKey(range, 'lt')
    || hasKey(range, 'lte')
    || hasKey(range, 'max')
    || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'))
    || undefined
    )
}

var upperBound = exports.upperBound = function (range, def) {
  var k = upperBoundKey(range)
  return k ? range[k] : def
}

exports.start = function (range, def) {
  return range.reverse ? upperBound(range, def) : lowerBound(range, def)
}
exports.end = function (range, def) {
  return range.reverse ? lowerBound(range, def) : upperBound(range, def)
}
exports.startInclusive = function (range) {
  return (
    range.reverse
  ? upperBoundInclusive(range)
  : lowerBoundInclusive(range)
  )
}
exports.endInclusive = function (range) {
  return (
    range.reverse
  ? lowerBoundInclusive(range)
  : upperBoundInclusive(range)
  )
}

function id (e) { return e }

exports.toLtgt = function (range, _range, map, lower, upper) {
  _range = _range || {}
  map = map || id
  var defaults = arguments.length > 3
  var lb = exports.lowerBoundKey(range)
  var ub = exports.upperBoundKey(range)
  if(lb) {
    if(lb === 'gt') _range.gt = map(range.gt, false)
    else            _range.gte = map(range[lb], false)
  }
  else if(defaults)
    _range.gte = map(lower, false)

  if(ub) {
    if(ub === 'lt') _range.lt = map(range.lt, true)
    else            _range.lte = map(range[ub], true)
  }
  else if(defaults)
    _range.lte = map(upper, true)

  if(range.reverse != null)
    _range.reverse = !!range.reverse

  //if range was used mutably
  //(in level-sublevel it's part of an options object
  //that has more properties on it.)
  if(has(_range, 'max'))   delete _range.max
  if(has(_range, 'min'))   delete _range.min
  if(has(_range, 'start')) delete _range.start
  if(has(_range, 'end'))   delete _range.end

  return _range
}

exports.contains = function (range, key, compare) {
  compare = compare || exports.compare

  var lb = lowerBound(range)
  if(isDef(lb)) {
    var cmp = compare(key, lb)
    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
      return false
  }

  var ub = upperBound(range)
  if(isDef(ub)) {
    var cmp = compare(key, ub)
    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
      return false
  }

  return true
}

exports.filter = function (range, compare) {
  return function (key) {
    return exports.contains(range, key, compare)
  }
}




/***/ }),

/***/ 4155:
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_290334__) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask.bind(typeof window !== 'undefined' ? window : __nested_webpack_require_290334__.g)
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ }),

/***/ 3527:
/***/ ((module) => {

module.exports = typeof queueMicrotask === 'function' ? queueMicrotask : (fn) => Promise.resolve().then(fn)


/***/ }),

/***/ 9967:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_291000__) => {

/*! run-parallel-limit. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = runParallelLimit

const queueMicrotask = __nested_webpack_require_291000__(4375)

function runParallelLimit (tasks, limit, cb) {
  if (typeof limit !== 'number') throw new Error('second argument must be a Number')
  let results, len, pending, keys, isErrored
  let isSync = true
  let next

  if (Array.isArray(tasks)) {
    results = []
    pending = len = tasks.length
  } else {
    keys = Object.keys(tasks)
    results = {}
    pending = len = keys.length
  }

  function done (err) {
    function end () {
      if (cb) cb(err, results)
      cb = null
    }
    if (isSync) queueMicrotask(end)
    else end()
  }

  function each (i, err, result) {
    results[i] = result
    if (err) isErrored = true
    if (--pending === 0 || err) {
      done(err)
    } else if (!isErrored && next < len) {
      let key
      if (keys) {
        key = keys[next]
        next += 1
        tasks[key](function (err, result) { each(key, err, result) })
      } else {
        key = next
        next += 1
        tasks[key](function (err, result) { each(key, err, result) })
      }
    }
  }

  next = limit
  if (!pending) {
    // empty
    done(null)
  } else if (keys) {
    // object
    keys.some(function (key, i) {
      tasks[key](function (err, result) { each(key, err, result) })
      if (i === limit - 1) return true // early return
      return false
    })
  } else {
    // array
    tasks.some(function (task, i) {
      task(function (err, result) { each(i, err, result) })
      if (i === limit - 1) return true // early return
      return false
    })
  }

  isSync = false
}


/***/ }),

/***/ 554:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_292789__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.worker = void 0;
const levelup_1 = __importDefault(__nested_webpack_require_292789__(4918));
const level_js_1 = __importDefault(__nested_webpack_require_292789__(9558));
/* import { ILionDB, Type } from "../types";
import { bit2Int, int2Bit } from "../utils/byte";
import { Buffer } from "buffer"; */
const liondb_1 = __importDefault(__nested_webpack_require_292789__(2413));
//import cluster from "cluster";
const DefaultOptions = {
    sync: false,
    infoLog: "error",
    errorIfExists: false,
};
function worker({ 
/** 数据库文件名 */
filename, 
/** 运行环境, cluster集群, electron, browser:流星器 */
env, //: "browser";
/** 是否是主线程 */
isMaster, 
/** 当前线程 */
thread, }) {
    return new LionDBBrowser(filename);
}
exports.worker = worker;
//levelup.prototype.set = levelup.prototype.put;
/**
 * https://github.com/Level/levelup
 *
 * 本地数据存储, 数据会做持久化到磁盘, 不会丢失
 * =================================================只能在服务端使用, 不能在客户端使用
 *
 */
class LionDBBrowser extends liondb_1.default {
    constructor(filename, callback) {
        super();
        let _this = this;
        let ldb = level_js_1.default(filename);
        this.db = new levelup_1.default(ldb, {}, async (err) => {
            this.emit("open");
            callback && callback(err, _this);
        });
    }
}
exports.default = LionDBBrowser;
LionDBBrowser.worker = worker;
async function wait(ttl = 100) {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), ttl));
}


/***/ }),

/***/ 2413:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_294572__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __nested_webpack_require_294572__(9699);
const byte_1 = __nested_webpack_require_294572__(3388);
const buffer_1 = __nested_webpack_require_294572__(8764);
const levelup_1 = __importDefault(__nested_webpack_require_294572__(4918));
const match_1 = __importDefault(__nested_webpack_require_294572__(4840));
const eventemitter3_1 = __importDefault(__nested_webpack_require_294572__(6729));
const DefaultOptions = {
    sync: false,
    infoLog: "error",
    errorIfExists: false,
};
levelup_1.default.prototype.set = levelup_1.default.prototype.put;
class LionDB extends eventemitter3_1.default {
    constructor() {
        super();
    }
    /**
     * 设置值
     * @param key key关键字
     * @param value 值
     * @param ttl 过期时间, 默认=0表示不过期,单位s(秒)
     */
    async set(key, value, ttl = 0) {
        await this.put(key, value, ttl);
    }
    /**
     * 设置值
     * @param key key关键字
     * @param value 值
     * @param ttl 过期时间, 默认=0表示不过期,单位s(秒)
     */
    async put(key, value, ttl = 0) {
        let val = this.toValue(value, ttl);
        await new Promise((resolve) => this.db.put(key, val, DefaultOptions, () => resolve(undefined)));
    }
    toValue(value, ttl = 0) {
        let val = buffer_1.Buffer.from([]);
        let type = types_1.Type.Object;
        if (typeof value === "string") {
            type = types_1.Type.String;
            val = buffer_1.Buffer.from(value);
        }
        else if (typeof value === "number") {
            type = types_1.Type.Number;
            val = buffer_1.Buffer.from(byte_1.int2Bit(value));
        }
        else if (typeof value === "boolean") {
            type = types_1.Type.Boolean;
            val = buffer_1.Buffer.from([value === true ? 1 : 0]);
        }
        else if (value instanceof buffer_1.Buffer) {
            type = types_1.Type.Buffer;
            val = value;
        }
        else {
            type = types_1.Type.Object;
            val = buffer_1.Buffer.from(JSON.stringify(value));
        }
        ttl = ttl <= 0 ? 0 : ttl;
        ttl = Math.min(ttl, Math.pow(2, 32));
        let ttlAt = buffer_1.Buffer.from(byte_1.int2Bit(ttl, 4));
        let startAt = buffer_1.Buffer.from(byte_1.int2Bit(Math.floor(Date.now() / 1000), 5));
        val = buffer_1.Buffer.concat([buffer_1.Buffer.from([type]), startAt, ttlAt, val]);
        return val;
    }
    async getSet(key, value, ttl = 0) {
        let value0 = await this.get(key);
        await this.set(key, value, ttl);
        return value0;
    }
    async getIntSet(key, value, ttl = 0) {
        let value0 = await this.getInt(key);
        await this.set(key, value, ttl);
        return value0;
    }
    async getStringSet(key, value, ttl = 0) {
        let value0 = await this.getString(key);
        await this.set(key, value, ttl);
        return value0;
    }
    async getFloatSet(key, value, ttl = 0) {
        let value0 = await this.getFloat(key);
        await this.set(key, value, ttl);
        return value0;
    }
    async getString(key, extension = false) {
        let value = await this.get(key, extension);
        return JSON.stringify(value);
    }
    async getInt(key, extension = false) {
        let value = await this.get(key, extension);
        return parseInt(value) || 0;
    }
    async getFloat(key, extension = false) {
        let value = await this.get(key, extension);
        return parseFloat(value);
    }
    /**
     * 获取数据
     * @param key
     * @param extension 是否自动延期(默认false, 如果在put时,设置的过期时间, 才会起作用)
     */
    async get(key, extension = false) {
        let buffer = await this.db.get(key).catch((e) => undefined);
        if (buffer) {
            let res = analyzeValue(buffer);
            if (res) {
                if (res.ttl > 0) {
                    let curTime = Math.ceil(Date.now() / 1000);
                    if (res.startAt + res.ttl < curTime) {
                        this.del(key);
                        return undefined;
                    }
                    if (extension) {
                        let newTtl = curTime - res.startAt + res.ttl;
                        let ttlAt = buffer_1.Buffer.from(byte_1.int2Bit(newTtl, 4));
                        this.db.put(key, buffer_1.Buffer.concat([buffer_1.Buffer.from([res.type]), buffer.slice(1, 6), ttlAt, res.buffer]));
                    }
                }
                return res.value();
            }
        }
        return undefined;
    }
    async getMany(...keys) {
        let bufs = await this.db.getMany(keys, {}).catch((err) => []);
        let vals = [];
        for (let i = 0; i < bufs.length; i++) {
            let key = keys[i];
            let buffer = bufs[i];
            let res = analyzeValue(buffer);
            if (res) {
                if (res.ttl > 0) {
                    let curTime = Math.ceil(Date.now() / 1000);
                    if (res.startAt + res.ttl < curTime) {
                        this.del(key);
                        vals.push(undefined);
                    }
                }
                vals.push(res.value());
            }
            else {
                vals.push(undefined);
            }
        }
        return vals;
    }
    /**
     * 设置过期时间
     * @param key
     * @param ttl
     */
    async expire(key, ttl = 0) {
        ttl = Math.floor(ttl);
        if (ttl < 1)
            return;
        let value = this.get(key);
        return this.put(key, value, ttl);
    }
    /**
     * 存在
     * @param key
     */
    async exist(key) {
        return this.has(key);
    }
    async has(key) {
        /*      let ex = false;
        await this.iterator({ key, limit: 1, values: false }, (skey) => {
           ex = skey === key;
        });
        return ex; */
        let res = await this.get(key);
        return !!res;
    }
    /**
     * 取得增量后的值,并存储
     * @param key
     * @param increment 增量,默认为1
     */
    async increment(key, increment = 1, ttl = 0) {
        let v = (await this.get(key)) || 0;
        v += increment;
        await this.put(key, v, ttl);
        return v;
    }
    /**
     * 删除
     * @param key
     */
    async del(...keys) {
        if (keys.length < 1)
            return Promise.resolve();
        let batchs = [];
        keys = keys.filter((v) => v != undefined);
        for (let key of keys) {
            if (key.indexOf("*") >= 0) {
                await this.iterator({
                    key: key,
                }, async (skey, val) => {
                    if (batchs.length > 999)
                        return LionDB.Break;
                    batchs.push({ type: "del", key: skey });
                });
            }
            else {
                //await this.db.del(key, DefaultOptions);
                batchs.push({ type: "del", key: key });
            }
        }
        await this.batch(batchs);
    }
    /**
   *
   * 批处理
   * ttl: 过期时间, 默认没有, 单位秒
   * @param {
   *  {  type : 'del' | 'put' ,  key : string  } ,
   *  {  type : 'put' ,  key : 'name' ,  value : 'Yuri Irsenovich Kim', ttl: 60  } ,
   * } ops
   * @returns
   */
    async batch(ops) {
        if (ops instanceof Array) {
            ops = ops.map((v) => {
                if (v.type == "put") {
                    v.value = this.toValue(v.value, v.ttl);
                    delete v.ttl;
                }
                return v;
            });
        }
        await new Promise((resolve) => this.db.batch(ops, DefaultOptions, () => resolve(undefined)));
    }
    async clear(ops) {
        return this.db.clear(ops);
    }
    async close() {
        return new Promise((resolve) => {
            this.db.close(() => setTimeout(() => resolve(undefined), 150));
        });
    }
    async count(key, filter) {
        let count = 0;
        await this.iterator({ key: key, start: 0, limit: -1, filter }, async (key, val) => {
            count++;
        });
        return count;
    }
    async total() {
        let count = 0;
        let searchKey = buffer_1.Buffer.from([0]);
        let options = Object.assign({}, { limit: -1, keys: true, values: false }, { gte: searchKey });
        let iterator = this.db.iterator(options);
        iterator.seek(searchKey);
        await new Promise((resolve) => {
            (function next() {
                iterator.next(async (err, bufKey, bufValue) => {
                    if (!bufKey)
                        return resolve(count);
                    count++;
                    next();
                });
            })();
        }).catch((err) => console.warn("countQuick error", err.message));
        return count;
    }
    /**
     * 查询
     * @param param0
     * {
     *    key,
          limit = 100,
          start = 0,
          reverse = false,
          keys = true,
          filter,
          flow: boolean, 顺流查找(模糊搜索才有效), 在查询关键字不匹配时,自动往下查询,默认false
          query = {},
     * }
     */
    async find({ key, limit = 100, start = 0, reverse = false, keys = false, flow = false, filter, 
    //isRef = false,
    query = {}, }) {
        let list = [];
        let nfilter = mergeFilter(query || {}, filter);
        await this.iterator({ key, limit, start, flow, filter: nfilter, reverse }, (skey, svalue) => {
            if (svalue !== undefined)
                keys ? list.push({ key: skey, value: svalue }) : list.push(svalue);
        });
        //return reverse ? list.reverse() : list;
        return list;
    }
    /**
     *
     * @param param0 {
     *    key: 查询词, 结尾*表示模糊搜索
     *    limit: 查询限制条数,默认100条
     *    filter: 过滤器 (value: any, key: string) => boolean || Promise<boolean>
     *    reverse: boolean, 逆转,默认false true=逆转 false=正常
     *    flow: boolean, 顺流查找(模糊搜索才有效), 在查询关键字不匹配时,自动往下查询,默认false
     * }
     * @param callback
     */
    async iterator({ key, limit = 100, start = 0, filter, 
    //isRef = false,
    reverse = false, 
    //values = true,
    flow = false, }, callback) {
        let _this = this;
        const db = this.db;
        let searchKey = String(key).trim();
        /** 模糊搜索 */
        let isFuzzy = searchKey.endsWith("*");
        let isSearchAll = searchKey === "*";
        searchKey = isSearchAll ? searchKey : searchKey.replace(/^\*|\*$/g, "");
        let endKey = searchKey.replace(/[\*]+$/, "").trim();
        endKey = endKey.length < 1 ? "" : endKey.slice(0, endKey.length - 1) + String.fromCharCode(endKey[endKey.length - 1].charCodeAt(0) + 1); // endKey[endKey.length -1]
        //if (start > 100) values = false;
        let options = Object.assign({}, { key, limit: -1, values: true, reverse, gte: searchKey }); //{ gte: searchKey, reverse: reverse, lt: endKey }
        let iterator = this.db.iterator(options);
        return new Promise(async (resolve, reject) => {
            let itSize = 0;
            let itIndex = -1;
            if (!iterator)
                return resolve();
            iterator.seek(reverse ? endKey : searchKey);
            (function next() {
                iterator.next(async (error, bufKey, bufVal) => {
                    try {
                        if (!bufKey || error) {
                            //console.info("end===", !bufKey, error?.message);
                            iterator.end((err) => err && console.error("liondb err", err.message));
                            return resolve();
                        }
                        itIndex++;
                        if (start > itIndex)
                            return next();
                        let sKey = String(bufKey);
                        if (!isFuzzy) {
                            if (sKey != searchKey) {
                                iterator.end((err) => err && console.error("liondb err", err.message));
                                return resolve();
                            }
                        }
                        else {
                            if (limit > 0 && itSize >= limit) {
                                //如果限制条数， 超出刚好返回
                                iterator.end((err) => err && console.error("liondb err", err.message));
                                return resolve();
                            }
                            //不是顺流查询
                            if (!flow) {
                                //不是全局搜索， 发现开头不匹配，返回
                                if (!isSearchAll && !sKey.startsWith(searchKey)) {
                                    iterator.end((err) => err && console.error("err", err.message));
                                    return resolve();
                                }
                            }
                        }
                        //if (!values) bufVal = await db.get(bufKey).catch((err) => undefined);
                        let res = analyzeValue(bufVal);
                        if (res === undefined)
                            return next();
                        let curTime = Math.ceil(Date.now() / 1000);
                        if (res.ttl > 0 && res.startAt + res.ttl < curTime) {
                            _this.del(sKey);
                            await wait(5);
                        }
                        else {
                            let value = res.value();
                            //if (isRef) value = await _this.get(value);
                            if (filter) {
                                let v = await filter(value, sKey, {
                                    get: async (k) => _this.get(k),
                                    getMany: async (...ks) => _this.getMany(...ks),
                                });
                                if (v != true)
                                    return next();
                            }
                            itSize++;
                            let callbackResult = await callback(sKey, value);
                            if (callbackResult === LionDB.Break) {
                                iterator.end((err) => err && console.error("liondb err break", err.message));
                                return resolve();
                            }
                        }
                        next();
                    }
                    catch (err) {
                        console.info("err", err.stack);
                        iterator.end((err) => err && console.error("err", err.message));
                        resolve();
                    }
                });
            })();
        });
    }
    getProperty(property) {
        try {
            return this.db.db.getProperty(property);
        }
        catch (err) {
            return undefined;
        }
    }
    async filter(item, query, filter) {
        let _this = this;
        let nfilter = mergeFilter(query || {}, filter);
        let checked = await nfilter(item, "", {
            get: async (k) => _this.get(k),
            getMany: async (...ks) => _this.getMany(...ks),
        });
        return checked;
    }
}
exports.default = LionDB;
LionDB.Break = "break";
function analyzeValue(value) {
    try {
        if (value === undefined || value === null)
            return;
        let type = value[0];
        let startAt = byte_1.bit2Int(value.slice(1, 6));
        let ttl = byte_1.bit2Int(value.slice(6, 10));
        let val = value.slice(10);
        /*       if (String(startAt).startsWith("63")) {
           startAt = Math.floor(Date.now() / 1000) - 1;
           ttl = 1;
        } */
        return {
            ttl,
            value: () => {
                let result;
                switch (type) {
                    case types_1.Type.String:
                        result = val.toString();
                        break;
                    case types_1.Type.Number:
                        result = byte_1.bit2Int(val);
                        break;
                    case types_1.Type.Boolean:
                        result = val[0] >= 1 ? true : false;
                        break;
                    case types_1.Type.Buffer:
                        result = val;
                        break;
                    case types_1.Type.Object:
                        result = JSON.parse(val.toString());
                        break;
                }
                return result;
            },
            startAt,
            type,
            buffer: val,
        };
    }
    catch (err) {
        console.debug("liondb analyzeValue error", value === null || value === void 0 ? void 0 : value.length, err);
        return undefined;
    }
}
async function wait(ttl = 100) {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), ttl));
}
function mergeFilter(query, filter) {
    return async function (value, key, db) {
        let isTrue = false;
        if (value == undefined)
            return false;
        if (filter) {
            let funType = Object.prototype.toString.call(filter);
            try {
                if (funType == "[object AsyncFunction]") {
                    isTrue = await filter(value, key, db);
                }
                else {
                    isTrue = await filter(value, key, db);
                }
            }
            catch (err) {
                console.warn("filter error ", filter.toString(), err.message);
            }
            if (!isTrue)
                return false;
        }
        else {
            isTrue = true;
        }
        isTrue = match_1.default(query, value);
        return isTrue;
    };
}


/***/ }),

/***/ 4840:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function exp(query, value, symbol = "$equal") {
    let size = 0;
    let isTrue = false;
    if (isUnitType(value))
        return true;
    for (let k in query) {
        if (/^[$]/.test(k)) {
            isTrue = exp(query[k], value, k);
            if (!isTrue)
                return false;
            continue;
        }
        let v0 = query[k];
        let v1 = value[k];
        //数据库没有存储值
        size++;
        let type0 = isUnitType(v0);
        let type1 = isUnitType(v1);
        //都是基本类型
        if (type0 && type1) {
            //isTrue = /[*]$/.test(v0) ? String(v1).startsWith(v0.replace(/[*]+$/, "")) : v1 == v0;
            isTrue = matchLike(v0, v1, symbol);
            if (!isTrue)
                break;
        }
        if (v1 === undefined) {
            isTrue = matchLike(v0, v1, symbol);
        }
        else if (v1 instanceof Array) {
            let v0List = v0 instanceof Array ? v0 : [v0];
            let isTrue0 = false;
            for (let sv of v0List) {
                //if (v1.find((v) => (/[*]$/.test(sv) ? String(v).startsWith(sv.replace(/[*]+$/, "")) : v == sv))) isTrue0 = true;
                if (v1.find((v) => matchLike(sv, v, symbol)))
                    isTrue0 = true;
            }
            isTrue = isTrue0;
        }
        else if (v0 instanceof Array) {
            let isTrue0 = false;
            //if (v0.find((v) => (/[*]$/.test(v) ? String(v1).startsWith(v.replace(/[*]+$/, "")) : v == v1))) isTrue0 = true;
            if (v0.find((v) => matchLike(v, v1, symbol)))
                isTrue0 = true;
            isTrue = isTrue0;
        }
        if (!isTrue)
            return false;
    }
    isTrue = size < 1 ? true : isTrue;
    return isTrue;
}
exports.default = exp;
function matchLike(vs, vt, symbol = "$equal") {
    try {
        switch (symbol) {
            case "$lt":
                return vs > vt;
            case "$lte":
                return vs >= vt;
            case "$gt":
                return vs < vt;
            case "$gte":
                return vs <= vt;
            case "$ne":
                return vs != vt;
            case "$equal":
            default:
                if (/[*]$/.test(vs))
                    return (vt == undefined ? "" : vt).startsWith(vs.replace(/[*]+$/, ""));
                if (/^[*]/.test(vs))
                    return (vt == undefined ? "" : vt).endsWith(vs.replace(/^[*]+/, ""));
                return vs == vt;
        }
    }
    catch (err) {
        console.warn("matchLike error", vs, vt, err.stack || err.message);
    }
}
function isUnitType(val) {
    let type = typeof val;
    if (type === "string" || type === "number" || type === "boolean" || type === "bigint") {
        return true;
    }
    return false;
}


/***/ }),

/***/ 5254:
/***/ (function(module, exports, __nested_webpack_require_315730__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const liondb_browser_1 = __importDefault(__nested_webpack_require_315730__(554));
exports.default = liondb_browser_1.default;
module.exports = liondb_browser_1.default;


/***/ }),

/***/ 9699:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = void 0;
exports.Type = {
    String: 1,
    Number: 2,
    Object: 3,
    Buffer: 4,
    Boolean: 5,
};


/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bit2Int = exports.int2Bit = void 0;
/**
 * 整型转字节
 * @param {number} value 值
 * @param length 长度,单位字节, 最大为6,
 */
function int2Bit(value, length = 6) {
    const max = 6;
    let s = Array(max);
    value = Math.floor(value % 281474976710656); //  Math.pow(2, 48)
    let high = Math.floor(value / Math.pow(2, 32));
    let low = Math.floor(value % Math.pow(2, 32));
    for (let i = max - 1; i >= 0; i--) {
        if (i >= 2) {
            s[i] = (low >> ((max - i - 1) * 8)) & 0xff;
        }
        else {
            s[i] = (high >> (((max - i - 1) % 4) * 8)) & 0xff;
        }
    }
    /*   s[0] = (high >> 8) & 0xff;
    s[1] = (high >> 0) & 0xff;
    s[2] = (low >> 24) & 0xff;
    s[3] = (low >> 16) & 0xff;
    s[4] = (low >> 8) & 0xff;
    s[5] = (low >> 0) & 0xff; */
    return s.slice(max - Math.min(length, max));
}
exports.int2Bit = int2Bit;
/**
 *
 * @param {Buffer | Array<number>} value
 * @returns
 */
function bit2Int(value) {
    let max = 6;
    value = value.slice(Math.max(value.length - max, 0));
    let result = 0;
    let low = 0, high = 0;
    for (let i = 0; i < value.length; i++) {
        let move = (value.length - i - 1) * 8;
        let v = value[i];
        if (move >= 32) {
            high += Math.pow(2, 32) * (v << move % 32);
        }
        else if (move <= 24) {
            low += move == 24 ? v * Math.pow(2, 24) : v << move;
        }
    }
    result = high + low;
    return result;
}
exports.bit2Int = bit2Int;


/***/ }),

/***/ 4927:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_318166__) => {


/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!__nested_webpack_require_318166__.g.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = __nested_webpack_require_318166__.g.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}


/***/ }),

/***/ 384:
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_320153__) => {

"use strict";
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



var isArgumentsObject = __nested_webpack_require_320153__(2584);
var isGeneratorFunction = __nested_webpack_require_320153__(8662);
var whichTypedArray = __nested_webpack_require_320153__(6430);
var isTypedArray = __nested_webpack_require_320153__(5692);

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});


/***/ }),

/***/ 9539:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_328912__) => {

/* provided dependency */ var process = __nested_webpack_require_328912__(4155);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnvRegex = /^$/;

if (process.env.NODE_DEBUG) {
  var debugEnv = process.env.NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^')
    .toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function(set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = __nested_webpack_require_328912__(5955);

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __nested_webpack_require_328912__(384);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __nested_webpack_require_328912__(5717);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ 6430:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_348785__) => {

"use strict";


var forEach = __nested_webpack_require_348785__(9804);
var availableTypedArrays = __nested_webpack_require_348785__(3083);
var callBound = __nested_webpack_require_348785__(1924);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __nested_webpack_require_348785__(6410)();

var g = typeof globalThis === 'undefined' ? __nested_webpack_require_348785__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __nested_webpack_require_348785__(882);
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof g[typedArray] === 'function') {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __nested_webpack_require_348785__(5692);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};


/***/ }),

/***/ 267:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1367:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3083:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_350631__) => {

"use strict";


var possibleNames = [
	'BigInt64Array',
	'BigUint64Array',
	'Float32Array',
	'Float64Array',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray'
];

var g = typeof globalThis === 'undefined' ? __nested_webpack_require_350631__.g : globalThis;

module.exports = function availableTypedArrays() {
	var out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};


/***/ }),

/***/ 882:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_351259__) => {

"use strict";


var GetIntrinsic = __nested_webpack_require_351259__(210);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_351774__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_351774__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_351774__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_351774__(5254);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;

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
exports.parse = exports.injection = exports.isIntercept = exports.checkRequestHeader = exports.isInterceptSite = exports.formatM3u8 = exports.parseM3u8 = exports.fetch = exports.open = void 0;
const config_1 = __importDefault(__webpack_require__(248));
config_1.default.mode = "worker";
const torrent_1 = __webpack_require__(278);
const parse_1 = __importStar(__webpack_require__(903));
exports.parse = parse_1.default;
const fetch_1 = __webpack_require__(814);
const util = __importStar(__webpack_require__(905));
const ivideos_request_1 = __importDefault(__webpack_require__(619));
const package_dist_json_1 = __importDefault(__webpack_require__(40));
const liondb_1 = __importDefault(__webpack_require__(421));
let ivideos;
const torrent = new torrent_1.Torrent();
function open(callback) {
    torrent.once("open", () => {
        console.info("open===============>");
        callback();
    });
}
exports.open = open;
async function isReqPlaylist(url, method, contentType) {
    if (!/^GET$/i.test(method))
        return false;
    let key = "m3u8playlist-" + util.md5(url);
    let is = await liondb_1.default.get(key);
    if (is)
        return true;
    return (0, parse_1.mayHandlePlaylist)(url, method, contentType);
}
async function fetch(request, options) {
    let url = request instanceof Request ? request.url : request;
    let method = request instanceof Request ? request.method : options ? options.method : "GET";
    method = method || "GET";
    options = Object.assign({}, request instanceof Request ? request : {}, options);
    options.headers = Object.assign({}, options.headers);
    let isReqPlay = await isReqPlaylist(url, method, "");
    if (isReqPlay) {
        let text = await liondb_1.default.get(url);
        if (text && text.length > 128) {
            console.info("m3u8 playlist from cache", url);
            return new Response(Buffer.from(text), { status: 200 });
        }
    }
    let res = await (0, fetch_1.fetch)(url, options).catch((err) => new Response("", { status: 500 }));
    if (!res.ok)
        res = await torrent.fetch(url, options).catch((err) => new Response("", { status: 500 }));
    console.info("fetch", url, res.status);
    if (res.ok) {
        let contentType = res.headers.get("content-type") || "";
        if ((0, parse_1.mayHandlePlaylist)(url, method, contentType)) {
            let text = await res.clone().text();
            liondb_1.default.set(url, text);
            console.info("m3u8 playlist set cache", url);
            liondb_1.default.set("m3u8playlist-" + util.md5(url), true);
        }
    }
    return res;
}
exports.fetch = fetch;
(async () => {
    const workerUrl = `https://cdn.jsdelivr.net/npm/ivideos@${package_dist_json_1.default.version}/dist/ivideos.worker.js?v=${package_dist_json_1.default.version}`;
    let script = await (0, fetch_1.fetch)(workerUrl)
        .then((res) => res.text())
        .catch((err) => "");
    if (!script || script.length < 1024)
        script = await (0, fetch_1.fetch)(`https://a.ivideos.one/go?url=${encodeURIComponent(workerUrl)}`)
            .then((res) => res.text())
            .catch((err) => "");
    if (!script || script.length < 1024)
        return console.warn("fetch worker error");
    let blob = new Blob([script], { type: "text/javascript" });
    let url = URL.createObjectURL(blob);
    let worker = new Worker(url);
    ivideos = new ivideos_request_1.default(worker);
})();
(() => { })();
async function parseM3u8(url, m3u8) {
    return parse_1.default.parse(url, m3u8);
}
exports.parseM3u8 = parseM3u8;
async function formatM3u8(url, m3u8) {
    if (ivideos) {
        return new Promise((resolve) => {
            ivideos === null || ivideos === void 0 ? void 0 : ivideos.request("ivideos.formatM3u8", { url, m3u8 }, ({ m3u8 }) => {
                resolve(m3u8 || "");
            });
        });
    }
    else {
        return parse_1.default.formatM3u8(url, m3u8);
    }
}
exports.formatM3u8 = formatM3u8;
function isInterceptSite() {
    let xx = /\.(youtube|google|facebook|twitter|jd|qq|iqiy|youku|bilibili)\.com/i.test(location.hostname);
    return !xx;
}
exports.isInterceptSite = isInterceptSite;
function seed(url, data) {
    let es = Buffer.alloc(0);
    if (data instanceof ArrayBuffer) {
        let dv = new DataView(data);
        let array = [];
        for (let i = 0; i < dv.byteLength; i++) {
            array.push(dv.getUint8(i));
        }
        es = Buffer.from(array);
    }
    else {
        es = Buffer.from(data);
    }
    torrent.seed(url, es);
}
let originalFetch = fetch_1.fetch;
let originOpen = XMLHttpRequest.prototype.open;
let originSend = XMLHttpRequest.prototype.send;
let playList = new Set();
const PlayTextMap = new Map();
function checkRequestHeader(headers) {
    if (headers["range"])
        return false;
    if (typeof headers.get == "function") {
        if (headers.get("range"))
            return false;
    }
    return true;
}
exports.checkRequestHeader = checkRequestHeader;
function isIntercept(url, method, contentType) {
    try {
        if (!isInterceptSite())
            return false;
        method = (method === null || method === void 0 ? void 0 : method.trim()) || "";
        let su = url;
        if (su instanceof globalThis.Request)
            url = su.url;
        url = /^\/\//.test(url) ? location.protocol + url : url;
        let suffix = util.suffix(url);
        let ok = playList.has(url);
        ok = ok || config_1.default.videoChunkSuffix.includes(suffix);
        if (playList.size > 0 && !playList.has(url) && config_1.default.videoChunkSuffix.includes(suffix)) {
            playList.clear();
        }
        if (ok)
            return true;
        let info = new URL(url);
        if (!/^GET$/i.test(method))
            return false;
        if (/(googleapis|googlevideo|)\.com/i.test(info.hostname))
            return false;
        if (contentType)
            return /(video|image|octet-stream)/i.test(contentType);
        if (/\/api\//i.test(url))
            return false;
        if (playList.size < 1)
            return ["png", "jpg", "jpeg"].includes(suffix);
    }
    catch (err) {
        console.warn("isIntercept", err, url);
    }
    return false;
}
exports.isIntercept = isIntercept;
async function xfetch(request, options) {
    let options1 = options || {};
    let url = request instanceof Request ? request.url : request.toString();
    let headers = request instanceof Request ? request.headers : options1.headers;
    let method = (request instanceof Request ? request.method : options1.method) || "GET";
    url = util.urlPatch(url);
    let contentType = "";
    if (options1.headers) {
        if (typeof (headers === null || headers === void 0 ? void 0 : headers.get) == "function")
            contentType = (headers === null || headers === void 0 ? void 0 : headers.get("content-type")) || "";
        else if (headers)
            contentType = headers["content-type"];
    }
    let is = isIntercept(url, method, contentType);
    if (is)
        is = checkRequestHeader(headers);
    if (!is) {
        if ((0, parse_1.mayHandlePlaylist)(url, method)) {
            let text = await liondb_1.default.get(url);
            if (text && text.length > 128) {
                console.info("m3u8 playlist from cache", url);
                return new Response(Buffer.from(text), { status: 200 });
            }
        }
        let response = await originalFetch(request, options).catch((err) => new Response("", { status: 500 }));
        if ((0, parse_1.mayHandlePlaylist)(url, method)) {
            if (!response.ok) {
                response = await torrent.fetch(url).catch((err) => new Response("", { status: 500 }));
            }
            if ((0, parse_1.mayHandlePlaylist)(url, method, response.headers.get("content-type") || "")) {
                let text = await response
                    .clone()
                    .text()
                    .catch((e) => "");
                let urls = parse_1.default.parse(url, text);
                if (urls.length > 10) {
                    console.info("m3u8 playlist set cache", url);
                    liondb_1.default.set(url, text);
                    playList = new Set(urls);
                    torrent.setPlayList(urls, url);
                }
            }
        }
        return response;
    }
    torrent.setLastChunkIndex(url);
    return new Promise(async (resolve) => {
        let chunk = await torrent.getChunk(url);
        if (chunk) {
            let length = chunk.byteLength || chunk.length;
            if (length > 0) {
                let response = new Response(chunk, {
                    headers: { "content-type": "video/mp2t" },
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
        let response = await originalFetch(request, options).catch(async (err) => {
            return new Response("", { status: 500, statusText: err.message || "" });
        });
        let contentType = response.headers.get("content-type") || "";
        if (isIntercept(this.url, this.method, contentType)) {
            if ([200, 206].includes(response.status))
                response
                    .clone()
                    .arrayBuffer()
                    .then((data) => seed(url, data));
            else
                torrent.fetch(url);
        }
        resolve(response);
    });
}
class XHR extends XMLHttpRequest {
    constructor() {
        super();
        this.method = "GET";
        this._headers = {};
        this._isHandle = false;
        this._handleCallbacks = [];
        let isUse = false;
        const handle = async (e) => {
            let url = this.url;
            isUse = true;
            let contentType = this.getResponseHeader("content-type") || "";
            if ([200, 206].includes(e.target.status)) {
                this._isHandle = true;
                let data = this.response;
                if (data === undefined || data === null)
                    return;
                if ((0, parse_1.mayHandlePlaylist)(url, this.method, contentType)) {
                    let m3u8 = Buffer.from(data).toString();
                    let urls = await parseM3u8(url, m3u8);
                    if (urls.length > 10) {
                        playList = new Set(urls);
                        torrent.setPlayList(urls, url);
                    }
                    this._handleCallbacks.forEach((handle) => handle(e));
                    return;
                }
                else if (isIntercept(url, this.method, contentType)) {
                    seed(url, data);
                }
            }
            else {
                isIntercept(this.url, this.method, contentType) && torrent.fetch(url);
            }
            this._handleCallbacks.forEach((handle) => {
                try {
                    handle.bind(this)(e);
                }
                catch (err) {
                    console.info("handle error", err, e);
                }
            });
        };
        super.addEventListener("load", (e) => {
            if (isUse)
                return;
            handle(e);
        });
        super.addEventListener("readystatechange", (e) => {
            if (isUse)
                return;
            if (this.readyState == 4) {
                handle(e);
            }
        });
        const resetDl = async () => {
            isIntercept(this.url, this.method) && torrent.fetch(this.url);
        };
        this.addEventListener("timeout", resetDl);
        this.addEventListener("abort", resetDl);
    }
    addEventListener(type, handle) {
        if (type == "load" || type == "readystatechange") {
            return this._handleCallbacks.push(handle);
        }
        super.addEventListener(type, handle);
    }
    removeEventListener(type, handle) {
        if (type == "load" || type == "readystatechange") {
            let idx = this._handleCallbacks.findIndex((v) => v == handle);
            this._handleCallbacks.splice(idx, 1);
            return;
        }
        super.removeEventListener(type, handle);
    }
    setRequestHeader(name, value) {
        name = name.toLowerCase();
        this._headers[name] = value;
        super.setRequestHeader(name, value);
    }
    open(method, url, sync = true, username, password) {
        url = util.urlPatch(url);
        this.method = method || "GET";
        this.url = url;
        originOpen.bind(this)(method, url, sync, username, password);
        return this;
    }
    isIntercept() {
        let url = this.url;
        let is = isIntercept(url, this.method);
        if (is)
            is = checkRequestHeader(this._headers);
        return is;
    }
    async send(data) {
        let url = this.url;
        let is = this.isIntercept();
        if (is) {
            torrent.setLastChunkIndex(url);
            let chunk = await torrent.getChunk(url);
            if (chunk) {
                let length = chunk.byteLength || chunk.length;
                if (length > 1024) {
                    this.writeResponse(chunk);
                }
                else {
                    originSend.bind(this)(data);
                }
            }
            else {
                originSend.bind(this)(data);
            }
        }
        else {
            if ((0, parse_1.mayHandlePlaylist)(url, this.method)) {
                let text = await liondb_1.default.get(url);
                if (text && text.length > 128) {
                    console.info("m3u8 playlist from cache", url);
                    this.writeResponse(Buffer.from(text));
                    return;
                }
                torrent.fetch(url).then(async (res) => {
                    if (res.status == 200) {
                        let data = await res.arrayBuffer();
                        let chunk = Buffer.from(data);
                        if (data.byteLength > 128) {
                            console.info("m3u8 playlist set cache", url);
                            liondb_1.default.set(url, chunk.toString());
                        }
                    }
                });
            }
            return originSend.bind(this)(data);
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
        }, 10);
    }
}
function injection() {
    if (!isInterceptSite())
        return;
    try {
        Object.defineProperty(window, "XMLHttpRequest", {
            value: XHR,
        });
        Object.defineProperty(window, "fetch", {
            value: xfetch,
        });
    }
    catch (err) { }
}
exports.injection = injection;
injection();


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const isProd = "production" == "production";
const env = {"NODE_ENV":"production","appVersion":"2.0.9"} || {};
const appVersion = env.appVersion || "";
const PeerServers = ["p0.ivideos.one", "p1.ivideos.one"];
exports["default"] = {
    appVersion: appVersion,
    isProd,
    mode: "plugin",
    logLevel: isProd ? 2 : 4,
    videoChunkSuffix: ["ts", "m4s", "mp4"],
    videoListSuffix: ["m3u8"],
    get peerServer() {
        return PeerServers[Math.floor(Math.random() * PeerServers.length)];
    },
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
            ip: "",
        },
    ],
    icePasswordSecret: "C5TwyHpWu3DV/++xLsfSR2yQWEMhg6pXmNoRnvnL1y2bGd83v9gwpHG3M+yXAYxdsIhkIywmfWnqKh5ulQBV9kvJ9WEE85/00RhZe0hrQLrBBlAMOLOygLlFTSd2lv15BT+ixdzZDynowzIbahOmh73MSZqtZgjbT7aNJDuEgrW+KzT38aBz4VR/q1K8F1/4jy8QkrhiB+k14mPTrvyZFqVTckSLHI7+bdBBOc/73jo2wJPdocZbyiVlZ6xOzYUK1ORCd8IVYM7u53jm8h2BfK+0xChMqZFcaG9KihI9H9bj+kanhu2oPHSJnRognHVRDgMJXj6jMeDrWgIN5SIUfg==",
};


/***/ }),

/***/ 619:
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
exports.IVideos = exports.Request = void 0;
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const util = __importStar(__webpack_require__(905));
class Request {
    constructor(worker) {
        this.worker = worker;
        this.tasks = new Map();
        let tasks = this.tasks;
        worker.addEventListener("message", (event) => {
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
        if (this.worker instanceof Worker) {
            this.worker.postMessage({ sid: sid, router: router, data: data, headers: { refer } });
        }
        else {
            this.worker.postMessage({ sid: sid, router: router, data: data, headers: { refer } }, "/");
        }
    }
}
exports.Request = Request;
class IVideos extends eventemitter3_1.default {
    constructor(worker) {
        super();
        this._open = false;
        this.on("open", () => {
            this._open = true;
        });
        worker && this.init(worker);
    }
    get open() {
        return this._open;
    }
    init(worker) {
        this._request = new Request(worker);
        this.emit("open");
    }
    request(router, data, callback) {
        return this._request.request(router, data, callback);
    }
    fetch(options, callback) {
        return new Promise((resolve) => {
            if (!this._request || !this._request.worker) {
                let response = new Response("", { status: 500, statusText: "", headers: {} });
                resolve(response);
                callback && callback(response);
                return;
            }
            this._request.request("ivideos.fetch", options, (res) => {
                if ([200, 206].includes(res.status)) {
                    if (res.data && /buffer/i.test(res.data.type)) {
                        res.data = Buffer.from(res.data.data);
                    }
                }
                let data = res.status != 204 ? res.data : null;
                let response = new Response(data, { status: res.status, statusText: res.statusText, headers: res.headers });
                resolve(response);
                callback && callback(response);
            });
        });
    }
    get(url, callback) {
        return new Promise((resolve) => {
            this._request.request("ivideos.get", { url: url }, (data) => {
                callback && callback(data);
                resolve(data);
            });
        });
    }
    async delete(url) {
        this._request.request("ivideos.delete", { url });
    }
    async seed(url, chunk) {
        this._request.request("ivideos.seed", { url: url, data: chunk });
    }
    async setPlayList(data, callback) {
        this._request.request("ivideos.setPlayList", data, callback);
    }
}
exports.IVideos = IVideos;
exports["default"] = IVideos;


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
const store_1 = __importDefault(__webpack_require__(631));
let console = utils.logger;
const chrome_1 = __importDefault(__webpack_require__(90));
const config_1 = __importDefault(__webpack_require__(248));
const Limit = 20;
const nav = globalThis.navigator || {};
class Attach extends eventemitter3_1.default {
    constructor(ifetch) {
        super();
        this.ifetch = ifetch;
        this.loadeds = [];
        this.urls = [];
        this.indexs = new Map();
        this.limit = Limit;
        this.loading = new Set();
        this.expandLimit = 0;
        this.isReady = false;
        this.seedLastChunkIndex = 0;
        this.receives = new Map();
        this._receiveChunkCount = 0;
        this.dlCount = 0;
        this.on("peer", (router) => {
        });
        this.on("receive", ({ peerId }) => {
            this._receiveChunkCount++;
            let peerReceive = this.receives.get(peerId) || 0;
            this.receives.set(peerId, ++peerReceive);
        });
        this.once("ready", () => {
            this.download(this.urls[this.seedLastChunkIndex], {
                lastIndex: this.seedLastChunkIndex,
                offset: 0,
                limit: this.limit,
            });
        });
        self.addEventListener("resize", () => {
            var _a;
            if (this.canvas) {
                let v = (_a = self.document) === null || _a === void 0 ? void 0 : _a.querySelector("video");
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
            this.showProcess();
        });
    }
    setPlaylist(url) {
        this.playlist = url;
    }
    setExpandLimit(limit = 0) {
        this.expandLimit = limit;
    }
    get hasPlaylist() {
        return this.urls.length > 0 && /^(http|blob)/i.test(this.playlist);
    }
    get receiveChunkCount() {
        return this._receiveChunkCount;
    }
    hasLoading(url) {
        return this.loading.has(url);
    }
    init(urls) {
        var _a;
        if (urls.length < 2)
            return;
        this.urls = urls;
        if (utils.inContext()) {
            (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.onMessage.addListener((event) => {
                let reqInfo = event.data;
                if (!reqInfo)
                    return;
                let data = reqInfo.data;
                switch (reqInfo.cmd) {
                    case "ivideos.loadChunk":
                        let url = data.url;
                        this.download(url, {
                            lastIndex: this.seedLastChunkIndex,
                            offset: 0,
                            limit: 1,
                        });
                        break;
                }
            });
        }
        console.info("set playlist", urls.length);
        urls.forEach((url, idx) => {
            this.loadeds[idx] = 0;
            this.indexs.set(url, idx);
        });
        setTimeout(() => this.emit("showProcess", urls.length), 2000);
    }
    inIndex(url) {
        return this.indexs.get(url) || 0;
    }
    addUrl(url) {
        if (this.inIndex(url) >= 0)
            return;
        this.urls.push(url);
        this.indexs.set(url, this.urls.length - 1);
    }
    async fetch(url, init) {
        let method = (init === null || init === void 0 ? void 0 : init.method) || "GET";
        let headers = (init === null || init === void 0 ? void 0 : init.headers) || new Headers();
        let body = init === null || init === void 0 ? void 0 : init.body;
        let idx = this.inIndex(url);
        let timeout = (init === null || init === void 0 ? void 0 : init.timeout) || 15 * 1000;
        let startTime = Date.now();
        let cache = this.hasUrl(url) && /^GET$/i.test(method);
        if (cache) {
            if (this.hasLoading(url))
                return new Response(null, { status: 500 });
            this.loading.add(url);
        }
        if (!this.ifetch.open)
            return new Response("no open", { status: 500 });
        let res = await this.ifetch
            .fetch(url, {
            timeout: timeout,
            cache: cache,
            headers: headers,
            body: body,
            process: async () => {
                if (!cache)
                    return true;
                if (idx < this.seedLastChunkIndex)
                    return false;
                let process = await this.hasChunk(url);
                return !process;
            },
        })
            .then(async (res) => {
            if (!/^2/i.test(res.status + "")) {
                res.abort();
                res = await this.ifetch.fetch(url, {
                    timeout: 15 * 1000,
                    cache: true,
                    process: async () => {
                        if (!this.hasUrl(url))
                            return true;
                        if (idx < this.seedLastChunkIndex)
                            return false;
                        let process = await this.hasChunk(url);
                        return !process;
                    },
                });
            }
            return res;
        })
            .catch((err) => new Response(null, { status: 500, statusText: err === null || err === void 0 ? void 0 : err.message }));
        if ([200, 206].includes(res.status) && /GET/i.test(method) && this.hasUrl(url)) {
            let chunk = Buffer.from(await res.clone().arrayBuffer());
            if (this.isOk(res, chunk) && cache) {
                this.showLog(res, { startTime, chunk, url });
                this.seed(url, chunk);
            }
        }
        this.loading.delete(url);
        return res.clone();
    }
    download(url, options) {
        let idx = this.inIndex(url);
        let start = idx + options.offset;
        let end = start + options.limit;
        let urls = this.urls.slice(start, end);
        let startTime = Date.now();
        urls.forEach(async (url) => {
            await this.fetch(url).catch((err) => { });
        });
    }
    showLog(res, data) {
        try {
            let status = res.status, url = data.url, ttl = res.ttl, peer = res.headers.get("peer") || "", country = res.headers.get("country") || "", contentLength = parseInt(res.headers.get("content-length") || "") || -1;
            let idx = this.inIndex(url);
            if (this.loadeds[idx] == 1 || idx < this.seedLastChunkIndex)
                return;
            let ok = [200, 206].includes(status) && data.chunk.byteLength > 1024;
            if (ok) {
                ++this.dlCount;
                const prect = Math.max(Math.ceil((this.dlCount * 100) / this.urls.length), 1);
                console.info(peer, country, ok + "/" + status, url, this.dlCount + "/" + prect + "%", "index/" + this.seedLastChunkIndex + "/" + idx + "/" + this.urls.length, "ttl/" + ttl + "/" + (Date.now() - data.startTime), "content-length/" + data.chunk.byteLength + "/" + contentLength);
            }
        }
        catch (err) { }
    }
    destroy() { }
    async hasChunk(url) {
        let chunkId = utils.buildChunkId(url);
        return store_1.default.has(chunkId);
    }
    hasUrl(url) {
        return this.inIndex(url) >= 0;
    }
    async setLastChunkIndex(url) {
        if (!this.isReady) {
            this.isReady = true;
            this.emit("ready");
            return;
        }
        if (!this.hasUrl(url))
            this.addUrl(url);
        let idx = this.inIndex(url);
        let diff = Math.abs(idx - this.seedLastChunkIndex);
        if (diff > 10) {
            try {
                console.info("clear queue=>", idx - this.seedLastChunkIndex);
                this.ifetch.clear();
            }
            catch (err) { }
        }
        this.seedLastChunkIndex = idx;
        this.batchDownload();
    }
    get enableBatchDownload() {
        const nav = globalThis.navigator || {};
        let connection = nav["connection"] || { downlink: 3 };
        let downlink = parseInt(connection.downlink) || 3;
        return downlink <= 4;
    }
    batchDownload() {
        if (!this.enableBatchDownload)
            return;
        let url = this.urls[this.seedLastChunkIndex];
        let idx = this.seedLastChunkIndex;
        if (idx < 0 || !url)
            return;
        if (idx < 8) {
            this.download(url, {
                lastIndex: this.seedLastChunkIndex,
                offset: 0,
                limit: Limit,
            });
        }
        else {
            let offset = config_1.default.mode == "plugin" ? 12 : 0;
            this.download(url, {
                lastIndex: this.seedLastChunkIndex,
                offset: offset,
                limit: this.limit + this.expandLimit,
            });
        }
    }
    isOk(res, chunk) {
        let headers = res.headers || {};
        let contentLength = parseInt(headers.get ? headers.get("content-length") : headers["content-length"]) || -1;
        if (![200, 206].includes(res.status))
            return false;
        return chunk.byteLength == contentLength || contentLength < 0;
    }
    async getChunk(url, mid) {
        let chunkId = utils.buildChunkId(url);
        if (mid)
            chunkId = mid + "-" + chunkId;
        let chunk = (await store_1.default.getChunk(chunkId)) || Buffer.alloc(0);
        let idx = this.inIndex(url);
        idx >= 0 && this.drawProcess(idx, this.seedLastChunkIndex);
        return chunk;
    }
    async requestPlaylist(url, callback) {
        let pid = setTimeout(() => callback(""), 15 * 1000);
        let text = await this.fetch(url).then((res) => {
            clearTimeout(pid);
            if (res.status != 200)
                return "";
            return res.text();
        });
        callback(text);
    }
    async seed(url, chunk) {
        try {
            this.loading.delete(url);
            let chunkId = utils.buildChunkId(url);
            chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
            let idx = this.inIndex(url);
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
            if (chunk && chunk.byteLength > 1024) {
                this.loadeds[idx] = 1;
                store_1.default.setChunk(chunkId, chunk);
                this.emit("seed", { url: url, index: idx, data: chunk });
                return true;
            }
        }
        catch (err) {
            console.warn("seed error", err, chunk);
        }
        return false;
    }
    showProcess() {
        if (!globalThis.window)
            return;
        let canvas = document.createElement("canvas");
        let v = document.querySelector("video");
        if (!v) {
            setTimeout(() => this.showProcess(), 1000);
            return;
        }
        const left = Math.ceil(v.offsetWidth * 0.02);
        Object.assign(canvas.style, {
            "z-index": 99999,
            position: "absolute",
            top: "4px",
            left: left + "px",
        });
        canvas.width = Math.floor(v.offsetWidth * 0.96);
        canvas.height = 60;
        canvas.className = "ivprocess";
        v.addEventListener("mouseenter", () => {
            canvas.style.visibility = "visible";
        });
        v.addEventListener("mouseout", () => {
            canvas.style.visibility = "hidden";
        });
        if (v.parentElement) {
            v.parentElement.insertBefore(canvas, v);
            let position = v.parentElement.style.position;
            if (!position)
                v.parentElement.style.position = "relative";
        }
        this.canvas = canvas;
        this.drawProcess(0, 0);
    }
    drawProcess(loadedIndex, curIndex = 0) {
        if (!globalThis.window)
            return;
        let total = this.urls.length;
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
        const unitHeight = 3, unitWidth = Math.floor(width / columns);
        let colors = ["rgba(4, 87, 51, 0.5)", "rgba(20, 102, 255, 0.2)"];
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const utils = __importStar(__webpack_require__(905));
const ipeer_1 = __importDefault(__webpack_require__(497));
const store_1 = __importDefault(__webpack_require__(631));
const dayjs_1 = __importDefault(__webpack_require__(484));
const chrome_1 = __importDefault(__webpack_require__(90));
const config_1 = __importDefault(__webpack_require__(248));
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
        if (window != window.top)
            return;
        let info = await this.getDeviceInfo();
        if (info.daemon)
            return;
        let peerId = utils.md5(info.daemonId + "-" + (0, dayjs_1.default)().format("YYYYMMWW"));
        this.makePeer({ peerId, host: config_1.default.peerServer, port: 443 });
    }
    async makePeer(options) {
        var _a;
        let peerId = options.peerId;
        let sxb = utils.md5("secret" + peerId);
        let username = sxb.slice(0, 8), password = sxb.slice(12, 20);
        console.info("peer==>", peerId, username, password);
        let peer = new ipeer_1.default(peerId, {
            secure: true,
            token: peerId.slice(14, 22),
            host: options.host,
            port: options.port,
            handshakeMode: "all",
            debug: 0,
            username: username,
            password: password,
        });
        peer.acceptFactor.on("accept", ({ handle, socket }) => {
            handle || console.info("accept close", socket.peer);
            handle || socket.destroy();
        });
        (_a = peer.acceptFactor.accepts.get("wrtc")) === null || _a === void 0 ? void 0 : _a.on("accept", ({ id, ttl, chunk }) => {
            if (ttl >= 2000)
                console.info("accept", id, ttl, (chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) || 0);
        });
        this.peer = peer;
        peer.on("open", (id) => {
            console.info("===daemon", peer.id);
            this.start();
            let pid = setInterval(() => {
                if (!peer.open) {
                    clearInterval(pid);
                    return;
                }
                this.start();
            }, 60 * 1000);
        });
        peer.once("disconnected", () => { });
        peer.once("close", () => {
            this.destroy();
            this.clients.clear();
        });
    }
    async getChunk(chunkId, mid) {
        chunkId = utils.buildChunkId(chunkId);
        if (mid)
            chunkId = mid + "-" + chunkId;
        let chunk = await store_1.default.getChunk(chunkId);
        return chunk;
    }
    start() {
        return new Promise((resolve) => {
            sendMessage({ router: "/startDaemon", data: {} }, (res) => {
                resolve(res);
            });
        });
    }
    stop() {
        return new Promise((resolve) => {
            sendMessage({
                router: "/stopDaemon",
                data: {},
            }, (res) => {
                resolve(res);
            });
        });
    }
    getDeviceInfo() {
        return new Promise((resolve) => {
            if (chrome_1.default.runtime) {
                sendMessage({ router: "/deviceInfo", data: {} }, (res) => {
                    resolve(res || { daemon: true });
                });
            }
            else {
                resolve({ deviceId: "", daemon: true, peers: [], daemonId: utils.md5(utils.buildSN(12)) });
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
function sendMessage(data, callback) {
    var _a;
    try {
        (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage(data, {}, callback);
    }
    catch (err) { }
}


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
function mayHandlePlaylist(url, method, contentType) {
    try {
        if (!/^GET$/i.test(method))
            return false;
        let su = url;
        if (su instanceof globalThis["Request"])
            url = su.url;
        url = /^\/\//.test(url) ? location.protocol + url : url;
        let suffix = util.suffix(url);
        if (contentType) {
            if (/(mpegurl)/i.test(contentType))
                return true;
        }
        if (config_1.default.videoChunkSuffix.includes(suffix))
            return false;
        if (config_1.default.videoListSuffix.includes(suffix))
            return true;
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
const ipeer_1 = __importDefault(__webpack_require__(497));
const eventemitter3_1 = __importDefault(__webpack_require__(729));
const buffer_1 = __webpack_require__(764);
const config_1 = __importDefault(__webpack_require__(248));
const utils = __importStar(__webpack_require__(905));
const msg_1 = __importDefault(__webpack_require__(344));
const store_1 = __importDefault(__webpack_require__(631));
const attach_1 = __importDefault(__webpack_require__(260));
const stats_1 = __importDefault(__webpack_require__(674));
let console = utils.logger;
const chrome_1 = __importDefault(__webpack_require__(90));
const ipeer_2 = __webpack_require__(497);
const dayjs_1 = __importDefault(__webpack_require__(484));
const fetch_1 = __webpack_require__(814);
console.info("run mode", config_1.default.mode);
let iceServers = [...config_1.default.iceServers];
const passwordSecret = "g35S152AORUWePWZjezQ8UVZXV5nbTxCkW87ZU+L6gVULjFTL+MP8vgJjBnvhwZM3f0HRhxAECVEWjOjjvuo0SIsV6nZcdQTNHJL/nVb4u2r3qLLSdXIF8A1iipDevmbhYTWrGinuJ7P8xvNJFDwlz9VPQA3zEEDEh8RDSlff6+GpcKcXLtuiWTT0oLkGpS+9ms+abeBv2H8SFafsK7EyfR0DCAtfL2qjxR94bzaYpAeOMGWC2pYumN36+6gyk5NZv8YxukmBArgrWwd36EBCA6kx9sjYLM2JzDOK5XmsXkCe9zlmMW12IhzUej693C0MiG2pnbDsjqSSii5R5qT5w==";
const gMode = Math.floor(Math.random() * 2);
class Torrent extends eventemitter3_1.default {
    constructor(daemon) {
        super();
        this.daemon = daemon;
        this._isOpen = false;
        this.urls = [];
        this.loadingBack = new Map();
        this.loadBackAvgTTL = 0;
        this.peerServer = {
            host: "p0.iee.one",
            port: 443,
        };
        msg_1.default.getInfo(async (info) => {
            console.info("info===========", location.href, info);
            const deviceInfo = (await new Promise((resolve) => {
                var _a, _b;
                let did = ((_a = globalThis.localStorage) === null || _a === void 0 ? void 0 : _a.getItem("did")) || (0, ipeer_2.deviceId)();
                (_b = globalThis.localStorage) === null || _b === void 0 ? void 0 : _b.setItem("did", did);
                let daemonId = utils.md5(did + "-" + (0, dayjs_1.default)().format("YYYYMMDD"));
                utils.inContext()
                    ? chrome_1.default.runtime.sendMessage({ router: "/deviceInfo", data: {} }, (res) => resolve(res))
                    : resolve({
                        peerServer: this.peerServer,
                        ip: stats_1.default.ip || "",
                        deviceId: did,
                        daemon,
                        daemonId: daemonId,
                        appVersion: config_1.default.appVersion,
                    });
            })) || {};
            const peerServer = deviceInfo.peerServer;
            Object.assign(this.peerServer, peerServer);
            let startTime = Date.now();
            let spid = setInterval(async () => {
                let isVideo = info.env == "worker" || !!globalThis.document.querySelector("video");
                if (!isVideo)
                    return;
                if (Date.now() - startTime >= 60 * 1000)
                    return clearInterval(spid);
                clearInterval(spid);
                this.url = info.url;
                this.title = info.title || "";
                let mid = this.mid || utils.buildMediaId(this.url);
                this.mid = mid;
                store_1.default.setMedia(mid);
                this.init(mid);
            }, 100);
        });
        this.on("ready", () => {
            this.url && stats_1.default.play({ title: this.title, m3u8: this.playlist, url: this.url });
            setTimeout(() => this.removeListener("ready"));
        });
    }
    get ua() {
        return (navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) || "";
    }
    get open() {
        return this._isOpen;
    }
    initPeers() {
        let sxb = utils.md5("secret" + this.peerId);
        let username = sxb.slice(0, 8), password = sxb.slice(12, 20);
        let token = this.peerId.slice(14, 22);
        let ipeer = new ipeer_1.default(this.peerId, {
            secure: true,
            debug: 0,
            host: config_1.default.peerServer,
            port: 443,
            handshakeMode: "all",
            token: token,
            username: username,
            password: password,
        });
        ipeer.acceptFactor.on("accept", (data) => {
            if (!data.handle) {
                console.info("accept close", data.socket.peer);
                data.socket.destroy();
                return;
            }
        });
        let ifetch = new ipeer_2.IFetch(ipeer, { apikey: "ivideos", secret: passwordSecret, server: `https://${config_1.default.peerServer}` });
        this.ifetch = ifetch;
        this.attach = new attach_1.default(this.ifetch);
        ipeer.once("open", () => {
            this.attach.on("seed", async () => {
            });
        });
        ipeer.once("open", async () => {
            console.info(`============= open peer ${this.peerId}:${ipeer.username}:${ipeer.password} ===============`);
            this.hasPlaylist && this.emit("ready");
            this._isOpen = true;
        });
        ifetch.once("open", () => {
            this.emit("open");
        });
        this.initEventPeer(ipeer);
    }
    hasVideo() {
        return !!document.querySelector("video");
    }
    async init(mid) {
        this.mid = utils.buildMediaId(mid || this.mid);
        let peerKey = "peer-" + this.mid;
        let peerId = (await store_1.default.getObject(peerKey)) || utils.buildPeerId(this.mid);
        await store_1.default.setObject(peerKey, peerId);
        this.peerId = peerId;
        this.initPeers();
        if (this.hasPlaylist)
            this.emit("ready");
    }
    initEventPeer(peer) {
        let peerId = peer.id || "";
        let isUnRegister = false;
        const onclose = () => {
            if (isUnRegister)
                return;
            isUnRegister = true;
            setTimeout(() => (isUnRegister = false), 10 * 1000);
            globalThis.removeEventListener("close", onclose);
            globalThis.removeEventListener("beforeunload", onclose);
            peer.destroy();
            this.attach.destroy();
        };
        peer.on("disconnected", (err) => {
            console.debug("==== peer disconnected ", peerId);
            setTimeout(() => peer.reconnect(), 5 * 1000);
        });
        globalThis.addEventListener("beforeunload", () => onclose());
        globalThis.addEventListener("close", () => onclose());
        peer.once("close", onclose);
    }
    get hasPlaylist() {
        return this.urls.length > 0 && /^(http|blob)/i.test(this.playlist);
    }
    setPlayList(urls, playlistUrl) {
        this.playlist = playlistUrl;
        this.urls = urls;
        if (this.hasPlaylist)
            this.emit("ready");
        if (this.attach) {
            this.attach.init(urls);
            this.attach.setPlaylist(playlistUrl);
        }
        else {
            setTimeout(() => this.setPlayList(urls, playlistUrl), 200);
        }
    }
    async setLastChunkIndex(url) {
        var _a, _b, _c, _d;
        let idx = ((_a = this.attach) === null || _a === void 0 ? void 0 : _a.inIndex(url)) || this.urls.findIndex((v) => v == url);
        if (this.hasPlaylist) {
            if (idx < 5 || ((_b = this.attach) === null || _b === void 0 ? void 0 : _b.seedLastChunkIndex) < 5)
                this.fetch(url);
            if (idx % 2 == gMode && idx > 1) {
                for (let i = 0; i < 4; i++) {
                    this.fetch(this.urls[idx + 5 + i * 9]);
                    this.fetch(this.urls[idx + 6 + i * 9]);
                }
            }
        }
        else {
            (_c = this.attach) === null || _c === void 0 ? void 0 : _c.addUrl(url);
            this.fetch(url);
        }
        if (this.attach)
            (_d = this.attach) === null || _d === void 0 ? void 0 : _d.setLastChunkIndex(url);
    }
    async seed(url, chunk) {
        var _a;
        this.loadingBack.delete(url);
        if (!chunk || !url)
            return;
        chunk = buffer_1.Buffer.isBuffer(chunk) ? chunk : buffer_1.Buffer.from(chunk);
        if (chunk && chunk.byteLength > 0) {
            (_a = this.attach) === null || _a === void 0 ? void 0 : _a.seed(url, chunk);
        }
    }
    async getChunk(url, mid) {
        if (this.attach) {
            return this.attach.getChunk(url, mid);
        }
        else {
            let chunkId = utils.buildChunkId(url);
            if (mid)
                chunkId = mid + "-" + chunkId;
            return store_1.default.getChunk(chunkId);
        }
    }
    async hasChunk(url) {
        let chunkId = utils.buildChunkId(url);
        return store_1.default.has(chunkId);
    }
    clearPlayList() { }
    async fetch(url, init) {
        var _a;
        if (!url || !this.attach)
            return new Response("no data", { status: 404 });
        try {
            let method = (init === null || init === void 0 ? void 0 : init.method) || "GET";
            let hasUrl = (await ((_a = this.attach) === null || _a === void 0 ? void 0 : _a.hasUrl(url))) && /^GET$/i.test(method);
            if (/^GET$/i.test(method)) {
                let chunk = await this.getChunk(url);
                if (chunk && chunk.byteLength > 0)
                    return new Response(chunk, { status: 200 });
            }
            let startTime = Date.now();
            let usePeer = false;
            return new Promise(async (resolve) => {
                var _a;
                if (utils.inContext()) {
                    let pid = setTimeout(async () => {
                        let res = await this.attach.fetch(url, init);
                        if ([200, 206].includes(res.status)) {
                            resolve(res);
                        }
                    }, 10 * 1000);
                    (_a = chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage({ router: "/fetch", data: Object.assign(Object.assign({}, init), { url: url }) }, async (res) => {
                        let data = res === null || res === void 0 ? void 0 : res.data;
                        if (hasUrl) {
                            let isOk = false;
                            this.loadBackAvgTTL = (this.loadBackAvgTTL + Date.now() - startTime) / 2;
                            if ([200, 206].includes(res.status) && data) {
                                let chunk = /buffer/i.test(data.type) ? buffer_1.Buffer.from(data.data) : buffer_1.Buffer.from(data);
                                if (chunk.byteLength >= 1024) {
                                    isOk = true;
                                    this.seed(url, chunk);
                                }
                            }
                            if (!isOk) {
                                let nres = await this.attach.fetch(url, init);
                                if ([200, 206].includes(nres.status)) {
                                    clearTimeout(pid);
                                    this.loadingBack.delete(url);
                                    resolve(nres);
                                    return;
                                }
                            }
                        }
                        clearTimeout(pid);
                        this.loadingBack.delete(url);
                        let headers = new Headers();
                        for (let key in res.headers)
                            headers.append(key, res.headers[key]);
                        let nres = new Response(data, { status: res.status, headers: headers });
                        try {
                            Object.defineProperty(nres, "url", { value: url });
                        }
                        catch (err) { }
                        resolve(nres);
                    });
                }
                else {
                    let res = await (0, fetch_1.fetch)(url, Object.assign(Object.assign({}, init), { timeout: 3000 })).catch((err) => new Response("error", { status: 500 }));
                    if (!res.ok) {
                        res = await this.attach.fetch(url, init);
                    }
                    this.loadingBack.delete(url);
                    resolve(res);
                }
            });
        }
        catch (err) {
            this.loadingBack.delete(url);
            return new Response(err === null || err === void 0 ? void 0 : err.message, { status: 500 });
        }
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
const gchrome = globalThis.chrome || globalThis.browser || {};
exports["default"] = gchrome;


/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetch = exports.XResponse = void 0;
const fetchOrigin = globalThis.fetch;
class XResponse extends Response {
    constructor(response, controller) {
        super(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
        });
        this.response = response;
        this.controller = controller;
    }
    get url() {
        return this.response.url;
    }
    abort() {
        var _a;
        (_a = this.controller) === null || _a === void 0 ? void 0 : _a.abort();
    }
}
exports.XResponse = XResponse;
async function fetch(request, options) {
    let controller = new AbortController();
    let signal = controller.signal;
    let url = request instanceof Request ? request.url : request;
    options = options || {};
    if (request instanceof Request) {
        for (let key in request) {
            options[key] = request[key];
        }
    }
    delete options.url;
    let timeout = options.timeout || 15 * 1000;
    options.signal = signal;
    let isTimeout = true;
    let pid = setTimeout(() => {
        if (!isTimeout)
            return;
        controller.abort();
    }, timeout || 15 * 1000);
    let res = await fetchOrigin(url, options).then((res) => {
        isTimeout = false;
        pid && clearTimeout(pid);
        return res;
    });
    return new XResponse(res, controller);
}
exports.fetch = fetch;
exports["default"] = fetch;


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
const chrome_1 = __importDefault(__webpack_require__(90));
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
    let urlId = md5(url + ":" + "IVIDEOS-SAVCX");
    return urlId;
}
exports.buildMediaId = buildMediaId;
function inContext() {
    var _a;
    return !!(chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.runtime) && !!((_a = chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage) && !!(chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.storage);
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

/***/ 421:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const liondb_1 = __importDefault(__webpack_require__(552));
const liondb = new liondb_1.default("ivideos");
(async () => {
    let keyStartTime = "key-start-time";
    async function check() {
        let startTime = await liondb.get(keyStartTime);
        startTime = parseInt(startTime);
        if (startTime) {
            if (Date.now() - startTime >= 24 * 60 * 60 * 1000) {
                liondb.clear({});
            }
        }
        else {
            liondb.set(keyStartTime, Date.now());
        }
    }
    setTimeout(async () => check(), 1000);
})();
exports["default"] = liondb;


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
const config_1 = __importDefault(__webpack_require__(248));
const ipeer_1 = __webpack_require__(497);
const inPopup = !/^https?:\/\//i.test(location.href);
class Request {
    constructor() {
        var _a;
        this.tasks = new Map();
        let tasks = this.tasks;
        (_a = globalThis.window) === null || _a === void 0 ? void 0 : _a.addEventListener("message", (event) => {
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
            (_a = chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.tabs) === null || _a === void 0 ? void 0 : _a.getCurrent((tab) => {
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
        console.info("getInfo", config_1.default.mode, util.inContext(), (0, ipeer_1.deviceId)());
        if (config_1.default.mode == "plugin") {
            sendToPage("ivideos.info", {}, callback, "*");
        }
        else {
            callback({ title: "ivideos", url: location.href, env: "worker", deviceId: (0, ipeer_1.deviceId)() });
        }
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
const env = {"NODE_ENV":"production","appVersion":"2.0.9"} || {};
class Stats extends eventemitter3_1.default {
    constructor() {
        var _a;
        super();
        this.appVersion = env.appVersion || "";
        let _this = this;
        try {
            if (util.inContext()) {
                (_a = chrome_1.default === null || chrome_1.default === void 0 ? void 0 : chrome_1.default.runtime) === null || _a === void 0 ? void 0 : _a.sendMessage({ router: "/deviceInfo", data: {} }, (res) => {
                    if (!res || !res.deviceId)
                        return;
                    _this.deviceId = res.deviceId;
                    _this.ip = res.ip;
                    _this.emit("ready", res);
                });
            }
            else {
                globalThis.addEventListener("load", () => {
                    _this.emit("ready", { deviceId: "" });
                });
            }
        }
        catch (err) { }
        this.once("ready", (res) => {
            if (this.isTop) {
                mixpanel_browser_1.default.identify(res.deviceId);
            }
        });
    }
    set ip(ip) {
        var _a;
        try {
            this._ip = ip;
            (_a = globalThis.localStorage) === null || _a === void 0 ? void 0 : _a.setItem("ip", ip);
        }
        catch (err) { }
    }
    get ip() {
        return this._ip;
    }
    get isTop() {
        return globalThis.window === globalThis.top;
    }
    setAppVersion(appVersion) {
        this.appVersion = appVersion;
    }
    register(uid) {
        if (!uid)
            return;
        if (!this.isTop)
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
        if (!this.isTop)
            return;
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
        mixpanel_browser_1.default.track(name, Object.assign(Object.assign({}, data), { appVersion: this.appVersion, t: Date.now(), language: navigator.language, clientXp: this.ip, $user_id: this.deviceId, distinct_id: this.deviceId }));
    }
}
const stats = new Stats();
exports["default"] = stats;


/***/ }),

/***/ 631:
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
class IndexedStore {
    constructor(mid) {
        this.totalSize = 0;
        this.count = 0;
        if (globalThis.localStorage) {
            let smid = globalThis.localStorage.getItem("mid");
            if (smid != mid)
                this.clear();
            globalThis.localStorage.setItem("mid", mid);
        }
        else {
            this.clear();
        }
        self.addEventListener("close", async () => this.clear());
    }
    key(key) {
        if (/^[a-z0-9]{32}$/i.test(key))
            return key;
        return key;
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
        if (/buffer/i.test(data === null || data === void 0 ? void 0 : data.type))
            data = Buffer.from(data.data);
        if (data && data.byteLength > 0) {
            let size = (await idb.get(key + "-size")) || 0;
            if (size == data.byteLength)
                return data;
            return Buffer.alloc(0);
        }
        return data || Buffer.alloc(0);
    }
    async set(key, chunk) {
        key = this.key(key);
        let has = await this.has(key);
        if (!has) {
            this.totalSize += chunk.byteLength;
            this.count++;
        }
        idb === null || idb === void 0 ? void 0 : idb.set(key, chunk);
        await idb.set(key + "-size", chunk.byteLength);
    }
    getObject(key) {
        return idb.get(key);
    }
    setObject(key, value) {
        return idb.set(key, value);
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
        let keys = await idb.keys();
        return keys.includes(key);
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
        this.playlist = [];
    }
    setMedia(mid) {
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
    async getChunk(key) {
        var _a;
        let chunk = Buffer.alloc(0);
        try {
            chunk = await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.get(key));
            if (chunk.byteLength % 4 != 0) {
                this.del(key);
                return Buffer.alloc(0);
            }
        }
        catch (err) {
            chunk = Buffer.alloc(0);
        }
        return chunk;
    }
    async setChunk(key, chunk) {
        var _a;
        if (!Buffer.isBuffer(chunk))
            chunk = Buffer.from(chunk);
        if (!Buffer.isBuffer(chunk))
            console.info("no buffer", chunk);
        chunk.byteLength > 0 && this.hass.set(key, true);
        await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.set(key, chunk));
    }
    async del(key) {
        var _a;
        (_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.delete(key);
        this.hass.delete(key);
    }
    async has(key) {
        var _a;
        if (this.hass.has(key))
            return true;
        let has = (await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.has(key))) || false;
        if (has)
            this.hass.set(key, true);
        return has;
    }
    async clear() {
        var _a;
        (_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.clear();
    }
    async size() {
        var _a;
        let s2 = await ((_a = this.idxStore) === null || _a === void 0 ? void 0 : _a.size());
        let size = s2;
        return size;
    }
    getObject(key) {
        return this.idxStore.getObject(key);
    }
    setObject(key, value) {
        return this.idxStore.setObject(key, value);
    }
}
const store = new Store();
exports["default"] = store;


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



/***/ }),

/***/ 40:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ivideos","version":"2.1.0","main":"dist/ivideos.js","browser":"dist/ivideos.js","license":"MIT","bin":{},"types":"dist/index.d.ts","scripts":{},"engines":{"node":">=10.0.0"},"keywords":[],"repository":"","dependencies":{},"devDependencies":{},"description":"ivideos - 视频加速器, ivideos - Video Accelerator","files":["dist","package.json","README.md"]}');

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
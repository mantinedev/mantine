(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var a in e)t(n,a,{get:e[a],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(317477),a=e.i(44091),i=e.i(391466),o=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let u=(0,r.createVarsResolver)((e,{radius:r,color:a,gradient:i,variant:o,size:l,autoContrast:s,circle:c})=>{let u=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:i,variant:o||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===r?void 0:(0,t.getRadius)(r),"--badge-bg":a||o?u.background:void 0,"--badge-color":a||o?u.color:void 0,"--badge-bd":a||o?u.border:void 0,"--badge-dot-color":"dot"===o?(0,n.getThemeColor)(a,e):void 0}}}),d=(0,o.polymorphicFactory)(e=>{let t=(0,a.useProps)("Badge",null,e),{classNames:r,className:n,style:o,styles:d,unstyled:m,vars:h,radius:p,color:f,gradient:g,leftSection:v,rightSection:y,children:b,variant:x,fullWidth:S,autoContrast:k,circle:w,mod:M,attributes:A,...j}=t,I=(0,i.useStyles)({name:"Badge",props:t,classes:s,className:n,style:o,classNames:r,styles:d,unstyled:m,attributes:A,vars:h,varsResolver:u});return(0,c.jsxs)(l.Box,{variant:x,mod:[{block:S,circle:w,"with-right-section":!!y,"with-left-section":!!v},M],...I("root",{variant:x}),...j,children:[v&&(0,c.jsx)("span",{...I("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...I("label"),children:b}),y&&(0,c.jsx)("span",{...I("section"),"data-position":"right",children:y})]})});d.classes=s,d.varsResolver=u,d.displayName="@mantine/core/Badge",e.s(["Badge",0,d],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},123895,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="AtIcon",e.s(["AtIcon",0,a],123895)},888494,e=>{"use strict";var t=e.i(191788),r=e.i(395598),n=e.i(543372),a=e.i(662688),i=e=>e.chartData.chartData,o=e=>{var t=e.chartData;return{startIndex:t.dataStartIndex,endIndex:t.dataEndIndex}};e.s(["ChartDataContextProvider",0,e=>{var i=e.chartData,o=(0,n.useAppDispatch)(),l=(0,a.useIsPanorama)();return(0,t.useEffect)(()=>l?()=>{}:(o((0,r.setChartData)(i)),()=>{o((0,r.setChartData)(void 0))}),[i,o,l]),null},"SetComputedData",0,e=>{var a=e.computedData,i=(0,n.useAppDispatch)();return(0,t.useEffect)(()=>(i((0,r.setComputedData)(a)),()=>{i((0,r.setChartData)(void 0))}),[a,i]),null},"useChartData",0,()=>(0,n.useAppSelector)(i),"useDataIndex",0,()=>(0,n.useAppSelector)(o)])},221168,(e,t,r)=>{var n={675:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,i=s(e),o=i[0],l=i[1],c=new a((o+l)*3/4-l),u=0,d=l>0?o-4:o;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,a=n%3,i=[],o=0,l=n-a;o<l;o+=16383)i.push(function(e,t,n){for(var a,i=[],o=t;o<n;o+=3)a=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(r[a>>18&63]+r[a>>12&63]+r[a>>6&63]+r[63&a]);return i.join("")}(e,o,o+16383>l?l:o+16383));return 1===a?i.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===a&&i.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),i.join("")};for(var r=[],n=[],a="u">typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,l=i.length;o<l;++o)r[o]=i[o],n[i.charCodeAt(o)]=o;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n[45]=62,n[95]=63},72:function(e,t,r){"use strict";var n=r(675),a=r(783),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e){var n=e,a=t;if(("string"!=typeof a||""===a)&&(a="utf8"),!l.isEncoding(a))throw TypeError("Unknown encoding: "+a);var i=0|h(n,a),s=o(i),c=s.write(n,a);return c!==i&&(s=s.slice(0,c)),s}if(ArrayBuffer.isView(e))return d(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(C(e,ArrayBuffer)||e&&C(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(C(e,SharedArrayBuffer)||e&&C(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var u=e.valueOf&&e.valueOf();if(null!=u&&u!==e)return l.from(u,t,r);var p=function(e){if(l.isBuffer(e)){var t=0|m(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?o(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(p)return p;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),o(e<0?0:0|m(e))}function d(e){for(var t=e.length<0?0:0|m(e.length),r=o(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!l.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(c(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)};function m(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function h(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||C(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return A(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return I(e).length;default:if(a)return n?-1:A(e).length;t=(""+t).toLowerCase(),a=!0}}function p(e,t,r){var a,i,o,l=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var a="",i=t;i<r;++i)a+=T[e[i]];return a}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(e[a]);return n}(this,t,r);case"base64":return a=this,i=t,o=r,0===i&&o===a.length?n.fromByteArray(a):n.fromByteArray(a.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),a="",i=0;i<n.length;i+=2)a+=String.fromCharCode(n[i]+256*n[i+1]);return a}(this,t,r);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function f(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,a){var i;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(i=r*=1)!=i&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(a)return -1;else r=e.length-1;else if(r<0)if(!a)return -1;else r=0;if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,a);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(a)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return v(e,[t],r,n,a)}throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,a){var i,o=1,l=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,l/=2,s/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){var u=-1;for(i=r;i<l;i++)if(c(e,i)===c(t,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===s)return u*o}else -1!==u&&(i-=i-u),u=-1}else for(r+s>l&&(r=l-s),i=r;i>=0;i--){for(var d=!0,m=0;m<s;m++)if(c(e,i+m)!==c(t,m)){d=!1;break}if(d)return i}return -1}l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(C(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),C(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,a=0,i=Math.min(r,n);a<i;++a)if(e[a]!==t[a]){r=e[a],n=t[a];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=l.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(C(i,Uint8Array)&&(i=l.from(i)),!l.isBuffer(i))throw TypeError('"list" argument must be an Array of Buffers');i.copy(n,a),a+=i.length}return n},l.byteLength=h,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)f(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)f(this,t,t+3),f(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)f(this,t,t+7),f(this,t+1,t+6),f(this,t+2,t+5),f(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):p.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,a){if(C(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||r>e.length||n<0||a>this.length)throw RangeError("out of range index");if(n>=a&&t>=r)return 0;if(n>=a)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var i=a-n,o=r-t,s=Math.min(i,o),c=this.slice(n,a),u=e.slice(t,r),d=0;d<s;++d)if(c[d]!==u[d]){i=c[d],o=u[d];break}return i<o?-1:+(o<i)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)};function y(e,t,r){r=Math.min(e.length,r);for(var n=[],a=t;a<r;){var i,o,l,s,c=e[a],u=null,d=c>239?4:c>223?3:c>191?2:1;if(a+d<=r)switch(d){case 1:c<128&&(u=c);break;case 2:(192&(i=e[a+1]))==128&&(s=(31&c)<<6|63&i)>127&&(u=s);break;case 3:i=e[a+1],o=e[a+2],(192&i)==128&&(192&o)==128&&(s=(15&c)<<12|(63&i)<<6|63&o)>2047&&(s<55296||s>57343)&&(u=s);break;case 4:i=e[a+1],o=e[a+2],l=e[a+3],(192&i)==128&&(192&o)==128&&(192&l)==128&&(s=(15&c)<<18|(63&i)<<12|(63&o)<<6|63&l)>65535&&s<1114112&&(u=s)}null===u?(u=65533,d=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),a+=d}var m=n,h=m.length;if(h<=4096)return String.fromCharCode.apply(String,m);for(var p="",f=0;f<h;)p+=String.fromCharCode.apply(String,m.slice(f,f+=4096));return p}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,a,i){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function S(e,t,r,n,a,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function k(e,t,r,n,i){return t*=1,r>>>=0,i||S(e,t,r,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,r,n,23,4),r+4}function w(e,t,r,n,i){return t*=1,r>>>=0,i||S(e,t,r,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,r,n,52,8),r+8}l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a,i,o,l,s,c,u,d,m=this.length-t;if((void 0===r||r>m)&&(r=m),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;var i=t.length;n>i/2&&(n=i/2);for(var o=0;o<n;++o){var l,s=parseInt(t.substr(2*o,2),16);if((l=s)!=l)break;e[r+o]=s}return o}(this,e,t,r);case"utf8":case"utf-8":return a=t,i=r,D(A(e,this.length-a),this,a,i);case"ascii":return o=t,l=r,D(j(e),this,o,l);case"latin1":case"binary":return function(e,t,r,n){return D(j(t),e,r,n)}(this,e,t,r);case"base64":return s=t,c=r,D(I(e),this,s,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,D(function(e,t){for(var r,n,a=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,a.push(r%256),a.push(n);return a}(e,this.length-u),this,u,d);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n},l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},l.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=t,a=1,i=this[e+--n];n>0&&(a*=256);)i+=this[e+--n]*a;return i>=(a*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),a.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),a.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),a.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),a.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;x(this,e,t,r,a,0)}var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;x(this,e,t,r,a,0)}var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);x(this,e,t,r,a-1,-a)}var i=0,o=1,l=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===l&&0!==this[t+i-1]&&(l=1),this[t+i]=(e/o|0)-l&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);x(this,e,t,r,a-1,-a)}var i=r-1,o=1,l=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===l&&0!==this[t+i+1]&&(l=1),this[t+i]=(e/o|0)-l&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return w(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return w(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var a=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var i=a-1;i>=0;--i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return a},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var a,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=l.isBuffer(e)?e:l.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var M=/[^+/0-9A-Za-z-_]/g;function A(e,t){t=t||1/0;for(var r,n=e.length,a=null,i=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!a){if(r>56319||o+1===n){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function j(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function I(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function D(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length)&&!(a>=e.length);++a)t[a+r]=e[a];return a}function C(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var T=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,a=0;a<16;++a)t[n+a]=e[r]+e[a];return t}()},783:function(e,t){t.read=function(e,t,r,n,a){var i,o,l=8*a-n-1,s=(1<<l)-1,c=s>>1,u=-7,d=r?a-1:0,m=r?-1:1,h=e[t+d];for(d+=m,i=h&(1<<-u)-1,h>>=-u,u+=l;u>0;i=256*i+e[t+d],d+=m,u-=8);for(o=i&(1<<-u)-1,i>>=-u,u+=n;u>0;o=256*o+e[t+d],d+=m,u-=8);if(0===i)i=1-c;else{if(i===s)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,n),i-=c}return(h?-1:1)*o*Math.pow(2,i-n)},t.write=function(e,t,r,n,a,i){var o,l,s,c=8*i-a-1,u=(1<<c)-1,d=u>>1,m=5960464477539062e-23*(23===a),h=n?0:i-1,p=n?1:-1,f=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+d>=1?t+=m/s:t+=m*Math.pow(2,1-d),t*s>=2&&(o++,s/=2),o+d>=u?(l=0,o=u):o+d>=1?(l=(t*s-1)*Math.pow(2,a),o+=d):(l=t*Math.pow(2,d-1)*Math.pow(2,a),o=0));a>=8;e[r+h]=255&l,h+=p,l/=256,a-=8);for(o=o<<a|l,c+=a;c>0;e[r+h]=255&o,h+=p,o/=256,c-=8);e[r+h-p]|=128*f}}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}},o=!0;try{n[e](r,r.exports,i),o=!1}finally{o&&delete a[e]}return r.exports}i.ab="/ROOT/node_modules/next/dist/compiled/buffer/",t.exports=i(72)},133180,e=>{"use strict";e.s(["getSeriesLabels",0,function(e){return e?e.reduce((e,t)=>{let r=t.name.search(/\./);return r>=0?e[t.name.substring(r+1)]=t.label:e[t.name]=t.label,e},{}):{}}])},520916,e=>{"use strict";var t=e.i(133180),r={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"},n=e.i(232471),a=e.i(275519),i=e.i(317477),o=e.i(951254),l=e.i(44091),s=e.i(391466),c=e.i(391398);function u(e,t){let r=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let r=e.name.substring(0,t),n={...e.payload[r]},a=Object.entries(e.payload).reduce((e,t)=>{let[n,a]=t;return n===r?e:{...e,[n]:a}},{});return{...e,name:e.name.substring(t+1),payload:{...a,...n}}}return e});if(null==t)return r;if("number"==typeof t){let e=r[t];return e?[e]:[]}return r.filter(e=>e.name===t)}function d(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let m={type:"area",showColor:!0},h=(0,a.factory)(e=>{let a=(0,l.useProps)("ChartTooltip",m,e),{classNames:h,className:p,style:f,styles:g,unstyled:v,vars:y,payload:b,label:x,unit:S,type:k,segmentId:w,mod:M,series:A,valueFormatter:j,showColor:I,attributes:D,...C}=a,T=(0,o.useMantineTheme)(),E=(0,s.useStyles)({name:"ChartTooltip",classes:r,props:a,className:p,style:f,classNames:h,styles:g,unstyled:v,attributes:D});if(!b)return null;let P=u(b,w),R="scatter"===k?b[0]?.payload?.name:null,V=(0,t.getSeriesLabels)(A),_=x||R,O=P.map((e,t)=>(0,c.jsxs)("div",{"data-type":k,...E("tooltipItem"),children:[(0,c.jsxs)("div",{...E("tooltipItemBody"),children:[I&&(0,c.jsx)("svg",{...E("tooltipItemColor"),children:(0,c.jsx)("circle",{r:6,fill:(0,i.getThemeColor)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,c.jsx)("div",{...E("tooltipItemName"),children:V[e.name]||e.name})]}),(0,c.jsxs)("div",{...E("tooltipItemData"),children:["function"==typeof j?j(d(e,k)):d(e,k),S||e.unit]})]},e?.key??`${e.name}-${t}`));return(0,c.jsxs)(n.Box,{...E("tooltip"),mod:[{type:k},M],...C,children:[_&&(0,c.jsx)("div",{...E("tooltipLabel"),children:_}),(0,c.jsx)("div",{...E("tooltipBody"),children:O})]})});h.displayName="@mantine/charts/ChartTooltip",e.s(["ChartTooltip",0,h,"getFilteredChartTooltipPayload",0,u],520916)},692385,e=>{"use strict";var t=e.i(852361),r=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,a){let{min:i,max:o,step:l=1}={...n,...a},s=Math.abs(l),[c,u]=(0,r.useState)((0,t.clamp)(e,i,o));return[c,{increment:(0,r.useCallback)(()=>u(e=>(0,t.clamp)(e+s,i,o)),[i,o,s]),decrement:(0,r.useCallback)(()=>u(e=>(0,t.clamp)(e-s,i,o)),[i,o,s]),set:(0,r.useCallback)(e=>u((0,t.clamp)(e,i,o)),[i,o]),reset:(0,r.useCallback)(()=>u((0,t.clamp)(e,i,o)),[e,i,o])}]}])},141806,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(44091),a=e.i(391466),i=e.i(956449),o=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),u=e.i(391398);let d=(0,c.createContext)({withinGroup:!1}),m=(0,r.createVarsResolver)((e,{spacing:r})=>({group:{"--ag-spacing":(0,t.getSpacing)(r)}})),h=(0,s.factory)(e=>{let t=(0,n.useProps)("AvatarGroup",null,e),{classNames:r,className:i,style:s,styles:c,unstyled:h,vars:p,spacing:f,attributes:g,...v}=t,y=(0,a.useStyles)({name:"AvatarGroup",classes:l,props:t,className:i,style:s,classNames:r,styles:c,unstyled:h,attributes:g,vars:p,varsResolver:m,rootSelector:"group"});return(0,u.jsx)(d,{value:{withinGroup:!0},children:(0,u.jsx)(o.Box,{...y("group"),...v})})});function p(e){return(0,u.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}h.classes=l,h.varsResolver=m,h.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,r.createVarsResolver)((e,{size:r,radius:n,variant:a,gradient:i,color:o,autoContrast:l,name:s,allowedInitialsColors:c})=>{let u="initials"===o&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e))%t.length]}(s,c):o,d=e.variantColorResolver({color:u||"gray",theme:e,gradient:i,variant:a||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(r,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,t.getRadius)(n),"--avatar-bg":u||a?d.background:void 0,"--avatar-color":u||a?d.color:void 0,"--avatar-bd":u||a?d.border:void 0}}}),v=(0,i.polymorphicFactory)(e=>{let t=(0,n.useProps)("Avatar",null,e),{classNames:r,className:i,style:s,styles:m,unstyled:h,vars:f,src:v,alt:y,radius:b,color:x,gradient:S,imageProps:k,children:w,autoContrast:M,mod:A,name:j,allowedInitialsColors:I,attributes:D,...C}=t,T=(0,c.use)(d),[E,P]=(0,c.useState)(!v),R=(0,a.useStyles)({name:"Avatar",props:t,classes:l,className:i,style:s,classNames:r,styles:m,unstyled:h,attributes:D,vars:f,varsResolver:g});return(0,c.useEffect)(()=>P(!v),[v]),(0,u.jsx)(o.Box,{...R("root"),mod:[{"within-group":T.withinGroup},A],...C,children:E||!v?(0,u.jsx)("span",{...R("placeholder"),title:y,children:w||"string"==typeof j&&function(e,t=2){let r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(j)||(0,u.jsx)(p,{})}):(0,u.jsx)("img",{...k,...R("image"),src:v,alt:y,onError:e=>{P(!0),k?.onError?.(e)}})})});v.classes=l,v.varsResolver=g,v.displayName="@mantine/core/Avatar",v.Group=h,e.s(["Avatar",0,v],141806)},463044,e=>{"use strict";let t;var r=e.i(191788),n=e.i(730943);function a(e,t,r){let n,a=r.initialDeps??[],i=!0;function o(){let o=e();return(o.length!==a.length||o.some((e,t)=>a[t]!==e))&&(a=o,n=t(...o),(null==r?void 0:r.onChange)&&!(i&&r.skipInitialOnChange)&&r.onChange(n),i=!1),n}return o.updateDeps=e=>{a=e},o}function i(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let o=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},l=e=>{let{offsetWidth:t,offsetHeight:r}=e;return{width:t,height:r}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),r=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,n=Array(r);for(let e=0;e<r;e++)n[e]=t+e;return n},u=(e,t)=>{let r=e.scrollElement;if(!r)return;let n=e.targetWindow;if(!n)return;let a=e=>{let{width:r,height:n}=e;t({width:Math.round(r),height:Math.round(n)})};if(a(l(r)),!n.ResizeObserver)return()=>{};let i=new n.ResizeObserver(t=>{let n=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void a({width:t.inlineSize,height:t.blockSize})}a(l(r))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()});return i.observe(r,{box:"border-box"}),()=>{i.unobserve(r)}},d={passive:!0},m="u"<typeof window||"onscrollend"in window,h=(e,t)=>((e,t,r)=>{var n,a;let i,o=e.scrollElement;if(!o)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&m,c=0,u=s?null:(n=()=>t(c,!1),a=e.options.isScrollingResetDelay,function(...e){l.clearTimeout(i),i=l.setTimeout(()=>n.apply(this,e),a)}),h=e=>()=>{c=r(o),null==u||u(),t(c,e)},p=h(!0),f=h(!1);return o.addEventListener("scroll",p,d),s&&o.addEventListener("scrollend",f,d),()=>{o.removeEventListener("scroll",p),s&&o.removeEventListener("scrollend",f)}})(e,t,t=>{let{horizontal:r,isRtl:n}=e.options;return r?t.scrollLeft*(n&&-1||1):t.scrollTop}),p=(e,t,r)=>{if(r.options.useCachedMeasurements){let t=r.indexFromElement(e),n=r.options.getItemKey(t);return r.itemSizeCache.get(n)??r.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=r.indexFromElement(e),n=r.options.getItemKey(t),a=r.itemSizeCache.get(n);if(void 0!==a)return a}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},f=(e,{adjustments:t=0,behavior:r},n)=>{var a,i;null==(i=null==(a=n.scrollElement)?void 0:a.scrollTo)||i.call(a,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})};class g{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,r;return(null==(r=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:r.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,r=this.indexFromElement(t);if(!t.isConnected){for(let[e,r]of(this.observer.unobserve(t),this.elementsCache))if(r===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(r)&&this.resizeItem(r,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var r;null==(r=t())||r.disconnect(),e=null},observe:e=>{var r;return null==(r=t())?void 0:r.observe(e,{box:"border-box"})},unobserve:e=>{var r;return null==(r=t())?void 0:r.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,r;let n={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:p,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let r=e[t];void 0!==r&&(n[t]=r)}let a=this.options,i=null,o=null,l=!1;if(void 0!==a&&a.enabled&&n.enabled&&"end"===n.anchorTo&&null!==this.scrollElement){let e=a.count,s=n.count,c=this.getMeasurements(),u=e>0?(null==(t=c[0])?void 0:t.key)??a.getItemKey(0):null,d=e>0?(null==(r=c[e-1])?void 0:r.key)??a.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(n.getItemKey(0)!==u||n.getItemKey(s-1)!==d)){l=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(i=[t.key,this.getScrollOffset()-t.start]);let r=!0===n.followOnAppend?"auto":n.followOnAppend||null;r&&s>e&&this.isAtEnd(a.scrollEndThreshold)&&(0===e||n.getItemKey(s-1)!==d)&&(o=r)}}this.options=n,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let u=!1,d=0;if(i&&null!==this.scrollOffset){let[e,t]=i,r=this.getMeasurements(),{count:n,getItemKey:a}=this.options,o=0;for(;o<n&&a(o)!==e;)o++;if(o<n){let e=r[o];if(e){let r=e.start+t;r!==this.scrollOffset&&(d=r-this.scrollOffset,this.scrollOffset=r,u=!0)}}}(u||o)&&(this.pendingScrollAnchor=[u?i[0]:null,u?i[1]:0,o,d])},this.notify=e=>{var t,r;null==(r=(t=this.options).onChange)||r.call(t,this,e)},this.maybeNotify=a(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let r=this.getScrollOffset();this.scrollDirection=t?r===e?this.scrollDirection:r<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},r=()=>{this._iosTouching=!1,o()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,d),e.addEventListener("touchend",r,d),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",r),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let r=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,r&&this.scrollElement&&this.options.enabled){let[e,t,n,a]=r;null===e||n||(o()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==a&&(this._iosDeferredAdjustment+=a):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),n&&this.scrollToEnd({behavior:n})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let r=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=r,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let r=new Map,n=new Map;for(let a=t-1;a>=0;a--){let t=e[a];if(r.has(t.lane))continue;let i=n.get(t.lane);if(null==i||t.end>i.end?n.set(t.lane,t):t.end<i.end&&r.set(t.lane,!0),r.size===this.options.lanes)break}return n.size===this.options.lanes?Array.from(n.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=a(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,r,n,a,i,o)=>(void 0!==this.prevLanes&&this.prevLanes!==i&&(this.lanesChangedFlag=!0),this.prevLanes=i,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:a,lanes:i,laneAssignmentMode:o}),{key:!1}),this.getMeasurements=a(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:a,lanes:i,laneAssignmentMode:o},l)=>{let s=this.itemSizeCache;if(!a)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===i){var u;let a,i=this.options.gap,o=2*e,l=this._flatMeasurements;if(!l||l.length<o){let e=new Float64Array(o);l&&c>0&&e.set(l.subarray(0,2*c)),l=e,this._flatMeasurements=l}if(0===c)a=t+r;else{let e=c-1;a=l[2*e]+l[2*e+1]+i}for(let t=c;t<e;t++){let e=n(t),r=s.get(e),o="number"==typeof r?r:this.options.estimateSize(t);l[2*t]=a,l[2*t+1]=o,a+=o+i}let d=(u=l,new Proxy(Array(e),{get(t,r,a){if("string"==typeof r){let a=r.charCodeAt(0);if(a>=48&&a<=57){let a=+r;if(Number.isInteger(a)&&a>=0&&a<e){let e=t[a];if(!e){let r=u[2*a];e=t[a]={index:a,key:n(a),start:r,size:u[2*a+1],end:r+u[2*a+1],lane:0}}return e}}if("length"===r)return e}return Reflect.get(t,r,a)}}));return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,c),m=Array(i).fill(void 0);for(let e=0;e<c;e++){let t=d[e];t&&(m[t.lane]=e)}for(let a=c;a<e;a++){let e,i,l=n(a),c=this.laneAssignments.get(a),u="estimate"===o||s.has(l);if(void 0!==c&&this.options.lanes>1){let n=m[e=c],a=void 0!==n?d[n]:void 0;i=a?a.end+this.options.gap:t+r}else{let n=1===this.options.lanes?d[a-1]:this.getFurthestMeasurement(d,a);i=n?n.end+this.options.gap:t+r,e=n?n.lane:a%this.options.lanes,this.options.lanes>1&&u&&this.laneAssignments.set(a,e)}let h=s.get(l),p="number"==typeof h?h:this.options.estimateSize(a),f=i+p;d[a]={index:a,start:i,size:p,end:f,key:l,lane:e},m[e]=a}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=a(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,r,n)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,r,n,a){let i=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:i};if(1===n&&null!==a){let e=function(e,t,r){let n=0;for(;n<=t;){let a=(n+t)/2|0,i=e[2*a];if(i<r)n=a+1;else{if(!(i>r))return a;t=a-1}}return n>0?n-1:0}(a,i,r),n=e,o=r+t;for(;n<i&&a[2*n]+a[2*n+1]<o;)n++;return{startIndex:e,endIndex:n}}let o=v(0,i,t=>e[t].start,r),l=o;if(1===n)for(;l<i&&e[l].end<r+t;)l++;else if(n>1){let a=Array(n).fill(0);for(;l<i&&a.some(e=>e<r+t);){let t=e[l];a[t.lane]=t.end,l++}let s=Array(n).fill(r+t);for(;o>=0&&s.some(e=>e>=r);){let t=e[o];s[t.lane]=t.start,o--}o=Math.max(0,o-o%n),l=Math.min(i,l+(n-1-l%n))}return{startIndex:o,endIndex:l}}(e,t,r,n,1===n&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=a(()=>{let e=null,t=null,r=this.calculateRange();return r&&(e=r.startIndex,t=r.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,r,n,a)=>null===n||null===a?[]:e({startIndex:n,endIndex:a,overscan:t,count:r}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,r=e.getAttribute(t);return r?parseInt(r,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let r=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==r&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,r-t),a=Math.min(this.options.count-1,r+t);return e>=n&&e<=a}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),r=this.options.getItemKey(t),n=this.elementsCache.get(r);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(r,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var r,n;let a,i,o;if(e<0||e>=this.options.count)return;let l=this._flatMeasurements;if(1===this.options.lanes&&null!==l)o=this.options.getItemKey(e),i=l[2*e],a=l[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;o=t.key,i=t.start,a=t.size}let s=t-(this.itemSizeCache.get(o)??a);if(0!==s){let l="end"===this.options.anchorTo&&(null==(r=this.scrollState)?void 0:r.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=l?this.getTotalSize():0,u=(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:o,start:i,size:a,end:i+a,lane:0},s,this):i<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(o)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(o,t),this.itemSizeCacheVersion++,l?this.applyScrollAdjustment(this.getTotalSize()-c):u&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=a(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let r=[];for(let n=0,a=e.length;n<a;n++){let a=t[e[n]];r.push(a)}return r},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let r=this._flatMeasurements,n=1===this.options.lanes&&null!=r,a=v(0,t.length-1,n?e=>r[2*e]:e=>i(t[e]).start,e);return i(t[a])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,r=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),a=this.getScrollOffset();return"auto"===t&&(t=e>=a+n?"end":"start"),"center"===t?e+=(r-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getSize(),n=this.getScrollOffset(),a=this.measurementsCache[e];if(!a)return;if("auto"===t)if(a.end>=n+r-this.options.scrollPaddingEnd)t="end";else{if(!(a.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let i="end"===t?a.end+this.options.scrollPaddingEnd:a.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(i,t,a.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:r="auto"}={})=>{let n=this.getOffsetForAlignment(e,t),a=this.now();this.scrollState={index:null,align:t,behavior:r,startedAt:a,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:r="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[a,i]=n,o=this.now();this.scrollState={index:e,align:i,behavior:r,startedAt:o,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let r=this.getScrollOffset()+e,n=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:n,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,r=this.getMeasurements();if(0===r.length)t=this.options.paddingStart;else if(1===this.options.lanes){let n=r.length-1,a=this._flatMeasurements;t=null!=a?a[2*n]+a[2*n+1]:(null==(e=r[n])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),n=r.length-1;for(;n>=0&&e.some(e=>null===e);){let t=r[n];null===e[t.lane]&&(e[t.lane]=t.end),n--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:r})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:r,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(o()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,r=t!==this.scrollState.lastTargetOffset;if(!r&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,r){let e=this.getSize()||600,r=Math.abs(t-this.getScrollOffset()),n="smooth"===this.scrollState.behavior&&r>e;this.scrollState.lastTargetOffset=t,n||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}}let v=(e,t,r,n)=>{for(;e<=t;){let a=(e+t)/2|0,i=r(a);if(i<n)e=a+1;else{if(!(i>n))return a;t=a-1}}return e>0?e-1:0},y="u">typeof document?r.useLayoutEffect:r.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:a="transform",...i}){let o=r.useReducer(e=>e+1,0)[1],l=r.useRef({enabled:t,mode:a,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});l.current.enabled=t,l.current.mode=a;let s=e=>{let t=l.current;if(!t.enabled||!t.container)return;let r=e.getTotalSize();if(r!==t.lastSize){t.lastSize=r;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${r}px`}let n=!!e.options.horizontal,a="transform"===t.mode,i=n?"left":"top",o=e.options.scrollMargin;for(let r of e.getVirtualItems()){let l=r.start-o,s=e.elementsCache.get(r.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),a?s.style.transform=n?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[i]=`${l}px`)}},c={...i,onChange:(t,r)=>{var a;let c=l.current,u=!0;if(c.enabled){s(t);let e=t.range,r=c.prevRange;(u=!r||r.isScrolling!==t.isScrolling||r.startIndex!==(null==e?void 0:e.startIndex)||r.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&r?(0,n.flushSync)(o):o()),null==(a=i.onChange)||a.call(i,t,r)}},[u]=r.useState(()=>{let e=new g(c);return Object.assign(e,{containerRef:t=>{let r=l.current;if(r.container=t,r.lastSize=null,t&&r.enabled){let n=e.getTotalSize();r.lastSize=n;let a=e.options.horizontal?"width":"height";t.style[a]=`${n}px`}}})});return u.setOptions(c),y(()=>u._didMount(),[]),y(()=>u._willUpdate()),y(()=>{s(u)}),u}({observeElementRect:u,observeElementOffset:h,scrollToFn:f,...e})}],463044)},931882,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,a],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},293907,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",opacity:"0.2"}),t.createElement("path",{d:"M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="SquaresFourIcon",e.s(["SquaresFourIcon",0,a],293907)},392385,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),t.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="CaretRightIcon",e.s(["CaretRightIcon",0,a],392385)},359250,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.maxBy=function(e,t){if(0===e.length)return;let r=e[0],n=t(r);for(let a=1;a<e.length;a++){let i=e[a],o=t(i);o>n&&(n=o,r=i)}return r}},446106,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(359250),a=e.r(387022),i=e.r(20972);r.maxBy=function(e,t){if(null!=e)return n.maxBy(Array.from(e),i.iteratee(t??a.identity))}},767577,(e,t,r)=>{t.exports=e.r(446106).maxBy},89495,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="DotsThreeIcon",e.s(["DotsThreeIcon",0,a],89495)},96618,e=>{"use strict";function t(e,r){for(let n of r){if(n.value===e)return n;if(Array.isArray(n.children)){let r=t(e,n.children);if(r)return r}}return null}e.s(["findTreeNode",0,t,"getAllChildrenNodes",0,function e(t){return t.reduce((t,r)=>(Array.isArray(r.children)&&r.children.length>0?t.push(...e(r.children)):t.push(r.value),t),[])},"getChildrenNodesValues",0,function e(r,n,a=[]){let i=t(r,n);return i?Array.isArray(i.children)&&0!==i.children.length?(i.children.forEach(t=>{Array.isArray(t.children)&&t.children.length>0?e(t.value,n,a):a.push(t.value)}),a):[i.value]:a}])},76407,e=>{"use strict";e.s(["getAllCheckedNodes",0,function e(t,r,n=[]){let a=[];for(let i of t)if(Array.isArray(i.children)&&i.children.length>0){let t=e(i.children,r,n);if(t.currentTreeChecked.length===i.children.length){let e=t.currentTreeChecked.every(e=>e.checked),r={checked:e,indeterminate:!e,value:i.value,hasChildren:!0};a.push(r),n.push(r)}else if(t.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:i.value,hasChildren:!0};a.push(e),n.push(e)}}else if(r.includes(i.value)){let e={checked:!0,indeterminate:!1,value:i.value,hasChildren:!1};a.push(e),n.push(e)}return{result:n,currentTreeChecked:a}}])},614398,e=>{"use strict";e.s(["memoize",0,function(e){let t=new Map;return(...r)=>{let n=JSON.stringify(r);if(t.has(n))return t.get(n);let a=e(...r);return t.set(n,a),a}}])},127262,183988,488400,401570,e=>{"use strict";var t=e.i(96618),r=e.i(76407),n=e.i(614398);function a(e,t,n){return 0!==n.length&&(!!n.includes(e)||(0,r.getAllCheckedNodes)(t,n).result.some(t=>t.value===e&&t.checked))}let i=(0,n.memoize)(a);function o(e,t,n){return 0!==n.length&&(0,r.getAllCheckedNodes)(t,n).result.some(t=>t.value===e&&t.indeterminate)}e.s(["isNodeChecked",0,a,"memoizedIsNodeChecked",0,i],183988);let l=(0,n.memoize)(o);e.s(["isNodeIndeterminate",0,o,"memoizedIsNodeIndeterminate",0,l],488400);var s=e.i(191788),c=e.i(579560);function u(e,t,r,n={}){return t.forEach(t=>{n[t.value]=t.value in e?e[t.value]:t.value===r,Array.isArray(t.children)&&u(e,t.children,r,n)}),n}function d(e,t){return("string"==typeof t.label?t.label:t.value).toLowerCase().includes(e.toLowerCase().trim())}e.s(["getTreeExpandedState",0,function(e,t){let r=u({},e,[]);if("*"===t){let e={},t=Object.keys(r);for(let r=0;r<t.length;r++)e[t[r]]=!0;return e}return t.forEach(e=>{r[e]=!0}),r},"useTree",0,function({initialSelectedState:e=[],expandedState:n,initialCheckedState:a=[],checkedState:o,initialExpandedState:d={},selectedState:m,multiple:h=!1,onNodeCollapse:p,onNodeExpand:f,onCheckedStateChange:g,onSelectedStateChange:v,onExpandedStateChange:y,onLoadChildren:b,checkStrictly:x=!1}={}){let[S,k]=(0,s.useState)([]),[w,M]=(0,c.useUncontrolled)({value:n,defaultValue:d,finalValue:{},onChange:y}),[A,j]=(0,c.useUncontrolled)({value:m,defaultValue:e,finalValue:[],onChange:v}),[I,D]=(0,c.useUncontrolled)({value:o,defaultValue:a,finalValue:[],onChange:g}),[C,T]=(0,s.useState)(null),E=(0,s.useRef)(new Set),P=(0,s.useRef)(new Set),[R,V]=(0,s.useState)([]),[_,O]=(0,s.useState)({}),F=(0,s.useCallback)(e=>{M(u(w,e,A)),D(function(e,r,n){if(n)return e;let a=[];return e.forEach(e=>a.push(...(0,t.getChildrenNodesValues)(e,r))),Array.from(new Set(a))}(I,e,x)),k(e)},[A,I,w,x]),z=(0,s.useCallback)(async e=>{if(b&&!(E.current.has(e)||P.current.has(e))){E.current.add(e),V(Array.from(E.current)),O(t=>{if(!(e in t))return t;let r={...t};return delete r[e],r});try{await b(e),P.current.add(e)}catch(r){let t=r instanceof Error?r:Error(String(r));O(r=>({...r,[e]:t}))}finally{E.current.delete(e),V(Array.from(E.current))}}},[b]),B=(0,s.useCallback)(e=>{if(!b)return;let r=(0,t.findTreeNode)(e,S);r&&r.hasChildren&&!Array.isArray(r.children)&&z(e)},[b,S,z]),H=(0,s.useCallback)(e=>{let t={...w,[e]:!w[e]};t[e]?f?.(e):p?.(e),t[e]&&B(e),M(t)},[p,f,w,B]),N=(0,s.useCallback)(e=>{!1!==w[e]&&p?.(e),M({...w,[e]:!1})},[p,w]),W=(0,s.useCallback)(e=>{!0!==w[e]&&f?.(e),B(e),M({...w,[e]:!0})},[f,w,B]),L=(0,s.useCallback)(()=>{let e={...w};Object.keys(e).forEach(t=>{e[t]=!0,B(t)}),M(e)},[w,B]),Y=(0,s.useCallback)(()=>{let e={...w};Object.keys(e).forEach(t=>{e[t]=!1}),M(e)},[w]),Z=(0,s.useCallback)(e=>h?A.includes(e)?(T(null),A.filter(t=>t!==e)):void(T(e),j([...A,e])):A.includes(e)?(T(null),[]):(T(e),[e]),[A]),U=(0,s.useCallback)(e=>{T(e),j(h?A.includes(e)?A:[...A,e]:[e])},[A]),$=(0,s.useCallback)(e=>{C===e&&T(null),j(A.filter(t=>t!==e))},[A]),G=(0,s.useCallback)(()=>{j([]),T(null)},[]),K=(0,s.useCallback)(e=>{x?I.includes(e)||D([...I,e]):D(Array.from(new Set([...I,...(0,t.getChildrenNodesValues)(e,S)])))},[S,I,x]),X=(0,s.useCallback)(e=>{if(x)D(I.filter(t=>t!==e));else{let r=(0,t.getChildrenNodesValues)(e,S);D(I.filter(e=>!r.includes(e)))}},[S,I,x]),J=(0,s.useCallback)(()=>{x?D(function e(t){let r=[];for(let n of t)r.push(n.value),Array.isArray(n.children)&&n.children.length>0&&r.push(...e(n.children));return r}(S)):D((0,t.getAllChildrenNodes)(S))},[S,x]),q=(0,s.useCallback)(()=>{D([])},[]),Q=(0,s.useCallback)(()=>x?I.map(e=>{let r=(0,t.findTreeNode)(e,S);return{checked:!0,indeterminate:!1,value:e,hasChildren:!!r&&(Array.isArray(r.children)&&r.children.length>0||!!r.hasChildren)}}):(0,r.getAllCheckedNodes)(S,I).result,[x,I,S]),ee=(0,s.useCallback)(e=>x?I.includes(e):i(e,S,I),[x,I,S]),et=(0,s.useCallback)(e=>!x&&l(e,S,I),[x,I,S]),er=(0,s.useCallback)(e=>R.includes(e),[R]),en=(0,s.useCallback)(e=>_[e]||null,[_]),ea=(0,s.useCallback)(e=>{P.current.delete(e),O(t=>{if(!(e in t))return t;let r={...t};return delete r[e],r})},[]);return(0,s.useMemo)(()=>({checkStrictly:x,multiple:h,expandedState:w,selectedState:A,checkedState:I,anchorNode:C,initialize:F,toggleExpanded:H,collapse:N,expand:W,expandAllNodes:L,collapseAllNodes:Y,setExpandedState:M,checkNode:K,uncheckNode:X,checkAllNodes:J,uncheckAllNodes:q,setCheckedState:D,toggleSelected:Z,select:U,deselect:$,clearSelected:G,setSelectedState:j,getCheckedNodes:Q,isNodeChecked:ee,isNodeIndeterminate:et,isNodeLoading:er,getNodeLoadError:en,loadNode:z,invalidateNode:ea}),[x,h,w,A,I,C,F,H,N,W,L,Y,M,K,X,J,q,D,Z,U,$,G,j,Q,ee,et,er,en,z,ea])}],127262),e.s(["defaultTreeNodeFilter",0,d,"filterTreeData",0,function e(t,r,n=d){if(!r.trim())return t;let a=[];for(let i of t){let t=n(r,i),o=Array.isArray(i.children)&&i.children.length>0?e(i.children,r,n):[];(t||o.length>0)&&a.push(o.length>0?{...i,children:o}:{...i})}return a}],401570)},540413,235209,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",opacity:"0.2"}),t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="FolderOpenIcon",e.s(["FolderOpenIcon",0,a],540413);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",opacity:"0.2"}),t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,88V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74Zm2,126.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h88a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76Zm4,124.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h88a4,4,0,0,1,4,4Z"}))]]),o=t.forwardRef((e,n)=>t.createElement(r.default,{ref:n,...e,weights:i}));o.displayName="FolderSimpleIcon",e.s(["FolderSimpleIcon",0,o],235209)},885961,e=>{"use strict";var t=e.i(648863),r=e.i(960831),n=e.i(294788),a=e.i(391398);let i={type:"configurator",component:function(e){return(0,a.jsx)(n.Input,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:r.inputOnlyControls};var o=e.i(931882);let l={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{component:"button",pointer:!0,children:"Button input"}),(0,a.jsxs)(n.Input,{component:"select",rightSection:(0,a.jsx)(o.CaretDownIcon,{size:14}),pointer:!0,mt:"md",children:[(0,a.jsx)("option",{value:"1",children:"1"}),(0,a.jsx)("option",{value:"2",children:"2"})]})]})},code:`
import { Input } from '@mantine/core';
import { CaretDownIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<CaretDownIcon size={14} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`};var s=e.i(191788),c=e.i(123895);let u={type:"code",component:function(){let[e,t]=(0,s.useState)("Clear me");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{placeholder:"Your email",leftSection:(0,a.jsx)(c.AtIcon,{size:16})}),(0,a.jsx)(n.Input,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:e?(0,a.jsx)(n.Input.ClearButton,{"aria-label":"Clear input",onClick:()=>t("")}):null})]})},maxWidth:340,centered:!0,code:`
import { useState } from 'react';
import { Input } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<AtIcon size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          value ? (
            <Input.ClearButton
              aria-label="Clear input"
              onClick={() => setValue('')}
            />
          ) : null
        }
      />
    </>
  );
}
`},d={type:"configurator",component:function(e){return(0,a.jsx)(n.Input.Wrapper,{...e,children:(0,a.jsx)(n.Input,{placeholder:"Input inside Input.Wrapper"})})},code:`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,centered:!0,maxWidth:440,controls:r.inputWrapperOnlyControls};var m=e.i(841209),h=e.i(431868);let p={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,s.useState)(!1);return(0,a.jsx)(m.TextInput,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,a.jsx)(h.Tooltip,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`},f={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.TextInput,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),(0,a.jsx)(m.TextInput,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`};var g=e.i(586488);let v={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.InputBase,{label:"Your phone",component:"input",placeholder:"Your phone"}),(0,a.jsxs)(g.InputBase,{label:"Custom native select",component:"select",mt:"md",children:[(0,a.jsx)("option",{value:"react",children:"React"}),(0,a.jsx)("option",{value:"react",children:"Angular"}),(0,a.jsx)("option",{value:"svelte",children:"Svelte"})]})]})},maxWidth:340,centered:!0,code:`
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <>
      <InputBase label="Your phone" component="input" placeholder="Your phone" />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`},y={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input.Label,{required:!0,children:"Input label"}),(0,a.jsx)(n.Input.Description,{children:"Input description"}),(0,a.jsx)(n.Input.Error,{children:"Input error"})]})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`},b={type:"code",component:function(){return(0,a.jsx)(n.Input,{component:"button",pointer:!0,children:(0,a.jsx)(n.Input.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var x=e.i(951254),S=e.i(856171),k=e.i(530514);let w=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,M=(0,k.createTheme)({components:{Input:n.Input.extend({defaultProps:{variant:"filled"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),A={type:"code",component:function(){return(0,a.jsxs)(x.MantineThemeProvider,{theme:M,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:w};var j=e.i(613529);let I=`
import { TextInput, NumberInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        withAsterisk: true,
      },
    }),

    NumberInput: NumberInput.extend({
      defaultProps: {
        size: 'lg',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Inherits size and radius from Input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />

      <NumberInput mt="md" label="Number input" placeholder="Overrides shared size with lg" />
    </MantineProvider>
  );
}
`,D=(0,k.createTheme)({components:{Input:n.Input.extend({defaultProps:{size:"md",radius:"md"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{withAsterisk:!0}}),NumberInput:j.NumberInput.extend({defaultProps:{size:"lg"}})}}),C={type:"code",component:function(){return(0,a.jsxs)(x.MantineThemeProvider,{theme:D,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Inherits size and radius from Input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(j.NumberInput,{mt:"md",label:"Number input",placeholder:"Overrides shared size with lg"})]})},centered:!0,maxWidth:340,code:I},T=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
`,E=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,P=(0,k.createTheme)({components:{Input:n.Input.extend({classNames:{input:"m_8ca6a3cb"}}),InputWrapper:n.Input.Wrapper.extend({classNames:{label:"m_8ccacaf5"}})}}),R={type:"code",component:function(){return(0,a.jsxs)(x.MantineThemeProvider,{theme:P,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:E,language:"scss"}]};var V={input:"m_4ba3a790"};let _={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{placeholder:"Regular Input component",classNames:V}),(0,a.jsx)(m.TextInput,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:V})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
.input {
  transition: none;

  &:focus-within {
    outline: 2px solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`,language:"tsx"}]};var O=e.i(579668);let F=`
import { Input } from '@mantine/core';

function Demo() {
  const at = <AtIcon size={16} />;
  const chevron = <CaretDownIcon size={16} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,z={type:"styles-api",data:O.InputStylesApi,component:function(e){return(0,a.jsx)(n.Input,{placeholder:"Input component",leftSection:(0,a.jsx)(c.AtIcon,{size:16}),rightSection:(0,a.jsx)(o.CaretDownIcon,{size:16}),...e})},code:F,centered:!0,maxWidth:340},B=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,H={type:"styles-api",data:O.InputWrapperStylesApi,component:function(e){return(0,a.jsx)(n.Input.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,a.jsx)(n.Input,{placeholder:"Input"})})},code:B,centered:!0,maxWidth:340};var N=e.i(171481);let W=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"}))]]),L=s.forwardRef((e,t)=>s.createElement(N.default,{ref:t,...e,weights:W}));L.displayName="WarningCircleIcon";let Y={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.TextInput,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,a.jsx)(m.TextInput,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,a.jsx)(m.TextInput,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,a.jsx)(L,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
import { WarningCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <WarningCircleIcon
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0},Z={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.TextInput,{placeholder:"Success as boolean",label:"Success as boolean",success:!0}),(0,a.jsx)(m.TextInput,{mt:"md",placeholder:"Success as react node",label:"Success as react node",success:"Username is available"})]})},code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}
`,maxWidth:340,centered:!0},U={type:"configurator",component:function(e){let[t,r]=(0,s.useState)("clearable");return(0,a.jsx)(n.Input,{placeholder:"Clearable input",value:t,onChange:e=>r(e.currentTarget.value),rightSection:""!==t?(0,a.jsx)(n.Input.ClearButton,{onClick:()=>r("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${e.size}"
    />
  );
}
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]},$={type:"code",component:function(){return(0,a.jsx)(n.Input,{placeholder:"Your email",loading:!0})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input placeholder="Your email" loading />;
}
`,centered:!0,maxWidth:340};var G=(0,t.__exportAll)({clearButton:()=>U,component:()=>l,compound:()=>y,defaultProps:()=>A,error:()=>Y,focusStyles:()=>_,inputBase:()=>v,inputContainer:()=>p,inputWrapperOrder:()=>f,loading:()=>$,placeholder:()=>b,sections:()=>u,sharedDefaultProps:()=>C,sharedStyles:()=>R,stylesApi:()=>z,success:()=>Z,usage:()=>i,wrapper:()=>d,wrapperStylesApi:()=>H});e.s(["InputDemos",0,G],885961)},143918,e=>{"use strict";var t=e.i(648863),r=e.i(960831),n=e.i(647114),a=e.i(391398);let i={type:"configurator",component:function(e){return(0,a.jsx)(n.MaskInput,{...e,mask:"(999) 999-9999",placeholder:"(___) ___-____"})},code:`
import { MaskInput } from '@mantine/core';


function Demo() {
  return (
    <MaskInput
      {{props}}
      mask="(999) 999-9999"
      placeholder="(___) ___-____"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r.inputControls},o={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Credit card"
      placeholder="____ ____ ____ ____"
      mask="9999 9999 9999 9999"
      modify={(value) => {
        if (/^3[47]/.test(value)) {
          return { mask: '9999 999999 99999' };
        }
        return undefined;
      }}
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Credit card",placeholder:"____ ____ ____ ____",mask:"9999 9999 9999 9999",modify:e=>{if(/^3[47]/.test(e))return{mask:"9999 999999 99999"}}})},centered:!0,maxWidth:340},l={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Hex color"
      placeholder="#______"
      mask="#hhhhhh"
      tokens={{ h: /[0-9a-fA-F]/ }}
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Hex color",placeholder:"#______",mask:"#hhhhhh",tokens:{h:/[0-9a-fA-F]/}})},centered:!0,maxWidth:340},s={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Time (HH:MM)"
      placeholder="__:__"
      mask={[/[0-2]/, /\\\\d/, ':', /[0-5]/, /\\\\d/]}
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Time (HH:MM)",placeholder:"__:__",mask:[/[0-2]/,/\d/,":",/[0-5]/,/\d/]})},centered:!0,maxWidth:340};var c=e.i(883364);let u={type:"code",code:`
import { MaskInput, Text } from '@mantine/core';
import { formatMask, isMaskComplete } from '@mantine/hooks';

function Demo() {
  return (
    <>
      <MaskInput
        label="Promo code"
        placeholder="AAA-9999"
        mask="AAA-9999"
        transform={(char) => char.toUpperCase()}
        slotChar="XXX-0000"
      />
      <Text size="sm" mt="sm" c="dimmed">
        Type lowercase letters – they will be auto-uppercased
      </Text>
    </>
  );
}
`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.MaskInput,{label:"Promo code",placeholder:"AAA-9999",mask:"AAA-9999",transform:e=>e.toUpperCase(),slotChar:"XXX-0000"}),(0,a.jsx)(c.Text,{size:"sm",mt:"sm",c:"dimmed",children:"Type lowercase letters – they will be auto-uppercased"})]})},centered:!0,maxWidth:340},d={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      disabled
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",disabled:!0})},centered:!0,maxWidth:340},m={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      error="Invalid phone number"
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",error:"Invalid phone number"})},centered:!0,maxWidth:340},h={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      success="Looks good!"
    />
  );
}
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",success:"Looks good!"})},centered:!0,maxWidth:340};var p=e.i(191788),f=e.i(485108),g=e.i(725695);let v={type:"code",component:function(){let e=(0,p.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",resetRef:e}),(0,a.jsx)(g.Group,{mt:"md",children:(0,a.jsx)(f.Button,{onClick:()=>e.current?.(),children:"Reset"})})]})},code:`
import { useRef } from 'react';
import { MaskInput, Button, Group } from '@mantine/core';

function Demo() {
  const resetRef = useRef<() => void>(null);

  return (
    <>
      <MaskInput
        label="Phone number"
        placeholder="(___) ___-____"
        mask="(999) 999-9999"
        resetRef={resetRef}
      />

      <Group mt="md">
        <Button onClick={() => resetRef.current?.()}>Reset</Button>
      </Group>
    </>
  );
}
`,maxWidth:340,centered:!0};var y=e.i(582498);let b={type:"code",component:function(){let e=(0,y.useForm)({mode:"uncontrolled",initialValues:{phone:""}});return(0,a.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,a.jsx)(n.MaskInput,{mask:"(999) 999-9999",placeholder:"(___) ___-____",label:"Phone",onChangeRaw:t=>e.setFieldValue("phone",t,{forceUpdate:!1})}),(0,a.jsx)(f.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, MaskInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '' },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MaskInput
        mask="(999) 999-9999"
        placeholder="(___) ___-____"
        label="Phone"
        onChangeRaw={(raw) => form.setFieldValue('phone', raw, { forceUpdate: false })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0};var x=(0,t.__exportAll)({customTokens:()=>l,disabled:()=>d,dynamic:()=>o,error:()=>m,regex:()=>s,resetRef:()=>v,success:()=>h,transform:()=>u,usage:()=>i,withUseForm:()=>b});e.s(["MaskInputDemos",0,x],143918)},851567,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(288034);let a={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`},i={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{withSeconds:!0,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`},o={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{dropdownType:"modal",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},l={type:"configurator",component:function(e){return(0,r.jsx)(n.DateTimePicker,{...e,placeholder:"Input placeholder"})},code:`
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:400,controls:e.i(960831).inputControls};var s=e.i(494834);let c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{clearable:!0,defaultValue:(0,s.default)().format("YYYY-MM-DD"),label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`};var u=e.i(931882),d=e.i(671640);let m={type:"code",component:function(){return(0,r.jsxs)(d.Stack,{children:[(0,r.jsx)(n.DateTimePicker,{label:"clearSectionMode='both' (default)",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,r.jsx)(u.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,r.jsx)(n.DateTimePicker,{label:"clearSectionMode='rightSection'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,r.jsx)(u.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,r.jsx)(n.DateTimePicker,{label:"clearSectionMode='clear'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,r.jsx)(u.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateTimePicker
        label="clearSectionMode='both' (default)"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DateTimePicker
        label="clearSectionMode='rightSection'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DateTimePicker
        label="clearSectionMode='clear'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},h={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{valueFormat:"DD MMM YYYY hh:mm A",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},p={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{valueFormat:e=>(0,s.default)(e).format("dddd, MMMM D [at] h:mm A"),defaultValue:"2024-04-11 14:45:00",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},f={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Disabled",placeholder:"Pick date and time",disabled:!0})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`},g={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",timePickerProps:{withDropdown:!0,popoverProps:{withinPortal:!1},format:"12h"}})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
`},v={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",presets:[{value:(0,s.default)().subtract(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Yesterday"},{value:(0,s.default)().format("YYYY-MM-DD HH:mm:ss"),label:"Today"},{value:(0,s.default)().add(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Tomorrow"},{value:(0,s.default)().add(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Next month"},{value:(0,s.default)().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Next year"},{value:(0,s.default)().subtract(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Last month"},{value:(0,s.default)().subtract(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
        {
          value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
          label: 'Last month',
        },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
      ]}
    />
  );
}
`},y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{type:"range",label:"Pick dates and times range",placeholder:"Pick dates and times range"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      type="range"
      label="Pick dates and times range"
      placeholder="Pick dates and times range"
    />
  );
}
`},b={type:"code",maxWidth:400,centered:!0,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",withNativeLevelSelect:!0})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      withNativeLevelSelect
    />
  );
}
`};var x=(0,t.__exportAll)({clearSectionMode:()=>m,clearable:()=>c,configurator:()=>l,disabled:()=>f,format:()=>h,formatFunction:()=>p,modal:()=>o,nativeLevelSelect:()=>b,presets:()=>v,range:()=>y,timePickerProps:()=>g,usage:()=>a,withSeconds:()=>i});e.s(["DateTimePickerDemos",0,x],851567)},445475,e=>{"use strict";var t=e.i(648863),r=e.i(996969),n=e.i(391398);let a={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},o={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`,maxWidth:340,centered:!0},l={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,maxWidth:340,centered:!0},c={type:"configurator",component:function(e){return(0,n.jsx)(r.MultiSelect,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withAlignedLabels",initialValue:!1,libraryValue:!1},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},u={type:"configurator",component:function(e){return(0,n.jsx)(r.MultiSelect,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},d={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,maxWidth:340,centered:!0},m={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},h={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,n.jsx)(r.MultiSelect,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`},p={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Multi Select",placeholder:"Multi Select",data:["React","Angular","Vue","Svelte"],success:"Looks good!"})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect label="Multi Select" placeholder="Multi Select" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`,maxWidth:340,centered:!0},f={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},g=`
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,v=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),y={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:v,searchable:!0})},code:g,maxWidth:340,centered:!0},b={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,maxWidth:340,centered:!0},x=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,S=Array(100).fill(0).map((e,t)=>`Option ${t}`),k={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"With scroll area (default)",placeholder:"Pick value",data:S,maxDropdownHeight:200}),(0,n.jsx)(r.MultiSelect,{label:"With native scroll",placeholder:"Pick value",data:S,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:x,maxWidth:340,centered:!0},w=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},M={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:w,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},A=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},j={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:A,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0};var I=e.i(123895),D=e.i(726869);let C=`
import { AtIcon } from '@phosphor-icons/react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<AtIcon size={18} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`,T={type:"styles-api",data:D.MultiSelectStylesApi,component:function(e){return(0,n.jsx)(r.MultiSelect,{...e,dropdownOpened:!0,leftSection:(0,n.jsx)(I.AtIcon,{size:18}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:C,centered:!0,maxWidth:340},E={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
`,maxWidth:340,centered:!0};var P=e.i(931882),R=e.i(671640);let V={type:"code",component:function(){return(0,n.jsxs)(R.Stack,{children:[(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='both' (default)",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='rightSection'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='clear'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { MultiSelect, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <MultiSelect
        label="clearSectionMode='both' (default)"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MultiSelect
        label="clearSectionMode='rightSection'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MultiSelect
        label="clearSectionMode='clear'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0};var _=e.i(293907);let O={type:"code",component:function(){let e=(0,n.jsx)(_.SquaresFourIcon,{size:16});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,n.jsx)(r.MultiSelect,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
`};var F=e.i(485108),z=e.i(541772);let B={type:"code",component:function(){let[e,{toggle:t}]=(0,z.useDisclosure)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F.Button,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,n.jsx)(r.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},H={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},N={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,n.jsx)(r.MultiSelect,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},L={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var Y=e.i(392862);let Z={type:"code",code:`
import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,n.jsxs)(Y.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(Y.Popover.Target,{children:(0,n.jsx)(F.Button,{children:"Toggle popover"})}),(0,n.jsx)(Y.Popover.Dropdown,{children:(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var U={dropdown:"m_a9824888",input:"m_f5487eb3"};let $={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:U,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`,language:"scss"}],maxWidth:340,centered:!0};var G=e.i(141806),K=e.i(725695),X=e.i(883364);let J={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},q=({option:e})=>(0,n.jsxs)(K.Group,{gap:"sm",children:[(0,n.jsx)(G.Avatar,{src:J[e.value].image,size:36,radius:"xl"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(X.Text,{size:"sm",children:e.value}),(0,n.jsx)(X.Text,{size:"xs",opacity:.5,children:J[e.value].email})]})]}),Q={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:q,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
      hidePickedOptions
      searchable
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1};var ee=e.i(122057);let et=`
import { MultiSelect, Pill, Avatar } from '@mantine/core';

const users = [
  { value: 'Emily Johnson', label: 'Emily Johnson', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png' },
  { value: 'Ava Rodriguez', label: 'Ava Rodriguez', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png' },
  { value: 'Olivia Chen', label: 'Olivia Chen', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png' },
  { value: 'Ethan Barnes', label: 'Ethan Barnes', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' },
  { value: 'Mason Taylor', label: 'Mason Taylor', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png' },
];

const usersMap = new Map(users.map((user) => [user.value.toString(), user]));

function Demo() {
  return (
    <MultiSelect
      data={users}
      label="Candidates"
      placeholder="Select candidates"
      defaultValue={['Emily Johnson', 'Ava Rodriguez']}
      renderPill={({ option, onRemove }) => {
        const user = usersMap.get(option?.value.toString());
        return (
          <Pill withRemoveButton onRemove={onRemove}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={user?.image} size={16} />
              {option?.label}
            </div>
          </Pill>
        );
      }}
    />
  );
}
`,er=[{value:"Emily Johnson",label:"Emily Johnson",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"},{value:"Ava Rodriguez",label:"Ava Rodriguez",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"},{value:"Olivia Chen",label:"Olivia Chen",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"},{value:"Ethan Barnes",label:"Ethan Barnes",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"},{value:"Mason Taylor",label:"Mason Taylor",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}],en=new Map(er.map(e=>[e.value.toString(),e])),ea={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{data:er,label:"Candidates",placeholder:"Select candidates",defaultValue:["Emily Johnson","Ava Rodriguez"],renderPill:({option:e,onRemove:t})=>(0,n.jsx)(ee.Pill,{withRemoveButton:!0,onRemove:t,style:{paddingInlineStart:2},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,n.jsx)(G.Avatar,{src:en.get(e?.value.toString())?.image,size:16}),e?.label]})})})},code:et,centered:!0,maxWidth:400};var ei=e.i(191788);let eo={type:"code",component:function(){let[e,t]=(0,ei.useState)(["React","Angular","Vue"]);return(0,n.jsx)(r.MultiSelect,{label:"Drag pills to reorder",description:"Selected values can be reordered by dragging pills",placeholder:"Pick value",data:["React","Angular","Vue","Svelte","Solid","Ember"],value:e,onChange:t,withPillsReorder:!0})},code:`
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(['React', 'Angular', 'Vue']);

  return (
    <MultiSelect
      label="Drag pills to reorder"
      description="Selected values can be reordered by dragging pills"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Ember']}
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}
`,maxWidth:340,centered:!0},el={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var es=e.i(280130);let ec=({options:e,search:t})=>t.trim()?new es.default(e,{keys:["label"],threshold:.3,minMatchCharLength:1}).search(t).map(e=>e.item):e,eu={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States","Germany","France"],filter:ec,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';
import Fuse from 'fuse.js';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  if (!search.trim()) {
    return options;
  }

  const fuse = new Fuse(options as ComboboxItem[], {
    keys: ['label'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  return fuse.search(search).map((result) => result.item);
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States', 'Germany', 'France']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},ed={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],loading:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`,centered:!0,maxWidth:340},em=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="Fits viewport height"
      placeholder="Pick values"
      data={data}
      floatingHeight="viewport"
    />
  );
}
`,eh=Array(100).fill(0).map((e,t)=>`Option ${t}`),ep={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Fits viewport height",placeholder:"Pick values",data:eh,floatingHeight:"viewport"})},code:em,maxWidth:340,centered:!0};var ef=(0,t.__exportAll)({checkIcon:()=>c,clearSectionMode:()=>V,clearable:()=>E,configurator:()=>u,disabled:()=>d,disabledOptions:()=>m,dragReorder:()=>eo,dropdownAnimation:()=>N,dropdownOffset:()=>$,dropdownOpened:()=>B,dropdownPadding:()=>W,dropdownPosition:()=>H,dropdownShadow:()=>L,dropdownWidth:()=>el,error:()=>h,floatingHeight:()=>ep,fuzzySearch:()=>eu,groups:()=>f,hidePickedOptions:()=>l,limit:()=>y,loading:()=>ed,maxValues:()=>o,nothingFound:()=>s,readOnly:()=>b,renderOption:()=>Q,renderPill:()=>ea,scrollArea:()=>k,search:()=>M,searchable:()=>i,sections:()=>O,sort:()=>j,stylesApi:()=>T,success:()=>p,usage:()=>a,withinPopover:()=>Z});e.s(["MultiSelectDemos",0,ef],445475)},496141,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(563141);let a={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker />;
}
`},i={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{type:"range"})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
`},o={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{withSeconds:!0})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker withSeconds />;
}
`};var l=e.i(191788);let s={type:"code",centered:!0,maxWidth:280,component:function(){let[e,t]=(0,l.useState)([null,null]);return(0,r.jsx)(n.InlineDateTimePicker,{type:"range",value:e,onChange:t})},code:`
import { useState } from 'react';
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);

  return (
    <InlineDateTimePicker
      type="range"
      value={value}
      onChange={setValue}
    />
  );
}
`},c={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{type:"range",valueFormat:"MMMM YYYY, DD HH:mm"})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" valueFormat="MMMM YYYY, DD HH:mm" />;
}
`};var u=(0,t.__exportAll)({format:()=>c,range:()=>i,rangeControlled:()=>s,usage:()=>a,withSeconds:()=>o});e.s(["InlineDateTimePickerDemos",0,u],496141)},226379,e=>{"use strict";var t=e.i(648863),r=e.i(191788),n=e.i(301388),a=e.i(725695),i=e.i(883364),o=e.i(391398),l=e.i(618875);let s={type:"code",code:`
import { useRef, useState } from 'react';
import { Code, Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag((state) => {
    if (state.first) {
      startPosRef.current = { ...posRef.current };
    }
    const newPos = {
      x: startPosRef.current.x + state.movement[0],
      y: startPosRef.current.y + state.movement[1],
    };
    posRef.current = newPos;
    setPos(newPos);
  });

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 200,
            height: 120,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            transform: \`translate(\${pos.x}px, \${pos.y}px)\`,
            cursor: active ? 'grabbing' : 'grab',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Drag me
        </div>
      </Group>
      <Text ta="center" mt="sm" size="sm">
        Position: <Code>{\`{ x: \${Math.round(pos.x)}, y: \${Math.round(pos.y)} }\`}</Code>
      </Text>
    </>
  );
}
`,component:function(){let e=(0,r.useRef)({x:0,y:0}),t=(0,r.useRef)({x:0,y:0}),[s,c]=(0,r.useState)({x:0,y:0}),{ref:u,active:d}=(0,l.useDrag)(r=>{r.first&&(t.current={...e.current});let n={x:t.current.x+r.movement[0],y:t.current.y+r.movement[1]};e.current=n,c(n)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Group,{justify:"center",children:(0,o.jsx)("div",{ref:u,style:{width:200,height:120,backgroundColor:d?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translate(${s.x}px, ${s.y}px)`,cursor:d?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Drag me"})}),(0,o.jsxs)(i.Text,{ta:"center",mt:"sm",size:"sm",children:["Position: ",(0,o.jsx)(n.Code,{children:`{ x: ${Math.round(s.x)}, y: ${Math.round(s.y)} }`})]})]})}},c={type:"code",code:`
import { useRef, useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const xPosRef = useRef(0);
  const xStartRef = useRef(0);
  const [xPos, setXPos] = useState(0);

  const yPosRef = useRef(0);
  const yStartRef = useRef(0);
  const [yPos, setYPos] = useState(0);

  const { ref: xRef, active: xActive } = useDrag(
    (state) => {
      if (state.first) {
        xStartRef.current = xPosRef.current;
      }
      const x = xStartRef.current + state.movement[0];
      xPosRef.current = x;
      setXPos(x);
    },
    { axis: 'x' }
  );

  const { ref: yRef, active: yActive } = useDrag(
    (state) => {
      if (state.first) {
        yStartRef.current = yPosRef.current;
      }
      const y = yStartRef.current + state.movement[1];
      yPosRef.current = y;
      setYPos(y);
    },
    { axis: 'y' }
  );

  return (
    <>
      <Group justify="center" gap="xl">
        <div>
          <div
            ref={xRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: xActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: \`translateX(\${xPos}px)\`,
              cursor: xActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            X only
          </div>
          <Text ta="center" mt="xs" size="sm">x: {Math.round(xPos)}</Text>
        </div>
        <div>
          <div
            ref={yRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: yActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: \`translateY(\${yPos}px)\`,
              cursor: yActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            Y only
          </div>
          <Text ta="center" mt="xs" size="sm">y: {Math.round(yPos)}</Text>
        </div>
      </Group>
    </>
  );
}
`,component:function(){let e=(0,r.useRef)(0),t=(0,r.useRef)(0),[n,s]=(0,r.useState)(0),c=(0,r.useRef)(0),u=(0,r.useRef)(0),[d,m]=(0,r.useState)(0),{ref:h,active:p}=(0,l.useDrag)(r=>{r.first&&(t.current=e.current);let n=t.current+r.movement[0];e.current=n,s(n)},{axis:"x"}),{ref:f,active:g}=(0,l.useDrag)(e=>{e.first&&(u.current=c.current);let t=u.current+e.movement[1];c.current=t,m(t)},{axis:"y"});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Group,{justify:"center",gap:"xl",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{ref:h,style:{width:80,height:80,backgroundColor:p?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateX(${n}px)`,cursor:p?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"X only"}),(0,o.jsxs)(i.Text,{ta:"center",mt:"xs",size:"sm",children:["x: ",Math.round(n)]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{ref:f,style:{width:80,height:80,backgroundColor:g?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateY(${d}px)`,cursor:g?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Y only"}),(0,o.jsxs)(i.Text,{ta:"center",mt:"xs",size:"sm",children:["y: ",Math.round(d)]})]})]})})}};var u=e.i(485108),d=e.i(470743);function m({notification:e,onDismiss:t}){let[n,a]=(0,r.useState)(0),[i,s]=(0,r.useState)(!1),{ref:c,active:u}=(0,l.useDrag)(r=>{r.last?Math.abs(r.movement[0])>120||r.velocity[0]>.5?(s(!0),setTimeout(()=>t(e.id),300)):a(0):a(r.movement[0])},{axis:"x",threshold:5,filterTaps:!0});return(0,o.jsx)(d.Paper,{ref:c,p:"sm",mb:"xs",radius:"md",withBorder:!0,style:{transform:i?`translateX(${n>0?400:-400}px)`:`translateX(${n}px)`,opacity:i?0:1-.6*Math.min(Math.abs(n)/200,1),transition:u?"none":"transform 300ms ease, opacity 300ms ease",cursor:u?"grabbing":"grab",touchAction:"pan-y",userSelect:"none"},children:e.text})}let h=[{id:1,text:"New message from Alice"},{id:2,text:"Build succeeded"},{id:3,text:"Deployment complete"},{id:4,text:"Review requested"}],p={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss =
          Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  return (
    <Paper
      ref={ref}
      p="sm"
      mb="xs"
      withBorder
      radius="md"
      style={{
        transform: dismissed
          ? \`translateX(\${offset > 0 ? 400 : -400}px)\`
          : \`translateX(\${offset}px)\`,
        opacity: dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </Paper>
  );
}

const initialItems: NotificationItem[] = [
  { id: 1, text: 'New message from Alice' },
  { id: 2, text: 'Build succeeded' },
  { id: 3, text: 'Deployment complete' },
  { id: 4, text: 'Review requested' },
];

function Demo() {
  const [notifications, setNotifications] = useState(initialItems);

  return (
    <div style={{ height: 300 }}>
      {notifications.map((n) => (
        <SwipeNotification
          key={n.id}
          notification={n}
          onDismiss={(id) =>
            setNotifications((items) => items.filter((item) => item.id !== id))
          }
        />
      ))}

      {notifications.length === 0 && (
        <Text ta="center" c="dimmed" py="md">All cleared!</Text>
      )}

      <Group justify="center" mt="md">
        <Button onClick={() => setNotifications(initialItems)}>
          Reset
        </Button>
      </Group>
    </div>
  );
}
`,component:function(){let[e,t]=(0,r.useState)(h);return(0,o.jsxs)("div",{style:{height:300},children:[e.map(e=>(0,o.jsx)(m,{notification:e,onDismiss:e=>t(t=>t.filter(t=>t.id!==e))},e.id)),0===e.length&&(0,o.jsx)(i.Text,{ta:"center",c:"dimmed",py:"md",children:"All cleared!"}),(0,o.jsx)(a.Group,{justify:"center",mt:"md",children:(0,o.jsx)(u.Button,{onClick:()=>t(h),children:"Reset"})})]})},centered:!0,maxWidth:400},f={type:"code",code:`
import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-default-border)',
          padding: 'var(--mantine-spacing-md)',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 80,
              marginRight: 12,
              backgroundColor: \`hsl(\${i * 18}, 60%, 70%)\`,
              borderRadius: 'var(--mantine-radius-sm)',
              fontWeight: 600,
              verticalAlign: 'top',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag horizontally to scroll
      </Text>
    </>
  );
}
`,component:function(){let e=(0,r.useRef)(null),{ref:t,active:n}=(0,l.useDrag)(t=>{e.current&&(e.current.scrollLeft-=t.delta[0])},{axis:"x",filterTaps:!0,threshold:5});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:r=>{e.current=r,t(r)},style:{overflow:"hidden",whiteSpace:"nowrap",cursor:n?"grabbing":"grab",touchAction:"pan-y",userSelect:"none",borderRadius:"var(--mantine-radius-md)",border:"1px solid var(--mantine-color-default-border)",padding:"var(--mantine-spacing-md)"},children:Array.from({length:20},(e,t)=>(0,o.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:120,height:80,marginRight:12,backgroundColor:`hsl(${18*t}, 60%, 70%)`,borderRadius:"var(--mantine-radius-sm)",fontWeight:600,verticalAlign:"top",color:"var(--mantine-color-black)"},children:["Card ",t+1]},t))}),(0,o.jsx)(i.Text,{ta:"center",mt:"sm",size:"sm",c:"dimmed",children:"Drag horizontally to scroll"})]})}};var g=e.i(257177),v=e.i(284629);let y={type:"code",code:`
import { useState } from 'react';
import { Badge, Group, Text, UnstyledButton } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <>
      <Group justify="center">
        <UnstyledButton
          ref={ref}
          style={{
            width: 200,
            height: 80,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            cursor: active ? 'grabbing' : 'pointer',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Click or drag me
        </UnstyledButton>
      </Group>

      <Group justify="center" mt="md" gap="lg">
        <Text size="sm">
          Taps: <Badge>{taps}</Badge>
        </Text>
        <Text size="sm">
          Drags: <Badge color="teal">{drags}</Badge>
        </Text>
      </Group>
    </>
  );
}
`,component:function(){let[e,t]=(0,r.useState)(0),[n,s]=(0,r.useState)(0),{ref:c,active:u}=(0,l.useDrag)(e=>{e.last&&(e.tap?t(e=>e+1):s(e=>e+1))},{filterTaps:!0,threshold:5});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Group,{justify:"center",children:(0,o.jsx)(v.UnstyledButton,{ref:c,style:{width:200,height:80,backgroundColor:u?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",cursor:u?"grabbing":"pointer",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Click or drag me"})}),(0,o.jsxs)(a.Group,{justify:"center",mt:"md",gap:"lg",children:[(0,o.jsxs)(i.Text,{size:"sm",children:["Taps: ",(0,o.jsx)(g.Badge,{children:e})]}),(0,o.jsxs)(i.Text,{size:"sm",children:["Drags: ",(0,o.jsx)(g.Badge,{color:"teal",children:n})]})]})]})}};var b=(0,t.__exportAll)({axis:()=>c,filterTaps:()=>y,scroll:()=>f,swipe:()=>p,usage:()=>s});e.s(["UseDragDemos",0,b],226379)},896265,e=>{"use strict";var t=e.i(648863),r=e.i(191788),n=e.i(485108),a=e.i(725695),i=e.i(481178),o=e.i(44091),l=e.i(391466),s=e.i(275519),c=e.i(232471);let u=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:20});function d({value:e,decimalScale:t,fixedDecimalScale:r}){let n=function(e,t){if(!Number.isFinite(e))return"0";if(void 0!==t)return new Intl.NumberFormat("en-US",{useGrouping:!1,minimumFractionDigits:t,maximumFractionDigits:t}).format(e);let r=String(e);return r.includes("e")||r.includes("E")?u.format(e):r}(Math.abs(e),t);if(!r&&void 0!==t){let e=n.split(".");if(e[1]){let t=e[1].replace(/0+$/,"");n=t?`${e[0]}.${t}`:e[0]}}let a=n.indexOf("."),i=a>=0?n.slice(0,a):n,o=a>=0?n.slice(a+1):"",l=!/[1-9]/.test(n);return{negative:e<0&&!l,intDigits:i.split(""),fracDigits:o?o.split(""):[],hasDecimal:a>=0}}var m=e.i(391398);let h=["0","1","2","3","4","5","6","7","8","9","0","1"];function p({digit:e,getStyles:t,previousDigit:r,empty:n,valueDirection:a}){let i=parseInt(e,10),o=null!==r?parseInt(r,10):i,l=t("digit"),s=t("digitColumn");return(0,m.jsx)("span",{...l,"data-empty":n||void 0,"aria-hidden":"true",children:(0,m.jsx)("span",{...s,style:{...s.style,transform:`translateY(${-i}em)`,"--rn-roll-from":`translateY(${-o}em)`,"--rn-roll-to":`translateY(${-("up"===a&&null!==r&&i<o&&i<=1?i+10:i)}em)`},"data-direction":i>=o?"up":"down",children:h.map((e,t)=>(0,m.jsx)("span",{children:e},t))},e)})}function f(e,t){return[...Array(t-e.length).fill(null),...e]}function g(e,t){return[...e,...Array(t-e.length).fill(null)]}var v={root:"m_47dd3981",digit:"m_b301d46e",digitColumn:"m_8ae40964","mantine-rolling-number-roll":"m_18d73873",char:"m_47d64bf5"};let y={animationDuration:600,timingFunction:"ease",decimalSeparator:".",tabularNumbers:!0},b=(0,i.createVarsResolver)((e,{animationDuration:t,timingFunction:r})=>({root:{"--rn-duration":`${t}ms`,"--rn-timing-function":r}})),x=(0,s.factory)(e=>{let t=(0,o.useProps)("RollingNumber",y,e),{classNames:n,className:a,style:i,styles:s,unstyled:u,vars:h,value:x,prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:M,decimalScale:A,fixedDecimalScale:j,animationDuration:I,timingFunction:D,tabularNumbers:C,withLiveRegion:T,mod:E,attributes:P,...R}=t,V=(0,l.useStyles)({name:"RollingNumber",classes:v,props:t,className:a,style:i,classNames:n,styles:s,unstyled:u,attributes:P,vars:h,varsResolver:b}),_=(0,r.useRef)(x),O=_.current;(0,r.useEffect)(()=>{_.current=x});let F=x>=O?"up":"down",z=function({current:e,previous:t,prefix:r,suffix:n,decimalSeparator:a=".",thousandSeparator:i}){let o=Math.max(e.intDigits.length,t.intDigits.length),l=Math.max(e.fracDigits.length,t.fracDigits.length),s=f(e.intDigits,o),c=f(t.intDigits,o),u=g(e.fracDigits,l),d=g(t.fracDigits,l),m=i?"string"==typeof i?i:",":null,h=[];if(r)for(let e=0;e<r.length;e++)h.push({type:"char",key:`prefix-${e}`,char:r[e],empty:!1});(e.negative||t.negative)&&h.push({type:"char",key:"sign",char:"-",empty:!e.negative});for(let e=0;e<o;e++){let t=o-1-e,r=s[e],n=c[e],a=null===r;h.push({type:"digit",key:`int-${t}`,digit:r??"0",previousDigit:n,empty:a}),m&&t>0&&t%3==0&&h.push({type:"char",key:`sep-${t}`,char:m,empty:a})}(e.hasDecimal||t.hasDecimal)&&h.push({type:"char",key:"dec",char:a,empty:!e.hasDecimal});for(let e=0;e<l;e++){let t=u[e],r=d[e],n=null===t;h.push({type:"digit",key:`frac-${e}`,digit:t??"0",previousDigit:r,empty:n})}if(n)for(let e=0;e<n.length;e++)h.push({type:"char",key:`suffix-${e}`,char:n[e],empty:!1});return h}({current:d({value:x,decimalScale:A,fixedDecimalScale:j}),previous:d({value:O,decimalScale:A,fixedDecimalScale:j}),prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:M}),B=function({value:e,prefix:t,suffix:r,decimalSeparator:n=".",thousandSeparator:a,decimalScale:i,fixedDecimalScale:o}){let l=d({value:e,decimalScale:i,fixedDecimalScale:o}),s=l.intDigits.join("");a&&(s=s.replace(/\B(?=(\d{3})+(?!\d))/g,"string"==typeof a?a:","));let c=l.negative?`-${s}`:s;return l.fracDigits.length>0&&(c+=`${n}${l.fracDigits.join("")}`),`${t||""}${c}${r||""}`}({value:x,prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:M,decimalScale:A,fixedDecimalScale:j});return(0,m.jsx)(c.Box,{...V("root"),mod:[{"tabular-numbers":C},E],role:T?"status":"img","aria-label":B,...R,children:z.map(e=>"digit"===e.type?(0,m.jsx)(p,{digit:e.digit,previousDigit:e.previousDigit,getStyles:V,empty:e.empty,valueDirection:F},e.key):(0,m.jsx)("span",{...V("char"),"data-empty":e.empty||void 0,"aria-hidden":"true",children:e.char},e.key))})});x.classes=v,x.varsResolver=b,x.displayName="@mantine/core/RollingNumber";let S={type:"code",component:function(){let[e,t]=(0,r.useState)(1234);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{value:e,fz:"36px"}),(0,m.jsxs)(a.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>e+1),children:"Increment"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>e-1),children:"Decrement"}),(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e4*Math.random())),children:"Random"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}
`},k={type:"code",component:function(){let[e,t]=(0,r.useState)(99.99);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{value:e,prefix:"$ ",suffix:" USD",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,fz:"32px"}),(0,m.jsxs)(a.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e+10.5).toFixed(2)),children:"+10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e-10.5).toFixed(2)),children:"-10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(+(1e4*Math.random()).toFixed(2)),children:"Random"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(99.99);

  return (
    <>
      <RollingNumber
        value={value}
        prefix="$ "
        suffix=" USD"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator
        fz="32px"
      />
      <Group mt="md">
        <Button onClick={() => setValue((v) => +(v + 10.5).toFixed(2))}>+10.50</Button>
        <Button onClick={() => setValue((v) => +(v - 10.5).toFixed(2))}>-10.50</Button>
        <Button onClick={() => setValue(+(Math.random() * 10000).toFixed(2))}>Random</Button>
      </Group>
    </>
  );
}
`};var w=e.i(671640),M=e.i(883364);let A={type:"code",component:function(){let[e,t]=(0,r.useState)(500);return(0,m.jsxs)(w.Stack,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(M.Text,{size:"sm",c:"dimmed",children:"200ms"}),(0,m.jsx)(x,{value:e,animationDuration:200,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M.Text,{size:"sm",c:"dimmed",children:"600ms (default)"}),(0,m.jsx)(x,{value:e,animationDuration:600,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(M.Text,{size:"sm",c:"dimmed",children:"1200ms"}),(0,m.jsx)(x,{value:e,animationDuration:1200,fz:"28px"})]}),(0,m.jsx)(a.Group,{children:(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e3*Math.random())),children:"Random"})})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(500);

  return (
    <Stack>
      <div>
        <Text size="sm" c="dimmed">200ms</Text>
        <RollingNumber value={value} animationDuration={200} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">600ms (default)</Text>
        <RollingNumber value={value} animationDuration={600} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">1200ms</Text>
        <RollingNumber value={value} animationDuration={1200} fz="28px" />
      </div>
      <Group>
        <Button onClick={() => setValue(Math.floor(Math.random() * 1000))}>Random</Button>
      </Group>
    </Stack>
  );
}
`};var j=(0,t.__exportAll)({duration:()=>A,prefix:()=>k,usage:()=>S});e.s(["RollingNumberDemos",0,j],896265)},846e3,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(20972);r.sumBy=function(e,t){let r;if(!e||!e.length)return 0;null!=t&&(t=n.iteratee(t));for(let n=0;n<e.length;n++){let a=t?t(e[n]):e[n];void 0!==a&&(void 0===r?r=a:r+=a)}return r}},254972,(e,t,r)=>{t.exports=e.r(846e3).sumBy},99438,e=>{"use strict";var t=e.i(648863);let r={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:62429},{source:2,target:4,value:291741}]},n=`export const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};`,a={nodes:[{name:"Visit",color:"indigo.6"},{name:"Direct-Favourite",color:"teal.6"},{name:"Page-Click",color:"blue.6"},{name:"Detail-Favourite",color:"cyan.6"},{name:"Lost",color:"red.6"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:62429},{source:2,target:4,value:291741}]},i=`export const data = {
  nodes: [
    { name: 'Visit', color: 'indigo.6' },
    { name: 'Direct-Favourite', color: 'teal.6' },
    { name: 'Page-Click', color: 'blue.6' },
    { name: 'Detail-Favourite', color: 'cyan.6' },
    { name: 'Lost', color: 'red.6' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};`;var o=e.i(391398),l=e.i(520916),s={root:"m_b42d2970"},c=e.i(232471),u=e.i(481178),d=e.i(275519),m=e.i(317477),h=e.i(779177),p=e.i(951254),f=e.i(44091),g=e.i(62904),v=e.i(391466),y=e.i(723451),b=e.i(191788),x=e.i(767577),S=e.i(254972),k=e.i(449691),w=e.i(777541),M=e.i(815954),A=e.i(355345),j=e.i(516257),I=e.i(901841),D=e.i(492900),C=e.i(458985),T=e.i(546189),E=e.i(543372),P=e.i(134518),R=e.i(128002),V=e.i(451494),_=e.i(888494),O=e.i(883388),F=e.i(297974),z=e.i(500678),B=e.i(270627),H=e.i(768069),N=e.i(560894),W=["sourceX","sourceY","sourceControlX","targetX","targetY","targetControlX","linkWidth"],L=["className","style","children","id"];function Y(){return(Y=Object.assign.bind()).apply(null,arguments)}function Z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var X=e=>e.y+e.dy/2,J=e=>e&&e.value||0,q=(e,t)=>t.reduce((t,r)=>t+J(e[r]),0),Q=(e,t,r)=>r.reduce((r,n)=>{var a=t[n];if(null==a)return r;var i=e[a.source];return null==i?r:r+X(i)*J(t[n])},0),ee=(e,t,r)=>r.reduce((r,n)=>{var a=t[n];if(null==a)return r;var i=e[a.target];return null==i?r:r+X(i)*J(t[n])},0),et=(e,t)=>e.y-t.y,er=(e,t)=>{for(var r=t.targetNodes,n=0,a=r.length;n<a;n++){var i=r[n];if(null!=i){var o=e[i];if(o){var l=t.depth+1;l>o.depth&&(o.depth=l,er(e,o))}}}},en=function(e,t,r){for(var n=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=0,i=e.length;a<i;a++){var o=e[a];if(null!=o){var l=o.length;n&&o.sort(et);for(var s=0,c=0;c<l;c++){var u=o[c];if(null!=u){var d=s-u.y;d>0&&(u.y+=d),s=u.y+u.dy+r}}s=t+r;for(var m=l-1;m>=0;m--){var h=o[m];if(null!=h){var p=h.y+h.dy+r-s;if(p>0)h.y-=p,s=h.y;else break}}}}},ea=(e,t,r,n)=>{for(var a=0,i=t.length;a<i;a++){var o=t[a];if(null!=o)for(var l=0,s=o.length;l<s;l++){var c=o[l];if(null!=c&&c.sourceLinks.length){var u=q(r,c.sourceLinks),d=Q(e,r,c.sourceLinks),m=0===u?X(c):d/u;c.y+=(m-X(c))*n}}}},ei=(e,t,r,n)=>{for(var a=t.length-1;a>=0;a--){var i=t[a];if(null!=i)for(var o=0,l=i.length;o<l;o++){var s=i[o];if(null!=s&&s.targetLinks.length){var c=q(r,s.targetLinks),u=ee(e,r,s.targetLinks),d=0===c?X(s):u/c;s.y+=(d-X(s))*n}}}},eo=(e,t)=>{for(var r=0,n=e.length;r<n;r++){var a=e[r];if(null!=a){var i=0,o=0;a.targetLinks.sort((r,n)=>{var a,i,o,l,s=null==(a=t[r])?void 0:a.target,c=null==(i=t[n])?void 0:i.target;if(null==s||null==c)return 0;var u=null==(o=e[s])?void 0:o.y,d=null==(l=e[c])?void 0:l.y;return null==u||null==d?0:u-d}),a.sourceLinks.sort((r,n)=>{var a,i,o,l,s=null==(a=t[r])?void 0:a.source,c=null==(i=t[n])?void 0:i.source;if(null==s||null==c)return 0;var u=null==(o=e[s])?void 0:o.y,d=null==(l=e[c])?void 0:l.y;return null==u||null==d?0:u-d});for(var l=0,s=a.targetLinks.length;l<s;l++){var c=a.targetLinks[l];if(null!=c){var u=t[c];u&&(u.sy=i,i+=u.dy)}}for(var d=0,m=a.sourceLinks.length;d<m;d++){var h=a.sourceLinks[d];if(null!=h){var p=t[h];p&&(p.ty=o,o+=p.dy)}}}}},el={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:(e,t,r,n)=>{if(null!=t&&"string"==typeof t&&null!=r&&"object"==typeof r){var a=U(t.split("-"),2),i=a[0],o=a[1],l=(0,k.default)(r,"".concat(i,"s[").concat(o,"]"));if(l){var s=l,c=i,u=n,d=s.payload;if("node"===c)return{payload:d,name:(0,j.getValueByDataKey)(d,u,""),value:(0,j.getValueByDataKey)(d,"value")};if("source"in d&&d.source&&d.target){var m=(0,j.getValueByDataKey)(d.source,u,""),h=(0,j.getValueByDataKey)(d.target,u,"");return{payload:d,name:"".concat(m," - ").concat(h),value:(0,j.getValueByDataKey)(d,"value")}}return}}},eventEmitter:void 0},es=b.memo(e=>{var t=e.dataKey,r=e.nameKey,n=e.stroke,a=e.strokeWidth,i=e.fill,o=e.name,l=e.data,s=e.id,c={dataDefinedOnItem:l,getPosition:B.noop,settings:{stroke:n,strokeWidth:a,fill:i,dataKey:t,name:o,nameKey:r,hide:!1,type:void 0,color:i,unit:"",graphicalItemId:s}};return b.createElement(R.SetTooltipEntrySettings,{tooltipEntrySettings:c})});function ec(e){var t=e.graphicalItemId,r=e.props,n=e.i,a=e.linkContent,i=e.onMouseEnter,o=e.onMouseLeave,l=e.onClick,s=e.dataKey,c="sourceX"in r?{x:(r.sourceX+r.targetX)/2,y:(r.sourceY+r.targetY)/2}:void 0,u="link-".concat(n),d=(0,E.useAppDispatch)();return b.createElement(M.Layer,{onMouseEnter:e=>{d((0,P.setActiveMouseOverItemIndex)({activeIndex:u,activeDataKey:s,activeCoordinate:c,activeGraphicalItemId:t})),i(r,e)},onMouseLeave:e=>{d((0,P.mouseLeaveItem)()),o(r,e)},onClick:e=>{d((0,P.setActiveClickItemIndex)({activeIndex:u,activeDataKey:s,activeCoordinate:c,activeGraphicalItemId:t})),l(r,e)}},function(e,t){if(b.isValidElement(e))return b.cloneElement(e,t);if("function"==typeof e)return e(t);var r=t.sourceX,n=t.sourceY,a=t.sourceControlX,i=t.targetX,o=t.targetY,l=t.targetControlX,s=t.linkWidth,c=Z(t,W);return b.createElement("path",Y({className:"recharts-sankey-link",d:"\n          M".concat(r,",").concat(n,"\n          C").concat(a,",").concat(n," ").concat(l,",").concat(o," ").concat(i,",").concat(o,"\n        "),fill:"none",stroke:"#333",strokeWidth:s,strokeOpacity:"0.2"},(0,O.svgPropertiesNoEvents)(c)))}(a,r))}function eu(e){var t=e.graphicalItemId,r=e.modifiedLinks,n=e.links,a=e.linkContent,i=e.onMouseEnter,o=e.onMouseLeave,l=e.onClick,s=e.dataKey;return b.createElement(M.Layer,{className:"recharts-sankey-links",key:"recharts-sankey-links"},n.map((e,n)=>{var c=r[n];return null==c?null:b.createElement(ec,{graphicalItemId:t,key:"link-".concat(e.source,"-").concat(e.target,"-").concat(e.value),props:c,linkContent:a,i:n,onMouseEnter:i,onMouseLeave:o,onClick:l,dataKey:s})}))}function ed(e){var t=e.graphicalItemId,r=e.props,n=e.nodeContent,a=e.i,i=e.onMouseEnter,o=e.onMouseLeave,l=e.onClick,s=e.dataKey,c=(0,E.useAppDispatch)(),u={x:+r.x+r.width/2,y:+r.y+r.height/2},d="node-".concat(a);return b.createElement(M.Layer,{onMouseEnter:e=>{c((0,P.setActiveMouseOverItemIndex)({activeIndex:d,activeDataKey:s,activeCoordinate:u,activeGraphicalItemId:t})),i(r,e)},onMouseLeave:e=>{c((0,P.mouseLeaveItem)()),o(r,e)},onClick:e=>{c((0,P.setActiveClickItemIndex)({activeIndex:d,activeDataKey:s,activeCoordinate:u,activeGraphicalItemId:t})),l(r,e)}},b.isValidElement(n)?b.cloneElement(n,r):"function"==typeof n?n(r):b.createElement(A.Rectangle,Y({className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8"},(0,O.svgPropertiesNoEvents)(r))))}function em(e){var t=e.graphicalItemId,r=e.modifiedNodes,n=e.nodeContent,a=e.onMouseEnter,i=e.onMouseLeave,o=e.onClick,l=e.dataKey;return b.createElement(M.Layer,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},r.map((e,r)=>b.createElement(ed,{graphicalItemId:t,key:"node-".concat(e.index,"-").concat(e.x,"-").concat(e.y),props:e,nodeContent:n,i:r,onMouseEnter:a,onMouseLeave:i,onClick:o,dataKey:l})))}var eh=K({align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify"},N.initialEventSettingsState);function ep(e){e.className,e.style;var t=e.children,r=e.id,n=Z(e,L),a=e.link,i=e.dataKey,o=e.node,l=e.onMouseEnter,s=e.onMouseLeave,c=e.onClick,u=e.data,d=e.iterations,m=e.nodeWidth,h=e.nodePadding,p=e.sort,f=e.linkCurvature,g=e.margin,v=e.verticalAlign,y=e.align,k=(0,O.svgPropertiesNoEvents)(n),M=(0,I.useChartWidth)(),A=(0,I.useChartHeight)(),j=(0,b.useMemo)(()=>{if(!u||!M||!A||M<=0||A<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};var e,t,r,n,i=(e=>{var t=e.data,r=e.width,n=e.height,a=e.iterations,i=e.nodeWidth,o=e.nodePadding,l=e.sort,s=e.verticalAlign,c=e.align,u=t.links,d=((e,t,r,n)=>{for(var a,i,o=e.nodes,l=e.links,s=o.map((e,t)=>{var r=((e,t)=>{for(var r=[],n=[],a=[],i=[],o=0,l=e.length;o<l;o++){var s=e[o];(null==s?void 0:s.source)===t&&(a.push(s.target),i.push(o)),(null==s?void 0:s.target)===t&&(r.push(s.source),n.push(o))}return{sourceNodes:r,sourceLinks:n,targetLinks:i,targetNodes:a}})(l,t);return K(K(K({},e),r),{},{value:Math.max(q(l,r.sourceLinks),q(l,r.targetLinks)),depth:0})}),c=0,u=s.length;c<u;c++){var d=s[c];null==d||d.sourceNodes.length||er(s,d)}var m=null!=(a=null==(i=(0,x.default)(s,e=>e.depth))?void 0:i.depth)?a:0;if(m>=1)for(var h=(t-r)/m,p=0,f=s.length;p<f;p++){var g=s[p];null!=g&&(g.targetNodes.length||"justify"!==n||(g.depth=m),g.x=g.depth*h,g.dx=r)}return{tree:s,maxDepth:m}})(t,r,i,c).tree,m=(e=>{for(var t=[],r=0,n=e.length;r<n;r++){var a,i=e[r];null!=i&&(t[i.depth]||(t[i.depth]=[]),null==(a=t[i.depth])||a.push(i))}return t})(d),h=((e,t,r,n,a)=>{var i=Math.min(...e.map(e=>{var n=(0,S.default)(e,J);return 0===n?1/0:(t-(e.length-1)*r)/n}));i===1/0&&(i=0);for(var o=0,l=e.length;o<l;o++){var s=e[o];if(null!=s)if("top"===a)for(var c=0,u=0,d=s.length;u<d;u++){var m=s[u];null!=m&&(m.dy=m.value*i,m.y=c,c+=m.dy+r)}else for(var h=0,p=s.length;h<p;h++){var f=s[h];null!=f&&(f.y=h,f.dy=f.value*i)}}return n.map(e=>K(K({},e),{},{dy:J(e)*i}))})(m,n,o,u,s);if(en(m,n,o,l),"justify"===s)for(var p=1,f=1;f<=a;f++)ei(d,m,h,p*=.99),en(m,n,o,l),ea(d,m,h,p),en(m,n,o,l);return eo(d,h),((e,t,r,n,a)=>{for(var i=new Map,o=0;o<t.length;o++){var l=t[o];if(null!=l)for(var s of l)i.set(s,o)}for(var c=function(o){var l=t[o];if(null==l||0===l.length)return 0;var s=null==l[0]?void 0:l[0].x+l[0].dx/2;if(null==s)return 0;var c=r.flatMap(t=>{var r,n,a,l,c,u,d,m,h=e[t.source],p=e[t.target];if(null==h||null==p)return[];var f=i.get(h),g=i.get(p);return null==f||null==g||o<=Math.min(f,g)||o>=Math.max(f,g)?[]:[{y:(a=h.x+h.dx,c=Math.min(Math.max((l=p.x)===a?0:(s-a)/(l-a),0),1),u=h.y+(null!=(r=t.sy)?r:0)+t.dy/2,d=p.y+(null!=(n=t.ty)?n:0)+t.dy/2,(m=1-c)**3*u+3*m**2*c*u+3*m*c**2*d+c**3*d-t.dy/2),dy:t.dy,fixed:!0}]}).filter(e=>l.some(t=>t.y>=e.y&&t.y+t.dy<=e.y+e.dy));if(0===c.length)return 0;var u=e=>e.fixed?e.y:e.node.y,d=e=>e.fixed?e.dy:e.node.dy,m=[...l.map(e=>({node:e,fixed:!1})),...c].sort((e,t)=>u(e)-u(t)),h=0;for(var p of m){if(p.fixed){h=Math.max(h,p.y+p.dy+a);continue}p.node.y<h&&(p.node.y=h),h=p.node.y+p.node.dy+a}m=m.sort((e,t)=>u(e)-u(t));for(var f=n+a,g=m.length-1;g>=0;g--){var v=m[g];if(null!=v){if(v.fixed){f=Math.min(f,v.y-a);continue}var y=v.node.y+d(v)+a-f;y>0&&(v.node.y-=y),f=v.node.y}}},u=0;u<t.length;u++)if(0===c(u))continue})(d,m,h,n,o),eo(d,h),{nodes:d,links:h}})({data:u,width:M-(null!=(e=g.left)?e:0)-(null!=(t=g.right)?t:0),height:A-(null!=(r=g.top)?r:0)-(null!=(n=g.bottom)?n:0),iterations:d,nodeWidth:m,nodePadding:h,sort:p,verticalAlign:v,align:y}),l=g.top||0,s=g.left||0,c=i.links.map((e,t)=>(e=>{var t=e.link,r=e.nodes,n=e.left,a=e.top,i=e.i,o=e.linkContent,l=e.linkCurvature,s=t.sy,c=t.ty,u=t.dy,d=r[t.source],m=r[t.target];if(null!=d&&null!=m){var h,p,f=d.x+d.dx+n,g=m.x+n,v=(p=g-(h=+f),e=>h+p*e),y=v(l),b=v(1-l);return K({sourceX:f,targetX:g,sourceY:d.y+s+u/2+a,targetY:m.y+c+u/2+a,sourceControlX:y,targetControlX:b,sourceRelativeY:s,targetRelativeY:c,linkWidth:u,index:i,payload:K(K({},t),{},{source:d,target:m})},(0,O.svgPropertiesNoEventsFromUnknown)(o))}})({link:e,nodes:i.nodes,i:t,top:l,left:s,linkContent:a,linkCurvature:f})).filter(B.isNotNil),b=i.nodes.map((e,t)=>{var r,n,a,i,c,u,d,m,h,p;return n=(r={node:e,nodeContent:o,i:t,top:l,left:s}).node,a=r.nodeContent,i=r.top,c=r.left,u=r.i,d=n.x,m=n.y,h=n.dx,p=n.dy,K(K({},(0,O.svgPropertiesNoEventsFromUnknown)(a)),{},{x:d+c,y:m+i,width:h,height:p,index:u,payload:n})});return{nodes:i.nodes,links:i.links,modifiedLinks:c,modifiedNodes:b}},[u,M,A,g,d,m,h,p,a,o,f,y,v]),D=j.links,C=j.modifiedLinks,T=j.modifiedNodes,E=(0,b.useCallback)((e,t,r)=>{l&&l(e,t,r)},[l]),P=(0,b.useCallback)((e,t,r)=>{s&&s(e,t,r)},[s]),R=(0,b.useCallback)((e,t,r)=>{c&&c(e,t,r)},[c]);return(0,z.isPositiveNumber)(M)&&(0,z.isPositiveNumber)(A)&&u&&u.links&&u.nodes?b.createElement(b.Fragment,null,b.createElement(_.SetComputedData,{computedData:{links:C,nodes:T}}),b.createElement(w.Surface,Y({},k,{width:M,height:A}),t,b.createElement(eu,{graphicalItemId:r,links:D,modifiedLinks:C,linkContent:a,dataKey:i,onMouseEnter:(e,t)=>E(e,"link",t),onMouseLeave:(e,t)=>P(e,"link",t),onClick:(e,t)=>R(e,"link",t)}),b.createElement(em,{graphicalItemId:r,modifiedNodes:T,nodeContent:o,dataKey:i,onMouseEnter:(e,t)=>E(e,"node",t),onMouseLeave:(e,t)=>P(e,"node",t),onClick:(e,t)=>R(e,"node",t)}))):null}function ef(e){var t=(0,F.resolveDefaultProps)(e,eh),r=t.width,n=t.height,a=t.style,i=t.className,o=t.id,l=t.throttleDelay,s=t.throttledEvents,c=U((0,b.useState)(null),2),u=c[0],d=c[1];return b.createElement(T.RechartsStoreProvider,{preloadedState:{options:el},reduxStoreName:null!=i?i:"Sankey"},b.createElement(I.ReportChartSize,{width:r,height:n}),b.createElement(I.ReportChartMargin,{margin:t.margin}),b.createElement(V.ReportEventSettings,{throttleDelay:l,throttledEvents:s}),b.createElement(C.RechartsWrapper,{className:i,style:a,width:r,height:n,responsive:!1,ref:e=>{e&&!u&&d(e)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},b.createElement(D.TooltipPortalContext.Provider,{value:u},b.createElement(H.RegisterGraphicalItemId,{id:o,type:"sankey"},e=>b.createElement(b.Fragment,null,b.createElement(es,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:e}),b.createElement(ep,Y({},t,{id:e})))))))}ef.displayName="Sankey";var eg=e.i(694713);let ev={height:300,nodeWidth:10,nodePadding:10,linkCurvature:.5,iterations:32,linkOpacity:.4,withTooltip:!0,tooltipAnimationDuration:0},ey=(0,u.createVarsResolver)((e,{nodeColor:t,linkColor:r,textColor:n,height:a})=>({root:{"--chart-node-color":t?(0,m.getThemeColor)(t,e):void 0,"--chart-link-color":r?(0,m.getThemeColor)(r,e):void 0,"--chart-text-color":n?(0,m.getThemeColor)(n,e):void 0,"--chart-height":(0,h.rem)(a)}})),eb=["var(--mantine-color-blue-filled)","var(--mantine-color-cyan-filled)","var(--mantine-color-teal-filled)","var(--mantine-color-green-filled)","var(--mantine-color-lime-filled)","var(--mantine-color-yellow-filled)","var(--mantine-color-orange-filled)","var(--mantine-color-red-filled)","var(--mantine-color-pink-filled)","var(--mantine-color-grape-filled)","var(--mantine-color-violet-filled)","var(--mantine-color-indigo-filled)"];function ex({x:e,y:t,width:r,height:n,index:a,payload:i,resolvedNodeColors:l,resolvedDefaultColors:s,valueFormatter:c}){let u=l[a]||`var(--chart-node-color, ${s[a%s.length]})`,d=!i.targetNodes||0===i.targetNodes.length,m=d?e-6:e+r+6,h=d?"end":"start",p=c?c(i.value):i.value;return(0,o.jsxs)("g",{children:[(0,o.jsx)("rect",{x:e,y:t,width:r,height:n,fill:u,stroke:"none"}),n>=28?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("text",{x:m,y:t+n/2-7,textAnchor:h,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",children:i.name}),(0,o.jsx)("text",{x:m,y:t+n/2+7,textAnchor:h,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",opacity:.8,children:p})]}):(0,o.jsxs)("text",{x:m,y:t+n/2,textAnchor:h,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",children:[i.name," ",(0,o.jsx)("tspan",{opacity:.8,children:p})]})]})}function eS({sourceX:e,targetX:t,sourceY:r,targetY:n,sourceControlX:a,targetControlX:i,linkWidth:l,sourceResolvedColor:s,linkOpacity:c}){return(0,o.jsx)("path",{d:`
        M${e},${r+l/2}
        C${a},${r+l/2}
          ${i},${n+l/2}
          ${t},${n+l/2}
        L${t},${n-l/2}
        C${i},${n-l/2}
          ${a},${r-l/2}
          ${e},${r-l/2}
        Z
      `,fill:s||"var(--chart-link-color, var(--mantine-color-gray-4))",opacity:c,stroke:"none"})}let ek=(0,d.factory)(e=>{let t=(0,f.useProps)("SankeyChart",ev,e),{classNames:r,className:n,style:a,styles:i,unstyled:u,vars:d,data:h,height:b,nodeWidth:x,nodePadding:S,linkCurvature:k,iterations:w,nodeColor:M,colors:A,linkColor:j,linkOpacity:I,textColor:D,withTooltip:C,tooltipAnimationDuration:T,tooltipProps:E,sankeyProps:P,valueFormatter:R,children:V,attributes:_,...O}=t,F=(0,p.useMantineTheme)(),z={};h.nodes.forEach((e,t)=>{e.color&&(z[t]=(0,m.getThemeColor)(e.color,F))});let B=A?A.map(e=>(0,m.getThemeColor)(e,F)):eb,H=(0,v.useStyles)({name:"SankeyChart",classes:s,props:t,className:n,style:a,classNames:r,styles:i,unstyled:u,attributes:_,vars:d,varsResolver:ey}),{resolvedClassNames:N,resolvedStyles:W}=(0,g.useResolvedStylesApi)({classNames:r,styles:i,props:t});return(0,o.jsx)(c.Box,{...H("root"),...O,children:(0,o.jsx)(y.ResponsiveContainer,{height:b,children:(0,o.jsxs)(ef,{data:h,nodeWidth:x,nodePadding:S,linkCurvature:k,iterations:w,node:e=>(0,o.jsx)(ex,{...e,resolvedNodeColors:z,resolvedDefaultColors:B,valueFormatter:R}),link:e=>{let t=e.index>=0&&e.index<h.links.length?h.links[e.index].source:-1;return(0,o.jsx)(eS,{...e,sourceResolvedColor:z[t],linkOpacity:I})},...P,children:[C&&(0,o.jsx)(eg.Tooltip,{animationDuration:T,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(l.ChartTooltip,{payload:e?.map(e=>({name:e.name,value:e.value,color:(e=>{let t=h.nodes.findIndex(t=>t.name===e.name);if(-1!==t)return z[t]||B[t%B.length];let r=e.payload?.payload?.source??e.payload?.source;if(r){let e=h.nodes.findIndex(e=>e.name===r.name);if(-1!==e)return z[e]||B[e%B.length]}return"var(--mantine-color-blue-6)"})(e)}))||[],classNames:N,styles:W,type:"radial",valueFormatter:R,attributes:_}),...E}),V]})})})});ek.displayName="@mantine/charts/SankeyChart",ek.classes=s,ek.varsResolver=ey;let ew={type:"code",component:function(){return(0,o.jsx)(ek,{data:a,linkOpacity:.2})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} linkOpacity={0.2} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},eM={type:"code",component:function(){return(0,o.jsx)(ek,{data:r,colors:["indigo.6","cyan.6","teal.6","orange.6","red.6"]})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <SankeyChart
      data={data}
      colors={['indigo.6', 'cyan.6', 'teal.6', 'orange.6', 'red.6']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},eA={type:"code",component:function(){return(0,o.jsx)(ek,{data:a,linkOpacity:.2})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} linkOpacity={0.2} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},ej={type:"code",component:function(){return(0,o.jsx)(ek,{data:r,nodeWidth:20,nodePadding:20})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} nodeWidth={20} nodePadding={20} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},eI={type:"code",component:function(){return(0,o.jsx)(ek,{data:r,withTooltip:!1})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},eD={type:"code",component:function(){return(0,o.jsx)(ek,{data:r})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var eC=(0,t.__exportAll)({color:()=>ew,colors:()=>eM,linkOpacity:()=>eA,noTooltip:()=>eI,nodeWidth:()=>ej,usage:()=>eD});e.s(["SankeyChartDemos",0,eC],99438)},81644,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(851567),a=e.i(496141),i=e.i(885961),o=e.i(143918),l=e.i(445475),s=e.i(124260),c=e.i(896265),u=e.i(99438),d=e.i(720271),m=e.i(557446),h=e.i(226379),p=e.i(500120);e.i(603441);var f=e.i(62558);e.i(457450);var g=e.i(418026);let v=(0,f.Layout)(g.MDX_DATA.Changelog920);function y(e){let f={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:g,SponsorButton:v}=f;return g||b("Demo",!0),v||b("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(f.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(f.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(v,{}),"\n",(0,t.jsx)(f.h2,{id:"treeselect-component",children:"TreeSelect component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/tree-select",children:"TreeSelect"})," component allows picking one or more values from hierarchical tree data.\nIt supports three selection modes: single, multiple, and checkbox (with parent-child cascade):"]}),"\n",(0,t.jsx)(g,{data:m.TreeSelectDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"tree-select-combobox-examples",children:"Tree select Combobox examples"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCombobox",children:"Combobox examples"})," showing how to build tree select components\nfrom Combobox primitives with connecting lines, expand/collapse chevrons, and proper indentation:"]}),"\n",(0,t.jsxs)(f.ul,{children:["\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCombobox",children:"Tree select"})," – basic single-value tree select"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeMultiSelectCombobox",children:"Tree multi select"})," – multi select with checkbox cascade"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectSearchable",children:"Searchable tree select"})," – tree select with search filtering"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCheckbox",children:"Tree select with checkboxes"})," – single select with expand-on-click"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectVirtualized",children:"Virtualized tree select"})," – large tree (~500 nodes) with @tanstack/react-virtual"]}),"\n"]}),"\n",(0,t.jsx)(f.h2,{id:"notifications-swipe-dismissal",children:"Notifications swipe dismissal"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/x/notifications",children:"@mantine/notifications"})," now supports dismissing notifications by dragging them\nleft or right, and with horizontal scroll swipe while hovered. Both interactions can be disabled\non ",(0,t.jsx)(f.code,{children:"Notifications"}),", and individual items can opt out with ",(0,t.jsx)(f.code,{children:"allowClose: false"}),"."]}),"\n",(0,t.jsx)(g,{data:s.NotificationsDemos.base}),"\n",(0,t.jsx)(f.h2,{id:"use-drag-hook",children:"use-drag hook"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/hooks/use-drag",children:"use-drag"})," hook handles pointer drag gestures with movement tracking,\nvelocity, direction and axis constraints. It uses the Pointer Events API and works with\nboth mouse and touch input:"]}),"\n",(0,t.jsx)(g,{data:h.UseDragDemos.swipe}),"\n",(0,t.jsx)(f.h2,{id:"inlinedatetimepicker-component",children:"InlineDateTimePicker component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/dates/inline-date-time-picker",children:"InlineDateTimePicker"})," component renders a calendar\nwith a time picker inline, without a dropdown. It supports both default and range modes:"]}),"\n",(0,t.jsx)(g,{data:a.InlineDateTimePickerDemos.usage}),"\n",(0,t.jsxs)(f.p,{children:["Set ",(0,t.jsx)(f.code,{children:'type="range"'})," to select a date and time range with two time inputs:"]}),"\n",(0,t.jsx)(g,{data:a.InlineDateTimePickerDemos.range}),"\n",(0,t.jsx)(f.h2,{id:"datetimepicker-range-support",children:"DateTimePicker range support"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," now supports ",(0,t.jsx)(f.code,{children:'type="range"'})," to select\na date and time range. In range mode, two time inputs are displayed in the dropdown\nfor start and end times:"]}),"\n",(0,t.jsx)(g,{data:n.DateTimePickerDemos.range}),"\n",(0,t.jsx)(f.h2,{id:"datetimepicker-valueformat-function",children:"DateTimePicker valueFormat function"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," ",(0,t.jsx)(f.code,{children:"valueFormat"})," prop now accepts a function in addition\nto a dayjs format string. The callback receives the value as a ",(0,t.jsx)(f.code,{children:"YYYY-MM-DD HH:mm:ss"})," string and\nreturns the formatted value, which is useful for cases that cannot be expressed with a dayjs\nformat string:"]}),"\n",(0,t.jsx)(g,{data:n.DateTimePickerDemos.formatFunction}),"\n",(0,t.jsx)(f.h2,{id:"rollingnumber-component",children:"RollingNumber component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/rolling-number",children:"RollingNumber"})," component animates value changes with rolling digit\ntransitions. Each digit independently rolls to its new position when the value changes:"]}),"\n",(0,t.jsx)(g,{data:c.RollingNumberDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"maskinput-improvements",children:"MaskInput improvements"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/mask-input",children:"MaskInput"})," now supports a ",(0,t.jsx)(f.code,{children:"resetRef"})," prop that assigns a function that\nclears the input value imperatively. This is useful because ",(0,t.jsx)(f.code,{children:"MaskInput"})," is uncontrolled\ninternally, so setting ",(0,t.jsx)(f.code,{children:"value"})," from a parent does not clear it:"]}),"\n",(0,t.jsx)(g,{data:o.MaskInputDemos.resetRef}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.code,{children:"MaskInput"})," integration with ",(0,t.jsx)(f.a,{href:"/form/use-form",children:"use-form"})," is now documented. Use ",(0,t.jsx)(f.code,{children:"defaultValue"}),"\nto seed the initial value and ",(0,t.jsx)(f.code,{children:"onChangeRaw"})," to write the raw value to form state:"]}),"\n",(0,t.jsx)(g,{data:o.MaskInputDemos.withUseForm}),"\n",(0,t.jsx)(f.h2,{id:"sankeychart-component",children:"SankeyChart component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/charts/sankey-chart",children:"SankeyChart"})," component visualizes flow between nodes as a Sankey diagram\nwhere the width of each link is proportional to the flow value:"]}),"\n",(0,t.jsx)(g,{data:u.SankeyChartDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"reorder-pills-in-multiselect-and-tagsinput",children:"Reorder pills in MultiSelect and TagsInput"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(f.a,{href:"/core/tags-input",children:"TagsInput"})," now support reordering\nselected pills. Set the new ",(0,t.jsx)(f.code,{children:"withPillsReorder"})," prop to enable it. Pills can be reordered with\na mouse (drag-and-drop) or keyboard:"]}),"\n",(0,t.jsxs)(f.ul,{children:["\n",(0,t.jsxs)(f.li,{children:["Pills are not part of the ",(0,t.jsx)(f.code,{children:"Tab"})," order. ",(0,t.jsx)(f.code,{children:"ArrowLeft"})," from the input (caret at start) moves\nfocus to the last pill."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.code,{children:"ArrowLeft"})," and ",(0,t.jsx)(f.code,{children:"ArrowRight"})," navigate between pills (RTL-aware). ",(0,t.jsx)(f.code,{children:"ArrowRight"})," on the last\npill returns focus to the input."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.code,{children:"Alt + ArrowLeft"})," and ",(0,t.jsx)(f.code,{children:"Alt + ArrowRight"})," reorder the focused pill (RTL-aware). Focus follows\nthe moved pill so chained moves work."]}),"\n"]}),"\n",(0,t.jsxs)(f.p,{children:["Reordering is automatically disabled when ",(0,t.jsx)(f.code,{children:"disabled"})," or ",(0,t.jsx)(f.code,{children:"readOnly"})," is set. Custom pill renderers\nreceive a ",(0,t.jsx)(f.code,{children:"reorderProps"})," payload that can be spread onto the pill element to keep reordering\nworking:"]}),"\n",(0,t.jsx)(g,{data:l.MultiSelectDemos.dragReorder}),"\n",(0,t.jsx)(f.h2,{id:"restrict-tree-drop-targets",children:"Restrict Tree drop targets"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," component now supports restricting drop targets with the new ",(0,t.jsx)(f.code,{children:"allowDrop"})," prop.\nThe callback receives ",(0,t.jsx)(f.code,{children:"{ draggedNode, targetNode, position }"})," and returning ",(0,t.jsx)(f.code,{children:"false"})," hides the drop\nindicator and rejects the drop, so users get proper visual feedback before releasing:"]}),"\n",(0,t.jsx)(g,{data:d.TreeDemos.dragDropAllow}),"\n",(0,t.jsx)(f.h2,{id:"tree-drag-handle",children:"Tree drag handle"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," component now supports restricting drag initiation to a dedicated handle with\nthe new ",(0,t.jsx)(f.code,{children:"withDragHandle"})," prop. The handle spreads ",(0,t.jsx)(f.code,{children:"dragHandleProps"})," from the ",(0,t.jsx)(f.code,{children:"renderNode"})," payload.\nThis is useful when a node contains interactive controls (inputs, buttons) that would otherwise\ninterfere with dragging:"]}),"\n",(0,t.jsx)(g,{data:d.TreeDemos.dragDropHandle}),"\n",(0,t.jsx)(f.h2,{id:"shared-default-props-for-all-inputs",children:"Shared default props for all inputs"}),"\n",(0,t.jsxs)(f.p,{children:["Default props set on ",(0,t.jsx)(f.code,{children:"Input"})," and ",(0,t.jsx)(f.code,{children:"Input.Wrapper"})," in ",(0,t.jsx)(f.code,{children:"theme.components"})," now cascade to every\ncomponent built on top of them (",(0,t.jsx)(f.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,t.jsx)(f.a,{href:"/core/textarea/",children:"Textarea"}),",\n",(0,t.jsx)(f.a,{href:"/core/number-input/",children:"NumberInput"}),", ",(0,t.jsx)(f.a,{href:"/core/select/",children:"Select"}),", ",(0,t.jsx)(f.a,{href:"/dates/date-input/",children:"DateInput"}),",\nand others). This makes it possible to apply shared ",(0,t.jsx)(f.code,{children:"size"}),", ",(0,t.jsx)(f.code,{children:"radius"}),", ",(0,t.jsx)(f.code,{children:"variant"}),", ",(0,t.jsx)(f.code,{children:"withAsterisk"}),"\nand other props to all inputs at once, while still overriding individual components with their\nown default props:"]}),"\n",(0,t.jsx)(g,{data:i.InputDemos.sharedDefaultProps}),"\n",(0,t.jsx)(f.h2,{id:"per-day-business-hours-in-weekview",children:"Per-day business hours in WeekView"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/schedule/week-view",children:"WeekView"})," ",(0,t.jsx)(f.code,{children:"businessHours"})," prop now accepts a per-day object keyed by day of\nthe week (",(0,t.jsx)(f.code,{children:"0"})," – Sunday, ",(0,t.jsx)(f.code,{children:"6"})," – Saturday) in addition to the shared ",(0,t.jsx)(f.code,{children:"[start, end]"})," tuple. Days\nmissing from the object or set to ",(0,t.jsx)(f.code,{children:"null"})," are rendered as fully outside business hours, making it\neasy to model partial workdays and non-working days:"]}),"\n",(0,t.jsx)(g,{data:p.WeekViewDemos.businessHoursPerDay})]})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(v,{...e,children:(0,t.jsx)(y,{...e})})}])},299384,(e,t,r)=>{let n="/changelog/9-2-0";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(81644)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
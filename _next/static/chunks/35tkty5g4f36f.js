(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var a in e)t(n,a,{get:e[a],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(317477),a=e.i(44091),o=e.i(391466),i=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let u=(0,r.createVarsResolver)((e,{radius:r,color:a,gradient:o,variant:i,size:l,autoContrast:s,circle:c})=>{let u=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:o,variant:i||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===r?void 0:(0,t.getRadius)(r),"--badge-bg":a||i?u.background:void 0,"--badge-color":a||i?u.color:void 0,"--badge-bd":a||i?u.border:void 0,"--badge-dot-color":"dot"===i?(0,n.getThemeColor)(a,e):void 0}}}),d=(0,i.polymorphicFactory)(e=>{let t=(0,a.useProps)("Badge",null,e),{classNames:r,className:n,style:i,styles:d,unstyled:m,vars:p,radius:h,color:f,gradient:g,leftSection:v,rightSection:y,children:x,variant:b,fullWidth:S,autoContrast:k,circle:w,mod:j,attributes:D,...M}=t,I=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:n,style:i,classNames:r,styles:d,unstyled:m,attributes:D,vars:p,varsResolver:u});return(0,c.jsxs)(l.Box,{variant:b,mod:[{block:S,circle:w,"with-right-section":!!y,"with-left-section":!!v},j],...I("root",{variant:b}),...M,children:[v&&(0,c.jsx)("span",{...I("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...I("label"),children:x}),y&&(0,c.jsx)("span",{...I("section"),"data-position":"right",children:y})]})});d.classes=s,d.varsResolver=u,d.displayName="@mantine/core/Badge",e.s(["Badge",0,d],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},123895,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="AtIcon",e.s(["AtIcon",0,a],123895)},888494,e=>{"use strict";var t=e.i(191788),r=e.i(395598),n=e.i(543372),a=e.i(662688);e.s(["ChartDataContextProvider",0,e=>{var{chartData:o}=e,i=(0,n.useAppDispatch)(),l=(0,a.useIsPanorama)();return(0,t.useEffect)(()=>l?()=>{}:(i((0,r.setChartData)(o)),()=>{i((0,r.setChartData)(void 0))}),[o,i,l]),null},"SetComputedData",0,e=>{var{computedData:a}=e,o=(0,n.useAppDispatch)();return(0,t.useEffect)(()=>(o((0,r.setComputedData)(a)),()=>{o((0,r.setChartData)(void 0))}),[a,o]),null}])},221168,(e,t,r)=>{var n={675:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,o=s(e),i=o[0],l=o[1],c=new a((i+l)*3/4-l),u=0,d=l>0?i-4:i;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,a=n%3,o=[],i=0,l=n-a;i<l;i+=16383)o.push(function(e,t,n){for(var a,o=[],i=t;i<n;i+=3)a=(e[i]<<16&0xff0000)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(r[a>>18&63]+r[a>>12&63]+r[a>>6&63]+r[63&a]);return o.join("")}(e,i,i+16383>l?l:i+16383));return 1===a?o.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===a&&o.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],n=[],a="u">typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,l=o.length;i<l;++i)r[i]=o[i],n[o.charCodeAt(i)]=i;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n[45]=62,n[95]=63},72:function(e,t,r){"use strict";var n=r(675),a=r(783),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function i(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e){var n=e,a=t;if(("string"!=typeof a||""===a)&&(a="utf8"),!l.isEncoding(a))throw TypeError("Unknown encoding: "+a);var o=0|p(n,a),s=i(o),c=s.write(n,a);return c!==o&&(s=s.slice(0,c)),s}if(ArrayBuffer.isView(e))return d(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(A(e,ArrayBuffer)||e&&A(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(A(e,SharedArrayBuffer)||e&&A(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var u=e.valueOf&&e.valueOf();if(null!=u&&u!==e)return l.from(u,t,r);var h=function(e){if(l.isBuffer(e)){var t=0|m(e.length),r=i(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?i(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(h)return h;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),i(e<0?0:0|m(e))}function d(e){for(var t=e.length<0?0:0|m(e.length),r=i(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!l.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(c(e),e<=0)?i(e):void 0!==t?"string"==typeof r?i(e).fill(t,r):i(e).fill(t):i(e)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)};function m(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||A(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return I(e).length;default:if(a)return n?-1:D(e).length;t=(""+t).toLowerCase(),a=!0}}function h(e,t,r){var a,o,i,l=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var a="",o=t;o<r;++o)a+=T[e[o]];return a}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(e[a]);return n}(this,t,r);case"base64":return a=this,o=t,i=r,0===o&&i===a.length?n.fromByteArray(a):n.fromByteArray(a.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),a="",o=0;o<n.length;o+=2)a+=String.fromCharCode(n[o]+256*n[o+1]);return a}(this,t,r);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function f(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,a){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(o=r*=1)!=o&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(a)return -1;else r=e.length-1;else if(r<0)if(!a)return -1;else r=0;if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,a);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(a)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return v(e,[t],r,n,a)}throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,a){var o,i=1,l=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;i=2,l/=2,s/=2,r/=2}function c(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(a){var u=-1;for(o=r;o<l;o++)if(c(e,o)===c(t,-1===u?0:o-u)){if(-1===u&&(u=o),o-u+1===s)return u*i}else -1!==u&&(o-=o-u),u=-1}else for(r+s>l&&(r=l-s),o=r;o>=0;o--){for(var d=!0,m=0;m<s;m++)if(c(e,o+m)!==c(t,m)){d=!1;break}if(d)return o}return -1}l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(A(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),A(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,a=0,o=Math.min(r,n);a<o;++a)if(e[a]!==t[a]){r=e[a],n=t[a];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=l.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var o=e[r];if(A(o,Uint8Array)&&(o=l.from(o)),!l.isBuffer(o))throw TypeError('"list" argument must be an Array of Buffers');o.copy(n,a),a+=o.length}return n},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)f(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)f(this,t,t+3),f(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)f(this,t,t+7),f(this,t+1,t+6),f(this,t+2,t+5),f(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):h.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(l.prototype[o]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,a){if(A(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||r>e.length||n<0||a>this.length)throw RangeError("out of range index");if(n>=a&&t>=r)return 0;if(n>=a)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var o=a-n,i=r-t,s=Math.min(o,i),c=this.slice(n,a),u=e.slice(t,r),d=0;d<s;++d)if(c[d]!==u[d]){o=c[d],i=u[d];break}return o<i?-1:+(i<o)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)};function y(e,t,r){r=Math.min(e.length,r);for(var n=[],a=t;a<r;){var o,i,l,s,c=e[a],u=null,d=c>239?4:c>223?3:c>191?2:1;if(a+d<=r)switch(d){case 1:c<128&&(u=c);break;case 2:(192&(o=e[a+1]))==128&&(s=(31&c)<<6|63&o)>127&&(u=s);break;case 3:o=e[a+1],i=e[a+2],(192&o)==128&&(192&i)==128&&(s=(15&c)<<12|(63&o)<<6|63&i)>2047&&(s<55296||s>57343)&&(u=s);break;case 4:o=e[a+1],i=e[a+2],l=e[a+3],(192&o)==128&&(192&i)==128&&(192&l)==128&&(s=(15&c)<<18|(63&o)<<12|(63&i)<<6|63&l)>65535&&s<1114112&&(u=s)}null===u?(u=65533,d=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),a+=d}var m=n,p=m.length;if(p<=4096)return String.fromCharCode.apply(String,m);for(var h="",f=0;f<p;)h+=String.fromCharCode.apply(String,m.slice(f,f+=4096));return h}function x(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function b(e,t,r,n,a,o){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function S(e,t,r,n,a,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function k(e,t,r,n,o){return t*=1,r>>>=0,o||S(e,t,r,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,r,n,23,4),r+4}function w(e,t,r,n,o){return t*=1,r>>>=0,o||S(e,t,r,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,r,n,52,8),r+8}l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a,o,i,l,s,c,u,d,m=this.length-t;if((void 0===r||r>m)&&(r=m),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;var o=t.length;n>o/2&&(n=o/2);for(var i=0;i<n;++i){var l,s=parseInt(t.substr(2*i,2),16);if((l=s)!=l)break;e[r+i]=s}return i}(this,e,t,r);case"utf8":case"utf-8":return a=t,o=r,P(D(e,this.length-a),this,a,o);case"ascii":return i=t,l=r,P(M(e),this,i,l);case"latin1":case"binary":return function(e,t,r,n){return P(M(t),e,r,n)}(this,e,t,r);case"base64":return s=t,c=r,P(I(e),this,s,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,P(function(e,t){for(var r,n,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,a.push(r%256),a.push(n);return a}(e,this.length-u),this,u,d);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var n=this[e],a=1,o=0;++o<t&&(a*=256);)n+=this[e+o]*a;return n},l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},l.prototype.readUInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var n=this[e],a=1,o=0;++o<t&&(a*=256);)n+=this[e+o]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var n=t,a=1,o=this[e+--n];n>0&&(a*=256);)o+=this[e+--n]*a;return o>=(a*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return(e>>>=0,t||x(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||x(e,4,this.length),a.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||x(e,4,this.length),a.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||x(e,8,this.length),a.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||x(e,8,this.length),a.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;b(this,e,t,r,a,0)}var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;b(this,e,t,r,a,0)}var o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);b(this,e,t,r,a-1,-a)}var o=0,i=1,l=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===l&&0!==this[t+o-1]&&(l=1),this[t+o]=(e/i|0)-l&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);b(this,e,t,r,a-1,-a)}var o=r-1,i=1,l=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===l&&0!==this[t+o+1]&&(l=1),this[t+o]=(e/i|0)-l&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return w(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return w(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var a=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var o=a-1;o>=0;--o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return a},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var a,o=e.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var i=l.isBuffer(e)?e:l.from(e,n),s=i.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=i[a%s]}return this};var j=/[^+/0-9A-Za-z-_]/g;function D(e,t){t=t||1/0;for(var r,n=e.length,a=null,o=[],i=0;i<n;++i){if((r=e.charCodeAt(i))>55295&&r<57344){if(!a){if(r>56319||i+1===n){(t-=3)>-1&&o.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&o.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function M(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function I(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(j,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function P(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length)&&!(a>=e.length);++a)t[a+r]=e[a];return a}function A(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var T=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,a=0;a<16;++a)t[n+a]=e[r]+e[a];return t}()},783:function(e,t){t.read=function(e,t,r,n,a){var o,i,l=8*a-n-1,s=(1<<l)-1,c=s>>1,u=-7,d=r?a-1:0,m=r?-1:1,p=e[t+d];for(d+=m,o=p&(1<<-u)-1,p>>=-u,u+=l;u>0;o=256*o+e[t+d],d+=m,u-=8);for(i=o&(1<<-u)-1,o>>=-u,u+=n;u>0;i=256*i+e[t+d],d+=m,u-=8);if(0===o)o=1-c;else{if(o===s)return i?NaN:1/0*(p?-1:1);i+=Math.pow(2,n),o-=c}return(p?-1:1)*i*Math.pow(2,o-n)},t.write=function(e,t,r,n,a,o){var i,l,s,c=8*o-a-1,u=(1<<c)-1,d=u>>1,m=5960464477539062e-23*(23===a),p=n?0:o-1,h=n?1:-1,f=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),i=u):(i=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-i))<1&&(i--,s*=2),i+d>=1?t+=m/s:t+=m*Math.pow(2,1-d),t*s>=2&&(i++,s/=2),i+d>=u?(l=0,i=u):i+d>=1?(l=(t*s-1)*Math.pow(2,a),i+=d):(l=t*Math.pow(2,d-1)*Math.pow(2,a),i=0));a>=8;e[r+p]=255&l,p+=h,l/=256,a-=8);for(i=i<<a|l,c+=a;c>0;e[r+p]=255&i,p+=h,i/=256,c-=8);e[r+p-h]|=128*f}}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}},i=!0;try{n[e](r,r.exports,o),i=!1}finally{i&&delete a[e]}return r.exports}o.ab="/ROOT/node_modules/next/dist/compiled/buffer/",t.exports=o(72)},133180,e=>{"use strict";e.s(["getSeriesLabels",0,function(e){return e?e.reduce((e,t)=>{let r=t.name.search(/\./);return r>=0?e[t.name.substring(r+1)]=t.label:e[t.name]=t.label,e},{}):{}}])},520916,e=>{"use strict";var t=e.i(133180),r={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"},n=e.i(232471),a=e.i(275519),o=e.i(317477),i=e.i(951254),l=e.i(44091),s=e.i(391466),c=e.i(391398);function u(e,t){let r=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let r=e.name.substring(0,t),n={...e.payload[r]},a=Object.entries(e.payload).reduce((e,t)=>{let[n,a]=t;return n===r?e:{...e,[n]:a}},{});return{...e,name:e.name.substring(t+1),payload:{...a,...n}}}return e});if(null==t)return r;if("number"==typeof t){let e=r[t];return e?[e]:[]}return r.filter(e=>e.name===t)}function d(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let m={type:"area",showColor:!0},p=(0,a.factory)(e=>{let a=(0,l.useProps)("ChartTooltip",m,e),{classNames:p,className:h,style:f,styles:g,unstyled:v,vars:y,payload:x,label:b,unit:S,type:k,segmentId:w,mod:j,series:D,valueFormatter:M,showColor:I,attributes:P,...A}=a,T=(0,i.useMantineTheme)(),C=(0,s.useStyles)({name:"ChartTooltip",classes:r,props:a,className:h,style:f,classNames:p,styles:g,unstyled:v,attributes:P});if(!x)return null;let R=u(x,w),E="scatter"===k?x[0]?.payload?.name:null,_=(0,t.getSeriesLabels)(D),V=b||E,B=R.map((e,t)=>(0,c.jsxs)("div",{"data-type":k,...C("tooltipItem"),children:[(0,c.jsxs)("div",{...C("tooltipItemBody"),children:[I&&(0,c.jsx)("svg",{...C("tooltipItemColor"),children:(0,c.jsx)("circle",{r:6,fill:(0,o.getThemeColor)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,c.jsx)("div",{...C("tooltipItemName"),children:_[e.name]||e.name})]}),(0,c.jsxs)("div",{...C("tooltipItemData"),children:["function"==typeof M?M(d(e,k)):d(e,k),S||e.unit]})]},e?.key??`${e.name}-${t}`));return(0,c.jsxs)(n.Box,{...C("tooltip"),mod:[{type:k},j],...A,children:[V&&(0,c.jsx)("div",{...C("tooltipLabel"),children:V}),(0,c.jsx)("div",{...C("tooltipBody"),children:B})]})});p.displayName="@mantine/charts/ChartTooltip",e.s(["ChartTooltip",0,p,"getFilteredChartTooltipPayload",0,u],520916)},692385,e=>{"use strict";var t=e.i(852361),r=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,a){let{min:o,max:i,step:l=1}={...n,...a},s=Math.abs(l),[c,u]=(0,r.useState)((0,t.clamp)(e,o,i));return[c,{increment:(0,r.useCallback)(()=>u(e=>(0,t.clamp)(e+s,o,i)),[o,i,s]),decrement:(0,r.useCallback)(()=>u(e=>(0,t.clamp)(e-s,o,i)),[o,i,s]),set:(0,r.useCallback)(e=>u((0,t.clamp)(e,o,i)),[o,i]),reset:(0,r.useCallback)(()=>u((0,t.clamp)(e,o,i)),[e,o,i])}]}])},141806,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(44091),a=e.i(391466),o=e.i(956449),i=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),u=e.i(391398);let d=(0,c.createContext)({withinGroup:!1}),m=(0,r.createVarsResolver)((e,{spacing:r})=>({group:{"--ag-spacing":(0,t.getSpacing)(r)}})),p=(0,s.factory)(e=>{let t=(0,n.useProps)("AvatarGroup",null,e),{classNames:r,className:o,style:s,styles:c,unstyled:p,vars:h,spacing:f,attributes:g,...v}=t;return(0,u.jsx)(d,{value:{withinGroup:!0},children:(0,u.jsx)(i.Box,{...(0,a.useStyles)({name:"AvatarGroup",classes:l,props:t,className:o,style:s,classNames:r,styles:c,unstyled:p,attributes:g,vars:h,varsResolver:m,rootSelector:"group"})("group"),...v})})});function h(e){return(0,u.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}p.classes=l,p.varsResolver=m,p.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,r.createVarsResolver)((e,{size:r,radius:n,variant:a,gradient:o,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let u="initials"===i&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e))%t.length]}(s,c):i,d=e.variantColorResolver({color:u||"gray",theme:e,gradient:o,variant:a||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(r,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,t.getRadius)(n),"--avatar-bg":u||a?d.background:void 0,"--avatar-color":u||a?d.color:void 0,"--avatar-bd":u||a?d.border:void 0}}}),v=(0,o.polymorphicFactory)(e=>{let t=(0,n.useProps)("Avatar",null,e),{classNames:r,className:o,style:s,styles:m,unstyled:p,vars:f,src:v,alt:y,radius:x,color:b,gradient:S,imageProps:k,children:w,autoContrast:j,mod:D,name:M,allowedInitialsColors:I,attributes:P,...A}=t,T=(0,c.use)(d),[C,R]=(0,c.useState)(!v),E=(0,a.useStyles)({name:"Avatar",props:t,classes:l,className:o,style:s,classNames:r,styles:m,unstyled:p,attributes:P,vars:f,varsResolver:g});return(0,c.useEffect)(()=>R(!v),[v]),(0,u.jsx)(i.Box,{...E("root"),mod:[{"within-group":T.withinGroup},D],...A,children:C||!v?(0,u.jsx)("span",{...E("placeholder"),title:y,children:w||"string"==typeof M&&function(e,t=2){let r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(M)||(0,u.jsx)(h,{})}):(0,u.jsx)("img",{...k,...E("image"),src:v,alt:y,onError:e=>{R(!0),k?.onError?.(e)}})})});v.classes=l,v.varsResolver=g,v.displayName="@mantine/core/Avatar",v.Group=p,e.s(["Avatar",0,v],141806)},931882,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,a],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},293907,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",opacity:"0.2"}),t.createElement("path",{d:"M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="SquaresFourIcon",e.s(["SquaresFourIcon",0,a],293907)},359250,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.maxBy=function(e,t){if(0===e.length)return;let r=e[0],n=t(r);for(let a=1;a<e.length;a++){let o=e[a],i=t(o);i>n&&(n=i,r=o)}return r}},446106,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(359250),a=e.r(387022),o=e.r(20972);r.maxBy=function(e,t){if(null!=e)return n.maxBy(Array.from(e),o.iteratee(t??a.identity))}},767577,(e,t,r)=>{t.exports=e.r(446106).maxBy},984083,e=>{"use strict";var t=e.i(648863),r=e.i(960831),n=e.i(294788),a=e.i(391398);let o={type:"configurator",component:function(e){return(0,a.jsx)(n.Input,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:r.inputOnlyControls};var i=e.i(931882);let l={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{component:"button",pointer:!0,children:"Button input"}),(0,a.jsxs)(n.Input,{component:"select",rightSection:(0,a.jsx)(i.CaretDownIcon,{size:14}),pointer:!0,mt:"md",children:[(0,a.jsx)("option",{value:"1",children:"1"}),(0,a.jsx)("option",{value:"2",children:"2"})]})]})},code:`
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
`,centered:!0,maxWidth:440,controls:r.inputWrapperOnlyControls};var m=e.i(841209),p=e.i(431868);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,s.useState)(!1);return(0,a.jsx)(m.TextInput,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,a.jsx)(p.Tooltip,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
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
`},x={type:"code",component:function(){return(0,a.jsx)(n.Input,{component:"button",pointer:!0,children:(0,a.jsx)(n.Input.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var b=e.i(951254),S=e.i(856171),k=e.i(530514);let w=`
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
`,j=(0,k.createTheme)({components:{Input:n.Input.extend({defaultProps:{variant:"filled"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),D={type:"code",component:function(){return(0,a.jsxs)(b.MantineThemeProvider,{theme:j,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:w};var M=e.i(613529);let I=`
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
`,P=(0,k.createTheme)({components:{Input:n.Input.extend({defaultProps:{size:"md",radius:"md"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{withAsterisk:!0}}),NumberInput:M.NumberInput.extend({defaultProps:{size:"lg"}})}}),A={type:"code",component:function(){return(0,a.jsxs)(b.MantineThemeProvider,{theme:P,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Inherits size and radius from Input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(M.NumberInput,{mt:"md",label:"Number input",placeholder:"Overrides shared size with lg"})]})},centered:!0,maxWidth:340,code:I},T=`
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
`,C=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,R=(0,k.createTheme)({components:{Input:n.Input.extend({classNames:{input:"m_8ca6a3cb"}}),InputWrapper:n.Input.Wrapper.extend({classNames:{label:"m_8ccacaf5"}})}}),E={type:"code",component:function(){return(0,a.jsxs)(b.MantineThemeProvider,{theme:R,children:[(0,a.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input"}),(0,a.jsx)(S.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:C,language:"scss"}]};var _={input:"m_4ba3a790"};let V={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{placeholder:"Regular Input component",classNames:_}),(0,a.jsx)(m.TextInput,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:_})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
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
`,language:"tsx"}]};var B=e.i(579668);let Y=`
import { Input } from '@mantine/core';

function Demo() {
  const at = <AtIcon size={16} />;
  const chevron = <CaretDownIcon size={16} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,W={type:"styles-api",data:B.InputStylesApi,component:function(e){return(0,a.jsx)(n.Input,{placeholder:"Input component",leftSection:(0,a.jsx)(c.AtIcon,{size:16}),rightSection:(0,a.jsx)(i.CaretDownIcon,{size:16}),...e})},code:Y,centered:!0,maxWidth:340},N=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,F={type:"styles-api",data:B.InputWrapperStylesApi,component:function(e){return(0,a.jsx)(n.Input.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,a.jsx)(n.Input,{placeholder:"Input"})})},code:N,centered:!0,maxWidth:340};var O=e.i(171481);let z=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"}))]]),L=s.forwardRef((e,t)=>s.createElement(O.default,{ref:t,...e,weights:z}));L.displayName="WarningCircleIcon";let H={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.TextInput,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,a.jsx)(m.TextInput,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,a.jsx)(m.TextInput,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,a.jsx)(L,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
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
`,centered:!0,maxWidth:340};var G=(0,t.__exportAll)({clearButton:()=>U,component:()=>l,compound:()=>y,defaultProps:()=>D,error:()=>H,focusStyles:()=>V,inputBase:()=>v,inputContainer:()=>h,inputWrapperOrder:()=>f,loading:()=>$,placeholder:()=>x,sections:()=>u,sharedDefaultProps:()=>A,sharedStyles:()=>E,stylesApi:()=>W,success:()=>Z,usage:()=>o,wrapper:()=>d,wrapperStylesApi:()=>F});e.s(["InputDemos",0,G],984083)},229564,e=>{"use strict";var t=e.i(648863),r=e.i(960831),n=e.i(647114),a=e.i(391398);let o={type:"configurator",component:function(e){return(0,a.jsx)(n.MaskInput,{...e,mask:"(999) 999-9999",placeholder:"(___) ___-____"})},code:`
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
`,centered:!0,maxWidth:340,controls:r.inputControls},i={type:"code",code:`
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
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",error:"Invalid phone number"})},centered:!0,maxWidth:340},p={type:"code",code:`
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
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",success:"Looks good!"})},centered:!0,maxWidth:340};var h=e.i(191788),f=e.i(485108),g=e.i(725695);let v={type:"code",component:function(){let e=(0,h.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",resetRef:e}),(0,a.jsx)(g.Group,{mt:"md",children:(0,a.jsx)(f.Button,{onClick:()=>e.current?.(),children:"Reset"})})]})},code:`
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
`,maxWidth:340,centered:!0};var y=e.i(582498);let x={type:"code",component:function(){let e=(0,y.useForm)({mode:"uncontrolled",initialValues:{phone:""}});return(0,a.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,a.jsx)(n.MaskInput,{mask:"(999) 999-9999",placeholder:"(___) ___-____",label:"Phone",onChangeRaw:t=>e.setFieldValue("phone",t,{forceUpdate:!1})}),(0,a.jsx)(f.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
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
`,maxWidth:340,centered:!0};var b=(0,t.__exportAll)({customTokens:()=>l,disabled:()=>d,dynamic:()=>i,error:()=>m,regex:()=>s,resetRef:()=>v,success:()=>p,transform:()=>u,usage:()=>o,withUseForm:()=>x});e.s(["MaskInputDemos",0,b],229564)},896399,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(288034);let a={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`},o={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{withSeconds:!0,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`},i={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{dropdownType:"modal",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
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
`,maxWidth:340,centered:!0},p={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{valueFormat:"DD MMM YYYY hh:mm A",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
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
`},h={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(n.DateTimePicker,{valueFormat:e=>(0,s.default)(e).format("dddd, MMMM D [at] h:mm A"),defaultValue:"2024-04-11 14:45:00",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
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
`};var x=(0,t.__exportAll)({clearSectionMode:()=>m,clearable:()=>c,configurator:()=>l,disabled:()=>f,format:()=>p,formatFunction:()=>h,modal:()=>i,presets:()=>v,range:()=>y,timePickerProps:()=>g,usage:()=>a,withSeconds:()=>o});e.s(["DateTimePickerDemos",0,x],896399)},131022,e=>{"use strict";var t=e.i(648863),r=e.i(996969),n=e.i(391398);let a={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},o={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
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
`,maxWidth:340,centered:!0},p={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,n.jsx)(r.MultiSelect,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`},h={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Multi Select",placeholder:"Multi Select",data:["React","Angular","Vue","Svelte"],success:"Looks good!"})},code:`
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
`,v=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),y={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:v,searchable:!0})},code:g,maxWidth:340,centered:!0},x={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},b=`
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
`,S=Array(100).fill(0).map((e,t)=>`Option ${t}`),k={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"With scroll area (default)",placeholder:"Pick value",data:S,maxDropdownHeight:200}),(0,n.jsx)(r.MultiSelect,{label:"With native scroll",placeholder:"Pick value",data:S,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:b,maxWidth:340,centered:!0},w=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},j={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:w,searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},D=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},M={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:D,searchable:!0})},code:`
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
`,maxWidth:340,centered:!0};var I=e.i(123895),P=e.i(726869);let A=`
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
`,T={type:"styles-api",data:P.MultiSelectStylesApi,component:function(e){return(0,n.jsx)(r.MultiSelect,{...e,dropdownOpened:!0,leftSection:(0,n.jsx)(I.AtIcon,{size:18}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:A,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
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
`,maxWidth:340,centered:!0};var R=e.i(931882),E=e.i(671640);let _={type:"code",component:function(){return(0,n.jsxs)(E.Stack,{children:[(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='both' (default)",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(R.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='rightSection'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(R.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,n.jsx)(r.MultiSelect,{label:"clearSectionMode='clear'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,n.jsx)(R.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
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
`,maxWidth:340,centered:!0};var V=e.i(293907);let B={type:"code",component:function(){let e=(0,n.jsx)(V.SquaresFourIcon,{size:16});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,n.jsx)(r.MultiSelect,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
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
`};var Y=e.i(485108),W=e.i(541772);let N={type:"code",component:function(){let[e,{toggle:t}]=(0,W.useDisclosure)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Y.Button,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,n.jsx)(r.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
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
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},O={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.MultiSelect,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,n.jsx)(r.MultiSelect,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0};var H=e.i(392862);let Z={type:"code",code:`
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
`,centered:!0,component:function(){return(0,n.jsxs)(H.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(H.Popover.Target,{children:(0,n.jsx)(Y.Button,{children:"Toggle popover"})}),(0,n.jsx)(H.Popover.Dropdown,{children:(0,n.jsx)(r.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var U={dropdown:"m_a9824888",input:"m_f5487eb3"};let $={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:U,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:340,centered:!0};var G=e.i(141806),X=e.i(725695),K=e.i(883364);let q={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},J=({option:e})=>(0,n.jsxs)(X.Group,{gap:"sm",children:[(0,n.jsx)(G.Avatar,{src:q[e.value].image,size:36,radius:"xl"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K.Text,{size:"sm",children:e.value}),(0,n.jsx)(K.Text,{size:"xs",opacity:.5,children:q[e.value].email})]})]}),Q={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:J,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
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
`,er=[{value:"Emily Johnson",label:"Emily Johnson",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"},{value:"Ava Rodriguez",label:"Ava Rodriguez",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"},{value:"Olivia Chen",label:"Olivia Chen",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"},{value:"Ethan Barnes",label:"Ethan Barnes",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"},{value:"Mason Taylor",label:"Mason Taylor",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}],en=new Map(er.map(e=>[e.value.toString(),e])),ea={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{data:er,label:"Candidates",placeholder:"Select candidates",defaultValue:["Emily Johnson","Ava Rodriguez"],renderPill:({option:e,onRemove:t})=>(0,n.jsx)(ee.Pill,{withRemoveButton:!0,onRemove:t,style:{paddingInlineStart:2},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,n.jsx)(G.Avatar,{src:en.get(e?.value.toString())?.image,size:16}),e?.label]})})})},code:et,centered:!0,maxWidth:400};var eo=e.i(191788);let ei={type:"code",component:function(){let[e,t]=(0,eo.useState)(["React","Angular","Vue"]);return(0,n.jsx)(r.MultiSelect,{label:"Drag pills to reorder",description:"Selected values can be reordered by dragging pills",placeholder:"Pick value",data:["React","Angular","Vue","Svelte","Solid","Ember"],value:e,onChange:t,withPillsReorder:!0})},code:`
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
`,ep=Array(100).fill(0).map((e,t)=>`Option ${t}`),eh={type:"code",component:function(){return(0,n.jsx)(r.MultiSelect,{label:"Fits viewport height",placeholder:"Pick values",data:ep,floatingHeight:"viewport"})},code:em,maxWidth:340,centered:!0};var ef=(0,t.__exportAll)({checkIcon:()=>c,clearSectionMode:()=>_,clearable:()=>C,configurator:()=>u,disabled:()=>d,disabledOptions:()=>m,dragReorder:()=>ei,dropdownAnimation:()=>O,dropdownOffset:()=>$,dropdownOpened:()=>N,dropdownPadding:()=>z,dropdownPosition:()=>F,dropdownShadow:()=>L,dropdownWidth:()=>el,error:()=>p,floatingHeight:()=>eh,fuzzySearch:()=>eu,groups:()=>f,hidePickedOptions:()=>l,limit:()=>y,loading:()=>ed,maxValues:()=>i,nothingFound:()=>s,readOnly:()=>x,renderOption:()=>Q,renderPill:()=>ea,scrollArea:()=>k,search:()=>j,searchable:()=>o,sections:()=>B,sort:()=>M,stylesApi:()=>T,success:()=>h,usage:()=>a,withinPopover:()=>Z});e.s(["MultiSelectDemos",0,ef],131022)},835066,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(563141);let a={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker />;
}
`},o={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{type:"range"})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
`},i={type:"code",centered:!0,maxWidth:280,component:function(){return(0,r.jsx)(n.InlineDateTimePicker,{withSeconds:!0})},code:`
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
`};var u=(0,t.__exportAll)({format:()=>c,range:()=>o,rangeControlled:()=>s,usage:()=>a,withSeconds:()=>i});e.s(["InlineDateTimePickerDemos",0,u],835066)},184435,e=>{"use strict";var t=e.i(648863),r=e.i(191788),n=e.i(301388),a=e.i(725695),o=e.i(883364),i=e.i(391398),l=e.i(618875);let s={type:"code",code:`
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
`,component:function(){let e=(0,r.useRef)({x:0,y:0}),t=(0,r.useRef)({x:0,y:0}),[s,c]=(0,r.useState)({x:0,y:0}),{ref:u,active:d}=(0,l.useDrag)(r=>{r.first&&(t.current={...e.current});let n={x:t.current.x+r.movement[0],y:t.current.y+r.movement[1]};e.current=n,c(n)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Group,{justify:"center",children:(0,i.jsx)("div",{ref:u,style:{width:200,height:120,backgroundColor:d?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translate(${s.x}px, ${s.y}px)`,cursor:d?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Drag me"})}),(0,i.jsxs)(o.Text,{ta:"center",mt:"sm",size:"sm",children:["Position: ",(0,i.jsx)(n.Code,{children:`{ x: ${Math.round(s.x)}, y: ${Math.round(s.y)} }`})]})]})}},c={type:"code",code:`
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
`,component:function(){let e=(0,r.useRef)(0),t=(0,r.useRef)(0),[n,s]=(0,r.useState)(0),c=(0,r.useRef)(0),u=(0,r.useRef)(0),[d,m]=(0,r.useState)(0),{ref:p,active:h}=(0,l.useDrag)(r=>{r.first&&(t.current=e.current);let n=t.current+r.movement[0];e.current=n,s(n)},{axis:"x"}),{ref:f,active:g}=(0,l.useDrag)(e=>{e.first&&(u.current=c.current);let t=u.current+e.movement[1];c.current=t,m(t)},{axis:"y"});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Group,{justify:"center",gap:"xl",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{ref:p,style:{width:80,height:80,backgroundColor:h?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateX(${n}px)`,cursor:h?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"X only"}),(0,i.jsxs)(o.Text,{ta:"center",mt:"xs",size:"sm",children:["x: ",Math.round(n)]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{ref:f,style:{width:80,height:80,backgroundColor:g?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateY(${d}px)`,cursor:g?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Y only"}),(0,i.jsxs)(o.Text,{ta:"center",mt:"xs",size:"sm",children:["y: ",Math.round(d)]})]})]})})}};var u=e.i(485108),d=e.i(470743);function m({notification:e,onDismiss:t}){let[n,a]=(0,r.useState)(0),[o,s]=(0,r.useState)(!1),{ref:c,active:u}=(0,l.useDrag)(r=>{r.last?Math.abs(r.movement[0])>120||r.velocity[0]>.5?(s(!0),setTimeout(()=>t(e.id),300)):a(0):a(r.movement[0])},{axis:"x",threshold:5,filterTaps:!0});return(0,i.jsx)(d.Paper,{ref:c,p:"sm",mb:"xs",radius:"md",withBorder:!0,style:{transform:o?`translateX(${n>0?400:-400}px)`:`translateX(${n}px)`,opacity:o?0:1-.6*Math.min(Math.abs(n)/200,1),transition:u?"none":"transform 300ms ease, opacity 300ms ease",cursor:u?"grabbing":"grab",touchAction:"pan-y",userSelect:"none"},children:e.text})}let p=[{id:1,text:"New message from Alice"},{id:2,text:"Build succeeded"},{id:3,text:"Deployment complete"},{id:4,text:"Review requested"}],h={type:"code",code:`
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
`,component:function(){let[e,t]=(0,r.useState)(p);return(0,i.jsxs)("div",{style:{height:300},children:[e.map(e=>(0,i.jsx)(m,{notification:e,onDismiss:e=>t(t=>t.filter(t=>t.id!==e))},e.id)),0===e.length&&(0,i.jsx)(o.Text,{ta:"center",c:"dimmed",py:"md",children:"All cleared!"}),(0,i.jsx)(a.Group,{justify:"center",mt:"md",children:(0,i.jsx)(u.Button,{onClick:()=>t(p),children:"Reset"})})]})},centered:!0,maxWidth:400},f={type:"code",code:`
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
`,component:function(){let e=(0,r.useRef)(null),{ref:t,active:n}=(0,l.useDrag)(t=>{e.current&&(e.current.scrollLeft-=t.delta[0])},{axis:"x",filterTaps:!0,threshold:5});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:r=>{e.current=r,t(r)},style:{overflow:"hidden",whiteSpace:"nowrap",cursor:n?"grabbing":"grab",touchAction:"pan-y",userSelect:"none",borderRadius:"var(--mantine-radius-md)",border:"1px solid var(--mantine-color-default-border)",padding:"var(--mantine-spacing-md)"},children:Array.from({length:20},(e,t)=>(0,i.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:120,height:80,marginRight:12,backgroundColor:`hsl(${18*t}, 60%, 70%)`,borderRadius:"var(--mantine-radius-sm)",fontWeight:600,verticalAlign:"top",color:"var(--mantine-color-black)"},children:["Card ",t+1]},t))}),(0,i.jsx)(o.Text,{ta:"center",mt:"sm",size:"sm",c:"dimmed",children:"Drag horizontally to scroll"})]})}};var g=e.i(257177),v=e.i(284629);let y={type:"code",code:`
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
`,component:function(){let[e,t]=(0,r.useState)(0),[n,s]=(0,r.useState)(0),{ref:c,active:u}=(0,l.useDrag)(e=>{e.last&&(e.tap?t(e=>e+1):s(e=>e+1))},{filterTaps:!0,threshold:5});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Group,{justify:"center",children:(0,i.jsx)(v.UnstyledButton,{ref:c,style:{width:200,height:80,backgroundColor:u?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",cursor:u?"grabbing":"pointer",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Click or drag me"})}),(0,i.jsxs)(a.Group,{justify:"center",mt:"md",gap:"lg",children:[(0,i.jsxs)(o.Text,{size:"sm",children:["Taps: ",(0,i.jsx)(g.Badge,{children:e})]}),(0,i.jsxs)(o.Text,{size:"sm",children:["Drags: ",(0,i.jsx)(g.Badge,{color:"teal",children:n})]})]})]})}};var x=(0,t.__exportAll)({axis:()=>c,filterTaps:()=>y,scroll:()=>f,swipe:()=>h,usage:()=>s});e.s(["UseDragDemos",0,x],184435)},953795,e=>{"use strict";var t=e.i(648863),r=e.i(191788),n=e.i(485108),a=e.i(725695),o=e.i(481178),i=e.i(44091),l=e.i(391466),s=e.i(275519),c=e.i(232471);let u=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:20});function d({value:e,decimalScale:t,fixedDecimalScale:r}){let n=function(e,t){if(!Number.isFinite(e))return"0";if(void 0!==t)return new Intl.NumberFormat("en-US",{useGrouping:!1,minimumFractionDigits:t,maximumFractionDigits:t}).format(e);let r=String(e);return r.includes("e")||r.includes("E")?u.format(e):r}(Math.abs(e),t);if(!r&&void 0!==t){let e=n.split(".");if(e[1]){let t=e[1].replace(/0+$/,"");n=t?`${e[0]}.${t}`:e[0]}}let a=n.indexOf("."),o=a>=0?n.slice(0,a):n,i=a>=0?n.slice(a+1):"",l=!/[1-9]/.test(n);return{negative:e<0&&!l,intDigits:o.split(""),fracDigits:i?i.split(""):[],hasDecimal:a>=0}}var m=e.i(391398);let p=["0","1","2","3","4","5","6","7","8","9","0","1"];function h({digit:e,getStyles:t,previousDigit:r,empty:n,valueDirection:a}){let o=parseInt(e,10),i=null!==r?parseInt(r,10):o,l=t("digit"),s=t("digitColumn");return(0,m.jsx)("span",{...l,"data-empty":n||void 0,"aria-hidden":"true",children:(0,m.jsx)("span",{...s,style:{...s.style,transform:`translateY(${-o}em)`,"--rn-roll-from":`translateY(${-i}em)`,"--rn-roll-to":`translateY(${-("up"===a&&null!==r&&o<i&&o<=1?o+10:o)}em)`},"data-direction":o>=i?"up":"down",children:p.map((e,t)=>(0,m.jsx)("span",{children:e},t))},e)})}function f(e,t){return[...Array(t-e.length).fill(null),...e]}function g(e,t){return[...e,...Array(t-e.length).fill(null)]}var v={root:"m_47dd3981",digit:"m_b301d46e",digitColumn:"m_8ae40964","mantine-rolling-number-roll":"m_18d73873",char:"m_47d64bf5"};let y={animationDuration:600,timingFunction:"ease",decimalSeparator:".",tabularNumbers:!0},x=(0,o.createVarsResolver)((e,{animationDuration:t,timingFunction:r})=>({root:{"--rn-duration":`${t}ms`,"--rn-timing-function":r}})),b=(0,s.factory)(e=>{let t=(0,i.useProps)("RollingNumber",y,e),{classNames:n,className:a,style:o,styles:s,unstyled:u,vars:p,value:b,prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:j,decimalScale:D,fixedDecimalScale:M,animationDuration:I,timingFunction:P,tabularNumbers:A,withLiveRegion:T,mod:C,attributes:R,...E}=t,_=(0,l.useStyles)({name:"RollingNumber",classes:v,props:t,className:a,style:o,classNames:n,styles:s,unstyled:u,attributes:R,vars:p,varsResolver:x}),V=(0,r.useRef)(b),B=V.current;(0,r.useEffect)(()=>{V.current=b});let Y=b>=B?"up":"down",W=function({current:e,previous:t,prefix:r,suffix:n,decimalSeparator:a=".",thousandSeparator:o}){let i=Math.max(e.intDigits.length,t.intDigits.length),l=Math.max(e.fracDigits.length,t.fracDigits.length),s=f(e.intDigits,i),c=f(t.intDigits,i),u=g(e.fracDigits,l),d=g(t.fracDigits,l),m=o?"string"==typeof o?o:",":null,p=[];if(r)for(let e=0;e<r.length;e++)p.push({type:"char",key:`prefix-${e}`,char:r[e],empty:!1});(e.negative||t.negative)&&p.push({type:"char",key:"sign",char:"-",empty:!e.negative});for(let e=0;e<i;e++){let t=i-1-e,r=s[e],n=c[e],a=null===r;p.push({type:"digit",key:`int-${t}`,digit:r??"0",previousDigit:n,empty:a}),m&&t>0&&t%3==0&&p.push({type:"char",key:`sep-${t}`,char:m,empty:a})}(e.hasDecimal||t.hasDecimal)&&p.push({type:"char",key:"dec",char:a,empty:!e.hasDecimal});for(let e=0;e<l;e++){let t=u[e],r=d[e],n=null===t;p.push({type:"digit",key:`frac-${e}`,digit:t??"0",previousDigit:r,empty:n})}if(n)for(let e=0;e<n.length;e++)p.push({type:"char",key:`suffix-${e}`,char:n[e],empty:!1});return p}({current:d({value:b,decimalScale:D,fixedDecimalScale:M}),previous:d({value:B,decimalScale:D,fixedDecimalScale:M}),prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:j}),N=function({value:e,prefix:t,suffix:r,decimalSeparator:n=".",thousandSeparator:a,decimalScale:o,fixedDecimalScale:i}){let l=d({value:e,decimalScale:o,fixedDecimalScale:i}),s=l.intDigits.join("");a&&(s=s.replace(/\B(?=(\d{3})+(?!\d))/g,"string"==typeof a?a:","));let c=l.negative?`-${s}`:s;return l.fracDigits.length>0&&(c+=`${n}${l.fracDigits.join("")}`),`${t||""}${c}${r||""}`}({value:b,prefix:S,suffix:k,decimalSeparator:w,thousandSeparator:j,decimalScale:D,fixedDecimalScale:M});return(0,m.jsx)(c.Box,{..._("root"),mod:[{"tabular-numbers":A},C],role:T?"status":"img","aria-label":N,...E,children:W.map(e=>"digit"===e.type?(0,m.jsx)(h,{digit:e.digit,previousDigit:e.previousDigit,getStyles:_,empty:e.empty,valueDirection:Y},e.key):(0,m.jsx)("span",{..._("char"),"data-empty":e.empty||void 0,"aria-hidden":"true",children:e.char},e.key))})});b.classes=v,b.varsResolver=x,b.displayName="@mantine/core/RollingNumber";let S={type:"code",component:function(){let[e,t]=(0,r.useState)(1234);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{value:e,fz:"36px"}),(0,m.jsxs)(a.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>e+1),children:"Increment"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>e-1),children:"Decrement"}),(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e4*Math.random())),children:"Random"})]})]})},code:`
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
`},k={type:"code",component:function(){let[e,t]=(0,r.useState)(99.99);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{value:e,prefix:"$ ",suffix:" USD",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,fz:"32px"}),(0,m.jsxs)(a.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e+10.5).toFixed(2)),children:"+10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e-10.5).toFixed(2)),children:"-10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(+(1e4*Math.random()).toFixed(2)),children:"Random"})]})]})},code:`
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
`};var w=e.i(671640),j=e.i(883364);let D={type:"code",component:function(){let[e,t]=(0,r.useState)(500);return(0,m.jsxs)(w.Stack,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(j.Text,{size:"sm",c:"dimmed",children:"200ms"}),(0,m.jsx)(b,{value:e,animationDuration:200,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(j.Text,{size:"sm",c:"dimmed",children:"600ms (default)"}),(0,m.jsx)(b,{value:e,animationDuration:600,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(j.Text,{size:"sm",c:"dimmed",children:"1200ms"}),(0,m.jsx)(b,{value:e,animationDuration:1200,fz:"28px"})]}),(0,m.jsx)(a.Group,{children:(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e3*Math.random())),children:"Random"})})]})},code:`
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
`};var M=(0,t.__exportAll)({duration:()=>D,prefix:()=>k,usage:()=>S});e.s(["RollingNumberDemos",0,M],953795)},846e3,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(20972);r.sumBy=function(e,t){let r;if(!e||!e.length)return 0;null!=t&&(t=n.iteratee(t));for(let n=0;n<e.length;n++){let a=t?t(e[n]):e[n];void 0!==a&&(void 0===r?r=a:r+=a)}return r}},254972,(e,t,r)=>{t.exports=e.r(846e3).sumBy},179076,e=>{"use strict";var t=e.i(648863);let r={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:62429},{source:2,target:4,value:291741}]},n=`export const data = {
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
};`,a={nodes:[{name:"Visit",color:"indigo.6"},{name:"Direct-Favourite",color:"teal.6"},{name:"Page-Click",color:"blue.6"},{name:"Detail-Favourite",color:"cyan.6"},{name:"Lost",color:"red.6"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:62429},{source:2,target:4,value:291741}]},o=`export const data = {
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
};`;var i=e.i(391398),l=e.i(520916),s={root:"m_b42d2970"},c=e.i(232471),u=e.i(481178),d=e.i(275519),m=e.i(317477),p=e.i(779177),h=e.i(951254),f=e.i(44091),g=e.i(62904),v=e.i(391466),y=e.i(191788),x=e.i(723451),b=e.i(767577),S=e.i(254972),k=e.i(449691),w=e.i(777541),j=e.i(815954),D=e.i(355345),M=e.i(516257),I=e.i(901841),P=e.i(492900),A=e.i(458985),T=e.i(546189),C=e.i(543372),R=e.i(134518),E=e.i(128002),_=e.i(451494),V=e.i(888494),B=e.i(883388),Y=e.i(297974),W=e.i(500678),N=e.i(270627),F=e.i(768069),O=e.i(560894),z=["sourceX","sourceY","sourceControlX","targetX","targetY","targetControlX","linkWidth"],L=["className","style","children","id"];function H(){return(H=Object.assign.bind()).apply(null,arguments)}function Z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach(function(t){var n,a,o;n=e,a=t,o=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var G=e=>e.y+e.dy/2,X=e=>e&&e.value||0,K=(e,t)=>t.reduce((t,r)=>t+X(e[r]),0),q=(e,t,r)=>r.reduce((r,n)=>{var a=t[n];if(null==a)return r;var o=e[a.source];return null==o?r:r+G(o)*X(t[n])},0),J=(e,t,r)=>r.reduce((r,n)=>{var a=t[n];if(null==a)return r;var o=e[a.target];return null==o?r:r+G(o)*X(t[n])},0),Q=(e,t)=>e.y-t.y,ee=(e,t)=>{for(var{targetNodes:r}=t,n=0,a=r.length;n<a;n++){var o=r[n];if(null!=o){var i=e[o];i&&(i.depth=Math.max(t.depth+1,i.depth),ee(e,i))}}},et=function(e,t,r){for(var n=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=0,o=e.length;a<o;a++){var i=e[a];if(null!=i){var l=i.length;n&&i.sort(Q);for(var s=0,c=0;c<l;c++){var u=i[c];if(null!=u){var d=s-u.y;d>0&&(u.y+=d),s=u.y+u.dy+r}}s=t+r;for(var m=l-1;m>=0;m--){var p=i[m];if(null!=p){var h=p.y+p.dy+r-s;if(h>0)p.y-=h,s=p.y;else break}}}}},er=(e,t,r,n)=>{for(var a=0,o=t.length;a<o;a++){var i=t[a];if(null!=i)for(var l=0,s=i.length;l<s;l++){var c=i[l];if(null!=c&&c.sourceLinks.length){var u=K(r,c.sourceLinks),d=q(e,r,c.sourceLinks)/u;c.y+=(d-G(c))*n}}}},en=(e,t,r,n)=>{for(var a=t.length-1;a>=0;a--){var o=t[a];if(null!=o)for(var i=0,l=o.length;i<l;i++){var s=o[i];if(null!=s&&s.targetLinks.length){var c=K(r,s.targetLinks),u=J(e,r,s.targetLinks)/c;s.y+=(u-G(s))*n}}}},ea={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:(e,t,r,n)=>{if(null!=t&&"string"==typeof t&&null!=r&&"object"==typeof r){var[a,o]=t.split("-"),i=(0,k.default)(r,"".concat(a,"s[").concat(o,"]"));if(i)return((e,t,r)=>{var{payload:n}=e;if("node"===t)return{payload:n,name:(0,M.getValueByDataKey)(n,r,""),value:(0,M.getValueByDataKey)(n,"value")};if("source"in n&&n.source&&n.target){var a=(0,M.getValueByDataKey)(n.source,r,""),o=(0,M.getValueByDataKey)(n.target,r,"");return{payload:n,name:"".concat(a," - ").concat(o),value:(0,M.getValueByDataKey)(n,"value")}}})(i,a,n)}},eventEmitter:void 0},eo=y.memo(e=>{var{dataKey:t,nameKey:r,stroke:n,strokeWidth:a,fill:o,name:i,data:l,id:s}=e,c={dataDefinedOnItem:l,getPosition:N.noop,settings:{stroke:n,strokeWidth:a,fill:o,dataKey:t,name:i,nameKey:r,hide:!1,type:void 0,color:o,unit:"",graphicalItemId:s}};return y.createElement(E.SetTooltipEntrySettings,{tooltipEntrySettings:c})});function ei(e){var{graphicalItemId:t,props:r,i:n,linkContent:a,onMouseEnter:o,onMouseLeave:i,onClick:l,dataKey:s}=e,c="sourceX"in r?{x:(r.sourceX+r.targetX)/2,y:(r.sourceY+r.targetY)/2}:void 0,u="link-".concat(n),d=(0,C.useAppDispatch)();return y.createElement(j.Layer,{onMouseEnter:e=>{d((0,R.setActiveMouseOverItemIndex)({activeIndex:u,activeDataKey:s,activeCoordinate:c,activeGraphicalItemId:t})),o(r,e)},onMouseLeave:e=>{d((0,R.mouseLeaveItem)()),i(r,e)},onClick:e=>{d((0,R.setActiveClickItemIndex)({activeIndex:u,activeDataKey:s,activeCoordinate:c,activeGraphicalItemId:t})),l(r,e)}},function(e,t){if(y.isValidElement(e))return y.cloneElement(e,t);if("function"==typeof e)return e(t);var{sourceX:r,sourceY:n,sourceControlX:a,targetX:o,targetY:i,targetControlX:l,linkWidth:s}=t,c=Z(t,z);return y.createElement("path",H({className:"recharts-sankey-link",d:"\n          M".concat(r,",").concat(n,"\n          C").concat(a,",").concat(n," ").concat(l,",").concat(i," ").concat(o,",").concat(i,"\n        "),fill:"none",stroke:"#333",strokeWidth:s,strokeOpacity:"0.2"},(0,B.svgPropertiesNoEvents)(c)))}(a,r))}function el(e){var{graphicalItemId:t,modifiedLinks:r,links:n,linkContent:a,onMouseEnter:o,onMouseLeave:i,onClick:l,dataKey:s}=e;return y.createElement(j.Layer,{className:"recharts-sankey-links",key:"recharts-sankey-links"},n.map((e,n)=>{var c=r[n];return null==c?null:y.createElement(ei,{graphicalItemId:t,key:"link-".concat(e.source,"-").concat(e.target,"-").concat(e.value),props:c,linkContent:a,i:n,onMouseEnter:o,onMouseLeave:i,onClick:l,dataKey:s})}))}function es(e){var{graphicalItemId:t,props:r,nodeContent:n,i:a,onMouseEnter:o,onMouseLeave:i,onClick:l,dataKey:s}=e,c=(0,C.useAppDispatch)(),u={x:+r.x+r.width/2,y:+r.y+r.height/2},d="node-".concat(a);return y.createElement(j.Layer,{onMouseEnter:e=>{c((0,R.setActiveMouseOverItemIndex)({activeIndex:d,activeDataKey:s,activeCoordinate:u,activeGraphicalItemId:t})),o(r,e)},onMouseLeave:e=>{c((0,R.mouseLeaveItem)()),i(r,e)},onClick:e=>{c((0,R.setActiveClickItemIndex)({activeIndex:d,activeDataKey:s,activeCoordinate:u,activeGraphicalItemId:t})),l(r,e)}},y.isValidElement(n)?y.cloneElement(n,r):"function"==typeof n?n(r):y.createElement(D.Rectangle,H({className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8"},(0,B.svgPropertiesNoEvents)(r))))}function ec(e){var{graphicalItemId:t,modifiedNodes:r,nodeContent:n,onMouseEnter:a,onMouseLeave:o,onClick:i,dataKey:l}=e;return y.createElement(j.Layer,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},r.map((e,r)=>y.createElement(es,{graphicalItemId:t,key:"node-".concat(e.index,"-").concat(e.x,"-").concat(e.y),props:e,nodeContent:n,i:r,onMouseEnter:a,onMouseLeave:o,onClick:i,dataKey:l})))}var eu=$({align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify"},O.initialEventSettingsState);function ed(e){var{className:t,style:r,children:n,id:a}=e,o=Z(e,L),{link:i,dataKey:l,node:s,onMouseEnter:c,onMouseLeave:u,onClick:d,data:m,iterations:p,nodeWidth:h,nodePadding:f,sort:g,linkCurvature:v,margin:x,verticalAlign:k,align:j}=e,D=(0,B.svgPropertiesNoEvents)(o),M=(0,I.useChartWidth)(),P=(0,I.useChartHeight)(),{links:A,modifiedLinks:T,modifiedNodes:C}=(0,y.useMemo)(()=>{if(!m||!M||!P||M<=0||P<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};var e,t,r,n,a=(e=>{var{data:t,width:r,height:n,iterations:a,nodeWidth:o,nodePadding:i,sort:l,verticalAlign:s,align:c}=e,{links:u}=t,{tree:d}=((e,t,r,n)=>{for(var a,o,{nodes:i,links:l}=e,s=i.map((e,t)=>{var r=((e,t)=>{for(var r=[],n=[],a=[],o=[],i=0,l=e.length;i<l;i++){var s=e[i];(null==s?void 0:s.source)===t&&(a.push(s.target),o.push(i)),(null==s?void 0:s.target)===t&&(r.push(s.source),n.push(i))}return{sourceNodes:r,sourceLinks:n,targetLinks:o,targetNodes:a}})(l,t);return $($($({},e),r),{},{value:Math.max(K(l,r.sourceLinks),K(l,r.targetLinks)),depth:0})}),c=0,u=s.length;c<u;c++){var d=s[c];null==d||d.sourceNodes.length||ee(s,d)}var m=null!=(a=null==(o=(0,b.default)(s,e=>e.depth))?void 0:o.depth)?a:0;if(m>=1)for(var p=(t-r)/m,h=0,f=s.length;h<f;h++){var g=s[h];null!=g&&(g.targetNodes.length||"justify"!==n||(g.depth=m),g.x=g.depth*p,g.dx=r)}return{tree:s,maxDepth:m}})(t,r,o,c),m=(e=>{for(var t=[],r=0,n=e.length;r<n;r++){var a,o=e[r];null!=o&&(t[o.depth]||(t[o.depth]=[]),null==(a=t[o.depth])||a.push(o))}return t})(d),p=((e,t,r,n,a)=>{for(var o=Math.min(...e.map(e=>(t-(e.length-1)*r)/(0,S.default)(e,X))),i=0,l=e.length;i<l;i++){var s=e[i];if(null!=s)if("top"===a)for(var c=0,u=0,d=s.length;u<d;u++){var m=s[u];null!=m&&(m.dy=m.value*o,m.y=c,c+=m.dy+r)}else for(var p=0,h=s.length;p<h;p++){var f=s[p];null!=f&&(f.y=p,f.dy=f.value*o)}}return n.map(e=>$($({},e),{},{dy:X(e)*o}))})(m,n,i,u,s);if(et(m,n,i,l),"justify"===s)for(var h=1,f=1;f<=a;f++)en(d,m,p,h*=.99),et(m,n,i,l),er(d,m,p,h),et(m,n,i,l);return((e,t)=>{for(var r=0,n=e.length;r<n;r++){var a=e[r];if(null!=a){var o=0,i=0;a.targetLinks.sort((r,n)=>{var a,o,i,l,s=null==(a=t[r])?void 0:a.target,c=null==(o=t[n])?void 0:o.target;if(null==s||null==c)return 0;var u=null==(i=e[s])?void 0:i.y,d=null==(l=e[c])?void 0:l.y;return null==u||null==d?0:u-d}),a.sourceLinks.sort((r,n)=>{var a,o,i,l,s=null==(a=t[r])?void 0:a.source,c=null==(o=t[n])?void 0:o.source;if(null==s||null==c)return 0;var u=null==(i=e[s])?void 0:i.y,d=null==(l=e[c])?void 0:l.y;return null==u||null==d?0:u-d});for(var l=0,s=a.targetLinks.length;l<s;l++){var c=a.targetLinks[l];if(null!=c){var u=t[c];u&&(u.sy=o,o+=u.dy)}}for(var d=0,m=a.sourceLinks.length;d<m;d++){var p=a.sourceLinks[d];if(null!=p){var h=t[p];h&&(h.ty=i,i+=h.dy)}}}}})(d,p),{nodes:d,links:p}})({data:m,width:M-(null!=(e=x.left)?e:0)-(null!=(t=x.right)?t:0),height:P-(null!=(r=x.top)?r:0)-(null!=(n=x.bottom)?n:0),iterations:p,nodeWidth:h,nodePadding:f,sort:g,verticalAlign:k,align:j}),o=x.top||0,l=x.left||0,c=a.links.map((e,t)=>(e=>{var{link:t,nodes:r,left:n,top:a,i:o,linkContent:i,linkCurvature:l}=e,{sy:s,ty:c,dy:u}=t,d=r[t.source],m=r[t.target];if(null!=d&&null!=m){var p,h,f=d.x+d.dx+n,g=m.x+n,v=(h=g-(p=+f),e=>p+h*e),y=v(l),x=v(1-l);return $({sourceX:f,targetX:g,sourceY:d.y+s+u/2+a,targetY:m.y+c+u/2+a,sourceControlX:y,targetControlX:x,sourceRelativeY:s,targetRelativeY:c,linkWidth:u,index:o,payload:$($({},t),{},{source:d,target:m})},(0,B.svgPropertiesNoEventsFromUnknown)(i))}})({link:e,nodes:a.nodes,i:t,top:o,left:l,linkContent:i,linkCurvature:v})).filter(N.isNotNil),u=a.nodes.map((e,t)=>(e=>{var{node:t,nodeContent:r,top:n,left:a,i:o}=e,{x:i,y:l,dx:s,dy:c}=t;return $($({},(0,B.svgPropertiesNoEventsFromUnknown)(r)),{},{x:i+a,y:l+n,width:s,height:c,index:o,payload:t})})({node:e,nodeContent:s,i:t,top:o,left:l}));return{nodes:a.nodes,links:a.links,modifiedLinks:c,modifiedNodes:u}},[m,M,P,x,p,h,f,g,i,s,v,j,k]),R=(0,y.useCallback)((e,t,r)=>{c&&c(e,t,r)},[c]),E=(0,y.useCallback)((e,t,r)=>{u&&u(e,t,r)},[u]),_=(0,y.useCallback)((e,t,r)=>{d&&d(e,t,r)},[d]);return(0,W.isPositiveNumber)(M)&&(0,W.isPositiveNumber)(P)&&m&&m.links&&m.nodes?y.createElement(y.Fragment,null,y.createElement(V.SetComputedData,{computedData:{links:T,nodes:C}}),y.createElement(w.Surface,H({},D,{width:M,height:P}),n,y.createElement(el,{graphicalItemId:a,links:A,modifiedLinks:T,linkContent:i,dataKey:l,onMouseEnter:(e,t)=>R(e,"link",t),onMouseLeave:(e,t)=>E(e,"link",t),onClick:(e,t)=>_(e,"link",t)}),y.createElement(ec,{graphicalItemId:a,modifiedNodes:C,nodeContent:s,dataKey:l,onMouseEnter:(e,t)=>R(e,"node",t),onMouseLeave:(e,t)=>E(e,"node",t),onClick:(e,t)=>_(e,"node",t)}))):null}function em(e){var t=(0,Y.resolveDefaultProps)(e,eu),{width:r,height:n,style:a,className:o,id:i,throttleDelay:l,throttledEvents:s}=t,[c,u]=(0,y.useState)(null);return y.createElement(T.RechartsStoreProvider,{preloadedState:{options:ea},reduxStoreName:null!=o?o:"Sankey"},y.createElement(I.ReportChartSize,{width:r,height:n}),y.createElement(I.ReportChartMargin,{margin:t.margin}),y.createElement(_.ReportEventSettings,{throttleDelay:l,throttledEvents:s}),y.createElement(A.RechartsWrapper,{className:o,style:a,width:r,height:n,responsive:!1,ref:e=>{e&&!c&&u(e)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},y.createElement(P.TooltipPortalContext.Provider,{value:c},y.createElement(F.RegisterGraphicalItemId,{id:i,type:"sankey"},e=>y.createElement(y.Fragment,null,y.createElement(eo,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:e}),y.createElement(ed,H({},t,{id:e})))))))}em.displayName="Sankey";var ep=e.i(694713);let eh={height:300,nodeWidth:10,nodePadding:10,linkCurvature:.5,iterations:32,linkOpacity:.4,withTooltip:!0,tooltipAnimationDuration:0},ef=(0,u.createVarsResolver)((e,{nodeColor:t,linkColor:r,textColor:n,height:a})=>({root:{"--chart-node-color":t?(0,m.getThemeColor)(t,e):void 0,"--chart-link-color":r?(0,m.getThemeColor)(r,e):void 0,"--chart-text-color":n?(0,m.getThemeColor)(n,e):void 0,"--chart-height":(0,p.rem)(a)}})),eg=["var(--mantine-color-blue-filled)","var(--mantine-color-cyan-filled)","var(--mantine-color-teal-filled)","var(--mantine-color-green-filled)","var(--mantine-color-lime-filled)","var(--mantine-color-yellow-filled)","var(--mantine-color-orange-filled)","var(--mantine-color-red-filled)","var(--mantine-color-pink-filled)","var(--mantine-color-grape-filled)","var(--mantine-color-violet-filled)","var(--mantine-color-indigo-filled)"];function ev({x:e,y:t,width:r,height:n,index:a,payload:o,resolvedNodeColors:l,resolvedDefaultColors:s,valueFormatter:c}){let u=l[a]||`var(--chart-node-color, ${s[a%s.length]})`,d=!o.targetNodes||0===o.targetNodes.length,m=d?e-6:e+r+6,p=d?"end":"start",h=c?c(o.value):o.value;return(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:e,y:t,width:r,height:n,fill:u,stroke:"none"}),n>=28?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("text",{x:m,y:t+n/2-7,textAnchor:p,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",children:o.name}),(0,i.jsx)("text",{x:m,y:t+n/2+7,textAnchor:p,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",opacity:.8,children:h})]}):(0,i.jsxs)("text",{x:m,y:t+n/2,textAnchor:p,dominantBaseline:"central",fill:"var(--chart-text-color, var(--mantine-color-text))",fontSize:12,fontFamily:"var(--mantine-font-family)",children:[o.name," ",(0,i.jsx)("tspan",{opacity:.8,children:h})]})]})}function ey({sourceX:e,targetX:t,sourceY:r,targetY:n,sourceControlX:a,targetControlX:o,linkWidth:l,sourceResolvedColor:s,linkOpacity:c}){return(0,i.jsx)("path",{d:`
        M${e},${r+l/2}
        C${a},${r+l/2}
          ${o},${n+l/2}
          ${t},${n+l/2}
        L${t},${n-l/2}
        C${o},${n-l/2}
          ${a},${r-l/2}
          ${e},${r-l/2}
        Z
      `,fill:s||"var(--chart-link-color, var(--mantine-color-gray-4))",opacity:c,stroke:"none"})}let ex=(0,d.factory)(e=>{let t=(0,f.useProps)("SankeyChart",eh,e),{classNames:r,className:n,style:a,styles:o,unstyled:u,vars:d,data:p,height:y,nodeWidth:b,nodePadding:S,linkCurvature:k,iterations:w,nodeColor:j,colors:D,linkColor:M,linkOpacity:I,textColor:P,withTooltip:A,tooltipAnimationDuration:T,tooltipProps:C,sankeyProps:R,valueFormatter:E,children:_,attributes:V,...B}=t,Y=(0,h.useMantineTheme)(),W={};p.nodes.forEach((e,t)=>{e.color&&(W[t]=(0,m.getThemeColor)(e.color,Y))});let N=D?D.map(e=>(0,m.getThemeColor)(e,Y)):eg,F=(0,v.useStyles)({name:"SankeyChart",classes:s,props:t,className:n,style:a,classNames:r,styles:o,unstyled:u,attributes:V,vars:d,varsResolver:ef}),{resolvedClassNames:O,resolvedStyles:z}=(0,g.useResolvedStylesApi)({classNames:r,styles:o,props:t});return(0,i.jsx)(c.Box,{...F("root"),...B,children:(0,i.jsx)(x.ResponsiveContainer,{height:y,children:(0,i.jsxs)(em,{data:p,nodeWidth:b,nodePadding:S,linkCurvature:k,iterations:w,node:e=>(0,i.jsx)(ev,{...e,resolvedNodeColors:W,resolvedDefaultColors:N,valueFormatter:E}),link:e=>{let t=e.index>=0&&e.index<p.links.length?p.links[e.index].source:-1;return(0,i.jsx)(ey,{...e,sourceResolvedColor:W[t],linkOpacity:I})},...R,children:[A&&(0,i.jsx)(ep.Tooltip,{animationDuration:T,isAnimationActive:!1,content:({payload:e})=>(0,i.jsx)(l.ChartTooltip,{payload:e?.map(e=>({name:e.name,value:e.value,color:(e=>{let t=p.nodes.findIndex(t=>t.name===e.name);if(-1!==t)return W[t]||N[t%N.length];let r=e.payload?.payload?.source??e.payload?.source;if(r){let e=p.nodes.findIndex(e=>e.name===r.name);if(-1!==e)return W[e]||N[e%N.length]}return"var(--mantine-color-blue-6)"})(e)}))||[],classNames:O,styles:z,type:"radial",valueFormatter:E,attributes:V}),...C}),_]})})})});ex.displayName="@mantine/charts/SankeyChart",ex.classes=s,ex.varsResolver=ef;let eb={type:"code",component:function(){return(0,i.jsx)(ex,{data:a,linkOpacity:.2})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} linkOpacity={0.2} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eS={type:"code",component:function(){return(0,i.jsx)(ex,{data:r,colors:["indigo.6","cyan.6","teal.6","orange.6","red.6"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ek={type:"code",component:function(){return(0,i.jsx)(ex,{data:a,linkOpacity:.2})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} linkOpacity={0.2} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ew={type:"code",component:function(){return(0,i.jsx)(ex,{data:r,nodeWidth:20,nodePadding:20})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} nodeWidth={20} nodePadding={20} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ej={type:"code",component:function(){return(0,i.jsx)(ex,{data:r,withTooltip:!1})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},eD={type:"code",component:function(){return(0,i.jsx)(ex,{data:r})},code:[{code:`
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var eM=(0,t.__exportAll)({color:()=>eb,colors:()=>eS,linkOpacity:()=>ek,noTooltip:()=>ej,nodeWidth:()=>ew,usage:()=>eD});e.s(["SankeyChartDemos",0,eM],179076)},81644,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(896399),a=e.i(835066),o=e.i(984083),i=e.i(229564),l=e.i(131022),s=e.i(736897),c=e.i(953795),u=e.i(179076),d=e.i(83967),m=e.i(832390),p=e.i(184435),h=e.i(953813);e.i(603441);var f=e.i(62558);e.i(457450);var g=e.i(418026);let v=(0,f.Layout)(g.MDX_DATA.Changelog920);function y(e){let f={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:g,SponsorButton:v}=f;return g||x("Demo",!0),v||x("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(f.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(f.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(v,{}),"\n",(0,t.jsx)(f.h2,{id:"treeselect-component",children:"TreeSelect component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/tree-select",children:"TreeSelect"})," component allows picking one or more values from hierarchical tree data.\nIt supports three selection modes: single, multiple, and checkbox (with parent-child cascade):"]}),"\n",(0,t.jsx)(g,{data:m.TreeSelectDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"tree-select-combobox-examples",children:"Tree select Combobox examples"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCombobox",children:"Combobox examples"})," showing how to build tree select components\nfrom Combobox primitives with connecting lines, expand/collapse chevrons, and proper indentation:"]}),"\n",(0,t.jsxs)(f.ul,{children:["\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCombobox",children:"Tree select"})," – basic single-value tree select"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeMultiSelectCombobox",children:"Tree multi select"})," – multi select with checkbox cascade"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectSearchable",children:"Searchable tree select"})," – tree select with search filtering"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectCheckbox",children:"Tree select with checkboxes"})," – single select with expand-on-click"]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/combobox?e=TreeSelectVirtualized",children:"Virtualized tree select"})," – large tree (~500 nodes) with @tanstack/react-virtual"]}),"\n"]}),"\n",(0,t.jsx)(f.h2,{id:"notifications-swipe-dismissal",children:"Notifications swipe dismissal"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/x/notifications",children:"@mantine/notifications"})," now supports dismissing notifications by dragging them\nleft or right, and with horizontal scroll swipe while hovered. Both interactions can be disabled\non ",(0,t.jsx)(f.code,{children:"Notifications"}),", and individual items can opt out with ",(0,t.jsx)(f.code,{children:"allowClose: false"}),"."]}),"\n",(0,t.jsx)(g,{data:s.NotificationsDemos.base}),"\n",(0,t.jsx)(f.h2,{id:"use-drag-hook",children:"use-drag hook"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/hooks/use-drag",children:"use-drag"})," hook handles pointer drag gestures with movement tracking,\nvelocity, direction and axis constraints. It uses the Pointer Events API and works with\nboth mouse and touch input:"]}),"\n",(0,t.jsx)(g,{data:p.UseDragDemos.swipe}),"\n",(0,t.jsx)(f.h2,{id:"inlinedatetimepicker-component",children:"InlineDateTimePicker component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/dates/inline-date-time-picker",children:"InlineDateTimePicker"})," component renders a calendar\nwith a time picker inline, without a dropdown. It supports both default and range modes:"]}),"\n",(0,t.jsx)(g,{data:a.InlineDateTimePickerDemos.usage}),"\n",(0,t.jsxs)(f.p,{children:["Set ",(0,t.jsx)(f.code,{children:'type="range"'})," to select a date and time range with two time inputs:"]}),"\n",(0,t.jsx)(g,{data:a.InlineDateTimePickerDemos.range}),"\n",(0,t.jsx)(f.h2,{id:"datetimepicker-range-support",children:"DateTimePicker range support"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," now supports ",(0,t.jsx)(f.code,{children:'type="range"'})," to select\na date and time range. In range mode, two time inputs are displayed in the dropdown\nfor start and end times:"]}),"\n",(0,t.jsx)(g,{data:n.DateTimePickerDemos.range}),"\n",(0,t.jsx)(f.h2,{id:"datetimepicker-valueformat-function",children:"DateTimePicker valueFormat function"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," ",(0,t.jsx)(f.code,{children:"valueFormat"})," prop now accepts a function in addition\nto a dayjs format string. The callback receives the value as a ",(0,t.jsx)(f.code,{children:"YYYY-MM-DD HH:mm:ss"})," string and\nreturns the formatted value, which is useful for cases that cannot be expressed with a dayjs\nformat string:"]}),"\n",(0,t.jsx)(g,{data:n.DateTimePickerDemos.formatFunction}),"\n",(0,t.jsx)(f.h2,{id:"rollingnumber-component",children:"RollingNumber component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/rolling-number",children:"RollingNumber"})," component animates value changes with rolling digit\ntransitions. Each digit independently rolls to its new position when the value changes:"]}),"\n",(0,t.jsx)(g,{data:c.RollingNumberDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"maskinput-improvements",children:"MaskInput improvements"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/mask-input",children:"MaskInput"})," now supports a ",(0,t.jsx)(f.code,{children:"resetRef"})," prop that assigns a function that\nclears the input value imperatively. This is useful because ",(0,t.jsx)(f.code,{children:"MaskInput"})," is uncontrolled\ninternally, so setting ",(0,t.jsx)(f.code,{children:"value"})," from a parent does not clear it:"]}),"\n",(0,t.jsx)(g,{data:i.MaskInputDemos.resetRef}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.code,{children:"MaskInput"})," integration with ",(0,t.jsx)(f.a,{href:"/form/use-form",children:"use-form"})," is now documented. Use ",(0,t.jsx)(f.code,{children:"defaultValue"}),"\nto seed the initial value and ",(0,t.jsx)(f.code,{children:"onChangeRaw"})," to write the raw value to form state:"]}),"\n",(0,t.jsx)(g,{data:i.MaskInputDemos.withUseForm}),"\n",(0,t.jsx)(f.h2,{id:"sankeychart-component",children:"SankeyChart component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/charts/sankey-chart",children:"SankeyChart"})," component visualizes flow between nodes as a Sankey diagram\nwhere the width of each link is proportional to the flow value:"]}),"\n",(0,t.jsx)(g,{data:u.SankeyChartDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"reorder-pills-in-multiselect-and-tagsinput",children:"Reorder pills in MultiSelect and TagsInput"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(f.a,{href:"/core/tags-input",children:"TagsInput"})," now support reordering\nselected pills. Set the new ",(0,t.jsx)(f.code,{children:"withPillsReorder"})," prop to enable it. Pills can be reordered with\na mouse (drag-and-drop) or keyboard:"]}),"\n",(0,t.jsxs)(f.ul,{children:["\n",(0,t.jsxs)(f.li,{children:["Pills are not part of the ",(0,t.jsx)(f.code,{children:"Tab"})," order. ",(0,t.jsx)(f.code,{children:"ArrowLeft"})," from the input (caret at start) moves\nfocus to the last pill."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.code,{children:"ArrowLeft"})," and ",(0,t.jsx)(f.code,{children:"ArrowRight"})," navigate between pills (RTL-aware). ",(0,t.jsx)(f.code,{children:"ArrowRight"})," on the last\npill returns focus to the input."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.code,{children:"Alt + ArrowLeft"})," and ",(0,t.jsx)(f.code,{children:"Alt + ArrowRight"})," reorder the focused pill (RTL-aware). Focus follows\nthe moved pill so chained moves work."]}),"\n"]}),"\n",(0,t.jsxs)(f.p,{children:["Reordering is automatically disabled when ",(0,t.jsx)(f.code,{children:"disabled"})," or ",(0,t.jsx)(f.code,{children:"readOnly"})," is set. Custom pill renderers\nreceive a ",(0,t.jsx)(f.code,{children:"reorderProps"})," payload that can be spread onto the pill element to keep reordering\nworking:"]}),"\n",(0,t.jsx)(g,{data:l.MultiSelectDemos.dragReorder}),"\n",(0,t.jsx)(f.h2,{id:"restrict-tree-drop-targets",children:"Restrict Tree drop targets"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," component now supports restricting drop targets with the new ",(0,t.jsx)(f.code,{children:"allowDrop"})," prop.\nThe callback receives ",(0,t.jsx)(f.code,{children:"{ draggedNode, targetNode, position }"})," and returning ",(0,t.jsx)(f.code,{children:"false"})," hides the drop\nindicator and rejects the drop, so users get proper visual feedback before releasing:"]}),"\n",(0,t.jsx)(g,{data:d.TreeDemos.dragDropAllow}),"\n",(0,t.jsx)(f.h2,{id:"tree-drag-handle",children:"Tree drag handle"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," component now supports restricting drag initiation to a dedicated handle with\nthe new ",(0,t.jsx)(f.code,{children:"withDragHandle"})," prop. The handle spreads ",(0,t.jsx)(f.code,{children:"dragHandleProps"})," from the ",(0,t.jsx)(f.code,{children:"renderNode"})," payload.\nThis is useful when a node contains interactive controls (inputs, buttons) that would otherwise\ninterfere with dragging:"]}),"\n",(0,t.jsx)(g,{data:d.TreeDemos.dragDropHandle}),"\n",(0,t.jsx)(f.h2,{id:"shared-default-props-for-all-inputs",children:"Shared default props for all inputs"}),"\n",(0,t.jsxs)(f.p,{children:["Default props set on ",(0,t.jsx)(f.code,{children:"Input"})," and ",(0,t.jsx)(f.code,{children:"Input.Wrapper"})," in ",(0,t.jsx)(f.code,{children:"theme.components"})," now cascade to every\ncomponent built on top of them (",(0,t.jsx)(f.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,t.jsx)(f.a,{href:"/core/textarea/",children:"Textarea"}),",\n",(0,t.jsx)(f.a,{href:"/core/number-input/",children:"NumberInput"}),", ",(0,t.jsx)(f.a,{href:"/core/select/",children:"Select"}),", ",(0,t.jsx)(f.a,{href:"/dates/date-input/",children:"DateInput"}),",\nand others). This makes it possible to apply shared ",(0,t.jsx)(f.code,{children:"size"}),", ",(0,t.jsx)(f.code,{children:"radius"}),", ",(0,t.jsx)(f.code,{children:"variant"}),", ",(0,t.jsx)(f.code,{children:"withAsterisk"}),"\nand other props to all inputs at once, while still overriding individual components with their\nown default props:"]}),"\n",(0,t.jsx)(g,{data:o.InputDemos.sharedDefaultProps}),"\n",(0,t.jsx)(f.h2,{id:"per-day-business-hours-in-weekview",children:"Per-day business hours in WeekView"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/schedule/week-view",children:"WeekView"})," ",(0,t.jsx)(f.code,{children:"businessHours"})," prop now accepts a per-day object keyed by day of\nthe week (",(0,t.jsx)(f.code,{children:"0"})," – Sunday, ",(0,t.jsx)(f.code,{children:"6"})," – Saturday) in addition to the shared ",(0,t.jsx)(f.code,{children:"[start, end]"})," tuple. Days\nmissing from the object or set to ",(0,t.jsx)(f.code,{children:"null"})," are rendered as fully outside business hours, making it\neasy to model partial workdays and non-working days:"]}),"\n",(0,t.jsx)(g,{data:h.WeekViewDemos.businessHoursPerDay})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(v,{...e,children:(0,t.jsx)(y,{...e})})}])},299384,(e,t,r)=>{let n="/changelog/9-2-0";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(81644)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var a in e)t(n,a,{get:e[a],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(317477),a=e.i(44091),i=e.i(391466),o=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},u=e.i(391398);let c=(0,r.createVarsResolver)((e,{radius:r,color:a,gradient:i,variant:o,size:l,autoContrast:s,circle:u})=>{let c=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:i,variant:o||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":u||void 0===r?void 0:(0,t.getRadius)(r),"--badge-bg":a||o?c.background:void 0,"--badge-color":a||o?c.color:void 0,"--badge-bd":a||o?c.border:void 0,"--badge-dot-color":"dot"===o?(0,n.getThemeColor)(a,e):void 0}}}),d=(0,o.polymorphicFactory)(e=>{let t=(0,a.useProps)("Badge",null,e),{classNames:r,className:n,style:o,styles:d,unstyled:m,vars:h,radius:f,color:p,gradient:g,leftSection:v,rightSection:y,children:b,variant:x,fullWidth:w,autoContrast:k,circle:M,mod:S,attributes:T,...D}=t,j=(0,i.useStyles)({name:"Badge",props:t,classes:s,className:n,style:o,classNames:r,styles:d,unstyled:m,attributes:T,vars:h,varsResolver:c});return(0,u.jsxs)(l.Box,{variant:x,mod:[{block:w,circle:M,"with-right-section":!!y,"with-left-section":!!v},S],...j("root",{variant:x}),...D,children:[v&&(0,u.jsx)("span",{...j("section"),"data-position":"left",children:v}),(0,u.jsx)("span",{...j("label"),children:b}),y&&(0,u.jsx)("span",{...j("section"),"data-position":"right",children:y})]})});d.classes=s,d.varsResolver=c,d.displayName="@mantine/core/Badge",e.s(["Badge",0,d],257177)},602227,e=>{"use strict";var t=e.i(57216);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,a,i;r=e,a=t,i=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{cacheSize:2e3,enableCache:!0}),a=new class{constructor(e){!function(e,t,r){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"cache",new Map),this.maxSize=e}get(e){var t=this.cache.get(e);return void 0!==t&&(this.cache.delete(e),this.cache.set(e,t)),t}set(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxSize){var r=this.cache.keys().next().value;null!=r&&this.cache.delete(r)}this.cache.set(e,t)}clear(){this.cache.clear()}size(){return this.cache.size}}(n.cacheSize),i={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},o="recharts_measurement_span",l=(e,t)=>{try{var r=document.getElementById(o);r||((r=document.createElement("span")).setAttribute("id",o),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),Object.assign(r.style,i,t),r.textContent="".concat(e);var n=r.getBoundingClientRect();return{width:n.width,height:n.height}}catch(e){return{width:0,height:0}}};e.s(["getStringSize",0,function(e){var r,i,o,s,u,c,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e||t.Global.isSsr)return{width:0,height:0};if(!n.enableCache)return l(e,d);var m=(r=d.fontSize||"",i=d.fontFamily||"",o=d.fontWeight||"",s=d.fontStyle||"",u=d.letterSpacing||"",c=d.textTransform||"","".concat(e,"|").concat(r,"|").concat(i,"|").concat(o,"|").concat(s,"|").concat(u,"|").concat(c)),h=a.get(m);if(h)return h;var f=l(e,d);return a.set(m,f),f}],602227)},221168,(e,t,r)=>{var n={675:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,i=s(e),o=i[0],l=i[1],u=new a((o+l)*3/4-l),c=0,d=l>0?o-4:o;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;return 2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[c++]=255&t),1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,a=n%3,i=[],o=0,l=n-a;o<l;o+=16383)i.push(function(e,t,n){for(var a,i=[],o=t;o<n;o+=3)a=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(r[a>>18&63]+r[a>>12&63]+r[a>>6&63]+r[63&a]);return i.join("")}(e,o,o+16383>l?l:o+16383));return 1===a?i.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===a&&i.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),i.join("")};for(var r=[],n=[],a="u">typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,l=i.length;o<l;++o)r[o]=i[o],n[i.charCodeAt(o)]=o;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n[45]=62,n[95]=63},72:function(e,t,r){"use strict";var n=r(675),a=r(783),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e){var n=e,a=t;if(("string"!=typeof a||""===a)&&(a="utf8"),!l.isEncoding(a))throw TypeError("Unknown encoding: "+a);var i=0|h(n,a),s=o(i),u=s.write(n,a);return u!==i&&(s=s.slice(0,u)),s}if(ArrayBuffer.isView(e))return d(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(E(e,ArrayBuffer)||e&&E(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(E(e,SharedArrayBuffer)||e&&E(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var c=e.valueOf&&e.valueOf();if(null!=c&&c!==e)return l.from(c,t,r);var f=function(e){if(l.isBuffer(e)){var t=0|m(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?o(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(f)return f;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return u(e),o(e<0?0:0|m(e))}function d(e){for(var t=e.length<0?0:0|m(e.length),r=o(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!l.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(u(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},l.allocUnsafe=function(e){return c(e)},l.allocUnsafeSlow=function(e){return c(e)};function m(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function h(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||E(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return T(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return j(e).length;default:if(a)return n?-1:T(e).length;t=(""+t).toLowerCase(),a=!0}}function f(e,t,r){var a,i,o,l=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var a="",i=t;i<r;++i)a+=_[e[i]];return a}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(e[a]);return n}(this,t,r);case"base64":return a=this,i=t,o=r,0===i&&o===a.length?n.fromByteArray(a):n.fromByteArray(a.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),a="",i=0;i<n.length;i+=2)a+=String.fromCharCode(n[i]+256*n[i+1]);return a}(this,t,r);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function p(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,a){var i;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(i=r*=1)!=i&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(a)return -1;else r=e.length-1;else if(r<0)if(!a)return -1;else r=0;if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,a);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(a)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return v(e,[t],r,n,a)}throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,a){var i,o=1,l=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,l/=2,s/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){var c=-1;for(i=r;i<l;i++)if(u(e,i)===u(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===s)return c*o}else -1!==c&&(i-=i-c),c=-1}else for(r+s>l&&(r=l-s),i=r;i>=0;i--){for(var d=!0,m=0;m<s;m++)if(u(e,i+m)!==u(t,m)){d=!1;break}if(d)return i}return -1}l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(E(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),E(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,a=0,i=Math.min(r,n);a<i;++a)if(e[a]!==t[a]){r=e[a],n=t[a];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=l.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(E(i,Uint8Array)&&(i=l.from(i)),!l.isBuffer(i))throw TypeError('"list" argument must be an Array of Buffers');i.copy(n,a),a+=i.length}return n},l.byteLength=h,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)p(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)p(this,t,t+3),p(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)p(this,t,t+7),p(this,t+1,t+6),p(this,t+2,t+5),p(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):f.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,a){if(E(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||r>e.length||n<0||a>this.length)throw RangeError("out of range index");if(n>=a&&t>=r)return 0;if(n>=a)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var i=a-n,o=r-t,s=Math.min(i,o),u=this.slice(n,a),c=e.slice(t,r),d=0;d<s;++d)if(u[d]!==c[d]){i=u[d],o=c[d];break}return i<o?-1:+(o<i)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)};function y(e,t,r){r=Math.min(e.length,r);for(var n=[],a=t;a<r;){var i,o,l,s,u=e[a],c=null,d=u>239?4:u>223?3:u>191?2:1;if(a+d<=r)switch(d){case 1:u<128&&(c=u);break;case 2:(192&(i=e[a+1]))==128&&(s=(31&u)<<6|63&i)>127&&(c=s);break;case 3:i=e[a+1],o=e[a+2],(192&i)==128&&(192&o)==128&&(s=(15&u)<<12|(63&i)<<6|63&o)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:i=e[a+1],o=e[a+2],l=e[a+3],(192&i)==128&&(192&o)==128&&(192&l)==128&&(s=(15&u)<<18|(63&i)<<12|(63&o)<<6|63&l)>65535&&s<1114112&&(c=s)}null===c?(c=65533,d=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),a+=d}var m=n,h=m.length;if(h<=4096)return String.fromCharCode.apply(String,m);for(var f="",p=0;p<h;)f+=String.fromCharCode.apply(String,m.slice(p,p+=4096));return f}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,a,i){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function w(e,t,r,n,a,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function k(e,t,r,n,i){return t*=1,r>>>=0,i||w(e,t,r,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,r,n,23,4),r+4}function M(e,t,r,n,i){return t*=1,r>>>=0,i||w(e,t,r,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,r,n,52,8),r+8}l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a,i,o,l,s,u,c,d,m=this.length-t;if((void 0===r||r>m)&&(r=m),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;var i=t.length;n>i/2&&(n=i/2);for(var o=0;o<n;++o){var l,s=parseInt(t.substr(2*o,2),16);if((l=s)!=l)break;e[r+o]=s}return o}(this,e,t,r);case"utf8":case"utf-8":return a=t,i=r,A(T(e,this.length-a),this,a,i);case"ascii":return o=t,l=r,A(D(e),this,o,l);case"latin1":case"binary":return function(e,t,r,n){return A(D(t),e,r,n)}(this,e,t,r);case"base64":return s=t,u=r,A(j(e),this,s,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,d=r,A(function(e,t){for(var r,n,a=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,a.push(r%256),a.push(n);return a}(e,this.length-c),this,c,d);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n},l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},l.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=t,a=1,i=this[e+--n];n>0&&(a*=256);)i+=this[e+--n]*a;return i>=(a*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),a.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),a.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),a.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),a.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;x(this,e,t,r,a,0)}var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var a=Math.pow(2,8*r)-1;x(this,e,t,r,a,0)}var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);x(this,e,t,r,a-1,-a)}var i=0,o=1,l=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===l&&0!==this[t+i-1]&&(l=1),this[t+i]=(e/o|0)-l&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var a=Math.pow(2,8*r-1);x(this,e,t,r,a-1,-a)}var i=r-1,o=1,l=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===l&&0!==this[t+i+1]&&(l=1),this[t+i]=(e/o|0)-l&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var a=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var i=a-1;i>=0;--i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return a},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var a,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=l.isBuffer(e)?e:l.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var S=/[^+/0-9A-Za-z-_]/g;function T(e,t){t=t||1/0;for(var r,n=e.length,a=null,i=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!a){if(r>56319||o+1===n){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function D(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function j(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function A(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length)&&!(a>=e.length);++a)t[a+r]=e[a];return a}function E(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var _=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,a=0;a<16;++a)t[n+a]=e[r]+e[a];return t}()},783:function(e,t){t.read=function(e,t,r,n,a){var i,o,l=8*a-n-1,s=(1<<l)-1,u=s>>1,c=-7,d=r?a-1:0,m=r?-1:1,h=e[t+d];for(d+=m,i=h&(1<<-c)-1,h>>=-c,c+=l;c>0;i=256*i+e[t+d],d+=m,c-=8);for(o=i&(1<<-c)-1,i>>=-c,c+=n;c>0;o=256*o+e[t+d],d+=m,c-=8);if(0===i)i=1-u;else{if(i===s)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,n),i-=u}return(h?-1:1)*o*Math.pow(2,i-n)},t.write=function(e,t,r,n,a,i){var o,l,s,u=8*i-a-1,c=(1<<u)-1,d=c>>1,m=5960464477539062e-23*(23===a),h=n?0:i-1,f=n?1:-1,p=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+d>=1?t+=m/s:t+=m*Math.pow(2,1-d),t*s>=2&&(o++,s/=2),o+d>=c?(l=0,o=c):o+d>=1?(l=(t*s-1)*Math.pow(2,a),o+=d):(l=t*Math.pow(2,d-1)*Math.pow(2,a),o=0));a>=8;e[r+h]=255&l,h+=f,l/=256,a-=8);for(o=o<<a|l,u+=a;u>0;e[r+h]=255&o,h+=f,o/=256,u-=8);e[r+h-f]|=128*p}}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}},o=!0;try{n[e](r,r.exports,i),o=!1}finally{o&&delete a[e]}return r.exports}i.ab="/ROOT/node_modules/next/dist/compiled/buffer/",t.exports=i(72)},133180,e=>{"use strict";e.s(["getSeriesLabels",0,function(e){return e?e.reduce((e,t)=>{let r=t.name.search(/\./);return r>=0?e[t.name.substring(r+1)]=t.label:e[t.name]=t.label,e},{}):{}}])},520916,e=>{"use strict";var t=e.i(133180),r={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"},n=e.i(232471),a=e.i(275519),i=e.i(317477),o=e.i(951254),l=e.i(44091),s=e.i(391466),u=e.i(391398);function c(e,t){let r=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let r=e.name.substring(0,t),n={...e.payload[r]},a=Object.entries(e.payload).reduce((e,t)=>{let[n,a]=t;return n===r?e:{...e,[n]:a}},{});return{...e,name:e.name.substring(t+1),payload:{...a,...n}}}return e});if(null==t)return r;if("number"==typeof t){let e=r[t];return e?[e]:[]}return r.filter(e=>e.name===t)}function d(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let m={type:"area",showColor:!0},h=(0,a.factory)(e=>{let a=(0,l.useProps)("ChartTooltip",m,e),{classNames:h,className:f,style:p,styles:g,unstyled:v,vars:y,payload:b,label:x,unit:w,type:k,segmentId:M,mod:S,series:T,valueFormatter:D,showColor:j,attributes:A,...E}=a,_=(0,o.useMantineTheme)(),C=(0,s.useStyles)({name:"ChartTooltip",classes:r,props:a,className:f,style:p,classNames:h,styles:g,unstyled:v,attributes:A});if(!b)return null;let P=c(b,M),I="scatter"===k?b[0]?.payload?.name:null,V=(0,t.getSeriesLabels)(T),O=x||I,L=P.map((e,t)=>(0,u.jsxs)("div",{"data-type":k,...C("tooltipItem"),children:[(0,u.jsxs)("div",{...C("tooltipItemBody"),children:[j&&(0,u.jsx)("svg",{...C("tooltipItemColor"),children:(0,u.jsx)("circle",{r:6,fill:(0,i.getThemeColor)(e.color,_),width:12,height:12,cx:6,cy:6})}),(0,u.jsx)("div",{...C("tooltipItemName"),children:V[e.name]||e.name})]}),(0,u.jsxs)("div",{...C("tooltipItemData"),children:["function"==typeof D?D(d(e,k)):d(e,k),w||e.unit]})]},e?.key??`${e.name}-${t}`));return(0,u.jsxs)(n.Box,{...C("tooltip"),mod:[{type:k},S],...E,children:[O&&(0,u.jsx)("div",{...C("tooltipLabel"),children:O}),(0,u.jsx)("div",{...C("tooltipBody"),children:L})]})});h.displayName="@mantine/charts/ChartTooltip",e.s(["ChartTooltip",0,h,"getFilteredChartTooltipPayload",0,c],520916)},931882,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,a],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},414124,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="DotsSixVerticalIcon",e.s(["DotsSixVerticalIcon",0,a],414124)},328940,e=>{"use strict";var t=e.i(779177),r=e.i(433512),n=e.i(312773),a=e.i(481178),i=e.i(317477),o=e.i(44091),l=e.i(391466),s=e.i(275519),u=e.i(323283),c=e.i(55383),d=e.i(585968),m=e.i(782814),h=e.i(130624),f=e.i(23168),p=e.i(635961),g=e.i(846711),v=e.i(178372),y=e.i(229737),b=e.i(504297),x=e.i(191788),w=e.i(852361),k=e.i(332977),M=e.i(502315),S=e.i(579560),T=e.i(391398);let D=(0,a.createVarsResolver)((e,{size:n,color:a,thumbSize:o,radius:l})=>({root:{"--slider-size":(0,r.getSize)(n,"slider-size"),"--slider-color":a?(0,i.getThemeColor)(a,e):void 0,"--slider-radius":void 0===l?void 0:(0,r.getRadius)(l),"--slider-thumb-size":void 0!==o?(0,t.rem)(o):"calc(var(--slider-size) * 2)"}})),j={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},A=(0,s.factory)(e=>{let t=(0,o.useProps)("RangeSlider",j,e),{classNames:r,styles:a,value:i,onChange:s,onChangeEnd:A,size:E,min:_,max:C,domain:P,minRange:I,maxRange:V,step:O,precision:L,defaultValue:R,name:H,marks:z,label:Y,labelTransitionProps:F,labelAlwaysOn:N,thumbFromLabel:B,thumbToLabel:Z,thumbValueText:W,showLabelOnHover:$,thumbChildren:U,disabled:K,unstyled:G,scale:X,inverted:J,orientation:q,className:Q,style:ee,vars:et,hiddenInputProps:er,restrictToMarks:en,thumbProps:ea,pushOnOverlap:ei,attributes:eo,ref:el,...es}=t,eu=(0,l.useStyles)({name:"RangeSlider",props:t,classes:b.default,classNames:r,className:Q,styles:a,style:ee,attributes:eo,vars:et,varsResolver:D,unstyled:G}),ec=(0,x.useRef)(null),{dir:ed}=(0,u.useDirection)(),[em,eh]=(0,x.useState)(-1),[ef,ep]=(0,x.useState)(!1),[eg,ev]=(0,S.useUncontrolled)({value:i,defaultValue:R,finalValue:[_,C],onChange:s}),ey=(0,x.useRef)(eg),eb=(0,x.useRef)([]),ex=(0,x.useRef)(null),ew=(0,x.useRef)(void 0),[ek,eM]=P||[_,C],eS=[(0,h.getPosition)({value:eg[0],min:ek,max:eM}),(0,h.getPosition)({value:eg[1],min:ek,max:eM})],eT=L??(0,v.getPrecision)(O);(0,x.useEffect)(()=>{Array.isArray(i)&&(ey.current=i)},Array.isArray(i)?[i[0],i[1]]:[null,null]);let eD=(e,t,r)=>{if(-1===t)return;let a=[...ey.current];if(en&&z){let r=(0,n.findClosestNumber)(e,z.map(e=>e.value)),i=a[t];a[t]=r;let o=+(0===t),l=(0,y.getLastMarkValue)(z),s=(0,y.getFirstMarkValue)(z);r===l&&a[o]===l||r===s&&a[o]===s?a[t]=i:r===a[o]&&(i>a[o]?a[o]=(0,y.getPreviousMarkValue)(r,z):a[o]=(0,y.getNextMarkValue)(r,z))}else{let r=(0,w.clamp)(e,_,C);a[t]=r,0===t&&(r>a[1]-(I-1e-9)&&(ei?a[1]=Math.min(e+I,C):a[t]=ey.current[t]),r>(C-(I-1e-9)||_)&&(a[t]=ey.current[t]),a[1]-e>V&&(ei?a[1]=e+V:a[t]=ey.current[t])),1===t&&(r<a[0]+I&&(ei?a[0]=Math.max(e-I,_):a[t]=ey.current[t]),r<a[0]+I&&(a[t]=ey.current[t]),r-a[0]>V&&(ei?a[0]=e-V:a[t]=ey.current[t]))}if(a[0]=(0,g.getFloatingValue)(a[0],eT),a[1]=(0,g.getFloatingValue)(a[1],eT),a[0]>a[1]){let e=a[0];a[0]=a[1],a[1]=e}ev(a),ey.current=a,r&&A?.(ey.current)},{ref:ej,active:eA}=(0,M.useMove)(({x:e,y:t})=>{var r;return r="vertical"===q?1-t:e,void(!K&&void 0!==ew.current&&eD((0,p.getChangeValue)({value:r,min:ek,max:eM,step:O,precision:eT}),ew.current,!1))},{onScrubEnd:()=>!K&&A?.(ey.current)},ed),eE=e=>{if(ec.current){ec.current.focus();let t=ec.current.getBoundingClientRect(),r=function(e,t){if("TouchEvent"in window&&e instanceof window.TouchEvent){let r=e.touches[0];return"vertical"===t?r.clientY:r.clientX}return"vertical"===t?e.clientY:e.clientX}(e.nativeEvent,q),n="vertical"===q?(0,p.getChangeValue)({value:t.bottom-r,max:C,min:_,step:O,containerWidth:t.height}):(0,p.getChangeValue)({value:r-t.left,max:C,min:_,step:O,containerWidth:t.width}),a=+(Math.abs(eg[0]-n)>Math.abs(eg[1]-n));ew.current="vertical"===q||"ltr"===ed?a:+(1!==a)}},e_=()=>1!==em&&0!==em?(eh(0),0):em,eC={max:C,min:_,size:E,labelTransitionProps:F,labelAlwaysOn:N,orientation:q,onBlur:()=>eh(-1)},eP=Array.isArray(U);return(0,T.jsx)(c.SliderProvider,{value:{getStyles:eu},children:(0,T.jsxs)(d.SliderRoot,{...es,size:E,ref:(0,k.useMergedRef)(el,ex),disabled:K,orientation:q,onMouseDownCapture:()=>ex.current?.focus(),onKeyDownCapture:()=>{eb.current[0]?.parentElement?.contains(document.activeElement)||eb.current[0]?.focus()},children:[(0,T.jsxs)(f.Track,{offset:eS[0],marksOffset:eg[0],filled:eS[1]-eS[0],marks:z,inverted:J,min:ek,max:eM,value:eg[1],disabled:K,containerProps:{ref:(0,k.useMergedRef)(ec,ej),onMouseEnter:$?()=>ep(!0):void 0,onMouseLeave:$?()=>ep(!1):void 0,onTouchStartCapture:eE,onTouchEndCapture:()=>{ew.current=-1},onMouseDownCapture:eE,onMouseUpCapture:()=>{ew.current=-1},onKeyDownCapture:e=>{if(!K)switch(e.key){case"ArrowUp":{e.preventDefault();let t=e_();eb.current[t].focus();let r=en&&z?(0,y.getNextMarkValue)(ey.current[t],z):Math.min(Math.max(ey.current[t]+O,ek),eM);eD((0,g.getFloatingValue)(r,eT),t,!0);break}case"ArrowRight":{e.preventDefault();let t=e_();eb.current[t].focus();let r=en&&z?("rtl"===ed?y.getPreviousMarkValue:y.getNextMarkValue)(ey.current[t],z):Math.min(Math.max("rtl"===ed?ey.current[t]-O:ey.current[t]+O,ek),eM);eD((0,g.getFloatingValue)(r,eT),t,!0);break}case"ArrowDown":{e.preventDefault();let t=e_();eb.current[t].focus();let r=en&&z?(0,y.getPreviousMarkValue)(ey.current[t],z):Math.min(Math.max(ey.current[t]-O,ek),eM);eD((0,g.getFloatingValue)(r,eT),t,!0);break}case"ArrowLeft":{e.preventDefault();let t=e_();eb.current[t].focus();let r=en&&z?("rtl"===ed?y.getNextMarkValue:y.getPreviousMarkValue)(ey.current[t],z):Math.min(Math.max("rtl"===ed?ey.current[t]+O:ey.current[t]-O,ek),eM);eD((0,g.getFloatingValue)(r,eT),t,!0)}}}},children:[(0,T.jsx)(m.Thumb,{...eC,value:X(eg[0]),position:eS[0],dragging:eA,label:"function"==typeof Y?Y((0,g.getFloatingValue)(X(eg[0]),eT)):Y,ref:e=>{e&&(eb.current[0]=e)},thumbLabel:B,thumbValueText:W,onMouseDown:()=>void(ew.current=0),onFocus:()=>eh(0),showLabelOnHover:$,isHovered:ef,disabled:K,...ea?.(0),children:eP?U[0]:U}),(0,T.jsx)(m.Thumb,{...eC,thumbLabel:Z,value:X(eg[1]),position:eS[1],dragging:eA,label:"function"==typeof Y?Y((0,g.getFloatingValue)(X(eg[1]),eT)):Y,ref:e=>{e&&(eb.current[1]=e)},thumbValueText:W,onMouseDown:()=>void(ew.current=1),onFocus:()=>eh(1),showLabelOnHover:$,isHovered:ef,disabled:K,...ea?.(1),children:eP?U[1]:U})]}),(0,T.jsx)("input",{type:"hidden",name:`${H}_from`,value:eg[0],...er}),(0,T.jsx)("input",{type:"hidden",name:`${H}_to`,value:eg[1],...er})]})})});A.classes=b.default,A.varsResolver=D,A.displayName="@mantine/core/RangeSlider",e.s(["RangeSlider",0,A],328940)},420759,e=>{"use strict";var t=e.i(779177),r=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:n,...a}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,t.rem)(e),height:(0,t.rem)(e),...n},"aria-hidden":!0,...a,children:(0,r.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},823439,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="TrashIcon",e.s(["TrashIcon",0,a],823439)},509637,e=>{"use strict";var t=e.i(191788);let r={9:/[0-9]/,a:/[A-Za-z]/,A:/[A-Z]/,"*":/[A-Za-z0-9]/,"#":/[-+0-9]/};function n(e,t,r,n){let a="",i=0,o=0;for(o=0;o<t.length;o++){let r=t[o];if("literal"===r.type)a+=r.char;else if(i<e.length){let t=n?n(e[i]):e[i];r.pattern&&r.pattern.test(t)?(a+=t,i++):(i++,o--)}else break}return a}function a(e,t,r,n){if(!n)return e;let a=e;for(let n=e.length;n<t.length;n++){let e=t[n];if("literal"===e.type)a+=e.char;else{var i;let e=(i=n,null===r||""===r||void 0===r?"":r.length>1?r[i]||"_":r);if(!e)break;a+=e}}return a}function i(e,t){let r="";for(let n=0;n<e.length&&n<t.length;n++)"token"===t[n].type&&(r+=e[n]);return r}function o(e,t){for(let r=0;r<t.length;r++)if("token"===t[r].type&&!t[r].optional&&(r>=e.length||!t[r].pattern.test(e[r])))return!1;return!0}function l(e,t){for(let r=t;r<e.length;r++)if("token"===e[r].type)return r;return e.length}function s(e,t,r){let n="",a=0;for(let r=0;r<t.length&&a<=e.length;r++){let i=t[r];if("literal"===i.type){n+=i.char,a<e.length&&e[a]===i.char&&a++;continue}if(a>=e.length)break;for(;a<e.length;){let t=e[a];if(a++,i.pattern.test(t)){n+=t;break}}if(n.length<=r)break}return n}function u(e,t){let n={...r,...e.tokens},a=e.mask,i=void 0===e.slotChar?"_":e.slotChar,o=e.separate??!1;if(e.modify){let r=e.modify(t);r&&(void 0!==r.mask&&(a=r.mask),void 0!==r.tokens&&Object.assign(n,r.tokens),void 0!==r.slotChar&&(i=r.slotChar),void 0!==r.separate&&(o=r.separate))}return{slots:function(e,t){if(Array.isArray(e))return e.map(e=>e instanceof RegExp?{type:"token",char:"_",pattern:e}:{type:"literal",char:e});let r=[],n=!1;for(let a=0;a<e.length;a++){let i=e[a];if("\\"===i&&a+1<e.length){a++,r.push({type:"literal",char:e[a]});continue}if("?"===i){n=!0;continue}t[i]?r.push({type:"token",char:i,pattern:t[i],optional:n}):r.push({type:"literal",char:i,optional:n})}return r}(a,n),slotChar:i,separate:o,tokens:n,transform:e.transform}}function c(e,t,r){let n=e;for(;n<t.length&&n<r.length&&t[n]&&"literal"===t[n].type;)n++;return n}e.s(["useMask",0,function(e){let r=(0,t.useRef)(e);r.current=e;let d=(0,t.useRef)(null),[m,h]=(0,t.useState)(""),[f,p]=(0,t.useState)(""),g=(0,t.useRef)(""),v=(0,t.useRef)(""),y=(0,t.useRef)(""),b=(0,t.useRef)(!1),x=(0,t.useRef)(!1),w=(0,t.useRef)([]),k=(0,t.useRef)([]),M=(0,t.useCallback)(()=>u(r.current,f),[f]),S=(0,t.useCallback)(({reprocessed:e,newRaw:t,displayValue:n,resolvedSlots:a,cursorPos:i,notifyChange:l})=>{let s=r.current;if(g.current=e,v.current=n,y.current=t,h(n),p(t),d.current&&(d.current.value=n,void 0!==i&&document.activeElement===d.current)){let t=Math.min(i,e.length);d.current.setSelectionRange(t,t)}l&&s.onChangeRaw&&s.onChangeRaw(t,n);let u=o(e,a);l&&u&&!b.current&&s.onComplete&&s.onComplete(n,t),b.current=u},[]),T=(0,t.useCallback)((e,t)=>{let n=r.current,{slots:o}=u(n,i(e,u(n,"").slots)),{slots:l,slotChar:c}=u(n,i(e,o)),d=s(e,l,c),m=i(d,l),h=n.alwaysShowMask||x.current,f=!1!==n.showMaskOnFocus,p=a(d,l,c,h&&(f||d.length>0));return S({reprocessed:d,newRaw:m,displayValue:p,resolvedSlots:l,cursorPos:t,notifyChange:!0}),{displayValue:p,newRaw:m,reprocessed:d,resolvedSlots:l}},[S,M]),D=(0,t.useCallback)(e=>{let t=r.current;if(!e.value)return!1;let{slots:n,slotChar:o}=u(t,""),{slots:l,slotChar:c}=u(t,i(s(e.value,n,o),n)),d=s(e.value,l,c),m=i(d,l),h=t.alwaysShowMask||x.current,f=!1!==t.showMaskOnFocus,p=a(d,l,c,h&&(f||d.length>0));return S({reprocessed:d,newRaw:m,displayValue:p,resolvedSlots:l,notifyChange:!1}),!0},[S]),j=(0,t.useCallback)(()=>{let e=d.current?.selectionStart??y.current.length,t={rawValue:y.current,selectionStart:e},r=w.current,n=r[r.length-1];n&&n.rawValue===t.rawValue&&n.selectionStart===t.selectionStart||(r.push(t),r.length>100&&r.shift(),k.current=[])},[]),A=(0,t.useCallback)(e=>{let{slots:t,slotChar:a,transform:i}=u(r.current,e.rawValue);T(n(e.rawValue,t,a,i),e.selectionStart)},[T]),E=(0,t.useCallback)(e=>{let t=e.target,{slots:a,slotChar:o,transform:l}=u(r.current,""),s=v.current,c=t.value,d=0,m=Math.min(s.length,c.length);for(;d<m&&s[d]===c[d];)d++;let h=0,f=Math.min(s.length-d,c.length-d);for(;h<f&&s[s.length-1-h]===c[c.length-1-h];)h++;let p=c.slice(d,c.length-h),g=s.length-h,y=i(s.slice(0,d),a.slice(0,d)),b=n(y+p+i(s.slice(g),a.slice(g)),a,o,l),x=n(y+p,a,o,l);b!==s&&j(),T(b,x.length)},[j,T]),_=(0,t.useCallback)(e=>{let t=e.selectionStart??0;if(t!==(e.selectionEnd??0))return;let{slots:n}=u(r.current,""),a=g.current,i=a.length>0?c(a.length,n,a):l(n,0),o=l(n,0);(t>i||t<o)&&e.setSelectionRange(i,i)},[]),C=(0,t.useCallback)(()=>{x.current=!0;let e=r.current,t=d.current;if(!t)return;let{slots:n,slotChar:i}=u(e,""),o=!1!==e.showMaskOnFocus,l=g.current;if(o||e.alwaysShowMask){let e=a(l,n,i,!0);t.value=e,v.current=e,h(e)}requestAnimationFrame(()=>{t===document.activeElement&&_(t)})},[_]),P=(0,t.useCallback)(()=>{let e=d.current;e&&e===document.activeElement&&_(e)},[_]),I=(0,t.useCallback)(()=>{let e=d.current;e&&requestAnimationFrame(()=>{if(e!==document.activeElement)return;let t=e.selectionStart??0;if(t!==(e.selectionEnd??0))return;let{slots:n}=u(r.current,""),a=g.current,i=a.length>0?c(a.length,n,a):l(n,0);t>i&&e.setSelectionRange(i,i)})},[]),V=(0,t.useCallback)(()=>{x.current=!1;let e=r.current,t=d.current;if(!t)return;let{slots:n,slotChar:l}=u(e,f),c=a(g.current,n,l,!0),m=t.value===c?g.current:s(t.value,n,l),w=o(m,n);if(e.autoClear&&!w&&m.length>0){if(t.value="",g.current="",v.current="",y.current="",h(""),p(""),b.current=!1,e.onChangeRaw&&e.onChangeRaw("",""),e.alwaysShowMask){let e=a("",n,l,!0);t.value=e,v.current=e,h(e)}return}if(!e.alwaysShowMask&&!w){if(0===i(m,n).length){t.value="",g.current="",v.current="",y.current="",h(""),p(""),b.current=!1,e.onChangeRaw&&e.onChangeRaw("","");return}let r=a(m,n,l,!1);t.value=r,v.current=r,h(r)}},[f]),O=(0,t.useCallback)(e=>{let t=e.target,{slots:a,slotChar:o,transform:l}=u(r.current,f),s=t.selectionStart??0,d=t.selectionEnd??0,m=g.current,h=e.metaKey||e.ctrlKey&&!e.altKey,p=e.key.toLowerCase();if(h&&"z"===p&&!e.shiftKey){e.preventDefault();let r=w.current.pop();if(!r)return;k.current.push({rawValue:y.current,selectionStart:t.selectionStart??0}),A(r);return}if(h&&("z"===p&&e.shiftKey||"y"===p&&!e.shiftKey)){e.preventDefault();let r=k.current.pop();if(!r)return;w.current.push({rawValue:y.current,selectionStart:t.selectionStart??0}),A(r);return}if("Backspace"===e.key){if(e.preventDefault(),e.metaKey||e.ctrlKey&&!e.altKey){let e=Math.min(s,m.length),t=n(i(m.slice(e),a.slice(e)),a,o,l);j(),T(t,0);return}if(s!==d){let e=Math.min(d,m.length),t=m.slice(0,s),r=i(m.slice(e),a.slice(e)),u=n(i(t,a)+r,a,o,l);j(),T(u,s);return}if(0===s)return;let t=s-1;for(;t>=0&&a[t]&&"literal"===a[t].type;)t--;if(t<0)return;let r=n(i(m.slice(0,t),a.slice(0,t))+i(m.slice(t+1),a.slice(t+1)),a,o,l);j(),T(r,t)}else if("Delete"===e.key){if(e.preventDefault(),s!==d){let e=Math.min(d,m.length),t=m.slice(0,s),r=i(m.slice(e),a.slice(e)),u=n(i(t,a)+r,a,o,l);j(),T(u,s);return}let t=s;for(;t<a.length&&a[t]&&"literal"===a[t].type;)t++;if(t>=m.length)return;let r=n(i(m.slice(0,s),a.slice(0,s))+i(m.slice(t+1),a.slice(t+1)),a,o,l);j(),T(r,s)}else if("ArrowRight"!==e.key||e.shiftKey){if("ArrowLeft"!==e.key||e.shiftKey){if(1===e.key.length&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();let t=Math.min(s,m.length);for(;t<a.length&&a[t]&&"literal"===a[t].type;)t++;if(t>=a.length)return;let r=a[t],u=l?l(e.key):e.key;if(!r.pattern.test(u))return;let h=n(i(m.slice(0,t),a.slice(0,t))+u+(s<d?i(m.slice(Math.min(d,m.length)),a.slice(Math.min(d,m.length))):i(m.slice(t),a.slice(t))),a,o,l),f=c(t+1,a,h);j(),T(h,f)}}else if(s>0){let r=function(e,t){for(let r=t;r>=0;r--)if("token"===e[r].type)return r;return -1}(a,s-1);r>=0&&r!==s-1&&(e.preventDefault(),t.setSelectionRange(r+1,r+1))}}else{let r=c(s+1,a,t.value);r!==s+1&&(e.preventDefault(),t.setSelectionRange(r,r))}},[A,j,f,T]),L=(0,t.useCallback)(e=>{e.preventDefault();let t=e.target,a=r.current,o=e.clipboardData?.getData("text")??"",l=t.selectionStart??0,s=t.selectionEnd??0,c=g.current,{slots:d,slotChar:m,transform:h}=u(a,""),f=Math.min(l,c.length),p=Math.min(s,c.length),v=i(c.slice(0,f),d.slice(0,f)),y=n(v+o+i(c.slice(p),d.slice(p)),d,m,h);j(),T(y);let b=Math.min(n(v+o,d,m,h).length,d.length);t===document.activeElement&&t.setSelectionRange(b,b)},[j,T]),R=(0,t.useCallback)(e=>{r.current.invalid?e.setAttribute("aria-invalid","true"):e.removeAttribute("aria-invalid")},[]),H=(0,t.useCallback)(t=>{let r=d.current;if(r&&(r.removeEventListener("input",E),r.removeEventListener("focus",C),r.removeEventListener("blur",V),r.removeEventListener("mousedown",I),r.removeEventListener("mouseup",P),r.removeEventListener("keydown",O),r.removeEventListener("paste",L)),d.current=t,t){t.addEventListener("input",E),t.addEventListener("focus",C),t.addEventListener("blur",V),t.addEventListener("mousedown",I),t.addEventListener("mouseup",P),t.addEventListener("keydown",O),t.addEventListener("paste",L),R(t);let r=D(t);if(e.alwaysShowMask&&!r){let{slots:r,slotChar:n}=u(e,""),i=a("",r,n,!0);t.value=i,v.current=i,h(i)}}},[E,C,V,I,P,O,L,D,R,e]);return(0,t.useEffect)(()=>{let e=d.current;e&&R(e)},[e.invalid,R]),{ref:H,value:m,rawValue:f,isComplete:(()=>{let{slots:e}=M();return o(g.current,e)})(),reset:(0,t.useCallback)(()=>{let e=r.current,t=d.current;if(g.current="",v.current="",y.current="",w.current=[],k.current=[],h(""),p(""),b.current=!1,t)if(e.alwaysShowMask){let{slots:r,slotChar:n}=u(e,""),i=a("",r,n,!0);t.value=i,v.current=i,h(i)}else t.value="";e.onChangeRaw&&e.onChangeRaw("","")},[])}}])},647114,e=>{"use strict";var t=e.i(44091),r=e.i(275519),n=e.i(586488),a=e.i(332977),i=e.i(509637),o=e.i(391398);let l={},s=(0,r.factory)(e=>{let{maskRef:r,elementProps:s}=function(e){let{mask:t,tokens:r,modify:n,separate:o,slotChar:l,alwaysShowMask:s,showMaskOnFocus:u,transform:c,autoClear:d,onChangeRaw:m,onComplete:h,beforeMaskedStateChange:f,resetRef:p,ref:g,...v}=e,{ref:y,reset:b}=(0,i.useMask)({mask:t,tokens:r,modify:n,separate:o,slotChar:l,alwaysShowMask:s,showMaskOnFocus:u,transform:c,autoClear:d,onChangeRaw:m,onComplete:h,beforeMaskedStateChange:f});return(0,a.assignRef)(p,b),{maskRef:(0,a.useMergedRef)(g,y),elementProps:v}}((0,t.useProps)(["Input","InputWrapper","MaskInput"],l,e));return(0,o.jsx)(n.InputBase,{component:"input",ref:r,...s,__staticSelector:"MaskInput"})});s.classes=n.InputBase.classes,s.displayName="@mantine/core/MaskInput",e.s(["MaskInput",0,s],647114)},463044,e=>{"use strict";let t;var r=e.i(191788),n=e.i(730943);function a(e,t,r){let n,a=r.initialDeps??[],i=!0;function o(){let o=e();return(o.length!==a.length||o.some((e,t)=>a[t]!==e))&&(a=o,n=t(...o),(null==r?void 0:r.onChange)&&!(i&&r.skipInitialOnChange)&&r.onChange(n),i=!1),n}return o.updateDeps=e=>{a=e},o}function i(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let o=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},l=e=>{let{offsetWidth:t,offsetHeight:r}=e;return{width:t,height:r}},s=e=>e,u=e=>{let t=Math.max(e.startIndex-e.overscan,0),r=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,n=Array(r);for(let e=0;e<r;e++)n[e]=t+e;return n},c=(e,t)=>{let r=e.scrollElement;if(!r)return;let n=e.targetWindow;if(!n)return;let a=e=>{let{width:r,height:n}=e;t({width:Math.round(r),height:Math.round(n)})};if(a(l(r)),!n.ResizeObserver)return()=>{};let i=new n.ResizeObserver(t=>{let n=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void a({width:t.inlineSize,height:t.blockSize})}a(l(r))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()});return i.observe(r,{box:"border-box"}),()=>{i.unobserve(r)}},d={passive:!0},m="u"<typeof window||"onscrollend"in window,h=(e,t)=>((e,t,r)=>{var n,a;let i,o=e.scrollElement;if(!o)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&m,u=0,c=s?null:(n=()=>t(u,!1),a=e.options.isScrollingResetDelay,function(...e){l.clearTimeout(i),i=l.setTimeout(()=>n.apply(this,e),a)}),h=e=>()=>{u=r(o),null==c||c(),t(u,e)},f=h(!0),p=h(!1);return o.addEventListener("scroll",f,d),s&&o.addEventListener("scrollend",p,d),()=>{o.removeEventListener("scroll",f),s&&o.removeEventListener("scrollend",p)}})(e,t,t=>{let{horizontal:r,isRtl:n}=e.options;return r?t.scrollLeft*(n&&-1||1):t.scrollTop}),f=(e,t,r)=>{if(r.options.useCachedMeasurements){let t=r.indexFromElement(e),n=r.options.getItemKey(t);return r.itemSizeCache.get(n)??r.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=r.indexFromElement(e),n=r.options.getItemKey(t),a=r.itemSizeCache.get(n);if(void 0!==a)return a}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},p=(e,{adjustments:t=0,behavior:r},n)=>{var a,i;null==(i=null==(a=n.scrollElement)?void 0:a.scrollTo)||i.call(a,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})};class g{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,r;return(null==(r=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:r.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,r=this.indexFromElement(t);if(!t.isConnected){for(let[e,r]of(this.observer.unobserve(t),this.elementsCache))if(r===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(r)&&this.resizeItem(r,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var r;null==(r=t())||r.disconnect(),e=null},observe:e=>{var r;return null==(r=t())?void 0:r.observe(e,{box:"border-box"})},unobserve:e=>{var r;return null==(r=t())?void 0:r.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,r;let n={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:u,onChange:()=>{},measureElement:f,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let r=e[t];void 0!==r&&(n[t]=r)}let a=this.options,i=null,o=null,l=!1;if(void 0!==a&&a.enabled&&n.enabled&&"end"===n.anchorTo&&null!==this.scrollElement){let e=a.count,s=n.count,u=this.getMeasurements(),c=e>0?(null==(t=u[0])?void 0:t.key)??a.getItemKey(0):null,d=e>0?(null==(r=u[e-1])?void 0:r.key)??a.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(n.getItemKey(0)!==c||n.getItemKey(s-1)!==d)){l=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??u[0]:null;t&&(i=[t.key,this.getScrollOffset()-t.start]);let r=!0===n.followOnAppend?"auto":n.followOnAppend||null;r&&s>e&&this.isAtEnd(a.scrollEndThreshold)&&(0===e||n.getItemKey(s-1)!==d)&&(o=r)}}this.options=n,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let c=!1,d=0;if(i&&null!==this.scrollOffset){let[e,t]=i,r=this.getMeasurements(),{count:n,getItemKey:a}=this.options,o=0;for(;o<n&&a(o)!==e;)o++;if(o<n){let e=r[o];if(e){let r=e.start+t;r!==this.scrollOffset&&(d=r-this.scrollOffset,this.scrollOffset=r,c=!0)}}}(c||o)&&(this.pendingScrollAnchor=[c?i[0]:null,c?i[1]:0,o,d])},this.notify=e=>{var t,r;null==(r=(t=this.options).onChange)||r.call(t,this,e)},this.maybeNotify=a(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let r=this.getScrollOffset();this.scrollDirection=t?r===e?this.scrollDirection:r<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},r=()=>{this._iosTouching=!1,o()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,d),e.addEventListener("touchend",r,d),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",r),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let r=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,r&&this.scrollElement&&this.options.enabled){let[e,t,n,a]=r;null===e||n||(o()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==a&&(this._iosDeferredAdjustment+=a):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),n&&this.scrollToEnd({behavior:n})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let r=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=r,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let r=new Map,n=new Map;for(let a=t-1;a>=0;a--){let t=e[a];if(r.has(t.lane))continue;let i=n.get(t.lane);if(null==i||t.end>i.end?n.set(t.lane,t):t.end<i.end&&r.set(t.lane,!0),r.size===this.options.lanes)break}return n.size===this.options.lanes?Array.from(n.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=a(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,r,n,a,i,o)=>(void 0!==this.prevLanes&&this.prevLanes!==i&&(this.lanesChangedFlag=!0),this.prevLanes=i,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:a,lanes:i,laneAssignmentMode:o}),{key:!1}),this.getMeasurements=a(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:a,lanes:i,laneAssignmentMode:o},l)=>{let s=this.itemSizeCache;if(!a)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let u=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===i){var c;let a,i=this.options.gap,o=2*e,l=this._flatMeasurements;if(!l||l.length<o){let e=new Float64Array(o);l&&u>0&&e.set(l.subarray(0,2*u)),l=e,this._flatMeasurements=l}if(0===u)a=t+r;else{let e=u-1;a=l[2*e]+l[2*e+1]+i}for(let t=u;t<e;t++){let e=n(t),r=s.get(e),o="number"==typeof r?r:this.options.estimateSize(t);l[2*t]=a,l[2*t+1]=o,a+=o+i}let d=(c=l,new Proxy(Array(e),{get(t,r,a){if("string"==typeof r){let a=r.charCodeAt(0);if(a>=48&&a<=57){let a=+r;if(Number.isInteger(a)&&a>=0&&a<e){let e=t[a];if(!e){let r=c[2*a];e=t[a]={index:a,key:n(a),start:r,size:c[2*a+1],end:r+c[2*a+1],lane:0}}return e}}if("length"===r)return e}return Reflect.get(t,r,a)}}));return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,u),m=Array(i).fill(void 0);for(let e=0;e<u;e++){let t=d[e];t&&(m[t.lane]=e)}for(let a=u;a<e;a++){let e,i,l=n(a),u=this.laneAssignments.get(a),c="estimate"===o||s.has(l);if(void 0!==u&&this.options.lanes>1){let n=m[e=u],a=void 0!==n?d[n]:void 0;i=a?a.end+this.options.gap:t+r}else{let n=1===this.options.lanes?d[a-1]:this.getFurthestMeasurement(d,a);i=n?n.end+this.options.gap:t+r,e=n?n.lane:a%this.options.lanes,this.options.lanes>1&&c&&this.laneAssignments.set(a,e)}let h=s.get(l),f="number"==typeof h?h:this.options.estimateSize(a),p=i+f;d[a]={index:a,start:i,size:f,end:p,key:l,lane:e},m[e]=a}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=a(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,r,n)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,r,n,a){let i=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:i};if(1===n&&null!==a){let e=function(e,t,r){let n=0;for(;n<=t;){let a=(n+t)/2|0,i=e[2*a];if(i<r)n=a+1;else{if(!(i>r))return a;t=a-1}}return n>0?n-1:0}(a,i,r),n=e,o=r+t;for(;n<i&&a[2*n]+a[2*n+1]<o;)n++;return{startIndex:e,endIndex:n}}let o=v(0,i,t=>e[t].start,r),l=o;if(1===n)for(;l<i&&e[l].end<r+t;)l++;else if(n>1){let a=Array(n).fill(0);for(;l<i&&a.some(e=>e<r+t);){let t=e[l];a[t.lane]=t.end,l++}let s=Array(n).fill(r+t);for(;o>=0&&s.some(e=>e>=r);){let t=e[o];s[t.lane]=t.start,o--}o=Math.max(0,o-o%n),l=Math.min(i,l+(n-1-l%n))}return{startIndex:o,endIndex:l}}(e,t,r,n,1===n&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=a(()=>{let e=null,t=null,r=this.calculateRange();return r&&(e=r.startIndex,t=r.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,r,n,a)=>null===n||null===a?[]:e({startIndex:n,endIndex:a,overscan:t,count:r}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,r=e.getAttribute(t);return r?parseInt(r,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let r=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==r&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,r-t),a=Math.min(this.options.count-1,r+t);return e>=n&&e<=a}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),r=this.options.getItemKey(t),n=this.elementsCache.get(r);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(r,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var r,n;let a,i,o;if(e<0||e>=this.options.count)return;let l=this._flatMeasurements;if(1===this.options.lanes&&null!==l)o=this.options.getItemKey(e),i=l[2*e],a=l[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;o=t.key,i=t.start,a=t.size}let s=t-(this.itemSizeCache.get(o)??a);if(0!==s){let l="end"===this.options.anchorTo&&(null==(r=this.scrollState)?void 0:r.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,u=l?this.getTotalSize():0,c=(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:o,start:i,size:a,end:i+a,lane:0},s,this):i<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(o)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(o,t),this.itemSizeCacheVersion++,l?this.applyScrollAdjustment(this.getTotalSize()-u):c&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=a(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let r=[];for(let n=0,a=e.length;n<a;n++){let a=t[e[n]];r.push(a)}return r},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let r=this._flatMeasurements,n=1===this.options.lanes&&null!=r,a=v(0,t.length-1,n?e=>r[2*e]:e=>i(t[e]).start,e);return i(t[a])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,r=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),a=this.getScrollOffset();return"auto"===t&&(t=e>=a+n?"end":"start"),"center"===t?e+=(r-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getSize(),n=this.getScrollOffset(),a=this.measurementsCache[e];if(!a)return;if("auto"===t)if(a.end>=n+r-this.options.scrollPaddingEnd)t="end";else{if(!(a.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let i="end"===t?a.end+this.options.scrollPaddingEnd:a.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(i,t,a.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:r="auto"}={})=>{let n=this.getOffsetForAlignment(e,t),a=this.now();this.scrollState={index:null,align:t,behavior:r,startedAt:a,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:r="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[a,i]=n,o=this.now();this.scrollState={index:e,align:i,behavior:r,startedAt:o,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:r}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let r=this.getScrollOffset()+e,n=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:n,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,r=this.getMeasurements();if(0===r.length)t=this.options.paddingStart;else if(1===this.options.lanes){let n=r.length-1,a=this._flatMeasurements;t=null!=a?a[2*n]+a[2*n+1]:(null==(e=r[n])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),n=r.length-1;for(;n>=0&&e.some(e=>null===e);){let t=r[n];null===e[t.lane]&&(e[t.lane]=t.end),n--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:r})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:r,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(o()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,r=t!==this.scrollState.lastTargetOffset;if(!r&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,r){let e=this.getSize()||600,r=Math.abs(t-this.getScrollOffset()),n="smooth"===this.scrollState.behavior&&r>e;this.scrollState.lastTargetOffset=t,n||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}}let v=(e,t,r,n)=>{for(;e<=t;){let a=(e+t)/2|0,i=r(a);if(i<n)e=a+1;else{if(!(i>n))return a;t=a-1}}return e>0?e-1:0},y="u">typeof document?r.useLayoutEffect:r.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:a="transform",...i}){let o=r.useReducer(e=>e+1,0)[1],l=r.useRef({enabled:t,mode:a,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});l.current.enabled=t,l.current.mode=a;let s=e=>{let t=l.current;if(!t.enabled||!t.container)return;let r=e.getTotalSize();if(r!==t.lastSize){t.lastSize=r;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${r}px`}let n=!!e.options.horizontal,a="transform"===t.mode,i=n?"left":"top",o=e.options.scrollMargin;for(let r of e.getVirtualItems()){let l=r.start-o,s=e.elementsCache.get(r.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),a?s.style.transform=n?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[i]=`${l}px`)}},u={...i,onChange:(t,r)=>{var a;let u=l.current,c=!0;if(u.enabled){s(t);let e=t.range,r=u.prevRange;(c=!r||r.isScrolling!==t.isScrolling||r.startIndex!==(null==e?void 0:e.startIndex)||r.endIndex!==(null==e?void 0:e.endIndex))&&(u.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}c&&(e&&r?(0,n.flushSync)(o):o()),null==(a=i.onChange)||a.call(i,t,r)}},[c]=r.useState(()=>{let e=new g(u);return Object.assign(e,{containerRef:t=>{let r=l.current;if(r.container=t,r.lastSize=null,t&&r.enabled){let n=e.getTotalSize();r.lastSize=n;let a=e.options.horizontal?"width":"height";t.style[a]=`${n}px`}}})});return c.setOptions(u),y(()=>c._didMount(),[]),y(()=>c._willUpdate()),y(()=>{s(c)}),c}({observeElementRect:c,observeElementOffset:h,scrollToFn:p,...e})}],463044)},76206,e=>{"use strict";var t=e.i(648863),r=e.i(60695),n=e.i(391398);let a={type:"configurator",component:function(e){return(0,n.jsx)(r.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var i={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},o=e.i(232471);let l={type:"code",component:function(){return(0,n.jsx)(o.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,n.jsx)(r.Slider,{defaultValue:40,size:2,classNames:i,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
`,language:"scss"}]},s={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Slider,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,n.jsx)(r.Slider,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var u=e.i(883364);let c={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Text,{size:"sm",children:"No label"}),(0,n.jsx)(r.Slider,{defaultValue:40,label:null}),(0,n.jsx)(u.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,n.jsx)(r.Slider,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,n.jsx)(u.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,n.jsx)(r.Slider,{defaultValue:40,labelAlwaysOn:!0}),(0,n.jsx)(u.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,n.jsx)(r.Slider,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},d=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],m={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Text,{children:"Decimal step"}),(0,n.jsx)(r.Slider,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,n.jsx)(u.Text,{mt:"md",children:"Step matched with marks"}),(0,n.jsx)(r.Slider,{defaultValue:50,label:e=>d.find(t=>t.value===e).label,step:25,marks:d,styles:{markLabel:{display:"none"}}})]})},code:`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var h=e.i(191788);let f={type:"code",component:function(){let[e,t]=(0,h.useState)(50),[a,i]=(0,h.useState)(50);return(0,n.jsxs)(o.Box,{maw:400,mx:"auto",children:[(0,n.jsx)(r.Slider,{value:e,onChange:t,onChangeEnd:i}),(0,n.jsxs)(u.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,n.jsx)("b",{children:e})]}),(0,n.jsxs)(u.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,n.jsx)("b",{children:a})]})]})},code:`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`},p={type:"code",component:function(){return(0,n.jsx)(r.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},g={type:"configurator",component:function(e){return(0,n.jsx)(r.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var v=e.i(171481);let y=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),h.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),b=h.forwardRef((e,t)=>h.createElement(v.default,{ref:t,...e,weights:y}));b.displayName="HeartBreakIcon";var x=e.i(853907),w=e.i(328940);let k={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Slider,{thumbChildren:(0,n.jsx)(x.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,n.jsx)(w.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,n.jsx)(x.HeartIcon,{size:16},"1"),(0,n.jsx)(b,{size:16},"2")]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';
import { HeartIcon, HeartBreakIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<HeartIcon size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<HeartIcon size={16} key="1" />, <HeartBreakIcon size={16} key="2" />]}
      />
    </>
  );
}
`,maxWidth:400,centered:!0};function M(e){let t=["KB","MB","GB","TB"],r=0,n=e;for(;n>=1024&&r<t.length-1;)r+=1,n/=1024;return`${n} ${t[r]}`}let S=e=>2**e,T={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Slider,{scale:S,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:M}),(0,n.jsx)(w.RangeSlider,{mt:50,scale:S,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:M})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},D={type:"code",component:function(){return(0,n.jsx)(r.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var j=e.i(220026);let A=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,E={type:"styles-api",data:j.SliderStylesApi,component:function(e){return(0,n.jsx)(r.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:A,centered:!0,maxWidth:400},_={type:"code",component:function(){return(0,n.jsx)(r.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var C="m_b2d44517",P=e.i(414124),I=e.i(852361),V=e.i(502315);let O={type:"code",component:function(){let[e,t]=(0,h.useState)(.3),{ref:r}=(0,V.useMove)(({x:e})=>t((0,I.clamp)(e,.1,.9))),a=e<.2||e>.8;return(0,n.jsx)("div",{className:"m_1e8dea5f",children:(0,n.jsxs)("div",{className:"m_b34cb76e",ref:r,children:[(0,n.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:C,"data-floating":a||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:C,"data-floating":a||void 0,children:((1-e)*100).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,n.jsx)(P.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0};var L=e.i(671640);let R={type:"code",component:function(){return(0,n.jsxs)(L.Stack,{children:[(0,n.jsx)(r.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,n.jsx)(w.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400},H={type:"code",component:function(){return(0,n.jsx)(r.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},z=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],Y={type:"code",component:function(){return(0,n.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,n.jsx)(r.Slider,{orientation:"vertical",defaultValue:45,marks:z}),(0,n.jsx)(w.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:z})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Slider orientation="vertical" defaultValue={45} marks={marks} />
      <RangeSlider orientation="vertical" defaultValue={[25, 65]} marks={marks} />
    </div>
  );
}
`,centered:!0},F={type:"code",component:function(){let[e,t]=(0,h.useState)(50);return(0,n.jsxs)(o.Box,{pb:"md",children:[(0,n.jsxs)(u.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,n.jsx)(r.Slider,{value:e,onChange:t,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { Slider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState(50);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: {value}
      </Text>
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 25, hidden: true },
          { value: 50, label: '50%' },
          { value: 75, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`},N={type:"code",component:function(){return(0,n.jsx)(r.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      startPointValue={0}
      min={-100}
      max={100}
      defaultValue={40}
      marks={[
        { value: -100, label: '-100' },
        { value: -50, label: '-50' },
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400};var B=(0,t.__exportAll)({changeEnd:()=>f,configurator:()=>a,customSlider:()=>O,customize:()=>l,decimal:()=>_,disabled:()=>p,domain:()=>H,hiddenMarks:()=>F,inverted:()=>D,label:()=>c,marks:()=>s,restrictToMarks:()=>R,scale:()=>T,startPoint:()=>N,step:()=>m,stylesApi:()=>E,thumbChildren:()=>k,thumbSize:()=>g,vertical:()=>Y});e.s(["SliderDemos",0,B],76206)},593612,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="ClockIcon",e.s(["ClockIcon",0,a],593612)},663551,e=>{"use strict";var t=e.i(86473),r=e.i(27748),n=e.i(969610),a=e.i(813982),i=e.i(898770),o=e.i(657068),l=e.i(298008),s=e.i(494834),u={agendaView:"m_c5e63f2d",agendaViewHeader:"m_b70d381a",agendaViewHeaderLabel:"m_693056fa",agendaViewBody:"m_dd488e6f",agendaViewDateGroup:"m_e7e356c4",agendaViewDateHeader:"m_157e8ae8",agendaViewEvent:"m_cbf6b76d",agendaViewEventBody:"m_f9e2e6af",agendaViewEventColor:"m_428823f6",agendaViewEventTime:"m_f9eaffda",agendaViewNoEvents:"m_7a1aec87"},c=e.i(232471),d=e.i(883364),m=e.i(284629),h=e.i(481178),f=e.i(275519),p=e.i(433512),g=e.i(317477),v=e.i(951254),y=e.i(44091),b=e.i(391466),x=e.i(191788),w=e.i(205693),k=e.i(391398);let M={__staticSelector:"AgendaView",mode:"default",dateHeaderFormat:"dddd, MMMM D",headerFormat:"MMMM D, YYYY"},S=(0,h.createVarsResolver)((e,{radius:t})=>({agendaView:{"--agenda-view-radius":(0,p.getRadius)(t)}})),T=(0,f.factory)(e=>{let h=(0,y.useProps)("AgendaView",M,e),{classNames:f,className:p,style:T,styles:D,unstyled:j,vars:A,attributes:E,__staticSelector:_,rangeStart:C,rangeEnd:P,events:I,locale:V,radius:O,labels:L,mode:R,renderEvent:H,dateHeaderFormat:z,headerFormat:Y,onEventClick:F,recurrenceExpansionLimit:N,...B}=h,Z=(0,w.useDatesContext)(),W=(0,v.useMantineTheme)(),$=(0,b.useStyles)({name:_,classes:u,props:h,className:p,style:T,classNames:f,styles:D,unstyled:j,attributes:E,vars:A,varsResolver:S,rootSelector:"agendaView"}),U=function({rangeStart:e,rangeEnd:t,events:r}){let n={};if(void 0===r)return n;let a=(0,s.default)(e).startOf("day"),o=(0,s.default)(t).startOf("day"),u=new Set;for(let e of r){if("background"===e.display)continue;let t=(0,s.default)(e.start).startOf("day");if(!((0,s.default)(e.end).startOf("day").isBefore(a)||t.isAfter(o))){if(u.has(e.id))throw Error(`[@mantine/schedule] AgendaView: Duplicated event ids found: ${e.id}`);u.add(e.id),!function(e,t,r,n){if((0,i.isMultidayEvent)(e)){let a,i=(0,s.default)(e.start).startOf("day"),o=(a=(0,s.default)(e.end).startOf("day"),0===(0,s.default)(e.end).hour()&&0===(0,s.default)(e.end).minute()?a.subtract(1,"day"):a);for(let a=i;a.isBefore(o)||a.isSame(o);a=a.add(1,"day")){if(a.isBefore(r)||a.isAfter(n))continue;let i=a.format("YYYY-MM-DD");t[i]||(t[i]=[]),t[i].push(e)}return}let a=(0,s.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,l.validateEvent)(e),n,a,o)}}return n}({rangeStart:C,rangeEnd:P,events:(0,o.expandRecurringEvents)({events:I,rangeStart:(0,s.default)(C).startOf("day").toDate(),rangeEnd:(0,s.default)(P).endOf("day").toDate(),expansionLimit:N})}),K=Object.keys(U).sort(),G=`${(0,r.formatDate)({locale:Z.getLocale(V),date:C,format:Y})} – ${(0,r.formatDate)({locale:Z.getLocale(V),date:P,format:Y})}`,X=K.map(e=>{let o=(0,a.sortEvents)(U[e]).map(r=>{let a=(0,s.default)(r.start).format("HH:mm"),o=(0,s.default)(r.end).format("HH:mm"),l=(0,i.isMultidayEvent)(r)||(0,n.isAllDayEvent)({event:r,date:e}),u=(0,k.jsxs)(c.Box,{...$("agendaViewEventBody"),children:[(0,k.jsx)("div",{...$("agendaViewEventColor",{style:{backgroundColor:(0,g.getThemeColor)(r.color,W)}})}),(0,k.jsxs)("div",{children:[(0,k.jsx)(d.Text,{...$("agendaViewEventTitle"),children:r.title}),(0,k.jsx)(d.Text,{...$("agendaViewEventTime"),children:l?(0,t.getLabel)("allDay",L):`${a} – ${o}`})]})]}),h={...$("agendaViewEvent"),onClick:"static"===R?void 0:e=>{F?.(r,e)},tabIndex:"static"===R?-1:0,children:u};return"function"==typeof H?(0,k.jsx)(x.default.Fragment,{children:H(r,h)},r.id):(0,x.createElement)(m.UnstyledButton,{...h,key:r.id})});return(0,x.createElement)("div",{...$("agendaViewDateGroup"),key:e},(0,k.jsx)(d.Text,{...$("agendaViewDateHeader"),children:(0,r.formatDate)({locale:Z.getLocale(V),date:e,format:z})}),o)});return(0,k.jsxs)(c.Box,{...$("agendaView"),...B,children:[(0,k.jsx)("div",{...$("agendaViewHeader"),children:(0,k.jsx)(d.Text,{...$("agendaViewHeaderLabel"),children:G})}),(0,k.jsx)(c.Box,{...$("agendaViewBody"),children:X.length>0?X:(0,k.jsx)(d.Text,{...$("agendaViewNoEvents"),children:(0,t.getLabel)("noEvents",L)})})]})});T.displayName="@mantine/schedule/AgendaView",T.classes=u,T.varsResolver=S,e.s(["AgendaView",0,T],663551)},245086,637079,312709,e=>{"use strict";var t=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:r}){let n=(0,t.useRef)(null),a=(0,t.useRef)(0),i=(0,t.useEffectEvent)(()=>{null!==n.current&&(cancelAnimationFrame(n.current),n.current=null),a.current=0}),o=(0,t.useEffectEvent)(()=>{if(null!==n.current)return;let t=()=>{let r=e.current;if(!r||0===a.current){n.current=null;return}r.scrollTop+=a.current,n.current=requestAnimationFrame(t)};n.current=requestAnimationFrame(t)});(0,t.useEffect)(()=>{if(!r)return;let t=e.current;if(!t)return;let n=e=>{let r=t.getBoundingClientRect(),n=e.clientY-r.top,l=r.bottom-e.clientY;n<50?(a.current=-Math.ceil((1-n/50)*8),o()):l<50?(a.current=Math.ceil((1-l/50)*8),o()):i()},l=()=>{i()};return t.addEventListener("dragover",n),t.addEventListener("dragleave",l),t.addEventListener("dragend",l),t.addEventListener("drop",l),()=>{i(),t.removeEventListener("dragover",n),t.removeEventListener("dragleave",l),t.removeEventListener("dragend",l),t.removeEventListener("drop",l)}},[r,e])}],245086);var r=e.i(672654),n=e.i(42916),a=e.i(494834);e.s(["useEventResize",0,function({enabled:e=!1,mode:i="default",startTime:o,endTime:l,intervalMinutes:s,onEventResize:u,canResizeEvent:c}){let[d,m]=(0,t.useState)(null),h=(0,t.useRef)(null),f=(0,t.useRef)(!1),p=(0,t.useEffectEvent)(u||(()=>{})),g=(0,n.parseTimeString)(o),v=(0,n.parseTimeString)(l),y=60*g.hours+g.minutes,b=60*v.hours+v.minutes,x=(0,r.clampIntervalMinutes)(s),w=b-y,k=Math.ceil(w/x)*x,M=x/k*100,S=(0,t.useCallback)(e=>Math.max(0,Math.min(w,Math.round(e/x)*x)),[w,x]),T=(0,t.useCallback)((e,t)=>{let r=y+S(e/100*k),n=Math.floor(r/60);return`${t} ${String(n).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[k,y,S]),D=(0,t.useCallback)(e=>S(e/100*k)/k*100,[k,S]),j=(0,t.useCallback)(({event:t,edge:r,container:n,originalTop:o,originalHeight:l,eventDate:s,pointerEvent:u})=>{if(!e||"static"===i)return;u.preventDefault(),u.stopPropagation();let c={eventId:t.id,event:t,edge:r,container:n,originalTop:o,originalHeight:l,currentTop:o,currentHeight:l,eventDate:s,originalStart:(0,a.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,a.default)(t.end).format("YYYY-MM-DD HH:mm:ss")};h.current=c,m(c)},[e,i]),A=null!==d;(0,t.useEffect)(()=>{if(!A)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=h.current;if(!t)return;let r=t.container.getBoundingClientRect(),n=D(Math.max(0,Math.min(100,(e.clientY-r.top)/r.height*100))),a=t.originalTop,i=t.originalHeight;if("bottom"===t.edge)i=Math.max(M,n-t.originalTop);else{let e=t.originalTop+t.originalHeight;a=Math.min(n,e-M),i=e-a}h.current={...t,currentTop:a,currentHeight:i},m(h.current)},r=()=>{let e=h.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,r;"top"===e.edge?(t=T(e.currentTop,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=T(e.currentTop+e.currentHeight,e.eventDate)),p({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}h.current=null,m(null),f.current=!0,requestAnimationFrame(()=>{f.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",r),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r)}},[A]);let E=(0,t.useCallback)(e=>d&&d.eventId===e?{top:d.currentTop,height:d.currentHeight}:null,[d]),_=(0,t.useCallback)(t=>!!e&&"static"!==i&&"background"!==t.display&&(!c||c(t)),[e,i,c]),C=(0,t.useCallback)(()=>f.current,[]);return{handleResizeStart:j,isResizing:A,resizingEventId:d?.eventId??null,getResizePosition:E,isResizableEvent:_,wasResizing:C}}],637079);var i=e.i(27748),o=e.i(688785),l=e.i(664397),s={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},u=e.i(232471),c=e.i(481178),d=e.i(275519),m=e.i(317477),h=e.i(44091),f=e.i(391466),p=e.i(822933),g=e.i(205693),v=e.i(391398);let y={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},b=(0,c.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,m.getThemeColor)(t,e):void 0}})),x=(0,d.factory)(e=>{let r=(0,h.useProps)("CurrentTimeIndicator",y,e),{classNames:n,className:c,style:d,styles:m,unstyled:x,vars:w,attributes:k,startOffset:M,endOffset:S,color:T,withTimeBubble:D,withThumb:j,currentTimeFormat:A,locale:E,timeBubbleStartOffset:_,__staticSelector:C,topOffset:P,startTime:I,endTime:V,intervalMinutes:O,getCurrentTime:L,...R}=r,H=(0,f.useStyles)({name:C,classes:s,props:r,className:c,style:d,classNames:n,styles:m,unstyled:x,vars:w,varsResolver:b,attributes:k,rootSelector:"currentTimeIndicator"}),z=(0,g.useDatesContext)(),[,Y]=(0,t.useState)(0);(0,p.useInterval)(()=>Y(e=>e+1),6e4,{autoInvoke:!0});let F=L?(0,a.default)(L()):(0,a.default)(),N=(0,o.getCurrentTimePosition)({startTime:I,endTime:V,intervalMinutes:O,now:F}),B=D?(0,i.formatDate)({locale:z.getLocale(E),date:F,format:A}):"";return(0,l.isInTimeRange)({date:F,startTime:I,endTime:V})?(0,v.jsxs)(u.Box,{...H("currentTimeIndicator"),__vars:{"--top-offset":`calc(${N}% + ${P})`,"--start-offset":M,"--end-offset":S,"--time-bubble-start-offset":_,"--time-bubble-width":B?.toString().toLowerCase().includes("m")?"64px":"46px"},...R,children:[D&&(0,v.jsx)("div",{...H("currentTimeIndicatorTimeBubble"),children:B}),j&&(0,v.jsx)("div",{...H("currentTimeIndicatorThumb")}),(0,v.jsx)("div",{...H("currentTimeIndicatorLine")})]}):null});x.displayName="@mantine/schedule/CurrentTimeIndicator",x.classes=s,x.varsResolver=b,e.s(["CurrentTimeIndicator",0,x],312709)},369974,e=>{"use strict";var t=e.i(44091),r=e.i(392862);let[n,a]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var i=e.i(191788),o=e.i(391398),l=e.i(458272);let s=(0,i.createContext)({withinGroup:!1}),u={openDelay:0,closeDelay:0};function c(e){let{openDelay:r,closeDelay:n,children:a}=(0,t.useProps)("HoverCardGroup",u,e);return(0,o.jsx)(s,{value:{withinGroup:!0},children:(0,o.jsx)(l.FloatingDelayGroup,{delay:{open:r,close:n},children:a})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var d=e.i(334816);function m(e){let{children:n,onMouseEnter:l,onMouseLeave:u,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=a();if((0,i.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,o.jsx)(r.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,d.createEventHandler)(l,e.onMouseEnter),onMouseLeave:(0,d.createEventHandler)(u,e.onMouseLeave),...c,children:n})}let h=(0,d.createEventHandler)(l,m.openDropdown),f=(0,d.createEventHandler)(u,m.closeDropdown);return(0,o.jsx)(r.Popover.Dropdown,{onMouseEnter:h,onMouseLeave:f,...c,children:n})}m.displayName="@mantine/core/HoverCardDropdown";var h=e.i(275825),f=e.i(409703),p=e.i(332977);let g={refProp:"ref"};function v(e){let{children:n,refProp:l,eventPropsWrapperName:u,...c}=(0,t.useProps)("HoverCardTarget",g,e),m=(0,f.getSingleElementChild)(n);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let v=a(),y=(0,i.use)(s),b=(0,p.useMergedRef)((0,h.getRefProp)(m),v.assignTarget);if(y.withinGroup&&v.getReferenceProps&&v.reference){let e=v.getReferenceProps();return(0,o.jsx)(r.Popover.Target,{refProp:l,...c,children:(0,i.cloneElement)(m,u?{[u]:{...e,ref:v.reference}}:{...e,ref:v.reference})})}let x={onMouseEnter:(0,d.createEventHandler)(m.props.onMouseEnter,v.openDropdown),onMouseLeave:(0,d.createEventHandler)(m.props.onMouseLeave,v.closeDropdown)},w={...u?{[u]:x}:x,ref:b};return(0,o.jsx)(r.Popover.Target,{refProp:l,...c,children:(0,i.cloneElement)(m,w)})}v.displayName="@mantine/core/HoverCardTarget";var y=e.i(107315);let b={openDelay:0,closeDelay:150,initiallyOpened:!1};function x(e){let{children:a,onOpen:u,onClose:c,openDelay:d,closeDelay:m,initiallyOpened:h,...f}=(0,t.useProps)("HoverCard",b,e),p=function(e){let[t,r]=(0,i.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,a=(0,i.use)(s).withinGroup,o=(0,y.useId)(),u=(0,i.useRef)(-1),c=(0,i.useRef)(-1),d=(0,i.useRef)(null),m=(0,i.useCallback)(e=>{d.current=e},[]),h=(0,i.useCallback)(()=>{window.clearTimeout(u.current),window.clearTimeout(c.current)},[]),f=(0,i.useCallback)(t=>{r(t),t?(b(o),e.onOpen?.()):e.onClose?.()},[o,e.onOpen,e.onClose]),{context:p,refs:g}=(0,l.useFloating)({open:n,onOpenChange:f}),{delay:v,setCurrentId:b}=(0,l.useDelayGroup)(p,{id:o}),{getReferenceProps:x,getFloatingProps:w}=(0,l.useInteractions)([(0,l.useHover)(p,{enabled:!0,delay:a?v:{open:e.openDelay,close:e.closeDelay}}),(0,l.useRole)(p,{role:"dialog"}),(0,l.useDismiss)(p,{enabled:a})]),k=(0,i.useCallback)(()=>{a||(h(),0===e.openDelay||void 0===e.openDelay?f(!0):u.current=window.setTimeout(()=>f(!0),e.openDelay))},[a,h,e.openDelay,f]),M=(0,i.useCallback)(()=>{a||(h(),0===e.closeDelay||void 0===e.closeDelay?f(!1):c.current=window.setTimeout(()=>f(!1),e.closeDelay))},[a,h,e.closeDelay,f]),S=(0,i.useRef)(f);return S.current=f,(0,i.useEffect)(()=>()=>h(),[h]),(0,i.useEffect)(()=>{if(!n||a||"u"<typeof IntersectionObserver)return;let e=d.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(h(),S.current(!1))});return t.observe(e),()=>t.disconnect()},[n,a,h]),{opened:n,reference:g.setReference,floating:g.setFloating,assignTarget:m,getReferenceProps:x,getFloatingProps:w,openDropdown:k,closeDropdown:M}}({openDelay:d,closeDelay:m,defaultOpened:h,onOpen:u,onClose:c});return(0,o.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,assignTarget:p.assignTarget,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,o.jsx)(r.Popover,{...f,opened:p.opened,__staticSelector:"HoverCard",children:a})})}x.displayName="@mantine/core/HoverCard",x.Target=v,x.Dropdown=m,x.Group=c,x.extend=e=>e,e.s(["HoverCard",0,x],369974)},27355,(e,t,r)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),r=e.i(725695),n=e.i(671640),a=e.i(883364),i=e.i(391398),o=e.i(494834);let l=`import dayjs from 'dayjs';
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
  resources?: ScheduleResourceData[];
}

export function EventDetails({ event, resources }: EventDetailsProps) {
  const resource = resources?.find((r) => r.id === event.resourceId);

  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      <Text size="xs" c="dimmed">
        {dayjs(event.start).format('MMM D, YYYY HH:mm')} – {dayjs(event.end).format('HH:mm')}
      </Text>

      {resource && (
        <Text size="xs" c="dimmed">
          {resource.label}
        </Text>
      )}

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}`;e.s(["EventDetails",0,function({event:e,resources:l}){let s=l?.find(t=>t.id===e.resourceId);return(0,i.jsxs)(n.Stack,{gap:"xs",children:[(0,i.jsx)(a.Text,{fw:600,size:"sm",children:e.title}),(0,i.jsxs)(a.Text,{size:"xs",c:"dimmed",children:[(0,o.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,o.default)(e.end).format("HH:mm")]}),s&&(0,i.jsx)(a.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,i.jsx)(a.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,i.jsx)(r.Group,{gap:4,children:(0,i.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,i.jsx)(a.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,l])},664894,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(r,n,a){var i,o=function(e,r,n){void 0===n&&(n={});var a,i,o,l,s=new Date(e);return(void 0===(a=n)&&(a={}),(l=t[o=r+"|"+(i=a.timeZoneName||"short")])||(l=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[o]=l),l).formatToParts(s)},l=function(t,r){for(var n=o(t,r),i=[],l=0;l<n.length;l+=1){var s=n[l],u=s.type,c=s.value,d=e[u];d>=0&&(i[d]=parseInt(c,10))}var m=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===m?0:m)+":"+i[4]+":"+i[5]+":000",f=+t;return(a.utc(h).valueOf()-(f-=f%1e3))/6e4},s=n.prototype;s.tz=function(e,t){void 0===e&&(e=i);var r,n=this.utcOffset(),o=this.toDate(),l=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(l))/1e3/60),u=-(15*Math.round(o.getTimezoneOffset()/15))-s;if(Number(u)){if(r=a(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(u,!0),t){var c=r.utcOffset();r=r.add(n-c,"minute")}}else r=this.utcOffset(0,t);return r.$x.$timezone=e,r},s.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return r&&r.value};var u=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return u.call(this,e,t);var r=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return u.call(r,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,r){var n=r&&t,o=r||t||i,s=l(+a(),o);if("string"!=typeof e)return a(e).tz(o);var u=function(e,t,r){var n=e-60*t*1e3,a=l(n,r);if(t===a)return[n,t];var i=l(n-=60*(a-t)*1e3,r);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,n).valueOf(),s,o),c=u[0],d=u[1],m=a(c).utcOffset(d);return m.$x.$timezone=o,m},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}}()},53157,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(n,a,i){var o=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},o.utc=function(t){var r=i(this.toDate(),{locale:this.$L,utc:!0});return t?r.add(this.utcOffset(),e):r},o.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var l=o.parse;o.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),l.call(this,e)};var s=o.init;o.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else s.call(this)};var u=o.utcOffset;o.utcOffset=function(n,a){var i=this.$utils().u;if(i(n))return this.$u?0:i(this.$offset)?u.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var a=(""+n[0]).match(r)||["-",0,0],i=a[0],o=60*a[1]+ +a[2];return 0===o?0:"+"===i?o:-o}(n)))return this;var o=16>=Math.abs(n)?60*n:n;if(0===o)return this.utc(a);var l=this.clone();if(a)return l.$offset=o,l.$u=!1,l;var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(l=this.local().add(o+s,e)).$offset=o,l.$x.$localOffset=s,l};var c=o.format;o.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},o.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var d=o.toDate;o.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var m=o.diff;o.diff=function(e,t,r){if(e&&this.$u===e.$u)return m.call(this,e,t,r);var n=this.local(),a=i(e).local();return m.call(n,a,t,r)}}}()},554166,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="MapPinIcon",e.s(["MapPinIcon",0,a],554166)},39167,(e,t,r)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),r="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(e,t,r){var n,a;return"m"===r?t?"минута":"минуту":e+" "+(n=+e,a=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[r].split("_"),n%10==1&&n%100!=11?a[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?a[1]:a[2])}var l=function(e,n){return i.test(n)?t[e.month()]:r[e.month()]};l.s=r,l.f=t;var s=function(e,t){return i.test(t)?n[e.month()]:a[e.month()]};s.s=a,s.f=n;var u={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(u,null,!0),u}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),r=e.i(391398),n=e.i(883364),a=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let i,o,l,s,u,c,d;return{usage:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${i} value={value} onChange={setValue} />;
}
`),component:()=>{let[n,a]=(0,t.useState)(null);return(0,r.jsx)(e,{value:n,onChange:a})}},range:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${o} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[n,a]=(0,t.useState)([null,null]);return(0,r.jsx)(e,{type:"range",value:n,onChange:a})}},multiple:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${l} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[n,a]=(0,t.useState)([]);return(0,r.jsx)(e,{type:"multiple",value:n,onChange:a})}},deselect:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[n,a]=(0,t.useState)(null);return(0,r.jsx)(e,{allowDeselect:!0,value:n,onChange:a})}},singleRange:{type:"code",centered:!0,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${u} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[n,a]=(0,t.useState)([null,null]);return(0,r.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:n,onChange:a})}},numberOfColumns:{type:"code",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${c} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[a,i]=(0,t.useState)([null,null]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e,{type:"range",numberOfColumns:2,value:a,onChange:i,visibleFrom:"sm"}),(0,r.jsx)(n.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${d} } from '@mantine/dates';

function Demo() {
  return <${d} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,r.jsx)(e,{defaultValue:(0,a.default)().format("YYYY-MM-DD"),...t})}}}],111018)},629566,e=>{"use strict";var t,r=e.i(191788),n=e.i(56206),a=e.i(62037),i=e.i(438596),o=["points","className","baseLinePoints","connectNulls"];function l(){return(l=Object.assign.bind()).apply(null,arguments)}var s=e=>null!=e&&e.x===+e.x&&e.y===+e.y,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[[]];e.forEach(e=>{var r=t[t.length-1];s(e)?r&&r.push(e):r&&r.length>0&&t.push([])});var r=e[0],n=t[t.length-1];s(r)&&n&&n.push(r);var a=t[t.length-1];return a&&a.length<=0&&(t=t.slice(0,-1)),t},c=(e,r)=>{var n=u(e);r&&(n=[n.reduce((e,t)=>[...e,...t],[])]);var a=n.map(e=>e.reduce((e,r,n)=>{var a,o;return(0,i.roundTemplateLiteral)(t||(a=["","","",",",""],o||(o=a.slice(0)),t=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),e,0===n?"M":"L",r.x,r.y)},"")).join("");return 1===n.length?"".concat(a,"Z"):a};e.s(["Polygon",0,e=>{var t=e.points,i=e.className,s=e.baseLinePoints,u=e.connectNulls,d=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o);if(!t||!t.length)return null;var m=(0,n.clsx)("recharts-polygon",i);if(s&&s.length){var h,f=d.stroke&&"none"!==d.stroke,p=(h=c(t,u),"".concat("Z"===h.slice(-1)?h.slice(0,-1):h,"L").concat(c(Array.from(s).reverse(),u).slice(1)));return r.createElement("g",{className:m},r.createElement("path",l({},(0,a.svgPropertiesAndEvents)(d),{fill:"Z"===p.slice(-1)?d.fill:"none",stroke:"none",d:p})),f?r.createElement("path",l({},(0,a.svgPropertiesAndEvents)(d),{fill:"none",d:c(t,u)})):null,f?r.createElement("path",l({},(0,a.svgPropertiesAndEvents)(d),{fill:"none",d:c(s,u)})):null)}var g=c(t,u);return r.createElement("path",l({},(0,a.svgPropertiesAndEvents)(d),{fill:"Z"===g.slice(-1)?d.fill:"none",className:m,d:g}))}])},337904,e=>{"use strict";var t=e.i(337976),r=e.i(164036),n=e.i(831474),a={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},i=e.i(191788),o=e.i(391398),l=e.i(232471),s=e.i(284629),u=e.i(481178),c=e.i(275519),d=e.i(433512),m=e.i(44091),h=e.i(62904),f=e.i(391466);let p=(0,u.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,d.getFontSize)(t)}})),g={type:"default"},v=(0,c.factory)(e=>{let u=(0,m.useProps)("MonthPicker",g,e),{classNames:c,styles:d,vars:v,type:y,defaultValue:b,value:x,onChange:w,__staticSelector:k,getMonthControlProps:M,allowSingleDateInRange:S,allowDeselect:T,onMouseLeave:D,onMonthSelect:j,__updateDateOnMonthSelect:A,__onPresetSelect:E,__stopPropagation:_,presets:C,className:P,style:I,unstyled:V,size:O,attributes:L,onLevelChange:R,...H}=u,{calendarProps:z,others:Y}=(0,n.pickCalendarProps)(H),F=(0,i.useRef)(null),N=(0,i.useRef)(null),B=(0,f.useStyles)({name:k||"MonthPicker",classes:a,props:u,className:P,style:I,classNames:c,styles:d,unstyled:V,attributes:L,rootSelector:C?"monthPickerRoot":void 0,varsResolver:p,vars:v}),{onDateChange:Z,onRootMouseLeave:W,onHoveredDateChange:$,getControlProps:U,setValue:K}=(0,t.useDatesState)({type:y,level:"month",allowDeselect:T,allowSingleDateInRange:S,value:x,defaultValue:b,onChange:w,onMouseLeave:D}),{resolvedClassNames:G,resolvedStyles:X}=(0,h.useResolvedStylesApi)({classNames:c,styles:d,props:u}),J=(0,o.jsx)(r.Calendar,{classNames:G,styles:X,size:O,...z,...!C?Y:{},minLevel:"year",__updateDateOnMonthSelect:A??!1,__staticSelector:k||"MonthPicker",onMouseLeave:W,onMonthMouseEnter:(e,t)=>$(t),onMonthSelect:e=>{Z(e),j?.(e)},getMonthControlProps:e=>({...U(e),...M?.(e)}),onLevelChange:R,__setDateRef:F,__setLevelRef:N,__stopPropagation:_,attributes:L,...!C?{className:P,style:I}:{}});if(!C)return J;let q=C.map((e,t)=>(0,o.jsx)(s.UnstyledButton,{...B("presetButton"),onClick:()=>{var t;let r;void 0!==(r=Array.isArray(t=e.value)?t[0]:t)&&(F.current?.(r),N.current?.("year"),E?E(t):K(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":_||void 0,children:e.label},t));return(0,o.jsxs)(l.Box,{...B("monthPickerRoot"),size:O,...Y,children:[(0,o.jsx)("div",{...B("presetsList"),children:q}),J]})});v.classes={...r.Calendar.classes,...a},v.varsResolver=p,v.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,v],337904)},89495,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="DotsThreeIcon",e.s(["DotsThreeIcon",0,a],89495)},96618,e=>{"use strict";function t(e,r){for(let n of r){if(n.value===e)return n;if(Array.isArray(n.children)){let r=t(e,n.children);if(r)return r}}return null}e.s(["findTreeNode",0,t,"getAllChildrenNodes",0,function e(t){return t.reduce((t,r)=>(Array.isArray(r.children)&&r.children.length>0?t.push(...e(r.children)):t.push(r.value),t),[])},"getChildrenNodesValues",0,function e(r,n,a=[]){let i=t(r,n);return i?Array.isArray(i.children)&&0!==i.children.length?(i.children.forEach(t=>{Array.isArray(t.children)&&t.children.length>0?e(t.value,n,a):a.push(t.value)}),a):[i.value]:a}])},76407,e=>{"use strict";e.s(["getAllCheckedNodes",0,function e(t,r,n=[]){let a=[];for(let i of t)if(Array.isArray(i.children)&&i.children.length>0){let t=e(i.children,r,n);if(t.currentTreeChecked.length===i.children.length){let e=t.currentTreeChecked.every(e=>e.checked),r={checked:e,indeterminate:!e,value:i.value,hasChildren:!0};a.push(r),n.push(r)}else if(t.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:i.value,hasChildren:!0};a.push(e),n.push(e)}}else if(r.includes(i.value)){let e={checked:!0,indeterminate:!1,value:i.value,hasChildren:!1};a.push(e),n.push(e)}return{result:n,currentTreeChecked:a}}])},614398,e=>{"use strict";e.s(["memoize",0,function(e){let t=new Map;return(...r)=>{let n=JSON.stringify(r);if(t.has(n))return t.get(n);let a=e(...r);return t.set(n,a),a}}])},127262,183988,488400,401570,e=>{"use strict";var t=e.i(96618),r=e.i(76407),n=e.i(614398);function a(e,t,n){return 0!==n.length&&(!!n.includes(e)||(0,r.getAllCheckedNodes)(t,n).result.some(t=>t.value===e&&t.checked))}let i=(0,n.memoize)(a);function o(e,t,n){return 0!==n.length&&(0,r.getAllCheckedNodes)(t,n).result.some(t=>t.value===e&&t.indeterminate)}e.s(["isNodeChecked",0,a,"memoizedIsNodeChecked",0,i],183988);let l=(0,n.memoize)(o);e.s(["isNodeIndeterminate",0,o,"memoizedIsNodeIndeterminate",0,l],488400);var s=e.i(191788),u=e.i(579560);function c(e,t,r,n={}){return t.forEach(t=>{n[t.value]=t.value in e?e[t.value]:t.value===r,Array.isArray(t.children)&&c(e,t.children,r,n)}),n}function d(e,t){return("string"==typeof t.label?t.label:t.value).toLowerCase().includes(e.toLowerCase().trim())}e.s(["getTreeExpandedState",0,function(e,t){let r=c({},e,[]);if("*"===t){let e={},t=Object.keys(r);for(let r=0;r<t.length;r++)e[t[r]]=!0;return e}return t.forEach(e=>{r[e]=!0}),r},"useTree",0,function({initialSelectedState:e=[],expandedState:n,initialCheckedState:a=[],checkedState:o,initialExpandedState:d={},selectedState:m,multiple:h=!1,onNodeCollapse:f,onNodeExpand:p,onCheckedStateChange:g,onSelectedStateChange:v,onExpandedStateChange:y,onLoadChildren:b,checkStrictly:x=!1}={}){let[w,k]=(0,s.useState)([]),[M,S]=(0,u.useUncontrolled)({value:n,defaultValue:d,finalValue:{},onChange:y}),[T,D]=(0,u.useUncontrolled)({value:m,defaultValue:e,finalValue:[],onChange:v}),[j,A]=(0,u.useUncontrolled)({value:o,defaultValue:a,finalValue:[],onChange:g}),[E,_]=(0,s.useState)(null),C=(0,s.useRef)(new Set),P=(0,s.useRef)(new Set),[I,V]=(0,s.useState)([]),[O,L]=(0,s.useState)({}),R=(0,s.useCallback)(e=>{S(c(M,e,T)),A(function(e,r,n){if(n)return e;let a=[];return e.forEach(e=>a.push(...(0,t.getChildrenNodesValues)(e,r))),Array.from(new Set(a))}(j,e,x)),k(e)},[T,j,M,x]),H=(0,s.useCallback)(async e=>{if(b&&!(C.current.has(e)||P.current.has(e))){C.current.add(e),V(Array.from(C.current)),L(t=>{if(!(e in t))return t;let r={...t};return delete r[e],r});try{await b(e),P.current.add(e)}catch(r){let t=r instanceof Error?r:Error(String(r));L(r=>({...r,[e]:t}))}finally{C.current.delete(e),V(Array.from(C.current))}}},[b]),z=(0,s.useCallback)(e=>{if(!b)return;let r=(0,t.findTreeNode)(e,w);r&&r.hasChildren&&!Array.isArray(r.children)&&H(e)},[b,w,H]),Y=(0,s.useCallback)(e=>{let t={...M,[e]:!M[e]};t[e]?p?.(e):f?.(e),t[e]&&z(e),S(t)},[f,p,M,z]),F=(0,s.useCallback)(e=>{!1!==M[e]&&f?.(e),S({...M,[e]:!1})},[f,M]),N=(0,s.useCallback)(e=>{!0!==M[e]&&p?.(e),z(e),S({...M,[e]:!0})},[p,M,z]),B=(0,s.useCallback)(()=>{let e={...M};Object.keys(e).forEach(t=>{e[t]=!0,z(t)}),S(e)},[M,z]),Z=(0,s.useCallback)(()=>{let e={...M};Object.keys(e).forEach(t=>{e[t]=!1}),S(e)},[M]),W=(0,s.useCallback)(e=>h?T.includes(e)?(_(null),T.filter(t=>t!==e)):void(_(e),D([...T,e])):T.includes(e)?(_(null),[]):(_(e),[e]),[T]),$=(0,s.useCallback)(e=>{_(e),D(h?T.includes(e)?T:[...T,e]:[e])},[T]),U=(0,s.useCallback)(e=>{E===e&&_(null),D(T.filter(t=>t!==e))},[T]),K=(0,s.useCallback)(()=>{D([]),_(null)},[]),G=(0,s.useCallback)(e=>{x?j.includes(e)||A([...j,e]):A(Array.from(new Set([...j,...(0,t.getChildrenNodesValues)(e,w)])))},[w,j,x]),X=(0,s.useCallback)(e=>{if(x)A(j.filter(t=>t!==e));else{let r=(0,t.getChildrenNodesValues)(e,w);A(j.filter(e=>!r.includes(e)))}},[w,j,x]),J=(0,s.useCallback)(()=>{x?A(function e(t){let r=[];for(let n of t)r.push(n.value),Array.isArray(n.children)&&n.children.length>0&&r.push(...e(n.children));return r}(w)):A((0,t.getAllChildrenNodes)(w))},[w,x]),q=(0,s.useCallback)(()=>{A([])},[]),Q=(0,s.useCallback)(()=>x?j.map(e=>{let r=(0,t.findTreeNode)(e,w);return{checked:!0,indeterminate:!1,value:e,hasChildren:!!r&&(Array.isArray(r.children)&&r.children.length>0||!!r.hasChildren)}}):(0,r.getAllCheckedNodes)(w,j).result,[x,j,w]),ee=(0,s.useCallback)(e=>x?j.includes(e):i(e,w,j),[x,j,w]),et=(0,s.useCallback)(e=>!x&&l(e,w,j),[x,j,w]),er=(0,s.useCallback)(e=>I.includes(e),[I]),en=(0,s.useCallback)(e=>O[e]||null,[O]),ea=(0,s.useCallback)(e=>{P.current.delete(e),L(t=>{if(!(e in t))return t;let r={...t};return delete r[e],r})},[]);return(0,s.useMemo)(()=>({checkStrictly:x,multiple:h,expandedState:M,selectedState:T,checkedState:j,anchorNode:E,initialize:R,toggleExpanded:Y,collapse:F,expand:N,expandAllNodes:B,collapseAllNodes:Z,setExpandedState:S,checkNode:G,uncheckNode:X,checkAllNodes:J,uncheckAllNodes:q,setCheckedState:A,toggleSelected:W,select:$,deselect:U,clearSelected:K,setSelectedState:D,getCheckedNodes:Q,isNodeChecked:ee,isNodeIndeterminate:et,isNodeLoading:er,getNodeLoadError:en,loadNode:H,invalidateNode:ea}),[x,h,M,T,j,E,R,Y,F,N,B,Z,S,G,X,J,q,A,W,$,U,K,D,Q,ee,et,er,en,H,ea])}],127262),e.s(["defaultTreeNodeFilter",0,d,"filterTreeData",0,function e(t,r,n=d){if(!r.trim())return t;let a=[];for(let i of t){let t=n(r,i),o=Array.isArray(i.children)&&i.children.length>0?e(i.children,r,n):[];(t||o.length>0)&&a.push(o.length>0?{...i,children:o}:{...i})}return a}],401570)},540413,235209,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",opacity:"0.2"}),t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:n}));a.displayName="FolderOpenIcon",e.s(["FolderOpenIcon",0,a],540413);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",opacity:"0.2"}),t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,88V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74Zm2,126.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h88a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76Zm4,124.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h88a4,4,0,0,1,4,4Z"}))]]),o=t.forwardRef((e,n)=>t.createElement(r.default,{ref:n,...e,weights:i}));o.displayName="FolderSimpleIcon",e.s(["FolderSimpleIcon",0,o],235209)},753623,e=>{"use strict";var t=e.i(648863);let r={"2025-02-14":2,"2025-02-11":3,"2025-02-06":4,"2025-02-05":1,"2025-02-03":2,"2025-02-01":2,"2025-01-31":4,"2025-01-30":2,"2025-01-29":3,"2025-01-26":2,"2025-01-25":2,"2025-01-24":2,"2025-01-23":2,"2025-01-20":3,"2025-01-19":2,"2025-01-17":3,"2025-01-16":2,"2025-01-14":3,"2025-01-08":2,"2025-01-07":1,"2025-01-05":3,"2025-01-04":1,"2025-01-03":1,"2025-01-01":2,"2024-12-30":4,"2024-12-27":3,"2024-12-26":1,"2024-12-22":3,"2024-12-20":2,"2024-12-19":3,"2024-12-16":4,"2024-12-15":1,"2024-12-14":4,"2024-12-11":2,"2024-12-09":4,"2024-12-05":4,"2024-12-04":3,"2024-12-03":2,"2024-12-01":1,"2024-11-30":3,"2024-11-29":1,"2024-11-28":1,"2024-11-26":4,"2024-11-25":3,"2024-11-24":3,"2024-11-22":4,"2024-11-20":2,"2024-11-19":3,"2024-11-16":3,"2024-11-15":1,"2024-11-14":4,"2024-11-12":1,"2024-11-11":2,"2024-11-10":1,"2024-11-09":3,"2024-11-07":1,"2024-11-06":4,"2024-11-04":1,"2024-11-03":4,"2024-11-02":4,"2024-10-31":1,"2024-10-30":1,"2024-10-28":4,"2024-10-27":2,"2024-10-26":3,"2024-10-25":4,"2024-10-23":1,"2024-10-22":1,"2024-10-21":4,"2024-10-20":3,"2024-10-15":3,"2024-10-13":4,"2024-10-10":1,"2024-10-08":1,"2024-10-07":4,"2024-10-05":1,"2024-10-04":4,"2024-10-02":2,"2024-10-01":3,"2024-09-29":4,"2024-09-27":3,"2024-09-26":4,"2024-09-25":3,"2024-09-20":4,"2024-09-18":3,"2024-09-17":1,"2024-09-14":2,"2024-09-12":3,"2024-09-10":1,"2024-09-08":1,"2024-09-06":2,"2024-09-04":4,"2024-08-31":4,"2024-08-29":3,"2024-08-26":4,"2024-08-25":1,"2024-08-23":2,"2024-08-21":4,"2024-08-19":1,"2024-08-14":4,"2024-08-13":2,"2024-08-11":4,"2024-08-09":4,"2024-08-06":4,"2024-08-05":4,"2024-08-04":1,"2024-08-02":4,"2024-08-01":4,"2024-07-31":3,"2024-07-30":2,"2024-07-29":2,"2024-07-28":1,"2024-07-27":4,"2024-07-25":2,"2024-07-22":4,"2024-07-21":1,"2024-07-19":2,"2024-07-17":2,"2024-07-16":1,"2024-07-15":4,"2024-07-14":4,"2024-07-13":2,"2024-07-12":1,"2024-07-11":3,"2024-07-10":3,"2024-07-09":4,"2024-07-08":2,"2024-07-07":2,"2024-07-06":4,"2024-07-05":3,"2024-07-03":4,"2024-06-30":4,"2024-06-26":2,"2024-06-25":1,"2024-06-24":2,"2024-06-22":3,"2024-06-19":4,"2024-06-18":2,"2024-06-17":1,"2024-06-14":4,"2024-06-13":4,"2024-06-12":1,"2024-06-11":2,"2024-06-10":1,"2024-06-08":4,"2024-06-06":2,"2024-06-04":2,"2024-06-03":1,"2024-06-01":2,"2024-05-31":1,"2024-05-30":3,"2024-05-26":4,"2024-05-23":3,"2024-05-22":1,"2024-05-21":4,"2024-05-18":4,"2024-05-16":4,"2024-05-14":2,"2024-05-10":1,"2024-05-08":3,"2024-05-07":2,"2024-05-03":2,"2024-05-02":4,"2024-04-30":3,"2024-04-29":1,"2024-04-28":4,"2024-04-26":1,"2024-04-22":1,"2024-04-21":4,"2024-04-20":2,"2024-04-19":2,"2024-04-17":1,"2024-04-16":3,"2024-04-15":4,"2024-04-14":3,"2024-04-13":4,"2024-04-12":3,"2024-04-11":2,"2024-04-10":3,"2024-04-08":4,"2024-04-05":1,"2024-04-03":4,"2024-03-31":1,"2024-03-30":2,"2024-03-29":1,"2024-03-28":1,"2024-03-27":3,"2024-03-26":1,"2024-03-24":4,"2024-03-20":1,"2024-03-19":1,"2024-03-17":1,"2024-03-14":2,"2024-03-13":3,"2024-03-12":2,"2024-03-11":1,"2024-03-09":3,"2024-03-06":1,"2024-03-03":1,"2024-03-02":2,"2024-03-01":1,"2024-02-29":2,"2024-02-28":2,"2024-02-23":3,"2024-02-22":4,"2024-02-20":4,"2024-02-19":4,"2024-02-17":3,"2024-02-16":3},n=`export const data = ${JSON.stringify(r,null,2)};`;var a=e.i(391398);function i(e,t){if(!t)return e.map((e,t)=>({type:"column",month:new Date(e.find(e=>null!==e)).getUTCMonth(),weekIndex:t}));let r=[];e.forEach((e,t)=>{let n=e.map(e=>e?new Date(e).getUTCMonth():null),a=null,i=null;for(let e=0;e<n.length;e+=1)if(null!==n[e]){if(null===a)a=n[e];else if(n[e]!==a){i=e;break}}if(null!==a)if(null===i)r.push({type:"column",month:a,weekIndex:t});else{let e=null;for(let t=i;t<n.length;t+=1)if(null!==n[t]){e=n[t];break}null===e?r.push({type:"column",month:a,weekIndex:t}):(r.push({type:"column",month:a,weekIndex:t}),r.push({type:"column",month:e,weekIndex:t}))}});let n=[];for(let e=0;e<r.length;e+=1)e>0&&r[e].month!==r[e-1].month&&n.push({type:"spacer"}),n.push(r[e]);return n}function o(e,t){return new Date(e.getTime()+864e5*t)}function l(e){if("string"==typeof e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t)return new Date(Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3])));let r=new Date(e);return new Date(Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()))}return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}function s({value:e,min:t,max:r,colors:n}){let a=Math.min(1,Math.max(0,r===t?1:(e-t)/(r-t)));return n[Math.round((n.length-1)*a)]}function u({data:e,datesRange:t,rectSize:r,gap:n,rectRadius:o,min:l,max:c,colors:d,withTooltip:m,setHoveredRect:h,getRectProps:f,getStyles:p}){let g=r+n;return(0,a.jsx)(a.Fragment,{children:i(t,!0).map((i,u)=>{if("spacer"===i.type)return(0,a.jsx)("g",{transform:`translate(${u*g}, 0)`},`spacer-${u}`);let v=t[i.weekIndex].map((t,u)=>{if(!t||new Date(t).getUTCMonth()!==i.month)return null;let v=t in e&&null!==e[t],y=v?e[t]:null;return(0,a.jsx)("rect",{width:r,height:r,x:n,y:u*g+n,rx:o,"data-empty":!v||void 0,fill:v?s({value:e[t],min:l,max:c,colors:d}):void 0,onPointerEnter:m?()=>h({date:t,value:y}):void 0,...f?.({date:t,value:y}),...p("rect")},`${t}-${i.month}`)});return(0,a.jsx)("g",{transform:`translate(${u*g}, 0)`,"data-id":"week",children:v},`col-${i.weekIndex}-${i.month}-${u}`)})})}function c({data:e,datesRange:t,rectSize:r,gap:n,rectRadius:i,min:o,max:l,colors:u,withTooltip:d,setHoveredRect:m,getRectProps:h,getStyles:f}){let p=r+n;return(0,a.jsx)(a.Fragment,{children:t.map((t,c)=>{let g=t.map((t,c)=>{if(!t)return null;let g=t in e&&null!==e[t],v=g?e[t]:null;return(0,a.jsx)("rect",{width:r,height:r,x:n,y:c*p+n,rx:i,"data-empty":!g||void 0,fill:g?s({value:e[t],min:o,max:l,colors:u}):void 0,onPointerEnter:d?()=>m({date:t,value:v}):void 0,...h?.({date:t,value:v}),...f("rect")},t)});return(0,a.jsx)("g",{transform:`translate(${c*p}, 0)`,"data-id":"week",children:g},c)})})}var d={root:"m_2ef228c3",rect:"m_2ef201c5",monthLabel:"m_7e977775",weekdayLabel:"m_c4b68f8d",legendLabel:"m_75b4f3e6",legendRect:"m_da847eb2"},m=e.i(232471),h=e.i(431868),f=e.i(275519),p=e.i(44091),g=e.i(391466),v=e.i(191788);let y={monthLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdayLabels:["Sun","Mon","","Wed","","Fri",""],monthLabelsPosition:"top",withOutsideDates:!0,firstDayOfWeek:1,rectSize:10,weekdaysLabelsWidth:30,monthsLabelsHeight:14,gap:1,rectRadius:2,fontSize:12,colors:["var(--heatmap-level-1)","var(--heatmap-level-2)","var(--heatmap-level-3)","var(--heatmap-level-4)"],legendLabels:["Less","More"]},b=(0,f.factory)(e=>{let t,r,n,s,f,b,x,w,k,M,S=(0,p.useProps)("Heatmap",y,e),{classNames:T,className:D,style:j,styles:A,unstyled:E,vars:_,data:C,startDate:P,endDate:I,withMonthLabels:V,monthLabelsPosition:O,withWeekdayLabels:L,weekdayLabels:R,withOutsideDates:H,monthLabels:z,firstDayOfWeek:Y,rectSize:F=10,gap:N=1,rectRadius:B,domain:Z,colors:W,weekdaysLabelsWidth:$,monthsLabelsHeight:U,fontSize:K,getTooltipLabel:G,withTooltip:X,tooltipProps:J,getRectProps:q,splitMonths:Q,withLegend:ee,legendLabels:et,attributes:er,...en}=S,ea=(0,g.useStyles)({name:"Heatmap",classes:d,props:S,className:D,style:j,classNames:T,styles:A,unstyled:E,attributes:er,vars:_}),[ei,eo]=(0,v.useState)(null),el=F+N,es=L?$:0,eu=V&&"top"===O,ec=V&&"bottom"===O,ed=eu?U:0,em=ec?U:0,[eh,ef]=function({data:e,domain:t}){if(Array.isArray(t))return t;let r=Object.values(e);return[Math.min(...r),Math.max(...r)]}({data:C,domain:Z}),ep=(0,v.useMemo)(()=>(function(e,t){let r=[...e];for(let e=0;e<t;e+=1)r.push(r.shift());return r})(R,Y),[R,Y]),eg=function({startDate:e,endDate:t,withOutsideDates:r=!0,firstDayOfWeek:n=1}={}){let a,i=new Date,s=new Date(i.getFullYear()-1,i.getMonth(),i.getDate()),u=e?l(e):l(s),c=t?l(t):l(i),d=function(e,t){let r=new Date(e);for(;r.getUTCDay()!==t;)r=o(r,-1);return r}(u,n),m=(a=c.getUTCDay(),o(c,6-(7*(a<n)+a-n))),h=[],f=d;for(;f<=m;){let e=Array.from({length:7},(e,t)=>{let n=o(f,t);return r||n>=u&&n<=c?`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}-${String(n.getUTCDate()).padStart(2,"0")}`:null});h.push(e),f=o(f,7)}return h}({startDate:P,endDate:I,withOutsideDates:H,firstDayOfWeek:Y}),ev=V||Q?(t=0,r=null,n=[],eg.forEach(e=>{let a=new Date(null===e[0]?e[e.length-1]:e[0]).getUTCMonth();r!==a&&(r=a,n.push({month:r,position:t,size:0})),n[n.length-1].size+=1,t+=1}),n):[],ey={data:C,datesRange:eg,rectSize:F,gap:N,rectRadius:B,min:eh,max:ef,colors:W,withTooltip:X,setHoveredRect:eo,getRectProps:q,getStyles:ea},eb=Q?(0,a.jsx)(u,{...ey}):(0,a.jsx)(c,{...ey}),ex=Q?i(eg,Q).length:eg.length,ew=V&&z?ev.map((e,t)=>{let r=Q?2:3;if(e.size<r)return null;let n=z[e.month];return(0,a.jsx)("text",{x:((e,t)=>{if(!Q)return e*el+N+es;let r=ev[t],n=function(e,t){for(let r=0;r<e.length;r+=1){let n=e[r];if("column"===n.type&&n.month===t)return r}return -1}(i(eg,Q),r.month);return((n>=0?n:e)+1)*el+N+es})(e.position,t),y:ec?7*el+N+U-4:U-4,width:e.size*el,fontSize:K,...ea("monthLabel"),children:n},t)}):null,ek=L&&R?ep.map((e,t)=>(0,a.jsx)("text",{x:0,y:(t+1)*el-N+ed,width:$,fontSize:K,...ea("weekdayLabel"),children:e},t)):null,eM=G&&ei&&X?G(ei):null,eS=el*ex+N+es,eT=7*el+N+ed+em+(ee?10+F:0),eD=ee?(s=et[0],f=et[1],b=.6*K,x=s.length*b,k=(w=[void 0,...W||[]]).length*F+(w.length-1)*N,M=f.length*b,(0,a.jsxs)("g",{transform:`translate(${eS-(x+6+k+6+M)}, ${7*el+N+ed+em+10})`,"data-id":"legend",...ea("legend"),children:[(0,a.jsx)("text",{x:0,y:F/2,fontSize:K,dominantBaseline:"central",...ea("legendLabel"),children:s}),w.map((e,t)=>(0,a.jsx)("rect",{x:x+6+t*(F+N),y:0,width:F,height:F,rx:B,fill:e,"data-empty":void 0===e||void 0,...ea("legendRect")},t)),(0,a.jsx)("text",{x:x+6+k+6,y:F/2,fontSize:K,dominantBaseline:"central",...ea("legendLabel"),children:f})]})):null;return(0,a.jsxs)(m.Box,{component:"svg",width:eS,height:eT,...ea("root"),...en,children:[(0,a.jsx)(h.Tooltip.Floating,{label:eM,disabled:!X||!eM,position:"top",...J,children:(0,a.jsxs)("g",{transform:`translate(${es}, ${ed})`,"data-id":"all-weeks",children:[X&&(0,a.jsx)("rect",{fill:"transparent",width:el*ex+N,height:7*el+N}),eb]})}),ek,ew,eD]})});b.displayName="@mantine/charts/Heatmap",b.classes=d;let x={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},w={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},k={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},M={type:"configurator",component:function(e){return(0,a.jsx)(b,{data:r,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]};var S=e.i(494834);let T={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:t})=>`${(0,S.default)(e).format("DD MMM, YYYY")} – ${null===t||0===t?"No contributions":`${t} contribution${t>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} – \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},D={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},j={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},A={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:t})=>({onClick:()=>console.log({date:e,value:t})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},E={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]};var _={root:"m_2b796525"};let C={type:"code",component:function(){return(0,a.jsx)(b,{classNames:_,data:r,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:n,language:"tsx"}]},P={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,splitMonths:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},I={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,withLegend:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      withLegend
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},V={type:"code",component:function(){return(0,a.jsx)(b,{data:r,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,monthLabelsPosition:"bottom"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      monthLabelsPosition="bottom"
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]};var O=(0,t.__exportAll)({colors:()=>E,cssColors:()=>C,firstDayOfWeek:()=>j,getRectProps:()=>A,labels:()=>w,labelsText:()=>k,legend:()=>I,monthLabelsPosition:()=>V,rectSize:()=>M,splitMonths:()=>P,tooltip:()=>T,usage:()=>x,withOutsideDates:()=>D});e.s(["HeatmapDemos",0,O],753623)},857006,(e,t,r)=>{"use strict";var n=e.i(221168);Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.isBuffer=function(e){return void 0!==n.Buffer&&n.Buffer.isBuffer(e)}},857811,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.isPrototype=function(e){let t=e?.constructor;return e===("function"==typeof t?t.prototype:Object.prototype)}},72852,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(181825);r.isTypedArray=function(e){return n.isTypedArray(e)}},690071,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(877115);r.toInteger=function(e){let t=n.toFinite(e),r=t%1;return r?t-r:t}},252532,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(690071);r.times=function(e,t){if((e=n.toInteger(e))<1||!Number.isSafeInteger(e))return[];let r=Array(e);for(let n=0;n<e;n++)r[n]="function"==typeof t?t(n):n;return r}},254663,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(857006),a=e.r(857811),i=e.r(232040),o=e.r(72852),l=e.r(252532);function s(e){let t=[];for(let r in e)t.push(r);return t}r.keysIn=function(e){if(null==e)return[];switch(typeof e){case"object":case"function":if(i.isArrayLike(e)){var t;let r,a;return t=e,a=new Set(r=l.times(t.length,e=>`${e}`)),n.isBuffer(t)&&(a.add("offset"),a.add("parent")),o.isTypedArray(t)&&(a.add("buffer"),a.add("byteLength"),a.add("byteOffset")),[...r,...s(t).filter(e=>!a.has(e))]}if(a.isPrototype(e))return s(e).filter(e=>"constructor"!==e);return s(e);default:return s(Object(e))}}},339978,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(461119),a=e.r(568716),i=e.r(819206),o=e.r(810613),l=e.r(323247);function s(e,t){let r=1===t.length?e:n.get(e,t.slice(0,-1)),i=t[t.length-1];if(r?.[i]===void 0)return!0;if(a.isUnsafeProperty(i))return!1;try{return delete r[i],!0}catch{return!1}}r.unset=function(e,t){if(null==e)return!0;switch(typeof t){case"symbol":case"number":case"object":if(Array.isArray(t))return s(e,t);if("number"==typeof t?t=o.toKey(t):"object"==typeof t&&(t=Object.is(t?.valueOf(),-0)?"-0":String(t)),a.isUnsafeProperty(t))return!1;if(e?.[t]===void 0)return!0;try{return delete e[t],!0}catch{return!1}case"string":if(e?.[t]===void 0&&i.isDeepKey(t))return s(e,l.toPath(t));if(a.isUnsafeProperty(t))return!1;try{return delete e[t],!0}catch{return!1}}}},159629,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(467341);r.getSymbolsIn=function(e){let t=[];for(;e;)t.push(...n.getSymbols(e)),e=Object.getPrototypeOf(e);return t}},29300,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(232040);r.flatten=function(e,t=1){let r=[],a=Math.floor(t);if(!n.isArrayLike(e))return r;let i=(e,t)=>{for(let n=0;n<e.length;n++){let o=e[n];t<a&&(Array.isArray(o)||o?.[Symbol.isConcatSpreadable]||null!==o&&"object"==typeof o&&"[object Arguments]"===Object.prototype.toString.call(o))?Array.isArray(o)?i(o,t+1):i(Array.from(o),t+1):r.push(o)}};return i(Array.from(e),0),r}},824188,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.isPlainObject=function(e){if("object"!=typeof e||null==e)return!1;if(null===Object.getPrototypeOf(e))return!0;if("[object Object]"!==Object.prototype.toString.call(e)){let t=e[Symbol.toStringTag];return null!=t&&!!Object.getOwnPropertyDescriptor(e,Symbol.toStringTag)?.writable&&e.toString()===`[object ${t}]`}let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}},71917,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let n=e.r(828021),a=e.r(254663),i=e.r(339978),o=e.r(159629),l=e.r(819206),s=e.r(29300),u=e.r(824188);r.omit=function(e,...t){var r;if(null==e)return{};let c=(r=e,(t=s.flatten(t)).some(e=>Array.isArray(e)||l.isDeepKey(e))?function(e){let t={},r=[...a.keysIn(e),...o.getSymbolsIn(e)];for(let a=0;a<r.length;a++){let i=r[a];t[i]=n.cloneDeepWith(e[i],e=>{if(!u.isPlainObject(e))return e})}return t}(r):function(e){let t={},r=[...a.keysIn(e),...o.getSymbolsIn(e)];for(let n=0;n<r.length;n++){let a=r[n];t[a]=e[a]}return t}(r));for(let e=0;e<t.length;e++){let r=t[e];switch(typeof r){case"object":Array.isArray(r)||(r=Array.from(r));for(let e=0;e<r.length;e++){let t=r[e];i.unset(c,t)}break;case"string":case"symbol":case"number":i.unset(c,r)}}return c}},337174,(e,t,r)=>{t.exports=e.r(71917).omit},143918,e=>{"use strict";var t=e.i(648863),r=e.i(960831),n=e.i(647114),a=e.i(391398);let i={type:"configurator",component:function(e){return(0,a.jsx)(n.MaskInput,{...e,mask:"(999) 999-9999",placeholder:"(___) ___-____"})},code:`
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
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Time (HH:MM)",placeholder:"__:__",mask:[/[0-2]/,/\d/,":",/[0-5]/,/\d/]})},centered:!0,maxWidth:340};var u=e.i(883364);let c={type:"code",code:`
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
`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.MaskInput,{label:"Promo code",placeholder:"AAA-9999",mask:"AAA-9999",transform:e=>e.toUpperCase(),slotChar:"XXX-0000"}),(0,a.jsx)(u.Text,{size:"sm",mt:"sm",c:"dimmed",children:"Type lowercase letters – they will be auto-uppercased"})]})},centered:!0,maxWidth:340},d={type:"code",code:`
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
`,component:function(){return(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",success:"Looks good!"})},centered:!0,maxWidth:340};var f=e.i(191788),p=e.i(485108),g=e.i(725695);let v={type:"code",component:function(){let e=(0,f.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",resetRef:e}),(0,a.jsx)(g.Group,{mt:"md",children:(0,a.jsx)(p.Button,{onClick:()=>e.current?.(),children:"Reset"})})]})},code:`
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
`,maxWidth:340,centered:!0};var y=e.i(582498);let b={type:"code",component:function(){let e=(0,y.useForm)({mode:"uncontrolled",initialValues:{phone:""}});return(0,a.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,a.jsx)(n.MaskInput,{mask:"(999) 999-9999",placeholder:"(___) ___-____",label:"Phone",onChangeRaw:t=>e.setFieldValue("phone",t,{forceUpdate:!1})}),(0,a.jsx)(p.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
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
`,maxWidth:340,centered:!0};var x=(0,t.__exportAll)({customTokens:()=>l,disabled:()=>d,dynamic:()=>o,error:()=>m,regex:()=>s,resetRef:()=>v,success:()=>h,transform:()=>c,usage:()=>i,withUseForm:()=>b});e.s(["MaskInputDemos",0,x],143918)},869921,e=>{"use strict";var t=e.i(648448);e.s(["getTimeRange",0,function({startTime:e,endTime:r,interval:n}){let a=[],i=(0,t.timeToSeconds)(e),o=(0,t.timeToSeconds)(r),l=(0,t.timeToSeconds)(n);for(let e=i;e<=o;e+=l)a.push((0,t.secondsToTime)(e).timeString);return a}])},497275,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(779893);let a={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
`,centered:!0,maxWidth:340},i={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",clearable:!0,defaultValue:"12:34:44"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
`,centered:!0,maxWidth:340};var o=e.i(931882),l=e.i(671640);let s={type:"code",component:function(){return(0,r.jsxs)(l.Stack,{children:[(0,r.jsx)(n.TimePicker,{label:"clearSectionMode='both' (default)",defaultValue:"12:30",clearable:!0,rightSection:(0,r.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,r.jsx)(n.TimePicker,{label:"clearSectionMode='rightSection'",defaultValue:"12:30",clearable:!0,rightSection:(0,r.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,r.jsx)(n.TimePicker,{label:"clearSectionMode='clear'",defaultValue:"12:30",clearable:!0,rightSection:(0,r.jsx)(o.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <TimePicker
        label="clearSectionMode='both' (default)"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <TimePicker
        label="clearSectionMode='rightSection'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <TimePicker
        label="clearSectionMode='clear'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},u={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",disabled:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
`,centered:!0,maxWidth:340},c={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",defaultValue:"12:45:33",readOnly:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
`,centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",format:"12h"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.TimePicker,{label:"Enter time (24h format)",min:"10:00",max:"18:30"}),(0,r.jsx)(n.TimePicker,{label:"Enter time (12h format)",min:"10:00",max:"18:30",format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.TimePicker,{label:"Enter time (24h format)",withSeconds:!0,withDropdown:!0}),(0,r.jsx)(n.TimePicker,{label:"Enter time (12h format)",withSeconds:!0,withDropdown:!0,format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withSeconds:!0,withDropdown:!0,hoursStep:1,minutesStep:5,secondsStep:10})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withSeconds
      withDropdown
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
  );
}
`,centered:!0,maxWidth:340};var v=e.i(191788),y=e.i(593612),b=e.i(658109);let x={type:"code",component:function(){let[e,t]=(0,v.useState)(!1),[a,i]=(0,v.useState)("");return(0,r.jsx)(n.TimePicker,{withDropdown:!0,rightSection:(0,r.jsx)(b.ActionIcon,{onClick:()=>t(!0),variant:"default",children:(0,r.jsx)(y.ClockIcon,{size:18})}),value:a,onChange:e=>{i(e),""===a&&t(!1)},popoverProps:{opened:e,onChange:e=>!e&&t(!1)}})},code:`
import { useState } from 'react';
import { ClockIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <ClockIcon size={18} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
`,centered:!0,maxWidth:340};var w=e.i(301388),k=e.i(883364);let M=/^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\s?(AM|PM)$/,S=({time:e})=>{if(!M.test(e))return{hours:null,minutes:null,seconds:null,amPm:null};let[t,r,n]=e.split(":").map(e=>e.replace(/AM|PM/g,"")),a=e.toLowerCase().includes("pm");return{hours:"string"==typeof t?Number(t):null,minutes:"string"==typeof r?Number(r):null,seconds:"string"==typeof n?Number(n):0,amPm:a?"PM":"AM"}},T={type:"code",component:function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(n.TimePicker,{label:"Paste time here",format:"12h",withSeconds:!0,pasteSplit:S}),(0,r.jsxs)(k.Text,{mt:"md",children:["Try pasting time in 12h format in any input. For example, try pasting ",(0,r.jsx)(w.Code,{children:"12:34 PM"})," ","or ",(0,r.jsx)(w.Code,{children:"8:56:45 AM"})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { TimePicker, TimePickerPasteSplit } from '@mantine/dates';

const re = /^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\\s?(AM|PM)$/;

const customPasteSplit: TimePickerPasteSplit = ({ time }) => {
  if (!re.test(time)) {
    return { hours: null, minutes: null, seconds: null, amPm: null };
  }

  const [hours, minutes, second] = time.split(':').map((part) => part.replace(/AM|PM/g, ''));
  const isPm = time.toLowerCase().includes('pm');

  return {
    hours: typeof hours === 'string' ? Number(hours) : null,
    minutes: typeof minutes === 'string' ? Number(minutes) : null,
    seconds: typeof second === 'string' ? Number(second) : 0,
    amPm: isPm ? 'PM' : 'AM',
  };
};

function Demo() {
  return (
    <div>
      <TimePicker label="Paste time here" format="12h" withSeconds pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting time in 12h format in any input. For example, try pasting <Code>12:34 PM</Code>{' '}
        or <Code>8:56:45 AM</Code>
      </Text>
    </div>
  );
}
`,centered:!0,maxWidth:340},D={type:"configurator",component:function(e){return(0,r.jsx)(n.TimePicker,{withDropdown:!0,...e})},code:`
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},j={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},A={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,maxDropdownContentHeight:300,presets:[{label:"Morning",values:["06:00","06:30","08:00","08:30","10:00","10:45"]},{label:"Afternoon",values:["12:00","12:30","14:00","14:45","16:00","17:30"]},{label:"Evening",values:["18:00","18:30","20:00","22:00"]}]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      maxDropdownContentHeight={300}
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
`,centered:!0,maxWidth:340};var E=e.i(869921);let _={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,presets:(0,E.getTimeRange)({startTime:"06:00:00",endTime:"18:00:00",interval:"01:30:00"})})},code:`
import { getTimeRange, TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
    />
  );
}
`,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,closeDropdownOnPresetSelect:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      closeDropdownOnPresetSelect
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},P={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,popoverProps:{position:"top-start",middlewares:{flip:!1,shift:!1}}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false },
      }}
    />
  );
}
`,centered:!0,maxWidth:340},I={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withDropdown:!0,withSeconds:!0,format:"12h",popoverProps:{width:"target"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      withSeconds
      format="12h"
      popoverProps={{
        width: 'target',
      }}
    />
  );
}
`,centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter time",withSeconds:!0,hoursPlaceholder:"09",minutesPlaceholder:"50",secondsPlaceholder:"11"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" withSeconds hoursPlaceholder="09" minutesPlaceholder="50" secondsPlaceholder="11" />
  );
}
`,centered:!0,maxWidth:340},O={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds />;
}
`,centered:!0,maxWidth:340},L={type:"code",component:function(){return(0,r.jsx)(n.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0,minHoursDigits:3})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter duration"
      type="duration"
      withSeconds
      minHoursDigits={3}
    />
  );
}
`,centered:!0,maxWidth:340};var R=(0,t.__exportAll)({amPmLabels:()=>g,clearSectionMode:()=>s,clearable:()=>i,closeDropdownOnPresetSelect:()=>C,configurator:()=>D,controlledDropdown:()=>x,disabled:()=>u,dropdownPosition:()=>P,dropdownWidth:()=>I,duration:()=>O,format12h:()=>m,minHoursDigits:()=>L,minMax:()=>h,pasteSplit:()=>T,presets:()=>j,presetsGroups:()=>A,presetsRange:()=>_,readOnly:()=>c,steps:()=>p,usage:()=>a,withDropdown:()=>f,withPlaceholders:()=>V,withSeconds:()=>d});e.s(["TimePickerDemos",0,R],497275)},394554,e=>{"use strict";var t=e.i(648863),r=e.i(883364),n=e.i(841209),a=e.i(391398),i=e.i(509637);let o={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked value: {value}</Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,value:t,rawValue:o}=(0,i.useMask)({mask:"(999) 999-9999"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Phone number",placeholder:"(___) ___-____"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Masked value: ",t]}),(0,a.jsxs)(r.Text,{size:"sm",children:["Raw value: ",o]})]})}};var l=e.i(485108),s=e.i(725695);let u={type:"code",code:`
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, isComplete, rawValue } = useMask({
    mask: 'AAA-9999',
    slotChar: 'XXX-0000',
    transform: (char) => char.toUpperCase(),
  });

  return (
    <>
      <TextInput ref={ref} label="Promo code" placeholder="Enter promo code" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Group mt="xs">
        <Button disabled={!isComplete} size="xs">Apply code</Button>
      </Group>
    </>
  );
}
`,component:function(){let{ref:e,isComplete:t,rawValue:o}=(0,i.useMask)({mask:"AAA-9999",slotChar:"XXX-0000",transform:e=>e.toUpperCase()});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Promo code",placeholder:"Enter promo code"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Raw value: ",o]}),(0,a.jsx)(s.Group,{mt:"xs",children:(0,a.jsx)(l.Button,{disabled:!t,size:"xs",children:"Apply code"})})]})}},c={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '9999 9999 9999 9999',
    modify: (value) => {
      const digits = value.replace(/\\D/g, '');
      if (digits.startsWith('34') || digits.startsWith('37')) {
        return { mask: '9999 999999 99999' };
      }
    },
  });

  return (
    <>
      <TextInput ref={ref} label="Credit card number" placeholder="Enter card number" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Text size="xs" c="dimmed">Try starting with 34 or 37 for Amex format</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,i.useMask)({mask:"9999 9999 9999 9999",modify:e=>{let t=e.replace(/\D/g,"");if(t.startsWith("34")||t.startsWith("37"))return{mask:"9999 999999 99999"}}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Credit card number",placeholder:"Enter card number"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]}),(0,a.jsx)(r.Text,{size:"xs",c:"dimmed",children:"Try starting with 34 or 37 for Amex format"})]})}},d={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\#hhhhhh',
    tokens: { h: /[0-9a-fA-F]/ },
  });

  return (
    <>
      <TextInput ref={ref} label="Hex color" placeholder="#______" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,i.useMask)({mask:"\\#hhhhhh",tokens:{h:/[0-9a-fA-F]/}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Hex color",placeholder:"#______"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},m={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\A-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Product code" placeholder="A-____" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,i.useMask)({mask:"\\A-9999"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Product code",placeholder:"A-____"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},h={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: [/[0-2]/, /\\d/, ':', /[0-5]/, /\\d/],
  });

  return (
    <>
      <TextInput ref={ref} label="Time (HH:MM)" placeholder="__:__" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,i.useMask)({mask:[/[0-2]/,/\d/,":",/[0-5]/,/\d/]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Time (HH:MM)",placeholder:"__:__"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},f={type:"code",code:`
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue, reset } = useMask({
    mask: '(999) 999-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked: {value}</Text>
      <Text size="sm">Raw: {rawValue}</Text>
      <Group mt="xs">
        <Button size="xs" variant="default" onClick={reset}>Reset</Button>
      </Group>
    </>
  );
}
`,component:function(){let{ref:e,value:t,rawValue:o,reset:u}=(0,i.useMask)({mask:"(999) 999-9999"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TextInput,{ref:e,label:"Phone number",placeholder:"(___) ___-____"}),(0,a.jsxs)(r.Text,{size:"sm",mt:"sm",children:["Masked: ",t]}),(0,a.jsxs)(r.Text,{size:"sm",children:["Raw: ",o]}),(0,a.jsx)(s.Group,{mt:"xs",children:(0,a.jsx)(l.Button,{size:"xs",variant:"default",onClick:u,children:"Reset"})})]})}};var p=(0,t.__exportAll)({complete:()=>u,customTokens:()=>d,dynamic:()=>c,escape:()=>m,regex:()=>h,reset:()=>f,usage:()=>o});e.s(["UseMaskDemos",0,p],394554)},702296,e=>{"use strict";var t=e.i(648863),r=e.i(111018),n=e.i(191788),a=e.i(391398),i=e.i(337904),o=e.i(494834);let l={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)([null,null]),[r,l]=(0,n.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,a.jsx)(i.MonthPicker,{date:r,onDateChange:l,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&l(e=>(0,o.default)(e).add(1,"year").format("YYYY-MM-DD")),t(e)}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(1, 'year').format('YYYY-MM-DD'));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`},s=e=>(0,o.default)(e).year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:(0,o.default)(e).year()===new Date().getFullYear()+1?{disabled:!0}:{},u=e=>1===(0,o.default)(e).month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===(0,o.default)(e).month()?{disabled:!0}:{},c={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,a.jsx)(i.MonthPicker,{value:e,onChange:t,getYearControlProps:s,getMonthControlProps:u})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
  if (dayjs(date).year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (dayjs(date).month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},d={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,a.jsx)(i.MonthPicker,{decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,a.jsx)(i.MonthPicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <MonthPicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},h={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,a.jsx)(i.MonthPicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-01",maxDate:"2022-09-01"})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-01"
      maxDate="2022-09-01"
    />
  );
}
`},f={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.MonthPicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`},p={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.MonthPicker,{maxLevel:"year"})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`};e.i(39167);let g={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.MonthPicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`},v={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,n.useState)(null);return(0,a.jsx)(i.MonthPicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <MonthPicker fullWidth value={value} onChange={setValue} />;
}
`},y={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.MonthPicker,{presets:[{value:(0,o.default)().startOf("month").format("YYYY-MM-DD"),label:"This month"},{value:(0,o.default)().add(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,o.default)().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,o.default)().add(6,"month").startOf("month").format("YYYY-MM-DD"),label:"In 6 months"},{value:(0,o.default)().add(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Next year"},{value:(0,o.default)().subtract(1,"year").startOf("month").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        { value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'), label: 'In 6 months' },
        { value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},b={type:"code",centered:!0,component:function(){let e=(0,o.default)();return(0,a.jsx)(i.MonthPicker,{type:"range",presets:[{value:[e.subtract(3,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 3 months"},{value:[e.subtract(6,"month").startOf("month").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"Last 6 months"},{value:[e.startOf("year").format("YYYY-MM-DD"),e.startOf("month").format("YYYY-MM-DD")],label:"This year"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").startOf("month").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <MonthPicker
      type="range"
      presets={[
        {
          value: [today.subtract(3, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 3 months',
        },
        {
          value: [today.subtract(6, 'month').startOf('month').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'Last 6 months',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.startOf('month').format('YYYY-MM-DD')],
          label: 'This year',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').startOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1},x={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.MonthPicker,{withNativeLevelSelect:!0})},code:`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker withNativeLevelSelect />;
}
`};var w=(0,t.__exportAll)({controlProps:()=>c,controlledDate:()=>l,defaultDate:()=>m,deselect:()=>S,fullWidth:()=>v,labelFormat:()=>d,listFormat:()=>f,locale:()=>g,maxLevel:()=>p,minMax:()=>h,multiple:()=>M,nativeLevelSelect:()=>x,numberOfColumns:()=>j,presets:()=>y,presetsRange:()=>b,range:()=>T,singleRange:()=>D,sizeConfigurator:()=>A,usage:()=>k});let{usage:k,multiple:M,deselect:S,range:T,singleRange:D,numberOfColumns:j,sizeConfigurator:A}=(0,r.getSharedPickerDemos)(i.MonthPicker);e.s(["MonthPickerDemos",0,w],702296)},540486,e=>{"use strict";var t=e.i(648863),r=e.i(485108),n=e.i(725695),a=e.i(391398),i=e.i(579560),o=e.i(191788);function l(e,t,r,n){for(let n=e+1;n<t;n+=1)if(!r(n))return n;if(n){for(let t=0;t<e;t+=1)if(!r(t))return t}return e}function s(e,t,r,n){for(let t=e-1;t>=0;t-=1)if(!r(t))return t;if(n){for(let n=t-1;n>e;n-=1)if(!r(n))return n}return e}function u(e,t){for(let r=0;r<e;r+=1)if(!t(r))return r;return 0}function c(e,t){for(let r=e-1;r>=0;r-=1)if(!t(r))return r;return 0}let d=()=>!1;function m(e){let{total:t,orientation:r="horizontal",loop:n=!0,dir:a="ltr",activateOnFocus:m=!1,columns:h,focusedIndex:f,initialIndex:p,onFocusChange:g,isItemDisabled:v=d}=e,y=(0,o.useRef)(new Map),b="number"==typeof h&&h>0,[x,w]=(0,i.useUncontrolled)({value:f,defaultValue:void 0!==p?p:u(t,v),finalValue:0,onChange:g});(0,o.useEffect)(()=>{0!==t&&(x>=t?w(c(t,v)):v(x)&&w(u(t,v)))},[t,x,v]);let k=(0,o.useCallback)(e=>{w(e);let t=y.current.get(e);t&&(t.focus(),m&&t.click())},[m,w]),M=(0,o.useCallback)((e,r)=>{let n=Math.floor(r/h),i=r%h,o=Math.ceil(t/h),l=null,s="rtl"===a;switch(e.key){case"ArrowRight":{let e=s?i-1:i+1;if(e>=0&&e<h&&n*h+e<t){let t=n*h+e;v(t)||(l=t)}break}case"ArrowLeft":{let e=s?i+1:i-1;if(e>=0&&e<h&&n*h+e<t){let t=n*h+e;v(t)||(l=t)}break}case"ArrowDown":for(let e=n+1;e<o;e+=1){let r=e*h+i;if(r<t&&!v(r)){l=r;break}}break;case"ArrowUp":for(let e=n-1;e>=0;e-=1){let r=e*h+i;if(r<t&&!v(r)){l=r;break}}break;case"Home":if(e.ctrlKey)l=u(t,v);else{let e=n*h;for(let r=e;r<e+h&&r<t;r+=1)if(!v(r)){l=r;break}}break;case"End":if(e.ctrlKey)l=c(t,v);else{let e=n*h,r=Math.min(e+h,t)-1;for(let t=r;t>=e;t-=1)if(!v(t)){l=t;break}}}null!==l&&l!==r&&(e.preventDefault(),e.stopPropagation(),k(l))},[t,h,a,v,k]),S=(0,o.useCallback)((e,i)=>{let o="rtl"===a,d=null;switch(e.key){case"ArrowRight":("horizontal"===r||"both"===r)&&(d=o?s(i,t,v,n):l(i,t,v,n));break;case"ArrowLeft":("horizontal"===r||"both"===r)&&(d=o?l(i,t,v,n):s(i,t,v,n));break;case"ArrowDown":("vertical"===r||"both"===r)&&(d=l(i,t,v,n));break;case"ArrowUp":("vertical"===r||"both"===r)&&(d=s(i,t,v,n));break;case"Home":d=u(t,v);break;case"End":d=c(t,v)}null!==d&&d!==i&&(e.preventDefault(),e.stopPropagation(),k(d))},[t,r,n,a,v,k]);return{getItemProps:(0,o.useCallback)(e=>{let{index:t,onClick:r,onKeyDown:n}=e;return{tabIndex:t===x?0:-1,ref:e=>{e?y.current.set(t,e):y.current.delete(t)},onKeyDown:e=>{n?.(e),e.defaultPrevented||(b?M(e,t):S(e,t))},onClick:e=>{r?.(e),w(t)}}},[x,b,M,S,w]),focusedIndex:x,setFocusedIndex:w}}let h=["Bold","Italic","Underline","Strikethrough","Code"],f={type:"code",component:function(){let{getItemProps:e}=m({total:h.length,orientation:"horizontal",loop:!0});return(0,a.jsx)(n.Group,{gap:"xs",children:h.map((t,n)=>(0,a.jsx)(r.Button,{variant:"default",...e({index:n}),children:t},t))})},code:`
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}
`};var p=e.i(671640),g=e.i(284629);let v=["General","Account","Security","Notifications","Privacy"],y={type:"code",component:function(){let{getItemProps:e,focusedIndex:t}=m({total:v.length,orientation:"vertical",loop:!0});return(0,a.jsx)(p.Stack,{gap:4,w:200,children:v.map((r,n)=>(0,a.jsx)(g.UnstyledButton,{...e({index:n}),p:"xs",style:{borderRadius:"var(--mantine-radius-sm)",backgroundColor:t===n?"var(--mantine-color-blue-light)":void 0},children:r},r))})},code:`
import { Stack, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['General', 'Account', 'Security', 'Notifications', 'Privacy'];

function Demo() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    loop: true,
  });

  return (
    <Stack gap={4} w={200}>
      {items.map((item, index) => (
        <UnstyledButton
          key={item}
          {...getItemProps({ index })}
          p="xs"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          {item}
        </UnstyledButton>
      ))}
    </Stack>
  );
}
`};var b=e.i(140763);let x={type:"code",component:function(){let{getItemProps:e,focusedIndex:t}=m({total:9,columns:3});return(0,a.jsx)(b.SimpleGrid,{cols:3,w:300,spacing:"xs",children:Array.from({length:9},(r,n)=>(0,a.jsxs)(g.UnstyledButton,{...e({index:n}),p:"md",ta:"center",style:{borderRadius:"var(--mantine-radius-sm)",border:"1px solid var(--mantine-color-default-border)",backgroundColor:t===n?"var(--mantine-color-blue-light)":void 0},children:["Cell ",n+1]},n))})},code:`
import { SimpleGrid, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const total = 9;
  const columns = 3;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total,
    columns,
  });

  return (
    <SimpleGrid cols={columns} w={300} spacing="xs">
      {Array.from({ length: total }, (_, index) => (
        <UnstyledButton
          key={index}
          {...getItemProps({ index })}
          p="md"
          ta="center"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-default-border)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          Cell {index + 1}
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
`},w=`
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Cut', 'Copy', 'Paste', 'Delete', 'Select All'];
const disabledIndices = new Set([1, 3]);

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button
          key={item}
          variant="default"
          disabled={disabledIndices.has(index)}
          {...getItemProps({ index })}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
}
`,k=["Cut","Copy","Paste","Delete","Select All"],M=new Set([1,3]),S={type:"code",component:function(){let{getItemProps:e}=m({total:k.length,orientation:"horizontal",loop:!0,isItemDisabled:e=>M.has(e)});return(0,a.jsx)(n.Group,{gap:"xs",children:k.map((t,n)=>(0,a.jsx)(r.Button,{variant:"default",disabled:M.has(n),...e({index:n}),children:t},t))})},code:w};var T=e.i(37541);let D=["First","Second","Third","Fourth","Fifth"],j={type:"code",component:function(){let[e,t]=(0,o.useState)(!0),{getItemProps:i}=m({total:D.length,orientation:"horizontal",loop:e});return(0,a.jsxs)(p.Stack,{children:[(0,a.jsx)(T.Checkbox,{label:"Loop navigation",checked:e,onChange:e=>t(e.currentTarget.checked)}),(0,a.jsx)(n.Group,{gap:"xs",children:D.map((e,t)=>(0,a.jsx)(r.Button,{variant:"default",...i({index:t}),children:e},e))})]})},code:`
import { useState } from 'react';
import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Demo() {
  const [loop, setLoop] = useState(true);
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop,
  });

  return (
    <Stack>
      <Checkbox
        label="Loop navigation"
        checked={loop}
        onChange={(event) => setLoop(event.currentTarget.checked)}
      />
      <Group gap="xs">
        {items.map((item, index) => (
          <Button key={item} variant="default" {...getItemProps({ index })}>
            {item}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
`};var A=(0,t.__exportAll)({disabled:()=>S,grid:()=>x,loop:()=>j,usage:()=>f,vertical:()=>y});e.s(["UseRovingIndexDemos",0,A],540486)},749322,e=>{"use strict";var t=e.i(648863),r=e.i(391398),n=e.i(520916),a={root:"m_3c064071"},i=e.i(232471),o=e.i(481178),l=e.i(275519),s=e.i(853487),u=e.i(317477),c=e.i(401373),d=e.i(670989),m=e.i(779177),h=e.i(951254),f=e.i(44091),p=e.i(62904),g=e.i(391466),v=e.i(723451),y=e.i(694713),b=e.i(191788),x=e.i(337174),w=e.i(449691),k=e.i(815954),M=e.i(777541),S=e.i(629566),T=e.i(355345),D=e.i(516257),j=e.i(258111),A=e.i(270627),E=e.i(602227),_=e.i(901841),C=e.i(492900),P=e.i(458985),I=e.i(134518),V=e.i(128002),O=e.i(546189),L=e.i(451494),R=e.i(543372),H=e.i(500678),z=e.i(883388),Y=e.i(297974),F=e.i(75729),N=e.i(213743),B=e.i(57216),Z=e.i(823025),W=e.i(458594),$=e.i(933448);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var K={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}};function G(e){var t,r=(0,Y.resolveDefaultProps)(e,K),n=r.animationId,a=r.from,i=r.to,o=r.attributeName,l=r.isActive,s=r.canBegin,u=r.duration,c=r.easing,d=r.begin,m=r.onAnimationEnd,h=r.onAnimationStart,f=r.children,p=(0,Z.usePrefersReducedMotion)(),g="auto"===l?!B.Global.isSsr&&!p:l,v=(0,F.useAnimationController)(r.animationController),y=function(e){if(Array.isArray(e))return e}(t=(0,b.useState)(()=>g?a:i))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,a,i,o=[],l=!0,s=!1;try{a=(t=t.call(e)).next,!1;for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(e){s=!0,n=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw n}}return o}}(t)||function(e){if(e){if("string"==typeof e)return U(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(e,2):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=y[0],w=y[1],k=(0,b.useRef)(!1),M=(0,b.useCallback)(()=>{w(a),h()},[a,h]);return f(((0,b.useEffect)(()=>g&&s?(k.current=!0,v(new $.RequestAnimationFrameTimeoutController,new W.CSSTransitionAnimation({animationId:n+o,easing:c,animationDuration:u,animationBegin:d,onAnimationStart:M,onAnimationEnd:m,from:a,to:i}),w)):A.noop,[g,s,u,c,d,M,m,v,i,a,n,o]),g)?s?k.current?{transition:(0,N.getTransitionVal)([o],u,c),[o]:x}:{[o]:a}:{[o]:a}:{[o]:i})}var X=e.i(768069),J=e.i(560894),q=["width","height","className","style","children","type"];function Q(){return(Q=Object.assign.bind()).apply(null,arguments)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return et(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?et(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function er(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function en(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?er(Object(r),!0).forEach(function(t){ea(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ea(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ei="value",eo=(e,t)=>{if(e&&t)return(0,w.default)(e,t)},el=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(t,"children[").concat(e,"]")},es={chartName:"Treemap",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:eo,eventEmitter:void 0},eu=(e,t)=>"nest"===t?e-30:e,ec=e=>{var t,r=e.depth,n=e.node,a=e.index,i=e.dataKey,o=e.nameKey,l=e.nestedActiveTooltipIndex,s=0===r?"":el(a,l),u=n.children,c=r+1,d=u&&u.length?u.map((e,t)=>ec({depth:c,node:e,index:t,dataKey:i,nameKey:o,nestedActiveTooltipIndex:s})):null;if(d&&d.length)t=d.reduce((e,t)=>e+t.value,0);else{var m=n[i],h="number"==typeof m?m:0;t=(0,A.isNan)(h)||h<=0?0:h}return en(en({},n),{},{children:d,name:(0,D.getValueByDataKey)(n,o,""),[ei]:t,depth:r,index:a,tooltipIndex:s})},ed=(e,t,r)=>{var n=t*t,a=e.area*e.area,i=e.reduce((e,t)=>({min:Math.min(e.min,t.area),max:Math.max(e.max,t.area)}),{min:1/0,max:0}),o=i.min,l=i.max;return a?Math.max(n*l*r/a,a/(n*o*r)):1/0},em=(e,t,r,n)=>t===r.width?((e,t,r,n)=>{var a,i=t?Math.round(e.area/t):0;(n||i>r.height)&&(i=r.height);for(var o=r.x,l=0,s=e.length;l<s;l++)null!=(a=e[l])&&(a.x=o,a.y=r.y,a.height=i,a.width=Math.min(i?Math.round(a.area/i):0,r.x+r.width-o),o+=a.width);return null!=a&&(a.width+=r.x+r.width-o),en(en({},r),{},{y:r.y+i,height:r.height-i})})(e,t,r,n):((e,t,r,n)=>{var a,i=t?Math.round(e.area/t):0;(n||i>r.width)&&(i=r.width);for(var o=r.y,l=0,s=e.length;l<s;l++)null!=(a=e[l])&&(a.x=r.x,a.y=o,a.width=i,a.height=Math.min(i?Math.round(a.area/i):0,r.y+r.height-o),o+=a.height);return a&&(a.height+=r.y+r.height-o),en(en({},r),{},{x:r.x+i,width:r.width-i})})(e,t,r,n),eh=(e,t,r,n)=>{var a=e.children;if(a&&a.length){var i,o,l,s,u,c,d=((e,t)=>{if(!Number.isFinite(t)||t<=0)return e;var r=Math.min(t,e.width/2,e.height/2);return{x:e.x+r,y:e.y+r,width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}})({x:e.x,y:e.y,width:e.width,height:e.height},r),m=d,h=[],f=1/0,p=Math.min(m.width,m.height),g=(o=(i=m.width*m.height/e[ei])<0?0:i,a.map(e=>{var t=e[ei]*o;return en(en({},e),{},{area:(0,A.isNan)(t)||t<=0?0:t})})),v=g.slice();for(h.area=0;v.length>0;)null!=(l=ee(v,1)[0])&&(h.push(l),h.area+=l.area,(s=ed(h,p,t))<=f?(v.shift(),f=s):(h.area-=null!=(u=null==(c=h.pop())?void 0:c.area)?u:0,p=Math.min((m=em(h,p,m,!1)).width,m.height),h.length=h.area=0,f=1/0));h.length&&(m=em(h,p,m,!0),h.length=h.area=0);var y=((e,t,r)=>{if(!Number.isFinite(r)||r<=0)return e;var n=r/2,a=t.x+t.width,i=t.y+t.height;return e.map(e=>{var r=e.x+e.width,o=e.y+e.height,l=e.x>t.x?n:0,s=e.y>t.y?n:0;return en(en({},e),{},{x:e.x+l,y:e.y+s,width:Math.max(e.width-l-(r<a?n:0),0),height:Math.max(e.height-s-(o<i?n:0),0)})})})(g,d,n);return en(en({},e),{},{children:y.map(e=>eh(e,t,r,n))})}return e},ef=en({aspectRatio:.5*(1+Math.sqrt(5)),nodeInset:0,nodeGap:0,dataKey:"value",nameKey:"name",type:"flat",isAnimationActive:"auto",isUpdateAnimationActive:"auto",animationBegin:0,animationDuration:1500,animationEasing:"linear"},J.initialEventSettingsState),ep={isAnimationFinished:!1,formatRoot:null,currentRoot:void 0,nestIndex:[],prevAspectRatio:ef.aspectRatio,prevNodeInset:ef.nodeInset,prevNodeGap:ef.nodeGap,prevDataKey:ef.dataKey};function eg(e){var t=e.content,r=e.nodeProps,n=e.type,a=e.colorPanel,i=e.onMouseEnter,o=e.onMouseLeave,l=e.onClick;if(b.isValidElement(t))return b.createElement(k.Layer,{onMouseEnter:i,onMouseLeave:o,onClick:l},b.cloneElement(t,r));if("function"==typeof t)return b.createElement(k.Layer,{onMouseEnter:i,onMouseLeave:o,onClick:l},t(r));var s=r.x,u=r.y,c=r.width,d=r.height,m=r.index,h=null;c>10&&d>10&&r.children&&"nest"===n&&r.depth>0&&(h=b.createElement(S.Polygon,{points:[{x:s+2,y:u+d/2},{x:s+6,y:u+d/2+3},{x:s+2,y:u+d/2+6}]}));var f=null,p=(0,E.getStringSize)(r.name);c>20&&d>20&&p.width<c&&p.height<d&&(f=b.createElement("text",{x:s+8,y:u+d/2+7,fontSize:14},r.name));var g=a||j.COLOR_PANEL;return b.createElement("g",null,b.createElement(T.Rectangle,Q({fill:r.depth<2?g[m%g.length]:"rgba(255,255,255,0)",stroke:"#fff"},(0,x.default)(r,["children"]),{onMouseEnter:i,onMouseLeave:o,onClick:l,"data-recharts-item-index":r.tooltipIndex})),h,f)}function ev(e){var t=(0,R.useAppDispatch)(),r={x:e.nodeProps.x+e.nodeProps.width/2,y:e.nodeProps.y+e.nodeProps.height/2};return b.createElement(eg,Q({},e,{onMouseEnter:()=>{t((0,I.setActiveMouseOverItemIndex)({activeIndex:e.nodeProps.tooltipIndex,activeDataKey:e.dataKey,activeCoordinate:r,activeGraphicalItemId:e.id}))},onMouseLeave:()=>{},onClick:()=>{t((0,I.setActiveClickItemIndex)({activeIndex:e.nodeProps.tooltipIndex,activeDataKey:e.dataKey,activeCoordinate:r,activeGraphicalItemId:e.id}))}}))}var ey=b.memo(e=>{var t=e.dataKey,r=e.nameKey,n=e.stroke,a=e.fill,i=e.currentRoot,o=e.id,l={dataDefinedOnItem:i,getPosition:A.noop,settings:{stroke:n,strokeWidth:void 0,fill:a,dataKey:t,nameKey:r,name:void 0,hide:!1,type:void 0,color:a,unit:"",graphicalItemId:o}};return b.createElement(V.SetTooltipEntrySettings,{tooltipEntrySettings:l})}),eb={top:0,right:0,bottom:0,left:0};function ex(e){var t=e.content,r=e.nodeProps,n=e.isLeaf,a=e.treemapProps,i=e.onNestClick,o=a.id,l=a.isAnimationActive,s=a.animationBegin,u=a.animationDuration,c=a.animationEasing,d=a.isUpdateAnimationActive,m=a.type,h=a.colorPanel,f=a.dataKey,p=a.onAnimationStart,g=a.onAnimationEnd,v=a.onMouseEnter,y=a.onClick,x=a.onMouseLeave,w=r.width,M=r.height,S=r.x,T=r.y,D=-S-w,j=e=>{(n||"nest"===m)&&"function"==typeof v&&v(r,e)},A=e=>{(n||"nest"===m)&&"function"==typeof x&&x(r,e)},E=()=>{"nest"===m&&r.depth>0&&i(r),(n||"nest"===m)&&"function"==typeof y&&y(r)},_=(0,b.useCallback)(()=>{"function"==typeof g&&g()},[g]),C=(0,b.useCallback)(()=>{"function"==typeof p&&p()},[p]);return b.createElement(G,{animationId:"treemap-".concat(r.tooltipIndex),from:"translate(".concat(D,"px, ").concat(0,"px)"),to:"translate(0, 0)",attributeName:"transform",begin:s,easing:function(e){if("spring"!==e&&"string"==typeof e)return e}(c),isActive:l,duration:u,onAnimationStart:C,onAnimationEnd:_},e=>b.createElement(k.Layer,{onMouseEnter:j,onMouseLeave:A,onClick:E,style:en(en({},e),{},{transformOrigin:"".concat(S," ").concat(T)})},b.createElement(ev,{id:o,content:t,dataKey:f,nodeProps:en(en({},r),{},{isAnimationActive:l,isUpdateAnimationActive:!d,width:w,height:M,x:S,y:T}),type:m,colorPanel:h})))}class ew extends b.PureComponent{constructor(){super(...arguments),ea(this,"state",en({},ep)),ea(this,"handleClick",e=>{var t=this.props,r=t.onClick,n=t.type;if("nest"===n&&e.children){var a=this.props,i=a.width,o=a.height,l=a.dataKey,s=a.nameKey,u=a.aspectRatio,c=a.nodeInset,d=a.nodeGap,m=ec({depth:0,node:en(en({},e),{},{x:0,y:0,width:i,height:eu(o,n)}),index:0,dataKey:l,nameKey:s,nestedActiveTooltipIndex:e.tooltipIndex}),h=eh(m,u,c,d),f=this.state.nestIndex;f.push(e),this.setState({formatRoot:h,currentRoot:m,nestIndex:f})}r&&r(e)}),ea(this,"handleTouchMove",e=>{var t=e.touches[0];if(null!=t){var r=document.elementFromPoint(t.clientX,t.clientY);if(r&&r.getAttribute&&null!=this.state.formatRoot){var n=r.getAttribute("data-recharts-item-index"),a=eo(this.state.formatRoot,n);if(null!=a&&"object"==typeof a&&"x"in a&&"y"in a&&"width"in a&&"height"in a&&"number"==typeof a.x&&"number"==typeof a.y&&"number"==typeof a.width&&"number"==typeof a.height){var i=this.props,o=i.dataKey,l=i.dispatch,s={x:a.x+a.width/2,y:a.y+a.height/2};l((0,I.setActiveMouseOverItemIndex)({activeIndex:n,activeDataKey:o,activeCoordinate:s,activeGraphicalItemId:this.props.id}))}}}})}static getDerivedStateFromProps(e,t){if(e.data!==t.prevData||e.type!==t.prevType||e.width!==t.prevWidth||e.height!==t.prevHeight||e.dataKey!==t.prevDataKey||e.aspectRatio!==t.prevAspectRatio||e.nodeInset!==t.prevNodeInset||e.nodeGap!==t.prevNodeGap){var r=ec({depth:0,node:{children:e.data,x:0,y:0,width:e.width,height:eu(e.height,e.type)},index:0,dataKey:e.dataKey,nameKey:e.nameKey}),n=eh(r,e.aspectRatio,e.nodeInset,e.nodeGap);return en(en({},t),{},{formatRoot:n,currentRoot:r,nestIndex:[r],prevAspectRatio:e.aspectRatio,prevData:e.data,prevWidth:e.width,prevHeight:e.height,prevDataKey:e.dataKey,prevType:e.type,prevNodeInset:e.nodeInset,prevNodeGap:e.nodeGap})}return null}handleNestIndex(e,t){var r=this.state.nestIndex,n=this.props,a=n.width,i=n.height,o=n.dataKey,l=n.nameKey,s=n.aspectRatio,u=n.nodeInset,c=n.nodeGap,d=n.type,m=ec({depth:0,node:en(en({},e),{},{x:0,y:0,width:a,height:eu(i,d)}),index:0,dataKey:o,nameKey:l,nestedActiveTooltipIndex:e.tooltipIndex}),h=eh(m,s,u,c);r=r.slice(0,t+1),this.setState({formatRoot:h,currentRoot:e,nestIndex:r})}renderNode(e,t){var r=this.props,n=r.content,a=r.type,i=en(en(en({},(0,z.svgPropertiesNoEvents)(this.props)),t),{},{root:e}),o=!t.children||!t.children.length,l=this.state.currentRoot;return!((null==l?void 0:l.children)||[]).filter(e=>e.depth===t.depth&&e.name===t.name).length&&e.depth&&"nest"===a?null:b.createElement(k.Layer,{key:"recharts-treemap-node-".concat(i.x,"-").concat(i.y,"-").concat(i.name),className:"recharts-treemap-depth-".concat(t.depth)},b.createElement(ex,{isLeaf:o,content:n,nodeProps:i,treemapProps:this.props,onNestClick:this.handleClick}),t.children&&t.children.length?t.children.map(e=>this.renderNode(t,e)):null)}renderAllNodes(){var e=this.state.formatRoot;return e?this.renderNode(e,e):null}renderNestIndex(){var e=this.props,t=e.nameKey,r=e.nestIndexContent,n=this.state.nestIndex;return b.createElement("div",{className:"recharts-treemap-nest-index-wrapper",style:{marginTop:"8px",textAlign:"center"}},n.map((e,n)=>{var a,i=(0,w.default)(e,t,"root");return b.isValidElement(r)&&(a=b.cloneElement(r,e,n)),a="function"==typeof r?r(e,n):"string"==typeof i?i:"root",b.createElement("div",{onClick:this.handleNestIndex.bind(this,e,n),key:"nest-index-".concat((0,A.uniqueId)()),className:"recharts-treemap-nest-index-box",style:{cursor:"pointer",display:"inline-block",padding:"0 7px",background:"#000",color:"#fff",marginRight:"3px"}},a)}))}render(){var e=this.props,t=e.width,r=e.height,n=(e.className,e.style,e.children),a=e.type,i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,q),o=(0,z.svgPropertiesNoEvents)(i);return b.createElement(b.Fragment,null,b.createElement(ey,{dataKey:this.props.dataKey,nameKey:this.props.nameKey,stroke:this.props.stroke,fill:this.props.fill,currentRoot:this.state.currentRoot,id:this.props.id}),b.createElement(M.Surface,Q({},o,{width:t,height:eu(r,a),onTouchMove:this.handleTouchMove}),this.renderAllNodes(),n),"nest"===a&&this.renderNestIndex())}}function ek(e){var t=(0,R.useAppDispatch)(),r=(0,_.useChartWidth)(),n=(0,_.useChartHeight)();if(!(0,H.isPositiveNumber)(r)||!(0,H.isPositiveNumber)(n))return null;var a=e.id;return b.createElement(X.RegisterGraphicalItemId,{id:a,type:"treemap"},a=>b.createElement(ew,Q({},e,{id:a,width:r,height:n,dispatch:t})))}function eM(e){var t,r=(0,Y.resolveDefaultProps)(e,ef),n=r.className,a=r.style,i=r.width,o=r.height,l=r.throttleDelay,s=r.throttledEvents,u=ee((0,b.useState)(null),2),c=u[0],d=u[1];return b.createElement(O.RechartsStoreProvider,{preloadedState:{options:es},reduxStoreName:null!=(t=r.className)?t:"Treemap"},b.createElement(_.ReportChartMargin,{margin:eb}),b.createElement(L.ReportEventSettings,{throttleDelay:l,throttledEvents:s}),b.createElement(P.RechartsWrapper,{dispatchTouchEvents:!1,className:n,style:a,width:i,height:o,responsive:!1,ref:e=>{null==c&&null!=e&&d(e)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},b.createElement(C.TooltipPortalContext.Provider,{value:c},b.createElement(ek,r))))}ea(ew,"displayName","Treemap");let eS={dataKey:"value",withTooltip:!0,tooltipAnimationDuration:0,height:300,strokeWidth:1,aspectRatio:.5*(1+Math.sqrt(5))},eT=(0,o.createVarsResolver)((e,{strokeColor:t,height:r})=>({root:{"--chart-stroke-color":t?(0,u.getThemeColor)(t,e):void 0,"--chart-height":(0,m.rem)(r)}}));function eD({x:e,y:t,width:n,height:a,depth:i,name:o,resolvedColors:l,resolvedLabelColors:s,index:u,strokeWidth:c}){let d=l[o]||`var(--mantine-color-blue-${u%9+1})`,m=s[o]||"var(--mantine-color-white)";return(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:e,y:t,width:n,height:a,fill:i>=1?d:"transparent",stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:i>=1?c:0}),i>=1&&n>30&&a>20&&(0,r.jsx)("text",{x:e+n/2,y:t+a/2,textAnchor:"middle",dominantBaseline:"central",fill:m,fontSize:12,fontFamily:"var(--mantine-font-family)",children:o})]})}let ej=(0,l.factory)(e=>{let t=(0,f.useProps)("Treemap",eS,e),{classNames:o,className:l,style:m,styles:b,unstyled:x,vars:w,data:k,dataKey:M,aspectRatio:S,withTooltip:T,tooltipAnimationDuration:D,tooltipProps:j,treemapProps:A,strokeColor:E,textColor:_,height:C,strokeWidth:P,valueFormatter:I,autoContrast:V,children:O,attributes:L,...R}=t,H=(0,h.useMantineTheme)(),z=function e(t,r,n){let a={};for(let i of t){let t=i.color||n;t&&(a[i.name]=(0,d.parseThemeColor)({color:t,theme:r}).value),i.children&&Object.assign(a,e(i.children,r,t))}return a}(k,H),Y=(0,s.getAutoContrastValue)(V,H),F=_?(0,u.getThemeColor)(_,H):void 0,N=function(e,t,r,n){let a={};for(let[i,o]of Object.entries(e))n?a[i]=n:t&&(a[i]=(0,c.isLightColor)(o,r)?"var(--mantine-color-black)":"var(--mantine-color-white)");return a}(z,Y,H.luminanceThreshold,F),B=(0,g.useStyles)({name:"Treemap",classes:a,props:t,className:l,style:m,classNames:o,styles:b,unstyled:x,attributes:L,vars:w,varsResolver:eT}),{resolvedClassNames:Z,resolvedStyles:W}=(0,p.useResolvedStylesApi)({classNames:o,styles:b,props:t});return(0,r.jsx)(i.Box,{...B("root"),...R,children:(0,r.jsx)(v.ResponsiveContainer,{height:C,children:(0,r.jsxs)(eM,{data:k,dataKey:M,aspectRatio:S,isAnimationActive:!1,content:e=>(0,r.jsx)(eD,{...e,resolvedColors:z,resolvedLabelColors:N,strokeWidth:P}),...A,children:[T&&(0,r.jsx)(y.Tooltip,{animationDuration:D,isAnimationActive:!1,content:({payload:e})=>(0,r.jsx)(n.ChartTooltip,{payload:e?.map(e=>({name:e.name,value:e.value,color:z[e.name]||"var(--mantine-color-blue-6)"}))||[],classNames:Z,styles:W,type:"radial",valueFormatter:I,attributes:L}),...j}),O]})})})});ej.displayName="@mantine/charts/Treemap",ej.classes=a,ej.varsResolver=eT;let eA=[{name:"USA",value:400,color:"indigo.0"},{name:"India",value:300,color:"yellow.1"},{name:"Japan",value:100,color:"teal.1"},{name:"Other",value:200,color:"gray.2"}],eE={type:"code",component:function(){return(0,r.jsx)(ej,{data:eA,autoContrast:!0})},code:`
import { Treemap } from '@mantine/charts';

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return <Treemap data={data} autoContrast />;
}
`},e_=[{name:"USA",value:400,color:"indigo.8"},{name:"India",value:300,color:"red.8"},{name:"Japan",value:100,color:"teal.8"},{name:"Other",value:200,color:"gray.8"}],eC=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: 'red.8' },
  { name: 'Japan', value: 100, color: 'teal.8' },
  { name: 'Other', value: 200, color: 'gray.8' },
];
`,eP=[{name:"Frontend",color:"blue.8",children:[{name:"React",value:400},{name:"Vue",value:200},{name:"Angular",value:150}]},{name:"Backend",color:"teal.8",children:[{name:"Node",value:300},{name:"Python",value:250},{name:"Go",value:100}]},{name:"Mobile",color:"red.8",children:[{name:"React Native",value:200},{name:"Flutter",value:180}]}],eI={type:"code",component:function(){return(0,r.jsx)(ej,{data:e_})},code:[{code:`
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:eC,language:"tsx",fileName:"data.ts"}]},eV={type:"code",component:function(){return(0,r.jsx)(ej,{data:eP})},code:[{code:`
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
export const data = [
  {
    name: 'Frontend',
    color: 'blue.8',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.8',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'red.8',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];
`,language:"tsx",fileName:"data.ts"}]},eO={type:"code",component:function(){return(0,r.jsx)(ej,{data:e_,withTooltip:!1})},code:[{code:`
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:eC,language:"tsx",fileName:"data.ts"}]},eL={type:"code",component:function(){return(0,r.jsx)(ej,{data:e_,strokeColor:"gray.3",strokeWidth:2})},code:[{code:`
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} strokeColor="gray.3" strokeWidth={2} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:eC,language:"tsx",fileName:"data.ts"}]},eR={type:"code",component:function(){return(0,r.jsx)(ej,{data:e_})},code:[{code:`
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:eC,language:"tsx",fileName:"data.ts"}]};var eH=(0,t.__exportAll)({autoContrast:()=>eE,color:()=>eI,nestedDataDemo:()=>eV,noTooltip:()=>eO,strokeColor:()=>eL,usage:()=>eR});e.s(["TreemapDemos",0,eH],749322)},159013,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(753623),a=e.i(143918),i=e.i(702296),o=e.i(599466),l=e.i(76206),s=e.i(497275),u=e.i(720271),c=e.i(749322),d=e.i(394554),m=e.i(540486),h=e.i(500120);e.i(603441);var f=e.i(62558);e.i(457450);var p=e.i(418026);let g=(0,f.Layout)(p.MDX_DATA.Changelog910);function v(e){let f={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:p,SponsorButton:g}=f;return p||y("Demo",!0),g||y("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(f.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(f.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(f.h2,{id:"deduplicateinlinestyles",children:"deduplicateInlineStyles"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.code,{children:"deduplicateInlineStyles"})," prop on ",(0,t.jsx)(f.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," enables\nReact 19 style tag deduplication for responsive ",(0,t.jsx)(f.a,{href:"/styles/style-props",children:"style props"}),".\nWhen many components share the same responsive style prop values, only a single ",(0,t.jsx)(f.code,{children:"<style />"}),"\ntag is generated and hoisted to ",(0,t.jsx)(f.code,{children:"<head />"})," instead of each component injecting its own:"]}),"\n",(0,t.jsx)(f.pre,{children:(0,t.jsx)(f.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateInlineStyles>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(f.p,{children:["This can significantly improve performance when rendering large lists of components\nwith identical responsive style props. See the\n",(0,t.jsx)(f.a,{href:"/styles/styles-performance",children:"styles performance guide"})," for more details."]}),"\n",(0,t.jsx)(f.h2,{id:"use-mask-hook",children:"use-mask hook"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/hooks/use-mask",children:"use-mask"})," hook attaches real-time input masking to any ",(0,t.jsx)(f.code,{children:"<input>"})," element via\na ref callback. It formats user input against a defined pattern and exposes both the masked display\nvalue and the raw unmasked value. The hook supports built-in and custom tokens, dynamic masks,\ncharacter transforms, optional segments, and regex array format:"]}),"\n",(0,t.jsx)(p,{data:d.UseMaskDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"maskinput-component",children:"MaskInput component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/mask-input",children:"MaskInput"})," component is a wrapper around ",(0,t.jsx)(f.a,{href:"/hooks/use-mask",children:"use-mask"})," hook\nthat provides all standard input props (label, description, error, etc.) and supports all mask options:"]}),"\n",(0,t.jsx)(p,{data:a.MaskInputDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"treemap-component",children:"Treemap component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/charts/treemap",children:"Treemap"})," component displays hierarchical data as a set of nested\nrectangles. It is based on the ",(0,t.jsx)(f.a,{href:"https://recharts.org/en-US/api/Treemap",children:"Treemap recharts component"}),":"]}),"\n",(0,t.jsx)(p,{data:c.TreemapDemos.nestedDataDemo}),"\n",(0,t.jsx)(f.h2,{id:"timepicker-duration-type",children:"TimePicker duration type"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/time-picker",children:"TimePicker"})," component now supports ",(0,t.jsx)(f.code,{children:'type="duration"'})," prop that allows\nentering durations that exceed 24 hours. In this mode, the hours field has no upper limit\nand the input width adjusts dynamically based on the entered value:"]}),"\n",(0,t.jsx)(p,{data:s.TimePickerDemos.duration}),"\n",(0,t.jsx)(f.h2,{id:"heatmap-legend",children:"Heatmap legend"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/charts/heatmap",children:"Heatmap"})," component now supports ",(0,t.jsx)(f.code,{children:"withLegend"})," prop that displays\na color legend below the chart. Use ",(0,t.jsx)(f.code,{children:"legendLabels"})," prop to customize labels\n(default: ",(0,t.jsx)(f.code,{children:"['Less', 'More']"}),"):"]}),"\n",(0,t.jsx)(p,{data:n.HeatmapDemos.legend}),"\n",(0,t.jsx)(f.h2,{id:"monthpicker-and-yearpicker-presets",children:"MonthPicker and YearPicker presets"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/month-picker",children:"MonthPicker"})," and ",(0,t.jsx)(f.a,{href:"/dates/year-picker",children:"YearPicker"})," components now support\n",(0,t.jsx)(f.code,{children:"presets"})," prop that allows adding predefined values to pick from. Presets are also available\nin ",(0,t.jsx)(f.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and ",(0,t.jsx)(f.a,{href:"/dates/year-picker-input",children:"YearPickerInput"}),"\ncomponents:"]}),"\n",(0,t.jsx)(p,{data:i.MonthPickerDemos.presets}),"\n",(0,t.jsx)(f.h2,{id:"use-roving-index-hook",children:"use-roving-index hook"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/hooks/use-roving-index",children:"use-roving-index"})," hook implements the\n",(0,t.jsx)(f.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex",children:"roving tabindex"}),"\nkeyboard navigation pattern. It manages ",(0,t.jsx)(f.code,{children:"tabIndex"})," state for a group of focusable elements,\nhandles arrow key navigation with disabled item skipping, and supports both 1D lists and 2D grids:"]}),"\n",(0,t.jsx)(p,{data:m.UseRovingIndexDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"tree-drag-and-drop",children:"Tree drag and drop"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," component now supports drag-and-drop reordering of nodes.\nProvide ",(0,t.jsx)(f.code,{children:"onDragDrop"})," callback to enable it, and use the ",(0,t.jsx)(f.code,{children:"moveTreeNode"})," utility\nto update data based on the result:"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.dragDrop}),"\n",(0,t.jsx)(f.h2,{id:"tree-async-loading",children:"Tree async loading"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," now supports lazy loading of children. Set ",(0,t.jsx)(f.code,{children:"hasChildren: true"}),"\non a node without providing ",(0,t.jsx)(f.code,{children:"children"})," – when the node is expanded for the first time,\n",(0,t.jsx)(f.code,{children:"onLoadChildren"})," callback passed to ",(0,t.jsx)(f.code,{children:"useTree"})," is called. Use ",(0,t.jsx)(f.code,{children:"mergeAsyncChildren"}),"\nutility to splice loaded children into your data:"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.asyncLoading}),"\n",(0,t.jsx)(f.h2,{id:"tree-search-and-filtering",children:"Tree search and filtering"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," now includes ",(0,t.jsx)(f.code,{children:"filterTreeData"})," utility to filter tree data based on\na search query. Matching nodes and their ancestors are preserved in the result. You can\nprovide a custom filter function for advanced matching (for example, fuzzy search with fuse.js):"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.searchFilter}),"\n",(0,t.jsx)(f.h2,{id:"tree-connecting-lines",children:"Tree connecting lines"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," now supports ",(0,t.jsx)(f.code,{children:"withLines"})," prop to display connecting lines\nshowing parent-child relationships. Lines adapt to ",(0,t.jsx)(f.code,{children:"levelOffset"})," spacing automatically:"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.lines}),"\n",(0,t.jsx)(f.h2,{id:"tree-virtualization",children:"Tree virtualization"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"Tree"})," now provides ",(0,t.jsx)(f.code,{children:"flattenTreeData"})," utility and ",(0,t.jsx)(f.code,{children:"FlatTreeNode"})," component\nfor virtualized rendering of large trees. The component does not depend on any\nvirtualization library – you supply one yourself (e.g., ",(0,t.jsx)(f.code,{children:"@tanstack/react-virtual"}),"):"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.virtualized}),"\n",(0,t.jsx)(f.h2,{id:"tree-checkstrictly-mode",children:"Tree checkStrictly mode"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/tree",children:"useTree"})," hook now supports ",(0,t.jsx)(f.code,{children:"checkStrictly"})," option. When enabled, checking\na parent node does not affect children and vice versa – each node's checked state is\nfully independent:"]}),"\n",(0,t.jsx)(p,{data:u.TreeDemos.checkStrictly}),"\n",(0,t.jsx)(f.h2,{id:"slider-startpointvalue",children:"Slider startPointValue"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,t.jsx)(f.code,{children:"startPointValue"})," prop that changes\nthe origin of the filled bar. When set, the bar extends from the given value toward the\ncurrent value – to the left for values below the start point and to the right for values above it:"]}),"\n",(0,t.jsx)(p,{data:l.SliderDemos.startPoint}),"\n",(0,t.jsx)(f.h2,{id:"weekview-forcecurrenttimeindicator",children:"WeekView forceCurrentTimeIndicator"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/schedule/week-view",children:"WeekView"})," component now supports ",(0,t.jsx)(f.code,{children:"forceCurrentTimeIndicator"})," prop.\nWhen set, the current time indicator is displayed on the same day of week even when viewing\na different week:"]}),"\n",(0,t.jsx)(p,{data:h.WeekViewDemos.forceCurrentTimeIndicator}),"\n",(0,t.jsx)(f.h2,{id:"new-demo-monthview-events-rendering",children:"New demo: MonthView events rendering"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/schedule/month-view",children:"MonthView"})," demo shows how to use ",(0,t.jsx)(f.code,{children:"renderEvent"})," to visually\ndifferentiate all-day and timed events. All-day events render as regular colored bars,\nwhile timed events display as a colored dot with the start time and title:"]}),"\n",(0,t.jsx)(p,{data:o.MonthViewDemos.timedEvents}),"\n",(0,t.jsx)(f.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(f.ul,{children:["\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/core/tabs",children:"Tabs"})," component now supports ",(0,t.jsx)(f.code,{children:"keepMountedMode"})," prop that controls how inactive tab panels are hidden when ",(0,t.jsx)(f.code,{children:"keepMounted"})," is ",(0,t.jsx)(f.code,{children:"true"}),". Set ",(0,t.jsx)(f.code,{children:'keepMountedMode="display-none"'})," to use ",(0,t.jsx)(f.code,{children:"display: none"})," styles instead of the default ",(0,t.jsx)(f.code,{children:"Activity"})," component."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/hooks/use-click-outside",children:"useClickOutside"})," hook now supports ",(0,t.jsx)(f.code,{children:"enabled"})," parameter to dynamically enable/disable the listener. The hook also uses ",(0,t.jsx)(f.code,{children:"event.composedPath()"})," in both ",(0,t.jsx)(f.code,{children:"ref"})," and ",(0,t.jsx)(f.code,{children:"nodes"})," branches for consistent Shadow DOM support and correctly ignores clicks on detached DOM nodes in the single-ref mode."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/hooks/use-counter",children:"useCounter"})," hook now supports ",(0,t.jsx)(f.code,{children:"step"})," option to configure increment/decrement step size (default ",(0,t.jsx)(f.code,{children:"1"}),")."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/hooks/use-debounced-callback",children:"useDebouncedCallback"})," hook now supports ",(0,t.jsx)(f.code,{children:"maxWait"})," option to guarantee execution within a maximum time window during continuous calls, and ",(0,t.jsx)(f.code,{children:"isPending()"})," method to check if a debounced call is waiting."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/hooks/use-debounced-value",children:"useDebouncedValue"})," hook now returns a ",(0,t.jsx)(f.code,{children:"flush"})," method to immediately apply the pending debounced value."]}),"\n",(0,t.jsxs)(f.li,{children:[(0,t.jsx)(f.a,{href:"/hooks/use-scroll-into-view",children:"useScrollIntoView"})," hook now supports ",(0,t.jsx)(f.code,{children:"onScrollCancel"})," callback that fires when the scroll animation is interrupted by the user, and returns a ",(0,t.jsx)(f.code,{children:"scrolling"})," boolean to indicate whether a scroll animation is in progress."]}),"\n"]})]})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(g,{...e,children:(0,t.jsx)(v,{...e})})}])},971930,(e,t,r)=>{let n="/changelog/9-1-0";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(159013)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
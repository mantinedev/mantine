(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},134959,e=>{"use strict";var t=e.i(191788),a=e.i(815954);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}e.s(["Shape",0,function(e){var r,i,o=e.option,l=e.DefaultShape,s=e.shapeProps,c=e.activeClassName,d=e.inActiveClassName,u=function(e){if("index"in e){var t=e.index;return"number"==typeof t||"string"==typeof t?t:void 0}}(s);return i=(0,t.isValidElement)(o)?(0,t.cloneElement)(o,(r=(0,t.isValidElement)(o)?o.props:o,n(n({},s),r))):o===l?t.createElement(l,s):"function"==typeof o?o(s,u):"object"==typeof o?t.createElement(l,n(n({},s),o)):t.createElement(l,s),"isActive"in s&&!0===s.isActive?t.createElement(a.Layer,{className:void 0===c?"recharts-active-shape":c},i):t.createElement(a.Layer,{className:void 0===d?"recharts-shape":d},i)}])},777079,(e,t,a)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.for("react.view_transition"),y=Symbol.for("react.client.reference");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case l:case o:case u:case p:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case h:case m:case s:return e;default:return t}}case n:return t}}}a.ContextConsumer=s,a.ContextProvider=c,a.Element=r,a.ForwardRef=d,a.Fragment=i,a.Lazy=h,a.Memo=m,a.Portal=n,a.Profiler=l,a.StrictMode=o,a.Suspense=u,a.SuspenseList=p,a.isContextConsumer=function(e){return v(e)===s},a.isContextProvider=function(e){return v(e)===c},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a.isForwardRef=function(e){return v(e)===d},a.isFragment=function(e){return v(e)===i},a.isLazy=function(e){return v(e)===h},a.isMemo=function(e){return v(e)===m},a.isPortal=function(e){return v(e)===n},a.isProfiler=function(e){return v(e)===l},a.isStrictMode=function(e){return v(e)===o},a.isSuspense=function(e){return v(e)===u},a.isSuspenseList=function(e){return v(e)===p},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===o||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===c||e.$$typeof===s||e.$$typeof===d||e.$$typeof===y||void 0!==e.getModuleId)||!1},a.typeOf=v},767875,(e,t,a)=>{"use strict";t.exports=e.r(777079)},888494,e=>{"use strict";var t=e.i(191788),a=e.i(395598),r=e.i(543372),n=e.i(662688),i=e=>e.chartData.chartData,o=e=>{var t=e.chartData;return{startIndex:t.dataStartIndex,endIndex:t.dataEndIndex}};e.s(["ChartDataContextProvider",0,e=>{var i=e.chartData,o=(0,r.useAppDispatch)(),l=(0,n.useIsPanorama)();return(0,t.useEffect)(()=>l?()=>{}:(o((0,a.setChartData)(i)),()=>{o((0,a.setChartData)(void 0))}),[i,o,l]),null},"SetComputedData",0,e=>{var n=e.computedData,i=(0,r.useAppDispatch)();return(0,t.useEffect)(()=>(i((0,a.setComputedData)(n)),()=>{i((0,a.setChartData)(void 0))}),[n,i]),null},"useChartData",0,()=>(0,r.useAppSelector)(i),"useDataIndex",0,()=>(0,r.useAppSelector)(o)])},602227,e=>{"use strict";var t=e.i(57216);function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var a,n,i;a=e,n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},{cacheSize:2e3,enableCache:!0}),n=new class{constructor(e){!function(e,t,a){var r;(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(this,"cache",new Map),this.maxSize=e}get(e){var t=this.cache.get(e);return void 0!==t&&(this.cache.delete(e),this.cache.set(e,t)),t}set(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxSize){var a=this.cache.keys().next().value;null!=a&&this.cache.delete(a)}this.cache.set(e,t)}clear(){this.cache.clear()}size(){return this.cache.size}}(r.cacheSize),i={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},o="recharts_measurement_span",l=(e,t)=>{try{var a=document.getElementById(o);a||((a=document.createElement("span")).setAttribute("id",o),a.setAttribute("aria-hidden","true"),document.body.appendChild(a)),Object.assign(a.style,i,t),a.textContent="".concat(e);var r=a.getBoundingClientRect();return{width:r.width,height:r.height}}catch(e){return{width:0,height:0}}};e.s(["getStringSize",0,function(e){var a,i,o,s,c,d,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e||t.Global.isSsr)return{width:0,height:0};if(!r.enableCache)return l(e,u);var p=(a=u.fontSize||"",i=u.fontFamily||"",o=u.fontWeight||"",s=u.fontStyle||"",c=u.letterSpacing||"",d=u.textTransform||"","".concat(e,"|").concat(a,"|").concat(i,"|").concat(o,"|").concat(s,"|").concat(c,"|").concat(d)),m=n.get(p);if(m)return m;var h=l(e,u);return n.set(p,h),h}],602227)},61320,e=>{"use strict";var t,a,r,n=e.i(191788),i=e.i(56206),o=e.i(270627),l=e.i(57216),s=e.i(602227);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,c=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=({}).toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var u=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,p=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,m=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,h=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,f={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},y=["cm","mm","pt","pc","in","Q","px"];class v{static parse(e){var t,a=c(null!=(t=h.exec(e))?t:[],3),r=a[1],n=a[2];return null==r?v.NaN:new v(parseFloat(r),null!=n?n:"")}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,(0,o.isNan)(e)&&(this.unit=""),""===t||m.test(t)||(this.num=NaN,this.unit=""),function(e){return y.includes(e)}(t)&&(this.num=function(e,t){return e*f[t]}(e,t),this.unit="px")}add(e){return this.unit!==e.unit?new v(NaN,""):new v(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new v(NaN,""):new v(this.num-e.num,this.unit)}multiply(e){return""!==this.unit&&""!==e.unit&&this.unit!==e.unit?new v(NaN,""):new v(this.num*e.num,this.unit||e.unit)}divide(e){return""!==this.unit&&""!==e.unit&&this.unit!==e.unit?new v(NaN,""):new v(this.num/e.num,this.unit||e.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return(0,o.isNan)(this.num)}}function x(e){if(null==e||e.includes("NaN"))return"NaN";for(var t=e;t.includes("*")||t.includes("/");){var a,r=c(null!=(a=u.exec(t))?a:[],4),n=r[1],i=r[2],o=r[3],l=v.parse(null!=n?n:""),s=v.parse(null!=o?o:""),d="*"===i?l.multiply(s):l.divide(s);if(d.isNaN())return"NaN";t=t.replace(u,d.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var m,h=c(null!=(m=p.exec(t))?m:[],4),f=h[1],y=h[2],x=h[3],b=v.parse(null!=f?f:""),g=v.parse(null!=x?x:""),D="+"===y?b.add(g):b.subtract(g);if(D.isNaN())return"NaN";t=t.replace(p,D.toString())}return t}a="NaN",r=new v(NaN,""),(a="symbol"==typeof(t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?t:t+"")in v?Object.defineProperty(v,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):v[a]=r;var b=/\(([^()]*)\)/;function g(e){var t=function(e){try{var t;return t=e.replace(/\s+/g,""),t=function(e){for(var t,a=e;null!=(t=b.exec(a));){var r=c(t,2)[1];a=a.replace(b,x(r))}return a}(t),t=x(t)}catch(e){return"NaN"}}(e.slice(5,-1));return"NaN"===t?"":t}var D=e.i(62037),P=e.i(297974),j=e.i(500678),k=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],I=["dx","dy","angle","className","breakAll"];function w(){return(w=Object.assign.bind()).apply(null,arguments)}function S(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,c=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var a=({}).toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var Y=/[ \f\n\r\t\v\u2028\u2029]+/,M=e=>{var t=e.children,a=e.breakAll,r=e.style;try{var n=[];(0,o.isNullish)(t)||(n=a?t.toString().split(""):t.toString().split(Y));var i=n.map(e=>({word:e,width:(0,s.getStringSize)(e,r).width})),l=a?0:(0,s.getStringSize)(" ",r).width;return{wordsWithComputedWidth:i,spaceWidth:l}}catch(e){return null}},N=(e,t,a,r)=>e.reduce((e,n)=>{var i=n.word,o=n.width,l=e[e.length-1];return l&&null!=o&&(null==t||r||l.width+o+a<Number(t))?(l.words.push(i),l.width+=o+a):e.push({words:[i],width:o}),e},[]),O=e=>e.reduce((e,t)=>e.width>t.width?e:t),L=(e,t,a,r,n,i,o,l)=>{var s=M({breakAll:a,style:r,children:e.slice(0,t)+"…"});if(!s)return[!1,[]];var c=N(s.wordsWithComputedWidth,i,o,l);return[c.length>n||O(c).width>Number(i),c]},_=e=>[{words:(0,o.isNullish)(e)?[]:e.toString().split(Y),width:void 0}],E="#808080",T={angle:0,breakAll:!1,capHeight:"0.71em",fill:E,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},W=(0,n.forwardRef)((e,t)=>{var a,r=(0,P.resolveDefaultProps)(e,T),s=r.x,c=r.y,d=r.lineHeight,u=r.capHeight,p=r.fill,m=r.scaleToFit,h=r.textAnchor,f=r.verticalAnchor,y=S(r,k),v=(0,n.useMemo)(()=>(e=>{var t=e.width,a=e.scaleToFit,r=e.children,n=e.style,i=e.breakAll,s=e.maxLines;if((t||a)&&!l.Global.isSsr){var c=M({breakAll:i,children:r,style:n});if(!c)return _(r);var d=c.wordsWithComputedWidth,u=c.spaceWidth;return((e,t,a,r,n)=>{var i,l=e.maxLines,s=e.children,c=e.style,d=e.breakAll,u=(0,o.isNumber)(l),p=String(s),m=N(t,r,a,n);if(!u||n||!(m.length>l||O(m).width>Number(r)))return m;for(var h=0,f=p.length-1,y=0;h<=f&&y<=p.length-1;){var v=Math.floor((h+f)/2),x=C(L(p,v-1,d,c,l,r,a,n),2),b=x[0],g=x[1],D=C(L(p,v,d,c,l,r,a,n),1)[0];if(b||D||(h=v+1),b&&D&&(f=v-1),!b&&D){i=g;break}y++}return i||m})({breakAll:i,children:r,maxLines:s,style:n},d,u,t,!!a)}return _(r)})({breakAll:y.breakAll,children:y.children,maxLines:y.maxLines,scaleToFit:m,style:y.style,width:y.width}),[y.breakAll,y.children,y.maxLines,m,y.style,y.width]),x=y.dx,b=y.dy,A=y.angle,Y=y.className,W=y.breakAll,V=S(y,I);if(!(0,o.isNumOrStr)(s)||!(0,o.isNumOrStr)(c)||0===v.length)return null;var z=Number(s)+((0,o.isNumber)(x)?x:0),F=Number(c)+((0,o.isNumber)(b)?b:0);if(!(0,j.isWellBehavedNumber)(z)||!(0,j.isWellBehavedNumber)(F))return null;switch(f){case"start":a=g("calc(".concat(u,")"));break;case"middle":a=g("calc(".concat((v.length-1)/2," * -").concat(d," + (").concat(u," / 2))"));break;default:a=g("calc(".concat(v.length-1," * -").concat(d,")"))}var B=[],R=v[0];if(m&&null!=R){var $=R.width,G=y.width;B.push("scale(".concat((0,o.isNumber)(G)&&(0,o.isNumber)($)?G/$:1,")"))}return A&&B.push("rotate(".concat(A,", ").concat(z,", ").concat(F,")")),B.length&&(V.transform=B.join(" ")),n.createElement("text",w({},(0,D.svgPropertiesAndEvents)(V),{ref:t,x:z,y:F,className:(0,i.clsx)("recharts-text",Y),textAnchor:h,fill:p.includes("url")?E:p}),v.map((e,t)=>{var r=e.words.join(W?"":" ");return n.createElement("tspan",{x:z,dy:0===t?a:d,key:"".concat(r,"-").concat(t)},r)}))});W.displayName="Text",e.s(["Text",0,W,"isRenderableText",0,function(e){return(0,o.isNullish)(e)||"string"==typeof e||"number"==typeof e||"boolean"==typeof e},"isValidTextAnchor",0,function(e){return"start"===e||"middle"===e||"end"===e||"inherit"===e}],61320)},836094,436323,e=>{"use strict";var t=e.i(191788),a=e.i(662688),r=e.i(901841),n=e.i(543372),i=e.i(245073);e.s(["SetLegendPayload",0,function(e){var r=e.legendPayload,o=(0,n.useAppDispatch)(),l=(0,a.useIsPanorama)(),s=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{l||(null===s.current?o((0,i.addLegendPayload)(r)):s.current!==r&&o((0,i.replaceLegendPayload)({prev:s.current,next:r})),s.current=r)},[o,l,r]),(0,t.useLayoutEffect)(()=>()=>{s.current&&(o((0,i.removeLegendPayload)(s.current)),s.current=null)},[o]),null},"SetPolarLegendPayload",0,function(e){var a=e.legendPayload,o=(0,n.useAppDispatch)(),l=(0,n.useAppSelector)(r.selectChartLayout),s=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{("centric"===l||"radial"===l)&&(null===s.current?o((0,i.addLegendPayload)(a)):s.current!==a&&o((0,i.replaceLegendPayload)({prev:s.current,next:a})),s.current=a)},[o,l,a]),(0,t.useLayoutEffect)(()=>()=>{s.current&&(o((0,i.removeLegendPayload)(s.current)),s.current=null)},[o]),null}],836094);var o=e.i(120271),l=(0,t.memo)(e=>{var a=(0,n.useAppDispatch)(),r=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{null===r.current?a((0,o.addCartesianGraphicalItem)(e)):r.current!==e&&a((0,o.replaceCartesianGraphicalItem)({prev:r.current,next:e})),r.current=e},[a,e]),(0,t.useLayoutEffect)(()=>()=>{r.current&&(a((0,o.removeCartesianGraphicalItem)(r.current)),r.current=null)},[a]),null}),s=(0,t.memo)(e=>{var a=(0,n.useAppDispatch)(),r=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{null===r.current?a((0,o.addPolarGraphicalItem)(e)):r.current!==e&&a((0,o.replacePolarGraphicalItem)({prev:r.current,next:e})),r.current=e},[a,e]),(0,t.useLayoutEffect)(()=>()=>{r.current&&(a((0,o.removePolarGraphicalItem)(r.current)),r.current=null)},[a]),null});e.s(["SetCartesianGraphicalItem",0,l,"SetPolarGraphicalItem",0,s],436323)},174755,e=>{"use strict";e.s(["getClassNameFromUnknown",0,function(e){return e&&"object"==typeof e&&"className"in e&&"string"==typeof e.className?e.className:""}])},300244,e=>{"use strict";var t=e=>null;t.displayName="Cell",e.s(["Cell",0,t])},616468,e=>{"use strict";var t=e.i(543372),a=e.i(134518);e.s(["useMouseClickItemDispatch",0,(e,r,n)=>{var i=(0,t.useAppDispatch)();return(t,o)=>l=>{null==e||e(t,o,l),i((0,a.setActiveClickItemIndex)({activeIndex:String(o),activeDataKey:r,activeCoordinate:t.tooltipPosition,activeGraphicalItemId:n}))}},"useMouseEnterItemDispatch",0,(e,r,n)=>{var i=(0,t.useAppDispatch)();return(t,o)=>l=>{null==e||e(t,o,l),i((0,a.setActiveMouseOverItemIndex)({activeIndex:String(o),activeDataKey:r,activeCoordinate:t.tooltipPosition,activeGraphicalItemId:n}))}},"useMouseLeaveItemDispatch",0,e=>{var r=(0,t.useAppDispatch)();return(t,n)=>i=>{null==e||e(t,n,i),r((0,a.mouseLeaveItem)())}}])},780950,e=>{"use strict";var t=e.i(775538);e.s(["selectXAxisIdFromGraphicalItemId",0,function(e,a){var r,n;return null!=(r=null==(n=e.graphicalItems.cartesianItems.find(e=>e.id===a))?void 0:n.xAxisId)?r:t.defaultAxisId},"selectYAxisIdFromGraphicalItemId",0,function(e,a){var r,n;return null!=(r=null==(n=e.graphicalItems.cartesianItems.find(e=>e.id===a))?void 0:n.yAxisId)?r:t.defaultAxisId}])},39167,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(e,t,a){var r,n;return"m"===a?t?"минута":"минуту":e+" "+(r=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var l=function(e,r){return i.test(r)?t[e.month()]:a[e.month()]};l.s=a,l.f=t;var s=function(e,t){return i.test(t)?r[e.month()]:n[e.month()]};s.s=n,s.f=r;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(e.r(494834))},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),i=e.i(700145),o=e.i(853487),l=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},p=e.i(391398);let m={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:l,offset:s,size:c,radius:d,zIndex:u,autoContrast:p})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,o.getAutoContrastValue)(p,e)?(0,i.getContrastColor)({color:r,theme:e,autoContrast:p}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,a.getRadius)(d),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,i="number"==typeof a?a:a.y,o=(0,t.rem)(n),l=(0,t.rem)(i),[s,c]=e.split("-");return"top"===s&&(r["--indicator-top"]=l,r["--indicator-translate-y"]="-50%"),"middle"===s&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===s&&(r["--indicator-bottom"]=l,r["--indicator-translate-y"]="50%"),"start"===c&&(r["--indicator-left"]=o,r["--indicator-translate-x"]="-50%"),"center"===c&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===c&&(r["--indicator-right"]=o,r["--indicator-translate-x"]="50%"),r}(l,s)}})),f=(0,c.factory)(e=>{let t=(0,l.useProps)("Indicator",m,e),{classNames:a,className:r,style:n,styles:i,unstyled:o,vars:c,children:f,position:y,offset:v,inline:x,label:b,radius:g,color:D,withBorder:P,disabled:j,processing:k,zIndex:I,autoContrast:w,maxValue:S,showZero:C,mod:A,attributes:Y,...M}=t,N=(0,s.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:n,classNames:a,styles:i,unstyled:o,attributes:Y,vars:c,varsResolver:h}),O=!C&&(0===b||"0"===b),L=void 0!==S&&"number"==typeof b&&b>S?`${S}+`:b;return(0,p.jsxs)(d.Box,{...N("root"),mod:[{inline:x},A],...M,children:[!j&&!O&&(0,p.jsx)(d.Box,{mod:{"with-label":!!b,"with-border":P,processing:k},...N("indicator"),children:L}),f]})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},878166,e=>{"use strict";var t=e.i(494834),a=e.i(205693),r=e.i(422696),n=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:i,defaultValue:o,onChange:l,locale:s,format:c,closeOnChange:d,sortDates:u,labelSeparator:p,valueFormatter:m}){let h=(0,a.useDatesContext)(),[f,y]=(0,n.useDisclosure)(!1),[v,x]=(0,r.useUncontrolledDates)({type:e,value:i,defaultValue:o,onChange:l}),b=function({formatter:e,...a}){return(e||function({type:e,date:a,locale:r,format:n,labelSeparator:i}){let o=e=>(0,t.default)(e).locale(r).format(n);if("default"===e)return null===a?"":o(a);if("multiple"===e)return a.map(o).join(", ");if("range"===e&&Array.isArray(a)){if(a[0]&&a[1])return`${o(a[0])} ${i} ${o(a[1])}`;if(a[0])return`${o(a[0])} ${i} `}return""})(a)}({type:e,date:v,locale:h.getLocale(s),format:c,labelSeparator:h.getLabelSeparator(p),formatter:m}),g=a=>{d&&("default"===e&&y.close(),"range"===e&&a[0]&&a[1]&&y.close()),u&&"multiple"===e?x([...a].sort((e,a)=>(0,t.default)(e).isAfter((0,t.default)(a))?1:-1)):x(a)};return{_value:v,setValue:g,onClear:()=>g("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!v[0]:"multiple"===e?v.length>0:null!==v,formattedValue:b,dropdownOpened:f,dropdownHandlers:y}}],878166)},267073,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),i=e.i(777141),o=e.i(391398),l=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,l.factory)(e=>{let l=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],d,e),{type:u,value:p,defaultValue:m,onChange:h,valueFormat:f,labelSeparator:y,locale:v,classNames:x,styles:b,unstyled:g,closeOnChange:D,size:P,variant:j,dropdownType:k,sortDates:I,minDate:w,maxDate:S,vars:C,defaultDate:A,valueFormatter:Y,presets:M,attributes:N,...O}=l,{resolvedClassNames:L,resolvedStyles:_}=(0,c.useResolvedStylesApi)({classNames:x,styles:b,props:l}),{calendarProps:E,others:T}=(0,n.pickCalendarProps)(O),{_value:W,setValue:V,formattedValue:z,dropdownHandlers:F,dropdownOpened:B,onClear:R,shouldClear:$}=(0,r.useDatesInput)({type:u,value:p,defaultValue:m,onChange:h,locale:v,format:f,labelSeparator:y,closeOnChange:D,sortDates:I,valueFormatter:Y}),G=Array.isArray(W)?W[0]||A:W||A;return(0,o.jsx)(a.PickerInputBase,{formattedValue:z,dropdownOpened:B,dropdownHandlers:F,classNames:L,styles:_,unstyled:g,onClear:R,shouldClear:$,value:W,size:P,variant:j,dropdownType:k,...T,type:u,__staticSelector:"DatePickerInput",attributes:N,children:(0,o.jsx)(i.DatePicker,{...E,size:P,variant:j,type:u,value:W,defaultDate:G||(0,t.getDefaultClampedDate)({maxDate:S,minDate:w}),onChange:V,locale:v,classNames:L,styles:_,unstyled:g,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===k,minDate:w,maxDate:S,presets:M,attributes:N})})});u.classes={...a.PickerInputBase.classes,...i.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},789859,328233,482593,e=>{"use strict";var t=e.i(191788),a=e.i(56206),r=e.i(778979),n=e.i(883388),i=e.i(270627);function o(){return(o=Object.assign.bind()).apply(null,arguments)}var l=e=>{var l=e.cx,s=e.cy,c=e.r,d=e.className,u=(0,a.clsx)("recharts-dot",d);return(0,i.isNumber)(l)&&(0,i.isNumber)(s)&&(0,i.isNumber)(c)?t.createElement("circle",o({},(0,n.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:u,cx:l,cy:s,r:c})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),u=e.i(561622),p=e.i(446354),m=["points"];function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function y(){return(y=Object.assign.bind()).apply(null,arguments)}function v(e){var r=e.option,n=e.dotProps,i=e.className;if((0,t.isValidElement)(r))return(0,t.cloneElement)(r,n);if("function"==typeof r)return r(n);var o=(0,a.clsx)(i,"boolean"!=typeof r?r.className:""),s=null!=n?n:{},c=(s.points,function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(s,m));return t.createElement(l,y({},c,{className:o}))}e.s(["Dots",0,function(e){var a=e.points,r=e.dot,n=e.className,i=e.dotClassName,o=e.dataKey,l=e.baseProps,m=e.needClip,h=e.clipPathId,x=e.zIndex,b=void 0===x?p.DefaultZIndexes.scatter:x;if(null==a||!r&&1!==a.length)return null;var g=(0,c.isClipDot)(r),D=(0,d.svgPropertiesAndEventsFromUnknown)(r),P=a.map((e,n)=>{var s,c,d=f(f(f({r:3},l),D),{},{index:n,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:o,value:e.value,payload:e.payload,points:a});return t.createElement(v,{key:"dot-".concat(n),option:r,dotProps:d,className:i})}),j={};return m&&null!=h&&(j.clipPath="url(#clipPath-".concat(g?"":"dots-").concat(h,")")),t.createElement(u.ZIndexLayer,{zIndex:b},t.createElement(s.Layer,y({className:n},j),P))}],789859);var x=e.i(543372),b=e.i(281695),g=e.i(630173);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=e=>{var a,i=e.point,o=e.childIndex,c=e.mainColor,d=e.activeDot,u=e.dataKey,p=e.clipPath;if(!1===d||null==i.x||null==i.y)return null;var m=P(P(P({},{index:o,dataKey:u,cx:i.x,cy:i.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:i.payload,value:i.value}),(0,n.svgPropertiesNoEventsFromUnknown)(d)),(0,r.adaptEventHandlers)(d));return a=(0,t.isValidElement)(d)?(0,t.cloneElement)(d,m):"function"==typeof d?d(m):t.createElement(l,m),t.createElement(s.Layer,{className:"recharts-active-dot",clipPath:p},a)};e.s(["ActivePoints",0,function(e){var a=e.points,r=e.mainColor,n=e.activeDot,o=e.itemDataKey,l=e.clipPath,s=e.zIndex,c=void 0===s?p.DefaultZIndexes.activeDot:s,d=(0,x.useAppSelector)(b.selectActiveTooltipIndex),m=(0,g.useActiveTooltipDataPoints)();if(null==a||null==m)return null;var h=a.find(e=>m.includes(e.payload));return(0,i.isNullish)(h)?null:t.createElement(u.ZIndexLayer,{zIndex:c},t.createElement(j,{point:h,childIndex:Number(d),mainColor:r,dataKey:o,activeDot:n,clipPath:l}))}],482593)},554687,e=>{"use strict";var t=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var a=(0,t.svgPropertiesNoEventsFromUnknown)(e);if(null!=a){var r=a.r,n=a.strokeWidth,i=Number(r),o=Number(n);return(Number.isNaN(i)||i<0)&&(i=3),(Number.isNaN(o)||o<0)&&(o=2),{r:i,strokeWidth:o}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var t=e.i(391398);e.s(["PointLabel",0,function({x:e,y:a,value:r,valueFormatter:n}){return(0,t.jsx)("g",{transform:`translate(${e},${a})`,children:(0,t.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:n?n(r):r})})}])},321020,e=>{"use strict";e.s(["Area",()=>eb,"computeArea",()=>ex],321020);var t=e.i(191788),a=e.i(56206),r=e.i(815954),n=e.i(301426),i=e.i(789859),o=e.i(270627),l=e.i(516257),s=e.i(106043),c=e.i(482593),d=e.i(128002),u=e.i(777814),p=e.i(314169),m=e.i(83727),h=e.i(901841),f=e.i(399479),y=e.i(365441),v=e.i(755335),x=e.i(780950),b=(e,t,a)=>(0,m.selectAxisWithScale)(e,"xAxis",(0,x.selectXAxisIdFromGraphicalItemId)(e,t),a),g=(e,t,a)=>(0,m.selectTicksOfGraphicalItem)(e,"xAxis",(0,x.selectXAxisIdFromGraphicalItemId)(e,t),a),D=(e,t,a)=>(0,m.selectAxisWithScale)(e,"yAxis",(0,x.selectYAxisIdFromGraphicalItemId)(e,t),a),P=(e,t,a)=>(0,m.selectTicksOfGraphicalItem)(e,"yAxis",(0,x.selectYAxisIdFromGraphicalItemId)(e,t),a),j=(0,p.createSelector)([h.selectChartLayout,b,D,g,P],(e,t,a,r,n)=>(0,l.isCategoricalAxis)(e,"xAxis")?(0,l.getBandSizeOfAxis)(t,r,!1):(0,l.getBandSizeOfAxis)(a,n,!1)),k=(0,p.createSelector)([m.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),I=e=>{var t=(0,h.selectChartLayout)(e);return(0,l.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},w=(0,p.createSelector)([k,(e,t,a)=>(0,m.selectStackGroups)(e,I(e),"yAxis"===I(e)?(0,x.selectYAxisIdFromGraphicalItemId)(e,t):(0,x.selectXAxisIdFromGraphicalItemId)(e,t),a)],(e,t)=>{if(null!=e&&null!=t){var a,r=e.stackId,n=(0,y.getStackSeriesIdentifier)(e);if(null!=r&&null!=n){var i=null==(a=t[r])?void 0:a.stackedData,o=null==i?void 0:i.find(e=>e.key===n);if(null!=o)return o.map(e=>[e[0],e[1]])}}}),S=(0,p.createSelector)([h.selectChartLayout,b,D,g,P,w,f.selectChartDataWithIndexesIfNotInPanoramaPosition3,j,k,v.selectChartBaseValue],(e,t,a,r,n,i,o,l,s,c)=>{var d,u=o.chartData,p=o.dataStartIndex,m=o.dataEndIndex;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=a&&null!=r&&null!=n&&0!==r.length&&0!==n.length&&null!=l){var h=s.data;if(null!=(d=h&&h.length>0?h:null==u?void 0:u.slice(p,m+1)))return ex({layout:e,xAxis:t,yAxis:a,xAxisTicks:r,yAxisTicks:n,dataStartIndex:p,areaSettings:s,stackedData:i,displayedData:d,chartBaseValue:c,bandSize:l})}}),C=e.i(662688),A=e.i(524970),Y=e.i(836094),M=e.i(543372),N=e.i(945031),O=e.i(634200),L=e.i(325551),_=e.i(297974),E=e.i(630173),T=e.i(768069),W=e.i(436323),V=e.i(883388),z=e.i(554687),F=e.i(62037),B=e.i(134959),R=e.i(561622),$=e.i(446354),G=e.i(547810),H=e.i(366998),K=e.i(500678),q=e.i(382863),Z=["animationElapsedTime","isAnimating","isEntrance","layout","isRange","stroke","connectNulls"],U=["id","baseLine"];function X(){return(X=Object.assign.bind()).apply(null,arguments)}function Q(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function J(e){var a,r,n=e.alpha,i=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(a=l[0])?void 0:a.x,d=null==(r=l[l.length-1])?void 0:r.x;if(!(0,K.isWellBehavedNumber)(c)||!(0,K.isWellBehavedNumber)(d))return null;var u=n*Math.abs(c-d),p=Math.max(...l.map(e=>e.y||0));return((0,o.isNumber)(i)?p=Math.max(i,p):i&&Array.isArray(i)&&i.length&&(p=Math.max(...i.map(e=>e.y||0),p)),(0,o.isNumber)(p))?t.createElement("rect",{x:c<d?c:c-u,y:0,width:u,height:Math.floor(p+(s?parseInt("".concat(s),10):1))}):null}function ee(e){var a,r,n=e.alpha,i=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(a=l[0])?void 0:a.y,d=null==(r=l[l.length-1])?void 0:r.y;if(!(0,K.isWellBehavedNumber)(c)||!(0,K.isWellBehavedNumber)(d))return null;var u=n*Math.abs(c-d),p=Math.max(...l.map(e=>e.x||0));return((0,o.isNumber)(i)?p=Math.max(i,p):i&&Array.isArray(i)&&i.length&&(p=Math.max(...i.map(e=>e.x||0),p)),(0,o.isNumber)(p))?t.createElement("rect",{x:0,y:c<d?c:c-u,width:p+(s?parseInt("".concat(s),10):1),height:Math.floor(u)}):null}function et(e){var a=e.alpha,r=e.layout,n=e.points,i=e.baseLine,o=e.strokeWidth;return"vertical"===r?t.createElement(ee,{alpha:a,points:n,baseLine:i,strokeWidth:o}):t.createElement(J,{alpha:a,points:n,baseLine:i,strokeWidth:o})}var ea=["id"],er=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function en(){return(en=Object.assign.bind()).apply(null,arguments)}function ei(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function eo(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function el(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eo(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eo(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var es={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:O.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"matched"===e.status?[el(el({},e.next),{},{x:(0,o.interpolate)(e.prev.x,e.next.x,t),y:(0,o.interpolate)(e.prev.y,e.next.y,t)})]:"added"===e.status?[e.next]:[]),connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,shape:function(e){var a,n=e.animationElapsedTime,i=void 0===n?1:n,o=e.isAnimating,l=e.isEntrance,s=e.layout,c=e.isRange,d=e.stroke,u=e.connectNulls,p=Q(e,Z),m="vertical"===s?"vertical":"horizontal",h=null!=u&&u,f=(0,q.useId)(),y=p.id,v=p.baseLine,x=Q(p,U),b=(0,V.svgPropertiesNoEvents)(x),g=t.createElement(H.Curve,X({},p,{id:y,baseLine:v,connectNulls:h,stroke:"none",className:"recharts-area-area",layout:m})),D="none"!==d&&t.createElement(H.Curve,X({},b,{className:"recharts-area-curve",layout:m,type:p.type,connectNulls:h,fill:"none",stroke:d,points:p.points})),P="none"!==d&&c&&Array.isArray(v)&&t.createElement(H.Curve,X({},b,{className:"recharts-area-curve",layout:m,type:p.type,connectNulls:h,fill:"none",stroke:d,points:v}));return void 0!==l&&l&&(void 0!==o&&o||i<1)?t.createElement(r.Layer,null,t.createElement("defs",null,t.createElement("clipPath",{id:f},t.createElement(et,{alpha:i,points:null!=(a=p.points)?a:[],baseLine:v,layout:m,strokeWidth:p.strokeWidth}))),t.createElement(r.Layer,{clipPath:"url(#".concat(f,")")},g,D,P)):t.createElement(t.Fragment,null,g,D,P)},xAxisId:0,yAxisId:0,zIndex:$.DefaultZIndexes.area};function ec(e,t){return e&&"none"!==e?e:t}var ed=t.memo(e=>{var a=e.dataKey,r=e.data,n=e.stroke,i=e.strokeWidth,s=e.fill,c=e.name,u=e.hide,p=e.unit,m=e.formatter,h=e.tooltipType,f=e.id,y={dataDefinedOnItem:r,getPosition:o.noop,settings:{stroke:n,strokeWidth:i,fill:s,dataKey:a,nameKey:void 0,name:(0,l.getTooltipNameProp)(c,a),hide:u,type:h,color:ec(n,s),unit:p,formatter:m,graphicalItemId:f}};return t.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:y})});function eu(e){var a=e.clipPathId,r=e.points,n=e.props,o=n.needClip,l=n.dot,s=n.dataKey,c=(0,V.svgPropertiesNoEvents)(n);return t.createElement(i.Dots,{points:r,dot:l,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:o,clipPathId:a})}function ep(e){var a=e.showLabels,r=e.children,i=e.points.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:0,lowerWidth:0,upperWidth:0,height:0};return el(el({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return t.createElement(n.CartesianLabelListContextProvider,{value:a?i:void 0},r)}function em(e){var a=e.points,n=e.baseLine,i=e.needClip,o=e.clipPathId,l=e.props,s=e.animationElapsedTime,c=e.isAnimating,d=e.isEntrance,u=l.layout,p=l.type,m=l.stroke,h=l.connectNulls,f=l.isRange,y=l.shape,v=l.id,x=ei(l,ea),b=el(el({},(0,F.svgPropertiesAndEvents)(x)),{},{id:v,points:a,connectNulls:h,type:p,baseLine:n,layout:u,stroke:m,isRange:f,animationElapsedTime:s,isAnimating:c,isEntrance:d});return t.createElement(t.Fragment,null,(null==a?void 0:a.length)>1&&t.createElement(r.Layer,{clipPath:i?"url(#clipPath-".concat(o,")"):void 0},t.createElement(B.Shape,{option:y,DefaultShape:es.shape,shapeProps:b})),t.createElement(eu,{points:a,props:x,clipPathId:o}))}function eh(e){var a,r=e.needClip,i=e.clipPathId,l=e.props,s=e.previousPointsRef,c=e.previousBaselineRef,d=l.points,u=l.baseLine,p=l.isAnimationActive,m=l.animationBegin,f=l.animationDuration,y=l.animationEasing,v=l.animationMatchBy,x=l.animationInterpolateFn,b=(0,t.useMemo)(()=>({points:d,baseLine:u}),[d,u]),g=(0,L.useAnimationStartSnapshot)(b,c),D=(0,h.useCartesianChartLayout)(),P=(0,N.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),j=P.isAnimating,k=P.handleAnimationStart,I=P.handleAnimationEnd,w=g.startValue;return null==D?null:(a=Array.isArray(u)&&Array.isArray(w)?(0,O.matchAnimationItems)(w,u,v):Array.isArray(u)?(0,O.matchAnimationItems)(null,u,v):null,t.createElement(N.AnimatedItems,{animationInput:b,animationIdPrefix:"recharts-area-",items:d,previousItemsRef:s,isAnimationActive:p,animationBegin:m,animationDuration:f,animationEasing:y,onAnimationStart:k,onAnimationEnd:I,animationInterpolateFn:x,animationMatchBy:v,layout:D},(e,s,c)=>{var p;return p=1===s?u:Array.isArray(u)?x(a,s,D):c?u:function(e,t,a){if((0,o.isNumber)(e)){var r=(0,o.isNumber)(t)?t:void 0;return(0,o.interpolate)(r,e,a)}if((0,o.isNullish)(e)||(0,o.isNan)(e)){var n=(0,o.isNumber)(t)?t:void 0;return(0,o.interpolate)(n,0,a)}return e}(u,w,s),g.syncStepValue(p,s),t.createElement(ep,{showLabels:!j,points:d},l.children,t.createElement(em,{points:e,baseLine:p,needClip:r,clipPathId:i,props:l,animationElapsedTime:s,isAnimating:j||s<1,isEntrance:c}),t.createElement(n.LabelListFromLabelProp,{label:l.label}))}))}function ef(e){var a=e.needClip,r=e.clipPathId,n=e.props,i=(0,t.useRef)(null),o=(0,t.useRef)();return t.createElement(eh,{needClip:a,clipPathId:r,props:n,previousPointsRef:i,previousBaselineRef:o})}class ey extends t.PureComponent{render(){var e=this.props,n=e.hide,i=e.dot,o=e.points,l=e.className,d=e.top,p=e.left,m=e.needClip,h=e.xAxisId,f=e.yAxisId,y=e.width,v=e.height,x=e.id,b=e.baseLine,g=e.zIndex;if(n)return null;var D=(0,a.clsx)("recharts-area",l),P=(0,z.getRadiusAndStrokeWidthFromDot)(i),j=P.r,k=P.strokeWidth,I=(0,s.isClipDot)(i),w=2*j+k,S=m?"url(#clipPath-".concat(I?"":"dots-").concat(x,")"):void 0;return t.createElement(R.ZIndexLayer,{zIndex:g},t.createElement(r.Layer,{className:D},m&&t.createElement("defs",null,t.createElement(u.GraphicalItemClipPath,{clipPathId:x,xAxisId:h,yAxisId:f}),!I&&t.createElement("clipPath",{id:"clipPath-dots-".concat(x)},t.createElement("rect",{x:p-w/2,y:d-w/2,width:y+w,height:v+w}))),t.createElement(ef,{needClip:m,clipPathId:x,props:this.props})),t.createElement(c.ActivePoints,{points:o,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:S}),this.props.isRange&&Array.isArray(b)&&t.createElement(c.ActivePoints,{points:b,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:S}))}}function ev(e){var a,r=e.activeDot,n=e.animationBegin,i=e.animationDuration,o=e.animationEasing,l=e.connectNulls,s=e.dot,c=e.fill,d=e.fillOpacity,p=e.hide,m=e.isAnimationActive,f=e.legendType,y=e.stroke,v=e.xAxisId,x=e.yAxisId,b=ei(e,er),g=(0,h.useChartLayout)(),D=(0,A.useChartName)(),P=(0,u.useNeedsClip)(v,x).needClip,j=(0,C.useIsPanorama)(),k=null!=(a=(0,M.useAppSelector)(t=>S(t,e.id,j)))?a:{},I=k.points,w=k.isRange,Y=k.baseLine,N=(0,E.usePlotArea)();if("horizontal"!==g&&"vertical"!==g||null==N||"AreaChart"!==D&&"ComposedChart"!==D)return null;var O=N.height,L=N.width,_=N.x,T=N.y;return I&&I.length?t.createElement(ey,en({},b,{activeDot:r,animationBegin:n,animationDuration:i,animationEasing:o,baseLine:Y,connectNulls:l,dot:s,fill:c,fillOpacity:d,height:O,hide:p,layout:g,isAnimationActive:m,isRange:w,legendType:f,needClip:P,points:I,stroke:y,width:L,left:_,top:T,xAxisId:v,yAxisId:x})):null}function ex(e){var t,a=e.areaSettings,r=a.connectNulls,n=a.baseValue,i=a.dataKey,s=e.stackedData,c=e.layout,d=e.chartBaseValue,u=e.xAxis,p=e.yAxis,m=e.displayedData,h=e.dataStartIndex,f=e.xAxisTicks,y=e.yAxisTicks,v=e.bandSize,x=s&&s.length,b=((e,t,a,r,n)=>{var i=null!=a?a:t;if((0,o.isNumber)(i))return i;var l="horizontal"===e?n:r,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===i?d:"dataMax"===i||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===i?s[0]:"dataMax"===i?s[1]:s[0]})(c,d,n,u,p),g="horizontal"===c,D=!1,P=m.map((e,t)=>{if(x)c=s[h+t];else{var a,n,o,c,d,m=(0,l.getValueByDataKey)(e,i);Array.isArray(m)?(c=m,D=!0):c=[b,m]}var P=null!=(a=null==(n=c)?void 0:n[1])?a:null,j=null==P||x&&!r&&null==(0,l.getValueByDataKey)(e,i);return g?{x:(0,l.getCateCoordinateOfLine)({axis:u,ticks:f,bandSize:v,entry:e,index:t}),y:j?null:null!=(d=p.scale.map(P))?d:null,value:c,payload:e}:{x:j?null:null!=(o=u.scale.map(P))?o:null,y:(0,l.getCateCoordinateOfLine)({axis:p,ticks:y,bandSize:v,entry:e,index:t}),value:c,payload:e}});return t=x||D?P.map(e=>{var t,a,r=Array.isArray(e.value)?e.value[0]:null;return g?{x:e.x,y:null!=r&&null!=e.y&&null!=(a=p.scale.map(r))?a:null,payload:e.payload}:{x:null!=r&&null!=(t=u.scale.map(r))?t:null,y:e.y,payload:e.payload}}):g?p.scale.map(b):u.scale.map(b),{points:P,baseLine:null!=t?t:0,isRange:D}}var eb=t.memo(function(e){var a=(0,_.resolveDefaultProps)(e,es),r=(0,C.useIsPanorama)();return t.createElement(T.RegisterGraphicalItemId,{id:a.id,type:"area"},e=>{var n,i,o,s,c;return t.createElement(t.Fragment,null,t.createElement(Y.SetLegendPayload,{legendPayload:(n=a.dataKey,i=a.name,o=a.stroke,s=a.fill,c=a.legendType,[{inactive:a.hide,dataKey:n,type:c,color:ec(o,s),value:(0,l.getTooltipNameProp)(i,n),payload:a}])}),t.createElement(ed,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,formatter:a.formatter,tooltipType:a.tooltipType,id:e}),t.createElement(W.SetCartesianGraphicalItem,{type:"area",id:e,data:a.data,dataKey:a.dataKey,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,stackId:(0,l.getNormalizedStackId)(a.stackId),hide:a.hide,barSize:void 0,baseValue:a.baseValue,isPanorama:r,connectNulls:a.connectNulls}),t.createElement(ev,en({},a,{id:e})))})},G.propsAreEqual);eb.displayName="Area"},990865,378097,e=>{"use strict";var t=e.i(391398);function a({color:e,id:r,withGradient:n,fillOpacity:i}){return(0,t.jsx)(t.Fragment,{children:n?(0,t.jsxs)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:i}),(0,t.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,t.jsx)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,t.jsx)("stop",{stopColor:e,stopOpacity:i??.2})})})}a.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,a],990865);var r=e.i(191788),n=e.i(471970),i=e.i(437515),o=["axis"],l=(0,r.forwardRef)((e,t)=>r.createElement(i.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:o,tooltipPayloadSearcher:n.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["AreaChart",0,l],378097)},886196,e=>{"use strict";var t=e.i(648863),a=e.i(804052),r=e.i(391398);let n={type:"code",code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Title,{order:1,children:"This is h1 title"}),(0,r.jsx)(a.Title,{order:2,children:"This is h2 title"}),(0,r.jsx)(a.Title,{order:3,children:"This is h3 title"}),(0,r.jsx)(a.Title,{order:4,children:"This is h4 title"}),(0,r.jsx)(a.Title,{order:5,children:"This is h5 title"}),(0,r.jsx)(a.Title,{order:6,children:"This is h6 title"})]})}},i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Title,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,r.jsx)(a.Title,{size:"h4",children:"H1 heading with h4 font-size"}),(0,r.jsx)(a.Title,{size:16,children:"H1 heading with 16px size"}),(0,r.jsx)(a.Title,{size:"xs",children:"H1 heading with xs size"})]})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={16}>H1 heading with 16px size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
`};var o=e.i(232471);let l={type:"configurator",component:function(e){return(0,r.jsx)(o.Box,{maw:400,children:(0,r.jsx)(a.Title,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]},s={type:"configurator",component:function(e){return(0,r.jsx)(a.Title,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var c=(0,t.__exportAll)({lineClamp:()=>l,size:()=>i,textWrap:()=>s,usage:()=>n});e.s(["TitleDemos",0,c],886196)},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),r=e.i(191788),n=e.i(632036);let i=({type:e,date:t,locale:r,format:n})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(r).format(n);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let o,l,s,c,d,u,p,m;return{usage:{type:"code",centered:!0,maxWidth:400,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${o}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${l}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:a,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${s}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([null,null]);return(0,t.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:a,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(c=e.displayName.replace("@mantine/dates/",""),`import { ${c} } from '@mantine/dates';


function Demo() {
  return (
    <${c}
      {{props}}
    />
  );
}
`),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${d}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { CalendarBlankIcon } from '@phosphor-icons/react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const icon = <CalendarBlankIcon size={18} />;
  return (
    <${u}
      leftSection={<CalendarBlankIcon size={18} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,i]=(0,r.useState)(null);return(0,t.jsx)(e,{leftSection:(0,t.jsx)(n.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:a,onChange:i})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(p=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { ${p} } from '@mantine/dates';

function Demo() {
  return (
    <${p}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`),component:()=>(0,t.jsx)(e,{clearable:!0,defaultValue:(0,a.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${m}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <${m}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)([]);return(0,t.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:a,onChange:n,type:"multiple",valueFormatter:i})}}}}],70530)},235631,e=>{"use strict";var t=e.i(648863),a=e.i(70530),r=e.i(931882),n=e.i(671640),i=e.i(391398),o=e.i(267073);let l={type:"code",component:function(){return(0,i.jsxs)(n.Stack,{children:[(0,i.jsx)(o.DatePickerInput,{label:"clearSectionMode='both' (default)",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,i.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,i.jsx)(o.DatePickerInput,{label:"clearSectionMode='rightSection'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,i.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,i.jsx)(o.DatePickerInput,{label:"clearSectionMode='clear'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,i.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DatePickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DatePickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DatePickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},s={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Pick date",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`},c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Disabled",placeholder:"Pick date",disabled:!0})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`};var d=e.i(494834);let u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{label:"With presets",placeholder:"Select date",presets:[{value:(0,d.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,d.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,d.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,d.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,d.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,d.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,d.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      label="With presets"
      placeholder="Select date"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},p={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,d.default)();return(0,i.jsx)(o.DatePickerInput,{type:"range",label:"With presets",placeholder:"Select date",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePickerInput
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var m=e.i(191788);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,minDate:new Date(2022,1,10),maxDate:new Date(2022,1,28)})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 28)}
    />
  );
}
`},f=e=>{let t=(0,d.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},y=e=>{let t=(0,d.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},v=e=>{let t=(0,d.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},x={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,getDayProps:f,getYearControlProps:y,getMonthControlProps:v})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const getDayProps: DatePickerInputProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerInputProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerInputProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`};var b=e.i(393353);let g=e=>{let t=(0,d.default)(e).date();return(0,i.jsx)(b.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,i.jsx)("div",{children:t})})},D={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",renderDay:g})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const dayRenderer: DatePickerInputProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      renderDay={dayRenderer}
    />
  );
}
`},P={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,excludeDate:e=>0===new Date(e).getDay()||6===new Date(e).getDay()})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      excludeDate={(date) => new Date(date).getDay() === 0 || new Date(date).getDay() === 6}
    />
  );
}
`},j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DatePickerInput,{defaultLevel:"decade",label:"Decade level",placeholder:"Decade level",mb:"md"}),(0,i.jsx)(o.DatePickerInput,{defaultLevel:"year",label:"Year level",placeholder:"Year level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        defaultLevel="decade"
        label="Decade level"
        placeholder="Decade level"
        mb="md"
      />
      <DatePickerInput
        defaultLevel="year"
        label="Year level"
        placeholder="Year level"
      />
    </>
  );
}
`},k={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{hideOutsideDates:!0,label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      hideOutsideDates
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},I={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,hideWeekdays:!0})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      hideWeekdays
    />
  );
}
`},w={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DatePickerInput,{firstDayOfWeek:0,label:"Sunday as first day of week",placeholder:"Sunday as first day of week",mb:"md"}),(0,i.jsx)(o.DatePickerInput,{firstDayOfWeek:6,label:"Saturday as first day of week",placeholder:"Saturday as first day of week"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        firstDayOfWeek={0}
        label="Sunday as first day of week"
        placeholder="Sunday as first day of week"
        mb="md"
      />
      <DatePickerInput
        firstDayOfWeek={6}
        label="Saturday as first day of week"
        placeholder="Saturday as first day of week"
      />
    </>
  );
}
`},S={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},C={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,m.useState)(null);return(0,i.jsx)(o.DatePickerInput,{monthsListFormat:"MM",yearsListFormat:"YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},A={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DatePickerInput,{maxLevel:"year",label:"Year max level",placeholder:"Year max level",mb:"md"}),(0,i.jsx)(o.DatePickerInput,{maxLevel:"month",label:"Month max level",placeholder:"Month max level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        maxLevel="year"
        label="Year max level"
        placeholder="Year max level"
        mb="md"
      />
      <DatePickerInput
        maxLevel="month"
        label="Month max level"
        placeholder="Month max level"
      />
    </>
  );
}
`},Y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{weekendDays:[1,2],label:"Weekend days are Monday and Tuesday",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      weekendDays={[1, 2]}
      label="Weekend days are Monday and Tuesday"
      placeholder="Pick date"
    />
  );
}
`},M={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{withWeekNumbers:!0,label:"With week numbers",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      withWeekNumbers
      label="With week numbers"
      placeholder="Pick date"
    />
  );
}
`},N={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(o.DatePickerInput,{defaultDate:new Date(2022,1),headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}},label:"Header controls order",placeholder:"Header controls order"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      defaultDate={new Date(2022, 1)}
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
      label="Header controls order"
      placeholder="Header controls order"
    />
  );
}
`},O={type:"code",maxWidth:400,centered:!0,component:function(){return(0,i.jsx)(o.DatePickerInput,{label:"Pick date",placeholder:"Pick date",withNativeLevelSelect:!0})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return <DatePickerInput label="Pick date" placeholder="Pick date" withNativeLevelSelect />;
}
`};var L=(0,t.__exportAll)({clearSectionMode:()=>l,clearable:()=>F,configurator:()=>W,controlProps:()=>x,defaultLevel:()=>j,disabled:()=>c,excludeDate:()=>P,firstDayOfWeek:()=>w,headerControlsOrder:()=>N,hideOutsideDates:()=>k,hideWeekdays:()=>I,icon:()=>z,labelFormat:()=>S,listFormat:()=>C,maxLevel:()=>A,minMax:()=>h,modal:()=>V,multiple:()=>E,nativeLevelSelect:()=>O,presets:()=>u,presetsRange:()=>p,range:()=>T,renderDay:()=>D,usage:()=>_,valueFormat:()=>s,valueFormatter:()=>B,weekendDays:()=>Y,withWeekNumbers:()=>M});let{usage:_,multiple:E,range:T,configurator:W,modal:V,icon:z,clearable:F,valueFormatter:B}=(0,a.getSharedPickerInputDemos)(o.DatePickerInput);e.s(["DatePickerInputDemos",0,L],235631)},337904,e=>{"use strict";var t=e.i(337976),a=e.i(164036),r=e.i(831474),n={monthPickerRoot:"m_53c9e871",presetsList:"m_cccb8ff3",presetButton:"m_7b4fbf50"},i=e.i(191788),o=e.i(391398),l=e.i(232471),s=e.i(284629),c=e.i(481178),d=e.i(275519),u=e.i(433512),p=e.i(44091),m=e.i(62904),h=e.i(391466);let f=(0,c.createVarsResolver)((e,{size:t})=>({monthPickerRoot:{"--preset-font-size":(0,u.getFontSize)(t)}})),y={type:"default"},v=(0,d.factory)(e=>{let c=(0,p.useProps)("MonthPicker",y,e),{classNames:d,styles:u,vars:v,type:x,defaultValue:b,value:g,onChange:D,__staticSelector:P,getMonthControlProps:j,allowSingleDateInRange:k,allowDeselect:I,onMouseLeave:w,onMonthSelect:S,__updateDateOnMonthSelect:C,__onPresetSelect:A,__stopPropagation:Y,presets:M,className:N,style:O,unstyled:L,size:_,attributes:E,onLevelChange:T,...W}=c,{calendarProps:V,others:z}=(0,r.pickCalendarProps)(W),F=(0,i.useRef)(null),B=(0,i.useRef)(null),R=(0,h.useStyles)({name:P||"MonthPicker",classes:n,props:c,className:N,style:O,classNames:d,styles:u,unstyled:L,attributes:E,rootSelector:M?"monthPickerRoot":void 0,varsResolver:f,vars:v}),{onDateChange:$,onRootMouseLeave:G,onHoveredDateChange:H,getControlProps:K,setValue:q}=(0,t.useDatesState)({type:x,level:"month",allowDeselect:I,allowSingleDateInRange:k,value:g,defaultValue:b,onChange:D,onMouseLeave:w}),{resolvedClassNames:Z,resolvedStyles:U}=(0,m.useResolvedStylesApi)({classNames:d,styles:u,props:c}),X=(0,o.jsx)(a.Calendar,{classNames:Z,styles:U,size:_,...V,...!M?z:{},minLevel:"year",__updateDateOnMonthSelect:C??!1,__staticSelector:P||"MonthPicker",onMouseLeave:G,onMonthMouseEnter:(e,t)=>H(t),onMonthSelect:e=>{$(e),S?.(e)},getMonthControlProps:e=>({...K(e),...j?.(e)}),onLevelChange:T,__setDateRef:F,__setLevelRef:B,__stopPropagation:Y,attributes:E,...!M?{className:N,style:O}:{}});if(!M)return X;let Q=M.map((e,t)=>(0,o.jsx)(s.UnstyledButton,{...R("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(F.current?.(a),B.current?.("year"),A?A(t):q(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":Y||void 0,children:e.label},t));return(0,o.jsxs)(l.Box,{...R("monthPickerRoot"),size:_,...z,children:[(0,o.jsx)("div",{...R("presetsList"),children:Q}),X]})});v.classes={...a.Calendar.classes,...n},v.varsResolver=f,v.displayName="@mantine/dates/MonthPicker",e.s(["MonthPicker",0,v],337904)},215126,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),n=e.i(831474),i=e.i(337904),o=e.i(391398),l=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,l.factory)(e=>{let l=(0,s.useProps)(["Input","InputWrapper","MonthPickerInput"],d,e),{type:u,value:p,defaultValue:m,onChange:h,valueFormat:f,labelSeparator:y,locale:v,classNames:x,styles:b,unstyled:g,closeOnChange:D,size:P,variant:j,dropdownType:k,sortDates:I,minDate:w,maxDate:S,vars:C,valueFormatter:A,presets:Y,attributes:M,...N}=l,{resolvedClassNames:O,resolvedStyles:L}=(0,c.useResolvedStylesApi)({classNames:x,styles:b,props:l}),{calendarProps:_,others:E}=(0,n.pickCalendarProps)(N),{_value:T,setValue:W,formattedValue:V,dropdownHandlers:z,dropdownOpened:F,onClear:B,shouldClear:R}=(0,r.useDatesInput)({type:u,value:p,defaultValue:m,onChange:h,locale:v,format:f,labelSeparator:y,closeOnChange:D,sortDates:I,valueFormatter:A});return(0,o.jsx)(a.PickerInputBase,{formattedValue:V,dropdownOpened:F,dropdownHandlers:z,classNames:O,styles:L,unstyled:g,onClear:B,shouldClear:R,value:T,size:P,variant:j,dropdownType:k,...E,attributes:M,type:u,__staticSelector:"MonthPickerInput",children:(0,o.jsx)(i.MonthPicker,{..._,size:P,variant:j,type:u,value:T,defaultDate:_.defaultDate||(Array.isArray(T)?T[0]||(0,t.getDefaultClampedDate)({maxDate:S,minDate:w}):T||(0,t.getDefaultClampedDate)({maxDate:S,minDate:w})),onChange:W,locale:v,classNames:O,styles:L,unstyled:g,__staticSelector:"MonthPickerInput",__stopPropagation:"popover"===k,minDate:w,maxDate:S,presets:Y,attributes:M})})});u.classes={...a.PickerInputBase.classes,...i.MonthPicker.classes},u.displayName="@mantine/dates/MonthPickerInput",e.s(["MonthPickerInput",0,u])},566056,e=>{"use strict";var t=e.i(648863),a=e.i(391398),r=e.i(267073),n=e.i(135140),i=e.i(215126);e.i(39167);let o={type:"code",component:function(){return(0,a.jsxs)(n.DatesProvider,{settings:{locale:"ru",firstDayOfWeek:0,weekendDays:[0]},children:[(0,a.jsx)(i.MonthPickerInput,{label:"Pick month",placeholder:"Pick month"}),(0,a.jsx)(r.DatePickerInput,{mt:"md",label:"Pick date",placeholder:"Pick date"})]})},code:`
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`};var l=e.i(777141);let s={type:"code",component:function(){return(0,a.jsx)(n.DatesProvider,{settings:{consistentWeeks:!0},children:(0,a.jsx)(l.DatePicker,{})})},code:`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,centered:!0};var c=(0,t.__exportAll)({consistentWeeks:()=>s,usage:()=>o});e.s(["DatesProviderDemos",0,c],566056)},426133,e=>{"use strict";var t=e.i(648863);let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`;var n=e.i(391398),i=e.i(26123),o=e.i(520916),l=e.i(577596),s={root:"m_a410e613",label:"m_ddb0bfe3"},c=e.i(232471),d=e.i(481178),u=e.i(275519),p=e.i(317477),m=e.i(779177),h=e.i(951254),f=e.i(44091),y=e.i(62904),v=e.i(391466),x=e.i(881264),b=e.i(865749),g=e.i(586536),D=e.i(723451),P=e.i(694713),j=e.i(191788);let k={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,labelsType:"value",tooltipDataSource:"all",accessibilityLayer:!0},I=(0,d.createVarsResolver)((e,{strokeColor:t,labelColor:a,withLabels:r,withLegend:n,size:i})=>({root:{"--chart-stroke-color":t?(0,p.getThemeColor)(t,e):void 0,"--chart-labels-color":a?(0,p.getThemeColor)(a,e):void 0,"--chart-size":(0,m.rem)(i+80*!!r+80*!!n)}})),w=(0,u.factory)(e=>{let t,a=(0,f.useProps)("DonutChart",k,e),{classNames:r,className:d,style:u,styles:p,unstyled:m,vars:w,data:S,withTooltip:C,withLegend:A,legendProps:Y,tooltipAnimationDuration:M,tooltipProps:N,pieProps:O,paddingAngle:L,withLabels:_,withLabelsLine:E,size:T,thickness:W,strokeWidth:V,startAngle:z,endAngle:F,tooltipDataSource:B,chartLabel:R,children:$,pieChartProps:G,valueFormatter:H,strokeColor:K,labelsType:q,attributes:Z,cellProps:U,accessibilityLayer:X,...Q}=a,J=(0,h.useMantineTheme)(),[ee,et]=(0,j.useState)(null),ea=(0,v.useStyles)({name:"DonutChart",classes:s,props:a,className:d,style:u,classNames:r,styles:p,unstyled:m,attributes:Z,vars:w,varsResolver:I}),{resolvedClassNames:er,resolvedStyles:en}=(0,y.useResolvedStylesApi)({classNames:r,styles:p,props:a}),ei=(0,i.getPieChartData)({data:S,theme:J,strokeWidth:V,highlightedIndex:ee,cellProps:U});return(0,n.jsx)(c.Box,{size:T,...ea("root"),...Q,children:(0,n.jsx)(D.ResponsiveContainer,{children:(0,n.jsxs)(g.PieChart,{accessibilityLayer:X,...G,children:[(0,n.jsx)(b.Pie,{data:ei,innerRadius:T/2-W,outerRadius:T/2,dataKey:"value",isAnimationActive:!1,paddingAngle:L,startAngle:z,endAngle:F,label:!!_&&(t=q||"value",({x:e,y:a,cx:r,cy:i,percent:o,value:l,name:s})=>{var c,d;return(0,n.jsx)("text",{x:e,y:a,cx:r,cy:i,textAnchor:e>Number(r)?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,n.jsx)("tspan",{x:e,children:(c=Number(l),d=Number(o),"name"===t?s:"percent"===t?`${(100*(d||0)).toFixed(0)}%`:"function"==typeof H?H(c||0):c)})})}),labelLine:!!E&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...O}),R&&(0,n.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...ea("label"),children:R}),C&&(0,n.jsx)(P.Tooltip,{animationDuration:M,isAnimationActive:!1,content:({payload:e})=>(0,n.jsx)(o.ChartTooltip,{payload:S,classNames:er,styles:en,type:"radial",segmentId:"segment"===B?e?.[0]?.payload?.__segmentIndex:void 0,valueFormatter:H,attributes:Z}),...N}),A&&(0,n.jsx)(x.Legend,{verticalAlign:"bottom",content:e=>(0,n.jsx)(l.ChartLegend,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name,highlightKey:e.payload?.__segmentIndex})),onHighlight:e=>et("number"==typeof e?e:null),legendPosition:Y?.verticalAlign||"bottom",classNames:er,styles:en,centered:!0,attributes:Z}),...Y}),$]})})})});w.displayName="@mantine/charts/DonutChart",w.classes=s,w.varsResolver=I;let S={type:"code",component:function(){return(0,n.jsx)(w,{data:a})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},C={type:"code",component:function(){return(0,n.jsx)(w,{data:a,withLegend:!0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withLegend />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},A={type:"configurator",component:function(e){return(0,n.jsx)(w,{...e,withLabels:!0,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent","name"]}]},Y={type:"configurator",component:function(e){return(0,n.jsx)(w,{...e,data:a,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"},{type:"number",prop:"thickness",initialValue:20,min:2,max:30,step:1,libraryValue:"__"}]},M={type:"configurator",component:function(e){return(0,n.jsx)(w,{...e,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"paddingAngle",initialValue:10,min:0,max:30,step:1,libraryValue:"__"}]},N={type:"configurator",component:function(e){return(0,n.jsx)(w,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { DonutChart } from '@mantine/charts';

function Demo() {
  return (
    <DonutChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var O=e.i(725695),L=e.i(883364);let _={type:"code",component:function(){return(0,n.jsxs)(O.Group,{gap:50,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(L.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,n.jsx)(w,{data:a,tooltipDataSource:"segment",mx:"auto"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(L.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,n.jsx)(w,{data:a,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},E={type:"configurator",component:function(e){return(0,n.jsx)(w,{...e,data:a})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]},T={type:"code",component:function(){return(0,n.jsx)(w,{data:a,startAngle:180,endAngle:0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},W={type:"code",component:function(){return(0,n.jsx)(w,{data:a,chartLabel:"Users by country"})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},V={type:"code",component:function(){return(0,n.jsx)(w,{data:a,withTooltip:!1})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},z={type:"code",component:function(){return(0,n.jsx)("div",{className:"m_3e09cb9d",children:(0,n.jsx)(w,{data:a,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <DonutChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0},F={type:"code",component:function(){return(0,n.jsx)(w,{data:a,withLabelsLine:!0,labelsType:"name",withLabels:!0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withLabelsLine labelsType="name" withLabels />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],centered:!0};var B=(0,t.__exportAll)({angle:()=>T,chartLabel:()=>W,color:()=>N,labelsTypeName:()=>F,legend:()=>C,noTooltip:()=>V,paddingAngle:()=>M,size:()=>Y,strokeColor:()=>z,strokeWidth:()=>E,tooltipDataSource:()=>_,usage:()=>S,withLabels:()=>A});e.s(["DonutChartDemos",0,B],426133)},282596,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(832112),n=e.i(235631),i=e.i(566056),o=e.i(426133),l=e.i(816093),s=e.i(886196);e.i(603441);var c=e.i(62558);e.i(457450);var d=e.i(418026);let u=(0,c.Layout)(d.MDX_DATA.Changelog750);function p(e){let c={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:d}=c;return d||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h2,{id:"donutchart-component",children:"DonutChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/donut-chart",children:"DonutChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:o.DonutChartDemos.usage}),"\n",(0,t.jsx)(c.h2,{id:"piechart-component",children:"PieChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/pie-chart",children:"PieChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:l.PieChartDemos.usage}),"\n",(0,t.jsx)(c.h2,{id:"mantinedates-value-formatter",children:"@mantine/dates value formatter"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),", ",(0,t.jsx)(c.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and\n",(0,t.jsx)(c.a,{href:"/dates/year-picker-input",children:"YearPickerInput"})," now support ",(0,t.jsx)(c.code,{children:"valueFormatter"})," prop."]}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,t.jsx)(c.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,t.jsx)(c.code,{children:"default"}),", ",(0,t.jsx)(c.code,{children:"multiple"})," and ",(0,t.jsx)(c.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,t.jsxs)(c.p,{children:["Example of using a custom formatter function with ",(0,t.jsx)(c.code,{children:'type="multiple"'}),":"]}),"\n",(0,t.jsx)(d,{data:n.DatePickerInputDemos.valueFormatter}),"\n",(0,t.jsx)(c.h2,{id:"mantinedates-consistent-weeks",children:"@mantine/dates consistent weeks"}),"\n",(0,t.jsxs)(c.p,{children:["You can now force each month to have 6 weeks by setting ",(0,t.jsx)(c.code,{children:"consistentWeeks: true"})," on\n",(0,t.jsx)(c.a,{href:"/dates/getting-started",children:"DatesProvider"}),". This is useful if you want to avoid layout\nshifts when month changes."]}),"\n",(0,t.jsx)(d,{data:i.DatesProviderDemos.consistentWeeks}),"\n",(0,t.jsx)(c.h2,{id:"charts-series-label",children:"Charts series label"}),"\n",(0,t.jsxs)(c.p,{children:["It is now possible to change series labels with ",(0,t.jsx)(c.code,{children:"label"})," property\nin ",(0,t.jsx)(c.code,{children:"series"})," object. This feature is supported in ",(0,t.jsx)(c.a,{href:"/charts/area-chart",children:"AreaChart"}),",\n",(0,t.jsx)(c.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,t.jsx)(c.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,t.jsx)(d,{data:r.AreaChartDemos.seriesLabels}),"\n",(0,t.jsx)(c.h2,{id:"charts-value-formatter",children:"Charts value formatter"}),"\n",(0,t.jsxs)(c.p,{children:["All ",(0,t.jsx)(c.code,{children:"@mantine/charts"})," components now support ",(0,t.jsx)(c.code,{children:"valueFormatter"})," prop, which allows\nformatting value that is displayed on the y axis and inside the tooltip."]}),"\n",(0,t.jsx)(d,{data:r.AreaChartDemos.valueFormatter}),"\n",(0,t.jsx)(c.h2,{id:"headings-text-wrap",children:"Headings text wrap"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/title",children:"Title"})," ",(0,t.jsx)(c.code,{children:"textWrap"})," prop sets ",(0,t.jsx)(c.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,t.jsx)(d,{data:s.TitleDemos.textWrap}),"\n",(0,t.jsxs)(c.p,{children:["You can also set ",(0,t.jsx)(c.code,{children:"textWrap"})," on ",(0,t.jsx)(c.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(c.p,{children:["If set on theme, ",(0,t.jsx)(c.code,{children:"textWrap"})," is also applied to headings in ",(0,t.jsx)(c.a,{href:"/core/typography",children:"Typography"})]}),"\n",(0,t.jsx)(c.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,t.jsxs)(c.p,{children:["All components now support ",(0,t.jsx)(c.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})}),"\n",(0,t.jsx)(c.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"/guides/vitest/",children:"testing with Vitest guide"})]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/native-select/#with-dividers",children:"NativeSelect"})," with dividers demo"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/popover/#middlewares",children:"Popover"})," ",(0,t.jsx)(c.code,{children:"shift"})," and ",(0,t.jsx)(c.code,{children:"flip"})," middlewares documentation"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/combobox/#popover-props",children:"Combobox"})," props related to ",(0,t.jsx)(c.a,{href:"/core/popover",children:"Popover"})," documentation"]}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"/styles/mantine-styles/#loading-styles-from-cdn",children:"Loading styles from CDN guide"})}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/anchor/#text-props",children:"Anchor"})," now includes additional documentation on how to use ",(0,t.jsx)(c.a,{href:"/core/text",children:"Text"})," props"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/pagination",children:"Pagination"})," now includes props tables for all compound components"]}),"\n",(0,t.jsxs)(c.li,{children:["A more detailed breakdown of ",(0,t.jsx)(c.a,{href:"/about/#browser-support",children:"browser support"})," has been added to the about page"]}),"\n"]}),"\n",(0,t.jsx)(c.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,t.jsxs)(c.p,{children:["New articles added to the ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-astro",children:"Can I use Mantine with Astro?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/how-can-i-contribute",children:"How can I contribute to the library?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/dynamic-css-styles",children:"How can I add dynamic CSS styles?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/next-load-fonts",children:"How can I load fonts in Next.js?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/vite-load-fonts",children:"How can I load fonts in Vite?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/floating-action-button",children:"Is there a floating action button component?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/inputs-placeholder-color",children:"How to change inputs placeholder color?"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/dates-missing-styles",children:"I do not have styles in my dates components..."})}),"\n"]}),"\n",(0,t.jsx)(c.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/checkbox",children:"Checkbox.Group"}),", ",(0,t.jsx)(c.a,{href:"/core/radio",children:"Radio.Group"})," and ",(0,t.jsx)(c.a,{href:"/core/switch",children:"Switch.Group"})," now support ",(0,t.jsx)(c.code,{children:"readOnly"})," prop"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/action-icon",children:"ActionIcon"})," now has ",(0,t.jsx)(c.code,{children:"loading"})," state animation"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/segmented-control",children:"SegmentedControl"})," now supports ",(0,t.jsx)(c.code,{children:"withItemsBorder"})," prop which allows removing border between items"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/progress",children:"Progress"})," now supports ",(0,t.jsx)(c.code,{children:"transitionDuration"})," prop which controls section width animation duration"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/textarea",children:"Textarea"})," and ",(0,t.jsx)(c.a,{href:"/core/json-input",children:"JsonInput"})," components now support ",(0,t.jsx)(c.code,{children:"resize"})," prop, which allows setting ",(0,t.jsx)(c.code,{children:"resize"})," CSS property on the input"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"@mantine/hooks"})," package now exports ",(0,t.jsx)(c.a,{href:"/hooks/use-local-storage/#read-storage-value",children:"readLocalStorageValue and readSessionStorageValue"})," function to get value from storage outside of React components"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(p,{...e})})}])},104910,(e,t,a)=>{let r="/changelog/7-5-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(282596)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,780950,e=>{"use strict";var a=e.i(775538);e.s(["selectXAxisIdFromGraphicalItemId",0,function(e,t){var r,o;return null!=(r=null==(o=e.graphicalItems.cartesianItems.find(e=>e.id===t))?void 0:o.xAxisId)?r:a.defaultAxisId},"selectYAxisIdFromGraphicalItemId",0,function(e,t){var r,o;return null!=(r=null==(o=e.graphicalItems.cartesianItems.find(e=>e.id===t))?void 0:o.yAxisId)?r:a.defaultAxisId}])},526626,901374,86443,e=>{"use strict";var a=e.i(191788),t=e.i(549433),r=e.i(270627),o=e.i(516257),n=e.i(137890),i=e.i(204914),l=e.i(901841),s=e.i(83727),c=e.i(543372),m=e.i(662688),d=e.i(297974),p=e.i(883388),u=e.i(500678),h=e.i(561622),f=e.i(446354),x=["x1","y1","x2","y2","key"],y=["offset"],b=["xAxisId","yAxisId"],g=["xAxisId","yAxisId"];function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function S(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function L(){return(L=Object.assign.bind()).apply(null,arguments)}function T(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=e=>{var{fill:t}=e;if(!t||"none"===t)return null;var{fillOpacity:r,x:o,y:n,width:i,height:l,ry:s}=e;return a.createElement("rect",{x:o,y:n,ry:s,width:i,height:l,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function C(e){var{option:t,lineItemProps:r}=e;if(a.isValidElement(t))o=a.cloneElement(t,r);else if("function"==typeof t)o=t(r);else{var o,n,{x1:i,y1:l,x2:s,y2:c,key:m}=r,d=T(r,x),u=null!=(n=(0,p.svgPropertiesNoEvents)(d))?n:{},{offset:h}=u,f=T(u,y);o=a.createElement("line",L({},f,{x1:i,y1:l,x2:s,y2:c,fill:"none",key:m}))}return o}function N(e){var{x:t,width:r,horizontal:o=!0,horizontalPoints:n}=e;if(!o||!n||!n.length)return null;var{xAxisId:i,yAxisId:l}=e,s=T(e,b),c=n.map((e,n)=>{var i=S(S({},s),{},{x1:t,y1:e,x2:t+r,y2:e,key:"line-".concat(n),index:n});return a.createElement(C,{key:"line-".concat(n),option:o,lineItemProps:i})});return a.createElement("g",{className:"recharts-cartesian-grid-horizontal"},c)}function P(e){var{y:t,height:r,vertical:o=!0,verticalPoints:n}=e;if(!o||!n||!n.length)return null;var{xAxisId:i,yAxisId:l}=e,s=T(e,g),c=n.map((e,n)=>{var i=S(S({},s),{},{x1:e,y1:t,x2:e,y2:t+r,key:"line-".concat(n),index:n});return a.createElement(C,{option:o,lineItemProps:i,key:"line-".concat(n)})});return a.createElement("g",{className:"recharts-cartesian-grid-vertical"},c)}function k(e){var{horizontalFill:t,fillOpacity:r,x:o,y:n,width:i,height:l,horizontalPoints:s,horizontal:c=!0}=e;if(!c||!t||!t.length||null==s)return null;var m=s.map(e=>Math.round(e+n-n)).sort((e,a)=>e-a);n!==m[0]&&m.unshift(0);var d=m.map((e,s)=>{var c=m[s+1],d=null==c?n+l-e:c-e;if(d<=0)return null;var p=s%t.length;return a.createElement("rect",{key:"react-".concat(s),y:e,x:o,height:d,width:i,stroke:"none",fill:t[p],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return a.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function j(e){var{vertical:t=!0,verticalFill:r,fillOpacity:o,x:n,y:i,width:l,height:s,verticalPoints:c}=e;if(!t||!r||!r.length)return null;var m=c.map(e=>Math.round(e+n-n)).sort((e,a)=>e-a);n!==m[0]&&m.unshift(0);var d=m.map((e,t)=>{var c=m[t+1],d=null==c?n+l-e:c-e;if(d<=0)return null;var p=t%r.length;return a.createElement("rect",{key:"react-".concat(t),x:e,y:i,width:d,height:s,stroke:"none",fill:r[p],fillOpacity:o,className:"recharts-cartesian-grid-bg"})});return a.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var w=(e,a)=>{var{xAxis:t,width:r,height:l,offset:s}=e;return(0,o.getCoordinatesOfGrid)((0,n.getTicks)(S(S(S({},i.defaultCartesianAxisProps),t),{},{ticks:(0,o.getTicksOfAxis)(t,!0),viewBox:{x:0,y:0,width:r,height:l}})),s.left,s.left+s.width,a)},B=(e,a)=>{var{yAxis:t,width:r,height:l,offset:s}=e;return(0,o.getCoordinatesOfGrid)((0,n.getTicks)(S(S(S({},i.defaultCartesianAxisProps),t),{},{ticks:(0,o.getTicksOfAxis)(t,!0),viewBox:{x:0,y:0,width:r,height:l}})),s.top,s.top+s.height,a)},O={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:f.DefaultZIndexes.grid};function D(e){var o=(0,l.useChartWidth)(),n=(0,l.useChartHeight)(),i=(0,l.useOffsetInternal)(),p=S(S({},(0,d.resolveDefaultProps)(e,O)),{},{x:(0,r.isNumber)(e.x)?e.x:i.left,y:(0,r.isNumber)(e.y)?e.y:i.top,width:(0,r.isNumber)(e.width)?e.width:i.width,height:(0,r.isNumber)(e.height)?e.height:i.height}),{xAxisId:f,yAxisId:x,x:y,y:b,width:g,height:v,syncWithTicks:T,horizontalValues:C,verticalValues:D}=p,I=(0,m.useIsPanorama)(),E=(0,c.useAppSelector)(e=>(0,s.selectAxisPropsNeededForCartesianGridTicksGenerator)(e,"xAxis",f,I)),K=(0,c.useAppSelector)(e=>(0,s.selectAxisPropsNeededForCartesianGridTicksGenerator)(e,"yAxis",x,I));if(!(0,u.isPositiveNumber)(g)||!(0,u.isPositiveNumber)(v)||!(0,r.isNumber)(y)||!(0,r.isNumber)(b))return null;var M=p.verticalCoordinatesGenerator||w,z=p.horizontalCoordinatesGenerator||B,{horizontalPoints:R,verticalPoints:F}=p;if((!R||!R.length)&&"function"==typeof z){var W=C&&C.length,V=z({yAxis:K?S(S({},K),{},{ticks:W?C:K.ticks}):void 0,width:null!=o?o:g,height:null!=n?n:v,offset:i},!!W||T);(0,t.warn)(Array.isArray(V),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof V,"]")),Array.isArray(V)&&(R=V)}if((!F||!F.length)&&"function"==typeof M){var G=D&&D.length,U=M({xAxis:E?S(S({},E),{},{ticks:G?D:E.ticks}):void 0,width:null!=o?o:g,height:null!=n?n:v,offset:i},!!G||T);(0,t.warn)(Array.isArray(U),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof U,"]")),Array.isArray(U)&&(F=U)}return a.createElement(h.ZIndexLayer,{zIndex:p.zIndex},a.createElement("g",{className:"recharts-cartesian-grid"},a.createElement(A,{fill:p.fill,fillOpacity:p.fillOpacity,x:p.x,y:p.y,width:p.width,height:p.height,ry:p.ry}),a.createElement(k,L({},p,{horizontalPoints:R})),a.createElement(j,L({},p,{verticalPoints:F})),a.createElement(N,L({},p,{offset:i,horizontalPoints:R,xAxis:E,yAxis:K})),a.createElement(P,L({},p,{offset:i,verticalPoints:F,xAxis:E,yAxis:K}))))}D.displayName="CartesianGrid",e.s(["CartesianGrid",0,D],526626);var I=e.i(56206),E=e.i(815954),K=e.i(905e3),M=e.i(240626),z=e.i(197278),R=e.i(218871),F=e.i(62037);class W{constructor(e){var{x:a,y:t}=e;this.xAxisScale=a,this.yAxisScale=t}map(e,a){var t,r,{position:o}=a;return{x:null!=(t=this.xAxisScale.map(e.x,{position:o}))?t:0,y:null!=(r=this.yAxisScale.map(e.y,{position:o}))?r:0}}mapWithFallback(e,a){var t,r,o,n,{position:i,fallback:l}=a;return o="rangeMin"===l?this.yAxisScale.rangeMin():"rangeMax"===l?this.yAxisScale.rangeMax():0,n="rangeMin"===l?this.xAxisScale.rangeMin():"rangeMax"===l?this.xAxisScale.rangeMax():0,{x:null!=(t=this.xAxisScale.map(e.x,{position:i}))?t:n,y:null!=(r=this.yAxisScale.map(e.y,{position:i}))?r:o}}isInRange(e){var{x:a,y:t}=e,r=null==a||this.xAxisScale.isInRange(a),o=null==t||this.yAxisScale.isInRange(t);return r&&o}}function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function G(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function U(){return(U=Object.assign.bind()).apply(null,arguments)}function J(e){var t=(0,c.useAppDispatch)();return(0,a.useEffect)(()=>(t((0,z.addLine)(e)),()=>{t((0,z.removeLine)(e))})),null}function _(e){var{xAxisId:t,yAxisId:o,shape:n,className:i,ifOverflow:d}=e,p=(0,m.useIsPanorama)(),f=(0,R.useClipPathId)(),x=(0,c.useAppSelector)(e=>(0,s.selectXAxisSettings)(e,t)),y=(0,c.useAppSelector)(e=>(0,s.selectYAxisSettings)(e,o)),b=(0,c.useAppSelector)(e=>(0,s.selectAxisScale)(e,"xAxis",t,p)),g=(0,c.useAppSelector)(e=>(0,s.selectAxisScale)(e,"yAxis",o,p)),v=(0,l.useViewBox)();if(!f||!v||null==x||null==y||null==b||null==g)return null;var S=((e,a,t,o,n,i,l)=>{var s,c,{x:m,y:d,segment:p,ifOverflow:h}=l,f=(0,r.isNumOrStr)(m);return(0,r.isNumOrStr)(d)?((e,a,t,r,o,n)=>{var{x:i,width:l}=n,s=o.map(e,{position:t});if(!(0,u.isWellBehavedNumber)(s)||"discard"===a&&!o.isInRange(s))return null;var c=[{x:i+l,y:s},{x:i,y:s}];return"left"===r?c.reverse():c})(d,h,o,i,a,t):f?((e,a,t,r,o,n)=>{var{y:i,height:l}=n,s=o.map(e,{position:t});if(!(0,u.isWellBehavedNumber)(s)||"discard"===a&&!o.isInRange(s))return null;var c=[{x:s,y:i+l},{x:s,y:i}];return"top"===r?c.reverse():c})(m,h,o,n,e,t):null!=p&&2===p.length?(c=[(s=new W({x:e,y:a})).mapWithFallback(p[0],{position:o,fallback:"rangeMin"}),s.mapWithFallback(p[1],{position:o,fallback:"rangeMax"})],"discard"===h&&c.some(e=>!s.isInRange(e))?null:c):null})(b,g,v,e.position,x.orientation,y.orientation,e);if(!S)return null;var L=S[0],T=S[1];if(null==L||null==T)return null;var{x:A,y:C}=L,{x:N,y:P}=T,k=G(G({clipPath:"hidden"===d?"url(#".concat(f,")"):void 0},(0,F.svgPropertiesAndEvents)(e)),{},{x1:A,y1:C,x2:N,y2:P}),j=(0,M.rectWithCoords)({x1:A,y1:C,x2:N,y2:P});return a.createElement(h.ZIndexLayer,{zIndex:e.zIndex},a.createElement(E.Layer,{className:(0,I.clsx)("recharts-reference-line",i)},((e,t)=>{var r;if(a.isValidElement(e))r=a.cloneElement(e,t);else if("function"==typeof e)r=e(t);else{if(!(0,u.isWellBehavedNumber)(t.x1)||!(0,u.isWellBehavedNumber)(t.y1)||!(0,u.isWellBehavedNumber)(t.x2)||!(0,u.isWellBehavedNumber)(t.y2))return null;r=a.createElement("line",U({},t,{className:"recharts-reference-line-line"}))}return r})(n,k),a.createElement(K.CartesianLabelContextProvider,U({},j,{lowerWidth:j.width,upperWidth:j.width}),a.createElement(K.CartesianLabelFromLabelProp,{label:e.label}),e.children)))}e.s(["CartesianScaleHelperImpl",0,W],901374);var Z={ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",label:!1,stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle",zIndex:f.DefaultZIndexes.line};function X(e){var t=(0,d.resolveDefaultProps)(e,Z);return a.createElement(a.Fragment,null,a.createElement(J,{yAxisId:t.yAxisId,xAxisId:t.xAxisId,ifOverflow:t.ifOverflow,x:t.x,y:t.y,segment:t.segment}),a.createElement(_,t))}X.displayName="ReferenceLine",e.s(["ReferenceLine",0,X],86443)},980667,e=>{"use strict";var a=e.i(191788),t=e.i(56206),r=e.i(815954),o=e.i(905e3),n=e.i(240626),i=e.i(270627),l=e.i(355345),s=e.i(197278),c=e.i(543372),m=e.i(83727),d=e.i(662688),p=e.i(218871),u=e.i(62037),h=e.i(297974),f=e.i(561622),x=e.i(446354),y=e.i(901374);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function v(){return(v=Object.assign.bind()).apply(null,arguments)}function S(e){var t=(0,c.useAppDispatch)();return(0,a.useEffect)(()=>(t((0,s.addArea)(e)),()=>{t((0,s.removeArea)(e))})),null}function L(e){var s,{x1:h,x2:x,y1:b,y2:S,className:L,shape:T,xAxisId:A,yAxisId:C}=e,N=(0,p.useClipPathId)(),P=(0,d.useIsPanorama)(),k=(0,c.useAppSelector)(e=>(0,m.selectAxisScale)(e,"xAxis",A,P)),j=(0,c.useAppSelector)(e=>(0,m.selectAxisScale)(e,"yAxis",C,P));if(null==k||null==j)return null;var w=(0,i.isNumOrStr)(h),B=(0,i.isNumOrStr)(x),O=(0,i.isNumOrStr)(b),D=(0,i.isNumOrStr)(S);if(!w&&!B&&!O&&!D&&!T)return null;var I=((e,a,t,r,o,i,l)=>{var s,c,m,d,{x1:p,x2:u,y1:h,y2:f}=l;if(null==o||null==i)return null;var x=new y.CartesianScaleHelperImpl({x:o,y:i}),b={x:e?null!=(s=o.map(p,{position:"start"}))?s:null:o.rangeMin(),y:t?null!=(c=i.map(h,{position:"start"}))?c:null:i.rangeMin()},g={x:a?null!=(m=o.map(u,{position:"end"}))?m:null:o.rangeMax(),y:r?null!=(d=i.map(f,{position:"end"}))?d:null:i.rangeMax()};return"discard"!==l.ifOverflow||x.isInRange(b)&&x.isInRange(g)?(0,n.rectWithPoints)(b,g):null})(w,B,O,D,k,j,e);if(!I&&!T)return null;var E="hidden"===e.ifOverflow;return a.createElement(f.ZIndexLayer,{zIndex:e.zIndex},a.createElement(r.Layer,{className:(0,t.clsx)("recharts-reference-area",L)},(s=g(g({clipPath:E?"url(#".concat(N,")"):void 0},(0,u.svgPropertiesAndEvents)(e)),I),a.isValidElement(T)?a.cloneElement(T,s):"function"==typeof T?T(s):a.createElement(l.Rectangle,v({},s,{className:"recharts-reference-area-rect"}))),null!=I&&a.createElement(o.CartesianLabelContextProvider,v({},I,{lowerWidth:I.width,upperWidth:I.width}),a.createElement(o.CartesianLabelFromLabelProp,{label:e.label}),e.children)))}var T={ifOverflow:"discard",xAxisId:0,yAxisId:0,radius:0,fill:"#ccc",label:!1,fillOpacity:.5,stroke:"none",strokeWidth:1,zIndex:x.DefaultZIndexes.area};function A(e){var t=(0,h.resolveDefaultProps)(e,T);return a.createElement(a.Fragment,null,a.createElement(S,{yAxisId:t.yAxisId,xAxisId:t.xAxisId,ifOverflow:t.ifOverflow,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}),a.createElement(L,t))}A.displayName="ReferenceArea",e.s(["ReferenceArea",0,A])},113997,e=>{"use strict";var a=e.i(648863);let t=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],r=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,o=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],n=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`,i=[{month:"January",Smartphones:1200,Laptops:900,Tablets:0},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:0,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:0,Tablets:1200},{month:"June",Smartphones:0,Laptops:600,Tablets:1e3}],l=`export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
  { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 },
];`,s=[{month:"January",Smartphones:1200,Laptops:500,Tablets:800},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:1800,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:200,Tablets:700},{month:"June",Smartphones:800,Laptops:500,Tablets:200}],c=`export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];`,m=[{you:5,average:3,index:"1"},{you:7,average:9,index:"2"},{you:8,average:5,index:"3"},{you:3,average:6,index:"4"},{you:2,average:4,index:"5"},{you:6,average:8,index:"6"},{you:4,average:7,index:"7"},{you:9,average:2,index:"8"}],d=`export const data = [
  { you: 5, average: 3, index: '1' },
  { you: 7, average: 9, index: '2' },
  { you: 8, average: 5, index: '3' },
  { you: 3, average: 6, index: '4' },
  { you: 2, average: 4, index: '5' },
  { you: 6, average: 8, index: '6' },
  { you: 4, average: 7, index: '7' },
  { you: 9, average: 2, index: '8' },
];`;var p=e.i(391398),u=e.i(520916),h=e.i(577596),f=e.i(979298),x=e.i(232471),y=e.i(481178),b=e.i(275519),g=e.i(317477),v=e.i(951254),S=e.i(44091),L=e.i(62904),T=e.i(391466),A=e.i(191788),C=e.i(57699),N=e.i(471970),P=e.i(437515),k=["axis","item"],j=(0,A.forwardRef)((e,a)=>A.createElement(P.CartesianChart,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:k,tooltipPayloadSearcher:N.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),w=e.i(526626),B=e.i(905e3),O=e.i(301426),D=e.i(881264),I=e.i(355345),E=e.i(86443),K=e.i(723451),M=e.i(694713),z=e.i(756902),R=e.i(976835);function F(e){return`${(100*e).toFixed(0)}%`}let W={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},V=(0,y.createVarsResolver)((e,{textColor:a,gridColor:t,cursorFill:r,barLabelColor:o})=>({root:{"--chart-text-color":a?(0,g.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,g.getThemeColor)(t,e):void 0,"--chart-cursor-fill":r?(0,g.getThemeColor)(r,e):void 0,"--chart-bar-label-color":o?(0,g.getThemeColor)(o,e):void 0}})),G=(0,b.factory)(e=>{let a,t,r=(0,S.useProps)("BarChart",W,e),{classNames:o,className:n,style:i,styles:l,unstyled:s,vars:c,data:m,withLegend:d,legendProps:y,series:b,onMouseLeave:N,dataKey:P,withTooltip:k,withXAxis:G,withYAxis:U,gridAxis:J,tickLine:_,xAxisProps:Z,yAxisProps:X,unit:Y,tooltipAnimationDuration:H,strokeDasharray:Q,gridProps:$,tooltipProps:q,referenceLines:ee,fillOpacity:ea,barChartProps:et,type:er,orientation:eo,dir:en,valueFormatter:ei,children:el,barProps:es,xAxisLabel:ec,yAxisLabel:em,withBarValueLabel:ed,valueLabelProps:ep,withRightYAxis:eu,rightYAxisLabel:eh,rightYAxisProps:ef,minBarSize:ex,maxBarWidth:ey,mod:eb,getBarColor:eg,gridColor:ev,textColor:eS,attributes:eL,...eT}=r,eA=(0,v.useMantineTheme)(),[eC,eN]=(0,A.useState)(null),eP=null!==eC,ek="stacked"===er||"percent"===er,ej="percent"===er?F:ei,{resolvedClassNames:ew,resolvedStyles:eB}=(0,L.useResolvedStylesApi)({classNames:o,styles:l,props:r}),eO="waterfall"===er?(a=0,t=0,m.map(e=>{if(e.standalone)for(let a in e)"number"==typeof e[a]&&a!==P&&(e[a]=[0,e[a]]);else for(let r in e)"number"==typeof e[r]&&r!==P&&(t+=e[r],e[r]=[a,t],a=t);return e})):m,eD=(0,T.useStyles)({name:"BarChart",classes:f.default,props:r,className:n,style:i,classNames:o,styles:l,unstyled:s,attributes:eL,vars:c,varsResolver:V}),eI=b.map(e=>{let a=(0,g.getThemeColor)(e.color,eA),t=eP&&eC!==e.name,r="function"==typeof es?es(e):es,o=r?.shape;return(0,A.createElement)(C.Bar,{...eD("bar"),key:e.name,name:e.name,dataKey:e.name,fill:a,stroke:a,isAnimationActive:!1,fillOpacity:t?.1:ea,strokeOpacity:.2*!!t,stackId:ek?"stack":e.stackId||void 0,yAxisId:e.yAxisId||void 0,minPointSize:ex,...r,shape:t=>{let r=t.payload,n=r?.color?(0,g.getThemeColor)(r.color,eA):"function"==typeof eg?(0,g.getThemeColor)(eg(r?.[e.name],e),eA):("function"==typeof es?es(e).fill:es?.fill)||a,i={...t,fill:n};return"function"==typeof o?o(i):A.default.isValidElement(o)?A.default.cloneElement(o,i):"object"==typeof o&&o?(0,p.jsx)(I.Rectangle,{...i,...o}):(0,p.jsx)(I.Rectangle,{...i})}},ed&&(0,p.jsx)(O.LabelList,{position:"vertical"===eo?"right":"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:e=>ej?.(e),..."function"==typeof ep?ep(e):ep}))}),eE=ee?.map((e,a)=>{let t=(0,g.getThemeColor)(e.color,eA);return(0,p.jsx)(E.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eD("referenceLine")},a)}),eK={axisLine:!1,..."vertical"===eo?{dataKey:P,type:"category"}:{type:"number"},tickLine:"none"!==J&&("y"===_||"xy"===_)&&{stroke:"currentColor"},allowDecimals:!0,unit:Y,tickFormatter:"vertical"===eo?void 0:ej,...eD("axis")};return(0,p.jsx)(x.Box,{...eD("root"),onMouseLeave:e=>{eN(null),N?.(e)},dir:en||"ltr",mod:[{orientation:eo},eb],...eT,children:(0,p.jsx)(K.ResponsiveContainer,{...eD("container"),children:(0,p.jsxs)(j,{data:eO,stackOffset:"percent"===er?"expand":void 0,layout:eo,maxBarSize:ey,margin:{bottom:ec?30:void 0,left:em?10:void 0,right:em?5:void 0},...et,children:[d&&(0,p.jsx)(D.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(h.ChartLegend,{payload:e.payload,onHighlight:eN,legendPosition:y?.verticalAlign||"top",classNames:ew,styles:eB,series:b,showColor:"waterfall"!==er,attributes:eL}),...y}),(0,p.jsxs)(z.XAxis,{hide:!G,..."vertical"===eo?{type:"number"}:{dataKey:P},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==J&&("x"===_||"xy"===_)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===eo?ej:void 0,...eD("axis"),...Z,children:[ec&&(0,p.jsx)(B.Label,{position:"insideBottom",offset:-20,fontSize:12,...eD("axisLabel"),children:ec}),Z?.children]}),(0,p.jsxs)(R.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!U,...eK,...X,children:[em&&(0,p.jsx)(B.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eD("axisLabel"),children:em}),X?.children]}),(0,p.jsxs)(R.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eu,...eK,...ef,children:[eh&&(0,p.jsx)(B.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eD("axisLabel"),children:eh}),X?.children]}),(0,p.jsx)(w.CartesianGrid,{strokeDasharray:Q,vertical:"y"===J||"xy"===J,horizontal:"x"===J||"xy"===J,...eD("grid"),...$}),k&&(0,p.jsx)(M.Tooltip,{animationDuration:H,isAnimationActive:0!==H,position:"vertical"===eo?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Q,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,type:"waterfall"===er?"scatter":void 0,unit:Y,classNames:ew,styles:eB,series:b,valueFormatter:ei,attributes:eL}),...q}),eI,eE,el]})})})});G.displayName="@mantine/charts/BarChart",G.classes=f.default,G.varsResolver=V;let U={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],...e})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"__",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0}]},J={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},_={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:e.color}],...e})},code:[{code:e=>`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"number",prop:"fillOpacity",initialValue:1,libraryValue:"__",min:0,max:1,step:.01}]},Z={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",className:"m_ad75446c",series:[{name:"Smartphones",color:"var(--bar-color)"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      className={classes.root}
      series={[{ name: 'Smartphones', color: 'var(--bar-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --bar-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --bar-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var X=e.i(470743),Y=e.i(883364);function H({label:e,payload:a}){return a?(0,p.jsxs)(X.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(Y.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,p.jsxs)(Y.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let Q={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(H,{label:e,payload:a})},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: readonly Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},$={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",className:"m_cb37bd9a",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},q={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",withLegend:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",withTooltip:!1,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withTooltip={false}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",referenceLines:[{y:1130,color:"red.5",label:"Profit reached",labelPosition:"insideTopRight"}],series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      referenceLines={[
        {
          y: 1130,
          color: 'red.5',
          label: 'Profit reached',
          labelPosition: 'insideTopRight',
        },
      ]}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",strokeDasharray:"15 15",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      strokeDasharray="15 15"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y.Text,{mb:"md",pl:"md",children:"Smartphones sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"}],barChartProps:{syncId:"tech"}}),(0,p.jsx)(Y.Text,{mb:"md",pl:"md",mt:"xl",children:"Laptops sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"month",barChartProps:{syncId:"tech"},series:[{name:"Laptops",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Smartphones sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        series={[{ name: 'Smartphones', color: 'violet.6' }]}
        barChartProps={{ syncId: 'tech' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Laptops sales:
      </Text>

      <BarChart
        h={180}
        data={data}
        dataKey="month"
        barChartProps={{ syncId: 'tech' }}
        series={[{ name: 'Laptops', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",tooltipAnimationDuration:200,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",unit:"$",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      unit="$"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",yAxisProps:{domain:[0,250]},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      yAxisProps={{ domain: [0, 250] }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",type:"stacked",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:o,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ed={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",type:"percent",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="percent"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",type:"stacked",orientation:"vertical",yAxisProps:{width:80},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Smartphones",label:"Phone sales",color:"violet.6"},{name:"Laptops",label:"Laptop sales",color:"blue.6"},{name:"Tablets",label:"Tablet sales",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Smartphones', label: 'Smartphones sales', color: 'violet.6' },
        { name: 'Laptops', label: 'Laptops sales', color: 'blue.6' },
        { name: 'Tablets', label: 'Tablets sales', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(G,{h:200,data:t,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eb={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:i,dataKey:"month",minBarSize:10,series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      minBarSize={10}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:s,dataKey:"month",series:[{name:"Smartphones",color:"violet.6",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"teal.6",stackId:"b"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'teal.6', stackId: 'b' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:s,dataKey:"month",series:[{name:"Smartphones",color:"url(#crosshatch)",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"url(#diagonalStripes)",stackId:"b"}],children:(0,p.jsxs)("defs",{children:[(0,p.jsx)("pattern",{id:"diagonalStripes",patternUnits:"userSpaceOnUse",width:6,height:8,patternTransform:"rotate(45)",children:(0,p.jsx)("rect",{width:"2",height:"8",transform:"translate(0,0)",fill:"color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"})}),(0,p.jsxs)("pattern",{id:"crosshatch",patternUnits:"userSpaceOnUse",width:8,height:8,children:[(0,p.jsx)("path",{d:"M 0 0 L 8 0 L 8 8 L 0 8 Z",fill:"none",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,p.jsx)("path",{d:"M 0 0 L 8 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,p.jsx)("path",{d:"M 8 0 L 0 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"})]})]})})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={mixedStackData}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'url(#crosshatch)', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'url(#diagonalStripes)', stackId: 'b' },
      ]}
    >
      <defs>
        <pattern
          id="diagonalStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={8}
          patternTransform="rotate(45)"
        >
          <rect
            width="2"
            height="8"
            transform="translate(0,0)"
            fill="color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"
          />
        </pattern>

        <pattern id="crosshatch" patternUnits="userSpaceOnUse" width={8} height={8}>
          <path
            d="M 0 0 L 8 0 L 8 8 L 0 8 Z"
            fill="none"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 0 0 L 8 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 8 0 L 0 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
        </pattern>
      </defs>
    </BarChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]};var eS={root:"m_661936e7",bar:"m_c97c716e"},eL=e.i(839608);let eT={type:"code",component:function(){let e=(0,eL.useMediaQuery)("(min-width: 48em)")?42:26,a=.5*e;return(0,p.jsx)(G,{h:300,data:m,dataKey:"index",barChartProps:{barGap:-((e+a)/2)},barProps:t=>({barSize:"you"===t.name?e:a}),classNames:eS,series:[{name:"you",color:"var(--you-bar-color)"},{name:"average",color:"var(--average-bar-color)"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}
`,language:"scss",fileName:"Demo.module.css"},{code:d,language:"tsx",fileName:"data.ts"}]},eA={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",getBarColor:e=>e>700?"teal.8":"red.8",series:[{name:"Laptops",color:"gray.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eC={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),withBarValueLabel:!0,valueLabelProps:{position:"inside",fill:"white",fontSize:8},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      withBarValueLabel
      valueLabelProps={{ position: 'inside', fill: 'white', fontSize: 8 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eN=e.i(980667);let eP={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],children:(0,p.jsx)(eN.ReferenceArea,{x1:"January",x2:"March",y1:0,y2:1250,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Q1 sales threshold",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="January"
        x2="March"
        y1={0}
        y2={1250}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Q1 sales threshold',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </BarChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var ek=(0,a.__exportAll)({axisLabels:()=>ex,axisProps:()=>J,barProps:()=>ef,barValueLabel:()=>ey,color:()=>_,colorSchemeColor:()=>Z,customTooltip:()=>Q,getBarColor:()=>eA,gridColor:()=>$,legend:()=>q,legendPosition:()=>ee,minBarSize:()=>eb,mixedStack:()=>eg,noTooltip:()=>ea,overlay:()=>eT,percent:()=>ed,referenceArea:()=>eP,referenceLines:()=>et,seriesLabels:()=>eu,stacked:()=>ec,stripes:()=>ev,strokeDasharray:()=>er,sync:()=>eo,tooltipAnimation:()=>en,unit:()=>ei,usage:()=>U,valueFormatter:()=>eh,valueLabelProps:()=>eC,vertical:()=>ep,waterfall:()=>em,xAxisOffset:()=>el,yScale:()=>es});e.s(["BarChartDemos",0,ek],113997)}]);
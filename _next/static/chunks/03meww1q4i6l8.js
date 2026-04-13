(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,789859,328233,482593,e=>{"use strict";var a=e.i(191788),t=e.i(56206),r=e.i(778979),o=e.i(883388),n=e.i(270627);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var l=e=>{var{cx:l,cy:s,r:c,className:d}=e,m=(0,t.clsx)("recharts-dot",d);return(0,n.isNumber)(l)&&(0,n.isNumber)(s)&&(0,n.isNumber)(c)?a.createElement("circle",i({},(0,o.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:m,cx:l,cy:s,r:c})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),m=e.i(561622),p=e.i(446354),u=["points"];function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function h(){return(h=Object.assign.bind()).apply(null,arguments)}function y(e){var{option:r,dotProps:o,className:n}=e;if((0,a.isValidElement)(r))return(0,a.cloneElement)(r,o);if("function"==typeof r)return r(o);var i=(0,t.clsx)(n,"boolean"!=typeof r?r.className:""),s=null!=o?o:{},{points:c}=s,d=function(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(s,u);return a.createElement(l,h({},d,{className:i}))}e.s(["Dots",0,function(e){var{points:t,dot:r,className:o,dotClassName:n,dataKey:i,baseProps:l,needClip:u,clipPathId:f,zIndex:x=p.DefaultZIndexes.scatter}=e;if(null==t||!r&&1!==t.length)return null;var v=(0,c.isClipDot)(r),b=(0,d.svgPropertiesAndEventsFromUnknown)(r),A=t.map((e,o)=>{var s,c,d=g(g(g({r:3},l),b),{},{index:o,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:i,value:e.value,payload:e.payload,points:t});return a.createElement(y,{key:"dot-".concat(o),option:r,dotProps:d,className:n})}),P={};return u&&null!=f&&(P.clipPath="url(#clipPath-".concat(v?"":"dots-").concat(f,")")),a.createElement(m.ZIndexLayer,{zIndex:x},a.createElement(s.Layer,h({className:o},P),A))}],789859);var x=e.i(543372),v=e.i(281695),b=e.i(630173);function A(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?A(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var O=e=>{var t,{point:n,childIndex:i,mainColor:c,activeDot:d,dataKey:m,clipPath:p}=e;if(!1===d||null==n.x||null==n.y)return null;var u=P(P(P({},{index:i,dataKey:m,cx:n.x,cy:n.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:n.payload,value:n.value}),(0,o.svgPropertiesNoEventsFromUnknown)(d)),(0,r.adaptEventHandlers)(d));return t=(0,a.isValidElement)(d)?(0,a.cloneElement)(d,u):"function"==typeof d?d(u):a.createElement(l,u),a.createElement(s.Layer,{className:"recharts-active-dot",clipPath:p},t)};e.s(["ActivePoints",0,function(e){var{points:t,mainColor:r,activeDot:o,itemDataKey:i,clipPath:l,zIndex:s=p.DefaultZIndexes.activeDot}=e,c=(0,x.useAppSelector)(v.selectActiveTooltipIndex),d=(0,b.useActiveTooltipDataPoints)();if(null==t||null==d)return null;var u=t.find(e=>d.includes(e.payload));return(0,n.isNullish)(u)?null:a.createElement(m.ZIndexLayer,{zIndex:s},a.createElement(O,{point:u,childIndex:Number(c),mainColor:r,dataKey:i,activeDot:o,clipPath:l}))}],482593)},554687,e=>{"use strict";var a=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var t=(0,a.svgPropertiesNoEventsFromUnknown)(e);if(null!=t){var{r,strokeWidth:o}=t,n=Number(r),i=Number(o);return(Number.isNaN(n)||n<0)&&(n=3),(Number.isNaN(i)||i<0)&&(i=2),{r:n,strokeWidth:i}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var a=e.i(391398);e.s(["PointLabel",0,function({x:e,y:t,value:r,valueFormatter:o}){return(0,a.jsx)("g",{transform:`translate(${e},${t})`,children:(0,a.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(r):r})})}])},385429,e=>{"use strict";e.s(["Line",()=>ei,"computeLinePoints",()=>en],385429);var a=e.i(191788),t=e.i(56206),r=e.i(815954),o=e.i(301426),n=e.i(789859),i=e.i(270627),l=e.i(106043),s=e.i(516257),c=e.i(482593),d=e.i(128002),m=e.i(170038),p=e.i(777814),u=e.i(901841),f=e.i(662688),g=e.i(451400),h=e.i(399479),y=e.i(83727),x=(e,a,t,r)=>(0,y.selectAxisWithScale)(e,"xAxis",a,r),v=(e,a,t,r)=>(0,y.selectTicksOfGraphicalItem)(e,"xAxis",a,r),b=(e,a,t,r)=>(0,y.selectAxisWithScale)(e,"yAxis",t,r),A=(e,a,t,r)=>(0,y.selectTicksOfGraphicalItem)(e,"yAxis",t,r),P=(0,g.createSelector)([u.selectChartLayout,x,b,v,A],(e,a,t,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(a,r,!1):(0,s.getBandSizeOfAxis)(t,o,!1));function O(e){return"line"===e.type}var L=(0,g.createSelector)([y.selectUnfilteredCartesianItems,(e,a,t,r,o)=>o],(e,a)=>e.filter(O).find(e=>e.id===a)),D=(0,g.createSelector)([u.selectChartLayout,x,b,v,A,L,P,h.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,a,t,r,o,n,i,l)=>{var s,{chartData:c,dataStartIndex:d,dataEndIndex:m}=l;if(null!=n&&null!=a&&null!=t&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i&&("horizontal"===e||"vertical"===e)){var{dataKey:p,data:u}=n;if(null!=(s=null!=u&&u.length>0?u:null==c?void 0:c.slice(d,m+1)))return en({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:o,dataKey:p,bandSize:i,displayedData:s})}}),T=e.i(543372),C=e.i(836094),N=e.i(3304),j=e.i(297974),k=e.i(630173),w=e.i(768069),E=e.i(436323),K=e.i(883388),I=e.i(355476),M=e.i(62037),S=e.i(554687),R=e.i(134959),W=e.i(561622),V=e.i(446354),B=e.i(547810),F=["id"],z=["type","layout","connectNulls","needClip","shape"],G=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function $(){return($=Object.assign.bind()).apply(null,arguments)}function Y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function U(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Y(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function J(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=a.memo(e=>{var{dataKey:t,data:r,stroke:o,strokeWidth:n,fill:l,name:c,hide:m,unit:p,tooltipType:u,id:f}=e,g={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:o,strokeWidth:n,fill:l,dataKey:t,nameKey:void 0,name:(0,s.getTooltipNameProp)(c,t),hide:m,type:u,color:o,unit:p,graphicalItemId:f}};return a.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:g})}),Z=(e,a)=>"".concat(a,"px ").concat(e,"px");function H(e){var{clipPathId:t,points:r,props:o}=e,{dot:i,dataKey:l,needClip:s}=o,{id:c}=o,d=J(o,F),m=(0,K.svgPropertiesNoEvents)(d);return a.createElement(n.Dots,{points:r,dot:i,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:l,baseProps:m,needClip:s,clipPathId:t})}function X(e){var{showLabels:t,children:r,points:n}=e,i=(0,a.useMemo)(()=>null==n?void 0:n.map(e=>{var a,t,r={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return U(U({},r),{},{value:e.value,payload:e.payload,viewBox:r,parentViewBox:void 0,fill:void 0})}),[n]);return a.createElement(o.CartesianLabelListContextProvider,{value:t?i:void 0},r)}function q(e){var{clipPathId:t,pathRef:r,points:o,strokeDasharray:n,props:i}=e,{type:l,layout:s,connectNulls:c,needClip:d,shape:m}=i,p=J(i,z),u=U(U({},(0,M.svgPropertiesAndEvents)(p)),{},{fill:"none",className:"recharts-line-curve",clipPath:d?"url(#clipPath-".concat(t,")"):void 0,points:o,type:l,layout:s,connectNulls:c,strokeDasharray:null!=n?n:i.strokeDasharray});return a.createElement(a.Fragment,null,(null==o?void 0:o.length)>1&&a.createElement(R.Shape,$({shapeType:"curve",option:m},u,{pathRef:r})),a.createElement(H,{points:o,clipPathId:t,props:i}))}function Q(e){var{clipPathId:t,props:r,pathRef:n,previousPointsRef:l,longestAnimatedLengthRef:s}=e,{points:c,strokeDasharray:d,isAnimationActive:m,animationBegin:p,animationDuration:u,animationEasing:f,animateNewValues:g,width:h,height:y,onAnimationEnd:x,onAnimationStart:v}=r,b=l.current,A=(0,N.useAnimationId)(c,"recharts-line-"),P=(0,a.useRef)(A),[O,L]=(0,a.useState)(!1),D=(0,a.useCallback)(()=>{"function"==typeof x&&x(),L(!1)},[x]),T=(0,a.useCallback)(()=>{"function"==typeof v&&v(),L(!0)},[v]),C=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(n.current),j=(0,a.useRef)(0);P.current!==A&&(j.current=s.current,P.current=A);var k=j.current;return a.createElement(X,{points:c,showLabels:!O},r.children,a.createElement(I.JavascriptAnimate,{animationId:A,begin:p,duration:u,isActive:m,easing:f,onAnimationEnd:D,onAnimationStart:T,key:A},e=>{var o,p=Math.min((0,i.interpolate)(k,C+k,e),C);if(o=m?d?((e,a,t)=>{var r=t.reduce((e,a)=>e+a,0);if(!r)return Z(a,e);for(var o=Math.floor(e/r),n=e%r,i=[],l=0,s=0;l<t.length;s+=null!=(c=t[l])?c:0,++l){var c,d=t[l];if(null!=d&&s+d>n){i=[...t.slice(0,l),n-s];break}}var m=i.length%2==0?[0,a]:[a];return[...function(e,a){for(var t=e.length%2!=0?[...e,0]:e,r=[],o=0;o<a;++o)r.push(...t);return r}(t,o),...i,...m].map(e=>"".concat(e,"px")).join(", ")})(p,C,"".concat(d).split(/[,\s]+/gim).map(e=>parseFloat(e))):Z(C,p):null==d?void 0:String(d),e>0&&C>0&&(l.current=c,s.current=Math.max(s.current,p)),b){var u=b.length/c.length,f=1===e?c:c.map((a,t)=>{var r=Math.floor(t*u);if(b[r]){var o=b[r];return U(U({},a),{},{x:(0,i.interpolate)(o.x,a.x,e),y:(0,i.interpolate)(o.y,a.y,e)})}return g?U(U({},a),{},{x:(0,i.interpolate)(2*h,a.x,e),y:(0,i.interpolate)(y/2,a.y,e)}):U(U({},a),{},{x:a.x,y:a.y})});return l.current=f,a.createElement(q,{props:r,points:f,clipPathId:t,pathRef:n,strokeDasharray:o})}return a.createElement(q,{props:r,points:c,clipPathId:t,pathRef:n,strokeDasharray:o})}),a.createElement(o.LabelListFromLabelProp,{label:r.label}))}function ee(e){var{clipPathId:t,props:r}=e,o=(0,a.useRef)(null),n=(0,a.useRef)(0),i=(0,a.useRef)(null);return a.createElement(Q,{props:r,clipPathId:t,previousPointsRef:o,longestAnimatedLengthRef:n,pathRef:i})}var ea=(e,a)=>{var t,r;return{x:null!=(t=e.x)?t:void 0,y:null!=(r=e.y)?r:void 0,value:e.value,errorVal:(0,s.getValueByDataKey)(e.payload,a)}};class et extends a.Component{render(){var{hide:e,dot:o,points:n,className:i,xAxisId:s,yAxisId:d,top:u,left:f,width:g,height:h,id:y,needClip:x,zIndex:v}=this.props;if(e)return null;var b=(0,t.clsx)("recharts-line",i),{r:A,strokeWidth:P}=(0,S.getRadiusAndStrokeWidthFromDot)(o),O=(0,l.isClipDot)(o),L=2*A+P,D=x?"url(#clipPath-".concat(O?"":"dots-").concat(y,")"):void 0;return a.createElement(W.ZIndexLayer,{zIndex:v},a.createElement(r.Layer,{className:b},x&&a.createElement("defs",null,a.createElement(p.GraphicalItemClipPath,{clipPathId:y,xAxisId:s,yAxisId:d}),!O&&a.createElement("clipPath",{id:"clipPath-dots-".concat(y)},a.createElement("rect",{x:f-L/2,y:u-L/2,width:g+L,height:h+L}))),a.createElement(m.SetErrorBarContext,{xAxisId:s,yAxisId:d,data:n,dataPointFormatter:ea,errorBarOffset:0},a.createElement(ee,{props:this.props,clipPathId:y}))),a.createElement(c.ActivePoints,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:D}))}}var er={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:V.DefaultZIndexes.line,type:"linear"};function eo(e){var t=(0,j.resolveDefaultProps)(e,er),{activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:l,connectNulls:s,dot:c,hide:d,isAnimationActive:m,label:g,legendType:h,xAxisId:y,yAxisId:x,id:v}=t,b=J(t,G),{needClip:A}=(0,p.useNeedsClip)(y,x),P=(0,k.usePlotArea)(),O=(0,u.useChartLayout)(),L=(0,f.useIsPanorama)(),C=(0,T.useAppSelector)(e=>D(e,y,x,L,v));if("horizontal"!==O&&"vertical"!==O||null==C||null==P)return null;var{height:N,width:w,x:E,y:K}=P;return a.createElement(et,$({},b,{id:v,connectNulls:s,dot:c,activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:l,isAnimationActive:m,hide:d,label:g,legendType:h,xAxisId:y,yAxisId:x,points:C,layout:O,height:N,width:w,left:E,top:K,needClip:A}))}function en(e){var{layout:a,xAxis:t,yAxis:r,xAxisTicks:o,yAxisTicks:n,dataKey:l,bandSize:c,displayedData:d}=e;return d.map((e,d)=>{var m=(0,s.getValueByDataKey)(e,l);if("horizontal"===a){var p=(0,s.getCateCoordinateOfLine)({axis:t,ticks:o,bandSize:c,entry:e,index:d}),u=(0,i.isNullish)(m)?null:r.scale.map(m);return{x:p,y:null!=u?u:null,value:m,payload:e}}var f=(0,i.isNullish)(m)?null:t.scale.map(m),g=(0,s.getCateCoordinateOfLine)({axis:r,ticks:n,bandSize:c,entry:e,index:d});return null==f||null==g?null:{x:f,y:g,value:m,payload:e}}).filter(Boolean)}var ei=a.memo(function(e){var t=(0,j.resolveDefaultProps)(e,er),r=(0,f.useIsPanorama)();return a.createElement(w.RegisterGraphicalItemId,{id:t.id,type:"line"},e=>a.createElement(a.Fragment,null,a.createElement(C.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,stroke:r,legendType:o,hide:n}=e;return[{inactive:n,dataKey:a,type:o,color:r,value:(0,s.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(_,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:e}),a.createElement(E.SetCartesianGraphicalItem,{type:"line",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:r}),a.createElement(eo,$({},t,{id:e}))))},B.propsAreEqual);ei.displayName="Line"},588741,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],r=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],n=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];
`,i=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],l=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
`,s=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],c=`
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
`,d=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],m=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`;var p=e.i(391398),u=e.i(520916),f=e.i(577596),g=e.i(739539),h=e.i(979298),y=e.i(232471),x=e.i(481178),v=e.i(275519),b=e.i(317477),A=e.i(951254),P=e.i(44091),O=e.i(62904),L=e.i(391466),D=e.i(191788),T=e.i(526626),C=e.i(905e3),N=e.i(881264),j=e.i(385429),k=e.i(471970),w=e.i(437515),E=["axis"],K=(0,D.forwardRef)((e,a)=>D.createElement(w.CartesianChart,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:E,tooltipPayloadSearcher:k.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),I=e.i(86443),M=e.i(723451),S=e.i(694713),R=e.i(756902),W=e.i(976835),V=e.i(107315);let B={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},F=(0,x.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,b.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,b.getThemeColor)(t,e):void 0}})),z=(0,v.factory)(e=>{let a=(0,P.useProps)("LineChart",B,e),{classNames:t,className:r,style:o,styles:n,unstyled:i,vars:l,data:s,withLegend:c,legendProps:d,series:m,onMouseLeave:x,dataKey:v,withTooltip:k,withXAxis:w,withYAxis:E,gridAxis:z,tickLine:G,xAxisProps:$,yAxisProps:Y,unit:U,tooltipAnimationDuration:J,strokeDasharray:_,gridProps:Z,tooltipProps:H,referenceLines:X,withDots:q,dotProps:Q,activeDotProps:ee,strokeWidth:ea,lineChartProps:et,connectNulls:er,fillOpacity:eo,curveType:en,orientation:ei,dir:el,valueFormatter:es,children:ec,lineProps:ed,xAxisLabel:em,yAxisLabel:ep,type:eu,gradientStops:ef,withRightYAxis:eg,rightYAxisLabel:eh,rightYAxisProps:ey,withPointLabels:ex,attributes:ev,gridColor:eb,...eA}=a,eP=(0,A.useMantineTheme)(),[eO,eL]=(0,D.useState)(null),eD=null!==eO,{resolvedClassNames:eT,resolvedStyles:eC}=(0,O.useResolvedStylesApi)({classNames:t,styles:n,props:a}),eN=(0,L.useStyles)({name:"LineChart",classes:h.default,props:a,className:r,style:o,classNames:t,styles:n,unstyled:i,attributes:ev,vars:l,varsResolver:F}),ej=`line-chart-gradient-${(0,V.useId)()}`,ek=ef?.map(e=>(0,p.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,b.getThemeColor)(e.color,eP)},e.color)),ew=m.map(e=>{let a=(0,b.getThemeColor)(e.color,eP),t=eD&&eO!==e.name;return(0,D.createElement)(j.Line,{...eN("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!q&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...Q},activeDot:!!q&&{fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...ee},fill:a,stroke:"gradient"===eu?`url(#${ej})`:a,strokeWidth:ea,isAnimationActive:!1,fillOpacity:t?0:eo,strokeOpacity:t?.5:eo,connectNulls:er,type:e.curveType??en,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ex?(0,p.jsx)(g.PointLabel,{valueFormatter:es}):void 0,..."function"==typeof ed?ed(e):ed})}),eE=X?.map((e,a)=>{let t=(0,b.getThemeColor)(e.color,eP);return(0,p.jsx)(I.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eN("referenceLine")},a)}),eK={axisLine:!1,..."vertical"===ei?{dataKey:v,type:"category"}:{type:"number"},tickLine:"none"!==z&&("y"===G||"xy"===G)&&{stroke:"currentColor"},allowDecimals:!0,unit:U,tickFormatter:"vertical"===ei?void 0:es,...eN("axis")};return(0,p.jsx)(y.Box,{...eN("root"),onMouseLeave:e=>{eL(null),x?.(e)},dir:el||"ltr",...eA,children:(0,p.jsx)(M.ResponsiveContainer,{...eN("container"),children:(0,p.jsxs)(K,{data:s,layout:ei,margin:{bottom:em?30:void 0,left:ep?10:void 0,right:ep?5:void 0},...et,children:["gradient"===eu&&(0,p.jsx)("defs",{children:(0,p.jsx)("linearGradient",{id:ej,x1:"0",y1:"0",x2:"0",y2:"1",children:ek})}),c&&(0,p.jsx)(N.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(f.ChartLegend,{payload:e.payload,onHighlight:eL,legendPosition:d?.verticalAlign||"top",classNames:eT,styles:eC,series:m,showColor:"gradient"!==eu,attributes:ev}),...d}),(0,p.jsxs)(R.XAxis,{hide:!w,..."vertical"===ei?{type:"number"}:{dataKey:v},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==z&&("x"===G||"xy"===G)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ei?es:void 0,...eN("axis"),...$,children:[em&&(0,p.jsx)(C.Label,{position:"insideBottom",offset:-20,fontSize:12,...eN("axisLabel"),children:em}),$?.children]}),(0,p.jsxs)(W.YAxis,{tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!E,...eK,...Y,children:[ep&&(0,p.jsx)(C.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eN("axisLabel"),children:ep}),Y?.children]}),(0,p.jsxs)(W.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eg,...eK,...ey,children:[eh&&(0,p.jsx)(C.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eN("axisLabel"),children:eh}),Y?.children]}),(0,p.jsx)(T.CartesianGrid,{strokeDasharray:_,vertical:"y"===z||"xy"===z,horizontal:"x"===z||"xy"===z,...eN("grid"),...Z}),k&&(0,p.jsx)(S.Tooltip,{animationDuration:J,isAnimationActive:0!==J,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:_},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:U,classNames:eT,styles:eC,series:m,valueFormatter:es,showColor:"gradient"!==eu,attributes:ev}),...H}),ew,eE,ec]})})})});z.displayName="@mantine/charts/LineChart",z.classes=h.default,z.varsResolver=F;let G={type:"configurator",component:function(e){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},$={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Y={type:"configurator",component:function(e){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},U={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--line-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --line-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --line-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]},J={type:"configurator",component:function(e){return(0,p.jsx)(z,{h:300,data:o,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},_={type:"code",component:function(e){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6', curveType: 'linear' },
        { name: 'Oranges', color: 'blue.6', curveType: 'bump' },
        { name: 'Tomatoes', color: 'teal.6', curveType: 'stepAfter' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var Z=e.i(470743),H=e.i(883364);function X({label:e,payload:a}){return a?(0,p.jsxs)(Z.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(H.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,p.jsxs)(H.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let q={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(X,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
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
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
import { LineChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 40, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out' },
      ]}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"configurator",component:function(e){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},es={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(H.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,p.jsx)(z,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,p.jsx)(H.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,p.jsx)(z,{h:180,data:t,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        lineChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <LineChart
        h={180}
        data={data}
        dataKey="date"
        lineChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ed={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:s,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => \`\${value}\xb0C\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:d,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",withLegend:!0,withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      withPointLabels
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eb=e.i(980667);let eA={type:"code",component:function(){return(0,p.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,p.jsx)(eb.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:1200,y2:3200,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend sales target",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend sales target',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </LineChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eP=(0,a.__exportAll)({axisLabels:()=>eh,axisProps:()=>$,color:()=>Y,colorSchemeColor:()=>U,connectNulls:()=>J,curveType:()=>_,customTooltip:()=>q,dotProps:()=>Q,gradient:()=>ey,gridColor:()=>ee,legend:()=>ea,legendPosition:()=>et,lineDasharray:()=>er,noTooltip:()=>eo,pointLabels:()=>ev,referenceArea:()=>eA,referenceLines:()=>en,rightYAxis:()=>ex,seriesLabels:()=>ef,strokeDasharray:()=>ei,strokeWidth:()=>el,sync:()=>es,tooltipAnimation:()=>ec,unit:()=>ed,usage:()=>G,valueFormatter:()=>eg,vertical:()=>em,xAxisOffset:()=>ep,yScale:()=>eu});e.s(["LineChartDemos",0,eP],588741)}]);
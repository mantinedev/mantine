(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,789859,328233,482593,e=>{"use strict";var a=e.i(191788),t=e.i(56206),r=e.i(778979),o=e.i(883388),n=e.i(270627);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var l=e=>{var l=e.cx,s=e.cy,d=e.r,c=e.className,m=(0,t.clsx)("recharts-dot",c);return(0,n.isNumber)(l)&&(0,n.isNumber)(s)&&(0,n.isNumber)(d)?a.createElement("circle",i({},(0,o.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:m,cx:l,cy:s,r:d})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),d=e.i(106043),c=e.i(62037),m=e.i(561622),p=e.i(446354),u=["points"];function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function h(){return(h=Object.assign.bind()).apply(null,arguments)}function y(e){var r=e.option,o=e.dotProps,n=e.className;if((0,a.isValidElement)(r))return(0,a.cloneElement)(r,o);if("function"==typeof r)return r(o);var i=(0,t.clsx)(n,"boolean"!=typeof r?r.className:""),s=null!=o?o:{},d=(s.points,function(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(s,u));return a.createElement(l,h({},d,{className:i}))}e.s(["Dots",0,function(e){var t=e.points,r=e.dot,o=e.className,n=e.dotClassName,i=e.dataKey,l=e.baseProps,u=e.needClip,f=e.clipPathId,x=e.zIndex,v=void 0===x?p.DefaultZIndexes.scatter:x;if(null==t||!r&&1!==t.length)return null;var b=(0,d.isClipDot)(r),A=(0,c.svgPropertiesAndEventsFromUnknown)(r),O=t.map((e,o)=>{var s,d,c=g(g(g({r:3},l),A),{},{index:o,cx:null!=(s=e.x)?s:void 0,cy:null!=(d=e.y)?d:void 0,dataKey:i,value:e.value,payload:e.payload,points:t});return a.createElement(y,{key:"dot-".concat(o),option:r,dotProps:c,className:n})}),P={};return u&&null!=f&&(P.clipPath="url(#clipPath-".concat(b?"":"dots-").concat(f,")")),a.createElement(m.ZIndexLayer,{zIndex:v},a.createElement(s.Layer,h({className:o},P),O))}],789859);var x=e.i(543372),v=e.i(281695),b=e.i(630173);function A(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?A(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var P=e=>{var t,n=e.point,i=e.childIndex,d=e.mainColor,c=e.activeDot,m=e.dataKey,p=e.clipPath;if(!1===c||null==n.x||null==n.y)return null;var u=O(O(O({},{index:i,dataKey:m,cx:n.x,cy:n.y,r:4,fill:null!=d?d:"none",strokeWidth:2,stroke:"#fff",payload:n.payload,value:n.value}),(0,o.svgPropertiesNoEventsFromUnknown)(c)),(0,r.adaptEventHandlers)(c));return t=(0,a.isValidElement)(c)?(0,a.cloneElement)(c,u):"function"==typeof c?c(u):a.createElement(l,u),a.createElement(s.Layer,{className:"recharts-active-dot",clipPath:p},t)};e.s(["ActivePoints",0,function(e){var t=e.points,r=e.mainColor,o=e.activeDot,i=e.itemDataKey,l=e.clipPath,s=e.zIndex,d=void 0===s?p.DefaultZIndexes.activeDot:s,c=(0,x.useAppSelector)(v.selectActiveTooltipIndex),u=(0,b.useActiveTooltipDataPoints)();if(null==t||null==u)return null;var f=t.find(e=>u.includes(e.payload));return(0,n.isNullish)(f)?null:a.createElement(m.ZIndexLayer,{zIndex:d},a.createElement(P,{point:f,childIndex:Number(c),mainColor:r,dataKey:i,activeDot:o,clipPath:l}))}],482593)},554687,e=>{"use strict";var a=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var t=(0,a.svgPropertiesNoEventsFromUnknown)(e);if(null!=t){var r=t.r,o=t.strokeWidth,n=Number(r),i=Number(o);return(Number.isNaN(n)||n<0)&&(n=3),(Number.isNaN(i)||i<0)&&(i=2),{r:n,strokeWidth:i}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var a=e.i(391398);e.s(["PointLabel",0,function({x:e,y:t,value:r,valueFormatter:o}){return(0,a.jsx)("g",{transform:`translate(${e},${t})`,children:(0,a.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(r):r})})}])},385429,e=>{"use strict";e.s(["Line",()=>ec,"computeLinePoints",()=>ed],385429);var a=e.i(191788),t=e.i(56206),r=e.i(815954),o=e.i(366998),n=["animationElapsedTime","isAnimating","isEntrance","visibleLength","strokeDasharray","connectNulls"];function i(){return(i=Object.assign.bind()).apply(null,arguments)}function l(e,a){return"".concat(a,"px ").concat(e,"px")}var s=e.i(438596),d=e.i(301426),c=e.i(789859),m=e.i(270627),p=e.i(106043),u=e.i(516257),f=e.i(482593),g=e.i(128002),h=e.i(170038),y=e.i(777814),x=e.i(901841),v=e.i(662688),b=e.i(314169),A=e.i(399479),O=e.i(83727),P=(e,a,t,r)=>(0,O.selectAxisWithScale)(e,"xAxis",a,r),D=(e,a,t,r)=>(0,O.selectTicksOfGraphicalItem)(e,"xAxis",a,r),L=(e,a,t,r)=>(0,O.selectAxisWithScale)(e,"yAxis",t,r),C=(e,a,t,r)=>(0,O.selectTicksOfGraphicalItem)(e,"yAxis",t,r),T=(0,b.createSelector)([x.selectChartLayout,P,L,D,C],(e,a,t,r,o)=>(0,u.isCategoricalAxis)(e,"xAxis")?(0,u.getBandSizeOfAxis)(a,r,!1):(0,u.getBandSizeOfAxis)(t,o,!1));function N(e){return"line"===e.type}var j=(0,b.createSelector)([O.selectUnfilteredCartesianItems,(e,a,t,r,o)=>o],(e,a)=>e.filter(N).find(e=>e.id===a)),k=(0,b.createSelector)([x.selectChartLayout,P,L,D,C,j,T,A.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,a,t,r,o,n,i,l)=>{var s,d=l.chartData,c=l.dataStartIndex,m=l.dataEndIndex;if(null!=n&&null!=a&&null!=t&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i&&("horizontal"===e||"vertical"===e)){var p=n.dataKey,u=n.data;if(null!=(s=null!=u&&u.length>0?u:null==d?void 0:d.slice(c,m+1)))return ed({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:o,dataKey:p,bandSize:i,displayedData:s})}}),E=e.i(543372),w=e.i(836094),I=e.i(945031),K=e.i(634200),M=e.i(297974),S=e.i(630173),R=e.i(768069),B=e.i(436323),W=e.i(883388),V=e.i(62037),z=e.i(554687),F=e.i(134959),G=e.i(561622),$=e.i(446354),U=e.i(547810),Y=["id"],_=["type","layout","connectNulls","needClip","shape","strokeDasharray"],J=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function Z(){return(Z=Object.assign.bind()).apply(null,arguments)}function H(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function X(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function q(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?X(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Q={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationInterpolateFn:(e,a)=>{if(null==e)return[];if(1===a)return e.flatMap(e=>"removed"===e.status?[]:[e.next]);var t=function(e){var a=0,t=0;for(var r of e)"matched"===r.status&&null!=r.prev.x&&null!=r.next.x&&(a+=r.next.x-r.prev.x,t++);return t>0?a/t:0}(e),r=[];for(var o of e)if("matched"===o.status)r.push(q(q({},o.next),{},{x:(0,m.interpolate)(o.prev.x,o.next.x,a),y:(0,m.interpolate)(o.prev.y,o.next.y,a)}));else if("added"===o.status)if(null!=o.next.x){var n=o.next.x-t;r.push(q(q({},o.next),{},{x:(0,m.interpolate)(n,o.next.x,a),y:o.next.y}))}else r.push(o.next);else if("removed"===o.status&&null!=o.prev.x){var i=o.prev.x+t;r.push(q(q({},o.prev),{},{x:(0,m.interpolate)(o.prev.x,i,a),y:o.prev.y}))}return r},animationMatchBy:K.matchByIndex,connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",shape:function(e){e.animationElapsedTime,e.isAnimating,e.isEntrance;var t=e.visibleLength,r=e.strokeDasharray,s=e.connectNulls,d=function(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,n);if(null!=t){var c,m,p=d.pathRef,u=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(null!=(m=null==p?void 0:p.current)?m:null);c=r?function(e,a,t){var r=t.length%2!=0?[...t,...t]:t,o=r.reduce((e,a)=>e+a,0);if(!o)return l(a,e);for(var n=Math.floor(e/o),i=e%o,s=[],d=0,c=0;d<r.length;c+=null!=(m=r[d])?m:0,++d){var m,p=r[d];if(null!=p&&c+p>i){s=[...r.slice(0,d),i-c];break}}var u=s.length%2==0?[0,a]:[a];return[...function(e,a){for(var t=[],r=0;r<a;++r)t.push(...e);return t}(r,n),...s,...u].map(e=>"".concat(e,"px")).join(", ")}(t,u,"".concat(r).split(/[,\s]+/gim).map(e=>parseFloat(e))):l(u,t)}else null!=r&&(c=String(r));return a.createElement(o.Curve,i({},d,{connectNulls:null!=s&&s,strokeDasharray:c}))},stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:$.DefaultZIndexes.line,type:"linear"},ee=a.memo(e=>{var t=e.dataKey,r=e.data,o=e.stroke,n=e.strokeWidth,i=e.fill,l=e.name,s=e.hide,d=e.unit,c=e.formatter,p=e.tooltipType,f=e.id,h={dataDefinedOnItem:r,getPosition:m.noop,settings:{stroke:o,strokeWidth:n,fill:i,dataKey:t,nameKey:void 0,name:(0,u.getTooltipNameProp)(l,t),hide:s,type:p,color:o,unit:d,formatter:c,graphicalItemId:f}};return a.createElement(g.SetTooltipEntrySettings,{tooltipEntrySettings:h})});function ea(e){var t=e.clipPathId,r=e.points,o=e.props,n=o.dot,i=o.dataKey,l=o.needClip;o.id;var s=H(o,Y),d=(0,W.svgPropertiesNoEvents)(s);return a.createElement(c.Dots,{points:r,dot:n,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:i,baseProps:d,needClip:l,clipPathId:t})}function et(e){var t=e.showLabels,r=e.children,o=e.points,n=(0,a.useMemo)(()=>null==o?void 0:o.map(e=>{var a,t,r={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return q(q({},r),{},{value:e.value,payload:e.payload,viewBox:r,parentViewBox:void 0,fill:void 0})}),[o]);return a.createElement(d.CartesianLabelListContextProvider,{value:t?n:void 0},r)}function er(e){var t=e.clipPathId,r=e.pathRef,o=e.points,n=e.props,i=e.animationElapsedTime,l=e.isAnimating,s=e.isEntrance,d=e.visibleLength,c=n.type,m=n.layout,p=n.connectNulls,u=n.needClip,f=n.shape,g=n.strokeDasharray,h=H(n,_),y=q(q({},(0,V.svgPropertiesAndEvents)(h)),{},{fill:"none",className:"recharts-line-curve",clipPath:u?"url(#clipPath-".concat(t,")"):void 0,points:o,type:c,layout:m,connectNulls:p,strokeDasharray:null!=g?g:n.strokeDasharray,pathRef:r,animationElapsedTime:i,isAnimating:l,isEntrance:!!n.animateNewValues&&s,visibleLength:d});return a.createElement(a.Fragment,null,(null==o?void 0:o.length)>1&&a.createElement(F.Shape,{option:f,DefaultShape:Q.shape,shapeProps:y}),a.createElement(ea,{points:o,clipPathId:t,props:n}))}function eo(e){var t,r,o,n,i=e.clipPathId,l=e.props,c=e.pathRef,m=e.previousPointsRef,p=l.points,u=l.isAnimationActive,f=l.animationBegin,g=l.animationDuration,h=l.animationEasing,y=l.animationMatchBy,x=l.animationInterpolateFn,v=l.layout,b=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(c.current),A=(0,I.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),O=A.isAnimating,P=A.handleAnimationStart,D=A.handleAnimationEnd,L=(t=(0,a.useRef)(0),r=(0,a.useRef)(0),o=(0,a.useRef)(!1),(n=(0,a.useRef)(p)).current!==p&&(t.current=r.current,n.current=p),(0,a.useCallback)((e,a)=>{if(o.current)return null;var n=Math.min((0,s.round)(t.current+e*a),a);return e>0&&a>0&&(r.current=Math.max(r.current,n),n>=a)?(o.current=!0,null):n},[])),C=(0,a.useCallback)(e=>e>0&&b>0,[b]);return a.createElement(et,{points:p,showLabels:!O},l.children,a.createElement(I.AnimatedItems,{animationInput:p,animationIdPrefix:"recharts-line-",items:p,previousItemsRef:m,isAnimationActive:u,animationBegin:f,animationDuration:g,animationEasing:h,onAnimationStart:P,onAnimationEnd:D,animationInterpolateFn:x,animationMatchBy:y,shouldUpdatePreviousRef:C,layout:v},(e,t,r)=>{var o=O||t<1,n=o?L(t,b):null;return a.createElement(er,{props:l,points:e,clipPathId:i,pathRef:c,animationElapsedTime:t,isAnimating:o,isEntrance:r,visibleLength:n})}),a.createElement(d.LabelListFromLabelProp,{label:l.label}))}function en(e){var t=e.clipPathId,r=e.props,o=(0,a.useRef)(null),n=(0,a.useRef)(null);return a.createElement(eo,{props:r,clipPathId:t,previousPointsRef:o,pathRef:n})}var ei=(e,a)=>{var t,r;return{x:null!=(t=e.x)?t:void 0,y:null!=(r=e.y)?r:void 0,value:e.value,errorVal:(0,u.getValueByDataKey)(e.payload,a)}};class el extends a.Component{render(){var e=this.props,o=e.hide,n=e.dot,i=e.points,l=e.className,s=e.xAxisId,d=e.yAxisId,c=e.top,m=e.left,u=e.width,g=e.height,x=e.id,v=e.needClip,b=e.zIndex;if(o)return null;var A=(0,t.clsx)("recharts-line",l),O=(0,z.getRadiusAndStrokeWidthFromDot)(n),P=O.r,D=O.strokeWidth,L=(0,p.isClipDot)(n),C=2*P+D,T=v?"url(#clipPath-".concat(L?"":"dots-").concat(x,")"):void 0;return a.createElement(G.ZIndexLayer,{zIndex:b},a.createElement(r.Layer,{className:A},v&&a.createElement("defs",null,a.createElement(y.GraphicalItemClipPath,{clipPathId:x,xAxisId:s,yAxisId:d}),!L&&a.createElement("clipPath",{id:"clipPath-dots-".concat(x)},a.createElement("rect",{x:m-C/2,y:c-C/2,width:u+C,height:g+C}))),a.createElement(h.SetErrorBarContext,{xAxisId:s,yAxisId:d,data:i,dataPointFormatter:ei,errorBarOffset:0},a.createElement(en,{props:this.props,clipPathId:x}))),a.createElement(f.ActivePoints,{activeDot:this.props.activeDot,points:i,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:T}))}}function es(e){var t=(0,M.resolveDefaultProps)(e,Q),r=t.activeDot,o=t.animateNewValues,n=t.animationBegin,i=t.animationDuration,l=t.animationEasing,s=t.connectNulls,d=t.dot,c=t.hide,m=t.isAnimationActive,p=t.label,u=t.legendType,f=t.xAxisId,g=t.yAxisId,h=t.id,b=H(t,J),A=(0,y.useNeedsClip)(f,g).needClip,O=(0,S.usePlotArea)(),P=(0,x.useChartLayout)(),D=(0,v.useIsPanorama)(),L=(0,E.useAppSelector)(e=>k(e,f,g,D,h));if("horizontal"!==P&&"vertical"!==P||null==L||null==O)return null;var C=O.height,T=O.width,N=O.x,j=O.y;return a.createElement(el,Z({},b,{id:h,connectNulls:s,dot:d,activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:l,isAnimationActive:m,hide:c,label:p,legendType:u,xAxisId:f,yAxisId:g,points:L,layout:P,height:C,width:T,left:N,top:j,needClip:A}))}function ed(e){var a=e.layout,t=e.xAxis,r=e.yAxis,o=e.xAxisTicks,n=e.yAxisTicks,i=e.dataKey,l=e.bandSize;return e.displayedData.map((e,s)=>{var d=(0,u.getValueByDataKey)(e,i);if("horizontal"===a){var c=(0,u.getCateCoordinateOfLine)({axis:t,ticks:o,bandSize:l,entry:e,index:s}),p=(0,m.isNullish)(d)?null:r.scale.map(d);return{x:c,y:null!=p?p:null,value:d,payload:e}}var f=(0,m.isNullish)(d)?null:t.scale.map(d),g=(0,u.getCateCoordinateOfLine)({axis:r,ticks:n,bandSize:l,entry:e,index:s});return null==f||null==g?null:{x:f,y:g,value:d,payload:e}}).filter(Boolean)}var ec=a.memo(function(e){var t=(0,M.resolveDefaultProps)(e,Q),r=(0,v.useIsPanorama)();return a.createElement(R.RegisterGraphicalItemId,{id:t.id,type:"line"},e=>{var o,n,i,l;return a.createElement(a.Fragment,null,a.createElement(w.SetLegendPayload,{legendPayload:(o=t.dataKey,n=t.name,i=t.stroke,l=t.legendType,[{inactive:t.hide,dataKey:o,type:l,color:i,value:(0,u.getTooltipNameProp)(n,o),payload:t}])}),a.createElement(ee,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,formatter:t.formatter,tooltipType:t.tooltipType,id:e}),a.createElement(B.SetCartesianGraphicalItem,{type:"line",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:r}),a.createElement(es,Z({},t,{id:e})))})},U.propsAreEqual);ec.displayName="Line"},235636,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],r=`
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
`,s=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],d=`
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
`,c=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],m=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`;var p=e.i(391398),u=e.i(520916),f=e.i(577596),g=e.i(314579),h=e.i(739539),y=e.i(979298),x=e.i(232471),v=e.i(481178),b=e.i(275519),A=e.i(317477),O=e.i(951254),P=e.i(44091),D=e.i(62904),L=e.i(391466),C=e.i(526626),T=e.i(905e3),N=e.i(881264),j=e.i(385429),k=e.i(191788),E=e.i(471970),w=e.i(437515),I=["axis"],K=(0,k.forwardRef)((e,a)=>k.createElement(w.CartesianChart,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:I,tooltipPayloadSearcher:E.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),M=e.i(86443),S=e.i(723451),R=e.i(694713),B=e.i(756902),W=e.i(976835),V=e.i(107315);let z={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}],accessibilityLayer:!0},F=(0,v.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,A.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,A.getThemeColor)(t,e):void 0}})),G=(0,b.factory)(e=>{let a=(0,P.useProps)("LineChart",z,e),{classNames:t,className:r,style:o,styles:n,unstyled:i,vars:l,data:s,withLegend:d,legendProps:c,series:m,onMouseLeave:v,dataKey:b,withTooltip:E,withXAxis:w,withYAxis:I,gridAxis:G,tickLine:$,xAxisProps:U,yAxisProps:Y,unit:_,tooltipAnimationDuration:J,strokeDasharray:Z,gridProps:H,tooltipProps:X,referenceLines:q,withDots:Q,dotProps:ee,activeDotProps:ea,strokeWidth:et,lineChartProps:er,connectNulls:eo,fillOpacity:en,curveType:ei,orientation:el,dir:es,valueFormatter:ed,children:ec,lineProps:em,xAxisLabel:ep,yAxisLabel:eu,type:ef,gradientStops:eg,withRightYAxis:eh,rightYAxisLabel:ey,rightYAxisProps:ex,withPointLabels:ev,attributes:eb,gridColor:eA,accessibilityLayer:eO,withBrush:eP,brushProps:eD,...eL}=a,eC=(0,O.useMantineTheme)(),[eT,eN]=(0,k.useState)(null),ej=null!==eT,{resolvedClassNames:ek,resolvedStyles:eE}=(0,D.useResolvedStylesApi)({classNames:t,styles:n,props:a}),ew=(0,L.useStyles)({name:"LineChart",classes:y.default,props:a,className:r,style:o,classNames:t,styles:n,unstyled:i,attributes:eb,vars:l,varsResolver:F}),eI=`line-chart-gradient-${(0,V.useId)()}`,eK=eg?.map(e=>(0,p.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,A.getThemeColor)(e.color,eC)},e.color)),eM=m.map(e=>{let a=(0,A.getThemeColor)(e.color,eC),t=ej&&eT!==e.name;return(0,k.createElement)(j.Line,{...ew("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!Q&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===ef?"var(--mantine-color-gray-7)":a,stroke:"gradient"===ef?"white":a,...ee},activeDot:!!Q&&{fill:"gradient"===ef?"var(--mantine-color-gray-7)":a,stroke:"gradient"===ef?"white":a,...ea},fill:a,stroke:"gradient"===ef?`url(#${eI})`:a,strokeWidth:et,isAnimationActive:!1,fillOpacity:t?0:en,strokeOpacity:t?.5:en,connectNulls:eo,type:e.curveType??ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ev?(0,p.jsx)(h.PointLabel,{valueFormatter:ed}):void 0,..."function"==typeof em?em(e):em})}),eS=q?.map((e,a)=>{let t=(0,A.getThemeColor)(e.color,eC);return(0,p.jsx)(M.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...ew("referenceLine")},a)}),eR={axisLine:!1,..."vertical"===el?{dataKey:b,type:"category"}:{type:"number"},tickLine:"none"!==G&&("y"===$||"xy"===$)&&{stroke:"currentColor"},allowDecimals:!0,unit:_,tickFormatter:"vertical"===el?void 0:ed,...ew("axis")};return(0,p.jsx)(x.Box,{...ew("root"),onMouseLeave:e=>{eN(null),v?.(e)},dir:es||"ltr",...eL,children:(0,p.jsx)(S.ResponsiveContainer,{...ew("container"),children:(0,p.jsxs)(K,{data:s,layout:el,margin:{bottom:ep?30:void 0,left:eu?10:void 0,right:eu?5:void 0},accessibilityLayer:eO,...er,children:["gradient"===ef&&(0,p.jsx)("defs",{children:(0,p.jsx)("linearGradient",{id:eI,x1:"0",y1:"0",x2:"0",y2:"1",children:eK})}),d&&(0,p.jsx)(N.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(f.ChartLegend,{payload:e.payload,onHighlight:eN,legendPosition:c?.verticalAlign||"top",classNames:ek,styles:eE,series:m,showColor:"gradient"!==ef,attributes:eb}),...c}),(0,p.jsxs)(B.XAxis,{hide:!w,..."vertical"===el?{type:"number"}:{dataKey:b},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==G&&("x"===$||"xy"===$)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===el?ed:void 0,...ew("axis"),...U,children:[ep&&(0,p.jsx)(T.Label,{position:"insideBottom",offset:-20,fontSize:12,...ew("axisLabel"),children:ep}),U?.children]}),(0,p.jsxs)(W.YAxis,{tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!I,...eR,...Y,children:[eu&&(0,p.jsx)(T.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ew("axisLabel"),children:eu}),Y?.children]}),(0,p.jsxs)(W.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eR,...ex,children:[ey&&(0,p.jsx)(T.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ew("axisLabel"),children:ey}),Y?.children]}),(0,p.jsx)(C.CartesianGrid,{strokeDasharray:Z,vertical:"y"===G||"xy"===G,horizontal:"x"===G||"xy"===G,...ew("grid"),...H}),E&&(0,p.jsx)(R.Tooltip,{animationDuration:J,isAnimationActive:0!==J,position:"vertical"===el?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Z},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:_,classNames:ek,styles:eE,series:m,valueFormatter:ed,showColor:"gradient"!==ef,attributes:eb}),...X}),eM,eS,eP&&(0,p.jsx)(g.ChartBrush,{dataKey:b,classNames:ek,styles:eE,...eD}),ec]})})})});G.displayName="@mantine/charts/LineChart",G.classes=y.default,G.varsResolver=F;let $={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},U={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Y={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},_={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]},J={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:o,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},Z={type:"code",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var H=e.i(470743),X=e.i(883364);function q({label:e,payload:a}){return a?(0,p.jsxs)(H.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(X.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,p.jsxs)(X.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let Q={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(q,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},el={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},es={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},ed={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(X.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,p.jsx)(X.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:s,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:d,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:c,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},eb={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eA=e.i(980667);let eO={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,p.jsx)(eA.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:1200,y2:3200,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend sales target",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eP=[{date:"Mar 1",Apples:2200,Oranges:1400},{date:"Mar 2",Apples:2500,Oranges:1500},{date:"Mar 3",Apples:2800,Oranges:1700},{date:"Mar 4",Apples:3100,Oranges:1600},{date:"Mar 5",Apples:3e3,Oranges:1800},{date:"Mar 6",Apples:2700,Oranges:2e3},{date:"Mar 7",Apples:2400,Oranges:2100},{date:"Mar 8",Apples:2100,Oranges:1900},{date:"Mar 9",Apples:1900,Oranges:1700},{date:"Mar 10",Apples:2200,Oranges:1500},{date:"Mar 11",Apples:2600,Oranges:1600},{date:"Mar 12",Apples:3e3,Oranges:1800},{date:"Mar 13",Apples:3300,Oranges:2e3},{date:"Mar 14",Apples:3100,Oranges:2200},{date:"Mar 15",Apples:2800,Oranges:2100},{date:"Mar 16",Apples:2500,Oranges:1900}],eD={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:eP,dataKey:"date",withBrush:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:`
import { LineChart } from '@mantine/charts';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500 },
  /* ...other data points */
];

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withBrush
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}
`};var eL=(0,a.__exportAll)({axisLabels:()=>ey,axisProps:()=>U,brush:()=>eD,color:()=>Y,colorSchemeColor:()=>_,connectNulls:()=>J,curveType:()=>Z,customTooltip:()=>Q,dotProps:()=>ee,gradient:()=>ex,gridColor:()=>ea,legend:()=>et,legendPosition:()=>er,lineDasharray:()=>eo,noTooltip:()=>en,pointLabels:()=>eb,referenceArea:()=>eO,referenceLines:()=>ei,rightYAxis:()=>ev,seriesLabels:()=>eg,strokeDasharray:()=>el,strokeWidth:()=>es,sync:()=>ed,tooltipAnimation:()=>ec,unit:()=>em,usage:()=>$,valueFormatter:()=>eh,vertical:()=>ep,xAxisOffset:()=>eu,yScale:()=>ef});e.s(["LineChartDemos",0,eL],235636)}]);
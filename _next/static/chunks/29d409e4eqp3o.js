(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},789859,328233,482593,e=>{"use strict";var t=e.i(191788),a=e.i(56206),r=e.i(778979),o=e.i(883388),n=e.i(270627);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var s=e=>{var s=e.cx,l=e.cy,d=e.r,c=e.className,p=(0,a.clsx)("recharts-dot",c);return(0,n.isNumber)(s)&&(0,n.isNumber)(l)&&(0,n.isNumber)(d)?t.createElement("circle",i({},(0,o.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:p,cx:s,cy:l,r:d})):null};e.s(["Dot",0,s],328233);var l=e.i(815954),d=e.i(106043),c=e.i(62037),p=e.i(561622),m=e.i(446354),h=["points"];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function x(){return(x=Object.assign.bind()).apply(null,arguments)}function f(e){var r=e.option,o=e.dotProps,n=e.className;if((0,t.isValidElement)(r))return(0,t.cloneElement)(r,o);if("function"==typeof r)return r(o);var i=(0,a.clsx)(n,"boolean"!=typeof r?r.className:""),l=null!=o?o:{},d=(l.points,function(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(l,h));return t.createElement(s,x({},d,{className:i}))}e.s(["Dots",0,function(e){var a=e.points,r=e.dot,o=e.className,n=e.dotClassName,i=e.dataKey,s=e.baseProps,h=e.needClip,u=e.clipPathId,g=e.zIndex,v=void 0===g?m.DefaultZIndexes.scatter:g;if(null==a||!r&&1!==a.length)return null;var b=(0,d.isClipDot)(r),A=(0,c.svgPropertiesAndEventsFromUnknown)(r),C=a.map((e,o)=>{var l,d,c=y(y(y({r:3},s),A),{},{index:o,cx:null!=(l=e.x)?l:void 0,cy:null!=(d=e.y)?d:void 0,dataKey:i,value:e.value,payload:e.payload,points:a});return t.createElement(f,{key:"dot-".concat(o),option:r,dotProps:c,className:n})}),j={};return h&&null!=u&&(j.clipPath="url(#clipPath-".concat(b?"":"dots-").concat(u,")")),t.createElement(p.ZIndexLayer,{zIndex:v},t.createElement(l.Layer,x({className:o},j),C))}],789859);var g=e.i(543372),v=e.i(281695),b=e.i(630173);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=e=>{var a,n=e.point,i=e.childIndex,d=e.mainColor,c=e.activeDot,p=e.dataKey,m=e.clipPath;if(!1===c||null==n.x||null==n.y)return null;var h=C(C(C({},{index:i,dataKey:p,cx:n.x,cy:n.y,r:4,fill:null!=d?d:"none",strokeWidth:2,stroke:"#fff",payload:n.payload,value:n.value}),(0,o.svgPropertiesNoEventsFromUnknown)(c)),(0,r.adaptEventHandlers)(c));return a=(0,t.isValidElement)(c)?(0,t.cloneElement)(c,h):"function"==typeof c?c(h):t.createElement(s,h),t.createElement(l.Layer,{className:"recharts-active-dot",clipPath:m},a)};e.s(["ActivePoints",0,function(e){var a=e.points,r=e.mainColor,o=e.activeDot,i=e.itemDataKey,s=e.clipPath,l=e.zIndex,d=void 0===l?m.DefaultZIndexes.activeDot:l,c=(0,g.useAppSelector)(v.selectActiveTooltipIndex),h=(0,b.useActiveTooltipDataPoints)();if(null==a||null==h)return null;var u=a.find(e=>h.includes(e.payload));return(0,n.isNullish)(u)?null:t.createElement(p.ZIndexLayer,{zIndex:d},t.createElement(j,{point:u,childIndex:Number(c),mainColor:r,dataKey:i,activeDot:o,clipPath:s}))}],482593)},554687,e=>{"use strict";var t=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var a=(0,t.svgPropertiesNoEventsFromUnknown)(e);if(null!=a){var r=a.r,o=a.strokeWidth,n=Number(r),i=Number(o);return(Number.isNaN(n)||n<0)&&(n=3),(Number.isNaN(i)||i<0)&&(i=2),{r:n,strokeWidth:i}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var t=e.i(391398);e.s(["PointLabel",0,function({x:e,y:a,value:r,valueFormatter:o}){return(0,t.jsx)("g",{transform:`translate(${e},${a})`,children:(0,t.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(r):r})})}])},321020,e=>{"use strict";e.s(["Area",()=>ev,"computeArea",()=>eg],321020);var t=e.i(191788),a=e.i(56206),r=e.i(815954),o=e.i(301426),n=e.i(789859),i=e.i(270627),s=e.i(516257),l=e.i(106043),d=e.i(482593),c=e.i(128002),p=e.i(777814),m=e.i(314169),h=e.i(83727),u=e.i(901841),y=e.i(399479),x=e.i(365441),f=e.i(755335),g=e.i(780950),v=(e,t,a)=>(0,h.selectAxisWithScale)(e,"xAxis",(0,g.selectXAxisIdFromGraphicalItemId)(e,t),a),b=(e,t,a)=>(0,h.selectTicksOfGraphicalItem)(e,"xAxis",(0,g.selectXAxisIdFromGraphicalItemId)(e,t),a),A=(e,t,a)=>(0,h.selectAxisWithScale)(e,"yAxis",(0,g.selectYAxisIdFromGraphicalItemId)(e,t),a),C=(e,t,a)=>(0,h.selectTicksOfGraphicalItem)(e,"yAxis",(0,g.selectYAxisIdFromGraphicalItemId)(e,t),a),j=(0,m.createSelector)([u.selectChartLayout,v,A,b,C],(e,t,a,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(t,r,!1):(0,s.getBandSizeOfAxis)(a,o,!1)),P=(0,m.createSelector)([h.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),D=e=>{var t=(0,u.selectChartLayout)(e);return(0,s.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},O=(0,m.createSelector)([P,(e,t,a)=>(0,h.selectStackGroups)(e,D(e),"yAxis"===D(e)?(0,g.selectYAxisIdFromGraphicalItemId)(e,t):(0,g.selectXAxisIdFromGraphicalItemId)(e,t),a)],(e,t)=>{if(null!=e&&null!=t){var a,r=e.stackId,o=(0,x.getStackSeriesIdentifier)(e);if(null!=r&&null!=o){var n=null==(a=t[r])?void 0:a.stackedData,i=null==n?void 0:n.find(e=>e.key===o);if(null!=i)return i.map(e=>[e[0],e[1]])}}}),w=(0,m.createSelector)([u.selectChartLayout,v,A,b,C,O,y.selectChartDataWithIndexesIfNotInPanoramaPosition3,j,P,f.selectChartBaseValue],(e,t,a,r,o,n,i,s,l,d)=>{var c,p=i.chartData,m=i.dataStartIndex,h=i.dataEndIndex;if(null!=l&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=a&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=s){var u=l.data;if(null!=(c=u&&u.length>0?u:null==p?void 0:p.slice(m,h+1)))return eg({layout:e,xAxis:t,yAxis:a,xAxisTicks:r,yAxisTicks:o,dataStartIndex:m,areaSettings:l,stackedData:n,displayedData:c,chartBaseValue:d,bandSize:s})}}),T=e.i(662688),k=e.i(524970),I=e.i(836094),N=e.i(543372),E=e.i(945031),L=e.i(634200),S=e.i(325551),B=e.i(297974),W=e.i(630173),K=e.i(768069),M=e.i(436323),R=e.i(883388),z=e.i(554687),F=e.i(62037),V=e.i(134959),Y=e.i(561622),U=e.i(446354),G=e.i(547810),_=e.i(366998),X=e.i(500678),Z=e.i(382863),$=["animationElapsedTime","isAnimating","isEntrance","layout","isRange","stroke","connectNulls"],q=["id","baseLine"];function H(){return(H=Object.assign.bind()).apply(null,arguments)}function J(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function Q(e){var a,r,o=e.alpha,n=e.baseLine,s=e.points,l=e.strokeWidth,d=null==(a=s[0])?void 0:a.x,c=null==(r=s[s.length-1])?void 0:r.x;if(!(0,X.isWellBehavedNumber)(d)||!(0,X.isWellBehavedNumber)(c))return null;var p=o*Math.abs(d-c),m=Math.max(...s.map(e=>e.y||0));return((0,i.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.y||0),m)),(0,i.isNumber)(m))?t.createElement("rect",{x:d<c?d:d-p,y:0,width:p,height:Math.floor(m+(l?parseInt("".concat(l),10):1))}):null}function ee(e){var a,r,o=e.alpha,n=e.baseLine,s=e.points,l=e.strokeWidth,d=null==(a=s[0])?void 0:a.y,c=null==(r=s[s.length-1])?void 0:r.y;if(!(0,X.isWellBehavedNumber)(d)||!(0,X.isWellBehavedNumber)(c))return null;var p=o*Math.abs(d-c),m=Math.max(...s.map(e=>e.x||0));return((0,i.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.x||0),m)),(0,i.isNumber)(m))?t.createElement("rect",{x:0,y:d<c?d:d-p,width:m+(l?parseInt("".concat(l),10):1),height:Math.floor(p)}):null}function et(e){var a=e.alpha,r=e.layout,o=e.points,n=e.baseLine,i=e.strokeWidth;return"vertical"===r?t.createElement(ee,{alpha:a,points:o,baseLine:n,strokeWidth:i}):t.createElement(Q,{alpha:a,points:o,baseLine:n,strokeWidth:i})}var ea=["id"],er=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function eo(){return(eo=Object.assign.bind()).apply(null,arguments)}function en(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function ei(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function es(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ei(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var el={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:L.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"matched"===e.status?[es(es({},e.next),{},{x:(0,i.interpolate)(e.prev.x,e.next.x,t),y:(0,i.interpolate)(e.prev.y,e.next.y,t)})]:"added"===e.status?[e.next]:[]),connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,shape:function(e){var a,o=e.animationElapsedTime,n=void 0===o?1:o,i=e.isAnimating,s=e.isEntrance,l=e.layout,d=e.isRange,c=e.stroke,p=e.connectNulls,m=J(e,$),h="vertical"===l?"vertical":"horizontal",u=null!=p&&p,y=(0,Z.useId)(),x=m.id,f=m.baseLine,g=J(m,q),v=(0,R.svgPropertiesNoEvents)(g),b=t.createElement(_.Curve,H({},m,{id:x,baseLine:f,connectNulls:u,stroke:"none",className:"recharts-area-area",layout:h})),A="none"!==c&&t.createElement(_.Curve,H({},v,{className:"recharts-area-curve",layout:h,type:m.type,connectNulls:u,fill:"none",stroke:c,points:m.points})),C="none"!==c&&d&&Array.isArray(f)&&t.createElement(_.Curve,H({},v,{className:"recharts-area-curve",layout:h,type:m.type,connectNulls:u,fill:"none",stroke:c,points:f}));return void 0!==s&&s&&(void 0!==i&&i||n<1)?t.createElement(r.Layer,null,t.createElement("defs",null,t.createElement("clipPath",{id:y},t.createElement(et,{alpha:n,points:null!=(a=m.points)?a:[],baseLine:f,layout:h,strokeWidth:m.strokeWidth}))),t.createElement(r.Layer,{clipPath:"url(#".concat(y,")")},b,A,C)):t.createElement(t.Fragment,null,b,A,C)},xAxisId:0,yAxisId:0,zIndex:U.DefaultZIndexes.area};function ed(e,t){return e&&"none"!==e?e:t}var ec=t.memo(e=>{var a=e.dataKey,r=e.data,o=e.stroke,n=e.strokeWidth,l=e.fill,d=e.name,p=e.hide,m=e.unit,h=e.formatter,u=e.tooltipType,y=e.id,x={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:o,strokeWidth:n,fill:l,dataKey:a,nameKey:void 0,name:(0,s.getTooltipNameProp)(d,a),hide:p,type:u,color:ed(o,l),unit:m,formatter:h,graphicalItemId:y}};return t.createElement(c.SetTooltipEntrySettings,{tooltipEntrySettings:x})});function ep(e){var a=e.clipPathId,r=e.points,o=e.props,i=o.needClip,s=o.dot,l=o.dataKey,d=(0,R.svgPropertiesNoEvents)(o);return t.createElement(n.Dots,{points:r,dot:s,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:l,baseProps:d,needClip:i,clipPathId:a})}function em(e){var a=e.showLabels,r=e.children,n=e.points.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:0,lowerWidth:0,upperWidth:0,height:0};return es(es({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return t.createElement(o.CartesianLabelListContextProvider,{value:a?n:void 0},r)}function eh(e){var a=e.points,o=e.baseLine,n=e.needClip,i=e.clipPathId,s=e.props,l=e.animationElapsedTime,d=e.isAnimating,c=e.isEntrance,p=s.layout,m=s.type,h=s.stroke,u=s.connectNulls,y=s.isRange,x=s.shape,f=s.id,g=en(s,ea),v=es(es({},(0,F.svgPropertiesAndEvents)(g)),{},{id:f,points:a,connectNulls:u,type:m,baseLine:o,layout:p,stroke:h,isRange:y,animationElapsedTime:l,isAnimating:d,isEntrance:c});return t.createElement(t.Fragment,null,(null==a?void 0:a.length)>1&&t.createElement(r.Layer,{clipPath:n?"url(#clipPath-".concat(i,")"):void 0},t.createElement(V.Shape,{option:x,DefaultShape:el.shape,shapeProps:v})),t.createElement(ep,{points:a,props:g,clipPathId:i}))}function eu(e){var a,r=e.needClip,n=e.clipPathId,s=e.props,l=e.previousPointsRef,d=e.previousBaselineRef,c=s.points,p=s.baseLine,m=s.isAnimationActive,h=s.animationBegin,y=s.animationDuration,x=s.animationEasing,f=s.animationMatchBy,g=s.animationInterpolateFn,v=(0,t.useMemo)(()=>({points:c,baseLine:p}),[c,p]),b=(0,S.useAnimationStartSnapshot)(v,d),A=(0,u.useCartesianChartLayout)(),C=(0,E.useAnimationCallbacks)(s.onAnimationStart,s.onAnimationEnd),j=C.isAnimating,P=C.handleAnimationStart,D=C.handleAnimationEnd,O=b.startValue;return null==A?null:(a=Array.isArray(p)&&Array.isArray(O)?(0,L.matchAnimationItems)(O,p,f):Array.isArray(p)?(0,L.matchAnimationItems)(null,p,f):null,t.createElement(E.AnimatedItems,{animationInput:v,animationIdPrefix:"recharts-area-",items:c,previousItemsRef:l,isAnimationActive:m,animationBegin:h,animationDuration:y,animationEasing:x,onAnimationStart:P,onAnimationEnd:D,animationInterpolateFn:g,animationMatchBy:f,layout:A},(e,l,d)=>{var m;return m=1===l?p:Array.isArray(p)?g(a,l,A):d?p:function(e,t,a){if((0,i.isNumber)(e)){var r=(0,i.isNumber)(t)?t:void 0;return(0,i.interpolate)(r,e,a)}if((0,i.isNullish)(e)||(0,i.isNan)(e)){var o=(0,i.isNumber)(t)?t:void 0;return(0,i.interpolate)(o,0,a)}return e}(p,O,l),b.syncStepValue(m,l),t.createElement(em,{showLabels:!j,points:c},s.children,t.createElement(eh,{points:e,baseLine:m,needClip:r,clipPathId:n,props:s,animationElapsedTime:l,isAnimating:j||l<1,isEntrance:d}),t.createElement(o.LabelListFromLabelProp,{label:s.label}))}))}function ey(e){var a=e.needClip,r=e.clipPathId,o=e.props,n=(0,t.useRef)(null),i=(0,t.useRef)();return t.createElement(eu,{needClip:a,clipPathId:r,props:o,previousPointsRef:n,previousBaselineRef:i})}class ex extends t.PureComponent{render(){var e=this.props,o=e.hide,n=e.dot,i=e.points,s=e.className,c=e.top,m=e.left,h=e.needClip,u=e.xAxisId,y=e.yAxisId,x=e.width,f=e.height,g=e.id,v=e.baseLine,b=e.zIndex;if(o)return null;var A=(0,a.clsx)("recharts-area",s),C=(0,z.getRadiusAndStrokeWidthFromDot)(n),j=C.r,P=C.strokeWidth,D=(0,l.isClipDot)(n),O=2*j+P,w=h?"url(#clipPath-".concat(D?"":"dots-").concat(g,")"):void 0;return t.createElement(Y.ZIndexLayer,{zIndex:b},t.createElement(r.Layer,{className:A},h&&t.createElement("defs",null,t.createElement(p.GraphicalItemClipPath,{clipPathId:g,xAxisId:u,yAxisId:y}),!D&&t.createElement("clipPath",{id:"clipPath-dots-".concat(g)},t.createElement("rect",{x:m-O/2,y:c-O/2,width:x+O,height:f+O}))),t.createElement(ey,{needClip:h,clipPathId:g,props:this.props})),t.createElement(d.ActivePoints,{points:i,mainColor:ed(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:w}),this.props.isRange&&Array.isArray(v)&&t.createElement(d.ActivePoints,{points:v,mainColor:ed(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:w}))}}function ef(e){var a,r=e.activeDot,o=e.animationBegin,n=e.animationDuration,i=e.animationEasing,s=e.connectNulls,l=e.dot,d=e.fill,c=e.fillOpacity,m=e.hide,h=e.isAnimationActive,y=e.legendType,x=e.stroke,f=e.xAxisId,g=e.yAxisId,v=en(e,er),b=(0,u.useChartLayout)(),A=(0,k.useChartName)(),C=(0,p.useNeedsClip)(f,g).needClip,j=(0,T.useIsPanorama)(),P=null!=(a=(0,N.useAppSelector)(t=>w(t,e.id,j)))?a:{},D=P.points,O=P.isRange,I=P.baseLine,E=(0,W.usePlotArea)();if("horizontal"!==b&&"vertical"!==b||null==E||"AreaChart"!==A&&"ComposedChart"!==A)return null;var L=E.height,S=E.width,B=E.x,K=E.y;return D&&D.length?t.createElement(ex,eo({},v,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:i,baseLine:I,connectNulls:s,dot:l,fill:d,fillOpacity:c,height:L,hide:m,layout:b,isAnimationActive:h,isRange:O,legendType:y,needClip:C,points:D,stroke:x,width:S,left:B,top:K,xAxisId:f,yAxisId:g})):null}function eg(e){var t,a=e.areaSettings,r=a.connectNulls,o=a.baseValue,n=a.dataKey,l=e.stackedData,d=e.layout,c=e.chartBaseValue,p=e.xAxis,m=e.yAxis,h=e.displayedData,u=e.dataStartIndex,y=e.xAxisTicks,x=e.yAxisTicks,f=e.bandSize,g=l&&l.length,v=((e,t,a,r,o)=>{var n=null!=a?a:t;if((0,i.isNumber)(n))return n;var s="horizontal"===e?o:r,l=s.scale.domain();if("number"===s.type){var d=Math.max(l[0],l[1]),c=Math.min(l[0],l[1]);return"dataMin"===n?c:"dataMax"===n||d<0?d:Math.max(Math.min(l[0],l[1]),0)}return"dataMin"===n?l[0]:"dataMax"===n?l[1]:l[0]})(d,c,o,p,m),b="horizontal"===d,A=!1,C=h.map((e,t)=>{if(g)d=l[u+t];else{var a,o,i,d,c,h=(0,s.getValueByDataKey)(e,n);Array.isArray(h)?(d=h,A=!0):d=[v,h]}var C=null!=(a=null==(o=d)?void 0:o[1])?a:null,j=null==C||g&&!r&&null==(0,s.getValueByDataKey)(e,n);return b?{x:(0,s.getCateCoordinateOfLine)({axis:p,ticks:y,bandSize:f,entry:e,index:t}),y:j?null:null!=(c=m.scale.map(C))?c:null,value:d,payload:e}:{x:j?null:null!=(i=p.scale.map(C))?i:null,y:(0,s.getCateCoordinateOfLine)({axis:m,ticks:x,bandSize:f,entry:e,index:t}),value:d,payload:e}});return t=g||A?C.map(e=>{var t,a,r=Array.isArray(e.value)?e.value[0]:null;return b?{x:e.x,y:null!=r&&null!=e.y&&null!=(a=m.scale.map(r))?a:null,payload:e.payload}:{x:null!=r&&null!=(t=p.scale.map(r))?t:null,y:e.y,payload:e.payload}}):b?m.scale.map(v):p.scale.map(v),{points:C,baseLine:null!=t?t:0,isRange:A}}var ev=t.memo(function(e){var a=(0,B.resolveDefaultProps)(e,el),r=(0,T.useIsPanorama)();return t.createElement(K.RegisterGraphicalItemId,{id:a.id,type:"area"},e=>{var o,n,i,l,d;return t.createElement(t.Fragment,null,t.createElement(I.SetLegendPayload,{legendPayload:(o=a.dataKey,n=a.name,i=a.stroke,l=a.fill,d=a.legendType,[{inactive:a.hide,dataKey:o,type:d,color:ed(i,l),value:(0,s.getTooltipNameProp)(n,o),payload:a}])}),t.createElement(ec,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,formatter:a.formatter,tooltipType:a.tooltipType,id:e}),t.createElement(M.SetCartesianGraphicalItem,{type:"area",id:e,data:a.data,dataKey:a.dataKey,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,stackId:(0,s.getNormalizedStackId)(a.stackId),hide:a.hide,barSize:void 0,baseValue:a.baseValue,isPanorama:r,connectNulls:a.connectNulls}),t.createElement(ef,eo({},a,{id:e})))})},G.propsAreEqual);ev.displayName="Area"},385429,e=>{"use strict";e.s(["Line",()=>ec,"computeLinePoints",()=>ed],385429);var t=e.i(191788),a=e.i(56206),r=e.i(815954),o=e.i(366998),n=["animationElapsedTime","isAnimating","isEntrance","visibleLength","strokeDasharray","connectNulls"];function i(){return(i=Object.assign.bind()).apply(null,arguments)}function s(e,t){return"".concat(t,"px ").concat(e,"px")}var l=e.i(438596),d=e.i(301426),c=e.i(789859),p=e.i(270627),m=e.i(106043),h=e.i(516257),u=e.i(482593),y=e.i(128002),x=e.i(170038),f=e.i(777814),g=e.i(901841),v=e.i(662688),b=e.i(314169),A=e.i(399479),C=e.i(83727),j=(e,t,a,r)=>(0,C.selectAxisWithScale)(e,"xAxis",t,r),P=(e,t,a,r)=>(0,C.selectTicksOfGraphicalItem)(e,"xAxis",t,r),D=(e,t,a,r)=>(0,C.selectAxisWithScale)(e,"yAxis",a,r),O=(e,t,a,r)=>(0,C.selectTicksOfGraphicalItem)(e,"yAxis",a,r),w=(0,b.createSelector)([g.selectChartLayout,j,D,P,O],(e,t,a,r,o)=>(0,h.isCategoricalAxis)(e,"xAxis")?(0,h.getBandSizeOfAxis)(t,r,!1):(0,h.getBandSizeOfAxis)(a,o,!1));function T(e){return"line"===e.type}var k=(0,b.createSelector)([C.selectUnfilteredCartesianItems,(e,t,a,r,o)=>o],(e,t)=>e.filter(T).find(e=>e.id===t)),I=(0,b.createSelector)([g.selectChartLayout,j,D,P,O,k,w,A.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,t,a,r,o,n,i,s)=>{var l,d=s.chartData,c=s.dataStartIndex,p=s.dataEndIndex;if(null!=n&&null!=t&&null!=a&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i&&("horizontal"===e||"vertical"===e)){var m=n.dataKey,h=n.data;if(null!=(l=null!=h&&h.length>0?h:null==d?void 0:d.slice(c,p+1)))return ed({layout:e,xAxis:t,yAxis:a,xAxisTicks:r,yAxisTicks:o,dataKey:m,bandSize:i,displayedData:l})}}),N=e.i(543372),E=e.i(836094),L=e.i(945031),S=e.i(634200),B=e.i(297974),W=e.i(630173),K=e.i(768069),M=e.i(436323),R=e.i(883388),z=e.i(62037),F=e.i(554687),V=e.i(134959),Y=e.i(561622),U=e.i(446354),G=e.i(547810),_=["id"],X=["type","layout","connectNulls","needClip","shape","strokeDasharray"],Z=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function $(){return($=Object.assign.bind()).apply(null,arguments)}function q(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Q={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationInterpolateFn:(e,t)=>{if(null==e)return[];if(1===t)return e.flatMap(e=>"removed"===e.status?[]:[e.next]);var a=function(e){var t=0,a=0;for(var r of e)"matched"===r.status&&null!=r.prev.x&&null!=r.next.x&&(t+=r.next.x-r.prev.x,a++);return a>0?t/a:0}(e),r=[];for(var o of e)if("matched"===o.status)r.push(J(J({},o.next),{},{x:(0,p.interpolate)(o.prev.x,o.next.x,t),y:(0,p.interpolate)(o.prev.y,o.next.y,t)}));else if("added"===o.status)if(null!=o.next.x){var n=o.next.x-a;r.push(J(J({},o.next),{},{x:(0,p.interpolate)(n,o.next.x,t),y:o.next.y}))}else r.push(o.next);else if("removed"===o.status&&null!=o.prev.x){var i=o.prev.x+a;r.push(J(J({},o.prev),{},{x:(0,p.interpolate)(o.prev.x,i,t),y:o.prev.y}))}return r},animationMatchBy:S.matchByIndex,connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",shape:function(e){e.animationElapsedTime,e.isAnimating,e.isEntrance;var a=e.visibleLength,r=e.strokeDasharray,l=e.connectNulls,d=function(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(e,n);if(null!=a){var c,p,m=d.pathRef,h=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(null!=(p=null==m?void 0:m.current)?p:null);c=r?function(e,t,a){var r=a.length%2!=0?[...a,...a]:a,o=r.reduce((e,t)=>e+t,0);if(!o)return s(t,e);for(var n=Math.floor(e/o),i=e%o,l=[],d=0,c=0;d<r.length;c+=null!=(p=r[d])?p:0,++d){var p,m=r[d];if(null!=m&&c+m>i){l=[...r.slice(0,d),i-c];break}}var h=l.length%2==0?[0,t]:[t];return[...function(e,t){for(var a=[],r=0;r<t;++r)a.push(...e);return a}(r,n),...l,...h].map(e=>"".concat(e,"px")).join(", ")}(a,h,"".concat(r).split(/[,\s]+/gim).map(e=>parseFloat(e))):s(h,a)}else null!=r&&(c=String(r));return t.createElement(o.Curve,i({},d,{connectNulls:null!=l&&l,strokeDasharray:c}))},stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:U.DefaultZIndexes.line,type:"linear"},ee=t.memo(e=>{var a=e.dataKey,r=e.data,o=e.stroke,n=e.strokeWidth,i=e.fill,s=e.name,l=e.hide,d=e.unit,c=e.formatter,m=e.tooltipType,u=e.id,x={dataDefinedOnItem:r,getPosition:p.noop,settings:{stroke:o,strokeWidth:n,fill:i,dataKey:a,nameKey:void 0,name:(0,h.getTooltipNameProp)(s,a),hide:l,type:m,color:o,unit:d,formatter:c,graphicalItemId:u}};return t.createElement(y.SetTooltipEntrySettings,{tooltipEntrySettings:x})});function et(e){var a=e.clipPathId,r=e.points,o=e.props,n=o.dot,i=o.dataKey,s=o.needClip;o.id;var l=q(o,_),d=(0,R.svgPropertiesNoEvents)(l);return t.createElement(c.Dots,{points:r,dot:n,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:i,baseProps:d,needClip:s,clipPathId:a})}function ea(e){var a=e.showLabels,r=e.children,o=e.points,n=(0,t.useMemo)(()=>null==o?void 0:o.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:0,lowerWidth:0,upperWidth:0,height:0};return J(J({},r),{},{value:e.value,payload:e.payload,viewBox:r,parentViewBox:void 0,fill:void 0})}),[o]);return t.createElement(d.CartesianLabelListContextProvider,{value:a?n:void 0},r)}function er(e){var a=e.clipPathId,r=e.pathRef,o=e.points,n=e.props,i=e.animationElapsedTime,s=e.isAnimating,l=e.isEntrance,d=e.visibleLength,c=n.type,p=n.layout,m=n.connectNulls,h=n.needClip,u=n.shape,y=n.strokeDasharray,x=q(n,X),f=J(J({},(0,z.svgPropertiesAndEvents)(x)),{},{fill:"none",className:"recharts-line-curve",clipPath:h?"url(#clipPath-".concat(a,")"):void 0,points:o,type:c,layout:p,connectNulls:m,strokeDasharray:null!=y?y:n.strokeDasharray,pathRef:r,animationElapsedTime:i,isAnimating:s,isEntrance:!!n.animateNewValues&&l,visibleLength:d});return t.createElement(t.Fragment,null,(null==o?void 0:o.length)>1&&t.createElement(V.Shape,{option:u,DefaultShape:Q.shape,shapeProps:f}),t.createElement(et,{points:o,clipPathId:a,props:n}))}function eo(e){var a,r,o,n,i=e.clipPathId,s=e.props,c=e.pathRef,p=e.previousPointsRef,m=s.points,h=s.isAnimationActive,u=s.animationBegin,y=s.animationDuration,x=s.animationEasing,f=s.animationMatchBy,g=s.animationInterpolateFn,v=s.layout,b=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(c.current),A=(0,L.useAnimationCallbacks)(s.onAnimationStart,s.onAnimationEnd),C=A.isAnimating,j=A.handleAnimationStart,P=A.handleAnimationEnd,D=(a=(0,t.useRef)(0),r=(0,t.useRef)(0),o=(0,t.useRef)(!1),(n=(0,t.useRef)(m)).current!==m&&(a.current=r.current,n.current=m),(0,t.useCallback)((e,t)=>{if(o.current)return null;var n=Math.min((0,l.round)(a.current+e*t),t);return e>0&&t>0&&(r.current=Math.max(r.current,n),n>=t)?(o.current=!0,null):n},[])),O=(0,t.useCallback)(e=>e>0&&b>0,[b]);return t.createElement(ea,{points:m,showLabels:!C},s.children,t.createElement(L.AnimatedItems,{animationInput:m,animationIdPrefix:"recharts-line-",items:m,previousItemsRef:p,isAnimationActive:h,animationBegin:u,animationDuration:y,animationEasing:x,onAnimationStart:j,onAnimationEnd:P,animationInterpolateFn:g,animationMatchBy:f,shouldUpdatePreviousRef:O,layout:v},(e,a,r)=>{var o=C||a<1,n=o?D(a,b):null;return t.createElement(er,{props:s,points:e,clipPathId:i,pathRef:c,animationElapsedTime:a,isAnimating:o,isEntrance:r,visibleLength:n})}),t.createElement(d.LabelListFromLabelProp,{label:s.label}))}function en(e){var a=e.clipPathId,r=e.props,o=(0,t.useRef)(null),n=(0,t.useRef)(null);return t.createElement(eo,{props:r,clipPathId:a,previousPointsRef:o,pathRef:n})}var ei=(e,t)=>{var a,r;return{x:null!=(a=e.x)?a:void 0,y:null!=(r=e.y)?r:void 0,value:e.value,errorVal:(0,h.getValueByDataKey)(e.payload,t)}};class es extends t.Component{render(){var e=this.props,o=e.hide,n=e.dot,i=e.points,s=e.className,l=e.xAxisId,d=e.yAxisId,c=e.top,p=e.left,h=e.width,y=e.height,g=e.id,v=e.needClip,b=e.zIndex;if(o)return null;var A=(0,a.clsx)("recharts-line",s),C=(0,F.getRadiusAndStrokeWidthFromDot)(n),j=C.r,P=C.strokeWidth,D=(0,m.isClipDot)(n),O=2*j+P,w=v?"url(#clipPath-".concat(D?"":"dots-").concat(g,")"):void 0;return t.createElement(Y.ZIndexLayer,{zIndex:b},t.createElement(r.Layer,{className:A},v&&t.createElement("defs",null,t.createElement(f.GraphicalItemClipPath,{clipPathId:g,xAxisId:l,yAxisId:d}),!D&&t.createElement("clipPath",{id:"clipPath-dots-".concat(g)},t.createElement("rect",{x:p-O/2,y:c-O/2,width:h+O,height:y+O}))),t.createElement(x.SetErrorBarContext,{xAxisId:l,yAxisId:d,data:i,dataPointFormatter:ei,errorBarOffset:0},t.createElement(en,{props:this.props,clipPathId:g}))),t.createElement(u.ActivePoints,{activeDot:this.props.activeDot,points:i,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:w}))}}function el(e){var a=(0,B.resolveDefaultProps)(e,Q),r=a.activeDot,o=a.animateNewValues,n=a.animationBegin,i=a.animationDuration,s=a.animationEasing,l=a.connectNulls,d=a.dot,c=a.hide,p=a.isAnimationActive,m=a.label,h=a.legendType,u=a.xAxisId,y=a.yAxisId,x=a.id,b=q(a,Z),A=(0,f.useNeedsClip)(u,y).needClip,C=(0,W.usePlotArea)(),j=(0,g.useChartLayout)(),P=(0,v.useIsPanorama)(),D=(0,N.useAppSelector)(e=>I(e,u,y,P,x));if("horizontal"!==j&&"vertical"!==j||null==D||null==C)return null;var O=C.height,w=C.width,T=C.x,k=C.y;return t.createElement(es,$({},b,{id:x,connectNulls:l,dot:d,activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:s,isAnimationActive:p,hide:c,label:m,legendType:h,xAxisId:u,yAxisId:y,points:D,layout:j,height:O,width:w,left:T,top:k,needClip:A}))}function ed(e){var t=e.layout,a=e.xAxis,r=e.yAxis,o=e.xAxisTicks,n=e.yAxisTicks,i=e.dataKey,s=e.bandSize;return e.displayedData.map((e,l)=>{var d=(0,h.getValueByDataKey)(e,i);if("horizontal"===t){var c=(0,h.getCateCoordinateOfLine)({axis:a,ticks:o,bandSize:s,entry:e,index:l}),m=(0,p.isNullish)(d)?null:r.scale.map(d);return{x:c,y:null!=m?m:null,value:d,payload:e}}var u=(0,p.isNullish)(d)?null:a.scale.map(d),y=(0,h.getCateCoordinateOfLine)({axis:r,ticks:n,bandSize:s,entry:e,index:l});return null==u||null==y?null:{x:u,y,value:d,payload:e}}).filter(Boolean)}var ec=t.memo(function(e){var a=(0,B.resolveDefaultProps)(e,Q),r=(0,v.useIsPanorama)();return t.createElement(K.RegisterGraphicalItemId,{id:a.id,type:"line"},e=>{var o,n,i,s;return t.createElement(t.Fragment,null,t.createElement(E.SetLegendPayload,{legendPayload:(o=a.dataKey,n=a.name,i=a.stroke,s=a.legendType,[{inactive:a.hide,dataKey:o,type:s,color:i,value:(0,h.getTooltipNameProp)(n,o),payload:a}])}),t.createElement(ee,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,formatter:a.formatter,tooltipType:a.tooltipType,id:e}),t.createElement(M.SetCartesianGraphicalItem,{type:"line",id:e,data:a.data,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,hide:a.hide,isPanorama:r}),t.createElement(el,$({},a,{id:e})))})},G.propsAreEqual);ec.displayName="Line"},475865,e=>{"use strict";var t=e.i(648863);let a=[{date:"Mar 22",Apples:2301,Oranges:723,Tomatoes:2452},{date:"Mar 23",Apples:2181,Oranges:1887,Tomatoes:2402},{date:"Mar 24",Apples:1821,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:2764,Oranges:987,Tomatoes:2809},{date:"Mar 26",Apples:1821,Oranges:403,Tomatoes:2290}],r=`
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
`,o=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],n=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`,i=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],s=`
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
`;var l=e.i(391398),d=e.i(520916),c=e.i(577596),p=e.i(314579),m=e.i(739539),h=e.i(979298),u=e.i(232471),y=e.i(481178),x=e.i(275519),f=e.i(317477),g=e.i(951254),v=e.i(44091),b=e.i(62904),A=e.i(391466),C=e.i(321020),j=e.i(57699),P=e.i(526626),D=e.i(191788),O=e.i(471970),w=e.i(437515),T=["axis"],k=(0,D.forwardRef)((e,t)=>D.createElement(w.CartesianChart,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:T,tooltipPayloadSearcher:O.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),I=e.i(905e3),N=e.i(301426),E=e.i(881264),L=e.i(385429),S=e.i(86443),B=e.i(723451),W=e.i(694713),K=e.i(756902),M=e.i(976835);let R={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",accessibilityLayer:!0},z=(0,y.createVarsResolver)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,f.getThemeColor)(t,e):void 0,"--chart-grid-color":a?(0,f.getThemeColor)(a,e):void 0}})),F=(0,x.factory)(e=>{let t=(0,v.useProps)("CompositeChart",R,e),{classNames:a,className:r,style:o,styles:n,unstyled:i,vars:s,data:y,withLegend:x,legendProps:O,series:w,onMouseLeave:T,dataKey:F,withTooltip:V,withXAxis:Y,withYAxis:U,gridAxis:G,tickLine:_,xAxisProps:X,yAxisProps:Z,unit:$,tooltipAnimationDuration:q,strokeDasharray:H,gridProps:J,tooltipProps:Q,referenceLines:ee,withDots:et,dotProps:ea,activeDotProps:er,strokeWidth:eo,connectNulls:en,curveType:ei,dir:es,valueFormatter:el,children:ed,lineProps:ec,xAxisLabel:ep,yAxisLabel:em,withRightYAxis:eh,rightYAxisLabel:eu,rightYAxisProps:ey,withPointLabels:ex,areaProps:ef,barProps:eg,withBarValueLabel:ev,minBarSize:eb,maxBarWidth:eA,composedChartProps:eC,attributes:ej,accessibilityLayer:eP,withBrush:eD,brushProps:eO,...ew}=t,eT=(0,g.useMantineTheme)(),[ek,eI]=(0,D.useState)(null),eN=null!==ek,{resolvedClassNames:eE,resolvedStyles:eL}=(0,b.useResolvedStylesApi)({classNames:a,styles:n,props:t}),eS=(0,A.useStyles)({name:"CompositeChart",classes:h.default,props:t,className:r,style:o,classNames:a,styles:n,unstyled:i,attributes:ej,vars:s,varsResolver:z}),eB=w.map(e=>{let t=(0,f.getThemeColor)(e.color,eT),a=eN&&ek!==e.name;return"line"===e.type?(0,D.createElement)(L.Line,{...eS("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!et&&{fillOpacity:+!a,strokeOpacity:+!a,strokeWidth:1,fill:t,stroke:t,...ea},activeDot:!!et&&{fill:"var(--mantine-color-white)",stroke:t,...er},fill:t,stroke:t,strokeWidth:eo,isAnimationActive:!1,fillOpacity:+!a,strokeOpacity:a?.5:1,connectNulls:en,type:ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ex?(0,l.jsx)(m.PointLabel,{valueFormatter:el}):void 0,..."function"==typeof ec?ec(e):ec}):"area"===e.type?(0,D.createElement)(C.Area,{...eS("area"),key:e.name,name:e.name,type:ei,dataKey:e.name,fill:t,strokeWidth:eo,stroke:t,isAnimationActive:!1,connectNulls:en,dot:!!et&&{fillOpacity:+!a,strokeOpacity:+!a,strokeWidth:1,fill:t,stroke:t,...ea},activeDot:!!et&&{fill:eT.white,stroke:t,strokeWidth:2,r:4,...er},fillOpacity:.2*!a,strokeOpacity:a?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ex?(0,l.jsx)(m.PointLabel,{valueFormatter:el}):void 0,..."function"==typeof ef?ef(e):ef}):"bar"===e.type?(0,D.createElement)(j.Bar,{...eS("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:a?.1:1,strokeOpacity:.2*!!a,yAxisId:e.yAxisId||void 0,minPointSize:eb,..."function"==typeof eg?eg(e):eg},ev&&(0,l.jsx)(N.LabelList,{position:"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:e=>el?.(e)})):null}),eW=ee?.map((e,t)=>{let a=(0,f.getThemeColor)(e.color,eT);return(0,l.jsx)(S.ReferenceLine,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eS("referenceLine")},t)}),eK={axisLine:!1,type:"number",tickLine:"none"!==G&&("y"===_||"xy"===_)&&{stroke:"currentColor"},allowDecimals:!0,unit:$,tickFormatter:el,...eS("axis")};return(0,l.jsx)(u.Box,{...eS("root"),onMouseLeave:e=>{eI(null),T?.(e)},dir:es||"ltr",...ew,children:(0,l.jsx)(B.ResponsiveContainer,{...eS("container"),children:(0,l.jsxs)(k,{data:y,maxBarSize:eA,margin:{bottom:ep?30:void 0,left:em?10:void 0,right:em?5:void 0},accessibilityLayer:eP,...eC,children:[x&&(0,l.jsx)(E.Legend,{verticalAlign:"top",content:e=>(0,l.jsx)(c.ChartLegend,{payload:e.payload,onHighlight:eI,legendPosition:O?.verticalAlign||"top",classNames:eE,styles:eL,series:w,attributes:ej}),...O}),(0,l.jsxs)(K.XAxis,{hide:!Y,dataKey:F,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==G&&("x"===_||"xy"===_)&&{stroke:"currentColor"},minTickGap:5,...eS("axis"),...X,children:[ep&&(0,l.jsx)(I.Label,{position:"insideBottom",offset:-20,fontSize:12,...eS("axisLabel"),children:ep}),X?.children]}),(0,l.jsxs)(M.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!U,...eK,...Z,children:[em&&(0,l.jsx)(I.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:em}),Z?.children]}),(0,l.jsxs)(M.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eK,...ey,children:[eu&&(0,l.jsx)(I.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:eu}),Z?.children]}),(0,l.jsx)(P.CartesianGrid,{strokeDasharray:H,vertical:"y"===G||"xy"===G,horizontal:"x"===G||"xy"===G,...eS("grid"),...J}),V&&(0,l.jsx)(W.Tooltip,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H},content:({label:e,payload:t,labelFormatter:a})=>(0,l.jsx)(d.ChartTooltip,{label:a&&t?a(e,t):e,payload:t,unit:$,classNames:eE,styles:eL,series:w,valueFormatter:el,attributes:ej}),...Q}),eB,eW,eD&&(0,l.jsx)(p.ChartBrush,{dataKey:F,classNames:eE,styles:eL,...eO}),ed]})})})});F.displayName="@mantine/charts/CompositeChart",F.classes=h.default,F.varsResolver=z;let V={type:"configurator",component:function(e){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},Y={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},G={type:"configurator",component:function(e){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",series:[{name:"Apples",type:"line",color:e.color}],...e})},code:[{code:e=>`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},_={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",className:"m_f98102e0",series:[{name:"Apples",color:"var(--chart-color)",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--chart-color)', type: 'line' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var X=e.i(470743),Z=e.i(883364),$=e.i(744335);function q({label:e,payload:t}){return t?(0,l.jsxs)(X.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,l.jsx)(Z.Text,{fw:500,mb:5,children:e}),t.map(e=>(0,l.jsxs)(Z.Text,{c:(0,$.alpha)(e.color,1),fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let H={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",tooltipProps:{content:({label:e,payload:t})=>(0,l.jsx)(q,{label:e,payload:t})},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { alpha, Paper, Text } from '@mantine/core';
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
        <Text key={item.name} c={alpha(item.color, 1)} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},J={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",className:"m_300a99a6",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line",strokeDasharray:"5 5"},{name:"Oranges",color:"yellow.8",type:"area",strokeDasharray:"5 5"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeWidth={1}
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line', strokeDasharray: '5 5' },
        { name: 'Oranges', color: 'yellow.8', type: 'area', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",withTooltip:!1,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",withPointLabels:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:1200,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out",color:"blue.7"}],maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 1200, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out', color: 'blue.7' },
      ]}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:o,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6",type:"line"},{name:"pv",color:"cyan.6",yAxisId:"right",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6', type: 'line' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",tickLine:"xy",xAxisProps:{angle:-20},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},maxBarWidth:30,series:[{name:"Tomatoes",label:"Tomatoes sales",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",label:"Apples sales",color:"red.8",type:"line"},{name:"Oranges",label:"Oranges sales",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      maxBarWidth={30}
      series={[
        {
          name: 'Tomatoes',
          label: 'Tomatoes sales',
          color: 'rgba(18, 120, 255, 0.2)',
          type: 'bar',
        },
        { name: 'Apples', label: 'Apples sales', color: 'red.8', type: 'line' },
        { name: 'Oranges', label: 'Oranges sales', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ed={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",strokeDasharray:"15 15",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"configurator",component:function(e){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},ep={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,l.jsx)(F,{h:180,data:a,dataKey:"date",series:[{name:"Apples",color:"indigo.6",type:"area"}],composedChartProps:{syncId:"groceries"}}),(0,l.jsx)(Z.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,l.jsx)(F,{h:180,data:a,dataKey:"date",composedChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"cyan.6",type:"bar"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
        composedChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        composedChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'cyan.6', type: 'bar' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",tooltipAnimationDuration:200,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",unit:"$",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:a,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ef=[{date:"Mar 1",Apples:2200,Oranges:1400,Tomatoes:800},{date:"Mar 2",Apples:2500,Oranges:1500,Tomatoes:1e3},{date:"Mar 3",Apples:2800,Oranges:1700,Tomatoes:1200},{date:"Mar 4",Apples:3100,Oranges:1600,Tomatoes:900},{date:"Mar 5",Apples:3e3,Oranges:1800,Tomatoes:1100},{date:"Mar 6",Apples:2700,Oranges:2e3,Tomatoes:1300},{date:"Mar 7",Apples:2400,Oranges:2100,Tomatoes:1500},{date:"Mar 8",Apples:2100,Oranges:1900,Tomatoes:1400},{date:"Mar 9",Apples:1900,Oranges:1700,Tomatoes:1200},{date:"Mar 10",Apples:2200,Oranges:1500,Tomatoes:1e3},{date:"Mar 11",Apples:2600,Oranges:1600,Tomatoes:1100},{date:"Mar 12",Apples:3e3,Oranges:1800,Tomatoes:1300},{date:"Mar 13",Apples:3300,Oranges:2e3,Tomatoes:1600},{date:"Mar 14",Apples:3100,Oranges:2200,Tomatoes:1700},{date:"Mar 15",Apples:2800,Oranges:2100,Tomatoes:1500},{date:"Mar 16",Apples:2500,Oranges:1900,Tomatoes:1300}],eg={type:"code",component:function(){return(0,l.jsx)(F,{h:300,data:ef,dataKey:"date",maxBarWidth:30,withBrush:!0,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:`
import { CompositeChart } from '@mantine/charts';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400, Tomatoes: 800 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500, Tomatoes: 1000 },
  /* ...other data points */
];

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      withBrush
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`};var ev=(0,t.__exportAll)({axisLabels:()=>Y,axisProps:()=>U,brush:()=>eg,color:()=>G,colorSchemeColor:()=>_,customTooltip:()=>H,dotProps:()=>J,gridColor:()=>Q,legend:()=>ee,legendPosition:()=>et,lineDasharray:()=>ea,noTooltip:()=>er,pointLabels:()=>eo,referenceLines:()=>en,rightYAxis:()=>ei,rotateLabels:()=>es,seriesLabels:()=>el,strokeDasharray:()=>ed,strokeWidth:()=>ec,sync:()=>ep,tooltipAnimation:()=>em,unit:()=>eh,usage:()=>V,valueFormatter:()=>eu,xAxisOffset:()=>ey,yScale:()=>ex});e.s(["CompositeChartDemos",0,ev],475865)},844864,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(475865);e.i(603441);var o=e.i(62558);e.i(457450);var n=e.i(418026);let i=(0,o.Layout)(n.MDX_DATA.CompositeChart);function s(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:n}=o;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"CompositeChart"})," allows using ",(0,t.jsx)(o.code,{children:"Line"}),", ",(0,t.jsx)(o.code,{children:"Area"}),", and ",(0,t.jsx)(o.code,{children:"Bar"})," charts together in a single\nchart:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(o.p,{children:["To display the chart legend, set the ",(0,t.jsx)(o.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.legend}),"\n",(0,t.jsx)(o.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with the ",(0,t.jsx)(o.code,{children:"legendProps"})," prop. For example, setting ",(0,t.jsx)(o.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.legendPosition}),"\n",(0,t.jsx)(o.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,t.jsxs)(o.p,{children:["By default, the series ",(0,t.jsx)(o.code,{children:"name"})," is used as a label. To change it, set the ",(0,t.jsx)(o.code,{children:"label"}),"\nproperty in the ",(0,t.jsx)(o.code,{children:"series"})," object:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.seriesLabels}),"\n",(0,t.jsx)(o.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,t.jsxs)(o.p,{children:["To display labels on data points, set ",(0,t.jsx)(o.code,{children:"withPointLabels"}),". This feature is supported\nonly for ",(0,t.jsx)(o.code,{children:"Line"})," and ",(0,t.jsx)(o.code,{children:"Area"})," charts:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.pointLabels}),"\n",(0,t.jsx)(o.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisProps"})," and ",(0,t.jsx)(o.code,{children:"yAxisProps"})," to pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change the orientation of the axis:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.axisProps}),"\n",(0,t.jsx)(o.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisLabel"})," and ",(0,t.jsx)(o.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.axisLabels}),"\n",(0,t.jsx)(o.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisProps"})," to set padding between the chart ends and the x-axis:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.xAxisOffset}),"\n",(0,t.jsx)(o.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"yAxisProps"})," to change the domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set the domain to ",(0,t.jsx)(o.code,{children:"[0, 100]"}),":"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.yScale}),"\n",(0,t.jsx)(o.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,t.jsxs)(o.p,{children:["To display an additional Y axis on the right side of the chart, set the ",(0,t.jsx)(o.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with the ",(0,t.jsx)(o.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\nthe ",(0,t.jsx)(o.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,t.jsx)(o.code,{children:"yAxisId"})," in the ",(0,t.jsx)(o.code,{children:"series"})," object."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.rightYAxis}),"\n",(0,t.jsx)(o.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,t.jsxs)(o.p,{children:["To rotate x-axis labels, set ",(0,t.jsx)(o.code,{children:"xAxisProps.angle"})," to the number of degrees to rotate:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.rotateLabels}),"\n",(0,t.jsx)(o.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(o.p,{children:["To format values in the tooltip and axis ticks, use the ",(0,t.jsx)(o.code,{children:"valueFormat"})," prop. It accepts\na function that takes a number value as an argument and returns a formatted value:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.valueFormatter}),"\n",(0,t.jsx)(o.h2,{id:"chart-color",children:"Chart color"}),"\n",(0,t.jsxs)(o.p,{children:["You can reference colors from ",(0,t.jsx)(o.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(o.code,{children:"blue"}),", ",(0,t.jsx)(o.code,{children:"red.5"}),", ",(0,t.jsx)(o.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.color}),"\n",(0,t.jsx)(o.h2,{id:"change-chart-color-depending-on-color-scheme",children:"Change chart color depending on color scheme"}),"\n",(0,t.jsxs)(o.p,{children:["You can use CSS variables in the ",(0,t.jsx)(o.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,t.jsx)(o.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor the ",(0,t.jsx)(o.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof a chart that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.colorSchemeColor}),"\n",(0,t.jsx)(o.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,t.jsx)(o.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.strokeDasharray}),"\n",(0,t.jsx)(o.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"--chart-grid-color"})," and ",(0,t.jsx)(o.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,t.jsx)(o.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.gridColor}),"\n",(0,t.jsxs)(o.p,{children:["If your application has only one color scheme, you can use ",(0,t.jsx)(o.code,{children:"gridColor"})," and ",(0,t.jsx)(o.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { CompositeChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <CompositeChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6', type: 'line' },\n        { name: 'Oranges', color: 'blue.6', type: 'bar' },\n        { name: 'Tomatoes', color: 'teal.6', type: 'area' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,t.jsxs)(o.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,t.jsx)(o.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.tooltipAnimation}),"\n",(0,t.jsx)(o.h2,{id:"units",children:"Units"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.unit}),"\n",(0,t.jsx)(o.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,t.jsx)(o.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.customTooltip}),"\n",(0,t.jsx)(o.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,t.jsxs)(o.p,{children:["To remove tooltip, set ",(0,t.jsx)(o.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.noTooltip}),"\n",(0,t.jsx)(o.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,t.jsx)(o.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.dotProps}),"\n",(0,t.jsx)(o.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"strokeWidth"})," prop to control the stroke width of all areas/lines:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.strokeWidth}),"\n",(0,t.jsx)(o.h2,{id:"sync-multiple-charts",children:"Sync multiple charts"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/ComposedChart",children:"ComposedChart"}),"\ncomponent with ",(0,t.jsx)(o.code,{children:"composedChartProps"})," prop. For example, setting ",(0,t.jsx)(o.code,{children:"composedChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,t.jsx)(o.code,{children:"CompositeChart"})," components with the same ",(0,t.jsx)(o.code,{children:"syncId"})," prop."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.sync}),"\n",(0,t.jsx)(o.h2,{id:"dashed-lines",children:"Dashed lines"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"strokeDasharray"})," property in ",(0,t.jsx)(o.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.lineDasharray}),"\n",(0,t.jsx)(o.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.referenceLines}),"\n",(0,t.jsx)(o.h2,{id:"brush",children:"Brush"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"withBrush"})," prop to display a brush (range selector) under the chart. Drag the\nbrush handles to zoom into a subset of the data. Use the ",(0,t.jsx)(o.code,{children:"brushProps"})," prop to pass props\ndown to the underlying recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/Brush",children:"Brush"})," component,\nor render the ",(0,t.jsx)(o.code,{children:"ChartBrush"})," component as a child for full control."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.brush})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})})}])},287505,(e,t,a)=>{let r="/charts/composite-chart";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(844864)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
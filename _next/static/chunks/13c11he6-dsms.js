(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,789859,328233,482593,e=>{"use strict";var a=e.i(191788),t=e.i(56206),r=e.i(778979),o=e.i(883388),n=e.i(270627);function l(){return(l=Object.assign.bind()).apply(null,arguments)}var i=e=>{var{cx:i,cy:s,r:c,className:d}=e,p=(0,t.clsx)("recharts-dot",d);return(0,n.isNumber)(i)&&(0,n.isNumber)(s)&&(0,n.isNumber)(c)?a.createElement("circle",l({},(0,o.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:p,cx:i,cy:s,r:c})):null};e.s(["Dot",0,i],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),p=e.i(561622),m=e.i(446354),u=["points"];function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function y(){return(y=Object.assign.bind()).apply(null,arguments)}function g(e){var{option:r,dotProps:o,className:n}=e;if((0,a.isValidElement)(r))return(0,a.cloneElement)(r,o);if("function"==typeof r)return r(o);var l=(0,t.clsx)(n,"boolean"!=typeof r?r.className:""),s=null!=o?o:{},{points:c}=s,d=function(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(s,u);return a.createElement(i,y({},d,{className:l}))}e.s(["Dots",0,function(e){var{points:t,dot:r,className:o,dotClassName:n,dataKey:l,baseProps:i,needClip:u,clipPathId:f,zIndex:x=m.DefaultZIndexes.scatter}=e;if(null==t||!r&&1!==t.length)return null;var A=(0,c.isClipDot)(r),v=(0,d.svgPropertiesAndEventsFromUnknown)(r),b=t.map((e,o)=>{var s,c,d=h(h(h({r:3},i),v),{},{index:o,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:l,value:e.value,payload:e.payload,points:t});return a.createElement(g,{key:"dot-".concat(o),option:r,dotProps:d,className:n})}),k={};return u&&null!=f&&(k.clipPath="url(#clipPath-".concat(A?"":"dots-").concat(f,")")),a.createElement(p.ZIndexLayer,{zIndex:x},a.createElement(s.Layer,y({className:o},k),b))}],789859);var x=e.i(543372),A=e.i(281695),v=e.i(630173);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var C=e=>{var t,{point:n,childIndex:l,mainColor:c,activeDot:d,dataKey:p,clipPath:m}=e;if(!1===d||null==n.x||null==n.y)return null;var u=k(k(k({},{index:l,dataKey:p,cx:n.x,cy:n.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:n.payload,value:n.value}),(0,o.svgPropertiesNoEventsFromUnknown)(d)),(0,r.adaptEventHandlers)(d));return t=(0,a.isValidElement)(d)?(0,a.cloneElement)(d,u):"function"==typeof d?d(u):a.createElement(i,u),a.createElement(s.Layer,{className:"recharts-active-dot",clipPath:m},t)};e.s(["ActivePoints",0,function(e){var{points:t,mainColor:r,activeDot:o,itemDataKey:l,clipPath:i,zIndex:s=m.DefaultZIndexes.activeDot}=e,c=(0,x.useAppSelector)(A.selectActiveTooltipIndex),d=(0,v.useActiveTooltipDataPoints)();if(null==t||null==d)return null;var u=t.find(e=>d.includes(e.payload));return(0,n.isNullish)(u)?null:a.createElement(p.ZIndexLayer,{zIndex:s},a.createElement(C,{point:u,childIndex:Number(c),mainColor:r,dataKey:l,activeDot:o,clipPath:i}))}],482593)},554687,e=>{"use strict";var a=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var t=(0,a.svgPropertiesNoEventsFromUnknown)(e);if(null!=t){var{r,strokeWidth:o}=t,n=Number(r),l=Number(o);return(Number.isNaN(n)||n<0)&&(n=3),(Number.isNaN(l)||l<0)&&(l=2),{r:n,strokeWidth:l}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var a=e.i(391398);e.s(["PointLabel",0,function({x:e,y:t,value:r,valueFormatter:o}){return(0,a.jsx)("g",{transform:`translate(${e},${t})`,children:(0,a.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(r):r})})}])},321020,e=>{"use strict";e.s(["Area",()=>em,"computeArea",()=>ep],321020);var a=e.i(191788),t=e.i(56206),r=e.i(366998),o=e.i(815954),n=e.i(301426),l=e.i(789859),i=e.i(270627),s=e.i(516257),c=e.i(106043),d=e.i(482593),p=e.i(128002),m=e.i(777814),u=e.i(451400),f=e.i(83727),h=e.i(901841),y=e.i(399479),g=e.i(365441),x=e.i(755335),A=e.i(780950),v=(e,a,t)=>(0,f.selectAxisWithScale)(e,"xAxis",(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t),b=(e,a,t)=>(0,f.selectTicksOfGraphicalItem)(e,"xAxis",(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t),k=(e,a,t)=>(0,f.selectAxisWithScale)(e,"yAxis",(0,A.selectYAxisIdFromGraphicalItemId)(e,a),t),C=(e,a,t)=>(0,f.selectTicksOfGraphicalItem)(e,"yAxis",(0,A.selectYAxisIdFromGraphicalItemId)(e,a),t),P=(0,u.createSelector)([h.selectChartLayout,v,k,b,C],(e,a,t,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(a,r,!1):(0,s.getBandSizeOfAxis)(t,o,!1)),O=(0,u.createSelector)([f.selectUnfilteredCartesianItems,(e,a)=>a],(e,a)=>e.filter(e=>"area"===e.type).find(e=>e.id===a)),D=e=>{var a=(0,h.selectChartLayout)(e);return(0,s.isCategoricalAxis)(a,"xAxis")?"yAxis":"xAxis"},N=(0,u.createSelector)([O,(e,a,t)=>(0,f.selectStackGroups)(e,D(e),"yAxis"===D(e)?(0,A.selectYAxisIdFromGraphicalItemId)(e,a):(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t)],(e,a)=>{if(null!=e&&null!=a){var t,{stackId:r}=e,o=(0,g.getStackSeriesIdentifier)(e);if(null!=r&&null!=o){var n=null==(t=a[r])?void 0:t.stackedData,l=null==n?void 0:n.find(e=>e.key===o);if(null!=l)return l.map(e=>[e[0],e[1]])}}}),T=(0,u.createSelector)([h.selectChartLayout,v,k,b,C,N,y.selectChartDataWithIndexesIfNotInPanoramaPosition3,P,O,x.selectChartBaseValue],(e,a,t,r,o,n,l,i,s,c)=>{var d,{chartData:p,dataStartIndex:m,dataEndIndex:u}=l;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=a&&null!=t&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i){var{data:f}=s;if(null!=(d=f&&f.length>0?f:null==p?void 0:p.slice(m,u+1)))return ep({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:o,dataStartIndex:m,areaSettings:s,stackedData:n,displayedData:d,chartBaseValue:c,bandSize:i})}}),j=e.i(662688),I=e.i(524970),M=e.i(836094),K=e.i(543372),E=e.i(3304),L=e.i(297974),w=e.i(500678),S=e.i(630173),W=e.i(768069),V=e.i(436323),F=e.i(883388),R=e.i(355476),z=e.i(554687),G=e.i(62037),B=e.i(561622),Y=e.i(446354),$=e.i(547810),U=["id"],Z=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function X(){return(X=Object.assign.bind()).apply(null,arguments)}function _(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function H(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function q(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?H(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function J(e,a){return e&&"none"!==e?e:a}var Q=a.memo(e=>{var{dataKey:t,data:r,stroke:o,strokeWidth:n,fill:l,name:c,hide:d,unit:m,tooltipType:u,id:f}=e,h={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:o,strokeWidth:n,fill:l,dataKey:t,nameKey:void 0,name:(0,s.getTooltipNameProp)(c,t),hide:d,type:u,color:J(o,l),unit:m,graphicalItemId:f}};return a.createElement(p.SetTooltipEntrySettings,{tooltipEntrySettings:h})});function ee(e){var{clipPathId:t,points:r,props:o}=e,{needClip:n,dot:i,dataKey:s}=o,c=(0,F.svgPropertiesNoEvents)(o);return a.createElement(l.Dots,{points:r,dot:i,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:n,clipPathId:t})}function ea(e){var{showLabels:t,children:r,points:o}=e,l=o.map(e=>{var a,t,r={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return q(q({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return a.createElement(n.CartesianLabelListContextProvider,{value:t?l:void 0},r)}function et(e){var{points:t,baseLine:n,needClip:l,clipPathId:i,props:s}=e,{layout:c,type:d,stroke:p,connectNulls:m,isRange:u}=s,{id:f}=s,h=_(s,U),y=(0,F.svgPropertiesNoEvents)(h),g=(0,G.svgPropertiesAndEvents)(h);return a.createElement(a.Fragment,null,(null==t?void 0:t.length)>1&&a.createElement(o.Layer,{clipPath:l?"url(#clipPath-".concat(i,")"):void 0},a.createElement(r.Curve,X({},g,{id:f,points:t,connectNulls:m,type:d,baseLine:n,layout:c,stroke:"none",className:"recharts-area-area"})),"none"!==p&&a.createElement(r.Curve,X({},y,{className:"recharts-area-curve",layout:c,type:d,connectNulls:m,fill:"none",points:t})),"none"!==p&&u&&Array.isArray(n)&&a.createElement(r.Curve,X({},y,{className:"recharts-area-curve",layout:c,type:d,connectNulls:m,fill:"none",points:n}))),a.createElement(ee,{points:t,props:h,clipPathId:i}))}function er(e){var t,r,{alpha:o,baseLine:n,points:l,strokeWidth:s}=e,c=null==(t=l[0])?void 0:t.y,d=null==(r=l[l.length-1])?void 0:r.y;if(!(0,w.isWellBehavedNumber)(c)||!(0,w.isWellBehavedNumber)(d))return null;var p=o*Math.abs(c-d),m=Math.max(...l.map(e=>e.x||0));return((0,i.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.x||0),m)),(0,i.isNumber)(m))?a.createElement("rect",{x:0,y:c<d?c:c-p,width:m+(s?parseInt("".concat(s),10):1),height:Math.floor(p)}):null}function eo(e){var t,r,{alpha:o,baseLine:n,points:l,strokeWidth:s}=e,c=null==(t=l[0])?void 0:t.x,d=null==(r=l[l.length-1])?void 0:r.x;if(!(0,w.isWellBehavedNumber)(c)||!(0,w.isWellBehavedNumber)(d))return null;var p=o*Math.abs(c-d),m=Math.max(...l.map(e=>e.y||0));return((0,i.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.y||0),m)),(0,i.isNumber)(m))?a.createElement("rect",{x:c<d?c:c-p,y:0,width:p,height:Math.floor(m+(s?parseInt("".concat(s),10):1))}):null}function en(e){var{alpha:t,layout:r,points:o,baseLine:n,strokeWidth:l}=e;return"vertical"===r?a.createElement(er,{alpha:t,points:o,baseLine:n,strokeWidth:l}):a.createElement(eo,{alpha:t,points:o,baseLine:n,strokeWidth:l})}function el(e){var{needClip:t,clipPathId:r,props:l,previousPointsRef:s,previousBaselineRef:c}=e,{points:d,baseLine:p,isAnimationActive:m,animationBegin:u,animationDuration:f,animationEasing:y,onAnimationStart:g,onAnimationEnd:x}=l,A=(0,a.useMemo)(()=>({points:d,baseLine:p}),[d,p]),v=(0,E.useAnimationId)(A,"recharts-area-"),b=(0,h.useCartesianChartLayout)(),[k,C]=(0,a.useState)(!1),P=(0,a.useCallback)(()=>{"function"==typeof x&&x(),C(!1)},[x]),O=(0,a.useCallback)(()=>{"function"==typeof g&&g(),C(!0)},[g]);if(null==b)return null;var D=s.current,N=c.current;return a.createElement(ea,{showLabels:!k,points:d},l.children,a.createElement(R.JavascriptAnimate,{animationId:v,begin:u,duration:f,isActive:m,easing:y,onAnimationEnd:P,onAnimationStart:O,key:v},e=>{if(D){var n,u=D.length/d.length,f=1===e?d:d.map((a,t)=>{var r=Math.floor(t*u);if(D[r]){var o=D[r];return q(q({},a),{},{x:(0,i.interpolate)(o.x,a.x,e),y:(0,i.interpolate)(o.y,a.y,e)})}return a});return n=(0,i.isNumber)(p)?(0,i.interpolate)(N,p,e):(0,i.isNullish)(p)||(0,i.isNan)(p)?(0,i.interpolate)(N,0,e):p.map((a,t)=>{var r=Math.floor(t*u);if(Array.isArray(N)&&N[r]){var o=N[r];return q(q({},a),{},{x:(0,i.interpolate)(o.x,a.x,e),y:(0,i.interpolate)(o.y,a.y,e)})}return a}),e>0&&(s.current=f,c.current=n),a.createElement(et,{points:f,baseLine:n,needClip:t,clipPathId:r,props:l})}return e>0&&(s.current=d,c.current=p),a.createElement(o.Layer,null,m&&a.createElement("defs",null,a.createElement("clipPath",{id:"animationClipPath-".concat(r)},a.createElement(en,{alpha:e,points:d,baseLine:p,layout:b,strokeWidth:l.strokeWidth}))),a.createElement(o.Layer,{clipPath:"url(#animationClipPath-".concat(r,")")},a.createElement(et,{points:d,baseLine:p,needClip:t,clipPathId:r,props:l})))}),a.createElement(n.LabelListFromLabelProp,{label:l.label}))}function ei(e){var{needClip:t,clipPathId:r,props:o}=e,n=(0,a.useRef)(null),l=(0,a.useRef)();return a.createElement(el,{needClip:t,clipPathId:r,props:o,previousPointsRef:n,previousBaselineRef:l})}class es extends a.PureComponent{render(){var{hide:e,dot:r,points:n,className:l,top:i,left:s,needClip:p,xAxisId:u,yAxisId:f,width:h,height:y,id:g,baseLine:x,zIndex:A}=this.props;if(e)return null;var v=(0,t.clsx)("recharts-area",l),{r:b,strokeWidth:k}=(0,z.getRadiusAndStrokeWidthFromDot)(r),C=(0,c.isClipDot)(r),P=2*b+k,O=p?"url(#clipPath-".concat(C?"":"dots-").concat(g,")"):void 0;return a.createElement(B.ZIndexLayer,{zIndex:A},a.createElement(o.Layer,{className:v},p&&a.createElement("defs",null,a.createElement(m.GraphicalItemClipPath,{clipPathId:g,xAxisId:u,yAxisId:f}),!C&&a.createElement("clipPath",{id:"clipPath-dots-".concat(g)},a.createElement("rect",{x:s-P/2,y:i-P/2,width:h+P,height:y+P}))),a.createElement(ei,{needClip:p,clipPathId:g,props:this.props})),a.createElement(d.ActivePoints,{points:n,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:O}),this.props.isRange&&Array.isArray(x)&&a.createElement(d.ActivePoints,{points:x,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:O}))}}var ec={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:Y.DefaultZIndexes.area};function ed(e){var t,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:l,connectNulls:i,dot:s,fill:c,fillOpacity:d,hide:p,isAnimationActive:u,legendType:f,stroke:y,xAxisId:g,yAxisId:x}=e,A=_(e,Z),v=(0,h.useChartLayout)(),b=(0,I.useChartName)(),{needClip:k}=(0,m.useNeedsClip)(g,x),C=(0,j.useIsPanorama)(),{points:P,isRange:O,baseLine:D}=null!=(t=(0,K.useAppSelector)(a=>T(a,e.id,C)))?t:{},N=(0,S.usePlotArea)();if("horizontal"!==v&&"vertical"!==v||null==N||"AreaChart"!==b&&"ComposedChart"!==b)return null;var{height:M,width:E,x:L,y:w}=N;return P&&P.length?a.createElement(es,X({},A,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:l,baseLine:D,connectNulls:i,dot:s,fill:c,fillOpacity:d,height:M,hide:p,layout:v,isAnimationActive:u,isRange:O,legendType:f,needClip:k,points:P,stroke:y,width:E,left:L,top:w,xAxisId:g,yAxisId:x})):null}function ep(e){var a,{areaSettings:{connectNulls:t,baseValue:r,dataKey:o},stackedData:n,layout:l,chartBaseValue:c,xAxis:d,yAxis:p,displayedData:m,dataStartIndex:u,xAxisTicks:f,yAxisTicks:h,bandSize:y}=e,g=n&&n.length,x=((e,a,t,r,o)=>{var n=null!=t?t:a;if((0,i.isNumber)(n))return n;var l="horizontal"===e?o:r,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===n?d:"dataMax"===n||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===n?s[0]:"dataMax"===n?s[1]:s[0]})(l,c,r,d,p),A="horizontal"===l,v=!1,b=m.map((e,a)=>{if(g)c=n[u+a];else{var r,l,i,c,m,b=(0,s.getValueByDataKey)(e,o);Array.isArray(b)?(c=b,v=!0):c=[x,b]}var k=null!=(r=null==(l=c)?void 0:l[1])?r:null,C=null==k||g&&!t&&null==(0,s.getValueByDataKey)(e,o);return A?{x:(0,s.getCateCoordinateOfLine)({axis:d,ticks:f,bandSize:y,entry:e,index:a}),y:C?null:null!=(m=p.scale.map(k))?m:null,value:c,payload:e}:{x:C?null:null!=(i=d.scale.map(k))?i:null,y:(0,s.getCateCoordinateOfLine)({axis:p,ticks:h,bandSize:y,entry:e,index:a}),value:c,payload:e}});return a=g||v?b.map(e=>{var a,t,r=Array.isArray(e.value)?e.value[0]:null;return A?{x:e.x,y:null!=r&&null!=e.y&&null!=(t=p.scale.map(r))?t:null,payload:e.payload}:{x:null!=r&&null!=(a=d.scale.map(r))?a:null,y:e.y,payload:e.payload}}):A?p.scale.map(x):d.scale.map(x),{points:b,baseLine:null!=a?a:0,isRange:v}}var em=a.memo(function(e){var t=(0,L.resolveDefaultProps)(e,ec),r=(0,j.useIsPanorama)();return a.createElement(W.RegisterGraphicalItemId,{id:t.id,type:"area"},e=>a.createElement(a.Fragment,null,a.createElement(M.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,stroke:r,fill:o,legendType:n,hide:l}=e;return[{inactive:l,dataKey:a,type:n,color:J(r,o),value:(0,s.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(Q,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:e}),a.createElement(V.SetCartesianGraphicalItem,{type:"area",id:e,data:t.data,dataKey:t.dataKey,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,stackId:(0,s.getNormalizedStackId)(t.stackId),hide:t.hide,barSize:void 0,baseValue:t.baseValue,isPanorama:r,connectNulls:t.connectNulls}),a.createElement(ed,X({},t,{id:e}))))},$.propsAreEqual);em.displayName="Area"},990865,378097,e=>{"use strict";var a=e.i(391398);function t({color:e,id:r,withGradient:o,fillOpacity:n}){return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:n}),(0,a.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,a.jsx)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,a.jsx)("stop",{stopColor:e,stopOpacity:n??.2})})})}t.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,t],990865);var r=e.i(191788),o=e.i(471970),n=e.i(437515),l=["axis"],i=(0,r.forwardRef)((e,a)=>r.createElement(n.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:l,tooltipPayloadSearcher:o.arrayTooltipSearcher,categoricalChartProps:e,ref:a}));e.s(["AreaChart",0,i],378097)},199536,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],r=`
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
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],n=`
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
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];
`,l=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
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
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],c=`
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
`,d=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`;var m=e.i(391398),u=e.i(520916),f=e.i(577596),h=e.i(739539),y=e.i(990865),g=e.i(317477),x=e.i(951254);function A({offset:e,id:a,colors:t,fillOpacity:r}){let o=(0,x.useMantineTheme)();return(0,m.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,m.jsx)("stop",{offset:e,stopColor:(0,g.getThemeColor)(t[0],o),stopOpacity:r??.2}),(0,m.jsx)("stop",{offset:e,stopColor:(0,g.getThemeColor)(t[1],o),stopOpacity:r??.2})]})}A.displayName="@mantine/charts/AreaSplit";var v=e.i(979298),b=e.i(232471),k=e.i(481178),C=e.i(275519),P=e.i(44091),O=e.i(62904),D=e.i(391466),N=e.i(191788),T=e.i(321020),j=e.i(378097),I=e.i(526626),M=e.i(905e3),K=e.i(881264),E=e.i(86443),L=e.i(723451),w=e.i(694713),S=e.i(756902),W=e.i(976835);function V(e){return`${(100*e).toFixed(0)}%`}let F={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},R=(0,k.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,g.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,g.getThemeColor)(t,e):void 0}})),z=(0,C.factory)(e=>{let a=(0,P.useProps)("AreaChart",F,e),{classNames:t,className:r,style:o,styles:n,unstyled:l,vars:i,data:s,series:c,withGradient:d,dataKey:p,withXAxis:k,withYAxis:C,curveType:z,gridProps:G,withDots:B,tickLine:Y,strokeDasharray:$,gridAxis:U,unit:Z,yAxisProps:X,xAxisProps:_,dotProps:H,activeDotProps:q,strokeWidth:J,tooltipAnimationDuration:Q,type:ee,legendProps:ea,tooltipProps:et,withLegend:er,withTooltip:eo,areaChartProps:en,fillOpacity:el,splitColors:ei,splitOffset:es,connectNulls:ec,onMouseLeave:ed,orientation:ep,referenceLines:em,dir:eu,valueFormatter:ef,children:eh,areaProps:ey,xAxisLabel:eg,yAxisLabel:ex,withRightYAxis:eA,rightYAxisLabel:ev,rightYAxisProps:eb,withPointLabels:ek,gridColor:eC,textColor:eP,attributes:eO,...eD}=a,eN=(0,x.useMantineTheme)(),eT=(0,N.useId)(),ej=`${eT}-split`,eI=(Q||0)>0,eM="boolean"==typeof d?d:"default"===ee,eK="stacked"===ee||"percent"===ee,[eE,eL]=(0,N.useState)(null),ew=null!==eE,{resolvedClassNames:eS,resolvedStyles:eW}=(0,O.useResolvedStylesApi)({classNames:t,styles:n,props:a}),eV=(0,D.useStyles)({name:"AreaChart",classes:v.default,props:a,className:r,style:o,classNames:t,styles:n,unstyled:l,attributes:eO,vars:i,varsResolver:R}),eF=c.map(e=>{let a=(0,g.getThemeColor)(e.color,eN),t=ew&&eE!==e.name;return(0,N.createElement)(T.Area,{...eV("area"),activeDot:{fill:eN.white,stroke:a,strokeWidth:2,r:4,...q},dot:{fill:a,fillOpacity:+!t,strokeWidth:2,r:4,...H},key:e.name,name:e.name,type:z,dataKey:e.name,fill:"none",strokeWidth:J,stroke:"none",isAnimationActive:!1,connectNulls:ec,stackId:eK?"stack-dots":void 0,yAxisId:e.yAxisId||void 0,..."function"==typeof ey?ey(e):ey})}),eR=c.map(e=>{let a=`${eT}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,t=(0,g.getThemeColor)(e.color,eN),r=ew&&eE!==e.name;return(0,m.jsxs)(N.Fragment,{children:[(0,m.jsx)("defs",{children:(0,m.jsx)(y.AreaGradient,{color:t,withGradient:eM,id:a,fillOpacity:el})}),(0,m.jsx)(T.Area,{...eV("area"),activeDot:!1,dot:!1,name:e.name,type:e.curveType??z,dataKey:e.name,fill:"split"===ee?`url(#${ej})`:`url(#${a})`,strokeWidth:J,stroke:t,isAnimationActive:!1,connectNulls:ec,stackId:eK?"stack":void 0,fillOpacity:+!r,strokeOpacity:r?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ek?(0,m.jsx)(h.PointLabel,{valueFormatter:ef}):void 0,..."function"==typeof ey?ey(e):ey})]},e.name)}),ez=em?.map((e,a)=>{let t=(0,g.getThemeColor)(e.color,eN);return(0,m.jsx)(E.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eV("referenceLine")},a)}),eG="percent"===ee?V:ef,eB={axisLine:!1,..."vertical"===ep?{dataKey:p,type:"category"}:{type:"number"},tickLine:"none"!==U&&("y"===Y||"xy"===Y)&&{stroke:"currentColor"},allowDecimals:!0,unit:Z,tickFormatter:"vertical"===ep?void 0:eG,...eV("axis")};return(0,m.jsx)(b.Box,{...eV("root"),onMouseLeave:e=>{eL(null),ed?.(e)},dir:eu||"ltr",...eD,children:(0,m.jsx)(L.ResponsiveContainer,{...eV("container"),children:(0,m.jsxs)(j.AreaChart,{data:s,stackOffset:"percent"===ee?"expand":void 0,layout:ep,margin:{bottom:eg?30:void 0,left:ex?10:void 0,right:ex?5:void 0},...en,children:[ez,er&&(0,m.jsx)(K.Legend,{verticalAlign:"top",content:e=>(0,m.jsx)(f.ChartLegend,{payload:e.payload,onHighlight:eL,legendPosition:ea?.verticalAlign||"top",classNames:eS,styles:eW,series:c,attributes:eO}),...ea}),(0,m.jsx)(I.CartesianGrid,{strokeDasharray:$,vertical:"y"===U||"xy"===U,horizontal:"x"===U||"xy"===U,...eV("grid"),...G}),(0,m.jsxs)(S.XAxis,{hide:!k,..."vertical"===ep?{type:"number"}:{dataKey:p},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==U&&("x"===Y||"xy"===Y)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ep?eG:void 0,...eV("axis"),..._,children:[eg&&(0,m.jsx)(M.Label,{position:"insideBottom",offset:-20,fontSize:12,...eV("axisLabel"),children:eg}),_?.children]}),(0,m.jsxs)(W.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!C,...eB,...X,children:[ex&&(0,m.jsx)(M.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eV("axisLabel"),children:ex}),X?.children]}),(0,m.jsxs)(W.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eA,...eB,...eb,children:[ev&&(0,m.jsx)(M.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eV("axisLabel"),children:ev}),X?.children]}),eo&&(0,m.jsx)(w.Tooltip,{animationDuration:Q,isAnimationActive:eI,position:"vertical"===ep?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:$},content:({label:e,payload:a,labelFormatter:t})=>(0,m.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:Z,classNames:eS,styles:eW,series:c,valueFormatter:ef,attributes:eO}),...et}),"split"===ee&&(0,m.jsx)("defs",{children:(0,m.jsx)(A,{colors:ei,id:ej,offset:es??function({data:e,series:a}){return 1===a.length?function({data:e,dataKey:a}){let t=Math.max(...e.map(e=>e[a])),r=Math.min(...e.map(e=>e[a]));return t<=0?0:r>=0?1:t/(t-r)}({data:e,dataKey:a[0].name}):.5}({data:s,series:c}),fillOpacity:el})}),eR,B&&eF,eh]})})})});z.classes=v.default,z.varsResolver=R,z.displayName="@mantine/charts/AreaChart";let G={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},B={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="percent"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Y={type:"configurator",component:function(e){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},$={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Z={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      strokeDasharray="15 15"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},X={type:"configurator",component:function(e){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withGradient${!1===e.withGradient?"={false}":""}
      series={[{ name: 'Apples', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},_={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      tooltipAnimationDuration={200}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},H={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      unit="$"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},q={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",className:"m_13521d26",series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--area-color)' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --area-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --area-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var J=e.i(470743),Q=e.i(883364);function ee({label:e,payload:a}){return a?(0,m.jsxs)(J.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,m.jsx)(Q.Text,{fw:500,mb:5,children:e}),(0,u.getFilteredChartTooltipPayload)(a).map(e=>(0,m.jsxs)(Q.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let ea={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:a})=>(0,m.jsx)(ee,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart, getFilteredChartTooltipPayload } from '@mantine/charts';
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
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withTooltip={false}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"configurator",component:function(e){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},en={type:"code",component:function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Q.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,m.jsx)(z,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),(0,m.jsx)(Q.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,m.jsx)(z,{h:180,data:t,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <AreaChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        areaChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <AreaChart
        h={180}
        data={data}
        dataKey="date"
        areaChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'teal.6' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"configurator",component:function(e){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Tomatoes', color: 'teal.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},ei={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:o,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="split"
      strokeWidth={1}
      dotProps={{ r: 2, strokeWidth: 1 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[{ name: 'Apples', color: 'bright' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:o,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="split"
      strokeWidth={1}
      dotProps={{ r: 2, strokeWidth: 1 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      series={[{ name: 'Apples', color: 'bright' }]}
      splitColors={['violet', 'orange']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ec={type:"configurator",component:function(e){return(0,m.jsx)(z,{h:300,data:l,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},ed={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",className:"m_3587e220",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
import { AreaChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      className={classes.root}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      strokeWidth={1}
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:s,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:s,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eA={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",tickLine:"xy",xAxisProps:{angle:-20},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eb={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:d,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
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
`,language:"tsx",fileName:"Demo.tsx"},{code:p,language:"tsx",fileName:"data.ts"}]},ek={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eC=e.i(980667);let eP={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,m.jsx)(eC.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:0,y2:1e4,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
import { ReferenceArea } from 'recharts';
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={0}
        y2={10000}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </AreaChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eO={type:"code",component:function(){return(0,m.jsx)(z,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6', curveType: 'linear' },
        { name: 'Oranges', color: 'blue.6', curveType: 'bump' },
        { name: 'Tomatoes', color: 'teal.6', curveType: 'stepAfter' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eD=(0,a.__exportAll)({axisLabels:()=>ev,axisProps:()=>ep,color:()=>X,colorSchemeColor:()=>q,connectNulls:()=>ec,curveType:()=>eO,customTooltip:()=>ea,dotProps:()=>er,fillOpacity:()=>el,gridColor:()=>ed,legend:()=>$,legendPosition:()=>U,lineDasharray:()=>eu,noTooltip:()=>et,percent:()=>B,pointLabels:()=>ek,referenceArea:()=>eP,referenceLines:()=>ey,rightYAxis:()=>eb,rotateLabels:()=>eA,seriesLabels:()=>eg,split:()=>ei,splitColors:()=>es,stacked:()=>G,strokeDasharray:()=>Z,strokeWidth:()=>eo,sync:()=>en,tooltipAnimation:()=>_,unit:()=>H,usage:()=>Y,valueFormatter:()=>ex,vertical:()=>em,xAxisOffset:()=>ef,yScale:()=>eh});e.s(["AreaChartDemos",0,eD],199536)}]);
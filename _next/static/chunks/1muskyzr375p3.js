(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),r=e.i(317477),i=e.i(44091),o=e.i(391466),a=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:i,gradient:o,variant:a,size:l,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":i||a?d.background:void 0,"--badge-color":i||a?d.color:void 0,"--badge-bd":i||a?d.border:void 0,"--badge-dot-color":"dot"===a?(0,r.getThemeColor)(i,e):void 0}}}),h=(0,a.polymorphicFactory)(e=>{let t=(0,i.useProps)("Badge",null,e),{classNames:n,className:r,style:a,styles:h,unstyled:p,vars:u,radius:m,color:x,gradient:f,leftSection:v,rightSection:g,children:j,variant:y,fullWidth:b,autoContrast:w,circle:S,mod:A,attributes:k,...C}=t,T=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:r,style:a,classNames:n,styles:h,unstyled:p,attributes:k,vars:u,varsResolver:d});return(0,c.jsxs)(l.Box,{variant:y,mod:[{block:b,circle:S,"with-right-section":!!g,"with-left-section":!!v},A],...T("root",{variant:y}),...C,children:[v&&(0,c.jsx)("span",{...T("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...T("label"),children:j}),g&&(0,c.jsx)("span",{...T("section"),"data-position":"right",children:g})]})});h.classes=s,h.varsResolver=d,h.displayName="@mantine/core/Badge",e.s(["Badge",0,h],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let r={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,i){let{min:o,max:a,step:l=1}={...r,...i},s=Math.abs(l),[c,d]=(0,n.useState)((0,t.clamp)(e,o,a));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,o,a)),[o,a,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,o,a)),[o,a,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,o,a)),[o,a]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,o,a)),[e,o,a])}]}])},321020,e=>{"use strict";e.s(["Area",()=>ej,"computeArea",()=>eg],321020);var t=e.i(191788),n=e.i(56206),r=e.i(815954),i=e.i(301426),o=e.i(789859),a=e.i(270627),l=e.i(516257),s=e.i(106043),c=e.i(482593),d=e.i(128002),h=e.i(777814),p=e.i(314169),u=e.i(83727),m=e.i(901841),x=e.i(399479),f=e.i(365441),v=e.i(755335),g=e.i(780950),j=(e,t,n)=>(0,u.selectAxisWithScale)(e,"xAxis",(0,g.selectXAxisIdFromGraphicalItemId)(e,t),n),y=(e,t,n)=>(0,u.selectTicksOfGraphicalItem)(e,"xAxis",(0,g.selectXAxisIdFromGraphicalItemId)(e,t),n),b=(e,t,n)=>(0,u.selectAxisWithScale)(e,"yAxis",(0,g.selectYAxisIdFromGraphicalItemId)(e,t),n),w=(e,t,n)=>(0,u.selectTicksOfGraphicalItem)(e,"yAxis",(0,g.selectYAxisIdFromGraphicalItemId)(e,t),n),S=(0,p.createSelector)([m.selectChartLayout,j,b,y,w],(e,t,n,r,i)=>(0,l.isCategoricalAxis)(e,"xAxis")?(0,l.getBandSizeOfAxis)(t,r,!1):(0,l.getBandSizeOfAxis)(n,i,!1)),A=(0,p.createSelector)([u.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),k=e=>{var t=(0,m.selectChartLayout)(e);return(0,l.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},C=(0,p.createSelector)([A,(e,t,n)=>(0,u.selectStackGroups)(e,k(e),"yAxis"===k(e)?(0,g.selectYAxisIdFromGraphicalItemId)(e,t):(0,g.selectXAxisIdFromGraphicalItemId)(e,t),n)],(e,t)=>{if(null!=e&&null!=t){var n,r=e.stackId,i=(0,f.getStackSeriesIdentifier)(e);if(null!=r&&null!=i){var o=null==(n=t[r])?void 0:n.stackedData,a=null==o?void 0:o.find(e=>e.key===i);if(null!=a)return a.map(e=>[e[0],e[1]])}}}),T=(0,p.createSelector)([m.selectChartLayout,j,b,y,w,C,x.selectChartDataWithIndexesIfNotInPanoramaPosition3,S,A,v.selectChartBaseValue],(e,t,n,r,i,o,a,l,s,c)=>{var d,h=a.chartData,p=a.dataStartIndex,u=a.dataEndIndex;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=n&&null!=r&&null!=i&&0!==r.length&&0!==i.length&&null!=l){var m=s.data;if(null!=(d=m&&m.length>0?m:null==h?void 0:h.slice(p,u+1)))return eg({layout:e,xAxis:t,yAxis:n,xAxisTicks:r,yAxisTicks:i,dataStartIndex:p,areaSettings:s,stackedData:o,displayedData:d,chartBaseValue:c,bandSize:l})}}),I=e.i(662688),B=e.i(524970),P=e.i(836094),D=e.i(543372),R=e.i(945031),E=e.i(634200),N=e.i(325551),L=e.i(297974),O=e.i(630173),z=e.i(768069),q=e.i(436323),V=e.i(883388),M=e.i(554687),H=e.i(62037),F=e.i(134959),G=e.i(561622),_=e.i(446354),W=e.i(547810),K=e.i(366998),U=e.i(500678),Y=e.i(382863),Q=["animationElapsedTime","isAnimating","isEntrance","layout","isRange","stroke","connectNulls"],X=["id","baseLine"];function J(){return(J=Object.assign.bind()).apply(null,arguments)}function $(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Z(e){var n,r,i=e.alpha,o=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.x,d=null==(r=l[l.length-1])?void 0:r.x;if(!(0,U.isWellBehavedNumber)(c)||!(0,U.isWellBehavedNumber)(d))return null;var h=i*Math.abs(c-d),p=Math.max(...l.map(e=>e.y||0));return((0,a.isNumber)(o)?p=Math.max(o,p):o&&Array.isArray(o)&&o.length&&(p=Math.max(...o.map(e=>e.y||0),p)),(0,a.isNumber)(p))?t.createElement("rect",{x:c<d?c:c-h,y:0,width:h,height:Math.floor(p+(s?parseInt("".concat(s),10):1))}):null}function ee(e){var n,r,i=e.alpha,o=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.y,d=null==(r=l[l.length-1])?void 0:r.y;if(!(0,U.isWellBehavedNumber)(c)||!(0,U.isWellBehavedNumber)(d))return null;var h=i*Math.abs(c-d),p=Math.max(...l.map(e=>e.x||0));return((0,a.isNumber)(o)?p=Math.max(o,p):o&&Array.isArray(o)&&o.length&&(p=Math.max(...o.map(e=>e.x||0),p)),(0,a.isNumber)(p))?t.createElement("rect",{x:0,y:c<d?c:c-h,width:p+(s?parseInt("".concat(s),10):1),height:Math.floor(h)}):null}function et(e){var n=e.alpha,r=e.layout,i=e.points,o=e.baseLine,a=e.strokeWidth;return"vertical"===r?t.createElement(ee,{alpha:n,points:i,baseLine:o,strokeWidth:a}):t.createElement(Z,{alpha:n,points:i,baseLine:o,strokeWidth:a})}var en=["id"],er=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function ei(){return(ei=Object.assign.bind()).apply(null,arguments)}function eo(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ea(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function el(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(n),!0).forEach(function(t){var r,i,o;r=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ea(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var es={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:E.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"matched"===e.status?[el(el({},e.next),{},{x:(0,a.interpolate)(e.prev.x,e.next.x,t),y:(0,a.interpolate)(e.prev.y,e.next.y,t)})]:"added"===e.status?[e.next]:[]),connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,shape:function(e){var n,i=e.animationElapsedTime,o=void 0===i?1:i,a=e.isAnimating,l=e.isEntrance,s=e.layout,c=e.isRange,d=e.stroke,h=e.connectNulls,p=$(e,Q),u="vertical"===s?"vertical":"horizontal",m=null!=h&&h,x=(0,Y.useId)(),f=p.id,v=p.baseLine,g=$(p,X),j=(0,V.svgPropertiesNoEvents)(g),y=t.createElement(K.Curve,J({},p,{id:f,baseLine:v,connectNulls:m,stroke:"none",className:"recharts-area-area",layout:u})),b="none"!==d&&t.createElement(K.Curve,J({},j,{className:"recharts-area-curve",layout:u,type:p.type,connectNulls:m,fill:"none",stroke:d,points:p.points})),w="none"!==d&&c&&Array.isArray(v)&&t.createElement(K.Curve,J({},j,{className:"recharts-area-curve",layout:u,type:p.type,connectNulls:m,fill:"none",stroke:d,points:v}));return void 0!==l&&l&&(void 0!==a&&a||o<1)?t.createElement(r.Layer,null,t.createElement("defs",null,t.createElement("clipPath",{id:x},t.createElement(et,{alpha:o,points:null!=(n=p.points)?n:[],baseLine:v,layout:u,strokeWidth:p.strokeWidth}))),t.createElement(r.Layer,{clipPath:"url(#".concat(x,")")},y,b,w)):t.createElement(t.Fragment,null,y,b,w)},xAxisId:0,yAxisId:0,zIndex:_.DefaultZIndexes.area};function ec(e,t){return e&&"none"!==e?e:t}var ed=t.memo(e=>{var n=e.dataKey,r=e.data,i=e.stroke,o=e.strokeWidth,s=e.fill,c=e.name,h=e.hide,p=e.unit,u=e.formatter,m=e.tooltipType,x=e.id,f={dataDefinedOnItem:r,getPosition:a.noop,settings:{stroke:i,strokeWidth:o,fill:s,dataKey:n,nameKey:void 0,name:(0,l.getTooltipNameProp)(c,n),hide:h,type:m,color:ec(i,s),unit:p,formatter:u,graphicalItemId:x}};return t.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:f})});function eh(e){var n=e.clipPathId,r=e.points,i=e.props,a=i.needClip,l=i.dot,s=i.dataKey,c=(0,V.svgPropertiesNoEvents)(i);return t.createElement(o.Dots,{points:r,dot:l,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:a,clipPathId:n})}function ep(e){var n=e.showLabels,r=e.children,o=e.points.map(e=>{var t,n,r={x:null!=(t=e.x)?t:0,y:null!=(n=e.y)?n:0,width:0,lowerWidth:0,upperWidth:0,height:0};return el(el({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return t.createElement(i.CartesianLabelListContextProvider,{value:n?o:void 0},r)}function eu(e){var n=e.points,i=e.baseLine,o=e.needClip,a=e.clipPathId,l=e.props,s=e.animationElapsedTime,c=e.isAnimating,d=e.isEntrance,h=l.layout,p=l.type,u=l.stroke,m=l.connectNulls,x=l.isRange,f=l.shape,v=l.id,g=eo(l,en),j=el(el({},(0,H.svgPropertiesAndEvents)(g)),{},{id:v,points:n,connectNulls:m,type:p,baseLine:i,layout:h,stroke:u,isRange:x,animationElapsedTime:s,isAnimating:c,isEntrance:d});return t.createElement(t.Fragment,null,(null==n?void 0:n.length)>1&&t.createElement(r.Layer,{clipPath:o?"url(#clipPath-".concat(a,")"):void 0},t.createElement(F.Shape,{option:f,DefaultShape:es.shape,shapeProps:j})),t.createElement(eh,{points:n,props:g,clipPathId:a}))}function em(e){var n,r=e.needClip,o=e.clipPathId,l=e.props,s=e.previousPointsRef,c=e.previousBaselineRef,d=l.points,h=l.baseLine,p=l.isAnimationActive,u=l.animationBegin,x=l.animationDuration,f=l.animationEasing,v=l.animationMatchBy,g=l.animationInterpolateFn,j=(0,t.useMemo)(()=>({points:d,baseLine:h}),[d,h]),y=(0,N.useAnimationStartSnapshot)(j,c),b=(0,m.useCartesianChartLayout)(),w=(0,R.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),S=w.isAnimating,A=w.handleAnimationStart,k=w.handleAnimationEnd,C=y.startValue;return null==b?null:(n=Array.isArray(h)&&Array.isArray(C)?(0,E.matchAnimationItems)(C,h,v):Array.isArray(h)?(0,E.matchAnimationItems)(null,h,v):null,t.createElement(R.AnimatedItems,{animationInput:j,animationIdPrefix:"recharts-area-",items:d,previousItemsRef:s,isAnimationActive:p,animationBegin:u,animationDuration:x,animationEasing:f,onAnimationStart:A,onAnimationEnd:k,animationInterpolateFn:g,animationMatchBy:v,layout:b},(e,s,c)=>{var p;return p=1===s?h:Array.isArray(h)?g(n,s,b):c?h:function(e,t,n){if((0,a.isNumber)(e)){var r=(0,a.isNumber)(t)?t:void 0;return(0,a.interpolate)(r,e,n)}if((0,a.isNullish)(e)||(0,a.isNan)(e)){var i=(0,a.isNumber)(t)?t:void 0;return(0,a.interpolate)(i,0,n)}return e}(h,C,s),y.syncStepValue(p,s),t.createElement(ep,{showLabels:!S,points:d},l.children,t.createElement(eu,{points:e,baseLine:p,needClip:r,clipPathId:o,props:l,animationElapsedTime:s,isAnimating:S||s<1,isEntrance:c}),t.createElement(i.LabelListFromLabelProp,{label:l.label}))}))}function ex(e){var n=e.needClip,r=e.clipPathId,i=e.props,o=(0,t.useRef)(null),a=(0,t.useRef)();return t.createElement(em,{needClip:n,clipPathId:r,props:i,previousPointsRef:o,previousBaselineRef:a})}class ef extends t.PureComponent{render(){var e=this.props,i=e.hide,o=e.dot,a=e.points,l=e.className,d=e.top,p=e.left,u=e.needClip,m=e.xAxisId,x=e.yAxisId,f=e.width,v=e.height,g=e.id,j=e.baseLine,y=e.zIndex;if(i)return null;var b=(0,n.clsx)("recharts-area",l),w=(0,M.getRadiusAndStrokeWidthFromDot)(o),S=w.r,A=w.strokeWidth,k=(0,s.isClipDot)(o),C=2*S+A,T=u?"url(#clipPath-".concat(k?"":"dots-").concat(g,")"):void 0;return t.createElement(G.ZIndexLayer,{zIndex:y},t.createElement(r.Layer,{className:b},u&&t.createElement("defs",null,t.createElement(h.GraphicalItemClipPath,{clipPathId:g,xAxisId:m,yAxisId:x}),!k&&t.createElement("clipPath",{id:"clipPath-dots-".concat(g)},t.createElement("rect",{x:p-C/2,y:d-C/2,width:f+C,height:v+C}))),t.createElement(ex,{needClip:u,clipPathId:g,props:this.props})),t.createElement(c.ActivePoints,{points:a,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:T}),this.props.isRange&&Array.isArray(j)&&t.createElement(c.ActivePoints,{points:j,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:T}))}}function ev(e){var n,r=e.activeDot,i=e.animationBegin,o=e.animationDuration,a=e.animationEasing,l=e.connectNulls,s=e.dot,c=e.fill,d=e.fillOpacity,p=e.hide,u=e.isAnimationActive,x=e.legendType,f=e.stroke,v=e.xAxisId,g=e.yAxisId,j=eo(e,er),y=(0,m.useChartLayout)(),b=(0,B.useChartName)(),w=(0,h.useNeedsClip)(v,g).needClip,S=(0,I.useIsPanorama)(),A=null!=(n=(0,D.useAppSelector)(t=>T(t,e.id,S)))?n:{},k=A.points,C=A.isRange,P=A.baseLine,R=(0,O.usePlotArea)();if("horizontal"!==y&&"vertical"!==y||null==R||"AreaChart"!==b&&"ComposedChart"!==b)return null;var E=R.height,N=R.width,L=R.x,z=R.y;return k&&k.length?t.createElement(ef,ei({},j,{activeDot:r,animationBegin:i,animationDuration:o,animationEasing:a,baseLine:P,connectNulls:l,dot:s,fill:c,fillOpacity:d,height:E,hide:p,layout:y,isAnimationActive:u,isRange:C,legendType:x,needClip:w,points:k,stroke:f,width:N,left:L,top:z,xAxisId:v,yAxisId:g})):null}function eg(e){var t,n=e.areaSettings,r=n.connectNulls,i=n.baseValue,o=n.dataKey,s=e.stackedData,c=e.layout,d=e.chartBaseValue,h=e.xAxis,p=e.yAxis,u=e.displayedData,m=e.dataStartIndex,x=e.xAxisTicks,f=e.yAxisTicks,v=e.bandSize,g=s&&s.length,j=((e,t,n,r,i)=>{var o=null!=n?n:t;if((0,a.isNumber)(o))return o;var l="horizontal"===e?i:r,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===o?d:"dataMax"===o||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===o?s[0]:"dataMax"===o?s[1]:s[0]})(c,d,i,h,p),y="horizontal"===c,b=!1,w=u.map((e,t)=>{if(g)c=s[m+t];else{var n,i,a,c,d,u=(0,l.getValueByDataKey)(e,o);Array.isArray(u)?(c=u,b=!0):c=[j,u]}var w=null!=(n=null==(i=c)?void 0:i[1])?n:null,S=null==w||g&&!r&&null==(0,l.getValueByDataKey)(e,o);return y?{x:(0,l.getCateCoordinateOfLine)({axis:h,ticks:x,bandSize:v,entry:e,index:t}),y:S?null:null!=(d=p.scale.map(w))?d:null,value:c,payload:e}:{x:S?null:null!=(a=h.scale.map(w))?a:null,y:(0,l.getCateCoordinateOfLine)({axis:p,ticks:f,bandSize:v,entry:e,index:t}),value:c,payload:e}});return t=g||b?w.map(e=>{var t,n,r=Array.isArray(e.value)?e.value[0]:null;return y?{x:e.x,y:null!=r&&null!=e.y&&null!=(n=p.scale.map(r))?n:null,payload:e.payload}:{x:null!=r&&null!=(t=h.scale.map(r))?t:null,y:e.y,payload:e.payload}}):y?p.scale.map(j):h.scale.map(j),{points:w,baseLine:null!=t?t:0,isRange:b}}var ej=t.memo(function(e){var n=(0,L.resolveDefaultProps)(e,es),r=(0,I.useIsPanorama)();return t.createElement(z.RegisterGraphicalItemId,{id:n.id,type:"area"},e=>{var i,o,a,s,c;return t.createElement(t.Fragment,null,t.createElement(P.SetLegendPayload,{legendPayload:(i=n.dataKey,o=n.name,a=n.stroke,s=n.fill,c=n.legendType,[{inactive:n.hide,dataKey:i,type:c,color:ec(a,s),value:(0,l.getTooltipNameProp)(o,i),payload:n}])}),t.createElement(ed,{dataKey:n.dataKey,data:n.data,stroke:n.stroke,strokeWidth:n.strokeWidth,fill:n.fill,name:n.name,hide:n.hide,unit:n.unit,formatter:n.formatter,tooltipType:n.tooltipType,id:e}),t.createElement(q.SetCartesianGraphicalItem,{type:"area",id:e,data:n.data,dataKey:n.dataKey,xAxisId:n.xAxisId,yAxisId:n.yAxisId,zAxisId:0,stackId:(0,l.getNormalizedStackId)(n.stackId),hide:n.hide,barSize:void 0,baseValue:n.baseValue,isPanorama:r,connectNulls:n.connectNulls}),t.createElement(ev,ei({},n,{id:e})))})},W.propsAreEqual);ej.displayName="Area"},990865,378097,e=>{"use strict";var t=e.i(391398);function n({color:e,id:r,withGradient:i,fillOpacity:o}){return(0,t.jsx)(t.Fragment,{children:i?(0,t.jsxs)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,t.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,t.jsx)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,t.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}n.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,n],990865);var r=e.i(191788),i=e.i(471970),o=e.i(437515),a=["axis"],l=(0,r.forwardRef)((e,t)=>r.createElement(o.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:a,tooltipPayloadSearcher:i.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["AreaChart",0,l],378097)},886196,e=>{"use strict";var t=e.i(648863),n=e.i(804052),r=e.i(391398);let i={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Title,{order:1,children:"This is h1 title"}),(0,r.jsx)(n.Title,{order:2,children:"This is h2 title"}),(0,r.jsx)(n.Title,{order:3,children:"This is h3 title"}),(0,r.jsx)(n.Title,{order:4,children:"This is h4 title"}),(0,r.jsx)(n.Title,{order:5,children:"This is h5 title"}),(0,r.jsx)(n.Title,{order:6,children:"This is h6 title"})]})}},o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Title,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,r.jsx)(n.Title,{size:"h4",children:"H1 heading with h4 font-size"}),(0,r.jsx)(n.Title,{size:16,children:"H1 heading with 16px size"}),(0,r.jsx)(n.Title,{size:"xs",children:"H1 heading with xs size"})]})},code:`
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
`};var a=e.i(232471);let l={type:"configurator",component:function(e){return(0,r.jsx)(a.Box,{maw:400,children:(0,r.jsx)(n.Title,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
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
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]},s={type:"configurator",component:function(e){return(0,r.jsx)(n.Title,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var c=(0,t.__exportAll)({lineClamp:()=>l,size:()=>o,textWrap:()=>s,usage:()=>i});e.s(["TitleDemos",0,c],886196)},943664,e=>{"use strict";var t=e.i(648863),n=e.i(883364),r=e.i(391398);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{size:"xl",fw:700,children:"Charizard (Pokémon)"}),(0,r.jsx)(n.Text,{c:"dimmed",children:"Charizard description from Bulbapedia"}),(0,r.jsx)(n.Text,{size:"sm",mt:"md",children:"Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."}),(0,r.jsx)(n.Text,{size:"sm",mt:"md",children:"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."})]})}var o=e.i(232471),a=e.i(19300);let l={type:"configurator",component:function(e){return(0,r.jsx)(o.Box,{maw:400,mx:"auto",children:(0,r.jsx)(a.ScrollArea,{h:250,...e,children:(0,r.jsx)(i,{})})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"overscrollBehavior",type:"segmented",initialValue:"auto",libraryValue:"auto",data:[{value:"auto",label:"Auto"},{value:"contain",label:"Contain"},{value:"none",label:"None"}]},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},s={type:"code",component:function(){return(0,r.jsx)(a.ScrollArea,{w:300,h:200,children:(0,r.jsx)(o.Box,{w:600,children:(0,r.jsx)(i,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`};var c=e.i(191788),d=e.i(485108),h=e.i(725695),p=e.i(671640);let u={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,r.jsxs)(p.Stack,{align:"center",children:[(0,r.jsx)(a.ScrollArea,{w:300,h:200,viewportRef:e,children:(0,r.jsx)(i,{})}),(0,r.jsxs)(h.Group,{justify:"center",children:[(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"}),children:"Scroll to bottom"}),(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"}),children:"Scroll to center"}),(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:0,behavior:"smooth"}),children:"Scroll to top"})]})]})},code:`
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
`};var m=e.i(301388);let x={type:"code",component:function(){let[e,t]=(0,c.useState)({x:0,y:0});return(0,r.jsxs)(p.Stack,{align:"center",children:[(0,r.jsx)(a.ScrollArea,{w:300,h:200,onScrollPositionChange:t,children:(0,r.jsx)(o.Box,{w:600,children:(0,r.jsx)(i,{})})}),(0,r.jsxs)(n.Text,{children:["Scroll position: ",(0,r.jsx)(m.Code,{children:`{ x: ${e.x}, y: ${e.y} }`})]})]})},code:`
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`};var f=e.i(692385);let v={type:"code",component:function(){let[e,t]=(0,f.useCounter)(3,{min:0,max:10}),n=Array(e).fill(0).map((e,t)=>(0,r.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.ScrollArea.Autosize,{mah:300,maw:400,mx:"auto",children:n}),(0,r.jsxs)(h.Group,{justify:"center",mt:"md",children:[(0,r.jsx)(d.Button,{color:"red",onClick:t.decrement,children:"Remove paragraph"}),(0,r.jsx)(d.Button,{onClick:t.increment,children:"Add paragraph"})]})]})},code:`
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`};var g={scrollbar:"m_3dc2e23a",thumb:"m_b848b7ea",corner:"m_342d2ec1"};let j={type:"code",component:function(){return(0,r.jsx)(a.ScrollArea,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:g,children:(0,r.jsx)(o.Box,{w:600,children:(0,r.jsx)(i,{})})})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`,language:"scss"}]};var y=e.i(841209),b=e.i(284629);let w=["🍎 Apples","🍌 Bananas","🍊 Oranges","🥛 Milk","🍞 Bread","🥚 Eggs","🍗 Chicken","🥩 Beef","🍝 Pasta","🍚 Rice","🥔 Potatoes","🧅 Onions","🍅 Tomatoes","🥒 Cucumbers","🥕 Carrots","🥬 Lettuce","🍃 Spinach","🥦 Broccoli","🧀 Cheese","🍦 Yogurt","🧈 Butter","🍚 Sugar","🧂 Salt","🌶️ Pepper","☕ Coffee","🍵 Tea","🥤 Juice","💧 Water","🍪 Cookies","🍫 Chocolate"],S={type:"code",component:function(){let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(""),[i,o]=(0,c.useState)(-1),l=w.filter(e=>e.toLowerCase().includes(t.toLowerCase())),s=l.map((e,t)=>(0,r.jsx)(b.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===i?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.TextInput,{value:t,onChange:e=>{n(e.currentTarget.value),o(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),o(t=>{let n=t+1>=l.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n})),"ArrowUp"===t.key&&(t.preventDefault(),o(t=>{let n=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n}))},placeholder:"Search groceries"}),(0,r.jsx)(a.ScrollArea,{h:150,type:"always",mt:"md",viewportRef:e,children:s})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries: string[] = [
  '🍎 Apples',
  '🍌 Bananas',
  '🍊 Oranges',
  '🥛 Milk',
  '🍞 Bread',
  '🥚 Eggs',
  '🍗 Chicken',
  '🥩 Beef',
  '🍝 Pasta',
  '🍚 Rice',
  '🥔 Potatoes',
  '🧅 Onions',
  '🍅 Tomatoes',
  '🥒 Cucumbers',
  '🥕 Carrots',
  '🥬 Lettuce',
  '🍃 Spinach',
  '🥦 Broccoli',
  '🧀 Cheese',
  '🍦 Yogurt',
  '🧈 Butter',
  '🍚 Sugar',
  '🧂 Salt',
  '🌶️ Pepper',
  '☕ Coffee',
  '🍵 Tea',
  '🥤 Juice',
  '💧 Water',
  '🍪 Cookies',
  '🍫 Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <>
      <TextInput
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setHovered(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current + 1 >= filtered.length ? current : current + 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current - 1 < 0 ? current : current - 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }
        }}
        placeholder="Search groceries"
      />
      <ScrollArea h={150} type="always" mt="md" viewportRef={viewportRef}>
        {items}
      </ScrollArea>
    </>
  );
}
`,centered:!0,maxWidth:340};var A=e.i(392862);let k=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],C={type:"code",component:function(){let e=(0,c.useRef)(null),[t,i]=(0,c.useState)(""),[l,s]=(0,c.useState)(!1),[d,h]=(0,c.useState)(-1),p=k.filter(e=>e.toLowerCase().includes(t.toLowerCase())),u=p.map((e,t)=>(0,r.jsx)(b.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===d?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,r.jsxs)(A.Popover,{width:"target",opened:l,children:[(0,r.jsx)(A.Popover.Target,{children:(0,r.jsx)(y.TextInput,{value:t,onFocus:()=>s(!0),onBlur:()=>s(!1),onChange:e=>{i(e.currentTarget.value),h(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),h(t=>{let n=t+1>=p.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n})),"ArrowUp"===t.key&&(t.preventDefault(),h(t=>{let n=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n}))},placeholder:"Search groceries"})}),(0,r.jsx)(A.Popover.Dropdown,{p:0,children:(0,r.jsx)(a.ScrollArea.Autosize,{viewportRef:e,mah:200,type:"always",scrollbars:"y",children:(0,r.jsx)(o.Box,{px:"xs",py:5,children:u.length>0?u:(0,r.jsx)(n.Text,{c:"dimmed",children:"Nothing found"})})})})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,maxWidth:340},T={type:"code",component:function(){return(0,r.jsx)(a.ScrollArea,{w:300,h:200,scrollbars:"y",children:(0,r.jsx)(o.Box,{w:600,children:(0,r.jsx)(i,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`};var I=e.i(257177);let B={type:"code",component:function(){let[e,t]=(0,c.useState)(0),[i,l]=(0,c.useState)(0),[s,d]=(0,c.useState)(0),[u,m]=(0,c.useState)(0);return(0,r.jsxs)(p.Stack,{align:"center",children:[(0,r.jsxs)(h.Group,{children:[(0,r.jsxs)(I.Badge,{color:"blue",children:["Top: ",e]}),(0,r.jsxs)(I.Badge,{color:"green",children:["Bottom: ",i]}),(0,r.jsxs)(I.Badge,{color:"orange",children:["Left: ",s]}),(0,r.jsxs)(I.Badge,{color:"grape",children:["Right: ",u]})]}),(0,r.jsx)(a.ScrollArea,{h:200,w:300,onTopReached:()=>t(e=>e+1),onBottomReached:()=>l(e=>e+1),onLeftReached:()=>d(e=>e+1),onRightReached:()=>m(e=>e+1),children:(0,r.jsx)(o.Box,{w:600,children:Array(50).fill(0).map((e,t)=>(0,r.jsxs)(n.Text,{children:["Line ",t+1," - This is a long line that requires horizontal scrolling"]},t))})})]})},code:`
import { useState } from 'react';
import { Badge, Box, Group, ScrollArea, Stack, Text } from '@mantine/core';

function Demo() {
  const [topReached, setTopReached] = useState(0);
  const [bottomReached, setBottomReached] = useState(0);
  const [leftReached, setLeftReached] = useState(0);
  const [rightReached, setRightReached] = useState(0);

  return (
    <Stack align="center">
      <Group>
        <Badge color="blue">Top: {topReached}</Badge>
        <Badge color="green">Bottom: {bottomReached}</Badge>
        <Badge color="orange">Left: {leftReached}</Badge>
        <Badge color="grape">Right: {rightReached}</Badge>
      </Group>

      <ScrollArea
        h={200}
        w={300}
        onTopReached={() => setTopReached((c) => c + 1)}
        onBottomReached={() => setBottomReached((c) => c + 1)}
        onLeftReached={() => setLeftReached((c) => c + 1)}
        onRightReached={() => setRightReached((c) => c + 1)}
      >
        <Box w={600}>
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Text key={i}>
                Line {i + 1} - This is a long line that requires horizontal scrolling
              </Text>
            ))}
        </Box>
      </ScrollArea>
    </Stack>
  );
}
`},P={type:"code",component:function(){return(0,r.jsx)(a.ScrollArea,{h:200,startScrollPosition:{y:250},children:(0,r.jsx)(i,{})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,centered:!0,maxWidth:300},D={type:"configurator",component:function(e){return(0,r.jsx)(a.ScrollArea,{w:300,h:200,type:"always",scrollbars:"y",...e,children:(0,r.jsx)(i,{})})},centered:!0,code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbars="y"
      {{props}}
    >
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"verticalScrollbarPosition",type:"segmented",initialValue:"right",libraryValue:null,data:["left","right"]},{prop:"offsetScrollbars",type:"boolean",initialValue:!0,libraryValue:null}]};var R=(0,t.__exportAll)({autosizePopover:()=>C,boundaries:()=>B,horizontal:()=>s,maxHeight:()=>v,scrollIntoView:()=>S,scrollPosition:()=>x,scrollTo:()=>u,scrollbars:()=>T,startScrollPosition:()=>P,stylesApi:()=>j,usage:()=>l,verticalScrollbarPosition:()=>D});e.s(["ScrollAreaDemos",0,R],943664)},559902,e=>{"use strict";var t=e.i(648863),n=e.i(391398),r=e.i(990865),i={root:"m_f9458cfe"},o=e.i(232471),a=e.i(481178),l=e.i(275519),s=e.i(317477),c=e.i(44091),d=e.i(391466),h=e.i(321020),p=e.i(378097),u=e.i(723451),m=e.i(191788);let x={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},f=(0,a.createVarsResolver)((e,{color:t,data:n,trendColors:r})=>{let i,o;return{root:{"--chart-color":r?(0,s.getThemeColor)((i=n[0],o=n[n.length-1],null===i||null===o?r.neutral||r.positive:i<o?r.positive:i>o?r.negative:r.neutral||r.positive),e):t?(0,s.getThemeColor)(t,e):void 0}}}),v=(0,l.factory)(e=>{let t=(0,c.useProps)("Sparkline",x,e),{classNames:a,className:l,style:s,styles:v,unstyled:g,vars:j,data:y,withGradient:b,fillOpacity:w,curveType:S,strokeWidth:A,trendColors:k,connectNulls:C,areaProps:T,attributes:I,...B}=t,P=(0,d.useStyles)({name:"Sparkline",classes:i,props:t,className:l,style:s,classNames:a,styles:v,unstyled:g,attributes:I,vars:j,varsResolver:f}),D=(0,m.useId)(),R=(0,m.useMemo)(()=>y.map((e,t)=>({value:e,index:t})),[y]);return(0,n.jsx)(o.Box,{...P("root"),...B,dir:"ltr",children:(0,n.jsx)(u.ResponsiveContainer,{children:(0,n.jsxs)(p.AreaChart,{data:R,children:[(0,n.jsx)(h.Area,{dataKey:"value",type:S,fill:`url(#${D})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:C,strokeWidth:A,fillOpacity:1,activeDot:!1,...T}),(0,n.jsx)("defs",{children:(0,n.jsx)(r.AreaGradient,{id:D,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:w,withGradient:b})})]})})})});v.displayName="@mantine/charts/Sparkline",v.classes=i,v.varsResolver=f;let g={type:"configurator",component:function(e){return(0,n.jsx)(v,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      {{props}}
    />
  );
}
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},j={type:"code",component:function(){return(0,n.jsx)(v,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m_b7fa7826"})},code:[{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
`,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var y=e.i(671640),b=e.i(883364);let w=[10,20,40,20,40,10,50],S=[50,40,20,40,20,40,10],A=[10,20,40,20,40,10,50,5,10],k={type:"code",component:function(){return(0,n.jsxs)(y.Stack,{gap:"sm",children:[(0,n.jsx)(b.Text,{children:"Positive trend:"}),(0,n.jsx)(v,{w:200,h:60,data:w,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(b.Text,{mt:"md",children:"Negative trend:"}),(0,n.jsx)(v,{w:200,h:60,data:S,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(b.Text,{mt:"md",children:"Neutral trend:"}),(0,n.jsx)(v,{w:200,h:60,data:A,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
`,centered:!0};var C=(0,t.__exportAll)({colorSchemeColor:()=>j,trendColors:()=>k,usage:()=>g});e.s(["SparklineDemos",0,C],559902)},68040,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(832112),i=e.i(491607),o=e.i(574280),a=e.i(235636),l=e.i(943664),s=e.i(559902),c=e.i(572467),d=e.i(886196);e.i(603441);var h=e.i(62558);e.i(457450);var p=e.i(418026);let u=(0,h.Layout)(p.MDX_DATA.Changelog740);function m(e){let h={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:p,InstallScript:u}=h;return p||x("Demo",!0),u||x("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.h2,{id:"mantinecharts",children:"@mantine/charts"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.a,{href:"/charts/getting-started/",children:"@mantine/charts"})," package provides a set of components\nto build charts and graphs. All components are based on ",(0,t.jsx)(h.a,{href:"https://recharts.org/en-US/",children:"recharts"}),".\nCurrently, the package provides ",(0,t.jsx)(h.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,t.jsx)(h.a,{href:"/charts/bar-chart",children:"BarChart"}),",\n",(0,t.jsx)(h.a,{href:"/charts/line-chart",children:"LineChart"})," and ",(0,t.jsx)(h.a,{href:"/charts/sparkline",children:"Sparkline"})," components.\nMore components will be added in the next minor releases."]}),"\n",(0,t.jsx)(h.h2,{id:"areachart-component",children:"AreaChart component"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.a,{href:"/charts/area-chart",children:"AreaChart"})," component:"]}),"\n",(0,t.jsx)(p,{data:r.AreaChartDemos.stacked}),"\n",(0,t.jsx)(h.h2,{id:"linechart-component",children:"LineChart component"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.a,{href:"/charts/line-chart",children:"LineChart"})," component:"]}),"\n",(0,t.jsx)(p,{data:a.LineChartDemos.legend}),"\n",(0,t.jsx)(h.h2,{id:"barchart-component",children:"BarChart component"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.a,{href:"/charts/bar-chart",children:"BarChart"})," component:"]}),"\n",(0,t.jsx)(p,{data:i.BarChartDemos.vertical}),"\n",(0,t.jsx)(h.h2,{id:"sparkline-component",children:"Sparkline component"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.a,{href:"/charts/sparkline",children:"Sparkline"})," component:"]}),"\n",(0,t.jsx)(p,{data:s.SparklineDemos.usage}),"\n",(0,t.jsx)(h.h2,{id:"oklch-colors-support",children:"OKLCH colors support"}),"\n",(0,t.jsxs)(h.p,{children:["You can now use ",(0,t.jsx)(h.a,{href:"https://oklch.com/",children:"OKLCH"})," colors in ",(0,t.jsx)(h.code,{children:"theme.colors"}),".\nOKLCH color model has ",(0,t.jsx)(h.a,{href:"https://caniuse.com/mdn-css_types_color_oklch",children:"88.18% browser support"}),",\nit is supported in all modern browsers. OKLCH model provides 30% more colors than HSL model and\nhas ",(0,t.jsx)(h.a,{href:"https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl",children:"several other advantages"}),"."]}),"\n",(0,t.jsx)(h.p,{children:"Example of adding OKLCH color to the theme:"}),"\n",(0,t.jsx)(p,{data:c.ThemingDemos.oklch}),"\n",(0,t.jsx)(h.h2,{id:"autocontrast",children:"autoContrast"}),"\n",(0,t.jsxs)(h.p,{children:["New ",(0,t.jsx)(h.code,{children:"theme.autoContrast"})," property controls whether text color should be changed based on the given ",(0,t.jsx)(h.code,{children:"color"})," prop\nin the following components:"]}),"\n",(0,t.jsxs)(h.ul,{children:["\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/action-icon",children:"ActionIcon"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/alert",children:"Alert"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/avatar",children:"Avatar"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/badge",children:"Badge"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/button",children:"Button"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/chip",children:"Chip"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/nav-link",children:"NavLink"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/theme-icon",children:"ThemeIcon"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/checkbox",children:"Checkbox"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/radio",children:"Radio"})," with ",(0,t.jsx)(h.code,{children:'variant="filled"'})," only"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/tabs",children:"Tabs"})," with ",(0,t.jsx)(h.code,{children:'variant="pills"'})," only"]}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/segmented-control",children:"SegmentedControl"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/stepper",children:"Stepper"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/pagination",children:"Pagination"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/progress",children:"Progress"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/indicator",children:"Indicator"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/core/timeline",children:"Timeline"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"/x/spotlight",children:"Spotlight"})}),"\n",(0,t.jsxs)(h.li,{children:["All ",(0,t.jsx)(h.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components that are based on ",(0,t.jsx)(h.a,{href:"/dates/calendar",children:"Calendar"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"autoContrast"})," can be set globally on the theme level or individually for each component via ",(0,t.jsx)(h.code,{children:"autoContrast"})," prop,\nexcept for ",(0,t.jsx)(h.a,{href:"/x/spotlight",children:"Spotlight"})," and ",(0,t.jsx)(h.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components, which only support global theme setting."]}),"\n",(0,t.jsx)(p,{data:c.ThemingDemos.autoContrast}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"autoContrast"})," checks whether the given color luminosity is above or below the ",(0,t.jsx)(h.code,{children:"luminanceThreshold"})," value\nand changes text color to either ",(0,t.jsx)(h.code,{children:"theme.white"})," or ",(0,t.jsx)(h.code,{children:"theme.black"})," accordingly:"]}),"\n",(0,t.jsx)(p,{data:c.ThemingDemos.luminanceThreshold}),"\n",(0,t.jsx)(h.h2,{id:"color-functions-improvements",children:"Color functions improvements"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"alpha"}),", ",(0,t.jsx)(h.code,{children:"lighten"})," and ",(0,t.jsx)(h.code,{children:"darken"})," functions now support CSS variables (with ",(0,t.jsx)(h.a,{href:"https://caniuse.com/mdn-css_types_color_color-mix",children:"color-mix"}),") and OKLCH colors.\nAll functions are available both in ",(0,t.jsx)(h.code,{children:"@mantine/core"})," (",(0,t.jsx)(h.code,{children:".ts"}),"/",(0,t.jsx)(h.code,{children:".js"})," files) and ",(0,t.jsx)(h.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," (",(0,t.jsx)(h.code,{children:".css"})," files, requires version 1.12.0 or higher)."]}),"\n",(0,t.jsxs)(h.p,{children:["In ",(0,t.jsx)(h.code,{children:".css"})," files:"]}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-scss",children:".demo-alpha {\n  color: alpha(var(--mantine-color-red-4), 0.5);\n  border: 1px solid alpha(#ffc, 0.2);\n}\n\n.demo-lighten-darken {\n  color: lighten(var(--mantine-color-red-4), 0.5);\n  border: 1px solid darken(#ffc, 0.2);\n}\n"})}),"\n",(0,t.jsx)(h.p,{children:"Will be transformed to:"}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-scss",children:".demo-alpha {\n  color: color-mix(\n    in srgb,\n    var(--mantine-color-red-4),\n    transparent 50%\n  );\n  border: 1px solid color-mix(in srgb, #ffc, transparent 80%);\n}\n\n.demo-lighten-darken {\n  color: color-mix(in srgb, var(--mantine-color-red-4), white 50%);\n  border: 1px solid color-mix(in srgb, #ffc, black 20%);\n}\n"})}),"\n",(0,t.jsxs)(h.p,{children:["In ",(0,t.jsx)(h.code,{children:".ts"}),"/",(0,t.jsx)(h.code,{children:".js"})," files:"]}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-tsx",children:"import { alpha, lighten } from '@mantine/core';\n\nalpha('#4578FC', 0.45); // -> rgba(69, 120, 252, 0.45)\nalpha('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), transparent 26%)\n\nlighten('#4578FC', 0.45); // -> #a3c1ff\nlighten('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), white 74%)\n"})}),"\n",(0,t.jsxs)(h.p,{children:["Note that ",(0,t.jsx)(h.code,{children:"alpha"})," function is a replacement for ",(0,t.jsx)(h.code,{children:"rgba"}),". It was renamed to\nhave a more clear meaning, as it can now be used with CSS variables and OKLCH colors.\n",(0,t.jsx)(h.code,{children:"rgba"})," function is still available as an alias for ",(0,t.jsx)(h.code,{children:"alpha"})," function."]}),"\n",(0,t.jsx)(h.h2,{id:"enhancegetinputprops",children:"enhanceGetInputProps"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"@mantine/form"})," now supports ",(0,t.jsx)(h.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),". ",(0,t.jsx)(h.code,{children:"enhanceGetInputProps"})," is a function that can be used to add additional props to the object returned by ",(0,t.jsx)(h.code,{children:"form.getInputProps"}),".\nYou can define it in ",(0,t.jsx)(h.code,{children:"useForm"})," hook options. Its argument is an object with the following properties:"]}),"\n",(0,t.jsxs)(h.ul,{children:["\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"inputProps"})," – object returned by ",(0,t.jsx)(h.code,{children:"form.getInputProps"})," by default"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"field"})," – field path, first argument of ",(0,t.jsx)(h.code,{children:"form.getInputProps"}),", for example ",(0,t.jsx)(h.code,{children:"name"}),", ",(0,t.jsx)(h.code,{children:"user.email"}),", ",(0,t.jsx)(h.code,{children:"users.0.name"})]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"options"})," – second argument of ",(0,t.jsx)(h.code,{children:"form.getInputProps"}),", for example ",(0,t.jsx)(h.code,{children:"{ type: 'checkbox' }"}),", can be used to pass additional\noptions to ",(0,t.jsx)(h.code,{children:"enhanceGetInputProps"})," function"]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"form"})," – form instance"]}),"\n"]}),"\n",(0,t.jsxs)(h.p,{children:["Example of using ",(0,t.jsx)(h.code,{children:"enhanceGetInputProps"})," to disable input based on field path:"]}),"\n",(0,t.jsx)(p,{data:o.FormDemos.enhanceGetInputProps}),"\n",(0,t.jsxs)(h.p,{children:["Example of using ",(0,t.jsx)(h.code,{children:"enhanceGetInputProps"})," to add additional props to the input based on option passed to ",(0,t.jsx)(h.code,{children:"form.getInputProps"}),":"]}),"\n",(0,t.jsx)(p,{data:o.FormDemos.enhanceGetInputPropsOptions}),"\n",(0,t.jsx)(h.h2,{id:"forminitialize",children:"form.initialize"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"@mantine/form"})," now supports ",(0,t.jsx)(h.code,{children:"form.initialize"})," handler."]}),"\n",(0,t.jsxs)(h.p,{children:["When called ",(0,t.jsx)(h.code,{children:"form.initialize"})," handler sets ",(0,t.jsx)(h.code,{children:"initialValues"})," and ",(0,t.jsx)(h.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,t.jsx)(h.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,t.jsx)(p,{data:o.FormDemos.initialize}),"\n",(0,t.jsxs)(h.p,{children:["Example with ",(0,t.jsx)(h.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,t.jsxs)(h.p,{children:["Note that ",(0,t.jsx)(h.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,t.jsx)(h.code,{children:"readOnly"})," or ",(0,t.jsx)(h.code,{children:"disabled"})," on all form fields before\n",(0,t.jsx)(h.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,t.jsx)(h.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,t.jsx)(p,{data:o.FormDemos.enhanceGetInputPropsForm}),"\n",(0,t.jsx)(h.h2,{id:"valibot-form-resolver",children:"valibot form resolver"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.code,{children:"@mantine/form"})," now supports ",(0,t.jsx)(h.a,{href:"https://www.npmjs.com/package/mantine-form-valibot-resolver",children:"validbot schema resolver"}),":"]}),"\n",(0,t.jsx)(u,{packages:"valibot mantine-form-valibot-resolver"}),"\n",(0,t.jsx)(h.p,{children:"Basic fields validation:"}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport {\n  email,\n  minLength,\n  minValue,\n  number,\n  object,\n  string,\n} from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst schema = object({\n  name: string([minLength(2, 'Name should have at least 2 letters')]),\n  email: string([email('Invalid email')]),\n  age: number([\n    minValue(18, 'You must be at least 18 to create an account'),\n  ]),\n});\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n    age: 16,\n  },\n  validate: valibotResolver(schema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  name: 'Name should have at least 2 letters',\n//  email: 'Invalid email',\n//  age: 'You must be at least 18 to create an account'\n// }\n"})}),"\n",(0,t.jsx)(h.p,{children:"Nested fields validation"}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport { minLength, object, string } from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst nestedSchema = object({\n  nested: object({\n    field: string([\n      minLength(2, 'Field should have at least 2 letters'),\n    ]),\n  }),\n});\n\nconst form = useForm({\n  initialValues: {\n    nested: {\n      field: '',\n    },\n  },\n  validate: valibotResolver(nestedSchema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  'nested.field': 'Field should have at least 2 letters',\n// }\n"})}),"\n",(0,t.jsx)(h.p,{children:"List fields validation:"}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport { array, minLength, object, string } from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst listSchema = object({\n  list: array(\n    object({\n      name: string([\n        minLength(2, 'Name should have at least 2 letters'),\n      ]),\n    })\n  ),\n});\n\nconst form = useForm({\n  initialValues: {\n    list: [{ name: '' }],\n  },\n  validate: valibotResolver(listSchema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  'list.0.name': 'Name should have at least 2 letters',\n// }\n"})}),"\n",(0,t.jsx)(h.h2,{id:"scrollarea-scrollbars-prop",children:"ScrollArea scrollbars prop"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,t.jsx)(h.code,{children:"scrollbars"})," prop, which allows controlling directions at which scrollbars should be rendered.\nSupported values are ",(0,t.jsx)(h.code,{children:"x"}),", ",(0,t.jsx)(h.code,{children:"y"})," and ",(0,t.jsx)(h.code,{children:"xy"}),". If ",(0,t.jsx)(h.code,{children:'scrollbars="y"'})," is set, only the vertical scrollbar will be rendered, and it will not be possible to scroll horizontally:"]}),"\n",(0,t.jsx)(p,{data:l.ScrollAreaDemos.scrollbars}),"\n",(0,t.jsx)(h.h2,{id:"title-lineclamp-prop",children:"Title lineClamp prop"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.a,{href:"/core/title",children:"Title"})," component now supports ",(0,t.jsx)(h.code,{children:"lineClamp"})," prop, which allows truncating text after a specified number of lines:"]}),"\n",(0,t.jsx)(p,{data:d.TitleDemos.lineClamp}),"\n",(0,t.jsx)(h.h2,{id:"primary-color-css-variables",children:"Primary color CSS variables"}),"\n",(0,t.jsx)(h.p,{children:"CSS variables for primary color are now available, you can use the following variables in your styles:"}),"\n",(0,t.jsx)(h.pre,{children:(0,t.jsx)(h.code,{className:"language-scss",children:"--mantine-primary-color-0\n--mantine-primary-color-1\n--mantine-primary-color-2\n--mantine-primary-color-3\n--mantine-primary-color-4\n--mantine-primary-color-5\n--mantine-primary-color-6\n--mantine-primary-color-7\n--mantine-primary-color-8\n--mantine-primary-color-9\n--mantine-primary-color-contrast\n--mantine-primary-color-filled\n--mantine-primary-color-filled-hover\n--mantine-primary-color-light\n--mantine-primary-color-light-hover\n--mantine-primary-color-light-color\n"})}),"\n",(0,t.jsx)(h.h2,{id:"help-center",children:"Help center"}),"\n",(0,t.jsxs)(h.p,{children:[(0,t.jsx)(h.a,{href:"https://help.mantine.dev/",children:"Help center"})," is a new website with guides, tutorials and frequently\nasked questions. Currently, it has 14 questions, more FAQs will be added in the next releases."]}),"\n",(0,t.jsxs)(h.ul,{children:["\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/data-grid-i-need",children:"Is there DataGrid component that I can use with Mantine?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/mantine-provider-missing",children:"MantineProvider was not found in component tree. What should I do?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/server-components",children:"Can I use Mantine components as server components?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-cra",children:"Can I use Mantine with Create React App (CRA)?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-setup-stylelint",children:"How can I lint CSS files?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-update-dependencies",children:"How to update Mantine dependencies?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-add-hover-styles",children:"How can I add hover styles to an element?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-get-color-scheme-value-in-js",children:"How can I get current color scheme value in JavaScript?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"Can I use private CSS variables to style components?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/disable-all-inputs-in-form",children:"How can I disable all inputs/inputs group inside form?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-use-dropzone-with-form",children:"How to use Dropzone with @mantine/form?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-call-function-when-modal-closes",children:"How to call a function when Modal/Drawer closes and animation completes?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/how-to-prevent-modal-from-closing",children:"How to prevent Modal from closing?"})}),"\n",(0,t.jsx)(h.li,{children:(0,t.jsx)(h.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"What is the difference between searchable Select and Autocomplete?"})}),"\n"]}),"\n",(0,t.jsx)(h.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(h.ul,{children:["\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/form/get-input-props",children:"form.getInputProps"})," guide now has a separate page. It describes ",(0,t.jsx)(h.code,{children:"form.getInputProps"}),", ",(0,t.jsx)(h.code,{children:"enhanceGetInputProps"})," and how to integrate ",(0,t.jsx)(h.code,{children:"form.getInputProps"})," with custom inputs."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/hooks/use-merged-ref/#assignref-function",children:"assignRef"})," function documentation has been added."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/hooks/use-move/#clampusemoveposition",children:"clampUseMovePosition"})," function documentation has been added."]}),"\n",(0,t.jsxs)(h.li,{children:["Additional documentation about hook arguments and types has been added to ",(0,t.jsx)(h.a,{href:"/hooks/use-hotkeys",children:"use-hotkeys"}),"."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/hooks/use-list-state/#useliststatehandlers-type",children:"UseListStateHandlers type"})," documentation has been added."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/guides/functions-reference",children:"Functions reference"})," page has been added. Currently, it contains all functions that are exported from ",(0,t.jsx)(h.code,{children:"@mantine/hooks"})," package. It is planned to document functions from other packages in next releases."]}),"\n",(0,t.jsxs)(h.li,{children:["Examples on how to change the close icon have been added to ",(0,t.jsx)(h.a,{href:"/core/drawer/#change-close-icon",children:"Drawer"})," and ",(0,t.jsx)(h.a,{href:"/core/modal/#change-close-icon",children:"Modal"})," components."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"variantColorsResolver"})," demos have been added to ",(0,t.jsx)(h.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,t.jsx)(h.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and ",(0,t.jsx)(h.a,{href:"/core/badge",children:"Badge"})," components."]}),"\n"]}),"\n",(0,t.jsx)(h.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(h.ul,{children:["\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/x/tiptap",children:"RichTextEditor"})," no longer depends on ",(0,t.jsx)(h.code,{children:"@tabler/icons"})," package. It is no longer required to install ",(0,t.jsx)(h.code,{children:"@tabler/icons"})," package to use ",(0,t.jsx)(h.code,{children:"RichTextEditor"})," component. Icons used in the editor are now a part of the ",(0,t.jsx)(h.code,{children:"@mantine/tiptap"})," package. This change improves bundling performance in several cases (mostly when using ",(0,t.jsx)(h.code,{children:"RichTextEditor"})," in Next.js apps)."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/badge",children:"Badge"})," component now supports ",(0,t.jsx)(h.code,{children:"circle"})," prop which makes the badge round."]}),"\n",(0,t.jsxs)(h.li,{children:["You can now reference theme values in ",(0,t.jsx)(h.code,{children:"ff"})," ",(0,t.jsx)(h.a,{href:"/styles/style-props",children:"style prop"})," with ",(0,t.jsx)(h.code,{children:"mono"}),", ",(0,t.jsx)(h.code,{children:"text"})," and ",(0,t.jsx)(h.code,{children:"heading"})," values: ",(0,t.jsx)(h.code,{children:'<Box ff="mono" />'}),"."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/x/tiptap",children:"RichTextEditor"})," now has ",(0,t.jsx)(h.code,{children:"RichTextEditor.Undo"})," and ",(0,t.jsx)(h.code,{children:"RichTextEditor.Redo"})," controls."]}),"\n",(0,t.jsxs)(h.li,{children:["A new ",(0,t.jsx)(h.code,{children:"luminance"})," ",(0,t.jsx)(h.a,{href:"/styles/color-functions",children:"color function"})," was added. It returns color luminance as a number between 0 and 1."]}),"\n",(0,t.jsxs)(h.li,{children:["All components now support new ",(0,t.jsx)(h.code,{children:"flex"})," ",(0,t.jsx)(h.a,{href:"/styles/style-props",children:"style prop"})," which allows setting ",(0,t.jsx)(h.code,{children:"flex"})," CSS property on the root element."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/collapse",children:"Collapse"})," markup was reduced to single element, it can now be used in contexts that were previously not supported, for example, table rows."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.code,{children:"stepHoldDelay"})," and ",(0,t.jsx)(h.code,{children:"stepHoldInterval"})," props have been added to ",(0,t.jsx)(h.a,{href:"/core/number-input",children:"NumberInput"}),"."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"https://github.com/mantinedev/mantine-form-zod-resolver",children:"mantine-form-zod-resolver"})," now supports ",(0,t.jsx)(h.code,{children:"errorPriority"})," configuration which allows controlling the order of errors specified in the schema. This feature requires updating ",(0,t.jsx)(h.code,{children:"mantine-form-zod-resolver"})," to version 1.1.0 or higher."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/close-button",children:"CloseButton"})," now supports ",(0,t.jsx)(h.code,{children:"icon"})," prop, which allows overriding default icon. It is useful when it is not possible to replace ",(0,t.jsx)(h.code,{children:"CloseButton"}),", for example, in ",(0,t.jsx)(h.a,{href:"/core/drawer",children:"Drawer"})," component."]}),"\n",(0,t.jsxs)(h.li,{children:[(0,t.jsx)(h.a,{href:"/core/select/#onchange-handler",children:"Select"})," component now calls ",(0,t.jsx)(h.code,{children:"onChange"})," with an additional argument – option object. It contains ",(0,t.jsx)(h.code,{children:"label"}),", ",(0,t.jsx)(h.code,{children:"value"})," and optional ",(0,t.jsx)(h.code,{children:"disabled"})," properties."]}),"\n",(0,t.jsxs)(h.li,{children:["It is now possible to define CSS variables in ",(0,t.jsx)(h.code,{children:"styles"})," prop of all components."]}),"\n",(0,t.jsxs)(h.li,{children:["New ",(0,t.jsx)(h.a,{href:"/hooks/use-in-viewport/",children:"use-in-viewport"})," hook"]}),"\n",(0,t.jsx)(h.li,{children:"All Vite templates have been updated to Vite 5.0 and Vitest 1.0"}),"\n"]})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(m,{...e})})}])},442595,(e,t,n)=>{let r="/changelog/7-4-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(68040)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,385429,e=>{"use strict";e.s(["Line",()=>ec,"computeLinePoints",()=>ed],385429);var a=e.i(191788),t=e.i(56206),o=e.i(815954),r=e.i(366998),n=["animationElapsedTime","isAnimating","isEntrance","visibleLength","strokeDasharray","connectNulls"];function i(){return(i=Object.assign.bind()).apply(null,arguments)}function l(e,a){return"".concat(a,"px ").concat(e,"px")}var s=e.i(438596),d=e.i(301426),c=e.i(789859),m=e.i(270627),p=e.i(106043),u=e.i(516257),g=e.i(482593),h=e.i(128002),f=e.i(170038),y=e.i(777814),x=e.i(901841),v=e.i(662688),A=e.i(314169),b=e.i(399479),L=e.i(83727),T=(e,a,t,o)=>(0,L.selectAxisWithScale)(e,"xAxis",a,o),C=(e,a,t,o)=>(0,L.selectTicksOfGraphicalItem)(e,"xAxis",a,o),O=(e,a,t,o)=>(0,L.selectAxisWithScale)(e,"yAxis",t,o),D=(e,a,t,o)=>(0,L.selectTicksOfGraphicalItem)(e,"yAxis",t,o),P=(0,A.createSelector)([x.selectChartLayout,T,O,C,D],(e,a,t,o,r)=>(0,u.isCategoricalAxis)(e,"xAxis")?(0,u.getBandSizeOfAxis)(a,o,!1):(0,u.getBandSizeOfAxis)(t,r,!1));function N(e){return"line"===e.type}var k=(0,A.createSelector)([L.selectUnfilteredCartesianItems,(e,a,t,o,r)=>r],(e,a)=>e.filter(N).find(e=>e.id===a)),M=(0,A.createSelector)([x.selectChartLayout,T,O,C,D,k,P,b.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,a,t,o,r,n,i,l)=>{var s,d=l.chartData,c=l.dataStartIndex,m=l.dataEndIndex;if(null!=n&&null!=a&&null!=t&&null!=o&&null!=r&&0!==o.length&&0!==r.length&&null!=i&&("horizontal"===e||"vertical"===e)){var p=n.dataKey,u=n.data;if(null!=(s=null!=u&&u.length>0?u:null==d?void 0:d.slice(c,m+1)))return ed({layout:e,xAxis:a,yAxis:t,xAxisTicks:o,yAxisTicks:r,dataKey:p,bandSize:i,displayedData:s})}}),j=e.i(543372),K=e.i(836094),I=e.i(945031),w=e.i(634200),E=e.i(297974),S=e.i(630173),R=e.i(768069),B=e.i(436323),V=e.i(883388),W=e.i(62037),F=e.i(554687),z=e.i(134959),G=e.i(561622),Y=e.i(446354),$=e.i(547810),_=["id"],J=["type","layout","connectNulls","needClip","shape","strokeDasharray"],U=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function X(){return(X=Object.assign.bind()).apply(null,arguments)}function Z(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==a.indexOf(o))continue;t[o]=e[o]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?q(Object(t),!0).forEach(function(a){var o,r,n;o=e,r=a,n=t[a],(r=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,a||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(r))in o?Object.defineProperty(o,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Q={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationInterpolateFn:(e,a)=>{if(null==e)return[];if(1===a)return e.flatMap(e=>"removed"===e.status?[]:[e.next]);var t=function(e){var a=0,t=0;for(var o of e)"matched"===o.status&&null!=o.prev.x&&null!=o.next.x&&(a+=o.next.x-o.prev.x,t++);return t>0?a/t:0}(e),o=[];for(var r of e)if("matched"===r.status)o.push(H(H({},r.next),{},{x:(0,m.interpolate)(r.prev.x,r.next.x,a),y:(0,m.interpolate)(r.prev.y,r.next.y,a)}));else if("added"===r.status)if(null!=r.next.x){var n=r.next.x-t;o.push(H(H({},r.next),{},{x:(0,m.interpolate)(n,r.next.x,a),y:r.next.y}))}else o.push(r.next);else if("removed"===r.status&&null!=r.prev.x){var i=r.prev.x+t;o.push(H(H({},r.prev),{},{x:(0,m.interpolate)(r.prev.x,i,a),y:r.prev.y}))}return o},animationMatchBy:w.matchByIndex,connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",shape:function(e){e.animationElapsedTime,e.isAnimating,e.isEntrance;var t=e.visibleLength,o=e.strokeDasharray,s=e.connectNulls,d=function(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==a.indexOf(o))continue;t[o]=e[o]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,n);if(null!=t){var c,m,p=d.pathRef,u=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(null!=(m=null==p?void 0:p.current)?m:null);c=o?function(e,a,t){var o=t.length%2!=0?[...t,...t]:t,r=o.reduce((e,a)=>e+a,0);if(!r)return l(a,e);for(var n=Math.floor(e/r),i=e%r,s=[],d=0,c=0;d<o.length;c+=null!=(m=o[d])?m:0,++d){var m,p=o[d];if(null!=p&&c+p>i){s=[...o.slice(0,d),i-c];break}}var u=s.length%2==0?[0,a]:[a];return[...function(e,a){for(var t=[],o=0;o<a;++o)t.push(...e);return t}(o,n),...s,...u].map(e=>"".concat(e,"px")).join(", ")}(t,u,"".concat(o).split(/[,\s]+/gim).map(e=>parseFloat(e))):l(u,t)}else null!=o&&(c=String(o));return a.createElement(r.Curve,i({},d,{connectNulls:null!=s&&s,strokeDasharray:c}))},stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:Y.DefaultZIndexes.line,type:"linear"},ee=a.memo(e=>{var t=e.dataKey,o=e.data,r=e.stroke,n=e.strokeWidth,i=e.fill,l=e.name,s=e.hide,d=e.unit,c=e.formatter,p=e.tooltipType,g=e.id,f={dataDefinedOnItem:o,getPosition:m.noop,settings:{stroke:r,strokeWidth:n,fill:i,dataKey:t,nameKey:void 0,name:(0,u.getTooltipNameProp)(l,t),hide:s,type:p,color:r,unit:d,formatter:c,graphicalItemId:g}};return a.createElement(h.SetTooltipEntrySettings,{tooltipEntrySettings:f})});function ea(e){var t=e.clipPathId,o=e.points,r=e.props,n=r.dot,i=r.dataKey,l=r.needClip;r.id;var s=Z(r,_),d=(0,V.svgPropertiesNoEvents)(s);return a.createElement(c.Dots,{points:o,dot:n,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:i,baseProps:d,needClip:l,clipPathId:t})}function et(e){var t=e.showLabels,o=e.children,r=e.points,n=(0,a.useMemo)(()=>null==r?void 0:r.map(e=>{var a,t,o={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return H(H({},o),{},{value:e.value,payload:e.payload,viewBox:o,parentViewBox:void 0,fill:void 0})}),[r]);return a.createElement(d.CartesianLabelListContextProvider,{value:t?n:void 0},o)}function eo(e){var t=e.clipPathId,o=e.pathRef,r=e.points,n=e.props,i=e.animationElapsedTime,l=e.isAnimating,s=e.isEntrance,d=e.visibleLength,c=n.type,m=n.layout,p=n.connectNulls,u=n.needClip,g=n.shape,h=n.strokeDasharray,f=Z(n,J),y=H(H({},(0,W.svgPropertiesAndEvents)(f)),{},{fill:"none",className:"recharts-line-curve",clipPath:u?"url(#clipPath-".concat(t,")"):void 0,points:r,type:c,layout:m,connectNulls:p,strokeDasharray:null!=h?h:n.strokeDasharray,pathRef:o,animationElapsedTime:i,isAnimating:l,isEntrance:!!n.animateNewValues&&s,visibleLength:d});return a.createElement(a.Fragment,null,(null==r?void 0:r.length)>1&&a.createElement(z.Shape,{option:g,DefaultShape:Q.shape,shapeProps:y}),a.createElement(ea,{points:r,clipPathId:t,props:n}))}function er(e){var t,o,r,n,i=e.clipPathId,l=e.props,c=e.pathRef,m=e.previousPointsRef,p=l.points,u=l.isAnimationActive,g=l.animationBegin,h=l.animationDuration,f=l.animationEasing,y=l.animationMatchBy,x=l.animationInterpolateFn,v=l.layout,A=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(c.current),b=(0,I.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),L=b.isAnimating,T=b.handleAnimationStart,C=b.handleAnimationEnd,O=(t=(0,a.useRef)(0),o=(0,a.useRef)(0),r=(0,a.useRef)(!1),(n=(0,a.useRef)(p)).current!==p&&(t.current=o.current,n.current=p),(0,a.useCallback)((e,a)=>{if(r.current)return null;var n=Math.min((0,s.round)(t.current+e*a),a);return e>0&&a>0&&(o.current=Math.max(o.current,n),n>=a)?(r.current=!0,null):n},[])),D=(0,a.useCallback)(e=>e>0&&A>0,[A]);return a.createElement(et,{points:p,showLabels:!L},l.children,a.createElement(I.AnimatedItems,{animationInput:p,animationIdPrefix:"recharts-line-",items:p,previousItemsRef:m,isAnimationActive:u,animationBegin:g,animationDuration:h,animationEasing:f,onAnimationStart:T,onAnimationEnd:C,animationInterpolateFn:x,animationMatchBy:y,shouldUpdatePreviousRef:D,layout:v},(e,t,o)=>{var r=L||t<1,n=r?O(t,A):null;return a.createElement(eo,{props:l,points:e,clipPathId:i,pathRef:c,animationElapsedTime:t,isAnimating:r,isEntrance:o,visibleLength:n})}),a.createElement(d.LabelListFromLabelProp,{label:l.label}))}function en(e){var t=e.clipPathId,o=e.props,r=(0,a.useRef)(null),n=(0,a.useRef)(null);return a.createElement(er,{props:o,clipPathId:t,previousPointsRef:r,pathRef:n})}var ei=(e,a)=>{var t,o;return{x:null!=(t=e.x)?t:void 0,y:null!=(o=e.y)?o:void 0,value:e.value,errorVal:(0,u.getValueByDataKey)(e.payload,a)}};class el extends a.Component{render(){var e=this.props,r=e.hide,n=e.dot,i=e.points,l=e.className,s=e.xAxisId,d=e.yAxisId,c=e.top,m=e.left,u=e.width,h=e.height,x=e.id,v=e.needClip,A=e.zIndex;if(r)return null;var b=(0,t.clsx)("recharts-line",l),L=(0,F.getRadiusAndStrokeWidthFromDot)(n),T=L.r,C=L.strokeWidth,O=(0,p.isClipDot)(n),D=2*T+C,P=v?"url(#clipPath-".concat(O?"":"dots-").concat(x,")"):void 0;return a.createElement(G.ZIndexLayer,{zIndex:A},a.createElement(o.Layer,{className:b},v&&a.createElement("defs",null,a.createElement(y.GraphicalItemClipPath,{clipPathId:x,xAxisId:s,yAxisId:d}),!O&&a.createElement("clipPath",{id:"clipPath-dots-".concat(x)},a.createElement("rect",{x:m-D/2,y:c-D/2,width:u+D,height:h+D}))),a.createElement(f.SetErrorBarContext,{xAxisId:s,yAxisId:d,data:i,dataPointFormatter:ei,errorBarOffset:0},a.createElement(en,{props:this.props,clipPathId:x}))),a.createElement(g.ActivePoints,{activeDot:this.props.activeDot,points:i,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:P}))}}function es(e){var t=(0,E.resolveDefaultProps)(e,Q),o=t.activeDot,r=t.animateNewValues,n=t.animationBegin,i=t.animationDuration,l=t.animationEasing,s=t.connectNulls,d=t.dot,c=t.hide,m=t.isAnimationActive,p=t.label,u=t.legendType,g=t.xAxisId,h=t.yAxisId,f=t.id,A=Z(t,U),b=(0,y.useNeedsClip)(g,h).needClip,L=(0,S.usePlotArea)(),T=(0,x.useChartLayout)(),C=(0,v.useIsPanorama)(),O=(0,j.useAppSelector)(e=>M(e,g,h,C,f));if("horizontal"!==T&&"vertical"!==T||null==O||null==L)return null;var D=L.height,P=L.width,N=L.x,k=L.y;return a.createElement(el,X({},A,{id:f,connectNulls:s,dot:d,activeDot:o,animateNewValues:r,animationBegin:n,animationDuration:i,animationEasing:l,isAnimationActive:m,hide:c,label:p,legendType:u,xAxisId:g,yAxisId:h,points:O,layout:T,height:D,width:P,left:N,top:k,needClip:b}))}function ed(e){var a=e.layout,t=e.xAxis,o=e.yAxis,r=e.xAxisTicks,n=e.yAxisTicks,i=e.dataKey,l=e.bandSize;return e.displayedData.map((e,s)=>{var d=(0,u.getValueByDataKey)(e,i);if("horizontal"===a){var c=(0,u.getCateCoordinateOfLine)({axis:t,ticks:r,bandSize:l,entry:e,index:s}),p=(0,m.isNullish)(d)?null:o.scale.map(d);return{x:c,y:null!=p?p:null,value:d,payload:e}}var g=(0,m.isNullish)(d)?null:t.scale.map(d),h=(0,u.getCateCoordinateOfLine)({axis:o,ticks:n,bandSize:l,entry:e,index:s});return null==g||null==h?null:{x:g,y:h,value:d,payload:e}}).filter(Boolean)}var ec=a.memo(function(e){var t=(0,E.resolveDefaultProps)(e,Q),o=(0,v.useIsPanorama)();return a.createElement(R.RegisterGraphicalItemId,{id:t.id,type:"line"},e=>{var r,n,i,l;return a.createElement(a.Fragment,null,a.createElement(K.SetLegendPayload,{legendPayload:(r=t.dataKey,n=t.name,i=t.stroke,l=t.legendType,[{inactive:t.hide,dataKey:r,type:l,color:i,value:(0,u.getTooltipNameProp)(n,r),payload:t}])}),a.createElement(ee,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,formatter:t.formatter,tooltipType:t.tooltipType,id:e}),a.createElement(B.SetCartesianGraphicalItem,{type:"line",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:o}),a.createElement(es,X({},t,{id:e})))})},$.propsAreEqual);ec.displayName="Line"},235636,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,r=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],n=`
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
`;var p=e.i(391398),u=e.i(520916),g=e.i(577596),h=e.i(314579),f=e.i(739539),y=e.i(979298),x=e.i(232471),v=e.i(481178),A=e.i(275519),b=e.i(317477),L=e.i(951254),T=e.i(44091),C=e.i(62904),O=e.i(391466),D=e.i(526626),P=e.i(905e3),N=e.i(881264),k=e.i(385429),M=e.i(191788),j=e.i(471970),K=e.i(437515),I=["axis"],w=(0,M.forwardRef)((e,a)=>M.createElement(K.CartesianChart,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:I,tooltipPayloadSearcher:j.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),E=e.i(86443),S=e.i(723451),R=e.i(694713),B=e.i(756902),V=e.i(976835),W=e.i(107315);let F={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}],accessibilityLayer:!0},z=(0,v.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,b.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,b.getThemeColor)(t,e):void 0}})),G=(0,A.factory)(e=>{let a=(0,T.useProps)("LineChart",F,e),{classNames:t,className:o,style:r,styles:n,unstyled:i,vars:l,data:s,withLegend:d,legendProps:c,series:m,onMouseLeave:v,dataKey:A,withTooltip:j,withXAxis:K,withYAxis:I,gridAxis:G,tickLine:Y,xAxisProps:$,yAxisProps:_,unit:J,tooltipAnimationDuration:U,strokeDasharray:X,gridProps:Z,tooltipProps:q,referenceLines:H,withDots:Q,dotProps:ee,activeDotProps:ea,strokeWidth:et,lineChartProps:eo,connectNulls:er,fillOpacity:en,curveType:ei,orientation:el,dir:es,valueFormatter:ed,children:ec,lineProps:em,xAxisLabel:ep,yAxisLabel:eu,type:eg,gradientStops:eh,withRightYAxis:ef,rightYAxisLabel:ey,rightYAxisProps:ex,withPointLabels:ev,attributes:eA,gridColor:eb,accessibilityLayer:eL,withBrush:eT,brushProps:eC,...eO}=a,eD=(0,L.useMantineTheme)(),[eP,eN]=(0,M.useState)(null),ek=null!==eP,{resolvedClassNames:eM,resolvedStyles:ej}=(0,C.useResolvedStylesApi)({classNames:t,styles:n,props:a}),eK=(0,O.useStyles)({name:"LineChart",classes:y.default,props:a,className:o,style:r,classNames:t,styles:n,unstyled:i,attributes:eA,vars:l,varsResolver:z}),eI=`line-chart-gradient-${(0,W.useId)()}`,ew=eh?.map(e=>(0,p.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,b.getThemeColor)(e.color,eD)},e.color)),eE=m.map(e=>{let a=(0,b.getThemeColor)(e.color,eD),t=ek&&eP!==e.name;return(0,M.createElement)(k.Line,{...eK("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!Q&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===eg?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eg?"white":a,...ee},activeDot:!!Q&&{fill:"gradient"===eg?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eg?"white":a,...ea},fill:a,stroke:"gradient"===eg?`url(#${eI})`:a,strokeWidth:et,isAnimationActive:!1,fillOpacity:t?0:en,strokeOpacity:t?.5:en,connectNulls:er,type:e.curveType??ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ev?(0,p.jsx)(f.PointLabel,{valueFormatter:ed}):void 0,..."function"==typeof em?em(e):em})}),eS=H?.map((e,a)=>{let t=(0,b.getThemeColor)(e.color,eD);return(0,p.jsx)(E.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eK("referenceLine")},a)}),eR={axisLine:!1,..."vertical"===el?{dataKey:A,type:"category"}:{type:"number"},tickLine:"none"!==G&&("y"===Y||"xy"===Y)&&{stroke:"currentColor"},allowDecimals:!0,unit:J,tickFormatter:"vertical"===el?void 0:ed,...eK("axis")};return(0,p.jsx)(x.Box,{...eK("root"),onMouseLeave:e=>{eN(null),v?.(e)},dir:es||"ltr",...eO,children:(0,p.jsx)(S.ResponsiveContainer,{...eK("container"),children:(0,p.jsxs)(w,{data:s,layout:el,margin:{bottom:ep?30:void 0,left:eu?10:void 0,right:eu?5:void 0},accessibilityLayer:eL,...eo,children:["gradient"===eg&&(0,p.jsx)("defs",{children:(0,p.jsx)("linearGradient",{id:eI,x1:"0",y1:"0",x2:"0",y2:"1",children:ew})}),d&&(0,p.jsx)(N.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(g.ChartLegend,{payload:e.payload,onHighlight:eN,legendPosition:c?.verticalAlign||"top",classNames:eM,styles:ej,series:m,showColor:"gradient"!==eg,attributes:eA}),...c}),(0,p.jsxs)(B.XAxis,{hide:!K,..."vertical"===el?{type:"number"}:{dataKey:A},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==G&&("x"===Y||"xy"===Y)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===el?ed:void 0,...eK("axis"),...$,children:[ep&&(0,p.jsx)(P.Label,{position:"insideBottom",offset:-20,fontSize:12,...eK("axisLabel"),children:ep}),$?.children]}),(0,p.jsxs)(V.YAxis,{tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!I,...eR,..._,children:[eu&&(0,p.jsx)(P.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eK("axisLabel"),children:eu}),_?.children]}),(0,p.jsxs)(V.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ef,...eR,...ex,children:[ey&&(0,p.jsx)(P.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eK("axisLabel"),children:ey}),_?.children]}),(0,p.jsx)(D.CartesianGrid,{strokeDasharray:X,vertical:"y"===G||"xy"===G,horizontal:"x"===G||"xy"===G,...eK("grid"),...Z}),j&&(0,p.jsx)(R.Tooltip,{animationDuration:U,isAnimationActive:0!==U,position:"vertical"===el?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:X},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:J,classNames:eM,styles:ej,series:m,valueFormatter:ed,showColor:"gradient"!==eg,attributes:eA}),...q}),eE,eS,eT&&(0,p.jsx)(h.ChartBrush,{dataKey:A,classNames:eM,styles:ej,...eC}),ec]})})})});G.displayName="@mantine/charts/LineChart",G.classes=y.default,G.varsResolver=z;let Y={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},$={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},_={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},J={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:o,language:"tsx",fileName:"data.ts"}]},U={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:r,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},X={type:"code",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var Z=e.i(470743),q=e.i(883364);function H({label:e,payload:a}){return a?(0,p.jsxs)(Z.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(q.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,p.jsxs)(q.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let Q={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(H,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},es={type:"configurator",component:function(e){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},ed={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(q.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,p.jsx)(q.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,p.jsx)(G,{h:180,data:t,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ec={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:s,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},eA={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",withLegend:!0,withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var eb=e.i(980667);let eL={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,p.jsx)(eb.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:1200,y2:3200,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend sales target",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eT=[{date:"Mar 1",Apples:2200,Oranges:1400},{date:"Mar 2",Apples:2500,Oranges:1500},{date:"Mar 3",Apples:2800,Oranges:1700},{date:"Mar 4",Apples:3100,Oranges:1600},{date:"Mar 5",Apples:3e3,Oranges:1800},{date:"Mar 6",Apples:2700,Oranges:2e3},{date:"Mar 7",Apples:2400,Oranges:2100},{date:"Mar 8",Apples:2100,Oranges:1900},{date:"Mar 9",Apples:1900,Oranges:1700},{date:"Mar 10",Apples:2200,Oranges:1500},{date:"Mar 11",Apples:2600,Oranges:1600},{date:"Mar 12",Apples:3e3,Oranges:1800},{date:"Mar 13",Apples:3300,Oranges:2e3},{date:"Mar 14",Apples:3100,Oranges:2200},{date:"Mar 15",Apples:2800,Oranges:2100},{date:"Mar 16",Apples:2500,Oranges:1900}],eC={type:"code",component:function(){return(0,p.jsx)(G,{h:300,data:eT,dataKey:"date",withBrush:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:`
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
`};var eO=(0,a.__exportAll)({axisLabels:()=>ey,axisProps:()=>$,brush:()=>eC,color:()=>_,colorSchemeColor:()=>J,connectNulls:()=>U,curveType:()=>X,customTooltip:()=>Q,dotProps:()=>ee,gradient:()=>ex,gridColor:()=>ea,legend:()=>et,legendPosition:()=>eo,lineDasharray:()=>er,noTooltip:()=>en,pointLabels:()=>eA,referenceArea:()=>eL,referenceLines:()=>ei,rightYAxis:()=>ev,seriesLabels:()=>eh,strokeDasharray:()=>el,strokeWidth:()=>es,sync:()=>ed,tooltipAnimation:()=>ec,unit:()=>em,usage:()=>Y,valueFormatter:()=>ef,vertical:()=>ep,xAxisOffset:()=>eu,yScale:()=>eg});e.s(["LineChartDemos",0,eO],235636)}]);
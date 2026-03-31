(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,385429,e=>{"use strict";e.s(["Line",()=>ei,"computeLinePoints",()=>en],385429);var a=e.i(191788),t=e.i(56206),o=e.i(815954),r=e.i(301426),n=e.i(789859),i=e.i(270627),l=e.i(106043),s=e.i(516257),d=e.i(482593),c=e.i(128002),m=e.i(170038),p=e.i(777814),u=e.i(901841),g=e.i(662688),f=e.i(451400),h=e.i(399479),y=e.i(83727),x=(e,a,t,o)=>(0,y.selectAxisWithScale)(e,"xAxis",a,o),v=(e,a,t,o)=>(0,y.selectTicksOfGraphicalItem)(e,"xAxis",a,o),A=(e,a,t,o)=>(0,y.selectAxisWithScale)(e,"yAxis",t,o),b=(e,a,t,o)=>(0,y.selectTicksOfGraphicalItem)(e,"yAxis",t,o),L=(0,f.createSelector)([u.selectChartLayout,x,A,v,b],(e,a,t,o,r)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(a,o,!1):(0,s.getBandSizeOfAxis)(t,r,!1));function T(e){return"line"===e.type}var C=(0,f.createSelector)([y.selectUnfilteredCartesianItems,(e,a,t,o,r)=>r],(e,a)=>e.filter(T).find(e=>e.id===a)),D=(0,f.createSelector)([u.selectChartLayout,x,A,v,b,C,L,h.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,a,t,o,r,n,i,l)=>{var s,{chartData:d,dataStartIndex:c,dataEndIndex:m}=l;if(null!=n&&null!=a&&null!=t&&null!=o&&null!=r&&0!==o.length&&0!==r.length&&null!=i&&("horizontal"===e||"vertical"===e)){var{dataKey:p,data:u}=n;if(null!=(s=null!=u&&u.length>0?u:null==d?void 0:d.slice(c,m+1)))return en({layout:e,xAxis:a,yAxis:t,xAxisTicks:o,yAxisTicks:r,dataKey:p,bandSize:i,displayedData:s})}}),P=e.i(543372),O=e.i(836094),N=e.i(3304),k=e.i(297974),j=e.i(630173),K=e.i(768069),M=e.i(436323),w=e.i(883388),I=e.i(355476),S=e.i(62037),E=e.i(554687),R=e.i(134959),V=e.i(561622),W=e.i(446354),B=e.i(547810),z=["id"],F=["type","layout","connectNulls","needClip","shape"],G=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function Y(){return(Y=Object.assign.bind()).apply(null,arguments)}function $(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function J(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?$(Object(t),!0).forEach(function(a){var o,r,n;o=e,r=a,n=t[a],(r=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,a||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(r))in o?Object.defineProperty(o,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function _(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==a.indexOf(o))continue;t[o]=e[o]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var U=a.memo(e=>{var{dataKey:t,data:o,stroke:r,strokeWidth:n,fill:l,name:d,hide:m,unit:p,tooltipType:u,id:g}=e,f={dataDefinedOnItem:o,getPosition:i.noop,settings:{stroke:r,strokeWidth:n,fill:l,dataKey:t,nameKey:void 0,name:(0,s.getTooltipNameProp)(d,t),hide:m,type:u,color:r,unit:p,graphicalItemId:g}};return a.createElement(c.SetTooltipEntrySettings,{tooltipEntrySettings:f})}),X=(e,a)=>"".concat(a,"px ").concat(e,"px");function Z(e){var{clipPathId:t,points:o,props:r}=e,{dot:i,dataKey:l,needClip:s}=r,{id:d}=r,c=_(r,z),m=(0,w.svgPropertiesNoEvents)(c);return a.createElement(n.Dots,{points:o,dot:i,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:l,baseProps:m,needClip:s,clipPathId:t})}function q(e){var{showLabels:t,children:o,points:n}=e,i=(0,a.useMemo)(()=>null==n?void 0:n.map(e=>{var a,t,o={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return J(J({},o),{},{value:e.value,payload:e.payload,viewBox:o,parentViewBox:void 0,fill:void 0})}),[n]);return a.createElement(r.CartesianLabelListContextProvider,{value:t?i:void 0},o)}function H(e){var{clipPathId:t,pathRef:o,points:r,strokeDasharray:n,props:i}=e,{type:l,layout:s,connectNulls:d,needClip:c,shape:m}=i,p=_(i,F),u=J(J({},(0,S.svgPropertiesAndEvents)(p)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(t,")"):void 0,points:r,type:l,layout:s,connectNulls:d,strokeDasharray:null!=n?n:i.strokeDasharray});return a.createElement(a.Fragment,null,(null==r?void 0:r.length)>1&&a.createElement(R.Shape,Y({shapeType:"curve",option:m},u,{pathRef:o})),a.createElement(Z,{points:r,clipPathId:t,props:i}))}function Q(e){var{clipPathId:t,props:o,pathRef:n,previousPointsRef:l,longestAnimatedLengthRef:s}=e,{points:d,strokeDasharray:c,isAnimationActive:m,animationBegin:p,animationDuration:u,animationEasing:g,animateNewValues:f,width:h,height:y,onAnimationEnd:x,onAnimationStart:v}=o,A=l.current,b=(0,N.useAnimationId)(d,"recharts-line-"),L=(0,a.useRef)(b),[T,C]=(0,a.useState)(!1),D=(0,a.useCallback)(()=>{"function"==typeof x&&x(),C(!1)},[x]),P=(0,a.useCallback)(()=>{"function"==typeof v&&v(),C(!0)},[v]),O=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(n.current),k=(0,a.useRef)(0);L.current!==b&&(k.current=s.current,L.current=b);var j=k.current;return a.createElement(q,{points:d,showLabels:!T},o.children,a.createElement(I.JavascriptAnimate,{animationId:b,begin:p,duration:u,isActive:m,easing:g,onAnimationEnd:D,onAnimationStart:P,key:b},e=>{var r,p=Math.min((0,i.interpolate)(j,O+j,e),O);if(r=m?c?((e,a,t)=>{var o=t.reduce((e,a)=>e+a,0);if(!o)return X(a,e);for(var r=Math.floor(e/o),n=e%o,i=[],l=0,s=0;l<t.length;s+=null!=(d=t[l])?d:0,++l){var d,c=t[l];if(null!=c&&s+c>n){i=[...t.slice(0,l),n-s];break}}var m=i.length%2==0?[0,a]:[a];return[...function(e,a){for(var t=e.length%2!=0?[...e,0]:e,o=[],r=0;r<a;++r)o.push(...t);return o}(t,r),...i,...m].map(e=>"".concat(e,"px")).join(", ")})(p,O,"".concat(c).split(/[,\s]+/gim).map(e=>parseFloat(e))):X(O,p):null==c?void 0:String(c),e>0&&O>0&&(l.current=d,s.current=Math.max(s.current,p)),A){var u=A.length/d.length,g=1===e?d:d.map((a,t)=>{var o=Math.floor(t*u);if(A[o]){var r=A[o];return J(J({},a),{},{x:(0,i.interpolate)(r.x,a.x,e),y:(0,i.interpolate)(r.y,a.y,e)})}return f?J(J({},a),{},{x:(0,i.interpolate)(2*h,a.x,e),y:(0,i.interpolate)(y/2,a.y,e)}):J(J({},a),{},{x:a.x,y:a.y})});return l.current=g,a.createElement(H,{props:o,points:g,clipPathId:t,pathRef:n,strokeDasharray:r})}return a.createElement(H,{props:o,points:d,clipPathId:t,pathRef:n,strokeDasharray:r})}),a.createElement(r.LabelListFromLabelProp,{label:o.label}))}function ee(e){var{clipPathId:t,props:o}=e,r=(0,a.useRef)(null),n=(0,a.useRef)(0),i=(0,a.useRef)(null);return a.createElement(Q,{props:o,clipPathId:t,previousPointsRef:r,longestAnimatedLengthRef:n,pathRef:i})}var ea=(e,a)=>{var t,o;return{x:null!=(t=e.x)?t:void 0,y:null!=(o=e.y)?o:void 0,value:e.value,errorVal:(0,s.getValueByDataKey)(e.payload,a)}};class et extends a.Component{render(){var{hide:e,dot:r,points:n,className:i,xAxisId:s,yAxisId:c,top:u,left:g,width:f,height:h,id:y,needClip:x,zIndex:v}=this.props;if(e)return null;var A=(0,t.clsx)("recharts-line",i),{r:b,strokeWidth:L}=(0,E.getRadiusAndStrokeWidthFromDot)(r),T=(0,l.isClipDot)(r),C=2*b+L,D=x?"url(#clipPath-".concat(T?"":"dots-").concat(y,")"):void 0;return a.createElement(V.ZIndexLayer,{zIndex:v},a.createElement(o.Layer,{className:A},x&&a.createElement("defs",null,a.createElement(p.GraphicalItemClipPath,{clipPathId:y,xAxisId:s,yAxisId:c}),!T&&a.createElement("clipPath",{id:"clipPath-dots-".concat(y)},a.createElement("rect",{x:g-C/2,y:u-C/2,width:f+C,height:h+C}))),a.createElement(m.SetErrorBarContext,{xAxisId:s,yAxisId:c,data:n,dataPointFormatter:ea,errorBarOffset:0},a.createElement(ee,{props:this.props,clipPathId:y}))),a.createElement(d.ActivePoints,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:D}))}}var eo={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:W.DefaultZIndexes.line,type:"linear"};function er(e){var t=(0,k.resolveDefaultProps)(e,eo),{activeDot:o,animateNewValues:r,animationBegin:n,animationDuration:i,animationEasing:l,connectNulls:s,dot:d,hide:c,isAnimationActive:m,label:f,legendType:h,xAxisId:y,yAxisId:x,id:v}=t,A=_(t,G),{needClip:b}=(0,p.useNeedsClip)(y,x),L=(0,j.usePlotArea)(),T=(0,u.useChartLayout)(),C=(0,g.useIsPanorama)(),O=(0,P.useAppSelector)(e=>D(e,y,x,C,v));if("horizontal"!==T&&"vertical"!==T||null==O||null==L)return null;var{height:N,width:K,x:M,y:w}=L;return a.createElement(et,Y({},A,{id:v,connectNulls:s,dot:d,activeDot:o,animateNewValues:r,animationBegin:n,animationDuration:i,animationEasing:l,isAnimationActive:m,hide:c,label:f,legendType:h,xAxisId:y,yAxisId:x,points:O,layout:T,height:N,width:K,left:M,top:w,needClip:b}))}function en(e){var{layout:a,xAxis:t,yAxis:o,xAxisTicks:r,yAxisTicks:n,dataKey:l,bandSize:d,displayedData:c}=e;return c.map((e,c)=>{var m=(0,s.getValueByDataKey)(e,l);if("horizontal"===a){var p=(0,s.getCateCoordinateOfLine)({axis:t,ticks:r,bandSize:d,entry:e,index:c}),u=(0,i.isNullish)(m)?null:o.scale.map(m);return{x:p,y:null!=u?u:null,value:m,payload:e}}var g=(0,i.isNullish)(m)?null:t.scale.map(m),f=(0,s.getCateCoordinateOfLine)({axis:o,ticks:n,bandSize:d,entry:e,index:c});return null==g||null==f?null:{x:g,y:f,value:m,payload:e}}).filter(Boolean)}var ei=a.memo(function(e){var t=(0,k.resolveDefaultProps)(e,eo),o=(0,g.useIsPanorama)();return a.createElement(K.RegisterGraphicalItemId,{id:t.id,type:"line"},e=>a.createElement(a.Fragment,null,a.createElement(O.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,stroke:o,legendType:r,hide:n}=e;return[{inactive:n,dataKey:a,type:r,color:o,value:(0,s.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(U,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:e}),a.createElement(M.SetCartesianGraphicalItem,{type:"line",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:o}),a.createElement(er,Y({},t,{id:e}))))},B.propsAreEqual);ei.displayName="Line"},588741,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`;var p=e.i(391398),u=e.i(520916),g=e.i(577596),f=e.i(739539),h=e.i(979298),y=e.i(232471),x=e.i(481178),v=e.i(275519),A=e.i(317477),b=e.i(951254),L=e.i(44091),T=e.i(62904),C=e.i(391466),D=e.i(191788),P=e.i(526626),O=e.i(905e3),N=e.i(881264),k=e.i(385429),j=e.i(471970),K=e.i(437515),M=["axis"],w=(0,D.forwardRef)((e,a)=>D.createElement(K.CartesianChart,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:M,tooltipPayloadSearcher:j.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),I=e.i(86443),S=e.i(723451),E=e.i(694713),R=e.i(756902),V=e.i(976835),W=e.i(107315);let B={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},z=(0,x.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,A.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,A.getThemeColor)(t,e):void 0}})),F=(0,v.factory)(e=>{let a=(0,L.useProps)("LineChart",B,e),{classNames:t,className:o,style:r,styles:n,unstyled:i,vars:l,data:s,withLegend:d,legendProps:c,series:m,onMouseLeave:x,dataKey:v,withTooltip:j,withXAxis:K,withYAxis:M,gridAxis:F,tickLine:G,xAxisProps:Y,yAxisProps:$,unit:J,tooltipAnimationDuration:_,strokeDasharray:U,gridProps:X,tooltipProps:Z,referenceLines:q,withDots:H,dotProps:Q,activeDotProps:ee,strokeWidth:ea,lineChartProps:et,connectNulls:eo,fillOpacity:er,curveType:en,orientation:ei,dir:el,valueFormatter:es,children:ed,lineProps:ec,xAxisLabel:em,yAxisLabel:ep,type:eu,gradientStops:eg,withRightYAxis:ef,rightYAxisLabel:eh,rightYAxisProps:ey,withPointLabels:ex,attributes:ev,gridColor:eA,...eb}=a,eL=(0,b.useMantineTheme)(),[eT,eC]=(0,D.useState)(null),eD=null!==eT,{resolvedClassNames:eP,resolvedStyles:eO}=(0,T.useResolvedStylesApi)({classNames:t,styles:n,props:a}),eN=(0,C.useStyles)({name:"LineChart",classes:h.default,props:a,className:o,style:r,classNames:t,styles:n,unstyled:i,attributes:ev,vars:l,varsResolver:z}),ek=`line-chart-gradient-${(0,W.useId)()}`,ej=eg?.map(e=>(0,p.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,A.getThemeColor)(e.color,eL)},e.color)),eK=m.map(e=>{let a=(0,A.getThemeColor)(e.color,eL),t=eD&&eT!==e.name;return(0,D.createElement)(k.Line,{...eN("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!H&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...Q},activeDot:!!H&&{fill:"gradient"===eu?"var(--mantine-color-gray-7)":a,stroke:"gradient"===eu?"white":a,...ee},fill:a,stroke:"gradient"===eu?`url(#${ek})`:a,strokeWidth:ea,isAnimationActive:!1,fillOpacity:t?0:er,strokeOpacity:t?.5:er,connectNulls:eo,type:e.curveType??en,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ex?(0,p.jsx)(f.PointLabel,{valueFormatter:es}):void 0,..."function"==typeof ec?ec(e):ec})}),eM=q?.map((e,a)=>{let t=(0,A.getThemeColor)(e.color,eL);return(0,p.jsx)(I.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eN("referenceLine")},a)}),ew={axisLine:!1,..."vertical"===ei?{dataKey:v,type:"category"}:{type:"number"},tickLine:"none"!==F&&("y"===G||"xy"===G)&&{stroke:"currentColor"},allowDecimals:!0,unit:J,tickFormatter:"vertical"===ei?void 0:es,...eN("axis")};return(0,p.jsx)(y.Box,{...eN("root"),onMouseLeave:e=>{eC(null),x?.(e)},dir:el||"ltr",...eb,children:(0,p.jsx)(S.ResponsiveContainer,{...eN("container"),children:(0,p.jsxs)(w,{data:s,layout:ei,margin:{bottom:em?30:void 0,left:ep?10:void 0,right:ep?5:void 0},...et,children:["gradient"===eu&&(0,p.jsx)("defs",{children:(0,p.jsx)("linearGradient",{id:ek,x1:"0",y1:"0",x2:"0",y2:"1",children:ej})}),d&&(0,p.jsx)(N.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(g.ChartLegend,{payload:e.payload,onHighlight:eC,legendPosition:c?.verticalAlign||"top",classNames:eP,styles:eO,series:m,showColor:"gradient"!==eu,attributes:ev}),...c}),(0,p.jsxs)(R.XAxis,{hide:!K,..."vertical"===ei?{type:"number"}:{dataKey:v},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==F&&("x"===G||"xy"===G)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ei?es:void 0,...eN("axis"),...Y,children:[em&&(0,p.jsx)(O.Label,{position:"insideBottom",offset:-20,fontSize:12,...eN("axisLabel"),children:em}),Y?.children]}),(0,p.jsxs)(V.YAxis,{tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!M,...ew,...$,children:[ep&&(0,p.jsx)(O.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eN("axisLabel"),children:ep}),$?.children]}),(0,p.jsxs)(V.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ef,...ew,...ey,children:[eh&&(0,p.jsx)(O.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eN("axisLabel"),children:eh}),$?.children]}),(0,p.jsx)(P.CartesianGrid,{strokeDasharray:U,vertical:"y"===F||"xy"===F,horizontal:"x"===F||"xy"===F,...eN("grid"),...X}),j&&(0,p.jsx)(E.Tooltip,{animationDuration:_,isAnimationActive:0!==_,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:U},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:J,classNames:eP,styles:eO,series:m,valueFormatter:es,showColor:"gradient"!==eu,attributes:ev}),...Z}),eK,eM,ed]})})})});F.displayName="@mantine/charts/LineChart",F.classes=h.default,F.varsResolver=z;let G={type:"configurator",component:function(e){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},Y={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},$={type:"configurator",component:function(e){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},J={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",className:"m_91e7a08d",series:[{name:"Apples",color:"var(--line-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:o,language:"tsx",fileName:"data.ts"}]},_={type:"configurator",component:function(e){return(0,p.jsx)(F,{h:300,data:r,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},U={type:"code",component:function(e){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var X=e.i(470743),Z=e.i(883364);function q({label:e,payload:a}){return a?(0,p.jsxs)(X.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(Z.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,p.jsxs)(Z.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let H={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(q,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",className:"m_8fdc5499",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},el={type:"configurator",component:function(e){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},es={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Z.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,p.jsx)(F,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],lineChartProps:{syncId:"groceries"}}),(0,p.jsx)(Z.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,p.jsx)(F,{h:180,data:t,dataKey:"date",lineChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ed={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ec={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:s,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:d,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:c,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var eA=e.i(980667);let eb={type:"code",component:function(){return(0,p.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,p.jsx)(eA.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:1200,y2:3200,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend sales target",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var eL=(0,a.__exportAll)({axisLabels:()=>eh,axisProps:()=>Y,color:()=>$,colorSchemeColor:()=>J,connectNulls:()=>_,curveType:()=>U,customTooltip:()=>H,dotProps:()=>Q,gradient:()=>ey,gridColor:()=>ee,legend:()=>ea,legendPosition:()=>et,lineDasharray:()=>eo,noTooltip:()=>er,pointLabels:()=>ev,referenceArea:()=>eb,referenceLines:()=>en,rightYAxis:()=>ex,seriesLabels:()=>eg,strokeDasharray:()=>ei,strokeWidth:()=>el,sync:()=>es,tooltipAnimation:()=>ed,unit:()=>ec,usage:()=>G,valueFormatter:()=>ef,vertical:()=>em,xAxisOffset:()=>ep,yScale:()=>eu});e.s(["LineChartDemos",0,eL],588741)}]);
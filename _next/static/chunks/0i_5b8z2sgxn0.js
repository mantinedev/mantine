(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,321020,e=>{"use strict";e.s(["Area",()=>ep,"computeArea",()=>em],321020);var a=e.i(191788),t=e.i(56206),r=e.i(366998),o=e.i(815954),n=e.i(301426),l=e.i(789859),i=e.i(270627),s=e.i(516257),d=e.i(106043),c=e.i(482593),m=e.i(128002),p=e.i(777814),u=e.i(451400),h=e.i(83727),y=e.i(901841),g=e.i(399479),f=e.i(365441),x=e.i(755335),A=e.i(780950),v=(e,a,t)=>(0,h.selectAxisWithScale)(e,"xAxis",(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t),b=(e,a,t)=>(0,h.selectTicksOfGraphicalItem)(e,"xAxis",(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t),C=(e,a,t)=>(0,h.selectAxisWithScale)(e,"yAxis",(0,A.selectYAxisIdFromGraphicalItemId)(e,a),t),k=(e,a,t)=>(0,h.selectTicksOfGraphicalItem)(e,"yAxis",(0,A.selectYAxisIdFromGraphicalItemId)(e,a),t),T=(0,u.createSelector)([y.selectChartLayout,v,C,b,k],(e,a,t,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(a,r,!1):(0,s.getBandSizeOfAxis)(t,o,!1)),D=(0,u.createSelector)([h.selectUnfilteredCartesianItems,(e,a)=>a],(e,a)=>e.filter(e=>"area"===e.type).find(e=>e.id===a)),P=e=>{var a=(0,y.selectChartLayout)(e);return(0,s.isCategoricalAxis)(a,"xAxis")?"yAxis":"xAxis"},N=(0,u.createSelector)([D,(e,a,t)=>(0,h.selectStackGroups)(e,P(e),"yAxis"===P(e)?(0,A.selectYAxisIdFromGraphicalItemId)(e,a):(0,A.selectXAxisIdFromGraphicalItemId)(e,a),t)],(e,a)=>{if(null!=e&&null!=a){var t,{stackId:r}=e,o=(0,f.getStackSeriesIdentifier)(e);if(null!=r&&null!=o){var n=null==(t=a[r])?void 0:t.stackedData,l=null==n?void 0:n.find(e=>e.key===o);if(null!=l)return l.map(e=>[e[0],e[1]])}}}),O=(0,u.createSelector)([y.selectChartLayout,v,C,b,k,N,g.selectChartDataWithIndexesIfNotInPanoramaPosition3,T,D,x.selectChartBaseValue],(e,a,t,r,o,n,l,i,s,d)=>{var c,{chartData:m,dataStartIndex:p,dataEndIndex:u}=l;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=a&&null!=t&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i){var{data:h}=s;if(null!=(c=h&&h.length>0?h:null==m?void 0:m.slice(p,u+1)))return em({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:o,dataStartIndex:p,areaSettings:s,stackedData:n,displayedData:c,chartBaseValue:d,bandSize:i})}}),j=e.i(662688),M=e.i(524970),K=e.i(836094),I=e.i(543372),L=e.i(3304),E=e.i(297974),w=e.i(500678),S=e.i(630173),W=e.i(768069),V=e.i(436323),R=e.i(883388),G=e.i(355476),B=e.i(554687),F=e.i(62037),z=e.i(561622),Y=e.i(446354),$=e.i(547810),X=["id"],_=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function U(){return(U=Object.assign.bind()).apply(null,arguments)}function Z(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?q(Object(t),!0).forEach(function(a){var r,o,n;r=e,o=a,n=t[a],(o=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function J(e,a){return e&&"none"!==e?e:a}var Q=a.memo(e=>{var{dataKey:t,data:r,stroke:o,strokeWidth:n,fill:l,name:d,hide:c,unit:p,tooltipType:u,id:h}=e,y={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:o,strokeWidth:n,fill:l,dataKey:t,nameKey:void 0,name:(0,s.getTooltipNameProp)(d,t),hide:c,type:u,color:J(o,l),unit:p,graphicalItemId:h}};return a.createElement(m.SetTooltipEntrySettings,{tooltipEntrySettings:y})});function ee(e){var{clipPathId:t,points:r,props:o}=e,{needClip:n,dot:i,dataKey:s}=o,d=(0,R.svgPropertiesNoEvents)(o);return a.createElement(l.Dots,{points:r,dot:i,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:d,needClip:n,clipPathId:t})}function ea(e){var{showLabels:t,children:r,points:o}=e,l=o.map(e=>{var a,t,r={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return H(H({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return a.createElement(n.CartesianLabelListContextProvider,{value:t?l:void 0},r)}function et(e){var{points:t,baseLine:n,needClip:l,clipPathId:i,props:s}=e,{layout:d,type:c,stroke:m,connectNulls:p,isRange:u}=s,{id:h}=s,y=Z(s,X),g=(0,R.svgPropertiesNoEvents)(y),f=(0,F.svgPropertiesAndEvents)(y);return a.createElement(a.Fragment,null,(null==t?void 0:t.length)>1&&a.createElement(o.Layer,{clipPath:l?"url(#clipPath-".concat(i,")"):void 0},a.createElement(r.Curve,U({},f,{id:h,points:t,connectNulls:p,type:c,baseLine:n,layout:d,stroke:"none",className:"recharts-area-area"})),"none"!==m&&a.createElement(r.Curve,U({},g,{className:"recharts-area-curve",layout:d,type:c,connectNulls:p,fill:"none",points:t})),"none"!==m&&u&&Array.isArray(n)&&a.createElement(r.Curve,U({},g,{className:"recharts-area-curve",layout:d,type:c,connectNulls:p,fill:"none",points:n}))),a.createElement(ee,{points:t,props:y,clipPathId:i}))}function er(e){var t,r,{alpha:o,baseLine:n,points:l,strokeWidth:s}=e,d=null==(t=l[0])?void 0:t.y,c=null==(r=l[l.length-1])?void 0:r.y;if(!(0,w.isWellBehavedNumber)(d)||!(0,w.isWellBehavedNumber)(c))return null;var m=o*Math.abs(d-c),p=Math.max(...l.map(e=>e.x||0));return((0,i.isNumber)(n)?p=Math.max(n,p):n&&Array.isArray(n)&&n.length&&(p=Math.max(...n.map(e=>e.x||0),p)),(0,i.isNumber)(p))?a.createElement("rect",{x:0,y:d<c?d:d-m,width:p+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}function eo(e){var t,r,{alpha:o,baseLine:n,points:l,strokeWidth:s}=e,d=null==(t=l[0])?void 0:t.x,c=null==(r=l[l.length-1])?void 0:r.x;if(!(0,w.isWellBehavedNumber)(d)||!(0,w.isWellBehavedNumber)(c))return null;var m=o*Math.abs(d-c),p=Math.max(...l.map(e=>e.y||0));return((0,i.isNumber)(n)?p=Math.max(n,p):n&&Array.isArray(n)&&n.length&&(p=Math.max(...n.map(e=>e.y||0),p)),(0,i.isNumber)(p))?a.createElement("rect",{x:d<c?d:d-m,y:0,width:m,height:Math.floor(p+(s?parseInt("".concat(s),10):1))}):null}function en(e){var{alpha:t,layout:r,points:o,baseLine:n,strokeWidth:l}=e;return"vertical"===r?a.createElement(er,{alpha:t,points:o,baseLine:n,strokeWidth:l}):a.createElement(eo,{alpha:t,points:o,baseLine:n,strokeWidth:l})}function el(e){var{needClip:t,clipPathId:r,props:l,previousPointsRef:s,previousBaselineRef:d}=e,{points:c,baseLine:m,isAnimationActive:p,animationBegin:u,animationDuration:h,animationEasing:g,onAnimationStart:f,onAnimationEnd:x}=l,A=(0,a.useMemo)(()=>({points:c,baseLine:m}),[c,m]),v=(0,L.useAnimationId)(A,"recharts-area-"),b=(0,y.useCartesianChartLayout)(),[C,k]=(0,a.useState)(!1),T=(0,a.useCallback)(()=>{"function"==typeof x&&x(),k(!1)},[x]),D=(0,a.useCallback)(()=>{"function"==typeof f&&f(),k(!0)},[f]);if(null==b)return null;var P=s.current,N=d.current;return a.createElement(ea,{showLabels:!C,points:c},l.children,a.createElement(G.JavascriptAnimate,{animationId:v,begin:u,duration:h,isActive:p,easing:g,onAnimationEnd:T,onAnimationStart:D,key:v},e=>{if(P){var n,u=P.length/c.length,h=1===e?c:c.map((a,t)=>{var r=Math.floor(t*u);if(P[r]){var o=P[r];return H(H({},a),{},{x:(0,i.interpolate)(o.x,a.x,e),y:(0,i.interpolate)(o.y,a.y,e)})}return a});return n=(0,i.isNumber)(m)?(0,i.interpolate)(N,m,e):(0,i.isNullish)(m)||(0,i.isNan)(m)?(0,i.interpolate)(N,0,e):m.map((a,t)=>{var r=Math.floor(t*u);if(Array.isArray(N)&&N[r]){var o=N[r];return H(H({},a),{},{x:(0,i.interpolate)(o.x,a.x,e),y:(0,i.interpolate)(o.y,a.y,e)})}return a}),e>0&&(s.current=h,d.current=n),a.createElement(et,{points:h,baseLine:n,needClip:t,clipPathId:r,props:l})}return e>0&&(s.current=c,d.current=m),a.createElement(o.Layer,null,p&&a.createElement("defs",null,a.createElement("clipPath",{id:"animationClipPath-".concat(r)},a.createElement(en,{alpha:e,points:c,baseLine:m,layout:b,strokeWidth:l.strokeWidth}))),a.createElement(o.Layer,{clipPath:"url(#animationClipPath-".concat(r,")")},a.createElement(et,{points:c,baseLine:m,needClip:t,clipPathId:r,props:l})))}),a.createElement(n.LabelListFromLabelProp,{label:l.label}))}function ei(e){var{needClip:t,clipPathId:r,props:o}=e,n=(0,a.useRef)(null),l=(0,a.useRef)();return a.createElement(el,{needClip:t,clipPathId:r,props:o,previousPointsRef:n,previousBaselineRef:l})}class es extends a.PureComponent{render(){var{hide:e,dot:r,points:n,className:l,top:i,left:s,needClip:m,xAxisId:u,yAxisId:h,width:y,height:g,id:f,baseLine:x,zIndex:A}=this.props;if(e)return null;var v=(0,t.clsx)("recharts-area",l),{r:b,strokeWidth:C}=(0,B.getRadiusAndStrokeWidthFromDot)(r),k=(0,d.isClipDot)(r),T=2*b+C,D=m?"url(#clipPath-".concat(k?"":"dots-").concat(f,")"):void 0;return a.createElement(z.ZIndexLayer,{zIndex:A},a.createElement(o.Layer,{className:v},m&&a.createElement("defs",null,a.createElement(p.GraphicalItemClipPath,{clipPathId:f,xAxisId:u,yAxisId:h}),!k&&a.createElement("clipPath",{id:"clipPath-dots-".concat(f)},a.createElement("rect",{x:s-T/2,y:i-T/2,width:y+T,height:g+T}))),a.createElement(ei,{needClip:m,clipPathId:f,props:this.props})),a.createElement(c.ActivePoints,{points:n,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:D}),this.props.isRange&&Array.isArray(x)&&a.createElement(c.ActivePoints,{points:x,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:D}))}}var ed={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:Y.DefaultZIndexes.area};function ec(e){var t,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:l,connectNulls:i,dot:s,fill:d,fillOpacity:c,hide:m,isAnimationActive:u,legendType:h,stroke:g,xAxisId:f,yAxisId:x}=e,A=Z(e,_),v=(0,y.useChartLayout)(),b=(0,M.useChartName)(),{needClip:C}=(0,p.useNeedsClip)(f,x),k=(0,j.useIsPanorama)(),{points:T,isRange:D,baseLine:P}=null!=(t=(0,I.useAppSelector)(a=>O(a,e.id,k)))?t:{},N=(0,S.usePlotArea)();if("horizontal"!==v&&"vertical"!==v||null==N||"AreaChart"!==b&&"ComposedChart"!==b)return null;var{height:K,width:L,x:E,y:w}=N;return T&&T.length?a.createElement(es,U({},A,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:l,baseLine:P,connectNulls:i,dot:s,fill:d,fillOpacity:c,height:K,hide:m,layout:v,isAnimationActive:u,isRange:D,legendType:h,needClip:C,points:T,stroke:g,width:L,left:E,top:w,xAxisId:f,yAxisId:x})):null}function em(e){var a,{areaSettings:{connectNulls:t,baseValue:r,dataKey:o},stackedData:n,layout:l,chartBaseValue:d,xAxis:c,yAxis:m,displayedData:p,dataStartIndex:u,xAxisTicks:h,yAxisTicks:y,bandSize:g}=e,f=n&&n.length,x=((e,a,t,r,o)=>{var n=null!=t?t:a;if((0,i.isNumber)(n))return n;var l="horizontal"===e?o:r,s=l.scale.domain();if("number"===l.type){var d=Math.max(s[0],s[1]),c=Math.min(s[0],s[1]);return"dataMin"===n?c:"dataMax"===n||d<0?d:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===n?s[0]:"dataMax"===n?s[1]:s[0]})(l,d,r,c,m),A="horizontal"===l,v=!1,b=p.map((e,a)=>{if(f)d=n[u+a];else{var r,l,i,d,p,b=(0,s.getValueByDataKey)(e,o);Array.isArray(b)?(d=b,v=!0):d=[x,b]}var C=null!=(r=null==(l=d)?void 0:l[1])?r:null,k=null==C||f&&!t&&null==(0,s.getValueByDataKey)(e,o);return A?{x:(0,s.getCateCoordinateOfLine)({axis:c,ticks:h,bandSize:g,entry:e,index:a}),y:k?null:null!=(p=m.scale.map(C))?p:null,value:d,payload:e}:{x:k?null:null!=(i=c.scale.map(C))?i:null,y:(0,s.getCateCoordinateOfLine)({axis:m,ticks:y,bandSize:g,entry:e,index:a}),value:d,payload:e}});return a=f||v?b.map(e=>{var a,t,r=Array.isArray(e.value)?e.value[0]:null;return A?{x:e.x,y:null!=r&&null!=e.y&&null!=(t=m.scale.map(r))?t:null,payload:e.payload}:{x:null!=r&&null!=(a=c.scale.map(r))?a:null,y:e.y,payload:e.payload}}):A?m.scale.map(x):c.scale.map(x),{points:b,baseLine:null!=a?a:0,isRange:v}}var ep=a.memo(function(e){var t=(0,E.resolveDefaultProps)(e,ed),r=(0,j.useIsPanorama)();return a.createElement(W.RegisterGraphicalItemId,{id:t.id,type:"area"},e=>a.createElement(a.Fragment,null,a.createElement(K.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,stroke:r,fill:o,legendType:n,hide:l}=e;return[{inactive:l,dataKey:a,type:n,color:J(r,o),value:(0,s.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(Q,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:e}),a.createElement(V.SetCartesianGraphicalItem,{type:"area",id:e,data:t.data,dataKey:t.dataKey,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,stackId:(0,s.getNormalizedStackId)(t.stackId),hide:t.hide,barSize:void 0,baseValue:t.baseValue,isPanorama:r,connectNulls:t.connectNulls}),a.createElement(ec,U({},t,{id:e}))))},$.propsAreEqual);ep.displayName="Area"},990865,378097,e=>{"use strict";var a=e.i(391398);function t({color:e,id:r,withGradient:o,fillOpacity:n}){return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:n}),(0,a.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,a.jsx)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,a.jsx)("stop",{stopColor:e,stopOpacity:n??.2})})})}t.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,t],990865);var r=e.i(191788),o=e.i(471970),n=e.i(437515),l=["axis"],i=(0,r.forwardRef)((e,a)=>r.createElement(n.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:l,tooltipPayloadSearcher:o.arrayTooltipSearcher,categoricalChartProps:e,ref:a}));e.s(["AreaChart",0,i],378097)},199536,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],r=`
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
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
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
`;var p=e.i(391398),u=e.i(520916),h=e.i(577596),y=e.i(739539),g=e.i(990865),f=e.i(317477),x=e.i(951254);function A({offset:e,id:a,colors:t,fillOpacity:r}){let o=(0,x.useMantineTheme)();return(0,p.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,p.jsx)("stop",{offset:e,stopColor:(0,f.getThemeColor)(t[0],o),stopOpacity:r??.2}),(0,p.jsx)("stop",{offset:e,stopColor:(0,f.getThemeColor)(t[1],o),stopOpacity:r??.2})]})}A.displayName="@mantine/charts/AreaSplit";var v=e.i(979298),b=e.i(232471),C=e.i(481178),k=e.i(275519),T=e.i(44091),D=e.i(62904),P=e.i(391466),N=e.i(191788),O=e.i(321020),j=e.i(378097),M=e.i(526626),K=e.i(905e3),I=e.i(881264),L=e.i(86443),E=e.i(723451),w=e.i(694713),S=e.i(756902),W=e.i(976835);function V(e){return`${(100*e).toFixed(0)}%`}let R={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},G=(0,C.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,f.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,f.getThemeColor)(t,e):void 0}})),B=(0,k.factory)(e=>{let a=(0,T.useProps)("AreaChart",R,e),{classNames:t,className:r,style:o,styles:n,unstyled:l,vars:i,data:s,series:d,withGradient:c,dataKey:m,withXAxis:C,withYAxis:k,curveType:B,gridProps:F,withDots:z,tickLine:Y,strokeDasharray:$,gridAxis:X,unit:_,yAxisProps:U,xAxisProps:Z,dotProps:q,activeDotProps:H,strokeWidth:J,tooltipAnimationDuration:Q,type:ee,legendProps:ea,tooltipProps:et,withLegend:er,withTooltip:eo,areaChartProps:en,fillOpacity:el,splitColors:ei,splitOffset:es,connectNulls:ed,onMouseLeave:ec,orientation:em,referenceLines:ep,dir:eu,valueFormatter:eh,children:ey,areaProps:eg,xAxisLabel:ef,yAxisLabel:ex,withRightYAxis:eA,rightYAxisLabel:ev,rightYAxisProps:eb,withPointLabels:eC,gridColor:ek,textColor:eT,attributes:eD,...eP}=a,eN=(0,x.useMantineTheme)(),eO=(0,N.useId)(),ej=`${eO}-split`,eM=(Q||0)>0,eK="boolean"==typeof c?c:"default"===ee,eI="stacked"===ee||"percent"===ee,[eL,eE]=(0,N.useState)(null),ew=null!==eL,{resolvedClassNames:eS,resolvedStyles:eW}=(0,D.useResolvedStylesApi)({classNames:t,styles:n,props:a}),eV=(0,P.useStyles)({name:"AreaChart",classes:v.default,props:a,className:r,style:o,classNames:t,styles:n,unstyled:l,attributes:eD,vars:i,varsResolver:G}),eR=d.map(e=>{let a=(0,f.getThemeColor)(e.color,eN),t=ew&&eL!==e.name;return(0,N.createElement)(O.Area,{...eV("area"),activeDot:{fill:eN.white,stroke:a,strokeWidth:2,r:4,...H},dot:{fill:a,fillOpacity:+!t,strokeWidth:2,r:4,...q},key:e.name,name:e.name,type:B,dataKey:e.name,fill:"none",strokeWidth:J,stroke:"none",isAnimationActive:!1,connectNulls:ed,stackId:eI?"stack-dots":void 0,yAxisId:e.yAxisId||void 0,..."function"==typeof eg?eg(e):eg})}),eG=d.map(e=>{let a=`${eO}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,t=(0,f.getThemeColor)(e.color,eN),r=ew&&eL!==e.name;return(0,p.jsxs)(N.Fragment,{children:[(0,p.jsx)("defs",{children:(0,p.jsx)(g.AreaGradient,{color:t,withGradient:eK,id:a,fillOpacity:el})}),(0,p.jsx)(O.Area,{...eV("area"),activeDot:!1,dot:!1,name:e.name,type:e.curveType??B,dataKey:e.name,fill:"split"===ee?`url(#${ej})`:`url(#${a})`,strokeWidth:J,stroke:t,isAnimationActive:!1,connectNulls:ed,stackId:eI?"stack":void 0,fillOpacity:+!r,strokeOpacity:r?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:eC?(0,p.jsx)(y.PointLabel,{valueFormatter:eh}):void 0,..."function"==typeof eg?eg(e):eg})]},e.name)}),eB=ep?.map((e,a)=>{let t=(0,f.getThemeColor)(e.color,eN);return(0,p.jsx)(L.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eV("referenceLine")},a)}),eF="percent"===ee?V:eh,ez={axisLine:!1,..."vertical"===em?{dataKey:m,type:"category"}:{type:"number"},tickLine:"none"!==X&&("y"===Y||"xy"===Y)&&{stroke:"currentColor"},allowDecimals:!0,unit:_,tickFormatter:"vertical"===em?void 0:eF,...eV("axis")};return(0,p.jsx)(b.Box,{...eV("root"),onMouseLeave:e=>{eE(null),ec?.(e)},dir:eu||"ltr",...eP,children:(0,p.jsx)(E.ResponsiveContainer,{...eV("container"),children:(0,p.jsxs)(j.AreaChart,{data:s,stackOffset:"percent"===ee?"expand":void 0,layout:em,margin:{bottom:ef?30:void 0,left:ex?10:void 0,right:ex?5:void 0},...en,children:[eB,er&&(0,p.jsx)(I.Legend,{verticalAlign:"top",content:e=>(0,p.jsx)(h.ChartLegend,{payload:e.payload,onHighlight:eE,legendPosition:ea?.verticalAlign||"top",classNames:eS,styles:eW,series:d,attributes:eD}),...ea}),(0,p.jsx)(M.CartesianGrid,{strokeDasharray:$,vertical:"y"===X||"xy"===X,horizontal:"x"===X||"xy"===X,...eV("grid"),...F}),(0,p.jsxs)(S.XAxis,{hide:!C,..."vertical"===em?{type:"number"}:{dataKey:m},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==X&&("x"===Y||"xy"===Y)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===em?eF:void 0,...eV("axis"),...Z,children:[ef&&(0,p.jsx)(K.Label,{position:"insideBottom",offset:-20,fontSize:12,...eV("axisLabel"),children:ef}),Z?.children]}),(0,p.jsxs)(W.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!k,...ez,...U,children:[ex&&(0,p.jsx)(K.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eV("axisLabel"),children:ex}),U?.children]}),(0,p.jsxs)(W.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eA,...ez,...eb,children:[ev&&(0,p.jsx)(K.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eV("axisLabel"),children:ev}),U?.children]}),eo&&(0,p.jsx)(w.Tooltip,{animationDuration:Q,isAnimationActive:eM,position:"vertical"===em?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:$},content:({label:e,payload:a,labelFormatter:t})=>(0,p.jsx)(u.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:_,classNames:eS,styles:eW,series:d,valueFormatter:eh,attributes:eD}),...et}),"split"===ee&&(0,p.jsx)("defs",{children:(0,p.jsx)(A,{colors:ei,id:ej,offset:es??function({data:e,series:a}){return 1===a.length?function({data:e,dataKey:a}){let t=Math.max(...e.map(e=>e[a])),r=Math.min(...e.map(e=>e[a]));return t<=0?0:r>=0?1:t/(t-r)}({data:e,dataKey:a[0].name}):.5}({data:s,series:d}),fillOpacity:el})}),eG,z&&eR,ey]})})})});B.classes=v.default,B.varsResolver=G,B.displayName="@mantine/charts/AreaChart";let F={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},z={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"percent",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Y={type:"configurator",component:function(e){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},$={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},X={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},_={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",strokeDasharray:"15 15",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},U={type:"configurator",component:function(e){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},Z={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",tooltipAnimationDuration:200,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},q={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",unit:"$",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},H={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",className:"m_13521d26",series:[{name:"Apples",color:"var(--area-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var J=e.i(470743),Q=e.i(883364);function ee({label:e,payload:a}){return a?(0,p.jsxs)(J.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,p.jsx)(Q.Text,{fw:500,mb:5,children:e}),(0,u.getFilteredChartTooltipPayload)(a).map(e=>(0,p.jsxs)(Q.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let ea={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",tooltipProps:{content:({label:e,payload:a})=>(0,p.jsx)(ee,{label:e,payload:a})},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",withTooltip:!1,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"configurator",component:function(e){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},en={type:"code",component:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Q.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,p.jsx)(B,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],areaChartProps:{syncId:"groceries"}}),(0,p.jsx)(Q.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,p.jsx)(B,{h:180,data:t,dataKey:"date",areaChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"teal.6"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"configurator",component:function(e){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Tomatoes",color:"teal.6"},{name:"Oranges",color:"blue.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"segmented",prop:"type",initialValue:"default",libraryValue:"default",transformLabel:!1,data:[{value:"default",label:"default"},{value:"stacked",label:"stacked"}]},{type:"number",prop:"fillOpacity",initialValue:.2,libraryValue:null,step:.01,min:0,max:1},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0}]},ei={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:o,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:o,dataKey:"date",type:"split",strokeWidth:1,dotProps:{r:2,strokeWidth:1},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"bright"}],splitColors:["violet","orange"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ed={type:"configurator",component:function(e){return(0,p.jsx)(B,{h:300,data:l,dataKey:"date",series:[{name:"Apples",color:"indigo.6"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"boolean",prop:"connectNulls",initialValue:!0,libraryValue:"__"}]},ec={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",className:"m_3587e220",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",orientation:"vertical",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",xAxisProps:{padding:{left:30,right:30}},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:s,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:d,language:"tsx",fileName:"data.ts"}]},eg={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:s,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:40,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out"}],series:[{name:"Apples",color:"indigo.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:d,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ex={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eA={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",tickLine:"xy",xAxisProps:{angle:-20},series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ev={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eb={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:c,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},eC={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",withPointLabels:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var ek=e.i(980667);let eT={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],children:(0,p.jsx)(ek.ReferenceArea,{x1:"Mar 23",x2:"Mar 25",y1:0,y2:1e4,fillOpacity:.3,strokeOpacity:.9,fill:"var(--mantine-color-gray-4)",stroke:"var(--mantine-color-gray-6)",strokeWidth:1,label:{value:"Weekend",position:"insideTopRight",fontSize:12,fill:"var(--mantine-color-bright)"}})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eD={type:"code",component:function(){return(0,p.jsx)(B,{h:300,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",curveType:"linear"},{name:"Oranges",color:"blue.6",curveType:"bump"},{name:"Tomatoes",color:"teal.6",curveType:"stepAfter"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var eP=(0,a.__exportAll)({axisLabels:()=>ev,axisProps:()=>em,color:()=>U,colorSchemeColor:()=>H,connectNulls:()=>ed,curveType:()=>eD,customTooltip:()=>ea,dotProps:()=>er,fillOpacity:()=>el,gridColor:()=>ec,legend:()=>$,legendPosition:()=>X,lineDasharray:()=>eu,noTooltip:()=>et,percent:()=>z,pointLabels:()=>eC,referenceArea:()=>eT,referenceLines:()=>eg,rightYAxis:()=>eb,rotateLabels:()=>eA,seriesLabels:()=>ef,split:()=>ei,splitColors:()=>es,stacked:()=>F,strokeDasharray:()=>_,strokeWidth:()=>eo,sync:()=>en,tooltipAnimation:()=>Z,unit:()=>q,usage:()=>Y,valueFormatter:()=>ex,vertical:()=>ep,xAxisOffset:()=>eh,yScale:()=>ey});e.s(["AreaChartDemos",0,eP],199536)}]);
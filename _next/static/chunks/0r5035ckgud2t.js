(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,313667,908277,e=>{"use strict";e.s(["Scatter",()=>en,"computeScatterPoints",()=>Y],313667);var a=e.i(191788),t=e.i(56206),n=e.i(815954),r=e.i(301426),i=e.i(106043),o=e.i(366998),l=e.i(300244),s=e.i(270627),g=e.i(516257),d=e.i(778979),c=e.i(285505),m=e.i(134959),p=["option","isActive"];function y(){return(y=Object.assign.bind()).apply(null,arguments)}function u(e){var{option:t,isActive:n}=e,r=function(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==a.indexOf(n))continue;t[n]=e[n]}return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,p);return"string"==typeof t?a.createElement(m.Shape,y({option:a.createElement(c.Symbols,y({type:t},r)),isActive:n,shapeType:"symbols"},r)):a.createElement(m.Shape,y({option:t,isActive:n,shapeType:"symbols"},r))}var x=e.i(616468),h=e.i(128002),I=e.i(170038),M=e.i(777814),B=e.i(451400),f=e.i(399479),v=e.i(83727),A=(0,B.createSelector)([v.selectUnfilteredCartesianItems,(e,a,t,n,r)=>r],(e,a)=>e.filter(e=>"scatter"===e.type).find(e=>e.id===a)),b=(0,B.createSelector)([(e,a,t,n,r,i,o)=>(0,f.selectChartDataWithIndexesIfNotInPanoramaPosition4)(e,void 0,void 0,o),(e,a,t,n,r,i,o)=>(0,v.selectAxisWithScale)(e,"xAxis",a,o),(e,a,t,n,r,i,o)=>(0,v.selectTicksOfGraphicalItem)(e,"xAxis",a,o),(e,a,t,n,r,i,o)=>(0,v.selectAxisWithScale)(e,"yAxis",t,o),(e,a,t,n,r,i,o)=>(0,v.selectTicksOfGraphicalItem)(e,"yAxis",t,o),(e,a,t,n)=>(0,v.selectZAxisWithScale)(e,"zAxis",n,!1),A,(e,a,t,n,r,i)=>i],(e,a,t,n,r,i,o,l)=>{var s,{chartData:g,dataStartIndex:d,dataEndIndex:c}=e;if(null!=o&&null!=(s=(null==o?void 0:o.data)!=null&&o.data.length>0?o.data:null==g?void 0:g.slice(d,c+1))&&null!=a&&null!=n&&null!=t&&null!=r&&(null==t?void 0:t.length)!==0&&(null==r?void 0:r.length)!==0)return Y({displayedData:s,xAxis:a,yAxis:n,zAxis:i,scatterSettings:o,xAxisTicks:t,yAxisTicks:r,cells:l})}),_=e.i(543372),L=e.i(662688),S=e.i(281695),C=e.i(836094),P=e.i(258111),D=e.i(3304),N=e.i(297974),E=e.i(768069),K=e.i(436323),T=e.i(883388),j=e.i(355476),w=e.i(901841),k=e.i(561622),O=e.i(446354),z=e.i(547810),R=["id"],G=["onMouseEnter","onClick","onMouseLeave"],F=["animationBegin","animationDuration","animationEasing","hide","isAnimationActive","legendType","lineJointType","lineType","shape","xAxisId","yAxisId","zAxisId"];function W(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==a.indexOf(n))continue;t[n]=e[n]}return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function U(){return(U=Object.assign.bind()).apply(null,arguments)}function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function $(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach(function(a){var n,r,i;n=e,r=a,i=t[a],(r=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Z=a.memo(e=>{var{dataKey:t,points:n,stroke:r,strokeWidth:i,fill:o,name:l,hide:s,tooltipType:d,id:c}=e,m={dataDefinedOnItem:null==n?void 0:n.map(e=>e.tooltipPayload),getPosition:e=>{var a;return null==n||null==(a=n[Number(e)])?void 0:a.tooltipPosition},settings:{stroke:r,strokeWidth:i,fill:o,nameKey:void 0,dataKey:t,name:(0,g.getTooltipNameProp)(l,t),hide:s,type:d,color:o,unit:"",graphicalItemId:c}};return a.createElement(h.SetTooltipEntrySettings,{tooltipEntrySettings:m})});function J(e){var t,r,{points:i,props:l}=e,{line:g,lineType:d,lineJointType:c}=l;if(!g)return null;var m=(0,T.svgPropertiesNoEvents)(l),p=(0,T.svgPropertiesNoEventsFromUnknown)(g);if("joint"===d)t=i.map(e=>{var a,t;return{x:null!=(a=e.cx)?a:null,y:null!=(t=e.cy)?t:null}});else if("fitting"===d){var{xmin:y,xmax:u,a:x,b:h}=(0,s.getLinearRegression)(i);t=[{x:y,y:x*y+h},{x:u,y:x*u+h}]}var I=$($($({},m),{},{fill:"none",stroke:m&&m.fill},p),{},{points:t});return r=a.isValidElement(g)?a.cloneElement(g,I):"function"==typeof g?g(I):a.createElement(o.Curve,U({},I,{type:c})),a.createElement(n.Layer,{className:"recharts-scatter-line",key:"recharts-scatter-line"},r)}function q(e){var{showLabels:t,points:n,children:i}=e,o=(0,w.useViewBox)(),l=(0,a.useMemo)(()=>null==n?void 0:n.map(e=>{var a,t,n={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width};return $($({},n),{},{value:void 0,payload:e.payload,viewBox:n,parentViewBox:o,fill:void 0})}),[o,n]);return a.createElement(r.CartesianLabelListContextProvider,{value:t?l:void 0},i)}function H(e){var{points:t,allOtherScatterProps:r}=e,{shape:i,activeShape:o,dataKey:l}=r,{id:s}=r,g=W(r,R),c=(0,_.useAppSelector)(S.selectActiveTooltipIndex),{onMouseEnter:m,onClick:p,onMouseLeave:y}=r,h=W(r,G),I=(0,x.useMouseEnterItemDispatch)(m,l,s),M=(0,x.useMouseLeaveItemDispatch)(y),B=(0,x.useMouseClickItemDispatch)(p,l,s);if(!(0,d.isNonEmptyArray)(t))return null;var f=(0,T.svgPropertiesNoEvents)(g);return a.createElement(a.Fragment,null,a.createElement(J,{points:t,props:g}),t.map((e,t)=>{var r=null!=o&&!1!==o,l=r&&c===String(t),g=r&&l?o:i,m=$($($({},f),e),{},{index:t,[P.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]:String(s)});return a.createElement(k.ZIndexLayer,{key:"symbol-".concat(null==e?void 0:e.cx,"-").concat(null==e?void 0:e.cy,"-").concat(null==e?void 0:e.size,"-").concat(t),zIndex:l?O.DefaultZIndexes.activeDot:void 0},a.createElement(n.Layer,U({className:"recharts-scatter-symbol"},(0,d.adaptEventsOfChild)(h,e,t),{onMouseEnter:I(e,t),onMouseLeave:M(e,t),onClick:B(e,t)}),a.createElement(u,U({option:g,isActive:l},m))))}))}function X(e){var{previousPointsRef:t,props:i}=e,{points:o,isAnimationActive:l,animationBegin:g,animationDuration:d,animationEasing:c}=i,m=t.current,p=(0,D.useAnimationId)(i,"recharts-scatter-"),[y,u]=(0,a.useState)(!1),x=(0,a.useCallback)(()=>{u(!1)},[]),h=(0,a.useCallback)(()=>{u(!0)},[]),I=!y;return a.createElement(q,{showLabels:I,points:o},i.children,a.createElement(j.JavascriptAnimate,{animationId:p,begin:g,duration:d,isActive:l,easing:c,onAnimationEnd:x,onAnimationStart:h,key:p},e=>{var r=1===e?o:null==o?void 0:o.map((a,t)=>{var n=m&&m[t];return n?$($({},a),{},{cx:null==a.cx?void 0:(0,s.interpolate)(n.cx,a.cx,e),cy:null==a.cy?void 0:(0,s.interpolate)(n.cy,a.cy,e),size:(0,s.interpolate)(n.size,a.size,e)}):$($({},a),{},{size:(0,s.interpolate)(0,a.size,e)})});return e>0&&(t.current=r),a.createElement(n.Layer,null,a.createElement(H,{points:r,allOtherScatterProps:i,showLabels:I}))}),a.createElement(r.LabelListFromLabelProp,{label:i.label}))}function Y(e){var{displayedData:a,xAxis:t,yAxis:n,zAxis:r,scatterSettings:i,xAxisTicks:o,yAxisTicks:l,cells:d}=e,c=(0,s.isNullish)(t.dataKey)?i.dataKey:t.dataKey,m=(0,s.isNullish)(n.dataKey)?i.dataKey:n.dataKey,p=r&&r.dataKey,y=r?r.range:v.implicitZAxis.range,u=y&&y[0],x=t.scale.bandwidth?t.scale.bandwidth():0,h=n.scale.bandwidth?n.scale.bandwidth():0;return a.map((e,a)=>{var y=(0,g.getValueByDataKey)(e,c),I=(0,g.getValueByDataKey)(e,m),M=!(0,s.isNullish)(p)&&(0,g.getValueByDataKey)(e,p)||"-",B=[{name:(0,s.isNullish)(t.dataKey)?i.name:t.name||String(t.dataKey),unit:t.unit||"",value:y,payload:e,dataKey:c,type:i.tooltipType,graphicalItemId:i.id},{name:(0,s.isNullish)(n.dataKey)?i.name:n.name||String(n.dataKey),unit:n.unit||"",value:I,payload:e,dataKey:m,type:i.tooltipType,graphicalItemId:i.id}];"-"!==M&&null!=r&&B.push({name:r.name||r.dataKey,unit:r.unit||"",value:M,payload:e,dataKey:p,type:i.tooltipType,graphicalItemId:i.id});var f=(0,g.getCateCoordinateOfLine)({axis:t,ticks:o,bandSize:x,entry:e,index:a,dataKey:c}),v=(0,g.getCateCoordinateOfLine)({axis:n,ticks:l,bandSize:h,entry:e,index:a,dataKey:m}),A="-"!==M&&null!=r?r.scale.map(M):u,b=null==A?0:Math.sqrt(Math.max(A,0)/Math.PI);return $($({},e),{},{cx:f,cy:v,x:null==f?void 0:f-b,y:null==v?void 0:v-b,width:2*b,height:2*b,size:A,node:{x:y,y:I,z:M},tooltipPayload:B,tooltipPosition:{x:f,y:v},payload:e},d&&d[a]&&d[a].props)})}var Q=(e,a,t)=>({x:e.cx,y:e.cy,value:"x"===t?Number(e.node.x):Number(e.node.y),errorVal:(0,g.getValueByDataKey)(e,a)});function ee(e){var{hide:r,points:i,className:o,needClip:l,xAxisId:s,yAxisId:g,id:d}=e,c=(0,a.useRef)(null);if(r)return null;var m=(0,t.clsx)("recharts-scatter",o);return a.createElement(k.ZIndexLayer,{zIndex:e.zIndex},a.createElement(n.Layer,{className:m,clipPath:l?"url(#clipPath-".concat(d,")"):void 0,id:d},l&&a.createElement("defs",null,a.createElement(M.GraphicalItemClipPath,{clipPathId:d,xAxisId:s,yAxisId:g})),a.createElement(I.SetErrorBarContext,{xAxisId:s,yAxisId:g,data:i,dataPointFormatter:Q,errorBarOffset:0},a.createElement(n.Layer,{key:"recharts-scatter-symbols"},a.createElement(X,{props:e,previousPointsRef:c})))))}var ea={xAxisId:0,yAxisId:0,zAxisId:0,label:!1,line:!1,legendType:"circle",lineType:"joint",lineJointType:"linear",shape:"circle",hide:!1,isAnimationActive:"auto",animationBegin:0,animationDuration:400,animationEasing:"linear",zIndex:O.DefaultZIndexes.scatter};function et(e){var t=(0,N.resolveDefaultProps)(e,ea),{animationBegin:n,animationDuration:r,animationEasing:o,hide:s,isAnimationActive:g,legendType:d,lineJointType:c,lineType:m,shape:p,xAxisId:y,yAxisId:u,zAxisId:x}=t,h=W(t,F),{needClip:I}=(0,M.useNeedsClip)(y,u),B=(0,a.useMemo)(()=>(0,i.findAllByType)(e.children,l.Cell),[e.children]),f=(0,L.useIsPanorama)(),v=(0,_.useAppSelector)(a=>b(a,y,u,x,e.id,B,f));return null==I||null==v?null:a.createElement(a.Fragment,null,a.createElement(Z,{dataKey:e.dataKey,points:v,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,id:e.id}),a.createElement(ee,U({},h,{xAxisId:y,yAxisId:u,zAxisId:x,lineType:m,lineJointType:c,legendType:d,shape:p,hide:s,isAnimationActive:g,animationBegin:n,animationDuration:r,animationEasing:o,points:v,needClip:I})))}var en=a.memo(function(e){var t=(0,N.resolveDefaultProps)(e,ea),n=(0,L.useIsPanorama)();return a.createElement(E.RegisterGraphicalItemId,{id:t.id,type:"scatter"},e=>a.createElement(a.Fragment,null,a.createElement(C.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,fill:n,legendType:r,hide:i}=e;return[{inactive:i,dataKey:a,type:r,color:n,value:(0,g.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(K.SetCartesianGraphicalItem,{type:"scatter",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:t.zAxisId,dataKey:t.dataKey,hide:t.hide,name:t.name,tooltipType:t.tooltipType,isPanorama:n}),a.createElement(et,U({},t,{id:e}))))},z.propsAreEqual);en.displayName="Scatter";var er=e.i(471970),ei=e.i(437515),eo=["item"],el=(0,a.forwardRef)((e,t)=>a.createElement(ei.CartesianChart,{chartName:"ScatterChart",defaultTooltipEventType:"item",validateTooltipEventTypes:eo,tooltipPayloadSearcher:er.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["ScatterChart",0,el],908277)},483732,e=>{"use strict";var a=e.i(648863);let t=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],n=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],r=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],i=`
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
  },
];
`,o=`export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];`,l=`export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];`;var s=e.i(391398),g=e.i(520916),d=e.i(577596),c=e.i(979298),m=e.i(232471),p=e.i(481178),y=e.i(275519),u=e.i(317477),x=e.i(951254),h=e.i(44091),I=e.i(62904),M=e.i(391466),B=e.i(191788),f=e.i(526626),v=e.i(905e3),A=e.i(301426),b=e.i(881264),_=e.i(86443),L=e.i(723451),S=e.i(313667),C=e.i(908277),P=e.i(694713),D=e.i(756902),N=e.i(976835);function E(e,a){return e===a.x?"x":"y"}let K={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x"},T=(0,p.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,u.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,u.getThemeColor)(t,e):void 0}})),j=(0,y.factory)(e=>{let a=(0,h.useProps)("ScatterChart",K,e),{classNames:t,className:n,style:r,styles:i,unstyled:o,vars:l,referenceLines:p,dir:y,withLegend:j,withTooltip:w,withXAxis:k,withYAxis:O,xAxisProps:z,yAxisProps:R,orientation:G,scatterChartProps:F,legendProps:W,data:U,gridAxis:V,tickLine:$,strokeDasharray:Z,gridProps:J,tooltipAnimationDuration:q,tooltipProps:H,children:X,onMouseLeave:Y,dataKey:Q,textColor:ee,gridColor:ea,xAxisLabel:et,yAxisLabel:en,unit:er,labels:ei,valueFormatter:eo,scatterProps:el,pointLabels:es,attributes:eg,...ed}=a,ec=e=>"function"==typeof eo?eo:eo?.[e],em=ec("x"),ep=ec("y"),ey=(0,x.useMantineTheme)(),eu=U.map(e=>({...e,data:e.data.map(a=>({...a,name:e.name}))})),{resolvedClassNames:ex,resolvedStyles:eh}=(0,I.useResolvedStylesApi)({classNames:t,styles:i,props:a}),eI=(0,M.useStyles)({name:"ScatterChart",classes:c.default,props:a,className:n,style:r,classNames:t,styles:i,unstyled:o,attributes:eg,vars:l,varsResolver:T}),[eM,eB]=(0,B.useState)(null),ef=null!==eM,ev=p?.map((e,a)=>{let t=(0,u.getThemeColor)(e.color,ey);return(0,s.jsx)(_.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eI("referenceLine")},a)}),eA=eu.map((e,a)=>{let t=ef&&eM!==e.name;return(0,s.jsxs)(S.Scatter,{data:e.data,fill:(0,u.getThemeColor)(e.color,ey),isAnimationActive:!1,fillOpacity:t?.1:1,...el,children:[es&&(0,s.jsx)(A.LabelList,{dataKey:Q[es],fontSize:8,dy:10}),el?.children]},a)});return(0,s.jsx)(m.Box,{...eI("root"),onMouseLeave:e=>{eB(null),Y?.(e)},dir:y||"ltr",...ed,children:(0,s.jsx)(L.ResponsiveContainer,{...eI("container"),children:(0,s.jsxs)(C.ScatterChart,{margin:{bottom:et?30:void 0,left:en?10:void 0,right:en?5:void 0},...F,children:[(0,s.jsx)(f.CartesianGrid,{strokeDasharray:Z,vertical:"y"===V||"xy"===V,horizontal:"x"===V||"xy"===V,...eI("grid"),...J}),(0,s.jsxs)(D.XAxis,{type:"number",hide:!k,dataKey:Q.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==V&&("x"===$||"xy"===$)&&{stroke:"currentColor"},minTickGap:5,unit:er?.x,tickFormatter:em,...eI("axis"),...z,children:[et&&(0,s.jsx)(v.Label,{position:"insideBottom",offset:-20,fontSize:12,...eI("axisLabel"),children:et}),z?.children]}),(0,s.jsxs)(N.YAxis,{type:"number",hide:!O,axisLine:!1,dataKey:Q.y,tickLine:"none"!==V&&("y"===$||"xy"===$)&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:er?.y,tickFormatter:ep,...eI("axis"),...R,children:[en&&(0,s.jsx)(v.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eI("axisLabel"),children:en}),R?.children]}),w&&(0,s.jsx)(P.Tooltip,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Z},content:({label:e,payload:a,labelFormatter:t})=>(0,s.jsx)(g.ChartTooltip,{type:"scatter",label:t&&a?t(e,a):e,payload:ei?a?.map(e=>({...e,name:ei[E(e.name,Q)]||e.name,value:ec(E(e.name,Q))?.(e.value)??e.value})):a?.map(e=>({...e,value:ec(E(e.name,Q))?.(e.value)??e.value})),classNames:ex,styles:eh,series:U,attributes:eg}),...H}),j&&(0,s.jsx)(b.Legend,{verticalAlign:"top",content:e=>(0,s.jsx)(d.ChartLegend,{payload:e.payload?.map((e,a)=>({...e,dataKey:U[a].name})),onHighlight:eB,legendPosition:W?.verticalAlign||"top",classNames:ex,styles:eh,series:U,attributes:eg}),height:44,...W}),ev,eA]})})})});j.displayName="@mantine/charts/ScatterChart",j.classes=c.default,j.varsResolver=T;let w={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},k={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      dataKey={{ x: 'age', y: 'BMI' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},z={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",className:"m_f09a294f"})},code:[{code:`
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
import { ScatterChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      className={classes.root}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},R={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},G={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 20 }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},F={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withTooltip={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",referenceLines:[{y:14,label:"Underweight ↓",color:"red.7"},{y:19,label:"Normal weight",color:"teal.7"},{y:30,label:"Overweight ↑",color:"red.7"}]})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      referenceLines={[
        { y: 14, label: 'Underweight ↓', color: 'red.7' },
        { y: 19, label: 'Normal weight', color: 'teal.7' },
        { y: 30, label: 'Overweight ↑', color: 'red.7' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},U={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",strokeDasharray:"15 15"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      strokeDasharray="15 15"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},V={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipAnimationDuration:200})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipAnimationDuration={200}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},$={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:r,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3500] }}
      unit={{ y: '$' }}
      labels={{ x: 'Age', y: 'Spending' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Z={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",labels:{x:"Age",y:"Body mass index"}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      labels={{ x: 'Age', y: 'Body mass index' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var J=e.i(470743),q=e.i(883364);function H({payload:e}){return e?(0,s.jsx)(J.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:e.map(e=>(0,s.jsxs)(q.Text,{fz:"sm",children:[e.name,": ",e.value]},e.name))}):null}let X={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",tooltipProps:{content:({payload:e})=>(0,s.jsx)(H,{payload:e})}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  payload: readonly Record<string, any>[] | undefined;
}

function ChartTooltip({ payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md">
      {payload.map((item: any) => (
        <Text key={item.name} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      tooltipProps={{
        content: ({ payload }) => <ChartTooltip payload={payload} />,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},Y={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:r,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3400] }}
      valueFormatter={{
        x: (value) => \`\${value} years\`,
        y: (value) => \`$\${new Intl.NumberFormat('en-US').format(value)}\`,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",scatterProps:{shape:(0,s.jsx)("circle",{r:3})}})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      scatterProps={{ shape: <circle r={3} /> }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",pointLabels:"x"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      pointLabels="x"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var ea=(0,a.__exportAll)({axisProps:()=>O,customTooltip:()=>X,dotSize:()=>Q,gridColor:()=>z,labels:()=>Z,legend:()=>R,legendPosition:()=>G,multipleSeries:()=>k,noTooltip:()=>F,pointLabels:()=>ee,referenceLines:()=>W,strokeDasharray:()=>U,tooltipAnimation:()=>V,units:()=>$,usage:()=>w,valueFormatter:()=>Y});e.s(["ScatterChartDemos",0,ea],483732)}]);
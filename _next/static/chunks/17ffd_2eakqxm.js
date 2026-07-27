(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,313667,908277,e=>{"use strict";e.s(["Scatter",()=>er,"computeScatterPoints",()=>ee],313667);var a=e.i(191788),t=e.i(56206),n=e.i(815954),i=e.i(301426),r=e.i(106043),o=e.i(366998),l=e.i(300244),s=e.i(270627),g=e.i(516257),d=e.i(778979),c=e.i(285505),m=e.i(134959),p=["option"];function y(){return(y=Object.assign.bind()).apply(null,arguments)}function u(e){return a.createElement(c.Symbols,e)}function x(e){var t=e.option,n=function(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==a.indexOf(n))continue;t[n]=e[n]}return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,p);return"string"==typeof t?a.createElement(m.Shape,{option:a.createElement(c.Symbols,y({type:t},n)),DefaultShape:u,shapeProps:n}):a.createElement(m.Shape,{option:t,DefaultShape:u,shapeProps:n})}var h=e.i(616468),I=e.i(128002),M=e.i(170038),B=e.i(777814),f=e.i(314169),v=e.i(399479),A=e.i(83727),b=(0,f.createSelector)([A.selectUnfilteredCartesianItems,(e,a,t,n,i)=>i],(e,a)=>e.filter(e=>"scatter"===e.type).find(e=>e.id===a)),_=(0,f.createSelector)([(e,a,t,n,i,r,o)=>(0,v.selectChartDataWithIndexesIfNotInPanoramaPosition4)(e,void 0,void 0,o),(e,a,t,n,i,r,o)=>(0,A.selectAxisWithScale)(e,"xAxis",a,o),(e,a,t,n,i,r,o)=>(0,A.selectTicksOfGraphicalItem)(e,"xAxis",a,o),(e,a,t,n,i,r,o)=>(0,A.selectAxisWithScale)(e,"yAxis",t,o),(e,a,t,n,i,r,o)=>(0,A.selectTicksOfGraphicalItem)(e,"yAxis",t,o),(e,a,t,n)=>(0,A.selectZAxisWithScale)(e,"zAxis",n,!1),b,(e,a,t,n,i,r)=>r],(e,a,t,n,i,r,o,l)=>{var s,g=e.chartData,d=e.dataStartIndex,c=e.dataEndIndex;if(null!=o&&null!=(s=(null==o?void 0:o.data)!=null&&o.data.length>0?o.data:null==g?void 0:g.slice(d,c+1))&&null!=a&&null!=n&&null!=t&&null!=i&&(null==t?void 0:t.length)!==0&&(null==i?void 0:i.length)!==0)return ee({displayedData:s,xAxis:a,yAxis:n,zAxis:r,scatterSettings:o,xAxisTicks:t,yAxisTicks:i,cells:l})}),L=e.i(543372),S=e.i(662688),C=e.i(281695),P=e.i(836094),E=e.i(258111),D=e.i(297974),T=e.i(768069),K=e.i(436323),N=e.i(883388),j=e.i(901841),k=e.i(945031),w=e.i(634200),O=e.i(561622),z=e.i(446354),F=e.i(547810),R=["id"],G=["onMouseEnter","onClick","onMouseLeave"],W=["animationBegin","animationDuration","animationEasing","hide","isAnimationActive","legendType","lineJointType","lineType","shape","xAxisId","yAxisId","zAxisId"];function U(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==a.indexOf(n))continue;t[n]=e[n]}return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function V(){return(V=Object.assign.bind()).apply(null,arguments)}function $(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Z(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?$(Object(t),!0).forEach(function(a){var n,i,r;n=e,i=a,r=t[a],(i=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(i))in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var J=a.memo(e=>{var t=e.dataKey,n=e.points,i=e.stroke,r=e.strokeWidth,o=e.fill,l=e.name,s=e.hide,d=e.formatter,c=e.tooltipType,m=e.id,p={dataDefinedOnItem:null==n?void 0:n.map(e=>e.tooltipPayload),getPosition:e=>{var a;return null==n||null==(a=n[Number(e)])?void 0:a.tooltipPosition},settings:{stroke:i,strokeWidth:r,fill:o,nameKey:void 0,dataKey:t,name:(0,g.getTooltipNameProp)(l,t),hide:s,type:c,color:o,unit:"",formatter:d,graphicalItemId:m}};return a.createElement(I.SetTooltipEntrySettings,{tooltipEntrySettings:p})});function q(e){var t,i,r=e.points,l=e.props,g=l.line,d=l.lineType,c=l.lineJointType;if(!g)return null;var m=(0,N.svgPropertiesNoEvents)(l),p=(0,N.svgPropertiesNoEventsFromUnknown)(g);if("joint"===d)t=r.map(e=>{var a,t;return{x:null!=(a=e.cx)?a:null,y:null!=(t=e.cy)?t:null}});else if("fitting"===d){var y=(0,s.getLinearRegression)(r),u=y.xmin,x=y.xmax,h=y.a,I=y.b;t=[{x:u,y:h*u+I},{x:x,y:h*x+I}]}var M=Z(Z(Z({},m),{},{fill:"none",stroke:m&&m.fill},p),{},{points:t});return i=a.isValidElement(g)?a.cloneElement(g,M):"function"==typeof g?g(M):a.createElement(o.Curve,V({},M,{type:c})),a.createElement(n.Layer,{className:"recharts-scatter-line",key:"recharts-scatter-line"},i)}function H(e){var t=e.showLabels,n=e.points,r=e.children,o=(0,j.useViewBox)(),l=(0,a.useMemo)(()=>null==n?void 0:n.map(e=>{var a,t,n={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width};return Z(Z({},n),{},{value:void 0,payload:e.payload,viewBox:n,parentViewBox:o,fill:void 0})}),[o,n]);return a.createElement(i.CartesianLabelListContextProvider,{value:t?l:void 0},r)}function X(e){var t,i=e.entry,r=e.index,o=e.shape,l=e.activeShape,s=e.baseProps,g=e.id,c=e.restOfAllOtherProps,m=e.animationElapsedTime,p=e.isAnimating,y=e.isEntrance,u=e.onMouseEnterFromContext,h=e.onMouseLeaveFromContext,I=e.onClickFromContext,M=null!=l&&!1!==l,B=(0,a.useMemo)(()=>{var e=String(r);return a=>M&&(0,C.selectActiveTooltipIndex)(a)===e},[M,r]),f=null!=(t=(0,L.useAppSelector)(B))&&t,v=f&&null!=l&&!1!==l?l:o,A=Z(Z(Z({},s),i),{},{isActive:f,index:r,animationElapsedTime:m,isAnimating:p,isEntrance:y,[E.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]:String(g)});return a.createElement(O.ZIndexLayer,{zIndex:f?z.DefaultZIndexes.activeDot:void 0},a.createElement(n.Layer,V({className:"recharts-scatter-symbol"},(0,d.adaptEventsOfChild)(c,i,r),{onMouseEnter:u(i,r),onMouseLeave:h(i,r),onClick:I(i,r)}),a.createElement(x,V({option:v},A))))}function Y(e){var t=e.points,n=e.allOtherScatterProps,i=e.animationElapsedTime,r=e.isAnimating,o=e.isEntrance,l=n.shape,s=n.activeShape,g=n.dataKey,c=n.id,m=U(n,R),p=n.onMouseEnter,y=n.onClick,u=n.onMouseLeave,x=U(n,G),I=(0,h.useMouseEnterItemDispatch)(p,g,c),M=(0,h.useMouseLeaveItemDispatch)(u),B=(0,h.useMouseClickItemDispatch)(y,g,c);if(!(0,d.isNonEmptyArray)(t))return null;var f=(0,N.svgPropertiesNoEvents)(m);return a.createElement(a.Fragment,null,a.createElement(q,{points:t,props:m}),t.map((e,t)=>a.createElement(X,{key:"symbol-".concat(null==e?void 0:e.cx,"-").concat(null==e?void 0:e.cy,"-").concat(null==e?void 0:e.size,"-").concat(t),entry:e,index:t,shape:l,activeShape:s,baseProps:f,id:c,restOfAllOtherProps:x,animationElapsedTime:i,isAnimating:r,isEntrance:o,onMouseEnterFromContext:I,onMouseLeaveFromContext:M,onClickFromContext:B})))}function Q(e){var t=e.previousPointsRef,r=e.props,o=r.points,l=r.isAnimationActive,s=r.animationBegin,g=r.animationDuration,d=r.animationEasing,c=r.animationInterpolateFn,m=(0,k.useAnimationCallbacks)(),p=m.isAnimating,y=m.handleAnimationStart,u=m.handleAnimationEnd,x=(0,j.useCartesianChartLayout)();return null==x?null:a.createElement(H,{showLabels:!p,points:o},a.createElement(k.AnimatedItems,{animationInput:r,animationIdPrefix:"recharts-scatter-",items:o,previousItemsRef:t,isAnimationActive:l,animationBegin:s,animationDuration:g,animationEasing:d,onAnimationStart:y,onAnimationEnd:u,animationInterpolateFn:c,animationMatchBy:r.animationMatchBy,layout:x},(e,t,i)=>a.createElement(n.Layer,null,a.createElement(Y,{points:e,allOtherScatterProps:r,showLabels:!p,animationElapsedTime:t,isAnimating:p||t<1,isEntrance:i}))),r.children,a.createElement(i.LabelListFromLabelProp,{label:r.label}))}function ee(e){var a=e.displayedData,t=e.xAxis,n=e.yAxis,i=e.zAxis,r=e.scatterSettings,o=e.xAxisTicks,l=e.yAxisTicks,d=e.cells,c=(0,s.isNullish)(t.dataKey)?r.dataKey:t.dataKey,m=(0,s.isNullish)(n.dataKey)?r.dataKey:n.dataKey,p=i&&i.dataKey,y=i?i.range:A.implicitZAxis.range,u=y&&y[0],x=t.scale.bandwidth?t.scale.bandwidth():0,h=n.scale.bandwidth?n.scale.bandwidth():0;return a.map((e,a)=>{var y=(0,g.getValueByDataKey)(e,c),I=(0,g.getValueByDataKey)(e,m),M=!(0,s.isNullish)(p)&&(0,g.getValueByDataKey)(e,p)||"-",B=[{name:(0,s.isNullish)(t.dataKey)?r.name:t.name||String(t.dataKey),unit:t.unit||"",value:y,payload:e,dataKey:c,type:r.tooltipType,graphicalItemId:r.id},{name:(0,s.isNullish)(n.dataKey)?r.name:n.name||String(n.dataKey),unit:n.unit||"",value:I,payload:e,dataKey:m,type:r.tooltipType,graphicalItemId:r.id}];"-"!==M&&null!=i&&B.push({name:i.name||i.dataKey,unit:i.unit||"",value:M,payload:e,dataKey:p,type:r.tooltipType,graphicalItemId:r.id});var f=(0,g.getCateCoordinateOfLine)({axis:t,ticks:o,bandSize:x,entry:e,index:a,dataKey:c}),v=(0,g.getCateCoordinateOfLine)({axis:n,ticks:l,bandSize:h,entry:e,index:a,dataKey:m}),A="-"!==M&&null!=i?i.scale.map(M):u,b=null==A?0:Math.sqrt(Math.max(A,0)/Math.PI);return Z(Z({},e),{},{cx:f,cy:v,x:null==f?void 0:f-b,y:null==v?void 0:v-b,width:2*b,height:2*b,size:A,node:{x:y,y:I,z:M},tooltipPayload:B,tooltipPosition:{x:f,y:v},payload:e},d&&d[a]&&d[a].props)})}var ea=(e,a,t)=>({x:e.cx,y:e.cy,value:"x"===t?Number(e.node.x):Number(e.node.y),errorVal:(0,g.getValueByDataKey)(e,a)});function et(e){var i=e.hide,r=e.points,o=e.className,l=e.needClip,s=e.xAxisId,g=e.yAxisId,d=e.id,c=(0,a.useRef)(null);if(i)return null;var m=(0,t.clsx)("recharts-scatter",o);return a.createElement(O.ZIndexLayer,{zIndex:e.zIndex},a.createElement(n.Layer,{className:m,clipPath:l?"url(#clipPath-".concat(d,")"):void 0,id:d},l&&a.createElement("defs",null,a.createElement(B.GraphicalItemClipPath,{clipPathId:d,xAxisId:s,yAxisId:g})),a.createElement(M.SetErrorBarContext,{xAxisId:s,yAxisId:g,data:r,dataPointFormatter:ea,errorBarOffset:0},a.createElement(n.Layer,{key:"recharts-scatter-symbols"},a.createElement(Q,{props:e,previousPointsRef:c})))))}var en={xAxisId:0,yAxisId:0,zAxisId:0,label:!1,line:!1,legendType:"circle",lineType:"joint",lineJointType:"linear",shape:"circle",hide:!1,isAnimationActive:"auto",animationBegin:0,animationDuration:400,animationEasing:"linear",animationMatchBy:w.matchAppend,animationInterpolateFn:(e,a)=>null==e?[]:1===a?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"removed"===e.status?[]:"matched"===e.status?[Z(Z({},e.next),{},{cx:null==e.next.cx?void 0:(0,s.interpolate)(e.prev.cx,e.next.cx,a),cy:null==e.next.cy?void 0:(0,s.interpolate)(e.prev.cy,e.next.cy,a),size:(0,s.interpolate)(e.prev.size,e.next.size,a)})]:[Z(Z({},e.next),{},{size:(0,s.interpolate)(0,e.next.size,a)})]),zIndex:z.DefaultZIndexes.scatter};function ei(e){var t=(0,D.resolveDefaultProps)(e,en),n=t.animationBegin,i=t.animationDuration,o=t.animationEasing,s=t.hide,g=t.isAnimationActive,d=t.legendType,c=t.lineJointType,m=t.lineType,p=t.shape,y=t.xAxisId,u=t.yAxisId,x=t.zAxisId,h=U(t,W),I=(0,B.useNeedsClip)(y,u).needClip,M=(0,a.useMemo)(()=>(0,r.findAllByType)(e.children,l.Cell),[e.children]),f=(0,S.useIsPanorama)(),v=(0,L.useAppSelector)(a=>_(a,y,u,x,e.id,M,f));return null==I||null==v?null:a.createElement(a.Fragment,null,a.createElement(J,{dataKey:e.dataKey,points:v,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,formatter:e.formatter,tooltipType:e.tooltipType,id:e.id}),a.createElement(et,V({},h,{xAxisId:y,yAxisId:u,zAxisId:x,lineType:m,lineJointType:c,legendType:d,shape:p,hide:s,isAnimationActive:g,animationBegin:n,animationDuration:i,animationEasing:o,points:v,needClip:I})))}var er=a.memo(function(e){var t=(0,D.resolveDefaultProps)(e,en),n=(0,S.useIsPanorama)();return a.createElement(T.RegisterGraphicalItemId,{id:t.id,type:"scatter"},e=>{var i,r,o,l;return a.createElement(a.Fragment,null,a.createElement(P.SetLegendPayload,{legendPayload:(i=t.dataKey,r=t.name,o=t.fill,l=t.legendType,[{inactive:t.hide,dataKey:i,type:l,color:o,value:(0,g.getTooltipNameProp)(r,i),payload:t}])}),a.createElement(K.SetCartesianGraphicalItem,{type:"scatter",id:e,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:t.zAxisId,dataKey:t.dataKey,hide:t.hide,name:t.name,tooltipType:t.tooltipType,isPanorama:n}),a.createElement(ei,V({},t,{id:e})))})},F.propsAreEqual);er.displayName="Scatter";var eo=e.i(471970),el=e.i(437515),es=["item"],eg=(0,a.forwardRef)((e,t)=>a.createElement(el.CartesianChart,{chartName:"ScatterChart",defaultTooltipEventType:"item",validateTooltipEventTypes:es,tooltipPayloadSearcher:eo.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["ScatterChart",0,eg],908277)},275971,e=>{"use strict";var a=e.i(648863);let t=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],n=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],i=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],r=`
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
];`;var s=e.i(391398),g=e.i(520916),d=e.i(577596),c=e.i(979298),m=e.i(232471),p=e.i(481178),y=e.i(275519),u=e.i(317477),x=e.i(951254),h=e.i(44091),I=e.i(62904),M=e.i(391466),B=e.i(526626),f=e.i(905e3),v=e.i(301426),A=e.i(881264),b=e.i(86443),_=e.i(723451),L=e.i(313667),S=e.i(908277),C=e.i(694713),P=e.i(756902),E=e.i(976835),D=e.i(191788);function T(e,a){return e===a.x?"x":"y"}let K={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",accessibilityLayer:!0},N=(0,p.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,u.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,u.getThemeColor)(t,e):void 0}})),j=(0,y.factory)(e=>{let a=(0,h.useProps)("ScatterChart",K,e),{classNames:t,className:n,style:i,styles:r,unstyled:o,vars:l,referenceLines:p,dir:y,withLegend:j,withTooltip:k,withXAxis:w,withYAxis:O,xAxisProps:z,yAxisProps:F,orientation:R,scatterChartProps:G,legendProps:W,data:U,gridAxis:V,tickLine:$,strokeDasharray:Z,gridProps:J,tooltipAnimationDuration:q,tooltipProps:H,children:X,onMouseLeave:Y,dataKey:Q,textColor:ee,gridColor:ea,xAxisLabel:et,yAxisLabel:en,unit:ei,labels:er,valueFormatter:eo,scatterProps:el,pointLabels:es,attributes:eg,accessibilityLayer:ed,...ec}=a,em=e=>"function"==typeof eo?eo:eo?.[e],ep=em("x"),ey=em("y"),eu=(0,x.useMantineTheme)(),ex=U.map(e=>({...e,data:e.data.map(a=>({...a,name:e.name}))})),{resolvedClassNames:eh,resolvedStyles:eI}=(0,I.useResolvedStylesApi)({classNames:t,styles:r,props:a}),eM=(0,M.useStyles)({name:"ScatterChart",classes:c.default,props:a,className:n,style:i,classNames:t,styles:r,unstyled:o,attributes:eg,vars:l,varsResolver:N}),[eB,ef]=(0,D.useState)(null),ev=null!==eB,eA=p?.map((e,a)=>{let t=(0,u.getThemeColor)(e.color,eu);return(0,s.jsx)(b.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eM("referenceLine")},a)}),eb=ex.map((e,a)=>{let t=ev&&eB!==e.name;return(0,s.jsxs)(L.Scatter,{data:e.data,fill:(0,u.getThemeColor)(e.color,eu),isAnimationActive:!1,fillOpacity:t?.1:1,...el,children:[es&&(0,s.jsx)(v.LabelList,{dataKey:Q[es],fontSize:8,dy:10}),el?.children]},a)});return(0,s.jsx)(m.Box,{...eM("root"),onMouseLeave:e=>{ef(null),Y?.(e)},dir:y||"ltr",...ec,children:(0,s.jsx)(_.ResponsiveContainer,{...eM("container"),children:(0,s.jsxs)(S.ScatterChart,{margin:{bottom:et?30:void 0,left:en?10:void 0,right:en?5:void 0},accessibilityLayer:ed,...G,children:[(0,s.jsx)(B.CartesianGrid,{strokeDasharray:Z,vertical:"y"===V||"xy"===V,horizontal:"x"===V||"xy"===V,...eM("grid"),...J}),(0,s.jsxs)(P.XAxis,{type:"number",hide:!w,dataKey:Q.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==V&&("x"===$||"xy"===$)&&{stroke:"currentColor"},minTickGap:5,unit:ei?.x,tickFormatter:ep,...eM("axis"),...z,children:[et&&(0,s.jsx)(f.Label,{position:"insideBottom",offset:-20,fontSize:12,...eM("axisLabel"),children:et}),z?.children]}),(0,s.jsxs)(E.YAxis,{type:"number",hide:!O,axisLine:!1,dataKey:Q.y,tickLine:"none"!==V&&("y"===$||"xy"===$)&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:ei?.y,tickFormatter:ey,...eM("axis"),...F,children:[en&&(0,s.jsx)(f.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eM("axisLabel"),children:en}),F?.children]}),k&&(0,s.jsx)(C.Tooltip,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Z},content:({label:e,payload:a,labelFormatter:t})=>(0,s.jsx)(g.ChartTooltip,{type:"scatter",label:t&&a?t(e,a):e,payload:er?a?.map(e=>({...e,name:er[T(e.name,Q)]||e.name,value:em(T(e.name,Q))?.(e.value)??e.value})):a?.map(e=>({...e,value:em(T(e.name,Q))?.(e.value)??e.value})),classNames:eh,styles:eI,series:U,attributes:eg}),...H}),j&&(0,s.jsx)(A.Legend,{verticalAlign:"top",content:e=>(0,s.jsx)(d.ChartLegend,{payload:e.payload?.map((e,a)=>({...e,dataKey:U[a].name})),onHighlight:ef,legendPosition:W?.verticalAlign||"top",classNames:eh,styles:eI,series:U,attributes:eg}),height:44,...W}),eA,eb]})})})});j.displayName="@mantine/charts/ScatterChart",j.classes=c.default,j.varsResolver=N;let k={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},O={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},dataKey:{x:"age",y:"BMI"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},F={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},R={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:n,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withLegend:!0,legendProps:{verticalAlign:"bottom",height:20}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},G={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:t,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI",withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},$={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:i,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3500]},unit:{y:"$"},labels:{x:"Age",y:"Spending"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},Y={type:"code",component:function(){return(0,s.jsx)(j,{h:350,data:i,dataKey:{x:"age",y:"average_monthly_spending"},yAxisProps:{domain:[800,3400]},valueFormatter:{x:e=>`${e} years`,y:e=>`$${new Intl.NumberFormat("en-US").format(e)}`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var ea=(0,a.__exportAll)({axisProps:()=>O,customTooltip:()=>X,dotSize:()=>Q,gridColor:()=>z,labels:()=>Z,legend:()=>F,legendPosition:()=>R,multipleSeries:()=>w,noTooltip:()=>G,pointLabels:()=>ee,referenceLines:()=>W,strokeDasharray:()=>U,tooltipAnimation:()=>V,units:()=>$,usage:()=>k,valueFormatter:()=>Y});e.s(["ScatterChartDemos",0,ea],275971)}]);
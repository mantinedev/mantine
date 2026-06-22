(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},467765,333710,808550,343311,384464,e=>{"use strict";var t=e.i(63713),a=e.i(270627),r=(e,t,r)=>{var o=null!=r?r:e;if(!(0,a.isNullish)(o))return(0,a.getPercentValue)(o,t,0)};e.s(["combineBarSizeList",0,(e,a,o)=>{var n=e.filter(t.isStacked),i=e.filter(e=>null==e.stackId);return[...Object.entries(n.reduce((e,t)=>{var a=e[t.stackId];return null==a&&(a=[]),a.push(t),e[t.stackId]=a,e},{})).map(e=>{var t,[n,i]=e;return{stackId:n,dataKeys:i.map(e=>e.dataKey),barSize:r(a,o,null==(t=i[0])?void 0:t.barSize)}}),...i.map(e=>({stackId:void 0,dataKeys:[e.dataKey].filter(e=>null!=e),barSize:r(a,o,e.barSize)}))]}],467765);var o=e.i(500678);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}e.s(["combineAllBarPositions",0,(e,t,r,n,l,s,c)=>{var d=function(e,t,r,n,i){var l,s,c=n.length;if(!(c<1)){var d=(0,a.getPercentValue)(e,r,0,!0),p=[];if((0,o.isWellBehavedNumber)(null==(l=n[0])?void 0:l.barSize)){var m=!1,u=r/c,h=n.reduce((e,t)=>e+(t.barSize||0),0);(h+=(c-1)*d)>=r&&(h-=(c-1)*d,d=0),h>=r&&u>0&&(m=!0,u*=.9,h=c*u);var y={offset:((r-h)/2|0)-d,size:0};s=n.reduce((e,t)=>{var a,r={stackId:t.stackId,dataKeys:t.dataKeys,position:{offset:y.offset+y.size+d,size:m?u:null!=(a=t.barSize)?a:0}},o=[...e,r];return y=r.position,o},p)}else{var x=(0,a.getPercentValue)(t,r,0,!0);r-2*x-(c-1)*d<=0&&(d=0);var f=(r-2*x-(c-1)*d)/c;f>1&&(f>>=0);var g=(0,o.isWellBehavedNumber)(i)?Math.min(f,i):f;s=n.reduce((e,t,a)=>[...e,{stackId:t.stackId,dataKeys:t.dataKeys,position:{offset:x+(f+d)*a+(f-g)/2,size:g}}],p)}return s}}(r,n,l!==s?l:s,e,(0,a.isNullish)(c)?t:c);return l!==s&&null!=d&&(d=d.map(e=>i(i({},e),{},{position:i(i({},e.position),{},{offset:e.position.offset-l/2})}))),d}],333710);var l=e.i(365441);e.s(["combineStackedData",0,(e,t)=>{var a=(0,l.getStackSeriesIdentifier)(t);if(!e||null==a||null==t)return;var{stackId:r}=t;if(null!=r){var o=e[r];if(o){var{stackedData:n}=o;if(n)return n.find(e=>e.key===a)}}}],808550),e.s(["combineBarPosition",0,(e,t)=>{if(null!=e&&null!=t){var a=e.find(e=>e.stackId===t.stackId&&null!=t.dataKey&&e.dataKeys.includes(t.dataKey));if(null!=a)return a.position}}],343311),e.s(["getZIndexFromUnknown",0,function(e,t){return e&&"object"==typeof e&&"zIndex"in e&&"number"==typeof e.zIndex&&(0,o.isWellBehavedNumber)(e.zIndex)?e.zIndex:t}],384464)},57699,e=>{"use strict";e.s(["Bar",()=>eS,"computeBarRectangles",()=>ew],57699);var t=e.i(191788),a=e.i(56206),r=e.i(815954),o=e.i(300244),n=e.i(301426),i=e.i(270627),l=e.i(106043),s=e.i(516257),c=e.i(778979);e.i(350461);var d=e.i(134959);function p(){return(p=Object.assign.bind()).apply(null,arguments)}function m(e){return t.createElement(d.Shape,p({shapeType:"rectangle",activeClassName:"recharts-active-bar",inActiveClassName:"recharts-inactive-bar"},e))}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(a,r)=>{if((0,i.isNumber)(e))return e;var o=(0,i.isNumber)(a)||(0,i.isNullish)(a);return o?e(a,r):(o||function(e,t){if(!e)throw Error("Invariant failed")}(!1,"minPointSize callback function received a value with type of ".concat(typeof a,". Currently only numbers or null/undefined are supported.")),t)}},h=e.i(616468),y=e.i(128002),x=e.i(170038),f=e.i(777814),g=e.i(901841),v=e.i(451400),b=e.i(83727),A=e.i(399479),C=e.i(868413),j=e.i(755335),P=e.i(467765),I=e.i(333710),O=e.i(808550),k=e.i(780950),D=e.i(343311),w=(0,v.createSelector)([b.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"bar"===e.type).find(e=>e.id===t)),S=(0,v.createSelector)([w],e=>null==e?void 0:e.maxBarSize),E=(0,v.createSelector)([g.selectChartLayout,b.selectUnfilteredCartesianItems,k.selectXAxisIdFromGraphicalItemId,k.selectYAxisIdFromGraphicalItemId,(e,t,a)=>a],(e,t,a,r,o)=>t.filter(t=>"horizontal"===e?t.xAxisId===a:t.yAxisId===r).filter(e=>e.isPanorama===o).filter(e=>!1===e.hide).filter(e=>"bar"===e.type)),N=(0,v.createSelector)([E,j.selectRootBarSize,(e,t)=>{var a=(0,g.selectChartLayout)(e),r=(0,k.selectXAxisIdFromGraphicalItemId)(e,t),o=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null!=r&&null!=o)return"horizontal"===a?(0,b.selectCartesianAxisSize)(e,"xAxis",r):(0,b.selectCartesianAxisSize)(e,"yAxis",o)}],P.combineBarSizeList),T=(e,t,a)=>{var r,o,n=(0,g.selectChartLayout)(e),i=(0,k.selectXAxisIdFromGraphicalItemId)(e,t),l=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null!=i&&null!=l)return"horizontal"===n?(r=(0,b.selectAxisWithScale)(e,"xAxis",i,a),o=(0,b.selectTicksOfGraphicalItem)(e,"xAxis",i,a)):(r=(0,b.selectAxisWithScale)(e,"yAxis",l,a),o=(0,b.selectTicksOfGraphicalItem)(e,"yAxis",l,a)),(0,s.getBandSizeOfAxis)(r,o)},L=(0,v.createSelector)([N,j.selectRootMaxBarSize,j.selectBarGap,j.selectBarCategoryGap,(e,t,a)=>{var r,o,n,l,c=w(e,t);if(null==c)return 0;var d=(0,k.selectXAxisIdFromGraphicalItemId)(e,t),p=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null==d||null==p)return 0;var m=(0,g.selectChartLayout)(e),u=(0,j.selectRootMaxBarSize)(e),{maxBarSize:h}=c,y=(0,i.isNullish)(h)?u:h;return"horizontal"===m?(n=(0,b.selectAxisWithScale)(e,"xAxis",d,a),l=(0,b.selectTicksOfGraphicalItem)(e,"xAxis",d,a)):(n=(0,b.selectAxisWithScale)(e,"yAxis",p,a),l=(0,b.selectTicksOfGraphicalItem)(e,"yAxis",p,a)),null!=(r=null!=(o=(0,s.getBandSizeOfAxis)(n,l,!0))?o:y)?r:0},T,S],I.combineAllBarPositions),B=(0,v.createSelector)([L,w],D.combineBarPosition),K=(0,v.createSelector)([(e,t,a)=>{var r=(0,g.selectChartLayout)(e),o=(0,k.selectXAxisIdFromGraphicalItemId)(e,t),n=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null!=o&&null!=n)return"horizontal"===r?(0,b.selectStackGroups)(e,"yAxis",n,a):(0,b.selectStackGroups)(e,"xAxis",o,a)},w],O.combineStackedData),W=(0,v.createSelector)([C.selectChartOffsetInternal,C.selectAxisViewBox,(e,t,a)=>{var r=(0,k.selectXAxisIdFromGraphicalItemId)(e,t);if(null!=r)return(0,b.selectAxisWithScale)(e,"xAxis",r,a)},(e,t,a)=>{var r=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null!=r)return(0,b.selectAxisWithScale)(e,"yAxis",r,a)},(e,t,a)=>{var r=(0,k.selectXAxisIdFromGraphicalItemId)(e,t);if(null!=r)return(0,b.selectTicksOfGraphicalItem)(e,"xAxis",r,a)},(e,t,a)=>{var r=(0,k.selectYAxisIdFromGraphicalItemId)(e,t);if(null!=r)return(0,b.selectTicksOfGraphicalItem)(e,"yAxis",r,a)},B,g.selectChartLayout,A.selectChartDataWithIndexesIfNotInPanoramaPosition3,T,K,w,(e,t,a,r)=>r],(e,t,a,r,o,n,i,l,s,c,d,p,m)=>{var u,{chartData:h,dataStartIndex:y,dataEndIndex:x}=s;if(null!=p&&null!=i&&null!=t&&("horizontal"===l||"vertical"===l)&&null!=a&&null!=r&&null!=o&&null!=n&&null!=c){var{data:f}=p;if(null!=(u=null!=f&&f.length>0?f:null==h?void 0:h.slice(y,x+1)))return ew({layout:l,barSettings:p,pos:i,parentViewBox:t,bandSize:c,xAxis:a,yAxis:r,xAxisTicks:o,yAxisTicks:n,stackedData:d,displayedData:u,offset:e,cells:m,dataStartIndex:y})}}),M=e.i(543372),z=e.i(662688),F=e.i(281695),R=e.i(836094),G=e.i(3304),V=e.i(297974),Y=e.i(768069),U=e.i(436323),X=e.i(883388),_=e.i(355476),Z=e.i(561622),q=e.i(446354),$=e.i(384464),H=e.i(547810),J=(e.i(589501),(e,t)=>t),Q=(e,t,a)=>a,ee=(0,v.createSelector)([J,b.selectUnfilteredCartesianItems,Q],(e,t,a)=>t.filter(e=>"bar"===e.type).filter(t=>t.stackId===e).filter(e=>e.isPanorama===a).filter(e=>!e.hide)),et=(0,v.createSelector)([ee],e=>e.map(e=>e.id)),ea=(0,v.createSelector)([e=>e,J,Q],(e,t,a)=>{var r=et(e,t,a),o=[];return r.forEach(t=>{var r=W(e,t,a,void 0);null==r||r.forEach(e=>{var t=e.originalDataIndex;o[t]=((e,t)=>{if(!e)return t;if(!t)return e;var a=Math.min(e.x,e.x+e.width,t.x,t.x+t.width),r=Math.min(e.y,e.y+e.height,t.y,t.y+t.height);return{x:a,y:r,width:Math.max(e.x,e.x+e.width,t.x,t.x+t.width)-a,height:Math.max(e.y,e.y+e.height,t.y,t.y+t.height)-r}})(o[t],e)})}),o}),er=e.i(355345),eo=["index"];function en(){return(en=Object.assign.bind()).apply(null,arguments)}var ei=(0,t.createContext)(void 0),el=(e,t)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(t),es=e=>{var{index:a}=e,o=function(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(e,eo),n=(e=>{var a=(0,t.useContext)(ei);if(null!=a){var{stackId:r}=a;return"url(#".concat(el(r,e),")")}})(a);return t.createElement(r.Layer,en({className:"recharts-bar-stack-layer",clipPath:n},o))};H.propsAreEqual;var ec=["onMouseEnter","onMouseLeave","onClick"],ed=["value","background","tooltipPosition"],ep=["id"],em=["onMouseEnter","onClick","onMouseLeave"];function eu(){return(eu=Object.assign.bind()).apply(null,arguments)}function eh(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function ey(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eh(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eh(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function ex(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var ef=t.memo(e=>{var{dataKey:a,stroke:r,strokeWidth:o,fill:n,name:l,hide:c,unit:d,tooltipType:p,id:m}=e,u={dataDefinedOnItem:void 0,getPosition:i.noop,settings:{stroke:r,strokeWidth:o,fill:n,dataKey:a,nameKey:void 0,name:(0,s.getTooltipNameProp)(l,a),hide:c,type:p,color:n,unit:d,graphicalItemId:m}};return t.createElement(y.SetTooltipEntrySettings,{tooltipEntrySettings:u})});function eg(e){var a=(0,M.useAppSelector)(F.selectActiveTooltipIndex),{data:r,dataKey:o,background:n,allOtherBarProps:i}=e,{onMouseEnter:l,onMouseLeave:s,onClick:d}=i,p=ex(i,ec),u=(0,h.useMouseEnterItemDispatch)(l,o,i.id),y=(0,h.useMouseLeaveItemDispatch)(s),x=(0,h.useMouseClickItemDispatch)(d,o,i.id);if(!n||null==r)return null;var f=(0,X.svgPropertiesNoEventsFromUnknown)(n);return t.createElement(Z.ZIndexLayer,{zIndex:(0,$.getZIndexFromUnknown)(n,q.DefaultZIndexes.barBackground)},r.map((e,r)=>{var{value:i,background:l,tooltipPosition:s}=e,d=ex(e,ed);if(!l)return null;var h=u(e,r),g=y(e,r),v=x(e,r),b=ey(ey(ey(ey(ey({option:n,isActive:String(r)===a},d),{},{fill:"#eee"},l),f),(0,c.adaptEventsOfChild)(p,e,r)),{},{onMouseEnter:h,onMouseLeave:g,onClick:v,dataKey:o,index:r,className:"recharts-bar-background-rectangle"});return t.createElement(m,eu({key:"background-bar-".concat(r)},b))}))}function ev(e){var{showLabels:a,children:r,rects:o}=e,i=null==o?void 0:o.map(e=>{var t={x:e.x,y:e.y,width:e.width,lowerWidth:e.width,upperWidth:e.width,height:e.height};return ey(ey({},t),{},{value:e.value,payload:e.payload,parentViewBox:e.parentViewBox,viewBox:t,fill:e.fill})});return t.createElement(n.CartesianLabelListContextProvider,{value:a?i:void 0},r)}function eb(e){var a,{shape:r,activeBar:o,baseProps:n,entry:i,index:l,dataKey:s}=e,c=(0,M.useAppSelector)(F.selectActiveTooltipIndex),d=(0,M.useAppSelector)(F.selectActiveTooltipDataKey),p=o&&String(i.originalDataIndex)===c&&(null==d||s===d),[u,h]=(0,t.useState)(!1),[y,x]=(0,t.useState)(!1);(0,t.useEffect)(()=>{var e;return p?(h(!0),e=requestAnimationFrame(()=>{x(!0)})):x(!1),()=>{cancelAnimationFrame(e)}},[p]);var f=(0,t.useCallback)(()=>{p||h(!1)},[p]),g=p&&y,v=p||u;a=p?!0===o?r:o:r;var b=t.createElement(m,eu({},n,{name:String(n.name)},i,{isActive:g,option:a,index:l,dataKey:s,onTransitionEnd:f}));return v?t.createElement(Z.ZIndexLayer,{zIndex:q.DefaultZIndexes.activeBar},t.createElement(es,{index:i.originalDataIndex},b)):b}function eA(e){var{shape:a,baseProps:r,entry:o,index:n,dataKey:i}=e;return t.createElement(m,eu({},r,{name:String(r.name)},o,{isActive:!1,option:a,index:n,dataKey:i}))}function eC(e){var a,{data:r,props:o}=e,n=null!=(a=(0,X.svgPropertiesNoEvents)(o))?a:{},{id:i}=n,l=ex(n,ep),{shape:s,dataKey:d,activeBar:p}=o,{onMouseEnter:m,onClick:u,onMouseLeave:y}=o,x=ex(o,em),f=(0,h.useMouseEnterItemDispatch)(m,d,i),g=(0,h.useMouseLeaveItemDispatch)(y),v=(0,h.useMouseClickItemDispatch)(u,d,i);return r?t.createElement(t.Fragment,null,r.map((e,a)=>t.createElement(es,eu({index:e.originalDataIndex,key:"rectangle-".concat(null==e?void 0:e.x,"-").concat(null==e?void 0:e.y,"-").concat(null==e?void 0:e.value,"-").concat(a),className:"recharts-bar-rectangle"},(0,c.adaptEventsOfChild)(x,e,a),{onMouseEnter:f(e,a),onMouseLeave:g(e,a),onClick:v(e,a)}),p?t.createElement(eb,{shape:s,activeBar:p,baseProps:l,entry:e,index:a,dataKey:d}):t.createElement(eA,{shape:s,baseProps:l,entry:e,index:a,dataKey:d})))):null}function ej(e){var{props:a,previousRectanglesRef:o}=e,{data:l,layout:s,isAnimationActive:c,animationBegin:d,animationDuration:p,animationEasing:m,onAnimationEnd:u,onAnimationStart:h}=a,y=o.current,x=(0,G.useAnimationId)(a,"recharts-bar-"),[f,g]=(0,t.useState)(!1),v=(0,t.useCallback)(()=>{"function"==typeof u&&u(),g(!1)},[u]),b=(0,t.useCallback)(()=>{"function"==typeof h&&h(),g(!0)},[h]);return t.createElement(ev,{showLabels:!f,rects:l},t.createElement(_.JavascriptAnimate,{animationId:x,begin:d,duration:p,isActive:c,easing:m,onAnimationEnd:v,onAnimationStart:b,key:x},e=>{var n=1===e?l:null==l?void 0:l.map((t,a)=>{var r=y&&y[a];if(r)return ey(ey({},t),{},{x:(0,i.interpolate)(r.x,t.x,e),y:(0,i.interpolate)(r.y,t.y,e),width:(0,i.interpolate)(r.width,t.width,e),height:(0,i.interpolate)(r.height,t.height,e)});if("horizontal"===s){var o=(0,i.interpolate)(0,t.height,e),n=(0,i.interpolate)(t.stackedBarStart,t.y,e);return ey(ey({},t),{},{y:n,height:o})}var l=(0,i.interpolate)(0,t.width,e),c=(0,i.interpolate)(t.stackedBarStart,t.x,e);return ey(ey({},t),{},{width:l,x:c})});return(e>0&&(o.current=null!=n?n:null),null==n)?null:t.createElement(r.Layer,null,t.createElement(eC,{props:a,data:n}))}),t.createElement(n.LabelListFromLabelProp,{label:a.label}),a.children)}function eP(e){var a=(0,t.useRef)(null);return t.createElement(ej,{previousRectanglesRef:a,props:e})}var eI=(e,t)=>{var a=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:a,errorVal:(0,s.getValueByDataKey)(e,t)}};class eO extends t.PureComponent{render(){var{hide:e,data:o,dataKey:n,className:i,xAxisId:l,yAxisId:s,needClip:c,background:d,id:p}=this.props;if(e||null==o)return null;var m=(0,a.clsx)("recharts-bar",i);return t.createElement(r.Layer,{className:m,id:p},c&&t.createElement("defs",null,t.createElement(f.GraphicalItemClipPath,{clipPathId:p,xAxisId:l,yAxisId:s})),t.createElement(r.Layer,{className:"recharts-bar-rectangles",clipPath:c?"url(#clipPath-".concat(p,")"):void 0},t.createElement(eg,{data:o,dataKey:n,background:d,allOtherBarProps:this.props}),t.createElement(eP,this.props)))}}var ek={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:0,xAxisId:0,yAxisId:0,zIndex:q.DefaultZIndexes.bar};function eD(e){var a,{xAxisId:r,yAxisId:n,hide:i,legendType:s,minPointSize:c,activeBar:d,animationBegin:p,animationDuration:m,animationEasing:u,isAnimationActive:h}=e,{needClip:y}=(0,f.useNeedsClip)(r,n),v=(0,g.useChartLayout)(),b=(0,z.useIsPanorama)(),A=(0,l.findAllByType)(e.children,o.Cell),C=(0,M.useAppSelector)(t=>W(t,e.id,b,A));if("vertical"!==v&&"horizontal"!==v)return null;var j=null==C?void 0:C[0];return a=null==j||null==j.height||null==j.width?0:"vertical"===v?j.height/2:j.width/2,t.createElement(x.SetErrorBarContext,{xAxisId:r,yAxisId:n,data:C,dataPointFormatter:eI,errorBarOffset:a},t.createElement(eO,eu({},e,{layout:v,needClip:y,data:C,xAxisId:r,yAxisId:n,hide:i,legendType:s,minPointSize:c,activeBar:d,animationBegin:p,animationDuration:m,animationEasing:u,isAnimationActive:h})))}function ew(e){var{layout:t,barSettings:{dataKey:a,minPointSize:r,hasCustomShape:o},pos:n,bandSize:l,xAxis:c,yAxis:d,xAxisTicks:p,yAxisTicks:m,stackedData:h,displayedData:y,offset:x,cells:f,parentViewBox:g,dataStartIndex:v}=e,b="horizontal"===t?d:c,A=h?b.scale.domain():null,C=(0,s.getBaseValueOfBar)({numericAxis:b}),j=b.scale.map(C);return y.map((e,y)=>{if(h){var b=h[y+v];if(null==b)return null;I=(0,s.truncateByDomain)(b,A)}else Array.isArray(I=(0,s.getValueByDataKey)(e,a))||(I=[C,I]);var P=u(r,0)(I[1],y);if("horizontal"===t){var I,O,k,D,w,S,E,N=d.scale.map(I[0]),T=d.scale.map(I[1]);if(null==N||null==T)return null;O=(0,s.getCateCoordinateOfBar)({axis:c,ticks:p,bandSize:l,offset:n.offset,entry:e,index:y}),k=null!=(E=null!=T?T:N)?E:void 0,D=n.size;var L=N-T;if(w=(0,i.isNan)(L)?0:L,S={x:O,y:x.top,width:D,height:x.height},Math.abs(P)>0&&Math.abs(w)<Math.abs(P)){var B=(0,i.mathSign)(w||P)*(Math.abs(P)-Math.abs(w));k-=B,w+=B}}else{var K=c.scale.map(I[0]),W=c.scale.map(I[1]);if(null==K||null==W)return null;if(O=K,k=(0,s.getCateCoordinateOfBar)({axis:d,ticks:m,bandSize:l,offset:n.offset,entry:e,index:y}),D=W-K,w=n.size,S={x:x.left,y:k,width:x.width,height:w},Math.abs(P)>0&&Math.abs(D)<Math.abs(P)){var M=(0,i.mathSign)(D||P)*(Math.abs(P)-Math.abs(D));D+=M}}return null!=O&&null!=k&&null!=D&&null!=w&&(o||0!==D&&0!==w)?ey(ey({},e),{},{stackedBarStart:j,x:O,y:k,width:D,height:w,value:h?I:I[1],payload:e,background:S,tooltipPosition:{x:O+D/2,y:k+w/2},parentViewBox:g,originalDataIndex:y},f&&f[y]&&f[y].props):null}).filter(Boolean)}var eS=t.memo(function(e){var a,r,o=(0,V.resolveDefaultProps)(e,ek),n=(a=o.stackId,null!=(r=(0,t.useContext)(ei))?r.stackId:null!=a?(0,s.getNormalizedStackId)(a):void 0),i=(0,z.useIsPanorama)();return t.createElement(Y.RegisterGraphicalItemId,{id:o.id,type:"bar"},e=>t.createElement(t.Fragment,null,t.createElement(R.SetLegendPayload,{legendPayload:(e=>{var{dataKey:t,name:a,fill:r,legendType:o,hide:n}=e;return[{inactive:n,dataKey:t,type:o,color:r,value:(0,s.getTooltipNameProp)(a,t),payload:e}]})(o)}),t.createElement(ef,{dataKey:o.dataKey,stroke:o.stroke,strokeWidth:o.strokeWidth,fill:o.fill,name:o.name,hide:o.hide,unit:o.unit,tooltipType:o.tooltipType,id:e}),t.createElement(U.SetCartesianGraphicalItem,{type:"bar",id:e,data:void 0,xAxisId:o.xAxisId,yAxisId:o.yAxisId,zAxisId:0,dataKey:o.dataKey,stackId:n,hide:o.hide,barSize:o.barSize,minPointSize:o.minPointSize,maxBarSize:o.maxBarSize,isPanorama:i,hasCustomShape:null!=o.shape}),t.createElement(Z.ZIndexLayer,{zIndex:o.zIndex},t.createElement(eD,eu({},o,{id:e})))))},H.propsAreEqual);eS.displayName="Bar"},789859,328233,482593,e=>{"use strict";var t=e.i(191788),a=e.i(56206),r=e.i(778979),o=e.i(883388),n=e.i(270627);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var l=e=>{var{cx:l,cy:s,r:c,className:d}=e,p=(0,a.clsx)("recharts-dot",d);return(0,n.isNumber)(l)&&(0,n.isNumber)(s)&&(0,n.isNumber)(c)?t.createElement("circle",i({},(0,o.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:p,cx:l,cy:s,r:c})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),p=e.i(561622),m=e.i(446354),u=["points"];function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function x(){return(x=Object.assign.bind()).apply(null,arguments)}function f(e){var{option:r,dotProps:o,className:n}=e;if((0,t.isValidElement)(r))return(0,t.cloneElement)(r,o);if("function"==typeof r)return r(o);var i=(0,a.clsx)(n,"boolean"!=typeof r?r.className:""),s=null!=o?o:{},{points:c}=s,d=function(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(s,u);return t.createElement(l,x({},d,{className:i}))}e.s(["Dots",0,function(e){var{points:a,dot:r,className:o,dotClassName:n,dataKey:i,baseProps:l,needClip:u,clipPathId:h,zIndex:g=m.DefaultZIndexes.scatter}=e;if(null==a||!r&&1!==a.length)return null;var v=(0,c.isClipDot)(r),b=(0,d.svgPropertiesAndEventsFromUnknown)(r),A=a.map((e,o)=>{var s,c,d=y(y(y({r:3},l),b),{},{index:o,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:i,value:e.value,payload:e.payload,points:a});return t.createElement(f,{key:"dot-".concat(o),option:r,dotProps:d,className:n})}),C={};return u&&null!=h&&(C.clipPath="url(#clipPath-".concat(v?"":"dots-").concat(h,")")),t.createElement(p.ZIndexLayer,{zIndex:g},t.createElement(s.Layer,x({className:o},C),A))}],789859);var g=e.i(543372),v=e.i(281695),b=e.i(630173);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=e=>{var a,{point:n,childIndex:i,mainColor:c,activeDot:d,dataKey:p,clipPath:m}=e;if(!1===d||null==n.x||null==n.y)return null;var u=C(C(C({},{index:i,dataKey:p,cx:n.x,cy:n.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:n.payload,value:n.value}),(0,o.svgPropertiesNoEventsFromUnknown)(d)),(0,r.adaptEventHandlers)(d));return a=(0,t.isValidElement)(d)?(0,t.cloneElement)(d,u):"function"==typeof d?d(u):t.createElement(l,u),t.createElement(s.Layer,{className:"recharts-active-dot",clipPath:m},a)};e.s(["ActivePoints",0,function(e){var{points:a,mainColor:r,activeDot:o,itemDataKey:i,clipPath:l,zIndex:s=m.DefaultZIndexes.activeDot}=e,c=(0,g.useAppSelector)(v.selectActiveTooltipIndex),d=(0,b.useActiveTooltipDataPoints)();if(null==a||null==d)return null;var u=a.find(e=>d.includes(e.payload));return(0,n.isNullish)(u)?null:t.createElement(p.ZIndexLayer,{zIndex:s},t.createElement(j,{point:u,childIndex:Number(c),mainColor:r,dataKey:i,activeDot:o,clipPath:l}))}],482593)},554687,e=>{"use strict";var t=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var a=(0,t.svgPropertiesNoEventsFromUnknown)(e);if(null!=a){var{r,strokeWidth:o}=a,n=Number(r),i=Number(o);return(Number.isNaN(n)||n<0)&&(n=3),(Number.isNaN(i)||i<0)&&(i=2),{r:n,strokeWidth:i}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var t=e.i(391398);e.s(["PointLabel",0,function({x:e,y:a,value:r,valueFormatter:o}){return(0,t.jsx)("g",{transform:`translate(${e},${a})`,children:(0,t.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(r):r})})}])},321020,e=>{"use strict";e.s(["Area",()=>em,"computeArea",()=>ep],321020);var t=e.i(191788),a=e.i(56206),r=e.i(366998),o=e.i(815954),n=e.i(301426),i=e.i(789859),l=e.i(270627),s=e.i(516257),c=e.i(106043),d=e.i(482593),p=e.i(128002),m=e.i(777814),u=e.i(451400),h=e.i(83727),y=e.i(901841),x=e.i(399479),f=e.i(365441),g=e.i(755335),v=e.i(780950),b=(e,t,a)=>(0,h.selectAxisWithScale)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),a),A=(e,t,a)=>(0,h.selectTicksOfGraphicalItem)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),a),C=(e,t,a)=>(0,h.selectAxisWithScale)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),a),j=(e,t,a)=>(0,h.selectTicksOfGraphicalItem)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),a),P=(0,u.createSelector)([y.selectChartLayout,b,C,A,j],(e,t,a,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(t,r,!1):(0,s.getBandSizeOfAxis)(a,o,!1)),I=(0,u.createSelector)([h.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),O=e=>{var t=(0,y.selectChartLayout)(e);return(0,s.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},k=(0,u.createSelector)([I,(e,t,a)=>(0,h.selectStackGroups)(e,O(e),"yAxis"===O(e)?(0,v.selectYAxisIdFromGraphicalItemId)(e,t):(0,v.selectXAxisIdFromGraphicalItemId)(e,t),a)],(e,t)=>{if(null!=e&&null!=t){var a,{stackId:r}=e,o=(0,f.getStackSeriesIdentifier)(e);if(null!=r&&null!=o){var n=null==(a=t[r])?void 0:a.stackedData,i=null==n?void 0:n.find(e=>e.key===o);if(null!=i)return i.map(e=>[e[0],e[1]])}}}),D=(0,u.createSelector)([y.selectChartLayout,b,C,A,j,k,x.selectChartDataWithIndexesIfNotInPanoramaPosition3,P,I,g.selectChartBaseValue],(e,t,a,r,o,n,i,l,s,c)=>{var d,{chartData:p,dataStartIndex:m,dataEndIndex:u}=i;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=a&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=l){var{data:h}=s;if(null!=(d=h&&h.length>0?h:null==p?void 0:p.slice(m,u+1)))return ep({layout:e,xAxis:t,yAxis:a,xAxisTicks:r,yAxisTicks:o,dataStartIndex:m,areaSettings:s,stackedData:n,displayedData:d,chartBaseValue:c,bandSize:l})}}),w=e.i(662688),S=e.i(524970),E=e.i(836094),N=e.i(543372),T=e.i(3304),L=e.i(297974),B=e.i(500678),K=e.i(630173),W=e.i(768069),M=e.i(436323),z=e.i(883388),F=e.i(355476),R=e.i(554687),G=e.i(62037),V=e.i(561622),Y=e.i(446354),U=e.i(547810),X=["id"],_=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function Z(){return(Z=Object.assign.bind()).apply(null,arguments)}function q(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function J(e,t){return e&&"none"!==e?e:t}var Q=t.memo(e=>{var{dataKey:a,data:r,stroke:o,strokeWidth:n,fill:i,name:c,hide:d,unit:m,tooltipType:u,id:h}=e,y={dataDefinedOnItem:r,getPosition:l.noop,settings:{stroke:o,strokeWidth:n,fill:i,dataKey:a,nameKey:void 0,name:(0,s.getTooltipNameProp)(c,a),hide:d,type:u,color:J(o,i),unit:m,graphicalItemId:h}};return t.createElement(p.SetTooltipEntrySettings,{tooltipEntrySettings:y})});function ee(e){var{clipPathId:a,points:r,props:o}=e,{needClip:n,dot:l,dataKey:s}=o,c=(0,z.svgPropertiesNoEvents)(o);return t.createElement(i.Dots,{points:r,dot:l,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:n,clipPathId:a})}function et(e){var{showLabels:a,children:r,points:o}=e,i=o.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:0,lowerWidth:0,upperWidth:0,height:0};return H(H({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return t.createElement(n.CartesianLabelListContextProvider,{value:a?i:void 0},r)}function ea(e){var{points:a,baseLine:n,needClip:i,clipPathId:l,props:s}=e,{layout:c,type:d,stroke:p,connectNulls:m,isRange:u}=s,{id:h}=s,y=q(s,X),x=(0,z.svgPropertiesNoEvents)(y),f=(0,G.svgPropertiesAndEvents)(y);return t.createElement(t.Fragment,null,(null==a?void 0:a.length)>1&&t.createElement(o.Layer,{clipPath:i?"url(#clipPath-".concat(l,")"):void 0},t.createElement(r.Curve,Z({},f,{id:h,points:a,connectNulls:m,type:d,baseLine:n,layout:c,stroke:"none",className:"recharts-area-area"})),"none"!==p&&t.createElement(r.Curve,Z({},x,{className:"recharts-area-curve",layout:c,type:d,connectNulls:m,fill:"none",points:a})),"none"!==p&&u&&Array.isArray(n)&&t.createElement(r.Curve,Z({},x,{className:"recharts-area-curve",layout:c,type:d,connectNulls:m,fill:"none",points:n}))),t.createElement(ee,{points:a,props:y,clipPathId:l}))}function er(e){var a,r,{alpha:o,baseLine:n,points:i,strokeWidth:s}=e,c=null==(a=i[0])?void 0:a.y,d=null==(r=i[i.length-1])?void 0:r.y;if(!(0,B.isWellBehavedNumber)(c)||!(0,B.isWellBehavedNumber)(d))return null;var p=o*Math.abs(c-d),m=Math.max(...i.map(e=>e.x||0));return((0,l.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.x||0),m)),(0,l.isNumber)(m))?t.createElement("rect",{x:0,y:c<d?c:c-p,width:m+(s?parseInt("".concat(s),10):1),height:Math.floor(p)}):null}function eo(e){var a,r,{alpha:o,baseLine:n,points:i,strokeWidth:s}=e,c=null==(a=i[0])?void 0:a.x,d=null==(r=i[i.length-1])?void 0:r.x;if(!(0,B.isWellBehavedNumber)(c)||!(0,B.isWellBehavedNumber)(d))return null;var p=o*Math.abs(c-d),m=Math.max(...i.map(e=>e.y||0));return((0,l.isNumber)(n)?m=Math.max(n,m):n&&Array.isArray(n)&&n.length&&(m=Math.max(...n.map(e=>e.y||0),m)),(0,l.isNumber)(m))?t.createElement("rect",{x:c<d?c:c-p,y:0,width:p,height:Math.floor(m+(s?parseInt("".concat(s),10):1))}):null}function en(e){var{alpha:a,layout:r,points:o,baseLine:n,strokeWidth:i}=e;return"vertical"===r?t.createElement(er,{alpha:a,points:o,baseLine:n,strokeWidth:i}):t.createElement(eo,{alpha:a,points:o,baseLine:n,strokeWidth:i})}function ei(e){var{needClip:a,clipPathId:r,props:i,previousPointsRef:s,previousBaselineRef:c}=e,{points:d,baseLine:p,isAnimationActive:m,animationBegin:u,animationDuration:h,animationEasing:x,onAnimationStart:f,onAnimationEnd:g}=i,v=(0,t.useMemo)(()=>({points:d,baseLine:p}),[d,p]),b=(0,T.useAnimationId)(v,"recharts-area-"),A=(0,y.useCartesianChartLayout)(),[C,j]=(0,t.useState)(!1),P=(0,t.useCallback)(()=>{"function"==typeof g&&g(),j(!1)},[g]),I=(0,t.useCallback)(()=>{"function"==typeof f&&f(),j(!0)},[f]);if(null==A)return null;var O=s.current,k=c.current;return t.createElement(et,{showLabels:!C,points:d},i.children,t.createElement(F.JavascriptAnimate,{animationId:b,begin:u,duration:h,isActive:m,easing:x,onAnimationEnd:P,onAnimationStart:I,key:b},e=>{if(O){var n,u=O.length/d.length,h=1===e?d:d.map((t,a)=>{var r=Math.floor(a*u);if(O[r]){var o=O[r];return H(H({},t),{},{x:(0,l.interpolate)(o.x,t.x,e),y:(0,l.interpolate)(o.y,t.y,e)})}return t});return n=(0,l.isNumber)(p)?(0,l.interpolate)(k,p,e):(0,l.isNullish)(p)||(0,l.isNan)(p)?(0,l.interpolate)(k,0,e):p.map((t,a)=>{var r=Math.floor(a*u);if(Array.isArray(k)&&k[r]){var o=k[r];return H(H({},t),{},{x:(0,l.interpolate)(o.x,t.x,e),y:(0,l.interpolate)(o.y,t.y,e)})}return t}),e>0&&(s.current=h,c.current=n),t.createElement(ea,{points:h,baseLine:n,needClip:a,clipPathId:r,props:i})}return e>0&&(s.current=d,c.current=p),t.createElement(o.Layer,null,m&&t.createElement("defs",null,t.createElement("clipPath",{id:"animationClipPath-".concat(r)},t.createElement(en,{alpha:e,points:d,baseLine:p,layout:A,strokeWidth:i.strokeWidth}))),t.createElement(o.Layer,{clipPath:"url(#animationClipPath-".concat(r,")")},t.createElement(ea,{points:d,baseLine:p,needClip:a,clipPathId:r,props:i})))}),t.createElement(n.LabelListFromLabelProp,{label:i.label}))}function el(e){var{needClip:a,clipPathId:r,props:o}=e,n=(0,t.useRef)(null),i=(0,t.useRef)();return t.createElement(ei,{needClip:a,clipPathId:r,props:o,previousPointsRef:n,previousBaselineRef:i})}class es extends t.PureComponent{render(){var{hide:e,dot:r,points:n,className:i,top:l,left:s,needClip:p,xAxisId:u,yAxisId:h,width:y,height:x,id:f,baseLine:g,zIndex:v}=this.props;if(e)return null;var b=(0,a.clsx)("recharts-area",i),{r:A,strokeWidth:C}=(0,R.getRadiusAndStrokeWidthFromDot)(r),j=(0,c.isClipDot)(r),P=2*A+C,I=p?"url(#clipPath-".concat(j?"":"dots-").concat(f,")"):void 0;return t.createElement(V.ZIndexLayer,{zIndex:v},t.createElement(o.Layer,{className:b},p&&t.createElement("defs",null,t.createElement(m.GraphicalItemClipPath,{clipPathId:f,xAxisId:u,yAxisId:h}),!j&&t.createElement("clipPath",{id:"clipPath-dots-".concat(f)},t.createElement("rect",{x:s-P/2,y:l-P/2,width:y+P,height:x+P}))),t.createElement(el,{needClip:p,clipPathId:f,props:this.props})),t.createElement(d.ActivePoints,{points:n,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:I}),this.props.isRange&&Array.isArray(g)&&t.createElement(d.ActivePoints,{points:g,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:I}))}}var ec={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:Y.DefaultZIndexes.area};function ed(e){var a,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:i,connectNulls:l,dot:s,fill:c,fillOpacity:d,hide:p,isAnimationActive:u,legendType:h,stroke:x,xAxisId:f,yAxisId:g}=e,v=q(e,_),b=(0,y.useChartLayout)(),A=(0,S.useChartName)(),{needClip:C}=(0,m.useNeedsClip)(f,g),j=(0,w.useIsPanorama)(),{points:P,isRange:I,baseLine:O}=null!=(a=(0,N.useAppSelector)(t=>D(t,e.id,j)))?a:{},k=(0,K.usePlotArea)();if("horizontal"!==b&&"vertical"!==b||null==k||"AreaChart"!==A&&"ComposedChart"!==A)return null;var{height:E,width:T,x:L,y:B}=k;return P&&P.length?t.createElement(es,Z({},v,{activeDot:r,animationBegin:o,animationDuration:n,animationEasing:i,baseLine:O,connectNulls:l,dot:s,fill:c,fillOpacity:d,height:E,hide:p,layout:b,isAnimationActive:u,isRange:I,legendType:h,needClip:C,points:P,stroke:x,width:T,left:L,top:B,xAxisId:f,yAxisId:g})):null}function ep(e){var t,{areaSettings:{connectNulls:a,baseValue:r,dataKey:o},stackedData:n,layout:i,chartBaseValue:c,xAxis:d,yAxis:p,displayedData:m,dataStartIndex:u,xAxisTicks:h,yAxisTicks:y,bandSize:x}=e,f=n&&n.length,g=((e,t,a,r,o)=>{var n=null!=a?a:t;if((0,l.isNumber)(n))return n;var i="horizontal"===e?o:r,s=i.scale.domain();if("number"===i.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===n?d:"dataMax"===n||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===n?s[0]:"dataMax"===n?s[1]:s[0]})(i,c,r,d,p),v="horizontal"===i,b=!1,A=m.map((e,t)=>{if(f)c=n[u+t];else{var r,i,l,c,m,A=(0,s.getValueByDataKey)(e,o);Array.isArray(A)?(c=A,b=!0):c=[g,A]}var C=null!=(r=null==(i=c)?void 0:i[1])?r:null,j=null==C||f&&!a&&null==(0,s.getValueByDataKey)(e,o);return v?{x:(0,s.getCateCoordinateOfLine)({axis:d,ticks:h,bandSize:x,entry:e,index:t}),y:j?null:null!=(m=p.scale.map(C))?m:null,value:c,payload:e}:{x:j?null:null!=(l=d.scale.map(C))?l:null,y:(0,s.getCateCoordinateOfLine)({axis:p,ticks:y,bandSize:x,entry:e,index:t}),value:c,payload:e}});return t=f||b?A.map(e=>{var t,a,r=Array.isArray(e.value)?e.value[0]:null;return v?{x:e.x,y:null!=r&&null!=e.y&&null!=(a=p.scale.map(r))?a:null,payload:e.payload}:{x:null!=r&&null!=(t=d.scale.map(r))?t:null,y:e.y,payload:e.payload}}):v?p.scale.map(g):d.scale.map(g),{points:A,baseLine:null!=t?t:0,isRange:b}}var em=t.memo(function(e){var a=(0,L.resolveDefaultProps)(e,ec),r=(0,w.useIsPanorama)();return t.createElement(W.RegisterGraphicalItemId,{id:a.id,type:"area"},e=>t.createElement(t.Fragment,null,t.createElement(E.SetLegendPayload,{legendPayload:(e=>{var{dataKey:t,name:a,stroke:r,fill:o,legendType:n,hide:i}=e;return[{inactive:i,dataKey:t,type:n,color:J(r,o),value:(0,s.getTooltipNameProp)(a,t),payload:e}]})(a)}),t.createElement(Q,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:e}),t.createElement(M.SetCartesianGraphicalItem,{type:"area",id:e,data:a.data,dataKey:a.dataKey,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,stackId:(0,s.getNormalizedStackId)(a.stackId),hide:a.hide,barSize:void 0,baseValue:a.baseValue,isPanorama:r,connectNulls:a.connectNulls}),t.createElement(ed,Z({},a,{id:e}))))},U.propsAreEqual);em.displayName="Area"},385429,e=>{"use strict";e.s(["Line",()=>ei,"computeLinePoints",()=>en],385429);var t=e.i(191788),a=e.i(56206),r=e.i(815954),o=e.i(301426),n=e.i(789859),i=e.i(270627),l=e.i(106043),s=e.i(516257),c=e.i(482593),d=e.i(128002),p=e.i(170038),m=e.i(777814),u=e.i(901841),h=e.i(662688),y=e.i(451400),x=e.i(399479),f=e.i(83727),g=(e,t,a,r)=>(0,f.selectAxisWithScale)(e,"xAxis",t,r),v=(e,t,a,r)=>(0,f.selectTicksOfGraphicalItem)(e,"xAxis",t,r),b=(e,t,a,r)=>(0,f.selectAxisWithScale)(e,"yAxis",a,r),A=(e,t,a,r)=>(0,f.selectTicksOfGraphicalItem)(e,"yAxis",a,r),C=(0,y.createSelector)([u.selectChartLayout,g,b,v,A],(e,t,a,r,o)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(t,r,!1):(0,s.getBandSizeOfAxis)(a,o,!1));function j(e){return"line"===e.type}var P=(0,y.createSelector)([f.selectUnfilteredCartesianItems,(e,t,a,r,o)=>o],(e,t)=>e.filter(j).find(e=>e.id===t)),I=(0,y.createSelector)([u.selectChartLayout,g,b,v,A,P,C,x.selectChartDataWithIndexesIfNotInPanoramaPosition4],(e,t,a,r,o,n,i,l)=>{var s,{chartData:c,dataStartIndex:d,dataEndIndex:p}=l;if(null!=n&&null!=t&&null!=a&&null!=r&&null!=o&&0!==r.length&&0!==o.length&&null!=i&&("horizontal"===e||"vertical"===e)){var{dataKey:m,data:u}=n;if(null!=(s=null!=u&&u.length>0?u:null==c?void 0:c.slice(d,p+1)))return en({layout:e,xAxis:t,yAxis:a,xAxisTicks:r,yAxisTicks:o,dataKey:m,bandSize:i,displayedData:s})}}),O=e.i(543372),k=e.i(836094),D=e.i(3304),w=e.i(297974),S=e.i(630173),E=e.i(768069),N=e.i(436323),T=e.i(883388),L=e.i(355476),B=e.i(62037),K=e.i(554687),W=e.i(134959),M=e.i(561622),z=e.i(446354),F=e.i(547810),R=["id"],G=["type","layout","connectNulls","needClip","shape"],V=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function Y(){return(Y=Object.assign.bind()).apply(null,arguments)}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach(function(t){var r,o,n;r=e,o=t,n=a[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function _(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var Z=t.memo(e=>{var{dataKey:a,data:r,stroke:o,strokeWidth:n,fill:l,name:c,hide:p,unit:m,tooltipType:u,id:h}=e,y={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:o,strokeWidth:n,fill:l,dataKey:a,nameKey:void 0,name:(0,s.getTooltipNameProp)(c,a),hide:p,type:u,color:o,unit:m,graphicalItemId:h}};return t.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:y})}),q=(e,t)=>"".concat(t,"px ").concat(e,"px");function $(e){var{clipPathId:a,points:r,props:o}=e,{dot:i,dataKey:l,needClip:s}=o,{id:c}=o,d=_(o,R),p=(0,T.svgPropertiesNoEvents)(d);return t.createElement(n.Dots,{points:r,dot:i,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:l,baseProps:p,needClip:s,clipPathId:a})}function H(e){var{showLabels:a,children:r,points:n}=e,i=(0,t.useMemo)(()=>null==n?void 0:n.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:0,lowerWidth:0,upperWidth:0,height:0};return X(X({},r),{},{value:e.value,payload:e.payload,viewBox:r,parentViewBox:void 0,fill:void 0})}),[n]);return t.createElement(o.CartesianLabelListContextProvider,{value:a?i:void 0},r)}function J(e){var{clipPathId:a,pathRef:r,points:o,strokeDasharray:n,props:i}=e,{type:l,layout:s,connectNulls:c,needClip:d,shape:p}=i,m=_(i,G),u=X(X({},(0,B.svgPropertiesAndEvents)(m)),{},{fill:"none",className:"recharts-line-curve",clipPath:d?"url(#clipPath-".concat(a,")"):void 0,points:o,type:l,layout:s,connectNulls:c,strokeDasharray:null!=n?n:i.strokeDasharray});return t.createElement(t.Fragment,null,(null==o?void 0:o.length)>1&&t.createElement(W.Shape,Y({shapeType:"curve",option:p},u,{pathRef:r})),t.createElement($,{points:o,clipPathId:a,props:i}))}function Q(e){var{clipPathId:a,props:r,pathRef:n,previousPointsRef:l,longestAnimatedLengthRef:s}=e,{points:c,strokeDasharray:d,isAnimationActive:p,animationBegin:m,animationDuration:u,animationEasing:h,animateNewValues:y,width:x,height:f,onAnimationEnd:g,onAnimationStart:v}=r,b=l.current,A=(0,D.useAnimationId)(c,"recharts-line-"),C=(0,t.useRef)(A),[j,P]=(0,t.useState)(!1),I=(0,t.useCallback)(()=>{"function"==typeof g&&g(),P(!1)},[g]),O=(0,t.useCallback)(()=>{"function"==typeof v&&v(),P(!0)},[v]),k=function(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(e){return 0}}(n.current),w=(0,t.useRef)(0);C.current!==A&&(w.current=s.current,C.current=A);var S=w.current;return t.createElement(H,{points:c,showLabels:!j},r.children,t.createElement(L.JavascriptAnimate,{animationId:A,begin:m,duration:u,isActive:p,easing:h,onAnimationEnd:I,onAnimationStart:O,key:A},e=>{var o,m=Math.min((0,i.interpolate)(S,k+S,e),k);if(o=p?d?((e,t,a)=>{var r=a.reduce((e,t)=>e+t,0);if(!r)return q(t,e);for(var o=Math.floor(e/r),n=e%r,i=[],l=0,s=0;l<a.length;s+=null!=(c=a[l])?c:0,++l){var c,d=a[l];if(null!=d&&s+d>n){i=[...a.slice(0,l),n-s];break}}var p=i.length%2==0?[0,t]:[t];return[...function(e,t){for(var a=e.length%2!=0?[...e,0]:e,r=[],o=0;o<t;++o)r.push(...a);return r}(a,o),...i,...p].map(e=>"".concat(e,"px")).join(", ")})(m,k,"".concat(d).split(/[,\s]+/gim).map(e=>parseFloat(e))):q(k,m):null==d?void 0:String(d),e>0&&k>0&&(l.current=c,s.current=Math.max(s.current,m)),b){var u=b.length/c.length,h=1===e?c:c.map((t,a)=>{var r=Math.floor(a*u);if(b[r]){var o=b[r];return X(X({},t),{},{x:(0,i.interpolate)(o.x,t.x,e),y:(0,i.interpolate)(o.y,t.y,e)})}return y?X(X({},t),{},{x:(0,i.interpolate)(2*x,t.x,e),y:(0,i.interpolate)(f/2,t.y,e)}):X(X({},t),{},{x:t.x,y:t.y})});return l.current=h,t.createElement(J,{props:r,points:h,clipPathId:a,pathRef:n,strokeDasharray:o})}return t.createElement(J,{props:r,points:c,clipPathId:a,pathRef:n,strokeDasharray:o})}),t.createElement(o.LabelListFromLabelProp,{label:r.label}))}function ee(e){var{clipPathId:a,props:r}=e,o=(0,t.useRef)(null),n=(0,t.useRef)(0),i=(0,t.useRef)(null);return t.createElement(Q,{props:r,clipPathId:a,previousPointsRef:o,longestAnimatedLengthRef:n,pathRef:i})}var et=(e,t)=>{var a,r;return{x:null!=(a=e.x)?a:void 0,y:null!=(r=e.y)?r:void 0,value:e.value,errorVal:(0,s.getValueByDataKey)(e.payload,t)}};class ea extends t.Component{render(){var{hide:e,dot:o,points:n,className:i,xAxisId:s,yAxisId:d,top:u,left:h,width:y,height:x,id:f,needClip:g,zIndex:v}=this.props;if(e)return null;var b=(0,a.clsx)("recharts-line",i),{r:A,strokeWidth:C}=(0,K.getRadiusAndStrokeWidthFromDot)(o),j=(0,l.isClipDot)(o),P=2*A+C,I=g?"url(#clipPath-".concat(j?"":"dots-").concat(f,")"):void 0;return t.createElement(M.ZIndexLayer,{zIndex:v},t.createElement(r.Layer,{className:b},g&&t.createElement("defs",null,t.createElement(m.GraphicalItemClipPath,{clipPathId:f,xAxisId:s,yAxisId:d}),!j&&t.createElement("clipPath",{id:"clipPath-dots-".concat(f)},t.createElement("rect",{x:h-P/2,y:u-P/2,width:y+P,height:x+P}))),t.createElement(p.SetErrorBarContext,{xAxisId:s,yAxisId:d,data:n,dataPointFormatter:et,errorBarOffset:0},t.createElement(ee,{props:this.props,clipPathId:f}))),t.createElement(c.ActivePoints,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:I}))}}var er={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:z.DefaultZIndexes.line,type:"linear"};function eo(e){var a=(0,w.resolveDefaultProps)(e,er),{activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:l,connectNulls:s,dot:c,hide:d,isAnimationActive:p,label:y,legendType:x,xAxisId:f,yAxisId:g,id:v}=a,b=_(a,V),{needClip:A}=(0,m.useNeedsClip)(f,g),C=(0,S.usePlotArea)(),j=(0,u.useChartLayout)(),P=(0,h.useIsPanorama)(),k=(0,O.useAppSelector)(e=>I(e,f,g,P,v));if("horizontal"!==j&&"vertical"!==j||null==k||null==C)return null;var{height:D,width:E,x:N,y:T}=C;return t.createElement(ea,Y({},b,{id:v,connectNulls:s,dot:c,activeDot:r,animateNewValues:o,animationBegin:n,animationDuration:i,animationEasing:l,isAnimationActive:p,hide:d,label:y,legendType:x,xAxisId:f,yAxisId:g,points:k,layout:j,height:D,width:E,left:N,top:T,needClip:A}))}function en(e){var{layout:t,xAxis:a,yAxis:r,xAxisTicks:o,yAxisTicks:n,dataKey:l,bandSize:c,displayedData:d}=e;return d.map((e,d)=>{var p=(0,s.getValueByDataKey)(e,l);if("horizontal"===t){var m=(0,s.getCateCoordinateOfLine)({axis:a,ticks:o,bandSize:c,entry:e,index:d}),u=(0,i.isNullish)(p)?null:r.scale.map(p);return{x:m,y:null!=u?u:null,value:p,payload:e}}var h=(0,i.isNullish)(p)?null:a.scale.map(p),y=(0,s.getCateCoordinateOfLine)({axis:r,ticks:n,bandSize:c,entry:e,index:d});return null==h||null==y?null:{x:h,y,value:p,payload:e}}).filter(Boolean)}var ei=t.memo(function(e){var a=(0,w.resolveDefaultProps)(e,er),r=(0,h.useIsPanorama)();return t.createElement(E.RegisterGraphicalItemId,{id:a.id,type:"line"},e=>t.createElement(t.Fragment,null,t.createElement(k.SetLegendPayload,{legendPayload:(e=>{var{dataKey:t,name:a,stroke:r,legendType:o,hide:n}=e;return[{inactive:n,dataKey:t,type:o,color:r,value:(0,s.getTooltipNameProp)(a,t),payload:e}]})(a)}),t.createElement(Z,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:e}),t.createElement(N.SetCartesianGraphicalItem,{type:"line",id:e,data:a.data,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,hide:a.hide,isPanorama:r}),t.createElement(eo,Y({},a,{id:e}))))},F.propsAreEqual);ei.displayName="Line"},766821,e=>{"use strict";var t=e.i(648863);let a=[{date:"Mar 22",Apples:2301,Oranges:723,Tomatoes:2452},{date:"Mar 23",Apples:2181,Oranges:1887,Tomatoes:2402},{date:"Mar 24",Apples:1821,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:2764,Oranges:987,Tomatoes:2809},{date:"Mar 26",Apples:1821,Oranges:403,Tomatoes:2290}],r=`
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
`;var s=e.i(391398),c=e.i(520916),d=e.i(577596),p=e.i(739539),m=e.i(979298),u=e.i(232471),h=e.i(481178),y=e.i(275519),x=e.i(317477),f=e.i(951254),g=e.i(44091),v=e.i(62904),b=e.i(391466),A=e.i(191788),C=e.i(321020),j=e.i(57699),P=e.i(526626),I=e.i(471970),O=e.i(437515),k=["axis"],D=(0,A.forwardRef)((e,t)=>A.createElement(O.CartesianChart,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:k,tooltipPayloadSearcher:I.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),w=e.i(905e3),S=e.i(301426),E=e.i(881264),N=e.i(385429),T=e.i(86443),L=e.i(723451),B=e.i(694713),K=e.i(756902),W=e.i(976835);let M={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},z=(0,h.createVarsResolver)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,x.getThemeColor)(t,e):void 0,"--chart-grid-color":a?(0,x.getThemeColor)(a,e):void 0}})),F=(0,y.factory)(e=>{let t=(0,g.useProps)("CompositeChart",M,e),{classNames:a,className:r,style:o,styles:n,unstyled:i,vars:l,data:h,withLegend:y,legendProps:I,series:O,onMouseLeave:k,dataKey:F,withTooltip:R,withXAxis:G,withYAxis:V,gridAxis:Y,tickLine:U,xAxisProps:X,yAxisProps:_,unit:Z,tooltipAnimationDuration:q,strokeDasharray:$,gridProps:H,tooltipProps:J,referenceLines:Q,withDots:ee,dotProps:et,activeDotProps:ea,strokeWidth:er,connectNulls:eo,curveType:en,dir:ei,valueFormatter:el,children:es,lineProps:ec,xAxisLabel:ed,yAxisLabel:ep,withRightYAxis:em,rightYAxisLabel:eu,rightYAxisProps:eh,withPointLabels:ey,areaProps:ex,barProps:ef,withBarValueLabel:eg,minBarSize:ev,maxBarWidth:eb,composedChartProps:eA,attributes:eC,...ej}=t,eP=(0,f.useMantineTheme)(),[eI,eO]=(0,A.useState)(null),ek=null!==eI,{resolvedClassNames:eD,resolvedStyles:ew}=(0,v.useResolvedStylesApi)({classNames:a,styles:n,props:t}),eS=(0,b.useStyles)({name:"CompositeChart",classes:m.default,props:t,className:r,style:o,classNames:a,styles:n,unstyled:i,attributes:eC,vars:l,varsResolver:z}),eE=O.map(e=>{let t=(0,x.getThemeColor)(e.color,eP),a=ek&&eI!==e.name;return"line"===e.type?(0,A.createElement)(N.Line,{...eS("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!ee&&{fillOpacity:+!a,strokeOpacity:+!a,strokeWidth:1,fill:t,stroke:t,...et},activeDot:!!ee&&{fill:"var(--mantine-color-white)",stroke:t,...ea},fill:t,stroke:t,strokeWidth:er,isAnimationActive:!1,fillOpacity:+!a,strokeOpacity:a?.5:1,connectNulls:eo,type:en,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ey?(0,s.jsx)(p.PointLabel,{valueFormatter:el}):void 0,..."function"==typeof ec?ec(e):ec}):"area"===e.type?(0,A.createElement)(C.Area,{...eS("area"),key:e.name,name:e.name,type:en,dataKey:e.name,fill:t,strokeWidth:er,stroke:t,isAnimationActive:!1,connectNulls:eo,dot:!!ee&&{fillOpacity:+!a,strokeOpacity:+!a,strokeWidth:1,fill:t,stroke:t,...et},activeDot:!!ee&&{fill:eP.white,stroke:t,strokeWidth:2,r:4,...ea},fillOpacity:.2*!a,strokeOpacity:a?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ey?(0,s.jsx)(p.PointLabel,{valueFormatter:el}):void 0,..."function"==typeof ex?ex(e):ex}):"bar"===e.type?(0,A.createElement)(j.Bar,{...eS("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:a?.1:1,strokeOpacity:.2*!!a,yAxisId:e.yAxisId||void 0,minPointSize:ev,..."function"==typeof ef?ef(e):ef},eg&&(0,s.jsx)(S.LabelList,{position:"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:e=>el?.(e)})):null}),eN=Q?.map((e,t)=>{let a=(0,x.getThemeColor)(e.color,eP);return(0,s.jsx)(T.ReferenceLine,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eS("referenceLine")},t)}),eT={axisLine:!1,type:"number",tickLine:"none"!==Y&&("y"===U||"xy"===U)&&{stroke:"currentColor"},allowDecimals:!0,unit:Z,tickFormatter:el,...eS("axis")};return(0,s.jsx)(u.Box,{...eS("root"),onMouseLeave:e=>{eO(null),k?.(e)},dir:ei||"ltr",...ej,children:(0,s.jsx)(L.ResponsiveContainer,{...eS("container"),children:(0,s.jsxs)(D,{data:h,maxBarSize:eb,margin:{bottom:ed?30:void 0,left:ep?10:void 0,right:ep?5:void 0},...eA,children:[y&&(0,s.jsx)(E.Legend,{verticalAlign:"top",content:e=>(0,s.jsx)(d.ChartLegend,{payload:e.payload,onHighlight:eO,legendPosition:I?.verticalAlign||"top",classNames:eD,styles:ew,series:O,attributes:eC}),...I}),(0,s.jsxs)(K.XAxis,{hide:!G,dataKey:F,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==Y&&("x"===U||"xy"===U)&&{stroke:"currentColor"},minTickGap:5,...eS("axis"),...X,children:[ed&&(0,s.jsx)(w.Label,{position:"insideBottom",offset:-20,fontSize:12,...eS("axisLabel"),children:ed}),X?.children]}),(0,s.jsxs)(W.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!V,...eT,..._,children:[ep&&(0,s.jsx)(w.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:ep}),_?.children]}),(0,s.jsxs)(W.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!em,...eT,...eh,children:[eu&&(0,s.jsx)(w.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:eu}),_?.children]}),(0,s.jsx)(P.CartesianGrid,{strokeDasharray:$,vertical:"y"===Y||"xy"===Y,horizontal:"x"===Y||"xy"===Y,...eS("grid"),...H}),R&&(0,s.jsx)(B.Tooltip,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:$},content:({label:e,payload:t,labelFormatter:a})=>(0,s.jsx)(c.ChartTooltip,{label:a&&t?a(e,t):e,payload:t,unit:Z,classNames:eD,styles:ew,series:O,valueFormatter:el,attributes:eC}),...J}),eE,eN,es]})})})});F.displayName="@mantine/charts/CompositeChart",F.classes=m.default,F.varsResolver=z;let R={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},G={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},V={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Y={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",series:[{name:"Apples",type:"line",color:e.color}],...e})},code:[{code:e=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},U={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",className:"m_f98102e0",series:[{name:"Apples",color:"var(--chart-color)",type:"line"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var X=e.i(470743),_=e.i(883364),Z=e.i(744335);function q({label:e,payload:t}){return t?(0,s.jsxs)(X.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,s.jsx)(_.Text,{fw:500,mb:5,children:e}),t.map(e=>(0,s.jsxs)(_.Text,{c:(0,Z.alpha)(e.color,1),fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let $={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",tooltipProps:{content:({label:e,payload:t})=>(0,s.jsx)(q,{label:e,payload:t})},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},H={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},J={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",className:"m_300a99a6",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line",strokeDasharray:"5 5"},{name:"Oranges",color:"yellow.8",type:"area",strokeDasharray:"5 5"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",withTooltip:!1,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",withPointLabels:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:1200,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out",color:"blue.7"}],maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:o,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6",type:"line"},{name:"pv",color:"cyan.6",yAxisId:"right",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",tickLine:"xy",xAxisProps:{angle:-20},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},el={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},maxBarWidth:30,series:[{name:"Tomatoes",label:"Tomatoes sales",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",label:"Apples sales",color:"red.8",type:"line"},{name:"Oranges",label:"Oranges sales",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",strokeDasharray:"15 15",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},ed={type:"code",component:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,s.jsx)(F,{h:180,data:a,dataKey:"date",series:[{name:"Apples",color:"indigo.6",type:"area"}],composedChartProps:{syncId:"groceries"}}),(0,s.jsx)(_.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,s.jsx)(F,{h:180,data:a,dataKey:"date",composedChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"cyan.6",type:"bar"}]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",tooltipAnimationDuration:200,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",unit:"$",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:a,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ey={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:i,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6",type:"area"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var ex=(0,t.__exportAll)({axisLabels:()=>G,axisProps:()=>V,color:()=>Y,colorSchemeColor:()=>U,customTooltip:()=>$,dotProps:()=>H,gridColor:()=>J,legend:()=>Q,legendPosition:()=>ee,lineDasharray:()=>et,noTooltip:()=>ea,pointLabels:()=>er,referenceLines:()=>eo,rightYAxis:()=>en,rotateLabels:()=>ei,seriesLabels:()=>el,strokeDasharray:()=>es,strokeWidth:()=>ec,sync:()=>ed,tooltipAnimation:()=>ep,unit:()=>em,usage:()=>R,valueFormatter:()=>eu,xAxisOffset:()=>eh,yScale:()=>ey});e.s(["CompositeChartDemos",0,ex],766821)},844864,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(766821);e.i(603441);var o=e.i(62558);e.i(457450);var n=e.i(418026);let i=(0,o.Layout)(n.MDX_DATA.CompositeChart);function l(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:n}=o;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"CompositeChart"})," allows using ",(0,t.jsx)(o.code,{children:"Line"}),", ",(0,t.jsx)(o.code,{children:"Area"}),", and ",(0,t.jsx)(o.code,{children:"Bar"})," charts together in a single\nchart:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(o.p,{children:["To display the chart legend, set the ",(0,t.jsx)(o.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.legend}),"\n",(0,t.jsx)(o.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with the ",(0,t.jsx)(o.code,{children:"legendProps"})," prop. For example, setting ",(0,t.jsx)(o.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.legendPosition}),"\n",(0,t.jsx)(o.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,t.jsxs)(o.p,{children:["By default, the series ",(0,t.jsx)(o.code,{children:"name"})," is used as a label. To change it, set the ",(0,t.jsx)(o.code,{children:"label"}),"\nproperty in the ",(0,t.jsx)(o.code,{children:"series"})," object:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.seriesLabels}),"\n",(0,t.jsx)(o.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,t.jsxs)(o.p,{children:["To display labels on data points, set ",(0,t.jsx)(o.code,{children:"withPointLabels"}),". This feature is supported\nonly for ",(0,t.jsx)(o.code,{children:"Line"})," and ",(0,t.jsx)(o.code,{children:"Area"})," charts:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.pointLabels}),"\n",(0,t.jsx)(o.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisProps"})," and ",(0,t.jsx)(o.code,{children:"yAxisProps"})," to pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change the orientation of the axis:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.axisProps}),"\n",(0,t.jsx)(o.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisLabel"})," and ",(0,t.jsx)(o.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.axisLabels}),"\n",(0,t.jsx)(o.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xAxisProps"})," to set padding between the chart ends and the x-axis:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.xAxisOffset}),"\n",(0,t.jsx)(o.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"yAxisProps"})," to change the domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set the domain to ",(0,t.jsx)(o.code,{children:"[0, 100]"}),":"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.yScale}),"\n",(0,t.jsx)(o.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,t.jsxs)(o.p,{children:["To display an additional Y axis on the right side of the chart, set the ",(0,t.jsx)(o.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to the recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with the ",(0,t.jsx)(o.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\nthe ",(0,t.jsx)(o.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,t.jsx)(o.code,{children:"yAxisId"})," in the ",(0,t.jsx)(o.code,{children:"series"})," object."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.rightYAxis}),"\n",(0,t.jsx)(o.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,t.jsxs)(o.p,{children:["To rotate x-axis labels, set ",(0,t.jsx)(o.code,{children:"xAxisProps.angle"})," to the number of degrees to rotate:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.rotateLabels}),"\n",(0,t.jsx)(o.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(o.p,{children:["To format values in the tooltip and axis ticks, use the ",(0,t.jsx)(o.code,{children:"valueFormat"})," prop. It accepts\na function that takes a number value as an argument and returns a formatted value:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.valueFormatter}),"\n",(0,t.jsx)(o.h2,{id:"chart-color",children:"Chart color"}),"\n",(0,t.jsxs)(o.p,{children:["You can reference colors from ",(0,t.jsx)(o.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(o.code,{children:"blue"}),", ",(0,t.jsx)(o.code,{children:"red.5"}),", ",(0,t.jsx)(o.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.color}),"\n",(0,t.jsx)(o.h2,{id:"change-chart-color-depending-on-color-scheme",children:"Change chart color depending on color scheme"}),"\n",(0,t.jsxs)(o.p,{children:["You can use CSS variables in the ",(0,t.jsx)(o.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,t.jsx)(o.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor the ",(0,t.jsx)(o.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof a chart that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.colorSchemeColor}),"\n",(0,t.jsx)(o.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,t.jsx)(o.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.strokeDasharray}),"\n",(0,t.jsx)(o.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"--chart-grid-color"})," and ",(0,t.jsx)(o.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,t.jsx)(o.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.gridColor}),"\n",(0,t.jsxs)(o.p,{children:["If your application has only one color scheme, you can use ",(0,t.jsx)(o.code,{children:"gridColor"})," and ",(0,t.jsx)(o.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { CompositeChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <CompositeChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6', type: 'line' },\n        { name: 'Oranges', color: 'blue.6', type: 'bar' },\n        { name: 'Tomatoes', color: 'teal.6', type: 'area' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,t.jsxs)(o.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,t.jsx)(o.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.tooltipAnimation}),"\n",(0,t.jsx)(o.h2,{id:"units",children:"Units"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.unit}),"\n",(0,t.jsx)(o.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,t.jsx)(o.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.customTooltip}),"\n",(0,t.jsx)(o.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,t.jsxs)(o.p,{children:["To remove tooltip, set ",(0,t.jsx)(o.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.noTooltip}),"\n",(0,t.jsx)(o.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,t.jsx)(o.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.dotProps}),"\n",(0,t.jsx)(o.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"strokeWidth"})," prop to control the stroke width of all areas/lines:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.strokeWidth}),"\n",(0,t.jsx)(o.h2,{id:"sync-multiple-charts",children:"Sync multiple charts"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to recharts ",(0,t.jsx)(o.a,{href:"https://recharts.org/en-US/api/ComposedChart",children:"ComposedChart"}),"\ncomponent with ",(0,t.jsx)(o.code,{children:"composedChartProps"})," prop. For example, setting ",(0,t.jsx)(o.code,{children:"composedChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,t.jsx)(o.code,{children:"CompositeChart"})," components with the same ",(0,t.jsx)(o.code,{children:"syncId"})," prop."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.sync}),"\n",(0,t.jsx)(o.h2,{id:"dashed-lines",children:"Dashed lines"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"strokeDasharray"})," property in ",(0,t.jsx)(o.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.lineDasharray}),"\n",(0,t.jsx)(o.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,t.jsx)(n,{data:r.CompositeChartDemos.referenceLines})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})})}])},287505,(e,t,a)=>{let r="/charts/composite-chart";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(844864)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
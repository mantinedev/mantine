(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,805294,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.minBy=function(e,t){if(0===e.length)return;let r=e[0],a=t(r);for(let n=1;n<e.length;n++){let o=e[n],i=t(o);i<a&&(a=i,r=o)}return r}},972745,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let a=e.r(805294),n=e.r(387022),o=e.r(20972);r.minBy=function(e,t){if(null!=e)return a.minBy(Array.from(e),o.iteratee(t??n.identity))}},152555,(e,t,r)=>{t.exports=e.r(972745).minBy},224997,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.last=function(e){return e[e.length-1]}},90071,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r.toArray=function(e){return Array.isArray(e)?e:Array.from(e)}},52526,(e,t,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});let a=e.r(224997),n=e.r(90071),o=e.r(232040);r.last=function(e){if(o.isArrayLike(e))return a.last(n.toArray(e))}},112439,(e,t,r)=>{t.exports=e.r(52526).last},823608,e=>{"use strict";var t=e.i(648863);let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],a=`
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
`,n=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],o=`
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];`;var i=e.i(391398),l=e.i(520916),s=e.i(577596),c={root:"m_1f271cf7",container:"m_cf06f58c"},u=e.i(232471),d=e.i(481178),p=e.i(275519),y=e.i(317477),m=e.i(951254),f=e.i(44091),g=e.i(62904),v=e.i(391466),x=e.i(881264),b=e.i(191788),h=e.i(56206),P=e.i(815954),O=e.i(328233),A=e.i(629566),S=e.i(61320),w=e.i(778979),j=e.i(193555),E=e.i(763571),k=e.i(543372),T=e.i(42201),R=e.i(586489),D=e.i(543905),C=e.i(662688),N=e.i(883388),I=e.i(297974),L=e.i(561622),K=e.i(901841),F=e.i(270627),B=e.i(355716),V=e.i(174755),M=["children","type"],J=["ref"];function z(){return(z=Object.assign.bind()).apply(null,arguments)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function U(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Z=Math.cos((0,j.degreeToRadian)(45));function $(e){var t=(0,k.useAppDispatch)(),r=(0,K.usePolarChartLayout)(),a=(0,b.useMemo)(()=>{e.children;var t=e.type,a=U(e,M),n=(0,B.getAxisTypeBasedOnLayout)(r,"angleAxis",t);if(null!=n)return W(W({},a),{},{type:n})},[e,r]),n=(0,k.useAppSelector)(e=>(0,R.selectAngleAxis)(e,null==a?void 0:a.id)),o=a===n;return((0,b.useEffect)(()=>null==a?F.noop:(t((0,E.addAngleAxis)(a)),()=>{t((0,E.removeAngleAxis)(a))}),[t,a]),o)?e.children:null}var H=e=>{var t=e.cx,r=e.cy,a=e.radius,n=e.axisLineType,o=e.axisLine,i=e.ticks;if(!o)return null;var l=W(W({},(0,N.svgPropertiesNoEvents)(e)),{},{fill:"none"},(0,N.svgPropertiesNoEvents)(o));if("circle"===n)return b.createElement(O.Dot,z({className:"recharts-polar-angle-axis-line"},l,{cx:t,cy:r,r:a}));var s=i.map(e=>(0,j.polarToCartesian)(t,r,a,e.coordinate));return b.createElement(A.Polygon,z({className:"recharts-polar-angle-axis-line"},l,{points:s}))},_=e=>{var t=e.tick,r=e.tickProps,a=e.value;return t?b.isValidElement(t)?b.cloneElement(t,r):"function"==typeof t?t(r):b.createElement(S.Text,z({},r,{className:"recharts-polar-angle-axis-tick-value"}),a):null},q=e=>{var t=e.tick,r=e.tickLine,a=e.tickFormatter,n=e.stroke,o=e.ticks,i=(0,N.svgPropertiesNoEvents)(e),l=(i.ref,U(i,J)),s=(0,N.svgPropertiesNoEventsFromUnknown)(t),c=W(W({},l),{},{fill:"none"},(0,N.svgPropertiesNoEvents)(r)),u=o.map((o,i)=>{var u,d,p,y,m,f,g,v,x,O,A,S=(u=e.cx,d=e.cy,p=e.radius,y=e.orientation,m=e.tickSize,f=(0,j.polarToCartesian)(u,d,p,o.coordinate),g=(0,j.polarToCartesian)(u,d,p+("inner"===y?-1:1)*(m||8),o.coordinate),{x1:f.x,y1:f.y,x2:g.x,y2:g.y}),E=(v=e.orientation,(x=Math.cos((0,j.degreeToRadian)(-o.coordinate)))>1e-5?"outer"===v?"start":"end":x<-1e-5?"outer"===v?"end":"start":"middle"),k=(O=Math.cos((0,j.degreeToRadian)(-o.coordinate)),A=Math.sin((0,j.degreeToRadian)(-o.coordinate)),Math.abs(O)<=Z?A>0?"start":"end":"middle"),T=W(W(W({},l),{},{textAnchor:E,verticalAnchor:k,stroke:"none",fill:n},s),{},{index:i,payload:o,x:S.x2,y:S.y2});return b.createElement(P.Layer,z({className:(0,h.clsx)("recharts-polar-angle-axis-tick",(0,V.getClassNameFromUnknown)(t)),key:"tick-".concat(o.coordinate)},(0,w.adaptEventsOfChild)(e,o,i)),r&&b.createElement("line",z({className:"recharts-polar-angle-axis-tick-line"},c,S)),b.createElement(_,{tick:t,tickProps:T,value:a?a(o.value,i):o.value}))});return b.createElement(P.Layer,{className:"recharts-polar-angle-axis-ticks"},u)},Q=e=>{var t=e.angleAxisId,r=(0,k.useAppSelector)(R.selectPolarViewBox),a=(0,k.useAppSelector)(e=>(0,T.selectPolarAxisScale)(e,"angleAxis",t)),n=(0,C.useIsPanorama)(),o=(0,k.useAppSelector)(e=>(0,T.selectPolarAngleAxisTicks)(e,"angleAxis",t,n));if(null==r||!o||!o.length||null==a)return null;var i=W(W(W({},e),{},{scale:a},r),{},{radius:r.outerRadius,ticks:o});return b.createElement(L.ZIndexLayer,{zIndex:i.zIndex},b.createElement(P.Layer,{className:(0,h.clsx)("recharts-polar-angle-axis","angleAxis",i.className)},b.createElement(H,i),b.createElement(q,i)))};function X(e){var t,r=(0,I.resolveDefaultProps)(e,D.defaultPolarAngleAxisProps);return b.createElement($,{id:r.angleAxisId,scale:r.scale,type:r.type,dataKey:r.dataKey,unit:void 0,name:r.name,allowDuplicatedCategory:!1,allowDataOverflow:!1,reversed:r.reversed,includeHidden:!1,allowDecimals:r.allowDecimals,tickCount:r.tickCount,niceTicks:null!=(t=r.niceTicks)?t:"auto",ticks:r.ticks,tick:r.tick,domain:r.domain},b.createElement(Q,r))}X.displayName="PolarAngleAxis";var Y=e.i(314169),ee=(0,Y.createSelector)([(e,t)=>(0,T.selectPolarAxisTicks)(e,"angleAxis",t,!1)],e=>{if(e)return e.map(e=>e.coordinate)}),et=(0,Y.createSelector)([(e,t)=>(0,T.selectPolarAxisTicks)(e,"radiusAxis",t,!1)],e=>{if(e)return e.map(e=>e.coordinate)}),er=e.i(446354),ea=["gridType","radialLines","angleAxisId","radiusAxisId","cx","cy","innerRadius","outerRadius","polarAngles","polarRadius","zIndex"];function en(){return(en=Object.assign.bind()).apply(null,arguments)}function eo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ei(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eo(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eo(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var el=e=>{var t=e.cx,r=e.cy,a=e.innerRadius,n=e.outerRadius,o=e.polarAngles,i=e.radialLines;if(!o||!o.length||!i)return null;var l=ei({},(0,N.svgPropertiesNoEvents)(e));return b.createElement("g",{className:"recharts-polar-grid-angle"},o.map(e=>{var o=(0,j.polarToCartesian)(t,r,a,e),i=(0,j.polarToCartesian)(t,r,n,e);return b.createElement("line",en({key:"line-".concat(e)},l,{x1:o.x,y1:o.y,x2:i.x,y2:i.y}))}))},es=e=>{var t=e.cx,r=e.cy,a=e.radius,n=ei({},(0,N.svgPropertiesNoEvents)(e));return b.createElement("circle",en({},n,{className:(0,h.clsx)("recharts-polar-grid-concentric-circle",e.className),cx:t,cy:r,r:a}))},ec=e=>{var t,r,a,n,o=e.radius,i=ei({},(0,N.svgPropertiesNoEvents)(e));return b.createElement("path",en({},i,{className:(0,h.clsx)("recharts-polar-grid-concentric-polygon",e.className),d:(t=e.cx,r=e.cy,a=e.polarAngles,n="",a.forEach((e,a)=>{var i=(0,j.polarToCartesian)(t,r,o,e);a?n+="L ".concat(i.x,",").concat(i.y):n+="M ".concat(i.x,",").concat(i.y)}),n+="Z")}))},eu=e=>{var t=e.polarRadius,r=e.gridType;if(!t||!t.length)return null;var a=Math.max(...t),n=e.fill&&"none"!==e.fill;return b.createElement("g",{className:"recharts-polar-grid-concentric"},n&&"circle"===r&&b.createElement(es,en({},e,{radius:a})),n&&"circle"!==r&&b.createElement(ec,en({},e,{radius:a})),t.map((t,a)=>"circle"===r?b.createElement(es,en({key:a},e,{fill:"none",radius:t})):b.createElement(ec,en({key:a},e,{fill:"none",radius:t}))))},ed={angleAxisId:0,radiusAxisId:0,gridType:"polygon",radialLines:!0,zIndex:er.DefaultZIndexes.grid,stroke:"#ccc",strokeWidth:1,fill:"none"},ep=e=>{var t,r,a,n,o,i,l,s,c=(0,I.resolveDefaultProps)(e,ed),u=c.gridType,d=c.radialLines,p=c.angleAxisId,y=c.radiusAxisId,m=c.cx,f=c.cy,g=c.innerRadius,v=c.outerRadius,x=c.polarAngles,h=c.polarRadius,P=c.zIndex,O=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(c,ea),A=(0,k.useAppSelector)(R.selectPolarViewBox),S=(0,k.useAppSelector)(e=>ee(e,p)),w=(0,k.useAppSelector)(e=>et(e,y)),j=Array.isArray(x)?x:S,E=Array.isArray(h)?h:w;if(null==j||null==E)return null;var T=ei({cx:null!=(t=null!=(r=null==A?void 0:A.cx)?r:m)?t:0,cy:null!=(a=null!=(n=null==A?void 0:A.cy)?n:f)?a:0,innerRadius:null!=(o=null!=(i=null==A?void 0:A.innerRadius)?i:g)?o:0,outerRadius:null!=(l=null!=(s=null==A?void 0:A.outerRadius)?s:v)?l:0,polarAngles:j,polarRadius:E,zIndex:P},O);return T.outerRadius<=0?null:b.createElement(L.ZIndexLayer,{zIndex:T.zIndex},b.createElement("g",{className:"recharts-polar-grid"},b.createElement(eu,en({gridType:u,radialLines:d},T,{polarAngles:j,polarRadius:E})),b.createElement(el,en({gridType:u,radialLines:d},T,{polarAngles:j,polarRadius:E}))))};ep.displayName="PolarGrid";var ey=e.i(767577),em=e.i(152555),ef=e.i(905e3),eg=e.i(913001),ev=["type"],ex=["cx","cy","angle","axisLine"],eb=["angle","tickFormatter","stroke","tick"];function eh(){return(eh=Object.assign.bind()).apply(null,arguments)}function eP(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function eO(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eP(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eP(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eA(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eS(e){var t=(0,k.useAppDispatch)(),r=(0,K.usePolarChartLayout)(),a=(0,b.useMemo)(()=>{var t=e.type,a=eA(e,ev),n=(0,B.getAxisTypeBasedOnLayout)(r,"radiusAxis",t);if(null!=n)return eO(eO({},a),{},{type:n})},[e,r]);return(0,b.useEffect)(()=>null==a?F.noop:(t((0,E.addRadiusAxis)(a)),()=>{t((0,E.removeRadiusAxis)(a))}),[t,a]),null}var ew=e=>{var t,r,a,n,o,i,l,s,c,u,d,p,y,m,f,g,v,x,O,A,E,D,C,I=e.radiusAxisId,K=(0,k.useAppSelector)(R.selectPolarViewBox),F=(0,k.useAppSelector)(e=>(0,T.selectPolarAxisScale)(e,"radiusAxis",I)),B=(0,k.useAppSelector)(e=>(0,T.selectPolarAxisTicks)(e,"radiusAxis",I,!1));if(null==K||!B||!B.length||null==F)return null;var M=eO(eO({},e),{},{scale:F},K),J=M.tick,z=M.axisLine;return b.createElement(L.ZIndexLayer,{zIndex:M.zIndex},b.createElement(P.Layer,{className:(0,h.clsx)("recharts-polar-radius-axis","radiusAxis",M.className)},z&&(t=M.cx,r=M.cy,a=M.angle,n=M.axisLine,o=eA(M,ex),i=B.reduce((e,t)=>[Math.min(e[0],t.coordinate),Math.max(e[1],t.coordinate)],[1/0,-1/0]),l=(0,j.polarToCartesian)(t,r,i[0],a),s=(0,j.polarToCartesian)(t,r,i[1],a),c=eO(eO(eO({},(0,N.svgPropertiesNoEvents)(o)),{},{fill:"none"},(0,N.svgPropertiesNoEvents)(n)),{},{x1:l.x,y1:l.y,x2:s.x,y2:s.y}),b.createElement("line",eh({className:"recharts-polar-radius-axis-line"},c))),J&&(u=M.angle,d=M.tickFormatter,p=M.stroke,y=M.tick,m=eA(M,eb),f=(e=>{var t;switch(e){case"left":t="end";break;case"right":t="start";break;default:t="middle"}return t})(M.orientation),g=(0,N.svgPropertiesNoEvents)(m),v=(0,N.svgPropertiesNoEventsFromUnknown)(y),x=B.map((e,t)=>{var r,a,n,o,i,l=(r=M.angle,a=M.cx,n=M.cy,o=e.coordinate,(0,j.polarToCartesian)(a,n,o,r)),s=eO(eO(eO(eO({textAnchor:f,transform:"rotate(".concat(90-u,", ").concat(l.x,", ").concat(l.y,")")},g),{},{stroke:"none",fill:p},v),{},{index:t},l),{},{payload:e});return b.createElement(P.Layer,eh({className:(0,h.clsx)("recharts-polar-radius-axis-tick",(0,V.getClassNameFromUnknown)(y)),key:"tick-".concat(e.coordinate)},(0,w.adaptEventsOfChild)(M,e,t)),(i=d?d(e.value,t):e.value,b.isValidElement(y)?b.cloneElement(y,s):"function"==typeof y?y(s):b.createElement(S.Text,eh({},s,{className:"recharts-polar-radius-axis-tick-value"}),i)))}),b.createElement(P.Layer,{className:"recharts-polar-radius-axis-ticks"},x)),b.createElement(ef.PolarLabelContextProvider,(O=M.angle,A=M.cx,E=M.cy,D=(0,ey.default)(B,e=>e.coordinate||0),{cx:A,cy:E,startAngle:O,endAngle:O,innerRadius:(null==(C=(0,em.default)(B,e=>e.coordinate||0))?void 0:C.coordinate)||0,outerRadius:(null==D?void 0:D.coordinate)||0,clockWise:!1}),b.createElement(ef.PolarLabelFromLabelProp,{label:M.label}),M.children)))};function ej(e){var t,r=(0,I.resolveDefaultProps)(e,eg.defaultPolarRadiusAxisProps);return b.createElement(b.Fragment,null,b.createElement(eS,{domain:r.domain,id:r.radiusAxisId,scale:r.scale,type:r.type,dataKey:r.dataKey,unit:void 0,name:r.name,allowDuplicatedCategory:r.allowDuplicatedCategory,allowDataOverflow:r.allowDataOverflow,reversed:r.reversed,includeHidden:r.includeHidden,allowDecimals:r.allowDecimals,niceTicks:null!=(t=r.niceTicks)?t:"auto",ticks:r.ticks,tickCount:r.tickCount,tick:r.tick}),b.createElement(ew,r))}ej.displayName="PolarRadiusAxis";var eE=e.i(112439),ek=e.i(516257),eT=e.i(301426),eR=e.i(789859),eD=e.i(482593),eC=e.i(128002),eN=e.i(399479),eI=e.i(299887);function eL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function eK(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eL(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eL(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eF=(e,t)=>(0,T.selectPolarAxisScale)(e,"radiusAxis",t),eB=(0,Y.createSelector)([eF],e=>{if(null!=e)return{scale:e}}),eV=(0,Y.createSelector)([R.selectRadiusAxis,eF],(e,t)=>{if(null!=e&&null!=t)return eK(eK({},e),{},{scale:t})}),eM=(e,t,r)=>(0,R.selectAngleAxis)(e,r),eJ=(e,t,r)=>(0,T.selectPolarAxisScale)(e,"angleAxis",r),ez=(0,Y.createSelector)([eM,eJ],(e,t)=>{if(null!=e&&null!=t)return eK(eK({},e),{},{scale:t})}),eG=(0,Y.createSelector)([eM,eJ,R.selectPolarViewBox],(e,t,r)=>{if(null!=r&&null!=t)return{scale:t,type:e.type,dataKey:e.dataKey,cx:r.cx,cy:r.cy}}),eW=(0,Y.createSelector)([K.selectChartLayout,eV,(e,t,r,a)=>(0,T.selectPolarAxisTicks)(e,"radiusAxis",t,a),ez,(e,t,r,a)=>(0,T.selectPolarAxisTicks)(e,"angleAxis",r,a)],(e,t,r,a,n)=>(0,ek.isCategoricalAxis)(e,"radiusAxis")?(0,ek.getBandSizeOfAxis)(t,r,!1):(0,ek.getBandSizeOfAxis)(a,n,!1)),eU=(0,Y.createSelector)([eI.selectUnfilteredPolarItems,(e,t,r,a,n)=>n],(e,t)=>{if(null!=e){var r=e.find(e=>"radar"===e.type&&t===e.id);return null==r?void 0:r.dataKey}}),eZ=(0,Y.createSelector)([eB,eG,eN.selectChartDataAndAlwaysIgnoreIndexes,eU,eW],(e,t,r,a,n)=>{var o,i,l,s,c,u,d,p,y,m,f,g,v=r.chartData,x=r.dataStartIndex,b=r.dataEndIndex;if(null!=e&&null!=t&&null!=v&&null!=n&&null!=a){return i=(o={radiusAxis:e,angleAxis:t,displayedData:v.slice(x,b+1),dataKey:a,bandSize:n}).radiusAxis,l=o.angleAxis,s=o.displayedData,c=o.dataKey,u=o.bandSize,d=l.cx,p=l.cy,y=!1,m=[],f="number"!==l.type&&null!=u?u:0,s.forEach((e,t)=>{var r,a,n=(0,ek.getValueByDataKey)(e,l.dataKey,t),o=(0,ek.getValueByDataKey)(e,c),s=(null!=(r=l.scale.map(n))?r:0)+f,u=Array.isArray(o)?(0,eE.default)(o):o,g=(0,F.isNullish)(u)?0:null!=(a=i.scale.map(u))?a:0;Array.isArray(o)&&o.length>=2&&(y=!0),m.push(e5(e5({},(0,j.polarToCartesian)(d,p,g,s)),{},{name:n,value:o,cx:d,cy:p,radius:g,angle:s,payload:e}))}),g=[],y&&m.forEach(e=>{if(Array.isArray(e.value)){var t,r=e.value[0],a=(0,F.isNullish)(r)?0:null!=(t=i.scale.map(r))?t:0;g.push(e5(e5({},e),{},{radius:a},(0,j.polarToCartesian)(d,p,a,e.angle)))}else g.push(e)}),{points:m,isRange:y,baseLinePoints:g}}}),e$=e.i(836094),eH=e.i(768069),e_=e.i(436323),eq=e.i(945031),eQ=e.i(634200),eX=e.i(325551),eY=e.i(62037),e0=["id"];function e1(){return(e1=Object.assign.bind()).apply(null,arguments)}function e2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function e5(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e2(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):e2(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function e4(e,t){return e&&"none"!==e?e:t}var e9=b.memo(e=>{var t=e.dataKey,r=e.stroke,a=e.strokeWidth,n=e.fill,o=e.name,i=e.hide,l=e.tooltipType,s=e.id,c={dataDefinedOnItem:void 0,getPosition:F.noop,settings:{stroke:r,strokeWidth:a,fill:n,nameKey:void 0,dataKey:t,name:(0,ek.getTooltipNameProp)(o,t),hide:i,type:l,color:e4(r,n),unit:"",graphicalItemId:s}};return b.createElement(eC.SetTooltipEntrySettings,{tooltipEntrySettings:c})});function e3(e){var t=e.points,r=e.props,a=r.dot,n=r.dataKey;r.id;var o=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,e0),i=(0,N.svgPropertiesNoEvents)(o);return b.createElement(eR.Dots,{points:t,dot:a,className:"recharts-radar-dots",dotClassName:"recharts-radar-dot",dataKey:n,baseProps:i})}function e8(e){var t=e.showLabels,r=e.points,a=e.children,n=r.map(e=>{var t,r={x:e.x,y:e.y,width:0,lowerWidth:0,upperWidth:0,height:0};return e5(e5({},r),{},{value:null!=(t=e.value)?t:"",payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return b.createElement(eT.CartesianLabelListContextProvider,{value:t?n:void 0},a)}function e7(e){var t,r=e.points,a=e.baseLinePoints,n=e.props;if(null==r)return null;var o=n.shape,i=n.isRange,l=n.connectNulls;return t=b.isValidElement(o)?b.cloneElement(o,e5(e5({},n),{},{points:r})):"function"==typeof o?o(e5(e5({},n),{},{points:r})):b.createElement(A.Polygon,e1({},(0,eY.svgPropertiesAndEvents)(n),{onMouseEnter:e=>{var t=n.onMouseEnter;t&&t(n,e)},onMouseLeave:e=>{var t=n.onMouseLeave;t&&t(n,e)},points:r,baseLinePoints:i?a:void 0,connectNulls:l})),b.createElement(P.Layer,{className:"recharts-radar-polygon"},t,b.createElement(e3,{props:n,points:r}))}function e6(e){var t=e.props,r=e.previousPointsRef,a=e.previousBaseLinePointsRef,n=t.points,o=t.baseLinePoints,i=t.isAnimationActive,l=t.animationBegin,s=t.animationDuration,c=t.animationEasing,u=t.animationMatchBy,d=t.animationInterpolateFn,p=t.onAnimationStart,y=t.onAnimationEnd,m=(0,eX.useAnimationStartSnapshot)(t,a),f=m.startValue,g=(0,eQ.matchAnimationItems)(null!=f?f:null,o,u),v=(0,eq.useAnimationCallbacks)(p,y),x=v.isAnimating,h=v.handleAnimationStart,P=v.handleAnimationEnd,O=(0,K.usePolarChartLayout)();return null==O?null:b.createElement(e8,{showLabels:!x,points:n},b.createElement(eq.AnimatedItems,{animationInput:t,animationIdPrefix:"recharts-radar-",items:n,previousItemsRef:r,isAnimationActive:i,animationBegin:l,animationDuration:s,animationEasing:c,onAnimationStart:h,onAnimationEnd:P,animationInterpolateFn:d,animationMatchBy:u,layout:O},(e,r)=>{var a=1===r?o:d(g,r,O);return m.syncStepValue(a,r),b.createElement(e7,{points:e,baseLinePoints:a,props:t})}),b.createElement(eT.LabelListFromLabelProp,{label:t.label}),t.children)}function te(e){var t=(0,b.useRef)(void 0),r=(0,b.useRef)(void 0);return b.createElement(e6,{props:e,previousPointsRef:t,previousBaseLinePointsRef:r})}var tt={activeDot:!0,angleAxisId:0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:eQ.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"removed"===e.status?[]:"matched"===e.status?[e5(e5({},e.next),{},{x:(0,F.interpolate)(e.prev.x,e.next.x,t),y:(0,F.interpolate)(e.prev.y,e.next.y,t)})]:[e5(e5({},e.next),{},{x:(0,F.interpolate)(e.next.cx,e.next.x,t),y:(0,F.interpolate)(e.next.cy,e.next.y,t)})]),dot:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",radiusAxisId:0,zIndex:er.DefaultZIndexes.area};function tr(e){var t=e.hide,r=e.className,a=e.points;if(t)return null;var n=(0,h.clsx)("recharts-radar",r);return b.createElement(L.ZIndexLayer,{zIndex:e.zIndex},b.createElement(P.Layer,{className:n},b.createElement(te,e)),b.createElement(eD.ActivePoints,{points:a,mainColor:e4(e.stroke,e.fill),itemDataKey:e.dataKey,activeDot:e.activeDot}))}function ta(e){var t=(0,C.useIsPanorama)(),r=(0,k.useAppSelector)(r=>eZ(r,e.radiusAxisId,e.angleAxisId,t,e.id));return(null==r?void 0:r.points)==null?null:b.createElement(tr,e1({},e,{points:null==r?void 0:r.points,baseLinePoints:null==r?void 0:r.baseLinePoints,isRange:null==r?void 0:r.isRange}))}function tn(e){var t=(0,I.resolveDefaultProps)(e,tt);return b.createElement(eH.RegisterGraphicalItemId,{id:t.id,type:"radar"},e=>{var r,a,n,o,i;return b.createElement(b.Fragment,null,b.createElement(e_.SetPolarGraphicalItem,{type:"radar",id:e,data:void 0,dataKey:t.dataKey,hide:t.hide,angleAxisId:t.angleAxisId,radiusAxisId:t.radiusAxisId}),b.createElement(e$.SetPolarLegendPayload,{legendPayload:(r=t.dataKey,a=t.name,n=t.stroke,o=t.fill,i=t.legendType,[{inactive:t.hide,dataKey:r,type:i,color:e4(n,o),value:(0,ek.getTooltipNameProp)(a,r),payload:t}])}),b.createElement(e9,{dataKey:t.dataKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,tooltipType:t.tooltipType,id:e}),b.createElement(ta,e1({},t,{id:e})))})}tn.displayName="Radar";var to=e.i(471970),ti=e.i(985743);function tl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ts(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tl(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tl(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var tc=["axis"],tu=ts(ts({},ti.defaultPolarChartProps),{},{layout:"centric",startAngle:90,endAngle:-270}),td=(0,b.forwardRef)((e,t)=>{var r=(0,I.resolveDefaultProps)(e,tu);return b.createElement(ti.PolarChart,{chartName:"RadarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:tc,tooltipPayloadSearcher:to.arrayTooltipSearcher,categoricalChartProps:r,ref:t})}),tp=e.i(723451),ty=e.i(694713);let tm={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1,withTooltip:!1,withDots:!1,tooltipAnimationDuration:0,accessibilityLayer:!0},tf=(0,d.createVarsResolver)((e,{gridColor:t,textColor:r})=>({root:{"--chart-grid-color":t?(0,y.getThemeColor)(t,e):void 0,"--chart-text-color":r?(0,y.getThemeColor)(r,e):void 0}})),tg=(0,p.factory)(e=>{let t=(0,f.useProps)("RadarChart",tm,e),{classNames:r,className:a,style:n,styles:o,unstyled:d,vars:p,data:h,series:P,dataKey:O,gridColor:A,textColor:S,radarProps:w,radarChartProps:j,polarGridProps:E,polarAngleAxisProps:k,polarRadiusAxisProps:T,tooltipProps:R,withPolarGrid:D,withPolarAngleAxis:C,withPolarRadiusAxis:N,withTooltip:I,tooltipAnimationDuration:L,children:K,withLegend:F,withDots:B,dotProps:V,activeDotProps:M,legendProps:J,attributes:z,accessibilityLayer:G,...W}=t,U=(0,m.useMantineTheme)(),Z=(0,v.useStyles)({name:"RadarChart",classes:c,props:t,className:a,style:n,classNames:r,styles:o,unstyled:d,attributes:z,vars:p,varsResolver:tf}),[$,H]=(0,b.useState)(null),{resolvedClassNames:_,resolvedStyles:q}=(0,g.useResolvedStylesApi)({classNames:r,styles:o,props:t}),Q=P.map((e,t)=>(0,i.jsx)(tn,{name:e.name,dataKey:e.name,stroke:(0,y.getThemeColor)(e.strokeColor||e.color,U),fill:(0,y.getThemeColor)(e.color,U),fillOpacity:$?$===e.name?e.opacity||.4:.05:e.opacity||.4,dot:!!B&&{fillOpacity:1,strokeOpacity:0,strokeWidth:1,fill:(0,y.getThemeColor)(e.color,U),stroke:(0,y.getThemeColor)(e.color,U),...V},activeDot:!!B&&{fill:(0,y.getThemeColor)(e.color,U),stroke:(0,y.getThemeColor)(e.color,U),...M},strokeOpacity:$?$===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof w?w(e):w},t));return(0,i.jsx)(u.Box,{...Z("root"),...W,children:(0,i.jsx)(tp.ResponsiveContainer,{...Z("container"),children:(0,i.jsxs)(td,{data:h,accessibilityLayer:G,...j,children:[D&&(0,i.jsx)(ep,{stroke:"var(--chart-grid-color)",...E}),C&&(0,i.jsx)(X,{dataKey:O,...k}),N&&(0,i.jsx)(ej,{stroke:"var(--chart-grid-color)",...T}),I&&(0,i.jsx)(ty.Tooltip,{animationDuration:L,isAnimationActive:0!==L,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1},content:({label:e,payload:t,labelFormatter:r})=>(0,i.jsx)(l.ChartTooltip,{label:r&&t?r(e,t):e,payload:t,classNames:_,styles:q,series:P,attributes:z}),...R}),Q,F&&(0,i.jsx)(x.Legend,{verticalAlign:"bottom",content:e=>(0,i.jsx)(s.ChartLegend,{payload:e.payload,onHighlight:H,legendPosition:J?.verticalAlign||"bottom",classNames:_,styles:q,series:P,centered:!0,attributes:z}),...J}),K]})})})});tg.displayName="@mantine/charts/RadarChart",tg.classes=c,tg.varsResolver=tf;let tv={type:"code",component:function(){return(0,i.jsx)(tg,{h:300,data:r,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}]},tx={type:"configurator",component:function(e){return(0,i.jsx)(tg,{h:300,data:r,dataKey:"product",series:[{name:"sales",color:e.color,strokeColor:e.strokeColor}],...e})},code:[{code:e=>`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[{ name: 'sales', color: '${e.color}', strokeColor: '${e.strokeColor}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},tb={type:"code",component:function(){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},th={type:"configurator",component:function(e){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...e})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withTooltip",initialValue:!1,libraryValue:null},{type:"boolean",prop:"withDots",initialValue:!1,libraryValue:null}]},tP={type:"code",component:function(e){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withTooltip:!0,withDots:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...e})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withTooltip
      withDots
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var tO=e.i(470743),tA=e.i(883364);function tS({label:e,payload:t}){return t?(0,i.jsxs)(tO.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,i.jsx)(tA.Text,{fw:500,mb:5,children:e}),t.map(e=>(0,i.jsxs)(tA.Text,{c:e.color,fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let tw={type:"code",component:function(){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withPolarRadiusAxis:!0,withDots:!0,withTooltip:!0,tooltipProps:{content:({label:e,payload:t})=>(0,i.jsx)(tS,{label:e,payload:t})},series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
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
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withTooltip
      withDots
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},tj={type:"code",component:function(){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:e=>`${e}$`},series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      polarRadiusAxisProps={{ angle: 30, tickFormatter: (value) => \`\${value}$\` }}
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},tE={type:"code",component:function(){return(0,i.jsx)(tg,{h:300,data:n,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue.6', opacity: 0.2 },
        { name: 'Sales February', color: 'orange.6', opacity: 0.2 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var tk=(0,t.__exportAll)({color:()=>tx,customTooltip:()=>tw,legend:()=>tE,multiple:()=>tb,parts:()=>th,rechartsProps:()=>tj,tooltip:()=>tP,usage:()=>tv});e.s(["RadarChartDemos",0,tk],823608)}]);
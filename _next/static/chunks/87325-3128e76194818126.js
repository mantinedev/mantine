"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87325],{55484:function(t,r,e){e.d(r,{q:function(){return S}});var i=e(2784),n=e(61049),a=e.n(n),o=e(91745),l=e(15027),c=e(79376),s=e(20092),h=e(22520),u=e(83365),f=e(95926),d=["x1","y1","x2","y2","key"],p=["offset"];function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?m(Object(e),!0).forEach(function(r){var i,n;i=r,n=e[r],(i=function(t){var r=function(t,r){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=y(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==y(r)?r:r+""}(i))in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function g(){return(g=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function x(t,r){if(null==t)return{};var e,i,n=function(t,r){if(null==t)return{};var e={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(r.indexOf(i)>=0)continue;e[i]=t[i]}return e}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var b=function(t){var r=t.fill;if(!r||"none"===r)return null;var e=t.fillOpacity,n=t.x,a=t.y,o=t.width,l=t.height,c=t.ry;return i.createElement("rect",{x:n,y:a,ry:c,width:o,height:l,stroke:"none",fill:r,fillOpacity:e,className:"recharts-cartesian-grid-bg"})};function k(t,r){var e;if(i.isValidElement(t))e=i.cloneElement(t,r);else if(a()(t))e=t(r);else{var n=r.x1,o=r.y1,l=r.x2,s=r.y2,h=r.key,u=x(r,d),f=(0,c.L6)(u,!1),y=(f.offset,x(f,p));e=i.createElement("line",g({},y,{x1:n,y1:o,x2:l,y2:s,fill:"none",key:h}))}return e}function O(t){var r=t.x,e=t.width,n=t.horizontal,a=void 0===n||n,o=t.horizontalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(i,n){return k(a,v(v({},t),{},{x1:r,y1:i,x2:r+e,y2:i,key:"line-".concat(n),index:n}))});return i.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function w(t){var r=t.y,e=t.height,n=t.vertical,a=void 0===n||n,o=t.verticalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(i,n){return k(a,v(v({},t),{},{x1:i,y1:r,x2:i,y2:r+e,key:"line-".concat(n),index:n}))});return i.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function j(t){var r=t.horizontalFill,e=t.fillOpacity,n=t.x,a=t.y,o=t.width,l=t.height,c=t.horizontalPoints,s=t.horizontal;if(!(void 0===s||s)||!r||!r.length)return null;var h=c.map(function(t){return Math.round(t+a-a)}).sort(function(t,r){return t-r});a!==h[0]&&h.unshift(0);var u=h.map(function(t,c){var s=h[c+1]?h[c+1]-t:a+l-t;if(s<=0)return null;var u=c%r.length;return i.createElement("rect",{key:"react-".concat(c),y:t,x:n,height:s,width:o,stroke:"none",fill:r[u],fillOpacity:e,className:"recharts-cartesian-grid-bg"})});return i.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}function P(t){var r=t.vertical,e=t.verticalFill,n=t.fillOpacity,a=t.x,o=t.y,l=t.width,c=t.height,s=t.verticalPoints;if(!(void 0===r||r)||!e||!e.length)return null;var h=s.map(function(t){return Math.round(t+a-a)}).sort(function(t,r){return t-r});a!==h[0]&&h.unshift(0);var u=h.map(function(t,r){var s=h[r+1]?h[r+1]-t:a+l-t;if(s<=0)return null;var u=r%e.length;return i.createElement("rect",{key:"react-".concat(r),x:t,y:o,width:s,height:c,stroke:"none",fill:e[u],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return i.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}var E=function(t,r){var e=t.xAxis,i=t.width,n=t.height,a=t.offset;return(0,s.Rf)((0,h.f)(v(v(v({},u.O.defaultProps),e),{},{ticks:(0,s.uY)(e,!0),viewBox:{x:0,y:0,width:i,height:n}})),a.left,a.left+a.width,r)},z=function(t,r){var e=t.yAxis,i=t.width,n=t.height,a=t.offset;return(0,s.Rf)((0,h.f)(v(v(v({},u.O.defaultProps),e),{},{ticks:(0,s.uY)(e,!0),viewBox:{x:0,y:0,width:i,height:n}})),a.top,a.top+a.height,r)},A={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function S(t){var r,e,n,c,s,h,u=(0,f.zn)(),d=(0,f.Mw)(),p=(0,f.qD)(),m=v(v({},t),{},{stroke:null!==(r=t.stroke)&&void 0!==r?r:A.stroke,fill:null!==(e=t.fill)&&void 0!==e?e:A.fill,horizontal:null!==(n=t.horizontal)&&void 0!==n?n:A.horizontal,horizontalFill:null!==(c=t.horizontalFill)&&void 0!==c?c:A.horizontalFill,vertical:null!==(s=t.vertical)&&void 0!==s?s:A.vertical,verticalFill:null!==(h=t.verticalFill)&&void 0!==h?h:A.verticalFill,x:(0,l.hj)(t.x)?t.x:p.left,y:(0,l.hj)(t.y)?t.y:p.top,width:(0,l.hj)(t.width)?t.width:p.width,height:(0,l.hj)(t.height)?t.height:p.height}),x=m.x,k=m.y,S=m.width,C=m.height,N=m.syncWithTicks,L=m.horizontalValues,T=m.verticalValues,F=(0,f.CW)(),M=(0,f.Nf)();if(!(0,l.hj)(S)||S<=0||!(0,l.hj)(C)||C<=0||!(0,l.hj)(x)||x!==+x||!(0,l.hj)(k)||k!==+k)return null;var W=m.verticalCoordinatesGenerator||E,D=m.horizontalCoordinatesGenerator||z,U=m.horizontalPoints,B=m.verticalPoints;if((!U||!U.length)&&a()(D)){var I=L&&L.length,G=D({yAxis:M?v(v({},M),{},{ticks:I?L:M.ticks}):void 0,width:u,height:d,offset:p},!!I||N);(0,o.Z)(Array.isArray(G),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(y(G),"]")),Array.isArray(G)&&(U=G)}if((!B||!B.length)&&a()(W)){var Z=T&&T.length,_=W({xAxis:F?v(v({},F),{},{ticks:Z?T:F.ticks}):void 0,width:u,height:d,offset:p},!!Z||N);(0,o.Z)(Array.isArray(_),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(y(_),"]")),Array.isArray(_)&&(B=_)}return i.createElement("g",{className:"recharts-cartesian-grid"},i.createElement(b,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),i.createElement(O,g({},m,{offset:p,horizontalPoints:U,xAxis:F,yAxis:M})),i.createElement(w,g({},m,{offset:p,verticalPoints:B,xAxis:F,yAxis:M})),i.createElement(j,g({},m,{horizontalPoints:U})),i.createElement(P,g({},m,{verticalPoints:B})))}S.displayName="CartesianGrid"},80739:function(t,r,e){e.d(r,{v:function(){return c}});var i=e(71572),n=e(171),a=e(25556),o=e(3131),l=e(69524),c=(0,i.z)({chartName:"BarChart",GraphicalChild:n.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:l.t9})},9345:function(t,r,e){e.d(r,{W:function(){return o}});var i=e(52322),n=e(8132),a=e(9404);let o={type:"code",component:function(){return(0,i.jsx)(n.v,{h:300,data:a.hm,dataKey:"month",series:[{name:"Smartphones",color:"url(#crosshatch)",stackId:"a"},{name:"Laptops",color:"blue.6",stackId:"b"},{name:"Tablets",color:"url(#diagonalStripes)",stackId:"b"}],children:(0,i.jsxs)("defs",{children:[(0,i.jsx)("pattern",{id:"diagonalStripes",patternUnits:"userSpaceOnUse",width:6,height:8,patternTransform:"rotate(45)",children:(0,i.jsx)("rect",{width:"2",height:"8",transform:"translate(0,0)",fill:"color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"})}),(0,i.jsxs)("pattern",{id:"crosshatch",patternUnits:"userSpaceOnUse",width:8,height:8,children:[(0,i.jsx)("path",{d:"M 0 0 L 8 0 L 8 8 L 0 8 Z",fill:"none",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,i.jsx)("path",{d:"M 0 0 L 8 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"}),(0,i.jsx)("path",{d:"M 8 0 L 0 8",stroke:"color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))",strokeWidth:"1"})]})]})})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={mixedStackData}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'url(#crosshatch)', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'url(#diagonalStripes)', stackId: 'b' },
      ]}
    >
      <defs>
        <pattern
          id="diagonalStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={8}
          patternTransform="rotate(45)"
        >
          <rect
            width="2"
            height="8"
            transform="translate(0,0)"
            fill="color-mix(in lch, var(--mantine-color-teal-6) 70%, rgba(0,0,0,0))"
          />
        </pattern>

        <pattern id="crosshatch" patternUnits="userSpaceOnUse" width={8} height={8}>
          <path
            d="M 0 0 L 8 0 L 8 8 L 0 8 Z"
            fill="none"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 0 0 L 8 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
          <path
            d="M 8 0 L 0 8"
            stroke="color-mix(in lch, var(--mantine-color-indigo-6) 70%, rgba(0,0,0,0))"
            strokeWidth="1"
          />
        </pattern>
      </defs>
    </BarChart>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a.Lc,language:"tsx",fileName:"data.ts"}]}}}]);
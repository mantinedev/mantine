(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var a in e)t(r,a,{get:e[a],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},280958,e=>{"use strict";var t=e.i(648863);let n=[{name:"Analytics",value:100,color:"pink.6"},{name:"DevOps",color:"grape.6",children:[{name:"Docker",value:80},{name:"Kubernetes",value:50}]},{name:"Backend",color:"teal.6",children:[{name:"Node",value:150},{name:"Python",children:[{name:"Django",value:110},{name:"FastAPI",value:60}]},{name:"Go",value:50}]},{name:"Frontend",color:"blue.6",children:[{name:"React",children:[{name:"Frameworks",children:[{name:"Next.js",value:150},{name:"Remix",value:40}]},{name:"CRA",value:20}]},{name:"Vue",value:90},{name:"Svelte",value:30}]}],r=`
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
`;var a=e.i(391398),o=e.i(520916),i={root:"m_a73eff05"},l=e.i(232471),s=e.i(481178),c=e.i(275519),d=e.i(317477),u=e.i(670989),m=e.i(779177),h=e.i(951254),p=e.i(44091),v=e.i(62904),f=e.i(391466),g=e.i(723451),x=e.i(191788),b=e.i(762362),b=b,y=e.i(56206),j=e.i(449691),S=e.i(777541),C=e.i(815954),k=e.i(896915),D=e.i(61320),E=e.i(193555),A=e.i(901841),w=e.i(492900),T=e.i(458985),P=e.i(134518),O=e.i(128002),N=e.i(546189),I=e.i(451494),R=e.i(543372),M=e.i(768069),_=e.i(297974),z=e.i(560894);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function F(){return(F=Object.assign.bind()).apply(null,arguments)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){var r,a,o;r=e,a=t,o=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var B=x.memo(e=>{var t=e.dataKey,n=e.nameKey,r=e.data,a=e.stroke,o=e.fill,i=e.positions,l=e.id,s={dataDefinedOnItem:r.children,getPosition:e=>i.get(e),settings:{stroke:a,strokeWidth:void 0,fill:o,nameKey:n,dataKey:t,name:n?void 0:t,hide:!1,type:void 0,color:o,unit:"",graphicalItemId:l}};return x.createElement(O.SetTooltipEntrySettings,{tooltipEntrySettings:s})}),W={top:0,right:0,bottom:0,left:0},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(t,"children[").concat(e,"]")},V={options:{validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",chartName:"Sunburst",tooltipPayloadSearcher:(e,t)=>{if(null!=t)return(0,j.default)(e,t)},eventEmitter:void 0}},X=U({padding:2,dataKey:"value",nameKey:"name",ringPadding:2,innerRadius:50,fill:"#333",stroke:"#FFF",textOptions:{fontWeight:"bold",paintOrder:"stroke fill",fontSize:".75rem",stroke:"#FFF",fill:"black",pointerEvents:"none"},startAngle:0,endAngle:360,responsive:!1},z.initialEventSettingsState),H=e=>{var t=e.className,n=e.data,r=e.children,a=e.padding,o=e.dataKey,i=e.nameKey,l=e.ringPadding,s=e.innerRadius,c=e.fill,d=e.stroke,u=e.textOptions,m=e.outerRadius,h=e.cx,p=e.cy,v=e.startAngle,f=e.endAngle,g=e.onClick,j=e.onMouseEnter,w=e.onMouseLeave,T=e.id,O=(0,R.useAppDispatch)(),N=(0,A.useChartWidth)(),I=(0,A.useChartHeight)();if(null==N||null==I)return null;var M=null!=m?m:Math.min(N,I)/2,_=null!=h?h:N/2,z=null!=p?p:I/2,K=(0,b.default)([0,n[o]],[0,f]),L=function e(t){return t.children&&0!==t.children.length?1+Math.max(...t.children.map(t=>e(t))):1}(n),W=[],V=new Map([]);!function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=n.radius,s=n.innerR,m=n.initialAngle,h=n.childColor,p=n.nestedActiveTooltipIndex,v=m;t&&t.forEach((t,n)=>{var m,f,b=1===r?"[".concat(n,"]"):G(n,p),y=U(U({},t),{},{tooltipIndex:b}),S=K(t[o]),C=v,A=null!=(m=null!=(f=null==t?void 0:t.fill)?f:h)?m:c,N=(0,E.polarToCartesian)(0,0,s+i/2,-(C+S-S/2)),I=N.x,R=N.y;v+=S,W.push(x.createElement("g",{key:"sunburst-sector-".concat(t.name,"-").concat(n)},x.createElement(k.Sector,{onClick:()=>{g&&g(y),O((0,P.setActiveClickItemIndex)({activeIndex:y.tooltipIndex,activeDataKey:o,activeCoordinate:V.get(y.name),activeGraphicalItemId:T}))},onMouseEnter:e=>{j&&j(y,e),O((0,P.setActiveMouseOverItemIndex)({activeIndex:y.tooltipIndex,activeDataKey:o,activeCoordinate:V.get(y.name),activeGraphicalItemId:T}))},onMouseLeave:e=>{w&&w(y,e),O((0,P.mouseLeaveItem)())},fill:A,stroke:d,strokeWidth:a,startAngle:C,endAngle:C+S,innerRadius:s,outerRadius:s+i,cx:_,cy:z}),x.createElement(D.Text,F({},u,{alignmentBaseline:"middle",textAnchor:"middle",x:I+_,y:z-R}),t[o])));var M=(0,E.polarToCartesian)(_,z,s+i/2,C),L=M.x,B=M.y;return V.set(t.name,{x:L,y:B}),e(t.children,{radius:i,innerR:s+i+l,initialAngle:C,childColor:A,nestedActiveTooltipIndex:b},r+1)})}(n.children,{radius:(M-s)/L,innerR:s,initialAngle:v});var X=(0,y.clsx)("recharts-sunburst",t);return x.createElement(S.Surface,{width:N,height:I},x.createElement(C.Layer,{className:X},W),x.createElement(B,{dataKey:o,nameKey:i,data:n,stroke:d,fill:c,positions:V,id:T}),r)},Y=e=>{var t,n=(0,_.resolveDefaultProps)(e,X),r=n.className,a=n.width,o=n.height,i=n.responsive,l=n.style,s=n.id,c=n.throttleDelay,d=n.throttledEvents,u=function(e){if(Array.isArray(e))return e}(t=(0,x.useState)(null))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,a,o,i=[],l=!0,s=!1;try{a=(t=t.call(e)).next,!1;for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),2!==i.length);l=!0);}catch(e){s=!0,r=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw r}}return i}}(t)||function(e){if(e){if("string"==typeof e)return K(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?K(e,2):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),m=u[0],h=u[1];return x.createElement(N.RechartsStoreProvider,{preloadedState:V,reduxStoreName:null!=r?r:"SunburstChart"},x.createElement(A.ReportChartSize,{width:a,height:o}),x.createElement(A.ReportChartMargin,{margin:W}),x.createElement(I.ReportEventSettings,{throttleDelay:c,throttledEvents:d}),x.createElement(w.TooltipPortalContext.Provider,{value:m},x.createElement(T.RechartsWrapper,{className:r,width:a,height:o,responsive:i,style:l,ref:e=>{null==m&&null!=e&&h(e)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},x.createElement(M.RegisterGraphicalItemId,{id:s,type:"sunburst"},e=>x.createElement(H,F({},n,{id:e}))))))},$=e.i(694713);let q={dataKey:"value",withTooltip:!0,tooltipAnimationDuration:0,size:300,innerRadius:50,gap:1,startAngle:0,endAngle:360},J=(0,s.createVarsResolver)((e,{strokeColor:t,size:n})=>({root:{"--chart-stroke-color":t?(0,d.getThemeColor)(t,e):void 0,"--chart-size":(0,m.rem)(n)}})),Q=(0,c.factory)(e=>{let t=(0,p.useProps)("SunburstChart",q,e),{classNames:n,className:r,style:s,styles:c,unstyled:d,vars:m,data:b,dataKey:y,withTooltip:j,tooltipAnimationDuration:S,tooltipProps:C,sunburstChartProps:k,strokeColor:D,size:E,innerRadius:A,gap:w,startAngle:T,endAngle:P,withLabels:O,valueFormatter:N,children:I,attributes:R,...M}=t,_=(0,h.useMantineTheme)(),z=(0,f.useStyles)({name:"SunburstChart",classes:i,props:t,className:r,style:s,classNames:n,styles:c,unstyled:d,attributes:R,vars:m,varsResolver:J}),{resolvedClassNames:K,resolvedStyles:F}=(0,v.useResolvedStylesApi)({classNames:n,styles:c,props:t}),L=(0,x.useMemo)(()=>{let{resolved:e,total:t}=function e(t,n,r,a){let o=0;return{resolved:t.map(t=>{let i=(t.color?(0,u.parseThemeColor)({color:t.color,theme:n}).value:a)||void 0,l={...t,fill:i};if(t.children){let a=e(t.children,n,r,i);l.children=a.resolved,null==l[r]&&(l[r]=a.total),o+=a.total}else o+=Number(t[r])||0;return l}),total:o}}(b,_,y);return{name:"root",[y]:t,children:e}},[b,_,y]);return(0,a.jsx)(l.Box,{size:E,...z("root"),...M,children:(0,a.jsx)(g.ResponsiveContainer,{children:(0,a.jsxs)(Y,{data:L,dataKey:y,innerRadius:A,padding:w,ringPadding:0,startAngle:T,endAngle:P,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",textOptions:O?{fontWeight:"bold",fontSize:".65rem",paintOrder:"stroke fill",stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:1,fill:"var(--mantine-color-bright)",pointerEvents:"none"}:{display:"none"},...k,children:[j&&(0,a.jsx)($.Tooltip,{animationDuration:S,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(o.ChartTooltip,{payload:e?.map(e=>({name:e.name,value:e.value,color:e.payload?.fill||"var(--mantine-color-blue-6)"}))||[],classNames:K,styles:F,type:"radial",valueFormatter:N,attributes:R}),...C}),I]})})})});Q.displayName="@mantine/charts/SunburstChart",Q.classes=i,Q.varsResolver=J;let Z={type:"code",component:function(){return(0,a.jsx)(Q,{data:n})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee=[{name:"Sales",value:500,color:"violet.6"},{name:"Marketing",value:300,color:"grape.6"},{name:"Engineering",value:400,color:"pink.6"},{name:"Support",value:200,color:"red.6"}],et={type:"code",component:function(){return(0,a.jsx)(Q,{data:ee})},centered:!0,code:`
import { SunburstChart } from '@mantine/charts';

const data = [
  { name: 'Sales', value: 500, color: 'violet.6' },
  { name: 'Marketing', value: 300, color: 'grape.6' },
  { name: 'Engineering', value: 400, color: 'pink.6' },
  { name: 'Support', value: 200, color: 'red.6' },
];

function Demo() {
  return <SunburstChart data={data} />;
}
`},en={type:"code",component:function(){return(0,a.jsx)(Q,{data:n,withTooltip:!1})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,a.jsx)(Q,{data:n,strokeColor:"gray.3"})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} strokeColor="gray.3" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,a.jsx)(Q,{data:n,size:400})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} size={400} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"configurator",component:function(e){return(0,a.jsx)(Q,{data:n,...e})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} {{props}} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}],controls:[{type:"number",prop:"gap",min:0,max:10,step:1,initialValue:1,libraryValue:"__"}]},ei={type:"code",component:function(){return(0,a.jsx)(Q,{data:n,withLabels:!0,size:400})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withLabels size={400} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var el=(0,t.__exportAll)({color:()=>et,gap:()=>eo,noTooltip:()=>en,size:()=>ea,strokeColor:()=>er,usage:()=>Z,withLabels:()=>ei});e.s(["SunburstChartDemos",0,el],280958)},20044,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(280958);e.i(603441);var a=e.i(62558);e.i(457450);var o=e.i(418026);let i=(0,a.Layout)(o.MDX_DATA.SunburstChart);function l(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:o}=a;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"SunburstChart"})," is based on the ",(0,t.jsx)(a.a,{href:"https://recharts.org/en-US/api/SunburstChart",children:"SunburstChart recharts component"}),".\nIt displays hierarchical data as concentric rings, similar to a treemap plotted in polar coordinates:"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.usage}),"\n",(0,t.jsx)(a.h2,{id:"data-format",children:"Data format"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"SunburstChart"})," expects an array of objects. Each object must have a ",(0,t.jsx)(a.code,{children:"name"})," and ",(0,t.jsx)(a.code,{children:"color"})," property.\nLeaf nodes must have a ",(0,t.jsx)(a.code,{children:"value"})," property. Parent nodes can have a ",(0,t.jsx)(a.code,{children:"children"})," array:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"export const data = [\n  {\n    name: 'Frontend',\n    color: 'blue.6',\n    children: [\n      { name: 'React', value: 400 },\n      { name: 'Vue', value: 200 },\n      { name: 'Angular', value: 150 },\n    ],\n  },\n  {\n    name: 'Backend',\n    color: 'teal.6',\n    children: [\n      { name: 'Node', value: 300 },\n      { name: 'Python', value: 250 },\n    ],\n  },\n];\n"})}),"\n",(0,t.jsx)(a.h2,{id:"node-color",children:"Node color"}),"\n",(0,t.jsxs)(a.p,{children:["You can reference colors from ",(0,t.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(a.code,{children:"blue"}),", ",(0,t.jsx)(a.code,{children:"red.5"}),", ",(0,t.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted. Children inherit the color of their parent node."]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.color}),"\n",(0,t.jsx)(a.h2,{id:"stroke-color",children:"Stroke color"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"strokeColor"})," to change the color of the stroke around each sector:"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.strokeColor}),"\n",(0,t.jsx)(a.h2,{id:"chart-size",children:"Chart size"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"size"})," prop to control the width and height of the chart:"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.size}),"\n",(0,t.jsx)(a.h2,{id:"gap",children:"Gap"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"gap"})," prop to control the spacing between sectors and rings:"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.gap}),"\n",(0,t.jsx)(a.h2,{id:"labels",children:"Labels"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"withLabels"})," to display value labels inside each sector. It is recommended\nto increase ",(0,t.jsx)(a.code,{children:"size"})," to give labels enough space:"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.withLabels}),"\n",(0,t.jsx)(a.h2,{id:"disable-tooltip",children:"Disable tooltip"}),"\n",(0,t.jsxs)(a.p,{children:["To disable the tooltip, set ",(0,t.jsx)(a.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,t.jsx)(o,{data:r.SunburstChartDemos.noTooltip})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})})}])},936159,(e,t,n)=>{let r="/charts/sunburst-chart";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(20044)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
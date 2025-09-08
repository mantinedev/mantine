(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61049],{13307:(a,e,r)=>{"use strict";r.d(e,{l:()=>l});var t=r(6029),o=r(84939),s=r(33533);let l={type:"code",component:function(){return(0,t.jsx)(o.V,{h:300,data:s.Cx,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.HY,language:"tsx",fileName:"data.ts"}]}},33533:(a,e,r)=>{"use strict";r.d(e,{Cx:()=>s,HY:()=>l,kZ:()=>o,p:()=>t});let t=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],o=`
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
`,s=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],l=`
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
];`},34204:(a,e,r)=>{"use strict";r.d(e,{o:()=>l});var t=r(6029),o=r(84939),s=r(33533);let l={type:"code",component:function(){return(0,t.jsx)(o.V,{h:300,data:s.Cx,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.HY,language:"tsx",fileName:"data.ts"}]}},38969:(a,e,r)=>{"use strict";function t(a){return a?a.reduce((a,e)=>{let r=e.name.search(/\./);return r>=0?a[e.name.substring(r+1)]=e.label:a[e.name]=e.label,a},{}):{}}r.d(e,{J:()=>t})},42667:(a,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radar-chart",function(){return r(45605)}])},42738:(a,e,r)=>{"use strict";r.d(e,{I:()=>y,r:()=>u});var t=r(6029),o=r(8411),s=r(38919),l=r(49643),n=r(15583),i=r(21351),d=r(76320),c=r(38969),p={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(a,e){let r=a.filter(a=>"none"!==a.fill||!a.color).map(a=>{if(!a.payload||a.payload[a.name])return a;let e=a.name.search(/\./);if(e>=0){let r=a.name.substring(0,e),t={...a.payload[r]},o=Object.entries(a.payload).reduce((a,e)=>{let[t,o]=e;return t===r?a:{...a,[t]:o}},{});return{...a,name:a.name.substring(e+1),payload:{...o,...t}}}return a});return e?r.filter(a=>a.name===e):r}function m(a,e){return"radial"===e||"scatter"===e?Array.isArray(a.value)?a.value[1]-a.value[0]:a.value:Array.isArray(a.payload[a.dataKey])?a.payload[a.dataKey][1]-a.payload[a.dataKey][0]:a.payload[a.name]}let h={type:"area",showColor:!0},y=(0,o.P9)((a,e)=>{let r=(0,s.Y)("ChartTooltip",h,a),{classNames:o,className:y,style:x,styles:f,unstyled:g,vars:j,payload:b,label:S,unit:C,type:w,segmentId:A,mod:R,series:v,valueFormatter:P,showColor:N,attributes:_,...k}=r,F=(0,l.xd)(),J=(0,n.I)({name:"ChartTooltip",classes:p,props:r,className:y,style:x,classNames:o,styles:f,unstyled:g,attributes:_});if(!b)return null;let V=u(b,A),D="scatter"===w?b[0]?.payload?.name:null,K=(0,c.J)(v),I=S||D,L=V.map(a=>(0,t.jsxs)("div",{"data-type":w,...J("tooltipItem"),children:[(0,t.jsxs)("div",{...J("tooltipItemBody"),children:[N&&(0,t.jsx)("svg",{...J("tooltipItemColor"),children:(0,t.jsx)("circle",{r:6,fill:(0,i.r)(a.color,F),width:12,height:12,cx:6,cy:6})}),(0,t.jsx)("div",{...J("tooltipItemName"),children:K[a.name]||a.name})]}),(0,t.jsxs)("div",{...J("tooltipItemData"),children:["function"==typeof P?P(m(a,w)):m(a,w),C||a.unit]})]},a?.key??a.name));return(0,t.jsxs)(d.a,{...J("tooltip"),mod:[{type:w},R],ref:e,...k,children:[I&&(0,t.jsx)("div",{...J("tooltipLabel"),children:I}),(0,t.jsx)("div",{...J("tooltipBody"),children:L})]})});y.displayName="@mantine/charts/ChartTooltip"},45605:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g});var t=r(6029),o=r(16285),s=r(84939),l=r(33533);let n={type:"code",component:function(){return(0,t.jsx)(s.V,{h:300,data:l.p,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.kZ,language:"tsx",fileName:"data.ts"}]};var i=r(13307);let d={type:"configurator",component:function(a){return(0,t.jsx)(s.V,{h:300,data:l.p,dataKey:"product",series:[{name:"sales",color:a.color,strokeColor:a.strokeColor}],...a})},code:[{code:a=>`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[{ name: 'sales', color: '${a.color}', strokeColor: '${a.strokeColor}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},c={type:"configurator",component:function(a){return(0,t.jsx)(s.V,{h:300,data:l.Cx,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...a})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.HY,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withTooltip",initialValue:!1,libraryValue:null},{type:"boolean",prop:"withDots",initialValue:!1,libraryValue:null}]},p={type:"code",component:function(a){return(0,t.jsx)(s.V,{h:300,data:l.Cx,dataKey:"product",withTooltip:!0,withDots:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...a})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.HY,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,t.jsx)(s.V,{h:300,data:l.Cx,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:a=>`${a}$`},series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.HY,language:"tsx",fileName:"data.ts"}]};var m=r(34204),h=r(38547),y=r(5262);let x=(0,h.P)(y.XZ.RadarChart);function f(a){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...a.components},{Demo:r}=e;return r||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadarChart"})," is based on recharts ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component:"]}),"\n",(0,t.jsx)(r,{data:n}),"\n",(0,t.jsx)(e.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,t.jsx)(e.p,{children:"You can display multiple series on the same radar chart:"}),"\n",(0,t.jsx)(r,{data:i.l}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference colors from ",(0,t.jsx)(e.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(e.code,{children:"blue"}),", ",(0,t.jsx)(e.code,{children:"red.5"}),", ",(0,t.jsx)(e.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(e.h2,{id:"hideshow-chart-parts",children:"Hide/show chart parts"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"with-tooltip-and-dots",children:"With tooltip and dots"}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(e.h2,{id:"recharts-props",children:"Recharts props"}),"\n",(0,t.jsx)(e.p,{children:"To pass props down to the underlying recharts components, use the following props:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"radarChartProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarGridProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarGrid",children:"PolarGrid"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarAngleAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarAngleAxis",children:"PolarAngleAxis"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarRadiusAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Example of passing props down to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component:"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(e.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"withLegend"})," prop to display the legend:"]}),"\n",(0,t.jsx)(r,{data:m.o})]})}function g(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(x,{...a,children:(0,t.jsx)(f,{...a})})}},48101:(a,e,r)=>{"use strict";r.d(e,{_:()=>p});var t=r(6029),o=r(8411),s=r(38919),l=r(15583),n=r(11508),i=r(76320),d=r(38969),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let p=(0,o.P9)((a,e)=>{let r=(0,s.Y)("ChartLegend",null,a),{classNames:o,className:p,style:u,styles:m,unstyled:h,vars:y,payload:x,onHighlight:f,legendPosition:g,mod:j,series:b,showColor:S,centered:C,attributes:w,...A}=r,R=(0,l.I)({name:"ChartLegend",classes:c,props:r,className:p,style:u,classNames:o,styles:m,unstyled:h,attributes:w});if(!x)return null;let v=x.filter(a=>"none"!==a.color).map(a=>{let e=a.dataKey?.split(".").pop();return{...a,dataKey:e,payload:{...a.payload,name:e,dataKey:e}}}),P=(0,d.J)(b),N=v.map((a,e)=>(0,t.jsxs)("div",{...R("legendItem"),onMouseEnter:()=>f(a.dataKey),onMouseLeave:()=>f(null),"data-without-color":!1===S||void 0,children:[(0,t.jsx)(n.q,{color:a.color,size:12,...R("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...R("legendItemName"),children:P[a.dataKey]||a.dataKey})]},e));return(0,t.jsx)(i.a,{ref:e,mod:[{position:g,centered:C},j],...R("legend"),...A,children:N})});p.displayName="@mantine/charts/ChartLegend"},84939:(a,e,r)=>{"use strict";r.d(e,{V:()=>v});var t=r(6029),o=r(55729),s=r(46554),l=r(40684),n=r(47526),i=r(56538),d=r(61720),c=r(66301),p=r(31292),u=r(64370),m=r(33987),h=r(21351),y=r(8411),x=r(38919),f=r(49643),g=r(15583),j=r(38757),b=r(76320),S=r(48101),C=r(42738),w={root:"m_1f271cf7",container:"m_cf06f58c"};let A={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1,withTooltip:!1,withDots:!1,tooltipAnimationDuration:0},R=(0,m.V)((a,{gridColor:e,textColor:r})=>({root:{"--chart-grid-color":e?(0,h.r)(e,a):void 0,"--chart-text-color":r?(0,h.r)(r,a):void 0}})),v=(0,y.P9)((a,e)=>{let r=(0,x.Y)("RadarChart",A,a),{classNames:m,className:y,style:v,styles:P,unstyled:N,vars:_,data:k,series:F,dataKey:J,gridColor:V,textColor:D,radarProps:K,radarChartProps:I,polarGridProps:L,polarAngleAxisProps:T,polarRadiusAxisProps:Y,tooltipProps:O,withPolarGrid:E,withPolarAngleAxis:G,withPolarRadiusAxis:B,withTooltip:H,tooltipAnimationDuration:U,children:$,withLegend:Z,withDots:M,dotProps:W,activeDotProps:X,legendProps:z,attributes:q,...Q}=r,aa=(0,f.xd)(),ae=(0,g.I)({name:"RadarChart",classes:w,props:r,className:y,style:v,classNames:m,styles:P,unstyled:N,attributes:q,vars:_,varsResolver:R}),[ar,at]=(0,o.useState)(null),{resolvedClassNames:ao,resolvedStyles:as}=(0,j.Y)({classNames:m,styles:P,props:r}),al=F.map((a,e)=>(0,t.jsx)(s.V,{name:a.name,dataKey:a.name,stroke:(0,h.r)(a.strokeColor||a.color,aa),fill:(0,h.r)(a.color,aa),fillOpacity:ar?ar===a.name?a.opacity||.4:.05:a.opacity||.4,dot:!!M&&{fillOpacity:1,strokeOpacity:0,strokeWidth:1,fill:(0,h.r)(a.color,aa),stroke:(0,h.r)(a.color,aa),...W},activeDot:!!M&&{fill:(0,h.r)(a.color,aa),stroke:(0,h.r)(a.color,aa),...X},strokeOpacity:ar?ar===a.name?1:.1:1,isAnimationActive:!1,..."function"==typeof K?K(a):K},e));return(0,t.jsx)(b.a,{ref:e,...ae("root"),...Q,children:(0,t.jsx)(l.u,{...ae("container"),children:(0,t.jsxs)(n.V,{data:k,...I,children:[E&&(0,t.jsx)(i.z,{stroke:"var(--chart-grid-color)",...L}),G&&(0,t.jsx)(d.r,{dataKey:J,...T}),B&&(0,t.jsx)(c.E,{stroke:"var(--chart-grid-color)",...Y}),H&&(0,t.jsx)(p.m,{animationDuration:U,isAnimationActive:0!==U,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1},content:({label:a,payload:e})=>(0,t.jsx)(C.I,{label:a,payload:e,classNames:ao,styles:as,series:F,attributes:q}),...O}),al,Z&&(0,t.jsx)(u.s,{verticalAlign:"bottom",content:a=>(0,t.jsx)(S._,{payload:a.payload,onHighlight:at,legendPosition:z?.verticalAlign||"bottom",classNames:ao,styles:as,series:F,centered:!0,attributes:q}),...z}),$]})})})});v.displayName="@mantine/charts/RadarChart",v.classes=w}},a=>{a.O(0,[29040,70330,89019,38547,90636,46593,38792],()=>a(a.s=42667)),_N_E=a.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61049],{86099:(a,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radar-chart",function(){return r(15772)}])},15772:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g});var t=r(31085),o=r(71184),s=r(71521),n=r(72048);let l={type:"code",component:function(){return(0,t.jsx)(s.V,{h:300,data:n.p,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]};var i=r(90658);let d={type:"configurator",component:function(a){return(0,t.jsx)(s.V,{h:300,data:n.p,dataKey:"product",series:[{name:"sales",color:a.color,strokeColor:a.strokeColor}],...a})},code:[{code:a=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},c={type:"configurator",component:function(a){return(0,t.jsx)(s.V,{h:300,data:n.Cx,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...a})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.HY,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null}]},p={type:"code",component:function(){return(0,t.jsx)(s.V,{h:300,data:n.Cx,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:a=>`${a}$`},series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.HY,language:"tsx",fileName:"data.ts"}]};var u=r(47965),h=r(85954),m=r(38215);let y=(0,h.P)(m.XZ.RadarChart);function x(a){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...a.components},{Demo:r}=e;return r||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadarChart"})," is based on recharts ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component:"]}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(e.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,t.jsx)(e.p,{children:"You can display multiple series on the same radar chart:"}),"\n",(0,t.jsx)(r,{data:i.l}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference colors from ",(0,t.jsx)(e.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(e.code,{children:"blue"}),", ",(0,t.jsx)(e.code,{children:"red.5"}),", ",(0,t.jsx)(e.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(e.h2,{id:"hideshow-chart-parts",children:"Hide/show chart parts"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"recharts-props",children:"Recharts props"}),"\n",(0,t.jsx)(e.p,{children:"To pass props down to the underlying recharts components, use the following props:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"radarChartProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarGridProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarGrid",children:"PolarGrid"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarAngleAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarAngleAxis",children:"PolarAngleAxis"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarRadiusAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Example of passing props down to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component:"]}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(e.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"withLegend"})," prop to display the legend:"]}),"\n",(0,t.jsx)(r,{data:u.o})]})}function g(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(y,{...a,children:(0,t.jsx)(x,{...a})})}},47965:(a,e,r)=>{"use strict";r.d(e,{o:()=>n});var t=r(31085),o=r(71521),s=r(72048);let n={type:"code",component:function(){return(0,t.jsx)(o.V,{h:300,data:s.Cx,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.HY,language:"tsx",fileName:"data.ts"}]}},90658:(a,e,r)=>{"use strict";r.d(e,{l:()=>n});var t=r(31085),o=r(71521),s=r(72048);let n={type:"code",component:function(){return(0,t.jsx)(o.V,{h:300,data:s.Cx,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.HY,language:"tsx",fileName:"data.ts"}]}},72048:(a,e,r)=>{"use strict";r.d(e,{Cx:()=>s,HY:()=>n,kZ:()=>o,p:()=>t});let t=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],o=`
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
`,s=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],n=`
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
];`},50571:(a,e,r)=>{"use strict";r.d(e,{_:()=>u});var t=r(31085),o=r(6754),s=r(29686),n=r(69564),l=r(14318),i=r(34056),d=r(88500),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let p={},u=(0,o.P9)((a,e)=>{let r=(0,s.Y)("ChartLegend",p,a),{classNames:o,className:u,style:h,styles:m,unstyled:y,vars:x,payload:g,onHighlight:f,legendPosition:j,mod:S,series:b,showColor:C,centered:R,...A}=r,P=(0,n.I)({name:"ChartLegend",classes:c,props:r,className:u,style:h,classNames:o,styles:m,unstyled:y});if(!g)return null;let w=g.filter(a=>"none"!==a.color).map(a=>{let e=a.dataKey?.split(".").pop();return{...a,dataKey:e,payload:{...a.payload,name:e,dataKey:e}}}),v=(0,d.J)(b),F=w.map((a,e)=>(0,t.jsxs)("div",{...P("legendItem"),onMouseEnter:()=>f(a.dataKey),onMouseLeave:()=>f(null),"data-without-color":!1===C||void 0,children:[(0,t.jsx)(l.q,{color:a.color,size:12,...P("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...P("legendItemName"),children:v[a.dataKey]||a.dataKey})]},e));return(0,t.jsx)(i.a,{ref:e,mod:[{position:j,centered:R},S],...P("legend"),...A,children:F})});u.displayName="@mantine/charts/ChartLegend"},71521:(a,e,r)=>{"use strict";r.d(e,{V:()=>A});var t=r(31085),o=r(14041),s=r(80296),n=r(79874),l=r(6962),i=r(23072),d=r(37392),c=r(76683),p=r(23361),u=r(7098),h=r(51606),m=r(6754),y=r(29686),x=r(92408),g=r(69564),f=r(36456),j=r(34056),S=r(50571),b={root:"m_1f271cf7",container:"m_cf06f58c"};let C={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},R=(0,u.V)((a,{gridColor:e,textColor:r})=>({root:{"--chart-grid-color":e?(0,h.r)(e,a):void 0,"--chart-text-color":r?(0,h.r)(r,a):void 0}})),A=(0,m.P9)((a,e)=>{let r=(0,y.Y)("RadarChart",C,a),{classNames:u,className:m,style:A,styles:P,unstyled:w,vars:v,data:F,series:J,dataKey:N,gridColor:k,textColor:V,radarProps:_,radarChartProps:K,polarGridProps:D,polarAngleAxisProps:L,polarRadiusAxisProps:E,withPolarGrid:Y,withPolarAngleAxis:G,withPolarRadiusAxis:I,children:O,withLegend:H,legendProps:T,...U}=r,$=(0,x.xd)(),B=(0,g.I)({name:"RadarChart",classes:b,props:r,className:m,style:A,classNames:u,styles:P,unstyled:w,vars:v,varsResolver:R}),[Z,M]=(0,o.useState)(null),{resolvedClassNames:X,resolvedStyles:z}=(0,f.Y)({classNames:u,styles:P,props:r}),q=J.map((a,e)=>(0,t.jsx)(s.V,{name:a.name,dataKey:a.name,stroke:(0,h.r)(a.strokeColor||a.color,$),fill:(0,h.r)(a.color,$),fillOpacity:Z?Z===a.name?a.opacity||.4:.05:a.opacity||.4,strokeOpacity:Z?Z===a.name?1:.1:1,isAnimationActive:!1,..."function"==typeof _?_(a):_},e));return(0,t.jsx)(j.a,{ref:e,...B("root"),...U,children:(0,t.jsx)(n.u,{...B("container"),children:(0,t.jsxs)(l.V,{data:F,...K,children:[Y&&(0,t.jsx)(i.z,{stroke:"var(--chart-grid-color)",...D}),G&&(0,t.jsx)(d.r,{dataKey:N,...L}),I&&(0,t.jsx)(c.E,{stroke:"var(--chart-grid-color)",...E}),q,H&&(0,t.jsx)(p.s,{verticalAlign:"bottom",content:a=>(0,t.jsx)(S._,{payload:a.payload,onHighlight:M,legendPosition:T?.verticalAlign||"bottom",classNames:X,styles:z,series:J,centered:!0}),...T}),O]})})})});A.displayName="@mantine/charts/RadarChart",A.classes=b},88500:(a,e,r)=>{"use strict";function t(a){return a?a.reduce((a,e)=>{let r=e.name.search(/\./);return r>=0?a[e.name.substring(r+1)]=e.label:a[e.name]=e.label,a},{}):{}}r.d(e,{J:()=>t})}},a=>{var e=e=>a(a.s=e);a.O(0,[67456,53417,46828,22905,39699,68831,90636,46593,38792],()=>e(86099)),_N_E=a.O()}]);
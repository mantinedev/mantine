(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79256],{58322:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radar-chart",function(){return r(58006)}])},58006:function(a,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var t=r(52322),o=r(45392),n=r(22309),s=r(47550);let l={type:"code",component:function(){return(0,t.jsx)(n.H,{h:300,data:s.aT,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]};var i=r(21988);let c={type:"configurator",component:function(a){return(0,t.jsx)(n.H,{h:300,data:s.aT,dataKey:"product",series:[{name:"sales",color:a.color,strokeColor:a.strokeColor}],...a})},code:[{code:a=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},d={type:"configurator",component:function(a){return(0,t.jsx)(n.H,{h:300,data:s.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}],...a})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.gv,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null}]},u={type:"code",component:function(){return(0,t.jsx)(n.H,{h:300,data:s.qH,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:a=>`${a}$`},series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.gv,language:"tsx",fileName:"data.ts"}]};var p=r(75394),h=r(25071),m=r(15019);let y=(0,h.A)(m.us.RadarChart);function x(a){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...a.components},{Demo:r}=e;return r||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadarChart"})," is based on recharts ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component:"]}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(e.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,t.jsx)(e.p,{children:"You can display multiple series on the same radar chart:"}),"\n",(0,t.jsx)(r,{data:i.m}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference colors from ",(0,t.jsx)(e.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(e.code,{children:"blue"}),", ",(0,t.jsx)(e.code,{children:"red.5"}),", ",(0,t.jsx)(e.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"hideshow-chart-parts",children:"Hide/show chart parts"}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(e.h2,{id:"recharts-props",children:"Recharts props"}),"\n",(0,t.jsx)(e.p,{children:"To pass props down to the underlying recharts components, use the following props:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"radarChartProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarGridProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarGrid",children:"PolarGrid"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarAngleAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarAngleAxis",children:"PolarAngleAxis"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarRadiusAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Example of passing props down to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component:"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(e.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"withLegend"})," prop to display the legend:"]}),"\n",(0,t.jsx)(r,{data:p.j})]})}function f(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(y,{...a,children:(0,t.jsx)(x,{...a})})}},75394:function(a,e,r){"use strict";r.d(e,{j:function(){return s}});var t=r(52322),o=r(22309),n=r(47550);let s={type:"code",component:function(){return(0,t.jsx)(o.H,{h:300,data:n.qH,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.gv,language:"tsx",fileName:"data.ts"}]}},21988:function(a,e,r){"use strict";r.d(e,{m:function(){return s}});var t=r(52322),o=r(22309),n=r(47550);let s={type:"code",component:function(){return(0,t.jsx)(o.H,{h:300,data:n.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(a,e,r){"use strict";r.d(e,{aT:function(){return t},gv:function(){return s},op:function(){return o},qH:function(){return n}});let t=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],o=`
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
`,n=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],s=`
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
];`},46293:function(a,e,r){"use strict";r.d(e,{Q:function(){return p}});var t=r(52322),o=r(82027),n=r(38483),s=r(46690),l=r(27009),i=r(28559),c=r(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let u={},p=(0,o.d)((a,e)=>{let r=(0,n.w)("ChartLegend",u,a),{classNames:o,className:p,style:h,styles:m,unstyled:y,vars:x,payload:f,onHighlight:g,legendPosition:j,mod:S,series:b,showColor:R,centered:A,...C}=r,w=(0,s.y)({name:"ChartLegend",classes:d,props:r,className:p,style:h,classNames:o,styles:m,unstyled:y});if(!f)return null;let P=f.filter(a=>"none"!==a.color),v=(0,c.v)(b),F=P.map((a,e)=>(0,t.jsxs)("div",{...w("legendItem"),onMouseEnter:()=>g(a.dataKey),onMouseLeave:()=>g(null),"data-without-color":!1===R||void 0,children:[(0,t.jsx)(l.b,{color:a.color,size:12,...w("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...w("legendItemName"),children:v[a.dataKey]||a.dataKey})]},e));return(0,t.jsx)(i.x,{ref:e,mod:[{position:j,centered:A},S],...w("legend"),...C,children:F})});p.displayName="@mantine/charts/ChartLegend"},22309:function(a,e,r){"use strict";r.d(e,{H:function(){return C}});var t=r(52322),o=r(2784),n=r(53891),s=r(18205),l=r(62411),i=r(25076),c=r(79669),d=r(10086),u=r(55734),p=r(11200),h=r(13588),m=r(82027),y=r(38483),x=r(68755),f=r(46690),g=r(51477),j=r(28559),S=r(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let R={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},A=(0,p.Z)((a,{gridColor:e,textColor:r})=>({root:{"--chart-grid-color":e?(0,h.p)(e,a):void 0,"--chart-text-color":r?(0,h.p)(r,a):void 0}})),C=(0,m.d)((a,e)=>{let r=(0,y.w)("RadarChart",R,a),{classNames:p,className:m,style:C,styles:w,unstyled:P,vars:v,data:F,series:N,dataKey:J,gridColor:_,textColor:k,radarProps:K,radarChartProps:H,polarGridProps:D,polarAngleAxisProps:L,polarRadiusAxisProps:T,withPolarGrid:V,withPolarAngleAxis:E,withPolarRadiusAxis:G,children:O,withLegend:I,legendProps:U,...$}=r,q=(0,x.rZ)(),B=(0,f.y)({name:"RadarChart",classes:b,props:r,className:m,style:C,classNames:p,styles:w,unstyled:P,vars:v,varsResolver:A}),[M,Q]=(0,o.useState)(null),{resolvedClassNames:X,resolvedStyles:Y}=(0,g.h)({classNames:p,styles:w,props:r}),Z=N.map((a,e)=>(0,t.jsx)(n.F,{name:a.name,dataKey:a.name,stroke:(0,h.p)(a.strokeColor||a.color,q),fill:(0,h.p)(a.color,q),fillOpacity:M?M===a.name?a.opacity||.4:.05:a.opacity||.4,strokeOpacity:M?M===a.name?1:.1:1,isAnimationActive:!1,..."function"==typeof K?K(a):K},e));return(0,t.jsx)(j.x,{ref:e,...B("root"),...$,children:(0,t.jsx)(s.h,{...B("container"),children:(0,t.jsxs)(l.H,{data:F,...H,children:[V&&(0,t.jsx)(i.n,{stroke:"var(--chart-grid-color)",...D}),E&&(0,t.jsx)(c.I,{dataKey:J,...L}),G&&(0,t.jsx)(d.S,{stroke:"var(--chart-grid-color)",...T}),Z,I&&(0,t.jsx)(u.D,{verticalAlign:"bottom",content:a=>(0,t.jsx)(S.Q,{payload:a.payload,onHighlight:Q,legendPosition:U?.verticalAlign||"bottom",classNames:X,styles:Y,series:N,centered:!0}),...U}),O]})})})});C.displayName="@mantine/charts/RadarChart",C.classes=b},64438:function(a,e,r){"use strict";function t(a){return a?a.reduce((a,e)=>(a[e.name]=e.label,a),{}):{}}r.d(e,{v:function(){return t}})}},function(a){a.O(0,[61177,16717,59966,37355,66748,11340,92888,49774,40179],function(){return a(a.s=58322)}),_N_E=a.O()}]);
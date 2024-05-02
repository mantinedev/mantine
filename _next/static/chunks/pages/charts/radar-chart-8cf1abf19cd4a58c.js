(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79256],{58322:function(a,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radar-chart",function(){return e(58006)}])},58006:function(a,r,e){"use strict";e.r(r),e.d(r,{default:function(){return g}});var o=e(52322),s=e(45392),t=e(22309),n=e(47550);let l=`
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
`,i={type:"code",component:function(){return(0,o.jsx)(t.H,{h:300,data:n.aT,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]};var c=e(21988);let d={type:"configurator",component:function(a){return(0,o.jsx)(t.H,{h:300,data:n.aT,dataKey:"product",series:[{name:"sales",color:a.color,strokeColor:a.strokeColor}],...a})},code:[{code:a=>`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},p=`
import { RadarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`,u={type:"configurator",component:function(a){return(0,o.jsx)(t.H,{h:300,data:n.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}],...a})},code:[{code:p,language:"tsx",fileName:"Demo.tsx"},{code:n.gv,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null}]},h=`
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
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,m={type:"code",component:function(){return(0,o.jsx)(t.H,{h:300,data:n.qH,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:a=>`${a}$`},series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}]})},code:[{code:h,language:"tsx",fileName:"Demo.tsx"},{code:n.gv,language:"tsx",fileName:"data.ts"}]};var f=e(79016),x=e(33638);let y=(0,f.A)(x.us.RadarChart);function j(a){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...a.components},{Demo:e}=r;return e||function(a,r){throw Error("Expected "+(r?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"RadarChart"})," is based on recharts ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component:"]}),"\n",(0,o.jsx)(e,{data:i}),"\n",(0,o.jsx)(r.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,o.jsx)(r.p,{children:"You can display multiple series on the same radar chart:"}),"\n",(0,o.jsx)(e,{data:c.m}),"\n",(0,o.jsx)(r.h2,{id:"change-color",children:"Change color"}),"\n",(0,o.jsxs)(r.p,{children:["You can reference colors from ",(0,o.jsx)(r.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(r.code,{children:"blue"}),", ",(0,o.jsx)(r.code,{children:"red.5"}),", ",(0,o.jsx)(r.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(e,{data:d}),"\n",(0,o.jsx)(r.h2,{id:"hideshow-chart-parts",children:"Hide/show chart parts"}),"\n",(0,o.jsx)(e,{data:u}),"\n",(0,o.jsx)(r.h2,{id:"recharts-props",children:"Recharts props"}),"\n",(0,o.jsx)(r.p,{children:"To pass props down to the underlying recharts components, use the following props:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"radarChartProps"})," passed props to ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"polarGridProps"})," passed props to ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/PolarGrid",children:"PolarGrid"})," component"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"polarAngleAxisProps"})," passed props to ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/PolarAngleAxis",children:"PolarAngleAxis"})," component"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"polarRadiusAxisProps"})," passed props to ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Example of passing props down to ",(0,o.jsx)(r.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component:"]}),"\n",(0,o.jsx)(e,{data:m})]})}function g(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...a,children:(0,o.jsx)(j,{...a})})}},21988:function(a,r,e){"use strict";e.d(r,{m:function(){return l}});var o=e(52322),s=e(22309),t=e(47550);let n=`
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
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,l={type:"code",component:function(){return(0,o.jsx)(s.H,{h:300,data:t.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}]})},code:[{code:n,language:"tsx",fileName:"Demo.tsx"},{code:t.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(a,r,e){"use strict";e.d(r,{aT:function(){return o},gv:function(){return n},op:function(){return s},qH:function(){return t}});let o=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],s=`
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
`,t=[{product:"Apples",sales_january:120,sales_february:100},{product:"Oranges",sales_january:98,sales_february:90},{product:"Tomatoes",sales_january:86,sales_february:70},{product:"Grapes",sales_january:99,sales_february:80},{product:"Bananas",sales_january:85,sales_february:120},{product:"Lemons",sales_january:65,sales_february:150}],n=`
export const data = [
  {
    product: 'Apples',
    sales_january: 120,
    sales_february: 100,
  },
  {
    product: 'Oranges',
    sales_january: 98,
    sales_february: 90,
  },
  {
    product: 'Tomatoes',
    sales_january: 86,
    sales_february: 70,
  },
  {
    product: 'Grapes',
    sales_january: 99,
    sales_february: 80,
  },
  {
    product: 'Bananas',
    sales_january: 85,
    sales_february: 120,
  },
  {
    product: 'Lemons',
    sales_january: 65,
    sales_february: 150,
  },
];`},22309:function(a,r,e){"use strict";e.d(r,{H:function(){return _}});var o=e(52322),s=e(53891),t=e(18205),n=e(62411),l=e(25076),i=e(79669),c=e(10086),d=e(11200),p=e(13588),u=e(82027),h=e(38483),m=e(68755),f=e(46690),x=e(28559),y={root:"m_1f271cf7",container:"m_cf06f58c"};let j={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},g=(0,d.Z)((a,{gridColor:r,textColor:e})=>({root:{"--chart-grid-color":r?(0,p.p)(r,a):void 0,"--chart-text-color":e?(0,p.p)(e,a):void 0}})),_=(0,u.d)((a,r)=>{let e=(0,h.w)("RadarChart",j,a),{classNames:d,className:u,style:_,styles:b,unstyled:R,vars:A,data:C,series:P,dataKey:w,gridColor:v,textColor:k,radarProps:N,radarChartProps:H,polarGridProps:D,polarAngleAxisProps:K,polarRadiusAxisProps:T,withPolarGrid:V,withPolarAngleAxis:G,withPolarRadiusAxis:S,children:E,...O}=e,U=(0,m.rZ)(),$=(0,f.y)({name:"RadarChart",classes:y,props:e,className:u,style:_,classNames:d,styles:b,unstyled:R,vars:A,varsResolver:g}),q=P.map((a,r)=>(0,o.jsx)(s.F,{name:a.name,dataKey:a.name,stroke:(0,p.p)(a.strokeColor||a.color,U),fill:(0,p.p)(a.color,U),fillOpacity:a.opacity||.4,isAnimationActive:!1,..."function"==typeof N?N(a):N},r));return(0,o.jsx)(x.x,{ref:r,...$("root"),...O,children:(0,o.jsx)(t.h,{...$("container"),children:(0,o.jsxs)(n.H,{data:C,...H,children:[V&&(0,o.jsx)(l.n,{stroke:"var(--chart-grid-color)",...D}),G&&(0,o.jsx)(i.I,{dataKey:w,...K}),S&&(0,o.jsx)(c.S,{stroke:"var(--chart-grid-color)",...T}),q,E]})})})});_.displayName="@mantine/charts/RadarChart",_.classes=y}},function(a){a.O(0,[57938,16717,59966,37355,17454,47747,49774,92888,40179],function(){return a(a.s=58322)}),_N_E=a.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71972],{66385:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-11-0",function(){return a(65261)}])},65261:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(31085),n=a(71184),o=a(85569),s=a(22845),i=a(53870),l=a(31796),d=a(75892),c=a(47965),p=a(3573),u=a(73023),h=a(18675),m=a(20017);let x=(0,h.P)(m.XZ.Changelog7110);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components now have ",(0,r.jsx)(t.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"avatar-initials",children:"Avatar initials"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/avatar",children:"Avatar"})," component now supports displaying initials with auto generated color based on the given ",(0,r.jsx)(t.code,{children:"name"})," value.\nTo display initials instead of the default placeholder, set ",(0,r.jsx)(t.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,r.jsx)(t.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,r.jsx)(t.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,r.jsx)(a,{data:o.y}),"\n",(0,r.jsx)(t.h2,{id:"bubblechart-component",children:"BubbleChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/bubble-chart",children:"BubbleChart"})," component:"]}),"\n",(0,r.jsx)(a,{data:s.C}),"\n",(0,r.jsx)(t.h2,{id:"barchart-waterfall-type",children:"BarChart waterfall type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,r.jsx)(t.code,{children:"waterfall"})," type\nwhich is useful for visualizing changes in values over time:"]}),"\n",(0,r.jsx)(a,{data:i.Z}),"\n",(0,r.jsx)(t.h2,{id:"linechart-gradient-type",children:"LineChart gradient type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," component now supports ",(0,r.jsx)(t.code,{children:"gradient"})," type\nwhich renders line chart with gradient fill:"]}),"\n",(0,r.jsx)(a,{data:l.D}),"\n",(0,r.jsx)(t.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," components\nnow support ",(0,r.jsx)(t.code,{children:"rightYAxis"})," prop which renders additional Y axis on the right side of the chart:"]}),"\n",(0,r.jsx)(a,{data:d.H}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-legend",children:"RadarChart legend"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/radar-chart",children:"RadarChart"})," component now supports legend:"]}),"\n",(0,r.jsx)(a,{data:c.o}),"\n",(0,r.jsx)(t.h2,{id:"tagsinput-acceptvalueonblur",children:"TagsInput acceptValueOnBlur"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," component behavior has been changed. Now By default,\nif the user types in a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"acceptValueOnBlur"})," to ",(0,r.jsx)(t.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,r.jsx)(t.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,r.jsx)(a,{data:p.q}),"\n",(0,r.jsx)(t.h2,{id:"transition-delay",children:"Transition delay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports ",(0,r.jsx)(t.code,{children:"enterDelay"})," and ",(0,r.jsx)(t.code,{children:"exitDelay"})," props to delay transition start:"]}),"\n",(0,r.jsx)(a,{data:u.c}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/core/progress/#example-progress-with-segments",children:"segmented progress"})," example has been added to ",(0,r.jsx)(t.code,{children:"Progress"})," component documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," components documentation now includes additional demo on how to change the dropdown width"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/dates/date-picker/#exclude-dates",children:"DatePicker"})," example for ",(0,r.jsx)(t.code,{children:"excludeDate"})," prop"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,r.jsx)(t.code,{children:"hideWithOnePage"})," prop which hides pagination when there is only one page"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/spoiler",children:"Spoiler"})," component now supports controlled expanded state with ",(0,r.jsx)(t.code,{children:"expanded"})," and ",(0,r.jsx)(t.code,{children:"onExpandedChange"})," props"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/burger",children:"Burger"})," component now supports ",(0,r.jsx)(t.code,{children:"lineSize"})," prop to change lines height"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/dates/calendar",children:"Calendar"}),", ",(0,r.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other similar components now support ",(0,r.jsx)(t.code,{children:"highlightToday"})," prop to highlight today's date"]}),"\n"]})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,{...e,children:(0,r.jsx)(f,{...e})})}},46421:(e,t,a)=>{"use strict";a.d(t,{E:()=>l});var r=a(10626),n=a(48094),o=a(98331),s=a(51492),i=a(14713),l=(0,r.gu)({chartName:"BarChart",GraphicalChild:n.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:s.h}],formatAxisMap:i.pr})},65344:(e,t,a)=>{"use strict";a.d(t,{t:()=>d});var r=a(10626),n=a(69928),o=a(98331),s=a(51492),i=a(1693),l=a(14713),d=(0,r.gu)({chartName:"ScatterChart",GraphicalChild:n.X,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:s.h},{axisType:"zAxis",AxisComp:i.K}],formatAxisMap:l.pr})},53870:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(31085),n=a(40702),o=a(79301);let s={type:"code",component:function(){return(0,r.jsx)(n.E,{h:300,data:o.VY,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.Kk,language:"tsx",fileName:"data.ts"}]}},22845:(e,t,a)=>{"use strict";a.d(t,{C:()=>s});var r=a(31085),n=a(68262),o=a(89110);let s={type:"code",component:function(){return(0,r.jsx)(n.$,{h:60,data:o.p,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.k,language:"tsx",fileName:"data.ts"}]}},89110:(e,t,a)=>{"use strict";a.d(t,{k:()=>n,p:()=>r});let r=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],n=`
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
`},31796:(e,t,a)=>{"use strict";a.d(t,{D:()=>s});var r=a(31085),n=a(14080),o=a(83562);let s={type:"code",component:function(){return(0,r.jsx)(n.b,{h:300,data:o.AQ,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => \`\${value}\xb0C\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.t3,language:"tsx",fileName:"data.ts"}]}},75892:(e,t,a)=>{"use strict";a.d(t,{H:()=>s});var r=a(31085),n=a(14080),o=a(83562);let s={type:"code",component:function(){return(0,r.jsx)(n.b,{h:300,data:o.d8,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.EJ,language:"tsx",fileName:"data.ts"}]}},83562:(e,t,a)=>{"use strict";a.d(t,{AQ:()=>d,EJ:()=>u,d8:()=>p,dX:()=>l,kD:()=>s,kZ:()=>n,p:()=>r,sC:()=>i,t3:()=>c,v1:()=>o});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],n=`
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
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],s=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
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
`,d=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],c=`
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
`,p=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],u=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},47965:(e,t,a)=>{"use strict";a.d(t,{o:()=>s});var r=a(31085),n=a(71521),o=a(72048);let s={type:"code",component:function(){return(0,r.jsx)(n.V,{h:300,data:o.Cx,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.HY,language:"tsx",fileName:"data.ts"}]}},72048:(e,t,a)=>{"use strict";a.d(t,{Cx:()=>o,HY:()=>s,kZ:()=>n,p:()=>r});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],n=`
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
`,o=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],s=`
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
];`},85569:(e,t,a)=>{"use strict";a.d(t,{y:()=>i});var r=a(31085),n=a(86658),o=a(56051),s=a(51815);let i={type:"code",component:function(){let e=s.Dy.map(e=>(0,r.jsx)(n.e,{name:e,color:"initials"},e));return(0,r.jsx)(o.Y,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${s.SD}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},51815:(e,t,a)=>{"use strict";a.d(t,{Dy:()=>n,HD:()=>r,SD:()=>o});let r=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],n=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},3573:(e,t,a)=>{"use strict";a.d(t,{q:()=>o});var r=a(31085),n=a(66732);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.u,{label:"Value IS accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!0}),(0,r.jsx)(n.u,{label:"Value IS NOT accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!1,mt:"md"})]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},73023:(e,t,a)=>{"use strict";a.d(t,{c:()=>d});var r=a(31085),n=a(14041),o=a(69919),s=a(52022),i=a(98523),l=a(58120);let d={type:"code",code:`
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}`,component:function(){let[e,t]=(0,n.useState)(!1);return(0,r.jsxs)(o.s,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,r.jsx)(s.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,r.jsx)(i.e,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,r.jsx)(l.t,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},68262:(e,t,a)=>{"use strict";a.d(t,{$:()=>w});var r=a(31085),n=a(79874),o=a(65344),s=a(98331),i=a(51492),l=a(1693),d=a(37662),c=a(69928),p=a(56051),u=a(93065),h=a(7098),m=a(51606),x=a(6754),f=a(29686),g=a(92408),y=a(69564),v=a(34056),j=a(94563);function A({active:e,payload:t,getStyles:a,dataKey:n,valueFormatter:o}){if(e&&t&&t.length){let e=t[0]&&t[0].payload;return(0,r.jsx)("div",{...a("tooltip"),children:(0,r.jsxs)(p.Y,{justify:"space-between",children:[(0,r.jsx)(u.E,{fz:"sm",children:e[n.x]}),(0,r.jsx)(u.E,{fz:"sm",children:o?o(e[n.z]):e[n.z]})]})})}return null}let b={color:"blue.6",withTooltip:!0},C=(0,h.V)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,m.r)(t,e):void 0,"--chart-grid-color":a?(0,m.r)(a,e):void 0}})),w=(0,x.P9)((e,t)=>{let a=(0,f.Y)("BubbleChart",b,e),{classNames:p,className:u,style:h,styles:x,unstyled:w,vars:k,data:S,xAxisProps:M,yAxisProps:T,zAxisProps:D,tooltipProps:P,scatterProps:L,color:O,label:B,withTooltip:I,dataKey:N,range:J,valueFormatter:E,attributes:F,...z}=a,Y=(0,g.xd)(),G=(0,y.I)({name:"BubbleChart",classes:j.A,props:a,className:u,style:h,classNames:p,styles:x,unstyled:w,attributes:F,vars:k,varsResolver:C});return(0,r.jsx)(v.a,{ref:t,...G("root"),...z,children:(0,r.jsx)(n.u,{children:(0,r.jsxs)(o.t,{children:[(0,r.jsx)(s.W,{type:"category",dataKey:N.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...G("axis"),...M}),(0,r.jsx)(i.h,{type:"number",dataKey:N.y,height:10,...B?void 0:{width:0},tick:!1,tickLine:!1,axisLine:!1,label:{value:B,position:"insideRight",fontSize:12,fill:"currentColor"},...G("axis"),...T}),(0,r.jsx)(l.K,{type:"number",dataKey:N.z,domain:function(e,t){let a=e.map(e=>e[t]);return[Math.min(...a),Math.max(...a)]}(S,N.z),range:J,...D}),I&&(0,r.jsx)(d.m,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,r.jsx)(A,{dataKey:N,active:e.active,payload:e.payload,getStyles:G,valueFormatter:E}),...P}),(0,r.jsx)(c.X,{data:S,fill:(0,m.r)(O,Y),isAnimationActive:!1,...L})]})})})});w.displayName="@mantine/charts/BubbleChart",w.classes=j.A},14080:(e,t,a)=>{"use strict";a.d(t,{b:()=>O});var r=a(31085),n=a(14041),o=a(64174),s=a(67393),i=a(79874),l=a(10626),d=a(98331),c=a(51492),p=a(14713),u=(0,l.gu)({chartName:"LineChart",GraphicalChild:o.N,axisComponents:[{axisType:"xAxis",AxisComp:d.W},{axisType:"yAxis",AxisComp:c.h}],formatAxisMap:p.pr}),h=a(23361),m=a(94437),x=a(12012),f=a(37662),g=a(7098),y=a(51606),v=a(6754),j=a(29686),A=a(92408),b=a(36456),C=a(69564),w=a(34056),k=a(97567),S=a(50571),M=a(93581),T=a(6804),D=a(94563);let P={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},L=(0,g.V)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,y.r)(t,e):void 0,"--chart-grid-color":a?(0,y.r)(a,e):void 0}})),O=(0,v.P9)((e,t)=>{let a=(0,j.Y)("LineChart",P,e),{classNames:l,className:p,style:g,styles:v,unstyled:O,vars:B,data:I,withLegend:N,legendProps:J,series:E,onMouseLeave:F,dataKey:z,withTooltip:Y,withXAxis:G,withYAxis:R,gridAxis:K,tickLine:_,xAxisProps:V,yAxisProps:W,unit:$,tooltipAnimationDuration:Z,strokeDasharray:X,gridProps:H,tooltipProps:q,referenceLines:Q,withDots:U,dotProps:ee,activeDotProps:et,strokeWidth:ea,lineChartProps:er,connectNulls:en,fillOpacity:eo,curveType:es,orientation:ei,dir:el,valueFormatter:ed,children:ec,lineProps:ep,xAxisLabel:eu,yAxisLabel:eh,type:em,gradientStops:ex,withRightYAxis:ef,rightYAxisLabel:eg,rightYAxisProps:ey,withPointLabels:ev,attributes:ej,gridColor:eA,...eb}=a,eC=(0,A.xd)(),[ew,ek]=(0,n.useState)(null),eS=null!==ew,{resolvedClassNames:eM,resolvedStyles:eT}=(0,b.Y)({classNames:l,styles:v,props:a}),eD=(0,C.I)({name:"LineChart",classes:D.A,props:a,className:p,style:g,classNames:l,styles:v,unstyled:O,attributes:ej,vars:B,varsResolver:L}),eP=(0,k.B)(),eL=`line-chart-gradient-${eP}`,eO=ex?.map(e=>r.jsx("stop",{offset:`${e.offset}%`,stopColor:y.r(e.color,eC)},e.color)),eB=E.map(e=>{let t=(0,y.r)(e.color,eC),a=eS&&ew!==e.name;return(0,n.createElement)(o.N,{...eD("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!U&&{fillOpacity:a?0:1,strokeOpacity:a?0:1,strokeWidth:1,fill:"gradient"===em?"var(--mantine-color-gray-7)":t,stroke:"gradient"===em?"white":t,...ee},activeDot:!!U&&{fill:"gradient"===em?"var(--mantine-color-gray-7)":t,stroke:"gradient"===em?"white":t,...et},fill:t,stroke:"gradient"===em?`url(#${eL})`:t,strokeWidth:ea,isAnimationActive:!1,fillOpacity:a?0:eo,strokeOpacity:a?.5:eo,connectNulls:en,type:es,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ev?(0,r.jsx)(T.x,{valueFormatter:ed}):void 0,..."function"==typeof ep?ep(e):ep})}),eI=Q?.map((e,t)=>{let a=y.r(e.color,eC);return r.jsx(s.e,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eD("referenceLine")},t)}),eN={axisLine:!1,..."vertical"===ei?{dataKey:z,type:"category"}:{type:"number"},tickLine:!!("none"!==K&&("y"===_||"xy"===_))&&{stroke:"currentColor"},allowDecimals:!0,unit:$,tickFormatter:"vertical"===ei?void 0:ed,...eD("axis")};return(0,r.jsx)(w.a,{ref:t,...eD("root"),onMouseLeave:e=>{ek(null),F?.(e)},dir:el||"ltr",...eb,children:(0,r.jsx)(i.u,{...eD("container"),children:(0,r.jsxs)(u,{data:I,layout:ei,margin:{bottom:eu?30:void 0,left:eh?10:void 0,right:eh?5:void 0},...er,children:["gradient"===em&&(0,r.jsx)("defs",{children:(0,r.jsx)("linearGradient",{id:eL,x1:"0",y1:"0",x2:"0",y2:"1",children:eO})}),N&&(0,r.jsx)(h.s,{verticalAlign:"top",content:e=>(0,r.jsx)(S._,{payload:e.payload,onHighlight:ek,legendPosition:J?.verticalAlign||"top",classNames:eM,styles:eT,series:E,showColor:"gradient"!==em,attributes:ej}),...J}),(0,r.jsxs)(d.W,{hide:!G,..."vertical"===ei?{type:"number"}:{dataKey:z},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==K&&("x"===_||"xy"===_))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ei?ed:void 0,...eD("axis"),...V,children:[eu&&(0,r.jsx)(m.J,{position:"insideBottom",offset:-20,fontSize:12,...eD("axisLabel"),children:eu}),V?.children]}),(0,r.jsxs)(c.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!R,...eN,...W,children:[eh&&(0,r.jsx)(m.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eD("axisLabel"),children:eh}),W?.children]}),(0,r.jsxs)(c.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ef,...eN,...ey,children:[eg&&(0,r.jsx)(m.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eD("axisLabel"),children:eg}),W?.children]}),(0,r.jsx)(x.d,{strokeDasharray:X,vertical:"y"===K||"xy"===K,horizontal:"x"===K||"xy"===K,...eD("grid"),...H}),Y&&(0,r.jsx)(f.m,{animationDuration:Z,isAnimationActive:0!==Z,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:X},content:({label:e,payload:t})=>(0,r.jsx)(M.I,{label:e,payload:t,unit:$,classNames:eM,styles:eT,series:E,valueFormatter:ed,showColor:"gradient"!==em,attributes:ej}),...q}),eB,eI,ec]})})})});O.displayName="@mantine/charts/LineChart",O.classes=D.A},6804:(e,t,a)=>{"use strict";a.d(t,{x:()=>n});var r=a(31085);function n({x:e,y:t,value:a,valueFormatter:n}){return(0,r.jsx)("g",{transform:`translate(${e},${t})`,children:(0,r.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:n?n(a):a})})}},71521:(e,t,a)=>{"use strict";a.d(t,{V:()=>S});var r=a(31085),n=a(14041),o=a(80296),s=a(79874),i=a(6962),l=a(23072),d=a(37392),c=a(76683),p=a(37662),u=a(23361),h=a(7098),m=a(51606),x=a(6754),f=a(29686),g=a(92408),y=a(69564),v=a(36456),j=a(34056),A=a(50571),b=a(93581),C={root:"m_1f271cf7",container:"m_cf06f58c"};let w={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1,withTooltip:!1,withDots:!1,tooltipAnimationDuration:0},k=(0,h.V)((e,{gridColor:t,textColor:a})=>({root:{"--chart-grid-color":t?(0,m.r)(t,e):void 0,"--chart-text-color":a?(0,m.r)(a,e):void 0}})),S=(0,x.P9)((e,t)=>{let a=(0,f.Y)("RadarChart",w,e),{classNames:h,className:x,style:S,styles:M,unstyled:T,vars:D,data:P,series:L,dataKey:O,gridColor:B,textColor:I,radarProps:N,radarChartProps:J,polarGridProps:E,polarAngleAxisProps:F,polarRadiusAxisProps:z,tooltipProps:Y,withPolarGrid:G,withPolarAngleAxis:R,withPolarRadiusAxis:K,withTooltip:_,tooltipAnimationDuration:V,children:W,withLegend:$,withDots:Z,dotProps:X,activeDotProps:H,legendProps:q,attributes:Q,...U}=a,ee=(0,g.xd)(),et=(0,y.I)({name:"RadarChart",classes:C,props:a,className:x,style:S,classNames:h,styles:M,unstyled:T,attributes:Q,vars:D,varsResolver:k}),[ea,er]=(0,n.useState)(null),{resolvedClassNames:en,resolvedStyles:eo}=(0,v.Y)({classNames:h,styles:M,props:a}),es=L.map((e,t)=>(0,r.jsx)(o.V,{name:e.name,dataKey:e.name,stroke:(0,m.r)(e.strokeColor||e.color,ee),fill:(0,m.r)(e.color,ee),fillOpacity:ea?ea===e.name?e.opacity||.4:.05:e.opacity||.4,dot:!!Z&&{fillOpacity:1,strokeOpacity:0,strokeWidth:1,fill:(0,m.r)(e.color,ee),stroke:(0,m.r)(e.color,ee),...X},activeDot:!!Z&&{fill:(0,m.r)(e.color,ee),stroke:(0,m.r)(e.color,ee),...H},strokeOpacity:ea?ea===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof N?N(e):N},t));return(0,r.jsx)(j.a,{ref:t,...et("root"),...U,children:(0,r.jsx)(s.u,{...et("container"),children:(0,r.jsxs)(i.V,{data:P,...J,children:[G&&(0,r.jsx)(l.z,{stroke:"var(--chart-grid-color)",...E}),R&&(0,r.jsx)(d.r,{dataKey:O,...F}),K&&(0,r.jsx)(c.E,{stroke:"var(--chart-grid-color)",...z}),_&&(0,r.jsx)(p.m,{animationDuration:V,isAnimationActive:0!==V,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1},content:({label:e,payload:t})=>(0,r.jsx)(b.I,{label:e,payload:t,classNames:en,styles:eo,series:L,attributes:Q}),...Y}),es,$&&(0,r.jsx)(u.s,{verticalAlign:"bottom",content:e=>(0,r.jsx)(A._,{payload:e.payload,onHighlight:er,legendPosition:q?.verticalAlign||"bottom",classNames:en,styles:eo,series:L,centered:!0,attributes:Q}),...q}),W]})})})});S.displayName="@mantine/charts/RadarChart",S.classes=C},86658:(e,t,a)=>{"use strict";a.d(t,{e:()=>j});var r=a(31085),n=a(14041),o=a(33450),s=a(7098),i=a(29686),l=a(69564),d=a(34056),c=a(2453),p=a(6754);let u=(0,n.createContext)(null),h=u.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let x=(0,s.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.GY)(t)}})),f=(0,p.P9)((e,t)=>{let a=(0,i.Y)("AvatarGroup",null,e),{classNames:n,className:o,style:s,styles:c,unstyled:p,vars:u,spacing:f,attributes:g,...y}=a,v=(0,l.I)({name:"AvatarGroup",classes:m,props:a,className:o,style:s,classNames:n,styles:c,unstyled:p,attributes:g,vars:u,varsResolver:x,rootSelector:"group"});return(0,r.jsx)(h,{value:!0,children:(0,r.jsx)(d.a,{ref:t,...v("group"),...y})})});function g(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}f.classes=m,f.displayName="@mantine/core/AvatarGroup";let y=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],v=(0,s.V)((e,{size:t,radius:a,variant:r,gradient:n,color:s,autoContrast:i,name:l,allowedInitialsColors:d})=>{let c="initials"===s&&"string"==typeof l?function(e,t=y){let a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length;return t[a]}(l,d):s,p=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:r||"light",autoContrast:i});return{root:{"--avatar-size":(0,o.YC)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,o.nJ)(a),"--avatar-bg":c||r?p.background:void 0,"--avatar-color":c||r?p.color:void 0,"--avatar-bd":c||r?p.border:void 0}}}),j=(0,c.v)((e,t)=>{let a=(0,i.Y)("Avatar",null,e),{classNames:o,className:s,style:c,styles:p,unstyled:h,vars:x,src:f,alt:y,radius:j,color:A,gradient:b,imageProps:C,children:w,autoContrast:k,mod:S,name:M,allowedInitialsColors:T,attributes:D,...P}=a,L={withinGroup:!!(0,n.useContext)(u)},[O,B]=(0,n.useState)(!f),I=(0,l.I)({name:"Avatar",props:a,classes:m,className:s,style:c,classNames:o,styles:p,unstyled:h,attributes:D,vars:x,varsResolver:v});return(0,n.useEffect)(()=>B(!f),[f]),(0,r.jsx)(d.a,{...I("root"),mod:[{"within-group":L.withinGroup},S],ref:t,...P,children:O||!f?(0,r.jsx)("span",{...I("placeholder"),title:y,children:w||"string"==typeof M&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(M)||(0,r.jsx)(g,{})}):(0,r.jsx)("img",{...C,...I("image"),src:f,alt:y,onError:e=>{B(!0),C?.onError?.(e)}})})});j.classes=m,j.displayName="@mantine/core/Avatar",j.Group=f},69919:(e,t,a)=>{"use strict";a.d(t,{s:()=>x});var r=a(31085),n=a(41280);a(14041);var o=a(92408),s=a(29686),i=a(69564),l=a(54212),d=a(9594),c=a(22448),p=a(34056),u=a(2453),h=a(18670),m={root:"m_8bffd616"};let x=(0,u.v)((e,t)=>{let a=(0,s.Y)("Flex",null,e),{classNames:u,className:x,style:f,styles:g,unstyled:y,vars:v,gap:j,rowGap:A,columnGap:b,align:C,justify:w,wrap:k,direction:S,attributes:M,...T}=a,D=(0,i.I)({name:"Flex",classes:m,props:a,className:x,style:f,classNames:u,styles:g,unstyled:y,attributes:M,vars:v}),P=(0,o.xd)(),L=(0,c.C)(),O=(0,d.X)({styleProps:{gap:j,rowGap:A,columnGap:b,align:C,justify:w,wrap:k,direction:S},theme:P,data:h.I});return(0,r.jsxs)(r.Fragment,{children:[O.hasResponsiveStyles&&(0,r.jsx)(l.K,{selector:`.${L}`,styles:O.styles,media:O.media}),(0,r.jsx)(p.a,{ref:t,...D("root",{className:L,style:(0,n.J)(O.inlineStyles)}),...T})]})});x.classes=m,x.displayName="@mantine/core/Flex"},18670:(e,t,a)=>{"use strict";a.d(t,{I:()=>r});let r={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[35115,28054,46828,69928,55231,22905,18675,31791,17650,66732,90636,46593,38792],()=>t(66385)),_N_E=e.O()}]);
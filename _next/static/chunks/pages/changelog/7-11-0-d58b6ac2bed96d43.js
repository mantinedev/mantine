(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58458],{7641:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-11-0",function(){return a(60640)}])},60640:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(52322),r=a(45392),o=a(35974),i=a(57296),s=a(72384),l=a(57316),c=a(10913),d=a(75394),u=a(31561),p=a(73473),h=a(25071),m=a(15019);let x=(0,h.A)(m.us.Changelog7110);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,n.jsxs)(t.p,{children:["All Mantine components now have ",(0,n.jsx)(t.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"avatar-initials",children:"Avatar initials"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/avatar",children:"Avatar"})," component now supports displaying initials with auto generated color based on the given ",(0,n.jsx)(t.code,{children:"name"})," value.\nTo display initials instead of the default placeholder, set ",(0,n.jsx)(t.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,n.jsx)(t.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,n.jsx)(t.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,n.jsx)(a,{data:o.e}),"\n",(0,n.jsx)(t.h2,{id:"bubblechart-component",children:"BubbleChart component"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/charts/bubble-chart",children:"BubbleChart"})," component:"]}),"\n",(0,n.jsx)(a,{data:i.j}),"\n",(0,n.jsx)(t.h2,{id:"barchart-waterfall-type",children:"BarChart waterfall type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,n.jsx)(t.code,{children:"waterfall"})," type\nwhich is useful for visualizing changes in values over time:"]}),"\n",(0,n.jsx)(a,{data:s.A}),"\n",(0,n.jsx)(t.h2,{id:"linechart-gradient-type",children:"LineChart gradient type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," component now supports ",(0,n.jsx)(t.code,{children:"gradient"})," type\nwhich renders line chart with gradient fill:"]}),"\n",(0,n.jsx)(a,{data:l.F}),"\n",(0,n.jsx)(t.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),", ",(0,n.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,n.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," components\nnow support ",(0,n.jsx)(t.code,{children:"rightYAxis"})," prop which renders additional Y axis on the right side of the chart:"]}),"\n",(0,n.jsx)(a,{data:c.o}),"\n",(0,n.jsx)(t.h2,{id:"radarchart-legend",children:"RadarChart legend"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/charts/radar-chart",children:"RadarChart"})," component now supports legend:"]}),"\n",(0,n.jsx)(a,{data:d.j}),"\n",(0,n.jsx)(t.h2,{id:"tagsinput-acceptvalueonblur",children:"TagsInput acceptValueOnBlur"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," component behavior has been changed. Now By default,\nif the user types in a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,n.jsx)(t.code,{children:"acceptValueOnBlur"})," to ",(0,n.jsx)(t.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,n.jsx)(t.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,n.jsx)(a,{data:u.Y}),"\n",(0,n.jsx)(t.h2,{id:"transition-delay",children:"Transition delay"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports ",(0,n.jsx)(t.code,{children:"enterDelay"})," and ",(0,n.jsx)(t.code,{children:"exitDelay"})," props to delay transition start:"]}),"\n",(0,n.jsx)(a,{data:p.g}),"\n",(0,n.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["New ",(0,n.jsx)(t.a,{href:"/core/progress/#example-progress-with-segments",children:"segmented progress"})," example has been added to ",(0,n.jsx)(t.code,{children:"Progress"})," component documentation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,n.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,n.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," components documentation now includes additional demo on how to change the dropdown width"]}),"\n",(0,n.jsxs)(t.li,{children:["New ",(0,n.jsx)(t.a,{href:"//dates/date-picker/#exclude-dates",children:"DatePicker"})," example for ",(0,n.jsx)(t.code,{children:"excludeDate"})," prop"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,n.jsx)(t.code,{children:"hideWithOnePage"})," prop which hides pagination when there is only one page"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/spoiler",children:"Spoiler"})," component now supports controlled expanded state with ",(0,n.jsx)(t.code,{children:"expanded"})," and ",(0,n.jsx)(t.code,{children:"onExpandedChange"})," props"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/burger",children:"Burger"})," component now supports ",(0,n.jsx)(t.code,{children:"lineSize"})," prop to change lines height"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/dates/calendar",children:"Calendar"}),", ",(0,n.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other similar components now support ",(0,n.jsx)(t.code,{children:"highlightToday"})," prop to highlight today's date"]}),"\n"]})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...e,children:(0,n.jsx)(f,{...e})})}},80739:function(e,t,a){"use strict";a.d(t,{v:function(){return l}});var n=a(12624),r=a(171),o=a(25556),i=a(3131),s=a(69524),l=(0,n.z)({chartName:"BarChart",GraphicalChild:r.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:s.t9})},72384:function(e,t,a){"use strict";a.d(t,{A:function(){return i}});var n=a(52322),r=a(8132),o=a(9404);let i={type:"code",component:function(){return(0,n.jsx)(r.v,{h:300,data:o.It,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.K$,language:"tsx",fileName:"data.ts"}]}},9404:function(e,t,a){"use strict";a.d(t,{It:function(){return o},K$:function(){return i},aT:function(){return n},op:function(){return r}});let n=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],r=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,o=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],i=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`},57296:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var n=a(52322),r=a(62967),o=a(64606);let i={type:"code",component:function(){return(0,n.jsx)(r.O,{h:60,data:o.a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}]}},64606:function(e,t,a){"use strict";a.d(t,{a:function(){return n},o:function(){return r}});let n=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],r=`
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
`},75394:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var n=a(52322),r=a(22309),o=a(47550);let i={type:"code",component:function(){return(0,n.jsx)(r.H,{h:300,data:o.qH,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(e,t,a){"use strict";a.d(t,{aT:function(){return n},gv:function(){return i},op:function(){return r},qH:function(){return o}});let n=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],r=`
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
`,o=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],i=`
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
];`},35974:function(e,t,a){"use strict";a.d(t,{e:function(){return s}});var n=a(52322),r=a(82067),o=a(93010),i=a(10404);let s={type:"code",component:function(){let e=i.R5.map(e=>(0,n.jsx)(r.q,{name:e,color:"initials"},e));return(0,n.jsx)(o.Z,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.$y}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},10404:function(e,t,a){"use strict";a.d(t,{$y:function(){return o},R5:function(){return r},aY:function(){return n}});let n=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],r=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},31561:function(e,t,a){"use strict";a.d(t,{Y:function(){return o}});var n=a(52322),r=a(77413);let o={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.B,{label:"Value IS accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!0}),(0,n.jsx)(r.B,{label:"Value IS NOT accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!1,mt:"md"})]})},code:`
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
`,maxWidth:340,centered:!0}},73473:function(e,t,a){"use strict";a.d(t,{g:function(){return c}});var n=a(52322),r=a(2784),o=a(68131),i=a(17115),s=a(96321),l=a(1198);let c={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,r.useState)(!1);return(0,n.jsxs)(o.k,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,n.jsx)(i.z,{onClick:()=>t(!0),children:"Open dropdown"}),(0,n.jsx)(s.u,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,n.jsx)(l.X,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},8132:function(e,t,a){"use strict";a.d(t,{v:function(){return D}});var n=a(52322),r=a(2784),o=a(171),i=a(11011),s=a(30840),l=a(18205),c=a(80739),d=a(55734),u=a(25556),p=a(81224),h=a(3131),m=a(55484),x=a(21154),f=a(11200),y=a(13588),v=a(82027),g=a(38483),j=a(68755),b=a(51477),w=a(46690),C=a(28559),S=a(46293),k=a(50425),A=a(7064);function T(e){return`${(100*e).toFixed(0)}%`}let B={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},L=(0,f.Z)((e,{textColor:t,gridColor:a,cursorFill:n})=>({root:{"--chart-text-color":t?(0,y.p)(t,e):void 0,"--chart-grid-color":a?(0,y.p)(a,e):void 0,"--chart-cursor-fill":n?(0,y.p)(n,e):void 0}}));function E({value:e,valueFormatter:t,...a}){return(0,n.jsx)("text",{...a,dy:-10,fontSize:12,fill:"var(--chart-text-color, var(--mantine-color-dimmed))",textAnchor:"center",children:"function"==typeof t?t(e):e})}let D=(0,v.d)((e,t)=>{let a,f;let v=(0,g.w)("BarChart",B,e),{classNames:D,className:I,style:F,styles:P,unstyled:R,vars:N,data:O,withLegend:z,legendProps:J,series:M,onMouseLeave:_,dataKey:G,withTooltip:K,withXAxis:Z,withYAxis:Y,gridAxis:V,tickLine:$,xAxisProps:H,yAxisProps:W,unit:q,tooltipAnimationDuration:X,strokeDasharray:Q,gridProps:U,tooltipProps:ee,referenceLines:et,fillOpacity:ea,barChartProps:en,type:er,orientation:eo,dir:ei,valueFormatter:es,children:el,barProps:ec,xAxisLabel:ed,yAxisLabel:eu,withBarValueLabel:ep,withRightYAxis:eh,rightYAxisLabel:em,rightYAxisProps:ex,...ef}=v,ey=(0,j.rZ)(),[ev,eg]=(0,r.useState)(null),ej=null!==ev,eb="stacked"===er||"percent"===er,{resolvedClassNames:ew,resolvedStyles:eC}=(0,b.h)({classNames:D,styles:P,props:v}),eS="waterfall"===er?(a=0,f=0,O.map(e=>{if(e.standalone)for(let t in e)"number"==typeof e[t]&&t!==G&&(e[t]=[0,e[t]]);else for(let t in e)"number"==typeof e[t]&&t!==G&&(f+=e[t],e[t]=[a,f],a=f);return e})):O,ek=(0,w.y)({name:"BarChart",classes:A.Z,props:v,className:I,style:F,classNames:D,styles:P,unstyled:R,vars:N,varsResolver:L}),eA=M.map(e=>{let t=(0,y.p)(e.color,ey),a=ej&&ev!==e.name;return(0,r.createElement)(o.$,{...ek("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:a?.1:ea,strokeOpacity:a?.2:0,stackId:eb?"stack":void 0,label:ep?(0,n.jsx)(E,{valueFormatter:es}):void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ec?ec(e):ec},eS.map((e,a)=>(0,n.jsx)(i.b,{fill:e.color?(0,y.p)(e.color,ey):t},`cell-${a}`)))}),eT=et?.map((e,t)=>{let a=y.p(e.color,ey);return n.jsx(s.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")},t)}),eB={hide:!Y,axisLine:!1,..."vertical"===eo?{dataKey:G,type:"category"}:{type:"number"},tickLine:!!("none"!==V&&("y"===$||"xy"===$))&&{stroke:"currentColor"},allowDecimals:!0,unit:q,tickFormatter:"percent"===er?T:es,...ek("axis")};return(0,n.jsx)(C.x,{ref:t,...ek("root"),onMouseLeave:e=>{eg(null),_?.(e)},dir:ei||"ltr",...ef,children:(0,n.jsx)(l.h,{...ek("container"),children:(0,n.jsxs)(c.v,{data:eS,stackOffset:"percent"===er?"expand":void 0,layout:eo,margin:{bottom:ed?30:void 0,left:eu?10:void 0,right:eu?5:void 0},...en,children:[z&&(0,n.jsx)(d.D,{verticalAlign:"top",content:e=>(0,n.jsx)(S.Q,{payload:e.payload,onHighlight:eg,legendPosition:J?.verticalAlign||"top",classNames:ew,styles:eC,series:M,showColor:"waterfall"!==er}),...J}),(0,n.jsxs)(u.K,{hide:!Z,..."vertical"===eo?{type:"number"}:{dataKey:G},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==V&&("x"===$||"xy"===$))&&{stroke:"currentColor"},minTickGap:5,...ek("axis"),...H,children:[ed&&(0,n.jsx)(p._,{position:"insideBottom",offset:-20,fontSize:12,...ek("axisLabel"),children:ed}),H?.children]}),(0,n.jsxs)(h.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},...eB,...W,children:[em&&(0,n.jsx)(p._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:em}),W?.children]}),(0,n.jsxs)(h.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},...eB,...ex,children:[eu&&(0,n.jsx)(p._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:eu}),W?.children]}),(0,n.jsx)(m.q,{strokeDasharray:Q,vertical:"y"===V||"xy"===V,horizontal:"x"===V||"xy"===V,...ek("grid"),...U}),K&&(0,n.jsx)(x.u,{animationDuration:X,isAnimationActive:0!==X,position:"vertical"===eo?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Q,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>(0,n.jsx)(k.h,{label:e,payload:t,type:"waterfall"===er?"scatter":void 0,unit:q,classNames:ew,styles:eC,series:M,valueFormatter:es}),...ee}),eA,eT,el]})})})});D.displayName="@mantine/charts/BarChart",D.classes=A.Z},62967:function(e,t,a){"use strict";a.d(t,{O:function(){return S}});var n=a(52322),r=a(18205),o=a(78560),i=a(25556),s=a(3131),l=a(18043),c=a(21154),d=a(1510),u=a(93010),p=a(8582),h=a(11200),m=a(13588),x=a(82027),f=a(38483),y=a(68755),v=a(46690),g=a(28559),j=a(7064);function b({active:e,payload:t,getStyles:a,dataKey:r,valueFormatter:o}){if(e&&t&&t.length){let e=t[0]&&t[0].payload;return(0,n.jsx)("div",{...a("tooltip"),children:(0,n.jsxs)(u.Z,{justify:"space-between",children:[(0,n.jsx)(p.x,{fz:"sm",children:e[r.x]}),(0,n.jsx)(p.x,{fz:"sm",children:o?o(e[r.z]):e[r.z]})]})})}return null}let w={color:"blue.6",withTooltip:!0},C=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,m.p)(t,e):void 0,"--chart-grid-color":a?(0,m.p)(a,e):void 0}})),S=(0,x.d)((e,t)=>{let a=(0,f.w)("BubbleChart",w,e),{classNames:u,className:p,style:h,styles:x,unstyled:S,vars:k,data:A,xAxisProps:T,yAxisProps:B,zAxisProps:L,tooltipProps:E,scatterProps:D,color:I,label:F,withTooltip:P,dataKey:R,range:N,valueFormatter:O,...z}=a,J=(0,y.rZ)(),M=(0,v.y)({name:"BubbleChart",classes:j.Z,props:a,className:p,style:h,classNames:u,styles:x,unstyled:S,vars:k,varsResolver:C});return(0,n.jsx)(g.x,{ref:t,...M("root"),...z,children:(0,n.jsx)(r.h,{children:(0,n.jsxs)(o.G,{children:[(0,n.jsx)(i.K,{type:"category",dataKey:R.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...M("axis"),...T}),(0,n.jsx)(s.B,{type:"number",dataKey:R.y,height:10,width:F?void 0:0,tick:!1,tickLine:!1,axisLine:!1,label:{value:F,position:"insideRight",fontSize:12,fill:"currentColor"},...M("axis"),...B}),(0,n.jsx)(l.d,{type:"number",dataKey:R.z,domain:function(e,t){let a=e.map(e=>e[t]);return[Math.min(...a),Math.max(...a)]}(A,R.z),range:N,...L}),P&&(0,n.jsx)(c.u,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,n.jsx)(b,{dataKey:R,active:e.active,payload:e.payload,getStyles:M,valueFormatter:O}),...E}),(0,n.jsx)(d.b,{data:A,fill:(0,m.p)(I,J),isAnimationActive:!1,...D})]})})})});S.displayName="@mantine/charts/BubbleChart",S.classes=j.Z},22309:function(e,t,a){"use strict";a.d(t,{H:function(){return S}});var n=a(52322),r=a(2784),o=a(53891),i=a(18205),s=a(62411),l=a(25076),c=a(79669),d=a(10086),u=a(55734),p=a(11200),h=a(13588),m=a(82027),x=a(38483),f=a(68755),y=a(46690),v=a(51477),g=a(28559),j=a(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let w={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},C=(0,p.Z)((e,{gridColor:t,textColor:a})=>({root:{"--chart-grid-color":t?(0,h.p)(t,e):void 0,"--chart-text-color":a?(0,h.p)(a,e):void 0}})),S=(0,m.d)((e,t)=>{let a=(0,x.w)("RadarChart",w,e),{classNames:p,className:m,style:S,styles:k,unstyled:A,vars:T,data:B,series:L,dataKey:E,gridColor:D,textColor:I,radarProps:F,radarChartProps:P,polarGridProps:R,polarAngleAxisProps:N,polarRadiusAxisProps:O,withPolarGrid:z,withPolarAngleAxis:J,withPolarRadiusAxis:M,children:_,withLegend:G,legendProps:K,...Z}=a,Y=(0,f.rZ)(),V=(0,y.y)({name:"RadarChart",classes:b,props:a,className:m,style:S,classNames:p,styles:k,unstyled:A,vars:T,varsResolver:C}),[$,H]=(0,r.useState)(null),{resolvedClassNames:W,resolvedStyles:q}=(0,v.h)({classNames:p,styles:k,props:a}),X=L.map((e,t)=>(0,n.jsx)(o.F,{name:e.name,dataKey:e.name,stroke:(0,h.p)(e.strokeColor||e.color,Y),fill:(0,h.p)(e.color,Y),fillOpacity:$?$===e.name?e.opacity||.4:.05:e.opacity||.4,strokeOpacity:$?$===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof F?F(e):F},t));return(0,n.jsx)(g.x,{ref:t,...V("root"),...Z,children:(0,n.jsx)(i.h,{...V("container"),children:(0,n.jsxs)(s.H,{data:B,...P,children:[z&&(0,n.jsx)(l.n,{stroke:"var(--chart-grid-color)",...R}),J&&(0,n.jsx)(c.I,{dataKey:E,...N}),M&&(0,n.jsx)(d.S,{stroke:"var(--chart-grid-color)",...O}),X,G&&(0,n.jsx)(u.D,{verticalAlign:"bottom",content:e=>(0,n.jsx)(j.Q,{payload:e.payload,onHighlight:H,legendPosition:K?.verticalAlign||"bottom",classNames:W,styles:q,series:L,centered:!0}),...K}),_]})})})});S.displayName="@mantine/charts/RadarChart",S.classes=b},82067:function(e,t,a){"use strict";a.d(t,{q:function(){return C}});var n=a(52322),r=a(2784),o=a(91482),i=a(11200),s=a(38483),l=a(46690),c=a(28559),d=a(33502),u=a(82027);let p=(0,r.createContext)(null),h=p.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let x={},f=(0,i.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.bG)(t)}})),y=(0,u.d)((e,t)=>{let a=(0,s.w)("AvatarGroup",x,e),{classNames:r,className:o,style:i,styles:d,unstyled:u,vars:p,spacing:y,...v}=a,g=(0,l.y)({name:"AvatarGroup",classes:m,props:a,className:o,style:i,classNames:r,styles:d,unstyled:u,vars:p,varsResolver:f,rootSelector:"group"});return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(c.x,{ref:t,...g("group"),...v})})});function v(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function g(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}y.classes=m,y.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],b={},w=(0,i.Z)((e,{size:t,radius:a,variant:n,gradient:r,color:i,autoContrast:s,name:l,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof l?function(e,t=j){let a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(g(e)))%t.length;return t[a]}(l,c):i,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:n||"light",autoContrast:s});return{root:{"--avatar-size":(0,o.ap)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,o.H5)(a),"--avatar-bg":d||n?u.background:void 0,"--avatar-color":d||n?u.color:void 0,"--avatar-bd":d||n?u.border:void 0}}}),C=(0,d.b)((e,t)=>{let a=(0,s.w)("Avatar",b,e),{classNames:o,className:i,style:d,styles:u,unstyled:h,vars:x,src:f,alt:y,radius:j,color:C,gradient:S,imageProps:k,children:A,autoContrast:T,mod:B,name:L,allowedInitialsColors:E,...D}=a,I={withinGroup:!!(0,r.useContext)(p)},[F,P]=(0,r.useState)(!f),R=(0,l.y)({name:"Avatar",props:a,classes:m,className:i,style:d,classNames:o,styles:u,unstyled:h,vars:x,varsResolver:w});return(0,r.useEffect)(()=>P(!f),[f]),(0,n.jsx)(c.x,{...R("root"),mod:[{"within-group":I.withinGroup},B],ref:t,...D,children:F?(0,n.jsx)("span",{...R("placeholder"),title:y,children:A||"string"==typeof L&&g(L)||(0,n.jsx)(v,{})}):(0,n.jsx)("img",{...k,...R("image"),src:f,alt:y,onError:e=>{P(!0),k?.onError?.(e)}})})});C.classes=m,C.displayName="@mantine/core/Avatar",C.Group=y},68131:function(e,t,a){"use strict";a.d(t,{k:function(){return f}});var n=a(52322),r=a(40580);a(2784);var o=a(68755),i=a(38483),s=a(46690),l=a(9437),c=a(53515),d=a(12063),u=a(28559),p=a(33502),h=a(54367),m={root:"m_8bffd616"};let x={},f=(0,p.b)((e,t)=>{let a=(0,i.w)("Flex",x,e),{classNames:p,className:f,style:y,styles:v,unstyled:g,vars:j,gap:b,rowGap:w,columnGap:C,align:S,justify:k,wrap:A,direction:T,...B}=a,L=(0,s.y)({name:"Flex",classes:m,props:a,className:f,style:y,classNames:p,styles:v,unstyled:g,vars:j}),E=(0,o.rZ)(),D=(0,d.m)(),I=(0,c.n)({styleProps:{gap:b,rowGap:w,columnGap:C,align:S,justify:k,wrap:A,direction:T},theme:E,data:h.i});return(0,n.jsxs)(n.Fragment,{children:[I.hasResponsiveStyles&&(0,n.jsx)(l.f,{selector:`.${D}`,styles:I.styles,media:I.media}),(0,n.jsx)(u.x,{ref:t,...L("root",{className:D,style:(0,r.L)(I.inlineStyles)}),...B})]})});f.classes=m,f.displayName="@mantine/core/Flex"},54367:function(e,t,a){"use strict";a.d(t,{i:function(){return n}});let n={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},function(e){e.O(0,[61177,16717,59966,78560,62662,37355,66748,11340,61324,77413,61623,92888,49774,40179],function(){return e(e.s=7641)}),_N_E=e.O()}]);
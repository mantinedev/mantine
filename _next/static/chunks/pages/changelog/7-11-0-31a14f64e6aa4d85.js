(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58458],{7641:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-11-0",function(){return n(60640)}])},60640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(52322),r=n(45392),o=n(35974),i=n(57296),s=n(72384),l=n(57316),c=n(10913),d=n(75394),u=n(31561),p=n(73473),h=n(25071),x=n(15019);let m=(0,h.A)(x.us.Changelog7110);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,a.jsxs)(t.p,{children:["All Mantine components now have ",(0,a.jsx)(t.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"avatar-initials",children:"Avatar initials"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/core/avatar",children:"Avatar"})," component now supports displaying initials with auto generated color based on the given ",(0,a.jsx)(t.code,{children:"name"})," value.\nTo display initials instead of the default placeholder, set ",(0,a.jsx)(t.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,a.jsx)(t.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,a.jsx)(t.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,a.jsx)(n,{data:o.e}),"\n",(0,a.jsx)(t.h2,{id:"bubblechart-component",children:"BubbleChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/bubble-chart",children:"BubbleChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:i.j}),"\n",(0,a.jsx)(t.h2,{id:"barchart-waterfall-type",children:"BarChart waterfall type"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,a.jsx)(t.code,{children:"waterfall"})," type\nwhich is useful for visualizing changes in values over time:"]}),"\n",(0,a.jsx)(n,{data:s.A}),"\n",(0,a.jsx)(t.h2,{id:"linechart-gradient-type",children:"LineChart gradient type"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," component now supports ",(0,a.jsx)(t.code,{children:"gradient"})," type\nwhich renders line chart with gradient fill:"]}),"\n",(0,a.jsx)(n,{data:l.F}),"\n",(0,a.jsx)(t.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),", ",(0,a.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,a.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," components\nnow support ",(0,a.jsx)(t.code,{children:"rightYAxis"})," prop which renders additional Y axis on the right side of the chart:"]}),"\n",(0,a.jsx)(n,{data:c.o}),"\n",(0,a.jsx)(t.h2,{id:"radarchart-legend",children:"RadarChart legend"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/charts/radar-chart",children:"RadarChart"})," component now supports legend:"]}),"\n",(0,a.jsx)(n,{data:d.j}),"\n",(0,a.jsx)(t.h2,{id:"tagsinput-acceptvalueonblur",children:"TagsInput acceptValueOnBlur"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," component behavior has been changed. Now By default,\nif the user types in a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"acceptValueOnBlur"})," to ",(0,a.jsx)(t.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,a.jsx)(t.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,a.jsx)(n,{data:u.Y}),"\n",(0,a.jsx)(t.h2,{id:"transition-delay",children:"Transition delay"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports ",(0,a.jsx)(t.code,{children:"enterDelay"})," and ",(0,a.jsx)(t.code,{children:"exitDelay"})," props to delay transition start:"]}),"\n",(0,a.jsx)(n,{data:p.g}),"\n",(0,a.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["New ",(0,a.jsx)(t.a,{href:"/core/progress/#example-progress-with-segments",children:"segmented progress"})," example has been added to ",(0,a.jsx)(t.code,{children:"Progress"})," component documentation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,a.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," components documentation now includes additional demo on how to change the dropdown width"]}),"\n",(0,a.jsxs)(t.li,{children:["New ",(0,a.jsx)(t.a,{href:"//dates/date-picker/#exclude-dates",children:"DatePicker"})," example for ",(0,a.jsx)(t.code,{children:"excludeDate"})," prop"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,a.jsx)(t.code,{children:"hideWithOnePage"})," prop which hides pagination when there is only one page"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/spoiler",children:"Spoiler"})," component now supports controlled expanded state with ",(0,a.jsx)(t.code,{children:"expanded"})," and ",(0,a.jsx)(t.code,{children:"onExpandedChange"})," props"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/burger",children:"Burger"})," component now supports ",(0,a.jsx)(t.code,{children:"lineSize"})," prop to change lines height"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/dates/calendar",children:"Calendar"}),", ",(0,a.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other similar components now support ",(0,a.jsx)(t.code,{children:"highlightToday"})," prop to highlight today's date"]}),"\n"]})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(f,{...e})})}},80739:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var a=n(12624),r=n(171),o=n(25556),i=n(3131),s=n(69524),l=(0,a.z)({chartName:"BarChart",GraphicalChild:r.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:s.t9})},78560:function(e,t,n){"use strict";n.d(t,{G:function(){return c}});var a=n(12624),r=n(1510),o=n(25556),i=n(3131),s=n(18043),l=n(69524),c=(0,a.z)({chartName:"ScatterChart",GraphicalChild:r.b,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:i.B},{axisType:"zAxis",AxisComp:s.d}],formatAxisMap:l.t9})},72384:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var a=n(52322),r=n(8132),o=n(9404);let i={type:"code",component:function(){return(0,a.jsx)(r.v,{h:300,data:o.It,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.K$,language:"tsx",fileName:"data.ts"}]}},57296:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(52322),r=n(62967),o=n(64606);let i={type:"code",component:function(){return(0,a.jsx)(r.O,{h:60,data:o.a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}]}},64606:function(e,t,n){"use strict";n.d(t,{a:function(){return a},o:function(){return r}});let a=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],r=`
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
`},75394:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(52322),r=n(22309),o=n(47550);let i={type:"code",component:function(){return(0,a.jsx)(r.H,{h:300,data:o.qH,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(e,t,n){"use strict";n.d(t,{aT:function(){return a},gv:function(){return i},op:function(){return r},qH:function(){return o}});let a=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],r=`
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
];`},35974:function(e,t,n){"use strict";n.d(t,{e:function(){return s}});var a=n(52322),r=n(82067),o=n(93010),i=n(10404);let s={type:"code",component:function(){let e=i.R5.map(e=>(0,a.jsx)(r.q,{name:e,color:"initials"},e));return(0,a.jsx)(o.Z,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.$y}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},10404:function(e,t,n){"use strict";n.d(t,{$y:function(){return o},R5:function(){return r},aY:function(){return a}});let a=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],r=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},31561:function(e,t,n){"use strict";n.d(t,{Y:function(){return o}});var a=n(52322),r=n(77413);let o={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.B,{label:"Value IS accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!0}),(0,a.jsx)(r.B,{label:"Value IS NOT accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!1,mt:"md"})]})},code:`
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
`,maxWidth:340,centered:!0}},73473:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var a=n(52322),r=n(2784),o=n(68131),i=n(17115),s=n(96321),l=n(1198);let c={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,r.useState)(!1);return(0,a.jsxs)(o.k,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,a.jsx)(i.z,{onClick:()=>t(!0),children:"Open dropdown"}),(0,a.jsx)(s.u,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,a.jsx)(l.X,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},62967:function(e,t,n){"use strict";n.d(t,{O:function(){return S}});var a=n(52322),r=n(18205),o=n(78560),i=n(25556),s=n(3131),l=n(18043),c=n(21154),d=n(1510),u=n(93010),p=n(8582),h=n(11200),x=n(13588),m=n(82027),f=n(38483),y=n(68755),g=n(46690),j=n(28559),v=n(7064);function b({active:e,payload:t,getStyles:n,dataKey:r,valueFormatter:o}){if(e&&t&&t.length){let e=t[0]&&t[0].payload;return(0,a.jsx)("div",{...n("tooltip"),children:(0,a.jsxs)(u.Z,{justify:"space-between",children:[(0,a.jsx)(p.x,{fz:"sm",children:e[r.x]}),(0,a.jsx)(p.x,{fz:"sm",children:o?o(e[r.z]):e[r.z]})]})})}return null}let w={color:"blue.6",withTooltip:!0},C=(0,h.Z)((e,{textColor:t,gridColor:n})=>({root:{"--chart-text-color":t?(0,x.p)(t,e):void 0,"--chart-grid-color":n?(0,x.p)(n,e):void 0}})),S=(0,m.d5)((e,t)=>{let n=(0,f.w)("BubbleChart",w,e),{classNames:u,className:p,style:h,styles:m,unstyled:S,vars:A,data:k,xAxisProps:B,yAxisProps:T,zAxisProps:D,tooltipProps:N,scatterProps:P,color:F,label:I,withTooltip:O,dataKey:G,range:R,valueFormatter:E,...J}=n,z=(0,y.rZ)(),L=(0,g.y)({name:"BubbleChart",classes:v.Z,props:n,className:p,style:h,classNames:u,styles:m,unstyled:S,vars:A,varsResolver:C});return(0,a.jsx)(j.x,{ref:t,...L("root"),...J,children:(0,a.jsx)(r.h,{children:(0,a.jsxs)(o.G,{children:[(0,a.jsx)(i.K,{type:"category",dataKey:G.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...L("axis"),...B}),(0,a.jsx)(s.B,{type:"number",dataKey:G.y,height:10,width:I?void 0:0,tick:!1,tickLine:!1,axisLine:!1,label:{value:I,position:"insideRight",fontSize:12,fill:"currentColor"},...L("axis"),...T}),(0,a.jsx)(l.d,{type:"number",dataKey:G.z,domain:function(e,t){let n=e.map(e=>e[t]);return[Math.min(...n),Math.max(...n)]}(k,G.z),range:R,...D}),O&&(0,a.jsx)(c.u,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,a.jsx)(b,{dataKey:G,active:e.active,payload:e.payload,getStyles:L,valueFormatter:E}),...N}),(0,a.jsx)(d.b,{data:k,fill:(0,x.p)(F,z),isAnimationActive:!1,...P})]})})})});S.displayName="@mantine/charts/BubbleChart",S.classes=v.Z},22309:function(e,t,n){"use strict";n.d(t,{H:function(){return S}});var a=n(52322),r=n(2784),o=n(53891),i=n(18205),s=n(62411),l=n(25076),c=n(79669),d=n(10086),u=n(55734),p=n(11200),h=n(13588),x=n(82027),m=n(38483),f=n(68755),y=n(46690),g=n(51477),j=n(28559),v=n(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let w={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},C=(0,p.Z)((e,{gridColor:t,textColor:n})=>({root:{"--chart-grid-color":t?(0,h.p)(t,e):void 0,"--chart-text-color":n?(0,h.p)(n,e):void 0}})),S=(0,x.d5)((e,t)=>{let n=(0,m.w)("RadarChart",w,e),{classNames:p,className:x,style:S,styles:A,unstyled:k,vars:B,data:T,series:D,dataKey:N,gridColor:P,textColor:F,radarProps:I,radarChartProps:O,polarGridProps:G,polarAngleAxisProps:R,polarRadiusAxisProps:E,withPolarGrid:J,withPolarAngleAxis:z,withPolarRadiusAxis:L,children:_,withLegend:M,legendProps:K,...Z}=n,V=(0,f.rZ)(),Y=(0,y.y)({name:"RadarChart",classes:b,props:n,className:x,style:S,classNames:p,styles:A,unstyled:k,vars:B,varsResolver:C}),[H,$]=(0,r.useState)(null),{resolvedClassNames:q,resolvedStyles:W}=(0,g.h)({classNames:p,styles:A,props:n}),X=D.map((e,t)=>(0,a.jsx)(o.F,{name:e.name,dataKey:e.name,stroke:(0,h.p)(e.strokeColor||e.color,V),fill:(0,h.p)(e.color,V),fillOpacity:H?H===e.name?e.opacity||.4:.05:e.opacity||.4,strokeOpacity:H?H===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof I?I(e):I},t));return(0,a.jsx)(j.x,{ref:t,...Y("root"),...Z,children:(0,a.jsx)(i.h,{...Y("container"),children:(0,a.jsxs)(s.H,{data:T,...O,children:[J&&(0,a.jsx)(l.n,{stroke:"var(--chart-grid-color)",...G}),z&&(0,a.jsx)(c.I,{dataKey:N,...R}),L&&(0,a.jsx)(d.S,{stroke:"var(--chart-grid-color)",...E}),X,M&&(0,a.jsx)(u.D,{verticalAlign:"bottom",content:e=>(0,a.jsx)(v.Q,{payload:e.payload,onHighlight:$,legendPosition:K?.verticalAlign||"bottom",classNames:q,styles:W,series:D,centered:!0}),...K}),_]})})})});S.displayName="@mantine/charts/RadarChart",S.classes=b},82067:function(e,t,n){"use strict";n.d(t,{q:function(){return C}});var a=n(52322),r=n(2784),o=n(91482),i=n(11200),s=n(38483),l=n(46690),c=n(28559),d=n(33502),u=n(82027);let p=(0,r.createContext)(null),h=p.Provider;var x={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m={},f=(0,i.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.bG)(t)}})),y=(0,u.d5)((e,t)=>{let n=(0,s.w)("AvatarGroup",m,e),{classNames:r,className:o,style:i,styles:d,unstyled:u,vars:p,spacing:y,...g}=n,j=(0,l.y)({name:"AvatarGroup",classes:x,props:n,className:o,style:i,classNames:r,styles:d,unstyled:u,vars:p,varsResolver:f,rootSelector:"group"});return(0,a.jsx)(h,{value:!0,children:(0,a.jsx)(c.x,{ref:t,...j("group"),...g})})});function g(e){return(0,a.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function j(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}y.classes=x,y.displayName="@mantine/core/AvatarGroup";let v=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],b={},w=(0,i.Z)((e,{size:t,radius:n,variant:a,gradient:r,color:i,autoContrast:s,name:l,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof l?function(e,t=v){let n=Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(j(e)))%t.length;return t[n]}(l,c):i,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:a||"light",autoContrast:s});return{root:{"--avatar-size":(0,o.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,o.H5)(n),"--avatar-bg":d||a?u.background:void 0,"--avatar-color":d||a?u.color:void 0,"--avatar-bd":d||a?u.border:void 0}}}),C=(0,d.b)((e,t)=>{let n=(0,s.w)("Avatar",b,e),{classNames:o,className:i,style:d,styles:u,unstyled:h,vars:m,src:f,alt:y,radius:v,color:C,gradient:S,imageProps:A,children:k,autoContrast:B,mod:T,name:D,allowedInitialsColors:N,...P}=n,F={withinGroup:!!(0,r.useContext)(p)},[I,O]=(0,r.useState)(!f),G=(0,l.y)({name:"Avatar",props:n,classes:x,className:i,style:d,classNames:o,styles:u,unstyled:h,vars:m,varsResolver:w});return(0,r.useEffect)(()=>O(!f),[f]),(0,a.jsx)(c.x,{...G("root"),mod:[{"within-group":F.withinGroup},T],ref:t,...P,children:I?(0,a.jsx)("span",{...G("placeholder"),title:y,children:k||"string"==typeof D&&j(D)||(0,a.jsx)(g,{})}):(0,a.jsx)("img",{...A,...G("image"),src:f,alt:y,onError:e=>{O(!0),A?.onError?.(e)}})})});C.classes=x,C.displayName="@mantine/core/Avatar",C.Group=y},68131:function(e,t,n){"use strict";n.d(t,{k:function(){return f}});var a=n(52322),r=n(40580);n(2784);var o=n(68755),i=n(38483),s=n(46690),l=n(9437),c=n(53515),d=n(12063),u=n(28559),p=n(33502),h=n(54367),x={root:"m_8bffd616"};let m={},f=(0,p.b)((e,t)=>{let n=(0,i.w)("Flex",m,e),{classNames:p,className:f,style:y,styles:g,unstyled:j,vars:v,gap:b,rowGap:w,columnGap:C,align:S,justify:A,wrap:k,direction:B,...T}=n,D=(0,s.y)({name:"Flex",classes:x,props:n,className:f,style:y,classNames:p,styles:g,unstyled:j,vars:v}),N=(0,o.rZ)(),P=(0,d.m)(),F=(0,c.n)({styleProps:{gap:b,rowGap:w,columnGap:C,align:S,justify:A,wrap:k,direction:B},theme:N,data:h.i});return(0,a.jsxs)(a.Fragment,{children:[F.hasResponsiveStyles&&(0,a.jsx)(l.f,{selector:`.${P}`,styles:F.styles,media:F.media}),(0,a.jsx)(u.x,{ref:t,...D("root",{className:P,style:(0,r.L)(F.inlineStyles)}),...T})]})});f.classes=x,f.displayName="@mantine/core/Flex"},54367:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});let a={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},function(e){e.O(0,[61177,16717,59966,1510,91097,37355,66748,11340,61324,40296,77413,61623,92888,49774,40179],function(){return e(e.s=7641)}),_N_E=e.O()}]);
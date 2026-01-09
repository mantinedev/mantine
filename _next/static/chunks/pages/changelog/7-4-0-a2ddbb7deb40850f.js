(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96212],{6527:(e,n,t)=>{"use strict";t.d(n,{V:()=>i});var r=t(6029),a=t(17407),o=t(99764);let i={type:"code",component:function(){return(0,r.jsx)(a.E,{h:300,data:o.p,dataKey:"month",type:"stacked",orientation:"vertical",yAxisProps:{width:80},series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.kZ,language:"tsx",fileName:"data.ts"}]}},16196:(e,n,t)=>{"use strict";t.d(n,{w:()=>c});var r=t(6029),a=t(20931),o=t(20888),i=t(49643),s=t(61087),l=t(72139);let c={type:"configurator",component:function(e){let n=(0,i.xd)(),t=Array(10).fill(0).map((t,o)=>(0,r.jsx)(s.$,{color:(0,a.g)({theme:n,color:e.color}).isThemeColor?`${e.color}.${o}`:e.color,children:"Button"},o));return(0,r.jsx)(i.nW,{inherit:!0,theme:{autoContrast:!0,luminanceThreshold:e.luminanceThreshold},children:(0,r.jsx)(l.B,{children:t})})},code:e=>`
import { Button, createTheme, MantineProvider, Stack } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: ${e.luminanceThreshold},
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${(0,a.g)({theme:o.S,color:e.color}).isThemeColor?`{\`${e.color}.\${index}\`}`:`"${e.color}"`}
      >
        Button
      </Button>
    ));

  return (
    <MantineProvider theme={theme}>
      <Stack>{buttons}</Stack>
    </MantineProvider>
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"luminanceThreshold",initialValue:.3,min:0,max:1,step:.01,libraryValue:"__"}]}},24531:(e,n,t)=>{"use strict";t.d(n,{AQ:()=>c,EJ:()=>p,d8:()=>h,dX:()=>l,kD:()=>i,kZ:()=>a,p:()=>r,sC:()=>s,t3:()=>d,v1:()=>o});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],a=`
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
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
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
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],l=`
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
`,c=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],d=`
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
`,h=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},34483:(e,n,t)=>{"use strict";t.d(n,{s:()=>a});var r=t(6029);function a({color:e,id:n,withGradient:t,fillOpacity:a}){return(0,r.jsx)(r.Fragment,{children:t?(0,r.jsxs)("linearGradient",{id:n,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:a}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:n,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:a??.2})})})}a.displayName="@mantine/charts/AreaGradient"},37703:(e,n,t)=>{"use strict";t.d(n,{F:()=>l});var r=t(6029),a=t(55729),o=t(38774),i=t(70204),s=t(69329);let l={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return(0,r.jsxs)(r.Fragment,{children:[(0,a.createElement)(o.k,{...e.getInputProps("name",{fieldType:"name"}),key:e.key("name")}),(0,a.createElement)(i.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} key={form.key('name')} />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},38018:(e,n,t)=>{"use strict";t.d(n,{o:()=>i});var r=t(6029),a=t(39522),o=t(24531);let i={type:"code",component:function(){return(0,r.jsx)(a.b,{h:300,data:o.p,dataKey:"date",withLegend:!0,series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.kZ,language:"tsx",fileName:"data.ts"}]}},39522:(e,n,t)=>{"use strict";t.d(n,{b:()=>N});var r=t(6029),a=t(55729),o=t(96402),i=t(93463),s=t(40684),l=t(32716),c=t(2893),d=t(47122),h=t(83687),p=(0,l.gu)({chartName:"LineChart",GraphicalChild:o.N,axisComponents:[{axisType:"xAxis",AxisComp:c.W},{axisType:"yAxis",AxisComp:d.h}],formatAxisMap:h.pr}),m=t(64370),u=t(35555),x=t(8454),f=t(31292),j=t(33987),g=t(21351),v=t(8411),y=t(38919),b=t(49643),A=t(38757),w=t(15583),k=t(76320),C=t(2011),M=t(48101),I=t(42738),T=t(58486),P=t(52345);let S={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},O=(0,j.V)((e,{textColor:n,gridColor:t})=>({root:{"--chart-text-color":n?(0,g.r)(n,e):void 0,"--chart-grid-color":t?(0,g.r)(t,e):void 0}})),N=(0,v.P9)((e,n)=>{let t=(0,y.Y)("LineChart",S,e),{classNames:l,className:h,style:j,styles:v,unstyled:N,vars:B,data:L,withLegend:D,legendProps:F,series:z,onMouseLeave:E,dataKey:q,withTooltip:G,withXAxis:V,withYAxis:$,gridAxis:W,tickLine:H,xAxisProps:_,yAxisProps:Y,unit:R,tooltipAnimationDuration:K,strokeDasharray:J,gridProps:Q,tooltipProps:X,referenceLines:Z,withDots:U,dotProps:ee,activeDotProps:en,strokeWidth:et,lineChartProps:er,connectNulls:ea,fillOpacity:eo,curveType:ei,orientation:es,dir:el,valueFormatter:ec,children:ed,lineProps:eh,xAxisLabel:ep,yAxisLabel:em,type:eu,gradientStops:ex,withRightYAxis:ef,rightYAxisLabel:ej,rightYAxisProps:eg,withPointLabels:ev,attributes:ey,gridColor:eb,...eA}=t,ew=(0,b.xd)(),[ek,eC]=(0,a.useState)(null),eM=null!==ek,{resolvedClassNames:eI,resolvedStyles:eT}=(0,A.Y)({classNames:l,styles:v,props:t}),eP=(0,w.I)({name:"LineChart",classes:T.A,props:t,className:h,style:j,classNames:l,styles:v,unstyled:N,attributes:ey,vars:B,varsResolver:O}),eS=(0,C.B)(),eO=`line-chart-gradient-${eS}`,eN=ex?.map(e=>(0,r.jsx)("stop",{offset:`${e.offset}%`,stopColor:(0,g.r)(e.color,ew)},e.color)),eB=z.map(e=>{let n=(0,g.r)(e.color,ew),t=eM&&ek!==e.name;return(0,a.createElement)(o.N,{...eP("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!U&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:"gradient"===eu?"var(--mantine-color-gray-7)":n,stroke:"gradient"===eu?"white":n,...ee},activeDot:!!U&&{fill:"gradient"===eu?"var(--mantine-color-gray-7)":n,stroke:"gradient"===eu?"white":n,...en},fill:n,stroke:"gradient"===eu?`url(#${eO})`:n,strokeWidth:et,isAnimationActive:!1,fillOpacity:t?0:eo,strokeOpacity:t?.5:eo,connectNulls:ea,type:e.curveType??ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ev?(0,r.jsx)(P.x,{valueFormatter:ec}):void 0,..."function"==typeof eh?eh(e):eh})}),eL=Z?.map((e,n)=>{let t=(0,g.r)(e.color,ew);return(0,r.jsx)(i.e,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eP("referenceLine")},n)}),eD={axisLine:!1,..."vertical"===es?{dataKey:q,type:"category"}:{type:"number"},tickLine:"none"!==W&&("y"===H||"xy"===H)&&{stroke:"currentColor"},allowDecimals:!0,unit:R,tickFormatter:"vertical"===es?void 0:ec,...eP("axis")};return(0,r.jsx)(k.a,{ref:n,...eP("root"),onMouseLeave:e=>{eC(null),E?.(e)},dir:el||"ltr",...eA,children:(0,r.jsx)(s.u,{...eP("container"),children:(0,r.jsxs)(p,{data:L,layout:es,margin:{bottom:ep?30:void 0,left:em?10:void 0,right:em?5:void 0},...er,children:["gradient"===eu&&(0,r.jsx)("defs",{children:(0,r.jsx)("linearGradient",{id:eO,x1:"0",y1:"0",x2:"0",y2:"1",children:eN})}),D&&(0,r.jsx)(m.s,{verticalAlign:"top",content:e=>(0,r.jsx)(M._,{payload:e.payload,onHighlight:eC,legendPosition:F?.verticalAlign||"top",classNames:eI,styles:eT,series:z,showColor:"gradient"!==eu,attributes:ey}),...F}),(0,r.jsxs)(c.W,{hide:!V,..."vertical"===es?{type:"number"}:{dataKey:q},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==W&&("x"===H||"xy"===H)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===es?ec:void 0,...eP("axis"),..._,children:[ep&&(0,r.jsx)(u.J,{position:"insideBottom",offset:-20,fontSize:12,...eP("axisLabel"),children:ep}),_?.children]}),(0,r.jsxs)(d.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!$,...eD,...Y,children:[em&&(0,r.jsx)(u.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eP("axisLabel"),children:em}),Y?.children]}),(0,r.jsxs)(d.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ef,...eD,...eg,children:[ej&&(0,r.jsx)(u.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eP("axisLabel"),children:ej}),Y?.children]}),(0,r.jsx)(x.d,{strokeDasharray:J,vertical:"y"===W||"xy"===W,horizontal:"x"===W||"xy"===W,...eP("grid"),...Q}),G&&(0,r.jsx)(f.m,{animationDuration:K,isAnimationActive:0!==K,position:"vertical"===es?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:J},content:({label:e,payload:n,labelFormatter:t})=>(0,r.jsx)(I.I,{label:t&&n?t(e,n):e,payload:n,unit:R,classNames:eI,styles:eT,series:z,valueFormatter:ec,showColor:"gradient"!==eu,attributes:ey}),...X}),eB,eL,ed]})})})});N.displayName="@mantine/charts/LineChart",N.classes=T.A},47900:(e,n,t)=>{"use strict";t.d(n,{s:()=>s});var r=t(6029),a=t(1608),o=t(57414),i=t(61087);let s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.C,{children:"autoContrast: true"}),(0,r.jsxs)(o.Y,{mt:"xs",mb:"lg",children:[(0,r.jsx)(i.$,{color:"lime.4",autoContrast:!0,children:"Lime.4 button"}),(0,r.jsx)(i.$,{color:"blue.2",autoContrast:!0,children:"Blue.2 button"}),(0,r.jsx)(i.$,{color:"orange.3",autoContrast:!0,children:"Orange.3 button"})]}),(0,r.jsx)(a.C,{children:"autoContrast: false"}),(0,r.jsxs)(o.Y,{mt:"xs",children:[(0,r.jsx)(i.$,{color:"lime.4",children:"Lime.4 button"}),(0,r.jsx)(i.$,{color:"blue.2",children:"Blue.2 button"}),(0,r.jsx)(i.$,{color:"orange.3",children:"Orange.3 button"})]})]})},code:`
import { Button, Code, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code>autoContrast: true</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4" autoContrast>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast>
          Orange.3 button
        </Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>
    </>
  );
}
`}},50644:(e,n,t)=>{"use strict";t.d(n,{y:()=>i});var r=t(6029),a=t(57414),o=t(61087);let i={type:"code",component:function(){return(0,r.jsxs)(a.Y,{children:[(0,r.jsx)(o.$,{color:"oklch-blue",children:"Filled"}),(0,r.jsx)(o.$,{color:"oklch-blue",variant:"outline",children:"Outline"}),(0,r.jsx)(o.$,{color:"oklch-blue",variant:"light",children:"Light"})]})},code:`
import { MantineProvider, createTheme, Group, Button } from '@mantine/core';

const theme = createTheme({
  colors: {
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="oklch-blue">Filled</Button>
        <Button color="oklch-blue" variant="outline">
          Outline
        </Button>
        <Button color="oklch-blue" variant="light">
          Light
        </Button>
      </Group>
    </MantineProvider>
  );
}
`,centered:!0}},52345:(e,n,t)=>{"use strict";t.d(n,{x:()=>a});var r=t(6029);function a({x:e,y:n,value:t,valueFormatter:a}){return(0,r.jsx)("g",{transform:`translate(${e},${n})`,children:(0,r.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:a?a(t):t})})}},52824:(e,n,t)=>{"use strict";t.d(n,{C:()=>o});var r=t(6029),a=t(70291);let o={type:"configurator",component:function(e){return(0,r.jsx)(a.O,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      {{props}}
    />
  );
}
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]}},56721:(e,n,t)=>{"use strict";t.d(n,{Q:()=>l});var r=t(32716),a=t(13297),o=t(2893),i=t(47122),s=t(83687),l=(0,r.gu)({chartName:"AreaChart",GraphicalChild:a.G,axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:i.h}],formatAxisMap:s.pr})},59032:(e,n,t)=>{"use strict";t.d(n,{U:()=>o});var r=t(6029),a=t(45208);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.E,{size:"xl",fw:700,children:"Charizard (Pok\xe9mon)"}),(0,r.jsx)(a.E,{c:"dimmed",children:"Charizard description from Bulbapedia"}),(0,r.jsx)(a.E,{size:"sm",mt:"md",children:"Charizard is a draconic, bipedal Pok\xe9mon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."}),(0,r.jsx)(a.E,{size:"sm",mt:"md",children:"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."})]})}},65308:(e,n,t)=>{"use strict";t.d(n,{I:()=>i});var r=t(6029),a=t(76320),o=t(66385);let i={type:"configurator",component:function(e){return(0,r.jsx)(a.a,{maw:400,children:(0,r.jsx)(o.h,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]}},70291:(e,n,t)=>{"use strict";t.d(n,{O:()=>g});var r=t(6029),a=t(55729),o=t(40684),i=t(56721),s=t(13297),l=t(33987),c=t(21351),d=t(8411),h=t(38919),p=t(15583),m=t(76320),u=t(34483);let x={},f={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},j=(0,l.V)((e,{color:n,data:t,trendColors:r})=>({root:{"--chart-color":r?(0,c.r)(function(e,n){let t=e[0],r=e[e.length-1];return null===t||null===r?n.neutral||n.positive:t<r?n.positive:t>r?n.negative:n.neutral||n.positive}(t,r),e):n?(0,c.r)(n,e):void 0}})),g=(0,d.P9)((e,n)=>{let t=(0,h.Y)("Sparkline",f,e),{classNames:l,className:c,style:d,styles:g,unstyled:v,vars:y,data:b,withGradient:A,fillOpacity:w,curveType:k,strokeWidth:C,trendColors:M,connectNulls:I,areaProps:T,attributes:P,...S}=t,O=(0,p.I)({name:"Sparkline",classes:x,props:t,className:c,style:d,classNames:l,styles:g,unstyled:v,attributes:P,vars:y,varsResolver:j}),N=(0,a.useId)(),B=(0,a.useMemo)(()=>b.map((e,n)=>({value:e,index:n})),[b]);return(0,r.jsx)(m.a,{ref:n,...O("root"),...S,dir:"ltr",children:(0,r.jsx)(o.u,{children:(0,r.jsxs)(i.Q,{data:B,children:[(0,r.jsx)(s.G,{dataKey:"value",type:k,fill:`url(#${N})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:I,strokeWidth:C,fillOpacity:1,...T}),(0,r.jsx)("defs",{children:(0,r.jsx)(u.s,{id:N,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:w,withGradient:A})})]})})})});g.displayName="@mantine/charts/Sparkline",g.classes=x},72305:(e,n,t)=>{"use strict";t.d(n,{p:()=>l});var r=t(6029),a=t(55729),o=t(38774),i=t(70204),s=t(69329);let l={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return(0,r.jsxs)(r.Fragment,{children:[(0,a.createElement)(o.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,a.createElement)(i.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},77409:(e,n,t)=>{"use strict";t.d(n,{Q:()=>N});var r=t(6029),a=t(55729),o=t(13297),i=t(93463),s=t(40684),l=t(56721),c=t(64370),d=t(8454),h=t(2893),p=t(35555),m=t(47122),u=t(31292),x=t(33987),f=t(21351),j=t(8411),g=t(38919),v=t(49643),y=t(38757),b=t(15583),A=t(76320),w=t(48101),k=t(42738),C=t(58486),M=t(52345),I=t(34483);function T({offset:e,id:n,colors:t,fillOpacity:a}){let o=(0,v.xd)();return(0,r.jsxs)("linearGradient",{id:n,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:e,stopColor:(0,f.r)(t[0],o),stopOpacity:a??.2}),(0,r.jsx)("stop",{offset:e,stopColor:(0,f.r)(t[1],o),stopOpacity:a??.2})]})}function P(e){return`${(100*e).toFixed(0)}%`}T.displayName="@mantine/charts/AreaSplit";let S={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},O=(0,x.V)((e,{textColor:n,gridColor:t})=>({root:{"--chart-text-color":n?(0,f.r)(n,e):void 0,"--chart-grid-color":t?(0,f.r)(t,e):void 0}})),N=(0,j.P9)((e,n)=>{let t=(0,g.Y)("AreaChart",S,e),{classNames:x,className:j,style:N,styles:B,unstyled:L,vars:D,data:F,series:z,withGradient:E,dataKey:q,withXAxis:G,withYAxis:V,curveType:$,gridProps:W,withDots:H,tickLine:_,strokeDasharray:Y,gridAxis:R,unit:K,yAxisProps:J,xAxisProps:Q,dotProps:X,activeDotProps:Z,strokeWidth:U,tooltipAnimationDuration:ee,type:en,legendProps:et,tooltipProps:er,withLegend:ea,withTooltip:eo,areaChartProps:ei,fillOpacity:es,splitColors:el,splitOffset:ec,connectNulls:ed,onMouseLeave:eh,orientation:ep,referenceLines:em,dir:eu,valueFormatter:ex,children:ef,areaProps:ej,xAxisLabel:eg,yAxisLabel:ev,withRightYAxis:ey,rightYAxisLabel:eb,rightYAxisProps:eA,withPointLabels:ew,gridColor:ek,textColor:eC,attributes:eM,...eI}=t,eT=(0,v.xd)(),eP=(0,a.useId)(),eS=`${eP}-split`,eO=(ee||0)>0,eN="boolean"==typeof E?E:"default"===en,eB="stacked"===en||"percent"===en,[eL,eD]=(0,a.useState)(null),eF=null!==eL,{resolvedClassNames:ez,resolvedStyles:eE}=(0,y.Y)({classNames:x,styles:B,props:t}),eq=(0,b.I)({name:"AreaChart",classes:C.A,props:t,className:j,style:N,classNames:x,styles:B,unstyled:L,attributes:eM,vars:D,varsResolver:O}),eG=z.map(e=>{let n=(0,f.r)(e.color,eT),t=eF&&eL!==e.name;return(0,a.createElement)(o.G,{...eq("area"),activeDot:{fill:eT.white,stroke:n,strokeWidth:2,r:4,...Z},dot:{fill:n,fillOpacity:+!t,strokeWidth:2,r:4,...X},key:e.name,name:e.name,type:$,dataKey:e.name,fill:"none",strokeWidth:U,stroke:"none",isAnimationActive:!1,connectNulls:ed,stackId:eB?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ej?ej(e):ej})}),eV=z.map(e=>{let n=`${eP}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,t=(0,f.r)(e.color,eT),i=eF&&eL!==e.name;return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)(I.s,{color:t,withGradient:eN,id:n,fillOpacity:es})}),(0,r.jsx)(o.G,{...eq("area"),activeDot:!1,dot:!1,name:e.name,type:e.curveType??$,dataKey:e.name,fill:"split"===en?`url(#${eS})`:`url(#${n})`,strokeWidth:U,stroke:t,isAnimationActive:!1,connectNulls:ed,stackId:eB?"stack":void 0,fillOpacity:+!i,strokeOpacity:i?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ew?(0,r.jsx)(M.x,{valueFormatter:ex}):void 0,..."function"==typeof ej?ej(e):ej})]},e.name)}),e$=em?.map((e,n)=>{let t=(0,f.r)(e.color,eT);return(0,r.jsx)(i.e,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eq("referenceLine")},n)}),eW="percent"===en?P:ex,eH={axisLine:!1,..."vertical"===ep?{dataKey:q,type:"category"}:{type:"number"},tickLine:"none"!==R&&("y"===_||"xy"===_)&&{stroke:"currentColor"},allowDecimals:!0,unit:K,tickFormatter:"vertical"===ep?void 0:eW,...eq("axis")};return(0,r.jsx)(A.a,{ref:n,...eq("root"),onMouseLeave:e=>{eD(null),eh?.(e)},dir:eu||"ltr",...eI,children:(0,r.jsx)(s.u,{...eq("container"),children:(0,r.jsxs)(l.Q,{data:F,stackOffset:"percent"===en?"expand":void 0,layout:ep,margin:{bottom:eg?30:void 0,left:ev?10:void 0,right:ev?5:void 0},...ei,children:[e$,ea&&(0,r.jsx)(c.s,{verticalAlign:"top",content:e=>(0,r.jsx)(w._,{payload:e.payload,onHighlight:eD,legendPosition:et?.verticalAlign||"top",classNames:ez,styles:eE,series:z,attributes:eM}),...et}),(0,r.jsx)(d.d,{strokeDasharray:Y,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...eq("grid"),...W}),(0,r.jsxs)(h.W,{hide:!G,..."vertical"===ep?{type:"number"}:{dataKey:q},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==R&&("x"===_||"xy"===_)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ep?eW:void 0,...eq("axis"),...Q,children:[eg&&(0,r.jsx)(p.J,{position:"insideBottom",offset:-20,fontSize:12,...eq("axisLabel"),children:eg}),Q?.children]}),(0,r.jsxs)(m.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!V,...eH,...J,children:[ev&&(0,r.jsx)(p.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eq("axisLabel"),children:ev}),J?.children]}),(0,r.jsxs)(m.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ey,...eH,...eA,children:[eb&&(0,r.jsx)(p.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eq("axisLabel"),children:eb}),J?.children]}),eo&&(0,r.jsx)(u.m,{animationDuration:ee,isAnimationActive:eO,position:"vertical"===ep?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Y},content:({label:e,payload:n,labelFormatter:t})=>(0,r.jsx)(k.I,{label:t&&n?t(e,n):e,payload:n,unit:K,classNames:ez,styles:eE,series:z,valueFormatter:ex,attributes:eM}),...er}),"split"===en&&(0,r.jsx)("defs",{children:(0,r.jsx)(T,{colors:el,id:eS,offset:ec??function({data:e,series:n}){return 1===n.length?function({data:e,dataKey:n}){let t=Math.max(...e.map(e=>e[n])),r=Math.min(...e.map(e=>e[n]));return t<=0?0:r>=0?1:t/(t-r)}({data:e,dataKey:n[0].name}):.5}({data:F,series:z}),fillOpacity:es})}),eV,H&&eG,ef]})})})});N.classes=C.A,N.displayName="@mantine/charts/AreaChart"},80239:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});var r=t(6029),a=t(16285),o=t(81306),i=t(38018),s=t(6527),l=t(52824),c=t(50644),d=t(47900),h=t(16196),p=t(72305),m=t(37703),u=t(64059),x=t(81247),f=t(99132),j=t(65308),g=t(38547),v=t(5262);let y=(0,g.P)(v.XZ.Changelog740);function b(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Demo:t,InstallScript:g}=n;return t||w("Demo",!0),g||w("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"mantinecharts",children:"@mantine/charts"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/charts/getting-started/",children:"@mantine/charts"})," package provides a set of components\nto build charts and graphs. All components are based on ",(0,r.jsx)(n.a,{href:"https://recharts.org/en-US/",children:"recharts"}),".\nCurrently, the package provides ",(0,r.jsx)(n.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,r.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"}),",\n",(0,r.jsx)(n.a,{href:"/charts/line-chart",children:"LineChart"})," and ",(0,r.jsx)(n.a,{href:"/charts/sparkline",children:"Sparkline"})," components.\nMore components will be added in the next minor releases."]}),"\n",(0,r.jsx)(n.h2,{id:"areachart-component",children:"AreaChart component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/charts/area-chart",children:"AreaChart"})," component:"]}),"\n",(0,r.jsx)(t,{data:o.O}),"\n",(0,r.jsx)(n.h2,{id:"linechart-component",children:"LineChart component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/charts/line-chart",children:"LineChart"})," component:"]}),"\n",(0,r.jsx)(t,{data:i.o}),"\n",(0,r.jsx)(n.h2,{id:"barchart-component",children:"BarChart component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," component:"]}),"\n",(0,r.jsx)(t,{data:s.V}),"\n",(0,r.jsx)(n.h2,{id:"sparkline-component",children:"Sparkline component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/charts/sparkline",children:"Sparkline"})," component:"]}),"\n",(0,r.jsx)(t,{data:l.C}),"\n",(0,r.jsx)(n.h2,{id:"oklch-colors-support",children:"OKLCH colors support"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use ",(0,r.jsx)(n.a,{href:"https://oklch.com/",children:"OKLCH"})," colors in ",(0,r.jsx)(n.code,{children:"theme.colors"}),".\nOKLCH color model has ",(0,r.jsx)(n.a,{href:"https://caniuse.com/mdn-css_types_color_oklch",children:"88.18% browser support"}),",\nit is supported in all modern browsers. OKLCH model provides 30% more colors than HSL model and\nhas ",(0,r.jsx)(n.a,{href:"https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl",children:"several other advantages"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Example of adding OKLCH color to the theme:"}),"\n",(0,r.jsx)(t,{data:c.y}),"\n",(0,r.jsx)(n.h2,{id:"autocontrast",children:"autoContrast"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.code,{children:"theme.autoContrast"})," property controls whether text color should be changed based on the given ",(0,r.jsx)(n.code,{children:"color"})," prop\nin the following components:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/alert",children:"Alert"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/avatar",children:"Avatar"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/nav-link",children:"NavLink"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/radio",children:"Radio"})," with ",(0,r.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tabs",children:"Tabs"})," with ",(0,r.jsx)(n.code,{children:'variant="pills"'})," only"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/segmented-control",children:"SegmentedControl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/pagination",children:"Pagination"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/indicator",children:"Indicator"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/core/timeline",children:"Timeline"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})}),"\n",(0,r.jsxs)(n.li,{children:["All ",(0,r.jsx)(n.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components that are based on ",(0,r.jsx)(n.a,{href:"/dates/calendar",children:"Calendar"})," component"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"autoContrast"})," can be set globally on the theme level or individually for each component via ",(0,r.jsx)(n.code,{children:"autoContrast"})," prop,\nexcept for ",(0,r.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," and ",(0,r.jsx)(n.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components, which only support global theme setting."]}),"\n",(0,r.jsx)(t,{data:d.s}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"autoContrast"})," checks whether the given color luminosity is above or below the ",(0,r.jsx)(n.code,{children:"luminanceThreshold"})," value\nand changes text color to either ",(0,r.jsx)(n.code,{children:"theme.white"})," or ",(0,r.jsx)(n.code,{children:"theme.black"})," accordingly:"]}),"\n",(0,r.jsx)(t,{data:h.w}),"\n",(0,r.jsx)(n.h2,{id:"color-functions-improvements",children:"Color functions improvements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alpha"}),", ",(0,r.jsx)(n.code,{children:"lighten"})," and ",(0,r.jsx)(n.code,{children:"darken"})," functions now support CSS variables (with ",(0,r.jsx)(n.a,{href:"https://caniuse.com/mdn-css_types_color_color-mix",children:"color-mix"}),") and OKLCH colors.\nAll functions are available both in ",(0,r.jsx)(n.code,{children:"@mantine/core"})," (",(0,r.jsx)(n.code,{children:".ts"}),"/",(0,r.jsx)(n.code,{children:".js"})," files) and ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," (",(0,r.jsx)(n.code,{children:".css"})," files, requires version 1.12.0 or higher)."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo-alpha {\n  color: alpha(var(--mantine-color-red-4), 0.5);\n  border: 1px solid alpha(#ffc, 0.2);\n}\n\n.demo-lighten-darken {\n  color: lighten(var(--mantine-color-red-4), 0.5);\n  border: 1px solid darken(#ffc, 0.2);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo-alpha {\n  color: color-mix(\n    in srgb,\n    var(--mantine-color-red-4),\n    transparent 50%\n  );\n  border: 1px solid color-mix(in srgb, #ffc, transparent 80%);\n}\n\n.demo-lighten-darken {\n  color: color-mix(in srgb, var(--mantine-color-red-4), white 50%);\n  border: 1px solid color-mix(in srgb, #ffc, black 20%);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:".ts"}),"/",(0,r.jsx)(n.code,{children:".js"})," files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { alpha, lighten } from '@mantine/core';\n\nalpha('#4578FC', 0.45); // -> rgba(69, 120, 252, 0.45)\nalpha('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), transparent 26%)\n\nlighten('#4578FC', 0.45); // -> #a3c1ff\nlighten('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), white 74%)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"alpha"})," function is a replacement for ",(0,r.jsx)(n.code,{children:"rgba"}),". It was renamed to\nhave a more clear meaning, as it can now be used with CSS variables and OKLCH colors.\n",(0,r.jsx)(n.code,{children:"rgba"})," function is still available as an alias for ",(0,r.jsx)(n.code,{children:"alpha"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"enhancegetinputprops",children:"enhanceGetInputProps"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/form"})," now supports ",(0,r.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),". ",(0,r.jsx)(n.code,{children:"enhanceGetInputProps"})," is a function that can be used to add additional props to the object returned by ",(0,r.jsx)(n.code,{children:"form.getInputProps"}),".\nYou can define it in ",(0,r.jsx)(n.code,{children:"useForm"})," hook options. Its argument is an object with the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"inputProps"})," – object returned by ",(0,r.jsx)(n.code,{children:"form.getInputProps"})," by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"field"})," – field path, first argument of ",(0,r.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"user.email"}),", ",(0,r.jsx)(n.code,{children:"users.0.name"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"})," – second argument of ",(0,r.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,r.jsx)(n.code,{children:"{ type: 'checkbox' }"}),", can be used to pass additional\noptions to ",(0,r.jsx)(n.code,{children:"enhanceGetInputProps"})," function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"form"})," – form instance"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of using ",(0,r.jsx)(n.code,{children:"enhanceGetInputProps"})," to disable input based on field path:"]}),"\n",(0,r.jsx)(t,{data:p.p}),"\n",(0,r.jsxs)(n.p,{children:["Example of using ",(0,r.jsx)(n.code,{children:"enhanceGetInputProps"})," to add additional props to the input based on option passed to ",(0,r.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,r.jsx)(t,{data:m.F}),"\n",(0,r.jsx)(n.h2,{id:"forminitialize",children:"form.initialize"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/form"})," now supports ",(0,r.jsx)(n.code,{children:"form.initialize"})," handler."]}),"\n",(0,r.jsxs)(n.p,{children:["When called ",(0,r.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,r.jsx)(n.code,{children:"initialValues"})," and ",(0,r.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,r.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,r.jsx)(t,{data:u.n}),"\n",(0,r.jsxs)(n.p,{children:["Example with ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,r.jsx)(n.code,{children:"readOnly"})," or ",(0,r.jsx)(n.code,{children:"disabled"})," on all form fields before\n",(0,r.jsx)(n.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,r.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,r.jsx)(t,{data:x.l}),"\n",(0,r.jsx)(n.h2,{id:"valibot-form-resolver",children:"valibot form resolver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/form"})," now supports ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/mantine-form-valibot-resolver",children:"validbot schema resolver"}),":"]}),"\n",(0,r.jsx)(g,{packages:"valibot mantine-form-valibot-resolver"}),"\n",(0,r.jsx)(n.p,{children:"Basic fields validation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport {\n  email,\n  minLength,\n  minValue,\n  number,\n  object,\n  string,\n} from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst schema = object({\n  name: string([minLength(2, 'Name should have at least 2 letters')]),\n  email: string([email('Invalid email')]),\n  age: number([\n    minValue(18, 'You must be at least 18 to create an account'),\n  ]),\n});\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n    age: 16,\n  },\n  validate: valibotResolver(schema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  name: 'Name should have at least 2 letters',\n//  email: 'Invalid email',\n//  age: 'You must be at least 18 to create an account'\n// }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nested fields validation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport { minLength, object, string } from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst nestedSchema = object({\n  nested: object({\n    field: string([\n      minLength(2, 'Field should have at least 2 letters'),\n    ]),\n  }),\n});\n\nconst form = useForm({\n  initialValues: {\n    nested: {\n      field: '',\n    },\n  },\n  validate: valibotResolver(nestedSchema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  'nested.field': 'Field should have at least 2 letters',\n// }\n"})}),"\n",(0,r.jsx)(n.p,{children:"List fields validation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { valibotResolver } from 'mantine-form-valibot-resolver';\nimport { array, minLength, object, string } from 'valibot';\nimport { useForm } from '@mantine/form';\n\nconst listSchema = object({\n  list: array(\n    object({\n      name: string([\n        minLength(2, 'Name should have at least 2 letters'),\n      ]),\n    })\n  ),\n});\n\nconst form = useForm({\n  initialValues: {\n    list: [{ name: '' }],\n  },\n  validate: valibotResolver(listSchema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  'list.0.name': 'Name should have at least 2 letters',\n// }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"scrollarea-scrollbars-prop",children:"ScrollArea scrollbars prop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(n.code,{children:"scrollbars"})," prop, which allows controlling directions at which scrollbars should be rendered.\nSupported values are ",(0,r.jsx)(n.code,{children:"x"}),", ",(0,r.jsx)(n.code,{children:"y"})," and ",(0,r.jsx)(n.code,{children:"xy"}),". If ",(0,r.jsx)(n.code,{children:'scrollbars="y"'})," is set, only the vertical scrollbar will be rendered, and it will not be possible to scroll horizontally:"]}),"\n",(0,r.jsx)(t,{data:f.S}),"\n",(0,r.jsx)(n.h2,{id:"title-lineclamp-prop",children:"Title lineClamp prop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/title",children:"Title"})," component now supports ",(0,r.jsx)(n.code,{children:"lineClamp"})," prop, which allows truncating text after a specified number of lines:"]}),"\n",(0,r.jsx)(t,{data:j.I}),"\n",(0,r.jsx)(n.h2,{id:"primary-color-css-variables",children:"Primary color CSS variables"}),"\n",(0,r.jsx)(n.p,{children:"CSS variables for primary color are now available, you can use the following variables in your styles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"--mantine-primary-color-0\n--mantine-primary-color-1\n--mantine-primary-color-2\n--mantine-primary-color-3\n--mantine-primary-color-4\n--mantine-primary-color-5\n--mantine-primary-color-6\n--mantine-primary-color-7\n--mantine-primary-color-8\n--mantine-primary-color-9\n--mantine-primary-color-contrast\n--mantine-primary-color-filled\n--mantine-primary-color-filled-hover\n--mantine-primary-color-light\n--mantine-primary-color-light-hover\n--mantine-primary-color-light-color\n"})}),"\n",(0,r.jsx)(n.h2,{id:"help-center",children:"Help center"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://help.mantine.dev/",children:"Help center"})," is a new website with guides, tutorials and frequently\nasked questions. Currently, it has 14 questions, more FAQs will be added in the next releases."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/data-grid-i-need",children:"Is there DataGrid component that I can use with Mantine?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/mantine-provider-missing",children:"MantineProvider was not found in component tree. What should I do?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/server-components",children:"Can I use Mantine components as server components?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-cra",children:"Can I use Mantine with Create React App (CRA)?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-setup-stylelint",children:"How can I lint CSS files?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-update-dependencies",children:"How to update Mantine dependencies?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-add-hover-styles",children:"How can I add hover styles to an element?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-get-color-scheme-value-in-js",children:"How can I get current color scheme value in JavaScript?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"Can I use private CSS variables to style components?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/disable-all-inputs-in-form",children:"How can I disable all inputs/inputs group inside form?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-use-dropzone-with-form",children:"How to use Dropzone with @mantine/form?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-call-function-when-modal-closes",children:"How to call a function when Modal/Drawer closes and animation completes?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/how-to-prevent-modal-from-closing",children:"How to prevent Modal from closing?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"What is the difference between searchable Select and Autocomplete?"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/form/get-input-props",children:"form.getInputProps"})," guide now has a separate page. It describes ",(0,r.jsx)(n.code,{children:"form.getInputProps"}),", ",(0,r.jsx)(n.code,{children:"enhanceGetInputProps"})," and how to integrate ",(0,r.jsx)(n.code,{children:"form.getInputProps"})," with custom inputs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/hooks/use-merged-ref/#assignref-function",children:"assignRef"})," function documentation has been added."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/hooks/use-move/#clampusemoveposition",children:"clampUseMovePosition"})," function documentation has been added."]}),"\n",(0,r.jsxs)(n.li,{children:["Additional documentation about hook arguments and types has been added to ",(0,r.jsx)(n.a,{href:"/hooks/use-hotkeys",children:"use-hotkeys"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/hooks/use-list-state/#useliststatehandlers-type",children:"UseListStateHandlers type"})," documentation has been added."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/guides/functions-reference",children:"Functions reference"})," page has been added. Currently, it contains all functions that are exported from ",(0,r.jsx)(n.code,{children:"@mantine/hooks"})," package. It is planned to document functions from other packages in next releases."]}),"\n",(0,r.jsxs)(n.li,{children:["Examples on how to change the close icon have been added to ",(0,r.jsx)(n.a,{href:"/core/drawer/#change-close-icon",children:"Drawer"})," and ",(0,r.jsx)(n.a,{href:"/core/modal/#change-close-icon",children:"Modal"})," components."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"variantColorsResolver"})," demos have been added to ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and ",(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," components."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/tiptap",children:"RichTextEditor"})," no longer depends on ",(0,r.jsx)(n.code,{children:"@tabler/icons"})," package. It is no longer required to install ",(0,r.jsx)(n.code,{children:"@tabler/icons"})," package to use ",(0,r.jsx)(n.code,{children:"RichTextEditor"})," component. Icons used in the editor are now a part of the ",(0,r.jsx)(n.code,{children:"@mantine/tiptap"})," package. This change improves bundling performance in several cases (mostly when using ",(0,r.jsx)(n.code,{children:"RichTextEditor"})," in Next.js apps)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," component now supports ",(0,r.jsx)(n.code,{children:"circle"})," prop which makes the badge round."]}),"\n",(0,r.jsxs)(n.li,{children:["You can now reference theme values in ",(0,r.jsx)(n.code,{children:"ff"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," with ",(0,r.jsx)(n.code,{children:"mono"}),", ",(0,r.jsx)(n.code,{children:"text"})," and ",(0,r.jsx)(n.code,{children:"heading"})," values: ",(0,r.jsx)(n.code,{children:'<Box ff="mono" />'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/tiptap",children:"RichTextEditor"})," now has ",(0,r.jsx)(n.code,{children:"RichTextEditor.Undo"})," and ",(0,r.jsx)(n.code,{children:"RichTextEditor.Redo"})," controls."]}),"\n",(0,r.jsxs)(n.li,{children:["A new ",(0,r.jsx)(n.code,{children:"luminance"})," ",(0,r.jsx)(n.a,{href:"/styles/color-functions",children:"color function"})," was added. It returns color luminance as a number between 0 and 1."]}),"\n",(0,r.jsxs)(n.li,{children:["All components now support new ",(0,r.jsx)(n.code,{children:"flex"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," which allows setting ",(0,r.jsx)(n.code,{children:"flex"})," CSS property on the root element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/collapse",children:"Collapse"})," markup was reduced to single element, it can now be used in contexts that were previously not supported, for example, table rows."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stepHoldDelay"})," and ",(0,r.jsx)(n.code,{children:"stepHoldInterval"})," props have been added to ",(0,r.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mantinedev/mantine-form-zod-resolver",children:"mantine-form-zod-resolver"})," now supports ",(0,r.jsx)(n.code,{children:"errorPriority"})," configuration which allows controlling the order of errors specified in the schema. This feature requires updating ",(0,r.jsx)(n.code,{children:"mantine-form-zod-resolver"})," to version 1.1.0 or higher."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/close-button",children:"CloseButton"})," now supports ",(0,r.jsx)(n.code,{children:"icon"})," prop, which allows overriding default icon. It is useful when it is not possible to replace ",(0,r.jsx)(n.code,{children:"CloseButton"}),", for example, in ",(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/select/#onchange-handler",children:"Select"})," component now calls ",(0,r.jsx)(n.code,{children:"onChange"})," with an additional argument – option object. It contains ",(0,r.jsx)(n.code,{children:"label"}),", ",(0,r.jsx)(n.code,{children:"value"})," and optional ",(0,r.jsx)(n.code,{children:"disabled"})," properties."]}),"\n",(0,r.jsxs)(n.li,{children:["It is now possible to define CSS variables in ",(0,r.jsx)(n.code,{children:"styles"})," prop of all components."]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/hooks/use-in-viewport/",children:"use-in-viewport"})," hook"]}),"\n",(0,r.jsx)(n.li,{children:"All Vite templates have been updated to Vite 5.0 and Vitest 1.0"}),"\n"]})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(y,{...e,children:(0,r.jsx)(b,{...e})})}function w(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81306:(e,n,t)=>{"use strict";t.d(n,{O:()=>i});var r=t(6029),a=t(77409),o=t(90968);let i={type:"code",component:function(){return(0,r.jsx)(a.Q,{h:300,data:o.p,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.kZ,language:"tsx",fileName:"data.ts"}]}},86669:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-4-0",function(){return t(80239)}])},90968:(e,n,t)=>{"use strict";t.d(n,{EC:()=>i,EJ:()=>p,Zf:()=>o,d8:()=>h,dX:()=>d,kD:()=>l,kZ:()=>a,p:()=>r,sC:()=>c,v1:()=>s});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],a=`
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
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],i=`
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
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];
`,s=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],l=`
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
`,c=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
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
`,h=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},92205:(e,n,t)=>{"use strict";t.d(n,{E:()=>l});var r=t(32716),a=t(14693),o=t(2893),i=t(47122),s=t(83687),l=(0,r.gu)({chartName:"BarChart",GraphicalChild:a.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:i.h}],formatAxisMap:s.pr})},99132:(e,n,t)=>{"use strict";t.d(n,{S:()=>s});var r=t(6029),a=t(928),o=t(76320),i=t(59032);let s={type:"code",component:function(){return(0,r.jsx)(a.F,{w:300,h:200,scrollbars:"y",children:(0,r.jsx)(o.a,{w:600,children:(0,r.jsx)(i.U,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`}}},e=>{e.O(0,[29040,60454,2027,13297,99949,38547,69329,1490,30809,90636,46593,38792],()=>e(e.s=86669)),_N_E=e.O()}]);
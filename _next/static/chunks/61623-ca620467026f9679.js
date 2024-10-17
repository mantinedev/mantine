"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61623],{25556:function(e,t,a){a.d(t,{K:function(){return r}});var r=function(){return null};r.displayName="XAxis",r.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,t,a){a.d(t,{B:function(){return r}});var r=function(){return null};r.displayName="YAxis",r.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},57316:function(e,t,a){a.d(t,{F:function(){return i}});var r=a(52322),o=a(67893),n=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(o.w,{h:300,data:n.c8,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.FH,language:"tsx",fileName:"data.ts"}]}},10913:function(e,t,a){a.d(t,{o:function(){return i}});var r=a(52322),o=a(67893),n=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(o.w,{h:300,data:n.DR,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.ZW,language:"tsx",fileName:"data.ts"}]}},16690:function(e,t,a){a.d(t,{$o:function(){return i},DR:function(){return c},FH:function(){return d},Mm:function(){return s},ZW:function(){return u},aT:function(){return r},c8:function(){return p},op:function(){return o},ux:function(){return n},xo:function(){return l}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,n=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
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
`,l=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],s=`
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
`,p=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],d=`
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
`,c=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],u=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},67893:function(e,t,a){a.d(t,{w:function(){return S}});var r=a(52322),o=a(2784),n=a(63004),i=a(30840),l=a(18205),s=a(12624),p=a(25556),d=a(3131),c=a(69524),u=(0,s.z)({chartName:"LineChart",GraphicalChild:n.x,axisComponents:[{axisType:"xAxis",AxisComp:p.K},{axisType:"yAxis",AxisComp:d.B}],formatAxisMap:c.t9}),m=a(55734),f=a(81224),x=a(55484),h=a(21154),A=a(11200),g=a(13588),v=a(82027),y=a(38483),M=a(68755),k=a(51477),C=a(46690),b=a(28559),w=a(66178),D=a(46293),j=a(50425),L=a(13069),P=a(7064);let T={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},O=(0,A.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,g.p)(t,e):void 0,"--chart-grid-color":a?(0,g.p)(a,e):void 0}})),S=(0,v.d5)((e,t)=>{let a=(0,y.w)("LineChart",T,e),{classNames:s,className:c,style:A,styles:v,unstyled:S,vars:N,data:F,withLegend:z,legendProps:I,series:B,onMouseLeave:K,dataKey:W,withTooltip:$,withXAxis:_,withYAxis:E,gridAxis:J,tickLine:Y,xAxisProps:Z,yAxisProps:G,unit:R,tooltipAnimationDuration:H,strokeDasharray:X,gridProps:q,tooltipProps:Q,referenceLines:U,withDots:V,dotProps:ee,activeDotProps:et,strokeWidth:ea,lineChartProps:er,connectNulls:eo,fillOpacity:en,curveType:ei,orientation:el,dir:es,valueFormatter:ep,children:ed,lineProps:ec,xAxisLabel:eu,yAxisLabel:em,type:ef,gradientStops:ex,withRightYAxis:eh,rightYAxisLabel:eA,rightYAxisProps:eg,withPointLabels:ev,...ey}=a,eM=(0,M.rZ)(),[ek,eC]=(0,o.useState)(null),eb=null!==ek,{resolvedClassNames:ew,resolvedStyles:eD}=(0,k.h)({classNames:s,styles:v,props:a}),ej=(0,C.y)({name:"LineChart",classes:P.Z,props:a,className:c,style:A,classNames:s,styles:v,unstyled:S,vars:N,varsResolver:O}),eL=(0,w.M)(),eP=`line-chart-gradient-${eL}`,eT=ex?.map(e=>r.jsx("stop",{offset:`${e.offset}%`,stopColor:g.p(e.color,eM)},e.color)),eO=B.map(e=>{let t=(0,g.p)(e.color,eM),a=eb&&ek!==e.name;return(0,o.createElement)(n.x,{...ej("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!V&&{fillOpacity:a?0:1,strokeOpacity:a?0:1,strokeWidth:1,fill:"gradient"===ef?"var(--mantine-color-gray-7)":t,stroke:"gradient"===ef?"white":t,...ee},activeDot:!!V&&{fill:"gradient"===ef?"var(--mantine-color-gray-7)":t,stroke:"gradient"===ef?"white":t,...et},fill:t,stroke:"gradient"===ef?`url(#${eP})`:t,strokeWidth:ea,isAnimationActive:!1,fillOpacity:a?0:en,strokeOpacity:a?.5:en,connectNulls:eo,type:ei,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ev?(0,r.jsx)(L.S,{}):void 0,..."function"==typeof ec?ec(e):ec})}),eS=U?.map((e,t)=>{let a=g.p(e.color,eM);return r.jsx(i.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ej("referenceLine")},t)}),eN={axisLine:!1,..."vertical"===el?{dataKey:W,type:"category"}:{type:"number"},tickLine:!!("none"!==J&&("y"===Y||"xy"===Y))&&{stroke:"currentColor"},allowDecimals:!0,unit:R,tickFormatter:"vertical"===el?void 0:ep,...ej("axis")};return(0,r.jsx)(b.x,{ref:t,...ej("root"),onMouseLeave:e=>{eC(null),K?.(e)},dir:es||"ltr",...ey,children:(0,r.jsx)(l.h,{...ej("container"),children:(0,r.jsxs)(u,{data:F,layout:el,margin:{bottom:eu?30:void 0,left:em?10:void 0,right:em?5:void 0},...er,children:["gradient"===ef&&(0,r.jsx)("defs",{children:(0,r.jsx)("linearGradient",{id:eP,x1:"0",y1:"0",x2:"0",y2:"1",children:eT})}),z&&(0,r.jsx)(m.D,{verticalAlign:"top",content:e=>(0,r.jsx)(D.Q,{payload:e.payload,onHighlight:eC,legendPosition:I?.verticalAlign||"top",classNames:ew,styles:eD,series:B,showColor:"gradient"!==ef}),...I}),(0,r.jsxs)(p.K,{hide:!_,..."vertical"===el?{type:"number"}:{dataKey:W},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==J&&("x"===Y||"xy"===Y))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===el?ep:void 0,...ej("axis"),...Z,children:[eu&&(0,r.jsx)(f._,{position:"insideBottom",offset:-20,fontSize:12,...ej("axisLabel"),children:eu}),Z?.children]}),(0,r.jsxs)(d.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!E,...eN,...G,children:[em&&(0,r.jsx)(f._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ej("axisLabel"),children:em}),G?.children]}),(0,r.jsxs)(d.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eN,...eg,children:[eA&&(0,r.jsx)(f._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ej("axisLabel"),children:eA}),G?.children]}),(0,r.jsx)(x.q,{strokeDasharray:X,vertical:"y"===J||"xy"===J,horizontal:"x"===J||"xy"===J,...ej("grid"),...q}),$&&(0,r.jsx)(h.u,{animationDuration:H,isAnimationActive:0!==H,position:"vertical"===el?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:X},content:({label:e,payload:t})=>(0,r.jsx)(j.h,{label:e,payload:t,unit:R,classNames:ew,styles:eD,series:B,valueFormatter:ep,showColor:"gradient"!==ef}),...Q}),eO,eS,ed]})})})});S.displayName="@mantine/charts/LineChart",S.classes=P.Z},13069:function(e,t,a){a.d(t,{S:function(){return o}});var r=a(52322);function o({x:e,y:t,value:a}){return(0,r.jsx)("g",{transform:`translate(${e},${t})`,children:(0,r.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:a})})}}}]);
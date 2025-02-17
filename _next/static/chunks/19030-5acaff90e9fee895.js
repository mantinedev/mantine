"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19030],{21686:(e,a,t)=>{t.d(a,{x:()=>s});var r=t(31085),o=t(8667),l=t(78433);let s={type:"code",component:function(){return(0,r.jsx)(o.Q,{h:300,data:l.p,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.kZ,language:"tsx",fileName:"data.ts"}]}},87611:(e,a,t)=>{t.d(a,{G:()=>s});var r=t(31085),o=t(8667),l=t(78433);let s={type:"code",component:function(){return(0,r.jsx)(o.Q,{h:300,data:l.p,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.kZ,language:"tsx",fileName:"data.ts"}]}},78433:(e,a,t)=>{t.d(a,{EC:()=>s,EJ:()=>m,Zf:()=>l,d8:()=>c,dX:()=>p,kD:()=>i,kZ:()=>o,p:()=>r,sC:()=>d,v1:()=>n});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,l=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],s=`
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
`,d=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],p=`
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
`,c=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],m=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},8667:(e,a,t)=>{t.d(a,{Q:()=>N});var r=t(31085),o=t(14041),l=t(22821),s=t(67393),n=t(79874),i=t(28255),d=t(23361),p=t(12012),c=t(98331),m=t(94437),u=t(51492),x=t(37662),h=t(7098),y=t(51606),A=t(6754),f=t(29686),v=t(92408),g=t(36456),M=t(69564),j=t(34056),k=t(50571),b=t(93581),C=t(6804),I=t(28970);function O({offset:e,id:a,colors:t,fillOpacity:o}){let l=(0,v.xd)();return(0,r.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:e,stopColor:(0,y.r)(t[0],l),stopOpacity:o??.2}),(0,r.jsx)("stop",{offset:e,stopColor:(0,y.r)(t[1],l),stopOpacity:o??.2})]})}O.displayName="@mantine/charts/AreaSplit";var _=t(94563);function T(e){return`${(100*e).toFixed(0)}%`}let P={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},L=(0,h.V)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,y.r)(a,e):void 0,"--chart-grid-color":t?(0,y.r)(t,e):void 0}})),N=(0,A.P9)((e,a)=>{let t=(0,f.Y)("AreaChart",P,e),{classNames:h,className:A,style:N,styles:D,unstyled:w,vars:K,data:S,series:z,withGradient:F,dataKey:G,withXAxis:E,withYAxis:B,curveType:$,gridProps:J,withDots:W,tickLine:Y,strokeDasharray:Z,gridAxis:Q,unit:U,yAxisProps:X,xAxisProps:q,dotProps:H,activeDotProps:R,strokeWidth:V,tooltipAnimationDuration:ee,type:ea,legendProps:et,tooltipProps:er,withLegend:eo,withTooltip:el,areaChartProps:es,fillOpacity:en,splitColors:ei,splitOffset:ed,connectNulls:ep,onMouseLeave:ec,orientation:em,referenceLines:eu,dir:ex,valueFormatter:eh,children:ey,areaProps:eA,xAxisLabel:ef,yAxisLabel:ev,withRightYAxis:eg,rightYAxisLabel:eM,rightYAxisProps:ej,withPointLabels:ek,gridColor:eb,textColor:eC,...eI}=t,eO=(0,v.xd)(),e_=(0,o.useId)(),eT=`${e_}-split`,eP=(ee||0)>0,eL="boolean"==typeof F?F:"default"===ea,eN="stacked"===ea||"percent"===ea,[eD,ew]=(0,o.useState)(null),eK=null!==eD,{resolvedClassNames:eS,resolvedStyles:ez}=(0,g.Y)({classNames:h,styles:D,props:t}),eF=(0,M.I)({name:"AreaChart",classes:_.A,props:t,className:A,style:N,classNames:h,styles:D,unstyled:w,vars:K,varsResolver:L}),eG=z.map(e=>{let a=(0,y.r)(e.color,eO),t=eK&&eD!==e.name;return(0,o.createElement)(l.G,{...eF("area"),activeDot:{fill:eO.white,stroke:a,strokeWidth:2,r:4,...R},dot:{fill:a,fillOpacity:t?0:1,strokeWidth:2,r:4,...H},key:e.name,name:e.name,type:$,dataKey:e.name,fill:"none",strokeWidth:V,stroke:"none",isAnimationActive:!1,connectNulls:ep,stackId:eN?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof eA?eA(e):eA})}),eE=z.map(e=>{let a=`${e_}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,t=(0,y.r)(e.color,eO),s=eK&&eD!==e.name;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)(I.s,{color:t,withGradient:eL,id:a,fillOpacity:en})}),(0,r.jsx)(l.G,{...eF("area"),activeDot:!1,dot:!1,name:e.name,type:$,dataKey:e.name,fill:"split"===ea?`url(#${eT})`:`url(#${a})`,strokeWidth:V,stroke:t,isAnimationActive:!1,connectNulls:ep,stackId:eN?"stack":void 0,fillOpacity:s?0:1,strokeOpacity:s?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ek?(0,r.jsx)(C.x,{valueFormatter:eh}):void 0,..."function"==typeof eA?eA(e):eA})]},e.name)}),eB=eu?.map((e,a)=>{let t=y.r(e.color,eO);return r.jsx(s.e,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eF("referenceLine")},a)}),e$="percent"===ea?T:eh,eJ={axisLine:!1,..."vertical"===em?{dataKey:G,type:"category"}:{type:"number"},tickLine:!!("none"!==Q&&("y"===Y||"xy"===Y))&&{stroke:"currentColor"},allowDecimals:!0,unit:U,tickFormatter:"vertical"===em?void 0:e$,...eF("axis")};return(0,r.jsx)(j.a,{ref:a,...eF("root"),onMouseLeave:e=>{ew(null),ec?.(e)},dir:ex||"ltr",...eI,children:(0,r.jsx)(n.u,{...eF("container"),children:(0,r.jsxs)(i.Q,{data:S,stackOffset:"percent"===ea?"expand":void 0,layout:em,margin:{bottom:ef?30:void 0,left:ev?10:void 0,right:ev?5:void 0},...es,children:[eB,eo&&(0,r.jsx)(d.s,{verticalAlign:"top",content:e=>(0,r.jsx)(k._,{payload:e.payload,onHighlight:ew,legendPosition:et?.verticalAlign||"top",classNames:eS,styles:ez,series:z}),...et}),(0,r.jsx)(p.d,{strokeDasharray:Z,vertical:"y"===Q||"xy"===Q,horizontal:"x"===Q||"xy"===Q,...eF("grid"),...J}),(0,r.jsxs)(c.W,{hide:!E,..."vertical"===em?{type:"number"}:{dataKey:G},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Q&&("x"===Y||"xy"===Y))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===em?e$:void 0,...eF("axis"),...q,children:[ef&&(0,r.jsx)(m.J,{position:"insideBottom",offset:-20,fontSize:12,...eF("axisLabel"),children:ef}),q?.children]}),(0,r.jsxs)(u.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!B,...eJ,...X,children:[ev&&(0,r.jsx)(m.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eF("axisLabel"),children:ev}),X?.children]}),(0,r.jsxs)(u.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eg,...eJ,...ej,children:[eM&&(0,r.jsx)(m.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eF("axisLabel"),children:eM}),X?.children]}),el&&(0,r.jsx)(x.m,{animationDuration:ee,isAnimationActive:eP,position:"vertical"===em?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Z},content:({label:e,payload:a})=>(0,r.jsx)(b.I,{label:e,payload:a,unit:U,classNames:eS,styles:ez,series:z,valueFormatter:eh}),...er}),"split"===ea&&(0,r.jsx)("defs",{children:(0,r.jsx)(O,{colors:ei,id:eT,offset:ed??function({data:e,series:a}){return 1===a.length?function({data:e,dataKey:a}){let t=Math.max(...e.map(e=>e[a])),r=Math.min(...e.map(e=>e[a]));return t<=0?0:r>=0?1:t/(t-r)}({data:e,dataKey:a[0].name}):.5}({data:S,series:z}),fillOpacity:en})}),eE,W&&eG,ey]})})})});N.classes=_.A,N.displayName="@mantine/charts/AreaChart"},28970:(e,a,t)=>{t.d(a,{s:()=>o});var r=t(31085);function o({color:e,id:a,withGradient:t,fillOpacity:o}){return(0,r.jsx)(r.Fragment,{children:t?(0,r.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}o.displayName="@mantine/charts/AreaGradient"},50571:(e,a,t)=>{t.d(a,{_:()=>m});var r=t(31085),o=t(6754),l=t(29686),s=t(69564),n=t(14318),i=t(34056),d=t(88500),p={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c={},m=(0,o.P9)((e,a)=>{let t=(0,l.Y)("ChartLegend",c,e),{classNames:o,className:m,style:u,styles:x,unstyled:h,vars:y,payload:A,onHighlight:f,legendPosition:v,mod:g,series:M,showColor:j,centered:k,...b}=t,C=(0,s.I)({name:"ChartLegend",classes:p,props:t,className:m,style:u,classNames:o,styles:x,unstyled:h});if(!A)return null;let I=A.filter(e=>"none"!==e.color).map(e=>{let a=e.dataKey?.split(".").pop();return{...e,dataKey:a,payload:{...e.payload,name:a,dataKey:a}}}),O=(0,d.J)(M),_=I.map((e,a)=>(0,r.jsxs)("div",{...C("legendItem"),onMouseEnter:()=>f(e.dataKey),onMouseLeave:()=>f(null),"data-without-color":!1===j||void 0,children:[(0,r.jsx)(n.q,{color:e.color,size:12,...C("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...C("legendItemName"),children:O[e.dataKey]||e.dataKey})]},a));return(0,r.jsx)(i.a,{ref:a,mod:[{position:v,centered:k},g],...C("legend"),...b,children:_})});m.displayName="@mantine/charts/ChartLegend"},93581:(e,a,t)=>{t.d(a,{I:()=>h,r:()=>m});var r=t(31085),o=t(6754),l=t(29686),s=t(92408),n=t(69564),i=t(51606),d=t(34056),p=t(88500),c={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function m(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let a=e.name.search(/\./);if(a>=0){let t=e.name.substring(0,a),r={...e.payload[t]},o=Object.entries(e.payload).reduce((e,a)=>{let[r,o]=a;return r===t?e:{...e,[r]:o}},{});return{...e,name:e.name.substring(a+1),payload:{...o,...r}}}return e});return a?t.filter(e=>e.name===a):t}function u(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let x={type:"area",showColor:!0},h=(0,o.P9)((e,a)=>{let t=(0,l.Y)("ChartTooltip",x,e),{classNames:o,className:h,style:y,styles:A,unstyled:f,vars:v,payload:g,label:M,unit:j,type:k,segmentId:b,mod:C,series:I,valueFormatter:O,showColor:_,...T}=t,P=(0,s.xd)(),L=(0,n.I)({name:"ChartTooltip",classes:c,props:t,className:h,style:y,classNames:o,styles:A,unstyled:f});if(!g)return null;let N=m(g,b),D="scatter"===k?g[0]?.payload?.name:null,w=(0,p.J)(I),K=M||D,S=N.map(e=>(0,r.jsxs)("div",{"data-type":k,...L("tooltipItem"),children:[(0,r.jsxs)("div",{...L("tooltipItemBody"),children:[_&&(0,r.jsx)("svg",{...L("tooltipItemColor"),children:(0,r.jsx)("circle",{r:6,fill:(0,i.r)(e.color,P),width:12,height:12,cx:6,cy:6})}),(0,r.jsx)("div",{...L("tooltipItemName"),children:w[e.name]||e.name})]}),(0,r.jsxs)("div",{...L("tooltipItemData"),children:["function"==typeof O?O(u(e,k)):u(e,k),j||e.unit]})]},e?.key??e.name));return(0,r.jsxs)(d.a,{...L("tooltip"),mod:[{type:k},C],ref:a,...T,children:[K&&(0,r.jsx)("div",{...L("tooltipLabel"),children:K}),(0,r.jsx)("div",{...L("tooltipBody"),children:S})]})});h.displayName="@mantine/charts/ChartTooltip"},6804:(e,a,t)=>{t.d(a,{x:()=>o});var r=t(31085);function o({x:e,y:a,value:t,valueFormatter:o}){return(0,r.jsx)("g",{transform:`translate(${e},${a})`,children:(0,r.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:o?o(t):t})})}},94563:(e,a,t)=>{t.d(a,{A:()=>r});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},88500:(e,a,t)=>{t.d(a,{J:()=>r});function r(e){return e?e.reduce((e,a)=>{let t=a.name.search(/\./);return t>=0?e[a.name.substring(t+1)]=a.label:e[a.name]=a.label,e},{}):{}}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60214],{94884:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(52322),o=a(24634),n=a(99803);let l={type:"code",component:function(){return(0,r.jsx)(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},19055:function(e,t,a){a.d(t,{w:function(){return l}});var r=a(52322),o=a(24634),n=a(99803);let l={type:"code",component:function(){return(0,r.jsx)(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},99803:function(e,t,a){a.d(t,{$o:function(){return s},DR:function(){return c},Mm:function(){return p},ZW:function(){return m},aT:function(){return r},n1:function(){return n},op:function(){return o},ux:function(){return i},xo:function(){return d},zW:function(){return l}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,n=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],l=`
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
`,i=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],s=`
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
`},24634:function(e,t,a){a.d(t,{T:function(){return L}});var r=a(52322),o=a(2784),n=a(81073),l=a(30840),i=a(18205),s=a(50603),d=a(55734),p=a(55484),c=a(25556),m=a(81224),u=a(3131),f=a(21154),h=a(11200),x=a(13588),y=a(82027),A=a(38483),v=a(68755),g=a(51477),M=a(46690),j=a(28559),b=a(46293),k=a(50425),C=a(13069),I=a(32125);function T({offset:e,id:t,colors:a,fillOpacity:o}){let n=(0,v.rZ)();return(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:e,stopColor:(0,x.p)(a[0],n),stopOpacity:o??.2}),(0,r.jsx)("stop",{offset:e,stopColor:(0,x.p)(a[1],n),stopOpacity:o??.2})]})}T.displayName="@mantine/charts/AreaSplit";var O=a(7064);function _(e){return`${(100*e).toFixed(0)}%`}let w={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},D=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,x.p)(t,e):void 0,"--chart-grid-color":a?(0,x.p)(a,e):void 0}})),L=(0,y.d5)((e,t)=>{let a=(0,A.w)("AreaChart",w,e),{classNames:h,className:y,style:L,styles:N,unstyled:P,vars:K,data:S,series:z,withGradient:F,dataKey:B,withXAxis:Z,withYAxis:$,curveType:G,gridProps:E,withDots:W,tickLine:Q,strokeDasharray:R,gridAxis:U,unit:X,yAxisProps:q,xAxisProps:H,dotProps:Y,activeDotProps:J,strokeWidth:V,tooltipAnimationDuration:ee,type:et,legendProps:ea,tooltipProps:er,withLegend:eo,withTooltip:en,areaChartProps:el,fillOpacity:ei,splitColors:es,splitOffset:ed,connectNulls:ep,onMouseLeave:ec,orientation:em,referenceLines:eu,dir:ef,valueFormatter:eh,children:ex,areaProps:ey,xAxisLabel:eA,yAxisLabel:ev,withRightYAxis:eg,rightYAxisLabel:eM,rightYAxisProps:ej,withPointLabels:eb,...ek}=a,eC=(0,v.rZ)(),eI=(0,o.useId)(),eT=`${eI}-split`,eO=(ee||0)>0,e_="boolean"==typeof F?F:"default"===et,ew="stacked"===et||"percent"===et,[eD,eL]=(0,o.useState)(null),eN=null!==eD,{resolvedClassNames:eP,resolvedStyles:eK}=(0,g.h)({classNames:h,styles:N,props:a}),eS=(0,M.y)({name:"AreaChart",classes:O.Z,props:a,className:y,style:L,classNames:h,styles:N,unstyled:P,vars:K,varsResolver:D}),ez=z.map(e=>{let t=(0,x.p)(e.color,eC),a=eN&&eD!==e.name;return(0,o.createElement)(n.u,{...eS("area"),activeDot:{fill:eC.white,stroke:t,strokeWidth:2,r:4,...J},dot:{fill:t,fillOpacity:a?0:1,strokeWidth:2,r:4,...Y},key:e.name,name:e.name,type:G,dataKey:e.name,fill:"none",strokeWidth:V,stroke:"none",isAnimationActive:!1,connectNulls:ep,stackId:ew?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ey?ey(e):ey})}),eF=z.map(e=>{let t=`${eI}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,a=(0,x.p)(e.color,eC),l=eN&&eD!==e.name;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)(I.v,{color:a,withGradient:e_,id:t,fillOpacity:ei})}),(0,r.jsx)(n.u,{...eS("area"),activeDot:!1,dot:!1,name:e.name,type:G,dataKey:e.name,fill:"split"===et?`url(#${eT})`:`url(#${t})`,strokeWidth:V,stroke:a,isAnimationActive:!1,connectNulls:ep,stackId:ew?"stack":void 0,fillOpacity:l?0:1,strokeOpacity:l?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eb?(0,r.jsx)(C.S,{}):void 0,..."function"==typeof ey?ey(e):ey})]},e.name)}),eB=eu?.map((e,t)=>{let a=x.p(e.color,eC);return r.jsx(l.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eS("referenceLine")},t)}),eZ="percent"===et?_:eh,e$={axisLine:!1,..."vertical"===em?{dataKey:B,type:"category"}:{type:"number"},tickLine:!!("none"!==U&&("y"===Q||"xy"===Q))&&{stroke:"currentColor"},allowDecimals:!0,unit:X,tickFormatter:"vertical"===em?void 0:eZ,...eS("axis")};return(0,r.jsx)(j.x,{ref:t,...eS("root"),onMouseLeave:e=>{eL(null),ec?.(e)},dir:ef||"ltr",...ek,children:(0,r.jsx)(i.h,{...eS("container"),children:(0,r.jsxs)(s.T,{data:S,stackOffset:"percent"===et?"expand":void 0,layout:em,margin:{bottom:eA?30:void 0,left:ev?10:void 0,right:ev?5:void 0},...el,children:[eB,eo&&(0,r.jsx)(d.D,{verticalAlign:"top",content:e=>(0,r.jsx)(b.Q,{payload:e.payload,onHighlight:eL,legendPosition:ea?.verticalAlign||"top",classNames:eP,styles:eK,series:z}),...ea}),(0,r.jsx)(p.q,{strokeDasharray:R,vertical:"y"===U||"xy"===U,horizontal:"x"===U||"xy"===U,...eS("grid"),...E}),(0,r.jsxs)(c.K,{hide:!Z,..."vertical"===em?{type:"number"}:{dataKey:B},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==U&&("x"===Q||"xy"===Q))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===em?eZ:void 0,...eS("axis"),...H,children:[eA&&(0,r.jsx)(m._,{position:"insideBottom",offset:-20,fontSize:12,...eS("axisLabel"),children:eA}),H?.children]}),(0,r.jsxs)(u.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!$,...e$,...q,children:[ev&&(0,r.jsx)(m._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:ev}),q?.children]}),(0,r.jsxs)(u.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eg,...e$,...ej,children:[eM&&(0,r.jsx)(m._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eS("axisLabel"),children:eM}),q?.children]}),en&&(0,r.jsx)(f.u,{animationDuration:ee,isAnimationActive:eO,position:"vertical"===em?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:R},content:({label:e,payload:t})=>(0,r.jsx)(k.h,{label:e,payload:t,unit:X,classNames:eP,styles:eK,series:z,valueFormatter:eh}),...er}),"split"===et&&(0,r.jsx)("defs",{children:(0,r.jsx)(T,{colors:es,id:eT,offset:ed??function({data:e,series:t}){return 1===t.length?function({data:e,dataKey:t}){let a=Math.max(...e.map(e=>e[t])),r=Math.min(...e.map(e=>e[t]));return a<=0?0:r>=0?1:a/(a-r)}({data:e,dataKey:t[0].name}):.5}({data:S,series:z}),fillOpacity:ei})}),eF,W&&ez,ex]})})})});L.classes=O.Z,L.displayName="@mantine/charts/AreaChart"},32125:function(e,t,a){a.d(t,{v:function(){return o}});var r=a(52322);function o({color:e,id:t,withGradient:a,fillOpacity:o}){return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}o.displayName="@mantine/charts/AreaGradient"},46293:function(e,t,a){a.d(t,{Q:function(){return m}});var r=a(52322),o=a(82027),n=a(38483),l=a(46690),i=a(27009),s=a(28559),d=a(64438),p={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c={},m=(0,o.d5)((e,t)=>{let a=(0,n.w)("ChartLegend",c,e),{classNames:o,className:m,style:u,styles:f,unstyled:h,vars:x,payload:y,onHighlight:A,legendPosition:v,mod:g,series:M,showColor:j,centered:b,...k}=a,C=(0,l.y)({name:"ChartLegend",classes:p,props:a,className:m,style:u,classNames:o,styles:f,unstyled:h});if(!y)return null;let I=y.filter(e=>"none"!==e.color).map(e=>{let t=e.dataKey?.split(".").pop();return{...e,dataKey:t,payload:{...e.payload,name:t,dataKey:t}}}),T=(0,d.v)(M),O=I.map((e,t)=>(0,r.jsxs)("div",{...C("legendItem"),onMouseEnter:()=>A(e.dataKey),onMouseLeave:()=>A(null),"data-without-color":!1===j||void 0,children:[(0,r.jsx)(i.b,{color:e.color,size:12,...C("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...C("legendItemName"),children:T[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(s.x,{ref:t,mod:[{position:v,centered:b},g],...C("legend"),...k,children:O})});m.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,a){a.d(t,{h:function(){return h},X:function(){return m}});var r=a(52322),o=a(82027),n=a(38483),l=a(68755),i=a(46690),s=a(13588),d=a(28559),p=a(64438),c={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function m(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),r={...e.payload[a]},o=Object.entries(e.payload).reduce((e,t)=>{let[r,o]=t;return r===a?e:{...e,[r]:o}},{});return{...e,name:e.name.substring(t+1),payload:{...o,...r}}}return e});return t?a.filter(e=>e.name===t):a}function u(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let f={type:"area",showColor:!0},h=(0,o.d5)((e,t)=>{let a=(0,n.w)("ChartTooltip",f,e),{classNames:o,className:h,style:x,styles:y,unstyled:A,vars:v,payload:g,label:M,unit:j,type:b,segmentId:k,mod:C,series:I,valueFormatter:T,showColor:O,..._}=a,w=(0,l.rZ)(),D=(0,i.y)({name:"ChartTooltip",classes:c,props:a,className:h,style:x,classNames:o,styles:y,unstyled:A});if(!g)return null;let L=m(g,k),N="scatter"===b?g[0]?.payload?.name:null,P=(0,p.v)(I),K=M||N,S=L.map(e=>(0,r.jsxs)("div",{"data-type":b,...D("tooltipItem"),children:[(0,r.jsxs)("div",{...D("tooltipItemBody"),children:[O&&(0,r.jsx)("svg",{...D("tooltipItemColor"),children:(0,r.jsx)("circle",{r:6,fill:(0,s.p)(e.color,w),width:12,height:12,cx:6,cy:6})}),(0,r.jsx)("div",{...D("tooltipItemName"),children:P[e.name]||e.name})]}),(0,r.jsxs)("div",{...D("tooltipItemData"),children:["function"==typeof T?T(u(e,b)):u(e,b),j||e.unit]})]},e?.key??e.name));return(0,r.jsxs)(d.x,{...D("tooltip"),mod:[{type:b},C],ref:t,..._,children:[K&&(0,r.jsx)("div",{...D("tooltipLabel"),children:K}),(0,r.jsx)("div",{...D("tooltipBody"),children:S})]})});h.displayName="@mantine/charts/ChartTooltip"},13069:function(e,t,a){a.d(t,{S:function(){return o}});var r=a(52322);function o({x:e,y:t,value:a}){return(0,r.jsx)("g",{transform:`translate(${e},${t})`,children:(0,r.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:a})})}},7064:function(e,t,a){a.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,t,a){a.d(t,{v:function(){return r}});function r(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}}}]);
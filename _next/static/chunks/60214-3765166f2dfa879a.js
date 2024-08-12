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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},99803:function(e,t,a){a.d(t,{$o:function(){return i},DR:function(){return c},Mm:function(){return d},ZW:function(){return m},aT:function(){return r},n1:function(){return n},op:function(){return o},ux:function(){return s},xo:function(){return p},zW:function(){return l}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,s=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
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
`,p=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
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
`},24634:function(e,t,a){a.d(t,{T:function(){return D}});var r=a(52322),o=a(2784),n=a(81073),l=a(30840),s=a(18205),i=a(50603),p=a(55734),d=a(55484),c=a(25556),m=a(81224),u=a(3131),f=a(21154),h=a(11200),y=a(13588),x=a(82027),A=a(38483),g=a(68755),v=a(51477),M=a(46690),b=a(28559),j=a(46293),k=a(50425),C=a(32125);function I({offset:e,id:t,colors:a,fillOpacity:o}){let n=(0,g.rZ)();return(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:e,stopColor:(0,y.p)(a[0],n),stopOpacity:o??.2}),(0,r.jsx)("stop",{offset:e,stopColor:(0,y.p)(a[1],n),stopOpacity:o??.2})]})}I.displayName="@mantine/charts/AreaSplit";var T=a(7064);function O(e){return`${(100*e).toFixed(0)}%`}let _={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},w=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,y.p)(t,e):void 0,"--chart-grid-color":a?(0,y.p)(a,e):void 0}})),D=(0,x.d5)((e,t)=>{let a=(0,A.w)("AreaChart",_,e),{classNames:h,className:x,style:D,styles:L,unstyled:N,vars:P,data:K,series:S,withGradient:z,dataKey:B,withXAxis:F,withYAxis:Z,curveType:G,gridProps:E,withDots:W,tickLine:$,strokeDasharray:Q,gridAxis:R,unit:U,yAxisProps:X,xAxisProps:q,dotProps:H,activeDotProps:Y,strokeWidth:J,tooltipAnimationDuration:V,type:ee,legendProps:et,tooltipProps:ea,withLegend:er,withTooltip:eo,areaChartProps:en,fillOpacity:el,splitColors:es,splitOffset:ei,connectNulls:ep,onMouseLeave:ed,orientation:ec,referenceLines:em,dir:eu,valueFormatter:ef,children:eh,areaProps:ey,xAxisLabel:ex,yAxisLabel:eA,withRightYAxis:eg,rightYAxisLabel:ev,rightYAxisProps:eM,...eb}=a,ej=(0,g.rZ)(),ek=(0,o.useId)(),eC=`${ek}-split`,eI=(V||0)>0,eT="boolean"==typeof z?z:"default"===ee,eO="stacked"===ee||"percent"===ee,[e_,ew]=(0,o.useState)(null),eD=null!==e_,{resolvedClassNames:eL,resolvedStyles:eN}=(0,v.h)({classNames:h,styles:L,props:a}),eP=(0,M.y)({name:"AreaChart",classes:T.Z,props:a,className:x,style:D,classNames:h,styles:L,unstyled:N,vars:P,varsResolver:w}),eK=S.map(e=>{let t=(0,y.p)(e.color,ej),a=eD&&e_!==e.name;return(0,o.createElement)(n.u,{...eP("area"),activeDot:{fill:ej.white,stroke:t,strokeWidth:2,r:4,...Y},dot:{fill:t,fillOpacity:a?0:1,strokeWidth:2,r:4,...H},key:e.name,name:e.name,type:G,dataKey:e.name,fill:"none",strokeWidth:J,stroke:"none",isAnimationActive:!1,connectNulls:ep,stackId:eO?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ey?ey(e):ey})}),eS=S.map(e=>{let t=`${ek}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,a=(0,y.p)(e.color,ej),l=eD&&e_!==e.name;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)(C.v,{color:a,withGradient:eT,id:t,fillOpacity:el})}),(0,r.jsx)(n.u,{...eP("area"),activeDot:!1,dot:!1,name:e.name,type:G,dataKey:e.name,fill:"split"===ee?`url(#${eC})`:`url(#${t})`,strokeWidth:J,stroke:a,isAnimationActive:!1,connectNulls:ep,stackId:eO?"stack":void 0,fillOpacity:l?0:1,strokeOpacity:l?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",..."function"==typeof ey?ey(e):ey})]},e.name)}),ez=em?.map((e,t)=>{let a=y.p(e.color,ej);return r.jsx(l.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eP("referenceLine")},t)}),eB={axisLine:!1,..."vertical"===ec?{dataKey:B,type:"category"}:{type:"number"},tickLine:!!("none"!==R&&("y"===$||"xy"===$))&&{stroke:"currentColor"},allowDecimals:!0,unit:U,tickFormatter:"percent"===ee?O:ef,...eP("axis")};return(0,r.jsx)(b.x,{ref:t,...eP("root"),onMouseLeave:e=>{ew(null),ed?.(e)},dir:eu||"ltr",...eb,children:(0,r.jsx)(s.h,{...eP("container"),children:(0,r.jsxs)(i.T,{data:K,stackOffset:"percent"===ee?"expand":void 0,layout:ec,margin:{bottom:ex?30:void 0,left:eA?10:void 0,right:eA?5:void 0},...en,children:[ez,er&&(0,r.jsx)(p.D,{verticalAlign:"top",content:e=>(0,r.jsx)(j.Q,{payload:e.payload,onHighlight:ew,legendPosition:et?.verticalAlign||"top",classNames:eL,styles:eN,series:S}),...et}),(0,r.jsx)(d.q,{strokeDasharray:Q,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...eP("grid"),...E}),(0,r.jsxs)(c.K,{hide:!F,..."vertical"===ec?{type:"number"}:{dataKey:B},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==R&&("x"===$||"xy"===$))&&{stroke:"currentColor"},minTickGap:5,...eP("axis"),...q,children:[ex&&(0,r.jsx)(m._,{position:"insideBottom",offset:-20,fontSize:12,...eP("axisLabel"),children:ex}),q?.children]}),(0,r.jsxs)(u.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!Z,...eB,...X,children:[eA&&(0,r.jsx)(m._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eP("axisLabel"),children:eA}),X?.children]}),(0,r.jsxs)(u.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eg,...eB,...eM,children:[ev&&(0,r.jsx)(m._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eP("axisLabel"),children:ev}),X?.children]}),eo&&(0,r.jsx)(f.u,{animationDuration:V,isAnimationActive:eI,position:"vertical"===ec?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Q},content:({label:e,payload:t})=>(0,r.jsx)(k.h,{label:e,payload:t,unit:U,classNames:eL,styles:eN,series:S,valueFormatter:ef}),...ea}),"split"===ee&&(0,r.jsx)("defs",{children:(0,r.jsx)(I,{colors:es,id:eC,offset:ei??function({data:e,series:t}){return 1===t.length?function({data:e,dataKey:t}){let a=Math.max(...e.map(e=>e[t])),r=Math.min(...e.map(e=>e[t]));return a<=0?0:r>=0?1:a/(a-r)}({data:e,dataKey:t[0].name}):.5}({data:K,series:S}),fillOpacity:el})}),eS,W&&eK,eh]})})})});D.classes=T.Z,D.displayName="@mantine/charts/AreaChart"},32125:function(e,t,a){a.d(t,{v:function(){return o}});var r=a(52322);function o({color:e,id:t,withGradient:a,fillOpacity:o}){return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}o.displayName="@mantine/charts/AreaGradient"},46293:function(e,t,a){a.d(t,{Q:function(){return m}});var r=a(52322),o=a(82027),n=a(38483),l=a(46690),s=a(27009),i=a(28559),p=a(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c={},m=(0,o.d5)((e,t)=>{let a=(0,n.w)("ChartLegend",c,e),{classNames:o,className:m,style:u,styles:f,unstyled:h,vars:y,payload:x,onHighlight:A,legendPosition:g,mod:v,series:M,showColor:b,centered:j,...k}=a,C=(0,l.y)({name:"ChartLegend",classes:d,props:a,className:m,style:u,classNames:o,styles:f,unstyled:h});if(!x)return null;let I=x.filter(e=>"none"!==e.color).map(e=>{let t=e.dataKey.split(".").pop();return{...e,dataKey:t,payload:{...e.payload,name:t,dataKey:t}}}),T=(0,p.v)(M),O=I.map((e,t)=>(0,r.jsxs)("div",{...C("legendItem"),onMouseEnter:()=>A(e.dataKey),onMouseLeave:()=>A(null),"data-without-color":!1===b||void 0,children:[(0,r.jsx)(s.b,{color:e.color,size:12,...C("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...C("legendItemName"),children:T[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(i.x,{ref:t,mod:[{position:g,centered:j},v],...C("legend"),...k,children:O})});m.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,a){a.d(t,{h:function(){return y},X:function(){return u}});var r=a(52322),o=a(82027),n=a(38483),l=a(68755),s=a(46690),i=a(27009),p=a(13588),d=a(28559),c=a(64438),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),r={...e.payload[a]},o=Object.entries(e.payload).reduce((e,t)=>{let[r,o]=t;return r===a?e:{...e,[r]:o}},{});return{...e,name:e.name.substring(t+1),payload:{...o,...r}}}return e});return t?a.filter(e=>e.name===t):a}function f(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let h={type:"area",showColor:!0},y=(0,o.d5)((e,t)=>{let a=(0,n.w)("ChartTooltip",h,e),{classNames:o,className:y,style:x,styles:A,unstyled:g,vars:v,payload:M,label:b,unit:j,type:k,segmentId:C,mod:I,series:T,valueFormatter:O,showColor:_,...w}=a,D=(0,l.rZ)(),L=(0,s.y)({name:"ChartTooltip",classes:m,props:a,className:y,style:x,classNames:o,styles:A,unstyled:g});if(!M)return null;let N=u(M,C),P="scatter"===k?M[0]?.payload?.name:null,K=(0,c.v)(T),S=b||P,z=N.map(e=>(0,r.jsxs)("div",{"data-type":k,...L("tooltipItem"),children:[(0,r.jsxs)("div",{...L("tooltipItemBody"),children:[_&&(0,r.jsx)(i.b,{color:(0,p.p)(e.color,D),size:12,...L("tooltipItemColor"),withShadow:!1}),(0,r.jsx)("div",{...L("tooltipItemName"),children:K[e.name]||e.name})]}),(0,r.jsxs)("div",{...L("tooltipItemData"),children:["function"==typeof O?O(f(e,k)):f(e,k),j||e.unit]})]},e?.key??e.name));return(0,r.jsxs)(d.x,{...L("tooltip"),mod:[{type:k},I],ref:t,...w,children:[S&&(0,r.jsx)("div",{...L("tooltipLabel"),children:S}),(0,r.jsx)("div",{...L("tooltipBody"),children:z})]})});y.displayName="@mantine/charts/ChartTooltip"},7064:function(e,t,a){a.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,t,a){a.d(t,{v:function(){return r}});function r(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}}}]);
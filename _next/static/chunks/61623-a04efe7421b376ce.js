"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61623],{25556:function(e,t,a){a.d(t,{K:function(){return r}});var r=function(){return null};r.displayName="XAxis",r.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,t,a){a.d(t,{B:function(){return r}});var r=function(){return null};r.displayName="YAxis",r.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},57316:function(e,t,a){a.d(t,{F:function(){return i}});var r=a(52322),o=a(65602),n=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(o.w,{h:300,data:n.c8,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.FH,language:"tsx",fileName:"data.ts"}]}},10913:function(e,t,a){a.d(t,{o:function(){return i}});var r=a(52322),o=a(65602),n=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(o.w,{h:300,data:n.DR,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.ZW,language:"tsx",fileName:"data.ts"}]}},16690:function(e,t,a){a.d(t,{$o:function(){return i},DR:function(){return c},FH:function(){return p},Mm:function(){return s},ZW:function(){return u},aT:function(){return r},c8:function(){return d},op:function(){return o},ux:function(){return n},xo:function(){return l}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,d=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],p=`
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
`},46293:function(e,t,a){a.d(t,{Q:function(){return u}});var r=a(52322),o=a(82027),n=a(38483),i=a(46690),l=a(27009),s=a(28559),d=a(64438),p={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c={},u=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartLegend",c,e),{classNames:o,className:u,style:m,styles:f,unstyled:h,vars:y,payload:g,onHighlight:v,legendPosition:x,mod:A,series:M,showColor:b,centered:w,...C}=a,k=(0,i.y)({name:"ChartLegend",classes:p,props:a,className:u,style:m,classNames:o,styles:f,unstyled:h});if(!g)return null;let j=g.filter(e=>"none"!==e.color),L=(0,d.v)(M),D=j.map((e,t)=>(0,r.jsxs)("div",{...k("legendItem"),onMouseEnter:()=>v(e.dataKey),onMouseLeave:()=>v(null),"data-without-color":!1===b||void 0,children:[(0,r.jsx)(l.b,{color:e.color,size:12,...k("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...k("legendItemName"),children:L[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(s.x,{ref:t,mod:[{position:x,centered:w},A],...k("legend"),...C,children:D})});u.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,a){a.d(t,{h:function(){return y},X:function(){return m}});var r=a(52322),o=a(82027),n=a(38483),i=a(68755),l=a(46690),s=a(27009),d=a(13588),p=a(28559),c=a(64438),u={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function m(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function f(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let h={type:"area",showColor:!0},y=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartTooltip",h,e),{classNames:o,className:y,style:g,styles:v,unstyled:x,vars:A,payload:M,label:b,unit:w,type:C,segmentId:k,mod:j,series:L,valueFormatter:D,showColor:I,..._}=a,T=(0,i.rZ)(),N=(0,l.y)({name:"ChartTooltip",classes:u,props:a,className:y,style:g,classNames:o,styles:v,unstyled:x});if(!M)return null;let P=m(M,k),O="scatter"===C?M[0]?.payload?.name:null,S=(0,c.v)(L),K=b||O,B=P.map(e=>(0,r.jsxs)("div",{"data-type":C,...N("tooltipItem"),children:[(0,r.jsxs)("div",{...N("tooltipItemBody"),children:[I&&(0,r.jsx)(s.b,{color:(0,d.p)(e.color,T),size:12,...N("tooltipItemColor"),withShadow:!1}),(0,r.jsx)("div",{...N("tooltipItemName"),children:S[e.name]||e.name})]}),(0,r.jsxs)("div",{...N("tooltipItemData"),children:["function"==typeof D?D(f(e,C)):f(e,C),w||e.unit]})]},e.name));return(0,r.jsxs)(p.x,{...N("tooltip"),mod:[{type:C},j],ref:t,..._,children:[K&&(0,r.jsx)("div",{...N("tooltipLabel"),children:K}),(0,r.jsx)("div",{...N("tooltipBody"),children:B})]})});y.displayName="@mantine/charts/ChartTooltip"},65602:function(e,t,a){a.d(t,{w:function(){return I}});var r=a(52322),o=a(2784),n=a(63004),i=a(30840),l=a(18205),s=a(32908),d=a(55734),p=a(25556),c=a(81224),u=a(3131),m=a(55484),f=a(21154),h=a(11200),y=a(13588),g=a(82027),v=a(38483),x=a(68755),A=a(51477),M=a(46690),b=a(28559),w=a(66178),C=a(46293),k=a(50425),j=a(7064);let L={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},D=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,y.p)(t,e):void 0,"--chart-grid-color":a?(0,y.p)(a,e):void 0}})),I=(0,g.d)((e,t)=>{let a=(0,v.w)("LineChart",L,e),{classNames:h,className:g,style:I,styles:_,unstyled:T,vars:N,data:P,withLegend:O,legendProps:S,series:K,onMouseLeave:B,dataKey:z,withTooltip:F,withXAxis:W,withYAxis:Z,gridAxis:E,tickLine:J,xAxisProps:Y,yAxisProps:$,unit:R,tooltipAnimationDuration:G,strokeDasharray:H,gridProps:X,tooltipProps:Q,referenceLines:q,withDots:U,dotProps:V,activeDotProps:ee,strokeWidth:et,lineChartProps:ea,connectNulls:er,fillOpacity:eo,curveType:en,orientation:ei,dir:el,valueFormatter:es,children:ed,lineProps:ep,xAxisLabel:ec,yAxisLabel:eu,type:em,gradientStops:ef,withRightYAxis:eh,rightYAxisLabel:ey,rightYAxisProps:eg,...ev}=a,ex=(0,x.rZ)(),[eA,eM]=(0,o.useState)(null),eb=null!==eA,{resolvedClassNames:ew,resolvedStyles:eC}=(0,A.h)({classNames:h,styles:_,props:a}),ek=(0,M.y)({name:"LineChart",classes:j.Z,props:a,className:g,style:I,classNames:h,styles:_,unstyled:T,vars:N,varsResolver:D}),ej=(0,w.M)(),eL=`line-chart-gradient-${ej}`,eD=ef?.map(e=>r.jsx("stop",{offset:`${e.offset}%`,stopColor:y.p(e.color,ex)},e.color)),eI=K.map(e=>{let t=(0,y.p)(e.color,ex),a=eb&&eA!==e.name;return(0,o.createElement)(n.x,{...ek("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!U&&{fillOpacity:a?0:1,strokeOpacity:a?0:1,strokeWidth:1,fill:"gradient"===em?"var(--mantine-color-gray-7)":t,stroke:"gradient"===em?"white":t,...V},activeDot:!!U&&{fill:"gradient"===em?"var(--mantine-color-gray-7)":t,stroke:"gradient"===em?"white":t,...ee},fill:t,stroke:"gradient"===em?`url(#${eL})`:t,strokeWidth:et,isAnimationActive:!1,fillOpacity:a?0:eo,strokeOpacity:a?.5:eo,connectNulls:er,type:en,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",..."function"==typeof ep?ep(e):ep})}),e_=q?.map((e,t)=>{let a=y.p(e.color,ex);return r.jsx(i.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")},t)}),eT={hide:!Z,axisLine:!1,..."vertical"===ei?{dataKey:z,type:"category"}:{type:"number"},tickLine:!!("none"!==E&&("y"===J||"xy"===J))&&{stroke:"currentColor"},allowDecimals:!0,unit:R,tickFormatter:es,...ek("axis")};return(0,r.jsx)(b.x,{ref:t,...ek("root"),onMouseLeave:e=>{eM(null),B?.(e)},dir:el||"ltr",...ev,children:(0,r.jsx)(l.h,{...ek("container"),children:(0,r.jsxs)(s.w,{data:P,layout:ei,margin:{bottom:ec?30:void 0,left:eu?10:void 0,right:eu?5:void 0},...ea,children:["gradient"===em&&(0,r.jsx)("defs",{children:(0,r.jsx)("linearGradient",{id:eL,x1:"0",y1:"0",x2:"0",y2:"1",children:eD})}),O&&(0,r.jsx)(d.D,{verticalAlign:"top",content:e=>(0,r.jsx)(C.Q,{payload:e.payload,onHighlight:eM,legendPosition:S?.verticalAlign||"top",classNames:ew,styles:eC,series:K,showColor:"gradient"!==em}),...S}),(0,r.jsxs)(p.K,{hide:!W,..."vertical"===ei?{type:"number"}:{dataKey:z},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==E&&("x"===J||"xy"===J))&&{stroke:"currentColor"},minTickGap:5,...ek("axis"),...Y,children:[ec&&(0,r.jsx)(c._,{position:"insideBottom",offset:-20,fontSize:12,...ek("axisLabel"),children:ec}),Y?.children]}),(0,r.jsxs)(u.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},...eT,...$,children:[ey&&(0,r.jsx)(c._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:ey}),$?.children]}),(0,r.jsxs)(u.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},...eT,...eg,children:[eu&&(0,r.jsx)(c._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:eu}),$?.children]}),(0,r.jsx)(m.q,{strokeDasharray:H,vertical:"y"===E||"xy"===E,horizontal:"x"===E||"xy"===E,...ek("grid"),...X}),F&&(0,r.jsx)(f.u,{animationDuration:G,isAnimationActive:0!==G,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H},content:({label:e,payload:t})=>(0,r.jsx)(k.h,{label:e,payload:t,unit:R,classNames:ew,styles:eC,series:K,valueFormatter:es,showColor:"gradient"!==em}),...Q}),eI,e_,ed]})})})});I.displayName="@mantine/charts/LineChart",I.classes=j.Z},7064:function(e,t,a){a.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,t,a){a.d(t,{v:function(){return r}});function r(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}}}]);
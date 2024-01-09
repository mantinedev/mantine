"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80350],{80350:function(e,t,a){a.d(t,{A:function(){return i}});var r=a(27378),o=a(44432),n=a(61566);let l=`
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
`,i={type:"code",component:function(){return r.createElement(o.T,{h:300,data:n.aT,dataKey:"date",type:"stacked",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:n.op,language:"tsx",fileName:"data.ts"}]}},61566:function(e,t,a){a.d(t,{$o:function(){return p},Mm:function(){return c},aT:function(){return r},n1:function(){return n},op:function(){return o},ux:function(){return i},xo:function(){return s},zW:function(){return l}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,i=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],p=`
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
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],c=`
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
`},44432:function(e,t,a){a.d(t,{T:function(){return w}});var r=a(27378),o=a(68871),n=a(97879),l=a(9911),i=a(290),p=a(46246),s=a(38616),c=a(32529),d=a(26299),m=a(44460),u=a(83453),f=a(89738),A=a(20410),y=a(96739),M=a(2256),h=a(5564),g=a(6231),E=a(56589),k=a(3525),v=a(96688),x=a(65923);function C({offset:e,id:t,colors:a,fillOpacity:o}){let n=(0,M.rZ)();return r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:e,stopColor:(0,f.p)(a[0],n),stopOpacity:o??.2}),r.createElement("stop",{offset:e,stopColor:(0,f.p)(a[1],n),stopOpacity:o??.2}))}C.displayName="@mantine/charts/AreaSplit";var T=a(51010);function O(e){return`${(100*e).toFixed(0)}%`}let b={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},I=(0,u.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,f.p)(t,e):void 0,"--chart-grid-color":a?(0,f.p)(a,e):void 0}})),w=(0,A.d)((e,t)=>{let a=(0,y.w)("AreaChart",b,e),{classNames:u,className:A,style:w,styles:N,unstyled:D,vars:L,data:z,series:K,withGradient:S,dataKey:Z,withXAxis:$,withYAxis:B,curveType:G,gridProps:W,withDots:F,tickLine:_,strokeDasharray:P,gridAxis:Q,unit:X,yAxisProps:q,xAxisProps:H,dotProps:Y,activeDotProps:j,strokeWidth:J,tooltipAnimationDuration:R,type:U,legendProps:V,tooltipProps:ee,withLegend:et,withTooltip:ea,areaChartProps:er,fillOpacity:eo,splitColors:en,splitOffset:el,connectNulls:ei,onMouseLeave:ep,orientation:es,referenceLines:ec,dir:ed,...em}=a,eu=(0,M.rZ)(),ef=(0,r.useId)(),eA=`${ef}-split`,ey=(R||0)>0,eM="boolean"==typeof S?S:"default"===U,eh="stacked"===U||"percent"===U,[eg,eE]=(0,r.useState)(null),ek=null!==eg,{resolvedClassNames:ev,resolvedStyles:ex}=(0,h.h)({classNames:u,styles:N,props:a}),eC=(0,g.y)({name:"AreaChart",classes:T.Z,props:a,className:A,style:w,classNames:u,styles:N,unstyled:D,vars:L,varsResolver:I}),eT=K.map(e=>{let t=(0,f.p)(e.color,eu),a=ek&&eg!==e.name;return r.createElement(o.u,{...eC("area"),activeDot:{fill:eu.white,stroke:t,strokeWidth:2,r:4,...j},dot:{fill:t,fillOpacity:a?0:1,strokeWidth:2,r:4,...Y},key:e.name,name:e.name,type:G,dataKey:e.name,fill:"none",strokeWidth:J,stroke:"none",isAnimationActive:!1,connectNulls:ei,stackId:eh?"stack-dots":void 0})}),eO=K.map(e=>{let t=`${ef}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,a=(0,f.p)(e.color,eu),n=ek&&eg!==e.name;return r.createElement(r.Fragment,{key:e.name},r.createElement("defs",null,r.createElement(x.v,{color:a,withGradient:eM,id:t,fillOpacity:eo})),r.createElement(o.u,{...eC("area"),activeDot:!1,dot:!1,name:e.name,type:G,dataKey:e.name,fill:"split"===U?`url(#${eA})`:`url(#${t})`,strokeWidth:J,stroke:a,isAnimationActive:!1,connectNulls:ei,stackId:eh?"stack":void 0,fillOpacity:n?0:1,strokeOpacity:n?.5:1,strokeDasharray:e.strokeDasharray}))}),eb=ec?.map((e,t)=>{let a=f.p(e.color,eu);return r.createElement(n.d,{key:t,stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eC("referenceLine")})});return r.createElement(E.x,{ref:t,...eC("root"),onMouseLeave:e=>{eE(null),ep?.(e)},dir:ed||"ltr",...em},r.createElement(l.h,{...eC("container")},r.createElement(i.T,{data:z,stackOffset:"percent"===U?"expand":void 0,layout:es,...er},eb,et&&r.createElement(p.D,{verticalAlign:"top",content:e=>r.createElement(k.Q,{payload:e.payload,onHighlight:eE,legendPosition:V?.verticalAlign||"top",classNames:ev,styles:ex}),height:44,...V}),r.createElement(s.q,{strokeDasharray:P,vertical:"y"===Q||"xy"===Q,horizontal:"x"===Q||"xy"===Q,...eC("grid"),...W}),r.createElement(c.K,{hide:!$,..."vertical"===es?{type:"number"}:{dataKey:Z},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Q&&("x"===_||"xy"===_))&&{stroke:"currentColor"},minTickGap:5,...eC("axis"),...H}),r.createElement(d.B,{hide:!B,axisLine:!1,..."vertical"===es?{dataKey:Z,type:"category"}:{type:"number"},tickLine:!!("none"!==Q&&("y"===_||"xy"===_))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:X,tickFormatter:"percent"===U?O:void 0,...eC("axis"),...q}),ea&&r.createElement(m.u,{animationDuration:R,isAnimationActive:ey,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:P},content:({label:e,payload:t})=>r.createElement(v.h,{label:e,payload:t,unit:X,classNames:ev,styles:ex}),...ee}),"split"===U&&r.createElement("defs",null,r.createElement(C,{colors:en,id:eA,offset:el??function({data:e,series:t}){if(1===t.length){let a=t[0].name;return function({data:e,dataKey:t}){let a=Math.max(...e.map(e=>e[t])),r=Math.min(...e.map(e=>e[t]));return a<=0?0:r>=0?1:a/(a-r)}({data:e,dataKey:a})}return .5}({data:z,series:K}),fillOpacity:eo})),eO,F&&eT)))});w.classes=T.Z,w.displayName="@mantine/charts/AreaChart"},65923:function(e,t,a){a.d(t,{v:function(){return o}});var r=a(27378);function o({color:e,id:t,withGradient:a,fillOpacity:o}){return r.createElement(r.Fragment,null,a?r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:e,stopOpacity:o}),r.createElement("stop",{offset:"100%",stopColor:e,stopOpacity:.01})):r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{stopColor:e,stopOpacity:o??.2})))}o.displayName="@mantine/charts/AreaGradient"},3525:function(e,t,a){a.d(t,{Q:function(){return d}});var r=a(27378),o=a(20410),n=a(96739),l=a(6231),i=a(16202),p=a(56589),s={legend:"m-847eaf",legendItem:"m-17da7e62",legendItemName:"m-8ff56c0d"};let c={},d=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartLegend",c,e),{classNames:o,className:d,style:m,styles:u,unstyled:f,vars:A,payload:y,onHighlight:M,legendPosition:h,...g}=a,E=(0,l.y)({name:"ChartLegend",classes:s,props:a,className:d,style:m,classNames:o,styles:u,unstyled:f});if(!y)return null;let k=y.filter(e=>"none"!==e.color),v=k.map((e,t)=>r.createElement("div",{key:t,...E("legendItem"),onMouseEnter:()=>M(e.dataKey),onMouseLeave:()=>M(null)},r.createElement(i.b,{color:e.color,size:12,...E("legendItemColor"),withShadow:!1}),r.createElement("p",{...E("legendItemName")},e.dataKey)));return r.createElement(p.x,{ref:t,mod:{position:h},...E("legend"),...g},v)});d.displayName="@mantine/charts/ChartLegend"},96688:function(e,t,a){a.d(t,{h:function(){return m},X:function(){return c}});var r=a(27378),o=a(20410),n=a(96739),l=a(6231),i=a(16202),p=a(56589),s={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function c(e){return e.filter(e=>"none"!==e.fill)}let d={},m=(0,o.d)((e,t)=>{let a=(0,n.w)("ChartTooltip",d,e),{classNames:o,className:m,style:u,styles:f,unstyled:A,vars:y,payload:M,label:h,unit:g,...E}=a,k=(0,l.y)({name:"ChartTooltip",classes:s,props:a,className:m,style:u,classNames:o,styles:f,unstyled:A});if(!M)return null;let v=c(M),x=v.map(e=>r.createElement("div",{key:e.name,...k("tooltipItem")},r.createElement("div",{...k("tooltipItemBody")},r.createElement(i.b,{color:e.color,size:12,...k("tooltipItemColor"),withShadow:!1}),r.createElement("div",{...k("tooltipItemName")},e.name)),r.createElement("div",{...k("tooltipItemData")},e.payload[e.dataKey],g)));return r.createElement(p.x,{...k("tooltip"),ref:t,...E},h&&r.createElement("div",{...k("tooltipLabel")},h),r.createElement("div",{...k("tooltipBody")},x))});m.displayName="@mantine/charts/ChartTooltip"},51010:function(e,t,a){a.d(t,{Z:function(){return r}});var r={root:"m-a50f3e58",container:"m-af9188cb",grid:"m-a50a48bc",axis:"m-a507a517"}}}]);
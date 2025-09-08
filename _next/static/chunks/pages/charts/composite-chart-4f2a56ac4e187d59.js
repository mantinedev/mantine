(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30036],{14426:(e,a,t)=>{"use strict";t.d(a,{EJ:()=>s,d8:()=>n,dX:()=>l,kZ:()=>r,p:()=>o,sC:()=>i});let o=[{date:"Mar 22",Apples:2301,Oranges:723,Tomatoes:2452},{date:"Mar 23",Apples:2181,Oranges:1887,Tomatoes:2402},{date:"Mar 24",Apples:1821,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:2764,Oranges:987,Tomatoes:2809},{date:"Mar 26",Apples:1821,Oranges:403,Tomatoes:2290}],r=`
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
`,n=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],s=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
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
`},32157:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/composite-chart",function(){return t(92844)}])},33991:(e,a,t)=>{"use strict";t.d(a,{z:()=>s});var o=t(6029),r=t(81695),n=t(14426);let s={type:"code",component:function(){return(0,o.jsx)(r.o,{h:300,data:n.p,dataKey:"date",unit:"$",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.kZ,language:"tsx",fileName:"data.ts"}]}},38969:(e,a,t)=>{"use strict";function o(e){return e?e.reduce((e,a)=>{let t=a.name.search(/\./);return t>=0?e[a.name.substring(t+1)]=a.label:e[a.name]=a.label,e},{}):{}}t.d(a,{J:()=>o})},42738:(e,a,t)=>{"use strict";t.d(a,{I:()=>y,r:()=>m});var o=t(6029),r=t(8411),n=t(38919),s=t(49643),i=t(15583),l=t(21351),d=t(76320),p=t(38969),c={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function m(e,a){let t=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let a=e.name.search(/\./);if(a>=0){let t=e.name.substring(0,a),o={...e.payload[t]},r=Object.entries(e.payload).reduce((e,a)=>{let[o,r]=a;return o===t?e:{...e,[o]:r}},{});return{...e,name:e.name.substring(a+1),payload:{...r,...o}}}return e});return a?t.filter(e=>e.name===a):t}function h(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let x={type:"area",showColor:!0},y=(0,r.P9)((e,a)=>{let t=(0,n.Y)("ChartTooltip",x,e),{classNames:r,className:y,style:u,styles:g,unstyled:f,vars:b,payload:j,label:A,unit:C,type:v,segmentId:k,mod:w,series:T,valueFormatter:D,showColor:N,attributes:P,...K}=t,O=(0,s.xd)(),W=(0,i.I)({name:"ChartTooltip",classes:c,props:t,className:y,style:u,classNames:r,styles:g,unstyled:f,attributes:P});if(!j)return null;let L=m(j,k),B="scatter"===v?j[0]?.payload?.name:null,I=(0,p.J)(T),S=A||B,M=L.map(e=>(0,o.jsxs)("div",{"data-type":v,...W("tooltipItem"),children:[(0,o.jsxs)("div",{...W("tooltipItemBody"),children:[N&&(0,o.jsx)("svg",{...W("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,l.r)(e.color,O),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...W("tooltipItemName"),children:I[e.name]||e.name})]}),(0,o.jsxs)("div",{...W("tooltipItemData"),children:["function"==typeof D?D(h(e,v)):h(e,v),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...W("tooltip"),mod:[{type:v},w],ref:a,...K,children:[S&&(0,o.jsx)("div",{...W("tooltipLabel"),children:S}),(0,o.jsx)("div",{...W("tooltipBody"),children:M})]})});y.displayName="@mantine/charts/ChartTooltip"},48101:(e,a,t)=>{"use strict";t.d(a,{_:()=>c});var o=t(6029),r=t(8411),n=t(38919),s=t(15583),i=t(11508),l=t(76320),d=t(38969),p={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let c=(0,r.P9)((e,a)=>{let t=(0,n.Y)("ChartLegend",null,e),{classNames:r,className:c,style:m,styles:h,unstyled:x,vars:y,payload:u,onHighlight:g,legendPosition:f,mod:b,series:j,showColor:A,centered:C,attributes:v,...k}=t,w=(0,s.I)({name:"ChartLegend",classes:p,props:t,className:c,style:m,classNames:r,styles:h,unstyled:x,attributes:v});if(!u)return null;let T=u.filter(e=>"none"!==e.color).map(e=>{let a=e.dataKey?.split(".").pop();return{...e,dataKey:a,payload:{...e.payload,name:a,dataKey:a}}}),D=(0,d.J)(j),N=T.map((e,a)=>(0,o.jsxs)("div",{...w("legendItem"),onMouseEnter:()=>g(e.dataKey),onMouseLeave:()=>g(null),"data-without-color":!1===A||void 0,children:[(0,o.jsx)(i.q,{color:e.color,size:12,...w("legendItemColor"),withShadow:!1}),(0,o.jsx)("p",{...w("legendItemName"),children:D[e.dataKey]||e.dataKey})]},a));return(0,o.jsx)(l.a,{ref:a,mod:[{position:f,centered:C},b],...w("legend"),...k,children:N})});c.displayName="@mantine/charts/ChartLegend"},52345:(e,a,t)=>{"use strict";t.d(a,{x:()=>r});var o=t(6029);function r({x:e,y:a,value:t,valueFormatter:r}){return(0,o.jsx)("g",{transform:`translate(${e},${a})`,children:(0,o.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:r?r(t):t})})}},58486:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},81695:(e,a,t)=>{"use strict";t.d(a,{o:()=>S});var o=t(6029),r=t(55729),n=t(96402),s=t(13297),i=t(14693),l=t(78895),d=t(93463),p=t(40684),c=t(32716),m=t(50285),h=t(2893),x=t(47122),y=t(19603),u=t(83687),g=(0,c.gu)({chartName:"ComposedChart",GraphicalChild:[n.N,s.G,i.y,m.X],axisComponents:[{axisType:"xAxis",AxisComp:h.W},{axisType:"yAxis",AxisComp:x.h},{axisType:"zAxis",AxisComp:y.K}],formatAxisMap:u.pr}),f=t(64370),b=t(35555),j=t(8454),A=t(31292),C=t(33987),v=t(21351),k=t(8411),w=t(38919),T=t(49643),D=t(38757),N=t(15583),P=t(76320),K=t(48101),O=t(42738),W=t(52345),L=t(58486);let B={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},I=(0,C.V)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,v.r)(a,e):void 0,"--chart-grid-color":t?(0,v.r)(t,e):void 0}})),S=(0,k.P9)((e,a)=>{let t=(0,w.Y)("CompositeChart",B,e),{classNames:c,className:m,style:y,styles:u,unstyled:C,vars:k,data:S,withLegend:M,legendProps:_,series:Y,onMouseLeave:Z,dataKey:E,withTooltip:z,withXAxis:U,withYAxis:V,gridAxis:F,tickLine:R,xAxisProps:X,yAxisProps:J,unit:G,tooltipAnimationDuration:$,strokeDasharray:q,gridProps:H,tooltipProps:Q,referenceLines:ee,withDots:ea,dotProps:et,activeDotProps:eo,strokeWidth:er,connectNulls:en,curveType:es,dir:ei,valueFormatter:el,children:ed,lineProps:ep,xAxisLabel:ec,yAxisLabel:em,withRightYAxis:eh,rightYAxisLabel:ex,rightYAxisProps:ey,withPointLabels:eu,areaProps:eg,barProps:ef,withBarValueLabel:eb,minBarSize:ej,maxBarWidth:eA,composedChartProps:eC,attributes:ev,...ek}=t,ew=(0,T.xd)(),[eT,eD]=(0,r.useState)(null),eN=null!==eT,{resolvedClassNames:eP,resolvedStyles:eK}=(0,D.Y)({classNames:c,styles:u,props:t}),eO=(0,N.I)({name:"CompositeChart",classes:L.A,props:t,className:m,style:y,classNames:c,styles:u,unstyled:C,attributes:ev,vars:k,varsResolver:I}),eW=Y.map(e=>{let a=(0,v.r)(e.color,ew),t=eN&&eT!==e.name;return"line"===e.type?(0,r.createElement)(n.N,{...eO("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!ea&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:a,stroke:a,...et},activeDot:!!ea&&{fill:"var(--mantine-color-white)",stroke:a,...eo},fill:a,stroke:a,strokeWidth:er,isAnimationActive:!1,fillOpacity:+!t,strokeOpacity:t?.5:1,connectNulls:en,type:es,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eu?(0,o.jsx)(W.x,{valueFormatter:el}):void 0,..."function"==typeof ep?ep(e):ep}):"area"===e.type?(0,r.createElement)(s.G,{...eO("area"),key:e.name,name:e.name,type:es,dataKey:e.name,fill:a,strokeWidth:er,stroke:a,isAnimationActive:!1,connectNulls:en,dot:!!ea&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:a,stroke:a,...et},activeDot:!!ea&&{fill:ew.white,stroke:a,strokeWidth:2,r:4,...eo},fillOpacity:.2*!t,strokeOpacity:t?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:eu?(0,o.jsx)(W.x,{valueFormatter:el}):void 0,..."function"==typeof eg?eg(e):eg}):"bar"===e.type?(0,r.createElement)(i.y,{...eO("bar"),key:e.name,name:e.name,dataKey:e.name,fill:a,stroke:a,isAnimationActive:!1,fillOpacity:t?.1:1,strokeOpacity:.2*!!t,yAxisId:e.yAxisId||"left",minPointSize:ej,..."function"==typeof ef?ef(e):ef},eb&&(0,o.jsx)(l.Z,{position:"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:e=>el?.(e)})):null}),eL=ee?.map((e,a)=>{let t=(0,v.r)(e.color,ew);return(0,o.jsx)(d.e,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eO("referenceLine")},a)}),eB={axisLine:!1,type:"number",tickLine:"none"!==F&&("y"===R||"xy"===R)&&{stroke:"currentColor"},allowDecimals:!0,unit:G,tickFormatter:el,...eO("axis")};return(0,o.jsx)(P.a,{ref:a,...eO("root"),onMouseLeave:e=>{eD(null),Z?.(e)},dir:ei||"ltr",...ek,children:(0,o.jsx)(p.u,{...eO("container"),children:(0,o.jsxs)(g,{data:S,maxBarSize:eA,margin:{bottom:ec?30:void 0,left:em?10:void 0,right:em?5:void 0},...eC,children:[M&&(0,o.jsx)(f.s,{verticalAlign:"top",content:e=>(0,o.jsx)(K._,{payload:e.payload,onHighlight:eD,legendPosition:_?.verticalAlign||"top",classNames:eP,styles:eK,series:Y,attributes:ev}),..._}),(0,o.jsxs)(h.W,{hide:!U,dataKey:E,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==F&&("x"===R||"xy"===R)&&{stroke:"currentColor"},minTickGap:5,...eO("axis"),...X,children:[ec&&(0,o.jsx)(b.J,{position:"insideBottom",offset:-20,fontSize:12,...eO("axisLabel"),children:ec}),X?.children]}),(0,o.jsxs)(x.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!V,...eB,...J,children:[em&&(0,o.jsx)(b.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eO("axisLabel"),children:em}),J?.children]}),(0,o.jsxs)(x.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eh,...eB,...ey,children:[ex&&(0,o.jsx)(b.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eO("axisLabel"),children:ex}),J?.children]}),(0,o.jsx)(j.d,{strokeDasharray:q,vertical:"y"===F||"xy"===F,horizontal:"x"===F||"xy"===F,...eO("grid"),...H}),z&&(0,o.jsx)(A.m,{animationDuration:$,isAnimationActive:0!==$,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:q},content:({label:e,payload:a})=>(0,o.jsx)(O.I,{label:e,payload:a,unit:G,classNames:eP,styles:eK,series:Y,valueFormatter:el,attributes:ev}),...Q}),eW,eL,ed]})})})});S.displayName="@mantine/charts/CompositeChart",S.classes=L.A},92844:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>z});var o=t(6029),r=t(16285),n=t(81695),s=t(14426);let i={type:"configurator",component:function(e){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},l={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",withLegend:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},p={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},maxBarWidth:30,series:[{name:"Tomatoes",label:"Tomatoes sales",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",label:"Apples sales",color:"red.8",type:"line"},{name:"Oranges",label:"Oranges sales",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      maxBarWidth={30}
      series={[
        {
          name: 'Tomatoes',
          label: 'Tomatoes sales',
          color: 'rgba(18, 120, 255, 0.2)',
          type: 'bar',
        },
        { name: 'Apples', label: 'Apples sales', color: 'red.8', type: 'line' },
        { name: 'Oranges', label: 'Oranges sales', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},c={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",withPointLabels:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},m={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},x={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},y={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.sC,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.dX,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.d8,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6",type:"line"},{name:"pv",color:"cyan.6",yAxisId:"right",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6', type: 'line' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.EJ,language:"tsx",fileName:"data.ts"}]},g={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",tickLine:"xy",xAxisProps:{angle:-20},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},f={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},b={type:"configurator",component:function(e){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",series:[{name:"Apples",type:"line",color:e.color}],...e})},code:[{code:e=>`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]};var j={root:"m_f98102e0"};let A={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",className:j.root,series:[{name:"Apples",color:"var(--chart-color)",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--chart-color)', type: 'line' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},C={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",strokeDasharray:"15 15",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]};var v={root:"m_300a99a6"};let k={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",className:v.root,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},w={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",tooltipAnimationDuration:200,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]};var T=t(33991),D=t(5086),N=t(45208),P=t(2205);function K({label:e,payload:a}){return a?(0,o.jsxs)(D.t,{px:"md",py:"sm",withBorder:!0,shadow:"md",radius:"md",children:[(0,o.jsx)(N.E,{fw:500,mb:5,children:e}),a.map(e=>(0,o.jsxs)(N.E,{c:(0,P.X)(e.color,1),fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let O={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,o.jsx)(K,{label:e,payload:a})},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { alpha, Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={alpha(item.color, 1)} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",withTooltip:!1,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},L={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},B={type:"configurator",component:function(e){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},I={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.E,{mb:"md",pl:"md",children:"Apples sales:"}),(0,o.jsx)(n.o,{h:180,data:s.p,dataKey:"date",series:[{name:"Apples",color:"indigo.6",type:"area"}],composedChartProps:{syncId:"groceries"}}),(0,o.jsx)(N.E,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,o.jsx)(n.o,{h:180,data:s.p,dataKey:"date",composedChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"cyan.6",type:"bar"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
        composedChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        composedChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'cyan.6', type: 'bar' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},S={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line",strokeDasharray:"5 5"},{name:"Oranges",color:"yellow.8",type:"area",strokeDasharray:"5 5"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeWidth={1}
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line', strokeDasharray: '5 5' },
        { name: 'Oranges', color: 'yellow.8', type: 'area', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]},M={type:"code",component:function(){return(0,o.jsx)(n.o,{h:300,data:s.p,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:1200,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out",color:"blue.7"}],maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 1200, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out', color: 'blue.7' },
      ]}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]};var _=t(38547),Y=t(5262);let Z=(0,_.P)(Y.XZ.CompositeChart);function E(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"CompositeChart"})," allows using ",(0,o.jsx)(a.code,{children:"Line"}),", ",(0,o.jsx)(a.code,{children:"Area"})," and ",(0,o.jsx)(a.code,{children:"Bar"})," charts together in a single\nchart:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(a.h2,{id:"legend",children:"Legend"}),"\n",(0,o.jsxs)(a.p,{children:["To display chart legend, set ",(0,o.jsx)(a.code,{children:"withLegend"})," prop. When one of the items in the legend\nis hovered, the corresponding data series is highlighted in the chart."]}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(a.h2,{id:"legend-position",children:"Legend position"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Legend",children:"Legend"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"legendProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"legendProps={{ verticalAlign: 'bottom', height: 50 }}"}),"\nwill render the legend at the bottom of the chart and set its height to 50px."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"series-labels",children:"Series labels"}),"\n",(0,o.jsxs)(a.p,{children:["By default, series ",(0,o.jsx)(a.code,{children:"name"})," is used as a label. To change it, set ",(0,o.jsx)(a.code,{children:"label"}),"\nproperty in ",(0,o.jsx)(a.code,{children:"series"})," object:"]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,o.jsxs)(a.p,{children:["To display labels on data points, set ",(0,o.jsx)(a.code,{children:"withPointLabels"}),". This feature is supported\nonly for ",(0,o.jsx)(a.code,{children:"Line"})," and ",(0,o.jsx)(a.code,{children:"Area"})," charts:"]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"x-and-y-axis-props",children:"X and Y axis props"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," and ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/XAxis",children:"XAxis"}),"\nand ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"})," components. For example, these props\ncan be used to change orientation of axis:"]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(a.code,{children:"yAxisLabel"})," props to display axis labels:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"x-axis-offset",children:"X axis offset"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"xAxisProps"})," to set padding between the charts ends and the x-axis:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(a.h2,{id:"y-axis-scale",children:"Y axis scale"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"yAxisProps"})," to change domain of the Y axis. For example, if you know that\nyour data will always be in the range of 0 to 100, you can set domain to ",(0,o.jsx)(a.code,{children:"[0, 100]"}),":"]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(a.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,o.jsxs)(a.p,{children:["To display additional Y axis on the right side of the chart, set ",(0,o.jsx)(a.code,{children:"withRightYAxis"})," prop.\nYou can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/YAxis",children:"YAxis"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"rightYAxisProps"})," prop and assign a label to the right Y axis with\n",(0,o.jsx)(a.code,{children:"rightYAxisLabel"})," prop. Note that you need to bind data series to the right Y axis\nby setting ",(0,o.jsx)(a.code,{children:"yAxisId"})," in the ",(0,o.jsx)(a.code,{children:"series"})," object."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"rotate-x-axis-labels",children:"Rotate x-axis labels"}),"\n",(0,o.jsxs)(a.p,{children:["To rotate x-axis labels, set ",(0,o.jsx)(a.code,{children:"xAxisProps.angle"})," to a number of degrees to rotate:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip and axis ticks, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"chart-color",children:"Chart color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"change-chart-color-depending-on-color-scheme",children:"Change chart color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof chart that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(a.h2,{id:"stroke-dash-array",children:"Stroke dash array"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," prop to control the stroke dash array of the grid and cursor\nlines. The value represent the lengths of alternating dashes and gaps. For example,\n",(0,o.jsx)(a.code,{children:'strokeDasharray="10 5"'})," will render a dashed line with 10px dashes and 5px gaps."]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { CompositeChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <CompositeChart\n      h={300}\n      data={data}\n      dataKey=\"date\"\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      series={[\n        { name: 'Apples', color: 'indigo.6', type: 'line' },\n        { name: 'Oranges', color: 'blue.6', type: 'bar' },\n        { name: 'Tomatoes', color: 'teal.6', type: 'area' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"tooltip-animation",children:"Tooltip animation"}),"\n",(0,o.jsxs)(a.p,{children:["By default, tooltip animation is disabled. To enable it, set ",(0,o.jsx)(a.code,{children:"tooltipAnimationDuration"}),"\nprop to a number of milliseconds to animate the tooltip position change."]}),"\n",(0,o.jsx)(t,{data:w}),"\n",(0,o.jsx)(a.h2,{id:"units",children:"Units"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"unit"})," prop to render a unit label next to the y-axis ticks and tooltip values:"]}),"\n",(0,o.jsx)(t,{data:T.z}),"\n",(0,o.jsx)(a.h2,{id:"custom-tooltip",children:"Custom tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"tooltipProps.content"})," to pass custom tooltip renderer to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/Tooltip",children:"Tooltip"}),"\ncomponent. Note that it is required to filter recharts payload with ",(0,o.jsx)(a.code,{children:"getFilteredChartTooltipPayload"}),"\nfunction to remove empty values that are used for styling purposes only."]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:W}),"\n",(0,o.jsx)(a.h2,{id:"customize-dots",children:"Customize dots"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dotProps"})," to pass props down to recharts dot in regular state and ",(0,o.jsx)(a.code,{children:"activeDotProps"}),"\nto pass props down to recharts dot in active state (when cursor is over the current series)."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(a.h2,{id:"stroke-width",children:"Stroke width"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"strokeWidth"})," prop to control the stroke width of all areas/lines:"]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(a.h2,{id:"sync-multiple-charts",children:"Sync multiple charts"}),"\n",(0,o.jsxs)(a.p,{children:["You can pass props down to recharts ",(0,o.jsx)(a.a,{href:"https://recharts.org/en-US/api/ComposedChart",children:"ComposedChart"}),"\ncomponent with ",(0,o.jsx)(a.code,{children:"composedChartProps"})," prop. For example, setting ",(0,o.jsx)(a.code,{children:"composedChartProps={{ syncId: 'any-id' }}"}),"\nwill sync tooltip of multiple ",(0,o.jsx)(a.code,{children:"CompositeChart"})," components with the same ",(0,o.jsx)(a.code,{children:"syncId"})," prop."]}),"\n",(0,o.jsx)(t,{data:I}),"\n",(0,o.jsx)(a.h2,{id:"dashed-lines",children:"Dashed lines"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"strokeDasharray"})," property in ",(0,o.jsx)(a.code,{children:"series"})," to change line style to dashed:"]}),"\n",(0,o.jsx)(t,{data:S}),"\n",(0,o.jsx)(a.h2,{id:"reference-lines",children:"Reference lines"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"referenceLines"})," prop to render reference lines. Reference lines are always\nrendered behind the chart."]}),"\n",(0,o.jsx)(t,{data:M})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Z,{...e,children:(0,o.jsx)(E,{...e})})}}},e=>{e.O(0,[29040,60454,13297,50285,99949,38547,90636,46593,38792],()=>e(e.s=32157)),_N_E=e.O()}]);
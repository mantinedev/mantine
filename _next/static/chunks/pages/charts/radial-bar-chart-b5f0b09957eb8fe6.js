(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63844],{35229:(a,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radial-bar-chart",function(){return o(88449)}])},38877:(a,e,o)=>{"use strict";o.d(e,{k:()=>r,p:()=>t});let t=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],r=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},38969:(a,e,o)=>{"use strict";function t(a){return a?a.reduce((a,e)=>{let o=e.name.search(/\./);return o>=0?a[e.name.substring(o+1)]=e.label:a[e.name]=e.label,a},{}):{}}o.d(e,{J:()=>t})},48101:(a,e,o)=>{"use strict";o.d(e,{_:()=>u});var t=o(6029),r=o(8411),l=o(38919),n=o(15583),d=o(11508),i=o(76320),c=o(38969),s={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let u=(0,r.P9)((a,e)=>{let o=(0,l.Y)("ChartLegend",null,a),{classNames:r,className:u,style:m,styles:h,unstyled:p,vars:g,payload:x,onHighlight:v,legendPosition:f,mod:y,series:j,showColor:w,centered:b,attributes:C,...k}=o,R=(0,n.I)({name:"ChartLegend",classes:s,props:o,className:u,style:m,classNames:r,styles:h,unstyled:p,attributes:C});if(!x)return null;let _=x.filter(a=>"none"!==a.color).map(a=>{let e=a.dataKey?.split(".").pop();return{...a,dataKey:e,payload:{...a.payload,name:e,dataKey:e}}}),B=(0,c.J)(j),D=_.map((a,e)=>(0,t.jsxs)("div",{...R("legendItem"),onMouseEnter:()=>v(a.dataKey),onMouseLeave:()=>v(null),"data-without-color":!1===w||void 0,children:[(0,t.jsx)(d.q,{color:a.color,size:12,...R("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...R("legendItemName"),children:B[a.dataKey]||a.dataKey})]},e));return(0,t.jsx)(i.a,{ref:e,mod:[{position:f,centered:b},y],...R("legend"),...k,children:D})});u.displayName="@mantine/charts/ChartLegend"},68765:(a,e,o)=>{"use strict";o.d(e,{D:()=>R});var t=o(6029),r=o(55729),l=o(40684),n=o(5742),d=o(44494),i=o(64370),c=o(31292),s=o(33987),u=o(21351),m=o(8411),h=o(38919),p=o(15583),g=o(49643),x=o(38757),v=o(76320),f=o(5086),y=o(57414),j=o(11508),w=o(48101),b={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let C={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},k=(0,s.V)((a,{emptyBackgroundColor:e})=>({root:{"--chart-empty-background":e?(0,u.r)(e,a):void 0}})),R=(0,m.P9)((a,e)=>{let o=(0,h.Y)("RadialBarChart",C,a),{classNames:s,className:m,style:R,styles:_,unstyled:B,vars:D,data:N,barSize:K,withBackground:L,dataKey:S,radialBarProps:T,radialBarChartProps:A,withLabels:E,withLegend:I,legendProps:$,withTooltip:P,tooltipProps:Y,startAngle:z,endAngle:O,attributes:V,...X}=o,[q,H]=(0,r.useState)(null),J=(0,p.I)({name:"RadialBarChart",classes:b,props:o,className:m,style:R,classNames:s,styles:_,unstyled:B,attributes:V,vars:D,varsResolver:k}),M=(0,g.xd)(),U=N.map(({color:a,...e})=>{let o=(0,u.r)(a,M);return{...e,fill:o,fillOpacity:q?q===e.name?e.opacity||1:.05:e.opacity||1}}),{resolvedClassNames:W,resolvedStyles:Z}=(0,x.Y)({classNames:s,styles:_,props:o});return(0,t.jsx)(v.a,{ref:e,...J("root"),...X,children:(0,t.jsx)(l.u,{children:(0,t.jsxs)(n.D,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:K,startAngle:z,endAngle:O,data:U,...A,children:[(0,t.jsx)(d.Z,{label:E?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:L?{fill:"var(--chart-empty-background)"}:void 0,dataKey:S,isAnimationActive:!1,...T}),I&&(0,t.jsx)(i.s,{verticalAlign:"bottom",content:a=>(0,t.jsx)(w._,{payload:a.payload?.map(a=>({...a,dataKey:a.payload?.name})),onHighlight:H,legendPosition:$?.verticalAlign||"bottom",classNames:W,styles:Z,centered:!0,attributes:V}),...$}),P&&(0,t.jsx)(c.m,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:a})=>(0,t.jsxs)(f.t,{...J("tooltip"),children:[(0,t.jsxs)(y.Y,{gap:"sm",children:[(0,t.jsx)(j.q,{color:a?.[0]?.payload.fill,size:12,withShadow:!1}),(0,t.jsx)("span",{children:a?.[0]?.payload.name})]}),(0,t.jsx)("span",{children:a?.[0]?.payload[S]})]}),...Y})]})})})});R.displayName="@mantine/core/RadialBarChart",R.classes=b},86970:(a,e,o)=>{"use strict";o.d(e,{W:()=>n});var t=o(6029),r=o(68765),l=o(38877);let n={type:"code",component:function(){return(0,t.jsx)(r.D,{data:l.p,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.k,language:"tsx"}]}},88449:(a,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>x});var t=o(6029),r=o(16285),l=o(68765),n=o(38877);let d={type:"code",component:function(){return(0,t.jsx)(l.D,{data:n.p,dataKey:"value",h:220})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n.k,language:"tsx"}]},i={type:"configurator",component:function(a){let e=[{name:"18-24",value:31.47,color:a.color},{name:"25-29",value:26.69,color:a.color},{name:"30-34",value:15.69,color:a.color},{name:"35-39",value:8.22,color:a.color},{name:"40-49",value:8.63,color:a.color},{name:"50+",value:2.63,color:a.color},{name:"unknown",value:6.67,color:a.color}];return(0,t.jsx)(l.D,{data:e,dataKey:"value",h:220,w:220})},code:a=>`
import { RadialBarChart } from '@mantine/charts';

const data = [
    { name: '18-24', value: 31.47, color: '${a.color}' },
    { name: '25-29', value: 26.69, color: '${a.color}' },
    { name: '30-34', value: 15.69, color: '${a.color}' },
    { name: '35-39', value: 8.22, color: '${a.color}' },
    { name: '40-49', value: 8.63, color: '${a.color}' },
    { name: '50+', value: 2.63, color: '${a.color}' },
    { name: 'unknown', value: 6.67, color: '${a.color}' },
  ];

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},c={type:"code",component:function(){return(0,t.jsx)(l.D,{data:n.p,dataKey:"value",h:260,withLegend:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}
`,language:"tsx"},{fileName:"data.ts",code:n.k,language:"tsx"}]};var s=o(86970);let u={type:"code",component:function(){return(0,t.jsx)(l.D,{data:n.p,dataKey:"value",h:220,withTooltip:!1})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n.k,language:"tsx"}]};var m=o(38547),h=o(5262);let p=(0,m.P)(h.XZ.RadialBarChart);function g(a){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,r.R)(),...a.components},{Demo:o}=e;return o||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadialBarChart"})," is based on ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadialBarChart",children:"RadialBarChart recharts component"}),":"]}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference theme colors or use any valid CSS color in ",(0,t.jsx)(e.code,{children:"color"})," property of ",(0,t.jsx)(e.code,{children:"data"}),":"]}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(e.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(e.p,{children:["To show legend, set ",(0,t.jsx)(e.code,{children:"withLegend"})," prop:"]}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"labels",children:"Labels"}),"\n",(0,t.jsxs)(e.p,{children:["To show labels, set ",(0,t.jsx)(e.code,{children:"withLabels"})," prop:"]}),"\n",(0,t.jsx)(o,{data:s.W}),"\n",(0,t.jsx)(e.h2,{id:"hide-tooltip",children:"Hide tooltip"}),"\n",(0,t.jsxs)(e.p,{children:["To hide tooltip, set ",(0,t.jsx)(e.code,{children:"withTooltip={false}"})," prop:"]}),"\n",(0,t.jsx)(o,{data:u})]})}function x(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...a,children:(0,t.jsx)(g,{...a})})}}},a=>{a.O(0,[29040,70330,5742,38547,90636,46593,38792],()=>a(a.s=35229)),_N_E=a.O()}]);
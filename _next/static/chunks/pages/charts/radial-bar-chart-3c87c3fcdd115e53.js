(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{72556:function(a,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radial-bar-chart",function(){return o(67485)}])},67485:function(a,e,o){"use strict";o.r(e),o.d(e,{default:function(){return g}});var t=o(52322),n=o(45392),r=o(3769),l=o(39770);let i={type:"code",component:function(){return(0,t.jsx)(r.B,{data:l.a,dataKey:"value",h:220})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}]},c={type:"configurator",component:function(a){let e=[{name:"18-24",value:31.47,color:a.color},{name:"25-29",value:26.69,color:a.color},{name:"30-34",value:15.69,color:a.color},{name:"35-39",value:8.22,color:a.color},{name:"40-49",value:8.63,color:a.color},{name:"50+",value:2.63,color:a.color},{name:"unknown",value:6.67,color:a.color}];return(0,t.jsx)(r.B,{data:e,dataKey:"value",h:220,w:220})},code:a=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},d={type:"code",component:function(){return(0,t.jsx)(r.B,{data:l.a,dataKey:"value",h:260,withLegend:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}]};var s=o(28683);let u={type:"code",component:function(){return(0,t.jsx)(r.B,{data:l.a,dataKey:"value",h:220,withTooltip:!1})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}]};var m=o(54078),h=o(15019);let p=(0,m.A)(h.us.RadialBarChart);function f(a){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...a.components},{Demo:o}=e;return o||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadialBarChart"})," is based on ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadialBarChart",children:"RadialBarChart recharts component"}),":"]}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference theme colors or use any valid CSS color in ",(0,t.jsx)(e.code,{children:"color"})," property of ",(0,t.jsx)(e.code,{children:"data"}),":"]}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(e.p,{children:["To show legend, set ",(0,t.jsx)(e.code,{children:"withLegend"})," prop:"]}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(e.h2,{id:"labels",children:"Labels"}),"\n",(0,t.jsxs)(e.p,{children:["To show labels, set ",(0,t.jsx)(e.code,{children:"withLabels"})," prop:"]}),"\n",(0,t.jsx)(o,{data:s.p}),"\n",(0,t.jsx)(e.h2,{id:"hide-tooltip",children:"Hide tooltip"}),"\n",(0,t.jsxs)(e.p,{children:["To hide tooltip, set ",(0,t.jsx)(e.code,{children:"withTooltip={false}"})," prop:"]}),"\n",(0,t.jsx)(o,{data:u})]})}function g(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...a,children:(0,t.jsx)(f,{...a})})}},28683:function(a,e,o){"use strict";o.d(e,{p:function(){return l}});var t=o(52322),n=o(3769),r=o(39770);let l={type:"code",component:function(){return(0,t.jsx)(n.B,{data:r.a,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:r.o,language:"tsx"}]}},39770:function(a,e,o){"use strict";o.d(e,{a:function(){return t},o:function(){return n}});let t=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],n=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},46293:function(a,e,o){"use strict";o.d(e,{Q:function(){return m}});var t=o(52322),n=o(82027),r=o(38483),l=o(46690),i=o(27009),c=o(28559),d=o(64438),s={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let u={},m=(0,n.d5)((a,e)=>{let o=(0,r.w)("ChartLegend",u,a),{classNames:n,className:m,style:h,styles:p,unstyled:f,vars:g,payload:x,onHighlight:v,legendPosition:y,mod:j,series:w,showColor:b,centered:C,...B}=o,R=(0,l.y)({name:"ChartLegend",classes:s,props:o,className:m,style:h,classNames:n,styles:p,unstyled:f});if(!x)return null;let N=x.filter(a=>"none"!==a.color).map(a=>{let e=a.dataKey?.split(".").pop();return{...a,dataKey:e,payload:{...a.payload,name:e,dataKey:e}}}),_=(0,d.v)(w),K=N.map((a,e)=>(0,t.jsxs)("div",{...R("legendItem"),onMouseEnter:()=>v(a.dataKey),onMouseLeave:()=>v(null),"data-without-color":!1===b||void 0,children:[(0,t.jsx)(i.b,{color:a.color,size:12,...R("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...R("legendItemName"),children:_[a.dataKey]||a.dataKey})]},e));return(0,t.jsx)(c.x,{ref:e,mod:[{position:y,centered:C},j],...R("legend"),...B,children:K})});m.displayName="@mantine/charts/ChartLegend"},3769:function(a,e,o){"use strict";o.d(e,{B:function(){return R}});var t=o(52322),n=o(2784),r=o(18205),l=o(43470),i=o(20341),c=o(55734),d=o(21154),s=o(11200),u=o(13588),m=o(82027),h=o(38483),p=o(46690),f=o(68755),g=o(51477),x=o(28559),v=o(1198),y=o(93010),j=o(27009),w=o(46293),b={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let C={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},B=(0,s.Z)((a,{emptyBackgroundColor:e})=>({root:{"--chart-empty-background":e?(0,u.p)(e,a):void 0}})),R=(0,m.d5)((a,e)=>{let o=(0,h.w)("RadialBarChart",C,a),{classNames:s,className:m,style:R,styles:N,unstyled:_,vars:K,data:k,barSize:D,withBackground:L,dataKey:A,radialBarProps:S,radialBarChartProps:T,withLabels:E,withLegend:$,legendProps:I,withTooltip:z,tooltipProps:O,startAngle:P,endAngle:X,...Z}=o,[H,M]=(0,n.useState)(null),Q=(0,p.y)({name:"RadialBarChart",classes:b,props:o,className:m,style:R,classNames:s,styles:N,unstyled:_,vars:K,varsResolver:B}),U=(0,f.rZ)(),V=k.map(({color:a,...e})=>{let o=(0,u.p)(a,U);return{...e,fill:o,fillOpacity:H?H===e.name?e.opacity||1:.05:e.opacity||1}}),{resolvedClassNames:F,resolvedStyles:G}=(0,g.h)({classNames:s,styles:N,props:o});return(0,t.jsx)(x.x,{ref:e,...Q("root"),...Z,children:(0,t.jsx)(r.h,{children:(0,t.jsxs)(l.B,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:D,startAngle:P,endAngle:X,data:V,...T,children:[(0,t.jsx)(i.G,{label:E?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:L?{fill:"var(--chart-empty-background)"}:void 0,dataKey:A,isAnimationActive:!1,...S}),$&&(0,t.jsx)(c.D,{verticalAlign:"bottom",content:a=>(0,t.jsx)(w.Q,{payload:a.payload?.map(a=>({...a,dataKey:a.payload?.name})),onHighlight:M,legendPosition:I?.verticalAlign||"bottom",classNames:F,styles:G,centered:!0}),...I}),z&&(0,t.jsx)(d.u,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:a})=>(0,t.jsxs)(v.X,{...Q("tooltip"),children:[(0,t.jsxs)(y.Z,{gap:"sm",children:[(0,t.jsx)(j.b,{color:a?.[0]?.payload.fill,size:12,withShadow:!1}),(0,t.jsx)("span",{children:a?.[0]?.payload.name})]}),(0,t.jsx)("span",{children:a?.[0]?.payload[A]})]}),...O})]})})})});R.displayName="@mantine/core/RadialBarChart",R.classes=b},64438:function(a,e,o){"use strict";function t(a){return a?a.reduce((a,e)=>{let o=e.name.search(/\./);return o>=0?a[e.name.substring(o+1)]=e.label:a[e.name]=e.label,a},{}):{}}o.d(e,{v:function(){return t}})}},function(a){a.O(0,[61177,5248,59966,43470,66748,61639,92888,49774,40179],function(){return a(a.s=72556)}),_N_E=a.O()}]);
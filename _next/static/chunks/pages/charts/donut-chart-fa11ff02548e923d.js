(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96169],{70263:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/donut-chart",function(){return a(82261)}])},82261:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var o=a(31085),n=a(71184),r=a(82983),l=a(96669),s=a(53168);let i={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,withLabels:!0,data:s.p})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]},d={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,data:s.p,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"},{type:"number",prop:"thickness",initialValue:20,min:2,max:30,step:1,libraryValue:"__"}]},c={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,data:s.p})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"paddingAngle",initialValue:10,min:0,max:30,step:1,libraryValue:"__"}]},m={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { DonutChart } from '@mantine/charts';

function Demo() {
  return (
    <DonutChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var h=a(56051),p=a(93065);let u={type:"code",component:function(){return(0,o.jsxs)(h.Y,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.V,{data:s.p,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.V,{data:s.p,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},x={type:"code",component:function(){return(0,o.jsx)(l.V,{data:s.p,withTooltip:!1})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},f={type:"code",component:function(){return(0,o.jsx)(l.V,{data:s.p,chartLabel:"Users by country"})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},g={type:"code",component:function(){return(0,o.jsx)(l.V,{data:s.p,startAngle:180,endAngle:0})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},j={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,data:s.p})},code:[{fileName:"Demo.tsx",code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]};var y={root:"m_3e09cb9d"};let b={type:"code",component:function(){return(0,o.jsx)("div",{className:y.root,children:(0,o.jsx)(l.V,{data:s.p,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <DonutChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,language:"scss",fileName:"Demo.module.css"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var v=a(18675),D=a(20017);let C=(0,v.P)(D.XZ.DonutChart);function k(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"DonutChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.C}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment:"]}),"\n",(0,o.jsx)(a,{data:i}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," prop is set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"padding-angle",children:"Padding angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"paddingAngle"})," prop to control the space between segments:"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"chart-label",children:"Chart label"}),"\n",(0,o.jsxs)(t.p,{children:["To display a label in the center of the chart, use ",(0,o.jsx)(t.code,{children:"chartLabel"})," prop.\nIt accepts a string or a number:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { DonutChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <DonutChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:b})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(C,{...e,children:(0,o.jsx)(k,{...e})})}},82983:(e,t,a)=>{"use strict";a.d(t,{C:()=>l});var o=a(31085),n=a(96669),r=a(53168);let l={type:"code",component:function(){return(0,o.jsx)(n.V,{data:r.p})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.k,language:"tsx",fileName:"data.ts"}],centered:!0}},53168:(e,t,a)=>{"use strict";a.d(t,{k:()=>n,p:()=>o});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},93581:(e,t,a)=>{"use strict";a.d(t,{I:()=>x,r:()=>h});var o=a(31085),n=a(6754),r=a(29686),l=a(92408),s=a(69564),i=a(51606),d=a(34056),c=a(88500),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},n=Object.entries(e.payload).reduce((e,t)=>{let[o,n]=t;return o===a?e:{...e,[o]:n}},{});return{...e,name:e.name.substring(t+1),payload:{...n,...o}}}return e});return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let u={type:"area",showColor:!0},x=(0,n.P9)((e,t)=>{let a=(0,r.Y)("ChartTooltip",u,e),{classNames:n,className:x,style:f,styles:g,unstyled:j,vars:y,payload:b,label:v,unit:D,type:C,segmentId:k,mod:_,series:N,valueFormatter:w,showColor:A,...V}=a,S=(0,l.xd)(),T=(0,s.I)({name:"ChartTooltip",classes:m,props:a,className:x,style:f,classNames:n,styles:g,unstyled:j});if(!b)return null;let I=h(b,k),L="scatter"===C?b[0]?.payload?.name:null,z=(0,c.J)(N),U=v||L,E=I.map(e=>(0,o.jsxs)("div",{"data-type":C,...T("tooltipItem"),children:[(0,o.jsxs)("div",{...T("tooltipItemBody"),children:[A&&(0,o.jsx)("svg",{...T("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,i.r)(e.color,S),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...T("tooltipItemName"),children:z[e.name]||e.name})]}),(0,o.jsxs)("div",{...T("tooltipItemData"),children:["function"==typeof w?w(p(e,C)):p(e,C),D||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...T("tooltip"),mod:[{type:C},_],ref:t,...V,children:[U&&(0,o.jsx)("div",{...T("tooltipLabel"),children:U}),(0,o.jsx)("div",{...T("tooltipBody"),children:E})]})});x.displayName="@mantine/charts/ChartTooltip"},96669:(e,t,a)=>{"use strict";a.d(t,{V:()=>k});var o=a(31085),n=a(87183),r=a(79874),l=a(65340),s=a(4206),i=a(37662),d=a(7098),c=a(51606),m=a(39735),h=a(6754),p=a(29686),u=a(92408),x=a(69564),f=a(36456),g=a(34056),j=a(93581),y={root:"m_a410e613",label:"m_ddb0bfe3"};let b={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,labelsType:"value",tooltipDataSource:"all"},v=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":o?(0,m.D)(n+80):(0,m.D)(n)}})),D=(e,t,a,o)=>"percent"===e?`${(100*a).toFixed(0)}%`:"function"==typeof o?o(t):t,C=(e,t)=>({x:a,y:n,cx:r,cy:l,percent:s,value:i})=>(0,o.jsx)("text",{x:a,y:n,cx:r,cy:l,textAnchor:a>r?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,o.jsx)("tspan",{x:a,children:D(e,i,s,t)})}),k=(0,h.P9)((e,t)=>{let a=(0,p.Y)("DonutChart",b,e),{classNames:d,className:m,style:h,styles:D,unstyled:k,vars:_,data:N,withTooltip:w,tooltipAnimationDuration:A,tooltipProps:V,pieProps:S,paddingAngle:T,withLabels:I,withLabelsLine:L,size:z,thickness:U,strokeWidth:E,startAngle:P,endAngle:B,tooltipDataSource:O,chartLabel:Y,children:F,pieChartProps:W,valueFormatter:J,strokeColor:K,labelsType:G,...R}=a,X=(0,u.xd)(),$=(0,x.I)({name:"DonutChart",classes:y,props:a,className:m,style:h,classNames:d,styles:D,unstyled:k,vars:_,varsResolver:v}),{resolvedClassNames:Z,resolvedStyles:q}=(0,f.Y)({classNames:d,styles:D,props:a}),H=N.map((e,t)=>(0,o.jsx)(n.f,{fill:(0,c.r)(e.color,X),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:E},t));return(0,o.jsx)(g.a,{ref:t,size:z,...$("root"),...R,children:(0,o.jsx)(r.u,{children:(0,o.jsxs)(l.r,{...W,children:[(0,o.jsx)(s.F,{data:N,innerRadius:z/2-U,outerRadius:z/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:P,endAngle:B,label:!!I&&C(G||"value",J),labelLine:!!L&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...S,children:H}),Y&&(0,o.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...$("label"),children:Y}),w&&(0,o.jsx)(i.m,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.I,{payload:N,classNames:Z,styles:q,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:J}),...V}),F]})})})});k.displayName="@mantine/charts/DonutChart",k.classes=y},88500:(e,t,a)=>{"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{J:()=>o})}},e=>{var t=t=>e(e.s=t);e.O(0,[35115,46828,65340,18675,90636,46593,38792],()=>t(70263)),_N_E=e.O()}]);
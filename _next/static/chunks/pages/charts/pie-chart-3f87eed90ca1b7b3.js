(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56099],{36975:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pie-chart",function(){return a(34670)}])},34670:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var o=a(31085),r=a(71184),n=a(55971),i=a(18891),l=a(22118),s=a(1850);let d={type:"configurator",component:function(e){return(0,o.jsx)(l.r,{...e,data:s.p,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},c={type:"configurator",component:function(e){return(0,o.jsx)(l.r,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { PieChart } from '@mantine/charts';

function Demo() {
  return (
    <PieChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},m={type:"code",component:function(){return(0,o.jsx)(l.r,{data:s.p,withTooltip:!0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var h=a(56051),p=a(93065);let u={type:"code",component:function(){return(0,o.jsxs)(h.Y,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.r,{data:s.p,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.r,{data:s.p,withTooltip:!0,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <PieChart data={data} withTooltip tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <PieChart data={data} withTooltip mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},x={type:"code",component:function(){return(0,o.jsx)(l.r,{data:s.p,startAngle:180,endAngle:0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},f={type:"configurator",component:function(e){return(0,o.jsx)(l.r,{...e,data:s.p})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:2,step:.1,libraryValue:"__"}]};var g={root:"m_e00fbef3"};let j={type:"code",component:function(){return(0,o.jsx)("div",{className:g.root,children:(0,o.jsx)(l.r,{data:s.p,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <PieChart data={data} strokeColor="var(--card-bg)" />
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var y=a(18675),v=a(20017);let b=(0,y.P)(v.XZ.PieChart);function C(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"PieChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:n.C}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment. Use ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop\nto control the position of labels relative to the corresponding segment. Note that if\nyour chart has a lot of segments and ",(0,o.jsx)(t.code,{children:'labelPosition="inside"'})," is set, labels might overlap.\nIn this case, use ",(0,o.jsx)(t.code,{children:'labelPosition="outside'}),"."]}),"\n",(0,o.jsx)(a,{data:i.I}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," and ",(0,o.jsx)(t.code,{children:'labelPosition="outside"'})," prop are set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," and ",(0,o.jsx)(t.code,{children:"w"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"enable-tooltip",children:"Enable tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To enable the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip"})," prop:"]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { PieChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <PieChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:j})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(b,{...e,children:(0,o.jsx)(C,{...e})})}},55971:(e,t,a)=>{"use strict";a.d(t,{C:()=>i});var o=a(31085),r=a(22118),n=a(1850);let i={type:"code",component:function(){return(0,o.jsx)(r.r,{data:n.p})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.k,language:"tsx",fileName:"data.ts"}],centered:!0}},18891:(e,t,a)=>{"use strict";a.d(t,{I:()=>i});var o=a(31085),r=a(22118),n=a(1850);let i={type:"configurator",component:function(e){return(0,o.jsx)(r.r,{...e,withLabels:!0,data:n.p,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n.k,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},1850:(e,t,a)=>{"use strict";a.d(t,{k:()=>r,p:()=>o});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},93581:(e,t,a)=>{"use strict";a.d(t,{I:()=>x,r:()=>h});var o=a(31085),r=a(6754),n=a(29686),i=a(92408),l=a(69564),s=a(51606),d=a(34056),c=a(88500),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},r=Object.entries(e.payload).reduce((e,t)=>{let[o,r]=t;return o===a?e:{...e,[o]:r}},{});return{...e,name:e.name.substring(t+1),payload:{...r,...o}}}return e});return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let u={type:"area",showColor:!0},x=(0,r.P9)((e,t)=>{let a=(0,n.Y)("ChartTooltip",u,e),{classNames:r,className:x,style:f,styles:g,unstyled:j,vars:y,payload:v,label:b,unit:C,type:P,segmentId:k,mod:w,series:D,valueFormatter:N,showColor:_,attributes:A,...S}=a,T=(0,i.xd)(),I=(0,l.I)({name:"ChartTooltip",classes:m,props:a,className:x,style:f,classNames:r,styles:g,unstyled:j,attributes:A});if(!v)return null;let V=h(v,k),z="scatter"===P?v[0]?.payload?.name:null,L=(0,c.J)(D),E=b||z,U=V.map(e=>(0,o.jsxs)("div",{"data-type":P,...I("tooltipItem"),children:[(0,o.jsxs)("div",{...I("tooltipItemBody"),children:[_&&(0,o.jsx)("svg",{...I("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,s.r)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...I("tooltipItemName"),children:L[e.name]||e.name})]}),(0,o.jsxs)("div",{...I("tooltipItemData"),children:["function"==typeof N?N(p(e,P)):p(e,P),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...I("tooltip"),mod:[{type:P},w],ref:t,...S,children:[E&&(0,o.jsx)("div",{...I("tooltipLabel"),children:E}),(0,o.jsx)("div",{...I("tooltipBody"),children:U})]})});x.displayName="@mantine/charts/ChartTooltip"},22118:(e,t,a)=>{"use strict";a.d(t,{r:()=>w});var o=a(31085),r=a(87183),n=a(79874),i=a(65340),l=a(4206),s=a(37662),d=a(7098),c=a(51606),m=a(39735),h=a(6754),p=a(29686),u=a(92408),x=a(69564),f=a(36456),g=a(34056),j=a(93581),y={root:"m_cd8943fd"};let v={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:o,size:r,labelsPosition:n})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":o&&"outside"===n?(0,m.D)(r+80):(0,m.D)(r)}})),C=(e,t,a,o)=>"percent"===e&&"number"==typeof a?`${(100*a).toFixed(0)}%`:"function"==typeof o&&"number"==typeof t?o(t):t,P=(e,t)=>({cx:a,cy:r,midAngle:n,innerRadius:i,outerRadius:l,value:s,percent:d})=>{let c=Math.PI/180,m=i+(l-i)*.5,h=a+m*Math.cos(-(n||0)*c),p=r+m*Math.sin(-(n||0)*c);return(0,o.jsx)("text",{x:h,y:p,textAnchor:h>a?"start":"end",dominantBaseline:"central",className:y.label,children:C(e,s,d,t)})},k=(e,t)=>({x:a,y:r,cx:n,cy:i,percent:l,value:s})=>(0,o.jsx)("text",{x:a,y:r,cx:n,cy:i,textAnchor:a>n?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,o.jsx)("tspan",{x:a,children:C(e,s,l,t)})}),w=(0,h.P9)((e,t)=>{let a=(0,p.Y)("PieChart",v,e),{classNames:d,className:m,style:h,styles:C,unstyled:w,vars:D,data:N,withTooltip:_,tooltipAnimationDuration:A,tooltipProps:S,pieProps:T,paddingAngle:I,withLabels:V,withLabelsLine:z,size:L,strokeWidth:E,startAngle:U,endAngle:B,tooltipDataSource:O,children:Y,pieChartProps:F,labelsPosition:J,valueFormatter:K,labelsType:W,strokeColor:G,attributes:M,...R}=a,X=(0,u.xd)(),$=(0,x.I)({name:"PieChart",classes:y,props:a,className:m,style:h,classNames:d,styles:C,unstyled:w,attributes:M,vars:D,varsResolver:b}),{resolvedClassNames:Z,resolvedStyles:q}=(0,f.Y)({classNames:d,styles:C,props:a}),H=N.map((e,t)=>(0,o.jsx)(r.f,{fill:(0,c.r)(e.color,X),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:E},t));return(0,o.jsx)(g.a,{ref:t,size:L,...$("root"),...R,children:(0,o.jsx)(n.u,{children:(0,o.jsxs)(i.r,{...F,children:[(0,o.jsx)(l.F,{data:N,innerRadius:0,outerRadius:L/2,dataKey:"value",isAnimationActive:!1,paddingAngle:I,startAngle:U,endAngle:B,label:!!V&&("inside"===J?P(W||"value",K):k(W||"value",K)),labelLine:!!z&&"outside"===J&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...T,children:H}),_&&(0,o.jsx)(s.m,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.I,{payload:N,classNames:Z,styles:q,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:K,attributes:M}),...S}),Y]})})})});w.displayName="@mantine/charts/PieChart",w.classes=y},88500:(e,t,a)=>{"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{J:()=>o})}},e=>{var t=t=>e(e.s=t);e.O(0,[35115,46828,65340,18675,90636,46593,38792],()=>t(36975)),_N_E=e.O()}]);
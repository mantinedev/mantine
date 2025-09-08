(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56099],{12588:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var o=a(6029),r=a(16285),n=a(16022),i=a(79246),l=a(85048),s=a(41315);let d={type:"configurator",component:function(e){return(0,o.jsx)(l.r,{...e,data:s.p,mih:300})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var h=a(57414),p=a(45208);let u={type:"code",component:function(){return(0,o.jsxs)(h.Y,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.r,{data:s.p,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.r,{data:s.p,withTooltip:!0,mx:"auto"})]})]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var y=a(38547),b=a(5262);let v=(0,y.P)(b.XZ.PieChart);function C(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"PieChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:n.C}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment. Use ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop\nto control the position of labels relative to the corresponding segment. Note that if\nyour chart has a lot of segments and ",(0,o.jsx)(t.code,{children:'labelPosition="inside"'})," is set, labels might overlap.\nIn this case, use ",(0,o.jsx)(t.code,{children:'labelPosition="outside'}),"."]}),"\n",(0,o.jsx)(a,{data:i.I}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," and ",(0,o.jsx)(t.code,{children:'labelPosition="outside"'})," prop are set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," and ",(0,o.jsx)(t.code,{children:"w"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"enable-tooltip",children:"Enable tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To enable the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip"})," prop:"]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { PieChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <PieChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:j})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(C,{...e})})}},16022:(e,t,a)=>{"use strict";a.d(t,{C:()=>i});var o=a(6029),r=a(85048),n=a(41315);let i={type:"code",component:function(){return(0,o.jsx)(r.r,{data:n.p})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.k,language:"tsx",fileName:"data.ts"}],centered:!0}},38969:(e,t,a)=>{"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{J:()=>o})},41315:(e,t,a)=>{"use strict";a.d(t,{k:()=>r,p:()=>o});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},42738:(e,t,a)=>{"use strict";a.d(t,{I:()=>x,r:()=>h});var o=a(6029),r=a(8411),n=a(38919),i=a(49643),l=a(15583),s=a(21351),d=a(76320),c=a(38969),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},r=Object.entries(e.payload).reduce((e,t)=>{let[o,r]=t;return o===a?e:{...e,[o]:r}},{});return{...e,name:e.name.substring(t+1),payload:{...r,...o}}}return e});return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let u={type:"area",showColor:!0},x=(0,r.P9)((e,t)=>{let a=(0,n.Y)("ChartTooltip",u,e),{classNames:r,className:x,style:f,styles:g,unstyled:j,vars:y,payload:b,label:v,unit:C,type:P,segmentId:k,mod:w,series:D,valueFormatter:N,showColor:_,attributes:A,...S}=a,T=(0,i.xd)(),I=(0,l.I)({name:"ChartTooltip",classes:m,props:a,className:x,style:f,classNames:r,styles:g,unstyled:j,attributes:A});if(!b)return null;let V=h(b,k),z="scatter"===P?b[0]?.payload?.name:null,L=(0,c.J)(D),E=v||z,U=V.map(e=>(0,o.jsxs)("div",{"data-type":P,...I("tooltipItem"),children:[(0,o.jsxs)("div",{...I("tooltipItemBody"),children:[_&&(0,o.jsx)("svg",{...I("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,s.r)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...I("tooltipItemName"),children:L[e.name]||e.name})]}),(0,o.jsxs)("div",{...I("tooltipItemData"),children:["function"==typeof N?N(p(e,P)):p(e,P),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...I("tooltip"),mod:[{type:P},w],ref:t,...S,children:[E&&(0,o.jsx)("div",{...I("tooltipLabel"),children:E}),(0,o.jsx)("div",{...I("tooltipBody"),children:U})]})});x.displayName="@mantine/charts/ChartTooltip"},79246:(e,t,a)=>{"use strict";a.d(t,{I:()=>i});var o=a(6029),r=a(85048),n=a(41315);let i={type:"configurator",component:function(e){return(0,o.jsx)(r.r,{...e,withLabels:!0,data:n.p,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n.k,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},79671:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pie-chart",function(){return a(12588)}])},85048:(e,t,a)=>{"use strict";a.d(t,{r:()=>P});var o=a(6029),r=a(53259),n=a(40684),i=a(10200),l=a(65248),s=a(31292),d=a(33987),c=a(21351),m=a(26082),h=a(8411),p=a(38919),u=a(49643),x=a(15583),f=a(38757),g=a(76320),j=a(42738),y={root:"m_cd8943fd"};let b={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},v=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:o,size:r,labelsPosition:n})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":o&&"outside"===n?(0,m.D)(r+80):(0,m.D)(r)}})),C=(e,t,a,o)=>"percent"===e&&"number"==typeof a?`${(100*a).toFixed(0)}%`:"function"==typeof o&&"number"==typeof t?o(t):t,P=(0,h.P9)((e,t)=>{let a,d,m=(0,p.Y)("PieChart",b,e),{classNames:h,className:P,style:k,styles:w,unstyled:D,vars:N,data:_,withTooltip:A,tooltipAnimationDuration:S,tooltipProps:T,pieProps:I,paddingAngle:V,withLabels:z,withLabelsLine:L,size:E,strokeWidth:U,startAngle:B,endAngle:O,tooltipDataSource:Y,children:F,pieChartProps:J,labelsPosition:K,valueFormatter:W,labelsType:G,strokeColor:M,attributes:R,...X}=m,$=(0,u.xd)(),Z=(0,x.I)({name:"PieChart",classes:y,props:m,className:P,style:k,classNames:h,styles:w,unstyled:D,attributes:R,vars:N,varsResolver:v}),{resolvedClassNames:q,resolvedStyles:H}=(0,f.Y)({classNames:h,styles:w,props:m}),Q=_.map((e,t)=>(0,o.jsx)(r.f,{fill:(0,c.r)(e.color,$),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:U},t));return(0,o.jsx)(g.a,{ref:t,size:E,...Z("root"),...X,children:(0,o.jsx)(n.u,{children:(0,o.jsxs)(i.r,{...J,children:[(0,o.jsx)(l.F,{data:_,innerRadius:0,outerRadius:E/2,dataKey:"value",isAnimationActive:!1,paddingAngle:V,startAngle:B,endAngle:O,label:!!z&&("inside"===K?(a=G||"value",({cx:e,cy:t,midAngle:r,innerRadius:n,outerRadius:i,value:l,percent:s})=>{let d=Math.PI/180,c=n+(i-n)*.5,m=e+c*Math.cos(-(r||0)*d),h=t+c*Math.sin(-(r||0)*d);return(0,o.jsx)("text",{x:m,y:h,textAnchor:m>e?"start":"end",dominantBaseline:"central",className:y.label,children:C(a,l,s,W)})}):(d=G||"value",({x:e,y:t,cx:a,cy:r,percent:n,value:i})=>(0,o.jsx)("text",{x:e,y:t,cx:a,cy:r,textAnchor:e>a?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,o.jsx)("tspan",{x:e,children:C(d,i,n,W)})}))),labelLine:!!L&&"outside"===K&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...I,children:Q}),A&&(0,o.jsx)(s.m,{animationDuration:S,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.I,{payload:_,classNames:q,styles:H,type:"radial",segmentId:"segment"===Y?e?.[0]?.name:void 0,valueFormatter:W,attributes:R}),...T}),F]})})})});P.displayName="@mantine/charts/PieChart",P.classes=y}},e=>{e.O(0,[29040,70330,10200,38547,90636,46593,38792],()=>e(e.s=79671)),_N_E=e.O()}]);
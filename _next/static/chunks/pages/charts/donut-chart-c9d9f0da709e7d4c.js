(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96169],{25107:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var o=a(6029),n=a(16285),r=a(41074),l=a(42056),s=a(66877);let i={type:"configurator",component:function(e){return(0,o.jsx)(l.V,{...e,withLabels:!0,data:s.p})},code:[{fileName:"Demo.tsx",code:`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var h=a(57414),p=a(45208);let u={type:"code",component:function(){return(0,o.jsxs)(h.Y,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.V,{data:s.p,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.V,{data:s.p,mx:"auto"})]})]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var v=a(38547),D=a(5262);let C=(0,v.P)(D.XZ.DonutChart);function k(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"DonutChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.C}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment:"]}),"\n",(0,o.jsx)(a,{data:i}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," prop is set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"padding-angle",children:"Padding angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"paddingAngle"})," prop to control the space between segments:"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"chart-label",children:"Chart label"}),"\n",(0,o.jsxs)(t.p,{children:["To display a label in the center of the chart, use ",(0,o.jsx)(t.code,{children:"chartLabel"})," prop.\nIt accepts a string or a number:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { DonutChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <DonutChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:b})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(C,{...e,children:(0,o.jsx)(k,{...e})})}},25511:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/donut-chart",function(){return a(25107)}])},38969:(e,t,a)=>{"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{J:()=>o})},41074:(e,t,a)=>{"use strict";a.d(t,{C:()=>l});var o=a(6029),n=a(42056),r=a(66877);let l={type:"code",component:function(){return(0,o.jsx)(n.V,{data:r.p})},code:[{code:`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.k,language:"tsx",fileName:"data.ts"}],centered:!0}},42056:(e,t,a)=>{"use strict";a.d(t,{V:()=>D});var o=a(6029),n=a(53259),r=a(40684),l=a(10200),s=a(65248),i=a(31292),d=a(33987),c=a(21351),m=a(26082),h=a(8411),p=a(38919),u=a(49643),x=a(15583),f=a(38757),g=a(76320),j=a(42738),y={root:"m_a410e613",label:"m_ddb0bfe3"};let b={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,labelsType:"value",tooltipDataSource:"all"},v=(0,d.V)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n})=>({root:{"--chart-stroke-color":t?(0,c.r)(t,e):void 0,"--chart-labels-color":a?(0,c.r)(a,e):void 0,"--chart-size":o?(0,m.D)(n+80):(0,m.D)(n)}})),D=(0,h.P9)((e,t)=>{let a,d=(0,p.Y)("DonutChart",b,e),{classNames:m,className:h,style:D,styles:C,unstyled:k,vars:_,data:N,withTooltip:w,tooltipAnimationDuration:A,tooltipProps:V,pieProps:S,paddingAngle:T,withLabels:I,withLabelsLine:L,size:z,thickness:U,strokeWidth:E,startAngle:P,endAngle:B,tooltipDataSource:O,chartLabel:Y,children:F,pieChartProps:W,valueFormatter:J,strokeColor:K,labelsType:G,attributes:R,...X}=d,$=(0,u.xd)(),Z=(0,x.I)({name:"DonutChart",classes:y,props:d,className:h,style:D,classNames:m,styles:C,unstyled:k,attributes:R,vars:_,varsResolver:v}),{resolvedClassNames:q,resolvedStyles:H}=(0,f.Y)({classNames:m,styles:C,props:d}),M=N.map((e,t)=>(0,o.jsx)(n.f,{fill:(0,c.r)(e.color,$),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:E},t));return(0,o.jsx)(g.a,{ref:t,size:z,...Z("root"),...X,children:(0,o.jsx)(r.u,{children:(0,o.jsxs)(l.r,{...W,children:[(0,o.jsx)(s.F,{data:N,innerRadius:z/2-U,outerRadius:z/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:P,endAngle:B,label:!!I&&(a=G||"value",({x:e,y:t,cx:n,cy:r,percent:l,value:s})=>(0,o.jsx)("text",{x:e,y:t,cx:n,cy:r,textAnchor:e>n?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,o.jsx)("tspan",{x:e,children:((e,t,a,o)=>"percent"===e?`${(100*(a||0)).toFixed(0)}%`:"function"==typeof o?o(t||0):t)(a,s,l,J)})})),labelLine:!!L&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...S,children:M}),Y&&(0,o.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...Z("label"),children:Y}),w&&(0,o.jsx)(i.m,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.I,{payload:N,classNames:q,styles:H,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:J,attributes:R}),...V}),F]})})})});D.displayName="@mantine/charts/DonutChart",D.classes=y},42738:(e,t,a)=>{"use strict";a.d(t,{I:()=>x,r:()=>h});var o=a(6029),n=a(8411),r=a(38919),l=a(49643),s=a(15583),i=a(21351),d=a(76320),c=a(38969),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},n=Object.entries(e.payload).reduce((e,t)=>{let[o,n]=t;return o===a?e:{...e,[o]:n}},{});return{...e,name:e.name.substring(t+1),payload:{...n,...o}}}return e});return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let u={type:"area",showColor:!0},x=(0,n.P9)((e,t)=>{let a=(0,r.Y)("ChartTooltip",u,e),{classNames:n,className:x,style:f,styles:g,unstyled:j,vars:y,payload:b,label:v,unit:D,type:C,segmentId:k,mod:_,series:N,valueFormatter:w,showColor:A,attributes:V,...S}=a,T=(0,l.xd)(),I=(0,s.I)({name:"ChartTooltip",classes:m,props:a,className:x,style:f,classNames:n,styles:g,unstyled:j,attributes:V});if(!b)return null;let L=h(b,k),z="scatter"===C?b[0]?.payload?.name:null,U=(0,c.J)(N),E=v||z,P=L.map(e=>(0,o.jsxs)("div",{"data-type":C,...I("tooltipItem"),children:[(0,o.jsxs)("div",{...I("tooltipItemBody"),children:[A&&(0,o.jsx)("svg",{...I("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,i.r)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...I("tooltipItemName"),children:U[e.name]||e.name})]}),(0,o.jsxs)("div",{...I("tooltipItemData"),children:["function"==typeof w?w(p(e,C)):p(e,C),D||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...I("tooltip"),mod:[{type:C},_],ref:t,...S,children:[E&&(0,o.jsx)("div",{...I("tooltipLabel"),children:E}),(0,o.jsx)("div",{...I("tooltipBody"),children:P})]})});x.displayName="@mantine/charts/ChartTooltip"},66877:(e,t,a)=>{"use strict";a.d(t,{k:()=>n,p:()=>o});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`}},e=>{e.O(0,[29040,70330,10200,38547,90636,46593,38792],()=>e(e.s=25511)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1001],{2651:(e,t,a)=>{"use strict";a.d(t,{v:()=>k});var o=a(6029),n=a(40684),r=a(57686),l=a(25696),s=a(78895),i=a(53259),d=a(31292),c=a(33987),m=a(21351),h=a(26082),u=a(8411),p=a(38919),x=a(49643),f=a(15583),g=a(38757),v=a(76320),j=a(42738),y={root:"m_80d531e7"};let b={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},C=(0,c.V)((e,{strokeColor:t,labelColor:a,size:o})=>({root:{"--chart-stroke-color":t?(0,m.r)(t,e):void 0,"--chart-labels-color":a?(0,m.r)(a,e):void 0,"--chart-size":(0,h.D)(o)}})),k=(0,u.P9)((e,t)=>{let a=(0,p.Y)("FunnelChart",b,e),{classNames:c,className:h,style:u,styles:k,unstyled:D,vars:_,data:w,withTooltip:F,tooltipAnimationDuration:N,tooltipProps:S,strokeWidth:I,withLabels:T,size:A,valueFormatter:z,children:E,funnelChartProps:V,funnelProps:P,labelsPosition:U,tooltipDataSource:O,attributes:Y,...B}=a,L=(0,x.xd)(),K=(0,f.I)({name:"FunnelChart",classes:y,props:a,className:h,style:u,classNames:c,styles:k,unstyled:D,attributes:Y,vars:_,varsResolver:C}),{resolvedClassNames:J,resolvedStyles:W}=(0,g.Y)({classNames:c,styles:k,props:a});return(0,o.jsx)(v.a,{ref:t,size:A,...K("root"),...B,children:(0,o.jsx)(n.u,{children:(0,o.jsxs)(r.v,{...V,children:[(0,o.jsxs)(l.r,{data:w,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:I,...P,children:[T&&(0,o.jsx)(s.Z,{position:U,fill:"inside"===U?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof z?z(e.value):e.value}),w.map((e,t)=>(0,o.jsx)(i.f,{fill:(0,m.r)(e.color,L),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:I},t))]}),F&&(0,o.jsx)(d.m,{animationDuration:N,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.I,{payload:w,classNames:J,styles:W,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:z,attributes:Y}),...S}),E]})})})});k.displayName="@mantine/charts/FunnelChart",k.classes=y},12884:(e,t,a)=>{"use strict";a.d(t,{C:()=>l});var o=a(6029),n=a(2651),r=a(73885);let l={type:"code",component:function(){return(0,o.jsx)(n.v,{data:r.p})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.k,language:"tsx",fileName:"data.ts"}],centered:!0}},27841:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/funnel-chart",function(){return a(66663)}])},38969:(e,t,a)=>{"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{J:()=>o})},42738:(e,t,a)=>{"use strict";a.d(t,{I:()=>x,r:()=>h});var o=a(6029),n=a(8411),r=a(38919),l=a(49643),s=a(15583),i=a(21351),d=a(76320),c=a(38969),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},n=Object.entries(e.payload).reduce((e,t)=>{let[o,n]=t;return o===a?e:{...e,[o]:n}},{});return{...e,name:e.name.substring(t+1),payload:{...n,...o}}}return e});return t?a.filter(e=>e.name===t):a}function u(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let p={type:"area",showColor:!0},x=(0,n.P9)((e,t)=>{let a=(0,r.Y)("ChartTooltip",p,e),{classNames:n,className:x,style:f,styles:g,unstyled:v,vars:j,payload:y,label:b,unit:C,type:k,segmentId:D,mod:_,series:w,valueFormatter:F,showColor:N,attributes:S,...I}=a,T=(0,l.xd)(),A=(0,s.I)({name:"ChartTooltip",classes:m,props:a,className:x,style:f,classNames:n,styles:g,unstyled:v,attributes:S});if(!y)return null;let z=h(y,D),E="scatter"===k?y[0]?.payload?.name:null,V=(0,c.J)(w),P=b||E,U=z.map(e=>(0,o.jsxs)("div",{"data-type":k,...A("tooltipItem"),children:[(0,o.jsxs)("div",{...A("tooltipItemBody"),children:[N&&(0,o.jsx)("svg",{...A("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,i.r)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...A("tooltipItemName"),children:V[e.name]||e.name})]}),(0,o.jsxs)("div",{...A("tooltipItemData"),children:["function"==typeof F?F(u(e,k)):u(e,k),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(d.a,{...A("tooltip"),mod:[{type:k},_],ref:t,...I,children:[P&&(0,o.jsx)("div",{...A("tooltipLabel"),children:P}),(0,o.jsx)("div",{...A("tooltipBody"),children:U})]})});x.displayName="@mantine/charts/ChartTooltip"},66663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var o=a(6029),n=a(16285),r=a(12884),l=a(2651),s=a(73885);let i={type:"configurator",component:function(e){return(0,o.jsx)(l.v,{...e,withLabels:!0,data:s.p,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"segmented",prop:"labelsPosition",initialValue:"right",libraryValue:"__",data:["left","inside","right"]}]};var d=a(13808);let c={type:"configurator",component:function(e){return(0,o.jsx)(d.o,{mih:300,children:(0,o.jsx)(l.v,{...e,data:s.p})})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},m={type:"configurator",component:function(e){return(0,o.jsx)(l.v,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return (
    <FunnelChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var h=a(57414),u=a(45208);let p={type:"code",component:function(){return(0,o.jsxs)(h.Y,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.v,{data:s.p,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.E,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.v,{data:s.p,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <FunnelChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <FunnelChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},x={type:"code",component:function(){return(0,o.jsx)(l.v,{data:s.p,withTooltip:!1})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0},f={type:"configurator",component:function(e){return(0,o.jsx)(l.v,{...e,data:s.p})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]};var g={root:"m_87d42249"};let v={type:"code",component:function(){return(0,o.jsx)("div",{className:g.root,children:(0,o.jsx)(l.v,{data:s.p,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <FunnelChart data={data} strokeColor="var(--card-bg)" />
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.k,language:"tsx",fileName:"data.ts"}],centered:!0};var j=a(38547),y=a(5262);let b=(0,j.P)(y.XZ.FunnelChart);function C(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"FunnelChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/FunnelChart",children:"FunnelChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.C}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment.\nUse ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop to control the position of labels relative to the corresponding segment."]}),"\n",(0,o.jsx)(a,{data:i}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart.\nYou can override this behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { FunnelChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <FunnelChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:v})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(b,{...e,children:(0,o.jsx)(C,{...e})})}},73885:(e,t,a)=>{"use strict";a.d(t,{k:()=>n,p:()=>o});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`}},e=>{e.O(0,[29040,57686,38547,90636,46593,38792],()=>e(e.s=27841)),_N_E=e.O()}]);
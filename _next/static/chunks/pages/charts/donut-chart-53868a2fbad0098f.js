(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72670],{60505:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/donut-chart",function(){return a(66187)}])},66187:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var o=a(24246),n=a(71670),r=a(38607),l=a(27378),i=a(15514),c=a(7750);let d=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`,s={type:"configurator",component:function(e){return l.createElement(i.Y,{...e,withLabels:!0,data:c.a})},code:[{fileName:"Demo.tsx",code:d,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"}]},m=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,u={type:"configurator",component:function(e){return l.createElement(i.Y,{...e,data:c.a,mih:300})},code:[{fileName:"Demo.tsx",code:m,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"},{type:"number",prop:"thickness",initialValue:20,min:2,max:30,step:1,libraryValue:"__"}]},h=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,p={type:"configurator",component:function(e){return l.createElement(i.Y,{...e,data:c.a})},code:[{fileName:"Demo.tsx",code:h,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"paddingAngle",initialValue:10,min:0,max:30,step:1,libraryValue:"__"}]},f={type:"configurator",component:function(e){return l.createElement(i.Y,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <DonutChart
      {...props}
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var g=a(22971),Text=a(26569);let x=`
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
`,y={type:"code",component:function(){return l.createElement(g.Z,{gap:50},l.createElement("div",null,l.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for hovered segment"),l.createElement(i.Y,{data:c.a,tooltipDataSource:"segment",mx:"auto"})),l.createElement("div",null,l.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for all segments"),l.createElement(i.Y,{data:c.a,mx:"auto"})))},code:[{code:x,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},b=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}
`,j={type:"code",component:function(){return l.createElement(i.Y,{data:c.a,withTooltip:!1})},code:[{code:b,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},v=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}
`,D={type:"code",component:function(){return l.createElement(i.Y,{data:c.a,chartLabel:"Users by country"})},code:[{code:v,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},C=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`,E={type:"code",component:function(){return l.createElement(i.Y,{data:c.a,startAngle:180,endAngle:0})},code:[{code:C,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},N=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,k={type:"configurator",component:function(e){return l.createElement(i.Y,{...e,data:c.a})},code:[{fileName:"Demo.tsx",code:N,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]},w=`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,A=`
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

`,S={type:"code",component:function(){return l.createElement("div",{className:"m-3e09cb9d"},l.createElement(i.Y,{data:c.a,strokeColor:"var(--card-bg)"}))},code:[{code:A,language:"tsx",fileName:"Demo.tsx"},{code:w,language:"scss",fileName:"Demo.module.css"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0};var _=a(3916),T=a(54568);let Y=(0,_.A)(T.us.DonutChart);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"DonutChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment:"]}),"\n",(0,o.jsx)(a,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," prop is set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"padding-angle",children:"Padding angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"paddingAngle"})," prop to control the space between segments:"]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"chart-label",children:"Chart label"}),"\n",(0,o.jsxs)(t.p,{children:["To display a label in the center of the chart, use ",(0,o.jsx)(t.code,{children:"chartLabel"})," prop.\nIt accepts a string or a number:"]}),"\n",(0,o.jsx)(a,{data:D}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:E}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:k}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { DonutChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <DonutChart data={data} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:S})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Y,{...e,children:(0,o.jsx)(I,{...e})})}},38607:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var o=a(27378),n=a(15514),r=a(7750);let l=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,i={type:"code",component:function(){return o.createElement(n.Y,{data:r.a})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},7750:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},96688:function(e,t,a){"use strict";a.d(t,{h:function(){return g},X:function(){return h}});var o=a(27378),n=a(20410),r=a(96739),l=a(2256),i=a(6231),c=a(16202),d=a(89738),s=a(56589),m=a(3671),u={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function h(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t?e.value:e.payload[e.dataKey]}let f={type:"area"},g=(0,n.d)((e,t)=>{let a=(0,r.w)("ChartTooltip",f,e),{classNames:n,className:g,style:x,styles:y,unstyled:b,vars:j,payload:v,label:D,unit:C,type:E,segmentId:N,mod:k,series:w,valueFormatter:A,...S}=a,_=(0,l.rZ)(),T=(0,i.y)({name:"ChartTooltip",classes:u,props:a,className:g,style:x,classNames:n,styles:y,unstyled:b});if(!v)return null;let Y=h(v,N),I=(0,m.v)(w),L=Y.map(e=>o.createElement("div",{key:e.name,...T("tooltipItem")},o.createElement("div",{...T("tooltipItemBody")},o.createElement(c.b,{color:(0,d.p)(e.color,_),size:12,...T("tooltipItemColor"),withShadow:!1}),o.createElement("div",{...T("tooltipItemName")},I[e.name]||e.name)),o.createElement("div",{...T("tooltipItemData")},"function"==typeof A?A(p(e,E)):p(e,E),C)));return o.createElement(s.x,{...T("tooltip"),mod:[{type:E},k],ref:t,...S},D&&o.createElement("div",{...T("tooltipLabel")},D),o.createElement("div",{...T("tooltipBody")},L))});g.displayName="@mantine/charts/ChartTooltip"},15514:function(e,t,a){"use strict";a.d(t,{Y:function(){return D}});var o=a(27378),n=a(14569),r=a(9911),l=a(32071),i=a(3509),c=a(44460),d=a(83453),s=a(89738),m=a(71078),u=a(20410),h=a(96739),p=a(2256),f=a(6231),g=a(5564),x=a(56589),y=a(96688),b={root:"m-a410e613",label:"m-ddb0bfe3"};let j={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all"},v=(0,d.Z)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n})=>({root:{"--chart-stroke-color":t?(0,s.p)(t,e):void 0,"--chart-labels-color":a?(0,s.p)(a,e):void 0,"--chart-size":o?(0,m.h)(n+80):(0,m.h)(n)}})),D=(0,u.d)((e,t)=>{let a=(0,h.w)("DonutChart",j,e),{classNames:d,className:m,style:u,styles:D,unstyled:C,vars:E,data:N,withTooltip:k,tooltipAnimationDuration:w,tooltipProps:A,pieProps:S,paddingAngle:_,withLabels:T,withLabelsLine:Y,size:I,thickness:L,strokeWidth:z,startAngle:V,endAngle:U,tooltipDataSource:B,chartLabel:O,children:P,pieChartProps:W,valueFormatter:Z,...F}=a,G=(0,p.rZ)(),X=(0,f.y)({name:"DonutChart",classes:b,props:a,className:m,style:u,classNames:d,styles:D,unstyled:C,vars:E,varsResolver:v}),{resolvedClassNames:J,resolvedStyles:K}=(0,g.h)({classNames:d,styles:D,props:a}),R=N.map((e,t)=>o.createElement(n.b,{key:t,fill:(0,s.p)(e.color,G),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:z}));return o.createElement(x.x,{ref:t,size:I,...X("root"),...F},o.createElement(r.h,null,o.createElement(l.u,{...W},o.createElement(i.b,{data:N,innerRadius:I/2-L,outerRadius:I/2,dataKey:"value",isAnimationActive:!1,paddingAngle:_,startAngle:V,endAngle:U,label:!!T&&{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"},labelLine:!!Y&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...S},R),O&&o.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...X("label")},O),k&&o.createElement(c.u,{animationDuration:w,isAnimationActive:!1,content:({payload:e})=>o.createElement(y.h,{payload:N,classNames:J,styles:K,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:Z}),...A}),P)))});D.displayName="@mantine/charts/DonutChart",D.classes=b},3671:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}a.d(t,{v:function(){return o}})}},function(e){e.O(0,[30370,60898,84889,32071,15819,2775,49774,92888,40179],function(){return e(e.s=60505)}),_N_E=e.O()}]);
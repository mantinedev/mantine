(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72670],{92833:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/donut-chart",function(){return a(79042)}])},79042:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var o=a(52322),n=a(45392),r=a(10103),i=a(27472),l=a(3675);let s=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} withLabels data={data} />;
}
`,d={type:"configurator",component:function(e){return(0,o.jsx)(i.Y,{...e,withLabels:!0,data:l.a})},code:[{fileName:"Demo.tsx",code:s,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"}]},c=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,m={type:"configurator",component:function(e){return(0,o.jsx)(i.Y,{...e,data:l.a,mih:300})},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"},{type:"number",prop:"thickness",initialValue:20,min:2,max:30,step:1,libraryValue:"__"}]},h=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,u={type:"configurator",component:function(e){return(0,o.jsx)(i.Y,{...e,data:l.a})},code:[{fileName:"Demo.tsx",code:h,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"paddingAngle",initialValue:10,min:0,max:30,step:1,libraryValue:"__"}]},p={type:"configurator",component:function(e){return(0,o.jsx)(i.Y,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var x=a(93010),Text=a(8582);let f=`
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
`,g={type:"code",component:function(){return(0,o.jsxs)(x.Z,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(Text.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(i.Y,{data:l.a,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(Text.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(i.Y,{data:l.a,mx:"auto"})]})]})},code:[{code:f,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],centered:!0},j=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}
`,y={type:"code",component:function(){return(0,o.jsx)(i.Y,{data:l.a,withTooltip:!1})},code:[{code:j,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],centered:!0},b=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}
`,v={type:"code",component:function(){return(0,o.jsx)(i.Y,{data:l.a,chartLabel:"Users by country"})},code:[{code:b,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],centered:!0},D=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`,C={type:"code",component:function(){return(0,o.jsx)(i.Y,{data:l.a,startAngle:180,endAngle:0})},code:[{code:D,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],centered:!0},N=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`,_={type:"configurator",component:function(e){return(0,o.jsx)(i.Y,{...e,data:l.a})},code:[{fileName:"Demo.tsx",code:N,language:"tsx"},{fileName:"data.ts",code:l.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]},k=`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,w=`
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

`,A={type:"code",component:function(){return(0,o.jsx)("div",{className:"m_3e09cb9d",children:(0,o.jsx)(i.Y,{data:l.a,strokeColor:"var(--card-bg)"})})},code:[{code:w,language:"tsx",fileName:"Demo.tsx"},{code:k,language:"scss",fileName:"Demo.module.css"},{code:l.o,language:"tsx",fileName:"data.ts"}],centered:!0};var S=a(79016),T=a(33638);let Y=(0,S.A)(T.us.DonutChart);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"DonutChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment:"]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," prop is set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"padding-angle",children:"Padding angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"paddingAngle"})," prop to control the space between segments:"]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"chart-label",children:"Chart label"}),"\n",(0,o.jsxs)(t.p,{children:["To display a label in the center of the chart, use ",(0,o.jsx)(t.code,{children:"chartLabel"})," prop.\nIt accepts a string or a number:"]}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:C}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:_}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { DonutChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <DonutChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:A})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Y,{...e,children:(0,o.jsx)(I,{...e})})}},10103:function(e,t,a){"use strict";a.d(t,{j:function(){return l}});var o=a(52322),n=a(27472),r=a(3675);let i=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,l={type:"code",component:function(){return(0,o.jsx)(n.Y,{data:r.a})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},3675:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},50425:function(e,t,a){"use strict";a.d(t,{h:function(){return f},X:function(){return u}});var o=a(52322),n=a(82027),r=a(38483),i=a(68755),l=a(46690),s=a(27009),d=a(13588),c=a(28559),m=a(64438),h={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?e.value:e.payload[e.dataKey]}let x={type:"area"},f=(0,n.d)((e,t)=>{let a=(0,r.w)("ChartTooltip",x,e),{classNames:n,className:f,style:g,styles:j,unstyled:y,vars:b,payload:v,label:D,unit:C,type:N,segmentId:_,mod:k,series:w,valueFormatter:A,...S}=a,T=(0,i.rZ)(),Y=(0,l.y)({name:"ChartTooltip",classes:h,props:a,className:f,style:g,classNames:n,styles:j,unstyled:y});if(!v)return null;let I=u(v,_),L="scatter"===N?v[0]?.payload?.name:null,z=(0,m.v)(w),V=D||L,U=I.map(e=>(0,o.jsxs)("div",{"data-type":N,...Y("tooltipItem"),children:[(0,o.jsxs)("div",{...Y("tooltipItemBody"),children:[(0,o.jsx)(s.b,{color:(0,d.p)(e.color,T),size:12,...Y("tooltipItemColor"),withShadow:!1}),(0,o.jsx)("div",{...Y("tooltipItemName"),children:z[e.name]||e.name})]}),(0,o.jsxs)("div",{...Y("tooltipItemData"),children:["function"==typeof A?A(p(e,N)):p(e,N),C||e.unit]})]},e.name));return(0,o.jsxs)(c.x,{...Y("tooltip"),mod:[{type:N},k],ref:t,...S,children:[V&&(0,o.jsx)("div",{...Y("tooltipLabel"),children:V}),(0,o.jsx)("div",{...Y("tooltipBody"),children:U})]})});f.displayName="@mantine/charts/ChartTooltip"},27472:function(e,t,a){"use strict";a.d(t,{Y:function(){return D}});var o=a(52322),n=a(11011),r=a(18205),i=a(43454),l=a(79941),s=a(21154),d=a(11200),c=a(13588),m=a(58898),h=a(82027),u=a(38483),p=a(68755),x=a(46690),f=a(51477),g=a(28559),j=a(50425),y={root:"m_a410e613",label:"m_ddb0bfe3"};let b={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all"},v=(0,d.Z)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n})=>({root:{"--chart-stroke-color":t?(0,c.p)(t,e):void 0,"--chart-labels-color":a?(0,c.p)(a,e):void 0,"--chart-size":o?(0,m.h)(n+80):(0,m.h)(n)}})),D=(0,h.d)((e,t)=>{let a=(0,u.w)("DonutChart",b,e),{classNames:d,className:m,style:h,styles:D,unstyled:C,vars:N,data:_,withTooltip:k,tooltipAnimationDuration:w,tooltipProps:A,pieProps:S,paddingAngle:T,withLabels:Y,withLabelsLine:I,size:L,thickness:z,strokeWidth:V,startAngle:U,endAngle:B,tooltipDataSource:E,chartLabel:O,children:P,pieChartProps:W,valueFormatter:Z,...F}=a,G=(0,p.rZ)(),X=(0,x.y)({name:"DonutChart",classes:y,props:a,className:m,style:h,classNames:d,styles:D,unstyled:C,vars:N,varsResolver:v}),{resolvedClassNames:J,resolvedStyles:K}=(0,f.h)({classNames:d,styles:D,props:a}),R=_.map((e,t)=>(0,o.jsx)(n.b,{fill:(0,c.p)(e.color,G),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:V},t));return(0,o.jsx)(g.x,{ref:t,size:L,...X("root"),...F,children:(0,o.jsx)(r.h,{children:(0,o.jsxs)(i.u,{...W,children:[(0,o.jsx)(l.b,{data:_,innerRadius:L/2-z,outerRadius:L/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:U,endAngle:B,label:!!Y&&{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"},labelLine:!!I&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...S,children:R}),O&&(0,o.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...X("label"),children:O}),k&&(0,o.jsx)(s.u,{animationDuration:w,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.h,{payload:_,classNames:J,styles:K,type:"radial",segmentId:"segment"===E?e?.[0]?.name:void 0,valueFormatter:Z}),...A}),P]})})})});D.displayName="@mantine/charts/DonutChart",D.classes=y},64438:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}a.d(t,{v:function(){return o}})}},function(e){e.O(0,[57938,16717,59966,43454,17454,47747,49774,92888,40179],function(){return e(e.s=92833)}),_N_E=e.O()}]);
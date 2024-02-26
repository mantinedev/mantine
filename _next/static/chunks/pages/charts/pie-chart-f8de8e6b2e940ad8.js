(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49426],{24339:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pie-chart",function(){return a(48682)}])},48682:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var o=a(24246),n=a(71670),r=a(62464),l=a(9572),i=a(27378),c=a(88915),s=a(58822);let d=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,m={type:"configurator",component:function(e){return i.createElement(c.u,{...e,data:s.a,mih:300})},code:[{fileName:"Demo.tsx",code:d,language:"tsx"},{fileName:"data.ts",code:s.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},h={type:"configurator",component:function(e){return i.createElement(c.u,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <PieChart
      {...props}
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},u=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}
`,p={type:"code",component:function(){return i.createElement(c.u,{data:s.a,withTooltip:!0})},code:[{code:u,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0};var f=a(22971),Text=a(26569);let x=`
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
`,g={type:"code",component:function(){return i.createElement(f.Z,{gap:50},i.createElement("div",null,i.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for hovered segment"),i.createElement(c.u,{data:s.a,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})),i.createElement("div",null,i.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for all segments"),i.createElement(c.u,{data:s.a,withTooltip:!0,mx:"auto"})))},code:[{code:x,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0},v=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}
`,y={type:"code",component:function(){return i.createElement(c.u,{data:s.a,startAngle:180,endAngle:0})},code:[{code:v,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0},b=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,j={type:"configurator",component:function(e){return i.createElement(c.u,{...e,data:s.a})},code:[{fileName:"Demo.tsx",code:b,language:"tsx"},{fileName:"data.ts",code:s.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:2,step:.1,libraryValue:"__"}]},C=`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,E=`
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

`,w={type:"code",component:function(){return i.createElement("div",{className:"m-e00fbef3"},i.createElement(c.u,{data:s.a,strokeColor:"var(--card-bg)"}))},code:[{code:E,language:"tsx",fileName:"Demo.tsx"},{code:C,language:"scss",fileName:"Demo.module.css"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0};var P=a(3916),N=a(54568);let D=(0,P.A)(N.us.PieChart);function k(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"PieChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment. Use ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop\nto control the position of labels relative to the corresponding segment. Note that if\nyour chart has a lot of segments and ",(0,o.jsx)(t.code,{children:'labelPosition="inside"'})," is set, labels might overlap.\nIn this case, use ",(0,o.jsx)(t.code,{children:'labelPosition="outside'}),"."]}),"\n",(0,o.jsx)(a,{data:l.r}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," and ",(0,o.jsx)(t.code,{children:'labelPosition="outside"'})," prop are set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," and ",(0,o.jsx)(t.code,{children:"w"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"enable-tooltip",children:"Enable tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To enable the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip"})," prop:"]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { PieChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <PieChart data={data} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:w})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(D,{...e,children:(0,o.jsx)(k,{...e})})}},62464:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var o=a(27378),n=a(88915),r=a(58822);let l=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,i={type:"code",component:function(){return o.createElement(n.u,{data:r.a})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},9572:function(e,t,a){"use strict";a.d(t,{r:function(){return i}});var o=a(27378),n=a(88915),r=a(58822);let l=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,i={type:"configurator",component:function(e){return o.createElement(n.u,{...e,withLabels:!0,data:r.a,miw:300})},code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"data.ts",code:r.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},58822:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},96688:function(e,t,a){"use strict";a.d(t,{h:function(){return x},X:function(){return u}});var o=a(27378),n=a(20410),r=a(96739),l=a(2256),i=a(6231),c=a(16202),s=a(89738),d=a(56589),m=a(3671),h={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t?e.value:e.payload[e.dataKey]}let f={type:"area"},x=(0,n.d)((e,t)=>{let a=(0,r.w)("ChartTooltip",f,e),{classNames:n,className:x,style:g,styles:v,unstyled:y,vars:b,payload:j,label:C,unit:E,type:w,segmentId:P,mod:N,series:D,valueFormatter:k,...S}=a,A=(0,l.rZ)(),T=(0,i.y)({name:"ChartTooltip",classes:h,props:a,className:x,style:g,classNames:n,styles:v,unstyled:y});if(!j)return null;let _=u(j,P),I=(0,m.v)(D),z=_.map(e=>o.createElement("div",{key:e.name,...T("tooltipItem")},o.createElement("div",{...T("tooltipItemBody")},o.createElement(c.b,{color:(0,s.p)(e.color,A),size:12,...T("tooltipItemColor"),withShadow:!1}),o.createElement("div",{...T("tooltipItemName")},I[e.name]||e.name)),o.createElement("div",{...T("tooltipItemData")},"function"==typeof k?k(p(e,w)):p(e,w),E)));return o.createElement(d.x,{...T("tooltip"),mod:[{type:w},N],ref:t,...S},C&&o.createElement("div",{...T("tooltipLabel")},C),o.createElement("div",{...T("tooltipBody")},z))});x.displayName="@mantine/charts/ChartTooltip"},88915:function(e,t,a){"use strict";a.d(t,{u:function(){return E}});var o=a(27378),n=a(14569),r=a(9911),l=a(32071),i=a(3509),c=a(44460),s=a(83453),d=a(89738),m=a(71078),h=a(20410),u=a(96739),p=a(2256),f=a(6231),x=a(5564),g=a(56589),v=a(96688),y={root:"m-cd8943fd",label:"m-e3441f39"};let b={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},j=(0,s.Z)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n,labelsPosition:r})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":a?(0,d.p)(a,e):void 0,"--chart-size":o&&"outside"===r?(0,m.h)(n+80):(0,m.h)(n)}})),C=e=>({cx:t,cy:a,midAngle:n,innerRadius:r,outerRadius:l,value:i,percent:c})=>{let s=Math.PI/180,d=r+(l-r)*.5,m=t+d*Math.cos(-n*s);return o.createElement("text",{x:m,y:a+d*Math.sin(-n*s),textAnchor:m>t?"start":"end",dominantBaseline:"central",className:y.label},"percent"===e?`${(100*c).toFixed(0)}%`:i)},E=(0,h.d)((e,t)=>{let a=(0,u.w)("PieChart",b,e),{classNames:s,className:m,style:h,styles:E,unstyled:w,vars:P,data:N,withTooltip:D,tooltipAnimationDuration:k,tooltipProps:S,pieProps:A,paddingAngle:T,withLabels:_,withLabelsLine:I,size:z,strokeWidth:V,startAngle:L,endAngle:U,tooltipDataSource:B,children:F,pieChartProps:O,labelsPosition:W,valueFormatter:Z,labelsType:G,...M}=a,X=(0,p.rZ)(),Y=(0,f.y)({name:"PieChart",classes:y,props:a,className:m,style:h,classNames:s,styles:E,unstyled:w,vars:P,varsResolver:j}),{resolvedClassNames:$,resolvedStyles:J}=(0,x.h)({classNames:s,styles:E,props:a}),K=N.map((e,t)=>o.createElement(n.b,{key:t,fill:(0,d.p)(e.color,X),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:V}));return o.createElement(g.x,{ref:t,size:z,...Y("root"),...M},o.createElement(r.h,null,o.createElement(l.u,{...O},o.createElement(i.b,{data:N,innerRadius:0,outerRadius:z/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:L,endAngle:U,label:!!_&&("inside"===W?C(G||"value"):"percent"===G?({percent:e,x:t,y:a,cx:n,cy:r})=>o.createElement("text",{x:t,y:a,cx:n,cy:r,textAnchor:t>n?"start":"end",dominantBaseline:"central",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12},o.createElement("tspan",{x:t},`${(100*e).toFixed(0)}%`)):{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!I&&"outside"===W&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...A},K),D&&o.createElement(c.u,{animationDuration:k,isAnimationActive:!1,content:({payload:e})=>o.createElement(v.h,{payload:N,classNames:$,styles:J,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:Z}),...S}),F)))});E.displayName="@mantine/charts/PieChart",E.classes=y},3671:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}a.d(t,{v:function(){return o}})}},function(e){e.O(0,[30370,60898,84889,32071,15819,2775,49774,92888,40179],function(){return e(e.s=24339)}),_N_E=e.O()}]);
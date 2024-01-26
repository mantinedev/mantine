(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49426],{24339:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pie-chart",function(){return a(5789)}])},5789:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var o=a(24246),n=a(71670),r=a(62464),i=a(27378),l=a(88915),c=a(58822);let s=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,d={type:"configurator",component:function(e){return i.createElement(l.u,{...e,withLabels:!0,data:c.a})},code:[{fileName:"Demo.tsx",code:s,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]}]},m=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,h={type:"configurator",component:function(e){return i.createElement(l.u,{...e,data:c.a,mih:300})},code:[{fileName:"Demo.tsx",code:m,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},u={type:"configurator",component:function(e){return i.createElement(l.u,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},p=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}
`,f={type:"code",component:function(){return i.createElement(l.u,{data:c.a,withTooltip:!0})},code:[{code:p,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0};var x=a(22971),Text=a(26569);let g=`
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
`,y={type:"code",component:function(){return i.createElement(x.Z,{gap:50},i.createElement("div",null,i.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for hovered segment"),i.createElement(l.u,{data:c.a,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})),i.createElement("div",null,i.createElement(Text.x,{fz:"xs",mb:"sm",ta:"center"},"Data only for all segments"),i.createElement(l.u,{data:c.a,withTooltip:!0,mx:"auto"})))},code:[{code:g,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},b=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}
`,v={type:"code",component:function(){return i.createElement(l.u,{data:c.a,startAngle:180,endAngle:0})},code:[{code:b,language:"tsx",fileName:"Demo.tsx"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0},j=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,C={type:"configurator",component:function(e){return i.createElement(l.u,{...e,data:c.a})},code:[{fileName:"Demo.tsx",code:j,language:"tsx"},{fileName:"data.ts",code:c.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:2,step:.1,libraryValue:"__"}]},E=`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,P=`
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

`,w={type:"code",component:function(){return i.createElement("div",{className:"m-e00fbef3"},i.createElement(l.u,{data:c.a,strokeColor:"var(--card-bg)"}))},code:[{code:P,language:"tsx",fileName:"Demo.tsx"},{code:E,language:"scss",fileName:"Demo.module.css"},{code:c.o,language:"tsx",fileName:"data.ts"}],centered:!0};var N=a(3916),D=a(54568);let k=(0,N.A)(D.us.PieChart);function S(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"PieChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment. Use ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop\nto control the position of labels relative to the corresponding segment. Note that if\nyour chart has a lot of segments and ",(0,o.jsx)(t.code,{children:'labelPosition="inside"'})," is set, labels might overlap.\nIn this case, use ",(0,o.jsx)(t.code,{children:'labelPosition="outside'}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," and ",(0,o.jsx)(t.code,{children:'labelPosition="outside"'})," prop are set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," and ",(0,o.jsx)(t.code,{children:"w"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"enable-tooltip",children:"Enable tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To enable the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip"})," prop:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:C}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { PieChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <PieChart data={data} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:w})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(k,{...e,children:(0,o.jsx)(S,{...e})})}},62464:function(e,t,a){"use strict";a.d(t,{j:function(){return l}});var o=a(27378),n=a(88915),r=a(58822);let i=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,l={type:"code",component:function(){return o.createElement(n.u,{data:r.a})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},58822:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},96688:function(e,t,a){"use strict";a.d(t,{h:function(){return x},X:function(){return u}});var o=a(27378),n=a(20410),r=a(96739),i=a(2256),l=a(6231),c=a(16202),s=a(89738),d=a(56589),m=a(3671),h={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t?e.value:e.payload[e.dataKey]}let f={type:"area"},x=(0,n.d)((e,t)=>{let a=(0,r.w)("ChartTooltip",f,e),{classNames:n,className:x,style:g,styles:y,unstyled:b,vars:v,payload:j,label:C,unit:E,type:P,segmentId:w,mod:N,series:D,valueFormatter:k,...S}=a,A=(0,i.rZ)(),T=(0,l.y)({name:"ChartTooltip",classes:h,props:a,className:x,style:g,classNames:n,styles:y,unstyled:b});if(!j)return null;let _=u(j,w),I=(0,m.v)(D),z=_.map(e=>o.createElement("div",{key:e.name,...T("tooltipItem")},o.createElement("div",{...T("tooltipItemBody")},o.createElement(c.b,{color:(0,s.p)(e.color,A),size:12,...T("tooltipItemColor"),withShadow:!1}),o.createElement("div",{...T("tooltipItemName")},I[e.name]||e.name)),o.createElement("div",{...T("tooltipItemData")},"function"==typeof k?k(p(e,P)):p(e,P),E)));return o.createElement(d.x,{...T("tooltip"),mod:[{type:P},N],ref:t,...S},C&&o.createElement("div",{...T("tooltipLabel")},C),o.createElement("div",{...T("tooltipBody")},z))});x.displayName="@mantine/charts/ChartTooltip"},88915:function(e,t,a){"use strict";a.d(t,{u:function(){return E}});var o=a(27378),n=a(14569),r=a(9911),i=a(43638),l=a(3509),c=a(44460),s=a(83453),d=a(89738),m=a(71078),h=a(20410),u=a(96739),p=a(2256),f=a(6231),x=a(5564),g=a(56589),y=a(96688),b={root:"m-cd8943fd",label:"m-e3441f39"};let v={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside"},j=(0,s.Z)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n,labelsPosition:r})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":a?(0,d.p)(a,e):void 0,"--chart-size":o&&"outside"===r?(0,m.h)(n+80):(0,m.h)(n)}})),C=({cx:e,cy:t,midAngle:a,innerRadius:n,outerRadius:r,value:i})=>{let l=Math.PI/180,c=n+(r-n)*.5,s=e+c*Math.cos(-a*l);return o.createElement("text",{x:s,y:t+c*Math.sin(-a*l),textAnchor:s>e?"start":"end",dominantBaseline:"central",className:b.label},i)},E=(0,h.d)((e,t)=>{let a=(0,u.w)("PieChart",v,e),{classNames:s,className:m,style:h,styles:E,unstyled:P,vars:w,data:N,withTooltip:D,tooltipAnimationDuration:k,tooltipProps:S,pieProps:A,paddingAngle:T,withLabels:_,withLabelsLine:I,size:z,strokeWidth:L,startAngle:V,endAngle:U,tooltipDataSource:B,children:O,pieChartProps:W,labelsPosition:Z,valueFormatter:F,...G}=a,M=(0,p.rZ)(),X=(0,f.y)({name:"PieChart",classes:b,props:a,className:m,style:h,classNames:s,styles:E,unstyled:P,vars:w,varsResolver:j}),{resolvedClassNames:Y,resolvedStyles:J}=(0,x.h)({classNames:s,styles:E,props:a}),K=N.map((e,t)=>o.createElement(n.b,{key:t,fill:(0,d.p)(e.color,M),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:L}));return o.createElement(g.x,{ref:t,size:z,...X("root"),...G},o.createElement(r.h,null,o.createElement(i.u,{...W},o.createElement(l.b,{data:N,innerRadius:0,outerRadius:z/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:V,endAngle:U,label:!!_&&("inside"===Z?C:{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!I&&"outside"===Z&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...A},K),D&&o.createElement(c.u,{animationDuration:k,isAnimationActive:!1,content:({payload:e})=>o.createElement(y.h,{payload:N,classNames:Y,styles:J,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:F}),...S}),O)))});E.displayName="@mantine/charts/PieChart",E.classes=b},3671:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}a.d(t,{v:function(){return o}})}},function(e){e.O(0,[30370,60898,43638,15819,2775,49774,92888,40179],function(){return e(e.s=24339)}),_N_E=e.O()}]);
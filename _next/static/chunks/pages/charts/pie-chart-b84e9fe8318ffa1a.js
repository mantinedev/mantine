(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49426],{9236:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pie-chart",function(){return a(86814)}])},86814:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var o=a(52322),n=a(45392),r=a(72600),i=a(88442),l=a(38840),s=a(10301);let d={type:"configurator",component:function(e){return(0,o.jsx)(l.u,{...e,data:s.a,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},c={type:"configurator",component:function(e){return(0,o.jsx)(l.u,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},m={type:"code",component:function(){return(0,o.jsx)(l.u,{data:s.a,withTooltip:!0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0};var h=a(93010),u=a(8582);let p={type:"code",component:function(){return(0,o.jsxs)(h.Z,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.u,{data:s.a,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.u,{data:s.a,withTooltip:!0,mx:"auto"})]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0},x={type:"code",component:function(){return(0,o.jsx)(l.u,{data:s.a,startAngle:180,endAngle:0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0},f={type:"configurator",component:function(e){return(0,o.jsx)(l.u,{...e,data:s.a})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:s.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:2,step:.1,libraryValue:"__"}]},g={type:"code",component:function(){return(0,o.jsx)("div",{className:"m_e00fbef3",children:(0,o.jsx)(l.u,{data:s.a,strokeColor:"var(--card-bg)"})})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:s.o,language:"tsx",fileName:"data.ts"}],centered:!0};var j=a(25071),y=a(15019);let v=(0,j.A)(y.us.PieChart);function b(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"PieChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/PieChart",children:"PieChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment. Use ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop\nto control the position of labels relative to the corresponding segment. Note that if\nyour chart has a lot of segments and ",(0,o.jsx)(t.code,{children:'labelPosition="inside"'})," is set, labels might overlap.\nIn this case, use ",(0,o.jsx)(t.code,{children:'labelPosition="outside'}),"."]}),"\n",(0,o.jsx)(a,{data:i.r}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart. Note that if ",(0,o.jsx)(t.code,{children:"withLabels"})," and ",(0,o.jsx)(t.code,{children:'labelPosition="outside"'})," prop are set,\nthe chart height is automatically increased by 80px to make room for labels. You can override\nthis behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," and ",(0,o.jsx)(t.code,{children:"w"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"enable-tooltip",children:"Enable tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To enable the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip"})," prop:"]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"start-and-end-angle",children:"Start and end angle"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props to control the start and end angle of the chart.\nFor example, to display a half-circle chart, set ",(0,o.jsx)(t.code,{children:"startAngle={180}"})," and ",(0,o.jsx)(t.code,{children:"endAngle={0}"}),":"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsxs)(t.p,{children:["Note that even when ",(0,o.jsx)(t.code,{children:"startAngle"})," and ",(0,o.jsx)(t.code,{children:"endAngle"})," props are set, the chart still takes\nthe same amount of space as if it was a full circle."]}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { PieChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <PieChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:g})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(b,{...e})})}},72600:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var o=a(52322),n=a(38840),r=a(10301);let i={type:"code",component:function(){return(0,o.jsx)(n.u,{data:r.a})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},88442:function(e,t,a){"use strict";a.d(t,{r:function(){return i}});var o=a(52322),n=a(38840),r=a(10301);let i={type:"configurator",component:function(e){return(0,o.jsx)(n.u,{...e,withLabels:!0,data:r.a,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},10301:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},50425:function(e,t,a){"use strict";a.d(t,{h:function(){return f},X:function(){return u}});var o=a(52322),n=a(82027),r=a(38483),i=a(68755),l=a(46690),s=a(27009),d=a(13588),c=a(28559),m=a(64438),h={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color);return t?a.filter(e=>e.name===t):a}function p(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let x={type:"area"},f=(0,n.d)((e,t)=>{let a=(0,r.w)("ChartTooltip",x,e),{classNames:n,className:f,style:g,styles:j,unstyled:y,vars:v,payload:b,label:C,unit:w,type:P,segmentId:_,mod:N,series:D,valueFormatter:A,...k}=a,S=(0,i.rZ)(),T=(0,l.y)({name:"ChartTooltip",classes:h,props:a,className:f,style:g,classNames:n,styles:j,unstyled:y});if(!b)return null;let I=u(b,_),z="scatter"===P?b[0]?.payload?.name:null,V=(0,m.v)(D),L=C||z,U=I.map(e=>(0,o.jsxs)("div",{"data-type":P,...T("tooltipItem"),children:[(0,o.jsxs)("div",{...T("tooltipItemBody"),children:[(0,o.jsx)(s.b,{color:(0,d.p)(e.color,S),size:12,...T("tooltipItemColor"),withShadow:!1}),(0,o.jsx)("div",{...T("tooltipItemName"),children:V[e.name]||e.name})]}),(0,o.jsxs)("div",{...T("tooltipItemData"),children:["function"==typeof A?A(p(e,P)):p(e,P),w||e.unit]})]},e.name));return(0,o.jsxs)(c.x,{...T("tooltip"),mod:[{type:P},N],ref:t,...k,children:[L&&(0,o.jsx)("div",{...T("tooltipLabel"),children:L}),(0,o.jsx)("div",{...T("tooltipBody"),children:U})]})});f.displayName="@mantine/charts/ChartTooltip"},38840:function(e,t,a){"use strict";a.d(t,{u:function(){return w}});var o=a(52322),n=a(11011),r=a(18205),i=a(43454),l=a(79941),s=a(21154),d=a(11200),c=a(13588),m=a(58898),h=a(82027),u=a(38483),p=a(68755),x=a(46690),f=a(51477),g=a(28559),j=a(50425),y={root:"m_cd8943fd",label:"m_e3441f39"};let v={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,d.Z)((e,{strokeColor:t,labelColor:a,withLabels:o,size:n,labelsPosition:r})=>({root:{"--chart-stroke-color":t?(0,c.p)(t,e):void 0,"--chart-labels-color":a?(0,c.p)(a,e):void 0,"--chart-size":o&&"outside"===r?(0,m.h)(n+80):(0,m.h)(n)}})),C=(e,t)=>({cx:a,cy:n,midAngle:r,innerRadius:i,outerRadius:l,value:s,percent:d})=>{let c=Math.PI/180,m=i+(l-i)*.5,h=a+m*Math.cos(-r*c);return(0,o.jsx)("text",{x:h,y:n+m*Math.sin(-r*c),textAnchor:h>a?"start":"end",dominantBaseline:"central",className:y.label,children:"percent"===e?`${(100*d).toFixed(0)}%`:"function"==typeof t?t(s):s})},w=(0,h.d)((e,t)=>{let a=(0,u.w)("PieChart",v,e),{classNames:d,className:m,style:h,styles:w,unstyled:P,vars:_,data:N,withTooltip:D,tooltipAnimationDuration:A,tooltipProps:k,pieProps:S,paddingAngle:T,withLabels:I,withLabelsLine:z,size:V,strokeWidth:L,startAngle:U,endAngle:B,tooltipDataSource:E,children:F,pieChartProps:O,labelsPosition:K,valueFormatter:W,labelsType:Z,...G}=a,M=(0,p.rZ)(),X=(0,x.y)({name:"PieChart",classes:y,props:a,className:m,style:h,classNames:d,styles:w,unstyled:P,vars:_,varsResolver:b}),{resolvedClassNames:Y,resolvedStyles:$}=(0,f.h)({classNames:d,styles:w,props:a}),J=N.map((e,t)=>(0,o.jsx)(n.b,{fill:(0,c.p)(e.color,M),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:L},t));return(0,o.jsx)(g.x,{ref:t,size:V,...X("root"),...G,children:(0,o.jsx)(r.h,{children:(0,o.jsxs)(i.u,{...O,children:[(0,o.jsx)(l.b,{data:N,innerRadius:0,outerRadius:V/2,dataKey:"value",isAnimationActive:!1,paddingAngle:T,startAngle:U,endAngle:B,label:!!I&&("inside"===K?C(Z||"value",W):"percent"===Z?({percent:e,x:t,y:a,cx:n,cy:r})=>(0,o.jsx)("text",{x:t,y:a,cx:n,cy:r,textAnchor:t>n?"start":"end",dominantBaseline:"central",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,o.jsx)("tspan",{x:t,children:`${(100*e).toFixed(0)}%`})}):{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!z&&"outside"===K&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...S,children:J}),D&&(0,o.jsx)(s.u,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(j.h,{payload:N,classNames:Y,styles:$,type:"radial",segmentId:"segment"===E?e?.[0]?.name:void 0,valueFormatter:W}),...k}),F]})})})});w.displayName="@mantine/charts/PieChart",w.classes=y},64438:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}a.d(t,{v:function(){return o}})}},function(e){e.O(0,[61177,16717,59966,43454,66748,11340,92888,49774,40179],function(){return e(e.s=9236)}),_N_E=e.O()}]);
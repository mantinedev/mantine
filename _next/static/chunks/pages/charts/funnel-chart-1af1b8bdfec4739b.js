(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99710],{76988:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/funnel-chart",function(){return a(57)}])},57:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var o=a(52322),n=a(45392),r=a(43502),l=a(17802),i=a(36966);let s={type:"configurator",component:function(e){return(0,o.jsx)(l.G,{...e,withLabels:!0,data:i.a,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:i.o,language:"tsx"}],centered:!0,controls:[{type:"segmented",prop:"labelsPosition",initialValue:"right",libraryValue:"__",data:["left","inside","right"]}]};var c=a(16438);let d={type:"configurator",component:function(e){return(0,o.jsx)(c.M,{mih:300,children:(0,o.jsx)(l.G,{...e,data:i.a})})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:i.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},m={type:"configurator",component:function(e){return(0,o.jsx)(l.G,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]};var u=a(93010),h=a(8582);let p={type:"code",component:function(){return(0,o.jsxs)(u.Z,{gap:50,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(h.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,o.jsx)(l.G,{data:i.a,tooltipDataSource:"segment",mx:"auto"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(h.x,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,o.jsx)(l.G,{data:i.a,mx:"auto"})]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.o,language:"tsx",fileName:"data.ts"}],centered:!0},f={type:"code",component:function(){return(0,o.jsx)(l.G,{data:i.a,withTooltip:!1})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.o,language:"tsx",fileName:"data.ts"}],centered:!0},x={type:"configurator",component:function(e){return(0,o.jsx)(l.G,{...e,data:i.a})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:i.o,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]},g={type:"code",component:function(){return(0,o.jsx)("div",{className:"m_87d42249",children:(0,o.jsx)(l.G,{data:i.a,strokeColor:"var(--card-bg)"})})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:i.o,language:"tsx",fileName:"data.ts"}],centered:!0};var j=a(25071),y=a(15019);let v=(0,j.A)(y.us.FunnelChart);function b(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"FunnelChart"})," is based on ",(0,o.jsx)(t.a,{href:"https://recharts.org/en-US/api/FunnelChart",children:"FunnelChart recharts component"}),":"]}),"\n",(0,o.jsx)(a,{data:r.j}),"\n",(0,o.jsx)(t.h2,{id:"segments-labels",children:"Segments labels"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"withLabels"})," prop to display labels next to each segment.\nUse ",(0,o.jsx)(t.code,{children:"labelPosition"})," prop to control the position of labels relative to the corresponding segment."]}),"\n",(0,o.jsx)(a,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"size-and-thickness",children:"Size and thickness"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"size"})," prop to control width and height of the chart.\nYou can override this behavior by setting ",(0,o.jsx)(t.code,{children:"h"})," ",(0,o.jsx)(t.a,{href:"/styles/style-props",children:"style prop"}),"."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"segment-color",children:"Segment color"}),"\n",(0,o.jsxs)(t.p,{children:["You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"tooltip-data-source",children:"Tooltip data source"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the tooltip displays data for all segments when hovered over any segment.\nTo display data only for the hovered segment, set ",(0,o.jsx)(t.code,{children:'tooltipDataSource="segment"'}),":"]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"without-tooltip",children:"Without tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["To remove the tooltip, set ",(0,o.jsx)(t.code,{children:"withTooltip={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"segments-stroke",children:"Segments stroke"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"strokeWidth"})," prop to control the width of the stroke around each segment:"]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsxs)(t.p,{children:["To change color of the stroke, use ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop. You can reference colors from ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(t.code,{children:"blue"}),", ",(0,o.jsx)(t.code,{children:"red.5"}),", ",(0,o.jsx)(t.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { FunnelChart } from '@mantine/charts';\n\nfunction Demo() {\n  return <FunnelChart data={[]} strokeColor=\"red.5\" />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, segments stroke color is the same as the background color of the body element\n(",(0,o.jsx)(t.code,{children:"--mantine-color-body"})," CSS variable). If you want to change it depending on the color scheme,\ndefine CSS variable and pass it to the ",(0,o.jsx)(t.code,{children:"strokeColor"})," prop:"]}),"\n",(0,o.jsx)(a,{data:g})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(b,{...e})})}},43502:function(e,t,a){"use strict";a.d(t,{j:function(){return l}});var o=a(52322),n=a(17802),r=a(36966);let l={type:"code",component:function(){return(0,o.jsx)(n.G,{data:r.a})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},36966:function(e,t,a){"use strict";a.d(t,{a:function(){return o},o:function(){return n}});let o=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},50425:function(e,t,a){"use strict";a.d(t,{h:function(){return f},X:function(){return u}});var o=a(52322),n=a(82027),r=a(38483),l=a(68755),i=a(46690),s=a(13588),c=a(28559),d=a(64438),m={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItemColor:"m_b30369b5",tooltipItem:"m_3de8964e",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(e,t){let a=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{if(!e.payload||e.payload[e.name])return e;let t=e.name.search(/\./);if(t>=0){let a=e.name.substring(0,t),o={...e.payload[a]},n=Object.entries(e.payload).reduce((e,t)=>{let[o,n]=t;return o===a?e:{...e,[o]:n}},{});return{...e,name:e.name.substring(t+1),payload:{...n,...o}}}return e});return t?a.filter(e=>e.name===t):a}function h(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.name]}let p={type:"area",showColor:!0},f=(0,n.d5)((e,t)=>{let a=(0,r.w)("ChartTooltip",p,e),{classNames:n,className:f,style:x,styles:g,unstyled:j,vars:y,payload:v,label:b,unit:C,type:k,segmentId:w,mod:_,series:D,valueFormatter:N,showColor:F,...S}=a,T=(0,l.rZ)(),A=(0,i.y)({name:"ChartTooltip",classes:m,props:a,className:f,style:x,classNames:n,styles:g,unstyled:j});if(!v)return null;let G=u(v,w),I="scatter"===k?v[0]?.payload?.name:null,z=(0,d.v)(D),U=b||I,V=G.map(e=>(0,o.jsxs)("div",{"data-type":k,...A("tooltipItem"),children:[(0,o.jsxs)("div",{...A("tooltipItemBody"),children:[F&&(0,o.jsx)("svg",{...A("tooltipItemColor"),children:(0,o.jsx)("circle",{r:6,fill:(0,s.p)(e.color,T),width:12,height:12,cx:6,cy:6})}),(0,o.jsx)("div",{...A("tooltipItemName"),children:z[e.name]||e.name})]}),(0,o.jsxs)("div",{...A("tooltipItemData"),children:["function"==typeof N?N(h(e,k)):h(e,k),C||e.unit]})]},e?.key??e.name));return(0,o.jsxs)(c.x,{...A("tooltip"),mod:[{type:k},_],ref:t,...S,children:[U&&(0,o.jsx)("div",{...A("tooltipLabel"),children:U}),(0,o.jsx)("div",{...A("tooltipBody"),children:V})]})});f.displayName="@mantine/charts/ChartTooltip"},17802:function(e,t,a){"use strict";a.d(t,{G:function(){return k}});var o=a(52322),n=a(18205),r=a(21836),l=a(77568),i=a(96621),s=a(11011),c=a(21154),d=a(11200),m=a(13588),u=a(58898),h=a(82027),p=a(38483),f=a(68755),x=a(46690),g=a(51477),j=a(28559),y=a(50425),v={root:"m_80d531e7"};let b={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},C=(0,d.Z)((e,{strokeColor:t,labelColor:a,size:o})=>({root:{"--chart-stroke-color":t?(0,m.p)(t,e):void 0,"--chart-labels-color":a?(0,m.p)(a,e):void 0,"--chart-size":(0,u.h)(o)}})),k=(0,h.d5)((e,t)=>{let a=(0,p.w)("FunnelChart",b,e),{classNames:d,className:u,style:h,styles:k,unstyled:w,vars:_,data:D,withTooltip:N,tooltipAnimationDuration:F,tooltipProps:S,strokeWidth:T,withLabels:A,size:G,valueFormatter:I,children:z,funnelChartProps:U,funnelProps:V,labelsPosition:E,tooltipDataSource:O,...B}=a,L=(0,f.rZ)(),K=(0,x.y)({name:"FunnelChart",classes:v,props:a,className:u,style:h,classNames:d,styles:k,unstyled:w,vars:_,varsResolver:C}),{resolvedClassNames:P,resolvedStyles:W}=(0,g.h)({classNames:d,styles:k,props:a});return(0,o.jsx)(j.x,{ref:t,size:G,...K("root"),...B,children:(0,o.jsx)(n.h,{children:(0,o.jsxs)(r.G,{...U,children:[(0,o.jsxs)(l.o,{data:D,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T,...V,children:[A&&(0,o.jsx)(i.e,{position:E,fill:"inside"===E?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof I?I(e.value):e.value}),D.map((e,t)=>(0,o.jsx)(s.b,{fill:(0,m.p)(e.color,L),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T},t))]}),N&&(0,o.jsx)(c.u,{animationDuration:F,isAnimationActive:!1,content:({payload:e})=>(0,o.jsx)(y.h,{payload:D,classNames:P,styles:W,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:I}),...S}),z]})})})});k.displayName="@mantine/charts/FunnelChart",k.classes=v},64438:function(e,t,a){"use strict";function o(e){return e?e.reduce((e,t)=>{let a=t.name.search(/\./);return a>=0?e[t.name.substring(a+1)]=t.label:e[t.name]=t.label,e},{}):{}}a.d(t,{v:function(){return o}})},16438:function(e,t,a){"use strict";a.d(t,{M:function(){return d}});var o=a(52322);a(2784);var n=a(38483),r=a(46690),l=a(28559),i=a(33502),s={root:"m_4451eb3a"};let c={},d=(0,i.b)((e,t)=>{let a=(0,n.w)("Center",c,e),{classNames:i,className:d,style:m,styles:u,unstyled:h,vars:p,inline:f,mod:x,...g}=a,j=(0,r.y)({name:"Center",props:a,classes:s,className:d,style:m,classNames:i,styles:u,unstyled:h,vars:p});return(0,o.jsx)(l.x,{ref:t,mod:[{inline:f},x],...j("root"),...g})});d.classes=s,d.displayName="@mantine/core/Center"}},function(e){e.O(0,[61177,5248,21836,66748,11340,92888,49774,40179],function(){return e(e.s=76988)}),_N_E=e.O()}]);
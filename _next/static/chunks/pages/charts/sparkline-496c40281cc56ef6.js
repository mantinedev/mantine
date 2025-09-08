(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69647],{34483:(e,r,t)=>{"use strict";t.d(r,{s:()=>n});var a=t(6029);function n({color:e,id:r,withGradient:t,fillOpacity:n}){return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:n}),(0,a.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,a.jsx)("linearGradient",{id:r,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,a.jsx)("stop",{stopColor:e,stopOpacity:n??.2})})})}n.displayName="@mantine/charts/AreaGradient"},52824:(e,r,t)=>{"use strict";t.d(r,{C:()=>i});var a=t(6029),n=t(70291);let i={type:"configurator",component:function(e){return(0,a.jsx)(n.O,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      {{props}}
    />
  );
}
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]}},56721:(e,r,t)=>{"use strict";t.d(r,{Q:()=>s});var a=t(32716),n=t(13297),i=t(2893),l=t(47122),o=t(83687),s=(0,a.gu)({chartName:"AreaChart",GraphicalChild:n.G,axisComponents:[{axisType:"xAxis",AxisComp:i.W},{axisType:"yAxis",AxisComp:l.h}],formatAxisMap:o.pr})},70291:(e,r,t)=>{"use strict";t.d(r,{O:()=>j});var a=t(6029),n=t(55729),i=t(40684),l=t(56721),o=t(13297),s=t(33987),c=t(21351),d=t(8411),p=t(38919),h=t(15583),u=t(76320),m=t(34483);let x={},v={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},f=(0,s.V)((e,{color:r,data:t,trendColors:a})=>({root:{"--chart-color":a?(0,c.r)(function(e,r){let t=e[0],a=e[e.length-1];return null===t||null===a?r.neutral||r.positive:t<a?r.positive:t>a?r.negative:r.neutral||r.positive}(t,a),e):r?(0,c.r)(r,e):void 0}})),j=(0,d.P9)((e,r)=>{let t=(0,p.Y)("Sparkline",v,e),{classNames:s,className:c,style:d,styles:j,unstyled:g,vars:y,data:k,withGradient:b,fillOpacity:C,curveType:T,strokeWidth:w,trendColors:O,connectNulls:S,areaProps:N,attributes:_,...A}=t,E=(0,h.I)({name:"Sparkline",classes:x,props:t,className:c,style:d,classNames:s,styles:j,unstyled:g,attributes:_,vars:y,varsResolver:f}),V=(0,n.useId)(),G=(0,n.useMemo)(()=>k.map((e,r)=>({value:e,index:r})),[k]);return(0,a.jsx)(u.a,{ref:r,...E("root"),...A,dir:"ltr",children:(0,a.jsx)(i.u,{children:(0,a.jsxs)(l.Q,{data:G,children:[(0,a.jsx)(o.G,{dataKey:"value",type:T,fill:`url(#${V})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:S,strokeWidth:w,fillOpacity:1,...N}),(0,a.jsx)("defs",{children:(0,a.jsx)(m.s,{id:V,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:C,withGradient:b})})]})})})});j.displayName="@mantine/charts/Sparkline",j.classes=x},72658:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var a=t(6029),n=t(16285),i=t(52824),l=t(70291),o={root:"m_b7fa7826"};let s={type:"code",component:function(){return(0,a.jsx)(l.O,{w:200,h:80,data:[10,20,40,20,40,10,50],className:o.root})},code:[{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
`,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var c=t(86620),d=t(38547),p=t(5262);let h=(0,d.P)(p.XZ.Sparkline);function u(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Sparkline"})," is a simplified version of ",(0,a.jsx)(r.a,{href:"/charts/area-chart",children:"AreaChart"}),". It can be used\nto display a single series of data in a small space."]}),"\n",(0,a.jsx)(t,{data:i.C}),"\n",(0,a.jsx)(r.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,a.jsxs)(r.p,{children:["You can use CSS variables in ",(0,a.jsx)(r.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,a.jsx)(r.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,a.jsx)(r.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,a.jsx)(t,{data:s}),"\n",(0,a.jsx)(r.h2,{id:"trend-colors",children:"Trend colors"}),"\n",(0,a.jsxs)(r.p,{children:["Use ",(0,a.jsx)(r.code,{children:"trendColors"})," prop instead of ",(0,a.jsx)(r.code,{children:"color"})," to change chart color depending on the trend.\nThe prop accepts an object with ",(0,a.jsx)(r.code,{children:"positive"}),", ",(0,a.jsx)(r.code,{children:"negative"})," and ",(0,a.jsx)(r.code,{children:"neutral"})," properties:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,a.jsx)(r.code,{children:"data"})," array)"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,a.jsx)(r.code,{children:"data"})," array)"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,a.jsx)(r.code,{children:"positive"}),"."]}),"\n",(0,a.jsx)(t,{data:c.W})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(h,{...e,children:(0,a.jsx)(u,{...e})})}},82171:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/sparkline",function(){return t(72658)}])},86620:(e,r,t)=>{"use strict";t.d(r,{W:()=>d});var a=t(6029),n=t(70291),i=t(72139),l=t(45208);let o=[10,20,40,20,40,10,50],s=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d={type:"code",component:function(){return(0,a.jsxs)(i.B,{gap:"sm",children:[(0,a.jsx)(l.E,{children:"Positive trend:"}),(0,a.jsx)(n.O,{w:200,h:60,data:o,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,a.jsx)(l.E,{mt:"md",children:"Negative trend:"}),(0,a.jsx)(n.O,{w:200,h:60,data:s,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,a.jsx)(l.E,{mt:"md",children:"Neutral trend:"}),(0,a.jsx)(n.O,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
`,centered:!0}}},e=>{e.O(0,[29040,60454,13297,38547,90636,46593,38792],()=>e(e.s=82171)),_N_E=e.O()}]);
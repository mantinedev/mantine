(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var r=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let a={};for(var i in e)r(a,i,{get:e[i],enumerable:!0});return t||r(a,Symbol.toStringTag,{value:"Module"}),a}])},990865,378097,e=>{"use strict";var r=e.i(391398);function t({color:e,id:a,withGradient:i,fillOpacity:n}){return(0,r.jsx)(r.Fragment,{children:i?(0,r.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:n}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:n??.2})})})}t.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,t],990865);var a=e.i(191788),i=e.i(471970),n=e.i(437515),l=["axis"],o=(0,a.forwardRef)((e,r)=>a.createElement(n.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:l,tooltipPayloadSearcher:i.arrayTooltipSearcher,categoricalChartProps:e,ref:r}));e.s(["AreaChart",0,o],378097)},770563,e=>{"use strict";var r=e.i(648863),t=e.i(391398),a=e.i(990865),i={root:"m_f9458cfe"},n=e.i(232471),l=e.i(481178),o=e.i(275519),s=e.i(317477),c=e.i(44091),d=e.i(391466),p=e.i(191788),h=e.i(321020),u=e.i(378097),m=e.i(723451);let x={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},v=(0,l.createVarsResolver)((e,{color:r,data:t,trendColors:a})=>{let i,n;return{root:{"--chart-color":a?(0,s.getThemeColor)((i=t[0],n=t[t.length-1],null===i||null===n?a.neutral||a.positive:i<n?a.positive:i>n?a.negative:a.neutral||a.positive),e):r?(0,s.getThemeColor)(r,e):void 0}}}),f=(0,o.factory)(e=>{let r=(0,c.useProps)("Sparkline",x,e),{classNames:l,className:o,style:s,styles:f,unstyled:g,vars:j,data:y,withGradient:T,fillOpacity:b,curveType:k,strokeWidth:S,trendColors:C,connectNulls:w,areaProps:A,attributes:_,...D}=r,N=(0,d.useStyles)({name:"Sparkline",classes:i,props:r,className:o,style:s,classNames:l,styles:f,unstyled:g,attributes:_,vars:j,varsResolver:v}),O=(0,p.useId)(),P=(0,p.useMemo)(()=>y.map((e,r)=>({value:e,index:r})),[y]);return(0,t.jsx)(n.Box,{...N("root"),...D,dir:"ltr",children:(0,t.jsx)(m.ResponsiveContainer,{children:(0,t.jsxs)(u.AreaChart,{data:P,children:[(0,t.jsx)(h.Area,{dataKey:"value",type:k,fill:`url(#${O})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:w,strokeWidth:S,fillOpacity:1,activeDot:!1,...A}),(0,t.jsx)("defs",{children:(0,t.jsx)(a.AreaGradient,{id:O,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:b,withGradient:T})})]})})})});f.displayName="@mantine/charts/Sparkline",f.classes=i,f.varsResolver=v;let g={type:"configurator",component:function(e){return(0,t.jsx)(f,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
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
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},j={type:"code",component:function(){return(0,t.jsx)(f,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m_b7fa7826"})},code:[{code:`.root {
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
`,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var y=e.i(671640),T=e.i(883364);let b=[10,20,40,20,40,10,50],k=[50,40,20,40,20,40,10],S=[10,20,40,20,40,10,50,5,10],C={type:"code",component:function(){return(0,t.jsxs)(y.Stack,{gap:"sm",children:[(0,t.jsx)(T.Text,{children:"Positive trend:"}),(0,t.jsx)(f,{w:200,h:60,data:b,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,t.jsx)(T.Text,{mt:"md",children:"Negative trend:"}),(0,t.jsx)(f,{w:200,h:60,data:k,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,t.jsx)(T.Text,{mt:"md",children:"Neutral trend:"}),(0,t.jsx)(f,{w:200,h:60,data:S,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
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
`,centered:!0};var w=(0,r.__exportAll)({colorSchemeColor:()=>j,trendColors:()=>C,usage:()=>g});e.s(["SparklineDemos",0,w],770563)},610713,e=>{"use strict";var r=e.i(391398),t=e.i(38856),a=e.i(770563);e.i(603441);var i=e.i(62558);e.i(457450);var n=e.i(418026);let l=(0,i.Layout)(n.MDX_DATA.Sparkline);function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:n}=i;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"Sparkline"})," is a simplified version of ",(0,r.jsx)(i.a,{href:"/charts/area-chart",children:"AreaChart"}),". It can be used\nto display a single series of data in a small space."]}),"\n",(0,r.jsx)(n,{data:a.SparklineDemos.usage}),"\n",(0,r.jsx)(i.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,r.jsxs)(i.p,{children:["You can use CSS variables in the ",(0,r.jsx)(i.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,r.jsx)(i.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor the ",(0,r.jsx)(i.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof an area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,r.jsx)(n,{data:a.SparklineDemos.colorSchemeColor}),"\n",(0,r.jsx)(i.h2,{id:"trend-colors",children:"Trend colors"}),"\n",(0,r.jsxs)(i.p,{children:["Use the ",(0,r.jsx)(i.code,{children:"trendColors"})," prop instead of ",(0,r.jsx)(i.code,{children:"color"})," to change the chart color depending on the trend.\nThe prop accepts an object with ",(0,r.jsx)(i.code,{children:"positive"}),", ",(0,r.jsx)(i.code,{children:"negative"}),", and ",(0,r.jsx)(i.code,{children:"neutral"})," properties:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"positive"})," - color for positive trend (first value is less than the last value in the ",(0,r.jsx)(i.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in the ",(0,r.jsx)(i.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"neutral"})," is optional; if not provided, the color will be the same as ",(0,r.jsx)(i.code,{children:"positive"}),"."]}),"\n",(0,r.jsx)(n,{data:a.SparklineDemos.trendColors})]})}e.s(["default",0,function(e={}){return(0,r.jsx)(l,{...e,children:(0,r.jsx)(o,{...e})})}])},578448,(e,r,t)=>{let a="/charts/sparkline";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(610713)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(r=>Promise.all(["static/chunks/22379_btw709h.js"].map(r=>e.l(r))).then(()=>r(493594)))},828805,e=>{e.v(r=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(r=>e.l(r))).then(()=>r(879466)))}]);
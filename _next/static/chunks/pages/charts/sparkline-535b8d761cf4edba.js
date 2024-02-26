(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94263],{86885:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/sparkline",function(){return r(20806)}])},20806:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(24246),a=r(71670),l=r(25049),i=r(27378),o=r(28535);let s=`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,c=`
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
`,d={type:"code",component:function(){return i.createElement(o.b,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m-b7fa7826"})},code:[{code:s,language:"scss",fileName:"Demo.module.css"},{code:c,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var p=r(90039),u=r(3916),m=r(54568);let h=(0,u.A)(m.us.Sparkline);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Sparkline"})," is a simplified version of ",(0,n.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),". It can be used\nto display a single series of data in a small space."]}),"\n",(0,n.jsx)(r,{data:l.j}),"\n",(0,n.jsx)(t.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,n.jsxs)(t.p,{children:["You can use CSS variables in ",(0,n.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"trend-colors",children:"Trend colors"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"trendColors"})," prop instead of ",(0,n.jsx)(t.code,{children:"color"})," to change chart color depending on the trend.\nThe prop accepts an object with ",(0,n.jsx)(t.code,{children:"positive"}),", ",(0,n.jsx)(t.code,{children:"negative"})," and ",(0,n.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,n.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,n.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,n.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,n.jsx)(r,{data:p.A})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(f,{...e})})}},90039:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var n=r(27378),a=r(28535),l=r(27884),i=r(26569);let o=[10,20,40,20,40,10,50],s=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d=`
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
`,p={type:"code",component:function(){return n.createElement(l.K,{gap:"sm"},n.createElement(i.x,null,"Positive trend:"),n.createElement(a.b,{w:200,h:60,data:o,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),n.createElement(i.x,{mt:"md"},"Negative trend:"),n.createElement(a.b,{w:200,h:60,data:s,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),n.createElement(i.x,{mt:"md"},"Neutral trend:"),n.createElement(a.b,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}))},code:d,centered:!0}},25049:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(27378),a=r(28535);let l=`
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
`,i={type:"configurator",component:function(e){return n.createElement(a.b,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:l,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]}},65923:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n=r(27378);function a({color:e,id:t,withGradient:r,fillOpacity:a}){return n.createElement(n.Fragment,null,r?n.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},n.createElement("stop",{offset:"0%",stopColor:e,stopOpacity:a}),n.createElement("stop",{offset:"100%",stopColor:e,stopOpacity:.01})):n.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},n.createElement("stop",{stopColor:e,stopOpacity:a??.2})))}a.displayName="@mantine/charts/AreaGradient"},28535:function(e,t,r){"use strict";r.d(t,{b:function(){return x}});var n=r(27378),a=r(9911),l=r(290),i=r(68871),o=r(83453),s=r(89738),c=r(20410),d=r(96739),p=r(6231),u=r(56589),m=r(65923);let h={},f={withGradient:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},v=(0,o.Z)((e,{color:t,data:r,trendColors:n})=>({root:{"--chart-color":n?(0,s.p)(function(e,t){let r=e[0],n=e[e.length-1];return r<n?t.positive:r>n?t.negative:t.neutral||t.positive}(r,n),e):t?(0,s.p)(t,e):void 0}})),x=(0,c.d)((e,t)=>{let r=(0,d.w)("Sparkline",f,e),{classNames:o,className:s,style:c,styles:x,unstyled:g,vars:y,data:j,withGradient:b,fillOpacity:k,curveType:E,strokeWidth:w,trendColors:T,...S}=r,C=(0,p.y)({name:"Sparkline",classes:h,props:r,className:s,style:c,classNames:o,styles:x,unstyled:g,vars:y,varsResolver:v}),N=(0,n.useId)(),O=(0,n.useMemo)(()=>j.map((e,t)=>({value:e,index:t})),[j]);return n.createElement(u.x,{ref:t,...C("root"),...S,dir:"ltr"},n.createElement(a.h,null,n.createElement(l.T,{data:O},n.createElement(i.u,{dataKey:"value",type:E,fill:`url(#${N})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:!0,strokeWidth:w,fillOpacity:1}),n.createElement("defs",null,n.createElement(m.v,{id:N,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:k,withGradient:b})))))});x.displayName="@mantine/charts/Sparkline",x.classes=h}},function(e){e.O(0,[30370,60898,290,15819,2775,49774,92888,40179],function(){return e(e.s=86885)}),_N_E=e.O()}]);
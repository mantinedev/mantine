(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94263],{43766:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/sparkline",function(){return r(53836)}])},53836:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(52322),a=r(45392),i=r(37740),l=r(77533);let o={type:"code",component:function(){return(0,n.jsx)(l.b,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m_b7fa7826"})},code:[{code:`.root {
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
`,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var s=r(8672),c=r(25071),d=r(15019);let p=(0,c.A)(d.us.Sparkline);function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Sparkline"})," is a simplified version of ",(0,n.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),". It can be used\nto display a single series of data in a small space."]}),"\n",(0,n.jsx)(r,{data:i.j}),"\n",(0,n.jsx)(t.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,n.jsxs)(t.p,{children:["You can use CSS variables in ",(0,n.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,n.jsx)(r,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"trend-colors",children:"Trend colors"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"trendColors"})," prop instead of ",(0,n.jsx)(t.code,{children:"color"})," to change chart color depending on the trend.\nThe prop accepts an object with ",(0,n.jsx)(t.code,{children:"positive"}),", ",(0,n.jsx)(t.code,{children:"negative"})," and ",(0,n.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,n.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,n.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,n.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,n.jsx)(r,{data:s.A})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(u,{...e})})}},8672:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(52322),a=r(77533),i=r(65438),l=r(8582);let o=[10,20,40,20,40,10,50],s=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d={type:"code",component:function(){return(0,n.jsxs)(i.K,{gap:"sm",children:[(0,n.jsx)(l.x,{children:"Positive trend:"}),(0,n.jsx)(a.b,{w:200,h:60,data:o,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(l.x,{mt:"md",children:"Negative trend:"}),(0,n.jsx)(a.b,{w:200,h:60,data:s,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(l.x,{mt:"md",children:"Neutral trend:"}),(0,n.jsx)(a.b,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
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
`,centered:!0}},37740:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(52322),a=r(77533);let i={type:"configurator",component:function(e){return(0,n.jsx)(a.b,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
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
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]}},32125:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n=r(52322);function a({color:e,id:t,withGradient:r,fillOpacity:a}){return(0,n.jsx)(n.Fragment,{children:r?(0,n.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:a}),(0,n.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,n.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,n.jsx)("stop",{stopColor:e,stopOpacity:a??.2})})})}a.displayName="@mantine/charts/AreaGradient"},77533:function(e,t,r){"use strict";r.d(t,{b:function(){return j}});var n=r(52322),a=r(2784),i=r(18205),l=r(50603),o=r(81073),s=r(11200),c=r(13588),d=r(82027),p=r(38483),u=r(46690),h=r(28559),m=r(32125);let x={},f={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},v=(0,s.Z)((e,{color:t,data:r,trendColors:n})=>({root:{"--chart-color":n?(0,c.p)(function(e,t){let r=e[0],n=e[e.length-1];return null===r||null===n?t.neutral||t.positive:r<n?t.positive:r>n?t.negative:t.neutral||t.positive}(r,n),e):t?(0,c.p)(t,e):void 0}})),j=(0,d.d)((e,t)=>{let r=(0,p.w)("Sparkline",f,e),{classNames:s,className:c,style:d,styles:j,unstyled:g,vars:y,data:b,withGradient:k,fillOpacity:w,curveType:T,strokeWidth:S,trendColors:C,connectNulls:N,areaProps:O,..._}=r,V=(0,u.y)({name:"Sparkline",classes:x,props:r,className:c,style:d,classNames:s,styles:j,unstyled:g,vars:y,varsResolver:v}),A=(0,a.useId)(),E=(0,a.useMemo)(()=>b.map((e,t)=>({value:e,index:t})),[b]);return(0,n.jsx)(h.x,{ref:t,...V("root"),..._,dir:"ltr",children:(0,n.jsx)(i.h,{children:(0,n.jsxs)(l.T,{data:E,children:[(0,n.jsx)(o.u,{dataKey:"value",type:T,fill:`url(#${A})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:N,strokeWidth:S,fillOpacity:1,...O}),(0,n.jsx)("defs",{children:(0,n.jsx)(m.v,{id:A,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:w,withGradient:k})})]})})})});j.displayName="@mantine/charts/Sparkline",j.classes=x}},function(e){e.O(0,[61177,16717,50603,66748,11340,92888,49774,40179],function(){return e(e.s=43766)}),_N_E=e.O()}]);
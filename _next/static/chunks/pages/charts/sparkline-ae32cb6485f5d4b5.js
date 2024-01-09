(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94263],{86885:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/sparkline",function(){return a(20806)}])},20806:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(24246),r=a(71670),l=a(25049),o=a(27378),i=a(28535);let c=`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,s=`
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
`,u={type:"code",component:function(){return o.createElement(i.b,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m-b7fa7826"})},code:[{code:c,language:"scss",fileName:"Demo.module.css"},{code:s,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var p=a(3916),d=a(54568);let m=(0,p.A)(d.us.Sparkline);function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Sparkline"})," is a simplified version of ",(0,n.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),". It can be used\nto display a single series of data in a small space."]}),"\n",(0,n.jsx)(a,{data:l.j}),"\n",(0,n.jsx)(t.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,n.jsxs)(t.p,{children:["You can use CSS variables in ",(0,n.jsx)(t.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,n.jsx)(t.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,n.jsx)(a,{data:u})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(h,{...e})})}},25049:function(e,t,a){"use strict";a.d(t,{j:function(){return o}});var n=a(27378),r=a(28535);let l=`
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
`,o={type:"configurator",component:function(e){return n.createElement(r.b,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:l,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]}},65923:function(e,t,a){"use strict";a.d(t,{v:function(){return r}});var n=a(27378);function r({color:e,id:t,withGradient:a,fillOpacity:r}){return n.createElement(n.Fragment,null,a?n.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},n.createElement("stop",{offset:"0%",stopColor:e,stopOpacity:r}),n.createElement("stop",{offset:"100%",stopColor:e,stopOpacity:.01})):n.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},n.createElement("stop",{stopColor:e,stopOpacity:r??.2})))}r.displayName="@mantine/charts/AreaGradient"},28535:function(e,t,a){"use strict";a.d(t,{b:function(){return b}});var n=a(27378),r=a(9911),l=a(290),o=a(68871),i=a(83453),c=a(89738),s=a(20410),u=a(96739),p=a(6231),d=a(56589),m=a(65923);let h={},f={withGradient:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},y=(0,i.Z)((e,{color:t})=>({root:{"--chart-color":t?(0,c.p)(t,e):void 0}})),b=(0,s.d)((e,t)=>{let a=(0,u.w)("Sparkline",f,e),{classNames:i,className:c,style:s,styles:b,unstyled:v,vars:x,data:g,withGradient:k,fillOpacity:E,curveType:j,strokeWidth:w,...S}=a,N=(0,p.y)({name:"Sparkline",classes:h,props:a,className:c,style:s,classNames:i,styles:b,unstyled:v,vars:x,varsResolver:y}),_=(0,n.useId)(),V=(0,n.useMemo)(()=>g.map((e,t)=>({value:e,index:t})),[g]);return n.createElement(d.x,{ref:t,...N("root"),...S,dir:"ltr"},n.createElement(r.h,null,n.createElement(l.T,{data:V},n.createElement(o.u,{dataKey:"value",type:j,fill:`url(#${_})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:!0,strokeWidth:w,fillOpacity:1}),n.createElement("defs",null,n.createElement(m.v,{id:_,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:E,withGradient:k})))))});b.displayName="@mantine/charts/Sparkline",b.classes=h}},function(e){e.O(0,[30370,58425,290,15819,2775,49774,92888,40179],function(){return e(e.s=86885)}),_N_E=e.O()}]);
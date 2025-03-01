(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74103],{57165:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/bubble-chart",function(){return t(8796)}])},8796:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var o=t(31085),r=t(71184),n=t(22845),l=t(68262),i=t(89110);let s={type:"configurator",component:function(e){return(0,o.jsx)(l.$,{h:60,data:i.p,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},...e})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.k,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]};var c={root:"m_5829bd25"};let d={type:"code",component:function(){return(0,o.jsx)(l.$,{h:60,data:i.p,range:[16,225],label:"Sales/hour",color:"var(--scatter-color)",className:c.root,dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  @mixin light {
    --scatter-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --scatter-color: var(--mantine-color-lime-4);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:i.k,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(l.$,{h:60,data:i.p,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},withTooltip:!1})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      withTooltip={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.k,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(l.$,{h:60,data:i.p,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"},valueFormatter:e=>`${e.toFixed(2)} USD`})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      valueFormatter={(value) => \`\${value.toFixed(2)} USD\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.k,language:"tsx",fileName:"data.ts"}]};var m={root:"m_c74eb301"};let x={type:"code",component:function(){return(0,o.jsx)(l.$,{h:60,data:i.p,range:[16,225],label:"Sales/hour",color:"lime.6",className:m.root,dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:i.k,language:"tsx",fileName:"data.ts"}]};var p=t(85954),f=t(38215);let g=(0,p.P)(f.XZ.BubbleChart);function v(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:n.C}),"\n",(0,o.jsx)(a.h2,{id:"change-color",children:"Change color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(a.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { BubbleChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <BubbleChart\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      h={60}\n      data={data}\n      range={[16, 225]}\n      label=\"Sales/hour\"\n      color=\"lime.6\"\n      dataKey={{ x: 'hour', y: 'index', z: 'value' }}\n    />\n  );\n}\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(g,{...e,children:(0,o.jsx)(v,{...e})})}},65344:(e,a,t)=>{"use strict";t.d(a,{t:()=>c});var o=t(20904),r=t(69928),n=t(98331),l=t(51492),i=t(1693),s=t(14713),c=(0,o.gu)({chartName:"ScatterChart",GraphicalChild:r.X,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:n.W},{axisType:"yAxis",AxisComp:l.h},{axisType:"zAxis",AxisComp:i.K}],formatAxisMap:s.pr})},22845:(e,a,t)=>{"use strict";t.d(a,{C:()=>l});var o=t(31085),r=t(68262),n=t(89110);let l={type:"code",component:function(){return(0,o.jsx)(r.$,{h:60,data:n.p,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n.k,language:"tsx",fileName:"data.ts"}]}},89110:(e,a,t)=>{"use strict";t.d(a,{k:()=>r,p:()=>o});let o=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],r=`
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
`},68262:(e,a,t)=>{"use strict";t.d(a,{$:()=>N});var o=t(31085),r=t(79874),n=t(65344),l=t(98331),i=t(51492),s=t(1693),c=t(37662),d=t(69928),u=t(56051),h=t(93065),m=t(7098),x=t(51606),p=t(6754),f=t(29686),g=t(92408),v=t(69564),b=t(34056),y=t(94563);function j({active:e,payload:a,getStyles:t,dataKey:r,valueFormatter:n}){if(e&&a&&a.length){let e=a[0]&&a[0].payload;return(0,o.jsx)("div",{...t("tooltip"),children:(0,o.jsxs)(u.Y,{justify:"space-between",children:[(0,o.jsx)(h.E,{fz:"sm",children:e[r.x]}),(0,o.jsx)(h.E,{fz:"sm",children:n?n(e[r.z]):e[r.z]})]})})}return null}let C={color:"blue.6",withTooltip:!0},k=(0,m.V)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,x.r)(a,e):void 0,"--chart-grid-color":t?(0,x.r)(t,e):void 0}})),N=(0,p.P9)((e,a)=>{let t=(0,f.Y)("BubbleChart",C,e),{classNames:u,className:h,style:m,styles:p,unstyled:N,vars:S,data:z,xAxisProps:D,yAxisProps:_,zAxisProps:B,tooltipProps:K,scatterProps:w,color:T,label:A,withTooltip:E,dataKey:$,range:F,valueFormatter:X,...I}=t,L=(0,g.xd)(),P=(0,v.I)({name:"BubbleChart",classes:y.A,props:t,className:h,style:m,classNames:u,styles:p,unstyled:N,vars:S,varsResolver:k});return(0,o.jsx)(b.a,{ref:a,...P("root"),...I,children:(0,o.jsx)(r.u,{children:(0,o.jsxs)(n.t,{children:[(0,o.jsx)(l.W,{type:"category",dataKey:$.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...P("axis"),...D}),(0,o.jsx)(i.h,{type:"number",dataKey:$.y,height:10,...A?void 0:{width:0},tick:!1,tickLine:!1,axisLine:!1,label:{value:A,position:"insideRight",fontSize:12,fill:"currentColor"},...P("axis"),..._}),(0,o.jsx)(s.K,{type:"number",dataKey:$.z,domain:function(e,a){let t=e.map(e=>e[a]);return[Math.min(...t),Math.max(...t)]}(z,$.z),range:F,...B}),E&&(0,o.jsx)(c.m,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,o.jsx)(j,{dataKey:$,active:e.active,payload:e.payload,getStyles:P,valueFormatter:X}),...K}),(0,o.jsx)(d.X,{data:z,fill:(0,x.r)(T,L),isAnimationActive:!1,...w})]})})})});N.displayName="@mantine/charts/BubbleChart",N.classes=y.A},94563:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}}},e=>{var a=a=>e(e.s=a);e.O(0,[67456,53417,28054,69928,39699,68831,90636,46593,38792],()=>a(57165)),_N_E=e.O()}]);
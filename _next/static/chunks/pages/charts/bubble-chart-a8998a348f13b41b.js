(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1948],{4543:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/bubble-chart",function(){return t(29496)}])},29496:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var o=t(52322),r=t(45392),n=t(57296),i=t(62967),l=t(64606);let s={type:"configurator",component:function(e){return(0,o.jsx)(i.O,{h:60,data:l.a,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},...e})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},c={type:"code",component:function(){return(0,o.jsx)(i.O,{h:60,data:l.a,range:[16,225],label:"Sales/hour",color:"var(--scatter-color)",className:"m_5829bd25",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
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
}`,language:"scss",fileName:"Demo.module.css"},{code:l.o,language:"tsx",fileName:"data.ts"}]},d={type:"code",component:function(){return(0,o.jsx)(i.O,{h:60,data:l.a,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},withTooltip:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},u={type:"code",component:function(){return(0,o.jsx)(i.O,{h:60,data:l.a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"},valueFormatter:e=>`${e.toFixed(2)} USD`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l.o,language:"tsx",fileName:"data.ts"}]},h={type:"code",component:function(){return(0,o.jsx)(i.O,{h:60,data:l.a,range:[16,225],label:"Sales/hour",color:"lime.6",className:"m_c74eb301",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
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
}`,language:"scss",fileName:"Demo.module.css"},{code:l.o,language:"tsx",fileName:"data.ts"}]};var m=t(25071),x=t(15019);let p=(0,m.A)(x.us.BubbleChart);function f(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:n.j}),"\n",(0,o.jsx)(a.h2,{id:"change-color",children:"Change color"}),"\n",(0,o.jsxs)(a.p,{children:["You can reference colors from ",(0,o.jsx)(a.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,o.jsx)(a.code,{children:"blue"}),", ",(0,o.jsx)(a.code,{children:"red.5"}),", ",(0,o.jsx)(a.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(a.h2,{id:"change-area-color-depending-on-color-scheme",children:"Change area color depending on color scheme"}),"\n",(0,o.jsxs)(a.p,{children:["You can use CSS variables in ",(0,o.jsx)(a.code,{children:"color"})," property. To define a CSS variable that\nchanges depending on the color scheme, use ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#dark-and-light-mixins",children:"light/dark mixins"}),"\nor ",(0,o.jsx)(a.a,{href:"/styles/postcss-preset/#light-dark-function",children:"light-dark function"}),". Example\nof area that is dark orange in light mode and lime in dark mode:"]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(a.h2,{id:"remove-tooltip",children:"Remove tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["To remove tooltip, set ",(0,o.jsx)(a.code,{children:"withTooltip={false}"}),". It also removes the cursor line\nand disables interactions with the chart."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,o.jsxs)(a.p,{children:["To format values in the tooltip, use ",(0,o.jsx)(a.code,{children:"valueFormat"})," prop. It accepts\na function that takes number value as an argument and returns formatted value:"]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(a.h2,{id:"grid-and-text-colors",children:"Grid and text colors"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"--chart-grid-color"})," and ",(0,o.jsx)(a.code,{children:"--chart-text-color"})," to change colors of\ngrid lines and text within the chart. With ",(0,o.jsx)(a.a,{href:"/styles/css-modules/",children:"CSS modules"}),", you can change colors\ndepending on color scheme:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsxs)(a.p,{children:["If your application has only one color scheme, you can use ",(0,o.jsx)(a.code,{children:"gridColor"})," and ",(0,o.jsx)(a.code,{children:"textColor"}),"\nprops instead of CSS variables:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { BubbleChart } from '@mantine/charts';\nimport { data } from './data';\n\nfunction Demo() {\n  return (\n    <BubbleChart\n      gridColor=\"gray.5\"\n      textColor=\"gray.9\"\n      h={60}\n      data={data}\n      range={[16, 225]}\n      label=\"Sales/hour\"\n      color=\"lime.6\"\n      dataKey={{ x: 'hour', y: 'index', z: 'value' }}\n    />\n  );\n}\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(f,{...e})})}},78560:function(e,a,t){"use strict";t.d(a,{G:function(){return c}});var o=t(71572),r=t(1510),n=t(25556),i=t(3131),l=t(18043),s=t(69524),c=(0,o.z)({chartName:"ScatterChart",GraphicalChild:r.b,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:n.K},{axisType:"yAxis",AxisComp:i.B},{axisType:"zAxis",AxisComp:l.d}],formatAxisMap:s.t9})},57296:function(e,a,t){"use strict";t.d(a,{j:function(){return i}});var o=t(52322),r=t(62967),n=t(64606);let i={type:"code",component:function(){return(0,o.jsx)(r.O,{h:60,data:n.a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n.o,language:"tsx",fileName:"data.ts"}]}},64606:function(e,a,t){"use strict";t.d(a,{a:function(){return o},o:function(){return r}});let o=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],r=`
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
`},62967:function(e,a,t){"use strict";t.d(a,{O:function(){return k}});var o=t(52322),r=t(18205),n=t(78560),i=t(25556),l=t(3131),s=t(18043),c=t(21154),d=t(1510),u=t(93010),h=t(8582),m=t(11200),x=t(13588),p=t(82027),f=t(38483),g=t(68755),v=t(46690),b=t(28559),y=t(7064);function j({active:e,payload:a,getStyles:t,dataKey:r,valueFormatter:n}){if(e&&a&&a.length){let e=a[0]&&a[0].payload;return(0,o.jsx)("div",{...t("tooltip"),children:(0,o.jsxs)(u.Z,{justify:"space-between",children:[(0,o.jsx)(h.x,{fz:"sm",children:e[r.x]}),(0,o.jsx)(h.x,{fz:"sm",children:n?n(e[r.z]):e[r.z]})]})})}return null}let C={color:"blue.6",withTooltip:!0},N=(0,m.Z)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,x.p)(a,e):void 0,"--chart-grid-color":t?(0,x.p)(t,e):void 0}})),k=(0,p.d5)((e,a)=>{let t=(0,f.w)("BubbleChart",C,e),{classNames:u,className:h,style:m,styles:p,unstyled:k,vars:S,data:z,xAxisProps:D,yAxisProps:B,zAxisProps:_,tooltipProps:w,scatterProps:K,color:T,label:A,withTooltip:E,dataKey:O,range:F,valueFormatter:Z,...G}=t,L=(0,g.rZ)(),U=(0,v.y)({name:"BubbleChart",classes:y.Z,props:t,className:h,style:m,classNames:u,styles:p,unstyled:k,vars:S,varsResolver:N});return(0,o.jsx)(b.x,{ref:a,...U("root"),...G,children:(0,o.jsx)(r.h,{children:(0,o.jsxs)(n.G,{children:[(0,o.jsx)(i.K,{type:"category",dataKey:O.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...U("axis"),...D}),(0,o.jsx)(l.B,{type:"number",dataKey:O.y,height:10,width:A?void 0:0,tick:!1,tickLine:!1,axisLine:!1,label:{value:A,position:"insideRight",fontSize:12,fill:"currentColor"},...U("axis"),...B}),(0,o.jsx)(s.d,{type:"number",dataKey:O.z,domain:function(e,a){let t=e.map(e=>e[a]);return[Math.min(...t),Math.max(...t)]}(z,O.z),range:F,..._}),E&&(0,o.jsx)(c.u,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,o.jsx)(j,{dataKey:O,active:e.active,payload:e.payload,getStyles:U,valueFormatter:Z}),...w}),(0,o.jsx)(d.b,{data:z,fill:(0,x.p)(T,L),isAnimationActive:!1,...K})]})})})});k.displayName="@mantine/charts/BubbleChart",k.classes=y.Z},7064:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}}},function(e){e.O(0,[61177,5248,90160,1510,66748,11340,92888,49774,40179],function(){return e(e.s=4543)}),_N_E=e.O()}]);
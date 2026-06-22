(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var a=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var o in e)a(r,o,{get:e[o],enumerable:!0});return t||a(r,Symbol.toStringTag,{value:"Module"}),r}])},695009,e=>{"use strict";var a=e.i(648863);let t=[{name:"React",value:95e4},{name:"Vue",value:32e4},{name:"Angular",value:58e4},{name:"Svelte",value:145e3},{name:"Next.js",value:72e4},{name:"Nuxt",value:18e4},{name:"Remix",value:95e3}],r=`export const data = ${JSON.stringify(t,null,2)};`;var o=e.i(391398),n={root:"m_1ea785b1",labelsRow:"m_294011ec",bar:"m_9de42164",barLabel:"m_6f89abf0",barValue:"m_7016be6d"},s=e.i(232471),l=e.i(481178),i=e.i(275519),d=e.i(433512),c=e.i(317477),m=e.i(779177),u=e.i(951254),p=e.i(44091),h=e.i(391466),x=e.i(191788);let v={barGap:5,minBarSize:0,barHeight:32},f=(0,l.createVarsResolver)((e,{barGap:a,minBarSize:t,barHeight:r})=>({root:{"--bars-list-gap":(0,d.getSpacing)(a),"--bars-list-min-bar-size":(0,m.rem)(t),"--bars-list-bar-height":(0,m.rem)(r)}})),g=(0,i.factory)(e=>{let a=(0,p.useProps)("BarsList",v,e),{classNames:t,className:r,style:l,styles:i,unstyled:d,vars:m,attributes:g,data:b,valueFormatter:j,barsLabel:L,valueLabel:B,getBarProps:S,renderBar:D,barGap:y,minBarSize:N,barHeight:C,barColor:w,barTextColor:T,autoContrast:U,variant:F,..._}=a,V=(0,u.useMantineTheme)(),P=(0,h.useStyles)({name:"BarsList",classes:n,props:a,className:r,style:l,classNames:t,styles:i,unstyled:d,attributes:g,vars:m,varsResolver:f}),R=(0,x.useMemo)(()=>Math.max(...b.map(e=>e.value),0),[b]),A=b.map((e,a)=>{var t;let r=R>0?e.value/R*100:0,{style:n,className:s,...l}=S?S(e):{},i=e.color||w||V.primaryColor,d=V.variantColorResolver({color:i,theme:V,variant:e.variant||F||"light",autoContrast:U}),m=d.background,u=e.textColor||T?(0,c.getThemeColor)(e.textColor||T,V):d.color,p=(0,o.jsxs)("div",{...P("bar"),children:[(0,o.jsx)("div",{...P("barLabel",{className:s,style:{width:`${r}%`,backgroundColor:m,color:u,padding:0===r?0:void 0,...n}}),...l,children:e.name}),(0,o.jsx)("div",{...P("barValue"),children:(t=e.value,j?j(t):t.toString())})]},a);return D?(0,o.jsx)("div",{children:D(e,p)},a):p}),k=L||B?(0,o.jsxs)("div",{...P("labelsRow"),children:[(0,o.jsx)("div",{children:L}),(0,o.jsx)("div",{children:B})]}):null;return(0,o.jsxs)(s.Box,{...P("root"),variant:F,..._,children:[k,A]})});g.displayName="@mantine/charts/BarsList",g.classes=n,g.varsResolver=f;let b={type:"code",component:function(){return(0,o.jsx)(g,{data:t})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},j={type:"code",component:function(){return(0,o.jsx)(g,{data:t,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} valueFormatter={(value) => value.toLocaleString('en-US')} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},L={type:"code",component:function(){return(0,o.jsx)(g,{data:t,barsLabel:"Traffic Source",valueLabel:"Visits",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},B={type:"code",component:function(){return(0,o.jsx)(g,{data:t,barGap:"xl",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barGap="xl"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},S={type:"code",component:function(){return(0,o.jsx)(g,{data:t,minBarSize:200,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      minBarSize={200}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},D={type:"code",component:function(){return(0,o.jsx)(g,{data:t,barHeight:48,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barHeight={48}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},y={type:"code",component:function(){return(0,o.jsx)(g,{data:t,barColor:"teal.6",barTextColor:"white",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barColor="teal.6"
      barTextColor="white"
      valueFormatter={(value) => value.toLocaleString('en-barsUS')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},N=[{name:"Yellow",value:12e5,color:"yellow.4"},{name:"Cyan",value:8e5,color:"cyan.2"},{name:"Lime",value:6e5,color:"lime.3"},{name:"Dark Blue",value:4e5,color:"blue.9"},{name:"Dark Red",value:2e5,color:"red.9"}],C={type:"code",component:function(){return(0,o.jsx)(g,{data:N,variant:"filled",autoContrast:!0,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      variant="filled"
      autoContrast
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:`export const data = ${JSON.stringify(N,null,2)};`,language:"tsx"}]},w=[{name:"React",value:85e4,color:"blue.6"},{name:"Vue",value:62e4,color:"green.6"},{name:"Angular",value:54e4,color:"yellow.6"},{name:"Svelte",value:38e4,color:"red.6"},{name:"Next.js",value:92e4,color:"teal.6"},{name:"Nuxt",value:41e4,color:"gray.8"},{name:"Remix",value:295e3,color:"orange.6"}],T={type:"code",component:function(){return(0,o.jsx)(g,{data:w,barsLabel:"Traffic Source",valueLabel:"Visits",variant:"filled",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      variant="filled"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:`export const data = ${JSON.stringify(w,null,2)};`,language:"tsx"}]},U={type:"code",component:function(){return(0,o.jsx)(g,{data:t,valueFormatter:e=>e.toLocaleString("en-US"),barTextColor:"white",getBarProps:e=>({style:{backgroundColor:e.value>5e5?"#10a37f":void 0,fontWeight:e.value>5e5?700:void 0}})})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      valueFormatter={(value) => value.toLocaleString('en-US')}
      barTextColor="white"
      getBarProps={(barData) => ({
        style: {
          backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
          fontWeight: barData.value > 500000 ? 700 : undefined,
        },
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var F=e.i(431868);let _={type:"code",component:function(){let e=Math.max(...t.map(e=>e.value));return(0,o.jsx)(g,{data:t,barsLabel:"Traffic Source",valueLabel:"Visits",renderBar:(a,t)=>{let r=(a.value/e*100).toFixed(1);return(0,o.jsx)(F.Tooltip,{label:`${a.name}: ${r}% of total traffic`,position:"top-start",children:t})}})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { data } from './data';

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / maxValue) * 100).toFixed(1);

        return (
          <Tooltip
            label={\`\${barData.name}: \${percentage}% of total traffic\`}
            position="top"
            withArrow
          >
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var V=(0,a.__exportAll)({autoContrast:()=>C,barColor:()=>y,barGap:()=>B,barHeight:()=>D,customColors:()=>T,getBarProps:()=>U,labels:()=>L,minBarSize:()=>S,renderBar:()=>_,usage:()=>b,valueFormatter:()=>j});e.s(["BarsListDemos",0,V],695009)},925209,e=>{"use strict";var a=e.i(391398),t=e.i(38856),r=e.i(695009);e.i(603441);var o=e.i(62558);e.i(457450);var n=e.i(418026);let s=(0,o.Layout)(n.MDX_DATA.BarsList);function l(e){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:n}=o;return n||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"BarsList"})," component displays a list of bars with names and values.\nThe only required prop is ",(0,a.jsx)(o.code,{children:"data"})," – an array of objects with ",(0,a.jsx)(o.code,{children:"name"})," and ",(0,a.jsx)(o.code,{children:"value"})," properties."]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.usage}),"\n",(0,a.jsx)(o.h2,{id:"data-format",children:"Data format"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"BarsList"})," expects data in the following format:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"export const data = [\n  { name: 'React', value: 950000 },\n  { name: 'Vue', value: 320000 },\n  { name: 'Angular', value: 580000 },\n  { name: 'Svelte', value: 145000 },\n];\n"})}),"\n",(0,a.jsx)(o.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,a.jsxs)(o.p,{children:["Use ",(0,a.jsx)(o.code,{children:"valueFormatter"})," prop to format the value displayed next to the bar.\nThe function receives the numeric value and must return a string."]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.valueFormatter}),"\n",(0,a.jsx)(o.h2,{id:"labels",children:"Labels"}),"\n",(0,a.jsxs)(o.p,{children:["Use ",(0,a.jsx)(o.code,{children:"barsLabel"})," and ",(0,a.jsx)(o.code,{children:"valueLabel"})," props to display column headers above the bars and values:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.labels}),"\n",(0,a.jsx)(o.h2,{id:"bar-gap",children:"Bar gap"}),"\n",(0,a.jsxs)(o.p,{children:["Control the spacing between bars with the ",(0,a.jsx)(o.code,{children:"barGap"})," prop:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.barGap}),"\n",(0,a.jsx)(o.h2,{id:"minimum-bar-size",children:"Minimum bar size"}),"\n",(0,a.jsxs)(o.p,{children:["Set the minimum bar width with the ",(0,a.jsx)(o.code,{children:"minBarSize"})," prop:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.minBarSize}),"\n",(0,a.jsx)(o.h2,{id:"bar-height",children:"Bar height"}),"\n",(0,a.jsxs)(o.p,{children:["Control the height of bars with the ",(0,a.jsx)(o.code,{children:"barHeight"})," prop:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.barHeight}),"\n",(0,a.jsx)(o.h2,{id:"bar-color",children:"Bar color"}),"\n",(0,a.jsxs)(o.p,{children:["Use ",(0,a.jsx)(o.code,{children:"barColor"})," and ",(0,a.jsx)(o.code,{children:"barTextColor"})," props to set the default background and text colors for all bars:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.barColor}),"\n",(0,a.jsx)(o.h2,{id:"auto-contrast",children:"Auto contrast"}),"\n",(0,a.jsxs)(o.p,{children:["Set ",(0,a.jsx)(o.code,{children:"autoContrast"})," prop to automatically adjust text color based on background color:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.autoContrast}),"\n",(0,a.jsx)(o.h2,{id:"custom-colors",children:"Custom colors"}),"\n",(0,a.jsxs)(o.p,{children:["Each bar can have its own color by setting the ",(0,a.jsx)(o.code,{children:"color"})," property in the data:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.customColors}),"\n",(0,a.jsx)(o.h2,{id:"get-bar-props",children:"Get bar props"}),"\n",(0,a.jsxs)(o.p,{children:["Use ",(0,a.jsx)(o.code,{children:"getBarProps"})," to pass additional props to each bar element.\nFor example, it can be used to add custom styling or event handlers:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.getBarProps}),"\n",(0,a.jsx)(o.h2,{id:"custom-bar-rendering",children:"Custom bar rendering"}),"\n",(0,a.jsxs)(o.p,{children:["Use ",(0,a.jsx)(o.code,{children:"renderBar"})," to completely customize how each bar is rendered:"]}),"\n",(0,a.jsx)(n,{data:r.BarsListDemos.renderBar})]})}e.s(["default",0,function(e={}){return(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})})}])},83760,(e,a,t)=>{let r="/charts/bars-list";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(925209)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(a=>Promise.all(["static/chunks/22379_btw709h.js"].map(a=>e.l(a))).then(()=>a(493594)))},828805,e=>{e.v(a=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(a=>e.l(a))).then(()=>a(879466)))}]);
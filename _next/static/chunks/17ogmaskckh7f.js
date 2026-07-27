(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var l in e)t(r,l,{get:e[l],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},803451,e=>{"use strict";var t=e.i(648863);let a=[{value:1e5,color:"red.8",label:"Poor"},{value:2e5,color:"yellow.8",label:"Average"},{value:3e5,color:"teal.8",label:"Good"}],r=`export const ranges = ${JSON.stringify(a,null,2)};`;var l=e.i(391398),o={root:"m_f1b033",label:"m_1ce939c3",trackWrapper:"m_dcd57f19",track:"m_1d61ac1a",range:"m_1d3df40c",bar:"m_8499ea2",target:"m_8dec10a2",rangeLabel:"m_18314248",barLabel:"m_73d6c572",targetLabel:"m_abeb9372"},n=e.i(232471),i=e.i(431868),s=e.i(481178),d=e.i(275519),c=e.i(317477),u=e.i(779177),h=e.i(951254),m=e.i(44091),g=e.i(391466);let v={orientation:"horizontal",size:32,barSize:16,targetRatio:.7,targetSize:2,withTooltip:!1},x=(0,s.createVarsResolver)((e,{size:t,barSize:a})=>({root:{"--bullet-size":(0,u.rem)(t),"--bullet-bar-size":(0,u.rem)(a)}})),p=(0,d.factory)(e=>{let t,a=(0,m.useProps)("BulletChart",v,e),{classNames:r,className:s,style:d,styles:p,unstyled:b,vars:f,attributes:j,value:$,target:C,ranges:k,orientation:F,label:y,valueFormatter:B,barColor:D,targetColor:w,size:_,barSize:T,targetRatio:N,targetSize:z,withTooltip:S,getTooltipLabel:P,variant:L,...W}=a,A=(0,h.useMantineTheme)(),R=(0,g.useStyles)({name:"BulletChart",classes:o,props:a,className:s,style:d,classNames:r,styles:p,unstyled:b,attributes:j,vars:f,varsResolver:x}),U="vertical"===F,M=Math.max(...k.map(e=>e.value),0),E=e=>B?B(e):e.toString(),X=e=>M>0?Math.max(0,Math.min(e/M*100,100)):0,O=D?(0,c.getThemeColor)(D,A):"var(--mantine-color-white)",V=w?(0,c.getThemeColor)(w,A):void 0,K=[...k].sort((e,t)=>t.value-e.value),q=K.map((e,t)=>{let a=X(e.value),r=U?{height:`${a}%`,bottom:0}:{width:`${a}%`};return(0,l.jsx)("div",{...R("range",{style:{...r,backgroundColor:(0,c.getThemeColor)(e.color,A)}})},t)}),G=K.map((e,t)=>{let a=X(e.value),r=U?{bottom:`${a}%`}:{left:`${a}%`};return(0,l.jsx)("div",{...R("rangeLabel",{style:r}),children:E(e.value)},t)}),I=X($),J=(0,l.jsx)("div",{...R("bar",{style:{...U?{height:`${I}%`,bottom:0}:{width:`${I}%`},backgroundColor:O}})}),H=(0,l.jsx)("div",{...R("barLabel",{style:U?{bottom:`${I}%`}:{left:`${I}%`}}),children:E($)}),Q=null!=C?X(C):0,Y=null!=C?(0,l.jsx)("div",{...R("target",{style:U?{bottom:`${Q}%`,width:`${100*N}%`,height:(0,u.rem)(z),backgroundColor:V}:{left:`${Q}%`,height:`${100*N}%`,width:(0,u.rem)(z),backgroundColor:V}})}):null,Z=null!=C?(0,l.jsx)("div",{...R("targetLabel",{style:U?{bottom:`${Q}%`}:{left:`${Q}%`}}),children:E(C)}):null,ee=P?P({value:$,target:C}):(t=[`Value: ${E($)}`],null!=C&&t.push(`Target: ${E(C)}`),t.join(" / ")),et=(0,l.jsxs)("div",{...R("trackWrapper"),"data-orientation":F,children:[G,Z,(0,l.jsxs)("div",{...R("track"),"data-orientation":F,children:[q,J,Y]}),H]});return(0,l.jsxs)(n.Box,{...R("root"),variant:L,mod:{orientation:F},...W,children:[y&&(0,l.jsx)("div",{...R("label"),children:y}),S?(0,l.jsx)(i.Tooltip,{label:ee,position:U?"right":"top",children:et}):et]})});p.displayName="@mantine/charts/BulletChart",p.classes=o,p.varsResolver=x;let b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},f={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,label:"Revenue",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      label="Revenue"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,orientation:"vertical",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`,h:250})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      orientation="vertical"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      h={250}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},$={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,barColor:"black",targetColor:"white",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      barColor="black"
      targetColor="white"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var C=e.i(671640);let k={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsxs)(C.Stack,{children:[(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,size:20,label:"Small",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`}),(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,size:32,label:"Default",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`}),(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,size:48,label:"Large",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})]})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { Stack } from '@mantine/core';
import { ranges } from './data';

function Demo() {
  return (
    <Stack>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={20}
        label="Small"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={32}
        label="Default"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={48}
        label="Large"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
    </Stack>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},F={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,target:15e4,ranges:a,withTooltip:!0,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      withTooltip
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,l.jsx)(p,{value:23e4,ranges:a,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      ranges={ranges}
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var B=(0,t.__exportAll)({barColor:()=>$,barSize:()=>k,label:()=>f,noTarget:()=>y,usage:()=>b,valueFormatter:()=>F,vertical:()=>j});e.s(["BulletChartDemos",0,B],803451)},82362,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(803451);e.i(603441);var l=e.i(62558);e.i(457450);var o=e.i(418026);let n=(0,l.Layout)(o.MDX_DATA.BulletChart);function i(e){let l={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:o}=l;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"BulletChart"})," is a compact KPI chart that displays an actual value against a target\nwith qualitative ranges as background bands. The required props are ",(0,t.jsx)(l.code,{children:"value"})," and ",(0,t.jsx)(l.code,{children:"ranges"}),".\nLabels are automatically displayed at range boundaries, the target position,\nand the bar value."]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.usage}),"\n",(0,t.jsx)(l.h2,{id:"data-format",children:"Data format"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"BulletChart"})," expects ",(0,t.jsx)(l.code,{children:"ranges"})," as an array of objects with ",(0,t.jsx)(l.code,{children:"value"})," and ",(0,t.jsx)(l.code,{children:"color"})," properties.\nRanges are rendered back-to-front (largest first), so smaller ranges overlay larger ones."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"const ranges = [\n  { value: 150000, color: 'red.8', label: 'Poor' },\n  { value: 225000, color: 'yellow.8', label: 'Average' },\n  { value: 300000, color: 'teal.8', label: 'Good' },\n];\n"})}),"\n",(0,t.jsx)(l.h2,{id:"label",children:"Label"}),"\n",(0,t.jsxs)(l.p,{children:["Use ",(0,t.jsx)(l.code,{children:"label"})," prop to display a label next to the chart:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.label}),"\n",(0,t.jsx)(l.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:'orientation="vertical"'})," to render the chart vertically. Note that you need to set\na fixed height on the component when using vertical orientation:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.vertical}),"\n",(0,t.jsx)(l.h2,{id:"bar-color",children:"Bar color"}),"\n",(0,t.jsxs)(l.p,{children:["By default, the bar color is white. Use ",(0,t.jsx)(l.code,{children:"barColor"})," prop to customize\nthe color of the actual value bar. Use ",(0,t.jsx)(l.code,{children:"targetColor"})," to change the target marker color:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.barColor}),"\n",(0,t.jsx)(l.h2,{id:"chart-size",children:"Chart size"}),"\n",(0,t.jsxs)(l.p,{children:["Use ",(0,t.jsx)(l.code,{children:"size"})," prop to control the height of the chart track area.\nThe ",(0,t.jsx)(l.code,{children:"barSize"})," prop controls the height of the actual value bar independently:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.barSize}),"\n",(0,t.jsx)(l.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,t.jsxs)(l.p,{children:["Use ",(0,t.jsx)(l.code,{children:"valueFormatter"})," prop to format values displayed in labels and tooltips.\nSet ",(0,t.jsx)(l.code,{children:"withTooltip"})," to also show a tooltip on hover:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.valueFormatter}),"\n",(0,t.jsx)(l.h2,{id:"without-target",children:"Without target"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"target"})," prop is optional. If not provided, the target marker is not rendered:"]}),"\n",(0,t.jsx)(o,{data:r.BulletChartDemos.noTarget})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})})}])},770791,(e,t,a)=>{let r="/charts/bullet-chart";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(82362)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var r in e)o(n,r,{get:e[r],enumerable:!0});return t||o(n,Symbol.toStringTag,{value:"Module"}),n}])},56415,e=>{"use strict";var o=e.i(391398),t=e.i(38856),n=e.i(648863),r=e.i(301388);let c={type:"code",code:`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,component:function(){return(0,o.jsx)(r.Code,{children:"React.createElement()"})}};var i=e.i(725695);let l={type:"code",code:`
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`,component:function(){return(0,o.jsxs)(i.Group,{justify:"center",children:[(0,o.jsx)(r.Code,{color:"blue.9",c:"white",children:"React.createElement()"}),(0,o.jsx)(r.Code,{color:"var(--mantine-color-blue-light)",children:"React.createElement()"})]})}},d=`import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,s={type:"code",code:`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,component:function(){return(0,o.jsx)(r.Code,{block:!0,children:d})}};var a=(0,n.__exportAll)({block:()=>s,colors:()=>l,usage:()=>c});e.i(603441);var u=e.i(62558);e.i(457450);var m=e.i(418026);let h=(0,u.Layout)(m.MDX_DATA.Code);function p(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{Demo:r}=n;return r||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["By default, the Code component renders an inline ",(0,o.jsx)(n.code,{children:"code"})," html element:"]}),"\n",(0,o.jsx)(r,{data:a.usage}),"\n",(0,o.jsx)(n.h2,{id:"block-code",children:"Block code"}),"\n",(0,o.jsxs)(n.p,{children:["To render code in a ",(0,o.jsx)(n.code,{children:"pre"})," element, pass the ",(0,o.jsx)(n.code,{children:"block"})," prop to the Code component:"]}),"\n",(0,o.jsx)(r,{data:a.block}),"\n",(0,o.jsx)(n.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,o.jsxs)(n.p,{children:["By default, the code color is gray. You can change it to any valid CSS color or to one\nof the ",(0,o.jsx)(n.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,o.jsx)(r,{data:a.colors})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(h,{...e,children:(0,o.jsx)(p,{...e})})}],56415)},760390,(e,o,t)=>{let n="/core/code";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(56415)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);
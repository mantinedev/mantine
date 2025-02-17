(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38383],{99925:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return n(61855)}])},61855:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>f});var t=n(31085),r=n(71184),c=n(37905);let d={type:"code",code:`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,component:function(){return(0,t.jsx)(c.C,{children:"React.createElement()"})}},i=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,l={type:"code",code:`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,component:function(){return(0,t.jsx)(c.C,{block:!0,children:i})}};var a=n(56051);let s={type:"code",code:`
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
`,component:function(){return(0,t.jsxs)(a.Y,{justify:"center",children:[(0,t.jsx)(c.C,{color:"blue.9",c:"white",children:"React.createElement()"}),(0,t.jsx)(c.C,{color:"var(--mantine-color-blue-light)",children:"React.createElement()"})]})}};var m=n(85954),u=n(38215);let h=(0,m.P)(u.XZ.Code);function p(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,t.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,t.jsx)(n,{data:d}),"\n",(0,t.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,t.jsxs)(o.p,{children:["To render code in ",(0,t.jsx)(o.code,{children:"pre"})," element pass ",(0,t.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,t.jsx)(n,{data:l}),"\n",(0,t.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,t.jsxs)(o.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,t.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,t.jsx)(n,{data:s})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...e,children:(0,t.jsx)(p,{...e})})}}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,39699,68831,90636,46593,38792],()=>o(99925)),_N_E=e.O()}]);
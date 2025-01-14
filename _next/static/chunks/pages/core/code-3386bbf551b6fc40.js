(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68564],{61884:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return n(94204)}])},94204:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return f}});var t=n(52322),r=n(45392),c=n(45909);let d={type:"code",code:`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,component:function(){return(0,t.jsx)(c.E,{children:"React.createElement()"})}},i=`
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
`,component:function(){return(0,t.jsx)(c.E,{block:!0,children:i})}};var u=n(93010);let a={type:"code",code:`
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
`,component:function(){return(0,t.jsxs)(u.Z,{justify:"center",children:[(0,t.jsx)(c.E,{color:"blue.9",c:"white",children:"React.createElement()"}),(0,t.jsx)(c.E,{color:"var(--mantine-color-blue-light)",children:"React.createElement()"})]})}};var s=n(54078),m=n(15019);let h=(0,s.A)(m.us.Code);function p(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,t.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,t.jsx)(n,{data:d}),"\n",(0,t.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,t.jsxs)(o.p,{children:["To render code in ",(0,t.jsx)(o.code,{children:"pre"})," element pass ",(0,t.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,t.jsx)(n,{data:l}),"\n",(0,t.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,t.jsxs)(o.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,t.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,t.jsx)(n,{data:a})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...e,children:(0,t.jsx)(p,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=61884)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68564],{61884:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return n(94204)}])},94204:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return x}});var t=n(52322),r=n(45392),c=n(45909);let d=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,i={type:"code",code:d,component:function(){return(0,t.jsx)(c.E,{children:"React.createElement()"})}},l=`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,u=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,a={type:"code",code:l,component:function(){return(0,t.jsx)(c.E,{block:!0,children:u})}};var s=n(93010);let m=`
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
`,h={type:"code",code:m,component:function(){return(0,t.jsxs)(s.Z,{justify:"center",children:[(0,t.jsx)(c.E,{color:"blue.9",c:"white",children:"React.createElement()"}),(0,t.jsx)(c.E,{color:"var(--mantine-color-blue-light)",children:"React.createElement()"})]})}};var p=n(79016),f=n(33638);let j=(0,p.A)(f.us.Code);function C(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,t.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,t.jsx)(n,{data:i}),"\n",(0,t.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,t.jsxs)(o.p,{children:["To render code in ",(0,t.jsx)(o.code,{children:"pre"})," element pass ",(0,t.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,t.jsx)(n,{data:a}),"\n",(0,t.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,t.jsxs)(o.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,t.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,t.jsx)(n,{data:h})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...e,children:(0,t.jsx)(C,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=61884)}),_N_E=e.O()}]);
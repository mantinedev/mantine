(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68564],{61884:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return t(94204)}])},94204:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return x}});var n=t(52322),r=t(45392),c=t(2784),d=t(45909);let i=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,l={type:"code",code:i,component:function(){return c.createElement(d.E,null,"React.createElement()")}},a=`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,m=`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,u={type:"code",code:a,component:function(){return c.createElement(d.E,{block:!0},m)}};var s=t(93010);let p=`
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
`,f={type:"code",code:p,component:function(){return c.createElement(s.Z,{justify:"center"},c.createElement(d.E,{color:"blue.9",c:"white"},"React.createElement()"),c.createElement(d.E,{color:"var(--mantine-color-blue-light)"},"React.createElement()"))}};var h=t(79016),C=t(33638);let E=(0,h.A)(C.us.Code);function j(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,n.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,n.jsxs)(o.p,{children:["To render code in ",(0,n.jsx)(o.code,{children:"pre"})," element pass ",(0,n.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,n.jsxs)(o.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,n.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,n.jsx)(t,{data:f})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(E,{...e,children:(0,n.jsx)(j,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=61884)}),_N_E=e.O()}]);
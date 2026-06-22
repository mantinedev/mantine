(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let o={};for(var i in e)n(o,i,{get:e[i],enumerable:!0});return t||n(o,Symbol.toStringTag,{value:"Module"}),o}])},749497,e=>{"use strict";var n=e.i(391398),t=e.i(38856),o=e.i(648863),i=e.i(689579),r=e.i(883364);let s={type:"configurator",component:function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Text,{children:"First line"}),(0,n.jsx)(i.Space,{...e}),(0,n.jsx)(r.Text,{children:"Second line"})]})},code:`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`,controls:[{prop:"h",type:"size",initialValue:"md",libraryValue:"__"}]},c={type:"configurator",component:function(e){return(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(r.Text,{children:"First part"}),(0,n.jsx)(i.Space,{...e}),(0,n.jsx)(r.Text,{children:"Second part"})]})},code:`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </div>
  );
}
`,controls:[{prop:"w",type:"size",initialValue:"md",libraryValue:"__"}]};var a=(0,o.__exportAll)({horizontal:()=>s,vertical:()=>c});e.i(603441);var l=e.i(62558);e.i(457450);var d=e.i(418026);let p=(0,l.Layout)(d.MDX_DATA.Space);function u(e){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:i}=o;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"Space"})," component to add horizontal or vertical spacing between elements:"]}),"\n",(0,n.jsx)(i,{data:a.horizontal}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i,{data:a.vertical}),"\n",(0,n.jsx)(o.h2,{id:"where-to-use",children:"Where to use"}),"\n",(0,n.jsxs)(o.p,{children:["In most cases, you would want to use margin props instead of ",(0,n.jsx)(o.code,{children:"Space"})," when working with Mantine components:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Space, Text } from '@mantine/core';\n\n// Space is not required as the same can be achieved with `mt` prop\nfunction Demo() {\n  return (\n    <>\n      <Text>First line</Text>\n      <Text mt=\"md\">Second line</Text>\n    </>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["But when you work with regular HTML elements you do not have access to ",(0,n.jsx)(o.code,{children:"theme.spacing"})," and you may want to use\n",(0,n.jsx)(o.code,{children:"Space"})," component to skip direct theme subscription:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Space } from '@mantine/core';\n\n// Margin props are not available on div,\n// use Space to add spacing from theme\nfunction Demo() {\n  return (\n    <>\n      <div>First line</div>\n      <Space h=\"md\" />\n      <div>Second line</div>\n    </>\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(p,{...e,children:(0,n.jsx)(u,{...e})})}],749497)},721832,(e,n,t)=>{let o="/core/space";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(749497)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var o in e)n(r,o,{get:e[o],enumerable:!0});return t||n(r,Symbol.toStringTag,{value:"Module"}),r}])},330573,e=>{"use strict";var n=e.i(44091),t=e.i(391466),r=e.i(956449),o=e.i(232471),i={root:"m_4451eb3a"},l=e.i(391398);let s=(0,r.polymorphicFactory)(e=>{let r=(0,n.useProps)("Center",null,e),{classNames:s,className:c,style:a,styles:m,unstyled:h,vars:d,inline:u,mod:p,attributes:x,...g}=r,j=(0,t.useStyles)({name:"Center",props:r,classes:i,className:c,style:a,classNames:s,styles:m,unstyled:h,attributes:x,vars:d});return(0,l.jsx)(o.Box,{mod:[{inline:u},p],...j("root"),...g})});s.classes=i,s.displayName="@mantine/core/Center",e.s(["Center",0,s],330573)},257846,e=>{"use strict";var n=e.i(391398),t=e.i(38856),r=e.i(648863),o=e.i(232471),i=e.i(330573);let l={type:"code",code:`
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`,component:function(){return(0,n.jsx)(i.Center,{maw:400,h:100,bg:"var(--mantine-color-gray-light)",children:(0,n.jsx)(o.Box,{bg:"var(--mantine-color-blue-light)",children:"All elements inside Center are centered"})})}};var s=e.i(943311),c=e.i(79897);let a={type:"code",code:`
import { Center, Anchor, Box } from '@mantine/core';
import { ArrowLeftIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <ArrowLeftIcon size={12} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`,component:function(){return(0,n.jsx)(c.Anchor,{href:"https://mantine.dev",target:"_blank",children:(0,n.jsxs)(i.Center,{inline:!0,children:[(0,n.jsx)(s.ArrowLeftIcon,{size:12,className:"mantine-rotate-rtl"}),(0,n.jsx)(o.Box,{ml:5,children:"Back to Mantine website"})]})})}};var m=(0,r.__exportAll)({inline:()=>a,usage:()=>l});e.i(603441);var h=e.i(62558);e.i(457450);var d=e.i(418026);let u=(0,h.Layout)(d.MDX_DATA.Center);function p(e){let r={code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{Demo:o,Polymorphic:i}=r;return o||x("Demo",!0),i||x("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:m.usage}),"\n",(0,n.jsx)(r.h2,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(r.p,{children:["To use ",(0,n.jsx)(r.code,{children:"Center"})," with inline elements, set the ",(0,n.jsx)(r.code,{children:"inline"})," prop.\nFor example, you can center a link icon and label:"]}),"\n",(0,n.jsx)(o,{data:m.inline}),"\n",(0,n.jsx)(i,{defaultElement:"div",changeToElement:"button",component:"Center"})]})}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,n.jsx)(u,{...e,children:(0,n.jsx)(p,{...e})})}],257846)},239256,(e,n,t)=>{let r="/core/center";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(257846)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
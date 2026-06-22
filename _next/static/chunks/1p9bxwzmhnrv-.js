(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,o=>{"use strict";var e=Object.defineProperty;o.s(["__exportAll",0,(o,t)=>{let r={};for(var n in o)e(r,n,{get:o[n],enumerable:!0});return t||e(r,Symbol.toStringTag,{value:"Module"}),r}])},494573,o=>{"use strict";var e=o.i(391398),t=o.i(38856),r=o.i(648863),n=o.i(771820),c=o.i(725695);let a={type:"code",component:function(){return(0,e.jsxs)(c.Group,{children:[(0,e.jsx)(n.ColorSwatch,{color:"#009790"}),(0,e.jsx)(n.ColorSwatch,{color:"rgba(234, 22, 174, 0.5)"}),(0,e.jsx)(n.ColorSwatch,{color:"var(--mantine-color-orange-5)"})]})},centered:!0,code:`
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
`};var i=o.i(191788),l=o.i(956031);let s={type:"code",code:`
import { useState } from 'react';
import { ColorSwatch, CheckIcon } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon size={12} />}
    </ColorSwatch>
  );
}
`,centered:!0,component:function(){let[o,t]=(0,i.useState)(!0);return(0,e.jsx)(n.ColorSwatch,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>t(o=>!o),c:"white",style:{cursor:"pointer"},children:o&&(0,e.jsx)(l.CheckIcon,{size:12})})}},h={type:"configurator",component:function(o){return(0,e.jsx)(n.ColorSwatch,{color:"rgba(255, 255, 255, 0.7)",...o})},code:`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var u=(0,r.__exportAll)({component:()=>s,shadow:()=>h,usage:()=>a});o.i(603441);var d=o.i(62558);o.i(457450);var p=o.i(418026);let m=(0,d.Layout)(p.MDX_DATA.ColorSwatch);function w(o){let r={code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...o.components},{Demo:n,Polymorphic:c}=r;return n||f("Demo",!0),c||f("Polymorphic",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsx)(n,{data:u.usage}),"\n",(0,e.jsx)(r.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,e.jsxs)(r.p,{children:["By default, ",(0,e.jsx)(r.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds.\nYou can disable it by setting the ",(0,e.jsx)(r.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,e.jsx)(n,{data:u.shadow}),"\n",(0,e.jsx)(c,{defaultElement:"div",changeToElement:"button",component:"ColorSwatch"}),"\n",(0,e.jsxs)(r.p,{children:["Example of using ",(0,e.jsx)(r.code,{children:"ColorSwatch"})," as a button:"]}),"\n",(0,e.jsx)(n,{data:u.component})]})}function f(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}o.s(["default",0,function(o={}){return(0,e.jsx)(m,{...o,children:(0,e.jsx)(w,{...o})})}],494573)},566499,(o,e,t)=>{let r="/core/color-swatch";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>o.r(494573)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,o=>{o.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>o.l(e))).then(()=>e(493594)))},828805,o=>{o.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>o.l(e))).then(()=>e(879466)))}]);
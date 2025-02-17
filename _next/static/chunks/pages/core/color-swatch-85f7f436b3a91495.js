(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71706],{9141:(o,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return r(85291)}])},85291:(o,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>f});var t=r(31085),n=r(71184),c=r(56051),a=r(14318);let l={type:"code",component:function(){return(0,t.jsxs)(c.Y,{children:[(0,t.jsx)(a.q,{color:"#009790"}),(0,t.jsx)(a.q,{color:"rgba(234, 22, 174, 0.5)"}),(0,t.jsx)(a.q,{color:"var(--mantine-color-orange-5)"})]})},centered:!0,code:`
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
`},i={type:"configurator",component:function(o){return(0,t.jsx)(a.q,{color:"rgba(255, 255, 255, 0.7)",...o})},code:`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var s=r(14041),h=r(5583);let d={type:"code",code:`
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
`,centered:!0,component:function(){let[o,e]=(0,s.useState)(!0);return(0,t.jsx)(a.q,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>e(o=>!o),c:"white",style:{cursor:"pointer"},children:o&&(0,t.jsx)(h.S,{size:12})})}};var u=r(85954),p=r(38215);let m=(0,u.P)(p.XZ.ColorSwatch);function w(o){let e={code:"code",h2:"h2",p:"p",...(0,n.R)(),...o.components},{Demo:r,Polymorphic:c}=e;return r||x("Demo",!0),c||x("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(e.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,t.jsxs)(e.p,{children:["By default, ",(0,t.jsx)(e.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,t.jsx)(e.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,t.jsx)(r,{data:i}),"\n",(0,t.jsx)(c,{defaultElement:"div",changeToElement:"button",component:"ColorSwatch"}),"\n",(0,t.jsx)(r,{data:d})]})}function f(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...o,children:(0,t.jsx)(w,{...o})})}function x(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}},o=>{var e=e=>o(o.s=e);o.O(0,[67456,39699,68831,90636,46593,38792],()=>e(9141)),_N_E=o.O()}]);
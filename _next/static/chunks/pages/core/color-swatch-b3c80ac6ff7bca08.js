(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60451],{55613:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(75283)}])},75283:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r=t(52322),n=t(45392),c=t(93010),a=t(27009);let i={type:"code",component:function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.b,{color:"#009790"}),(0,r.jsx)(a.b,{color:"rgba(234, 22, 174, 0.5)"}),(0,r.jsx)(a.b,{color:"var(--mantine-color-orange-5)"})]})},centered:!0,code:`
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
`},l={type:"configurator",component:function(o){return(0,r.jsx)(a.b,{color:"rgba(255, 255, 255, 0.7)",...o})},code:`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var h=t(2784),s=t(40284),u=t(58898);let d={type:"code",code:`
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`,centered:!0,component:function(){let[o,e]=(0,h.useState)(!0);return(0,r.jsx)(a.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>e(o=>!o),c:"white",style:{cursor:"pointer"},children:o&&(0,r.jsx)(s.n,{style:{width:(0,u.h)(12),height:(0,u.h)(12)}})})}};var p=t(25071),m=t(15019);let w=(0,p.A)(m.us.ColorSwatch);function f(o){let e={code:"code",h2:"h2",p:"p",...(0,n.a)(),...o.components},{Demo:t,Polymorphic:c}=e;return t||x("Demo",!0),c||x("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:i}),"\n",(0,r.jsx)(e.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,r.jsxs)(e.p,{children:["By default, ",(0,r.jsx)(e.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,r.jsx)(e.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,r.jsx)(t,{data:l}),"\n",(0,r.jsx)(c,{defaultElement:"div",changeToElement:"button",component:"ColorSwatch"}),"\n",(0,r.jsx)(t,{data:d})]})}function b(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(w,{...o,children:(0,r.jsx)(f,{...o})})}function x(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(o){o.O(0,[61177,66748,11340,92888,49774,40179],function(){return o(o.s=55613)}),_N_E=o.O()}]);
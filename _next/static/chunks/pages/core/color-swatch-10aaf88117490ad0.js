(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60451],{55613:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(75283)}])},75283:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var n=t(52322),r=t(45392),c=t(93010),a=t(27009);let i={type:"code",component:function(){return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(a.b,{color:"#009790"}),(0,n.jsx)(a.b,{color:"rgba(234, 22, 174, 0.5)"}),(0,n.jsx)(a.b,{color:"var(--mantine-color-orange-5)"})]})},centered:!0,code:`
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
`},l={type:"configurator",component:function(o){return(0,n.jsx)(a.b,{color:"rgba(255, 255, 255, 0.7)",...o})},code:`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var s=t(2784),u=t(40284);let h={type:"code",code:`
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
`,centered:!0,component:function(){let[o,e]=(0,s.useState)(!0);return(0,n.jsx)(a.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>e(o=>!o),c:"white",style:{cursor:"pointer"},children:o&&(0,n.jsx)(u.n,{size:12})})}};var d=t(54078),p=t(15019);let m=(0,d.A)(p.us.ColorSwatch);function f(o){let e={code:"code",h2:"h2",p:"p",...(0,r.a)(),...o.components},{Demo:t,Polymorphic:c}=e;return t||b("Demo",!0),c||b("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:i}),"\n",(0,n.jsx)(e.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,n.jsxs)(e.p,{children:["By default, ",(0,n.jsx)(e.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,n.jsx)(e.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(c,{defaultElement:"div",changeToElement:"button",component:"ColorSwatch"}),"\n",(0,n.jsx)(t,{data:h})]})}function w(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...o,children:(0,n.jsx)(f,{...o})})}function b(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(o){o.O(0,[61177,66748,61639,92888,49774,40179],function(){return o(o.s=55613)}),_N_E=o.O()}]);
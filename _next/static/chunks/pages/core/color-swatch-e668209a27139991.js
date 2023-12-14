(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{1238:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(92546)}])},92546:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return S}});var r=t(24246),n=t(71670),c=t(27378),a=t(22971),l=t(16202);let i=`
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
`,h={type:"code",component:function(){return c.createElement(a.Z,null,c.createElement(l.b,{color:"#009790"}),c.createElement(l.b,{color:"rgba(234, 22, 174, 0.5)"}),c.createElement(l.b,{color:"var(--mantine-color-orange-5)"}))},centered:!0,code:i},u=`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,s={type:"configurator",component:function(e){return c.createElement(l.b,{color:"rgba(255, 255, 255, 0.7)",...e})},code:u,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var d=t(38765),m=t(71078);let p=`
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
`,w={type:"code",code:p,centered:!0,component:function(){let[e,o]=(0,c.useState)(!0);return c.createElement(l.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>o(e=>!e),c:"white",style:{cursor:"pointer"}},e&&c.createElement(d.n,{style:{width:(0,m.h)(12),height:(0,m.h)(12)}}))}};var f=t(3916),b=t(30289);let g=(0,f.A)(b.us.ColorSwatch);function C(e){let o={code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{Demo:t,Polymorphic:c}=o;return t||E("Demo",!0),c||E("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(o.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,r.jsxs)(o.p,{children:["By default, ",(0,r.jsx)(o.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,r.jsx)(o.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(c,{defaultElement:"div",changeToElement:"a",component:"ColorSwatch",withNext:!0}),"\n",(0,r.jsx)(t,{data:w})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(C,{...e})})}function E(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=1238)}),_N_E=e.O()}]);
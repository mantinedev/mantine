(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71706],{1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36763:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var r=o(6029),a=o(16285),n=o(57414),l=o(11508);let s={type:"code",component:function(){return(0,r.jsxs)(n.Y,{children:[(0,r.jsx)(l.q,{color:"#009790"}),(0,r.jsx)(l.q,{color:"rgba(234, 22, 174, 0.5)"}),(0,r.jsx)(l.q,{color:"var(--mantine-color-orange-5)"})]})},centered:!0,code:`
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
`},c={type:"configurator",component:function(e){return(0,r.jsx)(l.q,{color:"rgba(255, 255, 255, 0.7)",...e})},code:`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var h=o(55729),d=o(98538);let i={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,h.useState)(!0);return(0,r.jsx)(l.q,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>t(e=>!e),c:"white",style:{cursor:"pointer"},children:e&&(0,r.jsx)(d.S,{size:12})})}};var p=o(38547),v=o(5262);let u=(0,p.P)(v.XZ.ColorSwatch);function g(e){let t={code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components},{Demo:o,Polymorphic:n}=t;return o||y("Demo",!0),n||y("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,r.jsx)(t.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,r.jsx)(o,{data:c}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"button",component:"ColorSwatch"}),"\n",(0,r.jsx)(o,{data:i})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(g,{...e})})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},69261:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return o(36763)}])},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=69261)),_N_E=e.O()}]);
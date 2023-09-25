(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8564],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},62876:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return o(28242)}])},28242:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var n=o(85893),r=o(11151),c=o(19905),a=o(9904),d=o(67294),i=o(53777);let l=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,s={type:"code",code:l,component:function(){return d.createElement(i.E,null,"React.createElement()")}},u=`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,h=`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,p={type:"code",code:u,component:function(){return d.createElement(i.E,{block:!0},h)}};var m=o(16262);let v=`
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
`,f={type:"code",code:v,component:function(){return d.createElement(m.Z,{justify:"center"},d.createElement(i.E,{color:"blue.9",c:"white"},"React.createElement()"),d.createElement(i.E,{color:"var(--mantine-color-blue-light)"},"React.createElement()"))}},g=(0,c.A)(a.us.Code);function y(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Code component renders inline ",(0,n.jsx)(t.code,{children:"code"})," html element:"]}),"\n",(0,n.jsx)(o,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"block-code",children:"Block code"}),"\n",(0,n.jsxs)(t.p,{children:["To render code in ",(0,n.jsx)(t.code,{children:"pre"})," element pass ",(0,n.jsx)(t.code,{children:"block"})," prop to Code component:"]}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,n.jsxs)(t.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,n.jsx)(t.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,n.jsx)(o,{data:f})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,Object.assign({},e,{children:(0,n.jsx)(y,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=62876)}),_N_E=e.O()}]);
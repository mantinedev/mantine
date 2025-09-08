(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38383],{1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},42149:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return o(47713)}])},47713:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var n=o(6029),d=o(16285),r=o(1608);let c={type:"code",code:`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,component:function(){return(0,n.jsx)(r.C,{children:"React.createElement()"})}},l=`import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,a={type:"code",code:`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,component:function(){return(0,n.jsx)(r.C,{block:!0,children:l})}};var s=o(57414);let h={type:"code",code:`
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
`,component:function(){return(0,n.jsxs)(s.Y,{justify:"center",children:[(0,n.jsx)(r.C,{color:"blue.9",c:"white",children:"React.createElement()"}),(0,n.jsx)(r.C,{color:"var(--mantine-color-blue-light)",children:"React.createElement()"})]})}};var i=o(38547),p=o(5262);let u=(0,i.P)(p.XZ.Code);function v(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,d.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Code component renders inline ",(0,n.jsx)(t.code,{children:"code"})," html element:"]}),"\n",(0,n.jsx)(o,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"block-code",children:"Block code"}),"\n",(0,n.jsxs)(t.p,{children:["To render code in ",(0,n.jsx)(t.code,{children:"pre"})," element pass ",(0,n.jsx)(t.code,{children:"block"})," prop to Code component:"]}),"\n",(0,n.jsx)(o,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,n.jsxs)(t.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,n.jsx)(t.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,n.jsx)(o,{data:h})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(u,{...e,children:(0,n.jsx)(v,{...e})})}},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=42149)),_N_E=e.O()}]);
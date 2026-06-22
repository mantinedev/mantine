(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let o={};for(var s in e)n(o,s,{get:e[s],enumerable:!0});return t||n(o,Symbol.toStringTag,{value:"Module"}),o}])},829536,e=>{"use strict";var n=e.i(391398),t=e.i(38856),o=e.i(648863),s=e.i(191788),i=e.i(485108),l=e.i(725695),d=e.i(470743),r=e.i(196072);let c={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),o=(0,r.useClickOutside)(()=>t(!1),["mouseup","touchend"]);return(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)(l.Group,{justify:"center",children:(0,n.jsx)(i.Button,{onClick:()=>t(!0),children:"Open dropdown"})}),e&&(0,n.jsx)(d.Paper,{ref:o,shadow:"sm",style:{width:300,height:60,position:"absolute",top:0,left:"calc(50% - 150px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,n.jsx)("span",{children:"Click outside to close"})})]})},code:`
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ['mouseup', 'touchend']);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`,dimmed:!0},u={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),o=(0,r.useClickOutside)(()=>t(!1));return(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)(l.Group,{justify:"center",children:(0,n.jsx)(i.Button,{onClick:()=>t(!0),children:"Open dropdown"})}),e&&(0,n.jsx)(d.Paper,{ref:o,shadow:"sm",style:{width:300,height:60,position:"absolute",top:0,left:"calc(50% - 150px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,n.jsx)("span",{children:"Click outside to close"})})]})},code:`
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`,dimmed:!0};var a=(0,o.__exportAll)({events:()=>c,usage:()=>u});e.i(603441);var h=e.i(62558);e.i(457450);var p=e.i(418026);let m=(0,h.Layout)(p.MDX_DATA.useClickOutside);function f(e){let o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:s}=o;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s,{data:a.usage}),"\n",(0,n.jsx)(o.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"use-click-outside"})," hook accepts 3 arguments:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"handler"})," – function that is called when clicking outside"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"events"})," – optional list of events that trigger outside click, ",(0,n.jsx)(o.code,{children:"['mousedown', 'touchstart']"})," by default"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"nodes"})," - optional list of nodes that should not trigger outside click event"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"enabled"})," - optional boolean to dynamically enable/disable the listener, ",(0,n.jsx)(o.code,{children:"true"})," by default"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["The hook returns a ",(0,n.jsx)(o.code,{children:"ref"})," object that must be passed to the element\nbased on which outside clicks should be captured."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nfunction Example() {\n  const handleClickOutside = () =>\n    console.log('Clicked outside of div');\n  const ref = useClickOutside(handleClickOutside);\n  return <div ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"change-events",children:"Change events"}),"\n",(0,n.jsxs)(o.p,{children:["By default, ",(0,n.jsx)(o.code,{children:"use-click-outside"})," listens to ",(0,n.jsx)(o.code,{children:"mousedown"})," and ",(0,n.jsx)(o.code,{children:"touchstart"})," events,\nyou can change these events by passing an array of events as second argument:"]}),"\n",(0,n.jsx)(s,{data:a.events}),"\n",(0,n.jsx)(o.h2,{id:"multiple-nodes",children:"Multiple nodes"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// Will work only with useState, not useRef\nimport { useState } from 'react';\nimport { Portal } from '@mantine/core';\nimport { useClickOutside } from '@mantine/hooks';\n\nfunction Demo() {\n  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(\n    null\n  );\n  const [control, setControl] = useState<HTMLDivElement | null>(null);\n\n  useClickOutside(() => console.log('outside'), null, [\n    control,\n    dropdown,\n  ]);\n\n  return (\n    // We cannot use root element ref as it does not contain dropdown\n    <div>\n      <div ref={setControl}>Control</div>\n      <Portal>\n        <div ref={setDropdown}>Dropdown</div>\n      </Portal>\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"set-ref-type",children:"Set ref type"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nconst ref = useClickOutside<HTMLDivElement>(() =>\n  console.log('Click outside')\n);\n"})}),"\n",(0,n.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"function useClickOutside<T extends HTMLElement = any>(\n  handler: (event: MouseEvent | TouchEvent) => void,\n  events?: string[] | null,\n  nodes?: (HTMLElement | null)[],\n  enabled?: boolean\n): React.RefObject<T>;\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(m,{...e,children:(0,n.jsx)(f,{...e})})}],829536)},939372,(e,n,t)=>{let o="/hooks/use-click-outside";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(829536)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
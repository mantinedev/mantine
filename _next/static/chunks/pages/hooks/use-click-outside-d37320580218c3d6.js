(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44905],{45561:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-click-outside",function(){return t(56497)}])},56497:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var o=t(31085),s=t(71184),i=t(14041),d=t(56051),l=t(52022),c=t(58120),r=t(63151);let u={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),t=(0,r.L)(()=>n(!1));return(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(d.Y,{justify:"center",children:(0,o.jsx)(l.$,{onClick:()=>n(!0),children:"Open dropdown"})}),e&&(0,o.jsx)(c.t,{ref:t,shadow:"sm",style:{width:300,height:60,position:"absolute",top:0,left:"calc(50% - 150px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,o.jsx)("span",{children:"Click outside to close"})})]})},code:`
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
`,dimmed:!0},a={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),t=(0,r.L)(()=>n(!1),["mouseup","touchend"]);return(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(d.Y,{justify:"center",children:(0,o.jsx)(l.$,{onClick:()=>n(!0),children:"Open dropdown"})}),e&&(0,o.jsx)(c.t,{ref:t,shadow:"sm",style:{width:300,height:60,position:"absolute",top:0,left:"calc(50% - 150px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,o.jsx)("span",{children:"Click outside to close"})})]})},code:`
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
`,dimmed:!0};var h=t(85954),p=t(38215);let m=(0,h.P)(p.XZ.useClickOutside);function f(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-click-outside"})," hook accepts 3 arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"handler"})," – function that is called on outside click"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"events"})," – optional list of events that trigger outside click, ",(0,o.jsx)(n.code,{children:"['mousedown', 'touchstart']"})," by default"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nodes"})," - optional list of nodes that should not trigger outside click event"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns a ",(0,o.jsx)(n.code,{children:"ref"})," object that must be passed to the element\nbased on which outside clicks should be captured."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nfunction Example() {\n  const handleClickOutside = () =>\n    console.log('Clicked outside of div');\n  const ref = useClickOutside(handleClickOutside);\n  return <div ref={ref} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"change-events",children:"Change events"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"use-click-outside"})," listens to ",(0,o.jsx)(n.code,{children:"mousedown"})," and ",(0,o.jsx)(n.code,{children:"touchstart"})," events,\nyou can change these events by passing an array of events as second argument:"]}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"multiple-nodes",children:"Multiple nodes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Will work only with useState, not useRef\nimport { useState } from 'react';\nimport { Portal } from '@mantine/core';\nimport { useClickOutside } from '@mantine/hooks';\n\nfunction Demo() {\n  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(\n    null\n  );\n  const [control, setControl] = useState<HTMLDivElement | null>(null);\n\n  useClickOutside(() => console.log('outside'), null, [\n    control,\n    dropdown,\n  ]);\n\n  return (\n    // We cannot use root element ref as it does not contain dropdown\n    <div>\n      <div ref={setControl}>Control</div>\n      <Portal>\n        <div ref={setDropdown}>Dropdown</div>\n      </Portal>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"set-ref-type",children:"Set ref type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nconst ref = useClickOutside<HTMLDivElement>(() =>\n  console.log('Click outside')\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: HTMLElement[]\n): React.MutableRefObject<T>;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(f,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(45561)),_N_E=e.O()}]);
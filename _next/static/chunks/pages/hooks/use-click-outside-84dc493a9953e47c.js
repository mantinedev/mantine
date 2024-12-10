(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{61501:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-click-outside",function(){return t(63752)}])},63752:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var o=t(52322),s=t(45392),i=t(2784),d=t(93010),l=t(39629),c=t(1198),r=t(58898),u=t(33303);let a={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),t=(0,u.O)(()=>n(!1));return(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(d.Z,{justify:"center",children:(0,o.jsx)(l.z,{onClick:()=>n(!0),children:"Open dropdown"})}),e&&(0,o.jsx)(c.X,{ref:t,shadow:"sm",style:{width:(0,r.h)(300),height:(0,r.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,r.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,o.jsx)("span",{children:"Click outside to close"})})]})},code:`
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
`,dimmed:!0},h={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),t=(0,u.O)(()=>n(!1),["mouseup","touchend"]);return(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(d.Z,{justify:"center",children:(0,o.jsx)(l.z,{onClick:()=>n(!0),children:"Open dropdown"})}),e&&(0,o.jsx)(c.X,{ref:t,shadow:"sm",style:{width:(0,r.h)(300),height:(0,r.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,r.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:(0,o.jsx)("span",{children:"Click outside to close"})})]})},code:`
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
`,dimmed:!0};var p=t(25071),f=t(15019);let m=(0,p.A)(f.us.useClickOutside);function x(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-click-outside"})," hook accepts 3 arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"handler"})," – function that is called on outside click"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"events"})," – optional list of events that trigger outside click, ",(0,o.jsx)(n.code,{children:"['mousedown', 'touchstart']"})," by default"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nodes"})," - optional list of nodes that should not trigger outside click event"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns a ",(0,o.jsx)(n.code,{children:"ref"})," object that must be passed to the element\nbased on which outside clicks should be captured."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nfunction Example() {\n  const handleClickOutside = () =>\n    console.log('Clicked outside of div');\n  const ref = useClickOutside(handleClickOutside);\n  return <div ref={ref} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"change-events",children:"Change events"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"use-click-outside"})," listens to ",(0,o.jsx)(n.code,{children:"mousedown"})," and ",(0,o.jsx)(n.code,{children:"touchstart"})," events,\nyou can change these events by passing an array of events as second argument:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"multiple-nodes",children:"Multiple nodes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Will work only with useState, not useRef\nimport { useState } from 'react';\nimport { Portal } from '@mantine/core';\nimport { useClickOutside } from '@mantine/hooks';\n\nfunction Demo() {\n  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(\n    null\n  );\n  const [control, setControl] = useState<HTMLDivElement | null>(null);\n\n  useClickOutside(() => console.log('outside'), null, [\n    control,\n    dropdown,\n  ]);\n\n  return (\n    // We cannot use root element ref as it does not contain dropdown\n    <div>\n      <div ref={setControl}>Control</div>\n      <Portal>\n        <div ref={setDropdown}>Dropdown</div>\n      </Portal>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"set-ref-type",children:"Set ref type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nconst ref = useClickOutside<HTMLDivElement>(() =>\n  console.log('Click outside')\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: HTMLElement[]\n): React.MutableRefObject<T>;\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(x,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=61501)}),_N_E=e.O()}]);
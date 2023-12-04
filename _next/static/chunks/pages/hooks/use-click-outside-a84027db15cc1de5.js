(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{38535:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-click-outside",function(){return t(91121)}])},91121:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var o=t(24246),s=t(71670),i=t(3916),l=t(30289),r=t(27378),c=t(22971),d=t(8671),u=t(98477),a=t(71078),p=t(93226);let h=`
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
`,m={type:"code",component:function(){let[e,n]=(0,r.useState)(!1),t=(0,p.O)(()=>n(!1));return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"}},r.createElement(c.Z,{justify:"center"},r.createElement(d.z,{onClick:()=>n(!0)},"Open dropdown")),e&&r.createElement(u.X,{ref:t,shadow:"sm",style:{width:(0,a.h)(300),height:(0,a.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,a.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}},r.createElement("span",null,"Click outside to close"))))},code:h,dimmed:!0},f=`
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
`,x={type:"code",component:function(){let[e,n]=(0,r.useState)(!1),t=(0,p.O)(()=>n(!1),["mouseup","touchend"]);return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"}},r.createElement(c.Z,{justify:"center"},r.createElement(d.z,{onClick:()=>n(!0)},"Open dropdown")),e&&r.createElement(u.X,{ref:t,shadow:"sm",style:{width:(0,a.h)(300),height:(0,a.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,a.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}},r.createElement("span",null,"Click outside to close"))))},code:f,dimmed:!0},k=(0,i.A)(l.us.useClickOutside);function j(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-click-outside"})," hook accepts 3 arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"handler"})," – function that is called on outside click"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"events"})," – optional list of events that trigger outside click, ",(0,o.jsx)(n.code,{children:"['mousedown', 'touchstart']"})," by default"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nodes"})," - optional list of nodes that should not trigger outside click event"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns a ",(0,o.jsx)(n.code,{children:"ref"})," object that must be passed to the element\nbased on which outside clicks should be captured."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nfunction Example() {\n  const handleClickOutside = () =>\n    console.log('Clicked outside of div');\n  const ref = useClickOutside(handleClickOutside);\n  return <div ref={ref} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"change-events",children:"Change events"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"use-click-outside"})," listens to ",(0,o.jsx)(n.code,{children:"mousedown"})," and ",(0,o.jsx)(n.code,{children:"touchstart"})," events,\nyou can change these events by passing an array of events as second argument:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"multiple-nodes",children:"Multiple nodes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Will work only with useState, not useRef\nimport { useState } from 'react';\nimport { useClickOutside } from '@mantine/hooks';\nimport { Portal } from '@mantine/core';\n\nfunction Demo() {\n  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(\n    null\n  );\n  const [control, setControl] = useState<HTMLDivElement | null>(null);\n\n  useClickOutside(() => console.log('outside'), null, [\n    control,\n    dropdown,\n  ]);\n\n  return (\n    // We cannot use root element ref as it does not contain dropdown\n    <div>\n      <div ref={setControl}>Control</div>\n      <Portal>\n        <div ref={setDropdown}>Dropdown</div>\n      </Portal>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: HTMLElement[]\n): React.MutableRefObject<T>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"set-ref-type",children:"Set ref type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nconst ref = useClickOutside<HTMLDivElement>(onClickOutside);\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(k,{...e,children:(0,o.jsx)(j,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=38535)}),_N_E=e.O()}]);
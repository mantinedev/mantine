(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var s=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},51070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-click-outside",function(){return n(31159)}])},31159:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var s=n(85893),o=n(11151),i=n(19905),l=n(9904),r=n(67294),c=n(16262),d=n(14469),a=n(93384),u=n(72622),h=n(72641);let p=`
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
`,f={type:"code",component:function(){let[e,t]=(0,r.useState)(!1),n=(0,h.O)(()=>t(!1));return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"}},r.createElement(c.Z,{justify:"center"},r.createElement(d.z,{onClick:()=>t(!0)},"Open dropdown")),e&&r.createElement(a.X,{ref:n,shadow:"sm",style:{width:(0,u.h)(300),height:(0,u.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,u.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}},r.createElement("span",null,"Click outside to close"))))},code:p,dimmed:!0},m=`
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
`,v={type:"code",component:function(){let[e,t]=(0,r.useState)(!1),n=(0,h.O)(()=>t(!1),["mouseup","touchend"]);return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"}},r.createElement(c.Z,{justify:"center"},r.createElement(d.z,{onClick:()=>t(!0)},"Open dropdown")),e&&r.createElement(a.X,{ref:n,shadow:"sm",style:{width:(0,u.h)(300),height:(0,u.h)(60),position:"absolute",top:0,left:`calc(50% - ${(0,u.h)(150)})`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}},r.createElement("span",null,"Click outside to close"))))},code:m,dimmed:!0},k=(0,i.A)(l.us.useClickOutside);function g(e){let t=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n,{data:f}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"use-click-outside"})," hook accepts 3 arguments:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"handler"})," – function that is called on outside click"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"events"})," – optional list of events that trigger outside click, ",(0,s.jsx)(t.code,{children:"['mousedown', 'touchstart']"})," by default"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nodes"})," - optional list of nodes that should not trigger outside click event"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The hook returns a ",(0,s.jsx)(t.code,{children:"ref"})," object that must be passed to the element\nbased on which outside clicks should be captured."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nfunction Example() {\n  const handleClickOutside = () => console.log('Clicked outside of div');\n  const ref = useClickOutside(handleClickOutside);\n  return <div ref={ref} />;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"change-events",children:"Change events"}),"\n",(0,s.jsxs)(t.p,{children:["By default, ",(0,s.jsx)(t.code,{children:"use-click-outside"})," listens to ",(0,s.jsx)(t.code,{children:"mousedown"})," and ",(0,s.jsx)(t.code,{children:"touchstart"})," events,\nyou can change these events by passing an array of events as second argument:"]}),"\n",(0,s.jsx)(n,{data:v}),"\n",(0,s.jsx)(t.h2,{id:"multiple-nodes",children:"Multiple nodes"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"// Will work only with useState, not useRef\nimport { useState } from 'react';\nimport { useClickOutside } from '@mantine/hooks';\nimport { Portal } from '@mantine/core';\n\nfunction Demo() {\n  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);\n  const [control, setControl] = useState<HTMLDivElement | null>(null);\n\n  useClickOutside(() => console.log('outside'), null, [control, dropdown]);\n\n  return (\n    // We cannot use root element ref as it does not contain dropdown\n    <div>\n      <div ref={setControl}>Control</div>\n      <Portal>\n        <div ref={setDropdown}>Dropdown</div>\n      </Portal>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: HTMLElement[]\n): React.MutableRefObject<T>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"set-ref-type",children:"Set ref type"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useClickOutside } from '@mantine/hooks';\n\nconst ref = useClickOutside<HTMLDivElement>(onClickOutside);\n"})})]})}var y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(k,Object.assign({},e,{children:(0,s.jsx)(g,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=51070)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20488],{97005:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return s(13307)}])},13307:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var o=s(31085),a=s(71184),i=s(34056),n=s(52022),c=s(4203),l=s(90275),r=s(92051);let d={type:"code",component:function(){let[e,{toggle:t}]=(0,r.j)(!1);return(0,o.jsxs)(i.a,{maw:400,mx:"auto",children:[(0,o.jsxs)(n.$,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,o.jsx)(c.s,{active:e,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(l.k,{mt:"sm",label:"First input",placeholder:"First input"}),(0,o.jsx)(l.k,{mt:"sm",label:"Second input",placeholder:"Second input"}),(0,o.jsx)(l.k,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`},u={type:"code",component:function(){let[e,{toggle:t}]=(0,r.j)(!1);return(0,o.jsxs)(i.a,{maw:400,mx:"auto",children:[(0,o.jsxs)(n.$,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,o.jsx)(c.s,{active:e,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(l.k,{mt:"sm",label:"First input",placeholder:"First input"}),(0,o.jsx)(l.k,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),(0,o.jsx)(l.k,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`};var p=s(63315),h=s(18675),v=s(20017);let m=(0,h.P)(v.XZ.FocusTrap);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Demo:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,o.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,o.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,o.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,o.jsx)(s,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,o.jsx)(s,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"focustrapinitialfocus",children:"FocusTrap.InitialFocus"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," is a special component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,o.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,o.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,o.jsx)(s,{data:p.s}),"\n",(0,o.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,o.jsx)(t.code,{children:"active"})," prop is ",(0,o.jsx)(t.code,{children:"true"})]}),"\n",(0,o.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,o.jsx)(t.code,{children:"active"})," prop changes from ",(0,o.jsx)(t.code,{children:"false"})," to ",(0,o.jsx)(t.code,{children:"true"})," first element with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If there are no elements with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If the target element does not have focusable elements or does not support ",(0,o.jsx)(t.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,o.jsxs)(t.li,{children:["Trap stops working when element outside of the ",(0,o.jsx)(t.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(f,{...e})})}},87186:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var o=(0,s(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},63315:(e,t,s)=>{"use strict";s.d(t,{s:()=>r});var o=s(31085),a=s(19042),i=s(4203),n=s(90275),c=s(52022),l=s(92051);let r={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,l.j)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.a,{opened:e,onClose:s,title:"Focus demo",children:[(0,o.jsx)(i.s.InitialFocus,{}),(0,o.jsx)(n.k,{label:"First input",placeholder:"First input"}),(0,o.jsx)(n.k,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(c.$,{variant:"default",onClick:t,children:"Open modal"})]})}}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(97005)),_N_E=e.O()}]);
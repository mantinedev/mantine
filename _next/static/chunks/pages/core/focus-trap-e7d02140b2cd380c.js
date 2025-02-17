(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20488],{97005:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return o(13307)}])},13307:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>j});var i=o(31085),n=o(71184),s=o(34056),c=o(52022),a=o(4203),r=o(90275),l=o(92051);let u={type:"code",component:function(){let[e,{toggle:t}]=(0,l.j)(!1);return(0,i.jsxs)(s.a,{maw:400,mx:"auto",children:[(0,i.jsxs)(c.$,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,i.jsx)(a.s,{active:e,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(r.k,{mt:"sm",label:"First input",placeholder:"First input"}),(0,i.jsx)(r.k,{mt:"sm",label:"Second input",placeholder:"Second input"}),(0,i.jsx)(r.k,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
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
`},d={type:"code",component:function(){let[e,{toggle:t}]=(0,l.j)(!1);return(0,i.jsxs)(s.a,{maw:400,mx:"auto",children:[(0,i.jsxs)(c.$,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,i.jsx)(a.s,{active:e,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(r.k,{mt:"sm",label:"First input",placeholder:"First input"}),(0,i.jsx)(r.k,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),(0,i.jsx)(r.k,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
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
`};var p=o(63315),h=o(85954),m=o(38215);let f=(0,h.P)(m.XZ.FocusTrap);function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,i.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,i.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,i.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,i.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,i.jsx)(o,{data:u}),"\n",(0,i.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,i.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,i.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,i.jsx)(o,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"focustrapinitialfocus",children:"FocusTrap.InitialFocus"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," is a special component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,i.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,i.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,i.jsx)(o,{data:p.s}),"\n",(0,i.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,i.jsx)(t.code,{children:"active"})," prop is ",(0,i.jsx)(t.code,{children:"true"})]}),"\n",(0,i.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,i.jsx)(t.code,{children:"active"})," prop changes from ",(0,i.jsx)(t.code,{children:"false"})," to ",(0,i.jsx)(t.code,{children:"true"})," first element with ",(0,i.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,i.jsxs)(t.li,{children:["If there are no elements with ",(0,i.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,i.jsxs)(t.li,{children:["If the target element does not have focusable elements or does not support ",(0,i.jsx)(t.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,i.jsxs)(t.li,{children:["Trap stops working when element outside of the ",(0,i.jsx)(t.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(f,{...e,children:(0,i.jsx)(x,{...e})})}},63315:(e,t,o)=>{"use strict";o.d(t,{s:()=>l});var i=o(31085),n=o(19042),s=o(4203),c=o(90275),a=o(52022),r=o(92051);let l={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,r.j)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.a,{opened:e,onClose:o,title:"Focus demo",children:[(0,i.jsx)(s.s.InitialFocus,{}),(0,i.jsx)(c.k,{label:"First input",placeholder:"First input"}),(0,i.jsx)(c.k,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,i.jsx)(a.$,{variant:"default",onClick:t,children:"Open modal"})]})}}},92051:(e,t,o)=>{"use strict";o.d(t,{j:()=>n});var i=o(14041);function n(e=!1,t){let{onOpen:o,onClose:s}=t||{},[c,a]=(0,i.useState)(e),r=(0,i.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),l=(0,i.useCallback)(()=>{a(e=>e?(s?.(),!1):e)},[s]),u=(0,i.useCallback)(()=>{c?l():r()},[l,r,c]);return[c,{open:r,close:l,toggle:u}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(97005)),_N_E=e.O()}]);
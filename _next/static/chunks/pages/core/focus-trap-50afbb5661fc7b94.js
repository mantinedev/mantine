(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38136],{84150:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return o(83967)}])},83967:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return j}});var n=o(52322),i=o(45392),s=o(28559),c=o(39629),r=o(99573),a=o(74770),l=o(3900);let u={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsxs)(c.z,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,n.jsx)(r.i,{active:e,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(a.o,{mt:"sm",label:"First input",placeholder:"First input"}),(0,n.jsx)(a.o,{mt:"sm",label:"Second input",placeholder:"Second input"}),(0,n.jsx)(a.o,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
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
`},d={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsxs)(c.z,{onClick:t,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,n.jsx)(r.i,{active:e,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(a.o,{mt:"sm",label:"First input",placeholder:"First input"}),(0,n.jsx)(a.o,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),(0,n.jsx)(a.o,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
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
`};var p=o(35221),h=o(25071),m=o(15019);let f=(0,h.A)(m.us.FocusTrap);function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,n.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,n.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,n.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,n.jsx)(o,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"focustrapinitialfocus",children:"FocusTrap.InitialFocus"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," is a special component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,n.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,n.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,n.jsx)(o,{data:p.g}),"\n",(0,n.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,n.jsx)(t.code,{children:"active"})," prop is ",(0,n.jsx)(t.code,{children:"true"})]}),"\n",(0,n.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,n.jsx)(t.code,{children:"active"})," prop changes from ",(0,n.jsx)(t.code,{children:"false"})," to ",(0,n.jsx)(t.code,{children:"true"})," first element with ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,n.jsxs)(t.li,{children:["If there are no elements with ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,n.jsxs)(t.li,{children:["If the target element does not have focusable elements or does not support ",(0,n.jsx)(t.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,n.jsxs)(t.li,{children:["Trap stops working when element outside of the ",(0,n.jsx)(t.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(x,{...e})})}},35221:function(e,t,o){"use strict";o.d(t,{g:function(){return l}});var n=o(52322),i=o(31946),s=o(99573),c=o(74770),r=o(39629),a=o(3900);let l={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,a.q)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.u,{opened:e,onClose:o,title:"Focus demo",children:[(0,n.jsx)(s.i.InitialFocus,{}),(0,n.jsx)(c.o,{label:"First input",placeholder:"First input"}),(0,n.jsx)(c.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,n.jsx)(r.z,{variant:"default",onClick:t,children:"Open modal"})]})}}},3900:function(e,t,o){"use strict";o.d(t,{q:function(){return i}});var n=o(2784);function i(e=!1,t){let{onOpen:o,onClose:i}=t||{},[s,c]=(0,n.useState)(e),r=(0,n.useCallback)(()=>{c(e=>e||(o?.(),!0))},[o]),a=(0,n.useCallback)(()=>{c(e=>e?(i?.(),!1):e)},[i]),l=(0,n.useCallback)(()=>{s?a():r()},[a,r,s]);return[s,{open:r,close:a,toggle:l}]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=84150)}),_N_E=e.O()}]);
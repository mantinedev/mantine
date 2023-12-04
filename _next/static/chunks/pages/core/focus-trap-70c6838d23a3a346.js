(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8136],{2738:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return n(37484)}])},37484:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var o=n(24246),i=n(71670),c=n(3916),r=n(30289),a=n(27378),l=n(87921),s=n(56589),u=n(8671),d=n(47210),p=n(7033);let h=`
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
`,m={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return a.createElement(s.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input"}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:h},f=`
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
`,x={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return a.createElement(s.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:f},v=(0,c.A)(r.us.FocusTrap);function j(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,o.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,o.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,o.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,o.jsx)(t.code,{children:"active"})," prop is ",(0,o.jsx)(t.code,{children:"true"})]}),"\n",(0,o.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,o.jsx)(t.code,{children:"active"})," prop changes from ",(0,o.jsx)(t.code,{children:"false"})," to ",(0,o.jsx)(t.code,{children:"true"})," first element with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If there are no elements with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If the target element does not have focusable elements or does not support ",(0,o.jsx)(t.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,o.jsxs)(t.li,{children:["Trap stops working when element outside of the ",(0,o.jsx)(t.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(j,{...e})})}},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var o=n(27378);function i(e=!1,t){let{onOpen:n,onClose:i}=t||{},[c,r]=(0,o.useState)(e),a=(0,o.useCallback)(()=>{r(e=>e||(n?.(),!0))},[n]),l=(0,o.useCallback)(()=>{r(e=>e?(i?.(),!1):e)},[i]),s=(0,o.useCallback)(()=>{c?l():a()},[l,a,c]);return[c,{open:a,close:l,toggle:s}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=2738)}),_N_E=e.O()}]);
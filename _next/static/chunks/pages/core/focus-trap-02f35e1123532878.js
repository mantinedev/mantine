(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8136],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},28146:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return n(54031)}])},54031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var o=n(85893),i=n(11151),c=n(19905),r=n(9904),a=n(67294),s=n(12177),l=n(81110),u=n(14469),d=n(60099),p=n(50780);let h=`
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
`,m={type:"code",component:function(){let[e,{toggle:t}]=(0,s.q)(!1);return a.createElement(l.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input"}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:h},f=`
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
`,v={type:"code",component:function(){let[e,{toggle:t}]=(0,s.q)(!1);return a.createElement(l.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:f},g=(0,c.A)(r.us.FocusTrap);function x(e){let t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,o.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,o.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,o.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,o.jsx)(t.code,{children:"active"})," prop is ",(0,o.jsx)(t.code,{children:"true"})]}),"\n",(0,o.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,o.jsx)(t.code,{children:"active"})," prop changes from ",(0,o.jsx)(t.code,{children:"false"})," to ",(0,o.jsx)(t.code,{children:"true"})," first element with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If there are no elements with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If the target element does not have focusable elements or does not support ",(0,o.jsx)(t.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,o.jsxs)(t.li,{children:["Trap stops working when element outside of the ",(0,o.jsx)(t.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(g,Object.assign({},e,{children:(0,o.jsx)(x,e)}))}},12177:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var o=n(67294);function i(e=!1,t){let{onOpen:n,onClose:i}=t||{},[c,r]=(0,o.useState)(e),a=(0,o.useCallback)(()=>{r(e=>e||(null==n||n(),!0))},[n]),s=(0,o.useCallback)(()=>{r(e=>e?(null==i||i(),!1):e)},[i]),l=(0,o.useCallback)(()=>{c?s():a()},[s,a,c]);return[c,{open:a,close:s,toggle:l}]}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=28146)}),_N_E=e.O()}]);
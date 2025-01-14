(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98588],{46042:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return o(33263)}])},33263:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return H}});var t=o(52322),l=o(45392),s=o(63644),i=o(31946),a=o(39629),r=o(3900),d=o(3789);let c={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Authentication",centered:!0,children:(0,t.jsx)(d._,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open centered Modal"})]})}},u={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}};var h=o(2784),p=o(93010);let m=["xs","sm","md","lg","xl","55rem","70%","100%"],f={type:"code",component:function(){let[e,n]=(0,h.useState)(!1),[o,l]=(0,h.useState)("md"),s=m.map(e=>(0,t.jsx)(a.z,{variant:"default",onClick:()=>{l(e),n(!0)},children:e},e));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:()=>n(!1),title:"Introduce yourself!",size:o,children:(0,t.jsx)(d._,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(p.Z,{justify:"center",children:s})]})}};var x=o(32581),j=o(8582),g=o(43647);let M={type:"code",component:function(){let[e,{close:n,open:o}]=(0,r.q)(!1),[l,{increment:s,decrement:d}]=(0,g.C)(3,{min:0}),c=Array(l).fill(0).map((e,n)=>(0,t.jsxs)(x.C,{children:["Badge ",n]},n));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.u,{opened:e,onClose:n,size:"auto",title:"Modal size auto",children:[(0,t.jsx)(j.x,{children:"Modal with size auto will fits its content"}),(0,t.jsx)(p.Z,{wrap:"nowrap",mt:"md",children:c}),(0,t.jsxs)(p.Z,{mt:"xl",children:[(0,t.jsx)(a.z,{onClick:s,children:"Add badge"}),(0,t.jsx)(a.z,{onClick:d,children:"Remove badge"})]})]}),(0,t.jsx)(a.z,{variant:"default",onClick:o,children:"Open modal"})]})},centered:!0,code:`
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button onClick={increment}>Add badge</Button>
          <Button onClick={decrement}>Remove badge</Button>
        </Group>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`},k={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,t.jsx)(j.x,{mb:"xl",children:"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,t.jsx)(d._,{noPadding:!0,noShadow:!0})]}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}};var y=o(58898),C=o(27780);let v={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,y.em)(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1),l=(0,C.a)(`(max-width: ${(0,y.em)(800)})`);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:l,transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}},b={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,t.jsx)(d._,{noShadow:!0,noPadding:!0})}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}},w={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1),l=Array(100).fill(0).map((e,n)=>(0,t.jsx)("p",{children:"Modal with scroll"},n));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Header is sticky",children:l}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}};var B=o(20135);let D={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1),l=Array(100).fill(0).map((e,n)=>(0,t.jsx)("p",{children:"Modal with scroll"},n));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:B.x.Autosize,children:l}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}},O={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,t.jsx)(d._,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}},T={type:"code",code:`
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
`,component:function(){let[e,n]=(0,h.useState)(!1),[o,l]=(0,h.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:o,onClose:()=>l(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,t.jsx)(i.u,{opened:e,onClose:()=>n(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,t.jsxs)(p.Z,{justify:"center",children:[(0,t.jsx)(a.z,{onClick:()=>l(!0),variant:"default",children:"Rotate left transition"}),(0,t.jsx)(a.z,{onClick:()=>n(!0),variant:"default",children:"Fade transition"})]})]})}};var S=o(22231),z=o(74770);let F={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
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
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.u,{opened:e,onClose:o,title:"Focus demo",children:[(0,t.jsx)(z.o,{label:"First input",placeholder:"First input"}),(0,t.jsx)(z.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}};var A=o(35221),I=o(81082);let P={type:"code",code:`
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.u,{opened:e,onClose:o,title:"Authentication",closeButtonProps:{icon:(0,t.jsx)(I.Z,{size:20,stroke:1.5})},children:(0,t.jsx)(d._,{noShadow:!0,noPadding:!0})}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}},E={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.u.Root,{opened:e,onClose:o,children:[(0,t.jsx)(i.u.Overlay,{}),(0,t.jsxs)(i.u.Content,{children:[(0,t.jsxs)(i.u.Header,{children:[(0,t.jsx)(i.u.Title,{children:"Modal title"}),(0,t.jsx)(i.u.CloseButton,{})]}),(0,t.jsx)(i.u.Body,{children:"Modal content"})]})]}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}};var _=o(60589),R=o(54078),N=o(15019);let q=(0,R.A)(N.us.Modal);function G(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:s.j}),"\n",(0,t.jsx)(n.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(n.p,{children:["To remove header set ",(0,t.jsx)(n.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(n.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(n.p,{children:["You can change modal width by setting ",(0,t.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(n.code,{children:"55%"})," or ",(0,t.jsx)(n.code,{children:"50rem"}),".\n",(0,t.jsx)(n.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(n.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," with ",(0,t.jsx)(n.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(o,{data:M}),"\n",(0,t.jsx)(n.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(n.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(n.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsxs)(n.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(n.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:v}),"\n",(0,t.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(o,{data:w}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(o,{data:D}),"\n",(0,t.jsx)(n.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"xOffset"}),"/",(0,t.jsx)(n.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(o,{data:O}),"\n",(0,t.jsx)(n.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," is built with ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(n.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onExitTransitionEnd"})," and ",(0,t.jsx)(n.code,{children:"onEnterTransitionEnd"})," props can be used to run code after\nexit/enter transition is finished. For example, this is useful when you want to clear\ndata after modal is closed:"]}),"\n",(0,t.jsx)(o,{data:S.l}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:["Modal uses ",(0,t.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(o,{data:F}),"\n",(0,t.jsxs)(n.p,{children:["If you do not want to focus any elements when the modal is opened, use ",(0,t.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,t.jsx)(o,{data:A.g}),"\n",(0,t.jsxs)(n.p,{children:["If you do not add ",(0,t.jsx)(n.code,{children:"data-autofocus"})," attribute and do not use ",(0,t.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),",\nmodal will focus the first focusable element inside it which is usually the close button."]}),"\n",(0,t.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The following props can be used to control ",(0,t.jsx)(n.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(n.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(n.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(n.code,{children:"Modal.Title"})," and ",(0,t.jsx)(n.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Title"})," – ",(0,t.jsx)(n.code,{children:"h2"})," element, ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(n.code,{children:"aria-describedby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"modalstack",children:"Modal.Stack"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,t.jsx)(n.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,t.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,t.jsx)(n.code,{children:"Modal.Stack"})," is designed to be used with ",(0,t.jsx)(n.code,{children:"useModalsStack"})," hook."]}),"\n",(0,t.jsxs)(n.p,{children:["Differences from using multiple ",(0,t.jsx)(n.code,{children:"Modal"})," components:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Stack"})," disables focus trap and ",(0,t.jsx)(n.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,t.jsxs)(n.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,t.jsx)(n.code,{children:"opacity: 0"})," and ",(0,t.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,t.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,t.jsx)(o,{data:_.k}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"Modal.Stack"})," can only be used with ",(0,t.jsx)(n.code,{children:"Modal"})," component. Components built with ",(0,t.jsx)(n.code,{children:"Modal.Root"}),"\nand other compound components are not compatible with ",(0,t.jsx)(n.code,{children:"Modal.Stack"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usemodalsstack-hook",children:"useModalsStack hook"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface UseModalsStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example of using ",(0,t.jsx)(n.code,{children:"useModalsStack"})," with ",(0,t.jsx)(n.code,{children:"Modal"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(n.code,{children:"elements"})," add a ",(0,t.jsx)(n.code,{children:"className"})," to them (",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set close button ",(0,t.jsx)(n.code,{children:"aria-label"})," use ",(0,t.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function H(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(q,{...e,children:(0,t.jsx)(G,{...e})})}},81082:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])},35221:function(e,n,o){"use strict";o.d(n,{g:function(){return d}});var t=o(52322),l=o(31946),s=o(99573),i=o(74770),a=o(39629),r=o(3900);let d={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,r.q)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.u,{opened:e,onClose:o,title:"Focus demo",children:[(0,t.jsx)(s.i.InitialFocus,{}),(0,t.jsx)(i.o,{label:"First input",placeholder:"First input"}),(0,t.jsx)(i.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,t.jsx)(a.z,{variant:"default",onClick:n,children:"Open modal"})]})}}},60589:function(e,n,o){"use strict";o.d(n,{k:function(){return r}});var t=o(52322),l=o(80832),s=o(31946),i=o(93010),a=o(39629);let r={type:"code",code:`
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,l.p)(["delete-page","confirm-action","really-confirm-action"]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.u.Stack,{children:[(0,t.jsxs)(s.u,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,t.jsxs)(i.Z,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.z,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,t.jsxs)(s.u,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,t.jsxs)(i.Z,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.z,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,t.jsxs)(s.u,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,t.jsxs)(i.Z,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.z,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,t.jsx)(a.z,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},22231:function(e,n,o){"use strict";o.d(n,{l:function(){return d}});var t=o(52322),l=o(2784),s=o(31946),i=o(93010),a=o(39629),r=o(3900);let d={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,component:function(){let[e,n]=(0,r.q)(!1),[o,d]=(0,r.q)(!1),[c,u]=(0,l.useState)({title:"",message:""});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.u,{opened:e,onClose:()=>{n.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:c.title,children:c.message}),(0,t.jsx)(s.u,{opened:o,onClose:d.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:c.title,children:c.message}),(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.z,{onClick:()=>{n.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,t.jsx)(a.z,{onClick:()=>{d.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1}},32581:function(e,n,o){"use strict";o.d(n,{C:function(){return m}});var t=o(52322);o(2784);var l=o(91482),s=o(11200),i=o(13588),a=o(38483),r=o(46690),d=o(28559),c=o(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h={},p=(0,s.Z)((e,{radius:n,color:o,gradient:t,variant:s,size:a,autoContrast:r})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:s||"filled",autoContrast:r});return{root:{"--badge-height":(0,l.ap)(a,"badge-height"),"--badge-padding-x":(0,l.ap)(a,"badge-padding-x"),"--badge-fz":(0,l.ap)(a,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,l.H5)(n),"--badge-bg":o||s?d.background:void 0,"--badge-color":o||s?d.color:void 0,"--badge-bd":o||s?d.border:void 0,"--badge-dot-color":"dot"===s?(0,i.p)(o,e):void 0}}}),m=(0,c.b)((e,n)=>{let o=(0,a.w)("Badge",h,e),{classNames:l,className:s,style:i,styles:c,unstyled:m,vars:f,radius:x,color:j,gradient:g,leftSection:M,rightSection:k,children:y,variant:C,fullWidth:v,autoContrast:b,circle:w,mod:B,...D}=o,O=(0,r.y)({name:"Badge",props:o,classes:u,className:s,style:i,classNames:l,styles:c,unstyled:m,vars:f,varsResolver:p});return(0,t.jsxs)(d.x,{variant:C,mod:[{block:v,circle:w,"with-right-section":!!k,"with-left-section":!!M},B],...O("root",{variant:C}),ref:n,...D,children:[M&&(0,t.jsx)("span",{...O("section"),"data-position":"left",children:M}),(0,t.jsx)("span",{...O("label"),children:y}),k&&(0,t.jsx)("span",{...O("section"),"data-position":"right",children:k})]})});m.classes=u,m.displayName="@mantine/core/Badge"},80832:function(e,n,o){"use strict";o.d(n,{K:function(){return s},p:function(){return l}});var t=o(2784);function l(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[o,l]=(0,t.useState)(n),s=(0,t.useCallback)(e=>{l(n=>({...n,[e]:!0}))},[]),i=(0,t.useCallback)(e=>l(n=>({...n,[e]:!1})),[]),a=(0,t.useCallback)(e=>l(n=>({...n,[e]:!n[e]})),[]),r=(0,t.useCallback)(()=>l(n),[]),d=(0,t.useCallback)(e=>({opened:o[e],onClose:()=>i(e),stackId:e}),[o]);return{state:o,open:s,close:i,closeAll:r,toggle:a,register:d}}let s=l},43647:function(e,n,o){"use strict";o.d(n,{C:function(){return i}});var t=o(2784),l=o(82692);let s={min:-1/0,max:1/0};function i(e=0,n){let{min:o,max:i}={...s,...n},[a,r]=(0,t.useState)((0,l.u)(e,o,i));return[a,{increment:()=>r(e=>(0,l.u)(e+1,o,i)),decrement:()=>r(e=>(0,l.u)(e-1,o,i)),set:e=>r((0,l.u)(e,o,i)),reset:()=>r((0,l.u)(e,o,i))}]}}},function(e){e.O(0,[61177,66748,61639,43092,64485,92888,49774,40179],function(){return e(e.s=46042)}),_N_E=e.O()}]);
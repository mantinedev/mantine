(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25931],{65323:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return n(65594)}])},65594:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>Y});var t=n(31085),s=n(71184),l=n(28051),i=n(19042),a=n(52022),r=n(92051),d=n(86934);let c={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Authentication",centered:!0,children:(0,t.jsx)(d.d,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open centered Modal"})]})}},u={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}};var h=n(14041),p=n(56051);let m=["xs","sm","md","lg","xl","55rem","70%","100%"],f={type:"code",component:function(){let[e,o]=(0,h.useState)(!1),[n,s]=(0,h.useState)("md"),l=m.map(e=>(0,t.jsx)(a.$,{variant:"default",onClick:()=>{s(e),o(!0)},children:e},e));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:()=>o(!1),title:"Introduce yourself!",size:n,children:(0,t.jsx)(d.d,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(p.Y,{justify:"center",children:l})]})}};var x=n(76644),j=n(93065),g=n(89939);let M={type:"code",component:function(){let[e,{close:o,open:n}]=(0,r.j)(!1),[s,{increment:l,decrement:d}]=(0,g.I)(3,{min:0}),c=Array(s).fill(0).map((e,o)=>(0,t.jsxs)(x.E,{children:["Badge ",o]},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.a,{opened:e,onClose:o,size:"auto",title:"Modal size auto",children:[(0,t.jsx)(j.E,{children:"Modal with size auto will fits its content"}),(0,t.jsx)(p.Y,{wrap:"nowrap",mt:"md",children:c}),(0,t.jsxs)(p.Y,{mt:"xl",children:[(0,t.jsx)(a.$,{onClick:l,children:"Add badge"}),(0,t.jsx)(a.$,{onClick:d,children:"Remove badge"})]})]}),(0,t.jsx)(a.$,{variant:"default",onClick:n,children:"Open modal"})]})},centered:!0,code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.a,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,t.jsx)(j.E,{mb:"xl",children:"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,t.jsx)(d.d,{noPadding:!0,noShadow:!0})]}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}};var C=n(39735),y=n(80955);let v={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,C.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1),s=(0,y.U)(`(max-width: ${(0,C.em)(800)})`);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:s,transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}},b={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,t.jsx)(d.d,{noShadow:!0,noPadding:!0})}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}},w={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1),s=Array(100).fill(0).map((e,o)=>(0,t.jsx)("p",{children:"Modal with scroll"},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Header is sticky",children:s}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}};var B=n(37950);let D={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1),s=Array(100).fill(0).map((e,o)=>(0,t.jsx)("p",{children:"Modal with scroll"},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:B.F.Autosize,children:s}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}},O={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,t.jsx)(d.d,{noPadding:!0,noShadow:!0})}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}},T={type:"code",code:`
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
`,component:function(){let[e,o]=(0,h.useState)(!1),[n,s]=(0,h.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:n,onClose:()=>s(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,t.jsx)(i.a,{opened:e,onClose:()=>o(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,t.jsxs)(p.Y,{justify:"center",children:[(0,t.jsx)(a.$,{onClick:()=>s(!0),variant:"default",children:"Rotate left transition"}),(0,t.jsx)(a.$,{onClick:()=>o(!0),variant:"default",children:"Fade transition"})]})]})}};var S=n(63918),F=n(90275);let A={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.a,{opened:e,onClose:n,title:"Focus demo",children:[(0,t.jsx)(F.k,{label:"First input",placeholder:"First input"}),(0,t.jsx)(F.k,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}};var I=n(63315),E=n(86483);let P={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.a,{opened:e,onClose:n,title:"Authentication",closeButtonProps:{icon:(0,t.jsx)(E.A,{size:20,stroke:1.5})},children:(0,t.jsx)(d.d,{noShadow:!0,noPadding:!0})}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}},z={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.a.Root,{opened:e,onClose:n,children:[(0,t.jsx)(i.a.Overlay,{}),(0,t.jsxs)(i.a.Content,{children:[(0,t.jsxs)(i.a.Header,{children:[(0,t.jsx)(i.a.Title,{children:"Modal title"}),(0,t.jsx)(i.a.CloseButton,{})]}),(0,t.jsx)(i.a.Body,{children:"Modal content"})]})]}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}};var $=n(96182),R=n(85954),N=n(38215);let _=(0,R.P)(N.XZ.Modal);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:l.C}),"\n",(0,t.jsx)(o.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(n,{data:c}),"\n",(0,t.jsx)(o.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(o.p,{children:["To remove header set ",(0,t.jsx)(o.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(o.p,{children:["You can change modal width by setting ",(0,t.jsx)(o.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(o.code,{children:"55%"})," or ",(0,t.jsx)(o.code,{children:"50rem"}),".\n",(0,t.jsx)(o.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(o.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(o.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," with ",(0,t.jsx)(o.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(n,{data:M}),"\n",(0,t.jsx)(o.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(o.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(o.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(o.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsxs)(o.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(o.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(o.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(o.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(n,{data:v}),"\n",(0,t.jsx)(o.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," uses ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(o.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(n,{data:b}),"\n",(0,t.jsx)(o.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(o.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(n,{data:D}),"\n",(0,t.jsx)(o.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xOffset"}),"/",(0,t.jsx)(o.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(n,{data:O}),"\n",(0,t.jsx)(o.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," is built with ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(o.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(n,{data:T}),"\n",(0,t.jsx)(o.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onExitTransitionEnd"})," and ",(0,t.jsx)(o.code,{children:"onEnterTransitionEnd"})," props can be used to run code after\nexit/enter transition is finished. For example, this is useful when you want to clear\ndata after modal is closed:"]}),"\n",(0,t.jsx)(n,{data:S.X}),"\n",(0,t.jsx)(o.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(o.p,{children:["Modal uses ",(0,t.jsx)(o.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(o.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(n,{data:A}),"\n",(0,t.jsxs)(o.p,{children:["If you do not want to focus any elements when the modal is opened, use ",(0,t.jsx)(o.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,t.jsx)(n,{data:I.s}),"\n",(0,t.jsxs)(o.p,{children:["If you do not add ",(0,t.jsx)(o.code,{children:"data-autofocus"})," attribute and do not use ",(0,t.jsx)(o.code,{children:"FocusTrap.InitialFocus"}),",\nmodal will focus the first focusable element inside it which is usually the close button."]}),"\n",(0,t.jsx)(o.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(o.p,{children:["The following props can be used to control ",(0,t.jsx)(o.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(o.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(o.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(o.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,t.jsx)(n,{data:P}),"\n",(0,t.jsx)(o.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(o.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(o.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(o.code,{children:"Modal.Title"})," and ",(0,t.jsx)(o.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Title"})," – ",(0,t.jsx)(o.code,{children:"h2"})," element, ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(o.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(o.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(o.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(o.code,{children:"aria-describedby"})," of ",(0,t.jsx)(o.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(o.h2,{id:"modalstack",children:"Modal.Stack"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,t.jsx)(o.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,t.jsx)(o.code,{children:"closeOnEscape"})," behavior. ",(0,t.jsx)(o.code,{children:"Modal.Stack"})," is designed to be used with ",(0,t.jsx)(o.code,{children:"useModalsStack"})," hook."]}),"\n",(0,t.jsxs)(o.p,{children:["Differences from using multiple ",(0,t.jsx)(o.code,{children:"Modal"})," components:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Stack"})," disables focus trap and ",(0,t.jsx)(o.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,t.jsxs)(o.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,t.jsx)(o.code,{children:"opacity: 0"})," and ",(0,t.jsx)(o.code,{children:"pointer-events: none"})]}),"\n",(0,t.jsx)(o.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,t.jsx)(n,{data:$.t}),"\n",(0,t.jsxs)(o.p,{children:["Note that ",(0,t.jsx)(o.code,{children:"Modal.Stack"})," can only be used with ",(0,t.jsx)(o.code,{children:"Modal"})," component. Components built with ",(0,t.jsx)(o.code,{children:"Modal.Root"}),"\nand other compound components are not compatible with ",(0,t.jsx)(o.code,{children:"Modal.Stack"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"usemodalsstack-hook",children:"useModalsStack hook"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface UseModalsStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Example of using ",(0,t.jsx)(o.code,{children:"useModalsStack"})," with ",(0,t.jsx)(o.code,{children:"Modal"})," component:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," component uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(o.code,{children:"elements"})," add a ",(0,t.jsx)(o.code,{children:"className"})," to them (",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," component follows ",(0,t.jsx)(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["To set close button ",(0,t.jsx)(o.code,{children:"aria-label"})," use ",(0,t.jsx)(o.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(_,{...e,children:(0,t.jsx)(G,{...e})})}},86483:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])},63315:(e,o,n)=>{"use strict";n.d(o,{s:()=>d});var t=n(31085),s=n(19042),l=n(4203),i=n(90275),a=n(52022),r=n(92051);let d={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,r.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.a,{opened:e,onClose:n,title:"Focus demo",children:[(0,t.jsx)(l.s.InitialFocus,{}),(0,t.jsx)(i.k,{label:"First input",placeholder:"First input"}),(0,t.jsx)(i.k,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,t.jsx)(a.$,{variant:"default",onClick:o,children:"Open modal"})]})}}},96182:(e,o,n)=>{"use strict";n.d(o,{t:()=>r});var t=n(31085),s=n(97915),l=n(19042),i=n(56051),a=n(52022);let r={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,s.e)(["delete-page","confirm-action","really-confirm-action"]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.a.Stack,{children:[(0,t.jsxs)(l.a,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,t.jsxs)(i.Y,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.$,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,t.jsxs)(l.a,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,t.jsxs)(i.Y,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.$,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,t.jsxs)(l.a,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,t.jsxs)(i.Y,{mt:"lg",justify:"flex-end",children:[(0,t.jsx)(a.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,t.jsx)(a.$,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,t.jsx)(a.$,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},63918:(e,o,n)=>{"use strict";n.d(o,{X:()=>d});var t=n(31085),s=n(14041),l=n(19042),i=n(56051),a=n(52022),r=n(92051);let d={type:"code",code:`
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
`,centered:!0,component:function(){let[e,o]=(0,r.j)(!1),[n,d]=(0,r.j)(!1),[c,u]=(0,s.useState)({title:"",message:""});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.a,{opened:e,onClose:()=>{o.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:c.title,children:c.message}),(0,t.jsx)(l.a,{opened:n,onClose:d.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:c.title,children:c.message}),(0,t.jsxs)(i.Y,{children:[(0,t.jsx)(a.$,{onClick:()=>{o.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,t.jsx)(a.$,{onClick:()=>{d.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1}},76644:(e,o,n)=>{"use strict";n.d(o,{E:()=>m});var t=n(31085);n(14041);var s=n(33450),l=n(7098),i=n(51606),a=n(29686),r=n(69564),d=n(34056),c=n(2453),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h={},p=(0,l.V)((e,{radius:o,color:n,gradient:t,variant:l,size:a,autoContrast:r})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:t,variant:l||"filled",autoContrast:r});return{root:{"--badge-height":(0,s.YC)(a,"badge-height"),"--badge-padding-x":(0,s.YC)(a,"badge-padding-x"),"--badge-fz":(0,s.YC)(a,"badge-fz"),"--badge-radius":void 0===o?void 0:(0,s.nJ)(o),"--badge-bg":n||l?d.background:void 0,"--badge-color":n||l?d.color:void 0,"--badge-bd":n||l?d.border:void 0,"--badge-dot-color":"dot"===l?(0,i.r)(n,e):void 0}}}),m=(0,c.v)((e,o)=>{let n=(0,a.Y)("Badge",h,e),{classNames:s,className:l,style:i,styles:c,unstyled:m,vars:f,radius:x,color:j,gradient:g,leftSection:M,rightSection:k,children:C,variant:y,fullWidth:v,autoContrast:b,circle:w,mod:B,...D}=n,O=(0,r.I)({name:"Badge",props:n,classes:u,className:l,style:i,classNames:s,styles:c,unstyled:m,vars:f,varsResolver:p});return(0,t.jsxs)(d.a,{variant:y,mod:[{block:v,circle:w,"with-right-section":!!k,"with-left-section":!!M},B],...O("root",{variant:y}),ref:o,...D,children:[M&&(0,t.jsx)("span",{...O("section"),"data-position":"left",children:M}),(0,t.jsx)("span",{...O("label"),children:C}),k&&(0,t.jsx)("span",{...O("section"),"data-position":"right",children:k})]})});m.classes=u,m.displayName="@mantine/core/Badge"},97915:(e,o,n)=>{"use strict";n.d(o,{Q:()=>l,e:()=>s});var t=n(14041);function s(e){let o=e.reduce((e,o)=>({...e,[o]:!1}),{}),[n,s]=(0,t.useState)(o),l=(0,t.useCallback)(e=>{s(o=>({...o,[e]:!0}))},[]),i=(0,t.useCallback)(e=>s(o=>({...o,[e]:!1})),[]),a=(0,t.useCallback)(e=>s(o=>({...o,[e]:!o[e]})),[]),r=(0,t.useCallback)(()=>s(o),[]),d=(0,t.useCallback)(e=>({opened:n[e],onClose:()=>i(e),stackId:e}),[n]);return{state:n,open:l,close:i,closeAll:r,toggle:a,register:d}}let l=s},89939:(e,o,n)=>{"use strict";n.d(o,{I:()=>i});var t=n(14041),s=n(68193);let l={min:-1/0,max:1/0};function i(e=0,o){let{min:n,max:a}={...l,...o},[r,d]=(0,t.useState)((0,s.q)(e,n,a));return[r,{increment:()=>d(e=>(0,s.q)(e+1,n,a)),decrement:()=>d(e=>(0,s.q)(e-1,n,a)),set:e=>d((0,s.q)(e,n,a)),reset:()=>d((0,s.q)(e,n,a))}]}}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,39699,68831,23719,6990,90636,46593,38792],()=>o(65323)),_N_E=e.O()}]);
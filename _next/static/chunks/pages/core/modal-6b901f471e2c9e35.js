(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8588],{38101:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return o(4258)}])},4258:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return Q}});var t=o(24246),l=o(71670),r=o(3916),s=o(30289),a=o(19799),i=o(27378),c=o(87921),d=o(72120),u=o(8671),m=o(29866);let p=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`,h={type:"code",code:p,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Authentication",centered:!0},i.createElement(m._,{noPadding:!0,noShadow:!0})),i.createElement(u.z,{onClick:n},"Open centered Modal"))}},f=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

`,x={type:"code",code:f,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),i.createElement(u.z,{onClick:n},"Open Modal"))}};var j=o(22971);let M=["xs","sm","md","lg","xl","55rem","70%","100%"],g={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),[o,t]=(0,i.useState)("md"),l=M.map(e=>i.createElement(u.z,{key:e,onClick:()=>{t(e),n(!0)}},e));return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:()=>n(!1),title:"Introduce yourself!",size:o},i.createElement(m._,{noPadding:!0,noShadow:!0})),i.createElement(j.Z,{justify:"center"},l))}};var y=o(72048),C=o(73988),Text=o(26569);let b=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,w={type:"code",component:function(){let[e,{close:n,open:o}]=(0,c.q)(!1),[t,{increment:l,decrement:r}]=(0,y.C)(3,{min:0}),s=Array(t).fill(0).map((e,n)=>i.createElement(C.C,{key:n},"Badge ",n));return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:n,size:"auto",title:"Modal size auto"},i.createElement(Text.x,null,"Modal with size auto will fits its content"),i.createElement(j.Z,{wrap:"nowrap",mt:"md"},s),i.createElement(j.Z,{mt:"xl"},i.createElement(u.z,{onClick:l},"Add badge"),i.createElement(u.z,{onClick:r},"Remove badge"))),i.createElement(u.z,{onClick:o},"Open modal"))},centered:!0,code:b},v=`
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

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`,k={type:"code",code:v,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200}},i.createElement(Text.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),i.createElement(m._,{noPadding:!0,noShadow:!0})),i.createElement(u.z,{onClick:n},"Open Modal"))}};var E=o(73133),B=o(71078);let O=`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,B.em)(800)})');

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

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`,z={type:"code",code:O,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=(0,E.a)(`(max-width: ${(0,B.em)(800)})`);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:t,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),i.createElement(u.z,{onClick:n},"Open Modal"))}},D=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,T={type:"code",code:D,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},i.createElement(m._,{noShadow:!0,noPadding:!0})),i.createElement(u.z,{onClick:n},"Open modal"))}},S=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,A={type:"code",code:S,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>i.createElement("p",{key:n},"Modal with scroll"));return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Header is sticky"},t),i.createElement(u.z,{onClick:n},"Open modal"))}};var F=o(49849);let P=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,N={type:"code",code:P,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>i.createElement("p",{key:n},"Modal with scroll"));return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:F.x.Autosize},t),i.createElement(u.z,{onClick:n},"Open modal"))}},_=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,R={type:"code",code:_,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Authentication",yOffset:"1vh",xOffset:0},i.createElement(m._,{noPadding:!0,noShadow:!0})),i.createElement(u.z,{onClick:n},"Open modal"))}},I=`
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
`,q={type:"code",code:I,component:function(){let[e,n]=(0,i.useState)(!1),[o,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:o,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),i.createElement(d.u,{opened:e,onClose:()=>n(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),i.createElement(j.Z,{justify:"center"},i.createElement(u.z,{onClick:()=>t(!0),variant:"default"},"Rotate left transition"),i.createElement(u.z,{onClick:()=>n(!0),variant:"default"},"Fade transition")))}};var H=o(7033);let G=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,Z={type:"code",code:G,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u,{opened:e,onClose:o,title:"Focus demo"},i.createElement(H.o,{label:"First input",placeholder:"First input"}),i.createElement(H.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),i.createElement(u.z,{onClick:n},"Open modal"))}},U=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,K={type:"code",code:U,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(d.u.Root,{opened:e,onClose:o},i.createElement(d.u.Overlay,null),i.createElement(d.u.Content,null,i.createElement(d.u.Header,null,i.createElement(d.u.Title,null,"Modal title"),i.createElement(d.u.CloseButton,null)),i.createElement(d.u.Body,null,"Modal content"))),i.createElement(u.z,{onClick:n},"Open modal"))}},W=(0,r.A)(s.us.Modal);function Y(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:a.j}),"\n",(0,t.jsx)(n.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(n.p,{children:["To remove header set ",(0,t.jsx)(n.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(n.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(n.p,{children:["You can change modal width by setting ",(0,t.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(n.code,{children:"55%"})," or ",(0,t.jsx)(n.code,{children:"50rem"}),".\n",(0,t.jsx)(n.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(n.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(n.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," with ",(0,t.jsx)(n.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(o,{data:w}),"\n",(0,t.jsx)(n.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(n.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(n.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsxs)(n.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(n.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:z}),"\n",(0,t.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(n.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(o,{data:A}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(o,{data:N}),"\n",(0,t.jsx)(n.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"xOffset"}),"/",(0,t.jsx)(n.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(o,{data:R}),"\n",(0,t.jsx)(n.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," is built with ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(o,{data:q}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:["Modal uses ",(0,t.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(o,{data:Z}),"\n",(0,t.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The following props can be used to control ",(0,t.jsx)(n.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(n.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(n.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal removeScrollProps={{ allowPinchZoom: true }} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(n.code,{children:"Modal.Title"})," and ",(0,t.jsx)(n.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Title"})," – ",(0,t.jsx)(n.code,{children:"h2"})," element, ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(n.code,{children:"aria-describedby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:K}),"\n",(0,t.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(n.code,{children:"elements"})," add a ",(0,t.jsx)(n.code,{children:"className"})," to them (",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set close button ",(0,t.jsx)(n.code,{children:"aria-label"})," use ",(0,t.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(W,{...e,children:(0,t.jsx)(Y,{...e})})}},73988:function(e,n,o){"use strict";o.d(n,{C:function(){return h}});var t=o(27378),l=o(92082),r=o(83453),s=o(89738),a=o(96739),i=o(6231),c=o(56589),d=o(50332),u={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let m={},p=(0,r.Z)((e,{radius:n,color:o,gradient:t,variant:r,size:a})=>{let i=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:r||"filled"});return{root:{"--badge-height":(0,l.ap)(a,"badge-height"),"--badge-padding-x":(0,l.ap)(a,"badge-padding-x"),"--badge-fz":(0,l.ap)(a,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,l.H5)(n),"--badge-bg":o||r?i.background:void 0,"--badge-color":o||r?i.color:void 0,"--badge-bd":o||r?i.border:void 0,"--badge-dot-color":"dot"===r?(0,s.p)(o,e):void 0}}}),h=(0,d.b)((e,n)=>{let o=(0,a.w)("Badge",m,e),{classNames:l,className:r,style:s,styles:d,unstyled:h,vars:f,radius:x,color:j,gradient:M,leftSection:g,rightSection:y,children:C,variant:b,fullWidth:w,...v}=o,k=(0,i.y)({name:"Badge",props:o,classes:u,className:r,style:s,classNames:l,styles:d,unstyled:h,vars:f,varsResolver:p});return t.createElement(c.x,{variant:b,mod:{block:w},...k("root",{variant:b}),ref:n,...v},g&&t.createElement("span",{...k("section"),"data-position":"left"},g),t.createElement("span",{...k("label")},C),y&&t.createElement("span",{...k("section"),"data-position":"right"},y))});h.classes=u,h.displayName="@mantine/core/Badge"},72048:function(e,n,o){"use strict";o.d(n,{C:function(){return s}});var t=o(27378),l=o(28086);let r={min:-1/0,max:1/0};function s(e=0,n){let{min:o,max:s}={...r,...n},[a,i]=(0,t.useState)((0,l.u)(e,o,s));return[a,{increment:()=>i(e=>(0,l.u)(e+1,o,s)),decrement:()=>i(e=>(0,l.u)(e-1,o,s)),set:e=>i((0,l.u)(e,o,s)),reset:()=>i((0,l.u)(e,o,s))}]}}},function(e){e.O(0,[370,5819,2775,6926,8833,9774,2888,179],function(){return e(e.s=38101)}),_N_E=e.O()}]);
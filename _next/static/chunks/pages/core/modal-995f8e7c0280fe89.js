(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98588],{66483:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(54764).Z)("xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])},38101:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return n(82399)}])},82399:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return J}});var t=n(24246),l=n(71670),r=n(19799),s=n(27378),a=n(72120),i=n(8671),c=n(87921),d=n(29866);let u=`
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
`,m={type:"code",code:u,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Authentication",centered:!0},s.createElement(d._,{noPadding:!0,noShadow:!0})),s.createElement(i.z,{onClick:o},"Open centered Modal"))}},p=`
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

`,h={type:"code",code:p,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),s.createElement(i.z,{onClick:o},"Open Modal"))}};var f=n(22971);let x=["xs","sm","md","lg","xl","55rem","70%","100%"],j={type:"code",component:function(){let[e,o]=(0,s.useState)(!1),[n,t]=(0,s.useState)("md"),l=x.map(e=>s.createElement(i.z,{key:e,onClick:()=>{t(e),o(!0)}},e));return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:()=>o(!1),title:"Introduce yourself!",size:n},s.createElement(d._,{noPadding:!0,noShadow:!0})),s.createElement(f.Z,{justify:"center"},l))}};var M=n(73988),Text=n(26569),g=n(72048);let y=`
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
`,C={type:"code",component:function(){let[e,{close:o,open:n}]=(0,c.q)(!1),[t,{increment:l,decrement:r}]=(0,g.C)(3,{min:0}),d=Array(t).fill(0).map((e,o)=>s.createElement(M.C,{key:o},"Badge ",o));return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:o,size:"auto",title:"Modal size auto"},s.createElement(Text.x,null,"Modal with size auto will fits its content"),s.createElement(f.Z,{wrap:"nowrap",mt:"md"},d),s.createElement(f.Z,{mt:"xl"},s.createElement(i.z,{onClick:l},"Add badge"),s.createElement(i.z,{onClick:r},"Remove badge"))),s.createElement(i.z,{onClick:n},"Open modal"))},centered:!0,code:y},b=`
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
`,k={type:"code",code:b,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200}},s.createElement(Text.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),s.createElement(d._,{noPadding:!0,noShadow:!0})),s.createElement(i.z,{onClick:o},"Open Modal"))}};var v=n(71078),w=n(73133);let E=`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,v.em)(800)})');

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
`,B={type:"code",code:E,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1),t=(0,w.a)(`(max-width: ${(0,v.em)(800)})`);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:t,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),s.createElement(i.z,{onClick:o},"Open Modal"))}},O=`
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
`,z={type:"code",code:O,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},s.createElement(d._,{noShadow:!0,noPadding:!0})),s.createElement(i.z,{onClick:o},"Open modal"))}},D=`
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
`,T={type:"code",code:D,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,o)=>s.createElement("p",{key:o},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Header is sticky"},t),s.createElement(i.z,{onClick:o},"Open modal"))}};var S=n(49849);let A=`
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
`,P={type:"code",code:A,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,o)=>s.createElement("p",{key:o},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:S.x.Autosize},t),s.createElement(i.z,{onClick:o},"Open modal"))}},F=`
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
`,_={type:"code",code:F,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Authentication",yOffset:"1vh",xOffset:0},s.createElement(d._,{noPadding:!0,noShadow:!0})),s.createElement(i.z,{onClick:o},"Open modal"))}},N=`
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
`,I={type:"code",code:N,component:function(){let[e,o]=(0,s.useState)(!1),[n,t]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:n,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),s.createElement(a.u,{opened:e,onClose:()=>o(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),s.createElement(f.Z,{justify:"center"},s.createElement(i.z,{onClick:()=>t(!0),variant:"default"},"Rotate left transition"),s.createElement(i.z,{onClick:()=>o(!0),variant:"default"},"Fade transition")))}};var R=n(7033);let q=`
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
`,H={type:"code",code:q,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Focus demo"},s.createElement(R.o,{label:"First input",placeholder:"First input"}),s.createElement(R.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),s.createElement(i.z,{onClick:o},"Open modal"))}};var Z=n(66483);let G=`
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

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,X={type:"code",code:G,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u,{opened:e,onClose:n,title:"Authentication",closeButtonProps:{icon:s.createElement(Z.Z,{size:20,stroke:1.5})}},s.createElement(d._,{noShadow:!0,noPadding:!0})),s.createElement(i.z,{onClick:o},"Open modal"))}},U=`
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
`,K={type:"code",code:U,centered:!0,component:function(){let[e,{open:o,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.u.Root,{opened:e,onClose:n},s.createElement(a.u.Overlay,null),s.createElement(a.u.Content,null,s.createElement(a.u.Header,null,s.createElement(a.u.Title,null,"Modal title"),s.createElement(a.u.CloseButton,null)),s.createElement(a.u.Body,null,"Modal content"))),s.createElement(i.z,{onClick:o},"Open modal"))}};var W=n(3916),Y=n(54568);let Q=(0,W.A)(Y.us.Modal);function $(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:r.j}),"\n",(0,t.jsx)(o.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(o.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(o.p,{children:["To remove header set ",(0,t.jsx)(o.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(o.p,{children:["You can change modal width by setting ",(0,t.jsx)(o.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(o.code,{children:"55%"})," or ",(0,t.jsx)(o.code,{children:"50rem"}),".\n",(0,t.jsx)(o.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(o.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(n,{data:j}),"\n",(0,t.jsx)(o.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," with ",(0,t.jsx)(o.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(n,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(o.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(o.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(o.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsxs)(o.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(o.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(o.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(o.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(n,{data:B}),"\n",(0,t.jsx)(o.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," uses ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(o.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(o.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(n,{data:T}),"\n",(0,t.jsx)(o.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(n,{data:P}),"\n",(0,t.jsx)(o.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"xOffset"}),"/",(0,t.jsx)(o.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(n,{data:_}),"\n",(0,t.jsx)(o.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," is built with ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(o.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(n,{data:I}),"\n",(0,t.jsx)(o.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(o.p,{children:["Modal uses ",(0,t.jsx)(o.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(o.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(n,{data:H}),"\n",(0,t.jsx)(o.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(o.p,{children:["The following props can be used to control ",(0,t.jsx)(o.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(o.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(o.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(o.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal removeScrollProps={{ allowPinchZoom: true }} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,t.jsx)(n,{data:X}),"\n",(0,t.jsx)(o.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(o.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(o.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(o.code,{children:"Modal.Title"})," and ",(0,t.jsx)(o.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Title"})," – ",(0,t.jsx)(o.code,{children:"h2"})," element, ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(o.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(o.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(o.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(o.code,{children:"aria-describedby"})," of ",(0,t.jsx)(o.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:K}),"\n",(0,t.jsx)(o.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," component uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(o.code,{children:"elements"})," add a ",(0,t.jsx)(o.code,{children:"className"})," to them (",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Modal"})," component follows ",(0,t.jsx)(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["To set close button ",(0,t.jsx)(o.code,{children:"aria-label"})," use ",(0,t.jsx)(o.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(Q,{...e,children:(0,t.jsx)($,{...e})})}},73988:function(e,o,n){"use strict";n.d(o,{C:function(){return h}});var t=n(27378),l=n(92082),r=n(83453),s=n(89738),a=n(96739),i=n(6231),c=n(56589),d=n(50332),u={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let m={},p=(0,r.Z)((e,{radius:o,color:n,gradient:t,variant:r,size:a,autoContrast:i})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:t,variant:r||"filled",autoContrast:i});return{root:{"--badge-height":(0,l.ap)(a,"badge-height"),"--badge-padding-x":(0,l.ap)(a,"badge-padding-x"),"--badge-fz":(0,l.ap)(a,"badge-fz"),"--badge-radius":void 0===o?void 0:(0,l.H5)(o),"--badge-bg":n||r?c.background:void 0,"--badge-color":n||r?c.color:void 0,"--badge-bd":n||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,s.p)(n,e):void 0}}}),h=(0,d.b)((e,o)=>{let n=(0,a.w)("Badge",m,e),{classNames:l,className:r,style:s,styles:d,unstyled:h,vars:f,radius:x,color:j,gradient:M,leftSection:g,rightSection:y,children:C,variant:b,fullWidth:k,autoContrast:v,circle:w,mod:E,...B}=n,O=(0,i.y)({name:"Badge",props:n,classes:u,className:r,style:s,classNames:l,styles:d,unstyled:h,vars:f,varsResolver:p});return t.createElement(c.x,{variant:b,mod:[{block:k,circle:w},E],...O("root",{variant:b}),ref:o,...B},g&&t.createElement("span",{...O("section"),"data-position":"left"},g),t.createElement("span",{...O("label")},C),y&&t.createElement("span",{...O("section"),"data-position":"right"},y))});h.classes=u,h.displayName="@mantine/core/Badge"},72048:function(e,o,n){"use strict";n.d(o,{C:function(){return s}});var t=n(27378),l=n(28086);let r={min:-1/0,max:1/0};function s(e=0,o){let{min:n,max:s}={...r,...o},[a,i]=(0,t.useState)((0,l.u)(e,n,s));return[a,{increment:()=>i(e=>(0,l.u)(e+1,n,s)),decrement:()=>i(e=>(0,l.u)(e-1,n,s)),set:e=>i((0,l.u)(e,n,s)),reset:()=>i((0,l.u)(e,n,s))}]}}},function(e){e.O(0,[30370,15819,2775,56926,78833,49774,92888,40179],function(){return e(e.s=38101)}),_N_E=e.O()}]);
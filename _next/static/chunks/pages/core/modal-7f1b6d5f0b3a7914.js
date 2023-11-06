(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8588],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},78200:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return n(51347)}])},51347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var o=n(85893),r=n(11151),l=n(19905),a=n(9904),i=n(61615),s=n(67294),c=n(12177),d=n(29613),u=n(14469),p=n(79734);let m=`
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
`,h={type:"code",code:m,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Authentication",centered:!0},s.createElement(p._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:t},"Open centered Modal"))}},f=`
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

`,x={type:"code",code:f,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),s.createElement(u.z,{onClick:t},"Open Modal"))}};var j=n(16262);let y=["xs","sm","md","lg","xl","55rem","70%","100%"],g={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)("md"),r=y.map(e=>s.createElement(u.z,{key:e,variant:"outline",onClick:()=>{o(e),t(!0)}},e));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:n},s.createElement(p._,{noPadding:!0,noShadow:!0})),s.createElement(j.Z,{justify:"center"},r))}};var v=n(58171),M=n(28931),b=n(72039);let k=`
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
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,w={type:"code",component:function(){let[e,{close:t,open:n}]=(0,c.q)(!1),[o,{increment:r,decrement:l}]=(0,v.C)(3,{min:0}),a=Array(o).fill(0).map((e,t)=>s.createElement(M.C,{key:t},"Badge ",t));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:t,size:"auto",title:"Modal size auto"},s.createElement(b.x,null,"Modal with size auto will fits its content"),s.createElement(j.Z,{wrap:"nowrap",mt:"md"},a),s.createElement(j.Z,{mt:"xl"},s.createElement(u.z,{variant:"outline",onClick:r},"Add badge"),s.createElement(u.z,{variant:"outline",onClick:l},"Remove badge"))),s.createElement(u.z,{onClick:n},"Open modal"))},centered:!0,code:k},C=`
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
`,O={type:"code",code:C,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200}},s.createElement(b.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),s.createElement(p._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:t},"Open Modal"))}};var E=n(3921),B=n(72622);let z=`
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
`,D={type:"code",code:z,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1),o=(0,E.a)(`(max-width: ${(0,B.em)(800)})`);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:o,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),s.createElement(u.z,{onClick:t},"Open Modal"))}},S=`
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
`,P={type:"code",code:S,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},s.createElement(p._,{noShadow:!0,noPadding:!0})),s.createElement(u.z,{onClick:t},"Open modal"))}},A=`
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
`,T={type:"code",code:A,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1),o=Array(100).fill(0).map((e,t)=>s.createElement("p",{key:t},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Header is sticky"},o),s.createElement(u.z,{onClick:t},"Open modal"))}};var F=n(18094);let _=`
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
`,I={type:"code",code:_,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1),o=Array(100).fill(0).map((e,t)=>s.createElement("p",{key:t},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:F.x.Autosize},o),s.createElement(u.z,{onClick:t},"Open modal"))}},Z=`
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
`,N={type:"code",code:Z,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Authentication",yOffset:"1vh",xOffset:0},s.createElement(p._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:t},"Open modal"))}},R=`
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
`,q={type:"code",code:R,component:function(){let[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:n,onClose:()=>o(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),s.createElement(d.u,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),s.createElement(j.Z,{justify:"center"},s.createElement(u.z,{onClick:()=>o(!0),variant:"default"},"Rotate left transition"),s.createElement(u.z,{onClick:()=>t(!0),variant:"default"},"Fade transition")))}};var H=n(50780);let G=`
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
`,L={type:"code",code:G,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,title:"Focus demo"},s.createElement(H.o,{label:"First input",placeholder:"First input"}),s.createElement(H.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),s.createElement(u.z,{onClick:t},"Open modal"))}},U=`
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
`,W={type:"code",code:U,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u.Root,{opened:e,onClose:n},s.createElement(d.u.Overlay,null),s.createElement(d.u.Content,null,s.createElement(d.u.Header,null,s.createElement(d.u.Title,null,"Modal title"),s.createElement(d.u.CloseButton,null)),s.createElement(d.u.Body,null,"Modal content"))),s.createElement(u.z,{onClick:t},"Open modal"))}},Y=(0,l.A)(a.us.Modal);function K(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:i.j}),"\n",(0,o.jsx)(t.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,o.jsx)(n,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,o.jsxs)(t.p,{children:["To remove header set ",(0,o.jsx)(t.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"change-size",children:"Change size"}),"\n",(0,o.jsxs)(t.p,{children:["You can change modal width by setting ",(0,o.jsx)(t.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,o.jsx)(t.code,{children:"55%"})," or ",(0,o.jsx)(t.code,{children:"50rem"}),".\n",(0,o.jsx)(t.code,{children:"Modal"})," width cannot exceed ",(0,o.jsx)(t.code,{children:"100vw"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Modal"})," with ",(0,o.jsx)(t.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,o.jsxs)(t.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,o.jsx)(t.code,{children:"fade"}),"\nwhen ",(0,o.jsx)(t.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(n,{data:O}),"\n",(0,o.jsxs)(t.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,o.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,o.jsx)(t.code,{children:"size"})," prop is ignored if ",(0,o.jsx)(t.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(n,{data:D}),"\n",(0,o.jsx)(t.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Modal"})," uses ",(0,o.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,o.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,o.jsx)(t.code,{children:"overlayProps"}),":"]}),"\n",(0,o.jsx)(n,{data:P}),"\n",(0,o.jsx)(t.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"xOffset"}),"/",(0,o.jsx)(t.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Modal"})," is built with ",(0,o.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,o.jsx)(t.code,{children:"transitionProps"}),"\nprop to customize any ",(0,o.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,o.jsx)(n,{data:q}),"\n",(0,o.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(t.p,{children:["Modal uses ",(0,o.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,o.jsx)(t.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,o.jsx)(n,{data:L}),"\n",(0,o.jsx)(t.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,o.jsxs)(t.p,{children:["The following props can be used to control ",(0,o.jsx)(t.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,o.jsx)(t.code,{children:"Escape"})," key is pressed"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(t.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Overlay"})," – render ",(0,o.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,o.jsx)(t.code,{children:"Modal.Title"})," and ",(0,o.jsx)(t.code,{children:"Modal.CloseButton"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Title"})," – ",(0,o.jsx)(t.code,{children:"h2"})," element, ",(0,o.jsx)(t.code,{children:"aria-labelledby"})," of ",(0,o.jsx)(t.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,o.jsx)(t.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,o.jsx)(t.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Modal.Body"})," – a place for main content, ",(0,o.jsx)(t.code,{children:"aria-describedby"})," of ",(0,o.jsx)(t.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:W}),"\n",(0,o.jsx)(t.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Modal"})," component uses ",(0,o.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,o.jsx)(t.code,{children:"elements"})," add a ",(0,o.jsx)(t.code,{children:"className"})," to them (",(0,o.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Modal"})," component follows ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"title"})," props to make component accessible, will add ",(0,o.jsx)(t.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To set close button ",(0,o.jsx)(t.code,{children:"aria-label"})," use ",(0,o.jsx)(t.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Y,Object.assign({},e,{children:(0,o.jsx)(K,e)}))}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},38956:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,l[r]))return!1;for(r=o;0!=r--;){var o,r,l,a=l[r];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function o(e,t,n){"object"==typeof n.value&&(n.value=r(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function r(e){if("object"!=typeof e)return e;var t,n,l,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?l=Object.create(e.__proto__||null):"[object Array]"===i?l=Array(e.length):"[object Set]"===i?(l=new Set,e.forEach(function(e){l.add(r(e))})):"[object Map]"===i?(l=new Map,e.forEach(function(e,t){l.set(r(t),r(e))})):"[object Date]"===i?l=new Date(+e):"[object RegExp]"===i?l=RegExp(e.source,e.flags):"[object DataView]"===i?l=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===i?l=e.slice(0):"Array]"===i.slice(-6)&&(l=new e.constructor(e)),l){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)o(l,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(l,t=n[a])&&l[t]===e[t]||o(l,t,Object.getOwnPropertyDescriptor(e,t))}return l||e}n.d(t,{Y:function(){return r}})},28931:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});var o=n(67294),r={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},l=n(70405),a=n(30370),i=n(86109),s=n(81110),c=n(8586),d=n(48468),u=n(40184),p=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))j.call(t,n)&&y(e,n,t[n]);return e},v=(e,t)=>m(e,h(t)),M=(e,t)=>{var n={};for(var o in e)x.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&f)for(var o of f(e))0>t.indexOf(o)&&j.call(e,o)&&(n[o]=e[o]);return n};let b={},k=(0,c.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:l})=>{let a=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r||"filled"});return{root:{"--badge-height":(0,d.ap)(l,"badge-height"),"--badge-padding-x":(0,d.ap)(l,"badge-padding-x"),"--badge-fz":(0,d.ap)(l,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,d.H5)(t),"--badge-bg":n||r?a.background:void 0,"--badge-color":n||r?a.color:void 0,"--badge-bd":n||r?a.border:void 0,"--badge-dot-color":"dot"===r?(0,u.p)(n,e):void 0}}}),w=(0,l.b)((e,t)=>{let n=(0,a.w)("Badge",b,e),{classNames:l,className:c,style:d,styles:u,unstyled:p,vars:m,radius:h,color:f,gradient:x,leftSection:j,rightSection:y,children:w,variant:C,fullWidth:O}=n,E=M(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),B=(0,i.y)({name:"Badge",props:n,classes:r,className:c,style:d,classNames:l,styles:u,unstyled:p,vars:m,varsResolver:k});return o.createElement(s.x,g(v(g({variant:C,mod:{block:O}},B("root",{variant:C})),{ref:t}),E),j&&o.createElement("span",v(g({},B("section")),{"data-position":"left"}),j),o.createElement("span",g({},B("label")),w),y&&o.createElement("span",v(g({},B("section")),{"data-position":"right"}),y))});w.classes=r,w.displayName="@mantine/core/Badge"},61615:function(e,t,n){"use strict";n.d(t,{j:function(){return c}});var o=n(67294),r=n(29613),l=n(14469),a=n(12177),i=n(79734);let s=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,c={type:"code",code:s,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,a.q)(!1);return o.createElement(o.Fragment,null,o.createElement(r.u,{opened:e,onClose:n,title:"Authentication"},o.createElement(i._,{noShadow:!0,noPadding:!0})),o.createElement(l.z,{onClick:t},"Open modal"))}}},58171:function(e,t,n){"use strict";n.d(t,{C:function(){return p}});var o=n(67294),r=n(71062),l=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&c(e,n,t[n]);return e};let u={min:-1/0,max:1/0};function p(e=0,t){let{min:n,max:l}=d(d({},u),t),[a,i]=(0,o.useState)((0,r.u)(e,n,l)),s=()=>i(e=>(0,r.u)(e+1,n,l)),c=()=>i(e=>(0,r.u)(e-1,n,l)),p=e=>i((0,r.u)(e,n,l)),m=()=>i((0,r.u)(e,n,l));return[a,{increment:s,decrement:c,set:p,reset:m}]}}},function(e){e.O(0,[8992,178,160,6346,9774,2888,179],function(){return e(e.s=78200)}),_N_E=e.O()}]);
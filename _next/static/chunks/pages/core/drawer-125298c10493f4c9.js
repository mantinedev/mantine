(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16334],{52181:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return r(89205)}])},89205:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var o=r(52322),t=r(45392),s=r(70231),i=r(39629),a=r(3900),c=r(3789);let l={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Authentication",children:(0,o.jsx)(c._,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}};var d=r(2784),u=r(93010);let h={type:"code",component:function(){let[e,n]=(0,d.useState)(!1),[r,t]=(0,d.useState)("top"),a=e=>{t(e),n(!0)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:()=>n(!1),padding:"md",position:r,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,o.jsxs)(u.Z,{justify:"center",children:[(0,o.jsx)(i.z,{variant:"default",onClick:()=>a("left"),children:"Left"}),(0,o.jsx)(i.z,{variant:"default",onClick:()=>a("right"),children:"Right"}),(0,o.jsx)(i.z,{variant:"default",onClick:()=>a("top"),children:"Top"}),(0,o.jsx)(i.z,{variant:"default",onClick:()=>a("bottom"),children:"Bottom"})]})]})}};var p=r(77612);let m={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4},children:(0,o.jsx)(c._,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}},x={type:"code",component:function(){let[e,n]=(0,d.useState)(!1),[r,t]=(0,d.useState)("top"),a=e=>{t(e),n(!0)},c=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>(0,o.jsx)(i.z,{variant:"default",onClick:()=>a(e),children:e},e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:()=>n(!1),padding:"md",size:r,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,o.jsx)(u.Z,{justify:"center",children:c})]})}},f={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,withCloseButton:!1,children:"Drawer without header, press escape or click on overlay to close"}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}},w={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1),t=Array(100).fill(0).map((e,n)=>(0,o.jsx)("p",{children:"Drawer with scroll"},n));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Header is sticky",children:t}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}};var j=r(20135);let D={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1),t=Array(100).fill(0).map((e,n)=>(0,o.jsx)("p",{children:"Drawer with scroll"},n));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Header is sticky",scrollAreaComponent:j.x.Autosize,children:t}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}},g={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"},children:(0,o.jsx)(c._,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}},k={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [drawerData, setDrawerData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Drawer
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setDrawerData({ title: '', message: '' });
        }}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>
      <Drawer
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setDrawerData({ title: '', message: '' })}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,component:function(){let[e,n]=(0,a.q)(!1),[r,t]=(0,a.q)(!1),[c,l]=(0,d.useState)({title:"",message:""});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:()=>{n.close(),l({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3},title:c.title,children:c.message}),(0,o.jsx)(s.d,{opened:r,onClose:t.close,transitionProps:{duration:300,exitDuration:1e3},onExitTransitionEnd:()=>l({title:"",message:""}),title:c.title,children:c.message}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(i.z,{onClick:()=>{n.open(),l({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,o.jsx)(i.z,{onClick:()=>{t.open(),l({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var C=r(74770);let y={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.d,{opened:e,onClose:r,title:"Focus demo",children:[(0,o.jsx)(C.o,{label:"First input",placeholder:"First input"}),(0,o.jsx)(C.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}};var v=r(99573);let b={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.d,{opened:e,onClose:r,title:"Focus demo",children:[(0,o.jsx)(v.i.InitialFocus,{}),(0,o.jsx)(C.o,{label:"First input",placeholder:"First input"}),(0,o.jsx)(C.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}};var B=r(81082);let T={type:"code",code:`
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{opened:e,onClose:r,title:"Authentication",closeButtonProps:{icon:(0,o.jsx)(B.Z,{size:20,stroke:1.5})},children:(0,o.jsx)(c._,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}},O={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.d.Root,{opened:e,onClose:r,children:[(0,o.jsx)(s.d.Overlay,{}),(0,o.jsxs)(s.d.Content,{children:[(0,o.jsxs)(s.d.Header,{children:[(0,o.jsx)(s.d.Title,{children:"Drawer title"}),(0,o.jsx)(s.d.CloseButton,{})]}),(0,o.jsx)(s.d.Body,{children:"Drawer content"})]})]}),(0,o.jsx)(i.z,{variant:"default",onClick:n,children:"Open Drawer"})]})}};var z=r(80832);let A={type:"code",code:`
import { Button, Group, Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Drawer.Stack>
        <Drawer {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Drawer>

        <Drawer {...stack.register('confirm-action')} title="Confirm action">
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
        </Drawer>

        <Drawer {...stack.register('really-confirm-action')} title="Really confirm action">
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
        </Drawer>
      </Drawer.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,z.K)(["delete-page","confirm-action","really-confirm-action"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.d.Stack,{children:[(0,o.jsxs)(s.d,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,o.jsxs)(u.Z,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(i.z,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,o.jsxs)(s.d,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,o.jsxs)(u.Z,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(i.z,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,o.jsxs)(s.d,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,o.jsxs)(u.Z,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(i.z,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,o.jsx)(i.z,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open drawer"})]})}};var F=r(25071),S=r(15019);let I=(0,F.A)(S.us.Drawer);function E(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:l}),"\n",(0,o.jsx)(n.h2,{id:"position",children:"Position"}),"\n",(0,o.jsxs)(n.p,{children:["Drawer can be placed on ",(0,o.jsx)(n.code,{children:"left"})," (default), ",(0,o.jsx)(n.code,{children:"top"}),", ",(0,o.jsx)(n.code,{children:"right"})," and ",(0,o.jsx)(n.code,{children:"bottom"}),". Control drawer position with ",(0,o.jsx)(n.code,{children:"position"})," prop,\nfor example ",(0,o.jsx)(n.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,o.jsx)(r,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"offset",children:"Offset"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"offset"})," prop to change drawer offset from the edge of the viewport:"]}),"\n",(0,o.jsx)(r,{data:p.c}),"\n",(0,o.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," uses ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,o.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,o.jsxs)(n.p,{children:["You can change drawer width/height (depends on ",(0,o.jsx)(n.code,{children:"position"}),") by setting ",(0,o.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,o.jsx)(n.code,{children:'size="55%"'})," or ",(0,o.jsx)(n.code,{children:"size={200}"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,o.jsx)(r,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,o.jsxs)(n.p,{children:["To remove header set ",(0,o.jsx)(n.code,{children:"withCloseButton={false}"})]}),"\n",(0,o.jsx)(r,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,o.jsx)(r,{data:w}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,o.jsx)(r,{data:D}),"\n",(0,o.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," is built with ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,o.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,o.jsx)(r,{data:g}),"\n",(0,o.jsx)(n.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"onExitTransitionEnd"})," and ",(0,o.jsx)(n.code,{children:"onEnterTransitionEnd"})," props can be used to run code after\nexit/enter transition is finished. For example, this is useful when you want to clear\ndata after drawer is closed:"]}),"\n",(0,o.jsx)(r,{data:k}),"\n",(0,o.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," uses ",(0,o.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,o.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,o.jsx)(r,{data:y}),"\n",(0,o.jsxs)(n.p,{children:["If you do not want to focus any elements when the drawer is opened, use ",(0,o.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,o.jsx)(r,{data:b}),"\n",(0,o.jsxs)(n.p,{children:["If you do not add ",(0,o.jsx)(n.code,{children:"data-autofocus"})," attribute and do not use ",(0,o.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),",\ndrawer will focus the first focusable element inside it which is usually the close button."]}),"\n",(0,o.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,o.jsxs)(n.p,{children:["The following props can be used to control ",(0,o.jsx)(n.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,o.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," uses ",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,o.jsx)(n.code,{children:"RemoveScroll"})," component\nwith ",(0,o.jsx)(n.code,{children:"removeScrollProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    >\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,o.jsx)(r,{data:T}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Drawer"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Overlay"})," – render ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,o.jsx)(n.code,{children:"Drawer.Title"})," and ",(0,o.jsx)(n.code,{children:"Drawer.CloseButton"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Title"})," – ",(0,o.jsx)(n.code,{children:"h2"})," element, ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,o.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,o.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,o.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Body"})," – a place for main content, ",(0,o.jsx)(n.code,{children:"aria-describedby"})," of ",(0,o.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:O}),"\n",(0,o.jsx)(n.h2,{id:"drawerstack",children:"Drawer.Stack"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"Drawer.Stack"})," component to render multiple drawers at the same time.\n",(0,o.jsx)(n.code,{children:"Drawer.Stack"})," keeps track of opened drawers, manages z-index values, focus trapping\nand ",(0,o.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,o.jsx)(n.code,{children:"Drawer.Stack"})," is designed to be used with ",(0,o.jsx)(n.code,{children:"useDrawersStack"})," hook."]}),"\n",(0,o.jsxs)(n.p,{children:["Differences from using multiple ",(0,o.jsx)(n.code,{children:"Drawer"})," components:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Stack"})," manages z-index values – drawers that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Stack"})," disables focus trap and ",(0,o.jsx)(n.code,{children:"Escape"})," key handling for all drawers except the one that is currently opened"]}),"\n",(0,o.jsxs)(n.li,{children:["Drawers that are not currently opened are present in the DOM but are hidden with ",(0,o.jsx)(n.code,{children:"opacity: 0"})," and ",(0,o.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,o.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,o.jsx)(r,{data:A}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"Drawer.Stack"})," can only be used with ",(0,o.jsx)(n.code,{children:"Drawer"})," component. Components built with ",(0,o.jsx)(n.code,{children:"Drawer.Root"}),"\nand other compound components are not compatible with ",(0,o.jsx)(n.code,{children:"Drawer.Stack"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"usedrawersstack-hook",children:"useDrawersStack hook"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useDrawersStack"})," hook provides an easy way to control multiple drawers at the same time.\nIt accepts an array of unique drawers ids and returns an object with the following properties:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface UseDrawersStackReturnType<T extends string> {\n  // Current opened state of each drawer\n  state: Record<T, boolean>;\n\n  // Opens drawer with the given id\n  open: (id: T) => void;\n\n  // Closes drawer with the given id\n  close: (id: T) => void;\n\n  // Toggles drawer with the given id\n  toggle: (id: T) => void;\n\n  // Closes all drawers within the stack\n  closeAll: () => void;\n\n  // Returns props for drawer with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"useDrawersStack"})," with ",(0,o.jsx)(n.code,{children:"Drawer"})," component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer, useDrawersStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useDrawersStack(['first', 'second']);\n\n  return (\n    <>\n      <Drawer {...stack.register('first')}>First</Drawer>\n      <Drawer {...stack.register('second')}>Second</Drawer>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," component uses ",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,o.jsx)(n.code,{children:"elements"})," add a ",(0,o.jsx)(n.code,{children:"className"})," to them (",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," component follows ",(0,o.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To set close button ",(0,o.jsx)(n.code,{children:"aria-label"})," use ",(0,o.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      closeButtonProps={{ 'aria-label': 'Close drawer' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(I,{...e,children:(0,o.jsx)(E,{...e})})}},81082:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var o=(0,r(73681).Z)("outline","xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])},80832:function(e,n,r){"use strict";r.d(n,{K:function(){return s},p:function(){return t}});var o=r(2784);function t(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[r,t]=(0,o.useState)(n),s=(0,o.useCallback)(e=>{t(n=>({...n,[e]:!0}))},[]),i=(0,o.useCallback)(e=>t(n=>({...n,[e]:!1})),[]),a=(0,o.useCallback)(e=>t(n=>({...n,[e]:!n[e]})),[]),c=(0,o.useCallback)(()=>t(n),[]),l=(0,o.useCallback)(e=>({opened:r[e],onClose:()=>i(e),stackId:e}),[r]);return{state:r,open:s,close:i,closeAll:c,toggle:a,register:l}}let s=t}},function(e){e.O(0,[61177,66748,11340,43092,70231,57902,92888,49774,40179],function(){return e(e.s=52181)}),_N_E=e.O()}]);
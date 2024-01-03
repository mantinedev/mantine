(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16334],{66483:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(54764).Z)("xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])},8506:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return o(30006)}])},30006:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return H}});var t=o(24246),r=o(71670),c=o(27378),l=o(67968),s=o(8671),i=o(87921),a=o(29866);let d=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,u={type:"code",code:d,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Authentication"},c.createElement(a._,{noShadow:!0,noPadding:!0})),c.createElement(s.z,{onClick:n},"Open Drawer"))}};var h=o(22971);let p={type:"code",component:function(){let[e,n]=(0,c.useState)(!1),[o,t]=(0,c.useState)("top"),r=e=>{t(e),n(!0)};return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:()=>n(!1),padding:"md",position:o,withCloseButton:!1},"Press escape to close the drawer"),c.createElement(h.Z,{justify:"center"},c.createElement(s.z,{onClick:()=>r("left")},"Left"),c.createElement(s.z,{onClick:()=>r("right")},"Right"),c.createElement(s.z,{onClick:()=>r("top")},"Top"),c.createElement(s.z,{onClick:()=>r("bottom")},"Bottom")))}};var m=o(64039);let w=`
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

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,x={type:"code",code:w,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4}},c.createElement(a._,{noShadow:!0,noPadding:!0})),c.createElement(s.z,{onClick:n},"Open drawer"))}},f={type:"code",component:function(){let[e,n]=(0,c.useState)(!1),[o,t]=(0,c.useState)("top"),r=e=>{t(e),n(!0)},i=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>c.createElement(s.z,{onClick:()=>r(e),key:e},e));return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:()=>n(!1),padding:"md",size:o,withCloseButton:!1},"Press escape to close the drawer"),c.createElement(h.Z,{justify:"center"},i))}},j=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

`,D={type:"code",code:j,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,withCloseButton:!1},"Drawer without header, press escape or click on overlay to close"),c.createElement(s.z,{onClick:n},"Open drawer"))}},y=`
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

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,g={type:"code",code:y,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1),t=Array(100).fill(0).map((e,n)=>c.createElement("p",{key:n},"Drawer with scroll"));return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Header is sticky"},t),c.createElement(s.z,{onClick:n},"Open drawer"))}};var C=o(49849);let k=`
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

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,E={type:"code",code:k,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1),t=Array(100).fill(0).map((e,n)=>c.createElement("p",{key:n},"Drawer with scroll"));return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:C.x.Autosize},t),c.createElement(s.z,{onClick:n},"Open drawer"))}},v=`
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

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

`,b={type:"code",code:v,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"}},c.createElement(a._,{noShadow:!0,noPadding:!0})),c.createElement(s.z,{onClick:n},"Open Drawer"))}};var B=o(7033);let z=`
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

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,O={type:"code",code:z,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Focus demo"},c.createElement(B.o,{label:"First input",placeholder:"First input"}),c.createElement(B.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),c.createElement(s.z,{onClick:n},"Open drawer"))}};var A=o(66483);let F=`
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

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,P={type:"code",code:F,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d,{opened:e,onClose:o,title:"Authentication",closeButtonProps:{icon:c.createElement(A.Z,{size:20,stroke:1.5})}},c.createElement(a._,{noShadow:!0,noPadding:!0})),c.createElement(s.z,{onClick:n},"Open Drawer"))}},S=`
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

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,T={type:"code",code:S,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,i.q)(!1);return c.createElement(c.Fragment,null,c.createElement(l.d.Root,{opened:e,onClose:o},c.createElement(l.d.Overlay,null),c.createElement(l.d.Content,null,c.createElement(l.d.Header,null,c.createElement(l.d.Title,null,"Drawer title"),c.createElement(l.d.CloseButton,null)),c.createElement(l.d.Body,null,"Drawer content"))),c.createElement(s.z,{onClick:n},"Open drawer"))}};var _=o(3916),I=o(54568);let N=(0,_.A)(I.us.Drawer);function R(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(n.h2,{id:"position",children:"Position"}),"\n",(0,t.jsxs)(n.p,{children:["Drawer can be placed on ",(0,t.jsx)(n.code,{children:"left"})," (default), ",(0,t.jsx)(n.code,{children:"top"}),", ",(0,t.jsx)(n.code,{children:"right"})," and ",(0,t.jsx)(n.code,{children:"bottom"}),". Control drawer position with ",(0,t.jsx)(n.code,{children:"position"})," prop,\nfor example ",(0,t.jsx)(n.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"offset",children:"Offset"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"offset"})," prop to change drawer offset from the edge of the viewport:"]}),"\n",(0,t.jsx)(o,{data:m.c}),"\n",(0,t.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," uses ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,t.jsxs)(n.p,{children:["You can change drawer width/height (depends on ",(0,t.jsx)(n.code,{children:"position"}),") by setting ",(0,t.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,t.jsx)(n.code,{children:'size="55%"'})," or ",(0,t.jsx)(n.code,{children:"size={200}"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(n.p,{children:["To remove header set ",(0,t.jsx)(n.code,{children:"withCloseButton={false}"})]}),"\n",(0,t.jsx)(o,{data:D}),"\n",(0,t.jsx)(n.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," is built with ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," uses ",(0,t.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(o,{data:O}),"\n",(0,t.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The following props can be used to control ",(0,t.jsx)(n.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,t.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(n.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(n.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer removeScrollProps={{ allowPinchZoom: true }} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(n.code,{children:"Drawer"})," rendering:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Overlay"})," – render ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,t.jsx)(n.code,{children:"Drawer.Title"})," and ",(0,t.jsx)(n.code,{children:"Drawer.CloseButton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Title"})," – ",(0,t.jsx)(n.code,{children:"h2"})," element, ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Drawer.Body"})," – a place for main content, ",(0,t.jsx)(n.code,{children:"aria-describedby"})," of ",(0,t.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," component uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(n.code,{children:"elements"})," add a ",(0,t.jsx)(n.code,{children:"className"})," to them (",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Drawer"})," component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set close button ",(0,t.jsx)(n.code,{children:"aria-label"})," use ",(0,t.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function H(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(N,{...e,children:(0,t.jsx)(R,{...e})})}}},function(e){e.O(0,[30370,15819,2775,56926,16789,49774,92888,40179],function(){return e(e.s=8506)}),_N_E=e.O()}]);
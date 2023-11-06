(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6334],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},52200:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return n(7308)}])},7308:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(85893),o=n(11151),c=n(19905),l=n(9904),s=n(67294),a=n(83449),i=n(14469),d=n(12177),u=n(79734);let h=`
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
`,p={type:"code",code:h,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Authentication"},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(i.z,{onClick:t},"Open Drawer"))}};var m=n(16262);let f={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)("top"),o=e=>{r(e),t(!0)};return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:()=>t(!1),padding:"md",position:n,withCloseButton:!1},"Press escape to close the drawer"),s.createElement(m.Z,{justify:"center"},s.createElement(i.z,{variant:"outline",onClick:()=>o("left")},"Left"),s.createElement(i.z,{variant:"outline",onClick:()=>o("right")},"Right"),s.createElement(i.z,{variant:"outline",onClick:()=>o("top")},"Top"),s.createElement(i.z,{variant:"outline",onClick:()=>o("bottom")},"Bottom")))}},w=`
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
`,j={type:"code",code:w,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4}},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(i.z,{onClick:t},"Open drawer"))}},x={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)("top"),o=e=>{r(e),t(!0)},c=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>s.createElement(i.z,{variant:"outline",onClick:()=>o(e),key:e},e));return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:()=>t(!1),padding:"md",size:n,withCloseButton:!1},"Press escape to close the drawer"),s.createElement(m.Z,{justify:"center"},c))}},y=`
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

`,g={type:"code",code:y,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,withCloseButton:!1},"Drawer without header, press escape or click on overlay to close"),s.createElement(i.z,{onClick:t},"Open drawer"))}},D=`
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
`,v={type:"code",code:D,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1),r=Array(100).fill(0).map((e,t)=>s.createElement("p",{key:t},"Drawer with scroll"));return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Header is sticky"},r),s.createElement(i.z,{onClick:t},"Open drawer"))}};var k=n(18094);let b=`
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
`,C={type:"code",code:b,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1),r=Array(100).fill(0).map((e,t)=>s.createElement("p",{key:t},"Drawer with scroll"));return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:k.x.Autosize},r),s.createElement(i.z,{onClick:t},"Open drawer"))}},E=`
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

`,O={type:"code",code:E,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"}},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(i.z,{onClick:t},"Open Drawer"))}};var B=n(50780);let A=`
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
`,M={type:"code",code:A,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d,{opened:e,onClose:n,title:"Focus demo"},s.createElement(B.o,{label:"First input",placeholder:"First input"}),s.createElement(B.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),s.createElement(i.z,{onClick:t},"Open drawer"))}},z=`
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
`,_={type:"code",code:z,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.d.Root,{opened:e,onClose:n},s.createElement(a.d.Overlay,null),s.createElement(a.d.Content,null,s.createElement(a.d.Header,null,s.createElement(a.d.Title,null,"Drawer title"),s.createElement(a.d.CloseButton,null)),s.createElement(a.d.Body,null,"Drawer content"))),s.createElement(i.z,{onClick:t},"Open drawer"))}},P=(0,c.A)(l.us.Drawer);function S(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"position",children:"Position"}),"\n",(0,r.jsxs)(t.p,{children:["Drawer can be placed on ",(0,r.jsx)(t.code,{children:"left"})," (default), ",(0,r.jsx)(t.code,{children:"top"}),", ",(0,r.jsx)(t.code,{children:"right"})," and ",(0,r.jsx)(t.code,{children:"bottom"}),". Control drawer position with ",(0,r.jsx)(t.code,{children:"position"})," prop,\nfor example ",(0,r.jsx)(t.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Drawer"})," uses ",(0,r.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,r.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,r.jsx)(t.code,{children:"overlayProps"}),":"]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsxs)(t.p,{children:["You can change drawer width/height (depends on ",(0,r.jsx)(t.code,{children:"position"}),") by setting ",(0,r.jsx)(t.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,r.jsx)(t.code,{children:'size="55%"'})," or ",(0,r.jsx)(t.code,{children:"size={200}"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,r.jsxs)(t.p,{children:["To remove header set ",(0,r.jsx)(t.code,{children:"withCloseButton={false}"})]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Drawer"})," is built with ",(0,r.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,r.jsx)(t.code,{children:"transitionProps"}),"\nprop to customize any ",(0,r.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Drawer"})," uses ",(0,r.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,r.jsx)(t.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,r.jsxs)(t.p,{children:["The following props can be used to control ",(0,r.jsx)(t.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,r.jsx)(t.code,{children:"Escape"})," key is pressed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,r.jsx)(t.code,{children:"Drawer"})," rendering:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Overlay"})," – render ",(0,r.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,r.jsx)(t.code,{children:"Drawer.Title"})," and ",(0,r.jsx)(t.code,{children:"Drawer.CloseButton"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Title"})," – ",(0,r.jsx)(t.code,{children:"h2"})," element, ",(0,r.jsx)(t.code,{children:"aria-labelledby"})," of ",(0,r.jsx)(t.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,r.jsx)(t.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,r.jsx)(t.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Drawer.Body"})," – a place for main content, ",(0,r.jsx)(t.code,{children:"aria-describedby"})," of ",(0,r.jsx)(t.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Drawer"})," component uses ",(0,r.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,r.jsx)(t.code,{children:"elements"})," add a ",(0,r.jsx)(t.code,{children:"className"})," to them (",(0,r.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Drawer"})," component follows ",(0,r.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"title"})," props to make component accessible, will add ",(0,r.jsx)(t.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To set close button ",(0,r.jsx)(t.code,{children:"aria-label"})," use ",(0,r.jsx)(t.code,{children:"closeButtonProps"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(P,Object.assign({},e,{children:(0,r.jsx)(S,e)}))}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},38956:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(c=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,c[o]))return!1;for(o=r;0!=o--;){var r,o,c,l=c[o];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,c,l=0,s=Object.prototype.toString.call(e);if("[object Object]"===s?c=Object.create(e.__proto__||null):"[object Array]"===s?c=Array(e.length):"[object Set]"===s?(c=new Set,e.forEach(function(e){c.add(o(e))})):"[object Map]"===s?(c=new Map,e.forEach(function(e,t){c.set(o(t),o(e))})):"[object Date]"===s?c=new Date(+e):"[object RegExp]"===s?c=RegExp(e.source,e.flags):"[object DataView]"===s?c=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===s?c=e.slice(0):"Array]"===s.slice(-6)&&(c=new e.constructor(e)),c){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r(c,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(c,t=n[l])&&c[t]===e[t]||r(c,t,Object.getOwnPropertyDescriptor(e,t))}return c||e}n.d(t,{Y:function(){return o}})}},function(e){e.O(0,[8992,178,160,6346,3449,9774,2888,179],function(){return e(e.s=52200)}),_N_E=e.O()}]);
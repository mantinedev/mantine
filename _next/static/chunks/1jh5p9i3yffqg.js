(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let t={};for(var i in e)o(t,i,{get:e[i],enumerable:!0});return r||o(t,Symbol.toStringTag,{value:"Module"}),t}])},108947,e=>{"use strict";var o=e.i(648863),r=e.i(29260),t=e.i(232471),i=e.i(485108),n=e.i(725695),s=e.i(505716),l=e.i(391398),a=e.i(541772);let d={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,a.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.Box,{pos:"relative",children:[(0,l.jsx)(s.LoadingOverlay,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),(0,l.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,l.jsx)(n.Group,{justify:"center",mt:"xl",children:(0,l.jsx)(i.Button,{onClick:o,children:"Toggle overlay"})})]})}},c={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,a.useDisclosure)(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.Box,{pos:"relative",children:[(0,l.jsx)(s.LoadingOverlay,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),(0,l.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,l.jsx)(n.Group,{justify:"center",mt:"xl",children:(0,l.jsx)(i.Button,{onClick:o,children:"Toggle overlay"})})]})}},u={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,a.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.Box,{pos:"relative",children:[(0,l.jsx)(s.LoadingOverlay,{visible:e,loaderProps:{children:"Loading..."}}),(0,l.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,l.jsx)(n.Group,{justify:"center",mt:"xl",children:(0,l.jsx)(i.Button,{onClick:o,children:"Toggle overlay"})})]})}};var p=(0,o.__exportAll)({customLoader:()=>u,loaderProps:()=>c,usage:()=>d});e.s(["LoadingOverlayDemos",0,p],108947)},222054,e=>{"use strict";var o=e.i(391398),r=e.i(38856),t=e.i(108947);e.i(603441);var i=e.i(62558);e.i(457450);var n=e.i(418026);let s=(0,i.Layout)(n.MDX_DATA.LoadingOverlay);function l(e){let i={a:"a",code:"code",h2:"h2",p:"p",...(0,r.useMDXComponents)(),...e.components},{Demo:n}=i;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate the loading state of forms.\nNote that elements under the overlay are still focusable with the keyboard, so remember to add additional logic to handle this case."]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"LoadingOverlay"})," rendering is controlled by the ",(0,o.jsx)(i.code,{children:"visible"})," prop:"]}),"\n",(0,o.jsx)(n,{data:t.LoadingOverlayDemos.usage}),"\n",(0,o.jsx)(i.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(i.p,{children:["You can pass props down to the ",(0,o.jsx)(i.a,{href:"/core/loader",children:"Loader"})," component with ",(0,o.jsx)(i.code,{children:"loaderProps"}),":"]}),"\n",(0,o.jsx)(n,{data:t.LoadingOverlayDemos.loaderProps}),"\n",(0,o.jsx)(i.h2,{id:"custom-inline-loaders",children:"Custom inline loaders"}),"\n",(0,o.jsxs)(i.p,{children:["To replace the default loader with any custom content, set ",(0,o.jsx)(i.code,{children:"loaderProps={{ children: <div>Your content</div> }}"}),".\nYou can put any React node inside ",(0,o.jsx)(i.code,{children:"loaderProps.children"}),":"]}),"\n",(0,o.jsx)(n,{data:t.LoadingOverlayDemos.customLoader})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})})}])},463483,(e,o,r)=>{let t="/core/loading-overlay";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(222054)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);
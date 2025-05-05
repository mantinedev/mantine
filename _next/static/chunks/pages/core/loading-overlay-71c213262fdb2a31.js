(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59635],{57647:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return r(90243)}])},90243:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>g});var n=r(31085),t=r(71184),i=r(34056),s=r(35395),l=r(56051),d=r(52022),a=r(92051),c=r(86934);let u={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
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
}`,component:function(){let[e,{toggle:o}]=(0,a.j)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.a,{pos:"relative",children:[(0,n.jsx)(s.p,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),(0,n.jsx)(c.d,{noSubmit:!0})]}),(0,n.jsx)(l.Y,{justify:"center",mt:"xl",children:(0,n.jsx)(d.$,{onClick:o,children:"Toggle overlay"})})]})}},p={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
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
}`,component:function(){let[e,{toggle:o}]=(0,a.j)(!0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.a,{pos:"relative",children:[(0,n.jsx)(s.p,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),(0,n.jsx)(c.d,{noSubmit:!0})]}),(0,n.jsx)(l.Y,{justify:"center",mt:"xl",children:(0,n.jsx)(d.$,{onClick:o,children:"Toggle overlay"})})]})}};var h=r(26260),x=r(18675),m=r(20017);let v=(0,x.P)(m.XZ.LoadingOverlay);function j(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,t.R)(),...e.components},{Demo:r}=o;return r||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,n.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,n.jsxs)(o.p,{children:["You can pass props down to the ",(0,n.jsx)(o.a,{href:"/core/loader",children:"Loader"})," component with ",(0,n.jsx)(o.code,{children:"loaderProps"}),":"]}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(o.h2,{id:"custom-inline-loaders",children:"Custom inline loaders"}),"\n",(0,n.jsxs)(o.p,{children:["To replace default loader with any custom content, set ",(0,n.jsx)(o.code,{children:"loaderProps={{ children: <div>Your content</div> }}"}),".\nYou can put any React node inside ",(0,n.jsx)(o.code,{children:"loaderProps.children"}),":"]}),"\n",(0,n.jsx)(r,{data:h.T})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(v,{...e,children:(0,n.jsx)(j,{...e})})}}},e=>{var o=o=>e(e.s=o);e.O(0,[18675,23719,98623,90636,46593,38792],()=>o(57647)),_N_E=e.O()}]);
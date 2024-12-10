(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79705],{52947:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return r(22539)}])},22539:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return f}});var n=r(52322),t=r(45392),i=r(28559),s=r(20992),l=r(93010),d=r(39629),a=r(3900),c=r(3789);let u={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
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
}`,component:function(){let[e,{toggle:o}]=(0,a.q)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.x,{pos:"relative",children:[(0,n.jsx)(s.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),(0,n.jsx)(c._,{noSubmit:!0})]}),(0,n.jsx)(l.Z,{justify:"center",mt:"xl",children:(0,n.jsx)(d.z,{onClick:o,children:"Toggle overlay"})})]})}},p={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
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
}`,component:function(){let[e,{toggle:o}]=(0,a.q)(!0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.x,{pos:"relative",children:[(0,n.jsx)(s.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),(0,n.jsx)(c._,{noSubmit:!0})]}),(0,n.jsx)(l.Z,{justify:"center",mt:"xl",children:(0,n.jsx)(d.z,{onClick:o,children:"Toggle overlay"})})]})}};var h=r(12209),x=r(25071),m=r(15019);let v=(0,x.A)(m.us.LoadingOverlay);function j(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,t.a)(),...e.components},{Demo:r}=o;return r||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,n.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,n.jsxs)(o.p,{children:["You can pass props down to the ",(0,n.jsx)(o.a,{href:"/core/loader",children:"Loader"})," component with ",(0,n.jsx)(o.code,{children:"loaderProps"}),":"]}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(o.h2,{id:"custom-inline-loaders",children:"Custom inline loaders"}),"\n",(0,n.jsxs)(o.p,{children:["To replace default loader with any custom content, set ",(0,n.jsx)(o.code,{children:"loaderProps={{ children: <div>Your content</div> }}"}),".\nYou can put any React node inside ",(0,n.jsx)(o.code,{children:"loaderProps.children"}),":"]}),"\n",(0,n.jsx)(r,{data:h.l})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(v,{...e,children:(0,n.jsx)(j,{...e})})}}},function(e){e.O(0,[61177,66748,11340,43092,36503,92888,49774,40179],function(){return e(e.s=52947)}),_N_E=e.O()}]);
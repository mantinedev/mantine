(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9705],{37779:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return t(27529)}])},27529:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return j}});var n=t(24246),r=t(71670),i=t(3916),l=t(30289),a=t(27378),s=t(56589),d=t(77188),c=t(22971),u=t(8671),p=t(87921),m=t(29866);let h=`
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

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,v={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:h,component:function(){let[e,{toggle:o}]=(0,p.q)(!1);return a.createElement(a.Fragment,null,a.createElement(s.x,{pos:"relative"},a.createElement(d.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),a.createElement(m._,{noSubmit:!0})),a.createElement(c.Z,{justify:"center",mt:"xl"},a.createElement(u.z,{onClick:o},"Toggle overlay")))}},x=`
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

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,g={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:x,component:function(){let[e,{toggle:o}]=(0,p.q)(!0);return a.createElement(a.Fragment,null,a.createElement(s.x,{pos:"relative"},a.createElement(d.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),a.createElement(m._,{noSubmit:!0})),a.createElement(c.Z,{justify:"center",mt:"xl"},a.createElement(u.z,{onClick:o},"Toggle overlay")))}};var f=t(9314);let y=(0,i.A)(l.us.LoadingOverlay);function b(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,n.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(o.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,n.jsxs)(o.p,{children:["You can pass props down to the ",(0,n.jsx)(o.a,{href:"/core/loader",children:"Loader"})," component with ",(0,n.jsx)(o.code,{children:"loaderProps"}),":"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(o.h2,{id:"custom-inline-loaders",children:"Custom inline loaders"}),"\n",(0,n.jsxs)(o.p,{children:["To replace default loader with any custom content, set ",(0,n.jsx)(o.code,{children:"loaderProps={{ children: <div>Your content</div> }}"}),".\nYou can put any React node inside ",(0,n.jsx)(o.code,{children:"loaderProps.children"}),":"]}),"\n",(0,n.jsx)(t,{data:f.l})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,{...e,children:(0,n.jsx)(b,{...e})})}}},function(e){e.O(0,[370,5819,2775,6926,2857,9774,2888,179],function(){return e(e.s=37779)}),_N_E=e.O()}]);
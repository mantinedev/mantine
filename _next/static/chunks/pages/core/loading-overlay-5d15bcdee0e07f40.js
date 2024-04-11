(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79705],{52947:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return t(22539)}])},22539:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return b}});var r=t(52322),n=t(45392),i=t(2784),l=t(28559),a=t(20992),s=t(93010),d=t(17115),c=t(3900),u=t(3789);let p=`
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
}`,m={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:p,component:function(){let[e,{toggle:o}]=(0,c.q)(!1);return i.createElement(i.Fragment,null,i.createElement(l.x,{pos:"relative"},i.createElement(a.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),i.createElement(u._,{noSubmit:!0})),i.createElement(s.Z,{justify:"center",mt:"xl"},i.createElement(d.z,{onClick:o},"Toggle overlay")))}},h=`
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
}`,v={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:h,component:function(){let[e,{toggle:o}]=(0,c.q)(!0);return i.createElement(i.Fragment,null,i.createElement(l.x,{pos:"relative"},i.createElement(a.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),i.createElement(u._,{noSubmit:!0})),i.createElement(s.Z,{justify:"center",mt:"xl"},i.createElement(d.z,{onClick:o},"Toggle overlay")))}};var x=t(12209),f=t(79016),g=t(33638);let y=(0,f.A)(g.us.LoadingOverlay);function j(e){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,r.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,r.jsx)(t,{data:m}),"\n",(0,r.jsx)(o.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,r.jsxs)(o.p,{children:["You can pass props down to the ",(0,r.jsx)(o.a,{href:"/core/loader",children:"Loader"})," component with ",(0,r.jsx)(o.code,{children:"loaderProps"}),":"]}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(o.h2,{id:"custom-inline-loaders",children:"Custom inline loaders"}),"\n",(0,r.jsxs)(o.p,{children:["To replace default loader with any custom content, set ",(0,r.jsx)(o.code,{children:"loaderProps={{ children: <div>Your content</div> }}"}),".\nYou can put any React node inside ",(0,r.jsx)(o.code,{children:"loaderProps.children"}),":"]}),"\n",(0,r.jsx)(t,{data:x.l})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(y,{...e,children:(0,r.jsx)(j,{...e})})}}},function(e){e.O(0,[57938,17454,47747,88320,36503,49774,92888,40179],function(){return e(e.s=52947)}),_N_E=e.O()}]);
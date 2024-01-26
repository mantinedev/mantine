(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41172],{16523:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/center",function(){return t(21087)}])},21087:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(24246),o=t(71670),i=t(27378),c=t(62150),l=t(56589);let a=`
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`,m={type:"code",code:a,component:function(){return i.createElement(c.M,{maw:400,h:100,bg:"var(--mantine-color-gray-light)"},i.createElement(l.x,{bg:"var(--mantine-color-blue-light)"},"All elements inside Center are centered"))}};var s=t(87393),u=t(9136),d=t(71078);let h=`
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`,f={type:"code",code:h,component:function(){return i.createElement(u.e,{href:"https://mantine.dev",target:"_blank"},i.createElement(c.M,{inline:!0},i.createElement(s.Z,{style:{width:(0,d.h)(12),height:(0,d.h)(12)},className:"mantine-rotate-rtl"}),i.createElement(l.x,{ml:5},"Back to Mantine website")))}};var p=t(3916),x=t(54568);let g=(0,p.A)(x.us.Center);function b(e){let n={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:t,Polymorphic:i}=n;return t||C("Demo",!0),i||C("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:m}),"\n",(0,r.jsx)(n.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.code,{children:"Center"})," with inline elements set ",(0,r.jsx)(n.code,{children:"inline"})," prop.\nFor example, you can center link icon and label:"]}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(i,{defaultElement:"div",changeToElement:"button",component:"Center"})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(b,{...e})})}function C(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62150:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var r=t(27378),o=t(96739),i=t(6231),c=t(56589),l=t(50332),a={root:"m-4451eb3a"};let m={},s=(0,l.b)((e,n)=>{let t=(0,o.w)("Center",m,e),{classNames:l,className:s,style:u,styles:d,unstyled:h,vars:f,inline:p,mod:x,...g}=t,b=(0,i.y)({name:"Center",props:t,classes:a,className:s,style:u,classNames:l,styles:d,unstyled:h,vars:f});return r.createElement(c.x,{ref:n,mod:[{inline:p},x],...b("root"),...g})});s.classes=a,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=16523)}),_N_E=e.O()}]);
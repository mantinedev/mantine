(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1172],{16523:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/center",function(){return t(21087)}])},21087:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(24246),o=t(71670),i=t(3916),c=t(30289),l=t(27378),a=t(62150),m=t(56589);let s=`
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`,u={type:"code",code:s,component:function(){return l.createElement(a.M,{maw:400,h:100,bg:"var(--mantine-color-gray-light)"},l.createElement(m.x,{bg:"var(--mantine-color-blue-light)"},"All elements inside Center are centered"))}};var d=t(87393),h=t(9136),f=t(71078);let p=`
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
`,x={type:"code",code:p,component:function(){return l.createElement(h.e,{href:"https://mantine.dev",target:"_blank"},l.createElement(a.M,{inline:!0},l.createElement(d.Z,{style:{width:(0,f.h)(12),height:(0,f.h)(12)},className:"mantine-rotate-rtl"}),l.createElement(m.x,{ml:5},"Back to Mantine website")))}},g=(0,i.A)(c.us.Center);function b(e){let n={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:t,Polymorphic:i}=n;return t||C("Demo",!0),i||C("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(n.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.code,{children:"Center"})," with inline elements set ",(0,r.jsx)(n.code,{children:"inline"})," prop.\nFor example, you can center link icon and label:"]}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(i,{defaultElement:"div",changeToElement:"button",component:"Center"})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(b,{...e})})}function C(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62150:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var r=t(27378),o=t(96739),i=t(6231),c=t(56589),l=t(50332),a={root:"m-4451eb3a"};let m={},s=(0,l.b)((e,n)=>{let t=(0,o.w)("Center",m,e),{classNames:l,className:s,style:u,styles:d,unstyled:h,vars:f,inline:p,...x}=t,g=(0,i.y)({name:"Center",props:t,classes:a,className:s,style:u,classNames:l,styles:d,unstyled:h,vars:f});return r.createElement(c.x,{ref:n,mod:{inline:p},...g("root"),...x})});s.classes=a,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=16523)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45525],{86171:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},5718:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return i(57374)}])},57374:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return x}});var n=i(24246),o=i(71670),r=i(29367),a=i(27378),c=i(86171),l=i(16659),s=i(71078),Notification=i(2303);let u=`
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`,m={type:"code",component:function(){let t=a.createElement(c.Z,{style:{width:(0,s.h)(20),height:(0,s.h)(20)}}),e=a.createElement(l.Z,{style:{width:(0,s.h)(20),height:(0,s.h)(20)}});return a.createElement(a.Fragment,null,a.createElement(Notification.P,{icon:t,color:"red",title:"Bummer!"},"Something went wrong"),a.createElement(Notification.P,{icon:e,color:"teal",title:"All good!",mt:"md"},"Everything is fine"))},dimmed:!0,maxWidth:400,centered:!0,code:u};var d=i(56589),p=i(37951);let h=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,f={type:"styles-api",data:p.$,centered:!0,dimmed:!0,component:function(t){return a.createElement(d.x,{maw:400,mx:"auto"},a.createElement(Notification.P,{title:"Please wait",loading:!0,withCloseButton:!1,...t},"The application is trying to reconnect to the server"),a.createElement(Notification.P,{mt:"md",icon:a.createElement(l.Z,{size:"1.2rem"}),title:"We notify you that",...t},"You are now obligated to give a star to Mantine project on GitHub"))},code:h};var y=i(3916),g=i(54568);let b=(0,y.A)(g.us.Notification);function w(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components},{Demo:i,StylesApiSelectors:a}=e;return i||N("Demo",!0),a||N("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,n.jsx)(e.a,{href:"/x/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,n.jsx)(i,{data:r.g}),"\n",(0,n.jsx)(e.h2,{id:"with-icon",children:"With icon"}),"\n",(0,n.jsx)(i,{data:m}),"\n",(0,n.jsx)(a,{component:"Notification"}),"\n",(0,n.jsx)(i,{data:f}),"\n",(0,n.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(e.p,{children:["To support screen readers, set close button aria-label or title with ",(0,n.jsx)(e.code,{children:"closeButtonProps"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(b,{...t,children:(0,n.jsx)(w,{...t})})}function N(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},29367:function(t,e,i){"use strict";i.d(e,{g:function(){return c}});var n=i(27378),o=i(56589),r=i(2303);let a=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,c={type:"configurator",component:function(t){return n.createElement(o.x,{maw:400,mx:"auto"},n.createElement(r.P,{onClose:()=>{},...t}))},centered:!0,code:a,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(t){t.O(0,[30370,15819,2775,49774,92888,40179],function(){return t(t.s=5718)}),_N_E=t.O()}]);
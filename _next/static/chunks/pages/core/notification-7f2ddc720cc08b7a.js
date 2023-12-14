(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5525],{16659:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},86171:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},5718:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return n(57374)}])},57374:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var o=n(24246),i=n(71670),r=n(29367),c=n(27378),a=n(86171),l=n(16659),s=n(71078),Notification=n(2303);let u=`
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
`,m={type:"code",component:function(){let t=c.createElement(a.Z,{style:{width:(0,s.h)(20),height:(0,s.h)(20)}}),e=c.createElement(l.Z,{style:{width:(0,s.h)(20),height:(0,s.h)(20)}});return c.createElement(c.Fragment,null,c.createElement(Notification.P,{icon:t,color:"red",title:"Bummer!"},"Something went wrong"),c.createElement(Notification.P,{icon:e,color:"teal",title:"All good!",mt:"md"},"Everything is fine"))},dimmed:!0,maxWidth:400,centered:!0,code:u};var d=n(56589),p=n(37951);let h=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,f={type:"styles-api",data:p.$,centered:!0,dimmed:!0,component:function(t){return c.createElement(d.x,{maw:400,mx:"auto"},c.createElement(Notification.P,{title:"Please wait",loading:!0,withCloseButton:!1,...t},"The application is trying to reconnect to the server"),c.createElement(Notification.P,{mt:"md",icon:c.createElement(l.Z,{size:"1.2rem"}),title:"We notify you that",...t},"You are now obligated to give a star to Mantine project on GitHub"))},code:h};var y=n(3916),g=n(30289);let b=(0,y.A)(g.us.Notification);function w(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components},{Demo:n,StylesApiSelectors:c}=e;return n||N("Demo",!0),c||N("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,o.jsx)(e.a,{href:"/others/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,o.jsx)(n,{data:r.g}),"\n",(0,o.jsx)(e.h2,{id:"with-icon",children:"With icon"}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(c,{component:"Notification"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(e.p,{children:["To support screen readers, set close button aria-label or title with ",(0,o.jsx)(e.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(b,{...t,children:(0,o.jsx)(w,{...t})})}function N(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},29367:function(t,e,n){"use strict";n.d(e,{g:function(){return a}});var o=n(27378),i=n(56589),r=n(2303);let c=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,a={type:"configurator",component:function(t){return o.createElement(i.x,{maw:400,mx:"auto"},o.createElement(r.P,{onClose:()=>{},...t}))},centered:!0,code:c,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(t){t.O(0,[370,5819,2775,9774,2888,179],function(){return t(t.s=5718)}),_N_E=t.O()}]);
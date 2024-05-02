(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45525],{5858:function(t,i,e){"use strict";e.d(i,{Z:function(){return o}});var o=(0,e(99882).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},47982:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return e(69141)}])},69141:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return j}});var o=e(52322),n=e(45392),r=e(27445),c=e(5858),a=e(92856),l=e(58898),Notification=e(41473);let s=`
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
`,u={type:"code",component:function(){let t=(0,o.jsx)(c.Z,{style:{width:(0,l.h)(20),height:(0,l.h)(20)}}),i=(0,o.jsx)(a.Z,{style:{width:(0,l.h)(20),height:(0,l.h)(20)}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Notification.P,{icon:t,color:"red",title:"Bummer!",children:"Something went wrong"}),(0,o.jsx)(Notification.P,{icon:i,color:"teal",title:"All good!",mt:"md",children:"Everything is fine"})]})},dimmed:!0,maxWidth:400,centered:!0,code:s};var d=e(28559),h=e(50610);let p=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,m={type:"styles-api",data:h.$,centered:!0,dimmed:!0,component:function(t){return(0,o.jsxs)(d.x,{maw:400,mx:"auto",children:[(0,o.jsx)(Notification.P,{title:"Please wait",loading:!0,withCloseButton:!1,...t,children:"The application is trying to reconnect to the server"}),(0,o.jsx)(Notification.P,{mt:"md",icon:(0,o.jsx)(a.Z,{size:"1.2rem"}),title:"We notify you that",...t,children:"You are now obligated to give a star to Mantine project on GitHub"})]})},code:p};var f=e(79016),y=e(33638);let x=(0,f.A)(y.us.Notification);function g(t){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components},{Demo:e,StylesApiSelectors:c}=i;return e||b("Demo",!0),c||b("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(i.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,o.jsx)(i.a,{href:"/x/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,o.jsx)(e,{data:r.g}),"\n",(0,o.jsx)(i.h2,{id:"with-icon",children:"With icon"}),"\n",(0,o.jsx)(e,{data:u}),"\n",(0,o.jsx)(c,{component:"Notification"}),"\n",(0,o.jsx)(e,{data:m}),"\n",(0,o.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(i.p,{children:["To support screen readers, set close button aria-label or title with ",(0,o.jsx)(i.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function j(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...t,children:(0,o.jsx)(g,{...t})})}function b(t,i){throw Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},27445:function(t,i,e){"use strict";e.d(i,{g:function(){return a}});var o=e(52322),n=e(28559),r=e(41473);let c=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,a={type:"configurator",component:function(t){return(0,o.jsx)(n.x,{maw:400,mx:"auto",children:(0,o.jsx)(r.P,{onClose:()=>{},...t})})},centered:!0,code:c,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(t){t.O(0,[57938,17454,47747,49774,92888,40179],function(){return t(t.s=47982)}),_N_E=t.O()}]);
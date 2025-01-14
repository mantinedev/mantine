(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45525],{47982:function(t,i,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return o(69141)}])},69141:function(t,i,o){"use strict";o.r(i),o.d(i,{default:function(){return g}});var e=o(52322),n=o(45392),r=o(27445),c=o(12980),a=o(9705),l=o(41473);let s={type:"code",component:function(){let t=(0,e.jsx)(c.Z,{size:20}),i=(0,e.jsx)(a.Z,{size:20});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.P,{icon:t,color:"red",title:"Bummer!",children:"Something went wrong"}),(0,e.jsx)(l.P,{icon:i,color:"teal",title:"All good!",mt:"md",children:"Everything is fine"})]})},dimmed:!0,maxWidth:400,centered:!0,code:`
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';

function Demo() {
  const xIcon = <IconX size={20} />;
  const checkIcon = <IconCheck size={20} />;

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
`};var u=o(28559),d=o(50610);let p=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,f={type:"styles-api",data:d.$,centered:!0,dimmed:!0,component:function(t){return(0,e.jsxs)(u.x,{maw:400,mx:"auto",children:[(0,e.jsx)(l.P,{title:"Please wait",loading:!0,withCloseButton:!1,...t,children:"The application is trying to reconnect to the server"}),(0,e.jsx)(l.P,{mt:"md",icon:(0,e.jsx)(a.Z,{size:18}),title:"We notify you that",...t,children:"You are now obligated to give a star to Mantine project on GitHub"})]})},code:p};var m=o(54078),h=o(15019);let x=(0,m.A)(h.us.Notification);function y(t){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components},{Demo:o,StylesApiSelectors:c}=i;return o||j("Demo",!0),c||j("StylesApiSelectors",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsxs)(i.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,e.jsx)(i.a,{href:"/x/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,e.jsx)(o,{data:r.g}),"\n",(0,e.jsx)(i.h2,{id:"with-icon",children:"With icon"}),"\n",(0,e.jsx)(o,{data:s}),"\n",(0,e.jsx)(c,{component:"Notification"}),"\n",(0,e.jsx)(o,{data:f}),"\n",(0,e.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,e.jsxs)(i.p,{children:["To support screen readers, set close button aria-label or title with ",(0,e.jsx)(i.code,{children:"closeButtonProps"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function g(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(x,{...t,children:(0,e.jsx)(y,{...t})})}function j(t,i){throw Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},12980:function(t,i,o){"use strict";o.d(i,{Z:function(){return e}});var e=(0,o(73681).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},27445:function(t,i,o){"use strict";o.d(i,{g:function(){return c}});var e=o(52322),n=o(28559),r=o(41473);let c={type:"configurator",component:function(t){return(0,e.jsx)(n.x,{maw:400,mx:"auto",children:(0,e.jsx)(r.P,{onClose:()=>{},...t})})},centered:!0,code:`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(t){t.O(0,[61177,66748,61639,92888,49774,40179],function(){return t(t.s=47982)}),_N_E=t.O()}]);
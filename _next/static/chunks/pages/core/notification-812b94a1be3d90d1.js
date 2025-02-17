(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9677],{48209:(t,i,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return o(24704)}])},24704:(t,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>g});var e=o(31085),n=o(71184),r=o(72041),a=o(3650),c=o(11466),l=o(58265);let s={type:"code",component:function(){let t=(0,e.jsx)(a.A,{size:20}),i=(0,e.jsx)(c.A,{size:20});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{icon:t,color:"red",title:"Bummer!",children:"Something went wrong"}),(0,e.jsx)(l.E,{icon:i,color:"teal",title:"All good!",mt:"md",children:"Everything is fine"})]})},dimmed:!0,maxWidth:400,centered:!0,code:`
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
`};var d=o(34056),u=o(97657);let p=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,m={type:"styles-api",data:u.y,centered:!0,dimmed:!0,component:function(t){return(0,e.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,e.jsx)(l.E,{title:"Please wait",loading:!0,withCloseButton:!1,...t,children:"The application is trying to reconnect to the server"}),(0,e.jsx)(l.E,{mt:"md",icon:(0,e.jsx)(c.A,{size:18}),title:"We notify you that",...t,children:"You are now obligated to give a star to Mantine project on GitHub"})]})},code:p};var h=o(85954),f=o(38215);let y=(0,h.P)(f.XZ.Notification);function x(t){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...t.components},{Demo:o,StylesApiSelectors:a}=i;return o||j("Demo",!0),a||j("StylesApiSelectors",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsxs)(i.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,e.jsx)(i.a,{href:"/x/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,e.jsx)(o,{data:r.c}),"\n",(0,e.jsx)(i.h2,{id:"with-icon",children:"With icon"}),"\n",(0,e.jsx)(o,{data:s}),"\n",(0,e.jsx)(a,{component:"Notification"}),"\n",(0,e.jsx)(o,{data:m}),"\n",(0,e.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,e.jsxs)(i.p,{children:["To support screen readers, set close button aria-label or title with ",(0,e.jsx)(i.code,{children:"closeButtonProps"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function g(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(y,{...t,children:(0,e.jsx)(x,{...t})})}function j(t,i){throw Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},3650:(t,i,o)=>{"use strict";o.d(i,{A:()=>e});var e=(0,o(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},72041:(t,i,o)=>{"use strict";o.d(i,{c:()=>a});var e=o(31085),n=o(34056),r=o(58265);let a={type:"configurator",component:function(t){return(0,e.jsx)(n.a,{maw:400,mx:"auto",children:(0,e.jsx)(r.E,{onClose:()=>{},...t})})},centered:!0,code:`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},t=>{var i=i=>t(t.s=i);t.O(0,[67456,39699,68831,90636,46593,38792],()=>i(48209)),_N_E=t.O()}]);
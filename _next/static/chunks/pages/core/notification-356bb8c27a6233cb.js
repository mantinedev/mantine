(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9677],{48209:(t,e,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return i(24704)}])},24704:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>f});var o=i(31085),n=i(71184),a=i(72041),r=i(3650),s=i(11466),c=i(58265);let l={type:"code",component:function(){let t=(0,o.jsx)(r.A,{size:20}),e=(0,o.jsx)(s.A,{size:20});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.E,{icon:t,color:"red",title:"Bummer!",children:"Something went wrong"}),(0,o.jsx)(c.E,{icon:e,color:"teal",title:"All good!",mt:"md",children:"Everything is fine"})]})},dimmed:!0,maxWidth:400,centered:!0,code:`
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
`};var d=i(34056),h=i(97657);let p=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,u={type:"styles-api",data:h.y,centered:!0,dimmed:!0,component:function(t){return(0,o.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,o.jsx)(c.E,{title:"Please wait",loading:!0,withCloseButton:!1,...t,children:"The application is trying to reconnect to the server"}),(0,o.jsx)(c.E,{mt:"md",icon:(0,o.jsx)(s.A,{size:18}),title:"We notify you that",...t,children:"You are now obligated to give a star to Mantine project on GitHub"})]})},code:p};var v=i(18675),y=i(20017);let g=(0,v.P)(y.XZ.Notification);function m(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...t.components},{Demo:i,StylesApiSelectors:r}=e;return i||k("Demo",!0),r||k("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,o.jsx)(e.a,{href:"/x/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,o.jsx)(i,{data:a.c}),"\n",(0,o.jsx)(e.h2,{id:"with-icon",children:"With icon"}),"\n",(0,o.jsx)(i,{data:l}),"\n",(0,o.jsx)(r,{component:"Notification"}),"\n",(0,o.jsx)(i,{data:u}),"\n",(0,o.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(e.p,{children:["To support screen readers, set close button aria-label or title with ",(0,o.jsx)(e.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Notification\n      closeButtonProps={{ 'aria-label': 'Hide notification' }}\n    />\n  );\n}\n"})})]})}function f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(g,{...t,children:(0,o.jsx)(m,{...t})})}function k(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},3650:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var o=(0,i(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},72041:(t,e,i)=>{"use strict";i.d(e,{c:()=>r});var o=i(31085),n=i(34056),a=i(58265);let r={type:"configurator",component:function(t){return(0,o.jsx)(n.a,{maw:400,mx:"auto",children:(0,o.jsx)(a.E,{onClose:()=>{},...t})})},centered:!0,code:`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},t=>{var e=e=>t(t.s=e);t.O(0,[18675,90636,46593,38792],()=>e(48209)),_N_E=t.O()}]);
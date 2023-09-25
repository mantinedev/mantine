(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5525],{33507:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},5337:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/notification",function(){return n(8289)}])},8289:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var o=n(85893),i=n(11151),r=n(19905),a=n(9904),c=n(76915),l=n(67294),s=n(86171),u=n(16659),p=n(72622),h=n(36523);let d=`
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
`,f={type:"code",component:function(){let t=l.createElement(s.Z,{style:{width:(0,p.h)(20),height:(0,p.h)(20)}}),e=l.createElement(u.Z,{style:{width:(0,p.h)(20),height:(0,p.h)(20)}});return l.createElement(l.Fragment,null,l.createElement(h.P,{icon:t,color:"red",title:"Bummer!"},"Something went wrong"),l.createElement(h.P,{icon:e,color:"teal",title:"All good!",mt:"md"},"Everything is fine"))},dimmed:!0,maxWidth:400,centered:!0,code:d};var m=n(81110),y=n(48223),g=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(t,e,n)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M=(t,e)=>{for(var n in e||(e={}))b.call(e,n)&&w(t,n,e[n]);if(v)for(var n of v(e))k.call(e,n)&&w(t,n,e[n]);return t};let j=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`,x={type:"styles-api",data:y.$,centered:!0,dimmed:!0,component:function(t){return l.createElement(m.x,{maw:400,mx:"auto"},l.createElement(h.P,M({title:"Please wait",loading:!0,withCloseButton:!1},t),"The application is trying to reconnect to the server"),l.createElement(h.P,M({mt:"md",icon:l.createElement(u.Z,{size:"1.2rem"}),title:"We notify you that"},t),"You are now obligated to give a star to Mantine project on GitHub"))},code:j},E=(0,r.A)(a.us.Notification);function N(t){let e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,i.ah)(),t.components),{Demo:n,StylesApiSelectors:r}=e;return n||I("Demo",!0),r||I("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["Notification is a base component for notification system.\nBuild your own or use ",(0,o.jsx)(e.a,{href:"/others/notifications/",children:"@mantine/notifications"})," package."]}),"\n",(0,o.jsx)(n,{data:c.g}),"\n",(0,o.jsx)(e.h2,{id:"with-icon",children:"With icon"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(r,{component:"Notification"}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(e.p,{children:["To support screen readers, set close button aria-label or title with ",(0,o.jsx)(e.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { Notification } from '@mantine/core';\n\nfunction Demo() {\n  return <Notification closeButtonProps={{ 'aria-label': 'Hide notification' }} />;\n}\n"})})]})}var Z=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,Object.assign({},t,{children:(0,o.jsx)(N,t)}))};function I(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},86171:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},76915:function(t,e,n){"use strict";n.d(e,{g:function(){return d}});var o=n(67294),i=n(81110),r=n(36523),a=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&u(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&u(t,n,e[n]);return t};let h=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,d={type:"configurator",component:function(t){return o.createElement(i.x,{maw:400,mx:"auto"},o.createElement(r.P,p({onClose:()=>{}},t)))},centered:!0,code:h,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(t){t.O(0,[8992,178,9774,2888,179],function(){return t(t.s=5337)}),_N_E=t.O()}]);
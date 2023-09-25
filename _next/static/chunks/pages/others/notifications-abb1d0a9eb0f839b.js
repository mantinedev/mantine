(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{33507:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46180:function(i,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/notifications",function(){return e(47583)}])},47583:function(i,n,e){"use strict";e.r(n),e.d(n,{default:function(){return q}});var t=e(85893),o=e(11151),s=e(19905),a=e(9904),c=e(67294),l=e(14469),r=e(30644);let d=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! \u{1F925}',
        })
      }
    >
      Show notification
    </Button>
  );
}`,u={type:"code",code:d,centered:!0,component:function(){return c.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({title:"Default notification",message:"Hey there, your code is awesome! \uD83E\uDD25"})},"Show notification")}};var h=e(76915),f=e(16262),m={root:"m-45c99571",description:"m-436b008d",title:"m-73829fa9",closeButton:"m-979213db"};let p=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Notification with custom styles',
          message: 'It is default blue',
          classNames: classes,
        })
      }
    >
      Show customized notification
    </Button>
  );
}`,x=`
.root {
  background-color: var(--notification-color, var(--mantine-primary-color-filled));

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`,j={type:"code",centered:!0,component:function(){return c.createElement(f.Z,{justify:"center"},c.createElement(l.z,{onClick:()=>r.N9.show({title:"Notification with custom styles",message:"It is default blue",classNames:m})},"Default notification"),c.createElement(l.z,{color:"red",onClick:()=>r.N9.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:m})},"Error notification"))},code:[{fileName:"Demo.tsx",code:p,language:"tsx"},{fileName:"Demo.module.css",code:x,language:"css"}]},g=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`,y={type:"code",code:g,centered:!0,component:function(){return c.createElement(l.z,{variant:"outline",onClick:()=>{Array(10).fill(0).forEach((i,n)=>{setTimeout(()=>{r.N9.show({title:`Notification ${n+1}`,message:"Most notifications are added to queue"})},200*n)})}},"Show 10 notifications")}},v=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,w={type:"code",code:v,component:function(){return c.createElement(f.Z,{justify:"center"},c.createElement(l.z,{variant:"outline",onClick:()=>{Array(10).fill(0).forEach((i,n)=>{r.N9.show({title:`Notification ${n+1}`,message:"Most notifications are added to queue",autoClose:!1})})}},"Show 10 notifications"),c.createElement(l.z,{variant:"outline",color:"gray",onClick:()=>r.N9.cleanQueue()},"Clean queue"),c.createElement(l.z,{variant:"outline",color:"red",onClick:()=>r.N9.clean()},"Clean all"))}};var N=e(16659),b=e(72622);let k=`
import { Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`,C={type:"code",code:k,centered:!0,component:function(){return c.createElement(l.z,{variant:"outline",onClick:()=>{let i=r.N9.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,withCloseButton:!1});setTimeout(()=>{r.N9.update({id:i,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:c.createElement(N.Z,{style:{width:(0,b.h)(18),height:(0,b.h)(18)}}),loading:!1,autoClose:2e3})},3e3)}},"Show update notification")}},M=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`,B={type:"code",code:M,component:function(){return c.createElement(f.Z,{justify:"center"},c.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({message:"I will close in 4 seconds"})},"Notifications Provider timeout"),c.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({message:"I will close in 500ms",autoClose:500})},"Closes in 500ms"),c.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1})},"Never closes automatically"))}},E=(0,s.A)(a.us.Notifications);function I(i){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,o.ah)(),i.components),{InstallScript:e,Demo:s}=n;return s||D("Demo",!0),e||D("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(e,{packages:"@mantine/notifications"}),"\n",(0,t.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/notifications/styles.css';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"Notifications"})," component anywhere in your application. Note that:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is required to render ",(0,t.jsx)(n.code,{children:"Notifications"})," component inside ",(0,t.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})]}),"\n",(0,t.jsxs)(n.li,{children:["You do not need to wrap your application with ",(0,t.jsx)(n.code,{children:"Notifications"})," component – it is not a provider, it is a regular component"]}),"\n",(0,t.jsxs)(n.li,{children:["You should not render multiple ",(0,t.jsx)(n.code,{children:"Notifications"})," components – if you do that, your notifications will be duplicated"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <Notifications />\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"All set! You can now use all notifications system features."}),"\n",(0,t.jsx)(s,{data:u}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/notifications"})," package exports ",(0,t.jsx)(n.code,{children:"notifications"})," object with the following functions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.show"})," – adds given notification to the notifications list or queue, depending on the current state and ",(0,t.jsx)(n.code,{children:"limit"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.hide"})," – removes notification with given ",(0,t.jsx)(n.code,{children:"id"})," from the notifications state and queue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.update"})," – updates notification that was previously added to the state or queue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.updateState"})," – executes given callback with current notifications state and queue as an argument and updates state with returned value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.clean"})," – removes all notifications from the notifications state and queue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notifications.cleanQueue"})," – removes all notifications from the queue"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All functions can be imported from ",(0,t.jsx)(n.code,{children:"@mantine/notifications"})," package and can be used in any part of your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also import these functions separately:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// alias functions\nimport {\n  showNotification, // notifications.show\n  hideNotification, // notifications.hide\n  updateNotification, // notifications.update\n  updateNotificationsState, // notifications.updateState\n  cleanNotifications, // notifications.clean\n  cleanNotificationsQueue, // notifications.cleanQueue\n} from '@mantine/notifications';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"notification-props",children:"Notification props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"notifications.show"})," and ",(0,t.jsx)(n.code,{children:"notification.update"})," functions can be called with an object that has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," – notification id, it is used to update and remove notifications, by default ",(0,t.jsx)(n.code,{children:"id"})," is randomly generated"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withBorder"})," – determines whether notification should have a border"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withCloseButton"})," – determines whether the close button should be visible"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onClose"})," – calls when notification is unmounted"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onOpen"})," – calls when notification is mounted"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autoClose"})," – defines timeout in ms on which notification will be automatically closed, use ",(0,t.jsx)(n.code,{children:"false"})," to disable auto close"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"message"})," – required notification body"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"color, icon, title, radius, className, style, loading"})," – props passed down to the ",(0,t.jsx)(n.a,{href:"/core/notification/",children:"Notification"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All properties except ",(0,t.jsx)(n.code,{children:"message"})," are optional."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { IconX } from '@tabler/icons-react';\nimport { notifications } from '@mantine/notifications';\n\n// Bare minimum – message is required for all notifications\nnotifications.show({ message: 'Hello' });\n\n// Most used notification props\nnotifications.show({\n  id: 'hello-there',\n  withCloseButton: true,\n  onClose: () => console.log('unmounted'),\n  onOpen: () => console.log('mounted'),\n  autoClose: 5000,\n  title: \"You've been compromised\",\n  message: 'Leave the building immediately',\n  color: 'red',\n  icon: <IconX />,\n  className: 'my-notification-class',\n  style: { backgroundColor: 'red' },\n  loading: false,\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notifications preview (",(0,t.jsx)(n.code,{children:"message"})," prop used as ",(0,t.jsx)(n.code,{children:"children"}),"):"]}),"\n",(0,t.jsx)(s,{data:h.g,configuratorProps:{includeCode:!1}}),"\n",(0,t.jsx)(n.h2,{id:"customize-notification-styles",children:"Customize notification styles"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"style"}),", ",(0,t.jsx)(n.code,{children:"className"})," or ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," ",(0,t.jsx)(n.code,{children:"classNames"}),", ",(0,t.jsx)(n.code,{children:"styles"})," props to customize notification styles.\nUsually, it is better to override ",(0,t.jsx)(n.a,{href:"/core/notification",children:"Notification"})," styles with ",(0,t.jsx)(n.code,{children:"classNames"})," prop in the ",(0,t.jsx)(n.a,{href:"/theming/theme-object/",children:"theme object"}),"."]}),"\n",(0,t.jsx)(s,{data:j}),"\n",(0,t.jsx)(n.h2,{id:"notifications-container-position",children:"Notifications container position"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Notifications"})," container has fixed position inside, it is rendered inside ",(0,t.jsx)(n.a,{href:"/core/portal/",children:"Portal"})," by default.\nPosition cannot be changed per notification. ",(0,t.jsx)(n.code,{children:"Notifications"})," supports the following positions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"top-left"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"top-right"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"top-center"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"bottom-left"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"bottom-right"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"bottom-center"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications position=\"top-right\" zIndex={1000} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"limit-and-queue",children:"Limit and queue"}),"\n",(0,t.jsxs)(n.p,{children:["You can limit maximum number of notifications that are displayed at a time by setting\n",(0,t.jsx)(n.code,{children:"limit"})," prop on ",(0,t.jsx)(n.code,{children:"Notifications"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications limit={5} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All notifications added after the ",(0,t.jsx)(n.code,{children:"limit"})," was reached are added to the queue\nand displayed when notification from current state is hidden."]}),"\n",(0,t.jsx)(s,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"remove-notifications-from-state-and-queue",children:"Remove notifications from state and queue"}),"\n",(0,t.jsxs)(n.p,{children:["To remove specific notification from state or queue use ",(0,t.jsx)(n.code,{children:"notifications.hide"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nconst id = notifications.show({ message: 'Hello!' });\nnotifications.hide(id);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"notifications.cleanQueue"})," function to remove all notifications from the queue and\n",(0,t.jsx)(n.code,{children:"notifications.clean"})," to remove all notifications both from the state and queue:"]}),"\n",(0,t.jsx)(s,{data:w}),"\n",(0,t.jsx)(n.h2,{id:"update-notification",children:"Update notification"}),"\n",(0,t.jsx)(s,{data:C}),"\n",(0,t.jsx)(n.h2,{id:"auto-close",children:"Auto close"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure auto close timeout with ",(0,t.jsx)(n.code,{children:"Notifications"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\n// All notifications will be closed automatically in 4000ms\nfunction Demo() {\n  return <Notifications autoClose={4000} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or per notification in ",(0,t.jsx)(n.code,{children:"notifications.show"}),"/",(0,t.jsx)(n.code,{children:"notifications.update"})," functions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nnotifications.show({\n  message: 'I will close in 500ms seconds',\n  autoClose: 500,\n});\n\nnotifications.update({\n  id: 'hello',\n  message: 'I will never close',\n  autoClose: false,\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"notifications.show"})," and ",(0,t.jsx)(n.code,{children:"notifications.update"})," functions ",(0,t.jsx)(n.code,{children:"autoClose"})," prop has higher priority."]}),"\n",(0,t.jsx)(s,{data:B})]})}var q=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,Object.assign({},i,{children:(0,t.jsx)(I,i)}))};function D(i,n){throw Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(i,n,e){"use strict";e.d(n,{Z:function(){return t}});var t=(0,e(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},76915:function(i,n,e){"use strict";e.d(n,{g:function(){return f}});var t=e(67294),o=e(81110),s=e(36523),a=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(i,n,e)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,u=(i,n)=>{for(var e in n||(n={}))l.call(n,e)&&d(i,e,n[e]);if(c)for(var e of c(n))r.call(n,e)&&d(i,e,n[e]);return i};let h=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,f={type:"configurator",component:function(i){return t.createElement(o.x,{maw:400,mx:"auto"},t.createElement(s.P,u({onClose:()=>{}},i)))},centered:!0,code:h,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(i){i.O(0,[8992,178,9774,2888,179],function(){return i(i.s=46180)}),_N_E=i.O()}]);
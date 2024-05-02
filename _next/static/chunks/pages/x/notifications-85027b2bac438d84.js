(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45811],{32548:function(i,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/notifications",function(){return o(15393)}])},15393:function(i,n,o){"use strict";o.r(n),o.d(n,{default:function(){return I}});var e=o(52322),t=o(45392),s=o(17115),c=o(60048);let a=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
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
}`,l={type:"code",code:a,centered:!0,component:function(){return(0,e.jsx)(s.z,{onClick:()=>c.N9.show({title:"Default notification",message:"Hey there, your code is awesome! \uD83E\uDD25"}),children:"Show notification"})}};var r=o(27445),d=o(93010),u={root:"m_45c99571",description:"m_436b008d",title:"m_73829fa9",closeButton:"m_979213db"};let h=`
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Notification with custom styles',
            message: 'It is default blue',
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Notification with custom styles',
            message: 'It is red',
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}`,f=`
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
`,m={type:"code",centered:!0,component:function(){return(0,e.jsxs)(d.Z,{justify:"center",children:[(0,e.jsx)(s.z,{onClick:()=>c.N9.show({title:"Notification with custom styles",message:"It is default blue",classNames:u}),children:"Default notification"}),(0,e.jsx)(s.z,{color:"red",onClick:()=>c.N9.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:u}),children:"Error notification"})]})},code:[{fileName:"Demo.tsx",code:h,language:"tsx"},{fileName:"Demo.module.css",code:f,language:"scss"}]},p=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
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
}`,x={type:"code",code:p,centered:!0,component:function(){return(0,e.jsx)(s.z,{onClick:()=>{Array(10).fill(0).forEach((i,n)=>{setTimeout(()=>{c.N9.show({title:`Notification ${n+1}`,message:"Most notifications are added to queue"})},200*n)})},children:"Show 10 notifications"})}},j=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
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

      <Button color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,g={type:"code",code:j,component:function(){return(0,e.jsxs)(d.Z,{justify:"center",children:[(0,e.jsx)(s.z,{onClick:()=>{Array(10).fill(0).forEach((i,n)=>{c.N9.show({title:`Notification ${n+1}`,message:"Most notifications are added to queue",autoClose:!1})})},children:"Show 10 notifications"}),(0,e.jsx)(s.z,{color:"gray",onClick:()=>c.N9.cleanQueue(),children:"Clean queue"}),(0,e.jsx)(s.z,{color:"red",onClick:()=>c.N9.clean(),children:"Clean all"})]})}};var w=o(92856),y=o(58898);let N=`
import { Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
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
`,b={type:"code",code:N,centered:!0,component:function(){return(0,e.jsx)(s.z,{onClick:()=>{let i=c.N9.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,withCloseButton:!1});setTimeout(()=>{c.N9.update({id:i,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:(0,e.jsx)(w.Z,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),loading:!1,autoClose:2e3})},3e3)},children:"Show update notification"})}},C=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
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
`,v={type:"code",code:C,component:function(){return(0,e.jsxs)(d.Z,{justify:"center",children:[(0,e.jsx)(s.z,{onClick:()=>c.N9.show({message:"I will close in 4 seconds"}),children:"Notifications Provider timeout"}),(0,e.jsx)(s.z,{onClick:()=>c.N9.show({message:"I will close in 500ms",autoClose:500}),children:"Closes in 500ms"}),(0,e.jsx)(s.z,{onClick:()=>c.N9.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1}),children:"Never closes automatically"})]})}};var k=o(79016),B=o(33638);let q=(0,k.A)(B.us.Notifications);function D(i){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...i.components},{Demo:o,InstallScript:s}=n;return o||_("Demo",!0),s||_("InstallScript",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,e.jsx)(s,{packages:"@mantine/notifications"}),"\n",(0,e.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/notifications/styles.css';\n"})}),"\n",(0,e.jsxs)(n.p,{children:["Add ",(0,e.jsx)(n.code,{children:"Notifications"})," component anywhere in your application. Note that:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["It is required to render ",(0,e.jsx)(n.code,{children:"Notifications"})," component inside ",(0,e.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})]}),"\n",(0,e.jsxs)(n.li,{children:["You do not need to wrap your application with ",(0,e.jsx)(n.code,{children:"Notifications"})," component – it is not a provider, it is a regular component"]}),"\n",(0,e.jsxs)(n.li,{children:["You should not render multiple ",(0,e.jsx)(n.code,{children:"Notifications"})," components – if you do that, your notifications will be duplicated"]}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <Notifications />\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,e.jsx)(n.p,{children:"All set! You can now use all notifications system features."}),"\n",(0,e.jsx)(o,{data:l}),"\n",(0,e.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"@mantine/notifications"})," package exports ",(0,e.jsx)(n.code,{children:"notifications"})," object with the following functions:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.show"})," – adds given notification to the notifications list or queue, depending on the current state and ",(0,e.jsx)(n.code,{children:"limit"})]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.hide"})," – removes notification with given ",(0,e.jsx)(n.code,{children:"id"})," from the notifications state and queue"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.update"})," – updates notification that was previously added to the state or queue"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.updateState"})," – executes given callback with current notifications state and queue as an argument and updates state with returned value"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.clean"})," – removes all notifications from the notifications state and queue"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"notifications.cleanQueue"})," – removes all notifications from the queue"]}),"\n"]}),"\n",(0,e.jsxs)(n.p,{children:["All functions can be imported from ",(0,e.jsx)(n.code,{children:"@mantine/notifications"})," package and can be used in any part of your application:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n"})}),"\n",(0,e.jsx)(n.p,{children:"You can also import these functions separately:"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"// alias functions\nimport {\n  cleanNotifications, // notifications.clean\n  cleanNotificationsQueue, // notifications.cleanQueue\n  hideNotification, // notifications.hide\n  showNotification, // notifications.show\n  updateNotification, // notifications.update\n  updateNotificationsState, // notifications.updateState\n} from '@mantine/notifications';\n"})}),"\n",(0,e.jsx)(n.h2,{id:"notification-props",children:"Notification props"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"notifications.show"})," and ",(0,e.jsx)(n.code,{children:"notification.update"})," functions can be called with an object that has the following properties:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"id"})," – notification id, it is used to update and remove notifications, by default ",(0,e.jsx)(n.code,{children:"id"})," is randomly generated"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"withBorder"})," – determines whether notification should have a border"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"withCloseButton"})," – determines whether the close button should be visible"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"onClose"})," – calls when notification is unmounted"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"onOpen"})," – calls when notification is mounted"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"autoClose"})," – defines timeout in ms on which notification will be automatically closed, use ",(0,e.jsx)(n.code,{children:"false"})," to disable auto close"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"message"})," – required notification body"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"color, icon, title, radius, className, style, loading"})," – props passed down to the ",(0,e.jsx)(n.a,{href:"/core/notification/",children:"Notification"})," component"]}),"\n"]}),"\n",(0,e.jsxs)(n.p,{children:["All properties except ",(0,e.jsx)(n.code,{children:"message"})," are optional."]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { IconX } from '@tabler/icons-react';\nimport { notifications } from '@mantine/notifications';\n\n// Bare minimum – message is required for all notifications\nnotifications.show({ message: 'Hello' });\n\n// Most used notification props\nnotifications.show({\n  id: 'hello-there',\n  withCloseButton: true,\n  onClose: () => console.log('unmounted'),\n  onOpen: () => console.log('mounted'),\n  autoClose: 5000,\n  title: \"You've been compromised\",\n  message: 'Leave the building immediately',\n  color: 'red',\n  icon: <IconX />,\n  className: 'my-notification-class',\n  style: { backgroundColor: 'red' },\n  loading: false,\n});\n"})}),"\n",(0,e.jsxs)(n.p,{children:["Notifications preview (",(0,e.jsx)(n.code,{children:"message"})," prop used as ",(0,e.jsx)(n.code,{children:"children"}),"):"]}),"\n",(0,e.jsx)(o,{data:r.g,configuratorProps:{includeCode:!1}}),"\n",(0,e.jsx)(n.h2,{id:"customize-notification-styles",children:"Customize notification styles"}),"\n",(0,e.jsxs)(n.p,{children:["You can use ",(0,e.jsx)(n.code,{children:"style"}),", ",(0,e.jsx)(n.code,{children:"className"})," or ",(0,e.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," ",(0,e.jsx)(n.code,{children:"classNames"}),", ",(0,e.jsx)(n.code,{children:"styles"})," props to customize notification styles.\nUsually, it is better to override ",(0,e.jsx)(n.a,{href:"/core/notification",children:"Notification"})," styles with ",(0,e.jsx)(n.code,{children:"classNames"})," prop in the ",(0,e.jsx)(n.a,{href:"/theming/theme-object/",children:"theme object"}),"."]}),"\n",(0,e.jsx)(o,{data:m}),"\n",(0,e.jsx)(n.h2,{id:"notifications-container-position",children:"Notifications container position"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"Notifications"})," container has fixed position inside, it is rendered inside ",(0,e.jsx)(n.a,{href:"/core/portal/",children:"Portal"})," by default.\nPosition cannot be changed per notification. ",(0,e.jsx)(n.code,{children:"Notifications"})," supports the following positions:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"top-left"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"top-right"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"top-center"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"bottom-left"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"bottom-right"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.code,{children:"bottom-center"})}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications position=\"top-right\" zIndex={1000} />;\n}\n"})}),"\n",(0,e.jsx)(n.h2,{id:"limit-and-queue",children:"Limit and queue"}),"\n",(0,e.jsxs)(n.p,{children:["You can limit maximum number of notifications that are displayed at a time by setting\n",(0,e.jsx)(n.code,{children:"limit"})," prop on ",(0,e.jsx)(n.code,{children:"Notifications"}),":"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications limit={5} />;\n}\n"})}),"\n",(0,e.jsxs)(n.p,{children:["All notifications added after the ",(0,e.jsx)(n.code,{children:"limit"})," was reached are added to the queue\nand displayed when notification from current state is hidden."]}),"\n",(0,e.jsx)(o,{data:x}),"\n",(0,e.jsx)(n.h2,{id:"remove-notifications-from-state-and-queue",children:"Remove notifications from state and queue"}),"\n",(0,e.jsxs)(n.p,{children:["To remove specific notification from state or queue use ",(0,e.jsx)(n.code,{children:"notifications.hide"})," function:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nconst id = notifications.show({ message: 'Hello!' });\nnotifications.hide(id);\n"})}),"\n",(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:"notifications.cleanQueue"})," function to remove all notifications from the queue and\n",(0,e.jsx)(n.code,{children:"notifications.clean"})," to remove all notifications both from the state and queue:"]}),"\n",(0,e.jsx)(o,{data:g}),"\n",(0,e.jsx)(n.h2,{id:"update-notification",children:"Update notification"}),"\n",(0,e.jsx)(o,{data:b}),"\n",(0,e.jsx)(n.h2,{id:"auto-close",children:"Auto close"}),"\n",(0,e.jsxs)(n.p,{children:["You can configure auto close timeout with ",(0,e.jsx)(n.code,{children:"Notifications"}),":"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\n// All notifications will be closed automatically in 4000ms\nfunction Demo() {\n  return <Notifications autoClose={4000} />;\n}\n"})}),"\n",(0,e.jsxs)(n.p,{children:["Or per notification in ",(0,e.jsx)(n.code,{children:"notifications.show"}),"/",(0,e.jsx)(n.code,{children:"notifications.update"})," functions:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nnotifications.show({\n  message: 'I will close in 500ms seconds',\n  autoClose: 500,\n});\n\nnotifications.update({\n  id: 'hello',\n  message: 'I will never close',\n  autoClose: false,\n});\n"})}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"notifications.show"})," and ",(0,e.jsx)(n.code,{children:"notifications.update"})," functions ",(0,e.jsx)(n.code,{children:"autoClose"})," prop has higher priority."]}),"\n",(0,e.jsx)(o,{data:v})]})}function I(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(q,{...i,children:(0,e.jsx)(D,{...i})})}function _(i,n){throw Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},27445:function(i,n,o){"use strict";o.d(n,{g:function(){return a}});var e=o(52322),t=o(28559),s=o(41473);let c=`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,a={type:"configurator",component:function(i){return(0,e.jsx)(t.x,{maw:400,mx:"auto",children:(0,e.jsx)(s.P,{onClose:()=>{},...i})})},centered:!0,code:c,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}}},function(i){i.O(0,[57938,17454,47747,49774,92888,40179],function(){return i(i.s=32548)}),_N_E=i.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68029],{1798:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},3973:(i,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/notifications",function(){return o(28563)}])},5102:(i,t,o)=>{"use strict";o.d(t,{G:()=>l});var e=o(6029),n=o(61087),s=o(57414),c=o(70530);let a=["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"],l={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: \`Notification at \${position}\`,
          message: \`Notification at \${position} message\`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}`,centered:!0,component:function(){let i=a.map(i=>(0,e.jsx)(n.$,{onClick:()=>c.$e.show({title:`Notification at ${i}`,message:`Notification at ${i} message`,position:i}),children:i},i));return(0,e.jsx)(s.Y,{children:i})}}},6620:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},23808:(i,t,o)=>{"use strict";o.d(t,{M:()=>r});var e=o(6029),n=o(61087),s=o(45208),c=o(1608),a=o(39878),l=o(70530);let r={type:"code",code:`
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: \`Notification \${counter}\`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}`,component:function(){let[i,{increment:t}]=(0,a.I)(),o=(0,l.E$)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.$,{onClick:()=>{l.$e.show({title:`Notification ${i}`,message:"Most notifications are added to queue"}),t()},mb:"md",children:"Show notification"}),(0,e.jsx)(s.E,{children:"Notifications state"}),(0,e.jsx)(c.C,{block:!0,children:JSON.stringify(o.notifications,null,2)}),(0,e.jsx)(s.E,{mt:"md",children:"Notifications queue"}),(0,e.jsx)(c.C,{block:!0,children:JSON.stringify(o.queue,null,2)})]})}}},24583:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},28563:(i,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var e=o(6029),n=o(16285),s=o(61087),c=o(70530);let a={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! \u{1F31F}',
        })
      }
    >
      Show notification
    </Button>
  );
}`,centered:!0,component:function(){return(0,e.jsx)(s.$,{onClick:()=>c.$e.show({title:"Default notification",message:"Do not forget to star Mantine on GitHub! \uD83C\uDF1F"}),children:"Show notification"})}};var l=o(51184),r=o(57414),d={root:"m_45c99571",description:"m_436b008d",title:"m_73829fa9",closeButton:"m_979213db"};let u={type:"code",centered:!0,component:function(){return(0,e.jsxs)(r.Y,{justify:"center",children:[(0,e.jsx)(s.$,{onClick:()=>c.$e.show({title:"Notification with custom styles",message:"It is default blue",classNames:d}),children:"Default notification"}),(0,e.jsx)(s.$,{color:"red",onClick:()=>c.$e.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:d}),children:"Error notification"})]})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"tsx"},{fileName:"Demo.module.css",code:`
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
`,language:"scss"}]};var h=o(5102);let f={type:"code",code:`
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
}`,centered:!0,component:function(){return(0,e.jsx)(s.$,{onClick:()=>{Array(10).fill(0).forEach((i,t)=>{setTimeout(()=>{c.$e.show({title:`Notification ${t+1}`,message:"Most notifications are added to queue"})},200*t)})},children:"Show 10 notifications"})}},m={type:"code",code:`
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

      <Button variant="default" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,component:function(){return(0,e.jsxs)(r.Y,{justify:"center",children:[(0,e.jsx)(s.$,{onClick:()=>{Array(10).fill(0).forEach((i,t)=>{c.$e.show({title:`Notification ${t+1}`,message:"Most notifications are added to queue",autoClose:!1})})},children:"Show 10 notifications"}),(0,e.jsx)(s.$,{variant:"default",onClick:()=>c.$e.cleanQueue(),children:"Clean queue"}),(0,e.jsx)(s.$,{variant:"outline",color:"red",onClick:()=>c.$e.clean(),children:"Clean all"})]})}};var p=o(90515);let x={type:"code",code:`
import { Button } from '@mantine/core';
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
            icon: <IconCheck size={18} />,
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
`,centered:!0,component:function(){return(0,e.jsx)(s.$,{onClick:()=>{let i=c.$e.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,withCloseButton:!1});setTimeout(()=>{c.$e.update({id:i,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:(0,e.jsx)(p.A,{size:18}),loading:!1,autoClose:2e3})},3e3)},children:"Show update notification"})}},j={type:"code",code:`
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
`,component:function(){return(0,e.jsxs)(r.Y,{justify:"center",children:[(0,e.jsx)(s.$,{onClick:()=>c.$e.show({message:"I will close in 4 seconds"}),children:"Notifications Provider timeout"}),(0,e.jsx)(s.$,{onClick:()=>c.$e.show({message:"I will close in 500ms",autoClose:500}),children:"Closes in 500ms"}),(0,e.jsx)(s.$,{onClick:()=>c.$e.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1}),children:"Never closes automatically"})]})}};var g=o(23808),y=o(38547),w=o(5262);let v=(0,y.P)(w.XZ.Notifications);function b(i){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...i.components},{Demo:o,InstallScript:s}=t;return o||N("Demo",!0),s||N("InstallScript",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,e.jsx)(s,{packages:"@mantine/notifications"}),"\n",(0,e.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import notifications styles after core package styles\nimport '@mantine/notifications/styles.css';\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Add ",(0,e.jsx)(t.code,{children:"Notifications"})," component anywhere in your application. Note that:"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["It is required to render ",(0,e.jsx)(t.code,{children:"Notifications"})," component inside ",(0,e.jsx)(t.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})]}),"\n",(0,e.jsxs)(t.li,{children:["You do not need to wrap your application with ",(0,e.jsx)(t.code,{children:"Notifications"})," component – it is not a provider, it is a regular component"]}),"\n",(0,e.jsxs)(t.li,{children:["You should not render multiple ",(0,e.jsx)(t.code,{children:"Notifications"})," components – if you do that, your notifications will be duplicated"]}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <Notifications />\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,e.jsx)(t.p,{children:"All set! You can now use all notifications system features."}),"\n",(0,e.jsx)(o,{data:a}),"\n",(0,e.jsx)(t.h2,{id:"do-not-forget-to-import-styles",children:"Do not forget to import styles"}),"\n",(0,e.jsxs)(t.p,{children:["Followed installation instructions above but something is not working\n(",(0,e.jsx)(t.code,{children:"position"})," prop not working, notifications are stuck at the bottom)?\nYou've fallen into the trap of not importing notifications styles!\nTo fix the issue, import notifications styles at the root of your application:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/notifications/styles.css';\n"})}),"\n",(0,e.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"@mantine/notifications"})," package exports ",(0,e.jsx)(t.code,{children:"notifications"})," object with the following functions:"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.show"})," – adds given notification to the notifications list or queue, depending on the current state and ",(0,e.jsx)(t.code,{children:"limit"})]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.hide"})," – removes notification with given ",(0,e.jsx)(t.code,{children:"id"})," from the notifications state and queue"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.update"})," – updates notification that was previously added to the state or queue"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.updateState"})," – executes given callback with current notifications state and queue as an argument and updates state with returned value"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.clean"})," – removes all notifications from the notifications state and queue"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"notifications.cleanQueue"})," – removes all notifications from the queue"]}),"\n"]}),"\n",(0,e.jsxs)(t.p,{children:["All functions can be imported from ",(0,e.jsx)(t.code,{children:"@mantine/notifications"})," package and can be used in any part of your application:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n"})}),"\n",(0,e.jsx)(t.p,{children:"You can also import these functions separately:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"// alias functions\nimport {\n  cleanNotifications, // notifications.clean\n  cleanNotificationsQueue, // notifications.cleanQueue\n  hideNotification, // notifications.hide\n  showNotification, // notifications.show\n  updateNotification, // notifications.update\n  updateNotificationsState, // notifications.updateState\n} from '@mantine/notifications';\n"})}),"\n",(0,e.jsx)(t.h2,{id:"notification-props",children:"Notification props"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"notifications.show"})," and ",(0,e.jsx)(t.code,{children:"notification.update"})," functions can be called with an object that has the following properties:"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"id"})," – notification id, it is used to update and remove notifications, by default ",(0,e.jsx)(t.code,{children:"id"})," is randomly generated"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"position"})," – notification position, by default the value from the ",(0,e.jsx)(t.code,{children:"position"})," prop of the ",(0,e.jsx)(t.code,{children:"Notifications"})," component is used"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"withBorder"})," – determines whether notification should have a border"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"withCloseButton"})," – determines whether the close button should be visible"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"onClose"})," – calls when notification is unmounted"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"onOpen"})," – calls when notification is mounted"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"autoClose"})," – defines timeout in ms on which notification will be automatically closed, use ",(0,e.jsx)(t.code,{children:"false"})," to disable auto close"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"message"})," – required notification body"]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"color, icon, title, radius, className, style, loading"})," – props passed down to the ",(0,e.jsx)(t.a,{href:"/core/notification/",children:"Notification"})," component"]}),"\n"]}),"\n",(0,e.jsxs)(t.p,{children:["All properties except ",(0,e.jsx)(t.code,{children:"message"})," are optional."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { IconX } from '@tabler/icons-react';\nimport { notifications } from '@mantine/notifications';\n\n// Bare minimum – message is required for all notifications\nnotifications.show({ message: 'Hello' });\n\n// Most used notification props\nnotifications.show({\n  id: 'hello-there',\n  position: 'bottom-center',\n  withCloseButton: true,\n  onClose: () => console.log('unmounted'),\n  onOpen: () => console.log('mounted'),\n  autoClose: 5000,\n  title: \"You've been compromised\",\n  message: 'Leave the building immediately',\n  color: 'red',\n  icon: <IconX />,\n  className: 'my-notification-class',\n  style: { backgroundColor: 'red' },\n  loading: false,\n});\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Notifications preview (",(0,e.jsx)(t.code,{children:"message"})," prop used as ",(0,e.jsx)(t.code,{children:"children"}),"):"]}),"\n",(0,e.jsx)(o,{data:l.c,configuratorProps:{includeCode:!1}}),"\n",(0,e.jsx)(t.h2,{id:"customize-notification-styles",children:"Customize notification styles"}),"\n",(0,e.jsxs)(t.p,{children:["You can use ",(0,e.jsx)(t.code,{children:"style"}),", ",(0,e.jsx)(t.code,{children:"className"})," or ",(0,e.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"})," ",(0,e.jsx)(t.code,{children:"classNames"}),", ",(0,e.jsx)(t.code,{children:"styles"})," props to customize notification styles.\nUsually, it is better to override ",(0,e.jsx)(t.a,{href:"/core/notification",children:"Notification"})," styles with ",(0,e.jsx)(t.code,{children:"classNames"})," prop in the ",(0,e.jsx)(t.a,{href:"/theming/theme-object/",children:"theme object"}),"."]}),"\n",(0,e.jsx)(o,{data:u}),"\n",(0,e.jsx)(t.h2,{id:"notifications-container-position",children:"Notifications container position"}),"\n",(0,e.jsxs)(t.p,{children:["You can define notification position in ",(0,e.jsx)(t.code,{children:"notifications.show"})," function. Possible ",(0,e.jsx)(t.code,{children:"position"})," values:"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"top-left"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"top-right"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"top-center"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"bottom-left"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"bottom-right"})}),"\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.code,{children:"bottom-center"})}),"\n"]}),"\n",(0,e.jsx)(o,{data:h.G}),"\n",(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.code,{children:"position"})," can be defined on the ",(0,e.jsx)(t.code,{children:"Notifications"})," component.\nIn the following example, notifications will be displayed in the top right corner of the screen\nif ",(0,e.jsx)(t.code,{children:"position"})," is not defined in ",(0,e.jsx)(t.code,{children:"notifications.show"})," function:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications position=\"top-right\" zIndex={1000} />;\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"limit-and-queue",children:"Limit and queue"}),"\n",(0,e.jsxs)(t.p,{children:["You can limit maximum number of notifications that are displayed at a time by setting\n",(0,e.jsx)(t.code,{children:"limit"})," prop on ",(0,e.jsx)(t.code,{children:"Notifications"}),":"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications limit={5} />;\n}\n"})}),"\n",(0,e.jsxs)(t.p,{children:["All notifications added after the ",(0,e.jsx)(t.code,{children:"limit"})," was reached are added to the queue\nand displayed when notification from current state is hidden."]}),"\n",(0,e.jsx)(o,{data:f}),"\n",(0,e.jsx)(t.h2,{id:"remove-notifications-from-state-and-queue",children:"Remove notifications from state and queue"}),"\n",(0,e.jsxs)(t.p,{children:["To remove specific notification from state or queue use ",(0,e.jsx)(t.code,{children:"notifications.hide"})," function:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nconst id = notifications.show({ message: 'Hello!' });\nnotifications.hide(id);\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Use ",(0,e.jsx)(t.code,{children:"notifications.cleanQueue"})," function to remove all notifications from the queue and\n",(0,e.jsx)(t.code,{children:"notifications.clean"})," to remove all notifications both from the state and queue:"]}),"\n",(0,e.jsx)(o,{data:m}),"\n",(0,e.jsx)(t.h2,{id:"update-notification",children:"Update notification"}),"\n",(0,e.jsx)(o,{data:x}),"\n",(0,e.jsx)(t.h2,{id:"auto-close",children:"Auto close"}),"\n",(0,e.jsxs)(t.p,{children:["You can configure auto close timeout with ",(0,e.jsx)(t.code,{children:"Notifications"}),":"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\n// All notifications will be closed automatically in 4000ms\nfunction Demo() {\n  return <Notifications autoClose={4000} />;\n}\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Or per notification in ",(0,e.jsx)(t.code,{children:"notifications.show"}),"/",(0,e.jsx)(t.code,{children:"notifications.update"})," functions:"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nnotifications.show({\n  message: 'I will close in 500ms seconds',\n  autoClose: 500,\n});\n\nnotifications.update({\n  id: 'hello',\n  message: 'I will never close',\n  autoClose: false,\n});\n"})}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"notifications.show"})," and ",(0,e.jsx)(t.code,{children:"notifications.update"})," functions ",(0,e.jsx)(t.code,{children:"autoClose"})," prop has higher priority."]}),"\n",(0,e.jsx)(o,{data:j}),"\n",(0,e.jsx)(t.h2,{id:"subscribe-to-notifications-state",children:"Subscribe to notifications state"}),"\n",(0,e.jsxs)(t.p,{children:["You can subscribe to notifications state changes with ",(0,e.jsx)(t.code,{children:"useNotifications"})," hook.\nThe hook returns an object with ",(0,e.jsx)(t.code,{children:"notifications"})," and ",(0,e.jsx)(t.code,{children:"queue"})," arrays. ",(0,e.jsx)(t.code,{children:"notifications"}),"\narray contains all notifications that are currently displayed, ",(0,e.jsx)(t.code,{children:"queue"})," contains\nnotifications that are waiting to be displayed."]}),"\n",(0,e.jsx)(o,{data:g.M})]})}function k(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(v,{...i,children:(0,e.jsx)(b,{...i})})}function N(i,t){throw Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},34891:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},39878:(i,t,o)=>{"use strict";o.d(t,{I:()=>c});var e=o(55729),n=o(38744);let s={min:-1/0,max:1/0};function c(i=0,t){let{min:o,max:a}={...s,...t},[l,r]=(0,e.useState)((0,n.q)(i,o,a)),d=(0,e.useCallback)(()=>r(i=>(0,n.q)(i+1,o,a)),[o,a]),u=(0,e.useCallback)(()=>r(i=>(0,n.q)(i-1,o,a)),[o,a]);return[l,{increment:d,decrement:u,set:(0,e.useCallback)(i=>r((0,n.q)(i,o,a)),[o,a]),reset:(0,e.useCallback)(()=>r((0,n.q)(i,o,a)),[i,o,a])}]}},41949:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},51184:(i,t,o)=>{"use strict";o.d(t,{c:()=>c});var e=o(6029),n=o(76320),s=o(13162);let c={type:"configurator",component:function(i){return(0,e.jsx)(n.a,{maw:400,mx:"auto",children:(0,e.jsx)(s.E,{onClose:()=>{},...i})})},centered:!0,code:`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}},65433:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(i,t,o)=>{"use strict";o.d(t,{A:()=>e});let e=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},i=>{i.O(0,[38547,90636,46593,38792],()=>i(i.s=3973)),_N_E=i.O()}]);
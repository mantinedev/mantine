(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68560],{65897:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=(0,t(54764).Z)("message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},60060:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=(0,t(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},17569:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=(0,t(54764).Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},81446:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tabs",function(){return t(55052)}])},55052:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return R}});var n=t(24246),s=t(71670),l=t(27378),r=t(60060),o=t(65897),i=t(17569),c=t(49134),b=t(71078),u=t(83601);let d=`
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}`,T={type:"configurator",component:function(e){let{dir:a}=(0,c.gm)(),t="vertical"===e.orientation?{["rtl"===a?"pr":"pl"]:"xs"}:{pt:"xs"},n={width:(0,b.h)(12),height:(0,b.h)(12)};return l.createElement(u.m,{defaultValue:"gallery",...e},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"gallery",leftSection:l.createElement(r.Z,{style:n})},"Gallery"),l.createElement(u.m.Tab,{value:"messages",leftSection:l.createElement(o.Z,{style:n})},"Messages"),l.createElement(u.m.Tab,{value:"settings",leftSection:l.createElement(i.Z,{style:n})},"Settings")),l.createElement(u.m.Panel,{value:"gallery",...t},"Gallery tab content"),l.createElement(u.m.Panel,{value:"messages",...t},"Messages tab content"),l.createElement(u.m.Panel,{value:"settings",...t},"Settings tab content"))},code:d,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",initialValue:"default",libraryValue:"default",data:[{value:"default",label:"Default"},{value:"outline",label:"Outline"},{value:"pills",label:"Pills"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},m=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
`,h={type:"code",code:m,component:function(){return l.createElement(u.m,{color:"teal",defaultValue:"first"},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"first"},"Teal tab"),l.createElement(u.m.Tab,{value:"second",color:"blue"},"Blue tab")),l.createElement(u.m.Panel,{value:"first",pt:"xs"},"First tab color is teal, it gets this value from context"),l.createElement(u.m.Panel,{value:"second",pt:"xs"},"Second tab color is blue, it gets this value from props, props have the priority and will override context value"))}},p=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List{{props}}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,v={type:"configurator",component:function(e){return l.createElement(u.m,{defaultValue:"first"},l.createElement(u.m.List,{...e},l.createElement(u.m.Tab,{value:"first"},"First tab"),l.createElement(u.m.Tab,{value:"second"},"Second tab"),l.createElement(u.m.Tab,{value:"third"},"Third tab")))},code:p,centered:!0,maxWidth:"100%",controls:[{prop:"grow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"flex-start",data:["flex-start","center","flex-end","space-between"]}]},f=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,g={type:"code",component:function(){return l.createElement(u.m,{defaultValue:"chat"},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"chat"},"Chat"),l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"settings"},"Settings"),l.createElement(u.m.Tab,{value:"account",ml:"auto"},"Account")))},code:f},y=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">Account panel</Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,x={type:"code",component:function(){return l.createElement(u.m,{defaultValue:"chat",inverted:!0},l.createElement(u.m.Panel,{value:"chat",pb:"xs"},"Chat panel"),l.createElement(u.m.Panel,{value:"gallery",pb:"xs"},"Gallery panel"),l.createElement(u.m.Panel,{value:"account",pb:"xs"},"Account panel"),l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"chat"},"Chat"),l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"account"},"Account")))},code:y},j=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
`,E={type:"configurator",component:function(e){let a="left"===e.placement?{pl:"xs"}:{pr:"xs"};return l.createElement(u.m,{defaultValue:"gallery",orientation:"vertical",...e},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"messages"},"Messages"),l.createElement(u.m.Tab,{value:"settings"},"Settings")),l.createElement(u.m.Panel,{value:"gallery",...a},"Gallery tab content"),l.createElement(u.m.Panel,{value:"messages",...a},"Messages tab content"),l.createElement(u.m.Panel,{value:"settings",...a},"Settings tab content"))},code:j,controls:[{prop:"placement",type:"segmented",initialValue:"left",libraryValue:"left",data:["left","right"]}]},P=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings" disabled>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,S={type:"code",component:function(){return l.createElement(u.m,{defaultValue:"chat"},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"chat"},"Chat"),l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"settings",disabled:!0},"Settings"),l.createElement(u.m.Tab,{value:"account"},"Account")))},code:P},w=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
`,V={type:"code",component:function(){return l.createElement(u.m,{defaultValue:"chat",activateTabWithKeyboard:!1},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"chat"},"Chat"),l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"account"},"Account")),l.createElement(u.m.Panel,{value:"chat",pt:"xs"},"Chat panel"),l.createElement(u.m.Panel,{value:"gallery",pt:"xs"},"Gallery panel"),l.createElement(u.m.Panel,{value:"account",pt:"xs"},"Account panel"))},code:w},L=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
`,k={type:"code",component:function(){return l.createElement(u.m,{defaultValue:"chat",allowTabDeactivation:!0},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"chat"},"Chat"),l.createElement(u.m.Tab,{value:"gallery"},"Gallery"),l.createElement(u.m.Tab,{value:"account"},"Account")),l.createElement(u.m.Panel,{value:"chat",pt:"xs"},"Chat panel"),l.createElement(u.m.Panel,{value:"gallery",pt:"xs"},"Gallery panel"),l.createElement(u.m.Panel,{value:"account",pt:"xs"},"Account panel"))},code:L};var C=t(49235);let D=`
import { Tabs, rem } from '@mantine/core';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
`,M={type:"styles-api",data:C.Y,component:function(e){let a={width:(0,b.h)(12),height:(0,b.h)(12)};return l.createElement(u.m,{defaultValue:"gallery",...e},l.createElement(u.m.List,null,l.createElement(u.m.Tab,{value:"gallery",leftSection:l.createElement(r.Z,{style:a})},"Gallery"),l.createElement(u.m.Tab,{value:"messages",leftSection:l.createElement(o.Z,{style:a})},"Messages"),l.createElement(u.m.Tab,{value:"settings",rightSection:l.createElement(i.Z,{style:a})},"Settings")),l.createElement(u.m.Panel,{value:"gallery",pt:"xs"},"Gallery tab content"),l.createElement(u.m.Panel,{value:"messages",pt:"xs"},"Messages tab content"),l.createElement(u.m.Panel,{value:"settings",pt:"xs"},"Settings tab content"))},centered:!0,maxWidth:"100%",code:D};var G={tab:"m-3a996e90"};let A=`
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto style={{ width: rem(16), height: rem(16) }} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,I=`
.tab {
  position: relative;
  border: rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));

  &:first-of-type {
    border-radius: rem(4px) 0 0 rem(4px);

    @mixin rtl {
      border-radius: 0 rem(4px) rem(4px) 0;
    }
  }

  &:last-of-type {
    border-radius: 0 rem(4px) rem(4px) 0;

    @mixin rtl {
      border-radius: rem(4px) 0 0 rem(4px);
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: rem(1px);
    }
  }

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5));
  }

  &[data-active] {
    z-index: 1;
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);

    @mixin hover {
      background-color: var(--mantine-color-blue-filled-hover);
    }
  }
}
`,N={type:"code",component:function(){return l.createElement(u.m,{variant:"unstyled",defaultValue:"settings",classNames:G},l.createElement(u.m.List,{grow:!0},l.createElement(u.m.Tab,{value:"settings",leftSection:l.createElement(i.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)}})},"Settings"),l.createElement(u.m.Tab,{value:"messages",leftSection:l.createElement(o.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)}})},"Messages"),l.createElement(u.m.Tab,{value:"gallery",leftSection:l.createElement(r.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)}})},"Gallery")))},code:[{fileName:"Demo.module.css",code:I,language:"scss"},{fileName:"Demo.tsx",code:A,language:"tsx"}]};var F=t(3916),Z=t(54568);let z=(0,F.A)(Z.us.Tabs);function _(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:t,KeyboardEventsTable:l,StylesApiSelectors:r}=a;return t||H("Demo",!0),l||H("KeyboardEventsTable",!0),r||H("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:T}),"\n",(0,n.jsx)(a.h2,{id:"controlled-tabs",children:"Controlled Tabs"}),"\n",(0,n.jsxs)(a.p,{children:["To control Tabs state, use ",(0,n.jsx)(a.code,{children:"value"})," and ",(0,n.jsx)(a.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const [activeTab, setActiveTab] = useState<string | null>(\'first\');\n\n  return (\n    <Tabs value={activeTab} onChange={setActiveTab}>\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"uncontrolled-tabs",children:"Uncontrolled Tabs"}),"\n",(0,n.jsxs)(a.p,{children:["If you do not need to subscribe to Tabs state changes, use ",(0,n.jsx)(a.code,{children:"defaultValue"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,n.jsxs)(a.p,{children:["To change colors of all tabs, set ",(0,n.jsx)(a.code,{children:"color"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component, to change color of the individual tab,\nset ",(0,n.jsx)(a.code,{children:"color"})," on ",(0,n.jsx)(a.code,{children:"Tabs.Tab"}),"."]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(a.h2,{id:"tabs-position",children:"Tabs position"}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsxs)(a.p,{children:["To display tab on the opposite side, set ",(0,n.jsx)(a.code,{children:"margin-left: auto"})," with ",(0,n.jsx)(a.code,{children:'ml="auto"'})," prop ot with ",(0,n.jsx)(a.code,{children:"className"}),":"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(a.h2,{id:"inverted-tabs",children:"Inverted tabs"}),"\n",(0,n.jsxs)(a.p,{children:["To make tabs inverted, place ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," components before ",(0,n.jsx)(a.code,{children:"Tabs.List"})," and add ",(0,n.jsx)(a.code,{children:"inverted"})," prop to ",(0,n.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,n.jsx)(t,{data:x}),"\n",(0,n.jsx)(a.h2,{id:"vertical-tabs-placement",children:"Vertical tabs placement"}),"\n",(0,n.jsxs)(a.p,{children:["To change placement of ",(0,n.jsx)(a.code,{children:"Tabs.List"})," in vertical orientation set ",(0,n.jsx)(a.code,{children:"placement"})," prop:"]}),"\n",(0,n.jsx)(t,{data:E}),"\n",(0,n.jsx)(a.h2,{id:"disabled-tabs",children:"Disabled tabs"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"disabled"})," prop on ",(0,n.jsx)(a.code,{children:"Tabs.Tab"})," component to disable tab.\nDisabled tab cannot be activated with mouse or keyboard, and they will be skipped when user navigates with arrow keys:"]}),"\n",(0,n.jsx)(t,{data:S}),"\n",(0,n.jsx)(a.h2,{id:"activation-mode",children:"Activation mode"}),"\n",(0,n.jsxs)(a.p,{children:["By default, tabs are activated when user presses arrows keys or Home/End keys.\nTo disable that set ",(0,n.jsx)(a.code,{children:"activateTabWithKeyboard={false}"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,n.jsx)(t,{data:V}),"\n",(0,n.jsx)(a.h2,{id:"tab-deactivation",children:"Tab deactivation"}),"\n",(0,n.jsxs)(a.p,{children:["By default, active tab cannot be deactivated. To allow that set ",(0,n.jsx)(a.code,{children:"allowTabDeactivation"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,n.jsx)(t,{data:k}),"\n",(0,n.jsx)(a.h2,{id:"unmount-inactive-tabs",children:"Unmount inactive tabs"}),"\n",(0,n.jsxs)(a.p,{children:["By default, inactive ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," will stay mounted, to unmount inactive tabs, set ",(0,n.jsx)(a.code,{children:"keepMounted={false}"})," on Tabs.\nThis is useful when you want to render components that impact performance inside ",(0,n.jsx)(a.code,{children:"Tabs.Panel"}),". Note that\ncomponents that are rendered inside ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," will reset their state on each mount (tab change)."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\n// Second tab panel will be mounted only when user activates second tab\nfunction Demo() {\n  return (\n    <Tabs keepMounted={false} defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"get-tab-control-ref",children:"Get tab control ref"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { useRef } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const secondTabRef = useRef<HTMLButtonElement>(null);\n\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="Second" ref={secondTabRef}>\n          Second tab\n        </Tabs.Tab>\n        <Tabs.Tab value="third">Third tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"usage-with-react-router",children:"Usage with react-router"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'<Route path="/tabs/:tabValue" element={<Demo />} />\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useNavigate, useParams } from 'react-router-dom';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const navigate = useNavigate();\n  const { tabValue } = useParams();\n\n  return (\n    <Tabs\n      value={tabValue}\n      onChange={(value) => navigate(`/tabs/${value}`)}\n    >\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"usage-with-nextjs-router",children:"Usage with Next.js router"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"// For file /tabs/[activeTab].tsx\nimport { useRouter } from 'next/router';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const router = useRouter();\n\n  return (\n    <Tabs\n      value={router.query.activeTab as string}\n      onChange={(value) => router.push(`/tabs/${value}`)}\n    >\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,n.jsx)(r,{component:"Tabs"}),"\n",(0,n.jsx)(t,{data:M}),"\n",(0,n.jsx)(a.p,{children:"Example of Styles API usage to customize tab styles:"}),"\n",(0,n.jsx)(t,{data:N}),"\n",(0,n.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(a.p,{children:["Tabs component follows ",(0,n.jsx)(a.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,n.jsxs)(a.p,{children:["If you use ",(0,n.jsx)(a.code,{children:"Tabs.Tab"})," without text content, for example, only with icon, then set ",(0,n.jsx)(a.code,{children:"aria-label"}),"\nor use ",(0,n.jsx)(a.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { IconCoin } from \'@tabler/icons-react\';\nimport { Tabs, VisuallyHidden } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="chat">\n      <Tabs.List>\n        {/* aria-label is not required, tab is labelled by children */}\n        <Tabs.Tab value="chat">Chat</Tabs.Tab>\n\n        {/* aria-label is required, tab is not labelled by children */}\n        <Tabs.Tab\n          value="money"\n          aria-label="Get money"\n          leftSection={<IconCoin size={14} />}\n        />\n\n        {/* You can use VisuallyHidden instead of aria-label */}\n        <Tabs.Tab value="money" leftSection={<IconCoin size={14} />}>\n          <VisuallyHidden>Get money</VisuallyHidden>\n        </Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["To set tabs list label, set ",(0,n.jsx)(a.code,{children:"aria-label"})," on ",(0,n.jsx)(a.code,{children:"Tabs.List"})," component, it will be announced by screen reader:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="recent">\n      {/* Tabs.List aria-label will be announced when tab is focused for the first time */}\n      <Tabs.List aria-label="Chats">\n        <Tabs.Tab value="recent">Most recent</Tabs.Tab>\n        <Tabs.Tab value="recent">Unanswered</Tabs.Tab>\n        <Tabs.Tab value="archived">Archived</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses and activates next tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowLeft",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowDown",description:"Focuses and activates next tab that is not disabled",condition:'orientation="vertical"'},{key:"ArrowUp",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="vertical"'},{key:"Home",description:"Focuses and activates first tab"},{key:"End",description:"Focuses and activates last tab"}]})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(z,{...e,children:(0,n.jsx)(_,{...e})})}function H(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=81446)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68560],{57435:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tabs",function(){return n(86813)}])},86813:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return C}});var t=n(52322),s=n(45392),l=n(40289),i=n(11429),o=n(13274),r=n(89027),c=n(40437);let b={type:"configurator",component:function(e){let{dir:a}=(0,r.gm)(),n="vertical"===e.orientation?{["rtl"===a?"pr":"pl"]:"xs"}:{pt:"xs"};return(0,t.jsxs)(c.m,{defaultValue:"gallery",...e,children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"gallery",leftSection:(0,t.jsx)(l.Z,{size:12}),children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"messages",leftSection:(0,t.jsx)(i.Z,{size:12}),children:"Messages"}),(0,t.jsx)(c.m.Tab,{value:"settings",leftSection:(0,t.jsx)(o.Z,{size:12}),children:"Settings"})]}),(0,t.jsx)(c.m.Panel,{value:"gallery",...n,children:"Gallery tab content"}),(0,t.jsx)(c.m.Panel,{value:"messages",...n,children:"Messages tab content"}),(0,t.jsx)(c.m.Panel,{value:"settings",...n,children:"Settings tab content"})]})},code:`
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
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
}`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",initialValue:"default",libraryValue:"default",data:[{value:"default",label:"Default"},{value:"outline",label:"Outline"},{value:"pills",label:"Pills"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},d={type:"code",code:`
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
`,component:function(){return(0,t.jsxs)(c.m,{color:"teal",defaultValue:"first",children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"first",children:"Teal tab"}),(0,t.jsx)(c.m.Tab,{value:"second",color:"blue",children:"Blue tab"})]}),(0,t.jsx)(c.m.Panel,{value:"first",pt:"xs",children:"First tab color is teal, it gets this value from context"}),(0,t.jsx)(c.m.Panel,{value:"second",pt:"xs",children:"Second tab color is blue, it gets this value from props, props have the priority and will override context value"})]})}},u={type:"configurator",component:function(e){return(0,t.jsx)(c.m,{defaultValue:"first",children:(0,t.jsxs)(c.m.List,{...e,children:[(0,t.jsx)(c.m.Tab,{value:"first",children:"First tab"}),(0,t.jsx)(c.m.Tab,{value:"second",children:"Second tab"}),(0,t.jsx)(c.m.Tab,{value:"third",children:"Third tab"})]})})},code:`
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
`,centered:!0,maxWidth:"100%",controls:[{prop:"grow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"flex-start",data:["flex-start","center","flex-end","space-between"]}]},T={type:"code",component:function(){return(0,t.jsx)(c.m,{defaultValue:"chat",children:(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"chat",children:"Chat"}),(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"settings",children:"Settings"}),(0,t.jsx)(c.m.Tab,{value:"account",ml:"auto",children:"Account"})]})})},code:`
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
`},m={type:"code",component:function(){return(0,t.jsxs)(c.m,{defaultValue:"chat",inverted:!0,children:[(0,t.jsx)(c.m.Panel,{value:"chat",pb:"xs",children:"Chat panel"}),(0,t.jsx)(c.m.Panel,{value:"gallery",pb:"xs",children:"Gallery panel"}),(0,t.jsx)(c.m.Panel,{value:"account",pb:"xs",children:"Account panel"}),(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"chat",children:"Chat"}),(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"account",children:"Account"})]})]})},code:`
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
`},h={type:"configurator",component:function(e){let a="left"===e.placement?{pl:"xs"}:{pr:"xs"};return(0,t.jsxs)(c.m,{defaultValue:"gallery",orientation:"vertical",...e,children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"messages",children:"Messages"}),(0,t.jsx)(c.m.Tab,{value:"settings",children:"Settings"})]}),(0,t.jsx)(c.m.Panel,{value:"gallery",...a,children:"Gallery tab content"}),(0,t.jsx)(c.m.Panel,{value:"messages",...a,children:"Messages tab content"}),(0,t.jsx)(c.m.Panel,{value:"settings",...a,children:"Settings tab content"})]})},code:`
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
`,controls:[{prop:"placement",type:"segmented",initialValue:"left",libraryValue:"left",data:["left","right"]}]};var v=n(1922);let x={type:"code",component:function(){return(0,t.jsx)(c.m,{defaultValue:"chat",children:(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"chat",children:"Chat"}),(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"settings",disabled:!0,children:"Settings"}),(0,t.jsx)(c.m.Tab,{value:"account",children:"Account"})]})})},code:`
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
`},p={type:"code",component:function(){return(0,t.jsxs)(c.m,{defaultValue:"chat",activateTabWithKeyboard:!1,children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"chat",children:"Chat"}),(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"account",children:"Account"})]}),(0,t.jsx)(c.m.Panel,{value:"chat",pt:"xs",children:"Chat panel"}),(0,t.jsx)(c.m.Panel,{value:"gallery",pt:"xs",children:"Gallery panel"}),(0,t.jsx)(c.m.Panel,{value:"account",pt:"xs",children:"Account panel"})]})},code:`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
`},f={type:"code",component:function(){return(0,t.jsxs)(c.m,{defaultValue:"chat",allowTabDeactivation:!0,children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"chat",children:"Chat"}),(0,t.jsx)(c.m.Tab,{value:"gallery",children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"account",children:"Account"})]}),(0,t.jsx)(c.m.Panel,{value:"chat",pt:"xs",children:"Chat panel"}),(0,t.jsx)(c.m.Panel,{value:"gallery",pt:"xs",children:"Gallery panel"}),(0,t.jsx)(c.m.Panel,{value:"account",pt:"xs",children:"Account panel"})]})},code:`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
`};var g=n(64861);let j=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings size={12} />}>
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
`,y={type:"styles-api",data:g.Y,component:function(e){return(0,t.jsxs)(c.m,{defaultValue:"gallery",...e,children:[(0,t.jsxs)(c.m.List,{children:[(0,t.jsx)(c.m.Tab,{value:"gallery",leftSection:(0,t.jsx)(l.Z,{size:12}),children:"Gallery"}),(0,t.jsx)(c.m.Tab,{value:"messages",leftSection:(0,t.jsx)(i.Z,{size:12}),children:"Messages"}),(0,t.jsx)(c.m.Tab,{value:"settings",rightSection:(0,t.jsx)(o.Z,{size:12}),children:"Settings"})]}),(0,t.jsx)(c.m.Panel,{value:"gallery",pt:"xs",children:"Gallery tab content"}),(0,t.jsx)(c.m.Panel,{value:"messages",pt:"xs",children:"Messages tab content"}),(0,t.jsx)(c.m.Panel,{value:"settings",pt:"xs",children:"Settings tab content"})]})},centered:!0,maxWidth:"100%",code:j};var P={tab:"m_3a996e90"};let S={type:"code",component:function(){return(0,t.jsx)(c.m,{variant:"unstyled",defaultValue:"settings",classNames:P,children:(0,t.jsxs)(c.m.List,{grow:!0,children:[(0,t.jsx)(c.m.Tab,{value:"settings",leftSection:(0,t.jsx)(o.Z,{size:16}),children:"Settings"}),(0,t.jsx)(c.m.Tab,{value:"messages",leftSection:(0,t.jsx)(i.Z,{size:16}),children:"Messages"}),(0,t.jsx)(c.m.Tab,{value:"gallery",leftSection:(0,t.jsx)(l.Z,{size:16}),children:"Gallery"})]})})},code:[{fileName:"Demo.module.css",code:`
.tab {
  position: relative;
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));

  &:first-of-type {
    border-radius: 4px 0 0 4px;

    @mixin rtl {
      border-radius: 0 4px 4px 0;
    }
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;

    @mixin rtl {
      border-radius: 4px 0 0 4px;
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: 1px;
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
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings size={16} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={16} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto size={16} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,language:"tsx"}]};var w=n(54078),L=n(15019);let V=(0,w.A)(L.us.Tabs);function k(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:n,KeyboardEventsTable:l,StylesApiSelectors:i}=a;return n||D("Demo",!0),l||D("KeyboardEventsTable",!0),i||D("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:b}),"\n",(0,t.jsx)(a.h2,{id:"controlled-tabs",children:"Controlled Tabs"}),"\n",(0,t.jsxs)(a.p,{children:["To control Tabs state, use ",(0,t.jsx)(a.code,{children:"value"})," and ",(0,t.jsx)(a.code,{children:"onChange"})," props:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const [activeTab, setActiveTab] = useState<string | null>(\'first\');\n\n  return (\n    <Tabs value={activeTab} onChange={setActiveTab}>\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"uncontrolled-tabs",children:"Uncontrolled Tabs"}),"\n",(0,t.jsxs)(a.p,{children:["If you do not need to subscribe to Tabs state changes, use ",(0,t.jsx)(a.code,{children:"defaultValue"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,t.jsxs)(a.p,{children:["To change colors of all tabs, set ",(0,t.jsx)(a.code,{children:"color"})," on ",(0,t.jsx)(a.code,{children:"Tabs"})," component, to change color of the individual tab,\nset ",(0,t.jsx)(a.code,{children:"color"})," on ",(0,t.jsx)(a.code,{children:"Tabs.Tab"}),"."]}),"\n",(0,t.jsx)(n,{data:d}),"\n",(0,t.jsx)(a.h2,{id:"tabs-position",children:"Tabs position"}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsxs)(a.p,{children:["To display tab on the opposite side, set ",(0,t.jsx)(a.code,{children:"margin-left: auto"})," with ",(0,t.jsx)(a.code,{children:'ml="auto"'})," prop or with ",(0,t.jsx)(a.code,{children:"className"}),":"]}),"\n",(0,t.jsx)(n,{data:T}),"\n",(0,t.jsx)(a.h2,{id:"inverted-tabs",children:"Inverted tabs"}),"\n",(0,t.jsxs)(a.p,{children:["To make tabs inverted, place ",(0,t.jsx)(a.code,{children:"Tabs.Panel"})," components before ",(0,t.jsx)(a.code,{children:"Tabs.List"})," and add ",(0,t.jsx)(a.code,{children:"inverted"})," prop to ",(0,t.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(a.h2,{id:"vertical-tabs-placement",children:"Vertical tabs placement"}),"\n",(0,t.jsxs)(a.p,{children:["To change placement of ",(0,t.jsx)(a.code,{children:"Tabs.List"})," in vertical orientation set ",(0,t.jsx)(a.code,{children:"placement"})," prop:"]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(a.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,t.jsxs)(a.p,{children:["Example of custom variant with ",(0,t.jsx)(a.a,{href:"/core/floating-indicator",children:"FloatingIndicator"}),":"]}),"\n",(0,t.jsx)(n,{data:v.e}),"\n",(0,t.jsx)(a.h2,{id:"disabled-tabs",children:"Disabled tabs"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"disabled"})," prop on ",(0,t.jsx)(a.code,{children:"Tabs.Tab"})," component to disable tab.\nDisabled tab cannot be activated with mouse or keyboard, and they will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(a.h2,{id:"activation-mode",children:"Activation mode"}),"\n",(0,t.jsxs)(a.p,{children:["By default, tabs are activated when user presses arrows keys or Home/End keys.\nTo disable that set ",(0,t.jsx)(a.code,{children:"activateTabWithKeyboard={false}"})," on ",(0,t.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,t.jsx)(n,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"tab-deactivation",children:"Tab deactivation"}),"\n",(0,t.jsxs)(a.p,{children:["By default, active tab cannot be deactivated. To allow that set ",(0,t.jsx)(a.code,{children:"allowTabDeactivation"})," on ",(0,t.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(a.h2,{id:"unmount-inactive-tabs",children:"Unmount inactive tabs"}),"\n",(0,t.jsxs)(a.p,{children:["By default, inactive ",(0,t.jsx)(a.code,{children:"Tabs.Panel"})," will stay mounted, to unmount inactive tabs, set ",(0,t.jsx)(a.code,{children:"keepMounted={false}"})," on Tabs.\nThis is useful when you want to render components that impact performance inside ",(0,t.jsx)(a.code,{children:"Tabs.Panel"}),". Note that\ncomponents that are rendered inside ",(0,t.jsx)(a.code,{children:"Tabs.Panel"})," will reset their state on each mount (tab change)."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\n// Second tab panel will be mounted only when user activates second tab\nfunction Demo() {\n  return (\n    <Tabs keepMounted={false} defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"get-tab-control-ref",children:"Get tab control ref"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { useRef } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const secondTabRef = useRef<HTMLButtonElement>(null);\n\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="Second" ref={secondTabRef}>\n          Second tab\n        </Tabs.Tab>\n        <Tabs.Tab value="third">Third tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"usage-with-react-router",children:"Usage with react-router"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'<Route path="/tabs/:tabValue" element={<Demo />} />\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useNavigate, useParams } from 'react-router-dom';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const navigate = useNavigate();\n  const { tabValue } = useParams();\n\n  return (\n    <Tabs\n      value={tabValue}\n      onChange={(value) => navigate(`/tabs/${value}`)}\n    >\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"usage-with-nextjs-router",children:"Usage with Next.js router"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"// For file /tabs/[activeTab].tsx\nimport { useRouter } from 'next/router';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const router = useRouter();\n\n  return (\n    <Tabs\n      value={router.query.activeTab as string}\n      onChange={(value) => router.push(`/tabs/${value}`)}\n    >\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,t.jsx)(i,{component:"Tabs"}),"\n",(0,t.jsx)(n,{data:y}),"\n",(0,t.jsx)(a.p,{children:"Example of Styles API usage to customize tab styles:"}),"\n",(0,t.jsx)(n,{data:S}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(a.p,{children:["Tabs component follows ",(0,t.jsx)(a.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(a.p,{children:["If you use ",(0,t.jsx)(a.code,{children:"Tabs.Tab"})," without text content, for example, only with icon, then set ",(0,t.jsx)(a.code,{children:"aria-label"}),"\nor use ",(0,t.jsx)(a.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { IconCoin } from \'@tabler/icons-react\';\nimport { Tabs, VisuallyHidden } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="chat">\n      <Tabs.List>\n        {/* aria-label is not required, tab is labelled by children */}\n        <Tabs.Tab value="chat">Chat</Tabs.Tab>\n\n        {/* aria-label is required, tab is not labelled by children */}\n        <Tabs.Tab\n          value="money"\n          aria-label="Get money"\n          leftSection={<IconCoin size={14} />}\n        />\n\n        {/* You can use VisuallyHidden instead of aria-label */}\n        <Tabs.Tab value="money" leftSection={<IconCoin size={14} />}>\n          <VisuallyHidden>Get money</VisuallyHidden>\n        </Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["To set tabs list label, set ",(0,t.jsx)(a.code,{children:"aria-label"})," on ",(0,t.jsx)(a.code,{children:"Tabs.List"})," component, it will be announced by screen reader:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="recent">\n      {/* Tabs.List aria-label will be announced when tab is focused for the first time */}\n      <Tabs.List aria-label="Chats">\n        <Tabs.Tab value="recent">Most recent</Tabs.Tab>\n        <Tabs.Tab value="recent">Unanswered</Tabs.Tab>\n        <Tabs.Tab value="archived">Archived</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses and activates next tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowLeft",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowDown",description:"Focuses and activates next tab that is not disabled",condition:'orientation="vertical"'},{key:"ArrowUp",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="vertical"'},{key:"Home",description:"Focuses and activates first tab"},{key:"End",description:"Focuses and activates last tab"}]})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(V,{...e,children:(0,t.jsx)(k,{...e})})}function D(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11429:function(e,a,n){"use strict";n.d(a,{Z:function(){return t}});var t=(0,n(73681).Z)("outline","message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},40289:function(e,a,n){"use strict";n.d(a,{Z:function(){return t}});var t=(0,n(73681).Z)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},13274:function(e,a,n){"use strict";n.d(a,{Z:function(){return t}});var t=(0,n(73681).Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},1922:function(e,a,n){"use strict";n.d(a,{e:function(){return r}});var t=n(52322),s=n(2784),l=n(40437),i=n(19296),o="m_65f82fcc";let r={type:"code",component:function(){let[e,a]=(0,s.useState)(null),[n,r]=(0,s.useState)("1"),[c,b]=(0,s.useState)({}),d=e=>a=>{c[e]=a,b(c)};return(0,t.jsxs)(l.m,{variant:"none",value:n,onChange:r,children:[(0,t.jsxs)(l.m.List,{ref:a,className:"m_590a4747",children:[(0,t.jsx)(l.m.Tab,{value:"1",ref:d("1"),className:o,children:"First tab"}),(0,t.jsx)(l.m.Tab,{value:"2",ref:d("2"),className:o,children:"Second tab"}),(0,t.jsx)(l.m.Tab,{value:"3",ref:d("3"),className:o,children:"Third tab"}),(0,t.jsx)(i.G,{target:n?c[n]:null,parent:e,className:"m_8268e906"})]}),(0,t.jsx)(l.m.Panel,{value:"1",children:"First tab content"}),(0,t.jsx)(l.m.Panel,{value:"2",children:"Second tab content"}),(0,t.jsx)(l.m.Panel,{value:"3",children:"Third tab content"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { FloatingIndicator, Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
          First tab
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
          Third tab
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <Tabs.Panel value="1">First tab content</Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
      <Tabs.Panel value="3">Third tab content</Tabs.Panel>
    </Tabs>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.list {
  position: relative;
  margin-bottom: var(--mantine-spacing-md);
}

.indicator {
  background-color: var(--mantine-color-white);
  border-radius: var(--mantine-radius-md);
  border: 1px solid var(--mantine-color-gray-2);
  box-shadow: var(--mantine-shadow-sm);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
  }
}

.tab {
  z-index: 1;
  font-weight: 500;
  transition: color 100ms ease;
  color: var(--mantine-color-gray-7);

  &[data-active] {
    color: var(--mantine-color-black);
  }

  @mixin dark {
    color: var(--mantine-color-dark-1);

    &[data-active] {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=57435)}),_N_E=e.O()}]);
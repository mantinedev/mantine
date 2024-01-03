(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8777],{84605:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},65897:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},17569:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},89611:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},25852:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/menu",function(){return n(788)}])},788:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var o=n(24246),r=n(71670),a=n(27378),l=n(82409),i=n(17569),c=n(65897),s=n(60060),d=n(27854),u=(0,n(54764).Z)("arrows-left-right","IconArrowsLeftRight",[["path",{d:"M21 17l-18 0",key:"svg-0"}],["path",{d:"M6 10l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M3 7l18 0",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]]),m=n(89611),h=n(71078),p=n(8671),Text=n(26569);function g({widthRightSection:e=!0,withTarget:t=!0}){let n={style:{width:(0,h.h)(14),height:(0,h.h)(14)}};return a.createElement(a.Fragment,null,t&&a.createElement(l.v.Target,null,a.createElement(p.z,null,"Toggle menu")),a.createElement(l.v.Dropdown,null,a.createElement(l.v.Label,null,"Application"),a.createElement(l.v.Item,{leftSection:a.createElement(i.Z,{...n})},"Settings"),a.createElement(l.v.Item,{leftSection:a.createElement(c.Z,{...n})},"Messages"),a.createElement(l.v.Item,{leftSection:a.createElement(s.Z,{...n})},"Gallery"),e&&a.createElement(l.v.Item,{leftSection:a.createElement(d.Z,{...n}),rightSection:a.createElement(Text.x,{size:"xs",c:"dimmed"},"⌘K")},"Search"),a.createElement(l.v.Divider,null),a.createElement(l.v.Label,null,"Danger zone"),a.createElement(l.v.Item,{leftSection:a.createElement(u,{...n})},"Transfer my data"),a.createElement(l.v.Item,{color:"red",leftSection:a.createElement(m.Z,{...n})},"Delete my account")))}let v=`
import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Text size="xs" c="dimmed">
              \u2318K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`,f={type:"code",code:v,component:function(){return a.createElement(l.v,{shadow:"md",width:200,withinPortal:!0},a.createElement(g,null))},centered:!0},w=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,b={type:"code",code:w,component:function(){return a.createElement(l.v,{trigger:"hover",openDelay:100,closeDelay:400},a.createElement(g,null))},centered:!0},M=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,x={type:"code",code:M,component:function(){return a.createElement(l.v,{trigger:"click-hover",openDelay:100,closeDelay:400},a.createElement(g,null))},centered:!0},y=`
import { Menu, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`,E={type:"code",code:y,component:function(){return a.createElement(l.v,null,a.createElement(l.v.Target,null,a.createElement(p.z,null,"Toggle menu")),a.createElement(l.v.Dropdown,null,a.createElement(l.v.Label,null,"Application"),a.createElement(l.v.Item,{leftSection:a.createElement(i.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}})},"Settings"),a.createElement(l.v.Item,{leftSection:a.createElement(c.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}})},"Messages"),a.createElement(l.v.Item,{leftSection:a.createElement(s.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}})},"Gallery"),a.createElement(l.v.Item,{leftSection:a.createElement(d.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}}),disabled:!0},"Search"),a.createElement(l.v.Divider,null),a.createElement(l.v.Label,null,"Danger zone"),a.createElement(l.v.Item,{leftSection:a.createElement(u,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}})},"Transfer my data"),a.createElement(l.v.Item,{color:"red",leftSection:a.createElement(m.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}})},"Delete my account")))},centered:!0};var I=n(67240);let j=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`,k={type:"configurator",component:function(e){return a.createElement(l.v,{opened:!0,trapFocus:!1,...e},a.createElement(g,null))},code:j,centered:!0,controls:[{prop:"position",type:"select",initialValue:"bottom",libraryValue:"bottom",data:[{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"},{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"}]},{prop:"offset",type:"number",initialValue:5,libraryValue:5,max:20,min:-20},{prop:"withArrow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"arrowPosition",type:"select",data:I.M,initialValue:"side",libraryValue:"side"}]},S=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`,T={type:"code",code:S,component:function(){return a.createElement(l.v,{transitionProps:{transition:"rotate-right",duration:150}},a.createElement(g,null))},centered:!0};var D=n(31550);let C=`
import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`,A={type:"code",code:C,component:function(){return a.createElement(l.v,{width:200,shadow:"md"},a.createElement(l.v.Target,null,a.createElement(p.z,null,"Toggle menu")),a.createElement(l.v.Dropdown,null,a.createElement(l.v.Item,{component:"a",href:"https://mantine.dev"},"Mantine website"),a.createElement(l.v.Item,{leftSection:a.createElement(D.Z,{style:{width:(0,h.h)(14),height:(0,h.h)(14)}}),component:"a",href:"https://mantine.dev",target:"_blank"},"External link")))},centered:!0};var Z=n(84605),R=n(19397),B=n(22971),z=n(30770);let P=`
import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      {/* ... menu items */}
    </Menu>
  );
}
`,G=(0,a.forwardRef)(({image:e,name:t,email:n,icon:o,...r},l)=>a.createElement(R.k,{ref:l,style:{padding:"var(--mantine-spacing-md)",color:"var(--mantine-color-text)",borderRadius:"var(--mantine-radius-sm)"},...r},a.createElement(B.Z,null,a.createElement(z.q,{src:e,radius:"xl"}),a.createElement("div",{style:{flex:1}},a.createElement(Text.x,{size:"sm",fw:500},t),a.createElement(Text.x,{c:"dimmed",size:"xs"},n)),o||a.createElement(Z.Z,{size:"1rem"})))),L={type:"code",component:function(){return a.createElement(l.v,{withArrow:!0},a.createElement(l.v.Target,null,a.createElement(G,{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",name:"Harriette Spoonlicker",email:"hspoonlicker@outlook.com"})),a.createElement(g,{withTarget:!1}))},code:P,centered:!0};var N=n(91516);let _=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`,F={type:"styles-api",data:N.k,component:function(e){return a.createElement(l.v,{...e,opened:!0,withArrow:!0,position:"left",trapFocus:!1},a.createElement(g,null))},code:_,centered:!0},U=`
import { Group, Menu } from '@mantine/core';

function Demo() {
  const menus = Array(4)
    .fill(0)
    .map((e, i) => (
      <Menu
        key={i}
        trigger="click-hover"
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        {/* ... menu items */}
      </Menu>
    ));
  return <Group>{menus}</Group>;
}
`,W={type:"code",code:U,component:function(){let e=[,,,,].fill(0).map((e,t)=>a.createElement(l.v,{key:t,trigger:"click-hover",loop:!1,withinPortal:!1,trapFocus:!1,menuItemTabIndex:0},a.createElement(g,null)));return a.createElement(B.Z,null,e)},centered:!0};var V=n(3916),O=n(54568);let H=(0,V.A)(O.us.Menu);function K(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n,KeyboardEventsTable:a,StylesApiSelectors:l,TargetComponent:i}=t;return n||X("Demo",!0),a||X("KeyboardEventsTable",!0),l||X("StylesApiSelectors",!0),i||X("TargetComponent",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["Dropdown opened state can be controlled with ",(0,o.jsx)(t.code,{children:"opened"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Menu } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Menu opened={opened} onChange={setOpened}>\n      {/* Menu content */}\n    </Menu>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"show-menu-on-hover",children:"Show menu on hover"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," to reveal dropdown when hovers over menu target and dropdown.\n",(0,o.jsx)(t.code,{children:"closeDelay"})," and ",(0,o.jsx)(t.code,{children:"openDelay"})," props can be used to control open and close delay in ms.\nNote that:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you set ",(0,o.jsx)(t.code,{children:"closeDelay={0}"})," then menu will close before user will reach dropdown, set ",(0,o.jsx)(t.code,{children:"offset={0}"})," to remove space between target element and dropdown."]}),"\n",(0,o.jsxs)(t.li,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n"]}),"\n",(0,o.jsx)(n,{data:b}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Menu"})," that is revealed on hover accessible on all devices, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'})," instead.\nThe dropdown will be revealed on hover on desktop and on click on mobile devices."]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,o.jsx)(n,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsx)(n,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"transitions",children:"Transitions"}),"\n",(0,o.jsxs)(t.p,{children:["Menu dropdown can be animated with any of premade transitions from ",(0,o.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component:"]}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-menuitem",children:"Custom component as Menu.Item"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"Menu.Item"})," renders as button element, to change that set ",(0,o.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,o.jsx)(n,{data:A}),"\n",(0,o.jsxs)(t.p,{children:["Note that the component you pass to ",(0,o.jsx)(t.code,{children:"component"})," prop should allow spreading props to its root element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Menu } from '@mantine/core';\n\n// ❌ Will not work with Menu.Item\nfunction IncorrectItem() {\n  return <button type=\"button\">My custom Menu item</button>;\n}\n\n// ✅ Will work correctly with Menu.Item\nfunction CorrectItem(\n  props: React.ComponentPropsWithoutRef<'button'>\n) {\n  return (\n    <button type=\"button\" {...props}>\n      My custom Menu item\n    </button>\n  );\n}\n\nfunction Demo() {\n  // ❌ Will not work\n  const incorrect = <Menu.Item component={IncorrectItem} />;\n\n  // ✅ Will work\n  const correct = <Menu.Item component={CorrectItem} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-target",children:"Custom component as target"}),"\n",(0,o.jsx)(n,{data:L}),"\n",(0,o.jsx)(l,{component:"Menu"}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(i,{component:"Menu"}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["Menu follows ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Dropdown element has ",(0,o.jsx)(t.code,{children:'role="menu"'})," and ",(0,o.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Target element has ",(0,o.jsx)(t.code,{children:'aria-haspopup="menu"'}),", ",(0,o.jsx)(t.code,{children:"aria-expanded"}),", ",(0,o.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Menu item has ",(0,o.jsx)(t.code,{children:'role="menuitem"'})," attribute"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"supported-target-elements",children:"Supported target elements"}),"\n",(0,o.jsxs)(t.p,{children:["Uncontrolled Menu with ",(0,o.jsx)(t.code,{children:'trigger="click"'})," (default) will be accessible only when used with ",(0,o.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,o.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,o.jsx)(t.code,{children:"Space"})," and ",(0,o.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,o.jsx)(t.h3,{id:"hover-menu",children:"Hover menu"}),"\n",(0,o.jsxs)(t.p,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",children:"WAI-ARIA recommendations for navigation"}),"."]}),"\n",(0,o.jsx)(n,{data:W}),"\n",(0,o.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,o.jsx)(a,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"},{key:"ArrowUp",description:"Moves focus to previous menu item",condition:"Focus within dropdown"},{key:"ArrowDown",description:"Moves focus to next menu item",condition:"Focus within dropdown"},{key:"Home",description:"Moves focus to first menu item",condition:"Focus within dropdown"},{key:"End",description:"Moves focus to last menu item",condition:"Focus within dropdown"}]}),"\n",(0,o.jsxs)(t.p,{children:["If you also need to support ",(0,o.jsx)(t.code,{children:"Tab"})," and ",(0,o.jsx)(t.code,{children:"Shift + Tab"})," then set ",(0,o.jsx)(t.code,{children:"menuItemTabIndex={0}"}),"."]})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(H,{...e,children:(0,o.jsx)(K,{...e})})}function X(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},67240:function(e,t,n){"use strict";n.d(t,{M:function(){return r},c:function(){return o}});let o=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},30770:function(e,t,n){"use strict";n.d(t,{q:function(){return M}});var o=n(27378),r=n(92082),a=n(83453),l=n(96739),i=n(6231),c=n(56589),s=n(50332),d=n(20410);let u=(0,o.createContext)(null),m=u.Provider;var h={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"};let p={},g=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.bG)(t)}})),v=(0,d.d)((e,t)=>{let n=(0,l.w)("AvatarGroup",p,e),{classNames:r,className:a,style:s,styles:d,unstyled:u,vars:v,spacing:f,...w}=n,b=(0,i.y)({name:"AvatarGroup",classes:h,props:n,className:a,style:s,classNames:r,styles:d,unstyled:u,vars:v,varsResolver:g,rootSelector:"group"});return o.createElement(m,{value:!0},o.createElement(c.x,{ref:t,...b("group"),...w}))});function f(e){return o.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.classes=h,v.displayName="@mantine/core/AvatarGroup";let w={},b=(0,a.Z)((e,{size:t,radius:n,variant:o,gradient:a,color:l,autoContrast:i})=>{let c=e.variantColorResolver({color:l||"gray",theme:e,gradient:a,variant:o||"light",autoContrast:i});return{root:{"--avatar-size":(0,r.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,r.H5)(n),"--avatar-bg":l||o?c.background:void 0,"--avatar-color":l||o?c.color:void 0,"--avatar-bd":l||o?c.border:void 0}}}),M=(0,s.b)((e,t)=>{let n=(0,l.w)("Avatar",w,e),{classNames:r,className:a,style:s,styles:d,unstyled:m,vars:p,src:g,alt:v,radius:M,color:x,gradient:y,imageProps:E,children:I,autoContrast:j,...k}=n,S=function(){let e=(0,o.useContext)(u);return{withinGroup:!!e}}(),[T,D]=(0,o.useState)(!g),C=(0,i.y)({name:"Avatar",props:n,classes:h,className:a,style:s,classNames:r,styles:d,unstyled:m,vars:p,varsResolver:b});return(0,o.useEffect)(()=>D(!g),[g]),o.createElement(c.x,{...C("root"),mod:{"within-group":S.withinGroup},ref:t,...k},T?o.createElement("span",{...C("placeholder"),title:v},I||o.createElement(f,null)):o.createElement("img",{...E,...C("image"),src:g,alt:v,onError:e=>{D(!0),E?.onError?.(e)}}))});M.classes=h,M.displayName="@mantine/core/Avatar",M.Group=v}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=25852)}),_N_E=e.O()}]);
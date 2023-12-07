(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8777],{84605:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},65897:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},17569:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},89611:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},25852:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/menu",function(){return n(788)}])},788:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var o=n(24246),r=n(71670),a=n(3916),l=n(30289),i=n(27378),c=n(82409),s=n(17569),d=n(65897),u=n(60060),m=n(27854),h=(0,n(54764).Z)("arrows-left-right","IconArrowsLeftRight",[["path",{d:"M21 17l-18 0",key:"svg-0"}],["path",{d:"M6 10l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M3 7l18 0",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]]),p=n(89611),g=n(71078),v=n(8671),Text=n(26569);function f({widthRightSection:e=!0,withTarget:t=!0}){let n={style:{width:(0,g.h)(14),height:(0,g.h)(14)}};return i.createElement(i.Fragment,null,t&&i.createElement(c.v.Target,null,i.createElement(v.z,null,"Toggle menu")),i.createElement(c.v.Dropdown,null,i.createElement(c.v.Label,null,"Application"),i.createElement(c.v.Item,{leftSection:i.createElement(s.Z,{...n})},"Settings"),i.createElement(c.v.Item,{leftSection:i.createElement(d.Z,{...n})},"Messages"),i.createElement(c.v.Item,{leftSection:i.createElement(u.Z,{...n})},"Gallery"),e&&i.createElement(c.v.Item,{leftSection:i.createElement(m.Z,{...n}),rightSection:i.createElement(Text.x,{size:"xs",c:"dimmed"},"⌘K")},"Search"),i.createElement(c.v.Divider,null),i.createElement(c.v.Label,null,"Danger zone"),i.createElement(c.v.Item,{leftSection:i.createElement(h,{...n})},"Transfer my data"),i.createElement(c.v.Item,{color:"red",leftSection:i.createElement(p.Z,{...n})},"Delete my account")))}let w=`
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
`,b={type:"code",code:w,component:function(){return i.createElement(c.v,{shadow:"md",width:200,withinPortal:!0},i.createElement(f,null))},centered:!0},M=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,x={type:"code",code:M,component:function(){return i.createElement(c.v,{trigger:"hover",openDelay:100,closeDelay:400},i.createElement(f,null))},centered:!0},y=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,E={type:"code",code:y,component:function(){return i.createElement(c.v,{trigger:"click-hover",openDelay:100,closeDelay:400},i.createElement(f,null))},centered:!0},I=`
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
`,j={type:"code",code:I,component:function(){return i.createElement(c.v,null,i.createElement(c.v.Target,null,i.createElement(v.z,null,"Toggle menu")),i.createElement(c.v.Dropdown,null,i.createElement(c.v.Label,null,"Application"),i.createElement(c.v.Item,{leftSection:i.createElement(s.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}})},"Settings"),i.createElement(c.v.Item,{leftSection:i.createElement(d.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}})},"Messages"),i.createElement(c.v.Item,{leftSection:i.createElement(u.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}})},"Gallery"),i.createElement(c.v.Item,{leftSection:i.createElement(m.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}}),disabled:!0},"Search"),i.createElement(c.v.Divider,null),i.createElement(c.v.Label,null,"Danger zone"),i.createElement(c.v.Item,{leftSection:i.createElement(h,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}})},"Transfer my data"),i.createElement(c.v.Item,{color:"red",leftSection:i.createElement(p.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}})},"Delete my account")))},centered:!0};var k=n(67240);let S=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`,T={type:"configurator",component:function(e){return i.createElement(c.v,{opened:!0,trapFocus:!1,...e},i.createElement(f,null))},code:S,centered:!0,controls:[{prop:"position",type:"select",initialValue:"bottom",libraryValue:"bottom",data:[{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"},{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"}]},{prop:"offset",type:"number",initialValue:5,libraryValue:5,max:20,min:-20},{prop:"withArrow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"arrowPosition",type:"select",data:k.M,initialValue:"side",libraryValue:"side"}]},D=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`,C={type:"code",code:D,component:function(){return i.createElement(c.v,{transitionProps:{transition:"rotate-right",duration:150}},i.createElement(f,null))},centered:!0};var A=n(31550);let Z=`
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
`,R={type:"code",code:Z,component:function(){return i.createElement(c.v,{width:200,shadow:"md"},i.createElement(c.v.Target,null,i.createElement(v.z,null,"Toggle menu")),i.createElement(c.v.Dropdown,null,i.createElement(c.v.Item,{component:"a",href:"https://mantine.dev"},"Mantine website"),i.createElement(c.v.Item,{leftSection:i.createElement(A.Z,{style:{width:(0,g.h)(14),height:(0,g.h)(14)}}),component:"a",href:"https://mantine.dev",target:"_blank"},"External link")))},centered:!0};var B=n(84605),P=n(19397),z=n(22971),G=n(30770);let F=`
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
`,L=(0,i.forwardRef)(({image:e,name:t,email:n,icon:o,...r},a)=>i.createElement(P.k,{ref:a,style:{padding:"var(--mantine-spacing-md)",color:"var(--mantine-color-text)",borderRadius:"var(--mantine-radius-sm)"},...r},i.createElement(z.Z,null,i.createElement(G.q,{src:e,radius:"xl"}),i.createElement("div",{style:{flex:1}},i.createElement(Text.x,{size:"sm",fw:500},t),i.createElement(Text.x,{c:"dimmed",size:"xs"},n)),o||i.createElement(B.Z,{size:"1rem"})))),N={type:"code",component:function(){return i.createElement(c.v,{withArrow:!0},i.createElement(c.v.Target,null,i.createElement(L,{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",name:"Harriette Spoonlicker",email:"hspoonlicker@outlook.com"})),i.createElement(f,{withTarget:!1}))},code:F,centered:!0};var _=n(91516);let U=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`,W={type:"styles-api",data:_.k,component:function(e){return i.createElement(c.v,{...e,opened:!0,withArrow:!0,position:"left",trapFocus:!1},i.createElement(f,null))},code:U,centered:!0},V=`
import { Menu, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Menu trigger="click-hover" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        {/* ... menu items */}
      </Menu>
      <Menu trigger="click-hover" loop={false} withinPortal={false} trapFocus={false} menuItemTabIndex={0}>
        {/* ... menu items */}
      </Menu>
    </Group>
  );
}
`,O={type:"code",code:V,component:function(){return i.createElement(z.Z,null,i.createElement(c.v,{trigger:"click-hover",loop:!1,withinPortal:!1,trapFocus:!1,menuItemTabIndex:0},i.createElement(f,null)),i.createElement(c.v,{trigger:"click-hover",loop:!1,withinPortal:!1,trapFocus:!1,menuItemTabIndex:0},i.createElement(f,null)))},centered:!0},H=(0,a.A)(l.us.Menu);function K(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n,KeyboardEventsTable:a,StylesApiSelectors:l,TargetComponent:i}=t;return n||X("Demo",!0),a||X("KeyboardEventsTable",!0),l||X("StylesApiSelectors",!0),i||X("TargetComponent",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["Dropdown opened state can be controlled with ",(0,o.jsx)(t.code,{children:"opened"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Menu } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Menu opened={opened} onChange={setOpened}>\n      {/* Menu content */}\n    </Menu>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"show-menu-on-hover",children:"Show menu on hover"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," to reveal dropdown when hovers over menu target and dropdown.\n",(0,o.jsx)(t.code,{children:"closeDelay"})," and ",(0,o.jsx)(t.code,{children:"openDelay"})," props can be used to control open and close delay in ms.\nNote that:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you set ",(0,o.jsx)(t.code,{children:"closeDelay={0}"})," then menu will close before user will reach dropdown, set ",(0,o.jsx)(t.code,{children:"offset={0}"})," to remove space between target element and dropdown."]}),"\n",(0,o.jsxs)(t.li,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n"]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Menu"})," that is revealed on hover accessible on all devices, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'})," instead.\nThe dropdown will be revealed on hover on desktop and on click on mobile devices."]}),"\n",(0,o.jsx)(n,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,o.jsx)(n,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"transitions",children:"Transitions"}),"\n",(0,o.jsxs)(t.p,{children:["Menu dropdown can be animated with any of premade transitions from ",(0,o.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component:"]}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-menuitem",children:"Custom component as Menu.Item"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"Menu.Item"})," renders as button element, to change that set ",(0,o.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,o.jsx)(n,{data:R}),"\n",(0,o.jsxs)(t.p,{children:["Note that the component you pass to ",(0,o.jsx)(t.code,{children:"component"})," prop should allow spreading props to its root element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Menu } from '@mantine/core';\n\n// ❌ Will not work with Menu.Item\nfunction IncorrectItem() {\n  return <button type=\"button\">My custom Menu item</button>;\n}\n\n// ✅ Will work correctly with Menu.Item\nfunction CorrectItem(\n  props: React.ComponentPropsWithoutRef<'button'>\n) {\n  return (\n    <button type=\"button\" {...props}>\n      My custom Menu item\n    </button>\n  );\n}\n\nfunction Demo() {\n  // ❌ Will not work\n  const incorrect = <Menu.Item component={IncorrectItem} />;\n\n  // ✅ Will work\n  const correct = <Menu.Item component={CorrectItem} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-target",children:"Custom component as target"}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(l,{component:"Menu"}),"\n",(0,o.jsx)(n,{data:W}),"\n",(0,o.jsx)(i,{component:"Menu"}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["Menu follows ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Dropdown element has ",(0,o.jsx)(t.code,{children:'role="menu"'})," and ",(0,o.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Target element has ",(0,o.jsx)(t.code,{children:'aria-haspopup="menu"'}),", ",(0,o.jsx)(t.code,{children:"aria-expanded"}),", ",(0,o.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Menu item has ",(0,o.jsx)(t.code,{children:'role="menuitem"'})," attribute"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"supported-target-elements",children:"Supported target elements"}),"\n",(0,o.jsxs)(t.p,{children:["Uncontrolled Menu with ",(0,o.jsx)(t.code,{children:'trigger="click"'})," (default) will be accessible only when used with ",(0,o.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,o.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,o.jsx)(t.code,{children:"Space"})," and ",(0,o.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,o.jsx)(t.h3,{id:"hover-menu",children:"Hover menu"}),"\n",(0,o.jsxs)(t.p,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",children:"WAI-ARIA recommendations for navigation"}),"."]}),"\n",(0,o.jsx)(n,{data:O}),"\n",(0,o.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,o.jsx)(a,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"},{key:"ArrowUp",description:"Moves focus to previous menu item",condition:"Focus within dropdown"},{key:"ArrowDown",description:"Moves focus to next menu item",condition:"Focus within dropdown"},{key:"Home",description:"Moves focus to first menu item",condition:"Focus within dropdown"},{key:"End",description:"Moves focus to last menu item",condition:"Focus within dropdown"}]}),"\n",(0,o.jsxs)(t.p,{children:["If you also need to support ",(0,o.jsx)(t.code,{children:"Tab"})," and ",(0,o.jsx)(t.code,{children:"Shift + Tab"})," then set ",(0,o.jsx)(t.code,{children:"menuItemTabIndex={0}"}),"."]})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(H,{...e,children:(0,o.jsx)(K,{...e})})}function X(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},67240:function(e,t,n){"use strict";n.d(t,{M:function(){return r},c:function(){return o}});let o=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},30770:function(e,t,n){"use strict";n.d(t,{q:function(){return M}});var o=n(27378),r=n(92082),a=n(83453),l=n(96739),i=n(6231),c=n(56589),s=n(50332),d=n(20410);let u=(0,o.createContext)(null),m=u.Provider;var h={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"};let p={},g=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.bG)(t)}})),v=(0,d.d)((e,t)=>{let n=(0,l.w)("AvatarGroup",p,e),{classNames:r,className:a,style:s,styles:d,unstyled:u,vars:v,spacing:f,...w}=n,b=(0,i.y)({name:"AvatarGroup",classes:h,props:n,className:a,style:s,classNames:r,styles:d,unstyled:u,vars:v,varsResolver:g,rootSelector:"group"});return o.createElement(m,{value:!0},o.createElement(c.x,{ref:t,...b("group"),...w}))});function f(e){return o.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.classes=h,v.displayName="@mantine/core/AvatarGroup";let w={},b=(0,a.Z)((e,{size:t,radius:n,variant:o,gradient:a,color:l})=>{let i=e.variantColorResolver({color:l||"gray",theme:e,gradient:a,variant:o||"light"});return{root:{"--avatar-size":(0,r.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,r.H5)(n),"--avatar-bg":l||o?i.background:void 0,"--avatar-color":l||o?i.color:void 0,"--avatar-bd":l||o?i.border:void 0}}}),M=(0,s.b)((e,t)=>{let n=(0,l.w)("Avatar",w,e),{classNames:r,className:a,style:s,styles:d,unstyled:m,vars:p,src:g,alt:v,radius:M,color:x,gradient:y,imageProps:E,children:I,...j}=n,k=function(){let e=(0,o.useContext)(u);return{withinGroup:!!e}}(),[S,T]=(0,o.useState)(!g),D=(0,i.y)({name:"Avatar",props:n,classes:h,className:a,style:s,classNames:r,styles:d,unstyled:m,vars:p,varsResolver:b});return(0,o.useEffect)(()=>T(!g),[g]),o.createElement(c.x,{...D("root"),mod:{"within-group":k.withinGroup},ref:t,...j},S?o.createElement("span",{...D("placeholder"),title:v},I||o.createElement(f,null)):o.createElement("img",{...E,...D("image"),src:g,alt:v,onError:e=>{T(!0),E?.onError?.(e)}}))});M.classes=h,M.displayName="@mantine/core/Avatar",M.Group=v}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=25852)}),_N_E=e.O()}]);
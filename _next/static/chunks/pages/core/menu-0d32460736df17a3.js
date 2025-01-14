(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8777],{67469:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/menu",function(){return t(9811)}])},9811:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var o=t(52322),r=t(45392),i=t(36761),s=t(13274),a=t(11429),c=t(40289),l=t(27111),d=(0,t(73681).Z)("outline","arrows-left-right","IconArrowsLeftRight",[["path",{d:"M21 17l-18 0",key:"svg-0"}],["path",{d:"M6 10l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M3 7l18 0",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]]),u=t(47813),h=t(39629),m=t(8582);function p({widthRightSection:e=!0,withTarget:n=!0}){return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)(i.v.Target,{children:(0,o.jsx)(h.z,{children:"Toggle menu"})}),(0,o.jsxs)(i.v.Dropdown,{children:[(0,o.jsx)(i.v.Label,{children:"Application"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(s.Z,{size:14}),children:"Settings"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(a.Z,{size:14}),children:"Messages"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(c.Z,{size:14}),children:"Gallery"}),e&&(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(l.Z,{size:14}),rightSection:(0,o.jsx)(m.x,{size:"xs",c:"dimmed",children:"⌘K"}),children:"Search"}),(0,o.jsx)(i.v.Divider,{}),(0,o.jsx)(i.v.Label,{children:"Danger zone"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(d,{size:14}),children:"Transfer my data"}),(0,o.jsx)(i.v.Item,{color:"red",leftSection:(0,o.jsx)(u.Z,{size:14}),children:"Delete my account"})]})]})}let x={type:"code",code:`
import { Menu, Button, Text } from '@mantine/core';
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
        <Menu.Item leftSection={<IconSettings size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
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
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.v,{shadow:"md",width:200,withinPortal:!0,children:(0,o.jsx)(p,{})})},centered:!0},v={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.v,{trigger:"hover",openDelay:100,closeDelay:400,children:(0,o.jsx)(p,{})})},centered:!0},g={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.v,{trigger:"click-hover",openDelay:100,closeDelay:400,children:(0,o.jsx)(p,{})})},centered:!0},f={type:"code",code:`
import { Menu, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`,component:function(){return(0,o.jsxs)(i.v,{children:[(0,o.jsx)(i.v.Target,{children:(0,o.jsx)(h.z,{children:"Toggle menu"})}),(0,o.jsxs)(i.v.Dropdown,{children:[(0,o.jsx)(i.v.Label,{children:"Application"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(s.Z,{size:14}),children:"Settings"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(a.Z,{size:14}),children:"Messages"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(c.Z,{size:14}),children:"Gallery"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(l.Z,{size:14}),disabled:!0,children:"Search"}),(0,o.jsx)(i.v.Divider,{}),(0,o.jsx)(i.v.Label,{children:"Danger zone"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(d,{size:14}),children:"Transfer my data"}),(0,o.jsx)(i.v.Item,{color:"red",leftSection:(0,o.jsx)(u.Z,{size:14}),children:"Delete my account"})]})]})},centered:!0},j={type:"configurator",component:function(e){return(0,o.jsx)(i.v,{opened:!0,trapFocus:!1,...e,children:(0,o.jsx)(p,{})})},code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`,centered:!0,controls:[{prop:"position",type:"select",initialValue:"bottom",libraryValue:"bottom",data:[{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"},{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"}]},{prop:"offset",type:"number",initialValue:5,libraryValue:5,max:20,min:-20},{prop:"withArrow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"arrowPosition",type:"select",data:t(19282).M,initialValue:"side",libraryValue:"side"}]},b={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.v,{transitionProps:{transition:"rotate-right",duration:150},children:(0,o.jsx)(p,{})})},centered:!0};var M=t(79797);let w={type:"code",code:`
import { Menu, Button } from '@mantine/core';
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
          leftSection={<IconExternalLink size={14} />}
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
`,component:function(){return(0,o.jsxs)(i.v,{width:200,shadow:"md",children:[(0,o.jsx)(i.v.Target,{children:(0,o.jsx)(h.z,{children:"Toggle menu"})}),(0,o.jsxs)(i.v.Dropdown,{children:[(0,o.jsx)(i.v.Item,{component:"a",href:"https://mantine.dev",children:"Mantine website"}),(0,o.jsx)(i.v.Item,{leftSection:(0,o.jsx)(M.Z,{size:14}),component:"a",href:"https://mantine.dev",target:"_blank",children:"External link"})]})]})},centered:!0};var y=t(2784),I=t(44101),k=t(63409),S=t(93010),T=t(82067);let C=`
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

        {icon || <IconChevronRight size={16} />}
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
`,D=(0,y.forwardRef)(({image:e,name:n,email:t,icon:r,...i},s)=>(0,o.jsx)(k.k,{ref:s,style:{padding:"var(--mantine-spacing-md)",color:"var(--mantine-color-text)",borderRadius:"var(--mantine-radius-sm)"},...i,children:(0,o.jsxs)(S.Z,{children:[(0,o.jsx)(T.q,{src:e,radius:"xl"}),(0,o.jsxs)("div",{style:{flex:1},children:[(0,o.jsx)(m.x,{size:"sm",fw:500,children:n}),(0,o.jsx)(m.x,{c:"dimmed",size:"xs",children:t})]}),r||(0,o.jsx)(I.Z,{size:16})]})})),z={type:"code",component:function(){return(0,o.jsxs)(i.v,{withArrow:!0,children:[(0,o.jsx)(i.v.Target,{children:(0,o.jsx)(D,{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",name:"Harriette Spoonlicker",email:"hspoonlicker@outlook.com"})}),(0,o.jsx)(p,{withTarget:!1})]})},code:C,centered:!0};var A=t(98170);let Z=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`,R={type:"styles-api",data:A.k,component:function(e){return(0,o.jsx)(i.v,{...e,opened:!0,withArrow:!0,position:"left",trapFocus:!1,children:(0,o.jsx)(p,{})})},code:Z,centered:!0},B={type:"code",code:`
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
`,component:function(){let e=[,,,,].fill(0).map((e,n)=>(0,o.jsx)(i.v,{trigger:"click-hover",loop:!1,withinPortal:!1,trapFocus:!1,menuItemTabIndex:0,children:(0,o.jsx)(p,{})},n));return(0,o.jsx)(S.Z,{children:e})},centered:!0};var E=t(54078),_=t(15019);let P=(0,E.A)(_.us.Menu);function G(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t,KeyboardEventsTable:i,StylesApiSelectors:s,TargetComponent:a}=n;return t||N("Demo",!0),i||N("KeyboardEventsTable",!0),s||N("StylesApiSelectors",!0),a||N("TargetComponent",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["Dropdown opened state can be controlled with ",(0,o.jsx)(n.code,{children:"opened"})," and ",(0,o.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Menu } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Menu opened={opened} onChange={setOpened}>\n      {/* Menu content */}\n    </Menu>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"show-menu-on-hover",children:"Show menu on hover"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:'trigger="hover"'})," to reveal dropdown when hovers over menu target and dropdown.\n",(0,o.jsx)(n.code,{children:"closeDelay"})," and ",(0,o.jsx)(n.code,{children:"openDelay"})," props can be used to control open and close delay in ms.\nNote that:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you set ",(0,o.jsx)(n.code,{children:"closeDelay={0}"})," then menu will close before user will reach dropdown, set ",(0,o.jsx)(n.code,{children:"offset={0}"})," to remove space between target element and dropdown."]}),"\n",(0,o.jsxs)(n.li,{children:["Menu with ",(0,o.jsx)(n.code,{children:'trigger="hover"'})," is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use ",(0,o.jsx)(n.code,{children:'trigger="click-hover"'}),"."]}),"\n"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"Menu"})," that is revealed on hover accessible on all devices, use ",(0,o.jsx)(n.code,{children:'trigger="click-hover"'})," instead.\nThe dropdown will be revealed on hover on desktop and on click on mobile devices."]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(n.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,o.jsxs)(n.p,{children:["Menu dropdown can be animated with any of premade transitions from ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component:"]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(n.h2,{id:"custom-component-as-menuitem",children:"Custom component as Menu.Item"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"Menu.Item"})," renders as button element, to change that set ",(0,o.jsx)(n.code,{children:"component"})," prop:"]}),"\n",(0,o.jsx)(t,{data:w}),"\n",(0,o.jsxs)(n.p,{children:["Note that the component you pass to ",(0,o.jsx)(n.code,{children:"component"})," prop should allow spreading props to its root element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Menu } from '@mantine/core';\n\n// ❌ Will not work with Menu.Item\nfunction IncorrectItem() {\n  return <button type=\"button\">My custom Menu item</button>;\n}\n\n// ✅ Will work correctly with Menu.Item\nconst CorrectItem = forwardRef<\n  HTMLButtonElement,\n  React.ComponentPropsWithoutRef<'button'>\n>((props, ref) => (\n  <button type=\"button\" {...props} ref={ref}>\n    My custom Menu item\n  </button>\n));\n\nfunction Demo() {\n  // ❌ Will not work\n  const incorrect = <Menu.Item component={IncorrectItem} />;\n\n  // ✅ Will work\n  const correct = <Menu.Item component={CorrectItem} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"custom-component-as-target",children:"Custom component as target"}),"\n",(0,o.jsx)(t,{data:z}),"\n",(0,o.jsx)(s,{component:"Menu"}),"\n",(0,o.jsx)(t,{data:R}),"\n",(0,o.jsx)(a,{component:"Menu"}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["Menu follows ",(0,o.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Dropdown element has ",(0,o.jsx)(n.code,{children:'role="menu"'})," and ",(0,o.jsx)(n.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,o.jsxs)(n.li,{children:["Target element has ",(0,o.jsx)(n.code,{children:'aria-haspopup="menu"'}),", ",(0,o.jsx)(n.code,{children:"aria-expanded"}),", ",(0,o.jsx)(n.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n",(0,o.jsxs)(n.li,{children:["Menu item has ",(0,o.jsx)(n.code,{children:'role="menuitem"'})," attribute"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"supported-target-elements",children:"Supported target elements"}),"\n",(0,o.jsxs)(n.p,{children:["Uncontrolled Menu with ",(0,o.jsx)(n.code,{children:'trigger="click"'})," (default) will be accessible only when used with ",(0,o.jsx)(n.code,{children:"button"})," element or component that renders it (",(0,o.jsx)(n.a,{href:"/core/button/",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,o.jsx)(n.code,{children:"Space"})," and ",(0,o.jsx)(n.code,{children:"Enter"})," key presses."]}),"\n",(0,o.jsx)(n.h3,{id:"hover-menu",children:"Hover menu"}),"\n",(0,o.jsxs)(n.p,{children:["Menu with ",(0,o.jsx)(n.code,{children:'trigger="hover"'})," is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use ",(0,o.jsx)(n.code,{children:'trigger="click-hover"'}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsxs)(n.p,{children:["If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the ",(0,o.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",children:"WAI-ARIA recommendations for navigation"}),"."]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(n.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,o.jsx)(i,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"},{key:"ArrowUp",description:"Moves focus to previous menu item",condition:"Focus within dropdown"},{key:"ArrowDown",description:"Moves focus to next menu item",condition:"Focus within dropdown"},{key:"Home",description:"Moves focus to first menu item",condition:"Focus within dropdown"},{key:"End",description:"Moves focus to last menu item",condition:"Focus within dropdown"}]}),"\n",(0,o.jsxs)(n.p,{children:["If you also need to support ",(0,o.jsx)(n.code,{children:"Tab"})," and ",(0,o.jsx)(n.code,{children:"Shift + Tab"})," then set ",(0,o.jsx)(n.code,{children:"menuItemTabIndex={0}"}),"."]})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(P,{...e,children:(0,o.jsx)(G,{...e})})}function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44101:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(73681).Z)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},11429:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(73681).Z)("outline","message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},40289:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(73681).Z)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},13274:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(73681).Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},47813:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(73681).Z)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},19282:function(e,n,t){"use strict";t.d(n,{M:function(){return r},c:function(){return o}});let o=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},82067:function(e,n,t){"use strict";t.d(n,{q:function(){return w}});var o=t(52322),r=t(2784),i=t(91482),s=t(11200),a=t(38483),c=t(46690),l=t(28559),d=t(33502),u=t(82027);let h=(0,r.createContext)(null),m=h.Provider;var p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let x={},v=(0,s.Z)((e,{spacing:n})=>({group:{"--ag-spacing":(0,i.bG)(n)}})),g=(0,u.d5)((e,n)=>{let t=(0,a.w)("AvatarGroup",x,e),{classNames:r,className:i,style:s,styles:d,unstyled:u,vars:h,spacing:g,...f}=t,j=(0,c.y)({name:"AvatarGroup",classes:p,props:t,className:i,style:s,classNames:r,styles:d,unstyled:u,vars:h,varsResolver:v,rootSelector:"group"});return(0,o.jsx)(m,{value:!0,children:(0,o.jsx)(l.x,{ref:n,...j("group"),...f})})});function f(e){return(0,o.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=p,g.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],b={},M=(0,s.Z)((e,{size:n,radius:t,variant:o,gradient:r,color:s,autoContrast:a,name:c,allowedInitialsColors:l})=>{let d="initials"===s&&"string"==typeof c?function(e,n=j){let t=Math.abs(function(e){let n=0;for(let t=0;t<e.length;t+=1)n=(n<<5)-n+e.charCodeAt(t)|0;return n}(e))%n.length;return n[t]}(c,l):s,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:o||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.ap)(n,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,i.H5)(t),"--avatar-bg":d||o?u.background:void 0,"--avatar-color":d||o?u.color:void 0,"--avatar-bd":d||o?u.border:void 0}}}),w=(0,d.b)((e,n)=>{let t=(0,a.w)("Avatar",b,e),{classNames:i,className:s,style:d,styles:u,unstyled:m,vars:x,src:v,alt:g,radius:j,color:w,gradient:y,imageProps:I,children:k,autoContrast:S,mod:T,name:C,allowedInitialsColors:D,...z}=t,A={withinGroup:!!(0,r.useContext)(h)},[Z,R]=(0,r.useState)(!v),B=(0,c.y)({name:"Avatar",props:t,classes:p,className:s,style:d,classNames:i,styles:u,unstyled:m,vars:x,varsResolver:M});return(0,r.useEffect)(()=>R(!v),[v]),(0,o.jsx)(l.x,{...B("root"),mod:[{"within-group":A.withinGroup},T],ref:n,...z,children:Z?(0,o.jsx)("span",{...B("placeholder"),title:g,children:k||"string"==typeof C&&function(e,n=2){let t=e.split(" ");return 1===t.length?e.slice(0,n).toUpperCase():t.map(e=>e[0]).slice(0,n).join("").toUpperCase()}(C)||(0,o.jsx)(f,{})}):(0,o.jsx)("img",{...I,...B("image"),src:v,alt:g,onError:e=>{R(!0),I?.onError?.(e)}})})});w.classes=p,w.displayName="@mantine/core/Avatar",w.Group=g}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=67469)}),_N_E=e.O()}]);
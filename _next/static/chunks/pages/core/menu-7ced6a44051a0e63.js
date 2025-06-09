(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88005],{18693:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/menu",function(){return n(8139)}])},8139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var o=n(31085),r=n(71184),i=n(79343),s=n(31045),a=n(43959),l=n(33102),c=n(5310),d=(0,n(73366).A)("outline","arrows-left-right","IconArrowsLeftRight",[["path",{d:"M21 17l-18 0",key:"svg-0"}],["path",{d:"M6 10l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M3 7l18 0",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]]),u=n(13660),h=n(52022),m=n(93065);function p({widthRightSection:e=!0,withTarget:t=!0}){return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)(i.W.Target,{children:(0,o.jsx)(h.$,{children:"Toggle menu"})}),(0,o.jsxs)(i.W.Dropdown,{children:[(0,o.jsx)(i.W.Label,{children:"Application"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(s.A,{size:14}),children:"Settings"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(a.A,{size:14}),children:"Messages"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(l.A,{size:14}),children:"Gallery"}),e&&(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(c.A,{size:14}),rightSection:(0,o.jsx)(m.E,{size:"xs",c:"dimmed",children:"⌘K"}),children:"Search"}),(0,o.jsx)(i.W.Divider,{}),(0,o.jsx)(i.W.Label,{children:"Danger zone"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(d,{size:14}),children:"Transfer my data"}),(0,o.jsx)(i.W.Item,{color:"red",leftSection:(0,o.jsx)(u.A,{size:14}),children:"Delete my account"})]})]})}let g={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(i.W,{shadow:"md",width:200,withinPortal:!0,children:(0,o.jsx)(p,{})})},centered:!0};var x=n(21292);let v={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.W,{trigger:"hover",openDelay:100,closeDelay:400,children:(0,o.jsx)(p,{})})},centered:!0},M={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.W,{trigger:"click-hover",openDelay:100,closeDelay:400,children:(0,o.jsx)(p,{})})},centered:!0},j={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(i.W,{children:[(0,o.jsx)(i.W.Target,{children:(0,o.jsx)(h.$,{children:"Toggle menu"})}),(0,o.jsxs)(i.W.Dropdown,{children:[(0,o.jsx)(i.W.Label,{children:"Application"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(s.A,{size:14}),children:"Settings"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(a.A,{size:14}),children:"Messages"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(l.A,{size:14}),children:"Gallery"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(c.A,{size:14}),disabled:!0,children:"Search"}),(0,o.jsx)(i.W.Divider,{}),(0,o.jsx)(i.W.Label,{children:"Danger zone"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(d,{size:14}),children:"Transfer my data"}),(0,o.jsx)(i.W.Item,{color:"red",leftSection:(0,o.jsx)(u.A,{size:14}),children:"Delete my account"})]})]})},centered:!0},f={type:"configurator",component:function(e){return(0,o.jsx)(i.W,{opened:!0,trapFocus:!1,...e,children:(0,o.jsx)(p,{})})},code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`,centered:!0,controls:[{prop:"position",type:"select",initialValue:"bottom",libraryValue:"bottom",data:[{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"},{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"}]},{prop:"offset",type:"number",initialValue:5,libraryValue:5,max:20,min:-20},{prop:"withArrow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"arrowPosition",type:"select",data:n(73368).s,initialValue:"side",libraryValue:"side"}]},b={type:"code",code:`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`,component:function(){return(0,o.jsx)(i.W,{transitionProps:{transition:"rotate-right",duration:150},children:(0,o.jsx)(p,{})})},centered:!0};var y=n(81723);let w={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(i.W,{width:200,shadow:"md",children:[(0,o.jsx)(i.W.Target,{children:(0,o.jsx)(h.$,{children:"Toggle menu"})}),(0,o.jsxs)(i.W.Dropdown,{children:[(0,o.jsx)(i.W.Item,{component:"a",href:"https://mantine.dev",children:"Mantine website"}),(0,o.jsx)(i.W.Item,{leftSection:(0,o.jsx)(y.A,{size:14}),component:"a",href:"https://mantine.dev",target:"_blank",children:"External link"})]})]})},centered:!0};var I=n(14041),k=n(65815),S=n(33970),A=n(56051),W=n(86658);let T=`
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
`,D=(0,I.forwardRef)(({image:e,name:t,email:n,icon:r,...i},s)=>(0,o.jsx)(S.N,{ref:s,style:{padding:"var(--mantine-spacing-md)",color:"var(--mantine-color-text)",borderRadius:"var(--mantine-radius-sm)"},...i,children:(0,o.jsxs)(A.Y,{children:[(0,o.jsx)(W.e,{src:e,radius:"xl"}),(0,o.jsxs)("div",{style:{flex:1},children:[(0,o.jsx)(m.E,{size:"sm",fw:500,children:t}),(0,o.jsx)(m.E,{c:"dimmed",size:"xs",children:n})]}),r||(0,o.jsx)(k.A,{size:16})]})})),C={type:"code",component:function(){return(0,o.jsxs)(i.W,{withArrow:!0,children:[(0,o.jsx)(i.W.Target,{children:(0,o.jsx)(D,{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",name:"Harriette Spoonlicker",email:"hspoonlicker@outlook.com"})}),(0,o.jsx)(p,{withTarget:!1})]})},code:T,centered:!0};var z=n(50977);let R=`
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`,B={type:"styles-api",data:z.u,component:function(e){return(0,o.jsx)(i.W,{...e,opened:!0,withArrow:!0,position:"left",trapFocus:!1,children:(0,o.jsx)(p,{})})},code:R,centered:!0},E={type:"code",code:`
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
`,component:function(){let e=[,,,,].fill(0).map((e,t)=>(0,o.jsx)(i.W,{trigger:"click-hover",loop:!1,withinPortal:!1,trapFocus:!1,menuItemTabIndex:0,children:(0,o.jsx)(p,{})},t));return(0,o.jsx)(A.Y,{children:e})},centered:!0};var P=n(18675),_=n(20017);let L=(0,P.P)(_.XZ.Menu);function N(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:n,KeyboardEventsTable:i,StylesApiSelectors:s,TargetComponent:a}=t;return n||F("Demo",!0),i||F("KeyboardEventsTable",!0),s||F("StylesApiSelectors",!0),a||F("TargetComponent",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"submenus",children:"Submenus"}),"\n",(0,o.jsx)(n,{data:x.j,demoProps:{defaultExpanded:!1}}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["Dropdown opened state can be controlled with ",(0,o.jsx)(t.code,{children:"opened"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Menu } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Menu opened={opened} onChange={setOpened}>\n      {/* Menu content */}\n    </Menu>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"show-menu-on-hover",children:"Show menu on hover"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," to reveal dropdown when hovers over menu target and dropdown.\n",(0,o.jsx)(t.code,{children:"closeDelay"})," and ",(0,o.jsx)(t.code,{children:"openDelay"})," props can be used to control open and close delay in ms.\nNote that:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you set ",(0,o.jsx)(t.code,{children:"closeDelay={0}"})," then menu will close before user will reach dropdown, set ",(0,o.jsx)(t.code,{children:"offset={0}"})," to remove space between target element and dropdown."]}),"\n",(0,o.jsxs)(t.li,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n"]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Menu"})," that is revealed on hover accessible on all devices, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'})," instead.\nThe dropdown will be revealed on hover on desktop and on click on mobile devices."]}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,o.jsx)(n,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"transitions",children:"Transitions"}),"\n",(0,o.jsxs)(t.p,{children:["Menu dropdown can be animated with any of premade transitions from ",(0,o.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component:"]}),"\n",(0,o.jsx)(n,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-menuitem",children:"Custom component as Menu.Item"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"Menu.Item"})," renders as button element, to change that set ",(0,o.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsxs)(t.p,{children:["Note that the component you pass to ",(0,o.jsx)(t.code,{children:"component"})," prop should allow spreading props to its root element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Menu } from '@mantine/core';\n\n// ❌ Will not work with Menu.Item\nfunction IncorrectItem() {\n  return <button type=\"button\">My custom Menu item</button>;\n}\n\n// ✅ Will work correctly with Menu.Item\nconst CorrectItem = forwardRef<\n  HTMLButtonElement,\n  React.ComponentPropsWithoutRef<'button'>\n>((props, ref) => (\n  <button type=\"button\" {...props} ref={ref}>\n    My custom Menu item\n  </button>\n));\n\nfunction Demo() {\n  // ❌ Will not work\n  const incorrect = <Menu.Item component={IncorrectItem} />;\n\n  // ✅ Will work\n  const correct = <Menu.Item component={CorrectItem} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"custom-component-as-target",children:"Custom component as target"}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(s,{component:"Menu"}),"\n",(0,o.jsx)(n,{data:B}),"\n",(0,o.jsx)(a,{component:"Menu"}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["Menu follows ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Dropdown element has ",(0,o.jsx)(t.code,{children:'role="menu"'})," and ",(0,o.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Target element has ",(0,o.jsx)(t.code,{children:'aria-haspopup="menu"'}),", ",(0,o.jsx)(t.code,{children:"aria-expanded"}),", ",(0,o.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n",(0,o.jsxs)(t.li,{children:["Menu item has ",(0,o.jsx)(t.code,{children:'role="menuitem"'})," attribute"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"supported-target-elements",children:"Supported target elements"}),"\n",(0,o.jsxs)(t.p,{children:["Uncontrolled Menu with ",(0,o.jsx)(t.code,{children:'trigger="click"'})," (default) will be accessible only when used with ",(0,o.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,o.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,o.jsx)(t.code,{children:"Space"})," and ",(0,o.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,o.jsx)(t.h3,{id:"hover-menu",children:"Hover menu"}),"\n",(0,o.jsxs)(t.p,{children:["Menu with ",(0,o.jsx)(t.code,{children:'trigger="hover"'})," is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use ",(0,o.jsx)(t.code,{children:'trigger="click-hover"'}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",children:"WAI-ARIA recommendations for navigation"}),"."]}),"\n",(0,o.jsx)(n,{data:E}),"\n",(0,o.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,o.jsx)(i,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"},{key:"ArrowUp",description:"Moves focus to previous menu item",condition:"Focus within dropdown"},{key:"ArrowDown",description:"Moves focus to next menu item",condition:"Focus within dropdown"},{key:"Home",description:"Moves focus to first menu item",condition:"Focus within dropdown"},{key:"End",description:"Moves focus to last menu item",condition:"Focus within dropdown"}]}),"\n",(0,o.jsxs)(t.p,{children:["If you also need to support ",(0,o.jsx)(t.code,{children:"Tab"})," and ",(0,o.jsx)(t.code,{children:"Shift + Tab"})," then set ",(0,o.jsx)(t.code,{children:"menuItemTabIndex={0}"}),"."]})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(L,{...e,children:(0,o.jsx)(N,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65815:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},43959:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},33102:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},31045:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},13660:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},21292:(e,t,n)=>{"use strict";n.d(t,{j:()=>s});var o=n(31085),r=n(79343),i=n(52022);let s={type:"code",component:function(){return(0,o.jsxs)(r.W,{width:200,position:"bottom-start",children:[(0,o.jsx)(r.W.Target,{children:(0,o.jsx)(i.$,{children:"Toggle Menu"})}),(0,o.jsxs)(r.W.Dropdown,{children:[(0,o.jsx)(r.W.Item,{children:"Dashboard"}),(0,o.jsxs)(r.W.Sub,{children:[(0,o.jsx)(r.W.Sub.Target,{children:(0,o.jsx)(r.W.Sub.Item,{children:"Products"})}),(0,o.jsxs)(r.W.Sub.Dropdown,{children:[(0,o.jsx)(r.W.Item,{children:"All products"}),(0,o.jsx)(r.W.Item,{children:"Categories"}),(0,o.jsx)(r.W.Item,{children:"Tags"}),(0,o.jsx)(r.W.Item,{children:"Attributes"}),(0,o.jsx)(r.W.Item,{children:"Shipping classes"})]})]}),(0,o.jsxs)(r.W.Sub,{children:[(0,o.jsx)(r.W.Sub.Target,{children:(0,o.jsx)(r.W.Sub.Item,{children:"Orders"})}),(0,o.jsxs)(r.W.Sub.Dropdown,{children:[(0,o.jsx)(r.W.Item,{children:"Open"}),(0,o.jsx)(r.W.Item,{children:"Completed"}),(0,o.jsx)(r.W.Item,{children:"Cancelled"})]})]}),(0,o.jsxs)(r.W.Sub,{children:[(0,o.jsx)(r.W.Sub.Target,{children:(0,o.jsx)(r.W.Sub.Item,{children:"Settings"})}),(0,o.jsxs)(r.W.Sub.Dropdown,{children:[(0,o.jsx)(r.W.Item,{children:"Profile"}),(0,o.jsx)(r.W.Item,{children:"Security"}),(0,o.jsx)(r.W.Item,{children:"Notifications"})]})]})]})]})},code:`
import { Button, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button>Toggle Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Dashboard</Menu.Item>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Products</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>All products</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
            <Menu.Item>Tags</Menu.Item>
            <Menu.Item>Attributes</Menu.Item>
            <Menu.Item>Shipping classes</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Orders</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Open</Menu.Item>
            <Menu.Item>Completed</Menu.Item>
            <Menu.Item>Cancelled</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Settings</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Notifications</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}
`,centered:!0}},73368:(e,t,n)=>{"use strict";n.d(t,{K:()=>o,s:()=>r});let o=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},86658:(e,t,n)=>{"use strict";n.d(t,{e:()=>y});var o=n(31085),r=n(14041),i=n(33450),s=n(7098),a=n(29686),l=n(69564),c=n(34056),d=n(2453),u=n(6754);let h=(0,r.createContext)(null),m=h.Provider;var p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let g={},x=(0,s.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),v=(0,u.P9)((e,t)=>{let n=(0,a.Y)("AvatarGroup",g,e),{classNames:r,className:i,style:s,styles:d,unstyled:u,vars:h,spacing:v,...M}=n,j=(0,l.I)({name:"AvatarGroup",classes:p,props:n,className:i,style:s,classNames:r,styles:d,unstyled:u,vars:h,varsResolver:x,rootSelector:"group"});return(0,o.jsx)(m,{value:!0,children:(0,o.jsx)(c.a,{ref:t,...j("group"),...M})})});function M(e){return(0,o.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}v.classes=p,v.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],f={},b=(0,s.V)((e,{size:t,radius:n,variant:o,gradient:r,color:s,autoContrast:a,name:l,allowedInitialsColors:c})=>{let d="initials"===s&&"string"==typeof l?function(e,t=j){let n=Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length;return t[n]}(l,c):s,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:o||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.nJ)(n),"--avatar-bg":d||o?u.background:void 0,"--avatar-color":d||o?u.color:void 0,"--avatar-bd":d||o?u.border:void 0}}}),y=(0,d.v)((e,t)=>{let n=(0,a.Y)("Avatar",f,e),{classNames:i,className:s,style:d,styles:u,unstyled:m,vars:g,src:x,alt:v,radius:j,color:y,gradient:w,imageProps:I,children:k,autoContrast:S,mod:A,name:W,allowedInitialsColors:T,...D}=n,C={withinGroup:!!(0,r.useContext)(h)},[z,R]=(0,r.useState)(!x),B=(0,l.I)({name:"Avatar",props:n,classes:p,className:s,style:d,classNames:i,styles:u,unstyled:m,vars:g,varsResolver:b});return(0,r.useEffect)(()=>R(!x),[x]),(0,o.jsx)(c.a,{...B("root"),mod:[{"within-group":C.withinGroup},A],ref:t,...D,children:z||!x?(0,o.jsx)("span",{...B("placeholder"),title:v,children:k||"string"==typeof W&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(W)||(0,o.jsx)(M,{})}):(0,o.jsx)("img",{...I,...B("image"),src:x,alt:v,onError:e=>{R(!0),I?.onError?.(e)}})})});y.classes=p,y.displayName="@mantine/core/Avatar",y.Group=v}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(18693)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1460],{37645:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/spotlight",function(){return o(77327)}])},77327:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return G}});var n=o(24246),i=o(71670),s=o(3916),r=o(30289),l=o(27378),a=o(54764),c=(0,a.Z)("home","IconHome",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]]),h=(0,a.Z)("dashboard","IconDashboard",[["path",{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0z",key:"svg-2"}]]),p=(0,a.Z)("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),d=o(27854),m=o(71078),g=o(22971),u=o(8671),f=o(95299),S=o(39700);function x(e){let[t,o]=(0,l.useMemo)(f.Gv,[]);return l.createElement(l.Fragment,null,l.createElement(g.Z,{justify:"center"},l.createElement(u.z,{onClick:o.open},"Open spotlight")),l.createElement(S.$,{actions:[],store:t,...e}))}let y=[{id:"home",label:"Home",description:"Get to home page",onClick:()=>console.log("Home"),leftSection:l.createElement(c,{style:{width:(0,m.h)(24),height:(0,m.h)(24)},stroke:1.5})},{id:"dashboard",label:"Dashboard",description:"Get full information about current system status",onClick:()=>console.log("Dashboard"),leftSection:l.createElement(h,{style:{width:(0,m.h)(24),height:(0,m.h)(24)},stroke:1.5})},{id:"documentation",label:"Documentation",description:"Visit documentation to lean more about all features",onClick:()=>console.log("Documentation"),leftSection:l.createElement(p,{style:{width:(0,m.h)(24),height:(0,m.h)(24)},stroke:1.5})}],b=`
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,j={type:"code",component:function(){return l.createElement(x,{actions:y,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:l.createElement(d.Z,{style:{width:(0,m.h)(20),height:(0,m.h)(20)},stroke:1.5}),placeholder:"Search..."}})},code:b},w=`
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        limit={7}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,k=Array(3e3).fill(0).map((e,t)=>({id:`action-${t}`,label:`Action ${t}`,description:`Action ${t} description`})),v={type:"code",component:function(){return l.createElement(x,{actions:k,nothingFound:"Nothing found...",highlightQuery:!0,limit:7,shortcut:null,searchProps:{leftSection:l.createElement(d.Z,{style:{width:(0,m.h)(20),height:(0,m.h)(20)},stroke:1.5}),placeholder:"Search..."}})},code:w},C=`
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,E=Array(100).fill(0).map((e,t)=>({id:`action-${t}`,label:`Action ${t}`,description:`Action ${t} description`})),A={type:"code",component:function(){return l.createElement(x,{actions:E,nothingFound:"Nothing found...",highlightQuery:!0,scrollable:!0,maxHeight:350,shortcut:null,searchProps:{leftSection:l.createElement(d.Z,{style:{width:(0,m.h)(20),height:(0,m.h)(20)},stroke:1.5}),placeholder:"Search..."}})},code:C},B=`
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
  {
    group: 'Pages',
    actions: [
      { id: 'home', label: 'Home page', description: 'Where we present the product' },
      { id: 'careers', label: 'Careers page', description: 'Where we list open positions' },
      { id: 'about-us', label: 'About us page', description: 'Where we tell what we do' },
    ],
  },

  {
    group: 'Apps',
    actions: [
      { id: 'svg-compressor', label: 'SVG compressor', description: 'Compress SVG images' },
      { id: 'base64', label: 'Base 64 converter', description: 'Convert data to base 64 format' },
      { id: 'fake-data', label: 'Fake data generator', description: 'Lorem ipsum generator' },
    ],
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,N=[{group:"Pages",actions:[{id:"home",label:"Home page",description:"Where we present the product"},{id:"careers",label:"Careers page",description:"Where we list open positions"},{id:"about-us",label:"About us page",description:"Where we tell what we do"}]},{group:"Apps",actions:[{id:"svg-compressor",label:"SVG compressor",description:"Compress SVG images"},{id:"base64",label:"Base 64 converter",description:"Convert data to base 64 format"},{id:"fake-data",label:"Fake data generator",description:"Lorem ipsum generator"}]}],D={type:"code",component:function(){return l.createElement(x,{actions:N,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:l.createElement(d.Z,{style:{width:(0,m.h)(20),height:(0,m.h)(20)},stroke:1.5}),placeholder:"Search..."}})},code:B};var I=o(49785),$=o(62150),Text=o(26569),F=o(73988);let M=`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    title: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    new: true,
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    title: 'Carol Miller',
    description: 'One of the richest people on Earth',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    title: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    title: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    new: false,
  },
];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
  .filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()))
  .map((item) => (
    <Spotlight.Action key={item.title} onClick={() => console.log(item)}>
      <Group wrap="nowrap" w="100%">
        {item.image && (
          <Center>
            <img src={item.image} alt={item.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{item.title}</Text>

          {item.description && (
            <Text opacity={0.6} size="xs">
              {item.description}
            </Text>
          )}
        </div>

        {item.new && <Badge variant="default">new</Badge>}
      </Group>
    </Spotlight.Action>
  ));

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,H=[{image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",title:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",new:!0},{image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",title:"Carol Miller",description:"One of the richest people on Earth",new:!1},{image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",title:"Homer Simpson",description:"Overweight, lazy, and often ignorant",new:!1},{image:"https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",title:"Spongebob Squarepants",description:"Not just a sponge",new:!1}],L={type:"code",component:function(){let[e,t]=(0,l.useMemo)(f.Gv,[]),[o,n]=(0,l.useState)(""),i=H.filter(e=>e.title.toLowerCase().includes(o.toLowerCase().trim())).map(e=>l.createElement(S.$.Action,{key:e.title,onClick:()=>console.log(e)},l.createElement(g.Z,{wrap:"nowrap",w:"100%"},e.image&&l.createElement($.M,null,l.createElement("img",{src:e.image,alt:e.title,width:50,height:50})),l.createElement("div",{style:{flex:1}},l.createElement(Text.x,null,e.title),e.description&&l.createElement(Text.x,{opacity:.6,size:"xs"},e.description)),e.new&&l.createElement(F.C,{variant:"default"},"new"))));return l.createElement(l.Fragment,null,l.createElement(u.z,{onClick:t.open},"Open spotlight"),l.createElement(S.$.Root,{store:e,query:o,onQueryChange:n,shortcut:null},l.createElement(S.$.Search,{placeholder:"Search...",leftSection:l.createElement(d.Z,{stroke:1.5})}),l.createElement(S.$.ActionsList,null,i.length>0?i:l.createElement(S.$.Empty,null,"Nothing found..."))))},code:M,centered:!0},O=(0,s.A)(r.us.Spotlight);function z(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:o,InstallScript:s}=t;return o||T("Demo",!0),s||T("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(s,{packages:"@mantine/spotlight"}),"\n",(0,n.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/spotlight/styles.css';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Spotlight"})," component can be used as a search or as a command center of your application.\nIt is used as a search on mantine.dev website, you can trigger it with ",(0,n.jsx)(t.code,{children:"Ctrl + K"})," shortcut.\n",(0,n.jsx)(t.code,{children:"Spotlight"})," is based on ",(0,n.jsx)(t.a,{href:"/core/modal",children:"Modal"})," component and supports most of its props."]}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@mantine/spotlight"})," package exports an object with actions that can be used to control the spotlight:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { spotlight } from '@mantine/spotlight';\n\nspotlight.open(); // -> opens spotlight\nspotlight.close(); // -> closes spotlight\nspotlight.toggle(); // -> toggles spotlight opened state\n"})}),"\n",(0,n.jsx)(t.p,{children:"These actions can be passed to event listeners or used anywhere in your application\n(not limited to React components):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { spotlight } from '@mantine/spotlight';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <Button onClick={spotlight.open}>Open spotlight</Button>;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also import actions directly from the ",(0,n.jsx)(t.code,{children:"@mantine/spotlight"})," package, if you prefer this syntax:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import {\n  openSpotlight,\n  closeSpotlight,\n  toggleSpotlight,\n} from '@mantine/spotlight';\n\nopenSpotlight(); // same as spotlight.open()\ncloseSpotlight(); // same as spotlight.close()\ntoggleSpotlight(); // same as spotlight.toggle()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"spotlight-store",children:"Spotlight store"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"spotlight"})," object documented above uses the default store, it works fine if you have only one spotlight\nin your application. In case you need multiple spotlights, you need to create your own store for each of them:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\nimport { createSpotlight, Spotlight } from '@mantine/spotlight';\n\n// You can import `firstSpotlight` and `secondSpotlight` anywhere\n// in your application and use `open`, `close` and `toggle` actions\n// to control spotlight the same way as with default `spotlight` object\nexport const [firstStore, firstSpotlight] = createSpotlight();\nexport const [secondStore, secondSpotlight] = createSpotlight();\n\nfunction Demo() {\n  return (\n    <>\n      <Button onClick={firstSpotlight.open}>\n        Open first spotlight\n      </Button>\n      <Button onClick={secondSpotlight.open}>\n        Open second spotlight\n      </Button>\n\n      <Spotlight store={firstStore} actions={[]} />\n      <Spotlight store={secondStore} actions={[]} />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Spotlight"})," uses ",(0,n.jsx)(t.a,{href:"/hooks/use-hotkeys",children:"use-hotkeys"})," hook to handle keyboard shortcuts.\nBy default, ",(0,n.jsx)(t.code,{children:"Ctrl + K"})," and ",(0,n.jsx)(t.code,{children:"Cmd + K"})," shortcuts are used to open spotlight, you can change them\nwith ",(0,n.jsx)(t.code,{children:"shortcut"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Spotlight } from '@mantine/spotlight';\n\nfunction SingleShortcut() {\n  return <Spotlight shortcut=\"mod + J\" actions={[]} />;\n}\n\n// Same as on mantine.dev\nfunction MultipleShortcuts() {\n  return (\n    <Spotlight shortcut={['mod + K', 'mod + P', '/']} actions={[]} />\n  );\n}\n\n// Disable shortcut\nfunction NoShortcut() {\n  return <Spotlight shortcut={null} actions={[]} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"limit-prop",children:"Limit prop"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"limit"})," prop to limit the maximum number of actions that can be displayed at a time.\nUsually, 5–7 actions is a good number. ",(0,n.jsx)(t.code,{children:"limit"})," prop is crucial for performance in case\nyou have a lot of actions, it will prevent the spotlight from rendering all of them at once."]}),"\n",(0,n.jsx)(t.p,{children:"The example below renders 3000 actions, but only 7 of them are displayed at a time:"}),"\n",(0,n.jsx)(o,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-actions-list",children:"Scrollable actions list"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Spotlight"})," actions list is not scrollable. If you have a lot of actions that\nyou need to display at a time, set ",(0,n.jsx)(t.code,{children:"scrollable"})," and ",(0,n.jsx)(t.code,{children:"maxHeight"})," props. Note that there are\ncaveats with both approaches:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When the ",(0,n.jsx)(t.code,{children:"scrollable"})," prop is not set, actions list height is not limited and the spotlight\nbody will grow to fit all actions. This can result in a very long spotlight body that will\noverflow the viewport. To prevent this, use ",(0,n.jsx)(t.code,{children:"limit"})," prop to define the maximum number of actions\nthat can be displayed at a time. Usually, 5–7 actions is a good number."]}),"\n",(0,n.jsxs)(t.li,{children:["When the ",(0,n.jsx)(t.code,{children:"scrollable"})," prop is set, actions list height will always equal to the value of ",(0,n.jsx)(t.code,{children:"maxHeight"})," prop\n(it will not shrink if there are not enough actions to fill the space). When there are more\nactions than can fit into the list, it will become scrollable. Scrolling logic is handled\nby ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," component."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In other words, if you want the actions list to shrink, do not set ",(0,n.jsx)(t.code,{children:"scrollable"})," prop and use ",(0,n.jsx)(t.code,{children:"limit"}),"\nprop. If you want the actions list to always have a fixed height, set ",(0,n.jsx)(t.code,{children:"scrollable"})," and ",(0,n.jsx)(t.code,{children:"maxHeight"})," props."]}),"\n",(0,n.jsx)(o,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"actions-groups",children:"Actions groups"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Spotlight"})," supports actions groups, you can use them to group actions by category:"]}),"\n",(0,n.jsx)(o,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,n.jsx)(t.p,{children:"If you need more control over spotlight rendering and logic, use compound components.\nAvailable components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.Root"})," – root component, should be used as a wrapper for all other components, accepts all props to customize logic"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.Search"})," – search input"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.ActionsList"})," – list of actions, required to wrap all actions and actions groups"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.Action"})," – action button"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.ActionsGroup"})," - group of actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Spotlight.Empty"})," – empty state (nothing found)"]}),"\n"]}),"\n",(0,n.jsx)(o,{data:I.I}),"\n",(0,n.jsx)(t.p,{children:"For example, with compound components pattern you can customize actions contents:"}),"\n",(0,n.jsx)(o,{data:L}),"\n",(0,n.jsx)(t.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Spotlight"})," component uses ",(0,n.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,n.jsx)(t.code,{children:"elements"})," add a ",(0,n.jsx)(t.code,{children:"className"})," to them (",(0,n.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(O,{...e,children:(0,n.jsx)(z,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},49785:function(e,t,o){"use strict";o.d(t,{I:function(){return h}});var n=o(27378),i=o(95299),s=o(39700),r=o(8671),l=o(27854);let a=`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,c=["Home","About us","Contacts","Blog","Careers","Terms of service"],h={type:"code",component:function(){let[e,t]=(0,n.useMemo)(i.Gv,[]),[o,a]=(0,n.useState)(""),h=c.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(e=>n.createElement(s.$.Action,{key:e,label:e}));return n.createElement(n.Fragment,null,n.createElement(r.z,{onClick:t.open},"Open spotlight"),n.createElement(s.$.Root,{store:e,query:o,onQueryChange:a,shortcut:null},n.createElement(s.$.Search,{placeholder:"Search...",leftSection:n.createElement(l.Z,{stroke:1.5})}),n.createElement(s.$.ActionsList,null,h.length>0?h:n.createElement(s.$.Empty,null,"Nothing found..."))))},code:a,centered:!0}},73988:function(e,t,o){"use strict";o.d(t,{C:function(){return g}});var n=o(27378),i=o(92082),s=o(83453),r=o(89738),l=o(96739),a=o(6231),c=o(56589),h=o(50332),p={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let d={},m=(0,s.Z)((e,{radius:t,color:o,gradient:n,variant:s,size:l})=>{let a=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:s||"filled"});return{root:{"--badge-height":(0,i.ap)(l,"badge-height"),"--badge-padding-x":(0,i.ap)(l,"badge-padding-x"),"--badge-fz":(0,i.ap)(l,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.H5)(t),"--badge-bg":o||s?a.background:void 0,"--badge-color":o||s?a.color:void 0,"--badge-bd":o||s?a.border:void 0,"--badge-dot-color":"dot"===s?(0,r.p)(o,e):void 0}}}),g=(0,h.b)((e,t)=>{let o=(0,l.w)("Badge",d,e),{classNames:i,className:s,style:r,styles:h,unstyled:g,vars:u,radius:f,color:S,gradient:x,leftSection:y,rightSection:b,children:j,variant:w,fullWidth:k,...v}=o,C=(0,a.y)({name:"Badge",props:o,classes:p,className:s,style:r,classNames:i,styles:h,unstyled:g,vars:u,varsResolver:m});return n.createElement(c.x,{variant:w,mod:{block:k},...C("root",{variant:w}),ref:t,...v},y&&n.createElement("span",{...C("section"),"data-position":"left"},y),n.createElement("span",{...C("label")},j),b&&n.createElement("span",{...C("section"),"data-position":"right"},b))});g.classes=p,g.displayName="@mantine/core/Badge"},62150:function(e,t,o){"use strict";o.d(t,{M:function(){return h}});var n=o(27378),i=o(96739),s=o(6231),r=o(56589),l=o(50332),a={root:"m-4451eb3a"};let c={},h=(0,l.b)((e,t)=>{let o=(0,i.w)("Center",c,e),{classNames:l,className:h,style:p,styles:d,unstyled:m,vars:g,inline:u,...f}=o,S=(0,s.y)({name:"Center",props:o,classes:a,className:h,style:p,classNames:l,styles:d,unstyled:m,vars:g});return n.createElement(r.x,{ref:t,mod:{inline:u},...S("root"),...f})});h.classes=a,h.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=37645)}),_N_E=e.O()}]);
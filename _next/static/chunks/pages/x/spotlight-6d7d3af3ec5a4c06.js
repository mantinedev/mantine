(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54469],{1798:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},26960:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>H});var n=o(6029),i=o(16285),s=o(41495);let l=(0,s.A)("outline","home","Home",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]]),r=(0,s.A)("outline","dashboard","Dashboard",[["path",{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0z",key:"svg-2"}]]);var a=o(84276),c=o(41279),h=o(55729),p=o(57414),d=o(61087),g=o(67666),m=o(33808);function u(t){let[e,o]=(0,h.useMemo)(g.Z3,[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Y,{justify:"center",children:(0,n.jsx)(d.$,{onClick:o.open,children:"Open spotlight"})}),(0,n.jsx)(m.L,{actions:[],store:e,...t})]})}let f=[{id:"home",label:"Home",description:"Get to home page",onClick:()=>console.log("Home"),leftSection:(0,n.jsx)(l,{size:24,stroke:1.5})},{id:"dashboard",label:"Dashboard",description:"Get full information about current system status",onClick:()=>console.log("Dashboard"),leftSection:(0,n.jsx)(r,{size:24,stroke:1.5})},{id:"documentation",label:"Documentation",description:"Visit documentation to lean more about all features",onClick:()=>console.log("Documentation"),leftSection:(0,n.jsx)(a.A,{size:24,stroke:1.5})}],x={type:"code",component:function(){return(0,n.jsx)(u,{actions:f,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:(0,n.jsx)(c.A,{size:20,stroke:1.5}),placeholder:"Search..."}})},code:`
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
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
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`},y=`
import { Button } from '@mantine/core';
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
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,S=Array(3e3).fill(0).map((t,e)=>({id:`action-${e}`,label:`Action ${e}`,description:`Action ${e} description`})),j={type:"code",component:function(){return(0,n.jsx)(u,{actions:S,nothingFound:"Nothing found...",highlightQuery:!0,limit:7,shortcut:null,searchProps:{leftSection:(0,n.jsx)(c.A,{size:20,stroke:1.5}),placeholder:"Search..."}})},code:y},b=`
import { Button } from '@mantine/core';
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
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,v=Array(100).fill(0).map((t,e)=>({id:`action-${e}`,label:`Action ${e}`,description:`Action ${e} description`})),k={type:"code",component:function(){return(0,n.jsx)(u,{actions:v,nothingFound:"Nothing found...",highlightQuery:!0,scrollable:!0,maxHeight:350,shortcut:null,searchProps:{leftSection:(0,n.jsx)(c.A,{size:20,stroke:1.5}),placeholder:"Search..."}})},code:b},w=[{group:"Pages",actions:[{id:"home",label:"Home page",description:"Where we present the product"},{id:"careers",label:"Careers page",description:"Where we list open positions"},{id:"about-us",label:"About us page",description:"Where we tell what we do"}]},{group:"Apps",actions:[{id:"svg-compressor",label:"SVG compressor",description:"Compress SVG images"},{id:"base64",label:"Base 64 converter",description:"Convert data to base 64 format"},{id:"fake-data",label:"Fake data generator",description:"Lorem ipsum generator"}]}],A={type:"code",component:function(){return(0,n.jsx)(u,{actions:w,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:(0,n.jsx)(c.A,{size:20,stroke:1.5}),placeholder:"Search..."}})},code:`
import { Button } from '@mantine/core';
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
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`};var C=o(46996),M=o(13808),B=o(45208),N=o(55968);let D=[{image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",title:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",new:!0},{image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",title:"Carol Miller",description:"One of the richest people on Earth",new:!1},{image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",title:"Homer Simpson",description:"Overweight, lazy, and often ignorant",new:!1},{image:"https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",title:"Spongebob Squarepants",description:"Not just a sponge",new:!1}],L={type:"code",component:function(){let[t,e]=(0,h.useMemo)(g.Z3,[]),[o,i]=(0,h.useState)(""),s=D.filter(t=>t.title.toLowerCase().includes(o.toLowerCase().trim())).map(t=>(0,n.jsx)(m.L.Action,{onClick:()=>console.log(t),children:(0,n.jsxs)(p.Y,{wrap:"nowrap",w:"100%",children:[t.image&&(0,n.jsx)(M.o,{children:(0,n.jsx)("img",{src:t.image,alt:t.title,width:50,height:50})}),(0,n.jsxs)("div",{style:{flex:1},children:[(0,n.jsx)(B.E,{children:t.title}),t.description&&(0,n.jsx)(B.E,{opacity:.6,size:"xs",children:t.description})]}),t.new&&(0,n.jsx)(N.E,{variant:"default",children:"new"})]})},t.title));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.$,{onClick:e.open,children:"Open spotlight"}),(0,n.jsxs)(m.L.Root,{store:t,query:o,onQueryChange:i,shortcut:null,children:[(0,n.jsx)(m.L.Search,{placeholder:"Search...",leftSection:(0,n.jsx)(c.A,{stroke:1.5})}),(0,n.jsx)(m.L.ActionsList,{children:s.length>0?s:(0,n.jsx)(m.L.Empty,{children:"Nothing found..."})})]})]})},code:`
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
`,centered:!0};var z=o(38547),I=o(5262);let F=(0,z.P)(I.XZ.Spotlight);function E(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components},{Demo:o,InstallScript:s}=e;return o||O("Demo",!0),s||O("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(s,{packages:"@mantine/spotlight"}),"\n",(0,n.jsx)(e.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import spotlight styles after core package styles\nimport '@mantine/spotlight/styles.css';\n"})}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Spotlight"})," component can be used as a search or as a command center of your application.\nIt is used as a search on mantine.dev website, you can trigger it with ",(0,n.jsx)(e.code,{children:"Ctrl + K"})," shortcut.\n",(0,n.jsx)(e.code,{children:"Spotlight"})," is based on ",(0,n.jsx)(e.a,{href:"/core/modal",children:"Modal"})," component and supports most of its props."]}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(e.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"@mantine/spotlight"})," package exports an object with actions that can be used to control the spotlight:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { spotlight } from '@mantine/spotlight';\n\nspotlight.open(); // -> opens spotlight\nspotlight.close(); // -> closes spotlight\nspotlight.toggle(); // -> toggles spotlight opened state\n"})}),"\n",(0,n.jsx)(e.p,{children:"These actions can be passed to event listeners or used anywhere in your application\n(not limited to React components):"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\nimport { spotlight } from '@mantine/spotlight';\n\nfunction Demo() {\n  return <Button onClick={spotlight.open}>Open spotlight</Button>;\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can also import actions directly from the ",(0,n.jsx)(e.code,{children:"@mantine/spotlight"})," package, if you prefer this syntax:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import {\n  closeSpotlight,\n  openSpotlight,\n  toggleSpotlight,\n} from '@mantine/spotlight';\n\nopenSpotlight(); // same as spotlight.open()\ncloseSpotlight(); // same as spotlight.close()\ntoggleSpotlight(); // same as spotlight.toggle()\n"})}),"\n",(0,n.jsx)(e.h2,{id:"spotlight-store",children:"Spotlight store"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"spotlight"})," object documented above uses the default store, it works fine if you have only one spotlight\nin your application. In case you need multiple spotlights, you need to create your own store for each of them:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\nimport { createSpotlight, Spotlight } from '@mantine/spotlight';\n\n// You can import `firstSpotlight` and `secondSpotlight` anywhere\n// in your application and use `open`, `close` and `toggle` actions\n// to control spotlight the same way as with default `spotlight` object\nexport const [firstStore, firstSpotlight] = createSpotlight();\nexport const [secondStore, secondSpotlight] = createSpotlight();\n\nfunction Demo() {\n  return (\n    <>\n      <Button onClick={firstSpotlight.open}>\n        Open first spotlight\n      </Button>\n      <Button onClick={secondSpotlight.open}>\n        Open second spotlight\n      </Button>\n\n      <Spotlight store={firstStore} actions={[]} />\n      <Spotlight store={secondStore} actions={[]} />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Spotlight"})," uses ",(0,n.jsx)(e.a,{href:"/hooks/use-hotkeys",children:"use-hotkeys"})," hook to handle keyboard shortcuts.\nBy default, ",(0,n.jsx)(e.code,{children:"Ctrl + K"})," and ",(0,n.jsx)(e.code,{children:"Cmd + K"})," shortcuts are used to open spotlight, you can change them\nwith ",(0,n.jsx)(e.code,{children:"shortcut"})," prop:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Spotlight } from '@mantine/spotlight';\n\nfunction SingleShortcut() {\n  return <Spotlight shortcut=\"mod + J\" actions={[]} />;\n}\n\n// Same as on mantine.dev\nfunction MultipleShortcuts() {\n  return (\n    <Spotlight shortcut={['mod + K', 'mod + P', '/']} actions={[]} />\n  );\n}\n\n// Disable shortcut\nfunction NoShortcut() {\n  return <Spotlight shortcut={null} actions={[]} />;\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"limit-prop",children:"Limit prop"}),"\n",(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"limit"})," prop to limit the maximum number of actions that can be displayed at a time.\nUsually, 5–7 actions is a good number. ",(0,n.jsx)(e.code,{children:"limit"})," prop is crucial for performance in case\nyou have a lot of actions, it will prevent the spotlight from rendering all of them at once."]}),"\n",(0,n.jsx)(e.p,{children:"The example below renders 3000 actions, but only 7 of them are displayed at a time:"}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(e.h2,{id:"scrollable-actions-list",children:"Scrollable actions list"}),"\n",(0,n.jsxs)(e.p,{children:["By default, ",(0,n.jsx)(e.code,{children:"Spotlight"})," actions list is not scrollable. If you have a lot of actions that\nyou need to display at a time, set ",(0,n.jsx)(e.code,{children:"scrollable"})," and ",(0,n.jsx)(e.code,{children:"maxHeight"})," props. Note that there are\ncaveats with both approaches:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["When the ",(0,n.jsx)(e.code,{children:"scrollable"})," prop is not set, actions list height is not limited and the spotlight\nbody will grow to fit all actions. This can result in a very long spotlight body that will\noverflow the viewport. To prevent this, use ",(0,n.jsx)(e.code,{children:"limit"})," prop to define the maximum number of actions\nthat can be displayed at a time. Usually, 5–7 actions is a good number."]}),"\n",(0,n.jsxs)(e.li,{children:["When the ",(0,n.jsx)(e.code,{children:"scrollable"})," prop is set, actions list height will always equal to the value of ",(0,n.jsx)(e.code,{children:"maxHeight"})," prop\n(it will not shrink if there are not enough actions to fill the space). When there are more\nactions than can fit into the list, it will become scrollable. Scrolling logic is handled\nby ",(0,n.jsx)(e.a,{href:"/core/scroll-area",children:"ScrollArea"})," component."]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["In other words, if you want the actions list to shrink, do not set ",(0,n.jsx)(e.code,{children:"scrollable"})," prop and use ",(0,n.jsx)(e.code,{children:"limit"}),"\nprop. If you want the actions list to always have a fixed height, set ",(0,n.jsx)(e.code,{children:"scrollable"})," and ",(0,n.jsx)(e.code,{children:"maxHeight"})," props."]}),"\n",(0,n.jsx)(o,{data:k}),"\n",(0,n.jsx)(e.h2,{id:"actions-groups",children:"Actions groups"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Spotlight"})," supports actions groups, you can use them to group actions by category:"]}),"\n",(0,n.jsx)(o,{data:A}),"\n",(0,n.jsx)(e.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,n.jsx)(e.p,{children:"If you need more control over spotlight rendering and logic, use compound components.\nAvailable components:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.Root"})," – root component, should be used as a wrapper for all other components, accepts all props to customize logic"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.Search"})," – search input"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.ActionsList"})," – list of actions, required to wrap all actions and actions groups"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.Action"})," – action button"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.ActionsGroup"})," - group of actions"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Spotlight.Empty"})," – empty state (nothing found)"]}),"\n"]}),"\n",(0,n.jsx)(o,{data:C.W}),"\n",(0,n.jsx)(e.p,{children:"For example, with compound components pattern you can customize actions contents:"}),"\n",(0,n.jsx)(o,{data:L}),"\n",(0,n.jsx)(e.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Spotlight"})," component uses ",(0,n.jsx)(e.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,n.jsx)(e.code,{children:"elements"})," add a ",(0,n.jsx)(e.code,{children:"className"})," to them (",(0,n.jsx)(e.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})})]})}function H(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,{...t,children:(0,n.jsx)(E,{...t})})}function O(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},34891:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},46996:(t,e,o)=>{"use strict";o.d(e,{W:()=>h});var n=o(6029),i=o(55729),s=o(41279),l=o(61087),r=o(67666),a=o(33808);let c=["Home","About us","Contacts","Blog","Careers","Terms of service"],h={type:"code",component:function(){let[t,e]=(0,i.useMemo)(r.Z3,[]),[o,h]=(0,i.useState)(""),p=c.filter(t=>t.toLowerCase().includes(o.toLowerCase().trim())).map(t=>(0,n.jsx)(a.L.Action,{label:t},t));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.$,{onClick:e.open,children:"Open spotlight"}),(0,n.jsxs)(a.L.Root,{store:t,query:o,onQueryChange:h,shortcut:null,children:[(0,n.jsx)(a.L.Search,{placeholder:"Search...",leftSection:(0,n.jsx)(s.A,{stroke:1.5})}),(0,n.jsx)(a.L.ActionsList,{children:p.length>0?p:(0,n.jsx)(a.L.Empty,{children:"Nothing found..."})})]})]})},code:`
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
`,centered:!0}},55968:(t,e,o)=>{"use strict";o.d(e,{E:()=>g});var n=o(6029);o(55729);var i=o(14163),s=o(33987),l=o(21351),r=o(38919),a=o(15583),c=o(76320),h=o(82500),p={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let d=(0,s.V)((t,{radius:e,color:o,gradient:n,variant:s,size:r,autoContrast:a})=>{let c=t.variantColorResolver({color:o||t.primaryColor,theme:t,gradient:n,variant:s||"filled",autoContrast:a});return{root:{"--badge-height":(0,i.YC)(r,"badge-height"),"--badge-padding-x":(0,i.YC)(r,"badge-padding-x"),"--badge-fz":(0,i.YC)(r,"badge-fz"),"--badge-radius":void 0===e?void 0:(0,i.nJ)(e),"--badge-bg":o||s?c.background:void 0,"--badge-color":o||s?c.color:void 0,"--badge-bd":o||s?c.border:void 0,"--badge-dot-color":"dot"===s?(0,l.r)(o,t):void 0}}}),g=(0,h.v)((t,e)=>{let o=(0,r.Y)("Badge",null,t),{classNames:i,className:s,style:l,styles:h,unstyled:g,vars:m,radius:u,color:f,gradient:x,leftSection:y,rightSection:S,children:j,variant:b,fullWidth:v,autoContrast:k,circle:w,mod:A,attributes:C,...M}=o,B=(0,a.I)({name:"Badge",props:o,classes:p,className:s,style:l,classNames:i,styles:h,unstyled:g,attributes:C,vars:m,varsResolver:d});return(0,n.jsxs)(c.a,{variant:b,mod:[{block:v,circle:w,"with-right-section":!!S,"with-left-section":!!y},A],...B("root",{variant:b}),ref:e,...M,children:[y&&(0,n.jsx)("span",{...B("section"),"data-position":"left",children:y}),(0,n.jsx)("span",{...B("label"),children:j}),S&&(0,n.jsx)("span",{...B("section"),"data-position":"right",children:S})]})});g.classes=p,g.displayName="@mantine/core/Badge"},65433:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},99157:(t,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/spotlight",function(){return o(26960)}])}},t=>{t.O(0,[38547,90636,46593,38792],()=>t(t.s=99157)),_N_E=t.O()}]);
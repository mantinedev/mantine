(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{20184:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(99882).Z)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},82408:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(99882).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},25512:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return o(79544)}])},79544:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return O}});var t=o(52322),r=o(45392),c=o(2784),a=o(38820);let i=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],l=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji},e.value),c.createElement(a.U.Panel,null,e.description)));function d(e){return c.createElement(a.U,{...e},l)}let s=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,m={type:"configurator",component:function(e){let n=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji},e.value),c.createElement(a.U.Panel,null,e.description)));return c.createElement(a.U,{...e,defaultValue:"Apples"},n)},code:s,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var u=o(91062),p=o(99882),h=(0,p.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]);let v=`
import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
`,A=`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`,f={type:"code",component:function(){let e=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji},e.value),c.createElement(a.U.Panel,null,e.description)));return c.createElement(a.U,{defaultValue:"Apples",classNames:{chevron:"m_85bcba4"},chevron:c.createElement(h,{className:"m_b7471fb0"})},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:v},{fileName:"Demo.module.css",code:A,language:"scss"}],centered:!0,maxWidth:600};var g=o(82408),y=(0,p.Z)("printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),x=(0,p.Z)("camera-selfie","IconCameraSelfie",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-1"}],["path",{d:"M15 11l.01 0",key:"svg-2"}],["path",{d:"M9 11l.01 0",key:"svg-3"}]]),C=o(58898);let j=`
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--mantine-color-red-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{ color: 'var(--mantine-color-blue-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{ color: 'var(--mantine-color-teal-6)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,b={type:"code",component:function(){return c.createElement(a.U,{variant:"contained"},c.createElement(a.U.Item,{value:"photos"},c.createElement(a.U.Control,{icon:c.createElement(g.Z,{style:{color:"var(--mantine-color-red-6",width:(0,C.h)(20),height:(0,C.h)(20)}})},"Recent photos"),c.createElement(a.U.Panel,null,"Content")),c.createElement(a.U.Item,{value:"print"},c.createElement(a.U.Control,{icon:c.createElement(y,{style:{color:"var(--mantine-color-blue-6",width:(0,C.h)(20),height:(0,C.h)(20)}})},"Print photos"),c.createElement(a.U.Panel,null,"Content")),c.createElement(a.U.Item,{value:"camera"},c.createElement(a.U.Control,{icon:c.createElement(x,{style:{color:"var(--mantine-color-teal-6)",width:(0,C.h)(20),height:(0,C.h)(20)}})},"Camera settings"),c.createElement(a.U.Panel,null,"Content")))},code:j,maxWidth:400,centered:!0},P=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,E={type:"code",component:()=>c.createElement(d,{transitionDuration:0,maw:380,mx:"auto"}),code:P("transitionDuration={0}")},I={type:"code",component:()=>c.createElement(d,{transitionDuration:1e3,maw:380,mx:"auto"}),code:P("transitionDuration={1000}")};var w=o(20184),k=o(16438),U=o(54813);let D=`
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size="1rem" />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" maw={400} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;function M(e){return c.createElement(k.M,null,c.createElement(a.U.Control,{...e}),c.createElement(U.A,{size:"lg",variant:"subtle",color:"gray"},c.createElement(w.Z,{size:"1rem"})))}let N={type:"code",component:function(){return c.createElement(a.U,{chevronPosition:"left",maw:400,mx:"auto"},c.createElement(a.U.Item,{value:"item-1"},c.createElement(M,null,"Control 1"),c.createElement(a.U.Panel,null,"Panel 1")),c.createElement(a.U.Item,{value:"item-2"},c.createElement(M,null,"Control 2"),c.createElement(a.U.Panel,null,"Panel 2")),c.createElement(a.U.Item,{value:"item-3"},c.createElement(M,null,"Control 3"),c.createElement(a.U.Panel,null,"Panel 3")))},code:D},S=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,V={type:"code",component:function(){let e=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji,disabled:"Bananas"===e.value},e.value),c.createElement(a.U.Panel,null,e.description)));return c.createElement(a.U,{defaultValue:"Apples"},e)},code:S,centered:!0,maxWidth:600},_=`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`,Z={type:"code",component:function(){return c.createElement(d,{unstyled:!0})},code:_};var B=o(86212);let z=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2}{{props}}>
      {items}
    </Accordion>
  );
}
`,R={type:"styles-api",data:B.x,component:function(e){let n=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji},e.value),c.createElement(a.U.Panel,null,e.description)));return c.createElement(a.U,{defaultValue:"Apples",order:2,...e},n)},centered:!0,maxWidth:"100%",code:z};var T={root:"m_333cc5d1",item:"m_3338c002",chevron:"m_67366eec"};let W=`
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples" classNames={classes}>
      {items}
    </Accordion>
  );
}
`,G=`.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: rem(1px) solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--mantine-color-body);
    border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
    box-shadow: var(--mantine-shadow-md);
    border-radius: var(--mantine-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}
`,L={type:"code",component:function(){let e=i.map(e=>c.createElement(a.U.Item,{key:e.value,value:e.value},c.createElement(a.U.Control,{icon:e.emoji},e.value),c.createElement(a.U.Panel,null,e.description)));return c.createElement(a.U,{defaultValue:"Apples",classNames:T,variant:"filled"},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:W},{fileName:"Demo.module.css",code:G,language:"scss"}],centered:!0,maxWidth:500};var F=o(79016),q=o(33638);let H=(0,F.A)(q.us.Accordion);function K(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o,KeyboardEventsTable:c,StylesApiSelectors:a}=n;return o||X("Demo",!0),c||X("KeyboardEventsTable",!0),a||X("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Data used in Accordion examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,t.jsx)(o,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,t.jsx)(o,{data:u.P}),"\n",(0,t.jsx)(n.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"with-icons",children:"With icons"}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(n.p,{children:["To change transition duration, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,t.jsx)(o,{data:I}),"\n",(0,t.jsxs)(n.p,{children:["To disable transitions, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"control-state",children:"Control state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,t.jsxs)(n.p,{children:["You can add any additional elements that will be displayed next to ",(0,t.jsx)(n.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,t.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,t.jsx)(o,{data:N}),"\n",(0,t.jsx)(n.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"disabled"})," prop on ",(0,t.jsx)(n.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(o,{data:V}),"\n",(0,t.jsx)(n.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,t.jsx)(o,{data:Z}),"\n",(0,t.jsx)(a,{component:"Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:R}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:L}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AccordionProps"})," type exported from ",(0,t.jsx)(n.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,t.jsx)(n.code,{children:"multiple"})," state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Accordion component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"order"})," on ",(0,t.jsx)(n.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(c,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(H,{...e,children:(0,t.jsx)(K,{...e})})}function X(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46752:function(e,n,o){"use strict";o.d(n,{Q:function(){return c}});var t=o(2784),r=o(58898);function c({style:e,size:n=16,...o}){return t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,r.h)(n),height:(0,r.h)(n),display:"block"},...o},t.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}c.displayName="@mantine/core/AccordionChevron"},47100:function(e,n,o){"use strict";o.d(n,{q:function(){return x}});var t=o(2784),r=o(91482),c=o(11200),a=o(38483),i=o(62378),l=o(28559),d=o(33502),s=o(82027);let m=(0,t.createContext)(null),u=m.Provider;var p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let h={},v=(0,c.Z)((e,{spacing:n})=>({group:{"--ag-spacing":(0,r.bG)(n)}})),A=(0,s.d)((e,n)=>{let o=(0,a.w)("AvatarGroup",h,e),{classNames:r,className:c,style:d,styles:s,unstyled:m,vars:A,spacing:f,...g}=o,y=(0,i.y)({name:"AvatarGroup",classes:p,props:o,className:c,style:d,classNames:r,styles:s,unstyled:m,vars:A,varsResolver:v,rootSelector:"group"});return t.createElement(u,{value:!0},t.createElement(l.x,{ref:n,...y("group"),...g}))});function f(e){return t.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}A.classes=p,A.displayName="@mantine/core/AvatarGroup";let g={},y=(0,c.Z)((e,{size:n,radius:o,variant:t,gradient:c,color:a,autoContrast:i})=>{let l=e.variantColorResolver({color:a||"gray",theme:e,gradient:c,variant:t||"light",autoContrast:i});return{root:{"--avatar-size":(0,r.ap)(n,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,r.H5)(o),"--avatar-bg":a||t?l.background:void 0,"--avatar-color":a||t?l.color:void 0,"--avatar-bd":a||t?l.border:void 0}}}),x=(0,d.b)((e,n)=>{let o=(0,a.w)("Avatar",g,e),{classNames:r,className:c,style:d,styles:s,unstyled:u,vars:h,src:v,alt:A,radius:x,color:C,gradient:j,imageProps:b,children:P,autoContrast:E,mod:I,...w}=o,k=function(){let e=(0,t.useContext)(m);return{withinGroup:!!e}}(),[U,D]=(0,t.useState)(!v),M=(0,i.y)({name:"Avatar",props:o,classes:p,className:c,style:d,classNames:r,styles:s,unstyled:u,vars:h,varsResolver:y});return(0,t.useEffect)(()=>D(!v),[v]),t.createElement(l.x,{...M("root"),mod:[{"within-group":k.withinGroup},I],ref:n,...w},U?t.createElement("span",{...M("placeholder"),title:A},P||t.createElement(f,null)):t.createElement("img",{...b,...M("image"),src:v,alt:A,onError:e=>{D(!0),b?.onError?.(e)}}))});x.classes=p,x.displayName="@mantine/core/Avatar",x.Group=A},16438:function(e,n,o){"use strict";o.d(n,{M:function(){return s}});var t=o(2784),r=o(38483),c=o(62378),a=o(28559),i=o(33502),l={root:"m_4451eb3a"};let d={},s=(0,i.b)((e,n)=>{let o=(0,r.w)("Center",d,e),{classNames:i,className:s,style:m,styles:u,unstyled:p,vars:h,inline:v,mod:A,...f}=o,g=(0,c.y)({name:"Center",props:o,classes:l,className:s,style:m,classNames:i,styles:u,unstyled:p,vars:h});return t.createElement(a.x,{ref:n,mod:[{inline:v},A],...g("root"),...f})});s.classes=l,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[57938,17454,47747,91062,49774,92888,40179],function(){return e(e.s=25512)}),_N_E=e.O()}]);
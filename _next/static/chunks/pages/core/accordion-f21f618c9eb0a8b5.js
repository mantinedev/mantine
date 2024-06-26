(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{25512:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return n(67474)}])},67474:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return z}});var r=n(52322),t=n(45392),i=n(38820);let c=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],a=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));function l(e){return(0,r.jsx)(i.U,{...e,children:a})}let s={type:"configurator",component:function(e){let o=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));return(0,r.jsx)(i.U,{...e,defaultValue:"Apples",children:o})},code:`
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
`,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var d=n(91062),m=n(19407);let u={type:"code",component:function(){let e=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));return(0,r.jsx)(i.U,{defaultValue:"Apples",classNames:{chevron:"m_85bcba4"},chevron:(0,r.jsx)(m.Z,{className:"m_b7471fb0"}),children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"Demo.module.css",code:`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: 16px;
  height: 16px;
}
`,language:"scss"}],centered:!0,maxWidth:600};var p=n(40289),h=n(73681),v=(0,h.Z)("outline","printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),A=(0,h.Z)("outline","camera-selfie","IconCameraSelfie",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-1"}],["path",{d:"M15 11l.01 0",key:"svg-2"}],["path",{d:"M9 11l.01 0",key:"svg-3"}]]),x=n(58898);let f={type:"code",component:function(){return(0,r.jsxs)(i.U,{variant:"contained",children:[(0,r.jsxs)(i.U.Item,{value:"photos",children:[(0,r.jsx)(i.U.Control,{icon:(0,r.jsx)(p.Z,{style:{color:"var(--mantine-color-red-6",width:(0,x.h)(20),height:(0,x.h)(20)}}),children:"Recent photos"}),(0,r.jsx)(i.U.Panel,{children:"Content"})]}),(0,r.jsxs)(i.U.Item,{value:"print",children:[(0,r.jsx)(i.U.Control,{icon:(0,r.jsx)(v,{style:{color:"var(--mantine-color-blue-6",width:(0,x.h)(20),height:(0,x.h)(20)}}),children:"Print photos"}),(0,r.jsx)(i.U.Panel,{children:"Content"})]}),(0,r.jsxs)(i.U.Item,{value:"camera",children:[(0,r.jsx)(i.U.Control,{icon:(0,r.jsx)(A,{style:{color:"var(--mantine-color-teal-6)",width:(0,x.h)(20),height:(0,x.h)(20)}}),children:"Camera settings"}),(0,r.jsx)(i.U.Panel,{children:"Content"})]})]})},code:`
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
`,maxWidth:400,centered:!0},j=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,g={type:"code",component:()=>(0,r.jsx)(l,{transitionDuration:0,maw:380,mx:"auto"}),code:j("transitionDuration={0}")},y={type:"code",component:()=>(0,r.jsx)(l,{transitionDuration:1e3,maw:380,mx:"auto"}),code:j("transitionDuration={1000}")};var C=n(33736),b=n(16438),P=n(54813);function I(e){return(0,r.jsxs)(b.M,{children:[(0,r.jsx)(i.U.Control,{...e}),(0,r.jsx)(P.A,{size:"lg",variant:"subtle",color:"gray",children:(0,r.jsx)(C.Z,{size:"1rem"})})]})}let w={type:"code",component:function(){return(0,r.jsxs)(i.U,{chevronPosition:"left",maw:400,mx:"auto",children:[(0,r.jsxs)(i.U.Item,{value:"item-1",children:[(0,r.jsx)(I,{children:"Control 1"}),(0,r.jsx)(i.U.Panel,{children:"Panel 1"})]}),(0,r.jsxs)(i.U.Item,{value:"item-2",children:[(0,r.jsx)(I,{children:"Control 2"}),(0,r.jsx)(i.U.Panel,{children:"Panel 2"})]}),(0,r.jsxs)(i.U.Item,{value:"item-3",children:[(0,r.jsx)(I,{children:"Control 3"}),(0,r.jsx)(i.U.Panel,{children:"Panel 3"})]})]})},code:`
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
`},k={type:"code",component:function(){let e=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,disabled:"Bananas"===e.value,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));return(0,r.jsx)(i.U,{defaultValue:"Apples",children:e})},code:`
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
`,centered:!0,maxWidth:600},U={type:"code",component:function(){return(0,r.jsx)(l,{unstyled:!0})},code:`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`};var D=n(86212);let M=`
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
`,N={type:"styles-api",data:D.x,component:function(e){let o=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));return(0,r.jsx)(i.U,{defaultValue:"Apples",order:2,...e,children:o})},centered:!0,maxWidth:"100%",code:M};var S={root:"m_333cc5d1",item:"m_3338c002",chevron:"m_67366eec"};let V={type:"code",component:function(){let e=c.map(e=>(0,r.jsxs)(i.U.Item,{value:e.value,children:[(0,r.jsx)(i.U.Control,{icon:e.emoji,children:e.value}),(0,r.jsx)(i.U.Panel,{children:e.description})]},e.value));return(0,r.jsx)(i.U,{defaultValue:"Apples",classNames:S,variant:"filled",children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"Demo.module.css",code:`.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: 1px solid transparent;
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
`,language:"scss"}],centered:!0,maxWidth:500};var _=n(25071),Z=n(15019);let E=(0,_.A)(Z.us.Accordion);function B(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:n,KeyboardEventsTable:i,StylesApiSelectors:c}=o;return n||R("Demo",!0),i||R("KeyboardEventsTable",!0),c||R("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o.p,{children:"Data used in Accordion examples:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(o.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,r.jsx)(n,{data:d.P}),"\n",(0,r.jsx)(o.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(o.h2,{id:"with-icons",children:"With icons"}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(o.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,r.jsxs)(o.p,{children:["To change transition duration, set ",(0,r.jsx)(o.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsxs)(o.p,{children:["To disable transitions, set ",(0,r.jsx)(o.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(o.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"multiple={false}"}),", set ",(0,r.jsx)(o.code,{children:"defaultValue"})," as string:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"multiple={true}"}),", set ",(0,r.jsx)(o.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"control-state",children:"Control state"}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"multiple={false}"}),", set ",(0,r.jsx)(o.code,{children:"value"})," as string:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["When ",(0,r.jsx)(o.code,{children:"multiple={true}"}),", set ",(0,r.jsx)(o.code,{children:"value"})," as an array of strings:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,r.jsxs)(o.p,{children:["You can add any additional elements that will be displayed next to ",(0,r.jsx)(o.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,r.jsx)(o.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,r.jsx)(o.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(o.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"disabled"})," prop on ",(0,r.jsx)(o.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,r.jsx)(n,{data:k}),"\n",(0,r.jsx)(o.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,r.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,r.jsx)(n,{data:U}),"\n",(0,r.jsx)(c,{component:"Accordion"}),"\n",(0,r.jsxs)(o.p,{children:["Use ",(0,r.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsxs)(o.p,{children:["Use ",(0,r.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(o.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"AccordionProps"})," type exported from ",(0,r.jsx)(o.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,r.jsx)(o.code,{children:"multiple"})," state:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,r.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(o.p,{children:["Accordion component follows ",(0,r.jsx)(o.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"order"})," on ",(0,r.jsx)(o.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,r.jsx)(o.p,{children:"Keyboard interactions:"}),"\n",(0,r.jsx)(i,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(E,{...e,children:(0,r.jsx)(B,{...e})})}function R(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},33736:function(e,o,n){"use strict";n.d(o,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(73681).Z)("outline","dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},40289:function(e,o,n){"use strict";n.d(o,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(73681).Z)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},19407:function(e,o,n){"use strict";n.d(o,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(73681).Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},46752:function(e,o,n){"use strict";n.d(o,{Q:function(){return i}});var r=n(52322),t=n(58898);function i({style:e,size:o=16,...n}){return(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.h)(o),height:(0,t.h)(o),display:"block"},...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n(2784),i.displayName="@mantine/core/AccordionChevron"},82067:function(e,o,n){"use strict";n.d(o,{q:function(){return b}});var r=n(52322),t=n(2784),i=n(91482),c=n(11200),a=n(38483),l=n(46690),s=n(28559),d=n(33502),m=n(82027);let u=(0,t.createContext)(null),p=u.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},A=(0,c.Z)((e,{spacing:o})=>({group:{"--ag-spacing":(0,i.bG)(o)}})),x=(0,m.d)((e,o)=>{let n=(0,a.w)("AvatarGroup",v,e),{classNames:t,className:i,style:c,styles:d,unstyled:m,vars:u,spacing:x,...f}=n,j=(0,l.y)({name:"AvatarGroup",classes:h,props:n,className:i,style:c,classNames:t,styles:d,unstyled:m,vars:u,varsResolver:A,rootSelector:"group"});return(0,r.jsx)(p,{value:!0,children:(0,r.jsx)(s.x,{ref:o,...j("group"),...f})})});function f(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function j(e,o=2){let n=e.split(" ");return 1===n.length?e.slice(0,o).toUpperCase():n.map(e=>e[0]).slice(0,o).join("").toUpperCase()}x.classes=h,x.displayName="@mantine/core/AvatarGroup";let g=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},C=(0,c.Z)((e,{size:o,radius:n,variant:r,gradient:t,color:c,autoContrast:a,name:l,allowedInitialsColors:s})=>{let d="initials"===c&&"string"==typeof l?function(e,o=g){let n=Math.abs(function(e){let o=0;for(let n=0;n<e.length;n+=1)o=(o<<5)-o+e.charCodeAt(n)|0;return o}(j(e)))%o.length;return o[n]}(l,s):c,m=e.variantColorResolver({color:d||"gray",theme:e,gradient:t,variant:r||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.ap)(o,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.H5)(n),"--avatar-bg":d||r?m.background:void 0,"--avatar-color":d||r?m.color:void 0,"--avatar-bd":d||r?m.border:void 0}}}),b=(0,d.b)((e,o)=>{let n=(0,a.w)("Avatar",y,e),{classNames:i,className:c,style:d,styles:m,unstyled:p,vars:v,src:A,alt:x,radius:g,color:b,gradient:P,imageProps:I,children:w,autoContrast:k,mod:U,name:D,allowedInitialsColors:M,...N}=n,S={withinGroup:!!(0,t.useContext)(u)},[V,_]=(0,t.useState)(!A),Z=(0,l.y)({name:"Avatar",props:n,classes:h,className:c,style:d,classNames:i,styles:m,unstyled:p,vars:v,varsResolver:C});return(0,t.useEffect)(()=>_(!A),[A]),(0,r.jsx)(s.x,{...Z("root"),mod:[{"within-group":S.withinGroup},U],ref:o,...N,children:V?(0,r.jsx)("span",{...Z("placeholder"),title:x,children:w||"string"==typeof D&&j(D)||(0,r.jsx)(f,{})}):(0,r.jsx)("img",{...I,...Z("image"),src:A,alt:x,onError:e=>{_(!0),I?.onError?.(e)}})})});b.classes=h,b.displayName="@mantine/core/Avatar",b.Group=x},16438:function(e,o,n){"use strict";n.d(o,{M:function(){return d}});var r=n(52322);n(2784);var t=n(38483),i=n(46690),c=n(28559),a=n(33502),l={root:"m_4451eb3a"};let s={},d=(0,a.b)((e,o)=>{let n=(0,t.w)("Center",s,e),{classNames:a,className:d,style:m,styles:u,unstyled:p,vars:h,inline:v,mod:A,...x}=n,f=(0,i.y)({name:"Center",props:n,classes:l,className:d,style:m,classNames:a,styles:u,unstyled:p,vars:h});return(0,r.jsx)(c.x,{ref:o,mod:[{inline:v},A],...f("root"),...x})});d.classes=l,d.displayName="@mantine/core/Center"}},function(e){e.O(0,[61177,66748,11340,91062,92888,49774,40179],function(){return e(e.s=25512)}),_N_E=e.O()}]);
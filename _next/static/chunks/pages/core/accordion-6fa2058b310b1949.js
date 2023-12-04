(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{3691:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(54764).Z)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},60060:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},4200:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return o(98153)}])},98153:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return H}});var t=o(24246),r=o(71670),c=o(3916),i=o(30289),a=o(27378),l=o(76253);let d=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],s=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji},e.value),a.createElement(l.U.Panel,null,e.description)));function m(e){return a.createElement(l.U,{...e},s)}let u=`
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
`,p={type:"configurator",component:function(e){let n=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji},e.value),a.createElement(l.U.Panel,null,e.description)));return a.createElement(l.U,{...e,defaultValue:"Apples"},n)},code:u,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var h=o(18337),A=o(54764),v=(0,A.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]);let f=`
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
`,g=`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`,y={type:"code",component:function(){let e=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji},e.value),a.createElement(l.U.Panel,null,e.description)));return a.createElement(l.U,{defaultValue:"Apples",classNames:{chevron:"m-85bcba4"},chevron:a.createElement(v,{className:"m-b7471fb0"})},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:f},{fileName:"Demo.module.css",code:g,language:"scss"}],centered:!0,maxWidth:600};var x=o(60060),j=(0,A.Z)("printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),C=(0,A.Z)("camera-selfie","IconCameraSelfie",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-1"}],["path",{d:"M15 11l.01 0",key:"svg-2"}],["path",{d:"M9 11l.01 0",key:"svg-3"}]]),b=o(71078);let P=`
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
`,I={type:"code",component:function(){return a.createElement(l.U,{variant:"contained"},a.createElement(l.U.Item,{value:"photos"},a.createElement(l.U.Control,{icon:a.createElement(x.Z,{style:{color:"var(--mantine-color-red-6",width:(0,b.h)(20),height:(0,b.h)(20)}})},"Recent photos"),a.createElement(l.U.Panel,null,"Content")),a.createElement(l.U.Item,{value:"print"},a.createElement(l.U.Control,{icon:a.createElement(j,{style:{color:"var(--mantine-color-blue-6",width:(0,b.h)(20),height:(0,b.h)(20)}})},"Print photos"),a.createElement(l.U.Panel,null,"Content")),a.createElement(l.U.Item,{value:"camera"},a.createElement(l.U.Control,{icon:a.createElement(C,{style:{color:"var(--mantine-color-teal-6)",width:(0,b.h)(20),height:(0,b.h)(20)}})},"Camera settings"),a.createElement(l.U.Panel,null,"Content")))},code:P,maxWidth:400,centered:!0},E=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,k={type:"code",component:()=>a.createElement(m,{transitionDuration:0,maw:380,mx:"auto"}),code:E("transitionDuration={0}")},w={type:"code",component:()=>a.createElement(m,{transitionDuration:1e3,maw:380,mx:"auto"}),code:E("transitionDuration={1000}")};var U=o(62150),D=o(84246),N=o(3691);let V=`
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
`;function M(e){return a.createElement(U.M,null,a.createElement(l.U.Control,{...e}),a.createElement(D.A,{size:"lg",variant:"subtle",color:"gray"},a.createElement(N.Z,{size:"1rem"})))}let S={type:"code",component:function(){return a.createElement(l.U,{chevronPosition:"left",maw:400,mx:"auto"},a.createElement(l.U.Item,{value:"item-1"},a.createElement(M,null,"Control 1"),a.createElement(l.U.Panel,null,"Panel 1")),a.createElement(l.U.Item,{value:"item-2"},a.createElement(M,null,"Control 2"),a.createElement(l.U.Panel,null,"Panel 2")),a.createElement(l.U.Item,{value:"item-3"},a.createElement(M,null,"Control 3"),a.createElement(l.U.Panel,null,"Panel 3")))},code:V},B=`
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
`,_={type:"code",component:function(){let e=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji,disabled:"Bananas"===e.value},e.value),a.createElement(l.U.Panel,null,e.description)));return a.createElement(l.U,{defaultValue:"Apples"},e)},code:B,centered:!0,maxWidth:600},z=`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`,T={type:"code",component:function(){return a.createElement(m,{unstyled:!0})},code:z};var W=o(92442);let Z=`
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
`,R={type:"styles-api",data:W.x,component:function(e){let n=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji},e.value),a.createElement(l.U.Panel,null,e.description)));return a.createElement(l.U,{defaultValue:"Apples",order:2,...e},n)},centered:!0,maxWidth:"100%",code:Z};var L={root:"m-333cc5d1",item:"m-3338c002",chevron:"m-67366eec"};let F=`
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
`,q=`.root {
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
`,K={type:"code",component:function(){let e=d.map(e=>a.createElement(l.U.Item,{key:e.value,value:e.value},a.createElement(l.U.Control,{icon:e.emoji},e.value),a.createElement(l.U.Panel,null,e.description)));return a.createElement(l.U,{defaultValue:"Apples",classNames:L,variant:"filled"},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:F},{fileName:"Demo.module.css",code:q,language:"scss"}],centered:!0,maxWidth:500},O=(0,c.A)(i.us.Accordion);function X(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o,KeyboardEventsTable:c,StylesApiSelectors:i}=n;return o||Q("Demo",!0),c||Q("KeyboardEventsTable",!0),i||Q("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Data used in Accordion examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,t.jsx)(o,{data:h.P}),"\n",(0,t.jsx)(n.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,t.jsx)(o,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"with-icons",children:"With icons"}),"\n",(0,t.jsx)(o,{data:I}),"\n",(0,t.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(n.p,{children:["To change transition duration, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,t.jsx)(o,{data:w}),"\n",(0,t.jsxs)(n.p,{children:["To disable transitions, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsx)(n.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"control-state",children:"Control state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,t.jsxs)(n.p,{children:["You can add any additional elements that will be displayed next to ",(0,t.jsx)(n.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,t.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,t.jsx)(o,{data:S}),"\n",(0,t.jsx)(n.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"disabled"})," prop on ",(0,t.jsx)(n.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(o,{data:_}),"\n",(0,t.jsx)(n.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(i,{component:"Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:R}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:K}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AccordionProps"})," type exported from ",(0,t.jsx)(n.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,t.jsx)(n.code,{children:"multiple"})," state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Accordion component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"order"})," on ",(0,t.jsx)(n.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(c,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}function H(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(O,{...e,children:(0,t.jsx)(X,{...e})})}function Q(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1189:function(e,n,o){"use strict";o.d(n,{Q:function(){return c}});var t=o(27378),r=o(71078);function c({style:e,size:n=16,...o}){return t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,r.h)(n),height:(0,r.h)(n),display:"block"},...o},t.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}c.displayName="@mantine/core/AccordionChevron"},62150:function(e,n,o){"use strict";o.d(n,{M:function(){return s}});var t=o(27378),r=o(96739),c=o(6231),i=o(56589),a=o(50332),l={root:"m-4451eb3a"};let d={},s=(0,a.b)((e,n)=>{let o=(0,r.w)("Center",d,e),{classNames:a,className:s,style:m,styles:u,unstyled:p,vars:h,inline:A,...v}=o,f=(0,c.y)({name:"Center",props:o,classes:l,className:s,style:m,classNames:a,styles:u,unstyled:p,vars:h});return t.createElement(i.x,{ref:n,mod:{inline:A},...f("root"),...v})});s.classes=l,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,8337,9774,2888,179],function(){return e(e.s=4200)}),_N_E=e.O()}]);
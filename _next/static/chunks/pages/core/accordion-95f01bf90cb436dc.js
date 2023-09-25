(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{33507:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},64877:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return o(37397)}])},37397:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return ex}});var t=o(85893),r=o(11151),c=o(19905),a=o(9904),i=o(67294),l=o(238),s=Object.defineProperty,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,o)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))m.call(n,o)&&p(e,o,n[o]);if(d)for(var o of d(n))u.call(n,o)&&p(e,o,n[o]);return e};let v=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],f=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji},e.value),i.createElement(l.U.Panel,null,e.description)));function A(e){return i.createElement(l.U,h({},e),f)}var y=Object.defineProperty,g=Object.defineProperties,b=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,C=(e,n,o)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,k=(e,n)=>{for(var o in n||(n={}))x.call(n,o)&&C(e,o,n[o]);if(j)for(var o of j(n))P.call(n,o)&&C(e,o,n[o]);return e},I=(e,n)=>g(e,b(n));let w=`
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
`,E={type:"configurator",component:function(e){let n=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji},e.value),i.createElement(l.U.Panel,null,e.description)));return i.createElement(l.U,I(k({},e),{defaultValue:"Apples"}),n)},code:w,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var M=o(56685),O=o(54764),U=(0,O.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),D={chevron:"m-85bcba4",icon:"m-b7471fb0"};let S=`
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
`,N=`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`,V={type:"code",component:function(){let e=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji},e.value),i.createElement(l.U.Panel,null,e.description)));return i.createElement(l.U,{defaultValue:"Apples",classNames:{chevron:D.chevron},chevron:i.createElement(U,{className:D.icon})},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:S},{fileName:"Demo.module.css",code:N,language:"scss"}],centered:!0,maxWidth:600};var Z=o(60060),z=(0,O.Z)("printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),B=(0,O.Z)("camera-selfie","IconCameraSelfie",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-1"}],["path",{d:"M15 11l.01 0",key:"svg-2"}],["path",{d:"M9 11l.01 0",key:"svg-3"}]]),_=o(72622);let T=`
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--mantine-color-red-filled', width: rem(20), height: rem(20) }}
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
              style={{ color: 'var(--mantine-color-blue-filled', width: rem(20), height: rem(20) }}
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
              style={{ color: 'var(--mantine-color-teal-filled)', width: rem(20), height: rem(20) }}
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
`,W={type:"code",component:function(){return i.createElement(l.U,{variant:"contained"},i.createElement(l.U.Item,{value:"photos"},i.createElement(l.U.Control,{icon:i.createElement(Z.Z,{style:{color:"var(--mantine-color-red-filled",width:(0,_.h)(20),height:(0,_.h)(20)}})},"Recent photos"),i.createElement(l.U.Panel,null,"Content")),i.createElement(l.U.Item,{value:"print"},i.createElement(l.U.Control,{icon:i.createElement(z,{style:{color:"var(--mantine-color-blue-filled",width:(0,_.h)(20),height:(0,_.h)(20)}})},"Print photos"),i.createElement(l.U.Panel,null,"Content")),i.createElement(l.U.Item,{value:"camera"},i.createElement(l.U.Control,{icon:i.createElement(B,{style:{color:"var(--mantine-color-teal-filled)",width:(0,_.h)(20),height:(0,_.h)(20)}})},"Camera settings"),i.createElement(l.U.Panel,null,"Content")))},code:T,maxWidth:400,centered:!0},R=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,L={type:"code",component:()=>i.createElement(A,{transitionDuration:0,maw:380,mx:"auto"}),code:R("transitionDuration={0}")},F={type:"code",component:()=>i.createElement(A,{transitionDuration:1e3,maw:380,mx:"auto"}),code:R("transitionDuration={1000}")};var q=o(39394),K=o(89363),X=o(3691),H=Object.defineProperty,Q=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,G=(e,n,o)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,J=(e,n)=>{for(var o in n||(n={}))Y.call(n,o)&&G(e,o,n[o]);if(Q)for(var o of Q(n))$.call(n,o)&&G(e,o,n[o]);return e};let ee=`
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
`;function en(e){return i.createElement(q.M,null,i.createElement(l.U.Control,J({},e)),i.createElement(K.A,{size:"lg",variant:"subtle",color:"gray"},i.createElement(X.Z,{size:"1rem"})))}let eo={type:"code",component:function(){return i.createElement(l.U,{chevronPosition:"left",maw:400,mx:"auto"},i.createElement(l.U.Item,{value:"item-1"},i.createElement(en,null,"Control 1"),i.createElement(l.U.Panel,null,"Panel 1")),i.createElement(l.U.Item,{value:"item-2"},i.createElement(en,null,"Control 2"),i.createElement(l.U.Panel,null,"Panel 2")),i.createElement(l.U.Item,{value:"item-3"},i.createElement(en,null,"Control 3"),i.createElement(l.U.Panel,null,"Panel 3")))},code:ee},et=`
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
`,er={type:"code",component:function(){let e=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji,disabled:"Bananas"===e.value},e.value),i.createElement(l.U.Panel,null,e.description)));return i.createElement(l.U,{defaultValue:"Apples"},e)},code:et,centered:!0,maxWidth:600},ec=`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`,ea={type:"code",component:function(){return i.createElement(A,{unstyled:!0})},code:ec};var ei=o(922),el=Object.defineProperty,es=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,eu=(e,n,o)=>n in e?el(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,ep=(e,n)=>{for(var o in n||(n={}))ed.call(n,o)&&eu(e,o,n[o]);if(es)for(var o of es(n))em.call(n,o)&&eu(e,o,n[o]);return e};let eh=`
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
`,ev={type:"styles-api",data:ei.x,component:function(e){let n=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji},e.value),i.createElement(l.U.Panel,null,e.description)));return i.createElement(l.U,ep({defaultValue:"Apples",order:2},e),n)},centered:!0,maxWidth:"100%",code:eh};var ef={root:"m-333cc5d1",item:"m-3338c002",chevron:"m-67366eec"};let eA=`
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
`,ey=`.root {
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
`,eg={type:"code",component:function(){let e=v.map(e=>i.createElement(l.U.Item,{key:e.value,value:e.value},i.createElement(l.U.Control,{icon:e.emoji},e.value),i.createElement(l.U.Panel,null,e.description)));return i.createElement(l.U,{defaultValue:"Apples",classNames:ef,variant:"filled"},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:eA},{fileName:"Demo.module.css",code:ey,language:"scss"}],centered:!0,maxWidth:500},eb=(0,c.A)(a.us.Accordion);function ej(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:o,StylesApiSelectors:c,KeyboardEventsTable:a}=n;return o||eP("Demo",!0),a||eP("KeyboardEventsTable",!0),c||eP("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Data used in Accordion examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,t.jsx)(o,{data:M.P}),"\n",(0,t.jsx)(n.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,t.jsx)(o,{data:V}),"\n",(0,t.jsx)(n.h2,{id:"with-icons",children:"With icons"}),"\n",(0,t.jsx)(o,{data:W}),"\n",(0,t.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(n.p,{children:["To change transition duration, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,t.jsx)(o,{data:F}),"\n",(0,t.jsxs)(n.p,{children:["To disable transitions, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,t.jsx)(o,{data:L}),"\n",(0,t.jsx)(n.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"control-state",children:"Control state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,t.jsxs)(n.p,{children:["You can add any additional elements that will be displayed next to ",(0,t.jsx)(n.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,t.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,t.jsx)(o,{data:eo}),"\n",(0,t.jsx)(n.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"disabled"})," prop on ",(0,t.jsx)(n.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(o,{data:er}),"\n",(0,t.jsx)(n.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,t.jsx)(o,{data:ea}),"\n",(0,t.jsx)(c,{component:"Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:ev}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:eg}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AccordionProps"})," type exported from ",(0,t.jsx)(n.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,t.jsx)(n.code,{children:"multiple"})," state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Accordion component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"order"})," on ",(0,t.jsx)(n.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(a,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}var ex=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(eb,Object.assign({},e,{children:(0,t.jsx)(ej,e)}))};function eP(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3691:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(54764).Z)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},60060:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},53768:function(e,n,o){"use strict";o.d(n,{Q:function(){return v}});var t=o(67294),r=o(72622),c=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,n,o)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,u=(e,n)=>{for(var o in n||(n={}))s.call(n,o)&&m(e,o,n[o]);if(l)for(var o of l(n))d.call(n,o)&&m(e,o,n[o]);return e},p=(e,n)=>a(e,i(n)),h=(e,n)=>{var o={};for(var t in e)s.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&l)for(var t of l(e))0>n.indexOf(t)&&d.call(e,t)&&(o[t]=e[t]);return o};function v(e){var{style:n,size:o=16}=e,c=h(e,["style","size"]);return t.createElement("svg",u({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:p(u({},n),{width:(0,r.h)(o),height:(0,r.h)(o),display:"block"})},c),t.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.displayName="@mantine/core/AccordionChevron"},39394:function(e,n,o){"use strict";o.d(n,{M:function(){return A}});var t=o(67294),r={root:"m-4451eb3a"},c=o(70405),a=o(30370),i=o(86109),l=o(81110),s=Object.defineProperty,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,o)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))m.call(n,o)&&p(e,o,n[o]);if(d)for(var o of d(n))u.call(n,o)&&p(e,o,n[o]);return e},v=(e,n)=>{var o={};for(var t in e)m.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&d)for(var t of d(e))0>n.indexOf(t)&&u.call(e,t)&&(o[t]=e[t]);return o};let f={},A=(0,c.b)((e,n)=>{let o=(0,a.w)("Center",f,e),{classNames:c,className:s,style:d,styles:m,unstyled:u,vars:p,inline:A}=o,y=v(o,["classNames","className","style","styles","unstyled","vars","inline"]),g=(0,i.y)({name:"Center",props:o,classes:r,className:s,style:d,classNames:c,styles:m,unstyled:u,vars:p});return t.createElement(l.x,h(h({ref:n,mod:{inline:A}},g("root")),y))});A.classes=r,A.displayName="@mantine/core/Center"}},function(e){e.O(0,[8992,178,6685,9774,2888,179],function(){return e(e.s=64877)}),_N_E=e.O()}]);
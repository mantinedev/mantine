(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27854],{65253:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return n(4291)}])},4291:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>ef});var t=n(31085),r=n(71184),i=n(97567),a=n(82307),c=n(39735);n(14041);var s=n(58212),l=n(33450),d=n(7098),m=n(29686),u=n(69564),h=n(34056),p=n(6754),v=n(59852);let[g,A]=(0,v.F)("Accordion component was not found in the tree");var f=n(76076),x=n(73668),y=n(33970);let[j,b]=(0,v.F)("Accordion.Item component was not found in the tree");var C={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};let I={},k=(0,p.P9)((e,o)=>{let{classNames:n,className:r,style:i,styles:a,vars:c,chevron:s,icon:l,onClick:d,onKeyDown:u,children:p,disabled:v,mod:g,...f}=(0,m.Y)("AccordionControl",I,e),{value:j}=b(),C=A(),k=C.isItemActive(j),P="number"==typeof C.order,w=`h${C.order}`,M=(0,t.jsxs)(y.N,{...f,...C.getStyles("control",{className:r,classNames:n,style:i,styles:a,variant:C.variant}),unstyled:C.unstyled,mod:["accordion-control",{active:k,"chevron-position":C.chevronPosition,disabled:v},g],ref:o,onClick:e=>{d?.(e),C.onChange(j)},type:"button",disabled:v,"aria-expanded":k,"aria-controls":C.getRegionId(j),id:C.getControlId(j),onKeyDown:(0,x.Y)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:C.loop,orientation:"vertical",onKeyDown:u}),children:[(0,t.jsx)(h.a,{component:"span",mod:{rotate:!C.disableChevronRotation&&k,position:C.chevronPosition},...C.getStyles("chevron",{classNames:n,styles:a}),children:s||C.chevron}),(0,t.jsx)("span",{...C.getStyles("label",{classNames:n,styles:a}),children:p}),l&&(0,t.jsx)(h.a,{component:"span",mod:{"chevron-position":C.chevronPosition},...C.getStyles("icon",{classNames:n,styles:a}),children:l})]});return P?(0,t.jsx)(w,{...C.getStyles("itemTitle",{classNames:n,styles:a}),children:M}):M});k.displayName="@mantine/core/AccordionControl",k.classes=C;let P={},w=(0,p.P9)((e,o)=>{let{classNames:n,className:r,style:i,styles:a,vars:c,value:s,mod:l,...d}=(0,m.Y)("AccordionItem",P,e),u=A();return(0,t.jsx)(j,{value:{value:s},children:(0,t.jsx)(h.a,{ref:o,mod:[{active:u.isItemActive(s)},l],...u.getStyles("item",{className:r,classNames:n,styles:a,style:i,variant:u.variant}),...d})})});w.displayName="@mantine/core/AccordionItem",w.classes=C;var M=n(60333);let S={},D=(0,p.P9)((e,o)=>{let{classNames:n,className:r,style:i,styles:a,vars:c,children:s,...l}=(0,m.Y)("AccordionPanel",S,e),{value:d}=b(),u=A();return(0,t.jsx)(M.S,{ref:o,...u.getStyles("panel",{className:r,classNames:n,style:i,styles:a}),...l,in:u.isItemActive(d),transitionDuration:u.transitionDuration??200,role:"region",id:u.getRegionId(d),"aria-labelledby":u.getControlId(d),children:(0,t.jsx)("div",{...u.getStyles("content",{classNames:n,styles:a}),children:s})})});D.displayName="@mantine/core/AccordionPanel",D.classes=C;let _={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:(0,t.jsx)(f.U,{})},z=(0,d.V)((e,{transitionDuration:o,chevronSize:n,radius:t})=>({root:{"--accordion-transition-duration":void 0===o?void 0:`${o}ms`,"--accordion-chevron-size":void 0===n?void 0:(0,c.D)(n),"--accordion-radius":void 0===t?void 0:(0,l.nJ)(t)}}));function N(e){let o=(0,m.Y)("Accordion",_,e),{classNames:n,className:r,style:c,styles:l,unstyled:d,vars:p,children:v,multiple:A,value:f,defaultValue:x,onChange:y,id:j,loop:b,transitionDuration:I,disableChevronRotation:k,chevronPosition:P,chevronSize:w,order:M,chevron:S,variant:D,radius:N,...V}=o,B=(0,i.B)(j),[T,R]=(0,a.Z)({value:f,defaultValue:x,finalValue:A?[]:null,onChange:y}),E=(0,u.I)({name:"Accordion",classes:C,props:o,className:r,style:c,classNames:n,styles:l,unstyled:d,vars:p,varsResolver:z});return(0,t.jsx)(g,{value:{isItemActive:e=>Array.isArray(T)?T.includes(e):e===T,onChange:e=>{R(Array.isArray(T)?T.includes(e)?T.filter(o=>o!==e):[...T,e]:e===T?null:e)},getControlId:(0,s.r)(`${B}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,s.r)(`${B}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:I,disableChevronRotation:k,chevronPosition:P,order:M,chevron:S,loop:b,getStyles:E,variant:D,unstyled:d},children:(0,t.jsx)(h.a,{...E("root"),id:B,...V,variant:D,"data-accordion":!0,children:v})})}N.extend=e=>e,N.withProps=(0,p.LE)(N),N.classes=C,N.displayName="@mantine/core/Accordion",N.Item=w,N.Panel=D,N.Control=k,N.Chevron=f.U;let V=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],B=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));function T(e){return(0,t.jsx)(N,{...e,children:B})}let R={type:"configurator",component:function(e){let o=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));return(0,t.jsx)(N,{...e,defaultValue:"Apples",children:o})},code:`
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
`,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var E=n(56051),F=n(86658),W=n(93065);let H=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}];function L({label:e,image:o,description:n}){return(0,t.jsxs)(E.Y,{wrap:"nowrap",children:[(0,t.jsx)(F.e,{src:o,radius:"xl",size:"lg"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(W.E,{children:e}),(0,t.jsx)(W.E,{size:"sm",c:"dimmed",fw:400,children:n})]})]})}function Y(e){let o=H.map(e=>(0,t.jsxs)(N.Item,{value:e.id,children:[(0,t.jsx)(N.Control,{children:(0,t.jsx)(L,{...e})}),(0,t.jsx)(N.Panel,{children:(0,t.jsx)(W.E,{size:"sm",children:e.content})})]},e.label));return(0,t.jsx)(N,{chevronPosition:"right",variant:"contained",...e,children:o})}let U={type:"code",code:`
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`,component:function(){return(0,t.jsx)(Y,{})},maxWidth:540,centered:!0};var $=n(61410),G={chevron:"m_85bcba4",icon:"m_b7471fb0"};let O={type:"code",component:function(){let e=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));return(0,t.jsx)(N,{defaultValue:"Apples",classNames:{chevron:G.chevron},chevron:(0,t.jsx)($.A,{className:G.icon}),children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`,language:"scss"}],centered:!0,maxWidth:600};var Z=n(33102),J=n(73366),X=(0,J.A)("outline","printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),q=(0,J.A)("outline","camera-selfie","IconCameraSelfie",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-1"}],["path",{d:"M15 11l.01 0",key:"svg-2"}],["path",{d:"M9 11l.01 0",key:"svg-3"}]]);let K={type:"code",component:function(){return(0,t.jsxs)(N,{variant:"contained",children:[(0,t.jsxs)(N.Item,{value:"photos",children:[(0,t.jsx)(N.Control,{icon:(0,t.jsx)(Z.A,{size:20,color:"var(--mantine-color-red-6)"}),children:"Recent photos"}),(0,t.jsx)(N.Panel,{children:"Content"})]}),(0,t.jsxs)(N.Item,{value:"print",children:[(0,t.jsx)(N.Control,{icon:(0,t.jsx)(X,{size:20,color:"var(--mantine-color-blue-6)"}),children:"Print photos"}),(0,t.jsx)(N.Panel,{children:"Content"})]}),(0,t.jsxs)(N.Item,{value:"camera",children:[(0,t.jsx)(N.Control,{icon:(0,t.jsx)(q,{size:20,color:"var(--mantine-color-teal-6)"}),children:"Camera settings"}),(0,t.jsx)(N.Panel,{children:"Content"})]})]})},code:`
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={20} color="var(--mantine-color-red-6)" />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={20} color="var(--mantine-color-blue-6)" />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<IconCameraSelfie size={20} color="var(--mantine-color-teal-6)" />}
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,maxWidth:400,centered:!0},Q=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,ee={type:"code",component:()=>(0,t.jsx)(T,{transitionDuration:0,maw:380,mx:"auto"}),code:Q("transitionDuration={0}")},eo={type:"code",component:()=>(0,t.jsx)(T,{transitionDuration:1e3,maw:380,mx:"auto"}),code:Q("transitionDuration={1000}")};var en=n(91086),et=n(73687),er=n(22962);function ei(e){return(0,t.jsxs)(et.o,{children:[(0,t.jsx)(N.Control,{...e}),(0,t.jsx)(er.M,{size:"lg",variant:"subtle",color:"gray",children:(0,t.jsx)(en.A,{size:16})})]})}let ea={type:"code",component:function(){return(0,t.jsxs)(N,{chevronPosition:"left",maw:400,mx:"auto",children:[(0,t.jsxs)(N.Item,{value:"item-1",children:[(0,t.jsx)(ei,{children:"Control 1"}),(0,t.jsx)(N.Panel,{children:"Panel 1"})]}),(0,t.jsxs)(N.Item,{value:"item-2",children:[(0,t.jsx)(ei,{children:"Control 2"}),(0,t.jsx)(N.Panel,{children:"Panel 2"})]}),(0,t.jsxs)(N.Item,{value:"item-3",children:[(0,t.jsx)(ei,{children:"Control 3"}),(0,t.jsx)(N.Panel,{children:"Panel 3"})]})]})},code:`
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size={16} />
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
`},ec={type:"code",component:function(){let e=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,disabled:"Bananas"===e.value,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));return(0,t.jsx)(N,{defaultValue:"Apples",children:e})},code:`
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
`,centered:!0,maxWidth:600},es={type:"code",component:function(){return(0,t.jsx)(T,{unstyled:!0})},code:`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`};var el=n(48778);let ed=`
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
`,em={type:"styles-api",data:el.d,component:function(e){let o=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));return(0,t.jsx)(N,{defaultValue:"Apples",order:2,...e,children:o})},centered:!0,maxWidth:"100%",code:ed};var eu={root:"m_333cc5d1",item:"m_3338c002",chevron:"m_67366eec"};let eh={type:"code",component:function(){let e=V.map(e=>(0,t.jsxs)(N.Item,{value:e.value,children:[(0,t.jsx)(N.Control,{icon:e.emoji,children:e.value}),(0,t.jsx)(N.Panel,{children:e.description})]},e.value));return(0,t.jsx)(N,{defaultValue:"Apples",classNames:eu,variant:"filled",children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`,language:"scss"}],centered:!0,maxWidth:500};var ep=n(18675),ev=n(20017);let eg=(0,ep.P)(ev.XZ.Accordion);function eA(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n,KeyboardEventsTable:i,StylesApiSelectors:a}=o;return n||ex("Demo",!0),i||ex("KeyboardEventsTable",!0),a||ex("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.p,{children:"Data used in Accordion examples:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,t.jsx)(n,{data:U}),"\n",(0,t.jsx)(o.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,t.jsx)(n,{data:O}),"\n",(0,t.jsx)(o.h2,{id:"with-icons",children:"With icons"}),"\n",(0,t.jsx)(n,{data:K}),"\n",(0,t.jsx)(o.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(o.p,{children:["To change transition duration, set ",(0,t.jsx)(o.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,t.jsx)(n,{data:eo}),"\n",(0,t.jsxs)(o.p,{children:["To disable transitions, set ",(0,t.jsx)(o.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,t.jsx)(n,{data:ee}),"\n",(0,t.jsx)(o.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,t.jsxs)(o.p,{children:["When ",(0,t.jsx)(o.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(o.code,{children:"defaultValue"})," as string:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["When ",(0,t.jsx)(o.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(o.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"control-state",children:"Control state"}),"\n",(0,t.jsxs)(o.p,{children:["When ",(0,t.jsx)(o.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(o.code,{children:"value"})," as string:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["When ",(0,t.jsx)(o.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(o.code,{children:"value"})," as an array of strings:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,t.jsxs)(o.p,{children:["You can add any additional elements that will be displayed next to ",(0,t.jsx)(o.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,t.jsx)(o.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,t.jsx)(o.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,t.jsx)(n,{data:ea}),"\n",(0,t.jsx)(o.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"disabled"})," prop on ",(0,t.jsx)(o.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(n,{data:ec}),"\n",(0,t.jsx)(o.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,t.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,t.jsx)(n,{data:es}),"\n",(0,t.jsx)(a,{component:"Accordion"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(n,{data:em}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(n,{data:eh}),"\n",(0,t.jsx)(o.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"AccordionProps"})," type exported from ",(0,t.jsx)(o.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,t.jsx)(o.code,{children:"multiple"})," state:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:["Accordion component follows ",(0,t.jsx)(o.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"order"})," on ",(0,t.jsx)(o.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(i,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}function ef(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(eg,{...e,children:(0,t.jsx)(eA,{...e})})}function ex(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},91086:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},11749:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},33102:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},61410:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])},55764:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});var t=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},86658:(e,o,n)=>{"use strict";n.d(o,{e:()=>b});var t=n(31085),r=n(14041),i=n(33450),a=n(7098),c=n(29686),s=n(69564),l=n(34056),d=n(2453),m=n(6754);let u=(0,r.createContext)(null),h=u.Provider;var p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},g=(0,a.V)((e,{spacing:o})=>({group:{"--ag-spacing":(0,i.GY)(o)}})),A=(0,m.P9)((e,o)=>{let n=(0,c.Y)("AvatarGroup",v,e),{classNames:r,className:i,style:a,styles:d,unstyled:m,vars:u,spacing:A,...f}=n,x=(0,s.I)({name:"AvatarGroup",classes:p,props:n,className:i,style:a,classNames:r,styles:d,unstyled:m,vars:u,varsResolver:g,rootSelector:"group"});return(0,t.jsx)(h,{value:!0,children:(0,t.jsx)(l.a,{ref:o,...x("group"),...f})})});function f(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}A.classes=p,A.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},j=(0,a.V)((e,{size:o,radius:n,variant:t,gradient:r,color:a,autoContrast:c,name:s,allowedInitialsColors:l})=>{let d="initials"===a&&"string"==typeof s?function(e,o=x){let n=Math.abs(function(e){let o=0;for(let n=0;n<e.length;n+=1)o=(o<<5)-o+e.charCodeAt(n)|0;return o}(e))%o.length;return o[n]}(s,l):a,m=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:t||"light",autoContrast:c});return{root:{"--avatar-size":(0,i.YC)(o,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.nJ)(n),"--avatar-bg":d||t?m.background:void 0,"--avatar-color":d||t?m.color:void 0,"--avatar-bd":d||t?m.border:void 0}}}),b=(0,d.v)((e,o)=>{let n=(0,c.Y)("Avatar",y,e),{classNames:i,className:a,style:d,styles:m,unstyled:h,vars:v,src:g,alt:A,radius:x,color:b,gradient:C,imageProps:I,children:k,autoContrast:P,mod:w,name:M,allowedInitialsColors:S,...D}=n,_={withinGroup:!!(0,r.useContext)(u)},[z,N]=(0,r.useState)(!g),V=(0,s.I)({name:"Avatar",props:n,classes:p,className:a,style:d,classNames:i,styles:m,unstyled:h,vars:v,varsResolver:j});return(0,r.useEffect)(()=>N(!g),[g]),(0,t.jsx)(l.a,{...V("root"),mod:[{"within-group":_.withinGroup},w],ref:o,...D,children:z||!g?(0,t.jsx)("span",{...V("placeholder"),title:A,children:k||"string"==typeof M&&function(e,o=2){let n=e.split(" ");return 1===n.length?e.slice(0,o).toUpperCase():n.map(e=>e[0]).slice(0,o).join("").toUpperCase()}(M)||(0,t.jsx)(f,{})}):(0,t.jsx)("img",{...I,...V("image"),src:g,alt:A,onError:e=>{N(!0),I?.onError?.(e)}})})});b.classes=p,b.displayName="@mantine/core/Avatar",b.Group=A},60333:(e,o,n)=>{"use strict";n.d(o,{S:()=>A});var t=n(31085),r=n(56447),i=n(14041),a=n(92408),c=n(29686),s=n(74022),l=n(34056),d=n(6754),m=n(43144),u=n(68323),h=n(34321);function p(e){return e?.current?e.current.scrollHeight:"auto"}let v="undefined"!=typeof window&&window.requestAnimationFrame,g={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},A=(0,d.P9)((e,o)=>{let{children:n,in:d,transitionDuration:A,transitionTimingFunction:f,style:x,onTransitionEnd:y,animateOpacity:j,...b}=(0,c.Y)("Collapse",g,e),C=(0,a.xd)(),I=(0,r.I)(),k=C.respectReducedMotion&&I?0:A,P=function({transitionDuration:e,transitionTimingFunction:o="ease",onTransitionEnd:n=()=>{},opened:t}){let r=(0,i.useRef)(null),a={height:0,overflow:"hidden"},[c,s]=(0,i.useState)(t?{}:a),l=e=>{(0,m.flushSync)(()=>s(e))},d=e=>{l(o=>({...o,...e}))};function g(n){let t=e||function(e){if(!e||"string"==typeof e)return 0;let o=e/36;return Math.round((4+15*o**.25+o/5)*10)}(n);return{transition:`height ${t}ms ${o}, opacity ${t}ms ${o}`}}(0,u.C)(()=>{"function"==typeof v&&(t?v(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),v(()=>{let e=p(r);d({...g(e),height:e})})}):v(()=>{let e=p(r);d({...g(e),willChange:"height",height:e}),v(()=>d({height:0,overflow:"hidden"}))}))},[t]);let A=e=>{if(e.target===r.current&&"height"===e.propertyName){if(t){let e=p(r);e===c.height?l({}):d({height:e}),n()}else 0===c.height&&(l(a),n())}};return function({style:e={},refKey:o="ref",...n}={}){let a=n[o],s={"aria-hidden":!t,...n,[o]:(0,h.Px)(r,a),onTransitionEnd:A,style:{boxSizing:"border-box",...e,...c}};return i.version.startsWith("18")?t||(s.inert=""):s.inert=!t,s}}({opened:d,transitionDuration:k,transitionTimingFunction:f,onTransitionEnd:y});return 0===k?d?(0,t.jsx)(l.a,{...b,children:n}):null:(0,t.jsx)(l.a,{...P({style:{opacity:d||!j?1:0,transition:j?`opacity ${k}ms ${f}`:"none",...(0,s.X)(x,C)},ref:o,...b}),children:n})});A.displayName="@mantine/core/Collapse"}},e=>{var o=o=>e(e.s=o);e.O(0,[18675,90636,46593,38792],()=>o(65253)),_N_E=e.O()}]);
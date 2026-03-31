(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,511152,e=>{"use strict";var o=e.i(391398),n=e.i(38856),t=e.i(648863),i=e.i(779177),r=e.i(325505),a=e.i(433512),c=e.i(481178),s=e.i(44091),l=e.i(391466),d=e.i(275519),m=e.i(232471),h=e.i(386179);let[u,p]=(0,h.createSafeContext)("Accordion component was not found in the tree");var A=e.i(462138),v={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"},f=e.i(654486),x=e.i(284629);let[g,j]=(0,h.createSafeContext)("Accordion.Item component was not found in the tree"),y=(0,d.factory)(e=>{let{classNames:n,className:t,style:i,styles:r,vars:a,chevron:c,icon:l,onClick:d,onKeyDown:h,children:u,disabled:A,mod:v,...g}=(0,s.useProps)("AccordionControl",null,e),{value:y}=j(),b=p(),H=b.isItemActive(y),C="number"==typeof b.order,I=`h${b.order}`,V=(0,o.jsxs)(x.UnstyledButton,{...b.getStyles("control",{className:t,classNames:n,style:i,styles:r,variant:b.variant}),unstyled:b.unstyled,mod:["accordion-control",{active:H,"chevron-position":b.chevronPosition,disabled:A},v],onClick:e=>{d?.(e),b.onChange(y)},type:"button",disabled:A,"aria-expanded":H,"aria-controls":b.getRegionId(y),id:b.getControlId(y),onKeyDown:(0,f.createScopedKeydownHandler)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:b.loop,orientation:"vertical",onKeyDown:h}),...g,children:[(0,o.jsx)(m.Box,{component:"span",mod:{rotate:!b.disableChevronRotation&&H,position:b.chevronPosition},...b.getStyles("chevron",{classNames:n,styles:r}),children:c||b.chevron}),(0,o.jsx)("span",{...b.getStyles("label",{classNames:n,styles:r}),children:u}),l&&(0,o.jsx)(m.Box,{component:"span",mod:{"chevron-position":b.chevronPosition},...b.getStyles("icon",{classNames:n,styles:r}),children:l})]});return C?(0,o.jsx)(I,{...b.getStyles("itemTitle",{classNames:n,styles:r}),children:V}):V});y.displayName="@mantine/core/AccordionControl",y.classes=v;let b=(0,d.factory)(e=>{let{classNames:n,className:t,style:i,styles:r,vars:a,value:c,mod:l,...d}=(0,s.useProps)("AccordionItem",null,e),h=p();return(0,o.jsx)(g,{value:{value:c},children:(0,o.jsx)(m.Box,{mod:[{active:h.isItemActive(c)},l],...h.getStyles("item",{className:t,classNames:n,styles:r,style:i,variant:h.variant}),...d})})});b.displayName="@mantine/core/AccordionItem",b.classes=v;var H=e.i(586692);let C=(0,d.factory)(e=>{let{classNames:n,className:t,style:i,styles:r,vars:a,children:c,keepMounted:l,...d}=(0,s.useProps)("AccordionPanel",null,e),{value:m}=j(),h=p();return(0,o.jsx)(H.Collapse,{...h.getStyles("panel",{className:t,classNames:n,style:i,styles:r}),expanded:h.isItemActive(m),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(m),"aria-labelledby":h.getControlId(m),keepMounted:l??h.keepMounted,...d,children:(0,o.jsx)("div",{...h.getStyles("content",{classNames:n,styles:r}),children:c})})});C.displayName="@mantine/core/AccordionPanel",C.classes=v;var I=e.i(107315),V=e.i(579560);let P={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevronSize:"auto",chevronIconSize:16},w=(0,c.createVarsResolver)((e,{transitionDuration:o,chevronSize:n,radius:t})=>({root:{"--accordion-transition-duration":void 0===o?void 0:`${o}ms`,"--accordion-chevron-size":void 0===n?void 0:(0,i.rem)(n),"--accordion-radius":void 0===t?void 0:(0,a.getRadius)(t)}})),M=(0,d.genericFactory)(e=>{let n=(0,s.useProps)("Accordion",P,e),{classNames:t,className:i,style:a,styles:c,unstyled:d,vars:h,children:p,multiple:f,value:x,defaultValue:g,onChange:j,id:y,loop:b,transitionDuration:H,disableChevronRotation:C,chevronPosition:M,chevronSize:k,order:Z,chevron:S,variant:T,radius:D,chevronIconSize:E,attributes:z,keepMounted:N,...F}=n,B=(0,I.useId)(y),[_,L]=(0,V.useUncontrolled)({value:x,defaultValue:g,finalValue:f?[]:null,onChange:j}),R=(0,l.useStyles)({name:"Accordion",classes:v,props:n,className:i,style:a,classNames:t,styles:c,unstyled:d,attributes:z,vars:h,varsResolver:w});return(0,o.jsx)(u,{value:{isItemActive:e=>Array.isArray(_)?_.includes(e):e===_,onChange:e=>{L(Array.isArray(_)?_.includes(e)?_.filter(o=>o!==e):[..._,e]:e===_?null:e)},getControlId:(0,r.getSafeId)(`${B}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,r.getSafeId)(`${B}-panel`,"Accordion.Item component was rendered with invalid value or without value"),chevron:null===S?null:S||(0,o.jsx)(A.AccordionChevron,{size:E}),transitionDuration:H,disableChevronRotation:C,chevronPosition:M,order:Z,loop:b,getStyles:R,variant:T,unstyled:d,keepMounted:N},children:(0,o.jsx)(m.Box,{...R("root"),id:B,...F,variant:T,"data-accordion":!0,children:p})})});M.classes=v,M.varsResolver=w,M.displayName="@mantine/core/Accordion",M.Item=b,M.Panel=C,M.Control=y,M.Chevron=A.AccordionChevron;var k=e.i(141806),Z=e.i(19830),S=e.i(883364);let T=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodríguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}];function D({label:e,image:n,description:t}){return(0,o.jsxs)(Z.Flex,{component:"span",gap:"md",align:"center",wrap:"nowrap",children:[(0,o.jsx)(k.Avatar,{src:n,radius:"xl",size:"lg",alt:e}),(0,o.jsxs)("div",{children:[(0,o.jsx)(S.Text,{span:!0,children:e}),(0,o.jsx)(S.Text,{span:!0,display:"block",size:"sm",c:"dimmed",fw:400,children:t})]})]})}function E(e){let n=T.map(e=>(0,o.jsxs)(M.Item,{value:e.id,children:[(0,o.jsx)(M.Control,{"aria-label":e.label,children:(0,o.jsx)(D,{...e})}),(0,o.jsx)(M.Panel,{children:(0,o.jsx)(S.Text,{size:"sm",children:e.content})})]},e.label));return(0,o.jsx)(M,{chevronPosition:"right",variant:"contained",order:3,...e,children:n})}let z={type:"code",code:`
import { Flex, Avatar, Text, Accordion } from '@mantine/core';

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
    <Flex component="span" gap="md" align="center" wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" alt={label} />
      <div>
        <Text span>{label}</Text>
        <Text span display="block" size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Flex>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control aria-label={item.label}>
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
`,component:function(){return(0,o.jsx)(E,{})},maxWidth:540,centered:!0,defaultExpanded:!1},N=[{emoji:"🍎",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"🍌",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"🥦",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],F=`export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];`,B=N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value));function _(e){return(0,o.jsx)(M,{order:3,...e,children:B})}let L={type:"configurator",component:function(e){let n=N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value));return(0,o.jsx)(M,{...e,defaultValue:"Apples",order:3,mih:320,children:n})},code:[{fileName:"Demo.tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} order={3} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:F,language:"tsx"}],controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"},{label:"Unstyled",value:"unstyled"}]},{prop:"radius",type:"size",libraryValue:"md",initialValue:"md"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"chevronIconSize",type:"number",initialValue:16,libraryValue:16,min:12,max:25},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]},R={type:"code",component:function(){return(0,o.jsx)(M,{defaultValue:"Apples",order:3,mih:270,children:N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,disabled:"Bananas"===e.value,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value))})},code:[{fileName:"Demo.tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={3}>
      {items}
    </Accordion>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:F,language:"tsx"}],centered:!0,maxWidth:600};var W=e.i(37930);let U={type:"code",component:function(){let e=N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value));return(0,o.jsx)(M,{defaultValue:"Apples",classNames:{chevron:"m_85bcba4"},chevron:(0,o.jsx)(W.PlusIcon,{className:"m_b7471fb0"}),order:3,mih:270,children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { PlusIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<PlusIcon className={classes.icon} />}
      order={3}
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
`,language:"scss"},{fileName:"data.ts",code:F,language:"tsx"}],centered:!0,maxWidth:600};var O=e.i(191788),K=e.i(171481);let q=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",opacity:"0.2"}),O.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z"}))]]),X=O.forwardRef((e,o)=>O.createElement(K.default,{ref:o,...e,weights:q}));X.displayName="CameraIcon";var $=e.i(613688);let J=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M214.67,68H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V68H41.33C25.16,68,12,80.56,12,96v80a12,12,0,0,0,12,12H52v28a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V188h28a12,12,0,0,0,12-12V96C244,80.56,230.84,68,214.67,68ZM76,52H180V68H76ZM180,204H76V172H180Zm40-40H204v-4a12,12,0,0,0-12-12H64a12,12,0,0,0-12,12v4H36V96c0-2.17,2.44-4,5.33-4H214.67c2.89,0,5.33,1.83,5.33,4Zm-16-44a16,16,0,1,1-16-16A16,16,0,0,1,204,120Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M232,96v80H192V152H64v24H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96Z",opacity:"0.2"}),O.createElement("path",{d:"M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M240,96v80a8,8,0,0,1-8,8H200v32a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V184H24a8,8,0,0,1-8-8V96c0-13.23,11.36-24,25.33-24H56V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V72h14.67C228.64,72,240,82.77,240,96ZM72,72H184V48H72Zm112,88H72v48H184Zm16-44a12,12,0,1,0-12,12A12,12,0,0,0,200,116Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M214.67,74H198V40a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V74H41.33C28.47,74,18,83.87,18,96v80a6,6,0,0,0,6,6H58v34a6,6,0,0,0,6,6H192a6,6,0,0,0,6-6V182h34a6,6,0,0,0,6-6V96C238,83.87,227.53,74,214.67,74ZM70,46H186V74H70ZM186,210H70V158H186Zm40-40H198V152a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6v18H30V96c0-5.51,5.08-10,11.33-10H214.67C220.92,86,226,90.49,226,96Zm-28-54a10,10,0,1,1-10-10A10,10,0,0,1,198,116Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M214.67,76H196V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V76H41.33C29.57,76,20,85,20,96v80a4,4,0,0,0,4,4H60v36a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4V180h36a4,4,0,0,0,4-4V96C236,85,226.43,76,214.67,76ZM68,44H188V76H68ZM188,212H68V156H188Zm40-40H196V152a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4v20H28V96c0-6.62,6-12,13.33-12H214.67C222,84,228,89.38,228,96Zm-32-56a8,8,0,1,1-8-8A8,8,0,0,1,196,116Z"}))]]),G=O.forwardRef((e,o)=>O.createElement(K.default,{ref:o,...e,weights:J}));G.displayName="PrinterIcon";let Q={type:"code",component:function(){return(0,o.jsxs)(M,{variant:"filled",defaultValue:"photos",order:3,mih:200,children:[(0,o.jsxs)(M.Item,{value:"photos",children:[(0,o.jsx)(M.Control,{icon:(0,o.jsx)($.ImageIcon,{size:22,color:"var(--mantine-color-dimmed)"}),children:"Recent photos"}),(0,o.jsx)(M.Panel,{children:"Content"})]}),(0,o.jsxs)(M.Item,{value:"print",children:[(0,o.jsx)(M.Control,{icon:(0,o.jsx)(G,{size:22,color:"var(--mantine-color-dimmed)"}),children:"Print photos"}),(0,o.jsx)(M.Panel,{children:"Content"})]}),(0,o.jsxs)(M.Item,{value:"camera",children:[(0,o.jsx)(M.Control,{icon:(0,o.jsx)(X,{size:22,color:"var(--mantine-color-dimmed)"}),children:"CameraIcon settings"}),(0,o.jsx)(M.Panel,{children:"Content"})]})]})},code:`
import { ImageIcon, PrinterIcon, CameraIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" defaultValue="photos" order={3}>
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<ImageIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<PrinterIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<CameraIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          CameraIcon settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,maxWidth:400,centered:!0,defaultExpanded:!1};var Y=e.i(89495),ee=e.i(658109),eo=e.i(330573);function en(e){return(0,o.jsxs)(eo.Center,{children:[(0,o.jsx)(M.Control,{...e}),(0,o.jsx)(ee.ActionIcon,{size:"lg",variant:"subtle",color:"gray","aria-label":"More options",children:(0,o.jsx)(Y.DotsThreeIcon,{size:20})})]})}let et={type:"code",component:function(){return(0,o.jsxs)(M,{chevronPosition:"left",order:3,children:[(0,o.jsxs)(M.Item,{value:"item-1",children:[(0,o.jsx)(en,{children:"Control 1"}),(0,o.jsx)(M.Panel,{children:"Panel 1"})]}),(0,o.jsxs)(M.Item,{value:"item-2",children:[(0,o.jsx)(en,{children:"Control 2"}),(0,o.jsx)(M.Panel,{children:"Panel 2"})]}),(0,o.jsxs)(M.Item,{value:"item-3",children:[(0,o.jsx)(en,{children:"Control 3"}),(0,o.jsx)(M.Panel,{children:"Panel 3"})]})]})},code:`
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { DotsThreeIcon } from '@phosphor-icons/react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray" aria-label="More options">
        <DotsThreeIcon size={20} />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" order={3}>
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
`,centered:!0,maxWidth:400};var ei={root:"m_333cc5d1",item:"m_3338c002",chevron:"m_67366eec"};let er={type:"code",component:function(){return(0,o.jsx)(M,{defaultValue:"Apples",classNames:ei,variant:"filled",order:3,children:N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value))})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" classNames={classes} variant="filled" order={3}>
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
`,language:"scss"},{fileName:"data.ts",code:F,language:"tsx"}],centered:!0,maxWidth:500},ea=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion order={3} ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,ec={type:"code",component:()=>(0,o.jsx)(_,{transitionDuration:0}),code:ea("transitionDuration={0}"),maxWidth:380,centered:!0},es={type:"code",component:()=>(0,o.jsx)(_,{transitionDuration:1e3}),code:ea("transitionDuration={1000}"),maxWidth:380,centered:!0},el={type:"code",component:function(){return(0,o.jsx)(_,{unstyled:!0})},code:`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion order={3} unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`};var ed=e.i(225190);let em=`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion value="Apples" order={3}{{props}}>
      {items}
    </Accordion>
  );
}
`,eh={type:"styles-api",data:ed.AccordionStylesApi,component:function(e){let n=N.map(e=>(0,o.jsxs)(M.Item,{value:e.value,children:[(0,o.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,o.jsx)(M.Panel,{children:e.description})]},e.value));return(0,o.jsx)(M,{value:"Apples",order:3,...e,children:n})},centered:!0,maxWidth:"100%",code:em};var eu=(0,t.__exportAll)({chevron:()=>U,configurator:()=>L,customTransitions:()=>es,customize:()=>er,disableTransitions:()=>ec,disabled:()=>R,icons:()=>Q,label:()=>z,sideControls:()=>et,stylesApi:()=>eh,unstyled:()=>el});e.i(603441);var ep=e.i(62558);e.i(457450);var eA=e.i(418026);let ev=(0,ep.Layout)(eA.MDX_DATA.Accordion);function ef(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:i,KeyboardEventsTable:r,StylesApiSelectors:a}=t;return i||ex("Demo",!0),r||ex("KeyboardEventsTable",!0),a||ex("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"Accordion allows users to expand and collapse sections of content.\nIt helps manage large amounts of information in a limited space\nby showing only section headers initially and revealing content upon interaction."}),"\n",(0,o.jsx)(t.p,{children:"Accordion is commonly used for:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"FAQ sections: displaying questions as headers with answers revealed when clicked"}),"\n",(0,o.jsx)(t.li,{children:"Forms: organizing long forms into sections, for example, personal info, shipping, and payment"}),"\n",(0,o.jsx)(t.li,{children:"Menus: nested navigation in sidebars or mobile views"}),"\n"]}),"\n",(0,o.jsx)(i,{data:eu.configurator}),"\n",(0,o.jsx)(t.h2,{id:"order-prop",children:"order prop"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"order"})," prop (used in all demos on this page) sets the heading level for the ",(0,o.jsx)(t.code,{children:"Accordion.Control"})," root element.\nAccording to ",(0,o.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"}),",\nit is required to use ",(0,o.jsx)(t.code,{children:"h2"}),"-",(0,o.jsx)(t.code,{children:"h6"})," heading levels to fit correctly within the outline of the page."]}),"\n",(0,o.jsxs)(t.p,{children:["All examples on this page use ",(0,o.jsx)(t.code,{children:"order={3}"}),", which means that all ",(0,o.jsx)(t.code,{children:"button"})," elements of\n",(0,o.jsx)(t.code,{children:"Accordion.Control"})," are wrapped with an ",(0,o.jsx)(t.code,{children:"h3"})," tag (",(0,o.jsx)(t.code,{children:"h2"})," tags are used for the documentation sections)."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"order"})," prop is not enforced by the library but is required if your application\nmust meet accessibility standards."]}),"\n",(0,o.jsx)(t.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"chevron"})," prop to change the chevron icon. When ",(0,o.jsx)(t.code,{children:"chevron"})," is set,\nthe ",(0,o.jsx)(t.code,{children:"chevronIconSize"})," prop is ignored. To remove the chevron icon, use ",(0,o.jsx)(t.code,{children:"chevron={null}"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To customize chevron styles, use ",(0,o.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"})," with the\n",(0,o.jsx)(t.a,{href:"/styles/data-attributes/",children:"data-rotate"})," attribute. This attribute is set when the item\nis opened if the ",(0,o.jsx)(t.code,{children:"disableChevronRotation"})," prop is not set."]}),"\n",(0,o.jsx)(t.p,{children:"Example of a custom chevron icon with rotation styles:"}),"\n",(0,o.jsx)(i,{data:eu.chevron}),"\n",(0,o.jsx)(t.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,o.jsxs)(t.p,{children:["You can use any React node as a label for ",(0,o.jsx)(t.code,{children:"Accordion.Control"})," component.\nWhen you use nested elements in ",(0,o.jsx)(t.code,{children:"Accordion.Control"}),", it is recommended to\nset ",(0,o.jsx)(t.code,{children:"aria-label"})," attribute to make the control accessible for screen readers."]}),"\n",(0,o.jsx)(i,{data:eu.label}),"\n",(0,o.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"icon"})," prop to display any element in the left section of the ",(0,o.jsx)(t.code,{children:"Accordion.Control"}),":"]}),"\n",(0,o.jsx)(i,{data:eu.icons}),"\n",(0,o.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,o.jsxs)(t.p,{children:["To change transition duration, set ",(0,o.jsx)(t.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,o.jsx)(i,{data:eu.customTransitions}),"\n",(0,o.jsxs)(t.p,{children:["To disable transitions, set ",(0,o.jsx)(t.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,o.jsx)(i,{data:eu.disableTransitions}),"\n",(0,o.jsx)(t.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.code,{children:"multiple={false}"}),", set ",(0,o.jsx)(t.code,{children:"defaultValue"})," as string:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">{/* item-1 */}</Accordion.Item>\n      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.code,{children:"multiple={true}"}),", set ",(0,o.jsx)(t.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items are opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">{/* item-1 */}</Accordion.Item>\n      <Accordion.Item value=\"item-2\">{/* item-2 */}</Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"control-opened-state",children:"Control opened state"}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.code,{children:"multiple={false}"}),", set ",(0,o.jsx)(t.code,{children:"value"})," as string:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">{/* item-1 */}</Accordion.Item>\n      <Accordion.Item value=\"item-2\">{/* item-2 */}</Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.code,{children:"multiple={true}"}),", set ",(0,o.jsx)(t.code,{children:"value"})," as an array of strings:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">{/* item-1 */}</Accordion.Item>\n      <Accordion.Item value=\"item-2\">{/* item-2 */}</Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,o.jsxs)(t.p,{children:["Putting a button or link inside ",(0,o.jsx)(t.code,{children:"Accordion.Control"})," is a common mistake when\nusing Accordion. The ",(0,o.jsx)(t.code,{children:"Accordion.Control"})," root element is a ",(0,o.jsx)(t.code,{children:"button"}),". Putting interactive\nelements inside other interactive elements is forbidden – you will receive a DOM\nvalidation error from React if you try to implement the following component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\n// ❌ Incorrect usage: do not do this\nfunction Demo() {\n  return (\n    <Accordion.Item value=\"item-1\">\n      <Accordion.Control>\n        <Group>\n          <span>Control 1</span>\n          <button>My action</button>\n        </Group>\n      </Accordion.Control>\n      <Accordion.Panel>Panel 1</Accordion.Panel>\n    </Accordion.Item>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Instead of putting interactive elements inside the ",(0,o.jsx)(t.code,{children:"Accordion.Control"}),", render them\nnext to it. For example, you can add an ",(0,o.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,o.jsx)(t.a,{href:"/core/menu/",children:"Menu"}),"\nto the right side of the original control. If you need to display an interactive element\nover the ",(0,o.jsx)(t.code,{children:"Accordion.Control"}),", use ",(0,o.jsx)(t.code,{children:"position: absolute"})," instead."]}),"\n",(0,o.jsx)(i,{data:eu.sideControls}),"\n",(0,o.jsx)(t.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,o.jsxs)(t.p,{children:["Set the ",(0,o.jsx)(t.code,{children:"disabled"})," prop on the ",(0,o.jsx)(t.code,{children:"Accordion.Control"})," component to disable it.\nWhen you disable items, users cannot activate them with the mouse or keyboard,\nand arrow key navigation will skip them:"]}),"\n",(0,o.jsx)(i,{data:eu.disabled}),"\n",(0,o.jsx)(t.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,o.jsxs)(t.p,{children:["Set the ",(0,o.jsx)(t.code,{children:"unstyled"})," prop on the Accordion component to remove all non-essential\nlibrary styles. Use the ",(0,o.jsx)(t.code,{children:"unstyled"})," prop to style the component with the\n",(0,o.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,o.jsx)(i,{data:eu.unstyled}),"\n",(0,o.jsx)(a,{component:"Accordion"}),"\n",(0,o.jsx)(i,{data:eu.stylesApi}),"\n",(0,o.jsxs)(t.p,{children:["Example of using ",(0,o.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,o.jsx)(i,{data:eu.customize}),"\n",(0,o.jsx)(t.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"AccordionProps"})," type exported from ",(0,o.jsx)(t.code,{children:"@mantine/core"})," is a generic that accepts a boolean type\ndescribing the ",(0,o.jsx)(t.code,{children:"multiple"})," state:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["The Accordion component implements the ",(0,o.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",children:"WAI-ARIA accessibility pattern"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,o.jsx)(r,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}function ex(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,o.jsx)(ev,{...e,children:(0,o.jsx)(ef,{...e})})}],511152)},897368,(e,o,n)=>{let t="/core/accordion";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(511152)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})}]);
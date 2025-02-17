"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{896:(e,n,o)=>{o.d(n,{A:()=>l,P:()=>m});var i=o(31085),t=o(56051),r=o(86658),a=o(93065),s=o(88139);let c=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}];function d({label:e,image:n,description:o}){return(0,i.jsxs)(t.Y,{wrap:"nowrap",children:[(0,i.jsx)(r.e,{src:n,radius:"xl",size:"lg"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.E,{children:e}),(0,i.jsx)(a.E,{size:"sm",c:"dimmed",fw:400,children:o})]})]})}function l(e){let n=c.map(e=>(0,i.jsxs)(s.n.Item,{value:e.id,children:[(0,i.jsx)(s.n.Control,{children:(0,i.jsx)(d,{...e})}),(0,i.jsx)(s.n.Panel,{children:(0,i.jsx)(a.E,{size:"sm",children:e.content})})]},e.label));return(0,i.jsx)(s.n,{chevronPosition:"right",variant:"contained",...e,children:n})}let m={type:"code",code:`
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
`,component:function(){return(0,i.jsx)(l,{})},maxWidth:540,centered:!0}},88139:(e,n,o)=>{o.d(n,{n:()=>z});var i=o(31085),t=o(97567),r=o(82307),a=o(39735);o(14041);var s=o(58212),c=o(33450),d=o(7098),l=o(29686),m=o(69564),h=o(34056),u=o(6754),p=o(59852);let[g,f]=(0,p.F)("Accordion component was not found in the tree");var v=o(76076),b=o(73668),y=o(33970);let[x,A]=(0,p.F)("Accordion.Item component was not found in the tree");var w={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};let S={},j=(0,u.P9)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,chevron:c,icon:d,onClick:m,onKeyDown:u,children:p,disabled:g,mod:v,...x}=(0,l.Y)("AccordionControl",S,e),{value:w}=A(),j=f(),C=j.isItemActive(w),I="number"==typeof j.order,P=`h${j.order}`,M=(0,i.jsxs)(y.N,{...x,...j.getStyles("control",{className:t,classNames:o,style:r,styles:a,variant:j.variant}),unstyled:j.unstyled,mod:["accordion-control",{active:C,"chevron-position":j.chevronPosition,disabled:g},v],ref:n,onClick:e=>{m?.(e),j.onChange(w)},type:"button",disabled:g,"aria-expanded":C,"aria-controls":j.getRegionId(w),id:j.getControlId(w),onKeyDown:(0,b.Y)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:j.loop,orientation:"vertical",onKeyDown:u}),children:[(0,i.jsx)(h.a,{component:"span",mod:{rotate:!j.disableChevronRotation&&C,position:j.chevronPosition},...j.getStyles("chevron",{classNames:o,styles:a}),children:c||j.chevron}),(0,i.jsx)("span",{...j.getStyles("label",{classNames:o,styles:a}),children:p}),d&&(0,i.jsx)(h.a,{component:"span",mod:{"chevron-position":j.chevronPosition},...j.getStyles("icon",{classNames:o,styles:a}),children:d})]});return I?(0,i.jsx)(P,{...j.getStyles("itemTitle",{classNames:o,styles:a}),children:M}):M});j.displayName="@mantine/core/AccordionControl",j.classes=w;let C={},I=(0,u.P9)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,value:c,mod:d,...m}=(0,l.Y)("AccordionItem",C,e),u=f();return(0,i.jsx)(x,{value:{value:c},children:(0,i.jsx)(h.a,{ref:n,mod:[{active:u.isItemActive(c)},d],...u.getStyles("item",{className:t,classNames:o,styles:a,style:r,variant:u.variant}),...m})})});I.displayName="@mantine/core/AccordionItem",I.classes=w;var P=o(60333);let M={},_=(0,u.P9)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,children:c,...d}=(0,l.Y)("AccordionPanel",M,e),{value:m}=A(),h=f();return(0,i.jsx)(P.S,{ref:n,...h.getStyles("panel",{className:t,classNames:o,style:r,styles:a}),...d,in:h.isItemActive(m),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(m),"aria-labelledby":h.getControlId(m),children:(0,i.jsx)("div",{...h.getStyles("content",{classNames:o,styles:a}),children:c})})});_.displayName="@mantine/core/AccordionPanel",_.classes=w;let B={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:(0,i.jsx)(v.U,{})},T=(0,d.V)((e,{transitionDuration:n,chevronSize:o,radius:i})=>({root:{"--accordion-transition-duration":void 0===n?void 0:`${n}ms`,"--accordion-chevron-size":void 0===o?void 0:(0,a.D)(o),"--accordion-radius":void 0===i?void 0:(0,c.nJ)(i)}}));function z(e){let n=(0,l.Y)("Accordion",B,e),{classNames:o,className:a,style:c,styles:d,unstyled:u,vars:p,children:f,multiple:v,value:b,defaultValue:y,onChange:x,id:A,loop:S,transitionDuration:j,disableChevronRotation:C,chevronPosition:I,chevronSize:P,order:M,chevron:_,variant:z,radius:k,...E}=n,F=(0,t.B)(A),[H,R]=(0,r.Z)({value:b,defaultValue:y,finalValue:v?[]:null,onChange:x}),$=(0,m.I)({name:"Accordion",classes:w,props:n,className:a,style:c,classNames:o,styles:d,unstyled:u,vars:p,varsResolver:T});return(0,i.jsx)(g,{value:{isItemActive:e=>Array.isArray(H)?H.includes(e):e===H,onChange:e=>{R(Array.isArray(H)?H.includes(e)?H.filter(n=>n!==e):[...H,e]:e===H?null:e)},getControlId:(0,s.r)(`${F}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,s.r)(`${F}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:j,disableChevronRotation:C,chevronPosition:I,order:M,chevron:_,loop:S,getStyles:$,variant:z,unstyled:u},children:(0,i.jsx)(h.a,{...$("root"),id:F,...E,variant:z,"data-accordion":!0,children:f})})}z.extend=e=>e,z.withProps=(0,u.LE)(z),z.classes=w,z.displayName="@mantine/core/Accordion",z.Item=I,z.Panel=_,z.Control=j,z.Chevron=v.U},60333:(e,n,o)=>{o.d(n,{S:()=>v});var i=o(31085),t=o(56447),r=o(14041),a=o(92408),s=o(29686),c=o(74022),d=o(34056),l=o(6754),m=o(43144),h=o(68323),u=o(34321);function p(e){return e?.current?e.current.scrollHeight:"auto"}let g="undefined"!=typeof window&&window.requestAnimationFrame,f={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},v=(0,l.P9)((e,n)=>{let{children:o,in:l,transitionDuration:v,transitionTimingFunction:b,style:y,onTransitionEnd:x,animateOpacity:A,...w}=(0,s.Y)("Collapse",f,e),S=(0,a.xd)(),j=(0,t.I)(),C=S.respectReducedMotion&&j?0:v,I=function({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:o=()=>{},opened:i}){let t=(0,r.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[s,c]=(0,r.useState)(i?{}:a),d=e=>{(0,m.flushSync)(()=>c(e))},l=e=>{d(n=>({...n,...e}))};function f(o){let i=e||function(e){if(!e||"string"==typeof e)return 0;let n=e/36;return Math.round((4+15*n**.25+n/5)*10)}(o);return{transition:`height ${i}ms ${n}, opacity ${i}ms ${n}`}}(0,h.C)(()=>{"function"==typeof g&&(i?g(()=>{l({willChange:"height",display:"block",overflow:"hidden"}),g(()=>{let e=p(t);l({...f(e),height:e})})}):g(()=>{let e=p(t);l({...f(e),willChange:"height",height:e}),g(()=>l({height:0,overflow:"hidden"}))}))},[i]);let v=e=>{if(e.target===t.current&&"height"===e.propertyName){if(i){let e=p(t);e===s.height?d({}):l({height:e}),o()}else 0===s.height&&(d(a),o())}};return function({style:e={},refKey:n="ref",...o}={}){let r=o[n];return{"aria-hidden":!i,...o,[n]:(0,u.Px)(t,r),onTransitionEnd:v,style:{boxSizing:"border-box",...e,...s}}}}({opened:l,transitionDuration:C,transitionTimingFunction:b,onTransitionEnd:x});return 0===C?l?(0,i.jsx)(d.a,{...w,children:o}):null:(0,i.jsx)(d.a,{...I({style:{opacity:l||!A?1:0,transition:A?`opacity ${C}ms ${b}`:"none",...(0,c.X)(y,S)},ref:n,...w}),children:o})});v.displayName="@mantine/core/Collapse"}}]);
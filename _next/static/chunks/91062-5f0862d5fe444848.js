"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91062],{91062:function(e,n,o){o.d(n,{P:function(){return m},t:function(){return l}});var i=o(52322),t=o(93010),r=o(82067),a=o(8582),s=o(38820);let c=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}];function d({label:e,image:n,description:o}){return(0,i.jsxs)(t.Z,{wrap:"nowrap",children:[(0,i.jsx)(r.q,{src:n,radius:"xl",size:"lg"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.x,{children:e}),(0,i.jsx)(a.x,{size:"sm",c:"dimmed",fw:400,children:o})]})]})}function l(e){let n=c.map(e=>(0,i.jsxs)(s.U.Item,{value:e.id,children:[(0,i.jsx)(s.U.Control,{children:(0,i.jsx)(d,{...e})}),(0,i.jsx)(s.U.Panel,{children:(0,i.jsx)(a.x,{size:"sm",children:e.content})})]},e.label));return(0,i.jsx)(s.U,{chevronPosition:"right",variant:"contained",...e,children:n})}let m={type:"code",code:`
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
`,component:function(){return(0,i.jsx)(l,{})},maxWidth:540,centered:!0}},38820:function(e,n,o){o.d(n,{U:function(){return z}});var i=o(52322),t=o(66178),r=o(9341),a=o(58898);o(2784);var s=o(52146),c=o(91482),d=o(11200),l=o(38483),m=o(46690),h=o(28559),u=o(82027),p=o(89106);let[f,g]=(0,p.R)("Accordion component was not found in the tree");var v=o(46752),b=o(38288),x=o(63409);let[y,w]=(0,p.R)("Accordion.Item component was not found in the tree");var A={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};let j={},C=(0,u.d5)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,chevron:c,icon:d,onClick:m,onKeyDown:u,children:p,disabled:f,mod:v,...y}=(0,l.w)("AccordionControl",j,e),{value:A}=w(),C=g(),S=C.isItemActive(A),M="number"==typeof C.order,I=`h${C.order}`,_=(0,i.jsxs)(x.k,{...y,...C.getStyles("control",{className:t,classNames:o,style:r,styles:a,variant:C.variant}),unstyled:C.unstyled,mod:["accordion-control",{active:S,"chevron-position":C.chevronPosition,disabled:f},v],ref:n,onClick:e=>{m?.(e),C.onChange(A)},type:"button",disabled:f,"aria-expanded":S,"aria-controls":C.getRegionId(A),id:C.getControlId(A),onKeyDown:(0,b.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:C.loop,orientation:"vertical",onKeyDown:u}),children:[(0,i.jsx)(h.x,{component:"span",mod:{rotate:!C.disableChevronRotation&&S,position:C.chevronPosition},...C.getStyles("chevron",{classNames:o,styles:a}),children:c||C.chevron}),(0,i.jsx)("span",{...C.getStyles("label",{classNames:o,styles:a}),children:p}),d&&(0,i.jsx)(h.x,{component:"span",mod:{"chevron-position":C.chevronPosition},...C.getStyles("icon",{classNames:o,styles:a}),children:d})]});return M?(0,i.jsx)(I,{...C.getStyles("itemTitle",{classNames:o,styles:a}),children:_}):_});C.displayName="@mantine/core/AccordionControl",C.classes=A;let S={},M=(0,u.d5)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,value:c,mod:d,...m}=(0,l.w)("AccordionItem",S,e),u=g();return(0,i.jsx)(y,{value:{value:c},children:(0,i.jsx)(h.x,{ref:n,mod:[{active:u.isItemActive(c)},d],...u.getStyles("item",{className:t,classNames:o,styles:a,style:r,variant:u.variant}),...m})})});M.displayName="@mantine/core/AccordionItem",M.classes=A;var I=o(15271);let _={},P=(0,u.d5)((e,n)=>{let{classNames:o,className:t,style:r,styles:a,vars:s,children:c,...d}=(0,l.w)("AccordionPanel",_,e),{value:m}=w(),h=g();return(0,i.jsx)(I.U,{ref:n,...h.getStyles("panel",{className:t,classNames:o,style:r,styles:a}),...d,in:h.isItemActive(m),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(m),"aria-labelledby":h.getControlId(m),children:(0,i.jsx)("div",{...h.getStyles("content",{classNames:o,styles:a}),children:c})})});P.displayName="@mantine/core/AccordionPanel",P.classes=A;let T={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:(0,i.jsx)(v.Q,{})},k=(0,d.Z)((e,{transitionDuration:n,chevronSize:o,radius:i})=>({root:{"--accordion-transition-duration":void 0===n?void 0:`${n}ms`,"--accordion-chevron-size":void 0===o?void 0:(0,a.h)(o),"--accordion-radius":void 0===i?void 0:(0,c.H5)(i)}}));function z(e){let n=(0,l.w)("Accordion",T,e),{classNames:o,className:a,style:c,styles:d,unstyled:u,vars:p,children:g,multiple:v,value:b,defaultValue:x,onChange:y,id:w,loop:j,transitionDuration:C,disableChevronRotation:S,chevronPosition:M,chevronSize:I,order:_,chevron:P,variant:z,radius:B,...R}=n,H=(0,t.M)(w),[$,F]=(0,r.C)({value:b,defaultValue:x,finalValue:v?[]:null,onChange:y}),U=(0,m.y)({name:"Accordion",classes:A,props:n,className:a,style:c,classNames:o,styles:d,unstyled:u,vars:p,varsResolver:k});return(0,i.jsx)(f,{value:{isItemActive:e=>Array.isArray($)?$.includes(e):e===$,onChange:e=>{F(Array.isArray($)?$.includes(e)?$.filter(n=>n!==e):[...$,e]:e===$?null:e)},getControlId:(0,s.A)(`${H}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,s.A)(`${H}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:C,disableChevronRotation:S,chevronPosition:M,order:_,chevron:P,loop:j,getStyles:U,variant:z,unstyled:u},children:(0,i.jsx)(h.x,{...U("root"),id:H,...R,variant:z,"data-accordion":!0,children:g})})}z.extend=e=>e,z.withProps=(0,u.ug)(z),z.classes=A,z.displayName="@mantine/core/Accordion",z.Item=M,z.Panel=P,z.Control=C,z.Chevron=v.Q},15271:function(e,n,o){o.d(n,{U:function(){return v}});var i=o(52322),t=o(98045),r=o(2784),a=o(68755),s=o(38483),c=o(6178),d=o(28559),l=o(82027),m=o(28316),h=o(71978),u=o(70837);function p(e){return e?.current?e.current.scrollHeight:"auto"}let f="undefined"!=typeof window&&window.requestAnimationFrame,g={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},v=(0,l.d5)((e,n)=>{let{children:o,in:l,transitionDuration:v,transitionTimingFunction:b,style:x,onTransitionEnd:y,animateOpacity:w,...A}=(0,s.w)("Collapse",g,e),j=(0,a.rZ)(),C=(0,t.J)(),S=j.respectReducedMotion&&C?0:v,M=function({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:o=()=>{},opened:i}){let t=(0,r.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[s,c]=(0,r.useState)(i?{}:a),d=e=>{(0,m.flushSync)(()=>c(e))},l=e=>{d(n=>({...n,...e}))};function g(o){let i=e||function(e){if(!e||"string"==typeof e)return 0;let n=e/36;return Math.round((4+15*n**.25+n/5)*10)}(o);return{transition:`height ${i}ms ${n}, opacity ${i}ms ${n}`}}(0,h.l)(()=>{"function"==typeof f&&(i?f(()=>{l({willChange:"height",display:"block",overflow:"hidden"}),f(()=>{let e=p(t);l({...g(e),height:e})})}):f(()=>{let e=p(t);l({...g(e),willChange:"height",height:e}),f(()=>l({height:0,overflow:"hidden"}))}))},[i]);let v=e=>{if(e.target===t.current&&"height"===e.propertyName){if(i){let e=p(t);e===s.height?d({}):l({height:e}),o()}else 0===s.height&&(d(a),o())}};return function({style:e={},refKey:n="ref",...o}={}){let r=o[n];return{"aria-hidden":!i,...o,[n]:(0,u.lq)(t,r),onTransitionEnd:v,style:{boxSizing:"border-box",...e,...s}}}}({opened:l,transitionDuration:S,transitionTimingFunction:b,onTransitionEnd:y});return 0===S?l?(0,i.jsx)(d.x,{...A,children:o}):null:(0,i.jsx)(d.x,{...M({style:{opacity:l||!w?1:0,transition:w?`opacity ${S}ms ${b}`:"none",...(0,c.c)(x,j)},ref:n,...A}),children:o})});v.displayName="@mantine/core/Collapse"}}]);
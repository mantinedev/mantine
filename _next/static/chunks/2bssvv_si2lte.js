(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var a in e)t(o,a,{get:e[a],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},724288,e=>{"use strict";var t=e.i(433512),n=e.i(481178),o=e.i(44091),a=e.i(391466),i=e.i(956449),r=e.i(232471),s={root:"m_9e117634"},m=e.i(191788),c=e.i(391398);let l=(0,n.createVarsResolver)((e,{radius:n,fit:o})=>({root:{"--image-radius":void 0===n?void 0:(0,t.getRadius)(n),"--image-object-fit":o}})),d=(0,i.polymorphicFactory)(e=>{let t=(0,o.useProps)("Image",null,e),{classNames:n,className:i,style:d,styles:h,unstyled:g,vars:p,onError:u,src:x,radius:j,fit:f,fallbackSrc:b,mod:I,attributes:y,...w}=t,[v,_]=(0,m.useState)(!x);(0,m.useEffect)(()=>_(!x),[x]);let D=(0,a.useStyles)({name:"Image",classes:s,props:t,className:i,style:d,classNames:n,styles:h,unstyled:g,attributes:y,vars:p,varsResolver:l});return v&&b?(0,c.jsx)(r.Box,{component:"img",src:b,...D("root"),onError:u,mod:["fallback",I],...w}):(0,c.jsx)(r.Box,{component:"img",...D("root"),src:x,onError:e=>{u?.(e),_(!0)},mod:I,...w})});d.classes=s,d.varsResolver=l,d.displayName="@mantine/core/Image",e.s(["Image",0,d],724288)},748207,e=>{"use strict";var t=e.i(648863),n=e.i(724288),o=e.i(391398);let a={type:"code",component:function(){return(0,o.jsx)(n.Image,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`},i={type:"code",component:function(){return(0,o.jsx)(n.Image,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
`},r={type:"code",component:function(){return(0,o.jsx)(n.Image,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
`,centered:!0},s={type:"code",component:function(){return(0,o.jsx)(n.Image,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`};var m=(0,t.__exportAll)({contain:()=>r,fallback:()=>s,height:()=>i,usage:()=>a});e.s(["ImageDemos",0,m],748207)},735941,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(748207);e.i(603441);var a=e.i(62558);e.i(457450);var i=e.i(418026);let r=(0,a.Layout)(i.MDX_DATA.Image);function s(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:i}=a;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Image"})," is a wrapper for ",(0,t.jsx)(a.code,{children:"img"})," with minimal styles. By default, the image\nwill take 100% of the parent width. The image size can be controlled with ",(0,t.jsx)(a.code,{children:"w"}),"\nand ",(0,t.jsx)(a.code,{children:"h"})," ",(0,t.jsx)(a.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,t.jsx)(i,{data:o.ImageDemos.usage}),"\n",(0,t.jsx)(a.h2,{id:"image-height",children:"Image height"}),"\n",(0,t.jsxs)(a.p,{children:["In most cases, you will need to set the image height to prevent layout jumps when\nthe image is loading. You can do so with the ",(0,t.jsx)(a.code,{children:"h"})," ",(0,t.jsx)(a.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,t.jsx)(i,{data:o.ImageDemos.height}),"\n",(0,t.jsx)(a.h2,{id:"image-fit",children:"Image fit"}),"\n",(0,t.jsxs)(a.p,{children:["By default the image has ",(0,t.jsx)(a.code,{children:"object-fit: cover"})," style - it will\nresize to cover the parent element. To change this behavior, set ",(0,t.jsx)(a.code,{children:'w="auto"'})," and ",(0,t.jsx)(a.code,{children:'fit="contain"'})," props."]}),"\n",(0,t.jsx)(i,{data:o.ImageDemos.contain}),"\n",(0,t.jsx)(a.h2,{id:"fallback-image",children:"Fallback image"}),"\n",(0,t.jsxs)(a.p,{children:["Set the ",(0,t.jsx)(a.code,{children:"fallbackSrc"})," prop to display a fallback image when the image fails to load:"]}),"\n",(0,t.jsx)(i,{data:o.ImageDemos.fallback}),"\n",(0,t.jsx)(a.h2,{id:"usage-with-nextjs-image",children:"Usage with Next.js Image"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Image"})," component is a ",(0,t.jsx)(a.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", its root element can be changed with the ",(0,t.jsx)(a.code,{children:"component"})," prop.\nYou can use it with ",(0,t.jsx)(a.code,{children:"next/image"})," and other similar components."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import NextImage from 'next/image';\nimport { Image } from '@mantine/core';\nimport myImage from './my-image.jpg';\n\nfunction Demo() {\n  return <Image component={NextImage} src={myImage} alt=\"My image\" />;\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})})}])},766379,(e,t,n)=>{let o="/core/image";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(735941)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
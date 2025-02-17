(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93063],{93371:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/image",function(){return t(78428)}])},78428:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var o=t(31085),a=t(71184),i=t(38621);let r={type:"code",component:function(){return(0,o.jsx)(i._,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`},s={type:"code",component:function(){return(0,o.jsx)(i._,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:`
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
`},c={type:"code",component:function(){return(0,o.jsx)(i._,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:`
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
`,centered:!0};var m=t(64564),d=t(85954),l=t(38215);let h=(0,d.P)(l.XZ.Image);function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," is a wrapper for ",(0,o.jsx)(n.code,{children:"img"})," with minimal styles. By default, the image\nwill take 100% of parent width. The image size can be controlled with ",(0,o.jsx)(n.code,{children:"w"}),"\nand ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:r}),"\n",(0,o.jsx)(n.h2,{id:"image-height",children:"Image height"}),"\n",(0,o.jsxs)(n.p,{children:["In most case, you will need to set image height to prevent layout jumps when\nimage is loading. You can do so with ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(n.h2,{id:"image-fit",children:"Image fit"}),"\n",(0,o.jsxs)(n.p,{children:["By default the image has ",(0,o.jsx)(n.code,{children:"object-fit: cover"})," style - it will\nresize to cover parent element. To change this behavior, set ",(0,o.jsx)(n.code,{children:'w="auto"'})," and ",(0,o.jsx)(n.code,{children:'fit="contain"'})," props."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"fallback-image",children:"Fallback image"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"fallbackSrc"})," prop to display fallback image when image fails to load:"]}),"\n",(0,o.jsx)(t,{data:m.N}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-nextjs-image",children:"Usage with Next.js Image"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," component is a ",(0,o.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", its root element can be changed with ",(0,o.jsx)(n.code,{children:"component"})," prop.\nYou can use it with ",(0,o.jsx)(n.code,{children:"next/image"})," and other similar components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import NextImage from 'next/image';\nimport { Image } from '@mantine/core';\nimport myImage from './my-image.jpg';\n\nfunction Demo() {\n  return <Image component={NextImage} src={myImage} alt=\"My image\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(g,{...e})})}},64564:(e,n,t)=>{"use strict";t.d(n,{N:()=>i});var o=t(31085),a=t(38621);let i={type:"code",component:function(){return(0,o.jsx)(a._,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
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
`}},38621:(e,n,t)=>{"use strict";t.d(n,{_:()=>p});var o=t(31085),a=t(14041),i=t(33450),r=t(7098),s=t(29686),c=t(69564),m=t(34056),d=t(2453),l={root:"m_9e117634"};let h={},g=(0,r.V)((e,{radius:n,fit:t})=>({root:{"--image-radius":void 0===n?void 0:(0,i.nJ)(n),"--image-object-fit":t}})),p=(0,d.v)((e,n)=>{let t=(0,s.Y)("Image",h,e),{classNames:i,className:r,style:d,styles:p,unstyled:u,vars:x,onError:f,src:j,radius:w,fit:b,fallbackSrc:y,mod:I,...v}=t,[_,k]=(0,a.useState)(!j);(0,a.useEffect)(()=>k(!j),[j]);let N=(0,c.I)({name:"Image",classes:l,props:t,className:r,style:d,classNames:i,styles:p,unstyled:u,vars:x,varsResolver:g});return _&&y?(0,o.jsx)(m.a,{component:"img",ref:n,src:y,...N("root"),onError:f,mod:["fallback",I],...v}):(0,o.jsx)(m.a,{component:"img",ref:n,...N("root"),src:j,onError:e=>{f?.(e),k(!0)},mod:I,...v})});p.classes=l,p.displayName="@mantine/core/Image"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(93371)),_N_E=e.O()}]);
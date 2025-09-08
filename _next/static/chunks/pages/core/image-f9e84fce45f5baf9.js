(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93063],{1798:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},4386:(e,t,a)=>{"use strict";a.d(t,{_:()=>g});var n=a(6029),s=a(55729),i=a(14163),o=a(33987),r=a(38919),d=a(15583),c=a(76320),l=a(82500),h={root:"m_9e117634"};let m=(0,o.V)((e,{radius:t,fit:a})=>({root:{"--image-radius":void 0===t?void 0:(0,i.nJ)(t),"--image-object-fit":a}})),g=(0,l.v)((e,t)=>{let a=(0,r.Y)("Image",null,e),{classNames:i,className:o,style:l,styles:g,unstyled:p,vars:u,onError:v,src:y,radius:x,fit:f,fallbackSrc:k,mod:j,attributes:M,...w}=a,[b,I]=(0,s.useState)(!y);(0,s.useEffect)(()=>I(!y),[y]);let A=(0,d.I)({name:"Image",classes:h,props:a,className:o,style:l,classNames:i,styles:g,unstyled:p,attributes:M,vars:u,varsResolver:m});return b&&k?(0,n.jsx)(c.a,{component:"img",ref:t,src:k,...A("root"),onError:v,mod:["fallback",j],...w}):(0,n.jsx)(c.a,{component:"img",ref:t,...A("root"),src:y,onError:e=>{v?.(e),I(!0)},mod:j,...w})});g.classes=h,g.displayName="@mantine/core/Image"},6620:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7619:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(6029),s=a(16285),i=a(4386);let o={type:"code",component:function(){return(0,n.jsx)(i._,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`},r={type:"code",component:function(){return(0,n.jsx)(i._,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:`
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
`},d={type:"code",component:function(){return(0,n.jsx)(i._,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:`
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
`,centered:!0};var c=a(94745),l=a(38547),h=a(5262);let m=(0,l.P)(h.XZ.Image);function g(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Image"})," is a wrapper for ",(0,n.jsx)(t.code,{children:"img"})," with minimal styles. By default, the image\nwill take 100% of parent width. The image size can be controlled with ",(0,n.jsx)(t.code,{children:"w"}),"\nand ",(0,n.jsx)(t.code,{children:"h"})," ",(0,n.jsx)(t.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,n.jsx)(a,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"image-height",children:"Image height"}),"\n",(0,n.jsxs)(t.p,{children:["In most case, you will need to set image height to prevent layout jumps when\nimage is loading. You can do so with ",(0,n.jsx)(t.code,{children:"h"})," ",(0,n.jsx)(t.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,n.jsx)(a,{data:r}),"\n",(0,n.jsx)(t.h2,{id:"image-fit",children:"Image fit"}),"\n",(0,n.jsxs)(t.p,{children:["By default the image has ",(0,n.jsx)(t.code,{children:"object-fit: cover"})," style - it will\nresize to cover parent element. To change this behavior, set ",(0,n.jsx)(t.code,{children:'w="auto"'})," and ",(0,n.jsx)(t.code,{children:'fit="contain"'})," props."]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"fallback-image",children:"Fallback image"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"fallbackSrc"})," prop to display fallback image when image fails to load:"]}),"\n",(0,n.jsx)(a,{data:c.N}),"\n",(0,n.jsx)(t.h2,{id:"usage-with-nextjs-image",children:"Usage with Next.js Image"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Image"})," component is a ",(0,n.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", its root element can be changed with ",(0,n.jsx)(t.code,{children:"component"})," prop.\nYou can use it with ",(0,n.jsx)(t.code,{children:"next/image"})," and other similar components."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import NextImage from 'next/image';\nimport { Image } from '@mantine/core';\nimport myImage from './my-image.jpg';\n\nfunction Demo() {\n  return <Image component={NextImage} src={myImage} alt=\"My image\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(g,{...e})})}},24583:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},52911:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/image",function(){return a(7619)}])},65433:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},94745:(e,t,a)=>{"use strict";a.d(t,{N:()=>i});var n=a(6029),s=a(4386);let i={type:"code",component:function(){return(0,n.jsx)(s._,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
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
`}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=52911)),_N_E=e.O()}]);
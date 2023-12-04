(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{81216:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/image",function(){return t(93062)}])},93062:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(24246),r=t(71670),a=t(3916),i=t(30289),c=t(27378),Image=t(58818);let s=`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`,m={type:"code",component:function(){return c.createElement(Image.E,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:s},d=`
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
`,l={type:"code",component:function(){return c.createElement(Image.E,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:d},h=`
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
`,u={type:"code",component:function(){return c.createElement(Image.E,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:h,centered:!0};var g=t(36159);let p=(0,a.A)(i.us.Image);function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," is a wrapper for ",(0,o.jsx)(n.code,{children:"img"})," with minimal styles. By default, the image\nwill take 100% of parent width. The image size can be controlled with ",(0,o.jsx)(n.code,{children:"w"}),"\nand ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"image-height",children:"Image height"}),"\n",(0,o.jsxs)(n.p,{children:["In most case, you will need to set image height to prevent layout jumps when\nimage is loading. You can do so with ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(n.h2,{id:"image-fit",children:"Image fit"}),"\n",(0,o.jsxs)(n.p,{children:["By default the image has ",(0,o.jsx)(n.code,{children:"object-fit: cover"})," style - it will\nresize to cover parent element. To change this behavior, set ",(0,o.jsx)(n.code,{children:'w="auto"'})," and ",(0,o.jsx)(n.code,{children:'fit="contain"'})," props."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"fallback-image",children:"Fallback image"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"fallbackSrc"})," prop to display fallback image when image fails to load:"]}),"\n",(0,o.jsx)(t,{data:g.t}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-nextjs-image",children:"Usage with Next.js Image"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," component is a ",(0,o.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", its root element can be changed with ",(0,o.jsx)(n.code,{children:"component"})," prop.\nYou can use it with ",(0,o.jsx)(n.code,{children:"next/image"})," and other similar components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import NextImage from 'next/image';\nimport { Image } from '@mantine/core';\nimport myImage from './my-image.jpg';\n\nfunction Demo() {\n  return <Image component={NextImage} src={myImage} alt=\"My image\" />;\n}\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(f,{...e})})}},36159:function(e,n,t){"use strict";t.d(n,{t:function(){return i}});var o=t(27378),r=t(58818);let a=`
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
`,i={type:"code",component:function(){return o.createElement(r.E,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:a}},58818:function(e,n,t){"use strict";t.d(n,{E:function(){return Image}});var o=t(27378),r=t(92082),a=t(83453),i=t(96739),c=t(6231),s=t(56589),m=t(50332),d={root:"m-9e117634"};let l={},h=(0,a.Z)((e,{radius:n,fit:t})=>({root:{"--image-radius":void 0===n?void 0:(0,r.H5)(n),"--image-object-fit":t}})),Image=(0,m.b)((e,n)=>{let t=(0,i.w)("Image",l,e),{classNames:r,className:a,style:m,styles:u,unstyled:g,vars:p,onError:f,src:x,radius:j,fit:w,fallbackSrc:b,...y}=t,[I,E]=(0,o.useState)(!x);(0,o.useEffect)(()=>E(!x),[x]);let v=(0,c.y)({name:"Image",classes:d,props:t,className:a,style:m,classNames:r,styles:u,unstyled:g,vars:p,varsResolver:h});return I&&b?o.createElement(s.x,{component:"img",src:b,...v("root"),onError:f,mod:"fallback",...y}):o.createElement(s.x,{component:"img",ref:n,...v("root"),src:x,onError:e=>{f?.(e),E(!0)},...y})});Image.classes=d,Image.displayName="@mantine/core/Image"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=81216)}),_N_E=e.O()}]);
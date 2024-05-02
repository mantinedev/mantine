(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80838],{61531:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/image",function(){return t(19417)}])},19417:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),i=t(45392),Image=t(43076);let r=`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`,a={type:"code",component:function(){return(0,o.jsx)(Image.E,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:r},s=`
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
`,c={type:"code",component:function(){return(0,o.jsx)(Image.E,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:s},m=`
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
`,d={type:"code",component:function(){return(0,o.jsx)(Image.E,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:m,centered:!0};var l=t(43597),h=t(79016),u=t(33638);let g=(0,h.A)(u.us.Image);function p(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," is a wrapper for ",(0,o.jsx)(n.code,{children:"img"})," with minimal styles. By default, the image\nwill take 100% of parent width. The image size can be controlled with ",(0,o.jsx)(n.code,{children:"w"}),"\nand ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"image-height",children:"Image height"}),"\n",(0,o.jsxs)(n.p,{children:["In most case, you will need to set image height to prevent layout jumps when\nimage is loading. You can do so with ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"image-fit",children:"Image fit"}),"\n",(0,o.jsxs)(n.p,{children:["By default the image has ",(0,o.jsx)(n.code,{children:"object-fit: cover"})," style - it will\nresize to cover parent element. To change this behavior, set ",(0,o.jsx)(n.code,{children:'w="auto"'})," and ",(0,o.jsx)(n.code,{children:'fit="contain"'})," props."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"fallback-image",children:"Fallback image"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"fallbackSrc"})," prop to display fallback image when image fails to load:"]}),"\n",(0,o.jsx)(t,{data:l.t}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-nextjs-image",children:"Usage with Next.js Image"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," component is a ",(0,o.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", its root element can be changed with ",(0,o.jsx)(n.code,{children:"component"})," prop.\nYou can use it with ",(0,o.jsx)(n.code,{children:"next/image"})," and other similar components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import NextImage from 'next/image';\nimport { Image } from '@mantine/core';\nimport myImage from './my-image.jpg';\n\nfunction Demo() {\n  return <Image component={NextImage} src={myImage} alt=\"My image\" />;\n}\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(g,{...e,children:(0,o.jsx)(p,{...e})})}},43597:function(e,n,t){"use strict";t.d(n,{t:function(){return a}});var o=t(52322),i=t(43076);let r=`
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
`,a={type:"code",component:function(){return(0,o.jsx)(i.E,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:r}},43076:function(e,n,t){"use strict";t.d(n,{E:function(){return Image}});var o=t(52322),i=t(2784),r=t(91482),a=t(11200),s=t(38483),c=t(46690),m=t(28559),d=t(33502),l={root:"m_9e117634"};let h={},u=(0,a.Z)((e,{radius:n,fit:t})=>({root:{"--image-radius":void 0===n?void 0:(0,r.H5)(n),"--image-object-fit":t}})),Image=(0,d.b)((e,n)=>{let t=(0,s.w)("Image",h,e),{classNames:r,className:a,style:d,styles:g,unstyled:p,vars:f,onError:x,src:j,radius:w,fit:b,fallbackSrc:y,mod:I,...v}=t,[E,k]=(0,i.useState)(!j);(0,i.useEffect)(()=>k(!j),[j]);let _=(0,c.y)({name:"Image",classes:l,props:t,className:a,style:d,classNames:r,styles:g,unstyled:p,vars:f,varsResolver:u});return E&&y?(0,o.jsx)(m.x,{component:"img",ref:n,src:y,..._("root"),onError:x,mod:["fallback",I],...v}):(0,o.jsx)(m.x,{component:"img",ref:n,..._("root"),src:j,onError:e=>{x?.(e),k(!0)},mod:I,...v})});Image.classes=l,Image.displayName="@mantine/core/Image"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=61531)}),_N_E=e.O()}]);
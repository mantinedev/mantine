(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let i={};for(var a in e)t(i,a,{get:e[a],enumerable:!0});return o||t(i,Symbol.toStringTag,{value:"Module"}),i}])},724288,e=>{"use strict";var t=e.i(433512),o=e.i(481178),i=e.i(44091),a=e.i(391466),r=e.i(956449),s=e.i(232471),n={root:"m_9e117634"},c=e.i(191788),m=e.i(391398);let l=(0,o.createVarsResolver)((e,{radius:o,fit:i})=>({root:{"--image-radius":void 0===o?void 0:(0,t.getRadius)(o),"--image-object-fit":i}})),d=(0,r.polymorphicFactory)(e=>{let t=(0,i.useProps)("Image",null,e),{classNames:o,className:r,style:d,styles:p,unstyled:u,vars:h,onError:f,src:x,radius:g,fit:v,fallbackSrc:b,mod:y,attributes:w,...j}=t,[A,R]=(0,c.useState)(!x);(0,c.useEffect)(()=>R(!x),[x]);let _=(0,a.useStyles)({name:"Image",classes:n,props:t,className:r,style:d,classNames:o,styles:p,unstyled:u,attributes:w,vars:h,varsResolver:l});return A&&b?(0,m.jsx)(s.Box,{component:"img",src:b,..._("root"),onError:f,mod:["fallback",y],...j}):(0,m.jsx)(s.Box,{component:"img",..._("root"),src:x,onError:e=>{f?.(e),R(!0)},mod:y,...j})});d.classes=n,d.varsResolver=l,d.displayName="@mantine/core/Image",e.s(["Image",0,d],724288)},207043,e=>{"use strict";var t=e.i(481178),o=e.i(44091),i=e.i(391466),a=e.i(275519),r=e.i(232471),s={root:"m_71ac47fc"},n=e.i(391398);let c=(0,t.createVarsResolver)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),m=(0,a.factory)(e=>{let t=(0,o.useProps)("AspectRatio",null,e),{classNames:a,className:m,style:l,styles:d,unstyled:p,vars:u,ratio:h,attributes:f,...x}=t;return(0,n.jsx)(r.Box,{...(0,i.useStyles)({name:"AspectRatio",classes:s,props:t,className:m,style:l,classNames:a,styles:d,unstyled:p,attributes:f,vars:u,varsResolver:c})("root"),...x})});m.classes=s,m.varsResolver=c,m.displayName="@mantine/core/AspectRatio",e.s(["AspectRatio",0,m],207043)},654256,e=>{"use strict";var t=e.i(391398),o=e.i(38856),i=e.i(648863),a=e.i(207043);let r={type:"code",component:function(){return(0,t.jsx)(a.AspectRatio,{ratio:1.5,maw:300,mx:"auto",children:(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",alt:"Panda"})})},code:`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`},s={type:"code",component:function(){return(0,t.jsx)(a.AspectRatio,{ratio:16/9,children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",title:"Google map",style:{border:0}})})},code:`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
`},n={type:"code",component:function(){return(0,t.jsx)(a.AspectRatio,{ratio:16/9,children:(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/mzJ4vCjSt28",title:"YouTube video player",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})},code:`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`};var c=e.i(724288);let m={type:"code",component:function(){return(0,t.jsx)("div",{style:{display:"flex"},children:(0,t.jsx)(a.AspectRatio,{ratio:1,flex:"0 0 100px",children:(0,t.jsx)(c.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",alt:"Avatar"})})})},code:`
import { AspectRatio, Image } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} flex="0 0 100px">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
`};var l=(0,i.__exportAll)({flex:()=>m,image:()=>r,map:()=>s,video:()=>n});e.i(603441);var d=e.i(62558);e.i(457450);var p=e.i(418026);let u=(0,d.Layout)(p.MDX_DATA.AspectRatio);function h(e){let i={code:"code",h2:"h2",p:"p",...(0,o.useMDXComponents)(),...e.components},{Demo:a}=i;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"AspectRatio"})," maintains a consistent width/height ratio.\nIt can be used to display images, maps, videos, and other media."]}),"\n",(0,t.jsx)(a,{data:l.image}),"\n",(0,t.jsx)(i.h2,{id:"map-embed",children:"Map embed"}),"\n",(0,t.jsx)(a,{data:l.map}),"\n",(0,t.jsx)(i.h2,{id:"video-embed",children:"Video embed"}),"\n",(0,t.jsx)(a,{data:l.video}),"\n",(0,t.jsx)(i.h2,{id:"inside-flex-container",children:"Inside flex container"}),"\n",(0,t.jsxs)(i.p,{children:["By default, ",(0,t.jsx)(i.code,{children:"AspectRatio"})," does not have a fixed width and height – it will take as much space as possible\nin a regular container. However, when used inside a flex container, it will not stretch to fill the available space.\nTo make it work inside a flexbox container, you need to set the ",(0,t.jsx)(i.code,{children:"width"})," or ",(0,t.jsx)(i.code,{children:"flex"})," property."]}),"\n",(0,t.jsx)(a,{data:l.flex})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(h,{...e})})}],654256)},978644,(e,t,o)=>{let i="/core/aspect-ratio";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(654256)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
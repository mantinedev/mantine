(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4051],{38748:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/aspect-ratio",function(){return o(23915)}])},23915:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(24246),a=o(71670),r=o(3916),i=o(30289),c=o(27378),s=o(1146);let m=`
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
`,d={type:"code",component:function(){return c.createElement(s.o,{ratio:1.5,maw:300,mx:"auto"},c.createElement("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",alt:"Panda"}))},code:m},l=`
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
`,p={type:"code",component:function(){return c.createElement(s.o,{ratio:16/9},c.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",title:"Google map",style:{border:0}}))},code:l},u=`
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
`,f={type:"code",component:function(){return c.createElement(s.o,{ratio:16/9},c.createElement("iframe",{src:"https://www.youtube.com/embed/mzJ4vCjSt28",title:"YouTube video player",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},code:u};var h=o(71078),Image=o(58818);let g=`
import { AspectRatio, Image, rem } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
`,b={type:"code",component:function(){return c.createElement("div",{style:{display:"flex"}},c.createElement(s.o,{ratio:1,style:{flex:`0 0 ${(0,h.h)(100)}`}},c.createElement(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",alt:"Avatar"})))},code:g},w=(0,r.A)(i.us.AspectRatio);function x(e){let t={code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AspectRatio"})," allows maintaining a consistent width/height ratio.\nIt can be used to display images, maps, videos and other media."]}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"map-embed",children:"Map embed"}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"video-embed",children:"Video embed"}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"inside-flex-container",children:"Inside flex container"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"AspectRatio"})," does not have fixed width and height, it will take as much space as possible\nin a regular container. To make it work inside flex container, you need to set ",(0,n.jsx)(t.code,{children:"width"})," or ",(0,n.jsx)(t.code,{children:"flex"})," property."]}),"\n",(0,n.jsx)(o,{data:b})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,{...e,children:(0,n.jsx)(x,{...e})})}},1146:function(e,t,o){"use strict";o.d(t,{o:function(){return p}});var n=o(27378),a=o(83453),r=o(96739),i=o(6231),c=o(56589),s=o(20410),m={root:"m-71ac47fc"};let d={},l=(0,a.Z)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),p=(0,s.d)((e,t)=>{let o=(0,r.w)("AspectRatio",d,e),{classNames:a,className:s,style:p,styles:u,unstyled:f,vars:h,ratio:g,...b}=o,w=(0,i.y)({name:"AspectRatio",classes:m,props:o,className:s,style:p,classNames:a,styles:u,unstyled:f,vars:h,varsResolver:l});return n.createElement(c.x,{ref:t,...w("root"),...b})});p.classes=m,p.displayName="@mantine/core/AspectRatio"},58818:function(e,t,o){"use strict";o.d(t,{E:function(){return Image}});var n=o(27378),a=o(92082),r=o(83453),i=o(96739),c=o(6231),s=o(56589),m=o(50332),d={root:"m-9e117634"};let l={},p=(0,r.Z)((e,{radius:t,fit:o})=>({root:{"--image-radius":void 0===t?void 0:(0,a.H5)(t),"--image-object-fit":o}})),Image=(0,m.b)((e,t)=>{let o=(0,i.w)("Image",l,e),{classNames:a,className:r,style:m,styles:u,unstyled:f,vars:h,onError:g,src:b,radius:w,fit:x,fallbackSrc:y,...v}=o,[A,E]=(0,n.useState)(!b);(0,n.useEffect)(()=>E(!b),[b]);let j=(0,c.y)({name:"Image",classes:d,props:o,className:r,style:m,classNames:a,styles:u,unstyled:f,vars:h,varsResolver:p});return A&&y?n.createElement(s.x,{component:"img",src:y,...j("root"),onError:g,mod:"fallback",...v}):n.createElement(s.x,{component:"img",ref:t,...j("root"),src:b,onError:e=>{g?.(e),E(!0)},...v})});Image.classes=d,Image.displayName="@mantine/core/Image"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=38748)}),_N_E=e.O()}]);
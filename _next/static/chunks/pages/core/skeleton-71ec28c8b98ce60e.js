(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64757],{97761:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/skeleton",function(){return i(2230)}])},2230:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var n=i(31085),o=i(71184),l=i(98663);let r={type:"configurator",component:function(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)(l.E,{height:50,circle:!0,mb:"xl",...e}),(0,n.jsx)(l.E,{height:8,radius:"xl",...e}),(0,n.jsx)(l.E,{height:8,mt:6,radius:"xl",...e}),(0,n.jsx)(l.E,{height:8,mt:6,width:"70%",radius:"xl",...e})]})},code:e=>`
  import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        <Skeleton${e.animate?"":" animate={false}"} height={50} circle mb="xl" />
        <Skeleton${e.animate?"":" animate={false}"} height={8} radius="xl" />
        <Skeleton${e.animate?"":" animate={false}"} height={8} mt={6} radius="xl" />
        <Skeleton${e.animate?"":" animate={false}"} height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  }
  `,controls:[{prop:"animate",type:"boolean",initialValue:!0,libraryValue:"__"}]};var a=i(14041),s=i(93065),d=i(56051),c=i(52022);let u={type:"code",component:function(){let[e,t]=(0,a.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.E,{visible:e,children:[(0,n.jsx)(s.E,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"}),(0,n.jsx)(s.E,{children:"Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque."})]}),(0,n.jsx)(d.Y,{justify:"center",mt:"xs",children:(0,n.jsx)(c.$,{onClick:()=>t(e=>!e),children:"Toggle Skeleton"})})]})},code:`
import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
`};var h=i(85954),m=i(38215);let p=(0,h.P)(m.XZ.Skeleton);function x(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"Skeleton"})," to create a placeholder for loading content. ",(0,n.jsx)(t.code,{children:"Skeleton"})," support the following props:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"height"})," – height – any valid CSS value"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"width"})," – width - any valid CSS value"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"radius"})," – key of ",(0,n.jsx)(t.code,{children:"theme.radius"})," or any valid CSS value to set border-radius"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"circle"})," – if true width, height and border-radius will equal to value specified in ",(0,n.jsx)(t.code,{children:"height"})," prop"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"animate"})," – true by default, controls animation"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:r}),"\n",(0,n.jsx)(t.h2,{id:"with-content",children:"With content"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to indicate the loading state of content that is already on page, wrap it with Skeleton\nand control loading overlay visibility with ",(0,n.jsx)(t.code,{children:"visible"})," prop:"]}),"\n",(0,n.jsx)(i,{data:u})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(x,{...e})})}},98663:(e,t,i)=>{"use strict";i.d(t,{E:()=>p});var n=i(31085),o=i(39735);i(14041);var l=i(33450),r=i(7098),a=i(29686),s=i(69564),d=i(34056),c=i(6754),u={root:"m_18320242","skeleton-fade":"m_299c329c"};let h={visible:!0,animate:!0},m=(0,r.V)((e,{width:t,height:i,radius:n,circle:r})=>({root:{"--skeleton-height":(0,o.D)(i),"--skeleton-width":r?(0,o.D)(i):(0,o.D)(t),"--skeleton-radius":r?"1000px":void 0===n?void 0:(0,l.nJ)(n)}})),p=(0,c.P9)((e,t)=>{let i=(0,a.Y)("Skeleton",h,e),{classNames:o,className:l,style:r,styles:c,unstyled:p,vars:x,width:j,height:g,circle:f,visible:k,radius:v,animate:S,mod:b,...w}=i,y=(0,s.I)({name:"Skeleton",classes:u,props:i,className:l,style:r,classNames:o,styles:c,unstyled:p,vars:x,varsResolver:m});return(0,n.jsx)(d.a,{ref:t,...y("root"),mod:[{visible:k,animate:S},b],...w})});p.classes=u,p.displayName="@mantine/core/Skeleton"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(97761)),_N_E=e.O()}]);
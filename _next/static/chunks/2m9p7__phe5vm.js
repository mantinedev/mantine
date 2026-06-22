(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let o={};for(var n in e)t(o,n,{get:e[n],enumerable:!0});return i||t(o,Symbol.toStringTag,{value:"Module"}),o}])},224990,e=>{"use strict";var t=e.i(391398),i=e.i(38856),o=e.i(648863),n=e.i(779177),r=e.i(433512),l=e.i(481178),a=e.i(44091),s=e.i(391466),d=e.i(275519),c=e.i(232471),u={root:"m_18320242","skeleton-fade":"m_299c329c"};let h={visible:!0,animate:!0},m=(0,l.createVarsResolver)((e,{width:t,height:i,radius:o,circle:l})=>({root:{"--skeleton-height":(0,n.rem)(i),"--skeleton-width":l?(0,n.rem)(i):(0,n.rem)(t),"--skeleton-radius":l?"1000px":void 0===o?void 0:(0,r.getRadius)(o)}})),p=(0,d.factory)(e=>{let i=(0,a.useProps)("Skeleton",h,e),{classNames:o,className:n,style:r,styles:l,unstyled:d,vars:p,width:x,height:g,circle:j,visible:f,radius:v,animate:S,mod:k,attributes:b,...y}=i;return(0,t.jsx)(c.Box,{...(0,s.useStyles)({name:"Skeleton",classes:u,props:i,className:n,style:r,classNames:o,styles:l,unstyled:d,attributes:b,vars:p,varsResolver:m})("root"),mod:[{visible:f,animate:S},k],...y})});p.classes=u,p.varsResolver=m,p.displayName="@mantine/core/Skeleton";let x={type:"configurator",component:function(e){return(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{height:50,circle:!0,mb:"xl",...e}),(0,t.jsx)(p,{height:8,radius:"xl",...e}),(0,t.jsx)(p,{height:8,mt:6,radius:"xl",...e}),(0,t.jsx)(p,{height:8,mt:6,width:"70%",radius:"xl",...e})]})},code:e=>`
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
  `,controls:[{prop:"animate",type:"boolean",initialValue:!0,libraryValue:"__"}]};var g=e.i(191788),j=e.i(485108),f=e.i(725695),v=e.i(883364);let S={type:"code",component:function(){let[e,i]=(0,g.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p,{visible:e,children:[(0,t.jsx)(v.Text,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"}),(0,t.jsx)(v.Text,{children:"Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque."})]}),(0,t.jsx)(f.Group,{justify:"center",mt:"xs",children:(0,t.jsx)(j.Button,{onClick:()=>i(e=>!e),children:"Toggle Skeleton"})})]})},code:`
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
`};var k=(0,o.__exportAll)({configurator:()=>x,content:()=>S});e.i(603441);var b=e.i(62558);e.i(457450);var y=e.i(418026);let w=(0,b.Layout)(y.MDX_DATA.Skeleton);function _(e){let o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.useMDXComponents)(),...e.components},{Demo:n}=o;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"Skeleton"})," to create a placeholder for loading content. ",(0,t.jsx)(o.code,{children:"Skeleton"})," supports the following props:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"height"})," – height – any valid CSS value"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"width"})," – width - any valid CSS value"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"radius"})," – key of ",(0,t.jsx)(o.code,{children:"theme.radius"})," or any valid CSS value to set border-radius"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"circle"})," – if true, width, height and border-radius will equal the value specified in the ",(0,t.jsx)(o.code,{children:"height"})," prop"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"animate"})," – true by default, controls animation"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:k.configurator}),"\n",(0,t.jsx)(o.h2,{id:"with-content",children:"With content"}),"\n",(0,t.jsxs)(o.p,{children:["If you want to indicate the loading state of content that is already on the page, wrap it with Skeleton\nand control the loading overlay visibility with the ",(0,t.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,t.jsx)(n,{data:k.content})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(w,{...e,children:(0,t.jsx)(_,{...e})})}],224990)},374078,(e,t,i)=>{let o="/core/skeleton";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(224990)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
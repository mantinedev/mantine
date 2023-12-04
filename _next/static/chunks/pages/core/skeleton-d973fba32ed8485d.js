(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8638],{4007:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/skeleton",function(){return n(91638)}])},91638:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(24246),o=n(71670),l=n(3916),r=n(30289),a=n(27378),s=n(55953);let c={type:"configurator",component:function(e){return a.createElement("div",null,a.createElement(s.O,{height:50,circle:!0,mb:"xl",...e}),a.createElement(s.O,{height:8,radius:"xl",...e}),a.createElement(s.O,{height:8,mt:6,radius:"xl",...e}),a.createElement(s.O,{height:8,mt:6,width:"70%",radius:"xl",...e}))},code:e=>`
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
  `,controls:[{prop:"animate",type:"boolean",initialValue:!0,libraryValue:"__"}]};var Text=n(26569),d=n(22971),u=n(8671);let m=`
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
`,h={type:"code",component:function(){let[e,t]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(s.O,{visible:e},a.createElement(Text.x,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"),a.createElement(Text.x,null,"Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque.")),a.createElement(d.Z,{justify:"center",mt:"xs"},a.createElement(u.z,{onClick:()=>t(e=>!e)},"Toggle Skeleton")))},code:m},p=(0,l.A)(r.us.Skeleton);function f(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"Skeleton"})," to create a placeholder for loading content. ",(0,i.jsx)(t.code,{children:"Skeleton"})," support the following props:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"height"})," – height – any valid CSS value"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"width"})," – width - any valid CSS value"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"radius"})," – key of ",(0,i.jsx)(t.code,{children:"theme.radius"})," or any valid CSS value to set border-radius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"circle"})," – if true width, height and border-radius will equal to value specified in ",(0,i.jsx)(t.code,{children:"height"})," prop"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"animate"})," – true by default, controls animation"]}),"\n"]}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"with-content",children:"With content"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to indicate the loading state of content that is already on page, wrap it with Skeleton\nand control loading overlay visibility with ",(0,i.jsx)(t.code,{children:"visible"})," prop:"]}),"\n",(0,i.jsx)(n,{data:h})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,{...e,children:(0,i.jsx)(f,{...e})})}},55953:function(e,t,n){"use strict";n.d(t,{O:function(){return p}});var i=n(27378),o=n(71078),l=n(92082),r=n(83453),a=n(96739),s=n(6231),c=n(56589),d=n(20410),u={root:"m-18320242","skeleton-fade":"m-299c329c"};let m={visible:!0,animate:!0},h=(0,r.Z)((e,{width:t,height:n,radius:i,circle:r})=>({root:{"--skeleton-height":(0,o.h)(n),"--skeleton-width":r?(0,o.h)(n):(0,o.h)(t),"--skeleton-radius":r?"1000px":void 0===i?void 0:(0,l.H5)(i)}})),p=(0,d.d)((e,t)=>{let n=(0,a.w)("Skeleton",m,e),{classNames:o,className:l,style:r,styles:d,unstyled:p,vars:f,width:x,height:g,circle:k,visible:j,radius:v,animate:S,...b}=n,w=(0,s.y)({name:"Skeleton",classes:u,props:n,className:l,style:r,classNames:o,styles:d,unstyled:p,vars:f,varsResolver:h});return i.createElement(c.x,{ref:t,...w("root"),mod:{visible:j,animate:S},...b})});p.classes=u,p.displayName="@mantine/core/Skeleton"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=4007)}),_N_E=e.O()}]);
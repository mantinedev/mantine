(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98638],{7560:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/skeleton",function(){return n(95930)}])},95930:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(52322),o=n(45392),r=n(52519);let l={type:"configurator",component:function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.O,{height:50,circle:!0,mb:"xl",...e}),(0,i.jsx)(r.O,{height:8,radius:"xl",...e}),(0,i.jsx)(r.O,{height:8,mt:6,radius:"xl",...e}),(0,i.jsx)(r.O,{height:8,mt:6,width:"70%",radius:"xl",...e})]})},code:e=>`
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
  `,controls:[{prop:"animate",type:"boolean",initialValue:!0,libraryValue:"__"}]};var a=n(2784),s=n(8582),d=n(93010),c=n(39629);let u={type:"code",component:function(){let[e,t]=(0,a.useState)(!0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.O,{visible:e,children:[(0,i.jsx)(s.x,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"}),(0,i.jsx)(s.x,{children:"Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque."})]}),(0,i.jsx)(d.Z,{justify:"center",mt:"xs",children:(0,i.jsx)(c.z,{onClick:()=>t(e=>!e),children:"Toggle Skeleton"})})]})},code:`
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
`};var h=n(25071),m=n(15019);let p=(0,h.A)(m.us.Skeleton);function x(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"Skeleton"})," to create a placeholder for loading content. ",(0,i.jsx)(t.code,{children:"Skeleton"})," support the following props:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"height"})," – height – any valid CSS value"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"width"})," – width - any valid CSS value"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"radius"})," – key of ",(0,i.jsx)(t.code,{children:"theme.radius"})," or any valid CSS value to set border-radius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"circle"})," – if true width, height and border-radius will equal to value specified in ",(0,i.jsx)(t.code,{children:"height"})," prop"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"animate"})," – true by default, controls animation"]}),"\n"]}),"\n",(0,i.jsx)(n,{data:l}),"\n",(0,i.jsx)(t.h2,{id:"with-content",children:"With content"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to indicate the loading state of content that is already on page, wrap it with Skeleton\nand control loading overlay visibility with ",(0,i.jsx)(t.code,{children:"visible"})," prop:"]}),"\n",(0,i.jsx)(n,{data:u})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,{...e,children:(0,i.jsx)(x,{...e})})}},52519:function(e,t,n){"use strict";n.d(t,{O:function(){return p}});var i=n(52322),o=n(58898);n(2784);var r=n(91482),l=n(11200),a=n(38483),s=n(46690),d=n(28559),c=n(82027),u={root:"m_18320242","skeleton-fade":"m_299c329c"};let h={visible:!0,animate:!0},m=(0,l.Z)((e,{width:t,height:n,radius:i,circle:l})=>({root:{"--skeleton-height":(0,o.h)(n),"--skeleton-width":l?(0,o.h)(n):(0,o.h)(t),"--skeleton-radius":l?"1000px":void 0===i?void 0:(0,r.H5)(i)}})),p=(0,c.d5)((e,t)=>{let n=(0,a.w)("Skeleton",h,e),{classNames:o,className:r,style:l,styles:c,unstyled:p,vars:x,width:f,height:j,circle:g,visible:k,radius:v,animate:S,mod:b,...w}=n,y=(0,s.y)({name:"Skeleton",classes:u,props:n,className:r,style:l,classNames:o,styles:c,unstyled:p,vars:x,varsResolver:m});return(0,i.jsx)(d.x,{ref:t,...y("root"),mod:[{visible:k,animate:S},b],...w})});p.classes=u,p.displayName="@mantine/core/Skeleton"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=7560)}),_N_E=e.O()}]);
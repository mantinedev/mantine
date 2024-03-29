(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82275],{41073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(40717)}])},40717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(52322),r=n(45392),i=n(4124),s=n(2784),a=n(28559),d=n(17115),c=n(96321),l=n(1198),u=n(33303);let p=`
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}`,m={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},f={type:"code",code:p,component:function(){let[e,t]=(0,s.useState)(!1),n=(0,u.O)(()=>t(!1));return s.createElement(a.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},s.createElement(d.z,{onClick:()=>t(!0)},"Open dropdown"),s.createElement(c.u,{mounted:e,transition:m,duration:200,timingFunction:"ease",keepMounted:!0},e=>s.createElement(l.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1}},"Dropdown")))}};var h=n(79016),x=n(33638);let y=(0,h.A)(x.us.Transition);function g(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:i.p}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:f})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(g,{...e})})}},4124:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var o=n(2784),r=n(98446),i=n(82245),s=n(893),a=n(32581),d=n(93010);let c={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>o.createElement(s.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},o.createElement(a.C,{variant:"light"},e)));return o.createElement(d.Z,{justify:"center",style:{cursor:"default"}},e)}}},32581:function(e,t,n){"use strict";n.d(t,{C:function(){return f}});var o=n(2784),r=n(91482),i=n(11200),s=n(13588),a=n(38483),d=n(62378),c=n(28559),l=n(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let p={},m=(0,i.Z)((e,{radius:t,color:n,gradient:o,variant:i,size:a,autoContrast:d})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,r.ap)(a,"badge-height"),"--badge-padding-x":(0,r.ap)(a,"badge-padding-x"),"--badge-fz":(0,r.ap)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,r.H5)(t),"--badge-bg":n||i?c.background:void 0,"--badge-color":n||i?c.color:void 0,"--badge-bd":n||i?c.border:void 0,"--badge-dot-color":"dot"===i?(0,s.p)(n,e):void 0}}}),f=(0,l.b)((e,t)=>{let n=(0,a.w)("Badge",p,e),{classNames:r,className:i,style:s,styles:l,unstyled:f,vars:h,radius:x,color:y,gradient:g,leftSection:b,rightSection:j,children:v,variant:w,fullWidth:E,autoContrast:k,circle:_,mod:O,...C}=n,P=(0,d.y)({name:"Badge",props:n,classes:u,className:i,style:s,classNames:r,styles:l,unstyled:f,vars:h,varsResolver:m});return o.createElement(c.x,{variant:w,mod:[{block:E,circle:_},O],...P("root",{variant:w}),ref:t,...C},b&&o.createElement("span",{...P("section"),"data-position":"left"},b),o.createElement("span",{...P("label")},v),j&&o.createElement("span",{...P("section"),"data-position":"right"},j))});f.classes=u,f.displayName="@mantine/core/Badge"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=41073)}),_N_E=e.O()}]);
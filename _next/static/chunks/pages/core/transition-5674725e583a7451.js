(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82275],{41073:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return t(40717)}])},40717:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var o=t(52322),i=t(45392),r=t(4124),s=t(2784),a=t(28559),d=t(17115),c=t(96321),l=t(1198),u=t(33303);let p={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},m={type:"code",code:`
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
}`,component:function(){let[n,e]=(0,s.useState)(!1),t=(0,u.O)(()=>e(!1));return(0,o.jsxs)(a.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,o.jsx)(d.z,{onClick:()=>e(!0),children:"Open dropdown"}),(0,o.jsx)(c.u,{mounted:n,transition:p,duration:200,timingFunction:"ease",keepMounted:!0,children:n=>(0,o.jsx)(l.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:t,style:{...n,zIndex:1},children:"Dropdown"})})]})}};var f=t(25071),h=t(15019);let x=(0,f.A)(h.us.Transition);function j(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components},{Demo:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(e.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(t,{data:r.p}),"\n",(0,o.jsxs)(e.p,{children:["To use one of them set ",(0,o.jsx)(e.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(e.p,{children:["You can create your own transition. ",(0,o.jsx)(e.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:m})]})}function g(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...n,children:(0,o.jsx)(j,{...n})})}},4124:function(n,e,t){"use strict";t.d(e,{p:function(){return c}});var o=t(52322),i=t(98446),r=t(82245),s=t(893),a=t(32581),d=t(93010);let c={type:"code",component:function(){let n=(0,i.X)(r.p).map(n=>(0,o.jsx)(s.u,{label:n,transitionProps:{transition:n,duration:300},children:(0,o.jsx)(a.C,{variant:"light",children:n})},n));return(0,o.jsx)(d.Z,{justify:"center",style:{cursor:"default"},children:n})}}},32581:function(n,e,t){"use strict";t.d(e,{C:function(){return f}});var o=t(52322);t(2784);var i=t(91482),r=t(11200),s=t(13588),a=t(38483),d=t(46690),c=t(28559),l=t(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let p={},m=(0,r.Z)((n,{radius:e,color:t,gradient:o,variant:r,size:a,autoContrast:d})=>{let c=n.variantColorResolver({color:t||n.primaryColor,theme:n,gradient:o,variant:r||"filled",autoContrast:d});return{root:{"--badge-height":(0,i.ap)(a,"badge-height"),"--badge-padding-x":(0,i.ap)(a,"badge-padding-x"),"--badge-fz":(0,i.ap)(a,"badge-fz"),"--badge-radius":void 0===e?void 0:(0,i.H5)(e),"--badge-bg":t||r?c.background:void 0,"--badge-color":t||r?c.color:void 0,"--badge-bd":t||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,s.p)(t,n):void 0}}}),f=(0,l.b)((n,e)=>{let t=(0,a.w)("Badge",p,n),{classNames:i,className:r,style:s,styles:l,unstyled:f,vars:h,radius:x,color:j,gradient:g,leftSection:y,rightSection:b,children:v,variant:w,fullWidth:k,autoContrast:_,circle:O,mod:C,...P}=t,T=(0,d.y)({name:"Badge",props:t,classes:u,className:r,style:s,classNames:i,styles:l,unstyled:f,vars:h,varsResolver:m});return(0,o.jsxs)(c.x,{variant:w,mod:[{block:k,circle:O},C],...T("root",{variant:w}),ref:e,...P,children:[y&&(0,o.jsx)("span",{...T("section"),"data-position":"left",children:y}),(0,o.jsx)("span",{...T("label"),children:v}),b&&(0,o.jsx)("span",{...T("section"),"data-position":"right",children:b})]})});f.classes=u,f.displayName="@mantine/core/Badge"}},function(n){n.O(0,[61177,66748,11340,92888,49774,40179],function(){return n(n.s=41073)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{37458:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(26711)}])},26711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(24246),r=n(71670),i=n(3916),s=n(30289),a=n(64470),d=n(27378),c=n(93226),l=n(56589),u=n(8671),p=n(88101),m=n(98477);let f=`
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
}`,h={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},x={type:"code",code:f,component:function(){let[e,t]=(0,d.useState)(!1),n=(0,c.O)(()=>t(!1));return d.createElement(l.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},d.createElement(u.z,{onClick:()=>t(!0)},"Open dropdown"),d.createElement(p.u,{mounted:e,transition:h,duration:200,timingFunction:"ease",keepMounted:!0},e=>d.createElement(m.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1}},"Dropdown")))}},y=(0,i.A)(s.us.Transition);function g(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:a.p}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:x})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(g,{...e})})}},64470:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var o=n(27378),r=n(53007),i=n(34296),s=n(99684),a=n(73988),d=n(22971);let c={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>o.createElement(s.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},o.createElement(a.C,{variant:"light"},e)));return o.createElement(d.Z,{justify:"center",style:{cursor:"default"}},e)}}},73988:function(e,t,n){"use strict";n.d(t,{C:function(){return f}});var o=n(27378),r=n(92082),i=n(83453),s=n(89738),a=n(96739),d=n(6231),c=n(56589),l=n(50332),u={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let p={},m=(0,i.Z)((e,{radius:t,color:n,gradient:o,variant:i,size:a})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:i||"filled"});return{root:{"--badge-height":(0,r.ap)(a,"badge-height"),"--badge-padding-x":(0,r.ap)(a,"badge-padding-x"),"--badge-fz":(0,r.ap)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,r.H5)(t),"--badge-bg":n||i?d.background:void 0,"--badge-color":n||i?d.color:void 0,"--badge-bd":n||i?d.border:void 0,"--badge-dot-color":"dot"===i?(0,s.p)(n,e):void 0}}}),f=(0,l.b)((e,t)=>{let n=(0,a.w)("Badge",p,e),{classNames:r,className:i,style:s,styles:l,unstyled:f,vars:h,radius:x,color:y,gradient:g,leftSection:b,rightSection:j,children:v,variant:w,fullWidth:E,...k}=n,O=(0,d.y)({name:"Badge",props:n,classes:u,className:i,style:s,classNames:r,styles:l,unstyled:f,vars:h,varsResolver:m});return o.createElement(c.x,{variant:w,mod:{block:E},...O("root",{variant:w}),ref:t,...k},b&&o.createElement("span",{...O("section"),"data-position":"left"},b),o.createElement("span",{...O("label")},v),j&&o.createElement("span",{...O("section"),"data-position":"right"},j))});f.classes=u,f.displayName="@mantine/core/Badge"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=37458)}),_N_E=e.O()}]);
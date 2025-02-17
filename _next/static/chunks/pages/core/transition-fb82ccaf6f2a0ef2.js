(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69849],{43281:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(89605)}])},89605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=n(31085),i=n(71184),s=n(354),r=n(14041),a=n(34056),d=n(52022),l=n(98523),c=n(58120),p=n(63151);let u={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},m={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,r.useState)(!1),n=(0,p.L)(()=>t(!1));return(0,o.jsxs)(a.a,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,o.jsx)(d.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(l.e,{mounted:e,transition:u,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,o.jsx)(c.t,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var h=n(73023),x=n(85954),y=n(38215);let f=(0,x.P)(y.XZ.Transition);function j(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:s.b}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"enter-and-exit-delay",children:"Enter and exit delay"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"enterDelay"})," and ",(0,o.jsx)(t.code,{children:"exitDelay"})," props to delay transition start. Values are in milliseconds:"]}),"\n",(0,o.jsx)(n,{data:h.c})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(f,{...e,children:(0,o.jsx)(j,{...e})})}},354:(e,t,n)=>{"use strict";n.d(t,{b:()=>l});var o=n(31085),i=n(93698),s=n(20942),r=n(2912),a=n(76644),d=n(56051);let l={type:"code",component:function(){let e=(0,i.H)(s.b).map(e=>(0,o.jsx)(r.m,{label:e,transitionProps:{transition:e,duration:300},children:(0,o.jsx)(a.E,{variant:"light",children:e})},e));return(0,o.jsx)(d.Y,{justify:"center",style:{cursor:"default"},children:e})}}},73023:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var o=n(31085),i=n(14041),s=n(69919),r=n(52022),a=n(98523),d=n(58120);let l={type:"code",code:`
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}`,component:function(){let[e,t]=(0,i.useState)(!1);return(0,o.jsxs)(s.s,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,o.jsx)(r.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(a.e,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,o.jsx)(d.t,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},76644:(e,t,n)=>{"use strict";n.d(t,{E:()=>h});var o=n(31085);n(14041);var i=n(33450),s=n(7098),r=n(51606),a=n(29686),d=n(69564),l=n(34056),c=n(2453),p={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},m=(0,s.V)((e,{radius:t,color:n,gradient:o,variant:s,size:a,autoContrast:d})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:s||"filled",autoContrast:d});return{root:{"--badge-height":(0,i.YC)(a,"badge-height"),"--badge-padding-x":(0,i.YC)(a,"badge-padding-x"),"--badge-fz":(0,i.YC)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.nJ)(t),"--badge-bg":n||s?l.background:void 0,"--badge-color":n||s?l.color:void 0,"--badge-bd":n||s?l.border:void 0,"--badge-dot-color":"dot"===s?(0,r.r)(n,e):void 0}}}),h=(0,c.v)((e,t)=>{let n=(0,a.Y)("Badge",u,e),{classNames:i,className:s,style:r,styles:c,unstyled:h,vars:x,radius:y,color:f,gradient:j,leftSection:g,rightSection:b,children:v,variant:w,fullWidth:k,autoContrast:C,circle:O,mod:_,...P}=n,Y=(0,d.I)({name:"Badge",props:n,classes:p,className:s,style:r,classNames:i,styles:c,unstyled:h,vars:x,varsResolver:m});return(0,o.jsxs)(l.a,{variant:w,mod:[{block:k,circle:O,"with-right-section":!!b,"with-left-section":!!g},_],...Y("root",{variant:w}),ref:t,...P,children:[g&&(0,o.jsx)("span",{...Y("section"),"data-position":"left",children:g}),(0,o.jsx)("span",{...Y("label"),children:v}),b&&(0,o.jsx)("span",{...Y("section"),"data-position":"right",children:b})]})});h.classes=p,h.displayName="@mantine/core/Badge"},69919:(e,t,n)=>{"use strict";n.d(t,{s:()=>y});var o=n(31085),i=n(41280);n(14041);var s=n(92408),r=n(29686),a=n(69564),d=n(54212),l=n(46914),c=n(22448),p=n(34056),u=n(2453),m=n(18670),h={root:"m_8bffd616"};let x={},y=(0,u.v)((e,t)=>{let n=(0,r.Y)("Flex",x,e),{classNames:u,className:y,style:f,styles:j,unstyled:g,vars:b,gap:v,rowGap:w,columnGap:k,align:C,justify:O,wrap:_,direction:P,...Y}=n,D=(0,a.I)({name:"Flex",classes:h,props:n,className:y,style:f,classNames:u,styles:j,unstyled:g,vars:b}),T=(0,s.xd)(),B=(0,c.C)(),S=(0,l.X)({styleProps:{gap:v,rowGap:w,columnGap:k,align:C,justify:O,wrap:_,direction:P},theme:T,data:m.I});return(0,o.jsxs)(o.Fragment,{children:[S.hasResponsiveStyles&&(0,o.jsx)(d.K,{selector:`.${B}`,styles:S.styles,media:S.media}),(0,o.jsx)(p.a,{ref:t,...D("root",{className:B,style:(0,i.J)(S.inlineStyles)}),...Y})]})});y.classes=h,y.displayName="@mantine/core/Flex"},18670:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});let o={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(43281)),_N_E=e.O()}]);
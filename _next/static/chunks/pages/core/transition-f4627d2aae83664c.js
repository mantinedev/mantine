(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82275],{41073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(40717)}])},40717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(52322),i=n(45392),r=n(4124),s=n(2784),a=n(28559),d=n(17115),l=n(96321),c=n(1198),p=n(33303);let u={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},m={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,s.useState)(!1),n=(0,p.O)(()=>t(!1));return(0,o.jsxs)(a.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,o.jsx)(d.z,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(l.u,{mounted:e,transition:u,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,o.jsx)(c.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var f=n(73473),x=n(25071),y=n(15019);let h=(0,x.A)(y.us.Transition);function j(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:r.p}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"enter-and-exit-delay",children:"Enter and exit delay"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"enterDelay"})," and ",(0,o.jsx)(t.code,{children:"exitDelay"})," props to delay transition start. Values are in milliseconds:"]}),"\n",(0,o.jsx)(n,{data:f.g})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(j,{...e})})}},4124:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var o=n(52322),i=n(98446),r=n(82245),s=n(893),a=n(32581),d=n(93010);let l={type:"code",component:function(){let e=(0,i.X)(r.p).map(e=>(0,o.jsx)(s.u,{label:e,transitionProps:{transition:e,duration:300},children:(0,o.jsx)(a.C,{variant:"light",children:e})},e));return(0,o.jsx)(d.Z,{justify:"center",style:{cursor:"default"},children:e})}}},73473:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var o=n(52322),i=n(2784),r=n(68131),s=n(17115),a=n(96321),d=n(1198);let l={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,i.useState)(!1);return(0,o.jsxs)(r.k,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,o.jsx)(s.z,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(a.u,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,o.jsx)(d.X,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},32581:function(e,t,n){"use strict";n.d(t,{C:function(){return f}});var o=n(52322);n(2784);var i=n(91482),r=n(11200),s=n(13588),a=n(38483),d=n(46690),l=n(28559),c=n(33502),p={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},m=(0,r.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:a,autoContrast:d})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r||"filled",autoContrast:d});return{root:{"--badge-height":(0,i.ap)(a,"badge-height"),"--badge-padding-x":(0,i.ap)(a,"badge-padding-x"),"--badge-fz":(0,i.ap)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.H5)(t),"--badge-bg":n||r?l.background:void 0,"--badge-color":n||r?l.color:void 0,"--badge-bd":n||r?l.border:void 0,"--badge-dot-color":"dot"===r?(0,s.p)(n,e):void 0}}}),f=(0,c.b)((e,t)=>{let n=(0,a.w)("Badge",u,e),{classNames:i,className:r,style:s,styles:c,unstyled:f,vars:x,radius:y,color:h,gradient:j,leftSection:g,rightSection:b,children:w,variant:v,fullWidth:k,autoContrast:C,circle:O,mod:_,...P}=n,D=(0,d.y)({name:"Badge",props:n,classes:p,className:r,style:s,classNames:i,styles:c,unstyled:f,vars:x,varsResolver:m});return(0,o.jsxs)(l.x,{variant:v,mod:[{block:k,circle:O,"with-right-section":!!b,"with-left-section":!!g},_],...D("root",{variant:v}),ref:t,...P,children:[g&&(0,o.jsx)("span",{...D("section"),"data-position":"left",children:g}),(0,o.jsx)("span",{...D("label"),children:w}),b&&(0,o.jsx)("span",{...D("section"),"data-position":"right",children:b})]})});f.classes=p,f.displayName="@mantine/core/Badge"},68131:function(e,t,n){"use strict";n.d(t,{k:function(){return y}});var o=n(52322),i=n(40580);n(2784);var r=n(68755),s=n(38483),a=n(46690),d=n(9437),l=n(53515),c=n(12063),p=n(28559),u=n(33502),m=n(54367),f={root:"m_8bffd616"};let x={},y=(0,u.b)((e,t)=>{let n=(0,s.w)("Flex",x,e),{classNames:u,className:y,style:h,styles:j,unstyled:g,vars:b,gap:w,rowGap:v,columnGap:k,align:C,justify:O,wrap:_,direction:P,...D}=n,T=(0,a.y)({name:"Flex",classes:f,props:n,className:y,style:h,classNames:u,styles:j,unstyled:g,vars:b}),B=(0,r.rZ)(),S=(0,c.m)(),F=(0,l.n)({styleProps:{gap:w,rowGap:v,columnGap:k,align:C,justify:O,wrap:_,direction:P},theme:B,data:m.i});return(0,o.jsxs)(o.Fragment,{children:[F.hasResponsiveStyles&&(0,o.jsx)(d.f,{selector:`.${S}`,styles:F.styles,media:F.media}),(0,o.jsx)(p.x,{ref:t,...T("root",{className:S,style:(0,i.L)(F.inlineStyles)}),...D})]})});y.classes=f,y.displayName="@mantine/core/Flex"},54367:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});let o={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=41073)}),_N_E=e.O()}]);
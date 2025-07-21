(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69849],{43281:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(89605)}])},89605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var o=n(31085),s=n(71184),a=n(354),i=n(14041),r=n(34056),d=n(52022),l=n(98523),c=n(58120),p=n(63151);let h={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},u={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,i.useState)(!1),n=(0,p.L)(()=>t(!1));return(0,o.jsxs)(r.a,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,o.jsx)(d.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(l.e,{mounted:e,transition:h,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,o.jsx)(c.t,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var y=n(73023),m=n(18675),v=n(20017);let g=(0,m.P)(v.XZ.Transition);function x(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:a.b}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"enter-and-exit-delay",children:"Enter and exit delay"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"enterDelay"})," and ",(0,o.jsx)(t.code,{children:"exitDelay"})," props to delay transition start. Values are in milliseconds:"]}),"\n",(0,o.jsx)(n,{data:y.c})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(g,{...e,children:(0,o.jsx)(x,{...e})})}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},354:(e,t,n)=>{"use strict";n.d(t,{b:()=>l});var o=n(31085),s=n(93698),a=n(20942),i=n(2912),r=n(76644),d=n(56051);let l={type:"code",component:function(){let e=(0,s.H)(a.b).map(e=>(0,o.jsx)(i.m,{label:e,transitionProps:{transition:e,duration:300},children:(0,o.jsx)(r.E,{variant:"light",children:e})},e));return(0,o.jsx)(d.Y,{justify:"center",style:{cursor:"default"},children:e})}}},73023:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var o=n(31085),s=n(14041),a=n(69919),i=n(52022),r=n(98523),d=n(58120);let l={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,s.useState)(!1);return(0,o.jsxs)(a.s,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,o.jsx)(i.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,o.jsx)(r.e,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,o.jsx)(d.t,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},76644:(e,t,n)=>{"use strict";n.d(t,{E:()=>u});var o=n(31085);n(14041);var s=n(33450),a=n(7098),i=n(51606),r=n(29686),d=n(69564),l=n(34056),c=n(2453),p={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h=(0,a.V)((e,{radius:t,color:n,gradient:o,variant:a,size:r,autoContrast:d})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:d});return{root:{"--badge-height":(0,s.YC)(r,"badge-height"),"--badge-padding-x":(0,s.YC)(r,"badge-padding-x"),"--badge-fz":(0,s.YC)(r,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,s.nJ)(t),"--badge-bg":n||a?l.background:void 0,"--badge-color":n||a?l.color:void 0,"--badge-bd":n||a?l.border:void 0,"--badge-dot-color":"dot"===a?(0,i.r)(n,e):void 0}}}),u=(0,c.v)((e,t)=>{let n=(0,r.Y)("Badge",null,e),{classNames:s,className:a,style:i,styles:c,unstyled:u,vars:y,radius:m,color:v,gradient:g,leftSection:x,rightSection:f,children:k,variant:j,fullWidth:M,autoContrast:b,circle:w,mod:C,attributes:A,...I}=n,O=(0,d.I)({name:"Badge",props:n,classes:p,className:a,style:i,classNames:s,styles:c,unstyled:u,attributes:A,vars:y,varsResolver:h});return(0,o.jsxs)(l.a,{variant:j,mod:[{block:M,circle:w,"with-right-section":!!f,"with-left-section":!!x},C],...O("root",{variant:j}),ref:t,...I,children:[x&&(0,o.jsx)("span",{...O("section"),"data-position":"left",children:x}),(0,o.jsx)("span",{...O("label"),children:k}),f&&(0,o.jsx)("span",{...O("section"),"data-position":"right",children:f})]})});u.classes=p,u.displayName="@mantine/core/Badge"},69919:(e,t,n)=>{"use strict";n.d(t,{s:()=>m});var o=n(31085),s=n(41280);n(14041);var a=n(92408),i=n(29686),r=n(69564),d=n(54212),l=n(9594),c=n(22448),p=n(34056),h=n(2453),u=n(18670),y={root:"m_8bffd616"};let m=(0,h.v)((e,t)=>{let n=(0,i.Y)("Flex",null,e),{classNames:h,className:m,style:v,styles:g,unstyled:x,vars:f,gap:k,rowGap:j,columnGap:M,align:b,justify:w,wrap:C,direction:A,attributes:I,...O}=n,_=(0,r.I)({name:"Flex",classes:y,props:n,className:m,style:v,classNames:h,styles:g,unstyled:x,attributes:I,vars:f}),P=(0,a.xd)(),T=(0,c.C)(),Y=(0,l.X)({styleProps:{gap:k,rowGap:j,columnGap:M,align:b,justify:w,wrap:C,direction:A},theme:P,data:u.I});return(0,o.jsxs)(o.Fragment,{children:[Y.hasResponsiveStyles&&(0,o.jsx)(d.K,{selector:`.${T}`,styles:Y.styles,media:Y.media}),(0,o.jsx)(p.a,{ref:t,..._("root",{className:T,style:(0,s.J)(Y.inlineStyles)}),...O})]})});m.classes=y,m.displayName="@mantine/core/Flex"},18670:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});let o={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(43281)),_N_E=e.O()}]);
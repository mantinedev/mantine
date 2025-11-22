(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69849],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7087:(e,t,n)=>{"use strict";n.d(t,{I:()=>s});let s={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},43131:(e,t,n)=>{"use strict";n.d(t,{b:()=>l});var s=n(6029),o=n(26779),i=n(91183),a=n(70304),r=n(55968),d=n(57414);let l={type:"code",component:function(){let e=(0,o.H)(i.b).map(e=>(0,s.jsx)(a.m,{label:e,transitionProps:{transition:e,duration:300},children:(0,s.jsx)(r.E,{variant:"light",children:e})},e));return(0,s.jsx)(d.Y,{justify:"center",style:{cursor:"default"},children:e})}}},46746:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var s=n(6029),o=n(55729),i=n(90026),a=n(61087),r=n(89184),d=n(5086);let l={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(i.s,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,s.jsx)(a.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,s.jsx)(r.e,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,s.jsx)(d.t,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},55968:(e,t,n)=>{"use strict";n.d(t,{E:()=>u});var s=n(6029);n(55729);var o=n(14163),i=n(33987),a=n(21351),r=n(38919),d=n(15583),l=n(76320),p=n(82500),c={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h=(0,i.V)((e,{radius:t,color:n,gradient:s,variant:i,size:r,autoContrast:d,circle:l})=>{let p=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:s,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,o.YC)(r,"badge-height"),"--badge-padding-x":(0,o.YC)(r,"badge-padding-x"),"--badge-fz":(0,o.YC)(r,"badge-fz"),"--badge-radius":l||void 0===t?void 0:(0,o.nJ)(t),"--badge-bg":n||i?p.background:void 0,"--badge-color":n||i?p.color:void 0,"--badge-bd":n||i?p.border:void 0,"--badge-dot-color":"dot"===i?(0,a.r)(n,e):void 0}}}),u=(0,p.v)((e,t)=>{let n=(0,r.Y)("Badge",null,e),{classNames:o,className:i,style:a,styles:p,unstyled:u,vars:y,radius:m,color:v,gradient:g,leftSection:x,rightSection:f,children:k,variant:j,fullWidth:M,autoContrast:b,circle:w,mod:C,attributes:A,...O}=n,_=(0,d.I)({name:"Badge",props:n,classes:c,className:i,style:a,classNames:o,styles:p,unstyled:u,attributes:A,vars:y,varsResolver:h});return(0,s.jsxs)(l.a,{variant:j,mod:[{block:M,circle:w,"with-right-section":!!f,"with-left-section":!!x},C],..._("root",{variant:j}),ref:t,...O,children:[x&&(0,s.jsx)("span",{..._("section"),"data-position":"left",children:x}),(0,s.jsx)("span",{..._("label"),children:k}),f&&(0,s.jsx)("span",{..._("section"),"data-position":"right",children:f})]})});u.classes=c,u.displayName="@mantine/core/Badge"},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68577:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(74793)}])},74793:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var s=n(6029),o=n(16285),i=n(43131),a=n(55729),r=n(76320),d=n(61087),l=n(89184),p=n(5086),c=n(5322);let h={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},u={type:"code",code:`
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
}`,component:function(){let[e,t]=(0,a.useState)(!1),n=(0,c.L)(()=>t(!1));return(0,s.jsxs)(r.a,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,s.jsx)(d.$,{onClick:()=>t(!0),children:"Open dropdown"}),(0,s.jsx)(l.e,{mounted:e,transition:h,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,s.jsx)(p.t,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var y=n(46746),m=n(38547),v=n(5262);let g=(0,m.P)(v.XZ.Transition);function x(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,s.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,s.jsx)(n,{data:i.b}),"\n",(0,s.jsxs)(t.p,{children:["To use one of them set ",(0,s.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,s.jsxs)(t.p,{children:["You can create your own transition. ",(0,s.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,s.jsx)(n,{data:u}),"\n",(0,s.jsx)(t.h2,{id:"enter-and-exit-delay",children:"Enter and exit delay"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"enterDelay"})," and ",(0,s.jsx)(t.code,{children:"exitDelay"})," props to delay transition start. Values are in milliseconds:"]}),"\n",(0,s.jsx)(n,{data:y.c})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(g,{...e,children:(0,s.jsx)(x,{...e})})}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90026:(e,t,n)=>{"use strict";n.d(t,{s:()=>m});var s=n(6029),o=n(14989);n(55729);var i=n(49643),a=n(38919),r=n(15583),d=n(52496),l=n(22669),p=n(71709),c=n(76320),h=n(82500),u=n(7087),y={root:"m_8bffd616"};let m=(0,h.v)((e,t)=>{let n=(0,a.Y)("Flex",null,e),{classNames:h,className:m,style:v,styles:g,unstyled:x,vars:f,gap:k,rowGap:j,columnGap:M,align:b,justify:w,wrap:C,direction:A,attributes:O,..._}=n,P=(0,r.I)({name:"Flex",classes:y,props:n,className:m,style:v,classNames:h,styles:g,unstyled:x,attributes:O,vars:f}),T=(0,i.xd)(),Y=(0,p.C)(),D=(0,l.X)({styleProps:{gap:k,rowGap:j,columnGap:M,align:b,justify:w,wrap:C,direction:A},theme:T,data:u.I});return(0,s.jsxs)(s.Fragment,{children:[D.hasResponsiveStyles&&(0,s.jsx)(d.K,{selector:`.${Y}`,styles:D.styles,media:D.media}),(0,s.jsx)(c.a,{ref:t,...P("root",{className:Y,style:(0,o.J)(D.inlineStyles)}),..._})]})});m.classes=y,m.displayName="@mantine/core/Flex"}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=68577)),_N_E=e.O()}]);
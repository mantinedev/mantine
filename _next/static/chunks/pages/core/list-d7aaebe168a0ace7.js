(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32536],{37029:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return s(17393)}])},17393:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var i=s(31085),n=s(71184),r=s(17592);let o={type:"configurator",component:function(e){return(0,i.jsxs)(r.B,{...e,children:[(0,i.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,i.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,i.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,i.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,i.jsx)(r.B.Item,{children:"Submit a pull request once you are done"})]})},code:`
import { List } from '@mantine/core';

function Demo() {
  return (
    <List{{props}}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
`,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var d=s(50662),l=s(79289),a=s(29225);let c={type:"code",centered:!0,maxWidth:500,component:function(){return(0,i.jsxs)(r.B,{spacing:"xs",size:"sm",center:!0,icon:(0,i.jsx)(a.L,{color:"teal",size:24,radius:"xl",children:(0,i.jsx)(d.A,{size:16})}),children:[(0,i.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,i.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,i.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,i.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,i.jsx)(r.B.Item,{icon:(0,i.jsx)(a.L,{color:"blue",size:24,radius:"xl",children:(0,i.jsx)(l.A,{size:16})}),children:"Submit a pull request once you are done"})]})},code:`
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size={16} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`},m={type:"code",component:function(){return(0,i.jsxs)(r.B,{listStyleType:"disc",children:[(0,i.jsx)(r.B.Item,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),(0,i.jsx)(r.B.Item,{children:"First order item"}),(0,i.jsxs)(r.B.Item,{children:["First order item with list",(0,i.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,i.jsx)(r.B.Item,{children:"Nested item"}),(0,i.jsx)(r.B.Item,{children:"Nested item"}),(0,i.jsxs)(r.B.Item,{children:["Nested item with list",(0,i.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,i.jsx)(r.B.Item,{children:"Event more nested"}),(0,i.jsx)(r.B.Item,{children:"Event more nested"})]})]}),(0,i.jsx)(r.B.Item,{children:"Nested item"})]})]}),(0,i.jsx)(r.B.Item,{children:"First order item"})]})},code:`
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
`};var h=s(18675),u=s(20017);let p=(0,h.P)(u.XZ.List);function v(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Demo:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s,{data:o}),"\n",(0,i.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,i.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,i.jsx)(t.code,{children:"0"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,i.jsx)(s,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,i.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,i.jsx)(s,{data:m})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,{...e,children:(0,i.jsx)(v,{...e})})}},87186:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},50662:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},91133:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var i=(0,s(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},17592:(e,t,s)=>{"use strict";s.d(t,{B:()=>y});var i=s(31085);s(14041);var n=s(33450),r=s(7098),o=s(29686),d=s(69564),l=s(34056),a=s(6754);let[c,m]=(0,s(59852).F)("List component was not found in tree");var h={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let u=(0,a.P9)((e,t)=>{let{classNames:s,className:n,style:r,styles:d,vars:a,icon:c,children:h,mod:u,...p}=(0,o.Y)("ListItem",null,e),v=m(),y=c||v.icon,I={classNames:s,styles:d};return(0,i.jsx)(l.a,{...v.getStyles("item",{...I,className:n,style:r}),component:"li",mod:[{"with-icon":!!y,centered:v.center},u],ref:t,...p,children:(0,i.jsxs)("div",{...v.getStyles("itemWrapper",I),children:[y&&(0,i.jsx)("span",{...v.getStyles("itemIcon",I),children:y}),(0,i.jsx)("span",{...v.getStyles("itemLabel",I),children:h})]})})});u.classes=h,u.displayName="@mantine/core/ListItem";let p={type:"unordered"},v=(0,r.V)((e,{size:t,spacing:s})=>({root:{"--list-fz":(0,n.ny)(t),"--list-lh":(0,n.ks)(t),"--list-spacing":(0,n.GY)(s)}})),y=(0,a.P9)((e,t)=>{let s=(0,o.Y)("List",p,e),{classNames:n,className:r,style:a,styles:m,unstyled:u,vars:y,children:I,type:g,withPadding:x,icon:L,spacing:j,center:k,listStyleType:b,mod:f,attributes:w,...M}=s,B=(0,d.I)({name:"List",classes:h,props:s,className:r,style:a,classNames:n,styles:m,unstyled:u,attributes:w,vars:y,varsResolver:v});return(0,i.jsx)(c,{value:{center:k,icon:L,getStyles:B},children:(0,i.jsx)(l.a,{...B("root",{style:{listStyleType:b}}),component:"unordered"===g?"ul":"ol",mod:[{"with-padding":x},f],ref:t,...M,children:I})})});y.classes=h,y.displayName="@mantine/core/List",y.Item=u},29225:(e,t,s)=>{"use strict";s.d(t,{L:()=>h});var i=s(31085);s(14041);var n=s(33450),r=s(7098),o=s(29686),d=s(69564),l=s(34056),a=s(6754),c={root:"m_7341320d"};let m=(0,r.V)((e,{size:t,radius:s,variant:i,gradient:r,color:o,autoContrast:d})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:i||"filled",autoContrast:d});return{root:{"--ti-size":(0,n.YC)(t,"ti-size"),"--ti-radius":void 0===s?void 0:(0,n.nJ)(s),"--ti-bg":o||i?l.background:void 0,"--ti-color":o||i?l.color:void 0,"--ti-bd":o||i?l.border:void 0}}}),h=(0,a.P9)((e,t)=>{let s=(0,o.Y)("ThemeIcon",null,e),{classNames:n,className:r,style:a,styles:h,unstyled:u,vars:p,autoContrast:v,attributes:y,...I}=s,g=(0,d.I)({name:"ThemeIcon",classes:c,props:s,className:r,style:a,classNames:n,styles:h,unstyled:u,attributes:y,vars:p,varsResolver:m});return(0,i.jsx)(l.a,{ref:t,...g("root"),...I})});h.classes=c,h.displayName="@mantine/core/ThemeIcon"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(37029)),_N_E=e.O()}]);
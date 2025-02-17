(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32536],{37029:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(17393)}])},17393:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var s=i(31085),n=i(71184),r=i(17592);let o={type:"configurator",component:function(e){return(0,s.jsxs)(r.B,{...e,children:[(0,s.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(r.B.Item,{children:"Submit a pull request once you are done"})]})},code:`
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
`,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var l=i(50662),d=i(79289),c=i(29225);let m={type:"code",centered:!0,maxWidth:500,component:function(){return(0,s.jsxs)(r.B,{spacing:"xs",size:"sm",center:!0,icon:(0,s.jsx)(c.L,{color:"teal",size:24,radius:"xl",children:(0,s.jsx)(l.A,{size:16})}),children:[(0,s.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(r.B.Item,{icon:(0,s.jsx)(c.L,{color:"blue",size:24,radius:"xl",children:(0,s.jsx)(d.A,{size:16})}),children:"Submit a pull request once you are done"})]})},code:`
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
`},a={type:"code",component:function(){return(0,s.jsxs)(r.B,{listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),(0,s.jsx)(r.B.Item,{children:"First order item"}),(0,s.jsxs)(r.B.Item,{children:["First order item with list",(0,s.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Nested item"}),(0,s.jsx)(r.B.Item,{children:"Nested item"}),(0,s.jsxs)(r.B.Item,{children:["Nested item with list",(0,s.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Event more nested"}),(0,s.jsx)(r.B.Item,{children:"Event more nested"})]})]}),(0,s.jsx)(r.B.Item,{children:"Nested item"})]})]}),(0,s.jsx)(r.B.Item,{children:"First order item"})]})},code:`
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
`};var u=i(85954),h=i(38215);let p=(0,u.P)(h.XZ.List);function I(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i,{data:o}),"\n",(0,s.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,s.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,s.jsx)(t.code,{children:"0"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,s.jsx)(i,{data:m}),"\n",(0,s.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,s.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,s.jsx)(i,{data:a})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(p,{...e,children:(0,s.jsx)(I,{...e})})}},50662:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});var s=(0,i(73366).A)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},17592:(e,t,i)=>{"use strict";i.d(t,{B:()=>L});var s=i(31085);i(14041);var n=i(33450),r=i(7098),o=i(29686),l=i(69564),d=i(34056),c=i(6754);let[m,a]=(0,i(59852).F)("List component was not found in tree");var u={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let h={},p=(0,c.P9)((e,t)=>{let{classNames:i,className:n,style:r,styles:l,vars:c,icon:m,children:u,mod:p,...I}=(0,o.Y)("ListItem",h,e),x=a(),L=m||x.icon,j={classNames:i,styles:l};return(0,s.jsx)(d.a,{...x.getStyles("item",{...j,className:n,style:r}),component:"li",mod:[{"with-icon":!!L,centered:x.center},p],ref:t,...I,children:(0,s.jsxs)("div",{...x.getStyles("itemWrapper",j),children:[L&&(0,s.jsx)("span",{...x.getStyles("itemIcon",j),children:L}),(0,s.jsx)("span",{...x.getStyles("itemLabel",j),children:u})]})})});p.classes=u,p.displayName="@mantine/core/ListItem";let I={type:"unordered"},x=(0,r.V)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,n.ny)(t),"--list-lh":(0,n.ks)(t),"--list-spacing":(0,n.GY)(i)}})),L=(0,c.P9)((e,t)=>{let i=(0,o.Y)("List",I,e),{classNames:n,className:r,style:c,styles:a,unstyled:h,vars:p,children:L,type:j,withPadding:y,icon:b,spacing:v,center:f,listStyleType:g,mod:w,...B}=i,T=(0,l.I)({name:"List",classes:u,props:i,className:r,style:c,classNames:n,styles:a,unstyled:h,vars:p,varsResolver:x});return(0,s.jsx)(m,{value:{center:f,icon:b,getStyles:T},children:(0,s.jsx)(d.a,{...T("root",{style:{listStyleType:g}}),component:"unordered"===j?"ul":"ol",mod:[{"with-padding":y},w],ref:t,...B,children:L})})});L.classes=u,L.displayName="@mantine/core/List",L.Item=p},29225:(e,t,i)=>{"use strict";i.d(t,{L:()=>h});var s=i(31085);i(14041);var n=i(33450),r=i(7098),o=i(29686),l=i(69564),d=i(34056),c=i(6754),m={root:"m_7341320d"};let a={},u=(0,r.V)((e,{size:t,radius:i,variant:s,gradient:r,color:o,autoContrast:l})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:s||"filled",autoContrast:l});return{root:{"--ti-size":(0,n.YC)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,n.nJ)(i),"--ti-bg":o||s?d.background:void 0,"--ti-color":o||s?d.color:void 0,"--ti-bd":o||s?d.border:void 0}}}),h=(0,c.P9)((e,t)=>{let i=(0,o.Y)("ThemeIcon",a,e),{classNames:n,className:r,style:c,styles:h,unstyled:p,vars:I,autoContrast:x,...L}=i,j=(0,l.I)({name:"ThemeIcon",classes:m,props:i,className:r,style:c,classNames:n,styles:h,unstyled:p,vars:I,varsResolver:u});return(0,s.jsx)(d.a,{ref:t,...j("root"),...L})});h.classes=m,h.displayName="@mantine/core/ThemeIcon"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(37029)),_N_E=e.O()}]);
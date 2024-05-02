(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5392],{97799:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var s=(0,i(99882).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},77974:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(63353)}])},63353:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return P}});var s=i(52322),n=i(45392);i(2784);var r=i(91482),o=i(11200),l=i(38483),d=i(46690),c=i(28559),m=i(82027),a=i(89106);let[u,h]=(0,a.R)("List component was not found in tree");var p={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let I={},x=(0,m.d)((e,t)=>{let i=(0,l.w)("ListItem",I,e),{classNames:n,className:r,style:o,styles:d,vars:m,icon:a,children:u,mod:p,...x}=i,L=h(),y=a||L.icon,j={classNames:n,styles:d};return(0,s.jsx)(c.x,{...L.getStyles("item",{...j,className:r,style:o}),component:"li",mod:[{"with-icon":!!y,centered:L.center},p],ref:t,...x,children:(0,s.jsxs)("div",{...L.getStyles("itemWrapper",j),children:[y&&(0,s.jsx)("span",{...L.getStyles("itemIcon",j),children:y}),(0,s.jsx)("span",{...L.getStyles("itemLabel",j),children:u})]})})});x.classes=p,x.displayName="@mantine/core/ListItem";let L={type:"unordered"},y=(0,o.Z)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,r.yv)(t),"--list-lh":(0,r.Dp)(t),"--list-spacing":(0,r.bG)(i)}})),j=(0,m.d)((e,t)=>{let i=(0,l.w)("List",L,e),{classNames:n,className:r,style:o,styles:m,unstyled:a,vars:h,children:I,type:x,withPadding:j,icon:f,spacing:b,center:v,listStyleType:w,mod:g,...k}=i,T=(0,d.y)({name:"List",classes:p,props:i,className:r,style:o,classNames:n,styles:m,unstyled:a,vars:h,varsResolver:y});return(0,s.jsx)(u,{value:{center:v,icon:f,getStyles:T},children:(0,s.jsx)(c.x,{...T("root",{style:{listStyleType:w}}),component:"unordered"===x?"ul":"ol",mod:[{"with-padding":j},g],ref:t,...k,children:I})})});j.classes=p,j.displayName="@mantine/core/List",j.Item=x;let f=`
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
`,b={type:"configurator",component:function(e){return(0,s.jsxs)(j,{...e,children:[(0,s.jsx)(j.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(j.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(j.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(j.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(j.Item,{children:"Submit a pull request once you are done"})]})},code:f,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var v=i(97799),w=i(45287),g=i(67925),k=i(58898);let T=`
import { List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
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
            <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`,S={type:"code",centered:!0,maxWidth:500,component:function(){return(0,s.jsxs)(j,{spacing:"xs",size:"sm",center:!0,icon:(0,s.jsx)(g.k,{color:"teal",size:24,radius:"xl",children:(0,s.jsx)(v.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}})}),children:[(0,s.jsx)(j.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(j.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(j.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(j.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(j.Item,{icon:(0,s.jsx)(g.k,{color:"blue",size:24,radius:"xl",children:(0,s.jsx)(w.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}})}),children:"Submit a pull request once you are done"})]})},code:T},C=`
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
`,N={type:"code",component:function(){return(0,s.jsxs)(j,{listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),(0,s.jsx)(j.Item,{children:"First order item"}),(0,s.jsxs)(j.Item,{children:["First order item with list",(0,s.jsxs)(j,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Nested item"}),(0,s.jsx)(j.Item,{children:"Nested item"}),(0,s.jsxs)(j.Item,{children:["Nested item with list",(0,s.jsxs)(j,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Event more nested"}),(0,s.jsx)(j.Item,{children:"Event more nested"})]})]}),(0,s.jsx)(j.Item,{children:"Nested item"})]})]}),(0,s.jsx)(j.Item,{children:"First order item"})]})},code:C};var _=i(79016),z=i(33638);let E=(0,_.A)(z.us.List);function F(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i,{data:b}),"\n",(0,s.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,s.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,s.jsx)(t.code,{children:"0"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,s.jsx)(i,{data:S}),"\n",(0,s.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,s.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,s.jsx)(i,{data:N})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(E,{...e,children:(0,s.jsx)(F,{...e})})}},67925:function(e,t,i){"use strict";i.d(t,{k:function(){return h}});var s=i(52322);i(2784);var n=i(91482),r=i(11200),o=i(38483),l=i(46690),d=i(28559),c=i(82027),m={root:"m_7341320d"};let a={},u=(0,r.Z)((e,{size:t,radius:i,variant:s,gradient:r,color:o,autoContrast:l})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:s||"filled",autoContrast:l});return{root:{"--ti-size":(0,n.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,n.H5)(i),"--ti-bg":o||s?d.background:void 0,"--ti-color":o||s?d.color:void 0,"--ti-bd":o||s?d.border:void 0}}}),h=(0,c.d)((e,t)=>{let i=(0,o.w)("ThemeIcon",a,e),{classNames:n,className:r,style:c,styles:h,unstyled:p,vars:I,autoContrast:x,...L}=i,y=(0,l.y)({name:"ThemeIcon",classes:m,props:i,className:r,style:c,classNames:n,styles:h,unstyled:p,vars:I,varsResolver:u});return(0,s.jsx)(d.x,{ref:t,...y("root"),...L})});h.classes=m,h.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=77974)}),_N_E=e.O()}]);
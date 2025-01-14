(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5392],{77974:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(63353)}])},63353:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return C}});var s=i(52322),n=i(45392);i(2784);var r=i(91482),o=i(11200),l=i(38483),d=i(46690),c=i(28559),m=i(82027);let[a,u]=(0,i(89106).R)("List component was not found in tree");var h={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let p={},I=(0,m.d5)((e,t)=>{let{classNames:i,className:n,style:r,styles:o,vars:d,icon:m,children:a,mod:h,...I}=(0,l.w)("ListItem",p,e),x=u(),L=m||x.icon,j={classNames:i,styles:o};return(0,s.jsx)(c.x,{...x.getStyles("item",{...j,className:n,style:r}),component:"li",mod:[{"with-icon":!!L,centered:x.center},h],ref:t,...I,children:(0,s.jsxs)("div",{...x.getStyles("itemWrapper",j),children:[L&&(0,s.jsx)("span",{...x.getStyles("itemIcon",j),children:L}),(0,s.jsx)("span",{...x.getStyles("itemLabel",j),children:a})]})})});I.classes=h,I.displayName="@mantine/core/ListItem";let x={type:"unordered"},L=(0,o.Z)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,r.yv)(t),"--list-lh":(0,r.Dp)(t),"--list-spacing":(0,r.bG)(i)}})),j=(0,m.d5)((e,t)=>{let i=(0,l.w)("List",x,e),{classNames:n,className:r,style:o,styles:m,unstyled:u,vars:p,children:I,type:j,withPadding:y,icon:f,spacing:b,center:v,listStyleType:w,mod:g,...k}=i,T=(0,d.y)({name:"List",classes:h,props:i,className:r,style:o,classNames:n,styles:m,unstyled:u,vars:p,varsResolver:L});return(0,s.jsx)(a,{value:{center:v,icon:f,getStyles:T},children:(0,s.jsx)(c.x,{...T("root",{style:{listStyleType:w}}),component:"unordered"===j?"ul":"ol",mod:[{"with-padding":y},g],ref:t,...k,children:I})})});j.classes=h,j.displayName="@mantine/core/List",j.Item=I;let y={type:"configurator",component:function(e){return(0,s.jsxs)(j,{...e,children:[(0,s.jsx)(j.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(j.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(j.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(j.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(j.Item,{children:"Submit a pull request once you are done"})]})},code:`
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
`,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var f=i(40848),b=i(90982),v=i(67925);let w={type:"code",centered:!0,maxWidth:500,component:function(){return(0,s.jsxs)(j,{spacing:"xs",size:"sm",center:!0,icon:(0,s.jsx)(v.k,{color:"teal",size:24,radius:"xl",children:(0,s.jsx)(f.Z,{size:16})}),children:[(0,s.jsx)(j.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(j.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(j.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(j.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(j.Item,{icon:(0,s.jsx)(v.k,{color:"blue",size:24,radius:"xl",children:(0,s.jsx)(b.Z,{size:16})}),children:"Submit a pull request once you are done"})]})},code:`
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
`},g={type:"code",component:function(){return(0,s.jsxs)(j,{listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),(0,s.jsx)(j.Item,{children:"First order item"}),(0,s.jsxs)(j.Item,{children:["First order item with list",(0,s.jsxs)(j,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Nested item"}),(0,s.jsx)(j.Item,{children:"Nested item"}),(0,s.jsxs)(j.Item,{children:["Nested item with list",(0,s.jsxs)(j,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(j.Item,{children:"Event more nested"}),(0,s.jsx)(j.Item,{children:"Event more nested"})]})]}),(0,s.jsx)(j.Item,{children:"Nested item"})]})]}),(0,s.jsx)(j.Item,{children:"First order item"})]})},code:`
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
`};var k=i(54078),T=i(15019);let S=(0,k.A)(T.us.List);function z(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i,{data:y}),"\n",(0,s.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,s.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,s.jsx)(t.code,{children:"0"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,s.jsx)(i,{data:w}),"\n",(0,s.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,s.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,s.jsx)(i,{data:g})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(S,{...e,children:(0,s.jsx)(z,{...e})})}},40848:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var s=(0,i(73681).Z)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},67925:function(e,t,i){"use strict";i.d(t,{k:function(){return h}});var s=i(52322);i(2784);var n=i(91482),r=i(11200),o=i(38483),l=i(46690),d=i(28559),c=i(82027),m={root:"m_7341320d"};let a={},u=(0,r.Z)((e,{size:t,radius:i,variant:s,gradient:r,color:o,autoContrast:l})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:s||"filled",autoContrast:l});return{root:{"--ti-size":(0,n.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,n.H5)(i),"--ti-bg":o||s?d.background:void 0,"--ti-color":o||s?d.color:void 0,"--ti-bd":o||s?d.border:void 0}}}),h=(0,c.d5)((e,t)=>{let i=(0,o.w)("ThemeIcon",a,e),{classNames:n,className:r,style:c,styles:h,unstyled:p,vars:I,autoContrast:x,...L}=i,j=(0,l.y)({name:"ThemeIcon",classes:m,props:i,className:r,style:c,classNames:n,styles:h,unstyled:p,vars:I,varsResolver:u});return(0,s.jsx)(d.x,{ref:t,...j("root"),...L})});h.classes=m,h.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=77974)}),_N_E=e.O()}]);
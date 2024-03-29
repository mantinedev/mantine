(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5392],{97799:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(99882).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},77974:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(63353)}])},63353:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var n=i(52322),r=i(45392),s=i(2784),o=i(91482),l=i(11200),m=i(38483),c=i(62378),a=i(28559),d=i(82027),u=i(89106);let[p,h]=(0,u.R)("List component was not found in tree");var I={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let L={},y=(0,d.d)((e,t)=>{let i=(0,m.w)("ListItem",L,e),{classNames:n,className:r,style:o,styles:l,vars:c,icon:d,children:u,mod:p,...I}=i,y=h(),f=d||y.icon,E={classNames:n,styles:l};return s.createElement(a.x,{...y.getStyles("item",{...E,className:r,style:o}),component:"li",mod:[{"with-icon":!!f,centered:y.center},p],ref:t,...I},s.createElement("div",{...y.getStyles("itemWrapper",E)},f&&s.createElement("span",{...y.getStyles("itemIcon",E)},f),s.createElement("span",{...y.getStyles("itemLabel",E)},u)))});y.classes=I,y.displayName="@mantine/core/ListItem";let f={type:"unordered"},E=(0,l.Z)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,o.yv)(t),"--list-lh":(0,o.Dp)(t),"--list-spacing":(0,o.bG)(i)}})),b=(0,d.d)((e,t)=>{let i=(0,m.w)("List",f,e),{classNames:n,className:r,style:o,styles:l,unstyled:d,vars:u,children:h,type:L,withPadding:y,icon:b,spacing:w,center:v,listStyleType:g,mod:x,...j}=i,k=(0,c.y)({name:"List",classes:I,props:i,className:r,style:o,classNames:n,styles:l,unstyled:d,vars:u,varsResolver:E});return s.createElement(p,{value:{center:v,icon:b,getStyles:k}},s.createElement(a.x,{...k("root",{style:{listStyleType:g}}),component:"unordered"===L?"ul":"ol",mod:[{"with-padding":y},x],ref:t,...j},h))});b.classes=I,b.displayName="@mantine/core/List",b.Item=y;let w=`
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
`,v={type:"configurator",component:function(e){return s.createElement(b,{...e},s.createElement(b.Item,null,"Clone or download repository from GitHub"),s.createElement(b.Item,null,"Install dependencies with yarn"),s.createElement(b.Item,null,"To start development server run npm start command"),s.createElement(b.Item,null,"Run tests to make sure your changes do not break the build"),s.createElement(b.Item,null,"Submit a pull request once you are done"))},code:w,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var g=i(97799),x=i(45287),j=i(67925),k=i(58898);let T=`
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
`,S={type:"code",centered:!0,maxWidth:500,component:function(){return s.createElement(b,{spacing:"xs",size:"sm",center:!0,icon:s.createElement(j.k,{color:"teal",size:24,radius:"xl"},s.createElement(g.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}))},s.createElement(b.Item,null,"Clone or download repository from GitHub"),s.createElement(b.Item,null,"Install dependencies with yarn"),s.createElement(b.Item,null,"To start development server run npm start command"),s.createElement(b.Item,null,"Run tests to make sure your changes do not break the build"),s.createElement(b.Item,{icon:s.createElement(j.k,{color:"blue",size:24,radius:"xl"},s.createElement(x.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}))},"Submit a pull request once you are done"))},code:T},C=`
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
`,N={type:"code",component:function(){return s.createElement(b,{listStyleType:"disc"},s.createElement(b.Item,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"),s.createElement(b.Item,null,"First order item"),s.createElement(b.Item,null,"First order item with list",s.createElement(b,{withPadding:!0,listStyleType:"disc"},s.createElement(b.Item,null,"Nested item"),s.createElement(b.Item,null,"Nested item"),s.createElement(b.Item,null,"Nested item with list",s.createElement(b,{withPadding:!0,listStyleType:"disc"},s.createElement(b.Item,null,"Event more nested"),s.createElement(b.Item,null,"Event more nested"))),s.createElement(b.Item,null,"Nested item"))),s.createElement(b.Item,null,"First order item"))},code:C};var _=i(79016),z=i(33638);let F=(0,_.A)(z.us.List);function P(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,n.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,n.jsx)(t.code,{children:"0"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,n.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,n.jsx)(i,{data:N})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,{...e,children:(0,n.jsx)(P,{...e})})}},67925:function(e,t,i){"use strict";i.d(t,{k:function(){return p}});var n=i(2784),r=i(91482),s=i(11200),o=i(38483),l=i(62378),m=i(28559),c=i(82027),a={root:"m_7341320d"};let d={},u=(0,s.Z)((e,{size:t,radius:i,variant:n,gradient:s,color:o,autoContrast:l})=>{let m=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:s,variant:n||"filled",autoContrast:l});return{root:{"--ti-size":(0,r.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,r.H5)(i),"--ti-bg":o||n?m.background:void 0,"--ti-color":o||n?m.color:void 0,"--ti-bd":o||n?m.border:void 0}}}),p=(0,c.d)((e,t)=>{let i=(0,o.w)("ThemeIcon",d,e),{classNames:r,className:s,style:c,styles:p,unstyled:h,vars:I,autoContrast:L,...y}=i,f=(0,l.y)({name:"ThemeIcon",classes:a,props:i,className:s,style:c,classNames:r,styles:p,unstyled:h,vars:I,varsResolver:u});return n.createElement(m.x,{ref:t,...f("root"),...y})});p.classes=a,p.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=77974)}),_N_E=e.O()}]);
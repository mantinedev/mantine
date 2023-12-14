(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5392],{43310:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},82535:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(31360)}])},31360:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var n=i(24246),r=i(71670),s=i(27378),o=i(92082),l=i(83453),m=i(96739),c=i(6231),a=i(56589),d=i(20410),u=i(71656);let[p,h]=(0,u.R)("List component was not found in tree");var I={root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"};let L={},y=(0,d.d)((e,t)=>{let i=(0,m.w)("ListItem",L,e),{classNames:n,className:r,style:o,styles:l,vars:c,icon:d,children:u,...p}=i,I=h(),y=d||I.icon,f={classNames:n,styles:l};return s.createElement(a.x,{...I.getStyles("item",{...f,className:r,style:o}),component:"li",mod:{"with-icon":!!y,centered:I.center},ref:t,...p},s.createElement("div",{...I.getStyles("itemWrapper",f)},y&&s.createElement("span",{...I.getStyles("itemIcon",f)},y),s.createElement("span",{...I.getStyles("itemLabel",f)},u)))});y.classes=I,y.displayName="@mantine/core/ListItem";let f={type:"unordered"},E=(0,l.Z)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,o.yv)(t),"--list-lh":(0,o.Dp)(t),"--list-spacing":(0,o.bG)(i)}})),b=(0,d.d)((e,t)=>{let i=(0,m.w)("List",f,e),{classNames:n,className:r,style:o,styles:l,unstyled:d,vars:u,children:h,type:L,withPadding:y,icon:b,spacing:w,center:v,listStyleType:g,...x}=i,j=(0,c.y)({name:"List",classes:I,props:i,className:r,style:o,classNames:n,styles:l,unstyled:d,vars:u,varsResolver:E});return s.createElement(p,{value:{center:v,icon:b,getStyles:j}},s.createElement(a.x,{...j("root",{style:{listStyleType:g}}),component:"unordered"===L?"ul":"ol",mod:{"with-padding":y},ref:t,...x},h))});b.classes=I,b.displayName="@mantine/core/List",b.Item=y;let w=`
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
`,v={type:"configurator",component:function(e){return s.createElement(b,{...e},s.createElement(b.Item,null,"Clone or download repository from GitHub"),s.createElement(b.Item,null,"Install dependencies with yarn"),s.createElement(b.Item,null,"To start development server run npm start command"),s.createElement(b.Item,null,"Run tests to make sure your changes do not break the build"),s.createElement(b.Item,null,"Submit a pull request once you are done"))},code:w,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var g=i(43310),x=i(24948),j=i(81036),k=i(71078);let T=`
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
`,N={type:"code",component:function(){return s.createElement(b,{listStyleType:"disc"},s.createElement(b.Item,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"),s.createElement(b.Item,null,"First order item"),s.createElement(b.Item,null,"First order item with list",s.createElement(b,{withPadding:!0,listStyleType:"disc"},s.createElement(b.Item,null,"Nested item"),s.createElement(b.Item,null,"Nested item"),s.createElement(b.Item,null,"Nested item with list",s.createElement(b,{withPadding:!0,listStyleType:"disc"},s.createElement(b.Item,null,"Event more nested"),s.createElement(b.Item,null,"Event more nested"))),s.createElement(b.Item,null,"Nested item"))),s.createElement(b.Item,null,"First order item"))},code:C};var z=i(3916),_=i(30289);let F=(0,z.A)(_.us.List);function P(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,n.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,n.jsx)(t.code,{children:"0"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,n.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,n.jsx)(i,{data:N})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,{...e,children:(0,n.jsx)(P,{...e})})}},81036:function(e,t,i){"use strict";i.d(t,{k:function(){return p}});var n=i(27378),r=i(92082),s=i(83453),o=i(96739),l=i(6231),m=i(56589),c=i(20410),a={root:"m-7341320d"};let d={},u=(0,s.Z)((e,{size:t,radius:i,variant:n,gradient:s,color:o})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:s,variant:n||"filled"});return{root:{"--ti-size":(0,r.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,r.H5)(i),"--ti-bg":o||n?l.background:void 0,"--ti-color":o||n?l.color:void 0,"--ti-bd":o||n?l.border:void 0}}}),p=(0,c.d)((e,t)=>{let i=(0,o.w)("ThemeIcon",d,e),{classNames:r,className:s,style:c,styles:p,unstyled:h,vars:I,...L}=i,y=(0,l.y)({name:"ThemeIcon",classes:a,props:i,className:s,style:c,classNames:r,styles:p,unstyled:h,vars:I,varsResolver:u});return n.createElement(m.x,{ref:t,...y("root"),...L})});p.classes=a,p.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=82535)}),_N_E=e.O()}]);
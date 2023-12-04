(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5392],{43310:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},82535:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(31360)}])},31360:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var n=i(24246),r=i(71670),s=i(3916),o=i(30289),l=i(27378),m=i(92082),c=i(83453),d=i(96739),a=i(6231),u=i(56589),p=i(20410),h=i(71656);let[I,L]=(0,h.R)("List component was not found in tree");var y={root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"};let f={},E=(0,p.d)((e,t)=>{let i=(0,d.w)("ListItem",f,e),{classNames:n,className:r,style:s,styles:o,vars:m,icon:c,children:a,...p}=i,h=L(),I=c||h.icon,y={classNames:n,styles:o};return l.createElement(u.x,{...h.getStyles("item",{...y,className:r,style:s}),component:"li",mod:{"with-icon":!!I,centered:h.center},ref:t,...p},l.createElement("div",{...h.getStyles("itemWrapper",y)},I&&l.createElement("span",{...h.getStyles("itemIcon",y)},I),l.createElement("span",{...h.getStyles("itemLabel",y)},a)))});E.classes=y,E.displayName="@mantine/core/ListItem";let b={type:"unordered"},w=(0,c.Z)((e,{size:t,spacing:i})=>({root:{"--list-fz":(0,m.yv)(t),"--list-lh":(0,m.Dp)(t),"--list-spacing":(0,m.bG)(i)}})),g=(0,p.d)((e,t)=>{let i=(0,d.w)("List",b,e),{classNames:n,className:r,style:s,styles:o,unstyled:m,vars:c,children:p,type:h,withPadding:L,icon:f,spacing:E,center:g,listStyleType:v,...x}=i,j=(0,a.y)({name:"List",classes:y,props:i,className:r,style:s,classNames:n,styles:o,unstyled:m,vars:c,varsResolver:w});return l.createElement(I,{value:{center:g,icon:f,getStyles:j}},l.createElement(u.x,{...j("root",{style:{listStyleType:v}}),component:"unordered"===h?"ul":"ol",mod:{"with-padding":L},ref:t,...x},p))});g.classes=y,g.displayName="@mantine/core/List",g.Item=E;let v=`
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
`,x={type:"configurator",component:function(e){return l.createElement(g,{...e},l.createElement(g.Item,null,"Clone or download repository from GitHub"),l.createElement(g.Item,null,"Install dependencies with yarn"),l.createElement(g.Item,null,"To start development server run npm start command"),l.createElement(g.Item,null,"Run tests to make sure your changes do not break the build"),l.createElement(g.Item,null,"Submit a pull request once you are done"))},code:v,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var j=i(43310),k=i(24948),T=i(81036),S=i(71078);let C=`
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
`,N={type:"code",centered:!0,maxWidth:500,component:function(){return l.createElement(g,{spacing:"xs",size:"sm",center:!0,icon:l.createElement(T.k,{color:"teal",size:24,radius:"xl"},l.createElement(j.Z,{style:{width:(0,S.h)(16),height:(0,S.h)(16)}}))},l.createElement(g.Item,null,"Clone or download repository from GitHub"),l.createElement(g.Item,null,"Install dependencies with yarn"),l.createElement(g.Item,null,"To start development server run npm start command"),l.createElement(g.Item,null,"Run tests to make sure your changes do not break the build"),l.createElement(g.Item,{icon:l.createElement(T.k,{color:"blue",size:24,radius:"xl"},l.createElement(k.Z,{style:{width:(0,S.h)(16),height:(0,S.h)(16)}}))},"Submit a pull request once you are done"))},code:C},z=`
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
`,_={type:"code",component:function(){return l.createElement(g,{listStyleType:"disc"},l.createElement(g.Item,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"),l.createElement(g.Item,null,"First order item"),l.createElement(g.Item,null,"First order item with list",l.createElement(g,{withPadding:!0,listStyleType:"disc"},l.createElement(g.Item,null,"Nested item"),l.createElement(g.Item,null,"Nested item"),l.createElement(g.Item,null,"Nested item with list",l.createElement(g,{withPadding:!0,listStyleType:"disc"},l.createElement(g.Item,null,"Event more nested"),l.createElement(g.Item,null,"Event more nested"))),l.createElement(g.Item,null,"Nested item"))),l.createElement(g.Item,null,"First order item"))},code:z},F=(0,s.A)(o.us.List);function P(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,n.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,n.jsx)(t.code,{children:"0"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,n.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,n.jsx)(i,{data:_})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,{...e,children:(0,n.jsx)(P,{...e})})}},81036:function(e,t,i){"use strict";i.d(t,{k:function(){return p}});var n=i(27378),r=i(92082),s=i(83453),o=i(96739),l=i(6231),m=i(56589),c=i(20410),d={root:"m-7341320d"};let a={},u=(0,s.Z)((e,{size:t,radius:i,variant:n,gradient:s,color:o})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:s,variant:n||"filled"});return{root:{"--ti-size":(0,r.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,r.H5)(i),"--ti-bg":o||n?l.background:void 0,"--ti-color":o||n?l.color:void 0,"--ti-bd":o||n?l.border:void 0}}}),p=(0,c.d)((e,t)=>{let i=(0,o.w)("ThemeIcon",a,e),{classNames:r,className:s,style:c,styles:p,unstyled:h,vars:I,...L}=i,y=(0,l.y)({name:"ThemeIcon",classes:d,props:i,className:s,style:c,classNames:r,styles:p,unstyled:h,vars:I,varsResolver:u});return n.createElement(m.x,{ref:t,...y("root"),...L})});p.classes=d,p.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=82535)}),_N_E=e.O()}]);
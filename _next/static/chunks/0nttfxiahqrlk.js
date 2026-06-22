(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let i={};for(var l in e)t(i,l,{get:e[l],enumerable:!0});return a||t(i,Symbol.toStringTag,{value:"Module"}),i}])},467269,e=>{"use strict";var t=e.i(648863),a=e.i(433512),i=e.i(481178),l=e.i(44091),s=e.i(391466),n=e.i(275519),o=e.i(232471);let[r,m]=(0,e.i(386179).createSafeContext)("DataList component was not found in tree");var c={root:"m_f84d0407",item:"m_f848fe38",itemLabel:"m_c791b39c",itemValue:"m_c81ec619"},d=e.i(391398);let L=(0,n.factory)(e=>{let{classNames:t,className:a,style:i,styles:s,vars:n,children:r,mod:c,...L}=(0,l.useProps)("DataListItem",null,e),u=m();return(0,d.jsx)(o.Box,{...u.getStyles("item",{classNames:t,styles:s,className:a,style:i}),mod:c,...L,children:r})});L.classes=c,L.displayName="@mantine/core/DataListItem";let u=(0,n.factory)(e=>{let{classNames:t,className:a,style:i,styles:s,vars:n,children:r,mod:c,...L}=(0,l.useProps)("DataListItemLabel",null,e),u=m();return(0,d.jsx)(o.Box,{component:"dt",...u.getStyles("itemLabel",{classNames:t,styles:s,className:a,style:i}),mod:c,...L,children:r})});u.classes=c,u.displayName="@mantine/core/DataListItemLabel";let D=(0,n.factory)(e=>{let{classNames:t,className:a,style:i,styles:s,vars:n,children:r,mod:c,...L}=(0,l.useProps)("DataListItemValue",null,e),u=m();return(0,d.jsx)(o.Box,{component:"dd",...u.getStyles("itemValue",{classNames:t,styles:s,className:a,style:i}),mod:c,...L,children:r})});D.classes=c,D.displayName="@mantine/core/DataListItemValue";let h={orientation:"horizontal"},I=(0,i.createVarsResolver)((e,{size:t,gap:i,labelWidth:l})=>({root:{"--data-list-fz":(0,a.getFontSize)(t),"--data-list-lh":(0,a.getLineHeight)(t),"--data-list-gap":(0,a.getSpacing)(i),"--data-list-label-width":void 0!==l?"number"==typeof l?`${l}px`:l:void 0}})),p=(0,n.factory)(e=>{let t=(0,l.useProps)("DataList",h,e),{classNames:a,className:i,style:n,styles:m,unstyled:L,vars:u,children:D,gap:p,orientation:x,withDivider:j,labelWidth:b,mod:v,attributes:V,...f}=t,y=(0,s.useStyles)({name:"DataList",classes:c,props:t,className:i,style:n,classNames:a,styles:m,unstyled:L,attributes:V,vars:u,varsResolver:I});return(0,d.jsx)(r,{value:{getStyles:y},children:(0,d.jsx)(o.Box,{...y("root"),component:"dl",mod:[{orientation:x,"with-divider":j},v],...f,children:D})})});p.classes=c,p.varsResolver=I,p.displayName="@mantine/core/DataList",p.Item=L,p.ItemLabel=u,p.ItemValue=D;let x=[{label:"Name",value:"John Doe"},{label:"Email",value:"john@example.com"},{label:"Role",value:"Software Engineer"},{label:"Location",value:"San Francisco, CA"}],j={type:"configurator",component:function(e){return(0,d.jsx)(p,{...e,children:x.map(e=>(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:e.label}),(0,d.jsx)(p.ItemValue,{children:e.value})]},e.label))})},code:`
import { DataList } from '@mantine/core';

const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
];

function Demo() {
  return (
    <DataList{{props}}>
      {data.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"orientation",type:"segmented",data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],initialValue:"vertical",libraryValue:"vertical"},{prop:"withDivider",type:"boolean",libraryValue:!1,initialValue:!1}]},b={type:"code",component:function(){return(0,d.jsxs)(p,{withDivider:!0,children:[(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Name"}),(0,d.jsx)(p.ItemValue,{children:"John Doe"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Email"}),(0,d.jsx)(p.ItemValue,{children:"john@example.com"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Role"}),(0,d.jsx)(p.ItemValue,{children:"Software Engineer"})]})]})},code:`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`},v={type:"code",component:function(){return(0,d.jsxs)(p,{orientation:"vertical",withDivider:!0,children:[(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Name"}),(0,d.jsx)(p.ItemValue,{children:"John Doe"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Email"}),(0,d.jsx)(p.ItemValue,{children:"john@example.com"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Role"}),(0,d.jsx)(p.ItemValue,{children:"Software Engineer"})]})]})},code:`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList orientation="vertical" withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`};var V=e.i(770076);let f=`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList{{props}}>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`,y={type:"styles-api",data:V.DataListStylesApi,component:function(e){return(0,d.jsxs)(p,{...e,children:[(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Name"}),(0,d.jsx)(p.ItemValue,{children:"John Doe"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Email"}),(0,d.jsx)(p.ItemValue,{children:"john@example.com"})]}),(0,d.jsxs)(p.Item,{children:[(0,d.jsx)(p.ItemLabel,{children:"Role"}),(0,d.jsx)(p.ItemValue,{children:"Software Engineer"})]})]})},code:f,centered:!0};var g=(0,t.__exportAll)({divider:()=>b,stylesApi:()=>y,usage:()=>j,vertical:()=>v});e.s(["DataListDemos",0,g],467269)},495142,e=>{"use strict";var t=e.i(391398),a=e.i(38856),i=e.i(467269);e.i(603441);var l=e.i(62558);e.i(457450);var s=e.i(418026);let n=(0,l.Layout)(s.MDX_DATA.DataList);function o(e){let l={code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{Demo:s}=l;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"DataList"})," component renders a description list (",(0,t.jsx)(l.code,{children:"dl"}),") element with label-value pairs.\nIt uses semantic ",(0,t.jsx)(l.code,{children:"dt"})," and ",(0,t.jsx)(l.code,{children:"dd"})," HTML elements."]}),"\n",(0,t.jsx)(s,{data:i.DataListDemos.usage}),"\n",(0,t.jsx)(l.h2,{id:"with-divider",children:"With divider"}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"withDivider"})," prop to add a border between items:"]}),"\n",(0,t.jsx)(s,{data:i.DataListDemos.divider}),"\n",(0,t.jsx)(l.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:'orientation="vertical"'})," to stack label on top of value within each item:"]}),"\n",(0,t.jsx)(s,{data:i.DataListDemos.vertical})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})})}])},1037,(e,t,a)=>{let i="/core/data-list";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(495142)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
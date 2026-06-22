(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var r=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let s={};for(var a in e)r(s,a,{get:e[a],enumerable:!0});return t||r(s,Symbol.toStringTag,{value:"Module"}),s}])},368395,e=>{"use strict";var r=e.i(826639),t=e.i(433512),s=e.i(481178),a=e.i(44091),n=e.i(391466),o=e.i(275519),i=e.i(232471),c={root:"m_8b3717df",breadcrumb:"m_f678d540",separator:"m_3b8f2208"},m=e.i(191788),d=e.i(391398);let l={separator:"/"},u=(0,s.createVarsResolver)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,t.getSpacing)(r)}})),h=(0,o.factory)(e=>{let t=(0,a.useProps)("Breadcrumbs",l,e),{classNames:s,className:o,style:h,styles:p,unstyled:b,vars:f,children:x,separator:g,separatorMargin:j,attributes:_,...v}=t,B=(0,n.useStyles)({name:"Breadcrumbs",classes:c,props:t,className:o,style:h,classNames:s,styles:p,unstyled:b,attributes:_,vars:f,varsResolver:u}),y=m.Children.toArray(x).reduce((e,t,s,a)=>{let n=(0,r.isElement)(t)?(0,m.cloneElement)(t,{...B("breadcrumb",{className:t.props?.className}),key:s}):(0,m.createElement)("div",{...B("breadcrumb"),key:s},t);return e.push(n),s!==a.length-1&&e.push((0,m.createElement)(i.Box,{...B("separator"),key:`separator-${s}`},g)),e},[]);return(0,d.jsx)(i.Box,{...B("root"),...v,children:y})});h.classes=c,h.varsResolver=u,h.displayName="@mantine/core/Breadcrumbs",e.s(["Breadcrumbs",0,h],368395)},327017,e=>{"use strict";var r=e.i(391398),t=e.i(38856),s=e.i(648863),a=e.i(79897),n=e.i(368395);let o=`
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
`,i=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,t)=>(0,r.jsx)(a.Anchor,{href:e.href,children:e.title},t)),c={type:"code",code:o,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Breadcrumbs,{children:i}),(0,r.jsx)(n.Breadcrumbs,{separator:"→",mt:"xs",separatorMargin:"md",classNames:{separator:"mantine-rotate-rtl"},children:i})]})}};var m=(0,s.__exportAll)({usage:()=>c});e.i(603441);var d=e.i(62558);e.i(457450);var l=e.i(418026);let u=(0,d.Layout)(l.MDX_DATA.Breadcrumbs);function h(e){let s={code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{Demo:a}=s;return a||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,r.jsx)(s.code,{children:"/"}),") between them:"]}),"\n",(0,r.jsx)(a,{data:m.usage})]})}e.s(["default",0,function(e={}){return(0,r.jsx)(u,{...e,children:(0,r.jsx)(h,{...e})})}],327017)},669647,(e,r,t)=>{let s="/core/breadcrumbs";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(327017)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([s])})},648761,e=>{e.v(r=>Promise.all(["static/chunks/22379_btw709h.js"].map(r=>e.l(r))).then(()=>r(493594)))},828805,e=>{e.v(r=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(r=>e.l(r))).then(()=>r(879466)))}]);
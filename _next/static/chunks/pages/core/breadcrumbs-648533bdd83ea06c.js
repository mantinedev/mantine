(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46146],{5162:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return t(18976)}])},18976:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var a=t(31085),n=t(71184),s=t(12129),o=t(38142);let c=`
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
      <Breadcrumbs separator="\u2192" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
`,i=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,r)=>(0,a.jsx)(s.M,{href:e.href,children:e.title},r)),d={type:"code",code:c,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.B,{children:i}),(0,a.jsx)(o.B,{separator:"→",mt:"xs",separatorMargin:"md",classNames:{separator:"mantine-rotate-rtl"},children:i})]})}};var m=t(85954),l=t(38215);let u=(0,m.P)(l.XZ.Breadcrumbs);function h(e){let r={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,a.jsx)(r.code,{children:"/"}),") between them:"]}),"\n",(0,a.jsx)(t,{data:d})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...e,children:(0,a.jsx)(h,{...e})})}},38142:(e,r,t)=>{"use strict";t.d(r,{B:()=>b});var a=t(31085),n=t(14041),s=t(40880),o=t(33450),c=t(7098),i=t(29686),d=t(69564),m=t(34056),l=t(6754),u={root:"m_8b3717df",breadcrumb:"m_f678d540",separator:"m_3b8f2208"};let h={separator:"/"},p=(0,c.V)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,o.GY)(r)}})),b=(0,l.P9)((e,r)=>{let t=(0,i.Y)("Breadcrumbs",h,e),{classNames:o,className:c,style:l,styles:b,unstyled:f,vars:x,children:_,separator:j,separatorMargin:B,...g}=t,k=(0,d.I)({name:"Breadcrumbs",classes:u,props:t,className:c,style:l,classNames:o,styles:b,unstyled:f,vars:x,varsResolver:p}),v=n.Children.toArray(_).reduce((e,r,t,a)=>{let o=(0,s.v)(r)?(0,n.cloneElement)(r,{...k("breadcrumb",{className:r.props?.className}),key:t}):(0,n.createElement)("div",{...k("breadcrumb"),key:t},r);return e.push(o),t!==a.length-1&&e.push((0,n.createElement)(m.a,{...k("separator"),key:`separator-${t}`},j)),e},[]);return(0,a.jsx)(m.a,{ref:r,...k("root"),...g,children:v})});b.classes=u,b.displayName="@mantine/core/Breadcrumbs"}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(5162)),_N_E=e.O()}]);
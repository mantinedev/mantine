(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1728],{91917:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return t(82479)}])},82479:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(24246),a=t(71670),s=t(3916),o=t(30289),c=t(27378),i=t(9136),m=t(24422);let u=`
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
      <Breadcrumbs separator="\u2192" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`,d=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,r)=>c.createElement(i.e,{href:e.href,key:r},e.title)),l={type:"code",code:u,component:function(){return c.createElement(c.Fragment,null,c.createElement(m.O,null,d),c.createElement(m.O,{separator:"→",mt:"xs",classNames:{separator:"mantine-rotate-rtl"}},d))}},h=(0,s.A)(o.us.Breadcrumbs);function p(e){let r={code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,n.jsx)(r.code,{children:"/"}),") between them:"]}),"\n",(0,n.jsx)(t,{data:l})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(p,{...e})})}},24422:function(e,r,t){"use strict";t.d(r,{O:function(){return p}});var n=t(27378),a=t(513),s=t(92082),o=t(83453),c=t(96739),i=t(6231),m=t(56589),u=t(20410),d={root:"m-8b3717df",breadcrumb:"m-f678d540",separator:"m-3b8f2208"};let l={separator:"/"},h=(0,o.Z)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,s.bG)(r)}})),p=(0,u.d)((e,r)=>{let t=(0,c.w)("Breadcrumbs",l,e),{classNames:s,className:o,style:u,styles:p,unstyled:f,vars:b,children:x,separator:E,separatorMargin:k,...y}=t,_=(0,i.y)({name:"Breadcrumbs",classes:d,props:t,className:o,style:u,classNames:s,styles:p,unstyled:f,vars:b,varsResolver:h}),B=n.Children.toArray(x).reduce((e,r,t,s)=>{let o=(0,a.k)(r)?n.cloneElement(r,{..._("breadcrumb",{className:r.props?.className}),key:t}):n.createElement("div",{..._("breadcrumb"),key:t},r);return e.push(o),t!==s.length-1&&e.push(n.createElement(m.x,{..._("separator"),key:`separator-${t}`},E)),e},[]);return n.createElement(m.x,{ref:r,..._("root"),...y},B)});p.classes=d,p.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=91917)}),_N_E=e.O()}]);
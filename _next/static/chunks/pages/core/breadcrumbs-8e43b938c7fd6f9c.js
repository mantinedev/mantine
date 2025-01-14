(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21728],{16311:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return t(3225)}])},3225:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(52322),a=t(45392),s=t(71873),o=t(88319);let c=`
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
`,i=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,r)=>(0,n.jsx)(s.e,{href:e.href,children:e.title},r)),d={type:"code",code:c,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.O,{children:i}),(0,n.jsx)(o.O,{separator:"→",mt:"xs",separatorMargin:"md",classNames:{separator:"mantine-rotate-rtl"},children:i})]})}};var m=t(54078),u=t(15019);let l=(0,m.A)(u.us.Breadcrumbs);function h(e){let r={code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,n.jsx)(r.code,{children:"/"}),") between them:"]}),"\n",(0,n.jsx)(t,{data:d})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})})}},88319:function(e,r,t){"use strict";t.d(r,{O:function(){return f}});var n=t(52322),a=t(2784),s=t(98399),o=t(91482),c=t(11200),i=t(38483),d=t(46690),m=t(28559),u=t(82027),l={root:"m_8b3717df",breadcrumb:"m_f678d540",separator:"m_3b8f2208"};let h={separator:"/"},p=(0,c.Z)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,o.bG)(r)}})),f=(0,u.d5)((e,r)=>{let t=(0,i.w)("Breadcrumbs",h,e),{classNames:o,className:c,style:u,styles:f,unstyled:b,vars:x,children:_,separator:j,separatorMargin:k,...g}=t,y=(0,d.y)({name:"Breadcrumbs",classes:l,props:t,className:c,style:u,classNames:o,styles:f,unstyled:b,vars:x,varsResolver:p}),B=a.Children.toArray(_).reduce((e,r,t,n)=>{let o=(0,s.k)(r)?(0,a.cloneElement)(r,{...y("breadcrumb",{className:r.props?.className}),key:t}):(0,a.createElement)("div",{...y("breadcrumb"),key:t},r);return e.push(o),t!==n.length-1&&e.push((0,a.createElement)(m.x,{...y("separator"),key:`separator-${t}`},j)),e},[]);return(0,n.jsx)(m.x,{ref:r,...y("root"),...g,children:B})});f.classes=l,f.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=16311)}),_N_E=e.O()}]);
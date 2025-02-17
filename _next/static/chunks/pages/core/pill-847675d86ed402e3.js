(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47201],{11345:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pill",function(){return i(87188)}])},87188:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var l=i(31085),o=i(71184),n=i(31778),r={demoWrapper:"m_6874fea5"};let s={type:"configurator",component:function(e){return(0,l.jsx)("div",{className:r.demoWrapper,children:(0,l.jsx)(n.a,{...e,children:"React"})})},code:`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var a=i(87059);let p={type:"code",component:function(){let e=Array(10).fill(0).map((e,t)=>(0,l.jsxs)(n.a,{withRemoveButton:!0,children:["Item ",t]},t));return(0,l.jsx)(a.O,{component:"div",multiline:!0,children:(0,l.jsx)(n.a.Group,{children:e})})},code:`
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`,centered:!0,maxWidth:340};var d=i(53469);let c=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,u={type:"styles-api",data:d.Q,component:function(e){return(0,l.jsx)("div",{className:r.demoWrapper,children:(0,l.jsx)(n.a,{...e,withRemoveButton:!0,style:{flex:0},children:"Test pill"})})},code:c,centered:!0,maxWidth:200};var m=i(85954),h=i(38215);let v=(0,m.P)(h.XZ.Pill);function f(e){let t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Demo:i,StylesApiSelectors:n}=t;return i||P("Demo",!0),n||P("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(i,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti select or tag inputs."]}),"\n",(0,l.jsx)(i,{data:p}),"\n",(0,l.jsx)(n,{component:"Pill"}),"\n",(0,l.jsx)(i,{data:u})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(v,{...e,children:(0,l.jsx)(f,{...e})})}function P(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31778:(e,t,i)=>{"use strict";i.d(t,{a:()=>y});var l=i(31085);i(14041);var o=i(33450),n=i(7098),r=i(29686),s=i(69564),a=i(34056),p=i(6754),d=i(94310),c=i(73418);let[u,m]=(0,i(49128).e)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let v={},f=(0,n.V)((e,{gap:t},{size:i})=>({group:{"--pg-gap":void 0!==t?(0,o.YC)(t):(0,o.YC)(i,"pg-gap")}})),x=(0,p.P9)((e,t)=>{let i=(0,r.Y)("PillGroup",v,e),{classNames:o,className:n,style:p,styles:d,unstyled:m,vars:x,size:P,disabled:j,...y}=i,g=(0,c.n)(),_=g?.size||P||void 0,b=(0,s.I)({name:"PillGroup",classes:h,props:i,className:n,style:p,classNames:o,styles:d,unstyled:m,vars:x,varsResolver:f,stylesCtx:{size:_},rootSelector:"group"});return(0,l.jsx)(u,{value:{size:_,disabled:j},children:(0,l.jsx)(a.a,{ref:t,size:_,...b("group"),...y})})});x.classes=h,x.displayName="@mantine/core/PillGroup";let P={variant:"default"},j=(0,n.V)((e,{radius:t},{size:i})=>({root:{"--pill-fz":(0,o.YC)(i,"pill-fz"),"--pill-height":(0,o.YC)(i,"pill-height"),"--pill-radius":void 0===t?void 0:(0,o.nJ)(t)}})),y=(0,p.P9)((e,t)=>{let i=(0,r.Y)("Pill",P,e),{classNames:o,className:n,style:p,styles:u,unstyled:v,vars:f,variant:x,children:y,withRemoveButton:g,onRemove:_,removeButtonProps:b,radius:w,size:z,disabled:N,mod:C,...I}=i,R=m(),k=(0,c.n)(),B=z||R?.size||void 0,D=k?.variant==="filled"?"contrast":x||"default",E=(0,s.I)({name:"Pill",classes:h,props:i,className:n,style:p,classNames:o,styles:u,unstyled:v,vars:f,varsResolver:j,stylesCtx:{size:B}});return(0,l.jsxs)(a.a,{component:"span",ref:t,variant:D,size:B,...E("root",{variant:D}),mod:[{"with-remove":g&&!N,disabled:N||R?.disabled},C],...I,children:[(0,l.jsx)("span",{...E("label"),children:y}),g&&(0,l.jsx)(d.J,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:v,...b,...E("remove",{className:b?.className,style:b?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),b?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),_?.(),b?.onClick?.(e)}})]})});y.classes=h,y.displayName="@mantine/core/Pill",y.Group=x},73418:(e,t,i)=>{"use strict";i.d(t,{n:()=>o,q:()=>l}),i(14041),i(31085);let[l,o]=(0,i(49128).e)()}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(11345)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72551],{69743:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pill",function(){return n(24869)}])},24869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(52322),o=n(45392),l=n(45855),r="m_6874fea5";let s={type:"configurator",component:function(e){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)(l.D,{...e,children:"React"})})},code:`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var a=n(73063);let c={type:"code",component:function(){let e=Array(10).fill(0).map((e,t)=>(0,i.jsxs)(l.D,{withRemoveButton:!0,children:["Item ",t]},t));return(0,i.jsx)(a.M,{component:"div",multiline:!0,children:(0,i.jsx)(l.D.Group,{children:e})})},code:`
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
`,centered:!0,maxWidth:340};var u=n(77117);let d=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,p={type:"styles-api",data:u.K,component:function(e){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)(l.D,{...e,withRemoveButton:!0,style:{flex:0},children:"Test pill"})})},code:d,centered:!0,maxWidth:200};var m=n(54078),f=n(15019);let h=(0,m.A)(f.us.Pill);function v(e){let t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:n,StylesApiSelectors:l}=t;return n||P("Demo",!0),l||P("StylesApiSelectors",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:s}),"\n",(0,i.jsx)(t.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti select or tag inputs."]}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(l,{component:"Pill"}),"\n",(0,i.jsx)(n,{data:p})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(h,{...e,children:(0,i.jsx)(v,{...e})})}function P(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45855:function(e,t,n){"use strict";n.d(t,{D:function(){return y}});var i=n(52322);n(2784);var o=n(91482),l=n(11200),r=n(38483),s=n(46690),a=n(28559),c=n(82027),u=n(2670),d=n(7450);let[p,m]=(0,n(75336).V)();var f={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let h={},v=(0,l.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,o.ap)(t):(0,o.ap)(n,"pg-gap")}})),x=(0,c.d5)((e,t)=>{let n=(0,r.w)("PillGroup",h,e),{classNames:o,className:l,style:c,styles:u,unstyled:m,vars:x,size:P,disabled:j,...y}=n,g=(0,d.D)(),_=g?.size||P||void 0,w=(0,s.y)({name:"PillGroup",classes:f,props:n,className:l,style:c,classNames:o,styles:u,unstyled:m,vars:x,varsResolver:v,stylesCtx:{size:_},rootSelector:"group"});return(0,i.jsx)(p,{value:{size:_,disabled:j},children:(0,i.jsx)(a.x,{ref:t,size:_,...w("group"),...y})})});x.classes=f,x.displayName="@mantine/core/PillGroup";let P={variant:"default"},j=(0,l.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,o.ap)(n,"pill-fz"),"--pill-height":(0,o.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,o.H5)(t)}})),y=(0,c.d5)((e,t)=>{let n=(0,r.w)("Pill",P,e),{classNames:o,className:l,style:c,styles:p,unstyled:h,vars:v,variant:x,children:y,withRemoveButton:g,onRemove:_,removeButtonProps:w,radius:b,size:D,disabled:z,mod:N,...k}=n,B=m(),I=(0,d.D)(),R=D||B?.size||void 0,E=I?.variant==="filled"?"contrast":x||"default",G=(0,s.y)({name:"Pill",classes:f,props:n,className:l,style:c,classNames:o,styles:p,unstyled:h,vars:v,varsResolver:j,stylesCtx:{size:R}});return(0,i.jsxs)(a.x,{component:"span",ref:t,variant:E,size:R,...G("root",{variant:E}),mod:[{"with-remove":g&&!z,disabled:z||B?.disabled},N],...k,children:[(0,i.jsx)("span",{...G("label"),children:y}),g&&(0,i.jsx)(u.P,{variant:"transparent",radius:b,tabIndex:-1,"aria-hidden":!0,unstyled:h,...w,...G("remove",{className:w?.className,style:w?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),w?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),_?.(),w?.onClick?.(e)}})]})});y.classes=f,y.displayName="@mantine/core/Pill",y.Group=x},7450:function(e,t,n){"use strict";n.d(t,{D:function(){return o},H:function(){return i}}),n(2784),n(52322);let[i,o]=(0,n(75336).V)()}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=69743)}),_N_E=e.O()}]);
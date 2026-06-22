(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let l={};for(var o in e)t(l,o,{get:e[o],enumerable:!0});return i||t(l,Symbol.toStringTag,{value:"Module"}),l}])},122057,419569,e=>{"use strict";var t=e.i(433512),i=e.i(481178),l=e.i(44091),o=e.i(391466),s=e.i(275519),n=e.i(232471),r=e.i(802046),a=e.i(191788);let c=(0,a.createContext)(null);e.s(["PillsInputContext",0,c],419569);var p={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"},u=e.i(391398);let d=(0,a.createContext)(null),m=(0,i.createVarsResolver)((e,{gap:i},{size:l})=>({group:{"--pg-gap":void 0!==i?(0,t.getSize)(i):(0,t.getSize)(l,"pg-gap")}})),h=(0,s.factory)(e=>{let t=(0,l.useProps)("PillGroup",null,e),{classNames:i,className:s,style:r,styles:h,unstyled:v,vars:x,size:P,disabled:f,attributes:g,...y}=t,j=(0,a.use)(c)?.size||P||void 0,_=(0,o.useStyles)({name:"PillGroup",classes:p,props:t,className:s,style:r,classNames:i,styles:h,unstyled:v,attributes:g,vars:x,varsResolver:m,stylesCtx:{size:j},rootSelector:"group"});return(0,u.jsx)(d,{value:{size:j,disabled:f},children:(0,u.jsx)(n.Box,{size:j,..._("group"),...y})})});h.classes=p,h.varsResolver=m,h.displayName="@mantine/core/PillGroup";let v={variant:"default"},x=(0,i.createVarsResolver)((e,{radius:i},{size:l})=>({root:{"--pill-fz":(0,t.getSize)(l,"pill-fz"),"--pill-height":(0,t.getSize)(l,"pill-height"),"--pill-radius":void 0===i?void 0:(0,t.getRadius)(i)}})),P=(0,s.factory)(e=>{let t=(0,l.useProps)("Pill",v,e),{classNames:i,className:s,style:m,styles:h,unstyled:P,vars:f,variant:g,children:y,withRemoveButton:j,onRemove:_,removeButtonProps:b,radius:w,size:z,disabled:R,mod:B,attributes:S,...A}=t,I=(0,a.use)(d),T=(0,a.use)(c),C=z||I?.size||void 0,D=T?.variant==="filled"?"contrast":g||"default",N=(0,o.useStyles)({name:"Pill",classes:p,props:t,className:s,style:m,classNames:i,styles:h,unstyled:P,attributes:S,vars:f,varsResolver:x,stylesCtx:{size:C}});return(0,u.jsxs)(n.Box,{component:"span",variant:D,size:C,...N("root",{variant:D}),mod:[{"with-remove":j&&!R,disabled:R||I?.disabled},B],...A,children:[(0,u.jsx)("span",{...N("label"),children:y}),j&&(0,u.jsx)(r.CloseButton,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:P,...b,...N("remove",{className:b?.className,style:b?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),b?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),_?.(),b?.onClick?.(e)}})]})});P.classes=p,P.varsResolver=x,P.displayName="@mantine/core/Pill",P.Group=h,e.s(["Pill",0,P],122057)},751370,e=>{"use strict";var t=e.i(391398),i=e.i(38856),l=e.i(648863),o="m_6874fea5",s=e.i(122057);let n={type:"configurator",component:function(e){return(0,t.jsx)("div",{className:o,children:(0,t.jsx)(s.Pill,{...e,children:"React"})})},code:`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var r=e.i(586488);let a={type:"code",component:function(){let e=Array(10).fill(0).map((e,i)=>(0,t.jsxs)(s.Pill,{withRemoveButton:!0,children:["Item ",i]},i));return(0,t.jsx)(r.InputBase,{component:"div",multiline:!0,children:(0,t.jsx)(s.Pill.Group,{children:e})})},code:`
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
`,centered:!0,maxWidth:340};var c=e.i(290486);let p=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,u={type:"styles-api",data:c.PillStylesApi,component:function(e){return(0,t.jsx)("div",{className:o,children:(0,t.jsx)(s.Pill,{...e,withRemoveButton:!0,style:{flex:0},children:"Test pill"})})},code:p,centered:!0,maxWidth:200};var d=(0,l.__exportAll)({stylesApi:()=>u,usage:()=>n,withinInput:()=>a});e.i(603441);var m=e.i(62558);e.i(457450);var h=e.i(418026);let v=(0,m.Layout)(h.MDX_DATA.Pill);function x(e){let l={code:"code",h2:"h2",p:"p",...(0,i.useMDXComponents)(),...e.components},{Demo:o,StylesApiSelectors:s}=l;return o||P("Demo",!0),s||P("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:d.usage}),"\n",(0,t.jsx)(l.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti-select or tag inputs."]}),"\n",(0,t.jsx)(o,{data:d.withinInput}),"\n",(0,t.jsx)(s,{component:"Pill"}),"\n",(0,t.jsx)(o,{data:d.stylesApi})]})}function P(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(v,{...e,children:(0,t.jsx)(x,{...e})})}],751370)},552886,(e,t,i)=>{let l="/core/pill";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(751370)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
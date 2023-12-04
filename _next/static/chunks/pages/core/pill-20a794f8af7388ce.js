(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2551],{2252:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pill",function(){return n(83492)}])},83492:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(24246),l=n(71670),i=n(3916),r=n(30289),a=n(27378),s=n(39394),c={demoWrapper:"m-6874fea5"};let p=`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,u={type:"configurator",component:function(e){return a.createElement("div",{className:c.demoWrapper},a.createElement(s.D,{...e},"React"))},code:p,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var m=n(23163);let d=`
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
`,f={type:"code",component:function(){let e=Array(10).fill(0).map((e,t)=>a.createElement(s.D,{key:t,withRemoveButton:!0},"Item ",t));return a.createElement(m.M,{component:"div",multiline:!0},a.createElement(s.D.Group,null,e))},code:d,centered:!0,maxWidth:340};var v=n(81581);let h=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,P={type:"styles-api",data:v.K,component:function(e){return a.createElement("div",{className:c.demoWrapper},a.createElement(s.D,{...e,withRemoveButton:!0,style:{flex:0}},"Test pill"))},code:h,centered:!0,maxWidth:200},y=(0,i.A)(r.us.Pill);function x(e){let t={code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components},{Demo:n,StylesApiSelectors:i}=t;return n||E("Demo",!0),i||E("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti select or tag inputs."]}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(i,{component:"Pill"}),"\n",(0,o.jsx)(n,{data:P})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(x,{...e})})}function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},39394:function(e,t,n){"use strict";n.d(t,{D:function(){return E}});var o=n(27378),l=n(92082),i=n(83453),r=n(96739),a=n(6231),s=n(56589),c=n(20410),p=n(96217),u=n(89871);let[m,d]=(0,u.V)();var f=n(33),v={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let h={},P=(0,i.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,l.ap)(t):(0,l.ap)(n,"pg-gap")}})),y=(0,c.d)((e,t)=>{let n=(0,r.w)("PillGroup",h,e),{classNames:l,className:i,style:c,styles:p,unstyled:u,vars:d,size:y,disabled:x,...g}=n,E=(0,f.D)(),w=E?.size||y||void 0,b=(0,a.y)({name:"PillGroup",classes:v,props:n,className:i,style:c,classNames:l,styles:p,unstyled:u,vars:d,varsResolver:P,stylesCtx:{size:w},rootSelector:"group"});return o.createElement(m,{value:{size:w,disabled:x}},o.createElement(s.x,{ref:t,size:w,...b("group"),...g}))});y.classes=v,y.displayName="@mantine/core/PillGroup";let x={variant:"default"},g=(0,i.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,l.ap)(n,"pill-fz"),"--pill-height":(0,l.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,l.H5)(t)}})),E=(0,c.d)((e,t)=>{let n=(0,r.w)("Pill",x,e),{classNames:l,className:i,style:c,styles:u,unstyled:m,vars:h,variant:P,children:y,withRemoveButton:E,onRemove:w,removeButtonProps:b,radius:D,size:_,disabled:j,...z}=n,N=d(),k=(0,f.D)(),B=_||N?.size||void 0,I=k?.variant==="filled"?"contrast":P||"default",R=(0,a.y)({name:"Pill",classes:v,props:n,className:i,style:c,classNames:l,styles:u,unstyled:m,vars:h,varsResolver:g,stylesCtx:{size:B}});return o.createElement(s.x,{component:"span",ref:t,variant:I,size:B,...R("root",{variant:I}),mod:{"with-remove":E,disabled:j||N?.disabled},...z},o.createElement("span",{...R("label")},y),E&&o.createElement(p.P,{variant:"transparent",radius:D,tabIndex:-1,"aria-hidden":!0,unstyled:m,...b,...R("remove",{className:b?.className,style:b?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),b?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),w?.(),b?.onClick?.(e)}}))});E.classes=v,E.displayName="@mantine/core/Pill",E.Group=y},33:function(e,t,n){"use strict";n.d(t,{D:function(){return i},H:function(){return l}}),n(27378);var o=n(89871);let[l,i]=(0,o.V)()}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=2252)}),_N_E=e.O()}]);
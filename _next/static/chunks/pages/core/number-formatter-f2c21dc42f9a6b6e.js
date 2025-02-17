(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59526],{76837:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return t(87919)}])},87919:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var o=t(31085),n=t(71184),a=t(79467),i=t(43523);let s={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:["With prefix: ",(0,o.jsx)(i.K,{prefix:"$ ",value:100})]}),(0,o.jsxs)("div",{children:["With suffix: ",(0,o.jsx)(i.K,{value:100,suffix:" RUB"})]})]})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
`,centered:!0},d={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:["With default separator: ",(0,o.jsx)(i.K,{thousandSeparator:!0,value:1e6})]}),(0,o.jsxs)("div",{children:["With custom separator:"," ",(0,o.jsx)(i.K,{thousandSeparator:".",decimalSeparator:",",value:1e6})]})]})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
`,centered:!0},c={type:"code",component:function(){return(0,o.jsx)(i.K,{value:5/3,decimalScale:2})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,centered:!0};var u=t(85954),l=t(38215);let m=(0,u.P)(l.XZ.NumberFormatter);function p(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:["Use ",(0,o.jsx)(r.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,o.jsx)(r.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,o.jsx)(t,{data:a.C}),"\n",(0,o.jsx)(r.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"prefix"})," and ",(0,o.jsx)(r.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(r.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,o.jsx)(r.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,o.jsx)(r.code,{children:"thousand"}),", ",(0,o.jsx)(r.code,{children:"lakh"}),", ",(0,o.jsx)(r.code,{children:"wan"}),", ",(0,o.jsx)(r.code,{children:"none"})," values."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(r.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,o.jsx)(t,{data:c})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(p,{...e})})}},79467:(e,r,t)=>{"use strict";t.d(r,{C:()=>a});var o=t(31085),n=t(43523);let a={type:"code",component:function(){return(0,o.jsx)(n.K,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,centered:!0}},43523:(e,r,t)=>{"use strict";t.d(r,{K:()=>s});var o=t(31085),n=t(57715);t(14041);var a=t(29686);let i={};function s(e){let{value:r,defaultValue:t,...s}=(0,a.Y)("NumberFormatter",i,e);return void 0===r?null:(0,o.jsx)(n.HG,{displayType:"text",value:r,...s})}s.extend=e=>e,s.displayName="@mantine/core/NumberFormatter"}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,57715,39699,68831,90636,46593,38792],()=>r(76837)),_N_E=e.O()}]);
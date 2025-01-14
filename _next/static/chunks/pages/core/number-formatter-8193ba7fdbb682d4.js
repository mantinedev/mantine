(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77270],{70689:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return t(11996)}])},11996:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(52322),o=t(45392),a=t(94564),i=t(49934);let c={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["With prefix: ",(0,n.jsx)(i.e,{prefix:"$ ",value:100})]}),(0,n.jsxs)("div",{children:["With suffix: ",(0,n.jsx)(i.e,{value:100,suffix:" RUB"})]})]})},code:`
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
`,centered:!0},s={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["With default separator: ",(0,n.jsx)(i.e,{thousandSeparator:!0,value:1e6})]}),(0,n.jsxs)("div",{children:["With custom separator:"," ",(0,n.jsx)(i.e,{thousandSeparator:".",decimalSeparator:",",value:1e6})]})]})},code:`
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
`,centered:!0},d={type:"code",component:function(){return(0,n.jsx)(i.e,{value:5/3,decimalScale:2})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,centered:!0};var u=t(54078),l=t(15019);let m=(0,u.A)(l.us.NumberFormatter);function p(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,n.jsx)(r.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,n.jsx)(t,{data:a.j}),"\n",(0,n.jsx)(r.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"prefix"})," and ",(0,n.jsx)(r.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,n.jsx)(t,{data:c}),"\n",(0,n.jsx)(r.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,n.jsx)(r.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,n.jsx)(r.code,{children:"thousand"}),", ",(0,n.jsx)(r.code,{children:"lakh"}),", ",(0,n.jsx)(r.code,{children:"wan"}),", ",(0,n.jsx)(r.code,{children:"none"})," values."]}),"\n",(0,n.jsx)(t,{data:s}),"\n",(0,n.jsx)(r.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,n.jsx)(t,{data:d})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(p,{...e})})}},94564:function(e,r,t){"use strict";t.d(r,{j:function(){return a}});var n=t(52322),o=t(49934);let a={type:"code",component:function(){return(0,n.jsx)(o.e,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,centered:!0}},49934:function(e,r,t){"use strict";t.d(r,{e:function(){return c}});var n=t(52322),o=t(9462);t(2784);var a=t(38483);let i={};function c(e){let{value:r,defaultValue:t,...c}=(0,a.w)("NumberFormatter",i,e);return void 0===r?null:(0,n.jsx)(o.h3,{displayType:"text",value:r,...c})}c.extend=e=>e,c.displayName="@mantine/core/NumberFormatter"}},function(e){e.O(0,[61177,9462,66748,61639,92888,49774,40179],function(){return e(e.s=70689)}),_N_E=e.O()}]);
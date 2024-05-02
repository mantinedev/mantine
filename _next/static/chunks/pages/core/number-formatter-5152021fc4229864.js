(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77270],{70689:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return t(11996)}])},11996:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(52322),o=t(45392),a=t(94564),i=t(49934);let s=`
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
`,c={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["With prefix: ",(0,n.jsx)(i.e,{prefix:"$ ",value:100})]}),(0,n.jsxs)("div",{children:["With suffix: ",(0,n.jsx)(i.e,{value:100,suffix:" RUB"})]})]})},code:s,centered:!0},d=`
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
`,u={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["With default separator: ",(0,n.jsx)(i.e,{thousandSeparator:!0,value:1e6})]}),(0,n.jsxs)("div",{children:["With custom separator:"," ",(0,n.jsx)(i.e,{thousandSeparator:".",decimalSeparator:",",value:1e6})]})]})},code:d,centered:!0},l=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,m={type:"code",component:function(){return(0,n.jsx)(i.e,{value:5/3,decimalScale:2})},code:l,centered:!0};var p=t(79016),h=t(33638);let f=(0,p.A)(h.us.NumberFormatter);function x(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,n.jsx)(r.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,n.jsx)(t,{data:a.j}),"\n",(0,n.jsx)(r.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"prefix"})," and ",(0,n.jsx)(r.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,n.jsx)(t,{data:c}),"\n",(0,n.jsx)(r.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,n.jsx)(r.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,n.jsx)(r.code,{children:"thousand"}),", ",(0,n.jsx)(r.code,{children:"lakh"}),", ",(0,n.jsx)(r.code,{children:"wan"}),", ",(0,n.jsx)(r.code,{children:"none"})," values."]}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(r.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,n.jsx)(t,{data:m})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(x,{...e})})}},94564:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var n=t(52322),o=t(49934);let a=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,i={type:"code",component:function(){return(0,n.jsx)(o.e,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:a,centered:!0}},49934:function(e,r,t){"use strict";t.d(r,{e:function(){return s}});var n=t(52322),o=t(9462);t(2784);var a=t(38483);let i={};function s(e){let r=(0,a.w)("NumberFormatter",i,e),{value:t,defaultValue:s,...c}=r;return void 0===t?null:(0,n.jsx)(o.h3,{displayType:"text",value:t,...c})}s.extend=e=>e,s.displayName="@mantine/core/NumberFormatter"}},function(e){e.O(0,[57938,9462,17454,47747,49774,92888,40179],function(){return e(e.s=70689)}),_N_E=e.O()}]);
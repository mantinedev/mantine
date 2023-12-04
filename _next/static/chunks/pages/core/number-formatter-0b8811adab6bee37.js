(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7270],{45685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return r(34502)}])},34502:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(24246),o=r(71670),a=r(3916),c=r(30289),i=r(15974),u=r(27378),d=r(96605);let l=`
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
`,s={type:"code",component:function(){return u.createElement(u.Fragment,null,u.createElement("div",null,"With prefix: ",u.createElement(d.e,{prefix:"$ ",value:100})),u.createElement("div",null,"With suffix: ",u.createElement(d.e,{value:100,suffix:" RUB"})))},code:l,centered:!0},m=`
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
`,p={type:"code",component:function(){return u.createElement(u.Fragment,null,u.createElement("div",null,"With default separator: ",u.createElement(d.e,{thousandSeparator:!0,value:1e6})),u.createElement("div",null,"With custom separator:"," ",u.createElement(d.e,{thousandSeparator:".",decimalSeparator:",",value:1e6})))},code:m,centered:!0},h=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,f={type:"code",component:function(){return u.createElement(d.e,{value:5/3,decimalScale:2})},code:h,centered:!0},x=(0,a.A)(c.us.NumberFormatter);function v(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,n.jsx)(t.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,n.jsx)(r,{data:i.j}),"\n",(0,n.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"prefix"})," and ",(0,n.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,n.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,n.jsx)(t.code,{children:"thousand"}),", ",(0,n.jsx)(t.code,{children:"lakh"}),", ",(0,n.jsx)(t.code,{children:"wan"}),", ",(0,n.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,n.jsx)(r,{data:f})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...e,children:(0,n.jsx)(v,{...e})})}},15974:function(e,t,r){"use strict";r.d(t,{j:function(){return c}});var n=r(27378),o=r(96605);let a=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,c={type:"code",component:function(){return n.createElement(o.e,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:a,centered:!0}},96605:function(e,t,r){"use strict";r.d(t,{e:function(){return i}});var n=r(27378),o=r(62740),a=r(96739);let c={};function i(e){let t=(0,a.w)("NumberFormatter",c,e),{value:r,defaultValue:i,...u}=t;return void 0===r?null:n.createElement(o.h3,{displayType:"text",value:r,...u})}i.extend=e=>e,i.displayName="@mantine/core/NumberFormatter"}},function(e){e.O(0,[370,2740,5819,2775,9774,2888,179],function(){return e(e.s=45685)}),_N_E=e.O()}]);
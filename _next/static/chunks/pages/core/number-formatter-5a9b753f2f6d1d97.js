(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7270],{38493:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return t(45455)}])},45455:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(85893),o=t(11151),a=t(19905),i=t(9904),c=t(11557),u=t(67294),l=t(16238);let d=`
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
`,s={type:"code",component:function(){return u.createElement(u.Fragment,null,u.createElement("div",null,"With prefix: ",u.createElement(l.e,{prefix:"$ ",value:100})),u.createElement("div",null,"With suffix: ",u.createElement(l.e,{value:100,suffix:" RUB"})))},code:d,centered:!0},m=`
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
`,p={type:"code",component:function(){return u.createElement(u.Fragment,null,u.createElement("div",null,"With default separator: ",u.createElement(l.e,{thousandSeparator:!0,value:1e6})),u.createElement("div",null,"With custom separator:"," ",u.createElement(l.e,{thousandSeparator:".",decimalSeparator:",",value:1e6})))},code:m,centered:!0},f=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,h={type:"code",component:function(){return u.createElement(l.e,{value:5/3,decimalScale:2})},code:f,centered:!0},x=(0,a.A)(i.us.NumberFormatter);function v(e){let r=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,o.ah)(),e.components),{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,n.jsx)(r.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,n.jsx)(t,{data:c.j}),"\n",(0,n.jsx)(r.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"prefix"})," and ",(0,n.jsx)(r.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,n.jsx)(t,{data:s}),"\n",(0,n.jsx)(r.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,n.jsx)(r.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,n.jsx)(r.code,{children:"thousand"}),", ",(0,n.jsx)(r.code,{children:"lakh"}),", ",(0,n.jsx)(r.code,{children:"wan"}),", ",(0,n.jsx)(r.code,{children:"none"})," values."]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(r.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,n.jsx)(t,{data:h})]})}var j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,Object.assign({},e,{children:(0,n.jsx)(v,e)}))}},16238:function(e,r,t){"use strict";t.d(r,{e:function(){return f}});var n=t(67294),o=t(62740),a=t(30370),i=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&d(e,t,r[t]);return e},m=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>r.indexOf(n)&&l.call(e,n)&&(t[n]=e[n]);return t};let p={};function f(e){let r=(0,a.w)("NumberFormatter",p,e),{value:t,defaultValue:i}=r,c=m(r,["value","defaultValue"]);return void 0===t?null:n.createElement(o.h3,s({displayType:"text",value:t},c))}f.extend=e=>e,f.displayName="@mantine/core/NumberFormatter"},11557:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var n=t(67294),o=t(16238);let a=`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,i={type:"code",component:function(){return n.createElement(o.e,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:a,centered:!0}}},function(e){e.O(0,[4136,8992,178,9774,2888,179],function(){return e(e.s=38493)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30809],{13112:(e,t,r)=>{r.d(t,{h:()=>n});function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}},16334:(e,t,r)=>{r.d(t,{h:()=>n});function n({min:e,max:t},r){let n=r||!0;return r=>{if("number"!=typeof r)return n;let o=!0;return"number"==typeof e&&r<e&&(o=!1),"number"==typeof t&&r>t&&(o=!1),o?null:n}}},55272:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var n,o,a,l=a[o];if(!e(t[l],r[l]))return!1}return!0}return t!=t&&r!=r}},64059:(e,t,r)=>{r.d(t,{n:()=>s});var n=r(6029),o=r(55729),a=r(38774),l=r(70204),u=r(61087),i=r(69329),c=r(13112),m=r(16334);let s={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.h)("Name is required"),age:(0,m.h)({min:18},"You must be at least 18 to register")}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(l.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(u.$,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},70204:(e,t,r)=>{r.d(t,{Q:()=>O});var n=r(6029),o=r(55729),a=r(50212),l=r(2027),u=r(38744),i=r(7798),c=r(28136),m=r(18963),s=r(14163),d=r(33987),f=r(38757),p=r(15583),g=r(38919),b=r(8411),h=r(51718),y=r(17976);function v({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var N={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^(0\.0*|-0(\.0*)?)$/,j=/^-?0\d+(\.\d+)?\.?$/,I=/\.\d*0$/;function k(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function E(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||k(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function x(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let A={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0,allowedDecimalSeparators:[".",","]},P=(0,d.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.YC)(t,"ni-chevron-size")}})),O=(0,b.P9)((e,t)=>{let r=(0,g.Y)("NumberInput",A,e),{className:s,classNames:d,styles:b,unstyled:O,vars:_,onChange:S,onValueChange:D,value:F,defaultValue:R,max:M,min:V,step:T,hideControls:C,rightSection:z,isAllowed:B,clampBehavior:Y,onBlur:q,allowDecimal:G,decimalScale:L,onKeyDown:$,onKeyDownCapture:J,handlersRef:Q,startValue:X,disabled:Z,rightSectionPointerEvents:K,allowNegative:U,readOnly:W,size:H,rightSectionWidth:ee,stepHoldInterval:et,stepHoldDelay:er,allowLeadingZeros:en,withKeyboardEvents:eo,trimLeadingZeroesOnBlur:ea,allowedDecimalSeparators:el,attributes:eu,...ei}=r,ec=(0,p.I)({name:"NumberInput",classes:N,props:r,classNames:d,styles:b,unstyled:O,attributes:eu,vars:_,varsResolver:P}),{resolvedClassNames:em,resolvedStyles:es}=(0,f.Y)({classNames:d,styles:b,props:r}),[ed,ef]=(0,i.Z)({value:F,defaultValue:R,finalValue:"",onChange:S}),ep=void 0!==er&&void 0!==et,eg=(0,o.useRef)(null),eb=(0,o.useRef)(null),eh=(0,o.useRef)(0),ey=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ev=e=>{eg.current&&void 0!==e&&eg.current.setSelectionRange(e,e)},eN=(0,o.useRef)(m.l);eN.current=()=>{let e;if(!E(ed))return;let t=Math.max(ey(ed),ey(T)),r=10**t;if(!k(ed)&&("number"!=typeof ed||Number.isNaN(ed)))e=(0,u.q)(X,V,M);else if(void 0!==M){let t=(Math.round(Number(ed)*r)+Math.round(T*r))/r;e=t<=M?t:M}else e=(Math.round(Number(ed)*r)+Math.round(T*r))/r;let n=e.toFixed(t);ef(parseFloat(n)),D?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>ev(eg.current?.value.length),0)};let ew=(0,o.useRef)(m.l);ew.current=()=>{let e;if(!E(ed))return;let t=void 0!==V?V:U?Number.MIN_SAFE_INTEGER:0,r=Math.max(ey(ed),ey(T)),n=10**r;if(!k(ed)&&"number"!=typeof ed||Number.isNaN(ed))e=(0,u.q)(X,t,M);else{let r=(Math.round(Number(ed)*n)-Math.round(T*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);ef(parseFloat(o)),D?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>ev(eg.current?.value.length),0)},(0,c.bl)(Q,{increment:eN.current,decrement:ew.current});let ej=e=>{e?eN.current?.():ew.current?.(),eh.current+=1},eI=e=>{if(ej(e),ep){let t="number"==typeof et?et:et(eh.current);eb.current=window.setTimeout(()=>eI(e),t)}},ek=(e,t)=>{e.preventDefault(),eg.current?.focus(),ej(t),ep&&(eb.current=window.setTimeout(()=>eI(t),er))},eE=()=>{eb.current&&window.clearTimeout(eb.current),eb.current=null,eh.current=0},ex=(0,n.jsxs)("div",{...ec("controls"),children:[(0,n.jsx)(y.N,{...ec("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof ed&&void 0!==M&&ed>=M,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!0)},onPointerUp:eE,onPointerLeave:eE,children:(0,n.jsx)(v,{direction:"up"})}),(0,n.jsx)(y.N,{...ec("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof ed&&void 0!==V&&ed<=V,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!1)},onPointerUp:eE,onPointerLeave:eE,children:(0,n.jsx)(v,{direction:"down"})})]});return(0,n.jsx)(h.O,{component:l.HG,allowNegative:U,className:(0,a.A)(N.root,s),size:H,inputMode:"decimal",...ei,readOnly:W,disabled:Z,value:ed,getInputRef:(0,c.pc)(t,eg),onValueChange:(e,t)=>{"event"===t.source&&ef(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||w.test(e.value)||en&&j.test(e.value)||I.test(e.value)?e.value:e.floatValue),D?.(e,t)},rightSection:C||W||!E(ed)?z:z||ex,classNames:em,styles:es,unstyled:O,__staticSelector:"NumberInput",decimalScale:G?L:0,onKeyDown:e=>{$?.(e),!W&&eo&&("ArrowUp"===e.key&&(e.preventDefault(),eN.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ew.current?.()))},onKeyDownCapture:e=>{if(J?.(e),"Backspace"===e.key){let t=eg.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ev(0),0))}},rightSectionPointerEvents:K??(Z?"none":void 0),rightSectionWidth:ee??`var(--ni-right-section-width-${H||"sm"})`,allowLeadingZeros:en,allowedDecimalSeparators:el,onBlur:e=>{let t=ed;"blur"===Y&&"number"==typeof t&&(t=(0,u.q)(t,V,M)),ea&&"string"==typeof t&&15>ey(t)&&(t=function(e,t,r){let n=e.toString().replace(/^0+(?=\d)/,""),o=parseFloat(n);return Number.isNaN(o)?n:o>Number.MAX_SAFE_INTEGER?void 0!==t?t:n:(0,u.q)(o,r,t)}(t,M,V)),ed!==t&&ef(t),q?.(e)},attributes:eu,isAllowed:e=>"strict"===Y?B?B(e)&&x(e.floatValue,V,M):x(e.floatValue,V,M):!B||B(e)})});O.classes={...h.O.classes,...N},O.displayName="@mantine/core/NumberInput"},81247:(e,t,r)=>{r.d(t,{l:()=>c});var n=r(6029),o=r(55729),a=r(38774),l=r(70204),u=r(61087),i=r(69329);let c={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(l.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(u.$,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},86874:(e,t,r)=>{function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,a,l=0,u=Object.prototype.toString.call(e);if("[object Object]"===u?a=Object.create(e.__proto__||null):"[object Array]"===u?a=Array(e.length):"[object Set]"===u?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===u?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===u?a=new Date(+e):"[object RegExp]"===u?a=new RegExp(e.source,e.flags):"[object DataView]"===u?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===u?a=e.slice(0):"Array]"===u.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)n(a,r[l],Object.getOwnPropertyDescriptor(e,r[l]));for(l=0,r=Object.getOwnPropertyNames(e);l<r.length;l++)Object.hasOwnProperty.call(a,t=r[l])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Q:()=>o})}}]);
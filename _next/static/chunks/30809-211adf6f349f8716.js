"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30809],{13112:(e,t,r)=>{r.d(t,{h:()=>n});function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}},16334:(e,t,r)=>{r.d(t,{h:()=>n});function n({min:e,max:t},r){let n=r||!0;return r=>{if("number"!=typeof r)return n;let o=!0;return"number"==typeof e&&r<e&&(o=!1),"number"==typeof t&&r>t&&(o=!1),o?null:n}}},55272:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var n,o,a,l=a[o];if(!e(t[l],r[l]))return!1}return!0}return t!=t&&r!=r}},64059:(e,t,r)=>{r.d(t,{n:()=>m});var n=r(6029),o=r(55729),a=r(38774),l=r(70204),i=r(61087),u=r(69329),c=r(13112),s=r(16334);let m={type:"code",component:function(){let e=(0,u.m)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.h)("Name is required"),age:(0,s.h)({min:18},"You must be at least 18 to register")}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(l.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.$,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},70204:(e,t,r)=>{r.d(t,{Q:()=>D});var n=r(6029),o=r(55729),a=r(50212),l=r(2027),i=r(38744),u=r(7798),c=r(28136),s=r(18963),m=r(14163),d=r(33987),p=r(38757),f=r(15583),g=r(38919),b=r(8411),h=r(51718),v=r(17976),y={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};function N({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}let w=/^(0\.0*|-0(\.0*)?)$/,j=/^-?0\d+(\.\d+)?\.?$/,I=/\.\d*0$/,E=/^-?\d+\.$/;function k(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function x(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||k(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function P(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let A={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0,allowedDecimalSeparators:[".",","]},O=(0,d.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.YC)(t,"ni-chevron-size")}})),D=(0,b.P9)((e,t)=>{let r=(0,g.Y)("NumberInput",A,e),{className:m,classNames:d,styles:b,unstyled:D,vars:S,onChange:_,onValueChange:F,value:M,defaultValue:R,max:V,min:T,step:C,hideControls:z,rightSection:B,isAllowed:L,clampBehavior:Y,onBlur:$,allowDecimal:q,decimalScale:G,onKeyDown:J,onKeyDownCapture:Q,handlersRef:X,startValue:Z,disabled:K,rightSectionPointerEvents:U,allowNegative:W,readOnly:H,size:ee,rightSectionWidth:et,stepHoldInterval:er,stepHoldDelay:en,allowLeadingZeros:eo,withKeyboardEvents:ea,trimLeadingZeroesOnBlur:el,allowedDecimalSeparators:ei,attributes:eu,...ec}=r,es=(0,f.I)({name:"NumberInput",classes:y,props:r,classNames:d,styles:b,unstyled:D,attributes:eu,vars:S,varsResolver:O}),{resolvedClassNames:em,resolvedStyles:ed}=(0,p.Y)({classNames:d,styles:b,props:r}),[ep,ef]=(0,u.Z)({value:M,defaultValue:R,finalValue:"",onChange:_}),eg=void 0!==en&&void 0!==er,eb=(0,o.useRef)(null),eh=(0,o.useRef)(null),ev=(0,o.useRef)(0),ey=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eN=e=>{eb.current&&void 0!==e&&eb.current.setSelectionRange(e,e)},ew=(0,o.useRef)(s.l);ew.current=()=>{let e;if(!x(ep))return;let t=Math.max(ey(ep),ey(C)),r=10**t;if(!k(ep)&&("number"!=typeof ep||Number.isNaN(ep)))e=(0,i.q)(Z,T,V);else if(void 0!==V){let t=(Math.round(Number(ep)*r)+Math.round(C*r))/r;e=t<=V?t:V}else e=(Math.round(Number(ep)*r)+Math.round(C*r))/r;let n=e.toFixed(t);ef(parseFloat(n)),F?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>eN(eb.current?.value.length),0)};let ej=(0,o.useRef)(s.l);ej.current=()=>{let e;if(!x(ep))return;let t=void 0!==T?T:W?Number.MIN_SAFE_INTEGER:0,r=Math.max(ey(ep),ey(C)),n=10**r;if(!k(ep)&&"number"!=typeof ep||Number.isNaN(ep))e=(0,i.q)(Z,t,V);else{let r=(Math.round(Number(ep)*n)-Math.round(C*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);ef(parseFloat(o)),F?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eN(eb.current?.value.length),0)},(0,c.bl)(X,{increment:ew.current,decrement:ej.current});let eI=e=>{e?ew.current?.():ej.current?.(),ev.current+=1},eE=e=>{if(eI(e),eg){let t="number"==typeof er?er:er(ev.current);eh.current=window.setTimeout(()=>eE(e),t)}},ek=(e,t)=>{e.preventDefault(),eb.current?.focus(),eI(t),eg&&(eh.current=window.setTimeout(()=>eE(t),en))},ex=()=>{eh.current&&window.clearTimeout(eh.current),eh.current=null,ev.current=0},eP=(0,n.jsxs)("div",{...es("controls"),children:[(0,n.jsx)(v.N,{...es("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof ep&&void 0!==V&&ep>=V,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!0)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(N,{direction:"up"})}),(0,n.jsx)(v.N,{...es("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof ep&&void 0!==T&&ep<=T,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!1)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(N,{direction:"down"})})]});return(0,n.jsx)(h.O,{component:l.HG,allowNegative:W,className:(0,a.A)(y.root,m),size:ee,inputMode:"decimal",...ec,readOnly:H,disabled:K,value:ep,getInputRef:(0,c.pc)(t,eb),onValueChange:(e,t)=>{"event"===t.source&&ef(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||w.test(e.value)||eo&&j.test(e.value)||I.test(e.value)||E.test(e.value)?e.value:e.floatValue),F?.(e,t)},rightSection:z||H||!x(ep)?B:B||eP,classNames:em,styles:ed,unstyled:D,__staticSelector:"NumberInput",decimalScale:q?G:0,onPaste:e=>{let t=e.clipboardData.getData("text"),r=ec.decimalSeparator||".",n=(ei||[".",","]).filter(e=>e!==r);if(n.some(e=>t.includes(e))){e.preventDefault();let o=t;n.forEach(e=>{o=o.split(e).join(r)});let a=eb.current;if(a){let e=a.selectionStart??0,t=a.selectionEnd??0,r=a.value,n=r.substring(0,e)+o+r.substring(t),l=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;l?.call(a,n),a.dispatchEvent(new Event("change",{bubbles:!0}));let i=e+o.length;setTimeout(()=>eN(i),0)}}ec.onPaste?.(e)},onKeyDown:e=>{J?.(e),!H&&ea&&("ArrowUp"===e.key&&(e.preventDefault(),ew.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ej.current?.()))},onKeyDownCapture:e=>{if(Q?.(e),"Backspace"===e.key){let t=eb.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eN(0),0))}},rightSectionPointerEvents:U??(K?"none":void 0),rightSectionWidth:et??`var(--ni-right-section-width-${ee||"sm"})`,allowLeadingZeros:eo,allowedDecimalSeparators:ei,onBlur:e=>{let t=ep;"blur"===Y&&"number"==typeof t&&(t=(0,i.q)(t,T,V)),el&&"string"==typeof t&&15>ey(t)&&(t=function(e,t,r){let n=e.toString(),o=E.test(n),a=n.replace(/^0+(?=\d)/,""),l=parseFloat(a);if(Number.isNaN(l))return a;if(l>Number.MAX_SAFE_INTEGER)return void 0!==t?t:a;let u=(0,i.q)(l,r,t);if(o){let e=u.toString().replace(/^0+(?=\d)/,"");return`${e}.`}return u}(t,V,T)),ep!==t&&ef(t),$?.(e)},attributes:eu,isAllowed:e=>"strict"===Y?L?L(e)&&P(e.floatValue,T,V):P(e.floatValue,T,V):!L||L(e)})});D.classes={...h.O.classes,...y},D.displayName="@mantine/core/NumberInput"},81247:(e,t,r)=>{r.d(t,{l:()=>c});var n=r(6029),o=r(55729),a=r(38774),l=r(70204),i=r(61087),u=r(69329);let c={type:"code",component:function(){let e=(0,u.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(l.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.$,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},86874:(e,t,r)=>{function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,a,l=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)n(a,r[l],Object.getOwnPropertyDescriptor(e,r[l]));for(l=0,r=Object.getOwnPropertyNames(e);l<r.length;l++)Object.hasOwnProperty.call(a,t=r[l])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Q:()=>o})}}]);
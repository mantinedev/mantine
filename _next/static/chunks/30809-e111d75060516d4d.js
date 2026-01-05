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
`,centered:!0,maxWidth:340}},70204:(e,t,r)=>{r.d(t,{Q:()=>_});var n=r(6029),o=r(55729),a=r(50212),l=r(2027),u=r(38744),i=r(7798),c=r(28136),m=r(18963),s=r(14163),d=r(33987),f=r(38757),p=r(15583),g=r(38919),b=r(8411),h=r(51718),v=r(17976);function y({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var N={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^(0\.0*|-0(\.0*)?)$/,j=/^-?0\d+(\.\d+)?\.?$/,I=/\.\d*0$/,k=/^-?\d+\.$/;function E(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function x(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||E(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function A(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let P={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0,allowedDecimalSeparators:[".",","]},O=(0,d.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.YC)(t,"ni-chevron-size")}})),_=(0,b.P9)((e,t)=>{let r=(0,g.Y)("NumberInput",P,e),{className:s,classNames:d,styles:b,unstyled:_,vars:S,onChange:D,onValueChange:F,value:R,defaultValue:M,max:V,min:T,step:C,hideControls:z,rightSection:B,isAllowed:Y,clampBehavior:$,onBlur:q,allowDecimal:G,decimalScale:L,onKeyDown:J,onKeyDownCapture:Q,handlersRef:X,startValue:Z,disabled:K,rightSectionPointerEvents:U,allowNegative:W,readOnly:H,size:ee,rightSectionWidth:et,stepHoldInterval:er,stepHoldDelay:en,allowLeadingZeros:eo,withKeyboardEvents:ea,trimLeadingZeroesOnBlur:el,allowedDecimalSeparators:eu,attributes:ei,...ec}=r,em=(0,p.I)({name:"NumberInput",classes:N,props:r,classNames:d,styles:b,unstyled:_,attributes:ei,vars:S,varsResolver:O}),{resolvedClassNames:es,resolvedStyles:ed}=(0,f.Y)({classNames:d,styles:b,props:r}),[ef,ep]=(0,i.Z)({value:R,defaultValue:M,finalValue:"",onChange:D}),eg=void 0!==en&&void 0!==er,eb=(0,o.useRef)(null),eh=(0,o.useRef)(null),ev=(0,o.useRef)(0),ey=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eN=e=>{eb.current&&void 0!==e&&eb.current.setSelectionRange(e,e)},ew=(0,o.useRef)(m.l);ew.current=()=>{let e;if(!x(ef))return;let t=Math.max(ey(ef),ey(C)),r=10**t;if(!E(ef)&&("number"!=typeof ef||Number.isNaN(ef)))e=(0,u.q)(Z,T,V);else if(void 0!==V){let t=(Math.round(Number(ef)*r)+Math.round(C*r))/r;e=t<=V?t:V}else e=(Math.round(Number(ef)*r)+Math.round(C*r))/r;let n=e.toFixed(t);ep(parseFloat(n)),F?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>eN(eb.current?.value.length),0)};let ej=(0,o.useRef)(m.l);ej.current=()=>{let e;if(!x(ef))return;let t=void 0!==T?T:W?Number.MIN_SAFE_INTEGER:0,r=Math.max(ey(ef),ey(C)),n=10**r;if(!E(ef)&&"number"!=typeof ef||Number.isNaN(ef))e=(0,u.q)(Z,t,V);else{let r=(Math.round(Number(ef)*n)-Math.round(C*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);ep(parseFloat(o)),F?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eN(eb.current?.value.length),0)},(0,c.bl)(X,{increment:ew.current,decrement:ej.current});let eI=e=>{e?ew.current?.():ej.current?.(),ev.current+=1},ek=e=>{if(eI(e),eg){let t="number"==typeof er?er:er(ev.current);eh.current=window.setTimeout(()=>ek(e),t)}},eE=(e,t)=>{e.preventDefault(),eb.current?.focus(),eI(t),eg&&(eh.current=window.setTimeout(()=>ek(t),en))},ex=()=>{eh.current&&window.clearTimeout(eh.current),eh.current=null,ev.current=0},eA=(0,n.jsxs)("div",{...em("controls"),children:[(0,n.jsx)(v.N,{...em("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof ef&&void 0!==V&&ef>=V,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eE(e,!0)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(y,{direction:"up"})}),(0,n.jsx)(v.N,{...em("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof ef&&void 0!==T&&ef<=T,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eE(e,!1)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(y,{direction:"down"})})]});return(0,n.jsx)(h.O,{component:l.HG,allowNegative:W,className:(0,a.A)(N.root,s),size:ee,inputMode:"decimal",...ec,readOnly:H,disabled:K,value:ef,getInputRef:(0,c.pc)(t,eb),onValueChange:(e,t)=>{"event"===t.source&&ep(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||w.test(e.value)||eo&&j.test(e.value)||I.test(e.value)||k.test(e.value)?e.value:e.floatValue),F?.(e,t)},rightSection:z||H||!x(ef)?B:B||eA,classNames:es,styles:ed,unstyled:_,__staticSelector:"NumberInput",decimalScale:G?L:0,onKeyDown:e=>{J?.(e),!H&&ea&&("ArrowUp"===e.key&&(e.preventDefault(),ew.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ej.current?.()))},onKeyDownCapture:e=>{if(Q?.(e),"Backspace"===e.key){let t=eb.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eN(0),0))}},rightSectionPointerEvents:U??(K?"none":void 0),rightSectionWidth:et??`var(--ni-right-section-width-${ee||"sm"})`,allowLeadingZeros:eo,allowedDecimalSeparators:eu,onBlur:e=>{let t=ef;"blur"===$&&"number"==typeof t&&(t=(0,u.q)(t,T,V)),el&&"string"==typeof t&&15>ey(t)&&(t=function(e,t,r){let n=e.toString(),o=k.test(n),a=n.replace(/^0+(?=\d)/,""),l=parseFloat(a);if(Number.isNaN(l))return a;if(l>Number.MAX_SAFE_INTEGER)return void 0!==t?t:a;let i=(0,u.q)(l,r,t);if(o){let e=i.toString().replace(/^0+(?=\d)/,"");return`${e}.`}return i}(t,V,T)),ef!==t&&ep(t),q?.(e)},attributes:ei,isAllowed:e=>"strict"===$?Y?Y(e)&&A(e.floatValue,T,V):A(e.floatValue,T,V):!Y||Y(e)})});_.classes={...h.O.classes,...N},_.displayName="@mantine/core/NumberInput"},81247:(e,t,r)=>{r.d(t,{l:()=>c});var n=r(6029),o=r(55729),a=r(38774),l=r(70204),u=r(61087),i=r(69329);let c={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(l.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(u.$,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
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
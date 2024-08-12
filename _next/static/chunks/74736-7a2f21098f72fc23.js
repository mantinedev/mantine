"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74736],{69378:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var n,o,a,u=a[o];if(!e(t[u],r[u]))return!1}return!0}return t!=t&&r!=r}},15463:function(e,t,r){function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,a,u=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);u<r.length;u++)n(a,r[u],Object.getOwnPropertyDescriptor(e,r[u]));for(u=0,r=Object.getOwnPropertyNames(e);u<r.length;u++)Object.hasOwnProperty.call(a,t=r[u])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Y:function(){return o}})},95093:function(e,t,r){r.d(t,{W:function(){return c}});var n=r(52322),o=r(2784),a=r(74770),u=r(42697),i=r(17115),l=r(405);let c={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.o,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(u.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},48165:function(e,t,r){r.d(t,{j:function(){return s}});var n=r(52322),o=r(2784),a=r(74770),u=r(42697),i=r(17115),l=r(405),c=r(3095),m=r(73846);let s={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.o,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(u.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},42697:function(e,t,r){r.d(t,{Y:function(){return x}});var n=r(52322),o=r(2784),a=r(40489),u=r(9462),i=r(9341),l=r(82692),c=r(70837),m=r(91482),s=r(11200),f=r(51477),d=r(46690),p=r(38483),g=r(82027),b=r(73063),h=r(63409);function y({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^(0\.0*|-0(\.0*)?)$/,N=/^-?0\d+(\.\d+)?\.?$/;function j(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let I={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},k=(0,s.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),x=(0,g.d5)((e,t)=>{let r=(0,p.w)("NumberInput",I,e),{className:m,classNames:s,styles:g,unstyled:x,vars:P,onChange:E,onValueChange:O,value:A,defaultValue:D,max:_,min:F,step:R,hideControls:S,rightSection:M,isAllowed:V,clampBehavior:z,onBlur:C,allowDecimal:T,decimalScale:B,onKeyDown:Y,onKeyDownCapture:L,handlersRef:G,startValue:U,disabled:Z,rightSectionPointerEvents:q,allowNegative:J,readOnly:W,size:$,rightSectionWidth:K,stepHoldInterval:X,stepHoldDelay:H,allowLeadingZeros:Q,withKeyboardEvents:ee,trimLeadingZeroesOnBlur:et,...er}=r,en=(0,d.y)({name:"NumberInput",classes:v,props:r,classNames:s,styles:g,unstyled:x,vars:P,varsResolver:k}),{resolvedClassNames:eo,resolvedStyles:ea}=(0,f.h)({classNames:s,styles:g,props:r}),[eu,ei]=(0,i.C)({value:A,defaultValue:D,onChange:E}),el=void 0!==H&&void 0!==X,ec=(0,o.useRef)(null),em=(0,o.useRef)(null),es=(0,o.useRef)(0),ef=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ed=e=>{ec.current&&void 0!==e&&ec.current.setSelectionRange(e,e)},ep=(0,o.useRef)();ep.current=()=>{let e;let t=Math.max(ef(eu),ef(R)),r=10**t;if("number"!=typeof eu||Number.isNaN(eu))e=(0,l.u)(U,F,_);else if(void 0!==_){let t=(Math.round(eu*r)+Math.round(R*r))/r;e=t<=_?t:_}else e=(Math.round(eu*r)+Math.round(R*r))/r;let n=e.toFixed(t);ei(parseFloat(n)),O?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>ed(ec.current?.value.length),0)};let eg=(0,o.useRef)();eg.current=()=>{let e;let t=void 0!==F?F:J?Number.MIN_SAFE_INTEGER:0,r=Math.max(ef(eu),ef(R)),n=10**r;if("number"!=typeof eu||Number.isNaN(eu))e=(0,l.u)(U,t,_);else{let r=(Math.round(eu*n)-Math.round(R*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);ei(parseFloat(o)),O?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>ed(ec.current?.value.length),0)},(0,c.kR)(G,{increment:ep.current,decrement:eg.current});let eb=e=>{e?ep.current():eg.current(),es.current+=1},eh=e=>{if(eb(e),el){let t="number"==typeof X?X:X(es.current);em.current=window.setTimeout(()=>eh(e),t)}},ey=(e,t)=>{e.preventDefault(),ec.current?.focus(),eb(t),el&&(em.current=window.setTimeout(()=>eh(t),H))},ev=()=>{em.current&&window.clearTimeout(em.current),em.current=null,es.current=0},ew=(0,n.jsxs)("div",{...en("controls"),children:[(0,n.jsx)(h.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof eu&&void 0!==_&&eu>=_,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!0)},onPointerUp:ev,onPointerLeave:ev,children:(0,n.jsx)(y,{direction:"up"})}),(0,n.jsx)(h.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof eu&&void 0!==F&&eu<=F,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!1)},onPointerUp:ev,onPointerLeave:ev,children:(0,n.jsx)(y,{direction:"down"})})]});return(0,n.jsx)(b.M,{component:u.h3,allowNegative:J,className:(0,a.Z)(v.root,m),size:$,...er,readOnly:W,disabled:Z,value:eu,getInputRef:(0,c.Yx)(t,ec),onValueChange:(e,t)=>{if("event"===t.source){var r;ei(!(("number"==typeof(r=e.floatValue)?r<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(r)))&&!Number.isNaN(r))||w.test(e.value)||Q&&N.test(e.value)?e.value:e.floatValue)}O?.(e,t)},rightSection:S||W?M:M||ew,classNames:eo,styles:ea,unstyled:x,__staticSelector:"NumberInput",decimalScale:T?B:0,onKeyDown:e=>{Y?.(e),!W&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),ep.current()),"ArrowDown"===e.key&&(e.preventDefault(),eg.current()))},onKeyDownCapture:e=>{if(L?.(e),"Backspace"===e.key){let t=ec.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ed(0),0))}},rightSectionPointerEvents:q??(Z?"none":void 0),rightSectionWidth:K??`var(--ni-right-section-width-${$||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(C?.(e),"blur"===z&&"number"==typeof eu&&(0,l.u)(eu,F,_)!==eu&&ei((0,l.u)(eu,F,_)),et&&"string"==typeof eu){let e=eu.replace(/^0+/,""),t=parseFloat(e);ei(Number.isNaN(t)||t>Number.MAX_SAFE_INTEGER?e:t)}},isAllowed:e=>"strict"===z?V?V(e)&&j(e.floatValue,F,_):j(e.floatValue,F,_):!V||V(e)})});x.classes={...b.M.classes,...v},x.displayName="@mantine/core/NumberInput"},73846:function(e,t,r){r.d(t,{m:function(){return n}});function n({min:e,max:t},r){let n=r||!0;return r=>{if("number"!=typeof r)return n;let o=!0;return"number"==typeof e&&r<e&&(o=!1),"number"==typeof t&&r>t&&(o=!1),o?null:n}}},3095:function(e,t,r){r.d(t,{U:function(){return n}});function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74736],{69378:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,u=a[o];if(!e(t[u],n[u]))return!1}return!0}return t!=t&&n!=n}},15463:function(e,t,n){function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,u=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)r(a,n[u],Object.getOwnPropertyDescriptor(e,n[u]));for(u=0,n=Object.getOwnPropertyNames(e);u<n.length;u++)Object.hasOwnProperty.call(a,t=n[u])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},95093:function(e,t,n){n.d(t,{W:function(){return c}});var r=n(52322),o=n(2784),a=n(74770),u=n(42697),i=n(17115),l=n(79510);let c={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,r.jsxs)(r.Fragment,{children:[(0,o.createElement)(a.o,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(u.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,r.jsx)(i.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},48165:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(52322),o=n(2784),a=n(74770),u=n(42697),i=n(17115),l=n(79510),c=n(3095),m=n(73846);let s={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return(0,r.jsxs)(r.Fragment,{children:[(0,o.createElement)(a.o,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(u.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,r.jsx)(i.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},42697:function(e,t,n){n.d(t,{Y:function(){return x}});var r=n(52322),o=n(2784),a=n(40489),u=n(9462),i=n(9341),l=n(82692),c=n(70837),m=n(91482),s=n(11200),f=n(51477),d=n(46690),p=n(38483),g=n(82027),b=n(73063),h=n(63409);function y({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^-0(\.0*)?$/,N=/^-?0\d+$/;function j(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let I={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,startValue:0},k=(0,s.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),x=(0,g.d)((e,t)=>{let n=(0,p.w)("NumberInput",I,e),{className:m,classNames:s,styles:g,unstyled:x,vars:P,onChange:O,onValueChange:D,value:E,defaultValue:A,max:_,min:F,step:R,hideControls:S,rightSection:M,isAllowed:V,clampBehavior:z,onBlur:C,allowDecimal:T,decimalScale:B,onKeyDown:Y,onKeyDownCapture:L,handlersRef:U,startValue:q,disabled:G,rightSectionPointerEvents:J,allowNegative:W,readOnly:$,size:K,rightSectionWidth:Z,stepHoldInterval:X,stepHoldDelay:H,allowLeadingZeros:Q,withKeyboardEvents:ee,...et}=n,en=(0,d.y)({name:"NumberInput",classes:v,props:n,classNames:s,styles:g,unstyled:x,vars:P,varsResolver:k}),{resolvedClassNames:er,resolvedStyles:eo}=(0,f.h)({classNames:s,styles:g,props:n}),[ea,eu]=(0,i.C)({value:E,defaultValue:A,onChange:O}),ei=void 0!==H&&void 0!==X,el=(0,o.useRef)(null),ec=(0,o.useRef)(null),em=(0,o.useRef)(0),es=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ef=e=>{el.current&&void 0!==e&&el.current.setSelectionRange(e,e)},ed=(0,o.useRef)();ed.current=()=>{let e;let t=Math.max(es(ea),es(R)),n=10**t;if("number"!=typeof ea||Number.isNaN(ea))e=(0,l.u)(q,F,_);else if(void 0!==_){let t=(Math.round(ea*n)+Math.round(R*n))/n;e=t<=_?t:_}else e=(Math.round(ea*n)+Math.round(R*n))/n;let r=e.toFixed(t);eu(parseFloat(r)),D?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>ef(el.current?.value.length),0)};let ep=(0,o.useRef)();ep.current=()=>{let e;let t=void 0!==F?F:W?Number.MIN_SAFE_INTEGER:0,n=Math.max(es(ea),es(R)),r=10**n;if("number"!=typeof ea||Number.isNaN(ea))e=(0,l.u)(q,t,_);else{let n=(Math.round(ea*r)-Math.round(R*r))/r;e=void 0!==t&&n<t?t:n}let o=e.toFixed(n);eu(parseFloat(o)),D?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>ef(el.current?.value.length),0)},(0,c.kR)(U,{increment:ed.current,decrement:ep.current});let eg=e=>{e?ed.current():ep.current(),em.current+=1},eb=e=>{if(eg(e),ei){let t="number"==typeof X?X:X(em.current);ec.current=window.setTimeout(()=>eb(e),t)}},eh=(e,t)=>{e.preventDefault(),el.current?.focus(),eg(t),ei&&(ec.current=window.setTimeout(()=>eb(t),H))},ey=()=>{ec.current&&window.clearTimeout(ec.current),ec.current=null,em.current=0},ev=(0,r.jsxs)("div",{...en("controls"),children:[(0,r.jsx)(h.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof ea&&void 0!==_&&ea>=_,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!0)},onPointerUp:ey,onPointerLeave:ey,children:(0,r.jsx)(y,{direction:"up"})}),(0,r.jsx)(h.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof ea&&void 0!==F&&ea<=F,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!1)},onPointerUp:ey,onPointerLeave:ey,children:(0,r.jsx)(y,{direction:"down"})})]});return(0,r.jsx)(b.M,{component:u.h3,allowNegative:W,className:(0,a.Z)(v.root,m),size:K,...et,readOnly:$,disabled:G,value:ea,getInputRef:(0,c.Yx)(t,el),onValueChange:(e,t)=>{if("event"===t.source){var n;eu(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||w.test(e.value)||Q&&N.test(e.value)?e.value:e.floatValue)}D?.(e,t)},rightSection:S||$?M:M||ev,classNames:er,styles:eo,unstyled:x,__staticSelector:"NumberInput",decimalScale:T?B:0,onKeyDown:e=>{Y?.(e),!$&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),ed.current()),"ArrowDown"===e.key&&(e.preventDefault(),ep.current()))},onKeyDownCapture:e=>{if(L?.(e),"Backspace"===e.key){let t=el.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ef(0),0))}},rightSectionPointerEvents:J??(G?"none":void 0),rightSectionWidth:Z??`var(--ni-right-section-width-${K||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{C?.(e),"blur"===z&&"number"==typeof ea&&(0,l.u)(ea,F,_)!==ea&&eu((0,l.u)(ea,F,_))},isAllowed:e=>"strict"===z?V?V(e)&&j(e.floatValue,F,_):j(e.floatValue,F,_):!V||V(e)})});x.classes={...b.M.classes,...v},x.displayName="@mantine/core/NumberInput"},73846:function(e,t,n){n.d(t,{m:function(){return r}});function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}},3095:function(e,t,n){n.d(t,{U:function(){return r}});function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74736],{69378:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(u=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,u[o]))return!1;for(o=n;0!=o--;){var n,o,u,a=u[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},15463:function(e,t,r){function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,u,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?u=Object.create(e.__proto__||null):"[object Array]"===i?u=Array(e.length):"[object Set]"===i?(u=new Set,e.forEach(function(e){u.add(o(e))})):"[object Map]"===i?(u=new Map,e.forEach(function(e,t){u.set(o(t),o(e))})):"[object Date]"===i?u=new Date(+e):"[object RegExp]"===i?u=new RegExp(e.source,e.flags):"[object DataView]"===i?u=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?u=e.slice(0):"Array]"===i.slice(-6)&&(u=new e.constructor(e)),u){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n(u,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(u,t=r[a])&&u[t]===e[t]||n(u,t,Object.getOwnPropertyDescriptor(e,t))}return u||e}r.d(t,{Y:function(){return o}})},95093:function(e,t,r){r.d(t,{W:function(){return c}});var n=r(52322),o=r(2784),u=r(74770),a=r(42697),i=r(39629),l=r(43092);let c={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(u.o,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(a.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},48165:function(e,t,r){r.d(t,{j:function(){return s}});var n=r(52322),o=r(2784),u=r(74770),a=r(42697),i=r(39629),l=r(43092),c=r(3095),m=r(73846);let s={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(u.o,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(a.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(i.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
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
`,centered:!0,maxWidth:340}},42697:function(e,t,r){r.d(t,{Y:function(){return P}});var n=r(52322),o=r(2784),u=r(40489),a=r(9462),i=r(9341),l=r(82692),c=r(70837),m=r(31938),s=r(91482),f=r(11200),d=r(51477),p=r(46690),g=r(38483),b=r(82027),h=r(73063),y=r(63409);function v({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var N={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^(0\.0*|-0(\.0*)?)$/,j=/^-?0\d+(\.\d+)?\.?$/;function I(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function k(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||I(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function x(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let E={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},A=(0,f.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.ap)(t,"ni-chevron-size")}})),P=(0,b.d5)((e,t)=>{let r=(0,g.w)("NumberInput",E,e),{className:s,classNames:f,styles:b,unstyled:P,vars:_,onChange:O,onValueChange:S,value:D,defaultValue:F,max:R,min:M,step:V,hideControls:T,rightSection:z,isAllowed:C,clampBehavior:B,onBlur:Y,allowDecimal:L,decimalScale:G,onKeyDown:Z,onKeyDownCapture:U,handlersRef:q,startValue:J,disabled:W,rightSectionPointerEvents:X,allowNegative:$,readOnly:K,size:H,rightSectionWidth:Q,stepHoldInterval:ee,stepHoldDelay:et,allowLeadingZeros:er,withKeyboardEvents:en,trimLeadingZeroesOnBlur:eo,...eu}=r,ea=(0,p.y)({name:"NumberInput",classes:N,props:r,classNames:f,styles:b,unstyled:P,vars:_,varsResolver:A}),{resolvedClassNames:ei,resolvedStyles:el}=(0,d.h)({classNames:f,styles:b,props:r}),[ec,em]=(0,i.C)({value:D,defaultValue:F,finalValue:"",onChange:O}),es=void 0!==et&&void 0!==ee,ef=(0,o.useRef)(null),ed=(0,o.useRef)(null),ep=(0,o.useRef)(0),eg=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eb=e=>{ef.current&&void 0!==e&&ef.current.setSelectionRange(e,e)},eh=(0,o.useRef)(m.Z);eh.current=()=>{let e;if(!k(ec))return;let t=Math.max(eg(ec),eg(V)),r=10**t;if(!I(ec)&&("number"!=typeof ec||Number.isNaN(ec)))e=(0,l.u)(J,M,R);else if(void 0!==R){let t=(Math.round(Number(ec)*r)+Math.round(V*r))/r;e=t<=R?t:R}else e=(Math.round(Number(ec)*r)+Math.round(V*r))/r;let n=e.toFixed(t);em(parseFloat(n)),S?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>eb(ef.current?.value.length),0)};let ey=(0,o.useRef)(m.Z);ey.current=()=>{let e;if(!k(ec))return;let t=void 0!==M?M:$?Number.MIN_SAFE_INTEGER:0,r=Math.max(eg(ec),eg(V)),n=10**r;if(!I(ec)&&"number"!=typeof ec||Number.isNaN(ec))e=(0,l.u)(J,t,R);else{let r=(Math.round(Number(ec)*n)-Math.round(V*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);em(parseFloat(o)),S?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eb(ef.current?.value.length),0)},(0,c.kR)(q,{increment:eh.current,decrement:ey.current});let ev=e=>{e?eh.current():ey.current(),ep.current+=1},eN=e=>{if(ev(e),es){let t="number"==typeof ee?ee:ee(ep.current);ed.current=window.setTimeout(()=>eN(e),t)}},ew=(e,t)=>{e.preventDefault(),ef.current?.focus(),ev(t),es&&(ed.current=window.setTimeout(()=>eN(t),et))},ej=()=>{ed.current&&window.clearTimeout(ed.current),ed.current=null,ep.current=0},eI=(0,n.jsxs)("div",{...ea("controls"),children:[(0,n.jsx)(y.k,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:W||"number"==typeof ec&&void 0!==R&&ec>=R,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ew(e,!0)},onPointerUp:ej,onPointerLeave:ej,children:(0,n.jsx)(v,{direction:"up"})}),(0,n.jsx)(y.k,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:W||"number"==typeof ec&&void 0!==M&&ec<=M,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ew(e,!1)},onPointerUp:ej,onPointerLeave:ej,children:(0,n.jsx)(v,{direction:"down"})})]});return(0,n.jsx)(h.M,{component:a.h3,allowNegative:$,className:(0,u.Z)(N.root,s),size:H,...eu,readOnly:K,disabled:W,value:ec,getInputRef:(0,c.Yx)(t,ef),onValueChange:(e,t)=>{var r,n;"event"===t.source&&em((r=e.floatValue,n=e.value,("number"==typeof r?!(r<Number.MAX_SAFE_INTEGER):!!Number.isNaN(Number(r)))||Number.isNaN(r)||!(14>n.toString().replace(".","").length)||""===n||w.test(e.value)||er&&j.test(e.value))?e.value:e.floatValue),S?.(e,t)},rightSection:T||K||!k(ec)?z:z||eI,classNames:ei,styles:el,unstyled:P,__staticSelector:"NumberInput",decimalScale:L?G:0,onKeyDown:e=>{Z?.(e),!K&&en&&("ArrowUp"===e.key&&(e.preventDefault(),eh.current()),"ArrowDown"===e.key&&(e.preventDefault(),ey.current()))},onKeyDownCapture:e=>{if(U?.(e),"Backspace"===e.key){let t=ef.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eb(0),0))}},rightSectionPointerEvents:X??(W?"none":void 0),rightSectionWidth:Q??`var(--ni-right-section-width-${H||"sm"})`,allowLeadingZeros:er,onBlur:e=>{let t=ec;if("blur"===B&&"number"==typeof t&&(t=(0,l.u)(t,M,R)),eo&&"string"==typeof t&&15>eg(t)){let e=t.toString().replace(/^0+/,""),r=parseFloat(e);t=Number.isNaN(r)||r>Number.MAX_SAFE_INTEGER?e:(0,l.u)(r,M,R)}ec!==t&&em(t),Y?.(e)},isAllowed:e=>"strict"===B?C?C(e)&&x(e.floatValue,M,R):x(e.floatValue,M,R):!C||C(e)})});P.classes={...h.M.classes,...N},P.displayName="@mantine/core/NumberInput"},73846:function(e,t,r){r.d(t,{m:function(){return n}});function n({min:e,max:t},r){let n=r||!0;return r=>{if("number"!=typeof r)return n;let o=!0;return"number"==typeof e&&r<e&&(o=!1),"number"==typeof t&&r>t&&(o=!1),o?null:n}}},3095:function(e,t,r){r.d(t,{U:function(){return n}});function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45083],{69378:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,l=a[o];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},15463:function(e,t,n){function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,l=0,u=Object.prototype.toString.call(e);if("[object Object]"===u?a=Object.create(e.__proto__||null):"[object Array]"===u?a=Array(e.length):"[object Set]"===u?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===u?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===u?a=new Date(+e):"[object RegExp]"===u?a=new RegExp(e.source,e.flags):"[object DataView]"===u?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===u?a=e.slice(0):"Array]"===u.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r(a,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(a,t=n[l])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},89937:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2784),o=n(74770),a=n(42697),l=n(59259);let u=`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
    </>
  );
}
`,i={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}))},code:u,centered:!0,maxWidth:340}},95093:function(e,t,n){n.d(t,{W:function(){return m}});var r=n(2784),o=n(74770),a=n(42697),l=n(17115),u=n(59259);let i=`
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
      <TextInput {...form.getInputProps('name')} label="Your name" placeholder="Your name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,m={type:"code",component:function(){let e=(0,u.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Your name",placeholder:"Your name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md"},"Initialize form"))},code:i,centered:!0,maxWidth:340}},43084:function(e,t,n){n.d(t,{w:function(){return i}});var r=n(2784),o=n(74770),a=n(42697),l=n(59259);let u=`
import { NumberInput, TextInput } from '@mantine/core';
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
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
    </>
  );
}
`,i={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name",{fieldType:"name"})}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}))},code:u,centered:!0,maxWidth:340}},48165:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(2784),o=n(74770),a=n(42697),l=n(17115),u=n(59259),i=n(3095),m=n(73846);let c=`
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
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,s={type:"code",component:function(){let e=(0,u.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,i.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md"},"Initialize form"))},code:c,centered:!0,maxWidth:340}},42697:function(e,t,n){n.d(t,{Y:function(){return E}});var r=n(2784),o=n(40489),a=n(9462),l=n(9341),u=n(82692),i=n(70837),m=n(91482),c=n(11200),s=n(51477),p=n(62378),d=n(38483),f=n(82027),g=n(73063),b=n(63409);function h({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let y=/^-0(\.0*)?$/,I=/^-?0\d+$/;function w(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let N={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,startValue:0},P=(0,c.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),E=(0,f.d)((e,t)=>{let n=(0,d.w)("NumberInput",N,e),{className:m,classNames:c,styles:f,unstyled:E,vars:A,onChange:F,onValueChange:j,value:x,defaultValue:V,max:O,min:D,step:T,hideControls:k,rightSection:Y,isAllowed:_,clampBehavior:R,onBlur:M,allowDecimal:z,decimalScale:S,onKeyDown:C,handlersRef:B,startValue:G,disabled:J,rightSectionPointerEvents:L,allowNegative:W,readOnly:U,size:q,rightSectionWidth:$,stepHoldInterval:Z,stepHoldDelay:K,allowLeadingZeros:X,withKeyboardEvents:H,...Q}=n,ee=(0,p.y)({name:"NumberInput",classes:v,props:n,classNames:c,styles:f,unstyled:E,vars:A,varsResolver:P}),{resolvedClassNames:et,resolvedStyles:en}=(0,s.h)({classNames:c,styles:f,props:n}),[er,eo]=(0,l.C)({value:x,defaultValue:V,onChange:F}),ea=void 0!==K&&void 0!==Z,el=(0,r.useRef)(null),eu=(0,r.useRef)(null),ei=(0,r.useRef)(0),em=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ec=e=>{el.current&&e&&el.current.setSelectionRange(e,e)},es=(0,r.useRef)();es.current=()=>{let e;let t=em(er),n=em(T),r=Math.max(t,n),o=10**r;if("number"!=typeof er||Number.isNaN(er))e=(0,u.u)(G,D,O);else if(void 0!==O){let t=(Math.round(er*o)+Math.round(T*o))/o;e=t<=O?t:O}else e=(Math.round(er*o)+Math.round(T*o))/o;let a=e.toFixed(r);eo(parseFloat(a)),j?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"increment"}),setTimeout(()=>ec(el.current?.value.length),0)};let ep=(0,r.useRef)();ep.current=()=>{let e;let t=em(er),n=em(T),r=Math.max(t,n),o=10**r;if("number"!=typeof er||Number.isNaN(er))e=(0,u.u)(G,D,O);else{let t=(Math.round(er*o)-Math.round(T*o))/o;e=void 0!==D&&t<D?D:t}let a=e.toFixed(r);eo(parseFloat(a)),j?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>ec(el.current?.value.length),0)},(0,i.kR)(B,{increment:es.current,decrement:ep.current});let ed=e=>{e?es.current():ep.current(),ei.current+=1},ef=e=>{if(ed(e),ea){let t="number"==typeof Z?Z:Z(ei.current);eu.current=window.setTimeout(()=>ef(e),t)}},eg=(e,t)=>{e.preventDefault(),el.current?.focus(),ed(t),ea&&(eu.current=window.setTimeout(()=>ef(t),K))},eb=()=>{eu.current&&window.clearTimeout(eu.current),eu.current=null,ei.current=0},eh=r.createElement("div",{...ee("controls")},r.createElement(b.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:J||"number"==typeof er&&void 0!==O&&er>=O,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!0)},onPointerUp:eb,onPointerLeave:eb},r.createElement(h,{direction:"up"})),r.createElement(b.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:J||"number"==typeof er&&void 0!==D&&er<=D,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!1)},onPointerUp:eb,onPointerLeave:eb},r.createElement(h,{direction:"down"})));return r.createElement(g.M,{component:a.h3,allowNegative:W,className:(0,o.Z)(v.root,m),size:q,...Q,readOnly:U,disabled:J,value:er,getInputRef:(0,i.Yx)(t,el),onValueChange:(e,t)=>{if("event"===t.source){var n;eo(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||y.test(e.value)||X&&I.test(e.value)?e.value:e.floatValue)}j?.(e,t)},rightSection:k||U?Y:Y||eh,classNames:et,styles:en,unstyled:E,__staticSelector:"NumberInput",decimalScale:z?S:0,onKeyDown:e=>{C?.(e),!U&&H&&("ArrowUp"===e.key&&(e.preventDefault(),es.current()),"ArrowDown"===e.key&&(e.preventDefault(),ep.current()))},rightSectionPointerEvents:L??(J?"none":void 0),rightSectionWidth:$??`var(--ni-right-section-width-${q||"sm"})`,allowLeadingZeros:X,onBlur:e=>{if(M?.(e),"blur"===R&&"number"==typeof er){let e=(0,u.u)(er,D,O);e!==er&&eo((0,u.u)(er,D,O))}},isAllowed:e=>"strict"===R?_?_(e)&&w(e.floatValue,D,O):w(e.floatValue,D,O):!_||_(e)})});E.classes={...g.M.classes,...v},E.displayName="@mantine/core/NumberInput"},73846:function(e,t,n){n.d(t,{m:function(){return r}});function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}},3095:function(e,t,n){n.d(t,{U:function(){return r}});function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);
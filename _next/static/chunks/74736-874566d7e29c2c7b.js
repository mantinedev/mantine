"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74736],{69378:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,u=a[o];if(!e(t[u],n[u]))return!1}return!0}return t!=t&&n!=n}},15463:function(e,t,n){function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,u=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?a=Object.create(e.__proto__||null):"[object Array]"===l?a=Array(e.length):"[object Set]"===l?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===l?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===l?a=new Date(+e):"[object RegExp]"===l?a=new RegExp(e.source,e.flags):"[object DataView]"===l?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?a=e.slice(0):"Array]"===l.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)r(a,n[u],Object.getOwnPropertyDescriptor(e,n[u]));for(u=0,n=Object.getOwnPropertyNames(e);u<n.length;u++)Object.hasOwnProperty.call(a,t=n[u])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},95093:function(e,t,n){n.d(t,{W:function(){return c}});var r=n(2784),o=n(74770),a=n(42697),u=n(17115),l=n(59259);let i=`
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
`,c={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),r.createElement(a.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(u.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md"},"Initialize form"))},code:i,centered:!0,maxWidth:340}},48165:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(2784),o=n(74770),a=n(42697),u=n(17115),l=n(59259),i=n(3095),c=n(73846);let m=`
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
`,s={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,i.U)("Name is required"),age:(0,c.m)({min:18},"You must be at least 18 to register")}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(u.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md"},"Initialize form"))},code:m,centered:!0,maxWidth:340}},42697:function(e,t,n){n.d(t,{Y:function(){return I}});var r=n(2784),o=n(40489),a=n(9462),u=n(9341),l=n(82692),i=n(70837),c=n(91482),m=n(11200),s=n(51477),f=n(62378),p=n(38483),d=n(82027),g=n(73063),b=n(63409);function h({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var y={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let v=/^-0(\.0*)?$/,w=/^-?0\d+$/;function N(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let k={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,startValue:0},E=(0,m.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,c.ap)(t,"ni-chevron-size")}})),I=(0,d.d)((e,t)=>{let n=(0,p.w)("NumberInput",k,e),{className:c,classNames:m,styles:d,unstyled:I,vars:j,onChange:P,onValueChange:O,value:D,defaultValue:A,max:x,min:_,step:F,hideControls:R,rightSection:S,isAllowed:V,clampBehavior:M,onBlur:z,allowDecimal:C,decimalScale:T,onKeyDown:B,onKeyDownCapture:Y,handlersRef:L,startValue:U,disabled:q,rightSectionPointerEvents:J,allowNegative:W,readOnly:$,size:G,rightSectionWidth:K,stepHoldInterval:Z,stepHoldDelay:X,allowLeadingZeros:H,withKeyboardEvents:Q,...ee}=n,et=(0,f.y)({name:"NumberInput",classes:y,props:n,classNames:m,styles:d,unstyled:I,vars:j,varsResolver:E}),{resolvedClassNames:en,resolvedStyles:er}=(0,s.h)({classNames:m,styles:d,props:n}),[eo,ea]=(0,u.C)({value:D,defaultValue:A,onChange:P}),eu=void 0!==X&&void 0!==Z,el=(0,r.useRef)(null),ei=(0,r.useRef)(null),ec=(0,r.useRef)(0),em=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},es=e=>{el.current&&void 0!==e&&el.current.setSelectionRange(e,e)},ef=(0,r.useRef)();ef.current=()=>{let e;let t=em(eo),n=em(F),r=Math.max(t,n),o=10**r;if("number"!=typeof eo||Number.isNaN(eo))e=(0,l.u)(U,_,x);else if(void 0!==x){let t=(Math.round(eo*o)+Math.round(F*o))/o;e=t<=x?t:x}else e=(Math.round(eo*o)+Math.round(F*o))/o;let a=e.toFixed(r);ea(parseFloat(a)),O?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"increment"}),setTimeout(()=>es(el.current?.value.length),0)};let ep=(0,r.useRef)();ep.current=()=>{let e;let t=em(eo),n=em(F),r=Math.max(t,n),o=10**r;if("number"!=typeof eo||Number.isNaN(eo))e=(0,l.u)(U,_,x);else{let t=(Math.round(eo*o)-Math.round(F*o))/o;e=void 0!==_&&t<_?_:t}let a=e.toFixed(r);ea(parseFloat(a)),O?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>es(el.current?.value.length),0)},(0,i.kR)(L,{increment:ef.current,decrement:ep.current});let ed=e=>{e?ef.current():ep.current(),ec.current+=1},eg=e=>{if(ed(e),eu){let t="number"==typeof Z?Z:Z(ec.current);ei.current=window.setTimeout(()=>eg(e),t)}},eb=(e,t)=>{e.preventDefault(),el.current?.focus(),ed(t),eu&&(ei.current=window.setTimeout(()=>eg(t),X))},eh=()=>{ei.current&&window.clearTimeout(ei.current),ei.current=null,ec.current=0},ey=r.createElement("div",{...et("controls")},r.createElement(b.k,{...et("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof eo&&void 0!==x&&eo>=x,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eb(e,!0)},onPointerUp:eh,onPointerLeave:eh},r.createElement(h,{direction:"up"})),r.createElement(b.k,{...et("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof eo&&void 0!==_&&eo<=_,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eb(e,!1)},onPointerUp:eh,onPointerLeave:eh},r.createElement(h,{direction:"down"})));return r.createElement(g.M,{component:a.h3,allowNegative:W,className:(0,o.Z)(y.root,c),size:G,...ee,readOnly:$,disabled:q,value:eo,getInputRef:(0,i.Yx)(t,el),onValueChange:(e,t)=>{if("event"===t.source){var n;ea(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||v.test(e.value)||H&&w.test(e.value)?e.value:e.floatValue)}O?.(e,t)},rightSection:R||$?S:S||ey,classNames:en,styles:er,unstyled:I,__staticSelector:"NumberInput",decimalScale:C?T:0,onKeyDown:e=>{B?.(e),!$&&Q&&("ArrowUp"===e.key&&(e.preventDefault(),ef.current()),"ArrowDown"===e.key&&(e.preventDefault(),ep.current()))},onKeyDownCapture:e=>{if(Y?.(e),"Backspace"===e.key){let t=el.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>es(0),0))}},rightSectionPointerEvents:J??(q?"none":void 0),rightSectionWidth:K??`var(--ni-right-section-width-${G||"sm"})`,allowLeadingZeros:H,onBlur:e=>{if(z?.(e),"blur"===M&&"number"==typeof eo){let e=(0,l.u)(eo,_,x);e!==eo&&ea((0,l.u)(eo,_,x))}},isAllowed:e=>"strict"===M?V?V(e)&&N(e.floatValue,_,x):N(e.floatValue,_,x):!V||V(e)})});I.classes={...g.M.classes,...y},I.displayName="@mantine/core/NumberInput"},73846:function(e,t,n){n.d(t,{m:function(){return r}});function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}},3095:function(e,t,n){n.d(t,{U:function(){return r}});function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);
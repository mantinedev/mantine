(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61356],{66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},59945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validators",function(){return n(91927)}])},91927:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(24246),o=n(71670),a=n(27378),i=n(56589),l=n(7033),s=n(62339),m=n(22971),u=n(8671),c=n(56926);function d(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function h(e,t){let n=t||!0;return t=>"string"==typeof t?d(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&d(e,t)?null:n}var f=n(31877);function p(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}function g(e){return p(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}var b=n(52865);let v=`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
`,x={type:"code",component:function(){let e=(0,c.c)({initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:h({min:2,max:10},"Name must be 2-22 characters long"),job:(0,f.U)("Enter your current job"),email:g("Invalid email"),favoriteColor:p(/^#([0-9a-f]{3}){1,2}$/,"Enter a valid hex color"),age:(0,b.m)({min:18,max:99},"You must be 18-99 years old to register")}});return a.createElement(i.x,{component:"form",maw:400,mx:"auto",onSubmit:e.onSubmit(()=>{})},a.createElement(l.o,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")}),a.createElement(l.o,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")}),a.createElement(l.o,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")}),a.createElement(l.o,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")}),a.createElement(s.Y,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")}),a.createElement(m.Z,{justify:"flex-end",mt:"md"},a.createElement(u.z,{type:"submit"},"Submit")))},code:v},j=`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
    },
  });

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
`,y={type:"code",component:function(){let e=(0,c.c)({initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:h({min:2,max:10}),job:(0,f.U)(),email:g(),favoriteColor:p(/^#([0-9a-f]{3}){1,2}$/),age:(0,b.m)({min:18,max:99})}});return a.createElement(i.x,{component:"form",maw:400,mx:"auto",onSubmit:e.onSubmit(()=>{})},a.createElement(l.o,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")}),a.createElement(l.o,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")}),a.createElement(l.o,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")}),a.createElement(l.o,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")}),a.createElement(s.Y,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")}),a.createElement(m.Z,{justify:"flex-end",mt:"md"},a.createElement(u.z,{type:"submit"},"Submit")))},code:j};var w=n(3916),E=n(54568);let N=(0,w.A)(E.us.formValidators);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/form"})," package exports several functions that can be used in ",(0,r.jsx)(t.a,{href:"/form/validation/#validation-with-rules-object",children:"validation rules object"}),".\nValidation functions are tiny in size and provide basic validation, if you have complex validation requirements, use other types of ",(0,r.jsx)(t.a,{href:"/form/validation/",children:"validation"}),"."]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"optional-error",children:"Optional error"}),"\n",(0,r.jsx)(t.p,{children:"Last argument of all validator functions below is optional. If error is not set, then fields with failed validation will\nonly have invalid styles without error message:"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"isnotempty",children:"isNotEmpty"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isNotEmpty"})," checks that form value is not empty. Empty string, empty array, ",(0,r.jsx)(t.code,{children:"false"}),", ",(0,r.jsx)(t.code,{children:"null"})," and ",(0,r.jsx)(t.code,{children:"undefined"}),"\nvalues are considered to be empty. Strings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isNotEmpty, useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    acceptTermsOfUse: false,\n    country: null,\n    previousJobs: [],\n  },\n\n  validate: {\n    // Empty strings are considered to be invalid\n    name: isNotEmpty('Name cannot be empty'),\n\n    // False value is considered to be invalid\n    acceptTermsOfUse: isNotEmpty('You must accept terms of use'),\n\n    // null is considered to be invalid\n    country: isNotEmpty('Pick your country'),\n\n    // Empty arrays are considered to be invalid\n    previousJobs: isNotEmpty('Enter at least one job'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isemail",children:"isEmail"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isEmail"})," uses ",(0,r.jsx)(t.code,{children:"/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$/"})," regexp to determine whether form value is an email:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isEmail, useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    email: '',\n  },\n\n  validate: {\n    email: isEmail('Invalid email'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matches",children:"matches"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matches"})," checks whether form value matches given regexp. If form value is not a string, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matches, useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    color: '',\n  },\n\n  validate: {\n    color: matches(/^#([0-9a-f]{3}){1,2}$/, 'Invalid color'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isinrange",children:"isInRange"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isInRange"})," checks whether form value is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range. If form value is not a number, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isInRange, useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    maxRange: 0,\n    minRange: 0,\n    minMaxRange: 0,\n  },\n\n  validate: {\n    maxRange: isInRange({ max: 20 }, 'Value must be 20 or less'),\n    minRange: isInRange({ min: 10 }, 'Value must be 10 or more'),\n    minMaxRange: isInRange(\n      { min: 10, max: 20 },\n      'Value must be between 10 and 20'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"haslength",children:"hasLength"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"hasLength"})," check whether form value length is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range.\n",(0,r.jsx)(t.code,{children:"hasLength"})," will work correctly with strings, arrays and any other objects that have ",(0,r.jsx)(t.code,{children:"length"})," property.\nStrings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, hasLength } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    exact: '',\n    maxLength: '',\n    minLength: '',\n    minMaxLength: '',\n  },\n\n  validate: {\n    exact: hasLength(5, 'Values must have exactly 5 characters')\n    maxLength: hasLength({ max: 20 }, 'Value must have 20 or less characters'),\n    minLength: hasLength({ min: 10 }, 'Value must have 10  or more characters'),\n    minMaxLength: hasLength({ min: 10, max: 20 }, 'Value must have 10-20 characters'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matchesfield",children:"matchesField"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matchesField"})," checks whether form value is the same as value in other form field.\nNote that ",(0,r.jsx)(t.code,{children:"matchesField"})," can only work with primitive values (arrays and objects cannot be compared)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matchesField, useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    password: '',\n    confirmPassword: '',\n  },\n\n  validate: {\n    confirmPassword: matchesField(\n      'password',\n      'Passwords are not the same'\n    ),\n  },\n});\n"})})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(N,{...e,children:(0,r.jsx)(I,{...e})})}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,i=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?a=Object.create(e.__proto__||null):"[object Array]"===l?a=Array(e.length):"[object Set]"===l?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===l?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===l?a=new Date(+e):"[object RegExp]"===l?a=new RegExp(e.source,e.flags):"[object DataView]"===l?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?a=e.slice(0):"Array]"===l.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r(a,n[i],Object.getOwnPropertyDescriptor(e,n[i]));for(i=0,n=Object.getOwnPropertyNames(e);i<n.length;i++)Object.hasOwnProperty.call(a,t=n[i])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},62339:function(e,t,n){"use strict";n.d(t,{Y:function(){return N}});var r=n(27378),o=n(40624),a=n(62740),i=n(58675),l=n(28086),s=n(72840),m=n(92082),u=n(83453),c=n(5564),d=n(6231),h=n(96739),f=n(20410),p=n(23163),g=n(19397);function b({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};let x=/^-0(\.0*)?$/,j=/^-?0\d+$/;function y(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let w={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},E=(0,u.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),N=(0,f.d)((e,t)=>{let n=(0,h.w)("NumberInput",w,e),{className:m,classNames:u,styles:f,unstyled:N,vars:I,onChange:k,onValueChange:P,value:Y,defaultValue:A,max:S,min:V,step:O,hideControls:R,rightSection:L,isAllowed:_,clampBehavior:F,onBlur:C,allowDecimal:D,decimalScale:T,onKeyDown:B,handlersRef:M,startValue:z,disabled:$,rightSectionPointerEvents:U,allowNegative:Z,readOnly:G,size:X,rightSectionWidth:J,stepHoldInterval:q,stepHoldDelay:K,allowLeadingZeros:W,...H}=n,Q=(0,d.y)({name:"NumberInput",classes:v,props:n,classNames:u,styles:f,unstyled:N,vars:I,varsResolver:E}),{resolvedClassNames:ee,resolvedStyles:et}=(0,c.h)({classNames:u,styles:f,props:n}),[en,er]=(0,i.C)({value:Y,defaultValue:A,onChange:k}),eo=void 0!==K&&void 0!==q,ea=(0,r.useRef)(null),ei=(0,r.useRef)(null),el=(0,r.useRef)(0),es=(0,r.useRef)();es.current=()=>{let e;er(e="number"!=typeof en||Number.isNaN(en)?(0,l.u)(z,V,S):void 0!==S?en+O<=S?en+O:S:en+O),P?.({floatValue:e,formattedValue:e.toString(),value:e.toString()},{source:"increment"})};let em=(0,r.useRef)();em.current=()=>{let e;er(e="number"!=typeof en||Number.isNaN(en)?(0,l.u)(z,V,S):function({value:e,min:t,step:n=1,allowNegative:r}){let o=e-n;return void 0!==t&&o<t?t:!r&&o<0&&void 0===t?e:o}({value:en,min:V,step:O,allowNegative:Z})),P?.({floatValue:e,formattedValue:e.toString(),value:e.toString()},{source:"decrement"})},(0,s.kR)(M,{increment:es.current,decrement:em.current});let eu=e=>{e?es.current():em.current(),el.current+=1},ec=e=>{if(eu(e),eo){let t="number"==typeof q?q:q(el.current);ei.current=window.setTimeout(()=>ec(e),t)}},ed=(e,t)=>{e.preventDefault(),ea.current?.focus(),eu(t),eo&&(ei.current=window.setTimeout(()=>ec(t),K))},eh=()=>{ei.current&&window.clearTimeout(ei.current),ei.current=null,el.current=0},ef=r.createElement("div",{...Q("controls")},r.createElement(g.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof en&&void 0!==S&&en>=S,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!0)},onPointerUp:eh,onPointerLeave:eh},r.createElement(b,{direction:"up"})),r.createElement(g.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof en&&void 0!==V&&en<=V,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!1)},onPointerUp:eh,onPointerLeave:eh},r.createElement(b,{direction:"down"})));return r.createElement(p.M,{component:a.h3,allowNegative:Z,className:(0,o.Z)(v.root,m),size:X,...H,readOnly:G,disabled:$,value:en,getInputRef:(0,s.Yx)(t,ea),onValueChange:(e,t)=>{if("event"===t.source){var n;er(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||x.test(e.value)||W&&j.test(e.value)?e.value:e.floatValue)}P?.(e,t)},rightSection:R||G?L:L||ef,classNames:ee,styles:et,unstyled:N,__staticSelector:"NumberInput",decimalScale:D?T:0,onKeyDown:e=>{B?.(e),G||("ArrowUp"===e.key&&(e.preventDefault(),es.current()),"ArrowDown"===e.key&&(e.preventDefault(),em.current()))},rightSectionPointerEvents:U??($?"none":void 0),rightSectionWidth:J??`var(--ni-right-section-width-${X||"sm"})`,allowLeadingZeros:W,onBlur:e=>{if(C?.(e),"blur"===F&&"number"==typeof en){let e=(0,l.u)(en,V,S);e!==en&&er((0,l.u)(en,V,S))}},isAllowed:e=>"strict"===F?_?_(e)&&y(e.floatValue,V,S):y(e.floatValue,V,S):!_||_(e)})});N.classes={...p.M.classes,...v},N.displayName="@mantine/core/NumberInput"},52865:function(e,t,n){"use strict";function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}n.d(t,{m:function(){return r}})},31877:function(e,t,n){"use strict";function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}n.d(t,{U:function(){return r}})}},function(e){e.O(0,[30370,62740,15819,2775,56926,49774,92888,40179],function(){return e(e.s=59945)}),_N_E=e.O()}]);
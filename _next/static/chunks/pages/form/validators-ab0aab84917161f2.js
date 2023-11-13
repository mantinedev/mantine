(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1356],{20203:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validators",function(){return n(44430)}])},44430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(85893),o=n(11151),a=n(19905),i=n(9904),l=n(67294),s=n(20160);function m(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function c(e,t){let n=t||!0;return t=>"string"==typeof t?m(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&m(e,t)?null:n}function u(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}function d(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}function p(e){return d(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}function f({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}var h=n(81110),b=n(50780),g=n(95645),v=n(16262),y=n(14469),j=Object.defineProperty,x=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&N(e,n,t[n]);if(x)for(var n of x(t))E.call(t,n)&&N(e,n,t[n]);return e};let I=`
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
`,P={type:"code",component:function(){let e=(0,s.c)({initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:c({min:2,max:10},"Name must be 2-22 characters long"),job:u("Enter your current job"),email:p("Invalid email"),favoriteColor:d(/^#([0-9a-f]{3}){1,2}$/,"Enter a valid hex color"),age:f({min:18,max:99},"You must be 18-99 years old to register")}});return l.createElement(h.x,{component:"form",maw:400,mx:"auto",onSubmit:e.onSubmit(()=>{})},l.createElement(b.o,O({label:"Name",placeholder:"Name",withAsterisk:!0},e.getInputProps("name"))),l.createElement(b.o,O({label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md"},e.getInputProps("job"))),l.createElement(b.o,O({label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md"},e.getInputProps("email"))),l.createElement(b.o,O({label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md"},e.getInputProps("favoriteColor"))),l.createElement(g.Y,O({label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md"},e.getInputProps("age"))),l.createElement(v.Z,{justify:"flex-end",mt:"md"},l.createElement(y.z,{type:"submit"},"Submit")))},code:I};var k=Object.defineProperty,Y=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&V(e,n,t[n]);if(Y)for(var n of Y(t))S.call(t,n)&&V(e,n,t[n]);return e};let R=`
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
`,F={type:"code",component:function(){let e=(0,s.c)({initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:c({min:2,max:10}),job:u(),email:p(),favoriteColor:d(/^#([0-9a-f]{3}){1,2}$/),age:f({min:18,max:99})}});return l.createElement(h.x,{component:"form",maw:400,mx:"auto",onSubmit:e.onSubmit(()=>{})},l.createElement(b.o,C({label:"Name",placeholder:"Name",withAsterisk:!0},e.getInputProps("name"))),l.createElement(b.o,C({label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md"},e.getInputProps("job"))),l.createElement(b.o,C({label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md"},e.getInputProps("email"))),l.createElement(b.o,C({label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md"},e.getInputProps("favoriteColor"))),l.createElement(g.Y,C({label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md"},e.getInputProps("age"))),l.createElement(v.Z,{justify:"flex-end",mt:"md"},l.createElement(y.z,{type:"submit"},"Submit")))},code:R},L=(0,a.A)(i.us.formValidators);function _(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/form"})," package exports several functions that can be used in ",(0,r.jsx)(t.a,{href:"/form/validation/#validation-with-rules-object",children:"validation rules object"}),".\nValidation functions are tiny in size and provide basic validation, if you have complex validation requirements, use other types of ",(0,r.jsx)(t.a,{href:"/form/validation/",children:"validation"}),"."]}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"optional-error",children:"Optional error"}),"\n",(0,r.jsx)(t.p,{children:"Last argument of all validator functions below is optional. If error is not set, then fields with failed validation will\nonly have invalid styles without error message:"}),"\n",(0,r.jsx)(n,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"isnotempty",children:"isNotEmpty"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isNotEmpty"})," checks that form value is not empty. Empty string, empty array, ",(0,r.jsx)(t.code,{children:"false"}),", ",(0,r.jsx)(t.code,{children:"null"})," and ",(0,r.jsx)(t.code,{children:"undefined"}),"\nvalues are considered to be empty. Strings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, isNotEmpty } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    acceptTermsOfUse: false,\n    country: null,\n    previousJobs: [],\n  },\n\n  validate: {\n    // Empty strings are considered to be invalid\n    name: isNotEmpty('Name cannot be empty'),\n\n    // False value is considered to be invalid\n    acceptTermsOfUse: isNotEmpty('You must accept terms of use'),\n\n    // null is considered to be invalid\n    country: isNotEmpty('Pick your country'),\n\n    // Empty arrays are considered to be invalid\n    previousJobs: isNotEmpty('Enter at least one job'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isemail",children:"isEmail"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isEmail"})," uses ",(0,r.jsx)(t.code,{children:"/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/"})," regexp to determine whether form value is an email:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, isEmail } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    email: '',\n  },\n\n  validate: {\n    email: isEmail('Invalid email'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matches",children:"matches"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matches"})," checks whether form value matches given regexp. If form value is not a string, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, matches } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    color: '',\n  },\n\n  validate: {\n    color: matches(/^#([0-9a-f]{3}){1,2}$/, 'Invalid color'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isinrange",children:"isInRange"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isInRange"})," checks whether form value is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range. If form value is not a number, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, isInRange } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    maxRange: 0,\n    minRange: 0,\n    minMaxRange: 0,\n  },\n\n  validate: {\n    maxRange: isInRange({ max: 20 }, 'Value must be 20 or less'),\n    minRange: isInRange({ min: 10 }, 'Value must be 10 or more'),\n    minMaxRange: isInRange({ min: 10, max: 20 }, 'Value must be between 10 and 20'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"haslength",children:"hasLength"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"hasLength"})," check whether form value length is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range.\n",(0,r.jsx)(t.code,{children:"hasLength"})," will work correctly with strings, arrays and any other objects that have ",(0,r.jsx)(t.code,{children:"length"})," property.\nStrings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, hasLength } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    exact: '',\n    maxLength: '',\n    minLength: '',\n    minMaxLength: '',\n  },\n\n  validate: {\n    exact: hasLength(5, 'Values must have exactly 5 characters')\n    maxLength: hasLength({ max: 20 }, 'Value must have 20 or less characters'),\n    minLength: hasLength({ min: 10 }, 'Value must have 10  or more characters'),\n    minMaxLength: hasLength({ min: 10, max: 20 }, 'Value must have 10-20 characters'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matchesfield",children:"matchesField"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matchesField"})," checks whether form value is the same as value in other form field.\nNote that ",(0,r.jsx)(t.code,{children:"matchesField"})," can only work with primitive values (arrays and objects cannot be compared)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, matchesField } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    password: '',\n    confirmPassword: '',\n  },\n\n  validate: {\n    confirmPassword: matchesField('password', 'Passwords are not the same'),\n  },\n});\n"})})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(L,Object.assign({},e,{children:(0,r.jsx)(_,e)}))}},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,i=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?a=Object.create(e.__proto__||null):"[object Array]"===l?a=Array(e.length):"[object Set]"===l?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===l?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===l?a=new Date(+e):"[object RegExp]"===l?a=RegExp(e.source,e.flags):"[object DataView]"===l?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?a=e.slice(0):"Array]"===l.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r(a,n[i],Object.getOwnPropertyDescriptor(e,n[i]));for(i=0,n=Object.getOwnPropertyNames(e);i<n.length;i++)Object.hasOwnProperty.call(a,t=n[i])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},95645:function(e,t,n){"use strict";n.d(t,{Y:function(){return B}});var r=n(67294),o=n(40624),a=n(62740),i=n(643),l=n(71062),s=n(83443),m=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))0>t.indexOf(r)&&d.call(e,r)&&(n[r]=e[r]);return n};function b(e){var{direction:t,style:n}=e,o=h(e,["direction","style"]);return r.createElement("svg",f({style:f({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===t?"rotate(180deg)":void 0},n),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var g={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"},v=n(86610),y=n(70097),j=n(3154),x=n(30370),w=n(86109),E=n(28816),N=n(8586),O=n(48468),I=Object.defineProperty,P=Object.defineProperties,k=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&V(e,n,t[n]);if(Y)for(var n of Y(t))S.call(t,n)&&V(e,n,t[n]);return e},R=(e,t)=>P(e,k(t)),F=(e,t)=>{var n={};for(var r in e)A.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&Y)for(var r of Y(e))0>t.indexOf(r)&&S.call(e,r)&&(n[r]=e[r]);return n};function L(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let _={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},D=(0,N.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,O.ap)(t,"ni-chevron-size")}})),B=(0,j.d)((e,t)=>{let n=(0,x.w)("NumberInput",_,e),{className:m,classNames:c,styles:u,unstyled:d,vars:p,onChange:f,onValueChange:h,value:j,defaultValue:N,max:O,min:I,step:P,hideControls:k,rightSection:Y,isAllowed:A,clampBehavior:S,onBlur:V,allowDecimal:B,decimalScale:T,onKeyDown:z,handlersRef:M,startValue:Z,disabled:$,rightSectionPointerEvents:G,allowNegative:U,readOnly:J,size:K,rightSectionWidth:W}=n,X=F(n,["className","classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly","size","rightSectionWidth"]),q=(0,w.y)({name:"NumberInput",classes:g,props:n,classNames:c,styles:u,unstyled:d,vars:p,varsResolver:D}),{resolvedClassNames:H,resolvedStyles:Q}=(0,E.h)({classNames:c,styles:u,props:n}),[ee,et]=(0,i.C)({value:j,defaultValue:N,onChange:f}),en=(e,t)=>{if("event"===t.source){var n;et("number"!=typeof(n=e.floatValue)&&Number.isNaN(Number(n))||Number.isNaN(n)?e.value:e.floatValue)}null==h||h(e,t)},er=()=>{"number"!=typeof ee||Number.isNaN(ee)?et(null!=I?I:(0,l.u)(Z,I,O)):void 0!==O?et(ee+P<=O?ee+P:O):et(ee+P)},eo=()=>{"number"!=typeof ee||Number.isNaN(ee)?et(null!=O?O:(0,l.u)(Z,I,O)):et(function({value:e,min:t,step:n=1,allowNegative:r}){let o=e-n;return void 0!==t&&o<t?t:!r&&o<0&&void 0===t?e:o}({value:ee,min:I,step:P,allowNegative:U}))},ea=e=>{null==z||z(e),J||("ArrowUp"===e.key&&(e.preventDefault(),er()),"ArrowDown"===e.key&&(e.preventDefault(),eo()))};(0,s.kR)(M,{increment:er,decrement:eo});let ei=r.createElement("div",C({},q("controls")),r.createElement(v.k,R(C({},q("control")),{tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof ee&&void 0!==O&&ee>=O,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:er}),r.createElement(b,{direction:"up"})),r.createElement(v.k,R(C({},q("control")),{tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof ee&&void 0!==I&&ee<=I,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:eo}),r.createElement(b,{direction:"down"})));return r.createElement(y.M,R(C({component:a.h3,allowNegative:U,className:(0,o.Z)(g.root,m),size:K},X),{readOnly:J,disabled:$,value:ee,getInputRef:t,onValueChange:en,rightSection:k||J?Y:Y||ei,classNames:H,styles:Q,unstyled:d,__staticSelector:"NumberInput",decimalScale:B?T:0,onKeyDown:ea,rightSectionPointerEvents:(null!=G?G:$)?"none":void 0,rightSectionWidth:null!=W?W:`var(--ni-right-section-width-${K||"sm"})`,onBlur:e=>{if(null==V||V(e),"blur"===S&&"number"==typeof ee){let e=(0,l.u)(ee,I,O);e!==ee&&et((0,l.u)(ee,I,O))}},isAllowed:e=>"strict"===S?A?A(e)&&L(e.floatValue,I,O):L(e.floatValue,I,O):!A||A(e)}))});B.classes=C(C({},y.M.classes),g),B.displayName="@mantine/core/NumberInput"}},function(e){e.O(0,[4136,8992,178,160,9774,2888,179],function(){return e(e.s=20203)}),_N_E=e.O()}]);
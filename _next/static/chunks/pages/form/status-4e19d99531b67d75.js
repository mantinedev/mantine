(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97799],{38792:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var r,o,i,s=i[o];if(!e(t[s],n[s]))return!1}return!0}return t!=t&&n!=n}},5493:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/status",function(){return n(26997)}])},26997:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(31085),o=n(71184),i=n(14041),s=n(90275),l=n(52022),c=n(23719);let d={type:"code",component:function(){let e=(0,c.m)({mode:"uncontrolled",initialValues:{text:"initial value"}});return(0,r.jsxs)("div",{children:[(0,i.createElement)(s.k,{...e.getInputProps("text"),key:e.key("text"),label:"Touched/dirty demo",placeholder:"Touched/dirty demo"}),(0,r.jsx)(l.$,{mt:"md",onClick:()=>console.log({touched:e.isTouched("text"),dirty:e.isDirty("text")}),children:"Log status to console"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'initial value' },
  });

  return (
    <div>
      <TextInput
        {...form.getInputProps('text')}
        key={form.key('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Button
        onClick={() =>
          console.log({ touched: form.isTouched('text'), dirty: form.isDirty('text') })
        }
      >
        Log status to console
      </Button>
    </div>
  );
}
`,centered:!0,maxWidth:340};var a=n(53512),u=n(85954),m=n(38215);let f=(0,u.P)(m.XZ.formStatus);function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"touched-and-dirty-state",children:"Touched and dirty state"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.isTouched"})," and ",(0,r.jsx)(t.code,{children:"form.isDirty"})," fields provide information about current field status:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Field is considered to be ",(0,r.jsx)(t.code,{children:"touched"})," when user focused it or its value was changed programmatically with ",(0,r.jsx)(t.code,{children:"form.setFieldValue"})," handler"]}),"\n",(0,r.jsxs)(t.li,{children:["Field is considered to be ",(0,r.jsx)(t.code,{children:"dirty"})," when its value was changed and new value is different from field value specified in ",(0,r.jsx)(t.code,{children:"initialValues"})," (compared with ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/fast-deep-equal",children:"fast-deep-equal"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"istouched-and-isdirty-functions",children:"isTouched and isDirty functions"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1, nested: { field: '' } },\n});\n\n// Provide path as first argument to get state of single field\nform.isTouched('a'); // -> was field 'a' focused or changed?\nform.isDirty('a'); // -> was field 'a' modified?\nform.isDirty('nested.field'); // -> nested fields are also supported\n\n// If field path is not provided,\n// then functions will return form state instead\nform.isTouched(); // -> was any field in form focused or changed?\nform.isDirty(); // -> was any field in form modified?\n"})}),"\n",(0,r.jsx)(t.h2,{id:"touchtrigger-option",children:"touchTrigger option"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"touchTrigger"})," option allows customizing events that change touched state.\nIt accepts two options:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"change"})," (default) – field will be considered touched when its value changes or it has been focused"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"focus"})," – field will be considered touched only when it has been focused"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"focus"})," trigger:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  touchTrigger: 'focus',\n});\n\nform.isTouched('a'); // -> false\nform.setFieldValue('a', 2);\nform.isTouched('a'); // -> false\n\n// onFocus is called automatically when the user focuses the field\nform.getInputProps('a').onFocus();\nform.isTouched('a'); // -> true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,r.jsxs)(t.p,{children:["You can provide initial touched and dirty values with ",(0,r.jsx)(t.code,{children:"initialTouched"})," and ",(0,r.jsx)(t.code,{children:"initialDirty"})," properties.\nBoth properties support ",(0,r.jsx)(t.a,{href:"/form/errors/",children:"the same fields path format as errors"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1, nested: { field: '' } },\n  initialTouched: { a: true, 'nested.field': true },\n  initialDirty: { a: true, 'nested.field': true },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"resettouched-and-resetdirty",children:"resetTouched and resetDirty"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.resetTouched"})," and ",(0,r.jsx)(t.code,{children:"form.resetDirty"})," functions will make all fields clean and untouched.\nNote that ",(0,r.jsx)(t.code,{children:"form.reset"})," will also reset ",(0,r.jsx)(t.code,{children:"touched"})," and ",(0,r.jsx)(t.code,{children:"dirty"})," state:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  initialTouched: { a: true },\n  initialDirty: { a: true },\n});\n\nform.isDirty('a'); // -> true\nform.isTouched('a'); // -> true\n\nform.resetTouched();\nform.isTouched('a'); // -> false\n\nform.resetDirty();\nform.isDirty('a'); // -> false\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To reset values that are used for dirty check call ",(0,r.jsx)(t.code,{children:"form.resetDirty"})," with new values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n});\n\nform.setValues({ a: 2 });\nform.isDirty(); // -> true\n\nform.resetDirty({ a: 2 });\nform.isDirty(); // -> false\n\nform.setValues({ a: 3 });\nform.isDirty(); // -> true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"submitting-state",children:"Submitting state"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.submitting"})," field will be set to ",(0,r.jsx)(t.code,{children:"true"})," if function passed to\n",(0,r.jsx)(t.code,{children:"form.onSubmit"})," returns a promise. After the promise is resolved or rejected,\n",(0,r.jsx)(t.code,{children:"form.submitting"})," will be set to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(n,{data:a.B}),"\n",(0,r.jsxs)(t.p,{children:["You can also manually set ",(0,r.jsx)(t.code,{children:"form.submitting"})," to ",(0,r.jsx)(t.code,{children:"true"})," or ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ mode: 'uncontrolled' });\nform.submitting; // -> false\n\nform.setSubmitting(true);\nform.submitting; // -> true\n\nform.setSubmitting(false);\nform.submitting; // -> false\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(h,{...e})})}},74015:(e,t,n)=>{"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,i,s=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?i=Object.create(e.__proto__||null):"[object Array]"===l?i=Array(e.length):"[object Set]"===l?(i=new Set,e.forEach(function(e){i.add(o(e))})):"[object Map]"===l?(i=new Map,e.forEach(function(e,t){i.set(o(t),o(e))})):"[object Date]"===l?i=new Date(+e):"[object RegExp]"===l?i=new RegExp(e.source,e.flags):"[object DataView]"===l?i=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?i=e.slice(0):"Array]"===l.slice(-6)&&(i=new e.constructor(e)),i){for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)r(i,n[s],Object.getOwnPropertyDescriptor(e,n[s]));for(s=0,n=Object.getOwnPropertyNames(e);s<n.length;s++)Object.hasOwnProperty.call(i,t=n[s])&&i[t]===e[t]||r(i,t,Object.getOwnPropertyDescriptor(e,t))}return i||e}n.d(t,{Q:()=>o})},53512:(e,t,n)=>{"use strict";n.d(t,{B:()=>m});var r=n(31085),o=n(14041),i=n(75390),s=n(93065),l=n(52022),c=n(90275),d=n(56051),a=n(23719);let u=e=>new Promise(t=>setTimeout(()=>t(e),3e3)),m={type:"code",component:function(){let e=(0,a.m)({mode:"uncontrolled",initialValues:{name:"John"}}),[t,n]=(0,o.useState)(!1),m=async e=>{await u(e),n(!0)};return t?(0,r.jsxs)(i.B,{children:[(0,r.jsx)(s.E,{children:"Form submitted!"}),(0,r.jsx)(l.$,{onClick:()=>n(!1),children:"Reset to initial state"})]}):(0,r.jsxs)("form",{onSubmit:e.onSubmit(m),children:[(0,r.jsx)(c.k,{withAsterisk:!0,label:"Name",placeholder:"Your name",disabled:e.submitting,...e.getInputProps("name")},e.key("name")),(0,r.jsx)(d.Y,{justify:"flex-end",mt:"md",children:(0,r.jsx)(l.$,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,23719,90636,46593,38792],()=>t(5493)),_N_E=e.O()}]);
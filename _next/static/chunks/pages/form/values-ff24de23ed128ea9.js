(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var r,a,o,l=o[a];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},61763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return n(16055)}])},16055:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(24246),a=n(71670),o=n(27378),l=n(56589),i=n(7033),s=n(22971),m=n(8671),u=n(56926),c=n(55574);let d=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: \`\${randomId()}@test.com\`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </Box>
  );
}
`,f={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(i.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(s.Z,{justify:"center",mt:"xl"},o.createElement(m.z,{onClick:()=>e.setValues({name:(0,c.k)(),email:`${(0,c.k)()}@test.com`})},"Set random values")))},code:d};var p=n(97900),h=n(18748);let g=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}>
          Random email
        </Button>
      </Group>
    </Box>
  );
}
`,b={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(i.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(s.Z,{justify:"center",mt:"xl"},o.createElement(m.z,{onClick:()=>e.setFieldValue("name",(0,c.k)())},"Random name"),o.createElement(m.z,{onClick:()=>e.setFieldValue("email",`${(0,c.k)()}@test.com`)},"Random email")))},code:g},x=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.reset()}>
          Reset to initial values
        </Button>
      </Group>
    </Box>
  );
}
`,v={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(i.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(s.Z,{justify:"center",mt:"xl"},o.createElement(m.z,{onClick:()=>e.reset()},"Reset to initial values")))},code:x};var y=n(94998);let j=`
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

function Demo() {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '33',
    },

    transformValues: (values) => ({
      fullName: \`\${values.firstName} \${values.lastName}\`,
      age: Number(values.age) || 0,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          {...form.getInputProps('lastName')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}
`,N={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=(0,u.c)({initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement("form",{onSubmit:n.onSubmit(e=>t(JSON.stringify(e,null,2)))},o.createElement(i.o,{label:"First name",placeholder:"First name",...n.getInputProps("firstName")}),o.createElement(i.o,{label:"Last name",placeholder:"Last name",mt:"md",...n.getInputProps("lastName")}),o.createElement(i.o,{type:"number",label:"Age",placeholder:"Age",mt:"md",...n.getInputProps("age")}),o.createElement(m.z,{type:"submit",mt:"md"},"Submit")),e&&o.createElement(y.E,{block:!0},e))},code:j};var I=n(3916),w=n(54568);let V=(0,I.A)(w.us.formValues);function E(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,r.jsxs)(t.p,{children:["In most cases you should set ",(0,r.jsx)(t.code,{children:"initialValues"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.values; // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,r.jsxs)(t.p,{children:["When called ",(0,r.jsx)(t.code,{children:"form.initialize"})," handler sets ",(0,r.jsx)(t.code,{children:"initialValues"})," and ",(0,r.jsx)(t.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,r.jsx)(t.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,r.jsx)(n,{data:p.j}),"\n",(0,r.jsxs)(t.p,{children:["Example with ",(0,r.jsx)(t.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,r.jsx)(t.code,{children:"readOnly"})," or ",(0,r.jsx)(t.code,{children:"disabled"})," on all form fields before\n",(0,r.jsx)(t.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,r.jsx)(t.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,r.jsx)(n,{data:h.W}),"\n",(0,r.jsx)(t.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.reset"})," handler sets values to ",(0,r.jsx)(t.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"font.setInitialValues"})," handler allows to update ",(0,r.jsx)(t.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,r.jsx)(t.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,r.jsxs)(t.p,{children:["You can get transformed values outside of ",(0,r.jsx)(t.code,{children:"form.onSubmit"})," method by calling ",(0,r.jsx)(t.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,r.jsx)(t.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,r.jsx)(t.code,{children:"form.values"})," transformation will be returned instead:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,r.jsxs)(t.p,{children:["To get transformed values (output of ",(0,r.jsx)(t.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,r.jsx)(t.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,r.jsxs)(t.p,{children:["By default, form values types will be inferred from ",(0,r.jsx)(t.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,r.jsx)(t.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(V,{...e,children:(0,r.jsx)(E,{...e})})}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=a(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function a(e){if("object"!=typeof e)return e;var t,n,o,l=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?o=Object.create(e.__proto__||null):"[object Array]"===i?o=Array(e.length):"[object Set]"===i?(o=new Set,e.forEach(function(e){o.add(a(e))})):"[object Map]"===i?(o=new Map,e.forEach(function(e,t){o.set(a(t),a(e))})):"[object Date]"===i?o=new Date(+e):"[object RegExp]"===i?o=new RegExp(e.source,e.flags):"[object DataView]"===i?o=new e.constructor(a(e.buffer)):"[object ArrayBuffer]"===i?o=e.slice(0):"Array]"===i.slice(-6)&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r(o,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(o,t=n[l])&&o[t]===e[t]||r(o,t,Object.getOwnPropertyDescriptor(e,t))}return o||e}n.d(t,{Y:function(){return a}})},18748:function(e,t,n){"use strict";n.d(t,{W:function(){return m}});var r=n(27378),a=n(7033),o=n(62339),l=n(8671),i=n(56926);let s=`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
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
`,m={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return r.createElement(r.Fragment,null,r.createElement(a.o,{...e.getInputProps("name"),label:"Your name",placeholder:"Your name"}),r.createElement(o.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md"},"Initialize form"))},code:s,centered:!0,maxWidth:340}},97900:function(e,t,n){"use strict";n.d(t,{j:function(){return c}});var r=n(27378),a=n(7033),o=n(62339),l=n(8671),i=n(56926),s=n(31877),m=n(52865);let u=`
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
`,c={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",age:0},validate:{name:(0,s.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return r.createElement(r.Fragment,null,r.createElement(a.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(o.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md"},"Initialize form"))},code:u,centered:!0,maxWidth:340}},62339:function(e,t,n){"use strict";n.d(t,{Y:function(){return w}});var r=n(27378),a=n(40624),o=n(62740),l=n(58675),i=n(28086),s=n(72840),m=n(92082),u=n(83453),c=n(5564),d=n(6231),f=n(96739),p=n(20410),h=n(23163),g=n(19397);function b({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var x={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};let v=/^-0(\.0*)?$/,y=/^-?0\d+$/;function j(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let N={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},I=(0,u.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),w=(0,p.d)((e,t)=>{let n=(0,f.w)("NumberInput",N,e),{className:m,classNames:u,styles:p,unstyled:w,vars:V,onChange:E,onValueChange:F,value:P,defaultValue:S,max:k,min:D,step:T,hideControls:B,rightSection:z,isAllowed:A,clampBehavior:O,onBlur:C,allowDecimal:_,decimalScale:R,onKeyDown:G,handlersRef:q,startValue:J,disabled:Y,rightSectionPointerEvents:$,allowNegative:L,readOnly:M,size:U,rightSectionWidth:W,stepHoldInterval:Z,stepHoldDelay:Q,allowLeadingZeros:X,...K}=n,H=(0,d.y)({name:"NumberInput",classes:x,props:n,classNames:u,styles:p,unstyled:w,vars:V,varsResolver:I}),{resolvedClassNames:ee,resolvedStyles:et}=(0,c.h)({classNames:u,styles:p,props:n}),[en,er]=(0,l.C)({value:P,defaultValue:S,onChange:E}),ea=void 0!==Q&&void 0!==Z,eo=(0,r.useRef)(null),el=(0,r.useRef)(null),ei=(0,r.useRef)(0),es=(0,r.useRef)();es.current=()=>{let e;er(e="number"!=typeof en||Number.isNaN(en)?(0,i.u)(J,D,k):void 0!==k?en+T<=k?en+T:k:en+T),F?.({floatValue:e,formattedValue:e.toString(),value:e.toString()},{source:"increment"})};let em=(0,r.useRef)();em.current=()=>{let e;er(e="number"!=typeof en||Number.isNaN(en)?(0,i.u)(J,D,k):function({value:e,min:t,step:n=1,allowNegative:r}){let a=e-n;return void 0!==t&&a<t?t:!r&&a<0&&void 0===t?e:a}({value:en,min:D,step:T,allowNegative:L})),F?.({floatValue:e,formattedValue:e.toString(),value:e.toString()},{source:"decrement"})},(0,s.kR)(q,{increment:es.current,decrement:em.current});let eu=e=>{e?es.current():em.current(),ei.current+=1},ec=e=>{if(eu(e),ea){let t="number"==typeof Z?Z:Z(ei.current);el.current=window.setTimeout(()=>ec(e),t)}},ed=(e,t)=>{e.preventDefault(),eo.current?.focus(),eu(t),ea&&(el.current=window.setTimeout(()=>ec(t),Q))},ef=()=>{el.current&&window.clearTimeout(el.current),el.current=null,ei.current=0},ep=r.createElement("div",{...H("controls")},r.createElement(g.k,{...H("control"),tabIndex:-1,"aria-hidden":!0,disabled:Y||"number"==typeof en&&void 0!==k&&en>=k,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!0)},onPointerUp:ef,onPointerLeave:ef},r.createElement(b,{direction:"up"})),r.createElement(g.k,{...H("control"),tabIndex:-1,"aria-hidden":!0,disabled:Y||"number"==typeof en&&void 0!==D&&en<=D,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!1)},onPointerUp:ef,onPointerLeave:ef},r.createElement(b,{direction:"down"})));return r.createElement(h.M,{component:o.h3,allowNegative:L,className:(0,a.Z)(x.root,m),size:U,...K,readOnly:M,disabled:Y,value:en,getInputRef:(0,s.Yx)(t,eo),onValueChange:(e,t)=>{if("event"===t.source){var n;er(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||v.test(e.value)||X&&y.test(e.value)?e.value:e.floatValue)}F?.(e,t)},rightSection:B||M?z:z||ep,classNames:ee,styles:et,unstyled:w,__staticSelector:"NumberInput",decimalScale:_?R:0,onKeyDown:e=>{G?.(e),M||("ArrowUp"===e.key&&(e.preventDefault(),es.current()),"ArrowDown"===e.key&&(e.preventDefault(),em.current()))},rightSectionPointerEvents:$??(Y?"none":void 0),rightSectionWidth:W??`var(--ni-right-section-width-${U||"sm"})`,allowLeadingZeros:X,onBlur:e=>{if(C?.(e),"blur"===O&&"number"==typeof en){let e=(0,i.u)(en,D,k);e!==en&&er((0,i.u)(en,D,k))}},isAllowed:e=>"strict"===O?A?A(e)&&j(e.floatValue,D,k):j(e.floatValue,D,k):!A||A(e)})});w.classes={...h.M.classes,...x},w.displayName="@mantine/core/NumberInput"},52865:function(e,t,n){"use strict";function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let a=!0;return"number"==typeof e&&n<e&&(a=!1),"number"==typeof t&&n>t&&(a=!1),a?null:r}}n.d(t,{m:function(){return r}})},31877:function(e,t,n){"use strict";function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}n.d(t,{U:function(){return r}})}},function(e){e.O(0,[30370,62740,15819,2775,56926,49774,92888,40179],function(){return e(e.s=61763)}),_N_E=e.O()}]);
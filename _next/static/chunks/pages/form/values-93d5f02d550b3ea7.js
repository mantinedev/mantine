(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(r=a;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=a;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=a;0!=r--;){var a,r,o,l=o[r];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},61763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return n(16055)}])},16055:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(24246),r=n(71670),o=n(27378),l=n(56589),s=n(7033),m=n(22971),i=n(8671),u=n(56926),c=n(55574);let d=`
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
`,f={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(s.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(s.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(m.Z,{justify:"center",mt:"xl"},o.createElement(i.z,{onClick:()=>e.setValues({name:(0,c.k)(),email:`${(0,c.k)()}@test.com`})},"Set random values")))},code:d},p=`
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
`,h={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(s.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(s.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(m.Z,{justify:"center",mt:"xl"},o.createElement(i.z,{onClick:()=>e.setFieldValue("name",(0,c.k)())},"Random name"),o.createElement(i.z,{onClick:()=>e.setFieldValue("email",`${(0,c.k)()}@test.com`)},"Random email")))},code:p},x=`
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
`,g={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""}});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement(s.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),o.createElement(s.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),o.createElement(m.Z,{justify:"center",mt:"xl"},o.createElement(i.z,{onClick:()=>e.reset()},"Reset to initial values")))},code:x};var b=n(94998);let j=`
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
`,y={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=(0,u.c)({initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return o.createElement(l.x,{maw:340,mx:"auto"},o.createElement("form",{onSubmit:n.onSubmit(e=>t(JSON.stringify(e,null,2)))},o.createElement(s.o,{label:"First name",placeholder:"First name",...n.getInputProps("firstName")}),o.createElement(s.o,{label:"Last name",placeholder:"Last name",mt:"md",...n.getInputProps("lastName")}),o.createElement(s.o,{type:"number",label:"Age",placeholder:"Age",mt:"md",...n.getInputProps("age")}),o.createElement(i.z,{type:"submit",mt:"md"},"Submit")),e&&o.createElement(b.E,{block:!0},e))},code:j};var v=n(3916),V=n(30289);let N=(0,v.A)(V.us.formValues);function E(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,a.jsxs)(t.p,{children:["In most cases you should set ",(0,a.jsx)(t.code,{children:"initialValues"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,a.jsxs)(t.p,{children:["With ",(0,a.jsx)(t.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.values; // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,a.jsx)(t.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.reset"})," handler sets values to ",(0,a.jsx)(t.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,a.jsx)(n,{data:g}),"\n",(0,a.jsx)(t.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"font.setInitialValues"})," handler allows to update ",(0,a.jsx)(t.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,a.jsx)(t.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(t.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,a.jsxs)(t.p,{children:["You can get transformed values outside of ",(0,a.jsx)(t.code,{children:"form.onSubmit"})," method by calling ",(0,a.jsx)(t.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,a.jsx)(t.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,a.jsx)(t.code,{children:"form.values"})," transformation will be returned instead:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,a.jsxs)(t.p,{children:["To get transformed values (output of ",(0,a.jsx)(t.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,a.jsx)(t.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,a.jsxs)(t.p,{children:["By default, form values types will be inferred from ",(0,a.jsx)(t.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,a.jsx)(t.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(N,{...e,children:(0,a.jsx)(E,{...e})})}},28380:function(e,t,n){"use strict";function a(e,t,n){"object"==typeof n.value&&(n.value=r(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function r(e){if("object"!=typeof e)return e;var t,n,o,l=0,s=Object.prototype.toString.call(e);if("[object Object]"===s?o=Object.create(e.__proto__||null):"[object Array]"===s?o=Array(e.length):"[object Set]"===s?(o=new Set,e.forEach(function(e){o.add(r(e))})):"[object Map]"===s?(o=new Map,e.forEach(function(e,t){o.set(r(t),r(e))})):"[object Date]"===s?o=new Date(+e):"[object RegExp]"===s?o=new RegExp(e.source,e.flags):"[object DataView]"===s?o=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===s?o=e.slice(0):"Array]"===s.slice(-6)&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a(o,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(o,t=n[l])&&o[t]===e[t]||a(o,t,Object.getOwnPropertyDescriptor(e,t))}return o||e}n.d(t,{Y:function(){return r}})}},function(e){e.O(0,[370,5819,2775,6926,9774,2888,179],function(){return e(e.s=61763)}),_N_E=e.O()}]);
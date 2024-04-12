(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{69378:function(e){"use strict";e.exports=function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){if(n.constructor!==t.constructor)return!1;if(Array.isArray(n)){if((r=n.length)!=t.length)return!1;for(o=r;0!=o--;)if(!e(n[o],t[o]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if((r=(a=Object.keys(n)).length)!==Object.keys(t).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,l=a[o];if(!e(n[l],t[l]))return!1}return!0}return n!=n&&t!=t}},11086:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return t(21480)}])},21480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(52322),o=t(45392),a=t(2784),l=t(74770),i=t(93010),s=t(17115),m=t(59259),u=t(73533);let c=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
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
    </div>
  );
}
`,d={type:"code",component:function(){let e=(0,m.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return a.createElement("div",null,a.createElement(l.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{onClick:()=>e.setValues({name:(0,u.k)(),email:`${(0,u.k)()}@test.com`})},"Set random values")))},code:c,centered:!0,maxWidth:340};var f=t(48165),p=t(95093);let h=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
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
    </div>
  );
}
`,g={type:"code",component:function(){let e=(0,m.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return a.createElement("div",null,a.createElement(l.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{onClick:()=>e.setFieldValue("name",(0,u.k)())},"Random name"),a.createElement(s.z,{onClick:()=>e.setFieldValue("email",`${(0,u.k)()}@test.com`)},"Random email")))},code:h,centered:!0,maxWidth:340},v=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
`,b={type:"code",component:function(){let e=(0,m.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return a.createElement("div",null,a.createElement(l.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{onClick:()=>e.reset()},"Reset to initial values")))},code:v,centered:!0,maxWidth:340};var x=t(45909);let y=`
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code } from '@mantine/core';

function Demo() {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
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
    <>
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

      {submittedValues && (
        <Code block mt="md">
          {submittedValues}
        </Code>
      )}
    </>
  );
}
`,j={type:"code",component:function(){let[e,n]=(0,a.useState)(""),t=(0,m.c)({mode:"uncontrolled",initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return a.createElement(a.Fragment,null,a.createElement("form",{onSubmit:t.onSubmit(e=>n(JSON.stringify(e,null,2)))},a.createElement(l.o,{label:"First name",placeholder:"First name",...t.getInputProps("firstName")}),a.createElement(l.o,{label:"Last name",placeholder:"Last name",mt:"md",...t.getInputProps("lastName")}),a.createElement(l.o,{type:"number",label:"Age",placeholder:"Age",mt:"md",...t.getInputProps("age")}),a.createElement(s.z,{type:"submit",mt:"md"},"Submit")),e&&a.createElement(x.E,{block:!0,mt:"md"},e))},code:y,centered:!0,maxWidth:340},I=`
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
    </div>
  );
}
`,N={type:"code",component:function(){let e=(0,m.c)({mode:"uncontrolled",initialValues:{name:"",email:""},onValuesChange:e=>{console.log(e)}});return a.createElement("div",null,a.createElement(l.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}))},code:I,centered:!0,maxWidth:340};var V=t(1383),E=t(79016),w=t(33638);let F=(0,E.A)(w.us.formValues);function P(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,r.jsxs)(n.p,{children:["In most cases you should set ",(0,r.jsx)(n.code,{children:"initialValues"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.getValues(); // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,r.jsxs)(n.p,{children:["When called ",(0,r.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,r.jsx)(n.code,{children:"initialValues"})," and ",(0,r.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,r.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,r.jsx)(t,{data:f.j}),"\n",(0,r.jsxs)(n.p,{children:["Example with ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,r.jsx)(n.code,{children:"readOnly"})," or ",(0,r.jsx)(n.code,{children:"disabled"})," on all form fields before\n",(0,r.jsx)(n.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,r.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,r.jsx)(t,{data:p.W}),"\n",(0,r.jsx)(n.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.reset"})," handler sets values to ",(0,r.jsx)(n.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(n.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"font.setInitialValues"})," handler allows to update ",(0,r.jsx)(n.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,r.jsx)(n.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,r.jsxs)(n.p,{children:["You can get transformed values outside of ",(0,r.jsx)(n.code,{children:"form.onSubmit"})," method by calling ",(0,r.jsx)(n.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,r.jsx)(n.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,r.jsx)(n.code,{children:"form.getValues()"})," transformation will be returned instead:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onvalueschange",children:"onValuesChange"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onValuesChange"})," function is called every time form values change, use it\ninstead of ",(0,r.jsx)(n.code,{children:"useEffect"})," to subscribe to form values changes:"]}),"\n",(0,r.jsx)(t,{data:N}),"\n",(0,r.jsx)(n.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,r.jsx)(t,{data:V.Y}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"form.watch"})," uses ",(0,r.jsx)(n.code,{children:"useEffect"})," under the hood – all hooks rules apply.\nFor example, you cannot use ",(0,r.jsx)(n.code,{children:"form.watch"})," conditionally or inside loops."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  // ❌ This will not work\n  if (Math.random() > 0.5) {\n    form.watch('name', ({ previousValue, value, touched, dirty }) => {\n      console.log({ previousValue, value, touched, dirty });\n    });\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,r.jsxs)(n.p,{children:["To get transformed values (output of ",(0,r.jsx)(n.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,r.jsx)(n.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,r.jsxs)(n.p,{children:["By default, form values types will be inferred from ",(0,r.jsx)(n.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,r.jsx)(n.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(F,{...e,children:(0,r.jsx)(P,{...e})})}},15463:function(e,n,t){"use strict";function r(e,n,t){"object"==typeof t.value&&(t.value=o(t.value)),t.enumerable&&!t.get&&!t.set&&t.configurable&&t.writable&&"__proto__"!==n?e[n]=t.value:Object.defineProperty(e,n,t)}function o(e){if("object"!=typeof e)return e;var n,t,a,l=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,n){a.set(o(n),o(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)r(a,t[l],Object.getOwnPropertyDescriptor(e,t[l]));for(l=0,t=Object.getOwnPropertyNames(e);l<t.length;l++)Object.hasOwnProperty.call(a,n=t[l])&&a[n]===e[n]||r(a,n,Object.getOwnPropertyDescriptor(e,n))}return a||e}t.d(n,{Y:function(){return o}})},95093:function(e,n,t){"use strict";t.d(n,{W:function(){return m}});var r=t(2784),o=t(74770),a=t(42697),l=t(17115),i=t(59259);let s=`
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
`,m={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Your name",placeholder:"Your name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md"},"Initialize form"))},code:s,centered:!0,maxWidth:340}},48165:function(e,n,t){"use strict";t.d(n,{j:function(){return c}});var r=t(2784),o=t(74770),a=t(42697),l=t(17115),i=t(59259),s=t(3095),m=t(73846);let u=`
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
`,c={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,s.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(l.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(n=>e.initialize(n)),mt:"md"},"Initialize form"))},code:u,centered:!0,maxWidth:340}},1383:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var r=t(2784),o=t(74770),a=t(59259);let l=`
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  form.watch('name', ({ previousValue, value, touched, dirty }) => {
    console.log({ previousValue, value, touched, dirty });
  });

  return (
    <div>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
    </div>
  );
}
`,i={type:"code",component:function(){let e=(0,a.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:n,touched:t,dirty:r})=>{console.log({previousValue:e,value:n,touched:t,dirty:r})}),r.createElement("div",null,r.createElement(o.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),r.createElement(o.o,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}))},code:l,centered:!0,maxWidth:340}},42697:function(e,n,t){"use strict";t.d(n,{Y:function(){return V}});var r=t(2784),o=t(40489),a=t(9462),l=t(9341),i=t(82692),s=t(70837),m=t(91482),u=t(11200),c=t(51477),d=t(62378),f=t(38483),p=t(82027),h=t(73063),g=t(63409);function v({direction:e,style:n,...t}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...n},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var b={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let x=/^-0(\.0*)?$/,y=/^-?0\d+$/;function j(e,n,t){return void 0===e||(void 0===n||e>=n)&&(void 0===t||e<=t)}let I={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,startValue:0},N=(0,u.Z)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,m.ap)(n,"ni-chevron-size")}})),V=(0,p.d)((e,n)=>{let t=(0,f.w)("NumberInput",I,e),{className:m,classNames:u,styles:p,unstyled:V,vars:E,onChange:w,onValueChange:F,value:P,defaultValue:T,max:k,min:S,step:D,hideControls:z,rightSection:A,isAllowed:C,clampBehavior:O,onBlur:B,allowDecimal:_,decimalScale:R,onKeyDown:M,handlersRef:G,startValue:Y,disabled:q,rightSectionPointerEvents:J,allowNegative:$,readOnly:W,size:L,rightSectionWidth:U,stepHoldInterval:Z,stepHoldDelay:K,allowLeadingZeros:Q,withKeyboardEvents:X,...H}=t,ee=(0,d.y)({name:"NumberInput",classes:b,props:t,classNames:u,styles:p,unstyled:V,vars:E,varsResolver:N}),{resolvedClassNames:en,resolvedStyles:et}=(0,c.h)({classNames:u,styles:p,props:t}),[er,eo]=(0,l.C)({value:P,defaultValue:T,onChange:w}),ea=void 0!==K&&void 0!==Z,el=(0,r.useRef)(null),ei=(0,r.useRef)(null),es=(0,r.useRef)(0),em=e=>{let n=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return n?Math.max(0,(n[1]?n[1].length:0)-(n[2]?+n[2]:0)):0},eu=e=>{el.current&&e&&el.current.setSelectionRange(e,e)},ec=(0,r.useRef)();ec.current=()=>{let e;let n=em(er),t=em(D),r=Math.max(n,t),o=10**r;if("number"!=typeof er||Number.isNaN(er))e=(0,i.u)(Y,S,k);else if(void 0!==k){let n=(Math.round(er*o)+Math.round(D*o))/o;e=n<=k?n:k}else e=(Math.round(er*o)+Math.round(D*o))/o;let a=e.toFixed(r);eo(parseFloat(a)),F?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"increment"}),setTimeout(()=>eu(el.current?.value.length),0)};let ed=(0,r.useRef)();ed.current=()=>{let e;let n=em(er),t=em(D),r=Math.max(n,t),o=10**r;if("number"!=typeof er||Number.isNaN(er))e=(0,i.u)(Y,S,k);else{let n=(Math.round(er*o)-Math.round(D*o))/o;e=void 0!==S&&n<S?S:n}let a=e.toFixed(r);eo(parseFloat(a)),F?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>eu(el.current?.value.length),0)},(0,s.kR)(G,{increment:ec.current,decrement:ed.current});let ef=e=>{e?ec.current():ed.current(),es.current+=1},ep=e=>{if(ef(e),ea){let n="number"==typeof Z?Z:Z(es.current);ei.current=window.setTimeout(()=>ep(e),n)}},eh=(e,n)=>{e.preventDefault(),el.current?.focus(),ef(n),ea&&(ei.current=window.setTimeout(()=>ep(n),K))},eg=()=>{ei.current&&window.clearTimeout(ei.current),ei.current=null,es.current=0},ev=r.createElement("div",{...ee("controls")},r.createElement(g.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof er&&void 0!==k&&er>=k,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!0)},onPointerUp:eg,onPointerLeave:eg},r.createElement(v,{direction:"up"})),r.createElement(g.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof er&&void 0!==S&&er<=S,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!1)},onPointerUp:eg,onPointerLeave:eg},r.createElement(v,{direction:"down"})));return r.createElement(h.M,{component:a.h3,allowNegative:$,className:(0,o.Z)(b.root,m),size:L,...H,readOnly:W,disabled:q,value:er,getInputRef:(0,s.Yx)(n,el),onValueChange:(e,n)=>{if("event"===n.source){var t;eo(!(("number"==typeof(t=e.floatValue)?t<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(t)))&&!Number.isNaN(t))||x.test(e.value)||Q&&y.test(e.value)?e.value:e.floatValue)}F?.(e,n)},rightSection:z||W?A:A||ev,classNames:en,styles:et,unstyled:V,__staticSelector:"NumberInput",decimalScale:_?R:0,onKeyDown:e=>{M?.(e),!W&&X&&("ArrowUp"===e.key&&(e.preventDefault(),ec.current()),"ArrowDown"===e.key&&(e.preventDefault(),ed.current()))},rightSectionPointerEvents:J??(q?"none":void 0),rightSectionWidth:U??`var(--ni-right-section-width-${L||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(B?.(e),"blur"===O&&"number"==typeof er){let e=(0,i.u)(er,S,k);e!==er&&eo((0,i.u)(er,S,k))}},isAllowed:e=>"strict"===O?C?C(e)&&j(e.floatValue,S,k):j(e.floatValue,S,k):!C||C(e)})});V.classes={...h.M.classes,...b},V.displayName="@mantine/core/NumberInput"},73846:function(e,n,t){"use strict";function r({min:e,max:n},t){let r=t||!0;return t=>{if("number"!=typeof t)return r;let o=!0;return"number"==typeof e&&t<e&&(o=!1),"number"==typeof n&&t>n&&(o=!1),o?null:r}}t.d(n,{m:function(){return r}})},3095:function(e,n,t){"use strict";function r(e){let n=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:n:Array.isArray(e)?e.length>0?null:n:null==e||!1===e?n:null}t.d(n,{U:function(){return r}})}},function(e){e.O(0,[57938,9462,17454,47747,59259,49774,92888,40179],function(){return e(e.s=11086)}),_N_E=e.O()}]);
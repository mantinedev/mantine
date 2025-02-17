(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34579],{1629:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return t(20416)}])},20416:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>I});var a=t(31085),o=t(71184),l=t(90275),r=t(56051),s=t(52022),i=t(23719),m=t(63297);let u={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsx)(r.Y,{justify:"center",mt:"xl",children:(0,a.jsx)(s.$,{onClick:()=>e.setValues({name:(0,m.z)(),email:`${(0,m.z)()}@test.com`}),children:"Set random values"})})]})},code:`
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
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

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
`,centered:!0,maxWidth:340};var d=t(71138),c=t(2654);let f={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsxs)(r.Y,{justify:"center",mt:"xl",children:[(0,a.jsx)(s.$,{onClick:()=>e.setFieldValue("name",(0,m.z)()),children:"Random name"}),(0,a.jsx)(s.$,{onClick:()=>e.setFieldValue("email",`${(0,m.z)()}@test.com`),children:"Random email"})]})]})},code:`
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
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.setFieldValue('name', randomId())}>Random name</Button>
        <Button onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}>
          Random email
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340},p={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsx)(r.Y,{justify:"center",mt:"xl",children:(0,a.jsx)(s.$,{onClick:()=>e.reset(),children:"Reset to initial values"})})]})},code:`
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
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.reset()}>Reset to initial values</Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340};var h=t(14041),x=t(37905);let j={type:"code",component:function(){let[e,n]=(0,h.useState)(""),t=(0,i.m)({mode:"uncontrolled",initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:t.onSubmit(e=>n(JSON.stringify(e,null,2))),children:[(0,a.jsx)(l.k,{label:"First name",placeholder:"First name",...t.getInputProps("firstName")},t.key("firstName")),(0,a.jsx)(l.k,{label:"Last name",placeholder:"Last name",mt:"md",...t.getInputProps("lastName")},t.key("lastName")),(0,a.jsx)(l.k,{type:"number",label:"Age",placeholder:"Age",mt:"md",...t.getInputProps("age")},t.key("age")),(0,a.jsx)(s.$,{type:"submit",mt:"md",children:"Submit"})]}),e&&(0,a.jsx)(x.C,{block:!0,mt:"md",children:e})]})},code:`
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
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          key={form.key('age')}
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
`,centered:!0,maxWidth:340},y={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""},onValuesChange:e=>{console.log(e)}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
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
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
    </div>
  );
}
`,centered:!0,maxWidth:340};var g=t(79025),v=t(85954),b=t(38215);let V=(0,v.P)(b.XZ.formValues);function k(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,a.jsxs)(n.p,{children:["In most cases you should set ",(0,a.jsx)(n.code,{children:"initialValues"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.getValues(); // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,a.jsxs)(n.p,{children:["When called ",(0,a.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,a.jsx)(n.code,{children:"initialValues"})," and ",(0,a.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,a.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,a.jsx)(t,{data:d.n}),"\n",(0,a.jsxs)(n.p,{children:["Example with ",(0,a.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,a.jsx)(n.code,{children:"readOnly"})," or ",(0,a.jsx)(n.code,{children:"disabled"})," on all form fields before\n",(0,a.jsx)(n.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,a.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,a.jsx)(t,{data:c.l}),"\n",(0,a.jsx)(n.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,a.jsx)(t,{data:f}),"\n",(0,a.jsx)(n.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.reset"})," handler sets values to ",(0,a.jsx)(n.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setInitialValues"})," handler allows to update ",(0,a.jsx)(n.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,a.jsx)(n.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,a.jsx)(t,{data:j}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,a.jsxs)(n.p,{children:["You can get transformed values outside of ",(0,a.jsx)(n.code,{children:"form.onSubmit"})," method by calling ",(0,a.jsx)(n.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,a.jsx)(n.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,a.jsx)(n.code,{children:"form.getValues()"})," transformation will be returned instead:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"onvalueschange",children:"onValuesChange"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"onValuesChange"})," function is called every time form values change, use it\ninstead of ",(0,a.jsx)(n.code,{children:"useEffect"})," to subscribe to form values changes:"]}),"\n",(0,a.jsx)(t,{data:y}),"\n",(0,a.jsx)(n.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,a.jsx)(t,{data:g.w}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.watch"})," uses ",(0,a.jsx)(n.code,{children:"useEffect"})," under the hood – all hooks rules apply.\nFor example, you cannot use ",(0,a.jsx)(n.code,{children:"form.watch"})," conditionally or inside loops."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  // ❌ This will not work\n  if (Math.random() > 0.5) {\n    form.watch('name', ({ previousValue, value, touched, dirty }) => {\n      console.log({ previousValue, value, touched, dirty });\n    });\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,a.jsxs)(n.p,{children:["To get transformed values (output of ",(0,a.jsx)(n.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,a.jsx)(n.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,a.jsxs)(n.p,{children:["By default, form values types will be inferred from ",(0,a.jsx)(n.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,a.jsx)(n.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(V,{...e,children:(0,a.jsx)(k,{...e})})}},79025:(e,n,t)=>{"use strict";t.d(n,{w:()=>r});var a=t(31085),o=t(90275),l=t(23719);let r={type:"code",component:function(){let e=(0,l.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:n,touched:t,dirty:a})=>{console.log({previousValue:e,value:n,touched:t,dirty:a})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
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
`,centered:!0,maxWidth:340}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,39699,68831,23719,45040,90636,46593,38792],()=>n(1629)),_N_E=e.O()}]);
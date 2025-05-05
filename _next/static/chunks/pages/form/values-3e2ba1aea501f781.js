(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34579],{1629:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return t(20416)}])},20416:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>V});var a=t(31085),l=t(71184),o=t(90275),r=t(56051),s=t(52022),i=t(23719),m=t(63297);let d={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsx)(r.Y,{justify:"center",mt:"xl",children:(0,a.jsx)(s.$,{onClick:()=>e.setValues({name:(0,m.z)(),email:`${(0,m.z)()}@test.com`}),children:"Set random values"})})]})},code:`
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
`,centered:!0,maxWidth:340};var u=t(71138),c=t(2654);let h={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsxs)(r.Y,{justify:"center",mt:"xl",children:[(0,a.jsx)(s.$,{onClick:()=>e.setFieldValue("name",(0,m.z)()),children:"Random name"}),(0,a.jsx)(s.$,{onClick:()=>e.setFieldValue("email",`${(0,m.z)()}@test.com`),children:"Random email"})]})]})},code:`
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
`,centered:!0,maxWidth:340},p={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,a.jsx)(r.Y,{justify:"center",mt:"xl",children:(0,a.jsx)(s.$,{onClick:()=>e.reset(),children:"Reset to initial values"})})]})},code:`
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
`,centered:!0,maxWidth:340};var f=t(14041),v=t(37905);let x={type:"code",component:function(){let[e,n]=(0,f.useState)(""),t=(0,i.m)({mode:"uncontrolled",initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:t.onSubmit(e=>n(JSON.stringify(e,null,2))),children:[(0,a.jsx)(o.k,{label:"First name",placeholder:"First name",...t.getInputProps("firstName")},t.key("firstName")),(0,a.jsx)(o.k,{label:"Last name",placeholder:"Last name",mt:"md",...t.getInputProps("lastName")},t.key("lastName")),(0,a.jsx)(o.k,{type:"number",label:"Age",placeholder:"Age",mt:"md",...t.getInputProps("age")},t.key("age")),(0,a.jsx)(s.$,{type:"submit",mt:"md",children:"Submit"})]}),e&&(0,a.jsx)(v.C,{block:!0,mt:"md",children:e})]})},code:`
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
`,centered:!0,maxWidth:340},y={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",email:""},onValuesChange:e=>{console.log(e)}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(o.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
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
`,centered:!0,maxWidth:340};var g=t(79025),j=t(18675),k=t(20017);let b=(0,j.P)(k.XZ.formValues);function I(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,a.jsxs)(n.p,{children:["In most cases you should set ",(0,a.jsx)(n.code,{children:"initialValues"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,a.jsx)(t,{data:d}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.getValues(); // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,a.jsxs)(n.p,{children:["When called ",(0,a.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,a.jsx)(n.code,{children:"initialValues"})," and ",(0,a.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,a.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,a.jsx)(t,{data:u.n}),"\n",(0,a.jsxs)(n.p,{children:["Example with ",(0,a.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,a.jsx)(n.code,{children:"readOnly"})," or ",(0,a.jsx)(n.code,{children:"disabled"})," on all form fields before\n",(0,a.jsx)(n.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,a.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,a.jsx)(t,{data:c.l}),"\n",(0,a.jsx)(n.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.reset"})," handler sets values to ",(0,a.jsx)(n.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setInitialValues"})," handler allows to update ",(0,a.jsx)(n.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,a.jsx)(n.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,a.jsxs)(n.p,{children:["You can get transformed values outside of ",(0,a.jsx)(n.code,{children:"form.onSubmit"})," method by calling ",(0,a.jsx)(n.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,a.jsx)(n.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,a.jsx)(n.code,{children:"form.getValues()"})," transformation will be returned instead:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"onvalueschange",children:"onValuesChange"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"onValuesChange"})," function is called every time form values change, use it\ninstead of ",(0,a.jsx)(n.code,{children:"useEffect"})," to subscribe to form values changes:"]}),"\n",(0,a.jsx)(t,{data:y}),"\n",(0,a.jsx)(n.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,a.jsx)(t,{data:g.w}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.watch"})," uses ",(0,a.jsx)(n.code,{children:"useEffect"})," under the hood – all hooks rules apply.\nFor example, you cannot use ",(0,a.jsx)(n.code,{children:"form.watch"})," conditionally or inside loops."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  // ❌ This will not work\n  if (Math.random() > 0.5) {\n    form.watch('name', ({ previousValue, value, touched, dirty }) => {\n      console.log({ previousValue, value, touched, dirty });\n    });\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,a.jsxs)(n.p,{children:["To get transformed values (output of ",(0,a.jsx)(n.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,a.jsx)(n.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,a.jsxs)(n.p,{children:["By default, form values types will be inferred from ",(0,a.jsx)(n.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,a.jsx)(n.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(b,{...e,children:(0,a.jsx)(I,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79025:(e,n,t)=>{"use strict";t.d(n,{w:()=>r});var a=t(31085),l=t(90275),o=t(23719);let r={type:"code",component:function(){let e=(0,o.m)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:n,touched:t,dirty:a})=>{console.log({previousValue:e,value:n,touched:t,dirty:a})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,a.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
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
`,centered:!0,maxWidth:340}}},e=>{var n=n=>e(e.s=n);e.O(0,[57715,18675,23719,45040,90636,46593,38792],()=>n(1629)),_N_E=e.O()}]);
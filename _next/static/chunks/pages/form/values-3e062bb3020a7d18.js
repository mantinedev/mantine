(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{11086:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return t(21480)}])},21480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var a=t(52322),o=t(45392),l=t(2784),r=t(74770),s=t(93010),m=t(17115),i=t(59259),u=t(73533);let d=`
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
`,c={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return l.createElement("div",null,l.createElement(r.o,{label:"Name",placeholder:"Name",key:e.key("name"),...e.getInputProps("name")}),l.createElement(r.o,{mt:"md",label:"Email",placeholder:"Email",key:e.key("email"),...e.getInputProps("email")}),l.createElement(s.Z,{justify:"center",mt:"xl"},l.createElement(m.z,{onClick:()=>e.setValues({name:(0,u.k)(),email:`${(0,u.k)()}@test.com`})},"Set random values")))},code:d,centered:!0,maxWidth:340};var f=t(48165),p=t(95093);let h=`
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
`,x={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return l.createElement("div",null,l.createElement(r.o,{label:"Name",placeholder:"Name",key:e.key("name"),...e.getInputProps("name")}),l.createElement(r.o,{mt:"md",label:"Email",placeholder:"Email",key:e.key("email"),...e.getInputProps("email")}),l.createElement(s.Z,{justify:"center",mt:"xl"},l.createElement(m.z,{onClick:()=>e.setFieldValue("name",(0,u.k)())},"Random name"),l.createElement(m.z,{onClick:()=>e.setFieldValue("email",`${(0,u.k)()}@test.com`)},"Random email")))},code:h,centered:!0,maxWidth:340},y=`
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
`,g={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return l.createElement("div",null,l.createElement(r.o,{label:"Name",placeholder:"Name",key:e.key("name"),...e.getInputProps("name")}),l.createElement(r.o,{mt:"md",label:"Email",placeholder:"Email",key:e.key("email"),...e.getInputProps("email")}),l.createElement(s.Z,{justify:"center",mt:"xl"},l.createElement(m.z,{onClick:()=>e.reset()},"Reset to initial values")))},code:y,centered:!0,maxWidth:340};var j=t(45909);let v=`
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
`,b={type:"code",component:function(){let[e,n]=(0,l.useState)(""),t=(0,i.c)({mode:"uncontrolled",initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return l.createElement(l.Fragment,null,l.createElement("form",{onSubmit:t.onSubmit(e=>n(JSON.stringify(e,null,2)))},l.createElement(r.o,{label:"First name",placeholder:"First name",key:t.key("firstName"),...t.getInputProps("firstName")}),l.createElement(r.o,{label:"Last name",placeholder:"Last name",mt:"md",key:t.key("lastName"),...t.getInputProps("lastName")}),l.createElement(r.o,{type:"number",label:"Age",placeholder:"Age",mt:"md",key:t.key("age"),...t.getInputProps("age")}),l.createElement(m.z,{type:"submit",mt:"md"},"Submit")),e&&l.createElement(j.E,{block:!0,mt:"md"},e))},code:v,centered:!0,maxWidth:340},k=`
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
`,V={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",email:""},onValuesChange:e=>{console.log(e)}});return l.createElement("div",null,l.createElement(r.o,{label:"Name",placeholder:"Name",key:e.key("name"),...e.getInputProps("name")}),l.createElement(r.o,{mt:"md",label:"Email",placeholder:"Email",key:e.key("email"),...e.getInputProps("email")}))},code:k,centered:!0,maxWidth:340};var I=t(1383),N=t(79016),E=t(33638);let F=(0,N.A)(E.us.formValues);function w(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,a.jsxs)(n.p,{children:["In most cases you should set ",(0,a.jsx)(n.code,{children:"initialValues"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', email: '', age: 0 },\n});\n\nform.setValues({ name: 'John', age: 21 });\nform.getValues(); // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,a.jsxs)(n.p,{children:["When called ",(0,a.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,a.jsx)(n.code,{children:"initialValues"})," and ",(0,a.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,a.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,a.jsx)(t,{data:f.j}),"\n",(0,a.jsxs)(n.p,{children:["Example with ",(0,a.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.initialize"})," will erase all values that were set before it was called.\nIt is usually a good idea to set ",(0,a.jsx)(n.code,{children:"readOnly"})," or ",(0,a.jsx)(n.code,{children:"disabled"})," on all form fields before\n",(0,a.jsx)(n.code,{children:"form.initialize"})," is called to prevent data loss. You can implement this with\n",(0,a.jsx)(n.a,{href:"/form/get-input-props/#enhancegetinputprops",children:"enhanceGetInputProps"}),":"]}),"\n",(0,a.jsx)(t,{data:p.W}),"\n",(0,a.jsx)(n.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.reset"})," handler sets values to ",(0,a.jsx)(n.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(n.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"font.setInitialValues"})," handler allows to update ",(0,a.jsx)(n.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,a.jsx)(n.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,a.jsx)(t,{data:b}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,a.jsxs)(n.p,{children:["You can get transformed values outside of ",(0,a.jsx)(n.code,{children:"form.onSubmit"})," method by calling ",(0,a.jsx)(n.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,a.jsx)(n.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,a.jsx)(n.code,{children:"form.getValues()"})," transformation will be returned instead:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"onvalueschange",children:"onValuesChange"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"onValuesChange"})," function is called every time form values change, use it\ninstead of ",(0,a.jsx)(n.code,{children:"useEffect"})," to subscribe to form values changes:"]}),"\n",(0,a.jsx)(t,{data:V}),"\n",(0,a.jsx)(n.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,a.jsx)(t,{data:I.Y}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"form.watch"})," uses ",(0,a.jsx)(n.code,{children:"useEffect"})," under the hood – all hooks rules apply.\nFor example, you cannot use ",(0,a.jsx)(n.code,{children:"form.watch"})," conditionally or inside loops."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  // ❌ This will not work\n  if (Math.random() > 0.5) {\n    form.watch('name', ({ previousValue, value, touched, dirty }) => {\n      console.log({ previousValue, value, touched, dirty });\n    });\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,a.jsxs)(n.p,{children:["To get transformed values (output of ",(0,a.jsx)(n.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,a.jsx)(n.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { TransformedValues, useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,a.jsxs)(n.p,{children:["By default, form values types will be inferred from ",(0,a.jsx)(n.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,a.jsx)(n.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(F,{...e,children:(0,a.jsx)(w,{...e})})}},1383:function(e,n,t){"use strict";t.d(n,{Y:function(){return s}});var a=t(2784),o=t(74770),l=t(59259);let r=`
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
`,s={type:"code",component:function(){let e=(0,l.c)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:n,touched:t,dirty:a})=>{console.log({previousValue:e,value:n,touched:t,dirty:a})}),a.createElement("div",null,a.createElement(o.o,{label:"Name",placeholder:"Name",key:e.key("name"),...e.getInputProps("name")}),a.createElement(o.o,{mt:"md",label:"Email",placeholder:"Email",key:e.key("email"),...e.getInputProps("email")}))},code:r,centered:!0,maxWidth:340}}},function(e){e.O(0,[57938,9462,17454,47747,59259,74736,49774,92888,40179],function(){return e(e.s=11086)}),_N_E=e.O()}]);
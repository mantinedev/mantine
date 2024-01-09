(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65234],{66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(o=a;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=a;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,l[o]))return!1;for(o=a;0!=o--;){var a,o,l,r=l[o];if(!e(t[r],n[r]))return!1}return!0}return t!=t&&n!=n}},59315:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return n(20765)}])},20765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(24246),o=n(71670),l=n(27378),r=n(56589),i=n(7033),m=n(62339),s=n(8671),u=n(56926);let c=`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,d={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log)},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:c};var p=n(25916),f=n(22971);let b=`
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,h={type:"code",component:function(){let e=(0,u.c)({initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},l.createElement(p.W,{label:"Password",placeholder:"Password",...e.getInputProps("password")}),l.createElement(p.W,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")}),l.createElement(f.Z,{justify:"flex-end",mt:"md"},l.createElement(s.z,{type:"submit"},"Submit"))))},code:b},g=`
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
          ? 'You must be at least 18'
          : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,v={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")}),l.createElement(f.Z,{justify:"flex-end",mt:"md"},l.createElement(s.z,{type:"submit"},"Submit"))))},code:g},x=`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,I={type:"code",component:function(){let e=(0,u.c)({validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log)},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:x};var w=n(50776);let j=`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    validateInputOnChange: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <TextInput
          mt="sm"
          label="Job 1"
          placeholder="Job 1"
          {...form.getInputProps('jobs.0.title')}
        />
        <TextInput
          mt="sm"
          label="Job 2"
          placeholder="Job 2"
          {...form.getInputProps('jobs.1.title')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,E={type:"code",component:function(){let e=(0,u.c)({validateInputOnChange:["email","name",`jobs.${w.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log)},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),l.createElement(i.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),l.createElement(i.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:j},y=`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    validateInputOnBlur: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,S={type:"code",component:function(){let e=(0,u.c)({validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log)},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:y},N=`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    validateInputOnBlur: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <TextInput
          mt="sm"
          label="Job 1"
          placeholder="Job 1"
          {...form.getInputProps('jobs.0.title')}
        />
        <TextInput
          mt="sm"
          label="Job 2"
          placeholder="Job 2"
          {...form.getInputProps('jobs.1.title')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,P={type:"code",component:function(){let e=(0,u.c)({validateInputOnBlur:["email","name",`jobs.${w.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log)},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(m.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),l.createElement(i.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),l.createElement(i.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:N};var B=n(94193);let C=`
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    clearInputErrorOnChange: false,
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,O={type:"code",component:function(){let e=(0,u.c)({clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},l.createElement(i.o,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")}),l.createElement(B.X,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})}),l.createElement(f.Z,{justify:"flex-end",mt:"md"},l.createElement(s.z,{type:"submit"},"Submit"))))},code:C};var F=n(59269);let D=`
import { useForm } from '@mantine/form';
import { TextInput, Button, Box } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log, handleError)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`,T={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return l.createElement(r.x,{maw:340,mx:"auto"},l.createElement("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?F.N9.show({message:"Please fill name field",color:"red"}):e.email&&F.N9.show({message:"Please provide a valid email",color:"red"})})},l.createElement(i.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),l.createElement(i.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),l.createElement(s.z,{type:"submit",mt:"sm"},"Submit")))},code:D};var A=n(3916),V=n(54568);let _=(0,A.A)(V.us.formValidation);function M(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,a.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,a.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"path"})," – field path, for example ",(0,a.jsx)(t.code,{children:"user.email"})," or ",(0,a.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,a.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,a.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,a.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,a.jsxs)(t.p,{children:["To validate all fields on change set ",(0,a.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnChange: true });\n"})}),"\n",(0,a.jsx)(n,{data:I,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  validateInputOnChange: [\n    'name',\n    'email',\n    `jobs.${FORM_INDEX}.title`,\n  ],\n});\n"})}),"\n",(0,a.jsx)(n,{data:E,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,a.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,a.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnBlur: true });\n"})}),"\n",(0,a.jsx)(n,{data:S,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],\n});\n"})}),"\n",(0,a.jsx)(n,{data:P,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,a.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,a.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,a.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ clearInputErrorOnChange: false });\n"})}),"\n",(0,a.jsx)(n,{data:O,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,a.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,a.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,a.jsx)(n,{data:T}),"\n",(0,a.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,a.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,a.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(_,{...e,children:(0,a.jsx)(M,{...e})})}},28380:function(e,t,n){"use strict";function a(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,l,r=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?l=Object.create(e.__proto__||null):"[object Array]"===i?l=Array(e.length):"[object Set]"===i?(l=new Set,e.forEach(function(e){l.add(o(e))})):"[object Map]"===i?(l=new Map,e.forEach(function(e,t){l.set(o(t),o(e))})):"[object Date]"===i?l=new Date(+e):"[object RegExp]"===i?l=new RegExp(e.source,e.flags):"[object DataView]"===i?l=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?l=e.slice(0):"Array]"===i.slice(-6)&&(l=new e.constructor(e)),l){for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a(l,n[r],Object.getOwnPropertyDescriptor(e,n[r]));for(r=0,n=Object.getOwnPropertyNames(e);r<n.length;r++)Object.hasOwnProperty.call(l,t=n[r])&&l[t]===e[t]||a(l,t,Object.getOwnPropertyDescriptor(e,t))}return l||e}n.d(t,{Y:function(){return o}})},62339:function(e,t,n){"use strict";n.d(t,{Y:function(){return y}});var a=n(27378),o=n(40624),l=n(62740),r=n(58675),i=n(28086),m=n(72840),s=n(92082),u=n(83453),c=n(5564),d=n(6231),p=n(96739),f=n(20410),b=n(23163),h=n(19397);function g({direction:e,style:t,...n}){return a.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},a.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};let x=/^-0(\.0*)?$/,I=/^-?0\d+$/;function w(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let j={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},E=(0,u.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.ap)(t,"ni-chevron-size")}})),y=(0,f.d)((e,t)=>{let n=(0,p.w)("NumberInput",j,e),{className:s,classNames:u,styles:f,unstyled:y,vars:S,onChange:N,onValueChange:P,value:B,defaultValue:C,max:O,min:F,step:D,hideControls:T,rightSection:A,isAllowed:V,clampBehavior:_,onBlur:M,allowDecimal:k,decimalScale:R,onKeyDown:Y,handlersRef:$,startValue:J,disabled:z,rightSectionPointerEvents:X,allowNegative:Z,readOnly:L,size:G,rightSectionWidth:W,stepHoldInterval:q,stepHoldDelay:K,allowLeadingZeros:U,...H}=n,Q=(0,d.y)({name:"NumberInput",classes:v,props:n,classNames:u,styles:f,unstyled:y,vars:S,varsResolver:E}),{resolvedClassNames:ee,resolvedStyles:et}=(0,c.h)({classNames:u,styles:f,props:n}),[en,ea]=(0,r.C)({value:B,defaultValue:C,onChange:N}),eo=void 0!==K&&void 0!==q,el=(0,a.useRef)(null),er=(0,a.useRef)(null),ei=(0,a.useRef)(0),em=(0,a.useRef)();em.current=()=>{"number"!=typeof en||Number.isNaN(en)?ea((0,i.u)(J,F,O)):void 0!==O?ea(en+D<=O?en+D:O):ea(en+D)};let es=(0,a.useRef)();es.current=()=>{"number"!=typeof en||Number.isNaN(en)?ea((0,i.u)(J,F,O)):ea(function({value:e,min:t,step:n=1,allowNegative:a}){let o=e-n;return void 0!==t&&o<t?t:!a&&o<0&&void 0===t?e:o}({value:en,min:F,step:D,allowNegative:Z}))},(0,m.kR)($,{increment:em.current,decrement:es.current});let eu=e=>{e?em.current():es.current(),ei.current+=1},ec=e=>{if(eu(e),eo){let t="number"==typeof q?q:q(ei.current);er.current=window.setTimeout(()=>ec(e),t)}},ed=(e,t)=>{e.preventDefault(),el.current?.focus(),eu(t),eo&&(er.current=window.setTimeout(()=>ec(t),K))},ep=()=>{er.current&&window.clearTimeout(er.current),er.current=null,ei.current=0},ef=a.createElement("div",{...Q("controls")},a.createElement(h.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:z||"number"==typeof en&&void 0!==O&&en>=O,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!0)},onPointerUp:ep,onPointerLeave:ep},a.createElement(g,{direction:"up"})),a.createElement(h.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:z||"number"==typeof en&&void 0!==F&&en<=F,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ed(e,!1)},onPointerUp:ep,onPointerLeave:ep},a.createElement(g,{direction:"down"})));return a.createElement(b.M,{component:l.h3,allowNegative:Z,className:(0,o.Z)(v.root,s),size:G,...H,readOnly:L,disabled:z,value:en,getInputRef:(0,m.Yx)(t,el),onValueChange:(e,t)=>{if("event"===t.source){var n;ea(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||x.test(e.value)||U&&I.test(e.value)?e.value:e.floatValue)}P?.(e,t)},rightSection:T||L?A:A||ef,classNames:ee,styles:et,unstyled:y,__staticSelector:"NumberInput",decimalScale:k?R:0,onKeyDown:e=>{Y?.(e),L||("ArrowUp"===e.key&&(e.preventDefault(),em.current()),"ArrowDown"===e.key&&(e.preventDefault(),es.current()))},rightSectionPointerEvents:X??z?"none":void 0,rightSectionWidth:W??`var(--ni-right-section-width-${G||"sm"})`,allowLeadingZeros:U,onBlur:e=>{if(M?.(e),"blur"===_&&"number"==typeof en){let e=(0,i.u)(en,F,O);e!==en&&ea((0,i.u)(en,F,O))}},isAllowed:e=>"strict"===_?V?V(e)&&w(e.floatValue,F,O):w(e.floatValue,F,O):!V||V(e)})});y.classes={...b.M.classes,...v},y.displayName="@mantine/core/NumberInput"},25916:function(e,t,n){"use strict";n.d(t,{W:function(){return I}});var a=n(27378),o=n(40624),l=n(31002),r=n(58675),i=n(92082),m=n(83453),s=n(5564),u=n(6231),c=n(96739),d=n(55934),p=n(20410),f=n(84246),b=n(42487),h=n(23163),g={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>a.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},a.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},x=(0,m.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),I=(0,p.d)((e,t)=>{let n=(0,c.w)("PasswordInput",v,e),{classNames:i,className:m,style:p,styles:h,unstyled:I,vars:w,required:j,error:E,leftSection:y,disabled:S,id:N,variant:P,inputContainer:B,description:C,label:O,size:F,errorProps:D,descriptionProps:T,labelProps:A,withAsterisk:V,inputWrapperOrder:_,wrapperProps:M,radius:k,rightSection:R,rightSectionWidth:Y,rightSectionPointerEvents:$,leftSectionWidth:J,visible:z,defaultVisible:X,onVisibilityChange:Z,visibilityToggleIcon:L,visibilityToggleButtonProps:G,rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,...U}=n,H=(0,l.M)(N),[Q,ee]=(0,r.C)({value:z,defaultValue:X,finalValue:!1,onChange:Z}),et=()=>ee(!Q),en=(0,u.y)({name:"PasswordInput",classes:g,props:n,className:m,style:p,classNames:i,styles:h,unstyled:I,vars:w,varsResolver:x}),{resolvedClassNames:ea,resolvedStyles:eo}=(0,s.h)({classNames:i,styles:h,props:n}),{styleProps:el,rest:er}=(0,d.c)(U),ei=a.createElement(f.A,{...en("visibilityToggle"),disabled:S,radius:k,"aria-hidden":!G,tabIndex:-1,...G,variant:"subtle",color:"gray",unstyled:I,onMouseDown:e=>{e.preventDefault(),G?.onMouseDown?.(e),et()},onKeyDown:e=>{G?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())}},a.createElement(L,{reveal:Q}));return a.createElement(b.I.Wrapper,{required:j,id:H,label:O,error:E,description:C,size:F,classNames:ea,styles:eo,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:T,unstyled:I,withAsterisk:V,inputWrapperOrder:_,inputContainer:B,variant:P,labelProps:{...A,htmlFor:H},...en("root"),...el,...M},a.createElement(b.I,{component:"div",error:E,leftSection:y,size:F,classNames:{...ea,input:(0,o.Z)(g.input,ea.input)},styles:eo,radius:k,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:Y,rightSection:R??ei,variant:P,unstyled:I,leftSectionWidth:J,rightSectionPointerEvents:$||"all",rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,withAria:!1},a.createElement("input",{required:j,"data-invalid":!!E||void 0,"data-with-left-section":!!y||void 0,...en("innerInput"),disabled:S,id:H,ref:t,...er,autoComplete:er.autoComplete||"off",type:Q?"text":"password"})))});I.classes={...h.M.classes,...g},I.displayName="@mantine/core/PasswordInput"}},function(e){e.O(0,[30370,62740,15819,2775,56926,49774,92888,40179],function(){return e(e.s=59315)}),_N_E=e.O()}]);
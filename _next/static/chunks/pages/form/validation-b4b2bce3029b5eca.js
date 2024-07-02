(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65234],{69378:function(e){"use strict";e.exports=function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=o.length)return!1;for(l=n;0!=l--;)if(!e(t[l],o[l]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=n;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,a[l]))return!1;for(l=n;0!=l--;){var n,l,a,r=a[l];if(!e(t[r],o[r]))return!1}return!0}return t!=t&&o!=o}},8460:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return o(5293)}])},5293:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return C}});var n=o(52322),l=o(45392),a=o(74770),r=o(42697),i=o(17115),s=o(405);let m={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var u=o(28559),d=o(60284),c=o(93010);let p={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return(0,n.jsx)(u.x,{maw:340,mx:"auto",children:(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(d.W,{label:"Password",placeholder:"Password",...e.getInputProps("password")},e.key("password")),(0,n.jsx)(d.W,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")},e.key("confirmPassword")),(0,n.jsx)(c.Z,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.z,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`},f={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return(0,n.jsx)(u.x,{maw:340,mx:"auto",children:(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")},e.key("age")),(0,n.jsx)(c.Z,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.z,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    mode: 'uncontrolled',
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
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="You age"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`},h={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var g=o(56624);let b={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnChange:["email","name",`jobs.${g.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(a.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,n.jsx)(a.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},v={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},x={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnBlur:["email","name",`jobs.${g.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(a.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,n.jsx)(a.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var j=o(95047);let y={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(a.o,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(j.X,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})},e.key("termsOfService")),(0,n.jsx)(c.Z,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.z,{type:"submit",children:"Submit"})})]})},code:`
import { TextInput, Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340};var I=o(60048);let w={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?I.N9.show({message:"Please fill name field",color:"red"}):e.email&&I.N9.show({message:"Please provide a valid email",color:"red"})}),children:[(0,n.jsx)(a.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(i.z,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var k=o(29397),S=o(25071),N=o(15019);let P=(0,S.A)(N.us.formValidation);function E(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,n.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,n.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"path"})," – field path, for example ",(0,n.jsx)(t.code,{children:"user.email"})," or ",(0,n.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,n.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,n.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,n.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on change set ",(0,n.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: true,\n});\n"})}),"\n",(0,n.jsx)(o,{data:h,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: [\n    'name',\n    'email',\n    `jobs.${FORM_INDEX}.title`,\n  ],\n});\n"})}),"\n",(0,n.jsx)(o,{data:b,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,n.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: true,\n});\n"})}),"\n",(0,n.jsx)(o,{data:v,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],\n});\n"})}),"\n",(0,n.jsx)(o,{data:x,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,n.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,n.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  clearInputErrorOnChange: false,\n});\n"})}),"\n",(0,n.jsx)(o,{data:y,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,n.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,n.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,n.jsx)(o,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,n.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,n.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"focus-first-invalid-field",children:"Focus first invalid field"}),"\n",(0,n.jsxs)(t.p,{children:["The second argument of the ",(0,n.jsx)(t.code,{children:"form.onSubmit"})," function is a callback function that is called\nwith the ",(0,n.jsx)(t.a,{href:"/form/errors",children:"errors object"})," when form validation fails.\nYou can use this callback to focus the first invalid field or perform any other action."]}),"\n",(0,n.jsxs)(t.p,{children:["To get the DOM node of any input, use ",(0,n.jsx)(t.code,{children:"form.getInputNode('path-to-field')"}),". Note that\nin order for this feature to work, you need to spread ",(0,n.jsx)(t.code,{children:"form.getInputProps('path-to-field')"})," to\nthe input element."]}),"\n",(0,n.jsx)(o,{data:k.z})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(P,{...e,children:(0,n.jsx)(E,{...e})})}},15463:function(e,t,o){"use strict";function n(e,t,o){"object"==typeof o.value&&(o.value=l(o.value)),o.enumerable&&!o.get&&!o.set&&o.configurable&&o.writable&&"__proto__"!==t?e[t]=o.value:Object.defineProperty(e,t,o)}function l(e){if("object"!=typeof e)return e;var t,o,a,r=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(l(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(l(t),l(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(l(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n(a,o[r],Object.getOwnPropertyDescriptor(e,o[r]));for(r=0,o=Object.getOwnPropertyNames(e);r<o.length;r++)Object.hasOwnProperty.call(a,t=o[r])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}o.d(t,{Y:function(){return l}})},29397:function(e,t,o){"use strict";o.d(t,{z:function(){return u}});var n=o(52322),l=o(74770),a=o(93010),r=o(17115),i=o(405),s=o(3095),m=o(51057);let u={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:(0,s.U)("Name is required"),email:(0,m.J)("Invalid email")}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),t=>{let o=Object.keys(t)[0];e.getInputNode(o)?.focus()}),children:[(0,n.jsx)(l.o,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(l.o,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(a.Z,{justify:"flex-end",mt:"md",children:(0,n.jsx)(r.z,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0}},42697:function(e,t,o){"use strict";o.d(t,{Y:function(){return S}});var n=o(52322),l=o(2784),a=o(40489),r=o(9462),i=o(9341),s=o(82692),m=o(70837),u=o(91482),d=o(11200),c=o(51477),p=o(46690),f=o(38483),h=o(82027),g=o(73063),b=o(63409);function v({direction:e,style:t,...o}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var x={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let j=/^(0\.0*|-0(\.0*)?)$/,y=/^-?0\d+(\.\d+)?\.?$/;function I(e,t,o){return void 0===e||(void 0===t||e>=t)&&(void 0===o||e<=o)}let w={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},k=(0,d.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,u.ap)(t,"ni-chevron-size")}})),S=(0,h.d)((e,t)=>{let o=(0,f.w)("NumberInput",w,e),{className:u,classNames:d,styles:h,unstyled:S,vars:N,onChange:P,onValueChange:E,value:C,defaultValue:O,max:F,min:A,step:T,hideControls:B,rightSection:_,isAllowed:D,clampBehavior:V,onBlur:M,allowDecimal:Y,decimalScale:R,onKeyDown:z,onKeyDownCapture:$,handlersRef:J,startValue:Z,disabled:G,rightSectionPointerEvents:X,allowNegative:L,readOnly:W,size:q,rightSectionWidth:K,stepHoldInterval:U,stepHoldDelay:H,allowLeadingZeros:Q,withKeyboardEvents:ee,trimLeadingZeroesOnBlur:et,...eo}=o,en=(0,p.y)({name:"NumberInput",classes:x,props:o,classNames:d,styles:h,unstyled:S,vars:N,varsResolver:k}),{resolvedClassNames:el,resolvedStyles:ea}=(0,c.h)({classNames:d,styles:h,props:o}),[er,ei]=(0,i.C)({value:C,defaultValue:O,onChange:P}),es=void 0!==H&&void 0!==U,em=(0,l.useRef)(null),eu=(0,l.useRef)(null),ed=(0,l.useRef)(0),ec=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ep=e=>{em.current&&void 0!==e&&em.current.setSelectionRange(e,e)},ef=(0,l.useRef)();ef.current=()=>{let e;let t=Math.max(ec(er),ec(T)),o=10**t;if("number"!=typeof er||Number.isNaN(er))e=(0,s.u)(Z,A,F);else if(void 0!==F){let t=(Math.round(er*o)+Math.round(T*o))/o;e=t<=F?t:F}else e=(Math.round(er*o)+Math.round(T*o))/o;let n=e.toFixed(t);ei(parseFloat(n)),E?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>ep(em.current?.value.length),0)};let eh=(0,l.useRef)();eh.current=()=>{let e;let t=void 0!==A?A:L?Number.MIN_SAFE_INTEGER:0,o=Math.max(ec(er),ec(T)),n=10**o;if("number"!=typeof er||Number.isNaN(er))e=(0,s.u)(Z,t,F);else{let o=(Math.round(er*n)-Math.round(T*n))/n;e=void 0!==t&&o<t?t:o}let l=e.toFixed(o);ei(parseFloat(l)),E?.({floatValue:parseFloat(l),formattedValue:l,value:l},{source:"decrement"}),setTimeout(()=>ep(em.current?.value.length),0)},(0,m.kR)(J,{increment:ef.current,decrement:eh.current});let eg=e=>{e?ef.current():eh.current(),ed.current+=1},eb=e=>{if(eg(e),es){let t="number"==typeof U?U:U(ed.current);eu.current=window.setTimeout(()=>eb(e),t)}},ev=(e,t)=>{e.preventDefault(),em.current?.focus(),eg(t),es&&(eu.current=window.setTimeout(()=>eb(t),H))},ex=()=>{eu.current&&window.clearTimeout(eu.current),eu.current=null,ed.current=0},ej=(0,n.jsxs)("div",{...en("controls"),children:[(0,n.jsx)(b.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof er&&void 0!==F&&er>=F,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ev(e,!0)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(v,{direction:"up"})}),(0,n.jsx)(b.k,{...en("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof er&&void 0!==A&&er<=A,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ev(e,!1)},onPointerUp:ex,onPointerLeave:ex,children:(0,n.jsx)(v,{direction:"down"})})]});return(0,n.jsx)(g.M,{component:r.h3,allowNegative:L,className:(0,a.Z)(x.root,u),size:q,...eo,readOnly:W,disabled:G,value:er,getInputRef:(0,m.Yx)(t,em),onValueChange:(e,t)=>{if("event"===t.source){var o;ei(!(("number"==typeof(o=e.floatValue)?o<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(o)))&&!Number.isNaN(o))||j.test(e.value)||Q&&y.test(e.value)?e.value:e.floatValue)}E?.(e,t)},rightSection:B||W?_:_||ej,classNames:el,styles:ea,unstyled:S,__staticSelector:"NumberInput",decimalScale:Y?R:0,onKeyDown:e=>{z?.(e),!W&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),ef.current()),"ArrowDown"===e.key&&(e.preventDefault(),eh.current()))},onKeyDownCapture:e=>{if($?.(e),"Backspace"===e.key){let t=em.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ep(0),0))}},rightSectionPointerEvents:X??(G?"none":void 0),rightSectionWidth:K??`var(--ni-right-section-width-${q||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(M?.(e),"blur"===V&&"number"==typeof er&&(0,s.u)(er,A,F)!==er&&ei((0,s.u)(er,A,F)),et&&"string"==typeof er){let e=er.replace(/^0+/,""),t=parseFloat(e);ei(Number.isNaN(t)||t>Number.MAX_SAFE_INTEGER?e:t)}},isAllowed:e=>"strict"===V?D?D(e)&&I(e.floatValue,A,F):I(e.floatValue,A,F):!D||D(e)})});S.classes={...g.M.classes,...x},S.displayName="@mantine/core/NumberInput"},60284:function(e,t,o){"use strict";o.d(t,{W:function(){return j}});var n=o(52322),l=o(40489),a=o(66178),r=o(9341);o(2784);var i=o(91482),s=o(11200),m=o(51477),u=o(46690),d=o(38483),c=o(97072),p=o(82027),f=o(54813),h=o(6941),g=o(73063),b={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,n.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},x=(0,s.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),j=(0,p.d)((e,t)=>{let o=(0,d.w)("PasswordInput",v,e),{classNames:i,className:s,style:p,styles:g,unstyled:j,vars:y,required:I,error:w,leftSection:k,disabled:S,id:N,variant:P,inputContainer:E,description:C,label:O,size:F,errorProps:A,descriptionProps:T,labelProps:B,withAsterisk:_,inputWrapperOrder:D,wrapperProps:V,radius:M,rightSection:Y,rightSectionWidth:R,rightSectionPointerEvents:z,leftSectionWidth:$,visible:J,defaultVisible:Z,onVisibilityChange:G,visibilityToggleIcon:X,visibilityToggleButtonProps:L,rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,withErrorStyles:U,mod:H,...Q}=o,ee=(0,a.M)(N),[et,eo]=(0,r.C)({value:J,defaultValue:Z,finalValue:!1,onChange:G}),en=()=>eo(!et),el=(0,u.y)({name:"PasswordInput",classes:b,props:o,className:s,style:p,classNames:i,styles:g,unstyled:j,vars:y,varsResolver:x}),{resolvedClassNames:ea,resolvedStyles:er}=(0,m.h)({classNames:i,styles:g,props:o}),{styleProps:ei,rest:es}=(0,c.c)(Q),em=(0,n.jsx)(f.A,{...el("visibilityToggle"),disabled:S,radius:M,"aria-hidden":!L,tabIndex:-1,...L,variant:"subtle",color:"gray",unstyled:j,onMouseDown:e=>{e.preventDefault(),L?.onMouseDown?.(e),en()},onKeyDown:e=>{L?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),en())},children:(0,n.jsx)(X,{reveal:et})});return(0,n.jsx)(h.I.Wrapper,{required:I,id:ee,label:O,error:w,description:C,size:F,classNames:ea,styles:er,__staticSelector:"PasswordInput",errorProps:A,descriptionProps:T,unstyled:j,withAsterisk:_,inputWrapperOrder:D,inputContainer:E,variant:P,labelProps:{...B,htmlFor:ee},mod:H,...el("root"),...ei,...V,children:(0,n.jsx)(h.I,{component:"div",error:w,leftSection:k,size:F,classNames:{...ea,input:(0,l.Z)(b.input,ea.input)},styles:er,radius:M,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:R,rightSection:Y??em,variant:P,unstyled:j,leftSectionWidth:$,rightSectionPointerEvents:z||"all",rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,withAria:!1,withErrorStyles:U,children:(0,n.jsx)("input",{required:I,"data-invalid":!!w||void 0,"data-with-left-section":!!k||void 0,...el("innerInput"),disabled:S,id:ee,ref:t,...es,autoComplete:es.autoComplete||"off",type:et?"text":"password"})})})});j.classes={...g.M.classes,...b},j.displayName="@mantine/core/PasswordInput"},51057:function(e,t,o){"use strict";o.d(t,{J:function(){return l}});var n=o(1328);function l(e){return(0,n.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},3095:function(e,t,o){"use strict";function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}o.d(t,{U:function(){return n}})},1328:function(e,t,o){"use strict";function n(e,t){let o=t||!0;return t=>"string"!=typeof t?o:e.test(t)?null:o}o.d(t,{w:function(){return n}})}},function(e){e.O(0,[61177,9462,66748,11340,405,92888,49774,40179],function(){return e(e.s=8460)}),_N_E=e.O()}]);
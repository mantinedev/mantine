(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65234],{69378:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(l=o;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=o;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,a[l]))return!1;for(l=o;0!=l--;){var o,l,a,r=a[l];if(!e(t[r],n[r]))return!1}return!0}return t!=t&&n!=n}},8460:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return n(5293)}])},5293:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var o=n(52322),l=n(45392),a=n(2784),r=n(74770),i=n(42697),m=n(17115),s=n(59259);let u=`
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
  );
}
`,c={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:u,centered:!0,maxWidth:340};var d=n(28559),p=n(60284),f=n(93010);let h=`
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
`,g={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return a.createElement(d.x,{maw:340,mx:"auto"},a.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},a.createElement(p.W,{label:"Password",placeholder:"Password",...e.getInputProps("password")}),a.createElement(p.W,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")}),a.createElement(f.Z,{justify:"flex-end",mt:"md"},a.createElement(m.z,{type:"submit"},"Submit"))))},code:h},b=`
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
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,v={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return a.createElement(d.x,{maw:340,mx:"auto"},a.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")}),a.createElement(f.Z,{justify:"flex-end",mt:"md"},a.createElement(m.z,{type:"submit"},"Submit"))))},code:b},x=`
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
  );
}
`,I={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:x,centered:!0,maxWidth:340};var j=n(56624);let w=`
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
  );
}
`,E={type:"code",component:function(){let e=(0,s.c)({validateInputOnChange:["email","name",`jobs.${j.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),a.createElement(r.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),a.createElement(r.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:w,centered:!0,maxWidth:340},y=`
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
  );
}
`,S={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:y,centered:!0,maxWidth:340},N=`
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
  );
}
`,P={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",validateInputOnBlur:["email","name",`jobs.${j.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),a.createElement(r.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),a.createElement(r.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:N,centered:!0,maxWidth:340};var C=n(56159);let O=`
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
  );
}
`,F={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return a.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},a.createElement(r.o,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")}),a.createElement(C.X,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})}),a.createElement(f.Z,{justify:"flex-end",mt:"md"},a.createElement(m.z,{type:"submit"},"Submit")))},code:O,centered:!0,maxWidth:340};var B=n(60048);let T=`
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
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,_={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return a.createElement("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?B.N9.show({message:"Please fill name field",color:"red"}):e.email&&B.N9.show({message:"Please provide a valid email",color:"red"})})},a.createElement(r.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(r.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(m.z,{type:"submit",mt:"sm"},"Submit"))},code:T,centered:!0,maxWidth:340};var D=n(79016),A=n(33638);let V=(0,D.A)(A.us.formValidation);function M(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,o.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,o.jsx)(n,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,o.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"path"})," – field path, for example ",(0,o.jsx)(t.code,{children:"user.email"})," or ",(0,o.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,o.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,o.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,o.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,o.jsxs)(t.p,{children:["To validate all fields on change set ",(0,o.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: true,\n});\n"})}),"\n",(0,o.jsx)(n,{data:I,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: [\n    'name',\n    'email',\n    `jobs.${FORM_INDEX}.title`,\n  ],\n});\n"})}),"\n",(0,o.jsx)(n,{data:E,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,o.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,o.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: true,\n});\n"})}),"\n",(0,o.jsx)(n,{data:S,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],\n});\n"})}),"\n",(0,o.jsx)(n,{data:P,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,o.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,o.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,o.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  clearInputErrorOnChange: false,\n});\n"})}),"\n",(0,o.jsx)(n,{data:F,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,o.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,o.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,o.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,o.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(V,{...e,children:(0,o.jsx)(M,{...e})})}},15463:function(e,t,n){"use strict";function o(e,t,n){"object"==typeof n.value&&(n.value=l(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function l(e){if("object"!=typeof e)return e;var t,n,a,r=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(l(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(l(t),l(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(l(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)o(a,n[r],Object.getOwnPropertyDescriptor(e,n[r]));for(r=0,n=Object.getOwnPropertyNames(e);r<n.length;r++)Object.hasOwnProperty.call(a,t=n[r])&&a[t]===e[t]||o(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return l}})},42697:function(e,t,n){"use strict";n.d(t,{Y:function(){return y}});var o=n(2784),l=n(40489),a=n(9462),r=n(9341),i=n(82692),m=n(70837),s=n(91482),u=n(11200),c=n(51477),d=n(62378),p=n(38483),f=n(82027),h=n(73063),g=n(63409);function b({direction:e,style:t,...n}){return o.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let x=/^-0(\.0*)?$/,I=/^-?0\d+$/;function j(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let w={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,startValue:0},E=(0,u.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.ap)(t,"ni-chevron-size")}})),y=(0,f.d)((e,t)=>{let n=(0,p.w)("NumberInput",w,e),{className:s,classNames:u,styles:f,unstyled:y,vars:S,onChange:N,onValueChange:P,value:C,defaultValue:O,max:F,min:B,step:T,hideControls:_,rightSection:D,isAllowed:A,clampBehavior:V,onBlur:M,allowDecimal:R,decimalScale:k,onKeyDown:Y,handlersRef:$,startValue:J,disabled:z,rightSectionPointerEvents:X,allowNegative:Z,readOnly:L,size:W,rightSectionWidth:G,stepHoldInterval:K,stepHoldDelay:q,allowLeadingZeros:U,withKeyboardEvents:H,...Q}=n,ee=(0,d.y)({name:"NumberInput",classes:v,props:n,classNames:u,styles:f,unstyled:y,vars:S,varsResolver:E}),{resolvedClassNames:et,resolvedStyles:en}=(0,c.h)({classNames:u,styles:f,props:n}),[eo,el]=(0,r.C)({value:C,defaultValue:O,onChange:N}),ea=void 0!==q&&void 0!==K,er=(0,o.useRef)(null),ei=(0,o.useRef)(null),em=(0,o.useRef)(0),es=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eu=e=>{er.current&&e&&er.current.setSelectionRange(e,e)},ec=(0,o.useRef)();ec.current=()=>{let e;let t=es(eo),n=es(T),o=Math.max(t,n),l=10**o;if("number"!=typeof eo||Number.isNaN(eo))e=(0,i.u)(J,B,F);else if(void 0!==F){let t=(Math.round(eo*l)+Math.round(T*l))/l;e=t<=F?t:F}else e=(Math.round(eo*l)+Math.round(T*l))/l;let a=e.toFixed(o);el(parseFloat(a)),P?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"increment"}),setTimeout(()=>eu(er.current?.value.length),0)};let ed=(0,o.useRef)();ed.current=()=>{let e;let t=es(eo),n=es(T),o=Math.max(t,n),l=10**o;if("number"!=typeof eo||Number.isNaN(eo))e=(0,i.u)(J,B,F);else{let t=(Math.round(eo*l)-Math.round(T*l))/l;e=void 0!==B&&t<B?B:t}let a=e.toFixed(o);el(parseFloat(a)),P?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>eu(er.current?.value.length),0)},(0,m.kR)($,{increment:ec.current,decrement:ed.current});let ep=e=>{e?ec.current():ed.current(),em.current+=1},ef=e=>{if(ep(e),ea){let t="number"==typeof K?K:K(em.current);ei.current=window.setTimeout(()=>ef(e),t)}},eh=(e,t)=>{e.preventDefault(),er.current?.focus(),ep(t),ea&&(ei.current=window.setTimeout(()=>ef(t),q))},eg=()=>{ei.current&&window.clearTimeout(ei.current),ei.current=null,em.current=0},eb=o.createElement("div",{...ee("controls")},o.createElement(g.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:z||"number"==typeof eo&&void 0!==F&&eo>=F,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!0)},onPointerUp:eg,onPointerLeave:eg},o.createElement(b,{direction:"up"})),o.createElement(g.k,{...ee("control"),tabIndex:-1,"aria-hidden":!0,disabled:z||"number"==typeof eo&&void 0!==B&&eo<=B,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eh(e,!1)},onPointerUp:eg,onPointerLeave:eg},o.createElement(b,{direction:"down"})));return o.createElement(h.M,{component:a.h3,allowNegative:Z,className:(0,l.Z)(v.root,s),size:W,...Q,readOnly:L,disabled:z,value:eo,getInputRef:(0,m.Yx)(t,er),onValueChange:(e,t)=>{if("event"===t.source){var n;el(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||x.test(e.value)||U&&I.test(e.value)?e.value:e.floatValue)}P?.(e,t)},rightSection:_||L?D:D||eb,classNames:et,styles:en,unstyled:y,__staticSelector:"NumberInput",decimalScale:R?k:0,onKeyDown:e=>{Y?.(e),!L&&H&&("ArrowUp"===e.key&&(e.preventDefault(),ec.current()),"ArrowDown"===e.key&&(e.preventDefault(),ed.current()))},rightSectionPointerEvents:X??(z?"none":void 0),rightSectionWidth:G??`var(--ni-right-section-width-${W||"sm"})`,allowLeadingZeros:U,onBlur:e=>{if(M?.(e),"blur"===V&&"number"==typeof eo){let e=(0,i.u)(eo,B,F);e!==eo&&el((0,i.u)(eo,B,F))}},isAllowed:e=>"strict"===V?A?A(e)&&j(e.floatValue,B,F):j(e.floatValue,B,F):!A||A(e)})});y.classes={...h.M.classes,...v},y.displayName="@mantine/core/NumberInput"},60284:function(e,t,n){"use strict";n.d(t,{W:function(){return I}});var o=n(2784),l=n(40489),a=n(66178),r=n(9341),i=n(91482),m=n(11200),s=n(51477),u=n(62378),c=n(38483),d=n(97072),p=n(82027),f=n(54813),h=n(6941),g=n(73063),b={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>o.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},o.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},x=(0,m.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),I=(0,p.d)((e,t)=>{let n=(0,c.w)("PasswordInput",v,e),{classNames:i,className:m,style:p,styles:g,unstyled:I,vars:j,required:w,error:E,leftSection:y,disabled:S,id:N,variant:P,inputContainer:C,description:O,label:F,size:B,errorProps:T,descriptionProps:_,labelProps:D,withAsterisk:A,inputWrapperOrder:V,wrapperProps:M,radius:R,rightSection:k,rightSectionWidth:Y,rightSectionPointerEvents:$,leftSectionWidth:J,visible:z,defaultVisible:X,onVisibilityChange:Z,visibilityToggleIcon:L,visibilityToggleButtonProps:W,rightSectionProps:G,leftSectionProps:K,leftSectionPointerEvents:q,mod:U,...H}=n,Q=(0,a.M)(N),[ee,et]=(0,r.C)({value:z,defaultValue:X,finalValue:!1,onChange:Z}),en=()=>et(!ee),eo=(0,u.y)({name:"PasswordInput",classes:b,props:n,className:m,style:p,classNames:i,styles:g,unstyled:I,vars:j,varsResolver:x}),{resolvedClassNames:el,resolvedStyles:ea}=(0,s.h)({classNames:i,styles:g,props:n}),{styleProps:er,rest:ei}=(0,d.c)(H),em=o.createElement(f.A,{...eo("visibilityToggle"),disabled:S,radius:R,"aria-hidden":!W,tabIndex:-1,...W,variant:"subtle",color:"gray",unstyled:I,onMouseDown:e=>{e.preventDefault(),W?.onMouseDown?.(e),en()},onKeyDown:e=>{W?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),en())}},o.createElement(L,{reveal:ee}));return o.createElement(h.I.Wrapper,{required:w,id:Q,label:F,error:E,description:O,size:B,classNames:el,styles:ea,__staticSelector:"PasswordInput",errorProps:T,descriptionProps:_,unstyled:I,withAsterisk:A,inputWrapperOrder:V,inputContainer:C,variant:P,labelProps:{...D,htmlFor:Q},mod:U,...eo("root"),...er,...M},o.createElement(h.I,{component:"div",error:E,leftSection:y,size:B,classNames:{...el,input:(0,l.Z)(b.input,el.input)},styles:ea,radius:R,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:Y,rightSection:k??em,variant:P,unstyled:I,leftSectionWidth:J,rightSectionPointerEvents:$||"all",rightSectionProps:G,leftSectionProps:K,leftSectionPointerEvents:q,withAria:!1},o.createElement("input",{required:w,"data-invalid":!!E||void 0,"data-with-left-section":!!y||void 0,...eo("innerInput"),disabled:S,id:Q,ref:t,...ei,autoComplete:ei.autoComplete||"off",type:ee?"text":"password"})))});I.classes={...g.M.classes,...b},I.displayName="@mantine/core/PasswordInput"}},function(e){e.O(0,[57938,9462,17454,47747,59259,49774,92888,40179],function(){return e(e.s=8460)}),_N_E=e.O()}]);
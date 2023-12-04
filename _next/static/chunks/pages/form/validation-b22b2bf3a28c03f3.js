(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5234],{66471:function(e){"use strict";e.exports=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=a.length)return!1;for(o=n;0!=o--;)if(!e(t[o],a[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(a,l[o]))return!1;for(o=n;0!=o--;){var n,o,l,r=l[o];if(!e(t[r],a[r]))return!1}return!0}return t!=t&&a!=a}},59315:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return a(20765)}])},20765:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var n=a(24246),o=a(71670),l=a(3916),r=a(30289),i=a(27378),m=a(56926),s=a(56589),u=a(7033),c=a(62339),d=a(8671);let p=`
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
`,f={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:p};var h=a(25916),b=a(22971);let g=`
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
`,v={type:"code",component:function(){let e=(0,m.c)({initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(h.W,{label:"Password",placeholder:"Password",...e.getInputProps("password")}),i.createElement(h.W,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")}),i.createElement(b.Z,{justify:"flex-end",mt:"md"},i.createElement(d.z,{type:"submit"},"Submit"))))},code:g},x=`
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
`,I={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")}),i.createElement(b.Z,{justify:"flex-end",mt:"md"},i.createElement(d.z,{type:"submit"},"Submit"))))},code:x},w=`
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
`,j={type:"code",component:function(){let e=(0,m.c)({validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:w};var E=a(50776);let y=`
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
`,S={type:"code",component:function(){let e=(0,m.c)({validateInputOnChange:["email","name",`jobs.${E.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),i.createElement(u.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),i.createElement(u.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:y},N=`
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
`,P={type:"code",component:function(){let e=(0,m.c)({validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:N},B=`
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
`,C={type:"code",component:function(){let e=(0,m.c)({validateInputOnBlur:["email","name",`jobs.${E.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(c.Y,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")}),i.createElement(u.o,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")}),i.createElement(u.o,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:B};var O=a(94193);let F=`
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
`,D={type:"code",component:function(){let e=(0,m.c)({clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(u.o,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")}),i.createElement(O.X,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})}),i.createElement(b.Z,{justify:"flex-end",mt:"md"},i.createElement(d.z,{type:"submit"},"Submit"))))},code:F};var A=a(59269);let T=`
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
`,V={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?A.N9.show({message:"Please fill name field",color:"red"}):e.email&&A.N9.show({message:"Please provide a valid email",color:"red"})})},i.createElement(u.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),i.createElement(u.o,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")}),i.createElement(d.z,{type:"submit",mt:"sm"},"Submit")))},code:T},_=(0,l.A)(r.us.formValidation);function k(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,n.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,n.jsx)(a,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,n.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"path"})," – field path, for example ",(0,n.jsx)(t.code,{children:"user.email"})," or ",(0,n.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,n.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,n.jsx)(a,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,n.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,n.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on change set ",(0,n.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnChange: true });\n"})}),"\n",(0,n.jsx)(a,{data:j,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  validateInputOnChange: [\n    'name',\n    'email',\n    `jobs.${FORM_INDEX}.title`,\n  ],\n});\n"})}),"\n",(0,n.jsx)(a,{data:S,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,n.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnBlur: true });\n"})}),"\n",(0,n.jsx)(a,{data:P,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],\n});\n"})}),"\n",(0,n.jsx)(a,{data:C,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,n.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,n.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ clearInputErrorOnChange: false });\n"})}),"\n",(0,n.jsx)(a,{data:D,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,n.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,n.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,n.jsx)(a,{data:V}),"\n",(0,n.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,n.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,n.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(k,{...e})})}},28380:function(e,t,a){"use strict";function n(e,t,a){"object"==typeof a.value&&(a.value=o(a.value)),a.enumerable&&!a.get&&!a.set&&a.configurable&&a.writable&&"__proto__"!==t?e[t]=a.value:Object.defineProperty(e,t,a)}function o(e){if("object"!=typeof e)return e;var t,a,l,r=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?l=Object.create(e.__proto__||null):"[object Array]"===i?l=Array(e.length):"[object Set]"===i?(l=new Set,e.forEach(function(e){l.add(o(e))})):"[object Map]"===i?(l=new Map,e.forEach(function(e,t){l.set(o(t),o(e))})):"[object Date]"===i?l=new Date(+e):"[object RegExp]"===i?l=new RegExp(e.source,e.flags):"[object DataView]"===i?l=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?l=e.slice(0):"Array]"===i.slice(-6)&&(l=new e.constructor(e)),l){for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n(l,a[r],Object.getOwnPropertyDescriptor(e,a[r]));for(r=0,a=Object.getOwnPropertyNames(e);r<a.length;r++)Object.hasOwnProperty.call(l,t=a[r])&&l[t]===e[t]||n(l,t,Object.getOwnPropertyDescriptor(e,t))}return l||e}a.d(t,{Y:function(){return o}})},62339:function(e,t,a){"use strict";a.d(t,{Y:function(){return j}});var n=a(27378),o=a(40624),l=a(62740),r=a(58675),i=a(28086),m=a(72840),s=a(92082),u=a(83453),c=a(5564),d=a(6231),p=a(96739),f=a(20410),h=a(19397),b=a(23163);function g({direction:e,style:t,...a}){return n.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},n.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};function x(e,t,a){return void 0===e||(void 0===t||e>=t)&&(void 0===a||e<=a)}let I={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},w=(0,u.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.ap)(t,"ni-chevron-size")}})),j=(0,f.d)((e,t)=>{let a=(0,p.w)("NumberInput",I,e),{className:s,classNames:u,styles:f,unstyled:j,vars:E,onChange:y,onValueChange:S,value:N,defaultValue:P,max:B,min:C,step:O,hideControls:F,rightSection:D,isAllowed:A,clampBehavior:T,onBlur:V,allowDecimal:_,decimalScale:k,onKeyDown:M,handlersRef:Y,startValue:R,disabled:$,rightSectionPointerEvents:J,allowNegative:z,readOnly:Z,size:X,rightSectionWidth:L,...G}=a,W=(0,d.y)({name:"NumberInput",classes:v,props:a,classNames:u,styles:f,unstyled:j,vars:E,varsResolver:w}),{resolvedClassNames:q,resolvedStyles:K}=(0,c.h)({classNames:u,styles:f,props:a}),[U,H]=(0,r.C)({value:N,defaultValue:P,onChange:y}),Q=()=>{"number"!=typeof U||Number.isNaN(U)?H(C??(0,i.u)(R,C,B)):void 0!==B?H(U+O<=B?U+O:B):H(U+O)},ee=()=>{"number"!=typeof U||Number.isNaN(U)?H(B??(0,i.u)(R,C,B)):H(function({value:e,min:t,step:a=1,allowNegative:n}){let o=e-a;return void 0!==t&&o<t?t:!n&&o<0&&void 0===t?e:o}({value:U,min:C,step:O,allowNegative:z}))};(0,m.kR)(Y,{increment:Q,decrement:ee});let et=n.createElement("div",{...W("controls")},n.createElement(h.k,{...W("control"),tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof U&&void 0!==B&&U>=B,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:Q},n.createElement(g,{direction:"up"})),n.createElement(h.k,{...W("control"),tabIndex:-1,"aria-hidden":!0,disabled:$||"number"==typeof U&&void 0!==C&&U<=C,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:ee},n.createElement(g,{direction:"down"})));return n.createElement(b.M,{component:l.h3,allowNegative:z,className:(0,o.Z)(v.root,s),size:X,...G,readOnly:Z,disabled:$,value:U,getInputRef:t,onValueChange:(e,t)=>{if("event"===t.source){var a;H("number"!=typeof(a=e.floatValue)&&Number.isNaN(Number(a))||Number.isNaN(a)?e.value:e.floatValue)}S?.(e,t)},rightSection:F||Z?D:D||et,classNames:q,styles:K,unstyled:j,__staticSelector:"NumberInput",decimalScale:_?k:0,onKeyDown:e=>{M?.(e),Z||("ArrowUp"===e.key&&(e.preventDefault(),Q()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))},rightSectionPointerEvents:J??$?"none":void 0,rightSectionWidth:L??`var(--ni-right-section-width-${X||"sm"})`,onBlur:e=>{if(V?.(e),"blur"===T&&"number"==typeof U){let e=(0,i.u)(U,C,B);e!==U&&H((0,i.u)(U,C,B))}},isAllowed:e=>"strict"===T?A?A(e)&&x(e.floatValue,C,B):x(e.floatValue,C,B):!A||A(e)})});j.classes={...b.M.classes,...v},j.displayName="@mantine/core/NumberInput"},25916:function(e,t,a){"use strict";a.d(t,{W:function(){return I}});var n=a(27378),o=a(40624),l=a(31002),r=a(58675),i=a(92082),m=a(83453),s=a(5564),u=a(6231),c=a(96739),d=a(55934),p=a(20410),f=a(23163),h=a(42487),b=a(84246),g={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},x=(0,m.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),I=(0,p.d)((e,t)=>{let a=(0,c.w)("PasswordInput",v,e),{classNames:i,className:m,style:p,styles:f,unstyled:I,vars:w,required:j,error:E,leftSection:y,disabled:S,id:N,variant:P,inputContainer:B,description:C,label:O,size:F,errorProps:D,descriptionProps:A,labelProps:T,withAsterisk:V,inputWrapperOrder:_,wrapperProps:k,radius:M,rightSection:Y,rightSectionWidth:R,rightSectionPointerEvents:$,leftSectionWidth:J,visible:z,defaultVisible:Z,onVisibilityChange:X,visibilityToggleIcon:L,visibilityToggleButtonProps:G,rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,...U}=a,H=(0,l.M)(N),[Q,ee]=(0,r.C)({value:z,defaultValue:Z,finalValue:!1,onChange:X}),et=()=>ee(!Q),ea=(0,u.y)({name:"PasswordInput",classes:g,props:a,className:m,style:p,classNames:i,styles:f,unstyled:I,vars:w,varsResolver:x}),{resolvedClassNames:en,resolvedStyles:eo}=(0,s.h)({classNames:i,styles:f,props:a}),{styleProps:el,rest:er}=(0,d.c)(U),ei=n.createElement(b.A,{...ea("visibilityToggle"),disabled:S,radius:M,"aria-hidden":!G,tabIndex:-1,...G,variant:"subtle",color:"gray",unstyled:I,onMouseDown:e=>{e.preventDefault(),G?.onMouseDown?.(e),et()},onKeyDown:e=>{G?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())}},n.createElement(L,{reveal:Q}));return n.createElement(h.I.Wrapper,{required:j,id:H,label:O,error:E,description:C,size:F,classNames:en,styles:eo,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:A,unstyled:I,withAsterisk:V,inputWrapperOrder:_,inputContainer:B,variant:P,labelProps:{...T,htmlFor:H},...ea("root"),...el,...k},n.createElement(h.I,{component:"div",error:E,leftSection:y,size:F,classNames:{...en,input:(0,o.Z)(g.input,en.input)},styles:eo,radius:M,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:R,rightSection:Y??ei,variant:P,unstyled:I,leftSectionWidth:J,rightSectionPointerEvents:$||"all",rightSectionProps:W,leftSectionProps:q,leftSectionPointerEvents:K,withAria:!1},n.createElement("input",{required:j,"data-invalid":!!E||void 0,"data-with-left-section":!!y||void 0,...ea("innerInput"),disabled:S,id:H,ref:t,...er,autoComplete:er.autoComplete||"off",type:Q?"text":"password"})))});I.classes={...f.M.classes,...g},I.displayName="@mantine/core/PasswordInput"}},function(e){e.O(0,[370,2740,5819,2775,6926,9774,2888,179],function(){return e(e.s=59315)}),_N_E=e.O()}]);
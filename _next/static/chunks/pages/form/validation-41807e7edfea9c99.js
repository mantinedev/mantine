(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5234],{53816:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return o(78269)}])},78269:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return e1}});var a=o(85893),l=o(11151),n=o(19905),r=o(9904),i=o(67294),m=o(69814),s=o(81110),u=o(50780),c=o(95645),p=o(14469),d=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&g(e,o,t[o]);if(f)for(var o of f(t))h.call(t,o)&&g(e,o,t[o]);return e};let x=`
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
`,y={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,v({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,v({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(c.Y,v({mt:"sm",label:"Age",placeholder:"Age",min:0,max:99},e.getInputProps("age"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:x};var j=o(91361),I=o(16262),w=Object.defineProperty,P=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,O=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,N=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&O(e,o,t[o]);if(P)for(var o of P(t))S.call(t,o)&&O(e,o,t[o]);return e};let B=`
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
`,C={type:"code",component:function(){let e=(0,m.c)({initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(j.W,N({label:"Password",placeholder:"Password"},e.getInputProps("password"))),i.createElement(j.W,N({mt:"sm",label:"Confirm password",placeholder:"Confirm password"},e.getInputProps("confirmPassword"))),i.createElement(I.Z,{justify:"flex-end",mt:"md"},i.createElement(p.z,{type:"submit"},"Submit"))))},code:B};var A=Object.defineProperty,T=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,V=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,D=(e,t)=>{for(var o in t||(t={}))F.call(t,o)&&V(e,o,t[o]);if(T)for(var o of T(t))k.call(t,o)&&V(e,o,t[o]);return e};let Y=`
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
`,z={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(u.o,D({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(c.Y,D({mt:"sm",label:"Age",placeholder:"You age"},e.getInputProps("age"))),i.createElement(I.Z,{justify:"flex-end",mt:"md"},i.createElement(p.z,{type:"submit"},"Submit"))))},code:Y};var J=o(84200),_=Object.defineProperty,R=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,$=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Z=(e,t)=>{for(var o in t||(t={}))M.call(t,o)&&$(e,o,t[o]);if(R)for(var o of R(t))G.call(t,o)&&$(e,o,t[o]);return e};let X=J.z.object({name:J.z.string().min(2,{message:"Name should have at least 2 letters"}),email:J.z.string().email({message:"Invalid email"}),age:J.z.number().min(18,{message:"You must be at least 18 to create an account"})});function L(){let e=(0,m.c)({validate:e=>{let t=X.safeParse(e);if(t.success)return{};let o={};return t.error.errors.forEach(e=>{o[e.path.join(".")]=e.message}),o},initialValues:{name:"",email:"",age:18}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(u.o,Z({withAsterisk:!0,label:"Email",placeholder:"example@mail.com"},e.getInputProps("email"))),i.createElement(u.o,Z({withAsterisk:!0,label:"Name",placeholder:"John Doe",mt:"sm"},e.getInputProps("name"))),i.createElement(c.Y,Z({withAsterisk:!0,label:"Age",placeholder:"Your age",mt:"sm"},e.getInputProps("age"))),i.createElement(I.Z,{justify:"flex-end",mt:"xl"},i.createElement(p.z,{type:"submit"},"Submit"))))}let W=`
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
});

function Demo() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          withAsterisk
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,q={type:"code",component:L,code:W},K=`
import Joi from 'joi';
import { useForm, joiResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = Joi.object({
  name: Joi.string().min(2).message('Name should have at least 2 letters'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('Invalid email'),
  age: Joi.number().min(18).message('You must be at least 18 to create an account'),
});

function Demo() {
  const form = useForm({
    validate: joiResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          withAsterisk
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,U={type:"code",component:L,code:K},H=`
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
});

function Demo() {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          withAsterisk
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,Q={type:"code",component:L,code:H},ee=`
import { useForm, superstructResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';
import * as s from 'superstruct';
import isEmail from 'is-email';

const emailString = s.define('email', isEmail);
const schema = s.object({
  name: s.size(s.string(), 2, 30),
  email: emailString,
  age: s.min(s.number(), 18)
});

function Demo() {
  const form = useForm({
    validate: superstructResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18
    }
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <NumberInput
          withAsterisk
          label="Age"
          placeholder="Your age"
          mt="sm"
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,et={type:"code",component:L,code:ee};var eo=Object.defineProperty,ea=Object.getOwnPropertySymbols,el=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,er=(e,t,o)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ei=(e,t)=>{for(var o in t||(t={}))el.call(t,o)&&er(e,o,t[o]);if(ea)for(var o of ea(t))en.call(t,o)&&er(e,o,t[o]);return e};let em=`
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
`,es={type:"code",component:function(){let e=(0,m.c)({validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,ei({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,ei({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(c.Y,ei({mt:"sm",label:"Age",placeholder:"Age",min:0,max:99},e.getInputProps("age"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:em};var eu=o(67569),ec=Object.defineProperty,ep=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ef=Object.prototype.propertyIsEnumerable,eb=(e,t,o)=>t in e?ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eh=(e,t)=>{for(var o in t||(t={}))ed.call(t,o)&&eb(e,o,t[o]);if(ep)for(var o of ep(t))ef.call(t,o)&&eb(e,o,t[o]);return e};let eg=`
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
`,ev={type:"code",component:function(){let e=(0,m.c)({validateInputOnChange:["email","name",`jobs.${eu.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,eh({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,eh({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(c.Y,eh({mt:"sm",label:"Age",placeholder:"Age",min:0,max:99},e.getInputProps("age"))),i.createElement(u.o,eh({mt:"sm",label:"Job 1",placeholder:"Job 1"},e.getInputProps("jobs.0.title"))),i.createElement(u.o,eh({mt:"sm",label:"Job 2",placeholder:"Job 2"},e.getInputProps("jobs.1.title"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:eg};var ex=Object.defineProperty,ey=Object.getOwnPropertySymbols,ej=Object.prototype.hasOwnProperty,eI=Object.prototype.propertyIsEnumerable,ew=(e,t,o)=>t in e?ex(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eP=(e,t)=>{for(var o in t||(t={}))ej.call(t,o)&&ew(e,o,t[o]);if(ey)for(var o of ey(t))eI.call(t,o)&&ew(e,o,t[o]);return e};let eE=`
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
`,eS={type:"code",component:function(){let e=(0,m.c)({validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,eP({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,eP({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(c.Y,eP({mt:"sm",label:"Age",placeholder:"Age",min:0,max:99},e.getInputProps("age"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:eE};var eO=Object.defineProperty,eN=Object.getOwnPropertySymbols,eB=Object.prototype.hasOwnProperty,eC=Object.prototype.propertyIsEnumerable,eA=(e,t,o)=>t in e?eO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eT=(e,t)=>{for(var o in t||(t={}))eB.call(t,o)&&eA(e,o,t[o]);if(eN)for(var o of eN(t))eC.call(t,o)&&eA(e,o,t[o]);return e};let eF=`
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
`,ek={type:"code",component:function(){let e=(0,m.c)({validateInputOnBlur:["email","name",`jobs.${eu.n}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log)},i.createElement(u.o,eT({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,eT({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(c.Y,eT({mt:"sm",label:"Age",placeholder:"Age",min:0,max:99},e.getInputProps("age"))),i.createElement(u.o,eT({mt:"sm",label:"Job 1",placeholder:"Job 1"},e.getInputProps("jobs.0.title"))),i.createElement(u.o,eT({mt:"sm",label:"Job 2",placeholder:"Job 2"},e.getInputProps("jobs.1.title"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:eF};var eV=o(19286),eD=Object.defineProperty,eY=Object.getOwnPropertySymbols,ez=Object.prototype.hasOwnProperty,eJ=Object.prototype.propertyIsEnumerable,e_=(e,t,o)=>t in e?eD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eR=(e,t)=>{for(var o in t||(t={}))ez.call(t,o)&&e_(e,o,t[o]);if(eY)for(var o of eY(t))eJ.call(t,o)&&e_(e,o,t[o]);return e};let eM=`
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
`,eG={type:"code",component:function(){let e=(0,m.c)({clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},i.createElement(u.o,eR({withAsterisk:!0,label:"Email",placeholder:"your@email.com"},e.getInputProps("email"))),i.createElement(eV.X,eR({mt:"md",label:"I agree to sell my privacy"},e.getInputProps("termsOfService",{type:"checkbox"}))),i.createElement(I.Z,{justify:"flex-end",mt:"md"},i.createElement(p.z,{type:"submit"},"Submit"))))},code:eM};var e$=o(30644),eZ=Object.defineProperty,eX=Object.getOwnPropertySymbols,eL=Object.prototype.hasOwnProperty,eW=Object.prototype.propertyIsEnumerable,eq=(e,t,o)=>t in e?eZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eK=(e,t)=>{for(var o in t||(t={}))eL.call(t,o)&&eq(e,o,t[o]);if(eX)for(var o of eX(t))eW.call(t,o)&&eq(e,o,t[o]);return e};let eU=`
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
`,eH={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}}),t=e=>{e.name?e$.N9.show({message:"Please fill name field",color:"red"}):e.email&&e$.N9.show({message:"Please provide a valid email",color:"red"})};return i.createElement(s.x,{maw:340,mx:"auto"},i.createElement("form",{onSubmit:e.onSubmit(console.log,t)},i.createElement(u.o,eK({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(u.o,eK({mt:"sm",label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(p.z,{type:"submit",mt:"sm"},"Submit")))},code:eU},eQ=(0,n.A)(r.us.formValidation);function e0(e){let t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",a:"a",h3:"h3"},(0,l.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,a.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,a.jsx)(o,{data:y}),"\n",(0,a.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,a.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"path"})," – field path, for example ",(0,a.jsx)(t.code,{children:"user.email"})," or ",(0,a.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,a.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,a.jsx)(o,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,a.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,a.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,a.jsx)(o,{data:z}),"\n",(0,a.jsx)(t.h2,{id:"schema-based-validation",children:"Schema based validation"}),"\n",(0,a.jsxs)(t.p,{children:["Out of the box ",(0,a.jsx)(t.code,{children:"@mantine/form"})," supports schema validation with:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/zod",children:"zod"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/joi",children:"joi"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/yup",children:"yup"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/superstruct",children:"superstruct"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You will need to install one of the libraries yourself, as ",(0,a.jsx)(t.code,{children:"@mantine/form"})," package does not depend on any of them.\nIf you do not know what validation library to choose, we recommend choosing ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/zod",children:"zod"}),"\nas the most modern and developer-friendly library."]}),"\n",(0,a.jsx)(t.h3,{id:"zod",children:"zod"}),"\n",(0,a.jsx)(o,{data:q,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h3,{id:"joi",children:"joi"}),"\n",(0,a.jsx)(o,{data:U,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h3,{id:"yup",children:"yup"}),"\n",(0,a.jsx)(o,{data:Q,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h3,{id:"superstruct",children:"superstruct"}),"\n",(0,a.jsx)(o,{data:et,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,a.jsxs)(t.p,{children:["To validate all fields on change set ",(0,a.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnChange: true });\n"})}),"\n",(0,a.jsx)(o,{data:es,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({ validateInputOnChange: ['name', 'email', `jobs.${FORM_INDEX}.title`] });\n"})}),"\n",(0,a.jsx)(o,{data:ev,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,a.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,a.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ validateInputOnBlur: true });\n"})}),"\n",(0,a.jsx)(o,{data:eS,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({ validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`] });\n"})}),"\n",(0,a.jsx)(o,{data:ek,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,a.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,a.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,a.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const form = useForm({ clearInputErrorOnChange: false });\n"})}),"\n",(0,a.jsx)(o,{data:eG,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,a.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,a.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,a.jsx)(o,{data:eH}),"\n",(0,a.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,a.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,a.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})})]})}var e1=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(eQ,Object.assign({},e,{children:(0,a.jsx)(e0,e)}))}},95645:function(e,t,o){"use strict";o.d(t,{Y:function(){return z}});var a=o(67294),l=o(62740),n=o(643),r=o(71062),i=o(83443),m=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&p(e,o,t[o]);if(s)for(var o of s(t))c.call(t,o)&&p(e,o,t[o]);return e},f=(e,t)=>{var o={};for(var a in e)u.call(e,a)&&0>t.indexOf(a)&&(o[a]=e[a]);if(null!=e&&s)for(var a of s(e))0>t.indexOf(a)&&c.call(e,a)&&(o[a]=e[a]);return o};function b(e){var{direction:t,style:o}=e,l=f(e,["direction","style"]);return a.createElement("svg",d({style:d({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===t?"rotate(180deg)":void 0},o),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),a.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var h={controls:"m-95e17d22",control:"m-80b4b171"},g=o(86610),v=o(70097),x=o(3154),y=o(30370),j=o(86109),I=o(28816),w=o(8586),P=o(48468),E=Object.defineProperty,S=Object.defineProperties,O=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,A=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&A(e,o,t[o]);if(N)for(var o of N(t))C.call(t,o)&&A(e,o,t[o]);return e},F=(e,t)=>S(e,O(t)),k=(e,t)=>{var o={};for(var a in e)B.call(e,a)&&0>t.indexOf(a)&&(o[a]=e[a]);if(null!=e&&N)for(var a of N(e))0>t.indexOf(a)&&C.call(e,a)&&(o[a]=e[a]);return o};function V(e,t,o){return void 0===e||(void 0===t||e>=t)&&(void 0===o||e<=o)}let D={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},Y=(0,w.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,P.ap)(t,"ni-chevron-size")}})),z=(0,x.d)((e,t)=>{let o=(0,y.w)("NumberInput",D,e),{classNames:m,styles:s,unstyled:u,vars:c,onChange:p,onValueChange:d,value:f,defaultValue:x,max:w,min:P,step:E,hideControls:S,rightSection:O,isAllowed:N,clampBehavior:B,onBlur:C,allowDecimal:A,decimalScale:z,onKeyDown:J,handlersRef:_,startValue:R,disabled:M,rightSectionPointerEvents:G,allowNegative:$,readOnly:Z}=o,X=k(o,["classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly"]),L=(0,j.y)({name:"NumberInput",classes:h,props:o,classNames:m,styles:s,unstyled:u,vars:c,varsResolver:Y}),{resolvedClassNames:W,resolvedStyles:q}=(0,I.h)({classNames:m,styles:s,props:o}),[K,U]=(0,n.C)({value:f,defaultValue:x,onChange:p}),H=(e,t)=>{var o;U("number"!=typeof(o=e.floatValue)||Number.isNaN(o)?e.value:e.floatValue),null==d||d(e,t)},Q=()=>{"number"!=typeof K||Number.isNaN(K)?U(null!=P?P:(0,r.u)(R,P,w)):void 0!==w?U(K+E<=w?K+E:w):U(K+E)},ee=()=>{"number"!=typeof K||Number.isNaN(K)?U(null!=w?w:(0,r.u)(R,P,w)):U(function({value:e,min:t,step:o=1,allowNegative:a}){let l=e-o;return void 0!==t&&l<t?t:!a&&l<0&&void 0===t?e:l}({value:K,min:P,step:E,allowNegative:$}))},et=e=>{null==J||J(e),Z||("ArrowUp"===e.key&&(e.preventDefault(),Q()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))};(0,i.kR)(_,{increment:Q,decrement:ee});let eo=a.createElement("div",T({},L("controls")),a.createElement(g.k,F(T({},L("control")),{tabIndex:-1,"aria-hidden":!0,disabled:M||"number"==typeof K&&void 0!==w&&K>=w,mod:{direction:"up"},onPointerDown:Q}),a.createElement(b,{direction:"up"})),a.createElement(g.k,F(T({},L("control")),{tabIndex:-1,"aria-hidden":!0,disabled:M||"number"==typeof K&&void 0!==P&&K<=P,mod:{direction:"down"},onPointerDown:ee}),a.createElement(b,{direction:"down"})));return a.createElement(v.M,F(T({component:l.h3,allowNegative:$},X),{readOnly:Z,disabled:M,value:K,getInputRef:t,onValueChange:H,rightSection:S||Z?O:O||eo,classNames:W,styles:q,unstyled:u,__staticSelector:"NumberInput",decimalScale:A?z:0,onKeyDown:et,rightSectionPointerEvents:(null!=G?G:M)?"none":void 0,onBlur:e=>{null==C||C(e),"blur"===B&&"number"==typeof K&&U((0,r.u)(K,P,w))},isAllowed:e=>"strict"===B?N?N(e)&&V(e.floatValue,P,w):V(e.floatValue,P,w):!N||N(e)}))});z.classes=T(T({},v.M.classes),h),z.displayName="@mantine/core/NumberInput"},91361:function(e,t,o){"use strict";o.d(t,{W:function(){return A}});var a=o(67294),l=o(40624),n=o(9779),r=o(643);let i=({reveal:e})=>a.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},a.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var m={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"},s=o(89363),u=o(52561),c=o(70097),p=o(3154),d=o(30370),f=o(86109),b=o(28816),h=o(7872),g=o(8586),v=o(48468),x=Object.defineProperty,y=Object.defineProperties,j=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,E=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&E(e,o,t[o]);if(I)for(var o of I(t))P.call(t,o)&&E(e,o,t[o]);return e},O=(e,t)=>y(e,j(t)),N=(e,t)=>{var o={};for(var a in e)w.call(e,a)&&0>t.indexOf(a)&&(o[a]=e[a]);if(null!=e&&I)for(var a of I(e))0>t.indexOf(a)&&P.call(e,a)&&(o[a]=e[a]);return o};let B={__staticSelector:"PasswordInput",visibilityToggleIcon:i},C=(0,g.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,v.ap)(t,"psi-icon-size"),"--psi-button-size":(0,v.ap)(t,"psi-button-size")}})),A=(0,p.d)((e,t)=>{let o=(0,d.w)("PasswordInput",B,e),{classNames:i,className:c,style:p,styles:g,unstyled:v,vars:x,required:y,error:j,leftSection:I,disabled:w,id:P,variant:E,inputContainer:A,description:T,label:F,size:k,__staticSelector:V,errorProps:D,descriptionProps:Y,labelProps:z,withAsterisk:J,inputWrapperOrder:_,wrapperProps:R,radius:M,rightSection:G,rightSectionWidth:$,leftSectionWidth:Z,visible:X,defaultVisible:L,onVisibilityChange:W,visibilityToggleIcon:q,visibilityToggleButtonProps:K,rightSectionProps:U,leftSectionProps:H,leftSectionPointerEvents:Q}=o,ee=N(o,["classNames","className","style","styles","unstyled","vars","required","error","leftSection","disabled","id","variant","inputContainer","description","label","size","__staticSelector","errorProps","descriptionProps","labelProps","withAsterisk","inputWrapperOrder","wrapperProps","radius","rightSection","rightSectionWidth","leftSectionWidth","visible","defaultVisible","onVisibilityChange","visibilityToggleIcon","visibilityToggleButtonProps","rightSectionProps","leftSectionProps","leftSectionPointerEvents"]),et=(0,n.M)(P),[eo,ea]=(0,r.C)({value:X,defaultValue:L,finalValue:!1,onChange:W}),el=()=>ea(!eo),en=(0,f.y)({name:"PasswordInput",classes:m,props:o,className:c,style:p,classNames:i,styles:g,unstyled:v,vars:x,varsResolver:C}),{resolvedClassNames:er,resolvedStyles:ei}=(0,b.h)({classNames:i,styles:g,props:o}),{styleProps:em,rest:es}=(0,h.c)(ee),eu=a.createElement(s.A,O(S(O(S({},en("visibilityToggle")),{radius:M,"aria-hidden":!K,tabIndex:-1}),K),{variant:"subtle",color:"gray",unstyled:v,onMouseDown:e=>{var t;e.preventDefault(),null==(t=null==K?void 0:K.onMouseDown)||t.call(K,e),el()},onKeyDown:e=>{var t;null==(t=null==K?void 0:K.onKeyDown)||t.call(K,e)," "===e.key&&(e.preventDefault(),el())}}),a.createElement(q,{reveal:eo}));return a.createElement(u.I.Wrapper,S(S(S({required:y,id:et,label:F,error:j,description:T,size:k,classNames:er,styles:ei,__staticSelector:V,errorProps:D,descriptionProps:Y,unstyled:v,withAsterisk:J,inputWrapperOrder:_,inputContainer:A,variant:E,labelProps:O(S({},z),{htmlFor:et})},en("root")),em),R),a.createElement(u.I,{component:"div",error:j,leftSection:I,size:k,classNames:O(S({},er),{input:(0,l.Z)(m.input,er.input)}),styles:ei,radius:M,disabled:w,__staticSelector:V,rightSectionWidth:$,rightSection:null!=G?G:eu,variant:E,unstyled:v,leftSectionWidth:Z,rightSectionPointerEvents:"all",rightSectionProps:U,leftSectionProps:H,leftSectionPointerEvents:Q,withAria:!1},a.createElement("input",O(S(O(S({required:y,"data-invalid":!!j||void 0,"data-with-left-section":!!I||void 0},en("innerInput")),{disabled:w,id:et,ref:t}),es),{autoComplete:es.autoComplete||"off",type:eo?"text":"password"}))))});A.classes=S(S({},c.M.classes),m),A.displayName="@mantine/core/PasswordInput"}},function(e){e.O(0,[4136,5060,8992,178,9814,9774,2888,179],function(){return e(e.s=53816)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},34143:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/values",function(){return n(1791)}])},1791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(85893),a=n(11151),o=n(19905),l=n(9904),s=n(67294),i=n(20160),m=n(81110),u=n(50780),c=n(16262),d=n(14469),f=n(97718),p=Object.defineProperty,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))b.call(t,n)&&v(e,n,t[n]);return e};let x=`
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
          variant="outline"
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
`,j={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",email:""}});return s.createElement(m.x,{maw:340,mx:"auto"},s.createElement(u.o,y({label:"Name",placeholder:"Name"},e.getInputProps("name"))),s.createElement(u.o,y({mt:"md",label:"Email",placeholder:"Email"},e.getInputProps("email"))),s.createElement(c.Z,{justify:"center",mt:"xl"},s.createElement(d.z,{variant:"outline",onClick:()=>e.setValues({name:(0,f.k)(),email:`${(0,f.k)()}@test.com`})},"Set random values")))},code:x};var w=Object.defineProperty,V=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&O(e,n,t[n]);if(V)for(var n of V(t))E.call(t,n)&&O(e,n,t[n]);return e};let k=`
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
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}
        >
          Random email
        </Button>
      </Group>
    </Box>
  );
}
`,P={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",email:""}});return s.createElement(m.x,{maw:340,mx:"auto"},s.createElement(u.o,N({label:"Name",placeholder:"Name"},e.getInputProps("name"))),s.createElement(u.o,N({mt:"md",label:"Email",placeholder:"Email"},e.getInputProps("email"))),s.createElement(c.Z,{justify:"center",mt:"xl"},s.createElement(d.z,{variant:"outline",onClick:()=>e.setFieldValue("name",(0,f.k)())},"Random name"),s.createElement(d.z,{variant:"outline",onClick:()=>e.setFieldValue("email",`${(0,f.k)()}@test.com`)},"Random email")))},code:k};var F=Object.defineProperty,S=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&T(e,n,t[n]);if(S)for(var n of S(t))B.call(t,n)&&T(e,n,t[n]);return e};let _=`
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
        <Button variant="outline" onClick={() => form.reset()}>
          Reset to initial values
        </Button>
      </Group>
    </Box>
  );
}
`,A={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",email:""}});return s.createElement(m.x,{maw:340,mx:"auto"},s.createElement(u.o,D({label:"Name",placeholder:"Name"},e.getInputProps("name"))),s.createElement(u.o,D({mt:"md",label:"Email",placeholder:"Email"},e.getInputProps("email"))),s.createElement(c.Z,{justify:"center",mt:"xl"},s.createElement(d.z,{variant:"outline",onClick:()=>e.reset()},"Reset to initial values")))},code:_};var Z=n(53777),C=Object.defineProperty,G=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&$(e,n,t[n]);if(G)for(var n of G(t))R.call(t,n)&&$(e,n,t[n]);return e};let z=`
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
`,U={type:"code",component:function(){let[e,t]=(0,s.useState)(""),n=(0,i.c)({initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return s.createElement(m.x,{maw:340,mx:"auto"},s.createElement("form",{onSubmit:n.onSubmit(e=>t(JSON.stringify(e,null,2)))},s.createElement(u.o,L({label:"First name",placeholder:"First name"},n.getInputProps("firstName"))),s.createElement(u.o,L({label:"Last name",placeholder:"Last name",mt:"md"},n.getInputProps("lastName"))),s.createElement(u.o,L({type:"number",label:"Age",placeholder:"Age",mt:"md"},n.getInputProps("age"))),s.createElement(d.z,{type:"submit",mt:"md"},"Submit")),e&&s.createElement(Z.E,{block:!0},e))},code:z},X=(0,o.A)(l.us.formValues);function Y(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,r.jsxs)(t.p,{children:["In most cases you should set ",(0,r.jsx)(t.code,{children:"initialValues"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"setvalues-handler",children:"setValues handler"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"form.setValues"})," you can set all form values, for example you can set values after you have received a response from the backend API:"]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"setvalues-partial",children:"setValues partial"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.setValues"})," can also be used to set multiple values at once, payload will be shallow merged with current values state:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ initialValues: { name: '', email: '', age: 0 } });\n\nform.setValues({ name: 'John', age: 21 });\nform.values; // -> { name: 'John', email: '', age: 21 }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"setfieldvalue-handler",children:"setFieldValue handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," handler allows to set value of the field at given path:"]}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"reset-handler",children:"reset handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"form.reset"})," handler sets values to ",(0,r.jsx)(t.code,{children:"initialValues"})," and clear all errors:"]}),"\n",(0,r.jsx)(n,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"setinitialvalues-handler",children:"setInitialValues handler"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"font.setInitialValues"})," handler allows to update ",(0,r.jsx)(t.code,{children:"initialValues"})," after form was initialized:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"transformvalues",children:"transformValues"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"transformValues"})," to transform values before they get submitted in ",(0,r.jsx)(t.code,{children:"onSubmit"})," handler.\nFor example, it can be used to merge several fields into one or to convert types:"]}),"\n",(0,r.jsx)(n,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"get-transformed-values",children:"Get transformed values"}),"\n",(0,r.jsxs)(t.p,{children:["You can get transformed values outside of ",(0,r.jsx)(t.code,{children:"form.onSubmit"})," method by calling ",(0,r.jsx)(t.code,{children:"form.getTransformedValues"}),".\nIt accepts ",(0,r.jsx)(t.code,{children:"values"})," that need to be transformed as optional argument, if it is not provided, then\nthe result of ",(0,r.jsx)(t.code,{children:"form.values"})," transformation will be returned instead:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    transformValues: (values) => ({\n      fullName: `${values.firstName} ${values.lastName}`,\n    }),\n  });\n\n  form.getTransformedValues(); // -> { fullName: 'John Doe' }\n  form.getTransformedValues({\n    firstName: 'Jane',\n    lastName: 'Loe',\n  }); // { fullName: 'Jane Loe' }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"get-values-type",children:"Get values type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({ initialValues: { name: '', age: 0 } });\n\n  // Get inferred form values type, will be `{ name: string; age: number }`\n  type FormValues = typeof form.values;\n\n  // Use values type in handleSubmit function or anywhere else\n  const handleSubmit = (values: FormValues) => console.log(values);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"get-transformed-values-type",children:"Get transformed values type"}),"\n",(0,r.jsxs)(t.p,{children:["To get transformed values (output of ",(0,r.jsx)(t.a,{href:"#transformvalues",children:"transformValues"}),") use ",(0,r.jsx)(t.code,{children:"TransformedValues"})," type.\nIt is useful when you want to create a custom submit function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm, TransformedValues } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      locationId: '2',\n    },\n\n    transformValues: (values) => ({\n      ...values,\n      locationId: Number(values.locationId),\n    }),\n  });\n\n  type Transformed = TransformedValues<typeof form>;\n  // -> { name: string, locationId: number }\n\n  const handleSubmit = (values: TransformedValues<typeof form>) => {};\n\n  return <form onSubmit={form.onSubmit(handleSubmit)} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"set-values-type",children:"Set values type"}),"\n",(0,r.jsxs)(t.p,{children:["By default, form values types will be inferred from ",(0,r.jsx)(t.code,{children:"initialValues"}),".\nTo avoid that, you can pass type to ",(0,r.jsx)(t.code,{children:"useForm"})," hook, this approach is useful when\ntypes cannot be correctly inferred or when you want to provide more specific types:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\ninterface FormValues {\n  name: string; // regular field, same as inferred type\n  role: 'user' | 'admin'; // union, more specific than inferred string type\n\n  // values that may be undefined or null\n  // cannot be correctly inferred in strict mode\n  age: number | undefined;\n  registeredAt: Date | null;\n\n  // Arrays that are empty cannot be inferred correctly\n  jobs: string[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    initialValues: {\n      name: '',\n      role: 'user',\n      age: undefined,\n      registeredAt: null,\n      jobs: [],\n    },\n  });\n}\n"})})]})}var W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(X,Object.assign({},e,{children:(0,r.jsx)(Y,e)}))}},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var r,a,o,l=o[a];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=a(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function a(e){if("object"!=typeof e)return e;var t,n,o,l=0,s=Object.prototype.toString.call(e);if("[object Object]"===s?o=Object.create(e.__proto__||null):"[object Array]"===s?o=Array(e.length):"[object Set]"===s?(o=new Set,e.forEach(function(e){o.add(a(e))})):"[object Map]"===s?(o=new Map,e.forEach(function(e,t){o.set(a(t),a(e))})):"[object Date]"===s?o=new Date(+e):"[object RegExp]"===s?o=RegExp(e.source,e.flags):"[object DataView]"===s?o=new e.constructor(a(e.buffer)):"[object ArrayBuffer]"===s?o=e.slice(0):"Array]"===s.slice(-6)&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r(o,n[l],Object.getOwnPropertyDescriptor(e,n[l]));for(l=0,n=Object.getOwnPropertyNames(e);l<n.length;l++)Object.hasOwnProperty.call(o,t=n[l])&&o[t]===e[t]||r(o,t,Object.getOwnPropertyDescriptor(e,t))}return o||e}n.d(t,{Y:function(){return a}})}},function(e){e.O(0,[8992,178,160,9774,2888,179],function(){return e(e.s=34143)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5731],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},45411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/nested",function(){return n(13995)}])},13995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(85893),o=n(11151),s=n(19905),a=n(9904),i=n(67294),l=n(69814),c=n(81110),m=n(50780),u=n(19286),d=n(72039),p=n(53777),f=Object.defineProperty,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&g(e,n,t[n]);if(h)for(var n of h(t))y.call(t,n)&&g(e,n,t[n]);return e};let b=`
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Code, Text, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </Box>
  );
}
`,j={type:"code",component:function(){let e=(0,l.c)({initialValues:{terms:!1,user:{firstName:"",lastName:""}}});return i.createElement(c.x,{maw:340,mx:"auto"},i.createElement(m.o,x({label:"First name",placeholder:"First name"},e.getInputProps("user.firstName"))),i.createElement(m.o,x({label:"Last name",placeholder:"Last name",mt:"md"},e.getInputProps("user.lastName"))),i.createElement(u.X,x({label:"I accepts terms & conditions",mt:"sm"},e.getInputProps("terms",{type:"checkbox"}))),i.createElement(d.x,{size:"sm",fw:500,mt:"xl"},"Form values:"),i.createElement(p.E,{block:!0,mt:5},JSON.stringify(e.values,null,2)))},code:b};var k=n(16262),w=n(87809),O=n(89363),I=n(14469),N=n(97718),E=n(89611),M=Object.defineProperty,P=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))F.call(t,n)&&S(e,n,t[n]);if(P)for(var n of P(t))T.call(t,n)&&S(e,n,t[n]);return e};let Z=`
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>

      <Text size="sm" fw={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
`,_={type:"code",component:function(){let e=(0,l.c)({initialValues:{employees:[{name:"",active:!1,key:(0,N.k)()}]}}),t=e.values.employees.map((t,n)=>i.createElement(k.Z,{key:t.key,mt:"xs"},i.createElement(m.o,A({placeholder:"John Doe",withAsterisk:!0,style:{flex:1}},e.getInputProps(`employees.${n}.name`))),i.createElement(w.r,A({label:"Active"},e.getInputProps(`employees.${n}.active`,{type:"checkbox"}))),i.createElement(O.A,{color:"red",onClick:()=>e.removeListItem("employees",n)},i.createElement(E.Z,{size:"1rem"}))));return i.createElement(c.x,{maw:500,mx:"auto"},t.length>0?i.createElement(k.Z,{mb:"xs"},i.createElement(d.x,{fw:500,size:"sm",style:{flex:1}},"Name"),i.createElement(d.x,{fw:500,size:"sm",pr:90},"Status")):i.createElement(d.x,{c:"dimmed",ta:"center"},"No one here..."),t,i.createElement(k.Z,{justify:"center",mt:"md"},i.createElement(I.z,{onClick:()=>e.insertListItem("employees",{name:"",active:!1,key:(0,N.k)()})},"Add employee")),i.createElement(d.x,{size:"sm",fw:500,mt:"md"},"Form values:"),i.createElement(p.E,{block:!0},JSON.stringify(e.values,null,2)))},code:Z},C=(0,s.A)(a.us.formNested);function L(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"properties-paths",children:"Properties paths"}),"\n",(0,r.jsxs)(t.p,{children:["Most of ",(0,r.jsx)(t.code,{children:"form"})," handlers accept property path as the first argument.\nProperty path includes keys/indices of objects/arrays at which target property is contained:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    user: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    fruits: [\n      { name: 'Banana', available: true },\n      { name: 'Orange', available: false },\n    ],\n\n    deeply: {\n      nested: {\n        object: [{ item: 1 }, { item: 2 }],\n      },\n    },\n  },\n});\n\n// Props for input that is controlled by user object firstName field\nform.getInputProps('user.firstName');\n\n// Set value of `name` field that is contained in object at second position of fruits array:\nform.setFieldValue('fruits.1.name', 'Carrot');\n\n// Validate deeply nested field\nform.validateField('deeply.nested.object.0.item');\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-objects",children:"Nested objects"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"set-nested-object-value",children:"Set nested object value"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n});\n\n// You can set values for each field individually\nform.setFieldValue('user.name', 'John');\nform.setFieldValue('user.occupation', 'Engineer');\n\n// Or set the entire object\nform.setFieldValue('user', { name: 'Jane', occupation: 'Architect' });\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-object-values-validation",children:"Nested object values validation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n\n  validate: {\n    user: {\n      name: (value) => (value.length < 2 ? 'Name is too short' : null),\n      occupation: (value) => (value.length < 2 ? 'Occupation is too short' : null),\n    },\n  },\n});\n\nform.validate();\nform.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-arrays",children:"Nested arrays"}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"list-handlers",children:"List handlers"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useForm"})," hook provides the following handlers to manage list state:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"removeListItem"})," – removes list item at given index"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"insertListItem"})," – inserts list item at given index (appends item to the end of the list if index is not specified)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"reorderListItem"})," – reorders list item with given position at specified field"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"list-values-validation",children:"List values validation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    users: [\n      { name: 'John', age: 12 },\n      { name: '', age: 22 },\n    ],\n  },\n\n  validate: {\n    users: {\n      name: (value) => (value.length < 2 ? 'Name should have at least 2 letters' : null),\n      age: (value) => (value < 18 ? 'User must be 18 or older' : null),\n    },\n  },\n});\n\n// Validate list item field\nform.validate('users.1.name');\n\n// Or with all other fields\nform.validate();\nconsole.log(form.errors);\n// {\n//  'users.0.age': 'User must be 18 or older',\n//  'users.1.name': 'Name should have at least 2 letters'\n// }\n"})})]})}var V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(C,Object.assign({},e,{children:(0,r.jsx)(L,e)}))}},89611:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;0!=o--;){var r,o,s,a=s[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,s,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?s=Object.create(e.__proto__||null):"[object Array]"===i?s=Array(e.length):"[object Set]"===i?(s=new Set,e.forEach(function(e){s.add(o(e))})):"[object Map]"===i?(s=new Map,e.forEach(function(e,t){s.set(o(t),o(e))})):"[object Date]"===i?s=new Date(+e):"[object RegExp]"===i?s=RegExp(e.source,e.flags):"[object DataView]"===i?s=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?s=e.slice(0):"Array]"===i.slice(-6)&&(s=new e.constructor(e)),s){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r(s,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(s,t=n[a])&&s[t]===e[t]||r(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}n.d(t,{Y:function(){return o}})}},function(e){e.O(0,[8992,178,9814,9774,2888,179],function(){return e(e.s=45411)}),_N_E=e.O()}]);
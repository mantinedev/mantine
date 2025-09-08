(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29376],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},22426:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var s=n(6029),r=n(16285),o=n(76320),a=n(38774),l=n(4349),i=n(69329);let c={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{terms:!1,user:{firstName:"",lastName:""}}});return(0,s.jsxs)(o.a,{maw:340,mx:"auto",children:[(0,s.jsx)(a.k,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")},e.key("user.firstName")),(0,s.jsx)(a.k,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")},e.key("user.lastName")),(0,s.jsx)(l.S,{label:"I accept terms and conditions",mt:"sm",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accept terms and conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
`};var d=n(90993),m=n(57414),u=n(47371),p=n(44572),h=n(45208),f=n(61087),y=n(8440);let v={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,y.z)()}]}}),t=e.getValues().employees.map((t,n)=>(0,s.jsxs)(m.Y,{mt:"xs",children:[(0,s.jsx)(a.k,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${n}.name`)},e.key(`employees.${n}.name`)),(0,s.jsx)(u.d,{label:"Active",...e.getInputProps(`employees.${n}.active`,{type:"checkbox"})},e.key(`employees.${n}.active`)),(0,s.jsx)(p.M,{color:"red",onClick:()=>e.removeListItem("employees",n),children:(0,s.jsx)(d.A,{size:16})})]},t.key));return(0,s.jsxs)(o.a,{maw:500,mx:"auto",children:[t.length>0?(0,s.jsxs)(m.Y,{mb:"xs",children:[(0,s.jsx)(h.E,{fw:500,size:"sm",style:{flex:1},children:"Name"}),(0,s.jsx)(h.E,{fw:500,size:"sm",pr:90,children:"Status"})]}):(0,s.jsx)(h.E,{c:"dimmed",ta:"center",children:"No one here..."}),t,(0,s.jsx)(m.Y,{justify:"center",mt:"md",children:(0,s.jsx)(f.$,{onClick:()=>e.insertListItem("employees",{name:"",active:!1,key:(0,y.z)()}),children:"Add employee"})})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        key={form.key(\`employees.\${index}.active\`)}
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
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
    </Box>
  );
}
`};var g=n(38547),x=n(5262);let j=(0,g.P)(x.XZ.formNested);function k(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"properties-paths",children:"Properties paths"}),"\n",(0,s.jsxs)(t.p,{children:["Most of ",(0,s.jsx)(t.code,{children:"form"})," handlers accept property path as the first argument.\nProperty path includes keys/indices of objects/arrays at which target property is contained:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    fruits: [\n      { name: 'Banana', available: true },\n      { name: 'Orange', available: false },\n    ],\n\n    deeply: {\n      nested: {\n        object: [{ item: 1 }, { item: 2 }],\n      },\n    },\n  },\n});\n\n// Props for input that is controlled by user object firstName field\nform.getInputProps('user.firstName');\n\n// Set value of `name` field that is contained in object at second position of fruits array:\nform.setFieldValue('fruits.1.name', 'Carrot');\n\n// Validate deeply nested field\nform.validateField('deeply.nested.object.0.item');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"nested-objects",children:"Nested objects"}),"\n",(0,s.jsx)(n,{data:c}),"\n",(0,s.jsx)(t.h2,{id:"set-nested-object-value",children:"Set nested object value"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n});\n\n// You can set values for each field individually\nform.setFieldValue('user.name', 'John');\nform.setFieldValue('user.occupation', 'Engineer');\n\n// Or set the entire object\nform.setFieldValue('user', { name: 'Jane', occupation: 'Architect' });\n"})}),"\n",(0,s.jsx)(t.h2,{id:"nested-object-values-validation",children:"Nested object values validation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n\n  validate: {\n    user: {\n      name: (value) =>\n        value.length < 2 ? 'Name is too short' : null,\n      occupation: (value) =>\n        value.length < 2 ? 'Occupation is too short' : null,\n    },\n  },\n});\n\nform.validate();\nform.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"nested-arrays",children:"Nested arrays"}),"\n",(0,s.jsx)(n,{data:v}),"\n",(0,s.jsx)(t.h2,{id:"list-handlers",children:"List handlers"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useForm"})," hook provides the following handlers to manage list state:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"removeListItem"})," – removes list item at given index"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"insertListItem"})," – inserts list item at given index (appends item to the end of the list if index is not specified)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reorderListItem"})," – reorders list item with given position at specified field"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"replaceListItem"})," – replaces list item at given index with new value"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"list-values-validation",children:"List values validation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    users: [\n      { name: 'John', age: 12 },\n      { name: '', age: 22 },\n    ],\n  },\n\n  validate: {\n    users: {\n      name: (value) =>\n        value.length < 2\n          ? 'Name should have at least 2 letters'\n          : null,\n      age: (value) =>\n        value < 18 ? 'User must be 18 or older' : null,\n    },\n  },\n});\n\n// Validate list item field\nform.validateField('users.1.name');\n\n// Or with all other fields\nform.validate();\nconsole.log(form.errors);\n// {\n//  'users.0.age': 'User must be 18 or older',\n//  'users.1.name': 'Name should have at least 2 letters'\n// }\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(j,{...e,children:(0,s.jsx)(k,{...e})})}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},55272:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((s=t.length)!=n.length)return!1;for(r=s;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((s=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=s;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=s;0!=r--;){var s,r,o,a=o[r];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},86874:(e,t,n)=>{"use strict";function s(e,t,n){"object"==typeof n.value&&(n.value=r(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function r(e){if("object"!=typeof e)return e;var t,n,o,a=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?o=Object.create(e.__proto__||null):"[object Array]"===l?o=Array(e.length):"[object Set]"===l?(o=new Set,e.forEach(function(e){o.add(r(e))})):"[object Map]"===l?(o=new Map,e.forEach(function(e,t){o.set(r(t),r(e))})):"[object Date]"===l?o=new Date(+e):"[object RegExp]"===l?o=new RegExp(e.source,e.flags):"[object DataView]"===l?o=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===l?o=e.slice(0):"Array]"===l.slice(-6)&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)s(o,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(o,t=n[a])&&o[t]===e[t]||s(o,t,Object.getOwnPropertyDescriptor(e,t))}return o||e}n.d(t,{Q:()=>r})},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90993:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","trash","Trash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},96593:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/nested",function(){return n(22426)}])}},e=>{e.O(0,[38547,69329,90636,46593,38792],()=>e(e.s=96593)),_N_E=e.O()}]);
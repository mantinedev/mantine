(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7246],{38792:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;0!=o--;){var r,o,s,i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},96037:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-17-0",function(){return n(33559)}])},33559:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(31085),o=n(71184),s=n(6861),i=n(73943),a=n(40691),l=n(18675),c=n(20017);let d=(0,l.P)(c.XZ.Changelog7170);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"portal-reusetargetnode-prop",children:"Portal reuseTargetNode prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/portal",children:"Portal"})," component now supports ",(0,r.jsx)(t.code,{children:"reuseTargetNode"})," prop which allows to reuse the same target node for all instances.\nThis option is more performant than the previous behavior, it is recommended to be enabled.\nThis option will be enabled by default in the ",(0,r.jsx)(t.code,{children:"8.0"})," major release."]}),"\n",(0,r.jsxs)(t.p,{children:["To enable reuseTargetNode option in all components that depend on Portal, add the following code\nto your ",(0,r.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, Portal } from '@mantine/core';\n\nexport const theme = createTheme({\n  components: {\n    Portal: Portal.extend({\n      defaultProps: {\n        reuseTargetNode: true,\n      },\n    }),\n  }\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Example usage. In the following example, all three paragraphs will be rendered in the same target node:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Portal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Portal reuseTargetNode>\n        <p>First</p>\n      </Portal>\n\n      <Portal reuseTargetNode>\n        <p>Second</p>\n      </Portal>\n\n      <Portal reuseTargetNode>\n        <p>Third</p>\n      </Portal>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-form-formrootrule",children:"use-form formRootRule"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"formRootRule"})," is a special rule path that can be used to ",(0,r.jsx)(t.a,{href:"/form/validation",children:"validate"})," objects and arrays\nalongside with their nested fields. For example, it is useful when you want to capture\na list of values, validate each value individually and then validate the list itself\nto not be empty:"]}),"\n",(0,r.jsx)(n,{data:s.a}),"\n",(0,r.jsx)(t.p,{children:"Another example is to validate an object fields combination:"}),"\n",(0,r.jsx)(n,{data:i.E}),"\n",(0,r.jsx)(t.h2,{id:"isjsonstring-and-isnotemptyhtml-form-validators",children:"isJSONString and isNotEmptyHTML form validators"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"isJSONString"})," and ",(0,r.jsx)(t.code,{children:"isNotEmptyHTML"})," ",(0,r.jsx)(t.a,{href:"/form/validators",children:"form validators"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"isNotEmptyHTML"})," checks that form value is not an empty HTML string. Empty string, string with only HTML tags and whitespace are considered to be empty."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"isJSONString"})," checks that form value is a valid JSON string."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isJSONString, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    json: '',\n    html: '',\n  },\n\n  validate: {\n    json: isJSONString('Invalid JSON string'),\n    html: isNotEmptyHTML('HTML cannot be empty'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"popover-ondismiss",children:"Popover onDismiss"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," now supports ",(0,r.jsx)(t.code,{children:"onDismiss"})," prop, which makes it easier\nto subscribe to outside clicks and escape key presses to close popover:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Button, Popover } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover\n      opened={opened}\n      onDismiss={() => setOpened(false)}\n    >\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>\n          Toggle popover\n        </Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"mantineprovider-env",children:"MantineProvider env"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," component now supports ",(0,r.jsx)(t.code,{children:"env"})," prop.\nIt can be used in test environment to disable some features that\nmight impact tests and/or make it harder to test components:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"transitions that mount/unmount child component with delay"}),"\n",(0,r.jsx)(t.li,{children:"portals that render child component in a different part of the DOM"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To enable test environment, set ",(0,r.jsx)(t.code,{children:"env"})," to ",(0,r.jsx)(t.code,{children:"test"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider env=\"test\">\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-file-dialog-hook",children:"use-file-dialog hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-file-dialog",children:"use-file-dialog"})," allows capturing one or more files from the user\nwithout file input element:"]}),"\n",(0,r.jsx)(n,{data:a.b}),"\n",(0,r.jsx)(t.h2,{id:"remix-deprecation",children:"Remix deprecation"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://remix.run/",children:"Remix"})," is deprecated, the documentation related to Remix integration\nwas removed, use ",(0,r.jsx)(t.a,{href:"/guides/react-router",children:"React Router"})," instead. To simplify maintenance,\nRemix/React Router templates were archived and will not be updated."]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-hydration-warning",children:"I get hydration warning about data-mantine-color-scheme attribute, what does it mean?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/apply-styles-to-all",children:"How can I apply styles to all Mantine components?"})," question"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," now supports customizing ",(0,r.jsx)(t.code,{children:"middlewares"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(t.code,{children:"overscrollBehavior"})," prop"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/affix",children:"Affix"})," now supports ",(0,r.jsx)(t.code,{children:"theme.spacing"})," values for ",(0,r.jsx)(t.code,{children:"position"})," prop"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/anchor",children:"Anchor"})," now supports ",(0,r.jsx)(t.code,{children:'underline="not-hover"'})," option to display underline only when the link is not hovered"]}),"\n"]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(m,{...e})})}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},13660:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},74015:(e,t,n)=>{"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,s,i=0,a=Object.prototype.toString.call(e);if("[object Object]"===a?s=Object.create(e.__proto__||null):"[object Array]"===a?s=Array(e.length):"[object Set]"===a?(s=new Set,e.forEach(function(e){s.add(o(e))})):"[object Map]"===a?(s=new Map,e.forEach(function(e,t){s.set(o(t),o(e))})):"[object Date]"===a?s=new Date(+e):"[object RegExp]"===a?s=new RegExp(e.source,e.flags):"[object DataView]"===a?s=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===a?s=e.slice(0):"Array]"===a.slice(-6)&&(s=new e.constructor(e)),s){for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r(s,n[i],Object.getOwnPropertyDescriptor(e,n[i]));for(i=0,n=Object.getOwnPropertyNames(e);i<n.length;i++)Object.hasOwnProperty.call(s,t=n[i])&&s[t]===e[t]||r(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}n.d(t,{Q:()=>o})},6861:(e,t,n)=>{"use strict";n.d(t,{a:()=>f});var r=n(31085),o=n(13660),s=n(56051),i=n(90275),a=n(26975),l=n(22962),c=n(93065),d=n(52022),m=n(23719),p=n(51896),u=n(84097),h=n(63297);let f={type:"code",component:function(){let e=(0,m.m)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,h.z)()}]},validate:{employees:{[p.N]:(0,u.h)("At least one employee is required"),name:(0,u.h)("Name is required")}}}),t=e.getValues().employees.map((t,n)=>(0,r.jsxs)(s.Y,{mt:"xs",children:[(0,r.jsx)(i.k,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${n}.name`)},e.key(`employees.${n}.name`)),(0,r.jsx)(a.d,{label:"Active",...e.getInputProps(`employees.${n}.active`,{type:"checkbox"})},e.key(`employees.${n}.active`)),(0,r.jsx)(l.M,{color:"red",onClick:()=>e.removeListItem("employees",n),children:(0,r.jsx)(o.A,{size:16})})]},t.key));return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[t.length>0?(0,r.jsxs)(s.Y,{mb:"xs",children:[(0,r.jsx)(c.E,{fw:500,size:"sm",style:{flex:1},children:"Name"}),(0,r.jsx)(c.E,{fw:500,size:"sm",pr:90,children:"Status"})]}):(0,r.jsx)(c.E,{c:"dimmed",ta:"center",children:"No one here..."}),t,e.errors.employees&&(0,r.jsx)(c.E,{c:"red",size:"sm",mt:"sm",children:e.errors.employees}),(0,r.jsxs)(s.Y,{justify:"space-between",mt:"md",children:[(0,r.jsx)(d.$,{variant:"default",onClick:()=>{e.insertListItem("employees",{name:"",active:!1,key:(0,h.z)()}),e.clearFieldError("employees")},children:"Add employee"}),(0,r.jsx)(d.$,{type:"submit",children:"Submit"})]})]})},code:`
import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
    validate: {
      employees: {
        [formRootRule]: isNotEmpty('At least one employee is required'),
        name: isNotEmpty('Name is required'),
      },
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
    <form onSubmit={form.onSubmit(() => {})}>
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

      {form.errors.employees && (
        <Text c="red" size="sm" mt="sm">
          {form.errors.employees}
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <Button
          variant="default"
          onClick={() => {
            form.insertListItem('employees', { name: '', active: false, key: randomId() });
            form.clearFieldError('employees');
          }}
        >
          Add employee
        </Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,defaultExpanded:!1,maxWidth:440}},73943:(e,t,n)=>{"use strict";n.d(t,{E:()=>d});var r=n(31085),o=n(90275),s=n(93065),i=n(52022),a=n(23719),l=n(51896),c=n(84097);let d={type:"code",component:function(){let e=(0,a.m)({mode:"uncontrolled",initialValues:{user:{firstName:"",lastName:""}},validate:{user:{[l.N]:e=>e.firstName.trim().length>0&&e.firstName===e.lastName?"First name and last name cannot be the same":null,firstName:(0,c.h)("First name is required"),lastName:(0,c.h)("Last name is required")}}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,r.jsx)(o.k,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")}),(0,r.jsx)(o.k,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")}),e.errors.user&&(0,r.jsx)(s.E,{c:"red",mt:5,fz:"sm",children:e.errors.user}),(0,r.jsx)(i.$,{type:"submit",mt:"lg",children:"Submit"})]})},code:`
import { Button, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      user: {
        firstName: '',
        lastName: '',
      },
    },

    validate: {
      user: {
        [formRootRule]: (value) =>
          value.firstName.trim().length > 0 && value.firstName === value.lastName
            ? 'First name and last name cannot be the same'
            : null,
        firstName: isNotEmpty('First name is required'),
        lastName: isNotEmpty('Last name is required'),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
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
      {form.errors.user && (
        <Text c="red" mt={5} fz="sm">
          {form.errors.user}
        </Text>
      )}
      <Button type="submit" mt="lg">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0}},40691:(e,t,n)=>{"use strict";n.d(t,{b:()=>d});var r=n(31085),o=n(17592),s=n(56051),i=n(52022),a=n(14041),l=n(89571);let c={multiple:!0,accept:"*"},d={type:"code",component:function(){let e=function(e={}){let t={...c,...e},[n,r]=(0,a.useState)(function(e){if(!e)return null;if(e instanceof FileList)return e;let t=new DataTransfer;for(let n of e)t.items.add(n);return t.files}(t.initialFiles)),o=(0,a.useRef)(null),s=(0,a.useCallback)(e=>{let n=e.target;n?.files&&(r(n.files),t.onChange?.(n.files))},[t.onChange]),i=(0,a.useCallback)(()=>{o.current?.remove(),o.current=function(e){if("undefined"==typeof document)return null;let t=document.createElement("input");return t.type="file",e.accept&&(t.accept=e.accept),e.multiple&&(t.multiple=e.multiple),e.capture&&(t.capture=e.capture),e.directory&&(t.webkitdirectory=e.directory),t.style.display="none",t}(t),o.current&&(o.current.addEventListener("change",s,{once:!0}),document.body.appendChild(o.current))},[t,s]);(0,l.o)(()=>(i(),()=>o.current?.remove()),[]);let d=(0,a.useCallback)(()=>{r(null),t.onChange?.(null)},[t.onChange]);return{files:n,open:(0,a.useCallback)(()=>{t.resetOnOpen&&d(),i(),o.current?.click()},[t.resetOnOpen,d,i]),reset:d}}(),t=Array.from(e.files||[]).map(e=>(0,r.jsx)(o.B.Item,{children:e.name},e.name));return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{onClick:e.open,children:"Pick files"}),t.length>0&&(0,r.jsx)(i.$,{variant:"default",onClick:e.reset,children:"Reset"})]}),t.length>0&&(0,r.jsx)(o.B,{mt:"lg",children:t})]})},code:`
import { Button, Group, List } from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';

function Demo() {
  const fileDialog = useFileDialog();

  const pickedFiles = Array.from(fileDialog.files || []).map((file) => (
    <List.Item key={file.name}>{file.name}</List.Item>
  ));

  return (
    <div>
      <Group>
        <Button onClick={fileDialog.open}>Pick files</Button>
        {pickedFiles.length > 0 && (
          <Button variant="default" onClick={fileDialog.reset}>
            Reset
          </Button>
        )}
      </Group>
      {pickedFiles.length > 0 && <List mt="lg">{pickedFiles}</List>}
    </div>
  );
}
`}},17592:(e,t,n)=>{"use strict";n.d(t,{B:()=>v});var r=n(31085);n(14041);var o=n(33450),s=n(7098),i=n(29686),a=n(69564),l=n(34056),c=n(6754);let[d,m]=(0,n(59852).F)("List component was not found in tree");var p={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};let u=(0,c.P9)((e,t)=>{let{classNames:n,className:o,style:s,styles:a,vars:c,icon:d,children:p,mod:u,...h}=(0,i.Y)("ListItem",null,e),f=m(),v=d||f.icon,y={classNames:n,styles:a};return(0,r.jsx)(l.a,{...f.getStyles("item",{...y,className:o,style:s}),component:"li",mod:[{"with-icon":!!v,centered:f.center},u],ref:t,...h,children:(0,r.jsxs)("div",{...f.getStyles("itemWrapper",y),children:[v&&(0,r.jsx)("span",{...f.getStyles("itemIcon",y),children:v}),(0,r.jsx)("span",{...f.getStyles("itemLabel",y),children:p})]})})});u.classes=p,u.displayName="@mantine/core/ListItem";let h={type:"unordered"},f=(0,s.V)((e,{size:t,spacing:n})=>({root:{"--list-fz":(0,o.ny)(t),"--list-lh":(0,o.ks)(t),"--list-spacing":(0,o.GY)(n)}})),v=(0,c.P9)((e,t)=>{let n=(0,i.Y)("List",h,e),{classNames:o,className:s,style:c,styles:m,unstyled:u,vars:v,children:y,type:g,withPadding:x,icon:j,spacing:b,center:k,listStyleType:w,mod:N,attributes:M,...P}=n,T=(0,a.I)({name:"List",classes:p,props:n,className:s,style:c,classNames:o,styles:m,unstyled:u,attributes:M,vars:v,varsResolver:f});return(0,r.jsx)(d,{value:{center:k,icon:j,getStyles:T},children:(0,r.jsx)(l.a,{...T("root",{style:{listStyleType:w}}),component:"unordered"===g?"ul":"ol",mod:[{"with-padding":x},N],ref:t,...P,children:y})})});v.classes=p,v.displayName="@mantine/core/List",v.Item=u},84097:(e,t,n)=>{"use strict";function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}n.d(t,{h:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,23719,90636,46593,38792],()=>t(96037)),_N_E=e.O()}]);
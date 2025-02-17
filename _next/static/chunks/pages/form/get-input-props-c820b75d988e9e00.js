(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14901],{47831:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/get-input-props",function(){return t(72224)}])},72224:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var o=t(31085),r=t(71184),s=t(30364),i=t(72182),a=t(2654),c=t(71138),l=t(85954),d=t(38215);let u=(0,l.P)(d.XZ.formGetInputProps);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"getinputprops-handler",children:"getInputProps handler"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.getInputProps"})," returns an object with ",(0,o.jsx)(n.code,{children:"value"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", ",(0,o.jsx)(n.code,{children:"onFocus"}),", ",(0,o.jsx)(n.code,{children:"onBlur"}),", ",(0,o.jsx)(n.code,{children:"error"}),"\nand all props specified in ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function. Return value should be spread to the input component."]}),"\n",(0,o.jsxs)(n.p,{children:["You can pass the following options to ",(0,o.jsx)(n.code,{children:"form.getInputProps"})," as second argument:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"type"}),": default ",(0,o.jsx)(n.code,{children:"input"}),". Must be set to ",(0,o.jsx)(n.code,{children:"checkbox"})," if the input requires ",(0,o.jsx)(n.code,{children:"checked"})," prop instead of ",(0,o.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withError"}),": default ",(0,o.jsx)(n.code,{children:"type === 'input'"}),". Determines whether the returned object should contain an ",(0,o.jsx)(n.code,{children:"error"})," property with\n",(0,o.jsx)(n.code,{children:"form.errors[path]"})," value."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withFocus"}),": default ",(0,o.jsx)(n.code,{children:"true"}),". Determines whether the returned object should contain an ",(0,o.jsx)(n.code,{children:"onFocus"})," handler. If disabled, the touched\nstate will only change if value of the field has been changed."]}),"\n",(0,o.jsxs)(n.li,{children:["Any additional props that can be accessed with ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function. These props are not passed to the input."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Checkbox, TextInput } from '@mantine/core';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '', accepted: false },\n    validate: {\n      name: (value) => value.trim().length > 2,\n    },\n  });\n\n  return (\n    <>\n      <TextInput\n        key={form.key('name')}\n        {...form.getInputProps('name')}\n      />\n      <Checkbox\n        key={form.key('accepted')}\n        {...form.getInputProps('accepted', { type: 'checkbox' })}\n      />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enhancegetinputprops",children:"enhanceGetInputProps"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," is a function that can be used to add additional props to the object returned by ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),".\nYou can define it in ",(0,o.jsx)(n.code,{children:"useForm"})," hook options. Its argument is an object with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inputProps"})," – object returned by ",(0,o.jsx)(n.code,{children:"form.getInputProps"})," by default"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"field"})," – field path, first argument of ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,o.jsx)(n.code,{children:"name"}),", ",(0,o.jsx)(n.code,{children:"user.email"}),", ",(0,o.jsx)(n.code,{children:"users.0.name"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options"})," – second argument of ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,o.jsx)(n.code,{children:"{ type: 'checkbox' }"}),", can be used to pass additional\noptions to ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"form"})," – form instance"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to disable input based on field path:"]}),"\n",(0,o.jsx)(t,{data:s.p}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to add additional props to the input based on option passed to ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,o.jsx)(t,{data:i.F}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to add ",(0,o.jsx)(n.code,{children:"disabled"})," prop to all inputs if the form\nhas not been initialized yet:"]}),"\n",(0,o.jsx)(t,{data:a.l}),"\n",(0,o.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,o.jsxs)(n.p,{children:["When called ",(0,o.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,o.jsx)(n.code,{children:"initialValues"})," and ",(0,o.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,o.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,o.jsx)(t,{data:c.n}),"\n",(0,o.jsxs)(n.p,{children:["Example with ",(0,o.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"integrate-getinputprops-with-custom-inputs",children:"Integrate getInputProps with custom inputs"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.getInputProps"})," returns an object with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"value"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"defaultValue"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onChange"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onFocus"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onBlur"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"error"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To create a custom input that works with ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", make sure that your component\naccepts these props and passes them to the input component or uses them in any other way."]}),"\n",(0,o.jsx)(n.p,{children:"Example of creating a custom input component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface CustomInputProps {\n  value?: string;\n  defaultValue?: string;\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;\n  error?: string;\n}\n\nexport function CustomInput({\n  value,\n  defaultValue,\n  onChange,\n  onFocus,\n  onBlur,\n  error,\n}: CustomInputProps) {\n  return (\n    <div>\n      <input\n        value={value}\n        defaultValue={defaultValue}\n        onChange={onChange}\n        onFocus={onFocus}\n        onBlur={onBlur}\n      />\n      {error && <div>{error}</div>}\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then use it with ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\nimport { CustomInput } from './CustomInput';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  return (\n    <CustomInput\n      {...form.getInputProps('name')}\n      key={form.key('name')}\n    />\n  );\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(p,{...e})})}},30364:(e,n,t)=>{"use strict";t.d(n,{p:()=>c});var o=t(31085),r=t(14041),s=t(90275),i=t(1169),a=t(23719);let c={type:"code",component:function(){let e=(0,a.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return(0,o.jsxs)(o.Fragment,{children:[(0,r.createElement)(s.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,r.createElement)(i.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},72182:(e,n,t)=>{"use strict";t.d(n,{F:()=>c});var o=t(31085),r=t(14041),s=t(90275),i=t(1169),a=t(23719);let c={type:"code",component:function(){let e=(0,a.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return(0,o.jsxs)(o.Fragment,{children:[(0,r.createElement)(s.k,{...e.getInputProps("name",{fieldType:"name"}),key:e.key("name")}),(0,r.createElement)(i.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} key={form.key('name')} />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,39699,68831,23719,45040,90636,46593,38792],()=>n(47831)),_N_E=e.O()}]);
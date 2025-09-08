(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14901],{692:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var o=t(6029),r=t(16285),s=t(72305),a=t(37703),i=t(81247),l=t(64059),d=t(38547),c=t(5262);let u=(0,d.P)(c.XZ.formGetInputProps);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"getinputprops-handler",children:"getInputProps handler"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.getInputProps"})," returns an object with ",(0,o.jsx)(n.code,{children:"value"})," (",(0,o.jsx)(n.code,{children:"defaultValue"}),' for "uncontrolled" mode), ',(0,o.jsx)(n.code,{children:"onChange"}),", ",(0,o.jsx)(n.code,{children:"onFocus"}),", ",(0,o.jsx)(n.code,{children:"onBlur"}),", ",(0,o.jsx)(n.code,{children:"error"}),"\nand all props specified in ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function. Return value should be spread to the input component."]}),"\n",(0,o.jsxs)(n.p,{children:["You can pass the following options to ",(0,o.jsx)(n.code,{children:"form.getInputProps"})," as second argument:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"type"}),": default ",(0,o.jsx)(n.code,{children:"input"}),". Must be set to ",(0,o.jsx)(n.code,{children:"checkbox"})," if the input requires ",(0,o.jsx)(n.code,{children:"checked"})," prop instead of ",(0,o.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withError"}),": default ",(0,o.jsx)(n.code,{children:"type === 'input'"}),". Determines whether the returned object should contain an ",(0,o.jsx)(n.code,{children:"error"})," property with\n",(0,o.jsx)(n.code,{children:"form.errors[path]"})," value."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withFocus"}),": default ",(0,o.jsx)(n.code,{children:"true"}),". Determines whether the returned object should contain an ",(0,o.jsx)(n.code,{children:"onFocus"})," handler. If disabled, the touched\nstate will only change if value of the field has been changed."]}),"\n",(0,o.jsxs)(n.li,{children:["Any additional props that can be accessed with ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function. These props are not passed to the input."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Checkbox, TextInput } from '@mantine/core';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '', accepted: false },\n    validate: {\n      name: (value) => value.trim().length > 2,\n    },\n  });\n\n  return (\n    <>\n      <TextInput\n        key={form.key('name')}\n        {...form.getInputProps('name')}\n      />\n      <Checkbox\n        key={form.key('accepted')}\n        {...form.getInputProps('accepted', { type: 'checkbox' })}\n      />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enhancegetinputprops",children:"enhanceGetInputProps"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," is a function that can be used to add additional props to the object returned by ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),".\nYou can define it in ",(0,o.jsx)(n.code,{children:"useForm"})," hook options. Its argument is an object with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inputProps"})," – object returned by ",(0,o.jsx)(n.code,{children:"form.getInputProps"})," by default"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"field"})," – field path, first argument of ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,o.jsx)(n.code,{children:"name"}),", ",(0,o.jsx)(n.code,{children:"user.email"}),", ",(0,o.jsx)(n.code,{children:"users.0.name"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options"})," – second argument of ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,o.jsx)(n.code,{children:"{ type: 'checkbox' }"}),", can be used to pass additional\noptions to ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," function"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"form"})," – form instance"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to disable input based on field path:"]}),"\n",(0,o.jsx)(t,{data:s.p}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to add additional props to the input based on option passed to ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,o.jsx)(t,{data:a.F}),"\n",(0,o.jsxs)(n.p,{children:["Example of using ",(0,o.jsx)(n.code,{children:"enhanceGetInputProps"})," to add ",(0,o.jsx)(n.code,{children:"disabled"})," prop to all inputs if the form\nhas not been initialized yet:"]}),"\n",(0,o.jsx)(t,{data:i.l}),"\n",(0,o.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,o.jsxs)(n.p,{children:["When called ",(0,o.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,o.jsx)(n.code,{children:"initialValues"})," and ",(0,o.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,o.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,o.jsx)(t,{data:l.n}),"\n",(0,o.jsxs)(n.p,{children:["Example with ",(0,o.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"integrate-getinputprops-with-custom-inputs",children:"Integrate getInputProps with custom inputs"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"form.getInputProps"})," returns an object with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"value"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"defaultValue"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onChange"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onFocus"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"onBlur"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"error"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To create a custom input that works with ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),", make sure that your component\naccepts these props and passes them to the input component or uses them in any other way."]}),"\n",(0,o.jsx)(n.p,{children:"Example of creating a custom input component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface CustomInputProps {\n  value?: string;\n  defaultValue?: string;\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;\n  error?: string;\n}\n\nexport function CustomInput({\n  value,\n  defaultValue,\n  onChange,\n  onFocus,\n  onBlur,\n  error,\n}: CustomInputProps) {\n  return (\n    <div>\n      <input\n        value={value}\n        defaultValue={defaultValue}\n        onChange={onChange}\n        onFocus={onFocus}\n        onBlur={onBlur}\n      />\n      {error && <div>{error}</div>}\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then use it with ",(0,o.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\nimport { CustomInput } from './CustomInput';\n\nfunction Demo() {\n  const form = useForm({\n    mode: 'uncontrolled',\n    initialValues: { name: '' },\n  });\n\n  return (\n    <CustomInput\n      {...form.getInputProps('name')}\n      key={form.key('name')}\n    />\n  );\n}\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(p,{...e})})}},1798:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},37703:(e,n,t)=>{"use strict";t.d(n,{F:()=>l});var o=t(6029),r=t(55729),s=t(38774),a=t(70204),i=t(69329);let l={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return(0,o.jsxs)(o.Fragment,{children:[(0,r.createElement)(s.k,{...e.getInputProps("name",{fieldType:"name"}),key:e.key("name")}),(0,r.createElement)(a.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340}},41949:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},64371:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/get-input-props",function(){return t(692)}])},65433:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},72305:(e,n,t)=>{"use strict";t.d(n,{p:()=>l});var o=t(6029),r=t(55729),s=t(38774),a=t(70204),i=t(69329);let l={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return(0,o.jsxs)(o.Fragment,{children:[(0,r.createElement)(s.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,r.createElement)(a.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340}},84276:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});let o=(0,t(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[2027,38547,69329,30809,90636,46593,38792],()=>e(e.s=64371)),_N_E=e.O()}]);
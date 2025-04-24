(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37989],{33671:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/use-field",function(){return n(58259)}])},58259:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var l=n(31085),i=n(71184),a=n(90275),r=n(52022),o=n(83064);let d={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
`,centered:!0,maxWidth:340},s={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validateOnBlur:!0,validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsx)(a.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name"})},code:`
import { TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" />;
}
`,centered:!0,maxWidth:340};var u=n(24674),c=n(23932),m=n(25810);function h(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let p={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validateOnBlur:!0,validate:h});return(0,l.jsx)(a.k,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,l.jsx)(m.a,{size:18}):null})},code:`
import { Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: validateAsync,
  });

  return (
    <TextInput
      {...field.getInputProps()}
      label="Enter 'mantine'"
      placeholder="Enter 'mantine'"
      rightSection={field.isValidating ? <Loader size={18} /> : null}
    />
  );
}
`,centered:!0,maxWidth:340};var f=n(93065);let v={type:"code",component:function(){let e=(0,o.M)({initialValue:""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsxs)(f.E,{fz:"sm",children:["Dirty:"," ",(0,l.jsx)(f.E,{span:!0,inherit:!0,c:e.isDirty()?"red":"teal",children:e.isDirty()?"dirty":"not dirty"})]}),(0,l.jsxs)(f.E,{fz:"sm",children:["Touched:"," ",(0,l.jsx)(f.E,{span:!0,inherit:!0,c:e.isTouched()?"red":"teal",children:e.isTouched()?"touched":"not touched"})]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({ initialValue: '' });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />

      <Text fz="sm">
        Dirty:{' '}
        <Text span inherit c={field.isDirty() ? 'red' : 'teal'}>
          {field.isDirty() ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
      <Text fz="sm">
        Touched:{' '}
        <Text span inherit c={field.isTouched() ? 'red' : 'teal'}>
          {field.isTouched() ? 'touched' : 'not touched'}
        </Text>
      </Text>
    </>
  );
}
`,centered:!0,maxWidth:340},x={type:"code",component:function(){let e=(0,o.M)({initialValue:"",clearErrorOnChange:!1,validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    clearErrorOnChange: false,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
`,centered:!0,maxWidth:340};var g=n(14041);let y={type:"code",component:function(){let e=(0,o.M)({mode:"uncontrolled",initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,g.createElement)(a.k,{...e.getInputProps(),key:e.key,label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    mode: 'uncontrolled',
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        key={field.key}
        label="Name"
        placeholder="Enter your name"
        mb="md"
      />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
`,centered:!0,maxWidth:340};var b=n(85954),j=n(38215);let T=(0,b.P)(j.XZ.useField);function V(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-field"})," hook is a simpler alternative to ",(0,l.jsx)(t.a,{href:"/form/use-form",children:"use-form"}),", it can be used to\nmanage state of a single input without the need to create a form:"]}),"\n",(0,l.jsx)(n,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"use-field-api",children:"use-field API"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-field"})," hook accepts the following options object as a single argument:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"interface UseFieldInput<T> {\n  /** Field mode, controlled by default */\n  mode?: 'controlled' | 'uncontrolled';\n\n  /** Initial field value */\n  initialValue: T;\n\n  /** Initial touched value */\n  initialTouched?: boolean;\n\n  /** Initial field error message */\n  initialError?: React.ReactNode;\n\n  /** Called with updated value when the field value changes */\n  onValueChange?: (value: T) => void;\n\n  /** Determines whether the field should be validated when value changes, false by default */\n  validateOnChange?: boolean;\n\n  /** Determines whether the field should be validated when it loses focus, false by default */\n  validateOnBlur?: boolean;\n\n  /** Determines whether the field should clear error message when value changes, true by default */\n  clearErrorOnChange?: boolean;\n\n  /** A function to validate field value, can be sync or async */\n  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;\n\n  /** Field type, input by default */\n  type?: 'input' | 'checkbox';\n\n  /** A function to resolve validation error from the result returned from validate function, should return react node */\n  resolveValidationError?: (error: unknown) => React.ReactNode;\n}\n"})}),"\n",(0,l.jsx)(t.p,{children:"And returns the following object:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"export interface UseFieldReturnType<ValueType> {\n  /** Returns props to pass to the input element */\n  getInputProps: () => {\n    /* props for input component */\n  };\n\n  /** Returns current input value */\n  getValue: () => ValueType;\n\n  /** Sets input value to the given value */\n  setValue: (value: ValueType) => void;\n\n  /** Resets field value to initial state, sets touched state to false, sets error to null */\n  reset: () => void;\n\n  /** Validates current input value when called */\n  validate: () => Promise<React.ReactNode | void>;\n\n  /** Set to true when async validate function is called, stays true until the returned promise resolves */\n  isValidating: boolean;\n\n  /** Current error message */\n  error: React.ReactNode;\n\n  /** Sets error message to the given react node */\n  setError: (error: React.ReactNode) => void;\n\n  /** Returns true if the input has been focused at least once */\n  isTouched: () => boolean;\n\n  /** Returns true if input value is different from the initial value */\n  isDirty: () => boolean;\n\n  /** Resets touched state to false */\n  resetTouched: () => void;\n\n  /** key that should be added to the input when mode is uncontrolled */\n  key: number;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"validate-on-blur",children:"Validate on blur"}),"\n",(0,l.jsxs)(t.p,{children:["To validate the field on blur, set ",(0,l.jsx)(t.code,{children:"validateOnBlur"})," option to ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(n,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"validate-on-change",children:"Validate on change"}),"\n",(0,l.jsxs)(t.p,{children:["To validate the field on change, set ",(0,l.jsx)(t.code,{children:"validateOnChange"})," option to ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(n,{data:u.I}),"\n",(0,l.jsx)(t.h2,{id:"async-validation",children:"Async validation"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"validate"})," option accepts both async and sync functions, in both cases the function\nmust return an error message that will be displayed to the user or ",(0,l.jsx)(t.code,{children:"null"})," if the value\nis valid. To keep track of async validation state, use ",(0,l.jsx)(t.code,{children:"isValidating"})," property:"]}),"\n",(0,l.jsx)(n,{data:c.A}),"\n",(0,l.jsxs)(t.p,{children:["Async validation can be used with ",(0,l.jsx)(t.code,{children:"validateOnBlur"})," option, but not recommended with\n",(0,l.jsx)(t.code,{children:"validateOnChange"})," because it will trigger validation on every key press which may\nlead to race conditions:"]}),"\n",(0,l.jsx)(n,{data:p}),"\n",(0,l.jsx)(t.h2,{id:"touched-and-dirty",children:"Touched and dirty"}),"\n",(0,l.jsxs)(t.p,{children:["To get information about whether the field has been focused at least once, use ",(0,l.jsx)(t.code,{children:"isTouched"})," method\nand to check if the value has been changed from the initial value, use ",(0,l.jsx)(t.code,{children:"isDirty"})," method:"]}),"\n",(0,l.jsx)(n,{data:v}),"\n",(0,l.jsx)(t.h2,{id:"clear-error-on-change",children:"Clear error on change"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the error message is cleared when the value changes, to disable this behavior\nset ",(0,l.jsx)(t.code,{children:"clearErrorOnChange"})," option to ",(0,l.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(n,{data:x}),"\n",(0,l.jsx)(t.h2,{id:"uncontrolled-mode",children:"Uncontrolled mode"}),"\n",(0,l.jsxs)(t.p,{children:["Uncontrolled mode of ",(0,l.jsx)(t.code,{children:"use-field"})," hook works similar to uncontrolled mode of ",(0,l.jsx)(t.a,{href:"/form/uncontrolled",children:"use-form"}),".\nIn uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.\nIt is useful if you experience performance issues with controlled mode, but in most cases controlled\nmode is recommended as it always provides up to date field information as React state."]}),"\n",(0,l.jsx)(n,{data:y})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(T,{...e,children:(0,l.jsx)(V,{...e})})}},23932:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var l=n(31085),i=n(90275),a=n(25810),r=n(52022),o=n(83064);function d(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let s={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validate:d});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.k,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,l.jsx)(a.a,{size:18}):null,mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate async"})]})},code:`
import { Button, Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validate: validateAsync,
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        label="Enter 'mantine'"
        placeholder="Enter 'mantine'"
        rightSection={field.isValidating ? <Loader size={18} /> : null}
        mb="md"
      />
      <Button onClick={field.validate}>Validate async</Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},24674:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});var l=n(31085),i=n(90275),a=n(83064),r=n(28887);let o={type:"code",component:function(){let e=(0,a.M)({initialValue:"",validateOnChange:!0,validate:(0,r.x)("Invalid email")});return(0,l.jsx)(i.k,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
import { TextInput } from '@mantine/core';
import { useField, isEmail } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
`,centered:!0,maxWidth:340}},21775:(e,t,n)=>{"use strict";n.d(t,{K:()=>l});let l="__MANTINE_FORM_INDEX__"},12195:(e,t,n)=>{"use strict";function l(e){return t=>{if(t){if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t)}else e(t)}}n.d(t,{_:()=>l})},83064:(e,t,n)=>{"use strict";n.d(t,{M:()=>r});var l=n(14041),i=n(12195),a=n(5058);function r({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:r=null,initialTouched:o=!1,onValueChange:d,validateOnChange:s=!1,validateOnBlur:u=!1,validate:c,resolveValidationError:m,type:h="input"}){let[p,f]=(0,l.useState)(n),v=(0,l.useRef)(p),[x,g]=(0,l.useState)(0),[y,b]=(0,l.useState)(r||null),j=(0,l.useRef)(o||!1),[,T]=(0,l.useState)(j.current),[V,k]=(0,l.useState)(!1),E=(0,l.useMemo)(()=>m||(e=>e),[m]),I=(0,l.useCallback)((t,{updateState:n="controlled"===e}={})=>{j.current=t,n&&T(t)},[]),w=(0,l.useCallback)((n,{updateKey:l="uncontrolled"===e,updateState:i="controlled"===e}={})=>{v.current!==n&&(v.current=n,d?.(n),t&&null!==y&&b(null),i&&f(n),l&&g(e=>e+1),s&&R())},[y,t,d]),C=(0,l.useCallback)(()=>{w(n),b(null),I(!1)},[n]),P=(0,l.useCallback)(()=>v.current,[]),F=(0,l.useCallback)(()=>j.current,[]),N=(0,l.useCallback)(()=>v.current!==n,[n]),R=(0,l.useCallback)(async()=>{let e=c?.(v.current);if(!(e instanceof Promise))return b(e),e;k(!0);try{let t=await e;k(!1),b(t)}catch(t){k(!1);let e=E(t);return b(e),e}},[]);return{key:x,getValue:P,setValue:w,reset:C,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let l={onChange:(0,i._)(e=>w(e,{updateKey:!1}))};return t&&(l.error=y),"checkbox"===h?l["controlled"===e?"checked":"defaultChecked"]=v.current:l["controlled"===e?"value":"defaultValue"]=v.current,n&&(l.onFocus=()=>{I(!0)},l.onBlur=()=>{(0,a.P)("",!!u)&&R()}),l},isValidating:V,validate:R,error:y,setError:b,isTouched:F,isDirty:N,resetTouched:(0,l.useCallback)(()=>I(!1),[])}}},5058:(e,t,n)=>{"use strict";n.d(t,{P:()=>i});var l=n(21775);function i(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]+/g,`.${l.K}`)))}},28887:(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var l=n(27351);function i(e){return(0,l.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},27351:(e,t,n)=>{"use strict";function l(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{c:()=>l})}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(33671)),_N_E=e.O()}]);
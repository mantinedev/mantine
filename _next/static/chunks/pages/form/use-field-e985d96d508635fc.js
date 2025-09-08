(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37989],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},5430:(e,t,n)=>{"use strict";function l(e){return t=>{if(t)if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t);else e(t)}}n.d(t,{_:()=>l})},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7537:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var l=n(6029),a=n(38774),i=n(10109),r=n(61087),o=n(77493);function d(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let s={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validate:d});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.k,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,l.jsx)(i.a,{size:18}):null,mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340}},12527:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/use-field",function(){return n(89398)}])},24475:(e,t,n)=>{"use strict";n.d(t,{P:()=>a});var l=n(93898);function a(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]+/g,`.${l.K}`)))}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},35035:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});var l=n(6029),a=n(38774),i=n(77493),r=n(62114);let o={type:"code",component:function(){let e=(0,i.M)({initialValue:"",validateOnChange:!0,validate:(0,r.x)("Invalid email")});return(0,l.jsx)(a.k,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340}},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},62114:(e,t,n)=>{"use strict";n.d(t,{x:()=>a});var l=n(73186);function a(e){return(0,l.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73186:(e,t,n)=>{"use strict";function l(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{c:()=>l})},77493:(e,t,n)=>{"use strict";n.d(t,{M:()=>r});var l=n(55729),a=n(5430),i=n(24475);function r({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:r=null,initialTouched:o=!1,onValueChange:d,validateOnChange:s=!1,validateOnBlur:u=!1,validate:c,resolveValidationError:h,type:m="input"}){let[p,v]=(0,l.useState)(n),f=(0,l.useRef)(p),[g,y]=(0,l.useState)(0),[x,k]=(0,l.useState)(r||null),b=(0,l.useRef)(o||!1),[,j]=(0,l.useState)(b.current),[T,V]=(0,l.useState)(!1),M=(0,l.useMemo)(()=>h||(e=>e),[h]),w=(0,l.useCallback)((t,{updateState:n="controlled"===e}={})=>{b.current=t,n&&j(t)},[]),E=(0,l.useCallback)((n,{updateKey:l="uncontrolled"===e,updateState:a="controlled"===e}={})=>{f.current!==n&&(f.current=n,d?.(n),t&&null!==x&&k(null),a&&v(n),l&&y(e=>e+1),s&&F())},[x,t,d]),I=(0,l.useCallback)(()=>{E(n),k(null),w(!1)},[n]),A=(0,l.useCallback)(()=>f.current,[]),C=(0,l.useCallback)(()=>b.current,[]),P=(0,l.useCallback)(()=>f.current!==n,[n]),F=(0,l.useCallback)(async()=>{let e=c?.(f.current);if(!(e instanceof Promise))return k(e),e;V(!0);try{let t=await e;V(!1),k(t)}catch(t){V(!1);let e=M(t);return k(e),e}},[]);return{key:g,getValue:A,setValue:E,reset:I,getInputProps:({withError:t=!0,withFocus:n=!0}={})=>{let l={onChange:(0,a._)(e=>E(e,{updateKey:!1}))};return t&&(l.error=x),"checkbox"===m?l["controlled"===e?"checked":"defaultChecked"]=f.current:l["controlled"===e?"value":"defaultValue"]=f.current,n&&(l.onFocus=()=>{w(!0)},l.onBlur=()=>{(0,i.P)("",!!u)&&F()}),l},isValidating:T,validate:F,error:x,setError:k,isTouched:C,isDirty:P,resetTouched:(0,l.useCallback)(()=>w(!1),[])}}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},89398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>V});var l=n(6029),a=n(16285),i=n(38774),r=n(61087),o=n(77493);let d={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340},s={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validateOnBlur:!0,validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsx)(i.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name"})},code:`
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
`,centered:!0,maxWidth:340};var u=n(35035),c=n(7537),h=n(10109);function m(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let p={type:"code",component:function(){let e=(0,o.M)({initialValue:"",validateOnBlur:!0,validate:m});return(0,l.jsx)(i.k,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,l.jsx)(h.a,{size:18}):null})},code:`
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
`,centered:!0,maxWidth:340};var v=n(45208);let f={type:"code",component:function(){let e=(0,o.M)({initialValue:""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsxs)(v.E,{fz:"sm",children:["Dirty:"," ",(0,l.jsx)(v.E,{span:!0,inherit:!0,c:e.isDirty()?"red":"teal",children:e.isDirty()?"dirty":"not dirty"})]}),(0,l.jsxs)(v.E,{fz:"sm",children:["Touched:"," ",(0,l.jsx)(v.E,{span:!0,inherit:!0,c:e.isTouched()?"red":"teal",children:e.isTouched()?"touched":"not touched"})]})]})},code:`
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
`,centered:!0,maxWidth:340},g={type:"code",component:function(){let e=(0,o.M)({initialValue:"",clearErrorOnChange:!1,validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.k,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340};var y=n(55729);let x={type:"code",component:function(){let e=(0,o.M)({mode:"uncontrolled",initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,l.jsxs)(l.Fragment,{children:[(0,y.createElement)(i.k,{...e.getInputProps(),key:e.key,label:"Name",placeholder:"Enter your name",mb:"md"}),(0,l.jsx)(r.$,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340};var k=n(38547),b=n(5262);let j=(0,k.P)(b.XZ.useField);function T(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-field"})," hook is a simpler alternative to ",(0,l.jsx)(t.a,{href:"/form/use-form",children:"use-form"}),", it can be used to\nmanage state of a single input without the need to create a form:"]}),"\n",(0,l.jsx)(n,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"use-field-api",children:"use-field API"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-field"})," hook accepts the following options object as a single argument:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"interface UseFieldInput<T> {\n  /** Field mode, controlled by default */\n  mode?: 'controlled' | 'uncontrolled';\n\n  /** Initial field value */\n  initialValue: T;\n\n  /** Initial touched value */\n  initialTouched?: boolean;\n\n  /** Initial field error message */\n  initialError?: React.ReactNode;\n\n  /** Called with updated value when the field value changes */\n  onValueChange?: (value: T) => void;\n\n  /** Determines whether the field should be validated when value changes, false by default */\n  validateOnChange?: boolean;\n\n  /** Determines whether the field should be validated when it loses focus, false by default */\n  validateOnBlur?: boolean;\n\n  /** Determines whether the field should clear error message when value changes, true by default */\n  clearErrorOnChange?: boolean;\n\n  /** A function to validate field value, can be sync or async */\n  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;\n\n  /** Field type, input by default */\n  type?: 'input' | 'checkbox';\n\n  /** A function to resolve validation error from the result returned from validate function, should return react node */\n  resolveValidationError?: (error: unknown) => React.ReactNode;\n}\n"})}),"\n",(0,l.jsx)(t.p,{children:"And returns the following object:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"export interface UseFieldReturnType<ValueType> {\n  /** Returns props to pass to the input element */\n  getInputProps: () => {\n    /* props for input component */\n  };\n\n  /** Returns current input value */\n  getValue: () => ValueType;\n\n  /** Sets input value to the given value */\n  setValue: (value: ValueType) => void;\n\n  /** Resets field value to initial state, sets touched state to false, sets error to null */\n  reset: () => void;\n\n  /** Validates current input value when called */\n  validate: () => Promise<React.ReactNode | void>;\n\n  /** Set to true when async validate function is called, stays true until the returned promise resolves */\n  isValidating: boolean;\n\n  /** Current error message */\n  error: React.ReactNode;\n\n  /** Sets error message to the given react node */\n  setError: (error: React.ReactNode) => void;\n\n  /** Returns true if the input has been focused at least once */\n  isTouched: () => boolean;\n\n  /** Returns true if input value is different from the initial value */\n  isDirty: () => boolean;\n\n  /** Resets touched state to false */\n  resetTouched: () => void;\n\n  /** key that should be added to the input when mode is uncontrolled */\n  key: number;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"validate-on-blur",children:"Validate on blur"}),"\n",(0,l.jsxs)(t.p,{children:["To validate the field on blur, set ",(0,l.jsx)(t.code,{children:"validateOnBlur"})," option to ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(n,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"validate-on-change",children:"Validate on change"}),"\n",(0,l.jsxs)(t.p,{children:["To validate the field on change, set ",(0,l.jsx)(t.code,{children:"validateOnChange"})," option to ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(n,{data:u.I}),"\n",(0,l.jsx)(t.h2,{id:"async-validation",children:"Async validation"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"validate"})," option accepts both async and sync functions, in both cases the function\nmust return an error message that will be displayed to the user or ",(0,l.jsx)(t.code,{children:"null"})," if the value\nis valid. To keep track of async validation state, use ",(0,l.jsx)(t.code,{children:"isValidating"})," property:"]}),"\n",(0,l.jsx)(n,{data:c.A}),"\n",(0,l.jsxs)(t.p,{children:["Async validation can be used with ",(0,l.jsx)(t.code,{children:"validateOnBlur"})," option, but not recommended with\n",(0,l.jsx)(t.code,{children:"validateOnChange"})," because it will trigger validation on every key press which may\nlead to race conditions:"]}),"\n",(0,l.jsx)(n,{data:p}),"\n",(0,l.jsx)(t.h2,{id:"touched-and-dirty",children:"Touched and dirty"}),"\n",(0,l.jsxs)(t.p,{children:["To get information about whether the field has been focused at least once, use ",(0,l.jsx)(t.code,{children:"isTouched"})," method\nand to check if the value has been changed from the initial value, use ",(0,l.jsx)(t.code,{children:"isDirty"})," method:"]}),"\n",(0,l.jsx)(n,{data:f}),"\n",(0,l.jsx)(t.h2,{id:"clear-error-on-change",children:"Clear error on change"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the error message is cleared when the value changes, to disable this behavior\nset ",(0,l.jsx)(t.code,{children:"clearErrorOnChange"})," option to ",(0,l.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(n,{data:g}),"\n",(0,l.jsx)(t.h2,{id:"uncontrolled-mode",children:"Uncontrolled mode"}),"\n",(0,l.jsxs)(t.p,{children:["Uncontrolled mode of ",(0,l.jsx)(t.code,{children:"use-field"})," hook works similar to uncontrolled mode of ",(0,l.jsx)(t.a,{href:"/form/uncontrolled",children:"use-form"}),".\nIn uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.\nIt is useful if you experience performance issues with controlled mode, but in most cases controlled\nmode is recommended as it always provides up to date field information as React state."]}),"\n",(0,l.jsx)(n,{data:x})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(j,{...e,children:(0,l.jsx)(T,{...e})})}},93898:(e,t,n)=>{"use strict";n.d(t,{K:()=>l});let l="__MANTINE_FORM_INDEX__"}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=12527)),_N_E=e.O()}]);
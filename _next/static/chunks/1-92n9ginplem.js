(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let i={};for(var l in e)t(i,l,{get:e[l],enumerable:!0});return n||t(i,Symbol.toStringTag,{value:"Module"}),i}])},32447,546816,900479,e=>{"use strict";e.s(["getInputOnChange",0,function(e){return t=>{if(t)if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:n}=t;n instanceof HTMLInputElement?"checkbox"===n.type?e(n.checked):e(n.value):(n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement)&&e(n.value)}else e(t);else e(t)}}],32447);let t="__MANTINE_FORM_INDEX__";e.s(["FORM_INDEX",0,t],546816),e.s(["shouldValidateOnChange",0,function(e,n){return!!n&&("boolean"==typeof n?n:!!Array.isArray(n)&&n.includes(e.replace(/[.][0-9]+/g,`.${t}`)))}],900479)},382855,717177,e=>{"use strict";function t(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}e.s(["matches",0,t],717177),e.s(["isEmail",0,function(e){return t(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}],382855)},776939,e=>{"use strict";var t=e.i(648863),n=e.i(485108),i=e.i(841209),l=e.i(32447),a=e.i(900479),o=e.i(191788);function r({mode:e="controlled",clearErrorOnChange:t=!0,initialValue:n,initialError:i=null,initialTouched:d=!1,onValueChange:u,validateOnChange:s=!1,validateOnBlur:c=!1,validate:h,resolveValidationError:m,type:p="input"}){let[f,x]=(0,o.useState)(n),v=(0,o.useRef)(f),[y,g]=(0,o.useState)(0),[T,b]=(0,o.useState)(i||null),j=(0,o.useRef)(d||!1),[,I]=(0,o.useState)(j.current),[V,E]=(0,o.useState)(!1),C=(0,o.useMemo)(()=>m||(e=>e),[m]),w=(0,o.useCallback)((t,{updateState:n="controlled"===e}={})=>{j.current=t,n&&I(t)},[]),k=(0,o.useCallback)((n,{updateKey:i="uncontrolled"===e,updateState:l="controlled"===e}={})=>{v.current!==n&&(v.current=n,u?.(n),t&&null!==T&&b(null),l&&x(n),i&&g(e=>e+1),s&&O())},[T,t,u]),F=(0,o.useCallback)(()=>{k(n),b(null),w(!1)},[n]),D=(0,o.useCallback)(()=>v.current,[]),P=(0,o.useCallback)(()=>j.current,[]),B=(0,o.useCallback)(()=>v.current!==n,[n]),O=(0,o.useCallback)(async()=>{let e=h?.(v.current);if(!(e instanceof Promise))return b(e),e;E(!0);try{let t=await e;E(!1),b(t)}catch(t){E(!1);let e=C(t);return b(e),e}},[]);return{key:y,getValue:D,setValue:k,reset:F,getInputProps:({withError:t=!0,withFocus:n=!0,...i}={})=>{let o={onChange:(0,l.getInputOnChange)(e=>k(e,{updateKey:!1}))};return t&&(o.error=T),"checkbox"===p?o["controlled"===e?"checked":"defaultChecked"]=v.current:"radio"===p?(o["controlled"===e?"checked":"defaultChecked"]=v.current===i.value,o.value=i.value):o["controlled"===e?"value":"defaultValue"]=v.current,n&&(o.onFocus=()=>{w(!0)},o.onBlur=()=>{(0,a.shouldValidateOnChange)("",!!c)&&O()}),o},isValidating:V,validate:O,error:T,setError:b,isTouched:P,isDirty:B,resetTouched:(0,o.useCallback)(()=>w(!1),[])}}var d=e.i(391398);let u={type:"code",component:function(){let e=r({initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,d.jsx)(n.Button,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340},s={type:"code",component:function(){return(0,d.jsx)(i.TextInput,{...r({initialValue:"",validateOnBlur:!0,validate:e=>e.trim().length<2?"Value is too short":null}).getInputProps(),label:"Name",placeholder:"Enter your name"})},code:`
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
`,centered:!0,maxWidth:340};var c=e.i(382855);let h={type:"code",component:function(){return(0,d.jsx)(i.TextInput,{...r({initialValue:"",validateOnChange:!0,validate:(0,c.isEmail)("Invalid email")}).getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340};var m=e.i(935769);function p(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let f={type:"code",component:function(){let e=r({initialValue:"",validate:p});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,d.jsx)(m.Loader,{size:18}):null,mb:"md"}),(0,d.jsx)(n.Button,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340};function x(e){return new Promise(t=>{window.setTimeout(()=>{t("mantine"===e?null:'Value must be "mantine"')},800)})}let v={type:"code",component:function(){let e=r({initialValue:"",validateOnBlur:!0,validate:x});return(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,d.jsx)(m.Loader,{size:18}):null})},code:`
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
`,centered:!0,maxWidth:340};var y=e.i(883364);let g={type:"code",component:function(){let e=r({mode:"uncontrolled",initialValue:""}),[t,l]=(0,o.useState)({touched:!1,dirty:!1});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,d.jsxs)(y.Text,{fz:"sm",children:["Dirty:"," ",(0,d.jsx)(y.Text,{span:!0,inherit:!0,c:t.dirty?"red":"teal",children:t.dirty?"dirty":"not dirty"})]}),(0,d.jsxs)(y.Text,{fz:"sm",children:["Dirty:"," ",(0,d.jsx)(y.Text,{span:!0,inherit:!0,c:t.touched?"red":"teal",children:t.touched?"touched":"not touched"})]}),(0,d.jsx)(n.Button,{onClick:()=>{l({touched:e.isTouched(),dirty:e.isDirty()})},mt:"md",children:"Update Status"})]})},code:`
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({ mode: 'uncontrolled', initialValue: '' });
  const [fieldStatus, setFieldStatus] = useState({ touched: false, dirty: false });
  const updateStatus = () => {
    setFieldStatus({ touched: field.isTouched(), dirty: field.isDirty() });
  };

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />

      <Text fz="sm">
        Dirty:{' '}
        <Text span inherit c={fieldStatus.dirty ? 'red' : 'teal'}>
          {fieldStatus.dirty ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
      <Text fz="sm">
        Dirty:{' '}
        <Text span inherit c={fieldStatus.touched ? 'red' : 'teal'}>
          {fieldStatus.touched ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Button onClick={updateStatus} mt="md">
        Update Status
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340},T={type:"code",component:function(){let e=r({initialValue:""});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,d.jsxs)(y.Text,{fz:"sm",children:["Dirty:"," ",(0,d.jsx)(y.Text,{span:!0,inherit:!0,c:e.isDirty()?"red":"teal",children:e.isDirty()?"dirty":"not dirty"})]}),(0,d.jsxs)(y.Text,{fz:"sm",children:["Touched:"," ",(0,d.jsx)(y.Text,{span:!0,inherit:!0,c:e.isTouched()?"red":"teal",children:e.isTouched()?"touched":"not touched"})]})]})},code:`
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
`,centered:!0,maxWidth:340},b={type:"code",component:function(){let e=r({mode:"uncontrolled",initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,d.jsxs)(d.Fragment,{children:[(0,o.createElement)(i.TextInput,{...e.getInputProps(),key:e.key,label:"Name",placeholder:"Enter your name",mb:"md"}),(0,d.jsx)(n.Button,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340},j={type:"code",component:function(){let e=r({initialValue:"",clearErrorOnChange:!1,validate:e=>e.trim().length<2?"Value is too short":null});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.TextInput,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,d.jsx)(n.Button,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340};var I=(0,t.__exportAll)({asyncValidation:()=>f,asyncValidationOnBlur:()=>v,clearErrorOnChange:()=>j,statusControlled:()=>T,statusUncontrolled:()=>g,uncontrolled:()=>b,usage:()=>u,validateOnBlur:()=>s,validateOnChange:()=>h});e.s(["FieldDemos",0,I],776939)},939572,e=>{"use strict";var t=e.i(391398),n=e.i(38856),i=e.i(776939);e.i(603441);var l=e.i(62558);e.i(457450);var a=e.i(418026);let o=(0,l.Layout)(a.MDX_DATA.useField);function r(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=l;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"use-field"})," hook is a simpler alternative to ",(0,t.jsx)(l.a,{href:"/form/use-form",children:"use-form"}),". It can be used to\nmanage the state of a single input without the need to create a form:"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.usage}),"\n",(0,t.jsx)(l.h2,{id:"use-field-api",children:"use-field API"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"use-field"})," hook accepts the following options object as a single argument:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"interface UseFieldInput<T> {\n  /** Field mode, controlled by default */\n  mode?: 'controlled' | 'uncontrolled';\n\n  /** Initial field value */\n  initialValue: T;\n\n  /** Initial touched value */\n  initialTouched?: boolean;\n\n  /** Initial field error message */\n  initialError?: React.ReactNode;\n\n  /** Called with updated value when the field value changes */\n  onValueChange?: (value: T) => void;\n\n  /** Determines whether the field should be validated when value changes, false by default */\n  validateOnChange?: boolean;\n\n  /** Determines whether the field should be validated when it loses focus, false by default */\n  validateOnBlur?: boolean;\n\n  /** Determines whether the field should clear the error message when value changes, true by default */\n  clearErrorOnChange?: boolean;\n\n  /** A function to validate field value, can be sync or async */\n  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;\n\n  /** Field type, input by default */\n  type?: 'input' | 'checkbox';\n\n  /** A function to resolve the validation error from the result returned from the validate function, should return a react node */\n  resolveValidationError?: (error: unknown) => React.ReactNode;\n}\n"})}),"\n",(0,t.jsx)(l.p,{children:"And returns the following object:"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"export interface UseFieldReturnType<ValueType> {\n  /** Returns props to pass to the input element */\n  getInputProps: () => {\n    /* props for input component */\n  };\n\n  /** Returns current input value */\n  getValue: () => ValueType;\n\n  /** Sets the input value to the given value */\n  setValue: (value: ValueType) => void;\n\n  /** Resets the field value to initial state, sets touched state to false, sets error to null */\n  reset: () => void;\n\n  /** Validates the current input value when called */\n  validate: () => Promise<React.ReactNode | void>;\n\n  /** Set to true when the async validate function is called, stays true until the returned promise resolves */\n  isValidating: boolean;\n\n  /** Current error message */\n  error: React.ReactNode;\n\n  /** Sets the error message to the given react node */\n  setError: (error: React.ReactNode) => void;\n\n  /** Returns true if the input has been focused at least once */\n  isTouched: () => boolean;\n\n  /** Returns true if input value is different from the initial value */\n  isDirty: () => boolean;\n\n  /** Resets the touched state to false */\n  resetTouched: () => void;\n\n  /** key that should be added to the input when the mode is uncontrolled */\n  key: number;\n}\n"})}),"\n",(0,t.jsx)(l.h2,{id:"validate-on-blur",children:"Validate on blur"}),"\n",(0,t.jsxs)(l.p,{children:["To validate the field on blur, set the ",(0,t.jsx)(l.code,{children:"validateOnBlur"})," option to ",(0,t.jsx)(l.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.validateOnBlur}),"\n",(0,t.jsx)(l.h2,{id:"validate-on-change",children:"Validate on change"}),"\n",(0,t.jsxs)(l.p,{children:["To validate the field on change, set the ",(0,t.jsx)(l.code,{children:"validateOnChange"})," option to ",(0,t.jsx)(l.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.validateOnChange}),"\n",(0,t.jsx)(l.h2,{id:"async-validation",children:"Async validation"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"validate"})," option accepts both async and sync functions. In both cases, the function\nmust return an error message that will be displayed to the user or ",(0,t.jsx)(l.code,{children:"null"})," if the value\nis valid. To keep track of async validation state, use the ",(0,t.jsx)(l.code,{children:"isValidating"})," property:"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.asyncValidation}),"\n",(0,t.jsxs)(l.p,{children:["Async validation can be used with the ",(0,t.jsx)(l.code,{children:"validateOnBlur"})," option, but it's not recommended with\n",(0,t.jsx)(l.code,{children:"validateOnChange"})," because it will trigger validation on every key press, which may\nlead to race conditions:"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.asyncValidationOnBlur}),"\n",(0,t.jsx)(l.h2,{id:"touched-and-dirty",children:"Touched and dirty"}),"\n",(0,t.jsxs)(l.p,{children:["To get information about whether the field has been focused at least once, use the ",(0,t.jsx)(l.code,{children:"isTouched"})," method.\nTo check if the value has been changed from the initial value, use the ",(0,t.jsx)(l.code,{children:"isDirty"})," method:"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.statusControlled}),"\n",(0,t.jsx)(l.h2,{id:"clear-error-on-change",children:"Clear error on change"}),"\n",(0,t.jsxs)(l.p,{children:["By default, the error message is cleared when the value changes. To disable this behavior,\nset the ",(0,t.jsx)(l.code,{children:"clearErrorOnChange"})," option to ",(0,t.jsx)(l.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.clearErrorOnChange}),"\n",(0,t.jsx)(l.h2,{id:"uncontrolled-mode",children:"Uncontrolled mode"}),"\n",(0,t.jsxs)(l.p,{children:["The uncontrolled mode of the ",(0,t.jsx)(l.code,{children:"use-field"})," hook works similarly to the uncontrolled mode of ",(0,t.jsx)(l.a,{href:"/form/uncontrolled",children:"use-form"}),".\nIn uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.\nIt is useful if you experience performance issues with controlled mode, but in most cases controlled\nmode is recommended as it always provides up-to-date field information as React state."]}),"\n",(0,t.jsx)(a,{data:i.FieldDemos.uncontrolled})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(r,{...e})})}])},14462,(e,t,n)=>{let i="/form/use-field";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(939572)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
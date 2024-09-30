(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95984],{37474:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/use-field",function(){return t(62151)}])},62151:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var i=t(52322),l=t(45392),a=t(74770),o=t(17115),r=t(50580);let d={type:"code",component:function(){let e=(0,r.U)({initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.o,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,i.jsx)(o.z,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340},u={type:"code",component:function(){let e=(0,r.U)({initialValue:"",validateOnBlur:!0,validate:e=>e.trim().length<2?"Value is too short":null});return(0,i.jsx)(a.o,{...e.getInputProps(),label:"Name",placeholder:"Enter your name"})},code:`
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
`,centered:!0,maxWidth:340};var s=t(4425),c=t(55115),m=t(12491);function h(e){return new Promise(n=>{window.setTimeout(()=>{n("mantine"===e?null:'Value must be "mantine"')},800)})}let f={type:"code",component:function(){let e=(0,r.U)({initialValue:"",validateOnBlur:!0,validate:h});return(0,i.jsx)(a.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,i.jsx)(m.a,{size:18}):null})},code:`
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
`,centered:!0,maxWidth:340};var p=t(8582);let v={type:"code",component:function(){let e=(0,r.U)({initialValue:""});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.o,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,i.jsxs)(p.x,{fz:"sm",children:["Dirty:"," ",(0,i.jsx)(p.x,{span:!0,inherit:!0,c:e.isDirty()?"red":"teal",children:e.isDirty()?"dirty":"not dirty"})]}),(0,i.jsxs)(p.x,{fz:"sm",children:["Touched:"," ",(0,i.jsx)(p.x,{span:!0,inherit:!0,c:e.isTouched()?"red":"teal",children:e.isTouched()?"touched":"not touched"})]})]})},code:`
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
`,centered:!0,maxWidth:340},x={type:"code",component:function(){let e=(0,r.U)({initialValue:"",clearErrorOnChange:!1,validate:e=>e.trim().length<2?"Value is too short":null});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.o,{...e.getInputProps(),label:"Name",placeholder:"Enter your name",mb:"md"}),(0,i.jsx)(o.z,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340};var g=t(2784);let y={type:"code",component:function(){let e=(0,r.U)({mode:"uncontrolled",initialValue:"",validate:e=>e.trim().length<2?"Value is too short":null});return(0,i.jsxs)(i.Fragment,{children:[(0,g.createElement)(a.o,{...e.getInputProps(),key:e.key,label:"Name",placeholder:"Enter your name",mb:"md"}),(0,i.jsx)(o.z,{onClick:e.validate,children:"Validate"})]})},code:`
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
`,centered:!0,maxWidth:340};var b=t(25071),j=t(15019);let T=(0,b.A)(j.us.useField);function V(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-field"})," hook is a simpler alternative to ",(0,i.jsx)(n.a,{href:"/form/use-form",children:"use-form"}),", it can be used to\nmanage state of a single input without the need to create a form:"]}),"\n",(0,i.jsx)(t,{data:d}),"\n",(0,i.jsx)(n.h2,{id:"use-field-api",children:"use-field API"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-field"})," hook accepts the following options object as a single argument:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"interface UseFieldInput<T> {\n  /** Field mode, controlled by default */\n  mode?: 'controlled' | 'uncontrolled';\n\n  /** Initial field value */\n  initialValue: T;\n\n  /** Initial touched value */\n  initialTouched?: boolean;\n\n  /** Initial field error message */\n  initialError?: React.ReactNode;\n\n  /** Called with updated value when the field value changes */\n  onValueChange?: (value: T) => void;\n\n  /** Determines whether the field should be validated when value changes, false by default */\n  validateOnChange?: boolean;\n\n  /** Determines whether the field should be validated when it loses focus, false by default */\n  validateOnBlur?: boolean;\n\n  /** Determines whether the field should clear error message when value changes, true by default */\n  clearErrorOnChange?: boolean;\n\n  /** A function to validate field value, can be sync or async */\n  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;\n\n  /** Field type, input by default */\n  type?: 'input' | 'checkbox';\n\n  /** A function to resolve validation error from the result returned from validate function, should return react node */\n  resolveValidationError?: (error: unknown) => React.ReactNode;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"And returns the following object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export interface UseFieldReturnType<ValueType> {\n  /** Returns props to pass to the input element */\n  getInputProps: () => {\n    /* props for input component */\n  };\n\n  /** Returns current input value */\n  getValue: () => ValueType;\n\n  /** Sets input value to the given value */\n  setValue: (value: ValueType) => void;\n\n  /** Resets field value to initial state, sets touched state to false, sets error to null */\n  reset: () => void;\n\n  /** Validates current input value when called */\n  validate: () => Promise<React.ReactNode | void>;\n\n  /** Set to true when async validate function is called, stays true until the returned promise resolves */\n  isValidating: boolean;\n\n  /** Current error message */\n  error: React.ReactNode;\n\n  /** Sets error message to the given react node */\n  setError: (error: React.ReactNode) => void;\n\n  /** Returns true if the input has been focused at least once */\n  isTouched: () => boolean;\n\n  /** Returns true if input value is different from the initial value */\n  isDirty: () => boolean;\n\n  /** Resets touched state to false */\n  resetTouched: () => void;\n\n  /** key that should be added to the input when mode is uncontrolled */\n  key: number;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"validate-on-blur",children:"Validate on blur"}),"\n",(0,i.jsxs)(n.p,{children:["To validate the field on blur, set ",(0,i.jsx)(n.code,{children:"validateOnBlur"})," option to ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(t,{data:u}),"\n",(0,i.jsx)(n.h2,{id:"validate-on-change",children:"Validate on change"}),"\n",(0,i.jsxs)(n.p,{children:["To validate the field on change, set ",(0,i.jsx)(n.code,{children:"validateOnChange"})," option to ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(t,{data:s.Z}),"\n",(0,i.jsx)(n.h2,{id:"async-validation",children:"Async validation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"validate"})," option accepts both async and sync functions, in both cases the function\nmust return an error message that will be displayed to the user or ",(0,i.jsx)(n.code,{children:"null"})," if the value\nis valid. To keep track of async validation state, use ",(0,i.jsx)(n.code,{children:"isValidating"})," property:"]}),"\n",(0,i.jsx)(t,{data:c.X}),"\n",(0,i.jsxs)(n.p,{children:["Async validation can be used with ",(0,i.jsx)(n.code,{children:"validateOnBlur"})," option, but not recommended with\n",(0,i.jsx)(n.code,{children:"validateOnChange"})," because it will trigger validation on every key press which may\nlead to race conditions:"]}),"\n",(0,i.jsx)(t,{data:f}),"\n",(0,i.jsx)(n.h2,{id:"touched-and-dirty",children:"Touched and dirty"}),"\n",(0,i.jsxs)(n.p,{children:["To get information about whether the field has been focused at least once, use ",(0,i.jsx)(n.code,{children:"isTouched"})," method\nand to check if the value has been changed from the initial value, use ",(0,i.jsx)(n.code,{children:"isDirty"})," method:"]}),"\n",(0,i.jsx)(t,{data:v}),"\n",(0,i.jsx)(n.h2,{id:"clear-error-on-change",children:"Clear error on change"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the error message is cleared when the value changes, to disable this behavior\nset ",(0,i.jsx)(n.code,{children:"clearErrorOnChange"})," option to ",(0,i.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,i.jsx)(t,{data:x}),"\n",(0,i.jsx)(n.h2,{id:"uncontrolled-mode",children:"Uncontrolled mode"}),"\n",(0,i.jsxs)(n.p,{children:["Uncontrolled mode of ",(0,i.jsx)(n.code,{children:"use-field"})," hook works similar to uncontrolled mode of ",(0,i.jsx)(n.a,{href:"/form/uncontrolled",children:"use-form"}),".\nIn uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.\nIt is useful if you experience performance issues with controlled mode, but in most cases controlled\nmode is recommended as it always provides up to date field information as React state."]}),"\n",(0,i.jsx)(t,{data:y})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(T,{...e,children:(0,i.jsx)(V,{...e})})}},55115:function(e,n,t){"use strict";t.d(n,{X:function(){return u}});var i=t(52322),l=t(74770),a=t(12491),o=t(17115),r=t(50580);function d(e){return new Promise(n=>{window.setTimeout(()=>{n("mantine"===e?null:'Value must be "mantine"')},800)})}let u={type:"code",component:function(){let e=(0,r.U)({initialValue:"",validate:d});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.o,{...e.getInputProps(),label:"Enter 'mantine'",placeholder:"Enter 'mantine'",rightSection:e.isValidating?(0,i.jsx)(a.a,{size:18}):null,mb:"md"}),(0,i.jsx)(o.z,{onClick:e.validate,children:"Validate async"})]})},code:`
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
`,centered:!0,maxWidth:340}},4425:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(52322),l=t(74770),a=t(50580),o=t(51057);let r={type:"code",component:function(){let e=(0,a.U)({initialValue:"",validateOnChange:!0,validate:(0,o.J)("Invalid email")});return(0,i.jsx)(l.o,{...e.getInputProps(),label:"Email",placeholder:"Enter your email"})},code:`
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
`,centered:!0,maxWidth:340}},56624:function(e,n,t){"use strict";t.d(n,{n:function(){return i}});let i="__MANTINE_FORM_INDEX__"},5752:function(e,n,t){"use strict";function i(e){return n=>{if(n){if("function"==typeof n)e(n);else if("object"==typeof n&&"nativeEvent"in n){let{currentTarget:t}=n;t instanceof HTMLInputElement?"checkbox"===t.type?e(t.checked):e(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&e(t.value)}else e(n)}else e(n)}}t.d(n,{E:function(){return i}})},50580:function(e,n,t){"use strict";t.d(n,{U:function(){return o}});var i=t(2784),l=t(5752),a=t(56365);function o({mode:e="controlled",clearErrorOnChange:n=!0,initialValue:t,initialError:o=null,initialTouched:r=!1,onValueChange:d,validateOnChange:u=!1,validateOnBlur:s=!1,validate:c,resolveValidationError:m,type:h="input"}){let[f,p]=(0,i.useState)(t),v=(0,i.useRef)(f),[x,g]=(0,i.useState)(0),[y,b]=(0,i.useState)(o||null),j=(0,i.useRef)(r||!1),[,T]=(0,i.useState)(j.current),[V,w]=(0,i.useState)(!1),E=(0,i.useMemo)(()=>m||(e=>e),[m]),I=(0,i.useCallback)((n,{updateState:t="controlled"===e}={})=>{j.current=n,t&&T(n)},[]),k=(0,i.useCallback)((t,{updateKey:i="uncontrolled"===e,updateState:l="controlled"===e}={})=>{v.current!==t&&(v.current=t,d?.(t),n&&null!==y&&b(null),l&&p(t),i&&g(e=>e+1),u&&R())},[y,n]),C=(0,i.useCallback)(()=>{k(t),b(null),I(!1)},[t]),P=(0,i.useCallback)(()=>v.current,[]),F=(0,i.useCallback)(()=>j.current,[]),N=(0,i.useCallback)(()=>v.current!==t,[t]),R=(0,i.useCallback)(async()=>{let e=c?.(v.current);if(!(e instanceof Promise))return b(e),e;w(!0);try{let n=await e;w(!1),b(n)}catch(n){w(!1);let e=E(n);return b(e),e}},[]);return{key:x,getValue:P,setValue:k,reset:C,getInputProps:({withError:n=!0,withFocus:t=!0}={})=>{let i={onChange:(0,l.E)(e=>k(e,{updateKey:!1}))};return n&&(i.error=y),"checkbox"===h?i["controlled"===e?"checked":"defaultChecked"]=v.current:i["controlled"===e?"value":"defaultValue"]=v.current,t&&(i.onFocus=()=>{I(!0)},i.onBlur=()=>{(0,a.i)("",!!s)&&R()}),i},isValidating:V,validate:R,error:y,setError:b,isTouched:F,isDirty:N,resetTouched:(0,i.useCallback)(()=>I(!1),[])}}},56365:function(e,n,t){"use strict";t.d(n,{i:function(){return l}});var i=t(56624);function l(e,n){return!!n&&("boolean"==typeof n?n:!!Array.isArray(n)&&n.includes(e.replace(/[.][0-9]+/g,`.${i.n}`)))}},51057:function(e,n,t){"use strict";t.d(n,{J:function(){return l}});var i=t(1328);function l(e){return(0,i.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},1328:function(e,n,t){"use strict";function i(e,n){let t=n||!0;return n=>"string"!=typeof n?t:e.test(n)?null:t}t.d(n,{w:function(){return i}})}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=37474)}),_N_E=e.O()}]);
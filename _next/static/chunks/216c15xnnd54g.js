(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var l in e)t(n,l,{get:e[l],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},681210,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(648863),l=e.i(232471),i=e.i(883364),s=e.i(841209),r=e.i(191788);let d={type:"code",code:`
import { TextInput, Text, Box } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\\S+@\\S+$/.test(val),
    true
  );

  return (
    <Box maw={320} mx="auto" style={{ overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit c="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>

      <Text size="sm">
        <Text inherit c="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </Box>
  );
}
`,component:function(){let[{value:e,lastValidValue:a,valid:n},d]=function(e,t){let[a,n]=(0,r.useState)(""),[l,i]=(0,r.useState)(e("")?"":void 0),[s,d]=(0,r.useState)("boolean"==typeof t?t:e(""));return[{value:a,lastValidValue:l,valid:s},t=>{e(t)?(i(t),d(!0)):d(!1),n(t)}]}(e=>/^\S+@\S+$/.test(e),!0);return(0,t.jsxs)(l.Box,{maw:320,mx:"auto",style:{overflowWrap:"break-word"},children:[(0,t.jsx)(s.TextInput,{value:e,onChange:e=>d(e.currentTarget.value),withAsterisk:!0,error:!n,placeholder:"email@example.com",label:"Your email"}),(0,t.jsxs)(i.Text,{size:"sm",mt:"md",children:[(0,t.jsx)(i.Text,{inherit:!0,c:"dimmed",component:"span",children:"Current value:"})," ",e||"[empty string]"]}),(0,t.jsxs)(i.Text,{size:"sm",children:[(0,t.jsx)(i.Text,{inherit:!0,c:"dimmed",component:"span",children:"Last valid value:"})," ",a||"[empty string]"]})]})}};var o=(0,n.__exportAll)({usage:()=>d});e.i(603441);var u=e.i(62558);e.i(457450);var c=e.i(418026);let m=(0,u.Layout)(c.MDX_DATA.useValidatedState);function h(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:l}=n;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"use-validated-state"})," hook validates state with a given rule each time the state is set.\nIt returns an object with the current validation state, last valid value, and current value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useValidatedState } from '@mantine/hooks';\n\nconst [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (state) => state === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(l,{data:o.usage}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface UseValidatedStateValue<T> {\n  /** Current value */\n  value: T;\n\n  /** Last valid value */\n  lastValidValue: T | undefined;\n\n  /** True if the current value is valid; false otherwise */\n  valid: boolean;\n}\n\ntype UseValidatedStateReturnValue<T> = [\n  /** Current value */\n  UseValidatedStateValue<T>,\n  /** Handler to update the state, passes `value` and `payload` to `onChange` */\n  (value: T) => void,\n];\n\nfunction useValidatedState<T>(\n  initialValue: T,\n  validate: (value: T) => boolean,\n  initialValidationState?: boolean,\n): UseValidatedStateReturnValue<T>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"UseValidatedStateValue"})," and ",(0,t.jsx)(n.code,{children:"UseValidatedStateReturnValue"})," types are exported from ",(0,t.jsx)(n.code,{children:"@mantine/hooks"}),";"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { UseValidatedStateValue, UseValidatedStateReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(m,{...e,children:(0,t.jsx)(h,{...e})})}],681210)},994283,(e,t,a)=>{let n="/hooks/use-validated-state";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(681210)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29377],{82537:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(8609)}])},8609:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(31085),l=a(71184),i=a(34056),s=a(90275),r=a(93065),o=a(14041);let d={type:"code",code:`
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
`,component:function(){let[{value:e,lastValidValue:t,valid:a},l]=function(e,t,a){let[n,l]=(0,o.useState)(""),[i,s]=(0,o.useState)(t("")?"":void 0),[r,d]=(0,o.useState)("boolean"==typeof a?a:t(e));return[{value:n,lastValidValue:i,valid:r},e=>{t(e)?(s(e),d(!0)):d(!1),l(e)}]}("",e=>/^\S+@\S+$/.test(e),!0);return(0,n.jsxs)(i.a,{maw:320,mx:"auto",style:{overflowWrap:"break-word"},children:[(0,n.jsx)(s.k,{value:e,onChange:e=>l(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),(0,n.jsxs)(r.E,{size:"sm",mt:"md",children:[(0,n.jsx)(r.E,{inherit:!0,c:"dimmed",component:"span",children:"Current value:"})," ",e||"[empty string]"]}),(0,n.jsxs)(r.E,{size:"sm",children:[(0,n.jsx)(r.E,{inherit:!0,c:"dimmed",component:"span",children:"Last valid value:"})," ",t||"[empty string]"]})]})}};var u=a(85954),c=a(38215);let m=(0,u.P)(c.XZ.useValidatedState);function v(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useValidatedState } from '@mantine/hooks';\n\nconst [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (state) => state === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useValidatedState<T>(\n  initialValue: T,\n  validation: (value: T) => boolean,\n  initialValidationState?: boolean\n): [\n  {\n    value: T;\n    lastValidValue: T;\n    valid: boolean;\n  },\n  (val: T) => void,\n];\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(v,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(82537)),_N_E=e.O()}]);
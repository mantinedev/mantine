(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6272],{47820:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(83039)}])},83039:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(24246),l=a(71670),i=a(3916),r=a(30289),o=a(27378),s=a(56589),d=a(7033),Text=a(26569);let u=`
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
`,c={type:"code",code:u,component:function(){let[{value:e,lastValidValue:t,valid:a},n]=function(e,t,a){let[n,l]=(0,o.useState)(e),[i,r]=(0,o.useState)(t(e)?e:void 0),[s,d]=(0,o.useState)("boolean"==typeof a?a:t(e));return[{value:n,lastValidValue:i,valid:s},e=>{t(e)?(r(e),d(!0)):d(!1),l(e)}]}("",e=>/^\S+@\S+$/.test(e),!0);return o.createElement(s.x,{maw:320,mx:"auto",style:{overflowWrap:"break-word"}},o.createElement(d.o,{value:e,onChange:e=>n(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),o.createElement(Text.x,{size:"sm",mt:"md"},o.createElement(Text.x,{inherit:!0,c:"dimmed",component:"span"},"Current value:")," ",e||"[empty string]"),o.createElement(Text.x,{size:"sm"},o.createElement(Text.x,{inherit:!0,c:"dimmed",component:"span"},"Last valid value:")," ",t||"[empty string]"))}},m=(0,i.A)(r.us.useValidatedState);function v(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (value) => value === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useValidatedState<T>(\n  initialValue: T,\n  validation: (value: T) => boolean,\n  initialValidationState?: boolean\n): [\n  {\n    value: T;\n    lastValidValue: T;\n    valid: boolean;\n  },\n  (val: T) => void,\n];\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(v,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=47820)}),_N_E=e.O()}]);
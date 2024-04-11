(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6272],{91461:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(93539)}])},93539:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(52322),l=a(45392),i=a(2784),r=a(28559),o=a(74770),Text=a(8582);let s=`
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
`,d={type:"code",code:s,component:function(){let[{value:e,lastValidValue:t,valid:a},n]=function(e,t,a){let[n,l]=(0,i.useState)(e),[r,o]=(0,i.useState)(t(e)?e:void 0),[s,d]=(0,i.useState)("boolean"==typeof a?a:t(e));return[{value:n,lastValidValue:r,valid:s},e=>{t(e)?(o(e),d(!0)):d(!1),l(e)}]}("",e=>/^\S+@\S+$/.test(e),!0);return i.createElement(r.x,{maw:320,mx:"auto",style:{overflowWrap:"break-word"}},i.createElement(o.o,{value:e,onChange:e=>n(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),i.createElement(Text.x,{size:"sm",mt:"md"},i.createElement(Text.x,{inherit:!0,c:"dimmed",component:"span"},"Current value:")," ",e||"[empty string]"),i.createElement(Text.x,{size:"sm"},i.createElement(Text.x,{inherit:!0,c:"dimmed",component:"span"},"Last valid value:")," ",t||"[empty string]"))}};var u=a(79016),c=a(33638);let m=(0,u.A)(c.us.useValidatedState);function v(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useValidatedState } from '@mantine/hooks';\n\nconst [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (state) => state === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useValidatedState<T>(\n  initialValue: T,\n  validation: (value: T) => boolean,\n  initialValidationState?: boolean\n): [\n  {\n    value: T;\n    lastValidValue: T;\n    valid: boolean;\n  },\n  (val: T) => void,\n];\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...e,children:(0,n.jsx)(v,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=91461)}),_N_E=e.O()}]);
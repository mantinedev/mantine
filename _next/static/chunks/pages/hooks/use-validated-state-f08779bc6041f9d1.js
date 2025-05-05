(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29377],{82537:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(8609)}])},8609:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var l=a(31085),n=a(71184),s=a(34056),i=a(90275),d=a(93065),r=a(14041);let o={type:"code",code:`
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
`,component:function(){let[{value:e,lastValidValue:t,valid:a},n]=function(e,t,a){let[l,n]=(0,r.useState)(""),[s,i]=(0,r.useState)(t("")?"":void 0),[d,o]=(0,r.useState)("boolean"==typeof a?a:t(e));return[{value:l,lastValidValue:s,valid:d},e=>{t(e)?(i(e),o(!0)):o(!1),n(e)}]}("",e=>/^\S+@\S+$/.test(e),!0);return(0,l.jsxs)(s.a,{maw:320,mx:"auto",style:{overflowWrap:"break-word"},children:[(0,l.jsx)(i.k,{value:e,onChange:e=>n(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),(0,l.jsxs)(d.E,{size:"sm",mt:"md",children:[(0,l.jsx)(d.E,{inherit:!0,c:"dimmed",component:"span",children:"Current value:"})," ",e||"[empty string]"]}),(0,l.jsxs)(d.E,{size:"sm",children:[(0,l.jsx)(d.E,{inherit:!0,c:"dimmed",component:"span",children:"Last valid value:"})," ",t||"[empty string]"]})]})}};var v=a(18675),h=a(20017);let u=(0,v.P)(h.XZ.useValidatedState);function c(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useValidatedState } from '@mantine/hooks';\n\nconst [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (state) => state === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(a,{data:o}),"\n",(0,l.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"function useValidatedState<T>(\n  initialValue: T,\n  validation: (value: T) => boolean,\n  initialValidationState?: boolean\n): [\n  {\n    value: T;\n    lastValidValue: T;\n    valid: boolean;\n  },\n  (val: T) => void,\n];\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(u,{...e,children:(0,l.jsx)(c,{...e})})}},87186:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var l=(0,a(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(82537)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29377],{1798:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7968:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var l=a(6029),n=a(16285),s=a(76320),d=a(38774),i=a(45208),r=a(55729);let o={type:"code",code:`
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
`,component:function(){let[{value:e,lastValidValue:t,valid:a},n]=function(e,t,a){let[l,n]=(0,r.useState)(""),[s,d]=(0,r.useState)(t("")?e:void 0),[i,o]=(0,r.useState)("boolean"==typeof a?a:t(e));return[{value:l,lastValidValue:s,valid:i},e=>{t(e)?(d(e),o(!0)):o(!1),n(e)}]}("",e=>/^\S+@\S+$/.test(e),!0);return(0,l.jsxs)(s.a,{maw:320,mx:"auto",style:{overflowWrap:"break-word"},children:[(0,l.jsx)(d.k,{value:e,onChange:e=>n(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),(0,l.jsxs)(i.E,{size:"sm",mt:"md",children:[(0,l.jsx)(i.E,{inherit:!0,c:"dimmed",component:"span",children:"Current value:"})," ",e||"[empty string]"]}),(0,l.jsxs)(i.E,{size:"sm",children:[(0,l.jsx)(i.E,{inherit:!0,c:"dimmed",component:"span",children:"Last valid value:"})," ",t||"[empty string]"]})]})}};var u=a(38547),h=a(5262);let v=(0,u.P)(h.XZ.useValidatedState);function p(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useValidatedState } from '@mantine/hooks';\n\nconst [{ lastValidValue, value, valid }, setValue] =\n  useValidatedState('valid', (state) => state === 'valid');\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(a,{data:o}),"\n",(0,l.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"interface UseValidatedStateValue<T> {\n  /** Current value */\n  value: T;\n\n  /** Last valid value */\n  lastValidValue: T | undefined;\n\n  /** True if the current value is valid, false otherwise */\n  valid: boolean;\n}\n\ntype UseValidatedStateReturnValue<T> = [\n  /** Current value */\n  UseValidatedStateValue<T>,\n  /** Handler to update the state, passes `value` and `payload` to `onChange` */\n  (value: T) => void,\n];\n\nfunction useValidatedState<T>(\n  initialValue: T,\n  validate: (value: T) => boolean,\n  initialValidationState?: boolean,\n): UseValidatedStateReturnValue<T>\n"})}),"\n",(0,l.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"UseValidatedStateValue"})," and ",(0,l.jsx)(t.code,{children:"UseValidatedStateReturnValue"})," types are exported from ",(0,l.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import type { UseValidatedStateValue, UseValidatedStateReturnValue } from '@mantine/hooks';\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(v,{...e,children:(0,l.jsx)(p,{...e})})}},24583:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68425:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(7968)}])},84276:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=68425)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6272],{33507:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var n=(0,a(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},72542:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-validated-state",function(){return a(84432)}])},84432:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(85893),l=a(11151),i=a(19905),s=a(9904),r=a(67294),d=a(81110),o=a(50780),u=a(72039);let c=`
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
`,v={type:"code",code:c,component:function(){let[{value:e,lastValidValue:t,valid:a},n]=function(e,t,a){let[n,l]=(0,r.useState)(e),[i,s]=(0,r.useState)(t(e)?e:void 0),[d,o]=(0,r.useState)("boolean"==typeof a?a:t(e)),u=e=>{t(e)?(s(e),o(!0)):o(!1),l(e)};return[{value:n,lastValidValue:i,valid:d},u]}("",e=>/^\S+@\S+$/.test(e),!0);return r.createElement(d.x,{maw:320,mx:"auto",style:{overflowWrap:"break-word"}},r.createElement(o.o,{value:e,onChange:e=>n(e.currentTarget.value),withAsterisk:!0,error:!a,placeholder:"email@example.com",label:"Your email"}),r.createElement(u.x,{size:"sm",mt:"md"},r.createElement(u.x,{inherit:!0,c:"dimmed",component:"span"},"Current value:")," ",e||"[empty string]"),r.createElement(u.x,{size:"sm"},r.createElement(u.x,{inherit:!0,c:"dimmed",component:"span"},"Last valid value:")," ",t||"[empty string]"))}},h=(0,i.A)(s.us.useValidatedState);function p(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-validated-state"})," validates state with a given rule each time state is set.\nIt returns an object with current validation state, last valid value and current value:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const [{ lastValidValue, value, valid }, setValue] = useValidatedState(\n  'valid',\n  (value) => value === 'valid'\n);\n\nlastValidValue; // -> valid\nvalue; // -> valid\nvalid; // -> true\n\nsetValue('invalid');\n\nlastValidValue; // -> valid\nvalue; // -> invalid\nvalid; // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useValidatedState<T>(\n  initialValue: T,\n  validation: (value: T) => boolean,\n  initialValidationState?: boolean\n): [\n  {\n    value: T;\n    lastValidValue: T;\n    valid: boolean;\n  },\n  (val: T) => void\n];\n"})})]})}var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,Object.assign({},e,{children:(0,n.jsx)(p,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=72542)}),_N_E=e.O()}]);
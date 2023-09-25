(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4257],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46305:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-state",function(){return n(1268)}])},1268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(85893),o=n(11151),u=n(19905),r=n(9904),s=n(67294);function c(e,t,n={leading:!1}){let[a,o]=(0,s.useState)(e),u=(0,s.useRef)(null),r=(0,s.useRef)(!0),c=()=>window.clearTimeout(u.current);(0,s.useEffect)(()=>c,[]);let l=(0,s.useCallback)(e=>{c(),r.current&&n.leading?o(e):u.current=window.setTimeout(()=>{r.current=!0,o(e)},t),r.current=!1},[n.leading]);return[a,l]}var l=n(81110),d=n(50780),i=n(72039);let h=`
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`,v={type:"code",component:function(){let[e,t]=c("",200);return s.createElement(l.x,{maw:400,mx:"auto"},s.createElement(d.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>t(e.currentTarget.value)}),s.createElement(i.x,{mt:"sm"},s.createElement(i.x,{component:"span",c:"dimmed",size:"sm"},"Debounced value:")," ",e.trim()||"[empty string]"))},code:h},p=`
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`,f={type:"code",component:function(){let[e,t]=c("",200,{leading:!0});return s.createElement(l.x,{maw:400,mx:"auto"},s.createElement(d.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>t(e.currentTarget.value)}),s.createElement(i.x,{mt:"sm"},s.createElement(i.x,{component:"span",c:"dimmed",size:"sm"},"Debounced value:")," ",e.trim()||"[empty string]"))},code:p},m=(0,u.A)(r.us.useDebouncedState);function g(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-debounced-state"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,a.jsx)(t.a,{href:"/hooks/use-debounced-value/",children:"use-debounced-value"})," it\nis designed to work with uncontrolled components."]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"differences-from-use-debounce-value",children:"Differences from use-debounce-value"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You do not have direct access to the non-debounced value."}),"\n",(0,a.jsxs)(t.li,{children:["It is used for uncontrolled inputs (",(0,a.jsx)(t.code,{children:"defaultValue"})," prop instead of ",(0,a.jsx)(t.code,{children:"value"}),"), e.g. does not render with every state change like a character typed in an input."]}),"\n",(0,a.jsxs)(t.li,{children:["It does not work with custom state providers or props, and it uses ",(0,a.jsx)(t.code,{children:"useState"})," internally."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,a.jsxs)(t.p,{children:["You can immediately update value with first call with ",(0,a.jsx)(t.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function useDebouncedState<T = any>(\n  defaultValue: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, (newValue: T) => void];\n"})})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,Object.assign({},e,{children:(0,a.jsx)(g,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=46305)}),_N_E=e.O()}]);
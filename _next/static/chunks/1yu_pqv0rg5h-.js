(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var a in e)t(o,a,{get:e[a],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},343723,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(648863),a=e.i(232471),u=e.i(883364),s=e.i(841209),r=e.i(191788);function i(e,t,n={leading:!1}){let[o,a]=(0,r.useState)(e),u=(0,r.useRef)(null),s=(0,r.useRef)(!0),l=()=>window.clearTimeout(u.current);return(0,r.useEffect)(()=>l,[]),[o,(0,r.useCallback)(e=>{l(),s.current&&n.leading?a(e):u.current=window.setTimeout(()=>{s.current=!0,a(e)},t),s.current=!1},[n.leading,t])]}let l={type:"code",component:function(){let[e,n]=i("",200);return(0,t.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,t.jsx)(s.TextInput,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,t.jsxs)(u.Text,{mt:"sm",children:[(0,t.jsx)(u.Text,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`},c={type:"code",component:function(){let[e,n]=i("",200,{leading:!0});return(0,t.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,t.jsx)(s.TextInput,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,t.jsxs)(u.Text,{mt:"sm",children:[(0,t.jsx)(u.Text,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`};var d=(0,o.__exportAll)({leading:()=>c,usage:()=>l});e.i(603441);var h=e.i(62558);e.i(457450);var p=e.i(418026);let m=(0,h.Layout)(p.MDX_DATA.useDebouncedState);function x(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=o;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"use-debounced-state"})," hook debounces value changes.\nThis can be useful when you want to perform a heavy operation based on React state,\nfor example, sending a search request. Unlike ",(0,t.jsx)(o.a,{href:"/hooks/use-debounced-value/",children:"use-debounced-value"}),", it\nis designed to work with uncontrolled components."]}),"\n",(0,t.jsx)(a,{data:d.usage}),"\n",(0,t.jsx)(o.h2,{id:"differences-from-use-debounce-value",children:"Differences from use-debounce-value"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"You do not have direct access to the non-debounced value."}),"\n",(0,t.jsxs)(o.li,{children:["It is used for uncontrolled inputs (",(0,t.jsx)(o.code,{children:"defaultValue"})," prop instead of ",(0,t.jsx)(o.code,{children:"value"}),"), for example, it does not render with every state change like a character typed in an input."]}),"\n",(0,t.jsxs)(o.li,{children:["It does not work with custom state providers or props, and it uses ",(0,t.jsx)(o.code,{children:"useState"})," internally."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,t.jsxs)(o.p,{children:["You can immediately update the value with the first call using ",(0,t.jsx)(o.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,t.jsx)(a,{data:d.leading}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface UseDebouncedStateOptions {\n  leading?: boolean;\n}\n\ntype UseDebouncedStateReturnValue<T> = [T, (newValue: SetStateAction<T>) => void];\n\nfunction useDebouncedState<T = any>(\n  defaultValue: T,\n  wait: number,\n  options?: UseDebouncedStateOptions,\n): UseDebouncedStateReturnValue<T>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"UseDebouncedStateOptions"})," and ",(0,t.jsx)(o.code,{children:"UseDebouncedStateReturnValue"})," types are exported from the ",(0,t.jsx)(o.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import type { UseDebouncedStateOptions, UseDebouncedStateReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(m,{...e,children:(0,t.jsx)(x,{...e})})}],343723)},58790,(e,t,n)=>{let o="/hooks/use-debounced-state";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(343723)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
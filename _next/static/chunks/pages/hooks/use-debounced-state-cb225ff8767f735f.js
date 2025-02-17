(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92472],{88845:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-state",function(){return t(20897)}])},20897:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var o=t(31085),u=t(71184),a=t(34056),r=t(90275),s=t(93065),l=t(14041);function c(e,n,t={leading:!1}){let[o,u]=(0,l.useState)(e),a=(0,l.useRef)(null),r=(0,l.useRef)(!0),s=()=>window.clearTimeout(a.current);return(0,l.useEffect)(()=>s,[]),[o,(0,l.useCallback)(e=>{s(),r.current&&t.leading?u(e):a.current=window.setTimeout(()=>{r.current=!0,u(e)},n),r.current=!1},[t.leading])]}let d={type:"code",component:function(){let[e,n]=c("",200);return(0,o.jsxs)(a.a,{maw:400,mx:"auto",children:[(0,o.jsx)(r.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(s.E,{mt:"sm",children:[(0,o.jsx)(s.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`},i={type:"code",component:function(){let[e,n]=c("",200,{leading:!0});return(0,o.jsxs)(a.a,{maw:400,mx:"auto",children:[(0,o.jsx)(r.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(s.E,{mt:"sm",children:[(0,o.jsx)(s.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`};var h=t(85954),f=t(38215);let p=(0,h.P)(f.XZ.useDebouncedState);function m(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,u.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-debounced-state"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,o.jsx)(n.a,{href:"/hooks/use-debounced-value/",children:"use-debounced-value"})," it\nis designed to work with uncontrolled components."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"differences-from-use-debounce-value",children:"Differences from use-debounce-value"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You do not have direct access to the non-debounced value."}),"\n",(0,o.jsxs)(n.li,{children:["It is used for uncontrolled inputs (",(0,o.jsx)(n.code,{children:"defaultValue"})," prop instead of ",(0,o.jsx)(n.code,{children:"value"}),"), e.g. does not render with every state change like a character typed in an input."]}),"\n",(0,o.jsxs)(n.li,{children:["It does not work with custom state providers or props, and it uses ",(0,o.jsx)(n.code,{children:"useState"})," internally."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,o.jsxs)(n.p,{children:["You can immediately update value with first call with ",(0,o.jsx)(n.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useDebouncedState<T = any>(\n  defaultValue: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, (newValue: T) => void];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(m,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(88845)),_N_E=e.O()}]);
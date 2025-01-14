(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74257],{29478:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-state",function(){return t(84532)}])},84532:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(52322),u=t(45392),a=t(28559),r=t(74770),s=t(8582),c=t(2784);function l(e,n,t={leading:!1}){let[o,u]=(0,c.useState)(e),a=(0,c.useRef)(null),r=(0,c.useRef)(!0),s=()=>window.clearTimeout(a.current);return(0,c.useEffect)(()=>s,[]),[o,(0,c.useCallback)(e=>{s(),r.current&&t.leading?u(e):a.current=window.setTimeout(()=>{r.current=!0,u(e)},n),r.current=!1},[t.leading])]}let d={type:"code",component:function(){let[e,n]=l("",200);return(0,o.jsxs)(a.x,{maw:400,mx:"auto",children:[(0,o.jsx)(r.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(s.x,{mt:"sm",children:[(0,o.jsx)(s.x,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`},i={type:"code",component:function(){let[e,n]=l("",200,{leading:!0});return(0,o.jsxs)(a.x,{maw:400,mx:"auto",children:[(0,o.jsx)(r.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",defaultValue:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(s.x,{mt:"sm",children:[(0,o.jsx)(s.x,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",e.trim()||"[empty string]"]})]})},code:`
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
`};var h=t(54078),f=t(15019);let p=(0,h.A)(f.us.useDebouncedState);function m(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,u.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-debounced-state"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,o.jsx)(n.a,{href:"/hooks/use-debounced-value/",children:"use-debounced-value"})," it\nis designed to work with uncontrolled components."]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"differences-from-use-debounce-value",children:"Differences from use-debounce-value"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You do not have direct access to the non-debounced value."}),"\n",(0,o.jsxs)(n.li,{children:["It is used for uncontrolled inputs (",(0,o.jsx)(n.code,{children:"defaultValue"})," prop instead of ",(0,o.jsx)(n.code,{children:"value"}),"), e.g. does not render with every state change like a character typed in an input."]}),"\n",(0,o.jsxs)(n.li,{children:["It does not work with custom state providers or props, and it uses ",(0,o.jsx)(n.code,{children:"useState"})," internally."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,o.jsxs)(n.p,{children:["You can immediately update value with first call with ",(0,o.jsx)(n.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useDebouncedState<T = any>(\n  defaultValue: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, (newValue: T) => void];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=29478)}),_N_E=e.O()}]);
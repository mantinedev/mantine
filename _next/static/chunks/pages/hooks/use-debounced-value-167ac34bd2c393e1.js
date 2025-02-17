(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88148],{8421:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-value",function(){return t(34952)}])},34952:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>j});var o=t(31085),u=t(71184),a=t(21307),c=t(14041),s=t(34056),r=t(90275),l=t(93065),d=t(86827);let i={type:"code",component:function(){let[e,n]=(0,c.useState)(""),[t]=(0,d.o)(e,200,{leading:!0});return(0,o.jsxs)(s.a,{maw:400,mx:"auto",children:[(0,o.jsx)(r.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(l.E,{mt:"sm",children:[(0,o.jsx)(l.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,o.jsxs)(l.E,{children:[(0,o.jsx)(l.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",t.trim()||"[empty string]"]})]})},code:`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`};var m=t(56051),h=t(52022);let p={type:"code",component:function(){let[e,n]=(0,c.useState)(""),[t,u]=(0,d.o)(e,1e3);return(0,o.jsxs)(s.a,{maw:400,mx:"auto",children:[(0,o.jsxs)(m.Y,{align:"flex-end",children:[(0,o.jsx)(r.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,style:{flex:1},onChange:e=>n(e.currentTarget.value)}),(0,o.jsx)(h.$,{onClick:u,children:"Cancel"})]}),(0,o.jsxs)(l.E,{mt:"sm",children:[(0,o.jsx)(l.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,o.jsxs)(l.E,{children:[(0,o.jsx)(l.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",t.trim()||"[empty string]"]})]})},code:`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} size="lg">
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`};var x=t(85954),f=t(38215);let v=(0,x.P)(f.XZ.useDebouncedValue);function b(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,u.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-debounced-value"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,o.jsx)(n.a,{href:"/hooks/use-debounced-state/",children:"use-debounced-state"})," it\nis designed to work with controlled components."]}),"\n",(0,o.jsx)(t,{data:a.V}),"\n",(0,o.jsx)(n.h2,{id:"differences-from-use-debounced-state",children:"Differences from use-debounced-state"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You have direct access to the non-debounced value."}),"\n",(0,o.jsxs)(n.li,{children:["It is used for controlled inputs (",(0,o.jsx)(n.code,{children:"value"})," prop instead of ",(0,o.jsx)(n.code,{children:"defaultValue"}),"), e.g. renders on every state change like a character typed in an input."]}),"\n",(0,o.jsxs)(n.li,{children:["It works with props or other state providers, and it does not force use of ",(0,o.jsx)(n.code,{children:"useState"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,o.jsxs)(n.p,{children:["You can immediately update value with first call with ",(0,o.jsx)(n.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(n.h2,{id:"cancel-update",children:"Cancel update"}),"\n",(0,o.jsxs)(n.p,{children:["Hook provides ",(0,o.jsx)(n.code,{children:"cancel"})," callback, you can use it to cancel update.\nUpdate cancels automatically on component unmount."]}),"\n",(0,o.jsx)(n.p,{children:"In this example, type in some text and click the cancel button\nwithin a second to cancel debounced value change:"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useDebouncedValue<T = any>(\n  value: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, () => void];\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(b,{...e})})}},21307:(e,n,t)=>{"use strict";t.d(n,{V:()=>l});var o=t(31085),u=t(14041),a=t(34056),c=t(90275),s=t(93065),r=t(86827);let l={type:"code",component:function(){let[e,n]=(0,u.useState)(""),[t]=(0,r.o)(e,200);return(0,o.jsxs)(a.a,{maw:400,mx:"auto",children:[(0,o.jsx)(c.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>n(e.currentTarget.value)}),(0,o.jsxs)(s.E,{mt:"sm",children:[(0,o.jsx)(s.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,o.jsxs)(s.E,{children:[(0,o.jsx)(s.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",t.trim()||"[empty string]"]})]})},code:`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`}},86827:(e,n,t)=>{"use strict";t.d(n,{o:()=>u});var o=t(14041);function u(e,n,t={leading:!1}){let[a,c]=(0,o.useState)(e),s=(0,o.useRef)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)(!1),d=()=>window.clearTimeout(r.current);return(0,o.useEffect)(()=>{s.current&&(!l.current&&t.leading?(l.current=!0,c(e)):(d(),r.current=window.setTimeout(()=>{l.current=!1,c(e)},n)))},[e,t.leading,n]),(0,o.useEffect)(()=>(s.current=!0,d),[]),[a,d]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(8421)),_N_E=e.O()}]);
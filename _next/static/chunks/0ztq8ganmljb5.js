(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let o={};for(var u in e)n(o,u,{get:e[u],enumerable:!0});return t||n(o,Symbol.toStringTag,{value:"Module"}),o}])},805126,e=>{"use strict";var n=e.i(191788);e.s(["useDebouncedValue",0,function(e,t,o={leading:!1}){let[u,c]=(0,n.useState)(e),s=(0,n.useRef)(!1),a=(0,n.useRef)(null),l=(0,n.useRef)(!1),r=(0,n.useRef)(e);r.current=e;let d=(0,n.useCallback)(()=>{window.clearTimeout(a.current),a.current=null,l.current=!1},[]),i=(0,n.useCallback)(()=>{a.current&&(d(),l.current=!1,c(r.current))},[]);return(0,n.useEffect)(()=>{s.current&&(!l.current&&o.leading?(l.current=!0,c(e),a.current=window.setTimeout(()=>{l.current=!1},t)):(d(),a.current=window.setTimeout(()=>{l.current=!1,c(e)},t)))},[e,o.leading,t]),(0,n.useEffect)(()=>(s.current=!0,d),[]),[u,d,{cancel:d,flush:i}]}])},621075,e=>{"use strict";var n=e.i(391398),t=e.i(38856),o=e.i(648863),u=e.i(191788),c=e.i(232471),s=e.i(883364),a=e.i(841209),l=e.i(805126);let r={type:"code",component:function(){let[e,t]=(0,u.useState)(""),[o]=(0,l.useDebouncedValue)(e,200);return(0,n.jsxs)(c.Box,{maw:400,mx:"auto",children:[(0,n.jsx)(a.TextInput,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),(0,n.jsxs)(s.Text,{mt:"sm",children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,n.jsxs)(s.Text,{children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",o.trim()||"[empty string]"]})]})},code:`
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
`};var d=e.i(485108),i=e.i(725695);let h={type:"code",component:function(){let[e,t]=(0,u.useState)(""),[o,r]=(0,l.useDebouncedValue)(e,1e3);return(0,n.jsxs)(c.Box,{maw:400,mx:"auto",children:[(0,n.jsxs)(i.Group,{align:"flex-end",children:[(0,n.jsx)(a.TextInput,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,style:{flex:1},onChange:e=>t(e.currentTarget.value)}),(0,n.jsx)(d.Button,{onClick:r,children:"Cancel"})]}),(0,n.jsxs)(s.Text,{mt:"sm",children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,n.jsxs)(s.Text,{children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",o.trim()||"[empty string]"]})]})},code:`
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
`},m={type:"code",component:function(){let[e,t]=(0,u.useState)(""),[o]=(0,l.useDebouncedValue)(e,200,{leading:!0});return(0,n.jsxs)(c.Box,{maw:400,mx:"auto",children:[(0,n.jsx)(a.TextInput,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),(0,n.jsxs)(s.Text,{mt:"sm",children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,n.jsxs)(s.Text,{children:[(0,n.jsx)(s.Text,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",o.trim()||"[empty string]"]})]})},code:`
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
`};var p=(0,o.__exportAll)({cancel:()=>h,leading:()=>m,usage:()=>r});e.i(603441);var x=e.i(62558);e.i(457450);var f=e.i(418026);let b=(0,x.Layout)(f.MDX_DATA.useDebouncedValue);function v(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:u}=o;return u||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"use-debounced-value"})," hook debounces value changes.\nThis can be useful when you want to perform a heavy operation based on React state,\nfor example, sending a search request. Unlike ",(0,n.jsx)(o.a,{href:"/hooks/use-debounced-state/",children:"use-debounced-state"}),", it\nis designed to work with controlled components."]}),"\n",(0,n.jsx)(u,{data:p.usage}),"\n",(0,n.jsx)(o.h2,{id:"differences-from-use-debounced-state",children:"Differences from use-debounced-state"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"You have direct access to the non-debounced value."}),"\n",(0,n.jsxs)(o.li,{children:["It is used for controlled inputs (",(0,n.jsx)(o.code,{children:"value"})," prop instead of ",(0,n.jsx)(o.code,{children:"defaultValue"}),"), for example, it renders on every state change like a character typed in an input."]}),"\n",(0,n.jsxs)(o.li,{children:["It works with props or other state providers, and it does not force use of ",(0,n.jsx)(o.code,{children:"useState"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,n.jsxs)(o.p,{children:["You can immediately update the value with the first call using ",(0,n.jsx)(o.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,n.jsx)(u,{data:p.leading}),"\n",(0,n.jsx)(o.h2,{id:"cancel-and-flush",children:"Cancel and flush"}),"\n",(0,n.jsxs)(o.p,{children:["The hook returns a third element with ",(0,n.jsx)(o.code,{children:"cancel"})," and ",(0,n.jsx)(o.code,{children:"flush"})," handlers.\n",(0,n.jsx)(o.code,{children:"cancel"})," discards the pending update, ",(0,n.jsx)(o.code,{children:"flush"})," applies it immediately.\nUpdates cancel automatically on component unmount."]}),"\n",(0,n.jsx)(o.p,{children:"In this example, type in some text and click the cancel button\nwithin a second to cancel debounced value change:"}),"\n",(0,n.jsx)(u,{data:p.cancel}),"\n",(0,n.jsxs)(o.p,{children:["The second element of the returned tuple is a shorthand for ",(0,n.jsx)(o.code,{children:"cancel"})," for backwards compatibility."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"const [debounced, cancel, { cancel, flush }] = useDebouncedValue(value, 200);\n"})}),"\n",(0,n.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface UseDebouncedValueOptions {\n  leading?: boolean;\n}\n\ninterface UseDebouncedValueHandlers {\n  cancel: () => void;\n  flush: () => void;\n}\n\ntype UseDebouncedValueReturnValue<T> = [T, () => void, UseDebouncedValueHandlers];\n\nfunction useDebouncedValue<T = any>(\n  value: T,\n  wait: number,\n  options?: UseDebouncedValueOptions,\n): UseDebouncedValueReturnValue<T>\n"})}),"\n",(0,n.jsx)(o.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"UseDebouncedValueOptions"})," and ",(0,n.jsx)(o.code,{children:"UseDebouncedValueReturnValue"})," types are exported from the ",(0,n.jsx)(o.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { UseDebouncedValueOptions, UseDebouncedValueReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(b,{...e,children:(0,n.jsx)(v,{...e})})}],621075)},181856,(e,n,t)=>{let o="/hooks/use-debounced-value";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(621075)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
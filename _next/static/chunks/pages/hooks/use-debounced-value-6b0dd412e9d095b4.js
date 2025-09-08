(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88148],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var a=n(6029),s=n(16285),o=n(55729),l=n(76320),u=n(38774),d=n(45208),c=n(83214);let r={type:"code",component:function(){let[e,t]=(0,o.useState)(""),[n]=(0,c.o)(e,200);return(0,a.jsxs)(l.a,{maw:400,mx:"auto",children:[(0,a.jsx)(u.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),(0,a.jsxs)(d.E,{mt:"sm",children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,a.jsxs)(d.E,{children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",n.trim()||"[empty string]"]})]})},code:`
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
`},i={type:"code",component:function(){let[e,t]=(0,o.useState)(""),[n]=(0,c.o)(e,200,{leading:!0});return(0,a.jsxs)(l.a,{maw:400,mx:"auto",children:[(0,a.jsx)(u.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),(0,a.jsxs)(d.E,{mt:"sm",children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,a.jsxs)(d.E,{children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",n.trim()||"[empty string]"]})]})},code:`
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
`};var h=n(57414),p=n(61087);let v={type:"code",component:function(){let[e,t]=(0,o.useState)(""),[n,s]=(0,c.o)(e,1e3);return(0,a.jsxs)(l.a,{maw:400,mx:"auto",children:[(0,a.jsxs)(h.Y,{align:"flex-end",children:[(0,a.jsx)(u.k,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,style:{flex:1},onChange:e=>t(e.currentTarget.value)}),(0,a.jsx)(p.$,{onClick:s,children:"Cancel"})]}),(0,a.jsxs)(d.E,{mt:"sm",children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Value:"})," ",e.trim()||"[empty string]"]}),(0,a.jsxs)(d.E,{children:[(0,a.jsx)(d.E,{component:"span",c:"dimmed",size:"sm",children:"Debounced value:"})," ",n.trim()||"[empty string]"]})]})},code:`
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
`};var m=n(38547),x=n(5262);let g=(0,m.P)(x.XZ.useDebouncedValue);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-debounced-value"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,a.jsx)(t.a,{href:"/hooks/use-debounced-state/",children:"use-debounced-state"})," it\nis designed to work with controlled components."]}),"\n",(0,a.jsx)(n,{data:r}),"\n",(0,a.jsx)(t.h2,{id:"differences-from-use-debounced-state",children:"Differences from use-debounced-state"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You have direct access to the non-debounced value."}),"\n",(0,a.jsxs)(t.li,{children:["It is used for controlled inputs (",(0,a.jsx)(t.code,{children:"value"})," prop instead of ",(0,a.jsx)(t.code,{children:"defaultValue"}),"), for example renders on every state change like a character typed in an input."]}),"\n",(0,a.jsxs)(t.li,{children:["It works with props or other state providers, and it does not force use of ",(0,a.jsx)(t.code,{children:"useState"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,a.jsxs)(t.p,{children:["You can immediately update value with first call with ",(0,a.jsx)(t.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,a.jsx)(n,{data:i}),"\n",(0,a.jsx)(t.h2,{id:"cancel-update",children:"Cancel update"}),"\n",(0,a.jsxs)(t.p,{children:["Hook provides ",(0,a.jsx)(t.code,{children:"cancel"})," callback, you can use it to cancel update.\nUpdate cancels automatically on component unmount."]}),"\n",(0,a.jsx)(t.p,{children:"In this example, type in some text and click the cancel button\nwithin a second to cancel debounced value change:"}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"interface UseDebouncedValueOptions {\n  leading?: boolean;\n}\n\ntype UseDebouncedValueReturnValue<T> = [T, () => void];\n\nfunction useDebouncedValue<T = any>(\n  value: T,\n  wait: number,\n  options?: UseDebouncedValueOptions,\n): UseDebouncedValueReturnValue<T>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"UseDebouncedValueOptions"})," and ",(0,a.jsx)(t.code,{children:"UseDebouncedValueReturnValue"})," types are exported from ",(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import type { UseDebouncedValueOptions, UseDebouncedValueReturnValue } from '@mantine/hooks';\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(g,{...e,children:(0,a.jsx)(f,{...e})})}},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},83214:(e,t,n)=>{"use strict";n.d(t,{o:()=>s});var a=n(55729);function s(e,t,n={leading:!1}){let[o,l]=(0,a.useState)(e),u=(0,a.useRef)(!1),d=(0,a.useRef)(null),c=(0,a.useRef)(!1),r=(0,a.useCallback)(()=>window.clearTimeout(d.current),[]);return(0,a.useEffect)(()=>{u.current&&(!c.current&&n.leading?(c.current=!0,l(e)):(r(),d.current=window.setTimeout(()=>{c.current=!1,l(e)},t)))},[e,n.leading,t]),(0,a.useEffect)(()=>(u.current=!0,r),[]),[o,r]}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},95069:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-value",function(){return n(36605)}])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=95069)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62610],{90460:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-value",function(){return t(30036)}])},30036:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var o=t(52322),u=t(45392),a=t(77506),c=t(2784),r=t(28559),l=t(74770),Text=t(8582),s=t(34089);let d=`
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
`,i={type:"code",component:function(){let[e,n]=(0,c.useState)(""),[t]=(0,s.c)(e,200,{leading:!0});return c.createElement(r.x,{maw:400,mx:"auto"},c.createElement(l.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>n(e.currentTarget.value)}),c.createElement(Text.x,{mt:"sm"},c.createElement(Text.x,{component:"span",c:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),c.createElement(Text.x,null,c.createElement(Text.x,{component:"span",c:"dimmed",size:"sm"},"Debounced value:")," ",t.trim()||"[empty string]"))},code:d};var m=t(93010),p=t(17115);let f=`
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
`,x={type:"code",component:function(){let[e,n]=(0,c.useState)(""),[t,o]=(0,s.c)(e,1e3);return c.createElement(r.x,{maw:400,mx:"auto"},c.createElement(m.Z,{align:"flex-end"},c.createElement(l.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,style:{flex:1},onChange:e=>n(e.currentTarget.value)}),c.createElement(p.z,{onClick:o},"Cancel")),c.createElement(Text.x,{mt:"sm"},c.createElement(Text.x,{component:"span",c:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),c.createElement(Text.x,null,c.createElement(Text.x,{component:"span",c:"dimmed",size:"sm"},"Debounced value:")," ",t.trim()||"[empty string]"))},code:f};var h=t(79016),v=t(33638);let b=(0,h.A)(v.us.useDebouncedValue);function g(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,u.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-debounced-value"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,o.jsx)(n.a,{href:"/hooks/use-debounced-state/",children:"use-debounced-state"})," it\nis designed to work with controlled components."]}),"\n",(0,o.jsx)(t,{data:a.w}),"\n",(0,o.jsx)(n.h2,{id:"differences-from-use-debounced-state",children:"Differences from use-debounced-state"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You have direct access to the non-debounced value."}),"\n",(0,o.jsxs)(n.li,{children:["It is used for controlled inputs (",(0,o.jsx)(n.code,{children:"value"})," prop instead of ",(0,o.jsx)(n.code,{children:"defaultValue"}),"), e.g. renders on every state change like a character typed in an input."]}),"\n",(0,o.jsxs)(n.li,{children:["It works with props or other state providers, and it does not force use of ",(0,o.jsx)(n.code,{children:"useState"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,o.jsxs)(n.p,{children:["You can immediately update value with first call with ",(0,o.jsx)(n.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,o.jsx)(t,{data:i}),"\n",(0,o.jsx)(n.h2,{id:"cancel-update",children:"Cancel update"}),"\n",(0,o.jsxs)(n.p,{children:["Hook provides ",(0,o.jsx)(n.code,{children:"cancel"})," callback, you can use it to cancel update.\nUpdate cancels automatically on component unmount."]}),"\n",(0,o.jsx)(n.p,{children:"In this example, type in some text and click the cancel button\nwithin a second to cancel debounced value change:"}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useDebouncedValue<T = any>(\n  value: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, () => void];\n"})})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(b,{...e,children:(0,o.jsx)(g,{...e})})}},77506:function(e,n,t){"use strict";t.d(n,{w:function(){return s}});var o=t(2784),u=t(28559),a=t(74770),c=t(8582),r=t(34089);let l=`
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
`,s={type:"code",component:function(){let[e,n]=(0,o.useState)(""),[t]=(0,r.c)(e,200);return o.createElement(u.x,{maw:400,mx:"auto"},o.createElement(a.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>n(e.currentTarget.value)}),o.createElement(c.x,{mt:"sm"},o.createElement(c.x,{component:"span",c:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),o.createElement(c.x,null,o.createElement(c.x,{component:"span",c:"dimmed",size:"sm"},"Debounced value:")," ",t.trim()||"[empty string]"))},code:l}},34089:function(e,n,t){"use strict";t.d(n,{c:function(){return u}});var o=t(2784);function u(e,n,t={leading:!1}){let[u,a]=(0,o.useState)(e),c=(0,o.useRef)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)(!1),s=()=>window.clearTimeout(r.current);return(0,o.useEffect)(()=>{c.current&&(!l.current&&t.leading?(l.current=!0,a(e)):(s(),r.current=window.setTimeout(()=>{l.current=!1,a(e)},n)))},[e,t.leading,n]),(0,o.useEffect)(()=>(c.current=!0,s),[]),[u,s]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=90460)}),_N_E=e.O()}]);
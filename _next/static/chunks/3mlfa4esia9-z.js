(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let a={};for(var l in e)n(a,l,{get:e[l],enumerable:!0});return t||n(a,Symbol.toStringTag,{value:"Module"}),a}])},290516,e=>{"use strict";var n=e.i(648863),t=e.i(191788),a=e.i(935769),l=e.i(883364),o=e.i(841209),s=e.i(391398),i=e.i(609205);let c={type:"code",component:function(){let[e,n]=(0,t.useState)(""),[c,r]=(0,t.useState)([]),[u,d]=(0,t.useState)(!1),h=(0,i.useDebouncedCallback)(async e=>{d(!0),r(await new Promise(n=>{setTimeout(()=>{n(""===e.trim()?[]:[,,,,,].fill(0).map((n,t)=>({id:t,title:`${e} ${t+1}`})))},1e3)})),d(!1)},500);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.TextInput,{value:e,onChange:e=>{n(e.currentTarget.value),h(e.currentTarget.value)},placeholder:"Search...",rightSection:u&&(0,s.jsx)(a.Loader,{size:20})}),c.map(e=>(0,s.jsx)(l.Text,{size:"sm",children:e.title},e.id))]})},code:`
import { useState } from 'react';
import { Loader, Text, TextInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function getSearchResults(query: string): Promise<{ id: number; title: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        query.trim() === ''
          ? []
          : Array(5)
              .fill(0)
              .map((_, index) => ({ id: index, title: \`\${query} \${index + 1}\` }))
      );
    }, 1000);
  });
}

function Demo() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    setSearchResults(await getSearchResults(query));
    setLoading(false);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        rightSection={loading && <Loader size={20} />}
      />
      {searchResults.map((result) => (
        <Text key={result.id} size="sm">
          {result.title}
        </Text>
      ))}
    </>
  );
}
`,centered:!0,maxWidth:340};var r=e.i(485108),u=e.i(725695),d=e.i(671640);function h({onChange:e}){let[n,a]=(0,t.useState)(""),l=(0,i.useDebouncedCallback)(n=>{e(n)},{delay:2e3,flushOnUnmount:!0});return(0,s.jsx)("input",{"aria-label":"Enter text",placeholder:"Enter text...",value:n,onChange:e=>{var n;a(n=e.target.value),l(n)},style:{padding:"8px",width:"100%"}})}let m={type:"code",component:function(){let[e,n]=(0,t.useState)(""),[a,o]=(0,t.useState)(!0);return(0,s.jsxs)(d.Stack,{children:[(0,s.jsxs)(l.Text,{fw:700,children:["Output value: ",e||"(none)"]}),(0,s.jsx)(u.Group,{children:(0,s.jsx)(r.Button,{onClick:()=>o(!a),children:a?"Hide component":"Show component"})}),a?(0,s.jsx)(h,{onChange:n}):null,(0,s.jsx)(l.Text,{size:"sm",c:"dimmed",children:"1. Type text and wait 2 seconds for the value to be transmitted. 2. Type text and immediately click the 'Hide component' button. The value will be transmitted immediately due to the flushOnUnmount option."})]})},code:`
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function InputWithDebounce({ onChange }) {
  const [innerValue, setInnerValue] = useState('');
  const debouncedCallback = useDebouncedCallback(
    (newInnerValue) => {
      onChange(newInnerValue);
    },
    { delay: 2000, flushOnUnmount: true }
  );

  const handleChange = (newInnerValue) => {
    setInnerValue(newInnerValue);
    debouncedCallback(newInnerValue);
  };

  return (
    <input
      aria-label="Enter text"
      placeholder="Enter text..."
      value={innerValue}
      onChange={(event) => handleChange(event.target.value)}
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

function Demo() {
  const [outerValue, setOuterValue] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <Stack>
      <Text fw={700}>Output value: {outerValue || '(none)'}</Text>

      <Group>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide component' : 'Show component'}
        </Button>
      </Group>

      {visible ? <InputWithDebounce onChange={setOuterValue} /> : null}

      <Text size="sm" c="dimmed">
        1. Type text and wait 2 seconds for the value to be transmitted.
        2. Type text and immediately click the 'Hide component' button.
           The value will be transmitted immediately due to the flushOnUnmount option.
      </Text>
    </Stack>
  );
}
`,centered:!0,maxWidth:500};var p=(0,n.__exportAll)({unmount:()=>m,usage:()=>c});e.s(["UseDebouncedCallbackDemos",0,p],290516)},27433,e=>{"use strict";var n=e.i(391398),t=e.i(38856),a=e.i(290516);e.i(603441);var l=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,l.Layout)(o.MDX_DATA.useDebouncedCallback);function i(e){let l={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:o}=l;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(l.p,{children:["The ",(0,n.jsx)(l.code,{children:"use-debounced-callback"})," hook creates a debounced version of the given function,\ndelaying its execution until a specified time has elapsed since the last invocation."]}),"\n",(0,n.jsx)(o,{data:a.UseDebouncedCallbackDemos.usage}),"\n",(0,n.jsx)(l.h2,{id:"flushonunmount-option",children:"flushOnUnmount option"}),"\n",(0,n.jsxs)(l.p,{children:["By default, the callback is not fired when the component unmounts.\nIf you want to execute the pending callback before the component unmounts,\nset ",(0,n.jsx)(l.code,{children:"flushOnUnmount: true"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(\n  () => console.log('Hello'),\n  { delay: 1000, flushOnUnmount: true },\n);\n"})}),"\n",(0,n.jsx)(l.h2,{id:"leading-option",children:"leading option"}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"leading: true"})," to execute the callback immediately on the first call,\nthen ignore subsequent calls within the delay window:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(\n  () => console.log('Hello'),\n  { delay: 1000, leading: true },\n);\n"})}),"\n",(0,n.jsx)(l.h2,{id:"maxwait-option",children:"maxWait option"}),"\n",(0,n.jsxs)(l.p,{children:["Use ",(0,n.jsx)(l.code,{children:"maxWait"})," to guarantee the callback is executed at least once within the given time\nwindow, even if calls keep arriving. This is useful for scenarios like search-as-you-type\nwhere you want intermediate results during continuous input:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(\n  (query: string) => fetchResults(query),\n  { delay: 300, maxWait: 1000 },\n);\n"})}),"\n",(0,n.jsx)(l.h2,{id:"flush-and-cancel",children:"Flush and cancel"}),"\n",(0,n.jsxs)(l.p,{children:["You can call the ",(0,n.jsx)(l.code,{children:"flush"})," method to execute the debounced callback immediately,\nor ",(0,n.jsx)(l.code,{children:"cancel"})," to discard the pending call:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(() => console.log('Hello'), 1000);\n\ncallback.flush(); // immediately executes the pending callback\ncallback.cancel(); // discards the pending callback\ncallback.isPending(); // returns true if a call is waiting to execute\n"})}),"\n",(0,n.jsx)(l.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"interface UseDebouncedCallbackOptions {\n  delay: number;\n  flushOnUnmount?: boolean;\n  leading?: boolean;\n  maxWait?: number;\n}\n\ntype UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((\n  ...args: Parameters<T>\n) => void) & { flush: () => void; cancel: () => void; isPending: () => boolean };\n\nfunction useDebouncedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delayOrOptions: number | UseDebouncedCallbackOptions\n): UseDebouncedCallbackReturnValue<T>\n"})}),"\n",(0,n.jsx)(l.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(l.p,{children:["The ",(0,n.jsx)(l.code,{children:"UseDebouncedCallbackOptions"})," and ",(0,n.jsx)(l.code,{children:"UseDebouncedCallbackReturnValue"})," types are exported from the ",(0,n.jsx)(l.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import type { UseDebouncedCallbackOptions, UseDebouncedCallbackReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})})}])},330503,(e,n,t)=>{let a="/hooks/use-debounced-callback";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(27433)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18767],{58661:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-set",function(){return n(68898)}])},68898:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(31085),o=n(71184),s=n(40499),a=n(85954),c=n(38215);let i=(0,a.P)(c.XZ.useSet);function d(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useSet"})," return ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"\nobject that can be used as React state: ",(0,r.jsx)(t.code,{children:"add"}),", ",(0,r.jsx)(t.code,{children:"clear"})," and ",(0,r.jsx)(t.code,{children:"delete"})," methods trigger state updates."]}),"\n",(0,r.jsx)(n,{data:s.v}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useSet<T>(values?: T[]): Set<T>;\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})})}},40499:(e,t,n)=>{"use strict";n.d(t,{v:()=>d});var r=n(31085),o=n(14041),s=n(37905),a=n(90275),c=n(75390),i=n(4755);let d={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e){let t=(0,o.useRef)(new Set(e)),n=(0,i.C)();return t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return n(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return n(),r},t.current}(["@mantine","@mantine-tests","@mantinex"]),d=n.has(e.trim().toLowerCase()),p=Array.from(n).map(e=>(0,r.jsx)(s.C,{children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.k,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:d&&"Scope already exists",onKeyDown:r=>{"Enter"!==r.nativeEvent.code||d||(n.add(e.trim().toLowerCase()),t(""))}}),(0,r.jsx)(c.B,{gap:5,align:"flex-start",mt:"md",children:p})]})},code:`
import { useState } from 'react';
import { Code, Stack, TextInput } from '@mantine/core';
import { useSet } from '@mantine/hooks';

function Demo() {
  const [input, setInput] = useState('');
  const scopes = useSet<string>(['@mantine', '@mantine-tests', '@mantinex']);

  const isDuplicate = scopes.has(input.trim().toLowerCase());

  const items = Array.from(scopes).map((scope) => <Code key={scope}>{scope}</Code>);

  return (
    <>
      <TextInput
        label="Add new scope"
        placeholder="Enter scope"
        description="Duplicate scopes are not allowed"
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
        error={isDuplicate && 'Scope already exists'}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Enter' && !isDuplicate) {
            scopes.add(input.trim().toLowerCase());
            setInput('');
          }
        }}
      />

      <Stack gap={5} align="flex-start" mt="md">
        {items}
      </Stack>
    </>
  );
}
`}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(58661)),_N_E=e.O()}]);
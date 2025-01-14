(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79235],{37564:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-set",function(){return n(25786)}])},25786:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),o=n(45392),s=n(72591),c=n(54078),a=n(15019);let i=(0,c.A)(a.us.useSet);function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useSet"})," return ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"\nobject that can be used as React state: ",(0,r.jsx)(t.code,{children:"add"}),", ",(0,r.jsx)(t.code,{children:"clear"})," and ",(0,r.jsx)(t.code,{children:"delete"})," methods trigger state updates."]}),"\n",(0,r.jsx)(n,{data:s.E}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useSet<T>(values?: T[]): Set<T>;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})})}},72591:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(52322),o=n(2784),s=n(45909),c=n(74770),a=n(65438),i=n(59114);let u={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e){let t=(0,o.useRef)(new Set(e)),n=(0,i.N)();return t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return n(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return n(),r},t.current}(["@mantine","@mantine-tests","@mantinex"]),u=n.has(e.trim().toLowerCase()),d=Array.from(n).map(e=>(0,r.jsx)(s.E,{children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.o,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:u&&"Scope already exists",onKeyDown:r=>{"Enter"!==r.nativeEvent.code||u||(n.add(e.trim().toLowerCase()),t(""))}}),(0,r.jsx)(a.K,{gap:5,align:"flex-start",mt:"md",children:d})]})},code:`
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
`}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=37564)}),_N_E=e.O()}]);
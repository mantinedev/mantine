(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},766185,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(301388),o=e.i(671640),s=e.i(841209),a=e.i(391398);function c(e){if(e instanceof Set)return e;let t=new Set,n=e.keys(),r=n.next();for(;!r.done;)t.add(r.value),r=n.next();return t}let i={type:"code",component:function(){let[e,t]=(0,n.useState)(""),i=function(e){let[t,r]=(0,n.useState)(()=>new Set(e)),o=(0,n.useRef)(t);return o.current=t,t.add=(...e)=>{let t=Set.prototype.add.apply(o.current,e);return r(new Set(o.current)),t},t.clear=(...e)=>{Set.prototype.clear.apply(o.current,e),r(new Set(o.current))},t.delete=(...e)=>{let t=Set.prototype.delete.apply(o.current,e);return r(new Set(o.current)),t},t.union=e=>{let t=new Set(o.current);return c(e).forEach(e=>t.add(e)),t},t.intersection=e=>{let t=new Set,n=c(e);return o.current.forEach(e=>{n.has(e)&&t.add(e)}),t},t.difference=e=>{let t=new Set,n=c(e);return o.current.forEach(e=>{n.has(e)||t.add(e)}),t},t.symmetricDifference=e=>{let t=new Set,n=c(e);return o.current.forEach(e=>{n.has(e)||t.add(e)}),n.forEach(e=>{o.current.has(e)||t.add(e)}),t},t}(["@mantine","@mantine-tests","@mantinex"]),d=i.has(e.trim().toLowerCase()),l=Array.from(i).map(e=>(0,a.jsx)(r.Code,{children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.TextInput,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:d&&"Scope already exists",onKeyDown:n=>{"Enter"!==n.nativeEvent.code||d||(i.add(e.trim().toLowerCase()),t(""))}}),(0,a.jsx)(o.Stack,{gap:5,align:"flex-start",mt:"md",children:l})]})},code:`
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
`};var d=(0,t.__exportAll)({usage:()=>i});e.s(["UseSetDemos",0,d],766185)},974459,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(766185);e.i(603441);var o=e.i(62558);e.i(457450);var s=e.i(418026);let a=(0,o.Layout)(s.MDX_DATA.useSet);function c(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:s}=o;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"useSet"})," hook returns a ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"\nobject that can be used as React state: the ",(0,t.jsx)(o.code,{children:"add"}),", ",(0,t.jsx)(o.code,{children:"clear"}),", and ",(0,t.jsx)(o.code,{children:"delete"})," methods trigger state updates."]}),"\n",(0,t.jsx)(s,{data:r.UseSetDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useSet<T>(values?: T[]): Set<T>;\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})})}])},218796,(e,t,n)=>{let r="/hooks/use-set";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(974459)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
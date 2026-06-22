(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var o in e)t(n,o,{get:e[o],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},766185,e=>{"use strict";var t=e.i(648863),r=e.i(191788),n=e.i(301388),o=e.i(671640),s=e.i(841209),a=e.i(391398),c=e.i(266181);function i(e){if(e instanceof Set)return e;let t=new Set,r=e.keys(),n=r.next();for(;!n.done;)t.add(n.value),n=r.next();return t}let u={type:"code",component:function(){var e;let t,u,[d,l]=(0,r.useState)(""),p=(e=["@mantine","@mantine-tests","@mantinex"],t=(0,r.useRef)(new Set(e)),u=(0,c.useForceUpdate)(),t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return u(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),u()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return u(),r},t.current.union=e=>{let r=new Set(t.current);return i(e).forEach(e=>r.add(e)),r},t.current.intersection=e=>{let r=new Set,n=i(e);return t.current.forEach(e=>{n.has(e)&&r.add(e)}),r},t.current.difference=e=>{let r=new Set,n=i(e);return t.current.forEach(e=>{n.has(e)||r.add(e)}),r},t.current.symmetricDifference=e=>{let r=new Set,n=i(e);return t.current.forEach(e=>{n.has(e)||r.add(e)}),n.forEach(e=>{t.current.has(e)||r.add(e)}),r},t.current),h=p.has(d.trim().toLowerCase()),m=Array.from(p).map(e=>(0,a.jsx)(n.Code,{children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.TextInput,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:d,onChange:e=>l(e.currentTarget.value),error:h&&"Scope already exists",onKeyDown:e=>{"Enter"!==e.nativeEvent.code||h||(p.add(d.trim().toLowerCase()),l(""))}}),(0,a.jsx)(o.Stack,{gap:5,align:"flex-start",mt:"md",children:m})]})},code:`
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
`};var d=(0,t.__exportAll)({usage:()=>u});e.s(["UseSetDemos",0,d],766185)},974459,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(766185);e.i(603441);var o=e.i(62558);e.i(457450);var s=e.i(418026);let a=(0,o.Layout)(s.MDX_DATA.useSet);function c(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.useMDXComponents)(),...e.components},{Demo:s}=o;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"useSet"})," hook returns a ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"\nobject that can be used as React state: the ",(0,t.jsx)(o.code,{children:"add"}),", ",(0,t.jsx)(o.code,{children:"clear"}),", and ",(0,t.jsx)(o.code,{children:"delete"})," methods trigger state updates."]}),"\n",(0,t.jsx)(s,{data:n.UseSetDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useSet<T>(values?: T[]): Set<T>;\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})})}])},218796,(e,t,r)=>{let n="/hooks/use-set";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(974459)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
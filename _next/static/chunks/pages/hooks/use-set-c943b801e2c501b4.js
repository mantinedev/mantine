(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18767],{1798:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36720:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(6029),a=r(16285),s=r(36855),d=r(38547),o=r(5262);let c=(0,d.P)(o.XZ.useSet);function l(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useSet"})," return ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"\nobject that can be used as React state: ",(0,n.jsx)(t.code,{children:"add"}),", ",(0,n.jsx)(t.code,{children:"clear"})," and ",(0,n.jsx)(t.code,{children:"delete"})," methods trigger state updates."]}),"\n",(0,n.jsx)(r,{data:s.v}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useSet<T>(values?: T[]): Set<T>;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(c,{...e,children:(0,n.jsx)(l,{...e})})}},36855:(e,t,r)=>{"use strict";r.d(t,{v:()=>i});var n=r(6029),a=r(55729),s=r(1608),d=r(38774),o=r(72139),c=r(91686);function l(e){if(e instanceof Set)return e;let t=new Set;for(let r of e)t.add(r);return t}let i={type:"code",component:function(){let[e,t]=(0,a.useState)(""),r=function(e){let t=(0,a.useRef)(new Set(e)),r=(0,c.C)();return t.current.add=(...e)=>{let n=Set.prototype.add.apply(t.current,e);return r(),n},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),r()},t.current.delete=(...e)=>{let n=Set.prototype.delete.apply(t.current,e);return r(),n},t.current.union=e=>{let r=new Set(t.current);return l(e).forEach(e=>r.add(e)),r},t.current.intersection=e=>{let r=new Set,n=l(e);return t.current.forEach(e=>{n.has(e)&&r.add(e)}),r},t.current.difference=e=>{let r=new Set,n=l(e);return t.current.forEach(e=>{n.has(e)||r.add(e)}),r},t.current.symmetricDifference=e=>{let r=new Set,n=l(e);return t.current.forEach(e=>{n.has(e)||r.add(e)}),n.forEach(e=>{t.current.has(e)||r.add(e)}),r},t.current}(["@mantine","@mantine-tests","@mantinex"]),i=r.has(e.trim().toLowerCase()),p=Array.from(r).map(e=>(0,n.jsx)(s.C,{children:e},e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.k,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:i&&"Scope already exists",onKeyDown:n=>{"Enter"!==n.nativeEvent.code||i||(r.add(e.trim().toLowerCase()),t(""))}}),(0,n.jsx)(o.B,{gap:5,align:"flex-start",mt:"md",children:p})]})},code:`
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
`}},38869:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-set",function(){return r(36720)}])},41949:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=38869)),_N_E=e.O()}]);
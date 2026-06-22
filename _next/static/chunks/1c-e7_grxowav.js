(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var o in e)n(r,o,{get:e[o],enumerable:!0});return t||n(r,Symbol.toStringTag,{value:"Module"}),r}])},202791,e=>{"use strict";var n=e.i(391398),t=e.i(38856),r=e.i(648863),o=e.i(191788),s=e.i(232471),i=e.i(470743),c=e.i(883364);let l={type:"code",code:`
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? 'var(--mantine-color-teal-7)'
              : 'var(--mantine-color-red-7)',
            minWidth: '50%',
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`,component:function(){let e=(0,o.useRef)(null),{ref:t,entry:r}=function(e){let[n,t]=(0,o.useState)(null),r=(0,o.useRef)(null);return{ref:(0,o.useCallback)(n=>{(r.current&&(r.current.disconnect(),r.current=null),null===n)?t(null):(r.current=new IntersectionObserver(([e])=>{t(e)},e),r.current.observe(n))},[e?.rootMargin,e?.root,e?.threshold]),entry:n}}({root:e.current,threshold:1});return(0,n.jsx)(i.Paper,{ref:e,h:300,style:{overflowY:"scroll"},children:(0,n.jsx)(s.Box,{pt:260,pb:280,children:(0,n.jsx)(i.Paper,{ref:t,p:"xl",style:{backgroundColor:r?.isIntersecting?"var(--mantine-color-teal-7)":"var(--mantine-color-red-7)",minWidth:"50%"},children:(0,n.jsx)(c.Text,{c:"#fff",fw:700,children:r?.isIntersecting?"Fully visible":"Obscured"})})})})}};var a=(0,r.__exportAll)({usage:()=>l});e.i(603441);var u=e.i(62558);e.i(457450);var d=e.i(418026);let h=(0,u.Layout)(d.MDX_DATA.useIntersection);function p(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"use-intersection"})," hook returns information about the intersection\nof a given element with its scroll container or body element using the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"}),":"]}),"\n",(0,n.jsx)(o,{data:a.usage}),"\n",(0,n.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(r.p,{children:["The hook accepts ",(0,n.jsx)(r.code,{children:"IntersectionObserver"}),"'s options as its only optional argument:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useIntersection } from '@mantine/hooks';\n\nuseIntersection({\n  root: document.querySelector('#some-element'),\n  rootMargin: '0rem',\n  threshold: 1.0,\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The hook returns a ",(0,n.jsx)(r.code,{children:"ref"})," function that should be passed to the observed element, and the latest entry, as returned by the ",(0,n.jsx)(r.code,{children:"IntersectionObserver"}),"'s callback.\nSee the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})," documentation to learn everything about the options."]}),"\n",(0,n.jsxs)(r.p,{children:["On the first render (as well as during SSR), or when no element is being observed, the entry is ",(0,n.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { Paper } from '@mantine/core';\nimport { useIntersection } from '@mantine/hooks';\n\nfunction Demo() {\n  const { ref } = useIntersection();\n\n  return (\n    <>\n      {/* With regular element: */}\n      <div ref={ref} />\n\n      {/* With Mantine component: */}\n      <Paper ref={ref} />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"interface UseIntersectionReturnValue<T> {\n  ref: React.RefCallback<T | null>;\n  entry: IntersectionObserverEntry | null;\n}\n\nfunction useIntersection<T extends HTMLElement = any>(\n  options?: IntersectionObserverInit,\n): UseIntersectionReturnValue<T>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"UseIntersectionReturnValue"})," type is exported from ",(0,n.jsx)(r.code,{children:"@mantine/hooks"})," package,\nyou can import it in your application:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import type { UseIntersectionReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(h,{...e,children:(0,n.jsx)(p,{...e})})}],202791)},110163,(e,n,t)=>{let r="/hooks/use-intersection";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(202791)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
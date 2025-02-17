(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33110],{66181:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-intersection",function(){return r(25624)}])},25624:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>p});var t=r(31085),o=r(71184),s=r(14041),i=r(58120),c=r(34056),l=r(93065);let a={type:"code",code:`
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
`,component:function(){let e=(0,s.useRef)(null),{ref:n,entry:r}=function(e){let[n,r]=(0,s.useState)(null),t=(0,s.useRef)(null);return{ref:(0,s.useCallback)(n=>{if(t.current&&(t.current.disconnect(),t.current=null),null===n){r(null);return}t.current=new IntersectionObserver(([e])=>{r(e)},e),t.current.observe(n)},[e?.rootMargin,e?.root,e?.threshold]),entry:n}}({root:e.current,threshold:1});return(0,t.jsx)(i.t,{ref:e,h:300,style:{overflowY:"scroll"},children:(0,t.jsx)(c.a,{pt:260,pb:280,children:(0,t.jsx)(i.t,{ref:n,p:"xl",style:{backgroundColor:r?.isIntersecting?"var(--mantine-color-teal-7)":"var(--mantine-color-red-7)",minWidth:"50%"},children:(0,t.jsx)(l.E,{c:"#fff",fw:700,children:r?.isIntersecting?"Fully visible":"Obscured"})})})})}};var d=r(85954),u=r(38215);let h=(0,d.P)(u.XZ.useIntersection);function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-intersection"})," returns information about the intersection\nof a given element with its scroll container or body element with ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"}),":"]}),"\n",(0,t.jsx)(r,{data:a}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.p,{children:["The hook accepts ",(0,t.jsx)(n.code,{children:"IntersectionObserver"}),"'s options as its only optional argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useIntersection } from '@mantine/hooks';\n\nuseIntersection({\n  root: document.querySelector('#some-element'),\n  rootMargin: '0rem',\n  threshold: 1.0,\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The hook returns a ",(0,t.jsx)(n.code,{children:"ref"})," function that should be passed to the observed element, and the latest entry, as returned by ",(0,t.jsx)(n.code,{children:"IntersectionObserver"}),"'s callback.\nSee ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})," documentation to learn everything about options."]}),"\n",(0,t.jsxs)(n.p,{children:["On the first render (as well as during SSR), or when no element is being observed, the entry is ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Paper } from '@mantine/core';\nimport { useIntersection } from '@mantine/hooks';\n\nfunction Demo() {\n  const { ref } = useIntersection();\n\n  return (\n    <>\n      {/* With regular element: */}\n      <div ref={ref} />\n\n      {/* With Mantine component: */}\n      <Paper ref={ref} />\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useIntersection<T extends HTMLElement = any>(\n  options?: ConstructorParameters<typeof IntersectionObserver>[1]\n): {\n  ref: (element: T | null) => void;\n  entry: IntersectionObserverEntry;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...e,children:(0,t.jsx)(f,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(66181)),_N_E=e.O()}]);
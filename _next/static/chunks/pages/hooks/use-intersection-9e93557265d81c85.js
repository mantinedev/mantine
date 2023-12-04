(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5157],{46224:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-intersection",function(){return r(31821)}])},31821:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(24246),o=r(71670),s=r(3916),i=r(30289),c=r(27378),l=r(98477),a=r(56589),Text=r(26569);let u=`
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
`,d={type:"code",code:u,component:function(){let e=(0,c.useRef)(null),{ref:n,entry:r}=function(e){let[n,r]=(0,c.useState)(null),t=(0,c.useRef)(null),o=(0,c.useCallback)(n=>{if(t.current&&(t.current.disconnect(),t.current=null),null===n){r(null);return}t.current=new IntersectionObserver(([e])=>{r(e)},e),t.current.observe(n)},[e?.rootMargin,e?.root,e?.threshold]);return{ref:o,entry:n}}({root:e.current,threshold:1});return c.createElement(l.X,{ref:e,h:300,style:{overflowY:"scroll"}},c.createElement(a.x,{pt:260,pb:280},c.createElement(l.X,{ref:n,p:"xl",style:{backgroundColor:r?.isIntersecting?"var(--mantine-color-teal-7)":"var(--mantine-color-red-7)",minWidth:"50%"}},c.createElement(Text.x,{c:"#fff",fw:700},r?.isIntersecting?"Fully visible":"Obscured"))))}},h=(0,s.A)(i.us.useIntersection);function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-intersection"})," returns information about the intersection\nof a given element with its scroll container or body element with ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"}),":"]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.p,{children:["The hook accepts ",(0,t.jsx)(n.code,{children:"IntersectionObserver"}),"'s options as its only optional argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"useIntersection({\n  root: someDomElement,\n  rootMargin: '0rem',\n  threshold: 1.0,\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The hook returns a ",(0,t.jsx)(n.code,{children:"ref"})," function that should be passed to the observed element, and the latest entry, as returned by ",(0,t.jsx)(n.code,{children:"IntersectionObserver"}),"'s callback.\nSee ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:"Intersection Observer API"})," documentation to learn everything about options."]}),"\n",(0,t.jsxs)(n.p,{children:["On the first render (as well as during SSR), or when no element is being observed, the entry is ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const { ref, entry } = useIntersection();\n\n// With regular element:\n<div ref={ref}>Observed</div>\n\n// With Mantine component:\n<Paper ref={ref}>Observed</Paper>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useIntersection<T extends HTMLElement = any>(\n  options?: ConstructorParameters<typeof IntersectionObserver>[1]\n): {\n  ref: (element: T | null) => void;\n  entry: IntersectionObserverEntry;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...e,children:(0,t.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=46224)}),_N_E=e.O()}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var r in e)t(o,r,{get:e[r],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},411250,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(648863),r=e.i(232471),i=e.i(883364),s=e.i(191788);let l={type:"code",code:`
import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}
`,component:function(){let{ref:e,inViewport:n}=function(){let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return{ref:(0,s.useCallback)(t=>{"u">typeof IntersectionObserver&&(e.current?.disconnect(),t?(e.current=new IntersectionObserver(e=>{n(e[e.length-1].isIntersecting)}),e.current.observe(t)):(e.current=null,n(!1)))},[]),inViewport:t}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Text,{ta:"center",children:n?"Box is visible":"Scroll to see box"}),(0,t.jsxs)(r.Box,{h:64,style:{overflow:"scroll"},children:[(0,t.jsx)(r.Box,{h:128}),(0,t.jsx)(r.Box,{ref:e,bg:"blue",h:32,p:8,children:(0,t.jsx)(i.Text,{ta:"center",c:"white",children:"A box"})})]})]})}};var c=(0,o.__exportAll)({usage:()=>l});e.i(603441);var a=e.i(62558);e.i(457450);var u=e.i(418026);let h=(0,a.Layout)(u.MDX_DATA.useInViewport);function p(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:r}=o;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"use-in-viewport"})," hook is a simpler alternative to ",(0,t.jsx)(o.a,{href:"/hooks/use-intersection",children:"use-intersection"})," that only checks if the element\nis visible in the viewport:"]}),"\n",(0,t.jsx)(r,{data:c.usage}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface UseInViewportReturnValue<T extends HTMLElement = any> {\n  inViewport: boolean;\n  ref: React.RefCallback<T | null>;\n}\n\nfunction useInViewport<T extends HTMLElement = any>(): UseInViewportReturnValue<T>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"UseInViewportReturnValue"})," type is exported from the ",(0,t.jsx)(o.code,{children:"@mantine/hooks"})," package;\nyou can import it in your application:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import type { UseInViewportReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(p,{...e})})}],411250)},709362,(e,t,n)=>{let o="/hooks/use-in-viewport";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(411250)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
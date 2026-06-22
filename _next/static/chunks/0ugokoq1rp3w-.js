(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var s in e)t(o,s,{get:e[s],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},210275,e=>{"use strict";var t=e.i(648863),n=e.i(301388),o=e.i(883364),s=e.i(391398),r=e.i(191788);let i={type:"code",code:`
import { Text, Code } from '@mantine/core';
import { useMousePosition } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMousePosition();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`,component:function(){let{x:e,y:t}=function(){let[e,t]=(0,r.useState)({x:0,y:0});return(0,r.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}},[]),e}();return(0,s.jsxs)(o.Text,{ta:"center",children:["Mouse coordinates ",(0,s.jsx)(n.Code,{children:`{ x: ${e}, y: ${t} }`})]})}};var c=e.i(232471),u=e.i(725695);let d={type:"code",code:`
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`,component:function(){let{ref:e,x:t,y:i}=function(e={resetOnExit:!1}){let[t,n]=(0,r.useState)({x:0,y:0});return{ref:(0,r.useCallback)(t=>{let o=e=>{if(t){let o=t.getBoundingClientRect();n({x:Math.max(0,Math.round(e.clientX-o.left)),y:Math.max(0,Math.round(e.clientY-o.top))})}else n({x:e.clientX,y:e.clientY})},s=()=>n({x:0,y:0});return t?.addEventListener("mousemove",o),e.resetOnExit&&t?.addEventListener("mouseleave",s),()=>{t?.removeEventListener("mousemove",o),e.resetOnExit&&t?.removeEventListener("mouseleave",s)}},[e.resetOnExit]),...t}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Group,{justify:"center",children:(0,s.jsx)(c.Box,{ref:e,w:300,h:180,bg:"var(--mantine-color-blue-light)"})}),(0,s.jsxs)(o.Text,{ta:"center",mt:"sm",children:["Mouse coordinates ",(0,s.jsx)(n.Code,{children:`{ x: ${t}, y: ${i} }`})]})]})}};var l=(0,t.__exportAll)({ref:()=>d,usage:()=>i});e.s(["UseMouseDemos",0,l],210275)},898871,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(210275);e.i(603441);var s=e.i(62558);e.i(457450);var r=e.i(418026);let i=(0,s.Layout)(r.MDX_DATA.useMouse);function c(e){let s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:r}=s;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:o.UseMouseDemos.ref}),"\n",(0,t.jsxs)(s.p,{children:["If you do not provide a ",(0,t.jsx)(s.code,{children:"ref"}),", the mouse position is tracked relative to the document element:"]}),"\n",(0,t.jsx)(r,{data:o.UseMouseDemos.usage}),"\n",(0,t.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(s.p,{children:["Set the ",(0,t.jsx)(s.code,{children:"resetOnExit"})," option to reset the mouse position to ",(0,t.jsx)(s.code,{children:"0, 0"})," when the mouse leaves the element:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst { ref, x, y } = useMouse({ resetOnExit: true });\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The hook returns an object with ",(0,t.jsx)(s.code,{children:"ref"})," and ",(0,t.jsx)(s.code,{children:"x"}),", ",(0,t.jsx)(s.code,{children:"y"})," mouse coordinates:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element; if not used, document element will be used as target element\n  x, // -> mouse x position\n  y, // -> mouse y position\n} = useMouse();\n"})}),"\n",(0,t.jsxs)(s.p,{children:["On the first render (as well as during SSR), both ",(0,t.jsx)(s.code,{children:"x"})," and ",(0,t.jsx)(s.code,{children:"y"})," values are equal to ",(0,t.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"function useMouse<T extends HTMLElement = any>(options?: {\n  resetOnExit?: boolean;\n}): {\n  x: number;\n  y: number;\n  ref: React.RefObject<T>;\n};\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})})}])},126342,(e,t,n)=>{let o="/hooks/use-mouse";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(898871)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
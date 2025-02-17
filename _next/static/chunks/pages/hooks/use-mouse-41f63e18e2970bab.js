(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83262],{32365:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mouse",function(){return t(63377)}])},63377:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>j});var o=t(31085),s=t(71184),r=t(56051),i=t(34056),c=t(93065),u=t(37905),d=t(14041);function l(e={resetOnExit:!1}){let[n,t]=(0,d.useState)({x:0,y:0}),o=(0,d.useRef)(null),s=e=>{if(o.current){let n=e.currentTarget.getBoundingClientRect();t({x:Math.max(0,Math.round(e.pageX-n.left-(window.pageXOffset||window.scrollX))),y:Math.max(0,Math.round(e.pageY-n.top-(window.pageYOffset||window.scrollY)))})}else t({x:e.clientX,y:e.clientY})},r=()=>t({x:0,y:0});return(0,d.useEffect)(()=>{let n=o?.current?o.current:document;return n.addEventListener("mousemove",s),e.resetOnExit&&n.addEventListener("mouseleave",r),()=>{n.removeEventListener("mousemove",s),e.resetOnExit&&n.removeEventListener("mouseleave",r)}},[o.current]),{ref:o,...n}}let a={type:"code",code:`
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
`,component:function(){let{ref:e,x:n,y:t}=l();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Y,{justify:"center",children:(0,o.jsx)(i.a,{ref:e,w:300,h:180,bg:"var(--mantine-color-blue-light)"})}),(0,o.jsxs)(c.E,{ta:"center",mt:"sm",children:["Mouse coordinates ",(0,o.jsx)(u.C,{children:`{ x: ${n}, y: ${t} }`})]})]})}},x={type:"code",code:`
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`,component:function(){let{x:e,y:n}=l();return(0,o.jsxs)(c.E,{ta:"center",children:["Mouse coordinates ",(0,o.jsx)(u.C,{children:`{ x: ${e}, y: ${n} }`})]})}};var m=t(85954),h=t(38215);let p=(0,m.P)(h.XZ.useMouse);function f(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsxs)(n.p,{children:["If you do not provide ",(0,o.jsx)(n.code,{children:"ref"}),", mouse position is tracked relative to the document element:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"resetOnExit"})," option to reset mouse position to ",(0,o.jsx)(n.code,{children:"0, 0"})," when mouse leaves the element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst { ref, x, y } = useMouse({ resetOnExit: true });\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns an object with ",(0,o.jsx)(n.code,{children:"ref"})," and ",(0,o.jsx)(n.code,{children:"x"}),", ",(0,o.jsx)(n.code,{children:"y"})," mouse coordinates:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element, if not used document element will be used as target element\n  x, // -> mouse x position\n  y, // -> mouse y position\n} = useMouse();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["On the first render (as well as during SSR), both ",(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"})," values are equal to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useMouse<T extends HTMLElement = any>(options?: {\n  resetOnExit?: boolean;\n}): {\n  x: number;\n  y: number;\n  ref: React.MutableRefObject<T>;\n};\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(f,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(32365)),_N_E=e.O()}]);
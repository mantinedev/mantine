(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3939],{67676:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mouse",function(){return t(77974)}])},77974:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var o=t(24246),r=t(71670),s=t(3916),i=t(30289),c=t(27378),u=t(22971),d=t(56589),Text=t(26569),l=t(94998);function a(e={resetOnExit:!1}){let[n,t]=(0,c.useState)({x:0,y:0}),o=(0,c.useRef)(),r=e=>{if(o.current){let n=e.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.round(e.pageX-n.left-(window.pageXOffset||window.scrollX))),r=Math.max(0,Math.round(e.pageY-n.top-(window.pageYOffset||window.scrollY)));t({x:o,y:r})}else t({x:e.clientX,y:e.clientY})},s=()=>t({x:0,y:0});return(0,c.useEffect)(()=>{let n=o?.current?o.current:document;return n.addEventListener("mousemove",r),e.resetOnExit&&n.addEventListener("mouseleave",s),()=>{n.removeEventListener("mousemove",r),e.resetOnExit&&n.removeEventListener("mouseleave",s)}},[o.current]),{ref:o,...n}}let x=`
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
`,m={type:"code",code:x,component:function(){let{ref:e,x:n,y:t}=a();return c.createElement(c.Fragment,null,c.createElement(u.Z,{justify:"center"},c.createElement(d.x,{ref:e,w:300,h:180,bg:"var(--mantine-color-blue-light)"})),c.createElement(Text.x,{ta:"center",mt:"sm"},"Mouse coordinates ",c.createElement(l.E,null,`{ x: ${n}, y: ${t} }`)))}},h=`
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`,f={type:"code",code:h,component:function(){let{x:e,y:n}=a();return c.createElement(Text.x,{ta:"center"},"Mouse coordinates ",c.createElement(l.E,null,`{ x: ${e}, y: ${n} }`))}},p=(0,s.A)(i.us.useMouse);function j(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsxs)(n.p,{children:["If you do not provide ",(0,o.jsx)(n.code,{children:"ref"}),", mouse position is tracked relative to the document element:"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"resetOnExit"})," option to reset mouse position to ",(0,o.jsx)(n.code,{children:"0, 0"})," when mouse leaves the element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const { ref, x, y } = useMouse({ resetOnExit: true });\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns an object with ",(0,o.jsx)(n.code,{children:"ref"})," and ",(0,o.jsx)(n.code,{children:"x"}),", ",(0,o.jsx)(n.code,{children:"y"})," mouse coordinates:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const {\n  ref, // -> pass ref to target element, if not used document element will be used as target element\n  x, // -> mouse x position\n  y, // -> mouse y position\n} = useMouse();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["On the first render (as well as during SSR), both ",(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"})," values are equal to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useMouse<T extends HTMLElement = any>(options?: {\n  resetOnExit?: boolean;\n}): {\n  x: number;\n  y: number;\n  ref: React.MutableRefObject<T>;\n};\n"})})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(j,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=67676)}),_N_E=e.O()}]);
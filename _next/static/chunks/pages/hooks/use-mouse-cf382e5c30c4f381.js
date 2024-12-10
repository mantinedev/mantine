(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83939],{29941:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mouse",function(){return t(24501)}])},24501:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var o=t(52322),r=t(45392),s=t(93010),i=t(28559),c=t(8582),u=t(45909),d=t(2784);function l(e={resetOnExit:!1}){let[n,t]=(0,d.useState)({x:0,y:0}),o=(0,d.useRef)(null),r=e=>{if(o.current){let n=e.currentTarget.getBoundingClientRect();t({x:Math.max(0,Math.round(e.pageX-n.left-(window.pageXOffset||window.scrollX))),y:Math.max(0,Math.round(e.pageY-n.top-(window.pageYOffset||window.scrollY)))})}else t({x:e.clientX,y:e.clientY})},s=()=>t({x:0,y:0});return(0,d.useEffect)(()=>{let n=o?.current?o.current:document;return n.addEventListener("mousemove",r),e.resetOnExit&&n.addEventListener("mouseleave",s),()=>{n.removeEventListener("mousemove",r),e.resetOnExit&&n.removeEventListener("mouseleave",s)}},[o.current]),{ref:o,...n}}let a={type:"code",code:`
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
`,component:function(){let{ref:e,x:n,y:t}=l();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{justify:"center",children:(0,o.jsx)(i.x,{ref:e,w:300,h:180,bg:"var(--mantine-color-blue-light)"})}),(0,o.jsxs)(c.x,{ta:"center",mt:"sm",children:["Mouse coordinates ",(0,o.jsx)(u.E,{children:`{ x: ${n}, y: ${t} }`})]})]})}},x={type:"code",code:`
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`,component:function(){let{x:e,y:n}=l();return(0,o.jsxs)(c.x,{ta:"center",children:["Mouse coordinates ",(0,o.jsx)(u.E,{children:`{ x: ${e}, y: ${n} }`})]})}};var m=t(25071),h=t(15019);let f=(0,m.A)(h.us.useMouse);function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsxs)(n.p,{children:["If you do not provide ",(0,o.jsx)(n.code,{children:"ref"}),", mouse position is tracked relative to the document element:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"resetOnExit"})," option to reset mouse position to ",(0,o.jsx)(n.code,{children:"0, 0"})," when mouse leaves the element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst { ref, x, y } = useMouse({ resetOnExit: true });\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The hook returns an object with ",(0,o.jsx)(n.code,{children:"ref"})," and ",(0,o.jsx)(n.code,{children:"x"}),", ",(0,o.jsx)(n.code,{children:"y"})," mouse coordinates:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMouse } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element, if not used document element will be used as target element\n  x, // -> mouse x position\n  y, // -> mouse y position\n} = useMouse();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["On the first render (as well as during SSR), both ",(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"})," values are equal to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useMouse<T extends HTMLElement = any>(options?: {\n  resetOnExit?: boolean;\n}): {\n  x: number;\n  y: number;\n  ref: React.MutableRefObject<T>;\n};\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(f,{...e,children:(0,o.jsx)(p,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=29941)}),_N_E=e.O()}]);
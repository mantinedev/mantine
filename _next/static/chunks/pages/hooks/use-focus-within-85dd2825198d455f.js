(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31545],{3627:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-within",function(){return n(20079)}])},20079:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var o=n(31085),s=n(71184),r=n(34056),i=n(93065),c=n(90275),u=n(52022),l=n(14041);let d={type:"code",component:function(){let{ref:e,focused:t}=function({onBlur:e,onFocus:t}={}){let n=(0,l.useRef)(null),[o,s]=(0,l.useState)(!1),r=(0,l.useRef)(!1),i=e=>{s(e),r.current=e},c=e=>{r.current||(i(!0),t?.(e))},u=t=>{r.current&&!(t.currentTarget instanceof HTMLElement&&t.relatedTarget instanceof HTMLElement&&t.currentTarget.contains(t.relatedTarget))&&(i(!1),e?.(t))};return(0,l.useEffect)(()=>{let e=n.current;if(e)return e.addEventListener("focusin",c),e.addEventListener("focusout",u),()=>{e?.removeEventListener("focusin",c),e?.removeEventListener("focusout",u)}},[c,u]),{ref:n,focused:o}}();return(0,o.jsx)("div",{ref:e,children:(0,o.jsxs)(r.a,{p:"xl",style:{backgroundColor:t?"var(--mantine-color-blue-light)":"transparent"},children:[(0,o.jsxs)(i.E,{size:"sm",children:["One of elements has focus: ",t.toString()]}),(0,o.jsx)(c.k,{label:"Focus this input",placeholder:"Styles will be added to parent"}),(0,o.jsx)(u.$,{mt:"md",children:"Button"})]})})},code:`
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`};var a=n(85954),h=n(38215);let f=(0,a.P)(h.XZ.useFocusWithin);function m(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-focus-within"})," hook detects if any element within the other element has focus.\nIt works the same way as ",(0,o.jsx)(t.code,{children:":focus-within"})," CSS selector:"]}),"\n",(0,o.jsx)(n,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useFocusWithin<T extends HTMLElement = any>(handlers?: {\n  onFocus?(event: FocusEvent): void;\n  onBlur?(event: FocusEvent): void;\n}): {\n  ref: React.MutableRefObject<T>;\n  focused: boolean;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(f,{...e,children:(0,o.jsx)(m,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(3627)),_N_E=e.O()}]);
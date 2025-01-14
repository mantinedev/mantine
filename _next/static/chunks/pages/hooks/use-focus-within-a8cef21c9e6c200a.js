(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98025],{79066:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-within",function(){return t(57931)}])},57931:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var o=t(52322),r=t(45392),s=t(28559),i=t(8582),u=t(74770),c=t(39629),l=t(2784);let d={type:"code",component:function(){let{ref:e,focused:n}=function({onBlur:e,onFocus:n}={}){let t=(0,l.useRef)(null),[o,r]=(0,l.useState)(!1),s=(0,l.useRef)(!1),i=e=>{r(e),s.current=e},u=e=>{s.current||(i(!0),n?.(e))},c=n=>{s.current&&!(n.currentTarget instanceof HTMLElement&&n.relatedTarget instanceof HTMLElement&&n.currentTarget.contains(n.relatedTarget))&&(i(!1),e?.(n))};return(0,l.useEffect)(()=>{if(t.current)return t.current.addEventListener("focusin",u),t.current.addEventListener("focusout",c),()=>{t.current?.removeEventListener("focusin",u),t.current?.removeEventListener("focusout",c)}},[u,c]),{ref:t,focused:o}}();return(0,o.jsx)("div",{ref:e,children:(0,o.jsxs)(s.x,{p:"xl",style:{backgroundColor:n?"var(--mantine-color-blue-light)":"transparent"},children:[(0,o.jsxs)(i.x,{size:"sm",children:["One of elements has focus: ",n.toString()]}),(0,o.jsx)(u.o,{label:"Focus this input",placeholder:"Styles will be added to parent"}),(0,o.jsx)(c.z,{mt:"md",children:"Button"})]})})},code:`
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
`};var a=t(54078),f=t(15019);let h=(0,a.A)(f.us.useFocusWithin);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-focus-within"})," hook detects if any element within the other element has focus.\nIt works the same way as ",(0,o.jsx)(n.code,{children:":focus-within"})," CSS selector:"]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useFocusWithin<T extends HTMLElement = any>(handlers?: {\n  onFocus?(event: FocusEvent): void;\n  onBlur?(event: FocusEvent): void;\n}): {\n  ref: React.MutableRefObject<T>;\n  focused: boolean;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=79066)}),_N_E=e.O()}]);
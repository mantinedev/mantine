(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98025],{67137:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-within",function(){return n(58960)}])},58960:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(24246),r=n(71670),s=n(27378),u=n(56589),Text=n(26569),c=n(7033),i=n(8671);let l=`
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
`,a={type:"code",component:function(){let{ref:e,focused:t}=function({onBlur:e,onFocus:t}={}){let n=(0,s.useRef)(),[o,r]=(0,s.useState)(!1),u=(0,s.useRef)(!1),c=e=>{r(e),u.current=e},i=e=>{u.current||(c(!0),t?.(e))},l=t=>{u.current&&!(t.currentTarget instanceof HTMLElement&&t.relatedTarget instanceof HTMLElement&&t.currentTarget.contains(t.relatedTarget))&&(c(!1),e?.(t))};return(0,s.useEffect)(()=>{if(n.current)return n.current.addEventListener("focusin",i),n.current.addEventListener("focusout",l),()=>{n.current?.removeEventListener("focusin",i),n.current?.removeEventListener("focusout",l)}},[i,l]),{ref:n,focused:o}}();return s.createElement("div",{ref:e},s.createElement(u.x,{p:"xl",style:{backgroundColor:t?"var(--mantine-color-blue-light)":"transparent"}},s.createElement(Text.x,{size:"sm"},"One of elements has focus: ",t.toString()),s.createElement(c.o,{label:"Focus this input",placeholder:"Styles will be added to parent"}),s.createElement(i.z,{mt:"md"},"Button")))},code:l};var d=n(3916),f=n(54568);let h=(0,d.A)(f.us.useFocusWithin);function m(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-focus-within"})," hook detects if any element within the other element has focus.\nIt works the same way as ",(0,o.jsx)(t.code,{children:":focus-within"})," CSS selector:"]}),"\n",(0,o.jsx)(n,{data:a}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useFocusWithin<T extends HTMLElement = any>(handlers?: {\n  onFocus?(event: FocusEvent): void;\n  onBlur?(event: FocusEvent): void;\n}): {\n  ref: React.MutableRefObject<T>;\n  focused: boolean;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=67137)}),_N_E=e.O()}]);
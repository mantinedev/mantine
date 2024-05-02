(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98025],{79066:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-within",function(){return t(57931)}])},57931:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var o=t(52322),r=t(45392),s=t(28559),Text=t(8582),i=t(74770),u=t(17115),c=t(2784);let l=`
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
`,d={type:"code",component:function(){let{ref:e,focused:n}=function({onBlur:e,onFocus:n}={}){let t=(0,c.useRef)(),[o,r]=(0,c.useState)(!1),s=(0,c.useRef)(!1),i=e=>{r(e),s.current=e},u=e=>{s.current||(i(!0),n?.(e))},l=n=>{s.current&&!(n.currentTarget instanceof HTMLElement&&n.relatedTarget instanceof HTMLElement&&n.currentTarget.contains(n.relatedTarget))&&(i(!1),e?.(n))};return(0,c.useEffect)(()=>{if(t.current)return t.current.addEventListener("focusin",u),t.current.addEventListener("focusout",l),()=>{t.current?.removeEventListener("focusin",u),t.current?.removeEventListener("focusout",l)}},[u,l]),{ref:t,focused:o}}();return(0,o.jsx)("div",{ref:e,children:(0,o.jsxs)(s.x,{p:"xl",style:{backgroundColor:n?"var(--mantine-color-blue-light)":"transparent"},children:[(0,o.jsxs)(Text.x,{size:"sm",children:["One of elements has focus: ",n.toString()]}),(0,o.jsx)(i.o,{label:"Focus this input",placeholder:"Styles will be added to parent"}),(0,o.jsx)(u.z,{mt:"md",children:"Button"})]})})},code:l};var a=t(79016),f=t(33638);let h=(0,a.A)(f.us.useFocusWithin);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-focus-within"})," hook detects if any element within the other element has focus.\nIt works the same way as ",(0,o.jsx)(n.code,{children:":focus-within"})," CSS selector:"]}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useFocusWithin<T extends HTMLElement = any>(handlers?: {\n  onFocus?(event: FocusEvent): void;\n  onBlur?(event: FocusEvent): void;\n}): {\n  ref: React.MutableRefObject<T>;\n  focused: boolean;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=79066)}),_N_E=e.O()}]);
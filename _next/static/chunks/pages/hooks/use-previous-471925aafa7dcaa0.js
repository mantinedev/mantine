(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42358],{57877:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-previous",function(){return n(96918)}])},96918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(31085),o=n(71184),u=n(90275),s=n(93065),i=n(16751),l=n(34211);let a={type:"code",component:function(){let[e,t]=(0,i.D)(""),n=(0,l.Z)(e);return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.k,{label:"Enter some text here",placeholder:"Enter some text here",id:"previous-demo-input",value:e,onChange:t}),(0,r.jsxs)(s.E,{mt:"md",children:["Current value: ",e]}),(0,r.jsxs)(s.E,{children:["Previous value: ",n]})]})},code:`
import { TextInput, Text } from '@mantine/core';
import { usePrevious, useInputState } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`};var d=n(85954),c=n(38215);let v=(0,d.P)(c.XZ.usePrevious);function p(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-previous"})," stores the previous value of a state in a ref.\nIt returns ",(0,r.jsx)(t.code,{children:"undefined"})," on initial render and the previous value of a state after rerender:"]}),"\n",(0,r.jsx)(n,{data:a}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function usePrevious<T>(value: T): T | undefined;\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...e,children:(0,r.jsx)(p,{...e})})}},16751:(e,t,n)=>{"use strict";n.d(t,{D:()=>o});var r=n(14041);function o(e){let[t,n]=(0,r.useState)(e);return[t,e=>{if(e){if("function"==typeof e)n(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;n("checkbox"===t.type?t.checked:t.value)}else n(e)}else n(e)}]}},34211:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(14041);function o(e){let t=(0,r.useRef)(void 0);return(0,r.useEffect)(()=>{t.current=e},[e]),t.current}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(57877)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80651],{93525:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-state-history",function(){return r(11362)}])},11362:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(31085),o=r(71184),s=r(8573),i=r(85954),a=r(38215);let c=(0,i.P)(a.XZ.useStateHistory);function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useStateHistory"})," hook is used to create a state with history, it returns current value, handlers to\ngo back/forward and a history object with all previous values and current index."]}),"\n",(0,n.jsx)(r,{data:s.g}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"UseStateHistoryHandlers"})," and ",(0,n.jsx)(t.code,{children:"StateHistory"})," interfaces are exported from ",(0,n.jsx)(t.code,{children:"@mantine/hooks"}),"\npackage."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"interface UseStateHistoryHandlers<T> {\n  set: (value: T) => void;\n  back: (steps?: number) => void;\n  forward: (steps?: number) => void;\n  reset: () => void;\n}\n\ninterface StateHistory<T> {\n  history: T[];\n  current: number;\n}\n\nfunction useStateHistory<T>(\n  initialValue: T\n): [T, UseStateHistoryHandlers<T>, StateHistory<T>];\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(c,{...e,children:(0,n.jsx)(l,{...e})})}},8573:(e,t,r)=>{"use strict";r.d(t,{g:()=>l});var n=r(31085),o=r(93065),s=r(56051),i=r(52022),a=r(37905),c=r(14041);let l={type:"code",component:function(){let[e,t,r]=function(e){let[t,r]=(0,c.useState)({history:[1],current:0}),n=(0,c.useCallback)(e=>r(t=>{let r=[...t.history.slice(0,t.current+1),e];return{history:r,current:r.length-1}}),[]),o=(0,c.useCallback)((e=1)=>r(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),s=(0,c.useCallback)((e=1)=>r(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),i=(0,c.useCallback)(()=>{r({history:[1],current:0})},[1]),a=(0,c.useMemo)(()=>({back:o,forward:s,reset:i,set:n}),[o,s,i,n]);return[t.history[t.current],a,t]}(1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.E,{children:["Current value: ",e]}),(0,n.jsxs)(s.Y,{my:"md",children:[(0,n.jsx)(i.$,{onClick:()=>t.set(Math.ceil(100*Math.random())+1),children:"Set value"}),(0,n.jsx)(i.$,{onClick:()=>t.back(),children:"Back"}),(0,n.jsx)(i.$,{onClick:()=>t.forward(),children:"Forward"}),(0,n.jsx)(i.$,{onClick:()=>t.reset(),children:"Reset"})]}),(0,n.jsx)(a.C,{block:!0,children:JSON.stringify(r,null,2)})]})},code:`
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
        <Button onClick={() => handlers.reset()}>Reset</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
`}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(93525)),_N_E=e.O()}]);
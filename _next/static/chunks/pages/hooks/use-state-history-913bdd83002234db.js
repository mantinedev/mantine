(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97905],{35853:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-state-history",function(){return n(78859)}])},78859:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52322),o=n(45392),s=n(58255),i=n(25071),c=n(15019);let a=(0,i.A)(c.us.useStateHistory);function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useStateHistory"})," hook is used to create a state with history, it returns current value, handlers to\ngo back/forward and a history object with all previous values and current index."]}),"\n",(0,r.jsx)(n,{data:s.n}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"UseStateHistoryHandlers"})," and ",(0,r.jsx)(t.code,{children:"StateHistory"})," interfaces are exported from ",(0,r.jsx)(t.code,{children:"@mantine/hooks"}),"\npackage."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"interface UseStateHistoryHandlers<T> {\n  set: (value: T) => void;\n  back: (steps?: number) => void;\n  forward: (steps?: number) => void;\n  reset: () => void;\n}\n\ninterface StateHistory<T> {\n  history: T[];\n  current: number;\n}\n\nfunction useStateHistory<T>(\n  initialValue: T\n): [T, UseStateHistoryHandlers<T>, StateHistory<T>];\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})})}},58255:function(e,t,n){"use strict";n.d(t,{n:function(){return u}});var r=n(52322),o=n(8582),s=n(93010),i=n(39629),c=n(45909),a=n(2784);let u={type:"code",component:function(){let[e,t,n]=function(e){let[t,n]=(0,a.useState)({history:[1],current:0}),r=(0,a.useCallback)(e=>n(t=>{let n=[...t.history.slice(0,t.current+1),e];return{history:n,current:n.length-1}}),[]),o=(0,a.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),s=(0,a.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),i=(0,a.useCallback)(()=>{n({history:[1],current:0})},[1]),c=(0,a.useMemo)(()=>({back:o,forward:s,reset:i,set:r}),[o,s,i,r]);return[t.history[t.current],c,t]}(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.x,{children:["Current value: ",e]}),(0,r.jsxs)(s.Z,{my:"md",children:[(0,r.jsx)(i.z,{onClick:()=>t.set(Math.ceil(100*Math.random())+1),children:"Set value"}),(0,r.jsx)(i.z,{onClick:()=>t.back(),children:"Back"}),(0,r.jsx)(i.z,{onClick:()=>t.forward(),children:"Forward"}),(0,r.jsx)(i.z,{onClick:()=>t.reset(),children:"Reset"})]}),(0,r.jsx)(c.E,{block:!0,children:JSON.stringify(n,null,2)})]})},code:`
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
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=35853)}),_N_E=e.O()}]);
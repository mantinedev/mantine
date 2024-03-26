(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97905],{35853:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-state-history",function(){return n(78859)}])},78859:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52322),o=n(45392),i=n(58255),s=n(79016),a=n(33638);let c=(0,s.A)(a.us.useStateHistory);function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useStateHistory"})," hook is used to create a state with history, it returns current value, handlers to\ngo back/forward and a history object with all previous values and current index."]}),"\n",(0,r.jsx)(n,{data:i.n}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"UseStateHistoryHandlers"})," and ",(0,r.jsx)(t.code,{children:"StateHistory"})," interfaces are exported from ",(0,r.jsx)(t.code,{children:"@mantine/hooks"}),"\npackage."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"interface UseStateHistoryHandlers<T> {\n  set: (value: T) => void;\n  back: (steps?: number) => void;\n  forward: (steps?: number) => void;\n}\n\ninterface StateHistory<T> {\n  history: T[];\n  current: number;\n}\n\nfunction useStateHistory<T>(\n  initialValue: T\n): [T, UseStateHistoryHandlers<T>, StateHistory<T>];\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(u,{...e})})}},58255:function(e,t,n){"use strict";n.d(t,{n:function(){return c}});var r=n(2784),Text=n(8582),o=n(93010),i=n(17115),s=n(45909);let a=`
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
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
`,c={type:"code",component:function(){let[e,t,n]=function(e){let[t,n]=(0,r.useState)({history:[1],current:0}),o=(0,r.useCallback)(e=>n(t=>{let n=[...t.history.slice(0,t.current+1),e];return{history:n,current:n.length-1}}),[]),i=(0,r.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),s=(0,r.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),a=(0,r.useMemo)(()=>({set:o,forward:s,back:i}),[]);return[t.history[t.current],a,t]}(0);return r.createElement(r.Fragment,null,r.createElement(Text.x,null,"Current value: ",e),r.createElement(o.Z,{my:"md"},r.createElement(i.z,{onClick:()=>t.set(Math.ceil(100*Math.random())+1)},"Set value"),r.createElement(i.z,{onClick:()=>t.back()},"Back"),r.createElement(i.z,{onClick:()=>t.forward()},"Forward")),r.createElement(s.E,{block:!0},JSON.stringify(n,null,2)))},code:a}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=35853)}),_N_E=e.O()}]);
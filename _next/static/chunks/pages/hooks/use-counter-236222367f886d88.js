(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19347],{95401:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-counter",function(){return t(69384)}])},69384:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var r=t(31085),o=t(71184),i=t(93065),s=t(56051),c=t(52022),u=t(89939);let d={type:"code",code:`
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`,component:function(){let[e,n]=(0,u.I)(0,{min:0,max:10});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.E,{size:"md",ta:"center",py:"xs",children:["Count: ",e]}),(0,r.jsxs)(s.Y,{justify:"center",children:[(0,r.jsx)(c.$,{size:"xs",onClick:n.increment,children:"Increment"}),(0,r.jsx)(c.$,{size:"xs",onClick:n.decrement,children:"Decrement"}),(0,r.jsx)(c.$,{size:"xs",onClick:n.reset,children:"Reset"}),(0,r.jsx)(c.$,{size:"xs",onClick:()=>n.set(5),children:"Set 5"})]})]})}};var l=t(85954),m=t(38215);let a=(0,l.P)(m.XZ.useCounter);function h(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useCounter(\n  initialValue?: number,\n  options?: Partial<{\n    min: number;\n    max: number;\n  }>\n): [\n  number,\n  {\n    increment: () => void;\n    decrement: () => void;\n    set: (value: number) => void;\n    reset: () => void;\n  },\n];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})})}},89939:(e,n,t)=>{"use strict";t.d(n,{I:()=>s});var r=t(14041),o=t(68193);let i={min:-1/0,max:1/0};function s(e=0,n){let{min:t,max:c}={...i,...n},[u,d]=(0,r.useState)((0,o.q)(e,t,c));return[u,{increment:()=>d(e=>(0,o.q)(e+1,t,c)),decrement:()=>d(e=>(0,o.q)(e-1,t,c)),set:e=>d((0,o.q)(e,t,c)),reset:()=>d((0,o.q)(e,t,c))}]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(95401)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12971],{82407:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-counter",function(){return t(75330)}])},75330:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var r=t(52322),o=t(45392),Text=t(8582),i=t(93010),u=t(17115),s=t(43647);let c=`
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
`,d={type:"code",code:c,component:function(){let[n,e]=(0,s.C)(0,{min:0,max:10});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Text.x,{size:"md",ta:"center",py:"xs",children:["Count: ",n]}),(0,r.jsxs)(i.Z,{justify:"center",children:[(0,r.jsx)(u.z,{size:"xs",onClick:e.increment,children:"Increment"}),(0,r.jsx)(u.z,{size:"xs",onClick:e.decrement,children:"Decrement"}),(0,r.jsx)(u.z,{size:"xs",onClick:e.reset,children:"Reset"}),(0,r.jsx)(u.z,{size:"xs",onClick:()=>e.set(5),children:"Set 5"})]})]})}};var l=t(79016),m=t(33638);let a=(0,l.A)(m.us.useCounter);function h(n){let e={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...n.components},{Demo:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"function useCounter(\n  initialValue?: number,\n  options?: Partial<{\n    min: number;\n    max: number;\n  }>\n): [\n  number,\n  {\n    increment: () => void;\n    decrement: () => void;\n    set: (value: number) => void;\n    reset: () => void;\n  },\n];\n"})})]})}function x(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...n,children:(0,r.jsx)(h,{...n})})}},43647:function(n,e,t){"use strict";t.d(e,{C:function(){return u}});var r=t(2784),o=t(82692);let i={min:-1/0,max:1/0};function u(n=0,e){let{min:t,max:u}={...i,...e},[s,c]=(0,r.useState)((0,o.u)(n,t,u));return[s,{increment:()=>c(n=>(0,o.u)(n+1,t,u)),decrement:()=>c(n=>(0,o.u)(n-1,t,u)),set:n=>c((0,o.u)(n,t,u)),reset:()=>c((0,o.u)(n,t,u))}]}}},function(n){n.O(0,[57938,17454,47747,49774,92888,40179],function(){return n(n.s=82407)}),_N_E=n.O()}]);
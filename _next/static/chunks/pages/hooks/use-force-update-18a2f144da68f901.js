(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69068],{63005:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-force-update",function(){return o(25115)}])},25115:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>x});var t=o(31085),r=o(71184),c=o(56051),d=o(93065),i=o(52022),s=o(4755),u=o(63297);let p={type:"code",code:`
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`,component:function(){let e=(0,s.C)();return(0,t.jsxs)(c.Y,{justify:"center",children:[(0,t.jsx)(d.E,{children:(0,u.z)()}),(0,t.jsx)(i.$,{onClick:e,children:"Force update"})]})}};var a=o(85954),l=o(38215);let h=(0,a.P)(l.XZ.useForceUpdate);function f(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-force-update"})," returns a function, which when called rerenders the component:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useForceUpdate(): () => void;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...e,children:(0,t.jsx)(f,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(63005)),_N_E=e.O()}]);
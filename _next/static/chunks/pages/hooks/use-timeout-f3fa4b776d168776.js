(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78438],{66821:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-timeout",function(){return t(31355)}])},31355:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>j});var o=t(31085),r=t(71184),s=t(14041),i=t(56051),l=t(52022),c=t(93065),a=t(68243),d=t(63297);let u={type:"code",code:`
import { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';
import { randomId, useTimeout } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`,component:function(){let[e,n]=(0,s.useState)(""),{start:t,clear:r}=(0,a.Z)(()=>n((0,d.z)()),1e3);return(0,o.jsxs)(i.Y,{children:[(0,o.jsx)(l.$,{onClick:t,children:"Start"}),(0,o.jsx)(l.$,{onClick:r,color:"red",children:"Clear"}),(0,o.jsxs)(c.E,{children:["Random value: ",e]})]})}};var h=t(85954),m=t(38215);let x=(0,h.P)(m.XZ.useTimeout);function p(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useTimeout } from '@mantine/hooks';\n\nconst { start, clear } = useTimeout(callback, delay, {\n  autoInvoke: true,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"callback"})," – function that will be called after the timer elapses"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"delay"})," – number of milliseconds the timer should wait before the specified function is executed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options: { autoInvoke }"})," - determines whether the timer should be started on mount, defaults to false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Return object:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"start"})," - starts the timer"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clear"})," – cancels the timer"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useTimeout(\n  callback: (...callbackParams: any[]) => void,\n  delay: number,\n  options?: {\n    autoInvoke: boolean;\n  }\n): {\n  start: (...callbackParams: any[]) => void;\n  clear: () => void;\n};\n"})})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(p,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(66821)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43030],{59359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-timeout",function(){return t(55271)}])},55271:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),r=t(45392),i=t(2784),s=t(93010),l=t(39629),c=t(8582),a=t(8246),u=t(73533);let d={type:"code",code:`
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
`,component:function(){let[e,n]=(0,i.useState)(""),{start:t,clear:r}=(0,a.K)(()=>n((0,u.k)()),1e3);return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(l.z,{onClick:t,children:"Start"}),(0,o.jsx)(l.z,{onClick:r,color:"red",children:"Clear"}),(0,o.jsxs)(c.x,{children:["Random value: ",e]})]})}};var h=t(25071),m=t(15019);let x=(0,h.A)(m.us.useTimeout);function p(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useTimeout } from '@mantine/hooks';\n\nconst { start, clear } = useTimeout(callback, delay, {\n  autoInvoke: true,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"callback"})," – function that will be called after the timer elapses"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"delay"})," – number of milliseconds the timer should wait before the specified function is executed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options: { autoInvoke }"})," - determines whether the timer should be started on mount, defaults to false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Return object:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"start"})," - starts the timer"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clear"})," – cancels the timer"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useTimeout(\n  callback: (...callbackParams: any[]) => void,\n  delay: number,\n  options?: {\n    autoInvoke: boolean;\n  }\n): {\n  start: (...callbackParams: any[]) => void;\n  clear: () => void;\n};\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(p,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=59359)}),_N_E=e.O()}]);
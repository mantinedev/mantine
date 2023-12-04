(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3030],{92022:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-timeout",function(){return t(51237)}])},51237:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(24246),r=t(71670),l=t(3916),c=t(30289),i=t(27378),u=t(22971),s=t(8671),Text=t(26569),a=t(55574);let d=`
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
`,h={type:"code",code:d,component:function(){let[e,n]=(0,i.useState)(""),{start:t,clear:o}=function(e,n,t={autoInvoke:!1}){let o=(0,i.useRef)(null),r=(0,i.useCallback)((...t)=>{o.current||(o.current=window.setTimeout(()=>{e(t),o.current=null},n))},[n]),l=(0,i.useCallback)(()=>{o.current&&(window.clearTimeout(o.current),o.current=null)},[]);return(0,i.useEffect)(()=>(t.autoInvoke&&r(),l),[l,r]),{start:r,clear:l}}(()=>n((0,a.k)()),1e3);return i.createElement(u.Z,null,i.createElement(s.z,{onClick:t},"Start"),i.createElement(s.z,{onClick:o,color:"red"},"Clear"),i.createElement(Text.x,null,"Random value: ",e))}},m=(0,l.A)(c.us.useTimeout);function f(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const { start, clear } = useTimeout(callback, delay, {\n  autoInvoke: true,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"callback"})," – function that will be called after the timer elapses"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"delay"})," – number of milliseconds the timer should wait before the specified function is executed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options: { autoInvoke }"})," - determines whether the timer should be started on mount, defaults to false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Return object:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"start"})," - starts the timer"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clear"})," – cancels the timer"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useTimeout(\n  callback: (...callbackParams: any[]) => void,\n  delay: number,\n  options?: {\n    autoInvoke: boolean;\n  }\n): {\n  start: (...callbackParams: any[]) => void;\n  clear: () => void;\n};\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=92022)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62090],{84773:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-interval",function(){return t(14467)}])},14467:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var r=t(31085),o=t(71184),s=t(14041),i=t(75390),l=t(93065),c=t(52022);let a={type:"code",code:`
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Stack, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'}>
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`,component:function(){let[e,n]=(0,s.useState)(0),t=function(e,n,{autoInvoke:t=!1}={}){let[r,o]=(0,s.useState)(!1),i=(0,s.useRef)(null),l=(0,s.useRef)(null),c=()=>{o(e=>(e||i.current&&-1!==i.current||(i.current=window.setInterval(l.current,1e3)),!0))},a=()=>{o(!1),window.clearInterval(i.current||-1),i.current=-1};return(0,s.useEffect)(()=>(l.current=e,r&&c(),a),[e,r,1e3]),(0,s.useEffect)(()=>{t&&c()},[]),{start:c,stop:a,toggle:()=>{r?a():c()},active:r}}(()=>n(e=>e+1),0);return(0,s.useEffect)(()=>(t.start(),t.stop),[]),(0,r.jsxs)(i.B,{align:"center",children:[(0,r.jsxs)(l.E,{children:["Page loaded ",(0,r.jsx)("b",{children:e})," seconds ago"]}),(0,r.jsxs)(c.$,{onClick:t.toggle,color:t.active?"red":"teal",children:[t.active?"Stop":"Start"," counting"]})]})}};var d=t(85954),u=t(38215);let h=(0,d.P)(u.XZ.useInterval);function v(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:a}),"\n",(0,r.jsx)(n.h2,{id:"auto-invoke-interval",children:"Auto invoke interval"}),"\n",(0,r.jsxs)(n.p,{children:["To automatically start interval when component is mounted, set ",(0,r.jsx)(n.code,{children:"autoInvoke"})," option to ",(0,r.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@mantine/hooks';\n\nconst interval = useInterval(\n  () => console.log('Interval tick'),\n  1000,\n  { autoInvoke: true }\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@mantine/hooks';\n\nconst { start, stop, toggle, active } = useInterval(fn, interval);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Arguments:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fn"})," – function that is called at each interval tick"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"interval"})," – amount of milliseconds between each tick"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"})," – start interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stop"})," – stop interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"toggle"})," – toggle interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"active"})," – current interval status"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface UseIntervalOptions {\n  /** If set, the interval will start automatically when the component is mounted, `false` by default */\n  autoInvoke?: boolean;\n}\n\nfunction useInterval(\n  fn: () => void,\n  interval: number,\n  options?: UseIntervalOptions\n): {\n  start: () => void;\n  stop: () => void;\n  toggle: () => void;\n  active: boolean;\n};\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(v,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(84773)),_N_E=e.O()}]);
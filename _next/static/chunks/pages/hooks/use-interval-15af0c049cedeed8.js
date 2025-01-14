(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18493],{40098:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-interval",function(){return t(48461)}])},48461:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),r=t(45392),s=t(2784),i=t(65438),l=t(8582),c=t(39629);let a={type:"code",code:`
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
`,component:function(){let[e,n]=(0,s.useState)(0),t=function(e,n,{autoInvoke:t=!1}={}){let[o,r]=(0,s.useState)(!1),i=(0,s.useRef)(null),l=(0,s.useRef)(null),c=()=>{r(e=>(e||i.current&&-1!==i.current||(i.current=window.setInterval(l.current,1e3)),!0))},a=()=>{r(!1),window.clearInterval(i.current||-1),i.current=-1};return(0,s.useEffect)(()=>(l.current=e,o&&c(),a),[e,o,1e3]),(0,s.useEffect)(()=>{t&&c()},[]),{start:c,stop:a,toggle:()=>{o?a():c()},active:o}}(()=>n(e=>e+1),0);return(0,s.useEffect)(()=>(t.start(),t.stop),[]),(0,o.jsxs)(i.K,{align:"center",children:[(0,o.jsxs)(l.x,{children:["Page loaded ",(0,o.jsx)("b",{children:e})," seconds ago"]}),(0,o.jsxs)(c.z,{onClick:t.toggle,color:t.active?"red":"teal",children:[t.active?"Stop":"Start"," counting"]})]})}};var u=t(54078),d=t(15019);let h=(0,u.A)(d.us.useInterval);function v(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"auto-invoke-interval",children:"Auto invoke interval"}),"\n",(0,o.jsxs)(n.p,{children:["To automatically start interval when component is mounted, set ",(0,o.jsx)(n.code,{children:"autoInvoke"})," option to ",(0,o.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@mantine/hooks';\n\nconst interval = useInterval(\n  () => console.log('Interval tick'),\n  1000,\n  { autoInvoke: true }\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@mantine/hooks';\n\nconst { start, stop, toggle, active } = useInterval(fn, interval);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fn"})," – function that is called at each interval tick"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"interval"})," – amount of milliseconds between each tick"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Return object:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"start"})," – start interval"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"stop"})," – stop interval"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toggle"})," – toggle interval"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"active"})," – current interval status"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface UseIntervalOptions {\n  /** If set, the interval will start automatically when the component is mounted, `false` by default */\n  autoInvoke?: boolean;\n}\n\nfunction useInterval(\n  fn: () => void,\n  interval: number,\n  options?: UseIntervalOptions\n): {\n  start: () => void;\n  stop: () => void;\n  toggle: () => void;\n  active: boolean;\n};\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(v,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=40098)}),_N_E=e.O()}]);
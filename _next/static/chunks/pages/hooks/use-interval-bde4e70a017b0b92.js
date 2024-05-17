(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18493],{40098:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-interval",function(){return t(48461)}])},48461:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(52322),i=t(45392),o=t(2784),s=t(65438),c=t(8582),l=t(17115);let a={type:"code",code:`
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
`,component:function(){let[e,n]=(0,o.useState)(0),t=function(e,n){let[t,r]=(0,o.useState)(!1),i=(0,o.useRef)(),s=(0,o.useRef)();(0,o.useEffect)(()=>{s.current=e},[e]);let c=()=>{r(e=>(e||i.current||(i.current=window.setInterval(s.current,1e3)),!0))},l=()=>{r(!1),window.clearInterval(i.current),i.current=void 0};return{start:c,stop:l,toggle:()=>{t?l():c()},active:t}}(()=>n(e=>e+1),0);return(0,o.useEffect)(()=>(t.start(),t.stop),[]),(0,r.jsxs)(s.K,{align:"center",children:[(0,r.jsxs)(c.x,{children:["Page loaded ",(0,r.jsx)("b",{children:e})," seconds ago"]}),(0,r.jsxs)(l.z,{onClick:t.toggle,color:t.active?"red":"teal",children:[t.active?"Stop":"Start"," counting"]})]})}};var d=t(25071),u=t(15019);let h=(0,d.A)(u.us.useInterval);function f(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:a}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@mantine/hook';\n\nconst { start, stop, toggle, active } = useInterval(fn, interval);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Arguments:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fn"})," – function that is called at each interval tick"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"interval"})," – amount of milliseconds between each tick"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"})," – start interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stop"})," – stop interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"toggle"})," – toggle interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"active"})," – current interval status"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useInterval(\n  fn: () => void,\n  interval: number\n): {\n  start: () => void;\n  stop: () => void;\n  toggle: () => void;\n  active: boolean;\n};\n"})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(f,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=40098)}),_N_E=e.O()}]);
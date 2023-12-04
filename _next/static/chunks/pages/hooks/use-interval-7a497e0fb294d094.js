(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2044],{77308:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-interval",function(){return t(97284)}])},97284:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(24246),c=t(71670),o=t(3916),i=t(30289),s=t(27378),l=t(27884),Text=t(26569),a=t(8671);let u=`
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
`,d={type:"code",code:u,component:function(){let[e,n]=(0,s.useState)(0),t=function(e,n){let[t,r]=(0,s.useState)(!1),c=(0,s.useRef)(),o=(0,s.useRef)();(0,s.useEffect)(()=>{o.current=e},[e]);let i=()=>{r(e=>(e||c.current||(c.current=window.setInterval(o.current,1e3)),!0))},l=()=>{r(!1),window.clearInterval(c.current),c.current=void 0};return{start:i,stop:l,toggle:()=>{t?l():i()},active:t}}(()=>n(e=>e+1),0);return(0,s.useEffect)(()=>(t.start(),t.stop),[]),s.createElement(l.K,{align:"center"},s.createElement(Text.x,null,"Page loaded ",s.createElement("b",null,e)," seconds ago"),s.createElement(a.z,{onClick:t.toggle,color:t.active?"red":"teal"},t.active?"Stop":"Start"," counting"))}},h=(0,o.A)(i.us.useInterval);function f(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const { start, stop, toggle, active } = useInterval(fn, interval);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Arguments:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fn"})," – function that is called at each interval tick"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"interval"})," – amount of milliseconds between each tick"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"})," – start interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stop"})," – stop interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"toggle"})," – toggle interval"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"active"})," – current interval status"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useInterval(\n  fn: () => void,\n  interval: number\n): {\n  start: () => void;\n  stop: () => void;\n  toggle: () => void;\n  active: boolean;\n};\n"})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=77308)}),_N_E=e.O()}]);
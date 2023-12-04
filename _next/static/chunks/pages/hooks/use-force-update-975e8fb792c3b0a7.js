(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8398],{57180:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-force-update",function(){return t(51695)}])},51695:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(24246),r=t(71670),c=t(3916),u=t(30289),i=t(27378),d=t(22971),Text=t(26569),s=t(8671),a=t(85804),p=t(55574);let l=`
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
`,f={type:"code",code:l,component:function(){let e=(0,a.N)();return i.createElement(d.Z,{justify:"center"},i.createElement(Text.x,null,(0,p.k)()),i.createElement(s.z,{onClick:e},"Force update"))}},h=(0,c.A)(u.us.useForceUpdate);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-force-update"})," returns a function, which when called rerenders the component:"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useForceUpdate(): () => void;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=57180)}),_N_E=e.O()}]);
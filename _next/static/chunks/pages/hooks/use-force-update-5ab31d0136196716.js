(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28398],{35691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-force-update",function(){return t(58686)}])},58686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(52322),r=t(45392),c=t(2784),u=t(93010),Text=t(8582),i=t(17115),d=t(59114),s=t(73533);let a=`
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
`,p={type:"code",code:a,component:function(){let e=(0,d.N)();return c.createElement(u.Z,{justify:"center"},c.createElement(Text.x,null,(0,s.k)()),c.createElement(i.z,{onClick:e},"Force update"))}};var l=t(79016),f=t(33638);let h=(0,l.A)(f.us.useForceUpdate);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-force-update"})," returns a function, which when called rerenders the component:"]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useForceUpdate(): () => void;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=35691)}),_N_E=e.O()}]);
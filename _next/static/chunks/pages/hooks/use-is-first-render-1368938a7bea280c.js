(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80813],{2881:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-is-first-render",function(){return t(83591)}])},83591:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(52322),s=t(45392),i=t(38944),o=t(25071),c=t(15019);let u=(0,o.A)(c.us.useIsFirstRender);function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useIsFirstRender"})," returns true if the component is being rendered for the first time,\notherwise it returns false."]}),"\n",(0,r.jsx)(t,{data:i.C}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useIsFirstRender(): boolean;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(d,{...e})})}},38944:function(e,n,t){"use strict";t.d(n,{C:function(){return c}});var r=t(52322),s=t(2784),i=t(8582),o=t(39629);let c={type:"code",component:function(){let[e,n]=(0,s.useState)(0),t=function(){let e=(0,s.useRef)(!0);return!0===e.current?(e.current=!1,!0):e.current}();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.x,{children:["Is first render:"," ",(0,r.jsx)(i.x,{span:!0,c:t?"teal":"red",children:t?"Yes":"No!"})]}),(0,r.jsxs)(o.z,{onClick:()=>n(e=>e+1),mt:"sm",children:["Rerendered ",e," times, click to rerender"]})]})},code:`
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { useIsFirstRender } from '@mantine/hooks';

function Demo() {
  const [counter, setCounter] = useState(0);
  const firstRender = useIsFirstRender();
  return (
    <div>
      <Text>
        Is first render:{' '}
        <Text span c={firstRender ? 'teal' : 'red'}>
          {firstRender ? 'Yes' : 'No!'}
        </Text>
      </Text>
      <Button onClick={() => setCounter((c) => c + 1)} mt="sm">
        Rerendered {counter} times, click to rerender
      </Button>
    </div>
  );
}
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=2881)}),_N_E=e.O()}]);
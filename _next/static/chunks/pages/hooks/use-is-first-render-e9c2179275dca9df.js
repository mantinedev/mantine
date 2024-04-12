(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80813],{2881:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-is-first-render",function(){return n(83591)}])},83591:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52322),s=n(45392),o=n(38944),i=n(79016),c=n(33638);let u=(0,i.A)(c.us.useIsFirstRender);function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useIsFirstRender"})," returns true if the component is being rendered for the first time,\notherwise it returns false."]}),"\n",(0,r.jsx)(n,{data:o.C}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useIsFirstRender(): boolean;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(d,{...e})})}},38944:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(2784),Text=n(8582),s=n(17115);let o=`
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
`,i={type:"code",component:function(){let[e,t]=(0,r.useState)(0),n=function(){let e=(0,r.useRef)(!0);return!0===e.current?(e.current=!1,!0):e.current}();return r.createElement("div",null,r.createElement(Text.x,null,"Is first render:"," ",r.createElement(Text.x,{span:!0,c:n?"teal":"red"},n?"Yes":"No!")),r.createElement(s.z,{onClick:()=>t(e=>e+1),mt:"sm"},"Rerendered ",e," times, click to rerender"))},code:o}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=2881)}),_N_E=e.O()}]);
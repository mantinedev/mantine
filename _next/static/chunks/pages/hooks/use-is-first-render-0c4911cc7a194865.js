(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26849],{57637:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-is-first-render",function(){return t(56280)}])},56280:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var n=t(31085),s=t(71184),i=t(27318),o=t(85954),c=t(38215);let d=(0,o.P)(c.XZ.useIsFirstRender);function u(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"useIsFirstRender"})," returns true if the component is being rendered for the first time,\notherwise it returns false."]}),"\n",(0,n.jsx)(t,{data:i.L}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"function useIsFirstRender(): boolean;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(d,{...e,children:(0,n.jsx)(u,{...e})})}},27318:(e,r,t)=>{"use strict";t.d(r,{L:()=>c});var n=t(31085),s=t(14041),i=t(93065),o=t(52022);let c={type:"code",component:function(){let[e,r]=(0,s.useState)(0),t=function(){let e=(0,s.useRef)(!0);return!0===e.current?(e.current=!1,!0):e.current}();return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.E,{children:["Is first render:"," ",(0,n.jsx)(i.E,{span:!0,c:t?"teal":"red",children:t?"Yes":"No!"})]}),(0,n.jsxs)(o.$,{onClick:()=>r(e=>e+1),mt:"sm",children:["Rerendered ",e," times, click to rerender"]})]})},code:`
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
`}}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(57637)),_N_E=e.O()}]);
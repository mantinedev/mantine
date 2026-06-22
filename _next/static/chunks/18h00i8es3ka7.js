(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let s={};for(var n in e)t(s,n,{get:e[n],enumerable:!0});return r||t(s,Symbol.toStringTag,{value:"Module"}),s}])},798371,e=>{"use strict";var t=e.i(648863),r=e.i(191788),s=e.i(485108),n=e.i(883364),i=e.i(391398);let o={type:"code",component:function(){let e,[t,o]=(0,r.useState)(0),c=!0===(e=(0,r.useRef)(!0)).current?(e.current=!1,!0):e.current;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.Text,{children:["Is first render:"," ",(0,i.jsx)(n.Text,{span:!0,c:c?"teal":"red",children:c?"Yes":"No!"})]}),(0,i.jsxs)(s.Button,{onClick:()=>o(e=>e+1),mt:"sm",children:["Rerendered ",t," times, click to rerender"]})]})},code:`
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
`};var c=(0,t.__exportAll)({usage:()=>o});e.s(["UseIsFirstRenderDemos",0,c],798371)},777764,e=>{"use strict";var t=e.i(391398),r=e.i(38856),s=e.i(798371);e.i(603441);var n=e.i(62558);e.i(457450);var i=e.i(418026);let o=(0,n.Layout)(i.MDX_DATA.useIsFirstRender);function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.useMDXComponents)(),...e.components},{Demo:i}=n;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useIsFirstRender"})," hook returns ",(0,t.jsx)(n.code,{children:"true"})," if the component is being rendered for the first time;\notherwise, it returns ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(i,{data:s.UseIsFirstRenderDemos.usage}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useIsFirstRender(): boolean;\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})})}])},799108,(e,t,r)=>{let s="/hooks/use-is-first-render";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(777764)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
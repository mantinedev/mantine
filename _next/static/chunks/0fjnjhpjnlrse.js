(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},238433,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(648863),r=e.i(485108),i=e.i(725695),c=e.i(883364),s=e.i(57807),u=e.i(266181);let d={type:"code",code:`
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
`,component:function(){let e=(0,u.useForceUpdate)();return(0,t.jsxs)(i.Group,{justify:"center",children:[(0,t.jsx)(c.Text,{children:(0,s.randomId)()}),(0,t.jsx)(r.Button,{onClick:e,children:"Force update"})]})}};var a=(0,n.__exportAll)({usage:()=>d});e.i(603441);var l=e.i(62558);e.i(457450);var p=e.i(418026);let h=(0,l.Layout)(p.MDX_DATA.useForceUpdate);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.useMDXComponents)(),...e.components},{Demo:r}=n;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"use-force-update"})," hook returns a function that, when called, rerenders the component:"]}),"\n",(0,t.jsx)(r,{data:a.usage}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useForceUpdate(): () => void;\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(m,{...e})})}],238433)},766030,(e,t,o)=>{let n="/hooks/use-force-update";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(238433)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
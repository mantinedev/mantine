(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19643],{27303:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-document-title",function(){return n(55651)}])},55651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var o=n(31085),i=n(71184),r=n(14041),s=n(52022),c=n(35033),d=n(63297);let l={type:"code",code:`
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`,component:function(){let[e,t]=(0,r.useState)("");return(0,c.r)(e),(0,o.jsx)(s.$,{onClick:()=>t((0,d.z)()),children:"Set document title to random id"})},centered:!0};var u=n(85954),a=n(38215);let h=(0,u.P)(a.XZ.useDocumentTitle);function m(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-document-title"})," sets ",(0,o.jsx)(t.code,{children:"document.title"})," property with ",(0,o.jsx)(t.code,{children:"React.useLayoutEffect"})," hook. Hook is not called during server side rendering.\nUse this hook with client only applications, for isomorphic use more advanced options, for example, ",(0,o.jsx)(t.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Call hook with a string that should be set as document title inside any component.\nThe hook is triggered every time value changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useDocumentTitle(title: string): void;\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}},35033:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});var o=n(89571);function i(e){(0,o.o)(()=>{"string"==typeof e&&e.trim().length>0&&(document.title=e.trim())},[e])}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(27303)),_N_E=e.O()}]);
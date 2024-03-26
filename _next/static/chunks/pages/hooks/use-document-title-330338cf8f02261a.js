(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75281],{94891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-document-title",function(){return n(92204)}])},92204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(52322),i=n(45392),r=n(2784),c=n(17115),s=n(24606),u=n(73533);let d=`
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
}`,l={type:"code",code:d,component:function(){let[e,t]=(0,r.useState)("");return(0,s.j)(e),r.createElement(c.z,{onClick:()=>t((0,u.k)())},"Set document title to random id")},centered:!0};var a=n(79016),h=n(33638);let m=(0,a.A)(h.us.useDocumentTitle);function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-document-title"})," sets ",(0,o.jsx)(t.code,{children:"document.title"})," property with ",(0,o.jsx)(t.code,{children:"React.useLayoutEffect"})," hook. Hook is not called during server side rendering.\nUse this hook with client only applications, for isomorphic use more advanced options, for example, ",(0,o.jsx)(t.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Call hook with a string that should be set as document title inside any component.\nThe hook is triggered every time value changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useDocumentTitle(title: string): void;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(p,{...e})})}},24606:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var o=n(64261);function i(e){(0,o.Y)(()=>{"string"==typeof e&&e.trim().length>0&&(document.title=e.trim())},[e])}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=94891)}),_N_E=e.O()}]);
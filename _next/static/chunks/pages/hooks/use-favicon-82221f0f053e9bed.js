(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24224],{22155:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-favicon",function(){return t(68975)}])},68975:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var i=t(52322),o=t(45392),c=t(2784),r=t(93010),s=t(39629),a=t(64261);let u={ico:"image/x-icon",png:"image/png",svg:"image/svg+xml",gif:"image/gif"},d={type:"code",component:function(){let[e,n]=(0,c.useState)("https://mantine.dev/favicon.svg");return!function(e){let n=(0,c.useRef)(null);(0,a.Y)(()=>{if(!e)return;if(!n.current){document.querySelectorAll('link[rel*="icon"]').forEach(e=>document.head.removeChild(e));let e=document.createElement("link");e.rel="shortcut icon",n.current=e,document.querySelector("head").appendChild(e)}let t=e.split(".");n.current.setAttribute("type",u[t[t.length-1].toLowerCase()]),n.current.setAttribute("href",e)},[e])}(e),(0,i.jsxs)(r.Z,{justify:"center",children:[(0,i.jsx)(s.z,{onClick:()=>n("https://mantine.dev/favicon.svg"),children:"Mantine favicon"}),(0,i.jsx)(s.z,{onClick:()=>n("https://ui.mantine.dev/favicon.svg"),children:"Mantine UI favicon"})]})},code:`
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');
  const setMantineUIFavicon = () => setFavicon('https://ui.mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
      <Button onClick={setMantineUIFavicon}>Mantine UI favicon</Button>
    </Group>
  );
}
`};var l=t(54078),h=t(15019);let f=(0,l.A)(h.us.useFavicon);function v(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-favicon"})," appends ",(0,i.jsx)(n.code,{children:"<link />"})," element to head component with given favicon in ",(0,i.jsx)(n.code,{children:"useLayoutEffect"}),".\nThe hook is not called during server side rendering."]}),"\n",(0,i.jsxs)(n.p,{children:["Call hook with a favicon URL (supported formats: ",(0,i.jsx)(n.code,{children:".ico"}),", ",(0,i.jsx)(n.code,{children:".png"}),", ",(0,i.jsx)(n.code,{children:".svg"})," and ",(0,i.jsx)(n.code,{children:".gif"}),") that should be set as favicon.\nThe hook is triggered every time the URL changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(t,{data:d}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useFavicon(url: string): void;\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(f,{...e,children:(0,i.jsx)(v,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=22155)}),_N_E=e.O()}]);
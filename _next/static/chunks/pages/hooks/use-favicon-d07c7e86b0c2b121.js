(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12651],{89873:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-favicon",function(){return t(89190)}])},89190:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var i=t(31085),o=t(71184),c=t(14041),s=t(56051),r=t(52022),a=t(89571);let d={ico:"image/x-icon",png:"image/png",svg:"image/svg+xml",gif:"image/gif"},l={type:"code",component:function(){let[e,n]=(0,c.useState)("https://mantine.dev/favicon.svg");return!function(e){let n=(0,c.useRef)(null);(0,a.o)(()=>{if(!e)return;if(!n.current){document.querySelectorAll('link[rel*="icon"]').forEach(e=>document.head.removeChild(e));let e=document.createElement("link");e.rel="shortcut icon",n.current=e,document.querySelector("head").appendChild(e)}let t=e.split(".");n.current.setAttribute("type",d[t[t.length-1].toLowerCase()]),n.current.setAttribute("href",e)},[e])}(e),(0,i.jsxs)(s.Y,{justify:"center",children:[(0,i.jsx)(r.$,{onClick:()=>n("https://mantine.dev/favicon.svg"),children:"Mantine favicon"}),(0,i.jsx)(r.$,{onClick:()=>n("https://ui.mantine.dev/favicon.svg"),children:"Mantine UI favicon"})]})},code:`
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
`};var u=t(85954),h=t(38215);let v=(0,u.P)(h.XZ.useFavicon);function f(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-favicon"})," appends ",(0,i.jsx)(n.code,{children:"<link />"})," element to head component with given favicon in ",(0,i.jsx)(n.code,{children:"useLayoutEffect"}),".\nThe hook is not called during server side rendering."]}),"\n",(0,i.jsxs)(n.p,{children:["Call hook with a favicon URL (supported formats: ",(0,i.jsx)(n.code,{children:".ico"}),", ",(0,i.jsx)(n.code,{children:".png"}),", ",(0,i.jsx)(n.code,{children:".svg"})," and ",(0,i.jsx)(n.code,{children:".gif"}),") that should be set as favicon.\nThe hook is triggered every time the URL changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(t,{data:l}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useFavicon(url: string): void;\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(v,{...e,children:(0,i.jsx)(f,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(89873)),_N_E=e.O()}]);
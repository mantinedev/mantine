(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24224],{22155:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-favicon",function(){return t(68975)}])},68975:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(52322),o=t(45392),c=t(2784),r=t(93010),s=t(17115),a=t(64261);let u={ico:"image/x-icon",png:"image/png",svg:"image/svg+xml",gif:"image/gif"},d=`
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}
`,l={type:"code",component:function(){let[e,n]=(0,c.useState)("https://mantine.dev/favicon.svg");return!function(e){let n=(0,c.useRef)();(0,a.Y)(()=>{if(!e)return;if(!n.current){let e=document.querySelectorAll('link[rel*="icon"]');e.forEach(e=>document.head.removeChild(e));let t=document.createElement("link");t.rel="shortcut icon",n.current=t,document.querySelector("head").appendChild(t)}let t=e.split(".");n.current.setAttribute("type",u[t[t.length-1].toLowerCase()]),n.current.setAttribute("href",e)},[e])}(e),(0,i.jsxs)(r.Z,{justify:"center",children:[(0,i.jsx)(s.z,{onClick:()=>n("https://twitter.com/favicon.ico"),children:"Twitter favicon"}),(0,i.jsx)(s.z,{onClick:()=>n("https://mantine.dev/favicon.svg"),children:"Mantine favicon"})]})},code:d};var h=t(79016),f=t(33638);let v=(0,h.A)(f.us.useFavicon);function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-favicon"})," appends ",(0,i.jsx)(n.code,{children:"<link />"})," element to head component with given favicon in ",(0,i.jsx)(n.code,{children:"useLayoutEffect"}),".\nThe hook is not called during server side rendering."]}),"\n",(0,i.jsxs)(n.p,{children:["Call hook with a favicon URL (supported formats: ",(0,i.jsx)(n.code,{children:".ico"}),", ",(0,i.jsx)(n.code,{children:".png"}),", ",(0,i.jsx)(n.code,{children:".svg"})," and ",(0,i.jsx)(n.code,{children:".gif"}),") that should be set as favicon.\nThe hook is triggered every time the URL changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(t,{data:l}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useFavicon(url: string): void;\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(v,{...e,children:(0,i.jsx)(p,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=22155)}),_N_E=e.O()}]);
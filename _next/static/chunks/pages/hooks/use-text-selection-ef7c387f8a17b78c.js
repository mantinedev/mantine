(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37697],{2967:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-text-selection",function(){return n(82937)}])},82937:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(31085),i=n(71184),c=n(14041),r=n(4755);let s={type:"code",component:function(){let e=function(){let e=(0,r.C)(),[t,n]=(0,c.useState)(null),o=()=>{n(document.getSelection()),e()};return(0,c.useEffect)(()=>(n(document.getSelection()),document.addEventListener("selectionchange",o),()=>document.removeEventListener("selectionchange",o)),[]),t}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Select some text here or anywhere on the page and it will be displayed below"}),(0,o.jsxs)("div",{children:["Selected text: ",(0,o.jsx)("b",{children:e?.toString()})]})]})},code:`
import { useTextSelection } from '@mantine/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`};var l=n(85954),d=n(38215);let u=(0,l.P)(d.XZ.useTextSelection);function h(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-text-selection"})," returns current text selection:"]}),"\n",(0,o.jsx)(n,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useTextSelection(): Selection | null;\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(h,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(2967)),_N_E=e.O()}]);
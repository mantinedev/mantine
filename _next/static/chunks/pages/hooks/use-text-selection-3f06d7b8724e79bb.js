(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22346],{81200:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-text-selection",function(){return n(85637)}])},85637:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n(52322),i=n(45392),c=n(2784),r=n(59114);let s={type:"code",component:function(){let e=function(){let e=(0,r.N)(),[t,n]=(0,c.useState)(null),o=()=>{n(document.getSelection()),e()};return(0,c.useEffect)(()=>(n(document.getSelection()),document.addEventListener("selectionchange",o),()=>document.removeEventListener("selectionchange",o)),[]),t}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Select some text here or anywhere on the page and it will be displayed below"}),(0,o.jsxs)("div",{children:["Selected text: ",(0,o.jsx)("b",{children:e?.toString()})]})]})},code:`
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
`};var l=n(54078),d=n(15019);let u=(0,l.A)(d.us.useTextSelection);function h(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-text-selection"})," returns current text selection:"]}),"\n",(0,o.jsx)(n,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useTextSelection(): Selection | null;\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(h,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=81200)}),_N_E=e.O()}]);
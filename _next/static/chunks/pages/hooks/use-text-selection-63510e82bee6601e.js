(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22346],{81200:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-text-selection",function(){return n(85637)}])},85637:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(52322),i=n(45392),c=n(2784),l=n(59114);let r=`
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
`,s={type:"code",component:function(){let e=function(){let e=(0,l.N)(),[t,n]=(0,c.useState)(null),o=()=>{n(document.getSelection()),e()};return(0,c.useEffect)(()=>(n(document.getSelection()),document.addEventListener("selectionchange",o),()=>document.removeEventListener("selectionchange",o)),[]),t}();return c.createElement(c.Fragment,null,c.createElement("div",null,"Select some text here or anywhere on the page and it will be displayed below"),c.createElement("div",null,"Selected text: ",c.createElement("b",null,e?.toString())))},code:r};var u=n(79016),d=n(33638);let a=(0,u.A)(d.us.useTextSelection);function h(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-text-selection"})," returns current text selection:"]}),"\n",(0,o.jsx)(n,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useTextSelection(): Selection | null;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=81200)}),_N_E=e.O()}]);
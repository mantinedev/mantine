(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8707],{19748:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-text-selection",function(){return n(12358)}])},12358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(24246),i=n(71670),c=n(3916),l=n(30289),r=n(27378),s=n(85804);let u=`
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
`,d={type:"code",component:function(){let e=function(){let e=(0,s.N)(),[t,n]=(0,r.useState)(null),o=()=>{n(document.getSelection()),e()};return(0,r.useEffect)(()=>(n(document.getSelection()),document.addEventListener("selectionchange",o),()=>document.removeEventListener("selectionchange",o)),[]),t}();return r.createElement(r.Fragment,null,r.createElement("div",null,"Select some text here or anywhere on the page and it will be displayed below"),r.createElement("div",null,"Selected text: ",r.createElement("b",null,e?.toString())))},code:u},a=(0,c.A)(l.us.useTextSelection);function h(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-text-selection"})," returns current text selection:"]}),"\n",(0,o.jsx)(n,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useTextSelection(): Selection | null;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=19748)}),_N_E=e.O()}]);
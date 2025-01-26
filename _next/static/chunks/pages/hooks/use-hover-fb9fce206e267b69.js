(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26236],{40573:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hover",function(){return t(57584)}])},57584:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(52322),o=t(45392),s=t(8582),u=t(2784);let i={type:"code",component:function(){let{hovered:e,ref:n}=function(){let[e,n]=(0,u.useState)(!1),t=(0,u.useRef)(null),r=(0,u.useCallback)(()=>n(!0),[]),o=(0,u.useCallback)(()=>n(!1),[]);return(0,u.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",o),()=>{e?.removeEventListener("mouseenter",r),e?.removeEventListener("mouseleave",o)}},[t.current]),{ref:t,hovered:e}}();return(0,r.jsx)("div",{ref:n,style:{height:60,backgroundColor:"var(--mantine-color-blue-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(s.x,{children:e?"I am hovered":"Put mouse over me please"})})},code:`
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`};var c=t(54078),l=t(15019);let d=(0,c.A)(l.us.useHover);function a(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:i}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useHover<T extends HTMLElement = HTMLDivElement>(): {\n  ref: React.RefObject<T>;\n  hovered: boolean;\n};\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=40573)}),_N_E=e.O()}]);
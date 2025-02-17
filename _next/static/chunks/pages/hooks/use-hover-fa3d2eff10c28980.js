(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74173],{64653:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hover",function(){return t(95577)}])},95577:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var r=t(31085),o=t(71184),s=t(93065),i=t(14041);let u={type:"code",component:function(){let{hovered:e,ref:n}=function(){let[e,n]=(0,i.useState)(!1),t=(0,i.useRef)(null),r=(0,i.useCallback)(()=>n(!0),[]),o=(0,i.useCallback)(()=>n(!1),[]);return(0,i.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",o),()=>{e?.removeEventListener("mouseenter",r),e?.removeEventListener("mouseleave",o)}},[t.current]),{ref:t,hovered:e}}();return(0,r.jsx)("div",{ref:n,style:{height:60,backgroundColor:"var(--mantine-color-blue-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(s.E,{children:e?"I am hovered":"Put mouse over me please"})})},code:`
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`};var l=t(85954),c=t(38215);let d=(0,l.P)(c.XZ.useHover);function a(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useHover<T extends HTMLElement = HTMLDivElement>(): {\n  ref: React.RefObject<T>;\n  hovered: boolean;\n};\n"})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(64653)),_N_E=e.O()}]);
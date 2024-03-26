(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26236],{40573:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hover",function(){return t(57584)}])},57584:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(52322),o=t(45392),u=t(2784),s=t(58898),Text=t(8582);let i=`
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`,c={type:"code",component:function(){let{hovered:e,ref:n}=function(){let[e,n]=(0,u.useState)(!1),t=(0,u.useRef)(null),r=(0,u.useCallback)(()=>n(!0),[]),o=(0,u.useCallback)(()=>n(!1),[]);return(0,u.useEffect)(()=>{if(t.current)return t.current.addEventListener("mouseenter",r),t.current.addEventListener("mouseleave",o),()=>{t.current?.removeEventListener("mouseenter",r),t.current?.removeEventListener("mouseleave",o)}},[]),{ref:t,hovered:e}}();return u.createElement("div",{ref:n,style:{height:(0,s.h)(60),backgroundColor:"var(--mantine-color-blue-light)",display:"flex",alignItems:"center",justifyContent:"center"}},u.createElement(Text.x,null,e?"I am hovered":"Put mouse over me please"))},code:i};var l=t(79016),a=t(33638);let d=(0,l.A)(a.us.useHover);function f(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useHover<T extends HTMLElement = HTMLDivElement>(): {\n  ref: React.MutableRefObject<T>;\n  hovered: boolean;\n};\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(f,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=40573)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6236],{11093:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hover",function(){return t(81843)}])},81843:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(24246),o=t(71670),u=t(3916),s=t(30289),i=t(27378),c=t(71078),Text=t(26569);let l=`
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`,a={type:"code",component:function(){let{hovered:e,ref:n}=function(){let[e,n]=(0,i.useState)(!1),t=(0,i.useRef)(null),r=(0,i.useCallback)(()=>n(!0),[]),o=(0,i.useCallback)(()=>n(!1),[]);return(0,i.useEffect)(()=>{if(t.current)return t.current.addEventListener("mouseenter",r),t.current.addEventListener("mouseleave",o),()=>{t.current?.removeEventListener("mouseenter",r),t.current?.removeEventListener("mouseleave",o)}},[]),{ref:t,hovered:e}}();return i.createElement("div",{ref:n,style:{height:(0,c.h)(60),backgroundColor:"var(--mantine-color-blue-light)",display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement(Text.x,null,e?"I am hovered":"Put mouse over me please"))},code:l},d=(0,u.A)(s.us.useHover);function f(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:a}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useHover<T extends HTMLElement = HTMLDivElement>(): {\n  ref: React.MutableRefObject<T>;\n  hovered: boolean;\n};\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=11093)}),_N_E=e.O()}]);
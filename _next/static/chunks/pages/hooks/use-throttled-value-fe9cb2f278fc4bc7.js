(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{23321:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-value",function(){return r(1226)}])},1226:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(31085),u=r(71184),c=r(7171),o=r(85954),l=r(38215);let s=(0,o.P)(l.XZ.useThrottledValue);function a(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,u.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useThrottledValue"})," accepts a value and a wait time in milliseconds.\nIt returns a throttled value that cannot change more than once every ",(0,n.jsx)(t.code,{children:"wait"})," milliseconds."]}),"\n",(0,n.jsx)(r,{data:c.e}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useThrottledValue<T>(value: T, wait: number): T;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})})}},7171:(e,t,r)=>{"use strict";r.d(t,{e:()=>s});var n=r(31085),u=r(14041),c=r(90275),o=r(93065),l=r(20685);let s={type:"code",component:function(){let[e,t]=(0,u.useState)(""),r=function(e,t){let[r,n]=(0,u.useState)(e),c=(0,u.useRef)(e),[o,s]=(0,l.Z)(n,1e3);return(0,u.useEffect)(()=>{e!==c.current&&(c.current=e,o(e))},[o,e]),(0,u.useEffect)(()=>s,[]),r}(e,0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.k,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,n.jsxs)(o.E,{children:["Throttled value: ",r||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledValue } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},20685:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c,d:()=>o});var n=r(14041),u=r(49435);function c(e,t){let r=(0,u.c)(e),c=(0,n.useRef)(null),o=(0,n.useRef)(null),l=(0,n.useRef)(!0),s=(0,n.useRef)(t),a=(0,n.useRef)(-1),i=(0,n.useCallback)((...e)=>{r(...e),c.current=e,o.current=e,l.current=!1},[r]),d=(0,n.useCallback)(()=>{c.current&&c.current!==o.current?(i(...c.current),a.current=window.setTimeout(d,s.current)):l.current=!0},[i]),h=(0,n.useCallback)((...e)=>{l.current?(i(...e),a.current=window.setTimeout(d,s.current)):c.current=e},[i,d]);return(0,n.useEffect)(()=>{s.current=t},[t]),[h,()=>window.clearTimeout(a.current)]}function o(e,t){return c(e,t)[0]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(23321)),_N_E=e.O()}]);
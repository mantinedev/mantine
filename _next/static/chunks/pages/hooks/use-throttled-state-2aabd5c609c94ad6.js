(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3667],{39401:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-state",function(){return r(31278)}])},31278:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(31085),u=r(71184),o=r(8607),c=r(85954),l=r(38215);let s=(0,c.P)(l.XZ.useThrottledState);function a(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,u.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useThrottledState"})," works similar to ",(0,n.jsx)(t.code,{children:"useState"})," but throttles the state updates.\n",(0,n.jsx)(t.code,{children:"setThrottledState"})," handler in the example below will be called at most once every 1000ms."]}),"\n",(0,n.jsx)(r,{data:o.g}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"function useThrottledState<T = any>(\n  defaultValue: T,\n  wait: number\n): readonly [T, (newValue: React.SetStateAction<T>) => void];\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})})}},8607:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});var n=r(31085),u=r(90275),o=r(93065),c=r(14041),l=r(20685);let s={type:"code",component:function(){let[e,t]=function(e,t){let[r,n]=(0,c.useState)(""),[u,o]=(0,l.Z)(n,1e3);return(0,c.useEffect)(()=>o,[]),[r,u]}(0,0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.k,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,n.jsxs)(o.E,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledState } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},20685:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o,d:()=>c});var n=r(14041),u=r(49435);function o(e,t){let r=(0,u.c)(e),o=(0,n.useRef)(null),c=(0,n.useRef)(null),l=(0,n.useRef)(!0),s=(0,n.useRef)(t),a=(0,n.useRef)(-1),d=(0,n.useCallback)((...e)=>{r(...e),o.current=e,c.current=e,l.current=!1},[r]),i=(0,n.useCallback)(()=>{o.current&&o.current!==c.current?(d(...o.current),a.current=window.setTimeout(i,s.current)):l.current=!0},[d]),h=(0,n.useCallback)((...e)=>{l.current?(d(...e),a.current=window.setTimeout(i,s.current)):o.current=e},[d,i]);return(0,n.useEffect)(()=>{s.current=t},[t]),[h,()=>window.clearTimeout(a.current)]}function c(e,t){return o(e,t)[0]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(39401)),_N_E=e.O()}]);
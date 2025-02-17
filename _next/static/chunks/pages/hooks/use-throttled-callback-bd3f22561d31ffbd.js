(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72149],{20451:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-callback",function(){return n(48828)}])},48828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(31085),l=n(71184),c=n(45675),u=n(85954),o=n(38215);let a=(0,u.P)(o.XZ.useThrottledCallback);function s(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledCallback"})," accepts a function and a wait time in milliseconds.\nIt returns a throttled version of the function that will only be called at most once every ",(0,r.jsx)(t.code,{children:"wait"})," milliseconds."]}),"\n",(0,r.jsx)(n,{data:c.A}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  wait: number\n): (...args: Parameters<T>) => void;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(s,{...e})})}},45675:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(31085),l=n(14041),c=n(90275),u=n(93065),o=n(20685);let a={type:"code",component:function(){let[e,t]=(0,l.useState)(""),n=(0,o.d)(e=>t(e),1e3);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.k,{placeholder:"Search",onChange:e=>n(e.currentTarget.value)}),(0,r.jsxs)(u.E,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '\u2013'}</Text>
    </>
  );
}
`}},20685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,d:()=>u});var r=n(14041),l=n(49435);function c(e,t){let n=(0,l.c)(e),c=(0,r.useRef)(null),u=(0,r.useRef)(null),o=(0,r.useRef)(!0),a=(0,r.useRef)(t),s=(0,r.useRef)(-1),i=(0,r.useCallback)((...e)=>{n(...e),c.current=e,u.current=e,o.current=!1},[n]),d=(0,r.useCallback)(()=>{c.current&&c.current!==u.current?(i(...c.current),s.current=window.setTimeout(d,a.current)):o.current=!0},[i]),h=(0,r.useCallback)((...e)=>{o.current?(i(...e),s.current=window.setTimeout(d,a.current)):c.current=e},[i,d]);return(0,r.useEffect)(()=>{a.current=t},[t]),[h,()=>window.clearTimeout(s.current)]}function u(e,t){return c(e,t)[0]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(20451)),_N_E=e.O()}]);
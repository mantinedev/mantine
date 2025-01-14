(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53637],{18822:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-callback",function(){return n(7630)}])},7630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),u=n(45392),c=n(74938),o=n(54078),l=n(15019);let a=(0,o.A)(l.us.useThrottledCallback);function s(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,u.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledCallback"})," accepts a function and a wait time in milliseconds.\nIt returns a throttled version of the function that will only be called at most once every ",(0,r.jsx)(t.code,{children:"wait"})," milliseconds."]}),"\n",(0,r.jsx)(n,{data:c.H}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  wait: number\n): (...args: Parameters<T>) => void;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(s,{...e})})}},74938:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});var r=n(52322),u=n(2784),c=n(74770),o=n(8582),l=n(91535);let a={type:"code",component:function(){let[e,t]=(0,u.useState)(""),n=(0,l.z)(e=>t(e),1e3);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.o,{placeholder:"Search",onChange:e=>n(e.currentTarget.value)}),(0,r.jsxs)(o.x,{children:["Throttled value: ",e||"–"]})]})},code:`
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
`}},91535:function(e,t,n){"use strict";n.d(t,{E:function(){return c},z:function(){return o}});var r=n(2784),u=n(7966);function c(e,t){let n=(0,u.W)(e),c=(0,r.useRef)(null),o=(0,r.useRef)(null),l=(0,r.useRef)(!0),a=(0,r.useRef)(t),s=(0,r.useRef)(-1),i=(0,r.useCallback)((...e)=>{n(...e),c.current=e,o.current=e,l.current=!1},[n]),d=(0,r.useCallback)(()=>{c.current&&c.current!==o.current?(i(...c.current),s.current=window.setTimeout(d,a.current)):l.current=!0},[i]),h=(0,r.useCallback)((...e)=>{l.current?(i(...e),s.current=window.setTimeout(d,a.current)):c.current=e},[i,d]);return(0,r.useEffect)(()=>{a.current=t},[t]),[h,()=>window.clearTimeout(s.current)]}function o(e,t){return c(e,t)[0]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=18822)}),_N_E=e.O()}]);
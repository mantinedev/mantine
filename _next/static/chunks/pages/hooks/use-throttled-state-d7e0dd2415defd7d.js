(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77051],{87562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-state",function(){return n(61264)}])},61264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(52322),u=n(45392),o=n(75929),c=n(25071),s=n(15019);let l=(0,c.A)(s.us.useThrottledState);function i(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,u.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledState"})," works similar to ",(0,r.jsx)(t.code,{children:"useState"})," but throttles the state updates.\n",(0,r.jsx)(t.code,{children:"setThrottledState"})," handler in the example below will be called at most once every 1000ms."]}),"\n",(0,r.jsx)(n,{data:o.V}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledState<T = any>(\n  defaultValue: T,\n  wait: number\n): readonly [T, (newValue: React.SetStateAction<T>) => void];\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(i,{...e})})}},75929:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(52322),u=n(74770),o=n(8582),c=n(2784),s=n(91535);let l={type:"code",component:function(){let[e,t]=function(e,t){let[n,r]=(0,c.useState)(""),[u,o]=(0,s.E)(r,1e3);return(0,c.useEffect)(()=>o,[]),[n,u]}(0,0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,r.jsxs)(o.x,{children:["Throttled value: ",e||"–"]})]})},code:`
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
`}},91535:function(e,t,n){"use strict";n.d(t,{E:function(){return o},z:function(){return c}});var r=n(2784),u=n(7966);function o(e,t){let n=(0,u.W)(e),o=(0,r.useRef)(),c=(0,r.useRef)(),s=(0,r.useRef)(!0),l=(0,r.useRef)(t),i=(0,r.useRef)(-1),a=(0,r.useCallback)((...e)=>{n(...e),o.current=e,c.current=e,s.current=!1},[n]),d=(0,r.useCallback)(()=>{o.current&&o.current!==c.current?(a(...o.current),i.current=window.setTimeout(d,l.current)):s.current=!0},[a]),h=(0,r.useCallback)((...e)=>{s.current?(a(...e),i.current=window.setTimeout(d,l.current)):o.current=e},[a,d]);return(0,r.useEffect)(()=>{l.current=t},[t]),[h,()=>window.clearTimeout(i.current)]}function c(e,t){return o(e,t)[0]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=87562)}),_N_E=e.O()}]);
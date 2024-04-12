(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77051],{87562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-state",function(){return n(61264)}])},61264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),o=n(45392),u=n(75929),l=n(79016),a=n(33638);let c=(0,l.A)(a.us.useThrottledState);function s(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledState"})," works similar to ",(0,r.jsx)(t.code,{children:"useState"})," bu throttles the state updates.\n",(0,r.jsx)(t.code,{children:"setThrottledState"})," handler in the example below will be called at most once every 1000ms."]}),"\n",(0,r.jsx)(n,{data:u.V}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledState<T = any>(\n  defaultValue: T,\n  wait: number\n): readonly [T, (newValue: React.SetStateAction<T>) => void];\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(s,{...e})})}},75929:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(2784),o=n(74770),Text=n(8582);let u=`
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
`,l={type:"code",component:function(){let[e,t]=function(e,t){let[n,o]=(0,r.useState)(""),u=(0,r.useRef)(null),l=(0,r.useRef)(!0),a=()=>window.clearTimeout(u.current),c=(0,r.useCallback)(e=>{l.current&&(o(e),a(),l.current=!1,u.current=window.setTimeout(()=>{l.current=!0},t))},[t]);return(0,r.useEffect)(()=>a,[]),[n,c]}(0,1e3);return r.createElement(r.Fragment,null,r.createElement(o.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),r.createElement(Text.x,null,"Throttled value: ",e||"–"))},code:u}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=87562)}),_N_E=e.O()}]);
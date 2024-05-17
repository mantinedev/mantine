(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77051],{87562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-state",function(){return n(61264)}])},61264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),o=n(45392),u=n(75929),l=n(25071),c=n(15019);let s=(0,l.A)(c.us.useThrottledState);function a(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledState"})," works similar to ",(0,r.jsx)(t.code,{children:"useState"})," but throttles the state updates.\n",(0,r.jsx)(t.code,{children:"setThrottledState"})," handler in the example below will be called at most once every 1000ms."]}),"\n",(0,r.jsx)(n,{data:u.V}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledState<T = any>(\n  defaultValue: T,\n  wait: number\n): readonly [T, (newValue: React.SetStateAction<T>) => void];\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})})}},75929:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var r=n(52322),o=n(74770),u=n(8582),l=n(2784);let c={type:"code",component:function(){let[e,t]=function(e,t){let[n,r]=(0,l.useState)(""),o=(0,l.useRef)(null),u=(0,l.useRef)(!0),c=()=>window.clearTimeout(o.current),s=(0,l.useCallback)(e=>{u.current&&(r(e),c(),u.current=!1,o.current=window.setTimeout(()=>{u.current=!0},1e3))},[1e3]);return(0,l.useEffect)(()=>c,[]),[n,s]}(0,0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,r.jsxs)(u.x,{children:["Throttled value: ",e||"–"]})]})},code:`
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
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=87562)}),_N_E=e.O()}]);
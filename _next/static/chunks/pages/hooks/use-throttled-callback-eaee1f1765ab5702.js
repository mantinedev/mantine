(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53637],{18822:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-callback",function(){return n(7630)}])},7630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),o=n(45392),l=n(31840),a=n(79016),c=n(33638);let u=(0,a.A)(c.us.useThrottledCallback);function s(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledCallback"})," accepts a function and a wait time in milliseconds.\nIt returns a throttled version of the function that will only be called at most once every ",(0,r.jsx)(t.code,{children:"wait"})," milliseconds."]}),"\n",(0,r.jsx)(n,{data:l.H}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  wait: number\n): (...args: Parameters<T>) => void;\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(s,{...e})})}},31840:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(52322),o=n(2784),l=n(74770),Text=n(8582),a=n(7966);let c=`
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
`,u={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e,t){let n=(0,a.W)(e),r=(0,o.useRef)(!0),l=(0,o.useRef)(-1),c=(0,o.useCallback)((...e)=>{r.current&&(r.current=!1,n(...e),l.current=window.setTimeout(()=>{r.current=!0},t))},[t]);return c}(e=>t(e),1e3);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.o,{placeholder:"Search",onChange:e=>n(e.currentTarget.value)}),(0,r.jsxs)(Text.x,{children:["Throttled value: ",e||"–"]})]})},code:c}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=18822)}),_N_E=e.O()}]);
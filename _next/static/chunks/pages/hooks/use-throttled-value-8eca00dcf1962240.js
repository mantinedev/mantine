(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99816],{66962:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-throttled-value",function(){return n(99466)}])},99466:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(52322),o=n(45392),u=n(91714),c=n(25071),l=n(15019);let a=(0,c.A)(l.us.useThrottledValue);function i(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useThrottledValue"})," accepts a value and a wait time in milliseconds.\nIt returns a throttled value that cannot change more than once every ",(0,r.jsx)(t.code,{children:"wait"})," milliseconds."]}),"\n",(0,r.jsx)(n,{data:u.o}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useThrottledValue<T>(value: T, wait: number): T;\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(i,{...e})})}},91714:function(e,t,n){"use strict";n.d(t,{o:function(){return l}});var r=n(52322),o=n(2784),u=n(74770),c=n(8582);let l={type:"code",component:function(){let[e,t]=(0,o.useState)(""),n=function(e,t){let[n,r]=(0,o.useState)(e),u=(0,o.useRef)(e),c=(0,o.useRef)(!0),l=(0,o.useRef)(-1);return(0,o.useEffect)(()=>{c.current&&u.current!==e&&(r(e),u.current=e,window.clearTimeout(l.current),c.current=!1,l.current=window.setTimeout(()=>{c.current=!0},1e3))},[e]),(0,o.useEffect)(()=>()=>window.clearTimeout(l.current),[]),n}(e,0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.o,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,r.jsxs)(c.x,{children:["Throttled value: ",n||"–"]})]})},code:`
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
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=66962)}),_N_E=e.O()}]);
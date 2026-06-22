(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},509496,e=>{"use strict";var t=e.i(191788);e.s(["usePrevious",0,function(e){let n=(0,t.useRef)(void 0);return(0,t.useEffect)(()=>{n.current=e},[e]),n.current}])},26485,e=>{"use strict";var t=e.i(191788);e.s(["useInputState",0,function(e){let[n,r]=(0,t.useState)(e);return[n,e=>{if(e)if("function"==typeof e)r(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;r("checkbox"===t.type?t.checked:t.value)}else r(e);else r(e)}]}])},903660,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(648863),o=e.i(883364),s=e.i(841209),i=e.i(26485),u=e.i(509496);let l={type:"code",component:function(){let[e,n]=(0,i.useInputState)(""),r=(0,u.usePrevious)(e);return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.TextInput,{label:"Enter some text here",placeholder:"Enter some text here",id:"previous-demo-input",value:e,onChange:n}),(0,t.jsxs)(o.Text,{mt:"md",children:["Current value: ",e]}),(0,t.jsxs)(o.Text,{children:["Previous value: ",r]})]})},code:`
import { TextInput, Text } from '@mantine/core';
import { usePrevious, useInputState } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`};var a=(0,r.__exportAll)({usage:()=>l});e.i(603441);var c=e.i(62558);e.i(457450);var d=e.i(418026);let p=(0,c.Layout)(d.MDX_DATA.usePrevious);function v(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"use-previous"})," hook stores the previous value of a state in a ref.\nIt returns ",(0,t.jsx)(r.code,{children:"undefined"})," on the initial render and the previous value of a state after rerender:"]}),"\n",(0,t.jsx)(o,{data:a.usage}),"\n",(0,t.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"function usePrevious<T>(value: T): T | undefined;\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(p,{...e,children:(0,t.jsx)(v,{...e})})}],903660)},754108,(e,t,n)=>{let r="/hooks/use-previous";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(903660)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
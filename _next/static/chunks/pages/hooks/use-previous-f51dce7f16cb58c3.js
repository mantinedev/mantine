(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7932],{91708:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-previous",function(){return n(45312)}])},45312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(24246),u=n(71670),o=n(3916),i=n(30289),s=n(27378),l=n(7033),Text=n(26569),c=n(29002);let a=`
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
`,d={type:"code",component:function(){let[e,t]=(0,c.U)(""),n=function(e){let t=(0,s.useRef)();return(0,s.useEffect)(()=>{t.current=e},[e]),t.current}(e);return s.createElement("div",null,s.createElement(l.o,{label:"Enter some text here",placeholder:"Enter some text here",id:"previous-demo-input",value:e,onChange:t}),s.createElement(Text.x,{mt:"md"},"Current value: ",e),s.createElement(Text.x,null,"Previous value: ",n))},code:a},f=(0,o.A)(i.us.usePrevious);function p(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,u.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-previous"})," stores the previous value of a state in a ref.\nIT returns ",(0,r.jsx)(t.code,{children:"undefined"})," on initial render and the previous value of a state after rerender:"]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function usePrevious<T>(value: T): T | undefined;\n"})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(p,{...e})})}},29002:function(e,t,n){"use strict";n.d(t,{U:function(){return u}});var r=n(27378);function u(e){let[t,n]=(0,r.useState)(e);return[t,e=>{if(e){if("function"==typeof e)n(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;n("checkbox"===t.type?t.checked:t.value)}else n(e)}else n(e)}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=91708)}),_N_E=e.O()}]);
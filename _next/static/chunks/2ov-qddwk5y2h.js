(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return i||t(n,Symbol.toStringTag,{value:"Module"}),n}])},953795,e=>{"use strict";var t=e.i(648863),i=e.i(191788),n=e.i(485108),r=e.i(725695),o=e.i(481178),a=e.i(44091),l=e.i(391466),s=e.i(275519),u=e.i(232471);let c=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:20});function d({value:e,decimalScale:t,fixedDecimalScale:i}){let n=function(e,t){if(!Number.isFinite(e))return"0";if(void 0!==t)return new Intl.NumberFormat("en-US",{useGrouping:!1,minimumFractionDigits:t,maximumFractionDigits:t}).format(e);let i=String(e);return i.includes("e")||i.includes("E")?c.format(e):i}(Math.abs(e),t);if(!i&&void 0!==t){let e=n.split(".");if(e[1]){let t=e[1].replace(/0+$/,"");n=t?`${e[0]}.${t}`:e[0]}}let r=n.indexOf("."),o=r>=0?n.slice(0,r):n,a=r>=0?n.slice(r+1):"",l=!/[1-9]/.test(n);return{negative:e<0&&!l,intDigits:o.split(""),fracDigits:a?a.split(""):[],hasDecimal:r>=0}}var m=e.i(391398);let p=["0","1","2","3","4","5","6","7","8","9","0","1"];function h({digit:e,getStyles:t,previousDigit:i,empty:n,valueDirection:r}){let o=parseInt(e,10),a=null!==i?parseInt(i,10):o,l=t("digit"),s=t("digitColumn");return(0,m.jsx)("span",{...l,"data-empty":n||void 0,"aria-hidden":"true",children:(0,m.jsx)("span",{...s,style:{...s.style,transform:`translateY(${-o}em)`,"--rn-roll-from":`translateY(${-a}em)`,"--rn-roll-to":`translateY(${-("up"===r&&null!==i&&o<a&&o<=1?o+10:o)}em)`},"data-direction":o>=a?"up":"down",children:p.map((e,t)=>(0,m.jsx)("span",{children:e},t))},e)})}function f(e,t){return[...Array(t-e.length).fill(null),...e]}function x(e,t){return[...e,...Array(t-e.length).fill(null)]}var g={root:"m_47dd3981",digit:"m_b301d46e",digitColumn:"m_8ae40964","mantine-rolling-number-roll":"m_18d73873",char:"m_47d64bf5"};let v={animationDuration:600,timingFunction:"ease",decimalSeparator:".",tabularNumbers:!0},j=(0,o.createVarsResolver)((e,{animationDuration:t,timingFunction:i})=>({root:{"--rn-duration":`${t}ms`,"--rn-timing-function":i}})),D=(0,s.factory)(e=>{let t=(0,a.useProps)("RollingNumber",v,e),{classNames:n,className:r,style:o,styles:s,unstyled:c,vars:p,value:D,prefix:y,suffix:b,decimalSeparator:S,thousandSeparator:k,decimalScale:B,fixedDecimalScale:R,animationDuration:N,timingFunction:C,tabularNumbers:_,withLiveRegion:$,mod:T,attributes:w,...F}=t,z=(0,l.useStyles)({name:"RollingNumber",classes:g,props:t,className:r,style:o,classNames:n,styles:s,unstyled:c,attributes:w,vars:p,varsResolver:j}),M=(0,i.useRef)(D),G=M.current;(0,i.useEffect)(()=>{M.current=D});let V=D>=G?"up":"down",P=function({current:e,previous:t,prefix:i,suffix:n,decimalSeparator:r=".",thousandSeparator:o}){let a=Math.max(e.intDigits.length,t.intDigits.length),l=Math.max(e.fracDigits.length,t.fracDigits.length),s=f(e.intDigits,a),u=f(t.intDigits,a),c=x(e.fracDigits,l),d=x(t.fracDigits,l),m=o?"string"==typeof o?o:",":null,p=[];if(i)for(let e=0;e<i.length;e++)p.push({type:"char",key:`prefix-${e}`,char:i[e],empty:!1});(e.negative||t.negative)&&p.push({type:"char",key:"sign",char:"-",empty:!e.negative});for(let e=0;e<a;e++){let t=a-1-e,i=s[e],n=u[e],r=null===i;p.push({type:"digit",key:`int-${t}`,digit:i??"0",previousDigit:n,empty:r}),m&&t>0&&t%3==0&&p.push({type:"char",key:`sep-${t}`,char:m,empty:r})}(e.hasDecimal||t.hasDecimal)&&p.push({type:"char",key:"dec",char:r,empty:!e.hasDecimal});for(let e=0;e<l;e++){let t=c[e],i=d[e],n=null===t;p.push({type:"digit",key:`frac-${e}`,digit:t??"0",previousDigit:i,empty:n})}if(n)for(let e=0;e<n.length;e++)p.push({type:"char",key:`suffix-${e}`,char:n[e],empty:!1});return p}({current:d({value:D,decimalScale:B,fixedDecimalScale:R}),previous:d({value:G,decimalScale:B,fixedDecimalScale:R}),prefix:y,suffix:b,decimalSeparator:S,thousandSeparator:k}),A=function({value:e,prefix:t,suffix:i,decimalSeparator:n=".",thousandSeparator:r,decimalScale:o,fixedDecimalScale:a}){let l=d({value:e,decimalScale:o,fixedDecimalScale:a}),s=l.intDigits.join("");r&&(s=s.replace(/\B(?=(\d{3})+(?!\d))/g,"string"==typeof r?r:","));let u=l.negative?`-${s}`:s;return l.fracDigits.length>0&&(u+=`${n}${l.fracDigits.join("")}`),`${t||""}${u}${i||""}`}({value:D,prefix:y,suffix:b,decimalSeparator:S,thousandSeparator:k,decimalScale:B,fixedDecimalScale:R});return(0,m.jsx)(u.Box,{...z("root"),mod:[{"tabular-numbers":_},T],role:$?"status":"img","aria-label":A,...F,children:P.map(e=>"digit"===e.type?(0,m.jsx)(h,{digit:e.digit,previousDigit:e.previousDigit,getStyles:z,empty:e.empty,valueDirection:V},e.key):(0,m.jsx)("span",{...z("char"),"data-empty":e.empty||void 0,"aria-hidden":"true",children:e.char},e.key))})});D.classes=g,D.varsResolver=j,D.displayName="@mantine/core/RollingNumber";let y={type:"code",component:function(){let[e,t]=(0,i.useState)(1234);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{value:e,fz:"36px"}),(0,m.jsxs)(r.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>e+1),children:"Increment"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>e-1),children:"Decrement"}),(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e4*Math.random())),children:"Random"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}
`},b={type:"code",component:function(){let[e,t]=(0,i.useState)(99.99);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{value:e,prefix:"$ ",suffix:" USD",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,fz:"32px"}),(0,m.jsxs)(r.Group,{mt:"md",children:[(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e+10.5).toFixed(2)),children:"+10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(e=>+(e-10.5).toFixed(2)),children:"-10.50"}),(0,m.jsx)(n.Button,{onClick:()=>t(+(1e4*Math.random()).toFixed(2)),children:"Random"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(99.99);

  return (
    <>
      <RollingNumber
        value={value}
        prefix="$ "
        suffix=" USD"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator
        fz="32px"
      />
      <Group mt="md">
        <Button onClick={() => setValue((v) => +(v + 10.5).toFixed(2))}>+10.50</Button>
        <Button onClick={() => setValue((v) => +(v - 10.5).toFixed(2))}>-10.50</Button>
        <Button onClick={() => setValue(+(Math.random() * 10000).toFixed(2))}>Random</Button>
      </Group>
    </>
  );
}
`};var S=e.i(671640),k=e.i(883364);let B={type:"code",component:function(){let[e,t]=(0,i.useState)(500);return(0,m.jsxs)(S.Stack,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(k.Text,{size:"sm",c:"dimmed",children:"200ms"}),(0,m.jsx)(D,{value:e,animationDuration:200,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(k.Text,{size:"sm",c:"dimmed",children:"600ms (default)"}),(0,m.jsx)(D,{value:e,animationDuration:600,fz:"28px"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(k.Text,{size:"sm",c:"dimmed",children:"1200ms"}),(0,m.jsx)(D,{value:e,animationDuration:1200,fz:"28px"})]}),(0,m.jsx)(r.Group,{children:(0,m.jsx)(n.Button,{onClick:()=>t(Math.floor(1e3*Math.random())),children:"Random"})})]})},code:`
import { useState } from 'react';
import { Button, Group, RollingNumber, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(500);

  return (
    <Stack>
      <div>
        <Text size="sm" c="dimmed">200ms</Text>
        <RollingNumber value={value} animationDuration={200} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">600ms (default)</Text>
        <RollingNumber value={value} animationDuration={600} fz="28px" />
      </div>
      <div>
        <Text size="sm" c="dimmed">1200ms</Text>
        <RollingNumber value={value} animationDuration={1200} fz="28px" />
      </div>
      <Group>
        <Button onClick={() => setValue(Math.floor(Math.random() * 1000))}>Random</Button>
      </Group>
    </Stack>
  );
}
`};var R=(0,t.__exportAll)({duration:()=>B,prefix:()=>b,usage:()=>y});e.s(["RollingNumberDemos",0,R],953795)},773874,e=>{"use strict";var t=e.i(391398),i=e.i(38856),n=e.i(953795);e.i(603441);var r=e.i(62558);e.i(457450);var o=e.i(418026);let a=(0,r.Layout)(o.MDX_DATA.RollingNumber);function l(e){let r={code:"code",h2:"h2",p:"p",...(0,i.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"RollingNumber"})," animates value changes with rolling digit transitions. Each digit\nindependently rolls to its new position when the value changes."]}),"\n",(0,t.jsx)(o,{data:n.RollingNumberDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"prefix"})," and ",(0,t.jsx)(r.code,{children:"suffix"})," props to add static text before or after the animated number.\nUse ",(0,t.jsx)(r.code,{children:"thousandSeparator"})," to separate thousands and ",(0,t.jsx)(r.code,{children:"decimalScale"})," with ",(0,t.jsx)(r.code,{children:"fixedDecimalScale"}),"\nto control decimal formatting:"]}),"\n",(0,t.jsx)(o,{data:n.RollingNumberDemos.prefix}),"\n",(0,t.jsx)(r.h2,{id:"animation-duration",children:"Animation duration"}),"\n",(0,t.jsxs)(r.p,{children:["Control animation speed with ",(0,t.jsx)(r.code,{children:"animationDuration"})," prop (in milliseconds, default is ",(0,t.jsx)(r.code,{children:"600"}),").\nUse ",(0,t.jsx)(r.code,{children:"timingFunction"})," prop to change the CSS timing function (default is ",(0,t.jsx)(r.code,{children:"ease"}),"):"]}),"\n",(0,t.jsx)(o,{data:n.RollingNumberDemos.duration})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})})}])},396776,(e,t,i)=>{let n="/core/rolling-number";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(773874)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
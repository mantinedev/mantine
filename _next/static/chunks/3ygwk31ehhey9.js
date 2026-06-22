(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let n={};for(var o in e)t(n,o,{get:e[o],enumerable:!0});return i||t(n,Symbol.toStringTag,{value:"Module"}),n}])},63583,e=>{"use strict";e.s(["padTime",0,function(e){return e<10?`0${e}`:`${e}`}])},242558,e=>{"use strict";e.s(["splitTimeString",0,function(e){let[t=null,i=null,n=null]=e.split(":").map(Number);return{hours:t,minutes:i,seconds:n}}])},866373,e=>{"use strict";var t=e.i(63583),i=e.i(242558),n=e.i(391398);function o({value:e,format:s="24h",amPmLabels:a={am:"AM",pm:"PM"},withSeconds:r=!1}){return(0,n.jsx)(n.Fragment,{children:function({value:e,format:n,amPmLabels:o,withSeconds:s}){let a=(0,i.splitTimeString)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${s?`:${e.getSeconds()}`:""}`);if(null===a.hours||null===a.minutes)return null;if("24h"===n)return`${(0,t.padTime)(a.hours)}:${(0,t.padTime)(a.minutes)}${s?`:${(0,t.padTime)(a.seconds||0)}`:""}`;let r=a.hours>=12;return`${a.hours%12==0?12:a.hours%12}:${(0,t.padTime)(a.minutes)}${s?`:${(0,t.padTime)(a.seconds||0)}`:""} ${r?o.pm:o.am}`}({value:e,format:s,amPmLabels:a,withSeconds:r})})}o.displayName="@mantine/dates/TimeValue",e.s(["TimeValue",0,o],866373)},635487,e=>{"use strict";var t=e.i(648863),i=e.i(883364),n=e.i(391398),o=e.i(866373);let s={type:"code",component:function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Text,{children:["24h format: ",(0,n.jsx)(o.TimeValue,{value:"18:45:34"})]}),(0,n.jsxs)(i.Text,{children:["12h format: ",(0,n.jsx)(o.TimeValue,{value:"18:45:34",format:"12h"})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value="18:45:34" />
      </Text>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" />
      </Text>
    </div>
  );
}
`},a={type:"code",component:function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Text,{children:["12h format: ",(0,n.jsx)(o.TimeValue,{value:"18:45:34",format:"12h",withSeconds:!0})]}),(0,n.jsxs)(i.Text,{children:["24h format: ",(0,n.jsx)(o.TimeValue,{value:"18:45:34",withSeconds:!0})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}
`},r={type:"code",component:function(){return(0,n.jsx)("div",{children:(0,n.jsxs)(i.Text,{children:["Custom AM/PM labels:"," ",(0,n.jsx)(o.TimeValue,{value:"18:45:34",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})]})})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}
`},m={type:"code",component:function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Text,{children:["24h format: ",(0,n.jsx)(o.TimeValue,{value:new Date(2021,1,1,18,45,34)})]}),(0,n.jsxs)(i.Text,{children:["12h format: ",(0,n.jsx)(o.TimeValue,{format:"12h",value:new Date(2021,1,1,18,45,34)})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}
`};var l=(0,t.__exportAll)({amPmLabels:()=>r,dateObject:()=>m,usage:()=>s,withSeconds:()=>a});e.s(["TimeValueDemos",0,l],635487)},96061,e=>{"use strict";var t=e.i(391398),i=e.i(38856),n=e.i(635487);e.i(603441);var o=e.i(62558);e.i(457450);var s=e.i(418026);let a=(0,o.Layout)(s.MDX_DATA.TimeValue);function r(e){let o={code:"code",h2:"h2",p:"p",...(0,i.useMDXComponents)(),...e.components},{Demo:s}=o;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Use the ",(0,t.jsx)(o.code,{children:"TimeValue"})," component to display time in different formats:"]}),"\n",(0,t.jsx)(s,{data:n.TimeValueDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,t.jsxs)(o.p,{children:["Use the ",(0,t.jsx)(o.code,{children:"withSeconds"})," prop to display seconds:"]}),"\n",(0,t.jsx)(s,{data:n.TimeValueDemos.withSeconds}),"\n",(0,t.jsx)(o.h2,{id:"ampm-labels",children:"AM/PM labels"}),"\n",(0,t.jsxs)(o.p,{children:["Use the ",(0,t.jsx)(o.code,{children:"amPmLabels"})," prop to display AM/PM labels:"]}),"\n",(0,t.jsx)(s,{data:n.TimeValueDemos.amPmLabels}),"\n",(0,t.jsx)(o.h2,{id:"date-object",children:"Date object"}),"\n",(0,t.jsxs)(o.p,{children:["You can use a ",(0,t.jsx)(o.code,{children:"Date"})," object instead of a string as the ",(0,t.jsx)(o.code,{children:"value"}),":"]}),"\n",(0,t.jsx)(s,{data:n.TimeValueDemos.dateObject})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})})}])},102935,(e,t,i)=>{let n="/dates/time-value";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(96061)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let i={};for(var r in e)n(i,r,{get:e[r],enumerable:!0});return t||n(i,Symbol.toStringTag,{value:"Module"}),i}])},835066,e=>{"use strict";var n=e.i(648863),t=e.i(391398),i=e.i(563141);let r={type:"code",centered:!0,maxWidth:280,component:function(){return(0,t.jsx)(i.InlineDateTimePicker,{})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker />;
}
`},a={type:"code",centered:!0,maxWidth:280,component:function(){return(0,t.jsx)(i.InlineDateTimePicker,{type:"range"})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
`},o={type:"code",centered:!0,maxWidth:280,component:function(){return(0,t.jsx)(i.InlineDateTimePicker,{withSeconds:!0})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker withSeconds />;
}
`};var c=e.i(191788);let s={type:"code",centered:!0,maxWidth:280,component:function(){let[e,n]=(0,c.useState)([null,null]);return(0,t.jsx)(i.InlineDateTimePicker,{type:"range",value:e,onChange:n})},code:`
import { useState } from 'react';
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);

  return (
    <InlineDateTimePicker
      type="range"
      value={value}
      onChange={setValue}
    />
  );
}
`},d={type:"code",centered:!0,maxWidth:280,component:function(){return(0,t.jsx)(i.InlineDateTimePicker,{type:"range",valueFormat:"MMMM YYYY, DD HH:mm"})},code:`
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" valueFormat="MMMM YYYY, DD HH:mm" />;
}
`};var l=(0,n.__exportAll)({format:()=>d,range:()=>a,rangeControlled:()=>s,usage:()=>r,withSeconds:()=>o});e.s(["InlineDateTimePickerDemos",0,l],835066)},690966,e=>{"use strict";var n=e.i(391398),t=e.i(38856),i=e.i(835066);e.i(603441);var r=e.i(62558);e.i(457450);var a=e.i(418026);let o=(0,r.Layout)(a.MDX_DATA.InlineDateTimePicker);function c(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{Demo:a}=r;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"datepicker-props",children:"DatePicker props"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"InlineDateTimePicker"})," supports most of the ",(0,n.jsx)(r.a,{href:"/dates/date-picker/",children:"DatePicker"})," props.\nRead through the ",(0,n.jsx)(r.a,{href:"/dates/date-picker/",children:"DatePicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"InlineDateTimePicker"})," renders a calendar with a time picker inline, without a dropdown.\nIt combines ",(0,n.jsx)(r.a,{href:"/dates/date-picker/",children:"DatePicker"})," and ",(0,n.jsx)(r.a,{href:"/dates/time-picker/",children:"TimePicker"})," components:"]}),"\n",(0,n.jsx)(a,{data:i.InlineDateTimePickerDemos.usage}),"\n",(0,n.jsx)(r.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"withSeconds"})," prop to display seconds input in the time picker:"]}),"\n",(0,n.jsx)(a,{data:i.InlineDateTimePickerDemos.withSeconds}),"\n",(0,n.jsx)(r.h2,{id:"range",children:"Range"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:'type="range"'})," to allow selecting a date and time range. In range mode,\ntwo time inputs are rendered side by side, and a range summary is displayed\nbelow the time inputs:"]}),"\n",(0,n.jsx)(a,{data:i.InlineDateTimePickerDemos.range}),"\n",(0,n.jsx)(r.h2,{id:"controlled-range",children:"Controlled range"}),"\n",(0,n.jsx)(a,{data:i.InlineDateTimePickerDemos.rangeControlled}),"\n",(0,n.jsx)(r.h2,{id:"value-format",children:"Value format"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"valueFormat"})," prop to change the ",(0,n.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the range preview:"]}),"\n",(0,n.jsx)(a,{data:i.InlineDateTimePickerDemos.format})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})})}])},465727,(e,n,t)=>{let i="/dates/inline-date-time-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(690966)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50530],{76613:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-grid",function(){return n(44192)}])},44192:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(31085),i=n(71184),r=n(12949),s=n(97449),d=n(32719);let l={type:"code",component:function(){return(0,a.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),minTime:"11:00",maxTime:"18:00"})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      minTime="11:00"
      maxTime="18:00"
    />
  );
}
`,centered:!0,maxWidth:360},o={type:"code",component:function(){return(0,a.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"11:45",interval:"00:15"}),disableTime:["10:45","11:00","11:30"]})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
`,centered:!0,maxWidth:360},m={type:"code",component:function(){return(0,a.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"14:00",interval:"01:00"}),defaultValue:"11:00",allowDeselect:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '12:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}
`,centered:!0,maxWidth:360},c={type:"code",component:function(){return(0,a.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      format="12h"
      amPmLabels={{ am: '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928', pm: '\u0905\u092A\u0930\u093E\u0939\u094D\u0928' }}
    />
  );
}
`,centered:!0,maxWidth:360},u={type:"code",component:function(){return(0,a.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),disabled:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
`,centered:!0,maxWidth:360};var p=n(18675),h=n(20017);let v=(0,p.P)(h.XZ.TimeGrid);function g(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"TimeGrid"})," component to capture time value from the user with a\npredefined set of time slots:"]}),"\n",(0,a.jsx)(n,{data:r.C}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimeGrid } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('10:00');\n  return <TimeGrid value={value} onChange={setValue} data={['10:00', '12: 00']} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"data"})," prop accepts an array of time values in 24-hour format. Values\nmust be unique. To generate time range use ",(0,a.jsx)(t.code,{children:"getTimeRange"})," function\nexported from ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { TimeGrid, getTimeRange } from '@mantine/dates';\n\nfunction WithArray() {\n  return <TimeGrid data={['10:00', '12:00']} />\n}\n\nfunction WithRange() {\n  // In this example we generate time range from 10:00 to 14:00 with 1 hour step:\n  // ['10:00', '11:00', '12:00', '13:00', '14:00']\n  return <TimeGrid data={getTimeRange({ from: '10:00', to: '14:00', step: '01:00' })} />\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-time",children:"Min and max time"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minTime"})," and ",(0,a.jsx)(t.code,{children:"maxTime"})," props to limit available time range.\nBoth props accept time values in 24-hour format:"]}),"\n",(0,a.jsx)(n,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"disable-specific-controls",children:"Disable specific controls"}),"\n",(0,a.jsxs)(t.p,{children:["You can disable specific time values by providing an array of disabled\nvalues to the ",(0,a.jsx)(t.code,{children:"disableTime"})," prop:"]}),"\n",(0,a.jsx)(n,{data:o}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," prop to allow deselecting time value by clicking on\nthe control with selected value:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"change-ampm-labels",children:"Change AM/PM labels"}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," prop to disable all controls:"]}),"\n",(0,a.jsx)(n,{data:u})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(v,{...e,children:(0,a.jsx)(g,{...e})})}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var a=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},12949:(e,t,n)=>{"use strict";n.d(t,{C:()=>s});var a=n(31085),i=n(97449),r=n(32719);let s={type:"configurator",component:function(e){return(0,a.jsx)(i.i,{data:(0,r.z)({startTime:"10:00",endTime:"21:00",interval:"01:00"}),simpleGridProps:{type:"container",cols:{base:1,"180px":2,"320px":3},spacing:"xs"},...e})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';


function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:360,controls:[{type:"segmented",prop:"format",data:[{value:"12h",label:"12h"},{value:"24h",label:"24h"}],libraryValue:"24h",initialValue:"24h"},{type:"boolean",prop:"withSeconds",libraryValue:"__",initialValue:!1},{type:"size",prop:"size",libraryValue:"sm",initialValue:"sm"},{type:"size",prop:"radius",libraryValue:"sm",initialValue:"sm"}]}},97449:(e,t,n)=>{"use strict";n.d(t,{i:()=>b});var a=n(31085),i=n(7098),r=n(33450),s=n(6754),d=n(29686),l=n(69564),o=n(34056),m=n(96172),c=n(82307),u=n(59293),p=n(90729);let[h,v]=(0,n(59852).F)("TimeGridProvider was not found in the component tree");var g=n(54357),f=n(92408),T=n(33970),x=n(86480);function y({time:e,active:t,className:n,amPmLabels:i,format:r,withSeconds:s,...d}){let l=v(),o=(0,f.xd)();return(0,a.jsx)(T.N,{mod:[{active:t}],...l.getStyles("control",{className:(0,g.A)(o.activeClassName,n)}),...d,children:(0,a.jsx)(x.z,{value:e,format:r,amPmLabels:i,withSeconds:s})})}var j={control:"m_ac3f4d63"};let M={simpleGridProps:{cols:3,spacing:"xs"},format:"24h",amPmLabels:{am:"AM",pm:"PM"}},k=(0,i.V)((e,{size:t,radius:n})=>({root:{"--time-grid-fz":(0,r.ny)(t),"--time-grid-radius":(0,r.nJ)(n)}})),b=(0,s.P9)((e,t)=>{let n=(0,d.Y)("TimeGrid",M,e),{classNames:i,className:r,style:s,styles:v,unstyled:g,vars:f,data:T,value:x,defaultValue:b,onChange:w,format:A,withSeconds:G=!1,amPmLabels:N,allowDeselect:R,simpleGridProps:$,getControlProps:D,minTime:V,maxTime:z,disableTime:P,disabled:_,...C}=n,I=(0,l.I)({name:"TimeGrid",classes:j,props:n,className:r,style:s,classNames:i,styles:v,unstyled:g,vars:f,varsResolver:k}),[S,Z]=(0,c.Z)({value:x,defaultValue:b,finalValue:null,onChange:w}),E=T.map(e=>{let t=_||!!V&&(0,p.w)(e)<(0,p.w)(V)||!!z&&(0,p.w)(e)>(0,p.w)(z)||(Array.isArray(P)?!!P.find(t=>(0,u.y)({time:e,compare:t,withSeconds:G})):!!P?.(e));return(0,a.jsx)(y,{active:(0,u.y)({time:e,compare:S||"",withSeconds:G}),time:e,onClick:()=>{let t=R&&(null===S?e===S:(0,u.y)({time:e,compare:S,withSeconds:G}))?null:e;t!==S&&Z(t)},format:A,amPmLabels:N,disabled:t,"data-disabled":t||void 0,withSeconds:G,...D?.(e)},e)});return(0,a.jsx)(h,{value:{getStyles:I},children:(0,a.jsx)(o.a,{ref:t,...I("root"),...C,children:(0,a.jsx)(m.r,{...$,...I("simpleGrid",{className:$?.className,style:$?.style}),children:E})})})});b.displayName="@mantine/dates/TimeGrid",b.classes=j},32719:(e,t,n)=>{"use strict";n.d(t,{z:()=>i});var a=n(90729);function i({startTime:e,endTime:t,interval:n}){let i=[],r=(0,a.w)(e),s=(0,a.w)(t),d=(0,a.w)(n);for(let e=r;e<=s;e+=d)i.push((0,a.Y)(e).timeString);return i}},59293:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var a=n(32241);function i({time:e,compare:t,withSeconds:n}){let i=(0,a.N)(e),r=(0,a.N)(t);return n?i.hours===r.hours&&i.minutes===r.minutes&&i.seconds===r.seconds:i.hours===r.hours&&i.minutes===r.minutes}},37229:(e,t,n)=>{"use strict";function a(e){return e<10?`0${e}`:`${e}`}n.d(t,{Z:()=>a})},32241:(e,t,n)=>{"use strict";function a(e){let[t=null,n=null,a=null]=e.split(":").map(Number);return{hours:t,minutes:n,seconds:a}}n.d(t,{N:()=>a})},90729:(e,t,n)=>{"use strict";n.d(t,{Y:()=>r,w:()=>i});var a=n(37229);function i(e){let[t=0,n=0,a=0]=e.split(":").map(Number);return 3600*t+60*n+a}function r(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),i=e%60;return{timeString:`${(0,a.Z)(t)}:${(0,a.Z)(n)}:${(0,a.Z)(i)}`,hours:t,minutes:n,seconds:i}}},86480:(e,t,n)=>{"use strict";n.d(t,{z:()=>s});var a=n(31085),i=n(37229),r=n(32241);function s({value:e,format:t="24h",amPmLabels:n={am:"AM",pm:"PM"},withSeconds:s=!1}){return(0,a.jsx)(a.Fragment,{children:function({value:e,format:t,amPmLabels:n,withSeconds:a}){let s=(0,r.N)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${a?`:${e.getSeconds()}`:""}`);if(null===s.hours||null===s.minutes)return null;if("24h"===t)return`${(0,i.Z)(s.hours)}:${(0,i.Z)(s.minutes)}${a?`:${(0,i.Z)(s.seconds||0)}`:""}`;let d=s.hours>=12,l=s.hours%12==0?12:s.hours%12;return`${l}:${(0,i.Z)(s.minutes)}${a?`:${(0,i.Z)(s.seconds||0)}`:""} ${d?n.pm:n.am}`}({value:e,format:t,amPmLabels:n,withSeconds:s})})}s.displayName="@mantine/dates/TimeValue"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(76613)),_N_E=e.O()}]);
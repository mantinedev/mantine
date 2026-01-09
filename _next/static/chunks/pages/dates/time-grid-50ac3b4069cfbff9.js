(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50530],{1798:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7740:(e,t,i)=>{"use strict";i.d(t,{y:()=>a});var n=i(90216);function a({time:e,compare:t,withSeconds:i}){let a=(0,n.N)(e),r=(0,n.N)(t);return i?a.hours===r.hours&&a.minutes===r.minutes&&a.seconds===r.seconds:a.hours===r.hours&&a.minutes===r.minutes}},11659:(e,t,i)=>{"use strict";i.d(t,{i:()=>b});var n=i(6029),a=i(33987),r=i(14163),s=i(8411),d=i(38919),l=i(15583),o=i(76320),m=i(89238),c=i(7798),u=i(7740),p=i(64208);let[h,g]=(0,i(95681).F)("TimeGridProvider was not found in the component tree");var v={control:"m_ac3f4d63"},f=i(50212),T=i(49643),x=i(17976),y=i(72471);function j({time:e,active:t,className:i,amPmLabels:a,format:r,withSeconds:s,...d}){let l=g(),o=(0,T.xd)();return(0,n.jsx)(x.N,{mod:[{active:t}],...l.getStyles("control",{className:(0,f.A)(o.activeClassName,i)}),...d,children:(0,n.jsx)(y.z,{value:e,format:r,amPmLabels:a,withSeconds:s})})}let M={simpleGridProps:{cols:3,spacing:"xs"},format:"24h",amPmLabels:{am:"AM",pm:"PM"}},k=(0,a.V)((e,{size:t,radius:i})=>({root:{"--time-grid-fz":(0,r.ny)(t),"--time-grid-radius":(0,r.nJ)(i)}})),b=(0,s.P9)((e,t)=>{let i=(0,d.Y)("TimeGrid",M,e),{classNames:a,className:r,style:s,styles:g,unstyled:f,vars:T,data:x,value:y,defaultValue:b,onChange:w,format:A,withSeconds:G=!1,amPmLabels:N,allowDeselect:R,simpleGridProps:$,getControlProps:D,minTime:V,maxTime:z,disableTime:P,disabled:_,attributes:C,...S}=i,Z=(0,l.I)({name:"TimeGrid",classes:v,props:i,className:r,style:s,classNames:a,styles:g,unstyled:f,attributes:C,vars:T,varsResolver:k}),[E,W]=(0,c.Z)({value:y,defaultValue:b,finalValue:null,onChange:w}),L=x.map(e=>{let t=_||!!V&&(0,p.w)(e)<(0,p.w)(V)||!!z&&(0,p.w)(e)>(0,p.w)(z)||(Array.isArray(P)?!!P.find(t=>(0,u.y)({time:e,compare:t,withSeconds:G})):!!P?.(e));return(0,n.jsx)(j,{active:(0,u.y)({time:e,compare:E||"",withSeconds:G}),time:e,onClick:()=>{let t=R&&(null===E?e===E:(0,u.y)({time:e,compare:E,withSeconds:G}))?null:e;t!==E&&W(t)},format:A,amPmLabels:N,disabled:t,"data-disabled":t||void 0,withSeconds:G,...D?.(e)},e)});return(0,n.jsx)(h,{value:{getStyles:Z},children:(0,n.jsx)(o.a,{ref:t,...Z("root"),...S,children:(0,n.jsx)(m.r,{...$,...Z("simpleGrid",{className:$?.className,style:$?.style}),children:L})})})});b.displayName="@mantine/dates/TimeGrid",b.classes=v},13066:(e,t,i)=>{"use strict";i.d(t,{z:()=>a});var n=i(64208);function a({startTime:e,endTime:t,interval:i}){let a=[],r=(0,n.w)(e),s=(0,n.w)(t),d=(0,n.w)(i);for(let e=r;e<=s;e+=d)a.push((0,n.Y)(e).timeString);return a}},19561:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var n=i(6029),a=i(16285),r=i(21092),s=i(11659),d=i(13066);let l={type:"code",component:function(){return(0,n.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),minTime:"11:00",maxTime:"18:00"})},code:`
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
`,centered:!0,maxWidth:360},o={type:"code",component:function(){return(0,n.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"11:45",interval:"00:15"}),disableTime:["10:45","11:00","11:30"]})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
`,centered:!0,maxWidth:360},m={type:"code",component:function(){return(0,n.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"14:00",interval:"01:00"}),defaultValue:"11:00",allowDeselect:!0})},code:`
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
`,centered:!0,maxWidth:360},c={type:"code",component:function(){return(0,n.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
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
`,centered:!0,maxWidth:360},u={type:"code",component:function(){return(0,n.jsx)(s.i,{data:(0,d.z)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),disabled:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
`,centered:!0,maxWidth:360};var p=i(38547),h=i(5262);let g=(0,p.P)(h.XZ.TimeGrid);function v(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"TimeGrid"})," component to capture time value from the user with a\npredefined set of time slots:"]}),"\n",(0,n.jsx)(i,{data:r.C}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimeGrid } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('10:00');\n  return <TimeGrid value={value} onChange={setValue} data={['10:00', '12: 00']} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"data-prop",children:"data prop"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"data"})," prop accepts an array of time values in 24-hour format. Values\nmust be unique. To generate time range use ",(0,n.jsx)(t.code,{children:"getTimeRange"})," function\nexported from ",(0,n.jsx)(t.code,{children:"@mantine/dates"})," package:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { TimeGrid, getTimeRange } from '@mantine/dates';\n\nfunction WithArray() {\n  return <TimeGrid data={['10:00', '12:00']} />\n}\n\nfunction WithRange() {\n  // In this example we generate time range from 10:00 to 14:00 with 1 hour step:\n  // ['10:00', '11:00', '12:00', '13:00', '14:00']\n  return <TimeGrid data={getTimeRange({ from: '10:00', to: '14:00', step: '01:00' })} />\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"min-and-max-time",children:"Min and max time"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"minTime"})," and ",(0,n.jsx)(t.code,{children:"maxTime"})," props to limit available time range.\nBoth props accept time values in 24-hour format:"]}),"\n",(0,n.jsx)(i,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"disable-specific-controls",children:"Disable specific controls"}),"\n",(0,n.jsxs)(t.p,{children:["You can disable specific time values by providing an array of disabled\nvalues to the ",(0,n.jsx)(t.code,{children:"disableTime"})," prop:"]}),"\n",(0,n.jsx)(i,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"allowDeselect"})," prop to allow deselecting time value by clicking on\nthe control with selected value:"]}),"\n",(0,n.jsx)(i,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"change-ampm-labels",children:"Change AM/PM labels"}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," prop to disable all controls:"]}),"\n",(0,n.jsx)(i,{data:u})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,{...e,children:(0,n.jsx)(v,{...e})})}},21092:(e,t,i)=>{"use strict";i.d(t,{C:()=>s});var n=i(6029),a=i(11659),r=i(13066);let s={type:"configurator",component:function(e){return(0,n.jsx)(a.i,{data:(0,r.z)({startTime:"10:00",endTime:"21:00",interval:"01:00"}),simpleGridProps:{type:"container",cols:{base:1,"180px":2,"320px":3},spacing:"xs"},...e})},code:`
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
`,centered:!0,maxWidth:360,controls:[{type:"segmented",prop:"format",data:[{value:"12h",label:"12h"},{value:"24h",label:"24h"}],libraryValue:"24h",initialValue:"24h"},{type:"boolean",prop:"withSeconds",libraryValue:"__",initialValue:!1},{type:"size",prop:"size",libraryValue:"sm",initialValue:"sm"},{type:"size",prop:"radius",libraryValue:"sm",initialValue:"sm"}]}},24583:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},64208:(e,t,i)=>{"use strict";i.d(t,{Y:()=>r,w:()=>a});var n=i(68652);function a(e){let[t=0,i=0,n=0]=e.split(":").map(Number);return 3600*t+60*i+n}function r(e){let t=Math.floor(e/3600),i=Math.floor(e%3600/60),a=e%60;return{timeString:`${(0,n.Z)(t)}:${(0,n.Z)(i)}:${(0,n.Z)(a)}`,hours:t,minutes:i,seconds:a}}},65433:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68652:(e,t,i)=>{"use strict";function n(e){return e<10?`0${e}`:`${e}`}i.d(t,{Z:()=>n})},72471:(e,t,i)=>{"use strict";i.d(t,{z:()=>s});var n=i(6029),a=i(68652),r=i(90216);function s({value:e,format:t="24h",amPmLabels:i={am:"AM",pm:"PM"},withSeconds:s=!1}){return(0,n.jsx)(n.Fragment,{children:function({value:e,format:t,amPmLabels:i,withSeconds:n}){let s=(0,r.N)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${n?`:${e.getSeconds()}`:""}`);if(null===s.hours||null===s.minutes)return null;if("24h"===t)return`${(0,a.Z)(s.hours)}:${(0,a.Z)(s.minutes)}${n?`:${(0,a.Z)(s.seconds||0)}`:""}`;let d=s.hours>=12,l=s.hours%12==0?12:s.hours%12;return`${l}:${(0,a.Z)(s.minutes)}${n?`:${(0,a.Z)(s.seconds||0)}`:""} ${d?i.pm:i.am}`}({value:e,format:t,amPmLabels:i,withSeconds:s})})}s.displayName="@mantine/dates/TimeValue"},76213:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-grid",function(){return i(19561)}])},84276:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let n=(0,i(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90216:(e,t,i)=>{"use strict";function n(e){let[t=null,i=null,n=null]=e.split(":").map(Number);return{hours:t,minutes:i,seconds:n}}i.d(t,{N:()=>n})}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=76213)),_N_E=e.O()}]);
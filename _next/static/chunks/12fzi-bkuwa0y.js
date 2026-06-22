(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var a in e)i(n,a,{get:e[a],enumerable:!0});return t||i(n,Symbol.toStringTag,{value:"Module"}),n}])},242558,e=>{"use strict";e.s(["splitTimeString",0,function(e){let[i=null,t=null,n=null]=e.split(":").map(Number);return{hours:i,minutes:t,seconds:n}}])},63583,e=>{"use strict";e.s(["padTime",0,function(e){return e<10?`0${e}`:`${e}`}])},866373,e=>{"use strict";var i=e.i(63583),t=e.i(242558),n=e.i(391398);function a({value:e,format:r="24h",amPmLabels:s={am:"AM",pm:"PM"},withSeconds:m=!1}){return(0,n.jsx)(n.Fragment,{children:function({value:e,format:n,amPmLabels:a,withSeconds:r}){let s=(0,t.splitTimeString)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${r?`:${e.getSeconds()}`:""}`);if(null===s.hours||null===s.minutes)return null;if("24h"===n)return`${(0,i.padTime)(s.hours)}:${(0,i.padTime)(s.minutes)}${r?`:${(0,i.padTime)(s.seconds||0)}`:""}`;let m=s.hours>=12;return`${s.hours%12==0?12:s.hours%12}:${(0,i.padTime)(s.minutes)}${r?`:${(0,i.padTime)(s.seconds||0)}`:""} ${m?a.pm:a.am}`}({value:e,format:r,amPmLabels:s,withSeconds:m})})}a.displayName="@mantine/dates/TimeValue",e.s(["TimeValue",0,a],866373)},766202,648448,e=>{"use strict";var i=e.i(242558);e.s(["isSameTime",0,function({time:e,compare:t,withSeconds:n}){let a=(0,i.splitTimeString)(e),r=(0,i.splitTimeString)(t);return n?a.hours===r.hours&&a.minutes===r.minutes&&a.seconds===r.seconds:a.hours===r.hours&&a.minutes===r.minutes}],766202);var t=e.i(63583);e.s(["secondsToTime",0,function(e){let i=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return{timeString:`${(0,t.padTime)(i)}:${(0,t.padTime)(n)}:${(0,t.padTime)(a)}`,hours:i,minutes:n,seconds:a}},"timeToSeconds",0,function(e){let[i=0,t=0,n=0]=e.split(":").map(Number);return 3600*i+60*t+n}],648448)},869921,e=>{"use strict";var i=e.i(648448);e.s(["getTimeRange",0,function({startTime:e,endTime:t,interval:n}){let a=[],r=(0,i.timeToSeconds)(e),s=(0,i.timeToSeconds)(t),m=(0,i.timeToSeconds)(n);for(let e=r;e<=s;e+=m)a.push((0,i.secondsToTime)(e).timeString);return a}])},477451,e=>{"use strict";var i=e.i(648863),t=e.i(391398),n=e.i(766202),a=e.i(648448);let[r,s]=(0,e.i(386179).createSafeContext)("TimeGridProvider was not found in the component tree");var m=e.i(866373),o=e.i(56206),l=e.i(284629),d=e.i(951254);function c({time:e,active:i,className:n,amPmLabels:a,format:r,withSeconds:u,...p}){let T=s(),h=(0,d.useMantineTheme)();return(0,t.jsx)(l.UnstyledButton,{mod:[{active:i}],...T.getStyles("control",{className:(0,o.default)(h.activeClassName,n)}),...p,children:(0,t.jsx)(m.TimeValue,{value:e,format:r,amPmLabels:a,withSeconds:u})})}var u={control:"m_ac3f4d63"},p=e.i(232471),T=e.i(140763),h=e.i(481178),g=e.i(275519),f=e.i(433512),x=e.i(44091),j=e.i(391466),v=e.i(579560);let b={simpleGridProps:{cols:3,spacing:"xs"},format:"24h",amPmLabels:{am:"AM",pm:"PM"}},y=(0,h.createVarsResolver)((e,{size:i,radius:t})=>({root:{"--time-grid-fz":(0,f.getFontSize)(i),"--time-grid-radius":(0,f.getRadius)(t)}})),G=(0,g.factory)(e=>{let i=(0,x.useProps)("TimeGrid",b,e),{classNames:s,className:m,style:o,styles:l,unstyled:d,vars:h,data:g,value:f,defaultValue:G,onChange:S,format:R,withSeconds:D=!1,amPmLabels:w,allowDeselect:P,simpleGridProps:_,getControlProps:V,minTime:$,maxTime:M,disableTime:A,disabled:N,attributes:C,...W}=i,k=(0,j.useStyles)({name:"TimeGrid",classes:u,props:i,className:m,style:o,classNames:s,styles:l,unstyled:d,attributes:C,vars:h,varsResolver:y}),[L,U]=(0,v.useUncontrolled)({value:f,defaultValue:G,finalValue:null,onChange:S}),z=g.map(e=>{let i=N||!!$&&(0,a.timeToSeconds)(e)<(0,a.timeToSeconds)($)||!!M&&(0,a.timeToSeconds)(e)>(0,a.timeToSeconds)(M)||(Array.isArray(A)?!!A.find(i=>(0,n.isSameTime)({time:e,compare:i,withSeconds:D})):!!A?.(e));return(0,t.jsx)(c,{active:(0,n.isSameTime)({time:e,compare:L||"",withSeconds:D}),time:e,onClick:()=>{let i=P&&(null===L?e===L:(0,n.isSameTime)({time:e,compare:L,withSeconds:D}))?null:e;i!==L&&U(i)},format:R,amPmLabels:w,disabled:i,"data-disabled":i||void 0,withSeconds:D,...V?.(e)},e)});return(0,t.jsx)(r,{value:{getStyles:k},children:(0,t.jsx)(p.Box,{...k("root"),...W,children:(0,t.jsx)(T.SimpleGrid,{..._,...k("simpleGrid",{className:_?.className,style:_?.style}),children:z})})})});G.displayName="@mantine/dates/TimeGrid",G.classes=u,G.varsResolver=y;var S=e.i(869921);let R={type:"configurator",component:function(e){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"10:00",endTime:"21:00",interval:"01:00"}),simpleGridProps:{type:"container",cols:{base:1,"180px":2,"320px":3},spacing:"xs"},...e})},code:`
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
`,centered:!0,maxWidth:360,controls:[{type:"segmented",prop:"format",data:[{value:"12h",label:"12h"},{value:"24h",label:"24h"}],libraryValue:"24h",initialValue:"24h"},{type:"boolean",prop:"withSeconds",libraryValue:"__",initialValue:!1},{type:"size",prop:"size",libraryValue:"sm",initialValue:"sm"},{type:"size",prop:"radius",libraryValue:"sm",initialValue:"sm"}]},D={type:"code",component:function(){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),minTime:"11:00",maxTime:"18:00"})},code:`
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
`,centered:!0,maxWidth:360},w={type:"code",component:function(){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"09:00",endTime:"14:00",interval:"01:00"}),defaultValue:"11:00",allowDeselect:!0})},code:`
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
`,centered:!0,maxWidth:360},P={type:"code",component:function(){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"09:00",endTime:"11:45",interval:"00:15"}),disableTime:["10:45","11:00","11:30"]})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
`,centered:!0,maxWidth:360},_={type:"code",component:function(){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      format="12h"
      amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }}
    />
  );
}
`,centered:!0,maxWidth:360},V={type:"code",component:function(){return(0,t.jsx)(G,{data:(0,S.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),disabled:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
`,centered:!0,maxWidth:360};var $=(0,i.__exportAll)({allowDeselect:()=>w,amPmLabels:()=>_,disableTime:()=>P,disabled:()=>V,minMax:()=>D,usage:()=>R});e.s(["TimeGridDemos",0,$],477451)},673904,e=>{"use strict";var i=e.i(391398),t=e.i(38856),n=e.i(477451);e.i(603441);var a=e.i(62558);e.i(457450);var r=e.i(418026);let s=(0,a.Layout)(r.MDX_DATA.TimeGrid);function m(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:r}=a;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(a.p,{children:["Use the ",(0,i.jsx)(a.code,{children:"TimeGrid"})," component to capture a time value from the user with a\npredefined set of time slots:"]}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.usage}),"\n",(0,i.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimeGrid } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('10:00');\n  return <TimeGrid value={value} onChange={setValue} data={['10:00', '12: 00']} />;\n}\n"})}),"\n",(0,i.jsx)(a.h2,{id:"data-prop",children:"data prop"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"data"})," prop accepts an array of time values in 24-hour format. Values\nmust be unique. To generate a time range, use the ",(0,i.jsx)(a.code,{children:"getTimeRange"})," function\nexported from the ",(0,i.jsx)(a.code,{children:"@mantine/dates"})," package:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-tsx",children:"import { TimeGrid, getTimeRange } from '@mantine/dates';\n\nfunction WithArray() {\n  return <TimeGrid data={['10:00', '12:00']} />\n}\n\nfunction WithRange() {\n  // In this example we generate time range from 10:00 to 14:00 with 1 hour step:\n  // ['10:00', '11:00', '12:00', '13:00', '14:00']\n  return <TimeGrid data={getTimeRange({ from: '10:00', to: '14:00', step: '01:00' })} />\n}\n"})}),"\n",(0,i.jsx)(a.h2,{id:"min-and-max-time",children:"Min and max time"}),"\n",(0,i.jsxs)(a.p,{children:["Set the ",(0,i.jsx)(a.code,{children:"minTime"})," and ",(0,i.jsx)(a.code,{children:"maxTime"})," props to limit the available time range.\nBoth props accept time values in 24-hour format:"]}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.minMax}),"\n",(0,i.jsx)(a.h2,{id:"disable-specific-controls",children:"Disable specific controls"}),"\n",(0,i.jsxs)(a.p,{children:["You can disable specific time values by providing an array of disabled\nvalues to the ",(0,i.jsx)(a.code,{children:"disableTime"})," prop:"]}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.disableTime}),"\n",(0,i.jsx)(a.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,i.jsxs)(a.p,{children:["Set the ",(0,i.jsx)(a.code,{children:"allowDeselect"})," prop to allow deselecting the time value by clicking on\nthe control with the selected value:"]}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.allowDeselect}),"\n",(0,i.jsx)(a.h2,{id:"change-ampm-labels",children:"Change AM/PM labels"}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.amPmLabels}),"\n",(0,i.jsx)(a.h2,{id:"disabled",children:"Disabled"}),"\n",(0,i.jsxs)(a.p,{children:["Set the ",(0,i.jsx)(a.code,{children:"disabled"})," prop to disable all controls:"]}),"\n",(0,i.jsx)(r,{data:n.TimeGridDemos.disabled})]})}e.s(["default",0,function(e={}){return(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})})}])},966491,(e,i,t)=>{let n="/dates/time-grid";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(673904)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);
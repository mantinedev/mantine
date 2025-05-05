(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1213],{48779:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-value",function(){return s(58926)}])},58926:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var a=s(31085),n=s(71184),r=s(26629),o=s(93065),i=s(86480);let d={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.E,{children:["12h format: ",(0,a.jsx)(i.z,{value:"18:45:34",format:"12h",withSeconds:!0})]}),(0,a.jsxs)(o.E,{children:["24h format: ",(0,a.jsx)(i.z,{value:"18:45:34",withSeconds:!0})]})]})},code:`
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
`},l={type:"code",component:function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(o.E,{children:["Custom AM/PM labels:"," ",(0,a.jsx)(i.z,{value:"18:45:34",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})]})})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928', pm: '\u0905\u092A\u0930\u093E\u0939\u094D\u0928' }} />
      </Text>
    </div>
  );
}
`},u={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.E,{children:["24h format: ",(0,a.jsx)(i.z,{value:new Date(2021,1,1,18,45,34)})]}),(0,a.jsxs)(o.E,{children:["12h format: ",(0,a.jsx)(i.z,{format:"12h",value:new Date(2021,1,1,18,45,34)})]})]})},code:`
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
`};var h=s(18675),c=s(20017);let m=(0,h.P)(c.XZ.TimeValue);function v(e){let t={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"TimeValue"})," component to display time in different formats:"]}),"\n",(0,a.jsx)(s,{data:r.C}),"\n",(0,a.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"withSeconds"})," prop to display seconds:"]}),"\n",(0,a.jsx)(s,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"ampm-labels",children:"AM/PM labels"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"amPmLabels"})," prop to display AM/PM labels:"]}),"\n",(0,a.jsx)(s,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"date-object",children:"Date object"}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.code,{children:"Date"})," object instead of string as ",(0,a.jsx)(t.code,{children:"value"}),":"]}),"\n",(0,a.jsx)(s,{data:u})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(v,{...e})})}},87186:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var a=(0,s(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},26629:(e,t,s)=>{"use strict";s.d(t,{C:()=>o});var a=s(31085),n=s(93065),r=s(86480);let o={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(n.E,{children:["24h format: ",(0,a.jsx)(r.z,{value:"18:45:34"})]}),(0,a.jsxs)(n.E,{children:["12h format: ",(0,a.jsx)(r.z,{value:"18:45:34",format:"12h"})]})]})},code:`
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
`}},37229:(e,t,s)=>{"use strict";function a(e){return e<10?`0${e}`:`${e}`}s.d(t,{Z:()=>a})},32241:(e,t,s)=>{"use strict";function a(e){let[t=null,s=null,a=null]=e.split(":").map(Number);return{hours:t,minutes:s,seconds:a}}s.d(t,{N:()=>a})},86480:(e,t,s)=>{"use strict";s.d(t,{z:()=>o});var a=s(31085),n=s(37229),r=s(32241);function o({value:e,format:t="24h",amPmLabels:s={am:"AM",pm:"PM"},withSeconds:o=!1}){return(0,a.jsx)(a.Fragment,{children:function({value:e,format:t,amPmLabels:s,withSeconds:a}){let o=(0,r.N)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${a?`:${e.getSeconds()}`:""}`);if(null===o.hours||null===o.minutes)return null;if("24h"===t)return`${(0,n.Z)(o.hours)}:${(0,n.Z)(o.minutes)}${a?`:${(0,n.Z)(o.seconds||0)}`:""}`;let i=o.hours>=12,d=o.hours%12==0?12:o.hours%12;return`${d}:${(0,n.Z)(o.minutes)}${a?`:${(0,n.Z)(o.seconds||0)}`:""} ${i?s.pm:s.am}`}({value:e,format:t,amPmLabels:s,withSeconds:o})})}o.displayName="@mantine/dates/TimeValue"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(48779)),_N_E=e.O()}]);
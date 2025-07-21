(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59526],{76837:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-formatter",function(){return r(87919)}])},87919:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var a=r(31085),s=r(71184),n=r(79467),o=r(43523);let d={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:["With prefix: ",(0,a.jsx)(o.K,{prefix:"$ ",value:100})]}),(0,a.jsxs)("div",{children:["With suffix: ",(0,a.jsx)(o.K,{value:100,suffix:" RUB"})]})]})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
`,centered:!0},i={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:["With default separator: ",(0,a.jsx)(o.K,{thousandSeparator:!0,value:1e6})]}),(0,a.jsxs)("div",{children:["With custom separator:"," ",(0,a.jsx)(o.K,{thousandSeparator:".",decimalSeparator:",",value:1e6})]})]})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
`,centered:!0},c={type:"code",component:function(){return(0,a.jsx)(o.K,{value:5/3,decimalScale:2})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`,centered:!0};var l=r(18675),h=r(20017);let u=(0,l.P)(h.XZ.NumberFormatter);function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"NumberFormatter"})," to format numbers. It supports the same formatting related props\nas ",(0,a.jsx)(t.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,a.jsx)(r,{data:n.C}),"\n",(0,a.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"prefix"})," and ",(0,a.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the value:"]}),"\n",(0,a.jsx)(r,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"thousands-separator",children:"Thousands separator"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,a.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,a.jsx)(t.code,{children:"thousand"}),", ",(0,a.jsx)(t.code,{children:"lakh"}),", ",(0,a.jsx)(t.code,{children:"wan"}),", ",(0,a.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,a.jsx)(r,{data:i}),"\n",(0,a.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"decimalScale"})," prop controls the number of allowed decimal places:"]}),"\n",(0,a.jsx)(r,{data:c})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...e,children:(0,a.jsx)(p,{...e})})}},87186:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79467:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var a=r(31085),s=r(43523);let n={type:"code",component:function(){return(0,a.jsx)(s.K,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,centered:!0}},43523:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var a=r(31085),s=r(57715);r(14041);var n=r(29686);function o(e){let{value:t,defaultValue:r,...o}=(0,n.Y)("NumberFormatter",null,e);return void 0===t?null:(0,a.jsx)(s.HG,{displayType:"text",value:t,...o})}o.extend=e=>e,o.displayName="@mantine/core/NumberFormatter"}},e=>{var t=t=>e(e.s=t);e.O(0,[57715,18675,90636,46593,38792],()=>t(76837)),_N_E=e.O()}]);
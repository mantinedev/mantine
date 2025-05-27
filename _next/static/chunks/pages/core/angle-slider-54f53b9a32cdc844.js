(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83925],{66409:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return t(36007)}])},36007:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>g});var l=t(31085),n=t(71184),r=t(91401);let s={type:"configurator",component:function(e){return(0,l.jsx)(r.P,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},i={type:"code",component:function(){return(0,l.jsx)(r.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var o=t(31460),d=t(14041),u=t(93065);let c={type:"code",component:function(){let[e,a]=(0,d.useState)(0),[t,n]=(0,d.useState)(0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.P,{value:e,onChange:a,onChangeEnd:n}),(0,l.jsxs)(u.E,{mt:"md",children:["Current value: ",e]}),(0,l.jsxs)(u.E,{children:["End value: ",t]})]})},code:`
import { useState } from 'react';
import { AngleSlider, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  return (
    <>
      <AngleSlider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md">Current value: {value}</Text>
      <Text>End value: {endValue}</Text>
    </>
  );
}
`,centered:!0,maxWidth:200};var v=t(18675),h=t(20017);let p=(0,v.P)(h.XZ.AngleSlider);function m(e){let a={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(a.p,{children:["Use ",(0,l.jsx)(a.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,l.jsx)(t,{data:s}),"\n",(0,l.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(a.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,l.jsxs)(a.p,{children:["To change angle label format use ",(0,l.jsx)(a.code,{children:"formatLabel"})," prop.\nIt accepts function that takes the angle value and returns React node:"]}),"\n",(0,l.jsx)(t,{data:i}),"\n",(0,l.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,l.jsxs)(a.p,{children:["Set ",(0,l.jsx)(a.code,{children:"marks"})," prop to display marks on the slider. In mark object ",(0,l.jsx)(a.code,{children:"value"})," is required,\n",(0,l.jsx)(a.code,{children:"label"})," is optional. To restrict selection to marks only, set ",(0,l.jsx)(a.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,l.jsx)(t,{data:o.Z}),"\n",(0,l.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,l.jsx)(t,{data:c}),"\n",(0,l.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"AngleSlider"})," is fully accessible and supports keyboard interactions:"]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"ArrowLeft"}),"/",(0,l.jsx)(a.code,{children:"ArrowDown"})," and ",(0,l.jsx)(a.code,{children:"ArrowRight"}),"/",(0,l.jsx)(a.code,{children:"Arrowup"})," decrease/increase value by ",(0,l.jsx)(a.code,{children:"step"})]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"Home"})," to set value to 0"]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"End"})," to set value to 359"]}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["To make the component visible to screen readers, set ",(0,l.jsx)(a.code,{children:"aria-label"})," prop:"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(p,{...e,children:(0,l.jsx)(m,{...e})})}},87186:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var l=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},31460:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});var l=t(31085),n=t(56051),r=t(91401);let s={type:"code",component:function(){return(0,l.jsxs)(n.Y,{p:"lg",gap:50,children:[(0,l.jsx)(r.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,l.jsx)(r.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        marks={[
          { value: 0, label: '0\xb0' },
          { value: 45, label: '45\xb0' },
          { value: 90, label: '90\xb0' },
          { value: 135, label: '135\xb0' },
          { value: 180, label: '180\xb0' },
          { value: 225, label: '225\xb0' },
          { value: 270, label: '270\xb0' },
          { value: 315, label: '315\xb0' },
        ]}
      />
    </Group>
  );
}
`,centered:!0}},91401:(e,a,t)=>{"use strict";t.d(a,{P:()=>x});var l=t(31085),n=t(14041),r=t(82307),s=t(4235),i=t(34321),o=t(39735),d=t(96532),u=t(7098),c=t(29686),v=t(69564),h=t(34056),p=t(6754),m={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let g={step:1,withLabel:!0},b=(0,u.V)((e,{size:a,thumbSize:t})=>({root:{"--slider-size":(0,o.D)(a),"--thumb-size":(0,o.D)(t)}})),x=(0,p.P9)((e,a)=>{let t=(0,c.Y)("AngleSlider",g,e),{classNames:o,className:u,style:p,styles:x,unstyled:k,vars:y,step:f,value:A,defaultValue:j,onChange:M,onMouseDown:w,withLabel:E,marks:S,thumbSize:L,restrictToMarks:_,formatLabel:V,onChangeEnd:C,disabled:D,onTouchStart:T,name:I,hiddenInputProps:P,"aria-label":R,tabIndex:z,onScrubStart:N,onScrubEnd:$,...F}=t,[G,U]=(0,r.Z)({value:A,defaultValue:j,finalValue:0,onChange:M}),{ref:X}=(0,s.R)(e=>{X.current&&U(_&&Array.isArray(S)?(0,d.k)(e,S.map(e=>e.value)):e)},{step:f,onChangeEnd:C,onScrubStart:N,onScrubEnd:$}),Y=(0,v.I)({name:"AngleSlider",classes:m,props:t,className:u,style:p,classNames:o,styles:x,unstyled:k,vars:y,varsResolver:b}),Z=S?.map((e,a)=>n.createElement("div",{...Y("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:a}));return(0,l.jsxs)(h.a,{ref:(0,i.pc)(a,X),...Y("root",{focusable:!0}),...F,children:[Z&&Z.length>0&&(0,l.jsx)("div",{...Y("marks"),children:Z}),E&&(0,l.jsx)("div",{...Y("label"),children:"function"==typeof V?V(G):G}),(0,l.jsx)("div",{tabIndex:z??(D?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:e=>{if(D)return;let a=G;if(("ArrowLeft"===e.key||"ArrowDown"===e.key)&&(a=(0,s.i)(G-f,f)),("ArrowRight"===e.key||"ArrowUp"===e.key)&&(a=(0,s.i)(G+f,f)),"Home"===e.key&&(a=0),"End"===e.key&&(a=359),_&&Array.isArray(S)){let t=S.map(e=>e.value),l=t.indexOf(G);a=-1!==l?"ArrowLeft"===e.key||"ArrowDown"===e.key?t[Math.max(0,l-1)]:"ArrowRight"===e.key||"ArrowUp"===e.key?t[Math.min(t.length-1,l+1)]:(0,d.k)(a,t):(0,d.k)(a,t)}U(a),C?.(a)},"aria-label":R,...Y("thumb",{style:{transform:`rotate(${G}deg)`}})}),(0,l.jsx)("input",{type:"hidden",name:I,value:G,...P})]})});x.displayName="@mantine/core/AngleSlider",x.classes=m},4235:(e,a,t)=>{"use strict";t.d(a,{R:()=>s,i:()=>r});var l=t(14041),n=t(68193);function r(e,a){var t,l;let r=(0,n.q)(e,0,360),s=Math.ceil(r/a),i=Math.round(r/a);return t=s>=r/a?s*a==360?0:s*a:i*a,l=a.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(l))}function s(e,{step:a=.01,onChangeEnd:t,onScrubStart:n,onScrubEnd:i}={}){let o=(0,l.useRef)(null),d=(0,l.useRef)(!1),[u,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{d.current=!0},[]),(0,l.useEffect)(()=>{let l=o.current,s=(n,s=!1)=>{if(l){l.style.userSelect="none";let i=r(function(e,a){let t=function(e){let a=e.getBoundingClientRect();return[a.left+a.width/2,a.top+a.height/2]}(a);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([n.clientX,n.clientY],l),a||1);e(i),s&&t?.(i)}},d=()=>{n?.(),c(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",p,!1),document.addEventListener("touchmove",m,{passive:!1}),document.addEventListener("touchend",g,!1)},u=()=>{i?.(),c(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",p,!1),document.removeEventListener("touchmove",m,!1),document.removeEventListener("touchend",g,!1)},v=e=>{d(),s(e)},h=e=>{s(e)},p=e=>{s(e,!0),u()},m=e=>{e.preventDefault(),s(e.touches[0])},g=e=>{s(e.changedTouches[0],!0),u()},b=e=>{e.preventDefault(),d(),s(e.touches[0])};return l?.addEventListener("mousedown",v),l?.addEventListener("touchstart",b,{passive:!1}),()=>{l&&(l.removeEventListener("mousedown",v),l.removeEventListener("touchstart",b))}},[e]),{ref:o,active:u}}}},e=>{var a=a=>e(e.s=a);e.O(0,[18675,90636,46593,38792],()=>a(66409)),_N_E=e.O()}]);
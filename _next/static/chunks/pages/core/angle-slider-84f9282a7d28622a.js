(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83925],{66409:(e,l,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return n(36007)}])},36007:(e,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>p});var r=n(31085),a=n(71184),t=n(91401);let o={type:"configurator",component:function(e){return(0,r.jsx)(t.P,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},i={type:"code",component:function(){return(0,r.jsx)(t.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=n(31460),d=n(14041),u=n(93065);let c={type:"code",component:function(){let[e,l]=(0,d.useState)(0),[n,a]=(0,d.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.P,{value:e,onChange:l,onChangeEnd:a}),(0,r.jsxs)(u.E,{mt:"md",children:["Current value: ",e]}),(0,r.jsxs)(u.E,{children:["End value: ",n]})]})},code:`
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
`,centered:!0,maxWidth:200};var m=n(85954),h=n(38215);let v=(0,m.P)(h.XZ.AngleSlider);function b(e){let l={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Demo:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(l.p,{children:["Use ",(0,r.jsx)(l.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,r.jsx)(n,{data:o}),"\n",(0,r.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(l.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,r.jsxs)(l.p,{children:["To change angle label format use ",(0,r.jsx)(l.code,{children:"formatLabel"})," prop.\nIt accepts function that takes the angle value and returns React node:"]}),"\n",(0,r.jsx)(n,{data:i}),"\n",(0,r.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,r.jsxs)(l.p,{children:["Set ",(0,r.jsx)(l.code,{children:"marks"})," prop to display marks on the slider. In mark object ",(0,r.jsx)(l.code,{children:"value"})," is required,\n",(0,r.jsx)(l.code,{children:"label"})," is optional. To restrict selection to marks only, set ",(0,r.jsx)(l.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,r.jsx)(n,{data:s.Z}),"\n",(0,r.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.code,{children:"AngleSlider"})," is fully accessible and supports keyboard interactions:"]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"ArrowLeft"}),"/",(0,r.jsx)(l.code,{children:"ArrowDown"})," and ",(0,r.jsx)(l.code,{children:"ArrowRight"}),"/",(0,r.jsx)(l.code,{children:"Arrowup"})," decrease/increase value by ",(0,r.jsx)(l.code,{children:"step"})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"Home"})," to set value to 0"]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"End"})," to set value to 359"]}),"\n"]}),"\n",(0,r.jsxs)(l.p,{children:["To make the component visible to screen readers, set ",(0,r.jsx)(l.code,{children:"aria-label"})," prop:"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...e,children:(0,r.jsx)(b,{...e})})}},31460:(e,l,n)=>{"use strict";n.d(l,{Z:()=>o});var r=n(31085),a=n(56051),t=n(91401);let o={type:"code",component:function(){return(0,r.jsxs)(a.Y,{p:"lg",gap:50,children:[(0,r.jsx)(t.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,r.jsx)(t.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},91401:(e,l,n)=>{"use strict";n.d(l,{P:()=>g});var r=n(31085),a=n(14041),t=n(82307),o=n(4235),i=n(34321),s=n(39735),d=n(96532),u=n(7098),c=n(29686),m=n(69564),h=n(34056),v=n(6754),b={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let p={step:1,withLabel:!0},x=(0,u.V)((e,{size:l,thumbSize:n})=>({root:{"--slider-size":(0,s.D)(l),"--thumb-size":(0,s.D)(n)}})),g=(0,v.P9)((e,l)=>{let n=(0,c.Y)("AngleSlider",p,e),{classNames:s,className:u,style:v,styles:g,unstyled:f,vars:j,step:A,value:k,defaultValue:y,onChange:E,onMouseDown:S,withLabel:w,marks:L,thumbSize:_,restrictToMarks:V,formatLabel:D,onChangeEnd:T,disabled:C,onTouchStart:P,name:R,hiddenInputProps:z,"aria-label":M,tabIndex:N,onScrubStart:$,onScrubEnd:I,...F}=n,[G,X]=(0,t.Z)({value:k,defaultValue:y,finalValue:0,onChange:E}),{ref:Y}=(0,o.R)(e=>{Y.current&&X(V&&Array.isArray(L)?(0,d.k)(e,L.map(e=>e.value)):e)},{step:A,onChangeEnd:T,onScrubStart:$,onScrubEnd:I}),Z=(0,m.I)({name:"AngleSlider",classes:b,props:n,className:u,style:v,classNames:s,styles:g,unstyled:f,vars:j,varsResolver:x}),q=L?.map((e,l)=>a.createElement("div",{...Z("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:l}));return(0,r.jsxs)(h.a,{ref:(0,i.pc)(l,Y),...Z("root",{focusable:!0}),...F,children:[q&&q.length>0&&(0,r.jsx)("div",{...Z("marks"),children:q}),w&&(0,r.jsx)("div",{...Z("label"),children:"function"==typeof D?D(G):G}),(0,r.jsx)("div",{tabIndex:N??(C?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:e=>{if(!C){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=(0,o.i)(G-A,A);X(e),T?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=(0,o.i)(G+A,A);X(e),T?.(e)}"Home"===e.key&&(X(0),T?.(0)),"End"===e.key&&(X(359),T?.(359))}},"aria-label":M,...Z("thumb",{style:{transform:`rotate(${G}deg)`}})}),(0,r.jsx)("input",{type:"hidden",name:R,value:G,...z})]})});g.displayName="@mantine/core/AngleSlider",g.classes=b},4235:(e,l,n)=>{"use strict";n.d(l,{R:()=>o,i:()=>t});var r=n(14041),a=n(68193);function t(e,l){var n,r;let t=(0,a.q)(e,0,360),o=Math.ceil(t/l),i=Math.round(t/l);return n=o>=t/l?o*l==360?0:o*l:i*l,r=l.toString().split(".")[1]?.length||0,parseFloat(n.toFixed(r))}function o(e,{step:l=.01,onChangeEnd:n,onScrubStart:a,onScrubEnd:i}={}){let s=(0,r.useRef)(null),d=(0,r.useRef)(!1),[u,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{d.current=!0},[]),(0,r.useEffect)(()=>{let r=s.current,o=(a,o=!1)=>{if(r){r.style.userSelect="none";let i=t(function(e,l){let n=function(e){let l=e.getBoundingClientRect();return[l.left+l.width/2,l.top+l.height/2]}(l);return 360-(180/Math.PI*Math.atan2(e[0]-n[0],e[1]-n[1])+180)}([a.clientX,a.clientY],r),l||1);e(i),o&&n?.(i)}},d=()=>{a?.(),c(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",v,!1),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p,!1)},u=()=>{i?.(),c(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",b,!1),document.removeEventListener("touchend",p,!1)},m=e=>{d(),o(e)},h=e=>{o(e)},v=e=>{o(e,!0),u()},b=e=>{e.preventDefault(),o(e.touches[0])},p=e=>{o(e.changedTouches[0],!0),u()},x=e=>{e.preventDefault(),d(),o(e.touches[0])};return r?.addEventListener("mousedown",m),r?.addEventListener("touchstart",x,{passive:!1}),()=>{r&&(r.removeEventListener("mousedown",m),r.removeEventListener("touchstart",x))}},[e]),{ref:s,active:u}}}},e=>{var l=l=>e(e.s=l);e.O(0,[67456,39699,68831,90636,46593,38792],()=>l(66409)),_N_E=e.O()}]);
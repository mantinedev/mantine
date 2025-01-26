(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14921],{89421:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return l(54455)}])},54455:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return p}});var r=l(52322),t=l(45392),a=l(6004);let o={type:"configurator",component:function(e){return(0,r.jsx)(a.r,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},i={type:"code",component:function(){return(0,r.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=l(86103),u=l(2784),d=l(8582);let c={type:"code",component:function(){let[e,n]=(0,u.useState)(0),[l,t]=(0,u.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.r,{value:e,onChange:n,onChangeEnd:t}),(0,r.jsxs)(d.x,{mt:"md",children:["Current value: ",e]}),(0,r.jsxs)(d.x,{children:["End value: ",l]})]})},code:`
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
`,centered:!0,maxWidth:200};var m=l(54078),h=l(15019);let v=(0,m.A)(h.us.AngleSlider);function b(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,r.jsx)(l,{data:o}),"\n",(0,r.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,r.jsxs)(n.p,{children:["To change angle label format use ",(0,r.jsx)(n.code,{children:"formatLabel"})," prop.\nIt accepts function that takes the angle value and returns React node:"]}),"\n",(0,r.jsx)(l,{data:i}),"\n",(0,r.jsx)(n.h2,{id:"marks",children:"Marks"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"marks"})," prop to display marks on the slider. In mark object ",(0,r.jsx)(n.code,{children:"value"})," is required,\n",(0,r.jsx)(n.code,{children:"label"})," is optional. To restrict selection to marks only, set ",(0,r.jsx)(n.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,r.jsx)(l,{data:s.E}),"\n",(0,r.jsx)(n.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,r.jsx)(l,{data:c}),"\n",(0,r.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AngleSlider"})," is fully accessible and supports keyboard interactions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ArrowLeft"}),"/",(0,r.jsx)(n.code,{children:"ArrowDown"})," and ",(0,r.jsx)(n.code,{children:"ArrowRight"}),"/",(0,r.jsx)(n.code,{children:"Arrowup"})," decrease/increase value by ",(0,r.jsx)(n.code,{children:"step"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Home"})," to set value to 0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"End"})," to set value to 359"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To make the component visible to screen readers, set ",(0,r.jsx)(n.code,{children:"aria-label"})," prop:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...e,children:(0,r.jsx)(b,{...e})})}},86103:function(e,n,l){"use strict";l.d(n,{E:function(){return o}});var r=l(52322),t=l(93010),a=l(6004);let o={type:"code",component:function(){return(0,r.jsxs)(t.Z,{p:"lg",gap:50,children:[(0,r.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,r.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},6004:function(e,n,l){"use strict";l.d(n,{r:function(){return f}});var r=l(52322),t=l(2784),a=l(9341),o=l(28994),i=l(70837),s=l(58898),u=l(86411),d=l(11200),c=l(38483),m=l(46690),h=l(28559),v=l(82027),b={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let p={step:1,withLabel:!0},x=(0,d.Z)((e,{size:n,thumbSize:l})=>({root:{"--slider-size":(0,s.h)(n),"--thumb-size":(0,s.h)(l)}})),f=(0,v.d5)((e,n)=>{let l=(0,c.w)("AngleSlider",p,e),{classNames:s,className:d,style:v,styles:f,unstyled:g,vars:j,step:A,value:y,defaultValue:k,onChange:E,onMouseDown:w,withLabel:S,marks:L,thumbSize:_,restrictToMarks:V,formatLabel:C,onChangeEnd:T,disabled:D,onTouchStart:M,name:z,hiddenInputProps:N,"aria-label":$,tabIndex:R,onScrubStart:F,onScrubEnd:G,...I}=l,[P,U]=(0,a.C)({value:y,defaultValue:k,finalValue:0,onChange:E}),{ref:X}=(0,o.M)(e=>{X.current&&U(V&&Array.isArray(L)?(0,u.s)(e,L.map(e=>e.value)):e)},{step:A,onChangeEnd:T,onScrubStart:F,onScrubEnd:G}),Y=(0,m.y)({name:"AngleSlider",classes:b,props:l,className:d,style:v,classNames:s,styles:f,unstyled:g,vars:j,varsResolver:x}),q=L?.map((e,n)=>t.createElement("div",{...Y("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,r.jsxs)(h.x,{ref:(0,i.Yx)(n,X),...Y("root",{focusable:!0}),...I,children:[q&&q.length>0&&(0,r.jsx)("div",{...Y("marks"),children:q}),S&&(0,r.jsx)("div",{...Y("label"),children:"function"==typeof C?C(P):P}),(0,r.jsx)("div",{tabIndex:R??(D?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":P,onKeyDown:e=>{if(!D){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=(0,o.w)(P-A,A);U(e),T?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=(0,o.w)(P+A,A);U(e),T?.(e)}"Home"===e.key&&(U(0),T?.(0)),"End"===e.key&&(U(359),T?.(359))}},"aria-label":$,...Y("thumb",{style:{transform:`rotate(${P}deg)`}})}),(0,r.jsx)("input",{type:"hidden",name:z,value:P,...N})]})});f.displayName="@mantine/core/AngleSlider",f.classes=b},28994:function(e,n,l){"use strict";l.d(n,{M:function(){return o},w:function(){return a}});var r=l(2784),t=l(82692);function a(e,n){var l,r;let a=(0,t.u)(e,0,360),o=Math.ceil(a/n);return l=o>=a/n?o*n==360?0:o*n:Math.round(a/n)*n,r=n.toString().split(".")[1]?.length||0,parseFloat(l.toFixed(r))}function o(e,{step:n=.01,onChangeEnd:l,onScrubStart:t,onScrubEnd:o}={}){let i=(0,r.useRef)(null),s=(0,r.useRef)(!1),[u,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{s.current=!0},[]),(0,r.useEffect)(()=>{let r=i.current,s=(t,o=!1)=>{if(r){r.style.userSelect="none";let i=a(function(e,n){let l=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-l[0],e[1]-l[1])+180)}([t.clientX,t.clientY],r),n||1);e(i),o&&l?.(i)}},u=()=>{t?.(),d(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",v,!1),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p,!1)},c=()=>{o?.(),d(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",b,!1),document.removeEventListener("touchend",p,!1)},m=e=>{u(),s(e)},h=e=>{s(e)},v=e=>{s(e,!0),c()},b=e=>{e.preventDefault(),s(e.touches[0])},p=e=>{s(e.changedTouches[0],!0),c()},x=e=>{e.preventDefault(),u(),s(e.touches[0])};return r?.addEventListener("mousedown",m),r?.addEventListener("touchstart",x,{passive:!1}),()=>{r&&(r.removeEventListener("mousedown",m),r.removeEventListener("touchstart",x))}},[e]),{ref:i,active:u}}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=89421)}),_N_E=e.O()}]);
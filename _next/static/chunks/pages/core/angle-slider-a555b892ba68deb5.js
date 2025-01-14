(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14921],{89421:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return r(54455)}])},54455:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var l=r(52322),t=r(45392),a=r(6004);let o={type:"configurator",component:function(e){return(0,l.jsx)(a.r,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},i={type:"code",component:function(){return(0,l.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=r(86103),u=r(2784),d=r(8582);let c={type:"code",component:function(){let[e,n]=(0,u.useState)(0),[r,t]=(0,u.useState)(0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.r,{value:e,onChange:n,onChangeEnd:t}),(0,l.jsxs)(d.x,{mt:"md",children:["Current value: ",e]}),(0,l.jsxs)(d.x,{children:["End value: ",r]})]})},code:`
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
`,centered:!0,maxWidth:200};var m=r(54078),h=r(15019);let v=(0,m.A)(h.us.AngleSlider);function b(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.p,{children:["Use ",(0,l.jsx)(n.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,l.jsx)(r,{data:o}),"\n",(0,l.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,l.jsxs)(n.p,{children:["To change angle label format use ",(0,l.jsx)(n.code,{children:"formatLabel"})," prop.\nIt accepts function that takes the angle value and returns React node:"]}),"\n",(0,l.jsx)(r,{data:i}),"\n",(0,l.jsx)(n.h2,{id:"marks",children:"Marks"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"marks"})," prop to display marks on the slider. In mark object ",(0,l.jsx)(n.code,{children:"value"})," is required,\n",(0,l.jsx)(n.code,{children:"label"})," is optional. To restrict selection to marks only, set ",(0,l.jsx)(n.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,l.jsx)(r,{data:s.E}),"\n",(0,l.jsx)(n.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,l.jsx)(r,{data:c}),"\n",(0,l.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AngleSlider"})," is fully accessible and supports keyboard interactions:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ArrowLeft"}),"/",(0,l.jsx)(n.code,{children:"ArrowDown"})," and ",(0,l.jsx)(n.code,{children:"ArrowRight"}),"/",(0,l.jsx)(n.code,{children:"Arrowup"})," decrease/increase value by ",(0,l.jsx)(n.code,{children:"step"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Home"})," to set value to 0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"End"})," to set value to 359"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["To make the component visible to screen readers, set ",(0,l.jsx)(n.code,{children:"aria-label"})," prop:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(v,{...e,children:(0,l.jsx)(b,{...e})})}},86103:function(e,n,r){"use strict";r.d(n,{E:function(){return o}});var l=r(52322),t=r(93010),a=r(6004);let o={type:"code",component:function(){return(0,l.jsxs)(t.Z,{p:"lg",gap:50,children:[(0,l.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,l.jsx)(a.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},6004:function(e,n,r){"use strict";r.d(n,{r:function(){return f}});var l=r(52322),t=r(2784),a=r(9341),o=r(28994),i=r(70837),s=r(58898),u=r(86411),d=r(11200),c=r(38483),m=r(46690),h=r(28559),v=r(82027),b={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let p={step:1,withLabel:!0},x=(0,d.Z)((e,{size:n,thumbSize:r})=>({root:{"--slider-size":(0,s.h)(n),"--thumb-size":(0,s.h)(r)}})),f=(0,v.d5)((e,n)=>{let r=(0,c.w)("AngleSlider",p,e),{classNames:s,className:d,style:v,styles:f,unstyled:g,vars:j,step:A,value:y,defaultValue:k,onChange:E,onMouseDown:w,withLabel:S,marks:L,thumbSize:_,restrictToMarks:V,formatLabel:C,onChangeEnd:T,disabled:D,onTouchStart:M,name:z,hiddenInputProps:N,"aria-label":$,tabIndex:R,onScrubStart:F,onScrubEnd:G,...I}=r,[P,U]=(0,a.C)({value:y,defaultValue:k,finalValue:0,onChange:E}),{ref:X}=(0,o.M)(e=>{X.current&&U(V&&Array.isArray(L)?(0,u.s)(e,L.map(e=>e.value)):e)},{step:A,onChangeEnd:T,onScrubStart:F,onScrubEnd:G}),Y=(0,m.y)({name:"AngleSlider",classes:b,props:r,className:d,style:v,classNames:s,styles:f,unstyled:g,vars:j,varsResolver:x}),q=L?.map((e,n)=>t.createElement("div",{...Y("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,l.jsxs)(h.x,{ref:(0,i.Yx)(n,X),...Y("root",{focusable:!0}),...I,children:[q&&q.length>0&&(0,l.jsx)("div",{...Y("marks"),children:q}),S&&(0,l.jsx)("div",{...Y("label"),children:"function"==typeof C?C(P):P}),(0,l.jsx)("div",{tabIndex:R??(D?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":P,onKeyDown:e=>{if(!D){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=(0,o.w)(P-A,A);U(e),T?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=(0,o.w)(P+A,A);U(e),T?.(e)}"Home"===e.key&&(U(0),T?.(0)),"End"===e.key&&(U(359),T?.(359))}},"aria-label":$,...Y("thumb",{style:{transform:`rotate(${P}deg)`}})}),(0,l.jsx)("input",{type:"hidden",name:z,value:P,...N})]})});f.displayName="@mantine/core/AngleSlider",f.classes=b},28994:function(e,n,r){"use strict";r.d(n,{M:function(){return o},w:function(){return a}});var l=r(2784),t=r(82692);function a(e,n){var r,l;let a=(0,t.u)(e,0,360),o=Math.ceil(a/n);return r=o>=a/n?o*n==360?0:o*n:Math.round(a/n)*n,l=n.toString().split(".")[1]?.length||0,parseFloat(r.toFixed(l))}function o(e,{step:n=.01,onChangeEnd:r,onScrubStart:t,onScrubEnd:o}={}){let i=(0,l.useRef)(null),s=(0,l.useRef)(!1),[u,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{s.current=!0},[]),(0,l.useEffect)(()=>{let l=(l,t=!1)=>{if(i.current){i.current.style.userSelect="none";let o=a(function(e,n){let r=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-r[0],e[1]-r[1])+180)}([l.clientX,l.clientY],i.current),n||1);e(o),t&&r?.(o)}},s=()=>{t?.(),d(!0),document.addEventListener("mousemove",m,!1),document.addEventListener("mouseup",h,!1),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",b,!1)},u=()=>{o?.(),d(!1),document.removeEventListener("mousemove",m,!1),document.removeEventListener("mouseup",h,!1),document.removeEventListener("touchmove",v,!1),document.removeEventListener("touchend",b,!1)},c=e=>{s(),l(e)},m=e=>{l(e)},h=e=>{l(e,!0),u()},v=e=>{e.preventDefault(),l(e.touches[0])},b=e=>{l(e.changedTouches[0],!0),u()},p=e=>{e.preventDefault(),s(),l(e.touches[0])};return i.current?.addEventListener("mousedown",c),i.current?.addEventListener("touchstart",p,{passive:!1}),()=>{i.current&&(i.current.removeEventListener("mousedown",c),i.current.removeEventListener("touchstart",p))}},[e]),{ref:i,active:u}}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=89421)}),_N_E=e.O()}]);
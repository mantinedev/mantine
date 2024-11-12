(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14921],{89421:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return l(54455)}])},54455:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return p}});var a=l(52322),r=l(45392),t=l(6004);let o={type:"configurator",component:function(e){return(0,a.jsx)(t.r,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},i={type:"code",component:function(){return(0,a.jsx)(t.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=l(86103),d=l(2784),u=l(8582);let c={type:"code",component:function(){let[e,n]=(0,d.useState)(0),[l,r]=(0,d.useState)(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.r,{value:e,onChange:n,onChangeEnd:r}),(0,a.jsxs)(u.x,{mt:"md",children:["Current value: ",e]}),(0,a.jsxs)(u.x,{children:["End value: ",l]})]})},code:`
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
`,centered:!0,maxWidth:200};var m=l(25071),h=l(15019);let b=(0,m.A)(h.us.AngleSlider);function v(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,a.jsx)(l,{data:o}),"\n",(0,a.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,a.jsxs)(n.p,{children:["To change angle label format use ",(0,a.jsx)(n.code,{children:"formatLabel"})," prop.\nIt accepts function that takes the angle value and returns React node:"]}),"\n",(0,a.jsx)(l,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"marks",children:"Marks"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"marks"})," prop to display marks on the slider. In mark object ",(0,a.jsx)(n.code,{children:"value"})," is required,\n",(0,a.jsx)(n.code,{children:"label"})," is optional. To restrict selection to marks only, set ",(0,a.jsx)(n.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,a.jsx)(l,{data:s.E}),"\n",(0,a.jsx)(n.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,a.jsx)(l,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"AngleSlider"})," is fully accessible and supports keyboard interactions:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ArrowLeft"}),"/",(0,a.jsx)(n.code,{children:"ArrowDown"})," and ",(0,a.jsx)(n.code,{children:"ArrowRight"}),"/",(0,a.jsx)(n.code,{children:"Arrowup"})," decrease/increase value by ",(0,a.jsx)(n.code,{children:"step"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Home"})," to set value to 0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"End"})," to set value to 359"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To make the component visible to screen readers, set ",(0,a.jsx)(n.code,{children:"aria-label"})," prop:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(b,{...e,children:(0,a.jsx)(v,{...e})})}},86103:function(e,n,l){"use strict";l.d(n,{E:function(){return o}});var a=l(52322),r=l(93010),t=l(6004);let o={type:"code",component:function(){return(0,a.jsxs)(r.Z,{p:"lg",gap:50,children:[(0,a.jsx)(t.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,a.jsx)(t.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},6004:function(e,n,l){"use strict";l.d(n,{r:function(){return f}});var a=l(52322),r=l(2784),t=l(82692),o=l(9341),i=l(70837),s=l(58898),d=l(86411),u=l(11200),c=l(38483),m=l(46690),h=l(28559),b=l(82027),v={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};function p(e,n){let l=(0,t.u)(e,0,360),a=Math.ceil(l/n);return a>=l/n?a*n==360?0:a*n:Math.round(l/n)*n}let x={step:1,withLabel:!0},g=(0,u.Z)((e,{size:n,thumbSize:l})=>({root:{"--slider-size":(0,s.h)(n),"--thumb-size":(0,s.h)(l)}})),f=(0,b.d5)((e,n)=>{let l=(0,c.w)("AngleSlider",x,e),{classNames:t,className:s,style:u,styles:b,unstyled:f,vars:j,step:k,value:A,defaultValue:y,onChange:S,onMouseDown:E,withLabel:w,marks:_,thumbSize:L,restrictToMarks:C,formatLabel:T,onChangeEnd:V,disabled:D,onTouchStart:M,name:z,hiddenInputProps:N,"aria-label":$,tabIndex:R,...G}=l,I=(0,r.useRef)(null),[P,U]=(0,o.C)({value:A,defaultValue:y,finalValue:0,onChange:S}),X=(0,m.y)({name:"AngleSlider",classes:v,props:l,className:s,style:u,classNames:t,styles:b,unstyled:f,vars:j,varsResolver:g}),Y=(e,n=!1)=>{if(I.current){let l=p(function(e,n){let l=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-l[0],e[1]-l[1])+180)}([e.clientX,e.clientY],I.current),k||1),a=C&&Array.isArray(_)?(0,d.s)(l,_.map(e=>e.value)):l;U(a),n&&V?.(a)}},q=(0,r.useCallback)(e=>{Y(e)},[]),F=(0,r.useCallback)(e=>{Y(e,!0),B()},[]),H=(0,r.useCallback)(e=>{Y(e.touches[0])},[]),O=(0,r.useCallback)(e=>{Y(e.changedTouches[0],!0),B()},[]),Z=()=>{document.addEventListener("mousemove",q,!1),document.addEventListener("mouseup",F,!1),document.addEventListener("touchmove",H,!1),document.addEventListener("touchend",O,!1)},B=()=>{document.removeEventListener("mousemove",q,!1),document.removeEventListener("mouseup",F,!1),document.removeEventListener("touchmove",H,!1),document.removeEventListener("touchend",O,!1)},K=_?.map((e,n)=>r.createElement("div",{...X("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,a.jsxs)(h.x,{ref:(0,i.Yx)(n,I),...X("root",{focusable:!0}),onMouseDown:e=>{E?.(e),Z()},onTouchStart:e=>{M?.(e),Z()},...G,children:[K&&K.length>0&&(0,a.jsx)("div",{...X("marks"),children:K}),w&&(0,a.jsx)("div",{...X("label"),children:"function"==typeof T?T(P):P}),(0,a.jsx)("div",{tabIndex:R??(D?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":P,onKeyDown:e=>{if(!D){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=p(P-k,k);U(e),V?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=p(P+k,k);U(e),V?.(e)}"Home"===e.key&&(U(0),V?.(0)),"End"===e.key&&(U(359),V?.(359))}},"aria-label":$,...X("thumb",{style:{transform:`rotate(${P}deg)`}})}),(0,a.jsx)("input",{type:"hidden",name:z,value:P,...N})]})});f.displayName="@mantine/core/AngleSlider",f.classes=v}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=89421)}),_N_E=e.O()}]);
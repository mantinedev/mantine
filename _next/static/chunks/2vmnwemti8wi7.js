(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,l)=>{let r={};for(var a in e)n(r,a,{get:e[a],enumerable:!0});return l||n(r,Symbol.toStringTag,{value:"Module"}),r}])},200814,e=>{"use strict";var n=e.i(852361),l=e.i(191788);function r(e,l){var r,a;let t=(0,n.clamp)(e,0,360),o=Math.ceil(t/l),i=Math.round(t/l);return r=o>=t/l?o*l==360?0:o*l:i*l,a=l.toString().split(".")[1]?.length||0,parseFloat(r.toFixed(a))}e.s(["normalizeRadialValue",0,r,"useRadialMove",0,function(e,{step:n=.01,onChangeEnd:a,onScrubStart:t,onScrubEnd:o}={}){let[i,s]=(0,l.useState)(!1),d=(0,l.useRef)(null);return(0,l.useEffect)(()=>()=>{d.current?.()},[]),{ref:(0,l.useCallback)(l=>{let i=(t,o=!1)=>{if(l){var i;let s,d;l.style.userSelect="none";let u=r((i=[t.clientX,t.clientY],360-(180/Math.PI*Math.atan2(i[0]-(d=[(s=l.getBoundingClientRect()).left+s.width/2,s.top+s.height/2])[0],i[1]-d[1])+180)),n||1);e(u),o&&a?.(u)}},u=()=>{t?.(),s(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",v,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",b,!1)},c=()=>{o?.(),s(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",b,!1)},m=e=>{u(),i(e)},h=e=>{i(e)},v=e=>{i(e,!0),c()},p=e=>{e.preventDefault(),i(e.touches[0])},b=e=>{i(e.changedTouches[0],!0),c()},g=e=>{e.preventDefault(),u(),i(e.touches[0])};return l?.addEventListener("mousedown",m),l?.addEventListener("touchstart",g,{passive:!1}),d.current=()=>{document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",b,!1)},()=>{l&&(l.removeEventListener("mousedown",m),l.removeEventListener("touchstart",g))}},[e]),active:i}}])},946288,e=>{"use strict";var n=e.i(779177),l=e.i(312773),r=e.i(481178),a=e.i(44091),t=e.i(391466),o=e.i(275519),i=e.i(232471),s={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"},d=e.i(191788),u=e.i(200814),c=e.i(332977),m=e.i(579560),h=e.i(391398);let v={step:1,withLabel:!0},p=(0,r.createVarsResolver)((e,{size:l,thumbSize:r})=>({root:{"--slider-size":(0,n.rem)(l),"--thumb-size":(0,n.rem)(r)}})),b=(0,o.factory)(e=>{let n=(0,a.useProps)("AngleSlider",v,e),{classNames:r,className:o,style:b,styles:g,unstyled:x,vars:f,step:j,value:A,defaultValue:y,onChange:S,onMouseDown:k,withLabel:w,marks:D,thumbSize:E,restrictToMarks:L,formatLabel:_,onChangeEnd:T,disabled:R,onTouchStart:V,name:C,hiddenInputProps:M,"aria-label":N,tabIndex:P,onScrubStart:U,onScrubEnd:z,mod:$,attributes:B,ref:F,...X}=n,I=(0,d.useRef)(null),[G,K]=(0,m.useUncontrolled)({value:A,defaultValue:y,finalValue:0,onChange:S}),{ref:O}=(0,u.useRadialMove)(e=>{I.current&&!R&&K(L&&Array.isArray(D)?(0,l.findClosestNumber)(e,D.map(e=>e.value)):e)},{step:j,onChangeEnd:T,onScrubStart:U,onScrubEnd:z}),q=(0,t.useStyles)({name:"AngleSlider",classes:s,props:n,className:o,style:b,classNames:r,styles:g,unstyled:x,attributes:B,vars:f,varsResolver:p}),H=D?.map((e,n)=>(0,d.createElement)("div",{...q("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,h.jsxs)(i.Box,{ref:(0,c.useMergedRef)(F,I,O),...q("root",{focusable:!0}),mod:[{disabled:R},$],...X,children:[H&&H.length>0&&(0,h.jsx)("div",{...q("marks"),children:H}),w&&(0,h.jsx)("div",{...q("label"),children:"function"==typeof _?_(G):G}),(0,h.jsx)("div",{tabIndex:P??(R?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:e=>{if(R)return;let n=G;if(("ArrowLeft"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),n=0===G?359:(0,u.normalizeRadialValue)(G-j,j)),("ArrowRight"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),n=359===G?0:(0,u.normalizeRadialValue)(G+j,j)),"Home"===e.key&&(n=0),"End"===e.key&&(n=359),L&&Array.isArray(D)){let r=D.map(e=>e.value),a=r.indexOf(G);n=-1!==a?"ArrowLeft"===e.key||"ArrowDown"===e.key?r[0===a?r.length-1:a-1]:"ArrowRight"===e.key||"ArrowUp"===e.key?r[a===r.length-1?0:a+1]:(0,l.findClosestNumber)(n,r):(0,l.findClosestNumber)(n,r)}K(n),T?.(n)},"aria-label":N,...q("thumb",{style:{transform:`rotate(${G}deg)`}})}),(0,h.jsx)("input",{type:"hidden",name:C,value:G,...M})]})});b.displayName="@mantine/core/AngleSlider",b.classes=s,b.varsResolver=p,e.s(["AngleSlider",0,b],946288)},883537,e=>{"use strict";var n=e.i(648863),l=e.i(191788),r=e.i(232471),a=e.i(391398),t=e.i(200814);let o={type:"code",component:function(){let[e,n]=(0,l.useState)(115),{ref:o}=(0,t.useRadialMove)(n);return(0,a.jsxs)(r.Box,{className:"m_7cf02604",ref:o,style:{"--angle":`${e}deg`},children:[(0,a.jsxs)("div",{className:"m_2146908f",children:[e,"°"]}),(0,a.jsx)("div",{className:"m_212db0f4"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Box } from '@mantine/core';
import { useRadialMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(115);
  const { ref } = useRadialMove(setValue);

  return (
    <Box className={classes.root} ref={ref} style={{ '--angle': \`\${value}deg\` }}>
      <div className={classes.value}>{value}\xb0</div>
      <div className={classes.thumb} />
    </Box>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  --empty-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6));
  --filled-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));

  background-image: conic-gradient(
    var(--filled-color) 0deg,
    var(--filled-color) var(--angle, 0deg),
    var(--empty-color) var(--angle, 0deg)
  );
}

.value {
  background-color: var(--mantine-color-body);
  width: 132px;
  height: 132px;
  border-radius: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb {
  position: absolute;
  width: 14px;
  height: 160px;
  transform: rotate(var(--angle, 0deg));

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: light-dark(var(--mantine-color-white), var(--filled-color));
    border: 2px solid light-dark(var(--filled-color), var(--mantine-color-white));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}`,language:"scss"}],centered:!0};var i=(0,n.__exportAll)({usage:()=>o});e.s(["UseRadialMoveDemos",0,i],883537)},562019,e=>{"use strict";var n=e.i(648863),l=e.i(946288),r=e.i(391398);let a={type:"configurator",component:function(e){return(0,r.jsx)(l.AngleSlider,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]};var t=e.i(725695);let o={type:"code",component:function(){return(0,r.jsxs)(t.Group,{p:"lg",gap:50,children:[(0,r.jsx)(l.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,r.jsx)(l.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0°"},{value:45,label:"45°"},{value:90,label:"90°"},{value:135,label:"135°"},{value:180,label:"180°"},{value:225,label:"225°"},{value:270,label:"270°"},{value:315,label:"315°"}]})]})},code:`
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
`,centered:!0},i={type:"code",component:function(){return(0,r.jsx)(l.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=e.i(191788),d=e.i(883364);let u={type:"code",component:function(){let[e,n]=(0,s.useState)(0),[a,t]=(0,s.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.AngleSlider,{value:e,onChange:n,onChangeEnd:t}),(0,r.jsxs)(d.Text,{mt:"md",children:["Current value: ",e]}),(0,r.jsxs)(d.Text,{children:["End value: ",a]})]})},code:`
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
`,centered:!0,maxWidth:200},c={type:"code",component:function(){return(0,r.jsx)(l.AngleSlider,{"aria-label":"Angle slider",disabled:!0})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
`,centered:!0};var m=(0,n.__exportAll)({disabled:()=>c,formatLabel:()=>i,marks:()=>o,onChangeEnd:()=>u,usage:()=>a});e.s(["AngleSliderDemos",0,m],562019)},575090,e=>{"use strict";var n=e.i(391398),l=e.i(38856),r=e.i(562019),a=e.i(883537);e.i(603441);var t=e.i(62558);e.i(457450);var o=e.i(418026);let i=(0,t.Layout)(o.MDX_DATA.AngleSlider);function s(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.useMDXComponents)(),...e.components},{Demo:o,KeyboardEventsTable:i}=t;return o||d("Demo",!0),i||d("KeyboardEventsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"AngleSlider"})," component to pick an angle value between 0 and 360:"]}),"\n",(0,n.jsx)(o,{data:r.AngleSliderDemos.usage}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"AngleSlider"})," value is a number between 0 and 360."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"angleslider-with-uncontrolled-forms",children:"AngleSlider with uncontrolled forms"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AngleSlider"})," can be used with uncontrolled forms.\nSet the ",(0,n.jsx)(t.code,{children:"name"})," attribute to include slider value in ",(0,n.jsx)(t.code,{children:"FormData"})," object on form submission.\nTo control initial value in uncontrolled forms, use ",(0,n.jsx)(t.code,{children:"defaultValue"})," prop."]}),"\n",(0,n.jsx)(t.p,{children:"Props for usage with uncontrolled forms:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"})," – name attribute passed to the hidden input"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hiddenInputProps"})," – additional props passed to the hidden input"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Example of uncontrolled ",(0,n.jsx)(t.code,{children:"AngleSlider"})," with ",(0,n.jsx)(t.code,{children:"FormData"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nexport function WithFormData() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Checkbox group value:', formData.get('angle'));\n      }}\n    >\n      <AngleSlider name=\"angle\" defaultValue={120} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"formatLabel"})," prop to change the angle label format.\nIt accepts a function that takes the angle value and returns a React node:"]}),"\n",(0,n.jsx)(o,{data:r.AngleSliderDemos.formatLabel}),"\n",(0,n.jsx)(t.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.code,{children:"marks"})," prop to display marks on the slider.\nA mark is an object with a value (required, number between 0 and 360) and label (optional, React node).\nTo restrict selection to marks only, set the ",(0,n.jsx)(t.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,n.jsx)(o,{data:r.AngleSliderDemos.marks}),"\n",(0,n.jsx)(t.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"onChangeEnd"})," callback fires when the user stops dragging the slider or changes its value with the keyboard.\nUse it as a debounced callback to prevent frequent updates."]}),"\n",(0,n.jsx)(o,{data:r.AngleSliderDemos.onChangeEnd}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"disabled"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"disabled"})," prop disables the component and prevents user interaction:"]}),"\n",(0,n.jsx)(o,{data:r.AngleSliderDemos.disabled}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["To make the component accessible for screen readers, set the ",(0,n.jsx)(t.code,{children:"aria-label"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Keyboard interactions when the component is focused:"}),"\n",(0,n.jsx)(i,{data:[{key:"ArrowDown",description:"Decreases value by step"},{key:"ArrowLeft",description:"Decreases value by step"},{key:"ArrowUp",description:"Increases value by step"},{key:"ArrowRight",description:"Increases value by step"},{key:"Home",description:"Sets value to 0"},{key:"End",description:"Sets value to 359"}]}),"\n",(0,n.jsx)(t.h2,{id:"based-on-use-radial-move",children:"Based on use-radial-move"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AngleSlider"})," is based on the ",(0,n.jsx)(t.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," hook.\nYou can build a custom radial slider using this hook if you need more control over the component's behavior."]}),"\n",(0,n.jsx)(o,{data:a.UseRadialMoveDemos.usage})]})}function d(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,n.jsx)(i,{...e,children:(0,n.jsx)(s,{...e})})}])},573761,(e,n,l)=>{let r="/core/angle-slider";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(575090)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
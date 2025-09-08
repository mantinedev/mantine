(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83925],{1798:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},30529:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/angle-slider",function(){return t(97128)}])},34891:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},51587:(e,a,t)=>{"use strict";t.d(a,{P:()=>x});var l=t(6029),r=t(55729),n=t(7798),s=t(56302),o=t(28136),i=t(26082),d=t(78297),c=t(33987),u=t(38919),h=t(15583),v=t(76320),m=t(8411),p={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let g={step:1,withLabel:!0},b=(0,c.V)((e,{size:a,thumbSize:t})=>({root:{"--slider-size":(0,i.D)(a),"--thumb-size":(0,i.D)(t)}})),x=(0,m.P9)((e,a)=>{let t=(0,u.Y)("AngleSlider",g,e),{classNames:i,className:c,style:m,styles:x,unstyled:f,vars:y,step:k,value:A,defaultValue:j,onChange:M,onMouseDown:w,withLabel:S,marks:E,thumbSize:L,restrictToMarks:D,formatLabel:_,onChangeEnd:V,disabled:C,onTouchStart:N,name:T,hiddenInputProps:P,"aria-label":R,tabIndex:z,onScrubStart:$,onScrubEnd:U,mod:I,attributes:B,...F}=t,X=(0,r.useRef)(null),[G,Y]=(0,n.Z)({value:A,defaultValue:j,finalValue:0,onChange:M}),{ref:Z}=(0,s.R)(e=>{X.current&&!C&&Y(D&&Array.isArray(E)?(0,d.k)(e,E.map(e=>e.value)):e)},{step:k,onChangeEnd:V,onScrubStart:$,onScrubEnd:U}),q=(0,h.I)({name:"AngleSlider",classes:p,props:t,className:c,style:m,classNames:i,styles:x,unstyled:f,attributes:B,vars:y,varsResolver:b}),K=E?.map((e,a)=>(0,r.createElement)("div",{...q("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:a}));return(0,l.jsxs)(v.a,{ref:(0,o.pc)(a,X,Z),...q("root",{focusable:!0}),mod:[{disabled:C},I],...F,children:[K&&K.length>0&&(0,l.jsx)("div",{...q("marks"),children:K}),S&&(0,l.jsx)("div",{...q("label"),children:"function"==typeof _?_(G):G}),(0,l.jsx)("div",{tabIndex:z??(C?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:e=>{if(C)return;let a=G;if(("ArrowLeft"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),a=(0,s.i)(G-k,k)),("ArrowRight"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),a=(0,s.i)(G+k,k)),"Home"===e.key&&(a=0),"End"===e.key&&(a=359),D&&Array.isArray(E)){let t=E.map(e=>e.value),l=t.indexOf(G);a=-1!==l?"ArrowLeft"===e.key||"ArrowDown"===e.key?t[Math.max(0,l-1)]:"ArrowRight"===e.key||"ArrowUp"===e.key?t[Math.min(t.length-1,l+1)]:(0,d.k)(a,t):(0,d.k)(a,t)}Y(a),V?.(a)},"aria-label":R,...q("thumb",{style:{transform:`rotate(${G}deg)`}})}),(0,l.jsx)("input",{type:"hidden",name:T,value:G,...P})]})});x.displayName="@mantine/core/AngleSlider",x.classes=p},56302:(e,a,t)=>{"use strict";t.d(a,{R:()=>s,i:()=>n});var l=t(55729),r=t(38744);function n(e,a){var t,l;let n=(0,r.q)(e,0,360),s=Math.ceil(n/a),o=Math.round(n/a);return t=s>=n/a?s*a==360?0:s*a:o*a,l=a.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(l))}function s(e,{step:a=.01,onChangeEnd:t,onScrubStart:r,onScrubEnd:o}={}){let i=(0,l.useRef)(!1),[d,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{i.current=!0},[]),{ref:(0,l.useCallback)(l=>{let s=(r,s=!1)=>{if(l){l.style.userSelect="none";let o=n(function(e,a){let t=function(e){let a=e.getBoundingClientRect();return[a.left+a.width/2,a.top+a.height/2]}(a);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([r.clientX,r.clientY],l),a||1);e(o),s&&t?.(o)}},i=()=>{r?.(),c(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",v,!1),document.addEventListener("touchmove",m,{passive:!1}),document.addEventListener("touchend",p,!1)},d=()=>{o?.(),c(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",m,!1),document.removeEventListener("touchend",p,!1)},u=e=>{i(),s(e)},h=e=>{s(e)},v=e=>{s(e,!0),d()},m=e=>{e.preventDefault(),s(e.touches[0])},p=e=>{s(e.changedTouches[0],!0),d()},g=e=>{e.preventDefault(),i(),s(e.touches[0])};return l?.addEventListener("mousedown",u),l?.addEventListener("touchstart",g,{passive:!1}),()=>{l&&(l.removeEventListener("mousedown",u),l.removeEventListener("touchstart",g))}},[e]),active:d}}},60140:(e,a,t)=>{"use strict";t.d(a,{P:()=>i});var l=t(6029),r=t(55729),n=t(76320),s=t(56302),o={root:"m_7cf02604",value:"m_2146908f",thumb:"m_212db0f4"};let i={type:"code",component:function(){let[e,a]=(0,r.useState)(115),{ref:t}=(0,s.R)(a);return(0,l.jsxs)(n.a,{className:o.root,ref:t,style:{"--angle":`${e}deg`},children:[(0,l.jsxs)("div",{className:o.value,children:[e,"\xb0"]}),(0,l.jsx)("div",{className:o.thumb})]})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0}},65433:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79593:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});var l=t(6029),r=t(57414),n=t(51587);let s={type:"code",component:function(){return(0,l.jsxs)(r.Y,{p:"lg",gap:50,children:[(0,l.jsx)(n.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,l.jsx)(n.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},84276:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});let l=(0,t(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},97128:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var l=t(6029),r=t(16285),n=t(51587);let s={type:"configurator",component:function(e){return(0,l.jsx)(n.P,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]},o={type:"code",component:function(){return(0,l.jsx)(n.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var i=t(79593),d=t(55729),c=t(45208);let u={type:"code",component:function(){let[e,a]=(0,d.useState)(0),[t,r]=(0,d.useState)(0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.P,{value:e,onChange:a,onChangeEnd:r}),(0,l.jsxs)(c.E,{mt:"md",children:["Current value: ",e]}),(0,l.jsxs)(c.E,{children:["End value: ",t]})]})},code:`
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
`,centered:!0,maxWidth:200},h={type:"code",component:function(){return(0,l.jsx)(n.P,{"aria-label":"Angle slider",disabled:!0})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
`,centered:!0};var v=t(60140),m=t(38547),p=t(5262);let g=(0,m.P)(p.XZ.AngleSlider);function b(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t,KeyboardEventsTable:n}=a;return t||f("Demo",!0),n||f("KeyboardEventsTable",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(a.p,{children:["Use ",(0,l.jsx)(a.code,{children:"AngleSlider"})," component to pick angle value between 0 and 360:"]}),"\n",(0,l.jsx)(t,{data:s}),"\n",(0,l.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"AngleSlider"})," value is a number between 0 and 360."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(180);\n  return <AngleSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(a.h2,{id:"formatlabel",children:"formatLabel"}),"\n",(0,l.jsxs)(a.p,{children:["Use the ",(0,l.jsx)(a.code,{children:"formatLabel"})," prop to change the angle label format.\nIt accepts a function that takes the angle value and returns a React node:"]}),"\n",(0,l.jsx)(t,{data:o}),"\n",(0,l.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,l.jsxs)(a.p,{children:["Set the ",(0,l.jsx)(a.code,{children:"marks"})," prop to display marks on the slider.\nMark is an object of value (required, number between 0 and 360) and label (optional, React node).\nTo restrict selection to marks only, set the ",(0,l.jsx)(a.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,l.jsx)(t,{data:i.Z}),"\n",(0,l.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,l.jsxs)(a.p,{children:["The ",(0,l.jsx)(a.code,{children:"onChangeEnd"})," callback fires when the user stops dragging the slider or changes its value with the keyboard.\nUse it as a debounced callback to prevent frequent updates."]}),"\n",(0,l.jsx)(t,{data:u}),"\n",(0,l.jsx)(a.h2,{id:"disabled",children:"disabled"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"disabled"})," prop disables the component and prevents user interaction:"]}),"\n",(0,l.jsx)(t,{data:h}),"\n",(0,l.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(a.p,{children:["To make the component accessible for screen readers, set the ",(0,l.jsx)(a.code,{children:"aria-label"})," prop:"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import { AngleSlider } from '@mantine/core';\n\nfunction Demo() {\n  return <AngleSlider aria-label=\"Gradient angle\" />;\n}\n"})}),"\n",(0,l.jsx)(a.p,{children:"Keyboard interactions when the component is focused:"}),"\n",(0,l.jsx)(n,{data:[{key:"ArrowDown",description:"Decreases value by step"},{key:"ArrowLeft",description:"Decreases value by step"},{key:"ArrowUp",description:"Increases value by step"},{key:"ArrowRight",description:"Increases value by step"},{key:"Home",description:"Sets value to 0"},{key:"End",description:"Sets value to 359"}]}),"\n",(0,l.jsx)(a.h2,{id:"based-on-use-radial-move",children:"Based on use-radial-move"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"AngleSlider"})," is based on the ",(0,l.jsx)(a.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," hook.\nYou can build a custom radial slider using this hook if you need more control over the component's behavior."]}),"\n",(0,l.jsx)(t,{data:v.P})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(g,{...e,children:(0,l.jsx)(b,{...e})})}function f(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=30529)),_N_E=e.O()}]);
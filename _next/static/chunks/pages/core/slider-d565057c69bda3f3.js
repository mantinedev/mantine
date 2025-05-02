(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57919],{19709:(e,a,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return l(50908)}])},50908:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>W});var t=l(31085),r=l(71184),n=l(84281);let i={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=l(1784);let o={type:"configurator",component:function(e){return(0,t.jsx)(s.F,{defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { RangeSlider } from '@mantine/core';


function Demo() {
  return (
    <RangeSlider
      {{props}}
      defaultValue={[20, 60]}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var d=l(34056);let u={type:"code",component:function(){return(0,t.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,t.jsx)(n.A,{defaultValue:60,disabled:!0}),(0,t.jsx)(s.F,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`};var c=l(14041),m=l(93065);let h={type:"code",component:function(){let[e,a]=(0,c.useState)(50),[l,r]=(0,c.useState)(50);return(0,t.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,t.jsx)(n.A,{value:e,onChange:a,onChangeEnd:r}),(0,t.jsxs)(m.E,{mt:"md",size:"sm",children:["onChange value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsxs)(m.E,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,t.jsx)("b",{children:l})]})]})},code:`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`},x={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.E,{size:"sm",children:"No label"}),(0,t.jsx)(n.A,{defaultValue:40,label:null}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Formatted label"}),(0,t.jsx)(n.A,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Label always visible"}),(0,t.jsx)(n.A,{defaultValue:40,labelAlwaysOn:!0}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,t.jsx)(n.A,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},b=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],p={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.E,{children:"Decimal step"}),(0,t.jsx)(n.A,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,t.jsx)(m.E,{mt:"md",children:"Step matched with marks"}),(0,t.jsx)(n.A,{defaultValue:50,label:e=>b.find(a=>a.value===e).label,step:25,marks:b,styles:{markLabel:{display:"none"}}})]})},code:`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},v={type:"code",component:function(){return(0,t.jsx)(n.A,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,t.jsx)(s.F,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,centered:!0,maxWidth:340},j={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,t.jsx)(n.A,{defaultValue:40,marks:e,mb:32}),(0,t.jsx)(s.F,{defaultValue:[20,80],marks:e,mb:32})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`,centered:!0,maxWidth:400};var g=l(24377);let y={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var k=l(45854),S=(0,l(73366).A)("outline","heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let w={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{thumbChildren:(0,t.jsx)(k.A,{size:16,stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,t.jsx)(s.F,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,t.jsx)(k.A,{size:16,stroke:1.5},"1"),(0,t.jsx)(S,{size:16,stroke:1.5},"2")]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size={16} key="1" />, <IconHeartBroken size={16} key="2" />]}
      />
    </>
  );
}
`,maxWidth:400,centered:!0};function V(e){let a=["KB","MB","GB","TB"],l=0,t=e;for(;t>=1024&&l<a.length-1;)l+=1,t/=1024;return`${t} ${a[l]}`}let A=e=>2**e,T={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:V}),(0,t.jsx)(s.F,{mt:50,scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:V})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},D={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{inverted:!0,defaultValue:80}),(0,t.jsx)(s.F,{inverted:!0,defaultValue:[40,80],mt:"xl"})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,centered:!0,maxWidth:400};var z=l(38607);let M=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,R={type:"styles-api",data:z.s,component:function(e){return(0,t.jsx)(n.A,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:M,centered:!0,maxWidth:400};var C={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let E={type:"code",component:function(){return(0,t.jsx)(d.a,{maw:400,pt:15,pb:20,mx:"auto",children:(0,t.jsx)(n.A,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:C})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
`,language:"scss"}]};var F=l(61914),N=l(85954),_=l(38215);let I=(0,N.P)(_.XZ.Slider);function L(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:l,KeyboardEventsTable:n,StylesApiSelectors:s}=a;return l||B("Demo",!0),n||B("KeyboardEventsTable",!0),s||B("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"slider-component",children:"Slider component"}),"\n",(0,t.jsx)(l,{data:i}),"\n",(0,t.jsx)(a.h2,{id:"rangeslider-component",children:"RangeSlider component"}),"\n",(0,t.jsx)(l,{data:o}),"\n",(0,t.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(a.p,{children:["Controlled ",(0,t.jsx)(a.code,{children:"Slider"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Controlled ",(0,t.jsx)(a.code,{children:"RangeSlider"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(l,{data:u}),"\n",(0,t.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,t.jsx)(l,{data:h}),"\n",(0,t.jsx)(a.h2,{id:"control-label",children:"Control label"}),"\n",(0,t.jsx)(a.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,t.jsx)(a.code,{children:"f => f"})]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,t.jsx)(a.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,t.jsx)(l,{data:x}),"\n",(0,t.jsx)(a.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,t.jsx)(l,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,t.jsxs)(a.p,{children:["To use ",(0,t.jsx)(a.code,{children:"Slider"})," with decimal values, set ",(0,t.jsx)(a.code,{children:"min"}),", ",(0,t.jsx)(a.code,{children:"max"})," and ",(0,t.jsx)(a.code,{children:"step"})," props:"]}),"\n",(0,t.jsx)(l,{data:v}),"\n",(0,t.jsx)(a.h2,{id:"minrange",children:"minRange"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"minRange"})," prop to control minimum range between ",(0,t.jsx)(a.code,{children:"from"})," and ",(0,t.jsx)(a.code,{children:"to"})," values\nin ",(0,t.jsx)(a.code,{children:"RangeSlider"}),". The default value is ",(0,t.jsx)(a.code,{children:"10"}),". The example below shows how to\nuse ",(0,t.jsx)(a.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,t.jsx)(l,{data:f}),"\n",(0,t.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,t.jsxs)(a.p,{children:["Add any number of marks to slider by setting ",(0,t.jsx)(a.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,t.jsx)(a.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,t.jsx)(l,{data:j}),"\n",(0,t.jsx)(a.h2,{id:"restrict-selection-to-marks",children:"Restrict selection to marks"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"restrictToMarks"})," prop to restrict slider value to marks only. Note that in\nthis case ",(0,t.jsx)(a.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(l,{data:g.A}),"\n",(0,t.jsx)(a.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,t.jsx)(l,{data:y}),"\n",(0,t.jsx)(a.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,t.jsx)(l,{data:w}),"\n",(0,t.jsx)(a.h2,{id:"scale",children:"Scale"}),"\n",(0,t.jsxs)(a.p,{children:["You can use the ",(0,t.jsx)(a.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,t.jsxs)(a.p,{children:["In the following demo, the value ",(0,t.jsx)(a.code,{children:"x"})," represents the value ",(0,t.jsx)(a.code,{children:"2^x"}),". Increasing ",(0,t.jsx)(a.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,t.jsx)(a.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(l,{data:T}),"\n",(0,t.jsx)(a.h2,{id:"inverted",children:"Inverted"}),"\n",(0,t.jsxs)(a.p,{children:["You can invert the track with the ",(0,t.jsx)(a.code,{children:"inverted"})," prop:"]}),"\n",(0,t.jsx)(l,{data:D}),"\n",(0,t.jsx)(s,{component:"Slider"}),"\n",(0,t.jsx)(l,{data:R}),"\n",(0,t.jsxs)(a.p,{children:["Example of using ",(0,t.jsx)(a.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,t.jsx)(a.code,{children:"Slider"})," styles:"]}),"\n",(0,t.jsx)(l,{data:E}),"\n",(0,t.jsx)(a.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," and ",(0,t.jsx)(a.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,t.jsx)(a.h2,{id:"build-custom-slider",children:"Build custom slider"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"Slider"})," component does not meet your requirements, you can build a custom slider with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook:"]}),"\n",(0,t.jsx)(l,{data:F.x}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," and ",(0,t.jsx)(a.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Thumbs are focusable"}),"\n",(0,t.jsx)(a.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,t.jsx)(a.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { RangeSlider, Slider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(n,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(I,{...e,children:(0,t.jsx)(L,{...e})})}function B(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21848:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},45854:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},61914:(e,a,l)=>{"use strict";l.d(a,{x:()=>d});var t=l(31085),r=l(14041),n=l(21848),i=l(7235),s=l(68193),o={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let d={type:"code",component:function(){let[e,a]=(0,r.useState)(.3),{ref:l}=(0,i.f)(({x:e})=>a((0,s.q)(e,.1,.9))),d=e<.2||e>.8;return(0,t.jsx)("div",{className:o.root,children:(0,t.jsxs)("div",{className:o.track,ref:l,children:[(0,t.jsx)("div",{className:o.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,t.jsx)("div",{className:o.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,t.jsx)("div",{className:o.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,t.jsx)(n.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0}},24377:(e,a,l)=>{"use strict";l.d(a,{A:()=>s});var t=l(31085),r=l(75390),n=l(84281),i=l(1784);let s={type:"code",component:function(){return(0,t.jsxs)(r.B,{children:[(0,t.jsx)(n.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,a)=>({value:25*a}))}),(0,t.jsx)(i.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400}},1784:(e,a,l)=>{"use strict";l.d(a,{F:()=>z});var t=l(31085),r=l(14041),n=l(82307),i=l(7235),s=l(34321),o=l(39735),d=l(33450),u=l(96532),c=l(7098),m=l(51606),h=l(29686),x=l(69564),b=l(6754),p=l(46746),v=l(96448),f=l(5861),j=l(60881),g=l(36247),y=l(7139),k=l(27064),S=l(48093),w=l(46315),V=l(94023),A=l(85212);let T=(0,c.V)((e,{size:a,color:l,thumbSize:t,radius:r})=>({root:{"--slider-size":(0,d.YC)(a,"slider-size"),"--slider-color":l?(0,m.r)(l,e):void 0,"--slider-radius":void 0===r?void 0:(0,d.nJ)(r),"--slider-thumb-size":void 0!==t?(0,o.D)(t):"calc(var(--slider-size) * 2)"}})),D={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},z=(0,b.P9)((e,a)=>{let l=(0,h.Y)("RangeSlider",D,e),{classNames:o,styles:d,value:c,onChange:m,onChangeEnd:b,size:z,min:M,max:R,minRange:C,maxRange:E,step:F,precision:N,defaultValue:_,name:I,marks:L,label:W,labelTransitionProps:B,labelAlwaysOn:O,thumbFromLabel:H,thumbToLabel:$,showLabelOnHover:q,thumbChildren:P,disabled:X,unstyled:Y,scale:K,inverted:G,className:U,style:Z,vars:J,hiddenInputProps:Q,restrictToMarks:ee,thumbProps:ea,...el}=l,et=(0,x.I)({name:"Slider",props:l,classes:A.A,classNames:o,className:U,styles:d,style:Z,vars:J,varsResolver:T,unstyled:Y}),{dir:er}=(0,p.jH)(),[en,ei]=(0,r.useState)(-1),[es,eo]=(0,r.useState)(!1),[ed,eu]=(0,n.Z)({value:c,defaultValue:_,finalValue:[M,R],onChange:m}),ec=(0,r.useRef)(ed),em=(0,r.useRef)([]),eh=(0,r.useRef)(null),ex=(0,r.useRef)(void 0),eb=[(0,S.E)({value:ed[0],min:M,max:R}),(0,S.E)({value:ed[1],min:M,max:R})],ep=N??(0,w.X)(F),ev=e=>{eu(e),ec.current=e};(0,r.useEffect)(()=>{Array.isArray(c)&&(ec.current=c)},Array.isArray(c)?[c[0],c[1]]:[null,null]);let ef=(e,a,l)=>{if(-1===a)return;let t=[...ec.current];if(ee&&L){let l=(0,u.k)(e,L.map(e=>e.value)),r=t[a];t[a]=l;let n=0===a?1:0,i=(0,V.rq)(L),s=(0,V.HE)(L);l===i&&t[n]===i?t[a]=r:l===s&&t[n]===s?t[a]=r:l===t[n]&&(r>t[n]?t[n]=(0,V.Mh)(l,L):t[n]=(0,V.C8)(l,L))}else t[a]=e,0===a&&(e>t[1]-(C-1e-9)&&(t[1]=Math.min(e+C,R)),e>(R-(C-1e-9)||M)&&(t[a]=ec.current[a]),t[1]-e>E&&(t[1]=e+E)),1===a&&(e<t[0]+C&&(t[0]=Math.max(e-C,M)),e<t[0]+C&&(t[a]=ec.current[a]),e-t[0]>E&&(t[0]=e-E));if(t[0]=(0,k.q)(t[0],ep),t[1]=(0,k.q)(t[1],ep),t[0]>t[1]){let e=t[0];t[0]=t[1],t[1]=e}ev(t),l&&b?.(ec.current)},ej=e=>{X||ef((0,y.c)({value:e,min:M,max:R,step:F,precision:ep}),ex.current,!1)},{ref:eg,active:ey}=(0,i.f)(({x:e})=>ej(e),{onScrubEnd:()=>!X&&b?.(ec.current)},er),ek=e=>{eg.current.focus();let a=eg.current.getBoundingClientRect(),l=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),t=(0,y.c)({value:l-a.left,max:R,min:M,step:F,containerWidth:a.width}),r=Math.abs(ed[0]-t)>Math.abs(ed[1]-t)?1:0,n="ltr"===er?r:1===r?0:1;ex.current=n},eS=()=>1!==en&&0!==en?(ei(0),0):en,ew={max:R,min:M,size:z,labelTransitionProps:B,labelAlwaysOn:O,onBlur:()=>ei(-1)},eV=Array.isArray(P);return(0,t.jsx)(v.h,{value:{getStyles:et},children:(0,t.jsxs)(f.g,{...el,size:z,ref:(0,s.pc)(a,eh),disabled:X,onMouseDownCapture:()=>eh.current?.focus(),onKeyDownCapture:()=>{em.current[0]?.parentElement?.contains(document.activeElement)||em.current[0]?.focus()},children:[(0,t.jsxs)(g.C,{offset:eb[0],marksOffset:ed[0],filled:eb[1]-eb[0],marks:L,inverted:G,min:M,max:R,value:ed[1],disabled:X,containerProps:{ref:eg,onMouseEnter:q?()=>eo(!0):void 0,onMouseLeave:q?()=>eo(!1):void 0,onTouchStartCapture:ek,onTouchEndCapture:()=>{ex.current=-1},onMouseDownCapture:ek,onMouseUpCapture:()=>{ex.current=-1},onKeyDownCapture:e=>{if(!X)switch(e.key){case"ArrowUp":{e.preventDefault();let a=eS();em.current[a].focus();let l=ee&&L?(0,V.C8)(ec.current[a],L):Math.min(Math.max(ec.current[a]+F,M),R);ef((0,k.q)(l,ep),a,!0);break}case"ArrowRight":{e.preventDefault();let a=eS();em.current[a].focus();let l=ee&&L?("rtl"===er?V.Mh:V.C8)(ec.current[a],L):Math.min(Math.max("rtl"===er?ec.current[a]-F:ec.current[a]+F,M),R);ef((0,k.q)(l,ep),a,!0);break}case"ArrowDown":{e.preventDefault();let a=eS();em.current[a].focus();let l=ee&&L?(0,V.Mh)(ec.current[a],L):Math.min(Math.max(ec.current[a]-F,M),R);ef((0,k.q)(l,ep),a,!0);break}case"ArrowLeft":{e.preventDefault();let a=eS();em.current[a].focus();let l=ee&&L?("rtl"===er?V.C8:V.Mh)(ec.current[a],L):Math.min(Math.max("rtl"===er?ec.current[a]+F:ec.current[a]-F,M),R);ef((0,k.q)(l,ep),a,!0)}}}},children:[(0,t.jsx)(j.z,{...ew,value:K(ed[0]),position:eb[0],dragging:ey,label:"function"==typeof W?W((0,k.q)(K(ed[0]),ep)):W,ref:e=>{em.current[0]=e},thumbLabel:H,onMouseDown:()=>void(ex.current=0),onFocus:()=>ei(0),showLabelOnHover:q,isHovered:es,disabled:X,...ea?.(0),children:eV?P[0]:P}),(0,t.jsx)(j.z,{...ew,thumbLabel:$,value:K(ed[1]),position:eb[1],dragging:ey,label:"function"==typeof W?W((0,k.q)(K(ed[1]),ep)):W,ref:e=>{em.current[1]=e},onMouseDown:()=>void(ex.current=1),onFocus:()=>ei(1),showLabelOnHover:q,isHovered:es,disabled:X,...ea?.(1),children:eV?P[1]:P})]}),(0,t.jsx)("input",{type:"hidden",name:`${I}_from`,value:ed[0],...Q}),(0,t.jsx)("input",{type:"hidden",name:`${I}_to`,value:ed[1],...Q})]})})});z.classes=A.A,z.displayName="@mantine/core/RangeSlider"}},e=>{var a=a=>e(e.s=a);e.O(0,[67456,39699,68831,90636,46593,38792],()=>a(19709)),_N_E=e.O()}]);
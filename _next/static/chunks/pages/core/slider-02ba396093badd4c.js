(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57919],{19709:(e,a,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return l(50908)}])},50908:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>B});var t=l(31085),n=l(71184),r=l(84281);let i={type:"configurator",component:function(e){return(0,t.jsx)(r.A,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var d=l(34056);let u={type:"code",component:function(){return(0,t.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,t.jsx)(r.A,{defaultValue:60,disabled:!0}),(0,t.jsx)(s.F,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]})]})},code:`
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
`};var c=l(14041),m=l(93065);let h={type:"code",component:function(){let[e,a]=(0,c.useState)(50),[l,n]=(0,c.useState)(50);return(0,t.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,t.jsx)(r.A,{value:e,onChange:a,onChangeEnd:n}),(0,t.jsxs)(m.E,{mt:"md",size:"sm",children:["onChange value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsxs)(m.E,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,t.jsx)("b",{children:l})]})]})},code:`
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
`},p={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.E,{size:"sm",children:"No label"}),(0,t.jsx)(r.A,{defaultValue:40,label:null}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Formatted label"}),(0,t.jsx)(r.A,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Label always visible"}),(0,t.jsx)(r.A,{defaultValue:40,labelAlwaysOn:!0}),(0,t.jsx)(m.E,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,t.jsx)(r.A,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
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
`,centered:!0,maxWidth:400},v=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],x={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.E,{children:"Decimal step"}),(0,t.jsx)(r.A,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,t.jsx)(m.E,{mt:"md",children:"Step matched with marks"}),(0,t.jsx)(r.A,{defaultValue:50,label:e=>v.find(a=>a.value===e).label,step:25,marks:v,styles:{markLabel:{display:"none"}}})]})},code:`
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
`,centered:!0,maxWidth:400};var b=l(51002);let f={type:"code",component:function(){return(0,t.jsx)(r.A,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,t.jsx)(s.F,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,centered:!0,maxWidth:340};var j=l(96662);let y={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,t.jsx)(r.A,{defaultValue:40,marks:e,mb:32}),(0,t.jsx)(s.F,{defaultValue:[20,80],marks:e,mb:32})]})},code:`
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
`,centered:!0,maxWidth:400};var k=l(24377);let w={type:"configurator",component:function(e){return(0,t.jsx)(r.A,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var S=l(45854),V=(0,l(73366).A)("outline","heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let A={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{thumbChildren:(0,t.jsx)(S.A,{size:16,stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,t.jsx)(s.F,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,t.jsx)(S.A,{size:16,stroke:1.5},"1"),(0,t.jsx)(V,{size:16,stroke:1.5},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function M(e){let a=["KB","MB","GB","TB"],l=0,t=e;for(;t>=1024&&l<a.length-1;)l+=1,t/=1024;return`${t} ${a[l]}`}let z=e=>2**e,R={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{scale:z,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:M}),(0,t.jsx)(s.F,{mt:50,scale:z,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:M})]})},code:`
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
`,centered:!0,maxWidth:400},T={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{inverted:!0,defaultValue:80}),(0,t.jsx)(s.F,{inverted:!0,defaultValue:[40,80],mt:"xl"})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,centered:!0,maxWidth:400};var D=l(38607);let C=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,E={type:"styles-api",data:D.s,component:function(e){return(0,t.jsx)(r.A,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:C,centered:!0,maxWidth:400};var F={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let N={type:"code",component:function(){return(0,t.jsx)(d.a,{maw:400,pt:15,pb:20,mx:"auto",children:(0,t.jsx)(r.A,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:F})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var _=l(61914),O=l(18675),I=l(20017);let L=(0,O.P)(I.XZ.Slider);function W(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:l,KeyboardEventsTable:r,StylesApiSelectors:s}=a;return l||H("Demo",!0),r||H("KeyboardEventsTable",!0),s||H("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"slider-component",children:"Slider component"}),"\n",(0,t.jsx)(l,{data:i}),"\n",(0,t.jsx)(a.h2,{id:"rangeslider-component",children:"RangeSlider component"}),"\n",(0,t.jsx)(l,{data:o}),"\n",(0,t.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(a.p,{children:["Controlled ",(0,t.jsx)(a.code,{children:"Slider"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Controlled ",(0,t.jsx)(a.code,{children:"RangeSlider"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(l,{data:u}),"\n",(0,t.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,t.jsx)(l,{data:h}),"\n",(0,t.jsx)(a.h2,{id:"control-label",children:"Control label"}),"\n",(0,t.jsx)(a.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,t.jsx)(a.code,{children:"f => f"})]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,t.jsx)(a.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,t.jsx)(l,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,t.jsx)(l,{data:x}),"\n",(0,t.jsx)(a.h2,{id:"domain",children:"Domain"}),"\n",(0,t.jsxs)(a.p,{children:["By default, ",(0,t.jsx)(a.code,{children:"min"})," and ",(0,t.jsx)(a.code,{children:"max"})," values define the possible range of values.\n",(0,t.jsx)(a.code,{children:"domain"})," prop allows setting the possible range of values independently of the\n",(0,t.jsx)(a.code,{children:"min"})," and ",(0,t.jsx)(a.code,{children:"max"})," values:"]}),"\n",(0,t.jsx)(l,{data:b.b}),"\n",(0,t.jsx)(a.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,t.jsxs)(a.p,{children:["To use ",(0,t.jsx)(a.code,{children:"Slider"})," with decimal values, set ",(0,t.jsx)(a.code,{children:"min"}),", ",(0,t.jsx)(a.code,{children:"max"})," and ",(0,t.jsx)(a.code,{children:"step"})," props:"]}),"\n",(0,t.jsx)(l,{data:f}),"\n",(0,t.jsx)(a.h2,{id:"minrange",children:"minRange"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"minRange"})," prop to control minimum range between ",(0,t.jsx)(a.code,{children:"from"})," and ",(0,t.jsx)(a.code,{children:"to"})," values\nin ",(0,t.jsx)(a.code,{children:"RangeSlider"}),". The default value is ",(0,t.jsx)(a.code,{children:"10"}),". The example below shows how to\nuse ",(0,t.jsx)(a.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,t.jsx)(l,{data:g}),"\n",(0,t.jsx)(a.h2,{id:"pushonoverlap",children:"pushOnOverlap"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"pushOnOverlap"})," prop controls whether the thumbs should push each other when they overlap.\nBy default, ",(0,t.jsx)(a.code,{children:"pushOnOverlap"})," is ",(0,t.jsx)(a.code,{children:"true"}),", if you want to disable this behavior, set it to ",(0,t.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Example of ",(0,t.jsx)(a.code,{children:"pushOnOverlap={false}"}),":"]}),"\n",(0,t.jsx)(l,{data:j.z}),"\n",(0,t.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,t.jsxs)(a.p,{children:["Add any number of marks to slider by setting ",(0,t.jsx)(a.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,t.jsx)(a.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,t.jsx)(l,{data:y}),"\n",(0,t.jsx)(a.h2,{id:"restrict-selection-to-marks",children:"Restrict selection to marks"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"restrictToMarks"})," prop to restrict slider value to marks only. Note that in\nthis case ",(0,t.jsx)(a.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(l,{data:k.A}),"\n",(0,t.jsx)(a.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,t.jsx)(l,{data:w}),"\n",(0,t.jsx)(a.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,t.jsx)(l,{data:A}),"\n",(0,t.jsx)(a.h2,{id:"scale",children:"Scale"}),"\n",(0,t.jsxs)(a.p,{children:["You can use the ",(0,t.jsx)(a.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,t.jsxs)(a.p,{children:["In the following demo, the value ",(0,t.jsx)(a.code,{children:"x"})," represents the value ",(0,t.jsx)(a.code,{children:"2^x"}),". Increasing ",(0,t.jsx)(a.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,t.jsx)(a.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(l,{data:R}),"\n",(0,t.jsx)(a.h2,{id:"inverted",children:"Inverted"}),"\n",(0,t.jsxs)(a.p,{children:["You can invert the track with the ",(0,t.jsx)(a.code,{children:"inverted"})," prop:"]}),"\n",(0,t.jsx)(l,{data:T}),"\n",(0,t.jsx)(s,{component:"Slider"}),"\n",(0,t.jsx)(l,{data:E}),"\n",(0,t.jsxs)(a.p,{children:["Example of using ",(0,t.jsx)(a.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,t.jsx)(a.code,{children:"Slider"})," styles:"]}),"\n",(0,t.jsx)(l,{data:N}),"\n",(0,t.jsx)(a.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," and ",(0,t.jsx)(a.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,t.jsx)(a.h2,{id:"build-custom-slider",children:"Build custom slider"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"Slider"})," component does not meet your requirements, you can build a custom slider with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook:"]}),"\n",(0,t.jsx)(l,{data:_.x}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," and ",(0,t.jsx)(a.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Thumbs are focusable"}),"\n",(0,t.jsx)(a.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,t.jsx)(a.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { RangeSlider, Slider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(r,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(L,{...e,children:(0,t.jsx)(W,{...e})})}function H(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},21848:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},45854:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},89843:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});var t=(0,l(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},61914:(e,a,l)=>{"use strict";l.d(a,{x:()=>d});var t=l(31085),n=l(14041),r=l(21848),i=l(7235),s=l(68193),o={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let d={type:"code",component:function(){let[e,a]=(0,n.useState)(.3),{ref:l}=(0,i.f)(({x:e})=>a((0,s.q)(e,.1,.9))),d=e<.2||e>.8;return(0,t.jsx)("div",{className:o.root,children:(0,t.jsxs)("div",{className:o.track,ref:l,children:[(0,t.jsx)("div",{className:o.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,t.jsx)("div",{className:o.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,t.jsx)("div",{className:o.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,t.jsx)(r.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0}},51002:(e,a,l)=>{"use strict";l.d(a,{b:()=>r});var t=l(31085),n=l(84281);let r={type:"code",component:function(){return(0,t.jsx)(n.A,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0}},96662:(e,a,l)=>{"use strict";l.d(a,{z:()=>r});var t=l(31085),n=l(1784);let r={type:"code",component:function(){return(0,t.jsx)(n.F,{pushOnOverlap:!1,defaultValue:[25,65],minRange:20})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
`}},24377:(e,a,l)=>{"use strict";l.d(a,{A:()=>s});var t=l(31085),n=l(75390),r=l(84281),i=l(1784);let s={type:"code",component:function(){return(0,t.jsxs)(n.B,{children:[(0,t.jsx)(r.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,a)=>({value:25*a}))}),(0,t.jsx)(i.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400}},1784:(e,a,l)=>{"use strict";l.d(a,{F:()=>T});var t=l(31085),n=l(14041),r=l(82307),i=l(68193),s=l(7235),o=l(34321),d=l(39735),u=l(33450),c=l(96532),m=l(7098),h=l(51606),p=l(29686),v=l(69564),x=l(6754),b=l(46746),f=l(96448),g=l(5861),j=l(60881),y=l(36247),k=l(7139),w=l(27064),S=l(48093),V=l(46315),A=l(94023),M=l(85212);let z=(0,m.V)((e,{size:a,color:l,thumbSize:t,radius:n})=>({root:{"--slider-size":(0,u.YC)(a,"slider-size"),"--slider-color":l?(0,h.r)(l,e):void 0,"--slider-radius":void 0===n?void 0:(0,u.nJ)(n),"--slider-thumb-size":void 0!==t?(0,d.D)(t):"calc(var(--slider-size) * 2)"}})),R={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},T=(0,x.P9)((e,a)=>{let l=(0,p.Y)("RangeSlider",R,e),{classNames:d,styles:u,value:m,onChange:h,onChangeEnd:x,size:T,min:D,max:C,domain:E,minRange:F,maxRange:N,step:_,precision:O,defaultValue:I,name:L,marks:W,label:B,labelTransitionProps:H,labelAlwaysOn:$,thumbFromLabel:q,thumbToLabel:P,showLabelOnHover:X,thumbChildren:Y,disabled:K,unstyled:G,scale:U,inverted:Z,className:J,style:Q,vars:ee,hiddenInputProps:ea,restrictToMarks:el,thumbProps:et,pushOnOverlap:en,...er}=l,ei=(0,v.I)({name:"Slider",props:l,classes:M.A,classNames:d,className:J,styles:u,style:Q,vars:ee,varsResolver:z,unstyled:G}),es=(0,n.useRef)(null),{dir:eo}=(0,b.jH)(),[ed,eu]=(0,n.useState)(-1),[ec,em]=(0,n.useState)(!1),[eh,ep]=(0,r.Z)({value:m,defaultValue:I,finalValue:[D,C],onChange:h}),ev=(0,n.useRef)(eh),ex=(0,n.useRef)([]),eb=(0,n.useRef)(null),ef=(0,n.useRef)(void 0),[eg,ej]=E||[D,C],ey=[(0,S.E)({value:eh[0],min:eg,max:ej}),(0,S.E)({value:eh[1],min:eg,max:ej})],ek=O??(0,V.X)(_),ew=e=>{ep(e),ev.current=e};(0,n.useEffect)(()=>{Array.isArray(m)&&(ev.current=m)},Array.isArray(m)?[m[0],m[1]]:[null,null]);let eS=(e,a,l)=>{if(-1===a)return;let t=[...ev.current];if(el&&W){let l=(0,c.k)(e,W.map(e=>e.value)),n=t[a];t[a]=l;let r=0===a?1:0,i=(0,A.rq)(W),s=(0,A.HE)(W);l===i&&t[r]===i?t[a]=n:l===s&&t[r]===s?t[a]=n:l===t[r]&&(n>t[r]?t[r]=(0,A.Mh)(l,W):t[r]=(0,A.C8)(l,W))}else{let l=(0,i.q)(e,D,C);t[a]=l,0===a&&(l>t[1]-(F-1e-9)&&(en?t[1]=Math.min(e+F,C):t[a]=ev.current[a]),l>(C-(F-1e-9)||D)&&(t[a]=ev.current[a]),t[1]-e>N&&(en?t[1]=e+N:t[a]=ev.current[a])),1===a&&(l<t[0]+F&&(en?t[0]=Math.max(e-F,D):t[a]=ev.current[a]),l<t[0]+F&&(t[a]=ev.current[a]),l-t[0]>N&&(en?t[0]=e-N:t[a]=ev.current[a]))}if(t[0]=(0,w.q)(t[0],ek),t[1]=(0,w.q)(t[1],ek),t[0]>t[1]){let e=t[0];t[0]=t[1],t[1]=e}ew(t),l&&x?.(ev.current)},eV=e=>{K||void 0===ef.current||eS((0,k.c)({value:e,min:eg,max:ej,step:_,precision:ek}),ef.current,!1)},{ref:eA,active:eM}=(0,s.f)(({x:e})=>eV(e),{onScrubEnd:()=>!K&&x?.(ev.current)},eo),ez=e=>{if(es.current){es.current.focus();let a=es.current.getBoundingClientRect(),l=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),t=(0,k.c)({value:l-a.left,max:C,min:D,step:_,containerWidth:a.width}),n=Math.abs(eh[0]-t)>Math.abs(eh[1]-t)?1:0,r="ltr"===eo?n:1===n?0:1;ef.current=r}},eR=()=>1!==ed&&0!==ed?(eu(0),0):ed,eT={max:C,min:D,size:T,labelTransitionProps:H,labelAlwaysOn:$,onBlur:()=>eu(-1)},eD=Array.isArray(Y);return(0,t.jsx)(f.h,{value:{getStyles:ei},children:(0,t.jsxs)(g.g,{...er,size:T,ref:(0,o.pc)(a,eb),disabled:K,onMouseDownCapture:()=>eb.current?.focus(),onKeyDownCapture:()=>{ex.current[0]?.parentElement?.contains(document.activeElement)||ex.current[0]?.focus()},children:[(0,t.jsxs)(y.C,{offset:ey[0],marksOffset:eh[0],filled:ey[1]-ey[0],marks:W,inverted:Z,min:eg,max:ej,value:eh[1],disabled:K,containerProps:{ref:(0,o.pc)(es,eA),onMouseEnter:X?()=>em(!0):void 0,onMouseLeave:X?()=>em(!1):void 0,onTouchStartCapture:ez,onTouchEndCapture:()=>{ef.current=-1},onMouseDownCapture:ez,onMouseUpCapture:()=>{ef.current=-1},onKeyDownCapture:e=>{if(!K)switch(e.key){case"ArrowUp":{e.preventDefault();let a=eR();ex.current[a].focus();let l=el&&W?(0,A.C8)(ev.current[a],W):Math.min(Math.max(ev.current[a]+_,D),C);eS((0,w.q)(l,ek),a,!0);break}case"ArrowRight":{e.preventDefault();let a=eR();ex.current[a].focus();let l=el&&W?("rtl"===eo?A.Mh:A.C8)(ev.current[a],W):Math.min(Math.max("rtl"===eo?ev.current[a]-_:ev.current[a]+_,D),C);eS((0,w.q)(l,ek),a,!0);break}case"ArrowDown":{e.preventDefault();let a=eR();ex.current[a].focus();let l=el&&W?(0,A.Mh)(ev.current[a],W):Math.min(Math.max(ev.current[a]-_,D),C);eS((0,w.q)(l,ek),a,!0);break}case"ArrowLeft":{e.preventDefault();let a=eR();ex.current[a].focus();let l=el&&W?("rtl"===eo?A.C8:A.Mh)(ev.current[a],W):Math.min(Math.max("rtl"===eo?ev.current[a]+_:ev.current[a]-_,D),C);eS((0,w.q)(l,ek),a,!0)}}}},children:[(0,t.jsx)(j.z,{...eT,value:U(eh[0]),position:ey[0],dragging:eM,label:"function"==typeof B?B((0,w.q)(U(eh[0]),ek)):B,ref:e=>{e&&(ex.current[0]=e)},thumbLabel:q,onMouseDown:()=>void(ef.current=0),onFocus:()=>eu(0),showLabelOnHover:X,isHovered:ec,disabled:K,...et?.(0),children:eD?Y[0]:Y}),(0,t.jsx)(j.z,{...eT,thumbLabel:P,value:U(eh[1]),position:ey[1],dragging:eM,label:"function"==typeof B?B((0,w.q)(U(eh[1]),ek)):B,ref:e=>{e&&(ex.current[1]=e)},onMouseDown:()=>void(ef.current=1),onFocus:()=>eu(1),showLabelOnHover:X,isHovered:ec,disabled:K,...et?.(1),children:eD?Y[1]:Y})]}),(0,t.jsx)("input",{type:"hidden",name:`${L}_from`,value:eh[0],...ea}),(0,t.jsx)("input",{type:"hidden",name:`${L}_to`,value:eh[1],...ea})]})})});T.classes=M.A,T.displayName="@mantine/core/RangeSlider"}},e=>{var a=a=>e(e.s=a);e.O(0,[18675,90636,46593,38792],()=>a(19709)),_N_E=e.O()}]);
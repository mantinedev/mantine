(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57919],{1312:(e,a,l)=>{"use strict";l.d(a,{A:()=>i});var t=l(6029),r=l(72139),n=l(68992),s=l(49386);let i={type:"code",component:function(){return(0,t.jsxs)(r.B,{children:[(0,t.jsx)(n.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,a)=>({value:25*a}))}),(0,t.jsx)(s.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400}},1798:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},2485:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","grip-vertical","GripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},6620:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},29544:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>W});var t=l(6029),r=l(16285),n=l(68992);let s={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]},i={type:"code",component:function(){return(0,t.jsx)(n.A,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340};var o=l(55729),d=l(76320),c=l(45208);let u={type:"code",component:function(){let[e,a]=(0,o.useState)(50),[l,r]=(0,o.useState)(50);return(0,t.jsxs)(d.a,{maw:400,mx:"auto",children:[(0,t.jsx)(n.A,{value:e,onChange:a,onChangeEnd:r}),(0,t.jsxs)(c.E,{mt:"md",size:"sm",children:["onChange value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsxs)(c.E,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,t.jsx)("b",{children:l})]})]})},code:`
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
`},m={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.E,{size:"sm",children:"No label"}),(0,t.jsx)(n.A,{defaultValue:40,label:null}),(0,t.jsx)(c.E,{size:"sm",mt:"xl",children:"Formatted label"}),(0,t.jsx)(n.A,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,t.jsx)(c.E,{size:"sm",mt:"xl",children:"Label always visible"}),(0,t.jsx)(n.A,{defaultValue:40,labelAlwaysOn:!0}),(0,t.jsx)(c.E,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,t.jsx)(n.A,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
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
`,centered:!0,maxWidth:400},h=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],p={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.E,{children:"Decimal step"}),(0,t.jsx)(n.A,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,t.jsx)(c.E,{mt:"md",children:"Step matched with marks"}),(0,t.jsx)(n.A,{defaultValue:50,label:e=>h.find(a=>a.value===e).label,step:25,marks:h,styles:{markLabel:{display:"none"}}})]})},code:`
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
`,centered:!0,maxWidth:400};var v=l(98403);let x={type:"code",component:function(){return(0,t.jsx)(n.A,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,t.jsx)(n.A,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var f=l(1312);let g={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var y=l(72607);let j=(0,l(41495).A)("outline","heart-broken","HeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);var k=l(49386);let w={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{thumbChildren:(0,t.jsx)(y.A,{size:16,stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,t.jsx)(k.F,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,t.jsx)(y.A,{size:16,stroke:1.5},"1"),(0,t.jsx)(j,{size:16,stroke:1.5},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function S(e){let a=["KB","MB","GB","TB"],l=0,t=e;for(;t>=1024&&l<a.length-1;)l+=1,t/=1024;return`${t} ${a[l]}`}let A=e=>2**e,M={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:S}),(0,t.jsx)(k.F,{mt:50,scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:S})]})},code:`
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
`,centered:!0,maxWidth:400},V={type:"code",component:function(){return(0,t.jsx)(n.A,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var T=l(39466);let z=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,D={type:"styles-api",data:T.s,component:function(e){return(0,t.jsx)(n.A,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:z,centered:!0,maxWidth:400};var C={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let E={type:"code",component:function(){return(0,t.jsx)(d.a,{maw:400,pt:15,pb:20,mx:"auto",children:(0,t.jsx)(n.A,{defaultValue:40,size:2,classNames:C,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
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
`,language:"scss"}]};var N=l(36549),F=l(38547),_=l(5262);let R=(0,F.P)(_.XZ.Slider);function L(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:l,KeyboardEventsTable:n,StylesApiSelectors:o}=a;return l||B("Demo",!0),n||B("KeyboardEventsTable",!0),o||B("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l,{data:s}),"\n",(0,t.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(l,{data:i}),"\n",(0,t.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,t.jsx)(l,{data:u}),"\n",(0,t.jsx)(a.h2,{id:"control-label",children:"Control label"}),"\n",(0,t.jsx)(a.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,t.jsx)(a.code,{children:"f => f"})]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,t.jsx)(a.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,t.jsx)(l,{data:m}),"\n",(0,t.jsx)(a.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,t.jsx)(l,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"domain",children:"Domain"}),"\n",(0,t.jsxs)(a.p,{children:["By default, ",(0,t.jsx)(a.code,{children:"min"})," and ",(0,t.jsx)(a.code,{children:"max"})," values define the possible range of values.\n",(0,t.jsx)(a.code,{children:"domain"})," prop allows setting the possible range of values independently of the\n",(0,t.jsx)(a.code,{children:"min"})," and ",(0,t.jsx)(a.code,{children:"max"})," values:"]}),"\n",(0,t.jsx)(l,{data:v.b}),"\n",(0,t.jsx)(a.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,t.jsxs)(a.p,{children:["To use ",(0,t.jsx)(a.code,{children:"Slider"})," with decimal values, set ",(0,t.jsx)(a.code,{children:"min"}),", ",(0,t.jsx)(a.code,{children:"max"})," and ",(0,t.jsx)(a.code,{children:"step"})," props:"]}),"\n",(0,t.jsx)(l,{data:x}),"\n",(0,t.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,t.jsxs)(a.p,{children:["Add any number of marks to slider by setting ",(0,t.jsx)(a.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,t.jsx)(a.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,t.jsx)(l,{data:b}),"\n",(0,t.jsx)(a.h2,{id:"restrict-selection-to-marks",children:"Restrict selection to marks"}),"\n",(0,t.jsxs)(a.p,{children:["Set ",(0,t.jsx)(a.code,{children:"restrictToMarks"})," prop to restrict slider value to marks only. Note that in\nthis case ",(0,t.jsx)(a.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(l,{data:f.A}),"\n",(0,t.jsx)(a.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,t.jsx)(l,{data:g}),"\n",(0,t.jsx)(a.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,t.jsx)(l,{data:w}),"\n",(0,t.jsx)(a.h2,{id:"scale",children:"Scale"}),"\n",(0,t.jsxs)(a.p,{children:["You can use the ",(0,t.jsx)(a.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,t.jsxs)(a.p,{children:["In the following demo, the value ",(0,t.jsx)(a.code,{children:"x"})," represents the value ",(0,t.jsx)(a.code,{children:"2^x"}),". Increasing ",(0,t.jsx)(a.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,t.jsx)(a.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(l,{data:M}),"\n",(0,t.jsx)(a.h2,{id:"inverted",children:"Inverted"}),"\n",(0,t.jsxs)(a.p,{children:["You can invert the track with the ",(0,t.jsx)(a.code,{children:"inverted"})," prop:"]}),"\n",(0,t.jsx)(l,{data:V}),"\n",(0,t.jsx)(o,{component:"Slider"}),"\n",(0,t.jsx)(l,{data:D}),"\n",(0,t.jsxs)(a.p,{children:["Example of using ",(0,t.jsx)(a.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,t.jsx)(a.code,{children:"Slider"})," styles:"]}),"\n",(0,t.jsx)(l,{data:E}),"\n",(0,t.jsx)(a.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," does not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,t.jsx)(a.h2,{id:"build-custom-slider",children:"Build custom slider"}),"\n",(0,t.jsxs)(a.p,{children:["If ",(0,t.jsx)(a.code,{children:"Slider"})," component does not meet your requirements, you can build a custom slider with ",(0,t.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook:"]}),"\n",(0,t.jsx)(l,{data:N.x}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Slider"})," component is accessible by default:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Thumbs are focusable"}),"\n",(0,t.jsx)(a.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,t.jsx)(a.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { Slider } from '@mantine/core';\n\nfunction Demo() {\n  return <Slider thumbLabel=\"Thumb aria-label\" />;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(n,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(R,{...e,children:(0,t.jsx)(L,{...e})})}function B(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},34891:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36549:(e,a,l)=>{"use strict";l.d(a,{x:()=>d});var t=l(6029),r=l(55729),n=l(2485),s=l(24854),i=l(38744),o={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let d={type:"code",component:function(){let[e,a]=(0,r.useState)(.3),{ref:l}=(0,s.f)(({x:e})=>a((0,i.q)(e,.1,.9))),d=e<.2||e>.8;return(0,t.jsx)("div",{className:o.root,children:(0,t.jsxs)("div",{className:o.track,ref:l,children:[(0,t.jsx)("div",{className:o.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,t.jsx)("div",{className:o.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,t.jsx)("span",{className:o.label,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,t.jsx)("div",{className:o.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,t.jsx)(n.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0}},41949:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},49386:(e,a,l)=>{"use strict";l.d(a,{F:()=>D});var t=l(6029),r=l(55729),n=l(7798),s=l(38744),i=l(24854),o=l(28136),d=l(26082),c=l(14163),u=l(78297),m=l(33987),h=l(21351),p=l(38919),v=l(15583),x=l(8411),b=l(90851),f=l(99341),g=l(97233),y=l(68884),j=l(97832),k=l(29056),w=l(13494),S=l(31861),A=l(42268),M=l(51662),V=l(73778);let T=(0,m.V)((e,{size:a,color:l,thumbSize:t,radius:r})=>({root:{"--slider-size":(0,c.YC)(a,"slider-size"),"--slider-color":l?(0,h.r)(l,e):void 0,"--slider-radius":void 0===r?void 0:(0,c.nJ)(r),"--slider-thumb-size":void 0!==t?(0,d.D)(t):"calc(var(--slider-size) * 2)"}})),z={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},D=(0,x.P9)((e,a)=>{let l=(0,p.Y)("RangeSlider",z,e),{classNames:d,styles:c,value:m,onChange:h,onChangeEnd:x,size:D,min:C,max:E,domain:N,minRange:F,maxRange:_,step:R,precision:L,defaultValue:W,name:B,marks:I,label:O,labelTransitionProps:H,labelAlwaysOn:$,thumbFromLabel:q,thumbToLabel:P,showLabelOnHover:X,thumbChildren:Y,disabled:K,unstyled:G,scale:U,inverted:Z,className:J,style:Q,vars:ee,hiddenInputProps:ea,restrictToMarks:el,thumbProps:et,pushOnOverlap:er,attributes:en,...es}=l,ei=(0,v.I)({name:"RangeSlider",props:l,classes:g.A,classNames:d,className:J,styles:c,style:Q,attributes:en,vars:ee,varsResolver:T,unstyled:G}),eo=(0,r.useRef)(null),{dir:ed}=(0,b.jH)(),[ec,eu]=(0,r.useState)(-1),[em,eh]=(0,r.useState)(!1),[ep,ev]=(0,n.Z)({value:m,defaultValue:W,finalValue:[C,E],onChange:h}),ex=(0,r.useRef)(ep),eb=(0,r.useRef)([]),ef=(0,r.useRef)(null),eg=(0,r.useRef)(void 0),[ey,ej]=N||[C,E],ek=[(0,A.E)({value:ep[0],min:ey,max:ej}),(0,A.E)({value:ep[1],min:ey,max:ej})],ew=L??(0,M.X)(R);(0,r.useEffect)(()=>{Array.isArray(m)&&(ex.current=m)},Array.isArray(m)?[m[0],m[1]]:[null,null]);let eS=(e,a,l)=>{if(-1===a)return;let t=[...ex.current];if(el&&I){let l=(0,u.k)(e,I.map(e=>e.value)),r=t[a];t[a]=l;let n=+(0===a),s=(0,V.rq)(I),i=(0,V.HE)(I);l===s&&t[n]===s||l===i&&t[n]===i?t[a]=r:l===t[n]&&(r>t[n]?t[n]=(0,V.Mh)(l,I):t[n]=(0,V.C8)(l,I))}else{let l=(0,s.q)(e,C,E);t[a]=l,0===a&&(l>t[1]-(F-1e-9)&&(er?t[1]=Math.min(e+F,E):t[a]=ex.current[a]),l>(E-(F-1e-9)||C)&&(t[a]=ex.current[a]),t[1]-e>_&&(er?t[1]=e+_:t[a]=ex.current[a])),1===a&&(l<t[0]+F&&(er?t[0]=Math.max(e-F,C):t[a]=ex.current[a]),l<t[0]+F&&(t[a]=ex.current[a]),l-t[0]>_&&(er?t[0]=e-_:t[a]=ex.current[a]))}if(t[0]=(0,S.q)(t[0],ew),t[1]=(0,S.q)(t[1],ew),t[0]>t[1]){let e=t[0];t[0]=t[1],t[1]=e}(e=>{ev(e),ex.current=e})(t),l&&x?.(ex.current)},{ref:eA,active:eM}=(0,i.f)(({x:e})=>{!K&&void 0!==eg.current&&eS((0,w.c)({value:e,min:ey,max:ej,step:R,precision:ew}),eg.current,!1)},{onScrubEnd:()=>!K&&x?.(ex.current)},ed),eV=e=>{if(eo.current){eo.current.focus();let a=eo.current.getBoundingClientRect(),l=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),t=(0,w.c)({value:l-a.left,max:E,min:C,step:R,containerWidth:a.width}),r=+(Math.abs(ep[0]-t)>Math.abs(ep[1]-t));eg.current="ltr"===ed?r:+(1!==r)}},eT=()=>1!==ec&&0!==ec?(eu(0),0):ec,ez={max:E,min:C,size:D,labelTransitionProps:H,labelAlwaysOn:$,onBlur:()=>eu(-1)},eD=Array.isArray(Y);return(0,t.jsx)(f.h,{value:{getStyles:ei},children:(0,t.jsxs)(y.g,{...es,size:D,ref:(0,o.pc)(a,ef),disabled:K,onMouseDownCapture:()=>ef.current?.focus(),onKeyDownCapture:()=>{eb.current[0]?.parentElement?.contains(document.activeElement)||eb.current[0]?.focus()},children:[(0,t.jsxs)(k.C,{offset:ek[0],marksOffset:ep[0],filled:ek[1]-ek[0],marks:I,inverted:Z,min:ey,max:ej,value:ep[1],disabled:K,containerProps:{ref:(0,o.pc)(eo,eA),onMouseEnter:X?()=>eh(!0):void 0,onMouseLeave:X?()=>eh(!1):void 0,onTouchStartCapture:eV,onTouchEndCapture:()=>{eg.current=-1},onMouseDownCapture:eV,onMouseUpCapture:()=>{eg.current=-1},onKeyDownCapture:e=>{if(!K)switch(e.key){case"ArrowUp":{e.preventDefault();let a=eT();eb.current[a].focus();let l=el&&I?(0,V.C8)(ex.current[a],I):Math.min(Math.max(ex.current[a]+R,C),E);eS((0,S.q)(l,ew),a,!0);break}case"ArrowRight":{e.preventDefault();let a=eT();eb.current[a].focus();let l=el&&I?("rtl"===ed?V.Mh:V.C8)(ex.current[a],I):Math.min(Math.max("rtl"===ed?ex.current[a]-R:ex.current[a]+R,C),E);eS((0,S.q)(l,ew),a,!0);break}case"ArrowDown":{e.preventDefault();let a=eT();eb.current[a].focus();let l=el&&I?(0,V.Mh)(ex.current[a],I):Math.min(Math.max(ex.current[a]-R,C),E);eS((0,S.q)(l,ew),a,!0);break}case"ArrowLeft":{e.preventDefault();let a=eT();eb.current[a].focus();let l=el&&I?("rtl"===ed?V.C8:V.Mh)(ex.current[a],I):Math.min(Math.max("rtl"===ed?ex.current[a]+R:ex.current[a]-R,C),E);eS((0,S.q)(l,ew),a,!0)}}}},children:[(0,t.jsx)(j.z,{...ez,value:U(ep[0]),position:ek[0],dragging:eM,label:"function"==typeof O?O((0,S.q)(U(ep[0]),ew)):O,ref:e=>{e&&(eb.current[0]=e)},thumbLabel:q,onMouseDown:()=>void(eg.current=0),onFocus:()=>eu(0),showLabelOnHover:X,isHovered:em,disabled:K,...et?.(0),children:eD?Y[0]:Y}),(0,t.jsx)(j.z,{...ez,thumbLabel:P,value:U(ep[1]),position:ek[1],dragging:eM,label:"function"==typeof O?O((0,S.q)(U(ep[1]),ew)):O,ref:e=>{e&&(eb.current[1]=e)},onMouseDown:()=>void(eg.current=1),onFocus:()=>eu(1),showLabelOnHover:X,isHovered:em,disabled:K,...et?.(1),children:eD?Y[1]:Y})]}),(0,t.jsx)("input",{type:"hidden",name:`${B}_from`,value:ep[0],...ea}),(0,t.jsx)("input",{type:"hidden",name:`${B}_to`,value:ep[1],...ea})]})})});D.classes=g.A,D.displayName="@mantine/core/RangeSlider"},65433:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},72607:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","heart","Heart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},84276:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,a,l)=>{"use strict";l.d(a,{A:()=>t});let t=(0,l(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},94845:(e,a,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return l(29544)}])},98403:(e,a,l)=>{"use strict";l.d(a,{b:()=>n});var t=l(6029),r=l(68992);let n={type:"code",component:function(){return(0,t.jsx)(r.A,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
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
`,maxWidth:400,centered:!0}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=94845)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5752],{1002:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var n=(0,a(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},84814:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(50787)}])},50787:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return ex}});var n=a(24246),t=a(71670),r=a(3916),i=a(30289),o=a(27378),s=a(16902);let d=`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,u={type:"configurator",component:function(e){return o.createElement(s.i,{defaultValue:40,mb:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:d,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=a(56589),m=a(58675),h=a(60790),b=a(71078),p=a(92082),x=a(83453),f=a(89738),v=a(96739),g=a(6231),y=a(20410),j=a(49134),S=a(28372),k=a(92918),w=a(90796),E=a(18887),V=a(39044),T=a(77279),z=a(37744),D=a(15390),R=a(45630);let C=(0,x.Z)((e,{size:l,color:a,thumbSize:n,radius:t})=>({root:{"--slider-size":(0,p.ap)(l,"slider-size"),"--slider-color":a?(0,f.p)(a,e):void 0,"--slider-radius":void 0===t?void 0:(0,p.H5)(t),"--slider-thumb-size":void 0!==n?(0,b.h)(n):"calc(var(--slider-size) * 2)"}})),A={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},M=(0,y.d)((e,l)=>{let a=(0,v.w)("RangeSlider",A,e),{classNames:n,styles:t,value:r,onChange:i,onChangeEnd:s,size:d,min:u,max:c,minRange:b,maxRange:p,step:x,precision:f,defaultValue:y,name:M,marks:L,label:F,labelTransitionProps:_,labelAlwaysOn:I,thumbFromLabel:N,thumbToLabel:W,showLabelOnHover:B,thumbChildren:O,disabled:H,unstyled:J,scale:P,inverted:Z,className:$,style:K,vars:U,hiddenInputProps:X,...Y}=a,G=(0,g.y)({name:"Slider",props:a,classes:R.Z,classNames:n,className:$,styles:t,style:K,vars:U,varsResolver:C,unstyled:J}),{dir:q}=(0,j.gm)(),[Q,ee]=(0,o.useState)(-1),[el,ea]=(0,o.useState)(!1),[en,et]=(0,m.C)({value:r,defaultValue:y,finalValue:[u,c],onChange:i}),er=(0,o.useRef)(en),ei=(0,o.useRef)([]),eo=(0,o.useRef)(void 0),es=[(0,V.b)({value:en[0],min:u,max:c}),(0,V.b)({value:en[1],min:u,max:c})],ed=f??(0,z.p)(x),eu=e=>{et(e),er.current=e};(0,o.useEffect)(()=>{Array.isArray(r)&&(er.current=r)},Array.isArray(r)?[r[0],r[1]]:[null,null]);let ec=(e,l,a)=>{let n=[...er.current];n[l]=e,0===l&&(e>n[1]-(b-1e-9)&&(n[1]=Math.min(e+b,c)),e>(c-(b-1e-9)||u)&&(n[l]=er.current[l]),n[1]-e>p&&(n[1]=e+p)),1===l&&(e<n[0]+b&&(n[0]=Math.max(e-b,u)),e<n[0]+b&&(n[l]=er.current[l]),e-n[0]>p&&(n[0]=e-p)),n[0]=(0,D.J)(n[0],ed),n[1]=(0,D.J)(n[1],ed),eu(n),a&&s?.(er.current)},em=e=>{if(!H){let l=(0,T.i)({value:e,min:u,max:c,step:x,precision:ed});ec(l,eo.current,!1)}},{ref:eh,active:eb}=(0,h.r)(({x:e})=>em(e),{onScrubEnd:()=>s?.(er.current)},q),ep=e=>{eh.current.focus();let l=eh.current.getBoundingClientRect(),a=function(e){if("TouchEvent"in window&&e instanceof window.TouchEvent){let l=e.touches[0];return l.clientX}return e.clientX}(e.nativeEvent),n=(0,T.i)({value:a-l.left,max:c,min:u,step:x,containerWidth:l.width}),t=Math.abs(en[0]-n)>Math.abs(en[1]-n)?1:0,r="ltr"===q?t:1===t?0:1;eo.current=r},ex=()=>1!==Q&&0!==Q?(ee(0),0):Q,ef={max:c,min:u,size:d,labelTransitionProps:_,labelAlwaysOn:I,onBlur:()=>ee(-1)},ev=Array.isArray(O);return o.createElement(S.Y,{value:{getStyles:G}},o.createElement(k.l,{...Y,size:d,ref:l,disabled:H},o.createElement(w.f,{offset:es[0],marksOffset:en[0],filled:es[1]-es[0],marks:L,inverted:Z,min:u,max:c,value:en[1],disabled:H,containerProps:{ref:eh,onMouseEnter:B?()=>ea(!0):void 0,onMouseLeave:B?()=>ea(!1):void 0,onTouchStartCapture:ep,onTouchEndCapture:()=>{eo.current=-1},onMouseDownCapture:ep,onMouseUpCapture:()=>{eo.current=-1},onKeyDownCapture:e=>{if(!H)switch(e.key){case"ArrowUp":{e.preventDefault();let l=ex();ei.current[l].focus(),ec((0,D.J)(Math.min(Math.max(er.current[l]+x,u),c),ed),l,!0);break}case"ArrowRight":{e.preventDefault();let l=ex();ei.current[l].focus(),ec((0,D.J)(Math.min(Math.max("rtl"===q?er.current[l]-x:er.current[l]+x,u),c),ed),l,!0);break}case"ArrowDown":{e.preventDefault();let l=ex();ei.current[l].focus(),ec((0,D.J)(Math.min(Math.max(er.current[l]-x,u),c),ed),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=ex();ei.current[l].focus(),ec((0,D.J)(Math.min(Math.max("rtl"===q?er.current[l]+x:er.current[l]-x,u),c),ed),l,!0)}}}}},o.createElement(E.b,{...ef,value:P(en[0]),position:es[0],dragging:eb,label:"function"==typeof F?F((0,D.J)(P(en[0]),ed)):F,ref:e=>{ei.current[0]=e},thumbLabel:N,onMouseDown:()=>void(eo.current=0),onFocus:()=>ee(0),showLabelOnHover:B,isHovered:el,disabled:H},ev?O[0]:O),o.createElement(E.b,{...ef,thumbLabel:W,value:P(en[1]),position:es[1],dragging:eb,label:"function"==typeof F?F((0,D.J)(P(en[1]),ed)):F,ref:e=>{ei.current[1]=e},onMouseDown:()=>void(eo.current=1),onFocus:()=>ee(1),showLabelOnHover:B,isHovered:el,disabled:H},ev?O[1]:O)),o.createElement("input",{type:"hidden",name:`${M}_from`,value:en[0],...X}),o.createElement("input",{type:"hidden",name:`${M}_to`,value:en[1],...X})))});M.classes=R.Z,M.displayName="@mantine/core/RangeSlider";let L=`
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
`,F={type:"code",component:function(){return o.createElement(c.x,{maw:400,mx:"auto"},o.createElement(s.i,{defaultValue:60,disabled:!0}),o.createElement(M,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]}))},code:L};var Text=a(26569);let _=`
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
`,I={type:"code",component:function(){let[e,l]=(0,o.useState)(50),[a,n]=(0,o.useState)(50);return o.createElement(c.x,{maw:400,mx:"auto"},o.createElement(s.i,{value:e,onChange:l,onChangeEnd:n}),o.createElement(Text.x,{mt:"md",size:"sm"},"onChange value: ",o.createElement("b",null,e)),o.createElement(Text.x,{mt:5,size:"sm"},"onChangeEnd value: ",o.createElement("b",null,a)))},code:_},N=`
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
`,W={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(Text.x,{size:"sm"},"No label"),o.createElement(s.i,{defaultValue:40,label:null}),o.createElement(Text.x,{size:"sm",mt:"xl"},"Formatted label"),o.createElement(s.i,{defaultValue:40,label:e=>`${e} \xb0C`}),o.createElement(Text.x,{size:"sm",mt:"xl"},"Label always visible"),o.createElement(s.i,{defaultValue:40,labelAlwaysOn:!0}),o.createElement(Text.x,{size:"sm",mt:"xl"},"Custom label transition"),o.createElement(s.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}}))},code:N,centered:!0,maxWidth:400},B=`
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
`,O=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],H={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(Text.x,null,"Decimal step"),o.createElement(s.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),o.createElement(Text.x,{mt:"md"},"Step matched with marks"),o.createElement(s.i,{defaultValue:50,label:e=>O.find(l=>l.value===e).label,step:25,marks:O,styles:{markLabel:{display:"none"}}}))},code:B,centered:!0,maxWidth:400},J=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,P={type:"code",component:function(){return o.createElement(s.i,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:J,centered:!0,maxWidth:340},Z=`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,$={type:"code",component:function(){return o.createElement(M,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:Z,centered:!0,maxWidth:340},K=`
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
`,U={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return o.createElement(o.Fragment,null,o.createElement(s.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),o.createElement(s.i,{defaultValue:40,marks:e,mb:32}),o.createElement(M,{defaultValue:[20,80],marks:e,mb:32}))},code:K,centered:!0,maxWidth:400},X=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,Y={type:"configurator",component:function(e){return o.createElement(s.i,{...e,defaultValue:20})},code:X,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var G=a(1002),q=(0,a(54764).Z)("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let Q=`
import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`,ee={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{thumbChildren:o.createElement(G.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,b.h)(2),padding:(0,b.h)(3)}}}),o.createElement(M,{mt:"xl",styles:{thumb:{borderWidth:(0,b.h)(2),padding:(0,b.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[o.createElement(G.Z,{size:"1rem",stroke:1.5,key:"1"}),o.createElement(q,{size:"1rem",stroke:1.5,key:"2"})]}))},code:Q,maxWidth:400,centered:!0},el=`
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
`;function ea(e){let l=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<l.length-1;)a+=1,n/=1024;return`${n} ${l[a]}`}let en=e=>2**e,et={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{scale:en,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:ea}),o.createElement(M,{mt:50,scale:en,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:ea}))},code:el,centered:!0,maxWidth:400},er=`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,ei={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{inverted:!0,defaultValue:80}),o.createElement(M,{inverted:!0,defaultValue:[40,80],mt:"xl"}))},code:er,centered:!0,maxWidth:400};var eo=a(66763);let es=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,ed={type:"styles-api",data:eo.a,component:function(e){return o.createElement(s.i,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:es,centered:!0,maxWidth:400};var eu={track:"m-7b015c03",mark:"m-88156515",markLabel:"m-beb40edf",thumb:"m-7afd1c8e"};let ec=`
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
`,em=`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--mantine-color-white);
  border-width: rem(1px);
  box-shadow: var(--mantine-shadow-sm);
}
`,eh={type:"code",component:function(){return o.createElement(c.x,{maw:400,pt:15,pb:20,mx:"auto"},o.createElement(s.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:eu}))},code:[{fileName:"Demo.tsx",code:ec,language:"tsx"},{fileName:"Demo.module.css",code:em,language:"scss"}]},eb=(0,r.A)(i.us.Slider);function ep(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:a,KeyboardEventsTable:r,StylesApiSelectors:i}=l;return a||ef("Demo",!0),r||ef("KeyboardEventsTable",!0),i||ef("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"Slider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"RangeSlider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(a,{data:F}),"\n",(0,n.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(l.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(l.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,n.jsx)(a,{data:W}),"\n",(0,n.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(a,{data:H}),"\n",(0,n.jsx)(l.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,n.jsxs)(l.p,{children:["To use ",(0,n.jsx)(l.code,{children:"Slider"})," with decimal values, set ",(0,n.jsx)(l.code,{children:"min"}),", ",(0,n.jsx)(l.code,{children:"max"})," and ",(0,n.jsx)(l.code,{children:"step"})," props:"]}),"\n",(0,n.jsx)(a,{data:P}),"\n",(0,n.jsx)(l.h2,{id:"minrange",children:"minRange"}),"\n",(0,n.jsxs)(l.p,{children:["Use ",(0,n.jsx)(l.code,{children:"minRange"})," prop to control minimum range between ",(0,n.jsx)(l.code,{children:"from"})," and ",(0,n.jsx)(l.code,{children:"to"})," values\nin ",(0,n.jsx)(l.code,{children:"RangeSlider"}),". The default value is ",(0,n.jsx)(l.code,{children:"10"}),". The example below shows how to\nuse ",(0,n.jsx)(l.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,n.jsx)(a,{data:$}),"\n",(0,n.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(a,{data:U}),"\n",(0,n.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(a,{data:Y}),"\n",(0,n.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(a,{data:ee}),"\n",(0,n.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(l.p,{children:["You can use the ",(0,n.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(l.p,{children:["In the following demo, the value ",(0,n.jsx)(l.code,{children:"x"})," represents the value ",(0,n.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(a,{data:et}),"\n",(0,n.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(l.p,{children:["You can invert the track with the ",(0,n.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(a,{data:ei}),"\n",(0,n.jsx)(i,{component:"Slider"}),"\n",(0,n.jsx)(a,{data:ed}),"\n",(0,n.jsxs)(l.p,{children:["Example of using ",(0,n.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,n.jsx)(l.code,{children:"Slider"})," styles:"]}),"\n",(0,n.jsx)(a,{data:eh}),"\n",(0,n.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,n.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(l.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:'import { Slider, RangeSlider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(r,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function ex(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(eb,{...e,children:(0,n.jsx)(ep,{...e})})}function ef(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=84814)}),_N_E=e.O()}]);
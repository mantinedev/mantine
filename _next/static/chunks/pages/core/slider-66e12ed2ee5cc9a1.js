(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15752],{22702:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(52718)}])},52718:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return en}});var n=a(52322),r=a(45392),t=a(73822);let i={type:"configurator",component:function(e){return(0,n.jsx)(t.i,{defaultValue:40,mb:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=a(28559),o=a(2784),d=a(9341),u=a(51438),c=a(58898),m=a(91482),h=a(11200),x=a(13588),b=a(38483),p=a(46690),f=a(82027),v=a(89027),j=a(56867),g=a(10497),y=a(39172),S=a(77970),k=a(37748),w=a(81515),V=a(49514),T=a(40148),z=a(40908);let D=(0,h.Z)((e,{size:l,color:a,thumbSize:n,radius:r})=>({root:{"--slider-size":(0,m.ap)(l,"slider-size"),"--slider-color":a?(0,x.p)(a,e):void 0,"--slider-radius":void 0===r?void 0:(0,m.H5)(r),"--slider-thumb-size":void 0!==n?(0,c.h)(n):"calc(var(--slider-size) * 2)"}})),R={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},C=(0,f.d5)((e,l)=>{let a=(0,b.w)("RangeSlider",R,e),{classNames:r,styles:t,value:i,onChange:s,onChangeEnd:c,size:m,min:h,max:x,minRange:f,maxRange:C,step:A,precision:E,defaultValue:M,name:_,marks:L,label:F,labelTransitionProps:I,labelAlwaysOn:N,thumbFromLabel:W,thumbToLabel:B,showLabelOnHover:O,thumbChildren:H,disabled:J,unstyled:P,scale:Z,inverted:$,className:K,style:U,vars:X,hiddenInputProps:Y,...G}=a,q=(0,p.y)({name:"Slider",props:a,classes:z.Z,classNames:r,className:K,styles:t,style:U,vars:X,varsResolver:D,unstyled:P}),{dir:Q}=(0,v.gm)(),[ee,el]=(0,o.useState)(-1),[ea,en]=(0,o.useState)(!1),[er,et]=(0,d.C)({value:i,defaultValue:M,finalValue:[h,x],onChange:s}),ei=(0,o.useRef)(er),es=(0,o.useRef)([]),eo=(0,o.useRef)(void 0),ed=[(0,V.b)({value:er[0],min:h,max:x}),(0,V.b)({value:er[1],min:h,max:x})],eu=E??(0,T.p)(A),ec=e=>{et(e),ei.current=e};(0,o.useEffect)(()=>{Array.isArray(i)&&(ei.current=i)},Array.isArray(i)?[i[0],i[1]]:[null,null]);let em=(e,l,a)=>{let n=[...ei.current];n[l]=e,0===l&&(e>n[1]-(f-1e-9)&&(n[1]=Math.min(e+f,x)),e>(x-(f-1e-9)||h)&&(n[l]=ei.current[l]),n[1]-e>C&&(n[1]=e+C)),1===l&&(e<n[0]+f&&(n[0]=Math.max(e-f,h)),e<n[0]+f&&(n[l]=ei.current[l]),e-n[0]>C&&(n[0]=e-C)),n[0]=(0,w.J)(n[0],eu),n[1]=(0,w.J)(n[1],eu),ec(n),a&&c?.(ei.current)},eh=e=>{J||em((0,k.i)({value:e,min:h,max:x,step:A,precision:eu}),eo.current,!1)},{ref:ex,active:eb}=(0,u.r)(({x:e})=>eh(e),{onScrubEnd:()=>c?.(ei.current)},Q),ep=e=>{var l;ex.current.focus();let a=ex.current.getBoundingClientRect(),n=(l=e.nativeEvent,"TouchEvent"in window&&l instanceof window.TouchEvent?l.touches[0].clientX:l.clientX),r=(0,k.i)({value:n-a.left,max:x,min:h,step:A,containerWidth:a.width}),t=Math.abs(er[0]-r)>Math.abs(er[1]-r)?1:0,i="ltr"===Q?t:1===t?0:1;eo.current=i},ef=()=>1!==ee&&0!==ee?(el(0),0):ee,ev={max:x,min:h,size:m,labelTransitionProps:I,labelAlwaysOn:N,onBlur:()=>el(-1)},ej=Array.isArray(H);return(0,n.jsx)(j.Y,{value:{getStyles:q},children:(0,n.jsxs)(g.l,{...G,size:m,ref:l,disabled:J,children:[(0,n.jsxs)(S.f,{offset:ed[0],marksOffset:er[0],filled:ed[1]-ed[0],marks:L,inverted:$,min:h,max:x,value:er[1],disabled:J,containerProps:{ref:ex,onMouseEnter:O?()=>en(!0):void 0,onMouseLeave:O?()=>en(!1):void 0,onTouchStartCapture:ep,onTouchEndCapture:()=>{eo.current=-1},onMouseDownCapture:ep,onMouseUpCapture:()=>{eo.current=-1},onKeyDownCapture:e=>{if(!J)switch(e.key){case"ArrowUp":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,w.J)(Math.min(Math.max(ei.current[l]+A,h),x),eu),l,!0);break}case"ArrowRight":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,w.J)(Math.min(Math.max("rtl"===Q?ei.current[l]-A:ei.current[l]+A,h),x),eu),l,!0);break}case"ArrowDown":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,w.J)(Math.min(Math.max(ei.current[l]-A,h),x),eu),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,w.J)(Math.min(Math.max("rtl"===Q?ei.current[l]+A:ei.current[l]-A,h),x),eu),l,!0)}}}},children:[(0,n.jsx)(y.b,{...ev,value:Z(er[0]),position:ed[0],dragging:eb,label:"function"==typeof F?F((0,w.J)(Z(er[0]),eu)):F,ref:e=>{es.current[0]=e},thumbLabel:W,onMouseDown:()=>void(eo.current=0),onFocus:()=>el(0),showLabelOnHover:O,isHovered:ea,disabled:J,children:ej?H[0]:H}),(0,n.jsx)(y.b,{...ev,thumbLabel:B,value:Z(er[1]),position:ed[1],dragging:eb,label:"function"==typeof F?F((0,w.J)(Z(er[1]),eu)):F,ref:e=>{es.current[1]=e},onMouseDown:()=>void(eo.current=1),onFocus:()=>el(1),showLabelOnHover:O,isHovered:ea,disabled:J,children:ej?H[1]:H})]}),(0,n.jsx)("input",{type:"hidden",name:`${_}_from`,value:er[0],...Y}),(0,n.jsx)("input",{type:"hidden",name:`${_}_to`,value:er[1],...Y})]})})});C.classes=z.Z,C.displayName="@mantine/core/RangeSlider";let A={type:"code",component:function(){return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsx)(t.i,{defaultValue:60,disabled:!0}),(0,n.jsx)(C,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]})]})},code:`
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
`};var E=a(8582);let M={type:"code",component:function(){let[e,l]=(0,o.useState)(50),[a,r]=(0,o.useState)(50);return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsx)(t.i,{value:e,onChange:l,onChangeEnd:r}),(0,n.jsxs)(E.x,{mt:"md",size:"sm",children:["onChange value: ",(0,n.jsx)("b",{children:e})]}),(0,n.jsxs)(E.x,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,n.jsx)("b",{children:a})]})]})},code:`
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
`},_={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.x,{size:"sm",children:"No label"}),(0,n.jsx)(t.i,{defaultValue:40,label:null}),(0,n.jsx)(E.x,{size:"sm",mt:"xl",children:"Formatted label"}),(0,n.jsx)(t.i,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,n.jsx)(E.x,{size:"sm",mt:"xl",children:"Label always visible"}),(0,n.jsx)(t.i,{defaultValue:40,labelAlwaysOn:!0}),(0,n.jsx)(E.x,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,n.jsx)(t.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
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
`,centered:!0,maxWidth:400},L=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],F={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.x,{children:"Decimal step"}),(0,n.jsx)(t.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,n.jsx)(E.x,{mt:"md",children:"Step matched with marks"}),(0,n.jsx)(t.i,{defaultValue:50,label:e=>L.find(l=>l.value===e).label,step:25,marks:L,styles:{markLabel:{display:"none"}}})]})},code:`
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
`,centered:!0,maxWidth:400},I={type:"code",component:function(){return(0,n.jsx)(t.i,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340},N={type:"code",component:function(){return(0,n.jsx)(C,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,centered:!0,maxWidth:340},W={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,n.jsx)(t.i,{defaultValue:40,marks:e,mb:32}),(0,n.jsx)(C,{defaultValue:[20,80],marks:e,mb:32})]})},code:`
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
`,centered:!0,maxWidth:400},B={type:"configurator",component:function(e){return(0,n.jsx)(t.i,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var O=a(35913),H=(0,a(73681).Z)("outline","heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let J={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{thumbChildren:(0,n.jsx)(O.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,c.h)(2),padding:(0,c.h)(3)}}}),(0,n.jsx)(C,{mt:"xl",styles:{thumb:{borderWidth:(0,c.h)(2),padding:(0,c.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,n.jsx)(O.Z,{size:"1rem",stroke:1.5},"1"),(0,n.jsx)(H,{size:"1rem",stroke:1.5},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function P(e){let l=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<l.length-1;)a+=1,n/=1024;return`${n} ${l[a]}`}let Z=e=>2**e,$={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{scale:Z,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:P}),(0,n.jsx)(C,{mt:50,scale:Z,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:P})]})},code:`
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
`,centered:!0,maxWidth:400},K={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{inverted:!0,defaultValue:80}),(0,n.jsx)(C,{inverted:!0,defaultValue:[40,80],mt:"xl"})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,centered:!0,maxWidth:400};var U=a(24727);let X=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,Y={type:"styles-api",data:U.a,component:function(e){return(0,n.jsx)(t.i,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:X,centered:!0,maxWidth:400};var G={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let q={type:"code",component:function(){return(0,n.jsx)(s.x,{maw:400,pt:15,pb:20,mx:"auto",children:(0,n.jsx)(t.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:G})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var Q=a(25071),ee=a(15019);let el=(0,Q.A)(ee.us.Slider);function ea(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:a,KeyboardEventsTable:t,StylesApiSelectors:s}=l;return a||er("Demo",!0),t||er("KeyboardEventsTable",!0),s||er("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:i}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"Slider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"RangeSlider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(a,{data:A}),"\n",(0,n.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,n.jsx)(a,{data:M}),"\n",(0,n.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(l.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(l.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,n.jsx)(a,{data:_}),"\n",(0,n.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(a,{data:F}),"\n",(0,n.jsx)(l.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,n.jsxs)(l.p,{children:["To use ",(0,n.jsx)(l.code,{children:"Slider"})," with decimal values, set ",(0,n.jsx)(l.code,{children:"min"}),", ",(0,n.jsx)(l.code,{children:"max"})," and ",(0,n.jsx)(l.code,{children:"step"})," props:"]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(l.h2,{id:"minrange",children:"minRange"}),"\n",(0,n.jsxs)(l.p,{children:["Use ",(0,n.jsx)(l.code,{children:"minRange"})," prop to control minimum range between ",(0,n.jsx)(l.code,{children:"from"})," and ",(0,n.jsx)(l.code,{children:"to"})," values\nin ",(0,n.jsx)(l.code,{children:"RangeSlider"}),". The default value is ",(0,n.jsx)(l.code,{children:"10"}),". The example below shows how to\nuse ",(0,n.jsx)(l.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,n.jsx)(a,{data:N}),"\n",(0,n.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(a,{data:W}),"\n",(0,n.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(a,{data:B}),"\n",(0,n.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(a,{data:J}),"\n",(0,n.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(l.p,{children:["You can use the ",(0,n.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(l.p,{children:["In the following demo, the value ",(0,n.jsx)(l.code,{children:"x"})," represents the value ",(0,n.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(a,{data:$}),"\n",(0,n.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(l.p,{children:["You can invert the track with the ",(0,n.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(a,{data:K}),"\n",(0,n.jsx)(s,{component:"Slider"}),"\n",(0,n.jsx)(a,{data:Y}),"\n",(0,n.jsxs)(l.p,{children:["Example of using ",(0,n.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,n.jsx)(l.code,{children:"Slider"})," styles:"]}),"\n",(0,n.jsx)(a,{data:q}),"\n",(0,n.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,n.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(l.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:'import { RangeSlider, Slider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(t,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function en(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(el,{...e,children:(0,n.jsx)(ea,{...e})})}function er(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},35913:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,a(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=22702)}),_N_E=e.O()}]);
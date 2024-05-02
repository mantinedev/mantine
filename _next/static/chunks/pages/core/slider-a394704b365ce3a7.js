(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15752],{87875:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var n=(0,a(99882).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},22702:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(60594)}])},60594:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return ep}});var n=a(52322),r=a(45392),t=a(73822);let i=`
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
`,s={type:"configurator",component:function(e){return(0,n.jsx)(t.i,{defaultValue:40,mb:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:i,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var o=a(28559),d=a(2784),u=a(9341),c=a(51438),m=a(58898),h=a(91482),x=a(11200),b=a(13588),p=a(38483),f=a(46690),v=a(82027),j=a(89027),g=a(56867),y=a(10497),S=a(39172),k=a(77970),w=a(37748),V=a(81515),T=a(49514),z=a(40148),D=a(40908);let R=(0,x.Z)((e,{size:l,color:a,thumbSize:n,radius:r})=>({root:{"--slider-size":(0,h.ap)(l,"slider-size"),"--slider-color":a?(0,b.p)(a,e):void 0,"--slider-radius":void 0===r?void 0:(0,h.H5)(r),"--slider-thumb-size":void 0!==n?(0,m.h)(n):"calc(var(--slider-size) * 2)"}})),C={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},A=(0,v.d)((e,l)=>{let a=(0,p.w)("RangeSlider",C,e),{classNames:r,styles:t,value:i,onChange:s,onChangeEnd:o,size:m,min:h,max:x,minRange:b,maxRange:v,step:A,precision:E,defaultValue:M,name:_,marks:L,label:F,labelTransitionProps:I,labelAlwaysOn:N,thumbFromLabel:W,thumbToLabel:B,showLabelOnHover:O,thumbChildren:H,disabled:J,unstyled:P,scale:Z,inverted:$,className:K,style:U,vars:X,hiddenInputProps:Y,...G}=a,q=(0,f.y)({name:"Slider",props:a,classes:D.Z,classNames:r,className:K,styles:t,style:U,vars:X,varsResolver:R,unstyled:P}),{dir:Q}=(0,j.gm)(),[ee,el]=(0,d.useState)(-1),[ea,en]=(0,d.useState)(!1),[er,et]=(0,u.C)({value:i,defaultValue:M,finalValue:[h,x],onChange:s}),ei=(0,d.useRef)(er),es=(0,d.useRef)([]),eo=(0,d.useRef)(void 0),ed=[(0,T.b)({value:er[0],min:h,max:x}),(0,T.b)({value:er[1],min:h,max:x})],eu=E??(0,z.p)(A),ec=e=>{et(e),ei.current=e};(0,d.useEffect)(()=>{Array.isArray(i)&&(ei.current=i)},Array.isArray(i)?[i[0],i[1]]:[null,null]);let em=(e,l,a)=>{let n=[...ei.current];n[l]=e,0===l&&(e>n[1]-(b-1e-9)&&(n[1]=Math.min(e+b,x)),e>(x-(b-1e-9)||h)&&(n[l]=ei.current[l]),n[1]-e>v&&(n[1]=e+v)),1===l&&(e<n[0]+b&&(n[0]=Math.max(e-b,h)),e<n[0]+b&&(n[l]=ei.current[l]),e-n[0]>v&&(n[0]=e-v)),n[0]=(0,V.J)(n[0],eu),n[1]=(0,V.J)(n[1],eu),ec(n),a&&o?.(ei.current)},eh=e=>{if(!J){let l=(0,w.i)({value:e,min:h,max:x,step:A,precision:eu});em(l,eo.current,!1)}},{ref:ex,active:eb}=(0,c.r)(({x:e})=>eh(e),{onScrubEnd:()=>o?.(ei.current)},Q),ep=e=>{ex.current.focus();let l=ex.current.getBoundingClientRect(),a=function(e){if("TouchEvent"in window&&e instanceof window.TouchEvent){let l=e.touches[0];return l.clientX}return e.clientX}(e.nativeEvent),n=(0,w.i)({value:a-l.left,max:x,min:h,step:A,containerWidth:l.width}),r=Math.abs(er[0]-n)>Math.abs(er[1]-n)?1:0,t="ltr"===Q?r:1===r?0:1;eo.current=t},ef=()=>1!==ee&&0!==ee?(el(0),0):ee,ev={max:x,min:h,size:m,labelTransitionProps:I,labelAlwaysOn:N,onBlur:()=>el(-1)},ej=Array.isArray(H);return(0,n.jsx)(g.Y,{value:{getStyles:q},children:(0,n.jsxs)(y.l,{...G,size:m,ref:l,disabled:J,children:[(0,n.jsxs)(k.f,{offset:ed[0],marksOffset:er[0],filled:ed[1]-ed[0],marks:L,inverted:$,min:h,max:x,value:er[1],disabled:J,containerProps:{ref:ex,onMouseEnter:O?()=>en(!0):void 0,onMouseLeave:O?()=>en(!1):void 0,onTouchStartCapture:ep,onTouchEndCapture:()=>{eo.current=-1},onMouseDownCapture:ep,onMouseUpCapture:()=>{eo.current=-1},onKeyDownCapture:e=>{if(!J)switch(e.key){case"ArrowUp":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,V.J)(Math.min(Math.max(ei.current[l]+A,h),x),eu),l,!0);break}case"ArrowRight":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,V.J)(Math.min(Math.max("rtl"===Q?ei.current[l]-A:ei.current[l]+A,h),x),eu),l,!0);break}case"ArrowDown":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,V.J)(Math.min(Math.max(ei.current[l]-A,h),x),eu),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=ef();es.current[l].focus(),em((0,V.J)(Math.min(Math.max("rtl"===Q?ei.current[l]+A:ei.current[l]-A,h),x),eu),l,!0)}}}},children:[(0,n.jsx)(S.b,{...ev,value:Z(er[0]),position:ed[0],dragging:eb,label:"function"==typeof F?F((0,V.J)(Z(er[0]),eu)):F,ref:e=>{es.current[0]=e},thumbLabel:W,onMouseDown:()=>void(eo.current=0),onFocus:()=>el(0),showLabelOnHover:O,isHovered:ea,disabled:J,children:ej?H[0]:H}),(0,n.jsx)(S.b,{...ev,thumbLabel:B,value:Z(er[1]),position:ed[1],dragging:eb,label:"function"==typeof F?F((0,V.J)(Z(er[1]),eu)):F,ref:e=>{es.current[1]=e},onMouseDown:()=>void(eo.current=1),onFocus:()=>el(1),showLabelOnHover:O,isHovered:ea,disabled:J,children:ej?H[1]:H})]}),(0,n.jsx)("input",{type:"hidden",name:`${_}_from`,value:er[0],...Y}),(0,n.jsx)("input",{type:"hidden",name:`${_}_to`,value:er[1],...Y})]})})});A.classes=D.Z,A.displayName="@mantine/core/RangeSlider";let E=`
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
`,M={type:"code",component:function(){return(0,n.jsxs)(o.x,{maw:400,mx:"auto",children:[(0,n.jsx)(t.i,{defaultValue:60,disabled:!0}),(0,n.jsx)(A,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]})]})},code:E};var Text=a(8582);let _=`
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
`,L={type:"code",component:function(){let[e,l]=(0,d.useState)(50),[a,r]=(0,d.useState)(50);return(0,n.jsxs)(o.x,{maw:400,mx:"auto",children:[(0,n.jsx)(t.i,{value:e,onChange:l,onChangeEnd:r}),(0,n.jsxs)(Text.x,{mt:"md",size:"sm",children:["onChange value: ",(0,n.jsx)("b",{children:e})]}),(0,n.jsxs)(Text.x,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,n.jsx)("b",{children:a})]})]})},code:_},F=`
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
`,I={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Text.x,{size:"sm",children:"No label"}),(0,n.jsx)(t.i,{defaultValue:40,label:null}),(0,n.jsx)(Text.x,{size:"sm",mt:"xl",children:"Formatted label"}),(0,n.jsx)(t.i,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,n.jsx)(Text.x,{size:"sm",mt:"xl",children:"Label always visible"}),(0,n.jsx)(t.i,{defaultValue:40,labelAlwaysOn:!0}),(0,n.jsx)(Text.x,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,n.jsx)(t.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:F,centered:!0,maxWidth:400},N=`
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
`,W=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],B={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Text.x,{children:"Decimal step"}),(0,n.jsx)(t.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,n.jsx)(Text.x,{mt:"md",children:"Step matched with marks"}),(0,n.jsx)(t.i,{defaultValue:50,label:e=>W.find(l=>l.value===e).label,step:25,marks:W,styles:{markLabel:{display:"none"}}})]})},code:N,centered:!0,maxWidth:400},O=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,H={type:"code",component:function(){return(0,n.jsx)(t.i,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:O,centered:!0,maxWidth:340},J=`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,P={type:"code",component:function(){return(0,n.jsx)(A,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:J,centered:!0,maxWidth:340},Z=`
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
`,$={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,n.jsx)(t.i,{defaultValue:40,marks:e,mb:32}),(0,n.jsx)(A,{defaultValue:[20,80],marks:e,mb:32})]})},code:Z,centered:!0,maxWidth:400},K=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,U={type:"configurator",component:function(e){return(0,n.jsx)(t.i,{...e,defaultValue:20})},code:K,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var X=a(87875),Y=(0,a(99882).Z)("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let G=`
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
`,q={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{thumbChildren:(0,n.jsx)(X.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,m.h)(2),padding:(0,m.h)(3)}}}),(0,n.jsx)(A,{mt:"xl",styles:{thumb:{borderWidth:(0,m.h)(2),padding:(0,m.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,n.jsx)(X.Z,{size:"1rem",stroke:1.5},"1"),(0,n.jsx)(Y,{size:"1rem",stroke:1.5},"2")]})]})},code:G,maxWidth:400,centered:!0},Q=`
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
`;function ee(e){let l=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<l.length-1;)a+=1,n/=1024;return`${n} ${l[a]}`}let el=e=>2**e,ea={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{scale:el,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:ee}),(0,n.jsx)(A,{mt:50,scale:el,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:ee})]})},code:Q,centered:!0,maxWidth:400},en=`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,er={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.i,{inverted:!0,defaultValue:80}),(0,n.jsx)(A,{inverted:!0,defaultValue:[40,80],mt:"xl"})]})},code:en,centered:!0,maxWidth:400};var et=a(24727);let ei=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,es={type:"styles-api",data:et.a,component:function(e){return(0,n.jsx)(t.i,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:ei,centered:!0,maxWidth:400};var eo={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let ed=`
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
`,eu=`
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
`,ec={type:"code",component:function(){return(0,n.jsx)(o.x,{maw:400,pt:15,pb:20,mx:"auto",children:(0,n.jsx)(t.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:eo})})},code:[{fileName:"Demo.tsx",code:ed,language:"tsx"},{fileName:"Demo.module.css",code:eu,language:"scss"}]};var em=a(79016),eh=a(33638);let ex=(0,em.A)(eh.us.Slider);function eb(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:a,KeyboardEventsTable:t,StylesApiSelectors:i}=l;return a||ef("Demo",!0),t||ef("KeyboardEventsTable",!0),i||ef("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:s}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"Slider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"RangeSlider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(a,{data:M}),"\n",(0,n.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,n.jsx)(a,{data:L}),"\n",(0,n.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(l.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(l.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(a,{data:B}),"\n",(0,n.jsx)(l.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,n.jsxs)(l.p,{children:["To use ",(0,n.jsx)(l.code,{children:"Slider"})," with decimal values, set ",(0,n.jsx)(l.code,{children:"min"}),", ",(0,n.jsx)(l.code,{children:"max"})," and ",(0,n.jsx)(l.code,{children:"step"})," props:"]}),"\n",(0,n.jsx)(a,{data:H}),"\n",(0,n.jsx)(l.h2,{id:"minrange",children:"minRange"}),"\n",(0,n.jsxs)(l.p,{children:["Use ",(0,n.jsx)(l.code,{children:"minRange"})," prop to control minimum range between ",(0,n.jsx)(l.code,{children:"from"})," and ",(0,n.jsx)(l.code,{children:"to"})," values\nin ",(0,n.jsx)(l.code,{children:"RangeSlider"}),". The default value is ",(0,n.jsx)(l.code,{children:"10"}),". The example below shows how to\nuse ",(0,n.jsx)(l.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,n.jsx)(a,{data:P}),"\n",(0,n.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(a,{data:$}),"\n",(0,n.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(a,{data:U}),"\n",(0,n.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(a,{data:q}),"\n",(0,n.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(l.p,{children:["You can use the ",(0,n.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(l.p,{children:["In the following demo, the value ",(0,n.jsx)(l.code,{children:"x"})," represents the value ",(0,n.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(a,{data:ea}),"\n",(0,n.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(l.p,{children:["You can invert the track with the ",(0,n.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(a,{data:er}),"\n",(0,n.jsx)(i,{component:"Slider"}),"\n",(0,n.jsx)(a,{data:es}),"\n",(0,n.jsxs)(l.p,{children:["Example of using ",(0,n.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,n.jsx)(l.code,{children:"Slider"})," styles:"]}),"\n",(0,n.jsx)(a,{data:ec}),"\n",(0,n.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,n.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(l.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:'import { RangeSlider, Slider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(t,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function ep(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ex,{...e,children:(0,n.jsx)(eb,{...e})})}function ef(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=22702)}),_N_E=e.O()}]);
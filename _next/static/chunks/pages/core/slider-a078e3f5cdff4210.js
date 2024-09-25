(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15752],{22702:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return l(52718)}])},52718:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return et}});var n=l(52322),t=l(45392),r=l(73822);let i={type:"configurator",component:function(e){return(0,n.jsx)(r.i,{defaultValue:40,mb:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=l(28559),o=l(2784),d=l(9341),u=l(51438),c=l(58898),m=l(91482),h=l(11200),x=l(13588),b=l(38483),p=l(46690),f=l(82027),v=l(89027),j=l(56867),g=l(10497),y=l(39172),k=l(77970),w=l(37748),S=l(81515),V=l(49514),T=l(40148),D=l(40908);let z=(0,h.Z)((e,{size:a,color:l,thumbSize:n,radius:t})=>({root:{"--slider-size":(0,m.ap)(a,"slider-size"),"--slider-color":l?(0,x.p)(l,e):void 0,"--slider-radius":void 0===t?void 0:(0,m.H5)(t),"--slider-thumb-size":void 0!==n?(0,c.h)(n):"calc(var(--slider-size) * 2)"}})),R={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},C=(0,f.d5)((e,a)=>{let l=(0,b.w)("RangeSlider",R,e),{classNames:t,styles:r,value:i,onChange:s,onChangeEnd:c,size:m,min:h,max:x,minRange:f,maxRange:C,step:M,precision:N,defaultValue:A,name:_,marks:F,label:E,labelTransitionProps:I,labelAlwaysOn:L,thumbFromLabel:W,thumbToLabel:B,showLabelOnHover:O,thumbChildren:H,disabled:$,unstyled:Z,scale:J,inverted:P,className:X,style:Y,vars:G,hiddenInputProps:K,...U}=l,q=(0,p.y)({name:"Slider",props:l,classes:D.Z,classNames:t,className:X,styles:r,style:Y,vars:G,varsResolver:z,unstyled:Z}),{dir:Q}=(0,v.gm)(),[ee,ea]=(0,o.useState)(-1),[el,en]=(0,o.useState)(!1),[et,er]=(0,d.C)({value:i,defaultValue:A,finalValue:[h,x],onChange:s}),ei=(0,o.useRef)(et),es=(0,o.useRef)([]),eo=(0,o.useRef)(void 0),ed=[(0,V.b)({value:et[0],min:h,max:x}),(0,V.b)({value:et[1],min:h,max:x})],eu=N??(0,T.p)(M),ec=e=>{er(e),ei.current=e};(0,o.useEffect)(()=>{Array.isArray(i)&&(ei.current=i)},Array.isArray(i)?[i[0],i[1]]:[null,null]);let em=(e,a,l)=>{let n=[...ei.current];n[a]=e,0===a&&(e>n[1]-(f-1e-9)&&(n[1]=Math.min(e+f,x)),e>(x-(f-1e-9)||h)&&(n[a]=ei.current[a]),n[1]-e>C&&(n[1]=e+C)),1===a&&(e<n[0]+f&&(n[0]=Math.max(e-f,h)),e<n[0]+f&&(n[a]=ei.current[a]),e-n[0]>C&&(n[0]=e-C)),n[0]=(0,S.J)(n[0],eu),n[1]=(0,S.J)(n[1],eu),ec(n),l&&c?.(ei.current)},eh=e=>{$||em((0,w.i)({value:e,min:h,max:x,step:M,precision:eu}),eo.current,!1)},{ref:ex,active:eb}=(0,u.r)(({x:e})=>eh(e),{onScrubEnd:()=>c?.(ei.current)},Q),ep=e=>{var a;ex.current.focus();let l=ex.current.getBoundingClientRect(),n=(a=e.nativeEvent,"TouchEvent"in window&&a instanceof window.TouchEvent?a.touches[0].clientX:a.clientX),t=(0,w.i)({value:n-l.left,max:x,min:h,step:M,containerWidth:l.width}),r=Math.abs(et[0]-t)>Math.abs(et[1]-t)?1:0,i="ltr"===Q?r:1===r?0:1;eo.current=i},ef=()=>1!==ee&&0!==ee?(ea(0),0):ee,ev={max:x,min:h,size:m,labelTransitionProps:I,labelAlwaysOn:L,onBlur:()=>ea(-1)},ej=Array.isArray(H);return(0,n.jsx)(j.Y,{value:{getStyles:q},children:(0,n.jsxs)(g.l,{...U,size:m,ref:a,disabled:$,children:[(0,n.jsxs)(k.f,{offset:ed[0],marksOffset:et[0],filled:ed[1]-ed[0],marks:F,inverted:P,min:h,max:x,value:et[1],disabled:$,containerProps:{ref:ex,onMouseEnter:O?()=>en(!0):void 0,onMouseLeave:O?()=>en(!1):void 0,onTouchStartCapture:ep,onTouchEndCapture:()=>{eo.current=-1},onMouseDownCapture:ep,onMouseUpCapture:()=>{eo.current=-1},onKeyDownCapture:e=>{if(!$)switch(e.key){case"ArrowUp":{e.preventDefault();let a=ef();es.current[a].focus(),em((0,S.J)(Math.min(Math.max(ei.current[a]+M,h),x),eu),a,!0);break}case"ArrowRight":{e.preventDefault();let a=ef();es.current[a].focus(),em((0,S.J)(Math.min(Math.max("rtl"===Q?ei.current[a]-M:ei.current[a]+M,h),x),eu),a,!0);break}case"ArrowDown":{e.preventDefault();let a=ef();es.current[a].focus(),em((0,S.J)(Math.min(Math.max(ei.current[a]-M,h),x),eu),a,!0);break}case"ArrowLeft":{e.preventDefault();let a=ef();es.current[a].focus(),em((0,S.J)(Math.min(Math.max("rtl"===Q?ei.current[a]+M:ei.current[a]-M,h),x),eu),a,!0)}}}},children:[(0,n.jsx)(y.b,{...ev,value:J(et[0]),position:ed[0],dragging:eb,label:"function"==typeof E?E((0,S.J)(J(et[0]),eu)):E,ref:e=>{es.current[0]=e},thumbLabel:W,onMouseDown:()=>void(eo.current=0),onFocus:()=>ea(0),showLabelOnHover:O,isHovered:el,disabled:$,children:ej?H[0]:H}),(0,n.jsx)(y.b,{...ev,thumbLabel:B,value:J(et[1]),position:ed[1],dragging:eb,label:"function"==typeof E?E((0,S.J)(J(et[1]),eu)):E,ref:e=>{es.current[1]=e},onMouseDown:()=>void(eo.current=1),onFocus:()=>ea(1),showLabelOnHover:O,isHovered:el,disabled:$,children:ej?H[1]:H})]}),(0,n.jsx)("input",{type:"hidden",name:`${_}_from`,value:et[0],...K}),(0,n.jsx)("input",{type:"hidden",name:`${_}_to`,value:et[1],...K})]})})});C.classes=D.Z,C.displayName="@mantine/core/RangeSlider";let M={type:"code",component:function(){return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsx)(r.i,{defaultValue:60,disabled:!0}),(0,n.jsx)(C,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]})]})},code:`
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
`};var N=l(8582);let A={type:"code",component:function(){let[e,a]=(0,o.useState)(50),[l,t]=(0,o.useState)(50);return(0,n.jsxs)(s.x,{maw:400,mx:"auto",children:[(0,n.jsx)(r.i,{value:e,onChange:a,onChangeEnd:t}),(0,n.jsxs)(N.x,{mt:"md",size:"sm",children:["onChange value: ",(0,n.jsx)("b",{children:e})]}),(0,n.jsxs)(N.x,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,n.jsx)("b",{children:l})]})]})},code:`
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
`},_={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.x,{size:"sm",children:"No label"}),(0,n.jsx)(r.i,{defaultValue:40,label:null}),(0,n.jsx)(N.x,{size:"sm",mt:"xl",children:"Formatted label"}),(0,n.jsx)(r.i,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,n.jsx)(N.x,{size:"sm",mt:"xl",children:"Label always visible"}),(0,n.jsx)(r.i,{defaultValue:40,labelAlwaysOn:!0}),(0,n.jsx)(N.x,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,n.jsx)(r.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
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
`,centered:!0,maxWidth:400},F=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],E={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.x,{children:"Decimal step"}),(0,n.jsx)(r.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,n.jsx)(N.x,{mt:"md",children:"Step matched with marks"}),(0,n.jsx)(r.i,{defaultValue:50,label:e=>F.find(a=>a.value===e).label,step:25,marks:F,styles:{markLabel:{display:"none"}}})]})},code:`
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
`,centered:!0,maxWidth:400},I={type:"code",component:function(){return(0,n.jsx)(r.i,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340},L={type:"code",component:function(){return(0,n.jsx)(C,{minRange:.2,min:0,max:1,step:5e-4,defaultValue:[.1245,.5535]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
`,centered:!0,maxWidth:340},W={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,n.jsx)(r.i,{defaultValue:40,marks:e,mb:32}),(0,n.jsx)(C,{defaultValue:[20,80],marks:e,mb:32})]})},code:`
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
`,centered:!0,maxWidth:400},B={type:"configurator",component:function(e){return(0,n.jsx)(r.i,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var O=l(35913),H=(0,l(73681).Z)("outline","heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let $={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.i,{thumbChildren:(0,n.jsx)(O.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,c.h)(2),padding:(0,c.h)(3)}}}),(0,n.jsx)(C,{mt:"xl",styles:{thumb:{borderWidth:(0,c.h)(2),padding:(0,c.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,n.jsx)(O.Z,{size:"1rem",stroke:1.5},"1"),(0,n.jsx)(H,{size:"1rem",stroke:1.5},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function Z(e){let a=["KB","MB","GB","TB"],l=0,n=e;for(;n>=1024&&l<a.length-1;)l+=1,n/=1024;return`${n} ${a[l]}`}let J=e=>2**e,P={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.i,{scale:J,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:Z}),(0,n.jsx)(C,{mt:50,scale:J,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:Z})]})},code:`
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
`,centered:!0,maxWidth:400},X={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.i,{inverted:!0,defaultValue:80}),(0,n.jsx)(C,{inverted:!0,defaultValue:[40,80],mt:"xl"})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,centered:!0,maxWidth:400};var Y=l(24727);let G=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,K={type:"styles-api",data:Y.a,component:function(e){return(0,n.jsx)(r.i,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:G,centered:!0,maxWidth:400};var U={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"};let q={type:"code",component:function(){return(0,n.jsx)(s.x,{maw:400,pt:15,pb:20,mx:"auto",children:(0,n.jsx)(r.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:U})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var Q=l(76924),ee=l(25071),ea=l(15019);let el=(0,ee.A)(ea.us.Slider);function en(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:l,KeyboardEventsTable:r,StylesApiSelectors:s}=a;return l||er("Demo",!0),r||er("KeyboardEventsTable",!0),s||er("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{data:i}),"\n",(0,n.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(a.p,{children:["Controlled ",(0,n.jsx)(a.code,{children:"Slider"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Controlled ",(0,n.jsx)(a.code,{children:"RangeSlider"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(l,{data:M}),"\n",(0,n.jsx)(a.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,n.jsx)(l,{data:A}),"\n",(0,n.jsx)(a.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(a.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(a.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(a.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,n.jsx)(l,{data:_}),"\n",(0,n.jsx)(a.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(l,{data:E}),"\n",(0,n.jsx)(a.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,n.jsxs)(a.p,{children:["To use ",(0,n.jsx)(a.code,{children:"Slider"})," with decimal values, set ",(0,n.jsx)(a.code,{children:"min"}),", ",(0,n.jsx)(a.code,{children:"max"})," and ",(0,n.jsx)(a.code,{children:"step"})," props:"]}),"\n",(0,n.jsx)(l,{data:I}),"\n",(0,n.jsx)(a.h2,{id:"minrange",children:"minRange"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"minRange"})," prop to control minimum range between ",(0,n.jsx)(a.code,{children:"from"})," and ",(0,n.jsx)(a.code,{children:"to"})," values\nin ",(0,n.jsx)(a.code,{children:"RangeSlider"}),". The default value is ",(0,n.jsx)(a.code,{children:"10"}),". The example below shows how to\nuse ",(0,n.jsx)(a.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,n.jsx)(l,{data:L}),"\n",(0,n.jsx)(a.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(a.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(a.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(a.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(l,{data:W}),"\n",(0,n.jsx)(a.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(l,{data:B}),"\n",(0,n.jsx)(a.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(l,{data:$}),"\n",(0,n.jsx)(a.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(a.p,{children:["You can use the ",(0,n.jsx)(a.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(a.p,{children:["In the following demo, the value ",(0,n.jsx)(a.code,{children:"x"})," represents the value ",(0,n.jsx)(a.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(a.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(a.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(l,{data:P}),"\n",(0,n.jsx)(a.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(a.p,{children:["You can invert the track with the ",(0,n.jsx)(a.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(l,{data:X}),"\n",(0,n.jsx)(s,{component:"Slider"}),"\n",(0,n.jsx)(l,{data:K}),"\n",(0,n.jsxs)(a.p,{children:["Example of using ",(0,n.jsx)(a.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,n.jsx)(a.code,{children:"Slider"})," styles:"]}),"\n",(0,n.jsx)(l,{data:q}),"\n",(0,n.jsx)(a.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Slider"})," and ",(0,n.jsx)(a.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,n.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(a.h2,{id:"build-custom-slider",children:"Build custom slider"}),"\n",(0,n.jsxs)(a.p,{children:["If ",(0,n.jsx)(a.code,{children:"Slider"})," component does not meet your requirements, you can build a custom slider with ",(0,n.jsx)(a.a,{href:"/hooks/use-move/",children:"use-move"})," hook:"]}),"\n",(0,n.jsx)(l,{data:Q.H}),"\n",(0,n.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Slider"})," and ",(0,n.jsx)(a.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(a.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(a.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { RangeSlider, Slider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider\n        thumbFromLabel="First thumb aria-label"\n        thumbToLabel="Second thumb aria-label"\n      />\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(r,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function et(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(el,{...e,children:(0,n.jsx)(en,{...e})})}function er(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},18064:function(e,a,l){"use strict";l.d(a,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,l(73681).Z)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},35913:function(e,a,l){"use strict";l.d(a,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,l(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},76924:function(e,a,l){"use strict";l.d(a,{H:function(){return d}});var n=l(52322),t=l(2784),r=l(18064),i=l(51438),s=l(82692),o="m_b2d44517";let d={type:"code",component:function(){let[e,a]=(0,t.useState)(.3),{ref:l}=(0,i.r)(({x:e})=>a((0,s.u)(e,.1,.9))),d=e<.2||e>.8;return(0,n.jsx)("div",{className:"m_1e8dea5f",children:(0,n.jsxs)("div",{className:"m_b34cb76e",ref:l,children:[(0,n.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:o,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:o,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,n.jsx)(r.Z,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=22702)}),_N_E=e.O()}]);
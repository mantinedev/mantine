(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let t={};for(var r in e)n(t,r,{get:e[r],enumerable:!0});return a||n(t,Symbol.toStringTag,{value:"Module"}),t}])},328940,e=>{"use strict";var n=e.i(779177),a=e.i(433512),t=e.i(312773),r=e.i(481178),l=e.i(317477),i=e.i(44091),s=e.i(391466),o=e.i(275519),u=e.i(323283),d=e.i(55383),c=e.i(585968),m=e.i(782814),h=e.i(130624),x=e.i(23168),p=e.i(635961),g=e.i(846711),v=e.i(178372),f=e.i(229737),b=e.i(504297),j=e.i(191788),R=e.i(852361),S=e.i(332977),y=e.i(502315),w=e.i(579560),T=e.i(391398);let V=(0,r.createVarsResolver)((e,{size:t,color:r,thumbSize:i,radius:s})=>({root:{"--slider-size":(0,a.getSize)(t,"slider-size"),"--slider-color":r?(0,l.getThemeColor)(r,e):void 0,"--slider-radius":void 0===s?void 0:(0,a.getRadius)(s),"--slider-thumb-size":void 0!==i?(0,n.rem)(i):"calc(var(--slider-size) * 2)"}})),k={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},D=(0,o.factory)(e=>{let n=(0,i.useProps)("RangeSlider",k,e),{classNames:a,styles:r,value:l,onChange:o,onChangeEnd:D,size:M,min:C,max:O,domain:z,minRange:A,maxRange:F,step:P,precision:_,defaultValue:N,name:E,marks:W,label:L,labelTransitionProps:B,labelAlwaysOn:U,thumbFromLabel:H,thumbToLabel:X,thumbValueText:K,showLabelOnHover:I,thumbChildren:$,disabled:Y,unstyled:q,scale:G,inverted:J,orientation:Q,className:Z,style:ee,vars:en,hiddenInputProps:ea,restrictToMarks:et,thumbProps:er,pushOnOverlap:el,attributes:ei,ref:es,...eo}=n,eu=(0,s.useStyles)({name:"RangeSlider",props:n,classes:b.default,classNames:a,className:Z,styles:r,style:ee,attributes:ei,vars:en,varsResolver:V,unstyled:q}),ed=(0,j.useRef)(null),{dir:ec}=(0,u.useDirection)(),[em,eh]=(0,j.useState)(-1),[ex,ep]=(0,j.useState)(!1),[eg,ev]=(0,w.useUncontrolled)({value:l,defaultValue:N,finalValue:[C,O],onChange:o}),ef=(0,j.useRef)(eg),eb=(0,j.useRef)([]),ej=(0,j.useRef)(null),eR=(0,j.useRef)(void 0),[eS,ey]=z||[C,O],ew=[(0,h.getPosition)({value:eg[0],min:eS,max:ey}),(0,h.getPosition)({value:eg[1],min:eS,max:ey})],eT=_??(0,v.getPrecision)(P);(0,j.useEffect)(()=>{Array.isArray(l)&&(ef.current=l)},Array.isArray(l)?[l[0],l[1]]:[null,null]);let eV=(e,n,a)=>{if(-1===n)return;let r=[...ef.current];if(et&&W){let a=(0,t.findClosestNumber)(e,W.map(e=>e.value)),l=r[n];r[n]=a;let i=+(0===n),s=(0,f.getLastMarkValue)(W),o=(0,f.getFirstMarkValue)(W);a===s&&r[i]===s||a===o&&r[i]===o?r[n]=l:a===r[i]&&(l>r[i]?r[i]=(0,f.getPreviousMarkValue)(a,W):r[i]=(0,f.getNextMarkValue)(a,W))}else{let a=(0,R.clamp)(e,C,O);r[n]=a,0===n&&(a>r[1]-(A-1e-9)&&(el?r[1]=Math.min(e+A,O):r[n]=ef.current[n]),a>(O-(A-1e-9)||C)&&(r[n]=ef.current[n]),r[1]-e>F&&(el?r[1]=e+F:r[n]=ef.current[n])),1===n&&(a<r[0]+A&&(el?r[0]=Math.max(e-A,C):r[n]=ef.current[n]),a<r[0]+A&&(r[n]=ef.current[n]),a-r[0]>F&&(el?r[0]=e-F:r[n]=ef.current[n]))}if(r[0]=(0,g.getFloatingValue)(r[0],eT),r[1]=(0,g.getFloatingValue)(r[1],eT),r[0]>r[1]){let e=r[0];r[0]=r[1],r[1]=e}ev(r),ef.current=r,a&&D?.(ef.current)},{ref:ek,active:eD}=(0,y.useMove)(({x:e,y:n})=>{var a;return a="vertical"===Q?1-n:e,void(!Y&&void 0!==eR.current&&eV((0,p.getChangeValue)({value:a,min:eS,max:ey,step:P,precision:eT}),eR.current,!1))},{onScrubEnd:()=>!Y&&D?.(ef.current)},ec),eM=e=>{if(ed.current){ed.current.focus();let n=ed.current.getBoundingClientRect(),a=function(e,n){if("TouchEvent"in window&&e instanceof window.TouchEvent){let a=e.touches[0];return"vertical"===n?a.clientY:a.clientX}return"vertical"===n?e.clientY:e.clientX}(e.nativeEvent,Q),t="vertical"===Q?(0,p.getChangeValue)({value:n.bottom-a,max:O,min:C,step:P,containerWidth:n.height}):(0,p.getChangeValue)({value:a-n.left,max:O,min:C,step:P,containerWidth:n.width}),r=+(Math.abs(eg[0]-t)>Math.abs(eg[1]-t));eR.current="vertical"===Q||"ltr"===ec?r:+(1!==r)}},eC=()=>1!==em&&0!==em?(eh(0),0):em,eO={max:O,min:C,size:M,labelTransitionProps:B,labelAlwaysOn:U,orientation:Q,onBlur:()=>eh(-1)},ez=Array.isArray($);return(0,T.jsx)(d.SliderProvider,{value:{getStyles:eu},children:(0,T.jsxs)(c.SliderRoot,{...eo,size:M,ref:(0,S.useMergedRef)(es,ej),disabled:Y,orientation:Q,onMouseDownCapture:()=>ej.current?.focus(),onKeyDownCapture:()=>{eb.current[0]?.parentElement?.contains(document.activeElement)||eb.current[0]?.focus()},children:[(0,T.jsxs)(x.Track,{offset:ew[0],marksOffset:eg[0],filled:ew[1]-ew[0],marks:W,inverted:J,min:eS,max:ey,value:eg[1],disabled:Y,containerProps:{ref:(0,S.useMergedRef)(ed,ek),onMouseEnter:I?()=>ep(!0):void 0,onMouseLeave:I?()=>ep(!1):void 0,onTouchStartCapture:eM,onTouchEndCapture:()=>{eR.current=-1},onMouseDownCapture:eM,onMouseUpCapture:()=>{eR.current=-1},onKeyDownCapture:e=>{if(!Y)switch(e.key){case"ArrowUp":{e.preventDefault();let n=eC();eb.current[n].focus(),eV((0,g.getFloatingValue)(et&&W?(0,f.getNextMarkValue)(ef.current[n],W):Math.min(Math.max(ef.current[n]+P,eS),ey),eT),n,!0);break}case"ArrowRight":{e.preventDefault();let n=eC();eb.current[n].focus(),eV((0,g.getFloatingValue)(et&&W?("rtl"===ec?f.getPreviousMarkValue:f.getNextMarkValue)(ef.current[n],W):Math.min(Math.max("rtl"===ec?ef.current[n]-P:ef.current[n]+P,eS),ey),eT),n,!0);break}case"ArrowDown":{e.preventDefault();let n=eC();eb.current[n].focus(),eV((0,g.getFloatingValue)(et&&W?(0,f.getPreviousMarkValue)(ef.current[n],W):Math.min(Math.max(ef.current[n]-P,eS),ey),eT),n,!0);break}case"ArrowLeft":{e.preventDefault();let n=eC();eb.current[n].focus(),eV((0,g.getFloatingValue)(et&&W?("rtl"===ec?f.getNextMarkValue:f.getPreviousMarkValue)(ef.current[n],W):Math.min(Math.max("rtl"===ec?ef.current[n]+P:ef.current[n]-P,eS),ey),eT),n,!0)}}}},children:[(0,T.jsx)(m.Thumb,{...eO,value:G(eg[0]),position:ew[0],dragging:eD,label:"function"==typeof L?L((0,g.getFloatingValue)(G(eg[0]),eT)):L,ref:e=>{e&&(eb.current[0]=e)},thumbLabel:H,thumbValueText:K,onMouseDown:()=>void(eR.current=0),onFocus:()=>eh(0),showLabelOnHover:I,isHovered:ex,disabled:Y,...er?.(0),children:ez?$[0]:$}),(0,T.jsx)(m.Thumb,{...eO,thumbLabel:X,value:G(eg[1]),position:ew[1],dragging:eD,label:"function"==typeof L?L((0,g.getFloatingValue)(G(eg[1]),eT)):L,ref:e=>{e&&(eb.current[1]=e)},thumbValueText:K,onMouseDown:()=>void(eR.current=1),onFocus:()=>eh(1),showLabelOnHover:I,isHovered:ex,disabled:Y,...er?.(1),children:ez?$[1]:$})]}),(0,T.jsx)("input",{type:"hidden",name:`${E}_from`,value:eg[0],...ea}),(0,T.jsx)("input",{type:"hidden",name:`${E}_to`,value:eg[1],...ea})]})})});D.classes=b.default,D.varsResolver=V,D.displayName="@mantine/core/RangeSlider",e.s(["RangeSlider",0,D],328940)},448276,e=>{"use strict";var n=e.i(648863),a=e.i(328940),t=e.i(391398);let r={type:"configurator",component:function(e){return(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]},l={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{min:0,max:1,minRange:.2,step:5e-4,defaultValue:[.2,.8]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
`,centered:!0,maxWidth:340},i={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],disabled:!0})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
`,centered:!0,maxWidth:340},s={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{domain:[0,100],min:10,max:90,defaultValue:[25,75],mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={[25, 75]}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},o={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{inverted:!0,defaultValue:[20,60]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
`,centered:!0,maxWidth:400};var u=e.i(883364);let d={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Text,{size:"sm",children:"No label"}),(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],label:null}),(0,t.jsx)(u.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],label:e=>`${e} \xb0C`}),(0,t.jsx)(u.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],labelAlwaysOn:!0}),(0,t.jsx)(u.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`import { RangeSlider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <RangeSlider defaultValue={[20, 60]} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <RangeSlider defaultValue={[20, 60]} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <RangeSlider defaultValue={[20, 60]} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <RangeSlider
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
`,centered:!0,maxWidth:400},c={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.RangeSlider,{defaultValue:[20,60],marks:[{value:10},{value:40},{value:95}],mb:32}),(0,t.jsx)(a.RangeSlider,{mb:32,defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <RangeSlider
        defaultValue={[20, 60]}
        marks={[{ value: 10 }, { value: 40 }, { value: 95 }]}
        mb={32}
      />

      <RangeSlider
        mb={32}
        defaultValue={[20, 60]}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var m=e.i(191788);let h={type:"code",component:function(){let[e,n]=(0,m.useState)([20,80]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Text,{size:"sm",mb:"xs",children:"Maximum range: 50 (selection cannot be wider than 50 units)"}),(0,t.jsx)(a.RangeSlider,{value:e,onChange:n,maxRange:50}),(0,t.jsxs)(u.Text,{size:"sm",mt:"xs",children:["Value: [",e[0],", ",e[1],"] - Range: ",e[1]-e[0]]})]})},code:`
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <>
      <Text size="sm" mb="xs">
        Maximum range: 50 (selection cannot be wider than 50 units)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        maxRange={50}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`},x={type:"code",component:function(){let[e,n]=(0,m.useState)([30,60]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Text,{size:"sm",mb:"xs",children:"Minimum range: 20 (thumbs must be at least 20 units apart)"}),(0,t.jsx)(a.RangeSlider,{value:e,onChange:n,minRange:20}),(0,t.jsxs)(u.Text,{size:"sm",mt:"xs",children:["Value: [",e[0],", ",e[1],"] - Range: ",e[1]-e[0]]})]})},code:`
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([30, 60]);

  return (
    <>
      <Text size="sm" mb="xs">
        Minimum range: 20 (thumbs must be at least 20 units apart)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        minRange={20}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`},p={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{pushOnOverlap:!1,defaultValue:[25,65],minRange:20})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
`},g={type:"code",component:function(){return(0,t.jsx)(a.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
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
  );
}
`,centered:!0,maxWidth:400},v=[{value:0},{value:25},{value:50},{value:75},{value:100}],f={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Text,{children:"Decimal step"}),(0,t.jsx)(a.RangeSlider,{minRange:2,defaultValue:[0,10],min:-10,max:10,step:.1}),(0,t.jsx)(u.Text,{mt:"md",children:"Step matched with marks"}),(0,t.jsx)(a.RangeSlider,{defaultValue:[50,75],step:25,marks:v})]})},code:`
import { RangeSlider, Text } from '@mantine/core';

const marks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <RangeSlider minRange={2} defaultValue={[0, 10]} min={-10} max={10} step={0.1} />

      <Text mt="md">Step matched with marks</Text>
      <RangeSlider defaultValue={[50, 75]} step={25} marks={marks} />
    </>
  );
}
`,centered:!0,maxWidth:400};var b=e.i(232471);let j={type:"code",component:function(){let[e,n]=(0,m.useState)([25,75]);return(0,t.jsxs)(b.Box,{pb:"md",children:[(0,t.jsxs)(u.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: [",e[0],", ",e[1],"]"]}),(0,t.jsx)(a.RangeSlider,{value:e,onChange:n,min:0,max:100,step:1,minRange:10,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:20,hidden:!0},{value:40,hidden:!0},{value:50,label:"50%"},{value:60,hidden:!0},{value:80,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { RangeSlider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: [{value[0]}, {value[1]}]
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        minRange={10}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 20, hidden: true },
          { value: 40, hidden: true },
          { value: 50, label: '50%' },
          { value: 60, hidden: true },
          { value: 80, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`};var R=(0,n.__exportAll)({configurator:()=>r,decimal:()=>l,disabled:()=>i,domain:()=>s,hiddenMarks:()=>j,inverted:()=>o,label:()=>d,marks:()=>c,maxRange:()=>h,minRange:()=>x,pushOnOverlap:()=>p,restrictToMarks:()=>g,step:()=>f});e.s(["RangeSliderDemos",0,R],448276)},641419,e=>{"use strict";var n=e.i(391398),a=e.i(38856),t=e.i(448276);e.i(603441);var r=e.i(62558);e.i(457450);var l=e.i(418026);let i=(0,r.Layout)(l.MDX_DATA.RangeSlider);function s(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:l,KeyboardEventsTable:i}=r;return l||o("Demo",!0),i||o("KeyboardEventsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.configurator}),"\n",(0,n.jsx)(r.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"RangeSlider"})," can be used with uncontrolled forms the same way as a native input element.\nSet the ",(0,n.jsx)(r.code,{children:"name"})," attribute to include range slider value in ",(0,n.jsx)(r.code,{children:"FormData"})," object on form submission.\nTo control the initial value in uncontrolled forms, use the ",(0,n.jsx)(r.code,{children:"defaultValue"})," prop."]}),"\n",(0,n.jsxs)(r.p,{children:["Example usage of uncontrolled ",(0,n.jsx)(r.code,{children:"RangeSlider"})," with ",(0,n.jsx)(r.code,{children:"FormData"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Range slider value:', formData.get('range'));\n      }}\n    >\n      <RangeSlider\n        name=\"range\"\n        defaultValue={[20, 80]}\n        min={0}\n        max={100}\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.disabled}),"\n",(0,n.jsx)(r.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(r.p,{children:"To change the label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"label"})," – formatter function, accepts value as an argument, set to null to disable the label, defaults to ",(0,n.jsx)(r.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"labelAlwaysOn"})," – if true, the label will always be displayed; by default the label is visible only when the user is dragging"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(r.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize the label animation"]}),"\n"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.label}),"\n",(0,n.jsx)(r.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.step}),"\n",(0,n.jsx)(r.h2,{id:"domain",children:"Domain"}),"\n",(0,n.jsxs)(r.p,{children:["By default, ",(0,n.jsx)(r.code,{children:"min"})," and ",(0,n.jsx)(r.code,{children:"max"})," values define the possible range of values.\nThe ",(0,n.jsx)(r.code,{children:"domain"})," prop allows setting the possible range of values independently of the\n",(0,n.jsx)(r.code,{children:"min"})," and ",(0,n.jsx)(r.code,{children:"max"})," values:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.domain}),"\n",(0,n.jsx)(r.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,n.jsxs)(r.p,{children:["To use ",(0,n.jsx)(r.code,{children:"RangeSlider"})," with decimal values, set the ",(0,n.jsx)(r.code,{children:"min"}),", ",(0,n.jsx)(r.code,{children:"max"}),", and ",(0,n.jsx)(r.code,{children:"step"})," props:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.decimal}),"\n",(0,n.jsx)(r.h2,{id:"minrange",children:"minRange"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.code,{children:"minRange"})," prop to control the minimum range between ",(0,n.jsx)(r.code,{children:"from"})," and ",(0,n.jsx)(r.code,{children:"to"})," values\nin ",(0,n.jsx)(r.code,{children:"RangeSlider"}),". The default value is ",(0,n.jsx)(r.code,{children:"10"}),". This ensures the thumbs must be at least\nthe specified distance apart:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.minRange}),"\n",(0,n.jsx)(r.h2,{id:"maxrange",children:"maxRange"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.code,{children:"maxRange"})," prop to control the maximum range between ",(0,n.jsx)(r.code,{children:"from"})," and ",(0,n.jsx)(r.code,{children:"to"})," values.\nThis limits how wide the selection can be. By default, ",(0,n.jsx)(r.code,{children:"maxRange"})," is set to ",(0,n.jsx)(r.code,{children:"Infinity"}),":"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.maxRange}),"\n",(0,n.jsx)(r.h2,{id:"pushonoverlap",children:"pushOnOverlap"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"pushOnOverlap"})," prop controls whether the thumbs should push each other when they overlap.\nBy default, ",(0,n.jsx)(r.code,{children:"pushOnOverlap"})," is ",(0,n.jsx)(r.code,{children:"true"}),". If you want to disable this behavior, set it to ",(0,n.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Example of ",(0,n.jsx)(r.code,{children:"pushOnOverlap={false}"}),":"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.pushOnOverlap}),"\n",(0,n.jsx)(r.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(r.p,{children:["Add any number of marks to the slider by setting the ",(0,n.jsx)(r.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(r.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.marks}),"\n",(0,n.jsx)(r.h2,{id:"restrict-selection-to-marks",children:"Restrict selection to marks"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"restrictToMarks"})," prop to restrict slider value to marks only. Note that in\nthis case ",(0,n.jsx)(r.code,{children:"step"})," prop is ignored:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.restrictToMarks}),"\n",(0,n.jsx)(r.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(r.p,{children:["You can invert the track with the ",(0,n.jsx)(r.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.inverted}),"\n",(0,n.jsx)(r.h2,{id:"hidden-marks",children:"Hidden marks"}),"\n",(0,n.jsxs)(r.p,{children:['Hidden marks allow you to snap to specific values without displaying them visually on the track.\nThis is useful when you want to create a "sticky" snapping behavior to certain values that\nyou don\'t want to show to the user. Use this feature together with ',(0,n.jsx)(r.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,n.jsx)(l,{data:t.RangeSliderDemos.hiddenMarks}),"\n",(0,n.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"RangeSlider"})," component is accessible by default:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(r.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(r.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'import { RangeSlider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <RangeSlider\n      thumbFromLabel="First thumb aria-label"\n      thumbToLabel="Second thumb aria-label"\n    />\n  );\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.code,{children:"scale"})," is used or the displayed value is formatted (for example as a currency or\npercentage), set ",(0,n.jsx)(r.code,{children:"thumbValueText"})," to provide a human-readable value for screen readers.\nIt is rendered as ",(0,n.jsx)(r.code,{children:"aria-valuetext"})," on both thumbs. When a function is provided, it receives\nthe scaled value of the corresponding thumb:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <RangeSlider\n      scale={(v) => v * 10}\n      thumbValueText={(value) => `${value}%`}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(i,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"}]})]})}function o(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,n.jsx)(i,{...e,children:(0,n.jsx)(s,{...e})})}])},337453,(e,n,a)=>{let t="/core/range-slider";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(641419)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
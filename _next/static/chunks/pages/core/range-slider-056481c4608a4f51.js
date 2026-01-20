(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61655],{1798:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9383:(e,n,a)=>{"use strict";a.d(n,{z:()=>r});var t=a(6029),l=a(49386);let r={type:"code",component:function(){return(0,t.jsx)(l.F,{pushOnOverlap:!1,defaultValue:[25,65],minRange:20})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
`}},24583:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},49386:(e,n,a)=>{"use strict";a.d(n,{F:()=>D});var t=a(6029),l=a(55729),r=a(7798),i=a(38744),s=a(24854),o=a(28136),d=a(26082),u=a(14163),c=a(78297),h=a(33987),m=a(21351),p=a(38919),v=a(15583),x=a(8411),f=a(90851),b=a(99341),g=a(97233),j=a(68884),y=a(97832),k=a(29056),w=a(13494),M=a(31861),R=a(42268),S=a(51662),V=a(73778);let A=(0,h.V)((e,{size:n,color:a,thumbSize:t,radius:l})=>({root:{"--slider-size":(0,u.YC)(n,"slider-size"),"--slider-color":a?(0,m.r)(a,e):void 0,"--slider-radius":void 0===l?void 0:(0,u.nJ)(l),"--slider-thumb-size":void 0!==t?(0,d.D)(t):"calc(var(--slider-size) * 2)"}})),T={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},D=(0,x.P9)((e,n)=>{let a=(0,p.Y)("RangeSlider",T,e),{classNames:d,styles:u,value:h,onChange:m,onChangeEnd:x,size:D,min:F,max:E,domain:C,minRange:O,maxRange:z,step:_,precision:L,defaultValue:N,name:W,marks:q,label:P,labelTransitionProps:H,labelAlwaysOn:X,thumbFromLabel:U,thumbToLabel:B,showLabelOnHover:K,thumbChildren:$,disabled:I,unstyled:Y,scale:Z,inverted:J,className:G,style:Q,vars:ee,hiddenInputProps:en,restrictToMarks:ea,thumbProps:et,pushOnOverlap:el,attributes:er,...ei}=a,es=(0,v.I)({name:"RangeSlider",props:a,classes:g.A,classNames:d,className:G,styles:u,style:Q,attributes:er,vars:ee,varsResolver:A,unstyled:Y}),eo=(0,l.useRef)(null),{dir:ed}=(0,f.jH)(),[eu,ec]=(0,l.useState)(-1),[eh,em]=(0,l.useState)(!1),[ep,ev]=(0,r.Z)({value:h,defaultValue:N,finalValue:[F,E],onChange:m}),ex=(0,l.useRef)(ep),ef=(0,l.useRef)([]),eb=(0,l.useRef)(null),eg=(0,l.useRef)(void 0),[ej,ey]=C||[F,E],ek=[(0,R.E)({value:ep[0],min:ej,max:ey}),(0,R.E)({value:ep[1],min:ej,max:ey})],ew=L??(0,S.X)(_);(0,l.useEffect)(()=>{Array.isArray(h)&&(ex.current=h)},Array.isArray(h)?[h[0],h[1]]:[null,null]);let eM=(e,n,a)=>{if(-1===n)return;let t=[...ex.current];if(ea&&q){let a=(0,c.k)(e,q.map(e=>e.value)),l=t[n];t[n]=a;let r=+(0===n),i=(0,V.rq)(q),s=(0,V.HE)(q);a===i&&t[r]===i||a===s&&t[r]===s?t[n]=l:a===t[r]&&(l>t[r]?t[r]=(0,V.Mh)(a,q):t[r]=(0,V.C8)(a,q))}else{let a=(0,i.q)(e,F,E);t[n]=a,0===n&&(a>t[1]-(O-1e-9)&&(el?t[1]=Math.min(e+O,E):t[n]=ex.current[n]),a>(E-(O-1e-9)||F)&&(t[n]=ex.current[n]),t[1]-e>z&&(el?t[1]=e+z:t[n]=ex.current[n])),1===n&&(a<t[0]+O&&(el?t[0]=Math.max(e-O,F):t[n]=ex.current[n]),a<t[0]+O&&(t[n]=ex.current[n]),a-t[0]>z&&(el?t[0]=e-z:t[n]=ex.current[n]))}if(t[0]=(0,M.q)(t[0],ew),t[1]=(0,M.q)(t[1],ew),t[0]>t[1]){let e=t[0];t[0]=t[1],t[1]=e}(e=>{ev(e),ex.current=e})(t),a&&x?.(ex.current)},{ref:eR,active:eS}=(0,s.f)(({x:e})=>{!I&&void 0!==eg.current&&eM((0,w.c)({value:e,min:ej,max:ey,step:_,precision:ew}),eg.current,!1)},{onScrubEnd:()=>!I&&x?.(ex.current)},ed),eV=e=>{if(eo.current){eo.current.focus();let n=eo.current.getBoundingClientRect(),a=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),t=(0,w.c)({value:a-n.left,max:E,min:F,step:_,containerWidth:n.width}),l=+(Math.abs(ep[0]-t)>Math.abs(ep[1]-t));eg.current="ltr"===ed?l:+(1!==l)}},eA=()=>1!==eu&&0!==eu?(ec(0),0):eu,eT={max:E,min:F,size:D,labelTransitionProps:H,labelAlwaysOn:X,onBlur:()=>ec(-1)},eD=Array.isArray($);return(0,t.jsx)(b.h,{value:{getStyles:es},children:(0,t.jsxs)(j.g,{...ei,size:D,ref:(0,o.pc)(n,eb),disabled:I,onMouseDownCapture:()=>eb.current?.focus(),onKeyDownCapture:()=>{ef.current[0]?.parentElement?.contains(document.activeElement)||ef.current[0]?.focus()},children:[(0,t.jsxs)(k.C,{offset:ek[0],marksOffset:ep[0],filled:ek[1]-ek[0],marks:q,inverted:J,min:ej,max:ey,value:ep[1],disabled:I,containerProps:{ref:(0,o.pc)(eo,eR),onMouseEnter:K?()=>em(!0):void 0,onMouseLeave:K?()=>em(!1):void 0,onTouchStartCapture:eV,onTouchEndCapture:()=>{eg.current=-1},onMouseDownCapture:eV,onMouseUpCapture:()=>{eg.current=-1},onKeyDownCapture:e=>{if(!I)switch(e.key){case"ArrowUp":{e.preventDefault();let n=eA();ef.current[n].focus();let a=ea&&q?(0,V.C8)(ex.current[n],q):Math.min(Math.max(ex.current[n]+_,F),E);eM((0,M.q)(a,ew),n,!0);break}case"ArrowRight":{e.preventDefault();let n=eA();ef.current[n].focus();let a=ea&&q?("rtl"===ed?V.Mh:V.C8)(ex.current[n],q):Math.min(Math.max("rtl"===ed?ex.current[n]-_:ex.current[n]+_,F),E);eM((0,M.q)(a,ew),n,!0);break}case"ArrowDown":{e.preventDefault();let n=eA();ef.current[n].focus();let a=ea&&q?(0,V.Mh)(ex.current[n],q):Math.min(Math.max(ex.current[n]-_,F),E);eM((0,M.q)(a,ew),n,!0);break}case"ArrowLeft":{e.preventDefault();let n=eA();ef.current[n].focus();let a=ea&&q?("rtl"===ed?V.C8:V.Mh)(ex.current[n],q):Math.min(Math.max("rtl"===ed?ex.current[n]+_:ex.current[n]-_,F),E);eM((0,M.q)(a,ew),n,!0)}}}},children:[(0,t.jsx)(y.z,{...eT,value:Z(ep[0]),position:ek[0],dragging:eS,label:"function"==typeof P?P((0,M.q)(Z(ep[0]),ew)):P,ref:e=>{e&&(ef.current[0]=e)},thumbLabel:U,onMouseDown:()=>void(eg.current=0),onFocus:()=>ec(0),showLabelOnHover:K,isHovered:eh,disabled:I,...et?.(0),children:eD?$[0]:$}),(0,t.jsx)(y.z,{...eT,thumbLabel:B,value:Z(ep[1]),position:ek[1],dragging:eS,label:"function"==typeof P?P((0,M.q)(Z(ep[1]),ew)):P,ref:e=>{e&&(ef.current[1]=e)},onMouseDown:()=>void(eg.current=1),onFocus:()=>ec(1),showLabelOnHover:K,isHovered:eh,disabled:I,...et?.(1),children:eD?$[1]:$})]}),(0,t.jsx)("input",{type:"hidden",name:`${W}_from`,value:ep[0],...en}),(0,t.jsx)("input",{type:"hidden",name:`${W}_to`,value:ep[1],...en})]})})});D.classes=g.A,D.displayName="@mantine/core/RangeSlider"},65433:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73265:(e,n,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/range-slider",function(){return a(81439)}])},81439:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>k});var t=a(6029),l=a(16285),r=a(49386);let i={type:"configurator",component:function(e){return(0,t.jsx)(r.F,{defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]},s={type:"code",component:function(){return(0,t.jsx)(r.F,{defaultValue:[20,60],disabled:!0})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
`,centered:!0,maxWidth:340};var o=a(45208);let d={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.E,{size:"sm",children:"No label"}),(0,t.jsx)(r.F,{defaultValue:[20,60],label:null}),(0,t.jsx)(o.E,{size:"sm",mt:"xl",children:"Formatted label"}),(0,t.jsx)(r.F,{defaultValue:[20,60],label:e=>`${e} \xb0C`}),(0,t.jsx)(o.E,{size:"sm",mt:"xl",children:"Label always visible"}),(0,t.jsx)(r.F,{defaultValue:[20,60],labelAlwaysOn:!0}),(0,t.jsx)(o.E,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,t.jsx)(r.F,{defaultValue:[20,60],labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`import { RangeSlider, Text } from '@mantine/core';

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
`,centered:!0,maxWidth:400},u=[{value:0},{value:25},{value:50},{value:75},{value:100}],c={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.E,{children:"Decimal step"}),(0,t.jsx)(r.F,{minRange:2,defaultValue:[0,10],min:-10,max:10,step:.1}),(0,t.jsx)(o.E,{mt:"md",children:"Step matched with marks"}),(0,t.jsx)(r.F,{defaultValue:[50,75],step:25,marks:u})]})},code:`
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
`,centered:!0,maxWidth:400},h={type:"code",component:function(){return(0,t.jsx)(r.F,{domain:[0,100],min:10,max:90,defaultValue:[25,75],mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
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
`,maxWidth:400,centered:!0},m={type:"code",component:function(){return(0,t.jsx)(r.F,{min:0,max:1,minRange:.2,step:5e-4,defaultValue:[.2,.8]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
`,centered:!0,maxWidth:340};var p=a(9383);let v={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.F,{defaultValue:[20,60],marks:[{value:10},{value:40},{value:95}],mb:32}),(0,t.jsx)(r.F,{mb:32,defaultValue:[20,60],marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
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
`,centered:!0,maxWidth:400},x={type:"code",component:function(){return(0,t.jsx)(r.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})},code:`
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
`,centered:!0,maxWidth:400},f={type:"code",component:function(){return(0,t.jsx)(r.F,{inverted:!0,defaultValue:[20,60]})},code:`
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
`,centered:!0,maxWidth:400};var b=a(38547),g=a(5262);let j=(0,b.P)(g.XZ.RangeSlider);function y(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:a,KeyboardEventsTable:r}=n;return a||w("Demo",!0),r||w("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:i}),"\n",(0,t.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(a,{data:s}),"\n",(0,t.jsx)(n.h2,{id:"control-label",children:"Control label"}),"\n",(0,t.jsx)(n.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,t.jsx)(n.code,{children:"f => f"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,t.jsx)(n.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,t.jsx)(a,{data:d}),"\n",(0,t.jsx)(n.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,t.jsx)(a,{data:c}),"\n",(0,t.jsx)(n.h2,{id:"domain",children:"Domain"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"min"})," and ",(0,t.jsx)(n.code,{children:"max"})," values define the possible range of values.\n",(0,t.jsx)(n.code,{children:"domain"})," prop allows setting the possible range of values independently of the\n",(0,t.jsx)(n.code,{children:"min"})," and ",(0,t.jsx)(n.code,{children:"max"})," values:"]}),"\n",(0,t.jsx)(a,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"decimal-values",children:"Decimal values"}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"RangeSlider"})," with decimal values, set ",(0,t.jsx)(n.code,{children:"min"}),", ",(0,t.jsx)(n.code,{children:"max"})," and ",(0,t.jsx)(n.code,{children:"step"})," props:"]}),"\n",(0,t.jsx)(a,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"minrange",children:"minRange"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"minRange"})," prop to control minimum range between ",(0,t.jsx)(n.code,{children:"from"})," and ",(0,t.jsx)(n.code,{children:"to"})," values\nin ",(0,t.jsx)(n.code,{children:"RangeSlider"}),". The default value is ",(0,t.jsx)(n.code,{children:"10"}),". The example below shows how to\nuse ",(0,t.jsx)(n.code,{children:"minRange"})," prop to capture decimal values from the user:"]}),"\n",(0,t.jsx)(a,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"pushonoverlap",children:"pushOnOverlap"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pushOnOverlap"})," prop controls whether the thumbs should push each other when they overlap.\nBy default, ",(0,t.jsx)(n.code,{children:"pushOnOverlap"})," is ",(0,t.jsx)(n.code,{children:"true"}),", if you want to disable this behavior, set it to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of ",(0,t.jsx)(n.code,{children:"pushOnOverlap={false}"}),":"]}),"\n",(0,t.jsx)(a,{data:p.z}),"\n",(0,t.jsx)(n.h2,{id:"marks",children:"Marks"}),"\n",(0,t.jsxs)(n.p,{children:["Add any number of marks to slider by setting ",(0,t.jsx)(n.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,t.jsx)(a,{data:v}),"\n",(0,t.jsx)(n.h2,{id:"restrict-selection-to-marks",children:"Restrict selection to marks"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"restrictToMarks"})," prop to restrict slider value to marks only. Note that in\nthis case ",(0,t.jsx)(n.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(a,{data:x}),"\n",(0,t.jsx)(n.h2,{id:"inverted",children:"Inverted"}),"\n",(0,t.jsxs)(n.p,{children:["You can invert the track with the ",(0,t.jsx)(n.code,{children:"inverted"})," prop:"]}),"\n",(0,t.jsx)(a,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RangeSlider"})," component is accessible by default:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Thumbs are focusable"}),"\n",(0,t.jsx)(n.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,t.jsx)(n.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { RangeSlider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <RangeSlider\n      thumbFromLabel="First thumb aria-label"\n      thumbToLabel="Second thumb aria-label"\n    />\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(r,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...e,children:(0,t.jsx)(y,{...e})})}function w(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84276:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});let t=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=73265)),_N_E=e.O()}]);
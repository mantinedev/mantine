(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68161],{85477:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/semi-circle-progress",function(){return r(23832)}])},23832:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var l=r(31085),o=r(71184),a=r(18275),n=r(69633);let i={type:"code",component:function(){return(0,l.jsx)(n.A,{value:30,emptySegmentColor:"var(--mantine-color-dimmed)"})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`,centered:!0},s={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{value:30,label:"Bottom",mb:"xl"}),(0,l.jsx)(n.A,{value:30,label:"Center",labelPosition:"center"})]})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`,centered:!0};var c=r(14041),d=r(52022);let h={type:"code",component:function(){let[e,t]=(0,c.useState)(30);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{value:e,transitionDuration:250,label:`${e}%`}),(0,l.jsx)(d.$,{onClick:()=>t(Math.floor(100*Math.random())),mt:"xl",fullWidth:!0,children:"Set random value"})]})},code:`
import { useState } from 'react';
import { Button, SemiCircleProgress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={\`\${value}%\`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  );
}
`,centered:!0};var p=r(18675),u=r(20017);let m=(0,p.P)(u.XZ.SemiCircleProgress);function v(e){let t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(r,{data:a.C}),"\n",(0,l.jsx)(t.h2,{id:"change-empty-segment-color",children:"Change empty segment color"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"emptySegmentColor"})," prop to change color of empty segment,\nit accepts key of ",(0,l.jsx)(t.code,{children:"theme.colors"})," or any valid CSS color value:"]}),"\n",(0,l.jsx)(r,{data:i}),"\n",(0,l.jsx)(t.h2,{id:"change-label-position",children:"Change label position"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the label is displayed at the bottom of the component,\nyou can change its position to ",(0,l.jsx)(t.code,{children:"center"})," by using ",(0,l.jsx)(t.code,{children:"labelPosition"})," prop:"]}),"\n",(0,l.jsx)(r,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,l.jsxs)(t.p,{children:["By default, transitions are disabled, to enable them, set ",(0,l.jsx)(t.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,l.jsx)(r,{data:h})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(m,{...e,children:(0,l.jsx)(v,{...e})})}},87186:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var l=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},18275:(e,t,r)=>{"use strict";r.d(t,{C:()=>a});var l=r(31085),o=r(69633);let a={type:"configurator",component:function(e){return(0,l.jsx)(o.A,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]}},69633:(e,t,r)=>{"use strict";r.d(t,{A:()=>v});var l=r(31085),o=r(68193),a=r(39735);r(14041);var n=r(7098),i=r(51606),s=r(29686),c=r(69564),d=r(34056),h=r(6754),p={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"};let u={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},m=(0,n.V)((e,{filledSegmentColor:t,emptySegmentColor:r,orientation:l,fillDirection:o,transitionDuration:n,thickness:s})=>({root:{"--scp-filled-segment-color":t?(0,i.r)(t,e):void 0,"--scp-empty-segment-color":r?(0,i.r)(r,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:l,fillDirection:o}),"--scp-transition-duration":n?`${n}ms`:void 0,"--scp-thickness":(0,a.D)(s)}})),v=(0,h.P9)((e,t)=>{let r=(0,s.Y)("SemiCircleProgress",u,e),{classNames:a,className:n,style:i,styles:h,unstyled:v,vars:g,size:y,thickness:f,value:k,orientation:b,fillDirection:x,filledSegmentColor:M,emptySegmentColor:j,transitionDuration:C,label:S,labelPosition:A,attributes:P,...w}=r,D=(0,c.I)({name:"SemiCircleProgress",classes:p,props:r,className:n,style:i,classNames:a,styles:h,unstyled:v,attributes:P,vars:g,varsResolver:m}),_=y/2,V=(y-2*f)/2,I=Math.PI*V,B=(0,o.q)(k,0,100)*(I/100);return(0,l.jsxs)(d.a,{ref:t,size:y,...D("root"),...w,children:[S&&(0,l.jsx)("p",{...D("label"),"data-position":A,"data-orientation":b,children:S}),(0,l.jsxs)("svg",{width:y,height:y/2,...D("svg"),children:[(0,l.jsx)("circle",{cx:_,cy:_,r:V,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:f,strokeDasharray:I,...D("emptySegment",{style:{strokeDashoffset:I}})}),(0,l.jsx)("circle",{cx:_,cy:_,r:V,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:f,strokeDasharray:I,...D("filledSegment",{style:{strokeDashoffset:B}})})]})]})});v.displayName="@mantine/core/SemiCircleProgress",v.classes=p}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(85477)),_N_E=e.O()}]);
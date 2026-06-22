(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let i={};for(var r in e)t(i,r,{get:e[r],enumerable:!0});return n||t(i,Symbol.toStringTag,{value:"Module"}),i}])},462138,e=>{"use strict";var t=e.i(779177),n=e.i(391398);function i({style:e,size:r=16,...l}){return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(r),height:(0,t.rem)(r),display:"block"},...l,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}i.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,i])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),i=e.i(317477),r=e.i(44091),l=e.i(391466),o=e.i(956449),a=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:r,gradient:l,variant:o,size:a,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:l,variant:o||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(a,"badge-height"),"--badge-padding-x":(0,t.getSize)(a,"badge-padding-x"),"--badge-fz":(0,t.getSize)(a,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":r||o?d.background:void 0,"--badge-color":r||o?d.color:void 0,"--badge-bd":r||o?d.border:void 0,"--badge-dot-color":"dot"===o?(0,i.getThemeColor)(r,e):void 0}}}),m=(0,o.polymorphicFactory)(e=>{let t=(0,r.useProps)("Badge",null,e),{classNames:n,className:i,style:o,styles:m,unstyled:h,vars:u,radius:p,color:f,gradient:g,leftSection:x,rightSection:v,children:b,variant:j,fullWidth:y,autoContrast:w,circle:S,mod:C,attributes:k,...Z}=t,V=(0,l.useStyles)({name:"Badge",props:t,classes:s,className:i,style:o,classNames:n,styles:m,unstyled:h,attributes:k,vars:u,varsResolver:d});return(0,c.jsxs)(a.Box,{variant:j,mod:[{block:y,circle:S,"with-right-section":!!v,"with-left-section":!!x},C],...V("root",{variant:j}),...Z,children:[x&&(0,c.jsx)("span",{...V("section"),"data-position":"left",children:x}),(0,c.jsx)("span",{...V("label"),children:b}),v&&(0,c.jsx)("span",{...V("section"),"data-position":"right",children:v})]})});m.classes=s,m.varsResolver=d,m.displayName="@mantine/core/Badge",e.s(["Badge",0,m],257177)},414124,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:i}));r.displayName="DotsSixVerticalIcon",e.s(["DotsSixVerticalIcon",0,r],414124)},420759,e=>{"use strict";var t=e.i(779177),n=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:i,...r}){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,t.rem)(e),height:(0,t.rem)(e),...i},"aria-hidden":!0,...r,children:(0,n.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},823439,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:i}));r.displayName="TrashIcon",e.s(["TrashIcon",0,r],823439)},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let i={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,r){let{min:l,max:o,step:a=1}={...i,...r},s=Math.abs(a),[c,d]=(0,n.useState)((0,t.clamp)(e,l,o));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,l,o)),[l,o,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,l,o)),[l,o,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,l,o)),[l,o]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,l,o)),[e,l,o])}]}])},752082,e=>{"use strict";var t=e.i(648863),n=e.i(779177),i=e.i(481178),r=e.i(317477),l=e.i(44091),o=e.i(391466),a=e.i(275519),s=e.i(232471),c={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"},d=e.i(852361),m=e.i(391398);let h={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},u=(0,i.createVarsResolver)((e,{filledSegmentColor:t,emptySegmentColor:i,orientation:l,fillDirection:o,transitionDuration:a,thickness:s})=>({root:{"--scp-filled-segment-color":t?(0,r.getThemeColor)(t,e):void 0,"--scp-empty-segment-color":i?(0,r.getThemeColor)(i,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:l,fillDirection:o}),"--scp-transition-duration":a?`${a}ms`:void 0,"--scp-thickness":(0,n.rem)(s)}})),p=(0,a.factory)(e=>{let t=(0,l.useProps)("SemiCircleProgress",h,e),{classNames:n,className:i,style:r,styles:a,unstyled:p,vars:f,size:g,thickness:x,value:v,orientation:b,fillDirection:j,filledSegmentColor:y,emptySegmentColor:w,transitionDuration:S,label:C,labelPosition:k,attributes:Z,...V}=t,A=(0,o.useStyles)({name:"SemiCircleProgress",classes:c,props:t,className:i,style:r,classNames:n,styles:a,unstyled:p,attributes:Z,vars:f,varsResolver:u}),M=g/2,H=(g-2*x)/2,P=Math.PI*H,D=(0,d.clamp)(v,0,100)*(P/100);return(0,m.jsxs)(s.Box,{size:g,...A("root"),...V,children:[C&&(0,m.jsx)("div",{...A("label"),"data-position":k,"data-orientation":b,children:C}),(0,m.jsxs)("svg",{width:g,height:g/2,viewBox:`0 0 ${g} ${g/2}`,...A("svg"),children:[(0,m.jsx)("circle",{cx:M,cy:M,r:H,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:x,strokeDasharray:P,...A("emptySegment",{style:{strokeDashoffset:P}})}),(0,m.jsx)("circle",{cx:M,cy:M,r:H,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:x,strokeDasharray:P,...A("filledSegment",{style:{strokeDashoffset:D,...0===D?{strokeOpacity:0}:null}})})]})]})});p.displayName="@mantine/core/SemiCircleProgress",p.classes=c,p.varsResolver=u;let f={type:"configurator",component:function(e){return(0,m.jsx)(p,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]},g={type:"code",component:function(){return(0,m.jsx)(p,{value:30,emptySegmentColor:"var(--mantine-color-dimmed)"})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`,centered:!0},x={type:"code",component:function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{value:30,label:"Bottom",mb:"xl"}),(0,m.jsx)(p,{value:30,label:"Center",labelPosition:"center"})]})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`,centered:!0};var v=e.i(191788),b=e.i(485108);let j={type:"code",component:function(){let[e,t]=(0,v.useState)(30);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{value:e,transitionDuration:250,label:`${e}%`}),(0,m.jsx)(b.Button,{onClick:()=>t(Math.floor(100*Math.random())),mt:"xl",fullWidth:!0,children:"Set random value"})]})},code:`
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
`,centered:!0};var y=e.i(140763);let w={type:"code",component:function(){return(0,m.jsxs)(y.SimpleGrid,{cols:{sm:2},spacing:"xl",children:[(0,m.jsx)(p,{value:60,orientation:"up",fillDirection:"left-to-right",label:"Up, L→R",size:150}),(0,m.jsx)(p,{value:60,orientation:"up",fillDirection:"right-to-left",label:"Up, R→L",size:150}),(0,m.jsx)(p,{value:60,orientation:"down",fillDirection:"left-to-right",label:"Down, L→R",size:150}),(0,m.jsx)(p,{value:60,orientation:"down",fillDirection:"right-to-left",label:"Down, R→L",size:150})]})},code:`
import { SemiCircleProgress, SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={{ sm:2 }} spacing="xl">
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="left-to-right"
        label="Up, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="right-to-left"
        label="Up, R→L"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="left-to-right"
        label="Down, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="right-to-left"
        label="Down, R→L"
        size={150}
      />
    </SimpleGrid>
  );
}
`,defaultExpanded:!1,centered:!0};var S=e.i(60695),C=e.i(671640),k=e.i(883364);let Z={type:"code",component:function(){let[e,t]=(0,v.useState)(75);return(0,m.jsxs)(C.Stack,{align:"center",gap:"md",children:[(0,m.jsx)("div",{style:{position:"relative",width:200,height:120},children:(0,m.jsx)(p,{value:e,filledSegmentColor:(e=>{switch(!0){case e<20:return"red";case e<50:return"yellow";default:return"green"}})(e),label:`${e}%`,labelPosition:"center",size:200,thickness:12})}),(0,m.jsx)(k.Text,{size:"sm",c:"dimmed",children:"Battery Level"}),(0,m.jsx)(s.Box,{w:200,children:(0,m.jsx)(S.Slider,{min:0,max:100,value:e,onChange:t})})]})},code:`
import { SemiCircleProgress, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const getBatteryColor = (level: number) => {
  switch (true) {
    case level < 20:
      return 'red';
    case level < 50:
      return 'yellow';
    default:
      return 'green';
  }
};

function Demo() {
  const [batteryLevel, setBatteryLevel] = useState(75);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={batteryLevel}
          filledSegmentColor={getBatteryColor(batteryLevel)}
          label={\`\${batteryLevel}%\`}
          labelPosition="center"
          size={200}
          thickness={12}
        />
      </div>
      <Text size="sm" c="dimmed">
        Battery Level
      </Text>
      <input
        type="range"
        min="0"
        max="100"
        value={batteryLevel}
        onChange={(e) => setBatteryLevel(Number(e.target.value))}
        style={{ width: 200 }}
      />
    </Stack>
  );
}
`,defaultExpanded:!1,centered:!0};var V=e.i(725695),A=e.i(284629);let M=["red","orange","yellow","lime","green"],H={type:"code",component:function(){let[e,t]=(0,v.useState)(4);return(0,m.jsxs)(C.Stack,{align:"center",gap:"xs",children:[(0,m.jsx)("div",{style:{position:"relative",width:200,height:120},children:(0,m.jsx)(p,{value:e/5*100,filledSegmentColor:M[e-1]||"gray",label:(0,m.jsx)(k.Text,{fz:36,fw:800,pb:30,children:`${e}/5`}),labelPosition:"center",orientation:"down",size:200,thickness:12})}),(0,m.jsx)(k.Text,{size:"sm",c:"dimmed",children:"Skill Rating"}),(0,m.jsx)(V.Group,{gap:"xs",children:[1,2,3,4,5].map(n=>(0,m.jsx)(A.UnstyledButton,{onClick:()=>t(n),px:"sm",py:4,bg:e===n?"#087f5b":"#e7f5f0",c:e===n?"white":"#087f5b",style:{borderRadius:4},children:n},n))})]})},code:`
import { SemiCircleProgress, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const colors = ['red', 'orange', 'yellow', 'lime', 'green'];

function Demo() {
  const [skillLevel, setSkillLevel] = useState(4);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={(skillLevel / 5) * 100}
          filledSegmentColor={colors[skillLevel - 1] || 'gray'}
          label={<Text fz={36} fw={800} pb={30}>{\`\${skillLevel}/5\`}</Text>}
          labelPosition="center"
          orientation="down"
          size={200}
          thickness={12}
        />
      </div>

      <Text size="sm" c="dimmed">
        Skill Rating
      </Text>

      <div style={{ display: 'flex', gap: 8 }}>
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setSkillLevel(level)}
            style={{
              padding: '4px 12px',
              backgroundColor: skillLevel === level ? '#087f5b' : '#e7f5f0',
              color: skillLevel === level ? 'white' : '#087f5b',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {level}
          </button>
        ))}
      </div>
    </Stack>
  );
}
`,defaultExpanded:!1,centered:!0};var P=(0,t.__exportAll)({batteryIndicator:()=>Z,emptySegmentColor:()=>g,labelPosition:()=>x,orientations:()=>w,skillRating:()=>H,transitions:()=>j,usage:()=>f});e.s(["SemiCircleProgressDemos",0,P],752082)},745398,e=>{"use strict";var t=e.i(391398),n=e.i(38856),i=e.i(736897),r=e.i(752082),l=e.i(83967);e.i(603441);var o=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,o.Layout)(a.MDX_DATA.Changelog7120);function c(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=o;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"notifications-at-any-position",children:"Notifications at any position"}),"\n",(0,t.jsxs)(o.p,{children:["It is now possible to display notifications at any position on the screen\nwith ",(0,t.jsx)(o.a,{href:"/x/notifications",children:"@mantine/notifications package"}),":"]}),"\n",(0,t.jsx)(a,{data:i.NotificationsDemos.position}),"\n",(0,t.jsx)(o.h2,{id:"subscribe-to-notifications-state",children:"Subscribe to notifications state"}),"\n",(0,t.jsxs)(o.p,{children:["You can now subscribe to notifications state changes with ",(0,t.jsx)(o.code,{children:"useNotifications"})," hook:"]}),"\n",(0,t.jsx)(a,{data:i.NotificationsDemos.store}),"\n",(0,t.jsx)(o.h2,{id:"semicircleprogress-component",children:"SemiCircleProgress component"}),"\n",(0,t.jsxs)(o.p,{children:["New ",(0,t.jsx)(o.a,{href:"/core/semi-circle-progress",children:"SemiCircleProgress"})," component:"]}),"\n",(0,t.jsx)(a,{data:r.SemiCircleProgressDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"tree-checked-state",children:"Tree checked state"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/core/tree",children:"Tree"})," component now supports checked state:"]}),"\n",(0,t.jsx)(a,{data:l.TreeDemos.checked}),"\n",(0,t.jsx)(o.h2,{id:"disable-specific-features-in-postcss-preset-mantine",children:"Disable specific features in postcss-preset-mantine"}),"\n",(0,t.jsxs)(o.p,{children:["You can now disable specific features of the ",(0,t.jsx)(o.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nby setting them to ",(0,t.jsx)(o.code,{children:"false"})," in the configuration object. This feature is available starting from\n",(0,t.jsx)(o.code,{children:"postcss-preset-mantine@1.17.0"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"module.exports = {\n  'postcss-preset-mantine': {\n    features: {\n      // Turn off `light-dark` function\n      lightDarkFunction: false,\n\n      // Turn off `postcss-nested` plugin\n      nested: false,\n\n      // Turn off `lighten`, `darken` and `alpha` functions\n      colorMixAlpha: false,\n\n      // Turn off `rem` and `em` functions\n      remEmFunctions: false,\n\n      // Turn off `postcss-mixins` plugin\n      mixins: false,\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(o.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/server-components",children:"Server components guide"})," has been updated to include ",(0,t.jsx)(o.code,{children:"Component.extend"})," usage in server components."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"A guide on applying input focus styles"})," has been updated to work correctly with ",(0,t.jsx)(o.a,{href:"/core/password-input",children:"PasswordInput"})," and other components in which the ",(0,t.jsx)(o.code,{children:"input"})," selector is not used for actual input element."]}),"\n",(0,t.jsxs)(o.li,{children:["The guide on ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/disable-all-inputs-in-form",children:"how to disable all inputs in the form"})," now includes additional instructions for ",(0,t.jsx)(o.a,{href:"/form/use-form",children:"use-form"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/light-dark-is-not-enough",children:"Can I have color schemes other than light and dark?"})," guide explains the difference between color scheme and theme and why Mantine does not support custom color schemes."]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/why-vscode-cannot-autoimport-text",children:"Why VSCode cannot autoimport Text component?"})," guide explains why VSCode cannot automatically import ",(0,t.jsx)(o.code,{children:"Text"})," component."]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/are-mantine-components-accessible",children:"Are Mantine components accessible?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/focus-first-input-with-error",children:"How can I focus the first input with error with use-form?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/scroll-to-the-top-of-the-form",children:"How to scroll to the top of the form if the form is submitted with errors?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/notifications-missing-styles",children:"Why my notifications are displayed at a wrong position?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/notifications-empty-screen",children:"Why my screen is completely empty after I've added notifications package?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/autocomplete-value-label",children:"Why can I not use value/label data structure with Autocomplete/TagsInput?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/file-button-in-menu",children:"Why FileButton does not work in Menu?"})," question"]}),"\n",(0,t.jsxs)(o.li,{children:["New ",(0,t.jsx)(o.a,{href:"https://help.mantine.dev/q/light-dark-elements",children:"How can I display different elements in light and dark color schemes?"})," question"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/hooks/use-interval",children:"use-interval"})," hook now supports ",(0,t.jsx)(o.code,{children:"autoInvoke"})," option to start the interval automatically when the component mounts."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/form/use-form",children:"use-form"})," with ",(0,t.jsx)(o.code,{children:'mode="uncontrolled"'})," now triggers additional rerender when dirty state changes to allow subscribing to form state changes."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/core/scroll-area",children:"ScrollArea"})," component now supports ",(0,t.jsx)(o.code,{children:"onTopReached"})," and ",(0,t.jsx)(o.code,{children:"onBottomReached"})," props. The functions are called when the user scrolls to the top or bottom of the scroll area."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/core/accordion",children:"Accordion.Panel"})," component now supports ",(0,t.jsx)(o.code,{children:"onTransitionEnd"})," prop that is called when the panel animation completes."]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})})}])},89595,(e,t,n)=>{let i="/changelog/7-12-0";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(745398)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68161],{1798:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},30925:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/semi-circle-progress",function(){return l(59945)}])},33046:(e,t,l)=>{"use strict";l.d(t,{C:()=>a});var r=l(6029),o=l(96720);let a={type:"configurator",component:function(e){return(0,r.jsx)(o.A,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]}},34891:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},59945:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>v});var r=l(6029),o=l(16285),a=l(33046),n=l(96720);let i={type:"code",component:function(){return(0,r.jsx)(n.A,{value:30,emptySegmentColor:"var(--mantine-color-dimmed)"})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`,centered:!0},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{value:30,label:"Bottom",mb:"xl"}),(0,r.jsx)(n.A,{value:30,label:"Center",labelPosition:"center"})]})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`,centered:!0};var d=l(55729),c=l(61087);let h={type:"code",component:function(){let[e,t]=(0,d.useState)(30);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{value:e,transitionDuration:250,label:`${e}%`}),(0,r.jsx)(c.$,{onClick:()=>t(Math.floor(100*Math.random())),mt:"xl",fullWidth:!0,children:"Set random value"})]})},code:`
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
`,centered:!0};var p=l(38547),u=l(5262);let m=(0,p.P)(u.XZ.SemiCircleProgress);function g(e){let t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Demo:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(l,{data:a.C}),"\n",(0,r.jsx)(t.h2,{id:"change-empty-segment-color",children:"Change empty segment color"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"emptySegmentColor"})," prop to change color of empty segment,\nit accepts key of ",(0,r.jsx)(t.code,{children:"theme.colors"})," or any valid CSS color value:"]}),"\n",(0,r.jsx)(l,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"change-label-position",children:"Change label position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the label is displayed at the bottom of the component,\nyou can change its position to ",(0,r.jsx)(t.code,{children:"center"})," by using ",(0,r.jsx)(t.code,{children:"labelPosition"})," prop:"]}),"\n",(0,r.jsx)(l,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,r.jsxs)(t.p,{children:["By default, transitions are disabled, to enable them, set ",(0,r.jsx)(t.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,r.jsx)(l,{data:h})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(g,{...e})})}},65433:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});let r=(0,l(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},96720:(e,t,l)=>{"use strict";l.d(t,{A:()=>g});var r=l(6029),o=l(38744),a=l(26082);l(55729);var n=l(33987),i=l(21351),s=l(38919),d=l(15583),c=l(76320),h=l(8411),p={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"};let u={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},m=(0,n.V)((e,{filledSegmentColor:t,emptySegmentColor:l,orientation:r,fillDirection:o,transitionDuration:n,thickness:s})=>({root:{"--scp-filled-segment-color":t?(0,i.r)(t,e):void 0,"--scp-empty-segment-color":l?(0,i.r)(l,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:r,fillDirection:o}),"--scp-transition-duration":n?`${n}ms`:void 0,"--scp-thickness":(0,a.D)(s)}})),g=(0,h.P9)((e,t)=>{let l=(0,s.Y)("SemiCircleProgress",u,e),{classNames:a,className:n,style:i,styles:h,unstyled:g,vars:v,size:y,thickness:f,value:k,orientation:b,fillDirection:x,filledSegmentColor:M,emptySegmentColor:j,transitionDuration:C,label:S,labelPosition:A,attributes:P,...w}=l,D=(0,d.I)({name:"SemiCircleProgress",classes:p,props:l,className:n,style:i,classNames:a,styles:h,unstyled:g,attributes:P,vars:v,varsResolver:m}),_=y/2,V=(y-2*f)/2,B=Math.PI*V,E=(0,o.q)(k,0,100)*(B/100);return(0,r.jsxs)(c.a,{ref:t,size:y,...D("root"),...w,children:[S&&(0,r.jsx)("p",{...D("label"),"data-position":A,"data-orientation":b,children:S}),(0,r.jsxs)("svg",{width:y,height:y/2,...D("svg"),children:[(0,r.jsx)("circle",{cx:_,cy:_,r:V,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:f,strokeDasharray:B,...D("emptySegment",{style:{strokeDashoffset:B}})}),(0,r.jsx)("circle",{cx:_,cy:_,r:V,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:f,strokeDasharray:B,...D("filledSegment",{style:{strokeDashoffset:E}})})]})]})});g.displayName="@mantine/core/SemiCircleProgress",g.classes=p}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=30925)),_N_E=e.O()}]);
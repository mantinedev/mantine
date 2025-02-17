(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68161],{85477:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/semi-circle-progress",function(){return o(23832)}])},23832:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var r=o(31085),n=o(71184),l=o(18275),i=o(69633);let a={type:"code",component:function(){return(0,r.jsx)(i.A,{value:30,emptySegmentColor:"var(--mantine-color-dimmed)"})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`,centered:!0},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{value:30,label:"Bottom",mb:"xl"}),(0,r.jsx)(i.A,{value:30,label:"Center",labelPosition:"center"})]})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`,centered:!0};var c=o(14041),m=o(52022);let d={type:"code",component:function(){let[e,t]=(0,c.useState)(30);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{value:e,transitionDuration:250,label:`${e}%`}),(0,r.jsx)(m.$,{onClick:()=>t(Math.floor(100*Math.random())),mt:"xl",fullWidth:!0,children:"Set random value"})]})},code:`
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
`,centered:!0};var u=o(85954),p=o(38215);let h=(0,u.P)(p.XZ.SemiCircleProgress);function g(e){let t={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o,{data:l.C}),"\n",(0,r.jsx)(t.h2,{id:"change-empty-segment-color",children:"Change empty segment color"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"emptySegmentColor"})," prop to change color of empty segment,\nit accepts key of ",(0,r.jsx)(t.code,{children:"theme.colors"})," or any valid CSS color value:"]}),"\n",(0,r.jsx)(o,{data:a}),"\n",(0,r.jsx)(t.h2,{id:"change-label-position",children:"Change label position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the label is displayed at the bottom of the component,\nyou can change its position to ",(0,r.jsx)(t.code,{children:"center"})," by using ",(0,r.jsx)(t.code,{children:"labelPosition"})," prop:"]}),"\n",(0,r.jsx)(o,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,r.jsxs)(t.p,{children:["By default, transitions are disabled, to enable them, set ",(0,r.jsx)(t.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,r.jsx)(o,{data:d})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(g,{...e})})}},18275:(e,t,o)=>{"use strict";o.d(t,{C:()=>l});var r=o(31085),n=o(69633);let l={type:"configurator",component:function(e){return(0,r.jsx)(n.A,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]}},69633:(e,t,o)=>{"use strict";o.d(t,{A:()=>g});var r=o(31085),n=o(68193),l=o(39735);o(14041);var i=o(7098),a=o(51606),s=o(29686),c=o(69564),m=o(34056),d=o(6754),u={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"};let p={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},h=(0,i.V)((e,{filledSegmentColor:t,emptySegmentColor:o,orientation:r,fillDirection:n,transitionDuration:i,thickness:s})=>({root:{"--scp-filled-segment-color":t?(0,a.r)(t,e):void 0,"--scp-empty-segment-color":o?(0,a.r)(o,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:r,fillDirection:n}),"--scp-transition-duration":i?`${i}ms`:void 0,"--scp-thickness":(0,l.D)(s)}})),g=(0,d.P9)((e,t)=>{let o=(0,s.Y)("SemiCircleProgress",p,e),{classNames:l,className:i,style:a,styles:d,unstyled:g,vars:f,size:b,thickness:x,value:y,orientation:v,fillDirection:j,filledSegmentColor:C,emptySegmentColor:S,transitionDuration:P,label:k,labelPosition:D,..._}=o,V=(0,c.I)({name:"SemiCircleProgress",classes:u,props:o,className:i,style:a,classNames:l,styles:d,unstyled:g,vars:f,varsResolver:h}),w=b/2,B=(b-2*x)/2,E=Math.PI*B,A=(0,n.q)(y,0,100)*(E/100);return(0,r.jsxs)(m.a,{ref:t,size:b,...V("root"),..._,children:[k&&(0,r.jsx)("p",{...V("label"),"data-position":D,"data-orientation":v,children:k}),(0,r.jsxs)("svg",{width:b,height:b/2,...V("svg"),children:[(0,r.jsx)("circle",{cx:w,cy:w,r:B,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:x,strokeDasharray:E,...V("emptySegment",{style:{strokeDashoffset:E}})}),(0,r.jsx)("circle",{cx:w,cy:w,r:B,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:x,strokeDasharray:E,...V("filledSegment",{style:{strokeDashoffset:A}})})]})]})});g.displayName="@mantine/core/SemiCircleProgress",g.classes=u}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(85477)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{83943:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(79336)}])},79336:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return y}});var t=o(24246),n=o(71670),s=o(27378),a=o(30454);let l=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,i={type:"configurator",component:function(e){return s.createElement(a.E,{...e})},code:l,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=o(21925),u=o(99684);let m=`
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents \u2013 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos \u2013 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other \u2013 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
`,d={type:"code",component:function(){return s.createElement(a.E.Root,{size:40},s.createElement(u.u,{label:"Documents – 33Gb"},s.createElement(a.E.Section,{value:33,color:"cyan"},s.createElement(a.E.Label,null,"Documents"))),s.createElement(u.u,{label:"Photos – 28Gb"},s.createElement(a.E.Section,{value:28,color:"pink"},s.createElement(a.E.Label,null,"Photos"))),s.createElement(u.u,{label:"Other – 15Gb"},s.createElement(a.E.Section,{value:15,color:"orange"},s.createElement(a.E.Label,null,"Other"))))},code:m};var p=o(8671);let g=`
import { useState } from 'react';
import { Button, Progress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <>
      <Progress value={value} size="lg" transitionDuration={200} />
      <Button onClick={() => setValue(Math.random() * 100)} mt="md">
        Set random value
      </Button>
    </>
  );
}
`,b={type:"code",component:function(){let[e,r]=(0,s.useState)(50);return s.createElement(s.Fragment,null,s.createElement(a.E,{value:e,size:"lg",transitionDuration:200}),s.createElement(p.z,{onClick:()=>r(100*Math.random()),mt:"md"},"Set random value"))},code:g,centered:!0,maxWidth:400};var P=o(35150);let h=`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`,E={type:"styles-api",data:P.S,component:function(e){return s.createElement(a.E.Root,{size:"xl",...e},s.createElement(a.E.Section,{value:35},s.createElement(a.E.Label,null,"Documents")))},code:h,centered:!0,maxWidth:400};var v=o(3916),x=o(54568);let f=(0,v.A)(x.us.Progress);function S(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:s}=r;return o||j("Demo",!0),s||j("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:c.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(s,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(f,{...e,children:(0,t.jsx)(S,{...e})})}function j(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21925:function(e,r,o){"use strict";o.d(r,{I:function(){return a}});var t=o(27378),n=o(30454);let s=`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`,a={type:"code",component:function(){return t.createElement(n.E.Root,{size:"xl"},t.createElement(n.E.Section,{value:35,color:"cyan"},t.createElement(n.E.Label,null,"Documents")),t.createElement(n.E.Section,{value:28,color:"pink"},t.createElement(n.E.Label,null,"Photos")),t.createElement(n.E.Section,{value:15,color:"orange"},t.createElement(n.E.Label,null,"Other")))},code:s}},30454:function(e,r,o){"use strict";o.d(r,{E:function(){return w}});var t=o(27378),n=o(5564),s=o(96739),a=o(20410),l=o(56589),i=o(71656);let[c,u]=(0,i.R)("Progress.Root component was not found in tree");var m={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let d={},p=(0,a.d)((e,r)=>{let{classNames:o,className:n,style:a,styles:i,vars:c,...m}=(0,s.w)("ProgressLabel",d,e),p=u();return t.createElement(l.x,{ref:r,...p.getStyles("label",{className:n,style:a,classNames:o,styles:i}),...m})});p.classes=m,p.displayName="@mantine/core/ProgressLabel";var g=o(92082),b=o(83453),P=o(6231);let h={},E=(0,b.Z)((e,{size:r,radius:o,transitionDuration:t})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o),"--progress-transition-duration":"number"==typeof t?`${t}ms`:void 0}})),v=(0,a.d)((e,r)=>{let o=(0,s.w)("ProgressRoot",h,e),{classNames:n,className:a,style:i,styles:u,unstyled:d,vars:p,autoContrast:g,transitionDuration:b,...v}=o,x=(0,P.y)({name:"Progress",classes:m,props:o,className:a,style:i,classNames:n,styles:u,unstyled:d,vars:p,varsResolver:E});return t.createElement(c,{value:{getStyles:x,autoContrast:g}},t.createElement(l.x,{ref:r,...x("root"),...v}))});v.classes=m,v.displayName="@mantine/core/ProgressRoot";var x=o(89738),f=o(34121),S=o(2256);let y={withAria:!0},j=(0,a.d)((e,r)=>{let{classNames:o,className:n,style:a,styles:i,vars:c,value:m,withAria:d,color:p,striped:g,animated:b,mod:P,...h}=(0,s.w)("ProgressSection",y,e),E=u(),v=(0,S.rZ)(),j=d?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":`${m}%`}:{};return t.createElement(l.x,{ref:r,...E.getStyles("section",{className:n,classNames:o,styles:i,style:a}),...h,...j,mod:[{striped:g||b,animated:b},P],__vars:{"--progress-section-width":`${m}%`,"--progress-section-color":(0,x.p)(p,v),"--progress-label-color":E.autoContrast?(0,f.R)({color:p,theme:v}):void 0}})});j.classes=m,j.displayName="@mantine/core/ProgressSection";let L={},w=(0,a.d)((e,r)=>{let o=(0,s.w)("Progress",L,e),{value:a,classNames:l,styles:i,vars:c,color:u,striped:m,animated:d,"aria-label":p,...g}=o,{resolvedClassNames:b,resolvedStyles:P}=(0,n.h)({classNames:l,styles:i,props:o});return t.createElement(v,{ref:r,classNames:b,styles:P,vars:c,...g},t.createElement(j,{value:a,color:u,striped:m,animated:d,"aria-label":p}))});w.classes=m,w.displayName="@mantine/core/Progress",w.Section=j,w.Root=v,w.Label=p}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=83943)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{90841:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(41637)}])},41637:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return y}});var t=o(52322),n=o(45392),s=o(2784),a=o(45757);let l=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,i={type:"configurator",component:function(e){return s.createElement(a.E,{...e})},code:l,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=o(42407),u=o(893);let m=`
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
`,d={type:"code",component:function(){return s.createElement(a.E.Root,{size:40},s.createElement(u.u,{label:"Documents – 33Gb"},s.createElement(a.E.Section,{value:33,color:"cyan"},s.createElement(a.E.Label,null,"Documents"))),s.createElement(u.u,{label:"Photos – 28Gb"},s.createElement(a.E.Section,{value:28,color:"pink"},s.createElement(a.E.Label,null,"Photos"))),s.createElement(u.u,{label:"Other – 15Gb"},s.createElement(a.E.Section,{value:15,color:"orange"},s.createElement(a.E.Label,null,"Other"))))},code:m};var p=o(17115);let g=`
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
`,b={type:"code",component:function(){let[e,r]=(0,s.useState)(50);return s.createElement(s.Fragment,null,s.createElement(a.E,{value:e,size:"lg",transitionDuration:200}),s.createElement(p.z,{onClick:()=>r(100*Math.random()),mt:"md"},"Set random value"))},code:g,centered:!0,maxWidth:400};var P=o(71506);let h=`
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
`,E={type:"styles-api",data:P.S,component:function(e){return s.createElement(a.E.Root,{size:"xl",...e},s.createElement(a.E.Section,{value:35},s.createElement(a.E.Label,null,"Documents")))},code:h,centered:!0,maxWidth:400};var v=o(79016),x=o(33638);let f=(0,v.A)(x.us.Progress);function S(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:s}=r;return o||j("Demo",!0),s||j("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:c.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(s,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(f,{...e,children:(0,t.jsx)(S,{...e})})}function j(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42407:function(e,r,o){"use strict";o.d(r,{I:function(){return a}});var t=o(2784),n=o(45757);let s=`
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
`,a={type:"code",component:function(){return t.createElement(n.E.Root,{size:"xl"},t.createElement(n.E.Section,{value:35,color:"cyan"},t.createElement(n.E.Label,null,"Documents")),t.createElement(n.E.Section,{value:28,color:"pink"},t.createElement(n.E.Label,null,"Photos")),t.createElement(n.E.Section,{value:15,color:"orange"},t.createElement(n.E.Label,null,"Other")))},code:s}},45757:function(e,r,o){"use strict";o.d(r,{E:function(){return _}});var t=o(2784),n=o(51477),s=o(38483),a=o(82027),l=o(28559),i=o(89106);let[c,u]=(0,i.R)("Progress.Root component was not found in tree");var m={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},p=(0,a.d)((e,r)=>{let{classNames:o,className:n,style:a,styles:i,vars:c,...m}=(0,s.w)("ProgressLabel",d,e),p=u();return t.createElement(l.x,{ref:r,...p.getStyles("label",{className:n,style:a,classNames:o,styles:i}),...m})});p.classes=m,p.displayName="@mantine/core/ProgressLabel";var g=o(91482),b=o(11200),P=o(62378);let h={},E=(0,b.Z)((e,{size:r,radius:o,transitionDuration:t})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o),"--progress-transition-duration":"number"==typeof t?`${t}ms`:void 0}})),v=(0,a.d)((e,r)=>{let o=(0,s.w)("ProgressRoot",h,e),{classNames:n,className:a,style:i,styles:u,unstyled:d,vars:p,autoContrast:g,transitionDuration:b,...v}=o,x=(0,P.y)({name:"Progress",classes:m,props:o,className:a,style:i,classNames:n,styles:u,unstyled:d,vars:p,varsResolver:E});return t.createElement(c,{value:{getStyles:x,autoContrast:g}},t.createElement(l.x,{ref:r,...x("root"),...v}))});v.classes=m,v.displayName="@mantine/core/ProgressRoot";var x=o(13588),f=o(39568),S=o(90006),y=o(68755);let j={withAria:!0},L=(0,a.d)((e,r)=>{let{classNames:o,className:n,style:a,styles:i,vars:c,value:m,withAria:d,color:p,striped:g,animated:b,mod:P,...h}=(0,s.w)("ProgressSection",j,e),E=u(),v=(0,y.rZ)(),L=d?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":`${m}%`}:{};return t.createElement(l.x,{ref:r,...E.getStyles("section",{className:n,classNames:o,styles:i,style:a}),...h,...L,mod:[{striped:g||b,animated:b},P],__vars:{"--progress-section-width":`${m}%`,"--progress-section-color":(0,x.p)(p,v),"--progress-label-color":(0,S.o)(E.autoContrast,v)?(0,f.R)({color:p,theme:v}):void 0}})});L.classes=m,L.displayName="@mantine/core/ProgressSection";let w={},_=(0,a.d)((e,r)=>{let o=(0,s.w)("Progress",w,e),{value:a,classNames:l,styles:i,vars:c,color:u,striped:m,animated:d,"aria-label":p,...g}=o,{resolvedClassNames:b,resolvedStyles:P}=(0,n.h)({classNames:l,styles:i,props:o});return t.createElement(v,{ref:r,classNames:b,styles:P,vars:c,...g},t.createElement(L,{value:a,color:u,striped:m,animated:d,"aria-label":p}))});_.classes=m,_.displayName="@mantine/core/Progress",_.Section=L,_.Root=v,_.Label=p}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=90841)}),_N_E=e.O()}]);
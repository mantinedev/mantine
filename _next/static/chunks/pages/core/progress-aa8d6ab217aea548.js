(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{90841:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(41637)}])},41637:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return y}});var s=o(52322),n=o(45392),t=o(45757);let i=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,l={type:"configurator",component:function(e){return(0,s.jsx)(t.E,{...e})},code:i,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var a=o(42407),c=o(893);let u=`
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
`,d={type:"code",component:function(){return(0,s.jsxs)(t.E.Root,{size:40,children:[(0,s.jsx)(c.u,{label:"Documents – 33Gb",children:(0,s.jsx)(t.E.Section,{value:33,color:"cyan",children:(0,s.jsx)(t.E.Label,{children:"Documents"})})}),(0,s.jsx)(c.u,{label:"Photos – 28Gb",children:(0,s.jsx)(t.E.Section,{value:28,color:"pink",children:(0,s.jsx)(t.E.Label,{children:"Photos"})})}),(0,s.jsx)(c.u,{label:"Other – 15Gb",children:(0,s.jsx)(t.E.Section,{value:15,color:"orange",children:(0,s.jsx)(t.E.Label,{children:"Other"})})})]})},code:u};var p=o(2784),m=o(17115);let g=`
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
`,h={type:"code",component:function(){let[e,r]=(0,p.useState)(50);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.E,{value:e,size:"lg",transitionDuration:200}),(0,s.jsx)(m.z,{onClick:()=>r(100*Math.random()),mt:"md",children:"Set random value"})]})},code:g,centered:!0,maxWidth:400};var x=o(71506);let b=`
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
`,P={type:"styles-api",data:x.S,component:function(e){return(0,s.jsx)(t.E.Root,{size:"xl",...e,children:(0,s.jsx)(t.E.Section,{value:35,children:(0,s.jsx)(t.E.Label,{children:"Documents"})})})},code:b,centered:!0,maxWidth:400};var j=o(79016),v=o(33638);let f=(0,j.A)(v.us.Progress);function S(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:t}=r;return o||E("Demo",!0),t||E("StylesApiSelectors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(o,{data:l}),"\n",(0,s.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,s.jsx)(o,{data:a.I}),"\n",(0,s.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,s.jsx)(o,{data:d}),"\n",(0,s.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,s.jsxs)(r.p,{children:["Set ",(0,s.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,s.jsx)(o,{data:h}),"\n",(0,s.jsx)(t,{component:"Progress"}),"\n",(0,s.jsx)(o,{data:P}),"\n",(0,s.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Progress section has ",(0,s.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,s.jsxs)(r.li,{children:["Progress section has ",(0,s.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,s.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,s.jsx)(r.code,{children:"0"})," and ",(0,s.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Set ",(0,s.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(f,{...e,children:(0,s.jsx)(S,{...e})})}function E(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42407:function(e,r,o){"use strict";o.d(r,{I:function(){return i}});var s=o(52322),n=o(45757);let t=`
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
`,i={type:"code",component:function(){return(0,s.jsxs)(n.E.Root,{size:"xl",children:[(0,s.jsx)(n.E.Section,{value:35,color:"cyan",children:(0,s.jsx)(n.E.Label,{children:"Documents"})}),(0,s.jsx)(n.E.Section,{value:28,color:"pink",children:(0,s.jsx)(n.E.Label,{children:"Photos"})}),(0,s.jsx)(n.E.Section,{value:15,color:"orange",children:(0,s.jsx)(n.E.Label,{children:"Other"})})]})},code:t}},45757:function(e,r,o){"use strict";o.d(r,{E:function(){return _}});var s=o(52322);o(2784);var n=o(51477),t=o(38483),i=o(82027),l=o(28559),a=o(89106);let[c,u]=(0,a.R)("Progress.Root component was not found in tree");var d={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let p={},m=(0,i.d)((e,r)=>{let{classNames:o,className:n,style:i,styles:a,vars:c,...d}=(0,t.w)("ProgressLabel",p,e),m=u();return(0,s.jsx)(l.x,{ref:r,...m.getStyles("label",{className:n,style:i,classNames:o,styles:a}),...d})});m.classes=d,m.displayName="@mantine/core/ProgressLabel";var g=o(91482),h=o(11200),x=o(46690);let b={},P=(0,h.Z)((e,{size:r,radius:o,transitionDuration:s})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o),"--progress-transition-duration":"number"==typeof s?`${s}ms`:void 0}})),j=(0,i.d)((e,r)=>{let o=(0,t.w)("ProgressRoot",b,e),{classNames:n,className:i,style:a,styles:u,unstyled:p,vars:m,autoContrast:g,transitionDuration:h,...j}=o,v=(0,x.y)({name:"Progress",classes:d,props:o,className:i,style:a,classNames:n,styles:u,unstyled:p,vars:m,varsResolver:P});return(0,s.jsx)(c,{value:{getStyles:v,autoContrast:g},children:(0,s.jsx)(l.x,{ref:r,...v("root"),...j})})});j.classes=d,j.displayName="@mantine/core/ProgressRoot";var v=o(13588),f=o(39568),S=o(90006),y=o(68755);let E={withAria:!0},L=(0,i.d)((e,r)=>{let{classNames:o,className:n,style:i,styles:a,vars:c,value:d,withAria:p,color:m,striped:g,animated:h,mod:x,...b}=(0,t.w)("ProgressSection",E,e),P=u(),j=(0,y.rZ)(),L=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,s.jsx)(l.x,{ref:r,...P.getStyles("section",{className:n,classNames:o,styles:a,style:i}),...b,...L,mod:[{striped:g||h,animated:h},x],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,v.p)(m,j),"--progress-label-color":(0,S.o)(P.autoContrast,j)?(0,f.R)({color:m,theme:j}):void 0}})});L.classes=d,L.displayName="@mantine/core/ProgressSection";let w={},_=(0,i.d)((e,r)=>{let o=(0,t.w)("Progress",w,e),{value:i,classNames:l,styles:a,vars:c,color:u,striped:d,animated:p,"aria-label":m,...g}=o,{resolvedClassNames:h,resolvedStyles:x}=(0,n.h)({classNames:l,styles:a,props:o});return(0,s.jsx)(j,{ref:r,classNames:h,styles:x,vars:c,...g,children:(0,s.jsx)(L,{value:i,color:u,striped:d,animated:p,"aria-label":m})})});_.classes=d,_.displayName="@mantine/core/Progress",_.Section=L,_.Root=j,_.Label=m}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=90841)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{90841:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return r(41637)}])},41637:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return v}});var s=r(52322),n=r(45392),t=r(45757);let i={type:"configurator",component:function(e){return(0,s.jsx)(t.E,{...e})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var l=r(42407),a=r(893);let c={type:"code",component:function(){return(0,s.jsxs)(t.E.Root,{size:40,children:[(0,s.jsx)(a.u,{label:"Documents – 33Gb",children:(0,s.jsx)(t.E.Section,{value:33,color:"cyan",children:(0,s.jsx)(t.E.Label,{children:"Documents"})})}),(0,s.jsx)(a.u,{label:"Photos – 28Gb",children:(0,s.jsx)(t.E.Section,{value:28,color:"pink",children:(0,s.jsx)(t.E.Label,{children:"Photos"})})}),(0,s.jsx)(a.u,{label:"Other – 15Gb",children:(0,s.jsx)(t.E.Section,{value:15,color:"orange",children:(0,s.jsx)(t.E.Label,{children:"Other"})})})]})},code:`
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
`};var u=r(2784),d=r(17115);let p={type:"code",component:function(){let[e,o]=(0,u.useState)(50);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.E,{value:e,size:"lg",transitionDuration:200}),(0,s.jsx)(d.z,{onClick:()=>o(100*Math.random()),mt:"md",children:"Set random value"})]})},code:`
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
`,centered:!0,maxWidth:400};var m=r(71506);let g=`
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
`,h={type:"styles-api",data:m.S,component:function(e){return(0,s.jsx)(t.E.Root,{size:"xl",...e,children:(0,s.jsx)(t.E.Section,{value:35,children:(0,s.jsx)(t.E.Label,{children:"Documents"})})})},code:g,centered:!0,maxWidth:400};var x=r(25071),b=r(15019);let P=(0,x.A)(b.us.Progress);function j(e){let o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:r,StylesApiSelectors:t}=o;return r||f("Demo",!0),t||f("StylesApiSelectors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r,{data:i}),"\n",(0,s.jsx)(o.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,s.jsx)(r,{data:l.I}),"\n",(0,s.jsx)(o.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,s.jsx)(r,{data:c}),"\n",(0,s.jsx)(o.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,s.jsxs)(o.p,{children:["Set ",(0,s.jsx)(o.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,s.jsx)(r,{data:p}),"\n",(0,s.jsx)(t,{component:"Progress"}),"\n",(0,s.jsx)(r,{data:h}),"\n",(0,s.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Progress section has ",(0,s.jsx)(o.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,s.jsxs)(o.li,{children:["Progress section has ",(0,s.jsx)(o.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"aria-valuemin"})," and ",(0,s.jsx)(o.code,{children:"aria-valuemax"})," attributes are always set to ",(0,s.jsx)(o.code,{children:"0"})," and ",(0,s.jsx)(o.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Set ",(0,s.jsx)(o.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(P,{...e,children:(0,s.jsx)(j,{...e})})}function f(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42407:function(e,o,r){"use strict";r.d(o,{I:function(){return t}});var s=r(52322),n=r(45757);let t={type:"code",component:function(){return(0,s.jsxs)(n.E.Root,{size:"xl",children:[(0,s.jsx)(n.E.Section,{value:35,color:"cyan",children:(0,s.jsx)(n.E.Label,{children:"Documents"})}),(0,s.jsx)(n.E.Section,{value:28,color:"pink",children:(0,s.jsx)(n.E.Label,{children:"Photos"})}),(0,s.jsx)(n.E.Section,{value:15,color:"orange",children:(0,s.jsx)(n.E.Label,{children:"Other"})})]})},code:`
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
`}},45757:function(e,o,r){"use strict";r.d(o,{E:function(){return w}});var s=r(52322);r(2784);var n=r(51477),t=r(38483),i=r(82027),l=r(28559);let[a,c]=(0,r(89106).R)("Progress.Root component was not found in tree");var u={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},p=(0,i.d)((e,o)=>{let{classNames:r,className:n,style:i,styles:a,vars:u,...p}=(0,t.w)("ProgressLabel",d,e),m=c();return(0,s.jsx)(l.x,{ref:o,...m.getStyles("label",{className:n,style:i,classNames:r,styles:a}),...p})});p.classes=u,p.displayName="@mantine/core/ProgressLabel";var m=r(91482),g=r(11200),h=r(46690);let x={},b=(0,g.Z)((e,{size:o,radius:r,transitionDuration:s})=>({root:{"--progress-size":(0,m.ap)(o,"progress-size"),"--progress-radius":void 0===r?void 0:(0,m.H5)(r),"--progress-transition-duration":"number"==typeof s?`${s}ms`:void 0}})),P=(0,i.d)((e,o)=>{let r=(0,t.w)("ProgressRoot",x,e),{classNames:n,className:i,style:c,styles:d,unstyled:p,vars:m,autoContrast:g,transitionDuration:P,...j}=r,v=(0,h.y)({name:"Progress",classes:u,props:r,className:i,style:c,classNames:n,styles:d,unstyled:p,vars:m,varsResolver:b});return(0,s.jsx)(a,{value:{getStyles:v,autoContrast:g},children:(0,s.jsx)(l.x,{ref:o,...v("root"),...j})})});P.classes=u,P.displayName="@mantine/core/ProgressRoot";var j=r(13588),v=r(39568),f=r(90006),S=r(68755);let y={withAria:!0},E=(0,i.d)((e,o)=>{let{classNames:r,className:n,style:i,styles:a,vars:u,value:d,withAria:p,color:m,striped:g,animated:h,mod:x,...b}=(0,t.w)("ProgressSection",y,e),P=c(),E=(0,S.rZ)(),L=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,s.jsx)(l.x,{ref:o,...P.getStyles("section",{className:n,classNames:r,styles:a,style:i}),...b,...L,mod:[{striped:g||h,animated:h},x],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,j.p)(m,E),"--progress-label-color":(0,f.o)(P.autoContrast,E)?(0,v.R)({color:m,theme:E}):void 0}})});E.classes=u,E.displayName="@mantine/core/ProgressSection";let L={},w=(0,i.d)((e,o)=>{let r=(0,t.w)("Progress",L,e),{value:i,classNames:l,styles:a,vars:c,color:u,striped:d,animated:p,"aria-label":m,...g}=r,{resolvedClassNames:h,resolvedStyles:x}=(0,n.h)({classNames:l,styles:a,props:r});return(0,s.jsx)(P,{ref:o,classNames:h,styles:x,vars:c,...g,children:(0,s.jsx)(E,{value:i,color:u,striped:d,animated:p,"aria-label":m})})});w.classes=u,w.displayName="@mantine/core/Progress",w.Section=E,w.Root=P,w.Label=p}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=90841)}),_N_E=e.O()}]);
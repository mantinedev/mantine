(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{83943:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(88252)}])},88252:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return x}});var t=o(24246),s=o(71670),n=o(27378),l=o(30454);let a=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,i={type:"configurator",component:function(e){return n.createElement(l.E,{...e})},code:a,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=o(21925),u=o(99684);let m=`
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
`,p={type:"code",component:function(){return n.createElement(l.E.Root,{size:40},n.createElement(u.u,{label:"Documents – 33Gb"},n.createElement(l.E.Section,{value:33,color:"cyan"},n.createElement(l.E.Label,null,"Documents"))),n.createElement(u.u,{label:"Photos – 28Gb"},n.createElement(l.E.Section,{value:28,color:"pink"},n.createElement(l.E.Label,null,"Photos"))),n.createElement(u.u,{label:"Other – 15Gb"},n.createElement(l.E.Section,{value:15,color:"orange"},n.createElement(l.E.Label,null,"Other"))))},code:m};var d=o(35150);let g=`
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
`,b={type:"styles-api",data:d.S,component:function(e){return n.createElement(l.E.Root,{size:"xl",...e},n.createElement(l.E.Section,{value:35},n.createElement(l.E.Label,null,"Documents")))},code:g,centered:!0,maxWidth:400};var P=o(3916),h=o(54568);let E=(0,P.A)(h.us.Progress);function v(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:o,StylesApiSelectors:n}=r;return o||f("Demo",!0),n||f("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:c.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(n,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,{...e,children:(0,t.jsx)(v,{...e})})}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21925:function(e,r,o){"use strict";o.d(r,{I:function(){return l}});var t=o(27378),s=o(30454);let n=`
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
`,l={type:"code",component:function(){return t.createElement(s.E.Root,{size:"xl"},t.createElement(s.E.Section,{value:35,color:"cyan"},t.createElement(s.E.Label,null,"Documents")),t.createElement(s.E.Section,{value:28,color:"pink"},t.createElement(s.E.Label,null,"Photos")),t.createElement(s.E.Section,{value:15,color:"orange"},t.createElement(s.E.Label,null,"Other")))},code:n}},30454:function(e,r,o){"use strict";o.d(r,{E:function(){return w}});var t=o(27378),s=o(5564),n=o(96739),l=o(20410),a=o(56589),i=o(71656);let[c,u]=(0,i.R)("Progress.Root component was not found in tree");var m={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let p={},d=(0,l.d)((e,r)=>{let{classNames:o,className:s,style:l,styles:i,vars:c,...m}=(0,n.w)("ProgressLabel",p,e),d=u();return t.createElement(a.x,{ref:r,...d.getStyles("label",{className:s,style:l,classNames:o,styles:i}),...m})});d.classes=m,d.displayName="@mantine/core/ProgressLabel";var g=o(92082),b=o(83453),P=o(6231);let h={},E=(0,b.Z)((e,{size:r,radius:o})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o)}})),v=(0,l.d)((e,r)=>{let o=(0,n.w)("ProgressRoot",h,e),{classNames:s,className:l,style:i,styles:u,unstyled:p,vars:d,autoContrast:g,...b}=o,v=(0,P.y)({name:"Progress",classes:m,props:o,className:l,style:i,classNames:s,styles:u,unstyled:p,vars:d,varsResolver:E});return t.createElement(c,{value:{getStyles:v,autoContrast:g}},t.createElement(a.x,{ref:r,...v("root"),...b}))});v.classes=m,v.displayName="@mantine/core/ProgressRoot";var x=o(89738),f=o(34121),y=o(2256);let S={withAria:!0},j=(0,l.d)((e,r)=>{let{classNames:o,className:s,style:l,styles:i,vars:c,value:m,withAria:p,color:d,striped:g,animated:b,...P}=(0,n.w)("ProgressSection",S,e),h=u(),E=(0,y.rZ)(),v=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":`${m}%`}:{};return t.createElement(a.x,{ref:r,...h.getStyles("section",{className:s,classNames:o,styles:i,style:l}),...P,...v,mod:{striped:g||b,animated:b},__vars:{"--progress-section-width":`${m}%`,"--progress-section-color":(0,x.p)(d,E),"--progress-label-color":h.autoContrast?(0,f.R)({color:d,theme:E}):void 0}})});j.classes=m,j.displayName="@mantine/core/ProgressSection";let L={},w=(0,l.d)((e,r)=>{let o=(0,n.w)("Progress",L,e),{value:l,classNames:a,styles:i,vars:c,color:u,striped:m,animated:p,"aria-label":d,...g}=o,{resolvedClassNames:b,resolvedStyles:P}=(0,s.h)({classNames:a,styles:i,props:o});return t.createElement(v,{ref:r,classNames:b,styles:P,vars:c,...g},t.createElement(j,{value:l,color:u,striped:m,animated:p,"aria-label":d}))});w.classes=m,w.displayName="@mantine/core/Progress",w.Section=j,w.Root=v,w.Label=d}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=83943)}),_N_E=e.O()}]);
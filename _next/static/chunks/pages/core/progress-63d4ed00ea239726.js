(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2374],{83943:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(88252)}])},88252:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return x}});var t=o(24246),n=o(71670),s=o(27378),l=o(30454);let a=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,i={type:"configurator",component:function(e){return s.createElement(l.E,{...e})},code:a,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=o(21925),u=o(99684);let m=`
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
`,p={type:"code",component:function(){return s.createElement(l.E.Root,{size:40},s.createElement(u.u,{label:"Documents – 33Gb"},s.createElement(l.E.Section,{value:33,color:"cyan"},s.createElement(l.E.Label,null,"Documents"))),s.createElement(u.u,{label:"Photos – 28Gb"},s.createElement(l.E.Section,{value:28,color:"pink"},s.createElement(l.E.Label,null,"Photos"))),s.createElement(u.u,{label:"Other – 15Gb"},s.createElement(l.E.Section,{value:15,color:"orange"},s.createElement(l.E.Label,null,"Other"))))},code:m};var d=o(35150);let g=`
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
`,b={type:"styles-api",data:d.S,component:function(e){return s.createElement(l.E.Root,{size:"xl",...e},s.createElement(l.E.Section,{value:35},s.createElement(l.E.Label,null,"Documents")))},code:g,centered:!0,maxWidth:400};var P=o(3916),h=o(30289);let E=(0,P.A)(h.us.Progress);function v(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:s}=r;return o||f("Demo",!0),s||f("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:c.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(s,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,{...e,children:(0,t.jsx)(v,{...e})})}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21925:function(e,r,o){"use strict";o.d(r,{I:function(){return l}});var t=o(27378),n=o(30454);let s=`
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
`,l={type:"code",component:function(){return t.createElement(n.E.Root,{size:"xl"},t.createElement(n.E.Section,{value:35,color:"cyan"},t.createElement(n.E.Label,null,"Documents")),t.createElement(n.E.Section,{value:28,color:"pink"},t.createElement(n.E.Label,null,"Photos")),t.createElement(n.E.Section,{value:15,color:"orange"},t.createElement(n.E.Label,null,"Other")))},code:s}},30454:function(e,r,o){"use strict";o.d(r,{E:function(){return L}});var t=o(27378),n=o(5564),s=o(96739),l=o(20410),a=o(56589),i=o(71656);let[c,u]=(0,i.R)("Progress.Root component was not found in tree");var m={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let p={},d=(0,l.d)((e,r)=>{let{classNames:o,className:n,style:l,styles:i,vars:c,...m}=(0,s.w)("ProgressLabel",p,e),d=u();return t.createElement(a.x,{ref:r,...d.getStyles("label",{className:n,style:l,classNames:o,styles:i}),...m})});d.classes=m,d.displayName="@mantine/core/ProgressLabel";var g=o(92082),b=o(83453),P=o(6231);let h={},E=(0,b.Z)((e,{size:r,radius:o})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o)}})),v=(0,l.d)((e,r)=>{let o=(0,s.w)("ProgressRoot",h,e),{classNames:n,className:l,style:i,styles:u,unstyled:p,vars:d,...g}=o,b=(0,P.y)({name:"Progress",classes:m,props:o,className:l,style:i,classNames:n,styles:u,unstyled:p,vars:d,varsResolver:E});return t.createElement(c,{value:{getStyles:b}},t.createElement(a.x,{ref:r,...b("root"),...g}))});v.classes=m,v.displayName="@mantine/core/ProgressRoot";var x=o(89738),f=o(2256);let y={withAria:!0},S=(0,l.d)((e,r)=>{let{classNames:o,className:n,style:l,styles:i,vars:c,value:m,withAria:p,color:d,striped:g,animated:b,...P}=(0,s.w)("ProgressSection",y,e),h=u(),E=(0,f.rZ)(),v=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":`${m}%`}:{};return t.createElement(a.x,{ref:r,...h.getStyles("section",{className:n,classNames:o,styles:i,style:l}),...P,...v,mod:{striped:g||b,animated:b},__vars:{"--progress-section-width":`${m}%`,"--progress-section-color":(0,x.p)(d,E)}})});S.classes=m,S.displayName="@mantine/core/ProgressSection";let j={},L=(0,l.d)((e,r)=>{let o=(0,s.w)("Progress",j,e),{value:l,classNames:a,styles:i,vars:c,color:u,striped:m,animated:p,"aria-label":d,...g}=o,{resolvedClassNames:b,resolvedStyles:P}=(0,n.h)({classNames:a,styles:i,props:o});return t.createElement(v,{ref:r,classNames:b,styles:P,vars:c,...g},t.createElement(S,{value:l,color:u,striped:m,animated:p,"aria-label":d}))});L.classes=m,L.displayName="@mantine/core/Progress",L.Section=S,L.Root=v,L.Label=d}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=83943)}),_N_E=e.O()}]);
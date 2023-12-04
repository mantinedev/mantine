(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2374],{83943:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(88252)}])},88252:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return v}});var t=o(24246),n=o(71670),s=o(3916),l=o(30289),a=o(27378),i=o(30454);let c=`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,u={type:"configurator",component:function(e){return a.createElement(i.E,{...e})},code:c,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var m=o(21925),p=o(99684);let d=`
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
`,g={type:"code",component:function(){return a.createElement(i.E.Root,{size:40},a.createElement(p.u,{label:"Documents – 33Gb"},a.createElement(i.E.Section,{value:33,color:"cyan"},a.createElement(i.E.Label,null,"Documents"))),a.createElement(p.u,{label:"Photos – 28Gb"},a.createElement(i.E.Section,{value:28,color:"pink"},a.createElement(i.E.Label,null,"Photos"))),a.createElement(p.u,{label:"Other – 15Gb"},a.createElement(i.E.Section,{value:15,color:"orange"},a.createElement(i.E.Label,null,"Other"))))},code:d};var b=o(35150);let P=`
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
`,h={type:"styles-api",data:b.S,component:function(e){return a.createElement(i.E.Root,{size:"xl",...e},a.createElement(i.E.Section,{value:35},a.createElement(i.E.Label,null,"Documents")))},code:P,centered:!0,maxWidth:400},E=(0,s.A)(l.us.Progress);function x(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:s}=r;return o||f("Demo",!0),s||f("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:m.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(s,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,{...e,children:(0,t.jsx)(x,{...e})})}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21925:function(e,r,o){"use strict";o.d(r,{I:function(){return l}});var t=o(27378),n=o(30454);let s=`
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
`,l={type:"code",component:function(){return t.createElement(n.E.Root,{size:"xl"},t.createElement(n.E.Section,{value:35,color:"cyan"},t.createElement(n.E.Label,null,"Documents")),t.createElement(n.E.Section,{value:28,color:"pink"},t.createElement(n.E.Label,null,"Photos")),t.createElement(n.E.Section,{value:15,color:"orange"},t.createElement(n.E.Label,null,"Other")))},code:s}},30454:function(e,r,o){"use strict";o.d(r,{E:function(){return L}});var t=o(27378),n=o(5564),s=o(96739),l=o(20410),a=o(92082),i=o(83453),c=o(6231),u=o(56589),m=o(71656);let[p,d]=(0,m.R)("Progress.Root component was not found in tree");var g={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let b={},P=(0,i.Z)((e,{size:r,radius:o})=>({root:{"--progress-size":(0,a.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,a.H5)(o)}})),h=(0,l.d)((e,r)=>{let o=(0,s.w)("ProgressRoot",b,e),{classNames:n,className:l,style:a,styles:i,unstyled:m,vars:d,...h}=o,E=(0,c.y)({name:"Progress",classes:g,props:o,className:l,style:a,classNames:n,styles:i,unstyled:m,vars:d,varsResolver:P});return t.createElement(p,{value:{getStyles:E}},t.createElement(u.x,{ref:r,...E("root"),...h}))});h.classes=g,h.displayName="@mantine/core/ProgressRoot";var E=o(89738),x=o(2256);let v={withAria:!0},f=(0,l.d)((e,r)=>{let{classNames:o,className:n,style:l,styles:a,vars:i,value:c,withAria:m,color:p,striped:g,animated:b,...P}=(0,s.w)("ProgressSection",v,e),h=d(),f=(0,x.rZ)(),y=m?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,"aria-valuetext":`${c}%`}:{};return t.createElement(u.x,{ref:r,...h.getStyles("section",{className:n,classNames:o,styles:a,style:l}),...P,...y,mod:{striped:g||b,animated:b},__vars:{"--progress-section-width":`${c}%`,"--progress-section-color":(0,E.p)(p,f)}})});f.classes=g,f.displayName="@mantine/core/ProgressSection";let y={},S=(0,l.d)((e,r)=>{let{classNames:o,className:n,style:l,styles:a,vars:i,...c}=(0,s.w)("ProgressLabel",y,e),m=d();return t.createElement(u.x,{ref:r,...m.getStyles("label",{className:n,style:l,classNames:o,styles:a}),...c})});S.classes=g,S.displayName="@mantine/core/ProgressLabel";let j={},L=(0,l.d)((e,r)=>{let o=(0,s.w)("Progress",j,e),{value:l,classNames:a,styles:i,vars:c,color:u,striped:m,animated:p,"aria-label":d,...g}=o,{resolvedClassNames:b,resolvedStyles:P}=(0,n.h)({classNames:a,styles:i,props:o});return t.createElement(h,{ref:r,classNames:b,styles:P,vars:c,...g},t.createElement(f,{value:l,color:u,striped:m,animated:p,"aria-label":d}))});L.classes=g,L.displayName="@mantine/core/Progress",L.Section=f,L.Root=h,L.Label=S}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=83943)}),_N_E=e.O()}]);
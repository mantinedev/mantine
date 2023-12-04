(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},18576:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return n(84880)}])},84880:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var o=n(24246),r=n(71670),i=n(3916),a=n(30289),d=n(27378),l=n(73988);let c=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,u={type:"configurator",component:function(e){return d.createElement(l.C,{...e},"Badge")},code:c,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var g=n(99989);let s={type:"configurator",component:function(e){return d.createElement(l.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:e=>`
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`,centered:!0,controls:g.P};var p=n(71078),m=n(22971),f=n(93693);let h=`
import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`,b={type:"code",component:function(){let e=d.createElement(f.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return d.createElement(m.Z,null,d.createElement(l.C,{leftSection:e},"With left section"),d.createElement(l.C,{rightSection:e},"With right section"))},centered:!0,code:h},y=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,B={type:"code",component:function(){return d.createElement(l.C,{fullWidth:!0},"Full width badge")},code:y};var x=n(68738);let v=`
import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,_={type:"styles-api",data:x.o,component:function(e){let t=d.createElement(f.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return d.createElement(l.C,{leftSection:t,rightSection:t,...e},"Badge component")},centered:!0,code:v},E=(0,i.A)(a.us.Badge);function w(e){let t={code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n,Gradient:i,Polymorphic:a,StylesApiSelectors:d}=t;return n||V("Demo",!0),i||V("Gradient",!0),a||V("Polymorphic",!0),d||V("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(i,{component:"Badge"}),"\n",(0,o.jsx)(n,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsx)(n,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,o.jsx)(n,{data:B}),"\n",(0,o.jsx)(d,{component:"Badge"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(a,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,{...e,children:(0,o.jsx)(w,{...e})})}function V(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99989:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},73988:function(e,t,n){"use strict";n.d(t,{C:function(){return m}});var o=n(27378),r=n(92082),i=n(83453),a=n(89738),d=n(96739),l=n(6231),c=n(56589),u=n(50332),g={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let s={},p=(0,i.Z)((e,{radius:t,color:n,gradient:o,variant:i,size:d})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:i||"filled"});return{root:{"--badge-height":(0,r.ap)(d,"badge-height"),"--badge-padding-x":(0,r.ap)(d,"badge-padding-x"),"--badge-fz":(0,r.ap)(d,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,r.H5)(t),"--badge-bg":n||i?l.background:void 0,"--badge-color":n||i?l.color:void 0,"--badge-bd":n||i?l.border:void 0,"--badge-dot-color":"dot"===i?(0,a.p)(n,e):void 0}}}),m=(0,u.b)((e,t)=>{let n=(0,d.w)("Badge",s,e),{classNames:r,className:i,style:a,styles:u,unstyled:m,vars:f,radius:h,color:b,gradient:y,leftSection:B,rightSection:x,children:v,variant:_,fullWidth:E,...w}=n,j=(0,l.y)({name:"Badge",props:n,classes:g,className:i,style:a,classNames:r,styles:u,unstyled:m,vars:f,varsResolver:p});return o.createElement(c.x,{variant:_,mod:{block:E},...j("root",{variant:_}),ref:t,...w},B&&o.createElement("span",{...j("section"),"data-position":"left"},B),o.createElement("span",{...j("label")},v),x&&o.createElement("span",{...j("section"),"data-position":"right"},x))});m.classes=g,m.displayName="@mantine/core/Badge"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=18576)}),_N_E=e.O()}]);
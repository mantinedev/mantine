(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},18251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return n(2357)}])},2357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(85893),a=n(11151),o=n(19905),i=n(9904),l=n(67294),c=n(28931),d=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&g(e,n,t[n]);return e};let f=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,m={type:"configurator",component:function(e){return l.createElement(c.C,h({},e),"Badge")},code:f,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var y=n(69137);let v=e=>`
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
`,b={type:"configurator",component:function(e){return l.createElement(c.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:v,centered:!0,controls:y.P};var k=n(72622),w=n(16262),j=n(93693);let M=`
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
`,x={type:"code",component:function(){let e=l.createElement(j.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return l.createElement(w.Z,null,l.createElement(c.C,{leftSection:e},"With left section"),l.createElement(c.C,{rightSection:e},"With right section"))},centered:!0,code:M},B=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,O={type:"code",component:function(){return l.createElement(c.C,{fullWidth:!0},"Full width badge")},code:B};var E=n(19098),_=Object.defineProperty,Z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&I(e,n,t[n]);if(Z)for(var n of Z(t))S.call(t,n)&&I(e,n,t[n]);return e};let C=`
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
`,D={type:"styles-api",data:E.o,component:function(e){let t=l.createElement(j.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return l.createElement(c.C,V({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:C},A=(0,o.A)(i.us.Badge);function N(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:n,Gradient:o,StylesApiSelectors:i,Polymorphic:l}=t;return n||W("Demo",!0),o||W("Gradient",!0),l||W("Polymorphic",!0),i||W("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(o,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(i,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(A,Object.assign({},e,{children:(0,r.jsx)(N,e)}))};function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},28931:function(e,t,n){"use strict";n.d(t,{C:function(){return x}});var r=n(67294),a={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},o=n(70405),i=n(30370),l=n(86109),c=n(81110),d=n(8586),s=n(48468),p=n(40184),u=Object.defineProperty,g=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))y.call(t,n)&&v(e,n,t[n]);return e},k=(e,t)=>g(e,h(t)),w=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&y.call(e,r)&&(n[r]=e[r]);return n};let j={},M=(0,d.Z)((e,{radius:t,color:n,gradient:r,variant:a,size:o})=>{let i=e.variantColorResolver({color:n,theme:e,gradient:r,variant:a||"filled"});return{root:{"--badge-height":(0,s.ap)(o,"badge-height"),"--badge-padding-x":(0,s.ap)(o,"badge-padding-x"),"--badge-fz":(0,s.ap)(o,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,s.H5)(t),"--badge-bg":n||a?i.background:void 0,"--badge-color":n||a?i.color:void 0,"--badge-bd":n||a?i.border:void 0,"--badge-dot-color":"dot"===a?(0,p.p)(n,e):void 0}}}),x=(0,o.b)((e,t)=>{let n=(0,i.w)("Badge",j,e),{classNames:o,className:d,style:s,styles:p,unstyled:u,vars:g,radius:h,color:f,gradient:m,leftSection:y,rightSection:v,children:x,variant:B,fullWidth:O}=n,E=w(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),_=(0,l.y)({name:"Badge",props:n,classes:a,className:d,style:s,classNames:o,styles:p,unstyled:u,vars:g,varsResolver:M});return r.createElement(c.x,b(k(b({variant:B,mod:{block:O}},_("root",{variant:B})),{ref:t}),E),y&&r.createElement("span",k(b({},_("section")),{"data-position":"left"}),y),r.createElement("span",b({},_("label")),x),v&&r.createElement("span",k(b({},_("section")),{"data-position":"right"}),v))});x.classes=a,x.displayName="@mantine/core/Badge"},69137:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);
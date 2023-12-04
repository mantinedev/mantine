(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{1002:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},63713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return n(8490)}])},8490:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(24246),o=n(71670),i=n(3916),a=n(30289),l=n(27378),c=n(60060),u=n(81036);let d=`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,s={type:"configurator",component:function(e){return l.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.createElement(u.k,{...e},l.createElement(c.Z,{style:{width:"70%",height:"70%"}})))},code:d,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var m=n(1002),p=n(99989);let h={type:"configurator",component:function(e){return l.createElement(u.k,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},l.createElement(m.Z,null))},code:e=>`
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`,centered:!0,controls:p.P},f=(0,i.A)(a.us.ThemeIcon);function g(e){let t={h2:"h2",...(0,o.a)(),...e.components},{Demo:n,Gradient:i}=t;return n||v("Demo",!0),i||v("Gradient",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(i,{component:"ThemeIcon"}),"\n",(0,r.jsx)(n,{data:h})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(g,{...e})})}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99989:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},81036:function(e,t,n){"use strict";n.d(t,{k:function(){return p}});var r=n(27378),o=n(92082),i=n(83453),a=n(96739),l=n(6231),c=n(56589),u=n(20410),d={root:"m-7341320d"};let s={},m=(0,i.Z)((e,{size:t,radius:n,variant:r,gradient:i,color:a})=>{let l=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:i,variant:r||"filled"});return{root:{"--ti-size":(0,o.ap)(t,"ti-size"),"--ti-radius":void 0===n?void 0:(0,o.H5)(n),"--ti-bg":a||r?l.background:void 0,"--ti-color":a||r?l.color:void 0,"--ti-bd":a||r?l.border:void 0}}}),p=(0,u.d)((e,t)=>{let n=(0,a.w)("ThemeIcon",s,e),{classNames:o,className:i,style:u,styles:p,unstyled:h,vars:f,...g}=n,y=(0,l.y)({name:"ThemeIcon",classes:d,props:n,className:i,style:u,classNames:o,styles:p,unstyled:h,vars:f,varsResolver:m});return r.createElement(c.x,{ref:t,...y("root"),...g})});p.classes=d,p.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=63713)}),_N_E=e.O()}]);
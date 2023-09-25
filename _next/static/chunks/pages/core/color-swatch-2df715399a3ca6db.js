(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},37189:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return o(66331)}])},66331:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return E}});var r=o(85893),n=o(11151),c=o(19905),a=o(9904),l=o(67294),i=o(16262),h=o(221);let s=`
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
`,u={type:"code",component:function(){return l.createElement(i.Z,null,l.createElement(h.b,{color:"#009790"}),l.createElement(h.b,{color:"rgba(234, 22, 174, 0.5)"}),l.createElement(h.b,{color:"var(--mantine-color-orange-5)"}))},centered:!0,code:s};var d=Object.defineProperty,p=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))v.call(t,o)&&g(e,o,t[o]);if(p)for(var o of p(t))f.call(t,o)&&g(e,o,t[o]);return e};let y=`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,k={type:"configurator",component:function(e){return l.createElement(h.b,m({color:"rgba(255, 255, 255, 0.7)"},e))},code:y,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var w=o(38238),b=o(72622);let M=`
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`,C={type:"code",code:M,centered:!0,component:function(){let[e,t]=(0,l.useState)(!0);return l.createElement(h.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>t(e=>!e),c:"white",style:{cursor:"pointer"}},e&&l.createElement(w.n,{style:{width:(0,b.h)(12),height:(0,b.h)(12)}}))}},S=(0,c.A)(a.us.ColorSwatch);function j(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,n.ah)(),e.components),{Demo:o,Polymorphic:c}=t;return o||x("Demo",!0),c||x("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,r.jsx)(t.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,r.jsx)(o,{data:k}),"\n",(0,r.jsx)(c,{defaultElement:"div",changeToElement:"a",component:"ColorSwatch",withNext:!0}),"\n",(0,r.jsx)(o,{data:C})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,Object.assign({},e,{children:(0,r.jsx)(j,e)}))};function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=37189)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9632],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},17312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-input",function(){return n(87048)}])},87048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(85893),i=n(11151),o=n(19905),a=n(9904),l=n(67294),c=n(26713),s=n(88005),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))y.call(t,n)&&f(e,n,t[n]);return e},v=(e,t)=>u(e,d(t));let g=`
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,k={type:"configurator",component:function(e){return l.createElement(c.M,v(b({},e),{placeholder:"Input placeholder"}))},code:g,centered:!0,maxWidth:340,controls:s.pc};var w=(0,n(54764).Z)("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]),I=n(89363),M=n(72622);let V=`
import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`,j={type:"code",centered:!0,maxWidth:340,component:function(){let e=(0,l.useRef)(null),t=l.createElement(I.A,{variant:"subtle",color:"gray",onClick:()=>{var t;return null==(t=e.current)?void 0:t.showPicker()}},l.createElement(w,{style:{width:(0,M.h)(16),height:(0,M.h)(16)},stroke:1.5}));return l.createElement(c.M,{label:"Click icon to show browser picker",ref:e,rightSection:t})},code:V},x=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`,O={type:"code",centered:!0,maxWidth:340,component:function(){return l.createElement(c.M,{withSeconds:!0})},code:x},T=`
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@mantine/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`,E={type:"code",centered:!0,maxWidth:340,component:function(){return l.createElement(c.M,{leftSection:l.createElement(w,{style:{width:(0,M.h)(16),height:(0,M.h)(16)},stroke:1.5})})},code:T},P=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`,Z={type:"code",centered:!0,maxWidth:340,component:function(){return l.createElement(c.M,{disabled:!0})},code:P},C=(0,o.A)(a.us.TimeInput);function _(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,i.ah)(),e.components),{InputFeatures:n,Demo:o,GetElementRef:a,InputAccessibility:l}=t;return o||A("Demo",!0),a||A("GetElementRef",!0),l||A("InputAccessibility",!0),n||A("InputFeatures",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{component:"TimeInput",element:"input"}),"\n",(0,r.jsx)(o,{data:k}),"\n",(0,r.jsx)(t.h2,{id:"show-browser-picker",children:"Show browser picker"}),"\n",(0,r.jsxs)(t.p,{children:["You can show browser picker by calling ",(0,r.jsx)(t.code,{children:"showPicker"})," method of input element:"]}),"\n",(0,r.jsx)(o,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,r.jsx)(o,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,r.jsx)(o,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(o,{data:Z}),"\n",(0,r.jsx)(a,{component:"TimeInput",refType:"input"}),"\n",(0,r.jsx)(l,{component:"TimeInput"})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(C,Object.assign({},e,{children:(0,r.jsx)(_,e)}))};function A(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},26713:function(e,t,n){"use strict";n.d(t,{M:function(){return w}});var r=n(67294),i=n(40624),o=n(3154),a=n(30370),l=n(28816),c=n(70097),s={input:"m-468e7eda"},p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))y.call(t,n)&&f(e,n,t[n]);return e},v=(e,t)=>u(e,d(t)),g=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))0>t.indexOf(r)&&y.call(e,r)&&(n[r]=e[r]);return n};let k={},w=(0,o.d)((e,t)=>{let n=(0,a.w)("TimeInput",k,e),{classNames:o,styles:p,unstyled:u,vars:d,withSeconds:h}=n,m=g(n,["classNames","styles","unstyled","vars","withSeconds"]),{resolvedClassNames:y,resolvedStyles:f}=(0,l.h)({classNames:o,styles:p,props:n});return r.createElement(c.M,v(b({classNames:v(b({},y),{input:(0,i.Z)(s.input,null==y?void 0:y.input)}),styles:f,unstyled:u,ref:t},m),{step:h?1:60,type:"time",__staticSelector:"TimeInput"}))});w.classes=c.M.classes,w.displayName="@mantine/dates/TimeInput"},88005:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=17312)}),_N_E=e.O()}]);
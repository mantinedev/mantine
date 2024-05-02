(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49632],{37421:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(99882).Z)("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},35878:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-input",function(){return n(89168)}])},89168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(52322),r=n(45392),o=n(35963),a=n(76528);let l=`
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,u={type:"configurator",component:function(e){return(0,i.jsx)(o.M,{...e,placeholder:"Input placeholder"})},code:l,centered:!0,maxWidth:340,controls:a.pc};var s=n(2784),p=n(37421),c=n(54813),d=n(58898);let m=`
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
`,h={type:"code",centered:!0,maxWidth:340,component:function(){let e=(0,s.useRef)(null),t=(0,i.jsx)(c.A,{variant:"subtle",color:"gray",onClick:()=>e.current?.showPicker(),children:(0,i.jsx)(p.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)},stroke:1.5})});return(0,i.jsx)(o.M,{label:"Click icon to show browser picker",ref:e,rightSection:t})},code:m},f=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`,y={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{withSeconds:!0})},code:f},b=`
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
`,k={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{leftSection:(0,i.jsx)(p.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)},stroke:1.5})})},code:b},I=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`,V={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{disabled:!0})},code:I};var g=n(79016),w=n(33638);let x=(0,g.A)(w.us.TimeInput);function j(e){let t={code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:a,InputFeatures:l}=t;return n||v("Demo",!0),o||v("GetElementRef",!0),a||v("InputAccessibility",!0),l||v("InputFeatures",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(l,{component:"TimeInput",element:"input"}),"\n",(0,i.jsx)(n,{data:u}),"\n",(0,i.jsx)(t.h2,{id:"show-browser-picker",children:"Show browser picker"}),"\n",(0,i.jsxs)(t.p,{children:["You can show browser picker by calling ",(0,i.jsx)(t.code,{children:"showPicker"})," method of input element.\nNote that some browsers (desktop Safari) do not support this feature and the\nmethod will do nothing."]}),"\n",(0,i.jsx)(n,{data:h}),"\n",(0,i.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsx)(n,{data:y}),"\n",(0,i.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,i.jsx)(n,{data:k}),"\n",(0,i.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,i.jsx)(n,{data:V}),"\n",(0,i.jsx)(o,{component:"TimeInput",refType:"input",package:"@mantine/dates"}),"\n",(0,i.jsx)(a,{component:"TimeInput",packageName:"@mantine/dates"})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(x,{...e,children:(0,i.jsx)(j,{...e})})}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return i},nW:function(){return r},pc:function(){return o}});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},35963:function(e,t,n){"use strict";n.d(t,{M:function(){return p}});var i=n(52322),r=n(40489),o=n(82027),a=n(38483),l=n(51477),u=n(73063);let s={},p=(0,o.d)((e,t)=>{let n=(0,a.w)("TimeInput",s,e),{classNames:o,styles:p,unstyled:c,vars:d,withSeconds:m,minTime:h,maxTime:f,value:y,onChange:b,...k}=n,{resolvedClassNames:I,resolvedStyles:V}=(0,l.h)({classNames:o,styles:p,props:n}),g=e=>{if(void 0!==h||void 0!==f){let[t,n,i]=e.split(":").map(Number);if(h){let[e,r,o]=h.split(":").map(Number);if(t<e||t===e&&n<r||m&&t===e&&n===r&&i<o)return -1}if(f){let[e,r,o]=f.split(":").map(Number);if(t>e||t===e&&n>r||m&&t===e&&n===r&&i>o)return 1}}return 0};return(0,i.jsx)(u.M,{classNames:{...I,input:(0,r.Z)("m_468e7eda",I?.input)},styles:V,unstyled:c,ref:t,value:y,...k,step:m?1:60,onChange:b,onBlur:e=>{if(n.onBlur?.(e),void 0!==h||void 0!==f){let t=e.currentTarget.value;if(t){let i=g(t);1===i?(e.currentTarget.value=f,n.onChange?.(e)):-1===i&&(e.currentTarget.value=h,n.onChange?.(e))}}},type:"time",__staticSelector:"TimeInput"})});p.classes=u.M.classes,p.displayName="@mantine/dates/TimeInput"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=35878)}),_N_E=e.O()}]);
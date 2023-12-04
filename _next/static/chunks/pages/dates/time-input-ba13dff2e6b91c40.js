(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9632],{99402:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(54764).Z)("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},82365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-input",function(){return n(83718)}])},83718:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(24246),r=n(71670),o=n(3916),l=n(30289),a=n(27378),c=n(67789),u=n(77481);let s=`
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,p={type:"configurator",component:function(e){return a.createElement(c.M,{...e,placeholder:"Input placeholder"})},code:s,centered:!0,maxWidth:340,controls:u.pc};var d=n(99402),m=n(84246),h=n(71078);let f=`
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
`,y={type:"code",centered:!0,maxWidth:340,component:function(){let e=(0,a.useRef)(null),t=a.createElement(m.A,{variant:"subtle",color:"gray",onClick:()=>e.current?.showPicker()},a.createElement(d.Z,{style:{width:(0,h.h)(16),height:(0,h.h)(16)},stroke:1.5}));return a.createElement(c.M,{label:"Click icon to show browser picker",ref:e,rightSection:t})},code:f},b=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`,I={type:"code",centered:!0,maxWidth:340,component:function(){return a.createElement(c.M,{withSeconds:!0})},code:b},V=`
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
`,k={type:"code",centered:!0,maxWidth:340,component:function(){return a.createElement(c.M,{leftSection:a.createElement(d.Z,{style:{width:(0,h.h)(16),height:(0,h.h)(16)},stroke:1.5})})},code:V},w=`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`,g={type:"code",centered:!0,maxWidth:340,component:function(){return a.createElement(c.M,{disabled:!0})},code:w},x=(0,o.A)(l.us.TimeInput);function T(e){let t={code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:l,InputFeatures:a}=t;return n||E("Demo",!0),o||E("GetElementRef",!0),l||E("InputAccessibility",!0),a||E("InputFeatures",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a,{component:"TimeInput",element:"input"}),"\n",(0,i.jsx)(n,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"show-browser-picker",children:"Show browser picker"}),"\n",(0,i.jsxs)(t.p,{children:["You can show browser picker by calling ",(0,i.jsx)(t.code,{children:"showPicker"})," method of input element:"]}),"\n",(0,i.jsx)(n,{data:y}),"\n",(0,i.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsx)(n,{data:I}),"\n",(0,i.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,i.jsx)(n,{data:k}),"\n",(0,i.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,i.jsx)(n,{data:g}),"\n",(0,i.jsx)(o,{component:"TimeInput",refType:"input"}),"\n",(0,i.jsx)(l,{component:"TimeInput"})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(x,{...e,children:(0,i.jsx)(T,{...e})})}function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return i},nW:function(){return r},pc:function(){return o}});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},67789:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var i=n(27378),r=n(40624),o=n(20410),l=n(96739),a=n(5564),c=n(23163);let u={},s=(0,o.d)((e,t)=>{let n=(0,l.w)("TimeInput",u,e),{classNames:o,styles:s,unstyled:p,vars:d,withSeconds:m,...h}=n,{resolvedClassNames:f,resolvedStyles:y}=(0,a.h)({classNames:o,styles:s,props:n});return i.createElement(c.M,{classNames:{...f,input:(0,r.Z)("m-468e7eda",f?.input)},styles:y,unstyled:p,ref:t,...h,step:m?1:60,type:"time",__staticSelector:"TimeInput"})});s.classes=c.M.classes,s.displayName="@mantine/dates/TimeInput"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=82365)}),_N_E=e.O()}]);
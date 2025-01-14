(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49632],{35878:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-input",function(){return n(89168)}])},89168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(52322),r=n(45392),o=n(35963);let a={type:"configurator",component:function(e){return(0,i.jsx)(o.M,{...e})},code:`
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc};var l=n(2784),u=n(50379),s=n(15981);let c={type:"code",centered:!0,maxWidth:340,component:function(){let e=(0,l.useRef)(null),t=(0,i.jsx)(s.A,{variant:"subtle",color:"gray",onClick:()=>e.current?.showPicker(),children:(0,i.jsx)(u.Z,{size:16,stroke:1.5})});return(0,i.jsx)(o.M,{label:"Click icon to show browser picker",ref:e,rightSection:t})},code:`
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`},p={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{withSeconds:!0})},code:`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`},d={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{leftSection:(0,i.jsx)(u.Z,{size:16,stroke:1.5})})},code:`
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}
`},m={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.M,{disabled:!0})},code:`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`};var f=n(54078),h=n(15019);let y=(0,f.A)(h.us.TimeInput);function b(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:l,InputFeatures:u}=t;return n||k("Demo",!0),o||k("GetElementRef",!0),l||k("InputAccessibility",!0),u||k("InputFeatures",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(u,{component:"TimeInput",element:"input"}),"\n",(0,i.jsx)(n,{data:a}),"\n",(0,i.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimeInput } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <TimeInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"show-browser-picker",children:"Show browser picker"}),"\n",(0,i.jsxs)(t.p,{children:["You can show browser picker by calling ",(0,i.jsx)(t.code,{children:"showPicker"})," method of input element.\nNote that some browsers (desktop Safari) do not support this feature and the\nmethod will do nothing."]}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsx)(n,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,i.jsx)(n,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,i.jsx)(n,{data:m}),"\n",(0,i.jsx)(o,{component:"TimeInput",refType:"input",package:"@mantine/dates"}),"\n",(0,i.jsx)(l,{component:"TimeInput",packageName:"@mantine/dates"})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(y,{...e,children:(0,i.jsx)(b,{...e})})}function k(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50379:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(73681).Z)("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return i},nW:function(){return r},pc:function(){return o}});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},35963:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var i=n(52322),r=n(40489),o=n(82027),a=n(38483),l=n(51477),u=n(73063);let s={},c=(0,o.d5)((e,t)=>{let n=(0,a.w)("TimeInput",s,e),{classNames:o,styles:c,unstyled:p,vars:d,withSeconds:m,minTime:f,maxTime:h,value:y,onChange:b,...x}=n,{resolvedClassNames:k,resolvedStyles:V}=(0,l.h)({classNames:o,styles:c,props:n}),I=e=>{if(void 0!==f||void 0!==h){let[t,n,i]=e.split(":").map(Number);if(f){let[e,r,o]=f.split(":").map(Number);if(t<e||t===e&&n<r||m&&t===e&&n===r&&i<o)return -1}if(h){let[e,r,o]=h.split(":").map(Number);if(t>e||t===e&&n>r||m&&t===e&&n===r&&i>o)return 1}}return 0};return(0,i.jsx)(u.M,{classNames:{...k,input:(0,r.Z)("m_468e7eda",k?.input)},styles:V,unstyled:p,ref:t,value:y,...x,step:m?1:60,onChange:b,onBlur:e=>{if(n.onBlur?.(e),void 0!==f||void 0!==h){let t=e.currentTarget.value;if(t){let i=I(t);1===i?(e.currentTarget.value=h,n.onChange?.(e)):-1===i&&(e.currentTarget.value=f,n.onChange?.(e))}}},type:"time",__staticSelector:"TimeInput"})});c.classes=u.M.classes,c.displayName="@mantine/dates/TimeInput"}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=35878)}),_N_E=e.O()}]);
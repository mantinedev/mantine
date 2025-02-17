(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2742],{14413:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-input",function(){return n(29923)}])},29923:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var i=n(31085),r=n(71184),o=n(60670);let a={type:"configurator",component:function(e){return(0,i.jsx)(o.c,{...e})},code:`
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(23232).$7};var l=n(14041),s=n(59544),u=n(22962);let p={type:"code",centered:!0,maxWidth:340,component:function(){let e=(0,l.useRef)(null),t=(0,i.jsx)(u.M,{variant:"subtle",color:"gray",onClick:()=>e.current?.showPicker(),children:(0,i.jsx)(s.A,{size:16,stroke:1.5})});return(0,i.jsx)(o.c,{label:"Click icon to show browser picker",ref:e,rightSection:t})},code:`
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
`},c={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.c,{withSeconds:!0})},code:`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`},d={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.c,{leftSection:(0,i.jsx)(s.A,{size:16,stroke:1.5})})},code:`
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}
`},m={type:"code",centered:!0,maxWidth:340,component:function(){return(0,i.jsx)(o.c,{disabled:!0})},code:`
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`};var f=n(85954),h=n(38215);let y=(0,f.P)(h.XZ.TimeInput);function b(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:l,InputFeatures:s}=t;return n||k("Demo",!0),o||k("GetElementRef",!0),l||k("InputAccessibility",!0),s||k("InputFeatures",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s,{component:"TimeInput",element:"input"}),"\n",(0,i.jsx)(n,{data:a}),"\n",(0,i.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimeInput } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <TimeInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"show-browser-picker",children:"Show browser picker"}),"\n",(0,i.jsxs)(t.p,{children:["You can show browser picker by calling ",(0,i.jsx)(t.code,{children:"showPicker"})," method of input element.\nNote that some browsers (desktop Safari) do not support this feature and the\nmethod will do nothing."]}),"\n",(0,i.jsx)(n,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,i.jsx)(n,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,i.jsx)(n,{data:m}),"\n",(0,i.jsx)(o,{component:"TimeInput",refType:"input",package:"@mantine/dates"}),"\n",(0,i.jsx)(l,{component:"TimeInput",packageName:"@mantine/dates"})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(y,{...e,children:(0,i.jsx)(b,{...e})})}function k(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},59544:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var i=(0,n(73366).A)("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},23232:(e,t,n)=>{"use strict";n.d(t,{$7:()=>o,l$:()=>i,wQ:()=>r});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},60670:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var i=n(31085),r=n(54357),o=n(6754),a=n(29686),l=n(36456),s=n(87059),u={input:"m_468e7eda"};let p={},c=(0,o.P9)((e,t)=>{let n=(0,a.Y)("TimeInput",p,e),{classNames:o,styles:c,unstyled:d,vars:m,withSeconds:f,minTime:h,maxTime:y,value:b,onChange:x,...k}=n,{resolvedClassNames:V,resolvedStyles:I}=(0,l.Y)({classNames:o,styles:c,props:n}),g=e=>{if(void 0!==h||void 0!==y){let[t,n,i]=e.split(":").map(Number);if(h){let[e,r,o]=h.split(":").map(Number);if(t<e||t===e&&n<r||f&&t===e&&n===r&&i<o)return -1}if(y){let[e,r,o]=y.split(":").map(Number);if(t>e||t===e&&n>r||f&&t===e&&n===r&&i>o)return 1}}return 0};return(0,i.jsx)(s.O,{classNames:{...V,input:(0,r.A)(u.input,V?.input)},styles:I,unstyled:d,ref:t,value:b,...k,step:f?1:60,onChange:x,onBlur:e=>{if(n.onBlur?.(e),void 0!==h||void 0!==y){let t=e.currentTarget.value;if(t){let i=g(t);1===i?(e.currentTarget.value=y,n.onChange?.(e)):-1===i&&(e.currentTarget.value=h,n.onChange?.(e))}}},type:"time",__staticSelector:"TimeInput"})});c.classes=s.O.classes,c.displayName="@mantine/dates/TimeInput"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(14413)),_N_E=e.O()}]);
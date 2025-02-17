(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14582],{83941:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text-input",function(){return r(24285)}])},24285:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(31085),i=r(71184),l=r(90275);let o={type:"configurator",component:function(e){return(0,n.jsx)(l.k,{...e,placeholder:"Input placeholder"})},code:`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7};var a=r(32653);let p={type:"code",component:function(){let e=(0,n.jsx)(a.A,{size:16});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.k,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),(0,n.jsx)(l.k,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={16} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`},s={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.k,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(l.k,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},u={type:"code",component:function(){return(0,n.jsx)(l.k,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var c=r(93341);let d=`
import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {{props}}
    />
  );
}
`,m={type:"styles-api",data:c.C,component:function(e){return(0,n.jsx)(l.k,{label:"Label",placeholder:"TextInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(a.A,{size:18}),...e})},code:d,centered:!0,maxWidth:340};var x=r(85954),h=r(38215);let b=(0,x.P)(h.XZ.TextInput);function y(e){let t={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components},{Demo:r,GetElementRef:l,InputAccessibility:a,InputFeatures:c,InputSections:d,StylesApiSelectors:x}=t;return r||I("Demo",!0),l||I("GetElementRef",!0),a||I("InputAccessibility",!0),c||I("InputFeatures",!0),d||I("InputSections",!0),x||I("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(c,{component:"TextInput",element:"input"}),"\n",(0,n.jsx)(r,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <TextInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(d,{component:"TextInput"}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(x,{component:"TextInput"}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(l,{component:"TextInput",refType:"input"}),"\n",(0,n.jsx)(a,{component:"TextInput"})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(b,{...e,children:(0,n.jsx)(y,{...e})})}function I(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var n=(0,r(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,t,r)=>{"use strict";r.d(t,{$7:()=>l,l$:()=>n,wQ:()=>i});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(83941)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92537],{63755:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text-input",function(){return n(63193)}])},63193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(52322),i=n(45392),o=n(74770);let l={type:"configurator",component:function(e){return(0,r.jsx)(o.o,{...e,placeholder:"Input placeholder"})},code:`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc};var a=n(89868),u=n(58898);let p={type:"code",component:function(){let e=(0,r.jsx)(a.Z,{style:{width:(0,u.h)(16),height:(0,u.h)(16)}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.o,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),(0,r.jsx)(o.o,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"})]})},maxWidth:340,centered:!0,code:`
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
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
`},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.o,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,r.jsx)(o.o,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},c={type:"code",component:function(){return(0,r.jsx)(o.o,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var d=n(89979);let m=`
import { IconAt } from '@tabler/icons-react';
import { TextInput, rem } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`,h={type:"styles-api",data:d.G,component:function(e){return(0,r.jsx)(o.o,{label:"Label",placeholder:"TextInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(a.Z,{style:{width:(0,u.h)(18),height:(0,u.h)(18)}}),...e})},code:m,centered:!0,maxWidth:340};var x=n(25071),f=n(15019);let b=(0,x.A)(f.us.TextInput);function y(e){let t={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:a,InputFeatures:u,InputSections:d,StylesApiSelectors:m}=t;return n||V("Demo",!0),o||V("GetElementRef",!0),a||V("InputAccessibility",!0),u||V("InputFeatures",!0),d||V("InputSections",!0),m||V("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(u,{component:"TextInput",element:"input"}),"\n",(0,r.jsx)(n,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <TextInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(d,{component:"TextInput"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(m,{component:"TextInput"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(o,{component:"TextInput",refType:"input"}),"\n",(0,r.jsx)(a,{component:"TextInput"})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,{...e,children:(0,r.jsx)(y,{...e})})}function V(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=63755)}),_N_E=e.O()}]);
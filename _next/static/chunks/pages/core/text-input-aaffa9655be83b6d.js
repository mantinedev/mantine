(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2537],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},47749:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text-input",function(){return n(62603)}])},62603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(24246),i=n(71670),l=n(3916),o=n(30289),a=n(27378),u=n(7033),p=n(77481);let c=`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,s={type:"configurator",component:function(e){return a.createElement(u.o,{...e,placeholder:"Input placeholder"})},code:c,centered:!0,maxWidth:340,controls:p.pc};var d=n(71078),m=n(93693);let h=`
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
`,f={type:"code",component:function(){let e=a.createElement(m.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)}});return a.createElement(a.Fragment,null,a.createElement(u.o,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),a.createElement(u.o,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"}))},maxWidth:340,centered:!0,code:h},b=`
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
`,y={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(u.o,{label:"Boolean error",placeholder:"Boolean error",error:!0}),a.createElement(u.o,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:b},x=`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,I={type:"code",component:function(){return a.createElement(u.o,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:x};var V=n(52176);let g=`
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
`,E={type:"styles-api",data:V.G,component:function(e){return a.createElement(u.o,{label:"Label",placeholder:"TextInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:a.createElement(m.Z,{style:{width:(0,d.h)(18),height:(0,d.h)(18)}}),...e})},code:g,centered:!0,maxWidth:340},T=(0,l.A)(o.us.TextInput);function v(e){let t={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...e.components},{Demo:n,GetElementRef:l,InputAccessibility:o,InputFeatures:a,InputSections:u,StylesApiSelectors:p}=t;return n||w("Demo",!0),l||w("GetElementRef",!0),o||w("InputAccessibility",!0),a||w("InputFeatures",!0),u||w("InputSections",!0),p||w("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{component:"TextInput",element:"input"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <TextInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(u,{component:"TextInput"}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(p,{component:"TextInput"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(l,{component:"TextInput",refType:"input"}),"\n",(0,r.jsx)(o,{component:"TextInput"})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(T,{...e,children:(0,r.jsx)(v,{...e})})}function w(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=47749)}),_N_E=e.O()}]);
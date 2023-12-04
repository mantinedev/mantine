(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{4068:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/native-select",function(){return n(11581)}])},11581:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var a=n(24246),r=n(71670),l=n(3916),i=n(30289),o=n(27378),c=n(28764),s=n(77481);let d=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,u={type:"configurator",component:function(e){return o.createElement(c.p,{...e,data:["React","Angular","Vue"]})},code:d,centered:!0,maxWidth:340,controls:s.pc},p=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`,m={type:"code",component:function(){return o.createElement(c.p,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:p},h=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`,v={type:"code",component:function(){return o.createElement(c.p,{label:"With children options"},o.createElement("optgroup",{label:"Frontend libraries"},o.createElement("option",{value:"react"},"React"),o.createElement("option",{value:"angular"},"Angular"),o.createElement("option",{value:"vue",disabled:!0},"Vue")),o.createElement("optgroup",{label:"Backend libraries"},o.createElement("option",{value:"express"},"Express"),o.createElement("option",{value:"koa"},"Koa"),o.createElement("option",{value:"django"},"Django")))},maxWidth:340,centered:!0,code:h};var g=n(71078),b=(0,n(54764).Z)("hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),x=n(62283);let f=`
import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`,j={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(c.p,{leftSection:o.createElement(b,{style:{width:(0,g.h)(16),height:(0,g.h)(16)}}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),o.createElement(c.p,{rightSection:o.createElement(x.Z,{style:{width:(0,g.h)(16),height:(0,g.h)(16)}}),label:"Right section",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:f},y=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`,S={type:"code",component:function(){return o.createElement(c.p,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:y},N=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`,V={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(c.p,{error:!0,label:"Boolean error",data:["React","Angular"]}),o.createElement(c.p,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:N};var E=n(59325);let A=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`,R={type:"styles-api",data:E.c,component:function(e){return o.createElement(c.p,{...e,data:["React","Angular"],label:"NativeSelect label",description:"NativeSelect description",error:"NativeSelect error",withAsterisk:!0})},centered:!0,maxWidth:340,code:A},w=(0,l.A)(i.us.NativeSelect);function k(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n,InputAccessibility:l,InputFeatures:i,InputSections:o,StylesApiSelectors:c}=t;return n||I("Demo",!0),l||I("InputAccessibility",!0),i||I("InputFeatures",!0),o||I("InputSections",!0),c||I("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(i,{component:"NativeSelect",element:"select"}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"NativeSelect"})," allows passing options in two ways:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data"})," prop array"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"children"})," prop with ",(0,a.jsx)(t.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if ",(0,a.jsx)(t.code,{children:"children"})," is used, ",(0,a.jsx)(t.code,{children:"data"})," will be ignored."]}),"\n",(0,a.jsx)(t.h3,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Array of objects with ",(0,a.jsx)(t.code,{children:"label"}),", ",(0,a.jsx)(t.code,{children:"value"})," and ",(0,a.jsx)(t.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'angular' },\n        { label: 'Svelte', value: 'svelte', disabled: true },\n        { label: 'Vue', value: 'vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: ['React', 'Angular', 'Svelte', 'Vue'],\n        },\n        {\n          group: 'Backend libraries',\n          items: ['Express', 'Koa', 'Django'],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: [\n            { label: 'React', value: 'react' },\n            { label: 'Angular', value: 'angular' },\n            { label: 'Vue', value: 'vue', disabled: true },\n          ],\n        },\n        {\n          group: 'Backend libraries',\n          items: [\n            { label: 'Express', value: 'express' },\n            { label: 'Koa', value: 'koa' },\n            { label: 'Django', value: 'django' },\n          ],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Example of ",(0,a.jsx)(t.code,{children:"data"})," prop with array of grouped options:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h3,{id:"children-options",children:"children options"}),"\n",(0,a.jsxs)(t.p,{children:["To add options with ",(0,a.jsx)(t.code,{children:"children"})," prop, use ",(0,a.jsx)(t.code,{children:"option"})," elements to add options and ",(0,a.jsx)(t.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(o,{component:"NativeSelect"}),"\n",(0,a.jsx)(n,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:S}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(n,{data:V}),"\n",(0,a.jsx)(c,{component:"NativeSelect"}),"\n",(0,a.jsx)(n,{data:R}),"\n",(0,a.jsx)(l,{component:"NativeSelect"})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(w,{...e,children:(0,a.jsx)(k,{...e})})}function I(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return a},nW:function(){return r},pc:function(){return l}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=4068)}),_N_E=e.O()}]);
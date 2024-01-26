(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10585],{4068:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/native-select",function(){return n(87068)}])},87068:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(24246),r=n(71670),l=n(27378),o=n(28764),i=n(77481);let c=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,s={type:"configurator",component:function(e){return l.createElement(o.p,{...e,data:["React","Angular","Vue"]})},code:c,centered:!0,maxWidth:340,controls:i.pc},u=`
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
`,d={type:"code",component:function(){return l.createElement(o.p,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:u},p=`
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
`,m={type:"code",component:function(){return l.createElement(o.p,{label:"With children options"},l.createElement("optgroup",{label:"Frontend libraries"},l.createElement("option",{value:"react"},"React"),l.createElement("option",{value:"angular"},"Angular"),l.createElement("option",{value:"vue",disabled:!0},"Vue")),l.createElement("optgroup",{label:"Backend libraries"},l.createElement("option",{value:"express"},"Express"),l.createElement("option",{value:"koa"},"Koa"),l.createElement("option",{value:"django"},"Django")))},maxWidth:340,centered:!0,code:p},h=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With dividers">
      <option>Select library</option>

      <hr />

      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </optgroup>

      <hr />

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`,v={type:"code",component:function(){return l.createElement(o.p,{label:"With dividers"},l.createElement("option",null,"Select library"),l.createElement("hr",null),l.createElement("optgroup",{label:"Frontend libraries"},l.createElement("option",{value:"react"},"React"),l.createElement("option",{value:"angular"},"Angular"),l.createElement("option",{value:"vue"},"Vue")),l.createElement("hr",null),l.createElement("optgroup",{label:"Backend libraries"},l.createElement("option",{value:"express"},"Express"),l.createElement("option",{value:"koa"},"Koa"),l.createElement("option",{value:"django"},"Django")))},maxWidth:340,centered:!0,code:h};var g=(0,n(54764).Z)("hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),b=n(62283),x=n(71078);let j=`
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
`,f={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(o.p,{leftSection:l.createElement(g,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),l.createElement(o.p,{rightSection:l.createElement(b.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),label:"Right section",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:j},y=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`,S={type:"code",component:function(){return l.createElement(o.p,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:y},N=`
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
`,E={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(o.p,{error:!0,label:"Boolean error",data:["React","Angular"]}),l.createElement(o.p,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:N};var V=n(59325);let A=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`,k={type:"styles-api",data:V.c,component:function(e){return l.createElement(o.p,{...e,data:["React","Angular"],label:"NativeSelect label",description:"NativeSelect description",error:"NativeSelect error",withAsterisk:!0})},centered:!0,maxWidth:340,code:A};var R=n(3916),w=n(54568);let D=(0,R.A)(w.us.NativeSelect);function W(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n,InputAccessibility:l,InputFeatures:o,InputSections:i,StylesApiSelectors:c}=t;return n||F("Demo",!0),l||F("InputAccessibility",!0),o||F("InputFeatures",!0),i||F("InputSections",!0),c||F("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(o,{component:"NativeSelect",element:"select"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"NativeSelect"})," allows passing options in two ways:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data"})," prop array"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"children"})," prop with ",(0,a.jsx)(t.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if ",(0,a.jsx)(t.code,{children:"children"})," is used, ",(0,a.jsx)(t.code,{children:"data"})," will be ignored."]}),"\n",(0,a.jsx)(t.h3,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Array of objects with ",(0,a.jsx)(t.code,{children:"label"}),", ",(0,a.jsx)(t.code,{children:"value"})," and ",(0,a.jsx)(t.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'angular' },\n        { label: 'Svelte', value: 'svelte', disabled: true },\n        { label: 'Vue', value: 'vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: ['React', 'Angular', 'Svelte', 'Vue'],\n        },\n        {\n          group: 'Backend libraries',\n          items: ['Express', 'Koa', 'Django'],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: [\n            { label: 'React', value: 'react' },\n            { label: 'Angular', value: 'angular' },\n            { label: 'Vue', value: 'vue', disabled: true },\n          ],\n        },\n        {\n          group: 'Backend libraries',\n          items: [\n            { label: 'Express', value: 'express' },\n            { label: 'Koa', value: 'koa' },\n            { label: 'Django', value: 'django' },\n          ],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Example of ",(0,a.jsx)(t.code,{children:"data"})," prop with array of grouped options:"]}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h3,{id:"children-options",children:"children options"}),"\n",(0,a.jsxs)(t.p,{children:["To add options with ",(0,a.jsx)(t.code,{children:"children"})," prop, use ",(0,a.jsx)(t.code,{children:"option"})," elements to add options and ",(0,a.jsx)(t.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"with-dividers",children:"With dividers"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"hr"})," tags to add dividers between options:"]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(i,{component:"NativeSelect"}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:S}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(n,{data:E}),"\n",(0,a.jsx)(c,{component:"NativeSelect"}),"\n",(0,a.jsx)(n,{data:k}),"\n",(0,a.jsx)(l,{component:"NativeSelect"})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(D,{...e,children:(0,a.jsx)(W,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return a},nW:function(){return r},pc:function(){return l}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=4068)}),_N_E=e.O()}]);
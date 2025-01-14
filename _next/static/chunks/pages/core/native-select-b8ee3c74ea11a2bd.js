(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10585],{98703:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/native-select",function(){return t(87803)}])},87803:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var a=t(52322),r=t(45392),l=t(12189);let i={type:"configurator",component:function(e){return(0,a.jsx)(l.p,{...e,data:["React","Angular","Vue"]})},code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,centered:!0,maxWidth:340,controls:t(76528).pc},o={type:"code",component:function(){return(0,a.jsx)(l.p,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:`
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
`},s={type:"code",component:function(){return(0,a.jsxs)(l.p,{label:"With children options",children:[(0,a.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,a.jsx)("option",{value:"react",children:"React"}),(0,a.jsx)("option",{value:"angular",children:"Angular"}),(0,a.jsx)("option",{value:"vue",disabled:!0,children:"Vue"})]}),(0,a.jsxs)("optgroup",{label:"Backend libraries",children:[(0,a.jsx)("option",{value:"express",children:"Express"}),(0,a.jsx)("option",{value:"koa",children:"Koa"}),(0,a.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
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
`},c={type:"code",component:function(){return(0,a.jsxs)(l.p,{label:"With dividers",children:[(0,a.jsx)("option",{children:"Select library"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,a.jsx)("option",{value:"react",children:"React"}),(0,a.jsx)("option",{value:"angular",children:"Angular"}),(0,a.jsx)("option",{value:"vue",children:"Vue"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("optgroup",{label:"Backend libraries",children:[(0,a.jsx)("option",{value:"express",children:"Express"}),(0,a.jsx)("option",{value:"koa",children:"Koa"}),(0,a.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
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
`};var d=(0,t(73681).Z)("outline","hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),u=t(92536);let p={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.p,{leftSection:(0,a.jsx)(d,{size:16}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),(0,a.jsx)(l.p,{rightSection:(0,a.jsx)(u.Z,{size:16}),label:"Right section",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash size={16} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown size={16} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`},h={type:"code",component:function(){return(0,a.jsx)(l.p,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`},v={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.p,{error:!0,label:"Boolean error",data:["React","Angular"]}),(0,a.jsx)(l.p,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
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
`};var x=t(55056);let m=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`,g={type:"styles-api",data:x.c,component:function(e){return(0,a.jsx)(l.p,{...e,data:["React","Angular"],label:"NativeSelect label",description:"NativeSelect description",error:"NativeSelect error",withAsterisk:!0})},centered:!0,maxWidth:340,code:m};var b=t(54078),j=t(15019);let f=(0,b.A)(j.us.NativeSelect);function y(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t,InputAccessibility:l,InputFeatures:d,InputSections:u,StylesApiSelectors:x}=n;return t||N("Demo",!0),l||N("InputAccessibility",!0),d||N("InputFeatures",!0),u||N("InputSections",!0),x||N("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(d,{component:"NativeSelect",element:"select"}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NativeSelect"})," allows passing options in two ways:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"})," prop array"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"children"})," prop with ",(0,a.jsx)(n.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if ",(0,a.jsx)(n.code,{children:"children"})," is used, ",(0,a.jsx)(n.code,{children:"data"})," will be ignored."]}),"\n",(0,a.jsx)(n.h3,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Array of objects with ",(0,a.jsx)(n.code,{children:"label"}),", ",(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'angular' },\n        { label: 'Svelte', value: 'svelte', disabled: true },\n        { label: 'Vue', value: 'vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: ['React', 'Angular', 'Svelte', 'Vue'],\n        },\n        {\n          group: 'Backend libraries',\n          items: ['Express', 'Koa', 'Django'],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: [\n            { label: 'React', value: 'react' },\n            { label: 'Angular', value: 'angular' },\n            { label: 'Vue', value: 'vue', disabled: true },\n          ],\n        },\n        {\n          group: 'Backend libraries',\n          items: [\n            { label: 'Express', value: 'express' },\n            { label: 'Koa', value: 'koa' },\n            { label: 'Django', value: 'django' },\n          ],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of ",(0,a.jsx)(n.code,{children:"data"})," prop with array of grouped options:"]}),"\n",(0,a.jsx)(t,{data:o}),"\n",(0,a.jsx)(n.h3,{id:"children-options",children:"children options"}),"\n",(0,a.jsxs)(n.p,{children:["To add options with ",(0,a.jsx)(n.code,{children:"children"})," prop, use ",(0,a.jsx)(n.code,{children:"option"})," elements to add options and ",(0,a.jsx)(n.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,a.jsx)(t,{data:s}),"\n",(0,a.jsx)(n.h2,{id:"with-dividers",children:"With dividers"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"hr"})," tags to add dividers between options:"]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(u,{component:"NativeSelect"}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(t,{data:v}),"\n",(0,a.jsx)(x,{component:"NativeSelect"}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(l,{component:"NativeSelect"})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(f,{...e,children:(0,a.jsx)(y,{...e})})}function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,n,t){"use strict";t.d(n,{Mt:function(){return a},nW:function(){return r},pc:function(){return l}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=98703)}),_N_E=e.O()}]);
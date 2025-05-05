(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74958],{93061:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/native-select",function(){return a(52523)}])},52523:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var n=a(31085),l=a(71184),r=a(73199);let i={type:"configurator",component:function(e){return(0,n.jsx)(r.m,{...e,data:["React","Angular","Vue"]})},code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,centered:!0,maxWidth:340,controls:a(23232).$7},o={type:"code",component:function(){return(0,n.jsx)(r.m,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:`
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
`},s={type:"code",component:function(){return(0,n.jsxs)(r.m,{label:"With children options",children:[(0,n.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,n.jsx)("option",{value:"react",children:"React"}),(0,n.jsx)("option",{value:"angular",children:"Angular"}),(0,n.jsx)("option",{value:"vue",disabled:!0,children:"Vue"})]}),(0,n.jsxs)("optgroup",{label:"Backend libraries",children:[(0,n.jsx)("option",{value:"express",children:"Express"}),(0,n.jsx)("option",{value:"koa",children:"Koa"}),(0,n.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
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
`},d={type:"code",component:function(){return(0,n.jsxs)(r.m,{label:"With dividers",children:[(0,n.jsx)("option",{children:"Select library"}),(0,n.jsx)("hr",{}),(0,n.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,n.jsx)("option",{value:"react",children:"React"}),(0,n.jsx)("option",{value:"angular",children:"Angular"}),(0,n.jsx)("option",{value:"vue",children:"Vue"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("optgroup",{label:"Backend libraries",children:[(0,n.jsx)("option",{value:"express",children:"Express"}),(0,n.jsx)("option",{value:"koa",children:"Koa"}),(0,n.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
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
`};var c=(0,a(73366).A)("outline","hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),p=a(24551);let u={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.m,{leftSection:(0,n.jsx)(c,{size:16}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),(0,n.jsx)(r.m,{rightSection:(0,n.jsx)(p.A,{size:16}),label:"Right section",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
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
`},h={type:"code",component:function(){return(0,n.jsx)(r.m,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`},v={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.m,{error:!0,label:"Boolean error",data:["React","Angular"]}),(0,n.jsx)(r.m,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
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
`};var g=a(84781);let m=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`,x={type:"styles-api",data:g.u,component:function(e){return(0,n.jsx)(r.m,{...e,data:["React","Angular"],label:"NativeSelect label",description:"NativeSelect description",error:"NativeSelect error",withAsterisk:!0})},centered:!0,maxWidth:340,code:m};var j=a(18675),b=a(20017);let y=(0,j.P)(b.XZ.NativeSelect);function f(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:a,InputAccessibility:r,InputFeatures:c,InputSections:p,StylesApiSelectors:g}=t;return a||S("Demo",!0),r||S("InputAccessibility",!0),c||S("InputFeatures",!0),p||S("InputSections",!0),g||S("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(c,{component:"NativeSelect",element:"select"}),"\n",(0,n.jsx)(a,{data:i}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"NativeSelect"})," allows passing options in two ways:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data"})," prop array"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"children"})," prop with ",(0,n.jsx)(t.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that if ",(0,n.jsx)(t.code,{children:"children"})," is used, ",(0,n.jsx)(t.code,{children:"data"})," will be ignored."]}),"\n",(0,n.jsx)(t.h3,{id:"data-prop",children:"data prop"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Array of objects with ",(0,n.jsx)(t.code,{children:"label"}),", ",(0,n.jsx)(t.code,{children:"value"})," and ",(0,n.jsx)(t.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'angular' },\n        { label: 'Svelte', value: 'svelte', disabled: true },\n        { label: 'Vue', value: 'vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: ['React', 'Angular', 'Svelte', 'Vue'],\n        },\n        {\n          group: 'Backend libraries',\n          items: ['Express', 'Koa', 'Django'],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: [\n            { label: 'React', value: 'react' },\n            { label: 'Angular', value: 'angular' },\n            { label: 'Vue', value: 'vue', disabled: true },\n          ],\n        },\n        {\n          group: 'Backend libraries',\n          items: [\n            { label: 'Express', value: 'express' },\n            { label: 'Koa', value: 'koa' },\n            { label: 'Django', value: 'django' },\n          ],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Example of ",(0,n.jsx)(t.code,{children:"data"})," prop with array of grouped options:"]}),"\n",(0,n.jsx)(a,{data:o}),"\n",(0,n.jsx)(t.h3,{id:"children-options",children:"children options"}),"\n",(0,n.jsxs)(t.p,{children:["To add options with ",(0,n.jsx)(t.code,{children:"children"})," prop, use ",(0,n.jsx)(t.code,{children:"option"})," elements to add options and ",(0,n.jsx)(t.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,n.jsx)(a,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"with-dividers",children:"With dividers"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"hr"})," tags to add dividers between options:"]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(p,{component:"NativeSelect"}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(a,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(a,{data:v}),"\n",(0,n.jsx)(g,{component:"NativeSelect"}),"\n",(0,n.jsx)(a,{data:x}),"\n",(0,n.jsx)(r,{component:"NativeSelect"})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,{...e,children:(0,n.jsx)(f,{...e})})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23232:(e,t,a)=>{"use strict";a.d(t,{$7:()=>r,l$:()=>n,wQ:()=>l});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(93061)),_N_E=e.O()}]);
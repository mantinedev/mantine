(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50713],{62635:(e,a,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return o(5645)}])},5645:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>A});var n=o(31085),t=o(71184),i=o(46386);let r={type:"configurator",component:function(e){return(0,n.jsx)(i.s.Group,{name:"demo",defaultValue:"react",children:(0,n.jsx)(i.s,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var l=o(75390);let d={type:"code",component:function(){return(0,n.jsxs)(l.B,{children:[(0,n.jsx)(i.s,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,n.jsx)(i.s,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,n.jsx)(i.s,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,n.jsx)(i.s,{disabled:!0,label:"Disabled radio"}),(0,n.jsx)(i.s,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
`};var c=o(5583);let s={type:"code",centered:!0,component:function(){return(0,n.jsx)(i.s,{icon:c.S,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},h={type:"code",centered:!0,component:function(){return(0,n.jsx)(i.s,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`};var u=o(56051);let p={type:"code",centered:!0,component:function(){return(0,n.jsxs)(u.Y,{children:[(0,n.jsx)(i.s,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,n.jsx)(i.s,{disabled:!0,label:"Angular",value:"nu"}),(0,n.jsx)(i.s,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`};var m=o(2912);let v={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.m,{label:"Radio with tooltip",children:(0,n.jsx)(i.s,{label:"Tooltip on radio only"})}),(0,n.jsx)(m.m,{label:"Radio with tooltip",refProp:"rootRef",children:(0,n.jsx)(i.s,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0},b={type:"configurator",component:function(e){return(0,n.jsx)(i.s.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,n.jsxs)(u.Y,{mt:"xs",children:[(0,n.jsx)(i.s,{value:"react",label:"React"}),(0,n.jsx)(i.s,{value:"svelte",label:"Svelte"}),(0,n.jsx)(i.s,{value:"ng",label:"Angular"}),(0,n.jsx)(i.s,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var k=o(75393),x=o(4448),y=o(5441),g=o(5147);let j=`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
`,f={type:"styles-api",data:g.qT,component:function(e){return(0,n.jsx)(i.s,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:j,centered:!0};var R=o(18675),M=o(20017);let C=(0,R.P)(M.XZ.Radio);function w(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Demo:o,GetElementRef:i,StylesApiSelectors:l,WrapperProps:c}=a;return o||V("Demo",!0),i||V("GetElementRef",!0),l||V("StylesApiSelectors",!0),c||V("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:r}),"\n",(0,n.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"states",children:"States"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(a.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,n.jsx)(o,{data:s}),"\n",(0,n.jsx)(a.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,n.jsx)(o,{data:h}),"\n",(0,n.jsx)(a.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(a.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,n.jsxs)(a.p,{children:["By default, radio input and label have ",(0,n.jsx)(a.code,{children:"cursor: default"})," (same as native ",(0,n.jsx)(a.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,n.jsx)(a.code,{children:"cursorType"})," on ",(0,n.jsx)(a.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,n.jsxs)(a.p,{children:["You can change target element to which tooltip is attached with ",(0,n.jsx)(a.code,{children:"refProp"}),":"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["If ",(0,n.jsx)(a.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,n.jsxs)(a.li,{children:["If ",(0,n.jsx)(a.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,n.jsx)(o,{data:v}),"\n",(0,n.jsx)(c,{component:"Radio"}),"\n",(0,n.jsx)(a.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(a.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"radioindicator",children:"Radio.Indicator"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Radio.Indicator"})," looks exactly the same as ",(0,n.jsx)(a.code,{children:"Radio"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of radio state. You\ncan use it in any place where you need to display radio state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,n.jsxs)(a.p,{children:["Note that ",(0,n.jsx)(a.code,{children:"Radio.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for ",(0,n.jsx)(a.code,{children:"Radio"})," component."]}),"\n",(0,n.jsx)(o,{data:k.q}),"\n",(0,n.jsx)(a.h2,{id:"radiocard-component",children:"Radio.Card component"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Radio.Card"})," component can be used as a replacement for ",(0,n.jsx)(a.code,{children:"Radio"})," to build custom\ncards/buttons/other things that work as radios. The root element of the component\nhas ",(0,n.jsx)(a.code,{children:'role="radio"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,n.jsx)(a.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,n.jsx)(o,{data:x.N}),"\n",(0,n.jsxs)(a.p,{children:["You can use ",(0,n.jsx)(a.code,{children:"Radio.Card"})," with ",(0,n.jsx)(a.code,{children:"Radio.Group"})," the same way as ",(0,n.jsx)(a.code,{children:"Radio"})," component:"]}),"\n",(0,n.jsx)(o,{data:y.k}),"\n",(0,n.jsx)(i,{component:"Radio",refType:"input"}),"\n",(0,n.jsx)(l,{component:"Radio"}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"aria-label"})," or ",(0,n.jsx)(a.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(C,{...e,children:(0,n.jsx)(w,{...e})})}function V(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,a,o)=>{"use strict";o.d(a,{A:()=>n});var n=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var a=a=>e(e.s=a);e.O(0,[18675,89792,90636,46593,38792],()=>a(62635)),_N_E=e.O()}]);
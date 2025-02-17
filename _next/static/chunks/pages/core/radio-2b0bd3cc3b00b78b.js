(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50713],{62635:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return n(5645)}])},5645:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>T});var a=n(31085),t=n(71184),i=n(46386);let r={type:"configurator",component:function(e){return(0,a.jsx)(i.s.Group,{name:"demo",defaultValue:"react",children:(0,a.jsx)(i.s,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var l=n(75390);let d={type:"code",component:function(){return(0,a.jsxs)(l.B,{children:[(0,a.jsx)(i.s,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,a.jsx)(i.s,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,a.jsx)(i.s,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,a.jsx)(i.s,{disabled:!0,label:"Disabled radio"}),(0,a.jsx)(i.s,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
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
`};var c=n(5583);let s={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.s,{icon:c.S,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},u={type:"code",centered:!0,component:function(){return(0,a.jsx)(i.s,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
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
`};var h=n(56051);let p={type:"code",centered:!0,component:function(){return(0,a.jsxs)(h.Y,{children:[(0,a.jsx)(i.s,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,a.jsx)(i.s,{disabled:!0,label:"Angular",value:"nu"}),(0,a.jsx)(i.s,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
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
`};var m=n(2912);let b={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.m,{label:"Radio with tooltip",children:(0,a.jsx)(i.s,{label:"Tooltip on radio only"})}),(0,a.jsx)(m.m,{label:"Radio with tooltip",refProp:"rootRef",children:(0,a.jsx)(i.s,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
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
`,centered:!0},x={type:"configurator",component:function(e){return(0,a.jsx)(i.s.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,a.jsxs)(h.Y,{mt:"xs",children:[(0,a.jsx)(i.s,{value:"react",label:"React"}),(0,a.jsx)(i.s,{value:"svelte",label:"Svelte"}),(0,a.jsx)(i.s,{value:"ng",label:"Angular"}),(0,a.jsx)(i.s,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
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
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var j=n(75393),f=n(4448),R=n(5441),v=n(5147);let k=`
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
`,y={type:"styles-api",data:v.qT,component:function(e){return(0,a.jsx)(i.s,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:k,centered:!0};var g=n(85954),C=n(38215);let V=(0,g.P)(C.XZ.Radio);function w(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Demo:n,GetElementRef:i,StylesApiSelectors:l,WrapperProps:c}=o;return n||D("Demo",!0),i||D("GetElementRef",!0),l||D("StylesApiSelectors",!0),c||D("WrapperProps",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:r}),"\n",(0,a.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(o.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(o.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(o.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,a.jsxs)(o.p,{children:["By default, radio input and label have ",(0,a.jsx)(o.code,{children:"cursor: default"})," (same as native ",(0,a.jsx)(o.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,a.jsx)(o.code,{children:"cursorType"})," on ",(0,a.jsx)(o.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,a.jsxs)(o.p,{children:["You can change target element to which tooltip is attached with ",(0,a.jsx)(o.code,{children:"refProp"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,a.jsx)(n,{data:b}),"\n",(0,a.jsx)(c,{component:"Radio"}),"\n",(0,a.jsx)(o.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,a.jsx)(n,{data:x}),"\n",(0,a.jsx)(o.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(o.h2,{id:"radioindicator",children:"Radio.Indicator"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"Radio.Indicator"})," looks exactly the same as ",(0,a.jsx)(o.code,{children:"Radio"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of radio state. You\ncan use it in any place where you need to display radio state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,a.jsxs)(o.p,{children:["Note that ",(0,a.jsx)(o.code,{children:"Radio.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for ",(0,a.jsx)(o.code,{children:"Radio"})," component."]}),"\n",(0,a.jsx)(n,{data:j.q}),"\n",(0,a.jsx)(o.h2,{id:"radiocard-component",children:"Radio.Card component"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"Radio.Card"})," component can be used as a replacement for ",(0,a.jsx)(o.code,{children:"Radio"})," to build custom\ncards/buttons/other things that work as radios. The root element of the component\nhas ",(0,a.jsx)(o.code,{children:'role="radio"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,a.jsx)(o.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,a.jsx)(n,{data:f.N}),"\n",(0,a.jsxs)(o.p,{children:["You can use ",(0,a.jsx)(o.code,{children:"Radio.Card"})," with ",(0,a.jsx)(o.code,{children:"Radio.Group"})," the same way as ",(0,a.jsx)(o.code,{children:"Radio"})," component:"]}),"\n",(0,a.jsx)(n,{data:R.k}),"\n",(0,a.jsx)(i,{component:"Radio",refType:"input"}),"\n",(0,a.jsx)(l,{component:"Radio"}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(o.p,{children:["Set ",(0,a.jsx)(o.code,{children:"aria-label"})," or ",(0,a.jsx)(o.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(V,{...e,children:(0,a.jsx)(w,{...e})})}function D(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,39699,68831,89792,90636,46593,38792],()=>o(62635)),_N_E=e.O()}]);
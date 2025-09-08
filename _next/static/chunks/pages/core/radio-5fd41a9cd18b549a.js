(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50713],{1798:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},3e3:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>A});var o=t(6029),n=t(16285),i=t(40025);let l={type:"configurator",component:function(e){return(0,o.jsx)(i.s.Group,{name:"demo",defaultValue:"react",children:(0,o.jsx)(i.s,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var r=t(72139);let d={type:"code",component:function(){return(0,o.jsxs)(r.B,{children:[(0,o.jsx)(i.s,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,o.jsx)(i.s,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,o.jsx)(i.s,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,o.jsx)(i.s,{disabled:!0,label:"Disabled radio"}),(0,o.jsx)(i.s,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
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
`};var c=t(98538);let s={type:"code",centered:!0,component:function(){return(0,o.jsx)(i.s,{icon:c.S,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},h={type:"code",centered:!0,component:function(){return(0,o.jsx)(i.s,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
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
`};var u=t(57414);let p={type:"code",centered:!0,component:function(){return(0,o.jsxs)(u.Y,{children:[(0,o.jsx)(i.s,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,o.jsx)(i.s,{disabled:!0,label:"Angular",value:"nu"}),(0,o.jsx)(i.s,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
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
`};var m=t(70304);let v={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.m,{label:"Radio with tooltip",children:(0,o.jsx)(i.s,{label:"Tooltip on radio only"})}),(0,o.jsx)(m.m,{label:"Radio with tooltip",refProp:"rootRef",children:(0,o.jsx)(i.s,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
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
`,centered:!0},b={type:"configurator",component:function(e){return(0,o.jsx)(i.s.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,o.jsxs)(u.Y,{mt:"xs",children:[(0,o.jsx)(i.s,{value:"react",label:"React"}),(0,o.jsx)(i.s,{value:"svelte",label:"Svelte"}),(0,o.jsx)(i.s,{value:"ng",label:"Angular"}),(0,o.jsx)(i.s,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
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
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var k=t(61400),x=t(19917),y=t(58840),g=t(83198);let j=`
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
`,f={type:"styles-api",data:g.qT,component:function(e){return(0,o.jsx)(i.s,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:j,centered:!0};var R=t(38547),M=t(5262);let C=(0,R.P)(M.XZ.Radio);function w(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:t,GetElementRef:i,StylesApiSelectors:r,WrapperProps:c}=a;return t||V("Demo",!0),i||V("GetElementRef",!0),r||V("StylesApiSelectors",!0),c||V("WrapperProps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(a.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"states",children:"States"}),"\n",(0,o.jsx)(t,{data:d}),"\n",(0,o.jsx)(a.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,o.jsx)(t,{data:s}),"\n",(0,o.jsx)(a.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(a.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(a.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,o.jsxs)(a.p,{children:["By default, radio input and label have ",(0,o.jsx)(a.code,{children:"cursor: default"})," (same as native ",(0,o.jsx)(a.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,o.jsx)(a.code,{children:"cursorType"})," on ",(0,o.jsx)(a.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,o.jsxs)(a.p,{children:["You can change target element to which tooltip is attached with ",(0,o.jsx)(a.code,{children:"refProp"}),":"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["If ",(0,o.jsx)(a.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,o.jsxs)(a.li,{children:["If ",(0,o.jsx)(a.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsx)(c,{component:"Radio"}),"\n",(0,o.jsx)(a.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(a.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,o.jsx)(a.h2,{id:"radioindicator",children:"Radio.Indicator"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"Radio.Indicator"})," looks exactly the same as ",(0,o.jsx)(a.code,{children:"Radio"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of radio state. You\ncan use it in any place where you need to display radio state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,o.jsxs)(a.p,{children:["Note that ",(0,o.jsx)(a.code,{children:"Radio.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for ",(0,o.jsx)(a.code,{children:"Radio"})," component."]}),"\n",(0,o.jsx)(t,{data:k.q}),"\n",(0,o.jsx)(a.h2,{id:"radiocard-component",children:"Radio.Card component"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"Radio.Card"})," component can be used as a replacement for ",(0,o.jsx)(a.code,{children:"Radio"})," to build custom\ncards/buttons/other things that work as radios. The root element of the component\nhas ",(0,o.jsx)(a.code,{children:'role="radio"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,o.jsx)(a.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,o.jsx)(t,{data:x.N}),"\n",(0,o.jsxs)(a.p,{children:["You can use ",(0,o.jsx)(a.code,{children:"Radio.Card"})," with ",(0,o.jsx)(a.code,{children:"Radio.Group"})," the same way as ",(0,o.jsx)(a.code,{children:"Radio"})," component:"]}),"\n",(0,o.jsx)(t,{data:y.k}),"\n",(0,o.jsx)(i,{component:"Radio",refType:"input"}),"\n",(0,o.jsx)(r,{component:"Radio"}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"aria-label"})," or ",(0,o.jsx)(a.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(C,{...e,children:(0,o.jsx)(w,{...e})})}function V(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4523:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return t(3e3)}])},6620:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});let o=(0,t(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,60973,90636,46593,38792],()=>e(e.s=4523)),_N_E=e.O()}]);
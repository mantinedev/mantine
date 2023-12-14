(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8872],{83225:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return n(56511)}])},56511:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return D}});var a=n(24246),t=n(71670),r=n(27378),l=n(75014);let i=`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,c={type:"configurator",component:function(e){return r.createElement(l.Y.Group,{name:"demo",defaultValue:"react"},r.createElement(l.Y,{value:"react",...e}))},code:i,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var d=n(27884);let u=`
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
`,s={type:"code",component:function(){return r.createElement(d.K,null,r.createElement(l.Y,{checked:!1,onChange:()=>{},label:"Default radio"}),r.createElement(l.Y,{checked:!0,onChange:()=>{},label:"Checked radio"}),r.createElement(l.Y,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),r.createElement(l.Y,{disabled:!0,label:"Disabled radio"}),r.createElement(l.Y,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"}))},code:u};var p=n(38765);let m=`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`,h={type:"code",centered:!0,component:function(){return r.createElement(l.Y,{icon:p.n,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:m},b=`
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
`,f={type:"code",centered:!0,component:function(){return r.createElement(l.Y,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:b};var v=n(22971);let R=`
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
`,g={type:"code",centered:!0,component:function(){return r.createElement(v.Z,null,r.createElement(l.Y,{checked:!0,disabled:!0,label:"React",value:"react"}),r.createElement(l.Y,{disabled:!0,label:"Angular",value:"nu"}),r.createElement(l.Y,{disabled:!0,label:"Svelte",value:"sv"}))},code:R};var k=n(99684);let x=`
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
`,y={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(k.u,{label:"Radio with tooltip"},r.createElement(l.Y,{label:"Tooltip on radio only"})),r.createElement(k.u,{label:"Radio with tooltip",refProp:"rootRef"},r.createElement(l.Y,{label:"Tooltip the entire element",mt:"md"})))},code:x,centered:!0},j=`
import { Radio } from '@mantine/core';


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
`,E={type:"configurator",component:function(e){return r.createElement(l.Y.Group,{defaultValue:"react",name:"favoriteFramework",...e},r.createElement(v.Z,{mt:"xs"},r.createElement(l.Y,{value:"react",label:"React"}),r.createElement(l.Y,{value:"svelte",label:"Svelte"}),r.createElement(l.Y,{value:"ng",label:"Angular"}),r.createElement(l.Y,{value:"vue",label:"Vue"})))},centered:!0,code:j,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var C=n(97811);let V=`
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
`,w={type:"styles-api",data:C.P,component:function(e){return r.createElement(l.Y,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:V,centered:!0};var T=n(3916),Y=n(30289);let G=(0,T.A)(Y.us.Radio);function S(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:n,GetElementRef:r,StylesApiSelectors:l,WrapperProps:i}=o;return n||_("Demo",!0),r||_("GetElementRef",!0),l||_("StylesApiSelectors",!0),i||_("WrapperProps",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(o.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(o.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:g}),"\n",(0,a.jsx)(o.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,a.jsxs)(o.p,{children:["By default, radio input and label have ",(0,a.jsx)(o.code,{children:"cursor: default"})," (same as native ",(0,a.jsx)(o.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,a.jsx)(o.code,{children:"cursorType"})," on ",(0,a.jsx)(o.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,a.jsxs)(o.p,{children:["You can change target element to which tooltip is attached with ",(0,a.jsx)(o.code,{children:"refProp"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(i,{component:"Radio"}),"\n",(0,a.jsx)(o.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,a.jsx)(n,{data:E}),"\n",(0,a.jsx)(o.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(r,{component:"Radio",refType:"input"}),"\n",(0,a.jsx)(l,{component:"Radio"}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(o.p,{children:["Set ",(0,a.jsx)(o.code,{children:"aria-label"})," or ",(0,a.jsx)(o.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(G,{...e,children:(0,a.jsx)(S,{...e})})}function _(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75014:function(e,o,n){"use strict";n.d(o,{Y:function(){return T}});var a=n(27378),t=n(31002),r=n(92082),l=n(83453),i=n(88193),c=n(89738),d=n(96739),u=n(6231),s=n(55934),p=n(56589),m=n(20410),h=n(91549),b=n(89871);let[f,v]=(0,b.V)();var R=n(58675),g=n(42487),k=n(96606);let x={},y=(0,m.d)((e,o)=>{let{value:n,defaultValue:r,onChange:l,size:i,wrapperProps:c,children:u,name:s,...p}=(0,d.w)("RadioGroup",x,e),m=(0,t.M)(s),[h,b]=(0,R.C)({value:n,defaultValue:r,finalValue:"",onChange:l});return a.createElement(f,{value:{value:h,onChange:e=>b(e.currentTarget.value),size:i,name:m}},a.createElement(g.I.Wrapper,{size:i,ref:o,...c,...p,labelElement:"div",__staticSelector:"RadioGroup"},a.createElement(k.m,{role:"radiogroup"},u)))});y.classes=g.I.Wrapper.classes,y.displayName="@mantine/core/RadioGroup";var j=n(71078);function E({size:e,style:o,...n}){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,j.h)(e),height:(0,j.h)(e),...o},"aria-hidden":!0,...n},a.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"}))}var C={root:"m-f3f1af94",inner:"m-89c4f5e4",icon:"m-f3ed6b2b",radio:"m-8a3dbb89","radio--outline":"m-1bfe9d39"};let V={labelPosition:"right"},w=(0,l.Z)((e,{size:o,radius:n,color:a,iconColor:t,variant:l})=>{let d=(0,i.E)({color:a||e.primaryColor,theme:e}),u=d.isThemeColor&&void 0===d.shade?`var(--mantine-color-${d.color}-outline)`:d.color;return{root:{"--radio-size":(0,r.ap)(o,"radio-size"),"--radio-radius":void 0===n?void 0:(0,r.H5)(n),"--radio-color":"outline"===l?u:(0,c.p)(a,e),"--radio-icon-color":t?(0,c.p)(t,e):void 0,"--radio-icon-size":(0,r.ap)(o,"radio-icon-size")}}}),T=(0,m.d)((e,o)=>{let n=(0,d.w)("Radio",V,e),{classNames:r,className:l,style:i,styles:c,unstyled:m,vars:b,id:f,size:R,label:g,labelPosition:k,description:x,error:y,radius:j,color:T,variant:Y,disabled:G,wrapperProps:S,icon:D=E,rootRef:_,iconColor:P,onChange:A,...N}=n,z=(0,u.y)({name:"Radio",classes:C,props:n,className:l,style:i,classNames:r,styles:c,unstyled:m,vars:b,varsResolver:w}),I=v(),M=I?.size??R,O=n.size?R:M,{styleProps:F,rest:Z}=(0,s.c)(N),B=(0,t.M)(f),L=I?{checked:I.value===Z.value,name:Z.name??I.name,onChange:e=>{I.onChange(e),A?.(e)}}:{};return a.createElement(h.Z,{...z("root"),__staticSelector:"Radio",__stylesApiProps:n,id:B,size:O,labelPosition:k,label:g,description:x,error:y,disabled:G,classNames:r,styles:c,unstyled:m,"data-checked":L.checked||void 0,variant:Y,ref:_,...F,...S},a.createElement(p.x,{...z("inner"),mod:{"label-position":k}},a.createElement(p.x,{...z("radio",{focusable:!0,variant:Y}),onChange:A,...Z,...L,component:"input",mod:{error:!!y},ref:o,id:B,disabled:G,type:"radio"}),a.createElement(D,{...z("icon"),"aria-hidden":!0})))});T.classes=C,T.displayName="@mantine/core/Radio",T.Group=y}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=83225)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28872],{54310:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return n(8079)}])},8079:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return S}});var a=n(52322),t=n(45392),r=n(2784),l=n(41427);let i=`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,c={type:"configurator",component:function(e){return r.createElement(l.Y.Group,{name:"demo",defaultValue:"react"},r.createElement(l.Y,{value:"react",...e}))},code:i,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var d=n(65438);let u=`
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
`,s={type:"code",component:function(){return r.createElement(d.K,null,r.createElement(l.Y,{checked:!1,onChange:()=>{},label:"Default radio"}),r.createElement(l.Y,{checked:!0,onChange:()=>{},label:"Checked radio"}),r.createElement(l.Y,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),r.createElement(l.Y,{disabled:!0,label:"Disabled radio"}),r.createElement(l.Y,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"}))},code:u};var p=n(40284);let m=`
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
`,f={type:"code",centered:!0,component:function(){return r.createElement(l.Y,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:b};var v=n(93010);let R=`
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
`,g={type:"code",centered:!0,component:function(){return r.createElement(v.Z,null,r.createElement(l.Y,{checked:!0,disabled:!0,label:"React",value:"react"}),r.createElement(l.Y,{disabled:!0,label:"Angular",value:"nu"}),r.createElement(l.Y,{disabled:!0,label:"Svelte",value:"sv"}))},code:R};var k=n(893);let x=`
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
`,E={type:"configurator",component:function(e){return r.createElement(l.Y.Group,{defaultValue:"react",name:"favoriteFramework",...e},r.createElement(v.Z,{mt:"xs"},r.createElement(l.Y,{value:"react",label:"React"}),r.createElement(l.Y,{value:"svelte",label:"Svelte"}),r.createElement(l.Y,{value:"ng",label:"Angular"}),r.createElement(l.Y,{value:"vue",label:"Vue"})))},centered:!0,code:j,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var C=n(13753);let V=`
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
`,w={type:"styles-api",data:C.P,component:function(e){return r.createElement(l.Y,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:V,centered:!0};var _=n(79016),T=n(33638);let Y=(0,_.A)(T.us.Radio);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:n,GetElementRef:r,StylesApiSelectors:l,WrapperProps:i}=o;return n||D("Demo",!0),r||D("GetElementRef",!0),l||D("StylesApiSelectors",!0),i||D("WrapperProps",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(o.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(o.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:g}),"\n",(0,a.jsx)(o.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,a.jsxs)(o.p,{children:["By default, radio input and label have ",(0,a.jsx)(o.code,{children:"cursor: default"})," (same as native ",(0,a.jsx)(o.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,a.jsx)(o.code,{children:"cursorType"})," on ",(0,a.jsx)(o.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,a.jsxs)(o.p,{children:["You can change target element to which tooltip is attached with ",(0,a.jsx)(o.code,{children:"refProp"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(i,{component:"Radio"}),"\n",(0,a.jsx)(o.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,a.jsx)(n,{data:E}),"\n",(0,a.jsx)(o.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(r,{component:"Radio",refType:"input"}),"\n",(0,a.jsx)(l,{component:"Radio"}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(o.p,{children:["Set ",(0,a.jsx)(o.code,{children:"aria-label"})," or ",(0,a.jsx)(o.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(Y,{...e,children:(0,a.jsx)(G,{...e})})}function D(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41427:function(e,o,n){"use strict";n.d(o,{Y:function(){return Y}});var a=n(2784),t=n(66178),r=n(91482),l=n(11200),i=n(46403),c=n(13588),d=n(39568),u=n(90006),s=n(38483),p=n(62378),m=n(97072),h=n(28559),b=n(82027),f=n(50569),v=n(75336);let[R,g]=(0,v.V)();var k=n(9341),x=n(6941),y=n(62770);let j={},E=(0,b.d)((e,o)=>{let{value:n,defaultValue:r,onChange:l,size:i,wrapperProps:c,children:d,name:u,readOnly:p,...m}=(0,s.w)("RadioGroup",j,e),h=(0,t.M)(u),[b,f]=(0,k.C)({value:n,defaultValue:r,finalValue:"",onChange:l});return a.createElement(R,{value:{value:b,onChange:e=>!p&&f(e.currentTarget.value),size:i,name:h}},a.createElement(x.I.Wrapper,{size:i,ref:o,...c,...m,labelElement:"div",__staticSelector:"RadioGroup"},a.createElement(y.m,{role:"radiogroup"},d)))});E.classes=x.I.Wrapper.classes,E.displayName="@mantine/core/RadioGroup";var C=n(58898);function V({size:e,style:o,...n}){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,C.h)(e),height:(0,C.h)(e),...o},"aria-hidden":!0,...n},a.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"}))}var w={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let _={labelPosition:"right"},T=(0,l.Z)((e,{size:o,radius:n,color:a,iconColor:t,variant:l,autoContrast:s})=>{let p=(0,i.E)({color:a||e.primaryColor,theme:e}),m=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{root:{"--radio-size":(0,r.ap)(o,"radio-size"),"--radio-radius":void 0===n?void 0:(0,r.H5)(n),"--radio-color":"outline"===l?m:(0,c.p)(a,e),"--radio-icon-color":t?(0,c.p)(t,e):(0,u.o)(s,e)?(0,d.R)({color:a,theme:e}):void 0,"--radio-icon-size":(0,r.ap)(o,"radio-icon-size")}}}),Y=(0,b.d)((e,o)=>{let n=(0,s.w)("Radio",_,e),{classNames:r,className:l,style:i,styles:c,unstyled:d,vars:u,id:b,size:v,label:R,labelPosition:k,description:x,error:y,radius:j,color:E,variant:C,disabled:Y,wrapperProps:G,icon:S=V,rootRef:D,iconColor:P,onChange:A,mod:N,...z}=n,I=(0,p.y)({name:"Radio",classes:w,props:n,className:l,style:i,classNames:r,styles:c,unstyled:d,vars:u,varsResolver:T}),M=g(),O=M?.size??v,F=n.size?v:O,{styleProps:Z,rest:B}=(0,m.c)(z),L=(0,t.M)(b),W=M?{checked:M.value===B.value,name:B.name??M.name,onChange:e=>{M.onChange(e),A?.(e)}}:{};return a.createElement(f.Z,{...I("root"),__staticSelector:"Radio",__stylesApiProps:n,id:L,size:F,labelPosition:k,label:R,description:x,error:y,disabled:Y,classNames:r,styles:c,unstyled:d,"data-checked":W.checked||void 0,variant:C,ref:D,mod:N,...Z,...G},a.createElement(h.x,{...I("inner"),mod:{"label-position":k}},a.createElement(h.x,{...I("radio",{focusable:!0,variant:C}),onChange:A,...B,...W,component:"input",mod:{error:!!y},ref:o,id:L,disabled:Y,type:"radio"}),a.createElement(S,{...I("icon"),"aria-hidden":!0})))});Y.classes=w,Y.displayName="@mantine/core/Radio",Y.Group=E}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=54310)}),_N_E=e.O()}]);
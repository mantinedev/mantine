(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28872],{54310:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/radio",function(){return n(8079)}])},8079:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return S}});var a=n(52322),i=n(45392),r=n(41427);let t=`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,l={type:"configurator",component:function(e){return(0,a.jsx)(r.Y.Group,{name:"demo",defaultValue:"react",children:(0,a.jsx)(r.Y,{value:"react",...e})})},code:t,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]};var c=n(65438);let d=`
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
`,s={type:"code",component:function(){return(0,a.jsxs)(c.K,{children:[(0,a.jsx)(r.Y,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,a.jsx)(r.Y,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,a.jsx)(r.Y,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,a.jsx)(r.Y,{disabled:!0,label:"Disabled radio"}),(0,a.jsx)(r.Y,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:d};var u=n(40284);let p=`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`,h={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.Y,{icon:u.n,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:p},m=`
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
`,b={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.Y,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:m};var f=n(93010);let x=`
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
`,v={type:"code",centered:!0,component:function(){return(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(r.Y,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,a.jsx)(r.Y,{disabled:!0,label:"Angular",value:"nu"}),(0,a.jsx)(r.Y,{disabled:!0,label:"Svelte",value:"sv"})]})},code:x};var j=n(893);let R=`
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
`,g={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.u,{label:"Radio with tooltip",children:(0,a.jsx)(r.Y,{label:"Tooltip on radio only"})}),(0,a.jsx)(j.u,{label:"Radio with tooltip",refProp:"rootRef",children:(0,a.jsx)(r.Y,{label:"Tooltip the entire element",mt:"md"})})]})},code:R,centered:!0},k=`
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
`,y={type:"configurator",component:function(e){return(0,a.jsx)(r.Y.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,a.jsxs)(f.Z,{mt:"xs",children:[(0,a.jsx)(r.Y,{value:"react",label:"React"}),(0,a.jsx)(r.Y,{value:"svelte",label:"Svelte"}),(0,a.jsx)(r.Y,{value:"ng",label:"Angular"}),(0,a.jsx)(r.Y,{value:"vue",label:"Vue"})]})})},centered:!0,code:k,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var C=n(13753);let V=`
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
`,w={type:"styles-api",data:C.P,component:function(e){return(0,a.jsx)(r.Y,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:V,centered:!0};var _=n(79016),T=n(33638);let Y=(0,_.A)(T.us.Radio);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:n,GetElementRef:r,StylesApiSelectors:t,WrapperProps:c}=o;return n||D("Demo",!0),r||D("GetElementRef",!0),t||D("StylesApiSelectors",!0),c||D("WrapperProps",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:l}),"\n",(0,a.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(o.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(o.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,a.jsx)(n,{data:b}),"\n",(0,a.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(o.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,a.jsxs)(o.p,{children:["By default, radio input and label have ",(0,a.jsx)(o.code,{children:"cursor: default"})," (same as native ",(0,a.jsx)(o.code,{children:'input[type="radio"]'}),").\nTo change cursor to pointer, set ",(0,a.jsx)(o.code,{children:"cursorType"})," on ",(0,a.jsx)(o.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,a.jsxs)(o.p,{children:["You can change target element to which tooltip is attached with ",(0,a.jsx)(o.code,{children:"refProp"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,a.jsxs)(o.li,{children:["If ",(0,a.jsx)(o.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,a.jsx)(n,{data:g}),"\n",(0,a.jsx)(c,{component:"Radio"}),"\n",(0,a.jsx)(o.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(o.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(r,{component:"Radio",refType:"input"}),"\n",(0,a.jsx)(t,{component:"Radio"}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(o.p,{children:["Set ",(0,a.jsx)(o.code,{children:"aria-label"})," or ",(0,a.jsx)(o.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(Y,{...e,children:(0,a.jsx)(G,{...e})})}function D(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41427:function(e,o,n){"use strict";n.d(o,{Y:function(){return G}});var a=n(52322),i=n(66178);n(2784);var r=n(91482),t=n(11200),l=n(46403),c=n(13588),d=n(39568),s=n(90006),u=n(38483),p=n(46690),h=n(97072),m=n(28559),b=n(82027),f=n(50569),x=n(75336);let[v,j]=(0,x.V)();var R=n(9341),g=n(6941),k=n(62770);let y={},C=(0,b.d)((e,o)=>{let{value:n,defaultValue:r,onChange:t,size:l,wrapperProps:c,children:d,name:s,readOnly:p,...h}=(0,u.w)("RadioGroup",y,e),m=(0,i.M)(s),[b,f]=(0,R.C)({value:n,defaultValue:r,finalValue:"",onChange:t});return(0,a.jsx)(v,{value:{value:b,onChange:e=>!p&&f(e.currentTarget.value),size:l,name:m},children:(0,a.jsx)(g.I.Wrapper,{size:l,ref:o,...c,...h,labelElement:"div",__staticSelector:"RadioGroup",children:(0,a.jsx)(k.m,{role:"radiogroup",children:d})})})});C.classes=g.I.Wrapper.classes,C.displayName="@mantine/core/RadioGroup";var V=n(58898);function w({size:e,style:o,...n}){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,V.h)(e),height:(0,V.h)(e),...o},"aria-hidden":!0,...n,children:(0,a.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var _={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let T={labelPosition:"right"},Y=(0,t.Z)((e,{size:o,radius:n,color:a,iconColor:i,variant:t,autoContrast:u})=>{let p=(0,l.E)({color:a||e.primaryColor,theme:e}),h=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{root:{"--radio-size":(0,r.ap)(o,"radio-size"),"--radio-radius":void 0===n?void 0:(0,r.H5)(n),"--radio-color":"outline"===t?h:(0,c.p)(a,e),"--radio-icon-color":i?(0,c.p)(i,e):(0,s.o)(u,e)?(0,d.R)({color:a,theme:e}):void 0,"--radio-icon-size":(0,r.ap)(o,"radio-icon-size")}}}),G=(0,b.d)((e,o)=>{let n=(0,u.w)("Radio",T,e),{classNames:r,className:t,style:l,styles:c,unstyled:d,vars:s,id:b,size:x,label:v,labelPosition:R,description:g,error:k,radius:y,color:C,variant:V,disabled:G,wrapperProps:S,icon:D=w,rootRef:P,iconColor:A,onChange:N,mod:E,...z}=n,I=(0,p.y)({name:"Radio",classes:_,props:n,className:t,style:l,classNames:r,styles:c,unstyled:d,vars:s,varsResolver:Y}),M=j(),O=M?.size??x,F=n.size?x:O,{styleProps:Z,rest:B}=(0,h.c)(z),L=(0,i.M)(b),W=M?{checked:M.value===B.value,name:B.name??M.name,onChange:e=>{M.onChange(e),N?.(e)}}:{};return(0,a.jsx)(f.Z,{...I("root"),__staticSelector:"Radio",__stylesApiProps:n,id:L,size:F,labelPosition:R,label:v,description:g,error:k,disabled:G,classNames:r,styles:c,unstyled:d,"data-checked":W.checked||void 0,variant:V,ref:P,mod:E,...Z,...S,children:(0,a.jsxs)(m.x,{...I("inner"),mod:{"label-position":R},children:[(0,a.jsx)(m.x,{...I("radio",{focusable:!0,variant:V}),onChange:N,...B,...W,component:"input",mod:{error:!!k},ref:o,id:L,disabled:G,type:"radio"}),(0,a.jsx)(D,{...I("icon"),"aria-hidden":!0})]})})});G.classes=_,G.displayName="@mantine/core/Radio",G.Group=C}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=54310)}),_N_E=e.O()}]);
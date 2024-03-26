(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96781],{5858:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(99882).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},83838:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return i(97189)}])},97189:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return X}});var n=i(52322),l=i(45392),a=i(2784),c=i(66178),r=i(9341),o=i(91482),p=i(11200),d=i(38483),h=i(62378),u=i(97072),s=i(28559),m=i(82027),C=i(40284),f=i(75336);let[v,g]=(0,f.V)(),b={};function k(e){let{value:t,defaultValue:i,onChange:n,multiple:l,children:c}=(0,d.w)("ChipGroup",b,e),[o,p]=(0,r.C)({value:t,defaultValue:i,finalValue:l?[]:null,onChange:n});return a.createElement(v,{value:{isChipSelected:e=>Array.isArray(o)?o.includes(e):e===o,onChange:e=>{let t=e.currentTarget.value;Array.isArray(o)?p(o.includes(t)?o.filter(e=>e!==t):[...o,t]):p(t)},multiple:l}},c)}k.displayName="@mantine/core/ChipGroup";var E={root:"m-f59ffda3",label:"m-be049a53","label--outline":"m-3904c1af","label--filled":"m-fa109255","label--light":"m-f7e165c3",iconWrapper:"m-9ac86df9",checkIcon:"m-d6d72580",input:"m-bde07329"};let y={type:"checkbox"},x=(0,p.Z)((e,{size:t,radius:i,variant:n,color:l,autoContrast:a})=>{let c=e.variantColorResolver({color:l||e.primaryColor,theme:e,variant:n||"filled",autoContrast:a});return{root:{"--chip-fz":(0,o.yv)(t),"--chip-size":(0,o.ap)(t,"chip-size"),"--chip-radius":void 0===i?void 0:(0,o.H5)(i),"--chip-checked-padding":(0,o.ap)(t,"chip-checked-padding"),"--chip-padding":(0,o.ap)(t,"chip-padding"),"--chip-icon-size":(0,o.ap)(t,"chip-icon-size"),"--chip-bg":l||n?c.background:void 0,"--chip-hover":l||n?c.hover:void 0,"--chip-color":l||n?c.color:void 0,"--chip-bd":l||n?c.border:void 0,"--chip-spacing":(0,o.ap)(t,"chip-spacing")}}}),j=(0,m.d)((e,t)=>{let i=(0,d.w)("Chip",y,e),{classNames:n,className:l,style:o,styles:p,unstyled:m,vars:f,id:v,checked:b,defaultChecked:k,onChange:j,value:w,wrapperProps:G,type:V,disabled:A,children:S,size:_,variant:T,icon:F,rootRef:N,autoContrast:Z,mod:z,...M}=i,D=(0,h.y)({name:"Chip",classes:E,props:i,className:l,style:o,classNames:n,styles:p,unstyled:m,vars:f,varsResolver:x}),O=g(),P=(0,c.M)(v),{styleProps:R,rest:I}=(0,u.c)(M),[X,L]=(0,r.C)({value:b,defaultValue:k,finalValue:!1,onChange:j}),W=O?{checked:O.isChipSelected(w),onChange:e=>{O.onChange(e),j?.(e.currentTarget.checked)},type:O.multiple?"checkbox":"radio"}:{},H=W.checked||X;return a.createElement(s.x,{size:_,variant:T,ref:N,mod:z,...D("root"),...R,...G},a.createElement("input",{type:V,...D("input"),checked:H,onChange:e=>L(e.currentTarget.checked),id:P,disabled:A,ref:t,value:w,...W,...I}),a.createElement("label",{htmlFor:P,"data-checked":H||void 0,"data-disabled":A||void 0,...D("label",{variant:T||"filled"})},H&&a.createElement("span",{...D("iconWrapper")},F||a.createElement(C.n,{...D("checkIcon")})),a.createElement("span",null,S)))});j.classes=E,j.displayName="@mantine/core/Chip",j.Group=k;let w=`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,G={type:"configurator",component:function(e){return a.createElement(j,{defaultChecked:!0,...e},"Awesome chip")},code:w,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var V=i(5858),A=i(58898);let S=`
import { Chip, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`,_={type:"code",component:function(){return a.createElement(j,{icon:a.createElement(V.Z,{style:{width:(0,A.h)(16),height:(0,A.h)(16)}}),color:"red",variant:"filled",defaultChecked:!0},"Forbidden")},code:S,centered:!0};var T=i(93010);let F={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(j.Group,{multiple:!0,value:["checked","checked-disabled"]},a.createElement(T.Z,{justify:"center"},a.createElement(j,{value:"default",variant:"outline"},"Outline default"),a.createElement(j,{value:"checked",variant:"outline"},"Outline checked"),a.createElement(j,{value:"checked-disabled",disabled:!0,variant:"outline"},"Outline checked disabled"))),a.createElement(j.Group,{multiple:!0,value:["checked","checked-disabled"]},a.createElement(T.Z,{justify:"center",mt:"md"},a.createElement(j,{value:"default",variant:"light"},"Light default"),a.createElement(j,{value:"checked",variant:"light"},"Light checked"),a.createElement(j,{value:"checked-disabled",disabled:!0,variant:"light"},"Light checked disabled"))),a.createElement(j.Group,{multiple:!0,value:["checked","checked-disabled"]},a.createElement(T.Z,{justify:"center",mt:"md"},a.createElement(j,{value:"default",variant:"filled"},"Filled default"),a.createElement(j,{value:"checked",variant:"filled"},"Filled checked"),a.createElement(j,{value:"checked-disabled",disabled:!0,variant:"filled"},"Filled checked disabled"))))}};var N=i(893);let Z=`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,z={type:"code",component:function(){return a.createElement(N.u,{label:"Chip tooltip",refProp:"rootRef"},a.createElement(j,{defaultChecked:!0},"Chip with tooltip"))},code:Z,centered:!0},M=`
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
`,D={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(j.Group,null,a.createElement(T.Z,{justify:"center"},a.createElement(j,{value:"1"},"Single chip"),a.createElement(j,{value:"2"},"Can be selected"),a.createElement(j,{value:"3"},"At a time"))),a.createElement(j.Group,{multiple:!0},a.createElement(T.Z,{justify:"center",mt:"md"},a.createElement(j,{value:"1"},"Multiple chips"),a.createElement(j,{value:"2"},"Can be selected"),a.createElement(j,{value:"3"},"At a time"))))},code:M};var O=i(79016),P=i(33638);let R=(0,O.A)(P.us.Chip);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:i,WrapperProps:a}=t;return i||L("Demo",!0),a||L("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:G}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,n.jsx)(i,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,n.jsx)(i,{data:F}),"\n",(0,n.jsx)(t.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"Chip"})," with ",(0,n.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,n.jsx)(t.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,n.jsx)(i,{data:z}),"\n",(0,n.jsx)(a,{component:"Chip"}),"\n",(0,n.jsx)(t.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,n.jsx)(t.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,n.jsx)(i,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Chip"})," and ",(0,n.jsx)(t.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(R,{...e,children:(0,n.jsx)(I,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=83838)}),_N_E=e.O()}]);
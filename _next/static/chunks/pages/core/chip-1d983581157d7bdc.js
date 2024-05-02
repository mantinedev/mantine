(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96781],{5858:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var l=(0,n(99882).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},83838:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return n(97189)}])},97189:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return I}});var l=n(52322),t=n(45392),r=n(66178),c=n(9341);n(2784);var a=n(91482),o=n(11200),d=n(38483),h=n(46690),p=n(97072),u=n(28559),s=n(82027),m=n(40284),C=n(75336);let[f,v]=(0,C.V)(),x={};function j(e){let{value:i,defaultValue:n,onChange:t,multiple:r,children:a}=(0,d.w)("ChipGroup",x,e),[o,h]=(0,c.C)({value:i,defaultValue:n,finalValue:r?[]:null,onChange:t});return(0,l.jsx)(f,{value:{isChipSelected:e=>Array.isArray(o)?o.includes(e):e===o,onChange:e=>{let i=e.currentTarget.value;Array.isArray(o)?h(o.includes(i)?o.filter(e=>e!==i):[...o,i]):h(i)},multiple:r},children:a})}j.displayName="@mantine/core/ChipGroup";var g={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"};let b={type:"checkbox"},k=(0,o.Z)((e,{size:i,radius:n,variant:l,color:t,autoContrast:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:l||"filled",autoContrast:r});return{root:{"--chip-fz":(0,a.yv)(i),"--chip-size":(0,a.ap)(i,"chip-size"),"--chip-radius":void 0===n?void 0:(0,a.H5)(n),"--chip-checked-padding":(0,a.ap)(i,"chip-checked-padding"),"--chip-padding":(0,a.ap)(i,"chip-padding"),"--chip-icon-size":(0,a.ap)(i,"chip-icon-size"),"--chip-bg":t||l?c.background:void 0,"--chip-hover":t||l?c.hover:void 0,"--chip-color":t||l?c.color:void 0,"--chip-bd":t||l?c.border:void 0,"--chip-spacing":(0,a.ap)(i,"chip-spacing")}}}),y=(0,s.d)((e,i)=>{let n=(0,d.w)("Chip",b,e),{classNames:t,className:a,style:o,styles:s,unstyled:C,vars:f,id:x,checked:j,defaultChecked:y,onChange:G,value:w,wrapperProps:_,type:V,disabled:A,children:S,size:T,variant:F,icon:N,rootRef:Z,autoContrast:z,mod:E,...M}=n,D=(0,h.y)({name:"Chip",classes:g,props:n,className:a,style:o,classNames:t,styles:s,unstyled:C,vars:f,varsResolver:k}),O=v(),P=(0,r.M)(x),{styleProps:R,rest:I}=(0,p.c)(M),[X,L]=(0,c.C)({value:j,defaultValue:y,finalValue:!1,onChange:G}),W=O?{checked:O.isChipSelected(w),onChange:e=>{O.onChange(e),G?.(e.currentTarget.checked)},type:O.multiple?"checkbox":"radio"}:{},H=W.checked||X;return(0,l.jsxs)(u.x,{size:T,variant:F,ref:Z,mod:E,...D("root"),...R,..._,children:[(0,l.jsx)("input",{type:V,...D("input"),checked:H,onChange:e=>L(e.currentTarget.checked),id:P,disabled:A,ref:i,value:w,...W,...I}),(0,l.jsxs)("label",{htmlFor:P,"data-checked":H||void 0,"data-disabled":A||void 0,...D("label",{variant:F||"filled"}),children:[H&&(0,l.jsx)("span",{...D("iconWrapper"),children:N||(0,l.jsx)(m.n,{...D("checkIcon")})}),(0,l.jsx)("span",{children:S})]})]})});y.classes=g,y.displayName="@mantine/core/Chip",y.Group=j;let G=`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,w={type:"configurator",component:function(e){return(0,l.jsx)(y,{defaultChecked:!0,...e,children:"Awesome chip"})},code:G,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var _=n(5858),V=n(58898);let A=`
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
`,S={type:"code",component:function(){return(0,l.jsx)(y,{icon:(0,l.jsx)(_.Z,{style:{width:(0,V.h)(16),height:(0,V.h)(16)}}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:A,centered:!0};var T=n(93010);let F={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(T.Z,{justify:"center",children:[(0,l.jsx)(y,{value:"default",variant:"outline",children:"Outline default"}),(0,l.jsx)(y,{value:"checked",variant:"outline",children:"Outline checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(T.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"default",variant:"light",children:"Light default"}),(0,l.jsx)(y,{value:"checked",variant:"light",children:"Light checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(T.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"default",variant:"filled",children:"Filled default"}),(0,l.jsx)(y,{value:"checked",variant:"filled",children:"Filled checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}};var N=n(893);let Z=`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,z={type:"code",component:function(){return(0,l.jsx)(N.u,{label:"Chip tooltip",refProp:"rootRef",children:(0,l.jsx)(y,{defaultChecked:!0,children:"Chip with tooltip"})})},code:Z,centered:!0},E=`
import { Chip, Group } from '@mantine/core';

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
`,M={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Group,{children:(0,l.jsxs)(T.Z,{justify:"center",children:[(0,l.jsx)(y,{value:"1",children:"Single chip"}),(0,l.jsx)(y,{value:"2",children:"Can be selected"}),(0,l.jsx)(y,{value:"3",children:"At a time"})]})}),(0,l.jsx)(y.Group,{multiple:!0,children:(0,l.jsxs)(T.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"1",children:"Multiple chips"}),(0,l.jsx)(y,{value:"2",children:"Can be selected"}),(0,l.jsx)(y,{value:"3",children:"At a time"})]})})]})},code:E};var D=n(79016),O=n(33638);let P=(0,D.A)(O.us.Chip);function R(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:n,WrapperProps:r}=i;return n||X("Demo",!0),r||X("WrapperProps",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:w}),"\n",(0,l.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,l.jsx)(n,{data:S}),"\n",(0,l.jsx)(i.h2,{id:"states",children:"States"}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(i.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,l.jsxs)(i.p,{children:["To use ",(0,l.jsx)(i.code,{children:"Chip"})," with ",(0,l.jsx)(i.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,l.jsx)(i.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,l.jsx)(n,{data:z}),"\n",(0,l.jsx)(r,{component:"Chip"}),"\n",(0,l.jsx)(i.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,l.jsx)(i.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,l.jsx)(n,{data:M}),"\n",(0,l.jsx)(i.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip"})," and ",(0,l.jsx)(i.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(P,{...e,children:(0,l.jsx)(R,{...e})})}function X(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=83838)}),_N_E=e.O()}]);
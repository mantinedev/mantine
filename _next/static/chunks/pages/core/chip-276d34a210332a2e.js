(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58398],{69893:(e,i,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return l(91105)}])},91105:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>M});var n=l(31085),t=l(71184),r=l(97567),c=l(82307),a=l(14041),o=l(33450),d=l(7098),h=l(29686),p=l(69564),s=l(18315),u=l(34056),C=l(6754),v=l(5583);let[m,f]=(0,l(49128).e)(),j={};function x(e){let{value:i,defaultValue:l,onChange:t,multiple:r,children:a}=(0,h.Y)("ChipGroup",j,e),[o,d]=(0,c.Z)({value:i,defaultValue:l,finalValue:r?[]:null,onChange:t});return(0,n.jsx)(m,{value:{isChipSelected:e=>Array.isArray(o)?o.includes(e):e===o,onChange:e=>{let i=e.currentTarget.value;Array.isArray(o)?d(o.includes(i)?o.filter(e=>e!==i):[...o,i]):d(i)},multiple:r},children:a})}x.displayName="@mantine/core/ChipGroup";var k={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"};let g={type:"checkbox"},b=(0,d.V)((e,{size:i,radius:l,variant:n,color:t,autoContrast:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:n||"filled",autoContrast:r});return{root:{"--chip-fz":(0,o.ny)(i),"--chip-size":(0,o.YC)(i,"chip-size"),"--chip-radius":void 0===l?void 0:(0,o.nJ)(l),"--chip-checked-padding":(0,o.YC)(i,"chip-checked-padding"),"--chip-padding":(0,o.YC)(i,"chip-padding"),"--chip-icon-size":(0,o.YC)(i,"chip-icon-size"),"--chip-bg":t||n?c.background:void 0,"--chip-hover":t||n?c.hover:void 0,"--chip-color":t||n?c.color:void 0,"--chip-bd":t||n?c.border:void 0,"--chip-spacing":(0,o.YC)(i,"chip-spacing")}}}),y=(0,C.P9)((e,i)=>{let l=(0,h.Y)("Chip",g,e),{classNames:t,className:a,style:o,styles:d,unstyled:C,vars:m,id:j,checked:x,defaultChecked:y,onChange:G,value:V,wrapperProps:w,type:_,disabled:S,children:A,size:T,variant:Y,icon:F,rootRef:z,autoContrast:E,mod:N,...D}=l,M=(0,p.I)({name:"Chip",classes:k,props:l,className:a,style:o,classNames:t,styles:d,unstyled:C,vars:m,varsResolver:b}),P=f(),R=(0,r.B)(j),{styleProps:I,rest:O}=(0,s.j)(D),[X,L]=(0,c.Z)({value:x,defaultValue:y,finalValue:!1,onChange:G}),W=P?{checked:P.isChipSelected(V),onChange:e=>{P.onChange(e),G?.(e.currentTarget.checked)},type:P.multiple?"checkbox":"radio"}:{},Z=W.checked||X;return(0,n.jsxs)(u.a,{size:T,variant:Y,ref:z,mod:N,...M("root"),...I,...w,children:[(0,n.jsx)("input",{type:_,...M("input"),checked:Z,onChange:e=>L(e.currentTarget.checked),id:R,disabled:S,ref:i,value:V,...W,...O}),(0,n.jsxs)("label",{htmlFor:R,"data-checked":Z||void 0,"data-disabled":S||void 0,...M("label",{variant:Y||"filled"}),children:[Z&&(0,n.jsx)("span",{...M("iconWrapper"),children:F||(0,n.jsx)(v.S,{...M("checkIcon")})}),(0,n.jsx)("span",{children:A})]})]})});y.classes=k,y.displayName="@mantine/core/Chip",y.Group=x;let G={type:"configurator",component:function(e){return(0,n.jsx)(y,{defaultChecked:!0,...e,children:"Awesome chip"})},code:`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var V=l(3650);let w={type:"code",component:function(){return(0,n.jsx)(y,{icon:(0,n.jsx)(V.A,{size:16}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:`
import { Chip } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`,centered:!0};var _=l(56051);let S={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,n.jsxs)(_.Y,{justify:"center",children:[(0,n.jsx)(y,{value:"default",variant:"outline",children:"Outline default"}),(0,n.jsx)(y,{value:"checked",variant:"outline",children:"Outline checked"}),(0,n.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,n.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,n.jsxs)(_.Y,{justify:"center",mt:"md",children:[(0,n.jsx)(y,{value:"default",variant:"light",children:"Light default"}),(0,n.jsx)(y,{value:"checked",variant:"light",children:"Light checked"}),(0,n.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,n.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,n.jsxs)(_.Y,{justify:"center",mt:"md",children:[(0,n.jsx)(y,{value:"default",variant:"filled",children:"Filled default"}),(0,n.jsx)(y,{value:"checked",variant:"filled",children:"Filled checked"}),(0,n.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}};var A=l(2912);let T={type:"code",component:function(){return(0,n.jsx)(A.m,{label:"Chip tooltip",refProp:"rootRef",children:(0,n.jsx)(y,{defaultChecked:!0,children:"Chip with tooltip"})})},code:`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,centered:!0},Y={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.Group,{children:(0,n.jsxs)(_.Y,{justify:"center",children:[(0,n.jsx)(y,{value:"1",children:"Single chip"}),(0,n.jsx)(y,{value:"2",children:"Can be selected"}),(0,n.jsx)(y,{value:"3",children:"At a time"})]})}),(0,n.jsx)(y.Group,{multiple:!0,children:(0,n.jsxs)(_.Y,{justify:"center",mt:"md",children:[(0,n.jsx)(y,{value:"1",children:"Multiple chips"}),(0,n.jsx)(y,{value:"2",children:"Can be selected"}),(0,n.jsx)(y,{value:"3",children:"At a time"})]})})]})},code:`
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
`},F={type:"code",component:function(){let[e,i]=(0,a.useState)("first"),l=l=>{l.currentTarget.value===e&&i(null)};return(0,n.jsx)(y.Group,{multiple:!1,value:e,onChange:i,children:(0,n.jsxs)(_.Y,{children:[(0,n.jsx)(y,{value:"first",onClick:l,children:"First"}),(0,n.jsx)(y,{value:"second",onClick:l,children:"Second"}),(0,n.jsx)(y,{value:"third",onClick:l,children:"Third"})]})})},code:`
import { useState } from 'react';
import { Chip, Group } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>('first');
  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Group>
        <Chip value="first" onClick={handleChipClick}>
          First
        </Chip>
        <Chip value="second" onClick={handleChipClick}>
          Second
        </Chip>
        <Chip value="third" onClick={handleChipClick}>
          Third
        </Chip>
      </Group>
    </Chip.Group>
  );
}
`,centered:!0};var z=l(85954),E=l(38215);let N=(0,z.P)(E.XZ.Chip);function D(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Demo:l,WrapperProps:r}=i;return l||P("Demo",!0),r||P("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{data:G}),"\n",(0,n.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,n.jsx)(l,{data:w}),"\n",(0,n.jsx)(i.h2,{id:"states",children:"States"}),"\n",(0,n.jsx)(l,{data:S}),"\n",(0,n.jsx)(i.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,n.jsxs)(i.p,{children:["To use ",(0,n.jsx)(i.code,{children:"Chip"})," with ",(0,n.jsx)(i.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,n.jsx)(i.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,n.jsx)(l,{data:T}),"\n",(0,n.jsx)(r,{component:"Chip"}),"\n",(0,n.jsx)(i.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,n.jsx)(i.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,n.jsx)(l,{data:Y}),"\n",(0,n.jsx)(i.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"deselect-radio-chip",children:"Deselect radio chip"}),"\n",(0,n.jsx)(l,{data:F}),"\n",(0,n.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Chip"})," and ",(0,n.jsx)(i.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(N,{...e,children:(0,n.jsx)(D,{...e})})}function P(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3650:(e,i,l)=>{"use strict";l.d(i,{A:()=>n});var n=(0,l(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,39699,68831,90636,46593,38792],()=>i(69893)),_N_E=e.O()}]);
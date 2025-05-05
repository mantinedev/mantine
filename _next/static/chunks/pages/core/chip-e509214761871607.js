(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58398],{69893:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return t(91105)}])},91105:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>N});var l=t(31085),n=t(71184),a=t(97567),r=t(82307),c=t(14041),h=t(33450),d=t(7098),o=t(29686),s=t(69564),p=t(18315),u=t(34056),v=t(6754),C=t(5583);let[m,f]=(0,t(49128).e)(),k={};function g(e){let{value:i,defaultValue:t,onChange:n,multiple:a,children:c}=(0,o.Y)("ChipGroup",k,e),[h,d]=(0,r.Z)({value:i,defaultValue:t,finalValue:a?[]:null,onChange:n});return(0,l.jsx)(m,{value:{isChipSelected:e=>Array.isArray(h)?h.includes(e):e===h,onChange:e=>{let i=e.currentTarget.value;Array.isArray(h)?d(h.includes(i)?h.filter(e=>e!==i):[...h,i]):d(i)},multiple:a},children:c})}g.displayName="@mantine/core/ChipGroup";var j={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"};let x={type:"checkbox"},y=(0,d.V)((e,{size:i,radius:t,variant:l,color:n,autoContrast:a})=>{let r=e.variantColorResolver({color:n||e.primaryColor,theme:e,variant:l||"filled",autoContrast:a});return{root:{"--chip-fz":(0,h.ny)(i),"--chip-size":(0,h.YC)(i,"chip-size"),"--chip-radius":void 0===t?void 0:(0,h.nJ)(t),"--chip-checked-padding":(0,h.YC)(i,"chip-checked-padding"),"--chip-padding":(0,h.YC)(i,"chip-padding"),"--chip-icon-size":(0,h.YC)(i,"chip-icon-size"),"--chip-bg":n||l?r.background:void 0,"--chip-hover":n||l?r.hover:void 0,"--chip-color":n||l?r.color:void 0,"--chip-bd":n||l?r.border:void 0,"--chip-spacing":(0,h.YC)(i,"chip-spacing")}}}),b=(0,v.P9)((e,i)=>{let t=(0,o.Y)("Chip",x,e),{classNames:n,className:c,style:h,styles:d,unstyled:v,vars:m,id:k,checked:g,defaultChecked:b,onChange:M,value:A,wrapperProps:G,type:w,disabled:V,children:S,size:_,variant:T,icon:I,rootRef:F,autoContrast:Y,mod:z,...E}=t,N=(0,s.I)({name:"Chip",classes:j,props:t,className:c,style:h,classNames:n,styles:d,unstyled:v,vars:m,varsResolver:y}),P=f(),R=(0,a.B)(k),{styleProps:D,rest:L}=(0,p.j)(E),[O,X]=(0,r.Z)({value:g,defaultValue:b,finalValue:!1,onChange:M}),W=P?{checked:P.isChipSelected(A),onChange:e=>{P.onChange(e),M?.(e.currentTarget.checked)},type:P.multiple?"checkbox":"radio"}:{},Z=W.checked||O;return(0,l.jsxs)(u.a,{size:_,variant:T,ref:F,mod:z,...N("root"),...D,...G,children:[(0,l.jsx)("input",{type:w,...N("input"),checked:Z,onChange:e=>X(e.currentTarget.checked),id:R,disabled:V,ref:i,value:A,...W,...L}),(0,l.jsxs)("label",{htmlFor:R,"data-checked":Z||void 0,"data-disabled":V||void 0,...N("label",{variant:T||"filled"}),children:[Z&&(0,l.jsx)("span",{...N("iconWrapper"),children:I||(0,l.jsx)(C.S,{...N("checkIcon")})}),(0,l.jsx)("span",{children:S})]})]})});b.classes=j,b.displayName="@mantine/core/Chip",b.Group=g;let M={type:"configurator",component:function(e){return(0,l.jsx)(b,{defaultChecked:!0,...e,children:"Awesome chip"})},code:`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var A=t(3650);let G={type:"code",component:function(){return(0,l.jsx)(b,{icon:(0,l.jsx)(A.A,{size:16}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:`
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
`,centered:!0};var w=t(56051);let V={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(w.Y,{justify:"center",children:[(0,l.jsx)(b,{value:"default",variant:"outline",children:"Outline default"}),(0,l.jsx)(b,{value:"checked",variant:"outline",children:"Outline checked"}),(0,l.jsx)(b,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,l.jsx)(b.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(w.Y,{justify:"center",mt:"md",children:[(0,l.jsx)(b,{value:"default",variant:"light",children:"Light default"}),(0,l.jsx)(b,{value:"checked",variant:"light",children:"Light checked"}),(0,l.jsx)(b,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,l.jsx)(b.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(w.Y,{justify:"center",mt:"md",children:[(0,l.jsx)(b,{value:"default",variant:"filled",children:"Filled default"}),(0,l.jsx)(b,{value:"checked",variant:"filled",children:"Filled checked"}),(0,l.jsx)(b,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}};var S=t(2912);let _={type:"code",component:function(){return(0,l.jsx)(S.m,{label:"Chip tooltip",refProp:"rootRef",children:(0,l.jsx)(b,{defaultChecked:!0,children:"Chip with tooltip"})})},code:`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,centered:!0},T={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Group,{children:(0,l.jsxs)(w.Y,{justify:"center",children:[(0,l.jsx)(b,{value:"1",children:"Single chip"}),(0,l.jsx)(b,{value:"2",children:"Can be selected"}),(0,l.jsx)(b,{value:"3",children:"At a time"})]})}),(0,l.jsx)(b.Group,{multiple:!0,children:(0,l.jsxs)(w.Y,{justify:"center",mt:"md",children:[(0,l.jsx)(b,{value:"1",children:"Multiple chips"}),(0,l.jsx)(b,{value:"2",children:"Can be selected"}),(0,l.jsx)(b,{value:"3",children:"At a time"})]})})]})},code:`
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
`},I={type:"code",component:function(){let[e,i]=(0,c.useState)("first"),t=t=>{t.currentTarget.value===e&&i(null)};return(0,l.jsx)(b.Group,{multiple:!1,value:e,onChange:i,children:(0,l.jsxs)(w.Y,{children:[(0,l.jsx)(b,{value:"first",onClick:t,children:"First"}),(0,l.jsx)(b,{value:"second",onClick:t,children:"Second"}),(0,l.jsx)(b,{value:"third",onClick:t,children:"Third"})]})})},code:`
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
`,centered:!0};var F=t(18675),Y=t(20017);let z=(0,F.P)(Y.XZ.Chip);function E(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:t,WrapperProps:a}=i;return t||P("Demo",!0),a||P("WrapperProps",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t,{data:M}),"\n",(0,l.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,l.jsx)(t,{data:G}),"\n",(0,l.jsx)(i.h2,{id:"states",children:"States"}),"\n",(0,l.jsx)(t,{data:V}),"\n",(0,l.jsx)(i.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,l.jsxs)(i.p,{children:["To use ",(0,l.jsx)(i.code,{children:"Chip"})," with ",(0,l.jsx)(i.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,l.jsx)(i.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,l.jsx)(t,{data:_}),"\n",(0,l.jsx)(a,{component:"Chip"}),"\n",(0,l.jsx)(i.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,l.jsx)(i.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,l.jsx)(t,{data:T}),"\n",(0,l.jsx)(i.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"deselect-radio-chip",children:"Deselect radio chip"}),"\n",(0,l.jsx)(t,{data:I}),"\n",(0,l.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip"})," and ",(0,l.jsx)(i.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(z,{...e,children:(0,l.jsx)(E,{...e})})}function P(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},3650:(e,i,t)=>{"use strict";t.d(i,{A:()=>l});var l=(0,t(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},e=>{var i=i=>e(e.s=i);e.O(0,[18675,90636,46593,38792],()=>i(69893)),_N_E=e.O()}]);
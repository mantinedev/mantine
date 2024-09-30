(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96781],{83838:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return n(8480)}])},8480:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return R}});var l=n(52322),t=n(45392),r=n(66178),c=n(9341),a=n(2784),o=n(91482),h=n(11200),d=n(38483),p=n(46690),u=n(97072),s=n(28559),C=n(82027),m=n(40284);let[v,f]=(0,n(75336).V)(),x={};function j(e){let{value:i,defaultValue:n,onChange:t,multiple:r,children:a}=(0,d.w)("ChipGroup",x,e),[o,h]=(0,c.C)({value:i,defaultValue:n,finalValue:r?[]:null,onChange:t});return(0,l.jsx)(v,{value:{isChipSelected:e=>Array.isArray(o)?o.includes(e):e===o,onChange:e=>{let i=e.currentTarget.value;Array.isArray(o)?h(o.includes(i)?o.filter(e=>e!==i):[...o,i]):h(i)},multiple:r},children:a})}j.displayName="@mantine/core/ChipGroup";var k={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"};let g={type:"checkbox"},b=(0,h.Z)((e,{size:i,radius:n,variant:l,color:t,autoContrast:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:l||"filled",autoContrast:r});return{root:{"--chip-fz":(0,o.yv)(i),"--chip-size":(0,o.ap)(i,"chip-size"),"--chip-radius":void 0===n?void 0:(0,o.H5)(n),"--chip-checked-padding":(0,o.ap)(i,"chip-checked-padding"),"--chip-padding":(0,o.ap)(i,"chip-padding"),"--chip-icon-size":(0,o.ap)(i,"chip-icon-size"),"--chip-bg":t||l?c.background:void 0,"--chip-hover":t||l?c.hover:void 0,"--chip-color":t||l?c.color:void 0,"--chip-bd":t||l?c.border:void 0,"--chip-spacing":(0,o.ap)(i,"chip-spacing")}}}),y=(0,C.d5)((e,i)=>{let n=(0,d.w)("Chip",g,e),{classNames:t,className:a,style:o,styles:h,unstyled:C,vars:v,id:x,checked:j,defaultChecked:y,onChange:G,value:w,wrapperProps:V,type:_,disabled:S,children:T,size:A,variant:F,icon:Z,rootRef:E,autoContrast:M,mod:N,...z}=n,D=(0,p.y)({name:"Chip",classes:k,props:n,className:a,style:o,classNames:t,styles:h,unstyled:C,vars:v,varsResolver:b}),R=f(),I=(0,r.M)(x),{styleProps:O,rest:P}=(0,u.c)(z),[L,X]=(0,c.C)({value:j,defaultValue:y,finalValue:!1,onChange:G}),W=R?{checked:R.isChipSelected(w),onChange:e=>{R.onChange(e),G?.(e.currentTarget.checked)},type:R.multiple?"checkbox":"radio"}:{},H=W.checked||L;return(0,l.jsxs)(s.x,{size:A,variant:F,ref:E,mod:N,...D("root"),...O,...V,children:[(0,l.jsx)("input",{type:_,...D("input"),checked:H,onChange:e=>X(e.currentTarget.checked),id:I,disabled:S,ref:i,value:w,...W,...P}),(0,l.jsxs)("label",{htmlFor:I,"data-checked":H||void 0,"data-disabled":S||void 0,...D("label",{variant:F||"filled"}),children:[H&&(0,l.jsx)("span",{...D("iconWrapper"),children:Z||(0,l.jsx)(m.n,{...D("checkIcon")})}),(0,l.jsx)("span",{children:T})]})]})});y.classes=k,y.displayName="@mantine/core/Chip",y.Group=j;let G={type:"configurator",component:function(e){return(0,l.jsx)(y,{defaultChecked:!0,...e,children:"Awesome chip"})},code:`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var w=n(12980),V=n(58898);let _={type:"code",component:function(){return(0,l.jsx)(y,{icon:(0,l.jsx)(w.Z,{style:{width:(0,V.h)(16),height:(0,V.h)(16)}}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:`
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
`,centered:!0};var S=n(93010);let T={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(S.Z,{justify:"center",children:[(0,l.jsx)(y,{value:"default",variant:"outline",children:"Outline default"}),(0,l.jsx)(y,{value:"checked",variant:"outline",children:"Outline checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(S.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"default",variant:"light",children:"Light default"}),(0,l.jsx)(y,{value:"checked",variant:"light",children:"Light checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,l.jsx)(y.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(S.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"default",variant:"filled",children:"Filled default"}),(0,l.jsx)(y,{value:"checked",variant:"filled",children:"Filled checked"}),(0,l.jsx)(y,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}};var A=n(893);let F={type:"code",component:function(){return(0,l.jsx)(A.u,{label:"Chip tooltip",refProp:"rootRef",children:(0,l.jsx)(y,{defaultChecked:!0,children:"Chip with tooltip"})})},code:`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,centered:!0},Z={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Group,{children:(0,l.jsxs)(S.Z,{justify:"center",children:[(0,l.jsx)(y,{value:"1",children:"Single chip"}),(0,l.jsx)(y,{value:"2",children:"Can be selected"}),(0,l.jsx)(y,{value:"3",children:"At a time"})]})}),(0,l.jsx)(y.Group,{multiple:!0,children:(0,l.jsxs)(S.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(y,{value:"1",children:"Multiple chips"}),(0,l.jsx)(y,{value:"2",children:"Can be selected"}),(0,l.jsx)(y,{value:"3",children:"At a time"})]})})]})},code:`
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
`},E={type:"code",component:function(){let[e,i]=(0,a.useState)("first"),n=n=>{n.currentTarget.value===e&&i(null)};return(0,l.jsx)(y.Group,{multiple:!1,value:e,onChange:i,children:(0,l.jsxs)(S.Z,{children:[(0,l.jsx)(y,{value:"first",onClick:n,children:"First"}),(0,l.jsx)(y,{value:"second",onClick:n,children:"Second"}),(0,l.jsx)(y,{value:"third",onClick:n,children:"Third"})]})})},code:`
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
`,centered:!0};var M=n(25071),N=n(15019);let z=(0,M.A)(N.us.Chip);function D(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:n,WrapperProps:r}=i;return n||I("Demo",!0),r||I("WrapperProps",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:G}),"\n",(0,l.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,l.jsx)(n,{data:_}),"\n",(0,l.jsx)(i.h2,{id:"states",children:"States"}),"\n",(0,l.jsx)(n,{data:T}),"\n",(0,l.jsx)(i.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,l.jsxs)(i.p,{children:["To use ",(0,l.jsx)(i.code,{children:"Chip"})," with ",(0,l.jsx)(i.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,l.jsx)(i.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(r,{component:"Chip"}),"\n",(0,l.jsx)(i.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,l.jsx)(i.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,l.jsx)(n,{data:Z}),"\n",(0,l.jsx)(i.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"deselect-radio-chip",children:"Deselect radio chip"}),"\n",(0,l.jsx)(n,{data:E}),"\n",(0,l.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip"})," and ",(0,l.jsx)(i.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(z,{...e,children:(0,l.jsx)(D,{...e})})}function I(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12980:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var l=(0,n(73681).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=83838)}),_N_E=e.O()}]);
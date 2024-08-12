(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96781],{83838:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return n(49904)}])},49904:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return M}});var l=n(52322),t=n(45392),r=n(66178),c=n(9341);n(2784);var a=n(91482),o=n(11200),d=n(38483),h=n(46690),p=n(97072),u=n(28559),s=n(82027),m=n(40284);let[C,f]=(0,n(75336).V)(),v={};function x(e){let{value:i,defaultValue:n,onChange:t,multiple:r,children:a}=(0,d.w)("ChipGroup",v,e),[o,h]=(0,c.C)({value:i,defaultValue:n,finalValue:r?[]:null,onChange:t});return(0,l.jsx)(C,{value:{isChipSelected:e=>Array.isArray(o)?o.includes(e):e===o,onChange:e=>{let i=e.currentTarget.value;Array.isArray(o)?h(o.includes(i)?o.filter(e=>e!==i):[...o,i]):h(i)},multiple:r},children:a})}x.displayName="@mantine/core/ChipGroup";var j={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"};let g={type:"checkbox"},b=(0,o.Z)((e,{size:i,radius:n,variant:l,color:t,autoContrast:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:l||"filled",autoContrast:r});return{root:{"--chip-fz":(0,a.yv)(i),"--chip-size":(0,a.ap)(i,"chip-size"),"--chip-radius":void 0===n?void 0:(0,a.H5)(n),"--chip-checked-padding":(0,a.ap)(i,"chip-checked-padding"),"--chip-padding":(0,a.ap)(i,"chip-padding"),"--chip-icon-size":(0,a.ap)(i,"chip-icon-size"),"--chip-bg":t||l?c.background:void 0,"--chip-hover":t||l?c.hover:void 0,"--chip-color":t||l?c.color:void 0,"--chip-bd":t||l?c.border:void 0,"--chip-spacing":(0,a.ap)(i,"chip-spacing")}}}),k=(0,s.d5)((e,i)=>{let n=(0,d.w)("Chip",g,e),{classNames:t,className:a,style:o,styles:s,unstyled:C,vars:v,id:x,checked:k,defaultChecked:y,onChange:G,value:w,wrapperProps:_,type:V,disabled:A,children:S,size:T,variant:F,icon:N,rootRef:Z,autoContrast:z,mod:E,...M}=n,D=(0,h.y)({name:"Chip",classes:j,props:n,className:a,style:o,classNames:t,styles:s,unstyled:C,vars:v,varsResolver:b}),O=f(),P=(0,r.M)(x),{styleProps:R,rest:I}=(0,p.c)(M),[X,L]=(0,c.C)({value:k,defaultValue:y,finalValue:!1,onChange:G}),W=O?{checked:O.isChipSelected(w),onChange:e=>{O.onChange(e),G?.(e.currentTarget.checked)},type:O.multiple?"checkbox":"radio"}:{},H=W.checked||X;return(0,l.jsxs)(u.x,{size:T,variant:F,ref:Z,mod:E,...D("root"),...R,..._,children:[(0,l.jsx)("input",{type:V,...D("input"),checked:H,onChange:e=>L(e.currentTarget.checked),id:P,disabled:A,ref:i,value:w,...W,...I}),(0,l.jsxs)("label",{htmlFor:P,"data-checked":H||void 0,"data-disabled":A||void 0,...D("label",{variant:F||"filled"}),children:[H&&(0,l.jsx)("span",{...D("iconWrapper"),children:N||(0,l.jsx)(m.n,{...D("checkIcon")})}),(0,l.jsx)("span",{children:S})]})]})});k.classes=j,k.displayName="@mantine/core/Chip",k.Group=x;let y={type:"configurator",component:function(e){return(0,l.jsx)(k,{defaultChecked:!0,...e,children:"Awesome chip"})},code:`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var G=n(12980),w=n(58898);let _={type:"code",component:function(){return(0,l.jsx)(k,{icon:(0,l.jsx)(G.Z,{style:{width:(0,w.h)(16),height:(0,w.h)(16)}}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:`
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
`,centered:!0};var V=n(93010);let A={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(V.Z,{justify:"center",children:[(0,l.jsx)(k,{value:"default",variant:"outline",children:"Outline default"}),(0,l.jsx)(k,{value:"checked",variant:"outline",children:"Outline checked"}),(0,l.jsx)(k,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,l.jsx)(k.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(V.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(k,{value:"default",variant:"light",children:"Light default"}),(0,l.jsx)(k,{value:"checked",variant:"light",children:"Light checked"}),(0,l.jsx)(k,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,l.jsx)(k.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,l.jsxs)(V.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(k,{value:"default",variant:"filled",children:"Filled default"}),(0,l.jsx)(k,{value:"checked",variant:"filled",children:"Filled checked"}),(0,l.jsx)(k,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}};var S=n(893);let T={type:"code",component:function(){return(0,l.jsx)(S.u,{label:"Chip tooltip",refProp:"rootRef",children:(0,l.jsx)(k,{defaultChecked:!0,children:"Chip with tooltip"})})},code:`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,centered:!0},F={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.Group,{children:(0,l.jsxs)(V.Z,{justify:"center",children:[(0,l.jsx)(k,{value:"1",children:"Single chip"}),(0,l.jsx)(k,{value:"2",children:"Can be selected"}),(0,l.jsx)(k,{value:"3",children:"At a time"})]})}),(0,l.jsx)(k.Group,{multiple:!0,children:(0,l.jsxs)(V.Z,{justify:"center",mt:"md",children:[(0,l.jsx)(k,{value:"1",children:"Multiple chips"}),(0,l.jsx)(k,{value:"2",children:"Can be selected"}),(0,l.jsx)(k,{value:"3",children:"At a time"})]})})]})},code:`
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
`};var N=n(25071),Z=n(15019);let z=(0,N.A)(Z.us.Chip);function E(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:n,WrapperProps:r}=i;return n||D("Demo",!0),r||D("WrapperProps",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:y}),"\n",(0,l.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,l.jsx)(n,{data:_}),"\n",(0,l.jsx)(i.h2,{id:"states",children:"States"}),"\n",(0,l.jsx)(n,{data:A}),"\n",(0,l.jsx)(i.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,l.jsxs)(i.p,{children:["To use ",(0,l.jsx)(i.code,{children:"Chip"})," with ",(0,l.jsx)(i.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,l.jsx)(i.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,l.jsx)(n,{data:T}),"\n",(0,l.jsx)(r,{component:"Chip"}),"\n",(0,l.jsx)(i.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,l.jsx)(i.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(i.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Chip"})," and ",(0,l.jsx)(i.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(z,{...e,children:(0,l.jsx)(E,{...e})})}function D(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12980:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var l=(0,n(73681).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=83838)}),_N_E=e.O()}]);
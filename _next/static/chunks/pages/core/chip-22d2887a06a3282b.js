(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6781],{86171:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},29077:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/chip",function(){return i(43564)}])},43564:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return X}});var n=i(24246),l=i(71670),a=i(3916),c=i(30289),r=i(27378),o=i(31002),p=i(58675),h=i(92082),d=i(83453),u=i(96739),s=i(6231),m=i(55934),C=i(56589),f=i(20410),v=i(38765),b=i(89871);let[g,k]=(0,b.V)(),E={};function y(e){let{value:t,defaultValue:i,onChange:n,multiple:l,children:a}=(0,u.w)("ChipGroup",E,e),[c,o]=(0,p.C)({value:t,defaultValue:i,finalValue:l?[]:null,onChange:n});return r.createElement(g,{value:{isChipSelected:e=>Array.isArray(c)?c.includes(e):e===c,onChange:e=>{let t=e.currentTarget.value;Array.isArray(c)?o(c.includes(t)?c.filter(e=>e!==t):[...c,t]):o(t)},multiple:l}},a)}y.displayName="@mantine/core/ChipGroup";var x={root:"m-f59ffda3",label:"m-be049a53","label--outline":"m-3904c1af","label--filled":"m-fa109255","label--light":"m-f7e165c3",iconWrapper:"m-9ac86df9",checkIcon:"m-d6d72580",input:"m-bde07329"};let j={type:"checkbox"},w=(0,d.Z)((e,{size:t,radius:i,variant:n,color:l})=>{let a=e.variantColorResolver({color:l||e.primaryColor,theme:e,variant:n});return{root:{"--chip-fz":(0,h.yv)(t),"--chip-size":(0,h.ap)(t,"chip-size"),"--chip-radius":void 0===i?void 0:(0,h.H5)(i),"--chip-checked-padding":(0,h.ap)(t,"chip-checked-padding"),"--chip-padding":(0,h.ap)(t,"chip-padding"),"--chip-icon-size":(0,h.ap)(t,"chip-icon-size"),"--chip-bg":l||n?a.background:void 0,"--chip-hover":l||n?a.hover:void 0,"--chip-color":l||n?a.color:void 0,"--chip-bd":l||n?a.border:void 0,"--chip-spacing":(0,h.ap)(t,"chip-spacing")}}}),G=(0,f.d)((e,t)=>{let i=(0,u.w)("Chip",j,e),{classNames:n,className:l,style:a,styles:c,unstyled:h,vars:d,id:f,checked:b,defaultChecked:g,onChange:E,value:y,wrapperProps:G,type:V,disabled:A,children:S,size:_,variant:F,icon:T,rootRef:N,...Z}=i,z=(0,s.y)({name:"Chip",classes:x,props:i,className:l,style:a,classNames:n,styles:c,unstyled:h,vars:d,varsResolver:w}),M=k(),D=(0,o.M)(f),{styleProps:O,rest:P}=(0,m.c)(Z),[R,I]=(0,p.C)({value:b,defaultValue:g,finalValue:!1,onChange:E}),X=M?{checked:M.isChipSelected(y),onChange:M.onChange,type:M.multiple?"checkbox":"radio"}:{},L=X.checked||R;return r.createElement(C.x,{size:_,variant:F,ref:N,...z("root"),...O,...G},r.createElement("input",{type:V,...z("input"),checked:L,onChange:e=>I(e.currentTarget.checked),id:D,disabled:A,ref:t,value:y,...X,...P}),r.createElement("label",{htmlFor:D,"data-checked":L||void 0,"data-disabled":A||void 0,...z("label",{variant:F||"filled"})},L&&r.createElement("span",{...z("iconWrapper")},T||r.createElement(v.n,{...z("checkIcon")})),S))});G.classes=x,G.displayName="@mantine/core/Chip",G.Group=y;let V=`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,A={type:"configurator",component:function(e){return r.createElement(G,{defaultChecked:!0,...e},"Awesome chip")},code:V,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]};var S=i(71078),_=i(86171);let F=`
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
`,T={type:"code",component:function(){return r.createElement(G,{icon:r.createElement(_.Z,{style:{width:(0,S.h)(16),height:(0,S.h)(16)}}),color:"red",variant:"filled",defaultChecked:!0},"Forbidden")},code:F,centered:!0};var N=i(22971);let Z={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(G.Group,{multiple:!0,value:["checked","checked-disabled"]},r.createElement(N.Z,{justify:"center"},r.createElement(G,{value:"default",variant:"outline"},"Outline default"),r.createElement(G,{value:"checked",variant:"outline"},"Outline checked"),r.createElement(G,{value:"checked-disabled",disabled:!0,variant:"outline"},"Outline checked disabled"))),r.createElement(G.Group,{multiple:!0,value:["checked","checked-disabled"]},r.createElement(N.Z,{justify:"center",mt:"md"},r.createElement(G,{value:"default",variant:"light"},"Light default"),r.createElement(G,{value:"checked",variant:"light"},"Light checked"),r.createElement(G,{value:"checked-disabled",disabled:!0,variant:"light"},"Light checked disabled"))),r.createElement(G.Group,{multiple:!0,value:["checked","checked-disabled"]},r.createElement(N.Z,{justify:"center",mt:"md"},r.createElement(G,{value:"default",variant:"filled"},"Filled default"),r.createElement(G,{value:"checked",variant:"filled"},"Filled checked"),r.createElement(G,{value:"checked-disabled",disabled:!0,variant:"filled"},"Filled checked disabled"))))}};var z=i(99684);let M=`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,D={type:"code",component:function(){return r.createElement(z.u,{label:"Chip tooltip",refProp:"rootRef"},r.createElement(G,{defaultChecked:!0},"Chip with tooltip"))},code:M,centered:!0},O=`
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
`,P={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(G.Group,null,r.createElement(N.Z,{justify:"center"},r.createElement(G,{value:"1"},"Single chip"),r.createElement(G,{value:"2"},"Can be selected"),r.createElement(G,{value:"3"},"At a time"))),r.createElement(G.Group,{multiple:!0},r.createElement(N.Z,{justify:"center",mt:"md"},r.createElement(G,{value:"1"},"Multiple chips"),r.createElement(G,{value:"2"},"Can be selected"),r.createElement(G,{value:"3"},"At a time"))))},code:O},R=(0,a.A)(c.us.Chip);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:i,WrapperProps:a}=t;return i||L("Demo",!0),a||L("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,n.jsx)(i,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,n.jsx)(i,{data:Z}),"\n",(0,n.jsx)(t.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"Chip"})," with ",(0,n.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,n.jsx)(t.code,{children:'refProp="rootRef"'}),"\non the Tooltip component:"]}),"\n",(0,n.jsx)(i,{data:D}),"\n",(0,n.jsx)(a,{component:"Chip"}),"\n",(0,n.jsx)(t.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Chip.Group"})," component manages state of child Chip components,\nset ",(0,n.jsx)(t.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,n.jsx)(i,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Chip"})," and ",(0,n.jsx)(t.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(R,{...e,children:(0,n.jsx)(I,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=29077)}),_N_E=e.O()}]);
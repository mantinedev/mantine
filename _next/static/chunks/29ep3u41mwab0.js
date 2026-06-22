(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let l={};for(var n in e)i(l,n,{get:e[n],enumerable:!0});return t||i(l,Symbol.toStringTag,{value:"Module"}),l}])},653122,e=>{"use strict";var i=e.i(433512),t=e.i(481178),l=e.i(44091),n=e.i(391466),r=e.i(425254),a=e.i(275519),c=e.i(232471),o=e.i(956031),h=e.i(191788),p=e.i(579560),d=e.i(391398);let s=(0,a.genericFactory)(e=>{let{value:i,defaultValue:t,onChange:n,multiple:r,children:a}=(0,l.useProps)("ChipGroup",null,e),[c,o]=(0,p.useUncontrolled)({value:i,defaultValue:t,finalValue:r?[]:null,onChange:n});return(0,d.jsx)(u,{value:{isChipSelected:e=>Array.isArray(c)?c.includes(e):e===c,onChange:e=>{let i=e.currentTarget.value;Array.isArray(c)?o(c.includes(i)?c.filter(e=>e!==i):[...c,i]):o(i)},multiple:r},children:a})});s.displayName="@mantine/core/ChipGroup";let u=(0,h.createContext)(null);var C={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"},m=e.i(107315);let v={type:"checkbox"},f=(0,t.createVarsResolver)((e,{size:t,radius:l,variant:n,color:r,autoContrast:a})=>{let c=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:n||"filled",autoContrast:a});return{root:{"--chip-fz":(0,i.getFontSize)(t),"--chip-size":(0,i.getSize)(t,"chip-size"),"--chip-radius":void 0===l?void 0:(0,i.getRadius)(l),"--chip-checked-padding":(0,i.getSize)(t,"chip-checked-padding"),"--chip-padding":(0,i.getSize)(t,"chip-padding"),"--chip-icon-size":(0,i.getSize)(t,"chip-icon-size"),"--chip-bg":r||n?c.background:void 0,"--chip-hover":r||n?c.hover:void 0,"--chip-color":r||n?c.color:void 0,"--chip-bd":r||n?c.border:void 0,"--chip-spacing":(0,i.getSize)(t,"chip-spacing")}}}),x=(0,a.factory)(e=>{let i=(0,l.useProps)("Chip",v,e),{classNames:t,className:a,style:s,styles:x,unstyled:j,vars:g,id:b,checked:k,defaultChecked:y,onChange:G,value:L,wrapperProps:S,type:A,disabled:T,children:V,size:w,variant:_,icon:E,rootRef:F,autoContrast:M,mod:z,attributes:P,...R}=i,D=(0,n.useStyles)({name:"Chip",classes:C,props:i,className:a,style:s,classNames:t,styles:x,unstyled:j,attributes:P,vars:g,varsResolver:f}),I=(0,h.use)(u),X=(0,m.useId)(b),{styleProps:N,rest:Z}=(0,r.extractStyleProps)(R),[O,H]=(0,p.useUncontrolled)({value:k,defaultValue:y,finalValue:!1,onChange:G}),U=I?{checked:I.isChipSelected(L),onChange:e=>{I.onChange(e),G?.(e.currentTarget.checked)},type:I.multiple?"checkbox":"radio"}:{},B=U.checked||O;return(0,d.jsxs)(c.Box,{size:w,variant:_,ref:F,mod:z,...D("root"),...N,...S,children:[(0,d.jsx)("input",{type:A,...D("input"),checked:B,onChange:e=>H(e.currentTarget.checked),id:X,disabled:T,value:L,...U,...Z}),(0,d.jsxs)(c.Box,{component:"label",htmlFor:X,mod:{checked:B,disabled:T},...D("label",{variant:_||"filled"}),children:[B&&null!==E&&!1!==E&&(0,d.jsx)("span",{...D("iconWrapper"),children:void 0===E?(0,d.jsx)(o.CheckIcon,{...D("checkIcon")}):E}),(0,d.jsx)("span",{children:V})]})]})});x.classes=C,x.varsResolver=f,x.displayName="@mantine/core/Chip",x.Group=s,e.s(["Chip",0,x],653122)},869433,e=>{"use strict";var i=e.i(191788),t=e.i(171481);let l=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),n=i.forwardRef((e,n)=>i.createElement(t.default,{ref:n,...e,weights:l}));n.displayName="XIcon",e.s(["XIcon",0,n],869433)},335633,e=>{"use strict";var i=e.i(391398),t=e.i(38856),l=e.i(648863),n=e.i(653122),r=e.i(725695);let a={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Chip.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,i.jsxs)(r.Group,{justify:"center",children:[(0,i.jsx)(n.Chip,{value:"default",variant:"outline",children:"Outline default"}),(0,i.jsx)(n.Chip,{value:"checked",variant:"outline",children:"Outline checked"}),(0,i.jsx)(n.Chip,{value:"checked-disabled",disabled:!0,variant:"outline",children:"Outline checked disabled"})]})}),(0,i.jsx)(n.Chip.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,i.jsxs)(r.Group,{justify:"center",mt:"md",children:[(0,i.jsx)(n.Chip,{value:"default",variant:"light",children:"Light default"}),(0,i.jsx)(n.Chip,{value:"checked",variant:"light",children:"Light checked"}),(0,i.jsx)(n.Chip,{value:"checked-disabled",disabled:!0,variant:"light",children:"Light checked disabled"})]})}),(0,i.jsx)(n.Chip.Group,{multiple:!0,value:["checked","checked-disabled"],children:(0,i.jsxs)(r.Group,{justify:"center",mt:"md",children:[(0,i.jsx)(n.Chip,{value:"default",variant:"filled",children:"Filled default"}),(0,i.jsx)(n.Chip,{value:"checked",variant:"filled",children:"Filled checked"}),(0,i.jsx)(n.Chip,{value:"checked-disabled",disabled:!0,variant:"filled",children:"Filled checked disabled"})]})})]})}},c={type:"configurator",component:function(e){return(0,i.jsx)(n.Chip,{defaultChecked:!0,...e,children:"Awesome chip"})},code:`
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"},{value:"light",label:"Light"}],initialValue:"filled",libraryValue:"filled"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"}]},o={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Chip.Group,{children:(0,i.jsxs)(r.Group,{justify:"center",children:[(0,i.jsx)(n.Chip,{value:"1",children:"Single chip"}),(0,i.jsx)(n.Chip,{value:"2",children:"Can be selected"}),(0,i.jsx)(n.Chip,{value:"3",children:"At a time"})]})}),(0,i.jsx)(n.Chip.Group,{multiple:!0,children:(0,i.jsxs)(r.Group,{justify:"center",mt:"md",children:[(0,i.jsx)(n.Chip,{value:"1",children:"Multiple chips"}),(0,i.jsx)(n.Chip,{value:"2",children:"Can be selected"}),(0,i.jsx)(n.Chip,{value:"3",children:"At a time"})]})})]})},code:`
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
`};var h=e.i(869433);let p={type:"code",component:function(){return(0,i.jsx)(n.Chip,{icon:(0,i.jsx)(h.XIcon,{size:16}),color:"red",variant:"filled",defaultChecked:!0,children:"Forbidden"})},code:`
import { Chip } from '@mantine/core';
import { XIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Chip
      icon={<XIcon size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`,centered:!0};var d=e.i(431868);let s={type:"code",component:function(){return(0,i.jsx)(d.Tooltip,{label:"Chip tooltip",refProp:"rootRef",children:(0,i.jsx)(n.Chip,{defaultChecked:!0,children:"Chip with tooltip"})})},code:`
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`,centered:!0};var u=e.i(191788);let C={type:"code",component:function(){let[e,t]=(0,u.useState)("first"),l=i=>{i.currentTarget.value===e&&t(null)};return(0,i.jsx)(n.Chip.Group,{multiple:!1,value:e,onChange:t,children:(0,i.jsxs)(r.Group,{children:[(0,i.jsx)(n.Chip,{value:"first",onClick:l,children:"First"}),(0,i.jsx)(n.Chip,{value:"second",onClick:l,children:"Second"}),(0,i.jsx)(n.Chip,{value:"third",onClick:l,children:"Third"})]})})},code:`
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
`,centered:!0};var m=(0,l.__exportAll)({configurator:()=>c,deselect:()=>C,group:()=>o,icon:()=>p,states:()=>a,tooltip:()=>s});e.i(603441);var v=e.i(62558);e.i(457450);var f=e.i(418026);let x=(0,v.Layout)(f.MDX_DATA.Chip);function j(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...e.components},{Demo:n,WrapperProps:r}=l;return n||g("Demo",!0),r||g("WrapperProps",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:m.configurator}),"\n",(0,i.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Chip } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>\n      My chip\n    </Chip>\n  );\n}\n"})}),"\n",(0,i.jsx)(l.h2,{id:"change-checked-icon",children:"Change checked icon"}),"\n",(0,i.jsx)(n,{data:m.icon}),"\n",(0,i.jsx)(l.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(n,{data:m.states}),"\n",(0,i.jsx)(l.h2,{id:"chip-with-tooltip",children:"Chip with tooltip"}),"\n",(0,i.jsxs)(l.p,{children:["To use ",(0,i.jsx)(l.code,{children:"Chip"})," with ",(0,i.jsx)(l.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components, set ",(0,i.jsx)(l.code,{children:'refProp="rootRef"'}),"\non the ",(0,i.jsx)(l.a,{href:"/core/tooltip/",children:"Tooltip"})," component:"]}),"\n",(0,i.jsx)(n,{data:m.tooltip}),"\n",(0,i.jsx)(r,{component:"Chip"}),"\n",(0,i.jsx)(l.h2,{id:"chipgroup",children:"Chip.Group"}),"\n",(0,i.jsxs)(l.p,{children:["The ",(0,i.jsx)(l.code,{children:"Chip.Group"})," component manages the state of child Chip components.\nSet the ",(0,i.jsx)(l.code,{children:"multiple"})," prop to allow multiple chips to be selected at a time:"]}),"\n",(0,i.jsx)(n,{data:m.group}),"\n",(0,i.jsx)(l.h2,{id:"controlled-chipgroup",children:"Controlled Chip.Group"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Chip } from \'@mantine/core\';\n\nfunction Single() {\n  // string value when multiple is false (default)\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Chip.Group multiple={false} value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n\nfunction Multiple() {\n  // array of strings value when multiple is true\n  const [value, setValue] = useState([\'react\']);\n\n  return (\n    <Chip.Group multiple value={value} onChange={setValue}>\n      <Chip value="react">React</Chip>\n      <Chip value="ng">Angular</Chip>\n      <Chip value="svelte">Svelte</Chip>\n      <Chip value="vue">Vue</Chip>\n    </Chip.Group>\n  );\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"deselect-radio-chip",children:"Deselect radio chip"}),"\n",(0,i.jsx)(n,{data:m.deselect}),"\n",(0,i.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"Chip"})," and ",(0,i.jsx)(l.code,{children:"Chip.Group"})," components are accessible by default – they are built with native radio/checkbox inputs,\nall keyboard events work the same as with native controls."]})]})}function g(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,i.jsx)(x,{...e,children:(0,i.jsx)(j,{...e})})}],335633)},130411,(e,i,t)=>{let l="/core/chip";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(335633)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);
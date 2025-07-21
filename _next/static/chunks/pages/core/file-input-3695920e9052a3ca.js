(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81954],{20881:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return l(83613)}])},83613:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>A});var n=l(31085),r=l(71184),i=l(79823);let a={type:"configurator",component:function(e){return(0,n.jsx)(i.z,{...e,placeholder:"Input placeholder"})},code:`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:l(23232).$7},o={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,component:function(){return(0,n.jsx)(i.z,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},s={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,component:function(){return(0,n.jsx)(i.z,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},p={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,component:function(){return(0,n.jsx)(i.z,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var c=l(31778);let u=({value:e})=>null===e?null:Array.isArray(e)?(0,n.jsx)(c.a.Group,{children:e.map((e,t)=>(0,n.jsx)(c.a,{children:e.name},t))}):(0,n.jsx)(c.a,{children:e.name}),d={type:"code",code:`
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
`,component:function(){return(0,n.jsx)(i.z,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:u})},centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.z,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(i.z,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},m={type:"code",component:function(){return(0,n.jsx)(i.z,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var v=(0,l(73366).A)("outline","file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]);let y={type:"code",component:function(){let e=(0,n.jsx)(v,{size:18,stroke:1.5});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.z,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),(0,n.jsx)(i.z,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
import { FileInput } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340};var f=l(32653),g=l(29274);let x=`
import { IconAt } from '@tabler/icons-react';
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {{props}}
    />
  );
}
`,b={type:"styles-api",data:g.P,component:function(e){return(0,n.jsx)(i.z,{label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(f.A,{size:18}),...e})},code:x,centered:!0,maxWidth:340};var j=l(18675),I=l(20017);let k=(0,j.P)(I.XZ.FileInput);function F(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:l,GetElementRef:i,InputAccessibility:c,InputFeatures:u,InputSections:v,StylesApiSelectors:f}=t;return l||V("Demo",!0),i||V("GetElementRef",!0),c||V("InputAccessibility",!0),u||V("InputFeatures",!0),v||V("InputSections",!0),f||V("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(u,{component:"FileInput",element:"input"}),"\n",(0,n.jsx)(l,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"multiple"})," is ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"multiple"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,n.jsx)(l,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,n.jsx)(l,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,n.jsx)(l,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,n.jsx)(l,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(l,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(l,{data:m}),"\n",(0,n.jsx)(v,{component:"FileInput"}),"\n",(0,n.jsx)(l,{data:y}),"\n",(0,n.jsx)(f,{component:"FileInput"}),"\n",(0,n.jsx)(l,{data:b}),"\n",(0,n.jsx)(i,{component:"FileInput",refType:"button"}),"\n",(0,n.jsx)(c,{component:"FileInput"}),"\n",(0,n.jsx)(t.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,n.jsx)(t.code,{children:"multiple"})," value."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,{...e,children:(0,n.jsx)(F,{...e})})}function V(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},32653:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},61584:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,l)=>{"use strict";l.d(t,{A:()=>n});var n=(0,l(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23232:(e,t,l)=>{"use strict";l.d(t,{$7:()=>i,l$:()=>n,wQ:()=>r});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},28561:(e,t,l)=>{"use strict";l.d(t,{H:()=>s});var n=l(31085),r=l(14041),i=l(34321),a=l(29686);let o={multiple:!1},s=(0,r.forwardRef)((e,t)=>{let{onChange:l,children:s,multiple:p,accept:c,name:u,form:d,resetRef:h,disabled:m,capture:v,inputProps:y,...f}=(0,a.Y)("FileButton",o,e),g=(0,r.useRef)(null);return(0,i.bl)(h,()=>{g.current&&(g.current.value="")}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{style:{display:"none"},type:"file",accept:c,multiple:p,onChange:e=>{if(null===e.currentTarget.files)return l(p?[]:null);p?l(Array.from(e.currentTarget.files)):l(e.currentTarget.files[0]||null)},ref:(0,i.pc)(t,g),name:u,form:d,capture:v,...y}),s({onClick:()=>{m||g.current?.click()},...f})]})});s.displayName="@mantine/core/FileButton"},79823:(e,t,l)=>{"use strict";l.d(t,{z:()=>y});var n=l(31085),r=l(14041),i=l(82307),a=l(34321),o=l(36456),s=l(29686),p=l(6754),c=l(94310),u=l(28561),d=l(34452),h=l(87059);let m={valueComponent:({value:e})=>(0,n.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name})},v=(0,p.P9)((e,t)=>{let l=(0,s.Y)("FileInput",m,e),{unstyled:p,vars:v,onChange:y,value:f,defaultValue:g,multiple:x,accept:b,name:j,form:I,valueComponent:k,clearable:F,clearButtonProps:A,readOnly:V,capture:M,fileInputProps:C,rightSection:P,size:z,placeholder:w,component:S,resetRef:_,classNames:D,styles:U,attributes:E,...N}=l,W=(0,r.useRef)(null),{resolvedClassNames:Y,resolvedStyles:R}=(0,o.Y)({classNames:D,styles:U,props:l}),[G,T]=(0,i.Z)({value:f,defaultValue:g,onChange:y,finalValue:x?[]:null}),B=Array.isArray(G)?0!==G.length:null!==G,O=P||(F&&B&&!V?(0,n.jsx)(c.J,{...A,variant:"subtle",onClick:()=>T(x?[]:null),size:z,unstyled:p}):null);return(0,r.useEffect)(()=>{(Array.isArray(G)&&0===G.length||null===G)&&W.current?.()},[G]),(0,n.jsx)(u.H,{onChange:T,multiple:x,accept:b,name:j,form:I,resetRef:(0,a.pc)(W,_),disabled:V,capture:M,inputProps:C,children:e=>(0,n.jsx)(h.O,{component:S||"button",ref:t,rightSection:O,...e,...N,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:l,unstyled:p,size:z,classNames:D,styles:U,attributes:E,children:B?(0,n.jsx)(k,{value:G}):(0,n.jsx)(d.p.Placeholder,{__staticSelector:"FileInput",classNames:Y,styles:R,attributes:E,children:w})})})});v.classes=h.O.classes,v.displayName="@mantine/core/FileInput";let y=v},31778:(e,t,l)=>{"use strict";l.d(t,{a:()=>x});var n=l(31085);l(14041);var r=l(33450),i=l(7098),a=l(29686),o=l(69564),s=l(34056),p=l(6754),c=l(94310),u=l(73418);let[d,h]=(0,l(49128).e)();var m={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let v=(0,i.V)((e,{gap:t},{size:l})=>({group:{"--pg-gap":void 0!==t?(0,r.YC)(t):(0,r.YC)(l,"pg-gap")}})),y=(0,p.P9)((e,t)=>{let l=(0,a.Y)("PillGroup",null,e),{classNames:r,className:i,style:p,styles:c,unstyled:h,vars:y,size:f,disabled:g,attributes:x,...b}=l,j=(0,u.n)(),I=j?.size||f||void 0,k=(0,o.I)({name:"PillGroup",classes:m,props:l,className:i,style:p,classNames:r,styles:c,unstyled:h,attributes:x,vars:y,varsResolver:v,stylesCtx:{size:I},rootSelector:"group"});return(0,n.jsx)(d,{value:{size:I,disabled:g},children:(0,n.jsx)(s.a,{ref:t,size:I,...k("group"),...b})})});y.classes=m,y.displayName="@mantine/core/PillGroup";let f={variant:"default"},g=(0,i.V)((e,{radius:t},{size:l})=>({root:{"--pill-fz":(0,r.YC)(l,"pill-fz"),"--pill-height":(0,r.YC)(l,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.nJ)(t)}})),x=(0,p.P9)((e,t)=>{let l=(0,a.Y)("Pill",f,e),{classNames:r,className:i,style:p,styles:d,unstyled:v,vars:y,variant:x,children:b,withRemoveButton:j,onRemove:I,removeButtonProps:k,radius:F,size:A,disabled:V,mod:M,attributes:C,...P}=l,z=h(),w=(0,u.n)(),S=A||z?.size||void 0,_=w?.variant==="filled"?"contrast":x||"default",D=(0,o.I)({name:"Pill",classes:m,props:l,className:i,style:p,classNames:r,styles:d,unstyled:v,attributes:C,vars:y,varsResolver:g,stylesCtx:{size:S}});return(0,n.jsxs)(s.a,{component:"span",ref:t,variant:_,size:S,...D("root",{variant:_}),mod:[{"with-remove":j&&!V,disabled:V||z?.disabled},M],...P,children:[(0,n.jsx)("span",{...D("label"),children:b}),j&&(0,n.jsx)(c.J,{variant:"transparent",radius:F,tabIndex:-1,"aria-hidden":!0,unstyled:v,...k,...D("remove",{className:k?.className,style:k?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),k?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),k?.onClick?.(e)}})]})});x.classes=m,x.displayName="@mantine/core/Pill",x.Group=y},73418:(e,t,l)=>{"use strict";l.d(t,{n:()=>r,q:()=>n}),l(14041),l(31085);let[n,r]=(0,l(49128).e)()}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(20881)),_N_E=e.O()}]);
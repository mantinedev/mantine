(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81954],{20881:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return t(49567)}])},49567:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>N});var n=t(31085),r=t(71184),i=t(14041),a=t(82307),o=t(34321),s=t(36456),p=t(29686),c=t(6754),u=t(94310),d=t(28561),m=t(34452),h=t(87059);let f={valueComponent:({value:e})=>(0,n.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name})},y=(0,c.P9)((e,l)=>{let t=(0,p.Y)("FileInput",f,e),{unstyled:r,vars:c,onChange:y,value:x,defaultValue:b,multiple:j,accept:v,name:g,form:I,valueComponent:F,clearable:V,clearButtonProps:P,readOnly:C,capture:A,fileInputProps:S,rightSection:k,size:w,placeholder:_,component:z,resetRef:D,classNames:U,styles:E,...N}=t,W=(0,i.useRef)(null),{resolvedClassNames:Y,resolvedStyles:M}=(0,s.Y)({classNames:U,styles:E,props:t}),[G,R]=(0,a.Z)({value:x,defaultValue:b,onChange:y,finalValue:j?[]:null}),B=Array.isArray(G)?0!==G.length:null!==G,O=k||(V&&B&&!C?(0,n.jsx)(u.J,{...P,variant:"subtle",onClick:()=>R(j?[]:null),size:w,unstyled:r}):null);return(0,i.useEffect)(()=>{(Array.isArray(G)&&0===G.length||null===G)&&W.current?.()},[G]),(0,n.jsx)(d.H,{onChange:R,multiple:j,accept:v,name:g,form:I,resetRef:(0,o.pc)(W,D),disabled:C,capture:A,inputProps:S,children:e=>(0,n.jsx)(h.O,{component:z||"button",ref:l,rightSection:O,...e,...N,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:t,unstyled:r,size:w,classNames:U,styles:E,children:B?(0,n.jsx)(F,{value:G}):(0,n.jsx)(m.p.Placeholder,{__staticSelector:"FileInput",classNames:Y,styles:M,children:_})})})});y.classes=h.O.classes,y.displayName="@mantine/core/FileInput";let x={type:"configurator",component:function(e){return(0,n.jsx)(y,{...e,placeholder:"Input placeholder"})},code:`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:t(23232).$7},b={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,component:function(){return(0,n.jsx)(y,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},j={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,component:function(){return(0,n.jsx)(y,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},v={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,component:function(){return(0,n.jsx)(y,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var g=t(31778);let I=({value:e})=>null===e?null:Array.isArray(e)?(0,n.jsx)(g.a.Group,{children:e.map((e,l)=>(0,n.jsx)(g.a,{children:e.name},l))}):(0,n.jsx)(g.a,{children:e.name}),F={type:"code",code:`
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
`,component:function(){return(0,n.jsx)(y,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:I})},centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},P={type:"code",component:function(){return(0,n.jsx)(y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var C=(0,t(73366).A)("outline","file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]);let A={type:"code",component:function(){let e=(0,n.jsx)(C,{size:18,stroke:1.5});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),(0,n.jsx)(y,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};var S=t(32653),k=t(29274);let w=`
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
`,_={type:"styles-api",data:k.P,component:function(e){return(0,n.jsx)(y,{label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(S.A,{size:18}),...e})},code:w,centered:!0,maxWidth:340};var z=t(85954),D=t(38215);let U=(0,z.P)(D.XZ.FileInput);function E(e){let l={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t,GetElementRef:i,InputAccessibility:a,InputFeatures:o,InputSections:s,StylesApiSelectors:p}=l;return t||W("Demo",!0),i||W("GetElementRef",!0),a||W("InputAccessibility",!0),o||W("InputFeatures",!0),s||W("InputSections",!0),p||W("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{component:"FileInput",element:"input"}),"\n",(0,n.jsx)(t,{data:x}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(l.p,{children:["When ",(0,n.jsx)(l.code,{children:"multiple"})," is ",(0,n.jsx)(l.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["When ",(0,n.jsx)(l.code,{children:"multiple"})," is ",(0,n.jsx)(l.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"multiple",children:"Multiple"}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(l.h2,{id:"accept",children:"Accept"}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,n.jsx)(t,{data:j}),"\n",(0,n.jsx)(l.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(l.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,n.jsx)(t,{data:F}),"\n",(0,n.jsx)(l.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(t,{data:V}),"\n",(0,n.jsx)(l.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(t,{data:P}),"\n",(0,n.jsx)(s,{component:"FileInput"}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(p,{component:"FileInput"}),"\n",(0,n.jsx)(t,{data:_}),"\n",(0,n.jsx)(i,{component:"FileInput",refType:"button"}),"\n",(0,n.jsx)(a,{component:"FileInput"}),"\n",(0,n.jsx)(l.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,n.jsx)(l.code,{children:"multiple"})," value."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(U,{...e,children:(0,n.jsx)(E,{...e})})}function W(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,l,t)=>{"use strict";t.d(l,{A:()=>n});var n=(0,t(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,l,t)=>{"use strict";t.d(l,{$7:()=>i,l$:()=>n,wQ:()=>r});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},28561:(e,l,t)=>{"use strict";t.d(l,{H:()=>s});var n=t(31085),r=t(14041),i=t(34321),a=t(29686);let o={multiple:!1},s=(0,r.forwardRef)((e,l)=>{let{onChange:t,children:s,multiple:p,accept:c,name:u,form:d,resetRef:m,disabled:h,capture:f,inputProps:y,...x}=(0,a.Y)("FileButton",o,e),b=(0,r.useRef)(null);return(0,i.bl)(m,()=>{b.current&&(b.current.value="")}),(0,n.jsxs)(n.Fragment,{children:[s({onClick:()=>{h||b.current?.click()},...x}),(0,n.jsx)("input",{style:{display:"none"},type:"file",accept:c,multiple:p,onChange:e=>{p?t(Array.from(e.currentTarget.files)):t(e.currentTarget.files[0]||null)},ref:(0,i.pc)(l,b),name:u,form:d,capture:f,...y})]})});s.displayName="@mantine/core/FileButton"},31778:(e,l,t)=>{"use strict";t.d(l,{a:()=>v});var n=t(31085);t(14041);var r=t(33450),i=t(7098),a=t(29686),o=t(69564),s=t(34056),p=t(6754),c=t(94310),u=t(73418);let[d,m]=(0,t(49128).e)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let f={},y=(0,i.V)((e,{gap:l},{size:t})=>({group:{"--pg-gap":void 0!==l?(0,r.YC)(l):(0,r.YC)(t,"pg-gap")}})),x=(0,p.P9)((e,l)=>{let t=(0,a.Y)("PillGroup",f,e),{classNames:r,className:i,style:p,styles:c,unstyled:m,vars:x,size:b,disabled:j,...v}=t,g=(0,u.n)(),I=g?.size||b||void 0,F=(0,o.I)({name:"PillGroup",classes:h,props:t,className:i,style:p,classNames:r,styles:c,unstyled:m,vars:x,varsResolver:y,stylesCtx:{size:I},rootSelector:"group"});return(0,n.jsx)(d,{value:{size:I,disabled:j},children:(0,n.jsx)(s.a,{ref:l,size:I,...F("group"),...v})})});x.classes=h,x.displayName="@mantine/core/PillGroup";let b={variant:"default"},j=(0,i.V)((e,{radius:l},{size:t})=>({root:{"--pill-fz":(0,r.YC)(t,"pill-fz"),"--pill-height":(0,r.YC)(t,"pill-height"),"--pill-radius":void 0===l?void 0:(0,r.nJ)(l)}})),v=(0,p.P9)((e,l)=>{let t=(0,a.Y)("Pill",b,e),{classNames:r,className:i,style:p,styles:d,unstyled:f,vars:y,variant:x,children:v,withRemoveButton:g,onRemove:I,removeButtonProps:F,radius:V,size:P,disabled:C,mod:A,...S}=t,k=m(),w=(0,u.n)(),_=P||k?.size||void 0,z=w?.variant==="filled"?"contrast":x||"default",D=(0,o.I)({name:"Pill",classes:h,props:t,className:i,style:p,classNames:r,styles:d,unstyled:f,vars:y,varsResolver:j,stylesCtx:{size:_}});return(0,n.jsxs)(s.a,{component:"span",ref:l,variant:z,size:_,...D("root",{variant:z}),mod:[{"with-remove":g&&!C,disabled:C||k?.disabled},A],...S,children:[(0,n.jsx)("span",{...D("label"),children:v}),g&&(0,n.jsx)(c.J,{variant:"transparent",radius:V,tabIndex:-1,"aria-hidden":!0,unstyled:f,...F,...D("remove",{className:F?.className,style:F?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),F?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),F?.onClick?.(e)}})]})});v.classes=h,v.displayName="@mantine/core/Pill",v.Group=x},73418:(e,l,t)=>{"use strict";t.d(l,{n:()=>r,q:()=>n}),t(14041),t(31085);let[n,r]=(0,t(49128).e)()}},e=>{var l=l=>e(e.s=l);e.O(0,[67456,39699,68831,90636,46593,38792],()=>l(20881)),_N_E=e.O()}]);
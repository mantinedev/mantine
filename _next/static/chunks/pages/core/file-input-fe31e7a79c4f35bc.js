(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38879],{93693:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var n=(0,l(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},36286:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return l(4891)}])},4891:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Y}});var n=l(24246),r=l(71670),i=l(27378),a=l(58675),o=l(96739),p=l(20410),c=l(96217),u=l(20345),s=l(42487),d=l(23163);let m={valueComponent:({value:e})=>i.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name)},h=(0,p.d)((e,t)=>{let l=(0,o.w)("FileInput",m,e),{unstyled:n,vars:r,onChange:p,value:h,defaultValue:f,multiple:y,accept:b,name:v,form:g,valueComponent:x,clearable:I,clearButtonProps:F,readOnly:j,capture:V,fileInputProps:E,rightSection:P,size:C,placeholder:w,...D}=l,A=(0,i.useRef)(null),[S,k]=(0,a.C)({value:h,defaultValue:f,onChange:p,finalValue:y?[]:null}),z=Array.isArray(S)?0!==S.length:null!==S,U=P||(I&&z&&!j?i.createElement(c.P,{...F,variant:"subtle",onClick:()=>k(y?[]:null),size:C,unstyled:n}):null);return(0,i.useEffect)(()=>{(Array.isArray(S)&&0===S.length||null===S)&&A.current?.()},[S]),i.createElement(u.S,{onChange:k,multiple:y,accept:b,name:v,form:g,resetRef:A,disabled:j,capture:V,inputProps:E},e=>i.createElement(d.M,{component:"button",ref:t,rightSection:U,...e,...D,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:l,unstyled:n,size:C},z?i.createElement(x,{value:S}):i.createElement(s.I.Placeholder,null,w)))});h.classes=d.M.classes,h.displayName="@mantine/core/FileInput";var f=l(77481);let y=`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,b={type:"configurator",component:function(e){return i.createElement(h,{...e,placeholder:"Input placeholder"})},code:y,centered:!0,maxWidth:340,controls:f.pc},v=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,g={type:"code",code:v,component:function(){return i.createElement(h,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},x=`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,I={type:"code",code:x,component:function(){return i.createElement(h,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},F=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,j={type:"code",code:F,component:function(){return i.createElement(h,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var V=l(39394);let E=`
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
`,P=({value:e})=>null===e?null:Array.isArray(e)?i.createElement(V.D.Group,null,e.map((e,t)=>i.createElement(V.D,{key:t},e.name))):i.createElement(V.D,null,e.name),C={type:"code",code:E,component:function(){return i.createElement(h,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:P})},centered:!0,maxWidth:340},w=`
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
`,D={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(h,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(h,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:w},A=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,S={type:"code",component:function(){return i.createElement(h,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:A};var k=(0,l(54764).Z)("file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]),z=l(71078);let U=`
import { FileInput, rem } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

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
`,W={type:"code",component:function(){let e=i.createElement(k,{style:{width:(0,z.h)(18),height:(0,z.h)(18)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(h,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),i.createElement(h,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"}))},code:U,centered:!0,maxWidth:340};var _=l(93693),N=l(29237);let M=`
import { IconAt } from '@tabler/icons-react';
import { FileInput, rem } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`,G={type:"styles-api",data:N.T,component:function(e){return i.createElement(h,{label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(_.Z,{style:{width:(0,z.h)(18),height:(0,z.h)(18)}}),...e})},code:M,centered:!0,maxWidth:340};var B=l(3916),R=l(54568);let T=(0,B.A)(R.us.FileInput);function Z(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:l,GetElementRef:i,InputAccessibility:a,InputFeatures:o,InputSections:p,StylesApiSelectors:c}=t;return l||O("Demo",!0),i||O("GetElementRef",!0),a||O("InputAccessibility",!0),o||O("InputFeatures",!0),p||O("InputSections",!0),c||O("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{component:"FileInput",element:"input"}),"\n",(0,n.jsx)(l,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"multiple"})," is ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"multiple"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,n.jsx)(l,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,n.jsx)(l,{data:I}),"\n",(0,n.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,n.jsx)(l,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,n.jsx)(l,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(l,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(l,{data:S}),"\n",(0,n.jsx)(p,{component:"FileInput"}),"\n",(0,n.jsx)(l,{data:W}),"\n",(0,n.jsx)(c,{component:"FileInput"}),"\n",(0,n.jsx)(l,{data:G}),"\n",(0,n.jsx)(i,{component:"FileInput",refType:"button"}),"\n",(0,n.jsx)(a,{component:"FileInput"}),"\n",(0,n.jsx)(t.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,n.jsx)(t.code,{children:"multiple"})," value."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(T,{...e,children:(0,n.jsx)(Z,{...e})})}function O(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,l){"use strict";l.d(t,{Mt:function(){return n},nW:function(){return r},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},20345:function(e,t,l){"use strict";l.d(t,{S:function(){return o}});var n=l(27378),r=l(72840),i=l(96739);let a={multiple:!1},o=(0,n.forwardRef)((e,t)=>{let{onChange:l,children:o,multiple:p,accept:c,name:u,form:s,resetRef:d,disabled:m,capture:h,inputProps:f,...y}=(0,i.w)("FileButton",a,e),b=(0,n.useRef)();return(0,r.kR)(d,()=>{b.current.value=""}),n.createElement(n.Fragment,null,o({onClick:()=>{m||b.current?.click()},...y}),n.createElement("input",{style:{display:"none"},type:"file",accept:c,multiple:p,onChange:e=>{p?l(Array.from(e.currentTarget.files)):l(e.currentTarget.files[0]||null)},ref:(0,r.Yx)(t,b),name:u,form:s,capture:h,...f}))});o.displayName="@mantine/core/FileButton"},39394:function(e,t,l){"use strict";l.d(t,{D:function(){return I}});var n=l(27378),r=l(92082),i=l(83453),a=l(96739),o=l(6231),p=l(56589),c=l(20410),u=l(96217),s=l(33),d=l(89871);let[m,h]=(0,d.V)();var f={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let y={},b=(0,i.Z)((e,{gap:t},{size:l})=>({group:{"--pg-gap":void 0!==t?(0,r.ap)(t):(0,r.ap)(l,"pg-gap")}})),v=(0,c.d)((e,t)=>{let l=(0,a.w)("PillGroup",y,e),{classNames:r,className:i,style:c,styles:u,unstyled:d,vars:h,size:v,disabled:g,...x}=l,I=(0,s.D)(),F=I?.size||v||void 0,j=(0,o.y)({name:"PillGroup",classes:f,props:l,className:i,style:c,classNames:r,styles:u,unstyled:d,vars:h,varsResolver:b,stylesCtx:{size:F},rootSelector:"group"});return n.createElement(m,{value:{size:F,disabled:g}},n.createElement(p.x,{ref:t,size:F,...j("group"),...x}))});v.classes=f,v.displayName="@mantine/core/PillGroup";let g={variant:"default"},x=(0,i.Z)((e,{radius:t},{size:l})=>({root:{"--pill-fz":(0,r.ap)(l,"pill-fz"),"--pill-height":(0,r.ap)(l,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.H5)(t)}})),I=(0,c.d)((e,t)=>{let l=(0,a.w)("Pill",g,e),{classNames:r,className:i,style:c,styles:d,unstyled:m,vars:y,variant:b,children:v,withRemoveButton:I,onRemove:F,removeButtonProps:j,radius:V,size:E,disabled:P,mod:C,...w}=l,D=h(),A=(0,s.D)(),S=E||D?.size||void 0,k=A?.variant==="filled"?"contrast":b||"default",z=(0,o.y)({name:"Pill",classes:f,props:l,className:i,style:c,classNames:r,styles:d,unstyled:m,vars:y,varsResolver:x,stylesCtx:{size:S}});return n.createElement(p.x,{component:"span",ref:t,variant:k,size:S,...z("root",{variant:k}),mod:[{"with-remove":I,disabled:P||D?.disabled},C],...w},n.createElement("span",{...z("label")},v),I&&n.createElement(u.P,{variant:"transparent",radius:V,tabIndex:-1,"aria-hidden":!0,unstyled:m,...j,...z("remove",{className:j?.className,style:j?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),j?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),F?.(),j?.onClick?.(e)}}))});I.classes=f,I.displayName="@mantine/core/Pill",I.Group=v},33:function(e,t,l){"use strict";l.d(t,{D:function(){return i},H:function(){return r}}),l(27378);var n=l(89871);let[r,i]=(0,n.V)()}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=36286)}),_N_E=e.O()}]);
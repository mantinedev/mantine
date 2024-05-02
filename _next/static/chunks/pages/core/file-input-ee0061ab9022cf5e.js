(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38879],{35661:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},73322:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return n(65369)}])},65369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var l=n(52322),r=n(45392),i=n(2784),o=n(9341),a=n(38483),s=n(82027),p=n(2670),u=n(1787),c=n(6941),d=n(73063);let m={valueComponent:({value:e})=>(0,l.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name})},h=(0,s.d)((e,t)=>{let n=(0,a.w)("FileInput",m,e),{unstyled:r,vars:s,onChange:h,value:f,defaultValue:y,multiple:x,accept:b,name:j,form:v,valueComponent:g,clearable:I,clearButtonProps:F,readOnly:V,capture:P,fileInputProps:C,rightSection:w,size:D,placeholder:A,...S}=n,k=(0,i.useRef)(null),[_,z]=(0,o.C)({value:f,defaultValue:y,onChange:h,finalValue:x?[]:null}),U=Array.isArray(_)?0!==_.length:null!==_,E=w||(I&&U&&!V?(0,l.jsx)(p.P,{...F,variant:"subtle",onClick:()=>z(x?[]:null),size:D,unstyled:r}):null);return(0,i.useEffect)(()=>{(Array.isArray(_)&&0===_.length||null===_)&&k.current?.()},[_]),(0,l.jsx)(u.S,{onChange:z,multiple:x,accept:b,name:j,form:v,resetRef:k,disabled:V,capture:P,inputProps:C,children:e=>(0,l.jsx)(d.M,{component:"button",ref:t,rightSection:E,...e,...S,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:n,unstyled:r,size:D,children:U?(0,l.jsx)(g,{value:_}):(0,l.jsx)(c.I.Placeholder,{children:A})})})});h.classes=d.M.classes,h.displayName="@mantine/core/FileInput";var f=n(76528);let y=`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,x={type:"configurator",component:function(e){return(0,l.jsx)(h,{...e,placeholder:"Input placeholder"})},code:y,centered:!0,maxWidth:340,controls:f.pc},b=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,j={type:"code",code:b,component:function(){return(0,l.jsx)(h,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},v=`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,g={type:"code",code:v,component:function(){return(0,l.jsx)(h,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},I=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,F={type:"code",code:I,component:function(){return(0,l.jsx)(h,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var V=n(45855);let P=`
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
`,C=({value:e})=>null===e?null:Array.isArray(e)?(0,l.jsx)(V.D.Group,{children:e.map((e,t)=>(0,l.jsx)(V.D,{children:e.name},t))}):(0,l.jsx)(V.D,{children:e.name}),w={type:"code",code:P,component:function(){return(0,l.jsx)(h,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:C})},centered:!0,maxWidth:340},D=`
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
`,A={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,l.jsx)(h,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:D},S=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,k={type:"code",component:function(){return(0,l.jsx)(h,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:S};var _=(0,n(99882).Z)("file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]),z=n(58898);let U=`
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
`,E={type:"code",component:function(){let e=(0,l.jsx)(_,{style:{width:(0,z.h)(18),height:(0,z.h)(18)},stroke:1.5});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),(0,l.jsx)(h,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"})]})},code:U,centered:!0,maxWidth:340};var W=n(35661),N=n(27250);let M=`
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
`,G={type:"styles-api",data:N.T,component:function(e){return(0,l.jsx)(h,{label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,l.jsx)(W.Z,{style:{width:(0,z.h)(18),height:(0,z.h)(18)}}),...e})},code:M,centered:!0,maxWidth:340};var B=n(79016),R=n(33638);let T=(0,B.A)(R.us.FileInput);function Z(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:i,InputAccessibility:o,InputFeatures:a,InputSections:s,StylesApiSelectors:p}=t;return n||O("Demo",!0),i||O("GetElementRef",!0),o||O("InputAccessibility",!0),a||O("InputFeatures",!0),s||O("InputSections",!0),p||O("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a,{component:"FileInput",element:"input"}),"\n",(0,l.jsx)(n,{data:x}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,l.jsx)(n,{data:j}),"\n",(0,l.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,l.jsx)(n,{data:g}),"\n",(0,l.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,l.jsx)(n,{data:w}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(n,{data:A}),"\n",(0,l.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,l.jsx)(n,{data:k}),"\n",(0,l.jsx)(s,{component:"FileInput"}),"\n",(0,l.jsx)(n,{data:E}),"\n",(0,l.jsx)(p,{component:"FileInput"}),"\n",(0,l.jsx)(n,{data:G}),"\n",(0,l.jsx)(i,{component:"FileInput",refType:"button"}),"\n",(0,l.jsx)(o,{component:"FileInput"}),"\n",(0,l.jsx)(t.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,l.jsx)(t.code,{children:"multiple"})," value."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(T,{...e,children:(0,l.jsx)(Z,{...e})})}function O(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return l},nW:function(){return r},pc:function(){return i}});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},1787:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var l=n(52322),r=n(2784),i=n(70837),o=n(38483);let a={multiple:!1},s=(0,r.forwardRef)((e,t)=>{let{onChange:n,children:s,multiple:p,accept:u,name:c,form:d,resetRef:m,disabled:h,capture:f,inputProps:y,...x}=(0,o.w)("FileButton",a,e),b=(0,r.useRef)();return(0,i.kR)(m,()=>{b.current.value=""}),(0,l.jsxs)(l.Fragment,{children:[s({onClick:()=>{h||b.current?.click()},...x}),(0,l.jsx)("input",{style:{display:"none"},type:"file",accept:u,multiple:p,onChange:e=>{p?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,i.Yx)(t,b),name:c,form:d,capture:f,...y})]})});s.displayName="@mantine/core/FileButton"},45855:function(e,t,n){"use strict";n.d(t,{D:function(){return g}});var l=n(52322);n(2784);var r=n(91482),i=n(11200),o=n(38483),a=n(46690),s=n(28559),p=n(82027),u=n(2670),c=n(7450),d=n(75336);let[m,h]=(0,d.V)();var f={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let y={},x=(0,i.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,r.ap)(t):(0,r.ap)(n,"pg-gap")}})),b=(0,p.d)((e,t)=>{let n=(0,o.w)("PillGroup",y,e),{classNames:r,className:i,style:p,styles:u,unstyled:d,vars:h,size:b,disabled:j,...v}=n,g=(0,c.D)(),I=g?.size||b||void 0,F=(0,a.y)({name:"PillGroup",classes:f,props:n,className:i,style:p,classNames:r,styles:u,unstyled:d,vars:h,varsResolver:x,stylesCtx:{size:I},rootSelector:"group"});return(0,l.jsx)(m,{value:{size:I,disabled:j},children:(0,l.jsx)(s.x,{ref:t,size:I,...F("group"),...v})})});b.classes=f,b.displayName="@mantine/core/PillGroup";let j={variant:"default"},v=(0,i.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,r.ap)(n,"pill-fz"),"--pill-height":(0,r.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.H5)(t)}})),g=(0,p.d)((e,t)=>{let n=(0,o.w)("Pill",j,e),{classNames:r,className:i,style:p,styles:d,unstyled:m,vars:y,variant:x,children:b,withRemoveButton:g,onRemove:I,removeButtonProps:F,radius:V,size:P,disabled:C,mod:w,...D}=n,A=h(),S=(0,c.D)(),k=P||A?.size||void 0,_=S?.variant==="filled"?"contrast":x||"default",z=(0,a.y)({name:"Pill",classes:f,props:n,className:i,style:p,classNames:r,styles:d,unstyled:m,vars:y,varsResolver:v,stylesCtx:{size:k}});return(0,l.jsxs)(s.x,{component:"span",ref:t,variant:_,size:k,...z("root",{variant:_}),mod:[{"with-remove":g&&!C,disabled:C||A?.disabled},w],...D,children:[(0,l.jsx)("span",{...z("label"),children:b}),g&&(0,l.jsx)(u.P,{variant:"transparent",radius:V,tabIndex:-1,"aria-hidden":!0,unstyled:m,...F,...z("remove",{className:F?.className,style:F?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),F?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),F?.onClick?.(e)}})]})});g.classes=f,g.displayName="@mantine/core/Pill",g.Group=b},7450:function(e,t,n){"use strict";n.d(t,{D:function(){return i},H:function(){return r}}),n(2784),n(52322);var l=n(75336);let[r,i]=(0,l.V)()}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=73322)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8879],{33507:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},94953:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return l(79259)}])},79259:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ey}});var r=l(85893),n=l(11151),a=l(19905),i=l(9904),o=l(67294),p=l(643),c=l(70097),s=l(76198),u=l(82697),d=l(52561),m=l(3154),f=l(30370),h=Object.defineProperty,y=Object.defineProperties,v=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,I=(e,t,l)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,x=(e,t)=>{for(var l in t||(t={}))g.call(t,l)&&I(e,l,t[l]);if(b)for(var l of b(t))j.call(t,l)&&I(e,l,t[l]);return e},P=(e,t)=>y(e,v(t)),w=(e,t)=>{var l={};for(var r in e)g.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&b)for(var r of b(e))0>t.indexOf(r)&&j.call(e,r)&&(l[r]=e[r]);return l};let O=({value:e})=>o.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Array.isArray(e)?e.map(e=>e.name).join(", "):null==e?void 0:e.name),F={valueComponent:O},E=(0,m.d)((e,t)=>{let l=(0,f.w)("FileInput",F,e),{unstyled:r,vars:n,onChange:a,value:i,defaultValue:m,multiple:h,accept:y,name:v,form:b,valueComponent:g,clearable:j,clearButtonProps:I,readOnly:O,capture:E,fileInputProps:k,rightSection:V,size:M,placeholder:C}=l,S=w(l,["unstyled","vars","onChange","value","defaultValue","multiple","accept","name","form","valueComponent","clearable","clearButtonProps","readOnly","capture","fileInputProps","rightSection","size","placeholder"]),D=(0,o.useRef)(null),[A,z]=(0,p.C)({value:i,defaultValue:m,onChange:a,finalValue:h?[]:null}),Z=Array.isArray(A)?0!==A.length:null!==A,N=V||(j&&Z&&!O?o.createElement(s.P,P(x({},I),{variant:"subtle",onClick:()=>z(h?[]:null),size:M,unstyled:r})):null);return(0,o.useEffect)(()=>{var e;(Array.isArray(A)&&0===A.length||null===A)&&(null==(e=D.current)||e.call(D))},[A]),o.createElement(u.S,{onChange:z,multiple:h,accept:y,name:v,form:b,resetRef:D,disabled:O,capture:E,inputProps:k},e=>o.createElement(c.M,P(x(x({component:"button",ref:t,rightSection:N},e),S),{__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:l,unstyled:r,size:M}),Z?o.createElement(g,{value:A}):o.createElement(d.I.Placeholder,null,C)))});E.classes=c.M.classes,E.displayName="@mantine/core/FileInput";var k=l(88005),V=Object.defineProperty,M=Object.defineProperties,C=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,z=(e,t,l)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,Z=(e,t)=>{for(var l in t||(t={}))D.call(t,l)&&z(e,l,t[l]);if(S)for(var l of S(t))A.call(t,l)&&z(e,l,t[l]);return e},N=(e,t)=>M(e,C(t));let U=`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,W={type:"configurator",component:function(e){return o.createElement(E,N(Z({},e),{placeholder:"Input placeholder"}))},code:U,centered:!0,maxWidth:340,controls:k.pc},_=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,R={type:"code",code:_,component:function(){return o.createElement(E,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},B=`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,G={type:"code",code:B,component:function(){return o.createElement(E,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},T=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,L={type:"code",code:T,component:function(){return o.createElement(E,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var Y=l(14462);let H=`
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
`,X=({value:e})=>null===e?null:Array.isArray(e)?o.createElement(Y.D.Group,null,e.map((e,t)=>o.createElement(Y.D,{key:t},e.name))):o.createElement(Y.D,null,e.name),q={type:"code",code:H,component:function(){return o.createElement(E,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:X})},centered:!0,maxWidth:340},J=`
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
`,K={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(E,{label:"Boolean error",placeholder:"Boolean error",error:!0}),o.createElement(E,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:J},Q=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,$={type:"code",component:function(){return o.createElement(E,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:Q};var ee=l(72622),et=(0,l(54764).Z)("file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]);let el=`
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
`,er={type:"code",component:function(){let e=o.createElement(et,{style:{width:(0,ee.h)(18),height:(0,ee.h)(18)},stroke:1.5});return o.createElement(o.Fragment,null,o.createElement(E,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),o.createElement(E,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"}))},code:el,centered:!0,maxWidth:340};var en=l(93693),ea=l(8316),ei=Object.defineProperty,eo=Object.getOwnPropertySymbols,ep=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,es=(e,t,l)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,eu=(e,t)=>{for(var l in t||(t={}))ep.call(t,l)&&es(e,l,t[l]);if(eo)for(var l of eo(t))ec.call(t,l)&&es(e,l,t[l]);return e};let ed=`
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
`,em={type:"styles-api",data:ea.T,component:function(e){return o.createElement(E,eu({label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:o.createElement(en.Z,{style:{width:(0,ee.h)(18),height:(0,ee.h)(18)}})},e))},code:ed,centered:!0,maxWidth:340},ef=(0,a.A)(i.us.FileInput);function eh(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,n.ah)(),e.components),{InputFeatures:l,Demo:a,InputSections:i,StylesApiSelectors:o,GetElementRef:p,InputAccessibility:c}=t;return a||ev("Demo",!0),p||ev("GetElementRef",!0),c||ev("InputAccessibility",!0),l||ev("InputFeatures",!0),i||ev("InputSections",!0),o||ev("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(l,{component:"FileInput",element:"input"}),"\n",(0,r.jsx)(a,{data:W}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"multiple"})," is ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"multiple"})," is ",(0,r.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,r.jsx)(a,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,r.jsx)(a,{data:G}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,r.jsx)(a,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,r.jsx)(a,{data:q}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(a,{data:K}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(a,{data:$}),"\n",(0,r.jsx)(i,{component:"FileInput"}),"\n",(0,r.jsx)(a,{data:er}),"\n",(0,r.jsx)(o,{component:"FileInput"}),"\n",(0,r.jsx)(a,{data:em}),"\n",(0,r.jsx)(p,{component:"FileInput",refType:"button"}),"\n",(0,r.jsx)(c,{component:"FileInput"}),"\n",(0,r.jsx)(t.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,r.jsx)(t.code,{children:"multiple"})," value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}var ey=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ef,Object.assign({},e,{children:(0,r.jsx)(eh,e)}))};function ev(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},82697:function(e,t,l){"use strict";l.d(t,{S:function(){return f}});var r=l(67294),n=l(83443),a=l(30370),i=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))p.call(t,l)&&s(e,l,t[l]);if(o)for(var l of o(t))c.call(t,l)&&s(e,l,t[l]);return e},d=(e,t)=>{var l={};for(var r in e)p.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&o)for(var r of o(e))0>t.indexOf(r)&&c.call(e,r)&&(l[r]=e[r]);return l};let m={multiple:!1},f=(0,r.forwardRef)((e,t)=>{let l=(0,a.w)("FileButton",m,e),{onChange:i,children:o,multiple:p,accept:c,name:s,form:f,resetRef:h,disabled:y,capture:v,inputProps:b}=l,g=d(l,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),j=(0,r.useRef)(),I=()=>{var e;y||null==(e=j.current)||e.click()},x=e=>{p?i(Array.from(e.currentTarget.files)):i(e.currentTarget.files[0]||null)},P=()=>{j.current.value=""};return(0,n.kR)(h,P),r.createElement(r.Fragment,null,o(u({onClick:I},g)),r.createElement("input",u({style:{display:"none"},type:"file",accept:c,multiple:p,onChange:x,ref:(0,n.Yx)(t,j),name:s,form:f,capture:v},b)))});f.displayName="@mantine/core/FileButton"},14462:function(e,t,l){"use strict";l.d(t,{D:function(){return U}});var r=l(67294),n=l(50377);let[a,i]=(0,n.V)();var o=l(67399),p={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},c=l(3154),s=l(30370),u=l(86109),d=l(81110),m=l(8586),f=l(48468),h=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,l)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,j=(e,t)=>{for(var l in t||(t={}))v.call(t,l)&&g(e,l,t[l]);if(y)for(var l of y(t))b.call(t,l)&&g(e,l,t[l]);return e},I=(e,t)=>{var l={};for(var r in e)v.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&y)for(var r of y(e))0>t.indexOf(r)&&b.call(e,r)&&(l[r]=e[r]);return l};let x={},P=(0,m.Z)((e,{gap:t},{size:l})=>({group:{"--pg-gap":void 0!==t?(0,f.ap)(t):(0,f.ap)(l,"pg-gap")}})),w=(0,c.d)((e,t)=>{let l=(0,s.w)("PillGroup",x,e),{classNames:n,className:i,style:c,styles:m,unstyled:f,vars:h,size:y,disabled:v}=l,b=I(l,["classNames","className","style","styles","unstyled","vars","size","disabled"]),g=(0,o.D)(),w=(null==g?void 0:g.size)||y||void 0,O=(0,u.y)({name:"PillGroup",classes:p,props:l,className:i,style:c,classNames:n,styles:m,unstyled:f,vars:h,varsResolver:P,stylesCtx:{size:w},rootSelector:"group"});return r.createElement(a,{value:{size:w,disabled:v}},r.createElement(d.x,j(j({ref:t,size:w},O("group")),b)))});w.classes=p,w.displayName="@mantine/core/PillGroup";var O=l(76198),F=Object.defineProperty,E=Object.defineProperties,k=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(e,t,l)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,D=(e,t)=>{for(var l in t||(t={}))M.call(t,l)&&S(e,l,t[l]);if(V)for(var l of V(t))C.call(t,l)&&S(e,l,t[l]);return e},A=(e,t)=>E(e,k(t)),z=(e,t)=>{var l={};for(var r in e)M.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&V)for(var r of V(e))0>t.indexOf(r)&&C.call(e,r)&&(l[r]=e[r]);return l};let Z={variant:"default"},N=(0,m.Z)((e,{radius:t},{size:l})=>({root:{"--pill-fz":(0,f.ap)(l,"pill-fz"),"--pill-height":(0,f.ap)(l,"pill-height"),"--pill-radius":void 0===t?void 0:(0,f.H5)(t)}})),U=(0,c.d)((e,t)=>{let l=(0,s.w)("Pill",Z,e),{classNames:n,className:a,style:c,styles:m,unstyled:f,vars:h,variant:y,children:v,withRemoveButton:b,onRemove:g,removeButtonProps:j,radius:I,size:x,disabled:P}=l,w=z(l,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),F=i(),E=(0,o.D)(),k=x||(null==F?void 0:F.size)||void 0,V=(null==E?void 0:E.variant)==="filled"?"contrast":y||"default",M=(0,u.y)({name:"Pill",classes:p,props:l,className:a,style:c,classNames:n,styles:m,unstyled:f,vars:h,varsResolver:N,stylesCtx:{size:k}});return r.createElement(d.x,D(A(D({component:"span",ref:t,variant:V,size:k},M("root",{variant:V})),{mod:{"with-remove":b,disabled:P||(null==F?void 0:F.disabled)}}),w),r.createElement("span",D({},M("label")),v),b&&r.createElement(O.P,A(D(D({variant:"transparent",radius:I,tabIndex:-1,"aria-hidden":!0,unstyled:f},j),M("remove",{className:null==j?void 0:j.className,style:null==j?void 0:j.style})),{onMouseDown:e=>{var t;e.preventDefault(),e.stopPropagation(),null==(t=null==j?void 0:j.onMouseDown)||t.call(j,e)},onClick:e=>{var t;e.stopPropagation(),null==g||g(),null==(t=null==j?void 0:j.onClick)||t.call(j,e)}})))});U.classes=p,U.displayName="@mantine/core/Pill",U.Group=w},67399:function(e,t,l){"use strict";l.d(t,{D:function(){return a},H:function(){return n}});var r=l(50377);let[n,a]=(0,r.V)()},88005:function(e,t,l){"use strict";l.d(t,{Mt:function(){return r},nW:function(){return n},pc:function(){return a}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=94953)}),_N_E=e.O()}]);
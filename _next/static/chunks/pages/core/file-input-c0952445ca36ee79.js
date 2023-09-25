(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8879],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},94953:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return r(3707)}])},3707:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ec}});var l=r(85893),n=r(11151),a=r(19905),i=r(9904),o=r(67294),p=r(643),u=r(70097),s=r(76198),c=r(82697),d=r(52561),m=r(3154),f=r(30370),y=Object.defineProperty,h=Object.defineProperties,v=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&x(e,r,t[r]);if(b)for(var r of b(t))j.call(t,r)&&x(e,r,t[r]);return e},O=(e,t)=>h(e,v(t)),w=(e,t)=>{var r={};for(var l in e)g.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&b)for(var l of b(e))0>t.indexOf(l)&&j.call(e,l)&&(r[l]=e[l]);return r};let P=({value:e})=>o.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Array.isArray(e)?e.map(e=>e.name).join(", "):null==e?void 0:e.name),k={valueComponent:P},E=(0,m.d)((e,t)=>{let r=(0,f.w)("FileInput",k,e),{unstyled:l,vars:n,onChange:a,value:i,defaultValue:m,multiple:y,accept:h,name:v,form:b,valueComponent:g,clearable:j,clearButtonProps:x,readOnly:P,capture:E,fileInputProps:V,rightSection:F,size:M,placeholder:D}=r,A=w(r,["unstyled","vars","onChange","value","defaultValue","multiple","accept","name","form","valueComponent","clearable","clearButtonProps","readOnly","capture","fileInputProps","rightSection","size","placeholder"]),C=(0,o.useRef)(null),[S,z]=(0,p.C)({value:i,defaultValue:m,onChange:a,finalValue:y?[]:null}),Z=Array.isArray(S)?0!==S.length:null!==S,N=F||(j&&Z&&!P?o.createElement(s.P,O(I({},x),{variant:"subtle",onClick:()=>z(y?[]:null),size:M,unstyled:l})):null);return(0,o.useEffect)(()=>{var e;(Array.isArray(S)&&0===S.length||null===S)&&(null==(e=C.current)||e.call(C))},[S]),o.createElement(c.S,{onChange:z,multiple:y,accept:h,name:v,form:b,resetRef:C,disabled:P,capture:E,inputProps:V},e=>o.createElement(u.M,O(I(I({component:"button",ref:t,rightSection:N},e),A),{__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:r,unstyled:l,size:M}),Z?o.createElement(g,{value:S}):o.createElement(d.I.Placeholder,null,D)))});E.classes=u.M.classes,E.displayName="@mantine/core/FileInput";var V=r(88005),F=Object.defineProperty,M=Object.defineProperties,D=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&z(e,r,t[r]);if(A)for(var r of A(t))S.call(t,r)&&z(e,r,t[r]);return e},N=(e,t)=>M(e,D(t));let _=`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,W={type:"configurator",component:function(e){return o.createElement(E,N(Z({},e),{placeholder:"Input placeholder"}))},code:_,centered:!0,maxWidth:340,controls:V.pc},U=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,R={type:"code",code:U,component:function(){return o.createElement(E,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},B=`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,G={type:"code",code:B,component:function(){return o.createElement(E,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var T=r(14462);let L=`
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
`,H=({value:e})=>null===e?null:Array.isArray(e)?o.createElement(T.D.Group,null,e.map((e,t)=>o.createElement(T.D,{key:t},e.name))):o.createElement(T.D,null,e.name),X={type:"code",code:L,component:function(){return o.createElement(E,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:H})},centered:!0,maxWidth:340},Y=`
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
`,q={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(E,{label:"Boolean error",placeholder:"Boolean error",error:!0}),o.createElement(E,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:Y},J=`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,K={type:"code",component:function(){return o.createElement(E,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:J};var Q=r(72622),$=r(93693),ee=r(8316),et=Object.defineProperty,er=Object.getOwnPropertySymbols,el=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,ea=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ei=(e,t)=>{for(var r in t||(t={}))el.call(t,r)&&ea(e,r,t[r]);if(er)for(var r of er(t))en.call(t,r)&&ea(e,r,t[r]);return e};let eo=`
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
`,ep={type:"styles-api",data:ee.T,component:function(e){return o.createElement(E,ei({label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:o.createElement($.Z,{style:{width:(0,Q.h)(18),height:(0,Q.h)(18)}})},e))},code:eo,centered:!0,maxWidth:340},eu=(0,a.A)(i.us.FileInput);function es(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,n.ah)(),e.components),{InputFeatures:r,Demo:a,StylesApiSelectors:i,GetElementRef:o,InputAccessibility:p}=t;return a||ed("Demo",!0),o||ed("GetElementRef",!0),p||ed("InputAccessibility",!0),r||ed("InputFeatures",!0),i||ed("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(r,{component:"FileInput",element:"input"}),"\n",(0,l.jsx)(a,{data:W}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,l.jsx)(a,{data:R}),"\n",(0,l.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,l.jsx)(a,{data:G}),"\n",(0,l.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,l.jsx)(a,{data:X}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(a,{data:q}),"\n",(0,l.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,l.jsx)(a,{data:K}),"\n",(0,l.jsx)(i,{component:"FileInput"}),"\n",(0,l.jsx)(a,{data:ep}),"\n",(0,l.jsx)(o,{component:"FileInput",refType:"button"}),"\n",(0,l.jsx)(p,{component:"FileInput"})]})}var ec=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(eu,Object.assign({},e,{children:(0,l.jsx)(es,e)}))};function ed(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},82697:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var l=r(67294),n=r(83443),a=r(30370),i=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>{var r={};for(var l in e)p.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&o)for(var l of o(e))0>t.indexOf(l)&&u.call(e,l)&&(r[l]=e[l]);return r};let m={multiple:!1},f=(0,l.forwardRef)((e,t)=>{let r=(0,a.w)("FileButton",m,e),{onChange:i,children:o,multiple:p,accept:u,name:s,form:f,resetRef:y,disabled:h,capture:v,inputProps:b}=r,g=d(r,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),j=(0,l.useRef)(),x=()=>{var e;h||null==(e=j.current)||e.click()},I=e=>{p?i(Array.from(e.currentTarget.files)):i(e.currentTarget.files[0]||null)},O=()=>{j.current.value=""};return(0,n.kR)(y,O),l.createElement(l.Fragment,null,o(c({onClick:x},g)),l.createElement("input",c({style:{display:"none"},type:"file",accept:u,multiple:p,onChange:I,ref:(0,n.Yx)(t,j),name:s,form:f,capture:v},b)))});f.displayName="@mantine/core/FileButton"},14462:function(e,t,r){"use strict";r.d(t,{D:function(){return _}});var l=r(67294),n=r(50377);let[a,i]=(0,n.V)();var o=r(67399),p={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},u=r(3154),s=r(30370),c=r(86109),d=r(81110),m=r(8586),f=r(48468),y=Object.defineProperty,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))b.call(t,r)&&g(e,r,t[r]);return e},x=(e,t)=>{var r={};for(var l in e)v.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&h)for(var l of h(e))0>t.indexOf(l)&&b.call(e,l)&&(r[l]=e[l]);return r};let I={},O=(0,m.Z)((e,{gap:t},{size:r})=>({group:{"--pg-gap":void 0!==t?(0,f.ap)(t):(0,f.ap)(r,"pg-gap")}})),w=(0,u.d)((e,t)=>{let r=(0,s.w)("PillGroup",I,e),{classNames:n,className:i,style:u,styles:m,unstyled:f,vars:y,size:h,disabled:v}=r,b=x(r,["classNames","className","style","styles","unstyled","vars","size","disabled"]),g=(0,o.D)(),w=(null==g?void 0:g.size)||h||void 0,P=(0,c.y)({name:"PillGroup",classes:p,props:r,className:i,style:u,classNames:n,styles:m,unstyled:f,vars:y,varsResolver:O,stylesCtx:{size:w},rootSelector:"group"});return l.createElement(a,{value:{size:w,disabled:v}},l.createElement(d.x,j(j({ref:t,size:w},P("group")),b)))});w.classes=p,w.displayName="@mantine/core/PillGroup";var P=r(76198),k=Object.defineProperty,E=Object.defineProperties,V=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&A(e,r,t[r]);if(F)for(var r of F(t))D.call(t,r)&&A(e,r,t[r]);return e},S=(e,t)=>E(e,V(t)),z=(e,t)=>{var r={};for(var l in e)M.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&F)for(var l of F(e))0>t.indexOf(l)&&D.call(e,l)&&(r[l]=e[l]);return r};let Z={variant:"default"},N=(0,m.Z)((e,{radius:t},{size:r})=>({root:{"--pill-fz":(0,f.ap)(r,"pill-fz"),"--pill-height":(0,f.ap)(r,"pill-height"),"--pill-radius":void 0===t?void 0:(0,f.H5)(t)}})),_=(0,u.d)((e,t)=>{let r=(0,s.w)("Pill",Z,e),{classNames:n,className:a,style:u,styles:m,unstyled:f,vars:y,variant:h,children:v,withRemoveButton:b,onRemove:g,removeButtonProps:j,radius:x,size:I,disabled:O}=r,w=z(r,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),k=i(),E=(0,o.D)(),V=I||(null==k?void 0:k.size)||void 0,F=(null==E?void 0:E.variant)==="filled"?"contrast":h||"default",M=(0,c.y)({name:"Pill",classes:p,props:r,className:a,style:u,classNames:n,styles:m,unstyled:f,vars:y,varsResolver:N,stylesCtx:{size:V}});return l.createElement(d.x,C(S(C({component:"span",ref:t,variant:F,size:V},M("root",{variant:F})),{mod:{"with-remove":b,disabled:O||(null==k?void 0:k.disabled)}}),w),l.createElement("span",C({},M("label")),v),b&&l.createElement(P.P,S(C(C({variant:"transparent",radius:x,tabIndex:-1,"aria-hidden":!0,unstyled:f},j),M("remove",{className:null==j?void 0:j.className,style:null==j?void 0:j.style})),{onMouseDown:e=>{var t;e.preventDefault(),e.stopPropagation(),null==(t=null==j?void 0:j.onMouseDown)||t.call(j,e)},onClick:e=>{var t;e.stopPropagation(),null==g||g(),null==(t=null==j?void 0:j.onClick)||t.call(j,e)}})))});_.classes=p,_.displayName="@mantine/core/Pill",_.Group=w},67399:function(e,t,r){"use strict";r.d(t,{D:function(){return a},H:function(){return n}});var l=r(50377);let[n,a]=(0,l.V)()},88005:function(e,t,r){"use strict";r.d(t,{Mt:function(){return l},nW:function(){return n},pc:function(){return a}});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=94953)}),_N_E=e.O()}]);
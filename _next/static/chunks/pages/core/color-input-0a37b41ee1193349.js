(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7119],{33507:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},85167:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return t(50911)}])},50911:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Y}});var o=t(85893),n=t(11151),l=t(19905),a=t(9904),i=t(67294),s=t(44974),c=t(88005),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&y(e,t,r[t]);if(f)for(var t of f(r))m.call(r,t)&&y(e,t,r[t]);return e},v=(e,r)=>u(e,d(r));let w=`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,g={type:"configurator",component:function(e){return i.createElement(s.T,v(b({},e),{placeholder:"Input placeholder"}))},code:w,centered:!0,maxWidth:340,controls:c.pc};var I=Object.defineProperty,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))x.call(r,t)&&E(e,t,r[t]);if(j)for(var t of j(r))k.call(r,t)&&E(e,t,r[t]);return e};let O=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,P={type:"configurator",component:function(e){return i.createElement(s.T,C({maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899"},e))},code:O,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},V=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`,D={type:"code",component:function(){return i.createElement(s.T,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:V};var M=t(38621);let S=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(M.t.colors).map(e=>`'${M.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,z={type:"code",component:function(){return i.createElement(s.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(M.t.colors).map(e=>M.t.colors[e][6])})},code:S};var T=t(75941);let _=`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`,A={type:"code",component:function(){return i.createElement(s.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...M.t.colors.red,...M.t.colors.green,...M.t.colors.blue]})},code:_},B=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,N={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(s.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:B},Z=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,R={type:"code",component:function(){return i.createElement(s.T,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:Z};var L=t(60249);let W=`
import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`,H={type:"styles-api",data:L.B,component:function(e){return i.createElement(s.T,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:W,centered:!0,maxWidth:340},F=(0,l.A)(a.us.ColorInput);function U(e){let r=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a"},(0,n.ah)(),e.components),{InputFeatures:t,Demo:l,StylesApiSelectors:a,GetElementRef:i,InputAccessibility:s}=r;return l||G("Demo",!0),i||G("GetElementRef",!0),s||G("InputAccessibility",!0),t||G("InputFeatures",!0),a||G("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{component:"ColorInput",element:"input"}),"\n",(0,o.jsx)(l,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"formats",children:"Formats"}),"\n",(0,o.jsx)(r.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,o.jsx)(l,{data:P}),"\n",(0,o.jsx)(r.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,o.jsxs)(r.p,{children:["To disable free input set ",(0,o.jsx)(r.code,{children:"disallowInput"})," prop:"]}),"\n",(0,o.jsx)(l,{data:D}),"\n",(0,o.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsx)(r.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,o.jsx)(l,{data:z}),"\n",(0,o.jsxs)(r.p,{children:["By default, there will be 10 swatches per row, you can change this with ",(0,o.jsx)(r.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,o.jsx)(r.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,o.jsx)(l,{data:T.h}),"\n",(0,o.jsx)(r.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,o.jsx)(l,{data:A}),"\n",(0,o.jsx)(r.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,o.jsxs)(r.p,{children:["By default, if ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,o.jsx)(r.code,{children:"withEyeDropper={false}"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(l,{data:N}),"\n",(0,o.jsx)(r.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsx)(l,{data:R}),"\n",(0,o.jsx)(a,{component:"ColorInput"}),"\n",(0,o.jsx)(l,{data:H}),"\n",(0,o.jsx)(i,{component:"ColorInput",refType:"input"}),"\n",(0,o.jsx)(s,{component:"ColorInput"})]})}var Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(F,Object.assign({},e,{children:(0,o.jsx)(U,e)}))};function G(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44974:function(e,r,t){"use strict";t.d(r,{T:function(){return H}});var o=t(67294),n=t(643),l=t(79067),a=t(14372),i=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>{var t={};for(var o in e)c.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};function h(e){var{style:r}=e,t=f(e,["style"]);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",style:d({width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)"},r),viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M11 7l6 6"}),o.createElement("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"}))}var m={eyeDropperIcon:"m-b077c2bc",colorPreview:"m-c5ccdcab"},y=t(23957),b=t(89363),v=t(64922),w=t(27843),g=t(52561),I=t(84131),j=t(221),x=t(35901),k=t(70097),E=t(3154),C=t(30370),O=t(86109),P=t(28816),V=t(8586),D=t(48468),M=Object.defineProperty,S=Object.defineProperties,z=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))_.call(r,t)&&B(e,t,r[t]);if(T)for(var t of T(r))A.call(r,t)&&B(e,t,r[t]);return e},Z=(e,r)=>S(e,z(r)),R=(e,r)=>{var t={};for(var o in e)_.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&T)for(var o of T(e))0>r.indexOf(o)&&A.call(e,o)&&(t[o]=e[o]);return t};let L={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:10,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},W=(0,V.Z)((e,{size:r})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,D.ap)(r,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,D.ap)(r,"ci-preview-size")}})),H=(0,E.d)((e,r)=>{let t=(0,C.w)("ColorInput",L,e),i=(0,y.k)("ColorInput",L,e),{classNames:s,styles:c,unstyled:p,disallowInput:u,fixOnBlur:d,popoverProps:f,withPreview:k,withEyeDropper:E,eyeDropperIcon:V,closeOnColorSwatchClick:D,eyeDropperButtonProps:M,value:S,defaultValue:z,onChange:T,onChangeEnd:_,onClick:A,onFocus:B,onBlur:H,inputProps:F,format:U,wrapperProps:Y,readOnly:G,withPicker:X,swatches:$,disabled:J,leftSection:q,rightSection:K,swatchesPerRow:Q}=i,ee=R(i,["classNames","styles","unstyled","disallowInput","fixOnBlur","popoverProps","withPreview","withEyeDropper","eyeDropperIcon","closeOnColorSwatchClick","eyeDropperButtonProps","value","defaultValue","onChange","onChangeEnd","onClick","onFocus","onBlur","inputProps","format","wrapperProps","readOnly","withPicker","swatches","disabled","leftSection","rightSection","swatchesPerRow"]),er=(0,O.y)({name:"ColorInput",props:t,classes:m,classNames:s,styles:c,unstyled:p,rootSelector:"wrapper",vars:t.vars,varsResolver:W}),{resolvedClassNames:et,resolvedStyles:eo}=(0,P.h)({classNames:s,styles:c,props:t}),[en,el]=(0,o.useState)(!1),[ea,ei]=(0,o.useState)(""),[es,ec]=(0,n.C)({value:S,defaultValue:z,finalValue:"",onChange:T}),{supported:ep,open:eu}=(0,l.s)(),ed=o.createElement(b.A,Z(N(N({},M),er("eyeDropperButton",{className:null==M?void 0:M.className,style:null==M?void 0:M.style})),{variant:"subtle",color:"gray",size:F.size,unstyled:p,onClick:()=>eu().then(e=>{if(null==e?void 0:e.sRGBHex){let r=(0,v.Rt)(U,(0,w.lu)(e.sRGBHex));ec(r),null==_||_(r)}}).catch(()=>{})}),V||o.createElement(h,N({},er("eyeDropperIcon")))),ef=e=>{null==B||B(e),el(!0)},eh=e=>{d&&ec(ea),null==H||H(e),el(!1)},em=e=>{null==A||A(e),el(!0)};return(0,o.useEffect)(()=>{((0,w.fi)(es)||""===es.trim())&&ei(es)},[es]),(0,a.l)(()=>{(0,w.fi)(es)&&ec((0,v.Rt)(U,(0,w.lu)(es)))},[U]),o.createElement(g.I.Wrapper,Z(N({},Y),{classNames:et,styles:eo,__staticSelector:"ColorInput"}),o.createElement(I.J,Z(N({__staticSelector:"ColorInput",position:"bottom-start",offset:5},f),{opened:en,classNames:et,styles:eo,unstyled:p,withRoles:!1,disabled:G||!1===X&&(!Array.isArray($)||0===$.length)}),o.createElement(I.J.Target,null,o.createElement(g.I,Z(N(N({autoComplete:"off"},ee),F),{classNames:et,styles:eo,disabled:J,ref:r,__staticSelector:"ColorInput",onFocus:ef,onBlur:eh,onClick:em,spellCheck:!1,value:es,onChange:e=>{let r=e.currentTarget.value;ec(r),(0,w.fi)(r)&&(null==_||_((0,v.Rt)(U,(0,w.lu)(r))))},leftSection:q||(k?o.createElement(j.b,N({color:(0,w.fi)(es)?es:"#fff",size:"var(--ci-preview-size)"},er("colorPreview"))):null),readOnly:u||G,pointer:u,unstyled:p,rightSection:K||(E&&!J&&!G&&ep?ed:null)}))),o.createElement(I.J.Dropdown,{onMouseDown:e=>e.preventDefault(),p:F.size},o.createElement(x.z,{__staticSelector:"ColorInput",value:es,onChange:ec,onChangeEnd:_,format:U,swatches:$,swatchesPerRow:Q,withPicker:X,size:F.size,focusable:!1,unstyled:p,styles:eo,classNames:et,onColorSwatchClick:()=>D&&el(!1)}))))});H.classes=k.M.classes,H.displayName="@mantine/core/ColorInput"},75941:function(e,r,t){"use strict";t.d(r,{h:function(){return f}});var o=t(67294),n=t(35901),l=t(38621),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e};let d=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.t.colors).map(e=>`'${l.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,f={type:"configurator",component:function(e){return o.createElement(n.z,u({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.t.colors).map(e=>l.t.colors[e][6])},e))},code:d,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},88005:function(e,r,t){"use strict";t.d(r,{Mt:function(){return o},nW:function(){return n},pc:function(){return l}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},79067:function(e,r,t){"use strict";t.d(r,{s:function(){return l}});var o=t(67294),n=t(67510);function l(){let[e,r]=(0,o.useState)(!1);(0,n.Y)(()=>{r("undefined"!=typeof window&&"EyeDropper"in window)},[]);let t=(0,o.useCallback)((r={})=>{if(e){let e=new window.EyeDropper;return e.open(r)}return Promise.resolve(void 0)},[e]);return{supported:e,open:t}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=85167)}),_N_E=e.O()}]);
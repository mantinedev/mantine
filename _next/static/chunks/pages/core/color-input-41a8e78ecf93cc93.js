(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7119],{33507:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},85167:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return t(85546)}])},85546:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ed}});var o=t(85893),n=t(11151),l=t(19905),a=t(9904),i=t(67294),c=t(44974),s=t(88005),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&y(e,t,r[t]);if(h)for(var t of h(r))f.call(r,t)&&y(e,t,r[t]);return e},v=(e,r)=>u(e,d(r));let w=`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,g={type:"configurator",component:function(e){return i.createElement(c.T,v(b({},e),{placeholder:"Input placeholder"}))},code:w,centered:!0,maxWidth:340,controls:s.pc};var x=Object.defineProperty,C=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,I=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&I(e,t,r[t]);if(C)for(var t of C(r))k.call(r,t)&&I(e,t,r[t]);return e};let P=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,D={type:"configurator",component:function(e){return i.createElement(c.T,j({maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899"},e))},code:P,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},O=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,V={type:"code",component:function(){return i.createElement(c.T,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:O,centered:!0,maxWidth:340};var F=t(72039);let M=`
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
`,T={type:"code",component:function(){let[e,r]=(0,i.useState)("#FFFFFF");return i.createElement(i.Fragment,null,i.createElement(F.x,{mb:"md"},"Change end value: ",i.createElement("b",null,e)),i.createElement(c.T,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:r}))},code:M,centered:!0,maxWidth:340},S=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`,W={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:S};var _=t(38621);let z=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(_.t.colors).map(e=>`'${_.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,A={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(_.t.colors).map(e=>_.t.colors[e][6])})},code:z};var B=t(75941);let R=`
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
`,N={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[..._.t.colors.red,..._.t.colors.green,..._.t.colors.blue]})},code:R},Z=`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`,L={type:"code",component:function(){return i.createElement(c.T,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[..._.t.colors.red,..._.t.colors.green,..._.t.colors.blue]})},code:Z,centered:!0,maxWidth:340},H=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,U={type:"code",component:function(){return i.createElement(c.T,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:H,centered:!0,maxWidth:340},Y=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,G={type:"code",component:function(){return i.createElement(c.T,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:Y,centered:!0,maxWidth:340};var X=t(72622),$=(0,t(54764).Z)("focus-2","IconFocus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]);let J=`
import { ColorInput, rem } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`,q={type:"code",component:function(){return i.createElement(c.T,{eyeDropperIcon:i.createElement($,{style:{width:(0,X.h)(18),height:(0,X.h)(18)},stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:J,centered:!0,maxWidth:340};var K=t(40903);let Q=`
import { ColorInput, rem } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

`,ee={type:"code",component:function(){let e=i.createElement(K.Z,{style:{width:(0,X.h)(18),height:(0,X.h)(18)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(c.T,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),i.createElement(c.T,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"}))},code:Q,centered:!0,maxWidth:340},er=`
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
`,et={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(c.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:er},eo=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,en={type:"code",component:function(){return i.createElement(c.T,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:eo},el=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,ea={type:"code",component:function(){return i.createElement(c.T,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:el,centered:!0,maxWidth:340};var ei=t(60249);let ec=`
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
`,es={type:"styles-api",data:ei.B,component:function(e){return i.createElement(c.T,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:ec,centered:!0,maxWidth:340},ep=(0,l.A)(a.us.ColorInput);function eu(e){let r=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a"},(0,n.ah)(),e.components),{InputFeatures:t,Demo:l,InputSections:a,StylesApiSelectors:i,GetElementRef:c,InputAccessibility:s}=r;return l||eh("Demo",!0),c||eh("GetElementRef",!0),s||eh("InputAccessibility",!0),t||eh("InputFeatures",!0),a||eh("InputSections",!0),i||eh("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{component:"ColorInput",element:"input"}),"\n",(0,o.jsx)(l,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"formats",children:"Formats"}),"\n",(0,o.jsx)(r.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,o.jsx)(l,{data:D}),"\n",(0,o.jsx)(r.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,o.jsxs)(r.p,{children:["By default, ",(0,o.jsx)(r.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,o.jsx)(r.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,o.jsx)(l,{data:V}),"\n",(0,o.jsx)(r.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,o.jsx)(l,{data:T}),"\n",(0,o.jsx)(r.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,o.jsxs)(r.p,{children:["To disable free input set ",(0,o.jsx)(r.code,{children:"disallowInput"})," prop:"]}),"\n",(0,o.jsx)(l,{data:W}),"\n",(0,o.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsx)(r.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,o.jsx)(l,{data:A}),"\n",(0,o.jsxs)(r.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,o.jsx)(r.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,o.jsx)(r.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,o.jsx)(l,{data:B.h}),"\n",(0,o.jsx)(r.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,o.jsx)(l,{data:N}),"\n",(0,o.jsx)(r.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,o.jsxs)(r.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,o.jsx)(r.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,o.jsx)(l,{data:L}),"\n",(0,o.jsx)(r.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,o.jsxs)(r.p,{children:["To hide dropdown, set ",(0,o.jsx)(r.code,{children:"withPicker={false}"}),":"]}),"\n",(0,o.jsx)(l,{data:U}),"\n",(0,o.jsx)(r.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,o.jsxs)(r.p,{children:["By default, if ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,o.jsx)(r.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,o.jsx)(l,{data:G}),"\n",(0,o.jsx)(r.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,o.jsxs)(r.p,{children:["You can replace eye dropper icon with any React node using ",(0,o.jsx)(r.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,o.jsx)(l,{data:q}),"\n",(0,o.jsx)(a,{component:"ColorInput"}),"\n",(0,o.jsxs)(r.p,{children:["Note that by default, ",(0,o.jsx)(r.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,o.jsx)(r.code,{children:"leftSection"}),"\nand ",(0,o.jsx)(r.code,{children:"rightSection"})," props:"]}),"\n",(0,o.jsx)(l,{data:ee}),"\n",(0,o.jsx)(r.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(l,{data:et}),"\n",(0,o.jsx)(r.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsx)(l,{data:en}),"\n",(0,o.jsx)(r.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(l,{data:ea}),"\n",(0,o.jsx)(i,{component:"ColorInput"}),"\n",(0,o.jsx)(l,{data:es}),"\n",(0,o.jsx)(c,{component:"ColorInput",refType:"input"}),"\n",(0,o.jsx)(s,{component:"ColorInput"})]})}var ed=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ep,Object.assign({},e,{children:(0,o.jsx)(eu,e)}))};function eh(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40903:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(54764).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},44974:function(e,r,t){"use strict";t.d(r,{T:function(){return L}});var o=t(67294),n=t(643),l=t(79067),a=t(14372),i=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e},h=(e,r)=>{var t={};for(var o in e)s.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};function m(e){var{style:r}=e,t=h(e,["style"]);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",style:d({width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)"},r),viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M11 7l6 6"}),o.createElement("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"}))}var f={eyeDropperIcon:"m-b077c2bc",colorPreview:"m-c5ccdcab"},y=t(23957),b=t(89363),v=t(64922),w=t(27843),g=t(52561),x=t(84131),C=t(221),E=t(35901),k=t(70097),I=t(3154),j=t(30370),P=t(86109),D=t(28816),O=t(8586),V=t(48468),F=Object.defineProperty,M=Object.defineProperties,T=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&z(e,t,r[t]);if(S)for(var t of S(r))_.call(r,t)&&z(e,t,r[t]);return e},B=(e,r)=>M(e,T(r)),R=(e,r)=>{var t={};for(var o in e)W.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&S)for(var o of S(e))0>r.indexOf(o)&&_.call(e,o)&&(t[o]=e[o]);return t};let N={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},Z=(0,O.Z)((e,{size:r})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,V.ap)(r,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,V.ap)(r,"ci-preview-size")}})),L=(0,I.d)((e,r)=>{let t=(0,j.w)("ColorInput",N,e),i=(0,y.k)("ColorInput",N,e),{classNames:c,styles:s,unstyled:p,disallowInput:u,fixOnBlur:d,popoverProps:h,withPreview:k,withEyeDropper:I,eyeDropperIcon:O,closeOnColorSwatchClick:V,eyeDropperButtonProps:F,value:M,defaultValue:T,onChange:S,onChangeEnd:W,onClick:_,onFocus:z,onBlur:L,inputProps:H,format:U,wrapperProps:Y,readOnly:G,withPicker:X,swatches:$,disabled:J,leftSection:q,rightSection:K,swatchesPerRow:Q}=i,ee=R(i,["classNames","styles","unstyled","disallowInput","fixOnBlur","popoverProps","withPreview","withEyeDropper","eyeDropperIcon","closeOnColorSwatchClick","eyeDropperButtonProps","value","defaultValue","onChange","onChangeEnd","onClick","onFocus","onBlur","inputProps","format","wrapperProps","readOnly","withPicker","swatches","disabled","leftSection","rightSection","swatchesPerRow"]),er=(0,P.y)({name:"ColorInput",props:t,classes:f,classNames:c,styles:s,unstyled:p,rootSelector:"wrapper",vars:t.vars,varsResolver:Z}),{resolvedClassNames:et,resolvedStyles:eo}=(0,D.h)({classNames:c,styles:s,props:t}),[en,el]=(0,o.useState)(!1),[ea,ei]=(0,o.useState)(""),[ec,es]=(0,n.C)({value:M,defaultValue:T,finalValue:"",onChange:S}),{supported:ep,open:eu}=(0,l.s)(),ed=o.createElement(b.A,B(A(A({},F),er("eyeDropperButton",{className:null==F?void 0:F.className,style:null==F?void 0:F.style})),{variant:"subtle",color:"gray",size:H.size,unstyled:p,onClick:()=>eu().then(e=>{if(null==e?void 0:e.sRGBHex){let r=(0,v.Rt)(U,(0,w.lu)(e.sRGBHex));es(r),null==W||W(r)}}).catch(()=>{})}),O||o.createElement(m,A({},er("eyeDropperIcon")))),eh=e=>{null==z||z(e),el(!0)},em=e=>{d&&es(ea),null==L||L(e),el(!1)},ef=e=>{null==_||_(e),el(!0)};return(0,o.useEffect)(()=>{((0,w.fi)(ec)||""===ec.trim())&&ei(ec)},[ec]),(0,a.l)(()=>{(0,w.fi)(ec)&&es((0,v.Rt)(U,(0,w.lu)(ec)))},[U]),o.createElement(g.I.Wrapper,B(A({},Y),{classNames:et,styles:eo,__staticSelector:"ColorInput"}),o.createElement(x.J,B(A({__staticSelector:"ColorInput",position:"bottom-start",offset:5},h),{opened:en,classNames:et,styles:eo,unstyled:p,withRoles:!1,disabled:G||!1===X&&(!Array.isArray($)||0===$.length)}),o.createElement(x.J.Target,null,o.createElement(g.I,B(A(A({autoComplete:"off"},ee),H),{classNames:et,styles:eo,disabled:J,ref:r,__staticSelector:"ColorInput",onFocus:eh,onBlur:em,onClick:ef,spellCheck:!1,value:ec,onChange:e=>{let r=e.currentTarget.value;es(r),(0,w.fi)(r)&&(null==W||W((0,v.Rt)(U,(0,w.lu)(r))))},leftSection:q||(k?o.createElement(C.b,A({color:(0,w.fi)(ec)?ec:"#fff",size:"var(--ci-preview-size)"},er("colorPreview"))):null),readOnly:u||G,pointer:u,unstyled:p,rightSection:K||(I&&!J&&!G&&ep?ed:null)}))),o.createElement(x.J.Dropdown,{onMouseDown:e=>e.preventDefault(),p:H.size},o.createElement(E.z,{__staticSelector:"ColorInput",value:ec,onChange:es,onChangeEnd:W,format:U,swatches:$,swatchesPerRow:Q,withPicker:X,size:H.size,focusable:!1,unstyled:p,styles:eo,classNames:et,onColorSwatchClick:()=>V&&el(!1)}))))});L.classes=k.M.classes,L.displayName="@mantine/core/ColorInput"},75941:function(e,r,t){"use strict";t.d(r,{h:function(){return h}});var o=t(67294),n=t(35901),l=t(38621),a=Object.defineProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&p(e,t,r[t]);return e};let d=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.t.colors).map(e=>`'${l.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,h={type:"configurator",component:function(e){return o.createElement(n.z,u({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.t.colors).map(e=>l.t.colors[e][6])},e))},code:d,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},88005:function(e,r,t){"use strict";t.d(r,{Mt:function(){return o},nW:function(){return n},pc:function(){return l}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},79067:function(e,r,t){"use strict";t.d(r,{s:function(){return l}});var o=t(67294),n=t(67510);function l(){let[e,r]=(0,o.useState)(!1);(0,n.Y)(()=>{r("undefined"!=typeof window&&"EyeDropper"in window)},[]);let t=(0,o.useCallback)((r={})=>{if(e){let e=new window.EyeDropper;return e.open(r)}return Promise.resolve(void 0)},[e]);return{supported:e,open:t}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=85167)}),_N_E=e.O()}]);
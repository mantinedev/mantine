(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7119],{40903:function(e,o,r){"use strict";r.d(o,{Z:function(){return t}});var t=(0,r(54764).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},73761:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return r(61659)}])},61659:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return J}});var t=r(24246),n=r(71670),l=r(3916),a=r(30289),i=r(27378),c=r(78415),s=r(77481);let p=`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,u={type:"configurator",component:function(e){return i.createElement(c.T,{...e,placeholder:"Input placeholder"})},code:p,centered:!0,maxWidth:340,controls:s.pc},d=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,h={type:"configurator",component:function(e){return i.createElement(c.T,{maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899",...e})},code:d,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},m=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,f={type:"code",component:function(){return i.createElement(c.T,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:m,centered:!0,maxWidth:340};var Text=r(26569);let y=`
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
`,b={type:"code",component:function(){let[e,o]=(0,i.useState)("#FFFFFF");return i.createElement(i.Fragment,null,i.createElement(Text.x,{mb:"md"},"Change end value: ",i.createElement("b",null,e)),i.createElement(c.T,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:o}))},code:y,centered:!0,maxWidth:340},w=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`,x={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:w};var C=r(10248);let E=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(C.t.colors).map(e=>`'${C.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,g={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(C.t.colors).map(e=>C.t.colors[e][6])})},code:E};var I=r(63850);let v=`
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
`,k={type:"code",component:function(){return i.createElement(c.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...C.t.colors.red,...C.t.colors.green,...C.t.colors.blue]})},code:v},j=`
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
`,D={type:"code",component:function(){return i.createElement(c.T,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[...C.t.colors.red,...C.t.colors.green,...C.t.colors.blue]})},code:j,centered:!0,maxWidth:340},V=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,F={type:"code",component:function(){return i.createElement(c.T,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:V,centered:!0,maxWidth:340},T=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,P={type:"code",component:function(){return i.createElement(c.T,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:T,centered:!0,maxWidth:340};var W=r(71078),S=(0,r(54764).Z)("focus-2","IconFocus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]);let _=`
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
`,z={type:"code",component:function(){return i.createElement(c.T,{eyeDropperIcon:i.createElement(S,{style:{width:(0,W.h)(18),height:(0,W.h)(18)},stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:_,centered:!0,maxWidth:340};var A=r(40903);let M=`
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

`,N={type:"code",component:function(){let e=i.createElement(A.Z,{style:{width:(0,W.h)(18),height:(0,W.h)(18)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(c.T,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),i.createElement(c.T,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"}))},code:M,centered:!0,maxWidth:340},R=`
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
`,B={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(c.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:R},H=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,O={type:"code",component:function(){return i.createElement(c.T,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:H},L=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,U={type:"code",component:function(){return i.createElement(c.T,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:L,centered:!0,maxWidth:340};var Y=r(27882);let G=`
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
`,Z={type:"styles-api",data:Y.B,component:function(e){return i.createElement(c.T,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:G,centered:!0,maxWidth:340},X=(0,l.A)(a.us.ColorInput);function $(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:r,GetElementRef:l,InputAccessibility:a,InputFeatures:i,InputSections:c,StylesApiSelectors:s}=o;return r||q("Demo",!0),l||q("GetElementRef",!0),a||q("InputAccessibility",!0),i||q("InputFeatures",!0),c||q("InputSections",!0),s||q("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{component:"ColorInput",element:"input"}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"formats",children:"Formats"}),"\n",(0,t.jsx)(o.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,t.jsxs)(o.p,{children:["By default, ",(0,t.jsx)(o.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,t.jsx)(o.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(o.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(o.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,t.jsxs)(o.p,{children:["To disable free input set ",(0,t.jsx)(o.code,{children:"disallowInput"})," prop:"]}),"\n",(0,t.jsx)(r,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsx)(o.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,t.jsx)(r,{data:g}),"\n",(0,t.jsxs)(o.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,t.jsx)(o.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,t.jsx)(o.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,t.jsx)(r,{data:I.h}),"\n",(0,t.jsx)(o.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,t.jsx)(r,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,t.jsxs)(o.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,t.jsx)(o.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,t.jsx)(r,{data:D}),"\n",(0,t.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["To hide dropdown, set ",(0,t.jsx)(o.code,{children:"withPicker={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:F}),"\n",(0,t.jsx)(o.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,t.jsxs)(o.p,{children:["By default, if ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,t.jsx)(o.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:P}),"\n",(0,t.jsx)(o.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,t.jsxs)(o.p,{children:["You can replace eye dropper icon with any React node using ",(0,t.jsx)(o.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,t.jsx)(r,{data:z}),"\n",(0,t.jsx)(c,{component:"ColorInput"}),"\n",(0,t.jsxs)(o.p,{children:["Note that by default, ",(0,t.jsx)(o.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,t.jsx)(o.code,{children:"leftSection"}),"\nand ",(0,t.jsx)(o.code,{children:"rightSection"})," props:"]}),"\n",(0,t.jsx)(r,{data:N}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(r,{data:B}),"\n",(0,t.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(r,{data:O}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(r,{data:U}),"\n",(0,t.jsx)(s,{component:"ColorInput"}),"\n",(0,t.jsx)(r,{data:Z}),"\n",(0,t.jsx)(l,{component:"ColorInput",refType:"input"}),"\n",(0,t.jsx)(a,{component:"ColorInput"})]})}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(X,{...e,children:(0,t.jsx)($,{...e})})}function q(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63850:function(e,o,r){"use strict";r.d(o,{h:function(){return i}});var t=r(27378),n=r(36227),l=r(10248);let a=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.t.colors).map(e=>`'${l.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,i={type:"configurator",component:function(e){return t.createElement(n.z,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.t.colors).map(e=>l.t.colors[e][6]),...e})},code:a,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},77481:function(e,o,r){"use strict";r.d(o,{Mt:function(){return t},nW:function(){return n},pc:function(){return l}});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},78415:function(e,o,r){"use strict";r.d(o,{T:function(){return j}});var t=r(27378),n=r(58675),l=r(37443),a=r(82591),i=r(92082),c=r(83453),s=r(5564),p=r(6231),u=r(96739),d=r(20410),h=r(23163),m=r(36227),f=r(45035),y=r(84668),b=r(42487),w=r(69859),x=r(63433);function C({style:e,...o}){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)",...e},viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o},t.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t.createElement("path",{d:"M11 7l6 6"}),t.createElement("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"}))}var E=r(84246),g=r(16202),I={eyeDropperIcon:"m-b077c2bc",colorPreview:"m-c5ccdcab",dropdown:"m-5ece2cd7"};let v={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},k=(0,c.Z)((e,{size:o})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,i.ap)(o,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,i.ap)(o,"ci-preview-size")}})),j=(0,d.d)((e,o)=>{let r=(0,u.w)("ColorInput",v,e),{classNames:i,styles:c,unstyled:d,disallowInput:h,fixOnBlur:j,popoverProps:D,withPreview:V,withEyeDropper:F,eyeDropperIcon:T,closeOnColorSwatchClick:P,eyeDropperButtonProps:W,value:S,defaultValue:_,onChange:z,onChangeEnd:A,onClick:M,onFocus:N,onBlur:R,inputProps:B,format:H,wrapperProps:O,readOnly:L,withPicker:U,swatches:Y,disabled:G,leftSection:Z,rightSection:X,swatchesPerRow:$,...J}=(0,w.k)("ColorInput",v,e),q=(0,p.y)({name:"ColorInput",props:r,classes:I,classNames:i,styles:c,unstyled:d,rootSelector:"wrapper",vars:r.vars,varsResolver:k}),{resolvedClassNames:K,resolvedStyles:Q}=(0,s.h)({classNames:i,styles:c,props:r}),[ee,eo]=(0,t.useState)(!1),[er,et]=(0,t.useState)(""),[en,el]=(0,n.C)({value:S,defaultValue:_,finalValue:"",onChange:z}),{supported:ea,open:ei}=(0,l.s)(),ec=t.createElement(E.A,{...W,...q("eyeDropperButton",{className:W?.className,style:W?.style}),variant:"subtle",color:"gray",size:B.size,unstyled:d,onClick:()=>ei().then(e=>{if(e?.sRGBHex){let o=(0,f.Rt)(H,(0,y.lu)(e.sRGBHex));el(o),A?.(o)}}).catch(()=>{})},T||t.createElement(C,{...q("eyeDropperIcon")}));return(0,t.useEffect)(()=>{((0,y.fi)(en)||""===en.trim())&&et(en)},[en]),(0,a.l)(()=>{(0,y.fi)(en)&&el((0,f.Rt)(H,(0,y.lu)(en)))},[H]),t.createElement(b.I.Wrapper,{...O,classNames:K,styles:Q,__staticSelector:"ColorInput"},t.createElement(x.J,{__staticSelector:"ColorInput",position:"bottom-start",offset:5,...D,opened:ee,classNames:K,styles:Q,unstyled:d,withRoles:!1,disabled:L||!1===U&&(!Array.isArray(Y)||0===Y.length)},t.createElement(x.J.Target,null,t.createElement(b.I,{autoComplete:"off",...J,...B,classNames:K,styles:Q,disabled:G,ref:o,__staticSelector:"ColorInput",onFocus:e=>{N?.(e),eo(!0)},onBlur:e=>{j&&el(er),R?.(e),eo(!1)},onClick:e=>{M?.(e),eo(!0)},spellCheck:!1,value:en,onChange:e=>{let o=e.currentTarget.value;el(o),(0,y.fi)(o)&&A?.(f.Rt(H,y.lu(o)))},leftSection:Z||(V?t.createElement(g.b,{color:(0,y.fi)(en)?en:"#fff",size:"var(--ci-preview-size)",...q("colorPreview")}):null),readOnly:h||L,pointer:h,unstyled:d,rightSection:X||(F&&!G&&!L&&ea?ec:null)})),t.createElement(x.J.Dropdown,{onMouseDown:e=>e.preventDefault(),className:I.dropdown},t.createElement(m.z,{__staticSelector:"ColorInput",value:en,onChange:el,onChangeEnd:A,format:H,swatches:Y,swatchesPerRow:$,withPicker:U,size:B.size,focusable:!1,unstyled:d,styles:Q,classNames:K,onColorSwatchClick:()=>P&&eo(!1)}))))});j.classes=h.M.classes,j.displayName="@mantine/core/ColorInput"},37443:function(e,o,r){"use strict";r.d(o,{s:function(){return l}});var t=r(27378),n=r(62849);function l(){let[e,o]=(0,t.useState)(!1);(0,n.Y)(()=>{o("undefined"!=typeof window&&"EyeDropper"in window)},[]);let r=(0,t.useCallback)((o={})=>{if(e){let e=new window.EyeDropper;return e.open(o)}return Promise.resolve(void 0)},[e]);return{supported:e,open:r}}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=73761)}),_N_E=e.O()}]);
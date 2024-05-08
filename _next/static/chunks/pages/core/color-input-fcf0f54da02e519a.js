(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87119],{53058:function(e,o,r){"use strict";r.d(o,{Z:function(){return t}});var t=(0,r(99882).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},60429:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return r(47698)}])},47698:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return J}});var t=r(52322),n=r(45392),l=r(87154),i=r(76528);let a=`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,c={type:"configurator",component:function(e){return(0,t.jsx)(l.T,{...e,placeholder:"Input placeholder"})},code:a,centered:!0,maxWidth:340,controls:i.pc},s=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,p={type:"configurator",component:function(e){return(0,t.jsx)(l.T,{maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899",...e})},code:s,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},d=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
`,u={type:"code",component:function(){return(0,t.jsx)(l.T,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:d,centered:!0,maxWidth:340};var h=r(2784),Text=r(8582);let m=`
import { useState } from 'react';
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
`,f={type:"code",component:function(){let[e,o]=(0,h.useState)("#FFFFFF");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Text.x,{mb:"md",children:["Change end value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsx)(l.T,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:o})]})},code:m,centered:!0,maxWidth:340},x=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`,y={type:"code",component:function(){return(0,t.jsx)(l.T,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:x};var b=r(87744);let w=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(b.t.colors).map(e=>`'${b.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,j={type:"code",component:function(){return(0,t.jsx)(l.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(b.t.colors).map(e=>b.t.colors[e][6])})},code:w};var C=r(96464);let g=`
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
`,v={type:"code",component:function(){return(0,t.jsx)(l.T,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...b.t.colors.red,...b.t.colors.green,...b.t.colors.blue]})},code:g},I=`
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
`,k={type:"code",component:function(){return(0,t.jsx)(l.T,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[...b.t.colors.red,...b.t.colors.green,...b.t.colors.blue]})},code:I,centered:!0,maxWidth:340},E=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,D={type:"code",component:function(){return(0,t.jsx)(l.T,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:E,centered:!0,maxWidth:340},V=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,F={type:"code",component:function(){return(0,t.jsx)(l.T,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:V,centered:!0,maxWidth:340};var T=(0,r(99882).Z)("focus-2","IconFocus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]),P=r(58898);let S=`
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
`,_={type:"code",component:function(){return(0,t.jsx)(l.T,{eyeDropperIcon:(0,t.jsx)(T,{style:{width:(0,P.h)(18),height:(0,P.h)(18)},stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:S,centered:!0,maxWidth:340};var W=r(53058);let z=`
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

`,A={type:"code",component:function(){let e=(0,t.jsx)(W.Z,{style:{width:(0,P.h)(18),height:(0,P.h)(18)},stroke:1.5});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.T,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),(0,t.jsx)(l.T,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"})]})},code:z,centered:!0,maxWidth:340},M=`
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
`,B={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,t.jsx)(l.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:M},N=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,R={type:"code",component:function(){return(0,t.jsx)(l.T,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:N},H=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,O={type:"code",component:function(){return(0,t.jsx)(l.T,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:H,centered:!0,maxWidth:340};var L=r(65156);let U=`
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
`,Y={type:"styles-api",data:L.B,component:function(e){return(0,t.jsx)(l.T,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:U,centered:!0,maxWidth:340};var G=r(79016),Z=r(33638);let X=(0,G.A)(Z.us.ColorInput);function $(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:r,GetElementRef:l,InputAccessibility:i,InputFeatures:a,InputSections:s,StylesApiSelectors:d}=o;return r||q("Demo",!0),l||q("GetElementRef",!0),i||q("InputAccessibility",!0),a||q("InputFeatures",!0),s||q("InputSections",!0),d||q("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{component:"ColorInput",element:"input"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"formats",children:"Formats"}),"\n",(0,t.jsx)(o.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(o.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,t.jsxs)(o.p,{children:["By default, ",(0,t.jsx)(o.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,t.jsx)(o.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(o.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,t.jsxs)(o.p,{children:["To disable free input set ",(0,t.jsx)(o.code,{children:"disallowInput"})," prop:"]}),"\n",(0,t.jsx)(r,{data:y}),"\n",(0,t.jsx)(o.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsx)(o.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,t.jsx)(r,{data:j}),"\n",(0,t.jsxs)(o.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,t.jsx)(o.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,t.jsx)(o.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,t.jsx)(r,{data:C.h}),"\n",(0,t.jsx)(o.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(o.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,t.jsxs)(o.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,t.jsx)(o.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,t.jsx)(r,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["To hide dropdown, set ",(0,t.jsx)(o.code,{children:"withPicker={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:D}),"\n",(0,t.jsx)(o.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,t.jsxs)(o.p,{children:["By default, if ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,t.jsx)(o.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:F}),"\n",(0,t.jsx)(o.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,t.jsxs)(o.p,{children:["You can replace eye dropper icon with any React node using ",(0,t.jsx)(o.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,t.jsx)(r,{data:_}),"\n",(0,t.jsx)(s,{component:"ColorInput"}),"\n",(0,t.jsxs)(o.p,{children:["Note that by default, ",(0,t.jsx)(o.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,t.jsx)(o.code,{children:"leftSection"}),"\nand ",(0,t.jsx)(o.code,{children:"rightSection"})," props:"]}),"\n",(0,t.jsx)(r,{data:A}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(r,{data:B}),"\n",(0,t.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(r,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(r,{data:O}),"\n",(0,t.jsx)(d,{component:"ColorInput"}),"\n",(0,t.jsx)(r,{data:Y}),"\n",(0,t.jsx)(l,{component:"ColorInput",refType:"input"}),"\n",(0,t.jsx)(i,{component:"ColorInput"})]})}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(X,{...e,children:(0,t.jsx)($,{...e})})}function q(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},96464:function(e,o,r){"use strict";r.d(o,{h:function(){return a}});var t=r(52322),n=r(37574),l=r(87744);let i=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.t.colors).map(e=>`'${l.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,a={type:"configurator",component:function(e){return(0,t.jsx)(n.z,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.t.colors).map(e=>l.t.colors[e][6]),...e})},code:i,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},76528:function(e,o,r){"use strict";r.d(o,{Mt:function(){return t},nW:function(){return n},pc:function(){return l}});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},87154:function(e,o,r){"use strict";r.d(o,{T:function(){return D}});var t=r(52322),n=r(2784),l=r(9341),i=r(82923),a=r(71978),c=r(91482),s=r(11200),p=r(51477),d=r(46690),u=r(38483),h=r(82027),m=r(54813),f=r(37574),x=r(59835),y=r(88957),b=r(27009),w=r(6941),j=r(7140),C=r(73063),g=r(50205);function v({style:e,...o}){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)",...e},viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M11 7l6 6"}),(0,t.jsx)("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"})]})}var I={eyeDropperIcon:"m_b077c2bc",colorPreview:"m_c5ccdcab",dropdown:"m_5ece2cd7"};let k={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},E=(0,s.Z)((e,{size:o})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,c.ap)(o,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,c.ap)(o,"ci-preview-size")}})),D=(0,h.d)((e,o)=>{let r=(0,u.w)("ColorInput",k,e),{classNames:c,styles:s,unstyled:h,disallowInput:C,fixOnBlur:D,popoverProps:V,withPreview:F,withEyeDropper:T,eyeDropperIcon:P,closeOnColorSwatchClick:S,eyeDropperButtonProps:_,value:W,defaultValue:z,onChange:A,onChangeEnd:M,onClick:B,onFocus:N,onBlur:R,inputProps:H,format:O,wrapperProps:L,readOnly:U,withPicker:Y,swatches:G,disabled:Z,leftSection:X,rightSection:$,swatchesPerRow:J,...q}=(0,j.k)("ColorInput",k,e),K=(0,d.y)({name:"ColorInput",props:r,classes:I,classNames:c,styles:s,unstyled:h,rootSelector:"wrapper",vars:r.vars,varsResolver:E}),{resolvedClassNames:Q,resolvedStyles:ee}=(0,p.h)({classNames:c,styles:s,props:r}),[eo,er]=(0,n.useState)(!1),[et,en]=(0,n.useState)(""),[el,ei]=(0,l.C)({value:W,defaultValue:z,finalValue:"",onChange:A}),{supported:ea,open:ec}=(0,i.s)(),es=(0,t.jsx)(m.A,{..._,...K("eyeDropperButton",{className:_?.className,style:_?.style}),variant:"subtle",color:"gray",size:H.size,unstyled:h,onClick:()=>ec().then(e=>{if(e?.sRGBHex){let o=(0,x.Rt)(O,(0,y.lu)(e.sRGBHex));ei(o),M?.(o)}}).catch(()=>{}),children:P||(0,t.jsx)(v,{...K("eyeDropperIcon")})});return(0,n.useEffect)(()=>{((0,y.fi)(el)||""===el.trim())&&en(el)},[el]),(0,a.l)(()=>{(0,y.fi)(el)&&ei((0,x.Rt)(O,(0,y.lu)(el)))},[O]),(0,t.jsx)(w.I.Wrapper,{...L,classNames:Q,styles:ee,__staticSelector:"ColorInput",children:(0,t.jsxs)(g.J,{__staticSelector:"ColorInput",position:"bottom-start",offset:5,...V,opened:eo,classNames:Q,styles:ee,unstyled:h,withRoles:!1,disabled:U||!1===Y&&(!Array.isArray(G)||0===G.length),children:[(0,t.jsx)(g.J.Target,{children:(0,t.jsx)(w.I,{autoComplete:"off",...q,...H,classNames:Q,styles:ee,disabled:Z,ref:o,__staticSelector:"ColorInput",onFocus:e=>{N?.(e),er(!0)},onBlur:e=>{D&&ei(et),R?.(e),er(!1)},onClick:e=>{B?.(e),er(!0)},spellCheck:!1,value:el,onChange:e=>{let o=e.currentTarget.value;ei(o),(0,y.fi)(o)&&M?.(x.Rt(O,y.lu(o)))},leftSection:X||(F?(0,t.jsx)(b.b,{color:(0,y.fi)(el)?el:"#fff",size:"var(--ci-preview-size)",...K("colorPreview")}):null),readOnly:C||U,pointer:C,unstyled:h,rightSection:$||(T&&!Z&&!U&&ea?es:null)})}),(0,t.jsx)(g.J.Dropdown,{onMouseDown:e=>e.preventDefault(),className:I.dropdown,children:(0,t.jsx)(f.z,{__staticSelector:"ColorInput",value:el,onChange:ei,onChangeEnd:M,format:O,swatches:G,swatchesPerRow:J,withPicker:Y,size:H.size,focusable:!1,unstyled:h,styles:ee,classNames:Q,onColorSwatchClick:()=>S&&er(!1)})})]})})});D.classes=C.M.classes,D.displayName="@mantine/core/ColorInput"},82923:function(e,o,r){"use strict";r.d(o,{s:function(){return l}});var t=r(2784),n=r(64261);function l(){let[e,o]=(0,t.useState)(!1);(0,n.Y)(()=>{o("undefined"!=typeof window&&"EyeDropper"in window)},[]);let r=(0,t.useCallback)((o={})=>{if(e){let e=new window.EyeDropper;return e.open(o)}return Promise.resolve(void 0)},[e]);return{supported:e,open:r}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=60429)}),_N_E=e.O()}]);
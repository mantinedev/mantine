(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76534],{1798:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},2102:(e,o,r)=>{"use strict";r.d(o,{A:()=>M});var t=r(6029),l=r(55729),n=r(7798),a=r(22666),i=r(50806),s=r(14163),c=r(33987),p=r(38757),d=r(15583),u=r(38919),h=r(8411),m=r(44572),y=r(28204),f=r(91604),x=r(96231),v=r(11508),b=r(29734),g=r(69485),w=r(51718),j=r(17598);function k({style:e,...o}){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)",...e},viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}),(0,t.jsx)("path",{d:"M12 3l0 4"}),(0,t.jsx)("path",{d:"M12 21l0 -3"}),(0,t.jsx)("path",{d:"M3 12l4 0"}),(0,t.jsx)("path",{d:"M21 12l-3 0"}),(0,t.jsx)("path",{d:"M12 12l0 .01"})]})}var C={eyeDropperIcon:"m_b077c2bc",eyeDropperButton:"m_66a028b5",colorPreview:"m_c5ccdcab",dropdown:"m_5ece2cd7"};let I={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0,size:"sm"},A=(0,c.V)((e,{size:o})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,s.YC)(o,"ci-eye-dropper-icon-size")},eyeDropperButton:{"--ci-button-size":(0,s.YC)(o,"ci-button-size")},colorPreview:{"--ci-preview-size":(0,s.YC)(o,"ci-preview-size")}})),M=(0,h.P9)((e,o)=>{let r=(0,u.Y)("ColorInput",I,e),{classNames:s,styles:c,unstyled:h,disallowInput:w,fixOnBlur:M,popoverProps:E,withPreview:D,withEyeDropper:V,eyeDropperIcon:F,closeOnColorSwatchClick:S,eyeDropperButtonProps:P,value:_,defaultValue:z,onChange:T,onChangeEnd:W,onClick:B,onFocus:H,onBlur:N,inputProps:R,format:O="hex",wrapperProps:L,readOnly:Y,withPicker:U,swatches:X,disabled:$,leftSection:G,rightSection:Z,swatchesPerRow:q,...Q}=(0,g.I)("ColorInput",I,e),J=(0,d.I)({name:"ColorInput",props:r,classes:C,classNames:s,styles:c,unstyled:h,rootSelector:"wrapper",vars:r.vars,varsResolver:A}),{resolvedClassNames:K,resolvedStyles:ee}=(0,p.Y)({classNames:s,styles:c,props:r}),[eo,er]=(0,l.useState)(!1),[et,el]=(0,l.useState)(""),[en,ea]=(0,n.Z)({value:_,defaultValue:z,finalValue:"",onChange:T}),{supported:ei,open:es}=(0,a.X)(),ec=(0,t.jsx)(m.M,{...P,...J("eyeDropperButton",{className:P?.className,style:P?.style}),variant:"subtle",color:"gray",unstyled:h,onClick:()=>es().then(e=>{if(e?.sRGBHex){let o=(0,f.Vm)(O,(0,x.H0)(e.sRGBHex));ea(o),W?.(o)}}).catch(()=>{}),children:F||(0,t.jsx)(k,{...J("eyeDropperIcon")})});return(0,l.useEffect)(()=>{((0,x.Yc)(en)||""===en.trim())&&el(en)},[en]),(0,i.C)(()=>{(0,x.Yc)(en)&&ea((0,f.Vm)(O,(0,x.H0)(en)))},[O]),(0,t.jsx)(b.p.Wrapper,{...L,classNames:K,styles:ee,__staticSelector:"ColorInput",children:(0,t.jsxs)(j.A,{__staticSelector:"ColorInput",position:"bottom-start",offset:5,opened:eo,...E,classNames:K,styles:ee,unstyled:h,withRoles:!1,disabled:Y||!1===U&&(!Array.isArray(X)||0===X.length),children:[(0,t.jsx)(j.A.Target,{children:(0,t.jsx)(b.p,{autoComplete:"off",...Q,...R,classNames:K,styles:ee,disabled:$,ref:o,__staticSelector:"ColorInput",onFocus:e=>{H?.(e),er(!0)},onBlur:e=>{M&&ea(et),N?.(e),er(!1)},onClick:e=>{B?.(e),er(!0)},spellCheck:!1,value:en,onChange:e=>{let o=e.currentTarget.value;ea(o),(0,x.Yc)(o)&&W?.((0,f.Vm)(O,(0,x.H0)(o)))},leftSection:G||(D?(0,t.jsx)(v.q,{color:(0,x.Yc)(en)?en:"#fff",size:"var(--ci-preview-size)",...J("colorPreview")}):null),readOnly:w||Y,pointer:w,unstyled:h,rightSection:Z||(V&&!$&&!Y&&ei?ec:null)})}),(0,t.jsx)(j.A.Dropdown,{onMouseDown:e=>e.preventDefault(),className:C.dropdown,children:(0,t.jsx)(y.s,{__staticSelector:"ColorInput",value:en,onChange:ea,onChangeEnd:W,format:O,swatches:X,swatchesPerRow:q,withPicker:U,size:R.size,focusable:!1,unstyled:h,styles:ee,classNames:K,onColorSwatchClick:()=>S&&er(!1),attributes:L.attributes})})]})})});M.classes=w.O.classes,M.displayName="@mantine/core/ColorInput"},6620:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},12113:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return r(43328)}])},22666:(e,o,r)=>{"use strict";r.d(o,{X:()=>n});var t=r(55729),l=r(93430);function n(){let[e,o]=(0,t.useState)(!1);(0,l.o)(()=>{o("undefined"!=typeof window&&!navigator.userAgent.includes("OPR")&&"EyeDropper"in window)},[]);let r=(0,t.useCallback)((o={})=>e?new window.EyeDropper().open(o):Promise.resolve(void 0),[e]);return{supported:e,open:r}}},24583:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},43328:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>z});var t=r(6029),l=r(16285),n=r(2102),a=r(55661);let i={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{...e,placeholder:"Input placeholder"})},code:`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:a.$7},s={type:"configurator",component:function(e){return(0,t.jsx)(n.A,{maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899",...e})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},c={type:"code",component:function(){return(0,t.jsx)(n.A,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
`,centered:!0,maxWidth:340};var p=r(55729),d=r(45208);let u={type:"code",component:function(){let[e,o]=(0,p.useState)("#FFFFFF");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.E,{mb:"md",children:["Change end value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsx)(n.A,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:o})]})},code:`
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
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,t.jsx)(n.A,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`};var m=r(20888);let y={type:"code",component:function(){return(0,t.jsx)(n.A,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(m.S.colors).map(e=>m.S.colors[e][6])})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(m.S.colors).map(e=>`'${m.S.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`};var f=r(83340);let x={type:"code",component:function(){return(0,t.jsx)(n.A,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...m.S.colors.red,...m.S.colors.green,...m.S.colors.blue]})},code:`
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
`},v={type:"code",component:function(){return(0,t.jsx)(n.A,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[...m.S.colors.red,...m.S.colors.green,...m.S.colors.blue]})},code:`
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
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,t.jsx)(n.A,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,t.jsx)(n.A,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,centered:!0,maxWidth:340},w=(0,r(41495).A)("outline","focus-2","Focus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]),j={type:"code",component:function(){return(0,t.jsx)(n.A,{eyeDropperIcon:(0,t.jsx)(w,{size:18,stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:`
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`,centered:!0,maxWidth:340};var k=r(99284);let C={type:"code",component:function(){let e=(0,t.jsx)(k.A,{size:18,stroke:1.5});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),(0,t.jsx)(n.A,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"})]})},code:`
import { ColorInput } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker size={18} stroke={1.5} />;

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

`,centered:!0,maxWidth:340},I={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,t.jsx)(n.A,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},A={type:"code",component:function(){return(0,t.jsx)(n.A,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`},M={type:"code",component:function(){return(0,t.jsx)(n.A,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,centered:!0,maxWidth:340};var E=r(70510);let D=`
import { ColorInput } from '@mantine/core';

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
`,V={type:"styles-api",data:E.U,component:function(e){return(0,t.jsx)(n.A,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:D,centered:!0,maxWidth:340};var F=r(38547),S=r(5262);let P=(0,F.P)(S.XZ.ColorInput);function _(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:r,GetElementRef:n,InputAccessibility:a,InputFeatures:p,InputSections:d,StylesApiSelectors:m}=o;return r||T("Demo",!0),n||T("GetElementRef",!0),a||T("InputAccessibility",!0),p||T("InputFeatures",!0),d||T("InputSections",!0),m||T("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(p,{component:"ColorInput",element:"input"}),"\n",(0,t.jsx)(r,{data:i}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"formats",children:"Formats"}),"\n",(0,t.jsx)(o.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,t.jsx)(r,{data:s}),"\n",(0,t.jsx)(o.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,t.jsxs)(o.p,{children:["By default, ",(0,t.jsx)(o.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,t.jsx)(o.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(o.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,t.jsxs)(o.p,{children:["To disable free input set ",(0,t.jsx)(o.code,{children:"disallowInput"})," prop:"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsx)(o.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,t.jsx)(r,{data:y}),"\n",(0,t.jsxs)(o.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,t.jsx)(o.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,t.jsx)(o.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,t.jsx)(r,{data:f.M}),"\n",(0,t.jsx)(o.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,t.jsx)(r,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,t.jsxs)(o.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,t.jsx)(o.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["To hide dropdown, set ",(0,t.jsx)(o.code,{children:"withPicker={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(o.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,t.jsxs)(o.p,{children:["By default, if ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,t.jsx)(o.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:g}),"\n",(0,t.jsx)(o.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,t.jsxs)(o.p,{children:["You can replace eye dropper icon with any React node using ",(0,t.jsx)(o.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,t.jsx)(r,{data:j}),"\n",(0,t.jsx)(d,{component:"ColorInput"}),"\n",(0,t.jsxs)(o.p,{children:["Note that by default, ",(0,t.jsx)(o.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,t.jsx)(o.code,{children:"leftSection"}),"\nand ",(0,t.jsx)(o.code,{children:"rightSection"})," props:"]}),"\n",(0,t.jsx)(r,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(r,{data:I}),"\n",(0,t.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(r,{data:A}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(r,{data:M}),"\n",(0,t.jsx)(m,{component:"ColorInput"}),"\n",(0,t.jsx)(r,{data:V}),"\n",(0,t.jsx)(n,{component:"ColorInput",refType:"input"}),"\n",(0,t.jsx)(a,{component:"ColorInput"})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(P,{...e,children:(0,t.jsx)(_,{...e})})}function T(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},55661:(e,o,r)=>{"use strict";r.d(o,{$7:()=>n,l$:()=>t,wQ:()=>l});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},65433:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},83340:(e,o,r)=>{"use strict";r.d(o,{M:()=>a});var t=r(6029),l=r(28204),n=r(20888);let a={type:"configurator",component:function(e){return(0,t.jsx)(l.s,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(n.S.colors).map(e=>n.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(n.S.colors).map(e=>`'${n.S.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},84276:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},99284:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41495).A)("outline","color-picker","ColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=12113)),_N_E=e.O()}]);
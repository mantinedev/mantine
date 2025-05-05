(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13804],{40749:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return r(81045)}])},81045:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var o=r(31085),a=r(71184),n=r(14041),s=r(3278),l=r(93065);let c={type:"code",component:function(){let[e,t]=(0,n.useState)("rgba(47, 119, 150, 0.7)");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.s,{format:"rgba",value:e,onChange:t}),(0,o.jsx)(l.E,{mt:"md",children:e})]})},code:`
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
`,centered:!0};var i=r(75390);let d={type:"configurator",component:function(e){let[t,r]=(0,n.useState)("#C5D899");return(0,o.jsxs)(i.B,{align:"center",children:[(0,o.jsx)(s.s,{value:t,onChange:r,...e}),(0,o.jsx)(l.E,{children:t})]})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var h=r(2242);let u={type:"code",component:function(){return(0,o.jsx)(i.B,{align:"center",children:(0,o.jsx)(s.s,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.S.colors).map(e=>h.S.colors[e][6])})})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(h.S.colors).map(e=>`'${h.S.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`};var p=r(54381);let m={type:"code",component:function(){let[e,t]=(0,n.useState)("#fff");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.s,{format:"hex",value:e,onChange:t,withPicker:!1,fullWidth:!0,swatches:[...h.S.colors.red.slice(0,7),...h.S.colors.green.slice(0,7),...h.S.colors.blue.slice(0,7)]}),(0,o.jsx)(l.E,{ta:"center",mt:5,children:e})]})},code:`
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
`,centered:!0,maxWidth:220},x={type:"configurator",component:function(e){return(0,o.jsx)(s.s,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.S.colors).map(e=>h.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},v={type:"code",component:function(){return(0,o.jsx)(s.s,{fullWidth:!0,size:"lg",format:"rgba"})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`};var f=r(69701);let g=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,j={type:"styles-api",data:f._,component:function(e){return(0,o.jsx)(s.s,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:g};var k=r(12671),y=r(39013),b=r(18675),w=r(20017);let M=(0,b.P)(w.XZ.ColorPicker);function C(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Demo:r,StylesApiSelectors:n}=t;return r||A("Demo",!0),n||A("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"color-format",children:"Color format"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,o.jsx)(r,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsxs)(t.p,{children:["You can add predefined color swatches with ",(0,o.jsx)(t.code,{children:"swatches"})," prop:"]}),"\n",(0,o.jsx)(r,{data:u}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,o.jsx)(t.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,o.jsx)(r,{data:p.M}),"\n",(0,o.jsxs)(t.p,{children:["To display swatches without picker set ",(0,o.jsx)(t.code,{children:"withPicker={false}"})," and ",(0,o.jsx)(t.code,{children:"fullWidth"})," props:"]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,o.jsx)(t.code,{children:"xs"}),", ",(0,o.jsx)(t.code,{children:"sm"}),", ",(0,o.jsx)(t.code,{children:"md"}),", ",(0,o.jsx)(t.code,{children:"lg"})," and ",(0,o.jsx)(t.code,{children:"xl"}),":"]}),"\n",(0,o.jsx)(r,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,o.jsx)(t.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,o.jsx)(r,{data:v}),"\n",(0,o.jsx)(n,{component:"ColorPicker"}),"\n",(0,o.jsx)(r,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"hueslider-component",children:"HueSlider component"}),"\n",(0,o.jsx)(r,{data:k.k}),"\n",(0,o.jsx)(t.h2,{id:"alphaslider-component",children:"AlphaSlider component"}),"\n",(0,o.jsx)(r,{data:y.Y}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(t.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,o.jsx)(t.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,o.jsx)(t.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To make component accessible for screen readers, set ",(0,o.jsx)(t.code,{children:"saturationLabel"}),", ",(0,o.jsx)(t.code,{children:"hueLabel"})," and ",(0,o.jsx)(t.code,{children:"alphaLabel"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(M,{...e,children:(0,o.jsx)(C,{...e})})}function A(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},39013:(e,t,r)=>{"use strict";r.d(t,{Y:()=>l});var o=r(31085),a=r(14041),n=r(93065),s=r(54253);let l={type:"code",component:function(){let[e,t]=(0,a.useState)(.55);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.E,{children:["Alpha value: ",e]}),(0,o.jsx)(s.e,{color:"#1c7ed6",value:e,onChange:t})]})},code:`
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
`,centered:!0,maxWidth:300}},12671:(e,t,r)=>{"use strict";r.d(t,{k:()=>l});var o=r(31085),a=r(14041),n=r(93065),s=r(33789);let l={type:"code",component:function(){let[e,t]=(0,a.useState)(250);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.E,{children:["Hue value: ",e]}),(0,o.jsx)(s.q,{value:e,onChange:t})]})},code:`
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
`,centered:!0,maxWidth:300}},54381:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});var o=r(31085),a=r(3278),n=r(2242);let s={type:"configurator",component:function(e){return(0,o.jsx)(a.s,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(n.S.colors).map(e=>n.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(n.S.colors).map(e=>`'${n.S.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(40749)),_N_E=e.O()}]);
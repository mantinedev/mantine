(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13804],{40749:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return o(81045)}])},81045:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>P});var t=o(31085),n=o(71184),c=o(14041),l=o(3278),a=o(93065);let s={type:"code",component:function(){let[e,r]=(0,c.useState)("rgba(47, 119, 150, 0.7)");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.s,{format:"rgba",value:e,onChange:r}),(0,t.jsx)(a.E,{mt:"md",children:e})]})},code:`
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
`,centered:!0};var i=o(75390);let d={type:"configurator",component:function(e){let[r,o]=(0,c.useState)("#C5D899");return(0,t.jsxs)(i.B,{align:"center",children:[(0,t.jsx)(l.s,{value:r,onChange:o,...e}),(0,t.jsx)(a.E,{children:r})]})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var h=o(2242);let u={type:"code",component:function(){return(0,t.jsx)(i.B,{align:"center",children:(0,t.jsx)(l.s,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.S.colors).map(e=>h.S.colors[e][6])})})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(h.S.colors).map(e=>`'${h.S.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`};var p=o(54381);let m={type:"code",component:function(){let[e,r]=(0,c.useState)("#fff");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.s,{format:"hex",value:e,onChange:r,withPicker:!1,fullWidth:!0,swatches:[...h.S.colors.red.slice(0,7),...h.S.colors.green.slice(0,7),...h.S.colors.blue.slice(0,7)]}),(0,t.jsx)(a.E,{ta:"center",mt:5,children:e})]})},code:`
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
`,centered:!0,maxWidth:220},x={type:"configurator",component:function(e){return(0,t.jsx)(l.s,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.S.colors).map(e=>h.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},f={type:"code",component:function(){return(0,t.jsx)(l.s,{fullWidth:!0,size:"lg",format:"rgba"})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`};var j=o(69701);let b=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,g={type:"styles-api",data:j._,component:function(e){return(0,t.jsx)(l.s,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:b};var k=o(12671),w=o(39013),v=o(85954),S=o(38215);let C=(0,v.P)(S.XZ.ColorPicker);function y(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:o,StylesApiSelectors:c}=r;return o||E("Demo",!0),c||E("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:s}),"\n",(0,t.jsx)(r.h2,{id:"color-format",children:"Color format"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsxs)(r.p,{children:["You can add predefined color swatches with ",(0,t.jsx)(r.code,{children:"swatches"})," prop:"]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsxs)(r.p,{children:["By default, ",(0,t.jsx)(r.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,t.jsx)(r.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,t.jsx)(o,{data:p.M}),"\n",(0,t.jsxs)(r.p,{children:["To display swatches without picker set ",(0,t.jsx)(r.code,{children:"withPicker={false}"})," and ",(0,t.jsx)(r.code,{children:"fullWidth"})," props:"]}),"\n",(0,t.jsx)(o,{data:m}),"\n",(0,t.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,t.jsx)(r.code,{children:"xs"}),", ",(0,t.jsx)(r.code,{children:"sm"}),", ",(0,t.jsx)(r.code,{children:"md"}),", ",(0,t.jsx)(r.code,{children:"lg"})," and ",(0,t.jsx)(r.code,{children:"xl"}),":"]}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(r.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,t.jsx)(r.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(c,{component:"ColorPicker"}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(r.h2,{id:"hueslider-component",children:"HueSlider component"}),"\n",(0,t.jsx)(o,{data:k.k}),"\n",(0,t.jsx)(r.h2,{id:"alphaslider-component",children:"AlphaSlider component"}),"\n",(0,t.jsx)(o,{data:w.Y}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(r.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,t.jsx)(r.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,t.jsx)(r.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["To make component accessible for screen readers, set ",(0,t.jsx)(r.code,{children:"saturationLabel"}),", ",(0,t.jsx)(r.code,{children:"hueLabel"})," and ",(0,t.jsx)(r.code,{children:"alphaLabel"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(C,{...e,children:(0,t.jsx)(y,{...e})})}function E(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},39013:(e,r,o)=>{"use strict";o.d(r,{Y:()=>a});var t=o(31085),n=o(14041),c=o(93065),l=o(54253);let a={type:"code",component:function(){let[e,r]=(0,n.useState)(.55);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.E,{children:["Alpha value: ",e]}),(0,t.jsx)(l.e,{color:"#1c7ed6",value:e,onChange:r})]})},code:`
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
`,centered:!0,maxWidth:300}},12671:(e,r,o)=>{"use strict";o.d(r,{k:()=>a});var t=o(31085),n=o(14041),c=o(93065),l=o(33789);let a={type:"code",component:function(){let[e,r]=(0,n.useState)(250);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.E,{children:["Hue value: ",e]}),(0,t.jsx)(l.q,{value:e,onChange:r})]})},code:`
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
`,centered:!0,maxWidth:300}},54381:(e,r,o)=>{"use strict";o.d(r,{M:()=>l});var t=o(31085),n=o(3278),c=o(2242);let l={type:"configurator",component:function(e){return(0,t.jsx)(n.s,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(c.S.colors).map(e=>c.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(c.S.colors).map(e=>`'${c.S.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(40749)),_N_E=e.O()}]);
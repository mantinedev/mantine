(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let t={};for(var n in e)o(t,n,{get:e[n],enumerable:!0});return r||o(t,Symbol.toStringTag,{value:"Module"}),t}])},611615,e=>{"use strict";var o=e.i(648863),r=e.i(191788),t=e.i(402638),n=e.i(671640),l=e.i(883364),a=e.i(391398);let c={type:"configurator",component:function(e){let[o,c]=(0,r.useState)("#C5D899");return(0,a.jsxs)(n.Stack,{align:"center",children:[(0,a.jsx)(t.ColorPicker,{value:o,onChange:c,...e}),(0,a.jsx)(l.Text,{children:o})]})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var i=e.i(922);let s={type:"configurator",component:function(e){return(0,a.jsx)(t.ColorPicker,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(i.DEFAULT_THEME.colors).map(e=>i.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},u={type:"configurator",component:function(e){return(0,a.jsx)(t.ColorPicker,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(i.DEFAULT_THEME.colors).map(e=>i.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(i.DEFAULT_THEME.colors).map(e=>`'${i.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]},m={type:"code",component:function(){return(0,a.jsx)(n.Stack,{align:"center",children:(0,a.jsx)(t.ColorPicker,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(i.DEFAULT_THEME.colors).map(e=>i.DEFAULT_THEME.colors[e][6])})})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(i.DEFAULT_THEME.colors).map(e=>`'${i.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`},d={type:"code",component:function(){let[e,o]=(0,r.useState)("#fff");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.ColorPicker,{format:"hex",value:e,onChange:o,withPicker:!1,fullWidth:!0,swatches:[...i.DEFAULT_THEME.colors.red.slice(0,7),...i.DEFAULT_THEME.colors.green.slice(0,7),...i.DEFAULT_THEME.colors.blue.slice(0,7)]}),(0,a.jsx)(l.Text,{ta:"center",mt:5,children:e})]})},code:`
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
`,centered:!0,maxWidth:220},h={type:"code",component:function(){let[e,o]=(0,r.useState)("rgba(47, 119, 150, 0.7)");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.ColorPicker,{format:"rgba",value:e,onChange:o}),(0,a.jsx)(l.Text,{mt:"md",children:e})]})},code:`
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
`,centered:!0},p={type:"code",component:function(){return(0,a.jsx)(t.ColorPicker,{fullWidth:!0,size:"lg",format:"rgba"})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`};var f=e.i(39683);let x=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,T={type:"styles-api",data:f.ColorPickerStylesApi,component:function(e){return(0,a.jsx)(t.ColorPicker,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:x};var E=e.i(829453);let g={type:"code",component:function(){let[e,o]=(0,r.useState)(.55);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Text,{children:["Alpha value: ",e]}),(0,a.jsx)(E.AlphaSlider,{color:"#1c7ed6",value:e,onChange:o})]})},code:`
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
`,centered:!0,maxWidth:300};var b=e.i(637148);let C={type:"code",component:function(){let[e,o]=(0,r.useState)(250);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Text,{children:["Hue value: ",e]}),(0,a.jsx)(b.HueSlider,{value:e,onChange:o})]})},code:`
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
`,centered:!0,maxWidth:300};var j=(0,o.__exportAll)({alphaSlider:()=>g,formatsConfigurator:()=>c,fullWidth:()=>p,hueSlider:()=>C,sizeConfigurator:()=>s,stylesApi:()=>T,swatches:()=>m,swatchesConfigurator:()=>u,swatchesOnly:()=>d,usage:()=>h});e.s(["ColorPickerDemos",0,j],611615)},871268,e=>{"use strict";var o=e.i(391398),r=e.i(38856),t=e.i(611615);e.i(603441);var n=e.i(62558);e.i(457450);var l=e.i(418026);let a=(0,n.Layout)(l.MDX_DATA.HueSlider);function c(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,r.useMDXComponents)(),...e.components},{Demo:l}=n;return l||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"HueSlider"})," component to allow users to select hue value of a color.\nIt accepts values from ",(0,o.jsx)(n.code,{children:"0"})," to ",(0,o.jsx)(n.code,{children:"360"}),". ",(0,o.jsx)(n.code,{children:"HueSlider"})," is a part of ",(0,o.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})," component,\nbut can also be used separately."]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.hueSlider})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})})}])},83712,(e,o,r)=>{let t="/core/hue-slider";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(871268)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);
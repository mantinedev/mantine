(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let t={};for(var n in e)o(t,n,{get:e[n],enumerable:!0});return r||o(t,Symbol.toStringTag,{value:"Module"}),t}])},611615,e=>{"use strict";var o=e.i(648863),r=e.i(191788),t=e.i(402638),n=e.i(671640),l=e.i(883364),c=e.i(391398);let i={type:"configurator",component:function(e){let[o,i]=(0,r.useState)("#C5D899");return(0,c.jsxs)(n.Stack,{align:"center",children:[(0,c.jsx)(t.ColorPicker,{value:o,onChange:i,...e}),(0,c.jsx)(l.Text,{children:o})]})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var a=e.i(922);let s={type:"configurator",component:function(e){return(0,c.jsx)(t.ColorPicker,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(a.DEFAULT_THEME.colors).map(e=>a.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},d={type:"configurator",component:function(e){return(0,c.jsx)(t.ColorPicker,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(a.DEFAULT_THEME.colors).map(e=>a.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(a.DEFAULT_THEME.colors).map(e=>`'${a.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]},u={type:"code",component:function(){return(0,c.jsx)(n.Stack,{align:"center",children:(0,c.jsx)(t.ColorPicker,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(a.DEFAULT_THEME.colors).map(e=>a.DEFAULT_THEME.colors[e][6])})})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(a.DEFAULT_THEME.colors).map(e=>`'${a.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`},h={type:"code",component:function(){let[e,o]=(0,r.useState)("#fff");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.ColorPicker,{format:"hex",value:e,onChange:o,withPicker:!1,fullWidth:!0,swatches:[...a.DEFAULT_THEME.colors.red.slice(0,7),...a.DEFAULT_THEME.colors.green.slice(0,7),...a.DEFAULT_THEME.colors.blue.slice(0,7)]}),(0,c.jsx)(l.Text,{ta:"center",mt:5,children:e})]})},code:`
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
`,centered:!0,maxWidth:220},m={type:"code",component:function(){let[e,o]=(0,r.useState)("rgba(47, 119, 150, 0.7)");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.ColorPicker,{format:"rgba",value:e,onChange:o}),(0,c.jsx)(l.Text,{mt:"md",children:e})]})},code:`
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
`,centered:!0},p={type:"code",component:function(){return(0,c.jsx)(t.ColorPicker,{fullWidth:!0,size:"lg",format:"rgba"})},code:`
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
`,j={type:"styles-api",data:f.ColorPickerStylesApi,component:function(e){return(0,c.jsx)(t.ColorPicker,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:x};var g=e.i(829453);let C={type:"code",component:function(){let[e,o]=(0,r.useState)(.55);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.Text,{children:["Alpha value: ",e]}),(0,c.jsx)(g.AlphaSlider,{color:"#1c7ed6",value:e,onChange:o})]})},code:`
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
`,centered:!0,maxWidth:300};var b=e.i(637148);let T={type:"code",component:function(){let[e,o]=(0,r.useState)(250);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.Text,{children:["Hue value: ",e]}),(0,c.jsx)(b.HueSlider,{value:e,onChange:o})]})},code:`
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
`,centered:!0,maxWidth:300};var k=(0,o.__exportAll)({alphaSlider:()=>C,formatsConfigurator:()=>i,fullWidth:()=>p,hueSlider:()=>T,sizeConfigurator:()=>s,stylesApi:()=>j,swatches:()=>u,swatchesConfigurator:()=>d,swatchesOnly:()=>h,usage:()=>m});e.s(["ColorPickerDemos",0,k],611615)},130589,e=>{"use strict";var o=e.i(391398),r=e.i(38856),t=e.i(611615);e.i(603441);var n=e.i(62558);e.i(457450);var l=e.i(418026);let c=(0,n.Layout)(l.MDX_DATA.ColorPicker);function i(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:l,StylesApiSelectors:c}=n;return l||a("Demo",!0),c||a("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.usage}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ColorPicker"})," value must be a string; other types are not supported.\nThe ",(0,o.jsx)(n.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorPicker } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('#ffffff');\n  return <ColorPicker value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ColorPicker"})," can be used with uncontrolled forms the same way as a native ",(0,o.jsx)(n.code,{children:"input"})," element.\nSet the ",(0,o.jsx)(n.code,{children:"name"})," attribute to include color picker value in ",(0,o.jsx)(n.code,{children:"FormData"})," object on form submission.\nTo control the initial value in uncontrolled forms, use the ",(0,o.jsx)(n.code,{children:"defaultValue"})," prop."]}),"\n",(0,o.jsxs)(n.p,{children:["Example usage of uncontrolled ",(0,o.jsx)(n.code,{children:"ColorPicker"})," with ",(0,o.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log(\'Color value:\', formData.get(\'color\'));\n      }}\n    >\n      <ColorPicker\n        name="color"\n        defaultValue="#FF0000"\n        format="hex"\n      />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"color-format",children:"Color format"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nThe slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.formatsConfigurator}),"\n",(0,o.jsx)(n.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsxs)(n.p,{children:["You can add predefined color swatches with the ",(0,o.jsx)(n.code,{children:"swatches"})," prop:"]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.swatches}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"ColorPicker"})," will display 7 swatches per row. You can configure it with the ",(0,o.jsx)(n.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.swatchesConfigurator}),"\n",(0,o.jsxs)(n.p,{children:["To display swatches without picker, set ",(0,o.jsx)(n.code,{children:"withPicker={false}"})," and ",(0,o.jsx)(n.code,{children:"fullWidth"})," props:"]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.swatchesOnly}),"\n",(0,o.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"}),":"]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.sizeConfigurator}),"\n",(0,o.jsx)(n.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"fullWidth"})," prop to stretch the component to 100% of parent width. In this case the picker will not\nhave a fixed width, but you can still use the ",(0,o.jsx)(n.code,{children:"size"})," prop to control the sizes of sliders."]}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.fullWidth}),"\n",(0,o.jsx)(c,{component:"ColorPicker"}),"\n",(0,o.jsx)(l,{data:t.ColorPickerDemos.stylesApi}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(n.p,{children:"The ColorPicker component is accessible by default:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,o.jsx)(n.li,{children:"When the mouse is used to interact with the slider, focus is moved to the slider"}),"\n",(0,o.jsx)(n.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To make the component accessible for screen readers, set ",(0,o.jsx)(n.code,{children:"saturationLabel"}),", ",(0,o.jsx)(n.code,{children:"hueLabel"})," and ",(0,o.jsx)(n.code,{children:"alphaLabel"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function a(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,o.jsx)(c,{...e,children:(0,o.jsx)(i,{...e})})}])},995403,(e,o,r)=>{let t="/core/color-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(130589)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);
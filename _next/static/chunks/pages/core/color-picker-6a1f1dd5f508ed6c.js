(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{88512:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return r(52922)}])},52922:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(24246),o=r(71670),l=r(3916),c=r(30289),a=r(27378),i=r(36227),Text=r(26569);let s=`
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
`,u={type:"code",component:function(){let[e,t]=(0,a.useState)("rgba(47, 119, 150, 0.7)");return a.createElement(a.Fragment,null,a.createElement(i.z,{format:"rgba",value:e,onChange:t}),a.createElement(Text.x,{mt:"md"},e))},code:s,centered:!0};var d=r(27884);let h=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,m={type:"configurator",component:function(e){let[t,r]=(0,a.useState)("#C5D899");return a.createElement(d.K,{align:"center"},a.createElement(i.z,{value:t,onChange:r,...e}),a.createElement(Text.x,null,t))},code:h,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var p=r(10248);let f=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(p.t.colors).map(e=>`'${p.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,x={type:"code",component:function(){return a.createElement(d.K,{align:"center"},a.createElement(i.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(p.t.colors).map(e=>p.t.colors[e][6])}))},code:f};var j=r(63850);let b=`
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
`,g={type:"code",component:function(){let[e,t]=(0,a.useState)("#fff");return a.createElement(a.Fragment,null,a.createElement(i.z,{format:"hex",value:e,onChange:t,withPicker:!1,fullWidth:!0,swatches:[...p.t.colors.red.slice(0,7),...p.t.colors.green.slice(0,7),...p.t.colors.blue.slice(0,7)]}),a.createElement(Text.x,{ta:"center",mt:5},e))},code:b,centered:!0,maxWidth:220},w=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,k={type:"configurator",component:function(e){return a.createElement(i.z,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(p.t.colors).map(e=>p.t.colors[e][6]),...e})},code:w,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},E=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,v={type:"code",component:function(){return a.createElement(i.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:E};var C=r(64954);let y=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,P={type:"styles-api",data:C.L,component:function(e){return a.createElement(i.z,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:y};var S=r(61509),T=r(3163);let z=(0,l.A)(c.us.ColorPicker);function A(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:r,StylesApiSelectors:l}=t;return r||_("Demo",!0),l||_("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"color-format",children:"Color format"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,n.jsxs)(t.p,{children:["You can add predefined color swatches with ",(0,n.jsx)(t.code,{children:"swatches"})," prop:"]}),"\n",(0,n.jsx)(r,{data:x}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,n.jsx)(t.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,n.jsx)(r,{data:j.h}),"\n",(0,n.jsxs)(t.p,{children:["To display swatches without picker set ",(0,n.jsx)(t.code,{children:"withPicker={false}"})," and ",(0,n.jsx)(t.code,{children:"fullWidth"})," props:"]}),"\n",(0,n.jsx)(r,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,n.jsx)(t.code,{children:"xs"}),", ",(0,n.jsx)(t.code,{children:"sm"}),", ",(0,n.jsx)(t.code,{children:"md"}),", ",(0,n.jsx)(t.code,{children:"lg"})," and ",(0,n.jsx)(t.code,{children:"xl"}),":"]}),"\n",(0,n.jsx)(r,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,n.jsx)(t.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(l,{component:"ColorPicker"}),"\n",(0,n.jsx)(r,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"hueslider-component",children:"HueSlider component"}),"\n",(0,n.jsx)(r,{data:S.u}),"\n",(0,n.jsx)(t.h2,{id:"alphaslider-component",children:"AlphaSlider component"}),"\n",(0,n.jsx)(r,{data:T.r}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsx)(t.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,n.jsx)(t.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,n.jsx)(t.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To make component accessible for screen readers, set ",(0,n.jsx)(t.code,{children:"saturationLabel"}),", ",(0,n.jsx)(t.code,{children:"hueLabel"})," and ",(0,n.jsx)(t.code,{children:"alphaLabel"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(z,{...e,children:(0,n.jsx)(A,{...e})})}function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3163:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var n=r(27378),o=r(26569),l=r(26596);let c=`
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
`,a={type:"code",component:function(){let[e,t]=(0,n.useState)(.55);return n.createElement(n.Fragment,null,n.createElement(o.x,null,"Alpha value: ",e),n.createElement(l.k,{color:"#1c7ed6",value:e,onChange:t}))},code:c,centered:!0,maxWidth:300}},61509:function(e,t,r){"use strict";r.d(t,{u:function(){return a}});var n=r(27378),o=r(26569),l=r(12333);let c=`
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
`,a={type:"code",component:function(){let[e,t]=(0,n.useState)(250);return n.createElement(n.Fragment,null,n.createElement(o.x,null,"Hue value: ",e),n.createElement(l.Q,{value:e,onChange:t}))},code:c,centered:!0,maxWidth:300}},63850:function(e,t,r){"use strict";r.d(t,{h:function(){return a}});var n=r(27378),o=r(36227),l=r(10248);let c=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.t.colors).map(e=>`'${l.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,a={type:"configurator",component:function(e){return n.createElement(o.z,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.t.colors).map(e=>l.t.colors[e][6]),...e})},code:c,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=88512)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{88512:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return r(52922)}])},52922:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(24246),o=r(71670),l=r(27378),c=r(36227),Text=r(26569);let a=`
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
`,i={type:"code",component:function(){let[e,t]=(0,l.useState)("rgba(47, 119, 150, 0.7)");return l.createElement(l.Fragment,null,l.createElement(c.z,{format:"rgba",value:e,onChange:t}),l.createElement(Text.x,{mt:"md"},e))},code:a,centered:!0};var s=r(27884);let u=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,d={type:"configurator",component:function(e){let[t,r]=(0,l.useState)("#C5D899");return l.createElement(s.K,{align:"center"},l.createElement(c.z,{value:t,onChange:r,...e}),l.createElement(Text.x,null,t))},code:u,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var h=r(10248);let m=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(h.t.colors).map(e=>`'${h.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,p={type:"code",component:function(){return l.createElement(s.K,{align:"center"},l.createElement(c.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.t.colors).map(e=>h.t.colors[e][6])}))},code:m};var f=r(63850);let x=`
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
`,j={type:"code",component:function(){let[e,t]=(0,l.useState)("#fff");return l.createElement(l.Fragment,null,l.createElement(c.z,{format:"hex",value:e,onChange:t,withPicker:!1,fullWidth:!0,swatches:[...h.t.colors.red.slice(0,7),...h.t.colors.green.slice(0,7),...h.t.colors.blue.slice(0,7)]}),l.createElement(Text.x,{ta:"center",mt:5},e))},code:x,centered:!0,maxWidth:220},b=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,g={type:"configurator",component:function(e){return l.createElement(c.z,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.t.colors).map(e=>h.t.colors[e][6]),...e})},code:b,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},w=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,k={type:"code",component:function(){return l.createElement(c.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:w};var E=r(64954);let v=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,C={type:"styles-api",data:E.L,component:function(e){return l.createElement(c.z,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:v};var y=r(61509),P=r(3163),S=r(3916),T=r(30289);let z=(0,S.A)(T.us.ColorPicker);function A(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:r,StylesApiSelectors:l}=t;return r||_("Demo",!0),l||_("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:i}),"\n",(0,n.jsx)(t.h2,{id:"color-format",children:"Color format"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,n.jsxs)(t.p,{children:["You can add predefined color swatches with ",(0,n.jsx)(t.code,{children:"swatches"})," prop:"]}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,n.jsx)(t.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,n.jsx)(r,{data:f.h}),"\n",(0,n.jsxs)(t.p,{children:["To display swatches without picker set ",(0,n.jsx)(t.code,{children:"withPicker={false}"})," and ",(0,n.jsx)(t.code,{children:"fullWidth"})," props:"]}),"\n",(0,n.jsx)(r,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,n.jsx)(t.code,{children:"xs"}),", ",(0,n.jsx)(t.code,{children:"sm"}),", ",(0,n.jsx)(t.code,{children:"md"}),", ",(0,n.jsx)(t.code,{children:"lg"})," and ",(0,n.jsx)(t.code,{children:"xl"}),":"]}),"\n",(0,n.jsx)(r,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,n.jsx)(t.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,n.jsx)(r,{data:k}),"\n",(0,n.jsx)(l,{component:"ColorPicker"}),"\n",(0,n.jsx)(r,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"hueslider-component",children:"HueSlider component"}),"\n",(0,n.jsx)(r,{data:y.u}),"\n",(0,n.jsx)(t.h2,{id:"alphaslider-component",children:"AlphaSlider component"}),"\n",(0,n.jsx)(r,{data:P.r}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsx)(t.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,n.jsx)(t.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,n.jsx)(t.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To make component accessible for screen readers, set ",(0,n.jsx)(t.code,{children:"saturationLabel"}),", ",(0,n.jsx)(t.code,{children:"hueLabel"})," and ",(0,n.jsx)(t.code,{children:"alphaLabel"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(z,{...e,children:(0,n.jsx)(A,{...e})})}function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3163:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var n=r(27378),o=r(26569),l=r(26596);let c=`
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
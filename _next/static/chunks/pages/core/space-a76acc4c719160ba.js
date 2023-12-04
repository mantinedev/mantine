(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{75601:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/space",function(){return t(60432)}])},60432:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(24246),o=t(71670),i=t(3916),c=t(30289),a=t(27378),Text=t(26569),s=t(10904);let l=`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`,p={type:"configurator",component:function(e){return a.createElement(a.Fragment,null,a.createElement(Text.x,null,"First line"),a.createElement(s.T,{...e}),a.createElement(Text.x,null,"Second line"))},code:l,controls:[{prop:"h",type:"size",initialValue:"md",libraryValue:"__"}]},d=`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </div>
  );
}
`,u={type:"configurator",component:function(e){return a.createElement("div",{style:{display:"flex"}},a.createElement(Text.x,null,"First part"),a.createElement(s.T,{...e}),a.createElement(Text.x,null,"Second part"))},code:d,controls:[{prop:"w",type:"size",initialValue:"md",libraryValue:"__"}]},m=(0,i.A)(c.us.Space);function x(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"Space"})," component to add horizontal or vertical spacing between elements:"]}),"\n",(0,r.jsx)(t,{data:p}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(n.h2,{id:"where-to-use",children:"Where to use"}),"\n",(0,r.jsxs)(n.p,{children:["In most cases, you would want to use margin props instead of ",(0,r.jsx)(n.code,{children:"Space"})," when working with Mantine components:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Text, Space } from '@mantine/core';\n\n// Space is not required as the same can be achieved with `mt` prop\nfunction Demo() {\n  return (\n    <>\n      <Text>First line</Text>\n      <Text mt=\"md\">Second line</Text>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["But when you work with regular HTML elements you do not have access to ",(0,r.jsx)(n.code,{children:"theme.spacing"})," and you may want to use\n",(0,r.jsx)(n.code,{children:"Space"})," component to skip direct theme subscription:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Space } from '@mantine/core';\n\n// Margin props are not available on div,\n// use Space to add spacing from theme\nfunction Demo() {\n  return (\n    <>\n      <div>First line</div>\n      <Space h=\"md\" />\n      <div>Second line</div>\n    </>\n  );\n}\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(x,{...e})})}},10904:function(e,n,t){"use strict";t.d(n,{T:function(){return s}});var r=t(27378),o=t(96739),i=t(56589),c=t(20410);let a={},s=(0,c.d)((e,n)=>{let{w:t,h:c,miw:s,mih:l,...p}=(0,o.w)("Space",a,e);return r.createElement(i.x,{ref:n,...p,w:t,miw:s??t,h:c,mih:l??c})});s.displayName="@mantine/core/Space"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=75601)}),_N_E=e.O()}]);
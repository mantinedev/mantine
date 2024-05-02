(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90061],{21597:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/space",function(){return t(79651)}])},79651:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(52322),i=t(45392),Text=t(8582),o=t(41185);let c=`
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
`,s={type:"configurator",component:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Text.x,{children:"First line"}),(0,r.jsx)(o.T,{...e}),(0,r.jsx)(Text.x,{children:"Second line"})]})},code:c,controls:[{prop:"h",type:"size",initialValue:"md",libraryValue:"__"}]},a=`
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
`,d={type:"configurator",component:function(e){return(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(Text.x,{children:"First part"}),(0,r.jsx)(o.T,{...e}),(0,r.jsx)(Text.x,{children:"Second part"})]})},code:a,controls:[{prop:"w",type:"size",initialValue:"md",libraryValue:"__"}]};var l=t(79016),p=t(33638);let u=(0,l.A)(p.us.Space);function x(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"Space"})," component to add horizontal or vertical spacing between elements:"]}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"where-to-use",children:"Where to use"}),"\n",(0,r.jsxs)(n.p,{children:["In most cases, you would want to use margin props instead of ",(0,r.jsx)(n.code,{children:"Space"})," when working with Mantine components:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Space, Text } from '@mantine/core';\n\n// Space is not required as the same can be achieved with `mt` prop\nfunction Demo() {\n  return (\n    <>\n      <Text>First line</Text>\n      <Text mt=\"md\">Second line</Text>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["But when you work with regular HTML elements you do not have access to ",(0,r.jsx)(n.code,{children:"theme.spacing"})," and you may want to use\n",(0,r.jsx)(n.code,{children:"Space"})," component to skip direct theme subscription:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Space } from '@mantine/core';\n\n// Margin props are not available on div,\n// use Space to add spacing from theme\nfunction Demo() {\n  return (\n    <>\n      <div>First line</div>\n      <Space h=\"md\" />\n      <div>Second line</div>\n    </>\n  );\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(x,{...e})})}},41185:function(e,n,t){"use strict";t.d(n,{T:function(){return a}});var r=t(52322);t(2784);var i=t(38483),o=t(28559),c=t(82027);let s={},a=(0,c.d)((e,n)=>{let{w:t,h:c,miw:a,mih:d,...l}=(0,i.w)("Space",s,e);return(0,r.jsx)(o.x,{ref:n,...l,w:t,miw:a??t,h:c,mih:d??c})});a.displayName="@mantine/core/Space"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=21597)}),_N_E=e.O()}]);
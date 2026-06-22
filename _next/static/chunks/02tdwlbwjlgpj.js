(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return i||t(n,Symbol.toStringTag,{value:"Module"}),n}])},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},981377,e=>{"use strict";var t=e.i(44091),i=e.i(391466),n=e.i(275519),r=e.i(232471),a={root:"m_d08caa0"},o=e.i(391398);let s=(0,n.factory)(e=>{let n=(0,t.useProps)("Typography",null,e),{classNames:s,className:l,style:c,styles:p,unstyled:d,attributes:u,...x}=n;return(0,o.jsx)(r.Box,{...(0,i.useStyles)({name:"Typography",classes:a,props:n,className:l,style:c,classNames:s,styles:p,unstyled:d,attributes:u})("root"),...x})});s.classes=a,s.displayName="@mantine/core/Typography",e.s(["Typography",0,s],981377)},418401,e=>{"use strict";var t=e.i(648863),i=e.i(883364),n=e.i(391398);let r={type:"code",code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Text,{size:"xs",children:"Extra small text"}),(0,n.jsx)(i.Text,{size:"sm",children:"Small text"}),(0,n.jsx)(i.Text,{size:"md",children:"Default text"}),(0,n.jsx)(i.Text,{size:"lg",children:"Large text"}),(0,n.jsx)(i.Text,{size:"xl",children:"Extra large text"}),(0,n.jsx)(i.Text,{fw:500,children:"Semibold"}),(0,n.jsx)(i.Text,{fw:700,children:"Bold"}),(0,n.jsx)(i.Text,{fs:"italic",children:"Italic"}),(0,n.jsx)(i.Text,{td:"underline",children:"Underlined"}),(0,n.jsx)(i.Text,{td:"line-through",children:"Strikethrough"}),(0,n.jsx)(i.Text,{c:"dimmed",children:"Dimmed text"}),(0,n.jsx)(i.Text,{c:"blue",children:"Blue text"}),(0,n.jsx)(i.Text,{c:"teal.4",children:"Teal 4 text"}),(0,n.jsx)(i.Text,{tt:"uppercase",children:"Uppercase"}),(0,n.jsx)(i.Text,{tt:"capitalize",children:"capitalized text"}),(0,n.jsx)(i.Text,{ta:"center",children:"Aligned to center"}),(0,n.jsx)(i.Text,{ta:"right",children:"Aligned to right"})]})}};var a=e.i(232471);let o={type:"configurator",component:function(e){return(0,n.jsx)(a.Box,{maw:400,mx:"auto",children:(0,n.jsx)(i.Text,{...e,children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var s=e.i(981377);let l={type:"code",code:`
import { Typography, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <Typography>
        <h3>Line clamp with Typography</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </Typography>
    </Text>
  );
}
`,component:function(){return(0,n.jsx)(i.Text,{lineClamp:3,component:"div",children:(0,n.jsxs)(s.Typography,{children:[(0,n.jsx)("h3",{style:{marginTop:0},children:"Line clamp with Typography"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis."})]})})}},c={type:"configurator",component:function(e){return(0,n.jsx)(i.Text,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient Text"})},code:e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`,centered:!0,controls:e.i(577830).gradientControls};var p=e.i(804052);let d={type:"code",component:function(){return(0,n.jsxs)(p.Title,{order:3,children:["Title in which you want to"," ",(0,n.jsx)(i.Text,{span:!0,c:"blue",inherit:!0,children:"highlight"})," ","something"]})},code:`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`},u={type:"configurator",component:function(e){return(0,n.jsx)(a.Box,{w:300,children:(0,n.jsx)(i.Text,{...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"})})},code:`
import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},x={type:"configurator",component:function(e){return(0,n.jsx)(i.Text,{...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Text>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var m=(0,t.__exportAll)({gradient:()=>c,inherit:()=>d,lineClamp:()=>l,linesConfigurator:()=>o,textWrap:()=>x,truncate:()=>u,usage:()=>r});e.s(["TextDemos",0,m],418401)},744300,e=>{"use strict";var t=e.i(391398),i=e.i(38856),n=e.i(418401);e.i(603441);var r=e.i(62558);e.i(457450);var a=e.i(418026);let o=(0,r.Layout)(a.MDX_DATA.Text);function s(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.useMDXComponents)(),...e.components},{Demo:a,Gradient:o,Polymorphic:s}=r;return a||l("Demo",!0),o||l("Gradient",!0),s||l("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:n.TextDemos.usage}),"\n",(0,t.jsx)(o,{component:"Text"}),"\n",(0,t.jsx)(a,{data:n.TextDemos.gradient}),"\n",(0,t.jsx)(r.h2,{id:"truncate",children:"Truncate"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"truncate"})," prop to add ",(0,t.jsx)(r.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,t.jsx)(a,{data:n.TextDemos.truncate}),"\n",(0,t.jsx)(r.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,t.jsxs)(r.p,{children:["Specify the maximum number of lines with the ",(0,t.jsx)(r.code,{children:"lineClamp"})," prop. This option uses ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,t.jsx)(r.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,t.jsx)(r.code,{children:"padding-bottom"})," cannot be set on the text element:"]}),"\n",(0,t.jsx)(a,{data:n.TextDemos.linesConfigurator}),"\n",(0,t.jsxs)(r.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,t.jsx)(r.a,{href:"/core/typography/",children:"Typography"}),":"]}),"\n",(0,t.jsx)(a,{data:n.TextDemos.lineClamp}),"\n",(0,t.jsx)(r.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,t.jsxs)(r.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not the desired behavior. To force Text to inherit parent\nstyles, set the ",(0,t.jsx)(r.code,{children:"inherit"})," prop. For example, highlight part of ",(0,t.jsx)(r.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,t.jsx)(a,{data:n.TextDemos.inherit}),"\n",(0,t.jsx)(r.h2,{id:"text-wrap",children:"Text wrap"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"textWrap"})," prop to control the ",(0,t.jsx)(r.code,{children:"text-wrap"})," CSS property. For example, ",(0,t.jsx)(r.code,{children:"balance"})," evens out\nline lengths and ",(0,t.jsx)(r.code,{children:"pretty"})," prevents orphaned words on the last line:"]}),"\n",(0,t.jsx)(a,{data:n.TextDemos.textWrap}),"\n",(0,t.jsx)(s,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,t.jsx)(r.h2,{id:"span-prop",children:"span prop"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"span"})," prop as a shorthand for ",(0,t.jsx)(r.code,{children:'component="span"'}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(s,{...e})})}])},933061,(e,t,i)=>{let n="/core/text";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(744300)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
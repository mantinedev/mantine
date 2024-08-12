(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17014],{78484:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return i(90895)}])},90895:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(52322),r=i(45392),a=i(8582);let o={type:"code",code:`
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
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.x,{size:"xs",children:"Extra small text"}),(0,n.jsx)(a.x,{size:"sm",children:"Small text"}),(0,n.jsx)(a.x,{size:"md",children:"Default text"}),(0,n.jsx)(a.x,{size:"lg",children:"Large text"}),(0,n.jsx)(a.x,{size:"xl",children:"Extra large text"}),(0,n.jsx)(a.x,{fw:500,children:"Semibold"}),(0,n.jsx)(a.x,{fw:700,children:"Bold"}),(0,n.jsx)(a.x,{fs:"italic",children:"Italic"}),(0,n.jsx)(a.x,{td:"underline",children:"Underlined"}),(0,n.jsx)(a.x,{td:"line-through",children:"Strikethrough"}),(0,n.jsx)(a.x,{c:"dimmed",children:"Dimmed text"}),(0,n.jsx)(a.x,{c:"blue",children:"Blue text"}),(0,n.jsx)(a.x,{c:"teal.4",children:"Teal 4 text"}),(0,n.jsx)(a.x,{tt:"uppercase",children:"Uppercase"}),(0,n.jsx)(a.x,{tt:"capitalize",children:"capitalized text"}),(0,n.jsx)(a.x,{ta:"center",children:"Aligned to center"}),(0,n.jsx)(a.x,{ta:"right",children:"Aligned to right"})]})}},s={type:"configurator",component:function(e){return(0,n.jsx)(a.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient Text"})},code:e=>`
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
`,centered:!0,controls:i(63048).P};var l=i(28559);let c={type:"configurator",component:function(e){return(0,n.jsx)(l.x,{w:300,children:(0,n.jsx)(a.x,{...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"})})},code:`
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
`,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},d={type:"configurator",component:function(e){return(0,n.jsx)(l.x,{maw:400,mx:"auto",children:(0,n.jsx)(a.x,{...e,children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var p=i(27072);let u={type:"code",code:`
import { TypographyStylesProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
`,component:function(){return(0,n.jsx)(a.x,{lineClamp:3,component:"div",children:(0,n.jsxs)(p.l,{children:[(0,n.jsx)("h3",{style:{marginTop:0},children:"Line clamp with TypographyStylesProvider"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis."})]})})}};var x=i(94120);let m={type:"code",component:function(){return(0,n.jsxs)(x.D,{order:3,children:["Title in which you want to"," ",(0,n.jsx)(a.x,{span:!0,c:"blue",inherit:!0,children:"highlight"})," ","something"]})},code:`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`};var h=i(25071),T=i(15019);let g=(0,h.A)(T.us.Text);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:i,Gradient:a,Polymorphic:l}=t;return i||j("Demo",!0),a||j("Gradient",!0),l||j("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:o}),"\n",(0,n.jsx)(a,{component:"Text"}),"\n",(0,n.jsx)(i,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"truncate"})," prop to add ",(0,n.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,n.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,n.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,n.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,n.jsx)(i,{data:d}),"\n",(0,n.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,n.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,n.jsx)(i,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,n.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,n.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,n.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,n.jsx)(i,{data:m}),"\n",(0,n.jsx)(l,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,n.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,n.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,{...e,children:(0,n.jsx)(f,{...e})})}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63048:function(e,t,i){"use strict";i.d(t,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},27072:function(e,t,i){"use strict";i.d(t,{l:function(){return d}});var n=i(52322);i(2784);var r=i(38483),a=i(46690),o=i(28559),s=i(82027),l={root:"m_d6493fad"};let c={},d=(0,s.d5)((e,t)=>{let i=(0,r.w)("TypographyStylesProvider",c,e),{classNames:s,className:d,style:p,styles:u,unstyled:x,...m}=i,h=(0,a.y)({name:"TypographyStylesProvider",classes:l,props:i,className:d,style:p,classNames:s,styles:u,unstyled:x});return(0,n.jsx)(o.x,{ref:t,...h("root"),...m})});d.classes=l,d.displayName="@mantine/core/TypographyStylesProvider"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=78484)}),_N_E=e.O()}]);
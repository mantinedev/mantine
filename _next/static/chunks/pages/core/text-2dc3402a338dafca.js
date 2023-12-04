(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7014],{19437:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return n(91484)}])},91484:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(24246),r=n(71670),a=n(3916),o=n(30289),l=n(27378),Text=n(26569);let s=`
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
`,c={type:"code",code:s,component:function(){return l.createElement(l.Fragment,null,l.createElement(Text.x,{size:"xs"},"Extra small text"),l.createElement(Text.x,{size:"sm"},"Small text"),l.createElement(Text.x,{size:"md"},"Default text"),l.createElement(Text.x,{size:"lg"},"Large text"),l.createElement(Text.x,{size:"xl"},"Extra large text"),l.createElement(Text.x,{fw:500},"Semibold"),l.createElement(Text.x,{fw:700},"Bold"),l.createElement(Text.x,{fs:"italic"},"Italic"),l.createElement(Text.x,{td:"underline"},"Underlined"),l.createElement(Text.x,{td:"line-through"},"Strikethrough"),l.createElement(Text.x,{c:"dimmed"},"Dimmed text"),l.createElement(Text.x,{c:"blue"},"Blue text"),l.createElement(Text.x,{c:"teal.4"},"Teal 4 text"),l.createElement(Text.x,{tt:"uppercase"},"Uppercase"),l.createElement(Text.x,{tt:"capitalize"},"capitalized text"),l.createElement(Text.x,{ta:"center"},"Aligned to center"),l.createElement(Text.x,{ta:"right"},"Aligned to right"))}};var p=n(99989);let m={type:"configurator",component:function(e){return l.createElement(Text.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient Text")},code:e=>`
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
`,centered:!0,controls:p.P};var u=n(56589);let d=`
import { Text } from '@mantine/core';

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
`,x={type:"configurator",component:function(e){return l.createElement(u.x,{w:300},l.createElement(Text.x,{...e},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"))},code:d,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},h=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,T={type:"configurator",component:function(e){return l.createElement(u.x,{maw:400,mx:"auto"},l.createElement(Text.x,{...e},"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."))},code:h,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var g=n(94993);let f=`
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
`,y={type:"code",code:f,component:function(){return l.createElement(Text.x,{lineClamp:3,component:"div"},l.createElement(g.l,null,l.createElement("h3",{style:{marginTop:0}},"Line clamp with TypographyStylesProvider"),l.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")))}};var b=n(57847);let w=`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`,E={type:"code",component:function(){return l.createElement(b.D,{order:3},"Title in which you want to"," ",l.createElement(Text.x,{span:!0,c:"blue",inherit:!0},"highlight")," ","something")},code:w},v=(0,a.A)(o.us.Text);function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n,Gradient:a,Polymorphic:o}=t;return n||_("Demo",!0),a||_("Gradient",!0),o||_("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(a,{component:"Text"}),"\n",(0,i.jsx)(n,{data:m}),"\n",(0,i.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"truncate"})," prop to add ",(0,i.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,i.jsx)(n,{data:x}),"\n",(0,i.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,i.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,i.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,i.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,i.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,i.jsx)(n,{data:T}),"\n",(0,i.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,i.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,i.jsx)(n,{data:y}),"\n",(0,i.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,i.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,i.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,i.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,i.jsx)(n,{data:E}),"\n",(0,i.jsx)(o,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,i.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,i.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(v,{...e,children:(0,i.jsx)(j,{...e})})}function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99989:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});let i=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},94993:function(e,t,n){"use strict";n.d(t,{l:function(){return p}});var i=n(27378),r=n(96739),a=n(6231),o=n(56589),l=n(20410),s={root:"m-d6493fad"};let c={},p=(0,l.d)((e,t)=>{let n=(0,r.w)("TypographyStylesProvider",c,e),{classNames:l,className:p,style:m,styles:u,unstyled:d,...x}=n,h=(0,a.y)({name:"TypographyStylesProvider",classes:s,props:n,className:p,style:m,classNames:l,styles:u,unstyled:d});return i.createElement(o.x,{ref:t,...h("root"),...x})});p.classes=s,p.displayName="@mantine/core/TypographyStylesProvider"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=19437)}),_N_E=e.O()}]);
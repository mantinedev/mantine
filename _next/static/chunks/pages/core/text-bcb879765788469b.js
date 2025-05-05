(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33845],{28321:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return i(73951)}])},73951:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>T});var n=i(31085),r=i(71184),a=i(93065);let s={type:"code",code:`
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
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.E,{size:"xs",children:"Extra small text"}),(0,n.jsx)(a.E,{size:"sm",children:"Small text"}),(0,n.jsx)(a.E,{size:"md",children:"Default text"}),(0,n.jsx)(a.E,{size:"lg",children:"Large text"}),(0,n.jsx)(a.E,{size:"xl",children:"Extra large text"}),(0,n.jsx)(a.E,{fw:500,children:"Semibold"}),(0,n.jsx)(a.E,{fw:700,children:"Bold"}),(0,n.jsx)(a.E,{fs:"italic",children:"Italic"}),(0,n.jsx)(a.E,{td:"underline",children:"Underlined"}),(0,n.jsx)(a.E,{td:"line-through",children:"Strikethrough"}),(0,n.jsx)(a.E,{c:"dimmed",children:"Dimmed text"}),(0,n.jsx)(a.E,{c:"blue",children:"Blue text"}),(0,n.jsx)(a.E,{c:"teal.4",children:"Teal 4 text"}),(0,n.jsx)(a.E,{tt:"uppercase",children:"Uppercase"}),(0,n.jsx)(a.E,{tt:"capitalize",children:"capitalized text"}),(0,n.jsx)(a.E,{ta:"center",children:"Aligned to center"}),(0,n.jsx)(a.E,{ta:"right",children:"Aligned to right"})]})}},o={type:"configurator",component:function(e){return(0,n.jsx)(a.E,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient Text"})},code:e=>`
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
`,centered:!0,controls:i(61866).n};var l=i(34056);let d={type:"configurator",component:function(e){return(0,n.jsx)(l.a,{w:300,children:(0,n.jsx)(a.E,{...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"})})},code:`
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
`,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},c={type:"configurator",component:function(e){return(0,n.jsx)(l.a,{maw:400,mx:"auto",children:(0,n.jsx)(a.E,{...e,children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var p=i(9355);let h={type:"code",code:`
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
`,component:function(){return(0,n.jsx)(a.E,{lineClamp:3,component:"div",children:(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("h3",{style:{marginTop:0},children:"Line clamp with TypographyStylesProvider"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis."})]})})}};var u=i(61195);let m={type:"code",component:function(){return(0,n.jsxs)(u.h,{order:3,children:["Title in which you want to"," ",(0,n.jsx)(a.E,{span:!0,c:"blue",inherit:!0,children:"highlight"})," ","something"]})},code:`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`};var x=i(18675),g=i(20017);let y=(0,x.P)(g.XZ.Text);function v(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:i,Gradient:a,Polymorphic:l}=t;return i||f("Demo",!0),a||f("Gradient",!0),l||f("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:s}),"\n",(0,n.jsx)(a,{component:"Text"}),"\n",(0,n.jsx)(i,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"truncate"})," prop to add ",(0,n.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,n.jsx)(i,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,n.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,n.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,n.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,n.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,n.jsx)(i,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,n.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,n.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,n.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,n.jsx)(i,{data:m}),"\n",(0,n.jsx)(l,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,n.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,n.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,{...e,children:(0,n.jsx)(v,{...e})})}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n=(0,i(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},61866:(e,t,i)=>{"use strict";i.d(t,{n:()=>n});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},9355:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var n=i(31085);i(14041);var r=i(29686),a=i(69564),s=i(34056),o=i(6754),l={root:"m_d6493fad"};let d={},c=(0,o.P9)((e,t)=>{let i=(0,r.Y)("TypographyStylesProvider",d,e),{classNames:o,className:c,style:p,styles:h,unstyled:u,...m}=i,x=(0,a.I)({name:"TypographyStylesProvider",classes:l,props:i,className:c,style:p,classNames:o,styles:h,unstyled:u});return(0,n.jsx)(s.a,{ref:t,...x("root"),...m})});c.classes=l,c.displayName="@mantine/core/TypographyStylesProvider"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(28321)),_N_E=e.O()}]);
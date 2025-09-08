(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55481],{1798:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},3229:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>G});var n=r(6029),t=r(16285),l=r(57414),c=r(61087);let i={type:"code",component:function(){return(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{color:"ocean-blue",children:"Ocean blue button"}),(0,n.jsx)(c.$,{color:"bright-pink",variant:"filled",children:"Bright pink button"})]})},centered:!0,code:`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </MantineProvider>
  );
}
`};var a=r(85138),s=r(50644);let d={type:"code",component:function(){return(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{color:"bright-pink",children:"Primary button"}),(0,n.jsx)(c.$,{color:"blue",children:"Blue button"})]})},centered:!0,code:`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'bright-pink',
  colors: {
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`};var h=r(55729),u=r(55377),p=r(10705);let m={type:"configurator",component:function(e){let[o,r]=(0,h.useState)(void 0),{colorScheme:t}=(0,u.C)();return(0,h.useEffect)(()=>{r(t)},[t]),(0,n.jsx)("div",{id:"primary-color-demo-root","data-mantine-color-scheme":o,children:(0,n.jsx)(p.y,{cssVariablesSelector:"#primary-color-demo-root",getRootElement:()=>document.createElement("div"),theme:{primaryShade:e.primaryShade},children:(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{children:"Filled"}),(0,n.jsx)(c.$,{variant:"light",children:"Light"}),(0,n.jsx)(c.$,{variant:"outline",children:"Outline"})]})})})},code:e=>`
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${e.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`,centered:!0,controls:[{type:"number",prop:"primaryShade",initialValue:6,libraryValue:"__none__",min:0,max:9}]};var x=r(16877),j=r(45208);let v={type:"configurator",component:function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j.E,{c:`blue.${e.index}`,children:["Text with blue.",e.index," color"]}),(0,n.jsx)(c.$,{color:`cyan.${e.index}`,mt:"sm",children:"Button"})]})},code:e=>`
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${e.index}">Text with blue.${e.index} color</Text>
      <Button color="cyan.${e.index}">Button</Button>
    </>
  );
}
`,controls:[{type:"number",prop:"index",initialValue:6,libraryValue:"__none__",min:0,max:9}]},g={type:"code",component:function(){return(0,n.jsx)(c.$,{color:"#C3FF36",c:"black",children:"Button with color and c props"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`};var f=r(67658),y=r(20888),b=r(89238),k=r(49643),C=r(17976),w=r(70151),B=r(70304),M=r(78702),T=r(39820),D=r.n(T);function F(e){let{group:o}=e,r=(0,k.xd)(),t=r.colors[o],[l,c]=(0,h.useState)({color:t[6],index:6}),i=(0,M.i)({timeout:500}),a=t.map((e,o)=>(0,n.jsx)(C.N,{"aria-label":"Copy color value",className:D().secondarySwatch,onMouseEnter:()=>c({color:e,index:o}),onClick:()=>i.copy(e),style:{background:e,color:(0,w.w)({color:e,theme:{...r,luminanceThreshold:.25},autoContrast:!0})}},e));return(0,n.jsx)(B.m,{color:i.copied?"teal.8":void 0,label:i.copied?"Copied!":"Hover colors for preview, click to copy HEX value",multiline:!0,maw:190,position:"top-start",children:(0,n.jsx)("div",{className:D().root,onMouseLeave:()=>c({color:t[6],index:6}),children:(0,n.jsxs)("div",{className:D().inner,children:[(0,n.jsxs)(C.N,{className:D().primarySwatch,onClick:()=>i.copy(l.color),style:{background:l.color,color:(0,w.w)({color:l.color,theme:r,autoContrast:!0})},children:[(0,n.jsx)(j.E,{className:D().name,children:o}),(0,n.jsx)("div",{className:D().colorIndex,children:l.index}),(0,n.jsx)("div",{className:D().colorValue,children:l.color})]}),(0,n.jsx)("div",{className:D().swatches,children:a})]})})})}function _(){let e=Object.keys(y.S.colors).map(e=>(0,n.jsx)(F,{group:e},e));return(0,n.jsx)(b.r,{type:"container",cols:{base:1,"440px":2,"760px":3},children:e})}var E=r(38547),A=r(5262);let S=(0,E.P)(A.XZ.Colors);function P(e){let o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Demo:r,InstallScript:l}=o;return r||N("Demo",!0),l||N("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"colors",children:"Colors"}),"\n",(0,n.jsxs)(o.p,{children:["Mantine uses ",(0,n.jsx)(o.a,{href:"https://yeun.github.io/open-color/",children:"open-color"})," in default theme with some additions.\nEach color has 10 shades."]}),"\n",(0,n.jsxs)(o.p,{children:["Colors are exposed on the ",(0,n.jsx)(o.a,{href:"/theming/theme-object",children:"theme object"})," as an array of strings,\nyou can access color shade by color name and index (0-9), colors with larger index are darker:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useMantineTheme } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n\n  return (\n    <div\n      style={{\n        backgroundColor: theme.colors.blue[1],\n        color: theme.colors.blue[9],\n      }}\n    >\n      This is a blue theme\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors are also exposed as ",(0,n.jsx)(o.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-scss",children:".demo {\n  color: var(--mantine-color-red-5);\n  background: var(--mantine-color-grape-9);\n  border: 1px solid var(--mantine-color-blue-1);\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"adding-extra-colors",children:"Adding extra colors"}),"\n",(0,n.jsxs)(o.p,{children:["You can add any number of extra colors to ",(0,n.jsx)(o.code,{children:"theme.colors"})," object.\nThis will allow you to use them in all components that support ",(0,n.jsx)(o.code,{children:"color"})," prop, for example\n",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(o.a,{href:"/core/switch",children:"Switch"}),"."]}),"\n",(0,n.jsx)(r,{data:i}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"10 shades per color"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors override must include ",(0,n.jsx)(o.strong,{children:"at least 10 shades per color"}),". Otherwise, you will get a TypeScript error\nand some variants will not have proper colors. If you only have one color value, you can either\npick the remaining colors manually or use the ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator tool"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["You can add more than 10 shades per color: these values will not be used by Mantine components with the default colors resolver,\nbut you can still reference them by index, for example, ",(0,n.jsx)(o.code,{children:'color="blue.11"'}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"virtual-colors",children:"Virtual colors"}),"\n",(0,n.jsxs)(o.p,{children:["Virtual color is a special color which values should be different for light and dark color schemes.\nTo define a virtual color, use ",(0,n.jsx)(o.code,{children:"virtualColor"})," function which accepts an object with the following\nproperties as a single argument:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"name"})," – color name, must be the same as the key in ",(0,n.jsx)(o.code,{children:"theme.colors"})," object"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"light"})," – a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object for light color scheme"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"dark"})," – a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object for dark color scheme"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["To see the demo in action, switch between light and dark color schemes (",(0,n.jsx)(o.code,{children:"Ctrl + J"}),"):"]}),"\n",(0,n.jsx)(r,{data:a.O}),"\n",(0,n.jsx)(o.h2,{id:"colorstuple",children:"colorsTuple"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"colorsTuple"})," function to:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Use single color as the same color for all shades"}),"\n",(0,n.jsx)(o.li,{children:"Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { colorsTuple, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    custom: colorsTuple('#FFC0CB'),\n    dynamic: colorsTuple(\n      Array.from({ length: 10 }, (_, index) => '#FFC0CB')\n    ),\n  },\n});\n"})}),"\n",(0,n.jsx)(o.h2,{id:"supported-color-formats",children:"Supported color formats"}),"\n",(0,n.jsxs)(o.p,{children:["You can use the following color formats in ",(0,n.jsx)(o.code,{children:"theme.colors"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["HEX: ",(0,n.jsx)(o.code,{children:"#fff"}),", ",(0,n.jsx)(o.code,{children:"#ffffff"})]}),"\n",(0,n.jsxs)(o.li,{children:["RGB: ",(0,n.jsx)(o.code,{children:"rgb(255, 255, 255)"}),", ",(0,n.jsx)(o.code,{children:"rgba(255, 255, 255, 0.5)"})]}),"\n",(0,n.jsxs)(o.li,{children:["HSL: ",(0,n.jsx)(o.code,{children:"hsl(0, 0%, 100%)"}),", ",(0,n.jsx)(o.code,{children:"hsla(0, 0%, 100%, 0.5)"})]}),"\n",(0,n.jsxs)(o.li,{children:["OKLCH: ",(0,n.jsx)(o.code,{children:"oklch(96.27% 0.0217 238.66)"}),", ",(0,n.jsx)(o.code,{children:"oklch(96.27% 0.0217 238.66 / 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Example of adding oklch color to theme:"}),"\n",(0,n.jsx)(r,{data:s.y}),"\n",(0,n.jsx)(o.h2,{id:"primarycolor",children:"primaryColor"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryColor"})," is a key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", it is used:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["As a default value for most of the components that support ",(0,n.jsx)(o.code,{children:"color"})," prop"]}),"\n",(0,n.jsx)(o.li,{children:"To set default focus ring outline color"}),"\n"]}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["CSS color values at ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})]})}),"\n",(0,n.jsxs)(o.p,{children:["Value of ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})," must be a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object. For example, ",(0,n.jsx)(o.code,{children:"blue"}),", ",(0,n.jsx)(o.code,{children:"orange"})," or ",(0,n.jsx)(o.code,{children:"green"}),".\nYou cannot assign CSS color values, for example, the following code will throw an error during theme merging:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        primaryColor: '#CEFEDC', // This will throw an error\n      }}\n    >\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"primaryshade",children:"primaryShade"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryShade"})," is a number from 0 to 9. It determines which shade will be used for the components that have ",(0,n.jsx)(o.code,{children:"color"})," prop."]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(o.p,{children:"You can also customize primary shade for dark and light color schemes separately:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={{ primaryShade: { light: 6, dark: 8 } }}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"color-prop",children:"Color prop"}),"\n",(0,n.jsxs)(o.p,{children:["Components that support changing their color have ",(0,n.jsx)(o.code,{children:"color"})," prop. This prop supports the following values:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", for example, ",(0,n.jsx)(o.code,{children:"blue"})," or ",(0,n.jsx)(o.code,{children:"green"})]}),"\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," with color index, for example, ",(0,n.jsx)(o.code,{children:"blue.5"})," or ",(0,n.jsx)(o.code,{children:"green.9"})]}),"\n",(0,n.jsxs)(o.li,{children:["CSS color value, for example, ",(0,n.jsx)(o.code,{children:"#fff"})," or ",(0,n.jsx)(o.code,{children:"rgba(0, 0, 0, 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:x.h}),"\n",(0,n.jsx)(o.h2,{id:"colors-index-reference",children:"Colors index reference"}),"\n",(0,n.jsxs)(o.p,{children:["You can reference colors by index in ",(0,n.jsx)(o.code,{children:"color"})," prop and ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style props"}),", for example ",(0,n.jsx)(o.code,{children:"c"})," prop:"]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(o.h2,{id:"difference-between-color-and-c-props",children:"Difference between color and c props"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"color"})," prop is used to control multiple CSS properties of the component. These properties can vary across different components,\nbut usually ",(0,n.jsx)(o.code,{children:"color"})," prop controls ",(0,n.jsx)(o.code,{children:"background"}),", ",(0,n.jsx)(o.code,{children:"color"})," and ",(0,n.jsx)(o.code,{children:"border-color"})," CSS properties. For example,\nwhen you set ",(0,n.jsx)(o.code,{children:'color="#C3FF36"'})," on ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," component (with ",(0,n.jsx)(o.code,{children:'variant="filled"'}),"), it will set the following CSS properties:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," to ",(0,n.jsx)(o.code,{children:"#C3FF36"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," when button is hovered to ",(0,n.jsx)(o.code,{children:"#B0E631"})," (",(0,n.jsx)(o.code,{children:"#C3FF36"})," darkened by 10%)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," to ",(0,n.jsx)(o.code,{children:"var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"border-color"})," to ",(0,n.jsx)(o.code,{children:"transparent"})]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"c"})," is a ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," – it is responsible for setting a single CSS property ",(0,n.jsx)(o.code,{children:"color"})," (color of the text).\nYou can combine both props to achieve better contrast between text and background. In the following example:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," prop sets all ",(0,n.jsx)(o.code,{children:"background: #C3FF36"})," and ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"c"})," prop overrides color styles to ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-black)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:g}),"\n",(0,n.jsx)(o.h2,{id:"colors-variant-resolver",children:"Colors variant resolver"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," is a function that is used to determine which colors will be used\nin different variants in the following components: ",(0,n.jsx)(o.a,{href:"/core/alert",children:"Alert"}),", ",(0,n.jsx)(o.a,{href:"/core/avatar",children:"Avatar"}),", ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(o.a,{href:"/core/action-icon",children:"ActionIcon"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"It accepts an object argument with the following properties:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorsResolverInput {\n  /** `color` prop passed to component */\n  color: MantineColor | undefined;\n\n  /** `variant` prop passed to component */\n  variant: string;\n\n  /** `gradient` prop passed to component, used only for gradient variant by default */\n  gradient?: MantineGradient;\n\n  /** Theme object */\n  theme: MantineTheme;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," must return an object with the following properties:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorResolverResult {\n  background: string;\n  hover: string;\n  color: string;\n  border: string;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," to customize colors handling by default variants\nor to add new variants support:"]}),"\n",(0,n.jsx)(r,{data:f._}),"\n",(0,n.jsx)(o.h2,{id:"colors-generation",children:"Colors generation"}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator"})," to generate 10 shades of color based on a single value\nor install ",(0,n.jsx)(o.code,{children:"@mantine/colors-generator"})," package to generate dynamic colors in your application:"]}),"\n",(0,n.jsx)(l,{packages:"chroma-js @mantine/colors-generator"}),"\n",(0,n.jsxs)(o.p,{children:["The package exports ",(0,n.jsx)(o.code,{children:"generateColors"})," function that accepts a color value and returns an array of 10 shades.\nNote that ",(0,n.jsx)(o.code,{children:"generateColors"})," function works best with darker colors (blue, violet, red) and may produce\ncolors with poor contrast for lighter colors (yellow, teal, orange). Usually, it is better to generate\ncolors in advance to avoid contrast issues."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"default-colors",children:"Default colors"}),"\n",(0,n.jsx)(_,{}),"\n",(0,n.jsx)(o.h2,{id:"add-custom-colors-types",children:"Add custom colors types"}),"\n",(0,n.jsx)(o.p,{children:"TypeScript will only autocomplete Mantine's default colors when accessing the theme. To add your custom colors to the MantineColor type, you can use TypeScript module declaration."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"import {\n  DefaultMantineColor,\n  MantineColorsTuple,\n} from '@mantine/core';\n\ntype ExtendedCustomColors =\n  | 'primaryColorName'\n  | 'secondaryColorName'\n  | DefaultMantineColor;\n\ndeclare module '@mantine/core' {\n  export interface MantineThemeColorsOverride {\n    colors: Record<ExtendedCustomColors, MantineColorsTuple>;\n  }\n}\n"})})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(S,{...e,children:(0,n.jsx)(P,{...e})})}function N(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6620:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9207:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/colors",function(){return r(3229)}])},16877:(e,o,r)=>{"use strict";r.d(o,{h:()=>i});var n=r(6029),t=r(45208),l=r(57414),c=r(61087);let i={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.E,{size:"sm",mb:5,fw:500,children:"Filled variant"}),(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{color:"cyan",children:"Theme color"}),(0,n.jsx)(c.$,{color:"#1D72FE",children:"Hex color"})]}),(0,n.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Light variant"}),(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{variant:"light",color:"cyan",children:"Theme color"}),(0,n.jsx)(c.$,{variant:"light",color:"#1D72FE",children:"Hex color"})]}),(0,n.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Outline variant"}),(0,n.jsxs)(l.Y,{children:[(0,n.jsx)(c.$,{variant:"outline",color:"cyan",children:"Theme color"}),(0,n.jsx)(c.$,{variant:"outline",color:"#1D72FE",children:"Hex color"})]})]})},defaultExpanded:!1,code:`
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`}},24583:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},39820:e=>{e.exports={root:"ColorsGroup_root__MPdre",inner:"ColorsGroup_inner__LUKtz",primarySwatch:"ColorsGroup_primarySwatch__B2_G1",swatches:"ColorsGroup_swatches__Z8Pr7",secondarySwatch:"ColorsGroup_secondarySwatch__8O4Xi",name:"ColorsGroup_name__DlmNt",colorIndex:"ColorsGroup_colorIndex__dl3CI",colorValue:"ColorsGroup_colorValue__Uqn2O"}},41949:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},50644:(e,o,r)=>{"use strict";r.d(o,{y:()=>c});var n=r(6029),t=r(57414),l=r(61087);let c={type:"code",component:function(){return(0,n.jsxs)(t.Y,{children:[(0,n.jsx)(l.$,{color:"oklch-blue",children:"Filled"}),(0,n.jsx)(l.$,{color:"oklch-blue",variant:"outline",children:"Outline"}),(0,n.jsx)(l.$,{color:"oklch-blue",variant:"light",children:"Light"})]})},code:`
import { MantineProvider, createTheme, Group, Button } from '@mantine/core';

const theme = createTheme({
  colors: {
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="oklch-blue">Filled</Button>
        <Button color="oklch-blue" variant="outline">
          Outline
        </Button>
        <Button color="oklch-blue" variant="light">
          Light
        </Button>
      </Group>
    </MantineProvider>
  );
}
`,centered:!0}},65433:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},67658:(e,o,r)=>{"use strict";r.d(o,{_:()=>u});var n=r(6029),t=r(44211),l=r(20931),c=r(2205),i=r(54475),a=r(49643),s=r(57414),d=r(61087);let h=e=>{let o=(0,t.v)(e),r=(0,l.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return r.isThemeColor&&"lime"===r.color&&"filled"===e.variant?{...o,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,c.B)(r.value,.1),hover:(0,c.B)(r.value,.15),border:`1px solid ${r.value}`,color:(0,i.e)(r.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:o},u={type:"code",component:function(){return(0,n.jsx)(a.nW,{theme:{variantColorResolver:h},children:(0,n.jsxs)(s.Y,{children:[(0,n.jsx)(d.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,n.jsx)(d.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,n.jsx)(d.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`}},84276:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},85138:(e,o,r)=>{"use strict";r.d(o,{O:()=>l});var n=r(6029),t=r(76320);let l={type:"code",component:function(){return(0,n.jsx)(t.a,{bg:"virtual",c:"white",p:"md",fw:700,children:"This box has virtual background color, it is pink in dark mode and cyan in light mode"})},code:[{fileName:"App.tsx",code:`
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.tsx",code:`
import { Box } from '@mantine/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`,language:"tsx"}]}},88992:(e,o,r)=>{"use strict";r.d(o,{A:()=>n});let n=(0,r(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=9207)),_N_E=e.O()}]);
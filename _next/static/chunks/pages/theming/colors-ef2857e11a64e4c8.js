(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98989],{26058:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/colors",function(){return r(38019)}])},38019:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return B}});var n=r(52322),t=r(45392),l=r(93010),c=r(17115);let i={type:"code",component:function(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{color:"ocean-blue",children:"Ocean blue button"}),(0,n.jsx)(c.z,{color:"bright-pink",variant:"filled",children:"Bright pink button"})]})},centered:!0,code:`
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
`};var s=r(82877),a=r(81500);let d={type:"code",component:function(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{color:"bright-pink",children:"Primary button"}),(0,n.jsx)(c.z,{color:"blue",children:"Blue button"})]})},centered:!0,code:`
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

`};var h=r(2784),u=r(58092),m=r(15759);let p={type:"configurator",component:function(e){let[o,r]=(0,h.useState)(void 0),{colorScheme:t}=(0,u.X)();return(0,h.useEffect)(()=>{r(t)},[t]),(0,n.jsx)("div",{id:"primary-color-demo-root","data-mantine-color-scheme":o,children:(0,n.jsx)(m.M,{cssVariablesSelector:"#primary-color-demo-root",getRootElement:()=>document.createElement("div"),theme:{primaryShade:e.primaryShade},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{children:"Filled"}),(0,n.jsx)(c.z,{variant:"light",children:"Light"}),(0,n.jsx)(c.z,{variant:"outline",children:"Outline"})]})})})},code:e=>`
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
`,centered:!0,controls:[{type:"number",prop:"primaryShade",initialValue:6,libraryValue:"__none__",min:0,max:9}]};var x=r(56142),j=r(8582);let f={type:"configurator",component:function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j.x,{c:`blue.${e.index}`,children:["Text with blue.",e.index," color"]}),(0,n.jsx)(c.z,{color:`cyan.${e.index}`,mt:"sm",children:"Button"})]})},code:e=>`
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${e.index}">Text with blue.${e.index} color</Text>
      <Button color="cyan.${e.index}">Button</Button>
    </>
  );
}
`,controls:[{type:"number",prop:"index",initialValue:6,libraryValue:"__none__",min:0,max:9}]},v={type:"code",component:function(){return(0,n.jsx)(c.z,{color:"#C3FF36",c:"black",children:"Button with color and c props"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`};var g=r(2498),b=r(42960),y=r(25071),C=r(15019);let k=(0,y.A)(C.us.Colors);function w(e){let o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Demo:r,InstallScript:l}=o;return r||T("Demo",!0),l||T("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"colors",children:"Colors"}),"\n",(0,n.jsxs)(o.p,{children:["Mantine uses ",(0,n.jsx)(o.a,{href:"https://yeun.github.io/open-color/",children:"open-color"})," in default theme with some additions.\nEach color has 10 shades."]}),"\n",(0,n.jsxs)(o.p,{children:["Colors are exposed on the ",(0,n.jsx)(o.a,{href:"/theming/theme-object",children:"theme object"})," as an array of strings,\nyou can access color shade by color name and index (0-9), colors with larger index are darker:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useMantineTheme } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n\n  return (\n    <div\n      style={{\n        backgroundColor: theme.colors.blue[1],\n        color: theme.colors.blue[9],\n      }}\n    >\n      This is a blue theme\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors are also exposed as ",(0,n.jsx)(o.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-scss",children:".demo {\n  color: var(--mantine-color-red-5);\n  background: var(--mantine-color-grape-9);\n  border: rem(1px) solid var(--mantine-color-blue-1);\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"adding-extra-colors",children:"Adding extra colors"}),"\n",(0,n.jsxs)(o.p,{children:["You can add any number of extra colors to ",(0,n.jsx)(o.code,{children:"theme.colors"})," object.\nThis will allow you to use them in all components that support ",(0,n.jsx)(o.code,{children:"color"})," prop, for example\n",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(o.a,{href:"/core/switch",children:"Switch"}),"."]}),"\n",(0,n.jsx)(r,{data:i}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"10 shades per color"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors override must include ",(0,n.jsx)(o.strong,{children:"at least 10 shades per color"}),". Otherwise, you will get a TypeScript error\nand some variants will not have proper colors. If you only have one color value, you can either\npick the remaining colors manually or use the ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator tool"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["You can add more than 10 shades per color: these values will not be used by Mantine components with the default colors resolver,\nbut you can still reference them by index, for example, ",(0,n.jsx)(o.code,{children:'color="blue.11"'}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"virtual-colors",children:"Virtual colors"}),"\n",(0,n.jsxs)(o.p,{children:["Virtual color is a special color which values should be different for light and dark color schemes.\nTo define a virtual color, use ",(0,n.jsx)(o.code,{children:"virtualColor"})," function which accepts an object with the following\nproperties as a single argument:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"name"})," – color name, must be the same as the key in ",(0,n.jsx)(o.code,{children:"theme.colors"})," object"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"light"})," – a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object for light color scheme"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"dark"})," – a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object for dark color scheme"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["To see the demo in action, switch between light and dark color schemes (",(0,n.jsx)(o.code,{children:"Ctrl + J"}),"):"]}),"\n",(0,n.jsx)(r,{data:s.$}),"\n",(0,n.jsx)(o.h2,{id:"colorstuple",children:"colorsTuple"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"colorsTuple"})," function to:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Use single color as the same color for all shades"}),"\n",(0,n.jsx)(o.li,{children:"Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { colorsTuple, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    custom: colorsTuple('#FFC0CB'),\n    dynamic: colorsTuple(\n      Array.from({ length: 10 }, (_, index) => '#FFC0CB')\n    ),\n  },\n});\n"})}),"\n",(0,n.jsx)(o.h2,{id:"supported-color-formats",children:"Supported color formats"}),"\n",(0,n.jsxs)(o.p,{children:["You can use the following color formats in ",(0,n.jsx)(o.code,{children:"theme.colors"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["HEX: ",(0,n.jsx)(o.code,{children:"#fff"}),", ",(0,n.jsx)(o.code,{children:"#ffffff"})]}),"\n",(0,n.jsxs)(o.li,{children:["RGB: ",(0,n.jsx)(o.code,{children:"rgb(255, 255, 255)"}),", ",(0,n.jsx)(o.code,{children:"rgba(255, 255, 255, 0.5)"})]}),"\n",(0,n.jsxs)(o.li,{children:["HSL: ",(0,n.jsx)(o.code,{children:"hsl(0, 0%, 100%)"}),", ",(0,n.jsx)(o.code,{children:"hsla(0, 0%, 100%, 0.5)"})]}),"\n",(0,n.jsxs)(o.li,{children:["OKLCH: ",(0,n.jsx)(o.code,{children:"oklch(96.27% 0.0217 238.66)"}),", ",(0,n.jsx)(o.code,{children:"oklch(96.27% 0.0217 238.66 / 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Example of adding oklch color to theme:"}),"\n",(0,n.jsx)(r,{data:a.R}),"\n",(0,n.jsx)(o.h2,{id:"primarycolor",children:"primaryColor"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryColor"})," is a key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", it is used:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["As a default value for most of the components that support ",(0,n.jsx)(o.code,{children:"color"})," prop"]}),"\n",(0,n.jsx)(o.li,{children:"To set default focus ring outline color"}),"\n"]}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["CSS color values at ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})]})}),"\n",(0,n.jsxs)(o.p,{children:["Value of ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})," must be a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object. For example, ",(0,n.jsx)(o.code,{children:"blue"}),", ",(0,n.jsx)(o.code,{children:"orange"})," or ",(0,n.jsx)(o.code,{children:"green"}),".\nYou cannot assign CSS color values, for example, the following code will throw an error during theme merging:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        primaryColor: '#CEFEDC', // This will throw an error\n      }}\n    >\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"primaryshade",children:"primaryShade"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryShade"})," is a number from 0 to 9. It determines which shade will be used for the components that have ",(0,n.jsx)(o.code,{children:"color"})," prop."]}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(o.p,{children:"You can also customize primary shade for dark and light color schemes separately:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={{ primaryShade: { light: 6, dark: 8 } }}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"color-prop",children:"Color prop"}),"\n",(0,n.jsxs)(o.p,{children:["Components that support changing their color have ",(0,n.jsx)(o.code,{children:"color"})," prop. This prop supports the following values:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", for example, ",(0,n.jsx)(o.code,{children:"blue"})," or ",(0,n.jsx)(o.code,{children:"green"})]}),"\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," with color index, for example, ",(0,n.jsx)(o.code,{children:"blue.5"})," or ",(0,n.jsx)(o.code,{children:"green.9"})]}),"\n",(0,n.jsxs)(o.li,{children:["CSS color value, for example, ",(0,n.jsx)(o.code,{children:"#fff"})," or ",(0,n.jsx)(o.code,{children:"rgba(0, 0, 0, 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:x.m}),"\n",(0,n.jsx)(o.h2,{id:"colors-index-reference",children:"Colors index reference"}),"\n",(0,n.jsxs)(o.p,{children:["You can reference colors by index in ",(0,n.jsx)(o.code,{children:"color"})," prop and ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style props"}),", for example ",(0,n.jsx)(o.code,{children:"c"})," prop:"]}),"\n",(0,n.jsx)(r,{data:f}),"\n",(0,n.jsx)(o.h2,{id:"difference-between-color-and-c-props",children:"Difference between color and c props"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"color"})," prop is used to control multiple CSS properties of the component. These properties can vary across different components,\nbut usually ",(0,n.jsx)(o.code,{children:"color"})," prop controls ",(0,n.jsx)(o.code,{children:"background"}),", ",(0,n.jsx)(o.code,{children:"color"})," and ",(0,n.jsx)(o.code,{children:"border-color"})," CSS properties. For example,\nwhen you set ",(0,n.jsx)(o.code,{children:'color="#C3FF36"'})," on ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," component (with ",(0,n.jsx)(o.code,{children:'variant="filled"'}),"), it will set the following CSS properties:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," to ",(0,n.jsx)(o.code,{children:"#C3FF36"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," when button is hovered to ",(0,n.jsx)(o.code,{children:"#B0E631"})," (",(0,n.jsx)(o.code,{children:"#C3FF36"})," darkened by 10%)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," to ",(0,n.jsx)(o.code,{children:"var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"border-color"})," to ",(0,n.jsx)(o.code,{children:"transparent"})]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"c"})," is a ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," – it is responsible for setting a single CSS property ",(0,n.jsx)(o.code,{children:"color"})," (color of the text).\nYou can combine both props to achieve better contrast between text and background. In the following example:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," prop sets all ",(0,n.jsx)(o.code,{children:"background: #C3FF36"})," and ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"c"})," prop overrides color styles to ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-black)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(o.h2,{id:"colors-variant-resolver",children:"Colors variant resolver"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," is a function that is used to determine which colors will be used\nin different variants in the following components: ",(0,n.jsx)(o.a,{href:"/core/alert",children:"Alert"}),", ",(0,n.jsx)(o.a,{href:"/core/avatar",children:"Avatar"}),", ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(o.a,{href:"/core/action-icon",children:"ActionIcon"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"It accepts an object argument with the following properties:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorsResolverInput {\n  /** `color` prop passed to component */\n  color: MantineColor | undefined;\n\n  /** `variant` prop passed to component */\n  variant: string;\n\n  /** `gradient` prop passed to component, used only for gradient variant by default */\n  gradient?: MantineGradient;\n\n  /** Theme object */\n  theme: MantineTheme;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," must return an object with the following properties:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorResolverResult {\n  background: string;\n  hover: string;\n  color: string;\n  border: string;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," to customize colors handling by default variants\nor to add new variants support:"]}),"\n",(0,n.jsx)(r,{data:g.D}),"\n",(0,n.jsx)(o.h2,{id:"colors-generation",children:"Colors generation"}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator"})," to generate 10 shades of color based on a single value\nor install ",(0,n.jsx)(o.code,{children:"@mantine/colors-generator"})," package to generate dynamic colors in your application:"]}),"\n",(0,n.jsx)(l,{packages:"chroma-js @mantine/colors-generator"}),"\n",(0,n.jsxs)(o.p,{children:["The package exports ",(0,n.jsx)(o.code,{children:"generateColors"})," function that accepts a color value and returns an array of 10 shades.\nNote that ",(0,n.jsx)(o.code,{children:"generateColors"})," function works best with darker colors (blue, violet, red) and may produce\ncolors with poor contrast for lighter colors (yellow, teal, orange). Usually, it is better to generate\ncolors in advance to avoid contrast issues."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"default-colors",children:"Default colors"}),"\n",(0,n.jsx)(b.a,{}),"\n",(0,n.jsx)(o.h2,{id:"add-custom-colors-types",children:"Add custom colors types"}),"\n",(0,n.jsx)(o.p,{children:"TypeScript will only autocomplete Mantine's default colors when accessing the theme. To add your custom colors to the MantineColor type, you can use TypeScript module declaration."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"import {\n  DefaultMantineColor,\n  MantineColorsTuple,\n} from '@mantine/core';\n\ntype ExtendedCustomColors =\n  | 'primaryColorName'\n  | 'secondaryColorName'\n  | DefaultMantineColor;\n\ndeclare module '@mantine/core' {\n  export interface MantineThemeColorsOverride {\n    colors: Record<ExtendedCustomColors, MantineColorsTuple>;\n  }\n}\n"})})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,{...e,children:(0,n.jsx)(w,{...e})})}function T(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42960:function(e,o,r){"use strict";r.d(o,{I:function(){return d},a:function(){return p}});var n=r(52322),t=r(68755),l=r(27009),c=r(28559),i=r(8582),s=r(3688),a=r.n(s);function d(e){let{group:o}=e,r=(0,t.rZ)().colors[o].map((e,r)=>(0,n.jsxs)("div",{className:a().color,children:[(0,n.jsx)(l.b,{color:e,radius:"md",className:a().swatch}),(0,n.jsxs)(c.x,{mt:7,children:[(0,n.jsxs)(i.x,{size:"xs",className:a().colorName,children:[o," ",r]}),(0,n.jsx)(i.x,{c:"dimmed",size:"xs",tt:"uppercase",mt:2,fz:10,children:e})]})]},e));return(0,n.jsx)("div",{className:a().wrapper,children:(0,n.jsx)("div",{className:a().group,children:r})})}var h=r(87744),u=r(25261),m=r.n(u);function p(){let e=Object.keys(h.t.colors).map(e=>(0,n.jsx)(d,{group:e},e));return(0,n.jsx)("div",{className:m().root,children:e})}},3688:function(e){e.exports={wrapper:"ColorsGroup_wrapper__qcalE",color:"ColorsGroup_color__xbiz2",swatch:"ColorsGroup_swatch__NwSWg",title:"ColorsGroup_title__In8OL",group:"ColorsGroup_group__ESyIH",colorName:"ColorsGroup_colorName__R21Kq"}},25261:function(e){e.exports={root:"ThemeColors_root__Otn9p"}},56142:function(e,o,r){"use strict";r.d(o,{m:function(){return i}});var n=r(52322),t=r(8582),l=r(93010),c=r(17115);let i={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.x,{size:"sm",mb:5,fw:500,children:"Filled variant"}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{color:"cyan",children:"Theme color"}),(0,n.jsx)(c.z,{color:"#1D72FE",children:"Hex color"})]}),(0,n.jsx)(t.x,{size:"sm",mb:5,mt:"md",fw:500,children:"Light variant"}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{variant:"light",color:"cyan",children:"Theme color"}),(0,n.jsx)(c.z,{variant:"light",color:"#1D72FE",children:"Hex color"})]}),(0,n.jsx)(t.x,{size:"sm",mb:5,mt:"md",fw:500,children:"Outline variant"}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.z,{variant:"outline",color:"cyan",children:"Theme color"}),(0,n.jsx)(c.z,{variant:"outline",color:"#1D72FE",children:"Hex color"})]})]})},defaultExpanded:!1,code:`
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

`}},81500:function(e,o,r){"use strict";r.d(o,{R:function(){return c}});var n=r(52322),t=r(93010),l=r(17115);let c={type:"code",component:function(){return(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.z,{color:"oklch-blue",children:"Filled"}),(0,n.jsx)(l.z,{color:"oklch-blue",variant:"outline",children:"Outline"}),(0,n.jsx)(l.z,{color:"oklch-blue",variant:"light",children:"Light"})]})},code:`
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
`,centered:!0}},2498:function(e,o,r){"use strict";r.d(o,{D:function(){return m}});var n=r(52322),t=r(9197),l=r(46403),c=r(20754),i=r(58898),s=r(8943),a=r(68755),d=r(93010),h=r(17115);let u=e=>{let o=(0,t.B)(e),r=(0,l.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return r.isThemeColor&&"lime"===r.color&&"filled"===e.variant?{...o,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,c.m)(r.value,.1),hover:(0,c.m)(r.value,.15),border:`${(0,i.h)(1)} solid ${r.value}`,color:(0,s._)(r.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:o},m={type:"code",component:function(){return(0,n.jsx)(a.M2,{theme:{variantColorResolver:u},children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(h.z,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,n.jsx)(h.z,{color:"orange",variant:"light",children:"Orange light button"}),(0,n.jsx)(h.z,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
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
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
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
`}},82877:function(e,o,r){"use strict";r.d(o,{$:function(){return l}});var n=r(52322),t=r(28559);let l={type:"code",component:function(){return(0,n.jsx)(t.x,{bg:"virtual",c:"white",p:"md",fw:700,children:"This box has virtual background color, it is pink in dark mode and cyan in light mode"})},code:[{fileName:"App.tsx",code:`
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
`,language:"tsx"}]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=26058)}),_N_E=e.O()}]);
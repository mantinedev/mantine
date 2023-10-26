(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8989],{33507:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},94171:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/colors",function(){return o(32608)}])},89545:function(e,r,o){"use strict";o.d(r,{I:function(){return d},a:function(){return m}});var n=o(85893);o(67294);var t=o(43440),l=o(221),a=o(81110),c=o(72039),i=o(89070),s=o.n(i);function d(e){let{group:r}=e,o=(0,t.rZ)(),i=o.colors[r].map((e,o)=>(0,n.jsxs)("div",{className:s().color,children:[(0,n.jsx)(l.b,{color:e,radius:"md",className:s().swatch}),(0,n.jsxs)(a.x,{mt:7,children:[(0,n.jsxs)(c.x,{size:"xs",className:s().colorName,children:[r," ",o]}),(0,n.jsx)(c.x,{c:"dimmed",size:"xs",tt:"uppercase",mt:2,fz:10,children:e})]})]},e));return(0,n.jsx)("div",{className:s().wrapper,children:(0,n.jsx)("div",{className:s().group,children:i})})}var h=o(38621),u=o(10157),p=o.n(u);function m(){let e=Object.keys(h.t.colors).map(e=>(0,n.jsx)(d,{group:e},e));return(0,n.jsx)("div",{className:p().root,children:e})}},32608:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return D}});var n=o(85893),t=o(11151),l=o(19905),a=o(9904),c=o(89545),i=o(67294),s=o(16262),d=o(14469);let h=`
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </MantineProvider>
  );
}

`,u={type:"code",component:function(){return i.createElement(s.Z,null,i.createElement(d.z,{color:"ocean-blue"},"Ocean blue button"),i.createElement(d.z,{color:"bright-pink",variant:"filled"},"Bright pink button"))},centered:!0,code:h},p=`
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'bright-pink',
        colors: {
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`,m={type:"code",component:function(){return i.createElement(s.Z,null,i.createElement(d.z,{color:"bright-pink"},"Primary button"),i.createElement(d.z,{color:"blue"},"Blue button"))},centered:!0,code:p};var x=o(93356),v=o(75195);let f=e=>`
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
`,g={type:"configurator",component:function(e){let[r,o]=(0,i.useState)(void 0),{colorScheme:n}=(0,x.X)();return(0,i.useEffect)(()=>{o(n)},[n]),i.createElement("div",{id:"primary-color-demo-root","data-mantine-color-scheme":r},i.createElement(v.M,{cssVariablesSelector:"#primary-color-demo-root",getRootElement:()=>document.createElement("div"),theme:{primaryShade:e.primaryShade}},i.createElement(s.Z,null,i.createElement(d.z,null,"Filled"),i.createElement(d.z,{variant:"light"},"Light"),i.createElement(d.z,{variant:"outline"},"Outline"))))},code:f,centered:!0,controls:[{type:"number",prop:"primaryShade",initialValue:6,libraryValue:"__none__",min:0,max:9}]};var j=o(7702),b=o(72039);let y=e=>`
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${e.index}">Text with blue.${e.index} color</Text>
      <Button color="cyan.${e.index}">Button</Button>
    </>
  );
}
`,C={type:"configurator",component:function(e){return i.createElement(i.Fragment,null,i.createElement(b.x,{c:`blue.${e.index}`},"Text with blue.",e.index," color"),i.createElement(d.z,{color:`cyan.${e.index}`,mt:"sm"},"Button"))},code:y,controls:[{type:"number",prop:"index",initialValue:6,libraryValue:"__none__",min:0,max:9}]},w=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`,k={type:"code",component:function(){return i.createElement(d.z,{color:"#C3FF36",c:"black"},"Button with color and c props")},centered:!0,code:w};var E=o(53029);let B=(0,l.A)(a.us.Colors);function M(e){let r=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},(0,t.ah)(),e.components),{Demo:o,InstallScript:l}=r;return o||F("Demo",!0),l||F("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"colors",children:"Colors"}),"\n",(0,n.jsxs)(r.p,{children:["Mantine uses ",(0,n.jsx)(r.a,{href:"https://yeun.github.io/open-color/",children:"open-color"})," in default theme with some additions.\nEach color has 10 shades."]}),"\n",(0,n.jsxs)(r.p,{children:["Colors are exposed on the ",(0,n.jsx)(r.a,{href:"/theming/theme-object",children:"theme object"})," as an array of strings,\nyou can access color shade by color name and index (0-9), colors with larger index are darker:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"theme.colors.red[5];\ntheme.colors.gray[9];\ntheme.colors.blue[0];\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Colors are also exposed as ",(0,n.jsx)(r.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scss",children:"--mantine-color-red-5;\n--mantine-color-gray-9;\n--mantine-color-blue-0;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"adding-extra-colors",children:"Adding extra colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can add any number of extra colors to ",(0,n.jsx)(r.code,{children:"theme.colors"})," object.\nThis will allow you to use them in all components that support ",(0,n.jsx)(r.code,{children:"color"})," prop, for example\n",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(r.a,{href:"/core/switch",children:"Switch"}),"."]}),"\n",(0,n.jsx)(o,{data:u}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"10 shades per color"})}),"\n",(0,n.jsxs)(r.p,{children:["Colors override must include ",(0,n.jsx)(r.strong,{children:"at least 10 shades per color"}),". Otherwise, you will get a TypeScript error\nand some variants will not have proper colors. If you only have one color value, you can either\npick the remaining colors manually or use the ",(0,n.jsx)(r.a,{href:"/colors-generator",children:"colors generator tool"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["You can add more than 10 shades per color: these values will not be used by Mantine components with the default colors resolver,\nbut you can still reference them by index, for example, ",(0,n.jsx)(r.code,{children:'color="blue.11"'}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"primarycolor",children:"primaryColor"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"theme.primaryColor"})," is a key of ",(0,n.jsx)(r.code,{children:"theme.colors"}),", it is used:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["As a default value for most of the components that support ",(0,n.jsx)(r.code,{children:"color"})," prop"]}),"\n",(0,n.jsx)(r.li,{children:"To set default focus ring outline color"}),"\n"]}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["CSS color values at ",(0,n.jsx)(r.code,{children:"theme.primaryColor"})]})}),"\n",(0,n.jsxs)(r.p,{children:["Value of ",(0,n.jsx)(r.code,{children:"theme.primaryColor"})," must be a key of ",(0,n.jsx)(r.code,{children:"theme.colors"})," object. For example, ",(0,n.jsx)(r.code,{children:"blue"}),", ",(0,n.jsx)(r.code,{children:"orange"})," or ",(0,n.jsx)(r.code,{children:"green"}),".\nYou cannot assign CSS color values, for example, the following code will throw an error during theme merging:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        primaryColor: '#CEFEDC', // This will throw an error\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"primaryshade",children:"primaryShade"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"theme.primaryShade"})," is a number from 0 to 9. It determines which shade will be used for the components that have ",(0,n.jsx)(r.code,{children:"color"})," prop."]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(r.p,{children:"You can also customize primary shade for dark and light color schemes separately:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={{ primaryShade: { light: 6, dark: 8 } }}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"color-prop",children:"Color prop"}),"\n",(0,n.jsxs)(r.p,{children:["Components that support changing their color have ",(0,n.jsx)(r.code,{children:"color"})," prop. This prop supports the following values:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key of ",(0,n.jsx)(r.code,{children:"theme.colors"}),", for example, ",(0,n.jsx)(r.code,{children:"blue"})," or ",(0,n.jsx)(r.code,{children:"green"})]}),"\n",(0,n.jsxs)(r.li,{children:["Key of ",(0,n.jsx)(r.code,{children:"theme.colors"})," with color index, for example, ",(0,n.jsx)(r.code,{children:"blue.5"})," or ",(0,n.jsx)(r.code,{children:"green.9"})]}),"\n",(0,n.jsxs)(r.li,{children:["CSS color value, for example, ",(0,n.jsx)(r.code,{children:"#fff"})," or ",(0,n.jsx)(r.code,{children:"rgba(0, 0, 0, 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(o,{data:j.m}),"\n",(0,n.jsx)(r.h2,{id:"colors-index-reference",children:"Colors index reference"}),"\n",(0,n.jsxs)(r.p,{children:["You can reference colors by index in ",(0,n.jsx)(r.code,{children:"color"})," prop and ",(0,n.jsx)(r.a,{href:"/styles/style-props",children:"style props"}),", for example ",(0,n.jsx)(r.code,{children:"c"})," prop:"]}),"\n",(0,n.jsx)(o,{data:C}),"\n",(0,n.jsx)(r.h2,{id:"difference-between-color-and-c-props",children:"Difference between color and c props"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"color"})," prop is used to control multiple CSS properties of the component. These properties can vary across different components,\nbut usually ",(0,n.jsx)(r.code,{children:"color"})," prop controls ",(0,n.jsx)(r.code,{children:"background"}),", ",(0,n.jsx)(r.code,{children:"color"})," and ",(0,n.jsx)(r.code,{children:"border-color"})," CSS properties. For example,\nwhen you set ",(0,n.jsx)(r.code,{children:'color="#C3FF36"'})," on ",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"})," component (with ",(0,n.jsx)(r.code,{children:'variant="filled"'}),"), it will set the following CSS properties:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"background-color"})," to ",(0,n.jsx)(r.code,{children:"#C3FF36"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"background-color"})," when button is hovered to ",(0,n.jsx)(r.code,{children:"#B0E631"})," (",(0,n.jsx)(r.code,{children:"#C3FF36"})," darkened by 10%)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"color"})," to ",(0,n.jsx)(r.code,{children:"var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"border-color"})," to ",(0,n.jsx)(r.code,{children:"transparent"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"c"})," is a ",(0,n.jsx)(r.a,{href:"/styles/style-props",children:"style prop"})," – it is responsible for setting a single CSS property ",(0,n.jsx)(r.code,{children:"color"})," (color of the text).\nYou can combine both props to achieve better contrast between text and background. In the following example:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"color"})," prop sets all ",(0,n.jsx)(r.code,{children:"background: #C3FF36"})," and ",(0,n.jsx)(r.code,{children:"color: var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"c"})," prop overrides color styles to ",(0,n.jsx)(r.code,{children:"color: var(--mantine-color-black)"})]}),"\n"]}),"\n",(0,n.jsx)(o,{data:k}),"\n",(0,n.jsx)(r.h2,{id:"colors-variant-resolver",children:"Colors variant resolver"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"theme.variantColorResolver"})," is a function that is used to determine which colors will be used\nin different variants in the following components: ",(0,n.jsx)(r.a,{href:"/core/alert",children:"Alert"}),", ",(0,n.jsx)(r.a,{href:"/core/avatar",children:"Avatar"}),", ",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"It accepts an object argument with the following properties:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"interface VariantColorsResolverInput {\n  /** `color` prop passed to component */\n  color: MantineColor | undefined;\n\n  /** `variant` prop passed to component */\n  variant: string;\n\n  /** `gradient` prop passed to component, used only for gradient variant by default */\n  gradient?: MantineGradient;\n\n  /** Theme object */\n  theme: MantineTheme;\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"theme.variantColorResolver"})," must return an object with the following properties:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"interface VariantColorResolverResult {\n  background: string;\n  hover: string;\n  color: string;\n  border: string;\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You can use ",(0,n.jsx)(r.code,{children:"theme.variantColorResolver"})," to customize colors handling by default variants\nor to add new variants support:"]}),"\n",(0,n.jsx)(o,{data:E.D}),"\n",(0,n.jsx)(r.h2,{id:"colors-generation",children:"Colors generation"}),"\n",(0,n.jsxs)(r.p,{children:["You can use ",(0,n.jsx)(r.a,{href:"/colors-generator",children:"colors generator"})," to generate 10 shades of color based on a single value\nor install ",(0,n.jsx)(r.code,{children:"@mantine/colors-generator"})," package to generate dynamic colors in your application:"]}),"\n",(0,n.jsx)(l,{packages:"chroma-js @mantine/colors-generator"}),"\n",(0,n.jsxs)(r.p,{children:["The package exports ",(0,n.jsx)(r.code,{children:"generateColors"})," function that accepts a color value and returns an array of 10 shades.\nNote that ",(0,n.jsx)(r.code,{children:"generateColors"})," function works best with darker colors (blue, violet, red) and may produce\ncolors with poor contrast for lighter colors (yellow, teal, orange). Usually, it is better to generate\ncolors in advance to avoid contrast issues."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { generateColors } from '@mantine/colors-generator';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"default-colors",children:"Default colors"}),"\n",(0,n.jsx)(c.a,{}),"\n",(0,n.jsx)(r.h2,{id:"add-custom-colors-types",children:"Add custom colors types"}),"\n",(0,n.jsx)(r.p,{children:"TypeScript will only autocomplete Mantine's default colors when accessing the theme. To add your custom colors to the MantineColor type, you can use TypeScript module declaration."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';\n\ntype ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;\n\ndeclare module '@mantine/core' {\n  export interface MantineThemeColorsOverride {\n    colors: Record<ExtendedCustomColors, MantineColorsTuple>;\n  }\n}\n"})})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(B,Object.assign({},e,{children:(0,n.jsx)(M,e)}))};function F(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89070:function(e){e.exports={wrapper:"ColorsGroup_wrapper__CL3j0",color:"ColorsGroup_color__h_UQT",swatch:"ColorsGroup_swatch__TKQN5",title:"ColorsGroup_title___FhcQ",group:"ColorsGroup_group__XrmQh",colorName:"ColorsGroup_colorName__iVJUN"}},10157:function(e){e.exports={root:"ThemeColors_root__YibUj"}},7702:function(e,r,o){"use strict";o.d(r,{m:function(){return i}});var n=o(67294),t=o(72039),l=o(16262),a=o(14469);let c=`
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

`,i={type:"code",component:function(){return n.createElement(n.Fragment,null,n.createElement(t.x,{size:"sm",mb:5,fw:500},"Filled variant"),n.createElement(l.Z,null,n.createElement(a.z,{color:"cyan"},"Theme color"),n.createElement(a.z,{color:"#1D72FE"},"Hex color")),n.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),n.createElement(l.Z,null,n.createElement(a.z,{variant:"light",color:"cyan"},"Theme color"),n.createElement(a.z,{variant:"light",color:"#1D72FE"},"Hex color")),n.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),n.createElement(l.Z,null,n.createElement(a.z,{variant:"outline",color:"cyan"},"Theme color"),n.createElement(a.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:c}},53029:function(e,r,o){"use strict";o.d(r,{D:function(){return w}});var n=o(67294),t=o(63428),l=o(52845),a=o(26754),c=o(72622),i=o(55310),s=o(43440),d=o(16262),h=o(14469),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))v.call(r,o)&&g(e,o,r[o]);if(x)for(var o of x(r))f.call(r,o)&&g(e,o,r[o]);return e},b=(e,r)=>p(e,m(r));let y=`
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
    return { ...defaultResolvedColors, color: 'var(--mantine-color-black)' };
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
`,C=e=>{let r=(0,t.B)(e),o=(0,l.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?b(j({},r),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,a.m)(o.value,.1),hover:(0,a.m)(o.value,.15),border:`${(0,c.h)(1)} solid ${o.value}`,color:(0,i._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},w={type:"code",component:function(){return n.createElement(s.M2,{theme:{variantColorResolver:C}},n.createElement(d.Z,null,n.createElement(h.z,{color:"lime.4",variant:"filled"},"Lime filled button"),n.createElement(h.z,{color:"orange",variant:"light"},"Orange light button"),n.createElement(h.z,{variant:"danger"},"Danger button")))},centered:!0,code:y}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=94171)}),_N_E=e.O()}]);
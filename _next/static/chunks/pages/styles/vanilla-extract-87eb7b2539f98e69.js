(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54222],{77669:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/vanilla-extract",function(){return t(25947)}])},25947:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var s=t(31085),r=t(71184),a=t(85954),l=t(38215);let o=(0,a.P)(l.XZ.VanillaExtract);function i(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{InstallScript:t,TemplatesList:a}=n;return t||d("InstallScript",!0),a||d("TemplatesList",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla extract"})," is a TypeScript CSS preprocessor that generates static CSS files at build time.\nIt is a great alternative to ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"})," if you prefer to write your styles in TypeScript."]}),"\n",(0,s.jsx)(n.h2,{id:"vanilla-extract-vs-css-modules",children:"Vanilla extract vs CSS Modules"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla extract"})," and ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"})," do the same thing,\nbut with different syntax. Common features of ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla extract"})," and ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Styles are generated at build time – no runtime and performance overhead"}),"\n",(0,s.jsx)(n.li,{children:"Classes names are scoped to the styles file"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Differences between ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla extract"})," and ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vanilla extract styles are type safe"}),"\n",(0,s.jsxs)(n.li,{children:["You can use any JavaScript/TypeScript code in Vanilla extract styles, including ",(0,s.jsx)(n.a,{href:"/styles/color-functions",children:"color functions"})]}),"\n",(0,s.jsxs)(n.li,{children:["With Vanilla extract you do not have access to ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," features like ",(0,s.jsx)(n.code,{children:"light-dark"})," function and ",(0,s.jsx)(n.code,{children:"hover"})," mixin.\nBecause of this, you will not be able to copy-paste all demos from Mantine documentation and use them with Vanilla extract."]}),"\n",(0,s.jsxs)(n.li,{children:["Vanilla extract requires additional configuration and setup that may not be available for your build tool/framework.\nMost popular tools like ",(0,s.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"})," and ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})," have plugins for Vanilla extract,\nbut if you are using something more niche, you might need to configure it yourself."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that you can use both ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla extract"})," and ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"})," in the same project,\nit will not cause any issues: performance will be the same and the bundle size will not be impacted."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/documentation/getting-started",children:"installation instructions"})," to install vanilla extract.\nThen install ",(0,s.jsx)(n.code,{children:"@mantine/vanilla-extract"})," package, it exports ",(0,s.jsx)(n.code,{children:"themeToVars"})," function to convert Mantine theme to CSS variables:"]}),"\n",(0,s.jsx)(t,{packages:"@mantine/vanilla-extract"}),"\n",(0,s.jsx)(n.h2,{id:"templates",children:"Templates"}),"\n",(0,s.jsx)(n.p,{children:"You can use one of the following templates to get started or a reference for your own setup.\nNote that all templates include only minimal setup."}),"\n",(0,s.jsx)(a,{name:["vite-vanilla-extract-template","next-vanilla-extract-template"]}),"\n",(0,s.jsx)(n.h2,{id:"theming",children:"Theming"}),"\n",(0,s.jsxs)(n.p,{children:["Vanilla extract provides ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/documentation/theming/",children:"createTheme"}),"\nfunction which converts given theme object into CSS variables and assigns them to ",(0,s.jsx)(n.code,{children:":root"})," or other selector.\nYou should not use Vanilla extract ",(0,s.jsx)(n.code,{children:"createTheme"})," to generate Mantine theme tokens – all Mantine ",(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),"\nproperties are already exposed as CSS variables. Instead, use ",(0,s.jsx)(n.code,{children:"themeToVars"})," function from ",(0,s.jsx)(n.code,{children:"@mantine/vanilla-extract"})," package\nto create an object with CSS variables from Mantine theme:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// theme.ts\nimport { createTheme } from '@mantine/core';\n\n// Do not forget to pass theme to MantineProvider\nexport const theme = createTheme({\n  fontFamily: 'serif',\n  primaryColor: 'cyan',\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// theme.css.ts\nimport { theme } from './theme';\nimport { themeToVars } from '@mantine/vanilla-extract';\n\n// CSS variables object, can be access in *.css.ts files\nexport const vars = themeToVars(theme);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsxs)(n.p,{children:["Import ",(0,s.jsx)(n.code,{children:"vars"})," object in ",(0,s.jsx)(n.code,{children:"*.css.ts"})," files to access Mantine ",(0,s.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { vars } from './theme';\n\nexport const demo = style({\n  fontSize: vars.fontSizes.xl,\n  backgroundColor: vars.colors.red[5],\n  color: vars.colors.white,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rem-and-em",children:"rem and em"}),"\n",(0,s.jsxs)(n.p,{children:["To convert px to ",(0,s.jsx)(n.a,{href:"/styles/rem",children:"rem or em"})," use ",(0,s.jsx)(n.code,{children:"rem"})," and ",(0,s.jsx)(n.code,{children:"em"})," functions from ",(0,s.jsx)(n.code,{children:"@mantine/core"})," package:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { rem } from '@mantine/core';\n\nexport const demo = style({\n  fontSize: rem(16),\n\n  '@media': {\n    [`(min-width: ${em(768)})`]: {\n      fontSize: rem(18),\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"light-and-dark-selectors",children:"light and dark selectors"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vars"})," object contains ",(0,s.jsx)(n.code,{children:"lightSelector"})," and ",(0,s.jsx)(n.code,{children:"darkSelector"})," properties which can be used to\napply styles only in light or dark color scheme:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { vars } from './theme';\n\nexport const demo = style({\n  fontSize: vars.fontSizes.xl,\n\n  selectors: {\n    [vars.lightSelector]: {\n      backgroundColor: vars.colors.red[5],\n      color: vars.colors.white,\n    },\n\n    [vars.darkSelector]: {\n      backgroundColor: vars.colors.blue[5],\n      color: vars.colors.white,\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that usually it is more convenient to use only one of them:\napply styles for light color scheme and then override them for dark color scheme\nwith ",(0,s.jsx)(n.code,{children:"vars.darkSelector"})," (or vice versa):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { vars } from './theme';\n\nexport const demo = style({\n  fontSize: vars.fontSizes.xl,\n  backgroundColor: vars.colors.red[5],\n  color: vars.colors.white,\n\n  selectors: {\n    [vars.darkSelector]: {\n      backgroundColor: vars.colors.blue[5],\n      color: vars.colors.white,\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"largerthan-and-smallerthan",children:"largerThan and smallerThan"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vars"})," object contains ",(0,s.jsx)(n.code,{children:"largerThan"})," and ",(0,s.jsx)(n.code,{children:"smallerThan"})," properties which can be used in\n",(0,s.jsx)(n.code,{children:"@media"})," as a shorthand for ",(0,s.jsx)(n.code,{children:"min-width"})," and ",(0,s.jsx)(n.code,{children:"max-width"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { vars } from './theme';\n\nexport const demo = style({\n  fontSize: vars.fontSizes.sm,\n\n  '@media': {\n    // equivalent to `(min-width: 640px)` converted to em\n    // -> `(min-width: 40em)`\n    [vars.largerThan(640)]: {\n      fontSize: vars.fontSizes.md,\n    },\n\n    // equivalent to `(max-width: 640px)` converted to em\n    // -> `(max-width: 40em)`\n    [vars.smallerThan(640)]: {\n      fontSize: vars.fontSizes.xs,\n    },\n\n    // You can reference `theme.breakpoints` values\n    [vars.largerThan('sm')]: {\n      fontSize: vars.fontSizes.md,\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rtl-selector",children:"rtl selector"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"vars.rtlSelector"})," to apply styles only in rtl direction:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Demo.css.ts\nimport { style } from '@vanilla-extract/css';\nimport { vars } from './theme';\n\nexport const demo = style({\n  paddingRight: vars.spacing.md,\n\n  selectors: {\n    [vars.rtlSelector]: {\n      paddingLeft: vars.spacing.md,\n      paddingRight: 0,\n    },\n  },\n});\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})})}function d(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(77669)),_N_E=e.O()}]);
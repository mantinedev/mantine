(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33544],{24952:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return o(71433)}])},71433:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return L}});var r=o(52322),t=o(45392),s=o(17115),i=o(20048),l=o(10069),a=o(23344),c=o(87523),d=o(87119),h=o(2498),p=o(56142),u=o(34772),m=o(2171),x=o(60070),j=o(42407),f=o(49667),g=o(88122),b=o(7972),v=o(17234),y=o(43597),w=o(44921),S=o(21607),C=o(72472),T=o(56592),k=o(89237),N=o(80703),I=o(97332),P=o(38648),z=o(25071),M=o(15019);let B=(0,z.A)(M.us.Changelog700);function D(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{DataTable:o,Demo:z}=n;return o||E("DataTable",!0),z||E("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,r.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,r.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,r.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,r.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,r.jsx)(n.p,{children:"Important breaking changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,r.jsxs)(n.li,{children:["Components no longer support ",(0,r.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,r.jsx)(n.code,{children:"className"})," or ",(0,r.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is now recommended to use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),", follow the ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,r.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,r.jsx)(n.code,{children:"colorScheme"})," value is ",(0,r.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,r.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if the user prefers light or dark color scheme."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"auto"})," is not the default value. You need to set it manually to enable system color scheme support\nboth on ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and in ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#colorschemescript",children:"ColorSchemeScript"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript, MantineProvider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <ColorSchemeScript defaultColorScheme="auto" />\n      <MantineProvider defaultColorScheme="auto">\n        {/* Your app here */}\n      </MantineProvider>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with a built-in color scheme manager.\nIt is no longer required to use any other components to set up color scheme logic.\nColor scheme can be changed with ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,r.jsx)(z,{data:i.U}),"\n",(0,r.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,r.jsxs)(n.p,{children:["It is also recommended to use ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,r.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,r.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,r.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,r.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,r.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To achieve that, just do not import\n",(0,r.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,r.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," or ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," now have a static ",(0,r.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      styles: (t, props) => ({\n        input: {\n          fontSize:\n            props.size === 'compact' ? t.fontSizes.sm : undefined,\n        },\n      }),\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,r.jsxs)(n.p,{children:["You can now get component props in ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,r.jsx)(z,{data:l.B}),"\n",(0,r.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,r.jsxs)(n.p,{children:["You can now customize components ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,r.jsx)(z,{data:a.g}),"\n",(0,r.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,r.jsxs)(n.p,{children:["All components now have ",(0,r.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if the component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(z,{data:c.j}),"\n",(0,r.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways to customize component sizes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["With component ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of customizing ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,r.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,r.jsx)(z,{data:d.R}),"\n",(0,r.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents now support custom variants with ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,r.jsx)(z,{data:h.D}),"\n",(0,r.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to scale ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you would like to set ",(0,r.jsx)(n.code,{children:"html"})," font-size to ",(0,r.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,r.jsx)(n.code,{children:"scale"})," to ",(0,r.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,r.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,r.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Key of ",(0,r.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,r.jsx)(n.code,{children:"blue"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,r.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,r.jsx)(n.code,{children:"#fff"}),", ",(0,r.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,r.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,r.jsx)(z,{data:p.m}),"\n",(0,r.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,r.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,r.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,r.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,r.jsx)(o,{head:["Key","Class"],data:Object.keys(s.z.classes).map(e=>[e,s.z.classes[e]])}),"\n",(0,r.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," values are used in the ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,r.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows customizing component colors per variant"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,r.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    'pale-blue': generateColors('#375EAC'),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component, which should be used to configure the direction of the application.\n",(0,r.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to set up additional plugins. See ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,r.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. The minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks, which are available only in React 18."]}),"\n",(0,r.jsx)(n.h2,{id:"left-and-right-section",children:"left and right section"}),"\n",(0,r.jsxs)(n.p,{children:["Components that previously had ",(0,r.jsx)(n.code,{children:"rightSection"})," and ",(0,r.jsx)(n.code,{children:"icon"})," props, now use ",(0,r.jsx)(n.code,{children:"leftSection"})," instead of ",(0,r.jsx)(n.code,{children:"icon"}),".\nExample of ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," sections:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="left" rightSection="right">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"numberinput-changes",children:"NumberInput changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"})," was migrated to ",(0,r.jsx)(n.a,{href:"https://s-yadav.github.io/react-number-format/",children:"react-number-format"}),".\nIt now supports more features and has improvements in cursor position management.\nDue to migration, some of the props were renamed – follow the ",(0,r.jsx)(n.a,{href:"/core/number-input",children:"documentation"})," to learn about the changes."]}),"\n",(0,r.jsx)(z,{data:u.C}),"\n",(0,r.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,r.jsx)(z,{data:m.g}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,r.jsx)(n.code,{children:"theme.loader"})," property –\nit is also now possible to add custom loaders on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),".\nSpecified ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,r.jsx)(z,{data:x.T}),"\n",(0,r.jsx)(n.h2,{id:"progress-changes",children:"Progress changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," component now supports compound components pattern.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," are now supposed to be implemented with\ncompound components instead."]}),"\n",(0,r.jsx)(z,{data:j.I}),"\n",(0,r.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,r.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,r.jsx)(n.code,{children:"Table.Tr"}),", ",(0,r.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,r.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,r.jsxs)(n.li,{children:["New props: ",(0,r.jsx)(n.code,{children:"borderColor"}),", ",(0,r.jsx)(n.code,{children:"withRowBorders"}),", ",(0,r.jsx)(n.code,{children:"stripedColor"}),", ",(0,r.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"fz"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"Table.ScrollContainer"})," component to create scrollable table"]}),"\n"]}),"\n",(0,r.jsx)(z,{data:f.j}),"\n",(0,r.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,r.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,r.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,r.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Group"})," now supports new ",(0,r.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows customizing how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,r.jsx)(z,{data:g.j}),"\n",(0,r.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Styles API selector ",(0,r.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,r.jsx)(n.code,{children:"list"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,r.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"onChange"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Tabs.List"})," ",(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,r.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"leftIcon"})," and ",(0,r.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})," and ",(0,r.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"tt"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered in the center to prevent layout shifts"]}),"\n",(0,r.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appshell-changes",children:"AppShell changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," component was completely rewritten, it now supports more features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now uses compound components pattern: ",(0,r.jsx)(n.code,{children:"Navbar"}),", ",(0,r.jsx)(n.code,{children:"Aside"}),", ",(0,r.jsx)(n.code,{children:"Header"})," and ",(0,r.jsx)(n.code,{children:"Footer"})," are no longer exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package. Instead, use ",(0,r.jsx)(n.code,{children:"AppShell.Navbar"}),", ",(0,r.jsx)(n.code,{children:"AppShell.Aside"}),", etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now supports animations when navbar/aside are opened/closed"]}),"\n",(0,r.jsx)(n.li,{children:"Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop"}),"\n",(0,r.jsx)(n.li,{children:"Header/footer can now be collapsed the same way as navbar/aside. For example, the header can be collapsed based on scroll position or direction."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," no longer supports ",(0,r.jsx)(n.code,{children:"fixed"})," prop – all components have ",(0,r.jsx)(n.code,{children:"position: fixed"})," styles, static positioning is no longer supported"]}),"\n",(0,r.jsxs)(n.li,{children:["The documentation was updated, it now includes ",(0,r.jsx)(n.a,{href:"/app-shell?e=BasicAppShell",children:"10+ examples on a separate page"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"simplegrid-changes",children:"SimpleGrid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," now uses object format to define grid breakpoints and spacing,\nit works the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(z,{data:b.j}),"\n",(0,r.jsx)(n.h2,{id:"grid-changes",children:"Grid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," now uses object format in ",(0,r.jsx)(n.code,{children:"gutter"}),", ",(0,r.jsx)(n.code,{children:"offset"}),", ",(0,r.jsx)(n.code,{children:"span"})," and order props,\nall props now work the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(z,{data:v.j}),"\n",(0,r.jsx)(n.h2,{id:"image-changes",children:"Image changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/image",children:"Image"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Image"})," component no longer includes ",(0,r.jsx)(n.code,{children:"figure"})," and other associated elements"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"caption"})," prop is no longer available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"})," props are replaced with ",(0,r.jsx)(n.code,{children:"w"})," and ",(0,r.jsx)(n.code,{children:"h"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})]}),"\n",(0,r.jsx)(n.li,{children:"Placeholder functionality was replaced with fallback image"}),"\n"]}),"\n",(0,r.jsx)(z,{data:y.t}),"\n",(0,r.jsx)(n.h2,{id:"spotlight-changes",children:"Spotlight changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The logic is no longer based on React context"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpotlightProvider"})," was renamed to ",(0,r.jsx)(n.code,{children:"Spotlight"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useSpotlight"})," hook was removed, use ",(0,r.jsx)(n.code,{children:"spotlight"})," object instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"})," prop now uses a different data format"]}),"\n",(0,r.jsx)(n.li,{children:"It is now possible to have multiple spotlights in the same app"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Spotlight"})," component now uses compound components pattern for advanced customization"]}),"\n"]}),"\n",(0,r.jsx)(z,{data:w.I}),"\n",(0,r.jsx)(n.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/carousel",children:"Carousel"})," now uses object format for responsive values in\n",(0,r.jsx)(n.code,{children:"slideSize"})," and ",(0,r.jsx)(n.code,{children:"slideGap"})," props instead of ",(0,r.jsx)(n.code,{children:"breakpoints"})," prop:"]}),"\n",(0,r.jsx)(z,{data:S.A}),"\n",(0,r.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,r.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,r.jsx)(n.a,{href:"/x/code-highlight",children:"The new package"})," uses ",(0,r.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,r.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,r.jsx)(z,{data:C.H}),"\n",(0,r.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,r.jsx)(z,{data:T.j}),"\n",(0,r.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,r.jsxs)(n.p,{children:["The new ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find 50+ ",(0,r.jsx)(n.code,{children:"Combobox"})," examples on ",(0,r.jsx)(n.a,{href:"/combobox",children:"this page"}),"."]}),"\n",(0,r.jsx)(z,{data:k.Y}),"\n",(0,r.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,r.jsx)(z,{data:N.a}),"\n",(0,r.jsx)(n.h2,{id:"witherrorstyles-prop",children:"withErrorStyles prop"}),"\n",(0,r.jsxs)(n.p,{children:["All inputs now support ",(0,r.jsx)(n.code,{children:"withErrorStyles"})," prop, which allows removing error styles from the input.\nIt can be used to apply custom error styles without override, or use other techniques to\nindicate error state. For example, it can be used to render an icon in the right section:"]}),"\n",(0,r.jsx)(z,{data:I.v}),"\n",(0,r.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components now support ",(0,r.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,r.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,r.jsx)(z,{data:P.n}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/dates/dates-provider",children:"DatesProvider"})," now supports setting timezone"]}),"\n",(0,r.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,r.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/notifications",children:"Notifications system"})," now exports ",(0,r.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," component has new design"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,r.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,r.jsx)(n.code,{children:"mainAxis"})," and ",(0,r.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,r.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,r.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,r.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,r.jsx)(n.code,{children:"hover"})," (default), ",(0,r.jsx)(n.code,{children:"always"})," or ",(0,r.jsx)(n.code,{children:"never"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead: ",(0,r.jsx)(n.code,{children:"portalProps={{ target: '.your-selector' }}"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,r.jsx)(n.code,{children:"sizes"})," prop, use ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,r.jsx)(n.a,{href:"/theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,r.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,r.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,r.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,r.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,r.jsx)(n.code,{children:"<p />"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,r.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,r.jsx)(n.code,{children:"color"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,r.jsx)(n.code,{children:"width"})," prop, use ",(0,r.jsx)(n.code,{children:"w"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,r.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,r.jsx)(n.code,{children:"Input"})," based components ",(0,r.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,r.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"type"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,r.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows setting CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,r.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,r.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,r.jsx)(n.code,{children:"opacity"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,r.jsx)(n.code,{children:"underline"}),", ",(0,r.jsx)(n.code,{children:"color"}),", ",(0,r.jsx)(n.code,{children:"strikethrough"}),", ",(0,r.jsx)(n.code,{children:"italic"}),", ",(0,r.jsx)(n.code,{children:"transform"}),", ",(0,r.jsx)(n.code,{children:"align"})," and ",(0,r.jsx)(n.code,{children:"weight"})," prop – use ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,r.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"ref"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"})," values in ",(0,r.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,r.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," component now supports custom check icon"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/password-input",children:"PasswordInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"visibilityToggleLabel"})," and ",(0,r.jsx)(n.code,{children:"toggleTabIndex"})," props, use ",(0,r.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})," no longer supports ",(0,r.jsx)(n.code,{children:"breakpoint"})," prop, you can apply responsive styles with Styles API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/color-input",children:"ColorInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"dropdownZIndex"}),", ",(0,r.jsx)(n.code,{children:"transitionProps"}),", ",(0,r.jsx)(n.code,{children:"withinPortal"}),", ",(0,r.jsx)(n.code,{children:"portalProps"})," and ",(0,r.jsx)(n.code,{children:"shadow"})," props, you can now pass these props with ",(0,r.jsx)(n.code,{children:"popoverProps"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"})," props are now grouped by the component they are passed down to: ",(0,r.jsx)(n.code,{children:"overlayProps"}),", ",(0,r.jsx)(n.code,{children:"loaderProps"})," and ",(0,r.jsx)(n.code,{children:"transitionProps"})," now replace props that were previously passed to ",(0,r.jsx)(n.code,{children:"LoadingOverlay"})," directly"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/dropzone",children:"Dropzone"})," component no longer supports ",(0,r.jsx)(n.code,{children:"padding"})," prop, use ",(0,r.jsx)(n.code,{children:"p"})," style prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/dialog",children:"Dialog"})," component now supports all ",(0,r.jsx)(n.a,{href:"/core/paper",children:"Paper"})," and ",(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," props, ",(0,r.jsx)(n.code,{children:"transitionDuration"}),", ",(0,r.jsx)(n.code,{children:"transition"})," and other transition related props were replaced with ",(0,r.jsx)(n.code,{children:"transitionProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"}),", ",(0,r.jsx)(n.a,{href:"/core/radio",children:"Radio"}),", ",(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," and ",(0,r.jsx)(n.a,{href:"/core/switch",children:"Switch"})," components now support ",(0,r.jsx)(n.code,{children:"rootRef"})," prop which allows using them with ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," and other similar components"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," no longer has ",(0,r.jsx)(n.code,{children:"overflow: hidden"})," styles by default, you can enable it by setting ",(0,r.jsx)(n.code,{children:"overflow"})," prop to ",(0,r.jsx)(n.code,{children:"hidden"})]}),"\n"]})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(B,{...e,children:(0,r.jsx)(D,{...e})})}function E(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},71899:function(e,n,o){"use strict";o.d(n,{Z:function(){return r}});var r=(0,o(73681).Z)("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])},72472:function(e,n,o){"use strict";o.d(n,{H:function(){return d}});var r=o(52322),t=o(62119),s=o(60142),i=o(60934);let l=`
function Button() {
  return <button>Click me</button>;
}
`,a=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function c(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,r.jsx)(s.K,{size:18}):e.endsWith(".css")?(0,r.jsx)(i.L,{size:18}):null}let d={type:"code",component:function(){return(0,r.jsx)(t.Q,{getFileIcon:c,code:[{fileName:"Button.tsx",code:l,language:"tsx"},{fileName:"Button.module.css",code:a,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${l}\`;

const cssCode = \`${a}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`}},89237:function(e,n,o){"use strict";o.d(n,{Y:function(){return d}});var r=o(52322),t=o(2784),s=o(56237),i=o(61324),l=o(73063),a=o(6941);let c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[n,o]=(0,t.useState)(null),d=c.map(e=>(0,r.jsx)(i.h.Option,{value:e,children:e},e));return(0,r.jsxs)(i.h,{store:e,onOptionSubmit:n=>{o(n),e.closeDropdown()},children:[(0,r.jsx)(i.h.Target,{children:(0,r.jsx)(l.M,{component:"button",type:"button",pointer:!0,rightSection:(0,r.jsx)(i.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>e.toggleDropdown(),children:n||(0,r.jsx)(a.I.Placeholder,{children:"Pick value"})})}),(0,r.jsx)(i.h.Dropdown,{children:(0,r.jsx)(i.h.Options,{children:d})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`}},56592:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(46325),s=o(74770);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.p,{legend:"Personal information",...e,children:[(0,r.jsx)(s.o,{label:"Your name",placeholder:"Your name"}),(0,r.jsx)(s.o,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},17234:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(69659),s=o(15749);let i={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.r,{children:[(0,r.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"1"}),(0,r.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"2"}),(0,r.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"3"}),(0,r.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"4"})]})}}},15749:function(e,n,o){"use strict";o.d(n,{Y:function(){return s}});var r=o(52322),t=o(69659);function s({children:e,...n}){return(0,r.jsx)(t.r.Col,{...n,children:(0,r.jsx)("div",{className:"m_548ba23a",children:(0,r.jsx)("div",{className:"m_60a4592e",children:e})})})}},88122:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(93010),s=o(17115);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.Z,{...e,children:[(0,r.jsx)(s.z,{variant:"default",children:"First"}),(0,r.jsx)(s.z,{variant:"default",children:"Second"}),(0,r.jsx)(s.z,{variant:"default",children:"Third"})]})},code:`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},43597:function(e,n,o){"use strict";o.d(n,{t:function(){return s}});var r=o(52322),t=o(43076);let s={type:"code",component:function(){return(0,r.jsx)(t.E,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`}},97332:function(e,n,o){"use strict";o.d(n,{v:function(){return l}});var r=o(52322),t=o(71899),s=o(74770),i=o(58898);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.o,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(s.o,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(s.o,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(t.Z,{style:{width:(0,i.h)(20),height:(0,i.h)(20)},color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},2171:function(e,n,o){"use strict";o.d(n,{g:function(){return s}});var r=o(12491);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:r.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},60070:function(e,n,o){"use strict";o.d(n,{T:function(){return h}});var r=o(52322),t=o(60231),s=o(12491),i=o(68755);let l=(0,o(2784).forwardRef)(({style:e,...n},o)=>(0,r.jsx)("svg",{...n,ref:o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})),a=`
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
));`,c=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,d=(0,t.j)({components:{Loader:s.a.extend({defaultProps:{loaders:{...s.a.defaultLoaders,ring:l},type:"ring"}})}}),h={type:"code",component:function(){return(0,r.jsx)(i.M2,{theme:d,children:(0,r.jsx)(s.a,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:c},{fileName:"RingLoader.tsx",language:"tsx",code:a}]}},34772:function(e,n,o){"use strict";o.d(n,{C:function(){return s}});var r=o(52322),t=o(42697);let s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(t.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},42407:function(e,n,o){"use strict";o.d(n,{I:function(){return s}});var r=o(52322),t=o(45757);let s={type:"code",component:function(){return(0,r.jsxs)(t.E.Root,{size:"xl",children:[(0,r.jsx)(t.E.Section,{value:35,color:"cyan",children:(0,r.jsx)(t.E.Label,{children:"Documents"})}),(0,r.jsx)(t.E.Section,{value:28,color:"pink",children:(0,r.jsx)(t.E.Label,{children:"Photos"})}),(0,r.jsx)(t.E.Section,{value:15,color:"orange",children:(0,r.jsx)(t.E.Label,{children:"Other"})})]})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`}},7972:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(26802),s=o(47564);let i={type:"code",component:function(){return(0,r.jsx)(t.M,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:s.a})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`}},47564:function(e,n,o){"use strict";o.d(n,{a:function(){return a}});var r=o(52322),t=o(40489),s=o(28559),i=o(8582);function l({className:e,children:n,...o}){return(0,r.jsx)(s.x,{className:(0,t.Z)("m_a4dc100e",e),...o,children:(0,r.jsx)(i.x,{className:"m_f6c78959",children:n})})}let a=[,,,,,].fill(0).map((e,n)=>(0,r.jsx)(l,{children:n+1},n))},49667:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(96242),s=o(86608);let i={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=s.R.map(e=>(0,r.jsxs)(t.i.Tr,{children:[(0,r.jsx)(t.i.Td,{children:e.position}),(0,r.jsx)(t.i.Td,{children:e.name}),(0,r.jsx)(t.i.Td,{children:e.symbol}),(0,r.jsx)(t.i.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(t.i,{children:[(0,r.jsx)(t.i.Thead,{children:(0,r.jsxs)(t.i.Tr,{children:[(0,r.jsx)(t.i.Th,{children:"Element position"}),(0,r.jsx)(t.i.Th,{children:"Element name"}),(0,r.jsx)(t.i.Th,{children:"Symbol"}),(0,r.jsx)(t.i.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(t.i.Tbody,{children:e})]})}}},86608:function(e,n,o){"use strict";o.d(n,{R:function(){return r}});let r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},80703:function(e,n,o){"use strict";o.d(n,{a:function(){return s}});var r=o(52322),t=o(77413);let s={type:"code",component:function(){return(0,r.jsx)(t.B,{label:"Press Enter to submit a tag",placeholder:"Pick tag from list",data:["React","Angular","Svelte"]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0}},44921:function(e,n,o){"use strict";o.d(n,{I:function(){return d}});var r=o(52322),t=o(2784),s=o(27111),i=o(17115),l=o(91349),a=o(72278);let c=["Home","About us","Contacts","Blog","Careers","Terms of service"],d={type:"code",component:function(){let[e,n]=(0,t.useMemo)(l.Gv,[]),[o,d]=(0,t.useState)(""),h=c.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(e=>(0,r.jsx)(a.$.Action,{label:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.z,{onClick:n.open,children:"Open spotlight"}),(0,r.jsxs)(a.$.Root,{store:e,query:o,onQueryChange:d,shortcut:null,children:[(0,r.jsx)(a.$.Search,{placeholder:"Search...",leftSection:(0,r.jsx)(s.Z,{stroke:1.5})}),(0,r.jsx)(a.$.ActionsList,{children:h.length>0?h:(0,r.jsx)(a.$.Empty,{children:"Nothing found..."})})]})]})},code:`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,centered:!0}},10069:function(e,n,o){"use strict";o.d(n,{B:function(){return h}});var r=o(52322),t=o(40489),s=o(60231),i=o(74770),l=o(68755);let a=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,c=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,d=(0,s.j)({components:{TextInput:i.o.extend({classNames:(e,n)=>({label:(0,t.Z)({m_686577e7:n.required}),input:(0,t.Z)({m_933d67aa:n.error})})})}}),h={type:"code",component:function(){return(0,r.jsxs)(l.M2,{theme:d,children:[(0,r.jsx)(i.o,{required:!0,label:"Required input",placeholder:"Required input"}),(0,r.jsx)(i.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:a,language:"tsx"},{fileName:"Demo.module.css",code:c,language:"scss"}]}},87523:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(52322),t=o(6941),s={input:"m_93131372"};let i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.I,{classNames:s,variant:"underline",placeholder:"Underline input"}),(0,r.jsx)(t.I,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]}},87119:function(e,n,o){"use strict";o.d(n,{R:function(){return d}});var r=o(52322),t=o(60231),s=o(6941),i=o(68755);let l=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,a=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,c=(0,t.j)({components:{Input:s.I.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),d={type:"code",component:function(){return(0,r.jsxs)(i.M2,{theme:c,children:[(0,r.jsx)(s.I,{placeholder:"Size XXL",size:"xxl"}),(0,r.jsx)(s.I,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:l,fileName:"Demo.tsx"},{language:"scss",code:a,fileName:"Demo.module.css"}]}},38648:function(e,n,o){"use strict";o.d(n,{n:function(){return i}});var r=o(52322),t=o(93010),s=o(17115);let i={type:"code",component:function(){return(0,r.jsxs)(t.Z,{justify:"center",children:[(0,r.jsx)(s.z,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,r.jsx)(s.z,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,r.jsx)(s.z,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`}},23344:function(e,n,o){"use strict";o.d(n,{g:function(){return d}});var r=o(52322),t=o(58898),s=o(17115),i=o(93010);let l=`
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,a=`
import { Button, rem, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': rem(60),
              '--button-padding-x': rem(30),
              '--button-fz': rem(24),
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(10),
              '--button-fz': rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}};s.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.z,{vars:c,size:"xxl",children:"XXL Button"}),(0,r.jsx)(s.z,{vars:c,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:a,language:"tsx",fileName:"MantineProvider.tsx"},{code:l,language:"tsx",fileName:"Inline.tsx"}]}},56142:function(e,n,o){"use strict";o.d(n,{m:function(){return l}});var r=o(52322),t=o(8582),s=o(93010),i=o(17115);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.x,{size:"sm",mb:5,fw:500,children:"Filled variant"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.z,{color:"cyan",children:"Theme color"}),(0,r.jsx)(i.z,{color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.x,{size:"sm",mb:5,mt:"md",fw:500,children:"Light variant"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.z,{variant:"light",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.z,{variant:"light",color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.x,{size:"sm",mb:5,mt:"md",fw:500,children:"Outline variant"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.z,{variant:"outline",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.z,{variant:"outline",color:"#1D72FE",children:"Hex color"})]})]})},defaultExpanded:!1,code:`
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

`}},20048:function(e,n,o){"use strict";o.d(n,{U:function(){return l}});var r=o(52322),t=o(58092),s=o(93010),i=o(17115);let l={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.X)();return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.z,{onClick:()=>e("light"),children:"Light"}),(0,r.jsx)(i.z,{onClick:()=>e("dark"),children:"Dark"}),(0,r.jsx)(i.z,{onClick:()=>e("auto"),children:"Auto"}),(0,r.jsx)(i.z,{onClick:n,children:"Clear"})]})},centered:!0,code:`
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`}},2498:function(e,n,o){"use strict";o.d(n,{D:function(){return u}});var r=o(52322),t=o(9197),s=o(46403),i=o(20754),l=o(58898),a=o(8943),c=o(68755),d=o(93010),h=o(17115);let p=e=>{let n=(0,t.B)(e),o=(0,s.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,i.m)(o.value,.1),hover:(0,i.m)(o.value,.15),border:`${(0,l.h)(1)} solid ${o.value}`,color:(0,a._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},u={type:"code",component:function(){return(0,r.jsx)(c.M2,{theme:{variantColorResolver:p},children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(h.z,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,r.jsx)(h.z,{color:"orange",variant:"light",children:"Orange light button"}),(0,r.jsx)(h.z,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
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
`}},62119:function(e,n,o){"use strict";o.d(n,{Q:function(){return N}});var r=o(52322),t=o(2784),s=o(40489),i=o(61183),l=o(58898),a=o(11200),c=o(82027),d=o(38483),h=o(46690),p=o(63409),u=o(28559),m=o(38405),x=o(893),j=o(54813),f=o(87385),g=o(9341),b=o(56179);function v({expanded:e,style:n,...o}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,l.h)(18),height:(0,l.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),(0,r.jsx)("path",{d:"M9 17l1 0"}),(0,r.jsx)("path",{d:"M14 17l1 0"}),(0,r.jsx)("path",{d:"M19 17l1 0"}),(0,r.jsx)("path",{d:"M4 17l1 0"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),(0,r.jsx)("path",{d:"M9 7l1 0"}),(0,r.jsx)("path",{d:"M14 7l1 0"}),(0,r.jsx)("path",{d:"M19 7l1 0"}),(0,r.jsx)("path",{d:"M4 7l1 0"})]})})}function y({fileIcon:e,fileName:n,getFileIcon:o,className:t,style:s}){return e?(0,r.jsx)("span",{className:t,style:s,children:e}):o&&n?(0,r.jsx)("span",{className:t,style:s,children:o(n)}):null}var w=o(44144),S=o(989);let C={...w.Z,root:(0,s.Z)(w.Z.root,S.Z.theme)},T={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,l.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},k=(0,a.Z)((e,{maxCollapsedHeight:n})=>({root:{"--ch-max-collapsed-height":(0,l.h)(n)}})),N=(0,c.d5)((e,n)=>{let o=(0,d.w)("CodeHighlightTabs",T,e),{classNames:s,className:l,style:a,styles:c,unstyled:w,vars:S,children:N,code:I,defaultActiveTab:P,activeTab:z,onTabChange:M,withHeader:B,copiedLabel:D,copyLabel:L,getFileIcon:E,maxCollapsedHeight:A,expanded:R,defaultExpanded:G,onExpandedChange:F,expandCodeLabel:V,collapseCodeLabel:_,withExpandButton:X,withCopyButton:H,mod:O,...Z}=o,W=(0,h.y)({name:"CodeHighlightTabs",props:o,classes:C,className:l,style:a,classNames:s,styles:c,unstyled:w,vars:S,varsResolver:k}),[Y,$]=(0,g.C)({defaultValue:P,value:z,finalValue:0,onChange:M}),[q,U]=(0,g.C)({defaultValue:G,value:R,finalValue:!0,onChange:F}),K=Array.isArray(I)?I:[I],Q=K[Y],J=i.Z.highlight(Q.code.trim(),{language:Q.language||"plaintext"}).value,ee=K.map((e,n)=>(0,t.createElement)(p.k,{...W("file"),key:e.fileName,mod:{active:n===Y},onClick:()=>$(n)},(0,r.jsx)(y,{fileIcon:e.icon,getFileIcon:E,fileName:e.fileName,...W("fileIcon")}),(0,r.jsx)("span",{children:e.fileName})));return(0,r.jsxs)(u.x,{...W("root"),mod:[{collapsed:!q},O],ref:n,...Z,dir:"ltr",children:[B&&(0,r.jsxs)("div",{...W("header"),children:[(0,r.jsx)(m.x,{type:"never",dir:"ltr",offsetScrollbars:!1,children:(0,r.jsx)("div",{...W("files"),children:ee})}),(0,r.jsxs)("div",{...W("controls"),children:[X&&(0,r.jsx)(x.u,{label:q?_:V,fz:"sm",position:"left",children:(0,r.jsx)(j.A,{onClick:()=>U(!q),variant:"none","aria-label":q?_:V,...W("control"),children:(0,r.jsx)(v,{expanded:q})})}),H&&(0,r.jsx)(f.q,{value:Q.code.trim(),children:({copied:e,copy:n})=>(0,r.jsx)(x.u,{label:e?D:L,fz:"sm",position:"left",children:(0,r.jsx)(j.A,{onClick:n,variant:"none",...W("control"),"aria-label":e?D:L,children:(0,r.jsx)(b.T,{copied:e})})})})]})]}),(0,r.jsx)(m.x,{type:"auto",dir:"ltr",offsetScrollbars:!1,children:(0,r.jsx)(u.x,{...W("codeWrapper"),mod:{expanded:q},children:(0,r.jsx)("pre",{...W("pre"),children:(0,r.jsx)("code",{...W("code"),dangerouslySetInnerHTML:{__html:J}})})})}),(0,r.jsx)(p.k,{...W("showCodeButton"),mod:{hidden:q},onClick:()=>U(!0),children:V})]})});N.displayName="@mantine/core/CodeHighlightTabs",N.classes=C},56179:function(e,n,o){"use strict";o.d(n,{T:function(){return s}});var r=o(52322),t=o(58898);function s({copied:e,style:n,...o}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,t.h)(18),height:(0,t.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M5 12l5 5l10 -10"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,r.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})}s.displayName="@mantine/code-highlight/CopyIcon"},46325:function(e,n,o){"use strict";o.d(n,{p:function(){return u}});var r=o(52322);o(2784);var t=o(91482),s=o(11200),i=o(38483),l=o(46690),a=o(28559),c=o(82027),d={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let h={variant:"default"},p=(0,s.Z)((e,{radius:n})=>({root:{"--fieldset-radius":void 0===n?void 0:(0,t.H5)(n)}})),u=(0,c.d5)((e,n)=>{let o=(0,i.w)("Fieldset",h,e),{classNames:t,className:s,style:c,styles:u,unstyled:m,vars:x,legend:j,variant:f,children:g,...b}=o,v=(0,l.y)({name:"Fieldset",classes:d,props:o,className:s,style:c,classNames:t,styles:u,unstyled:m,vars:x,varsResolver:p});return(0,r.jsxs)(a.x,{component:"fieldset",ref:n,variant:f,...v("root",{variant:f}),...b,children:[j&&(0,r.jsx)("legend",{...v("legend",{variant:f}),children:j}),g]})});u.classes=d,u.displayName="@mantine/core/Fieldset"},69659:function(e,n,o){"use strict";o.d(n,{r:function(){return M}});var r=o(52322);o(2784);var t=o(11200),s=o(38483),i=o(46690),l=o(12063),a=o(28559),c=o(82027);let[d,h]=(0,o(89106).R)("Grid component was not found in tree");var p=o(40489),u=o(98446),m=o(40580),x=o(54541),j=o(32100),f=o(68755),g=o(9437);let b=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,v=(e,n,o)=>o||"auto"===e?"100%":"content"===e?"unset":b(e,n),y=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},w=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function S({span:e,order:n,offset:o,selector:t}){let s=(0,f.rZ)(),i=h(),l=i.breakpoints||s.breakpoints,a=void 0===(0,j.v)(e)?12:(0,j.v)(e),c=(0,m.L)({"--col-order":j.v(n)?.toString(),"--col-flex-grow":y(a,i.grow),"--col-flex-basis":b(a,i.columns),"--col-width":"content"===a?"auto":void 0,"--col-max-width":v(a,i.columns,i.grow),"--col-offset":w((0,j.v)(o),i.columns)}),d=(0,u.X)(l).reduce((r,t)=>(r[t]||(r[t]={}),"object"==typeof n&&void 0!==n[t]&&(r[t]["--col-order"]=n[t]?.toString()),"object"==typeof e&&void 0!==e[t]&&(r[t]["--col-flex-grow"]=y(e[t],i.grow),r[t]["--col-flex-basis"]=b(e[t],i.columns),r[t]["--col-width"]="content"===e[t]?"auto":void 0,r[t]["--col-max-width"]=v(e[t],i.columns,i.grow)),"object"==typeof o&&void 0!==o[t]&&(r[t]["--col-offset"]=w(o[t],i.columns)),r),{}),p=(0,x.I)((0,u.X)(d),l).filter(e=>(0,u.X)(d[e.value]).length>0).map(e=>({query:"container"===i.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:d[e.value]}));return(0,r.jsx)(g.f,{styles:c,media:"container"===i.type?void 0:p,container:"container"===i.type?p:void 0,selector:t})}var C={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let T={span:12},k=(0,c.d5)((e,n)=>{let{classNames:o,className:t,style:i,styles:c,vars:d,span:u,order:m,offset:x,...j}=(0,s.w)("GridCol",T,e),f=h(),g=(0,l.m)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{selector:`.${g}`,span:u,order:m,offset:x}),(0,r.jsx)(a.x,{ref:n,...f.getStyles("col",{className:(0,p.Z)(t,g),style:i,classNames:o,styles:c}),...j})]})});k.classes=C,k.displayName="@mantine/core/GridCol";var N=o(91482);function I({gutter:e,selector:n,breakpoints:o,type:t}){let s=(0,f.rZ)(),i=o||s.breakpoints,l=(0,m.L)({"--grid-gutter":(0,N.bG)((0,j.v)(e))}),a=(0,u.X)(i).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--grid-gutter"]=(0,N.bG)(e[o])),n),{}),c=(0,x.I)((0,u.X)(a),i).filter(e=>(0,u.X)(a[e.value]).length>0).map(e=>({query:"container"===t?`mantine-grid (min-width: ${i[e.value]})`:`(min-width: ${i[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(g.f,{styles:l,media:"container"===t?void 0:c,container:"container"===t?c:void 0,selector:n})}let P={gutter:"md",grow:!1,columns:12},z=(0,t.Z)((e,{justify:n,align:o,overflow:r})=>({root:{"--grid-justify":n,"--grid-align":o,"--grid-overflow":r}})),M=(0,c.d5)((e,n)=>{let o=(0,s.w)("Grid",P,e),{classNames:t,className:c,style:h,styles:p,unstyled:u,vars:m,grow:x,gutter:j,columns:f,align:g,justify:b,children:v,breakpoints:y,type:w,...S}=o,T=(0,i.y)({name:"Grid",classes:C,props:o,className:c,style:h,classNames:t,styles:p,unstyled:u,vars:m,varsResolver:z}),k=(0,l.m)();return"container"===w&&y?(0,r.jsxs)(d,{value:{getStyles:T,grow:x,columns:f||12,breakpoints:y,type:w},children:[(0,r.jsx)(I,{selector:`.${k}`,...o}),(0,r.jsx)("div",{...T("container"),children:(0,r.jsx)(a.x,{ref:n,...T("root",{className:k}),...S,children:(0,r.jsx)("div",{...T("inner"),children:v})})})]}):(0,r.jsxs)(d,{value:{getStyles:T,grow:x,columns:f||12,breakpoints:y,type:w},children:[(0,r.jsx)(I,{selector:`.${k}`,...o}),(0,r.jsx)(a.x,{ref:n,...T("root",{className:k}),...S,children:(0,r.jsx)("div",{...T("inner"),children:v})})]})});M.classes=C,M.displayName="@mantine/core/Grid",M.Col=k},42697:function(e,n,o){"use strict";o.d(n,{Y:function(){return T}});var r=o(52322),t=o(2784),s=o(40489),i=o(9462),l=o(9341),a=o(82692),c=o(70837),d=o(91482),h=o(11200),p=o(51477),u=o(46690),m=o(38483),x=o(82027),j=o(73063),f=o(63409);function g({direction:e,style:n,...o}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...n},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var b={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let v=/^(0\.0*|-0(\.0*)?)$/,y=/^-?0\d+(\.\d+)?\.?$/;function w(e,n,o){return void 0===e||(void 0===n||e>=n)&&(void 0===o||e<=o)}let S={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},C=(0,h.Z)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,d.ap)(n,"ni-chevron-size")}})),T=(0,x.d5)((e,n)=>{let o=(0,m.w)("NumberInput",S,e),{className:d,classNames:h,styles:x,unstyled:T,vars:k,onChange:N,onValueChange:I,value:P,defaultValue:z,max:M,min:B,step:D,hideControls:L,rightSection:E,isAllowed:A,clampBehavior:R,onBlur:G,allowDecimal:F,decimalScale:V,onKeyDown:_,onKeyDownCapture:X,handlersRef:H,startValue:O,disabled:Z,rightSectionPointerEvents:W,allowNegative:Y,readOnly:$,size:q,rightSectionWidth:U,stepHoldInterval:K,stepHoldDelay:Q,allowLeadingZeros:J,withKeyboardEvents:ee,trimLeadingZeroesOnBlur:en,...eo}=o,er=(0,u.y)({name:"NumberInput",classes:b,props:o,classNames:h,styles:x,unstyled:T,vars:k,varsResolver:C}),{resolvedClassNames:et,resolvedStyles:es}=(0,p.h)({classNames:h,styles:x,props:o}),[ei,el]=(0,l.C)({value:P,defaultValue:z,onChange:N}),ea=void 0!==Q&&void 0!==K,ec=(0,t.useRef)(null),ed=(0,t.useRef)(null),eh=(0,t.useRef)(0),ep=e=>{let n=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return n?Math.max(0,(n[1]?n[1].length:0)-(n[2]?+n[2]:0)):0},eu=e=>{ec.current&&void 0!==e&&ec.current.setSelectionRange(e,e)},em=(0,t.useRef)();em.current=()=>{let e;let n=Math.max(ep(ei),ep(D)),o=10**n;if("number"!=typeof ei||Number.isNaN(ei))e=(0,a.u)(O,B,M);else if(void 0!==M){let n=(Math.round(ei*o)+Math.round(D*o))/o;e=n<=M?n:M}else e=(Math.round(ei*o)+Math.round(D*o))/o;let r=e.toFixed(n);el(parseFloat(r)),I?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>eu(ec.current?.value.length),0)};let ex=(0,t.useRef)();ex.current=()=>{let e;let n=void 0!==B?B:Y?Number.MIN_SAFE_INTEGER:0,o=Math.max(ep(ei),ep(D)),r=10**o;if("number"!=typeof ei||Number.isNaN(ei))e=(0,a.u)(O,n,M);else{let o=(Math.round(ei*r)-Math.round(D*r))/r;e=void 0!==n&&o<n?n:o}let t=e.toFixed(o);el(parseFloat(t)),I?.({floatValue:parseFloat(t),formattedValue:t,value:t},{source:"decrement"}),setTimeout(()=>eu(ec.current?.value.length),0)},(0,c.kR)(H,{increment:em.current,decrement:ex.current});let ej=e=>{e?em.current():ex.current(),eh.current+=1},ef=e=>{if(ej(e),ea){let n="number"==typeof K?K:K(eh.current);ed.current=window.setTimeout(()=>ef(e),n)}},eg=(e,n)=>{e.preventDefault(),ec.current?.focus(),ej(n),ea&&(ed.current=window.setTimeout(()=>ef(n),Q))},eb=()=>{ed.current&&window.clearTimeout(ed.current),ed.current=null,eh.current=0},ev=(0,r.jsxs)("div",{...er("controls"),children:[(0,r.jsx)(f.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof ei&&void 0!==M&&ei>=M,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!0)},onPointerUp:eb,onPointerLeave:eb,children:(0,r.jsx)(g,{direction:"up"})}),(0,r.jsx)(f.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof ei&&void 0!==B&&ei<=B,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!1)},onPointerUp:eb,onPointerLeave:eb,children:(0,r.jsx)(g,{direction:"down"})})]});return(0,r.jsx)(j.M,{component:i.h3,allowNegative:Y,className:(0,s.Z)(b.root,d),size:q,...eo,readOnly:$,disabled:Z,value:ei,getInputRef:(0,c.Yx)(n,ec),onValueChange:(e,n)=>{var o,r;"event"===n.source&&el((o=e.floatValue,r=e.value,("number"==typeof o?!(o<Number.MAX_SAFE_INTEGER):!!Number.isNaN(Number(o)))||Number.isNaN(o)||!(14>r.toString().replace(".","").length)||""===r||v.test(e.value)||J&&y.test(e.value))?e.value:e.floatValue),I?.(e,n)},rightSection:L||$?E:E||ev,classNames:et,styles:es,unstyled:T,__staticSelector:"NumberInput",decimalScale:F?V:0,onKeyDown:e=>{_?.(e),!$&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),em.current()),"ArrowDown"===e.key&&(e.preventDefault(),ex.current()))},onKeyDownCapture:e=>{if(X?.(e),"Backspace"===e.key){let n=ec.current;0===n.selectionStart&&n.selectionStart===n.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eu(0),0))}},rightSectionPointerEvents:W??(Z?"none":void 0),rightSectionWidth:U??`var(--ni-right-section-width-${q||"sm"})`,allowLeadingZeros:J,onBlur:e=>{if(G?.(e),"blur"===R&&"number"==typeof ei&&(0,a.u)(ei,B,M)!==ei&&el((0,a.u)(ei,B,M)),en&&"string"==typeof ei&&15>ep(ei)){let e=ei.replace(/^0+/,""),n=parseFloat(e);el(Number.isNaN(n)||n>Number.MAX_SAFE_INTEGER?e:(0,a.u)(n,B,M))}},isAllowed:e=>"strict"===R?A?A(e)&&w(e.floatValue,B,M):w(e.floatValue,B,M):!A||A(e)})});T.classes={...j.M.classes,...b},T.displayName="@mantine/core/NumberInput"},26802:function(e,n,o){"use strict";o.d(n,{M:function(){return w}});var r=o(52322);o(2784);var t=o(38483),s=o(46690),i=o(12063),l=o(28559),a=o(82027),c=o(98446),d=o(65744),h=o(40580),p=o(91482),u=o(54541),m=o(32100),x=o(68755),j=o(9437);function f({spacing:e,verticalSpacing:n,cols:o,selector:t}){let s=(0,x.rZ)(),i=void 0===n?e:n,l=(0,h.L)({"--sg-spacing-x":(0,p.bG)((0,m.v)(e)),"--sg-spacing-y":(0,p.bG)((0,m.v)(i)),"--sg-cols":m.v(o)?.toString()}),a=(0,c.X)(s.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,p.bG)(e[r])),"object"==typeof i&&void 0!==i[r]&&(n[r]["--sg-spacing-y"]=(0,p.bG)(i[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),d=(0,u.I)((0,c.X)(a),s.breakpoints).filter(e=>(0,c.X)(a[e.value]).length>0).map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(j.f,{styles:l,media:d,selector:t})}function g(e){return"object"==typeof e&&null!==e?(0,c.X)(e):[]}function b({spacing:e,verticalSpacing:n,cols:o,selector:t}){let s=void 0===n?e:n,i=(0,h.L)({"--sg-spacing-x":(0,p.bG)((0,m.v)(e)),"--sg-spacing-y":(0,p.bG)((0,m.v)(s)),"--sg-cols":m.v(o)?.toString()}),l=function({spacing:e,verticalSpacing:n,cols:o}){return Array.from(new Set([...g(e),...g(n),...g(o)])).sort((e,n)=>(0,d.px)(e)-(0,d.px)(n))}({spacing:e,verticalSpacing:n,cols:o}),a=l.reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,p.bG)(e[r])),"object"==typeof s&&void 0!==s[r]&&(n[r]["--sg-spacing-y"]=(0,p.bG)(s[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),c=l.map(e=>({query:`simple-grid (min-width: ${e})`,styles:a[e]}));return(0,r.jsx)(j.f,{styles:i,container:c,selector:t})}var v={container:"m_925c2d2c",root:"m_2415a157"};let y={cols:1,spacing:"md",type:"media"},w=(0,a.d5)((e,n)=>{let o=(0,t.w)("SimpleGrid",y,e),{classNames:a,className:c,style:d,styles:h,unstyled:p,vars:u,cols:m,verticalSpacing:x,spacing:j,type:g,...w}=o,S=(0,s.y)({name:"SimpleGrid",classes:v,props:o,className:c,style:d,classNames:a,styles:h,unstyled:p,vars:u}),C=(0,i.m)();return"container"===g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{...o,selector:`.${C}`}),(0,r.jsx)("div",{...S("container"),children:(0,r.jsx)(l.x,{ref:n,...S("root",{className:C}),...w})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{...o,selector:`.${C}`}),(0,r.jsx)(l.x,{ref:n,...S("root",{className:C}),...w})]})});w.classes=v,w.displayName="@mantine/core/SimpleGrid"}},function(e){e.O(0,[61177,9462,26601,66748,11340,61324,77413,82605,92888,49774,40179],function(){return e(e.s=24952)}),_N_E=e.O()}]);
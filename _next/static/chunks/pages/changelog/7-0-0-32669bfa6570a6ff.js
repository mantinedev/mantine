(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33544],{19786:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])},46037:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return t(50083)}])},50083:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var o=t(24246),r=t(71670),s=t(8671),l=t(26731),i=t(9341),a=t(63605),c=t(13726),d=t(48606),h=t(77417),m=t(70774),p=t(12375),u=t(60480),x=t(91880),f=t(21925),j=t(85869),g=t(49641),b=t(21963),v=t(61804),y=t(36159),w=t(49785),E=t(21836),C=t(110),S=t(45679),T=t(46378),k=t(16584),I=t(62144),N=t(21109),z=t(3916),P=t(54568);let B=(0,z.A)(P.us.Changelog700);function M(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{DataTable:t,Demo:z}=n;return t||L("DataTable",!0),z||L("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,o.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,o.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,o.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,o.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,o.jsx)(n.p,{children:"Important breaking changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,o.jsxs)(n.li,{children:["Components no longer support ",(0,o.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,o.jsx)(n.code,{children:"className"})," or ",(0,o.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It is now recommended to use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),", follow the ",(0,o.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,o.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,o.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,o.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,o.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,o.jsx)(n.code,{children:"colorScheme"})," value is ",(0,o.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,o.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if the user prefers light or dark color scheme."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"auto"})," is not the default value. You need to set it manually to enable system color scheme support\nboth on ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and in ",(0,o.jsx)(n.a,{href:"/theming/color-schemes#colorschemescript",children:"ColorSchemeScript"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript, MantineProvider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <ColorSchemeScript defaultColorScheme="auto" />\n      <MantineProvider defaultColorScheme="auto">\n        <App />\n      </MantineProvider>\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with a built-in color scheme manager.\nIt is no longer required to use any other components to set up color scheme logic.\nColor scheme can be changed with ",(0,o.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,o.jsx)(z,{data:l.U}),"\n",(0,o.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,o.jsxs)(n.p,{children:["It is also recommended to use ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,o.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,o.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,o.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,o.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,o.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,o.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,o.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To achieve that, just do not import\n",(0,o.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,o.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,o.jsxs)(n.p,{children:["All components that support ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," or ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," now have a static ",(0,o.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput, MantineProvider, createTheme } from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      styles: (theme, props) => ({\n        input: {\n          fontSize: props.size === 'compact' ? theme.fontSizes.sm : undefined,\n        }\n      })\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,o.jsxs)(n.p,{children:["You can now get component props in ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,o.jsx)(z,{data:i.B}),"\n",(0,o.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:["You can now customize components ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,o.jsx)(z,{data:a.g}),"\n",(0,o.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,o.jsxs)(n.p,{children:["All components now have ",(0,o.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if the component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,o.jsx)(z,{data:c.j}),"\n",(0,o.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,o.jsx)(n.p,{children:"There are multiple ways to customize component sizes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["With ",(0,o.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,o.jsxs)(n.li,{children:["With component ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,o.jsxs)(n.li,{children:["With ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Example of customizing ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,o.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,o.jsx)(z,{data:d.R}),"\n",(0,o.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents now support custom variants with ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,o.jsx)(z,{data:h.D}),"\n",(0,o.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,o.jsxs)(n.p,{children:["It is now possible to scale ",(0,o.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,o.jsx)(n.code,{children:"html"}),"/",(0,o.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you would like to set ",(0,o.jsx)(n.code,{children:"html"})," font-size to ",(0,o.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,o.jsx)(n.code,{children:"scale"})," to ",(0,o.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,o.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,o.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,o.jsxs)(n.p,{children:["All components that support ",(0,o.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Key of ",(0,o.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,o.jsx)(n.code,{children:"blue"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,o.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,o.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,o.jsx)(n.code,{children:"#fff"}),", ",(0,o.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,o.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,o.jsx)(z,{data:m.m}),"\n",(0,o.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,o.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,o.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(t,{head:["Key","Class"],data:Object.keys(s.z.classes).map(e=>[e,s.z.classes[e]])}),"\n",(0,o.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values are used in the ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,o.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,o.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,o.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,o.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows customizing component colors per variant"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,o.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component, which should be used to configure the direction of the application.\n",(0,o.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to set up additional plugins. See ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,o.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. The minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks, which are available only in React 18."]}),"\n",(0,o.jsx)(n.h2,{id:"left-and-right-section",children:"left and right section"}),"\n",(0,o.jsxs)(n.p,{children:["Components that previously had ",(0,o.jsx)(n.code,{children:"rightSection"})," and ",(0,o.jsx)(n.code,{children:"icon"})," props, now use ",(0,o.jsx)(n.code,{children:"leftSection"})," instead of ",(0,o.jsx)(n.code,{children:"icon"}),".\nExample of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," sections:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="left" rightSection="right">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"numberinput-changes",children:"NumberInput changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"})," was migrated to ",(0,o.jsx)(n.a,{href:"https://s-yadav.github.io/react-number-format/",children:"react-number-format"}),".\nIt now supports more features and has improvements in cursor position management.\nDue to migration, some of the props were renamed – follow the ",(0,o.jsx)(n.a,{href:"/core/number-input",children:"documentation"})," to learn about the changes."]}),"\n",(0,o.jsx)(z,{data:p.C}),"\n",(0,o.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,o.jsx)(z,{data:u.g}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,o.jsx)(n.code,{children:"theme.loader"})," property –\nit is also now possible to add custom loaders on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),".\nSpecified ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,o.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,o.jsx)(z,{data:x.T}),"\n",(0,o.jsx)(n.h2,{id:"progress-changes",children:"Progress changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/progress",children:"Progress"})," component now supports compound components pattern.\nAdvanced features that were previously implemented in ",(0,o.jsx)(n.a,{href:"/core/progress",children:"Progress"})," are now supposed to be implemented with\ncompound components instead."]}),"\n",(0,o.jsx)(z,{data:f.I}),"\n",(0,o.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,o.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,o.jsx)(n.code,{children:"Table.Tr"}),", ",(0,o.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,o.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,o.jsxs)(n.li,{children:["New props: ",(0,o.jsx)(n.code,{children:"borderColor"}),", ",(0,o.jsx)(n.code,{children:"withRowBorders"}),", ",(0,o.jsx)(n.code,{children:"stripedColor"}),", ",(0,o.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,o.jsx)(n.code,{children:"fz"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.code,{children:"Table.ScrollContainer"})," component to create scrollable table"]}),"\n"]}),"\n",(0,o.jsx)(z,{data:j.j}),"\n",(0,o.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,o.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,o.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,o.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,o.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,o.jsx)(n.code,{children:"gap"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Group"})," now supports new ",(0,o.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows customizing how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,o.jsx)(z,{data:g.j}),"\n",(0,o.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Styles API selector ",(0,o.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,o.jsx)(n.code,{children:"list"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,o.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"onChange"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Tabs.List"})," ",(0,o.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,o.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,o.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"leftIcon"})," and ",(0,o.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,o.jsx)(n.code,{children:"leftSection"})," and ",(0,o.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,o.jsx)(n.code,{children:"tt"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered in the center to prevent layout shifts"]}),"\n",(0,o.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"appshell-changes",children:"AppShell changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," component was completely rewritten, it now supports more features:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," now uses compound components pattern: ",(0,o.jsx)(n.code,{children:"Navbar"}),", ",(0,o.jsx)(n.code,{children:"Aside"}),", ",(0,o.jsx)(n.code,{children:"Header"})," and ",(0,o.jsx)(n.code,{children:"Footer"})," are no longer exported from ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package. Instead, use ",(0,o.jsx)(n.code,{children:"AppShell.Navbar"}),", ",(0,o.jsx)(n.code,{children:"AppShell.Aside"}),", etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," now supports animations when navbar/aside are opened/closed"]}),"\n",(0,o.jsx)(n.li,{children:"Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop"}),"\n",(0,o.jsx)(n.li,{children:"Header/footer can now be collapsed the same way as navbar/aside. For example, the header can be collapsed based on scroll position or direction."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," no longer supports ",(0,o.jsx)(n.code,{children:"fixed"})," prop – all components have ",(0,o.jsx)(n.code,{children:"position: fixed"})," styles, static positioning is no longer supported"]}),"\n",(0,o.jsxs)(n.li,{children:["The documentation was updated, it now includes ",(0,o.jsx)(n.a,{href:"/app-shell?e=BasicAppShell",children:"10+ examples on a separate page"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"simplegrid-changes",children:"SimpleGrid changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," now uses object format to define grid breakpoints and spacing,\nit works the same way as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(z,{data:b.j}),"\n",(0,o.jsx)(n.h2,{id:"grid-changes",children:"Grid changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/grid",children:"Grid"})," now uses object format in ",(0,o.jsx)(n.code,{children:"gutter"}),", ",(0,o.jsx)(n.code,{children:"offset"}),", ",(0,o.jsx)(n.code,{children:"span"})," and order props,\nall props now work the same way as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(z,{data:v.j}),"\n",(0,o.jsx)(n.h2,{id:"image-changes",children:"Image changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/image",children:"Image"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Image"})," component no longer includes ",(0,o.jsx)(n.code,{children:"figure"})," and other associated elements"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"caption"})," prop is no longer available"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," props are replaced with ",(0,o.jsx)(n.code,{children:"w"})," and ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})]}),"\n",(0,o.jsx)(n.li,{children:"Placeholder functionality was replaced with fallback image"}),"\n"]}),"\n",(0,o.jsx)(z,{data:y.t}),"\n",(0,o.jsx)(n.h2,{id:"spotlight-changes",children:"Spotlight changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The logic is no longer based on React context"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SpotlightProvider"})," was renamed to ",(0,o.jsx)(n.code,{children:"Spotlight"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useSpotlight"})," hook was removed, use ",(0,o.jsx)(n.code,{children:"spotlight"})," object instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"actions"})," prop now uses a different data format"]}),"\n",(0,o.jsx)(n.li,{children:"It is now possible to have multiple spotlights in the same app"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Spotlight"})," component now uses compound components pattern for advanced customization"]}),"\n"]}),"\n",(0,o.jsx)(z,{data:w.I}),"\n",(0,o.jsx)(n.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/x/carousel",children:"Carousel"})," now uses object format for responsive values in\n",(0,o.jsx)(n.code,{children:"slideSize"})," and ",(0,o.jsx)(n.code,{children:"slideGap"})," props instead of ",(0,o.jsx)(n.code,{children:"breakpoints"})," prop:"]}),"\n",(0,o.jsx)(z,{data:E.A}),"\n",(0,o.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,o.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,o.jsx)(n.a,{href:"/x/code-highlight",children:"The new package"})," uses ",(0,o.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,o.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,o.jsx)(z,{data:C.H}),"\n",(0,o.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,o.jsx)(z,{data:S.j}),"\n",(0,o.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,o.jsxs)(n.p,{children:["The new ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,o.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,o.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,o.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,o.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,o.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find 50+ ",(0,o.jsx)(n.code,{children:"Combobox"})," examples on ",(0,o.jsx)(n.a,{href:"/combobox",children:"this page"}),"."]}),"\n",(0,o.jsx)(z,{data:T.Y}),"\n",(0,o.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,o.jsx)(z,{data:k.a}),"\n",(0,o.jsx)(n.h2,{id:"witherrorstyles-prop",children:"withErrorStyles prop"}),"\n",(0,o.jsxs)(n.p,{children:["All inputs now support ",(0,o.jsx)(n.code,{children:"withErrorStyles"})," prop, which allows removing error styles from the input.\nIt can be used to apply custom error styles without override, or use other techniques to\nindicate error state. For example, it can be used to render an icon in the right section:"]}),"\n",(0,o.jsx)(z,{data:I.v}),"\n",(0,o.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components now support ",(0,o.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,o.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"}),", ",(0,o.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,o.jsx)(z,{data:N.n}),"\n",(0,o.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/dates/dates-provider",children:"DatesProvider"})," now supports setting timezone"]}),"\n",(0,o.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,o.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/x/notifications",children:"Notifications system"})," now exports ",(0,o.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," component has new design"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,o.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,o.jsx)(n.code,{children:"mainAxis"})," and ",(0,o.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,o.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,o.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,o.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,o.jsx)(n.code,{children:"hover"})," (default), ",(0,o.jsx)(n.code,{children:"always"})," or ",(0,o.jsx)(n.code,{children:"never"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,o.jsx)(n.code,{children:"target"})," prop, use ",(0,o.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," component no longer supports ",(0,o.jsx)(n.code,{children:"target"})," prop, use ",(0,o.jsx)(n.code,{children:"portalProps"})," instead: ",(0,o.jsx)(n.code,{children:"portalProps={{ target: '.your-selector' }}"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,o.jsx)(n.code,{children:"sizes"})," prop, use ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,o.jsx)(n.a,{href:"/theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,o.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,o.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,o.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,o.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,o.jsx)(n.code,{children:"<p />"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,o.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,o.jsx)(n.code,{children:"color"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,o.jsx)(n.code,{children:"width"})," prop, use ",(0,o.jsx)(n.code,{children:"w"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,o.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"gap"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,o.jsx)(n.code,{children:"Input"})," based components ",(0,o.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,o.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"type"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,o.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,o.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows setting CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,o.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,o.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,o.jsx)(n.code,{children:"opacity"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,o.jsx)(n.code,{children:"underline"}),", ",(0,o.jsx)(n.code,{children:"color"}),", ",(0,o.jsx)(n.code,{children:"strikethrough"}),", ",(0,o.jsx)(n.code,{children:"italic"}),", ",(0,o.jsx)(n.code,{children:"transform"}),", ",(0,o.jsx)(n.code,{children:"align"})," and ",(0,o.jsx)(n.code,{children:"weight"})," prop – use ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,o.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"ref"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"})," values in ",(0,o.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,o.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/chip",children:"Chip"})," component now supports custom check icon"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/password-input",children:"PasswordInput"})," no longer supports ",(0,o.jsx)(n.code,{children:"visibilityToggleLabel"})," and ",(0,o.jsx)(n.code,{children:"toggleTabIndex"})," props, use ",(0,o.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})," no longer supports ",(0,o.jsx)(n.code,{children:"breakpoint"})," prop, you can apply responsive styles with Styles API"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/color-input",children:"ColorInput"})," no longer supports ",(0,o.jsx)(n.code,{children:"dropdownZIndex"}),", ",(0,o.jsx)(n.code,{children:"transitionProps"}),", ",(0,o.jsx)(n.code,{children:"withinPortal"}),", ",(0,o.jsx)(n.code,{children:"portalProps"})," and ",(0,o.jsx)(n.code,{children:"shadow"})," props, you can now pass these props with ",(0,o.jsx)(n.code,{children:"popoverProps"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"})," props are now grouped by the component they are passed down to: ",(0,o.jsx)(n.code,{children:"overlayProps"}),", ",(0,o.jsx)(n.code,{children:"loaderProps"})," and ",(0,o.jsx)(n.code,{children:"transitionProps"})," now replace props that were previously passed to ",(0,o.jsx)(n.code,{children:"LoadingOverlay"})," directly"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/x/dropzone",children:"Dropzone"})," component no longer supports ",(0,o.jsx)(n.code,{children:"padding"})," prop, use ",(0,o.jsx)(n.code,{children:"p"})," style prop instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/dialog",children:"Dialog"})," component now supports all ",(0,o.jsx)(n.a,{href:"/core/paper",children:"Paper"})," and ",(0,o.jsx)(n.a,{href:"/core/affix",children:"Affix"})," props, ",(0,o.jsx)(n.code,{children:"transitionDuration"}),", ",(0,o.jsx)(n.code,{children:"transition"})," and other transition related props were replaced with ",(0,o.jsx)(n.code,{children:"transitionProps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"}),", ",(0,o.jsx)(n.a,{href:"/core/radio",children:"Radio"}),", ",(0,o.jsx)(n.a,{href:"/core/chip",children:"Chip"})," and ",(0,o.jsx)(n.a,{href:"/core/switch",children:"Switch"})," components now support ",(0,o.jsx)(n.code,{children:"rootRef"})," prop which allows using them with ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," and other similar components"]}),"\n"]})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(B,{...e,children:(0,o.jsx)(M,{...e})})}function L(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},110:function(e,n,t){"use strict";t.d(n,{H:function(){return h}});var o=t(27378),r=t(61209),s=t(8858),l=t(96850);let i=`
function Button() {
  return <button>Click me</button>;
}
`,a=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,c=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${i}\`;

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
`;function d(e){return e.endsWith(".ts")||e.endsWith(".tsx")?o.createElement(s.K,{size:18}):e.endsWith(".css")?o.createElement(l.L,{size:18}):null}let h={type:"code",component:function(){return o.createElement(r.Q,{getFileIcon:d,code:[{fileName:"Button.tsx",code:i,language:"tsx"},{fileName:"Button.module.css",code:a,language:"scss"}]})},code:c}},46378:function(e,n,t){"use strict";t.d(n,{Y:function(){return d}});var o=t(27378),r=t(54526),s=t(45608),l=t(23163),i=t(42487);let a=`
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
`,c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,r.K)({onDropdownClose:()=>e.resetSelectedOption()}),[n,t]=(0,o.useState)(null),a=c.map(e=>o.createElement(s.h.Option,{value:e,key:e},e));return o.createElement(s.h,{store:e,onOptionSubmit:n=>{t(n),e.closeDropdown()}},o.createElement(s.h.Target,null,o.createElement(l.M,{component:"button",type:"button",pointer:!0,rightSection:o.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>e.toggleDropdown()},n||o.createElement(i.I.Placeholder,null,"Pick value"))),o.createElement(s.h.Dropdown,null,o.createElement(s.h.Options,null,a)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:a}},45679:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var o=t(27378),r=t(40106),s=t(7033);let l=`
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,i={type:"configurator",component:function(e){return o.createElement(r.p,{legend:"Personal information",...e},o.createElement(s.o,{label:"Your name",placeholder:"Your name"}),o.createElement(s.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:l,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},61804:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var o=t(27378),r=t(13110),s=t(55956);let l=`
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
`,i={type:"code",code:l,component:function(){return o.createElement(r.r,null,o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"1"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"2"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"3"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"4"))}}},55956:function(e,n,t){"use strict";t.d(n,{Y:function(){return s}});var o=t(27378),r=t(13110);function s({children:e,...n}){return o.createElement(r.r.Col,{...n},o.createElement("div",{className:"m-548ba23a"},o.createElement("div",{className:"m-60a4592e"},e)))}},49641:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var o=t(27378),r=t(22971),s=t(8671);let l=`
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
`,i={type:"configurator",component:function(e){return o.createElement(r.Z,{...e},o.createElement(s.z,{variant:"default"},"First"),o.createElement(s.z,{variant:"default"},"Second"),o.createElement(s.z,{variant:"default"},"Third"))},code:l,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},36159:function(e,n,t){"use strict";t.d(n,{t:function(){return l}});var o=t(27378),r=t(58818);let s=`
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
`,l={type:"code",component:function(){return o.createElement(r.E,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:s}},62144:function(e,n,t){"use strict";t.d(n,{v:function(){return a}});var o=t(27378),r=t(19786),s=t(7033),l=t(71078);let i=`
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
`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.o,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),o.createElement(s.o,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),o.createElement(s.o,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:o.createElement(r.Z,{style:{width:(0,l.h)(20),height:(0,l.h)(20)},color:"var(--mantine-color-error)"})}))},code:i,maxWidth:340,centered:!0}},60480:function(e,n,t){"use strict";t.d(n,{g:function(){return s}});var o=t(42029);let r=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:o.a,code:r,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},91880:function(e,n,t){"use strict";t.d(n,{T:function(){return c}});var o=t(27378),r=t(2256),s=t(42029);let l=(0,o.forwardRef)(({style:e,...n},t)=>o.createElement("svg",{...n,ref:t,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},o.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},o.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},o.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},o.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"22",cy:"22",r:"8"},o.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))),i=`
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
));`,a=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: 'ring',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,c={type:"code",component:function(){return o.createElement(r.M2,{theme:{components:{Loader:s.a.extend({defaultProps:{loaders:{...s.a.defaultLoaders,ring:l},type:"ring"}})}}},o.createElement(s.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:a},{fileName:"RingLoader.tsx",language:"tsx",code:i}]}},12375:function(e,n,t){"use strict";t.d(n,{C:function(){return l}});var o=t(27378),r=t(62339);let s=`
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
`,l={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(r.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),o.createElement(r.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:s,centered:!0,maxWidth:340}},21925:function(e,n,t){"use strict";t.d(n,{I:function(){return l}});var o=t(27378),r=t(30454);let s=`
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
`,l={type:"code",component:function(){return o.createElement(r.E.Root,{size:"xl"},o.createElement(r.E.Section,{value:35,color:"cyan"},o.createElement(r.E.Label,null,"Documents")),o.createElement(r.E.Section,{value:28,color:"pink"},o.createElement(r.E.Label,null,"Photos")),o.createElement(r.E.Section,{value:15,color:"orange"},o.createElement(r.E.Label,null,"Other")))},code:s}},21963:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var o=t(27378),r=t(37454),s=t(7946);let l=`
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
`,i={type:"code",component:function(){return o.createElement(r.M,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"}},s.a)},code:l}},7946:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});var o=t(27378),r=t(40624),s=t(56589),Text=t(26569);function l({className:e,children:n,...t}){return o.createElement(s.x,{className:(0,r.Z)("m-a4dc100e",e),...t},o.createElement(Text.x,{className:"m-f6c78959"},n))}let i=[,,,,,].fill(0).map((e,n)=>o.createElement(l,{key:n},n+1))},85869:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var o=t(27378),r=t(28862),s=t(91497);let l=`
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
`,i={type:"code",code:l,component:function(){let e=s.R.map(e=>o.createElement(r.i.Tr,{key:e.name},o.createElement(r.i.Td,null,e.position),o.createElement(r.i.Td,null,e.name),o.createElement(r.i.Td,null,e.symbol),o.createElement(r.i.Td,null,e.mass)));return o.createElement(r.i,null,o.createElement(r.i.Thead,null,o.createElement(r.i.Tr,null,o.createElement(r.i.Th,null,"Element position"),o.createElement(r.i.Th,null,"Element name"),o.createElement(r.i.Th,null,"Symbol"),o.createElement(r.i.Th,null,"Atomic mass"))),o.createElement(r.i.Tbody,null,e))}}},91497:function(e,n,t){"use strict";t.d(n,{R:function(){return o}});let o=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},49785:function(e,n,t){"use strict";t.d(n,{I:function(){return d}});var o=t(27378),r=t(27854),s=t(8671),l=t(95299),i=t(39700);let a=`
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
`,c=["Home","About us","Contacts","Blog","Careers","Terms of service"],d={type:"code",component:function(){let[e,n]=(0,o.useMemo)(l.Gv,[]),[t,a]=(0,o.useState)(""),d=c.filter(e=>e.toLowerCase().includes(t.toLowerCase().trim())).map(e=>o.createElement(i.$.Action,{key:e,label:e}));return o.createElement(o.Fragment,null,o.createElement(s.z,{onClick:n.open},"Open spotlight"),o.createElement(i.$.Root,{store:e,query:t,onQueryChange:a,shortcut:null},o.createElement(i.$.Search,{placeholder:"Search...",leftSection:o.createElement(r.Z,{stroke:1.5})}),o.createElement(i.$.ActionsList,null,d.length>0?d:o.createElement(i.$.Empty,null,"Nothing found..."))))},code:a,centered:!0}},9341:function(e,n,t){"use strict";t.d(n,{B:function(){return h}});var o=t(27378),r=t(40624),s=t(74369),l=t(7033),i=t(2256);let a=`
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
`,d=(0,s.j)({components:{TextInput:l.o.extend({classNames:(e,n)=>({label:(0,r.Z)({"m-686577e7":n.required}),input:(0,r.Z)({"m-933d67aa":n.error})})})}}),h={type:"code",component:function(){return o.createElement(i.M2,{theme:d},o.createElement(l.o,{required:!0,label:"Required input",placeholder:"Required input"}),o.createElement(l.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"}))},code:[{fileName:"Demo.tsx",code:a,language:"tsx"},{fileName:"Demo.module.css",code:c,language:"scss"}]}},13726:function(e,n,t){"use strict";t.d(n,{j:function(){return a}});var o=t(27378),r=t(42487),s={input:"m-93131372"};let l=`
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
`,i=`
.input {
  &[data-variant='underline'] {
    border-bottom: rem(2px) solid;
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
`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(r.I,{classNames:s,variant:"underline",placeholder:"Underline input"}),o.createElement(r.I,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:i,language:"scss"}]}},48606:function(e,n,t){"use strict";t.d(n,{R:function(){return d}});var o=t(27378),r=t(74369),s=t(42487),l=t(2256);let i=`
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
      padding-left: rem(28px);
      padding-right: rem(28px);
      height: rem(68px);
      font-size: rem(28px);
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: rem(10px);
      padding-right: rem(10px);
      height: rem(28px);
      font-size: rem(10px);
    }
  }
}
`,c=(0,r.j)({components:{Input:s.I.extend({classNames:{wrapper:"m-b4c95450",input:"m-2be5f2c7"}})}}),d={type:"code",component:function(){return o.createElement(l.M2,{theme:c},o.createElement(s.I,{placeholder:"Size XXL",size:"xxl"}),o.createElement(s.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:i,fileName:"Demo.tsx"},{language:"scss",code:a,fileName:"Demo.module.css"}]}},21109:function(e,n,t){"use strict";t.d(n,{n:function(){return i}});var o=t(27378),r=t(22971),s=t(8671);let l=`
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
`,i={type:"code",component:function(){return o.createElement(r.Z,{justify:"center"},o.createElement(s.z,{hiddenFrom:"sm",color:"orange"},"Hidden from sm"),o.createElement(s.z,{visibleFrom:"sm",color:"cyan"},"Visible from sm"),o.createElement(s.z,{visibleFrom:"md",color:"pink"},"Visible from md"))},code:l}},63605:function(e,n,t){"use strict";t.d(n,{g:function(){return d}});var o=t(27378),r=t(71078),s=t(8671),l=t(22971);let i=`
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
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}};s.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return o.createElement(l.Z,null,o.createElement(s.z,{vars:c,size:"xxl"},"XXL Button"),o.createElement(s.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:a,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},70774:function(e,n,t){"use strict";t.d(n,{m:function(){return a}});var o=t(27378),r=t(26569),s=t(22971),l=t(8671);let i=`
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

`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(r.x,{size:"sm",mb:5,fw:500},"Filled variant"),o.createElement(s.Z,null,o.createElement(l.z,{color:"cyan"},"Theme color"),o.createElement(l.z,{color:"#1D72FE"},"Hex color")),o.createElement(r.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),o.createElement(s.Z,null,o.createElement(l.z,{variant:"light",color:"cyan"},"Theme color"),o.createElement(l.z,{variant:"light",color:"#1D72FE"},"Hex color")),o.createElement(r.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),o.createElement(s.Z,null,o.createElement(l.z,{variant:"outline",color:"cyan"},"Theme color"),o.createElement(l.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:i}},26731:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var o=t(27378),r=t(27650),s=t(22971),l=t(8671);let i=`
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
`,a={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,r.X)();return o.createElement(s.Z,null,o.createElement(l.z,{onClick:()=>e("light")},"Light"),o.createElement(l.z,{onClick:()=>e("dark")},"Dark"),o.createElement(l.z,{onClick:()=>e("auto")},"Auto"),o.createElement(l.z,{onClick:n},"Clear"))},centered:!0,code:i}},77417:function(e,n,t){"use strict";t.d(n,{D:function(){return u}});var o=t(27378),r=t(61658),s=t(88193),l=t(91948),i=t(71078),a=t(97717),c=t(2256),d=t(22971),h=t(8671);let m=`
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
`,p=e=>{let n=(0,r.B)(e),t=(0,s.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return t.isThemeColor&&"lime"===t.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,l.m)(t.value,.1),hover:(0,l.m)(t.value,.15),border:`${(0,i.h)(1)} solid ${t.value}`,color:(0,a._)(t.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},u={type:"code",component:function(){return o.createElement(c.M2,{theme:{variantColorResolver:p}},o.createElement(d.Z,null,o.createElement(h.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(h.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(h.z,{variant:"danger"},"Danger button")))},centered:!0,code:m}},61209:function(e,n,t){"use strict";t.d(n,{Q:function(){return T}});var o=t(27378),r=t(40624),s=t(2688),l=t(71078),i=t(83453),a=t(20410),c=t(96739),d=t(6231),h=t(19397),m=t(56589),p=t(49849),u=t(99684),x=t(84246),f=t(78131),j=t(58675),g=t(77199);function b({expanded:e,style:n,...t}){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,l.h)(18),height:(0,l.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...t},e?o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),o.createElement("path",{d:"M9 17l1 0"}),o.createElement("path",{d:"M14 17l1 0"}),o.createElement("path",{d:"M19 17l1 0"}),o.createElement("path",{d:"M4 17l1 0"})):o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),o.createElement("path",{d:"M9 7l1 0"}),o.createElement("path",{d:"M14 7l1 0"}),o.createElement("path",{d:"M19 7l1 0"}),o.createElement("path",{d:"M4 7l1 0"})))}function v({fileIcon:e,fileName:n,getFileIcon:t,className:r,style:s}){return e?o.createElement("span",{className:r,style:s},e):t&&n?o.createElement("span",{className:r,style:s},t(n)):null}var y=t(42595),w=t(17441);let E={...y.Z,root:(0,r.Z)(y.Z.root,w.Z.theme)},C={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,l.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code"},S=(0,i.Z)((e,{maxCollapsedHeight:n})=>({root:{"--ch-max-collapsed-height":(0,l.h)(n)}})),T=(0,a.d)((e,n)=>{let t=(0,c.w)("CodeHighlightTabs",C,e),{classNames:r,className:l,style:i,styles:a,unstyled:y,vars:w,children:T,code:k,defaultActiveTab:I,activeTab:N,onTabChange:z,withHeader:P,copiedLabel:B,copyLabel:M,getFileIcon:D,maxCollapsedHeight:L,expanded:A,defaultExpanded:R,onExpandedChange:G,expandCodeLabel:F,collapseCodeLabel:V,withExpandButton:H,...X}=t,O=(0,d.y)({name:"CodeHighlightTabs",props:t,classes:E,className:l,style:i,classNames:r,styles:a,unstyled:y,vars:w,varsResolver:S}),[Z,W]=(0,j.C)({defaultValue:I,value:N,finalValue:0,onChange:z}),[q,Y]=(0,j.C)({defaultValue:R,value:A,finalValue:!0,onChange:G}),$=Array.isArray(k)?k:[k],_=$[Z],U=s.Z.highlight(_.code.trim(),{language:_.language||"plaintext"}).value,Q=$.map((e,n)=>o.createElement(h.k,{...O("file"),key:e.fileName,mod:{active:n===Z},onClick:()=>W(n)},o.createElement(v,{fileIcon:e.icon,getFileIcon:D,fileName:e.fileName,...O("fileIcon")}),o.createElement("span",null,e.fileName)));return o.createElement(m.x,{...O("root"),mod:{collapsed:!q},ref:n,...X,dir:"ltr"},P&&o.createElement("div",{...O("header")},o.createElement(p.x,{type:"never",dir:"ltr",offsetScrollbars:!1},o.createElement("div",{...O("files")},Q)),o.createElement("div",{...O("controls")},H&&o.createElement(u.u,{label:q?V:F,fz:"sm",position:"left"},o.createElement(x.A,{onClick:()=>Y(!q),variant:"none","aria-label":q?V:F,...O("control")},o.createElement(b,{expanded:q}))),o.createElement(f.q,{value:_.code.trim()},({copied:e,copy:n})=>o.createElement(u.u,{label:e?B:M,fz:"sm",position:"left"},o.createElement(x.A,{onClick:n,variant:"none",...O("control"),"aria-label":e?B:M},o.createElement(g.T,{copied:e})))))),o.createElement(p.x,{type:"auto",dir:"ltr",offsetScrollbars:!1},o.createElement(m.x,{...O("codeWrapper"),mod:{expanded:q}},o.createElement("pre",{...O("pre")},o.createElement("code",{...O("code"),dangerouslySetInnerHTML:{__html:U}})))),o.createElement(h.k,{...O("showCodeButton"),mod:{hidden:q},onClick:()=>Y(!0)},F))});T.displayName="@mantine/core/CodeHighlightTabs",T.classes=E},77199:function(e,n,t){"use strict";t.d(n,{T:function(){return s}});var o=t(27378),r=t(71078);function s({copied:e,style:n,...t}){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,r.h)(18),height:(0,r.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...t},e?o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M5 12l5 5l10 -10"})):o.createElement(o.Fragment,null,o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),o.createElement("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})))}s.displayName="@mantine/code-highlight/CopyIcon"},40106:function(e,n,t){"use strict";t.d(n,{p:function(){return p}});var o=t(27378),r=t(92082),s=t(83453),l=t(96739),i=t(6231),a=t(56589),c=t(20410),d={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"};let h={variant:"default"},m=(0,s.Z)((e,{radius:n})=>({root:{"--fieldset-radius":void 0===n?void 0:(0,r.H5)(n)}})),p=(0,c.d)((e,n)=>{let t=(0,l.w)("Fieldset",h,e),{classNames:r,className:s,style:c,styles:p,unstyled:u,vars:x,legend:f,variant:j,children:g,...b}=t,v=(0,i.y)({name:"Fieldset",classes:d,props:t,className:s,style:c,classNames:r,styles:p,unstyled:u,vars:x,varsResolver:m});return o.createElement(a.x,{component:"fieldset",ref:n,variant:j,...v("root",{variant:j}),...b},f&&o.createElement("legend",{...v("legend",{variant:j})},f),g)});p.classes=d,p.displayName="@mantine/core/Fieldset"},13110:function(e,n,t){"use strict";t.d(n,{r:function(){return B}});var o=t(27378),r=t(83453),s=t(96739),l=t(6231),i=t(40593),a=t(56589),c=t(20410),d=t(71656);let[h,m]=(0,d.R)("Grid component was not found in tree");var p=t(40624),u=t(53007),x=t(86689),f=t(31582),j=t(75001),g=t(2256),b=t(9889);let v=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,y=(e,n,t)=>t||"auto"===e?"100%":"content"===e?"unset":v(e,n),w=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},E=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function C({span:e,order:n,offset:t,selector:r}){let s=(0,g.rZ)(),l=m(),i=(0,j.v)(e),a=void 0===i?12:(0,j.v)(e),c=(0,x.L)({"--col-order":j.v(n)?.toString(),"--col-flex-grow":w(a,l.grow),"--col-flex-basis":v(a,l.columns),"--col-width":"content"===a?"auto":void 0,"--col-max-width":y(a,l.columns,l.grow),"--col-offset":E((0,j.v)(t),l.columns)}),d=(0,u.X)(s.breakpoints).reduce((o,r)=>(o[r]||(o[r]={}),"object"==typeof n&&void 0!==n[r]&&(o[r]["--col-order"]=n[r]?.toString()),"object"==typeof e&&void 0!==e[r]&&(o[r]["--col-flex-grow"]=w(e[r],l.grow),o[r]["--col-flex-basis"]=v(e[r],l.columns),o[r]["--col-width"]="content"===e[r]?"auto":void 0,o[r]["--col-max-width"]=y(e[r],l.columns,l.grow)),"object"==typeof t&&void 0!==t[r]&&(o[r]["--col-offset"]=E(t[r],l.columns)),o),{}),h=(0,f.I)((0,u.X)(d),s).filter(e=>(0,u.X)(d[e.value]).length>0),p=h.map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:d[e.value]}));return o.createElement(b.f,{styles:c,media:p,selector:r})}var S={root:"m-410352e9",inner:"m-dee7bd2f",col:"m-96bdd299"};let T={span:12},k=(0,c.d)((e,n)=>{let t=(0,s.w)("GridCol",T,e),{classNames:r,className:l,style:c,styles:d,vars:h,span:u,order:x,offset:f,...j}=t,g=m(),b=(0,i.m)();return o.createElement(o.Fragment,null,o.createElement(C,{selector:`.${b}`,span:u,order:x,offset:f}),o.createElement(a.x,{ref:n,...g.getStyles("col",{className:(0,p.Z)(l,b),style:c,classNames:r,styles:d}),...j}))});k.classes=S,k.displayName="@mantine/core/GridCol";var I=t(92082);function N({gutter:e,selector:n}){let t=(0,g.rZ)(),r=(0,x.L)({"--grid-gutter":(0,I.bG)((0,j.v)(e))}),s=(0,u.X)(t.breakpoints).reduce((n,t)=>(n[t]||(n[t]={}),"object"==typeof e&&void 0!==e[t]&&(n[t]["--grid-gutter"]=(0,I.bG)(e[t])),n),{}),l=(0,f.I)((0,u.X)(s),t).filter(e=>(0,u.X)(s[e.value]).length>0),i=l.map(e=>({query:`(min-width: ${t.breakpoints[e.value]})`,styles:s[e.value]}));return o.createElement(b.f,{styles:r,media:i,selector:n})}let z={gutter:"md",grow:!1,columns:12},P=(0,r.Z)((e,{justify:n,align:t,overflow:o})=>({root:{"--grid-justify":n,"--grid-align":t,"--grid-overflow":o}})),B=(0,c.d)((e,n)=>{let t=(0,s.w)("Grid",z,e),{classNames:r,className:c,style:d,styles:m,unstyled:p,vars:u,grow:x,gutter:f,columns:j,align:g,justify:b,children:v,...y}=t,w=(0,l.y)({name:"Grid",classes:S,props:t,className:c,style:d,classNames:r,styles:m,unstyled:p,vars:u,varsResolver:P}),E=(0,i.m)();return o.createElement(h,{value:{getStyles:w,grow:x,columns:j}},o.createElement(N,{selector:`.${E}`,...t}),o.createElement(a.x,{ref:n,...w("root",{className:E}),...y},o.createElement("div",{...w("inner")},v)))});B.classes=S,B.displayName="@mantine/core/Grid",B.Col=k},62339:function(e,n,t){"use strict";t.d(n,{Y:function(){return C}});var o=t(27378),r=t(40624),s=t(62740),l=t(58675),i=t(28086),a=t(72840),c=t(92082),d=t(83453),h=t(5564),m=t(6231),p=t(96739),u=t(20410),x=t(23163),f=t(19397);function j({direction:e,style:n,...t}){return o.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...n},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var g={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};let b=/^-0(\.0*)?$/,v=/^-?0\d+$/;function y(e,n,t){return void 0===e||(void 0===n||e>=n)&&(void 0===t||e<=t)}let w={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},E=(0,d.Z)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,c.ap)(n,"ni-chevron-size")}})),C=(0,u.d)((e,n)=>{let t=(0,p.w)("NumberInput",w,e),{className:c,classNames:d,styles:u,unstyled:C,vars:S,onChange:T,onValueChange:k,value:I,defaultValue:N,max:z,min:P,step:B,hideControls:M,rightSection:D,isAllowed:L,clampBehavior:A,onBlur:R,allowDecimal:G,decimalScale:F,onKeyDown:V,handlersRef:H,startValue:X,disabled:O,rightSectionPointerEvents:Z,allowNegative:W,readOnly:q,size:Y,rightSectionWidth:$,stepHoldInterval:_,stepHoldDelay:U,allowLeadingZeros:Q,...K}=t,J=(0,m.y)({name:"NumberInput",classes:g,props:t,classNames:d,styles:u,unstyled:C,vars:S,varsResolver:E}),{resolvedClassNames:ee,resolvedStyles:en}=(0,h.h)({classNames:d,styles:u,props:t}),[et,eo]=(0,l.C)({value:I,defaultValue:N,onChange:T}),er=void 0!==U&&void 0!==_,es=(0,o.useRef)(null),el=(0,o.useRef)(null),ei=(0,o.useRef)(0),ea=(0,o.useRef)();ea.current=()=>{"number"!=typeof et||Number.isNaN(et)?eo((0,i.u)(X,P,z)):void 0!==z?eo(et+B<=z?et+B:z):eo(et+B)};let ec=(0,o.useRef)();ec.current=()=>{"number"!=typeof et||Number.isNaN(et)?eo((0,i.u)(X,P,z)):eo(function({value:e,min:n,step:t=1,allowNegative:o}){let r=e-t;return void 0!==n&&r<n?n:!o&&r<0&&void 0===n?e:r}({value:et,min:P,step:B,allowNegative:W}))},(0,a.kR)(H,{increment:ea.current,decrement:ec.current});let ed=e=>{e?ea.current():ec.current(),ei.current+=1},eh=e=>{if(ed(e),er){let n="number"==typeof _?_:_(ei.current);el.current=window.setTimeout(()=>eh(e),n)}},em=(e,n)=>{e.preventDefault(),es.current?.focus(),ed(n),er&&(el.current=window.setTimeout(()=>eh(n),U))},ep=()=>{el.current&&window.clearTimeout(el.current),el.current=null,ei.current=0},eu=o.createElement("div",{...J("controls")},o.createElement(f.k,{...J("control"),tabIndex:-1,"aria-hidden":!0,disabled:O||"number"==typeof et&&void 0!==z&&et>=z,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{em(e,!0)},onPointerUp:ep,onPointerLeave:ep},o.createElement(j,{direction:"up"})),o.createElement(f.k,{...J("control"),tabIndex:-1,"aria-hidden":!0,disabled:O||"number"==typeof et&&void 0!==P&&et<=P,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{em(e,!1)},onPointerUp:ep,onPointerLeave:ep},o.createElement(j,{direction:"down"})));return o.createElement(x.M,{component:s.h3,allowNegative:W,className:(0,r.Z)(g.root,c),size:Y,...K,readOnly:q,disabled:O,value:et,getInputRef:(0,a.Yx)(n,es),onValueChange:(e,n)=>{if("event"===n.source){var t;eo(!(("number"==typeof(t=e.floatValue)?t<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(t)))&&!Number.isNaN(t))||b.test(e.value)||Q&&v.test(e.value)?e.value:e.floatValue)}k?.(e,n)},rightSection:M||q?D:D||eu,classNames:ee,styles:en,unstyled:C,__staticSelector:"NumberInput",decimalScale:G?F:0,onKeyDown:e=>{V?.(e),q||("ArrowUp"===e.key&&(e.preventDefault(),ea.current()),"ArrowDown"===e.key&&(e.preventDefault(),ec.current()))},rightSectionPointerEvents:Z??O?"none":void 0,rightSectionWidth:$??`var(--ni-right-section-width-${Y||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(R?.(e),"blur"===A&&"number"==typeof et){let e=(0,i.u)(et,P,z);e!==et&&eo((0,i.u)(et,P,z))}},isAllowed:e=>"strict"===A?L?L(e)&&y(e.floatValue,P,z):y(e.floatValue,P,z):!L||L(e)})});C.classes={...x.M.classes,...g},C.displayName="@mantine/core/NumberInput"},37454:function(e,n,t){"use strict";t.d(n,{M:function(){return b}});var o=t(27378),r=t(96739),s=t(6231),l=t(40593),i=t(56589),a=t(20410),c=t(53007),d=t(86689),h=t(92082),m=t(31582),p=t(75001),u=t(2256),x=t(9889);function f({spacing:e,verticalSpacing:n,cols:t,selector:r}){let s=(0,u.rZ)(),l=void 0===n?e:n,i=(0,d.L)({"--sg-spacing-x":(0,h.bG)((0,p.v)(e)),"--sg-spacing-y":(0,h.bG)((0,p.v)(l)),"--sg-cols":p.v(t)?.toString()}),a=(0,c.X)(s.breakpoints).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--sg-spacing-x"]=(0,h.bG)(e[o])),"object"==typeof l&&void 0!==l[o]&&(n[o]["--sg-spacing-y"]=(0,h.bG)(l[o])),"object"==typeof t&&void 0!==t[o]&&(n[o]["--sg-cols"]=t[o]),n),{}),f=(0,m.I)((0,c.X)(a),s).filter(e=>(0,c.X)(a[e.value]).length>0),j=f.map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:a[e.value]}));return o.createElement(x.f,{styles:i,media:j,selector:r})}var j={root:"m-2415a157"};let g={cols:1,spacing:"md"},b=(0,a.d)((e,n)=>{let t=(0,r.w)("SimpleGrid",g,e),{classNames:a,className:c,style:d,styles:h,unstyled:m,vars:p,cols:u,verticalSpacing:x,spacing:b,...v}=t,y=(0,s.y)({name:"SimpleGrid",classes:j,props:t,className:c,style:d,classNames:a,styles:h,unstyled:m,vars:p}),w=(0,l.m)();return o.createElement(o.Fragment,null,o.createElement(f,{...t,selector:`.${w}`}),o.createElement(i.x,{ref:n,...y("root",{className:w}),...v}))});b.classes=j,b.displayName="@mantine/core/SimpleGrid"}},function(e){e.O(0,[30370,62740,60213,15819,2775,45608,16584,17932,49774,92888,40179],function(){return e(e.s=46037)}),_N_E=e.O()}]);
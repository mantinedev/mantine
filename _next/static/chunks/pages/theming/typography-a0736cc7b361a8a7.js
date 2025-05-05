(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94466],{67653:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/typography",function(){return t(41362)}])},41362:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var o=t(31085),s=t(71184),i=t(2242),r=t(4749),a=t(61195),h=t(56051),l=t(52022),d=t(37905);let c={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h,{order:3,ff:"Outfit, sans-serif",ta:"center",children:"Outfit or sans-serif title"}),(0,o.jsxs)(h.Y,{mt:"md",children:[(0,o.jsx)(l.$,{ff:"Verdana, sans-serif",children:"Verdana button"}),(0,o.jsx)(d.C,{ff:"Monaco, Courier, monospace",children:"Monaco, Courier Code"})]})]})},centered:!0,code:`
import { Button, Code, Title, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title order={3}>Outfit or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`};var p=t(93065);let m={type:"configurator",component:function(e){return(0,o.jsx)(p.E,{fz:e.fontSize,lh:e.lineHeight,children:"Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils."})},code:e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text fz="${e.fontSize}" lh="${e.lineHeight}">
      Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}
`,centered:!0,controls:[{type:"size",prop:"fontSize",initialValue:"md",libraryValue:"__none__"},{type:"size",prop:"lineHeight",initialValue:"md",libraryValue:"__none__"}]};var f=t(12616),g=t(92408);let u=`
import { Title, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Title: Title.extend({
      classNames: {
        root: classes.heading,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </MantineThemeProvider>
  );
}
`,v=`
.heading {
  &:is(h1) {
    font-family: Outfit, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--mantine-color-dimmed);
  }
}
`,y=(0,f.a)({components:{Title:a.h.extend({classNames:{root:"m_9cc5ffb6"}})}}),x={type:"code",component:function(){return(0,o.jsxs)(g.nW,{theme:y,children:[(0,o.jsx)(a.h,{order:1,children:"Heading 1"}),(0,o.jsx)(a.h,{order:2,children:"Heading 2"}),(0,o.jsx)(a.h,{order:3,children:"Heading 3"}),(0,o.jsx)(a.h,{order:4,children:"Heading 4"}),(0,o.jsx)(a.h,{order:5,children:"Heading 5"}),(0,o.jsx)(a.h,{order:6,children:"Heading 6"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:u},{fileName:"Demo.module.css",language:"scss",code:v}]};var j=t(18675),M=t(20017);let k=(0,j.P)(M.XZ.Typography);function T(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{DataTable:t,Demo:a}=n;return t||S("DataTable",!0),a||S("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"typography",children:"Typography"}),"\n",(0,o.jsx)(n.h2,{id:"change-fonts",children:"Change fonts"}),"\n",(0,o.jsx)(n.p,{children:"You can change fonts and other text styles for headings, code and all other components with the following theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamily"})," – controls font-family in all components except ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"}),", ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"})," and ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," – controls font-family of components that require monospace font: ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"}),", ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})," and ",(0,o.jsx)(n.a,{href:"/x/code-highlight/",children:"CodeHighlight"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," – controls font-family of h1-h6 tags in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components, fallbacks to ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," if not defined"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Mantine uses system fonts. It means that different devices will display components based on available font,\nfor example, macOS and iOS users will see ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/fonts/",children:"San Francisco font"}),",\nWindows users will see ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/typography/font-list/segoe-ui",children:"Segoe UI font"}),",\nAndroid users will see ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto font"})," and so on.\nThis approach provides a familiar experience to the users and allows avoiding common problems\nrelated to custom fonts loading (layout shift, invisible text, etc.), if you do not have strict\nrequirements, it is recommended to use system fonts for better performance."]}),"\n",(0,o.jsx)(n.p,{children:"Default values for theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," and ",(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," is ",(0,o.jsx)(n.code,{children:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," is ",(0,o.jsx)(n.code,{children:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"font-sizes",children:"Font sizes"}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.fontSizes"})," property defines font-size values for all Mantine components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontSizes: {\n    xs: 10,\n    sm: 11,\n    md: 14,\n    lg: 16,\n    xl: 20,\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.fontSizes"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value","Value in px"],data:Object.keys(i.S.fontSizes).map(e=>[e,"".concat(i.S.fontSizes[e]),"".concat((0,r.px)(i.S.fontSizes[e]),"px")])}),"\n",(0,o.jsx)(n.h2,{id:"line-heights",children:"Line heights"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeights"})," property defines line-height values for ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component,\nmost other components use ",(0,o.jsx)(n.code,{children:"theme.lineHeights.md"})," by default:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  lineHeights: {\n    xs: '1.4',\n    sm: '1.45',\n    md: '1.55',\n    lg: '1.6',\n    xl: '1.65',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value"],data:Object.keys(i.S.lineHeights).map(e=>[e,"".concat(i.S.lineHeights[e])])}),"\n",(0,o.jsx)(n.h2,{id:"h1-h6-styles",children:"h1-h6 styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize headings styles in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components\nset ",(0,o.jsx)(n.code,{children:"theme.headings"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    // properties for all headings\n    fontWeight: '400',\n    fontFamily: 'Roboto',\n\n    // properties for individual headings, all of them are optional\n    sizes: {\n      h1: {\n        fontWeight: '100',\n        fontSize: 36,\n        lineHeight: '1.4',\n      },\n      h2: { fontSize: 30, lineHeight: '1.5' },\n      // ...up to h6\n      h6: { fontWeight: '900' },\n    },\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"theme.headings"})," you can customize font-size, font-weight and line-height per heading level.\nIf you need more control over styles, use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is",children:":is selector"}),"\nwith ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to target specific heading level:"]}),"\n",(0,o.jsx)(a,{data:x})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(k,{...e,children:(0,o.jsx)(T,{...e})})}function S(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(67653)),_N_E=e.O()}]);
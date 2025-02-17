(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94466],{67653:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/typography",function(){return o(41362)}])},41362:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>M});var t=o(31085),i=o(71184),r=o(2242),s=o(4749),a=o(61195),l=o(56051),h=o(52022),d=o(37905);let c={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h,{order:3,ff:"Greycliff CF, sans-serif",ta:"center",children:"Greycliff CF title"}),(0,t.jsxs)(l.Y,{mt:"md",children:[(0,t.jsx)(h.$,{ff:"Verdana, sans-serif",children:"Verdana button"}),(0,t.jsx)(d.C,{ff:"Monaco, Courier, monospace",children:"Monaco, Courier Code"})]})]})},centered:!0,code:`
import { Button, Code, Title, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`};var m=o(93065);let f={type:"configurator",component:function(e){return(0,t.jsx)(m.E,{fz:e.fontSize,lh:e.lineHeight,children:"Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils."})},code:e=>`
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
`,centered:!0,controls:[{type:"size",prop:"fontSize",initialValue:"md",libraryValue:"__none__"},{type:"size",prop:"lineHeight",initialValue:"md",libraryValue:"__none__"}]};var p=o(12616),u=o(92408);let x=`
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
`,g=`
.heading {
  &:is(h1) {
    font-family: GreycliffCF, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--mantine-color-dimmed);
  }
}
`,j=(0,p.a)({components:{Title:a.h.extend({classNames:{root:"m_9cc5ffb6"}})}}),y={type:"code",component:function(){return(0,t.jsxs)(u.nW,{theme:j,children:[(0,t.jsx)(a.h,{order:1,children:"Heading 1"}),(0,t.jsx)(a.h,{order:2,children:"Heading 2"}),(0,t.jsx)(a.h,{order:3,children:"Heading 3"}),(0,t.jsx)(a.h,{order:4,children:"Heading 4"}),(0,t.jsx)(a.h,{order:5,children:"Heading 5"}),(0,t.jsx)(a.h,{order:6,children:"Heading 6"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:x},{fileName:"Demo.module.css",language:"scss",code:g}]};var v=o(85954),T=o(38215);let b=(0,v.P)(T.XZ.Typography);function S(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{DataTable:o,Demo:a}=n;return o||C("DataTable",!0),a||C("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"typography",children:"Typography"}),"\n",(0,t.jsx)(n.h2,{id:"change-fonts",children:"Change fonts"}),"\n",(0,t.jsx)(n.p,{children:"You can change fonts and other text styles for headings, code and all other components with the following theme properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.fontFamily"})," – controls font-family in all components except ",(0,t.jsx)(n.a,{href:"/core/title/",children:"Title"}),", ",(0,t.jsx)(n.a,{href:"/core/code/",children:"Code"})," and ",(0,t.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," – controls font-family of components that require monospace font: ",(0,t.jsx)(n.a,{href:"/core/code/",children:"Code"}),", ",(0,t.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})," and ",(0,t.jsx)(n.a,{href:"/x/code-highlight/",children:"CodeHighlight"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.headings.fontFamily"})," – controls font-family of h1-h6 tags in ",(0,t.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,t.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components, fallbacks to ",(0,t.jsx)(n.code,{children:"theme.fontFamily"})," if not defined"]}),"\n"]}),"\n",(0,t.jsx)(a,{data:c}),"\n",(0,t.jsx)(n.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Mantine uses system fonts. It means that different devices will display components based on available font,\nfor example, macOS and iOS users will see ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/fonts/",children:"San Francisco font"}),",\nWindows users will see ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/typography/font-list/segoe-ui",children:"Segoe UI font"}),",\nAndroid users will see ",(0,t.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto font"})," and so on.\nThis approach provides a familiar experience to the users and allows avoiding common problems\nrelated to custom fonts loading (layout shift, invisible text, etc.), if you do not have strict\nrequirements, it is recommended to use system fonts for better performance."]}),"\n",(0,t.jsx)(n.p,{children:"Default values for theme properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default value for ",(0,t.jsx)(n.code,{children:"theme.fontFamily"})," and ",(0,t.jsx)(n.code,{children:"theme.headings.fontFamily"})," is ",(0,t.jsx)(n.code,{children:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default value for ",(0,t.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," is ",(0,t.jsx)(n.code,{children:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"font-sizes",children:"Font sizes"}),"\n",(0,t.jsx)(a,{data:f}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"theme.fontSizes"})," property defines font-size values for all Mantine components:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  fontSizes: {\n    xs: rem(10),\n    sm: rem(11),\n    md: rem(14),\n    lg: rem(16),\n    xl: rem(20),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Default ",(0,t.jsx)(n.code,{children:"theme.fontSizes"})," values:"]}),"\n",(0,t.jsx)(o,{head:["Key","Value","Value in px"],data:Object.keys(r.S.fontSizes).map(e=>[e,"".concat(r.S.fontSizes[e]),"".concat((0,s.px)(r.S.fontSizes[e]),"px")])}),"\n",(0,t.jsx)(n.h2,{id:"line-heights",children:"Line heights"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"theme.lineHeights"})," property defines line-height values for ",(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," component,\nmost other components use ",(0,t.jsx)(n.code,{children:"theme.lineHeights.md"})," by default:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  lineHeights: {\n    xs: '1.4',\n    sm: '1.45',\n    md: '1.55',\n    lg: '1.6',\n    xl: '1.65',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Default ",(0,t.jsx)(n.code,{children:"theme.lineHeights"})," values:"]}),"\n",(0,t.jsx)(o,{head:["Key","Value"],data:Object.keys(r.S.lineHeights).map(e=>[e,"".concat(r.S.lineHeights[e])])}),"\n",(0,t.jsx)(n.h2,{id:"h1-h6-styles",children:"h1-h6 styles"}),"\n",(0,t.jsxs)(n.p,{children:["To customize headings styles in ",(0,t.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,t.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components\nset ",(0,t.jsx)(n.code,{children:"theme.headings"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    // properties for all headings\n    fontWeight: '400',\n    fontFamily: 'Roboto',\n\n    // properties for individual headings, all of them are optional\n    sizes: {\n      h1: {\n        fontWeight: '100',\n        fontSize: rem(36),\n        lineHeight: '1.4',\n      },\n      h2: { fontSize: rem(30), lineHeight: '1.5' },\n      // ...up to h6\n      h6: { fontWeight: '900' },\n    },\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"theme.headings"})," you can customize font-size, font-weight and line-height per heading level.\nIf you need more control over styles, use ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is",children:":is selector"}),"\nwith ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to target specific heading level:"]}),"\n",(0,t.jsx)(a,{data:y})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,{...e,children:(0,t.jsx)(S,{...e})})}function C(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(67653)),_N_E=e.O()}]);
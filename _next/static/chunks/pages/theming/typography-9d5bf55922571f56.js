(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79550],{43773:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/typography",function(){return t(12958)}])},12958:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var o=t(52322),i=t(45392),r=t(87744),s=t(65744),a=t(94120),l=t(93010),h=t(17115),d=t(45909);let c={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.D,{order:3,ff:"Greycliff CF, sans-serif",ta:"center",children:"Greycliff CF title"}),(0,o.jsxs)(l.Z,{mt:"md",children:[(0,o.jsx)(h.z,{ff:"Verdana, sans-serif",children:"Verdana button"}),(0,o.jsx)(d.E,{ff:"Monaco, Courier, monospace",children:"Monaco, Courier Code"})]})]})},centered:!0,code:`
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
`};var m=t(8582);let f={type:"configurator",component:function(e){return(0,o.jsx)(m.x,{fz:e.fontSize,lh:e.lineHeight,children:"Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils."})},code:e=>`
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
`,centered:!0,controls:[{type:"size",prop:"fontSize",initialValue:"md",libraryValue:"__none__"},{type:"size",prop:"lineHeight",initialValue:"md",libraryValue:"__none__"}]};var p=t(60231),u=t(68755);let x=`
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
`,j=(0,p.j)({components:{Title:a.D.extend({classNames:{root:"m_9cc5ffb6"}})}}),y={type:"code",component:function(){return(0,o.jsxs)(u.M2,{theme:j,children:[(0,o.jsx)(a.D,{order:1,children:"Heading 1"}),(0,o.jsx)(a.D,{order:2,children:"Heading 2"}),(0,o.jsx)(a.D,{order:3,children:"Heading 3"}),(0,o.jsx)(a.D,{order:4,children:"Heading 4"}),(0,o.jsx)(a.D,{order:5,children:"Heading 5"}),(0,o.jsx)(a.D,{order:6,children:"Heading 6"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:x},{fileName:"Demo.module.css",language:"scss",code:g}]};var v=t(25071),T=t(15019);let b=(0,v.A)(T.us.Typography);function M(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{DataTable:t,Demo:a}=n;return t||H("DataTable",!0),a||H("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"typography",children:"Typography"}),"\n",(0,o.jsx)(n.h2,{id:"change-fonts",children:"Change fonts"}),"\n",(0,o.jsx)(n.p,{children:"You can change fonts and other text styles for headings, code and all other components with the following theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamily"})," – controls font-family in all components except ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"}),", ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"})," and ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," – controls font-family of components that require monospace font: ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"}),", ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})," and ",(0,o.jsx)(n.a,{href:"/x/code-highlight/",children:"CodeHighlight"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," – controls font-family of h1-h6 tags in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components, fallbacks to ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," if not defined"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Mantine uses system fonts. It means that different devices will display components based on available font,\nfor example, macOS and iOS users will see ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/fonts/",children:"San Francisco font"}),",\nWindows users will see ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/typography/font-list/segoe-ui",children:"Segoe UI font"}),",\nAndroid users will see ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto font"})," and so on.\nThis approach provides a familiar experience to the users and allows avoiding common problems\nrelated to custom fonts loading (layout shift, invisible text, etc.), if you do not have strict\nrequirements, it is recommended to use system fonts for better performance."]}),"\n",(0,o.jsx)(n.p,{children:"Default values for theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," and ",(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," is ",(0,o.jsx)(n.code,{children:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," is ",(0,o.jsx)(n.code,{children:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"font-sizes",children:"Font sizes"}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.fontSizes"})," property defines font-size values for all Mantine components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  fontSizes: {\n    xs: rem(10),\n    sm: rem(11),\n    md: rem(14),\n    lg: rem(16),\n    xl: rem(20),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.fontSizes"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value","Value in px"],data:Object.keys(r.t.fontSizes).map(e=>[e,"".concat(r.t.fontSizes[e]),"".concat((0,s.px)(r.t.fontSizes[e]),"px")])}),"\n",(0,o.jsx)(n.h2,{id:"line-heights",children:"Line heights"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeights"})," property defines line-height values for ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component,\nmost other components use ",(0,o.jsx)(n.code,{children:"theme.lineHeights.md"})," by default:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  lineHeights: {\n    xs: '1.4',\n    sm: '1.45',\n    md: '1.55',\n    lg: '1.6',\n    xl: '1.65',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value"],data:Object.keys(r.t.lineHeights).map(e=>[e,"".concat(r.t.lineHeights[e])])}),"\n",(0,o.jsx)(n.h2,{id:"h1-h6-styles",children:"h1-h6 styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize headings styles in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components\nset ",(0,o.jsx)(n.code,{children:"theme.headings"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    // properties for all headings\n    fontWeight: '400',\n    fontFamily: 'Roboto',\n\n    // properties for individual headings, all of them are optional\n    sizes: {\n      h1: {\n        fontWeight: '100',\n        fontSize: rem(36),\n        lineHeight: '1.4',\n      },\n      h2: { fontSize: rem(30), lineHeight: '1.5' },\n      // ...up to h6\n      h6: { fontWeight: '900' },\n    },\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"theme.headings"})," you can customize font-size, font-weight and line-height per heading level.\nIf you need more control over styles, use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is",children:":is selector"}),"\nwith ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to target specific heading level:"]}),"\n",(0,o.jsx)(a,{data:y})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(b,{...e,children:(0,o.jsx)(M,{...e})})}function H(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=43773)}),_N_E=e.O()}]);
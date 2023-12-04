(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9550],{12167:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/typography",function(){return t(87802)}])},87802:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return M}});var o=t(24246),i=t(71670),r=t(3916),s=t(30289),a=t(10248),l=t(27589),d=t(27378),c=t(57847),h=t(22971),m=t(8671),f=t(94998);let p=`
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`,u={type:"code",component:function(){return d.createElement(d.Fragment,null,d.createElement(c.D,{order:3,ff:"Greycliff CF, sans-serif",ta:"center"},"Greycliff CF title"),d.createElement(h.Z,{mt:"md"},d.createElement(m.z,{ff:"Verdana, sans-serif"},"Verdana button"),d.createElement(f.E,{ff:"Monaco, Courier, monospace"},"Monaco, Courier Code")))},centered:!0,code:p};var Text=t(26569);let g={type:"configurator",component:function(e){return d.createElement(Text.x,{fz:e.fontSize,lh:e.lineHeight},"Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils.")},code:e=>`
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
`,centered:!0,controls:[{type:"size",prop:"fontSize",initialValue:"md",libraryValue:"__none__"},{type:"size",prop:"lineHeight",initialValue:"md",libraryValue:"__none__"}]};var x=t(2256);let y=`
import { Title, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Title: Title.extend({
            classNames: {
              root: classes.heading,
            },
          }),
        },
      }}
    >
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </MantineProvider>
  );
}
`,j=`
.heading {
  &:is(h1) {
    font-family: GreycliffCF, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--mantine-color-dimmed);
  }
}
`,v={type:"code",component:function(){return d.createElement(x.M2,{theme:{components:{Title:c.D.extend({classNames:{root:"m-9cc5ffb6"}})}}},d.createElement(c.D,{order:1},"Heading 1"),d.createElement(c.D,{order:2},"Heading 2"),d.createElement(c.D,{order:3},"Heading 3"),d.createElement(c.D,{order:4},"Heading 4"),d.createElement(c.D,{order:5},"Heading 5"),d.createElement(c.D,{order:6},"Heading 6"))},code:[{fileName:"Demo.tsx",language:"tsx",code:y},{fileName:"Demo.module.css",language:"scss",code:j}]},T=(0,r.A)(s.us.Typography);function b(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{DataTable:t,Demo:r}=n;return t||S("DataTable",!0),r||S("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"typography",children:"Typography"}),"\n",(0,o.jsx)(n.h2,{id:"change-fonts",children:"Change fonts"}),"\n",(0,o.jsx)(n.p,{children:"You can change fonts and other text styles for headings, code and all other components with the following theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamily"})," – controls font-family in all components except ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"}),", ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"})," and ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," – controls font-family of components that require monospace font: ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"}),", ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})," and ",(0,o.jsx)(n.a,{href:"/others/code-highlight/",children:"CodeHighlight"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," – controls font-family of h1-h6 tags in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components, fallbacks to ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," if not defined"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Mantine uses system fonts. It means that different devices will display components based on available font,\nfor example, macOS and iOS users will see ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/fonts/",children:"San Francisco font"}),",\nWindows users will see ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/typography/font-list/segoe-ui",children:"Segoe UI font"}),",\nAndroid users will see ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto font"})," and so on.\nThis approach provides a familiar experience to the users and allows avoiding common problems\nrelated to custom fonts loading (layout shift, invisible text, etc.), if you do not have strict\nrequirements, it is recommended to use system fonts for better performance."]}),"\n",(0,o.jsx)(n.p,{children:"Default values for theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," and ",(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," is ",(0,o.jsx)(n.code,{children:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," is ",(0,o.jsx)(n.code,{children:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"font-sizes",children:"Font sizes"}),"\n",(0,o.jsx)(r,{data:g}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.fontSizes"})," property defines font-size values for all Mantine components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, rem } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        fontSizes: {\n          xs: rem(10),\n          sm: rem(11),\n          md: rem(14),\n          lg: rem(16),\n          xl: rem(20),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.fontSizes"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value","Value in px"],data:Object.keys(a.t.fontSizes).map(e=>[e,"".concat(a.t.fontSizes[e]),"".concat((0,l.px)(a.t.fontSizes[e]),"px")])}),"\n",(0,o.jsx)(n.h2,{id:"line-heights",children:"Line heights"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeights"})," property defines line-height values for ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component,\nmost other components use ",(0,o.jsx)(n.code,{children:"theme.lineHeights.md"})," by default:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        lineHeights: {\n          xs: '1.4',\n          sm: '1.45',\n          md: '1.55',\n          lg: '1.6',\n          xl: '1.65',\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Key","Value"],data:Object.keys(a.t.lineHeights).map(e=>[e,"".concat(a.t.lineHeights[e])])}),"\n",(0,o.jsx)(n.h2,{id:"h1-h6-styles",children:"h1-h6 styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize headings styles in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components\nset ",(0,o.jsx)(n.code,{children:"theme.headings"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, rem } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        headings: {\n          // properties for all headings\n          fontWeight: '400',\n          fontFamily: 'Roboto',\n\n          // properties for individual headings, all of them are optional\n          sizes: {\n            h1: {\n              fontWeight: '100',\n              fontSize: rem(36),\n              lineHeight: '1.4',\n            },\n            h2: { fontSize: rem(30), lineHeight: '1.5' },\n            // ...up to h6\n            h6: { fontWeight: '900' },\n          },\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"theme.headings"})," you can customize font-size, font-weight and line-height per heading level.\nIf you need more control over styles, use ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is",children:":is selector"}),"\nwith ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to target specific heading level:"]}),"\n",(0,o.jsx)(r,{data:v})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(T,{...e,children:(0,o.jsx)(b,{...e})})}function S(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=12167)}),_N_E=e.O()}]);
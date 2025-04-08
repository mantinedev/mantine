(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63420],{75985:(e,n,t)=>{"use strict";var o=t(524),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return o.isMemo(e)?i:a[e.$$typeof]||r}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=i;var l=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(n,t,o){if("string"!=typeof t){if(p){var r=h(t);r&&r!==p&&e(n,r,o)}var i=d(t);m&&(i=i.concat(m(t)));for(var a=c(n),x=c(t),f=0;f<i.length;++f){var g=i[f];if(!s[g]&&!(o&&o[g])&&!(x&&x[g])&&!(a&&a[g])){var y=u(t,g);try{l(n,g,y)}catch(e){}}}}return n}},17973:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/emotion",function(){return t(48999)}])},48999:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>I});var o=t(31085),r=t(71184),s=t(63295),i=t(31313);let a=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    cursor: 'pointer',
    margin: theme.spacing.md,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:not(:first-of-type)': {
      backgroundColor: theme.colors.violet[6],

      // pseudo-classes can be nested
      '&:hover': {
        backgroundColor: theme.colors.violet[9],
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div>
      <button type="button" className={classes.button}>
        First
      </button>
      <button type="button" className={classes.button}>
        Second
      </button>
      <button type="button" className={classes.button}>
        Third
      </button>
    </div>
  );
}
`,c=(0,i.rU)(e=>({button:{color:e.white,backgroundColor:e.colors.blue[6],border:0,borderRadius:e.radius.md,padding:`${e.spacing.sm} ${e.spacing.lg}`,cursor:"pointer",margin:e.spacing.md,"&:hover":{backgroundColor:e.colors.blue[9]},"&:not(:first-of-type)":{backgroundColor:e.colors.violet[6],"&:hover":{backgroundColor:e.colors.violet[9]}}}})),l={type:"code",component:function(){let{classes:e}=c();return(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{type:"button",className:e.button,children:"First"}),(0,o.jsx)("button",{type:"button",className:e.button,children:"Second"}),(0,o.jsx)("button",{type:"button",className:e.button,children:"Third"})]})},code:a,defaultExpanded:!1},d=`
import { createStyles } from '@mantine/emotion';

interface ButtonProps {
  color: 'blue' | 'violet';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius} radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="violet" radius={50} />
    </>
  );
}
`,m=(0,i.rU)((e,{color:n,radius:t})=>({button:{color:e.white,backgroundColor:e.colors[n][6],borderRadius:t,padding:e.spacing.md,margin:e.spacing.md,border:0,cursor:"pointer"}}));function u({color:e,radius:n}){let{classes:t}=m({color:e,radius:n});return(0,o.jsxs)("button",{type:"button",className:t.button,children:[e," button with ",n," radius"]})}let h={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{color:"blue",radius:5}),(0,o.jsx)(u,{color:"violet",radius:50})]})},code:d,defaultExpanded:!1},p=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    // assign reference to selector
    ref: u.ref('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.xl,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
    },

    // reference button with nested selector
    [\`&:hover .\${u.ref('button')}\`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
`,x=(0,i.rU)((e,n,t)=>({button:{ref:t.ref("button"),backgroundColor:e.colors.blue[6],color:e.white,padding:`${e.spacing.sm} ${e.spacing.lg}`,borderRadius:e.radius.md,cursor:"pointer",border:0},container:{display:"flex",justifyContent:"center",padding:e.spacing.xl,[t.light]:{backgroundColor:e.colors.gray[1]},[t.dark]:{backgroundColor:e.colors.dark[8]},[`&:hover .${t.ref("button")}`]:{backgroundColor:e.colors.violet[6]}}})),f={type:"code",component:function(){let{classes:e}=x();return(0,o.jsx)("div",{className:e.container,children:(0,o.jsx)("button",{className:e.button,type:"button",children:"Hover container to change button color"})})},code:p,defaultExpanded:!1};var g=t(14041);let y=`
import { useState } from 'react';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    border: 0,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    cursor: 'pointer',
    margin: theme.spacing.md,
    lineHeight: 1,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },
  },

  active: {
    color: theme.white,

    [u.light]: {
      backgroundColor: theme.colors.blue[6],
    },
    [u.dark]: {
      backgroundColor: theme.colors.blue[8],
    },
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}
`,j=(0,i.rU)((e,n,t)=>({button:{border:0,borderRadius:e.radius.md,padding:e.spacing.md,cursor:"pointer",margin:e.spacing.md,lineHeight:1,[t.light]:{backgroundColor:e.colors.gray[1]},[t.dark]:{backgroundColor:e.colors.dark[5]}},active:{color:e.white,[t.light]:{backgroundColor:e.colors.blue[6]},[t.dark]:{backgroundColor:e.colors.blue[8]}}})),b={type:"code",component:function(){let[e,n]=(0,g.useState)(0),{classes:t,cx:r}=j();return(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:r(t.button,{[t.active]:0===e}),onClick:()=>n(0),type:"button",children:"First"}),(0,o.jsx)("button",{className:r(t.button,{[t.active]:1===e}),onClick:()=>n(1),type:"button",children:"Second"})]})},code:y,defaultExpanded:!1};var v=t(39735),k=t(29814);let w=`
import { em, getBreakpointValue } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${em(getBreakpointValue(theme.breakpoints.xl, theme.breakpoints) - 1)})\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Simplify media query writing with theme functions
    [u.smallerThan('lg')]: {
      backgroundColor: theme.colors.yellow[6],
    },

    // Static media query
    [\`@media (max-width: \${em(800)})\`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`,S=(0,i.rU)((e,n,t)=>({container:{height:100,backgroundColor:e.colors.blue[6],[`@media (max-width: ${(0,v.em)((0,k.r)(e.breakpoints.xl,e.breakpoints)-1)})`]:{backgroundColor:e.colors.pink[6]},[t.smallerThan("lg")]:{backgroundColor:e.colors.yellow[6]},[`@media (max-width: ${(0,v.em)(800)})`]:{backgroundColor:e.colors.orange[6]}}})),C={type:"code",component:function(){let{classes:e}=S();return(0,o.jsx)("div",{className:e.container})},code:w,defaultExpanded:!1};t(16558);var N=t(93135);function P(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,N.J)(n)}t(24947),t(75985);let E=`
import { createStyles, keyframes } from '@mantine/emotion';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: \`\${bounce} 3s ease-in-out infinite\`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
`,$=function(){var e=P.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}({"from, 20%, 53%, 80%, to":{transform:"translate3d(0, 0, 0)"},"40%, 43%":{transform:"translate3d(0, -30px, 0)"},"70%":{transform:"translate3d(0, -15px, 0)"},"90%":{transform:"translate3d(0, -4px, 0)"}}),M=(0,i.rU)((e,n,t)=>({container:{textAlign:"center",padding:e.spacing.xl,animation:`${$} 3s ease-in-out infinite`,[t.light]:{color:e.black},[t.dark]:{color:e.white}}})),T={type:"code",component:function(){let{classes:e}=M();return(0,o.jsx)("div",{className:e.container,children:"Keyframes demo"})},code:E,defaultExpanded:!1};var R=t(85954),B=t(38215);let _=(0,R.P)(B.XZ.Emotion);function D(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Demo:t,InstallScript:i}=n;return t||A("Demo",!0),i||A("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-emotion",children:"Usage with Emotion"}),"\n",(0,o.jsxs)(n.p,{children:["Prior to version 7.0 Mantine used ",(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," as a styling solution.\nIt was replaced with ",(0,o.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"})," in version 7.0, but you can still\nuse Emotion with Mantine if you prefer it over CSS modules."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"createStyles"})," function, ",(0,o.jsx)(n.code,{children:"sx"})," and ",(0,o.jsx)(n.code,{children:"styles"})," prop work different from the same\nfeatures in ",(0,o.jsx)(n.a,{href:"https://v6.mantine.dev/styles/create-styles/",children:"version 6.x"}),". If you are planning\nto upgrade from version 6.x to 7.x, follow the ",(0,o.jsx)(n.a,{href:"/guides/6x-to-7x/",children:"migration guide"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/emotion"})," package is compatible with ",(0,o.jsx)(n.code,{children:"@mantine/core"})," 7.9.0 and higher. Before\ninstalling, make sure that you are using the latest version of all ",(0,o.jsx)(n.code,{children:"@mantine/*"})," packages."]}),"\n",(0,o.jsx)(n.h2,{id:"caveats-and-support",children:"Caveats and support"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," is a runtime CSS-in-JS library – styles are generated\nand injected into the DOM at runtime. This approach has some limitations:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Limited server-side rendering support"})," – modern frameworks like Next.js with app router\ndo not fully support emotion or require additional configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Runtime overhead"})," – styles are generated and injected at runtime, which can lead to\nperformance issues on pages with a lot of components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Additional bundle size"})," – your bundle will include ",(0,o.jsx)(n.code,{children:"@emotion/react"})," (21.2kB minified),\n",(0,o.jsx)(n.code,{children:"@mantine/emotion"})," (~2kb minified) and all styles that you use in your components."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/emotion"})," package can be used with the following frameworks:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vite"})," and ",(0,o.jsx)(n.strong,{children:"CRA"})," with basic setup"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Next.js with pages router"})," with additional setup for server side rendering provided by the package"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Next.js with app router"})," with additional setup for server side rendering provided by Emotion"]}),"\n",(0,o.jsx)(n.li,{children:"Any other framework that does not require server-side rendering with basic setup"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There is no official support (the package probably can be used but it's not tested and documentation is not provided) for:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Remix"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Gatsby"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Redwood"})}),"\n",(0,o.jsx)(n.li,{children:"Any other framework that has server-side rendering"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Note that Emotion is not recommended for new projects, if you are starting a new project with Mantine,\nconsider using ",(0,o.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"})," instead."]}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-vite",children:"Usage with Vite"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mantinedev/vite-min-template/tree/emotion",children:"View example repository with full setup"})}),"\n",(0,o.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,o.jsx)(i,{packages:"@mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils"}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"emotion.d.ts"})," file in ",(0,o.jsx)(n.code,{children:"src"})," directory to add types support for ",(0,o.jsx)(n.code,{children:"sx"})," and ",(0,o.jsx)(n.code,{children:"styles"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core';\n\nimport type { EmotionStyles, EmotionSx } from '@mantine/emotion';\n\ndeclare module '@mantine/core' {\n  export interface BoxProps {\n    sx?: EmotionSx;\n    styles?: EmotionStyles;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Wrap your application with ",(0,o.jsx)(n.code,{children:"MantineEmotionProvider"})," and add ",(0,o.jsx)(n.code,{children:"emotionTransform"})," to ",(0,o.jsx)(n.code,{children:"MantineProvider"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n\nimport { MantineProvider } from '@mantine/core';\nimport {\n  emotionTransform,\n  MantineEmotionProvider,\n} from '@mantine/emotion';\n\nexport default function App() {\n  return (\n    <MantineProvider stylesTransform={emotionTransform}>\n      <MantineEmotionProvider>App</MantineEmotionProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Done! You can now use ",(0,o.jsx)(n.code,{children:"sx"}),", ",(0,o.jsx)(n.code,{children:"styles"})," props and ",(0,o.jsx)(n.code,{children:"createStyles"})," in your application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      sx={(theme, u) => ({\n        padding: 40,\n\n        [u.light]: {\n          backgroundColor: theme.colors.blue[0],\n          color: theme.colors.blue[9],\n\n          '&:hover': {\n            backgroundColor: theme.colors.blue[1],\n          },\n        },\n      })}\n    >\n      Box with emotion sx prop\n    </Box>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-nextjs-pages-router",children:"Usage with Next.js pages router"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mantinedev/next-pages-min-template/tree/emotion",children:"View example repository with full setup"})}),"\n",(0,o.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,o.jsx)(i,{packages:"@mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server"}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"emotion"})," folder with ",(0,o.jsx)(n.code,{children:"cache.ts"})," and ",(0,o.jsx)(n.code,{children:"emotion.d.ts"})," files."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cache.ts"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import createCache from '@emotion/cache';\n\nexport const emotionCache = createCache({ key: 'css' });\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"emotion.d.ts"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core';\n\nimport type { EmotionStyles, EmotionSx } from '@mantine/emotion';\n\ndeclare module '@mantine/core' {\n  export interface BoxProps {\n    sx?: EmotionSx;\n    styles?: EmotionStyles;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following content to ",(0,o.jsx)(n.code,{children:"pages/_document.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import NextDocument, {\n  Head,\n  Html,\n  Main,\n  NextScript,\n} from 'next/document';\nimport createEmotionServer from '@emotion/server/create-instance';\nimport { ColorSchemeScript } from '@mantine/core';\nimport { createGetInitialProps } from '@mantine/emotion';\n// Import cache created in the previous step\nimport { emotionCache } from '../emotion/cache';\n\nexport default function Document() {\n  return (\n    <Html lang=\"en\">\n      <Head>\n        <ColorSchemeScript />\n      </Head>\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  );\n}\n\nconst stylesServer = createEmotionServer(emotionCache);\n\nDocument.getInitialProps = createGetInitialProps(\n  NextDocument,\n  stylesServer\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"MantineEmotionProvider"})," and ",(0,o.jsx)(n.code,{children:"emotionTransform"})," to ",(0,o.jsx)(n.code,{children:"pages/_app.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n\nimport Head from 'next/head';\nimport { MantineProvider } from '@mantine/core';\nimport {\n  emotionTransform,\n  MantineEmotionProvider,\n} from '@mantine/emotion';\nimport { emotionCache } from '../emotion/cache';\n\nexport default function App({ Component, pageProps }: any) {\n  return (\n    <MantineEmotionProvider cache={emotionCache}>\n      <MantineProvider stylesTransform={emotionTransform}>\n        <Head>\n          <title>Mantine Template</title>\n          <meta\n            name=\"viewport\"\n            content=\"minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no\"\n          />\n          <link rel=\"shortcut icon\" href=\"/favicon.svg\" />\n        </Head>\n        <Component {...pageProps} />\n      </MantineProvider>\n    </MantineEmotionProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Done! You can now use ",(0,o.jsx)(n.code,{children:"sx"}),", ",(0,o.jsx)(n.code,{children:"styles"})," props and ",(0,o.jsx)(n.code,{children:"createStyles"})," in your application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      sx={(theme, u) => ({\n        padding: 40,\n\n        [u.light]: {\n          backgroundColor: theme.colors.blue[0],\n          color: theme.colors.blue[9],\n\n          '&:hover': {\n            backgroundColor: theme.colors.blue[1],\n          },\n        },\n      })}\n    >\n      Box with emotion sx prop\n    </Box>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-nextjs-app-router",children:"Usage with Next.js app router"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mantinedev/next-app-min-template/tree/emotion",children:"View example repository with full setup"})}),"\n",(0,o.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,o.jsx)(i,{packages:"@mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server"}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"app/emotion.d.ts"})," file with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core';\n\nimport type { EmotionStyles, EmotionSx } from '@mantine/emotion';\n\ndeclare module '@mantine/core' {\n  export interface BoxProps {\n    sx?: EmotionSx;\n    styles?: EmotionStyles;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"app/EmotionRootStyleRegistry.tsx"})," file with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"'use client';\n\nimport { useState } from 'react';\nimport { useServerInsertedHTML } from 'next/navigation';\nimport createCache from '@emotion/cache';\nimport { CacheProvider } from '@emotion/react';\n\nexport function RootStyleRegistry({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  const [{ cache, flush }] = useState(() => {\n    const cache = createCache({ key: 'my' });\n    cache.compat = true;\n    const prevInsert = cache.insert;\n    let inserted: string[] = [];\n    cache.insert = (...args) => {\n      const serialized = args[1];\n      if (cache.inserted[serialized.name] === undefined) {\n        inserted.push(serialized.name);\n      }\n      return prevInsert(...args);\n    };\n    const flush = () => {\n      const prevInserted = inserted;\n      inserted = [];\n      return prevInserted;\n    };\n    return { cache, flush };\n  });\n\n  useServerInsertedHTML(() => {\n    const names = flush();\n    if (names.length === 0) return null;\n    let styles = '';\n    for (const name of names) {\n      styles += cache.inserted[name];\n    }\n    return (\n      <style\n        data-emotion={`${cache.key} ${names.join(' ')}`}\n        dangerouslySetInnerHTML={{\n          __html: styles,\n        }}\n      />\n    );\n  });\n\n  return <CacheProvider value={cache}>{children}</CacheProvider>;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"RootStyleRegistry"}),", ",(0,o.jsx)(n.code,{children:"MantineEmotionProvider"})," and ",(0,o.jsx)(n.code,{children:"emotionTransform"})," to ",(0,o.jsx)(n.code,{children:"app/layout.tsx"}),".\nIt should look something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n\nimport { ColorSchemeScript, MantineProvider } from '@mantine/core';\nimport {\n  emotionTransform,\n  MantineEmotionProvider,\n} from '@mantine/emotion';\nimport { RootStyleRegistry } from './EmotionRootStyleRegistry';\n\nexport const metadata = {\n  title: 'Mantine Next.js template',\n  description: 'I am using Mantine with Next.js!',\n};\n\nexport default function RootLayout({ children }: { children: any }) {\n  return (\n    <html lang=\"en\">\n      <head>\n        <ColorSchemeScript />\n        <link rel=\"shortcut icon\" href=\"/favicon.svg\" />\n        <meta\n          name=\"viewport\"\n          content=\"minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no\"\n        />\n      </head>\n      <body>\n        <RootStyleRegistry>\n          <MantineEmotionProvider>\n            <MantineProvider stylesTransform={emotionTransform}>\n              {children}\n            </MantineProvider>\n          </MantineEmotionProvider>\n        </RootStyleRegistry>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Done! You can now use ",(0,o.jsx)(n.code,{children:"sx"}),", ",(0,o.jsx)(n.code,{children:"styles"})," props and ",(0,o.jsx)(n.code,{children:"createStyles"})," in your application.\nNote that ",(0,o.jsx)(n.code,{children:"'use client'"})," is required in most components that use ",(0,o.jsx)(n.code,{children:"sx"}),", ",(0,o.jsx)(n.code,{children:"styles"})," or ",(0,o.jsx)(n.code,{children:"createStyles"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"'use client';\n\nimport { Box } from '@mantine/core';\n\nexport default function HomePage() {\n  return (\n    <Box\n      sx={(theme, u) => ({\n        padding: 40,\n\n        [u.light]: {\n          backgroundColor: theme.colors.blue[0],\n          color: theme.colors.blue[9],\n\n          '&:hover': {\n            backgroundColor: theme.colors.blue[1],\n          },\n        },\n      })}\n    >\n      Box with emotion sx prop\n    </Box>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"sx-prop",children:"sx prop"}),"\n",(0,o.jsxs)(n.p,{children:["With the setup above you can use ",(0,o.jsx)(n.code,{children:"sx"})," prop in all Mantine components.\n",(0,o.jsx)(n.code,{children:"sx"})," prop allows adding styles to the root element of the component.\nIt accepts either a styles object or a function that receives theme, utilities and returns styles object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box, Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Box\n        sx={{\n          padding: 40,\n          '&:hover': { padding: 80 },\n        }}\n      >\n        Box with object sx\n      </Box>\n\n      <Button\n        sx={(theme, u) => ({\n          padding: 10,\n\n          [u.light]: {\n            backgroundColor: theme.colors.blue[0],\n            color: theme.colors.blue[9],\n            '&:hover': {\n              backgroundColor: theme.colors.blue[1],\n            },\n          },\n\n          [u.dark]: {\n            backgroundColor: theme.colors.blue[9],\n            color: theme.colors.blue[0],\n            '&:hover': {\n              backgroundColor: theme.colors.blue[8],\n            },\n          },\n        })}\n      >\n        Button with function sx\n      </Button>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"styles-prop",children:"styles prop"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"styles"})," prop works similar to ",(0,o.jsx)(n.code,{children:"sx"})," prop, but it allows adding styles to all\nnested elements of the components that are specified in the Styles API table.\n",(0,o.jsx)(n.code,{children:"styles"})," prop accepts either an object of styles objects or a function that\nreceives theme, component props, utilities and returns styles object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      color=\"red\"\n      styles={(theme, { color }, u) => ({\n        root: {\n          padding: 10,\n          backgroundColor: theme.colors[color || 'blue'][7],\n          color: theme.white,\n\n          '&:hover': {\n            backgroundColor: theme.colors[color || 'blue'][8],\n          },\n        },\n\n        label: {\n          [u.light]: {\n            border: `1px solid ${theme.black}`,\n          },\n          [u.dark]: {\n            border: `1px solid ${theme.white}`,\n          },\n        },\n      })}\n    >\n      Button with styles prop\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"styles-in-theme",children:"styles in theme"}),"\n",(0,o.jsxs)(n.p,{children:["You can add styles to Mantine components with ",(0,o.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," using\nEmotion with ",(0,o.jsx)(n.code,{children:"styles"})," prop. Note that to avoid types collisions, you should not use\n",(0,o.jsx)(n.code,{children:"Component.extend"})," method and just pass component configuration object directly."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineTheme, TextProps } from '@mantine/core';\nimport { EmotionHelpers } from '@mantine/emotion';\n\nexport const theme = createTheme({\n  components: {\n    Text: {\n      styles: (\n        theme: MantineTheme,\n        _props: TextProps,\n        u: EmotionHelpers\n      ) => ({\n        root: {\n          [u.light]: {\n            color: theme.colors.blue[7],\n          },\n        },\n      }),\n    },\n  },\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"createstyles",children:"createStyles"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createStyles"})," function accepts a function to generate styles with ",(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"}),".\nThe function receives 3 arguments that will be described more detailed in the following demos:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme"})," – ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"Mantine theme object"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"params"})," – object with additional parameters that can be passed to the function in ",(0,o.jsx)(n.code,{children:"useStyles"})," hook"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"u"})," - object with utilities to generate selectors"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createStyles"})," function returns ",(0,o.jsx)(n.code,{children:"useStyles"})," hook that should be called in the component\nthat uses given styles:"]}),"\n",(0,o.jsx)(t,{data:s.C}),"\n",(0,o.jsx)(n.h3,{id:"pseudo-classes",children:"Pseudo-classes"}),"\n",(0,o.jsx)(n.p,{children:"You can add pseudo-classes the same way as in any css-preprocessor like Sass:"}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(n.h3,{id:"styles-parameters",children:"Styles parameters"}),"\n",(0,o.jsxs)(n.p,{children:["You can receive any amount of parameters as second argument of ",(0,o.jsx)(n.code,{children:"createStyles"})," function,\nlatter you will need to pass those parameters as argument to ",(0,o.jsx)(n.code,{children:"useStyles"})," hook:"]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(n.h3,{id:"composition-and-nested-selectors",children:"Composition and nested selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.code,{children:"createStyles"})," produces scoped class names you will need to create a reference to selector\nin order to get static selector. Use ",(0,o.jsx)(n.code,{children:"u.ref"})," function to assign static selectors:"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h3,{id:"classes-merging-cx-function",children:"Classes merging (cx function)"}),"\n",(0,o.jsxs)(n.p,{children:["To merge class names use ",(0,o.jsx)(n.code,{children:"cx"})," function, it has the same api as ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/clsx",children:"clsx"})," package."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"!important:"})," Do not use external libraries like ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/classnames",children:"classnames"}),"\nor ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/clsx",children:"clsx"})," with class names created with ",(0,o.jsx)(n.code,{children:"createStyles"})," function\nas it will produce styles collisions."]}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(n.h3,{id:"media-queries",children:"Media queries"}),"\n",(0,o.jsxs)(n.p,{children:["You can use nested media queries like in Sass. Within query body you can use ",(0,o.jsx)(n.code,{children:"theme.breakpoints"}),"\ndefined with ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," or just static values:"]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(n.h3,{id:"keyframes",children:"Keyframes"}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(n.h2,{id:"utilities",children:"Utilities"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sx"}),", ",(0,o.jsx)(n.code,{children:"styles"})," and ",(0,o.jsx)(n.code,{children:"createStyles"})," callback functions receive ",(0,o.jsx)(n.code,{children:"u"})," object with utilities\nto generate selectors. ",(0,o.jsx)(n.code,{children:"u"})," object contains the following properties:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const u = {\n  light: '[data-mantine-color-scheme=\"light\"] &',\n  dark: '[data-mantine-color-scheme=\"dark\"] &',\n  rtl: '[dir=\"rtl\"] &',\n  ltr: '[dir=\"ltr\"] &',\n  notRtl: '[dir=\"ltr\"] &',\n  notLtr: '[dir=\"rtl\"] &',\n  ref: getStylesRef,\n  smallerThan: (breakpoint: MantineBreakpoint | number) =>\n    `@media (max-width: ${em(getBreakpointValue(theme, breakpoint) - 0.1)})`,\n  largerThan: (breakpoint: MantineBreakpoint | number) =>\n    `@media (min-width: ${em(getBreakpointValue(theme, breakpoint))})`,\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["All utilities except ",(0,o.jsx)(n.code,{children:"ref"})," can be used as selectors in styles object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const styles = {\n  root: {\n    [u.dark]: { color: 'white' },\n    [u.rtl]: { padding: 10 },\n    [u.smallerThan('md')]: { lineHeight: 20 },\n  },\n};\n"})})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,{...e,children:(0,o.jsx)(D,{...e})})}function A(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47038:(e,n)=>{"use strict";var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler");Symbol.for("react.provider");var a=Symbol.for("react.consumer"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),x=Symbol.for("react.client.reference");function f(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case r:case i:case s:case d:case m:return e;default:switch(e=e&&e.$$typeof){case c:case l:case h:case u:case a:return e;default:return n}}case o:return n}}}n.ContextConsumer=a,n.ContextProvider=c,n.Element=t,n.ForwardRef=l,n.Fragment=r,n.Lazy=h,n.Memo=u,n.Portal=o,n.Profiler=i,n.StrictMode=s,n.Suspense=d,n.SuspenseList=m,n.isContextConsumer=function(e){return f(e)===a},n.isContextProvider=function(e){return f(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return f(e)===l},n.isFragment=function(e){return f(e)===r},n.isLazy=function(e){return f(e)===h},n.isMemo=function(e){return f(e)===u},n.isPortal=function(e){return f(e)===o},n.isProfiler=function(e){return f(e)===i},n.isStrictMode=function(e){return f(e)===s},n.isSuspense=function(e){return f(e)===d},n.isSuspenseList=function(e){return f(e)===m},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===i||e===s||e===d||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===u||e.$$typeof===c||e.$$typeof===a||e.$$typeof===l||e.$$typeof===x||void 0!==e.getModuleId)},n.typeOf=f},524:(e,n,t)=>{"use strict";e.exports=t(47038)},63295:(e,n,t)=>{"use strict";t.d(n,{C:()=>a});var o=t(31085),r=t(31313);let s=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Use light and dark selectors to change styles based on color scheme
    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },

    // Reference theme.breakpoints in smallerThan and largerThan functions
    [u.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [\`& .\${u.ref('child')}\`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // Assign selector to a ref to reference it in other styles
    ref: u.ref('child'),
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,

    [u.light]: {
      backgroundColor: theme.white,
      color: theme.black,
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
`,i=(0,r.rU)((e,n,t)=>({wrapper:{maxWidth:400,width:"100%",height:180,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[t.light]:{backgroundColor:e.colors.gray[1]},[t.dark]:{backgroundColor:e.colors.dark[5]},[t.smallerThan("sm")]:{[`& .${t.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:t.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[t.light]:{backgroundColor:e.white,color:e.black},[t.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),a={type:"code",component:function(){let{classes:e}=i();return(0,o.jsx)("div",{className:e.wrapper,children:(0,o.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:s,defaultExpanded:!1}},29814:(e,n,t)=>{"use strict";t.d(n,{r:()=>r});var o=t(4749);function r(e,n){return e in n?(0,o.px)(n[e]):(0,o.px)(e)}},31313:(e,n,t)=>{"use strict";t.d(n,{rU:()=>f});var o=t(4749),r=t(39735),s=t(92408),i=t(93135),a=function(e,n,t){var o=e.key+"-"+n.name;!1===t&&void 0===e.registered[o]&&(e.registered[o]=n.styles)},c=function(e,n,t){a(e,n,t);var o=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var r=n;do e.insert(n===r?"."+o:"",r,e.sheet,!0),r=r.next;while(void 0!==r)}},l=t(54357),d=t(36906),m=t(14041);let{cssFactory:u}={cssFactory:function(e){let{cache:n}=e,t=(...e)=>{let{ref:t,args:o}=function(e){let n;if(1!==e.length)return{args:e,ref:n};let[t]=e;if(!(t instanceof Object)||!("ref"in t))return{args:e,ref:n};n=t.ref;let o={...t};return delete o.ref,{args:[o],ref:n}}(e),r=(0,i.J)(o,n.registered);return c(n,r,!1),`${n.key}-${r.name}${void 0===t?"":` ${t}`}`};return{css:t,cx:(...e)=>(function(e,n,t){var o;let r=[],s=(o="",t.split(" ").forEach(function(n){void 0!==e[n]?r.push(e[n]+";"):n&&(o+=n+" ")}),o);return r.length<2?t:s+n(r)})(n.registered,t,(0,l.A)(e))}}};function h(e){return`___ref-${e||""}`}function p(e,n){return n in e.breakpoints&&"number"!=typeof n?(0,o.px)(e.breakpoints[n]):(0,o.px)(n)}let x=e=>({light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:h,smallerThan:n=>`@media (max-width: ${(0,r.em)(p(e,n)-.1)})`,largerThan:n=>`@media (min-width: ${(0,r.em)(p(e,n))})`});function f(e){let n="function"==typeof e?e:()=>e;return function(e){let t=(0,s.xd)(),o=x(t),r=n(t,e,o),{css:i,cx:a}=function(){let e=(0,d.ZO)();return function(e,n){let t=(0,m.useRef)(null);return(!t.current||n.length!==t.current.prevDeps.length||t.current.prevDeps.map((e,t)=>e===n[t]).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:[...n]}),t.current.v}(()=>u({cache:e}),[e])}();return{classes:Object.keys(r).reduce((e,n)=>(e[n]=i(r[n]),e),{}),cx:a,theme:t}}}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(17973)),_N_E=e.O()}]);
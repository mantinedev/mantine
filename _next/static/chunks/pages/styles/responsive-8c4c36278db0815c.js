(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72479],{944:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});var o=s(6029),i=s(76320);let t={type:"code",component:function(){return(0,o.jsx)(i.a,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto",children:"Box with responsive style props"})},code:`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
`}},1798:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9015:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>M});var o=s(6029),i=s(16285),t=s(20888),r=s(26668),a={demo:"m_f2874dbd"};let d={type:"code",component:function(){return(0,o.jsx)("div",{className:a.demo,children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var l=s(9791),c=s(38774);let h={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.k,{size:"xs",hiddenFrom:"sm",label:"My input",placeholder:"My input"}),(0,o.jsx)(c.k,{size:"xl",visibleFrom:"sm",label:"My input",placeholder:"My input"})]})},code:[{fileName:"Demo.tsx",code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput size="xs" hiddenFrom="sm" label="My input" placeholder="My input" />
      <TextInput size="xl" visibleFrom="sm" label="My input" placeholder="My input" />
    </>
  );
}
`,language:"tsx"}]};var m=s(26082),p=s(70304),u=s(61087),x=s(33822);let v={type:"code",component:function(){let e=(0,x.U)(`(max-width: ${(0,m.em)(750)})`);return(0,o.jsx)(p.m,{label:e?"Mobile":"Desktop",children:(0,o.jsx)(u.$,{children:"Hover me"})})},code:`
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`};var f=s(70297),g=s(25763),j=s(944),y=s(38547),b=s(5262);let k=(0,y.P)(b.XZ.ResponsiveStyles);function w(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{DataTable:s,Demo:a,InstallScript:c}=n;return s||q("DataTable",!0),a||q("Demo",!0),c||q("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,o.jsx)(n.h2,{id:"media-queries",children:"Media queries"}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"configure-breakpoints",children:"Configure breakpoints"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.breakpoints"})," are used in all responsive Mantine components. Breakpoints are expected to be set in ",(0,o.jsx)(n.code,{children:"em"})," units.\nYou can configure these values with ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  breakpoints: {\n    xs: '30em',\n    sm: '48em',\n    md: '64em',\n    lg: '74em',\n    xl: '90em',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.breakpoints"})," values:"]}),"\n",(0,o.jsx)(s,{head:["Breakpoint","Viewport width","Value in px"],data:Object.keys(t.S.breakpoints).map(e=>[e,"".concat(t.S.breakpoints[e]),"".concat((0,r.px)(t.S.breakpoints[e]),"px")])}),"\n",(0,o.jsx)(n.h2,{id:"breakpoints-variables-in-css-modules",children:"Breakpoints variables in CSS modules"}),"\n",(0,o.jsxs)(n.p,{children:["It is not possible to use CSS variables inside media queries – these values cannot be dynamically\ngenerated by ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),". To use Mantine theme breakpoints\nin your ",(0,o.jsx)(n.code,{children:".css"})," files, you will need ",(0,o.jsx)(n.code,{children:"postcss-simple-vars"})," package:"]}),"\n",(0,o.jsx)(c,{dev:!0,packages:"postcss-simple-vars"}),"\n",(0,o.jsxs)(n.p,{children:["Add it to your ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"PostCSS config"})," in ",(0,o.jsx)(n.code,{children:"postcss.config.cjs"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you will be able to access these variables in your ",(0,o.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".demo {\n  @media (max-width: $mantine-breakpoint-xs) {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@media (max-width: 36em) {\n  .demo {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dynamic breakpoints are not supported"})}),"\n",(0,o.jsxs)(n.p,{children:["Values that are defined in ",(0,o.jsx)(n.code,{children:"postcss-simple-vars"})," config are static and\nare not connected to the ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," – if values change,\nyou will need to update them manually in both theme override and postcss config."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components that have a root element support ",(0,o.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,o.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"}),", ",(0,o.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,o.jsx)(a,{data:l.B}),"\n",(0,o.jsx)(n.h2,{id:"hidden-and-visible-from-as-classes",children:"Hidden and visible from as classes"}),"\n",(0,o.jsxs)(n.p,{children:["If you are building a custom component and want to use the same logic as in ",(0,o.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,o.jsx)(n.code,{children:"visibleFrom"})," props\nbut you do not want to use Mantine components, you can use ",(0,o.jsx)(n.code,{children:"mantine-hidden-from-{x}"})," and ",(0,o.jsx)(n.code,{children:"mantine-visible-from-{x}"}),"\nclasses."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'function CustomComponent() {\n  return (\n    <>\n      <div className="mantine-hidden-from-md">Hidden from md</div>\n      <div className="mantine-visible-from-xl">Visible from xl</div>\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"component-size-based-on-media-query",children:"Component size based on media query"}),"\n",(0,o.jsxs)(n.p,{children:["Some components support ",(0,o.jsx)(n.code,{children:"size"})," prop, which changes various aspects of component appearance.\n",(0,o.jsx)(n.code,{children:"size"})," prop is not responsive – it is not possible to define different component sizes for different\nscreen sizes. Instead, you can render multiple components with different sizes and show/hide them\nbased on media query with ",(0,o.jsx)(n.code,{children:"className"})," or ",(0,o.jsx)(n.code,{children:"hiddenFrom"}),"/",(0,o.jsx)(n.code,{children:"visibleFrom"})," props:"]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"use-media-query-hook",children:"use-media-query hook"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," to change some of component props\nbased on media query. Note that this approach is not recommended for most of the cases if you have\nssr in your application (you use Next.js, React Router, Gatsby or any other framework that includes ssr)\nas it may cause hydration mismatch. If you do not have ssr in your application (for example, if you use Vite),\nthen you can safely use this hook to change props of components or conditionally render components\nbased on hook return value."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," can be safely used to change props of components that are not rendered\non server side (modals, tooltips, etc.). In the following example, it is safe to use ",(0,o.jsx)(n.code,{children:"useMediaQuery"})," hook to\nchange ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," props as it is not rendered on server side:"]}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(n.h2,{id:"use-matches-hook",children:"use-matches hook"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-matches"})," hook exported from ",(0,o.jsx)(n.code,{children:"@mantine/core"})," is an alternative to ",(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"}),"\nif you need to match multiple media queries and values. It accepts an object with media queries as keys and\nvalues at given breakpoint as values."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"use-matches"})," hook uses the same logic as ",(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," under the hood,\nit is not recommended to be used as a primary source of responsive styles, especially if you have ssr in your application."]}),"\n",(0,o.jsx)(n.p,{children:"In the following example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Starting from ",(0,o.jsx)(n.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,o.jsx)(n.code,{children:"red.9"})]}),"\n",(0,o.jsxs)(n.li,{children:["Between ",(0,o.jsx)(n.code,{children:"theme.breakpoints.sm"})," and ",(0,o.jsx)(n.code,{children:"theme.breakpoints.lg"}),", color will be ",(0,o.jsx)(n.code,{children:"orange.9"})]}),"\n",(0,o.jsxs)(n.li,{children:["Below ",(0,o.jsx)(n.code,{children:"theme.breakpoints.sm"}),", color will be ",(0,o.jsx)(n.code,{children:"blue.9"})]}),"\n"]}),"\n",(0,o.jsx)(a,{data:f.I}),"\n",(0,o.jsx)(n.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"Container queries"}),"\nenable you to apply styles to an element based on the size of the element's container.\nIf, for example, a container has less space available in the surrounding context,\nyou can hide certain elements or use smaller fonts. Container queries are supported\nin ",(0,o.jsx)(n.a,{href:"https://caniuse.com/css-container-queries",children:"all modern browsers"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"rem"})," and ",(0,o.jsx)(n.code,{children:"em"})," functions from ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nin container queries. Note that CSS variables do not work in container queries and because of that\n",(0,o.jsx)(n.a,{href:"/styles/rem/#rem-units-scaling",children:"rem scaling"})," feature is not available. If you rely on this feature,\nit is better to define breakpoints in ",(0,o.jsx)(n.code,{children:"px"})," units."]}),"\n",(0,o.jsx)(a,{data:g.l}),"\n",(0,o.jsx)(n.h2,{id:"responsive-style-props",children:"Responsive style props"}),"\n",(0,o.jsxs)(n.p,{children:["You can use object syntax to add responsive styles with ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),".\nNote that responsive style props are ",(0,o.jsx)(n.a,{href:"/styles/styles-performance",children:"less performant"})," than regular style props,\nit is not recommended to use them in large lists of elements."]}),"\n",(0,o.jsx)(a,{data:j.A}),"\n",(0,o.jsx)(n.p,{children:"Responsive values are calculated the following way:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"base"})," value is used when none of breakpoint values are applied"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"}),", ",(0,o.jsx)(n.code,{children:"xl"})," values are used when the viewport width is larger that the value of corresponding breakpoint specified in ",(0,o.jsx)(n.a,{href:"/styles/responsive/",children:"theme.breakpoints"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box w={{ base: 320, sm: 480, lg: 640 }} />;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this case the element will have the following styles:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* Base styles added to element and then get overwritten with responsive values */\n.element {\n  width: 20rem;\n}\n\n/* 48em is theme.breakpoints.sm by default */\n@media (min-width: 48em) {\n  .element {\n    width: 30rem;\n  }\n}\n\n/* 75em is theme.breakpoints.lg by default */\n@media (min-width: 75em) {\n  .element {\n    width: 40rem;\n  }\n}\n"})})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(k,{...e,children:(0,o.jsx)(w,{...e})})}function q(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9791:(e,n,s)=>{"use strict";s.d(n,{B:()=>r});var o=s(6029),i=s(57414),t=s(61087);let r={type:"code",component:function(){return(0,o.jsxs)(i.Y,{justify:"center",children:[(0,o.jsx)(t.$,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,o.jsx)(t.$,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,o.jsx)(t.$,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
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
`}},24583:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},25763:(e,n,s)=>{"use strict";s.d(n,{l:()=>t});var o=s(6029),i={root:"m_cd12fd1e",child:"m_d4760060"};let t={type:"code",component:function(){return(0,o.jsx)("div",{className:i.root,children:(0,o.jsx)("div",{className:i.child,children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]}},33873:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/responsive",function(){return s(9015)}])},34891:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},70297:(e,n,s)=>{"use strict";s.d(n,{I:()=>d});var o=s(6029),i=s(33822),t=s(49643);let r=["xs","sm","md","lg","xl"];var a=s(76320);let d={type:"code",component:function(){let e=function(e,n){let s=(0,t.xd)(),o=(0,i.U)(`(min-width: ${s.breakpoints.xs})`,!1,void 0),a=(0,i.U)(`(min-width: ${s.breakpoints.sm})`,!1,void 0),d=(0,i.U)(`(min-width: ${s.breakpoints.md})`,!1,n),l=(0,i.U)(`(min-width: ${s.breakpoints.lg})`,!1,n);var c=r[[o,a,d,l,(0,i.U)(`(min-width: ${s.breakpoints.xl})`,!1,n)].findLastIndex(e=>e)];if(!c)return e.base;let h=r.indexOf(c);for(;h>=0;){if(r[h]in e)return e[r[h]];h-=1}return e.base}({base:"blue.9",sm:"orange.9",lg:"red.9"});return(0,o.jsx)(a.a,{bg:e,c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`}},84276:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,n,s)=>{"use strict";s.d(n,{A:()=>o});let o=(0,s(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=33873)),_N_E=e.O()}]);
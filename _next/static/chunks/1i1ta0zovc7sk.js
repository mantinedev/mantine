(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let t={};for(var o in e)n(t,o,{get:e[o],enumerable:!0});return i||n(t,Symbol.toStringTag,{value:"Module"}),t}])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},814957,e=>{"use strict";var n=e.i(648863),i=e.i(882377),t=e.i(391398);let o={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Container,{...e,mt:0,children:"Default Container"}),(0,t.jsx)(i.Container,{size:"xs",...e,children:"xs Container"}),(0,t.jsx)(i.Container,{px:0,size:480,...e,children:"480px Container without padding"})]})},code:`
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}
`};var r=e.i(951254),s=e.i(530514),a=e.i(779177);let d=`
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
  xxl: 900,
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? rem(CONTAINER_SIZES[size])
              : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}

`,c={xxs:300,xs:400,sm:500,md:600,lg:700,xl:800,xxl:900},l=(0,s.createTheme)({components:{Container:i.Container.extend({vars:(e,{size:n,fluid:i})=>({root:{"--container-size":i?"100%":void 0!==n&&n in c?(0,a.rem)(c[n]):(0,a.rem)(n)}})})}}),h={type:"code",component:function(){return(0,t.jsx)(r.MantineThemeProvider,{theme:l,children:(0,t.jsx)(i.Container,{size:"xxs",bg:"var(--mantine-color-blue-light)",children:"Container with custom size"})})},code:d},m={type:"code",component:function(){return(0,t.jsx)(i.Container,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)",children:"Fluid container has 100% max-width"})},code:`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`};var x=e.i(56206);let u=`
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
`,p=`
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`,g=(0,s.createTheme)({components:{Container:i.Container.extend({classNames:(e,{size:n})=>({root:(0,x.default)({m_fcba15f2:"responsive"===n})})})}}),j={type:"code",component:function(){return(0,t.jsx)(r.MantineThemeProvider,{theme:g,children:(0,t.jsx)(i.Container,{size:"responsive",bg:"var(--mantine-color-blue-light)",children:"Container with responsive size"})})},code:[{fileName:"Demo.tsx",code:u,language:"tsx"},{fileName:"Demo.module.css",code:p,language:"scss"}]};var C=e.i(232471);let f={type:"code",component:function(){return(0,t.jsxs)(i.Container,{strategy:"grid",size:500,children:[(0,t.jsx)(C.Box,{bg:"var(--mantine-color-indigo-light)",h:50,children:"Main content"}),(0,t.jsxs)(C.Box,{"data-breakout":!0,bg:"var(--mantine-color-indigo-light)",mt:"xs",children:[(0,t.jsx)("div",{children:"Breakout"}),(0,t.jsx)(C.Box,{"data-container":!0,bg:"indigo",c:"white",h:50,children:(0,t.jsx)("div",{children:"Container inside breakout"})})]})]})},code:`
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
`};var v=(0,n.__exportAll)({breakout:()=>f,fluid:()=>m,responsive:()=>j,sizes:()=>h,usage:()=>o});e.s(["ContainerDemos",0,v],814957)},330823,e=>{"use strict";var n=e.i(391398),i=e.i(38856),t=e.i(814957);e.i(603441);var o=e.i(62558);e.i(457450);var r=e.i(418026);let s=(0,o.Layout)(r.MDX_DATA.Container);function a(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.useMDXComponents)(),...e.components},{Demo:r}=o;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"grid-strategy",children:"Grid strategy"}),"\n",(0,n.jsxs)(o.p,{children:["Starting from 8.2.0, ",(0,n.jsx)(o.code,{children:"Container"})," supports the ",(0,n.jsx)(o.code,{children:'strategy="grid"'})," prop which enables more\nfeatures."]}),"\n",(0,n.jsxs)(o.p,{children:["Differences from the default ",(0,n.jsx)(o.code,{children:'strategy="block"'}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Uses ",(0,n.jsx)(o.code,{children:"display: grid"})," instead of ",(0,n.jsx)(o.code,{children:"display: block"})]}),"\n",(0,n.jsx)(o.li,{children:"Does not include default inline padding"}),"\n",(0,n.jsxs)(o.li,{children:["Does not set ",(0,n.jsx)(o.code,{children:"max-width"})," on the root element (uses grid template columns instead)"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Features supported by ",(0,n.jsx)(o.code,{children:'strategy="grid"'}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Everything that is supported by ",(0,n.jsx)(o.code,{children:'strategy="block"'})]}),"\n",(0,n.jsxs)(o.li,{children:["Children with ",(0,n.jsx)(o.code,{children:"data-breakout"})," attribute take the entire width of the container's parent element"]}),"\n",(0,n.jsxs)(o.li,{children:["Children with ",(0,n.jsx)(o.code,{children:"data-container"})," inside ",(0,n.jsx)(o.code,{children:"data-breakout"})," have the same width as the main grid column"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Example of using breakout feature:"}),"\n",(0,n.jsx)(r,{data:t.ContainerDemos.breakout}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Container"})," centers content and limits its ",(0,n.jsx)(o.code,{children:"max-width"})," to the value specified in the ",(0,n.jsx)(o.code,{children:"size"})," prop.\nNote that the ",(0,n.jsx)(o.code,{children:"size"})," prop does not make ",(0,n.jsx)(o.code,{children:"max-width"})," responsive. For example,\nwhen it is set to ",(0,n.jsx)(o.code,{children:"lg"})," it will always be ",(0,n.jsx)(o.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,n.jsx)(r,{data:t.ContainerDemos.usage}),"\n",(0,n.jsx)(o.h2,{id:"fluid",children:"Fluid"}),"\n",(0,n.jsxs)(o.p,{children:["Set the ",(0,n.jsx)(o.code,{children:"fluid"})," prop to make the container fluid. It will take 100% of available width,\nwhich is the same as setting ",(0,n.jsx)(o.code,{children:'size="100%"'}),"."]}),"\n",(0,n.jsx)(r,{data:t.ContainerDemos.fluid}),"\n",(0,n.jsx)(o.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,n.jsxs)(o.p,{children:["You can customize existing ",(0,n.jsx)(o.code,{children:"Container"})," sizes and add new ones with ",(0,n.jsx)(o.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,n.jsx)(o.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,n.jsx)(r,{data:t.ContainerDemos.sizes}),"\n",(0,n.jsx)(o.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,n.jsxs)(o.p,{children:["To make ",(0,n.jsx)(o.code,{children:"Container"})," ",(0,n.jsx)(o.code,{children:"max-width"})," responsive, use ",(0,n.jsx)(o.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,n.jsx)(o.code,{children:"classNames"}),". For example, you can add a ",(0,n.jsx)(o.code,{children:"responsive"})," size that will make the ",(0,n.jsx)(o.code,{children:"Container"}),"\n",(0,n.jsx)(o.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,n.jsx)(r,{data:t.ContainerDemos.responsive})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})})}])},274128,(e,n,i)=>{let t="/core/container";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(330823)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
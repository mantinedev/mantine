(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18277],{9491:(e,n,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return i(3593)}])},3593:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>N});var t=i(31085),o=i(71184),r=i(38841);let s={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.m,{...e,mt:0,children:"Default Container"}),(0,t.jsx)(r.m,{size:"xs",...e,children:"xs Container"}),(0,t.jsx)(r.m,{px:0,size:480,...e,children:"480px Container without padding"})]})},code:`
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
`},a={type:"code",component:function(){return(0,t.jsx)(r.m,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)",children:"Fluid container has 100% max-width"})},code:`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`};var d=i(12616),c=i(39735),l=i(92408);let m=`
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

`,h={xxs:300,xs:400,sm:500,md:600,lg:700,xl:800,xxl:900},x=(0,d.a)({components:{Container:r.m.extend({vars:(e,{size:n,fluid:i})=>({root:{"--container-size":i?"100%":void 0!==n&&n in h?(0,c.D)(h[n]):(0,c.D)(n)}})})}}),p={type:"code",component:function(){return(0,t.jsx)(l.nW,{theme:x,children:(0,t.jsx)(r.m,{size:"xxs",bg:"var(--mantine-color-blue-light)",children:"Container with custom size"})})},code:m};var u=i(54357),C={responsiveContainer:"m_fcba15f2"};let f=`
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
`,j=`
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`,v=(0,d.a)({components:{Container:r.m.extend({classNames:(e,{size:n})=>({root:(0,u.A)({[C.responsiveContainer]:"responsive"===n})})})}}),g={type:"code",component:function(){return(0,t.jsx)(l.nW,{theme:v,children:(0,t.jsx)(r.m,{size:"responsive",bg:"var(--mantine-color-blue-light)",children:"Container with responsive size"})})},code:[{fileName:"Demo.tsx",code:f,language:"tsx"},{fileName:"Demo.module.css",code:j,language:"scss"}]};var w=i(85954),z=i(38215);let b=(0,w.P)(z.XZ.Container);function _(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,t.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,t.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,t.jsx)(n.code,{children:"size"})," prop does not make ",(0,t.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,t.jsx)(n.code,{children:"lg"})," it will always be ",(0,t.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,t.jsx)(i,{data:s}),"\n",(0,t.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,t.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,t.jsx)(i,{data:a}),"\n",(0,t.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize existing ",(0,t.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(i,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"Container"})," ",(0,t.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,t.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,t.jsx)(n.code,{children:"responsive"})," size that will make ",(0,t.jsx)(n.code,{children:"Container"}),"\n",(0,t.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,t.jsx)(i,{data:g})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,{...e,children:(0,t.jsx)(_,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(9491)),_N_E=e.O()}]);
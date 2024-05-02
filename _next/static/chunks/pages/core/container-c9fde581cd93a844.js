(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51269],{17165:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return i(68471)}])},68471:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return y}});var t=i(52322),o=i(45392),r=i(93540);let s=`
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

      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}
`,a={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.W,{...e,mt:0,children:"Default Container"}),(0,t.jsx)(r.W,{size:"xs",...e,children:"xs Container"}),(0,t.jsx)(r.W,{px:0,size:"30rem",...e,children:"30rem Container without padding"})]})},code:s},c=`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`,d={type:"code",component:function(){return(0,t.jsx)(r.W,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)",children:"Fluid container has 100% max-width"})},code:c};var l=i(58898),m=i(60231),h=i(68755);let x=`
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
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

`,u={xxs:(0,l.h)(300),xs:(0,l.h)(400),sm:(0,l.h)(500),md:(0,l.h)(600),lg:(0,l.h)(700),xl:(0,l.h)(800),xxl:(0,l.h)(900)},p=(0,m.j)({components:{Container:r.W.extend({vars:(e,{size:n,fluid:i})=>({root:{"--container-size":i?"100%":void 0!==n&&n in u?u[n]:(0,l.h)(n)}})})}}),f={type:"code",component:function(){return(0,t.jsx)(h.M2,{theme:p,children:(0,t.jsx)(r.W,{size:"xxs",bg:"var(--mantine-color-blue-light)",children:"Container with custom size"})})},code:x};var j=i(40489);let C=`
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
`,g=`
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`,v=(0,m.j)({components:{Container:r.W.extend({classNames:(e,{size:n})=>({root:(0,j.Z)({m_fcba15f2:"responsive"===n})})})}}),w={type:"code",component:function(){return(0,t.jsx)(h.M2,{theme:v,children:(0,t.jsx)(r.W,{size:"responsive",bg:"var(--mantine-color-blue-light)",children:"Container with responsive size"})})},code:[{fileName:"Demo.tsx",code:C,language:"tsx"},{fileName:"Demo.module.css",code:g,language:"scss"}]};var z=i(79016),b=i(33638);let _=(0,z.A)(b.us.Container);function N(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,t.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,t.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,t.jsx)(n.code,{children:"size"})," prop does not make ",(0,t.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,t.jsx)(n.code,{children:"lg"})," it will always be ",(0,t.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,t.jsx)(i,{data:a}),"\n",(0,t.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,t.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,t.jsx)(i,{data:d}),"\n",(0,t.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize existing ",(0,t.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(i,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"Container"})," ",(0,t.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,t.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,t.jsx)(n.code,{children:"responsive"})," size that will make ",(0,t.jsx)(n.code,{children:"Container"}),"\n",(0,t.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,t.jsx)(i,{data:w})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(_,{...e,children:(0,t.jsx)(N,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=17165)}),_N_E=e.O()}]);
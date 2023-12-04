(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1269],{94757:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return t(76272)}])},76272:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var i=t(24246),o=t(71670),r=t(3916),s=t(30289),a=t(27378),c=t(91428);let d=`
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
`,m={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return a.createElement(a.Fragment,null,a.createElement(c.W,{...e,mt:0},"Default Container"),a.createElement(c.W,{size:"xs",...e},"xs Container"),a.createElement(c.W,{px:0,size:"30rem",...e},"30rem Container without padding"))},code:d},l=`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`,h={type:"code",component:function(){return a.createElement(c.W,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)"},"Fluid container has 100% max-width")},code:l};var x=t(71078),u=t(74369),p=t(2256);let f=`
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

`,C={xxs:(0,x.h)(300),xs:(0,x.h)(400),sm:(0,x.h)(500),md:(0,x.h)(600),lg:(0,x.h)(700),xl:(0,x.h)(800),xxl:(0,x.h)(900)},g=(0,u.j)({components:{Container:c.W.extend({vars:(e,{size:n,fluid:t})=>({root:{"--container-size":t?"100%":void 0!==n&&n in C?C[n]:(0,x.h)(n)}})})}}),j={type:"code",component:function(){return a.createElement(p.M2,{theme:g},a.createElement(c.W,{size:"xxs",bg:"var(--mantine-color-blue-light)"},"Container with custom size"))},code:f};var v=t(40624);let w=`
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
`,z=`
.responsiveContainer {
  max-width: rem(300px);

  @media (min-width: em(400px)) {
    max-width: rem(400px);
  }

  @media (min-width: em(600px)) {
    max-width: rem(600px);
  }
}
`,b=(0,u.j)({components:{Container:c.W.extend({classNames:(e,{size:n})=>({root:(0,v.Z)({"m-fcba15f2":"responsive"===n})})})}}),E={type:"code",component:function(){return a.createElement(p.M2,{theme:b},a.createElement(c.W,{size:"responsive",bg:"var(--mantine-color-blue-light)"},"Container with responsive size"))},code:[{fileName:"Demo.tsx",code:w,language:"tsx"},{fileName:"Demo.module.css",code:z,language:"scss"}]},N=(0,r.A)(s.us.Container);function _(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,i.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,i.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,i.jsx)(n.code,{children:"size"})," prop does not make ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,i.jsx)(n.code,{children:"lg"})," it will always be ",(0,i.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,i.jsx)(t,{data:m}),"\n",(0,i.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,i.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,i.jsx)(t,{data:h}),"\n",(0,i.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize existing ",(0,i.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,i.jsx)(t,{data:j}),"\n",(0,i.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,i.jsxs)(n.p,{children:["To make ",(0,i.jsx)(n.code,{children:"Container"})," ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,i.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,i.jsx)(n.code,{children:"responsive"})," size that will make ",(0,i.jsx)(n.code,{children:"Container"}),"\n",(0,i.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,i.jsx)(t,{data:E})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(N,{...e,children:(0,i.jsx)(_,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=94757)}),_N_E=e.O()}]);
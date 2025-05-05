(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18277],{9491:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return t(3593)}])},3593:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var i=t(31085),s=t(71184),o=t(38841);let r={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.m,{...e,mt:0,children:"Default Container"}),(0,i.jsx)(o.m,{size:"xs",...e,children:"xs Container"}),(0,i.jsx)(o.m,{px:0,size:480,...e,children:"480px Container without padding"})]})},code:`
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
`},a={type:"code",component:function(){return(0,i.jsx)(o.m,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)",children:"Fluid container has 100% max-width"})},code:`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`};var d=t(12616),c=t(39735),l=t(92408);let h=`
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

`,m={xxs:300,xs:400,sm:500,md:600,lg:700,xl:800,xxl:900},p=(0,d.a)({components:{Container:o.m.extend({vars:(e,{size:n,fluid:t})=>({root:{"--container-size":t?"100%":void 0!==n&&n in m?(0,c.D)(m[n]):(0,c.D)(n)}})})}}),v={type:"code",component:function(){return(0,i.jsx)(l.nW,{theme:p,children:(0,i.jsx)(o.m,{size:"xxs",bg:"var(--mantine-color-blue-light)",children:"Container with custom size"})})},code:h};var x=t(54357),u={responsiveContainer:"m_fcba15f2"};let g=`
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
`,y=`
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`,C=(0,d.a)({components:{Container:o.m.extend({classNames:(e,{size:n})=>({root:(0,x.A)({[u.responsiveContainer]:"responsive"===n})})})}}),f={type:"code",component:function(){return(0,i.jsx)(l.nW,{theme:C,children:(0,i.jsx)(o.m,{size:"responsive",bg:"var(--mantine-color-blue-light)",children:"Container with responsive size"})})},code:[{fileName:"Demo.tsx",code:g,language:"tsx"},{fileName:"Demo.module.css",code:y,language:"scss"}]};var k=t(18675),j=t(20017);let M=(0,k.P)(j.XZ.Container);function w(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,i.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,i.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,i.jsx)(n.code,{children:"size"})," prop does not make ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,i.jsx)(n.code,{children:"lg"})," it will always be ",(0,i.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,i.jsx)(t,{data:r}),"\n",(0,i.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,i.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,i.jsx)(t,{data:a}),"\n",(0,i.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize existing ",(0,i.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,i.jsx)(t,{data:v}),"\n",(0,i.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,i.jsxs)(n.p,{children:["To make ",(0,i.jsx)(n.code,{children:"Container"})," ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,i.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,i.jsx)(n.code,{children:"responsive"})," size that will make ",(0,i.jsx)(n.code,{children:"Container"}),"\n",(0,i.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,i.jsx)(t,{data:f})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(M,{...e,children:(0,i.jsx)(w,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(9491)),_N_E=e.O()}]);
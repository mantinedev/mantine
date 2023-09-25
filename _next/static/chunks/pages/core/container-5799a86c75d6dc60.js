(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1269],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},48385:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return t(27018)}])},27018:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var i=t(85893),r=t(11151),o=t(19905),s=t(9904),a=t(67294),c=t(78621),d=Object.defineProperty,l=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&v(e,t,n[t]);if(m)for(var t of m(n))u.call(n,t)&&v(e,t,n[t]);return e},f=(e,n)=>l(e,h(n));let g=`
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
`,C={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return a.createElement(a.Fragment,null,a.createElement(c.W,f(x({},e),{mt:0}),"Default Container"),a.createElement(c.W,x({size:"xs"},e),"xs Container"),a.createElement(c.W,x({px:0,size:"30rem"},e),"30rem Container without padding"))},code:g},y=`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`,j={type:"code",component:function(){return a.createElement(c.W,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)"},"Fluid container has 100% max-width")},code:y};var w=t(72622),b=t(28120),k=t(43440);let M=`
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

`,z={xxs:(0,w.h)(300),xs:(0,w.h)(400),sm:(0,w.h)(500),md:(0,w.h)(600),lg:(0,w.h)(700),xl:(0,w.h)(800),xxl:(0,w.h)(900)},E=(0,b.j)({components:{Container:c.W.extend({vars:(e,{size:n,fluid:t})=>({root:{"--container-size":t?"100%":void 0!==n&&n in z?z[n]:(0,w.h)(n)}})})}}),P={type:"code",component:function(){return a.createElement(k.M2,{theme:E},a.createElement(c.W,{size:"xxs",bg:"var(--mantine-color-blue-light)"},"Container with custom size"))},code:M};var Z=t(40624),N={responsiveContainer:"m-fcba15f2"};let _=`
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
`,O=`
.responsiveContainer {
  max-width: rem(300px);

  @media (min-width: em(400px)) {
    max-width: rem(400px);
  }

  @media (min-width: em(600px)) {
    max-width: rem(600px);
  }
}
`,I=(0,b.j)({components:{Container:c.W.extend({classNames:(e,{size:n})=>({root:(0,Z.Z)({[N.responsiveContainer]:"responsive"===n})})})}}),S={type:"code",component:function(){return a.createElement(k.M2,{theme:I},a.createElement(c.W,{size:"responsive",bg:"var(--mantine-color-blue-light)"},"Container with responsive size"))},code:[{fileName:"Demo.tsx",code:_,language:"tsx"},{fileName:"Demo.module.css",code:O,language:"css"}]},D=(0,o.A)(s.us.Container);function T(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,i.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,i.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,i.jsx)(n.code,{children:"size"})," prop does not make ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,i.jsx)(n.code,{children:"lg"})," it will always be ",(0,i.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,i.jsx)(t,{data:C}),"\n",(0,i.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,i.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,i.jsx)(t,{data:j}),"\n",(0,i.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize existing ",(0,i.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,i.jsx)(t,{data:P}),"\n",(0,i.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,i.jsxs)(n.p,{children:["To make ",(0,i.jsx)(n.code,{children:"Container"})," ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,i.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,i.jsx)(n.code,{children:"responsive"})," size that will make ",(0,i.jsx)(n.code,{children:"Container"}),"\n",(0,i.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,i.jsx)(t,{data:S})]})}var W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(D,Object.assign({},e,{children:(0,i.jsx)(T,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=48385)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7316],{33507:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var s=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},76344:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/responsive",function(){return o(98793)}])},98793:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return q}});var s=o(85893),t=o(11151),i=o(19905),r=o(9904),a=o(38621),c=o(91624),d=o(67294),l={demo:"m-f2874dbd"};let m=`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,p=`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,h={type:"code",component:function(){return d.createElement("div",{className:l.demo},"Demo")},code:[{fileName:"Demo.module.css",code:p,language:"css"},{fileName:"Demo.tsx",code:m,language:"tsx"}]};var u=o(69354),f=o(50780),v={"input-mobile":"m-1ed461e1","input-desktop":"m-cf7fe6bd"};let x=`
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`,y=`
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`,g={type:"code",component:function(){return d.createElement(d.Fragment,null,d.createElement(f.o,{label:"My input",placeholder:"My input",size:"xs",className:v["input-mobile"]}),d.createElement(f.o,{label:"My input",placeholder:"My input",size:"xl",className:v["input-desktop"]}))},code:[{fileName:"Demo.tsx",code:x,language:"tsx"},{fileName:"Demo.module.css",code:y,language:"css"}]};var b=o(72622),k=o(46842),j=o(14469),M=o(3921);let w=`
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
`,N={type:"code",component:function(){let e=(0,M.a)(`(max-width: ${(0,b.em)(750)})`);return d.createElement(k.u,{label:e?"Mobile":"Desktop"},d.createElement(j.z,null,"Hover me"))},code:w},D=(0,i.A)(r.us.ResponsiveStyles);function E(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,t.ah)(),e.components),{Demo:o,DataTable:i,InstallScript:r}=n;return i||z("DataTable",!0),o||z("Demo",!0),r||z("InstallScript",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,s.jsx)(n.h2,{id:"media-queries",children:"Media queries"}),"\n",(0,s.jsx)(o,{data:h}),"\n",(0,s.jsx)(n.h2,{id:"configure-breakpoints",children:"Configure breakpoints"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"theme.breakpoints"})," are used in all responsive Mantine components. Breakpoints are expected to be set in ",(0,s.jsx)(n.code,{children:"em"})," units.\nYou can configure these values with ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  breakpoints: {\n    xs: '30em',\n    sm: '48em',\n    md: '64em',\n    lg: '74em',\n    xl: '90em',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"theme.breakpoints"})," values:"]}),"\n",(0,s.jsx)(i,{head:["Breakpoint","Viewport width","Value in px"],data:Object.keys(a.t.breakpoints).map(e=>[e,"".concat(a.t.breakpoints[e]),"".concat((0,c.px)(a.t.breakpoints[e]),"px")])}),"\n",(0,s.jsx)(n.h2,{id:"breakpoints-variables-in-css-modules",children:"Breakpoints variables in CSS modules"}),"\n",(0,s.jsxs)(n.p,{children:["It is not possible to use CSS variables inside media queries – these values cannot be dynamically\ngenerated by ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),". To use Mantine theme breakpoints\nin your ",(0,s.jsx)(n.code,{children:".css"})," files, you will need ",(0,s.jsx)(n.code,{children:"postcss-simple-vars"})," package:"]}),"\n",(0,s.jsx)(r,{dev:!0,packages:"postcss-simple-vars"}),"\n",(0,s.jsxs)(n.p,{children:["Add it to your ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"PostCSS config"})," in ",(0,s.jsx)(n.code,{children:"postcss.config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you will be able to access these variables in your ",(0,s.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".demo {\n  @media (max-width: $mantine-breakpoint-xs) {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"@media (max-width: 36em) {\n  .demo {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dynamic breakpoints are not supported"})}),"\n",(0,s.jsxs)(n.p,{children:["Values that are defined in ",(0,s.jsx)(n.code,{children:"postcss-simple-vars"})," config are static and\nare not connected to the ",(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," – if values change,\nyou will need to update them manually in both theme override and postcss config."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,s.jsxs)(n.p,{children:["All Mantine components that have a root element support ",(0,s.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,s.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,s.jsx)(n.code,{children:"xs"}),", ",(0,s.jsx)(n.code,{children:"sm"}),", ",(0,s.jsx)(n.code,{children:"md"}),", ",(0,s.jsx)(n.code,{children:"lg"}),", ",(0,s.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,s.jsx)(o,{data:u.n}),"\n",(0,s.jsx)(n.h2,{id:"component-size-based-on-media-query",children:"Component size based on media query"}),"\n",(0,s.jsxs)(n.p,{children:["Some components support ",(0,s.jsx)(n.code,{children:"size"})," prop, which changes various aspects of component appearance.\n",(0,s.jsx)(n.code,{children:"size"})," prop is not responsive – it is not possible to define different component sizes for different\nscreen sizes. Instead, you can render multiple components with different sizes and show/hide them\nbased on media query:"]}),"\n",(0,s.jsx)(o,{data:g}),"\n",(0,s.jsx)(n.h2,{id:"use-media-query-hook",children:"use-media-query hook"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," to change some of component props\nbased on media query. Note that this approach is not recommended for most of the cases if you have\nssr in your application (you use Next.js, Remix, Gatsby or any other framework that includes ssr)\nas it may cause hydration mismatch. If you do not have ssr in your application (for example, if you use Vite),\nthen you can safely use this hook to change props of components or conditionally render components\nbased on hook return value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," can be safely used to change props of components that are not rendered\non server side (modals, tooltips, etc.). In the following example, it is safe to use ",(0,s.jsx)(n.code,{children:"useMediaQuery"})," hook to\nchange ",(0,s.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," props as it is not rendered on server side:"]}),"\n",(0,s.jsx)(o,{data:N})]})}var q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(D,Object.assign({},e,{children:(0,s.jsx)(E,e)}))};function z(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},69354:function(e,n,o){"use strict";o.d(n,{n:function(){return a}});var s=o(67294),t=o(16262),i=o(14469);let r=`
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
`,a={type:"code",component:function(){return s.createElement(t.Z,{justify:"center"},s.createElement(i.z,{hiddenFrom:"sm",color:"orange"},"Hidden from sm"),s.createElement(i.z,{visibleFrom:"sm",color:"cyan"},"Visible from sm"),s.createElement(i.z,{visibleFrom:"md",color:"pink"},"Visible from md"))},code:r}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=76344)}),_N_E=e.O()}]);
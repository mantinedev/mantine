(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let t={};for(var n in e)o(t,n,{get:e[n],enumerable:!0});return r||o(t,Symbol.toStringTag,{value:"Module"}),t}])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},108947,e=>{"use strict";var o=e.i(648863),r=e.i(29260),t=e.i(232471),n=e.i(485108),i=e.i(725695),a=e.i(505716),s=e.i(391398),d=e.i(541772);let l={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,d.useDisclosure)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.Box,{pos:"relative",children:[(0,s.jsx)(a.LoadingOverlay,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),(0,s.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,s.jsx)(i.Group,{justify:"center",mt:"xl",children:(0,s.jsx)(n.Button,{onClick:o,children:"Toggle overlay"})})]})}},c={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,d.useDisclosure)(!0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.Box,{pos:"relative",children:[(0,s.jsx)(a.LoadingOverlay,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),(0,s.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,s.jsx)(i.Group,{justify:"center",mt:"xl",children:(0,s.jsx)(n.Button,{onClick:o,children:"Toggle overlay"})})]})}},u={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:o}]=(0,d.useDisclosure)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.Box,{pos:"relative",children:[(0,s.jsx)(a.LoadingOverlay,{visible:e,loaderProps:{children:"Loading..."}}),(0,s.jsx)(r.AuthenticationForm,{noSubmit:!0})]}),(0,s.jsx)(i.Group,{justify:"center",mt:"xl",children:(0,s.jsx)(n.Button,{onClick:o,children:"Toggle overlay"})})]})}};var m=(0,o.__exportAll)({customLoader:()=>u,loaderProps:()=>c,usage:()=>l});e.s(["LoadingOverlayDemos",0,m],108947)},325800,e=>{"use strict";var o=e.i(648863),r=e.i(935769);let t={type:"configurator",component:r.Loader,code:`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]};var n=e.i(391398);let i=`
import { MantineLoaderComponent } from '@mantine/core';

export const RingLoader: MantineLoaderComponent = ({ style, ...others }) => (
  <svg
    {...others}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);`;var a=e.i(951254),s=e.i(530514);let d=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,l=(0,s.createTheme)({components:{Loader:r.Loader.extend({defaultProps:{loaders:{...r.Loader.defaultLoaders,ring:({style:e,...o})=>(0,n.jsx)("svg",{...o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,n.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,n.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,n.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,n.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,n.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})},type:"ring"}})}}),c={type:"code",component:function(){return(0,n.jsx)(a.MantineThemeProvider,{theme:l,children:(0,n.jsx)(r.Loader,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:d},{fileName:"RingLoader.tsx",language:"tsx",code:i}]};var u=e.i(232471),m=e.i(56206);let p=`
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} />
);
`,h=`
@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}

.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
`,x=`
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,g=(0,s.createTheme)({components:{Loader:r.Loader.extend({defaultProps:{loaders:{...r.Loader.defaultLoaders,custom:({className:e,...o})=>(0,n.jsx)(u.Box,{component:"span",className:(0,m.default)("m_25f74dea",e),...o})},type:"custom"}})}}),f={type:"code",component:function(){return(0,n.jsx)(a.MantineThemeProvider,{theme:g,children:(0,n.jsx)(r.Loader,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:x},{fileName:"CssLoader.tsx",language:"tsx",code:p},{fileName:"CssLoader.module.css",language:"scss",code:h}]},v={type:"configurator",component:function(e){return(0,n.jsx)(r.Loader,{...e})},code:`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var j=(0,o.__exportAll)({configurator:()=>t,cssLoader:()=>f,customType:()=>c,size:()=>v});e.s(["LoaderDemos",0,j],325800)},523404,e=>{"use strict";var o=e.i(391398),r=e.i(38856),t=e.i(325800),n=e.i(108947);e.i(603441);var i=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,i.Layout)(a.MDX_DATA.Loader);function d(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:a}=i;return a||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Loader"})," component supports 3 types of loaders by default: ",(0,o.jsx)(i.code,{children:"oval"}),", ",(0,o.jsx)(i.code,{children:"bars"}),", and ",(0,o.jsx)(i.code,{children:"dots"}),". All\nloaders are animated with CSS for better performance."]}),"\n",(0,o.jsx)(a,{data:t.LoaderDemos.configurator}),"\n",(0,o.jsx)(i.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,o.jsxs)(i.p,{children:["You can pass any valid CSS values or numbers to the ",(0,o.jsx)(i.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,o.jsx)(i.a,{href:"/styles/rem",children:"rem"}),". For example, ",(0,o.jsx)(i.code,{children:"size={32}"})," will produce the\n",(0,o.jsx)(i.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,o.jsx)(a,{data:t.LoaderDemos.size}),"\n",(0,o.jsx)(i.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Loader"})," component is used in other components (",(0,o.jsx)(i.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(i.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(i.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change the loader type with ",(0,o.jsx)(i.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,o.jsx)(i.code,{children:"type"}),".\nYou can also add a custom CSS or SVG loader with the ",(0,o.jsx)(i.code,{children:"loaders"})," ",(0,o.jsx)(i.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,o.jsxs)(i.p,{children:["Note that in order for the ",(0,o.jsx)(i.code,{children:"size"})," and ",(0,o.jsx)(i.code,{children:"color"})," props to work with custom loaders, you need to\nuse the ",(0,o.jsx)(i.code,{children:"--loader-size"})," and ",(0,o.jsx)(i.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,o.jsx)(a,{data:t.LoaderDemos.cssLoader}),"\n",(0,o.jsx)(i.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,o.jsx)(i.p,{children:"It is recommended to use CSS-only loaders, as SVG-based animations may have the following issues:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"High CPU usage – the loader may look glitchy on low-end devices"}),"\n",(0,o.jsx)(i.li,{children:"Loader animation may not start playing until JS is loaded – users may see a static loader"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["In your SVG loader, you need to use the ",(0,o.jsx)(i.code,{children:"--loader-size"})," and ",(0,o.jsx)(i.code,{children:"--loader-color"})," variables the same\nway as in CSS-only custom loaders in order for the ",(0,o.jsx)(i.code,{children:"size"})," and ",(0,o.jsx)(i.code,{children:"color"})," props to work. Usually,\nyou would need to set ",(0,o.jsx)(i.code,{children:"width"})," and ",(0,o.jsx)(i.code,{children:"height"})," to ",(0,o.jsx)(i.code,{children:"var(--loader-size)"})," and ",(0,o.jsx)(i.code,{children:"fill"}),"/",(0,o.jsx)(i.code,{children:"stroke"})," to\n",(0,o.jsx)(i.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,o.jsx)(a,{data:t.LoaderDemos.customType}),"\n",(0,o.jsx)(i.h2,{id:"children-prop",children:"children prop"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Loader"})," supports the ",(0,o.jsx)(i.code,{children:"children"})," prop. If you pass anything to ",(0,o.jsx)(i.code,{children:"children"}),", it will be rendered\ninstead of the loader. This is useful when you want to control the ",(0,o.jsx)(i.code,{children:"Loader"})," representation\nin components that use ",(0,o.jsx)(i.code,{children:"loaderProps"}),", for example ",(0,o.jsx)(i.a,{href:"/core/button/",children:"Button"}),", ",(0,o.jsx)(i.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"}),", ",(0,o.jsx)(i.a,{href:"/x/dropzone/",children:"Dropzone"}),"."]}),"\n",(0,o.jsx)(a,{data:n.LoadingOverlayDemos.customLoader})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})})}])},102036,(e,o,r)=>{let t="/core/loader";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(523404)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);
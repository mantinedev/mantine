(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91141],{39553:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loader",function(){return o(7259)}])},7259:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return k}});var n=o(52322),a=o(45392),t=o(2171),i=o(12491);let s={type:"configurator",component:function(e){return(0,n.jsx)(i.a,{...e})},code:`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var d=o(60231),l=o(68755),c=o(2784),u=o(40489),m=o(28559);let p=(0,c.forwardRef)(({className:e,...r},o)=>(0,n.jsx)(m.x,{component:"span",className:(0,u.Z)("m_25f74dea",e),...r,ref:o})),h=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,f=`
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
`,j=(0,d.j)({components:{Loader:i.a.extend({defaultProps:{loaders:{...i.a.defaultLoaders,custom:p},type:"custom"}})}}),g={type:"code",component:function(){return(0,n.jsx)(l.M2,{theme:j,children:(0,n.jsx)(i.a,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:x},{fileName:"CssLoader.tsx",language:"tsx",code:h},{fileName:"CssLoader.module.css",language:"scss",code:f}]};var y=o(60070),v=o(12209),b=o(25071),w=o(15019);let L=(0,b.A)(w.us.Loader);function C(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{Demo:o}=r;return o||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," component supports 3 types of loaders: ",(0,n.jsx)(r.code,{children:"oval"}),", ",(0,n.jsx)(r.code,{children:"bars"})," and ",(0,n.jsx)(r.code,{children:"dots"})," by default. All\nloaders are animated with CSS for better performance."]}),"\n",(0,n.jsx)(o,{data:t.g}),"\n",(0,n.jsx)(r.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,n.jsxs)(r.p,{children:["You can pass any valid CSS values and numbers to ",(0,n.jsx)(r.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,n.jsx)(r.a,{href:"/styles/rem",children:"rem"}),". For example, ",(0,n.jsx)(r.code,{children:"size={32}"})," will produce\n",(0,n.jsx)(r.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,n.jsx)(o,{data:s}),"\n",(0,n.jsx)(r.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," component is used in other components (",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,n.jsx)(r.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change loader type with ",(0,n.jsx)(r.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,n.jsx)(r.code,{children:"type"}),".\nYou can also add a custom CSS or SVG loader with ",(0,n.jsx)(r.code,{children:"loaders"})," ",(0,n.jsx)(r.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,n.jsxs)(r.p,{children:["Note that in order for ",(0,n.jsx)(r.code,{children:"size"})," and ",(0,n.jsx)(r.code,{children:"color"})," props to work with custom loaders, you need to\nuse ",(0,n.jsx)(r.code,{children:"--loader-size"})," and ",(0,n.jsx)(r.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(r.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,n.jsx)(r.p,{children:"It is recommended to use CSS only loaders, as SVG based animations may have the following issues:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"High CPU usage – loader may look glitchy on low-end devices"}),"\n",(0,n.jsx)(r.li,{children:"Loader animation may not start playing until js is loaded – user may see static loader"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["In your SVG loader, you need to use ",(0,n.jsx)(r.code,{children:"--loader-size"})," and ",(0,n.jsx)(r.code,{children:"--loader-color"})," variables the same\nway as in CSS only custom loader in order for ",(0,n.jsx)(r.code,{children:"size"})," and ",(0,n.jsx)(r.code,{children:"color"})," props to work. Usually,\nyou would need to set ",(0,n.jsx)(r.code,{children:"width"})," and ",(0,n.jsx)(r.code,{children:"height"})," to ",(0,n.jsx)(r.code,{children:"var(--loader-size)"})," and ",(0,n.jsx)(r.code,{children:"fill"}),"/",(0,n.jsx)(r.code,{children:"stroke"})," to\n",(0,n.jsx)(r.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,n.jsx)(o,{data:y.T}),"\n",(0,n.jsx)(r.h2,{id:"children-prop",children:"children prop"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," supports ",(0,n.jsx)(r.code,{children:"children"})," prop. If you pass anything to ",(0,n.jsx)(r.code,{children:"children"}),", it will be rendered\ninstead of the loader. This is useful when you want to control ",(0,n.jsx)(r.code,{children:"Loader"})," representation\nin components that use ",(0,n.jsx)(r.code,{children:"loaderProps"}),", for example ",(0,n.jsx)(r.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"}),", ",(0,n.jsx)(r.a,{href:"/x/dropzone/",children:"Dropzone"}),"."]}),"\n",(0,n.jsx)(o,{data:v.l})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(L,{...e,children:(0,n.jsx)(C,{...e})})}},2171:function(e,r,o){"use strict";o.d(r,{g:function(){return t}});var n=o(12491);let a=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,t={type:"configurator",component:n.a,code:a,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},60070:function(e,r,o){"use strict";o.d(r,{T:function(){return u}});var n=o(52322),a=o(60231),t=o(12491),i=o(68755);let s=(0,o(2784).forwardRef)(({style:e,...r},o)=>(0,n.jsx)("svg",{...r,ref:o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,n.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,n.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,n.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,n.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,n.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})),d=`
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
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
));`,l=`
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
`,c=(0,a.j)({components:{Loader:t.a.extend({defaultProps:{loaders:{...t.a.defaultLoaders,ring:s},type:"ring"}})}}),u={type:"code",component:function(){return(0,n.jsx)(i.M2,{theme:c,children:(0,n.jsx)(t.a,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:l},{fileName:"RingLoader.tsx",language:"tsx",code:d}]}}},function(e){e.O(0,[61177,66748,11340,43092,36503,92888,49774,40179],function(){return e(e.s=39553)}),_N_E=e.O()}]);
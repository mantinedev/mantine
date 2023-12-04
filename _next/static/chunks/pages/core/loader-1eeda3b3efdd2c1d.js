(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1141],{37256:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loader",function(){return o(26729)}])},26729:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return C}});var n=o(24246),t=o(71670),a=o(3916),i=o(30289),d=o(60480),s=o(27378),l=o(42029);let c=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,u={type:"configurator",component:function(e){return s.createElement(l.a,{...e})},code:c,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var m=o(2256),p=o(40624),h=o(56589);let f=(0,s.forwardRef)(({className:e,...r},o)=>s.createElement(h.x,{component:"span",className:(0,p.Z)("m-25f74dea",e),...r,ref:o})),x=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,g=`
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
`,y=`
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,v={type:"code",component:function(){return s.createElement(m.M2,{theme:{components:{Loader:l.a.extend({defaultProps:{loaders:{...l.a.defaultLoaders,custom:f},type:"custom"}})}}},s.createElement(l.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:y},{fileName:"CssLoader.tsx",language:"tsx",code:x},{fileName:"CssLoader.module.css",language:"scss",code:g}]};var b=o(91880),j=o(9314);let w=(0,a.A)(i.us.Loader);function L(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{Demo:o}=r;return o||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," component supports 3 types of loaders: ",(0,n.jsx)(r.code,{children:"oval"}),", ",(0,n.jsx)(r.code,{children:"bars"})," and ",(0,n.jsx)(r.code,{children:"dots"})," by default. All\nloaders are animated with CSS for better performance."]}),"\n",(0,n.jsx)(o,{data:d.g}),"\n",(0,n.jsx)(r.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,n.jsxs)(r.p,{children:["You can pass any valid CSS values and numbers to ",(0,n.jsx)(r.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,n.jsx)(r.a,{href:"/styles/rem",children:"rem"}),". For example, ",(0,n.jsx)(r.code,{children:"size={32}"})," will produce\n",(0,n.jsx)(r.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,n.jsx)(o,{data:u}),"\n",(0,n.jsx)(r.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," component is used in other components (",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,n.jsx)(r.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change loader type with ",(0,n.jsx)(r.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,n.jsx)(r.code,{children:"type"}),".\nYou can also add a custom CSS or SVG loader with ",(0,n.jsx)(r.code,{children:"loaders"})," ",(0,n.jsx)(r.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,n.jsxs)(r.p,{children:["Note that in order for ",(0,n.jsx)(r.code,{children:"size"})," and ",(0,n.jsx)(r.code,{children:"color"})," props to work with custom loaders, you need to\nuse ",(0,n.jsx)(r.code,{children:"--loader-size"})," and ",(0,n.jsx)(r.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,n.jsx)(o,{data:v}),"\n",(0,n.jsx)(r.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,n.jsx)(r.p,{children:"It is recommended to use CSS only loaders, as SVG based animations may have the following issues:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"High CPU usage – loader may look glitchy on low-end devices"}),"\n",(0,n.jsx)(r.li,{children:"Loader animation may not start playing until js is loaded – user may see static loader"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["In your SVG loader, you need to use ",(0,n.jsx)(r.code,{children:"--loader-size"})," and ",(0,n.jsx)(r.code,{children:"--loader-color"})," variables the same\nway as in CSS only custom loader in order for ",(0,n.jsx)(r.code,{children:"size"})," and ",(0,n.jsx)(r.code,{children:"color"})," props to work. Usually,\nyou would need to set ",(0,n.jsx)(r.code,{children:"width"})," and ",(0,n.jsx)(r.code,{children:"height"})," to ",(0,n.jsx)(r.code,{children:"var(--loader-size)"})," and ",(0,n.jsx)(r.code,{children:"fill"}),"/",(0,n.jsx)(r.code,{children:"stroke"})," to\n",(0,n.jsx)(r.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,n.jsx)(o,{data:b.T}),"\n",(0,n.jsx)(r.h2,{id:"children-prop",children:"children prop"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Loader"})," supports ",(0,n.jsx)(r.code,{children:"children"})," prop. If you pass anything to ",(0,n.jsx)(r.code,{children:"children"}),", it will be rendered\ninstead of the loader. This is useful when you want to control ",(0,n.jsx)(r.code,{children:"Loader"})," representation\nin components that use ",(0,n.jsx)(r.code,{children:"loaderProps"}),", for example ",(0,n.jsx)(r.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(r.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"}),", ",(0,n.jsx)(r.a,{href:"/others/dropzone/",children:"Dropzone"}),"."]}),"\n",(0,n.jsx)(o,{data:j.l})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,{...e,children:(0,n.jsx)(L,{...e})})}},60480:function(e,r,o){"use strict";o.d(r,{g:function(){return a}});var n=o(42029);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,a={type:"configurator",component:n.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},91880:function(e,r,o){"use strict";o.d(r,{T:function(){return l}});var n=o(27378),t=o(2256),a=o(42029);let i=(0,n.forwardRef)(({style:e,...r},o)=>n.createElement("svg",{...r,ref:o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},n.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},n.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},n.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},n.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"22",cy:"22",r:"8"},n.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))),d=`
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
));`,s=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: 'ring',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,l={type:"code",component:function(){return n.createElement(t.M2,{theme:{components:{Loader:a.a.extend({defaultProps:{loaders:{...a.a.defaultLoaders,ring:i},type:"ring"}})}}},n.createElement(a.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:s},{fileName:"RingLoader.tsx",language:"tsx",code:d}]}}},function(e){e.O(0,[370,5819,2775,6926,2857,9774,2888,179],function(){return e(e.s=37256)}),_N_E=e.O()}]);
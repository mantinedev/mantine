(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62025],{88870:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-orientation",function(){return t(81656)}])},81656:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var i=t(31085),r=t(71184),o=t(89513),a=t(85954),s=t(38215);let d=(0,a.P)(s.XZ.useOrientation);function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useOrientation"})," returns an object with the current orientation of the device:"]}),"\n",(0,i.jsx)(t,{data:o.N}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"interface UseOrientationOptions {\n  /** Default angle value, used until the real can be retrieved\n   * (during server side rendering and before js executes on the page)\n   * If not provided, the default value is `0`\n   * */\n  defaultAngle?: number;\n\n  /** Default angle value, used until the real can be retrieved\n   * (during server side rendering and before js executes on the page)\n   * If not provided, the default value is `'landscape-primary'`\n   * */\n  defaultType?: OrientationType;\n\n  /** If true, the initial value will be resolved in useEffect (ssr safe)\n   *  If false, the initial value will be resolved in useLayoutEffect (ssr unsafe)\n   *  True by default.\n   */\n  getInitialValueInEffect?: boolean;\n}\n\ninterface UseOrientationReturnType {\n  angle: number;\n  type: OrientationType;\n}\n\nfunction useOrientation(options?: UseOrientationOptions): UseOrientationReturnType\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(d,{...e,children:(0,i.jsx)(l,{...e})})}},89513:(e,n,t)=>{"use strict";t.d(n,{N:()=>d});var i=t(31085),r=t(93065),o=t(37905),a=t(14041),s=t(89571);let d={type:"code",component:function(){let{angle:e,type:n}=function({defaultAngle:e=0,defaultType:n="landscape-primary",getInitialValueInEffect:t=!0}={}){var i;let[r,o]=(0,a.useState)((i={angle:e,type:n},t?i:"undefined"!=typeof window&&"screen"in window?{angle:window.screen.orientation?.angle??i.angle,type:window.screen.orientation?.type??i.type}:i)),d=e=>{let n=e.currentTarget;o({angle:n?.angle||0,type:n?.type||"landscape-primary"})};return(0,s.o)(()=>(window.screen.orientation?.addEventListener("change",d),()=>window.screen.orientation?.removeEventListener("change",d)),[]),r}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.E,{children:["Angle: ",(0,i.jsx)(o.C,{children:e})]}),(0,i.jsxs)(r.E,{children:["Type: ",(0,i.jsx)(o.C,{children:n})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';

function Demo() {
  const { angle, type } = useOrientation();
  return (
    <>
      <Text>
        Angle: <Code>{angle}</Code>
      </Text>
      <Text>
        Type: <Code>{type}</Code>
      </Text>
    </>
  );
}
`}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(88870)),_N_E=e.O()}]);
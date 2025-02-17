(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62025],{88870:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-orientation",function(){return t(81656)}])},81656:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var r=t(31085),o=t(71184),i=t(89513),s=t(85954),c=t(38215);let a=(0,s.P)(c.XZ.useOrientation);function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useOrientation"})," returns an object with the current orientation of the device:"]}),"\n",(0,r.jsx)(t,{data:i.N}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useOrientation(): {\n  angle: number;\n  type: string;\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})})}},89513:(e,n,t)=>{"use strict";t.d(n,{N:()=>a});var r=t(31085),o=t(93065),i=t(37905),s=t(14041),c=t(89571);let a={type:"code",component:function(){let{angle:e,type:n}=function(){let[e,n]=(0,s.useState)({angle:0,type:"landscape-primary"}),t=e=>{let t=e.currentTarget;n({angle:t?.angle||0,type:t?.type||"landscape-primary"})};return(0,c.o)(()=>(window.screen.orientation?.addEventListener("change",t),()=>window.screen.orientation?.removeEventListener("change",t)),[]),e}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.E,{children:["Angle: ",(0,r.jsx)(i.C,{children:e})]}),(0,r.jsxs)(o.E,{children:["Type: ",(0,r.jsx)(i.C,{children:n})]})]})},code:`
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
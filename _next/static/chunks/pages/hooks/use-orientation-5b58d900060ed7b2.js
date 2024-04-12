(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{14236:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-orientation",function(){return t(88812)}])},88812:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(52322),o=t(45392),i=t(48976),c=t(79016),a=t(33638);let u=(0,c.A)(a.us.useOrientation);function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useOrientation"})," returns an object with the current orientation of the device:"]}),"\n",(0,r.jsx)(t,{data:i.J}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useOrientation(): {\n  angle: number;\n  type: string;\n};\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...e,children:(0,r.jsx)(l,{...e})})}},48976:function(e,n,t){"use strict";t.d(n,{J:function(){return a}});var r=t(2784),Text=t(8582),o=t(45909),i=t(64261);let c=`
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
`,a={type:"code",component:function(){let{angle:e,type:n}=function(){let[e,n]=(0,r.useState)({angle:0,type:"landscape-primary"}),t=e=>{let t=e.currentTarget;n({angle:t?.angle||0,type:t?.type||"landscape-primary"})};return(0,i.Y)(()=>(window.screen.orientation?.addEventListener("change",t),()=>window.screen.orientation?.removeEventListener("change",t)),[]),e}();return r.createElement(r.Fragment,null,r.createElement(Text.x,null,"Angle: ",r.createElement(o.E,null,e)),r.createElement(Text.x,null,"Type: ",r.createElement(o.E,null,n)))},code:c}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=14236)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76311],{15753:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-eye-dropper",function(){return o(65524)}])},65524:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>E});var t=o(31085),n=o(71184),s=o(14041),c=o(55090),i=o(93065),p=o(56051),l=o(22962),a=o(14318),d=o(18351);let u={type:"code",component:function(){let[e,r]=(0,s.useState)(""),[o,n]=(0,s.useState)(null),{supported:u,open:h}=(0,d.X)(),x=async()=>{try{let{sRGBHex:e}=await h();r(e)}catch(e){n(e)}};return u?(0,t.jsxs)(p.Y,{children:[(0,t.jsx)(l.M,{variant:"default",onClick:x,children:(0,t.jsx)(c.A,{size:16,stroke:1.5})}),e?(0,t.jsxs)(p.Y,{gap:"xs",children:[(0,t.jsx)(a.q,{color:e}),(0,t.jsxs)(i.E,{children:["Picked color: ",e]})]}):(0,t.jsx)(i.E,{children:"Click the button to pick color"}),o&&(0,t.jsxs)(i.E,{c:"red",children:["Error: ",o?.message]})]}):(0,t.jsx)(i.E,{ta:"center",children:"EyeDropper API is not supported in your browser"})},code:`
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@mantine/hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size={16} stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}
`};var h=o(85954),x=o(38215);let k=(0,h.P)(x.XZ.useEyeDropper);function f(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:o}=r;return o||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"use-eye-dropper"})," hook provides an interface to work with ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),".\nCheck ",(0,t.jsx)(r.a,{href:"https://caniuse.com/mdn-api_eyedropper",children:"browser support"})," to learn which browsers support the API."]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"function useEyeDropper(): {\n  supported: boolean;\n  open: (options?: {\n    signal?: AbortSignal;\n  }) => Promise<{ sRGBHex: string }>;\n};\n"})})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(k,{...e,children:(0,t.jsx)(f,{...e})})}},55090:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},18351:(e,r,o)=>{"use strict";o.d(r,{X:()=>s});var t=o(14041),n=o(89571);function s(){let[e,r]=(0,t.useState)(!1);(0,n.o)(()=>{r("undefined"!=typeof window&&!navigator.userAgent.includes("OPR")&&"EyeDropper"in window)},[]);let o=(0,t.useCallback)((r={})=>e?new window.EyeDropper().open(r):Promise.resolve(void 0),[e]);return{supported:e,open:o}}}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(15753)),_N_E=e.O()}]);
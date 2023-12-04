(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2230],{40903:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(54764).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},50583:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-eye-dropper",function(){return o(88785)}])},88785:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return E}});var t=o(24246),n=o(71670),c=o(3916),s=o(30289),i=o(27378),Text=o(26569),l=o(22971),p=o(84246),u=o(16202),a=o(40903),d=o(37443);let h=`
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
        <IconColorPicker size="1rem" stroke={1.5} />
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
`,f={type:"code",component:function(){let[e,r]=(0,i.useState)(""),[o,t]=(0,i.useState)(null),{supported:n,open:c}=(0,d.s)(),s=async()=>{try{let{sRGBHex:e}=await c();r(e)}catch(e){t(e)}};return n?i.createElement(l.Z,null,i.createElement(p.A,{variant:"default",onClick:s},i.createElement(a.Z,{size:"1rem",stroke:1.5})),e?i.createElement(l.Z,{gap:"xs"},i.createElement(u.b,{color:e}),i.createElement(Text.x,null,"Picked color: ",e)):i.createElement(Text.x,null,"Click the button to pick color"),o&&i.createElement(Text.x,{c:"red"},"Error: ",o?.message)):i.createElement(Text.x,{ta:"center"},"EyeDropper API is not supported in your browser")},code:h},m=(0,c.A)(s.us.useEyeDropper);function x(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:o}=r;return o||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"use-eye-dropper"})," hook provides an interface to work with ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),".\nCheck ",(0,t.jsx)(r.a,{href:"https://caniuse.com/mdn-api_eyedropper",children:"browser support"})," to learn which browsers support the API."]}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"function useEyeDropper(): {\n  supported: boolean;\n  open: (options?: {\n    signal?: AbortSignal;\n  }) => Promise<{ sRGBHex: string }>;\n};\n"})})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(x,{...e})})}},37443:function(e,r,o){"use strict";o.d(r,{s:function(){return c}});var t=o(27378),n=o(62849);function c(){let[e,r]=(0,t.useState)(!1);(0,n.Y)(()=>{r("undefined"!=typeof window&&"EyeDropper"in window)},[]);let o=(0,t.useCallback)((r={})=>{if(e){let e=new window.EyeDropper;return e.open(r)}return Promise.resolve(void 0)},[e]);return{supported:e,open:o}}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=50583)}),_N_E=e.O()}]);
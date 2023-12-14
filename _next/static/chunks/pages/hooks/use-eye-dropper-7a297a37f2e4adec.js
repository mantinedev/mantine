(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2230],{40903:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(54764).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},50583:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-eye-dropper",function(){return o(88785)}])},88785:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return E}});var t=o(24246),n=o(71670),c=o(27378),s=o(40903),Text=o(26569),i=o(22971),l=o(84246),p=o(16202),u=o(37443);let a=`
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
`,d={type:"code",component:function(){let[e,r]=(0,c.useState)(""),[o,t]=(0,c.useState)(null),{supported:n,open:a}=(0,u.s)(),d=async()=>{try{let{sRGBHex:e}=await a();r(e)}catch(e){t(e)}};return n?c.createElement(i.Z,null,c.createElement(l.A,{variant:"default",onClick:d},c.createElement(s.Z,{size:"1rem",stroke:1.5})),e?c.createElement(i.Z,{gap:"xs"},c.createElement(p.b,{color:e}),c.createElement(Text.x,null,"Picked color: ",e)):c.createElement(Text.x,null,"Click the button to pick color"),o&&c.createElement(Text.x,{c:"red"},"Error: ",o?.message)):c.createElement(Text.x,{ta:"center"},"EyeDropper API is not supported in your browser")},code:a};var h=o(3916),f=o(30289);let m=(0,h.A)(f.us.useEyeDropper);function x(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:o}=r;return o||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"use-eye-dropper"})," hook provides an interface to work with ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),".\nCheck ",(0,t.jsx)(r.a,{href:"https://caniuse.com/mdn-api_eyedropper",children:"browser support"})," to learn which browsers support the API."]}),"\n",(0,t.jsx)(o,{data:d}),"\n",(0,t.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"function useEyeDropper(): {\n  supported: boolean;\n  open: (options?: {\n    signal?: AbortSignal;\n  }) => Promise<{ sRGBHex: string }>;\n};\n"})})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(x,{...e})})}},37443:function(e,r,o){"use strict";o.d(r,{s:function(){return c}});var t=o(27378),n=o(62849);function c(){let[e,r]=(0,t.useState)(!1);(0,n.Y)(()=>{r("undefined"!=typeof window&&"EyeDropper"in window)},[]);let o=(0,t.useCallback)((r={})=>{if(e){let e=new window.EyeDropper;return e.open(r)}return Promise.resolve(void 0)},[e]);return{supported:e,open:o}}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=50583)}),_N_E=e.O()}]);
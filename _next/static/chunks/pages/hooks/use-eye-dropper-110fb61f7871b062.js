(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2230],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},17455:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-eye-dropper",function(){return r(12287)}])},12287:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var o=r(85893),n=r(11151),s=r(19905),c=r(9904),i=r(67294),a=r(72039),l=r(16262),p=r(89363),u=r(221),d=r(40903),h=r(79067);let v=`
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
`,k={type:"code",component:function(){let[e,t]=(0,i.useState)(""),[r,o]=(0,i.useState)(null),{supported:n,open:s}=(0,h.s)(),c=async()=>{try{let{sRGBHex:e}=await s();t(e)}catch(e){o(e)}};return n?i.createElement(l.Z,null,i.createElement(p.A,{variant:"default",onClick:c},i.createElement(d.Z,{size:"1rem",stroke:1.5})),e?i.createElement(l.Z,{gap:"xs"},i.createElement(u.b,{color:e}),i.createElement(a.x,null,"Picked color: ",e)):i.createElement(a.x,null,"Click the button to pick color"),r&&i.createElement(a.x,{c:"red"},"Error: ",null==r?void 0:r.message)):i.createElement(a.x,{ta:"center"},"EyeDropper API is not supported in your browser")},code:v},f=(0,s.A)(c.us.useEyeDropper);function y(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,n.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-eye-dropper"})," hook provides an interface to work with ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),".\nCheck ",(0,o.jsx)(t.a,{href:"https://caniuse.com/mdn-api_eyedropper",children:"browser support"})," to learn which browsers support the API."]}),"\n",(0,o.jsx)(r,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useEyeDropper(): {\n  supported: boolean;\n  open: (options?: { signal?: AbortSignal }) => Promise<{ sRGBHex: string }>;\n};\n"})})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(f,Object.assign({},e,{children:(0,o.jsx)(y,e)}))}},40903:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(54764).Z)("color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},79067:function(e,t,r){"use strict";r.d(t,{s:function(){return s}});var o=r(67294),n=r(67510);function s(){let[e,t]=(0,o.useState)(!1);(0,n.Y)(()=>{t("undefined"!=typeof window&&"EyeDropper"in window)},[]);let r=(0,o.useCallback)((t={})=>{if(e){let e=new window.EyeDropper;return e.open(t)}return Promise.resolve(void 0)},[e]);return{supported:e,open:r}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=17455)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76311],{1798:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9184:(e,t,r)=>{"use strict";r.d(t,{Q:()=>c});var o=r(6029),s=r(55729),n=r(66112),p=r(45208),a=r(57414),i=r(44572),d=r(11508),l=r(22666);let c={type:"code",component:function(){let[e,t]=(0,s.useState)(""),[r,c]=(0,s.useState)(null),{supported:h,open:u}=(0,l.X)(),y=async()=>{try{let{sRGBHex:e}=await u();t(e)}catch(e){c(e)}};return h?(0,o.jsxs)(a.Y,{children:[(0,o.jsx)(i.M,{variant:"default",onClick:y,size:"xl",radius:"md",children:(0,o.jsx)(n.A,{size:28,stroke:1.5})}),e?(0,o.jsxs)(a.Y,{gap:"xs",children:[(0,o.jsx)(d.q,{color:e}),(0,o.jsxs)(p.E,{children:["Picked color: ",e]})]}):(0,o.jsx)(p.E,{children:"Click the button to pick color"}),r&&(0,o.jsxs)(p.E,{c:"red",children:["Error: ",r?.message]})]}):(0,o.jsx)(p.E,{ta:"center",children:"EyeDropper API is not supported in your browser"})},code:`
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
      <ActionIcon variant="default" onClick={pickColor} size="xl" radius="md">
        <IconViewfinder size={28} stroke={1.5} />
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
`,centered:!0}},22666:(e,t,r)=>{"use strict";r.d(t,{X:()=>n});var o=r(55729),s=r(93430);function n(){let[e,t]=(0,o.useState)(!1);(0,s.o)(()=>{t("undefined"!=typeof window&&!navigator.userAgent.includes("OPR")&&"EyeDropper"in window)},[]);let r=(0,o.useCallback)((t={})=>e?new window.EyeDropper().open(t):Promise.resolve(void 0),[e]);return{supported:e,open:r}}},24532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(6029),s=r(16285),n=r(9184),p=r(38547),a=r(5262);let i=(0,p.P)(a.XZ.useEyeDropper);function d(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-eye-dropper"})," hook provides an interface to work with ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),".\nCheck ",(0,o.jsx)(t.a,{href:"https://caniuse.com/mdn-api_eyedropper",children:"browser support"})," to learn which browsers support the API."]}),"\n",(0,o.jsx)(r,{data:n.Q}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"interface EyeDropperOpenOptions {\n  signal?: AbortSignal;\n}\n\ninterface EyeDropperOpenReturnType {\n  sRGBHex: string;\n}\n\ninterface UseEyeDropperReturnValue {\n  supported: boolean;\n  open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;\n}\n\nfunction useEyeDropper(): UseEyeDropperReturnValue;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"EyeDropperOpenOptions"}),", ",(0,o.jsx)(t.code,{children:"EyeDropperOpenReturnType"})," and ",(0,o.jsx)(t.code,{children:"UseEyeDropperReturnValue"})," types are exported from ",(0,o.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import type {\n  EyeDropperOpenOptions,\n  EyeDropperOpenReturnType,\n  UseEyeDropperReturnValue,\n} from '@mantine/hooks';\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})})}},24583:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},60561:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-eye-dropper",function(){return r(24532)}])},65433:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},66112:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","viewfinder","Viewfinder",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 3l0 4",key:"svg-1"}],["path",{d:"M12 21l0 -3",key:"svg-2"}],["path",{d:"M3 12l4 0",key:"svg-3"}],["path",{d:"M21 12l-3 0",key:"svg-4"}],["path",{d:"M12 12l0 .01",key:"svg-5"}]])},84276:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=60561)),_N_E=e.O()}]);
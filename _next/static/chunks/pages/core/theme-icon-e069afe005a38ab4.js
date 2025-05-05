(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22923],{67601:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return o(81181)}])},81181:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>C});var t=o(31085),a=o(71184),n=o(33102),i=o(29225);let l={type:"configurator",component:function(e){return(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i.L,{...e,children:(0,t.jsx)(n.A,{style:{width:"70%",height:"70%"}})})})},code:`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var s=o(45854);let c={type:"configurator",component:function(e){return(0,t.jsx)(i.L,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,t.jsx)(s.A,{})})},code:e=>`
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`,centered:!0,controls:o(61866).n};var d=o(92854),v=o(20132),h=o(26762),p=o(81754),u=o(16560),m=o(69842),g=o(92408),y=o(56051);let k=e=>{let r=(0,h.v)(e),o=(0,p.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,u.B)(o.value,.1),hover:(0,u.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,m.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},f={type:"code",component:function(){return(0,t.jsx)(g.nW,{theme:{variantColorResolver:k},children:(0,t.jsxs)(y.Y,{children:[(0,t.jsx)(i.L,{color:"lime.4",variant:"filled",size:"lg",children:(0,t.jsx)(n.A,{size:20,stroke:1.5})}),(0,t.jsx)(i.L,{color:"orange",variant:"light",size:"lg",children:(0,t.jsx)(d.A,{size:20,stroke:1.5})}),(0,t.jsx)(i.L,{variant:"danger",size:"lg",children:(0,t.jsx)(v.A,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <ThemeIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <IconError404 size={20} />
        </ThemeIcon>
      </Group>
    </MantineProvider>
  );
}
`},M={type:"code",component:function(){return(0,t.jsxs)(y.Y,{children:[(0,t.jsx)(i.L,{size:"lg",color:"lime.4",children:(0,t.jsx)(d.A,{size:20})}),(0,t.jsx)(i.L,{size:"lg",color:"lime.4",autoContrast:!0,children:(0,t.jsx)(d.A,{size:20})})]})},code:`
import { IconFingerprint } from '@tabler/icons-react';
import { ThemeIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ThemeIcon size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" color="lime.4" autoContrast>
        <IconFingerprint size={20} />
      </ThemeIcon>
    </Group>
  );
}
`,centered:!0};var I=o(18675),b=o(20017);let x=(0,I.P)(b.XZ.ThemeIcon);function A(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components},{AutoContrast:o,Demo:n,Gradient:i}=r;return o||j("AutoContrast",!0),n||j("Demo",!0),i||j("Gradient",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:l}),"\n",(0,t.jsx)(i,{component:"ThemeIcon"}),"\n",(0,t.jsx)(n,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,t.jsxs)(r.p,{children:["You can customize colors for ",(0,t.jsx)(r.code,{children:"ThemeIcon"})," and other components variants by adding\n",(0,t.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(o,{component:"ThemeIcon"}),"\n",(0,t.jsx)(n,{data:M})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(x,{...e,children:(0,t.jsx)(A,{...e})})}function j(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},20132:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},11749:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},92854:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},45854:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},89843:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},33102:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},55764:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},61866:(e,r,o)=>{"use strict";o.d(r,{n:()=>t});let t=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},29225:(e,r,o)=>{"use strict";o.d(r,{L:()=>p});var t=o(31085);o(14041);var a=o(33450),n=o(7098),i=o(29686),l=o(69564),s=o(34056),c=o(6754),d={root:"m_7341320d"};let v={},h=(0,n.V)((e,{size:r,radius:o,variant:t,gradient:n,color:i,autoContrast:l})=>{let s=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:n,variant:t||"filled",autoContrast:l});return{root:{"--ti-size":(0,a.YC)(r,"ti-size"),"--ti-radius":void 0===o?void 0:(0,a.nJ)(o),"--ti-bg":i||t?s.background:void 0,"--ti-color":i||t?s.color:void 0,"--ti-bd":i||t?s.border:void 0}}}),p=(0,c.P9)((e,r)=>{let o=(0,i.Y)("ThemeIcon",v,e),{classNames:a,className:n,style:c,styles:p,unstyled:u,vars:m,autoContrast:g,...y}=o,k=(0,l.I)({name:"ThemeIcon",classes:d,props:o,className:n,style:c,classNames:a,styles:p,unstyled:u,vars:m,varsResolver:h});return(0,t.jsx)(s.a,{ref:r,...k("root"),...y})});p.classes=d,p.displayName="@mantine/core/ThemeIcon"}},e=>{var r=r=>e(e.s=r);e.O(0,[18675,90636,46593,38792],()=>r(67601)),_N_E=e.O()}]);
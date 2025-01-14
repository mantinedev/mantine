(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{49978:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return o(7604)}])},7604:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return T}});var n=o(52322),t=o(45392),a=o(40289),i=o(67925);let l={type:"configurator",component:function(e){return(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(i.k,{...e,children:(0,n.jsx)(a.Z,{style:{width:"70%",height:"70%"}})})})},code:`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var c=o(35913);let s={type:"configurator",component:function(e){return(0,n.jsx)(i.k,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,n.jsx)(c.Z,{})})},code:e=>`
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
`,centered:!0,controls:o(63048).P};var d=o(74315),u=o(34706),h=o(9197),m=o(46403),v=o(20754),p=o(8943),g=o(68755),f=o(93010);let y=e=>{let r=(0,h.B)(e),o=(0,m.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,v.m)(o.value,.1),hover:(0,v.m)(o.value,.15),border:`1px solid ${o.value}`,color:(0,p._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},b={type:"code",component:function(){return(0,n.jsx)(g.M2,{theme:{variantColorResolver:y},children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(i.k,{color:"lime.4",variant:"filled",size:"lg",children:(0,n.jsx)(a.Z,{size:20,stroke:1.5})}),(0,n.jsx)(i.k,{color:"orange",variant:"light",size:"lg",children:(0,n.jsx)(d.Z,{size:20,stroke:1.5})}),(0,n.jsx)(i.k,{variant:"danger",size:"lg",children:(0,n.jsx)(u.Z,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:`
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
`},I={type:"code",component:function(){return(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(i.k,{size:"lg",color:"lime.4",children:(0,n.jsx)(d.Z,{size:20})}),(0,n.jsx)(i.k,{size:"lg",color:"lime.4",autoContrast:!0,children:(0,n.jsx)(d.Z,{size:20})})]})},code:`
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
`,centered:!0};var k=o(54078),x=o(15019);let j=(0,k.A)(x.us.ThemeIcon);function C(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.a)(),...e.components},{AutoContrast:o,Demo:a,Gradient:i}=r;return o||z("AutoContrast",!0),a||z("Demo",!0),i||z("Gradient",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:l}),"\n",(0,n.jsx)(i,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:s}),"\n",(0,n.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can customize colors for ",(0,n.jsx)(r.code,{children:"ThemeIcon"})," and other components variants by adding\n",(0,n.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,n.jsx)(a,{data:b}),"\n",(0,n.jsx)(o,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:I})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(j,{...e,children:(0,n.jsx)(C,{...e})})}function z(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},34706:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},74315:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},35913:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},40289:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},63048:function(e,r,o){"use strict";o.d(r,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},67925:function(e,r,o){"use strict";o.d(r,{k:function(){return m}});var n=o(52322);o(2784);var t=o(91482),a=o(11200),i=o(38483),l=o(46690),c=o(28559),s=o(82027),d={root:"m_7341320d"};let u={},h=(0,a.Z)((e,{size:r,radius:o,variant:n,gradient:a,color:i,autoContrast:l})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:l});return{root:{"--ti-size":(0,t.ap)(r,"ti-size"),"--ti-radius":void 0===o?void 0:(0,t.H5)(o),"--ti-bg":i||n?c.background:void 0,"--ti-color":i||n?c.color:void 0,"--ti-bd":i||n?c.border:void 0}}}),m=(0,s.d5)((e,r)=>{let o=(0,i.w)("ThemeIcon",u,e),{classNames:t,className:a,style:s,styles:m,unstyled:v,vars:p,autoContrast:g,...f}=o,y=(0,l.y)({name:"ThemeIcon",classes:d,props:o,className:a,style:s,classNames:t,styles:m,unstyled:v,vars:p,varsResolver:h});return(0,n.jsx)(c.x,{ref:r,...y("root"),...f})});m.classes=d,m.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=49978)}),_N_E=e.O()}]);
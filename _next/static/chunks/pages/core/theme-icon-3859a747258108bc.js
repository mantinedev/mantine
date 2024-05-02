(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{46671:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(99882).Z)("error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},71091:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(99882).Z)("fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},87875:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(99882).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},82408:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(99882).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},49978:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return o(7604)}])},7604:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return Z}});var n=o(52322),t=o(45392),a=o(82408),i=o(67925);let l=`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,c={type:"configurator",component:function(e){return(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(i.k,{...e,children:(0,n.jsx)(a.Z,{style:{width:"70%",height:"70%"}})})})},code:l,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var s=o(87875),d=o(63048);let u={type:"configurator",component:function(e){return(0,n.jsx)(i.k,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,n.jsx)(s.Z,{})})},code:e=>`
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
`,centered:!0,controls:d.P};var m=o(71091),h=o(46671),v=o(9197),p=o(46403),g=o(20754),f=o(58898),y=o(8943),b=o(68755),I=o(93010);let k=`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
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
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
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
`,x=e=>{let r=(0,v.B)(e),o=(0,p.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,g.m)(o.value,.1),hover:(0,g.m)(o.value,.15),border:`${(0,f.h)(1)} solid ${o.value}`,color:(0,y._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},j={type:"code",component:function(){return(0,n.jsx)(b.M2,{theme:{variantColorResolver:x},children:(0,n.jsxs)(I.Z,{children:[(0,n.jsx)(i.k,{color:"lime.4",variant:"filled",size:"lg",children:(0,n.jsx)(a.Z,{size:20,stroke:1.5})}),(0,n.jsx)(i.k,{color:"orange",variant:"light",size:"lg",children:(0,n.jsx)(m.Z,{size:20,stroke:1.5})}),(0,n.jsx)(i.k,{variant:"danger",size:"lg",children:(0,n.jsx)(h.Z,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:k},C=`
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
`,T={type:"code",component:function(){return(0,n.jsxs)(I.Z,{children:[(0,n.jsx)(i.k,{size:"lg",color:"lime.4",children:(0,n.jsx)(m.Z,{size:20})}),(0,n.jsx)(i.k,{size:"lg",color:"lime.4",autoContrast:!0,children:(0,n.jsx)(m.Z,{size:20})})]})},code:C,centered:!0};var z=o(79016),_=o(33638);let M=(0,z.A)(_.us.ThemeIcon);function V(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.a)(),...e.components},{AutoContrast:o,Demo:a,Gradient:i}=r;return o||w("AutoContrast",!0),a||w("Demo",!0),i||w("Gradient",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:c}),"\n",(0,n.jsx)(i,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can customize colors for ",(0,n.jsx)(r.code,{children:"ThemeIcon"})," and other components variants by adding\n",(0,n.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,n.jsx)(a,{data:j}),"\n",(0,n.jsx)(o,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:T})]})}function Z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(M,{...e,children:(0,n.jsx)(V,{...e})})}function w(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63048:function(e,r,o){"use strict";o.d(r,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},67925:function(e,r,o){"use strict";o.d(r,{k:function(){return h}});var n=o(52322);o(2784);var t=o(91482),a=o(11200),i=o(38483),l=o(46690),c=o(28559),s=o(82027),d={root:"m_7341320d"};let u={},m=(0,a.Z)((e,{size:r,radius:o,variant:n,gradient:a,color:i,autoContrast:l})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:l});return{root:{"--ti-size":(0,t.ap)(r,"ti-size"),"--ti-radius":void 0===o?void 0:(0,t.H5)(o),"--ti-bg":i||n?c.background:void 0,"--ti-color":i||n?c.color:void 0,"--ti-bd":i||n?c.border:void 0}}}),h=(0,s.d)((e,r)=>{let o=(0,i.w)("ThemeIcon",u,e),{classNames:t,className:a,style:s,styles:h,unstyled:v,vars:p,autoContrast:g,...f}=o,y=(0,l.y)({name:"ThemeIcon",classes:d,props:o,className:a,style:s,classNames:t,styles:h,unstyled:v,vars:p,varsResolver:m});return(0,n.jsx)(c.x,{ref:r,...y("root"),...f})});h.classes=d,h.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=49978)}),_N_E=e.O()}]);
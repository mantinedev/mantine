(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{46671:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(99882).Z)("error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},71091:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(99882).Z)("fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},87875:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(99882).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},82408:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(99882).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},49978:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return o(7604)}])},7604:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return j}});var t=o(52322),n=o(45392),a=o(2784),i=o(82408),l=o(67925);let c=`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,s={type:"configurator",component:function(e){return a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement(l.k,{...e},a.createElement(i.Z,{style:{width:"70%",height:"70%"}})))},code:c,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var d=o(87875),u=o(63048);let m={type:"configurator",component:function(e){return a.createElement(l.k,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},a.createElement(d.Z,null))},code:e=>`
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
`,centered:!0,controls:u.P};var v=o(71091),p=o(46671),h=o(9197),g=o(46403),f=o(20754),y=o(58898),b=o(8943),I=o(68755),k=o(93010);let C=`
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
`,T=e=>{let r=(0,h.B)(e),o=(0,g.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,f.m)(o.value,.1),hover:(0,f.m)(o.value,.15),border:`${(0,y.h)(1)} solid ${o.value}`,color:(0,b._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},E={type:"code",component:function(){return a.createElement(I.M2,{theme:{variantColorResolver:T}},a.createElement(k.Z,null,a.createElement(l.k,{color:"lime.4",variant:"filled",size:"lg"},a.createElement(i.Z,{size:20,stroke:1.5})),a.createElement(l.k,{color:"orange",variant:"light",size:"lg"},a.createElement(v.Z,{size:20,stroke:1.5})),a.createElement(l.k,{variant:"danger",size:"lg"},a.createElement(p.Z,{size:20,stroke:1.5}))))},centered:!0,defaultExpanded:!1,code:C},z=`
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
`,_={type:"code",component:function(){return a.createElement(k.Z,null,a.createElement(l.k,{size:"lg",color:"lime.4"},a.createElement(v.Z,{size:20})),a.createElement(l.k,{size:"lg",color:"lime.4",autoContrast:!0},a.createElement(v.Z,{size:20})))},code:z,centered:!0};var x=o(79016),M=o(33638);let V=(0,x.A)(M.us.ThemeIcon);function Z(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{AutoContrast:o,Demo:a,Gradient:i}=r;return o||w("AutoContrast",!0),a||w("Demo",!0),i||w("Gradient",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:s}),"\n",(0,t.jsx)(i,{component:"ThemeIcon"}),"\n",(0,t.jsx)(a,{data:m}),"\n",(0,t.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,t.jsxs)(r.p,{children:["You can customize colors for ",(0,t.jsx)(r.code,{children:"ThemeIcon"})," and other components variants by adding\n",(0,t.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,t.jsx)(a,{data:E}),"\n",(0,t.jsx)(o,{component:"ThemeIcon"}),"\n",(0,t.jsx)(a,{data:_})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(V,{...e,children:(0,t.jsx)(Z,{...e})})}function w(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63048:function(e,r,o){"use strict";o.d(r,{P:function(){return t}});let t=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},67925:function(e,r,o){"use strict";o.d(r,{k:function(){return v}});var t=o(2784),n=o(91482),a=o(11200),i=o(38483),l=o(62378),c=o(28559),s=o(82027),d={root:"m_7341320d"};let u={},m=(0,a.Z)((e,{size:r,radius:o,variant:t,gradient:a,color:i,autoContrast:l})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:a,variant:t||"filled",autoContrast:l});return{root:{"--ti-size":(0,n.ap)(r,"ti-size"),"--ti-radius":void 0===o?void 0:(0,n.H5)(o),"--ti-bg":i||t?c.background:void 0,"--ti-color":i||t?c.color:void 0,"--ti-bd":i||t?c.border:void 0}}}),v=(0,s.d)((e,r)=>{let o=(0,i.w)("ThemeIcon",u,e),{classNames:n,className:a,style:s,styles:v,unstyled:p,vars:h,autoContrast:g,...f}=o,y=(0,l.y)({name:"ThemeIcon",classes:d,props:o,className:a,style:s,classNames:n,styles:v,unstyled:p,vars:h,varsResolver:m});return t.createElement(c.x,{ref:r,...y("root"),...f})});v.classes=d,v.displayName="@mantine/core/ThemeIcon"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=49978)}),_N_E=e.O()}]);